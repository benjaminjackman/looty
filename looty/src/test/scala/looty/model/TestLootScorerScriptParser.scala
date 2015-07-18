package looty
package model

import cgta.oscala.util.debugging.PRINT
import cgta.otest.FunSuite
import looty.model.LootScorerScriptParser.AST
import looty.model.LootScorerScriptParser.Regexes

import scala.util.matching.Regex


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/18/15 5:20 AM
//////////////////////////////////////////////////////////////

object TestLootScorerScriptParser extends FunSuite {

  val sample = """
  match
    Armour >= 1000
    setToColor TextColor 255 255 0
    setToColor BorderColor 128 0 0
    setToColor BackgroundColor 64 64 0 192
    setToFont
    addTo Score 10
    print


  """.stripAuto

  test("Parsers") {


    def matches(R : Regex, s : String) {
      s.trim match {
        case R() =>
        case _ => Assert.fail(s"Regex [$R] did not match [$s]")
      }
    }

    matches(Regexes.HashComment, "#")
    matches(Regexes.HashComment, "  #")
    matches(Regexes.HashComment, "  #  ")
    matches(Regexes.CComment, "  //")
    matches(Regexes.CComment, "  //  ")
    matches(Regexes.CComment, "  //123")
    matches(Regexes.CComment, "//123")
  }


  test("Basic Functionality") {
    def tp(script: String, body : AST.Node) {
      val actual = LootScorerScriptParser.parse(script)
      actual match {
        case Left(e) => Assert.fail(e.errors.mkString)
        case Right(actual) => Assert.isEquals(body, actual, script)
      }

    }

    tp("", AST.RootNode(Nil))
  }

}