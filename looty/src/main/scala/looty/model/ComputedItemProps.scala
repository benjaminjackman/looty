package looty.model

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/24/13 3:02 PM
//////////////////////////////////////////////////////////////


object ComputedItemProps {
  private var _all = Vector.empty[ComputedItemProp[_]]
  def all = _all

  def add(p: ComputedItemProp[_]) = {
    if (all.exists(_.fullName == p.fullName) || all.exists(_.shortName == p.shortName)) {
      sys.error(s"Duplicate name for property: ${p.shortName} ${p.fullName}")
    }
    _all :+= p
  }
  class ComputedItemProp[A](
    val shortName: String,
    val fullName: String,
    val width: Int,
    val groups: Set[String],
    val getJs: ComputedItem => js.Any,
    private var desc: String = "") {

    def description = desc

    private[ComputedItemProps] def ?=(d: String) {
      desc = d
    }
  }

  val General      = "General"
  val Defensive    = "Defensive"
  val Attack       = "Attack"
  val Dps          = "Dps"
  val Requirements = "Requirements"
  val Efficiency   = "Efficiency"
  val Regen        = "Regen"
  val Attributes   = "Attributes"
  val Resists      = "Resists"
  val Crit         = "Crit"
  val Spells       = "Spells"
  val Elemental    = "Elemental"
  val Gems         = "Gems"

  def str(
    fullName: String,
    shortName: String,
    width: Int)(
    groups: String*)(
    f: ComputedItem => String): ComputedItemProp[String] = {
    val res = new ComputedItemProp[String](
      shortName = shortName,
      fullName = fullName,
      width = width,
      groups = groups.toSet,
      getJs = (i) => f(i)
    )
    add(res)
    res
  }

  def pno(
    fullName: String,
    shortName: String,
    width: Int = 50)(
    groups: String*)(
    f: ComputedItem => Double): ComputedItemProp[Double] = {
    val res = new ComputedItemProp[Double](
      shortName = shortName,
      fullName = fullName,
      width = width,
      groups = groups.toSet,
      getJs = (i) => f(i)
    )
    add(res)
    res
  }

  def nno(
    fullName: String,
    shortName: String,
    width: Int = 50)(
    groups: String*)(
    f: ComputedItem => Double): ComputedItemProp[Double] = {
    val res = new ComputedItemProp[Double](
      shortName = shortName,
      fullName = fullName,
      width = width,
      groups = groups.toSet,
      getJs = (i) => f(i)
    )
    add(res)
    res
  }

  //General
  val Location    = str("Location", "loc", 130)(General)(_.locAndCoords)
  val Rarity      = str("Rarity", "rarity", 60)(General)(_.item.getFrameType.name)
  val DisplayName = str("DisplayName", "name", 160)(General)(_.displayName)
  val TypeName    = str("TypeName", "type", 100)(General)(_.typeName)
  val Cosmetics   = str("Cosmetics", "cosmetics", 80)(General)(_.item.cosmeticMods.toOption.map(_.mkString(";")).getOrElse(""))
  val Sockets     = str("Sockets", "sockets", 100)(General)(_.socketColors)
  val Misc        = pno("Misc", "misc")(General)(_.misc)
  val Quality     = pno("Quality", "qual")(General)(_.properties.quality)
  val Score       = pno("Score", "score")(General)(_.score.score)
  Location ?= "The name of the character / stash tab that contains the item."
  Rarity ?= "Rarity of the item."
  DisplayName ?= "The name of the item"
  TypeName ?= "The name of the base item type"
  Cosmetics ?= "A list of all cosmetic effects applied to the item"
  Sockets ?= "The sockets sorted by number in group, then by color"
  Misc ?= "Gem level / Items in Stack / # of Sockets /  Map Level"
  Quality ?= "The quality of the item"
  Score ?= "An experimental score assigned to assess the desirability of the item"

