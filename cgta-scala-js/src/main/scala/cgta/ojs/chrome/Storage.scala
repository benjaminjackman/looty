package cgta.ojs
package chrome

import scala.scalajs.js.annotation.JSName
import scala.scalajs.js
import scala.concurrent.Future
import cgta.ojs.lang.JsPromise

//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/11/13 12:49 AM
//////////////////////////////////////////////////////////////


@JSName("chrome.storage")
object Storage extends js.Object {


  @JSName("chrome.storage.local")
  val local: Local = ???

  object Local {
    implicit class LocalExt(val x: Local) extends AnyVal {
      def futGet[B](key: js.String): Future[Option[B]] = {
        val p = JsPromise[Option[B]]()
        def setPromise(kv: js.Any) {
          p.success(kv.toJsDic(key).nullSafe.map(_.asInstanceOf[B]))
        }
        x.get(key, setPromise _)
        p.future
      }
      def futSet(key: js.String, value : js.Any) : Future[Unit] = {
        val p = JsPromise[Unit]()
        def setPromise() {
          p.success(Unit)
        }
        val kv = newObject.toJsDic
        kv(key) = value
        x.set(kv, setPromise _)
        p.future
      }
    }
  }


  trait Local extends js.Object {
    val QUOTA_BYTES: js.Number = ???
    def clear() = ???
    def clear(cb: js.Function1[js.Any, Unit]) = ???

    def set(items: js.Any) = ???
    def set(items: js.Any, cb: js.Function0[Unit]) = ???

    //    def get(key: js.String) = ???
    //    def get(key: js.String, cb: js.Dynamic => Unit) = ???
    //
    //    def get(keys: js.Array[js.String]) = ???
    //    def get(keys: js.Array[js.String], cb: js.Dynamic => Unit) = ???

    def get(keys: js.Any) = ???
    def get(keys: js.Any, cb: js.Function1[js.Any, Unit]) = ???

    def remove(keys: js.Any, cb: js.Function0[Unit]) = ???
  }


}