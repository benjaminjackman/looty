package looty
package poeapi

import scala.scalajs.js
import cgta.ojs.lang.Optional


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/10/13 9:16 PM
//////////////////////////////////////////////////////////////


object PoeTypes {

  type Characters = js.Array[CharacterInfo]

  type StashTabInfos = js.Array[StashTabInfo]

  object Leagues {

    val Standard   = "Standard"
    val Domination = "Domination"
    val Hardcore   = "Hardcore"
    val Nemesis    = "Nemesis"

    val all = List(Standard, Domination, Hardcore, Nemesis)
  }

  trait CharacterInfo extends js.Object {
    val `class`: js.String
    val classId: js.Number
    val league : js.String
    val level  : js.Number
    val name   : js.String
  }

  trait ItemContainer extends js.Object {
    val items: js.Array[AnyItem]
  }

  trait Inventory extends js.Object with ItemContainer {
    val error    : Optional[js.String]
    val character: js.String

  }

  trait StashTab extends js.Object with ItemContainer {
    val numTabs: js.Number

    //Returned optionally when tabs = 1 is set
    val tabs : Optional[js.Array[StashTabInfo]]
    val error: Optional[js.String]
  }

  trait StashTabInfo extends js.Object {
    //Background color
    val colour: Colour
    //Index
    val i     : js.Number
    //Name
    val n     : js.String
    //Image to use for the tab
    val src   : js.String
  }

  object Colour {
    implicit class ColourExtensions(val c: Colour) extends AnyVal {
      def toRgb = s"rgb(${c.r},${c.g},${c.b})"
    }
  }

  trait Colour extends js.Object {
    val r: js.Number
    val g: js.Number
    val b: js.Number
  }

  object AnyItem {
    case class FrameType(id: Int, name: String)
    object FrameTypes {
      val unknown  = FrameType(-1, "unknown")
      val normal   = FrameType(0, "normal")
      val magic    = FrameType(1, "magic")
      val rare     = FrameType(2, "rare")
      val unique   = FrameType(3, "unique")
      val gem      = FrameType(4, "gem")
      val currency = FrameType(5, "currency")
      val quest    = FrameType(6, "quest")

      val all = List(normal, magic, rare, unique, gem, currency, quest)
    }

    implicit class AnyItemExtensions(val x: AnyItem) extends AnyVal {
      def isGem = x.getFrameType == FrameTypes.gem
      def isCurrency = x.getFrameType == FrameTypes.currency
      def isQuest = x.getFrameType == FrameTypes.quest
      def isMap = x.descrText.toOption.exists(_ contains "Travel to this Map")
      def isFlask = x.descrText.toOption.exists(_ contains "Right click to drink.")

      def getFrameType = {
        val ft = x.frameType.toInt
        if (ft >= FrameTypes.all.size) {
          console.error("Unknown frame type", ft, x)
          FrameTypes.unknown
        } else {
          FrameTypes.all(ft)
        }
      }
    }
  }

  trait AnyItem extends js.Object {
    val verified     : js.Boolean
    //width and height a big two handed is 2w by 3h a currency item 1w1h a dagger 1w3h
    val w            : js.Number
    val h            : js.Number
    //a Url
    val icon         : js.String
    val support      : js.Boolean
    val league       : js.String
    val name         : js.String
    val typeLine     : js.String
    val identified   : js.Boolean
    val sockets      : Optional[js.Array[Socket]]
    val properties   : Optional[js.Array[ItemProperty]]
    val requirements : Optional[js.Array[ItemRequirement]]
    val descrText    : Optional[js.String]
    val secDescrText : Optional[js.String]
    val explicitMods : Optional[js.Array[js.String]]
    val implicitMods : Optional[js.Array[js.String]]
    val frameType    : js.Number
    val socketedItems: js.Array[AnyItem]

    //For items that are not socketed in other items
    val x          : js.Number
    //The top left corner, when in an item slot, this is 0,0 from what i can tell
    val y          : js.Number
    val inventoryId: js.String

    //For items that are socketed in other items
    val socket: Optional[js.Number]
    val colour: Optional[js.String]

  }

  object Socket {
    implicit class SocketExtensions(val s: Socket) extends AnyVal {
      def color = s.attr.toString match {
        case "S" => "R"
        case "D" => "G"
        case "I" => "B"
        case _ => "W"
      }
    }
  }

  trait Socket extends js.Object {
    val group: js.Number
    //used for socket groups, aka a 6 linked would have all sockets in group 0
    val attr : js.String //Seems to be DSI not sure what white is as I don't have a Tabula Rasa ... yet...
  }

  object ItemProperty {
    implicit class ItemPropertyExtensions(val x: ItemProperty) extends AnyVal {
      def firstValue: String = x.values(0)(0).toString
    }
  }

  trait ItemProperty extends js.Object {
    val name       : js.String
    val values     : js.Array[js.Array[Any]]
    val displayMode: js.Number
  }

  trait ItemRequirement extends js.Object {
    val name       : Optional[js.String]
    val values     : js.Array[js.Array[js.Array[js.String]]]
    val displayMode: js.Number
  }

}