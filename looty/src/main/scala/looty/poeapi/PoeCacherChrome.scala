package looty
package poeapi

import scala.concurrent.Future

import looty.poeapi.PoeTypes.{StashTab, StashTabInfos, Inventory, Characters}
import looty.chrome.StoreMaster


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/13/14 2:01 AM
//////////////////////////////////////////////////////////////


/**
 * This class will cache the data from the website in localstorage
 */
class PoeCacherChrome() extends PoeCacher {cacher =>
  //GGG started requiring accountName for getting character inventories, this was used to store things in localstorage
  //in anticipation of the day that looty would support multiple accounts, that day has not yet come. So for now hack
  // around the issue
  val account = "UnknownAccount!"

  private object Store {
    val store = StoreMaster

    def clearLeague(league: String): Future[Unit] = {
      val otherLeagueChars = for {
        chars <- getChars.toList
        char <- chars.toList
        if char.league.toString !=?= league
      } yield {
        char
      }

      val tabsToClear = for {
        stis <- getStis(league).toList
        sti <- stis.toList
      } yield {
        clearStashTab(league, sti.i.toInt)
      }

      Future.sequence(
        List(setChars(otherLeagueChars.toJsArr), clearStis(league)) :::
          tabsToClear
      ).map(x => Unit)
    }

    def setAccountNameOverride(accountName: String) = store.set("accountNameOverride", accountName)
    def clearAccountNameOverride() = store.clear("accountNameOverride")
    def getAccountNameOverride(): Option[String] = store.get("accountNameOverride")

    def setAccountNameNet(accountName: String) = store.set("accountNameNet", accountName)
    def getAccountNameNet(): Option[String] = store.get("accountNameNet")

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
    def getAccountName = PoeRpcs.getAccountName() map { accountName =>
      Store.setAccountNameNet(accountName)
      accountName
    }

    def getCharsAndStore = PoeRpcs.getCharacters() map { chars =>
      Store.setChars(chars)
      chars
    }

    //Use the accountName variable here, in the future do this better
    def getInvAndStore(char: String): Future[Inventory] = {
      cacher.getAccountName.flatMap { accountName =>
        PoeRpcs.getCharacterInventory(accountName, char) map { inv =>
          Store.setInv(char, inv)
          inv
        }
      }
    }

    def getStisAndStore(league: String) = {
      cacher.getAccountName.flatMap { accountName =>
        PoeRpcs.getStashTabInfos(accountName, league) map { stis =>
          Store.setStis(league, stis)
          stis
        }
      }
    }

    def getStashTabAndStore(league: String, tabIdx: Int) = {
      cacher.getAccountName.flatMap { accountName =>
        PoeRpcs.getStashTab(accountName, league, tabIdx) map { stab =>
          Store.setStashTab(league, tabIdx, stab)
          stab
        }
      }
    }
  }

  override def getAccountName: Future[String] = {
    Store.getAccountNameOverride() match {
      case Some(accountName) => Future.successful(accountName)
      case None =>
        Store.getAccountNameNet() match {
          case Some(accountName) => Future.successful(accountName)
          case None => Net.getAccountName
        }
    }
  }


  override def getChars(forceNetRefresh: Boolean): Future[Characters] = {
    if (forceNetRefresh) {
      Net.getCharsAndStore
    } else {
      //Attempt to get get the chars from local storage, or else go out to the network and load
      Future.successful(Store.getChars) flatMap {
        case Some(chars) => Future(chars)
        case None => Net.getCharsAndStore
      }
    }

  }

  override def getInv(char: String, forceNetRefresh: Boolean): Future[Inventory] = {
    if (forceNetRefresh) {
      Net.getInvAndStore(char)
    } else {
      Future.successful(Store.getInv(char)) flatMap {
        case Some(inv) => Future(inv)
        case None => Net.getInvAndStore(char)
      }
    }
  }

  override def getStashInfo(league: String, forceNetRefresh: Boolean): Future[StashTabInfos] = {
    if (forceNetRefresh) {
      Net.getStisAndStore(league)
    } else {
      Future.successful(Store.getStis(league)) flatMap {
        case Some(stis) => Future(stis)
        case None => Net.getStisAndStore(league)
      }
    }
  }

  override def getStashTab(league: String, tabIdx: Int, forceNetRefresh: Boolean = false): Future[StashTab] = {
    if (forceNetRefresh) {
      Net.getStashTabAndStore(league, tabIdx)
    } else {
      Future.successful(Store.getStashTab(league, tabIdx)) flatMap {
        case Some(st) => Future(st)
        case None => Net.getStashTabAndStore(league, tabIdx)
      }
    }
  }


  override def clearLeague(league: String): Future[Unit] = Store.clearLeague(league)
  override def getAccountNameOverride(): Option[String] = Store.getAccountNameOverride()

  override def setAccountNameOverride(accountName: Option[String]): Unit = accountName match {
    case Some(accountName) => Store.setAccountNameOverride(accountName)
    case None => Store.clearAccountNameOverride()
  }
}