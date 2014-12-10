package looty
package views.widgets

import cgta.cenum.CEnum
import japgolly.scalajs.react.ReactComponentB
import views.widgets.SelectLeagueWidget.Leagues.League

import concurrent.Future


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/20/14 11:10 AM
//////////////////////////////////////////////////////////////


object SelectLeagueWidget {
  object Leagues extends CEnum {
    final type EET = League
    sealed trait League extends EnumElement
    case object Standard extends League
    case object Hardcore extends League
    case object Torment extends League
    case object Bloodlines extends League
    //Needs to be overrided in child class with
    final override val elements = CEnum.getElements(this)
  }

  val component = {
    ReactComponentB[SelectLeagueWidget]("SelectLeagueWidget")
      .render((props) => Select2Widget[League](
      selection = props.league,
      width = 120,
      placeholder = "League",
      elements = Future(Leagues.elements),
      onChange = props.onLeagueChanged,
      toString = x => x.toString,
      fromString = Leagues.fromString
    ))
      .create
  }

}
case class SelectLeagueWidget(league: Option[League], onLeagueChanged: League => Unit) {
  def apply() = SelectLeagueWidget.component(this)
}
