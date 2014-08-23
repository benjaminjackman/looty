package looty
package views

import cgta.ojs.io.AjaxHelp
import looty.poeapi.{PoeRpcs, PoeCacher}
import org.scalajs.jquery.{JQuery, JQueryStatic}

import scala.scalajs.js
import scala.scalajs.js.typedarray.{ArrayBuffer, Uint16Array, Uint8Array}


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/22/14 5:27 PM
//////////////////////////////////////////////////////////////

object PoeBuilderView {
  //https://www.pathofexile.com/character-window/get-passive-skills?character=Iceburnsides
  val sampleIn  = """{"hashes":[465,6913,39821,41250,41536,42964,45035,50338,56341,62712,65224]}"""
  val sampleOut = """AAAAAgIAAdEbAZuNoSKiQKfUr-vEotwV9Pj-yA=="""
  def swapEndian16(i: Int): Int = (i & 0xFF) << 8 | (i & 0xFF00) >> 8
  val magicPrefix = 0 :: 2 :: swapEndian16(2) :: Nil

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

class PoeBuilderView(implicit val pc: PoeCacher) extends View {
  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  override def start(el: JQuery): Unit = {
    val btnsDiv = jq("<div></div>")
    val iframe = jq("""<iframe class="poebuilder"></iframe>""")
    //Add a list of buttons one per character
    for {
      chars <- pc.getChars()
      char <- chars.sortBy(_.name.toUpperCase)
    } {
      val btn = jq(s"""<a href="javascript:void(0)"></a> """)
      btn.text(s"[${char.name}]")
      btnsDiv.append(btn)
      btn.on("click", (e: js.Any) => {
        Alerter.info("Attempting to get passive skill tree try from path of exile.com...")
        PoeRpcs.getPassiveSkills(char.name).foreach { data =>
          val base64 = PoeBuilderView.decode(data.hashes.asJsArr[Int])
          iframe.attr("src", s"http://poebuilder.com/character/$base64")
//          global.open()
        }
        false
      })
    }


    el.append(btnsDiv)
    el.append(iframe)
  }
  override def stop(): Unit = {

  }
}