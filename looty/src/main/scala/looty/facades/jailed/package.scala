package looty
package facades

import scala.scalajs.js
import scala.scalajs.js.annotation.JSName

//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/19/15 3:47 PM
//////////////////////////////////////////////////////////////
package object jailed {

  trait Remote extends js.Object {
    def run(code: String): Unit = js.native
  }

  @JSName("jailed.Plugin")
  class Plugin(path: String, api: js.Object) extends js.Object {
    def whenConnected(f: js.Function0[Unit]): Unit = js.native
    def whenDisconnected(f: js.Function0[Unit]): Unit = js.native
    val remote: Remote = js.native
  }
}
