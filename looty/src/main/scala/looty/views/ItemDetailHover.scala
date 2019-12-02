package looty
package views

import looty.model.ComputedItem
import org.scalajs.dom
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

    el1.hide()
    el2.hide()

    firstItem.foreach { item =>
      displayItem(item, el1)
      if (compare) {
        secondItem.foreach(displayItem(_, el2))
      }
    }

    positionFrame(x, y)

    el.show()
  }

  def positionFrame(x: Double, y: Double) {
    val yRat = y / dom.window.innerHeight
    val h = el.height()
    val top = Some(y - yRat * h)
    val (right, left) = if (x / window.innerWidth < .5) {
      None -> Some(x + 10)
    } else {
      Some(global.window.innerWidth.asInstanceOf[Double] - x + 10) -> None
    }
    def cssValueOf(x: Option[Double]): js.Any = x.map(x => x: js.Any).getOrElse[js.Any]("")
    el.css("top", cssValueOf(top))
    el.css("right", cssValueOf(right))
    el.css("left", cssValueOf(left))
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
        prop <- item.item.getPropertiesInterpolated
      } yield {
        prop
      }).mkString("<br>")
    }
    def flavorText = {
      item.item.flavourText.toOption.map(_.toList.mkString("<br>")).getOrElse("")
    }

    val itemName = item.item.getName
    val typeLine = item.item.getTypeLine
    val titleName = if (itemName.isEmpty) {
      s"""<span class="item-name">${typeLine.toString}</span>"""
    } else {
      s"""<span class="item-name">${itemName.toString}</span><br><hr>${typeLine.toString}"""
    }

    val sections = List(
      s"<br><hr>Location: ${item.locAndCoords}",
      if (item.socketColors.nonEmpty) "Sockets: " + item.socketColors else "",
      properties,
      item.item.ilvl.toOption.map(x=>s"Item Level: $x").getOrElse(""),
      requirements,
      item.item.descrText.toOption.map(_.toString).getOrElse(""),
      item.item.implicitModList.mkString("<br>"),
      item.item.explicitModList.mkString("<br>"),
      item.item.craftedModList.mkString("<br>"),
      item.item.secDescrText.toOption.map(_.toString).getOrElse(""),
      item.item.cosmeticMods.toOption.map(_.mkString("<br>")).getOrElse(""),
      flavorText,
      if (item.item.identified.toOption.map(x => x: Boolean).getOrElse(true)) "" else "Not Identified",
      if (item.item.corrupted.toOption.map(x => x: Boolean).getOrElse(false)) "Corrupted" else "",
      if (item.item.duplicated.toOption.map(x => x: Boolean).getOrElse(false)) "Mirrored" else ""
    ).filter(_.nonEmpty)
    val h = s"""
        <div style="padding:5px">
        <img src="${item.item.getIconUrl}"></img><br>
        $titleName
        ${sections.mkString("<hr>")}
        </div>
        """
    el.attr("class", s"item-detail frame-type-$frameTypeName")
    el.html(h)
    el.show()
  }

  def hide() = el.hide()

}
