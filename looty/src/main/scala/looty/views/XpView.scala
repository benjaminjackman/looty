package looty
package views

import org.scalajs.jquery.JQueryStatic
import looty.model.PoeCacher
import scala.scalajs.js
import looty.poeapi.PoeTypes.{AnyItem, CharacterInfo}
import cgta.ojs.io.StoreMaster


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
}

class GemProgress private() extends js.Object {
  val time        : js.Number = ???
  val level       : js.Number = ???
  val xpGained    : js.Number = ???
  val xpForLevelUp: js.Number = ???
}

object GemId {
  def fromItem(item: AnyItem): Option[GemId] = {
    for {inventoryId <- item.inItem.toOption.map(_.inventoryId)
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
  def empty(id: GemId) = apply(id, new js.Array[GemProgress]())

  def apply(id: GemId, samples: js.Array[GemProgress]) = {
    val x = newObject
    x.id = id
    x.samples = samples
    x.asInstanceOf[GemHistory]
  }
  implicit class GemHistoryExtensions(val x: GemHistory) extends AnyVal {
    def add(g: AnyItem) = {
      GemProgress.fromItem(g).foreach { gp =>
        x.samples.push(gp)
      }
    }
    def current = x.samples.last
  }
}

class GemHistory private() extends js.Object {
  val id     : GemId                 = ???
  val samples: js.Array[GemProgress] = ???
}
object CharacterGemHistory {
  def empty(character: js.String) = {
    val x = newObject
    x.character = character
    x.gems = new js.Array[GemHistory]()
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
  }
}

class CharacterGemHistory private() extends js.Object {
  val character: js.String            = ???
  var gems     : js.Array[GemHistory] = ???
}

class XpView {
  //Get a poe cacher
  val jq     : JQueryStatic        = global.jQuery.asInstanceOf[JQueryStatic]
  val pc                           = new PoeCacher()
  var curHist: CharacterGemHistory = null
  val store                        = StoreMaster


  def start() {
    //Clear the view
    val el = jq("#content")
    el.empty()


    //Add the buttons
    val btns = jq("""<div id="controls"></div>""")
    el.append(btns)
    el.append("""<div id="xp-info">Please select a character</div>""")
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
    //Add a list of buttons one per character
  }

  def clearChar(c: CharacterInfo) {
    val key = "gem-history-" + c.name
    store.clear(key)
  }

  def setChar(info: CharacterInfo) {
    val character = info.name
    //Get the current history for this character.
    val key = "gem-history-" + character
    curHist = store.get(key).getOrElse {
      val r = CharacterGemHistory.empty(character)
      store.set(key, r)
      r
    }
    display()
  }

  def updateChar() {
    //Update history with the new items
    curHist.nullSafe.foreach { hist =>
      val key = "gem-history-" + hist.character
      pc.Net.getInvAndStore(hist.character).foreach { inv =>
      //Compare the gems to the other gems we have already for this character
        curHist.updateGems(inv.allItems.filter(i => i.getXpProgress.isDefined))
        store.set(key, curHist)
        display()
      }
    }
  }

  def display() {
    val el = jq("#xp-info")
    el.empty()
    curHist.nullSafe.foreach { hist =>
      el.append(s"<div>Character: ${hist.character}</div>")
      val $table = el.append(s"<table></table>")
      $table.append(s"<thead><th>Name</th><th>Level</th><th>Progress</th><th>Xp Gained</th><th>Xp Next Level</th><th>Xp/Hour</th><th>Time To Level</th></thead>")
      val $tbody = $table.append("<tbody></tbody>")
      hist.gems.iterator.foreach { gem =>
        $tbody.append(s"<tr>" +
            s"<td>${gem.id.name}</td>" +
            s"<td>${gem.current.level}</td>" +
            s"<td>?</td>" +
            s"<td>${gem.current.xpGained}</td>" +
            s"<td>${gem.current.xpForLevelUp}</td>" +
            s"<td>?</td>" +
            s"<td>?</td>" +
            s"</tr>")
      }
    }
  }

  def stop() {
    //Kill the timer if it exists

  }


}