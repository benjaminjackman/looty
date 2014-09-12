package looty
package views.loot

import looty.model.{LootContainerId, ComputedItem}

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 6:29 PM
//////////////////////////////////////////////////////////////


class Filters(containers: Containers, columns: Columns, setFilterFn: (ComputedItem => Boolean) => Unit) {

  def setContainer(id: LootContainerId, visible: Boolean) {
    if (visible) {
      containerFilters += id
    } else {
      containerFilters -= id
    }
  }

  def clearColumnFilters() {
    jq(".header-filter").`val`("")
    columnFilters = Map.empty[String, LootFilterColumn]
  }

  def clearContainerFilters() {
    containers.all.foreach(_.show())
  }

  def clear() {
    clearColumnFilters()
    clearContainerFilters()
  }
  var columnFilters    = Map.empty[String, LootFilterColumn]
  var containerFilters = Set.empty[LootContainerId]

  def addColFilter(filter: LootFilterColumn) {
    columnFilters += filter.col.id -> filter
  }

  def add(colId: String, text: String) {
    val col = columns.get(colId)
    if (text.trim.isEmpty) {
      columnFilters -= colId
    } else {
      val fil = LootFilterColumn.parse(text, col.get)
      columnFilters += colId -> fil
    }
  }


  def refresh() {
    def filter(item: ComputedItem): js.Boolean = {
      def columnsAllows = columnFilters.forall { case (colId, fil) =>
        fil.allows(item)
      }
      def containerAllows = containerFilters(item.containerId)

      columnsAllows && containerAllows
    }
    setFilterFn(filter)
  }
}