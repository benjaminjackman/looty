package looty
package views.loot

import looty.model.ComputedItem


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/23/14 4:29 PM
//////////////////////////////////////////////////////////////

object LootFilter {
  def all = new LootFilter {
    override def allows(i: ComputedItem): Boolean = true
  }
}

trait LootFilter {
  def allows(i: ComputedItem): Boolean
}

object NumFilter {
  def apply(f: (Double, Double) => Boolean) = new NumFilter {
    override def apply(actualValue: Double, filterValue: Double): Boolean = f(actualValue, filterValue)
  }
}

trait NumFilter {
  def apply(actualValue: Double, filterValue: Double): Boolean
}

object LootFilterColumn {

  def parse(text: String, col: Column): LootFilterColumn = {
    def numFilter(n: String)(p: (Double, Double) => Boolean) = {
      val x = n.toDouble
      LootFilterColumn(text, col, i => p(col.getJs(i).toString.toDouble, x))
    }
    val GT = ">(.*)".r
    val GTE = ">=(.*)".r
    val LT = "<(.*)".r
    val LTE = "<=(.*)".r
    val EQ = "=(.*)".r
    val NUM = "([0-9.-]+)".r

    try {
      text.trim match {
        case GTE(n) if n.nonEmpty => numFilter(n)(_ >= _)
        case GT(n) if n.nonEmpty => numFilter(n)(_ > _)
        case LTE(n) if n.nonEmpty => numFilter(n)(_ <= _)
        case LT(n) if n.nonEmpty => numFilter(n)(_ < _)
        case EQ(n) if n.nonEmpty => numFilter(n)(_ == _)
        case NUM(n) if n.nonEmpty && col.defaultNumFilter.isDefined => numFilter(n)(col.defaultNumFilter.get.apply)
        case "" => LootFilterColumn(text, col, i => true)
        case s =>
          val toks = s.split("\\|")
          LootFilterColumn(text, col, (i) => {
            val value = col.getJs(i).toString.toLowerCase
            toks.exists(tok => value.matches(".*" + tok.toLowerCase + ".*"))
          })
      }
    } catch {
      case e: Throwable =>
        LootFilterColumn(text, col, i => true)
    }
  }
}

case class LootFilterColumn(text: String, col: Column, p: ComputedItem => Boolean) {
  def allows(i: ComputedItem): Boolean = {
    try p(i) catch {case e: Throwable => false}
  }
}