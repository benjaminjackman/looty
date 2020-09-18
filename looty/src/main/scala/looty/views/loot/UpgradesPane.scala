package looty
package views.loot

import looty.model.InventoryIds.InventoryId
import looty.model.parsers.ItemParser
import looty.model.{Attributes, CharClasses, CharInvId, ComputedItem, PaperDoll, PassiveSkillTreeHelp}
import looty.poeapi.PoeTypes.Leagues.League
import looty.poeapi.{PoeCacher, PoeRpcs}
import looty.views.ItemDetailHover
import org.scalajs.dom
import org.scalajs.jquery.JQuery

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/25/14 10:19 PM
//////////////////////////////////////////////////////////////

class UpgradesPane(
  league: League,
  itemDetailHover: ItemDetailHover,
  setUpgradeItemFn: (Option[ComputedItem]) => Unit,
  setRequiredLvlFn: Int => Unit
  )(implicit val pc: PoeCacher) {
  val el     = jq("<div class='upgrades-pane pane'></div>")
  val dollEl = jq("<div class='equip-slots'></div>")
  val lvlEl  = jq("<div class='char-lvl'></div>")

  def start(): JQuery = {
    val playerDiv = jq("<div></div>")
    el.append("<div class='info'>Use this pane to find upgrades for a character's items. Simply select a character then click on the item you wish to upgrade. The grid will show deltas of the values of other items.</div>")
    el.append(playerDiv)
    val playerSel = {
      val O = js.Dynamic.literal
      playerDiv.asJsDyn.select2(O(
        width = 180,
        placeholder = "Character",
        query = { (q: js.Dynamic) =>
          val term = q.term.asInstanceOf[String]
          for {
            chars <- pc.getChars()
          } {
            val cs = chars.toList
              .filter(c => c.name.toLowerCase.startsWith(term.toLowerCase) && c.league =?= league.rpcName)
              .sortBy(_.name.toLowerCase)
              .map(c => O(id = c.name, text = c.name))
              .toJsArr
            q.callback(O(results = cs))
          }
        }: js.Function
      )).on("change", { (e: js.Dynamic) =>
        loadChar(e.`val`.asInstanceOf[String])
      }: js.Function)
    }
    //    el.append(playerSel)
    el.append(lvlEl)
    el.append(dollEl)
    el
  }

  def loadChar(name: String) {
    import scala.async.Async.{async, await}
    async {
      val pFut = pc.getAccountNameAndRealm.flatMap(accountName => PoeRpcs.getPassiveSkills(accountName, character = name))
      val cFut = pc.getChars()
      val iFut = pc.getInv(name)
      val passives = await(pFut)
      val chars = await(cFut)
      val inventory = await(iFut)
      val bagId = CharInvId(name)
      val items = inventory.allItems(Some(name)).toList

      chars.find(_.name =?= name).foreach { charInfo =>
        val cls = charInfo.getCharClass
        val pAttrs = PassiveSkillTreeHelp.hashesToAttributes(passives.hashes)
        val attrs = cls.startingAttributes.reduceWith(pAttrs)(_ + _)
        displayLevelAndAttributes(charInfo.level.toInt, attrs)
      }

      val doll = PaperDoll.fromItems(items).map(i => i.map(i => ItemParser.parseItem(i, bagId, bagId.character)))
      displayPaperDoll(doll)
    }
  }

  def displayLevelAndAttributes(level: Int, attrs: Attributes[Int]) {
    lvlEl.empty()
    val lvlBtn = jq(s"""<a href="javascript:void(0)" class="upgrade-btn lvl-btn">Level: $level</a>""")
    lvlEl.append(lvlBtn)
    lvlBtn.on("click", () => {
      setRequiredLvlFn(level)
      false
    })

  }


  def displayPaperDoll(doll: PaperDoll[Option[ComputedItem]]) {
    dollEl.empty()
    val clrBtn = jq(s"""<a href="javascript:void(0)" class="upgrade-btn clear-btn">Clear</a>""")
    dollEl.append(clrBtn)
    clrBtn.on("click", () => {
      itemDetailHover.setSecondItem(None)
      setUpgradeItemFn(None)
      false
    })

    doll.toList.sortBy(_._1.toString).foreach { case (iid, item) =>
      val e = renderIid(iid, item)
      dollEl.append(e)
    }
  }

  def renderIid(iid: InventoryId, item: Option[ComputedItem]): JQuery = {
    val el = jq(s"""<a href="javascript:void(0)" class="upgrade-btn">$iid</a>""")
    el.on("click", () => {
      itemDetailHover.setSecondItem(item)
      setUpgradeItemFn(item)
      false
    })
    el.on("mouseenter", (e: dom.MouseEvent) => {
      item.foreach { item =>
        itemDetailHover.setFirstItem(Some(item))
        itemDetailHover.show(e.clientX, e.clientY, compare = false)
      }
    })

    el.on("mouseleave", () => {
      itemDetailHover.hide()
    })
  }

}
