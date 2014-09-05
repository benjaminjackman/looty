package looty
package poeapi

import scala.concurrent.Future
import looty.poeapi.PoeTypes.{ItemContainer, StashTab, StashTabInfos, Inventory, Characters}
import looty.model.{CharInvId, StashTabIdx, LootContainerId, ComputedItem}
import looty.model.parsers.ItemParser

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

  def getContainer(league : String, conId : LootContainerId) : Future[ItemContainer] = {
    conId match {
      case CharInvId(name) => getInv(name, forceNetRefresh = true)
      case StashTabIdx(idx) => getStashTab(league, idx, forceNetRefresh = true)
    }
  }


  private def getAllStashTabs(league: String): Future[List[Future[(StashTabIdx, StashTab)]]] = {
    getStashInfo(league).map { si =>
      si.toList.map { sti =>
        getStashTab(league, sti.i.toInt).map(StashTabIdx(sti.i.toInt) -> _) //.log("Got Stash Tab")
      }
    }
  }

  private def getAllInventories(league: String): Future[List[Future[(CharInvId, Inventory)]]] = {
    getChars() map { chars =>
      chars.toList.filter(_.league.toString =?= league).map { char =>
        getInv(char.name).map(CharInvId(char.name) -> _)
      }
    }
  }

  def getAllItems(league: String): Future[List[ComputedItem]] = {
    for {
      yf <- for (conFuts <- getAllContainersFuture(league)) yield Future.sequence(conFuts)
      y <- yf
    } yield {
      for ((conId, con) <- y; item <- con) yield item
    }
  }


  //It's a mess but allows getting items incrementally
  //TODO Collapse this signature to be:
  //List[Future[LootContainer]]
  def getAllContainersFuture(league: String): Future[List[Future[(LootContainerId, List[ComputedItem])]]] = {
    for {
      tabInfos <- getStashInfo(league)
      invs <- getAllInventories(league)
      tabs <- getAllStashTabs(league)
    } yield {
      val xs = for {
        fut <- tabs
      } yield {
        for {
          (bagId, tab) <- fut
        } yield {
          bagId -> (for {
            item <- tab.allItems(None)
          } yield {
            ItemParser.parseItem(item, bagId, tabInfos(bagId.idx).n)
          })
        }
      }

      val ys = for {
        fut <- invs
      } yield {
        for {
          (bagId, inv) <- fut
        } yield {
          bagId -> (for {
            item <- inv.allItems(Some(bagId.character))
          } yield {
            ItemParser.parseItem(item, bagId, bagId.character)
          })
        }
      }

      xs ::: ys
    }
  }


}
