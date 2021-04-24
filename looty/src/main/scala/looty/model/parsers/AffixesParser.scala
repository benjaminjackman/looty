package looty
package model.parsers

import scala.scalajs.js
import looty.model.{LifeAndMana, Elements, Attributes, ComputedItem}


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/13/13 2:25 AM
//////////////////////////////////////////////////////////////


object AffixesParser {
  def parse(item: ComputedItem, s: String): Boolean = {
    val lowS = s.toLowerCase()
    var parsed = false
    all.foreach { parser =>
      if (parser.parse(lowS, item)) parsed = true
    }
    parsed
  }

  private val _all = new js.Array[AffixParser]()
  def add(affix: AffixParser): AffixParser = {
    _all.push(affix)
    affix
  }


  trait AffixParser {
    def parse(s: String, i: ComputedItem): Boolean
  }

  trait RegexAffixParser extends AffixParser {
    def regex: js.RegExp
  }

  trait BinaryAffixParser extends AffixParser {
    def str: String
    def lowerString: String
    def parse(s: String, i: ComputedItem): Boolean = if (s =?= lowerString) {
      process(i)
      true
    } else {
      false
    }
    def process(i: ComputedItem)
  }
  def simple0(s: String)(f: (ComputedItem) => Unit) {
    add {
      new BinaryAffixParser {
        def str: String = s
        val lowerString: String = s.toLowerCase()
        def process(i: ComputedItem): Unit = f(i)
      }
    }
  }

  trait RegexAffixParser1 extends RegexAffixParser {
    override def parse(s: String, i: ComputedItem): Boolean = {
      s.asInstanceOf[js.Dynamic].`match`(regex).nullSafe.asInstanceOf[Option[js.Array[String]]].getOrElse(js.Array()).toList match {
        case null => false
        case x :: y :: zs =>
          process(i, y.toString.toDouble)
          true
        case xs => false
      }
    }
    def process(i: ComputedItem, x: Double)
  }

  trait StringRegexAffixParser1 extends RegexAffixParser {
    override def parse(s: String, i: ComputedItem): Boolean = {
      s.asInstanceOf[js.Dynamic].`match`(regex).nullSafe.asInstanceOf[Option[js.Array[String]]].getOrElse(js.Array()).toList match {
        case null => false
        case x :: y :: zs =>
          process(i, y.toString)
          true
        case xs => false
      }
    }
    def process(i: ComputedItem, x: String)
  }

  def regex1(regex: String)(f: (ComputedItem, Double) => Unit) = {
    val r = regex
    add {
      new RegexAffixParser1() {
        val regex = new js.RegExp(r, "i")
        def process(i: ComputedItem, x: Double): Unit = f(i, x)
      }
    }
  }

  //should process affixes like "Grants Level 666 Apocalypse Skill"
  def strRegex1(regex: String)(f: (ComputedItem, String) => Unit) = {
    val r = regex
    add {
      new StringRegexAffixParser1() {
        val regex = new js.RegExp(r, "i")
        def process(i: ComputedItem, s: String): Unit = f(i, s)
      }
    }
  }

  trait RegexAffixParser2 extends RegexAffixParser {
    override def parse(s: String, i: ComputedItem): Boolean = {
      s.asInstanceOf[js.Dynamic].`match`(regex).nullSafe.asInstanceOf[Option[js.Array[String]]].getOrElse(js.Array()).toList match {
        case null => false
        case x :: y :: z :: zs =>
          process(i, y.toString.toDouble, z.toString.toDouble)
          true
        case xs => false
      }
    }
    def process(i: ComputedItem, x: Double, y: Double)
  }

  def regex2(regex: String)(f: (ComputedItem, Double, Double) => Unit) = {
    val r = regex
    add {
      new RegexAffixParser2() {
        val regex = new js.RegExp(r, "i")
        def process(i: ComputedItem, x: Double, y: Double): Unit = f(i, x, y)
      }
    }
  }


