package looty
package views

import looty.model.ComputedItem
import org.scalajs.jquery.JQuery

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/25/14 10:48 PM
//////////////////////////////////////////////////////////////

class ItemDetailHover {
  val el  = jq("""<div id="item-details" style="display:inline-block"></div>""")
  val el1 = jq("""<div></div>""")
  val el2 = jq("""<div></div>""")
  el.append(el1)
  el.append(el2)

  var firstItem  = Option.empty[ComputedItem]
  var secondItem = Option.empty[ComputedItem]

  def setFirstItem(item: Option[ComputedItem]) { firstItem = item }
  def setSecondItem(item: Option[ComputedItem]) { secondItem = item }


  def show(
    x: Double,
    y: Double,
    compare: Boolean) {

    val (top, bottom) = if (y / global.window.innerHeight < .5) {
      Some(y + 10) -> None
    } else {
      None -> Some(global.window.innerHeight.asInstanceOf[Double] - y + 10)
    }

    val (right, left) = if (x / global.window.innerWidth < .5) {
      None -> Some(x + 10)
    } else {
      Some(global.window.innerWidth.asInstanceOf[Double] - x + 10) -> None
    }

    el1.hide()
    el2.hide()
    def cssValueOf(x: Option[Double]): js.Any = x.map(x => x: js.Any).getOrElse[js.Any]("")
//    el.css("top", cssValueOf(top))
//    el.css("right", cssValueOf(right))
//    el.css("bottom", cssValueOf(bottom))
//    el.css("left", cssValueOf(left))

    el.css("top", 0)
    el.css("right", 0)

    firstItem.foreach { item =>
      displayItem(item, el1)
      if (compare) {
        secondItem.foreach(displayItem(_, el2))
      }
    }

    el.show()
  }

  def displayItem(item: ComputedItem, el: JQuery) {
    val frameTypeName = item.item.getFrameType.name
    def requirements = {
      val xs = for {
        rs <- item.item.requirements.toOption.toList
        r <- rs.toList
        n <- r.name.toOption.toList
        vs <- r.values.toList
      } yield {
        s"$n ${vs(0).toString}"
      }
      xs.oIf(_.nonEmpty, _ => xs.mkString("Requires ", ", ", ""), _ => "")
    }
    def properties = {
      (for {
        props <- item.item.properties.toOption.toList
        prop <- props.toList
      } yield {
        val vs = for {
          v <- prop.values.toList
        } yield {
          v(0)
        }
        prop.name + " " + vs.mkString("")
      }).mkString("<br>")
    }
    def flavorText = {
      item.item.flavourText.toOption.map(_.toList.mkString("<br>")).getOrElse("")
    }
    val sections = List(
      item.item.name.toString,
      item.item.typeLine.toString,
      s"Location: ${item.locAndCoords}",
      if (item.socketColors.nonEmpty) "Sockets: " + item.socketColors else "",
      properties,
      requirements,
      //      item.item.descrText.toOption.map(_.toString).getOrElse(""),
      item.item.implicitModList.mkString("<br>"),
      item.item.explicitModList.mkString("<br>"),
      item.item.secDescrText.toOption.map(_.toString).getOrElse(""),
      item.item.cosmeticMods.toOption.map(_.mkString("<br>")).getOrElse(""),
      flavorText,
      if (item.item.identified.toOption.map(x => x: Boolean).getOrElse(true)) "" else "Not Identified",
      if (item.item.corrupted.toOption.map(x => x: Boolean).getOrElse(false)) "Corrupted" else "",
      if (item.item.duplicated.toOption.map(x => x: Boolean).getOrElse(false)) "Mirrored" else ""
    ).filter(_.nonEmpty)
    val h = s"""
        <div style="padding:5px">
        <img src="${item.item.icon}"></img>
        ${sections.mkString("<hr>")}
        </div>
        """
    el.attr("class", s"item-card frame-type-$frameTypeName")
    el.html(h)
    render(item, el)
    el.show()
  }

  implicit class StringExtensions(s: String) {
    def h: JQuery = {
      val tag :: classes = s.split("\\.").toList
      val el = jq(s"<$tag></$tag>")
      classes.foreach(el.addClass(_))
      el
    }
  }


  implicit class JQueryExtensions(el: JQuery) {
    def /(that: JQuery): JQuery = { el.append(that); that }
    def /!(that: JQuery): JQuery = { el.append(that); el }
    def |(at: (String, String)): JQuery = { el.attr(at._1, at._2); el }
    def text(txt: String): JQuery = { el.text(txt); el }
  }

  def render(item: ComputedItem, el: JQuery): JQuery = {
    val frameTypeName = item.item.getFrameType.name
    el.empty()
    val locGrid = {
      List.tabulate(12, 12) { (x, y) =>
        val el = "div".h

        el
      }
    }
    def name = item.item.name.oIf(_.isEmpty, x => item.item.typeLine, x => x)
    el.attr("class", s"item-card frame-type-$frameTypeName")
    el / "div.ic-title-line".h /!
      ("div.ic-title".h text name) /!
      ("div.ic-icon".h text "♞") /!
      "div".h.css("clear", "both")
    el / "div.ic-imgs".h /!
      ("div.ic-img".h /! ("img".h | "src" -> item.item.icon)) /!
      ("div.ic-loc".h /! locGrid)

  }

  def hide() = {
    //el.hide()
  }

}