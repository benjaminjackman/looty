package looty

import scala.scalajs.js
import looty.views.{RefreshView, LootGrid}
import scala.collection.mutable.ArrayBuffer
import cgta.ojs
import org.scalajs.jquery.JQueryStatic
import looty.mods.ModsCsvParser
import scala.concurrent.Future
import cgta.ojs.lang.JsFuture


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:22 PM
//////////////////////////////////////////////////////////////


object JsPoint {
  implicit class JsPointExtensions(val p: JsPoint) extends AnyVal {
    def magnitude = js.Math.sqrt(p.x * p.x + p.y * p.y)
  }
}
class JsPoint(val x: js.Number, val y: js.Number) extends js.Object
case class Point(x: Int, y: Int)

object LootyMain {

  def loadLooty() {
    val grid = new LootGrid
    grid.start()
  }

  def loadHome() {
    val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
    jq("#content").text("Home Page!")
  }

  def loadRefresh() {
    new RefreshView().start()
  }

  def addRoutes() {
    val crossroads = global.crossroads
    val hasher = global.hasher
    crossroads.addRoute("home", () => loadHome())
    crossroads.addRoute("grid", () => loadLooty())
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
    JsFuture.sequence(List(ModsCsvParser.init()))
  }


  def main(args: Array[String]) {
    initComponents().foreach { _ =>
      addRoutes()
    }
    //Former Experiments
    //tryJsObj()
    //loadLooty()
  }




  def tryJsObj() {
    val o = ojs.obj
    console.log("Begin Main!")
    val foo = ojs.obj(
      x = 5,
      y = 5,
      zs = ojs.arr(1, 2, 3),
      foo = ojs.obj(
        b = 6,
        c = 7)
    )
    console.log(o())
    console.log(JSON.stringify(foo))
    //Prints {"x":5,"y":5,"zs":[1,2,3],"foo":{"b":6,"c":7}}

    //Note that jsObj can also be given a type parameter
    //that type will be used as the return type,
    //However it's just a NOP and doesn't do real type
    //safety, I think it might be possible to do with
    //a macro, howevr i think a better approach would
    //be to do it as part of the actual ScalaJs backend.
    //using the new keyword.

    val xs = ArrayBuffer[Int](1, 2, 3, 4, 5, 6)
    val ys: js.Array[js.Number] = xs.map(x => x: js.Number).toArray[js.Number]: js.Array[js.Number]
    console.log(ys)
    console.log(Point(1, 3))
    console.log(ojs.obj[JsPoint](x = 1, y = 2).magnitude)
  }


}
