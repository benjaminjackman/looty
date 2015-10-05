package looty
package views.widgets

import cgta.cenum.CEnum
import japgolly.scalajs.react.ReactComponentB
import looty.poeapi.PoeTypes.Leagues
import looty.poeapi.PoeTypes.Leagues.League

import concurrent.Future


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/20/14 11:10 AM
//////////////////////////////////////////////////////////////


object SelectLeagueWidget {

  val component = {
    ReactComponentB[SelectLeagueWidget]("SelectLeagueWidget")
      .render((props) => Select2Widget[League](
      selection = props.league,
      width = 120,
      placeholder = "League",
      elements = Future(Leagues.all),
      onChange = props.onLeagueChanged,
      toString = x => x.toString,
      fromString = x => Leagues.fromString(x).get
    ))
      .build
  }

}
case class SelectLeagueWidget(league: Option[League], onLeagueChanged: League => Unit) {
  def apply() = SelectLeagueWidget.component(this)
}
