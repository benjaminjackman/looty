package looty.model


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/24/14 1:51 PM
//////////////////////////////////////////////////////////////

object SocketColors {
  sealed trait SocketColor {
    val toOneLetter = toString.head.toString
  }
  case object Red extends SocketColor
  case object Green extends SocketColor
  case object Blue extends SocketColor
  case object White extends SocketColor
  case object Abyssal extends SocketColor

  def all = List(Red, Green, Blue, White, Abyssal)
}