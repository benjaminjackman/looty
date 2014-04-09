package cgta.ojs
package lang

import scala.scalajs.js
import scala.concurrent.{ExecutionContext, Promise, Future}
import scala.util.{Failure, Success}
import scala.collection.mutable.ArrayBuffer


//////////////////////////////////////////////////////////////
// Created by bjackman @ 12/11/13 12:18 AM
//////////////////////////////////////////////////////////////


class TypeAExtensions[A](val a: A) extends AnyVal {
  def nullSafe: Option[A] = if (a == null || a.isInstanceOf[js.Undefined]) None else Some(a)
  def =?=[B](b: B)(implicit e: B =:= A) = a == b
  def =!=[B](b: B)(implicit e: B =:= A) = a != b
  def toJs[B <: js.Any](implicit aToJs: A => B): B = aToJs(a)
  //From orange
  def oIf[B](p: A => Boolean, t: A => B, f: A => B): B = if (p(a)) t(a) else f(a)
  def oEffect(f: A => Unit): A = { f(a); a }
  def oEffect0(f: => Unit): A = { f; a }
  def oTransform[B](f: A => B): B = f(a)
  def oReplace[B](b: => B): B = b

}

class JsAnyExtensions(val a: js.Any) extends AnyVal {
  def toJsonString: js.String = js.JSON.stringify(a)
  def asJsDic[A]: js.Dictionary[A] = a.asInstanceOf[js.Dictionary[A]]
  def asJsObj: js.Object = a.asInstanceOf[js.Object]
  def asJsDyn: js.Dynamic = a.asInstanceOf[js.Dynamic]
  def asJsStr: js.String = a.asInstanceOf[js.String]
  def asJsNum: js.Number = a.asInstanceOf[js.Number]
  def isUndefined: Boolean = a.isInstanceOf[js.Undefined]
}

class JsFutureExtensions[A](val f: Future[A]) extends AnyVal {
  def log(prefix: String = null)(implicit executor: ExecutionContext): Future[A] = {
    val p = Promise[A]()
    f.onComplete {
      case Success(x) =>
        if (prefix != null) console.log(prefix, x) else console.log(x.nullSafe.map(_.toString).getOrElse(""), x)
        p.success(x)
      case Failure(t) =>
        if (prefix != null) console.error(prefix, t) else console.error(t.nullSafe.map(_.toString).getOrElse(""), t)
        p.failure(t)
    }
    p.future
  }
}

class JsStringExtensions(val s: String) extends AnyVal {
  def cap : String = {
    if (s.isEmpty) {
      s
    } else {
      s.substring(0, 1).toJs.asJsStr.toUpperCase() + s.substring(1)
    }
  }
  def emptyToNone = if (s.isEmpty) None else Some(s)
}


trait JsExtensions {
  implicit def typeAExtensions[A](a: A): TypeAExtensions[A] = new TypeAExtensions[A](a)
  implicit def jsAnyExtensions(a: js.Any): JsAnyExtensions = new JsAnyExtensions(a)
  implicit def jsFutureExtensions[A](a: Future[A]): JsFutureExtensions[A] = new JsFutureExtensions[A](a)
  implicit def jsStringExtensions(a: String): JsStringExtensions = new JsStringExtensions(a)
  implicit def seqExtensions[A](a: Iterable[A]): SeqExtensions[A] = new SeqExtensions[A](a)
}

class SeqExtensions[A](val xs: Iterable[A]) extends AnyVal {

  def toJsArray = js.Array[A](xs.toSeq : _*)

  def minOpt[B >: A](implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.min[B])
  def maxOpt[B >: A](implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.max[B])

  def minByOpt[B](f: A => B)(implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.minBy[B](f))
  def maxByOpt[B](f: A => B)(implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.maxBy[B](f))


  /**
   * Removes duplicates from a sequence using a f to provide keys used for determining equality of elements
   * When a duplicate is removed a reducer function r is used to determine what to keep.
   *
   * Warning this class does NOT preserve ordering of the elements!
   *
   * Example (Not That Order was not preserved)
   *
   * xs = List(1->2, 1->3, 1->2, 2->1, 3->4, 4->1, 4-> -1, 5->1)
   * ys = RicherSeq(xs).removeDuplicatesBy(_._1)(List(_,_).maxBy(_._2))
   * ys == Vector((5,1), (1,3), (2,1), (3,4), (4,1))
   *
   * @param f Function that turns an element into some other type B used for equality checks
   * @param r Tie breaker function that chooses which to keep
   * @tparam B
   * @return
   */
  def removeDuplicatesBy[B](f: A => B)(r: (A, A) => A): Seq[A] = {
    xs.toVector.groupBy(f).values.map(_.reduce(r)).toVector
  }

  /**
   * Creates a new Sequence with start before the first element, sep between them, and end after the last element
   *
   * @param start Item to place before the first element
   * @param sep
   * @param end
   * @tparam B
   * @return
   */
  def intersperse[B >: A](start: => Option[B] = None, sep: => Option[B] = None, end: => Option[B] = None): Vector[B] = {
    val buf = new ArrayBuffer[B](xs.size * 2)
    if (start.isDefined) buf += start.get
    val itr = xs.toIterator
    var hasNext = itr.hasNext
    while (hasNext) {
      buf += itr.next
      hasNext = itr.hasNext
      if (hasNext && sep.isDefined) buf += sep.get
    }
    if (end.isDefined) buf += end.get
    buf.toVector
  }
}