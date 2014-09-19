package looty
package views

import cgta.cenum.CEnum
import japgolly.scalajs.react.{BackendScope, React, ReactComponentB}
import looty.poeapi.PoeCacher
import looty.views.GlobalView.GlobalViewRoot
import looty.views.widgets.Select2Widget
import org.scalajs.dom
import org.scalajs.jquery.JQuery
import poeapi.PoeTypes.CharacterInfo
import views.SelectLeagueWidget.Leagues.League

import scala.concurrent.Future


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/18/14 8:20 PM
//////////////////////////////////////////////////////////////


object SelectLeagueWidget {
  object Leagues extends CEnum {
    final type EET = League
    sealed trait League extends EnumElement
    case object Standard extends League
    case object Hardcore extends League
    case object Rampage extends League
    case object Beyond extends League
    //Needs to be overrided in child class with
    final override val elements = CEnum.getElements(this)
  }

  case class Props(
    initialLeague: Option[League],
    onLeagueChanged: League => Unit)

  val component = {
    ReactComponentB[Props]("SelectLeague")
      .render((props) => Select2Widget.component(Select2Widget.Props(
      width = 120,
      placeholder = "League",
      onFilter = (txt) => Future(Leagues.elements.map(_.toString).filter(l => l.toLowerCase.startsWith(txt.toLowerCase))),
      onChange = (txt) => props.onLeagueChanged(Leagues.fromString(txt))
    )))
      .create
  }
}


object SelectCharacterWidget {
  case class Props(getCharacters: () => Future[Seq[CharacterInfo]], onCharacterChanged: String => Unit)
  val component = ReactComponentB[Props]("SelectCharacter")
    .render((props) => Select2Widget.component(Select2Widget.Props(
    width = 120,
    placeholder = "Character",
    onFilter = (txt) => props.getCharacters().map(cs => cs.map(c => c.name).filter(_.toLowerCase.contains(txt.toLowerCase))),
    onChange = (txt) => props.onCharacterChanged(txt)
  ))
    )
    .create
}


object GlobalView {


  class GlobalViewRoot(pc: PoeCacher) {

    import japgolly.scalajs.react.vdom.ReactVDom._
    import japgolly.scalajs.react.vdom.ReactVDom.all._

    case class State(league: Option[League], character: Option[String])
    case class Backend(T: BackendScope[_, State]) {
      def setLeague(league: League) {
        T.modState(_.copy(league = Some(league), character = None))
      }
      def setCharacter(character: String) {
        T.modState(_.copy(character = Some(character)))
      }
      def getCharacters(): Future[Seq[CharacterInfo]] = {
        pc.getChars().map(cs => cs.toList.filter(c => Option(c.league) =?= T.state.league.map(_.toString)))
      }
    }

    val component = ReactComponentB[Unit]("GlobalViewRoot")
      .initialState(State(None, None))
      .backend(Backend)
      .render { (p, s, b) =>
      div(
        SelectLeagueWidget.component(SelectLeagueWidget.Props(s.league, b.setLeague)),
        s.league.map(l => SelectCharacterWidget.component(SelectCharacterWidget.Props(() => b.getCharacters(), (c) => b.setCharacter(c))))
      )
    }
      .createU
  }

}

class GlobalView(implicit val pc: PoeCacher) extends View {

  case class GlobalBackend(implicit val pc: PoeCacher)

  class Backend(T: BackendScope[_, Vector[String]]) {
    def handleAdd() {
    }
  }


  override def start(jq: JQuery): Unit = {
    val el = jq.get(0).asInstanceOf[dom.Element]
    val root = new GlobalViewRoot(pc).component()
    React.renderComponent(root, el)
  }

  override def stop(): Unit = {

  }
}