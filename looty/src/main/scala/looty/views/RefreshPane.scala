package looty
package views

import looty.model.parsers.ItemParser
import looty.model.{StashTabIdx, CharInvId, ComputedItem, LootContainerId}
import looty.poeapi.PoeCacher

import looty.views.loot.{Filters, Containers, Container}
import org.scalajs.jquery.{JQuery, JQueryStatic}

import scala.concurrent.Future
import scala.scalajs.js


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
      if (global.confirm("Are you sure? This might take some time").asInstanceOf[Boolean]) {
        pc.clearLeague(league).foreach { x =>
          global.location.reload()
        }
        Alerter.reloadMsg()
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



    val elChars = jq("<div>Characters: </div>")
    val elTabs = jq("<div>Tabs: </div>")

    el.append("Click to select/unselect characters/tabs. Shift+Click will reload them from the server.<br>")
    el.append(showAllBtn)
    el.append(hideAllBtn)
    el.append(elChars)
    el.append(elTabs)
    el.append(reloadVisibleBtn)
    el.append(reloadAllBtn)


    val title = "Show / hide this tab. Shift-Click to refresh it."

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

    //Buttons for characters
    val charBtnsFut = for {
      chars <- pc.getChars(forceNetRefresh = false)
    } yield {
      chars.sortBy(_.name.toUpperCase()).foreach { char =>
        if (char.league.toString =?= league) {
          val button = jq(s"""<a title="$title" href="javascript:void(0)">${char.name}</a>""")
          button.data("charName", char.name)

          val conId: LootContainerId = CharInvId(char.name)

          addCon(conId, button, elChars) {
            pc.getInv(char.name, forceNetRefresh = true).foreach { st =>
              val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, char.name)
              updateContainer(conId, items)
            }
          }
        }
      }
    }
    
    //Force a refreh
    pc.getChars(forceNetRefresh = true)

    //Buttons for stash tabs
    val tabBtnsFut = for {
      stis <- pc.getStashInfo(league, forceNetRefresh = false)
    } yield {
      stis.foreach { sti =>
        val index = sti.i
        val button = jq(s"""<a class="tab-btn" href="javascript:void(0)" title="${title + s" the index of this tab is: $index"}"></a>""")
        button.text(sti.n)
        button.css("textShadow", "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black")
        button.css("backgroundColor", sti.colour.toRgb)

        val conId: LootContainerId = StashTabIdx((sti.i: Double).toInt)

        addCon(conId, button, elTabs) {
          pc.getStashTab(league, sti.i.toInt, forceNetRefresh = true).foreach { st =>
            val items = for (item <- st.allItems(None)) yield ItemParser.parseItem(item, conId, sti.n)
            updateContainer(conId, items)
          }
        }
      }
    }

    el -> Future.sequence(List(tabBtnsFut, charBtnsFut)).map(x => Unit)
  }
}
