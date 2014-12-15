package looty
package views

import japgolly.scalajs.react.{BackendScope, React, ReactComponentB}
import looty.model.ComputedItem
import looty.poeapi.PoeCacher
import looty.views.widgets.SelectLeagueWidget
import looty.views.widgets.SelectLeagueWidget.Leagues.League
import org.scalajs.dom
import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/10/14 10:19 AM
//////////////////////////////////////////////////////////////

object MapsView {
  import japgolly.scalajs.react.vdom.ReactVDom._
  import japgolly.scalajs.react.vdom.ReactVDom.all._

  object TopComp {
    case class Props(pc: PoeCacher)
    case class State(league: Option[League], maps: Seq[ComputedItem])
    case class Backend(T: BackendScope[Props, State]) {
      def setLeague(league: League) {
        T.props.pc.getAllItems(league.toString).map { items =>
          T.modState(_.copy(maps = items.filter(_.item.isMap)))
        }
        T.modState(_.copy(
          league = Some(league)
        ))
      }
    }

    val component = ReactComponentB[Props]("TopComp")
      .initialState(State(None, Nil))
      .backend(Backend)
      .render { (p, s, b) =>
      div(
        SelectLeagueWidget(s.league, b.setLeague)(),
        MapsComponent(s.maps)
      )
    }
      .create


    def apply(pc: PoeCacher) = component(Props(pc))
  }


  val MapsComponent = ReactComponentB[Seq[ComputedItem]]("MapsComponent")
    .render { (p) =>
    val mapsByLvl = p.groupBy(_.mapLevel)
    div(
      mapsByLvl.toList.sortBy(_._1).map { case (lvl, ms) =>
        div(
          span("Level=", lvl, " "),
          span("Count=", ms.size, ": "),
          ms.sortBy(_.displayName).map(m=>MapComponent(m))
        )
      }
    )
  }
    .create

  val MapComponent = ReactComponentB[ComputedItem]("MapComponent")
    .render { (item) =>
    div(
      display := "inline-block",
      item.displayName,
      img(src := item.item.icon)
    )
  }
    .create


}


class MapsView(implicit val pc: PoeCacher) extends View {
  override def start(jq: JQuery) {
    jq.empty()
    val el = jq.get(0).asInstanceOf[dom.Element]

    React.renderComponent(MapsView.TopComp(pc), el)
  }
  override def stop() {

  }
}