package looty.poeapi
import looty.poeapi.PoeTypes.Inventory

import scala.concurrent.ExecutionContext
import looty.poeapi.PoeTypes.StashTab
import looty.poeapi.PoeTypes.StashTabInfos

import scala.concurrent.Future
import looty.poeapi.PoeTypes.Characters


//////////////////////////////////////////////////////////////
// Copyright (c) 2016 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 3/20/16 3:42 PM
//////////////////////////////////////////////////////////////


class PoeCacherExileTools extends PoeCacher {
  override def init(implicit ec: ExecutionContext): Future[_] = ???
  override def setAccountNameOverride(accountName: Option[String]): Unit = ???
  override def getInv(char: String, forceNetRefresh: Boolean): Future[Inventory] = ???
  override def getStashTabInfos(league: String, forceNetRefresh: Boolean): Future[StashTabInfos] = ???
  override def getAccountNameOverride(): Option[String] = ???
  override def getStashTab(league: String, tabIdx: Int, forceNetRefresh: Boolean): Future[StashTab] = ???
  override def getChars(forceNetRefresh: Boolean): Future[Characters] = ???
  override def clearLeague(league: String): Future[Unit] = ???
  override def getAccountName: Future[String] = ???
  override def getRealmOverride(): Option[String] = ???
  override def setRealmOverride(realm: Option[String]): Unit = ???
  override def getRealm : Future[Option[String]] = ???
  override def getAccountNameAndRealm: Future[(String, Option[String])] = ???
}