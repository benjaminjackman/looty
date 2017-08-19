package looty
package model.parsers

import scala.scalajs.js
import looty.poeapi.PoeTypes.ItemProperty
import looty.model.{Elements, WeaponTypes, MinMaxDamage, ComputedItem}


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 8:06 PM
//////////////////////////////////////////////////////////////


object PropertyParsers {
  def parse(item: ComputedItem, property: ItemProperty): Boolean = {
    var parsed = false
    all.toList.foreach { parser =>
      if (parser.parse(item, property)) {
        parsed = true
      }
    }
    parsed
  }

  private val _all = new js.Array[PropertyParser]()
  def add(affix: PropertyParser) {
    _all.push(affix)
  }

  trait PropertyParser {
    def parse(ci: ComputedItem, prop: ItemProperty): Boolean
  }

  def pred(p: ItemProperty => Boolean)(f: (ComputedItem, ItemProperty) => Unit) {
    add {
      new PropertyParser {
        def parse(ci: ComputedItem, prop: ItemProperty): Boolean = {
          if (p(prop)) {
            f(ci, prop)
            true
          } else {
            false
          }
        }
      }
    }
  }

  def named(name: String)(f: (ComputedItem, ItemProperty) => Unit) {
    pred(_.name.toString =?= name)(f)
  }

  def parseDamage(dstr: String): MinMaxDamage = {
    val ds = dstr.split("-")
    MinMaxDamage(ds(0).toDouble, ds(1).toDouble)
  }

  def prunePercent(dstr: String): Double = {
    //Chop of the % symbol
    dstr.replaceAll("%","").toDouble
  }

  WeaponTypes.all.foreach { slot =>
    named(slot.name)((i, p) => i.properties.weaponType = slot)
  }
  named("Armour")((i, p) => i.properties.armour = p.firstValue.toDouble)
  named("Energy Shield")((i, p) => i.properties.energyShield = p.firstValue.toDouble)
  named("Evasion Rating")((i, p) => i.properties.evasionRating = p.firstValue.toDouble)
  named("Physical Damage")((i, p) => i.properties.damages.physical set parseDamage(p.firstValue))
  named("Elemental Damage") { (i, p) =>
    p.values.foreach { xs =>
      val ele = xs(1).toString.toInt match {
        case 4 => Elements.fire
        case 5 => Elements.cold
        case 6 => Elements.lightning
      }
      i.properties.damages(ele) set parseDamage(xs(0).toString)
    }
  }

  named("Quality")((i, p) => i.properties.quality = prunePercent(p.firstValue))
  named("Critical Strike Chance")((i, p) => i.properties.criticalStrikeChance = prunePercent(p.firstValue))
  named("Attacks per Second")((i, p) => i.properties.attacksPerSecond = p.firstValue.toDouble)
  named("Chance to Block")((i, p) => i.properties.chanceToBlock = prunePercent(p.firstValue))
  named("Weapon Range")((i, p) => i.properties.weaponRange = p.firstValue.toDouble)


  named("Stack Size") { (i, p) =>
    p.firstValue.split("/").headOption.foreach(x => i.properties.stackSize = x.toDouble)
  }

  val all = _all.toList
}

