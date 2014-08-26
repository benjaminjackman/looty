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

  sealed abstract class CharClass(val startingAttributes: Attributes[Int])
  case object Marauder extends CharClass(Attributes(str = 32, dex = 14, int = 14))
  case object Ranger extends CharClass(Attributes(str = 14, dex = 32, int = 14))
  case object Witch extends CharClass(Attributes(str = 14, dex = 14, int = 32))
  case object Duelist extends CharClass(Attributes(str = 23, dex = 23, int = 14))
  case object Shadow extends CharClass(Attributes(str = 23, dex = 14, int = 23))
  case object Templar extends CharClass(Attributes(str = 14, dex = 23, int = 23))
  case object Scion extends CharClass(Attributes(str = 20, dex = 20, int = 20))

  lazy val all    = List(Marauder, Ranger, Witch, Shadow, Templar, Duelist, Scion)
  lazy val allMap = Map(all.map(x => x.toString -> x): _*)

}