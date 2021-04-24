package looty
package poeapi

import cgta.serland.SerBuilder
import looty.model.CharClasses.CharClass
import looty.model.{CharClasses, InventoryIds}
import looty.model.InventoryIds.InventoryId
import looty.views.CheckpointFmts.format2
import util.{Optional, ProgressBar}

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
				|| x.descrText.toOption.exists(_ contains "Aspirants' Plaza"))
      def isOrgan = x.descrText.toOption.exists(_ contains "in Tane's Laboratory")
      def isSplinter = x.descrText.toOption.exists(_ contains "Combine 100")
      def isFlask = x.descrText.toOption.exists(_ contains "Right click to drink.")
      def isJewel = x.descrText.toOption.exists(_ contains "Jewel Socket")
			def isAbyssJewel = x.abyssJewel.toOption.isDefined
      def isDivinationCard = x.getFrameType == FrameTypes.divCard
      //QUESTION maybe all which people treat as currency would be "something | Currency", or just "Currency - Delirium Orb", or just leave it as "Currency"
      //Official list of currency :


      //TODO add other types then currency-->
      //Fossil - Delve league 3.4
      def isFossil = x.typeLine.contains("Fossil")
      //QUESTION how to make so user could search for incubators which are also attached currently to items?
      //Incubator - Legion league 3.7
      def isIncubator = x.typeLine.contains("Incubator")
      //Delirium Orb - Blight league 3.8
      def isDeliriumOrb = x.typeLine.contains("Delirium Orb")

      //Timeless Jewel - Legion league 3.7
      def isTimelessJewel = x.typeLine.contains("Timeless Jewel")
      //Cluster Jewel - Blight league 3.8
      def isClusterJewel = x.typeLine.contains("Cluster Jewel")
      //Resonator - Delve league 3.4
      def isResonator = x.typeLine.contains("Resonator")
      //Essence - Essence league 2.4
      def isEssence = x.typeLine.contains("Essence")
      //Scarab - Betrayal league 3.5
      def isScarab = x.typeLine.contains("Scarab")
      //Oil - Blight league 3.8
      def isOil = x.typeLine.contains("Oil")
      //Watchstone
      def isWatchstone = x.typeLine.contains("Watchstone")
      //Beast
      def isBeast = x.typeLine.contains("Beast")
      //Hireling Equipment - Heist league 3.12
      def isHirelingE = x.descrText.toOption.exists(_ contains "Can only be equipped to Heist members.")
      def isBlueprint = x.typeLine.contains("Blueprint")
      def isContract = x.typeLine.contains("Contract")
      // TODO --
      def isInSocket = x.socket.toOption.isDefined

      def isProphecy = x.getFrameType == FrameTypes.prophecy
      def isLeaguestone = x.descrText.toOption.exists(_ contains "place a Leaguestone")

      def implicitModList = x.implicitMods.toOption.getOrElse(js.Array()).toList
      def explicitModList = x.explicitMods.toOption.getOrElse(js.Array()).toList
      def craftedModList = x.craftedMods.toOption.getOrElse(js.Array()).toList
      def enchantModsList = x.enchantMods.toOption.getOrElse(js.Array()).toList
      def fracturedModsList = x.fracturedMods.toOption.getOrElse(js.Array()).toList

      def isCrafted: Boolean = if (x.craftedMods.toOption.getOrElse(js.Array()).toList.length>0) true else false

      def getIncubatorRewardName: String = {
        if (x.incubatedItem.toOption.isDefined) {
          x.incubatedItem.get.name.toString
        } else ""
      }
