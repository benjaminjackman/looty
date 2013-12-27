package cgta.ojs
package lang

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/12/13 6:52 AM
//////////////////////////////////////////////////////////////


class TestOptional {
  def test(name : String)(b  : => Unit) {
    //TODO Implement this
  }

  class JsSettings extends js.Object {
    var x: Optional[Int] = ???

  }

  test("Optional should ") {
    val y = new JsSettings(5)
    y.x = 6
  }

}