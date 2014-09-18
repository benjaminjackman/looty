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

class ColumnsPane(columns : Columns) {
  def start(): JQuery = {
    val el = jq("""<div id="columns-controls"></div>""")
    val showDefault = jq("<a href='javascript:void(0)'>[Default]</a>")
    val showAll = jq("<a href='javascript:void(0)'>[All +]</a>")
    showAll.on("click", () => {
      columns.all.foreach(_.show())
      false
    })
    val hideAll = jq("<a href='javascript:void(0)'>[All -]</a>")
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
      val grpDiv = jq(s"""<div></div>""")
      val grpOn = jq("<a href='javascript:void(0)'>[+]</a>")
      grpOn.on("click", () => {
        group.foreach(_.show())
        false
      })

      val grpOff = jq("<a href='javascript:void(0)'>[-]</a>")
      grpOff.on("click", () => {
        group.foreach(_.hide())
        false
      })

      grpDiv.append(grpOn)
      grpDiv.append(grpOff)
      grpDiv.append(s"""<span style="color:pink">$groupName:</span>""")

      group.foreach { c =>
        val colDiv = jq(s"""<div style="display:inline-block" title="${c.description}"></div>""")
        val onSpan = s"""<span>${c.id}</span><span style="color:#00FF00">[on]</span>"""
        val offSpan = s"""<span>${c.id}</span><span style="color:#FF0000">[off]</span>"""
        val curSpan = if (c.visible) onSpan else offSpan
        val tog = jq(s"""<a href='javascript:void(0)'>$curSpan</a>&nbsp;&nbsp;&nbsp;""")
        tog.on("click", () => {
          c.toggle()
          false
        })
        c.onChange(isOn => tog.html(if (isOn) onSpan else offSpan))
        colDiv.append(tog)
        grpDiv.append(colDiv)
      }

      el.append(grpDiv)
    }
    el
  }
}