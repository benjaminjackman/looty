package looty
package script

import cgta.oscala.util.debugging.PRINT
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

  object Sample {
    import scala.util.parsing.combinator._

    class LootyScoreScriptParser extends JavaTokenParsers {
//      def expr: Parser[Any] = term ~ rep("+" ~ term | "-" ~ term)
//      def term: Parser[Any] = factor ~ rep("*" ~ factor | "/" ~ factor)
//      def factor: Parser[Any] = floatingPointNumber | "(" ~ expr ~ ")"
      override def ident = "[a-zA-Z0-9_]+".r
      def callFun  = ident ~ "(" ~ repsep(floatingPointNumber, ",")  ~ ")" ^^ {
        case name ~ "(" ~ args ~ ")" => (name, args)
      }
      def defFun = "def" ~ callFun ^^ {
        case _ ~ callFun => callFun
      }


    }

    class JSON extends JavaTokenParsers {
      def value: Parser[Any] = obj | arr | stringLiteral | floatingPointNumber | "null" | "true" | "false"
      def obj: Parser[Any] = "{" ~ repsep(member, ",") ~ "}"
      def arr: Parser[Any] = "[" ~ repsep(value, ",") ~ "]"
      def member: Parser[Any] = stringLiteral ~ ":" ~ value
    }

    class JSON1 extends JavaTokenParsers {
      def obj: Parser[Map[String, Any]] = "{" ~> repsep(member, ",") <~ "}" ^^ (Map() ++ _)
      def arr: Parser[List[Any]] = "[" ~> repsep(value, ",") <~ "]"
      def member: Parser[(String, Any)] = stringLiteral ~ ":" ~ value ^^ { case name ~ ":" ~ value => (name, value)}
      def value: Parser[Any] = (
        obj
          | arr
          | stringLiteral
          | floatingPointNumber ^^ (_.toDouble)
          | "null" ^^ (x => null)
          | "true" ^^ (x => true)
          | "false" ^^ (x => false)
        )
    }

  }


  test("Basic Functionality") {
    val parser = new Sample.LootyScoreScriptParser()
    import parser._
    parse(defFun, "def foo(1,2)") match {
      case Success(matched, _) => println(matched)
      case Failure(msg, _) => println("FAILURE: " + msg)
      case Error(msg, _) => println("ERROR: " + msg)
    }

  }

}