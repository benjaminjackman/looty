package looty
package views

import cgta.oscala.util.debugging.PRINT
import looty.facades.jailed
import looty.poeapi.PoeCacher
import looty.poeapi.PoeTypes.Leagues
import org.scalajs.jquery.JQuery

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/19/15 3:31 PM
//////////////////////////////////////////////////////////////


class ScriptView(implicit val pc: PoeCacher) extends View {
  override def start(el: JQuery): Unit = {

    PRINT | "Get all items for the league"
    pc.getAllItems(Leagues.Standard.rpcName).foreach { items =>
      PRINT | "All items gotten"
      items.foreach { item =>

      }
    }
  }

  override def stop(): Unit = {

  }
}