  //Defensive
  val Armour            = pno("Armour", "AR")(Defensive)(_.total.armour)
  val Evasion           = pno("Evasion", "EV")(Defensive)(_.total.evasionRating)
  val ArmourPlusEvasion = pno("ArmourPlusEvasion", "AR+EV")(Defensive)(i => i.total.evasionRating + i.total.armour)
  val EnergyShield      = pno("EnergyShield", "ES")(Defensive)(_.total.energyShield)
  Armour ?= "Armour"
  Evasion ?= "Evasion"
  ArmourPlusEvasion ?= "ArmourPlusEvasion"
  EnergyShield ?= "EnergyShield"

  //Attack
  val AttacksPerSecond = pno("AttacksPerSecond", "aps")(Attack)(_.properties.attacksPerSecond)
  val DpsTotal         = pno("DpsTotal", "dps")(Attack, Dps)(_.total.dps.round)
  val DpsPhysical      = pno("DpsPhysical", "pDps")(Attack, Dps)(_.total.perElementDps.physical.round)
  val DpsFire          = pno("DpsFire", "fDps")(Attack, Dps)(_.total.perElementDps.fire.round)
  val DpsCold          = pno("DpsCold", "cDps")(Attack, Dps)(_.total.perElementDps.cold.round)
  val DpsLightning     = pno("DpsLightning", "lDps")(Attack, Dps)(_.total.perElementDps.lightning.round)
  val DpsChaos         = pno("DpsChaos", "xDps")(Attack, Dps)(_.total.perElementDps.chaos.round)
  AttacksPerSecond ?= "AttacksPerSecond"
  DpsTotal ?= "Total Dps or Average Damage for Non-Weapons"
  DpsPhysical ?= "Physical Dps or Average Damage for Non-Weapons"
  DpsFire ?= "Fire Dps or Average Damage for Non-Weapons"
  DpsCold ?= "Cold Dps or Average Damage for Non-Weapons"
  DpsLightning ?= "Lightning Dps or Average Damage for Non-Weapons"
  DpsChaos ?= "Chaos Dps or Average Damage for Non-Weapons"

  //Requirements
  val RequiredLevel = nno("RequiredLevel", "rLvl")(Requirements)(_.requirements.level)
  val RequiredDex   = nno("RequiredDex", "rDex")(Requirements)(_.requirements.attribute.dexterity)
  val RequiredStr   = nno("RequiredStr", "rStr")(Requirements)(_.requirements.attribute.strength)
  val RequiredInt   = nno("RequiredInt", "rInt")(Requirements)(_.requirements.attribute.intelligence)
  RequiredLevel ?= "Level Required to Equip the Item"
  RequiredDex ?= "Dex Required to Equip the Item"
  RequiredStr ?= "Str Required to Equip the Item"
  RequiredInt ?= "Int Required to Equip the Item"

  //Efficiency
  val MagicFind                = pno("MagicFind", "mf")(Efficiency)(_.magicFind)
  val IncreasedMoveSpeed       = pno("IncreasedMoveSpeed", "+%move")(Efficiency)(_.increased.movementSpeed)
  val IncreasedProjectileSpeed = pno("IncreasedProjectileSpeed", "+%projSpeed")(Efficiency)(_.increased.projectileSpeed)

  MagicFind ?= "Total of Increased Item Rarity and Increased Item Quantity"
  IncreasedMoveSpeed ?= "Increased Movement Speed"
  IncreasedProjectileSpeed ?= "Increased Projectile Speed"

  //Regen
  val LifeLeech          = pno("LifeLeech", "lleech")(Regen)(_.leech.physical.life)
  val ManaLeech          = pno("ManaLeech", "mleech")(Regen)(_.leech.physical.mana)
  val IncreasedManaRegen = pno("IncreasedManaRegen", "+%mareg")(Regen)(_.increased.manaRegenerationRate)
  LifeLeech ?= "Life Leech from Physical Attack Damage"
  ManaLeech ?= "Mana Leech from Physical Attack Damage"
  IncreasedManaRegen ?= "Increased Mana Regeneration Rate"

