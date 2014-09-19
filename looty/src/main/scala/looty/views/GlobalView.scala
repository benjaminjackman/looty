package looty
package views

import cgta.cenum.CEnum

import japgolly.scalajs.react.{Ref, BackendScope, React, ReactComponentB}
import looty.poeapi.PoeCacher
import looty.views.GlobalView.GlobalViewRoot
import looty.views.GlobalView.Leagues.League
import looty.views.snippets.Select2Wrapper
import looty.views.widgets.Select2Widget
import org.scalajs.dom
import org.scalajs.dom.HTMLDivElement
import org.scalajs.jquery.JQuery

import scala.concurrent.Future
import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/18/14 8:20 PM
//////////////////////////////////////////////////////////////


object GlobalView {

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

  import japgolly.scalajs.react.vdom.ReactVDom._
  import japgolly.scalajs.react.vdom.ReactVDom.all._

  case class SelectLeagueProps(
    initialLeague: Option[League],
    onLeagueChanged: League => Unit)

  val SelectLeagueComponent = {
    ReactComponentB[SelectLeagueProps]("SelectLeague")
      .render((props, S) => Select2Widget.component(Select2Widget.Props(
      width = 120,
      placeholder = "League",
      onFilter = (txt) => Future(Leagues.elements.map(_.toString).filter(l => l.toLowerCase.startsWith(txt.toLowerCase))),
      onChange = (txt) => props.onLeagueChanged(Leagues.fromString(txt))
    )))
      .create
  }

  val SelectCharacterComponent = {
    
  }

  class GlobalViewRoot(pc: PoeCacher) {

    val component = ReactComponentB[Unit]("GlobalViewRoot")
      .render((_) =>
      div(
        SelectLeagueComponent(SelectLeagueProps(None, (l) => console.log("NEW LEAGUE", l.toString)))
      ))
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