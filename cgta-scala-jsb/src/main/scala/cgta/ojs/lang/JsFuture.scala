package cgta.ojs
package lang

import scala.scalajs.js
import scala.concurrent.{Promise, ExecutionContext, Future}
import scala.util.{Failure, Success, Try}
import scala.collection.generic.CanBuildFrom
import scala.util.control.NonFatal
import scala.reflect.ClassTag


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/12/13 6:48 AM
//////////////////////////////////////////////////////////////



object JsFuture {

  case class JsFutureFailure(reason: Any) extends Exception

  def wrapPromisesAPlus[A](that: js.Dynamic): Future[A] = {
    def wrapAPlusReason(reason: js.Any): Throwable = {
      reason match {
        case reason: Throwable => reason
        case x => new JsFutureFailure(reason)
      }
    }

    val p = JsPromise[A]()
    that.`then`((data: js.Any) => p.success(data.asInstanceOf[A]),
      (reason: js.Any) => p.failure(wrapAPlusReason(reason))
    )
    p.future
  }

  val Promise = JsPromise

  object InternalCallbackExecutor extends ExecutionContext {
    def execute(runnable: Runnable): Unit = {
      js.Dynamic.global.setTimeout(() => {
        runnable.run()
      }, 0)
    }
    def reportFailure(t: Throwable): Unit = {
      console.error(t.toString)
    }
  }

  val toBoxed = Map[Class[_], Class[_]](
    classOf[Boolean] -> classOf[java.lang.Boolean],
    classOf[Byte] -> classOf[java.lang.Byte],
    classOf[Char] -> classOf[java.lang.Character],
    classOf[Short] -> classOf[java.lang.Short],
    classOf[Int] -> classOf[java.lang.Integer],
    classOf[Long] -> classOf[java.lang.Long],
    classOf[Float] -> classOf[java.lang.Float],
    classOf[Double] -> classOf[java.lang.Double],
    classOf[Unit] -> classOf[scala.runtime.BoxedUnit]
  )


  /** Creates an already completed Future with the specified exception.
    *
    * @tparam T       the type of the value in the future
    * @return         the newly created `Future` object
    */
  def failed[T](exception: Throwable): Future[T] = Promise.failed(exception).future

  /** Creates an already completed Future with the specified result.
    *
    * @tparam T       the type of the value in the future
    * @return         the newly created `Future` object
    */
  def successful[T](result: T): Future[T] = Promise.successful(result).future

  /** Starts an asynchronous computation and returns a `Future` object with the result of that computation.
    *
    * The result becomes available once the asynchronous computation is completed.
    *
    * @tparam T       the type of the result
    * @param body     the asychronous computation
    * @param execctx  the execution context on which the future is run
    * @return         the `Future` holding the result of the computation
    */
  def apply[T](body: => T)(implicit execctx: ExecutionContext): Future[T] = new Promise.KeptImpl[T](Try(body))

  /** Simple version of `Futures.traverse`. Transforms a `TraversableOnce[Future[A]]` into a `Future[TraversableOnce[A]]`.
    * Useful for reducing many `Future`s into a single `Future`.
    */
  def sequence[A, M[_] <: TraversableOnce[_]](in: M[Future[A]])(implicit cbf: CanBuildFrom[M[Future[A]], A, M[A]], executor: ExecutionContext): Future[M[A]] = {
    in.foldLeft(Promise.successful(cbf(in)).future) {
      (fr, fa) => for (r <- fr; a <- fa.asInstanceOf[Future[A]]) yield (r += a)
    } map (_.result)
  }

  /** Returns a `Future` to the result of the first future in the list that is completed.
    */
  def firstCompletedOf[T](futures: TraversableOnce[Future[T]])(implicit executor: ExecutionContext): Future[T] = {
    val p = Promise[T]()

    val completeFirst: Try[T] => Unit = p tryComplete _
    futures.foreach(_ onComplete completeFirst)

    p.future
  }

