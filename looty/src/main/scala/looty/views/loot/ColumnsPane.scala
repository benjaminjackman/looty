package looty
package views.loot

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
    val el = jq("""<div class="columns-controls"></div>""")
    val showDefault = jq("<a href='javascript:void(0)'class='col-btn'>Default</a>")
    val showAll = jq("<a href='javascript:void(0)' class='col-btn'>All +</a>")
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
    el.append(showAll)
    el.append(hideAll)
    el.append(showDefault)
    val grouped = columns.all.groupBy(_.groups.head)
    val groups = columns.all.map(_.groups.head).distinct
    groups.foreach { groupName =>
      val group = grouped(groupName)
      val grpDiv = jq(s"""<div class='group-div'></div>""")
      val grpOn = jq("<a href='javascript:void(0)' class='col-btn'>+</a>")
      grpOn.on("click", () => {
        group.foreach(_.show())
        false
      })

      val grpOff = jq("<a href='javascript:void(0)' class='col-btn'>-</a>")
      grpOff.on("click", () => {
        group.foreach(_.hide())
        false
      })

      grpDiv.append(grpOn)
      grpDiv.append(grpOff)
      grpDiv.append(s"""<span class="group-name">$groupName:</span>""")

      group.foreach { c =>
        val colDiv = jq(s"""<div style="display:inline-block" title="${c.fullName}: ${c.description}" class="col-div ${if (c.visible) "on-col" else "off-col"}">${c.id}</div>""")
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
    el
  }
}