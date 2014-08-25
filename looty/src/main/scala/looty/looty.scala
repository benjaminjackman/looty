import cgta.ojs.lang.OJsDsl
import org.scalajs.jquery.JQueryStatic

//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:57 PM
//////////////////////////////////////////////////////////////

package object looty extends OJsDsl {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
}