  def chanceTo(name: String)(f: (ComputedItem, Double) => Unit) = { regex1(s"^([.+-\\d]+)%* chance to $name$$")(f) }
  def increased(name: String)(f: (ComputedItem, Double) => Unit) = { regex1(s"^([.+-\\d]+)%* increased $name$$")(f) }
  def reduced(name: String)(f: (ComputedItem, Double) => Unit) = { regex1(s"^([.+-\\d]+)%* reduced $name$$")(f) }
  def plusTo(name: String)(f: (ComputedItem, Double) => Unit) = { regex1(s"^([.+-\\d]+)%* to $name$$")(f) }
  def addsDamage(element: String, suffix : String = "")(f: (ComputedItem, Double, Double) => Unit) = {
    regex2(s"^Adds ([\\d]+) to ([\\d]+) $element Damage${suffix}$$")(f)
  }
  def level(name: String)(f: (ComputedItem, Double) => Unit) = {
    val a = if (name.isEmpty) "" else name + " "
    val r = s"^([.+-\\d]+)%* to Level of Socketed ${a}Gems$$"
    regex1(r)(f)
  }
  def simple1(prefix: String, suffix: String)(f: (ComputedItem, Double) => Unit) = {
    val a = if (prefix.isEmpty) "" else prefix + " "
    val b = if (suffix.isEmpty) "" else " " + suffix
    val r = s"^$a([.+-\\d]+)%*$b$$"
    regex1(r)(f)
  }


//BEGIN AFFIXES
  for (x <- Attributes.all) {
    plusTo(x.cap)(_.plusTo.attribute.+=(x, _))
    level(x.cap)(_.gemLevel.attribute.+=(x, _))
  }

  for (x <- Elements.all) {
    increased(s"${x.cap} Damage")(_.increased.damage.+=(x, _))
    plusTo(s"${x.cap} Resistance")(_.plusTo.resistance.+=(x, _))
    addsDamage(x.cap)(_.damages(x).+=(_, _))
    addsDamage(x.cap, " to Attacks")(_.damages(x).+=(_, _))
    addsDamage(x.cap, " to Bow Attacks")(_.damagesWithBows(x).+=(_, _))
    addsDamage(x.cap, " to Spells")(_.addDamagesToSpells(x).+=(_, _))
    level(x.cap)(_.gemLevel.element.+=(x, _))
  }

  for (x <- LifeAndMana.all) {
    regex1(s"^Regenerate ([.\\d]+) ${x.cap} per second")(_.regenPerSecond.flat.+=(x, _))
    regex1(s"^Regenerate ([.\\d]+)% of ${x.cap} per second")(_.regenPerSecond.percent(x) += _)
    regex1(s"^([+-\\d]+) ${x.cap} [gG]ained on Kill")(_.onKill.lifeAndMana(x) += _)
    regex1(s"^([+-\\.\\d]+)% of Physical Attack Damage Leeched as ${x.cap}")(_.leech.physical(x) += _)
    plusTo(s"maximum ${x.cap}")(_.plusTo.lifeAndMana.+=(x, _))
    simple1("", s"${x.cap} gained for each Enemy hit by Attacks")(_.onAttackHit.lifeAndMana.+=(x, _))
    simple1("", s"${x.cap} gained for each Enemy hit by your Attacks")(_.onAttackHit.lifeAndMana.+=(x, _))
  }

  chanceTo("Block Spell Damage")(_.chanceTo.blockSpellDamage += _)
  chanceTo("Dodge Spell Hits")(_.chanceTo.dodgeSpellHits += _)

  increased("Attributes")(_.increased.attributes += _)
  increased("Intellect")(_.increased.intellect += _)
  increased("Dexterity")(_.increased.dexterity += _)
  increased("Strength")(_.increased.strength += _)

