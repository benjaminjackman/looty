
import cgta.oscala.{OScalaExportsShared, OScalaExportsPlat}
import cgta.serland.{SerlandExportsShared, SerlandExportsPlat}
import org.scalajs.jquery.{JQuery, JQueryStatic}

import scala.scalajs.js.Dynamic
import scalajs.js

//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/9/13 11:57 PM
//////////////////////////////////////////////////////////////

class LootyStringExtensions(s: String) {
  //Make jquery elements with "div.foo" => jq("<div></div>").addClass("foo")
  def jq: JQuery = {
    val tag :: classes = s.split("\\.").toList
    val el = Dynamic.global.jQuery.asInstanceOf[JQueryStatic](s"<$tag></$tag>")
    classes.foreach(el.addClass(_))
    el
  }

  def cap = s.capitalize
}

class LootyJsAnyExtensions(val a: js.Any) extends AnyVal {
  def toJsonString: js.String = js.JSON.stringify(a)
  def asJsArr[A]: js.Array[A] = a.asInstanceOf[js.Array[A]]
  def asJsBool: js.Boolean = a.asInstanceOf[js.Boolean]
  def asJsStr: js.String = a.asInstanceOf[js.String]
  def asJsNum: js.prim.Number = a.asInstanceOf[js.Number]
  def isUndefined: Boolean = a.isInstanceOf[js.Undefined]
}

class LootyIterableExtensions[A](val xs : Iterable[A]) {
  def minOptI[B >: A](implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.min[B])
  def maxOptI[B >: A](implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.max[B])

  def minByOptI[B](f: A => B)(implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.minBy[B](f))
  def maxByOptI[B](f: A => B)(implicit cmp: Ordering[B]): Option[A] = if (xs.isEmpty) None else Some(xs.maxBy[B](f))
}

class LootyTypeAExtensions[A](val a : A) extends AnyVal {
  def nullSafe : Option[A] = if (a == null || a.isInstanceOf[js.Undefined]) None else Some(a)
}

package object looty
  extends OScalaExportsShared
  with OScalaExportsPlat
  with SerlandExportsShared
  with SerlandExportsPlat {


  implicit lazy val addQContext = scala.scalajs.concurrent.JSExecutionContext.queue


  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  implicit def addLootyStringExtensions(s: String) = new LootyStringExtensions(s)
  implicit def addLootyJsAnyExtensions(a: js.Any) = new LootyJsAnyExtensions(a)
  implicit def addLootyTypeAExtensions[A](a: A) = new LootyTypeAExtensions(a)
  implicit def addLootyIterableExtensions[A](a: Iterable[A]) = new LootyIterableExtensions(a)
}
