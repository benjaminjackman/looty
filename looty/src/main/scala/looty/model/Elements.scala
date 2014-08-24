package looty
package model

//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 1:04 PM
//////////////////////////////////////////////////////////////


object Elements {

  def of[A](a: => A) = new Elements[A] {
    val physical : A = a
    val fire     : A = a
    val cold      : A = a
    val lightning: A = a
    val chaos    : A = a
  }

  def mutable[A](a: => A): MutableElements[A] = {
    val res = new MutableElements[A]
    all.foreach(e => res(e) = a)
    res
  }

  def calculatedWith[A](f: String => A) = new Elements[A] {
    def physical: A = f(Elements.physical)
    def fire: A = f(Elements.fire)
    def cold: A = f(Elements.cold)
    def lightning: A = f(Elements.lightning)
    def chaos: A = f(Elements.chaos)
  }

  val physical  = "physical"
  val fire      = "fire"
  val cold       = "cold"
  val lightning = "lightning"
  val chaos     = "chaos"

  def all = List(physical, fire, cold, lightning, chaos)

}
trait Elements[A] {
  def physical: A
  def fire: A
  def cold: A
  def lightning: A
  def chaos: A

  def all = Elements.all.map(this(_))

  def apply(name: String): A = name match {
    case Elements.physical => physical
    case Elements.fire => fire
    case Elements.cold => cold
    case Elements.lightning => lightning
    case Elements.chaos => chaos
  }
}

class MutableElements[A] extends Elements[A] with Accessible[String, A] {
  private var _physical : A = _
  private var _fire     : A = _
  private var _cold      : A = _
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


  def update(name: String, value: A) = name match {
    case Elements.physical => _physical = value
    case Elements.fire => _fire = value
    case Elements.cold => _cold = value
    case Elements.lightning => _lightning = value
    case Elements.chaos => _chaos = value
  }
}
