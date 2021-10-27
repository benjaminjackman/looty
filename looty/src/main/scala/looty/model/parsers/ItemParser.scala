package looty
package model.parsers

import looty.poeapi.PoeTypes.AnyItem
import scala.scalajs.js
import looty.poeapi.PoeTypes.AnyItem.FrameTypes
import looty.model.{LootContainerId, ComputedItem}
import looty.util.Settings.SHOW_PARSING_PROBLEM


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/13/13 1:52 AM
//////////////////////////////////////////////////////////////

object ItemParser {
  var failCnt  = 0
  var parseCnt = 0

  def parseItem(item: AnyItem, containerId : LootContainerId, locationName : String): ComputedItem = {
    val ci = new ComputedItem(item, containerId, locationName)
    try {
      if (ci.isEquippable || ci.item.isJewel) parseMods(ci, ci.item.scourgeMods.toOption)
      if (ci.isEquippable || ci.item.isJewel) parseMods(ci, ci.item.fracturedMods.toOption)
      if (ci.isEquippable || ci.item.isJewel) parseMods(ci, ci.item.explicitMods.toOption)
      if (ci.isEquippable || ci.item.isJewel) parseMods(ci, ci.item.implicitMods.toOption)
      if (ci.isEquippable || ci.item.isJewel) parseMods(ci, ci.item.craftedMods.toOption)
      if (ci.isEquippable || ci.item.isJewel || ci.item.isCurrency || ci.item.isGem) parseProperties(ci)
      if (ci.isEquippable || ci.item.isJewel || ci.item.isGem) parseRequirements(ci)
      if (ci.isEquippable || ci.item.isJewel) parseTypeLine(ci)
      if (ci.isEquippable || ci.item.isJewel) parseEnchants(ci)
      if (ci.isEquippable) parseSockets(ci)

    } catch {
      case e : Throwable =>
        if (SHOW_PARSING_PROBLEM) console.error("Unable To Parse Properties for item", item)
        e.printStackTrace()
    }
    ci
  }


  def parseMods(ci: ComputedItem, mods: Option[js.Array[String]]) {
    for {
      emods <- mods
      mod <- emods
    } {
      if (!AffixesParser.parse(ci, mod)
        && ((ci.item.getFrameType !=?= FrameTypes.unique) || !ci.isEquippable)) {
        //adding column for not recognized affixes
        ci.notParsedYet.name += mod ++ " |"
        //Silence these warnings with localStorage.setItem("SQUELCH_WARNINGS", "true") inside the console
        if (window.localStorage.getItem("SQUELCH_WARNINGS") != "true") {
          if (SHOW_PARSING_PROBLEM) console.warn("Unable to parse affix", ci.item.getFrameType.name, ci.item.getName, "->", mod)
        }
      }
    }
  }

  def parseEnchants(ci: ComputedItem) {
    // For now enchants are added in form as they are, without checking for errors in parsing
    // because they are vastly different from any affix we parse
    // Therefore i'm not adding any console warnings
    for {
      enchants <- ci.item.enchantMods.toOption
      enchant <- enchants
    } AffixesParser.parse(ci, enchant)
  }

  def parseProperties(ci: ComputedItem) {
    for {
      props <- ci.item.properties.toOption.toList
      prop <- props
    } {
      if (!PropertyParsers.parse(ci, prop)) {
        if (!ci.item.isFlask && !ci.item.isGem) {
          if (SHOW_PARSING_PROBLEM) console.warn("Unable to parse property", ci.item.getFrameType.name, ci.item.getName, "->", prop, ci.item)
        }
      }
    }
  }

  def parseRequirements(ci: ComputedItem) {
    for (requirements <- ci.item.requirements.toOption) {
      RequirementsParser.parse(ci, requirements)
    }
  }

  def parseTypeLine(ci: ComputedItem) {
    if (ci.isEquippable && !ci.slots.isWeapon && !ci.slots.isFlask  && !ArmourParser.parse(ci, ci.item.typeLine)) {
      if (SHOW_PARSING_PROBLEM) console.warn("Unable to parse typeline", ci.item.getFrameType.name, ci.item.typeLine, ci.item.getName, ci.item)
    }
  }

  def parseSockets(ci: ComputedItem) {
    if (ci.isEquippable) {
      SocketsParser.parse(ci)
    }
  }
}