package looty
package views

import org.scalajs.jquery.{JQuery, JQueryStatic}
import looty.model.PoeCacher
import scala.scalajs.js
import looty.poeapi.PoeTypes.{AnyItem, CharacterInfo}
import cgta.ojs.io.{DurationText, StoreMaster}
import looty.views.GemHistory.GemHistoryExtensions


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/31/13 2:11 PM
//////////////////////////////////////////////////////////////
object GemProgress {
  def fromItem(item: AnyItem): Option[GemProgress] = {
    val time = new js.Date().getTime()
    item.getXpProgress.map { case (l, c, n) =>
      apply(time = time.toLong, level = l, xpGained = c, xpForLevelUp = n)
    }
  }

  def apply(time: Long, level: Int, xpGained: Long, xpForLevelUp: Long) = {
    val x = newObject
    x.time = time
    x.level = level
    x.xpGained = xpGained
    x.xpForLevelUp = xpForLevelUp
    x.asInstanceOf[GemProgress]
  }

  implicit class GemProgressExtensions(val x: GemProgress) extends AnyVal {
    def progress: Double = x.xpGained / x.xpForLevelUp
    def xpToGo: Double = x.xpForLevelUp - x.xpGained
  }
}

class GemProgress private() extends js.Object {
  val time        : js.Number = ???
  val level       : js.Number = ???
  val xpGained    : js.Number = ???
  val xpForLevelUp: js.Number = ???
}

object GemId {
  def fromItem(item: AnyItem): Option[GemId] = {
    for {inventoryId <- item.inItem.toOption.flatMap(_.inventoryId.toOption)
         socket <- item.socket.toOption
    } yield {
      apply(
        inventoryId = inventoryId,
        socket = socket,
        name = item.typeLine
      )
    }
  }

  def apply(inventoryId: js.String, socket: js.Number, name: js.String) = {
    val x = newObject
    x.inventoryId = inventoryId
    x.socket = socket
    x.name = name
    x.asInstanceOf[GemId]
  }

  implicit class GemIdExtensions(val x: GemId) extends AnyVal {
    def equiv(that: GemId): Boolean =
      x.inventoryId == that.inventoryId &&
          x.socket == that.socket &&
          x.name == that.name

  }
}
class GemId private() extends js.Object {
  val inventoryId: js.String = ???
  val socket     : js.Number = ???
  val name       : js.String = ???
}

object GemHistory {
  def empty(id: GemId) = {
    val x = newObject
    x.id = id
    x.gemProgressions = new js.Array()
    x.runs = new js.Array()
    x.asInstanceOf[GemHistory]
  }
  implicit class GemHistoryExtensions(val x: GemHistory) extends AnyVal {
    def add(g: AnyItem) = {
      GemProgress.fromItem(g).foreach { gp =>
        if (x.gemProgressions.isUndefined) x.gemProgressions = new js.Array()
        x.gemProgressions.push(gp)
      }
    }
    def current = x.gemProgressions.last
    def forTime(time: js.Number): Option[GemProgress] = {
      x.gemProgressions.toList.takeWhile(_.time <= time).lastOption
    }
    def xpToGo = x.current.xpToGo

  }
}

class GemHistory private() extends js.Object {


  val id             : GemId                 = ???
  var gemProgressions: js.Array[GemProgress] = ???
  val runs           : js.Array[js.Number]   = ???
}
object CharacterGemHistory {
  def empty(character: js.String) = {
    val x = newObject
    x.character = character
    x.gems = new js.Array[GemHistory]()
    x.runs = new js.Array[js.Number]()
    x.asInstanceOf[CharacterGemHistory]
  }

  implicit class CharacterGemHistoryExtensions(val x: CharacterGemHistory) extends AnyVal {
    def updateGems(gems: List[AnyItem]) = {
      val oldGems = x.gems.toList
      val newGems = new js.Array[GemHistory]()
      for {gem <- gems
           id <- GemId.fromItem(gem)
      } {
        val oldGem = oldGems.find(_.id.equiv(id))
        val hist = oldGem.getOrElse(GemHistory.empty(id))
        hist.add(gem)
        newGems.push(hist)
      }
      x.gems = newGems
    }
    def addRun() = {
      if (x.runs.isUndefined) {
        x.runs = new js.Array()
      }
      x.runs.push(new js.Date().getTime())
    }
    def getGemWithMostXpToGoToNextLevel() = x.gems.toList.maxByOpt(_.current.xpToGo)
    def gemsAtTime(utcMs: js.Number): List[(GemHistory, GemProgress)] =
      x.gems.toList.map(x => x.forTime(utcMs).toList.map(x -> _)).flatten
  }
}

class CharacterGemHistory private() extends js.Object {

  val character: js.String            = ???
  var gems     : js.Array[GemHistory] = ???
  var runs     : js.Array[js.Number]  = ???
}

class XpView extends View {
  //Get a poe cacher
  val jq                 : JQueryStatic        = global.jQuery.asInstanceOf[JQueryStatic]
  val pc                                       = new PoeCacher()
  var curHist            : CharacterGemHistory = null
  var curGemHistory      : GemHistory          = null
  var runStartGemProgress: GemProgress         = null
  var autoUpdateTimer    : js.Any              = null
  val store                                    = StoreMaster
  val msPerHour                                = 60 * 60 * 1000


