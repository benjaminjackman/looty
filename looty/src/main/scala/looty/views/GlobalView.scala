package looty
package views

import org.scalajs.dom
import dom.HTMLInputElement
import japgolly.scalajs.react.{SyntheticEvent, BackendScope, React, ReactComponentB}
import looty.poeapi.PoeCacher
import widgets.{SelectCharacterWidget, SelectLeagueWidget}
import widgets.SelectLeagueWidget.Leagues.League
import org.scalajs.dom
import org.scalajs.jquery.JQuery
import poeapi.PoeTypes.CharacterInfo

import scala.concurrent.Future
import scalajs.js.Dynamic


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/18/14 8:20 PM
//////////////////////////////////////////////////////////////


//Id of an item of loot
class LootItemId {

}

//History of all your loot, ever!
class LootHistory {

}

class LootWatcher(pc: PoeCacher) {

  def setMode(enabled: Boolean, league: Option[League], character: Option[String]) {

  }

}

object GlobalViewWidget {
  class Component(
    pc: PoeCacher,
    lootWatcher: LootWatcher) {

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
      def setAutowatch(enabled: Boolean) {
        lootWatcher.setMode(enabled = enabled, league = T.state.league, character = T.state.character)
        T.modState(_.copy(autowatch = enabled))
      }
    }

    val component = {
      import japgolly.scalajs.react.vdom.ReactVDom._
      import japgolly.scalajs.react.vdom.ReactVDom.all._
      import japgolly.scalajs.react.vdom.ReactVDom.{styles => st}
      val O = Dynamic.literal

      ReactComponentB[GlobalViewWidget]("GlobalViewWidget")
        .initialState(State(None, None))
        .backend(Backend)
        .render { (p, s, b) =>
        div(
          a(href := "#/home", "[", span(`class` := "fa fa-home"), " Home]"),
          SelectLeagueWidget(s.league, b.setLeague)(),
          s.league.map { l => SelectCharacterWidget(s.character, () => b.getCharacters(), (c) => b.setCharacter(c))()},
          s.character.map { character =>
            label(
              "Autowatch",
              title := s"Automatically scan this player for updates every ${s.refreshIntervalSec} Seconds",
              input(
                `type` := "checkbox",
                onchange ==> { e: SyntheticEvent[HTMLInputElement] => b.setAutowatch(e.target.checked)},
                s.autowatch && (checked := "true")))
          },
          a(key := "config", href := "#/config", "[", span(`class` := "fa fa-gear"), " Settings]")
        )
      }
        .create
    }
  }
}

case class GlobalViewWidget() {
  def apply(pc: PoeCacher) = new GlobalViewWidget.Component(pc, new LootWatcher(pc)).component(this)
}

class GlobalView(implicit val pc: PoeCacher) extends View {
  override def start(jq: JQuery): Unit = {
    val el = jq.get(0).asInstanceOf[dom.Element]
    val root = GlobalViewWidget()(pc)
    React.renderComponent(root, el)
  }
  override def stop(): Unit = {
  }
}

