package looty
package views.widgets

import japgolly.scalajs.react.ReactComponentB
import poeapi.PoeTypes.CharacterInfo

import concurrent.Future


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/20/14 11:09 AM
//////////////////////////////////////////////////////////////

object SelectCharacterWidget {
  lazy val component = {
    ReactComponentB[SelectCharacterWidget]("SelectCharacterWidget")
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
      .build
  }
}


case class SelectCharacterWidget(
  character: Option[String],
  getCharacters: () => Future[Seq[CharacterInfo]],
  onCharacterChanged: String => Unit) {
  def apply() = SelectCharacterWidget.component(this)
}