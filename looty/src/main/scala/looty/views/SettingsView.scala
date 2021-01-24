package looty
package views

import looty.poeapi.PoeCacher
import looty.util.Settings
import org.scalajs.jquery.{JQuery, JQueryStatic}


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 4/28/15 11:25 AM
//////////////////////////////////////////////////////////////

class SettingsView(implicit val pc: PoeCacher) extends View {
  def insertLabel(fieldId:String, labeltext:String): String = {
    s"""<label for='$fieldId'>$labeltext</label>"""
  }

  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]

  override def start(ele: JQuery): Unit = {
    var el = ele.append("<div id='settings'></div>")
    el = jq("#settings")
    //el.append()
    //Account name override
    var option = jq("<div class='settingsOption'>")
    el.append(option)
    locally{
      val txt = jq("<input id='account-name-override'></input>")
      val btn = jq("<button>Save</button>")
      //el.append("<label for='account-name-override'>Override Account Name (try manually entering your account name here if you have issues):</label> ")
      option.append(insertLabel("account-name-override","Override Account Name (try manually entering your account name here if you have issues)"))
      pc.getAccountNameOverride().foreach(n=>txt.value(n))
      option.append(txt).append(btn)
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

    val option2 = jq("<div class='settingsOption'>")
    //Realm Name override
    locally{
      val txt = jq("<input id='realm-override'></input>")
      val btn = jq("<button>Save</button>")
      option2.append(insertLabel("realm-override","Override Realm Name (try manually entering your realm name here, for ps4 it's sony"))
      pc.getRealmOverride().foreach(n=>txt.value(n))
      option2.append(txt).append(btn)
      option2.append("</div>")
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
    el.append(option2)
    //for showing item detail tooltip only when pressed ctrl key
    Settings.insertHtmlElement(Settings.SHOW_TOOLTIP_ON_KEY_PRESS,Settings.SHOW_TOOLTIP_ON_KEY_PRESS_DESCR, el, "settingsOption")
    //display ggg like tooltip instead of standard
    Settings.insertHtmlElement(Settings.TOOLTIP_TEXT_ALIGN,Settings.TOOLTIP_TEXT_ALIGN_DESCR, el, "settingsOption")
    //switch to "very" fuzzysearch - https://github.com/bevacqua/fuzzysearch
    // having: "Increased Fire Damage", "Regenerate % of Life per Second"  searching "fir" it match both
    Settings.insertHtmlElement(Settings.FUZZY_SEARCH,Settings.FUZZY_SEARCH_DESCR, el, "settingsOption")

  }
  override def stop(): Unit = {}
}