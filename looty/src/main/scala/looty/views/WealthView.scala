package looty
package views

import org.scalajs.jquery.JQuery
import looty.model.PoeCacher
import looty.poeapi.PoeTypes.Leagues


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 1/7/14 6:31 PM
//////////////////////////////////////////////////////////////


class WealthView extends View {

  val valueMap = Map[String, Double](
    "Chromatic Orb" -> 1 / 17.0,
    "Orb of Alteration" -> 1 / 18.0,
    "Jeweller's Orb" -> 1 / 8.0,
    "Orb of Chance" -> 1 / 8.0,
    "Cartographer's Chisel" -> 5.0 / 16.0,
    "Orb of Fusing" -> 1 / 2.0,
    "Orb of Alchemy" -> 1 / 2.0,
    "Orb of Scouring" -> 1 / 2.0,
    "Blessed Orb" -> 3.0 / 4.0,
    "Chaos Orb" -> 1 / 1.0,
    "Orb of Regret" -> 1 / 1.0,
    "Regal Orb" -> 2.0 / 1.0,
    "Gemcutter's Prism" -> 1 / 3.0,
    "Divine Orb" -> 1 / 17.0,
    "Exalted Orb" -> 1 / 23.0,
    "Eternal Orb" -> 1 / 46.0
  )

  def start(el: JQuery): Unit = {
    val pc = new PoeCacher()
    var tot = 0.0
    for {
      items <- pc.getAllItems(Leagues.Standard)
      item <- items
      if item.item.isCurrency
    } {
      console.log(item.properties.stackSize.toJs, item)

      valueMap.get(item.displayName) match {
        case Some(value) => tot += value * item.properties.stackSize
        case None => console.error("No Value for Currency Item", item.displayName, item)
      }

    }
    val str = s"TOTAL CHAOS WEALTH: $tot Exalts: " + (valueMap("Exalted Orb") * tot)
    el.text(str)
    console.log(str)
  }

  def stop(): Unit = {

  }


}