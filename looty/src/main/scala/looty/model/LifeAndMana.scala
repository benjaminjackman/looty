package looty.model


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 2:59 PM
//////////////////////////////////////////////////////////////


object LifeAndMana {
  def apply[A](l : A, m : A) = new LifeAndMana[A] {
    override def life: A = l
    override def mana: A = m
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

  def calculatedWith[A](f: String => A) = new LifeAndMana[A] {
    def life: A = f(LifeAndMana.life)
    def mana: A = f(LifeAndMana.mana)
  }

  val life = "life"
  val mana = "mana"

  def all = List(life, mana)

}
trait LifeAndMana[A] {
  def life: A
  def mana: A

  def map2[B](fl : A => B, fm : A => B) = LifeAndMana(fl(life), fm(mana))

  def apply(name: String): A = name match {
    case LifeAndMana.life => life
    case LifeAndMana.mana => mana
  }
}
class MutableLifeAndMana[A] extends LifeAndMana[A] with Accessible[String, A] {
  private var _life: A = _
  private var _mana: A = _


  def life: A = _life
  def mana: A = _mana

  def life_=(a: A) = _life = a
  def mana_=(a: A) = _mana = a

  def update(name: String, value: A) = name match {
    case LifeAndMana.life => _life = value
    case LifeAndMana.mana => _mana = value
  }

}
