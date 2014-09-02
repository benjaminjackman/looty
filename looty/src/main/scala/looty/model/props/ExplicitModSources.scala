package looty
package model.props

import cgta.ojs.io.{AjaxHelp, CsvReader}
import looty.model.{Elements => MElements, Attributes => MAttributes}


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/1/14 1:24 PM
//////////////////////////////////////////////////////////////

object ExplicitModSources {
  //Csv available here:
  //https://docs.google.com/spreadsheet/lv?key=0ArsB7KohOhhpdHoyZzU2WVZZNXQxMDg4MVk1b0FGbkE&f=true&noheader=false&gid=1
  //More info: www.pathofexile.com/forum/view-thread/54167

  //THIS SCALIDE SCRIPT WILL GENERATE THE vals Below:
  def generateScalacodeFromCsv(csvStr: String) {
    def toLine(s: String) = {
      def compact(s: String) = s.replaceAll(" ", "").replaceAll("\\+", "P").replaceAll("-", "N").replaceAll("%", "Pct")

      def valname(v: String, s: String, mh: String) = "val " + v + " = " + mh + "(\"" + s + "\")"

      if (s.contains("/")) {
        val v = s.split("/").toList.map(compact).mkString("_")
        valname("Hybrid_" + v, s, "h")
      } else {
        valname(compact(s), s, "m")
      }
    }

    println(Set(csvStr.split("\\n").toList.map(_.trim()): _*).toList.sortWith(_ < _).map(toLine).mkString("\n"))
  }

  sealed trait EmsKey
  case class SingleEmsKey(description: String) extends EmsKey
  
  case class HybridEmsKey(description: String)  extends EmsKey {
    def _1 = HybridEmsKey1(description)
    def _2 = HybridEmsKey2(description)
  }
  case class HybridEmsKey1(description : String) extends EmsKey
  case class HybridEmsKey2(description : String) extends EmsKey

  def m(s: String): SingleEmsKey = SingleEmsKey(s)
  def h(s: String): HybridEmsKey = HybridEmsKey(s)

  val Mods = new RawMods {
    object Elements {
      val DmgPPct = MElements(
        phy = None,
        cha = None,
        fir = Some(FireDmgPPct),
        col = Some(ColdDmgPPct),
        lig = Some(LightningDmgPPct))

      val DmgResistancePct = MElements(
        phy = None,
        cha = BaseChaosDmgResistancePct,
        fir = BaseFireDmgResistancePct,
        col = BaseColdDmgResistancePct,
        lig = BaseLightningDmgResistancePct
      )

      val BaseAddedDmg = MElements(
        phy = Some(Hybrid_BaseMinAddedPhysicalDmg_BaseMaxAddedPhysicalDmg),
        fir = Some(Hybrid_BaseMinAddedFireDmg_BaseMaxAddedFireDmg),
        col = Some(Hybrid_BaseMinAddedColdDmg_BaseMaxAddedColdDmg),
        lig = Some(Hybrid_BaseMinAddedLightningDmg_BaseMaxAddedLightningDmg),
        cha = None
      )

      val LocalAddedDmg = MElements(
        phy = Some(Hybrid_LocalMinAddedPhysicalDmg_LocalMaxAddedPhysicalDmg),
        fir = Some(Hybrid_LocalMinAddedFireDmg_LocalMaxAddedFireDmg),
        col = Some(Hybrid_LocalMinAddedColdDmg_LocalMaxAddedColdDmg),
        lig = Some(Hybrid_LocalMinAddedLightningDmg_LocalMaxAddedLightningDmg),
        cha = None
      )

      val LocalGemLevel = MElements(
        phy = None,
        fir = Some(LocalSocketedFireGemLevelP),
        col = Some(LocalSocketedColdGemLevelP),
        lig = Some(LocalSocketedLightningGemLevelP),
        cha = None
      )
    }

    object Attributes {
      val Additional = MAttributes(
        str = AdditionalStrength,
        dex = AdditionalDexterity,
        int = AdditionalIntelligence
      )
    }

  }

  class RawMods {
    val AccuracyRating          = m("Accuracy Rating")
    val AdditionalAllAttributes = m("Additional All Attributes")
    val AdditionalDexterity     = m("Additional Dexterity")
    val AdditionalIntelligence  = m("Additional Intelligence")
    val AdditionalStrength      = m("Additional Strength")
    val ArmorRating             = m("Armor Rating")
    val ArmorRatingPPct         = m("Armor Rating +%")
    val AttackSpeedPPct         = m("Attack Speed +%")

