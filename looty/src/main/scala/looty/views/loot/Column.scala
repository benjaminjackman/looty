package looty
package views.loot

import looty.model.{ComputedItemProps, ComputedItem}
import looty.model.ComputedItemProps.ComputedItemProp

import scala.collection.immutable
import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 6:27 PM
//////////////////////////////////////////////////////////////

object Column {
  def apply(p: ComputedItemProp[_]) = {
    new Column(
      shortName = p.shortName,
      fullName = p.fullName,
      description = p.description,
      width = p.width,
      groups = p.groups,
      defaultNumFilter = p.defaultNumFilter,
      getJs = p.getJs,
      defaultVisible = p.defaultVisible
    )
  }
}

class Column(
  val shortName: String,
  val fullName: String,
  val description: String,
  val width: Int,
  val groups: Vector[String],
  val defaultNumFilter: Option[NumFilter],
  val getJs: (ComputedItem) => js.Any,
  val defaultVisible: Boolean
  ) {
  def id = shortName
  lazy val slick = makeColumn(shortName, description, width)(getJs)

  def makeColumn(name: String, tooltip: String, width: Int)(f: ComputedItem => js.Any) = {
    val o = newObject
    o.id = name
    o.name = name
    o.field = name
    o.toolTip = tooltip
    o.sortable = true
    o.getter = f
    if (width =?= -1) o.width = 50 else o.width = width
    o
  }

  private var listeners = Vector.empty[Boolean => Unit]
  private var _visible  = defaultVisible
  private def changed() {
    listeners.foreach(_(_visible))
  }

  def visible = _visible

  def setDefaultVisibility() {
    _visible = defaultVisible
    changed()
  }

  def hide() {
    _visible = false
    changed()
  }
  def show() {
    _visible = true
    changed()
  }
  def toggle() {
    _visible = !_visible
    changed()
  }

  def onChange(f: Boolean => Unit) {
    listeners :+= f
  }
}
//Location is StashX where X = index + 1
//So first tab is Stash2
//I think the hideouts have sometihng to do wit this
//[linkItem location="Stash4" league="Rampage" x="0" y="0"]
//[linkItem location="MainInventory" character="frostlarr" x="0" y="2"]


object EditableColumns {
  val all = Nil //??? //new Column()
}

class Columns {
  val all    = ComputedItemProps.all.map(Column(_)) ++ EditableColumns.all
  val allMap = immutable.Map(all.map(c => c.id -> c): _*)

  def visible = all.filter(_.visible)
  all.foreach(c => c.onChange(v => colChanged(c)))

  private def colChanged(c: Column) {
    changed()
  }

  private var listeners = Vector.empty[() => Unit]
  def onChange(f: () => Unit) {
    listeners :+= f
  }
  private def changed() {
    listeners.foreach(_())
  }

  def getJsArray(): js.Array[js.Dynamic] = {
    val cols = js.Array[js.Dynamic]()
    visible.foreach(c => cols.push(c.slick))
    cols
  }
  def get(id: String): Option[Column] = allMap.get(id)
}