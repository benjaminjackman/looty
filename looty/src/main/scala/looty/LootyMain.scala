package looty

import scala.scalajs.js
import looty.views.{XpView, RefreshView, LootView}
import org.scalajs.jquery.JQueryStatic
import looty.mods.ModsCsvParser
import scala.concurrent.Future
import cgta.ojs.lang.JsFuture
import cgta.ojs.io.StoreMaster


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:22 PM
//////////////////////////////////////////////////////////////



object LootyMain {

  def loadGrid() {
    val grid = new LootView
    grid.start()
  }

  def loadHome() {
    val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
    jq("#content").text("Home Page!")
  }

  def loadRefresh() {
    new RefreshView().start()
  }

  def loadXp() {
    new XpView().start()
  }

  def addRoutes() {
    val crossroads = global.crossroads
    val hasher = global.hasher
    crossroads.addRoute("home", () => loadHome())
    crossroads.addRoute("grid", () => loadGrid())
    crossroads.addRoute("xp", () => loadXp())
    crossroads.addRoute("refresh", () => loadRefresh())
    crossroads.routed.add(global.console.log, console)
    if(hasher.getURL().toString.endsWith("home")) {
      hasher.setHash("home")
    }
    def parseHash(newHash : js.String, oldHash: js.String) {
      crossroads.parse(newHash)
    }
    hasher.initialized.add(parseHash _)
    hasher.changed.add(parseHash _)
    hasher.init()
  }

  def initComponents() : Future[_] = {
    JsFuture.sequence(List(ModsCsvParser.init(), StoreMaster.init()))
  }


  def main(args: Array[String]) {
    initComponents().foreach { _ =>
      addRoutes()
    }
  }






}
