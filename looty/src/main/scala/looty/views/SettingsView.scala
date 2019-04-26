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

    locally{
      val txt = jq("<input></input>")
      val btn = jq("<button>Save</button>")
      el.append("<span>Override Account Name (try manually entering your account name here if you have issues):</span> ")
      pc.getAccountNameOverride().foreach(n=>txt.value(n))
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
    el.append(jq("<br/>"))

    locally{
      val txt = jq("<input></input>")
      val btn = jq("<button>Save</button>")
      el.append("<span>Override Realm Name (try manually entering your realm name here, for ps4 it's sony):</span> ")
      pc.getRealmOverride().foreach(n=>txt.value(n))
      el.append(txt).append(btn)
      btn.on("click", () => {
        val n = txt.value().toString
        if (n.nonEmpty) {
          pc.setRealmOverride(Some(n))
          Alerter.info(s"Realm override set to $n")
        } else {
          pc.setRealmOverride(None)
          Alerter.info(s"Realm  override cleared")
        }
      })
    }



  }
  override def stop(): Unit = {}
}