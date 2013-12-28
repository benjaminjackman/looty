package cgta.ojs.lang

import scala.scalajs.js
//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/17/13 4:37 PM
//////////////////////////////////////////////////////////////


import scala.language.dynamics

class JsObjectBuilder extends Dynamic {
  def applyDynamicNamed[A](name: String)(args: (String, js.Any)*): A = {
    if (name != "apply") {
      sys.error("Call jsObj like this jsObj(x=1, y=2) which returns a javascript object that is {x:1,y:2}")
    }
    val obj = js.Object().asInstanceOf[js.Dictionary]
    args.foreach { case (name, value) =>
      obj(name) = value
    }
    obj.asInstanceOf[A]
  }
  //Allows for jsObj()
  def applyDynamic[A](name: String)(args: Nothing*) = {
    if (args.nonEmpty) {
      sys.error("Call jsObj only with named parameters.")
    }
    js.Object().asInstanceOf[A]
  }
}
