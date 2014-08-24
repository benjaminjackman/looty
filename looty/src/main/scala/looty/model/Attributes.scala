package looty.model

import looty.model.SocketColors.SocketColor


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

  def calculatedWith[A](f: Attribute => A) = new Attributes[A] {
    def strength: A = f(Attributes.Str)
    def dexterity: A = f(Attributes.Str)
    def intelligence: A = f(Attributes.Str)
  }

  sealed abstract class Attribute(val name : String, val color : SocketColor) {
    def cap = name.capitalize
  }
  case object Str extends Attribute("strength", SocketColors.Red)
  case object Dex extends Attribute("dexterity", SocketColors.Green)
  case object Int extends Attribute("intelligence", SocketColors.Blue)


  def all = List(Str, Dex, Int)

}
trait Attributes[A] {
  def strength: A
  def dexterity: A
  def intelligence: A

  def toMap: Map[Attributes.Attribute, A] = Map(Attributes.all.map(a => a -> apply(a)): _*)

  def apply(name: Attributes.Attribute): A = name match {
    case Attributes.Str => strength
    case Attributes.Dex => dexterity
    case Attributes.Int => intelligence
  }
}
class MutableAttributes[A] extends Attributes[A] with Accessible[Attributes.Attribute, A] {
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

  def update(name: Attributes.Attribute, value: A) = name match {
    case Attributes.Str => _strength = value
    case Attributes.Dex => _dexterity = value
    case Attributes.Int => _intelligence = value
  }

}