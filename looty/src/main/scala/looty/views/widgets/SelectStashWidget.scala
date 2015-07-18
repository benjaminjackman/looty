package looty
package views.widgets

import japgolly.scalajs.react.ReactComponentB
import looty.poeapi.PoeTypes.StashTabInfo
import looty.views.widgets.SelectLeagueWidget.Leagues.League

import scala.concurrent.Future
import scala.scalajs.js.Dynamic


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/17/15 9:50 AM
//////////////////////////////////////////////////////////////

object SelectStashWidget {
  val component = {
    import japgolly.scalajs.react.vdom._
    import japgolly.scalajs.react.vdom.all._
    val O = Dynamic.literal


    ReactComponentB[SelectStashWidget]("SelectStashWidget")
      .render((props) =>
      Select2Widget[StashTabInfo](
        selection = props.stashTabInfo,
        width = 120,
        placeholder = "Stash Tab",
        elements = props.getStashTabInfos(),
        onChange = props.onChange,
        toString = x => s"${"%04d".format(x.i.toInt)}: ${x.n}",
        fromString = s => {
          val x = s.indexOf(':')
          val i = s.substring(0, x).toInt
          val n = s.substring(x + 2)
          O(i = i, n = n).asInstanceOf[StashTabInfo]
        }
      )
      )
      .create
  }


}

case class SelectStashWidget(league: League, stashTabInfo: Option[StashTabInfo], getStashTabInfos: () => Future[Seq[StashTabInfo]], onChange: (StashTabInfo) => Unit) {
  def apply() = SelectStashWidget.component(this)
}
