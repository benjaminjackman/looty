package looty
package poeapi

import cgta.ojs.io.StoreMaster
import scala.concurrent.Future
import cgta.ojs.lang.JsFuture
import looty.model.{StashTabId, InventoryId, LootContainerId, ComputedItem}
import looty.model.parsers.ItemParser
import looty.poeapi.PoeTypes.{StashTab, StashTabInfos, Inventory, Characters}


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/13/14 2:01 AM
//////////////////////////////////////////////////////////////


/**
 * This class will cache the data from the website in localstorage
 */
class PoeCacherChrome(account: String = "UnknownAccount!") extends PoeCacher {

  private object Store {
    val store = StoreMaster

    def clearLeague(league: String): Future[Unit] = {
      val otherLeagueChars = for {
        chars <- getChars.toList
        char <- chars.toList
        if char.league.toString =!= league
      } yield {
        char
      }

      val tabsToClear = for {
        stis <- getStis(league).toList
        sti <- stis.toList
      } yield {
        clearStashTab(league, sti.i.toInt)
      }

      JsFuture.sequence(
        List(setChars(otherLeagueChars.toJsArray), clearStis(league)) :::
            tabsToClear
      ).map(x => Unit)
    }

    def getChars = store.get[Characters](s"$account-characters")
    def setChars(chars: Characters) = store.set(s"$account-characters", chars)

    def getInv(char: String) = store.get[Inventory](s"$account-$char-inventory")
    def setInv(char: String, inv: Inventory) = store.set(s"$account-$char-inventory", inv)

    def getStis(league: String) = store.get[StashTabInfos](s"$account-$league-stis")
    def setStis(league: String, stis: StashTabInfos) = store.set(s"$account-$league-stis", stis)
    def clearStis(league: String) = store.clear(s"$account-$league-stis")

    def getStashTab(league: String, tabIdx: Int) = store.get[StashTab](s"$account-$league-$tabIdx-stis")
    def setStashTab(league: String, tabIdx: Int, st: StashTab) = store.set(s"$account-$league-$tabIdx-stis", st)
    def clearStashTab(league: String, tabIdx: Int) = store.clear(s"$account-$league-$tabIdx-stis")
  }

  private object Net {
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


  override def getChars(forceNetRefresh: Boolean): Future[Characters] = {
    if (forceNetRefresh) {
      Net.getCharsAndStore
    } else {
      //Attempt to get get the chars from local storage, or else go out to the network and load
      JsFuture.successful(Store.getChars) flatMap {
        case Some(chars) => JsFuture(chars)
        case None => Net.getCharsAndStore
      }
    }

  }

  override def getInv(char: String, forceNetRefresh: Boolean): Future[Inventory] = {
    if (forceNetRefresh) {
      Net.getInvAndStore(char)
    } else {
      JsFuture.successful(Store.getInv(char)) flatMap {
        case Some(inv) => JsFuture(inv)
        case None => Net.getInvAndStore(char)
      }
    }
  }

  override def getStashInfo(league: String, forceNetRefresh: Boolean): Future[StashTabInfos] = {
    if (forceNetRefresh) {
      Net.getStisAndStore(league)
    } else {
      JsFuture.successful(Store.getStis(league)) flatMap {
        case Some(stis) => JsFuture(stis)
        case None => Net.getStisAndStore(league)
      }
    }
  }

  override def getStashTab(league: String, tabIdx: Int, forceNetRefresh: Boolean = false): Future[StashTab] = {
    if (forceNetRefresh) {
      Net.getStashTabAndStore(league, tabIdx)
    } else {
      JsFuture.successful(Store.getStashTab(league, tabIdx)) flatMap {
        case Some(st) => JsFuture(st)
        case None => Net.getStashTabAndStore(league, tabIdx)
      }
    }
  }


  override def clearLeague(league: String): Future[Unit] = Store.clearLeague(league)
}