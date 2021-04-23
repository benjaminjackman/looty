package looty
package views.loot

import looty.util.Settings
import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 6:36 PM
//////////////////////////////////////////////////////////////

class ColumnsPane(columns: Columns) {
  def start(): JQuery = {
    val el = jq("<div class='columns-controls'></div>")
    val showDefault = jq("<a href='javascript:void(0)'class='col-btn'>Default</a>")
    val showAll = jq("<a href='javascript:void(0)' class='col-btn'>All +</a>")
    val searchMods = jq("<input id='search-mod' placeholder='Find mods/affixes...'>")
    val clearSearchModbtn = jq("<button id='clear-search-mod'>Clear</button>")

    clearSearchModbtn.on("click", () => {
      //remove all previous selections
      searchMods.value("")
      jq(".group-div").css("opacity",1).show()
      jq(".col-div").css("opacity",1).removeClass("select-mod")
      false
    })
    showAll.on("click", () => {
      columns.all.foreach(_.show())
      false
    })
    val hideAll = jq("<a href='javascript:void(0)' class='col-btn'>All -</a>")
    hideAll.on("click", () => {
      columns.all.foreach(_.hide())
      false
    })
    showDefault.on("click", () => {
      columns.all.foreach(_.setDefaultVisibility())
      false
    })
    val mainColControls = jq("<div class='col-main'></div>")
    mainColControls.append(searchMods)
    mainColControls.append(clearSearchModbtn)
    mainColControls.append(showAll)
    mainColControls.append(hideAll)
    mainColControls.append(showDefault)
    el.append(mainColControls)

    val grouped = columns.all.groupBy(_.groups.head)
    val groups = columns.all.map(_.groups.head).distinct
    groups.foreach { groupName =>
      val group = grouped(groupName)
      val grpDiv = jq("<div class='group-div'></div>")

      val grpOn = jq("<a href='javascript:void(0)' class='col-btn show'>+</a>")
      grpOn.on("click", () => {
        group.foreach(_.show())
        false
      })

      val grpOff = jq("<a href='javascript:void(0)' class='col-btn hide'>-</a>")
      grpOff.on("click", () => {
        group.foreach(_.hide())
        false
      })

      //putting "show" and "hide" buttons together in "col-btn-toggle" class for easier styling
      val grpToggle = jq("<span class='col-btn-toggle'></span>")

      grpToggle.append(grpOn)
      grpToggle.append(grpOff)
      grpDiv.append(grpToggle)
      grpDiv.append(s"""<span class="group-name">$groupName:</span>""")

      group.foreach { c =>
        //part of mod filtering feature
        val dataFilterMod = c.fullName + ": " + c.description
        val colDiv = jq(s"""<div data-mod-description="${dataFilterMod}" title="${c.description}" class="col-div ${if (c.visible) "on-col" else "off-col"}">${c.id}</div>""")
        colDiv.on("click", () => {
          c.toggle()
          false
        })
        c.onChange { isOn =>
          if (isOn) {
            colDiv.removeClass("off-col")
            colDiv.addClass("on-col")
          } else {
            colDiv.removeClass("on-col")
            colDiv.addClass("off-col")
          }
        }
        grpDiv.append(colDiv)
      }

      el.append(grpDiv)
    }
    //attaching code for filtering mods via input box
    el.append(s"""<script type="text/javascript" src="jslib/search-mod-fuzzysearch.js"></script>""")

    el
  }
}