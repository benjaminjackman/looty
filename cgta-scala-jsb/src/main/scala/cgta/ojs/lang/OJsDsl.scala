package cgta.ojs
package lang

import scala.scalajs.js
import scala.concurrent.Future


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/11/13 12:18 AM
//////////////////////////////////////////////////////////////


trait OJsDsl extends JsExtensions {

  val global = js.Dynamic.global
  val console = global.console.asInstanceOf[JsConsole]
  val JSON = global.JSON
  val undefined = global.undefined

  def newObject = js.Object().asInstanceOf[js.Dynamic]
  def debugger = js.eval("debugger")

  //Converts a callback style into a future
  //el.on("click", (x) => console.log(x))
  //decant(el.on("click", _)).onSuccess(console.log(_))
  def decant1[A](cb0: ((A) => Unit) => Unit): Future[A] = {
    val p = JsPromise[A]()
    def cb(a: A) {
      p.success(a)
    }
    cb0(cb)
    p.future
  }
  def decant0(cb0: (() => Unit) => Unit): Future[Unit] = {
    val p = JsPromise[Unit]()
    def cb() {
      p.success(Unit)
    }
    cb0(cb)
    p.future
  }


  implicit val jsExecutionContext = JsFuture.InternalCallbackExecutor

}
