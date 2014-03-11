package looty
package views

import org.scalajs.jquery.JQueryStatic


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 1:58 PM
//////////////////////////////////////////////////////////////


object Alerter {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  def info(msg: String) { display("info", msg) }
  def warn(msg: String) { display("warn", msg) }
  def error(msg: String) { display("error", msg) }
  private def display(cls: String, msg: String) {
    val el = jq("#alerter")
    el.empty()
    el.html(s"""<div class="$cls">$msg</div>""")
  }
}