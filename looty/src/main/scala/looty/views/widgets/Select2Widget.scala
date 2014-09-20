package looty
package views.widgets

import japgolly.scalajs.react.{ReactComponentB, Ref}
import org.scalajs.dom.HTMLDivElement

import scala.concurrent.Future
import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/18/14 10:01 PM
//////////////////////////////////////////////////////////////


object Select2Widget {
  import japgolly.scalajs.react.vdom.ReactVDom._
  import japgolly.scalajs.react.vdom.ReactVDom.all._


  def apply[A](width: Int,
    placeholder: String,
    elements: => Future[Seq[A]],
    onChange: A => Unit,
    toString: A => String,
    fromString: String => A,
    caseSensitive: Boolean = false,
    mustStartWith: Boolean = false
  ) = {
    val props = Props(
      width = width,
      placeholder = placeholder,
      onFilter = { s =>
        elements.map { elements =>
          elements.filter { el =>
            val elStr = toString(el)
            val (elStrC, txt) = if (caseSensitive) elStr -> s else elStr.toLowerCase -> s.toLowerCase
            if (mustStartWith) elStrC.startsWith(txt) else elStrC.contains(txt)
          }.map(toString)
            .sortBy(_.toLowerCase)
        }
      },
      onChange = { s =>
        onChange(fromString(s))
      }
    )
    component(props)
  }


  case class Props(
    width: Int,
    placeholder: String,
    onFilter: String => Future[Seq[String]],
    onChange: String => Unit
  )

  val component = {
    val myRef = Ref[HTMLDivElement]("myEl")
    ReactComponentB[Props]("Select2Component")
      .render((_) => div(ref := myRef.name))
      .componentDidMount { scope =>
      val el = myRef(scope).get.getDOMNode()
      val O = js.Dynamic.literal
      jq(el).asJsDyn.select2(O(
        width = scope.props.width,
        placeholder = scope.props.placeholder,
        query = { (q: js.Dynamic) =>
          val term = q.term.asInstanceOf[String]
          scope.props.onFilter(term).foreach { xs =>
            val ys = xs.map(x => O(id = x, text = x))
            q.callback(O(results = ys.toJsArr))
          }
        }: js.Function
      )).on("change", { (e: js.Dynamic) =>
        scope.props.onChange(e.`val`.asInstanceOf[String])
      }: js.Function)
    }
      .create
  }
}
