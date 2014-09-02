package cgta.ojs
package lang

import scala.scalajs.js
import scala.concurrent.ExecutionContext



//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/11/13 12:18 AM
//////////////////////////////////////////////////////////////


trait OJsDsl extends JsExtensions {

  val global = js.Dynamic.global
  val console = global.console.asInstanceOf[JsConsole]
  val JSON = js.JSON
  val undefined = global.undefined



  def newObject = js.Object().asInstanceOf[js.Dynamic]

  implicit object QueueExecutionContext extends ExecutionContext {

    def execute(runnable: Runnable) = {
      val lambda: js.Function = () =>
        try {runnable.run()} catch {case t: Throwable => reportFailure(t)}
      js.Dynamic.global.setTimeout(lambda, 0)
    }

    def reportFailure(t: Throwable) {
      Console.err.println("Failure in async execution: " + t)
      t.printStackTrace()
    }


  }


}
