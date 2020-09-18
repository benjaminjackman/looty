package looty
package views

import org.scalajs.jquery.{JQuery, JQueryStatic}
import util.DurationText

import scala.scalajs.js
import looty.poeapi.PoeTypes.{AnyItem, CharacterInfo}
import looty.poeapi.PoeCacher
import looty.views.CheckpointFmts.format2


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/31/13 2:11 PM
//////////////////////////////////////////////////////////////


object GemId {
  def fromItem(item: AnyItem): Option[GemId] = {
    for {inventoryId <- item.inItem.toOption.flatMap(_.inventoryId.toOption)
         socket <- item.socket.toOption
    } yield {
      //item -> gem
      GemId(
        name = item.typeLine,
        inventoryId = inventoryId,
        socket = socket
      )
    }
  }
}

case class GemId(
  name: String,
  inventoryId: String,
  socket: Double) extends Ordered[GemId] {
  override def compare(that: GemId): Int = implicitly[Ordering[(String, String, Double)]].compare(tupled, that.tupled)
  def tupled = (name, inventoryId, socket)
}

object GemCheckpoint {
  def fromItem(item: AnyItem): Option[GemCheckpoint] = {
    for {
      id <- GemId.fromItem(item)
      (lvl, tot, forLvl) <- item.getXpProgress
    } yield {
      GemCheckpoint(
        id = id,
        level = lvl,
        xpTotal = tot,
        xpForLevel = forLvl)
    }
  }
}

case class GemCheckpoint(
  id: GemId,
  level: Int,
  xpTotal: Long,
  xpForLevel: Long) {
  def progressPct = xpTotal.toDouble / xpForLevel
  def xpRemaining = xpForLevel - xpTotal
  def getXpTotal = xpTotal
  def getXpForLevel = xpForLevel
    def xpTotalLevelRemaining = {
    import looty.views.CheckpointFmts._
    val t = format(xpTotal)
    val l = format(xpForLevel)
    val r = format(xpRemaining)
    s"$t/$l($r)"
  }
}

case class GemCheckpointDelta(
  elapsedMs: Long,
  older: GemCheckpoint,
  newer: GemCheckpoint) {
  def xpGained: Long = newer.xpTotal - older.xpTotal
  def xpPerHour: Double = xpPerMs * CheckpointFmts.msPerHour
  def xpPerMs: Double = xpGained.toDouble / elapsedMs
  def msToLevel: String = {
    val ready = (newer.xpRemaining / xpPerMs).toLong
    if ( ready == 0) {
      "ready"
    } else {
      DurationText.durationMs(ready, 2)
    }
  }
  def runsToLevel: String = {
    val tmp: Double = newer.xpRemaining / xpGained.toDouble
    if (tmp.isNaN ) {
      "---"
    } else {
      format2(tmp).toString
    }
  }
}

object Checkpoint {
  def fromItems(utcMs: Long, items: Seq[AnyItem]): Checkpoint = {
    val gems = items.flatMap(GemCheckpoint.fromItem).toVector
    Checkpoint(utcMs, gems)
  }
}

case class Checkpoint(utcMs: Long, gems: Vector[GemCheckpoint]) {
  def replacing(older: Checkpoint) = CheckpointDelta(older = older, newer = this)
}

object CheckpointFmts {
  val msPerHour = 60 * 60 * 1000

  val fmt = global.d3.format(",f")
  def format(d: Double): String = {
    fmt(d).toString
  }
  val fmt2 = global.d3.format(".2f")
  def format2(d: Double): String = {
    fmt2(d).toString
  }

}

