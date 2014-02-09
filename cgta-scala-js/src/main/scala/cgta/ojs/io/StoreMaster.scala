package cgta.ojs
package io

import scala.concurrent.Future
import cgta.ojs.chrome.ChromeStorage
import scala.scalajs.js
import scala.scalajs.js.Dictionary


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/31/13 1:18 PM
//////////////////////////////////////////////////////////////


object StoreMaster {
  private val backingStore = ChromeStorage.local
  private val values = scala.collection.mutable.Map.empty[String, js.Any]

  def init(): Future[Unit] = {
    console.debug("Store Master Init")
    backingStore.getAll().map { allObjs =>
      val dict = allObjs.asInstanceOf[js.Dictionary]
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

  def set(key: String, value: js.Any) {
    values.put(key, value)
    backingStore.futSet(key, value)
  }

  def clear(key: String) {
    values.remove(key)
    backingStore.futClear(key)
  }

}