  //Attributes
  val PlusLife = pno("PlusLife", "+life")(Attributes)(_.plusTo.lifeAndMana.life)
  val PlusMana = pno("PlusMana", "+mana")(Attributes)(_.plusTo.lifeAndMana.mana)
  val PlusDex  = pno("PlusDex", "+dex")(Attributes)(_.plusTo.attribute.dexterity)
  val PlusStr  = pno("PlusStr", "+str")(Attributes)(_.plusTo.attribute.strength)
  val PlusInt  = pno("PlusInt", "+int")(Attributes)(_.plusTo.attribute.intelligence)
  PlusLife ?= "Adds this amount of life"
  PlusMana ?= "Adds this amount of mana"
  PlusDex ?= "Adds this amount of dex"
  PlusStr ?= "Adds this amount of str"
  PlusInt ?= "Adds this amount of int"

  //Resists
  val PlusTotalResist     = pno("PlusTotalResist", "+SRes")(Resists)(_.plusTo.totalResistance)
  val PlusMaxResist       = pno("PlusMaxResist", "+MRes")(Resists)(_.plusTo.maxResistance)
  val PlusFireResist      = pno("PlusFireResist", "+fRes")(Resists)(_.plusTo.resistance.fire)
  val PlusColdResist      = pno("PlusColdResist", "+cRes")(Resists)(_.plusTo.resistance.cold)
  val PlusLightningResist = pno("PlusLightningResist", "+lRes")(Resists)(_.plusTo.resistance.lightning)
  val PlusChaosResist     = pno("PlusChaosResist", "+xRes")(Resists)(_.plusTo.resistance.chaos)
  PlusTotalResist ?= "The total amount of resistance"
  PlusMaxResist ?= "The highest amount of resistance"
  PlusFireResist ?= "The amount of fire resistance"
  PlusColdResist ?= "The amount of cold resistance"
  PlusLightningResist ?= "The amount of lightning resistance"
  PlusChaosResist ?= "The amount of chaos resistance"

  //Crit
  val IncreasedCritChance       = pno("IncreasedCritChance", "+%crit")(Crit)(_.properties.criticalStrikeChance)
  val IncreasedCritChanceSpells = pno("IncreasedCritChanceSpells", "+%spCrit")(Crit)(i => i.increased.globalCriticalStrikeChance + i.increased.criticalStrikeChanceForSpells)
  val IncreasedGlobalCritChance = pno("IncreasedGlobalCritChance", "+%gcc")(Crit)(_.increased.globalCriticalStrikeChance)
  val IncreasedGlobalCritMult   = pno("IncreasedGlobalCritMult", "+%gcm")(Crit)(_.increased.globalCriticalStrikeMultiplier)
  IncreasedCritChance ?= "Increased Critical Strike Chance"
  IncreasedCritChanceSpells ?= "Increased Critical Strike Chance For Spells"
  IncreasedGlobalCritChance ?= "Increased Global Critical Strike Chance"
  IncreasedGlobalCritMult ?= "Increased Global Critical Strike Multiplier"

  //Spells
  val IncreasedSpellDamage          = pno("IncreasedSpellDamage", "+%spDmg")(Spells)(_.increased.spellDamage)
  val IncreasedElementalSpellDamage = pno("IncreasedElementalSpellDamage", "+%spElDmg")(Spells)(_.increasedSpell.elemental)
  val IncreasedFireSpellDamage      = pno("IncreasedFireSpellDamage", "+%spFDmg")(Spells)(_.increasedSpell.elements.fire)
  val IncreasedColdSpellDamage      = pno("IncreasedColdSpellDamage", "+%spCDmg")(Spells)(_.increasedSpell.elements.cold)
  val IncreasedLightningSpellDamage = pno("IncreasedLightningSpellDamage", "+%spLDmg")(Spells)(_.increasedSpell.elements.lightning)
  val IncreasedChaosSpellDamage     = pno("IncreasedChaosSpellDamage", "+%spXDmg")(Spells)(_.increasedSpell.elements.lightning)
  IncreasedSpellDamage ?= "Increased Spell Damage"
  IncreasedElementalSpellDamage ?= "Increased Elemental Damage + Spell Damage"
  IncreasedFireSpellDamage ?= "Increased Fire Damage + Elemental Damage + Spell Damage"
  IncreasedColdSpellDamage ?= "Increased Cold Damage + Elemental Damage + Spell Damage"
  IncreasedLightningSpellDamage ?= "Increased Lightning Damage + Elemental Damage + Spell Damage"
  IncreasedChaosSpellDamage ?= "Increased Chaos Damage + Spell Damage"

