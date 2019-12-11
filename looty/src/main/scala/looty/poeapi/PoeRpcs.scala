package looty
package poeapi

import looty.util.AjaxHelp
import AjaxHelp.HttpRequestTypes
import AjaxHelp.HttpRequestTypes.HttpRequestType
import looty.util.JsPromises.JsFutureFailure

import scala.scalajs.js
import org.scalajs.jquery.JQueryStatic

import scala.concurrent.{Future, Promise}
import scala.util.{Success, Failure}
import looty.views.Alerter


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:45 PM
//////////////////////////////////////////////////////////////


object PoeRpcs {
  //catching some bugs, lets go fishing!
  val debugMode = false;

  val basePoeUrl = "https://www.pathofexile.com"

  import PoeTypes._

  def getAccountName(): Future[String] = {
    AjaxHelp[String](s"$basePoeUrl/my-account", HttpRequestTypes.Get, None).flatMap { html =>
      val Regex = "href=\"/account/view-profile/([^\"]*)".r.unanchored
      html match {
        case Regex(accountName) => Future.successful(accountName)
        case _ => Future.failed(new Throwable("Unable to regex parse account name from page."))
      }
    }
  }

  def getCharacters(): Future[Characters] = {
    enqueue[js.Array[CharacterInfo]](url = s"$basePoeUrl/character-window/get-characters", params = null)
  }

  def getPassiveSkills(accountNameRealm: (String, Option[String]), character: String): Future[PassivesTree] = {
    //Also reqData=0 is sent sometimes
    //TODO
    val anrs = {
      s"accountName=${accountNameRealm._1}" +
        accountNameRealm._2.map(r => s"&realm=$r").getOrElse("")
    }
    enqueue[PassivesTree](
      url = s"$basePoeUrl/character-window/get-passive-skills?$anrs&character=$character",
      params = null,
      reqType = HttpRequestTypes.Get
    )
  }

  def getCharacterInventory(accountNameRealm: (String, Option[String]), character: String): Future[Inventory] = {
    val p = newObject
    p.character = character
    p.accountName = accountNameRealm._1
    accountNameRealm._2.foreach(r => p.realm = r)
    enqueue[Inventory](url = s"$basePoeUrl/character-window/get-items", params = p)
  }

  def getStashTab(accountNameRealm: (String, Option[String]), league: String, tabIdx: Int): Future[StashTab] = {
    val p = newObject
    p.accountName = accountNameRealm._1
    p.league = league.toString
    p.tabIndex = tabIdx
    accountNameRealm._2.foreach(r => p.realm = r)
    enqueue[StashTab](url = s"$basePoeUrl/character-window/get-stash-items", params = p)
  }

  def getStashTabInfos(accountNameRealm: (String, Option[String]), league: String): Future[StashTabInfos] = {
    val p = newObject
    p.accountName = accountNameRealm._1
    accountNameRealm._2.foreach(r => p.realm = r)
    p.league = league.toString
    p.tabIndex = 0
    p.tabs = 1
    enqueue[StashTab](url = s"$basePoeUrl/character-window/get-stash-items", params = p).map { stab =>
      stab.tabs.toOption.getOrElse(sys.error(s"Stash tab was not set in ${stab.toJsonString}"))
    }
  }


  //We send all rpc calls through a queue, since GGG throttles
  //the calls to their api we will need to re-attempt certain
  //calls on throttle failures
  def enqueue[A](url: String, params: js.Any, reqType: HttpRequestType = HttpRequestTypes.Get): Future[A] = {
    val qi = QueueItem(url, params, reqType)
    Q.addToQueue(qi)
    scheduleQueueCheck(connectionRefused = false)
    qi.getFuture.asInstanceOf[Future[A]]
  }

  def get[A](url: String, params: js.Any, reqType: HttpRequestType): Future[A] = {
    val jQuery = global.jQuery.asInstanceOf[JQueryStatic]
    val p = Promise[A]()

    AjaxHelp[js.Any](url, reqType, params.nullSafe.map(s => jQuery.param(s))).onComplete {
      case Success(res) =>
        res match {
          case x if x == "false".asJsAny =>
            //GGG sends back "false" when the parameters aren't valid
            console.log("boolean")
            p.completeWith(Future.failed(BadParameters(s"called $url with ${JSON.stringify(params)}")))
          case res => res.asInstanceOf[js.Dynamic].error.nullSafe match {
            case Some(reason) =>
              console.log("reason", reason)
              //Typically this is a throttle was tripped failure
              p.completeWith(Future.failed(ThrottledFailure(reason.toString)))
            //Therefore we schedule a re-attempt in the future
            case None =>
              p.completeWith(Future(res.asInstanceOf[A]))
          }
        }
      case Failure(res) =>
        res match {
          case JsFutureFailure(reason) =>
            //Reason is from the jquery request
            reason.asJsAny.asJsDyn.status.asInstanceOf[Any] match {
              case status : Int =>
                if (status == 401) {
                  window.console.log("Received JSFuture Failure, status == 401 You are not logged into wwww.pathofexile.com site", res.asJsAny)
                  p.completeWith(Future.failed(UnauthorizedAccessFailure(""+res)))
                } else if (status == 429) {
                  window.console.log("Received JSFuture Failure, status == 429 Definitely throttling", res.asJsAny)
                  p.completeWith(Future.failed(ThrottledFailure(""+res)))
                } else {
                  window.console.log(s"Received JSFuture Failure, status == $status not sure maybe throttling", res.asJsAny)
                  p.completeWith(Future.failed(ThrottledFailure(""+res)))
                }
              case _ =>
                window.console.log("Received JSFuture Failure, no status checking for throttling", res.asJsAny)
                p.completeWith(Future.failed(ThrottledFailure(""+res)))
            }
          case _ =>
            window.console.log("Received an unknown failure, probably throttling", res.asJsAny)
            p.completeWith(Future.failed(ThrottledFailure(""+res)))
        }

    }
    p.future
  }

