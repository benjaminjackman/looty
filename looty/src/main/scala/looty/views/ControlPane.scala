package looty
package views

import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 6:26 PM
//////////////////////////////////////////////////////////////


class ControlPane(val name: String) {
  lazy val el = jq("""<div style="display:none"></div>""")
  def toggle() {
    if (el.is(":visible")) {
      el.hide()
    } else {
      el.show()
    }
  }
}

class Controls(gOnClick: () => Unit) {
  lazy val el   = jq("""<div id="controls"></div>""")
  lazy val menu = {
    val m = jq("<div></div>")
    el.append(m)
    m
  }
  var panes: List[ControlPane] = Nil
  def add(text: String)(onClick: => Unit) {
    val m = jq(s"""<a href="javascript:void(0)">[$text]</a>""")
    m.on("click", () => {
      onClick
      gOnClick()
      false
    })
    menu.append(m)
  }
  def add(pane: ControlPane) {
    val m = jq(s"""<a href="javascript:void(0)">[${pane.name}]</a>""")
    m.on("click", () => {
      panes.filterNot(_ =?= pane).foreach(_.el.hide())
      pane.toggle()
      gOnClick()
      false
    })
    menu.append(m)
    el.append(pane.el)
    panes :+= pane
  }
  def add(html : JQuery) {
    menu.append(html)
  }
}