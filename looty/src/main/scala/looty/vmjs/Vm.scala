package looty
package vmjs

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 12:17 PM
//////////////////////////////////////////////////////////////

object Vm {
  def apply() = js.Dynamic.newInstance(global.Vm)()

  def practice() {
    val vm = Vm()

  }
}

trait VmScript extends js.Object {
  def toJSON() : js.Object = js.native
}

trait VmRealm extends js.Object {
  val global : js.Dynamic = js.native
}

trait Vm extends js.Object {
  def eval(s : String) : js.Any = js.native
  def compile(s : String) : VmScript = js.native
  def run(s : VmScript) : js.Any = js.native
  def fromJSON(s : js.Object) : VmScript = js.native
  val realm : VmRealm = js.native

}