package looty
package poeapi

import looty.util.AjaxHelp

import scala.concurrent.{ExecutionContext, Future}
import looty.poeapi.PoeTypes.{Characters, Inventory, Leagues, StashTab}

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/13/14 3:07 AM
//////////////////////////////////////////////////////////////



class PoeCacherDemo extends PoeCacher {
  //Demo version needs to just read the whole store off disk then have it in a data structure
  private var jsonCache: Option[js.Dynamic] = None
  private val account: String = "UnknownAccount!"

  private def loadJson(): Future[js.Dynamic] = {
    jsonCache.map(Future.successful).getOrElse {
      // TODO update sample-items.json
      // TODO Get more data with various items having affixes/properties/types from previous leagues
      // [how-to](./HowTo-sample-items-file.md)
      AjaxHelp.get[js.Dynamic]("/data/sample-items-mercenaries.json").map { x =>
        jsonCache = Some(x)
        x
      }
    }
  }

  def getAccountName: Future[String] = Future.successful("UnknownAccount!")
  override def setAccountNameOverride(accountName: Option[String]): Unit = {}
  override def getAccountNameOverride(): Option[String] = None

  def getChars(forceNetRefresh: Boolean): Future[PoeTypes.Characters] =
    loadJson().map(_.asJsDict[Characters](s"$account-characters"))

  def getInv(char: String, forceNetRefresh: Boolean): Future[Inventory] =
    loadJson().map(_.asJsDict[Inventory](s"$account-$char-inventory"))

  def getStashTabInfos(league: String, forceNetRefresh: Boolean): Future[PoeTypes.StashTabInfos] =
    loadJson().map(_.asJsDict[PoeTypes.StashTabInfos](s"$account-$league-stis"))

  def getStashTab(league: String, tabIdx: Int, forceNetRefresh: Boolean): Future[StashTab] =
loadJson().map(_.asJsDict[StashTab](s"$account-$league-$tabIdx-stis"))

  def clearLeague(league: String): Future[Unit] = Future.successful(Unit)

  //added missing ones
  override def getAccountNameAndRealm: Future[(String, Option[String])] = {
    val f1 = getAccountName
    val f2 = getRealm
    f1.zip(f2)
  }

  override def getRealmOverride(): Option[String] = Option("DemoRealm")
  override def getRealm: Future[Option[String]] = Future.successful(Some("DemoRealm"))
  override def setRealmOverride(realm: _root_.scala.Option[_root_.scala.Predef.String]): Unit = {}

  override def init(implicit ec: ExecutionContext): Future[_] = {
    Future.sequence(List(Leagues.init(this)))
  }
}