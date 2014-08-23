package looty
package model

import looty.poeapi.PoeTypes.AnyItem
import looty.model.WeaponTypes.WeaponType


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 1:06 PM
//////////////////////////////////////////////////////////////


case class MinMaxDamage(var min: Double, var max: Double) {
  def avg = (min + max) / 2.0
  def +=(min: Double, max: Double) {
    this.min += min
    this.max += max
  }
  def set(that: MinMaxDamage) {
    this.min = that.min
    this.max = that.max
  }
}

//object ComputedItem {
//  implicit class ComputedItemExtensions(val item : ComputedItem) extends AnyVal {
//
//  }
//
//  def apply(item : AnyItem) : ComputedItem = {
//    ???
//  }
//}

class ComputedItem(val item: AnyItem, val containerId: LootContainerId, val locationName: String) {
  lazy val maxLinks: Int       = item.sockets.toOption.map(_.toList.map(_.group).groupBy(x => x).map(_._2.size).maxOpt.getOrElse(0)).getOrElse(0)
  lazy val score   : ItemScore = ItemScorer(this).getOrElse(ItemScore(Nil, 0))

  def maxResist = plusTo.resistance.all.max
  def magicFind = increased.quantityOfItemsFound + increased.rarityOfItemsFound

  def isEquippable = !item.isGem && !item.isCurrency && !item.isMap && !item.isQuest

  def displayName = {
    var n = item.name
    if (n.nullSafe.isEmpty || n.isEmpty) n = item.typeLine
    n
  }

  def forumLocationName = {
    //[linkItem location="Stash4" league="Rampage" x="0" y="0"]
    //[linkItem location="MainInventory" character="frostlarr" x="0" y="2"]

    for (x <- item.x.toOption; y <- item.y.toOption) yield {
      containerId match {
        case InventoryId(char) =>
          s"""[linkItem location="MainInventory" character="$char" x="$x" y="$y"]"""
        case StashTabIdx(idx) =>
          val league = item.league
          s"""[linkItem location="Stash${idx + 1}" league="$league" x="$x" y="$y"]"""
      }
    }

  }

  //This location includes coordinates
  def locAndCoords = s"${locationName} x:${item.x.toOption.map(_ + 1).getOrElse("")} y:${item.y.toOption.map(_ + 1).getOrElse("")}"

  def typeName = {
    if (slots.isAmulet) "Amulet"
    else if (slots.isRing) "Ring"
    else if (slots.isHelmet) "Helmet"
    else if (slots.isChest) "Chest"
    else if (slots.isGloves) "Gloves"
    else if (slots.isBoots) "Boots"
    else if (slots.isBelt) "Belt"
    else if (slots.isShield) "Shield"
    else if (slots.isQuiver) "Quiver"
    else if (slots.isFlask) "Flask"
    else if (slots.isWeapon) properties.weaponType.toShortString
    else if (item.isCurrency) "Currency"
    else if (item.isGem) "Gem"
    else if (item.isMap) "Map"
    else if (item.isQuest) "QuestItem"
    else "UNKNOWN ITEM TYPE"
  }

  object increased {
    val damage                         = Elements mutable 0.0
    var stunDurationOnEnemies          = 0.0
    var chillDurationOnEnemies         = 0.0
    var attackSpeed                    = 0.0
    var globalCriticalStrikeMultiplier = 0.0
    var globalCriticalStrikeChance     = 0.0
    var criticalStrikeChance           = 0.0
    var criticalStrikeChanceForSpells  = 0.0
    var armour                         = 0.0
    var evasion                        = 0.0
    var energyShield                   = 0.0
    var maximumEnergyShield            = 0.0
    var quantityOfItemsFound           = 0.0
    var rarityOfItemsFound             = 0.0
    var movementSpeed                  = 0.0
    var blockAndStunRecovery           = 0.0
    var spellDamage                    = 0.0
    var manaRegenerationRate           = 0.0
    var elementalDamageWithWeapons     = 0.0
    var lightRadius                    = 0.0
    var castSpeed                      = 0.0
    var projectileSpeed                = 0.0
    var accuracyRating                 = 0.0
    var blockRecovery                  = 0.0
    var elementalDamage                = 0.0
  }

  object increasedSpell {
    def elemental = increased.spellDamage + increased.elementalDamage
    val elements = new Elements[Double] {
      override def physical: Double = increased.spellDamage + increased.damage.physical
      override def fire: Double = increased.spellDamage + increased.damage.fire
      override def cold: Double = increased.spellDamage + increased.damage.cold
      override def chaos: Double = increased.spellDamage + increased.damage.lightning
      override def lightning: Double = increased.spellDamage + increased.damage.chaos
    }
  }

  object reduced {
    var attributeRequirements = 0.0
    var enemyStunThreshold    = 0.0
  }

