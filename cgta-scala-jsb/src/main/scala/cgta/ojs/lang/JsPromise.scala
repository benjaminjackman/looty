package cgta.ojs
package lang

import scala.util.{Failure, Success, Try}
import scala.concurrent.duration.Duration
import scala.concurrent.{ExecutionContext, CanAwait, Promise, Future}


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/10/13 1:51 PM
//////////////////////////////////////////////////////////////




object JsPromise {
  /** Creates a promise object which can be completed with a value.
    *
    * @tparam T       the type of the value in the promise
    * @return         the newly created `Promise` object
    */
  def apply[T](): Promise[T] = new DefaultImpl[T]()

  /** Creates an already completed Promise with the specified exception.
    *
    * @tparam T       the type of the value in the promise
    * @return         the newly created `Promise` object
    */
  def failed[T](exception: Throwable): Promise[T] = new KeptImpl[T](Failure(exception))

  /** Creates an already completed Promise with the specified result.
    *
    * @tparam T       the type of the value in the promise
    * @return         the newly created `Promise` object
    */
  def successful[T](result: T): Promise[T] = new KeptImpl[T](Success(result))

  private[lang] class DefaultImpl[T] extends Promise[T] with Future[T] with JsFuture.Impl[T] {
    private var completion = Option.empty[Try[T]]
    private var watchers   = List.empty[Try[T] => Any]

    override def future: Future[T] = this

    override def tryComplete(result: Try[T]): Boolean = {
      completion match {
        case Some(_) => false
        case None => {
          completion = Some(result)
          watchers.reverse.foreach { wf =>
            global.setTimeout({ () =>
              wf(result)
            }, 0)
          }
          watchers = Nil
          true
        }
      }
    }

    override def onComplete[U](func: (Try[T]) => U)(implicit executor: ExecutionContext): Unit = {
      value match {
        case Some(value) => func(value)
        case None => watchers ::= func
      }
    }

    override def isCompleted: Boolean = completion.isDefined
    override def value: Option[Try[T]] = completion

    def ready(atMost: Duration)(implicit permit: CanAwait): this.type = ???
    def result(atMost: Duration)(implicit permit: CanAwait): T = ???
  }

  private[lang] class KeptImpl[T](private val result: Try[T]) extends Promise[T] with JsFuture.Impl[T] {
    override def future: Future[T] = this
    override def tryComplete(result: Try[T]): Boolean = false
    override def onComplete[U](func: (Try[T]) => U)(implicit executor: ExecutionContext): Unit = {
      func(result)
    }
    override def isCompleted: Boolean = true
    override def value: Option[Try[T]] = Some(result)

    def ready(atMost: Duration)(implicit permit: CanAwait): this.type = ???
    def result(atMost: Duration)(implicit permit: CanAwait): T = ???
  }

}