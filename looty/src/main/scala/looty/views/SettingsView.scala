package looty
package views

import looty.poeapi.PoeCacher
import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 4/28/15 11:25 AM
//////////////////////////////////////////////////////////////

class SettingsView(implicit val pc: PoeCacher) extends View {
  override def start(el: JQuery): Unit = {

    val txt = jq("<input></input>")
    val btn = jq("<button>Save</button>")
    el.append("<span>Override Account Name (try manually entering your account name here if you have issues):</span> ")
    pc.getAccountNameOverride.foreach(n=>txt.value(n))
    el.append(txt).append(btn)
    btn.on("click", () => {
      val n = txt.value().toString
      if (n.nonEmpty) {
        pc.setAccountNameOverride(Some(n))
        Alerter.info(s"Account name override set to $n")
      } else {
        pc.setAccountNameOverride(None)
        Alerter.info(s"Account name override cleared")
      }
    })

  }
  override def stop(): Unit = {}
}