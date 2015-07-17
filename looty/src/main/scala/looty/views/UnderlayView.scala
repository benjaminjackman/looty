package looty
package views

import cgta.oscala.util.debugging.PRINT
import cgta.serland.SerBuilder
import looty.model.ComputedItemProps
import looty.model.LootContainerId
import looty.model.StashTabIdx
import looty.model.parsers.ItemParser
import looty.poeapi.PoeCacher
import looty.poeapi.PoeTypes.StashTab
import looty.poeapi.PoeTypes.StashTabInfo
import org.scalajs.dom.KeyboardEvent
import org.scalajs.dom.extensions.KeyCode
import org.scalajs.jquery.JQuery
import org.scalajs.jquery.JQueryEventObject

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/17/15 1:45 AM
//////////////////////////////////////////////////////////////

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
      pc.getStashInfo(league).foreach { infos =>
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