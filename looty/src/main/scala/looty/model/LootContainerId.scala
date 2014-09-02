package looty.model


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/13/14 2:31 AM
//////////////////////////////////////////////////////////////


object LootContainerId {
  val iPrefix = "InventoryId:"
  val sPrefix = "StashTabIdx:"
  def parse(s: String): Option[LootContainerId] = {
    if (s.startsWith(iPrefix)) {
      Some(CharInvId(s.drop(iPrefix.length)))
    } else if (s.startsWith(sPrefix)) {
      Some(StashTabIdx(s.drop(sPrefix.length).toInt))
    } else {
      None
    }
  }
}

sealed trait LootContainerId {
  def encode : String
  def isCharInv = false
  def isStashTab = false
}
case class CharInvId(character: String) extends LootContainerId {
  override def encode = LootContainerId.iPrefix + character
  override def isCharInv = true
}
case class StashTabIdx(idx: Int) extends LootContainerId {
  override def encode = LootContainerId.sPrefix + idx
  override def isStashTab = true
}

case class LootContainer(id: LootContainerId, items: List[ComputedItem])