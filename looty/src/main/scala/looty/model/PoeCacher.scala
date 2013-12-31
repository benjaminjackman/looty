package looty
package model

import looty.poeapi.PoeRpcs
import cgta.ojs.chrome.ChromeStorage
import scala.concurrent.Future
import looty.poeapi.PoeTypes.{Leagues, StashTab, StashTabInfos, Inventory, Characters}
import cgta.ojs.lang.JsFuture
import scala.scalajs.js
import cgta.ojs.io.StoreMaster


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/11/13 12:37 AM
//////////////////////////////////////////////////////////////

/**
 * This class will cache the data from the website in localstorage
 */
class PoeCacher(account: String = "UnknownAccount!") {

  object Store {
    val store = StoreMaster

    def getChars = store.get[Characters](s"$account-characters")
    def setChars(chars: Characters) = store.set(s"$account-characters", chars)

    def getInv(char: String) = store.get[Inventory](s"$account-$char-inventory")
    def setInv(char: String, inv: Inventory) = store.set(s"$account-$char-inventory", inv)

    def getStis(league: String) = store.get[StashTabInfos](s"$account-$league-stis")
    def setStis(league: String, stis: StashTabInfos) = store.set(s"$account-$league-stis", stis)

    def getStashTab(league: String, tabIdx: Int) = store.get[StashTab](s"$account-$league-$tabIdx-stis")
    def setStashTab(league: String, tabIdx: Int, st: StashTab) = store.set(s"$account-$league-$tabIdx-stis", st)
  }

  object Net {
    def getCharsAndStore = PoeRpcs.getCharacters() map { chars =>
      Store.setChars(chars)
      chars
    }

    def getInvAndStore(char: String) = PoeRpcs.getCharacterInventory(char) map { inv =>
      Store.setInv(char, inv)
      inv
    }

    def getStisAndStore(league: String) = PoeRpcs.getStashTabInfos(league) map { stis =>
      Store.setStis(league, stis)
      stis
    }

    def getStashTabAndStore(league: String, tabIdx: Int) = PoeRpcs.getStashTab(league, tabIdx) map { stab =>
      Store.setStashTab(league, tabIdx, stab)
      stab
    }
  }


  def getChars(): Future[Characters] = {
    //Attempt to get get the chars from local storage, or else go out to the network and load
    JsFuture.successful(Store.getChars) flatMap {
      case Some(chars) => JsFuture(chars)
      case None => Net.getCharsAndStore
    }
  }

  def getInv(char: String): Future[Inventory] = {
    JsFuture.successful(Store.getInv(char)) flatMap {
      case Some(inv) => JsFuture(inv)
      case None => Net.getInvAndStore(char)
    }
  }

  def getStashInfo(league: String): Future[StashTabInfos] = {
    JsFuture.successful(Store.getStis(league)) flatMap {
      case Some(stis) => JsFuture(stis)
      case None => Net.getStisAndStore(league)
    }
  }

  def getStashTab(league: String, tabIdx: Int): Future[StashTab] = {
    JsFuture.successful(Store.getStashTab(league, tabIdx)) flatMap {
      case Some(st) => JsFuture(st)
      case None => Net.getStashTabAndStore(league, tabIdx)
    }
  }

  def getAllStashTabs(league: String): Future[List[StashTab]] = {
    getStashInfo(league).flatMap { si =>
      JsFuture.sequence {
        si.toList.map { sti =>
          getStashTab(league, sti.i.toInt) //.log("Got Stash Tab")
        }
      }
    }
  }

  def getAllInventories(league: String): Future[List[(js.String, Inventory)]] = {
    getChars() flatMap { chars =>
      JsFuture.sequence {
        chars.toList.filter(_.league.toString =?= league).map { char =>
          getInv(char.name).map(char.name -> _)
        }
      }
    }
  }

  def basicRefresh(): Future[Any] = {
    //Doesn't download anything that is already present
    //Get all the character inventories
    JsFuture.sequence(
      List[Future[Any]](
        getChars() flatMap { chars =>
          JsFuture.sequence(chars.toList.map(char => getInv(char.name))).map(_ => Unit)
        },
        JsFuture.sequence[Any, List] {
          Leagues.all.toList.map { league =>
            getAllStashTabs(league)
          }
        }
      )
    )

    //    for {
    //      league <- Leagues.values.toList
    //      si <- getStashInfo(league)
    //      sti <- si.toList
    //      idx = sti.i
    //    } yield {
    //      getStashTab(league, idx.toInt)
    //    }


    //    JsFuture.sequence(
    //      List[Future[Any]](
    //        getChars() flatMap { chars =>
    //          JsFuture.sequence(chars.toList.map(char => getInv(char.name)))
    //        },
    //        //Get all the stash tabs for all the leagues, if you have a lot of
    //        //tabs like i do this is going to take a while, as GGG throttles tab access.
    //        for {
    //          league <- Leagues.values.toList
    //          si <- getStashInfo(league)
    //          sti <- si.toList
    //          idx <- sti.i
    //          tab <- getStashTab(league, idx)
    //        } yield {
    //          Unit
    //        }
    //      ).flatten()
    //    )


  }


}