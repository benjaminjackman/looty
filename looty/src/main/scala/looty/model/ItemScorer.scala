package looty.model

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 6:22 PM
//////////////////////////////////////////////////////////////


object ItemScorer {
  private var _all = new js.Array[ItemScorer]()

  locally {
    def add(s: ItemScorer) {
      _all.push(s)
    }

    def scorer(reason: String)(f: ComputedItem => Option[ItemScore]) = {
      add {
        new ItemScorer {
          def apply(i: ComputedItem) = f(i)
        }
      }
    }

    def fscore(reason: String)(fs: (ComputedItem => Boolean)*)(score: Int) {
      scorer(reason) { i =>
        if (fs.forall(f => f(i))) Some(ItemScore(List(reason), score)) else None
      }
    }
    def fscore1(reason: String)(fs: (ComputedItem => Boolean)*) { fscore(reason)(fs: _*)(1) }
    def fscore100(reason: String)(fs: (ComputedItem => Boolean)*) { fscore(reason)(fs: _*)(100) }


    //Based on http://www.reddit.com/r/pathofexile/comments/1q5rdi/its_worth_keeping_if/

    //5L+ are an auto +100, implying "never vendor these."
    fscore100("5+ Linked Sockets")(_.maxLinks > 4)

    fscore1("4 Linked Sockets or 5+ sockets")(i => i.maxLinks == 4 || i.item.sockets.toOption.exists(_.size >= 5))

    fscore1("60+ max Life")(_.plusTo.lifeAndMana.life >= 60)
    fscore1("60+ max Mana")(_.plusTo.lifeAndMana.mana >= 40)

    fscore1("60%+ armour")(_.increased.globalArmour >= 60)
    fscore1("60%+ evasion")(_.increased.localEvasionRating >= 60)
    fscore1("60%+ energyShield")(_.increased.localEnergyShield >= 60)

    fscore1("200+ energy shield")(_.properties.energyShield >= 200)
    fscore1("1000+ armour + evasion")(i => i.properties.evasion + i.properties.armour >= 1000)

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
  }


  def apply(i: ComputedItem): Option[ItemScore] = {
    all.map(_(i)).flatten.reduceOption(_ + _)
  }
  val all = _all.toList


}

case class ItemScore(reason: List[String], score: Double) {
  def +(that: ItemScore) = ItemScore(this.reason ::: that.reason, this.score + that.score)
}

trait ItemScorer {
  def apply(i: ComputedItem): Option[ItemScore]
}