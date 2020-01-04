package looty
package views

import org.scalajs.jquery.JQueryStatic

import scala.scalajs.js


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 1:58 PM
//////////////////////////////////////////////////////////////


object Alerter {


  def randomItem[A](xs: Seq[A]): A = {
    xs(getRandomInt(0, xs.size))
  }

  val reloadMsgs = List(
    "This is going to take forever. Thanks, Obama!",
    "Alright you asked for it",
    "Take a nap this is going to take a while",
    "Stop moving your tabs!",
    "Reticulating splines"
  )

  val llamas = {
    val msgs = List(
      "5000 looting llama llama  llamas!",
      "zoooot",
      "uhh ree buh! uhh ree buh!",
      "on delay! on delay! on delay!",
      "wooot wooot",
      "zzpapappa ",
      "wooooooooooooooooooo!",
      "pheeeeeee!"
    )

    "Llama mode activated! " + (0 until 100).map(x => randomItem(msgs)).mkString(" ") + "PHEW! I SURE HOPE THAT WAS WORTH IT."
  }

  val noReloadMsgs = List(
    "You chose wisely my friend, had you said yes, I would've bitten your ear off.",
    "Please ask G.G.G. to add Item Levels in the item descriptions, they say it confuses noobs, noobs, more like boobs " + "hee ha ho " * 5 + " Who programmed me to laugh like this ... and why?",
    "Pan flute music is where it's at woooo hoooo doooo dooot poooot poooot",
    "Buy the new radioactive uranium microtransactions, make your character grow and glow",
    "Frank Stallone",
    "A dingo ate my baby kiwi, hey that's not even accurate ... or funny!",
    "Fun fact: Kiwi meat tastes like shoe polish",
    llamas,
    "DUN DUN DUN",
    "WAH WAH",
    "Danger zone!",
    "You could say that Path of exile is the kiwi fruit of grinding gears games labors. you could say that. Then you go die.",
    "GO! " * 25,
    "A wise decision, for as the correct choice holds life, the incorrect choice holds endless server reload time",
    "Kaom can cut through a hot knife with butter",
    "In Wraeclast ground burns you!",
    "Moon sugar and skooma? AAAAAhhhhhhhhh",
    "Stay out of my fishing hole!"
  )


  val jq: JQueryStatic = global.jQuery.asInstanceOf[JQueryStatic]
  def info(msg: String) { display("info", msg) }
  def warn(msg: String) { display("warn", msg) }
  def error(msg: String) { display("error", msg) }
  private def display(cls: String, msg: String) {
    val el = jq("#alerter")
    el.empty()
		// using Font Awesome icons   to explain alert status more clearly
		// as follows .info - question mark in circle, .warn - exclamation mark in triangle, .error - exclamation mark in circle
		var fontAwesomeSignClass = ""
		cls match {
			case "info" => fontAwesomeSignClass = "<i class='fa fa-question-circle'></i>"
			case "warn" => fontAwesomeSignClass = "<i class='fa fa-exclamation-triangle'></i>"
			case "error" => fontAwesomeSignClass = "<i class='fa fa-exclamation-circle'></i>"
			case default => fontAwesomeSignClass = ""
		}

    el.html(s"""<div class="$cls">$fontAwesomeSignClass $msg</div>""")
  }

//  private val feedback_0_2_1_10 = "http://www.reddit.com/r/pathofexile/comments/2ek6da/tools_looty_stash_searching_and_gem_xp_tracking/"
//  private def redditLink(msg: String) = s"""<a target="_blank" href="$feedback_0_2_1_10">$msg</a>"""



  //private val mainGGGForumUrl = "http://www.pathofexile.com/forum/view-thread/832233"

  //def featuresLink(msg: String) = mainGGGForumLink(msg: String)
  def showLink(url: String, msg: String) = s"""<a target="_blank" href="$url">$msg</a>"""

  // Returns a random integer between min (included) and max (excluded)
  def getRandomInt(min: Int, max: Int): Int = {
    (math.floor(math.random * (max - min)) + min).toInt
  }

//  lazy val speaker = {
//    global.meSpeak.loadConfig("jslib/mespeak/mespeak_config.json")
//    global.meSpeak.loadVoice("jslib/mespeak/voices/en/en-us.json")
//    global.meSpeak
//  }

//  def stopSpeak(msg: String) {
//    speaker.stop()
//    speaker.speak(msg)
//  }


  def infoSpeak(msg: String) {
    info(msg)
//    stopSpeak(msg)
  }

  def reloadMsg() {
    val msg = randomItem(reloadMsgs)
    infoSpeak(msg)
  }

  def noReloadMsg() {
    val msg = randomItem(noReloadMsgs)
    if (msg.contains("llama")) {
      jq("body").addClass("llama-mode")
      info("LLAMA MODE!!!!")
//      speaker.stop()
//      speaker.speak(llamas, js.Dynamic.literal(pitch = 800, speed = 300))
    } else {
      jq("body").removeClass("llama-mode")
      infoSpeak(msg)
    }

  }

}