  var sockets: List[List[String]] = Nil
  lazy val socketColors      = sockets.map(_.mkString("-")).mkString(" ")
  lazy val socketCnt   : Int = sockets.map(_.size).sum
  lazy val maxLink           = sockets.map(_.size).maxOpt.getOrElse(0)
  lazy val propLevel   : Int = item.getLevel.getOrElse(0)
  lazy val mapLevel    : Int = item.getMapLevel.getOrElse(0)
  lazy val countInStack: Int = item.getCountInStack.getOrElse(0)

  lazy val misc: Double = {
    if (countInStack > 0) countInStack
    else if (socketCnt > 0) socketCnt
    else if (propLevel > 0) propLevel
    else if (mapLevel > 0) mapLevel
    else 0.0
  }

  object requirements {
    var level     = 0.0
    var attribute = Attributes.mutable(0.0)
  }

  val damages = Elements of MinMaxDamage(0, 0)

  object plusTo {
    val attribute  = Attributes mutable 0.0
    val resistance = Elements mutable 0.0
    def totalResistance = resistance.all.sum
    def maxResistance = resistance.all.max
    val lifeAndMana    = LifeAndMana mutable 0.0
    var accuracyRating = 0.0
    var evasionRating  = 0.0
    var armour         = 0.0
    var energyShield   = 0.0
  }

  object leech {var physical = LifeAndMana mutable 0.0}
  object onKill {var lifeAndMana = LifeAndMana mutable 0.0}
  object onHit {var lifeAndMana = LifeAndMana mutable 0.0}
  object gemLevel {
    val element   = Elements mutable 0.0
    val attribute = Attributes mutable 0.0
    var melee     = 0.0
    var minion    = 0.0
    var bow       = 0.0
    var any       = 0.0
    def addToAll(n: Double) = {
      Elements.all.foreach(element +=(_, n))
      Attributes.all.foreach(attribute +=(_, n))
      melee += n
      minion += n
      bow += n
      any += n
    }
    def max = (List(melee, minion, bow) ::: attribute.all ::: element.all).max
  }

  object total {
    def dps: Double = perElementDps.all.sum
    val perElementDps = Elements calculatedWith { element =>
      if (slots.isWeapon) {
        properties.damages(element).avg * properties.attacksPerSecond
      } else {
        damages(element).avg
      }
    }
    def armour = properties.armour.oIf(_ == 0.0, x => plusTo.armour, x => x)
    def evasionRating = properties.evasionRating.oIf(_ == 0.0, x => plusTo.evasionRating, x => x)
    def energyShield = properties.energyShield.oIf(_ == 0.0, x => plusTo.energyShield, x => x)
    def critChance = (100 + increased.globalCriticalStrikeChance) / 100.0 *
      properties.criticalStrikeChance


  }

  object slots {
    def is1H: Boolean = properties.weaponType.is1H
    def is2H: Boolean = properties.weaponType.is2H
    def isWeapon: Boolean = properties.weaponType.isWeapon
    def isFlask = item.isFlask
    var isSpiritShield = false
    var isShield       = false

    var isHelmet = false
    var isChest  = false
    var isGloves = false
    var isAmulet = false
    var isRing   = false
    var isBelt   = false
    var isBoots  = false
    var isQuiver = false
  }


  object properties {
    var weaponType: WeaponType = WeaponTypes.NoWeaponType
    var armour                 = 0.0
    var energyShield           = 0.0
    var evasionRating          = 0.0
    val damages                = Elements of MinMaxDamage(0, 0)
    var quality                = 0.0
    var criticalStrikeChance   = 0.0
    var attacksPerSecond       = 0.0
    var chanceToBlock          = 0.0
    var stackSize              = 0.0
  }

  var reflectsPhysicalDamageToAttackers = 0.0
  var blockChance                       = 0.0

  val regeneratedPerSecond = LifeAndMana mutable 0.0

  object flask {
    object increased {
      var lifeRecoveryRate   = 0.0
      var effectDuration     = 0.0
      var manaRecoveryRate   = 0.0
      var flaskRecoverySpeed = 0.0
      var chargesGained      = 0.0
      var chargeRecovery     = 0.0
      var stunRecovery       = 0.0
      var recoverySpeed      = 0.0
      var amountRecovered    = 0.0
      var recoveryOnLowLife  = 0.0
      var lifeRecovered      = 0.0
      var armour             = 0.0
      var evasion            = 0.0
      var movementSpeed      = 0.0
    }

    object reduced {
      var amountRecovered  = 0.0
      var recoverySpeed    = 0.0
      var flaskChargesUsed = 0.0
    }

    var extraCharges                 = 0.0
    var amountAppliedInstantly       = 0.0
    var chargesOnCriticalStrikeTaken = 0.0
    var chargesOnCriticalStrikeGiven = 0.0
    var lifeFromMana                 = 0.0

    var additionalResistances = 0.0
    var lifeRecoveryToMinions = 0.0

    var dispelsFrozenAndChilled = false
    var dispelsShocked          = false
    var dispelsBurning          = false
    var removesBleeding         = false
    var curseImmunity           = false
    var knockback               = false
    var instantRecovery         = false
    var instantRecoveryLowLife  = false
  }
}
