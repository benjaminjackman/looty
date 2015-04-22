package looty

import scala.scalajs.js.annotation.JSExport


//////////////////////////////////////////////////////////////
// Copyright (c) 2015 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 4/21/15 10:49 PM
//////////////////////////////////////////////////////////////

@JSExport("EmbedMain")
object EmbedMain {
//  This goes into the manifest if desired
//  "//content_scripts": [
//      {
//        "matches": ["http://www.pathofexile.com/*"],
//        "js": ["looty-fastopt.js", "jslib/embed-startup.js"]
//      }
//  ],

  @JSExport
  def main() {
    console.log("Experimental Shop Helper Loaded!!")
  }

}