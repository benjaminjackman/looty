package looty
package chrome

import scala.scalajs.js.annotation.JSName
import scala.scalajs.js
import scala.concurrent.{Promise, Future}


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/11/13 12:49 AM
//////////////////////////////////////////////////////////////


object ChromeStorageLocal {
  implicit class LocalExt(val x: ChromeStorageLocal) extends AnyVal {
    def getAll(): Future[js.Any] = {
      val p = Promise[js.Any]
      x.get((o: js.Any) => p.success(o))
      p.future
    }

    def futGet[B](key: String): Future[Option[B]] = {
      val p = Promise[Option[B]]()
      def setPromise(kv: js.Any) {
        p.success(kv.asJsDict[B](key).nullSafe)
      }
      x.get(key, setPromise _)
      p.future
    }
    def futSet(key: String, value: js.Any): Future[Unit] = {
      val p = Promise[Unit]()
      def setPromise() {
        p.success(Unit)
      }
      val kv = newObject.asJsDict[js.Any]
      kv(key) = value
      x.set(kv, setPromise _)
      p.future
    }
    def futClear(key: String): Future[Unit] = {
      val p = Promise[Unit]()
      def clearPromise() {
        p.success(Unit)
      }
      x.clear(clearPromise _)
      p.future
    }
  }
}


trait ChromeStorageLocal extends js.Object {
  val QUOTA_BYTES: Double = ???
  def clear(): Unit = ???
  def clear(cb: js.Function0[Unit]): Unit = ???

  def set(items: js.Any): Unit = ???
  def set(items: js.Any, cb: js.Function0[Unit]): Unit = ???

  def get(cb: js.Function1[js.Any, Unit]): Unit = ???

  def get(keys: js.Any): Unit = ???
  def get(keys: js.Any, cb: js.Function1[js.Any, Unit]): Unit = ???

  def remove(keys: js.Any, cb: js.Function0[Unit]): Unit = ???
}


@JSName("chrome.storage")
object ChromeStorage extends js.Object {
  val local: ChromeStorageLocal = ???
}




