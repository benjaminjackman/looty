package looty

import scala.scalajs.js
import looty.views._
import looty.mods.ModsCsvParser
import scala.concurrent.Future
import cgta.ojs.lang.JsFuture
import cgta.ojs.io.StoreMaster
import org.scalajs.jquery.JQueryStatic
import looty.poeapi.PoeTypes.Leagues


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
    console.debug("Adding routes")
    val crossroads = global.crossroads
    val hasher = global.hasher
    crossroads.addRoute("home", () => setView(new HomeView))
    for (league <- Leagues.all) {
      crossroads.addRoute(s"$league-grid", () => setView(new LootView(league)))
    }
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
    //ModsCsvParser.init()
    JsFuture.sequence(List(StoreMaster.init()))
  }


  def main(args: Array[String]) {

//    Blamo.kaboom()

        console.log("Starting looty!")
        initComponents().foreach { _ =>
          addRoutes()
        }
  }


}

//object Blamo {
//  def set[A](x: A) {}
//  def get[A](): Option[A] = Some(1).asInstanceOf[Option[A]]
//  def kaboom() {
//    get() match {
//      case Some(x) => set(x)
//        //Emits:
//        //var x2 = ScalaJS.as.scala_Some(x1);
//        //var x = ScalaJS.as.scala_Nothing(x2.x__O());
//        //this.set__O__V(x);
//        //The following exception then is thrown:
//        //Uncaught TypeError: Object #<Object> has no method 'scala_Nothing'
//      case _ =>
//    }
//  }
//}