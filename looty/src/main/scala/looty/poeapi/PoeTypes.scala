package looty
package poeapi

import looty.model.CharClasses.CharClass
import looty.model.{CharClasses, InventoryIds}
import looty.model.InventoryIds.InventoryId
import util.Optional

import scala.scalajs.js


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
    case class League(name : String, poeName : String)

    val Standard = League("Standard", "Standard")
    val Hardcore = League("Hardcore", "Hardcore")
    val Warbands = League("Warbands", "Warbands")
    val Tempest = League("Tempest", "Tempest")

    val all = List(Standard, Hardcore, Warbands, Tempest)
  }

  trait PassivesTree extends js.Object {
    val hashes: js.Array[Int]
  }

  object CharacterInfo {
    implicit class CharacterInfoExtensions(c: CharacterInfo) {
      def getCharClass: CharClass = CharClasses.allIdMap(c.classId.toInt)
    }
  }

  trait CharacterInfo extends js.Object {
    val `class`: js.String
    val classId: js.Number
    val league : js.String
    val level  : js.Number
    val name   : js.String
  }

  object ItemContainer {
    implicit class ItemContainerExtensions(val ic: ItemContainer) extends AnyVal {
      def allItems(character: Option[String]): List[AnyItem] = {
        ic.items.toList.flatMap { item =>
          (item :: item.socketedItems.toList.map { i =>
            i.inItem = item
            i
          }) map { i =>
            character.foreach(c => i.character = c)
            i.locationId = i.getLocationId
            i
          }
        }
      }
    }
  }

  trait ItemContainer extends js.Object {
    protected val items: js.Array[AnyItem]
  }

  trait Inventory extends js.Object with ItemContainer {
    val character: js.String

    //Returned when there is an error (throttled)
    val error: Optional[js.String]
  }

  trait StashTab extends js.Object with ItemContainer {
    val numTabs: js.Number

    //Returned optionally when tabs = 1 is set
    val tabs : Optional[js.Array[StashTabInfo]]
    //Returned when there was an error (throttled for example)
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
    case class FrameType(id: Int, name: String, color: String)
    object FrameTypes {
      val unknown  = FrameType(-1, "unknown", "rgb(128,128,128)")
      val normal   = FrameType(0, "normal", "rgb(255,255,255)")
      val magic    = FrameType(1, "magic", "rgb(128,128,255)")
      val rare     = FrameType(2, "rare", "rgb(255,255,0)")
      val unique   = FrameType(3, "unique", "rgb(192,64,64)")
      val gem      = FrameType(4, "gem", "rgb(0,192,192)")
      val currency = FrameType(5, "currency", "rgb(165,146,99)")
      val divCard = FrameType(6, "card", "rgb(165,146,99)")
      val quest    = FrameType(7, "quest", "rgb(0,255,0)")

      val all = Array(normal, magic, rare, unique, gem, currency, divCard, quest)
    }

    val vaalFragments = ISet(
      "Sacrifice at Dusk",
      "Sacrifice at Midnight",
      "Sacrifice at Dawn",
      "Sacrifice at Noon",
      "Mortal Grief",
      "Mortal Rage",
      "Mortal Hope",
      "Mortal Ignorance")

    implicit class AnyItemExtensions(val x: AnyItem) extends AnyVal {
      def isGem = x.getFrameType == FrameTypes.gem
      def isSupportGem = isGem && x.support
      def isSkillGem = isGem && !isSupportGem
      def isHideoutItem = explicitModList.contains("Creates an object in your hideout")
      def isCurrency = x.getFrameType == FrameTypes.currency && !isHideoutItem
      def isQuest = x.getFrameType == FrameTypes.quest
      def isMap = x.descrText.toOption.exists(_ contains "Travel to this Map")
      def isFragment = vaalFragments(x.typeLine)
      def isFlask = x.descrText.toOption.exists(_ contains "Right click to drink.")
      def isJewel = x.descrText.toOption.exists(_ contains "Jewel Socket")
      def isDivinationCard = x.getFrameType == FrameTypes.divCard

      def isInSocket = x.socket.toOption.isDefined

      def implicitModList = x.implicitMods.toOption.getOrElse(js.Array()).toList
      def explicitModList = x.explicitMods.toOption.getOrElse(js.Array()).toList
      def craftedModList = x.craftedMods.toOption.getOrElse(js.Array()).toList

      def getFrameType = {
        val ft = x.frameType.toInt
        if (ft >= FrameTypes.all.size) {
          console.error("Unknown frame type", ft, x)
          FrameTypes.unknown
        } else {
          FrameTypes.all(ft)
        }
      }

      def getInventoryId: Option[InventoryId] = {
        x.inventoryId.toOption.flatMap(iid => InventoryIds.fromItem(iid, x.x.toOption.map(_.toInt).getOrElse(0)))
      }

      def isDigit(c: Char): Boolean = c >= '0' && c <= '9'

      //(X level, Y experience points, Z needed for next level)
      def getXpProgress: Option[(Int, Long, Long)] = {
        (for {
          ps <- x.additionalProperties.toOption.toList
          p <- ps.toList
          if p.name.toString == "Experience"
          prog = p.progress
          vss <- p.values.toList
          v <- vss.toList.headOption
          (c, n) <- v.toString.split("/").toList match {
            case c :: t :: Nil => Some(c.toLong -> t.toLong)
            case xs => None
          }
          l <- x.getLevel
        } yield {
          (l, c, n)
        }).headOption
      }

      def getLevel: Option[Int] = {
        (for {
          props <- x.properties.toOption.toList
          prop <- props.toList.find(_.name.toString == "Level").toList
          lvss <- prop.values.toList
          lv <- lvss.toList.headOption
          l = lv.toString.trim.takeWhile(isDigit).toInt
        } yield {
          l
        }).headOption
      }

      def getMapLevel: Option[Int] = {
        (for {
          props <- x.properties.toOption.toList
          prop <- props.toList.find(_.name.toString == "Map Level").toList
          lvss <- prop.values.toList
          lv <- lvss.toList.headOption
          l = lv.toString.trim.takeWhile(isDigit).toInt
        } yield {
          l
        }).headOption
      }


      def getLocationId: String = {
        val i = if (x.inItem.isEmpty) x else x.inItem.get
        var res = s"l:${i.league}"
        if (i.character.nonEmpty) res += s";c:${i.character}"
        if (i.inventoryId.nonEmpty) res += s";i:${i.inventoryId}"
        if (i.x.nonEmpty) res += s";x:${i.x}"
        if (i.y.nonEmpty) res += s";y:${i.y}"
        if (x.inItem.nonEmpty) res += s";s:${x.socket}"
        res
      }

      def getCountInStack: Option[Int] = {
        (for {
          props <- x.properties.toOption.toList
          prop <- props.toList.find(_.name.toString == "Stack Size").toList
          lvss <- prop.values.toList
          lv <- lvss.toList.headOption
          l = lv.toString.trim.takeWhile(isDigit).toInt
        } yield {
          l
        }).headOption
      }

      def getGemKeywords: Option[String] = {
        for {
          props <- x.properties.toOption
          prop <- props.headOption
          if (this.isGem)
        } yield {
          prop.name
        }
      }

      def getPropertiesInterpolated: List[String] = {
        for {
          prop <- x.properties.toOption.toList.map(_.toList).flatten
        } yield {
          var res = prop.name
          var didInterpol = false
          if (prop.name.contains("%0")) {
            res = res.replaceAll("%0", prop.values(0)(0).toString)
            didInterpol = true
          }
          if (prop.name.contains("%1")) {
            res = res.replaceAll("%1", prop.values(1)(0).toString)
            didInterpol = true
          }

          if (didInterpol) {
            res
          } else {
            val vs = for {
              v <- prop.values.toList
            } yield {
              v(0)
            }
            res + " " + vs.mkString("")
          }
        }
      }
    }
  }

  trait AnyItem extends js.Object {
    val verified             : js.Boolean
    //width and height a big two handed is 2w by 3h a currency item 1w1h a dagger 1w3h
    val w                    : js.Number
    val h                    : js.Number
    //a Url
    val icon                 : js.String
    val support              : js.Boolean
    val league               : js.String
    val name                 : js.String
    val typeLine             : js.String
    val cosmeticMods         : Optional[js.Array[js.String]]
    val identified           : Optional[js.Boolean]
    val corrupted            : Optional[js.Boolean]
    //Mirrored
    val duplicated           : Optional[js.Boolean]
    val additionalProperties : Optional[js.Array[AdditionalProperty]]
    val sockets              : Optional[js.Array[Socket]]
    val properties           : Optional[js.Array[ItemProperty]]
    val nextLevelRequirements: Optional[js.Array[ItemRequirement]]
    val requirements         : Optional[js.Array[ItemRequirement]]
    val descrText            : Optional[js.String]
    val secDescrText         : Optional[js.String]
    val explicitMods         : Optional[js.Array[js.String]]
    val craftedMods          : Optional[js.Array[js.String]]
    val implicitMods         : Optional[js.Array[js.String]]
    val frameType            : js.Number
    val socketedItems        : js.Array[AnyItem]
    val flavourText          : Optional[js.Array[js.String]]

    //For items that are not socketed in other items
    val x          : Optional[js.Number]
    //The top left corner, when in an item slot, this is 0,0 from what i can tell
    val y          : Optional[js.Number]
    val inventoryId: Optional[js.String]

    //For items that are socketed in other items
    val socket: Optional[js.Number]
    val colour: Optional[js.String]

    //Added by allItems
    var inItem    : Optional[AnyItem]
    var character : Optional[js.String]
    var locationId: Optional[js.String]

  }

  trait AdditionalProperty extends js.Object {
    val displayMode: js.Number
    //Experience for gem experience
    val name       : js.String
    //0 to 1 depending on progress to next level for gems
    val progress   : js.Number
    //For XP in Gems: Typically the 0th element of the inner array is a string like "175815/175816"
    val values     : js.Array[js.Array[js.Any]]
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