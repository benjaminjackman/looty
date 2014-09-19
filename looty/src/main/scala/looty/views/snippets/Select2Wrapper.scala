package looty
package views.snippets

import org.scalajs.dom
import org.scalajs.jquery.JQuery

import scala.concurrent.Future
import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/9/14 4:22 PM
//////////////////////////////////////////////////////////////


object Select2Wrapper {
  def apply(el: dom.Element,
    width : Int,
    placeHolder : String,
    filterFn: (String) => Future[Seq[String]])(onChangeFn: String => Unit) {
    val theDiv = jq("<div></div>")
    jq(el).append(theDiv)
    //Add a list of buttons one per character
    val O = js.Dynamic.literal
    theDiv.asJsDyn.select2(O(
      width = width,
      placeholder = placeHolder,
      query = { (q: js.Dynamic) =>
        val term = q.term.asInstanceOf[String]
        filterFn(term).foreach { xs =>
          val ys = xs.map(x => O(id = x, text = x))
          q.callback(O(results = ys.toJsArray))
        }
      }: js.Function
    )).on("change", { (e: js.Dynamic) =>
      onChangeFn(e.`val`.asInstanceOf[String])
    }: js.Function)
  }
}