package looty.model


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/13/14 2:31 AM
//////////////////////////////////////////////////////////////


sealed trait LootContainerId
case class InventoryId(character: String) extends LootContainerId
case class StashTabId(idx: Int) extends LootContainerId

case class LootContainer(id: LootContainerId, items: List[ComputedItem])