package looty.model

import looty.model.LifeAndMana.LifeMana


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 2:59 PM
//////////////////////////////////////////////////////////////


object LifeAndMana {
  def apply[A](l : A, m : A) = new LifeAndMana[A] {
    override val life: A = l
    override val mana: A = m
  }

  def of[A](a: => A) = new LifeAndMana[A] {
    val life: A = a
    val mana: A = a
  }

  def mutable[A](a: => A): MutableLifeAndMana[A] = {
    val res = new MutableLifeAndMana[A]
    all.foreach(e => res(e) = a)
    res
  }

  def byNameVal[A](f: LifeMana => A) = new LifeAndMana[A] {
    val life: A = f(LifeAndMana.Life)
    val mana: A = f(LifeAndMana.Mana)
  }

  def byNameDef[A](f: LifeMana => A) = new LifeAndMana[A] {
    def life: A = f(LifeAndMana.Life)
    def mana: A = f(LifeAndMana.Mana)
  }

  sealed trait LifeMana {
    def cap = toString
  }

  case object Life extends LifeMana
  case object Mana extends LifeMana

  def all = List(Life, Mana)

}
trait LifeAndMana[A] {
  def life: A
  def mana: A

  def map2[B](fl : A => B, fm : A => B) = LifeAndMana(fl(life), fm(mana))

  def apply(name: LifeMana): A = name match {
    case LifeAndMana.Life => life
    case LifeAndMana.Mana => mana
  }
}
class MutableLifeAndMana[A] extends LifeAndMana[A] with Accessible[LifeMana, A] {
  private var _life: A = _
  private var _mana: A = _


  def life: A = _life
  def mana: A = _mana

  def life_=(a: A) = _life = a
  def mana_=(a: A) = _mana = a

  def update(name: LifeMana, value: A) = name match {
    case LifeAndMana.Life => _life = value
    case LifeAndMana.Mana => _mana = value
  }

}
