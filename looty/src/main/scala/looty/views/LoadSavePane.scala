package looty
package views

import looty.views.loot.{Filters, Containers, Columns}
import org.scalajs.jquery.{JQueryEventObject, JQuery}

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 6:35 PM
//////////////////////////////////////////////////////////////


class LoadSavePane(columns: Columns, containers: Containers, filters: Filters) {
  def start(): JQuery = {
    //Load / Save Stuff
    val loadSaveDiv = jq("""<div title="Views are customizable groups of columns" class="load-save"></div>""")
    val loadDiv = jq("<div></div>")
    val loadBtn = jq("""<a href="javascript:void(0)" class="ls-btn" title="Loads the view with the name">Load</a>""")
    val saveBtn = jq("""<a href="javascript:void(0)" class="ls-btn" title="Saves the currently visible columns as a view">Save</a>""")
    val deleteBtn = jq("""<a href="javascript:void(0)" class="ls-btn del" title="Deletes the current view">Delete</a>""")
    val saveWithFiltersBtn = jq("""<a href="javascript:void(0)" class="ls-btn" title="Saves the currently visible columns as well as any filters that are currently active">Save+Filters</a>""")
    loadSaveDiv.append("""<span title="Views are customizable groups of columns" class="view-span">Views: </span>""")
    loadSaveDiv.append(loadDiv)
    loadSaveDiv.append(loadBtn)
    loadSaveDiv.append(saveBtn)
    loadSaveDiv.append(saveWithFiltersBtn)
    loadSaveDiv.append(deleteBtn)



    val O = js.Dynamic.literal

    val loadSel = loadDiv.asJsDyn.select2(O(
      width = 220,
      placeholder = "Name Selected Columns",
      query = { (q: js.Dynamic) =>
        val names = LootViewSaver.getAllNames
        val term = q.term.asInstanceOf[String]
        val create = if (term.nonEmpty && names.forall(_.toLowerCase != term.toLowerCase)) {
          List(O(id = term, text = s"New: $term"))
        } else {
          Nil
        }
        val vs = (create ++ names.filter(_.toLowerCase.startsWith(term.toLowerCase)).map(n => O(id = n, text = n))).toJsArr
        q.callback(O(results = vs))
      }: js.Function
    ))

    loadBtn.on("click", () => {
      val name = loadSel.`val`().asInstanceOf[String]
      if (name != null && name.nonEmpty) {
        LootViewSaver.load(name)(colId => columns.get(colId)) foreach {
          case (cols, colFilters, conIds) =>
            columns.all.foreach(_.hide())
            cols.foreach(_.show())
            colFilters.foreach { colFilters =>
              filters.clearColumnFilters()
              colFilters.foreach { colFilter =>
                filters.addColFilter(colFilter)
              }
              filters.refresh()
            }
            conIds.foreach { conIds =>
              containers.all.foreach(_.hide())
              conIds.foreach { conId =>
                containers.get(conId).foreach(_.show())
              }
              filters.refresh()
            }
            Alerter.info(s"Loaded view: $name")
        }
        false
      }
    })

    saveBtn.on("click", () => {
      val name = loadSel.`val`().asInstanceOf[String]
      if (name != null && name.nonEmpty) {
        LootViewSaver.save(name, columns.visible, None, None)
        Alerter.info(s"Saved view: $name")
      }
      false
    })

    saveWithFiltersBtn.on("click", () => {
      val name = loadSel.`val`().asInstanceOf[String]
      if (name != null && name.nonEmpty) {
        LootViewSaver.save(
          name,
          columns.visible,
          columnFilters = Some(filters.columnFilters.values.toVector),
          containerFilters = Some(filters.containerFilters.toVector)
        )
        Alerter.info(s"Saved view: $name")
      }
      false
    })

    deleteBtn.on("click", () => {
      val name = loadSel.`val`().asInstanceOf[String]
      if (name != null && name.nonEmpty) {
        LootViewSaver.delete(name)
        Alerter.info(s"Deleted view: $name")
      }
      false
    })

    loadSaveDiv
  }
}
