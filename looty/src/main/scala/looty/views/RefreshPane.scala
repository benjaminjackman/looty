package looty
package views

import looty.model.parsers.ItemParser
import looty.model.{StashTabIdx, CharInvId, ComputedItem, LootContainerId}
import looty.poeapi.PoeCacher
import looty.poeapi.PoeTypes.{CharacterInfo, StashTabInfo}

import looty.views.loot.{Filters, Containers, Container}
import org.scalajs.jquery.{JQuery, JQueryStatic}

import scala.concurrent.Future
import scala.scalajs.js
import scala.util.{Failure, Success}


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 6:23 PM
//////////////////////////////////////////////////////////////

class RefreshPane(league: String,
  containers: Containers,
  filters: Filters,
  updateContainer: (LootContainerId, List[ComputedItem]) => Unit)(
  implicit pc: PoeCacher) {

  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  val elChars          = jq("<div>Characters: </div>")
  val elTabs           = jq("<div>Tabs: </div>")
  var buttons          = Map.empty[LootContainerId, (JQuery, Option[StashTabInfo])]


  def refreshContainer(conId: LootContainerId) {
    buttons.get(conId).foreach {
      case (btn, Some(sti)) =>
        pc.getStashTab(league, conId.asInstanceOf[StashTabIdx].idx, forceNetRefresh = true).foreach { st =>
          val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, sti.n)
          updateContainer(conId, items)
        }
      case (btn, None) =>
        val char = conId.asInstanceOf[CharInvId].character
        pc.getInv(char, forceNetRefresh = true).foreach { st =>
          val items = for (item <- st.allItems(Some(char))) yield ItemParser.parseItem(item, conId, char)
          updateContainer(conId, items)
        }

    }
  }

  def addCharBtnsFut(): Future[Unit] = {
    pc.getChars(forceNetRefresh = false).map(chars => addCharBtns(chars))
  }

  def addCharBtns(chars : Seq[CharacterInfo]) {
    buttons = buttons.filterKeys(!_.isCharInv)
    elChars.empty()
    chars.sortBy(_.name.toUpperCase).foreach { char =>
      if (char.league.toString =?= league) {
        val conId: LootContainerId = CharInvId(char.name)
        val button = jq(s"""<a title="$refreshBtnTitle" href="javascript:void(0)">${char.name}</a>""")
        button.data("charName", char.name)

        buttons += conId -> (button -> None)

        addCon(conId, button, elChars) {
          pc.getInv(char.name, forceNetRefresh = true).foreach { st =>
            val items = for (item <- st.allItems(Some(char.name))) yield ItemParser.parseItem(item, conId, char.name)
            updateContainer(conId, items)
          }
        }
      }
    }
  }

  def addTabBtns(): Future[Unit] = {
    for {
      stis <- pc.getStashInfo(league, forceNetRefresh = false)
    } yield {
      stis.foreach { sti =>
        val index = sti.i
        val conId: LootContainerId = StashTabIdx((sti.i: Double).toInt)
        val button = jq(s"""<a class="tab-btn" href="javascript:void(0)" title="${refreshBtnTitle + s" the index of this tab is: $index"}"></a>""")
        button.text(sti.n)
        button.css("textShadow", "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black")
        button.css("backgroundColor", sti.colour.toRgb)
        buttons += conId -> (button -> Some(sti))

        addCon(conId, button, elTabs) {
          pc.getStashTab(league, sti.i.toInt, forceNetRefresh = true).foreach { st =>
            val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, sti.n)
            updateContainer(conId, items)
          }
        }
      }
    }
  }

  val refreshBtnTitle = "Show / hide this tab. Shift-Click to refresh it."

  def addCon(conId: LootContainerId, button: JQuery, el: JQuery)(refreshFn: => Unit) {
    val con = new Container(conId, button, initialVisible = true, refreshFn = () => refreshFn)
    button.addClass("loading")
    button.addClass("visible-loot-container")
    containers.addContainer(con)
    filters.setContainer(con.id, visible = con.visible)
    el.append(button)
    el.append(" ")
    button.on("click", (e: js.Dynamic) => {
      //Filter the grid to show only that tab
      if (e.shiftKey.asInstanceOf[js.Boolean]) {
        con.refresh()
      } else {
        con.toggle()
      }
      false
    })
  }


  def start(): (JQuery, Future[Unit]) = {
    val el = jq("<div></div>")

    val showAllBtn = jq(s"""<a class="${Container.visCls}" href="javascript:void(0)" title="Will show all inventories and stash tabs">Show All</a>""")
    showAllBtn.click { () =>
      containers.all.foreach(_.show())
      filters.refresh()
      false
    }
    val hideAllBtn = jq(s"""<a class="${Container.invisCls}" href="javascript:void(0)" title="Will Hide all inventories and stash tabs">Hide All</a>""")
    hideAllBtn.click { () =>
      containers.all.foreach(_.hide())
      filters.refresh()
      false
    }


    val reloadAllBtn = jq("""<button title="Use this button after you move or rename premium stash tabs, or
    |have changed several tabs. This will take some time, as GGG throttles the number of requests made per minute
    |to get this data.">Clear And Reload Everything For This League From Server</button>""".stripMargin)

    reloadAllBtn.click { () =>
      if (global.confirm("Are you sure? This might take some time.").asInstanceOf[Boolean]) {
        pc.clearLeague(league).foreach { x =>
          Alerter.info("Please reload the page")
          global.location.reload()
        }
      } else {
        Alerter.noReloadMsg()
      }
    }


    val reloadVisibleBtn = jq("""<button title="Connects to GGG servers and refreshes the visible tabs">Refresh Shown</button>""")
    reloadVisibleBtn.on("click", () => {
      val cons = containers.all.filter(_.visible)
      if (cons.size > 12) {
        if (global.confirm(s"About to refresh ${cons.size} inventories / tabs, this might take a while. Are you sure?").asInstanceOf[Boolean]) {
          cons.foreach(_.refresh())
        }
      } else {
        cons.foreach(_.refresh())
      }
      false
    })

    val refreshCharactersBtn = jq("""<button title="Refreshes character names and levels, shift click on them to refresh them">Refresh Character Levels But Not Inventories</button>""")
    refreshCharactersBtn.on("click", { () =>
      Alerter.info("Refreshing Characters")
      pc.getChars(forceNetRefresh = true).onComplete {
        case Success(chars) =>
          addCharBtns(chars)
          Alerter.info("Refreshed Characters")
        case Failure(ex) =>
          Alerter.warn("Unable to refresh characters from server")
      }
    })

    el.append("Click to select/unselect characters/tabs. Shift+Click will refresh them from the server.<br>")
    el.append(showAllBtn)
    el.append(hideAllBtn)
    el.append(elChars)
    el.append(elTabs)
    el.append(reloadVisibleBtn)
    el.append(reloadAllBtn)
    el.append(refreshCharactersBtn)

    el -> Future.sequence(List(addCharBtnsFut(), addTabBtns())).map(x => Unit)
  }
}
