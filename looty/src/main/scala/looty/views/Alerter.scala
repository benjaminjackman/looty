package looty
package views

import org.scalajs.jquery.JQueryStatic


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 1:58 PM
//////////////////////////////////////////////////////////////


object Alerter {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  def alert(msg: String) {
    val el = jq("#alert")
    el.empty()
    el.text(msg)
  }
}