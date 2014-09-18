package looty
package views.loot

import cgta.serland.SerBuilder
import looty.poeapi.PoeCacher
import looty.poeapi.PoeTypes.StashTabInfo
import org.scalajs.dom
import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/18/14 5:30 PM
//////////////////////////////////////////////////////////////

object StashTabSellPrice {
  implicit val ser = SerBuilder.forCase(this.apply _)
  def create(sti: StashTabInfo) = StashTabSellPrice(idx = sti.i.toInt, sti.n, None)
}
case class StashTabSellPrice(idx: Int, name: String, buyout: Option[String])


object StashTabSellRow {
  def create(prc: StashTabSellPrice, rem: (Int) => Unit) = StashTabSellRow(prc, moved = false)
}
case class StashTabSellRow(prc: StashTabSellPrice, moved: Boolean) {
  val jq = {
    val el = "div".jq
    el.append("span".jq.text(prc.idx.toString))
    el.append("span".jq.text(prc.name))
    val input = "input".jq
    prc.buyout.foreach(b => input.value(b))
    val del = "button".jq
    del.on("click", () => el.remove())
    del.text("Delete")
    el.append(input)
    el.append(del)
  }
}

class SellPane(league: String, pc: PoeCacher) {
  val key                                   = s"SellPane:$league"
  var tabPrices: IMap[Int, StashTabSellRow] = {
    def rem(idx: Int) {
      tabPrices -= idx
    }
    val ps = dom.window.localStorage.getItem(key)
      .nullSafe.map(_.toString.fromJson[List[StashTabSellPrice]].map(StashTabSellRow.create(_, rem))).getOrElse(Nil)
    IMap(ps.map(p => p.prc.idx -> p): _*)
  }
  val el                                    = "div".jq

  def start(): JQuery = {
    el.append("""<div>This pane is for selling items. You can set a buyout price per tab.
    The intention here, is that while you are playing you can just through items you think might sell
    into on of your for sale tabs. <br> WARNING: If you rename or move your stashtabs inside of path of exile
    the prices might be lost and/or incorrect for your items, so be sure to check to make sure things look ok afterwards.</div>""")

    val rowsEl = "div".jq
    el.append(rowsEl)
    tabPrices.toList.sortBy(_._1).foreach { case (_, row) =>
      val el = row.jq
      rowsEl.append()
    }

    el
  }
}