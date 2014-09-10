package looty.lreact

import cgta.otest.FunSuite


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/10/14 3:22 PM
//////////////////////////////////////////////////////////////

object TestLReact extends FunSuite {
  test("Hello") {
    // Typical usage
    import japgolly.scalajs.react._
    // React
    import vdom.ReactVDom._
    // Scalatags → React virtual DOM
    import vdom.ReactVDom.all._
    // Scalatags html & css (div, h1, textarea, etc.)
    val x = 5
  }
}