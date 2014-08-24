package looty
package model.parsers

import looty.poeapi.PoeTypes.ItemRequirement
import scala.scalajs.js
import looty.model.ComputedItem


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/19/13 12:26 AM
//////////////////////////////////////////////////////////////


object RequirementsParser {
  def parse(ci: ComputedItem, requirements: js.Array[ItemRequirement]): Boolean = {
    requirements.toList.foreach { r =>
      def getReq = {
        //r.values(0)(0).toString.toDouble
        r.values(0)(0).toString.split(" ")(0).toDouble
      }
      r.name.toString match {
        case "Level" => ci.requirements.level = getReq
        case "Str" | "Strength" => ci.requirements.attribute.strength = getReq
        case "Int" | "Intelligence" => ci.requirements.attribute.intelligence = getReq
        case "Dex" | "Dexterity" => ci.requirements.attribute.dexterity = getReq
        case x => console.log("No Requirements match" + x, ci)
      }
    }
    false
  }
}