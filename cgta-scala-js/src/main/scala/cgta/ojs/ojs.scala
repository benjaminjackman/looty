package cgta

import cgta.ojs.lang.{JsObjectBuilder, OJsDsl}
import scala.scalajs.js

//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/9/13 11:12 PM
//////////////////////////////////////////////////////////////


package object ojs extends OJsDsl {
  val obj = new JsObjectBuilder
  def arr(xs: js.Any*) = js.Array(xs: _*)
  val MMap = scala.collection.mutable.Map
  type MMap[K, V] = scala.collection.mutable.Map[K, V]

}
