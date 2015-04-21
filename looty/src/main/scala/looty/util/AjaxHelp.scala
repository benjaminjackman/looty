package looty
package util

import org.scalajs.jquery.JQueryAjaxSettings

import scala.concurrent.{Promise, Future}
import scala.scalajs.js

//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/9/13 11:15 PM
//////////////////////////////////////////////////////////////



object JsPromises {

  case class JsFutureFailure(reason: Any) extends Exception

  def wrap[A](that: js.Dynamic): Future[A] = {
    def wrapAPlusReason(reason: js.Any): Throwable = {
      reason match {
        case reason: Throwable => reason
        case x => new JsFutureFailure(reason)
      }
    }

    val p = Promise[A]()
    that.`then`(
      (data: js.Any) => p.success(data.asInstanceOf[A]),
      (reason: js.Any) => p.failure(wrapAPlusReason(reason)))
    p.future
  }
}

object AjaxHelp {

  object HttpRequestTypes extends Enumeration {
    type HttpRequestType = Value
    val Get = Value("Get")
    val Post = Value("Post")
    val Put = Value("Put")
    val Delete = Value("Delete")
  }

  def apply[A](url: String, requestType: HttpRequestTypes.HttpRequestType, data: Option[String]): Future[A] = {
    JsPromises.wrap[A] {
      val req = js.Dynamic.literal(url = url, `type`=requestType.toString).asJsDict[String]
      data.foreach(data => req("data") = data)
      jq.ajax(req.asInstanceOf[JQueryAjaxSettings])
    }
  }

  def get[A](url : String): Future[A] = apply(url, HttpRequestTypes.Get, None)
}