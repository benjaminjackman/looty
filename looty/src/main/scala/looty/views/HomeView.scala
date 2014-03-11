package looty
package views

import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 2:46 PM
//////////////////////////////////////////////////////////////


class HomeView extends View {
  def start(el: JQuery) {
    el.html {
      """ Welcome to Looty.<br>
      |Looty was created to make it easier to search inventories in Path of Exile.<br>
      |It provides a grid interface to search for items in different leagues.<br>
      |The XP view will attempt to predict when a gem will level up.<br>
      |GGG seems to only refresh items and gem information when a character changes zones,
      |so keep that in mind if things aren't showing up.<br>
      |This is a buggy alpha version<br>
      |source code available on <a href="https://github.com/benjaminjackman/looty">github</a>.<br>
      |<br>
      |<h3>Help and more info available <a href="http://blog.jackman.biz/looty">here</a> (eventually)<h3>
      |<br>
      """.stripMargin
    }
  }

  def stop() {}
}