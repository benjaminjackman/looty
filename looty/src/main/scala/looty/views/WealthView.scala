package looty
package views

import cgta.oscala.util.debugging.PRINT
import looty.poeapi.PoeTypes.Leagues.League
import looty.views.snippets.Select2Wrapper
import org.scalajs.dom
import org.scalajs.jquery.{JQuery, JQueryStatic}
import looty.poeapi.PoeTypes.Leagues
import looty.poeapi.PoeCacher

import scala.concurrent.Future
import scala.scalajs.js
import scala.scalajs.js.Dynamic


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 1/7/14 6:31 PM
//////////////////////////////////////////////////////////////

object LocalStorageSaver {
  val prefix = "LOCAL-STORAGE-SAVER:"
  def save(key: String, value: String): Unit = {
    global.localStorage.setItem(prefix + key, value)
  }
  def get(key: String) = {
    global.localStorage.getItem(prefix + key)
  }
}

object CurrencyConversion {
  val defaults = List(
    CurrencyConversion("Chromatic Orb", 1.0, 17.0),
    CurrencyConversion("Orb of Alteration", 1.0, 18.0),
    CurrencyConversion("Jeweller's Orb", 1.0, 8.0),
    CurrencyConversion("Orb of Chance", 1.0, 8.0),
    CurrencyConversion("Cartographer's Chisel", 5.0, 16.0),
    CurrencyConversion("Orb of Fusing", 1.0, 2.0),
    CurrencyConversion("Orb of Alchemy", 1.0, 2.0),
    CurrencyConversion("Orb of Scouring", 1.0, 2.0),
    CurrencyConversion("Blessed Orb", 3.0, 4.0),
    CurrencyConversion("Vaal Orb", 1.0, 1.0),
    CurrencyConversion("Chaos Orb", 1.0, 1.0),
    CurrencyConversion("Orb of Regret", 1.0, 1.0),
    CurrencyConversion("Regal Orb", 2.0, 1.0),
    CurrencyConversion("Gemcutter's Prism", 3.0, 1.0),
    CurrencyConversion("Divine Orb", 17.0, 1.0),
    CurrencyConversion("Exalted Orb", 23.0, 1.0),
    CurrencyConversion("Eternal Orb", 46.0, 1.0)
  )

  val defaultMap: Map[String, CurrencyConversion] = Map(defaults.map(x => x.name -> x): _*)

  def fromJs(a: js.Any) = {
    val d = a.asInstanceOf[js.Dynamic]
    CurrencyConversion(
      name = d.name.asJsStr,
      n = d.n.asJsNum,
      d = d.d.asJsNum
    )
  }
}
case class CurrencyConversion(name: String, n: Double, d: Double) {
  def chaosValue = n / d
  def toJs: js.Any = Dynamic.literal(name = name, n = n, d = d)

}

class CurrencyConversionRow(var cc: CurrencyConversion)(onChange: () => Unit) {

  val nInput  = "input".jq
  val dInput  = "input".jq
  val cntSpan = "span".jq
  val totSpan = "span".jq
  nInput.attr("size","6")
  dInput.attr("size","6")
  nInput.on("keyup", { () => cc = cc.copy(n = nInput.value().toString.toDouble); onChange()}: js.Function)
  dInput.on("keyup", { () => cc = cc.copy(d = dInput.value().toString.toDouble); onChange()}: js.Function)

  var cnt: Double = 0.0
  def total = cc.chaosValue * cnt

  def refresh() {
    nInput.value(cc.n.toString)
    dInput.value(cc.d.toString)
    cntSpan.text(cnt.toString)
    totSpan.text(global.d3.round(total, 2).toString)
  }

  def jq: JQuery = {
    val tr = "tr".jq
    tr.append("td".jq.append(cc.name))
    tr.append("td".jq.append(nInput))
    tr.append("td".jq.append(dInput))
    tr.append("td".jq.append(cntSpan))
    tr.append("td".jq.append(totSpan))
    tr
  }
}

class WealthView(implicit val pc: PoeCacher) extends View {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
   def start(ele: JQuery): Unit = {
    var el = ele.append("<div id='wealth'></div>")
    el = jq("#wealth")
    val selEl = "div".jq
    val gridEl = "div".jq
    el.append(selEl)
    el.append(gridEl)


    Select2Wrapper(
      selEl.get(0).asInstanceOf[dom.Element],
      180,
      "League",
      (x) => Future.successful(Leagues.all.filter(l => x.isEmpty || l.rpcName.toLowerCase.trim.contains(x.toLowerCase))).map(_.map(_.rpcName))) { l =>
      setLeague(Leagues.all.find(_.rpcName =?= l).get, gridEl)
    }
  }

  def setLeague(league: League, el: JQuery) {
    PRINT | s"SET LEAGUE TO $league"
    val lsKey = s"WealthView-$league-ccs"
    el.empty()

    val startValues = LocalStorageSaver.get(lsKey).nullSafe
      .map(x=>global.JSON.parse(x))
      .map(_.asJsArr[js.Any].toList.map(x => CurrencyConversion.fromJs(x)))
      .getOrElse(CurrencyConversion.defaults)

    val table = "table".jq
    locally {
      val th = "tr".jq
      th.append("th".jq.append("Currency name"))
      th.append("th".jq.append("Chaos"))
      th.append("th".jq.append("Self"))
      th.append("th".jq.append("You have"))
      th.append("th".jq.append("Is worth"))
      table.append("thead".jq.append(th))
    }
    val tbody = "tbody".jq
    table.append(tbody)
    val tfoot = "tfoot".jq
    val totalWorth = "td".jq
    locally {
      tfoot.append("td".jq.text("Total"))
      tfoot.append("td".jq)
      tfoot.append("td".jq)
      tfoot.append("td".jq)
      tfoot.append(totalWorth)
    }
    table.append(tfoot)
    var rowMap = Map.empty[String, CurrencyConversionRow]
    startValues.sortBy(_.name) foreach { cc =>
      val row = new CurrencyConversionRow(cc)(() => refresh())
      rowMap += cc.name -> row
      tbody.append(row.jq)
    }
    el.append(table)
    def refresh() = {
      rowMap.foreach(_._2.refresh())
      val ccs = global.JSON.stringify(rowMap.toList.map(_._2.cc.toJs).toJsArr).asJsStr
      LocalStorageSaver.save(lsKey, ccs)
      val tot = rowMap.map(_._2.total).sum
      totalWorth.text(global.d3.round(tot, 2).toString)
    }



    refresh()

    for {
      items <- pc.getAllItems(league.rpcName)
    } {
      for {
        item <- items
        if item.item.isCurrency
      } {
        rowMap.get(item.displayName).foreach { r =>
          r.cnt += item.properties.stackSize
        }
      }
      refresh()
    }



    //    var tot = 0.0
    //    for {
    //      items <- pc.getAllItems(Leagues.Standard)
    //      item <- items
    //      if item.item.isCurrency
    //    } {
    //      console.log(item.properties.stackSize.toJs, item)
    //
    //      valueMap.get(item.displayName) match {
    //        case Some(value) => tot += value * item.properties.stackSize
    //        case None => console.error("No Value for Currency Item", item.displayName, item)
    //      }
    //
    //    }
    //    val str = s"TOTAL CHAOS WEALTH: $tot Exalts: " + (valueMap("Exalted Orb") * tot)
    //    el.text(str)
    //    console.log(str)

  }

  def stop(): Unit = {

  }


}