package looty.model

import looty.views.loot.NumFilter

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
    val groups: Vector[String],
    val defaultNumFilter: Option[NumFilter],
    val getJs: ComputedItem => js.Any,
    private var desc: String = "",
    private var vis: Boolean = true
  ) {

    def description = desc
    def defaultVisible = vis

    private[ComputedItemProps] def ?=(d: String) {
      desc = d
    }
    private[ComputedItemProps] def !?=(d: String) {
      desc = d
      vis = false
    }

  }
  //affixes Group names for use in Column Select Panel
  val General         = "General"
  val Scores          = "Score"
  val Defensive       = "Defensive"
  val Attack          = "Attack"
  val Dps             = "Dps"
  val AverageDamage   = "Average Damage"
  val Requirements    = "Requirements"
  val Efficiency      = "Efficiency"
  val Regen           = "Regen"
  val Attributes      = "Attributes"
  val Resists         = "Resists"
  val Crit            = "Crit"
  val Spells          = "Spells"
  val DamageToSpells  = "Damage to Spells"
  val IncreasedDamage = "Increased Damage"
  val Gems            = "Gems"
  val FlasksMods      = "Flask Mods"
  val FlasksActions   = "Flask Actions"
  val Special         = "Special"

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
      groups = groups.distinct.toVector,
      defaultNumFilter = None,
      getJs = (i) => f(i)
    )
    add(res)
    res
  }

  def pno(
    fullName: String,
    shortName: String,
    //numbers in format ddd.d has to have at least that much width to show
    //more width means more stretching grid view. Not always we have 1900px wide screen :(
    width: Int = 43)(
    groups: String*)(
    f: ComputedItem => Double): ComputedItemProp[Double] = {
    val res = new ComputedItemProp[Double](
      shortName = shortName,
      fullName = fullName,
      width = width,
      groups = groups.distinct.toVector,
      defaultNumFilter = Some(NumFilter(_ >= _)),
      getJs = (i) => f(i)
    )
    add(res)
    res
  }

  def nno(
    fullName: String,
    shortName: String,
    width: Int = 43)(
    groups: String*)(
    f: ComputedItem => Double): ComputedItemProp[Double] = {
    val res = new ComputedItemProp[Double](
      shortName = shortName,
      fullName = fullName,
      width = width,
      groups = groups.distinct.toVector,
      defaultNumFilter = Some(NumFilter(_ <= _)),
      getJs = (i) => f(i)
    )
    add(res)
    res
  }

  def boo(
    fullName: String,
    shortName: String,
    width: Int = 50)(
    groups: String*)(
    f: ComputedItem => Boolean): ComputedItemProp[Double] = {
    val res = new ComputedItemProp[Double](
      shortName = shortName,
      fullName = fullName,
      width = width,
      groups = groups.distinct.toVector,
      defaultNumFilter = Some(NumFilter(_ >= _)),
      getJs = (i) => if (f(i)) 1.0 else 0.0
    )
    add(res)
    res
  }

  //TODO
  //add to arguments "columnName" to show "human readable" names? like Location instead of loc

  //TODO
  //add 5th argument with help? or just use ?= text, but elaborate on subject

  //General
  val Location         = str("Location", "loc", 130)(General)(_.locAndCoords)
  val Rarity           = str("Rarity", "rarity", 60)(General)(_.item.getFrameType.name)
  val DisplayName      = str("DisplayName", "name", 160)(General)(_.displayName)
  val TypeName         = str("TypeName", "type", 100)(General)(_.typeName)
  val TypeLine         = str("TypeLine", "tpeln", 120)(General)(_.item.typeLine)
  val Cosmetics        = str("Cosmetics", "cosmetics", 80)(General)(_.item.cosmeticMods.toOption.map(_.mkString(";")).getOrElse(""))
  val Sockets          = str("Sockets", "sockets", 100)(General)(_.socketColors)
  val Misc             = pno("Misc", "misc")(General)(_.misc)
  val Quality          = pno("Quality", "qual")(General)(_.properties.quality)
  val Ilvl             = pno("ItemLevel", "ilvl")(General)(_.item.ilvl.toOption.getOrElse(0).toDouble)
  val ExplicitModCount = nno("ExplicitModCount", "emc")(General)(_.item.explicitMods.toOption.map(_.length.toDouble).getOrElse(0.0))
  val CraftedModCount  = nno("CraftedModCount", "cmc")(General)(_.item.craftedMods.toOption.map(_.length.toDouble).getOrElse(0.0))
  val EnchantedModCount  = pno("EnchantedModCount", "enchc")(General)(_.item.enchantMods.toOption.map(_.length.toDouble).getOrElse(0.0))
  val GemKeywords      = str("GemKeywords", "kws", 120)(General)(_.item.getGemKeywords.getOrElse(""))
  Location ?= "The name of the character / stash tab that contains the item."
  Rarity ?= "Rarity of the item."
  DisplayName ?= "The name of the item"
  TypeName ?= "The name of the base item type, you can enter more then one separating them with | which act as \"or\" "
  TypeLine !?= "The type line of an item"
  Cosmetics ?= "A list of all cosmetic effects applied to the item"
  Sockets ?= "The sockets sorted by number in group, then by color"
  Misc ?= "Gem level / Items in Stack / # of Sockets /  Map Level"
  Quality !?= "The quality of the item"
  Ilvl ?= "The item level"
  ExplicitModCount !?= "The number of explicit mods on an item"
  CraftedModCount !?= "The number crafted mods on an item"
  EnchantedModCount !?= "The number enchanted mods on an item"
  GemKeywords !?= "The keywords on a skill gem"

  //Turning off until I will have time and idea how to implement it
  //Score
