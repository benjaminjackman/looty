package looty
package views

import org.scalajs.jquery.JQueryStatic


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 2:46 PM
//////////////////////////////////////////////////////////////


class HomeView extends View {
  def start(): Unit = {
    val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
    jq("#content").text("Home Page!")
  }
  def stop(): Unit = {

  }
}