case class CheckpointDelta(older: Checkpoint, newer: Checkpoint) {
  def elapsedMs = newer.utcMs - older.utcMs
  def changedGems: Vector[GemCheckpointDelta] = {
    val elapsedMs = newer.utcMs - older.utcMs
    newer.gems
      .flatMap(g => older.gems.find(_.id =?= g.id).map(o => GemCheckpointDelta(elapsedMs, older = o, newer = g)))
      .sortBy(cp => (cp.newer.xpRemaining, cp.newer.id))
  }
  //  def removedGems = ???
  //  def addedGems = ???

  def toHtml: JQuery = {
    import looty.views.CheckpointFmts._
    val $html = jq("""<div></div>""")

    val $summary = jq("""<div class="info"></div>""")
    val startStr = js.Dynamic.newInstance(global.Date)(older.utcMs).toString
    val endStr = js.Dynamic.newInstance(global.Date)(newer.utcMs).toString
    val elapsedMsStr = DurationText.durationMs(elapsedMs, 2)
    val totalXpStr = format(changedGems.map(_.xpGained).sum)

    $summary.append(
      s"""<span id="start">Start: $startStr</span>
         |<span id="end">End: $endStr</span>
				 |<span id="elapsed">Elapsed: $elapsedMsStr</span>
				 |<span id="total">Total Xp: $totalXpStr</span>""".stripMargin)
    $html.append($summary)

    val $table = jq("""<table id="xp-progress"></table>""")
    $html.append($table)

    $table.append("<thead>" +
      "<th>Name</th>" +
      "<th>Slot - socket nr.</th>" +
      "<th>Level</th>" +
      "<th>Remaining Xp / Progress</th>" +
      "<th>Xp In Run</th>" +
      "<th>Xp/Hour</th>" +
      "<th>Time To Level</th>" +
      "<th>Runs To Level</th>" +
      "</thead>")
    val $tbody = jq("<tbody></tbody>")
    $table.append($tbody)
    changedGems.foreach { gem =>
      $tbody.append(s"<tr>" +
        s"<td>${gem.newer.id.name}</td>" +
        s"<td>${gem.newer.id.inventoryId} - ${gem.newer.id.socket}</td>" +
        s"<td>${gem.newer.level}</td>" +
        s"<td><span class='progress-value'>${format(gem.newer.xpRemaining)}</span>" +
            s"<span class='progress-percent'>${format2(gem.newer.progressPct * 100)}</span>" +
            s"<progress class='gem-xp' max='${gem.newer.getXpForLevel}' value='${gem.newer.getXpTotal}'></progress> </td>" +
        s"<td>${format(gem.xpGained)}</td>" +
        s"<td>${format(gem.xpPerHour)}</td>" +
        s"<td>${gem.msToLevel}</td>" +
        s"<td>${gem.runsToLevel}</td>" +
        s"</tr>")
    }

    $html
  }
}
case class Session(character: CharacterInfo, checkpoints: Vector[Checkpoint]) {
  def addItems(items: Seq[AnyItem]): Session = {
    val nowUtcMs = js.Dynamic.newInstance(global.Date)().getTime().asInstanceOf[Double]
    val checkpoint = Checkpoint.fromItems(nowUtcMs.toLong, items)
    this.copy(character, checkpoints :+ checkpoint)
  }
}


class XpView(implicit val pc: PoeCacher) extends View {
	val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  var curChar   : Option[CharacterInfo] = None
  var curSession: Option[Session]       = None
  val itemDetailHover = new ItemDetailHover()

  val stepsListXp = jq("<ol class='steps'></ol>")
  def addStep(s:String, el: JQuery) = {
    el.append(s"<li>${s}</li>")
  }