  increased("Damage")(_.increased.globalDamage += _)
  increased("Area Damage")(_.increased.areaDamage += _)
  increased("Attack Damage")(_.increased.attackDamage += _)
  increased("Melee Damage")(_.increased.meleeDamage += _)
  increased("Area of Effects")(_.increased.areaOfEffects += _)
  //On belts
  increased("Global Physical Damage")(_.increased.damage.physical += _)
  increased("Attack Speed")(_.increased.attackSpeed += _)
  increased("Stun Duration on Enemies")(_.increased.stunDurationOnEnemies += _)
  increased("Chill Duration on enemies")(_.increased.chillDurationOnEnemies += _)
  plusTo("Global Critical Strike Multiplier")(_.increased.globalCriticalStrikeMultiplier += _)
  increased("Global Critical Strike Chance")(_.increased.globalCriticalStrikeChance += _)
  increased("Critical Strike Chance")(_.increased.criticalStrikeChance += _)
  increased("Critical Strike Chance for Spells")(_.increased.criticalStrikeChanceForSpells += _)
  increased("Quantity of Items found")(_.increased.quantityOfItemsFound += _)
  increased("Rarity of Items found")(_.increased.rarityOfItemsFound += _)
  increased("Movement Speed")(_.increased.movementSpeed += _)
  //increased("Stun Recovery")(_.increased.blockAndStunRecovery += _)
  // Stun Recovery is now Stun and Block Recovery
  increased("Stun and Block Recovery")(_.increased.blockAndStunRecovery += _)
  increased("Block and Stun Recovery during Flask effect")(_.increased.blockAndStunRecovery += _)
  increased("Spell Damage")(_.increased.spellDamage += _)
  increased("Mana Regeneration Rate")(_.increased.manaRegenerationRate += _)
  increased("Elemental Damage with Weapons")(_.increased.elementalDamageWithWeapons += _)
  increased("Light Radius")(_.increased.lightRadius += _)
  increased("Cast Speed")(_.increased.castSpeed += _)
  increased("Projectile Speed")(_.increased.projectileSpeed += _)
  increased("Global Accuracy Rating")(_.increased.accuracyRating += _)
  increased("Block Recovery")(_.increased.blockRecovery += _)
  increased("Elemental Damage") { (i, n) =>
    i.increased.elementalDamage += n
    i.increased.damage.fire += n
    i.increased.damage.cold += n
    i.increased.damage.lightning += n
  }
  increased("Damage with Bleeding")(_.increased.bleedingDamage += _)
  increased("Burning Damage")(_.increased.burningDamage += _)
  increased("Elemental Damage with Attack Skills")(_.increased.elementalAttackDamage += _)
  //global "x% increased armour" appears only on talisman, amulet, belt, jewel
  increased("Armour")( (i, a) => {val itemType = i.item.typeLine; if (itemType.indexOf("Talisman") + itemType.indexOf("Amulet") + itemType.indexOf("Belt") + itemType.indexOf("Jewel") > 0) i.increased.globalArmour += a })
  //global "x% increased evasion rating" appears only on talisman, amulet, belt, jewel
  increased("Evasion Rating")( (i, a) => { val itemType = i.item.typeLine; if (itemType.indexOf("Talisman") + itemType.indexOf("Amulet") + itemType.indexOf("Belt") + itemType.indexOf("Jewel") > 0) i.increased.globalEvasionRating += a})
  increased("Energy Shield")(_.increased.localEnergyShield += _)
  increased("maximum Energy Shield")(_.increased.maximumEnergyShield += _) //from jewelry
  increased("maximum Life")(_.increased.maximumLife += _)
  increased("Armour") { (i, a) => i.increased.localArmour += a}
  increased("Evasion Rating") { (i, a) => i.increased.localEvasionRating += a}
  increased("Armour and Evasion") { (i, a) => i.increased.localArmour += a; i.increased.localEvasionRating += a}
  increased("Evasion and Energy Shield") { (i, a) => i.increased.localEvasionRating += a; i.increased.localEnergyShield += a}
  increased("Armour and Energy Shield") { (i, a) => i.increased.localArmour += a; i.increased.localEnergyShield += a}

