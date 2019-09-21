package looty
package model.parsers

import scala.scalajs.js
import looty.model.ComputedItem


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 11:05 PM
//////////////////////////////////////////////////////////////


object ArmourParser {
  val helmets      = List("Helmet", "Hat", "Sallet", "Crown", "Hood", "Helm", "Circlet", "Bascinet",
    "Tricorne", "Mask", "Wolf Pelt", "Ursine Pelt", "Burgonet", "Cap", "Cage", "Lion Pelt", "Coif",
    "Pain Veil")
  val gloves       = List("Gauntlets", "Gloves", "Mitts", "Bracers")
  val boots        = List("Boots", "Greaves", "Slippers", "Shoes")
  val chest        = List("Robe", "Jacket", "Leather", "Plate", "Brigandine", "Chainmail", "Garb", "Vestment",
    "Tunic", "Lamellar", "Ringmail", "Coat", "Silks", "Doublet", "Armour", "Hauberk", "Regalia", "Raiment",
    "Wyrmscale", "Full Dragonscale", "Silken Wrap", "Vest", "Jerkin", "Chestplate", "Dire Cloak", "Dire Jack")
  val spiritShield = List("Spirit Shield")
  val shield       = List("Buckler", "Shield", "Spiked Bundle")
  val quiver       = List("Quiver")

  def parse(ci: ComputedItem, typeLine: String): Boolean = {
    if (ci.item.h =?= 1 && ci.item.w =?= 1) {
      if (typeLine.contains("Amulet") || typeLine.contains("Talisman")) {
        ci.slots.isAmulet = true
        true
      } else if (typeLine.contains("Ring")) {
        ci.slots.isRing = true
        true
      } else {
        console.warn("1x1 Non Jewelery", ci.item.getTypeLine, ci.asJsAny)
        false
      }
    } else if (ci.item.h =?= 1 && ci.item.w =?= 2) {
      ci.slots.isBelt = true
      true
    } else if (ci.item.h =?= 2 && ci.item.w =?= 2) {
      //Helmet, Gloves, Boots
      if (helmets.exists(typeLine.contains(_))) {
        ci.slots.isHelmet = true
        true
      } else if (gloves.exists(typeLine.contains(_))) {
        ci.slots.isGloves = true
        true
      } else if (boots.exists(typeLine.contains(_))) {
        ci.slots.isBoots = true
        true
      } else if (spiritShield.exists(typeLine.contains(_))) {
        ci.slots.isShield = true
        ci.slots.isSpiritShield = true
        true
      } else if (shield.exists(typeLine.contains(_))) {
        ci.slots.isShield = true
        true
      } else {
        console.warn("2x2 Unknown", ci.cleanTypeLine, ci.asJsAny)
        false
      }
    } else if (ci.item.h =?= 3 && ci.item.w =?= 2) {
      if (chest.exists(typeLine.contains(_))) {
        ci.slots.isChest = true
        true
      } else if (shield.exists(typeLine.contains(_))) {
        ci.slots.isShield = true
        true
      } else if (quiver.exists(typeLine.contains(_))) {
        ci.slots.isQuiver = true
        true
      } else {
        console.warn("3x2 Unknown", ci.cleanTypeLine, ci.asJsAny)
        false
      }
    } else if (ci.item.h =?= 4 && ci.item.w =?= 2) {
      if (shield.exists(typeLine.contains(_))) {
        ci.slots.isShield = true
        true
      } else {
        console.warn("4x2 Unknown", ci.cleanTypeLine, ci.asJsAny)
        false
      }
    } else {
      console.warn("Unknown", ci.cleanTypeLine, ci.asJsAny)
      false
    }


  }

}
