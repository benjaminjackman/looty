package looty.model


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 3:05 PM
//////////////////////////////////////////////////////////////


object Accessible {
  implicit class NumberExtensions[B](val x: Accessible[B, Double]) extends AnyVal {
    def +=(key: B, a: Double) = x(key) = x(key) + a
  }
}

trait Accessible[B, A] {
  def apply(x: B): A
  def update(x: B, a: A)
}