//      def getIncubator: Optional[Incubator] = {
//          x.incubatedItem.get
//      }
      def getInfluences:String = {
        if (x.influences.toOption.isDefined) {
          x.influences.toOption.get.map(_._1).mkString(" ")

        } else ""
      }


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
          if (prop.name.contains("{0}")) {
            res = res.replaceAll("\\{0\\}", prop.values(0)(0).toString)
            didInterpol = true
          }
          if (prop.name.contains("{1}")) {
            res = res.replaceAll("\\{1\\}", prop.values(1)(0).toString)
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

    }
  }

  trait AnyItem extends js.Object {
    //items id - string of 64 hex chars
    val id: String = js.native
    //Used in div cards, name without spaces in it
    val artFilename: js.UndefOr[String] = js.native
    //true if the item has not changed since it was linked
    val verified: Boolean = js.native
    //width and height a big two handed is 2w by 3h a currency item 1w1h a dagger 1w3h
    val w: Int = js.native
    val h: Int = js.native
    //Icon Url on ggg site
    val icon: String = js.native
    //Found only on gems, which can be support for spells (true) or active spells (false)
    val support: Boolean = js.native
    //Standard, Standard Solo Self Found (SSF), Hardcore, Hardcore SSF, Temp League, Temp League SSF, Temp League Hardcore, Temp League Hardcore SSF, Private league...
    val league: String = js.native
    //Item name, except div cards has empty string ""
    private val name: String = js.native
    //Specific item type like, Vaal Regalia - ES chest
    val typeLine: String = js.native
    //Cosmetic assigned to that item
    val cosmeticMods: Optional[js.Array[String]] = js.native
    //On gems/currency/fragments always true, other items ture/false
    val identified: Optional[Boolean] = js.native
    //Corrupted by use of vaal orb, temple of corruption or other source
    val corrupted: Optional[Boolean] = js.native
    //Mirrored
    val duplicated: Optional[Boolean] = js.native
    //Veiled - added in 3.5 Betrayal league - sadly modlist property not available
    val veiled: Optional[Boolean] = js.native
    //Introduced in league Legion 3.7. Item incubators, which are attached to any item equipped by character, when incubation is complete (you killed x number of mobs) item of specific type drops
    val incubatedItem: Optional[Incubator] = js.native
    //Shaper items - Depraciated and replaced by "influences"
    //var shaper: Optional[Boolean] = js.native
    //Elder items - Depraciated and replaced by "influences"
    //var elder: Optional[Boolean] = js.native
    //Introduced in 3.9 when map system was reworked, and besides shaper and elder, item can be influenced by Crusader, Hunter, Redeemer or Warlord
    //Thus new artwork of top corners of tooltips was introduced. You can have up to two influences at once.
    var influences: Optional[js.Dictionary[Influence]] = js.native
    //item can have fracture mods - one of affixes is permament, and stays after scouring
    val fractured: Optional[Boolean] = js.native
    //introduced in 3.6 Synthesis league //double with "fractured" property
    val synthesised: Optional[Boolean] = js.native
    val fracturedMods: Optional[js.Array[String]] = js.native
		//Abyss jewel that is socketed only in item with abyss sockets, or in sockets of skille tree
		val abyssJewel: Optional[Boolean] = js.native
    //used for gem experience, incubator progress
    val additionalProperties: Optional[js.Array[AdditionalProperty]] = js.native
    //As name suggests socket to put gems/jewels(abyss) there
    val sockets: Optional[js.Array[Socket]] = js.native
    //Array of various properties like gem level, cast time, mana cost, chance to block, energy shield ...
    val properties: Optional[js.Array[ItemProperty]] = js.native

    val hybrid: Optional[Hybrid] = js.native
    //used in gems for stating attribute, level requirements for next level
    val nextLevelRequirements: Optional[js.Array[ItemRequirement]] = js.native
    //used in items for stating require attributes, level to equip that item
    val requirements: Optional[js.Array[ItemRequirement]] = js.native
    //Delve 3.4 used in resonator items
    val delve: Optional[Boolean] = js.native
    //description on Gems/Flasks
    val descrText: Optional[String] = js.native
    //if description text is longer, ex. description of gem effect
    val secDescrText: Optional[String] = js.native
    //mods that can include for example corruption effects
    val implicitMods: Optional[js.Array[String]] = js.native
    //up to 6 mods/affixes on item
    val explicitMods: Optional[js.Array[String]] = js.native
    //Mods crafted with crafting bench
    val craftedMods: Optional[js.Array[String]] = js.native
    //mods added in Lords Labirytnh (gloves/boots/helms), in Cluster Jewels (Delirium league), from anointment with oils (rings/amulet) (Blight league)
    val enchantMods: Optional[js.Array[String]] = js.native
    //Normal, Magic, Rare, Unique type of items, also Gems
    //0 - normal items
    //1 - magic items
    //2 - rare items
    //3 - unique items
    //4 - gems
    val frameType: Int = js.native
    //List of items that are socketed into the sockets of the item. Gems/Abyssal Jewel in abyssal socket
    val socketedItems: Optional[js.Array[AnyItem]] = js.native
    //Array of lines of the flavour text of e.g. unique items.
    val flavourText: Optional[js.Array[String]] = js.native
    //Item level of item - if dropped from monster then level of area
    //Gem ilvl is equal 0
    val ilvl: Optional[Int] = js.native

    //For items that are not socketed in other items
    val x: Optional[Int] = js.native
    //The top left corner, when in an item slot, this is 0,0 from what i can tell
    val y: Optional[Int] = js.native
    //"MainInventory" if in character inventory, otherwise item slot on character
    //"Amulet" "Belt", "BodyArmour", "Boots", "Flask" "Gloves", "Helm", "Offhand", "Offhand2", "Ring" "Ring2" "Weapon", "Weapon2",
    val inventoryId: Optional[String] = js.native

    //TODO check placement
    //Placement (upper left, upper right, lower right, lower left)
    // of socket in item 0, 1, 2, 3 for 4 socketed items (gloves/boots/helms), 4, 5 for 6 socketed (body armor, 2h weapons) (upper left, upper right, middle right, lower right, lower left, middle left)
    val socket: Optional[Int] = js.native
    //letter of main attribute required by gem (str,dex,int) "S" "D" "I", null for Abyss jewel
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

  trait Hybrid extends js.Object { //in vaal gems Vaal part is discribed with hybrid object
    val isVaalGem: Boolean = js.native
    val baseTypeName: String = js.native
    val properties: js.Array[AdditionalProperty] = js.native
    val explicitMods: js.Array[String] = js.native
    val secDescrText: String = js.native
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

  trait Influence extends js.Object {
    val elder: Optional[Boolean] = js.native
    val shaper: Optional[Boolean] = js.native
    val crusader: Optional[Boolean] = js.native
    val redeemer: Optional[Boolean] = js.native
    val hunter: Optional[Boolean] = js.native
    val warlord: Optional[Boolean] = js.native
  }
  // excerpt from JSON
  //    "incubatedItem": {
  //      "name": "Rare Abyss Item",
  //      "level": 40,
  //      "progress": 4571,
  //      "total": 5532
  //    }

  //TODO add to ItemHoverDetail.scala
  trait Incubator extends js.Object {
    //What kind of items you will get after incubation is over, which means after you kill "total" number of monsters
    //ex. "Rare Abyss Item", "Currency Item" and others...
    val name:String = js.native
    //Kill monsters of higher or equal level
    val level:Int = js.native
    //How many monsters you already killed with incubator equipped
    val progress:Int = js.native
    //How many monsters you have to kill
    val total:Int = js.native
  }
}
