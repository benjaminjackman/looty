package looty.model


//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/14/13 3:05 PM
//////////////////////////////////////////////////////////////


object StringAccess {
  implicit class NumberExtensions(val x: StringAccess[Double]) extends AnyVal {
    def +=(name: String, a: Double) = x(name) = x(name) + a
  }
}

trait StringAccess[A] {
  def apply(x: String): A
  def update(x: String, a: A)
}