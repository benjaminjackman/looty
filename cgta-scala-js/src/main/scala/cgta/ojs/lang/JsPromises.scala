package cgta.ojs.lang

import scala.scalajs.js
import scala.concurrent.{Promise, Future}


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/23/14 1:30 AM
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