  plusTo("Accuracy Rating")(_.plusTo.accuracyRating += _)
  plusTo("Armour")(_.plusTo.armour += _)
  plusTo("Evasion Rating")(_.plusTo.evasionRating += _)
  plusTo("Energy Shield")(_.plusTo.energyShield += _)
  plusTo("maximum Energy Shield")(_.plusTo.energyShield += _)
  plusTo("Fire and Lightning Resistances") { (i, n) =>
    i.plusTo.resistance.fire += n
    i.plusTo.resistance.lightning += n
  }
  plusTo("Cold and Lightning Resistances") { (i, n) =>
    i.plusTo.resistance.cold += n
    i.plusTo.resistance.lightning += n
  }
  plusTo("Fire and Cold Resistances") { (i, n) =>
    i.plusTo.resistance.fire += n
    i.plusTo.resistance.cold += n
  }
  plusTo("all Elemental Resistances") { (i, n) =>
    i.plusTo.resistance.fire += n
    i.plusTo.resistance.cold += n
    i.plusTo.resistance.lightning += n
  }
  plusTo("all Attributes") { (i, n) =>
    i.plusTo.attribute.strength += n
    i.plusTo.attribute.dexterity += n
    i.plusTo.attribute.intelligence += n
  }
  plusTo("Strength and Dexterity") { (i, n) =>
    i.plusTo.attribute.strength += n
    i.plusTo.attribute.dexterity += n
  }
  plusTo("Strength and Intelligence") { (i, n) =>
    i.plusTo.attribute.strength += n
    i.plusTo.attribute.intelligence += n
  }
  plusTo("Dexterity and Intelligence") { (i, n) =>
    i.plusTo.attribute.dexterity += n
    i.plusTo.attribute.intelligence += n
  }


  reduced("Attribute Requirements")(_.reduced.attributeRequirements += _)
  reduced("Enemy Stun Threshold")(_.reduced.enemyStunThreshold += _)

  level("Melee")(_.gemLevel.melee += _)
  level("Support")(_.gemLevel.support += _)
  level("Minion")(_.gemLevel.minion += _)
  level("Bow")(_.gemLevel.bow += _)
  level("")(_.gemLevel.addToAll(_))

  simple1("Reflects", "Physical Damage to Melee Attackers")(_.reflectsPhysicalDamageToAttackers += _)
  simple1("", "additional Block Chance")(_.blockChance += _)
  simple1("", "Chance to Block")(_.blockChance += _)
  simple1("", "Chance to Block Attack Damage")(_.blockChance += _)
  simple1("", "Chance to Block Attack Damage while wielding a Staff")(_.blockChance += _)
  simple1("Has","Socket.?")(_.numExplicitModSockets += _ )

  simple1("", "to Total Mana Cost of Skills")(_.minusToManaCostOfSkills += _.abs)
  simple1("", "chance of Arrows Piercing")(_.arrowPierceChance += _)

  simple1("", "chance to cause Bleeding on Hit")(_.bleedingChance += _)
  simple1("", "chance to Freeze")(_.freezeChance += _)
  simple1("", "chance to Shock")(_.shockChance += _)


