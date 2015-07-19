package looty
package script

import cgta.otest.FunSuite


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/18/15 5:20 AM
//////////////////////////////////////////////////////////////

object TestLootScorerScriptParser extends FunSuite {

  val subCurrencyScript = """
  var total = 0
  match


  end
  """.stripAuto

  val sample = """
  match
    Armour >= 1000
    TextColor := Color(255, 255, 0)
    BorderColor :=  Color(128, 0, 0)
    BackgroundColor := Color(64, 64, 0, 192)
    Score := 10
    print()
  end

  """.stripAuto


  test("Basic Functionality") {

  }

}