	override def start(ele: JQuery): Unit = {
		var el = ele.append("<div id='xp'></div>")
		el = jq("#xp")
    el.append("<h2>Gem XP Tracker</h2>")
    el.append("Please note that the Path of Exile API <b>only</b> provides updates your inventory after you <b>change zones.</b> " +
      "Therefore the suggested way to use this tool is to: " )

    addStep("Play Path of Exile in a way that makes alt-tabbing easy (windowed full screen works well for me), or have this open on a second machine / monitor", stepsListXp)
    addStep("Select the character you want to track", stepsListXp)
    addStep("Press 'New Session'", stepsListXp)
    addStep("Just before you go on your run press 'Add Checkpoint", stepsListXp)
    addStep("Do your run and don't move around any gems / items you have equipped. Gems are compared by location.", stepsListXp)
    addStep("After you have completed your run and have changed zones press 'Add Checkpoint'", stepsListXp)
    addStep("Goto 4, repeat until you've earned enough win that you can pay to lose.", stepsListXp)

    el.append(stepsListXp)
    el.append("<p>You can add as many checkpoint as you like.<br>Currently the information is not saved, " +
      "however in the future the plan is to save it and notes you record in a journal. For now just use it as a fun way to see how fast you are progressing.</p>")
    val btns = jq("""<div id="btns"></div>""")
    el.append(btns)
    //Add a list of buttons one per character
    for {
      chars <- pc.getChars()
      char <- chars.sortBy(_.name.toUpperCase())
    } {
      val btn = jq(s"""<button>${char.name}</button>""")

      btns.append(btn)
      btn.on("click", (e: js.Any) => {
        btns.children().css("background-color","buttonface")
        btn.css("background-color","rgb(117, 220, 255)")
        setChar(char)
        display()
      })
    }
    el.append("""<div id="session-buttons"></div>""")
    val sessionBtns = jq("#session-buttons")
    val startSessionBtn = jq("""<button title="Starts a session">New Session</button>""")
    sessionBtns.append(startSessionBtn)

    startSessionBtn.on("click", () => {tryBeginSession()})
    val addCheckpointBtn = jq("""<button title="Adds a point of interest in the session">Add Checkpoint</button>""")
    sessionBtns.append(addCheckpointBtn)
    addCheckpointBtn.on("click", () => {tryAddCheckpoint()})
    el.append("""<div id="xp-session"></div>""")

  }

  def tryBeginSession() {
    curChar match {
      case None => Alerter.error("Please select a character.")
      case Some(char) =>
        curSession = Some(Session(char, Vector.empty))
        tryAddCheckpoint()
    }
  }

  def tryAddCheckpoint() {
    curSession match {
      case None => Alerter.error("Please press start session button.")
      case Some(session) =>
        pc.getInv(session.character.name, forceNetRefresh = true).foreach { inv =>
          //Compare the gems to the other gems we have already for this character
          curSession = Some(session.addItems(inv.allItems(Some(session.character.name))))
          display()
        }

    }
  }

  def display() {
    val el = jq("#xp-session")
    el.empty()
    curSession.foreach { session =>
      el.append(s"""<h2>${session.character.name}</h2>""")
      if (session.checkpoints.size >= 2) {
        session.checkpoints.sliding(2).map(w => CheckpointDelta(w(0), w(1))).toList.reverse.foreach { delta =>
          el.append(delta.toHtml)
        }
      } else if (session.checkpoints.size == 1) {
        el.append("<br>Press add checkpoint to add another checkpoint.<br>")
      } else {
        el.append("<br>Press new session when ready to begin.<br>")
      }

    }
  }

  def clear() {
    curChar = None
    curSession = None
  }

  def setChar(info: CharacterInfo) {
    clear()
    curChar = Some(info)
  }

  def stop() {

  }

  val xp = jq("#xp-progress")


//  private def addMouseover() {
//
//    xp.onMouseEnter.subscribe((e: js.Dynamic, args: js.Any) => {
//
//    val row = xp.getCellFromEvent(e).row
//    if (row.nullSafe.isDefined) {
//      itemDetailHover.setFirstItem(Some(grid.getDataItem(row).asInstanceOf[ComputedItem]))
//      itemDetailHover.show(
//      x = e.clientX.asInstanceOf[Double],
//      y = e.clientY.asInstanceOf[Double],
//      compare = true
//      )
//    }
//  })
//    xp.onMouseLeave.subscribe((e: js.Dynamic, args: js.Any) => {
//      itemDetailHover.hide()
//    })
//  }
}
