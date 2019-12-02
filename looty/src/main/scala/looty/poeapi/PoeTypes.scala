package looty
package poeapi

import cgta.serland.SerBuilder
import looty.model.CharClasses.CharClass
import looty.model.{CharClasses, InventoryIds}
import looty.model.InventoryIds.InventoryId
import util.Optional

import scala.concurrent.ExecutionContext
import scala.concurrent.Future
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
    object League {implicit val ser = SerBuilder.forCase(this.apply _)}
    case class League(rpcName : String) {
      val uriName =  js.URIUtils.encodeURIComponent(rpcName).toLowerCase
      def isStandard = rpcName.toLowerCase == "standard"
      def isHardcore = rpcName.toLowerCase == "hardcore"

      override def toString = rpcName
    }

    def fromString(s : String): Option[League] = all.find(_.rpcName == s)


    def init(pc : PoeCacher)(implicit context: ExecutionContext): Future[Unit] = {
      pc.getAllLeagues().map { leagues =>
        all = leagues
      }
    }

    var all : IVec[League] = null
  }

  trait PassivesTree extends js.Object {
    val hashes: js.Array[Int] = js.native
  }

  object CharacterInfo {
    implicit class CharacterInfoExtensions(c: CharacterInfo) {
      def getCharClass: CharClass = CharClasses.allIdMap(c.classId.toInt)
    }
  }

  trait CharacterInfo extends js.Object {
    val `class`: String = js.native
    val classId: Int = js.native
    val league: String = js.native
    val level: Int = js.native
    val name: String = js.native
  }

  object ItemContainer {
    implicit class ItemContainerExtensions(val ic: ItemContainer) extends AnyVal {
      def allItems(character: Option[String]): List[AnyItem] = {
        ic.items.toList.flatMap { item =>
        // socketedItems is now optional
        // if it's not empty..
          if (item.socketedItems.nonEmpty) {
            // get its contents, transform them to a list
            // return all socketed items in a list with their parent
            (item :: item.socketedItems.get.toList.map { i =>
              i.inItem = item
              i
            }) map { i =>
              character.foreach(c => i.character = c)
              i.locationId = i.getLocationId
              i
            }
          } else {
            // when there are no socketed items, just return a list with the item
            character.foreach(c => item.character = c)
            item.locationId = item.getLocationId
            List(item)
          }
        }
      }
    }
  }

  trait ItemContainer extends js.Object {
    protected val items: js.Array[AnyItem] = js.native
  }

  trait Inventory extends js.Object with ItemContainer {
    val character: String = js.native

    //Returned when there is an error (throttled)
    val error: Optional[String] = js.native
  }

  trait StashTab extends js.Object with ItemContainer {
    val numTabs: Int = js.native

    //Returned optionally when tabs = 1 is set
    val tabs: Optional[js.Array[StashTabInfo]] = js.native
    //Returned when there was an error (throttled for example)
    val error: Optional[String] = js.native
  }

  trait StashTabInfo extends js.Object {
    //Background color
    val colour: Colour = js.native
    //Index
    val i: Int = js.native
    //Name
    val n: String = js.native
    //Image to use for the tab
    val src: String = js.native
  }

  object Colour {
    implicit class ColourExtensions(val c: Colour) extends AnyVal {
      def toRgb = s"rgb(${c.r},${c.g},${c.b})"
    }
  }

  trait Colour extends js.Object {
    val r: Int = js.native
    val g: Int = js.native
    val b: Int = js.native
  }

  object AnyItem {
    case class FrameType(id: Int, name: String, color: String)
    object FrameTypes {
      val unknown = FrameType(-1, "unknown", "rgb(128,128,128)")
      val normal = FrameType(0, "normal", "rgb(255,255,255)")
      val magic = FrameType(1, "magic", "rgb(128,128,255)")
      val rare = FrameType(2, "rare", "rgb(255,255,0)")
      val unique = FrameType(3, "unique", "rgb(192,64,64)")
      val gem = FrameType(4, "gem", "rgb(0,192,192)")
      val currency = FrameType(5, "currency", "rgb(165,146,99)")
      val divCard = FrameType(6, "card", "rgb(165,146,99)")
      val quest = FrameType(7, "quest", "rgb(0,255,0)")
      val prophecy = FrameType(8, "prophecy", "rgb(128,128,0)")
      val relic = FrameType(9, "relic", "rgb(64,192,64)")

      val all = Array(normal, magic, rare, unique, gem, currency, divCard, quest, prophecy, relic)
    }

    /*val mapFragments = ISet(
      "Sacrifice at Dusk",
      "Sacrifice at Midnight",
      "Sacrifice at Dawn",
      "Sacrifice at Noon",
      "Mortal Grief",
      "Mortal Rage",
      "Mortal Hope",
      "Mortal Ignorance",
      "Offering to the Goddess",
      "Volkuur's Key",
      "Yriel's Key",
      "Eber's Key",
      "Inya's Key",
      "Fragment of the Minotaur",
      "Fragment of the Chimera",
      "Fragment of the Phoenix",
      "Fragment of the Hydra",
      "Ancient Reliquary Key")
    */

    implicit class AnyItemExtensions(val x: AnyItem) extends AnyVal {
      def isGem = x.getFrameType == FrameTypes.gem
      def isSupportGem = isGem && x.support
      def isSkillGem = isGem && !isSupportGem
      def isHideoutItem = explicitModList.contains("Creates an object in your hideout")
      def isCurrency = x.getFrameType == FrameTypes.currency && !isHideoutItem
      def isQuest = x.getFrameType == FrameTypes.quest
      def isMap = x.descrText.toOption.exists(_ contains "Travel to this Map")
      // all map fragments that can be used in the map device contain this bit of text in their description
			// special case Offering to the Goddess was included in fragment stash tab
      def isFragment = (x.descrText.toOption.exists(_ contains "Map Device")
				|| x.descrText.toOption.exists(_ contains "Aspirants' Plaza")
				//for splinters
				|| x.descrText.toOption.exists(_ contains "Combine 100")
				)
      def isFlask = x.descrText.toOption.exists(_ contains "Right click to drink.")
      def isJewel = x.descrText.toOption.exists(_ contains "Jewel Socket")
			def isAbyssJewel = x.abyssJewel.toOption.isDefined
      def isDivinationCard = x.getFrameType == FrameTypes.divCard

      def isInSocket = x.socket.toOption.isDefined

      def isProphecy = x.getFrameType == FrameTypes.prophecy
      def isLeaguestone = x.descrText.toOption.exists(_ contains "place a Leaguestone")

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
          prop <- props.toList.find(_.name.toString == "Map Tier").toList
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

      def getIconUrl: String = {
        if (x.artFilename.isDefined && x.artFilename != null && x.artFilename.nonEmpty) {
          val afn = x.artFilename.get
          if (afn.startsWith("http")) {
            afn
          } else {
            //"https://www.pathofexile.com/image/" + afn + ".png"
            "https://web.poecdn.com/image/divination-card/" + afn + ".png"
          }

        } else if (x.icon.startsWith("/")) {
          "https://www.pathofexile.com" + x.icon
        } else {
          x.icon
        }
      }

      def getName: String = {
        x.name.replaceAll("<<.*>>", "")
      }

      def getTypeLine: String = {
        x.typeLine.replaceAll("<<.*>>", "")
      }

    }
  }

  trait AnyItem extends js.Object {
    val artFilename: js.UndefOr[String] = js.native
    val verified: Boolean = js.native
    //width and height a big two handed is 2w by 3h a currency item 1w1h a dagger 1w3h
    val w: Int = js.native
    val h: Int = js.native
    //a Url
    val icon: String = js.native
    val support: Boolean = js.native
    val league: String = js.native
    private val name: String = js.native
    private val typeLine: String = js.native
    val cosmeticMods: Optional[js.Array[String]] = js.native
    val identified: Optional[Boolean] = js.native
    val corrupted: Optional[Boolean] = js.native
    //Mirrored
    val duplicated: Optional[Boolean] = js.native
    // Shaper items
    var shaper: Optional[Boolean] = js.native
    // Elder items
    var elder: Optional[Boolean] = js.native

		//abyss jewel
		val abyssJewel: Optional[Boolean] = js.native

    val additionalProperties: Optional[js.Array[AdditionalProperty]] = js.native
    val sockets: Optional[js.Array[Socket]] = js.native
    val properties: Optional[js.Array[ItemProperty]] = js.native
    val nextLevelRequirements: Optional[js.Array[ItemRequirement]] = js.native
    val requirements: Optional[js.Array[ItemRequirement]] = js.native
    val descrText: Optional[String] = js.native
    val secDescrText: Optional[String] = js.native
    val explicitMods: Optional[js.Array[String]] = js.native
    val craftedMods: Optional[js.Array[String]] = js.native
    val implicitMods: Optional[js.Array[String]] = js.native
    val frameType: Int = js.native
    val socketedItems: Optional[js.Array[AnyItem]] = js.native
    val flavourText: Optional[js.Array[String]] = js.native
    val ilvl: Optional[Int] = js.native

    //For items that are not socketed in other items
    val x: Optional[Int] = js.native
    //The top left corner, when in an item slot, this is 0,0 from what i can tell
    val y: Optional[Int] = js.native
    val inventoryId: Optional[String] = js.native

    //For items that are socketed in other items
    val socket: Optional[Int] = js.native
    val colour: Optional[String] = js.native

    //Added by allItems
    var inItem: Optional[AnyItem] = js.native
    var character: Optional[String] = js.native
    var locationId: Optional[String] = js.native

  }

  trait AdditionalProperty extends js.Object {
    val displayMode: Int = js.native
    //Experience for gem experience
    val name: String = js.native
    //0 to 1 depending on progress to next level for gems
    val progress: Int = js.native
    //For XP in Gems: Typically the 0th element of the inner array is a string like "175815/175816"
    val values: js.Array[js.Array[js.Any]] = js.native
  }

  object Socket {
    implicit class SocketExtensions(val s: Socket) extends AnyVal {
      def color = s.attr.toString match {
        case "S" => "R"
        case "D" => "G"
        case "I" => "B"
        case "false" => "A"
        case _ => "W"
      }
    }
  }

  trait Socket extends js.Object {
    val group: Int = js.native
    //used for socket groups, aka a 6 linked would have all sockets in group 0
    //val attr: String = js.native //Seems to be DSI not sure what white is as I don't have a Tabula Rasa ... yet...
    val attr: Any = js.native
  }

  object ItemProperty {
    implicit class ItemPropertyExtensions(val x: ItemProperty) extends AnyVal {
      def firstValue: String = x.values(0)(0).toString
    }
  }

  trait ItemProperty extends js.Object {
    val name: String = js.native
    val values: js.Array[js.Array[Any]] = js.native
    val displayMode: Int = js.native
  }

  trait ItemRequirement extends js.Object {
    val name: Optional[String] = js.native
    val values: js.Array[js.Array[js.Array[String]]] = js.native
    val displayMode: Int = js.native
  }

}
