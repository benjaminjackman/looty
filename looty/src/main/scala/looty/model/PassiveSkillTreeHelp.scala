package looty
package model

import scala.scalajs.js

import scala.scalajs.js
import scala.scalajs.js.typedarray.{ArrayBuffer, Uint16Array, Uint8Array}


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/25/14 11:33 PM
//////////////////////////////////////////////////////////////

object PassiveSkillTreeHelp {
  //downloaded
  //
  //then ran
  //var req = new XMLHttpRequest()
  //req.open("GET", "passive_tree.json")
  //req.send()
  //var tree = JSON.parse(req.responseText)
  //JSON.stringify(tree.nodes.filter(function (n) {return n.ia + n.da + n.sa > 0} ).map(function(x){var o = ){id: x.id, s:x.sa, i:x.ia,d :x.da};return o})

  trait PassiveBonusNode extends js.Object {
    val id: Int = ???
    val i : Int = ???
    val d : Int = ???
    val s : Int = ???
  }

  lazy val treeJson = """[{"id":4011,"s":0,"i":0,"d":10},{"id":50197,"s":0,"i":30,"d":0},{"id":14930,"s":10,"i":0,"d":0},{"id":5237,"s":0,"i":0,"d":10},{"id":13009,"s":0,"i":0,"d":10},{"id":22703,"s":10,"i":0,"d":0},{"id":3656,"s":0,"i":10,"d":0},{"id":32555,"s":0,"i":0,"d":10},{"id":62321,"s":0,"i":0,"d":20},{"id":63447,"s":0,"i":10,"d":0},{"id":39861,"s":0,"i":0,"d":10},{"id":5296,"s":0,"i":10,"d":0},{"id":16544,"s":0,"i":0,"d":10},{"id":35894,"s":0,"i":20,"d":0},{"id":64210,"s":0,"i":10,"d":0},{"id":52730,"s":10,"i":0,"d":0},{"id":5456,"s":30,"i":0,"d":0},{"id":11420,"s":0,"i":20,"d":0},{"id":34009,"s":20,"i":0,"d":0},{"id":52230,"s":0,"i":0,"d":20},{"id":44202,"s":10,"i":0,"d":0},{"id":29353,"s":10,"i":0,"d":0},{"id":63282,"s":10,"i":0,"d":0},{"id":38662,"s":0,"i":0,"d":10},{"id":37671,"s":0,"i":10,"d":0},{"id":26523,"s":10,"i":0,"d":0},{"id":54776,"s":0,"i":10,"d":0},{"id":24050,"s":0,"i":10,"d":0},{"id":28012,"s":0,"i":0,"d":10},{"id":23471,"s":0,"i":0,"d":10},{"id":63723,"s":10,"i":0,"d":0},{"id":5823,"s":0,"i":0,"d":20},{"id":19711,"s":0,"i":0,"d":10},{"id":30733,"s":10,"i":0,"d":0},{"id":49900,"s":0,"i":0,"d":10},{"id":36858,"s":0,"i":10,"d":0},{"id":11497,"s":0,"i":0,"d":10},{"id":51923,"s":0,"i":10,"d":0},{"id":35928,"s":10,"i":10,"d":0},{"id":36678,"s":0,"i":10,"d":0},{"id":32345,"s":0,"i":0,"d":30},{"id":55332,"s":0,"i":10,"d":0},{"id":14021,"s":0,"i":10,"d":0},{"id":49412,"s":10,"i":0,"d":0},{"id":42911,"s":10,"i":0,"d":0},{"id":42800,"s":10,"i":0,"d":0},{"id":487,"s":10,"i":0,"d":0},{"id":49621,"s":0,"i":0,"d":20},{"id":59370,"s":0,"i":0,"d":10},{"id":63795,"s":0,"i":0,"d":10},{"id":42760,"s":0,"i":10,"d":0},{"id":23881,"s":10,"i":0,"d":0},{"id":9511,"s":10,"i":0,"d":0},{"id":25178,"s":20,"i":20,"d":0},{"id":45838,"s":0,"i":0,"d":10},{"id":8640,"s":0,"i":0,"d":10},{"id":32245,"s":0,"i":0,"d":30},{"id":44908,"s":10,"i":0,"d":0},{"id":41518,"s":0,"i":10,"d":0},{"id":20546,"s":0,"i":10,"d":0},{"id":46277,"s":0,"i":0,"d":10},{"id":3644,"s":10,"i":0,"d":0},{"id":24383,"s":20,"i":0,"d":0},{"id":44606,"s":0,"i":10,"d":0},{"id":30691,"s":0,"i":10,"d":0},{"id":30679,"s":0,"i":0,"d":10},{"id":19501,"s":0,"i":10,"d":0},{"id":49978,"s":0,"i":0,"d":10},{"id":36542,"s":0,"i":10,"d":0},{"id":37569,"s":0,"i":10,"d":0},{"id":27659,"s":0,"i":0,"d":10},{"id":19635,"s":0,"i":10,"d":0},{"id":31875,"s":10,"i":0,"d":0},{"id":40867,"s":10,"i":0,"d":0},{"id":476,"s":10,"i":0,"d":0},{"id":27929,"s":0,"i":20,"d":0},{"id":6741,"s":10,"i":0,"d":0},{"id":4796,"s":20,"i":0,"d":0},{"id":5616,"s":0,"i":0,"d":10},{"id":1529,"s":0,"i":0,"d":10},{"id":17735,"s":0,"i":10,"d":0},{"id":59928,"s":10,"i":0,"d":0},{"id":14606,"s":20,"i":0,"d":0},{"id":35663,"s":20,"i":0,"d":0},{"id":27283,"s":0,"i":0,"d":10},{"id":46657,"s":0,"i":0,"d":10},{"id":20010,"s":0,"i":0,"d":10},{"id":53793,"s":10,"i":0,"d":0},{"id":40653,"s":10,"i":0,"d":0},{"id":60440,"s":0,"i":10,"d":0},{"id":36287,"s":0,"i":0,"d":10},{"id":43374,"s":10,"i":0,"d":0},{"id":7112,"s":0,"i":0,"d":10},{"id":24083,"s":10,"i":0,"d":0},{"id":48778,"s":0,"i":10,"d":0},{"id":13885,"s":0,"i":0,"d":10},{"id":58244,"s":0,"i":10,"d":0},{"id":33310,"s":0,"i":10,"d":0},{"id":16167,"s":0,"i":0,"d":10},{"id":10829,"s":0,"i":0,"d":10},{"id":24362,"s":0,"i":20,"d":0},{"id":7444,"s":0,"i":10,"d":0},{"id":6363,"s":0,"i":0,"d":10},{"id":32210,"s":0,"i":10,"d":0},{"id":21678,"s":0,"i":10,"d":0},{"id":44967,"s":10,"i":0,"d":0},{"id":10542,"s":10,"i":0,"d":0},{"id":61198,"s":10,"i":0,"d":0},{"id":34031,"s":10,"i":0,"d":0},{"id":4367,"s":0,"i":10,"d":0},{"id":25763,"s":10,"i":0,"d":0},{"id":59151,"s":20,"i":0,"d":0},{"id":17201,"s":0,"i":0,"d":10},{"id":47251,"s":0,"i":10,"d":0},{"id":21941,"s":10,"i":0,"d":0},{"id":6580,"s":0,"i":0,"d":10},{"id":49806,"s":0,"i":0,"d":10},{"id":64709,"s":0,"i":0,"d":10},{"id":22285,"s":10,"i":0,"d":0},{"id":36949,"s":20,"i":0,"d":0},{"id":6538,"s":0,"i":10,"d":0},{"id":1461,"s":0,"i":0,"d":10},{"id":46578,"s":10,"i":0,"d":0},{"id":28330,"s":10,"i":0,"d":0},{"id":24006,"s":0,"i":10,"d":0},{"id":59606,"s":0,"i":0,"d":10},{"id":56295,"s":0,"i":10,"d":0},{"id":29937,"s":0,"i":0,"d":10},{"id":39811,"s":0,"i":0,"d":20},{"id":4397,"s":0,"i":10,"d":0},{"id":56029,"s":0,"i":0,"d":30},{"id":58449,"s":20,"i":0,"d":0},{"id":53456,"s":0,"i":10,"d":0},{"id":49178,"s":10,"i":0,"d":0},{"id":7938,"s":0,"i":10,"d":0},{"id":33783,"s":0,"i":10,"d":0},{"id":1031,"s":0,"i":10,"d":0},{"id":18791,"s":10,"i":0,"d":10},{"id":58090,"s":10,"i":0,"d":0},{"id":24865,"s":10,"i":0,"d":0},{"id":38176,"s":0,"i":10,"d":0},{"id":11551,"s":0,"i":10,"d":0},{"id":27415,"s":0,"i":10,"d":0},{"id":15631,"s":10,"i":0,"d":0},{"id":9355,"s":10,"i":0,"d":0},{"id":50422,"s":10,"i":0,"d":0},{"id":444,"s":0,"i":0,"d":10},{"id":52904,"s":0,"i":0,"d":10},{"id":60398,"s":0,"i":10,"d":0},{"id":24914,"s":10,"i":0,"d":0},{"id":31080,"s":0,"i":0,"d":10},{"id":2913,"s":0,"i":0,"d":10},{"id":39718,"s":0,"i":0,"d":10},{"id":21301,"s":10,"i":0,"d":0},{"id":39841,"s":0,"i":10,"d":0},{"id":34601,"s":0,"i":0,"d":30},{"id":10221,"s":10,"i":0,"d":0},{"id":6446,"s":10,"i":0,"d":0},{"id":58218,"s":10,"i":0,"d":0},{"id":33592,"s":0,"i":10,"d":0},{"id":56589,"s":0,"i":0,"d":10},{"id":37078,"s":0,"i":20,"d":0},{"id":49605,"s":0,"i":10,"d":0},{"id":8544,"s":0,"i":0,"d":10},{"id":46329,"s":20,"i":0,"d":0},{"id":43368,"s":20,"i":0,"d":0},{"id":35556,"s":10,"i":0,"d":0},{"id":39916,"s":10,"i":0,"d":0},{"id":6237,"s":0,"i":0,"d":20},{"id":4502,"s":0,"i":10,"d":0},{"id":61262,"s":10,"i":0,"d":0},{"id":6764,"s":0,"i":10,"d":0},{"id":40366,"s":0,"i":10,"d":0},{"id":55649,"s":10,"i":0,"d":0},{"id":50338,"s":0,"i":0,"d":20},{"id":32083,"s":0,"i":20,"d":0},{"id":15405,"s":10,"i":0,"d":0},{"id":7388,"s":0,"i":10,"d":0},{"id":54415,"s":10,"i":0,"d":0},{"id":61306,"s":0,"i":0,"d":10},{"id":54142,"s":0,"i":0,"d":20},{"id":11651,"s":0,"i":10,"d":0},{"id":16775,"s":10,"i":0,"d":0},{"id":46910,"s":10,"i":0,"d":0},{"id":59252,"s":0,"i":0,"d":10},{"id":22266,"s":0,"i":0,"d":10},{"id":5233,"s":10,"i":0,"d":0},{"id":60002,"s":20,"i":0,"d":0},{"id":11334,"s":0,"i":10,"d":0},{"id":15549,"s":0,"i":10,"d":0},{"id":20807,"s":0,"i":0,"d":10},{"id":15027,"s":30,"i":0,"d":0},{"id":7085,"s":0,"i":0,"d":20},{"id":36874,"s":0,"i":30,"d":0},{"id":8938,"s":0,"i":0,"d":10},{"id":19506,"s":0,"i":0,"d":20},{"id":18182,"s":0,"i":10,"d":0},{"id":51786,"s":0,"i":0,"d":10},{"id":28574,"s":0,"i":0,"d":10},{"id":26270,"s":0,"i":10,"d":0},{"id":48807,"s":0,"i":0,"d":20},{"id":14151,"s":0,"i":10,"d":0},{"id":27564,"s":0,"i":10,"d":0},{"id":8948,"s":0,"i":10,"d":0},{"id":23027,"s":10,"i":0,"d":0},{"id":10575,"s":0,"i":10,"d":0},{"id":58402,"s":0,"i":10,"d":0},{"id":33435,"s":0,"i":12,"d":0},{"id":25609,"s":0,"i":0,"d":20},{"id":39028,"s":0,"i":10,"d":10},{"id":31931,"s":10,"i":0,"d":0},{"id":15064,"s":10,"i":0,"d":0},{"id":32710,"s":0,"i":10,"d":0},{"id":10153,"s":30,"i":0,"d":0},{"id":25058,"s":20,"i":0,"d":0},{"id":60942,"s":0,"i":0,"d":10},{"id":46092,"s":0,"i":10,"d":0},{"id":18033,"s":0,"i":10,"d":0},{"id":6981,"s":10,"i":0,"d":0},{"id":36543,"s":10,"i":0,"d":0},{"id":8135,"s":20,"i":0,"d":20},{"id":63843,"s":0,"i":0,"d":10},{"id":41866,"s":0,"i":0,"d":10},{"id":14056,"s":10,"i":0,"d":0},{"id":18025,"s":0,"i":30,"d":0},{"id":12412,"s":0,"i":0,"d":10},{"id":52714,"s":30,"i":0,"d":0},{"id":18769,"s":10,"i":0,"d":0},{"id":44184,"s":0,"i":10,"d":0},{"id":5408,"s":0,"i":0,"d":10},{"id":12702,"s":20,"i":0,"d":0},{"id":34882,"s":0,"i":10,"d":0},{"id":3469,"s":0,"i":0,"d":10},{"id":49651,"s":0,"i":10,"d":0},{"id":41635,"s":0,"i":10,"d":0},{"id":11591,"s":10,"i":0,"d":0},{"id":50570,"s":10,"i":0,"d":0},{"id":60180,"s":0,"i":30,"d":0},{"id":63139,"s":10,"i":0,"d":0},{"id":47484,"s":0,"i":0,"d":20},{"id":50862,"s":10,"i":0,"d":0},{"id":46340,"s":0,"i":10,"d":0},{"id":60472,"s":10,"i":0,"d":0},{"id":12795,"s":0,"i":20,"d":20},{"id":46408,"s":0,"i":0,"d":10},{"id":63649,"s":0,"i":0,"d":10},{"id":10490,"s":0,"i":10,"d":0},{"id":33479,"s":0,"i":10,"d":0},{"id":34400,"s":10,"i":0,"d":0}]"""
  lazy val tree     = JSON.parse(treeJson).asJsArr[PassiveBonusNode].toList
  lazy val treeMap  = Map(tree.map(n => n.id -> n): _*)