  /** Returns a `Future` that will hold the optional result of the first `Future` with a result that matches the predicate.
    */
  def find[T](futurestravonce: TraversableOnce[Future[T]])(predicate: T => Boolean)(implicit executor: ExecutionContext): Future[Option[T]] = {
    val futures = futurestravonce.toBuffer
    if (futures.isEmpty) Promise.successful[Option[T]](None).future
    else {
      val result = Promise[Option[T]]()
      var ref = futures.size
      val search: Try[T] => Unit = v =>
        try {
          v match {
            case Success(r) => if (predicate(r)) result tryComplete Success(Some(r))
            case _ =>
          }
        } finally {
          ref -= 1
          if (ref == 0) {
            result tryComplete Success(None)
          }
        }

      futures.foreach(_ onComplete search)

      result.future
    }
  }

  /** A non-blocking fold over the specified futures, with the start value of the given zero.
    * The fold is performed on the thread where the last future is completed,
    * the result will be the first failure of any of the futures, or any failure in the actual fold,
    * or the result of the fold.
    *
    * Example:
    * {{{
    *    val result = Await.result(Future.fold(futures)(0)(_ + _), 5 seconds)
    * }}}
    */
  def fold[T, R](futures: TraversableOnce[Future[T]])(zero: R)(foldFun: (R, T) => R)(implicit executor: ExecutionContext): Future[R] = {
    if (futures.isEmpty) Promise.successful(zero).future
    else sequence(futures).map(_.foldLeft(zero)(foldFun))
  }

  /** Initiates a fold over the supplied futures where the fold-zero is the result value of the `Future` that's completed first.
    *
    * Example:
    * {{{
    *    val result = Await.result(Future.reduce(futures)(_ + _), 5 seconds)
    * }}}
    */
  def reduce[T, R >: T](futures: TraversableOnce[Future[T]])(op: (R, T) => R)(implicit executor: ExecutionContext): Future[R] = {
    if (futures.isEmpty) Promise[R].failure(new NoSuchElementException("reduce attempted on empty collection")).future
    else sequence(futures).map(_ reduceLeft op)
  }

  /** Transforms a `TraversableOnce[A]` into a `Future[TraversableOnce[B]]` using the provided function `A => Future[B]`.
    * This is useful for performing a parallel map. For example, to apply a function to all items of a list
    * in parallel:
    *
    * {{{
    *    val myFutureList = Future.traverse(myList)(x => Future(myFunc(x)))
    * }}}
    */
  def traverse[A, B, M[_] <: TraversableOnce[_]](in: M[A])(fn: A => Future[B])(implicit cbf: CanBuildFrom[M[A], B, M[B]], executor: ExecutionContext): Future[M[B]] =
    in.foldLeft(Promise.successful(cbf(in)).future) { (fr, a) =>
      val fb = fn(a.asInstanceOf[A])
      for (r <- fr; b <- fb) yield (r += b)
    }.map(_.result)


