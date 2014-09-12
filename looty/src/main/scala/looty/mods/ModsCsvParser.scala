package looty
package mods

import looty.util.AjaxHelp

import scala.concurrent.Future
import scala.scalajs.js
import looty.model.{LifeAndMana, Attributes, Elements}


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/26/13 3:38 PM
//////////////////////////////////////////////////////////////

/**
 * Loads the Mods csv
 */
object ModsCsvParser {

  object ModRow {
    implicit class ModRowExtensions(val r: ModRow) extends AnyVal {
    }
  }

  trait ModRow extends js.Object {
    val `1h Maces`          : js.String
    val `1h Swords and Axes`: js.String
    val `2h Maces`          : js.String
    val `2h Swords and Axes`: js.String
    val Amulets             : js.String
    val Belts               : js.String
    val Boots               : js.String
    val Bows                : js.String
    val Categories          : js.String
    val Chests              : js.String
    val Claws               : js.String
    val Daggers             : js.String
    val Description         : js.String
    val Gloves              : js.String
    val Helmets             : js.String
    val Level               : js.String
    val `Max V`             : js.String
    val `Min V`             : js.String
    val Name                : js.String
    val `Prefix/Suffix`     : js.String
    val Quivers             : js.String
    val Rings               : js.String
    val Sceptres            : js.String
    val Shields             : js.String
    val Staffs              : js.String
    val Value               : js.String
    val Wands               : js.String
  }

  var modDescriptions: List[ModRow] = null

  def init(): Future[Unit] = {
    console.debug("Init ModsCsvParser")
    AjaxHelp.get[String]("/data/item-mods.csv").map { csv =>
      console.debug("Parsing descriptions")
    try {
      modDescriptions = global.d3.csv.parse(csv).asInstanceOf[js.Array[ModRow]].toList
      loadParsers()
    } catch {
      case e : Throwable =>
        console.log(e.asJsAny)
        e.printStackTrace()
    }
      console.debug("Loaded parsers")
    }
  }

  private def addMod(category: String,
    description: String,
    parser: AffixesParser2.AffixParser,
    isHybrid: Boolean = false) {
    val mods = modDescriptions.filter(r => r.Categories.toString == category && r.Description.toString == description)
  }

