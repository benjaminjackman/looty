package cgta.ojs
package lang

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/11/13 12:17 AM
//////////////////////////////////////////////////////////////


trait JsConsole extends js.Object {
  def debug(xs : Any*)
  def log(xs : Any*)
  def warn(xs : Any*)
  def error(xs : Any*)
}
