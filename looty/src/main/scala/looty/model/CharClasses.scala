package looty
package model


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/25/14 11:45 PM
//////////////////////////////////////////////////////////////

object CharClasses {

  sealed abstract class CharClass(val id: Int, val startingAttributes: Attributes[Int])
  case object Marauder extends CharClass(1, Attributes(str = 32, dex = 14, int = 14))
  case object Ranger extends CharClass(2, Attributes(str = 14, dex = 32, int = 14))
  case object Witch extends CharClass(3, Attributes(str = 14, dex = 14, int = 32))
  case object Duelist extends CharClass(4, Attributes(str = 23, dex = 23, int = 14))
  case object Shadow extends CharClass(6, Attributes(str = 23, dex = 14, int = 23))
  case object Templar extends CharClass(5, Attributes(str = 14, dex = 23, int = 23))
  case object Scion extends CharClass(0, Attributes(str = 20, dex = 20, int = 20))

  lazy val all    = List(Marauder, Ranger, Witch, Shadow, Templar, Duelist, Scion)
  lazy val allMap = Map(all.map(x => x.toString -> x): _*)
  lazy val allIdMap = Map(all.map(x => x.id -> x): _*)

}