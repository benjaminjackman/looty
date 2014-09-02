package looty
package model

import looty.model.Elements.Element

//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 1:04 PM
//////////////////////////////////////////////////////////////


object Elements {
  def apply[A](phy: A, fir: A, col: A, lig: A, cha: A) = new Elements[A] {
    val physical : A = phy
    val fire     : A = fir
    val cold     : A = col
    val lightning: A = lig
    val chaos    : A = cha
  }

  def allAs[A](a: => A) = new Elements[A] {
    val physical : A = a
    val fire     : A = a
    val cold     : A = a
    val lightning: A = a
    val chaos    : A = a
  }

  def mutableAllAs[A](a: => A): MutableElements[A] = {
    val res = new MutableElements[A]
    all.foreach(e => res(e) = a)
    res
  }

  def byNameVal[A](f: Element => A): Elements[A] = new Elements[A] {
    override val physical : A = f(Physical)
    override val fire     : A = f(Fire)
    override val cold     : A = f(Cold)
    override val lightning: A = f(Lightning)
    override val chaos    : A = f(Chaos)
  }

  def byNameDef[A](f: Element => A) = new Elements[A] {
    def physical: A = f(Elements.Physical)
    def fire: A = f(Elements.Fire)
    def cold: A = f(Elements.Cold)
    def lightning: A = f(Elements.Lightning)
    def chaos: A = f(Elements.Chaos)
  }

  sealed trait Element {
    val cap  = toString
    val name = toString.toLowerCase
  }
  case object Physical extends Element
  case object Fire extends Element
  case object Cold extends Element
  case object Lightning extends Element
  case object Chaos extends Element

  def all = List(Physical, Fire, Cold, Lightning, Chaos)

}
trait Elements[A] {
  def physical: A
  def fire: A
  def cold: A
  def lightning: A
  def chaos: A

  def all = Elements.all.map(this(_))

  def apply(name: Element): A = name match {
    case Elements.Physical => physical
    case Elements.Fire => fire
    case Elements.Cold => cold
    case Elements.Lightning => lightning
    case Elements.Chaos => chaos
  }
}

class MutableElements[A] extends Elements[A] with Accessible[Element, A] {
  private var _physical : A = _
  private var _fire     : A = _
  private var _cold     : A = _
  private var _lightning: A = _
  private var _chaos    : A = _


  def physical: A = _physical
  def fire: A = _fire
  def cold: A = _cold
  def lightning: A = _lightning
  def chaos: A = _chaos

  def physical_=(a: A) = _physical = a
  def fire_=(a: A) = _fire = a
  def cold_=(a: A) = _cold = a
  def lightning_=(a: A) = _lightning = a
  def chaos_=(a: A) = _chaos = a


  def update(name: Element, value: A) = name match {
    case Elements.Physical => _physical = value
    case Elements.Fire => _fire = value
    case Elements.Cold => _cold = value
    case Elements.Lightning => _lightning = value
    case Elements.Chaos => _chaos = value
  }
}
