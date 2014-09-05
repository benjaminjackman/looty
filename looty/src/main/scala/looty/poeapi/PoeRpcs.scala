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

  def getPassiveSkills(character: String): Future[PassivesTree] = {
    enqueue[PassivesTree](
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
    requestList = qi :: requestList
    scheduleQueueCheck(wasThrottled = false)
    qi.getFuture.asInstanceOf[Future[A]]
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
    val q = requestList.reverse
    q.headOption match {
      case Some(qi) =>
        get[Any](qi.url, qi.params, qi.requestType).onComplete {
          case Success(x) =>
            requestList = q.tail.reverse
            Alerter.info(s"Downloaded some data from pathofexile.com! If you like Looty please comment ${Alerter.featuresLink("here")} so more people find out about it! Feedback and suggestions are very welcome!")
            qi.success(x)
            checkQueue()
          case Failure(ThrottledFailure(msg)) =>
            console.log("Throttled, cooling off ", qi.url, qi.params, msg)
            Alerter.warn(s"""Throttled by pathofexile.com, while you wait why not stop by ${Alerter.featuresLink("here")} and leave some feedback and help other players discover the tool!""")
            scheduleQueueCheck(wasThrottled = true)
          case Failure(t) =>
            requestList = q.tail.reverse
            Alerter.error("Unexpected connection error when talking to pathofexile.com, ensure that you are logged in.")
            qi.failure(t)
            checkQueue()

        }
      case None => //Do Nothing, queue is empty
    }
  }

  private case class QueueItem(url: String, params: js.Any, requestType: AjaxHelp.HttpRequestTypes.HttpRequestType) {
    private val promise = Promise[Any]()
    def success(x : Any) = {
      if (!promise.isCompleted) promise.success(x)
    }
    def failure(t : Throwable) = {
      if (!promise.isCompleted) promise.failure(t)
    }
    def getFuture = promise.future
  }

  private var requestList   = List.empty[QueueItem]
  private var willCheckQueue = false
  //How long to wait after we hit the throttle before checking again
  val coolOffMs = 10000

  case class BadParameters(msg: String) extends Exception
  case class ThrottledFailure(msg: String) extends Exception


}