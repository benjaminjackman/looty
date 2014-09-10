package looty.util

import cgta.ojs._
import cgta.ojs.lang.JsPromises
import org.scalajs.jquery.{JQueryAjaxSettings, JQueryStatic}

import scala.concurrent.Future
import scala.scalajs.js

//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/9/13 11:15 PM
//////////////////////////////////////////////////////////////


object AjaxHelp {
  val jQuery: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]

  object HttpRequestTypes extends Enumeration {
    type HttpRequestType = Value
    val Get = Value("Get")
    val Post = Value("Post")
    val Put = Value("Put")
    val Delete = Value("Delete")
  }

  def apply[A](url: String, requestType: HttpRequestTypes.HttpRequestType, data: Option[String]): Future[A] = {
    JsPromises.wrap[A] {
      val req = js.Dynamic.literal(url = url, `type`=requestType.toString).asJsDic[String]
      data.foreach(data => req("data") = data)
      jQuery.ajax(req.asInstanceOf[JQueryAjaxSettings])
    }
  }

  def get[A](url : String): Future[A] = apply(url, HttpRequestTypes.Get, None)
}