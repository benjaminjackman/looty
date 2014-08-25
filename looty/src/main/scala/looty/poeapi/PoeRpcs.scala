package looty
package poeapi

import cgta.ojs.io.AjaxHelp.HttpRequestTypes
import cgta.ojs.io.AjaxHelp.HttpRequestTypes.HttpRequestType

import scala.scalajs.js
import org.scalajs.jquery.JQueryStatic
import scala.concurrent.{Promise, Future}
import scala.collection.immutable
import cgta.ojs.io.AjaxHelp
import scala.util.{Failure, Success}
import looty.views.Alerter


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:45 PM
//////////////////////////////////////////////////////////////


object PoeRpcs {

  import PoeTypes._


  def getCharacters(): Future[Characters] = {
    enqueue[js.Array[CharacterInfo]](url = "http://www.pathofexile.com/character-window/get-characters", params = null)
  }

  def getPassiveSkills(character: String): Future[js.Dynamic] = {
    enqueue[js.Dynamic](
      url = s"http://www.pathofexile.com/character-window/get-passive-skills?character=$character",
      params = null,
      reqType = HttpRequestTypes.Get
    )
  }

  def getCharacterInventory(character: String): Future[Inventory] = {
    val p = newObject
    p.character = character
    enqueue[Inventory](url = "http://www.pathofexile.com/character-window/get-items", params = p)
  }

  def getStashTab(league: String, tabIdx: Int): Future[StashTab] = {
    val p = newObject
    p.league = league.toString
    p.tabIndex = tabIdx

    enqueue[StashTab](url = "http://www.pathofexile.com/character-window/get-stash-items", params = p)
  }

  def getStashTabInfos(league: String): Future[StashTabInfos] = {
    val p = newObject
    p.league = league.toString
    p.tabIndex = 0
    p.tabs = 1

    enqueue[StashTab](url = "http://www.pathofexile.com/character-window/get-stash-items", params = p).map { stab =>
      stab.tabs.toOption.getOrElse(sys.error(s"Stash tab was not set in ${stab.toJsonString}"))
    }
  }


  //We send all rpc calls through a queue, since GGG throttles
  //the calls to their api we will need to re-attempt certain
  //calls on throttle failures
  def enqueue[A](url: String, params: js.Any, reqType: HttpRequestType = HttpRequestTypes.Post): Future[A] = {
    val qi = QueueItem(url, params, reqType)
    requestQueue = requestQueue.enqueue(qi)
    scheduleQueueCheck(wasThrottled = false)
    qi.promise.future.asInstanceOf[Future[A]]
  }

  def get[A](url: String, params: js.Any, reqType: HttpRequestType): Future[A] = {
    val jQuery = global.jQuery.asInstanceOf[JQueryStatic]
    AjaxHelp(url, reqType, params.nullSafe.map(s => jQuery.param(s))).flatMap { res: js.Any =>
      res match {
        case x: js.prim.Boolean =>
          //GGG sends back "false" when the parameters aren't valid
          Future.failed(BadParameters(s"called $url with ${JSON.stringify(params)}"))
        case res => res.asInstanceOf[js.Dynamic].error.nullSafe match {
          case Some(reason) =>
            //Typically this is a throttle was tripped failure
            Future.failed(ThrottledFailure(reason.toString))
          //Therefore we schedule a re-attempt in the future
          case None => Future(res.asInstanceOf[A])
        }
      }
    }
  }

  def scheduleQueueCheck(wasThrottled: Boolean) {
    if (!willCheckQueue) {
      willCheckQueue = true
      global.setTimeout(checkQueue _, if (wasThrottled) coolOffMs else 0)
    }
  }

  def checkQueue() {
    willCheckQueue = false
    requestQueue.headOption match {
      case Some(qi) =>
        get[Any](qi.url, qi.params, qi.requestType).onComplete {
          case Success(x) =>
            requestQueue = requestQueue.tail
            Alerter.info(s"Downloaded some data from pathofexile.com! Check out the info on the newest features as of ${Alerter.featuresDate} ${Alerter.featuresLink("here")}!")
            qi.promise.success(x)
            checkQueue()
          case Failure(ThrottledFailure(msg)) =>
            console.log("Throttled, cooling off ", qi.url, qi.params, msg)
            Alerter.warn(s"""Throttled by pathofexile.com, while you wait <a target="_blank" href="http://i.imgur.com/AmvBbcz.jpg">why not</a> stop by ${Alerter.featuresLink("here")} and learn about the latest features of (${Alerter.featuresDate})?""")
            scheduleQueueCheck(wasThrottled = true)
          case Failure(t) =>
            requestQueue = requestQueue.tail
            Alerter.error("Unexpected connection error when talking to pathofexile.com, ensure that you are logged in.")
            qi.promise.failure(t)
            checkQueue()

        }
      case None => //Do Nothing, queue is empty
    }
  }

  private case class QueueItem(url: String, params: js.Any, requestType: AjaxHelp.HttpRequestTypes.HttpRequestType) {
    val promise = Promise[Any]()
  }

  private var requestQueue   = immutable.Queue.empty[QueueItem]
  private var willCheckQueue = false
  //How long to wait after we hit the throttle before checking again
  val coolOffMs = 10000

  case class BadParameters(msg: String) extends Exception
  case class ThrottledFailure(msg: String) extends Exception


}