  def scheduleQueueCheck(connectionRefused: Boolean) {
    if (!willCheckQueue) {
      willCheckQueue = true
      global.setTimeout(() => checkQueue(), if (connectionRefused) coolOffMs else 0)
    }
  }

  def checkQueue() {
    willCheckQueue = false
    Q.peek() match {
      case Some(qi) =>
        qi.debugLog("Get")
        get[Any](qi.url, qi.params, qi.requestType).onComplete {
          case Success(x) =>
            qi.debugLog("Get => Success")
            Q.remove(qi)
            Alerter.info(s"Downloaded some data from pathofexile.com! If you like Looty please comment ${Alerter.showLink("http://www.pathofexile.com/forum/view-thread/832233", "here")} so more people find out about it! ")
            qi.success(x)
            checkQueue()
          case Failure(UnauthorizedAccessFailure(msg)) =>
            qi.debugLog(s"Get => Unauthorized Failure $msg")
            console.debug("Unauthorized, reconnecting ... ", qi.url, qi.params, msg)
            Alerter.error(s"""Unauthorized access to ${Alerter.showLink("https://www.pathofexile.com", "www.pathofexile.com")}, please log in there first.""")
            scheduleQueueCheck(connectionRefused = true)
          case Failure(ThrottledFailure(msg)) =>
            qi.debugLog(s"Get => Throttled Failure $msg")
            console.debug("Throttled, cooling off ", qi.url, qi.params, msg)
            Alerter.warn(s"""Throttled by www.pathofexile.com, while you wait stop by ${Alerter.showLink("http://www.pathofexile.com/forum/view-thread/832233","here")} and help other players discover the tool!""")
            scheduleQueueCheck(connectionRefused = true)
          case Failure(t) =>
            qi.debugLog(s"#### Get => Other Failure: $t")
            console.debug(s"#### Get $qi => Other Failure: $t")
            Q.remove(qi)
            Alerter.error("Unexpected connection error when talking to pathofexile.com, ensure that you are logged in.")
            qi.failure(t)
            checkQueue()
        }
      case None => //Do Nothing, queue is empty
        console.debug("Check Queue => None")
    }
  }


  private case class QueueItem(url: String, params: js.Any, requestType: AjaxHelp.HttpRequestTypes.HttpRequestType) {
    val id = Q.nextId
    private val promise = Promise[Any]()
    debugLog("Created Queue Item")
    def success(x: Any) = {
      debugLog("Success")
      if (!promise.isCompleted) {
        promise.success(x)
      } else {
        debugLog("#### DUPLICATE SUCCESS")
      }
    }
    def failure(t: Throwable) = {
      debugLog("Failure")
      if (!promise.isCompleted) {
        promise.failure(t)
      } else {
        debugLog("#### DUPLICATE FAILURE")
      }
    }
    def debugLog(msg: String) = if (debugMode) console.debug(msg, id, promise.isCompleted, url, params)

    def getFuture = promise.future
    def isCompleted = promise.isCompleted
  }

  private object Q {
    var id = 0
    def nextId = {
      id += 1
      id
    }
    def peek(): Option[QueueItem] = {
      val r = requestList.reverse.headOption
      r.map(_.debugLog("Peek"))
      r
    }

    def addToQueue(q: QueueItem) {
      q.debugLog("Add To Queue")
      requestList = q :: requestList
    }
    def remove(q: QueueItem) {
      requestList = requestList.filter(_.id != q.id)
    }

    private var requestList = List.empty[QueueItem]
  }

  private var willCheckQueue = false
  //How long to wait after we hit the throttle before checking again
  val coolOffMs = 10000

  //TODO?
  //connections are handled by response headers
  //x-rate-limit-account: 45:60:60,240:240:900
  //x-rate-limit-account-state: 23:60:0,23:240:0
  //limit is 45 requests per 60s time frame, 60s counting from time of 1req
  //here we made 23 already
  //if we hit 45 req in 12 sec (which for me - looty makes 4req/s is totaly achievable) than we wait next 48s idle :(

  case class BadParameters(msg: String) extends Exception
  case class ThrottledFailure(msg: String) extends Exception
  case class UnauthorizedAccessFailure(msg: String) extends Exception

}