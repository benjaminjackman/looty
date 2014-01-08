package looty

import scala.scalajs.js
import looty.views._
import looty.mods.ModsCsvParser
import scala.concurrent.Future
import cgta.ojs.lang.JsFuture
import cgta.ojs.io.StoreMaster
import org.scalajs.jquery.JQueryStatic


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:22 PM
//////////////////////////////////////////////////////////////


object LootyMain {
  var curView: View = null

  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]



  def setView(v: View) {
    curView.nullSafe.foreach {_.stop()}
    curView = v
    val el = jq("#content")
    el.empty()
    curView.start(el)
  }


  def addRoutes() {
    val crossroads = global.crossroads
    val hasher = global.hasher
    crossroads.addRoute("home", () => setView(new HomeView))
    crossroads.addRoute("grid", () => setView(new LootView))
    crossroads.addRoute("xp", () => setView(new XpView))
    crossroads.addRoute("refresh", () => setView(new RefreshView))
    crossroads.addRoute("wealth", () => setView(new WealthView))
    crossroads.routed.add(global.console.log, console)
    if (hasher.getURL().toString.endsWith("home")) {
      hasher.setHash("home")
    }
    def parseHash(newHash: js.String, oldHash: js.String) {
      crossroads.parse(newHash)
    }
    hasher.initialized.add(parseHash _)
    hasher.changed.add(parseHash _)
    hasher.init()
  }

  def initComponents(): Future[_] = {
    JsFuture.sequence(List(ModsCsvParser.init(), StoreMaster.init()))
  }


  def main(args: Array[String]) {
    initComponents().foreach { _ =>
      addRoutes()
    }
  }


}