  increased("Flask Charges gained")(_.flask.increased.chargesGained += _)
  increased("Flask Mana Recovery rate")(_.flask.increased.manaRecoveryRate += _)
  increased("Flask effect duration")(_.flask.increased.effectDuration += _)
  // renamed to "x% increased Duration"
  increased("Duration")(_.flask.increased.effectDuration += _)
  increased("Flask Life Recovery rate")(_.flask.increased.lifeRecoveryRate += _)
  increased("Flask Recovery Speed")(_.flask.increased.flaskRecoverySpeed += _)
  increased("Charge Recovery")(_.flask.increased.chargeRecovery += _)
  increased("Stun Recovery during Flask effect")(_.flask.increased.stunRecovery += _)
  increased("Recovery Speed")(_.flask.increased.recoverySpeed += _)
  increased("Recovery rate")(_.flask.increased.recoverySpeed += _)
  increased("Amount Recovered")(_.flask.increased.amountRecovered += _)
  increased("Recovery when on Low Life")(_.flask.increased.recoveryOnLowLife += _)
  increased("Life Recovered")(_.flask.increased.lifeRecovered += _)
  increased("Mana Recovered")(_.flask.increased.manaRecovered += _)
  increased("Armour during Flask effect")(_.flask.increased.armour += _)
  increased("Evasion Rating during Flask effect")(_.flask.increased.evasion += _)
  increased("Movement Speed during Flask effect")(_.flask.increased.evasion += _)

  simple0("Immunity to Freeze and Chill during Flask effect\nRemoves Freeze and Chill on use")(_.flask.removesFrozenAndChilled = true)
  simple0("Immunity to Shock during Flask effect\nRemoves Shock on use")(_.flask.removesShocked = true)
  simple0("Immunity to Ignite during Flask effect\nRemoves Burning on use")(_.flask.removesBurning = true)
  simple0("Immunity to Bleeding during Flask effect\nRemoves Bleeding on use")(_.flask.removesBleeding = true)
  //simple0("Immunity to Curses during Flask effect\nRemoves Curses on use")(_.flask.removesCurses = true)
  // curse immunities have been reworded?
  simple0("Immune to Curses during Flask effect\nRemoves Curses on use")(_.flask.removesCurses = true)
  // new poison immune Flasks
  simple0("Immune to Poison during Flask effect\nRemoves Poison on use")(_.flask.removesPoison = true)

  simple0("Adds Knockback to Melee Attacks during Flask effect")(_.flask.knockback = true)
  simple0("Instant Recovery")(_.flask.instantRecovery = true)
  simple0("Instant Recovery when on Low Life")(_.flask.instantRecoveryLowLife = true)

  reduced("Amount Recovered")(_.flask.reduced.amountRecovered += _)
  reduced("Recovery Speed")(_.flask.reduced.recoverySpeed += _)
  reduced("Recovery rate")(_.flask.reduced.recoverySpeed += _)
  //reduced("Flask Charges used")(_.flask.reduced.flaskChargesUsed += _)
  // renamed to "x% reduced Charges used"
  reduced("Charges used")(_.flask.reduced.flaskChargesUsed += _)
  reduced("Flask Charges used")(_.flask.reduced.flaskChargesUsed += _)

  simple1("", "Extra Charges")(_.flask.extraCharges += _)
  simple1("", "to Maximum Charges")(_.flask.extraCharges += _)
  simple1("", "of Recovery applied Instantly")(_.flask.amountAppliedInstantly += _)

  simple1("Recharges", "Charges when you take a Critical Strike")(_.flask.chargesOnCriticalStrikeTaken += _)
  //simple1("Recharges", "Charge when you deal a Critical Strike")(_.flask.chargesOnCriticalStrikeGiven += _)
  // surgeon's was remodeled to 20% on crit; probably needs more changes elsewhere (computedItem)
  simple1("", "chance to gain a Flask Charge when you deal a Critical Strike")(_.flask.chargesOnCriticalStrikeGiven += _)
  simple0("Recharges 1 Charge when you deal a Critical Strike")(_.flask.chargesOnCriticalStrikeGiven += 100)
  simple1("Removes", "of Life Recovered from Mana when used")(_.flask.lifeFromMana += _)
  simple1("Removes", "of Mana Recovered from Life when used")(_.flask.manaFromLife += _)

  simple1("", "additional Elemental Resistances during Flask effect")(_.flask.additionalResistances += _)
  simple1("Grants", "of Life Recovery to Minions")(_.flask.lifeRecoveryToMinions += _)

