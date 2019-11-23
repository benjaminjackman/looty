package looty.model

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 8:23 PM
//////////////////////////////////////////////////////////////


object WeaponTypes {
  private val _all = new js.Array[WeaponType]()
  def add(slot: WeaponType) {
    _all.push(slot)
  }

  abstract class WeaponType(val name: String) {
    def isWeapon: Boolean = false
    def is1H: Boolean = false
    def is2H: Boolean = false
    def isSword: Boolean = false
    def isAxe: Boolean = false
    def isMace: Boolean = false
    def isSceptre: Boolean = false
    def isStaff: Boolean = false
    def isWarstaff: Boolean = false
    def isWand: Boolean = false
    def isDagger: Boolean = false
    def isRuneDagger: Boolean = false
    def isClaw: Boolean = false
    def isBow: Boolean = false
    override def toString = name
    def toShortString: String = {
      val prefix = if (is1H) "1H" else "2H"

      if (isSword) prefix + "Sword"
      else if (isAxe) prefix + "Axe"
      else if (isMace) prefix + "Mace"
      else if (isSceptre) prefix + "Sceptre"
      else if (isStaff) prefix + "Staff"
      else if (isWarstaff) prefix + "Staff"
      else if (isWand) prefix + "Wand"
      else if (isDagger) prefix + "Dagger"
      else if (isRuneDagger) prefix + "Dagger"
      else if (isClaw) prefix + "Claw"
      else if (isBow) "Bow"
      else "UnknownWeaponType"
    }
  }

  object NoWeaponType extends WeaponType("WILL_NEVER_MATCH")
  add(NoWeaponType)

  object OneHandedSword extends WeaponType("One Handed Sword") {
    override def isWeapon = true
    override def is1H = true
    override def isSword = true
  }
  add(OneHandedSword)
  object TwoHandedSword extends WeaponType("Two Handed Sword") {
    override def isWeapon = true
    override def is2H = true
    override def isSword = true
  }
  add(TwoHandedSword)
  object OneHandedAxe extends WeaponType("One Handed Axe") {
    override def isWeapon = true
    override def is1H = true
    override def isAxe = true
  }
  add(OneHandedAxe)
  object TwoHandedAxe extends WeaponType("Two Handed Axe") {
    override def isWeapon = true
    override def is2H = true
    override def isAxe = true
  }
  add(TwoHandedAxe)
  object OneHandedMace extends WeaponType("One Handed Mace") {
    override def isWeapon = true
    override def is1H = true
    override def isMace = true
  }
  add(OneHandedMace)
  object Sceptre extends WeaponType("Sceptre") {
    override def isWeapon = true
    override def is1H = true
    override def isSceptre = true
  }
  add(Sceptre)
  object TwoHandedMace extends WeaponType("Two Handed Mace") {
    override def isWeapon = true
    override def is2H = true
    override def isMace = true
  }
  add(TwoHandedMace)
  object Staff extends WeaponType("Staff") {
    override def isWeapon = true
    override def is2H = true
    override def isStaff = true
  }
  add(Staff)
  object Warstaff extends WeaponType("Warstaff") {
    override def isWeapon = true
    override def is2H = true
    override def isWarstaff = true
  }
  add(Warstaff)
  object Claw extends WeaponType("Claw") {
    override def isWeapon = true
    override def is1H = true
    override def isClaw = true
  }
  add(Claw)
  object Wand extends WeaponType("Wand") {
    override def isWeapon = true
    override def is1H = true
    override def isWand = true
  }
  add(Wand)
  object Dagger extends WeaponType("Dagger") {
    override def isWeapon = true
    override def is1H = true
    override def isDagger = true
  }
  add(Dagger)
  object RuneDagger extends WeaponType("Rune Dagger") {
    override def isWeapon = true
    override def is1H = true
    override def isRuneDagger = true
  }
  add(RuneDagger)
  object Bow extends WeaponType("Bow") {
    override def isWeapon = true
    override def is2H = true
    override def isBow = true
  }
  add(Bow)


  val all = _all.toList
}