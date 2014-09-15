package looty
package views.loot

import looty.model.{ComputedItem, LootContainerId}
import org.scalajs.jquery.JQuery


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 6:28 PM
//////////////////////////////////////////////////////////////

object Container {
  val visCls   = "visible-loot-container"
  val invisCls = "invisible-loot-container"

}

class Container(val id: LootContainerId, html: JQuery, initialVisible: Boolean, refreshFn: () => Unit) {
  import Container._


  private var _items = Vector.empty[ComputedItem]
  def items = _items
  def setItems(items: Vector[ComputedItem]) {
    html.removeClass("loading")
    _items = items
  }
  def refresh() {
    html.addClass("loading")
    refreshFn()
  }


  private var nextListenerKey = 0L
  private var listeners = Vector.empty[(Long, Boolean => Unit)]
  private var _visible  = initialVisible

  private def refreshHtml() {
    if (visible) {
      html.addClass(visCls).removeClass(invisCls)
    } else {
      html.addClass(invisCls).removeClass(visCls)
    }

  }

  private def changed() {
    refreshHtml()
    listeners.foreach(_._2(_visible))
  }

  def visible = _visible

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

  def onChange(f: Boolean => Unit) : Long = {
    val key = nextListenerKey
    nextListenerKey += 1
    listeners :+= key -> f
    key
  }
  def removeListener(key : Long) = listeners = listeners.filter(_._1 !=?= key)
}

class Containers {
  var _containers = Vector.empty[Container]
  var _allMap     = Map.empty[LootContainerId, Container]
  def all = _containers
  def addContainer(c: Container) {
    _containers :+= c
    _allMap += c.id -> c
    c.onChange(v => conChanged(c))
  }
  def get(id: LootContainerId): Option[Container] = _allMap.get(id)

  private def conChanged(c: Container) {
    changed(c)
  }

  private var listeners = Vector.empty[Container => Unit]
  def onChange(f: (Container) => Unit) {
    listeners :+= f
  }
  private def changed(c: Container) {
    listeners.foreach(_(c))
  }

}