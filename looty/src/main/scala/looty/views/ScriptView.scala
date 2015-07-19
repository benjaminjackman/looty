package looty
package views

import cgta.oscala.util.debugging.PRINT
import looty.facades.jailed
import looty.poeapi.PoeCacher
import org.scalajs.jquery.JQuery

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/19/15 3:31 PM
//////////////////////////////////////////////////////////////


class ScriptView(implicit val pc: PoeCacher) extends View {
  override def start(el: JQuery): Unit = {
    //    val mel = el.get(0).asInstanceOf[dom.Element]
    //    val root = UnderlayViewWidget()(pc)
    //    React.render(root, mel)


    val api = js.Dynamic.literal(
      output = (data: js.Dynamic) => {
        if (js.isUndefined(data.error) || data.error == null) {
          console.log("Output: ", data.output)
        } else {
          console.error("Error: ", data.error)
        }
      },
      test = (x: js.Any) => {
        console.log("test called with ", x)
      }
    )


    val plugin = new jailed.Plugin(document.location.origin + "/jslib/jailed/0.2.0/plugin.js", api)
    plugin.whenConnected(() => {
      PRINT | "CONNECTED"
      plugin.remote.run("5+5")
    })

    plugin.whenDisconnected(() => {
      PRINT | "DISCONNECTED"
    })

    //    pc.getAllItems(Leagues.Standard.rpcName).foreach { items =>
    //      items.foreach { item =>
    //
    //      }
    //    }
  }

  override def stop(): Unit = {

  }
}