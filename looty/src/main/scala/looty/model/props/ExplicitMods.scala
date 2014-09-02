package looty
package model.props


import looty.model.{LifeAndMana, Elements, Attributes}

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/1/14 11:45 AM
//////////////////////////////////////////////////////////////


object AffixParser {
  object Dsl {
    def regex1(regex: String) = new RegexAffixParser1(new js.RegExp(regex))
    def regex2(regex: String) = new RegexAffixParser2(new js.RegExp(regex))
    def increased(name: String) = { regex1(s"^([.+-\\d]+)%* increased $name$$") }
    def reduced(name: String) = { regex1(s"^([.+-\\d]+)%* reduced $name$$") }
    def plusTo(name: String) = { regex1(s"^([.+-\\d]+)%* to $name$$") }
    def addsDamage(element: String) = { regex2(s"^Adds ([\\d]+)-([\\d]+) $element Damage$$") }
    def level(name: String) = {
      val a = if (name.isEmpty) "" else name + " "
      val r = s"^([.+-\\d]+)%* to Level of ${a}Gems in this item$$"
      regex1(r)
    }
    def simple0(s: String): BinaryAffixParser = new BinaryAffixParser(s)
    def simple1(prefix: String, suffix: String) = {
      val a = if (prefix.isEmpty) "" else prefix + " "
      val b = if (suffix.isEmpty) "" else " " + suffix
      val r = s"^$a([.+-\\d]+)%*$b$$"
      regex1(r)
    }
  }
}

trait AffixParser[A] {
  def parse(s: String): Option[A]
}

class BinaryAffixParser(val str: String) extends AffixParser[Boolean] {
  override final def parse(s: String) = if (s =?= this.str) Some(true) else None
}

trait RegexAffixParser[A] extends AffixParser[A] {
  def regex: js.RegExp
}

class RegexAffixParser1(override val regex: js.RegExp) extends RegexAffixParser[Double] {
  override final def parse(s: String): Option[Double] = {
    val sp = s.asInstanceOf[js.prim.String]
    sp.`match`(regex).nullSafe.getOrElse(js.Array()).toList match {
      case null => None
      case x :: y :: zs => Some(y.toString.toDouble)
      case xs => None
    }
  }
}

class RegexAffixParser2(override val regex: js.RegExp) extends RegexAffixParser[(Double, Double)] {
  override final def parse(s: String): Option[(Double, Double)] = {
    val sp = s.asInstanceOf[js.prim.String]
    sp.`match`(regex).nullSafe.getOrElse(js.Array()).toList match {
      case null => None
      case x :: y :: z :: zs => Some(y.toString.toDouble, z.toString.toDouble)
      case xs => None
    }
  }
}


case class ExplicitMod[A](name: String, parser: AffixParser[A])


object ExplicitMods {
  def m[A](name: String, parser: AffixParser[A]) = ExplicitMod(name, parser)
  val P = AffixParser.Dsl

