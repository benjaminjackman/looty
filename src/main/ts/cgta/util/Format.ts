//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 8/16/13 1:43 AM
//////////////////////////////////////////////////////////////

/// <reference path="_all.d.ts" />

module Cgta.Util.Format {

  interface TimeUnit {
    suffix: string;
    nanos: number;
  }

  var nsec = {suffix: "ns", nanos: 1};
  var usec = {suffix: "μs", nanos: 1000 * nsec.nanos};
  var msec = {suffix: "ms", nanos: 1000 * usec.nanos};
  var sec = {suffix: "s", nanos: 1000 * msec.nanos};
  var min = {suffix: "m", nanos: 60 * sec.nanos};
  var hour = {suffix: "h", nanos: 60 * min.nanos};
  var day = {suffix: "d", nanos: 24 * hour.nanos};
  var all = [day, hour, min, sec, msec, usec, nsec];


  /**
   * Adds upto 2 units of precision for a duration
   *
   * 5,000,000 becomes 5ms
   * 5,001,000 becomes 5ms1us
   *
   * etc
   *
   * @param ns
   * @returns {string}
   */
  export function durationNs(ns:number):string {
    if (ns == 0) return "0";
    var form = function (ns:number, hi:TimeUnit, lo:TimeUnit) {
      var top = Math.floor(ns / hi.nanos);
      var rem = ns - top * hi.nanos;
      var bot = Math.round(rem / lo.nanos);
      return top + hi.suffix + (bot != 0 ? bot + lo.suffix : "");
    };
    var ans = Math.abs(ns);
    var sign = ns < 0 ? "-" : "";
    var i = 0;
    var res:string = null;

    while (i + 1 < all.length) {
      if (ans >= all[i].nanos) {
        res = form(ans, all[i], all[i + 1]);
        break;
      }
      i += 1;
    }
    if (res == null) res =  ans + all[i].suffix;
    return sign + res;
  }


  export function durationMs(ms:number):string {
    return durationNs(ms * 1000 * 1000)
  }


  /**
   * adds comments after every 3 digits
   *
   * @param s
   * @returns {string}
   */
  export function commatize(s:number) : string {
    return d3.format(",g")(s);
  }

  /**
   * Turns a number into a string that is numeric.
   * Will always show cents to get rid of the trim off
   * the right 3 characters
   *
   * so 100 become $100
   * -100.4566 becomes -$100.46
   *
   * @param n
   * @returns {string}
   */
  export function monetize(n:number) : string {
    return d3.format("$.2f")(n);
  }

  /**
   * A combination of monetize and commatize
   * @param n
   * @returns {string}
   */
  export function comonetize(n:number) : string {
    return d3.format("$,.2f")(n);
  }

  /**
   * Turns prices into fraction prices for fraction of pow2 prices
   * (most useful for bonds)
   *
   * 12.5, with a .125 mpf becomes 12+4/8
   *
   *
   * @param prc0
   * @param mpf0
   * @returns {string}
   */
  export function prettyPrice(prc0:any, mpf0:any):string {
    var prc = +prc0;
    var mpf = +mpf0;
    if (prc == prc && mpf == mpf) {
      if (mpf == (1 / 8) ||
        mpf == (1 / 16) ||
        mpf == (1 / 32) ||
        mpf == (1 / 64) ||
        mpf == (1 / 128) ||
        mpf == (1 / 256)) {
        var whole = Math.floor(prc);
        var fract = Math.abs(prc % 1);
        return whole + "+" + fract / mpf + "/" + 1 / mpf
      } else {
        return  "" + prc;
      }
    } else {
      return ""+prc0;
    }
  }

}