package looty
package views

import looty.model.{ComputedItem, LootContainerId}
import looty.views.LootView.Column

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/23/14 4:29 PM
//////////////////////////////////////////////////////////////
import scala.language.postfixOps

object Saver {
  val localStorage = global.localStorage
  val colPrefix    = "LOOTVIEW-SAVE-COLUMNS:"
  val itemPrefix   = "LOOTVIEW-SAVE-ITEM:"

  def delete(name: String) {
    localStorage.removeItem(colPrefix + name)
  }

  def saveItemInfo(item: ComputedItem, key: String, text: String) {
    item.forumLocationName match {
      case None => Alerter.warn("This item doesn't have a valid forum location name, it's probably a gem in another item, or currently equipped. These items aren't saveable.")
      case Some(loc) =>
    }
  }

  def loadItemInfo(item: ComputedItem, key: String): Option[String] = {
    ???
  }

  def save(
    name: String,
    cols: Vector[Column],
    columnFilters: Option[Vector[LootFilterColumn]],
    containerFilters: Option[Vector[LootContainerId]]
  ) {
    if (name.isEmpty) {
      Alerter.error("Hey fella, you have to type a name in the name box!")
      return
    } else if (name.length > 50) {
      Alerter.error("Hey fella, names are limited to 50 characters!")
      return
    }
    val k = colPrefix + name.take(50)

    val data = js.Dynamic.literal()
    data.cols = cols.map(_.id).toJsArray
    columnFilters.foreach { filters =>
      data.columnFilters = filters.map { filter =>
        val fd = js.Dynamic.literal()
        fd.text = filter.text
        fd.col = filter.col.id
        fd
      } toJsArray
    }
    containerFilters.foreach { filters =>
      data.containerFilters = filters.map { containerId =>
        val fd = js.Dynamic.literal()
        fd.encoded = containerId.encode
        fd
      } toJsArray
    }
    val json = global.JSON.stringify(data).toString
    localStorage.setItem(k, json)
  }

  def load(name: String)(getCol: String => Option[Column]):
  Option[(Vector[Column], Option[Vector[LootFilterColumn]], Option[Vector[LootContainerId]])] = {
    val k = colPrefix + name
    localStorage.getItem(k).nullSafe.map { json =>
      val data = global.JSON.parse(json)
      val cols = data.cols.asJsArr[String].toVector.flatMap(c => getCol(c.toString))
      val columnFilters = if (!data.columnFilters.isUndefined) {
        Some {
          data.columnFilters.asJsArr[js.Dynamic].toVector.flatMap { f =>
            getCol(f.col.toString).map { col =>
              val text = f.text.toString
              LootFilterColumn.parse(text, col)
            }
          }
        }
      } else {
        None
      }
      val containerFilters = if (!data.containerFilters.isUndefined) {
        Some {
          data.containerFilters.asJsArr[js.Dynamic].toVector.flatMap { con =>
            LootContainerId.parse(con.encoded.toString)
          }
        }
      } else {
        None
      }
      (cols, columnFilters, containerFilters)
    }
  }

  def getAllNames: Vector[String] = {
    val sz = localStorage.length.asInstanceOf[Int]
    val keys = (0 until sz) map (i => localStorage.key(i).toString) filter (_.startsWith(colPrefix))
    val names = keys map (_.drop(colPrefix.length))
    names.toVector
  }
}