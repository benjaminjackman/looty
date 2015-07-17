package looty
package views

import cgta.serland.SerBuilder
import japgolly.scalajs.react.BackendScope
import japgolly.scalajs.react.React
import japgolly.scalajs.react.ReactComponentB
import japgolly.scalajs.react.SyntheticEvent
import looty.model.StashTabIdx
import looty.model.parsers.ItemParser
import looty.poeapi.PoeCacher
import looty.poeapi.PoeTypes.StashTab
import looty.poeapi.PoeTypes.StashTabInfo
import looty.views.widgets.Select2Widget
import looty.views.widgets.SelectCharacterWidget
import looty.views.widgets.SelectLeagueWidget
import looty.views.widgets.SelectLeagueWidget.Leagues.League
import looty.views.widgets.SelectStashWidget
import org.scalajs.dom
import org.scalajs.dom.HTMLInputElement
import org.scalajs.dom.KeyboardEvent
import org.scalajs.dom.extensions.KeyCode
import org.scalajs.jquery.JQuery
import org.scalajs.jquery.JQueryEventObject

import scala.concurrent.Future
import scala.scalajs.js
import scala.scalajs.js.Dynamic


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/17/15 1:45 AM
//////////////////////////////////////////////////////////////

object VisualStashTabWidget {
  val component = {
    import japgolly.scalajs.react.vdom.ReactVDom._
    import japgolly.scalajs.react.vdom.ReactVDom.all._
    import japgolly.scalajs.react.vdom.ReactVDom.{styles => st}
    val O = Dynamic.literal


    ReactComponentB[VisualStashTabWidget]("VisualStashTabWidget")
      .render((props) =>
      div(
        st.position := "absolute",
        st.backgroundColor := "black",
        st.top := "100px",
        st.left := "100px",
        st.height := "800px",
        st.width := "800px"
      )
      )
      .create
  }


}

case class VisualStashTabWidget(tab: StashTab, tabInfo: StashTabInfo) {
  def apply() = VisualStashTabWidget.component(this)
}



object UnderlayViewWidget {
  class Component(pc: PoeCacher) {
    case class State(
      league: Option[League],
      stashTabInfo: Option[StashTabInfo]
      )
    case class Backend(T: BackendScope[_, State]) {
      def setLeague(league: League) { T.modState(_.copy(league = Some(league))) }
      def setStashTabInfo(stashTabInfo: StashTabInfo) { T.modState(_.copy(stashTabInfo = Some(stashTabInfo))) }
    }


    val component = {
      import japgolly.scalajs.react.vdom.ReactVDom._
      import japgolly.scalajs.react.vdom.ReactVDom.all._
      import japgolly.scalajs.react.vdom.ReactVDom.{styles => st}
      val O = Dynamic.literal

      ReactComponentB[UnderlayViewWidget]("UnderlayViewWidget")
        .initialState(State(None, None))
        .backend(Backend)
        .render { (p, s, b) =>
        div(
          div(
            SelectLeagueWidget(s.league, b.setLeague)(),
            div(st.display := "inline-block")(s.league.map { l => SelectStashWidget(l, s.stashTabInfo, () => pc.getStashTabInfos(l.rpcName).map(_.toSeq), b.setStashTabInfo)()}),
            a(href := "javascript:void(0)", className := "ctrl-btn", "resize")
          ),
          div(
            s.stashTabInfo.map(sti => VisualStashTabWidget(null, sti)())
          )

          //          ,
          //          VisualStashTabWidget(null, null)()
        )
      }
        .create
    }

  }
}

case class UnderlayViewWidget() {
  def apply(pc: PoeCacher) = new UnderlayViewWidget.Component(pc).component(this)
}


class UnderlayView(implicit val pc: PoeCacher) extends View {

  object Rect {implicit val ser = SerBuilder.forCase(this.apply _)}
  case class Rect(var top: Double, var left: Double, var w: Double, var h: Double)

  val rect = Rect(100, 100, 800, 800)
  val itemDetailHover = new ItemDetailHover()

  var el: JQuery = _
  var tabEl: JQuery = _
  var tabIdx = 1

  val league = "Standard"
  override def start(el: JQuery): Unit = {
    val mel = el.get(0).asInstanceOf[dom.Element]
    val root = UnderlayViewWidget()(pc)
    React.renderComponent(root, mel)


  }

  def old(el: JQuery): Unit = {
    this.el = el

    val r = rect
    this.tabEl = jq(s"<div style='position:absolute;top:${r.top}px;left:${r.left}px; height:${r.h}px;width:${r.w}px;background-color:black'></div>")
    this.el.append(tabEl)
    val ti = tabIdx
    jq(window).on("keydown", f)
    el.append(itemDetailHover.el)
    getAndRenderTab(tabIdx)

  }

  def getAndRenderTab(i: Int) {
    pc.getStashTab(league, i).foreach { tab =>
      pc.getStashTabInfos(league).foreach { infos =>
        val info = infos(i)
        renderTab(tab, info)
      }
    }
  }

  val f: js.Function1[KeyboardEvent, _] = (e: KeyboardEvent) => {
    e.keyCode match {
      case KeyCode.left =>
        tabIdx = Math.max(0, tabIdx - 1)
        getAndRenderTab(tabIdx)
      case KeyCode.right =>
        tabIdx = tabIdx + 1
        getAndRenderTab(tabIdx)
      case _ =>

    }
  }

  override def stop(): Unit = {
    jq(window).off("keydown", f)
  }

  def calibrate() {

  }

  def renderTab(tab: StashTab, tabInfo: StashTabInfo) {
    tabEl.empty()
    val dx = rect.w / 12
    val dy = rect.h / 12
    for {
      item <- tab.allItems(None)
      if !item.isInSocket
      x <- item.x.toOption
      y <- item.y.toOption
      w = item.w
      h = item.h
    } {
      val t = y * dy
      val l = x * dx
      val iw = w * dx
      val ih = h * dy
      val itemEl = jq(s"<img width='${iw}px' height='${ih}px' src='${item.icon}' style='border:2px solid white;position:absolute;top:${t}px;left:${l}px;height:${ih};width:${iw}'></img>")
      tabEl.append(itemEl)

      def on(e: JQueryEventObject): js.Any = {
        val ci = ItemParser.parseItem(item, StashTabIdx(tabIdx), tabInfo.n)
        itemDetailHover.setFirstItem(Some(ci))
        val de = e.asInstanceOf[js.Dynamic]
        itemDetailHover.show(
          x = de.clientX.asInstanceOf[js.Number],
          y = de.clientY.asInstanceOf[js.Number],
          compare = false
        )
      }

      def off(e: JQueryEventObject): js.Any = {
        itemDetailHover.setFirstItem(None)
        itemDetailHover.hide()
      }

      itemEl.mouseenter(on _)
      itemEl.mouseleave(off _)
    }
  }
}