  def hashesToAttributes(rawHashes: Seq[Int]): Attributes[Int] = {
    var i = 0
    var d = 0
    var s = 0
    rawHashes.flatMap(treeMap.get).foreach { n =>
      i += n.i
      d += n.d
      s += n.s
    }
    Attributes(str = s, dex = d, int = i)
  }

  //https://www.pathofexile.com/character-window/get-passive-skills?character=Iceburnsides
  def swapEndian16(i: Int): Int = (i & 0xFF) << 8 | (i & 0xFF00) >> 8
  lazy val sampleIn    = """{"hashes":[465,6913,39821,41250,41536,42964,45035,50338,56341,62712,65224]}"""
  lazy val sampleOut   = """AAAAAgIAAdEbAZuNoSKiQKfUr-vEotwV9Pj-yA=="""
  lazy val magicPrefix = 0 :: 2 :: swapEndian16(2) :: Nil

  def decode(rawHashes: js.Array[Int]): String = {

    val hashes = (magicPrefix ::: rawHashes.toList).map(swapEndian16).toJsArray
    val sarray = new Uint16Array(hashes)
    base64ArrayBuffer(sarray.buffer).replaceAll("\\+", "-").replaceAll("\\\\", "_")
  }

  //https://gist.github.com/jonleighton/958841
  def base64ArrayBuffer(arrayBuffer: ArrayBuffer): String = {
    var base64 = ""
    val _encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    def encodings(i: Int): String = _encodings(i).toString

    val bytes = new Uint8Array(arrayBuffer)
    val byteLength = bytes.byteLength
    val byteRemainder = byteLength % 3
    val mainLength = byteLength - byteRemainder

    // Main loop deals with bytes in chunks of 3
    var i = 0
    while (i < mainLength) {

      // Combine the three bytes into a single integer
      val chunk = (bytes(i) << 16) | (bytes(i + 1) << 8) | bytes(i + 2)

      // Use bitmasks to extract 6-bit segments from the triplet
      val a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      val b = (chunk & 258048) >> 12 // 258048   = (2^6 - 1) << 12
      val c = (chunk & 4032) >> 6 // 4032     = (2^6 - 1) << 6
      val d = chunk & 63 // 63       = 2^6 - 1

      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings(a) + encodings(b) + encodings(c) + encodings(d)
      i = i + 3
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      val chunk = bytes(mainLength)

      val a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

      // Set the 4 least significant bits to zero
      val b = (chunk & 3) << 4 // 3   = 2^2 - 1

      base64 += encodings(a) + encodings(b) + "== "
    } else if (byteRemainder == 2) {
      val chunk: Int = (bytes(mainLength) << 8) | bytes(mainLength + 1)

      val a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      val b = (chunk & 1008) >> 4 // 1008  = (2^6 - 1) << 4

      // Set the 2 least significant bits to zero
      val c = (chunk & 15) << 2 // 15    = 2^4 - 1

      base64 += encodings(a) + encodings(b) + encodings(c) + '='
    }

    base64
  }

}