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

  //    //    val mel = el.get(0).asInstanceOf[dom.Element]
  //    //    val root = UnderlayViewWidget()(pc)
  //    //    React.render(root, mel)
  //
  //
  //    val api = js.Dynamic.literal(
  //      output = (data: js.Dynamic) => {
  //        if (js.isUndefined(data.error) || data.error == null) {
  //          console.log("Output: ", data.output)
  //        } else {
  //          console.error("Error: ", data.error)
  //        }
  //      },
  //      test = (x: js.Any) => {
  //        console.log("test called with ", x)
  //      }
  //    )
  //
  //
  //    val plugin = new jailed.Plugin(document.location.origin + "/jslib/jailed/0.2.0/plugin.js", api)
  //    plugin.whenConnected(() => {
  //      PRINT | "CONNECTED"
  //      plugin.remote.run("5+5")
  //    })
  //
  //    plugin.whenDisconnected(() => {
  //      PRINT | "DISCONNECTED"
  //    })


  @JSName("jailed.Plugin")
  class Plugin(path: String, api: js.Object) extends js.Object {
    def whenConnected(f: js.Function0[Unit]): Unit = js.native
    def whenDisconnected(f: js.Function0[Unit]): Unit = js.native
    val remote: Remote = js.native
  }
}
