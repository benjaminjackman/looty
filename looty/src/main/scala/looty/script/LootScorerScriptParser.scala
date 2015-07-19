package looty.script

import scala.collection.mutable.ListBuffer


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 7/18/15 5:14 AM
//////////////////////////////////////////////////////////////

object LootScorerScriptParser {



//  case class ASTError(errors : Seq[String])
//
//  object AST {
//    import looty.script.LootScorerScriptParser.Regexes._
//
//    trait Node
//    case class RootNode(blocks: Seq[Node]) extends Node
//
//
//    case class Match(nodes : Seq[Node]) extends Node
//
//    object AddTo {val Parser = s"addTo ($VarName) ($Value)$OTC".r}
//    case class AddTo(variableName: String, amount: String) extends Node
//    object SetTo {val Parser = s"setTo ($VarName) ($Value)$OTC".r}
//    case class SetTo(variableName: String, amount: String) extends Node
//    object SetToColor {val Parser = s"setToColor ($VarName) ($Value) ($Value) ($Value) ($Value)?$OTC".r}
//    case class SetToColor(variableName: String, r: String, g: String, b: String, a: String) extends Node
//    object SetToText {val Parser = s"setToText ($VarName) (.*)".r}
//    case class SetToText(variableName: String, amount: String) extends Node
//
//    object GT {val Parser = s"($Value) >= ($Value)$OTC".r}
//    case class GT(a: String, b: String) extends Node
//    object GTE {val Parser = s"($Value) > ($Value)$OTC".r}
//    case class GTE(a: String, b: String) extends Node
//    object LT {val Parser = s"($Value) <= ($Value)$OTC".r}
//    case class LT(a: String, b: String) extends Node
//    object LTE {val Parser = s"($Value) < ($Value)$OTC".r}
//    case class LTE(a: String, b: String) extends Node
//
//
//    case object Exit extends Node
//
//  }
//
//
//  object Regexes {
//    //Optional trailing comment, allows lines to end with a comment
//    //val OTC = "((?#.*)|(?(?\\/\\/).*))?"
//    //DREAM FIGURE OUT HOW TO DO THIS
//    val OTC = ""
//    val HashComment = "\\s*#.*".r.unanchored
//    val CComment = "\\s*\\/\\/.*".r.unanchored
//    val VarName = "[A-Za-z_]\\w*".r.unanchored
//    val Value = "\\w+".r.unanchored
//  }
//
//  class NodeBuilder(children : ListBuffer[NodeBuilder])
//
//  def parse(script: String): Either[ASTError, AST.Node] = {
//    val rootBuilder = new ListBuffer[AST.Node]
//    val errorBuilder = new ListBuffer[String]
//    val blockBuilder: Option[ListBuffer[AST.Node]] = None
//    var lineNo = 0
//    var cline = ""
//
//
//    def err(msg: String) {
//      errorBuilder += s"LineNo $lineNo: $msg"
//    }
//
//    def beginMatch() {
////      rootBuilder += blockBuilder.toList
//
//    }
//
//    def add(n: AST.Node) {
//      blockBuilder match {
//        case None =>
//          err("Specified before beginning of a block ")
//        case Some(bb) =>
//          bb += n
//      }
//    }
//
//    script.replaceAll("\r\n", "\n").split("\n").foreach { line =>
//      lineNo += 1
//      cline = line
//      import looty.script.LootScorerScriptParser.AST._
//      line.trim match {
//        case "" => //Ignore
//        case "MATCH" =>
//          beginMatch()
//        case Regexes.HashComment() => //Ignore
//        case Regexes.CComment() => //Ignore
//        case AddTo.Parser(x, b) => add(AddTo(x, b))
//        case SetTo.Parser(x, b) => add(SetTo(x, b))
//        case SetToColor.Parser(x, r, g, b) => add(SetToColor(x, r, g, b, ""))
//        case SetToColor.Parser(x, r, g, b, a) => add(SetToColor(x, r, g, b, a))
//        case SetToText.Parser(x, b) => add(SetToText(x, b))
//        case GT.Parser(a, b) => add(GT(a, b))
//        case GTE.Parser(a, b) => add(GTE(a, b))
//        case LT.Parser(a, b) => add(LT(a, b))
//        case LTE.Parser(a, b) => add(LTE(a, b))
//        case x => err("Unable to parse line: $x")
//      }
//    }
//
//    blockBuilder.foreach(bb => rootBuilder += AST.Match(bb.toList))
//    if (errorBuilder.isEmpty) {
//      Right(AST.RootNode(rootBuilder.toList))
//    } else {
//      Left(ASTError(errorBuilder.toList))
//    }
//  }


}


