package looty


import looty.views.ScriptView
import looty.views.SettingsView
import looty.views.UnderlayView

import scala.scalajs.js
import scala.concurrent.Future
import org.scalajs.jquery.JQueryStatic
import looty.poeapi.PoeTypes.Leagues
import looty.poeapi.{PoeCacher, PoeCacherChrome, PoeCacherDemo, PoeCacherExileTools}
import looty.views.GlobalView
import looty.views.HomeView
import looty.views.LootView
import looty.views.MapsView
import looty.views.PoeBuilderView
import looty.views.View
import looty.views.WealthView
import looty.views.XpView

import scala.util.Try
import scala.scalajs.js.annotation.JSExport


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:22 PM
//////////////////////////////////////////////////////////////


class LootyApp(extensionMode: Boolean) {

  implicit val pc: PoeCacher = {
    if (extensionMode) {
      // fetch data from GGG API
      new PoeCacherChrome()
    } else {
      // load data from /data/sample-items.json instead of GGG servers
      new PoeCacherDemo()
    }
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
    hasher.raw = true
    val banner = ""
    val version = if (extensionMode) {
      Try(global.chrome.app.getDetails().version.asInstanceOf[String]).getOrElse("Unknown")
    } else {
      "Unknown Version"
    }
    crossroads.addRoute("home", () => setView(new HomeView(banner = banner, version = version)))
    console.debug("Adding league routes")
    for (league <- Leagues.all) {
      val uri = league.uriName
      crossroads.addRoute(s"$uri-grid", () => setView(new LootView(league)))
    }
    crossroads.addRoute("xp", () => setView(new XpView))
    crossroads.addRoute("global", () => setView(new GlobalView))
    crossroads.addRoute("maps", () => setView(new MapsView))
    crossroads.addRoute("wealth", () => setView(new WealthView))
    crossroads.addRoute("poebuilder", () => setView(new PoeBuilderView))
    crossroads.addRoute("settings", () => setView(new SettingsView))
    crossroads.addRoute("underlay", () => setView(new UnderlayView))
    crossroads.addRoute("script", () => setView(new ScriptView))
    crossroads.routed.add(global.console.log, console)
    if (hasher.getURL().toString.endsWith("home")) {
      hasher.setHash("home")
    }
    def parseHash(newHash: String, oldHash: js.UndefOr[String]) {
      crossroads.parse(newHash)
    }
    hasher.initialized.add(parseHash _)
    hasher.changed.add(parseHash _)
    hasher.init()
  }


  def initComponents(): Future[_] = {
    //ModsCsvParser.init()
    //    if (demoMode) {
    //      Future.successful(())
    //    } else {
    //
    //    }

    pc.init
  }

  def start() {
    console.log(s"Starting Looty in ${if (extensionMode) "ExtensionMode" else "WebMode"}")
    initComponents().foreach { _ =>
      addRoutes
      console.log("Adding league buttons")
      // only Standard league is always existing, if player has no characters in hardcore its irrelevant
      //Leagues.all.filterNot(l => l.isStandard || l.isHardcore).foreach { league =>
      Leagues.all.filterNot(l => l.isStandard ).foreach { league =>
        val uri = league.uriName
        val name = league.rpcName
        jq(".views-league").append(
          //s"""<menu-item><a class="view-btn grid" href="#/$uri-grid">$name</a></menu-item>""")
          s"""<a class="view-btn grid" href="#/$uri-grid">$name</a>""")
      }
    }
  }
}

@JSExport("LootyMain")
object LootyMain {
  @JSExport
  def main() {
    val nonExtensionMode = global.chrome.isUndefined || global.chrome.storage.isUndefined
    new LootyApp(extensionMode = !nonExtensionMode).start()
    //    Alerter.info("Looking up accountName from GGGs website")
    //    PoeRpcs.getAccountName().foreach {
    //      case Some(accountName) =>
    //        console.log(accountName)
    //
    //        Alerter.info(s"Looty Loaded! If you need help or want to help promote Looty please stop and leave a comment ${Alerter.featuresLink("here")}. Type 28 in the rLvl column to filter to pvp eligible items!")
    //      case _ =>
    //        console.log("NO MATCH FOUND")
    //        new LootyApp(None, demoMode = global.chrome.isUndefined || global.chrome.storage.isUndefined).start()
    //        Alerter.error("Unable to locate account name, You are probably not logged into path of exile account, please log in. If you are logged in specify your account name manually <a href=\"#/settings\">here</a>")
    //      //Allow user to manually enter account name
    //
    //    }
  }

}

