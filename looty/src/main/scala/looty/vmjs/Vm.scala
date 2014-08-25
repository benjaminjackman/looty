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
  def toJSON() : js.Object = ???
}

trait VmRealm extends js.Object {
  val global : js.Dynamic = ???
}

trait Vm extends js.Object {
  def eval(s : String) : js.Any = ???
  def compile(s : String) : VmScript = ???
  def run(s : VmScript) : js.Any = ???
  def fromJSON(s : js.Object) : VmScript = ???
  val realm : VmRealm = ???

}