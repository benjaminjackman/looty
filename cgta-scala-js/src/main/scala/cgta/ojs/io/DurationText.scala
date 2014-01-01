package cgta.ojs.io


//////////////////////////////////////////////////////////////
// Created by bjackman @ 1/1/14 4:40 PM
//////////////////////////////////////////////////////////////


object DurationText {
  /**
   *
   * Formats a duration that is a number of nanoSeconds
   * as
   * 5d4h2m10s5ms145ms17ns
   *
   * if maxShowFields is set to 2 this would render as
   * 5d4h
   *
   */
  def durationSb(x: Long, maxShowFields: Long, millisTime: Boolean) = {
    var ret = ""
    def append(s : Any) {
      ret += s.toString
    }
    if (x == 0L) {
      if (millisTime) ret += "0ms" else ret += "0ns"
    } else {
      val Mil = 1000000
      var y = if (millisTime) x * Mil  else x
      y = if (x < 0L) -y else y
      val ns = y % 1000
      y /= 1000
      val us = y % 1000
      y /= 1000
      val ms = y % 1000
      y /= 1000
      val s = y % 60
      y /= 60
      val m = y % 60
      y /= 60
      val h = y % 24
      y /= 24
      val d = y

      var z = 0

      if (x < 0L) {append("-")}
      if (d > 0) {append(d);append("d"); z += 1}
      if (z < maxShowFields && (z > 0 || h > 0)) {append(h);append("h"); z += 1}
      if (z < maxShowFields && (z > 0 || m > 0)) {append(m);append("m"); z += 1}
      if (z < maxShowFields && (z > 0 || s > 0)) {append(s);append("s"); z += 1}
      if (z < maxShowFields && (z > 0 || ms > 0)) {append(ms);append("ms"); z += 1}
      if (z < maxShowFields && (z > 0 || us > 0)) {append(us);append("us"); z += 1}
      if (z < maxShowFields && (z > 0 || ns > 0)) {append(ns);append("ns"); z += 1}
    }
    ret
  }

  /**
   * Old school function.
   *
   */
  def durationNs(nanos: Long, showFields: Long = 999): String = durationSb(nanos, showFields, false)
  def durationMs(millis: Long, showFields: Long = 999): String = durationSb(millis, showFields, true)

}