  val IncreasedAttackSpeed                    = m("IncreasedAttackSpeed", P.increased("Attack Speed"))
  val IncreasedStunDurationonenemies          = m("IncreasedStunDurationonenemies", P.increased("Stun Duration on enemies"))
  val IncreasedChillDurationonenemies         = m("IncreasedChillDurationonenemies", P.increased("Chill Duration on enemies"))
  val IncreasedGlobalCriticalStrikeMultiplier = m("IncreasedGlobalCriticalStrikeMultiplier", P.increased("Global Critical Strike Multiplier"))
  val IncreasedGlobalCriticalStrikeChance     = m("IncreasedGlobalCriticalStrikeChance", P.increased("Global Critical Strike Chance"))
  val IncreasedCriticalStrikeChance           = m("IncreasedCriticalStrikeChance", P.increased("Critical Strike Chance"))
  val IncreasedCriticalStrikeChanceforSpells  = m("IncreasedCriticalStrikeChanceforSpells", P.increased("Critical Strike Chance for Spells"))
  val IncreasedQuantityofItemsfound           = m("IncreasedQuantityofItemsfound", P.increased("Quantity of Items found"))
  val IncreasedRarityofItemsfound             = m("IncreasedRarityofItemsfound", P.increased("Rarity of Items found"))
  val IncreasedMovementSpeed                  = m("IncreasedMovementSpeed", P.increased("Movement Speed"))
  val IncreasedBlockandStunRecovery           = m("IncreasedBlockandStunRecovery", P.increased("Block and Stun Recovery"))
  val IncreasedSpellDamage                    = m("IncreasedSpellDamage", P.increased("Spell Damage"))
  val IncreasedManaRegenerationRate           = m("IncreasedManaRegenerationRate", P.increased("Mana Regeneration Rate"))
  val IncreasedElementalDamagewithWeapons     = m("IncreasedElementalDamagewithWeapons", P.increased("Elemental Damage with Weapons"))
  val IncreasedLightRadius                    = m("IncreasedLightRadius", P.increased("Light Radius"))
  val IncreasedCastSpeed                      = m("IncreasedCastSpeed", P.increased("Cast Speed"))
  val IncreasedProjectileSpeed                = m("IncreasedProjectileSpeed", P.increased("Projectile Speed"))
  val IncreasedAccuracyRating                 = m("IncreasedAccuracyRating", P.increased("Accuracy Rating"))
  val IncreasedBlockRecovery                  = m("IncreasedBlockRecovery", P.increased("Block Recovery"))
  val IncreasedElementalDamage                = m("IncreasedElementalDamage", P.increased("Elemental Damage"))
  val IncreasedArmour                         = m("IncreasedArmour", P.increased("Armour"))
  val IncreasedEvasionRating                  = m("IncreasedEvasionRating", P.increased("Evasion Rating"))
  val IncreasedEnergyShield                   = m("IncreasedEnergyShield", P.increased("Energy Shield"))
  val IncreasedMaximumEnergyShield            = m("IncreasedMaximumEnergyShield", P.increased("maximum Energy Shield"))
  val IncreasedArmourandEvasion               = m("IncreasedArmourAndEvasion", P.increased("Armour and Evasion"))
  val IncreasedArmourandEnergyShield          = m("IncreasedArmourAndEnergyShield", P.increased("Armour and Energy Shield"))
  val IncreasedEvasionAndEnergyShield         = m("IncreasedEvasionAndEnergyShield", P.increased("Evasion and Energy Shield"))

  val IncreasedDamageByElement = Elements.byNameVal(e => m(s"IncreasedDamageByElement${e.cap}", P.increased(s"${e.cap} Damage")))

  val PlusToAccuracyRating              = m("PlusToAccuracyRating", P.plusTo("Accuracy Rating"))
  val PlusToArmour                      = m("PlusToArmour", P.plusTo("Armour"))
  val PlusToEvasionRating               = m("PlusToEvasionRating", P.plusTo("Evasion Rating"))
  val PlusToEnergyShield                = m("PlusToEnergyShield", P.plusTo("Energy Shield"))
  val PlusTomaximumEnergyShield         = m("PlusTomaximumEnergyShield", P.plusTo("maximum Energy Shield"))
  val PlusToFireandLightningResistances = m("PlusToFireandLightningResistances", P.plusTo("Fire and Lightning Resistances"))
  val PlusToColdandLightningResistances = m("PlusToColdandLightningResistances", P.plusTo("Cold and Lightning Resistances"))
  val PlusToFireandColdResistances      = m("PlusToFireandColdResistances", P.plusTo("Fire and Cold Resistances"))
  val PlusToallElementalResistances     = m("PlusToallElementalResistances", P.plusTo("all Elemental Resistances"))
  val PlusToallAttributes               = m("PlusToallAttributes", P.plusTo("all Attributes"))
  val PlusToStrengthandDexterity        = m("PlusToStrengthandDexterity", P.plusTo("Strength and Dexterity"))
  val PlusToStrengthandIntelligence     = m("PlusToStrengthandIntelligence", P.plusTo("Strength and Intelligence"))
  val PlusToDexterityandIntelligence    = m("PlusToDexterityandIntelligence ", P.plusTo("Dexterity and Intelligence"))

