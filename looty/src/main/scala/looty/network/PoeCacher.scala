package looty.network

import scala.concurrent.Future
import looty.poeapi.PoeTypes.{StashTab, StashTabInfos, Inventory, Characters}
import looty.model.{LootContainerId, ComputedItem}

//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/11/13 12:37 AM
//////////////////////////////////////////////////////////////





trait PoeCacher {
  def getChars(forceNetRefresh: Boolean = false): Future[Characters]
  def getInv(char: String, forceNetRefresh: Boolean = false): Future[Inventory]
  def getStashInfo(league: String, forceNetRefresh: Boolean = false): Future[StashTabInfos]
  def getStashTab(league: String, tabIdx: Int, forceNetRefresh: Boolean = false): Future[StashTab]
  def clearLeague(league: String): Future[Unit]

  def getAllItems(league: String): Future[List[ComputedItem]]
  //It's a mess but allows getting items incrementally
  //TODO Collapse this signature to be:
  //List[Future[LootContainer]]
  def getAllContainersFuture(league: String): Future[List[Future[(LootContainerId, List[ComputedItem])]]]

//
//  def getAllStashTabs(league: String, forceNetRefresh: Boolean = false): Future[List[Future[(StashTabId, StashTab)]]]
//  def getAllInventories(league: String, forceNetRefresh: Boolean = false): Future[List[Future[(InventoryId, Inventory)]]]
//  def getAllItems(league: String, forceNetRefresh: Boolean = false): Future[List[ComputedItem]]

//  def basicRefresh(): Future[Any]


}