  //damage over time
  plusTo("Cold Damage over Time Multiplier")(_.DoT.multiplier.cold += _)
  plusTo("Fire Damage over Time Multiplier")(_.DoT.multiplier.fire += _)
  plusTo("Chaos Damage over Time Multiplier")(_.DoT.multiplier.chaos += _)
  plusTo("Non-Ailment Chaos Damage over Time Multiplier")(_.DoT.multiplier.nonAilmentChaos += _)
  plusTo("Physical Damage over Time Multiplier")(_.DoT.multiplier.physical += _)
  plusTo("Damage over Time Multiplier for Bleeding")(_.DoT.multiplier.bleeding += _)
  plusTo("Damage over Time Multiplier")(_.DoT.multiplier.general += _)
  simple1("Minions deal","increased Damage")(_.minions.damage += _)
  simple1("Minions have","increased Area of Effects")(_.minions.areaOfEffects += _)
  simple1("Minions have","increased Attack Speed")(_.minions.attackSpeed += _)
  simple1("Minions have","increased Cast Speed")(_.minions.castSpeed += _)
  simple1("Minions have","increased maximum Life")(_.minions.maximumLife += _)
  simple1("Minions have","increased Movement Speed")(_.minions.movementSpeed += _)
  simple1("Minions have","to all Elemental Resistances")(_.minions.eleResist += _)
  simple1("Minions have","chance to deal Double Damage")(_.minions.dblDamage += _)
  simple1("Minions have","to Accuracy Rating")(_.minions.accuracyRating += _)
  simple1("You and your Minions take","reduced Reflected Physical Damage")(_.minions.reducedReflectedDamage += _)
  increased("Minion Duration")(_.minions.increasedMinionDuration += _)
  simple1("Minions deal","increased Damage if you've used a Minion Skill Recently")(_.minions.increasedDamageWhenSkillUsed += _)


  increased("Mine Damage")(_.mines.damage += _)
  increased("Mine Throwing Speed")(_.mines.throwingSpeed += _)
  reduced("Mine duration")(_.mines.reducedDuration += _)

  increased("Traps Damage")(_.traps.damage += _)
  increased("Traps Throwing Speed")(_.traps.throwingSpeed += _)
  reduced("Trap duration")(_.traps.reducedDuration += _)

  increased("Totem Damage")(_.totems.damage += _)
  increased("Totem Life")(_.totems.life += _)
  simple1("Totems gain","to all Elemental Resistances")(_.totems.allElemResists += _)

  strRegex1(s"^Grants Level \\d+ ([\\w ]+) Skill")(_.skill.name += _)
  regex1(s"^Grants Level (\\d+) [\\w ]+ Skill")(_.skill.level += _)

  strRegex1(s"^Socketed Gems are Supported by Level \\d+ ([\\w ]+)")(_.socketedGems.name += _ + "  ")
  //Cluster Jewels affixes:
  //Adds # Passive Skills
  regex1(s"^\\Adds (\\d+) Passive Skills")(_.passiveSkill.count += _)
  //number of sockets that jewel gives
  //1 Added Passive Skill is a Jewel Socket
  //2 Added Passive Skills are Jewel Sockets
  regex1(s"^(\\d+) Added Passive Skill is a Jewel Socket")(_.passiveSkill.socketCount += _)
  regex1(s"^(\\d+) Added Passive Skills are Jewel Sockets")(_.passiveSkill.socketCount += _)
  //1 Added Passive Skill is a # - name of given skill
  strRegex1(s"^1 Added Passive Skill is ([\\w ]+)")(_.passiveSkill.name += _ + ", ")
  strRegex1(s"^Added Small Passive Skills also grant: (.+)")(_.passiveSkill.grants += _ + ", ")
  strRegex1(s"^Added Small Passive Skills grant: (.+)")(_.passiveSkill.grants += _ + ", ")
  val all = _all.toList

}
