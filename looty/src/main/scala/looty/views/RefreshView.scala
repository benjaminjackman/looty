package looty
package views

import org.scalajs.jquery.JQueryStatic
import looty.model.PoeCacher
import looty.poeapi.PoeTypes.Leagues


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/22/13 2:01 PM
//////////////////////////////////////////////////////////////


class RefreshView {
  def start() {
    val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
    val el = jq("#content")
    el.empty()

    val pc = new PoeCacher()

    console.log("Got Here")

    for {
      stis <- pc.Net.getStisAndStore(Leagues.Standard)
      sti <- stis.toList
    } {
      console.log(sti.colour)
      el.append(s"""<button style="color: white;text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;background-color:${sti.colour.toRgb}">${sti.n}</button>""")
    }

    console.log("Got Hereyy")

  }



}