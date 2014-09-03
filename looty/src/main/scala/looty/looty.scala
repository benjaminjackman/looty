import cgta.ojs.lang.OJsDsl
import org.scalajs.jquery.{JQuery, JQueryStatic}

import scala.scalajs.js.Dynamic

//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:57 PM
//////////////////////////////////////////////////////////////

class LootyStringExtensions(s: String) {
  //Make jquery elements with "div.foo" => jq("<div></div>").addClass("foo")
  def jq: JQuery = {
    val tag :: classes = s.split("\\.").toList
    val el = Dynamic.global.jQuery.asInstanceOf[JQueryStatic](s"<$tag></$tag>")
    classes.foreach(el.addClass(_))
    el
  }
}

package object looty extends OJsDsl {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  implicit def addLootyStringExtensions(s : String) = new LootyStringExtensions(s)
}
