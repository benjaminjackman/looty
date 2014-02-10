package looty
package model.parsers

import looty.poeapi.PoeTypes.AnyItem
import scala.scalajs.js
import looty.poeapi.PoeTypes.AnyItem.FrameTypes
import looty.model.{ContainerId, ComputedItem}


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

  def parseItem(item: AnyItem, containerId : ContainerId, locationName : String): ComputedItem = {
    val ci = new ComputedItem(item, containerId, locationName)
    if (ci.isEquippable) parseMods(ci, ci.item.explicitMods.toOption)
    if (ci.isEquippable) parseMods(ci, ci.item.implicitMods.toOption)
    if (ci.isEquippable || ci.item.isCurrency || ci.item.isGem) parseProperties(ci)
    if (ci.isEquippable || ci.item.isGem) parseRequirements(ci)
    if (ci.isEquippable) parseTypeLine(ci)
    if (ci.isEquippable) parseSockets(ci)
    ci
  }


  def parseMods(ci: ComputedItem, mods: Option[js.Array[js.String]]) {
    for {
      emods <- mods
      mod: js.String <- emods
    } {
      if (!AffixesParser.parse(ci, mod)
          && (ci.item.getFrameType =!= FrameTypes.unique || !ci.isEquippable)) {
        console.warn("Unable to parse affix", ci.item.getFrameType.name, ci.item.name, "->", mod)
      }
    }
  }


  def parseProperties(ci: ComputedItem) {
    for {
      props <- ci.item.properties.toOption.toList
      prop <- props
    } {
      if (!PropertyParsers.parse(ci, prop)) {
        if (!ci.item.isFlask && !ci.item.isGem) {
          console.warn("Unable to parse property", ci.item.getFrameType.name, ci.item.name, "->", prop, ci.item)
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
    if (ci.isEquippable && !ci.slots.isWeapon && !ci.slots.isFlask && !ArmourParser.parse(ci, ci.item.typeLine)) {
      console.warn("Unable to parse typeline", ci.item.getFrameType.name, ci.item.typeLine, ci.item.name, ci.item)
    }
  }

  def parseSockets(ci: ComputedItem) {
    if (ci.isEquippable) {
      SocketsParser.parse(ci)
    }
  }
}