    val BaseChaosDmgResistancePct     = m("Base Chaos Dmg Resistance %")
    val BaseColdDmgResistancePct      = m("Base Cold Dmg Resistance %")
    val BaseFireDmgResistancePct      = m("Base Fire Dmg Resistance %")
    val BaseLightningDmgResistancePct = m("Base Lightning Dmg Resistance %")

    val BaseCastSpeedPPct                 = m("Base Cast Speed +%")
    val BaseCriticalStrikeMultiplierPPct  = m("Base Critical Strike Multiplier +%")
    val BaseEvasionRating                 = m("Base Evasion Rating")
    val BaseItemFoundQuantityPPct         = m("Base Item Found Quantity +%")
    val BaseItemFoundRarityPPct           = m("Base Item Found Rarity +%")
    val BaseLifeRegenerationRatePerSecond = m("Base Life Regeneration Rate Per Second")
    val BaseMaxEnergyShield               = m("Base Max Energy Shield")
    val BaseMaxLife                       = m("Base Max Life")
    val BaseMaxMana                       = m("Base Max Mana")
    val BaseMovementVelocityPPct          = m("Base Movement Velocity +%")
    val BaseResistAllElementsPct          = m("Base Resist All Elements %")
    val BaseStunDurationPPct              = m("Base Stun Duration +%")
    val BaseStunRecoveryPPct              = m("Base Stun Recovery +%")
    val BaseStunThresholdReductionPPct    = m("Base Stun Threshold Reduction +%")


    val ColdDmgPPct      = m("Cold Dmg +%")
    val FireDmgPPct      = m("Fire Dmg +%")
    val LightningDmgPPct = m("Lightning Dmg +%")

    val ChargesGainedPPct               = m("Charges Gained +%")
    val CriticalStrikeChancePPct        = m("Critical Strike Chance +%")
    val EvasionRatingPPct               = m("Evasion Rating +%")
    val FlaskChargesUsedPPct            = m("Flask Charges Used +%")
    val FlaskDurationPPct               = m("Flask Duration +%")
    val FlaskLifeRecoveryRatePPct       = m("Flask Life Recovery Rate +%")
    val FlaskManaRecoveryRatePPct       = m("Flask Mana Recovery Rate +%")
    val LifeGainedOnEnemyDeath          = m("Life Gained On Enemy Death")
    val LifeGainPerTarget               = m("Life Gain Per Target")
    val LifeLeechFromPhysicalDmgPct     = m("Life Leech From Physical Dmg %")
    val LocalAccuracyRating             = m("Local Accuracy Rating")
    val LocalAdditionalBlockChancePct   = m("Local Additional Block Chance %")
    val LocalArmorPPct                  = m("Local Armor +%")
    val LocalArmorRating                = m("Local Armor Rating")
    val LocalArmourAndEnergyShieldPPct  = m("Local Armour And Energy Shield +%")
    val LocalArmourAndEvasionPPct       = m("Local Armour And Evasion +%")
    val LocalAttackSpeedPPct            = m("Local Attack Speed +%")
    val LocalAttributeRequirementsNPct  = m("Local Attribute Requirements -%")
    val LocalCriticalStrikeChancePPct   = m("Local Critical Strike Chance +%")
    val LocalEnergyShield               = m("Local Energy Shield")
    val LocalEnergyShieldPPct           = m("Local Energy Shield +%")
    val LocalEvasionAndEnergyShieldPPct = m("Local Evasion And Energy Shield +%")
    val LocalEvasionRating              = m("Local Evasion Rating")
    val LocalEvasionRatingPPct          = m("Local Evasion Rating +%")
    val LocalPhysicalDmgPPct            = m("Local Physical Dmg +%")

    val LocalSocketedColdGemLevelP      = m("Local Socketed Cold Gem Level +")
    val LocalSocketedFireGemLevelP      = m("Local Socketed Fire Gem Level +")
    val LocalSocketedLightningGemLevelP = m("Local Socketed Lightning Gem Level +")