  def start(el : JQuery) {
    //Clear the view

    val btns = jq("""<div id="btns"></div>""")
    el.append(btns)
    val sessionBtns = el.append("""<div id="session-btns"></div>""")
    el.append("""<div id="xp-info">Please select a character</div>""")
    //Add a list of buttons one per character
    for {
      chars <- pc.getChars()
      char <- chars
    } {
      val btn = jq(s"""<button>${char.name}</button>""")
      btns.append(btn)
      btn.on("click", (e: js.Any) => {
        setChar(char)
      })
    }

    val runBtn = jq("<button>Start Run</button>")
    sessionBtns.append(runBtn)
    runBtn.on("click", () => {
      console.log("I WAS CLICKED")
      if (curHist == null) {
        Alerter.alert("Please select a character before pressing the start run button")
      } else {
        updateGemStatus()
        curHist.addRun()
        curHist.getGemWithMostXpToGoToNextLevel().foreach { gem =>
          curGemHistory = gem
          runStartGemProgress = gem.current
        }
        save()
        display()
      }
    })

    //Start the timer
    startTimer()

  }

  def startTimer() {
    if (autoUpdateTimer == null)  {
      autoUpdateTimer = global.setInterval(() => {
        console.log("TIMER FIRED")
        updateGemStatus()
        save()
        display()
      }, 10000)
    }
  }

  def save() {
    if (curHist != null) {
      val key = getKey(curHist.character)
      store.set(key, curHist)
    }
  }

  def getKey(character: String) = {
    "gem-history-" + character
  }

  def clearChar(c: CharacterInfo) {
    val key = getKey(c.name)
    store.clear(key)
  }

  def setChar(info: CharacterInfo) {
    val character = info.name
    //Get the current history for this character.
    val key = getKey(character)
    curHist = store.get(key).getOrElse(CharacterGemHistory.empty(character))
    for {
      lastRunTime <- curHist.runs.lastOption
      (hist, prog) <- curHist.gemsAtTime(lastRunTime).maxByOpt(_._2.xpToGo)
    } {
      curGemHistory = hist
      runStartGemProgress = prog
    }
    updateGemStatus()
    save()
    display()
  }

  def updateGemStatus() {
    //Update history with the new items
    curHist.nullSafe.foreach { hist =>
      val key = "gem-history-" + hist.character
      pc.Net.getInvAndStore(hist.character).foreach { inv =>
      //Compare the gems to the other gems we have already for this character
        curHist.updateGems(inv.allItems(Some(hist.character)).filter(i => i.getXpProgress.isDefined))
        store.set(key, curHist)
        display()
      }
    }
  }

  val fmt = global.d3.format(",f")

  def format(d: Double): String = {
    fmt(d.toJs).toString
  }
  val fmt2 = global.d3.format(".2f")
  def format2(d: Double): String = {
    fmt2(d.toJs).toString
  }

  def display() {
    val el = jq("#xp-info")
    el.empty()
    curHist.nullSafe.foreach { hist =>
      el.append(s"<div>Character: ${hist.character}</div>")
      el.append(s"""<table border="1"></table>""")
      val $table = jq("table", el)
      $table.append("<thead>" +
          "<th>Name</th>" +
          "<th>Level</th>" +
          "<th>Progress</th>" +
          "<th>Xp Gained</th>" +
          "<th>Xp Next Level</th>" +
          "<th>Xp To Go</th>" +
          "<th>Time in run</th>" +
          "<th>Xp In Run</th>" +
          "<th>Xp/Hour</th>" +
          "<th>Time To Level</th>" +
          "</thead>")
      $table.append("<tbody></tbody>")
      val $tbody = jq("tbody", el)
      hist.gems.toList.sortBy(_.xpToGo).foreach { gem =>
        $tbody.append(s"<tr>" +
            s"<td>${gem.id.name}</td>" +
            s"<td>${gem.current.level}</td>" +
            f"<td>${format2(gem.current.progress * 100)}</td>" +
            s"<td>${format(gem.current.xpGained)}</td>" +
            s"<td>${format(gem.current.xpForLevelUp)}</td>" +
            s"<td>${format(gem.current.xpToGo)}</td>" +
            s"<td>${timeInRun.map(t => DurationText.durationMs(t.toLong, 3)).getOrElse("press the start run button")}</td>" +
            s"<td>${xpInRun.map(format).getOrElse("press the start run button")}</td>" +
            s"<td>${xpPerMs.map(x => format(x * msPerHour)).getOrElse("press the start run button")}</td>" +
            s"<td>${msToLevel(gem).map(x => DurationText.durationMs((x).toLong, showFields = 2)).getOrElse("press the start run button")}</td>" +
            s"</tr>")
      }
    }
  }

  def timeInRun = for {
    startProgress <- runStartGemProgress.nullSafe
  } yield {
    val time = new js.Date().getTime()
    time - startProgress.time: Double
  }

  def xpInRun = for {
    gemHistory <- curGemHistory.nullSafe
    startProgress <- runStartGemProgress.nullSafe
    curProgress = gemHistory.current
  } yield {
    (curProgress.xpGained - startProgress.xpGained).toDouble
  }

  def xpPerMs: Option[Double] = for {
    gemHistory <- curGemHistory.nullSafe
    startProgress <- runStartGemProgress.nullSafe
    curProgress = gemHistory.current
  } yield {
    val time = new js.Date().getTime()
    val msElapsed: Double = time - startProgress.time
    val xpGainedInRun: Double = curProgress.xpGained - startProgress.xpGained
    xpGainedInRun / msElapsed
  }


  def msToLevel(gem: GemHistory): Option[Double] = for {
    rate <- xpPerMs
    if rate >= 0
  } yield {
    console.log("mstogo", gem.current.xpToGo.toJs, rate.toJs)
    gem.current.xpToGo / rate
  }

  def stop() {
    //Kill the timer if it exists
    autoUpdateTimer.nullSafe.foreach { autoUpdateTimer =>
      global.clearInterval(autoUpdateTimer)
    }
  }


}