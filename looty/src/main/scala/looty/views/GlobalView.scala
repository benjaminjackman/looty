package looty
package views

import cgta.cenum.CEnum
import org.scalajs.dom
import dom.HTMLInputElement
import japgolly.scalajs.react.{SyntheticEvent, BackendScope, React, ReactComponentB}
import looty.poeapi.PoeCacher
import looty.views.GlobalView.GlobalViewRoot
import looty.views.widgets.Select2Widget
import org.scalajs.dom
import org.scalajs.jquery.JQuery
import poeapi.PoeTypes.CharacterInfo
import views.SelectLeagueWidget.Leagues
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

  val component = {
    ReactComponentB[SelectLeagueWidget]("SelectLeague")
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


object SelectCharacterWidget {
  lazy val component = ReactComponentB[SelectCharacterWidget]("SelectCharacter")
    .render((props) => Select2Widget[String](
    selection = props.character,
    width = 220,
    placeholder = "Character",
    elements = props.getCharacters().map(_.map(_.name)),
    onChange = props.onCharacterChanged,
    toString = x => x,
    fromString = x => x
  )
    )
    .create
}
case class SelectCharacterWidget(
  character : Option[String],
  getCharacters: () => Future[Seq[CharacterInfo]],
  onCharacterChanged: String => Unit) {
  def apply() = SelectCharacterWidget.component(this)
}


object GlobalView {


  class GlobalViewRoot(pc: PoeCacher) {
    import japgolly.scalajs.react.vdom.ReactVDom._
    import japgolly.scalajs.react.vdom.ReactVDom.all._

    case class State(
      league: Option[League],
      character: Option[String],
      autowatch: Boolean = false,
      refreshIntervalSec: Int = 30
    )
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
      def setAutowatch(enabled: Boolean, e : SyntheticEvent[HTMLInputElement]) {
        T.modState(_.copy(autowatch = enabled))
      }
    }

    val component = ReactComponentB[Unit]("GlobalViewRoot")
      .initialState(State(None, None))
      .backend(Backend)
      .render { (p, s, b) =>
      div(
        SelectLeagueWidget(s.league, b.setLeague)(),
        s.league.map { l =>
          span(
            SelectCharacterWidget(s.character, () => b.getCharacters(), (c) => b.setCharacter(c))(),
            label("Autowatch",
              title := s"Automatically scan this player for updates every ${s.refreshIntervalSec} Seconds",
              input(`type` := "checkbox",
                onchange ==> { e: SyntheticEvent[HTMLInputElement] => b.setAutowatch(e.target.checked, e)},
                s.autowatch && (checked := "true"))
            )
          )
        }
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