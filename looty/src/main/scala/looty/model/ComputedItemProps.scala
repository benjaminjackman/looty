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
  val _all = new js.Array[ComputedItemProp[_]]()
  lazy val all = _all.toList

  def add(p: ComputedItemProp[_]) = _all.push(p)
  trait ComputedItemProp[A] {
    val shortName  : String
    val description: String
    def getJs(ci: ComputedItem): js.Any
  }
  class ComputedItemPropCategory(
    override val shortName: String,
    override val description: String)(
    val getter: ComputedItem => String) extends ComputedItemProp[String] {
    override def getJs(ci: ComputedItem): js.Any = getter(ci)
  }
  class ComputedItemPropString(
    override val shortName: String,
    override val description: String)(
    val getter: ComputedItem => String) extends ComputedItemProp[String] {
    override def getJs(ci: ComputedItem): js.Any = getter(ci)
  }
  class ComputedItemPropPosNumber(
    override val shortName: String,
    override val description: String)(
    val getter: ComputedItem => Double) extends ComputedItemProp[Double] {
    override def getJs(ci: ComputedItem): js.Any = getter(ci)
  }
  class ComputedItemPropNegNumber(
    override val shortName: String,
    override val description: String)(
    val getter: ComputedItem => Double) extends ComputedItemProp[Double] {
    override def getJs(ci: ComputedItem): js.Any = getter(ci)
  }

  case object Location extends ComputedItemPropCategory("loc",
    "The name of the character / stash tab that contains the item.")(_.location)
  add(Location)
  case object DisplayName extends ComputedItemPropString("name",
    "The name of the item")(_.displayName)
  add(DisplayName)
  case object TypeName extends ComputedItemPropCategory("type",
    "The name of the base item type")(_.typeName)
  add(TypeName)
  case object Sockets extends ComputedItemPropCategory("sockets",
    "The sockets sorted by number in group, then by color")(_.socketColors)
  add(Sockets)

  case object Quality extends ComputedItemPropPosNumber("qual",
    "The quality of the item")(_.properties.quality)
  add(Quality)
  case object Score extends ComputedItemPropPosNumber("score",
    "An experimental score assigned to assess the desirability of the item")(_.score.score)
  add(Score)

  case object Dps_Total extends ComputedItemPropPosNumber("dps",
    "The total (physical + elemental) damage per second")(_.total.dps.round)
  add(Dps_Total)
  case object AttacksPerSecond extends ComputedItemPropPosNumber("aps",
    "Number of attacks per second")(_.properties.attacksPerSecond)
  add(AttacksPerSecond)

  case object Armour extends ComputedItemPropPosNumber("AR",
    "Total Amount of Armour from this item")(_.total.armour)
  add(Armour)
  case object Evasion extends ComputedItemPropPosNumber("EV",
    "Total Amount of Evasion from this item")(_.total.evasionRating)
  add(Evasion)
  case object EnergyShield extends ComputedItemPropPosNumber("ES",
    "Total Amount of Energy Shield from this item")(_.total.energyShield)
  add(EnergyShield)

  case object Dps_Physical extends ComputedItemPropPosNumber("pDps",
    "Physical damage per second, or Avg Physical Damage for non weapon items")(_.total.perElementDps.physical.round)
  add(Dps_Physical)
  case object Dps_Fire extends ComputedItemPropPosNumber("fDps",
    "Fire damage per second, or Avg Fire Damage for non weapon items")(_.total.perElementDps.fire.round)
  add(Dps_Fire)
  case object Dps_Cold extends ComputedItemPropPosNumber("cDps",
    "Cold damage per second, or Avg Cold Damage for non weapon items")(_.total.perElementDps.cold.round)
  add(Dps_Cold)
  case object Dps_Lightning extends ComputedItemPropPosNumber("lDps",
    "Lightning damage per second, or Avg Lightning Damage for non weapon items")(_.total.perElementDps.lightning.round)
  add(Dps_Lightning)
  case object Dps_Chaos extends ComputedItemPropPosNumber("xDps",
    "Chaos damage per second, or Avg Chaos Damage for non weapon items")(_.total.perElementDps.chaos.round)
  add(Dps_Chaos)

  case object MagicFind extends ComputedItemPropPosNumber("mf",
    "Total of Increased Item Rarity and Increased Item Quantity")(_.magicFind)
  add(MagicFind)

  case object Required_Level extends ComputedItemPropNegNumber("rlvl",
    "The level required to equip the item")(_.requirements.level)
  add(Required_Level)
  case object Required_Dex extends ComputedItemPropNegNumber("rDex",
    "The dexterity required to equip the item")(_.requirements.attribute.dexterity)
  add(Required_Dex)
  case object Required_Str extends ComputedItemPropNegNumber("rStr",
    "The strength required to equip the item")(_.requirements.attribute.strength)
  add(Required_Str)
  case object Required_Int extends ComputedItemPropNegNumber("rInt",
    "The intelligence required to equip the item")(_.requirements.attribute.intelligence)
  add(Required_Int)

  case object LifeLeech extends ComputedItemPropNegNumber("lleech",
    "Life Leech from Physical Attack Damage")(_.leech.physical.life)
  add(LifeLeech)

  case object ManaLeech extends ComputedItemPropNegNumber("mleech",
    "Mana Leech from Physical Attack Damage")(_.leech.physical.mana)
  add(ManaLeech)




  case object Plus_Life extends ComputedItemPropPosNumber("+life",
    "Adds this amount of life")(_.plusTo.lifeAndMana.life)
  add(Plus_Life)
  case object Plus_Mana extends ComputedItemPropPosNumber("+mana",
    "Adds this amount of mana")(_.plusTo.lifeAndMana.mana)
  add(Plus_Mana)
  case object Plus_Dex extends ComputedItemPropPosNumber("+dex",
    "Adds this amount of dex")(_.plusTo.attribute.dexterity)
  add(Plus_Dex)
  case object Plus_Str extends ComputedItemPropPosNumber("+str",
    "Adds this amount of str")(_.plusTo.attribute.strength)
  add(Plus_Str)
  case object Plus_Int extends ComputedItemPropPosNumber("+int",
    "Adds this amount of int")(_.plusTo.attribute.intelligence)
  add(Plus_Int)

  case object Plus_Total_Resist extends ComputedItemPropPosNumber("+ΣRes",
    "The total amount of resistance")(_.plusTo.totalResistance)
  add(Plus_Total_Resist)
  case object Plus_Fire_Resist extends ComputedItemPropPosNumber("+fRes",
    "The amount of fire resistance")(_.plusTo.resistance.fire)
  add(Plus_Fire_Resist)
  case object Plus_Cold_Resist extends ComputedItemPropPosNumber("+cRes",
    "The amount of cold resistance")(_.plusTo.resistance.cold)
  add(Plus_Cold_Resist)
  case object Plus_Lightning_Resist extends ComputedItemPropPosNumber("+lRes",
    "The amount of lightning resistance")(_.plusTo.resistance.lightning)
  add(Plus_Lightning_Resist)
  case object Plus_Chaos_Resist extends ComputedItemPropPosNumber("+xRes",
    "The amount of chaos resistance")(_.plusTo.resistance.chaos)
  add(Plus_Chaos_Resist)

  case object Increased_CritChance extends ComputedItemPropPosNumber("+%crit",
    "Increased Critical Strike Chance")(_.properties.criticalStrikeChance)
  add(Increased_CritChance)

  case object Increased_CritChanceSpells extends ComputedItemPropPosNumber("+%spCrit",
    "Increased Critical Strike Chance For Spells")(i => i.increased.globalCriticalStrikeChance + i.increased.criticalStrikeChanceForSpells)
  add(Increased_CritChanceSpells)

  case object Increased_GlobalCritChance extends ComputedItemPropPosNumber("+%gcc",
    "Increased Global Critical Strike Chance")(_.increased.globalCriticalStrikeChance)
  add(Increased_GlobalCritChance)

  case object Increased_GlobalCritMult extends ComputedItemPropPosNumber("+%gcm",
    "Increased Global Critical Strike Multiplier")(_.increased.globalCriticalStrikeMultiplier)
  add(Increased_GlobalCritMult)

  case object Increased_ProjectileSpeed extends ComputedItemPropPosNumber("+%projSpeed",
    "Increased Projectile Speed")(_.increased.projectileSpeed)
  add(Increased_ProjectileSpeed)

  case object Increased_MoveSpeed extends ComputedItemPropPosNumber("+%move",
    "Increased Movement Speed")(_.increased.movementSpeed)
  add(Increased_MoveSpeed)

  case object Increased_ManaRegen extends ComputedItemPropPosNumber("+%mareg",
    "Increased Mana Regeneration Rate")(_.increased.manaRegenerationRate)
  add(Increased_ManaRegen)


  case object Increased_SpellDamage extends ComputedItemPropPosNumber("+%spelDmg",
    "Increased Spell Damage")(_.increased.spellDamage)
  add(Increased_SpellDamage)
  case object Increased_ElementalDamage extends ComputedItemPropPosNumber("+%eleDmg",
    "Increased Elemental Damage")(_.increased.elementalDamage)
  add(Increased_ElementalDamage)
  case object Increased_FireDamage extends ComputedItemPropPosNumber("+%fDmg",
    "Increased Fire Damage + Elemental Damage")(_.increased.damage.fire)
  add(Increased_FireDamage)
  case object Increased_ColdDamage extends ComputedItemPropPosNumber("+%cDmg",
    "Increased Cold Damage + Elemental Damage")(_.increased.damage.cold)
  add(Increased_ColdDamage)
  case object Increased_LightningDamage extends ComputedItemPropPosNumber("+%lDmg",
    "Increased Lightning Damage + Elemental Damage")(_.increased.damage.lightning)
  add(Increased_LightningDamage)

  case object Increased_GemLevelBow extends ComputedItemPropPosNumber("+gBow",
    "Increased Bow Gem Level ")(_.gemLevel.bow)
  add(Increased_GemLevelBow)
  case object Increased_GemLevelMinion extends ComputedItemPropPosNumber("+gMinion",
    "Increased Minion Gem Level ")(_.gemLevel.minion)
  add(Increased_GemLevelMinion)
  case object Increased_GemLevelMelee extends ComputedItemPropPosNumber("+gMelee",
    "Increased Melee Gem Level ")(_.gemLevel.melee)
  add(Increased_GemLevelMelee)
  case object Increased_GemLevelAny extends ComputedItemPropPosNumber("+gAny",
    "Increased Any Gem Level ")(_.gemLevel.any)
  add(Increased_GemLevelAny)
  case object Increased_GemLevelFire extends ComputedItemPropPosNumber("+gFir",
    "Increased Fire Gem Level ")(_.gemLevel.element.fire)
  add(Increased_GemLevelFire)
  case object Increased_GemLevelCold extends ComputedItemPropPosNumber("+gCol",
    "Increased Cold Gem Level ")(_.gemLevel.element.cold)
  add(Increased_GemLevelCold)
  case object Increased_GemLevelLightning extends ComputedItemPropPosNumber("+gLig",
    "Increased Lightning Gem Level ")(_.gemLevel.element.lightning)
  add(Increased_GemLevelLightning)
  case object Increased_GemLevelStrength extends ComputedItemPropPosNumber("+gStr",
    "Increased Strength Gem Level ")(_.gemLevel.attribute.strength)
  add(Increased_GemLevelStrength)
  case object Increased_GemLevelDexterity extends ComputedItemPropPosNumber("+gDex",
    "Increased Dexterity Gem Level ")(_.gemLevel.attribute.dexterity)
  add(Increased_GemLevelDexterity)
  case object Increased_GemLevelIntelligence extends ComputedItemPropPosNumber("+gInt",
    "Increased Intelligence Gem Level ")(_.gemLevel.attribute.intelligence)
  add(Increased_GemLevelIntelligence)



}