package looty

import scala.scalajs.js

import scala.concurrent.Future
import cgta.ojs.lang.JsFuture
import cgta.ojs.io.StoreMaster
import org.scalajs.jquery.JQueryStatic
import looty.poeapi.PoeTypes.Leagues
import looty.poeapi.{PoeCacherDemo, PoeCacher, PoeCacherChrome}
import looty.views.{WealthView, XpView, LootView, HomeView, View}


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:22 PM
//////////////////////////////////////////////////////////////


class LootyApp(demoMode: Boolean) {
  implicit val pc: PoeCacher = {
    if (demoMode) new PoeCacherDemo() else new PoeCacherChrome()
  }


  var curView: View = null

  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]


  def setView(v: View) {
    curView.nullSafe.foreach {_.stop()}
    curView = v
    val el = jq("#content")
    el.empty()
    curView.start(el)
  }


  def addRoutes(implicit pc: PoeCacher) {
    console.debug("Adding routes")
    val crossroads = global.crossroads
    val hasher = global.hasher
    val demoBanner = """!! THIS IS JUST A DEMO !! Please visit <a href="http://blog.jackman.biz/looty">here</a> to download the chrome extension, if you like what you see."""
    crossroads.addRoute("home", () => setView(new HomeView(if(demoMode) demoBanner else "")))
    for (league <- Leagues.all) {
      if (demoMode) {
        //Only have data for ambush
        crossroads.addRoute(s"$league-grid", () => setView(new LootView(Leagues.Ambush)))
      } else {
        crossroads.addRoute(s"$league-grid", () => setView(new LootView(league)))
      }
    }
    crossroads.addRoute("xp", () => setView(new XpView))
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
   //ModsCsvParser.init()
    if (demoMode) {
      JsFuture.successful()
    } else {
      JsFuture.sequence(List(StoreMaster.init()))
    }
  }

  def start() {
    console.log(s"Starting Looty in ${if (demoMode) "Demo" else "Extension"}")
    initComponents().foreach { _ =>
      addRoutes
    }
  }
}

object LootyMain {
  def main(args: Array[String]) {
    new LootyApp(demoMode = global.chrome.isUndefined || global.chrome.storage.isUndefined).start()
  }
}