  //Elemental
  val IncreasedElementalDamage = pno("IncreasedElementalDamage", "+%eleDmg")(Elemental)(_.increased.elementalDamage)
  val IncreasedFireDamage      = pno("IncreasedFireDamage", "+%fDmg")(Elemental)(_.increased.damage.fire)
  val IncreasedColdDamage      = pno("IncreasedColdDamage", "+%cDmg")(Elemental)(_.increased.damage.cold)
  val IncreasedLightningDamage = pno("IncreasedLightningDamage", "+%lDmg")(Elemental)(_.increased.damage.lightning)
  val IncreasedChaosDamage     = pno("IncreasedChaosDamage", "+%xDmg")(Elemental)(_.increased.damage.chaos)
  IncreasedElementalDamage ?= "Increased Elemental Damage"
  IncreasedFireDamage ?= "Increased Fire Damage + Elemental Damage"
  IncreasedColdDamage ?= "Increased Cold Damage + Elemental Damage"
  IncreasedLightningDamage ?= "Increased Lightning Damage + Elemental Damage"
  IncreasedChaosDamage ?= "Increased Chaos Damage"

  //Gems
  val IncreasedGemLevelBow          = pno("IncreasedGemLevelBow", "+gBow")(Gems)(_.gemLevel.bow)
  val IncreasedGemLevelMinion       = pno("IncreasedGemLevelMinion", "+gMinion")(Gems)(_.gemLevel.minion)
  val IncreasedGemLevelMelee        = pno("IncreasedGemLevelMelee", "+gMelee")(Gems)(_.gemLevel.melee)
  val IncreasedGemLevelAny          = pno("IncreasedGemLevelAny", "+gAny")(Gems)(_.gemLevel.any)
  val IncreasedGemLevelFire         = pno("IncreasedGemLevelFire", "+gFir")(Gems)(_.gemLevel.element.fire)
  val IncreasedGemLevelCold         = pno("IncreasedGemLevelCold", "+gCol")(Gems)(_.gemLevel.element.cold)
  val IncreasedGemLevelLightning    = pno("IncreasedGemLevelLightning", "+gLig")(Gems)(_.gemLevel.element.lightning)
  val IncreasedGemLevelStrength     = pno("IncreasedGemLevelStrength", "+gStr")(Gems)(_.gemLevel.attribute.strength)
  val IncreasedGemLevelDexterity    = pno("IncreasedGemLevelDexterity", "+gDex")(Gems)(_.gemLevel.attribute.dexterity)
  val IncreasedGemLevelIntelligence = pno("IncreasedGemLevelIntelligence", "+gInt")(Gems)(_.gemLevel.attribute.intelligence)
  IncreasedGemLevelBow ?= "Increased Bow Gem Level "
  IncreasedGemLevelMinion ?= "Increased Minion Gem Level "
  IncreasedGemLevelMelee ?= "Increased Melee Gem Level "
  IncreasedGemLevelAny ?= "Increased Any Gem Level "
  IncreasedGemLevelFire ?= "Increased Fire Gem Level "
  IncreasedGemLevelCold ?= "Increased Cold Gem Level "
  IncreasedGemLevelLightning ?= "Increased Lightning Gem Level "
  IncreasedGemLevelStrength ?= "Increased Strength Gem Level "
  IncreasedGemLevelDexterity ?= "Increased Dexterity Gem Level "
  IncreasedGemLevelIntelligence ?= "Increased Intelligence Gem Level "


}