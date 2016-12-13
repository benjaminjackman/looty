package looty.model

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 6:22 PM
//////////////////////////////////////////////////////////////


object HighScorer {
  private var _all = new js.Array[HighScorer]()

  locally {
    def add(s: HighScorer) {
      _all.push(s)
    }

    def scorer(reason: String)(f: ComputedItem => Option[HighScore]) = {
      add {
        new HighScorer {
          def apply(i: ComputedItem) = f(i)
        }
      }
    }

    def fscore(reason: String)(fs: (ComputedItem => Boolean)*)(score: Int) {
      scorer(reason) { i =>
        if (fs.forall(f => f(i))) Some(HighScore(List(reason), score)) else None
      }
    }
    def fscore1(reason: String)(fs: (ComputedItem => Boolean)*) { fscore(reason)(fs: _*)(1) }
    def fscore100(reason: String)(fs: (ComputedItem => Boolean)*) { fscore(reason)(fs: _*)(100) }

    //Based on https://www.reddit.com/r/pathofexile/comments/56rtmk/the_is_this_item_worth_something_guide/
    //Might also implement some rules from https://www.reddit.com/r/pathofexile/comments/56mbwv/how_to_identify_a_good_weapon_new_player_needs/d8klcy0/

    def allScore(compItem: ComputedItem) {
      //Body Armour
      if (compItem.slots.isChest) {
        fscore1("75+ max life")(_.plusTo.lifeAndMana.life >= 75, _.properties.energyShield == 0)
        fscore1("575+ energy shield")(_.properties.energyShield >= 575)
        fscore1("350+ ES, 70+ max life")(_.properties.energyShield >= 350, _.plusTo.lifeAndMana.life >= 70, _.properties.energyShield > 0)
        fscore1("40+ STR armour base")(_.properties.armour > 0, _.properties.evasionRating == 0, _.properties.energyShield == 0, _.plusTo.attribute.strength >= 40)
        fscore1("40+ INT ES base")(_.properties.armour == 0, _.properties.evasionRating == 0, _.properties.energyShield > 0, _.plusTo.attribute.intelligence >= 40)
        fscore1("80+ total res")(_.plusTo.totalResistance >= 80)
      }

      //Helmet
      if (compItem.slots.isHelmet) {
        fscore1("65+ max life")(_.plusTo.lifeAndMana.life >= 65, _.properties.energyShield == 0)
        fscore1("300+ energy shield")(_.properties.energyShield >= 300)
        fscore1("200+ ES, 60+ max life")(_.properties.energyShield >= 200, _.plusTo.lifeAndMana.life >= 60, _.properties.energyShield > 0)
        //40+ Intelligence on Armour or Evasion base
        fscore1("40+ INT armour or evasion base")(i => (i.properties.armour > 0 || i.properties.evasionRating > 0) && i.properties.energyShield == 0 && i.plusTo.attribute.intelligence >= 40)
        //300+ Accuracy
        fscore1("300+ accuracy total")(_.plusTo.accuracyRatingWithDex >= 300)
        //80+ total resistances
        fscore1("80+ total res")(_.plusTo.totalResistance >= 80)
      }

      //Boots
      if (compItem.slots.isBoots) {
        //20+ % Movement Speed (Required or they are very hard to sell)
        fscore1("20+ movement speed")(_.increased.movementSpeed >= 20)
        //65+ Life (if armour or evasion base, if no life it's 90% likely to be vendor trash)
        fscore1("65+ max life")(_.plusTo.lifeAndMana.life >= 65, _.properties.energyShield == 0)
        //130+ Total Energy Shield
        fscore1("130+ energy shield")(_.properties.energyShield >= 130)
        //90+ Total Energy Shield AND 65+ Life (if energy shield base or energy shield hybrid)
        fscore1("90+ ES, 65+ max life")(_.properties.energyShield >= 90, _.plusTo.lifeAndMana.life >= 65, _.properties.energyShield > 0)
        //70+% Total Resistance
        fscore1("70+ total res")(_.plusTo.totalResistance >= 70)
        //40+ Strength
        fscore1("40+ STR")(_.plusTo.attribute.strength >= 40)
        //40+ Intelligence
        fscore1("40+ INT")(_.plusTo.attribute.intelligence >= 40)
      }

      //Gloves
      if (compItem.slots.isGloves) {
        //65+ Life (if armour or evasion base)
        fscore1("65+ max life")(_.plusTo.lifeAndMana.life >= 65, _.properties.energyShield == 0)
        //150+ Total Energy Shield
        fscore1("150+ energy shield")(_.properties.energyShield >= 150)
        //100+ Total Energy Shield AND 65+ Life (if energy shield base or energy shield hybrid)
        fscore1("100+ ES, 65+ max life")(_.properties.energyShield >= 100, _.plusTo.lifeAndMana.life >= 65)
        //80+% Total Resistance
        fscore1("80+ total res")(_.plusTo.totalResistance >= 80)
        //300+ Accuracy
        fscore1("300+ accuracy total")(_.plusTo.accuracyRatingWithDex >= 300)
        //10+% Attack speed
        fscore1("10+% attack speed")(_.increased.attackSpeed >= 10)
        //40+ Dexterity (if Energy Shield or Armour gloves)
        fscore1("40+ dex armour or ES base")(i => (i.properties.armour > 0 || i.properties.energyShield > 0) && i.plusTo.attribute.dexterity >= 40)
      }

      //Shield
      if (compItem.slots.isShield) {
        //80+ Life (if armor or evasion base)
        fscore1("80+ life armour or evasion base")(i => (i.properties.armour > 0 || i.properties.evasionRating > 0) && i.properties.energyShield == 0 && i.plusTo.lifeAndMana.life >= 80)
        //350+ Total Energy Shield
        fscore1("350+ energy shield")(_.properties.energyShield >= 350)
        //280+ Total Energy Shield AND 80+ Life (if energy shield base or energy shield hybrid)
        fscore1("280+ ES, 65+ max life")(_.properties.energyShield >= 280, _.plusTo.lifeAndMana.life >= 65)
        //100+% Total Resistance
        fscore1("100+ total res")(_.plusTo.totalResistance >= 70)
        //35+ Strength (if armour base)
        fscore1("35+ str armour base")(i => i.properties.armour > 0 && i.plusTo.attribute.strength >= 35)
        //35+ Intelligence (if energy shield base)
        fscore1("35+ int ES base")(i => (i.properties.energyShield > 0) && i.plusTo.attribute.intelligence >= 35)
        //55+% Spell Damage
        fscore1("55%+ Increased Spell Dmg")(_.increased.spellDamage >= 55)
        //80+% Spell Critical Strike Chance
        fscore1("80%+ Increased Spell Crit chance")(_.increased.criticalStrikeChanceForSpells >= 80)

      }

      //Sword / Axe / Mace / bow
      if (compItem.slots.isWeapon && (compItem.properties.weaponType.isSword || compItem.properties.weaponType.isAxe || (compItem.properties.weaponType.isMace && compItem.increased.elementalDamage == 0) || compItem.properties.weaponType.isBow)) {
        //170+% Physical Damage
        fscore1("170+ Increased Phys damage")(_.increased.damage.physical >= 170)
        //20+% Attack Speed
        fscore1("Increased Attack Speed")(_.increased.attackSpeed > 20)
        //flat damage
        if (compItem.slots.is1H) {
          //xx to 70+ Fire/Cold or 120+ Lightning Damage to Attacks (needs at least 2)
          //elemental (any 2 of 3 elements)
          fscore1("elemental damage 1h"){ i =>
            (i.damages.fire.max >= 70 && i.damages.cold.max >= 70) ||
            (i.damages.fire.max >= 70 && i.damages.lightning.max >= 120) ||
            (i.damages.cold.max >= 70 && i.damages.lightning.max >= 120)
          }
          // elemental (1 point more for high all ele)
          fscore1("tri-ele damage 1h")(i => (i.damages.fire.max >= 70 && i.damages.cold.max >= 70 && i.damages.lightning.max >= 120))
          //physical
          //xx-33 Physical Damage
          fscore1("additional phys damage 1h")(_.damages.physical.max >= 33)

        }
        //flat damage
        if (compItem.slots.is2H) {
          //xx to 100+ Fire/Cold or 190+ Lightning Damage to Attacks (if two-handed/bow, needs at least 2)
          //elemental (any 2 of 3 elements)
          fscore1("elemental damage 2h"){ i =>
            (i.damages.fire.max >= 100 && i.damages.cold.max >= 100) ||
            (i.damages.fire.max >= 100 && i.damages.lightning.max >= 190) ||
            (i.damages.cold.max >= 100 && i.damages.lightning.max >= 190)
          }
          // elemental (1 point more for high all ele)
          fscore1("tri-ele damage 2h")(i => (i.damages.fire.max >= 70 && i.damages.cold.max >= 70 && i.damages.lightning.max >= 120))
          //physical
          //xx-50 Physical Damage
          fscore1("additional phys damage 2h")(_.damages.physical.max >= 50)
        }

        if (compItem.properties.weaponType.isBow) {
          //30+% Critical Strike Chance (if Bow)
          fscore1("30+% Critical Strike Chance")(_.increased.criticalStrikeChance >= 30)
          //30+% Critical Strike Multiplier (if Bow)
          fscore1("30+% Critical Strike Multi")(_.increased.globalCriticalStrikeMultiplier >= 30)
          //+2 to Total Socketed bow gems
          fscore1("+2 to bow gems")(_.gemLevel.bow >= 2)
        }
      }
      /*
      //Dagger / Wands / Sceptre
      if (i => i.slots.isWeapon && (i.properties.weaponType.isDagger || i.properties.weaponType.isWand || (i.properties.weaponType.isMace && i.increased.elementalDamage > 0) || i.properties.weaponType.isBow)) {
        -- Caster Dagger/Wand/Sceptre
        90%+ Total Elemental Spell Damage
        130%+ Total Spell Critical strike Chance
        xx to 50+ Fire/Cold or 90+ Lightning Damage to Spells
        30+% Critical Strike Multiplier
        -- Attack Dagger/Wand
        170+% Physical Damage
        xx-33+ Physical Damage
        20+% Attack Speed (if Dagger)
        10+% Attack Speed (if Wand)
        30+% Critical Strike Chance
        30+% Critical Strike Multiplier
        xx to 70+ Fire/Cold or 120+ Lightning Damage to Attacks
      }

      //Staff
      if (_.slots.isWeapon, _.properties.weaponType.isStaff) {
        +1 to Socketed gems AND +2 to Socketed (ele) gems
        xx to 70+ Fire/Cold or 150+ Lightning Damage to Spells
        160+% Total Elemental Spell Damage
      }
      */
      /*Jewel:
      % Life
      % Energy Shield
      % Cast Speed
      % Critical Strike Multiplier
      2 or more Attack Speed compatible rolls
      2 or more compatible Damage rolls*/
      /*
      //Belt
      if (_.slots.isBelt) {
        70+ Life (if armour or evasion base, if no life it's 90% likely to be vendor trash)
        35+ Strength
        280+ Armour
        45+ Energy Shield
        70+% Total Resistance
        30+% Weapon Elemental Damage
        % Reduced Flask Charges Used
        % Increased Flask Charges Gained
        % Flask Effect Duration
      }

      //Ring
      if (_.slots.isRing) {
        55+ Life
        50+ Energy Shield (if Moonstone Ring base)
        xx-11+ Physical Damage to Attacks
        30+% Weapon Elemental Damage
        40+% Increased Rarity
        80+% Total Resistance
        50+% Mana Regeneration
        250+ Accuracy Rating
        75+ Total Attributes
      }

      //Amulet
      if (_.slots.isAmulet) {
        55+ Life
        xx-11 Physical Damage to Attacks
        30+% Weapon Elemental Damage
        40+% Increased Rarity
        90+% Total Resistance
        65+% Mana Regeneration
        250+ Accuracy Rating
        70+ Total of any Attribute
        30+% Critical Strike Multiplier
        30+% Critical Strike Chance
        30+% Total Elemental Spell Damage
        15+% Energy Shield
      }

      //Quiver
      if (_.slots.isQuiver) {
        75+ Life
        30+% Weapon Elemental Damage
        30+% Critical Strike Multiplier
        30+% Critical Strike Chance
        70+% Total Resistance
      }
      */
      //5L+ are an auto +100, implying "never vendor these."
      fscore100("5+ Linked Sockets")(_.maxLinks > 4)

      fscore1("4 Linked Sockets or 5+ sockets")(i => i.maxLinks == 4 || i.item.sockets.toOption.exists(_.size >= 5))
      /*
      fscore1("60+ max Life")(_.plusTo.lifeAndMana.life >= 60)
      fscore1("60+ max Mana")(_.plusTo.lifeAndMana.mana >= 40)

      fscore1("60%+ armour")(_.increased.armour >= 60)
      fscore1("60%+ evasion")(_.increased.evasion >= 60)
      fscore1("60%+ energyShield")(_.increased.energyShield >= 60)

      fscore1("200+ energy shield")(_.properties.energyShield >= 200)
      fscore1("1000+ armour + evasion")(i => i.properties.evasionRating + i.properties.armour >= 1000)

      fscore1("200+ armour belt")(_.slots.isBelt, _.plusTo.armour >= 200)

      fscore1("8%+ Attack speed Non-Weapon")(!_.slots.isWeapon, _.increased.attackSpeed >= 8)
      fscore1("Fire Dmg Non-Weapon")(!_.slots.isWeapon, _.damages.fire.max >= 20)
      fscore1("Cold Dmg Non-Weapon")(!_.slots.isWeapon, _.damages.cold.max >= 16)
      fscore1("Lit Dmg Non-Weapon")(!_.slots.isWeapon, _.damages.lightning.max >= 30)
      fscore1("Phys Dmg Non-Weapon")(!_.slots.isWeapon, _.damages.physical.max >= 15)

      fscore1("Adds Speed")(_.increased.movementSpeed >= 20)

      fscore1("+Weapon Elemental Damage")(!_.slots.isWeapon, _.increased.elementalDamageWithWeapons >= 15)
      fscore1("Good Resists") { i =>
        i.plusTo.resistance.all.exists(_ > 35) ||
            i.plusTo.resistance.all.count(_ > 20) >= 2 ||
            i.plusTo.resistance.all.count(_ > 10) >= 3
      }
      fscore1("Projectile Speed")(_.increased.projectileSpeed >= 20)

      fscore1("+2+ for gems")(_.gemLevel.max >= 2)

      fscore1("20%+ Increased Spell Damage")(!_.slots.isWeapon, !_.slots.isSpiritShield, _.increased.spellDamage >= 20)
      fscore1("30%+ Increased Spell Damage (Spirit Shield)")(
        !_.slots.isWeapon, _.slots.isSpiritShield, _.increased.spellDamage >= 30)

      fscore1("Good Attributes") { i =>
        i.plusTo.attribute.all.exists(_ >= 30) ||
            i.plusTo.attribute.all.count(_ >= 25) >= 2 ||
            i.plusTo.attribute.all.count(_ >= 20) >= 3
      }

      fscore1("15%+ to IIQ")(_.increased.quantityOfItemsFound >= 15)
      fscore1("15%+ to IIR")(_.increased.rarityOfItemsFound >= 15)

      fscore1("1H Fire")(_.slots.is1H, _.damages.fire.max > 30)
      fscore1("1H Cold")(_.slots.is1H, _.damages.cold.max > 25)
      fscore1("1H Lit")(_.slots.is1H, _.damages.lightning.max > 50)

      fscore1("2H Fire")(_.slots.is2H, _.damages.fire.max > 45)
      fscore1("2H Cold")(_.slots.is2H, _.damages.cold.max > 35)
      fscore1("2H Lit")(_.slots.is2H, _.damages.lightning.max > 75)

      fscore1("Increased Attack Speed")(_.increased.attackSpeed > 15)
      fscore1("1H Increased Phys Dmg")(_.slots.is1H, _.increased.damage.physical >= 75)
      fscore1("2H Increased Phys Dmg")(_.slots.is2H, _.increased.damage.physical >= 140)

      fscore1("60%+ Increased Spell Crit chance")(_.increased.criticalStrikeChanceForSpells >= 60)
      fscore1("60%+ Increased Crit chance")(_.increased.criticalStrikeChance >= 60)
      fscore1("1H 30%+ Increased Spell Dmg")(_.increased.spellDamage >= 30)
      fscore1("2H 50%+ Increased Spell Dmg")(_.increased.spellDamage >= 50)

      fscore1("Life Leech")(_.leech.physical.life > 0)
      fscore1("Mana Leech")(_.leech.physical.mana > 0)

      fscore("1H DPS")(_.slots.is1H, _.total.dps >= 250)(10)
      fscore("2H DPS")(_.slots.is2H, _.total.dps >= 375)(10)
      */
    }

    allScore(_)

  }


  def apply(i: ComputedItem): Option[HighScore] = {
    all.map(_(i)).flatten.reduceOption(_ + _)
  }
  val all = _all.toList


}

case class HighScore(reason: List[String], score: Double) {
  def +(that: HighScore) = HighScore(this.reason ::: that.reason, this.score + that.score)
}

trait HighScorer {
  def apply(i: ComputedItem): Option[HighScore]
}