    val LocalSocketedBowGemLevelP    = m("Local Socketed Bow Gem Level +")
    val LocalSocketedGemLevelP       = m("Local Socketed Gem Level +")
    val LocalSocketedMeleeGemLevelP  = m("Local Socketed Melee Gem Level +")
    val LocalSocketedMinionGemLevelP = m("Local Socketed Minion Gem Level +")

    val ManaGainedOnEnemyDeath                  = m("Mana Gained On Enemy Death")
    val ManaLeechFromPhysicalDmgPct             = m("Mana Leech From Physical Dmg %")
    val ManaRegenerationRatePPct                = m("Mana Regeneration Rate +%")
    val MaxEnergyShieldPPct                     = m("Max Energy Shield +%")
    val PhysicalDmgToReturnToMeleeAttacker      = m("Physical Dmg To Return To Melee Attacker")
    val ProjectilespeedPPct                     = m("Projectile speed +%")
    val SpellCriticalStrikeChancePPct           = m("Spell Critical Strike Chance +%")
    val SpellDmgPPct                            = m("Spell Dmg +%")
    val WeaponElementalDmgPPct                  = m("Weapon Elemental Dmg +%")
    val WeaponNonlyCriticalStrikeMultiplierPPct = m("Weapon-only Critical Strike Multiplier +%")

    val Hybrid_BaseMinAddedColdDmg_BaseMaxAddedColdDmg           = h("Base Min Added Cold Dmg / Base Max Added Cold Dmg")
    val Hybrid_BaseMinAddedFireDmg_BaseMaxAddedFireDmg           = h("Base Min Added Fire Dmg / Base Max Added Fire Dmg")
    val Hybrid_BaseMinAddedLightningDmg_BaseMaxAddedLightningDmg = h("Base Min Added Lightning Dmg / Base Max Added Lightning Dmg")
    val Hybrid_BaseMinAddedPhysicalDmg_BaseMaxAddedPhysicalDmg   = h("Base Min Added Physical Dmg / Base Max Added Physical Dmg")

    val Hybrid_LocalMinAddedColdDmg_LocalMaxAddedColdDmg           = h("Local Min Added Cold Dmg / Local Max Added Cold Dmg")
    val Hybrid_LocalMinAddedFireDmg_LocalMaxAddedFireDmg           = h("Local Min Added Fire Dmg / Local Max Added Fire Dmg")
    val Hybrid_LocalMinAddedLightningDmg_LocalMaxAddedLightningDmg = h("Local Min Added Lightning Dmg / Local Max Added Lightning Dmg")
    val Hybrid_LocalMinAddedPhysicalDmg_LocalMaxAddedPhysicalDmg   = h("Local Min Added Physical Dmg / Local Max Added Physical Dmg")

    val Hybrid_LightRadius_PAccuracyRating              = h("Light Radius / +Accuracy Rating")
    val Hybrid_SpellDmgPPct_BaseMaxMana                 = h("Spell Dmg +% / Base Max Mana")
    val Hybrid_LocalPhysicalDmgPPct_LocalAccuracyRating = h("Local Physical Dmg +% / Local Accuracy Rating")

    val Hybrid_LocalArmorPPct_BaseStunRecoveryPPct         = h("Local Armor +% / Base Stun Recovery +%")
    val Hybrid_LocalEnergyShieldPPct_BaseStunRecoveryPPct  = h("Local Energy Shield +% / Base Stun Recovery +%")
    val Hybrid_LocalEvasionRatingPPct_BaseStunRecoveryPPct = h("Local Evasion Rating +% / Base Stun Recovery +%")

    val Hybrid_LocalArmourAndEnergyShieldPPct_BaseStunRecoveryPPct  = h("Local Armour And Energy Shield +% / Base Stun Recovery +%")
    val Hybrid_LocalArmourAndEvasionPPct_BaseStunRecoveryPPct       = h("Local Armour And Evasion +% / Base Stun Recovery +%")
    val Hybrid_LocalEvasionAndEnergyShieldPPct_BaseStunRecoveryPPct = h("Local Evasion And Energy Shield +% / Base Stun Recovery +%")
  }


  def main() {

    AjaxHelp.get[String]("data/item-mods.csv") foreach { s: String =>
      val csv = CsvReader(s.split("\\n").map(_.trim).filter(_.nonEmpty).toIterator)
      println(csv.rows.map(_.get("Description").get).size)
    }
  }

}