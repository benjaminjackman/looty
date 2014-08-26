package looty
package model


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/25/14 10:41 PM
//////////////////////////////////////////////////////////////

object InventoryIds {
  def fromItem(inv: String, x: Int): Option[InventoryId] = {
    namesMap.get(inv) flatMap { iids =>
      iids.toList match {
        case iid :: Nil => Some(iid)
        case iids => iids.find(_.poeX =?= x)
      }
    }
  }

  sealed abstract class InventoryId(poeName: String = "", val poeX: Int = -1) {
    def name = if (poeName.nonEmpty) poeName else toString
  }
  case object Helm extends InventoryId()
  case object BodyArmour extends InventoryId()
  case object Belt extends InventoryId()
  case object Boots extends InventoryId()
  case object Gloves extends InventoryId()
  case object Ring extends InventoryId()
  case object Ring2 extends InventoryId()
  case object Amulet extends InventoryId()
  case object Flask1 extends InventoryId("Flask", 0)
  case object Flask2 extends InventoryId("Flask", 1)
  case object Flask3 extends InventoryId("Flask", 2)
  case object Flask4 extends InventoryId("Flask", 3)
  case object Flask5 extends InventoryId("Flask", 4)
  case object Weapon extends InventoryId()
  case object Weapon2 extends InventoryId()
  case object Offhand extends InventoryId()
  case object Offhand2 extends InventoryId()

  val all = List(Helm, BodyArmour, Belt, Boots, Gloves, Ring, Ring2, Amulet,
    Flask1, Flask2, Flask3, Flask4, Flask5, Weapon, Weapon2, Offhand, Offhand2)

  val allMap = all.map(x => x.toString -> x)

  val namesMap = all.groupBy(_.name)
}