  val PlusToAttribute = Attributes.byNameVal(a => m(s"PlusToAttribute${a.cap}", P.plusTo(a.cap)))
  val PlusToResistByElement = Elements.byNameVal(e => m(s"PlusToResistByElement${e.cap}", P.plusTo(s"${e.cap} Resistance")))
  val PlusToLifeMana = LifeAndMana.byNameVal(x => m(s"PlusToLifeMana${x.cap}", P.plusTo(s"maximum ${x.cap}")))

  val ReducedAttributeRequirements = m("ReducedAttributeRequirements", P.reduced("Attribute Requirements"))
  val ReducedEnemyStunThreshold    = m("ReducedEnemyStunThreshold", P.reduced("Enemy Stun Threshold"))

  val GemLevelMelee  = m("GemLevelMelee", P.level("Melee"))
  val GemLevelMinion = m("GemLevelMinion", P.level("Minion"))
  val GemLevelBow    = m("GemLevelBow", P.level("Bow"))
  val GemLevelAll    = m("GemLevelAll", P.level(""))

  val GemLevelAttribute = Attributes.byNameVal(a => m(s"GemLevelAttribute${a.cap}", P.level(a.cap)))
  val GemLevelElement = Elements.byNameVal(e => m(s"GemLevelElement${e.cap}", P.level(e.cap)))


  val ReflectPhysicalDamageToMeleeAttackers = m("ReflectPhysicalDamageToMeleeAttackers", P.simple1("Reflects", "Physical Damage to Melee Attackers"))
  val AdditionalBlockChance                 = m("AdditionalBlockChance", P.simple1("", "additional Block Chance"))
  val ChanceToBlock                         = m("ChanceToBlock", P.simple1("", "Chance to Block"))

  val AddsDamageByElement = Elements.byNameVal(e => m(s"AddsDamageByElement${e.cap}", P.addsDamage(e.cap)))
  
  val GainOnKill = LifeAndMana.byNameVal(x => m(s"GainOnKill${x.cap}", P.regex1(s"^([+-\\d]+) ${x.cap} [gG]ained on Kill")))
  val Leech = LifeAndMana.byNameVal(x => m(s"Leech${x.cap}", P.regex1(s"^([+-\\d]+)% of Physical Attack Damage Leeched as ${x.cap}")))
  
  val RegenPerSecond = LifeAndMana.byNameVal(x => m(s"RegenPerSecond${x.cap}", P.simple1("", s"${x.cap} Regenerated per second")))
  val GainOnHit = LifeAndMana.byNameVal(x => m(s"GainOnHit${x.cap}", P.simple1("", s"${x.cap} gained for each enemy hit by your Attacks")))

