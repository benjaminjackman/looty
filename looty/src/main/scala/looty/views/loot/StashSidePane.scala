package looty
package views.loot

import looty.model.{ComputedItem, CharInvId, StashTabIdx, LootContainerId}


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/15/14 3:48 PM
//////////////////////////////////////////////////////////////


object Sidebars {
  class Sidebar(id: String, openStr: String, closeStr: String) {
    val el      = jq(id)
    val btn     = jq(".sidebar-button", el)
    val content = jq(".sidebar-content", el)
    var visible = false
    btn.on("click", () => {
      setVisible(!visible)
    })
    def setVisible(p: Boolean) {
      visible = p
      if (p) {
        el.css("width", "45%")
        btn.text(closeStr)
      } else {
        el.css("width", "0%")
        btn.text(openStr)
      }
    }

  }

  val left  = new Sidebar("#sidebar-left", ">", "<")
  val right = new Sidebar("#sidebar-right", "<", ">")
}

class StashSidePane(containers: Containers) {
  val bar     = Sidebars.left
  val itemsEl = "div".jq
  itemsEl.css("height", "100%")
  itemsEl.css("width", "100%")
  itemsEl.css("position", "relative")
  bar.content.append(itemsEl)
  var current: Option[(Long, Container)] = None

  def setItems(items: Vector[ComputedItem]) {
    itemsEl.empty()
    items.foreach { item =>
      for {
        x <- item.item.x.toOption
        y <- item.item.y.toOption
        w = item.item.w
        h = item.item.h
      } {
        val img = "img".jq
        img.attr("src", item.item.icon)
        img.css("position", "absolute")
        val xd = 100.0 / 12
        val yd = 100.0 / 12

        img.css("top", y * yd + "%")
        img.css("left", x * xd + "%")
        img.css("width", w * xd + "%")
        img.css("height", h * yd + "%")
        itemsEl.append(img)
      }
    }
  }

  def setTab(id: StashTabIdx) {
    console.log("SET TAB")
    current.foreach { case (key, con) =>
      con.removeListener(key)
      current = None
    }
    containers.get(id).foreach { con =>
      val key = con.onChange { (isVisible) =>
        setItems(con.items)
      }
      current = Some(key -> con)
      setItems(con.items)
    }
  }

  def setVisible(p: Boolean) = bar.setVisible(p)
}

class CharInvSidePane(containers: Containers) {
  val bar = Sidebars.right
  def setTab(id: CharInvId) {}
  def setVisible(p: Boolean) = bar.setVisible(p)
}