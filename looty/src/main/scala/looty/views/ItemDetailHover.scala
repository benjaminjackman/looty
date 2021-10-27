package looty
package views

import util.Settings
import looty.model.ComputedItem
import looty.poeapi.PoeTypes
import org.scalajs.dom
import org.scalajs.jquery.JQuery
import util.ProgressBar._

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/25/14 10:48 PM
//////////////////////////////////////////////////////////////

class ItemDetailHover {

  val el  = jq(s"""<div id="item-details" style="display:inline-block;"></div>""")

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
    //changing frame distance from cursor
    val const = 10
    val (right, left) = if (x / window.innerWidth < .5) {
      None -> Some(x + const)
    } else {
      Some(global.window.innerWidth.asInstanceOf[Double] - x + const) -> None
    }
    def cssValueOf(x: Option[Double]): js.Any = x.map(x => x: js.Any).getOrElse[js.Any]("")
    el.css("top", cssValueOf(top))
    el.css("right", cssValueOf(right))
    el.css("left", cssValueOf(left))
  }

  def insertPropStyle(property: String, styling:String): String = {
    styling match {
      case "descr" => s"<span class='propertyDescr'>$property</span>"
      case "value" => s"<span class='propertyValue'>$property</span>"
    }
  }
  def insertStyling(className:String, text:String) = s"<span class='$className'>$text</span>"
  def insertSocketColoring(sockets:String): String = {
    var sockRepl = sockets

      val s =sockRepl.replaceAll("G", insertStyling("G","G"))
      .replaceAll("R",insertStyling("R","R"))
      .replaceAll("B",insertStyling("B","B"))
      .replaceAll("W",insertStyling("W","W"))
    s
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
        s"""${insertStyling("propertyDescr",n)} ${insertStyling("propertyValue",vs(0).toString)}"""
      }
      xs.oIf(_.nonEmpty, _ => xs.mkString(insertStyling("propertyDescr","Requires "), ", ", ""), _ => "")
    }


    def properties = {
      (for {
        prop <- item.item.getPropertiesInterpolated
      } yield {
        insertStyling("propertyDescr",prop)
      }).mkString("<br>")
    }

    def flavorText = {
      item.item.flavourText.toOption.map(_.toList.mkString("<br>")).getOrElse("")
    }
    val itemName = item.item.getName
    val typeLine = item.item.typeLine
    val separator = s"""<div class='separator'></div>""" // before it was <hr>
    val titleName = if (itemName.isEmpty) {
      s"""<span class="item-name">${typeLine.toString}</span>"""
    } else s"""<span class="item-name">${itemName.toString}</span><br>${separator}${typeLine.toString}"""
    val sections = List(
      s"${insertStyling("propertyDescr","Location: ")}${insertStyling("propertyValue",item.locAndCoords)}",
      if (item.socketColors.nonEmpty) s"${insertStyling("propertyDescr", s"Sockets: ")}${insertStyling("propertyValue",insertSocketColoring(item.socketColors))}" else "",
      properties.replaceAll("([0-9\\-\\.\\%\\+]+)",insertStyling("propertyValue","$1")),
	    if (item.item.ilvl.toOption.get != 0) item.item.ilvl.toOption.map(value=> s"${insertStyling("propertyDescr","Item Level: ")}${insertStyling("propertyValue",value.toString)}").getOrElse("")
      else "",
	    requirements,
      item.item.secDescrText.toOption.map(_.toString).getOrElse(""),
      if (!item.item.enchantModsList.isEmpty) s"""<span class='enchantMod'>${item.item.enchantModsList.mkString("<br>")}</span>""" else "",
      item.item.scourgeModList.map(affix => s"<div class='mod scourgeMod'>$affix</div>").mkString("\n"),
      item.item.implicitModList.map(affix => s"<div class='mod implicitMod'>$affix</div>").mkString("\n"),
      item.item.fracturedModsList.map(affix => s"<div class='mod fracturedMod'>$affix</div>").mkString("\n"),
      item.item.explicitModList.map(affix => s"<div class='mod explicitMod'>$affix</div>").mkString("\n"),
      item.item.craftedModList.map(affix => s"<div class='mod craftedMod'>$affix</div>").mkString("\n"),
      if (item.item.incubatedItem.toOption.isDefined) {
        s"${insertStyling("propertyDescr","Incubating: ")}${insertStyling("propertyValue",item.item.incubatedItem.get.name)}<br>" +
        addProgressBar(item.item.incubatedItem.get.progress, item.item.incubatedItem.get.total, "incubator", true)
      } else "",
      //TODO more tests
      /*if (item.item.scourged.toOption.isDefined) {
          addProgressBar(item.item.scourged.toOption.get.progress.get, item.item.scourged.toOption.get.total.get, "scourge", true)
      } else "",*/
      item.item.cosmeticMods.toOption.map(_.mkString("<br>")).getOrElse(""),
      if (!flavorText.isEmpty) s"""<span class="flavorText">${flavorText}</span>""" else "",
      if (item.item.identified.toOption.map(x => x: Boolean).getOrElse(true)) "" else insertStyling("unidentified","Unidentified"),
      if (item.item.corrupted.toOption.map(x => x: Boolean).getOrElse(false)) insertStyling("corrupted","Corrupted") else "",
      if (item.item.scourged.toOption.isDefined) insertStyling("scourgeMod",s"Scourged (Tier ${item.item.scourged.get.tier})") else "",
      if (item.item.duplicated.toOption.map(x => x: Boolean).getOrElse(false)) insertStyling("mirrored","Mirrored") else "",
      if (item.item.veiled.toOption.map(x => x: Boolean).getOrElse(false)) insertStyling("veiled","veiled") else "",
      if (item.item.getInfluences.length > 0 ) s"Influence: ${item.item.getInfluences}" else "",
      s"""<span class="descrText">${item.item.descrText.toOption.getOrElse("")}</span>"""
    ).filter(_.nonEmpty)
    val h = s"""
        <img src="${item.item.getIconUrl}"></img><br>
        $titleName
        $separator
        ${sections.mkString(separator)}
        <span class="authors-note">Shift+Clicking refreshes (char/tab) item is in.</span>

        """
    el.attr("class", s"item-detail frame-type-$frameTypeName")
    if (Settings.isSet(Settings.TOOLTIP_TEXT_ALIGN)) el.addClass("user-settings-item-details") else el.removeClass("user-settings-item-details")
    el.html(h)
    el.show()
  }

  def hide() = el.hide()

}
