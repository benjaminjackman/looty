package looty.model

import looty.model.InventoryIds.InventoryId
import looty.poeapi.PoeTypes.AnyItem


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/26/14 1:05 AM
//////////////////////////////////////////////////////////////


object PaperDoll {
  def fromItems(items: Seq[AnyItem]): PaperDoll[Option[AnyItem]] = {
    fromKeyed(items.flatMap(i => i.getInventoryId.map(_ -> i)))
  }
  def fromKeyed[A](items: Seq[(InventoryId, A)]): PaperDoll[Option[A]] = {
    var out = PaperDoll.of(Option.empty[A])
    items.foreach { case (iid, item) =>
      out = out.update(iid, Some(item))
    }
    out
  }


  def of[A](v: => A) = PaperDoll(
    helm = v,
    bodyArmour = v,
    belt = v,
    boots = v,
    gloves = v,
    ring = v,
    ring2 = v,
    amulet = v,
    flask1 = v,
    flask2 = v,
    flask3 = v,
    flask4 = v,
    flask5 = v,
    weapon = v,
    weapon2 = v,
    offhand = v,
    offhand2 = v
  )


}

case class PaperDoll[+A](
  helm: A,
  bodyArmour: A,
  belt: A,
  boots: A,
  gloves: A,
  ring: A,
  ring2: A,
  amulet: A,
  flask1: A,
  flask2: A,
  flask3: A,
  flask4: A,
  flask5: A,
  weapon: A,
  weapon2: A,
  offhand: A,
  offhand2: A
) {
  def toList : List[(InventoryId, A)] = InventoryIds.all.map(iid => iid -> this(iid))

  def apply(iid: InventoryId): A = iid match {
    case InventoryIds.Helm => helm
    case InventoryIds.BodyArmour => bodyArmour
    case InventoryIds.Belt => belt
    case InventoryIds.Boots => boots
    case InventoryIds.Gloves => gloves
    case InventoryIds.Ring => ring
    case InventoryIds.Ring2 => ring2
    case InventoryIds.Amulet => amulet
    case InventoryIds.Flask1 => flask1
    case InventoryIds.Flask2 => flask2
    case InventoryIds.Flask3 => flask3
    case InventoryIds.Flask4 => flask4
    case InventoryIds.Flask5 => flask5
    case InventoryIds.Weapon => weapon
    case InventoryIds.Weapon2 => weapon2
    case InventoryIds.Offhand => offhand
    case InventoryIds.Offhand2 => offhand2
  }
  def update[B >: A](iid: InventoryId, v: B): PaperDoll[B] = iid match {
    case InventoryIds.Helm => this.copy(helm = v)
    case InventoryIds.BodyArmour => this.copy(bodyArmour = v)
    case InventoryIds.Belt => this.copy(belt = v)
    case InventoryIds.Boots => this.copy(boots = v)
    case InventoryIds.Gloves => this.copy(gloves = v)
    case InventoryIds.Ring => this.copy(ring = v)
    case InventoryIds.Ring2 => this.copy(ring2 = v)
    case InventoryIds.Amulet => this.copy(amulet = v)
    case InventoryIds.Flask1 => this.copy(flask1 = v)
    case InventoryIds.Flask2 => this.copy(flask2 = v)
    case InventoryIds.Flask3 => this.copy(flask3 = v)
    case InventoryIds.Flask4 => this.copy(flask4 = v)
    case InventoryIds.Flask5 => this.copy(flask5 = v)
    case InventoryIds.Weapon => this.copy(weapon = v)
    case InventoryIds.Weapon2 => this.copy(weapon2 = v)
    case InventoryIds.Offhand => this.copy(offhand = v)
    case InventoryIds.Offhand2 => this.copy(offhand2 = v)
  }
  def map[B](f: A => B): PaperDoll[B] = PaperDoll[B](
    helm = f(helm),
    bodyArmour = f(bodyArmour),
    belt = f(belt),
    boots = f(boots),
    gloves = f(gloves),
    ring = f(ring),
    ring2 = f(ring2),
    amulet = f(amulet),
    flask1 = f(flask1),
    flask2 = f(flask2),
    flask3 = f(flask3),
    flask4 = f(flask4),
    flask5 = f(flask5),
    weapon = f(weapon),
    weapon2 = f(weapon2),
    offhand = f(offhand),
    offhand2 = f(offhand2)
  )

}