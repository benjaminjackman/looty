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


class ControlPane(val name: String, val cssCls : String) {
  //lazy val el = jq(s""".${cssCls}""")
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
  lazy val el = jq("""<div id="controls"></div>""")
  //that html element should be parent of all created panes
  // leaguePane consist of
  // add contain also created ControlPanes
  //lazy val leaguePane = jq("""<div id="league-pane pane"></div>""")
  // league-buttons-pane =
      //.buttons: clear, upgrades,refresh/tabs, select columns, export csv,
      //.load_save: views

  //"Clear Filters" "Upgrades" "Refresh/Tabs" "Select Columns" "Export Csv"
  lazy val leagueButtonsPane = jq("""<div id="league-buttons-pane"></div>""")
  lazy val buttons = jq("""<div id="buttons"></div>""")

  leagueButtonsPane.append(buttons)

  el.append(leagueButtonsPane)


  var panes: List[ControlPane] = Nil
  def add(text: String, cssCls: String)(onClick: => Unit) {
    val m = jq(s"""<a href="javascript:void(0)" class="ctrl-btn $cssCls">$text</a>""")
    m.on("click", () => {
      onClick
      gOnClick()
      false
    })
    buttons.append(m)
  }
  def add(pane: ControlPane) {
    val m = jq(s"""<a href="javascript:void(0)" class="pane-btn ${pane.cssCls}">${pane.name}</a>""")
    m.on("click", () => {
      panes.filterNot(_ =?= pane).foreach(_.el.hide())
      pane.toggle()
      gOnClick()
      false
    })
    buttons.append(m)
    el.append(pane.el)
    panes :+= pane
  }
  def add(html : JQuery) {
    leagueButtonsPane.append(html)
  }
}