//  val DefaultScore = pno("DefaultScore", "score")(Scores)(_.Scores.default.score)
//  val CustomScore  = pno("CustomScore", "custom")(Scores)(_.Scores.custom.score)
//  val CustomScore2 = pno("CustomScore2", "custom2")(Scores)(_.Scores.custom2.score)
//  DefaultScore !?= "An experimental score assigned to assess the desirability of the item"
//  CustomScore !?= "The result of the user definable score"
//  CustomScore2 !?= "Score according to semi-strict high value rules (roughly tier 2 and higher)"

  //Defensive
  //TODO
  //Inconsistencies there is no differentiation between displaying global defense values, and local ones, also ES is calculated with Int bonus included, Armor with Str or Evasion widt dex dont
  val Armour                        = pno("Armour", "AR")(Defensive)(_.total.armour)
  val Evasion                       = pno("Evasion", "EV")(Defensive)(_.total.evasionRating)
  val ArmourPlusEvasion             = pno("ArmourPlusEvasion", "AR+EV")(Defensive)(i => i.total.evasionRating + i.total.armour)
  val EnergyShield                  = pno("EnergyShield", "ES")(Defensive)(_.total.energyShield)
  val IncreasedMaxEnergyShield      = pno("IncreasedMaxEnergyShield", "+%ES")(Defensive)(_.total.globalEnergyShield)
  val IncreasedArmour               = pno("IncreasedArmour", "+%AR")(Defensive)(_.increased.armour)
  val IncreasedEvasion              = pno("IncreasedEvasion", "+%EV")(Defensive)(_.increased.evasion)
  //TODO
  //add dodge chance and block spell
  val BlockChance                   = pno("BlockChance", "blk%")(Defensive)(_.properties.chanceToBlock)
  val IncreasedBlockAndStunRecovery = pno("IncreasedBlockAndStunRecovery", "+bsrec")(Defensive)(_.increased.blockAndStunRecovery)
  Armour ?= "Armour"
  Evasion ?= "Evasion"
  ArmourPlusEvasion !?= "Armour + Evasion"
  EnergyShield ?= "Energy Shield"
  IncreasedMaxEnergyShield !?= "Increased Max Energy Shield Includes Intelligence Bonus"
  IncreasedArmour !?= "Increased Armour Rating"
  IncreasedEvasion !?= "Increased Evasion Rating"
  BlockChance !?= "Block Chance"
  IncreasedBlockAndStunRecovery !?= "Increased Block and Stun Recovery"

  //Attack
  val AttacksPerSecond     = pno("AttacksPerSecond", "aps")(Attack)(_.properties.attacksPerSecond)
  val PlusToAccuracy       = pno("PlusToAccuracy", "+acc")(Attack)(_.plusTo.accuracyRatingWithDex)
  val IncreasedAccuracy    = pno("IncreasedAccuracy", "+%acc")(Attack)(_.increased.accuracyRating)
  val IncreasedAttackSpeed = pno("IncreasedAttackSpeed", "+%as")(Attack)(_.increased.attackSpeed)
  val ArrowPierceChance = pno("ArrowPierceChance", "+%apc")(Attack)(_.arrowPierceChance)
  val WeaponRange = pno("WeaponRange", "+weprng")(Attack)(_.properties.weaponRange)
  AttacksPerSecond !?= "AttacksPerSecond"
  PlusToAccuracy !?= "Flat bonus to accuracy + dexterity bonus"
  IncreasedAccuracy !?= "Increased Accuracy Rating"
  IncreasedAttackSpeed !?= "Increased Attack Speed"
  ArrowPierceChance !?= "Chance of Arrows Piercing"
  WeaponRange !?= "Weapon Range"

  //Dps
  val DpsTotal     = pno("DpsTotal", "dps")(Dps)(_.total.dps.round)
  val DpsPhysical  = pno("DpsPhysical", "pDps")(Dps)(_.total.perElementDps.physical.round)
  val DpsElemental  = pno("DpsElemental", "eDps")(Dps)(_.total.eDps.round)
  val DpsFire      = pno("DpsFire", "fDps")(Dps)(_.total.perElementDps.fire.round)
  val DpsCold      = pno("DpsCold", "cDps")(Dps)(_.total.perElementDps.cold.round)
  val DpsLightning = pno("DpsLightning", "lDps")(Dps)(_.total.perElementDps.lightning.round)
  val DpsChaos     = pno("DpsChaos", "xDps")(Dps)(_.total.perElementDps.chaos.round)
  DpsTotal ?= "Total Dps or Average Damage for Non-Weapons"
  DpsPhysical !?= "Physical Dps or Average Damage for Non-Weapons"
  DpsElemental !?= "Elemental Dps or Average Damage for Non-Weapons"
  DpsFire !?= "Fire Dps or Average Damage for Non-Weapons"
  DpsCold !?= "Cold Dps or Average Damage for Non-Weapons"
  DpsLightning !?= "Lightning Dps or Average Damage for Non-Weapons"
  DpsChaos !?= "Chaos Dps or Average Damage for Non-Weapons"

  //Average Damage
  val AvgTotal     = pno("AvgTotal", "avg")(AverageDamage)(_.total.avgDamage)
  val AvgPhysical  = pno("AvgPhysical", "pAvg")(AverageDamage)(_.total.avgDamages.physical.round)
  val AvgFire      = pno("AvgFire", "fAvg")(AverageDamage)(_.total.avgDamages.fire.round)
  val AvgCold      = pno("AvgCold", "cAvg")(AverageDamage)(_.total.avgDamages.cold.round)
  val AvgLightning = pno("AvgLightning", "lAvg")(AverageDamage)(_.total.avgDamages.lightning.round)
  val AvgChaos     = pno("AvgChaos", "xAvg")(AverageDamage)(_.total.avgDamages.chaos.round)
  AvgTotal !?= "Total Average Damage "
  AvgPhysical !?= "Physical Average Damage"
  AvgFire !?= "Fire Average Damage"
  AvgCold !?= "Cold Average Damage"
  AvgLightning !?= "Lightning Average Damage"
  AvgChaos !?= "Chaos Average Damage"


  //Stun
  val IncreasedStunDurationOnEnemies = pno("IncreasedStunDurationOnEnemies", "+sdure")(Attack)(_.increased.stunDurationOnEnemies)
  val ReducedEnemyStunThreshold      = pno("ReducedEnemyStunThreshold", "+rest")(Attack)(_.reduced.enemyStunThreshold)
  IncreasedStunDurationOnEnemies !?= "Increased Stun Duration on Enemies"
  ReducedEnemyStunThreshold !?= "Reduced Stun Threshold"


  //Requirements
  val RequiredLevel = nno("RequiredLevel", "rLvl")(Requirements)(_.requirements.level)
  val RequiredDex   = nno("RequiredDex", "rDex")(Requirements)(_.requirements.attribute.dexterity)
  val RequiredStr   = nno("RequiredStr", "rStr")(Requirements)(_.requirements.attribute.strength)
  val RequiredInt   = nno("RequiredInt", "rInt")(Requirements)(_.requirements.attribute.intelligence)
  val ReducedRequirements   = pno("ReducedRequirements", "rreq")(Requirements)(_.reduced.attributeRequirements)
  RequiredLevel ?= "Level Required to Equip the Item"
  RequiredDex !?= "Dex Required to Equip the Item"
  RequiredStr !?= "Str Required to Equip the Item"
  RequiredInt !?= "Int Required to Equip the Item"
  ReducedRequirements !?= "Reduced Requirements"

  //Efficiency
  val MagicFind                = pno("MagicFind", "mf")(Efficiency)(_.magicFind)
  val IncreasedItemRarity      = pno("IncreasedItemRarity", "iir")(Efficiency)(_.increased.rarityOfItemsFound)
  val IncreasedItemQuantity    = pno("IncreasedItemQuantity", "iiq")(Efficiency)(_.increased.quantityOfItemsFound)
  val IncreasedMoveSpeed       = pno("IncreasedMoveSpeed", "+%move")(Efficiency)(_.increased.movementSpeed)
  val IncreasedProjectileSpeed = pno("IncreasedProjectileSpeed", "+%projSpeed")(Efficiency)(_.increased.projectileSpeed)
  MagicFind !?= "Total of Increased Item Rarity and Increased Item Quantity"
  IncreasedItemRarity !?= "Increased Rarity of Items Found"
  IncreasedItemQuantity !?= "Increased Quantity of Items Found"
  IncreasedMoveSpeed ?= "Increased Movement Speed"
  IncreasedProjectileSpeed !?= "Increased Projectile Speed"

  //Regen
  val LifeLeech          = pno("LifeLeech", "lleech")(Regen)(_.leech.physical.life)
  val LifeGainOnHit      = pno("LifeGainOnHit", "lgoh")(Regen)(_.onAttackHit.lifeAndMana.life)
  val ManaGainOnHit      = pno("ManaGainOnHit", "mgoh")(Regen)(_.onAttackHit.lifeAndMana.mana)
  val LifeGainOnKill     = pno("LifeGainOnKill", "lgok")(Regen)(_.onKill.lifeAndMana.life)
  val ManaGainOnKill     = pno("ManaGainOnKill", "mgok")(Regen)(_.onKill.lifeAndMana.mana)
  val ManaLeech          = pno("ManaLeech", "mleech")(Regen)(_.leech.physical.mana)

  val flatLifeRegen          = pno("RegenerateLifePerSecond", "lireg")(Regen)(_.regenPerSecond.flat.life)
  val percentLifeRegen          = pno("%RegenerateLifePerSecond", "%lireg")(Regen)(_.regenPerSecond.percent.life)

  val flatManaRegen          = pno("RegenerateManaPerSecond", "mreg")(Regen)(_.regenPerSecond.flat.mana)
  val percentManaRegen          = pno("%RegenerateManaPerSecond", "%mreg")(Regen)(_.regenPerSecond.percent.mana)

  val IncreasedManaRegen = pno("IncreasedManaRegen", "+%mareg")(Regen)(_.increased.manaRegenerationRate)
  val MinusToManaCostOfSkills = pno("MinusToManaCostOfSkills", "-mcos")(Regen)(_.minusToManaCostOfSkills)

  LifeLeech !?= "Life Leech from Physical Attack Damage"
  LifeGainOnHit !?= "Life Gain on Hit"
  ManaGainOnHit !?= "Mana Gain on Hit"
  LifeGainOnKill !?= "Life Gain on Kill"
  ManaGainOnKill !?= "Mana Gain on Kill"
  ManaLeech !?= "Mana Leech from Physical Attack Damage"
  flatLifeRegen !?= "Regenerate Life per second"
  percentLifeRegen !?= "Regenerate % of Life per second"
  flatManaRegen !?= "Regenerate Mana per second"
  percentManaRegen !?= "Regenerate % of Mana per second"
  IncreasedManaRegen !?= "Increased Mana Regeneration Rate"
  MinusToManaCostOfSkills !?= "Mana Cost of Skills"

  //Attributes
  val PlusLife = pno("PlusLife", "+life")(Attributes)(_.plusTo.lifeAndManaWithStrInt.life)
  val IncreasedMaxLife      = pno("IncreasedMaxLife", "+%Life")(Attributes)(_.increased.maximumLife)
  val PlusMana = pno("PlusMana", "+mana")(Attributes)(_.plusTo.lifeAndManaWithStrInt.mana)
  val PlusDex  = pno("PlusDex", "+dex")(Attributes)(_.plusTo.attribute.dexterity)
  val PlusStr  = pno("PlusStr", "+str")(Attributes)(_.plusTo.attribute.strength)
  val PlusInt  = pno("PlusInt", "+int")(Attributes)(_.plusTo.attribute.intelligence)
  PlusLife ?= "Adds this amount of life (includes strength bonus)"
  IncreasedMaxLife !?= "Increased Maximum Life"
  PlusMana !?= "Adds this amount of mana (includes intelligence bonus)"
  PlusDex !?= "Adds this amount of dex"
  PlusStr ?= "Adds this amount of str"
  PlusInt !?= "Adds this amount of int"

  //Resists
  val PlusTotalResist     = pno("PlusTotalResist", "+SRes")(Resists)(_.plusTo.totalResistance)
  val PlusMaxResist       = pno("PlusMaxResist", "+MRes")(Resists)(_.plusTo.maxResistance)
  val PlusFireResist      = pno("PlusFireResist", "+fRes")(Resists)(_.plusTo.resistance.fire)
  val PlusColdResist      = pno("PlusColdResist", "+cRes")(Resists)(_.plusTo.resistance.cold)
  val PlusLightningResist = pno("PlusLightningResist", "+lRes")(Resists)(_.plusTo.resistance.lightning)
  val PlusChaosResist     = pno("PlusChaosResist", "+xRes")(Resists)(_.plusTo.resistance.chaos)
  PlusTotalResist ?= "The total amount of resistance"
  PlusMaxResist !?= "The highest amount of resistance"
  PlusFireResist ?= "The amount of fire resistance"
  PlusColdResist ?= "The amount of cold resistance"
  PlusLightningResist ?= "The amount of lightning resistance"
  PlusChaosResist !?= "The amount of chaos resistance"

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
  val IncreasedCastSpeed            = pno("IncreasedCastSpeed", "+%cast")(Spells)(_.increased.castSpeed)
  val IncreasedSpellDamage          = pno("IncreasedSpellDamage", "+%spDmg")(Spells)(_.increased.spellDamage)
  val IncreasedElementalSpellDamage = pno("IncreasedElementalSpellDamage", "+%spElDmg")(Spells)(_.increasedSpell.elemental)
  val IncreasedFireSpellDamage      = pno("IncreasedFireSpellDamage", "+%spFDmg")(Spells)(_.increasedSpell.elements.fire)
  val IncreasedColdSpellDamage      = pno("IncreasedColdSpellDamage", "+%spCDmg")(Spells)(_.increasedSpell.elements.cold)
  val IncreasedLightningSpellDamage = pno("IncreasedLightningSpellDamage", "+%spLDmg")(Spells)(_.increasedSpell.elements.lightning)
  val IncreasedChaosSpellDamage     = pno("IncreasedChaosSpellDamage", "+%spXDmg")(Spells)(_.increasedSpell.elements.lightning)
  IncreasedCastSpeed !?= "Increased Cast Speed"
  IncreasedSpellDamage ?= "Increased Spell Damage"
  IncreasedElementalSpellDamage !?= "Increased Elemental Damage + Spell Damage"
  IncreasedFireSpellDamage !?= "Increased Fire Damage + Elemental Damage + Spell Damage"
  IncreasedColdSpellDamage !?= "Increased Cold Damage + Elemental Damage + Spell Damage"
  IncreasedLightningSpellDamage !?= "Increased Lightning Damage + Elemental Damage + Spell Damage"
  IncreasedChaosSpellDamage !?= "Increased Chaos Damage + Spell Damage"

  //Damage To Spells
  val AddsDamageToSpells = pno("AddsDamageToSpells", "+DmgToSp")(DamageToSpells)(_.addsDamageToSpellsTotal)
  val AddsFireDamageToSpells = pno("AddsFireDamageToSpells", "+FDmgToSp")(DamageToSpells)(_.addDamagesToSpells.fire.avg)
  val AddsColdDamageToSpells = pno("AddsColdDamageToSpells", "+CDmgToSp")(DamageToSpells)(_.addDamagesToSpells.cold.avg)
  val AddsLightningDamageToSpells = pno("AddsLightningDamageToSpells", "+LDmgToSp")(DamageToSpells)(_.addDamagesToSpells.lightning.avg)
  val AddsChaosDamageToSpells = pno("AddsChaosDamageToSpells", "+XDmgToSp")(DamageToSpells)(_.addDamagesToSpells.chaos.avg)
  AddsDamageToSpells !?= "Adds Damage To Spells"
  AddsFireDamageToSpells !?= "Adds Fire Damage To Spells"
  AddsColdDamageToSpells !?= "Adds Cold Damage To Spells"
  AddsLightningDamageToSpells !?= "Adds Lightning Damage To Spells"
  AddsChaosDamageToSpells !?= "Adds Chaos Damage To Spells"


  //Elemental
  val IncreasedElementalDamage = pno("IncreasedElementalDamage", "+%eleDmg")(IncreasedDamage)(_.increased.elementalDamage)
  val IncreasedElementalDamageWithWeapons = pno("IncreasedElementalDamageWithWeapons", "+%eleWDmg")(IncreasedDamage)(_.increased.elementalDamageWithWeapons)
  val IncreasedFireDamage      = pno("IncreasedFireDamage", "+%fDmg")(IncreasedDamage)(_.increased.damage.fire)
  val IncreasedColdDamage      = pno("IncreasedColdDamage", "+%cDmg")(IncreasedDamage)(_.increased.damage.cold)
  val IncreasedLightningDamage = pno("IncreasedLightningDamage", "+%lDmg")(IncreasedDamage)(_.increased.damage.lightning)
  val IncreasedChaosDamage     = pno("IncreasedChaosDamage", "+%xDmg")(IncreasedDamage)(_.increased.damage.chaos)
  val IncreasedPhysicalDamage  = pno("IncreasedPhysicalDamage", "+%pDmg")(IncreasedDamage)(_.increased.damage.physical)
  val IncreasedBleedingDamage  = pno("IncreasedBleedingDamage", "+%blDmg")(IncreasedDamage)(_.increased.bleedingDamage)
  val IncreasedBurningDamage  = pno("IncreasedBurningDamage", "+%buDmg")(IncreasedDamage)(_.increased.burningDamage)
  val IncreasedElementalAttackDamage  = pno("IncreasedElementalAttackDamage", "+%eaDmg")(IncreasedDamage)(_.increased.elementalAttackDamage)
  IncreasedElementalDamage !?= "Increased Elemental Damage"
  IncreasedElementalDamageWithWeapons !?= "Increased Elemental Damage With Weapons"
  IncreasedFireDamage !?= "Increased Fire Damage + Elemental Damage"
  IncreasedColdDamage !?= "Increased Cold Damage + Elemental Damage"
  IncreasedLightningDamage !?= "Increased Lightning Damage + Elemental Damage"
  IncreasedChaosDamage !?= "Increased Chaos Damage"
  IncreasedPhysicalDamage !?= "Increased Physical Damage"
  IncreasedBleedingDamage !?= "Increased Bleeding Damage"
  IncreasedBurningDamage !?= "Increased Burning Damage"
  IncreasedElementalAttackDamage !?= "Increased Elemental Attack Damage"

  //Gems
  val IncreasedGemLevelBow          = pno("IncreasedGemLevelBow", "+gBow")(Gems)(_.gemLevel.bow)
  val IncreasedGemLevelMinion       = pno("IncreasedGemLevelMinion", "+gMinion")(Gems)(_.gemLevel.minion)
  val IncreasedGemLevelMelee        = pno("IncreasedGemLevelMelee", "+gMelee")(Gems)(_.gemLevel.melee)
  val IncreasedGemLevelSupport        = pno("IncreasedGemLevelSupport", "+gSupport")(Gems)(_.gemLevel.support)
  val IncreasedGemLevelAny          = pno("IncreasedGemLevelAny", "+gAny")(Gems)(_.gemLevel.any)
  val IncreasedGemLevelFire         = pno("IncreasedGemLevelFire", "+gFir")(Gems)(_.gemLevel.element.fire)
  val IncreasedGemLevelCold         = pno("IncreasedGemLevelCold", "+gCol")(Gems)(_.gemLevel.element.cold)
  val IncreasedGemLevelLightning    = pno("IncreasedGemLevelLightning", "+gLig")(Gems)(_.gemLevel.element.lightning)
  val IncreasedGemLevelStrength     = pno("IncreasedGemLevelStrength", "+gStr")(Gems)(_.gemLevel.attribute.strength)
  val IncreasedGemLevelDexterity    = pno("IncreasedGemLevelDexterity", "+gDex")(Gems)(_.gemLevel.attribute.dexterity)
  val IncreasedGemLevelIntelligence = pno("IncreasedGemLevelIntelligence", "+gInt")(Gems)(_.gemLevel.attribute.intelligence)
  IncreasedGemLevelBow !?= "Increased Bow Gem Level "
  IncreasedGemLevelMinion !?= "Increased Minion Gem Level "
  IncreasedGemLevelMelee !?= "Increased Melee Gem Level "
  IncreasedGemLevelSupport !?= "Increased Support Gem Level "
  IncreasedGemLevelAny !?= "Increased Any Gem Level "
  IncreasedGemLevelFire !?= "Increased Fire Gem Level "
  IncreasedGemLevelCold !?= "Increased Cold Gem Level "
  IncreasedGemLevelLightning !?= "Increased Lightning Gem Level "
  IncreasedGemLevelStrength !?= "Increased Strength Gem Level "
  IncreasedGemLevelDexterity !?= "Increased Dexterity Gem Level "
  IncreasedGemLevelIntelligence !?= "Increased Intelligence Gem Level "

  //Flask
  val FlaskExtraCharges                 = pno("FlaskExtraCharges", "fextrac")(FlasksMods)(_.flask.extraCharges)
  val FlaskChargesUsed                 = pno("FlaskChargesUsed", "freducc")(FlasksMods)(_.flask.reduced.flaskChargesUsed)
  val FlaskChargesOnCriticalStrikeGiven = pno("FlaskChargesOnCriticalStrikeGiven", "fsurgeon")(FlasksMods)(_.flask.chargesOnCriticalStrikeGiven)
  val FlaskLifeRecoveryToMinions        = pno("FlaskLifeRecoveryToMinions", "fminion")(FlasksMods)(_.flask.lifeRecoveryToMinions)
  val FlaskAmountAppliedInstantly       = pno("FlaskAmountAppliedInstantly", "f%instant")(FlasksMods)(_.flask.amountAppliedInstantly)

  FlaskExtraCharges !?= "Flask Extra Charges"
  FlaskChargesUsed !?= "Flask Charges Used"
  FlaskChargesOnCriticalStrikeGiven !?= "Flask Charges On Critical Strike Given"
  FlaskLifeRecoveryToMinions !?= "Flask Life Recovery To Minions"
  FlaskAmountAppliedInstantly !?= "Flask Amount Applied Instantly"


  val FlaskDispelsFrozenAndChilled = boo("FlaskDispelsFrozenAndChilled", "fafreeze")(FlasksActions)(_.flask.removesFrozenAndChilled)
  val FlaskDispelsShocked          = boo("FlaskDispelsShocked", "fashock")(FlasksActions)(_.flask.removesShocked)
  val FlaskDispelsBurning          = boo("FlaskDispelsBurning", "faburn")(FlasksActions)(_.flask.removesBurning)
  val FlaskRemovesBleeding         = boo("FlaskRemovesBleeding", "fableed")(FlasksActions)(_.flask.removesBleeding)
  val FlaskCurseImmunity           = boo("FlaskCurseImmunity", "facurse")(FlasksActions)(_.flask.removesCurses)
  val FlaskKnockback               = boo("FlaskKnockback", "fknock")(FlasksActions)(_.flask.knockback)
  val FlaskInstant                 = boo("FlaskInstant", "finstant")(FlasksActions)(_.flask.instantRecovery)

  FlaskDispelsFrozenAndChilled !?= "Flask Dispels FrozenAndChilled"
  FlaskDispelsShocked !?= "Flask Dispels Shocked"
  FlaskDispelsBurning !?= "Flask Dispels Burning"
  FlaskRemovesBleeding !?= "Flask Removes Bleeding"
  FlaskCurseImmunity !?= "Flask Curse Immunity"
  FlaskKnockback !?= "Flask adds Knockback"
  FlaskInstant !?= "Flask Instant Recovery"

  //Special
  val GrantsSkill                 = str("GrantsSkill", "grantSkill", 150)(Special)(_.skill.name)
  val GrantsSkillLevel            = pno("SkillLevel", "grantSkillLvl", 30)(Special)(_.skill.level)
  val Enchantments  = str("Enchantments", "ench", 80)(Special)(_.item.enchantModsList.mkString(", "))
  val NotParsedYet = str("NotParsedYet", "unparsed", 120)(Special)(_.notParsedYet.name)
  val limitedTo                   = pno("LimitedTo","limited",30)(Special)(_.properties.limitedTo)
  val Radius                   = str("Radius","radius",30)(Special)(_.properties.radius)
  val Influences = str("Influences", "infl", width = 70)(Special)(_.item.getInfluences)

  GrantsSkill !?= "Granted Skill"
  GrantsSkillLevel !?= "Level of Granted Skill"
  Enchantments !?= "Enchantments"
  NotParsedYet ?= "Could not be parsed"
  limitedTo !?= "Limited to"
  Radius !?= "Radius"
  Influences !?= "Influances"

}