  //Unfortunately all the nice trait bit had to be copied down here since
  //scala.concurrent.Future needs to make promises, and it makes those
  //promises with a static call to Promise(), so i am replacing that with
  //a protected factory method
  private[lang] trait Impl[T] extends Future[T] {

    private implicit def internalExecutor: ExecutionContext = JsFuture.InternalCallbackExecutor

    protected def newPromise[S](): Promise[S] = JsPromise()
    /* Projections */

    /** Returns a failed projection of this future.
      *
      * The failed projection is a future holding a value of type `Throwable`.
      *
      * It is completed with a value which is the throwable of the original future
      * in case the original future is failed.
      *
      * It is failed with a `NoSuchElementException` if the original future is completed successfully.
      *
      * Blocking on this future returns a value if the original future is completed with an exception
      * and throws a corresponding exception if the original future fails.
      */
    override def failed: Future[Throwable] = {
      val p = newPromise[Throwable]()

      onComplete {
        case Failure(t) => p success t
        case Success(v) => p failure (new NoSuchElementException("Future.failed not completed with a throwable."))
      }

      p.future
    }


    /* Monadic operations */

    /** Creates a new future by applying the 's' function to the successful result of
      * this future, or the 'f' function to the failed result. If there is any non-fatal
      * exception thrown when 's' or 'f' is applied, that exception will be propagated
      * to the resulting future.
      *
      * @param  s  function that transforms a successful result of the receiver into a
      *            successful result of the returned future
      * @param  f  function that transforms a failure of the receiver into a failure of
      *            the returned future
      * @return    a future that will be completed with the transformed value
      */
    override def transform[S](s: T => S, f: Throwable => Throwable)(implicit executor: ExecutionContext): Future[S] = {
      val p = newPromise[S]()

      onComplete {
        case result =>
          try {
            result match {
              case Failure(t) => p failure f(t)
              case Success(r) => p success s(r)
            }
          } catch {
            case NonFatal(t) => p failure t
          }
      }(executor)

      p.future
    }

    /** Creates a new future by applying a function to the successful result of
      * this future. If this future is completed with an exception then the new
      * future will also contain this exception.
      *
      * $forComprehensionExamples
      */
    override def map[S](f: T => S)(implicit executor: ExecutionContext): Future[S] = {
      // transform(f, identity)
      val p = newPromise[S]()

      onComplete {
        case result =>
          try {
            result match {
              case Success(r) => p success f(r)
              case f: Failure[_] => p complete f.asInstanceOf[Failure[S]]
            }
          } catch {
            case NonFatal(t) => p failure t
          }
      }(executor)

      p.future
    }

    /** Creates a new future by applying a function to the successful result of
      * this future, and returns the result of the function as the new future.
      * If this future is completed with an exception then the new future will
      * also contain this exception.
      *
      * $forComprehensionExamples
      */
    override def flatMap[S](f: T => Future[S])(implicit executor: ExecutionContext): Future[S] = {
      val p = newPromise[S]()

      onComplete {
        case f: Failure[_] => p complete f.asInstanceOf[Failure[S]]
        case Success(v) =>
          try {
            f(v).onComplete({
              case f: Failure[_] => p complete f.asInstanceOf[Failure[S]]
              case Success(v) => p success v
            })(internalExecutor)
          } catch {
            case NonFatal(t) => p failure t
          }
      }(executor)

      p.future
    }

    /** Creates a new future by filtering the value of the current future with a predicate.
      *
      * If the current future contains a value which satisfies the predicate, the new future will also hold that value.
      * Otherwise, the resulting future will fail with a `NoSuchElementException`.
      *
      * If the current future fails, then the resulting future also fails.
      *
      * Example:
      * {{{
      *  val f = future { 5 }
      *  val g = f filter { _ % 2 == 1 }
      *  val h = f filter { _ % 2 == 0 }
      *  Await.result(g, Duration.Zero) // evaluates to 5
      *  Await.result(h, Duration.Zero) // throw a NoSuchElementException
      * }}}
      */
    override def filter(pred: T => Boolean)(implicit executor: ExecutionContext): Future[T] = {
      val p = newPromise[T]()

      onComplete {
        case f: Failure[_] => p complete f.asInstanceOf[Failure[T]]
        case Success(v) =>
          try {
            if (pred(v)) p success v
            else p failure new NoSuchElementException("Future.filter predicate is not satisfied")
          } catch {
            case NonFatal(t) => p failure t
          }
      }(executor)

      p.future
    }

    /** Creates a new future by mapping the value of the current future, if the given partial function is defined at that value.
      *
      * If the current future contains a value for which the partial function is defined, the new future will also hold that value.
      * Otherwise, the resulting future will fail with a `NoSuchElementException`.
      *
      * If the current future fails, then the resulting future also fails.
      *
      * Example:
      * {{{
      *  val f = future { -5 }
      *  val g = f collect {
      *    case x if x < 0 => -x
      *  }
      *  val h = f collect {
      *    case x if x > 0 => x * 2
      *  }
      *  Await.result(g, Duration.Zero) // evaluates to 5
      *  Await.result(h, Duration.Zero) // throw a NoSuchElementException
      * }}}
      */
    override def collect[S](pf: PartialFunction[T, S])(implicit executor: ExecutionContext): Future[S] = {
      val p = newPromise[S]()

      onComplete {
        case f: Failure[_] => p complete f.asInstanceOf[Failure[S]]
        case Success(v) =>
          try {
            if (pf.isDefinedAt(v)) p success pf(v)
            else p failure new NoSuchElementException("Future.collect partial function is not defined at: " + v)
          } catch {
            case NonFatal(t) => p failure t
          }
      }(executor)

      p.future
    }

    /** Creates a new future that will handle any matching throwable that this
      * future might contain. If there is no match, or if this future contains
      * a valid result then the new future will contain the same.
      *
      * Example:
      *
      * {{{
      *  future (6 / 0) recover { case e: ArithmeticException => 0 } // result: 0
      *  future (6 / 0) recover { case e: NotFoundException   => 0 } // result: exception
      *  future (6 / 2) recover { case e: ArithmeticException => 0 } // result: 3
      * }}}
      */
    override def recover[U >: T](pf: PartialFunction[Throwable, U])(implicit executor: ExecutionContext): Future[U] = {
      val p = newPromise[U]()

      onComplete { case tr => p.complete(tr recover pf)}(executor)

      p.future
    }

    /** Creates a new future that will handle any matching throwable that this
      * future might contain by assigning it a value of another future.
      *
      * If there is no match, or if this future contains
      * a valid result then the new future will contain the same result.
      *
      * Example:
      *
      * {{{
      *  val f = future { Int.MaxValue }
      *  future (6 / 0) recoverWith { case e: ArithmeticException => f } // result: Int.MaxValue
      * }}}
      */
    override def recoverWith[U >: T](pf: PartialFunction[Throwable, Future[U]])(implicit executor: ExecutionContext): Future[U] = {
      val p = newPromise[U]()

      onComplete {
        case Failure(t) if pf isDefinedAt t =>
          try {
            p completeWith pf(t)
          } catch {
            case NonFatal(t) => p failure t
          }
        case otherwise => p complete otherwise
      }(executor)

      p.future
    }

    /** Zips the values of `this` and `that` future, and creates
      * a new future holding the tuple of their results.
      *
      * If `this` future fails, the resulting future is failed
      * with the throwable stored in `this`.
      * Otherwise, if `that` future fails, the resulting future is failed
      * with the throwable stored in `that`.
      */
    override def zip[U](that: Future[U]): Future[(T, U)] = {
      val p = newPromise[(T, U)]()

      this onComplete {
        case f: Failure[_] => p complete f.asInstanceOf[Failure[(T, U)]]
        case Success(r) =>
          that onSuccess {
            case r2 => p success ((r, r2))
          }
          that onFailure {
            case f => p failure f
          }
      }

      p.future
    }

    /** Creates a new future which holds the result of this future if it was completed successfully, or, if not,
      * the result of the `that` future if `that` is completed successfully.
      * If both futures are failed, the resulting future holds the throwable object of the first future.
      *
      * Using this method will not cause concurrent programs to become nondeterministic.
      *
      * Example:
      * {{{
      *  val f = future { sys.error("failed") }
      *  val g = future { 5 }
      *  val h = f fallbackTo g
      *  Await.result(h, Duration.Zero) // evaluates to 5
      * }}}
      */
    override def fallbackTo[U >: T](that: Future[U]): Future[U] = {
      val p = newPromise[U]()
      onComplete {
        case s@Success(_) => p complete s
        case _ => p completeWith that
      }
      p.future
    }

    /** Creates a new `Future[S]` which is completed with this `Future`'s result if
      * that conforms to `S`'s erased type or a `ClassCastException` otherwise.
      */
    override def mapTo[S](implicit tag: ClassTag[S]): Future[S] = {
      def boxedType(c: Class[_]): Class[_] = {
        if (c.isPrimitive) JsFuture.toBoxed(c) else c
      }

      val p = Promise[S]()

      onComplete {
        case f: Failure[_] => p complete f.asInstanceOf[Failure[S]]
        case Success(t) =>
          p complete (try {
            Success(boxedType(tag.runtimeClass).cast(t).asInstanceOf[S])
          } catch {
            case e: ClassCastException => Failure(e)
          })
      }

      p.future
    }

    /** Applies the side-effecting function to the result of this future, and returns
      * a new future with the result of this future.
      *
      * This method allows one to enforce that the callbacks are executed in a
      * specified order.
      *
      * Note that if one of the chained `andThen` callbacks throws
      * an exception, that exception is not propagated to the subsequent `andThen`
      * callbacks. Instead, the subsequent `andThen` callbacks are given the original
      * value of this future.
      *
      * The following example prints out `5`:
      *
      * {{{
      *  val f = future { 5 }
      *  f andThen {
      *    case r => sys.error("runtime exception")
      *  } andThen {
      *    case Failure(t) => println(t)
      *    case Success(v) => println(v)
      *  }
      * }}}
      */
    override def andThen[U](pf: PartialFunction[Try[T], U])(implicit executor: ExecutionContext): Future[T] = {
      val p = Promise[T]()

      onComplete {
        case r => try if (pf isDefinedAt r) pf(r) finally p complete r
      }(executor)

      p.future
    }

  }

}