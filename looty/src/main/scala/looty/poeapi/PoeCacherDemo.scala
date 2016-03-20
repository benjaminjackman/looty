package looty
package poeapi

import looty.util.AjaxHelp

import scala.concurrent.Future
import looty.poeapi.PoeTypes.{Characters, Inventory, StashTab}
import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/13/14 3:07 AM
//////////////////////////////////////////////////////////////


//class PoeCacherDemo extends PoeCacher {
//  //Demo version needs to just read the whole store off disk then have it in a data structure
//  private var jsonCache: Option[js.Dynamic] = None
//  private def loadJson(): Future[js.Dynamic] = {
//    jsonCache.map(Future.successful).getOrElse {
//      AjaxHelp.get("data/sample-items.json").map { x =>
//        jsonCache = Some(x)
//        x
//      }
//    }
//  }
//  private val account: String = "UnknownAccount!"
//
//
//  def getAccountName: Future[String] = Future.successful("DemoAccount")
//  override def setAccountNameOverride(accountName: Option[String]): Unit = {}
//  override def getAccountNameOverride(): Option[String] = None
//
//  def getChars(forceNetRefresh: Boolean): Future[PoeTypes.Characters] =
//    loadJson().map(_.asJsDict[Characters](s"$account-characters"))
//
//  def getInv(char: String, forceNetRefresh: Boolean): Future[Inventory] =
//    loadJson().map(_.asJsDict[Inventory](s"$account-$char-inventory"))
//
//  def getStashTabInfos(league: String, forceNetRefresh: Boolean): Future[PoeTypes.StashTabInfos] =
//    loadJson().map(_.asJsDict[PoeTypes.StashTabInfos](s"$account-$league-stis"))
//
//  def getStashTab(league: String, tabIdx: Int, forceNetRefresh: Boolean): Future[StashTab] =
//    loadJson().map(_.asJsDict[StashTab](s"$account-$league-$tabIdx-stis"))
//
//  def clearLeague(league: String): Future[Unit] = Future.successful(Unit)
//
//}