package looty
package chrome

import scala.scalajs.js
import scala.concurrent.{Future, ExecutionContext}
import scala.scalajs.js.Dictionary


//////////////////////////////////////////////////////////////
// Created by bjackman @ 3/23/14 1:53 AM
//////////////////////////////////////////////////////////////


object StoreMaster {
  private val backingStore = ChromeStorage.local

  private val values = scala.collection.mutable.Map.empty[String, js.Any]


  def init()(implicit context: ExecutionContext): Future[Unit] = {
    console.debug("Store Master Init")
    backingStore.getAll().map { allObjs =>
      val dict = allObjs.asInstanceOf[js.Dictionary[js.Any]]
      Dictionary.propertiesOf(allObjs).iterator.foreach { key =>
        values(key) = dict(key)
      }
      console.debug("Store Master Complete")
      Unit
    }
  }

  def get[A <: js.Any](key: String): Option[A] = {
    values.get(key).map(_.asInstanceOf[A])
  }

  def set(key: String, value: js.Any): Future[Unit] = {
    values.put(key, value)
    backingStore.futSet(key, value)
  }

  def clear(key: String): Future[Unit] = {
    values.remove(key)
    backingStore.futClear(key)
  }

}