  val IncreasedFlaskChargesGained = m("IncreasedFlaskChargesGained",  P.increased("Flask Charges gained"))
  val IncreasedFlaskManaRecoveryRate = m("IncreasedFlaskManaRecoveryRate",  P.increased("Flask Mana Recovery rate"))
  val IncreasedFlaskEffectDuration = m("IncreasedFlaskEffectDuration",  P.increased("Flask effect duration"))
  val IncreasedFlaskLifeRecoveryRate = m("IncreasedFlaskLifeRecoveryRate",  P.increased("Flask Life Recovery rate"))
  val IncreasedFlaskRecoverySpeed = m("IncreasedFlaskRecoverySpeed",  P.increased("Flask Recovery Speed"))
  val IncreasedChargeRecovery = m("IncreasedChargeRecovery",  P.increased("Charge Recovery"))
  val IncreasedStunRecoveryDuringFlaskEffect = m("IncreasedStunRecoveryDuringFlaskEffect",  P.increased("Stun Recovery during flask effect"))
  val IncreasedRecoverySpeed = m("IncreasedRecoverySpeed",  P.increased("Recovery Speed"))
  val IncreasedAmountRecovered = m("IncreasedAmountRecovered",  P.increased("Amount Recovered"))
  val IncreasedRecoveryWhenOnLowLife = m("IncreasedRecoveryWhenOnLowLife",  P.increased("Recovery when on Low Life"))
  val IncreasedLifeRecovered = m("IncreasedLifeRecovered",  P.increased("Life Recovered"))
  val IncreasedManaRecovered = m("IncreasedManaRecovered",  P.increased("Mana Recovered"))
  val IncreasedArmourDuringFlaskEffect = m("IncreasedArmourDuringFlaskEffect",  P.increased("Armour during flask effect"))
  val IncreasedEvasionRatingDuringFlaskEffect = m("IncreasedEvasionRatingDuringFlaskEffect",  P.increased("Evasion Rating during flask effect"))
  val IncreasedMovementSpeedDuringFlaskEffect = m("IncreasedMovementSpeedDuringFlaskEffect",  P.increased("Movement Speed during flask effect"))

  val DispelsFrozenandChilled = m("DispelsFrozenandChilled",  P.simple0("Dispels Frozen and Chilled"))
  val DispelsShocked = m("DispelsShocked",  P.simple0("Dispels Shocked"))
  val DispelsBurning = m("DispelsBurning",  P.simple0("Dispels Burning"))
  val RemovesBleeding = m("RemovesBleeding",  P.simple0("Removes Bleeding"))
  val ImmunityToCursesDuringFlaskEffect = m("ImmunityToCursesDuringFlaskEffect",  P.simple0("Immunity to Curses during flask effect. Removes Curses on use"))
  val AddsKnockbackToMeleeAttacksDuringFlaskEffect = m("AddsKnockbackToMeleeAttacksDuringFlaskEffect",  P.simple0("Adds Knockback to Melee Attacks during flask effect"))
  val InstantRecovery = m("InstantRecovery",  P.simple0("Instant Recovery"))
  val InstantRecoveryWhenOnLowLife = m("InstantRecoveryWhenOnLowLife",  P.simple0("Instant Recovery when on Low Life"))

  val ReducedAmountRecovered = m("ReducedAmountRecovered",  P.reduced("Amount Recovered"))
  val ReducedRecoverySpeed = m("ReducedRecoverySpeed",  P.reduced("Recovery Speed"))
  val ReducedFlaskChargesUsed = m("ReducedFlaskChargesUsed",  P.reduced("Flask Charges used"))

  val ExtraCharges = m("ExtraCharges", P.simple1("", "Extra Charges"))

  val AmountOfRecoveryAppliedInstantly = m("AmountOfRecoveryAppliedInstantly", P.simple1("", "of Recovery applied Instantly"))
  val RechargesWhenTakingCrit = m("RechargesWhenTakingCrit", P.simple1("Recharges", "Charges when you take a Critical Strike"))
  val RechargesWhenDealingCrit = m("RechargesWhenDealingCrit", P.simple1("Recharges", "Charge when you deal a Critical Strike"))
  val AmountOfLifeFromMana = m("AmountOfLifeFromMana", P.simple1("Removes", "of Life Recovered from Mana when used"))
  val AmountOfManaFromLife = m("AmountOfManaFromLife", P.simple1("Removes", "of Mana Recovered from Life when used"))
  val AdditionalResistancesDuringFlaskEffect = m("AdditionalResistancesDuringFlaskEffect", P.simple1("", "additional Elemental Resistances during flask effect"))
  val GrantsPctOfLifeRecoveryToMinions = m("GrantsPctOfLifeRecoveryToMinions", P.simple1("Grants", "of Life Recovery to Minions"))
}