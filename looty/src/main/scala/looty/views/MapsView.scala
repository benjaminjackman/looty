package looty
package views

import japgolly.scalajs.react.{BackendScope, React, ReactComponentB}
import looty.model.ComputedItem
import looty.poeapi.PoeCacher
import looty.poeapi.PoeTypes.Leagues.League

import looty.views.widgets.SelectLeagueWidget
import org.scalajs.dom
import org.scalajs.jquery.JQuery

import scala.concurrent.Future


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/10/14 10:19 AM
//////////////////////////////////////////////////////////////

object MapsView {
  import japgolly.scalajs.react.vdom.prefix_<^._

  object TopComp {
    case class Props(getAllItems: League => Future[List[ComputedItem]])
    case class State(league: Option[League], maps: Seq[ComputedItem])
    case class Backend(T: BackendScope[Props, State]) {
      def setLeague(league: League) {
        T.props.getAllItems(league).map { items =>
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
      <.div(
        SelectLeagueWidget(s.league, b.setLeague)(),
        MapsComponent(s.maps)
      )
    }
      .build


    def apply(pc: PoeCacher) = component(Props((l : League) => pc.getAllItems(l.rpcName)))
  }


  val MapsComponent = ReactComponentB[Seq[ComputedItem]]("MapsComponent")
    .render { (p) =>
    val mapsByLvl = p.groupBy(_.mapLevel)
    <.div(
      mapsByLvl.toList.sortBy(_._1).map { case (lvl, ms) =>
        <.div(
          <.span("Level=", lvl, " "),
          <.span("Count=", ms.size, ": "),
          ms.sortBy(_.displayName).map(m=>MapComponent(m))
        )
      }
    )
  }
    .build

  val MapComponent = ReactComponentB[ComputedItem]("MapComponent")
    .render { (item) =>
    <.div(
      ^.display := "inline-block",
      item.displayName,
      <.img(^.src := item.item.getIconUrl)
    )
  }
    .build


}


class MapsView(implicit val pc: PoeCacher) extends View {
  override def start(jq: JQuery) {
    jq.empty()
    val el = jq.get(0).asInstanceOf[dom.Element]

    React.render(MapsView.TopComp(pc), el)
  }
  override def stop() {

  }
}