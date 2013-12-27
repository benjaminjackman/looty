package looty.model


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 2:36 PM
//////////////////////////////////////////////////////////////


object Attributes {
  def of[A](a: => A) = new Attributes[A] {
    val strength    : A = a
    val dexterity   : A = a
    val intelligence: A = a
  }

  def mutable[A](a: => A): MutableAttributes[A] = {
    val res = new MutableAttributes[A]
    all.foreach(e => res(e) = a)
    res
  }

  def calculatedWith[A](f: String => A) = new Attributes[A] {
    def strength: A = f(Attributes.strength)
    def dexterity: A = f(Attributes.dexterity)
    def intelligence: A = f(Attributes.intelligence)
  }

  val strength     = "strength"
  val dexterity    = "dexterity"
  val intelligence = "intelligence"

  def all = List(strength, dexterity, intelligence)

}
trait Attributes[A] {
  def strength: A
  def dexterity: A
  def intelligence: A

  def apply(name: String): A = name match {
    case Attributes.strength => strength
    case Attributes.dexterity => dexterity
    case Attributes.intelligence => intelligence
  }
}
class MutableAttributes[A] extends Attributes[A] with StringAccess[A] {
  private var _strength    : A = _
  private var _dexterity   : A = _
  private var _intelligence: A = _


  def strength: A = _strength
  def dexterity: A = _dexterity
  def intelligence: A = _intelligence

  def strength_=(a: A) = _strength = a
  def dexterity_=(a: A) = _dexterity = a
  def intelligence_=(a: A) = _intelligence = a

  def all = Attributes.all.map(this(_))

  def update(name: String, value: A) = name match {
    case Attributes.strength => _strength = value
    case Attributes.dexterity => _dexterity = value
    case Attributes.intelligence => _intelligence = value
  }

}