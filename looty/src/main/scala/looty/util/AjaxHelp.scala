package looty
package util

import org.scalajs.jquery.JQueryAjaxSettings

import scala.concurrent.Future
import scala.scalajs.js

//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/9/13 11:15 PM
//////////////////////////////////////////////////////////////


object AjaxHelp {

  object HttpRequestTypes extends Enumeration {
    type HttpRequestType = Value
    val Get = Value("Get")
    val Post = Value("Post")
    val Put = Value("Put")
    val Delete = Value("Delete")
  }

  def apply[A](url: String, requestType: HttpRequestTypes.HttpRequestType, data: Option[String]): Future[A] = {
    Future[A] {
      val req = js.Dynamic.literal(url = url, `type`=requestType.toString).asJsDict[String]
      data.foreach(data => req("data") = data)
      jq.ajax(req.asInstanceOf[JQueryAjaxSettings]).asInstanceOf[A]
    }
  }

  def get[A](url : String): Future[A] = apply(url, HttpRequestTypes.Get, None)
}