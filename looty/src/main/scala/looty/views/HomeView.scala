package looty
package views

import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 2:46 PM
//////////////////////////////////////////////////////////////


class HomeView extends View {
  def start(el: JQuery) {
    el.text("Home Page!")
  }

  def stop() {}


}