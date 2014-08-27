package looty
package views

import looty.model.PassiveSkillTreeHelp
import looty.poeapi.{PoeRpcs, PoeCacher}
import org.scalajs.jquery.{JQuery, JQueryStatic}

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/22/14 5:27 PM
//////////////////////////////////////////////////////////////

class PoeBuilderView(implicit val pc: PoeCacher) extends View {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  override def start(el: JQuery): Unit = {
    val btnsDiv = jq("<div></div>")
    val iframe = jq("""<iframe class="poebuilder"></iframe>""")
    //Add a list of buttons one per character
    for {
      chars <- pc.getChars()
      char <- chars.sortBy(_.name.toUpperCase)
    } {
      val btn = jq(s"""<a href="javascript:void(0)"></a> """)
      btn.text(s"[${char.name}]")
      btnsDiv.append(btn)
      btn.on("click", (e: js.Any) => {
        Alerter.info("Attempting to get passive skill tree try from path of exile.com...")
        PoeRpcs.getPassiveSkills(char.name).foreach { data =>
          val base64 = PassiveSkillTreeHelp.decode(data.hashes.asJsArr[Int])
          iframe.attr("src", s"http://poebuilder.com/character/$base64")
//          global.open()
        }
        false
      })
    }

    pc.getChars(forceNetRefresh = true)

    el.append(btnsDiv)
    el.append(iframe)
  }
  override def stop(): Unit = {

  }
}