  private def loadParsers() {
    val P = AffixesParser2

    //Mods for all elements
    for (element <- Elements.all) {
      val Element = element.cap
      addMod("Dmg",
        s"Base Min Added $Element Dmg / Base Max Added $Element Dmg",
        P.addsDamage(Element)(_.damage.base(element))
      )
      addMod("Elemental Dmg scaling",
        s"$Element Dmg +%",
        P.increased(s"$Element Damage")(_.increased.elementalDamage(element))
      )
      addMod("Resistance",
        s"Base $Element Dmg Resistance %",
        P.plusTo(s"$Element Resistance")(_.plusTo.resistance(element))
      )

      for (h <- 1 to 2) {
        val numHands = h.toString
        val cat = if (Element == "Physical") {
          s"${numHands}h Dmg"
        } else {
          if (h == 1) {
            "Bow and 1H elemental Dmg"
          } else {
            "2H Weapon elemental Dmg"
          }
        }
        addMod(cat,
          s"Local Min Added $Element Dmg / Local Max Added $Element Dmg",
          P.addsDamage(Element)(_.damage.local(element))
        )
      }
    }

    //All resist
    addMod("Resistance",
      s"Base Resist All Elements %",
      P.plusTo("all Elemental Resistances")(_.plusTo.allResistance)
    )


    //Mods for attributes
    for (attribute <- Attributes.all) {
      val attrStr = attribute.name
      addMod(s"$attrStr increase", s"Additional $attrStr", P.plusTo(attribute.name)(_.plusTo.attributes(attribute)))
    }

    //Spell Damage
    addMod("1H Weapon Spell Dmg", "Spell Dmg +%", P.increased("Spell Damage")(_.increased.spellDamage))
    addMod("Staff Spell Dmg", "Spell Dmg +%", P.increased("Spell Damage")(_.increased.spellDamage))
    addMod("Spell Dmg", "Spell Dmg +%", P.increased("Spell Damage")(_.increased.spellDamage))

    //WEP
    addMod("Weapon Elemental Dmg",
      "Weapon Elemental Dmg +%",
      P.increased("Elemental Damage with Weapons")(_.increased.elementalDamageWithWeapons))

    //Move speed
    addMod("Movement Velocity", "Base Movement Velocity +%", P.increased("Movement Speed")(_.increased.movementSpeed))

    //Projectile Speed
    addMod("Projectile Speed", "Projectile speed +%", P.increased("Projectile Speed")(_.increased.projectileSpeed))

    //Accuracy
    addMod("Accuracy", "Accuracy Rating", P.increased("Accuracy Rating")(_.increased.accuracyRating))
    addMod("Accuracy", "Local Accuracy Rating", P.increased("Accuracy Rating")(_.increased.accuracyRating))

    //Attack Speed
    addMod("Attack speed", "Attack Speed +%", P.increased("Attack Speed")(_.increased.attackSpeed))
    addMod("Attack speed", "Local Attack Speed +%", P.increased("Attack Speed")(_.increased.attackSpeed))

    //All Attributes
    addMod("All attribute increase", "Additional All Attributes", P.plusTo("all Attributes")(_.plusTo.allAttributes))

    //Cast Speed
    addMod("Cast speed", "Base Cast Speed +%", P.increased("Cast Speed")(_.increased.castSpeed))

    //Crits
    addMod("Critical Strike multiplier",
      "Base Critical Strike Multiplier +%",
      P.increased("Global Critical Strike Multiplier")(_.increased.globalCriticalStrikeMultiplier))
    addMod("Critical Strike multiplier",
      "Weapon-only Critical Strike Multiplier +%",
      P.increased("Global Critical Strike Multiplier")(_.increased.globalCriticalStrikeMultiplier))
    addMod("Critical Strike Chance",
      "Critical Strike Chance +%",
      P.increased("Critical Strike Chance")(_.increased.globalCriticalStrikeChance))
    addMod("Local Critical Strike Chance",
      "Local Critical Strike Chance +%",
      P.increased("Critical Strike Chance")(_.increased.localCriticalStrikeChance))
    addMod("Spell critical strike chance",
      "Spell Critical Strike Chance +%",
      P.increased("Critical Strike Chance for Spells")(_.increased.spellCriticalStrikeChance))


    //Mods for life and mana
    for (lifeMana <- LifeAndMana.all) {
      val LAM = lifeMana.cap
      addMod("Flask Effects",
        s"Flask $LAM Recovery Rate +%",
        P.increased(s"Flask $LAM Recovery rate")(_.increased.flaskRecoveryRate(lifeMana)))
      addMod(s"$LAM gained on enemy death", s"$LAM Gained On Enemy Death",
        P.regex1(s"^([+-\\d]+) $LAM [gG]ained on Kill")(_.other.lifeAndManaOnKill(lifeMana)))
      addMod(s"$LAM", s"Base Max $LAM", P.plusTo(s"maximum $LAM")(_.plusTo.lifeAndMana(lifeMana)))
      addMod(s"$LAM leech",
        s"$LAM Leech From Physical Dmg %",
        P.regex1(s"^([+-\\d]+)% of Physical Attack Damage Leeched as $LAM")(_.other.lifeAndManaLeech(lifeMana)))

    }

    //Life
    addMod("Life gain per target",
      "Life Gain Per Target",
      P.simple1("", s"Life gained for each enemy hit by your Attacks")(_.other.lifeOnHit))
    addMod("Life regeneration",
      "Base Life Regeneration Rate Per Second",
      P.simple1("", s"Life Regenerated per second")(_.other.lifeRegeneratedPerSecond))
    addMod("Mana regeneration",
      "Mana Regeneration Rate +%",
      P.increased("Mana Regeneration Rate")(_.increased.manaRegenerationRate))


    //Flask Belt
    addMod("Flask Effect", "Charges Gained +%", P.increased("Flask Charges gained")(_.increased.flaskChargesGained))
    addMod("Flask Effect", "Flask Charges Used +%", P.reduced("Flask Charges used")(_.reduced.flaskChargesUsed))
    addMod("Flask Effect", "Flask Duration +%", P.increased("Flask effect duration")(_.increased.flaskEffectDuration))

    //Attr Reqs
    addMod("Reduced Attribute Requirements",
      "Local Attribute Requirements -%",
      P.reduced("Attribute Requirements")(_.reduced.attributeRequirements))

    addMod("Stun",
      "Base Stun Duration +%",
      P.increased("Stun Duration on enemies")(_.increased.stunDurationOnEnemies))
    addMod("Stun",
      "Base Stun Threshold Reduction +%",
      P.reduced("Enemy Stun Threshold")(_.reduced.enemyStunThreshold))
    addMod("Stun recovery",
      "Base Stun Recovery +%",
      P.increased("Block and Stun Recovery")(_.increased.blockAndStunRecovery))

    //Shields
    addMod("Shield Block",
      "Local Additional Block Chance %",
      P.simple1("", "additional Block Chance")(_.other.additionalBlockChance)
    )

    //IIQ IIR
    addMod("Item acquisition",
      "Base Item Found Quantity +%",
      P.increased("Quantity of Items found")(_.increased.quantityOfItemsFound))
    addMod("Item acquisition",
      "Base Item Found Rarity +%",
      P.increased("Rarity of Items found")(_.increased.rarityOfItemsFound))

    //Gems
    for (gem <- List("Bow", "Minion", "Melee", "Cold", "Fire", "Lightning", "")) {
      val gemStr = if (gem.isEmpty) "" else gem + " "
      addMod("Gem level",
        s"Local Socketed ${gemStr}Gem Level",
        P.level(gem)(_.gem(gem)))
    }


    //Reflect
    addMod("Dmg return",
      "Physical Dmg To Return To Melee Attacker",
      P.simple1("Reflects", "Physical Damage to Melee Attackers")(_.other.reflects))
    //Physical Damage Scaling
    addMod("Dmg scaling", "Local Physical Dmg +%", P.increased("Physical Damage")(_.increased.localPhysicalDamage))

    //AR ES EV
    //========
    //Belt Armour
    addMod("Armor", "Armor Rating", P.plusTo("Armour")(_.plusTo.globalArmour))
    //HCGBS Armour
    addMod("Armor", "Local Armor Rating", P.plusTo("Armour")(_.plusTo.localArmour))
    //HCGBS Armour +%
    addMod("Armor", "Local Armor +%", P.increased("Armour")(_.increased.localArmour))
    //Amulet Armour +%
    addMod("Armor", "Armor Rating +%", P.increased("Armour")(_.increased.globalArmour))
    //Ring Amulet Belt
    addMod("Energy shield", "Base Max Energy Shield", P.plusTo("maximum Energy Shield")(_.plusTo.globalEnergyShield))
    //int gear
    addMod("Energy shield", "Local Energy Shield", P.plusTo("Energy Shield")(_.plusTo.localEnergyShield))
    //int-only gear
    addMod("Energy shield", "Local Energy Shield +%", P.increased("Energy Shield")(_.increased.localEnergyShield))
    //Amulet
    addMod("Energy shield",
      "Max Energy Shield +%",
      P.increased("maximum Energy Shield")(_.increased.globalEnergyShield))
    //Evasion rings
    addMod("Evasion", "Base Evasion Rating", P.plusTo("Evasion Rating")(_.plusTo.globalEvasion))
    //amulets
    addMod("Evasion", "Evasion Rating +%", P.increased("Evasion Rating")(_.plusTo.localEvasion))
    //dex gear
    addMod("Evasion", "Local Evasion Rating", P.plusTo("Evasion Rating")(_.increased.localEvasion))
    //dex-only gear
    addMod("Evasion", "Local Evasion Rating +%", P.increased("Evasion Rating")(_.increased.globalEvasion))



  }


}