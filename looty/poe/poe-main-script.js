/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/* http://keith-wood.name/countdown.html
 Countdown for jQuery v1.6.1.
 Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
 Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
 Please attribute the author if you use it. */

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

/*
 * jScrollPane - v2.0.0beta12 - 2012-05-14
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */

// Copyright (c) 2011 Jack Moore - jack@colorpowered.com

// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

/*! jQuery UI - v1.10.3 - 2013-11-03
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.datepicker.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.happyworm.com/jquery/jplayer
 *
 * Copyright (c) 2009 - 2010 Happyworm Ltd
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * Author: Mark J Panaghiston
 * Version: 1.2.0
 * Date: 11th July 2010
 */

/*
 * Mailcheck https://github.com/Kicksend/mailcheck
 * Author
 * Derrick Ko (@derrickko)
 *
 * License
 * Copyright (c) 2012 Receivd, Inc.
 *
 * Licensed under the MIT License.
 *
 * v 1.1
 */

// (c) 2008-2009 Angus Turnbull http://www.twinhelix.com

// This is licensed under the GNU LGPL, version 2.1 or later.

// For details, see: http://creativecommons.org/licenses/LGPL/2.1/

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/**
 * Backbone-relational.js 0.5.0
 * (c) 2011 Paul Uithol
 *
 * Backbone-relational may be freely distributed under the MIT license.
 * For details and documentation: https://github.com/PaulUithol/Backbone-relational.
 * Depends on Backbone: https://github.com/documentcloud/backbone.
 */

/*! backbone.paginator - v0.1.54 - 8/18/2012
 * http://github.com/addyosmani/backbone.paginator
 * Copyright (c) 2012 Addy Osmani; Licensed MIT */

// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/*! NProgress (c) 2013, Rico Sta. Cruz
 *  http://ricostacruz.com/nprogress */

(function (e, t) {
  function _(e) {
    var t = M[e] = {};
    return v.each(e.split(y), function (e, n) {t[n] = !0}), t
  }

  function H(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();
      r = e.getAttribute(i);
      if (typeof r == "string") {
        try {r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r} catch (s) {}
        v.data(e, n, r)
      } else r = t
    }
    return r
  }

  function B(e) {
    var t;
    for (t in e) {
      if (t === "data" && v.isEmptyObject(e[t]))continue;
      if (t !== "toJSON")return!1
    }
    return!0
  }

  function et() {return!1}

  function tt() {return!0}

  function ut(e) {return!e || !e.parentNode || e.parentNode.nodeType === 11}

  function at(e, t) {
    do e = e[t]; while (e && e.nodeType !== 1);
    return e
  }

  function ft(e, t, n) {
    t = t || 0;
    if (v.isFunction(t))return v.grep(e, function (e, r) {
      var i = !!t.call(e, r, e);
      return i === n
    });
    if (t.nodeType)return v.grep(e, function (e, r) {return e === t === n});
    if (typeof t == "string") {
      var r = v.grep(e, function (e) {return e.nodeType === 1});
      if (it.test(t))return v.filter(t, r, !n);
      t = v.filter(t, r)
    }
    return v.grep(e, function (e, r) {return v.inArray(e, t) >= 0 === n})
  }

  function lt(e) {
    var t = ct.split("|"), n = e.createDocumentFragment();
    if (n.createElement)while (t.length)n.createElement(t.pop());
    return n
  }

  function Lt(e, t) {return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))}

  function At(e, t) {
    if (t.nodeType !== 1 || !v.hasData(e))return;
    var n, r, i, s = v._data(e), o = v._data(t, s), u = s.events;
    if (u) {
      delete o.handle, o.events = {};
      for (n in u)for (r = 0, i = u[n].length; r < i; r++)v.event.add(t, n, u[n][r])
    }
    o.data && (o.data = v.extend({}, o.data))
  }

  function Ot(e, t) {
    var n;
    if (t.nodeType !== 1)return;
    t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
  }

  function Mt(e) {return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []}

  function _t(e) {Et.test(e.type) && (e.defaultChecked = e.checked)}

  function Qt(e, t) {
    if (t in e)return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Jt.length;
    while (i--) {
      t = Jt[i] + n;
      if (t in e)return t
    }
    return r
  }

  function Gt(e, t) {return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)}

  function Yt(e, t) {
    var n, r, i = [], s = 0, o = e.length;
    for (; s < o; s++) {
      n = e[s];
      if (!n.style)continue;
      i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
    }
    for (s = 0; s < o; s++) {
      n = e[s];
      if (!n.style)continue;
      if (!t || n.style.display === "none" || n.style.display === "")n.style.display = t ? i[s] || "" : "none"
    }
    return e
  }

  function Zt(e, t, n) {
    var r = Rt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function en(e, t, n, r) {
    var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, s = 0;
    for (; i < 4; i += 2)n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
    return s
  }

  function tn(e, t, n) {
    var r = t === "width" ? e.offsetWidth : e.offsetHeight, i = !0, s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
    if (r <= 0 || r == null) {
      r = Dt(e, t);
      if (r < 0 || r == null)r = e.style[t];
      if (Ut.test(r))return r;
      i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
  }

  function nn(e) {
    if (Wt[e])return Wt[e];
    var t = v("<" + e + ">").appendTo(i.body), n = t.css("display");
    t.remove();
    if (n === "none" || n === "") {
      Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
      if (!Ht || !Pt.createElement)Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
      t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
    }
    return Wt[e] = n, n
  }

  function fn(e, t, n, r) {
    var i;
    if (v.isArray(t))v.each(t, function (t, i) {n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)}); else if (!n && v.type(t) === "object")for (i in t)fn(e + "[" + i + "]", t[i], n, r); else r(e, t)
  }

  function Cn(e) {
    return function (t, n) {
      typeof t != "string" && (n = t, t = "*");
      var r, i, s, o = t.toLowerCase().split(y), u = 0, a = o.length;
      if (v.isFunction(n))for (; u < a; u++)r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
    }
  }

  function kn(e, n, r, i, s, o) {
    s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
    var u, a = e[s], f = 0, l = a ? a.length : 0, c = e === Sn;
    for (; f < l && (c || !u); f++)u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
    return(c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
  }

  function Ln(e, n) {
    var r, i, s = v.ajaxSettings.flatOptions || {};
    for (r in n)n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
    i && v.extend(!0, e, i)
  }

  function An(e, n, r) {
    var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
    for (s in l)s in r && (n[l[s]] = r[s]);
    while (f[0] === "*")f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
    if (i)for (s in a)if (a[s] && a[s].test(i)) {
      f.unshift(s);
      break
    }
    if (f[0]in r)o = f[0]; else {
      for (s in r) {
        if (!f[0] || e.converters[s + " " + f[0]]) {
          o = s;
          break
        }
        u || (u = s)
      }
      o = o || u
    }
    if (o)return o !== f[0] && f.unshift(o), r[o]
  }

  function On(e, t) {
    var n, r, i, s, o = e.dataTypes.slice(), u = o[0], a = {}, f = 0;
    e.dataFilter && (t = e.dataFilter(t, e.dataType));
    if (o[1])for (n in e.converters)a[n.toLowerCase()] = e.converters[n];
    for (; i = o[++f];)if (i !== "*") {
      if (u !== "*" && u !== i) {
        n = a[u + " " + i] || a["* " + i];
        if (!n)for (r in a) {
          s = r.split(" ");
          if (s[1] === i) {
            n = a[u + " " + s[0]] || a["* " + s[0]];
            if (n) {
              n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
              break
            }
          }
        }
        if (n !== !0)if (n && e["throws"])t = n(t); else try {t = n(t)} catch (l) {return{state: "parsererror", error: n ? l : "No conversion from " + u + " to " + i}}
      }
      u = i
    }
    return{state: "success", data: t}
  }

  function Fn() {try {return new e.XMLHttpRequest} catch (t) {}}

  function In() {try {return new e.ActiveXObject("Microsoft.XMLHTTP")} catch (t) {}}

  function $n() {return setTimeout(function () {qn = t}, 0), qn = v.now()}

  function Jn(e, t) {
    v.each(t, function (t, n) {
      var r = (Vn[t] || []).concat(Vn["*"]), i = 0, s = r.length;
      for (; i < s; i++)if (r[i].call(e, t, n))return
    })
  }

  function Kn(e, t, n) {
    var r, i = 0, s = 0, o = Xn.length, u = v.Deferred().always(function () {delete a.elem}), a = function () {
      var t = qn || $n(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, i = 1 - r, s = 0, o = f.tweens.length;
      for (; s < o; s++)f.tweens[s].run(i);
      return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
    }, f = u.promise({elem: e, props: v.extend({}, t), opts: v.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: qn || $n(), duration: n.duration, tweens: [], createTween: function (t, n, r) {
      var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
      return f.tweens.push(i), i
    }, stop: function (t) {
      var n = 0, r = t ? f.tweens.length : 0;
      for (; n < r; n++)f.tweens[n].run(1);
      return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
    }}), l = f.props;
    Qn(l, f.opts.specialEasing);
    for (; i < o; i++) {
      r = Xn[i].call(f, e, l, f.opts);
      if (r)return r
    }
    return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {anim: f, queue: f.opts.queue, elem: e})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
  }

  function Qn(e, t) {
    var n, r, i, s, o;
    for (n in e) {
      r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
      if (o && "expand"in o) {
        s = o.expand(s), delete e[r];
        for (n in s)n in e || (e[n] = s[n], t[n] = i)
      } else t[r] = i
    }
  }

  function Gn(e, t, n) {
    var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, m = [], g = e.nodeType && Gt(e);
    n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {l.unqueued || c()}), l.unqueued++, h.always(function () {h.always(function () {l.unqueued--, v.queue(e, "fx").length || l.empty.fire()})})), e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function () {p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]}));
    for (r in t) {
      s = t[r];
      if (Un.exec(s)) {
        delete t[r], a = a || s === "toggle";
        if (s === (g ? "hide" : "show"))continue;
        m.push(r)
      }
    }
    o = m.length;
    if (o) {
      u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden"in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function () {v(e).hide()}), h.done(function () {
        var t;
        v.removeData(e, "fxshow", !0);
        for (t in d)v.style(e, t, d[t])
      });
      for (r = 0; r < o; r++)i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
    }
  }

  function Yn(e, t, n, r, i) {return new Yn.prototype.init(e, t, n, r, i)}

  function Zn(e, t) {
    var n, r = {height: e}, i = 0;
    t = t ? 1 : 0;
    for (; i < 4; i += 2 - t)n = $t[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function tr(e) {return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1}

  var n, r, i = e.document, s = e.location, o = e.navigator, u = e.jQuery, a = e.$, f = Array.prototype.push, l = Array.prototype.slice, c = Array.prototype.indexOf, h = Object.prototype.toString, p = Object.prototype.hasOwnProperty, d = String.prototype.trim, v = function (e, t) {return new v.fn.init(e, t, n)}, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, g = /\S/, y = /\s+/, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, S = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, C = /^-ms-/, k = /-([\da-z])/gi, L = function (e, t) {return(t + "").toUpperCase()}, A = function () {i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())}, O = {};
  v.fn = v.prototype = {constructor: v, init: function (e, n, r) {
    var s, o, u, a;
    if (!e)return this;
    if (e.nodeType)return this.context = this[0] = e, this.length = 1, this;
    if (typeof e == "string") {
      e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
      if (s && (s[1] || !n)) {
        if (s[1])return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
        o = i.getElementById(s[2]);
        if (o && o.parentNode) {
          if (o.id !== s[2])return r.find(e);
          this.length = 1, this[0] = o
        }
        return this.context = i, this.selector = e, this
      }
      return!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
    }
    return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
  }, selector: "", jquery: "1.8.3", length: 0, size: function () {return this.length}, toArray: function () {return l.call(this)}, get: function (e) {return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]}, pushStack: function (e, t, n) {
    var r = v.merge(this.constructor(), e);
    return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
  }, each: function (e, t) {return v.each(this, e, t)}, ready: function (e) {return v.ready.promise().done(e), this}, eq: function (e) {return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)}, first: function () {return this.eq(0)}, last: function () {return this.eq(-1)}, slice: function () {return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))}, map: function (e) {return this.pushStack(v.map(this, function (t, n) {return e.call(t, n, t)}))}, end: function () {return this.prevObject || this.constructor(null)}, push: f, sort: [].sort, splice: [].splice}, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
    var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
    typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
    for (; a < f; a++)if ((e = arguments[a]) != null)for (n in e) {
      r = u[n], i = e[n];
      if (u === i)continue;
      l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
    }
    return u
  }, v.extend({noConflict: function (t) {return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v}, isReady: !1, readyWait: 1, holdReady: function (e) {e ? v.readyWait++ : v.ready(!0)}, ready: function (e) {
    if (e === !0 ? --v.readyWait : v.isReady)return;
    if (!i.body)return setTimeout(v.ready, 1);
    v.isReady = !0;
    if (e !== !0 && --v.readyWait > 0)return;
    r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
  }, isFunction: function (e) {return v.type(e) === "function"}, isArray: Array.isArray || function (e) {return v.type(e) === "array"}, isWindow: function (e) {return e != null && e == e.window}, isNumeric: function (e) {return!isNaN(parseFloat(e)) && isFinite(e)}, type: function (e) {return e == null ? String(e) : O[h.call(e)] || "object"}, isPlainObject: function (e) {
    if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e))return!1;
    try {if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf"))return!1} catch (n) {return!1}
    var r;
    for (r in e);
    return r === t || p.call(e, r)
  }, isEmptyObject: function (e) {
    var t;
    for (t in e)return!1;
    return!0
  }, error: function (e) {throw new Error(e)}, parseHTML: function (e, t, n) {
    var r;
    return!e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
  }, parseJSON: function (t) {
    if (!t || typeof t != "string")return null;
    t = v.trim(t);
    if (e.JSON && e.JSON.parse)return e.JSON.parse(t);
    if (S.test(t.replace(T, "@").replace(N, "]").replace(x, "")))return(new Function("return " + t))();
    v.error("Invalid JSON: " + t)
  }, parseXML: function (n) {
    var r, i;
    if (!n || typeof n != "string")return null;
    try {e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))} catch (s) {r = t}
    return(!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
  }, noop: function () {}, globalEval: function (t) {t && g.test(t) && (e.execScript || function (t) {e.eval.call(e, t)})(t)}, camelCase: function (e) {return e.replace(C, "ms-").replace(k, L)}, nodeName: function (e, t) {return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()}, each: function (e, n, r) {
    var i, s = 0, o = e.length, u = o === t || v.isFunction(e);
    if (r) {if (u) {for (i in e)if (n.apply(e[i], r) === !1)break} else for (; s < o;)if (n.apply(e[s++], r) === !1)break} else if (u) {for (i in e)if (n.call(e[i], i, e[i]) === !1)break} else for (; s < o;)if (n.call(e[s], s, e[s++]) === !1)break;
    return e
  }, trim: d && !d.call("﻿ ") ? function (e) {return e == null ? "" : d.call(e)} : function (e) {return e == null ? "" : (e + "").replace(b, "")}, makeArray: function (e, t) {
    var n, r = t || [];
    return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
  }, inArray: function (e, t, n) {
    var r;
    if (t) {
      if (c)return c.call(t, e, n);
      r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
      for (; n < r; n++)if (n in t && t[n] === e)return n
    }
    return-1
  }, merge: function (e, n) {
    var r = n.length, i = e.length, s = 0;
    if (typeof r == "number")for (; s < r; s++)e[i++] = n[s]; else while (n[s] !== t)e[i++] = n[s++];
    return e.length = i, e
  }, grep: function (e, t, n) {
    var r, i = [], s = 0, o = e.length;
    n = !!n;
    for (; s < o; s++)r = !!t(e[s], s), n !== r && i.push(e[s]);
    return i
  }, map: function (e, n, r) {
    var i, s, o = [], u = 0, a = e.length, f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
    if (f)for (; u < a; u++)i = n(e[u], u, r), i != null && (o[o.length] = i); else for (s in e)i = n(e[s], s, r), i != null && (o[o.length] = i);
    return o.concat.apply([], o)
  }, guid: 1, proxy: function (e, n) {
    var r, i, s;
    return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {return e.apply(n, i.concat(l.call(arguments)))}, s.guid = e.guid = e.guid || v.guid++, s) : t
  }, access: function (e, n, r, i, s, o, u) {
    var a, f = r == null, l = 0, c = e.length;
    if (r && typeof r == "object") {
      for (l in r)v.access(e, n, l, r[l], 1, o, i);
      s = 1
    } else if (i !== t) {
      a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {return a.call(v(e), n)}) : (n.call(e, i), n = null));
      if (n)for (; l < c; l++)n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
      s = 1
    }
    return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
  }, now: function () {return(new Date).getTime()}}), v.ready.promise = function (t) {
    if (!r) {
      r = v.Deferred();
      if (i.readyState === "complete")setTimeout(v.ready, 1); else if (i.addEventListener)i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1); else {
        i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
        var n = !1;
        try {n = e.frameElement == null && i.documentElement} catch (s) {}
        n && n.doScroll && function o() {
          if (!v.isReady) {
            try {n.doScroll("left")} catch (e) {return setTimeout(o, 50)}
            v.ready()
          }
        }()
      }
    }
    return r.promise(t)
  }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {O["[object " + t + "]"] = t.toLowerCase()}), n = v(i);
  var M = {};
  v.Callbacks = function (e) {
    e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
    var n, r, i, s, o, u, a = [], f = !e.once && [], l = function (t) {
      n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
      for (; a && u < o; u++)if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        n = !1;
        break
      }
      i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
    }, c = {add: function () {
      if (a) {
        var t = a.length;
        (function r(t) {
          v.each(t, function (t, n) {
            var i = v.type(n);
            i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
          })
        })(arguments), i ? o = a.length : n && (s = t, l(n))
      }
      return this
    }, remove: function () {
      return a && v.each(arguments, function (e, t) {
        var n;
        while ((n = v.inArray(t, a, n)) > -1)a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
      }), this
    }, has: function (e) {return v.inArray(e, a) > -1}, empty: function () {return a = [], this}, disable: function () {return a = f = n = t, this}, disabled: function () {return!a}, lock: function () {return f = t, n || c.disable(), this}, locked: function () {return!f}, fireWith: function (e, t) {return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this}, fire: function () {return c.fireWith(this, arguments), this}, fired: function () {return!!r}};
    return c
  }, v.extend({Deferred: function (e) {
    var t = [
      ["resolve", "done", v.Callbacks("once memory"), "resolved"],
      ["reject", "fail", v.Callbacks("once memory"), "rejected"],
      ["notify", "progress", v.Callbacks("memory")]
    ], n = "pending", r = {state: function () {return n}, always: function () {return i.done(arguments).fail(arguments), this}, then: function () {
      var e = arguments;
      return v.Deferred(function (n) {
        v.each(t, function (t, r) {
          var s = r[0], o = e[t];
          i[r[1]](v.isFunction(o) ? function () {
            var e = o.apply(this, arguments);
            e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
          } : n[s])
        }), e = null
      }).promise()
    }, promise: function (e) {return e != null ? v.extend(e, r) : r}}, i = {};
    return r.pipe = r.then, v.each(t, function (e, s) {
      var o = s[2], u = s[3];
      r[s[1]] = o.add, u && o.add(function () {n = u}, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
    }), r.promise(i), e && e.call(i, i), i
  }, when: function (e) {
    var t = 0, n = l.call(arguments), r = n.length, i = r !== 1 || e && v.isFunction(e.promise) ? r : 0, s = i === 1 ? e : v.Deferred(), o = function (e, t, n) {return function (r) {t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)}}, u, a, f;
    if (r > 1) {
      u = new Array(r), a = new Array(r), f = new Array(r);
      for (; t < r; t++)n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
    }
    return i || s.resolveWith(f, n), s.promise()
  }}), v.support = function () {
    var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
    p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
    if (!n || !r || !n.length)return{};
    s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: r.getAttribute("href") === "/a", opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: u.value === "on", optSelected: o.selected, getSetAttribute: p.className !== "t", enctype: !!i.createElement("form").enctype, html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: i.compatMode === "CSS1Compat", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1}, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
    try {delete p.test} catch (d) {t.deleteExpando = !1}
    !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {t.noCloneEvent = !1}), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
    if (p.attachEvent)for (l in{submit: !0, change: !0, focusin: !0})f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
    return v(function () {
      var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = i.getElementsByTagName("body")[0];
      if (!a)return;
      n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {width: "4px"}).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
    }), a.removeChild(p), n = r = s = o = u = a = p = null, t
  }();
  var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
  v.extend({cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (e) {return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)}, data: function (e, n, r, i) {
    if (!v.acceptData(e))return;
    var s, o, u = v.expando, a = typeof n == "string", f = e.nodeType, l = f ? v.cache : e, c = f ? e[u] : e[u] && u;
    if ((!c || !l[c] || !i && !l[c].data) && a && r === t)return;
    c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
    if (typeof n == "object" || typeof n == "function")i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
    return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
  }, removeData: function (e, t, n) {
    if (!v.acceptData(e))return;
    var r, i, s, o = e.nodeType, u = o ? v.cache : e, a = o ? e[v.expando] : v.expando;
    if (!u[a])return;
    if (t) {
      r = n ? u[a] : u[a].data;
      if (r) {
        v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
        for (i = 0, s = t.length; i < s; i++)delete r[t[i]];
        if (!(n ? B : v.isEmptyObject)(r))return
      }
    }
    if (!n) {
      delete u[a].data;
      if (!B(u[a]))return
    }
    o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
  }, _data: function (e, t, n) {return v.data(e, t, n, !0)}, acceptData: function (e) {
    var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
    return!t || t !== !0 && e.getAttribute("classid") === t
  }}), v.fn.extend({data: function (e, n) {
    var r, i, s, o, u, a = this[0], f = 0, l = null;
    if (e === t) {
      if (this.length) {
        l = v.data(a);
        if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
          s = a.attributes;
          for (u = s.length; f < u; f++)o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
          v._data(a, "parsedAttrs", !0)
        }
      }
      return l
    }
    return typeof e == "object" ? this.each(function () {v.data(this, e)}) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
      if (n === t)return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
      r[1] = n, this.each(function () {
        var t = v(this);
        t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
      })
    }, null, n, arguments.length > 1, null, !1))
  }, removeData: function (e) {return this.each(function () {v.removeData(this, e)})}}), v.extend({queue: function (e, t, n) {
    var r;
    if (e)return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
  }, dequeue: function (e, t) {
    t = t || "fx";
    var n = v.queue(e, t), r = n.length, i = n.shift(), s = v._queueHooks(e, t), o = function () {v.dequeue(e, t)};
    i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
  }, _queueHooks: function (e, t) {
    var n = t + "queueHooks";
    return v._data(e, n) || v._data(e, n, {empty: v.Callbacks("once memory").add(function () {v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)})})
  }}), v.fn.extend({queue: function (e, n) {
    var r = 2;
    return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
      var t = v.queue(this, e, n);
      v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
    })
  }, dequeue: function (e) {return this.each(function () {v.dequeue(this, e)})}, delay: function (e, t) {
    return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
      var r = setTimeout(t, e);
      n.stop = function () {clearTimeout(r)}
    })
  }, clearQueue: function (e) {return this.queue(e || "fx", [])}, promise: function (e, n) {
    var r, i = 1, s = v.Deferred(), o = this, u = this.length, a = function () {--i || s.resolveWith(o, [o])};
    typeof e != "string" && (n = e, e = t), e = e || "fx";
    while (u--)r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
    return a(), s.promise(n)
  }});
  var j, F, I, q = /[\t\r\n]/g, R = /\r/g, U = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea|)$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, V = v.support.getSetAttribute;
  v.fn.extend({attr: function (e, t) {return v.access(this, v.attr, e, t, arguments.length > 1)}, removeAttr: function (e) {return this.each(function () {v.removeAttr(this, e)})}, prop: function (e, t) {return v.access(this, v.prop, e, t, arguments.length > 1)}, removeProp: function (e) {return e = v.propFix[e] || e, this.each(function () {try {this[e] = t, delete this[e]} catch (n) {}})}, addClass: function (e) {
    var t, n, r, i, s, o, u;
    if (v.isFunction(e))return this.each(function (t) {v(this).addClass(e.call(this, t, this.className))});
    if (e && typeof e == "string") {
      t = e.split(y);
      for (n = 0, r = this.length; n < r; n++) {
        i = this[n];
        if (i.nodeType === 1)if (!i.className && t.length === 1)i.className = e; else {
          s = " " + i.className + " ";
          for (o = 0, u = t.length; o < u; o++)s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
          i.className = v.trim(s)
        }
      }
    }
    return this
  }, removeClass: function (e) {
    var n, r, i, s, o, u, a;
    if (v.isFunction(e))return this.each(function (t) {v(this).removeClass(e.call(this, t, this.className))});
    if (e && typeof e == "string" || e === t) {
      n = (e || "").split(y);
      for (u = 0, a = this.length; u < a; u++) {
        i = this[u];
        if (i.nodeType === 1 && i.className) {
          r = (" " + i.className + " ").replace(q, " ");
          for (s = 0, o = n.length; s < o; s++)while (r.indexOf(" " + n[s] + " ") >= 0)r = r.replace(" " + n[s] + " ", " ");
          i.className = e ? v.trim(r) : ""
        }
      }
    }
    return this
  }, toggleClass: function (e, t) {
    var n = typeof e, r = typeof t == "boolean";
    return v.isFunction(e) ? this.each(function (n) {v(this).toggleClass(e.call(this, n, this.className, t), t)}) : this.each(function () {
      if (n === "string") {
        var i, s = 0, o = v(this), u = t, a = e.split(y);
        while (i = a[s++])u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
      } else if (n === "undefined" || n === "boolean")this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
    })
  }, hasClass: function (e) {
    var t = " " + e + " ", n = 0, r = this.length;
    for (; n < r; n++)if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0)return!0;
    return!1
  }, val: function (e) {
    var n, r, i, s = this[0];
    if (!arguments.length) {
      if (s)return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get"in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
      return
    }
    return i = v.isFunction(e), this.each(function (r) {
      var s, o = v(this);
      if (this.nodeType !== 1)return;
      i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {return e == null ? "" : e + ""})), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
      if (!n || !("set"in n) || n.set(this, s, "value") === t)this.value = s
    })
  }}), v.extend({valHooks: {option: {get: function (e) {
    var t = e.attributes.value;
    return!t || t.specified ? e.value : e.text
  }}, select: {get: function (e) {
    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
    for (; a < u; a++) {
      n = r[a];
      if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
        t = v(n).val();
        if (s)return t;
        o.push(t)
      }
    }
    return o
  }, set: function (e, t) {
    var n = v.makeArray(t);
    return v(e).find("option").each(function () {this.selected = v.inArray(v(this).val(), n) >= 0}), n.length || (e.selectedIndex = -1), n
  }}}, attrFn: {}, attr: function (e, n, r, i) {
    var s, o, u, a = e.nodeType;
    if (!e || a === 3 || a === 8 || a === 2)return;
    if (i && v.isFunction(v.fn[n]))return v(e)[n](r);
    if (typeof e.getAttribute == "undefined")return v.prop(e, n, r);
    u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
    if (r !== t) {
      if (r === null) {
        v.removeAttr(e, n);
        return
      }
      return o && "set"in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
    }
    return o && "get"in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
  }, removeAttr: function (e, t) {
    var n, r, i, s, o = 0;
    if (t && e.nodeType === 1) {
      r = t.split(y);
      for (; o < r.length; o++)i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
    }
  }, attrHooks: {type: {set: function (e, t) {
    if (U.test(e.nodeName) && e.parentNode)v.error("type property can't be changed"); else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
      var n = e.value;
      return e.setAttribute("type", t), n && (e.value = n), t
    }
  }}, value: {get: function (e, t) {return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null}, set: function (e, t, n) {
    if (j && v.nodeName(e, "button"))return j.set(e, t, n);
    e.value = t
  }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (e, n, r) {
    var i, s, o, u = e.nodeType;
    if (!e || u === 3 || u === 8 || u === 2)return;
    return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set"in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get"in s && (i = s.get(e, n)) !== null ? i : e[n]
  }, propHooks: {tabIndex: {get: function (e) {
    var n = e.getAttributeNode("tabindex");
    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
  }}}}), F = {get: function (e, n) {
    var r, i = v.prop(e, n);
    return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
  }, set: function (e, t, n) {
    var r;
    return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
  }}, V || (I = {name: !0, id: !0, coords: !0}, j = v.valHooks.button = {get: function (e, n) {
    var r;
    return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
  }, set: function (e, t, n) {
    var r = e.getAttributeNode(n);
    return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
  }}, v.each(["width", "height"], function (e, t) {v.attrHooks[t] = v.extend(v.attrHooks[t], {set: function (e, n) {if (n === "")return e.setAttribute(t, "auto"), n}})}), v.attrHooks.contenteditable = {get: j.get, set: function (e, t, n) {t === "" && (t = "false"), j.set(e, t, n)}}), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
    v.attrHooks[n] = v.extend(v.attrHooks[n], {get: function (e) {
      var r = e.getAttribute(n, 2);
      return r === null ? t : r
    }})
  }), v.support.style || (v.attrHooks.style = {get: function (e) {return e.style.cssText.toLowerCase() || t}, set: function (e, t) {return e.style.cssText = t + ""}}), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {get: function (e) {
    var t = e.parentNode;
    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
  }})), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {v.valHooks[this] = {get: function (e) {return e.getAttribute("value") === null ? "on" : e.value}}}), v.each(["radio", "checkbox"], function () {v.valHooks[this] = v.extend(v.valHooks[this], {set: function (e, t) {if (v.isArray(t))return e.checked = v.inArray(v(e).val(), t) >= 0}})});
  var $ = /^(?:textarea|input|select)$/i, J = /^([^\.]*|)(?:\.(.+)|)$/, K = /(?:^|\s)hover(\.\S+|)\b/, Q = /^key/, G = /^(?:mouse|contextmenu)|click/, Y = /^(?:focusinfocus|focusoutblur)$/, Z = function (e) {return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")};
  v.event = {add: function (e, n, r, i, s) {
    var o, u, a, f, l, c, h, p, d, m, g;
    if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e)))return;
    r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)}, u.elem = e), n = v.trim(Z(n)).split(" ");
    for (f = 0; f < n.length; f++) {
      l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({type: c, origType: l[1], data: i, handler: r, guid: r.guid, selector: s, needsContext: s && v.expr.match.needsContext.test(s), namespace: h.join(".")}, d), m = a[c];
      if (!m) {
        m = a[c] = [], m.delegateCount = 0;
        if (!g.setup || g.setup.call(e, i, h, u) === !1)e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
      }
      g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
    }
    e = null
  }, global: {}, remove: function (e, t, n, r, i) {
    var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
    if (!g || !(h = g.events))return;
    t = v.trim(Z(t || "")).split(" ");
    for (s = 0; s < t.length; s++) {
      o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
      if (!u) {
        for (u in h)v.event.remove(e, u + t[s], n, r, !0);
        continue
      }
      p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      for (c = 0; c < d.length; c++)m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
      d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
    }
    v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
  }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (n, r, s, o) {
    if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
      var u, a, f, l, c, h, p, d, m, g, y = n.type || n, b = [];
      if (Y.test(y + v.event.triggered))return;
      y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
      if ((!s || v.event.customEvent[y]) && !v.event.global[y])return;
      n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
      if (!s) {
        u = v.cache;
        for (f in u)u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
        return
      }
      n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
      if (p.trigger && p.trigger.apply(s, r) === !1)return;
      m = [
        [s, p.bindType || y]
      ];
      if (!o && !p.noBubble && !v.isWindow(s)) {
        g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
        for (c = s; l; l = l.parentNode)m.push([l, g]), c = l;
        c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
      }
      for (f = 0; f < m.length && !n.isPropagationStopped(); f++)l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
      return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
    }
    return
  }, dispatch: function (n) {
    n = v.event.fix(n || e.event);
    var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [], m = d.delegateCount, g = l.call(arguments), y = !n.exclusive && !n.namespace, b = v.event.special[n.type] || {}, w = [];
    g[0] = n, n.delegateTarget = this;
    if (b.preDispatch && b.preDispatch.call(this, n) === !1)return;
    if (m && (!n.button || n.type !== "click"))for (s = n.target; s != this; s = s.parentNode || this)if (s.disabled !== !0 || n.type !== "click") {
      u = {}, f = [];
      for (r = 0; r < m; r++)c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
      f.length && w.push({elem: s, matches: f})
    }
    d.length > m && w.push({elem: this, matches: d.slice(m)});
    for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
      a = w[r], n.currentTarget = a.elem;
      for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
        c = a.matches[i];
        if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace))n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
      }
    }
    return b.postDispatch && b.postDispatch.call(this, n), n.result
  }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e}}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
    var r, s, o, u = n.button, a = n.fromElement;
    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
  }}, fix: function (e) {
    if (e[v.expando])return e;
    var t, n, r = e, s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
    e = v.Event(r);
    for (t = o.length; t;)n = o[--t], e[n] = r[n];
    return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
  }, special: {load: {noBubble: !0}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (e, t, n) {v.isWindow(this) && (this.onbeforeunload = n)}, teardown: function (e, t) {this.onbeforeunload === t && (this.onbeforeunload = null)}}}, simulate: function (e, t, n, r) {
    var i = v.extend(new v.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
    r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
  }}, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {e.removeEventListener && e.removeEventListener(t, n, !1)} : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
  }, v.Event = function (e, t) {
    if (!(this instanceof v.Event))return new v.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
  }, v.Event.prototype = {preventDefault: function () {
    this.isDefaultPrevented = tt;
    var e = this.originalEvent;
    if (!e)return;
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
  }, stopPropagation: function () {
    this.isPropagationStopped = tt;
    var e = this.originalEvent;
    if (!e)return;
    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
  }, stopImmediatePropagation: function () {this.isImmediatePropagationStopped = tt, this.stopPropagation()}, isDefaultPrevented: et, isPropagationStopped: et, isImmediatePropagationStopped: et}, v.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
    v.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
      var n, r = this, i = e.relatedTarget, s = e.handleObj, o = s.selector;
      if (!i || i !== r && !v.contains(r, i))e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
      return n
    }}
  }), v.support.submitBubbles || (v.event.special.submit = {setup: function () {
    if (v.nodeName(this, "form"))return!1;
    v.event.add(this, "click._submit keypress._submit", function (e) {
      var n = e.target, r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
      r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {e._submit_bubble = !0}), v._data(r, "_submit_attached", !0))
    })
  }, postDispatch: function (e) {e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))}, teardown: function () {
    if (v.nodeName(this, "form"))return!1;
    v.event.remove(this, "._submit")
  }}), v.support.changeBubbles || (v.event.special.change = {setup: function () {
    if ($.test(this.nodeName)) {
      if (this.type === "checkbox" || this.type === "radio")v.event.add(this, "propertychange._change", function (e) {e.originalEvent.propertyName === "checked" && (this._just_changed = !0)}), v.event.add(this, "click._change", function (e) {this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)});
      return!1
    }
    v.event.add(this, "beforeactivate._change", function (e) {
      var t = e.target;
      $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)}), v._data(t, "_change_attached", !0))
    })
  }, handle: function (e) {
    var t = e.target;
    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")return e.handleObj.handler.apply(this, arguments)
  }, teardown: function () {return v.event.remove(this, "._change"), !$.test(this.nodeName)}}), v.support.focusinBubbles || v.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    var n = 0, r = function (e) {v.event.simulate(t, e.target, v.event.fix(e), !0)};
    v.event.special[t] = {setup: function () {n++ === 0 && i.addEventListener(e, r, !0)}, teardown: function () {--n === 0 && i.removeEventListener(e, r, !0)}}
  }), v.fn.extend({on: function (e, n, r, i, s) {
    var o, u;
    if (typeof e == "object") {
      typeof n != "string" && (r = r || n, n = t);
      for (u in e)this.on(u, n, r, e[u], s);
      return this
    }
    r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
    if (i === !1)i = et; else if (!i)return this;
    return s === 1 && (o = i, i = function (e) {return v().off(e), o.apply(this, arguments)}, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {v.event.add(this, e, i, r, n)})
  }, one: function (e, t, n, r) {return this.on(e, t, n, r, 1)}, off: function (e, n, r) {
    var i, s;
    if (e && e.preventDefault && e.handleObj)return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
    if (typeof e == "object") {
      for (s in e)this.off(s, n, e[s]);
      return this
    }
    if (n === !1 || typeof n == "function")r = n, n = t;
    return r === !1 && (r = et), this.each(function () {v.event.remove(this, e, r, n)})
  }, bind: function (e, t, n) {return this.on(e, null, t, n)}, unbind: function (e, t) {return this.off(e, null, t)}, live: function (e, t, n) {return v(this.context).on(e, this.selector, t, n), this}, die: function (e, t) {return v(this.context).off(e, this.selector || "**", t), this}, delegate: function (e, t, n, r) {return this.on(t, e, n, r)}, undelegate: function (e, t, n) {return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)}, trigger: function (e, t) {return this.each(function () {v.event.trigger(e, t, this)})}, triggerHandler: function (e, t) {if (this[0])return v.event.trigger(e, t, this[0], !0)}, toggle: function (e) {
    var t = arguments, n = e.guid || v.guid++, r = 0, i = function (n) {
      var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
      return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
    };
    i.guid = n;
    while (r < t.length)t[r++].guid = n;
    return this.click(i)
  }, hover: function (e, t) {return this.mouseenter(e).mouseleave(t || e)}}), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {v.fn[t] = function (e, n) {return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)}, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)}), function (e, t) {
    function nt(e, t, n, r) {
      n = n || [], t = t || g;
      var i, s, a, f, l = t.nodeType;
      if (!e || typeof e != "string")return n;
      if (l !== 1 && l !== 9)return[];
      a = o(t);
      if (!a && !r)if (i = R.exec(e))if (f = i[1]) {
        if (l === 9) {
          s = t.getElementById(f);
          if (!s || !s.parentNode)return n;
          if (s.id === f)return n.push(s), n
        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f)return n.push(s), n
      } else {
        if (i[2])return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
        if ((f = i[3]) && Z && t.getElementsByClassName)return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
      }
      return vt(e.replace(j, "$1"), t, n, r, a)
    }

    function rt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return n === "input" && t.type === e
      }
    }

    function it(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return(n === "input" || n === "button") && t.type === e
      }
    }

    function st(e) {
      return N(function (t) {
        return t = +t, N(function (n, r) {
          var i, s = e([], n.length, t), o = s.length;
          while (o--)n[i = s[o]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function ot(e, t, n) {
      if (e === t)return n;
      var r = e.nextSibling;
      while (r) {
        if (r === t)return-1;
        r = r.nextSibling
      }
      return 1
    }

    function ut(e, t) {
      var n, r, s, o, u, a, f, l = L[d][e + " "];
      if (l)return t ? 0 : l.slice(0);
      u = e, a = [], f = i.preFilter;
      while (u) {
        if (!n || (r = F.exec(u)))r && (u = u.slice(r[0].length) || u), a.push(s = []);
        n = !1;
        if (r = I.exec(u))s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
        for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
        if (!n)break
      }
      return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
    }

    function at(e, t, r) {
      var i = t.dir, s = r && t.dir === "parentNode", o = w++;
      return t.first ? function (t, n, r) {while (t = t[i])if (s || t.nodeType === 1)return e(t, n, r)} : function (t, r, u) {
        if (!u) {
          var a, f = b + " " + o + " ", l = f + n;
          while (t = t[i])if (s || t.nodeType === 1) {
            if ((a = t[d]) === l)return t.sizset;
            if (typeof a == "string" && a.indexOf(f) === 0) {if (t.sizset)return t} else {
              t[d] = l;
              if (e(t, r, u))return t.sizset = !0, t;
              t.sizset = !1
            }
          }
        } else while (t = t[i])if (s || t.nodeType === 1)if (e(t, r, u))return t
      }
    }

    function ft(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;
        while (i--)if (!e[i](t, n, r))return!1;
        return!0
      } : e[0]
    }

    function lt(e, t, n, r, i) {
      var s, o = [], u = 0, a = e.length, f = t != null;
      for (; u < a; u++)if (s = e[u])if (!n || n(s, r, i))o.push(s), f && t.push(u);
      return o
    }

    function ct(e, t, n, r, i, s) {
      return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
        var f, l, c, h = [], p = [], d = o.length, v = s || dt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? lt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
        n && n(m, g, u, a);
        if (r) {
          f = lt(g, p), r(f, [], u, a), l = f.length;
          while (l--)if (c = f[l])g[p[l]] = !(m[p[l]] = c)
        }
        if (s) {
          if (i || e) {
            if (i) {
              f = [], l = g.length;
              while (l--)(c = g[l]) && f.push(m[l] = c);
              i(null, g = [], f, a)
            }
            l = g.length;
            while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
          }
        } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
      })
    }

    function ht(e) {
      var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, f = at(function (e) {return e === t}, u, !0), l = at(function (e) {return T.call(t, e) > -1}, u, !0), h = [function (e, n, r) {return!o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))}];
      for (; a < s; a++)if (n = i.relative[e[a].type])h = [at(ft(h), n)]; else {
        n = i.filter[e[a].type].apply(null, e[a].matches);
        if (n[d]) {
          r = ++a;
          for (; r < s; r++)if (i.relative[e[r].type])break;
          return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
        }
        h.push(n)
      }
      return ft(h)
    }

    function pt(e, t) {
      var r = t.length > 0, s = e.length > 0, o = function (u, a, f, l, h) {
        var p, d, v, m = [], y = 0, w = "0", x = u && [], T = h != null, N = c, C = u || s && i.find.TAG("*", h && a.parentNode || a), k = b += N == null ? 1 : Math.E;
        T && (c = a !== g && a, n = o.el);
        for (; (p = C[w]) != null; w++) {
          if (s && p) {
            for (d = 0; v = e[d]; d++)if (v(p, a, f)) {
              l.push(p);
              break
            }
            T && (b = k, n = ++o.el)
          }
          r && ((p = !v && p) && y--, u && x.push(p))
        }
        y += w;
        if (r && w !== y) {
          for (d = 0; v = t[d]; d++)v(x, m, a, f);
          if (u) {
            if (y > 0)while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
            m = lt(m)
          }
          S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
        }
        return T && (b = k, c = N), x
      };
      return o.el = 0, r ? N(o) : o
    }

    function dt(e, t, n) {
      var r = 0, i = t.length;
      for (; r < i; r++)nt(e, t[r], n);
      return n
    }

    function vt(e, t, n, r, s) {
      var o, u, f, l, c, h = ut(e), p = h.length;
      if (!r && h.length === 1) {
        u = h[0] = h[0].slice(0);
        if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
          t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
          if (!t)return n;
          e = e.slice(u.shift().length)
        }
        for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
          f = u[o];
          if (i.relative[l = f.type])break;
          if (c = i.find[l])if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
            u.splice(o, 1), e = r.length && u.join("");
            if (!e)return S.apply(n, x.call(r, 0)), n;
            break
          }
        }
      }
      return a(e, h)(r, t, s, n, z.test(e)), n
    }

    function mt() {}

    var n, r, i, s, o, u, a, f, l, c, h = !0, p = "undefined", d = ("sizcache" + Math.random()).replace(".", ""), m = String, g = e.document, y = g.documentElement, b = 0, w = 0, E = [].pop, S = [].push, x = [].slice, T = [].indexOf || function (e) {
      var t = 0, n = this.length;
      for (; t < n; t++)if (this[t] === e)return t;
      return-1
    }, N = function (e, t) {return e[d] = t == null || t, e}, C = function () {
      var e = {}, t = [];
      return N(function (n, r) {return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r}, e)
    }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M.replace("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"), F = new RegExp("^" + O + "*," + O + "*"), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + H), POS: new RegExp(B, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"), needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")}, K = function (e) {
      var t = g.createElement("div");
      try {return e(t)} catch (n) {return!1} finally {t = null}
    }, Q = K(function (e) {return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length}), G = K(function (e) {return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"}), Y = K(function (e) {
      e.innerHTML = "<select></select>";
      var t = typeof e.lastChild.getAttribute("multiple");
      return t !== "boolean" && t !== "string"
    }), Z = K(function (e) {return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)}), et = K(function (e) {
      e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
      var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
      return r = !g.getElementById(d), y.removeChild(e), t
    });
    try {x.call(y.childNodes, 0)[0].nodeType} catch (tt) {
      x = function (e) {
        var t, n = [];
        for (; t = this[e]; e++)n.push(t);
        return n
      }
    }
    nt.matches = function (e, t) {return nt(e, null, null, t)}, nt.matchesSelector = function (e, t) {return nt(t, null, null, [e]).length > 0}, s = nt.getText = function (e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (i === 1 || i === 9 || i === 11) {
          if (typeof e.textContent == "string")return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)n += s(e)
        } else if (i === 3 || i === 4)return e.nodeValue
      } else for (; t = e[r]; r++)n += s(t);
      return n
    }, o = nt.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? t.nodeName !== "HTML" : !1
    }, u = nt.contains = y.contains ? function (e, t) {
      var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
      return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
    } : y.compareDocumentPosition ? function (e, t) {return t && !!(e.compareDocumentPosition(t) & 16)} : function (e, t) {
      while (t = t.parentNode)if (t === e)return!0;
      return!1
    }, nt.attr = function (e, t) {
      var n, r = o(e);
      return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
    }, i = nt.selectors = {cacheLength: 50, createPseudo: N, match: J, attrHandle: G ? {} : {href: function (e) {return e.getAttribute("href", 2)}, type: function (e) {return e.getAttribute("type")}}, find: {ID: r ? function (e, t, n) {
      if (typeof t.getElementById !== p && !n) {
        var r = t.getElementById(e);
        return r && r.parentNode ? [r] : []
      }
    } : function (e, n, r) {
      if (typeof n.getElementById !== p && !r) {
        var i = n.getElementById(e);
        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
      }
    }, TAG: Q ? function (e, t) {if (typeof t.getElementsByTagName !== p)return t.getElementsByTagName(e)} : function (e, t) {
      var n = t.getElementsByTagName(e);
      if (e === "*") {
        var r, i = [], s = 0;
        for (; r = n[s]; s++)r.nodeType === 1 && i.push(r);
        return i
      }
      return n
    }, NAME: et && function (e, t) {if (typeof t.getElementsByName !== p)return t.getElementsByName(name)}, CLASS: Z && function (e, t, n) {if (typeof t.getElementsByClassName !== p && !n)return t.getElementsByClassName(e)}}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)}, CHILD: function (e) {return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e}, PSEUDO: function (e) {
      var t, n;
      if (J.CHILD.test(e[0]))return null;
      if (e[3])e[2] = e[3]; else if (t = e[4])q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
      return e.slice(0, 3)
    }}, filter: {ID: r ? function (e) {return e = e.replace($, ""), function (t) {return t.getAttribute("id") === e}} : function (e) {
      return e = e.replace($, ""), function (t) {
        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
        return n && n.value === e
      }
    }, TAG: function (e) {return e === "*" ? function () {return!0} : (e = e.replace($, "").toLowerCase(), function (t) {return t.nodeName && t.nodeName.toLowerCase() === e})}, CLASS: function (e) {
      var t = k[d][e + " "];
      return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function (e) {return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")})
    }, ATTR: function (e, t, n) {
      return function (r, i) {
        var s = nt.attr(r, e);
        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
      }
    }, CHILD: function (e, t, n, r) {
      return e === "nth" ? function (e) {
        var t, i, s = e.parentNode;
        if (n === 1 && r === 0)return!0;
        if (s) {
          i = 0;
          for (t = s.firstChild; t; t = t.nextSibling)if (t.nodeType === 1) {
            i++;
            if (e === t)break
          }
        }
        return i -= r, i === n || i % n === 0 && i / n >= 0
      } : function (t) {
        var n = t;
        switch (e) {
          case"only":
          case"first":
            while (n = n.previousSibling)if (n.nodeType === 1)return!1;
            if (e === "first")return!0;
            n = t;
          case"last":
            while (n = n.nextSibling)if (n.nodeType === 1)return!1;
            return!0
        }
      }
    }, PSEUDO: function (e, t) {
      var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
      return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
        var i, s = r(e, t), o = s.length;
        while (o--)i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
      }) : function (e) {return r(e, 0, n)}) : r
    }}, pseudos: {not: N(function (e) {
      var t = [], n = [], r = a(e.replace(j, "$1"));
      return r[d] ? N(function (e, t, n, i) {
        var s, o = r(e, null, i, []), u = e.length;
        while (u--)if (s = o[u])e[u] = !(t[u] = s)
      }) : function (e, i, s) {return t[0] = e, r(t, null, s, n), !n.pop()}
    }), has: N(function (e) {return function (t) {return nt(e, t).length > 0}}), contains: N(function (e) {return function (t) {return(t.textContent || t.innerText || s(t)).indexOf(e) > -1}}), enabled: function (e) {return e.disabled === !1}, disabled: function (e) {return e.disabled === !0}, checked: function (e) {
      var t = e.nodeName.toLowerCase();
      return t === "input" && !!e.checked || t === "option" && !!e.selected
    }, selected: function (e) {return e.parentNode && e.parentNode.selectedIndex, e.selected === !0}, parent: function (e) {return!i.pseudos.empty(e)}, empty: function (e) {
      var t;
      e = e.firstChild;
      while (e) {
        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4)return!1;
        e = e.nextSibling
      }
      return!0
    }, header: function (e) {return X.test(e.nodeName)}, text: function (e) {
      var t, n;
      return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
    }, radio: rt("radio"), checkbox: rt("checkbox"), file: rt("file"), password: rt("password"), image: rt("image"), submit: it("submit"), reset: it("reset"), button: function (e) {
      var t = e.nodeName.toLowerCase();
      return t === "input" && e.type === "button" || t === "button"
    }, input: function (e) {return V.test(e.nodeName)}, focus: function (e) {
      var t = e.ownerDocument;
      return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
    }, active: function (e) {return e === e.ownerDocument.activeElement}, first: st(function () {return[0]}), last: st(function (e, t) {return[t - 1]}), eq: st(function (e, t, n) {return[n < 0 ? n + t : n]}), even: st(function (e, t) {
      for (var n = 0; n < t; n += 2)e.push(n);
      return e
    }), odd: st(function (e, t) {
      for (var n = 1; n < t; n += 2)e.push(n);
      return e
    }), lt: st(function (e, t, n) {
      for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
      return e
    }), gt: st(function (e, t, n) {
      for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
      return e
    })}}, f = y.compareDocumentPosition ? function (e, t) {return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1} : function (e, t) {
      if (e === t)return l = !0, 0;
      if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
      var n, r, i = [], s = [], o = e.parentNode, u = t.parentNode, a = o;
      if (o === u)return ot(e, t);
      if (!o)return-1;
      if (!u)return 1;
      while (a)i.unshift(a), a = a.parentNode;
      a = u;
      while (a)s.unshift(a), a = a.parentNode;
      n = i.length, r = s.length;
      for (var f = 0; f < n && f < r; f++)if (i[f] !== s[f])return ot(i[f], s[f]);
      return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
    }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
      var t, n = [], r = 1, i = 0;
      l = h, e.sort(f);
      if (l) {
        for (; t = e[r]; r++)t === e[r - 1] && (i = n.push(r));
        while (i--)e.splice(n[i], 1)
      }
      return e
    }, nt.error = function (e) {throw new Error("Syntax error, unrecognized expression: " + e)}, a = nt.compile = function (e, t) {
      var n, r = [], i = [], s = A[d][e + " "];
      if (!s) {
        t || (t = ut(e)), n = t.length;
        while (n--)s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
        s = A(e, pt(i, r))
      }
      return s
    }, g.querySelectorAll && function () {
      var e, t = vt, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, i = [":focus"], s = [":active"], u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
      K(function (e) {e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")}), K(function (e) {e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")}), i = new RegExp(i.join("|")), vt = function (e, r, s, o, u) {
        if (!o && !u && !i.test(e)) {
          var a, f, l = !0, c = d, h = r, p = r.nodeType === 9 && e;
          if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
            while (f--)a[f] = c + a[f].join("");
            h = z.test(e) && r.parentNode || r, p = a.join(",")
          }
          if (p)try {return S.apply(s, x.call(h.querySelectorAll(p), 0)), s} catch (v) {} finally {l || r.removeAttribute("id")}
        }
        return t(e, r, s, o, u)
      }, u && (K(function (t) {
        e = u.call(t, "div");
        try {u.call(t, "[test!='']:sizzle"), s.push("!=", H)} catch (n) {}
      }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
        n = n.replace(r, "='$1']");
        if (!o(t) && !s.test(n) && !i.test(n))try {
          var a = u.call(t, n);
          if (a || e || t.document && t.document.nodeType !== 11)return a
        } catch (f) {}
        return nt(n, null, null, [t]).length > 0
      })
    }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
  }(e);
  var nt = /Until$/, rt = /^(?:parents|prev(?:Until|All))/, it = /^.[^:#\[\.,]*$/, st = v.expr.match.needsContext, ot = {children: !0, contents: !0, next: !0, prev: !0};
  v.fn.extend({find: function (e) {
    var t, n, r, i, s, o, u = this;
    if (typeof e != "string")return v(e).filter(function () {for (t = 0, n = u.length; t < n; t++)if (v.contains(u[t], this))return!0});
    o = this.pushStack("", "find", e);
    for (t = 0, n = this.length; t < n; t++) {
      r = o.length, v.find(e, this[t], o);
      if (t > 0)for (i = r; i < o.length; i++)for (s = 0; s < r; s++)if (o[s] === o[i]) {
        o.splice(i--, 1);
        break
      }
    }
    return o
  }, has: function (e) {
    var t, n = v(e, this), r = n.length;
    return this.filter(function () {for (t = 0; t < r; t++)if (v.contains(this, n[t]))return!0})
  }, not: function (e) {return this.pushStack(ft(this, e, !1), "not", e)}, filter: function (e) {return this.pushStack(ft(this, e, !0), "filter", e)}, is: function (e) {return!!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)}, closest: function (e, t) {
    var n, r = 0, i = this.length, s = [], o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
    for (; r < i; r++) {
      n = this[r];
      while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
        if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
          s.push(n);
          break
        }
        n = n.parentNode
      }
    }
    return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
  }, index: function (e) {return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1}, add: function (e, t) {
    var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e), r = v.merge(this.get(), n);
    return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
  }, addBack: function (e) {return this.add(e == null ? this.prevObject : this.prevObject.filter(e))}}), v.fn.andSelf = v.fn.addBack, v.each({parent: function (e) {
    var t = e.parentNode;
    return t && t.nodeType !== 11 ? t : null
  }, parents: function (e) {return v.dir(e, "parentNode")}, parentsUntil: function (e, t, n) {return v.dir(e, "parentNode", n)}, next: function (e) {return at(e, "nextSibling")}, prev: function (e) {return at(e, "previousSibling")}, nextAll: function (e) {return v.dir(e, "nextSibling")}, prevAll: function (e) {return v.dir(e, "previousSibling")}, nextUntil: function (e, t, n) {return v.dir(e, "nextSibling", n)}, prevUntil: function (e, t, n) {return v.dir(e, "previousSibling", n)}, siblings: function (e) {return v.sibling((e.parentNode || {}).firstChild, e)}, children: function (e) {return v.sibling(e.firstChild)}, contents: function (e) {return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)}}, function (e, t) {
    v.fn[e] = function (n, r) {
      var i = v.map(this, t, n);
      return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
    }
  }), v.extend({filter: function (e, t, n) {return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)}, dir: function (e, n, r) {
    var i = [], s = e[n];
    while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r)))s.nodeType === 1 && i.push(s), s = s[n];
    return i
  }, sibling: function (e, t) {
    var n = [];
    for (; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e);
    return n
  }});
  var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ht = / jQuery\d+="(?:null|\d+)"/g, pt = /^\s+/, dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, vt = /<([\w:]+)/, mt = /<tbody/i, gt = /<|&#?\w+;/, yt = /<(?:script|style|link)/i, bt = /<(?:script|object|embed|option|style)/i, wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"), Et = /^(?:checkbox|radio)$/, St = /checked\s*(?:[^=]|=\s*.checked.)/i, xt = /\/(java|ecma)script/i, Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Nt = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, Ct = lt(i), kt = Ct.appendChild(i.createElement("div"));
  Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({text: function (e) {return v.access(this, function (e) {return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))}, null, e, arguments.length)}, wrapAll: function (e) {
    if (v.isFunction(e))return this.each(function (t) {v(this).wrapAll(e.call(this, t))});
    if (this[0]) {
      var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstChild && e.firstChild.nodeType === 1)e = e.firstChild;
        return e
      }).append(this)
    }
    return this
  }, wrapInner: function (e) {
    return v.isFunction(e) ? this.each(function (t) {v(this).wrapInner(e.call(this, t))}) : this.each(function () {
      var t = v(this), n = t.contents();
      n.length ? n.wrapAll(e) : t.append(e)
    })
  }, wrap: function (e) {
    var t = v.isFunction(e);
    return this.each(function (n) {v(this).wrapAll(t ? e.call(this, n) : e)})
  }, unwrap: function () {return this.parent().each(function () {v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)}).end()}, append: function () {return this.domManip(arguments, !0, function (e) {(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)})}, prepend: function () {return this.domManip(arguments, !0, function (e) {(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)})}, before: function () {
    if (!ut(this[0]))return this.domManip(arguments, !1, function (e) {this.parentNode.insertBefore(e, this)});
    if (arguments.length) {
      var e = v.clean(arguments);
      return this.pushStack(v.merge(e, this), "before", this.selector)
    }
  }, after: function () {
    if (!ut(this[0]))return this.domManip(arguments, !1, function (e) {this.parentNode.insertBefore(e, this.nextSibling)});
    if (arguments.length) {
      var e = v.clean(arguments);
      return this.pushStack(v.merge(this, e), "after", this.selector)
    }
  }, remove: function (e, t) {
    var n, r = 0;
    for (; (n = this[r]) != null; r++)if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
    return this
  }, empty: function () {
    var e, t = 0;
    for (; (e = this[t]) != null; t++) {
      e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
      while (e.firstChild)e.removeChild(e.firstChild)
    }
    return this
  }, clone: function (e, t) {return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {return v.clone(this, e, t)})}, html: function (e) {
    return v.access(this, function (e) {
      var n = this[0] || {}, r = 0, i = this.length;
      if (e === t)return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
      if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
        e = e.replace(dt, "<$1></$2>");
        try {
          for (; r < i; r++)n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
          n = 0
        } catch (s) {}
      }
      n && this.empty().append(e)
    }, null, e, arguments.length)
  }, replaceWith: function (e) {
    return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
      var n = v(this), r = n.html();
      n.replaceWith(e.call(this, t, r))
    }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
      var t = this.nextSibling, n = this.parentNode;
      v(this).remove(), t ? v(t).before(e) : v(n).append(e)
    }))
  }, detach: function (e) {return this.remove(e, !0)}, domManip: function (e, n, r) {
    e = [].concat.apply([], e);
    var i, s, o, u, a = 0, f = e[0], l = [], c = this.length;
    if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f))return this.each(function () {v(this).domManip(e, n, r)});
    if (v.isFunction(f))return this.each(function (i) {
      var s = v(this);
      e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
    });
    if (this[0]) {
      i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
      if (s) {
        n = n && v.nodeName(s, "tr");
        for (u = i.cacheable || c - 1; a < c; a++)r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
      }
      o = s = null, l.length && v.each(l, function (e, t) {t.src ? v.ajax ? v.ajax({url: t.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)})
    }
    return this
  }}), v.buildFragment = function (e, n, r) {
    var s, o, u, a = e[0];
    return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {fragment: s, cacheable: o}
  }, v.fragments = {}, v.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
    v.fn[e] = function (n) {
      var r, i = 0, s = [], o = v(n), u = o.length, a = this.length === 1 && this[0].parentNode;
      if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1)return o[t](this[0]), this;
      for (; i < u; i++)r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
      return this.pushStack(s, e, o.selector)
    }
  }), v.extend({clone: function (e, t, n) {
    var r, i, s, o;
    v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
    if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
      Ot(e, o), r = Mt(e), i = Mt(o);
      for (s = 0; r[s]; ++s)i[s] && Ot(r[s], i[s])
    }
    if (t) {
      At(e, o);
      if (n) {
        r = Mt(e), i = Mt(o);
        for (s = 0; r[s]; ++s)At(r[s], i[s])
      }
    }
    return r = i = null, o
  }, clean: function (e, t, n, r) {
    var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct, b = [];
    if (!t || typeof t.createDocumentFragment == "undefined")t = i;
    for (s = 0; (u = e[s]) != null; s++) {
      typeof u == "number" && (u += "");
      if (!u)continue;
      if (typeof u == "string")if (!gt.test(u))u = t.createTextNode(u); else {
        y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
        while (l--)c = c.lastChild;
        if (!v.support.tbody) {
          h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
          for (o = p.length - 1; o >= 0; --o)v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
        }
        !v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
      }
      u.nodeType ? b.push(u) : v.merge(b, u)
    }
    c && (u = c = y = null);
    if (!v.support.appendChecked)for (s = 0; (u = b[s]) != null; s++)v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
    if (n) {
      m = function (e) {if (!e.type || xt.test(e.type))return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)};
      for (s = 0; (u = b[s]) != null; s++)if (!v.nodeName(u, "script") || !m(u))n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
    }
    return b
  }, cleanData: function (e, t) {
    var n, r, i, s, o = 0, u = v.expando, a = v.cache, f = v.support.deleteExpando, l = v.event.special;
    for (; (i = e[o]) != null; o++)if (t || v.acceptData(i)) {
      r = i[u], n = r && a[r];
      if (n) {
        if (n.events)for (s in n.events)l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
        a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
      }
    }
  }}), function () {
    var e, t;
    v.uaMatch = function (e) {
      e = e.toLowerCase();
      var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return{browser: t[1] || "", version: t[2] || "0"}
    }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
      function e(t, n) {return new e.fn.init(t, n)}

      v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)}, e.fn.init.prototype = e.fn;
      var t = e(i);
      return e
    }
  }();
  var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i, jt = /opacity=([^)]*)/, Ft = /^(top|right|bottom|left)$/, It = /^(none|table(?!-c[ea]).+)/, qt = /^margin/, Rt = new RegExp("^(" + m + ")(.*)$", "i"), Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"), zt = new RegExp("^([-+])=(" + m + ")", "i"), Wt = {BODY: "block"}, Xt = {position: "absolute", visibility: "hidden", display: "block"}, Vt = {letterSpacing: 0, fontWeight: 400}, $t = ["Top", "Right", "Bottom", "Left"], Jt = ["Webkit", "O", "Moz", "ms"], Kt = v.fn.toggle;
  v.fn.extend({css: function (e, n) {return v.access(this, function (e, n, r) {return r !== t ? v.style(e, n, r) : v.css(e, n)}, e, n, arguments.length > 1)}, show: function () {return Yt(this, !0)}, hide: function () {return Yt(this)}, toggle: function (e, t) {
    var n = typeof e == "boolean";
    return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {(n ? e : Gt(this)) ? v(this).show() : v(this).hide()})
  }}), v.extend({cssHooks: {opacity: {get: function (e, t) {
    if (t) {
      var n = Dt(e, "opacity");
      return n === "" ? "1" : n
    }
  }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": v.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, n, r, i) {
    if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)return;
    var s, o, u, a = v.camelCase(n), f = e.style;
    n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
    if (r === t)return u && "get"in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
    o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
    if (r == null || o === "number" && isNaN(r))return;
    o === "number" && !v.cssNumber[a] && (r += "px");
    if (!u || !("set"in u) || (r = u.set(e, r, i)) !== t)try {f[n] = r} catch (l) {}
  }, css: function (e, n, r, i) {
    var s, o, u, a = v.camelCase(n);
    return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get"in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
  }, swap: function (e, t, n) {
    var r, i, s = {};
    for (i in t)s[i] = e.style[i], e.style[i] = t[i];
    r = n.call(e);
    for (i in t)e.style[i] = s[i];
    return r
  }}), e.getComputedStyle ? Dt = function (t, n) {
    var r, i, s, o, u = e.getComputedStyle(t, null), a = t.style;
    return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
  } : i.documentElement.currentStyle && (Dt = function (e, t) {
    var n, r, i = e.currentStyle && e.currentStyle[t], s = e.style;
    return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
  }), v.each(["height", "width"], function (e, t) {v.cssHooks[t] = {get: function (e, n, r) {if (n)return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {return tn(e, t, r)}) : tn(e, t, r)}, set: function (e, n, r) {return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)}}}), v.support.opacity || (v.cssHooks.opacity = {get: function (e, t) {return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""}, set: function (e, t) {
    var n = e.style, r = e.currentStyle, i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
    n.zoom = 1;
    if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
      n.removeAttribute("filter");
      if (r && !r.filter)return
    }
    n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
  }}), v(function () {
    v.support.reliableMarginRight || (v.cssHooks.marginRight = {get: function (e, t) {return v.swap(e, {display: "inline-block"}, function () {if (t)return Dt(e, "marginRight")})}}), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
      v.cssHooks[t] = {get: function (e, n) {
        if (n) {
          var r = Dt(e, t);
          return Ut.test(r) ? v(e).position()[t] + "px" : r
        }
      }}
    })
  }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"}, v.expr.filters.visible = function (e) {return!v.expr.filters.hidden(e)}), v.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    v.cssHooks[e + t] = {expand: function (n) {
      var r, i = typeof n == "string" ? n.split(" ") : [n], s = {};
      for (r = 0; r < 4; r++)s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
      return s
    }}, qt.test(e) || (v.cssHooks[e + t].set = Zt)
  });
  var rn = /%20/g, sn = /\[\]$/, on = /\r?\n/g, un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, an = /^(?:select|textarea)/i;
  v.fn.extend({serialize: function () {return v.param(this.serializeArray())}, serializeArray: function () {
    return this.map(function () {return this.elements ? v.makeArray(this.elements) : this}).filter(function () {return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))}).map(function (e, t) {
      var n = v(this).val();
      return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {return{name: t.name, value: e.replace(on, "\r\n")}}) : {name: t.name, value: n.replace(on, "\r\n")}
    }).get()
  }}), v.param = function (e, n) {
    var r, i = [], s = function (e, t) {t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)};
    n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
    if (v.isArray(e) || e.jquery && !v.isPlainObject(e))v.each(e, function () {s(this.name, this.value)}); else for (r in e)fn(r, e[r], n, s);
    return i.join("&").replace(rn, "+")
  };
  var ln, cn, hn = /#.*$/, pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, vn = /^(?:GET|HEAD)$/, mn = /^\/\//, gn = /\?/, yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bn = /([?&])_=[^&]*/, wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, En = v.fn.load, Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
  try {cn = s.href} catch (Nn) {cn = i.createElement("a"), cn.href = "", cn = cn.href}
  ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
    if (typeof e != "string" && En)return En.apply(this, arguments);
    if (!this.length)return this;
    var i, s, o, u = this, a = e.indexOf(" ");
    return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({url: e, type: s, dataType: "html", data: n, complete: function (e, t) {r && u.each(r, o || [e.responseText, t, e])}}).done(function (e) {o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)}), this
  }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {v.fn[t] = function (e) {return this.on(t, e)}}), v.each(["get", "post"], function (e, n) {v[n] = function (e, r, i, s) {return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({type: n, url: e, data: r, success: i, dataType: s})}}), v.extend({getScript: function (e, n) {return v.get(e, t, n, "script")}, getJSON: function (e, t, n) {return v.get(e, t, n, "json")}, ajaxSetup: function (e, t) {return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e}, ajaxSettings: {url: cn, isLocal: dn.test(ln[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": Tn}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": e.String, "text html": !0, "text json": v.parseJSON, "text xml": v.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: Cn(Sn), ajaxTransport: Cn(xn), ajax: function (e, n) {
    function T(e, n, s, a) {
      var l, y, b, w, S, T = n;
      if (E === 2)return;
      E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
      if (e >= 200 && e < 300 || e === 304)c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b); else {
        b = T;
        if (!T || e)T = "error", e < 0 && (e = 0)
      }
      x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
    }

    typeof e == "object" && (n = e, e = t), n = n || {};
    var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n), h = c.context || c, p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event, d = v.Deferred(), m = v.Callbacks("once memory"), g = c.statusCode || {}, b = {}, w = {}, E = 0, S = "canceled", x = {readyState: 0, setRequestHeader: function (e, t) {
      if (!E) {
        var n = e.toLowerCase();
        e = w[n] = w[n] || e, b[e] = t
      }
      return this
    }, getAllResponseHeaders: function () {return E === 2 ? i : null}, getResponseHeader: function (e) {
      var n;
      if (E === 2) {
        if (!s) {
          s = {};
          while (n = pn.exec(i))s[n[1].toLowerCase()] = n[2]
        }
        n = s[e.toLowerCase()]
      }
      return n === t ? null : n
    }, overrideMimeType: function (e) {return E || (c.mimeType = e), this}, abort: function (e) {return e = e || S, o && o.abort(e), T(0, e), this}};
    d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
      if (e) {
        var t;
        if (E < 2)for (t in e)g[t] = [g[t], e[t]]; else t = e[x.status], x.always(t)
      }
      return this
    }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
    if (E === 2)return x;
    f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
    if (!c.hasContent) {
      c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
      if (c.cache === !1) {
        var N = v.now(), C = c.url.replace(bn, "$1_=" + N);
        c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
      }
    }
    (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
    for (l in c.headers)x.setRequestHeader(l, c.headers[l]);
    if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
      S = "abort";
      for (l in{success: 1, error: 1, complete: 1})x[l](c[l]);
      o = kn(xn, c, n, x);
      if (!o)T(-1, "No Transport"); else {
        x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {x.abort("timeout")}, c.timeout));
        try {E = 1, o.send(b, T)} catch (k) {
          if (!(E < 2))throw k;
          T(-1, k)
        }
      }
      return x
    }
    return x.abort()
  }, active: 0, lastModified: {}, etag: {}});
  var Mn = [], _n = /\?/, Dn = /(=)\?(?=&|$)|\?\?/, Pn = v.now();
  v.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
    var e = Mn.pop() || v.expando + "_" + Pn++;
    return this[e] = !0, e
  }}), v.ajaxPrefilter("json jsonp", function (n, r, i) {
    var s, o, u, a = n.data, f = n.url, l = n.jsonp !== !1, c = l && Dn.test(f), h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
    if (n.dataTypes[0] === "jsonp" || c || h)return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {return u || v.error(s + " was not called"), u[0]}, n.dataTypes[0] = "json", e[s] = function () {u = arguments}, i.always(function () {e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t}), "script"
  }), v.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (e) {return v.globalEval(e), e}}}), v.ajaxPrefilter("script", function (e) {e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)}), v.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
      return{send: function (s, o) {n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {if (i || !n.readyState || /loaded|complete/.test(n.readyState))n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")}, r.insertBefore(n, r.firstChild)}, abort: function () {n && n.onload(0, 1)}}
    }
  });
  var Hn, Bn = e.ActiveXObject ? function () {for (var e in Hn)Hn[e](0, 1)} : !1, jn = 0;
  v.ajaxSettings.xhr = e.ActiveXObject ? function () {return!this.isLocal && Fn() || In()} : Fn, function (e) {v.extend(v.support, {ajax: !!e, cors: !!e && "withCredentials"in e})}(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
    if (!n.crossDomain || v.support.cors) {
      var r;
      return{send: function (i, s) {
        var o, u, a = n.xhr();
        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
        if (n.xhrFields)for (u in n.xhrFields)a[u] = n.xhrFields[u];
        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
        try {for (u in i)a.setRequestHeader(u, i[u])} catch (f) {}
        a.send(n.hasContent && n.data || null), r = function (e, i) {
          var u, f, l, c, h;
          try {
            if (r && (i || a.readyState === 4)) {
              r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
              if (i)a.readyState !== 4 && a.abort(); else {
                u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                try {c.text = a.responseText} catch (p) {}
                try {f = a.statusText} catch (p) {f = ""}
                !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
              }
            }
          } catch (d) {i || s(-1, d)}
          c && s(u, f, c, l)
        }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
      }, abort: function () {r && r(0, 1)}}
    }
  });
  var qn, Rn, Un = /^(?:toggle|show|hide)$/, zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"), Wn = /queueHooks$/, Xn = [Gn], Vn = {"*": [function (e, t) {
    var n, r, i = this.createTween(e, t), s = zn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
    if (s) {
      n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
      if (r !== "px" && u) {
        u = v.css(i.elem, e, !0) || n || 1;
        do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
      }
      i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
    }
    return i
  }]};
  v.Animation = v.extend(Kn, {tweener: function (e, t) {
    v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
    var n, r = 0, i = e.length;
    for (; r < i; r++)n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
  }, prefilter: function (e, t) {t ? Xn.unshift(e) : Xn.push(e)}}), v.Tween = Yn, Yn.prototype = {constructor: Yn, init: function (e, t, n, r, i, s) {this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")}, cur: function () {
    var e = Yn.propHooks[this.prop];
    return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
  }, run: function (e) {
    var t, n = Yn.propHooks[this.prop];
    return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
  }}, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {_default: {get: function (e) {
    var t;
    return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
  }, set: function (e) {v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now}}}, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {set: function (e) {e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)}}, v.each(["toggle", "show", "hide"], function (e, t) {
    var n = v.fn[t];
    v.fn[t] = function (r, i, s) {return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)}
  }), v.fn.extend({fadeTo: function (e, t, n, r) {return this.filter(Gt).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)}, animate: function (e, t, n, r) {
    var i = v.isEmptyObject(e), s = v.speed(t, n, r), o = function () {
      var t = Kn(this, v.extend({}, e), s);
      i && t.stop(!0)
    };
    return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
  }, stop: function (e, n, r) {
    var i = function (e) {
      var t = e.stop;
      delete e.stop, t(r)
    };
    return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
      var t = !0, n = e != null && e + "queueHooks", s = v.timers, o = v._data(this);
      if (n)o[n] && o[n].stop && i(o[n]); else for (n in o)o[n] && o[n].stop && Wn.test(n) && i(o[n]);
      for (n = s.length; n--;)s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
      (t || !r) && v.dequeue(this, e)
    })
  }}), v.each({slideDown: Zn("show"), slideUp: Zn("hide"), slideToggle: Zn("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {v.fn[e] = function (e, n, r) {return this.animate(t, e, n, r)}}), v.speed = function (e, t, n) {
    var r = e && typeof e == "object" ? v.extend({}, e) : {complete: n || !n && t || v.isFunction(e) && e, duration: e, easing: n && t || t && !v.isFunction(t) && t};
    r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
    if (r.queue == null || r.queue === !0)r.queue = "fx";
    return r.old = r.complete, r.complete = function () {v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)}, r
  }, v.easing = {linear: function (e) {return e}, swing: function (e) {return.5 - Math.cos(e * Math.PI) / 2}}, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
    var e, n = v.timers, r = 0;
    qn = v.now();
    for (; r < n.length; r++)e = n[r], !e() && n[r] === e && n.splice(r--, 1);
    n.length || v.fx.stop(), qn = t
  }, v.fx.timer = function (e) {e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))}, v.fx.interval = 13, v.fx.stop = function () {clearInterval(Rn), Rn = null}, v.fx.speeds = {slow: 600, fast: 200, _default: 400}, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {return v.grep(v.timers, function (t) {return e === t.elem}).length});
  var er = /^(?:body|html)$/i;
  v.fn.offset = function (e) {
    if (arguments.length)return e === t ? this : this.each(function (t) {v.offset.setOffset(this, e, t)});
    var n, r, i, s, o, u, a, f = {top: 0, left: 0}, l = this[0], c = l && l.ownerDocument;
    if (!c)return;
    return(r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {top: f.top + u - s, left: f.left + a - o}) : f)
  }, v.offset = {bodyOffset: function (e) {
    var t = e.offsetTop, n = e.offsetLeft;
    return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {top: t, left: n}
  }, setOffset: function (e, t, n) {
    var r = v.css(e, "position");
    r === "static" && (e.style.position = "relative");
    var i = v(e), s = i.offset(), o = v.css(e, "top"), u = v.css(e, "left"), a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
    a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using"in t ? t.using.call(e, f) : i.css(f)
  }}, v.fn.extend({position: function () {
    if (!this[0])return;
    var e = this[0], t = this.offsetParent(), n = this.offset(), r = er.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
    return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {top: n.top - r.top, left: n.left - r.left}
  }, offsetParent: function () {
    return this.map(function () {
      var e = this.offsetParent || i.body;
      while (e && !er.test(e.nodeName) && v.css(e, "position") === "static")e = e.offsetParent;
      return e || i.body
    })
  }}), v.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
    var r = /Y/.test(n);
    v.fn[e] = function (i) {
      return v.access(this, function (e, i, s) {
        var o = tr(e);
        if (s === t)return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
        o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
      }, e, i, arguments.length, null)
    }
  }), v.each({Height: "height", Width: "width"}, function (e, n) {
    v.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
      v.fn[i] = function (i, s) {
        var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
        return v.access(this, function (n, r, i) {
          var s;
          return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
        }, n, o ? i : t, o, null)
      }
    })
  }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {return v})
})(window), function (e, t, n) {
  function o(e) {return function () {return this[e]}}

  function a(e, t) {
    var n = e.split("."), r = u;
    !(n[0]in r) && r.execScript && r.execScript("var " + n[0]);
    for (var i; n.length && (i = n.shift());)!n.length && void 0 !== t ? r[i] = t : r = r[i] ? r[i] : r[i] = {}
  }

  function f(e, t, n) {return e.call.apply(e.bind, arguments)}

  function l(e, t, n) {
    if (!e)throw Error();
    if (2 < arguments.length) {
      var r = Array.prototype.slice.call(arguments, 2);
      return function () {
        var n = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(n, r), e.apply(t, n)
      }
    }
    return function () {return e.apply(t, arguments)}
  }

  function c(e, t, n) {return c = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? f : l, c.apply(i, arguments)}

  function p(e, t) {this.G = e, this.v = t || e, this.z = this.v.document}

  function d(e, n, r) {e = e.z.getElementsByTagName(n)[0], e || (e = t.documentElement), e && e.lastChild && e.insertBefore(r, e.lastChild)}

  function v(e, t) {
    for (var n = e.className.split(/\s+/), r = 0, i = n.length; r < i; r++)if (n[r] == t)return;
    n.push(t), e.className = n.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
  }

  function m(e, t) {
    for (var n = e.className.split(/\s+/), r = [], i = 0, s = n.length; i < s; i++)n[i] != t && r.push(n[i]);
    e.className = r.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
  }

  function g(e, t) {
    for (var n = e.className.split(/\s+/), i = 0, o = n.length; i < o; i++)if (n[i] == t)return r;
    return s
  }

  function y(e) {
    var t = e.v.location.protocol;
    return"about:" == t && (t = e.G.location.protocol), "https:" == t ? "https:" : "http:"
  }

  function b(e, t) {
    var n = e.createElement("link", {rel: "stylesheet", href: t}), i = s;
    n.onload = function () {i || (i = r)}, n.onerror = function () {i || (i = r)}, d(e, "head", n)
  }

  function w(t, n, o, u) {
    var a = t.z.getElementsByTagName("head")[0];
    if (a) {
      var f = t.createElement("script", {src: n}), l = s;
      return f.onload = f.onreadystatechange = function () {!l && (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState) && (l = r, o && o(i), f.onload = f.onreadystatechange = i, "HEAD" == f.parentNode.tagName && a.removeChild(f))}, a.appendChild(f), e.setTimeout(function () {l || (l = r, o && o(Error("Script load timeout")))}, u || 5e3), f
    }
    return i
  }

  function E(e, t, n) {this.M = e, this.U = t, this.Aa = n}

  function S(e, t, n, r) {this.d = e != i ? e : i, this.o = t != i ? t : i, this.aa = n != i ? n : i, this.f = r != i ? r : i}

  function T(e) {
    e = x.exec(e);
    var t = i, n = i, r = i, s = i;
    return e && (e[1] !== i && e[1] && (t = parseInt(e[1], 10)), e[2] !== i && e[2] && (n = parseInt(e[2], 10)), e[3] !== i && e[3] && (r = parseInt(e[3], 10)), e[4] !== i && e[4] && (s = /^[0-9]+$/.test(e[4]) ? parseInt(e[4], 10) : e[4])), new S(t, n, r, s)
  }

  function N(e, t, n, r, i, s, o, u, a, f, l) {this.K = e, this.Ga = t, this.za = n, this.fa = r, this.Ea = i, this.ea = s, this.wa = o, this.Fa = u, this.va = a, this.da = f, this.k = l}

  function C(e, t) {this.a = e, this.I = t}

  function L(e) {
    var t = M(e.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
    return"" != t ? (/BB\d{2}/.test(t) && (t = "BlackBerry"), t) : (e = M(e.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1), "" != e ? ("Mac_PowerPC" == e && (e = "Macintosh"), e) : "Unknown")
  }

  function A(e) {
    var t = M(e.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
    if (t || (t = M(e.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (t = M(e.a, /(iPhone )?OS ([\d_]+)/, 2)))return t;
    if (t = M(e.a, /(?:Linux|CrOS) ([^;)]+)/, 1))for (var t = t.split(/\s/), n = 0; n < t.length; n += 1)if (/^[\d\._]+$/.test(t[n]))return t[n];
    return(e = M(e.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? e : "Unknown"
  }

  function O(e) {
    var t = L(e), n = A(e), r = T(n), i = M(e.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1), o = T(i), u = "Unknown", a = new S, f = "Unknown", l = s;
    return/OPR\/[\d.]+/.test(e.a) ? u = "Opera" : -1 != e.a.indexOf("Chrome") || -1 != e.a.indexOf("CrMo") || -1 != e.a.indexOf("CriOS") ? u = "Chrome" : /Silk\/\d/.test(e.a) ? u = "Silk" : "BlackBerry" == t || "Android" == t ? u = "BuiltinBrowser" : -1 != e.a.indexOf("PhantomJS") ? u = "PhantomJS" : -1 != e.a.indexOf("Safari") ? u = "Safari" : -1 != e.a.indexOf("AdobeAIR") && (u = "AdobeAIR"), "BuiltinBrowser" == u ? f = "Unknown" : "Silk" == u ? f = M(e.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == u ? f = M(e.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != e.a.indexOf("Version/") ? f = M(e.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == u ? f = M(e.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == u ? f = M(e.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == u && (f = M(e.a, /PhantomJS\/([\d.]+)/, 1)), a = T(f), l = "AdobeAIR" == u ? 2 < a.d || 2 == a.d && 5 <= a.o : "BlackBerry" == t ? 10 <= r.d : "Android" == t ? 2 < r.d || 2 == r.d && 1 < r.o : 526 <= o.d || 525 <= o.d && 13 <= o.o, new N(u, a, f, "AppleWebKit", o, i, t, r, n, _(e.I), new E(l, 536 > o.d || 536 == o.d && 11 > o.o, "iPhone" == t || "iPad" == t || "iPod" == t || "Macintosh" == t))
  }

  function M(e, t, n) {return(e = e.match(t)) && e[n] ? e[n] : ""}

  function _(e) {if (e.documentMode)return e.documentMode}

  function D(e) {this.ua = e || "-"}

  function P(e, t) {
    this.K = e, this.V = 4, this.L = "n";
    var n = (t || "n4").match(/^([nio])([1-9])$/i);
    n && (this.L = n[1], this.V = parseInt(n[2], 10))
  }

  function H(e) {return e.L + e.V}

  function B(e) {
    var t = 4, n = "n", r = i;
    return e && ((r = e.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()), (r = e.match(/([1-9]00|normal|bold)/i)) && r[1] && (/bold/i.test(r[1]) ? t = 7 : /[1-9]00/.test(r[1]) && (t = parseInt(r[1].substr(0, 1), 10)))), n + t
  }

  function j(e, t, n) {this.c = e, this.h = t, this.O = n, this.j = "wf", this.g = new D("-")}

  function F(e) {v(e.h, e.g.f(e.j, "loading")), q(e, "loading")}

  function I(e) {m(e.h, e.g.f(e.j, "loading")), g(e.h, e.g.f(e.j, "active")) || v(e.h, e.g.f(e.j, "inactive")), q(e, "inactive")}

  function q(e, t, n) {e.O[t] && (n ? e.O[t](n.getName(), H(n)) : e.O[t]())}

  function R() {this.w = {}}

  function U(e, t) {this.c = e, this.C = t, this.s = this.c.createElement("span", {"aria-hidden": "true"}, this.C)}

  function z(e, t) {
    var n;
    n = [];
    for (var r = t.K.split(/,\s*/), i = 0; i < r.length; i++) {
      var s = r[i].replace(/['"]/g, "");
      -1 == s.indexOf(" ") ? n.push(s) : n.push("'" + s + "'")
    }
    n = n.join(","), r = "normal", i = t.V + "00", "o" === t.L ? r = "oblique" : "i" === t.L && (r = "italic"), e.s.style.cssText = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + n + ";" + ("font-style:" + r + ";font-weight:" + i + ";")
  }

  function W(e) {d(e.c, "body", e.s)}

  function X(e, t, n, r, s, o, u, a) {
    this.W = e, this.sa = t, this.c = n, this.q = r, this.C = a || "BESbswy", this.k = s, this.F = {}, this.T = o || 5e3, this.Z = u || i, this.B = this.A = i, e = new U(this.c, this.C), W(e);
    for (var f in V)V.hasOwnProperty(f) && (z(e, new P(V[f], H(this.q))), this.F[V[f]] = e.s.offsetWidth);
    e.remove()
  }

  function $(e, t, n) {
    for (var i in V)if (V.hasOwnProperty(i) && t === e.F[V[i]] && n === e.F[V[i]])return r;
    return s
  }

  function J(e) {
    var t = e.A.s.offsetWidth, n = e.B.s.offsetWidth;
    t === e.F.serif && n === e.F["sans-serif"] || e.k.U && $(e, t, n) ? h() - e.xa >= e.T ? e.k.U && $(e, t, n) && (e.Z === i || e.Z.hasOwnProperty(e.q.getName())) ? K(e, e.W) : K(e, e.sa) : setTimeout(c(function () {J(this)}, e), 25) : K(e, e.W)
  }

  function K(e, t) {e.A.remove(), e.B.remove(), t(e.q)}

  function Q(e, t, n, r) {this.c = t, this.t = n, this.P = 0, this.ba = this.Y = s, this.T = r, this.k = e.k}

  function G(e, t, n, r, i) {
    if (0 === t.length && i)I(e.t); else {
      e.P += t.length, i && (e.Y = i);
      for (i = 0; i < t.length; i++) {
        var s = t[i], o = n[s.getName()], u = e.t, a = s;
        v(u.h, u.g.f(u.j, a.getName(), H(a).toString(), "loading")), q(u, "fontloading", a), (new X(c(e.ga, e), c(e.ha, e), e.c, s, e.k, e.T, r, o)).start()
      }
    }
  }

  function Y(e) {0 == --e.P && e.Y && (e.ba ? (e = e.t, m(e.h, e.g.f(e.j, "loading")), m(e.h, e.g.f(e.j, "inactive")), v(e.h, e.g.f(e.j, "active")), q(e, "active")) : I(e.t))}

  function Z(e) {this.G = e, this.u = new R, this.ya = new C(e.navigator.userAgent, e.document), this.a = this.ya.parse(), this.Q = this.R = 0}

  function et(e, t) {this.c = e, this.e = t, this.m = []}

  function tt(e, t) {this.c = e, this.e = t, this.m = []}

  function nt(e, t, n) {this.N = e ? e : t + rt, this.p = [], this.S = [], this.ca = n || ""}

  function it(e) {this.p = e, this.$ = [], this.J = {}}

  function ft(e, n) {this.a = (new C(navigator.userAgent, t)).parse(), this.c = e, this.e = n}

  function ct(e, t) {this.c = e, this.e = t, this.m = []}

  function ht(e, t) {this.c = e, this.e = t}

  var r = !0, i = null, s = !1, u = this, h = Date.now || function () {return+(new Date)};
  p.prototype.createElement = function (e, t, n) {
    e = this.z.createElement(e);
    if (t)for (var r in t)t.hasOwnProperty(r) && ("style" == r ? e.style.cssText = t[r] : e.setAttribute(r, t[r]));
    return n && e.appendChild(this.z.createTextNode(n)), e
  }, a("webfont.BrowserInfo", E), E.prototype.pa = o("M"), E.prototype.hasWebFontSupport = E.prototype.pa, E.prototype.qa = o("U"), E.prototype.hasWebKitFallbackBug = E.prototype.qa, E.prototype.ra = o("Aa"), E.prototype.hasWebKitMetricsBug = E.prototype.ra;
  var x = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
  S.prototype.toString = function () {return[this.d, this.o || "", this.aa || "", this.f || ""].join("")}, a("webfont.UserAgent", N), N.prototype.getName = o("K"), N.prototype.getName = N.prototype.getName, N.prototype.oa = o("za"), N.prototype.getVersion = N.prototype.oa, N.prototype.ka = o("fa"), N.prototype.getEngine = N.prototype.ka, N.prototype.la = o("ea"), N.prototype.getEngineVersion = N.prototype.la, N.prototype.ma = o("wa"), N.prototype.getPlatform = N.prototype.ma, N.prototype.na = o("va"), N.prototype.getPlatformVersion = N.prototype.na, N.prototype.ja = o("da"), N.prototype.getDocumentMode = N.prototype.ja, N.prototype.ia = o("k"), N.prototype.getBrowserInfo = N.prototype.ia;
  var k = new N("Unknown", new S, "Unknown", "Unknown", new S, "Unknown", "Unknown", new S, "Unknown", void 0, new E(s, s, s));
  C.prototype.parse = function () {
    var e;
    if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
      e = L(this);
      var t = A(this), n = T(t), r = i, o = i, u = i, a = i, f = M(this.a, /Trident\/([\d\w\.]+)/, 1), l = _(this.I), r = -1 != this.a.indexOf("MSIE") ? M(this.a, /MSIE ([\d\w\.]+)/, 1) : M(this.a, /rv:([\d\w\.]+)/, 1), o = T(r);
      "" != f ? (u = "Trident", a = T(f)) : (u = "Unknown", a = new S, f = "Unknown"), e = new N("MSIE", o, r, u, a, f, e, n, t, l, new E("Windows" == e && 6 <= o.d || "Windows Phone" == e && 8 <= n.d, s, s))
    } else if (-1 != this.a.indexOf("Opera"))e:if (e = "Unknown", t = M(this.a, /Presto\/([\d\w\.]+)/, 1), n = T(t), r = A(this), o = T(r), u = _(this.I), n.d !== i ? e = "Presto" : (-1 != this.a.indexOf("Gecko") && (e = "Gecko"), t = M(this.a, /rv:([^\)]+)/, 1), n = T(t)), -1 != this.a.indexOf("Opera Mini/"))a = M(this.a, /Opera Mini\/([\d\.]+)/, 1), f = T(a), e = new N("OperaMini", f, a, e, n, t, L(this), o, r, u, new E(s, s, s)); else {
      if (-1 != this.a.indexOf("Version/") && (a = M(this.a, /Version\/([\d\.]+)/, 1), f = T(a), f.d !== i)) {
        e = new N("Opera", f, a, e, n, t, L(this), o, r, u, new E(10 <= f.d, s, s));
        break e
      }
      a = M(this.a, /Opera[\/ ]([\d\.]+)/, 1), f = T(a), e = f.d !== i ? new N("Opera", f, a, e, n, t, L(this), o, r, u, new E(10 <= f.d, s, s)) : new N("Opera", new S, "Unknown", e, n, t, L(this), o, r, u, new E(s, s, s))
    } else/OPR\/[\d.]+/.test(this.a) ? e = O(this) : /AppleWeb(K|k)it/.test(this.a) ? e = O(this) : -1 != this.a.indexOf("Gecko") ? (e = "Unknown", t = new S, n = "Unknown", r = A(this), o = T(r), u = s, -1 != this.a.indexOf("Firefox") ? (e = "Firefox", n = M(this.a, /Firefox\/([\d\w\.]+)/, 1), t = T(n), u = 3 <= t.d && 5 <= t.o) : -1 != this.a.indexOf("Mozilla") && (e = "Mozilla"), a = M(this.a, /rv:([^\)]+)/, 1), f = T(a), u || (u = 1 < f.d || 1 == f.d && 9 < f.o || 1 == f.d && 9 == f.o && 2 <= f.aa || a.match(/1\.9\.1b[123]/) != i || a.match(/1\.9\.1\.[\d\.]+/) != i), e = new N(e, t, n, "Gecko", f, a, L(this), o, r, _(this.I), new E(u, s, s))) : e = k;
    return e
  }, D.prototype.f = function (e) {
    for (var t = [], n = 0; n < arguments.length; n++)t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
    return t.join(this.ua)
  }, P.prototype.getName = o("K"), U.prototype.remove = function () {
    var e = this.s;
    e.parentNode && e.parentNode.removeChild(e)
  };
  var V = {Da: "serif", Ca: "sans-serif", Ba: "monospace"};
  X.prototype.start = function () {this.A = new U(this.c, this.C), W(this.A), this.B = new U(this.c, this.C), W(this.B), this.xa = h(), z(this.A, new P(this.q.getName() + ",serif", H(this.q))), z(this.B, new P(this.q.getName() + ",sans-serif", H(this.q))), J(this)}, Q.prototype.ga = function (e) {
    var t = this.t;
    m(t.h, t.g.f(t.j, e.getName(), H(e).toString(), "loading")), m(t.h, t.g.f(t.j, e.getName(), H(e).toString(), "inactive")), v(t.h, t.g.f(t.j, e.getName(), H(e).toString(), "active")), q(t, "fontactive", e), this.ba = r, Y(this)
  }, Q.prototype.ha = function (e) {
    var t = this.t;
    m(t.h, t.g.f(t.j, e.getName(), H(e).toString(), "loading")), g(t.h, t.g.f(t.j, e.getName(), H(e).toString(), "active")) || v(t.h, t.g.f(t.j, e.getName(), H(e).toString(), "inactive")), q(t, "fontinactive", e), Y(this)
  }, Z.prototype.load = function (e) {
    var t = e.context || this.G;
    this.c = new p(this.G, t);
    var t = new j(this.c, t.document.documentElement, e), n = this.u, r = this.c, i = [], s;
    for (s in e)if (e.hasOwnProperty(s)) {
      var o = n.w[s];
      o && i.push(o(e[s], r))
    }
    e = e.timeout, this.Q = this.R = i.length, e = new Q(this.a, this.c, t, e), s = 0;
    for (n = i.length; s < n; s++)r = i[s], r.H(this.a, c(this.ta, this, r, t, e))
  }, Z.prototype.ta = function (e, t, n, r) {
    var s = this;
    r ? e.load(function (e, r, o) {
      var u = 0 == --s.R;
      u && F(t), setTimeout(function () {G(n, e, r || {}, o || i, u)}, 0)
    }) : (e = 0 == --this.R, this.Q--, e && (0 == this.Q ? I(t) : F(t)), G(n, [], {}, i, e))
  }, et.prototype.H = function (e, t) {
    var n = this, r = n.e.projectId, i = n.e.version;
    if (r) {
      var o = n.c.v;
      w(this.c, n.D(r, i), function (i) {
        if (i)t(s); else {
          if (o["__mti_fntLst" + r] && (i = o["__mti_fntLst" + r]()))for (var u = 0; u < i.length; u++)n.m.push(new P(i[u].fontfamily));
          t(e.k.M)
        }
      }).id = "__MonotypeAPIScript__" + r
    } else t(s)
  }, et.prototype.D = function (e, t) {
    var n = y(this.c), r = (this.e.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
    return n + "//" + r + "/" + e + ".js" + (t ? "?v=" + t : "")
  }, et.prototype.load = function (e) {e(this.m)}, tt.prototype.D = function (e) {return y(this.c) + (this.e.api || "//f.fontdeck.com/s/css/js/") + (this.c.v.location.hostname || this.c.G.location.hostname) + "/" + e + ".js"}, tt.prototype.H = function (e, t) {
    var n = this.e.id, r = this.c.v, i = this;
    n ? (r.__webfontfontdeckmodule__ || (r.__webfontfontdeckmodule__ = {}), r.__webfontfontdeckmodule__[n] = function (e, n) {
      for (var r = 0, s = n.fonts.length; r < s; ++r) {
        var o = n.fonts[r];
        i.m.push(new P(o.name, B("font-weight:" + o.weight + ";font-style:" + o.style)))
      }
      t(e)
    }, w(this.c, this.D(n), function (e) {e && t(s)})) : t(s)
  }, tt.prototype.load = function (e) {e(this.m)};
  var rt = "//fonts.googleapis.com/css";
  nt.prototype.f = function () {
    if (0 == this.p.length)throw Error("No fonts to load !");
    if (-1 != this.N.indexOf("kit="))return this.N;
    for (var e = this.p.length, t = [], n = 0; n < e; n++)t.push(this.p[n].replace(/ /g, "+"));
    return e = this.N + "?family=" + t.join("%7C"), 0 < this.S.length && (e += "&subset=" + this.S.join(",")), 0 < this.ca.length && (e += "&text=" + encodeURIComponent(this.ca)), e
  };
  var st = {latin: "BESbswy", cyrillic: "&#1081;&#1103;&#1046;", greek: "&#945;&#946;&#931;", khmer: "&#x1780;&#x1781;&#x1782;", Hanuman: "&#x1780;&#x1781;&#x1782;"}, ot = {thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7"}, ut = {i: "i", italic: "i", n: "n", normal: "n"}, at = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
  it.prototype.parse = function () {
    for (var e = this.p.length, t = 0; t < e; t++) {
      var n = this.p[t].split(":"), r = n[0].replace(/\+/g, " "), s = ["n4"];
      if (2 <= n.length) {
        var o, u = n[1];
        o = [];
        if (u)for (var u = u.split(","), a = u.length, f = 0; f < a; f++) {
          var l;
          l = u[f];
          if (l.match(/^[\w]+$/)) {
            l = at.exec(l.toLowerCase());
            var c = void 0;
            if (l == i)c = ""; else {
              c = void 0, c = l[1];
              if (c == i || "" == c)c = "4"; else var h = ot[c], c = h ? h : isNaN(c) ? "4" : c.substr(0, 1);
              c = [l[2] == i || "" == l[2] ? "n" : ut[l[2]], c].join("")
            }
            l = c
          } else l = "";
          l && o.push(l)
        }
        0 < o.length && (s = o), 3 == n.length && (n = n[2], o = [], n = n ? n.split(",") : o, 0 < n.length && (n = st[n[0]]) && (this.J[r] = n))
      }
      this.J[r] || (n = st[r]) && (this.J[r] = n);
      for (n = 0; n < s.length; n += 1)this.$.push(new P(r, s[n]))
    }
  };
  var lt = {Arimo: r, Cousine: r, Tinos: r};
  ft.prototype.H = function (e, t) {t(e.k.M)}, ft.prototype.load = function (e) {
    var t = this.c;
    if ("MSIE" == this.a.getName() && this.e.blocking != r) {
      var n = c(this.X, this, e), i = function () {t.z.body ? n() : setTimeout(i, 0)};
      i()
    } else this.X(e)
  }, ft.prototype.X = function (e) {
    for (var t = this.c, n = new nt(this.e.api, y(t), this.e.text), r = this.e.families, i = r.length, s = 0; s < i; s++) {
      var o = r[s].split(":");
      3 == o.length && n.S.push(o.pop());
      var u = "";
      2 == o.length && "" != o[1] && (u = ":"), n.p.push(o.join(u))
    }
    r = new it(r), r.parse(), b(t, n.f()), e(r.$, r.J, lt)
  }, ct.prototype.D = function (e) {
    var t = y(this.c);
    return(this.e.api || t + "//use.typekit.net") + "/" + e + ".js"
  }, ct.prototype.H = function (e, t) {
    var n = this.e.id, r = this.e, i = this.c.v, o = this;
    n ? (i.__webfonttypekitmodule__ || (i.__webfonttypekitmodule__ = {}), i.__webfonttypekitmodule__[n] = function (n) {
      n(e, r, function (e, n, r) {
        for (var i = 0; i < n.length; i += 1) {
          var s = r[n[i]];
          if (s)for (var u = 0; u < s.length; u += 1)o.m.push(new P(n[i], s[u])); else o.m.push(new P(n[i]))
        }
        t(e)
      })
    }, w(this.c, this.D(n), function (e) {e && t(s)}, 2e3)) : t(s)
  }, ct.prototype.load = function (e) {e(this.m)}, ht.prototype.load = function (e) {
    var t, n, r = this.e.urls || [], i = this.e.families || [], s = this.e.testStrings || {};
    t = 0;
    for (n = r.length; t < n; t++)b(this.c, r[t]);
    r = [], t = 0;
    for (n = i.length; t < n; t++) {
      var o = i[t].split(":");
      if (o[1])for (var u = o[1].split(","), a = 0; a < u.length; a += 1)r.push(new P(o[0], u[a])); else r.push(new P(o[0]))
    }
    e(r, s)
  }, ht.prototype.H = function (e, t) {return t(e.k.M)};
  var pt = new Z(u);
  pt.u.w.custom = function (e, t) {return new ht(t, e)}, pt.u.w.fontdeck = function (e, t) {return new tt(t, e)}, pt.u.w.monotype = function (e, t) {return new et(t, e)}, pt.u.w.typekit = function (e, t) {return new ct(t, e)}, pt.u.w.google = function (e, t) {return new ft(t, e)}, u.WebFont || (u.WebFont = {}, u.WebFont.load = c(pt.load, pt), u.WebFontConfig && pt.load(u.WebFontConfig))
}(this, document), define("webfont", function (e) {return function () {return e.WebFont}}(this)), define("PoE/Environment/Font", ["require", "../jslib/jquery", "webfont"], function (e) {
  var t = e("jquery"), n = e("webfont"), r = ["FontinRegular", "FontinSmallCaps", "FontinBold"], i = {};
  for (var s = 0, o = r.length; s < o; ++s)i[r[s]] = t.Deferred();
  return{waitLoad: function (e) {
    if (i[e])return i[e].promise();
    console.warn("Font not found: " + e);
    var n = t.Deferred();
    return n.reject(), n.promise()
  }, loadFonts: function () {n.load({custom: {families: r}, loading: function () {}, active: function () {}, inactive: function () {}, fontloading: function (e, t) {}, fontactive: function (e, t) {i[e] && i[e].resolve()}, fontinactive: function (e, t) {i[e] && i[e].reject()}})}}
}), define("jQuery.countdown", ["../jslib/jquery"], function (e) {
  return function (e) {
    function t() {
      function t(e) {
        var i = e < 1e12 ? i = performance.now ? performance.now() + performance.timing.navigationStart : Date.now() : e || (new Date).getTime();
        i - r >= 1e3 && (c._updateTargets(), r = i), n(t)
      }

      this.regional = [], this.regional[""] = {labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"], labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"], compactLabels: ["y", "m", "w", "d"], whichLabels: null, digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], timeSeparator: ":", isRTL: !1}, this._defaults = {until: null, since: null, timezone: null, serverSync: null, format: "dHMS", layout: "", compact: !1, significant: 0, description: "", expiryUrl: "", expiryText: "", alwaysExpire: !1, onExpiry: null, onTick: null, tickInterval: 1}, e.extend(this._defaults, this.regional[""]), this._serverSyncs = [];
      var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null, r = 0;
      !n || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, setInterval(function () {c._updateTargets()}, 980)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || (new Date).getTime(), n(t))
    }

    function l(t, n) {return t == "option" && (n.length == 0 || n.length == 1 && typeof n[0] == "string") ? !0 : e.inArray(t, f) > -1}

    var n = 0, r = 1, i = 2, s = 3, o = 4, u = 5, a = 6;
    e.extend(t.prototype, {markerClassName: "hasCountdown", propertyName: "countdown", _rtlClass: "countdown_rtl", _sectionClass: "countdown_section", _amountClass: "countdown_amount", _rowClass: "countdown_row", _holdingClass: "countdown_holding", _showClass: "countdown_show", _descrClass: "countdown_descr", _timerTargets: [], setDefaults: function (t) {this._resetExtraLabels(this._defaults, t), e.extend(this._defaults, t || {})}, UTCDate: function (e, t, n, r, i, s, o, u) {
      typeof t == "object" && t.constructor == Date && (u = t.getMilliseconds(), o = t.getSeconds(), s = t.getMinutes(), i = t.getHours(), r = t.getDate(), n = t.getMonth(), t = t.getFullYear());
      var a = new Date;
      return a.setUTCFullYear(t), a.setUTCDate(1), a.setUTCMonth(n || 0), a.setUTCDate(r || 1), a.setUTCHours(i || 0), a.setUTCMinutes((s || 0) - (Math.abs(e) < 30 ? e * 60 : e)), a.setUTCSeconds(o || 0), a.setUTCMilliseconds(u || 0), a
    }, periodsToSeconds: function (e) {return e[0] * 31557600 + e[1] * 2629800 + e[2] * 604800 + e[3] * 86400 + e[4] * 3600 + e[5] * 60 + e[6]}, _attachPlugin: function (t, n) {
      t = e(t);
      if (t.hasClass(this.markerClassName))return;
      var r = {options: e.extend({}, this._defaults), _periods: [0, 0, 0, 0, 0, 0, 0]};
      t.addClass(this.markerClassName).data(this.propertyName, r), this._optionPlugin(t, n)
    }, _addTarget: function (e) {this._hasTarget(e) || this._timerTargets.push(e)}, _hasTarget: function (t) {return e.inArray(t, this._timerTargets) > -1}, _removeTarget: function (t) {this._timerTargets = e.map(this._timerTargets, function (e) {return e == t ? null : e})}, _updateTargets: function () {for (var e = this._timerTargets.length - 1; e >= 0; e--)this._updateCountdown(this._timerTargets[e])}, _optionPlugin: function (t, n, r) {
      t = e(t);
      var i = t.data(this.propertyName);
      if (!n || typeof n == "string" && r == null) {
        var s = n;
        return n = (i || {}).options, n && s ? n[s] : n
      }
      if (!t.hasClass(this.markerClassName))return;
      n = n || {};
      if (typeof n == "string") {
        var s = n;
        n = {}, n[s] = r
      }
      this._resetExtraLabels(i.options, n), e.extend(i.options, n), this._adjustSettings(t, i);
      var o = new Date;
      (i._since && i._since < o || i._until && i._until > o) && this._addTarget(t[0]), this._updateCountdown(t, i)
    }, _updateCountdown: function (t, n) {
      var r = e(t);
      n = n || r.data(this.propertyName);
      if (!n)return;
      r.html(this._generateHTML(n)).toggleClass(this._rtlClass, n.options.isRTL);
      if (e.isFunction(n.options.onTick)) {
        var i = n._hold != "lap" ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date);
        (n.options.tickInterval == 1 || this.periodsToSeconds(i) % n.options.tickInterval == 0) && n.options.onTick.apply(t, [i])
      }
      var s = n._hold != "pause" && (n._since ? n._now.getTime() < n._since.getTime() : n._now.getTime() >= n._until.getTime());
      if (s && !n._expiring) {
        n._expiring = !0;
        if (this._hasTarget(t) || n.options.alwaysExpire) {
          this._removeTarget(t), e.isFunction(n.options.onExpiry) && n.options.onExpiry.apply(t, []);
          if (n.options.expiryText) {
            var o = n.options.layout;
            n.options.layout = n.options.expiryText, this._updateCountdown(t, n), n.options.layout = o
          }
          n.options.expiryUrl && (window.location = n.options.expiryUrl)
        }
        n._expiring = !1
      } else n._hold == "pause" && this._removeTarget(t);
      r.data(this.propertyName, n)
    }, _resetExtraLabels: function (e, t) {
      var n = !1;
      for (var r in t)if (r != "whichLabels" && r.match(/[Ll]abels/)) {
        n = !0;
        break
      }
      if (n)for (var r in e)r.match(/[Ll]abels[02-9]/) && (e[r] = null)
    }, _adjustSettings: function (t, n) {
      var r, i = 0, s = null;
      for (var o = 0; o < this._serverSyncs.length; o++)if (this._serverSyncs[o][0] == n.options.serverSync) {
        s = this._serverSyncs[o][1];
        break
      }
      if (s != null)i = n.options.serverSync ? s : 0, r = new Date; else {
        var u = e.isFunction(n.options.serverSync) ? n.options.serverSync.apply(t, []) : null;
        r = new Date, i = u ? r.getTime() - u.getTime() : 0, this._serverSyncs.push([n.options.serverSync, i])
      }
      var a = n.options.timezone;
      a = a == null ? -r.getTimezoneOffset() : a, n._since = n.options.since, n._since != null && (n._since = this.UTCDate(a, this._determineTime(n._since, null)), n._since && i && n._since.setMilliseconds(n._since.getMilliseconds() + i)), n._until = this.UTCDate(a, this._determineTime(n.options.until, r)), i && n._until.setMilliseconds(n._until.getMilliseconds() + i), n._show = this._determineShow(n)
    }, _destroyPlugin: function (t) {
      t = e(t);
      if (!t.hasClass(this.markerClassName))return;
      this._removeTarget(t[0]), t.removeClass(this.markerClassName).empty().removeData(this.propertyName)
    }, _pausePlugin: function (e) {this._hold(e, "pause")}, _lapPlugin: function (e) {this._hold(e, "lap")}, _resumePlugin: function (e) {this._hold(e, null)}, _hold: function (t, n) {
      var r = e.data(t, this.propertyName);
      if (r) {
        if (r._hold == "pause" && !n) {
          r._periods = r._savePeriods;
          var i = r._since ? "-" : "+";
          r[r._since ? "_since" : "_until"] = this._determineTime(i + r._periods[0] + "y" + i + r._periods[1] + "o" + i + r._periods[2] + "w" + i + r._periods[3] + "d" + i + r._periods[4] + "h" + i + r._periods[5] + "m" + i + r._periods[6] + "s"), this._addTarget(t)
        }
        r._hold = n, r._savePeriods = n == "pause" ? r._periods : null, e.data(t, this.propertyName, r), this._updateCountdown(t, r)
      }
    }, _getTimesPlugin: function (t) {
      var n = e.data(t, this.propertyName);
      return n ? n._hold ? this._calculatePeriods(n, n._show, n.options.significant, new Date) : n._periods : null
    }, _determineTime: function (e, t) {
      var n = function (e) {
        var t = new Date;
        return t.setTime(t.getTime() + e * 1e3), t
      }, r = function (e) {
        e = e.toLowerCase();
        var t = new Date, n = t.getFullYear(), r = t.getMonth(), i = t.getDate(), s = t.getHours(), o = t.getMinutes(), u = t.getSeconds(), a = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, f = a.exec(e);
        while (f) {
          switch (f[2] || "s") {
            case"s":
              u += parseInt(f[1], 10);
              break;
            case"m":
              o += parseInt(f[1], 10);
              break;
            case"h":
              s += parseInt(f[1], 10);
              break;
            case"d":
              i += parseInt(f[1], 10);
              break;
            case"w":
              i += parseInt(f[1], 10) * 7;
              break;
            case"o":
              r += parseInt(f[1], 10), i = Math.min(i, c._getDaysInMonth(n, r));
              break;
            case"y":
              n += parseInt(f[1], 10), i = Math.min(i, c._getDaysInMonth(n, r))
          }
          f = a.exec(e)
        }
        return new Date(n, r, i, s, o, u, 0)
      }, i = e == null ? t : typeof e == "string" ? r(e) : typeof e == "number" ? n(e) : e;
      return i && i.setMilliseconds(0), i
    }, _getDaysInMonth: function (e, t) {return 32 - (new Date(e, t, 32)).getDate()}, _normalLabels: function (e) {return e}, _generateHTML: function (t) {
      var f = this;
      t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
      var l = !1, h = 0, p = t.options.significant, d = e.extend({}, t._show);
      for (var v = n; v <= a; v++)l |= t._show[v] == "?" && t._periods[v] > 0, d[v] = t._show[v] == "?" && !l ? null : t._show[v], h += d[v] ? 1 : 0, p -= t._periods[v] > 0 ? 1 : 0;
      var m = [!1, !1, !1, !1, !1, !1, !1];
      for (var v = a; v >= n; v--)t._show[v] && (t._periods[v] ? m[v] = !0 : (m[v] = p > 0, p--));
      var g = t.options.compact ? t.options.compactLabels : t.options.labels, y = t.options.whichLabels || this._normalLabels, b = function (e) {
        var n = t.options["compactLabels" + y(t._periods[e])];
        return d[e] ? f._translateDigits(t, t._periods[e]) + (n ? n[e] : g[e]) + " " : ""
      }, w = function (e) {
        var n = t.options["labels" + y(t._periods[e])];
        return!t.options.significant && d[e] || t.options.significant && m[e] ? '<span class="' + c._sectionClass + '">' + '<span class="' + c._amountClass + '">' + f._translateDigits(t, t._periods[e]) + "</span><br/>" + (n ? n[e] : g[e]) + "</span>" : ""
      };
      return t.options.layout ? this._buildLayout(t, d, t.options.layout, t.options.compact, t.options.significant, m) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + b(n) + b(r) + b(i) + b(s) + (d[o] ? this._minDigits(t, t._periods[o], 2) : "") + (d[u] ? (d[o] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[u], 2) : "") + (d[a] ? (d[o] || d[u] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[a], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || h) + (t._hold ? " " + this._holdingClass : "") + '">' + w(n) + w(r) + w(i) + w(s) + w(o) + w(u) + w(a)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "")
    }, _buildLayout: function (t, f, l, c, h, p) {
      var d = t.options[c ? "compactLabels" : "labels"], v = t.options.whichLabels || this._normalLabels, m = function (e) {return(t.options[(c ? "compactLabels" : "labels") + v(t._periods[e])] || d)[e]}, g = function (e, n) {return t.options.digits[Math.floor(e / n) % 10]}, y = {desc: t.options.description, sep: t.options.timeSeparator, yl: m(n), yn: this._minDigits(t, t._periods[n], 1), ynn: this._minDigits(t, t._periods[n], 2), ynnn: this._minDigits(t, t._periods[n], 3), y1: g(t._periods[n], 1), y10: g(t._periods[n], 10), y100: g(t._periods[n], 100), y1000: g(t._periods[n], 1e3), ol: m(r), on: this._minDigits(t, t._periods[r], 1), onn: this._minDigits(t, t._periods[r], 2), onnn: this._minDigits(t, t._periods[r], 3), o1: g(t._periods[r], 1), o10: g(t._periods[r], 10), o100: g(t._periods[r], 100), o1000: g(t._periods[r], 1e3), wl: m(i), wn: this._minDigits(t, t._periods[i], 1), wnn: this._minDigits(t, t._periods[i], 2), wnnn: this._minDigits(t, t._periods[i], 3), w1: g(t._periods[i], 1), w10: g(t._periods[i], 10), w100: g(t._periods[i], 100), w1000: g(t._periods[i], 1e3), dl: m(s), dn: this._minDigits(t, t._periods[s], 1), dnn: this._minDigits(t, t._periods[s], 2), dnnn: this._minDigits(t, t._periods[s], 3), d1: g(t._periods[s], 1), d10: g(t._periods[s], 10), d100: g(t._periods[s], 100), d1000: g(t._periods[s], 1e3), hl: m(o), hn: this._minDigits(t, t._periods[o], 1), hnn: this._minDigits(t, t._periods[o], 2), hnnn: this._minDigits(t, t._periods[o], 3), h1: g(t._periods[o], 1), h10: g(t._periods[o], 10), h100: g(t._periods[o], 100), h1000: g(t._periods[o], 1e3), ml: m(u), mn: this._minDigits(t, t._periods[u], 1), mnn: this._minDigits(t, t._periods[u], 2), mnnn: this._minDigits(t, t._periods[u], 3), m1: g(t._periods[u], 1), m10: g(t._periods[u], 10), m100: g(t._periods[u], 100), m1000: g(t._periods[u], 1e3), sl: m(a), sn: this._minDigits(t, t._periods[a], 1), snn: this._minDigits(t, t._periods[a], 2), snnn: this._minDigits(t, t._periods[a], 3), s1: g(t._periods[a], 1), s10: g(t._periods[a], 10), s100: g(t._periods[a], 100), s1000: g(t._periods[a], 1e3)}, b = l;
      for (var w = n; w <= a; w++) {
        var E = "yowdhms".charAt(w), x = new RegExp("\\{" + E + "<\\}(.*)\\{" + E + ">\\}", "g");
        b = b.replace(x, !h && f[w] || h && p[w] ? "$1" : "")
      }
      return e.each(y, function (e, t) {
        var n = new RegExp("\\{" + e + "\\}", "g");
        b = b.replace(n, t)
      }), b
    }, _minDigits: function (e, t, n) {return t = "" + t, t.length >= n ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - n)))}, _translateDigits: function (e, t) {return("" + t).replace(/[0-9]/g, function (t) {return e.options.digits[t]})}, _determineShow: function (e) {
      var t = e.options.format, f = [];
      return f[n] = t.match("y") ? "?" : t.match("Y") ? "!" : null, f[r] = t.match("o") ? "?" : t.match("O") ? "!" : null, f[i] = t.match("w") ? "?" : t.match("W") ? "!" : null, f[s] = t.match("d") ? "?" : t.match("D") ? "!" : null, f[o] = t.match("h") ? "?" : t.match("H") ? "!" : null, f[u] = t.match("m") ? "?" : t.match("M") ? "!" : null, f[a] = t.match("s") ? "?" : t.match("S") ? "!" : null, f
    }, _calculatePeriods: function (e, t, f, l) {
      e._now = l, e._now.setMilliseconds(0);
      var h = new Date(e._now.getTime());
      e._since ? l.getTime() < e._since.getTime() ? e._now = l = h : l = e._since : (h.setTime(e._until.getTime()), l.getTime() > e._until.getTime() && (e._now = l = h));
      var p = [0, 0, 0, 0, 0, 0, 0];
      if (t[n] || t[r]) {
        var d = c._getDaysInMonth(l.getFullYear(), l.getMonth()), v = c._getDaysInMonth(h.getFullYear(), h.getMonth()), m = h.getDate() == l.getDate() || h.getDate() >= Math.min(d, v) && l.getDate() >= Math.min(d, v), g = function (e) {return(e.getHours() * 60 + e.getMinutes()) * 60 + e.getSeconds()}, y = Math.max(0, (h.getFullYear() - l.getFullYear()) * 12 + h.getMonth() - l.getMonth() + (h.getDate() < l.getDate() && !m || m && g(h) < g(l) ? -1 : 0));
        p[n] = t[n] ? Math.floor(y / 12) : 0, p[r] = t[r] ? y - p[n] * 12 : 0, l = new Date(l.getTime());
        var b = l.getDate() == d, w = c._getDaysInMonth(l.getFullYear() + p[n], l.getMonth() + p[r]);
        l.getDate() > w && l.setDate(w), l.setFullYear(l.getFullYear() + p[n]), l.setMonth(l.getMonth() + p[r]), b && l.setDate(w)
      }
      var E = Math.floor((h.getTime() - l.getTime()) / 1e3), x = function (e, n) {p[e] = t[e] ? Math.floor(E / n) : 0, E -= p[e] * n};
      x(i, 604800), x(s, 86400), x(o, 3600), x(u, 60), x(a, 1);
      if (E > 0 && !e._since) {
        var T = [1, 12, 4.3482, 7, 24, 60, 60], N = a, C = 1;
        for (var k = a; k >= n; k--)t[k] && (p[N] >= C && (p[N] = 0, E = 1), E > 0 && (p[k]++, E = 0, N = k, C = 1)), C *= T[k]
      }
      if (f)for (var k = n; k <= a; k++)f && p[k] ? f-- : f || (p[k] = 0);
      return p
    }});
    var f = ["getTimes"];
    e.fn.countdown = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return l(e, t) ? c["_" + e + "Plugin"].apply(c, [this[0]].concat(t)) : this.each(function () {
        if (typeof e == "string") {
          if (!c["_" + e + "Plugin"])throw"Unknown command: " + e;
          c["_" + e + "Plugin"].apply(c, [this].concat(t))
        } else c._attachPlugin(this, e || {})
      })
    };
    var c = e.countdown = new t
  }(e), e
}), define("jquery.mousewheel", ["../jslib/jquery"], function (e) {
  (function (e) {
    function t(t) {
      var n = t || window.event, r = [].slice.call(arguments, 1), i = 0, s = !0, o = 0, u = 0;
      return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle).apply(this, r)
    }

    var n = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)for (var r = n.length; r;)e.event.fixHooks[n[--r]] = e.event.mouseHooks;
    e.event.special.mousewheel = {setup: function () {if (this.addEventListener)for (var e = n.length; e;)this.addEventListener(n[--e], t, !1); else this.onmousewheel = t}, teardown: function () {if (this.removeEventListener)for (var e = n.length; e;)this.removeEventListener(n[--e], t, !1); else this.onmousewheel = null}}, e.fn.extend({mousewheel: function (e) {return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")}, unmousewheel: function (e) {return this.unbind("mousewheel", e)}})
  })(e)
}), define("jquery.base64", ["../jslib/jquery"], function (e) {
  e.base64 = function (e) {
    function i(e, t) {
      var r = n.indexOf(e.charAt(t));
      if (r === -1)throw"Cannot decode base64";
      return r
    }

    function s(e) {
      var n = 0, r, s, o = e.length, u = [];
      e = String(e);
      if (o === 0)return e;
      if (o % 4 !== 0)throw"Cannot decode base64";
      e.charAt(o - 1) === t && (n = 1, e.charAt(o - 2) === t && (n = 2), o -= 4);
      for (r = 0; r < o; r += 4)s = i(e, r) << 18 | i(e, r + 1) << 12 | i(e, r + 2) << 6 | i(e, r + 3), u.push(String.fromCharCode(s >> 16, s >> 8 & 255, s & 255));
      switch (n) {
        case 1:
          s = i(e, r) << 18 | i(e, r + 1) << 12 | i(e, r + 2) << 6, u.push(String.fromCharCode(s >> 16, s >> 8 & 255));
          break;
        case 2:
          s = i(e, r) << 18 | i(e, r + 1) << 12, u.push(String.fromCharCode(s >> 16))
      }
      return u.join("")
    }

    function o(e, t) {
      var n = e.charCodeAt(t);
      if (n > 255)throw"INVALID_CHARACTER_ERR: DOM Exception 5";
      return n
    }

    function u(e) {
      if (arguments.length !== 1)throw"SyntaxError: exactly one argument required";
      e = String(e);
      var r, i, s = [], u = e.length - e.length % 3;
      if (e.length === 0)return e;
      for (r = 0; r < u; r += 3)i = o(e, r) << 16 | o(e, r + 1) << 8 | o(e, r + 2), s.push(n.charAt(i >> 18)), s.push(n.charAt(i >> 12 & 63)), s.push(n.charAt(i >> 6 & 63)), s.push(n.charAt(i & 63));
      switch (e.length - u) {
        case 1:
          i = o(e, r) << 16, s.push(n.charAt(i >> 18) + n.charAt(i >> 12 & 63) + t + t);
          break;
        case 2:
          i = o(e, r) << 16 | o(e, r + 1) << 8, s.push(n.charAt(i >> 18) + n.charAt(i >> 12 & 63) + n.charAt(i >> 6 & 63) + t)
      }
      return s.join("")
    }

    var t = "=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "1.0";
    return{decode: s, encode: u, VERSION: r}
  }(e)
}), define("jquery.jscrollpane", ["../jslib/jquery"], function (e) {
  (function (e, t, n) {
    e.fn.jScrollPane = function (r) {
      function i(r, i) {
        function K(t) {
          var i, o, a, w, E, x, T = !1, C = !1;
          s = t;
          if (u === n)E = r.scrollTop(), x = r.scrollLeft(), r.css({overflow: "hidden", padding: 0}), f = r.innerWidth() + R, l = r.innerHeight(), r.width(f), u = e('<div class="jspPane" />').css("padding", q).append(r.children()), h = e('<div class="jspContainer" />').css({width: f + "px", height: l + "px"}).append(u).appendTo(r); else {
            r.css("width", ""), T = s.stickToBottom && yt(), C = s.stickToRight && bt(), w = r.innerWidth() + R != f || r.outerHeight() != l, w && (f = r.innerWidth() + R, l = r.innerHeight(), h.css({width: f + "px", height: l + "px"}));
            if (!w && U == p && u.outerHeight() == d) {
              r.width(f);
              return
            }
            U = p, u.css("width", ""), r.width(f), h.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
          }
          u.css("overflow", "auto"), t.contentWidth ? p = t.contentWidth : p = u[0].scrollWidth, d = u[0].scrollHeight, u.css("overflow", ""), v = p / f, m = d / l, g = m > 1, y = v > 1, !y && !g ? (r.removeClass("jspScrollable"), u.css({top: 0, width: h.width() - R}), Et(), Tt(), Ct(), st()) : (r.addClass("jspScrollable"), i = s.maintainPosition && (S || N), i && (o = mt(), a = gt()), Q(), Y(), et(), i && (dt(C ? p - f : o, !1), pt(T ? d - l : a, !1)), xt(), wt(), At(), s.enableKeyboardNavigation && Nt(), s.clickOnTrack && it(), kt(), s.hijackInternalLinks && Lt()), s.autoReinitialise && !I ? I = setInterval(function () {K(s)}, s.autoReinitialiseDelay) : !s.autoReinitialise && I && clearInterval(I), E && r.scrollTop(0) && pt(E, !1), x && r.scrollLeft(0) && dt(x, !1), r.trigger("jsp-initialised", [y || g])
        }

        function Q() {
          g && (h.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), C = h.find(">.jspVerticalBar"), k = C.find(">.jspTrack"), w = k.find(">.jspDrag"), s.showArrows && (M = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", nt(0, -1)).bind("click.jsp", St), _ = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", nt(0, 1)).bind("click.jsp", St), s.arrowScrollOnHover && (M.bind("mouseover.jsp", nt(0, -1, M)), _.bind("mouseover.jsp", nt(0, 1, _))), tt(k, s.verticalArrowPositions, M, _)), A = l, h.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {A -= e(this).outerHeight()}), w.hover(function () {w.addClass("jspHover")}, function () {w.removeClass("jspHover")}).bind("mousedown.jsp", function (t) {
            e("html").bind("dragstart.jsp selectstart.jsp", St), w.addClass("jspActive");
            var n = t.pageY - w.position().top;
            return e("html").bind("mousemove.jsp", function (e) {ut(e.pageY - n, !1)}).bind("mouseup.jsp mouseleave.jsp", ot), !1
          }), G())
        }

        function G() {
          k.height(A + "px"), S = 0, L = s.verticalGutter + k.outerWidth(), u.width(f - L - R);
          try {C.position().left === 0 && u.css("margin-left", L + "px")} catch (e) {}
        }

        function Y() {
          y && (h.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), D = h.find(">.jspHorizontalBar"), P = D.find(">.jspTrack"), x = P.find(">.jspDrag"), s.showArrows && (j = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", nt(-1, 0)).bind("click.jsp", St), F = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", nt(1, 0)).bind("click.jsp", St), s.arrowScrollOnHover && (j.bind("mouseover.jsp", nt(-1, 0, j)), F.bind("mouseover.jsp", nt(1, 0, F))), tt(P, s.horizontalArrowPositions, j, F)), x.hover(function () {x.addClass("jspHover")}, function () {x.removeClass("jspHover")}).bind("mousedown.jsp", function (t) {
            e("html").bind("dragstart.jsp selectstart.jsp", St), x.addClass("jspActive");
            var n = t.pageX - x.position().left;
            return e("html").bind("mousemove.jsp", function (e) {ft(e.pageX - n, !1)}).bind("mouseup.jsp mouseleave.jsp", ot), !1
          }), H = h.innerWidth(), Z())
        }

        function Z() {h.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {H -= e(this).outerWidth()}), P.width(H + "px"), N = 0}

        function et() {
          if (y && g) {
            var t = P.outerHeight(), n = k.outerWidth();
            A -= t, e(D).find(">.jspCap:visible,>.jspArrow").each(function () {H += e(this).outerWidth()}), H -= n, l -= n, f -= t, P.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), G(), Z()
          }
          y && u.width(h.outerWidth() - R + "px"), d = u.outerHeight(), m = d / l, y && (B = Math.ceil(1 / v * H), B > s.horizontalDragMaxWidth ? B = s.horizontalDragMaxWidth : B < s.horizontalDragMinWidth && (B = s.horizontalDragMinWidth), x.width(B + "px"), T = H - B, lt(N)), g && (O = Math.ceil(1 / m * A), O > s.verticalDragMaxHeight ? O = s.verticalDragMaxHeight : O < s.verticalDragMinHeight && (O = s.verticalDragMinHeight), w.height(O + "px"), E = A - O, at(S))
        }

        function tt(e, t, n, r) {
          var i = "before", s = "after", o;
          t == "os" && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == i ? s = t : t == s && (i = t, o = n, n = r, r = o), e[i](n)[s](r)
        }

        function nt(e, t, n) {return function () {return rt(e, t, this, n), this.blur(), !1}}

        function rt(t, n, r, i) {
          r = e(r).addClass("jspActive");
          var u, a, f = !0, l = function () {t !== 0 && o.scrollByX(t * s.arrowButtonSpeed), n !== 0 && o.scrollByY(n * s.arrowButtonSpeed), a = setTimeout(l, f ? s.initialDelay : s.arrowRepeatFreq), f = !1};
          l(), u = i ? "mouseout.jsp" : "mouseup.jsp", i = i || e("html"), i.bind(u, function () {r.removeClass("jspActive"), a && clearTimeout(a), a = null, i.unbind(u)})
        }

        function it() {
          st(), g && k.bind("mousedown.jsp", function (t) {
            if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
              var r = e(this), i = r.offset(), u = t.pageY - i.top - S, a, f = !0, h = function () {
                var e = r.offset(), n = t.pageY - e.top - O / 2, i = l * s.scrollPagePercent, c = E * i / (d - l);
                if (u < 0)S - c > n ? o.scrollByY(-i) : ut(n); else {
                  if (!(u > 0)) {
                    p();
                    return
                  }
                  S + c < n ? o.scrollByY(i) : ut(n)
                }
                a = setTimeout(h, f ? s.initialDelay : s.trackClickRepeatFreq), f = !1
              }, p = function () {a && clearTimeout(a), a = null, e(document).unbind("mouseup.jsp", p)};
              return h(), e(document).bind("mouseup.jsp", p), !1
            }
          }), y && P.bind("mousedown.jsp", function (t) {
            if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
              var r = e(this), i = r.offset(), u = t.pageX - i.left - N, a, l = !0, h = function () {
                var e = r.offset(), n = t.pageX - e.left - B / 2, i = f * s.scrollPagePercent, c = T * i / (p - f);
                if (u < 0)N - c > n ? o.scrollByX(-i) : ft(n); else {
                  if (!(u > 0)) {
                    d();
                    return
                  }
                  N + c < n ? o.scrollByX(i) : ft(n)
                }
                a = setTimeout(h, l ? s.initialDelay : s.trackClickRepeatFreq), l = !1
              }, d = function () {a && clearTimeout(a), a = null, e(document).unbind("mouseup.jsp", d)};
              return h(), e(document).bind("mouseup.jsp", d), !1
            }
          })
        }

        function st() {P && P.unbind("mousedown.jsp"), k && k.unbind("mousedown.jsp")}

        function ot() {e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), w && w.removeClass("jspActive"), x && x.removeClass("jspActive")}

        function ut(e, t) {
          if (!g)return;
          e < 0 ? e = 0 : e > E && (e = E), t === n && (t = s.animateScroll), t ? o.animate(w, "top", e, at) : (w.css("top", e), at(e))
        }

        function at(e) {
          e === n && (e = w.position().top), h.scrollTop(0), S = e;
          var t = S === 0, i = S == E, s = e / E, o = -s * (d - l);
          if (z != t || X != i)z = t, X = i, r.trigger("jsp-arrow-change", [z, X, W, V]);
          ct(t, i), u.css("top", o), r.trigger("jsp-scroll-y", [-o, t, i]).trigger("scroll")
        }

        function ft(e, t) {
          if (!y)return;
          e < 0 ? e = 0 : e > T && (e = T), t === n && (t = s.animateScroll), t ? o.animate(x, "left", e, lt) : (x.css("left", e), lt(e))
        }

        function lt(e) {
          e === n && (e = x.position().left), h.scrollTop(0), N = e;
          var t = N === 0, i = N == T, s = e / T, o = -s * (p - f);
          if (W != t || V != i)W = t, V = i, r.trigger("jsp-arrow-change", [z, X, W, V]);
          ht(t, i), u.css("left", o), r.trigger("jsp-scroll-x", [-o, t, i]).trigger("scroll")
        }

        function ct(e, t) {s.showArrows && (M[e ? "addClass" : "removeClass"]("jspDisabled"), _[t ? "addClass" : "removeClass"]("jspDisabled"))}

        function ht(e, t) {s.showArrows && (j[e ? "addClass" : "removeClass"]("jspDisabled"), F[t ? "addClass" : "removeClass"]("jspDisabled"))}

        function pt(e, t) {
          var n = e / (d - l);
          ut(n * E, t)
        }

        function dt(e, t) {
          var n = e / (p - f);
          ft(n * T, t)
        }

        function vt(t, n, r) {
          var i, o, u, a = 0, c = 0, p, d, v, m, g, y;
          try {i = e(t)} catch (w) {return}
          o = i.outerHeight(), u = i.outerWidth(), h.scrollTop(0), h.scrollLeft(0);
          while (!i.is(".jspPane")) {
            a += i.position().top, c += i.position().left, i = i.offsetParent();
            if (/^body|html$/i.test(i[0].nodeName))return
          }
          p = gt(), v = p + l, a < p || n ? g = a - s.verticalGutter : a + o > v && (g = a - l + o + s.verticalGutter), g && pt(g, r), d = mt(), m = d + f, c < d || n ? y = c - s.horizontalGutter : c + u > m && (y = c - f + u + s.horizontalGutter), y && dt(y, r)
        }

        function mt() {return-u.position().left}

        function gt() {return-u.position().top}

        function yt() {
          var e = d - l;
          return e > 20 && e - gt() < 10
        }

        function bt() {
          var e = p - f;
          return e > 20 && e - mt() < 10
        }

        function wt() {
          h.unbind(J).bind(J, function (e, t, n, r) {
            var i = N, u = S;
            return o.scrollBy(n * s.mouseWheelSpeed, -r * s.mouseWheelSpeed, !1), i == N && u == S
          })
        }

        function Et() {h.unbind(J)}

        function St() {return!1}

        function xt() {u.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (e) {vt(e.target, !1)})}

        function Tt() {u.find(":input,a").unbind("focus.jsp")}

        function Nt() {
          function a() {
            var e = N, r = S;
            switch (t) {
              case 40:
                o.scrollByY(s.keyboardSpeed, !1);
                break;
              case 38:
                o.scrollByY(-s.keyboardSpeed, !1);
                break;
              case 34:
              case 32:
                o.scrollByY(l * s.scrollPagePercent, !1);
                break;
              case 33:
                o.scrollByY(-l * s.scrollPagePercent, !1);
                break;
              case 39:
                o.scrollByX(s.keyboardSpeed, !1);
                break;
              case 37:
                o.scrollByX(-s.keyboardSpeed, !1)
            }
            return n = e != N || r != S, n
          }

          var t, n, i = [];
          y && i.push(D[0]), g && i.push(C[0]), u.focus(function () {r.focus()}), r.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (r) {
            if (r.target !== this && (!i.length || !e(r.target).closest(i).length))return;
            var s = N, o = S;
            switch (r.keyCode) {
              case 40:
              case 38:
              case 34:
              case 32:
              case 33:
              case 39:
              case 37:
                t = r.keyCode, a();
                break;
              case 35:
                pt(d - l), t = null;
                break;
              case 36:
                pt(0), t = null
            }
            return n = r.keyCode == t && s != N || o != S, !n
          }).bind("keypress.jsp", function (e) {return e.keyCode == t && a(), !n}), s.hideFocus ? (r.css("outline", "none"), "hideFocus"in h[0] && r.attr("hideFocus", !0)) : (r.css("outline", ""), "hideFocus"in h[0] && r.attr("hideFocus", !1))
        }

        function Ct() {r.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}

        function kt() {
          if (location.hash && location.hash.length > 1) {
            var t, n, r = escape(location.hash.substr(1));
            try {t = e("#" + r + ', a[name="' + r + '"]')} catch (i) {return}
            t.length && u.find(r) && (h.scrollTop() === 0 ? n = setInterval(function () {h.scrollTop() > 0 && (vt(t, !0), e(document).scrollTop(h.position().top), clearInterval(n))}, 50) : (vt(t, !0), e(document).scrollTop(h.position().top)))
          }
        }

        function Lt() {
          if (e(document.body).data("jspHijack"))return;
          e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function (n) {
            var r = this.href.substr(0, this.href.indexOf("#")), i = location.href, s, o, u, f, l, c;
            location.href.indexOf("#") !== -1 && (i = location.href.substr(0, location.href.indexOf("#")));
            if (r !== i)return;
            s = escape(this.href.substr(this.href.indexOf("#") + 1)), o;
            try {o = e("#" + s + ', a[name="' + s + '"]')} catch (h) {return}
            if (!o.length)return;
            u = o.closest(".jspScrollable"), f = u.data("jsp"), f.scrollToElement(o, !0), u[0].scrollIntoView && (l = e(t).scrollTop(), c = o.offset().top, (c < l || c > l + e(t).height()) && u[0].scrollIntoView()), n.preventDefault()
          })
        }

        function At() {
          var e, t, n, r, i, s = !1;
          h.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (o) {
            var u = o.originalEvent.touches[0];
            e = mt(), t = gt(), n = u.pageX, r = u.pageY, i = !1, s = !0
          }).bind("touchmove.jsp", function (u) {
            if (!s)return;
            var a = u.originalEvent.touches[0], f = N, l = S;
            return o.scrollTo(e + n - a.pageX, t + r - a.pageY), i = i || Math.abs(n - a.pageX) > 5 || Math.abs(r - a.pageY) > 5, f == N && l == S
          }).bind("touchend.jsp", function (e) {s = !1}).bind("click.jsp-touchclick", function (e) {if (i)return i = !1, !1})
        }

        function Ot() {
          var e = gt(), t = mt();
          r.removeClass("jspScrollable").unbind(".jsp"), r.replaceWith($.append(u.children())), $.scrollTop(e), $.scrollLeft(t), I && clearInterval(I)
        }

        var s, o = this, u, f, l, h, p, d, v, m, g, y, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z = !0, W = !0, X = !1, V = !1, $ = r.clone(!1, !1).empty(), J = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
        q = r.css("paddingTop") + " " + r.css("paddingRight") + " " + r.css("paddingBottom") + " " + r.css("paddingLeft"), R = (parseInt(r.css("paddingLeft"), 10) || 0) + (parseInt(r.css("paddingRight"), 10) || 0), e.extend(o, {reinitialise: function (t) {t = e.extend({}, s, t), K(t)}, scrollToElement: function (e, t, n) {vt(e, t, n)}, scrollTo: function (e, t, n) {dt(e, n), pt(t, n)}, scrollToX: function (e, t) {dt(e, t)}, scrollToY: function (e, t) {pt(e, t)}, scrollToPercentX: function (e, t) {dt(e * (p - f), t)}, scrollToPercentY: function (e, t) {pt(e * (d - l), t)}, scrollBy: function (e, t, n) {o.scrollByX(e, n), o.scrollByY(t, n)}, scrollByX: function (e, t) {
          var n = mt() + Math[e < 0 ? "floor" : "ceil"](e), r = n / (p - f);
          ft(r * T, t)
        }, scrollByY: function (e, t) {
          var n = gt() + Math[e < 0 ? "floor" : "ceil"](e), r = n / (d - l);
          ut(r * E, t)
        }, positionDragX: function (e, t) {ft(e, t)}, positionDragY: function (e, t) {ut(e, t)}, animate: function (e, t, n, r) {
          var i = {};
          i[t] = n, e.animate(i, {duration: s.animateDuration, easing: s.animateEase, queue: !1, step: r})
        }, getContentPositionX: function () {return mt()}, getContentPositionY: function () {return gt()}, getContentWidth: function () {return p}, getContentHeight: function () {return d}, getPercentScrolledX: function () {return mt() / (p - f)}, getPercentScrolledY: function () {return gt() / (d - l)}, getIsScrollableH: function () {return y}, getIsScrollableV: function () {return g}, getContentPane: function () {return u}, scrollToBottom: function (e) {ut(E, e)}, hijackInternalLinks: e.noop, destroy: function () {Ot()}}), K(i)
      }

      return r = e.extend({}, e.fn.jScrollPane.defaults, r), e.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {r[this] = r[this] || r.speed}), this.each(function () {
        var t = e(this), n = t.data("jsp");
        n ? n.reinitialise(r) : (n = new i(t, r), t.data("jsp", n))
      })
    }, e.fn.jScrollPane.defaults = {showArrows: !1, maintainPosition: !0, stickToBottom: !1, stickToRight: !1, clickOnTrack: !0, autoReinitialise: !1, autoReinitialiseDelay: 500, verticalDragMinHeight: 0, verticalDragMaxHeight: 99999, horizontalDragMinWidth: 0, horizontalDragMaxWidth: 99999, contentWidth: n, animateScroll: !1, animateDuration: 300, animateEase: "linear", hijackInternalLinks: !1, verticalGutter: 4, horizontalGutter: 4, mouseWheelSpeed: 0, arrowButtonSpeed: 0, arrowRepeatFreq: 50, arrowScrollOnHover: !1, trackClickSpeed: 0, trackClickRepeatFreq: 70, verticalArrowPositions: "split", horizontalArrowPositions: "split", enableKeyboardNavigation: !0, hideFocus: !1, keyboardSpeed: 0, initialDelay: 300, speed: 30, scrollPagePercent: .8}
  })(e, this)
}), define("jquery.colorbox", ["../jslib/jquery"], function (e) {
  (function (e, t, n) {
    function r(n, r, i) {
      var s = t.createElement(n);
      return r && (s.id = p + r), i && (s.style.cssText = i), e(s)
    }

    function i(e) {
      var t = _.length, n = (Q + e) % t;
      return n < 0 ? t + n : n
    }

    function s(e, t) {return Math.round((/%/.test(e) ? (t === "x" ? D.width() : D.height()) / 100 : 1) * parseInt(e, 10))}

    function o(e) {return W.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(e)}

    function u() {
      var t;
      W = e.extend({}, e.data(K, h));
      for (t in W)e.isFunction(W[t]) && t.slice(0, 2) !== "on" && (W[t] = W[t].call(K));
      W.rel = W.rel || K.rel || "nofollow", W.href = W.href || e(K).attr("href"), W.title = W.title || K.title, typeof W.href == "string" && (W.href = e.trim(W.href))
    }

    function a(t, n) {e.event.trigger(t), n && n.call(K)}

    function f() {
      var e, t = p + "Slideshow_", n = "click." + p, r, i, s;
      W.slideshow && _[1] ? (r = function () {I.text(W.slideshowStop).unbind(n).bind(g, function () {if (Q < _.length - 1 || W.loop)e = setTimeout(nt.next, W.slideshowSpeed)}).bind(m, function () {clearTimeout(e)}).one(n + " " + y, i), N.removeClass(t + "off").addClass(t + "on"), e = setTimeout(nt.next, W.slideshowSpeed)}, i = function () {clearTimeout(e), I.text(W.slideshowStart).unbind([g, m, y, n].join(" ")).one(n, function () {nt.next(), r()}), N.removeClass(t + "on").addClass(t + "off")}, W.slideshowAuto ? r() : i()) : N.removeClass(t + "off " + t + "on")
    }

    function l(t) {
      if (!et) {
        K = t, u(), _ = e(K), Q = 0, W.rel !== "nofollow" && (_ = e("." + d).filter(function () {
          var t = e.data(this, h).rel || this.rel;
          return t === W.rel
        }), Q = _.index(K), Q === -1 && (_ = _.add(K), Q = _.length - 1));
        if (!Y) {
          Y = Z = !0, N.show();
          if (W.returnFocus)try {K.blur(), e(K).one(b, function () {try {this.focus()} catch (e) {}})} catch (n) {}
          T.css({opacity: +W.opacity, cursor: W.overlayClose ? "pointer" : "auto"}).show(), W.w = s(W.initialWidth, "x"), W.h = s(W.initialHeight, "y"), nt.position(), S && D.bind("resize." + x + " scroll." + x, function () {T.css({width: D.width(), height: D.height(), top: D.scrollTop(), left: D.scrollLeft()})}).trigger("resize." + x), a(v, W.onOpen), z.add(j).hide(), U.html(W.close).show()
        }
        nt.load(!0)
      }
    }

    var c = {transition: "elastic", speed: 300, width: !1, initialWidth: "600", innerWidth: !1, maxWidth: !1, height: !1, initialHeight: "450", innerHeight: !1, maxHeight: !1, scalePhotos: !0, scrolling: !0, inline: !1, html: !1, iframe: !1, fastIframe: !0, photo: !1, href: !1, title: !1, rel: !1, opacity: .9, preloading: !0, current: "image {current} of {total}", previous: "previous", next: "next", close: "close", open: !1, returnFocus: !0, loop: !0, slideshow: !1, slideshowAuto: !0, slideshowSpeed: 2500, slideshowStart: "start slideshow", slideshowStop: "stop slideshow", onOpen: !1, onLoad: !1, onComplete: !1, onCleanup: !1, onClosed: !1, overlayClose: !0, escKey: !0, arrowKey: !0, top: !1, bottom: !1, left: !1, right: !1, fixed: !1, data: undefined}, h = "colorbox", p = "cbox", d = p + "Element", v = p + "_open", m = p + "_load", g = p + "_complete", y = p + "_cleanup", b = p + "_closed", w = p + "_purge", E = e.browser.msie && !e.support.opacity, S = E && e.browser.version < 7, x = p + "_IE6", T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt = "div";
    nt = e.fn[h] = e[h] = function (t, n) {
      var r = this;
      t = t || {}, nt.init();
      if (!r[0]) {
        if (r.selector)return r;
        r = e("<a/>"), t.open = !0
      }
      return n && (t.onComplete = n), r.each(function () {e.data(this, h, e.extend({}, e.data(this, h) || c, t)), e(this).addClass(d)}), (e.isFunction(t.open) && t.open.call(r) || t.open) && l(r[0]), r
    }, nt.init = function () {
      if (!N) {
        if (!e("body")[0]) {
          e(nt.init);
          return
        }
        D = e(n), N = r(rt).attr({id: h, "class": E ? p + (S ? "IE6" : "IE") : ""}), T = r(rt, "Overlay", S ? "position:absolute" : "").hide(), C = r(rt, "Wrapper"), k = r(rt, "Content").append(P = r(rt, "LoadedContent", "width:0; height:0; overflow:hidden"), B = r(rt, "LoadingOverlay").add(r(rt, "LoadingGraphic")), j = r(rt, "Title"), F = r(rt, "Current"), q = r(rt, "Next"), R = r(rt, "Previous"), I = r(rt, "Slideshow").bind(v, f), U = r(rt, "Close")), C.append(r(rt).append(r(rt, "TopLeft"), L = r(rt, "TopCenter"), r(rt, "TopRight")), r(rt, !1, "clear:left").append(A = r(rt, "MiddleLeft"), k, O = r(rt, "MiddleRight")), r(rt, !1, "clear:left").append(r(rt, "BottomLeft"), M = r(rt, "BottomCenter"), r(rt, "BottomRight"))).find("div div").css({"float": "left"}), H = r(rt, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), e("body").prepend(T, N.append(C, H)), X = L.height() + M.height() + k.outerHeight(!0) - k.height(), V = A.width() + O.width() + k.outerWidth(!0) - k.width(), $ = P.outerHeight(!0), J = P.outerWidth(!0), N.css({"padding-bottom": X, "padding-right": V}).hide(), q.click(function () {nt.next()}), R.click(function () {nt.prev()}), U.click(function () {nt.close()}), z = q.add(R).add(F).add(I), T.click(function () {W.overlayClose && nt.close()}), e(t).bind("keydown." + p, function (e) {
          var t = e.keyCode;
          Y && W.escKey && t === 27 && (e.preventDefault(), nt.close()), Y && W.arrowKey && _[1] && (t === 37 ? (e.preventDefault(), R.click()) : t === 39 && (e.preventDefault(), q.click()))
        })
      }
    }, nt.remove = function () {N.add(T).remove(), N = null, e("." + d).removeData(h).removeClass(d)}, nt.position = function (e, t) {
      function n(e) {L[0].style.width = M[0].style.width = k[0].style.width = e.style.width, B[0].style.height = B[1].style.height = k[0].style.height = A[0].style.height = O[0].style.height = e.style.height}

      var r = 0, i = 0, o = N.offset();
      D.unbind("resize." + p), N.css({top: -99999, left: -99999}), W.fixed && !S ? N.css({position: "fixed"}) : (r = D.scrollTop(), i = D.scrollLeft(), N.css({position: "absolute"})), W.right !== !1 ? i += Math.max(D.width() - W.w - J - V - s(W.right, "x"), 0) : W.left !== !1 ? i += s(W.left, "x") : i += Math.round(Math.max(D.width() - W.w - J - V, 0) / 2), W.bottom !== !1 ? r += Math.max(D.height() - W.h - $ - X - s(W.bottom, "y"), 0) : W.top !== !1 ? r += s(W.top, "y") : r += Math.round(Math.max(D.height() - W.h - $ - X, 0) / 2), N.css({top: o.top, left: o.left}), e = N.width() === W.w + J && N.height() === W.h + $ ? 0 : e || 0, C[0].style.width = C[0].style.height = "9999px", N.dequeue().animate({width: W.w + J, height: W.h + $, top: r, left: i}, {duration: e, complete: function () {n(this), Z = !1, C[0].style.width = W.w + J + V + "px", C[0].style.height = W.h + $ + X + "px", t && t(), setTimeout(function () {D.bind("resize." + p, nt.position)}, 1)}, step: function () {n(this)}})
    }, nt.resize = function (e) {Y && (e = e || {}, e.width && (W.w = s(e.width, "x") - J - V), e.innerWidth && (W.w = s(e.innerWidth, "x")), P.css({width: W.w}), e.height && (W.h = s(e.height, "y") - $ - X), e.innerHeight && (W.h = s(e.innerHeight, "y")), !e.innerHeight && !e.height && (P.css({height: "auto"}), W.h = P.height()), P.css({height: W.h}), nt.position(W.transition === "none" ? 0 : W.speed))}, nt.prep = function (t) {
      function n() {return W.w = W.w || P.width(), W.w = W.mw && W.mw < W.w ? W.mw : W.w, W.w}

      function s() {return W.h = W.h || P.height(), W.h = W.mh && W.mh < W.h ? W.mh : W.h, W.h}

      if (!Y)return;
      var u, f = W.transition === "none" ? 0 : W.speed;
      P.remove(), P = r(rt, "LoadedContent").append(t), P.hide().appendTo(H.show()).css({width: n(), overflow: W.scrolling ? "auto" : "hidden"}).css({height: s()}).prependTo(k), H.hide(), e(G).css({"float": "none"}), S && e("select").not(N.find("select")).filter(function () {return this.style.visibility !== "hidden"}).css({visibility: "hidden"}).one(y, function () {this.style.visibility = "inherit"}), u = function () {
        function t() {E && N[0].style.removeAttribute("filter")}

        var n, s, u = _.length, l, c = "frameBorder", d = "allowTransparency", v, m, y;
        if (!Y)return;
        v = function () {clearTimeout(tt), B.hide(), a(g, W.onComplete)}, E && G && P.fadeIn(100), j.html(W.title).add(P).show();
        if (u > 1) {
          typeof W.current == "string" && F.html(W.current.replace("{current}", Q + 1).replace("{total}", u)).show(), q[W.loop || Q < u - 1 ? "show" : "hide"]().html(W.next), R[W.loop || Q ? "show" : "hide"]().html(W.previous), W.slideshow && I.show();
          if (W.preloading) {
            n = [i(-1), i(1)];
            while (s = _[n.pop()])m = e.data(s, h).href || s.href, e.isFunction(m) && (m = m.call(s)), o(m) && (y = new Image, y.src = m)
          }
        } else z.hide();
        W.iframe ? (l = r("iframe")[0], c in l && (l[c] = 0), d in l && (l[d] = "true"), l.name = p + +(new Date), W.fastIframe ? v() : e(l).one("load", v), l.src = W.href, W.scrolling || (l.scrolling = "no"), e(l).addClass(p + "Iframe").appendTo(P).one(w, function () {l.src = "//about:blank"})) : v(), W.transition === "fade" ? N.fadeTo(f, 1, t) : t()
      }, W.transition === "fade" ? N.fadeTo(f, 0, function () {nt.position(0, u)}) : nt.position(f, u)
    }, nt.load = function (t) {
      var n, i, f = nt.prep;
      Z = !0, G = !1, K = _[Q], t || u(), a(w), a(m, W.onLoad), W.h = W.height ? s(W.height, "y") - $ - X : W.innerHeight && s(W.innerHeight, "y"), W.w = W.width ? s(W.width, "x") - J - V : W.innerWidth && s(W.innerWidth, "x"), W.mw = W.w, W.mh = W.h, W.maxWidth && (W.mw = s(W.maxWidth, "x") - J - V, W.mw = W.w && W.w < W.mw ? W.w : W.mw), W.maxHeight && (W.mh = s(W.maxHeight, "y") - $ - X, W.mh = W.h && W.h < W.mh ? W.h : W.mh), n = W.href, tt = setTimeout(function () {B.show()}, 100), W.inline ? (r(rt).hide().insertBefore(e(n)[0]).one(w, function () {e(this).replaceWith(P.children())}), f(e(n))) : W.iframe ? f(" ") : W.html ? f(W.html) : o(n) ? (e(G = new Image).addClass(p + "Photo").error(function () {W.title = !1, f(r(rt, "Error").text("This image could not be loaded"))}).load(function () {
        var e;
        G.onload = null, W.scalePhotos && (i = function () {G.height -= G.height * e, G.width -= G.width * e}, W.mw && G.width > W.mw && (e = (G.width - W.mw) / G.width, i()), W.mh && G.height > W.mh && (e = (G.height - W.mh) / G.height, i())), W.h && (G.style.marginTop = Math.max(W.h - G.height, 0) / 2 + "px"), _[1] && (Q < _.length - 1 || W.loop) && (G.style.cursor = "pointer", G.onclick = function () {nt.next()}), E && (G.style.msInterpolationMode = "bicubic"), setTimeout(function () {f(G)}, 1)
      }), setTimeout(function () {G.src = n}, 1)) : n && H.load(n, W.data, function (t, n, i) {f(n === "error" ? r(rt, "Error").text("Request unsuccessful: " + i.statusText) : e(this).contents())})
    }, nt.next = function () {!Z && _[1] && (Q < _.length - 1 || W.loop) && (Q = i(1), nt.load())}, nt.prev = function () {!Z && _[1] && (Q || W.loop) && (Q = i(-1), nt.load())}, nt.close = function () {Y && !et && (et = !0, Y = !1, a(y, W.onCleanup), D.unbind("." + p + " ." + x), T.fadeTo(200, 0), N.stop().fadeTo(300, 0, function () {N.add(T).css({opacity: 1, cursor: "auto"}).hide(), a(w), P.remove(), setTimeout(function () {et = !1, a(b, W.onClosed)}, 1)}))}, nt.element = function () {return e(K)}, nt.settings = c, e("." + d, t).live("click", function (e) {e.which > 1 || e.shiftKey || e.altKey || e.metaKey || (e.preventDefault(), l(this))}), nt.init()
  })(e, document, this)
}), define("jquery.tabify", ["../jslib/jquery"], function (e) {
  (function (e) {
    e.fn.extend({tabify: function (t) {
      function n(t) {return hash = e(t).find("a").attr("href"), hash = hash.substring(0, hash.length - 4)}

      function r(t) {e(t).addClass("active"), e(n(t)).show(), e(t).siblings("li").each(function () {e(this).removeClass("active"), e(n(this)).hide()})}

      return this.each(function () {
        function i() {location.hash && e(s).find("a[href=" + location.hash + "]").length > 0 && r(e(s).find("a[href=" + location.hash + "]").parent())}

        var s = this, o = {ul: e(s)};
        e(this).find("li a").each(function () {e(this).attr("href", e(this).attr("href") + "-tab")}), location.hash && i(), setInterval(i, 100), e(this).find("li").each(function () {e(this).hasClass("active") ? e(n(this)).show() : e(n(this)).hide()}), t && t(o)
      })
    }})
  })(e)
}), define("jquery.ui", ["../jslib/jquery"], function (e) {
  (function (e, t) {
    function n(t, n) {
      var i, s, o, u = t.nodeName.toLowerCase();
      return"area" === u ? (i = t.parentNode, s = i.name, t.href && s && "map" === i.nodeName.toLowerCase() ? (o = e("img[usemap=#" + s + "]")[0], !!o && r(o)) : !1) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t)
    }

    function r(t) {return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {return"hidden" === e.css(this, "visibility")}).length}

    var i = 0, s = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({focus: function (t) {
      return function (n, r) {
        return"number" == typeof n ? this.each(function () {
          var t = this;
          setTimeout(function () {e(t).focus(), r && r.call(t)}, n)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus), scrollParent: function () {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))}).eq(0) : this.parents().filter(function () {return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    }, zIndex: function (n) {
      if (n !== t)return this.css("zIndex", n);
      if (this.length)for (var r, i, s = e(this[0]); s.length && s[0] !== document;) {
        if (r = s.css("position"), ("absolute" === r || "relative" === r || "fixed" === r) && (i = parseInt(s.css("zIndex"), 10), !isNaN(i) && 0 !== i))return i;
        s = s.parent()
      }
      return 0
    }, uniqueId: function () {return this.each(function () {this.id || (this.id = "ui-id-" + ++i)})}, removeUniqueId: function () {return this.each(function () {s.test(this.id) && e(this).removeAttr("id")})}}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {return function (n) {return!!e.data(n, t)}}) : function (t, n, r) {return!!e.data(t, r[3])}, focusable: function (t) {return n(t, !isNaN(e.attr(t, "tabindex")))}, tabbable: function (t) {
      var r = e.attr(t, "tabindex"), i = isNaN(r);
      return(i || r >= 0) && n(t, !i)
    }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) {
      function i(t, n, r, i) {return e.each(s, function () {n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), i && (n -= parseFloat(e.css(t, "margin" + this)) || 0)}), n}

      var s = "Width" === r ? ["Left", "Right"] : ["Top", "Bottom"], o = r.toLowerCase(), u = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
      e.fn["inner" + r] = function (n) {return n === t ? u["inner" + r].call(this) : this.each(function () {e(this).css(o, i(this, n) + "px")})}, e.fn["outer" + r] = function (t, n) {return"number" != typeof t ? u["outer" + r].call(this, t) : this.each(function () {e(this).css(o, i(this, t, !0, n) + "px")})}
    }), e.fn.addBack || (e.fn.addBack = function (e) {return this.add(null == e ? this.prevObject : this.prevObject.filter(e))}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {return function (n) {return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)}}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({disableSelection: function () {return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {e.preventDefault()})}, enableSelection: function () {return this.unbind(".ui-disableSelection")}}), e.extend(e.ui, {plugin: {add: function (t, n, r) {
      var i, s = e.ui[t].prototype;
      for (i in r)s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
    }, call: function (e, t, n) {
      var r, i = e.plugins[t];
      if (i && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (r = 0; i.length > r; r++)e.options[i[r][0]] && i[r][1].apply(e.element, n)
    }}, hasScroll: function (t, n) {
      if ("hidden" === e(t).css("overflow"))return!1;
      var r = n && "left" === n ? "scrollLeft" : "scrollTop", i = !1;
      return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
    }})
  })(jQuery), function (e, t) {
    var n = 0, r = Array.prototype.slice, i = e.cleanData;
    e.cleanData = function (t) {
      for (var n, r = 0; null != (n = t[r]); r++)try {e(n).triggerHandler("remove")} catch (s) {}
      i(t)
    }, e.widget = function (n, r, i) {
      var s, o, u, a, f = {}, l = n.split(".")[0];
      n = n.split(".")[1], s = l + "-" + n, i || (i = r, r = e.Widget), e.expr[":"][s.toLowerCase()] = function (t) {return!!e.data(t, s)}, e[l] = e[l] || {}, o = e[l][n], u = e[l][n] = function (e, n) {return this._createWidget ? (arguments.length && this._createWidget(e, n), t) : new u(e, n)}, e.extend(u, o, {version: i.version, _proto: e.extend({}, i), _childConstructors: []}), a = new r, a.options = e.widget.extend({}, a.options), e.each(i, function (n, i) {
        return e.isFunction(i) ? (f[n] = function () {
          var e = function () {return r.prototype[n].apply(this, arguments)}, t = function (e) {return r.prototype[n].apply(this, e)};
          return function () {
            var n, r = this._super, s = this._superApply;
            return this._super = e, this._superApply = t, n = i.apply(this, arguments), this._super = r, this._superApply = s, n
          }
        }(), t) : (f[n] = i, t)
      }), u.prototype = e.widget.extend(a, {widgetEventPrefix: o ? a.widgetEventPrefix : n}, f, {constructor: u, namespace: l, widgetName: n, widgetFullName: s}), o ? (e.each(o._childConstructors, function (t, n) {
        var r = n.prototype;
        e.widget(r.namespace + "." + r.widgetName, u, n._proto)
      }), delete o._childConstructors) : r._childConstructors.push(u), e.widget.bridge(n, u)
    }, e.widget.extend = function (n) {
      for (var i, o, u = r.call(arguments, 1), a = 0, f = u.length; f > a; a++)for (i in u[a])o = u[a][i], u[a].hasOwnProperty(i) && o !== t && (n[i] = e.isPlainObject(o) ? e.isPlainObject(n[i]) ? e.widget.extend({}, n[i], o) : e.widget.extend({}, o) : o);
      return n
    }, e.widget.bridge = function (n, i) {
      var o = i.prototype.widgetFullName || n;
      e.fn[n] = function (u) {
        var f = "string" == typeof u, l = r.call(arguments, 1), c = this;
        return u = !f && l.length ? e.widget.extend.apply(null, [u].concat(l)) : u, f ? this.each(function () {
          var r, i = e.data(this, o);
          return i ? e.isFunction(i[u]) && "_" !== u.charAt(0) ? (r = i[u].apply(i, l), r !== i && r !== t ? (c = r && r.jquery ? c.pushStack(r.get()) : r, !1) : t) : e.error("no such method '" + u + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + u + "'")
        }) : this.each(function () {
          var t = e.data(this, o);
          t ? t.option(u || {})._init() : e.data(this, o, new i(u, this))
        }), c
      }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (t, r) {r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {remove: function (e) {e.target === r && this.destroy()}}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()}, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () {this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")}, _destroy: e.noop, widget: function () {return this.element}, option: function (n, r) {
      var i, s, o, u = n;
      if (0 === arguments.length)return e.widget.extend({}, this.options);
      if ("string" == typeof n)if (u = {}, i = n.split("."), n = i.shift(), i.length) {
        for (s = u[n] = e.widget.extend({}, this.options[n]), o = 0; i.length - 1 > o; o++)s[i[o]] = s[i[o]] || {}, s = s[i[o]];
        if (n = i.pop(), r === t)return s[n] === t ? null : s[n];
        s[n] = r
      } else {
        if (r === t)return this.options[n] === t ? null : this.options[n];
        u[n] = r
      }
      return this._setOptions(u), this
    }, _setOptions: function (e) {
      var t;
      for (t in e)this._setOption(t, e[t]);
      return this
    }, _setOption: function (e, t) {return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this}, enable: function () {return this._setOption("disabled", !1)}, disable: function () {return this._setOption("disabled", !0)}, _on: function (n, r, i) {
      var s, o = this;
      "boolean" != typeof n && (i = r, r = n, n = !1), i ? (r = s = e(r), this.bindings = this.bindings.add(r)) : (i = r, r = this.element, s = this.widget()), e.each(i, function (i, u) {
        function a() {return n || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof u ? o[u] : u).apply(o, arguments) : t}

        "string" != typeof u && (a.guid = u.guid = u.guid || a.guid || e.guid++);
        var f = i.match(/^(\w+)\s*(.*)$/), l = f[1] + o.eventNamespace, c = f[2];
        c ? s.delegate(c, l, a) : r.bind(l, a)
      })
    }, _off: function (e, t) {t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)}, _delay: function (e, t) {
      function n() {return("string" == typeof e ? r[e] : e).apply(r, arguments)}

      var r = this;
      return setTimeout(n, t || 0)
    }, _hoverable: function (t) {this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function (t) {e(t.currentTarget).addClass("ui-state-hover")}, mouseleave: function (t) {e(t.currentTarget).removeClass("ui-state-hover")}})}, _focusable: function (t) {this.focusable = this.focusable.add(t), this._on(t, {focusin: function (t) {e(t.currentTarget).addClass("ui-state-focus")}, focusout: function (t) {e(t.currentTarget).removeClass("ui-state-focus")}})}, _trigger: function (t, n, r) {
      var i, s, o = this.options[t];
      if (r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent)for (i in s)i in n || (n[i] = s[i]);
      return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
    }}, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, n) {
      e.Widget.prototype["_" + t] = function (r, i, s) {
        "string" == typeof i && (i = {effect: i});
        var o, u = i ? i === !0 || "number" == typeof i ? n : i.effect || n : t;
        i = i || {}, "number" == typeof i && (i = {duration: i}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) {e(this)[t](), s && s.call(r[0]), n()})
      }
    })
  }(jQuery), function (e) {
    var t = !1;
    e(document).mouseup(function () {t = !1}), e.widget("ui.mouse", {version: "1.10.3", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function (e) {return t._mouseDown(e)}).bind("click." + this.widgetName, function (n) {return!0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : undefined}), this.started = !1
    }, _mouseDestroy: function () {this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)}, _mouseDown: function (n) {
      if (!t) {
        this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
        var r = this, i = 1 === n.which, s = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
        return i && !s && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {r.mouseDelayMet = !0}, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {return r._mouseMove(e)}, this._mouseUpDelegate = function (e) {return r._mouseUp(e)}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
      }
    }, _mouseMove: function (t) {return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)}, _mouseUp: function (t) {return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1}, _mouseDistanceMet: function (e) {return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance}, _mouseDelayMet: function () {return this.mouseDelayMet}, _mouseStart: function () {}, _mouseDrag: function () {}, _mouseStop: function () {}, _mouseCapture: function () {return!0}})
  }(jQuery), function (e, t) {
    function n(e, t, n) {return[parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? n / 100 : 1)]}

    function r(t, n) {return parseInt(e.css(t, n), 10) || 0}

    function i(t) {
      var n = t[0];
      return 9 === n.nodeType ? {width: t.width(), height: t.height(), offset: {top: 0, left: 0}} : e.isWindow(n) ? {width: t.width(), height: t.height(), offset: {top: t.scrollTop(), left: t.scrollLeft()}} : n.preventDefault ? {width: 0, height: 0, offset: {top: n.pageY, left: n.pageX}} : {width: t.outerWidth(), height: t.outerHeight(), offset: t.offset()}
    }

    e.ui = e.ui || {};
    var s, o = Math.max, u = Math.abs, a = Math.round, f = /left|center|right/, l = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, p = /%$/, d = e.fn.position;
    e.position = {scrollbarWidth: function () {
      if (s !== t)return s;
      var n, r, i = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = i.children()[0];
      return e("body").append(i), n = o.offsetWidth, i.css("overflow", "scroll"), r = o.offsetWidth, n === r && (r = i[0].clientWidth), i.remove(), s = n - r
    }, getScrollInfo: function (t) {
      var n = t.isWindow ? "" : t.element.css("overflow-x"), r = t.isWindow ? "" : t.element.css("overflow-y"), i = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth, s = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
      return{width: s ? e.position.scrollbarWidth() : 0, height: i ? e.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (t) {
      var n = e(t || window), r = e.isWindow(n[0]);
      return{element: n, isWindow: r, offset: n.offset() || {left: 0, top: 0}, scrollLeft: n.scrollLeft(), scrollTop: n.scrollTop(), width: r ? n.width() : n.outerWidth(), height: r ? n.height() : n.outerHeight()}
    }}, e.fn.position = function (t) {
      if (!t || !t.of)return d.apply(this, arguments);
      t = e.extend({}, t);
      var s, p, v, m, g, y, b = e(t.of), w = e.position.getWithinInfo(t.within), E = e.position.getScrollInfo(w), S = (t.collision || "flip").split(" "), x = {};
      return y = i(b), b[0].preventDefault && (t.at = "left top"), p = y.width, v = y.height, m = y.offset, g = e.extend({}, m), e.each(["my", "at"], function () {
        var e, n, r = (t[this] || "").split(" ");
        1 === r.length && (r = f.test(r[0]) ? r.concat(["center"]) : l.test(r[0]) ? ["center"].concat(r) : ["center", "center"]), r[0] = f.test(r[0]) ? r[0] : "center", r[1] = l.test(r[1]) ? r[1] : "center", e = c.exec(r[0]), n = c.exec(r[1]), x[this] = [e ? e[0] : 0, n ? n[0] : 0], t[this] = [h.exec(r[0])[0], h.exec(r[1])[0]]
      }), 1 === S.length && (S[1] = S[0]), "right" === t.at[0] ? g.left += p : "center" === t.at[0] && (g.left += p / 2), "bottom" === t.at[1] ? g.top += v : "center" === t.at[1] && (g.top += v / 2), s = n(x.at, p, v), g.left += s[0], g.top += s[1], this.each(function () {
        var i, f, l = e(this), c = l.outerWidth(), h = l.outerHeight(), d = r(this, "marginLeft"), y = r(this, "marginTop"), T = c + d + r(this, "marginRight") + E.width, N = h + y + r(this, "marginBottom") + E.height, C = e.extend({}, g), L = n(x.my, l.outerWidth(), l.outerHeight());
        "right" === t.my[0] ? C.left -= c : "center" === t.my[0] && (C.left -= c / 2), "bottom" === t.my[1] ? C.top -= h : "center" === t.my[1] && (C.top -= h / 2), C.left += L[0], C.top += L[1], e.support.offsetFractions || (C.left = a(C.left), C.top = a(C.top)), i = {marginLeft: d, marginTop: y}, e.each(["left", "top"], function (n, r) {e.ui.position[S[n]] && e.ui.position[S[n]][r](C, {targetWidth: p, targetHeight: v, elemWidth: c, elemHeight: h, collisionPosition: i, collisionWidth: T, collisionHeight: N, offset: [s[0] + L[0], s[1] + L[1]], my: t.my, at: t.at, within: w, elem: l})}), t.using && (f = function (e) {
          var n = m.left - C.left, r = n + p - c, i = m.top - C.top, s = i + v - h, a = {target: {element: b, left: m.left, top: m.top, width: p, height: v}, element: {element: l, left: C.left, top: C.top, width: c, height: h}, horizontal: 0 > r ? "left" : n > 0 ? "right" : "center", vertical: 0 > s ? "top" : i > 0 ? "bottom" : "middle"};
          c > p && p > u(n + r) && (a.horizontal = "center"), h > v && v > u(i + s) && (a.vertical = "middle"), a.important = o(u(n), u(r)) > o(u(i), u(s)) ? "horizontal" : "vertical", t.using.call(this, e, a)
        }), l.offset(e.extend(C, {using: f}))
      })
    }, e.ui.position = {fit: {left: function (e, t) {
      var n, r = t.within, i = r.isWindow ? r.scrollLeft : r.offset.left, s = r.width, u = e.left - t.collisionPosition.marginLeft, a = i - u, f = u + t.collisionWidth - s - i;
      t.collisionWidth > s ? a > 0 && 0 >= f ? (n = e.left + a + t.collisionWidth - s - i, e.left += a - n) : e.left = f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionWidth : i : a > 0 ? e.left += a : f > 0 ? e.left -= f : e.left = o(e.left - u, e.left)
    }, top: function (e, t) {
      var n, r = t.within, i = r.isWindow ? r.scrollTop : r.offset.top, s = t.within.height, u = e.top - t.collisionPosition.marginTop, a = i - u, f = u + t.collisionHeight - s - i;
      t.collisionHeight > s ? a > 0 && 0 >= f ? (n = e.top + a + t.collisionHeight - s - i, e.top += a - n) : e.top = f > 0 && 0 >= a ? i : a > f ? i + s - t.collisionHeight : i : a > 0 ? e.top += a : f > 0 ? e.top -= f : e.top = o(e.top - u, e.top)
    }}, flip: {left: function (e, t) {
      var n, r, i = t.within, s = i.offset.left + i.scrollLeft, o = i.width, a = i.isWindow ? i.scrollLeft : i.offset.left, f = e.left - t.collisionPosition.marginLeft, l = f - a, c = f + t.collisionWidth - o - a, h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, d = -2 * t.offset[0];
      0 > l ? (n = e.left + h + p + d + t.collisionWidth - o - s, (0 > n || u(l) > n) && (e.left += h + p + d)) : c > 0 && (r = e.left - t.collisionPosition.marginLeft + h + p + d - a, (r > 0 || c > u(r)) && (e.left += h + p + d))
    }, top: function (e, t) {
      var n, r, i = t.within, s = i.offset.top + i.scrollTop, o = i.height, a = i.isWindow ? i.scrollTop : i.offset.top, f = e.top - t.collisionPosition.marginTop, l = f - a, c = f + t.collisionHeight - o - a, h = "top" === t.my[1], p = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, d = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, v = -2 * t.offset[1];
      0 > l ? (r = e.top + p + d + v + t.collisionHeight - o - s, e.top + p + d + v > l && (0 > r || u(l) > r) && (e.top += p + d + v)) : c > 0 && (n = e.top - t.collisionPosition.marginTop + p + d + v - a, e.top + p + d + v > c && (n > 0 || c > u(n)) && (e.top += p + d + v))
    }}, flipfit: {left: function () {e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)}, top: function () {e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)}}}, function () {
      var t, n, r, i, s, o = document.getElementsByTagName("body")[0], u = document.createElement("div");
      t = document.createElement(o ? "div" : "body"), r = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, o && e.extend(r, {position: "absolute", left: "-1000px", top: "-1000px"});
      for (s in r)t.style[s] = r[s];
      t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && 11 > i, t.innerHTML = "", n.removeChild(t)
    }()
  }(jQuery), function (e, t) {
    function n() {this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1}, e.extend(this._defaults, this.regional[""]), this.dpDiv = r(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}

    function r(t) {
      var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return t.delegate(n, "mouseout", function () {e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")}).delegate(n, "mouseover", function () {e.datepicker._isDisabledDatepicker(s.inline ? t.parent()[0] : s.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))})
    }

    function i(t, n) {
      e.extend(t, n);
      for (var r in n)null == n[r] && (t[r] = n[r]);
      return t
    }

    e.extend(e.ui, {datepicker: {version: "1.10.3"}});
    var s, o = "datepicker";
    e.extend(n.prototype, {markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {return this.dpDiv}, setDefaults: function (e) {return i(this._defaults, e || {}), this}, _attachDatepicker: function (t, n) {
      var r, i, s;
      r = t.nodeName.toLowerCase(), i = "div" === r || "span" === r, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), "input" === r ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
    }, _newInst: function (t, n) {
      var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return{id: i, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: n, dpDiv: n ? r(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv}
    }, _connectDatepicker: function (t, n) {
      var r = e(t);
      n.append = e([]), n.trigger = e([]), r.hasClass(this.markerClassName) || (this._attachments(r, n), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, o, n), n.settings.disabled && this._disableDatepicker(t))
    }, _attachments: function (t, n) {
      var r, i, s, o = this._get(n, "appendText"), u = this._get(n, "isRTL");
      n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), ("focus" === r || "both" === r) && t.focus(this._showDatepicker), ("button" === r || "both" === r) && (i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({src: s, alt: i, title: i}) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({src: s, alt: i, title: i}) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function () {return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1}))
    }, _autoSize: function (e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t, n, r, i, s = new Date(2009, 11, 20), o = this._get(e, "dateFormat");
        o.match(/[DM]/) && (t = function (e) {
          for (n = 0, r = 0, i = 0; e.length > i; i++)e[i].length > n && (n = e[i].length, r = i);
          return r
        }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
      }
    }, _inlineDatepicker: function (t, n) {
      var r = e(t);
      r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(n.dpDiv), e.data(t, o, n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
    }, _dialogDatepicker: function (t, n, r, s, u) {
      var a, f, l, c, h, p = this._dialogInst;
      return p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], o, p)), i(p.settings, s || {}), n = n && n.constructor === Date ? this._formatDate(p, n) : n, this._dialogInput.val(n), this._pos = u ? u.length ? u : [u.pageX, u.pageY] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], o, p), this
    }, _destroyDatepicker: function (t) {
      var n, r = e(t), i = e.data(t, o);
      r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, o), "input" === n ? (i.append.remove(), i.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && r.removeClass(this.markerClassName).empty())
    }, _enableDatepicker: function (t) {
      var n, r, i = e(t), s = e.data(t, o);
      i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, s.trigger.filter("button").each(function () {this.disabled = !1}).end().filter("img").css({opacity: "1.0", cursor: ""})) : ("div" === n || "span" === n) && (r = i.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {return e === t ? null : e}))
    }, _disableDatepicker: function (t) {
      var n, r, i = e(t), s = e.data(t, o);
      i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, s.trigger.filter("button").each(function () {this.disabled = !0}).end().filter("img").css({opacity: "0.5", cursor: "default"})) : ("div" === n || "span" === n) && (r = i.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {return e === t ? null : e}), this._disabledInputs[this._disabledInputs.length] = t)
    }, _isDisabledDatepicker: function (e) {
      if (!e)return!1;
      for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] === e)return!0;
      return!1
    }, _getInst: function (t) {try {return e.data(t, o)} catch (n) {throw"Missing instance data for this datepicker"}}, _optionDatepicker: function (n, r, s) {
      var o, u, a, f, l = this._getInst(n);
      return 2 === arguments.length && "string" == typeof r ? "defaults" === r ? e.extend({}, e.datepicker._defaults) : l ? "all" === r ? e.extend({}, l.settings) : this._get(l, r) : null : (o = r || {}, "string" == typeof r && (o = {}, o[r] = s), l && (this._curInst === l && this._hideDatepicker(), u = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), i(l.settings, o), null !== a && o.dateFormat !== t && o.minDate === t && (l.settings.minDate = this._formatDate(l, a)), null !== f && o.dateFormat !== t && o.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled"in o && (o.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, u), this._updateAlternate(l), this._updateDatepicker(l)), t)
    }, _changeDatepicker: function (e, t, n) {this._optionDatepicker(e, t, n)}, _refreshDatepicker: function (e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t)
    }, _setDateDatepicker: function (e, t) {
      var n = this._getInst(e);
      n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
    }, _getDateDatepicker: function (e, t) {
      var n = this._getInst(e);
      return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
    }, _doKeyDown: function (t) {
      var n, r, i, s = e.datepicker._getInst(t.target), o = !0, u = s.dpDiv.is(".ui-datepicker-rtl");
      if (s._keyEvent = !0, e.datepicker._datepickerShowing)switch (t.keyCode) {
        case 9:
          e.datepicker._hideDatepicker(), o = !1;
          break;
        case 13:
          return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
        case 27:
          e.datepicker._hideDatepicker();
          break;
        case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
          break;
        case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
          break;
        case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
          break;
        case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
          break;
        default:
          o = !1
      } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
      o && (t.preventDefault(), t.stopPropagation())
    }, _doKeyPress: function (n) {
      var r, i, s = e.datepicker._getInst(n.target);
      return e.datepicker._get(s, "constrainInput") ? (r = e.datepicker._possibleChars(e.datepicker._get(s, "dateFormat")), i = String.fromCharCode(null == n.charCode ? n.keyCode : n.charCode), n.ctrlKey || n.metaKey || " " > i || !r || r.indexOf(i) > -1) : t
    }, _doKeyUp: function (t) {
      var n, r = e.datepicker._getInst(t.target);
      if (r.input.val() !== r.lastVal)try {n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))} catch (i) {}
      return!0
    }, _showDatepicker: function (t) {
      if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
        var n, r, s, o, u, a, f;
        n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), s = r ? r.apply(t, [t, n]) : {}, s !== !1 && (i(n.settings, s), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {return o |= "fixed" === e(this).css("position"), !o}), u = {left: e.datepicker._pos[0], top: e.datepicker._pos[1]}, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), e.datepicker._updateDatepicker(n), u = e.datepicker._checkOffset(n, u, o), n.dpDiv.css({position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: u.left + "px", top: u.top + "px"}), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n))
      }
    }, _updateDatepicker: function (t) {
      this.maxRows = 4, s = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var n, r = this._getNumberOfMonths(t), i = r[1], o = 17;
      t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", o * i + "em"), t.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function () {n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null}, 0))
    }, _shouldFocusInput: function (e) {return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")}, _checkOffset: function (t, n, r) {
      var i = t.dpDiv.outerWidth(), s = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, u = t.input ? t.input.outerHeight() : 0, a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()), f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
      return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
    }, _findPos: function (t) {
      for (var n, r = this._getInst(t), i = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[i ? "previousSibling" : "nextSibling"];
      return n = e(t).offset(), [n.left, n.top]
    }, _hideDatepicker: function (t) {
      var n, r, i, s, u = this._curInst;
      !u || t && u !== e.data(t, o) || this._datepickerShowing && (n = this._get(u, "showAnim"), r = this._get(u, "duration"), i = function () {e.datepicker._tidyDialog(u)}, e.effects && (e.effects.effect[n] || e.effects[n]) ? u.dpDiv.hide(n, e.datepicker._get(u, "showOptions"), r, i) : u.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1, s = this._get(u, "onClose"), s && s.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
    }, _tidyDialog: function (e) {e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")}, _checkExternalClick: function (t) {
      if (e.datepicker._curInst) {
        var n = e(t.target), r = e.datepicker._getInst(n[0]);
        (n[0].id !== e.datepicker._mainDivId && 0 === n.parents("#" + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
      }
    }, _adjustDate: function (t, n, r) {
      var i = e(t), s = this._getInst(i[0]);
      this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(s, n + ("M" === r ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s))
    }, _gotoToday: function (t) {
      var n, r = e(t), i = this._getInst(r[0]);
      this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
    }, _selectMonthYear: function (t, n, r) {
      var i = e(t), s = this._getInst(i[0]);
      s["selected" + ("M" === r ? "Month" : "Year")] = s["draw" + ("M" === r ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
    }, _selectDay: function (t, n, r, i) {
      var s, o = e(t);
      e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
    }, _clearDate: function (t) {
      var n = e(t);
      this._selectDate(n, "")
    }, _selectDate: function (t, n) {
      var r, i = e(t), s = this._getInst(i[0]);
      n = null != n ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
    }, _updateAlternate: function (t) {
      var n, r, i, s = this._get(t, "altField");
      s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function () {e(this).val(i)}))
    }, noWeekends: function (e) {
      var t = e.getDay();
      return[t > 0 && 6 > t, ""]
    }, iso8601Week: function (e) {
      var t, n = new Date(e.getTime());
      return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
    }, parseDate: function (n, r, i) {
      if (null == n || null == r)throw"Invalid arguments";
      if (r = "object" == typeof r ? "" + r : r + "", "" === r)return null;
      var s, o, u, a, f = 0, l = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, p = (i ? i.dayNames : null) || this._defaults.dayNames, d = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, v = (i ? i.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, y = -1, b = -1, w = !1, E = function (e) {
        var t = n.length > s + 1 && n.charAt(s + 1) === e;
        return t && s++, t
      }, S = function (e) {
        var t = E(e), n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, i = RegExp("^\\d{1," + n + "}"), s = r.substring(f).match(i);
        if (!s)throw"Missing number at position " + f;
        return f += s[0].length, parseInt(s[0], 10)
      }, x = function (n, i, s) {
        var o = -1, u = e.map(E(n) ? s : i, function (e, t) {
          return[
            [t, e]
          ]
        }).sort(function (e, t) {return-(e[1].length - t[1].length)});
        if (e.each(u, function (e, n) {
          var i = n[1];
          return r.substr(f, i.length).toLowerCase() === i.toLowerCase() ? (o = n[0], f += i.length, !1) : t
        }), -1 !== o)return o + 1;
        throw"Unknown name at position " + f
      }, T = function () {
        if (r.charAt(f) !== n.charAt(s))throw"Unexpected literal at position " + f;
        f++
      };
      for (s = 0; n.length > s; s++)if (w)"'" !== n.charAt(s) || E("'") ? T() : w = !1; else switch (n.charAt(s)) {
        case"d":
          y = S("d");
          break;
        case"D":
          x("D", h, p);
          break;
        case"o":
          b = S("o");
          break;
        case"m":
          g = S("m");
          break;
        case"M":
          g = x("M", d, v);
          break;
        case"y":
          m = S("y");
          break;
        case"@":
          a = new Date(S("@")), m = a.getFullYear(), g = a.getMonth() + 1, y = a.getDate();
          break;
        case"!":
          a = new Date((S("!") - this._ticksTo1970) / 1e4), m = a.getFullYear(), g = a.getMonth() + 1, y = a.getDate();
          break;
        case"'":
          E("'") ? T() : w = !0;
          break;
        default:
          T()
      }
      if (r.length > f && (u = r.substr(f), !/^\s+/.test(u)))throw"Extra/unparsed characters found in date: " + u;
      if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), b > -1)for (g = 1, y = b; ;) {
        if (o = this._getDaysInMonth(m, g - 1), o >= y)break;
        g++, y -= o
      }
      if (a = this._daylightSavingAdjust(new Date(m, g - 1, y)), a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== y)throw"Invalid date";
      return a
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (e, t, n) {
      if (!t)return"";
      var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, u = (n ? n.monthNames : null) || this._defaults.monthNames, a = function (t) {
        var n = e.length > r + 1 && e.charAt(r + 1) === t;
        return n && r++, n
      }, f = function (e, t, n) {
        var r = "" + t;
        if (a(e))for (; n > r.length;)r = "0" + r;
        return r
      }, l = function (e, t, n, r) {return a(e) ? r[t] : n[t]}, c = "", h = !1;
      if (t)for (r = 0; e.length > r; r++)if (h)"'" !== e.charAt(r) || a("'") ? c += e.charAt(r) : h = !1; else switch (e.charAt(r)) {
        case"d":
          c += f("d", t.getDate(), 2);
          break;
        case"D":
          c += l("D", t.getDay(), i, s);
          break;
        case"o":
          c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
          break;
        case"m":
          c += f("m", t.getMonth() + 1, 2);
          break;
        case"M":
          c += l("M", t.getMonth(), o, u);
          break;
        case"y":
          c += a("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
          break;
        case"@":
          c += t.getTime();
          break;
        case"!":
          c += 1e4 * t.getTime() + this._ticksTo1970;
          break;
        case"'":
          a("'") ? c += "'" : h = !0;
          break;
        default:
          c += e.charAt(r)
      }
      return c
    }, _possibleChars: function (e) {
      var t, n = "", r = !1, i = function (n) {
        var r = e.length > t + 1 && e.charAt(t + 1) === n;
        return r && t++, r
      };
      for (t = 0; e.length > t; t++)if (r)"'" !== e.charAt(t) || i("'") ? n += e.charAt(t) : r = !1; else switch (e.charAt(t)) {
        case"d":
        case"m":
        case"y":
        case"@":
          n += "0123456789";
          break;
        case"D":
        case"M":
          return null;
        case"'":
          i("'") ? n += "'" : r = !0;
          break;
        default:
          n += e.charAt(t)
      }
      return n
    }, _get: function (e, n) {return e.settings[n] !== t ? e.settings[n] : this._defaults[n]}, _setDateFromField: function (e, t) {
      if (e.input.val() !== e.lastVal) {
        var n = this._get(e, "dateFormat"), r = e.lastVal = e.input ? e.input.val() : null, i = this._getDefaultDate(e), s = i, o = this._getFormatConfig(e);
        try {s = this.parseDate(n, r, o) || i} catch (u) {r = t ? "" : r}
        e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
      }
    }, _getDefaultDate: function (e) {return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))}, _determineDate: function (t, n, r) {
      var i = function (e) {
        var t = new Date;
        return t.setDate(t.getDate() + e), t
      }, s = function (n) {
        try {return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))} catch (r) {}
        for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = i.getFullYear(), o = i.getMonth(), u = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, f = a.exec(n); f;) {
          switch (f[2] || "d") {
            case"d":
            case"D":
              u += parseInt(f[1], 10);
              break;
            case"w":
            case"W":
              u += 7 * parseInt(f[1], 10);
              break;
            case"m":
            case"M":
              o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
              break;
            case"y":
            case"Y":
              s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
          }
          f = a.exec(n)
        }
        return new Date(s, o, u)
      }, o = null == n || "" === n ? r : "string" == typeof n ? s(n) : "number" == typeof n ? isNaN(n) ? r : i(n) : new Date(n.getTime());
      return o = o && "Invalid Date" == "" + o ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
    }, _daylightSavingAdjust: function (e) {return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null}, _setDate: function (e, t, n) {
      var r = !t, i = e.selectedMonth, s = e.selectedYear, o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
      e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), i === e.selectedMonth && s === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
    }, _getDate: function (e) {
      var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return t
    }, _attachHandlers: function (t) {
      var n = this._get(t, "stepMonths"), r = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function () {
        var t = {prev: function () {e.datepicker._adjustDate(r, -n, "M")}, next: function () {e.datepicker._adjustDate(r, +n, "M")}, hide: function () {e.datepicker._hideDatepicker()}, today: function () {e.datepicker._gotoToday(r)}, selectDay: function () {return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1}, selectMonth: function () {return e.datepicker._selectMonthYear(r, this, "M"), !1}, selectYear: function () {return e.datepicker._selectMonthYear(r, this, "Y"), !1}};
        e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
      })
    }, _generateHTML: function (e) {
      var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date, R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())), U = this._get(e, "isRTL"), z = this._get(e, "showButtonPanel"), W = this._get(e, "hideIfNoPrevNext"), X = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e), $ = this._get(e, "showCurrentAtPos"), J = this._get(e, "stepMonths"), K = 1 !== V[0] || 1 !== V[1], Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), G = this._getMinMaxDate(e, "min"), Y = this._getMinMaxDate(e, "max"), Z = e.drawMonth - $, et = e.drawYear;
      if (0 > Z && (Z += 12, et--), Y)for (t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && G > t ? G : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)Z--, 0 > Z && (Z = 11, et--);
      for (e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", S = 0; V[0] > S; S++) {
        for (x = "", this.maxRows = 4, T = 0; V[1] > T; T++) {
          if (N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "", K) {
            if (k += "<div class='ui-datepicker-group", V[1] > 1)switch (T) {
              case 0:
                k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                break;
              case V[1] - 1:
                k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                break;
              default:
                k += " ui-datepicker-group-middle", C = ""
            }
            k += "'>"
          }
          for (k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === S ? U ? s : r : "") + (/all|right/.test(C) && 0 === S ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", E = 0; 7 > E; E++)A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
          for (k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)), H = 0; D > H; H++) {
            for (k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "", E = 0; 7 > E; E++)j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && G > P || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !g || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
            k += B + "</tr>"
          }
          Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
        }
        w += x
      }
      return w += f, e._keyEvent = !1, w
    }, _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
      var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"), g = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", w = "";
      if (s || !m)w += "<span class='ui-datepicker-month'>" + o[t] + "</span>"; else {
        for (a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; 12 > l; l++)(!a || l >= r.getMonth()) && (!f || i.getMonth() >= l) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
        w += "</select>"
      }
      if (y || (b += w + (!s && m && g ? "" : "&#xa0;")), !e.yearshtml)if (e.yearshtml = "", s || !g)b += "<span class='ui-datepicker-year'>" + n + "</span>"; else {
        for (c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function (e) {
          var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
          return isNaN(t) ? h : t
        }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; v >= d; d++)e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
      }
      return b += this._get(e, "yearSuffix"), y && (b += (!s && m && g ? "" : "&#xa0;") + w), b += "</div>"
    }, _adjustInstDate: function (e, t, n) {
      var r = e.drawYear + ("Y" === n ? t : 0), i = e.drawMonth + ("M" === n ? t : 0), s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + ("D" === n ? t : 0), o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
      e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(e)
    }, _restrictMinMax: function (e, t) {
      var n = this._getMinMaxDate(e, "min"), r = this._getMinMaxDate(e, "max"), i = n && n > t ? n : t;
      return r && i > r ? r : i
    }, _notifyChange: function (e) {
      var t = this._get(e, "onChangeMonthYear");
      t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    }, _getNumberOfMonths: function (e) {
      var t = this._get(e, "numberOfMonths");
      return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
    }, _getMinMaxDate: function (e, t) {return this._determineDate(e, this._get(e, t + "Date"), null)}, _getDaysInMonth: function (e, t) {return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()}, _getFirstDayOfMonth: function (e, t) {return(new Date(e, t, 1)).getDay()}, _canAdjustMonth: function (e, t, n, r) {
      var i = this._getNumberOfMonths(e), s = this._daylightSavingAdjust(new Date(n, r + (0 > t ? t : i[0] * i[1]), 1));
      return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
    }, _isInRange: function (e, t) {
      var n, r, i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), o = null, u = null, a = this._get(e, "yearRange");
      return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || u >= t.getFullYear())
    }, _getFormatConfig: function (e) {
      var t = this._get(e, "shortYearCutoff");
      return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames")}
    }, _formatDate: function (e, t, n, r) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
      var i = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
    }}), e.fn.datepicker = function (t) {
      if (!this.length)return this;
      e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
      var n = Array.prototype.slice.call(arguments, 1);
      return"string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function () {"string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)}) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3"
  }(jQuery)
}), define("jquery.jplayer", ["../jslib/jquery"], function (e) {
  (function (e) {
    function t(t, n, r) {
      function i(n) {
        var r = e[t][n] || [];
        return typeof r == "string" ? r.split(/,?\s+/) : r
      }

      var s = i("getter");
      return e.inArray(n, s) != -1
    }

    e.fn.jPlayer = function (n) {
      var r = "jPlayer", i = typeof n == "string", s = Array.prototype.slice.call(arguments, 1);
      if (i && n.substring(0, 1) == "_")return this;
      if (i && t(r, n, s)) {
        var o = e.data(this[0], r);
        return o ? o[n].apply(o, s) : undefined
      }
      return this.each(function () {
        var t = e.data(this, r);
        !t && !i && e.data(this, r, new e[r](this, n))._init(), t && i && e.isFunction(t[n]) && t[n].apply(t, s)
      })
    }, e.jPlayer = function (t, n) {this.options = e.extend({}, n), this.element = e(t)}, e.jPlayer.getter = "jPlayerOnProgressChange jPlayerOnSoundComplete jPlayerVolume jPlayerReady getData jPlayerController", e.jPlayer.defaults = {cssPrefix: "jqjp", swfPath: "js", volume: 80, oggSupport: !1, nativeSupport: !0, preload: "none", customCssIds: !1, graphicsFix: !0, errorAlerts: !1, warningAlerts: !1, position: "absolute", width: "0", height: "0", top: "0", left: "0", quality: "high", bgcolor: "#ffffff"}, e.jPlayer._config = {version: "1.2.0", swfVersionRequired: "1.2.0", swfVersion: "unknown", jPlayerControllerId: undefined, delayedCommandId: undefined, isWaitingForPlay: !1, isFileSet: !1}, e.jPlayer._diag = {isPlaying: !1, src: "", loadPercent: 0, playedPercentRelative: 0, playedPercentAbsolute: 0, playedTime: 0, totalTime: 0}, e.jPlayer._cssId = {play: "jplayer_play", pause: "jplayer_pause", stop: "jplayer_stop", loadBar: "jplayer_load_bar", playBar: "jplayer_play_bar", volumeMin: "jplayer_volume_min", volumeMax: "jplayer_volume_max", volumeBar: "jplayer_volume_bar", volumeBarValue: "jplayer_volume_bar_value"}, e.jPlayer.count = 0, e.jPlayer.timeFormat = {showHour: !1, showMin: !0, showSec: !0, padHour: !1, padMin: !0, padSec: !0, sepHour: ":", sepMin: ":", sepSec: ""}, e.jPlayer.convertTime = function (t) {
      var n = new Date(t), r = n.getUTCHours(), i = n.getUTCMinutes(), s = n.getUTCSeconds(), o = e.jPlayer.timeFormat.padHour && r < 10 ? "0" + r : r, u = e.jPlayer.timeFormat.padMin && i < 10 ? "0" + i : i, a = e.jPlayer.timeFormat.padSec && s < 10 ? "0" + s : s;
      return(e.jPlayer.timeFormat.showHour ? o + e.jPlayer.timeFormat.sepHour : "") + (e.jPlayer.timeFormat.showMin ? u + e.jPlayer.timeFormat.sepMin : "") + (e.jPlayer.timeFormat.showSec ? a + e.jPlayer.timeFormat.sepSec : "")
    }, e.jPlayer.prototype = {_init: function () {
      var t = this, n = this.element;
      this.config = e.extend({}, e.jPlayer.defaults, this.options, e.jPlayer._config), this.config.diag = e.extend({}, e.jPlayer._diag), this.config.cssId = {}, this.config.cssSelector = {}, this.config.cssDisplay = {}, this.config.clickHandler = {}, this.element.data("jPlayer.config", this.config), e.extend(this.config, {id: this.element.attr("id"), swf: this.config.swfPath + (this.config.swfPath != "" && this.config.swfPath.slice(-1) != "/" ? "/" : "") + "Jplayer.swf", fid: this.config.cssPrefix + "_flash_" + e.jPlayer.count, aid: this.config.cssPrefix + "_audio_" + e.jPlayer.count, hid: this.config.cssPrefix + "_force_" + e.jPlayer.count, i: e.jPlayer.count, volume: this._limitValue(this.config.volume, 0, 100), autobuffer: this.config.preload != "none"}), e.jPlayer.count++, this.config.ready != undefined && (e.isFunction(this.config.ready) ? this.jPlayerReadyCustom = this.config.ready : this._warning("Constructor's ready option is not a function.")), this.config.audio = document.createElement("audio"), this.config.audio.id = this.config.aid, e.extend(this.config, {canPlayMP3: this.config.audio.canPlayType ? "" != this.config.audio.canPlayType("audio/mpeg") && "no" != this.config.audio.canPlayType("audio/mpeg") : !1, canPlayOGG: this.config.audio.canPlayType ? "" != this.config.audio.canPlayType("audio/ogg") && "no" != this.config.audio.canPlayType("audio/ogg") : !1, aSel: e("#" + this.config.aid)}), e.extend(this.config, {html5: !!(this.config.oggSupport ? this.config.canPlayOGG ? !0 : this.config.canPlayMP3 : this.config.canPlayMP3)}), e.extend(this.config, {usingFlash: !this.config.html5 || !this.config.nativeSupport, usingMP3: !(this.config.oggSupport && this.config.canPlayOGG && this.config.nativeSupport)});
      var r = {setButtons: function (e, n) {t.config.diag.isPlaying = n, t.config.cssId.play != undefined && t.config.cssId.pause != undefined && (n ? (t.config.cssSelector.play.css("display", "none"), t.config.cssSelector.pause.css("display", t.config.cssDisplay.pause)) : (t.config.cssSelector.play.css("display", t.config.cssDisplay.play), t.config.cssSelector.pause.css("display", "none"))), n && (t.config.isWaitingForPlay = !1)}}, i = {setFile: function (e, r, i) {try {t._getMovie().fl_setFile_mp3(r), t.config.autobuffer && n.trigger("jPlayer.load"), t.config.diag.src = r, t.config.isFileSet = !0, n.trigger("jPlayer.setButtons", !1)} catch (s) {t._flashError(s)}}, clearFile: function (e) {try {n.trigger("jPlayer.setButtons", !1), t._getMovie().fl_clearFile_mp3(), t.config.diag.src = "", t.config.isFileSet = !1} catch (r) {t._flashError(r)}}, load: function (e) {try {t._getMovie().fl_load_mp3()} catch (n) {t._flashError(n)}}, play: function (e) {try {t._getMovie().fl_play_mp3() && n.trigger("jPlayer.setButtons", !0)} catch (r) {t._flashError(r)}}, pause: function (e) {try {t._getMovie().fl_pause_mp3() && n.trigger("jPlayer.setButtons", !1)} catch (r) {t._flashError(r)}}, stop: function (e) {try {t._getMovie().fl_stop_mp3() && n.trigger("jPlayer.setButtons", !1)} catch (r) {t._flashError(r)}}, playHead: function (e, r) {try {t._getMovie().fl_play_head_mp3(r) && n.trigger("jPlayer.setButtons", !0)} catch (i) {t._flashError(i)}}, playHeadTime: function (e, r) {try {t._getMovie().fl_play_head_time_mp3(r) && n.trigger("jPlayer.setButtons", !0)} catch (i) {t._flashError(i)}}, volume: function (e, n) {
        t.config.volume = n;
        try {t._getMovie().fl_volume_mp3(n)} catch (r) {t._flashError(r)}
      }}, s = {setFile: function (e, r, i) {t.config.usingMP3 ? t.config.diag.src = r : t.config.diag.src = i, t.config.isFileSet && !t.config.isWaitingForPlay && n.trigger("jPlayer.pause"), t.config.audio.autobuffer = t.config.autobuffer, t.config.audio.preload = t.config.preload, t.config.autobuffer ? (t.config.audio.src = t.config.diag.src, t.config.audio.load()) : t.config.isWaitingForPlay = !0, t.config.isFileSet = !0, t.jPlayerOnProgressChange(0, 0, 0, 0, 0), clearInterval(t.config.jPlayerControllerId), t.config.autobuffer && (t.config.jPlayerControllerId = window.setInterval(function () {t.jPlayerController(!1)}, 100)), clearInterval(t.config.delayedCommandId)}, clearFile: function (e) {t.setFile("", ""), t.config.isWaitingForPlay = !1, t.config.isFileSet = !1}, load: function (e) {t.config.isFileSet && t.config.isWaitingForPlay && (t.config.audio.autobuffer = !0, t.config.audio.preload = "auto", t.config.audio.src = t.config.diag.src, t.config.audio.load(), t.config.isWaitingForPlay = !1, clearInterval(t.config.jPlayerControllerId), t.config.jPlayerControllerId = window.setInterval(function () {t.jPlayerController(!1)}, 100))}, play: function (e) {t.config.isFileSet && (t.config.isWaitingForPlay && (t.config.audio.src = t.config.diag.src, t.config.audio.load()), t.config.audio.play(), n.trigger("jPlayer.setButtons", !0), clearInterval(t.config.jPlayerControllerId), t.config.jPlayerControllerId = window.setInterval(function () {t.jPlayerController(!1)}, 100), clearInterval(t.config.delayedCommandId))}, pause: function (e) {t.config.isFileSet && (t.config.audio.pause(), n.trigger("jPlayer.setButtons", !1), clearInterval(t.config.delayedCommandId))}, stop: function (e) {if (t.config.isFileSet)try {n.trigger("jPlayer.pause"), t.config.audio.currentTime = 0, clearInterval(t.config.jPlayerControllerId), t.config.jPlayerControllerId = window.setInterval(function () {t.jPlayerController(!0)}, 100)} catch (r) {clearInterval(t.config.delayedCommandId), t.config.delayedCommandId = window.setTimeout(function () {t.stop()}, 100)}}, playHead: function (e, r) {
        if (t.config.isFileSet)try {
          n.trigger("jPlayer.load");
          if (typeof t.config.audio.buffered == "object" && t.config.audio.buffered.length > 0)t.config.audio.currentTime = r * t.config.audio.buffered.end(t.config.audio.buffered.length - 1) / 100; else {
            if (!(t.config.audio.duration > 0 && !isNaN(t.config.audio.duration)))throw"e";
            t.config.audio.currentTime = r * t.config.audio.duration / 100
          }
          n.trigger("jPlayer.play")
        } catch (i) {n.trigger("jPlayer.play"), n.trigger("jPlayer.pause"), t.config.delayedCommandId = window.setTimeout(function () {t.playHead(r)}, 100)}
      }, playHeadTime: function (e, r) {if (t.config.isFileSet)try {n.trigger("jPlayer.load"), t.config.audio.currentTime = r / 1e3, n.trigger("jPlayer.play")} catch (i) {n.trigger("jPlayer.play"), n.trigger("jPlayer.pause"), t.config.delayedCommandId = window.setTimeout(function () {t.playHeadTime(r)}, 100)}}, volume: function (e, n) {t.config.volume = n, t.config.audio.volume = n / 100, t.jPlayerVolume(n)}};
      this.config.usingFlash ? e.extend(r, i) : e.extend(r, s);
      for (var o in r) {
        var u = "jPlayer." + o;
        this.element.unbind(u), this.element.bind(u, r[o])
      }
      if (this.config.usingFlash)if (this._checkForFlash(8))if (e.browser.msie) {
        var a = '<object id="' + this.config.fid + '"';
        a += ' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"', a += ' codebase="' + document.URL.substring(0, document.URL.indexOf(":")) + '://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', a += ' type="application/x-shockwave-flash"', a += ' width="' + this.config.width + '" height="' + this.config.height + '">', a += "</object>";
        var f = new Array;
        f[0] = '<param name="movie" value="' + this.config.swf + '" />', f[1] = '<param name="quality" value="high" />', f[2] = '<param name="FlashVars" value="id=' + escape(this.config.id) + "&fid=" + escape(this.config.fid) + "&vol=" + this.config.volume + '" />', f[3] = '<param name="allowScriptAccess" value="always" />', f[4] = '<param name="bgcolor" value="' + this.config.bgcolor + '" />';
        var l = document.createElement(a);
        for (var c = 0; c < f.length; c++)l.appendChild(document.createElement(f[c]));
        this.element.html(l)
      } else {
        var h = '<embed name="' + this.config.fid + '" id="' + this.config.fid + '" src="' + this.config.swf + '"';
        h += ' width="' + this.config.width + '" height="' + this.config.height + '" bgcolor="' + this.config.bgcolor + '"', h += ' quality="high" FlashVars="id=' + escape(this.config.id) + "&fid=" + escape(this.config.fid) + "&vol=" + this.config.volume + '"', h += ' allowScriptAccess="always"', h += ' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />', this.element.html(h)
      } else this.element.html("<p>Flash 8 or above is not installed. <a href='http://get.adobe.com/flashplayer'>Get Flash!</a></p>"); else this.config.audio.autobuffer = this.config.autobuffer, this.config.audio.preload = this.config.preload, this.config.audio.addEventListener("canplay", function () {
        var e = .1 * Math.random(), n = t.config.volume < 50 ? e : -e;
        t.config.audio.volume = (t.config.volume + n) / 100
      }, !1), this.config.audio.addEventListener("ended", function () {clearInterval(t.config.jPlayerControllerId), t.jPlayerOnSoundComplete()}, !1), this.element.append(this.config.audio);
      this.element.css({position: this.config.position, top: this.config.top, left: this.config.left});
      if (this.config.graphicsFix) {
        var p = '<div id="' + this.config.hid + '"></div>';
        this.element.append(p), e.extend(this.config, {hSel: e("#" + this.config.hid)}), this.config.hSel.css({"text-indent": "-9999px"})
      }
      this.config.customCssIds || e.each(e.jPlayer._cssId, function (e, n) {t.cssId(e, n)}), this.config.usingFlash || (this.element.css({left: "-9999px"}), window.setTimeout(function () {t.volume(t.config.volume), t.jPlayerReady()}, 100))
    }, jPlayerReady: function (e) {this.config.usingFlash ? (this.config.swfVersion = e, this.config.swfVersionRequired != this.config.swfVersion && this._error("jPlayer's JavaScript / SWF version mismatch!\n\nJavaScript requires SWF : " + this.config.swfVersionRequired + "\nThe Jplayer.swf used is : " + this.config.swfVersion)) : this.config.swfVersion = "n/a", this.jPlayerReadyCustom()}, jPlayerReadyCustom: function () {}, setFile: function (e, t) {this.element.trigger("jPlayer.setFile", [e, t])}, clearFile: function () {this.element.trigger("jPlayer.clearFile")}, load: function () {this.element.trigger("jPlayer.load")}, play: function () {this.element.trigger("jPlayer.play")}, pause: function () {this.element.trigger("jPlayer.pause")}, stop: function () {this.element.trigger("jPlayer.stop")}, playHead: function (e) {this.element.trigger("jPlayer.playHead", [e])}, playHeadTime: function (e) {this.element.trigger("jPlayer.playHeadTime", [e])}, volume: function (e) {e = this._limitValue(e, 0, 100), this.element.trigger("jPlayer.volume", [e])}, cssId: function (t, n) {
      var r = this;
      if (typeof n == "string")if (e.jPlayer._cssId[t]) {
        this.config.cssId[t] != undefined && this.config.cssSelector[t].unbind("click", this.config.clickHandler[t]), this.config.cssId[t] = n, this.config.cssSelector[t] = e("#" + n), this.config.clickHandler[t] = function (n) {return r[t](n), e(this).blur(), !1}, this.config.cssSelector[t].click(this.config.clickHandler[t]);
        var i = this.config.cssSelector[t].css("display");
        t == "play" && (this.config.cssDisplay.pause = i);
        if (t != "pause" || i != "none")this.config.cssDisplay[t] = i, t == "pause" && this.config.cssSelector[t].css("display", "none")
      } else this._warning("Unknown/Illegal function in cssId\n\njPlayer('cssId', '" + t + "', '" + n + "')"); else this._warning("cssId CSS Id must be a string\n\njPlayer('cssId', '" + t + "', " + n + ")")
    }, loadBar: function (e) {
      if (this.config.cssId.loadBar != undefined) {
        var t = this.config.cssSelector.loadBar.offset(), n = e.pageX - t.left, r = this.config.cssSelector.loadBar.width(), i = 100 * n / r;
        this.playHead(i)
      }
    }, playBar: function (e) {this.loadBar(e)}, onProgressChange: function (t) {e.isFunction(t) ? this.onProgressChangeCustom = t : this._warning("onProgressChange parameter is not a function.")}, onProgressChangeCustom: function () {}, jPlayerOnProgressChange: function (e, t, n, r, i) {e = Math.ceil(e), this.config.diag.loadPercent = e, this.config.diag.playedPercentRelative = t, this.config.diag.playedPercentAbsolute = n, this.config.diag.playedTime = r, this.config.diag.totalTime = i, this.config.cssId.loadBar != undefined && this.config.cssSelector.loadBar.width(e + "%"), this.config.cssId.playBar != undefined && this.config.cssSelector.playBar.width(t + "%"), this.onProgressChangeCustom(e, t, n, r, i), this._forceUpdate()}, jPlayerController: function (e) {
      var t = 0, n = 0, r = 0, i = 0, s = 0;
      this.config.audio.readyState >= 1 && (t = this.config.audio.currentTime * 1e3, n = this.config.audio.duration * 1e3, n = isNaN(n) ? 0 : n, r = n > 0 ? 100 * t / n : 0, typeof this.config.audio.buffered == "object" && this.config.audio.buffered.length > 0 ? (i = 100 * this.config.audio.buffered.end(this.config.audio.buffered.length - 1) / this.config.audio.duration, s = 100 * this.config.audio.currentTime / this.config.audio.buffered.end(this.config.audio.buffered.length - 1)) : (i = 100, s = r)), !this.config.diag.isPlaying && i >= 100 && clearInterval(this.config.jPlayerControllerId), e ? this.jPlayerOnProgressChange(i, 0, 0, 0, n) : this.jPlayerOnProgressChange(i, s, r, t, n)
    }, volumeMin: function () {this.volume(0)}, volumeMax: function () {this.volume(100)}, volumeBar: function (e) {
      if (this.config.cssId.volumeBar != undefined) {
        var t = this.config.cssSelector.volumeBar.offset(), n = e.pageX - t.left, r = this.config.cssSelector.volumeBar.width(), i = 100 * n / r;
        this.volume(i)
      }
    }, volumeBarValue: function (e) {this.volumeBar(e)}, jPlayerVolume: function (e) {this.config.cssId.volumeBarValue != null && (this.config.cssSelector.volumeBarValue.width(e + "%"), this._forceUpdate())}, onSoundComplete: function (t) {e.isFunction(t) ? this.onSoundCompleteCustom = t : this._warning("onSoundComplete parameter is not a function.")}, onSoundCompleteCustom: function () {}, jPlayerOnSoundComplete: function () {this.element.trigger("jPlayer.setButtons", !1), this.onSoundCompleteCustom()}, getData: function (e) {
      var t = e.split("."), n = this.config;
      for (var r = 0; r < t.length; r++) {
        if (n[t[r]] == undefined)return this._warning("Undefined data requested.\n\njPlayer('getData', '" + e + "')"), undefined;
        n = n[t[r]]
      }
      return n
    }, _getMovie: function () {return document[this.config.fid]}, _checkForFlash: function (e) {
      var t = !1, n;
      if (window.ActiveXObject)try {n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + e), t = !0} catch (r) {} else if (navigator.plugins && navigator.mimeTypes.length > 0) {
        n = navigator.plugins["Shockwave Flash"];
        if (n) {
          var i = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1");
          i >= e && (t = !0)
        }
      }
      return t
    }, _forceUpdate: function () {this.config.graphicsFix && this.config.hSel.text("" + Math.random())}, _limitValue: function (e, t, n) {return e < t ? t : e > n ? n : e}, _flashError: function (e) {this._error("Problem with Flash component.\n\nCheck the swfPath points at the Jplayer.swf path.\n\nswfPath = " + this.config.swfPath + "\nurl: " + this.config.swf + "\n\nError: " + e.message)}, _error: function (e) {this.config.errorAlerts && this._alert("Error!\n\n" + e)}, _warning: function (e) {this.config.warningAlerts && this._alert("Warning!\n\n" + e)}, _alert: function (e) {alert("jPlayer " + this.config.version + " : id='" + this.config.id + "' : " + e)}}
  })(e)
});
var Kicksend = {mailcheck: {threshold: 3, defaultDomains: ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com", "live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk", "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com"], defaultTopLevelDomains: ["co.uk", "com", "net", "org", "info", "edu", "gov", "mil"], run: function (e) {
  e.domains = e.domains || Kicksend.mailcheck.defaultDomains, e.topLevelDomains = e.topLevelDomains || Kicksend.mailcheck.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || Kicksend.sift3Distance;
  var t = Kicksend.mailcheck.suggest(encodeURI(e.email), e.domains, e.topLevelDomains, e.distanceFunction);
  t ? e.suggested && e.suggested(t) : e.empty && e.empty()
}, suggest: function (e, t, n, r) {
  e = e.toLowerCase();
  var i = this.splitEmail(e), s = this.findClosestDomain(i.domain, t, r);
  if (s) {if (s != i.domain)return{address: i.address, domain: s, full: i.address + "@" + s}} else {
    var o = this.findClosestDomain(i.topLevelDomain, n);
    if (i.domain && o && o != i.topLevelDomain) {
      var u = i.domain;
      return s = u.substring(0, u.lastIndexOf(i.topLevelDomain)) + o, {address: i.address, domain: s, full: i.address + "@" + s}
    }
  }
  return!1
}, findClosestDomain: function (e, t, n) {
  var r, i = 99, s = null;
  if (!e || !t)return!1;
  n || (n = this.sift3Distance);
  for (var o = 0; o < t.length; o++) {
    if (e === t[o])return e;
    r = n(e, t[o]), r < i && (i = r, s = t[o])
  }
  return i <= this.threshold && s !== null ? s : !1
}, sift3Distance: function (e, t) {
  if (e == null || e.length === 0)return t == null || t.length === 0 ? 0 : t.length;
  if (t == null || t.length === 0)return e.length;
  var n = 0, r = 0, i = 0, s = 0, o = 5;
  while (n + r < e.length && n + i < t.length) {
    if (e.charAt(n + r) == t.charAt(n + i))s++; else {
      r = 0, i = 0;
      for (var u = 0; u < o; u++) {
        if (n + u < e.length && e.charAt(n + u) == t.charAt(n)) {
          r = u;
          break
        }
        if (n + u < t.length && e.charAt(n) == t.charAt(n + u)) {
          i = u;
          break
        }
      }
    }
    n++
  }
  return(e.length + t.length) / 2 - s
}, splitEmail: function (e) {
  var t = e.split("@");
  if (t.length < 2)return!1;
  for (var n = 0; n < t.length; n++)if (t[n] === "")return!1;
  var r = t.pop(), i = r.split("."), s = "";
  if (i.length == 0)return!1;
  if (i.length == 1)s = i[0]; else {
    for (var n = 1; n < i.length; n++)s += i[n] + ".";
    i.length >= 2 && (s = s.substring(0, s.length - 1))
  }
  return{topLevelDomain: s, domain: r, address: t.join("@")}
}}};
window.jQuery && function (e) {
  e.fn.mailcheck = function (e) {
    var t = this;
    if (e.suggested) {
      var n = e.suggested;
      e.suggested = function (e) {n(t, e)}
    }
    if (e.empty) {
      var r = e.empty;
      e.empty = function () {r.call(null, t)}
    }
    e.email = this.val(), Kicksend.mailcheck.run(e)
  }
}(jQuery), define("mailcheck", ["../jslib/jquery"], function (e) {return function () {return e.Kicksend}}(this)), define("plugins", ["require", "../jslib/jquery", "jQuery.countdown", "jquery.mousewheel", "jquery.base64", "jquery.jscrollpane", "jquery.colorbox", "jquery.tabify", "jquery.ui", "jquery.jplayer", "mailcheck"], function (e) {
  var t = e("jquery");
  e("jQuery.countdown"), e("jquery.mousewheel"), e("jquery.base64"), e("jquery.jscrollpane"), e("jquery.colorbox"), e("jquery.tabify"), e("jquery.ui"), e("jquery.jplayer");
  var n = e("mailcheck");
  return t
});
var IEPNGFix = window.IEPNGFix || {};
IEPNGFix.tileBG = function (e, t, n) {
  var r = this.data[e.uniqueID], i = Math.max(e.clientWidth, e.scrollWidth), s = Math.max(e.clientHeight, e.scrollHeight), o = e.currentStyle.backgroundPositionX, u = e.currentStyle.backgroundPositionY, a = e.currentStyle.backgroundRepeat;
  r.tiles || (r.tiles = {elm: e, src: "", cache: [], img: new Image, old: {}});
  var f = r.tiles, l = f.img.width, c = f.img.height;
  if (t) {if (!n && t != f.src)return f.img.onload = function () {this.onload = null, IEPNGFix.tileBG(e, t, 1)}, f.img.src = t} else f.src && (n = 1), l = c = 0;
  f.src = t;
  if (!n && i == f.old.w && s == f.old.h && o == f.old.x && u == f.old.y && a == f.old.r)return;
  var h = {top: "0%", left: "0%", center: "50%", bottom: "100%", right: "100%"}, p, d, v;
  p = h[o] || o, d = h[u] || u;
  if (v = p.match(/(\d+)%/))p = Math.round((i - l) * (parseInt(v[1]) / 100));
  if (v = d.match(/(\d+)%/))d = Math.round((s - c) * (parseInt(v[1]) / 100));
  p = parseInt(p), d = parseInt(d);
  var m = {repeat: 1, "repeat-x": 1}[a], g = {repeat: 1, "repeat-y": 1}[a];
  m && (p %= l, p > 0 && (p -= l)), g && (d %= c, d > 0 && (d -= c)), this.hook.enabled = 0, {relative: 1, absolute: 1}[e.currentStyle.position] || (e.style.position = "relative");
  var y = 0, b, w = m ? i : p + .1, E, S = g ? s : d + .1, x, T, N;
  if (l && c)for (b = p; b < w; b += l)for (E = d; E < S; E += c) {
    N = 0, f.cache[y] || (f.cache[y] = document.createElement("div"), N = 1);
    var C = Math.max(0, b + l > i ? i - b : l), k = Math.max(0, E + c > s ? s - E : c);
    x = f.cache[y], T = x.style, T.behavior = "none", T.left = b - parseInt(e.currentStyle.paddingLeft) + "px", T.top = E + "px", T.width = C + "px", T.height = k + "px", T.clip = "rect(" + (E < 0 ? 0 - E : 0) + "px," + C + "px," + k + "px," + (b < 0 ? 0 - b : 0) + "px)", T.display = "block", N && (T.position = "absolute", T.zIndex = -999, e.firstChild ? e.insertBefore(x, e.firstChild) : e.appendChild(x)), this.fix(x, t, 0), y++
  }
  while (y < f.cache.length)this.fix(f.cache[y], "", 0), f.cache[y++].style.display = "none";
  this.hook.enabled = 1, f.old = {w: i, h: s, x: o, y: u, r: a}
}, IEPNGFix.update = function () {
  for (var e in IEPNGFix.data) {
    var t = IEPNGFix.data[e].tiles;
    t && t.elm && t.src && IEPNGFix.tileBG(t.elm, t.src)
  }
}, IEPNGFix.update.timer = 0, window.attachEvent && !window.opera && window.attachEvent("onresize", function () {clearTimeout(IEPNGFix.update.timer), IEPNGFix.update.timer = setTimeout(IEPNGFix.update, 100)}), define("/js/external/iepngfix_tilebg.js", function () {});
var BASEURL = "";
Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
  var t = this.length >>> 0, n = Number(arguments[1]) || 0;
  n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t);
  for (; n < t; n++)if (n in this && this[n] === e)return n;
  return-1
}), define("/js/global.js", function () {});
var Handlebars = {};
Handlebars.VERSION = "1.0.beta.6", Handlebars.helpers = {}, Handlebars.partials = {}, Handlebars.registerHelper = function (e, t, n) {n && (t.not = n), this.helpers[e] = t}, Handlebars.registerPartial = function (e, t) {this.partials[e] = t}, Handlebars.registerHelper("helperMissing", function (e) {
  if (arguments.length === 2)return undefined;
  throw new Error("Could not find property '" + e + "'")
});
var toString = Object.prototype.toString, functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function (e, t) {
  var n = t.inverse || function () {}, r = t.fn, i = "", s = toString.call(e);
  s === functionType && (e = e.call(this));
  if (e === !0)return r(this);
  if (e === !1 || e == null)return n(this);
  if (s === "[object Array]") {
    if (e.length > 0)for (var o = 0, u = e.length; o < u; o++)i += r(e[o]); else i = n(this);
    return i
  }
  return r(e)
}), Handlebars.registerHelper("each", function (e, t) {
  var n = t.fn, r = t.inverse, i = "";
  if (e && e.length > 0)for (var s = 0, o = e.length; s < o; s++)i += n(e[s]); else i = r(this);
  return i
}), Handlebars.registerHelper("if", function (e, t) {
  var n = toString.call(e);
  return n === functionType && (e = e.call(this)), !e || Handlebars.Utils.isEmpty(e) ? t.inverse(this) : t.fn(this)
}), Handlebars.registerHelper("unless", function (e, t) {
  var n = t.fn, r = t.inverse;
  return t.fn = r, t.inverse = n, Handlebars.helpers["if"].call(this, e, t)
}), Handlebars.registerHelper("with", function (e, t) {return t.fn(e)}), Handlebars.registerHelper("log", function (e) {Handlebars.log(e)});
var handlebars = function () {
  var e = {trace: function () {}, yy: {}, symbols_: {error: 2, root: 3, program: 4, EOF: 5, statements: 6, simpleInverse: 7, statement: 8, openInverse: 9, closeBlock: 10, openBlock: 11, mustache: 12, partial: 13, CONTENT: 14, COMMENT: 15, OPEN_BLOCK: 16, inMustache: 17, CLOSE: 18, OPEN_INVERSE: 19, OPEN_ENDBLOCK: 20, path: 21, OPEN: 22, OPEN_UNESCAPED: 23, OPEN_PARTIAL: 24, params: 25, hash: 26, param: 27, STRING: 28, INTEGER: 29, BOOLEAN: 30, hashSegments: 31, hashSegment: 32, ID: 33, EQUALS: 34, pathSegments: 35, SEP: 36, $accept: 0, $end: 1}, terminals_: {2: "error", 5: "EOF", 14: "CONTENT", 15: "COMMENT", 16: "OPEN_BLOCK", 18: "CLOSE", 19: "OPEN_INVERSE", 20: "OPEN_ENDBLOCK", 22: "OPEN", 23: "OPEN_UNESCAPED", 24: "OPEN_PARTIAL", 28: "STRING", 29: "INTEGER", 30: "BOOLEAN", 33: "ID", 34: "EQUALS", 36: "SEP"}, productions_: [0, [3, 2], [4, 3], [4, 1], [4, 0], [6, 1], [6, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [7, 2], [17, 3], [17, 2], [17, 2], [17, 1], [25, 2], [25, 1], [27, 1], [27, 1], [27, 1], [27, 1], [26, 1], [31, 2], [31, 1], [32, 3], [32, 3], [32, 3], [32, 3], [21, 1], [35, 3], [35, 1]], performAction: function (t, n, r, i, s, o, u) {
    var a = o.length - 1;
    switch (s) {
      case 1:
        return o[a - 1];
      case 2:
        this.$ = new i.ProgramNode(o[a - 2], o[a]);
        break;
      case 3:
        this.$ = new i.ProgramNode(o[a]);
        break;
      case 4:
        this.$ = new i.ProgramNode([]);
        break;
      case 5:
        this.$ = [o[a]];
        break;
      case 6:
        o[a - 1].push(o[a]), this.$ = o[a - 1];
        break;
      case 7:
        this.$ = new i.InverseNode(o[a - 2], o[a - 1], o[a]);
        break;
      case 8:
        this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a]);
        break;
      case 9:
        this.$ = o[a];
        break;
      case 10:
        this.$ = o[a];
        break;
      case 11:
        this.$ = new i.ContentNode(o[a]);
        break;
      case 12:
        this.$ = new i.CommentNode(o[a]);
        break;
      case 13:
        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
        break;
      case 14:
        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
        break;
      case 15:
        this.$ = o[a - 1];
        break;
      case 16:
        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
        break;
      case 17:
        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], !0);
        break;
      case 18:
        this.$ = new i.PartialNode(o[a - 1]);
        break;
      case 19:
        this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
        break;
      case 20:
        break;
      case 21:
        this.$ = [[o[a - 2]].concat(o[a - 1]), o[a]];
        break;
      case 22:
        this.$ = [[o[a - 1]].concat(o[a]), null];
        break;
      case 23:
        this.$ = [
          [o[a - 1]],
          o[a]
        ];
        break;
      case 24:
        this.$ = [
          [o[a]],
          null
        ];
        break;
      case 25:
        o[a - 1].push(o[a]), this.$ = o[a - 1];
        break;
      case 26:
        this.$ = [o[a]];
        break;
      case 27:
        this.$ = o[a];
        break;
      case 28:
        this.$ = new i.StringNode(o[a]);
        break;
      case 29:
        this.$ = new i.IntegerNode(o[a]);
        break;
      case 30:
        this.$ = new i.BooleanNode(o[a]);
        break;
      case 31:
        this.$ = new i.HashNode(o[a]);
        break;
      case 32:
        o[a - 1].push(o[a]), this.$ = o[a - 1];
        break;
      case 33:
        this.$ = [o[a]];
        break;
      case 34:
        this.$ = [o[a - 2], o[a]];
        break;
      case 35:
        this.$ = [o[a - 2], new i.StringNode(o[a])];
        break;
      case 36:
        this.$ = [o[a - 2], new i.IntegerNode(o[a])];
        break;
      case 37:
        this.$ = [o[a - 2], new i.BooleanNode(o[a])];
        break;
      case 38:
        this.$ = new i.IdNode(o[a]);
        break;
      case 39:
        o[a - 2].push(o[a]), this.$ = o[a - 2];
        break;
      case 40:
        this.$ = [o[a]]
    }
  }, table: [
    {3: 1, 4: 2, 5: [2, 4], 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
    {1: [3]},
    {5: [1, 16]},
    {5: [2, 3], 7: 17, 8: 18, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 19], 20: [2, 3], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
    {5: [2, 5], 14: [2, 5], 15: [2, 5], 16: [2, 5], 19: [2, 5], 20: [2, 5], 22: [2, 5], 23: [2, 5], 24: [2, 5]},
    {4: 20, 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
    {4: 21, 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
    {5: [2, 9], 14: [2, 9], 15: [2, 9], 16: [2, 9], 19: [2, 9], 20: [2, 9], 22: [2, 9], 23: [2, 9], 24: [2, 9]},
    {5: [2, 10], 14: [2, 10], 15: [2, 10], 16: [2, 10], 19: [2, 10], 20: [2, 10], 22: [2, 10], 23: [2, 10], 24: [2, 10]},
    {5: [2, 11], 14: [2, 11], 15: [2, 11], 16: [2, 11], 19: [2, 11], 20: [2, 11], 22: [2, 11], 23: [2, 11], 24: [2, 11]},
    {5: [2, 12], 14: [2, 12], 15: [2, 12], 16: [2, 12], 19: [2, 12], 20: [2, 12], 22: [2, 12], 23: [2, 12], 24: [2, 12]},
    {17: 22, 21: 23, 33: [1, 25], 35: 24},
    {17: 26, 21: 23, 33: [1, 25], 35: 24},
    {17: 27, 21: 23, 33: [1, 25], 35: 24},
    {17: 28, 21: 23, 33: [1, 25], 35: 24},
    {21: 29, 33: [1, 25], 35: 24},
    {1: [2, 1]},
    {6: 30, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
    {5: [2, 6], 14: [2, 6], 15: [2, 6], 16: [2, 6], 19: [2, 6], 20: [2, 6], 22: [2, 6], 23: [2, 6], 24: [2, 6]},
    {17: 22, 18: [1, 31], 21: 23, 33: [1, 25], 35: 24},
    {10: 32, 20: [1, 33]},
    {10: 34, 20: [1, 33]},
    {18: [1, 35]},
    {18: [2, 24], 21: 40, 25: 36, 26: 37, 27: 38, 28: [1, 41], 29: [1, 42], 30: [1, 43], 31: 39, 32: 44, 33: [1, 45], 35: 24},
    {18: [2, 38], 28: [2, 38], 29: [2, 38], 30: [2, 38], 33: [2, 38], 36: [1, 46]},
    {18: [2, 40], 28: [2, 40], 29: [2, 40], 30: [2, 40], 33: [2, 40], 36: [2, 40]},
    {18: [1, 47]},
    {18: [1, 48]},
    {18: [1, 49]},
    {18: [1, 50], 21: 51, 33: [1, 25], 35: 24},
    {5: [2, 2], 8: 18, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 2], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
    {14: [2, 20], 15: [2, 20], 16: [2, 20], 19: [2, 20], 22: [2, 20], 23: [2, 20], 24: [2, 20]},
    {5: [2, 7], 14: [2, 7], 15: [2, 7], 16: [2, 7], 19: [2, 7], 20: [2, 7], 22: [2, 7], 23: [2, 7], 24: [2, 7]},
    {21: 52, 33: [1, 25], 35: 24},
    {5: [2, 8], 14: [2, 8], 15: [2, 8], 16: [2, 8], 19: [2, 8], 20: [2, 8], 22: [2, 8], 23: [2, 8], 24: [2, 8]},
    {14: [2, 14], 15: [2, 14], 16: [2, 14], 19: [2, 14], 20: [2, 14], 22: [2, 14], 23: [2, 14], 24: [2, 14]},
    {18: [2, 22], 21: 40, 26: 53, 27: 54, 28: [1, 41], 29: [1, 42], 30: [1, 43], 31: 39, 32: 44, 33: [1, 45], 35: 24},
    {18: [2, 23]},
    {18: [2, 26], 28: [2, 26], 29: [2, 26], 30: [2, 26], 33: [2, 26]},
    {18: [2, 31], 32: 55, 33: [1, 56]},
    {18: [2, 27], 28: [2, 27], 29: [2, 27], 30: [2, 27], 33: [2, 27]},
    {18: [2, 28], 28: [2, 28], 29: [2, 28], 30: [2, 28], 33: [2, 28]},
    {18: [2, 29], 28: [2, 29], 29: [2, 29], 30: [2, 29], 33: [2, 29]},
    {18: [2, 30], 28: [2, 30], 29: [2, 30], 30: [2, 30], 33: [2, 30]},
    {18: [2, 33], 33: [2, 33]},
    {18: [2, 40], 28: [2, 40], 29: [2, 40], 30: [2, 40], 33: [2, 40], 34: [1, 57], 36: [2, 40]},
    {33: [1, 58]},
    {14: [2, 13], 15: [2, 13], 16: [2, 13], 19: [2, 13], 20: [2, 13], 22: [2, 13], 23: [2, 13], 24: [2, 13]},
    {5: [2, 16], 14: [2, 16], 15: [2, 16], 16: [2, 16], 19: [2, 16], 20: [2, 16], 22: [2, 16], 23: [2, 16], 24: [2, 16]},
    {5: [2, 17], 14: [2, 17], 15: [2, 17], 16: [2, 17], 19: [2, 17], 20: [2, 17], 22: [2, 17], 23: [2, 17], 24: [2, 17]},
    {5: [2, 18], 14: [2, 18], 15: [2, 18], 16: [2, 18], 19: [2, 18], 20: [2, 18], 22: [2, 18], 23: [2, 18], 24: [2, 18]},
    {18: [1, 59]},
    {18: [1, 60]},
    {18: [2, 21]},
    {18: [2, 25], 28: [2, 25], 29: [2, 25], 30: [2, 25], 33: [2, 25]},
    {18: [2, 32], 33: [2, 32]},
    {34: [1, 57]},
    {21: 61, 28: [1, 62], 29: [1, 63], 30: [1, 64], 33: [1, 25], 35: 24},
    {18: [2, 39], 28: [2, 39], 29: [2, 39], 30: [2, 39], 33: [2, 39], 36: [2, 39]},
    {5: [2, 19], 14: [2, 19], 15: [2, 19], 16: [2, 19], 19: [2, 19], 20: [2, 19], 22: [2, 19], 23: [2, 19], 24: [2, 19]},
    {5: [2, 15], 14: [2, 15], 15: [2, 15], 16: [2, 15], 19: [2, 15], 20: [2, 15], 22: [2, 15], 23: [2, 15], 24: [2, 15]},
    {18: [2, 34], 33: [2, 34]},
    {18: [2, 35], 33: [2, 35]},
    {18: [2, 36], 33: [2, 36]},
    {18: [2, 37], 33: [2, 37]}
  ], defaultActions: {16: [2, 1], 37: [2, 23], 53: [2, 21]}, parseError: function (t, n) {throw new Error(t)}, parse: function (t) {
    function d(e) {r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e}

    function v() {
      var e;
      return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
    }

    var n = this, r = [0], i = [null], s = [], o = this.table, u = "", a = 0, f = 0, l = 0, c = 2, h = 1;
    this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
    var p = this.lexer.yylloc;
    s.push(p), typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
    var m, g, y, b, w, E, S = {}, x, T, N, C;
    for (; ;) {
      y = r[r.length - 1], this.defaultActions[y] ? b = this.defaultActions[y] : (m == null && (m = v()), b = o[y] && o[y][m]);
      if (typeof b == "undefined" || !b.length || !b[0])if (!l) {
        C = [];
        for (x in o[y])this.terminals_[x] && x > 2 && C.push("'" + this.terminals_[x] + "'");
        var k = "";
        this.lexer.showPosition ? k = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + C.join(", ") + ", got '" + this.terminals_[m] + "'" : k = "Parse error on line " + (a + 1) + ": Unexpected " + (m == 1 ? "end of input" : "'" + (this.terminals_[m] || m) + "'"), this.parseError(k, {text: this.lexer.match, token: this.terminals_[m] || m, line: this.lexer.yylineno, loc: p, expected: C})
      }
      if (b[0]instanceof Array && b.length > 1)throw new Error("Parse Error: multiple actions possible at state: " + y + ", token: " + m);
      switch (b[0]) {
        case 1:
          r.push(m), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(b[1]), m = null, g ? (m = g, g = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
          break;
        case 2:
          T = this.productions_[b[1]][1], S.$ = i[i.length - T], S._$ = {first_line: s[s.length - (T || 1)].first_line, last_line: s[s.length - 1].last_line, first_column: s[s.length - (T || 1)].first_column, last_column: s[s.length - 1].last_column}, E = this.performAction.call(S, u, f, a, this.yy, b[1], i, s);
          if (typeof E != "undefined")return E;
          T && (r = r.slice(0, -1 * T * 2), i = i.slice(0, -1 * T), s = s.slice(0, -1 * T)), r.push(this.productions_[b[1]][0]), i.push(S.$), s.push(S._$), N = o[r[r.length - 2]][r[r.length - 1]], r.push(N);
          break;
        case 3:
          return!0
      }
    }
    return!0
  }}, t = function () {
    var e = {EOF: 1, parseError: function (t, n) {
      if (!this.yy.parseError)throw new Error(t);
      this.yy.parseError(t, n)
    }, setInput: function (e) {return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0}, this}, input: function () {
      var e = this._input[0];
      this.yytext += e, this.yyleng++, this.match += e, this.matched += e;
      var t = e.match(/\n/);
      return t && this.yylineno++, this._input = this._input.slice(1), e
    }, unput: function (e) {return this._input = e + this._input, this}, more: function () {return this._more = !0, this}, pastInput: function () {
      var e = this.matched.substr(0, this.matched.length - this.match.length);
      return(e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
    }, upcomingInput: function () {
      var e = this.match;
      return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
    }, showPosition: function () {
      var e = this.pastInput(), t = (new Array(e.length + 1)).join("-");
      return e + this.upcomingInput() + "\n" + t + "^"
    }, next: function () {
      if (this.done)return this.EOF;
      this._input || (this.done = !0);
      var e, t, n, r;
      this._more || (this.yytext = "", this.match = "");
      var i = this._currentRules();
      for (var s = 0; s < i.length; s++) {
        t = this._input.match(this.rules[i[s]]);
        if (t) {
          r = t[0].match(/\n.*/g), r && (this.yylineno += r.length), this.yylloc = {first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: r ? r[r.length - 1].length - 1 : this.yylloc.last_column + t[0].length}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, i[s], this.conditionStack[this.conditionStack.length - 1]);
          if (e)return e;
          return
        }
      }
      if (this._input === "")return this.EOF;
      this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "", token: null, line: this.yylineno})
    }, lex: function () {
      var t = this.next();
      return typeof t != "undefined" ? t : this.lex()
    }, begin: function (t) {this.conditionStack.push(t)}, popState: function () {return this.conditionStack.pop()}, _currentRules: function () {return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules}, topState: function () {return this.conditionStack[this.conditionStack.length - 2]}, pushState: function (t) {this.begin(t)}};
    return e.performAction = function (t, n, r, i) {
      var s = i;
      switch (r) {
        case 0:
          n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
          if (n.yytext)return 14;
          break;
        case 1:
          return 14;
        case 2:
          return this.popState(), 14;
        case 3:
          return 24;
        case 4:
          return 16;
        case 5:
          return 20;
        case 6:
          return 19;
        case 7:
          return 19;
        case 8:
          return 23;
        case 9:
          return 23;
        case 10:
          return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
        case 11:
          return 22;
        case 12:
          return 34;
        case 13:
          return 33;
        case 14:
          return 33;
        case 15:
          return 36;
        case 16:
          break;
        case 17:
          return this.popState(), 18;
        case 18:
          return this.popState(), 18;
        case 19:
          return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 28;
        case 20:
          return 30;
        case 21:
          return 30;
        case 22:
          return 29;
        case 23:
          return 33;
        case 24:
          return n.yytext = n.yytext.substr(1, n.yyleng - 2), 33;
        case 25:
          return"INVALID";
        case 26:
          return 5
      }
    }, e.rules = [/^[^\x00]*?(?=(\{\{))/, /^[^\x00]+/, /^[^\x00]{2,}?(?=(\{\{))/, /^\{\{>/, /^\{\{#/, /^\{\{\//, /^\{\{\^/, /^\{\{\s*else\b/, /^\{\{\{/, /^\{\{&/, /^\{\{![\s\S]*?\}\}/, /^\{\{/, /^=/, /^\.(?=[} ])/, /^\.\./, /^[\/.]/, /^\s+/, /^\}\}\}/, /^\}\}/, /^"(\\["]|[^"])*"/, /^true(?=[}\s])/, /^false(?=[}\s])/, /^[0-9]+(?=[}\s])/, /^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/, /^\[[^\]]*\]/, /^./, /^$/], e.conditions = {mu: {rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], inclusive: !1}, emu: {rules: [2], inclusive: !1}, INITIAL: {rules: [0, 1, 26], inclusive: !0}}, e
  }();
  return e.lexer = t, e
}();
typeof require != "undefined" && typeof exports != "undefined" && (exports.parser = handlebars, exports.parse = function () {return handlebars.parse.apply(handlebars, arguments)}, exports.main = function (t) {
  if (!t[1])throw new Error("Usage: " + t[0] + " FILE");
  if (typeof process != "undefined")var n = require("fs").readFileSync(require("path").join(process.cwd(), t[1]), "utf8"); else var r = require("file").path(require("file").cwd()), n = r.join(t[1]).read({charset: "utf-8"});
  return exports.parser.parse(n)
}, typeof module != "undefined" && require.main === module && exports.main(typeof process != "undefined" ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function (e) {return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)}, Handlebars.print = function (e) {return(new Handlebars.PrintVisitor).accept(e)}, Handlebars.logger = {DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3, log: function (e, t) {}}, Handlebars.log = function (e, t) {Handlebars.logger.log(e, t)}, function () {
  Handlebars.AST = {}, Handlebars.AST.ProgramNode = function (e, t) {this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))}, Handlebars.AST.MustacheNode = function (e, t, n) {this.type = "mustache", this.id = e[0], this.params = e.slice(1), this.hash = t, this.escaped = !n}, Handlebars.AST.PartialNode = function (e, t) {this.type = "partial", this.id = e, this.context = t};
  var e = function (e, t) {if (e.original !== t.original)throw new Handlebars.Exception(e.original + " doesn't match " + t.original)};
  Handlebars.AST.BlockNode = function (t, n, r) {e(t.id, r), this.type = "block", this.mustache = t, this.program = n}, Handlebars.AST.InverseNode = function (t, n, r) {e(t.id, r), this.type = "inverse", this.mustache = t, this.program = n}, Handlebars.AST.ContentNode = function (e) {this.type = "content", this.string = e}, Handlebars.AST.HashNode = function (e) {this.type = "hash", this.pairs = e}, Handlebars.AST.IdNode = function (e) {
    this.type = "ID", this.original = e.join(".");
    var t = [], n = 0;
    for (var r = 0, i = e.length; r < i; r++) {
      var s = e[r];
      s === ".." ? n++ : s === "." || s === "this" ? this.isScoped = !0 : t.push(s)
    }
    this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = t.length === 1 && n === 0
  }, Handlebars.AST.StringNode = function (e) {this.type = "STRING", this.string = e}, Handlebars.AST.IntegerNode = function (e) {this.type = "INTEGER", this.integer = e}, Handlebars.AST.BooleanNode = function (e) {this.type = "BOOLEAN", this.bool = e}, Handlebars.AST.CommentNode = function (e) {this.type = "comment", this.comment = e}
}(), Handlebars.Exception = function (e) {
  var t = Error.prototype.constructor.apply(this, arguments);
  for (var n in t)t.hasOwnProperty(n) && (this[n] = t[n]);
  this.message = t.message
}, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function (e) {this.string = e}, Handlebars.SafeString.prototype.toString = function () {return this.string.toString()}, function () {
  var e = {"<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, t = /&(?!\w+;)|[<>"'`]/g, n = /[&<>"'`]/, r = function (t) {return e[t] || "&amp;"};
  Handlebars.Utils = {escapeExpression: function (e) {return e instanceof Handlebars.SafeString ? e.toString() : e == null || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e}, isEmpty: function (e) {return typeof e == "undefined" ? !0 : e === null ? !0 : e === !1 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1}}
}(), Handlebars.Compiler = function () {}, Handlebars.JavaScriptCompiler = function () {}, function (e, t) {
  e.OPCODE_MAP = {appendContent: 1, getContext: 2, lookupWithHelpers: 3, lookup: 4, append: 5, invokeMustache: 6, appendEscaped: 7, pushString: 8, truthyOrFallback: 9, functionOrFallback: 10, invokeProgram: 11, invokePartial: 12, push: 13, assignToHash: 15, pushStringParam: 16}, e.MULTI_PARAM_OPCODES = {appendContent: 1, getContext: 1, lookupWithHelpers: 2, lookup: 1, invokeMustache: 3, pushString: 1, truthyOrFallback: 1, functionOrFallback: 1, invokeProgram: 3, invokePartial: 1, push: 1, assignToHash: 1, pushStringParam: 1}, e.DISASSEMBLE_MAP = {};
  for (var n in e.OPCODE_MAP) {
    var r = e.OPCODE_MAP[n];
    e.DISASSEMBLE_MAP[r] = n
  }
  e.multiParamSize = function (t) {return e.MULTI_PARAM_OPCODES[e.DISASSEMBLE_MAP[t]]}, e.prototype = {compiler: e, disassemble: function () {
    var t = this.opcodes, n, r, i = [], s, o, u;
    for (var a = 0, f = t.length; a < f; a++) {
      n = t[a];
      if (n === "DECLARE")o = t[++a], u = t[++a], i.push("DECLARE " + o + " = " + u); else {
        s = e.DISASSEMBLE_MAP[n];
        var l = e.multiParamSize(n), c = [];
        for (var h = 0; h < l; h++)r = t[++a], typeof r == "string" && (r = '"' + r.replace("\n", "\\n") + '"'), c.push(r);
        s = s + " " + c.join(" "), i.push(s)
      }
    }
    return i.join("\n")
  }, guid: 0, compile: function (e, t) {
    this.children = [], this.depths = {list: []}, this.options = t;
    var n = this.options.knownHelpers;
    this.options.knownHelpers = {helperMissing: !0, blockHelperMissing: !0, each: !0, "if": !0, unless: !0, "with": !0, log: !0};
    if (n)for (var r in n)this.options.knownHelpers[r] = n[r];
    return this.program(e)
  }, accept: function (e) {return this[e.type](e)}, program: function (e) {
    var t = e.statements, n;
    this.opcodes = [];
    for (var r = 0, i = t.length; r < i; r++)n = t[r], this[n.type](n);
    return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function (e, t) {return e - t}), this
  }, compileProgram: function (e) {
    var t = (new this.compiler).compile(e, this.options), n = this.guid++;
    this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
    for (var r = 0, i = t.depths.list.length; r < i; r++) {
      depth = t.depths.list[r];
      if (depth < 2)continue;
      this.addDepth(depth - 1)
    }
    return n
  }, block: function (e) {
    var t = e.mustache, n, r, i, s, o = this.setupStackForMustache(t), u = this.compileProgram(e.program);
    e.program.inverse && (s = this.compileProgram(e.program.inverse), this.declare("inverse", s)), this.opcode("invokeProgram", u, o.length, !!t.hash), this.declare("inverse", null), this.opcode("append")
  }, inverse: function (e) {
    var t = this.setupStackForMustache(e.mustache), n = this.compileProgram(e.program);
    this.declare("inverse", n), this.opcode("invokeProgram", null, t.length, !!e.mustache.hash), this.declare("inverse", null), this.opcode("append")
  }, hash: function (e) {
    var t = e.pairs, n, r;
    this.opcode("push", "{}");
    for (var i = 0, s = t.length; i < s; i++)n = t[i], r = n[1], this.accept(r), this.opcode("assignToHash", n[0])
  }, partial: function (e) {
    var t = e.id;
    this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
  }, content: function (e) {this.opcode("appendContent", e.string)}, mustache: function (e) {
    var t = this.setupStackForMustache(e);
    this.opcode("invokeMustache", t.length, e.id.original, !!e.hash), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
  }, ID: function (e) {
    this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("lookupWithHelpers", e.parts[0] || null, e.isScoped || !1);
    for (var t = 1, n = e.parts.length; t < n; t++)this.opcode("lookup", e.parts[t])
  }, STRING: function (e) {this.opcode("pushString", e.string)}, INTEGER: function (e) {this.opcode("push", e.integer)}, BOOLEAN: function (e) {this.opcode("push", e.bool)}, comment: function () {}, pushParams: function (e) {
    var t = e.length, n;
    while (t--)n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.string)) : this[n.type](n)
  }, opcode: function (t, n, r, i) {this.opcodes.push(e.OPCODE_MAP[t]), n !== undefined && this.opcodes.push(n), r !== undefined && this.opcodes.push(r), i !== undefined && this.opcodes.push(i)}, declare: function (e, t) {this.opcodes.push("DECLARE"), this.opcodes.push(e), this.opcodes.push(t)}, addDepth: function (e) {
    if (e === 0)return;
    this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e))
  }, setupStackForMustache: function (e) {
    var t = e.params;
    return this.pushParams(t), e.hash && this.hash(e.hash), this.ID(e.id), t
  }}, t.prototype = {nameLookup: function (e, n, r) {return/^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']"}, appendToBuffer: function (e) {return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"}, initializeBuffer: function () {return this.quotedString("")}, namespace: "Handlebars", compile: function (e, t, n, r) {
    this.environment = e, this.options = t || {}, this.name = this.environment.name, this.isChild = !!n, this.context = n || {programs: [], aliases: {self: "this"}, registers: {list: []}}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.compileChildren(e, t);
    var i = e.opcodes, s;
    this.i = 0;
    for (u = i.length; this.i < u; this.i++)s = this.nextOpcode(0), s[0] === "DECLARE" ? (this.i = this.i + 2, this[s[1]] = s[2]) : (this.i = this.i + s[1].length, this[s[0]].apply(this, s[1]));
    return this.createFunctionContext(r)
  }, nextOpcode: function (t) {
    var n = this.environment.opcodes, r = n[this.i + t], i, s, o, u;
    if (r === "DECLARE")return i = n[this.i + 1], s = n[this.i + 2], ["DECLARE", i, s];
    i = e.DISASSEMBLE_MAP[r], o = e.multiParamSize(r), u = [];
    for (var a = 0; a < o; a++)u.push(n[this.i + a + 1 + t]);
    return[i, u]
  }, eat: function (e) {this.i = this.i + e.length}, preamble: function () {
    var e = [];
    this.useRegister("foundHelper");
    if (!this.isChild) {
      var t = this.namespace, n = "helpers = helpers || " + t + ".helpers;";
      this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), e.push(n)
    } else e.push("");
    this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
  }, createFunctionContext: function (e) {
    var t = this.stackVars;
    this.isChild || (t = t.concat(this.context.registers.list)), t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", "));
    if (!this.isChild) {
      var n = [];
      for (var r in this.context.aliases)this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r]
    }
    this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
    var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
    for (var s = 0, o = this.environment.depths.list.length; s < o; s++)i.push("depth" + this.environment.depths.list[s]);
    if (e)return i.push(this.source.join("\n  ")), Function.apply(this, i);
    var u = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
    return Handlebars.log(Handlebars.logger.DEBUG, u + "\n\n"), u
  }, appendContent: function (e) {this.source.push(this.appendToBuffer(this.quotedString(e)))}, append: function () {
    var e = this.popStack();
    this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
  }, appendEscaped: function () {
    var e = this.nextOpcode(1), t = "";
    this.context.aliases.escapeExpression = "this.escapeExpression", e[0] === "appendContent" && (t = " + " + this.quotedString(e[1][0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
  }, getContext: function (e) {this.lastContext !== e && (this.lastContext = e)}, lookupWithHelpers: function (e, t) {
    if (e) {
      var n = this.nextStack();
      this.usingKnownHelper = !1;
      var r;
      !t && this.options.knownHelpers[e] ? (r = n + " = " + this.nameLookup("helpers", e, "helper"), this.usingKnownHelper = !0) : t || this.options.knownHelpersOnly ? r = n + " = " + this.nameLookup("depth" + this.lastContext, e, "context") : (this.register("foundHelper", this.nameLookup("helpers", e, "helper")), r = n + " = foundHelper || " + this.nameLookup("depth" + this.lastContext, e, "context")), r += ";", this.source.push(r)
    } else this.pushStack("depth" + this.lastContext)
  }, lookup: function (e) {
    var t = this.topStack();
    this.source.push(t + " = (" + t + " === null || " + t + " === undefined || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context") + ");")
  }, pushStringParam: function (e) {this.pushStack("depth" + this.lastContext), this.pushString(e)}, pushString: function (e) {this.pushStack(this.quotedString(e))}, push: function (e) {this.pushStack(e)}, invokeMustache: function (e, t, n) {this.populateParams(e, this.quotedString(t), "{}", null, n, function (e, t, n) {this.usingKnownHelper || (this.context.aliases.helperMissing = "helpers.helperMissing", this.context.aliases.undef = "void 0", this.source.push("else if(" + n + "=== undef) { " + e + " = helperMissing.call(" + t + "); }"), e !== n && this.source.push("else { " + e + " = " + n + "; }"))})}, invokeProgram: function (e, t, n) {
    var r = this.programExpression(this.inverse), i = this.programExpression(e);
    this.populateParams(t, null, i, r, n, function (e, t, n) {this.usingKnownHelper || (this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing", this.source.push("else { " + e + " = blockHelperMissing.call(" + t + "); }"))})
  }, populateParams: function (e, t, n, r, i, s) {
    var o = i || this.options.stringParams || r || this.options.data, u = this.popStack(), a, f = [], l, c, h;
    o ? (this.register("tmp1", n), h = "tmp1") : h = "{ hash: {} }";
    if (o) {
      var p = i ? this.popStack() : "{}";
      this.source.push("tmp1.hash = " + p + ";")
    }
    this.options.stringParams && this.source.push("tmp1.contexts = [];");
    for (var d = 0; d < e; d++)l = this.popStack(), f.push(l), this.options.stringParams && this.source.push("tmp1.contexts.push(" + this.popStack() + ");");
    r && (this.source.push("tmp1.fn = tmp1;"), this.source.push("tmp1.inverse = " + r + ";")), this.options.data && this.source.push("tmp1.data = data;"), f.push(h), this.populateCall(f, u, t || u, s, n !== "{}")
  }, populateCall: function (e, t, n, r, i) {
    var s = ["depth0"].concat(e).join(", "), o = ["depth0"].concat(n).concat(e).join(", "), u = this.nextStack();
    if (this.usingKnownHelper)this.source.push(u + " = " + t + ".call(" + s + ");"); else {
      this.context.aliases.functionType = '"function"';
      var a = i ? "foundHelper && " : "";
      this.source.push("if(" + a + "typeof " + t + " === functionType) { " + u + " = " + t + ".call(" + s + "); }")
    }
    r.call(this, u, o, t), this.usingKnownHelper = !1
  }, invokePartial: function (e) {params = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"], this.options.data && params.push("data"), this.pushStack("self.invokePartial(" + params.join(", ") + ");")}, assignToHash: function (e) {
    var t = this.popStack(), n = this.topStack();
    this.source.push(n + "['" + e + "'] = " + t + ";")
  }, compiler: t, compileChildren: function (e, t) {
    var n = e.children, r, i;
    for (var s = 0, o = n.length; s < o; s++) {
      r = n[s], i = new this.compiler, this.context.programs.push("");
      var u = this.context.programs.length;
      r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context)
    }
  }, programExpression: function (e) {
    if (e == null)return"self.noop";
    var t = this.environment.children[e], n = t.depths.list, r = [t.index, t.name, "data"];
    for (var i = 0, s = n.length; i < s; i++)depth = n[i], depth === 1 ? r.push("depth0") : r.push("depth" + (depth - 1));
    return n.length === 0 ? "self.program(" + r.join(", ") + ")" : (r.shift(), "self.programWithDepth(" + r.join(", ") + ")")
  }, register: function (e, t) {this.useRegister(e), this.source.push(e + " = " + t + ";")}, useRegister: function (e) {this.context.registers[e] || (this.context.registers[e] = !0, this.context.registers.list.push(e))}, pushStack: function (e) {return this.source.push(this.nextStack() + " = " + e + ";"), "stack" + this.stackSlot}, nextStack: function () {return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot}, popStack: function () {return"stack" + this.stackSlot--}, topStack: function () {return"stack" + this.stackSlot}, quotedString: function (e) {return'"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'}};
  var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), s = t.RESERVED_WORDS = {};
  for (var o = 0, u = i.length; o < u; o++)s[i[o]] = !0;
  t.isValidJavaScriptVariableName = function (e) {return!t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1}
}(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function (e, t) {
  t = t || {};
  var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t);
  return(new Handlebars.JavaScriptCompiler).compile(r, t)
}, Handlebars.compile = function (e, t) {
  function r() {
    var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t), i = (new Handlebars.JavaScriptCompiler).compile(r, t, undefined, !0);
    return Handlebars.template(i)
  }

  t = t || {};
  var n;
  return function (e, t) {return n || (n = r()), n.call(this, e, t)}
}, Handlebars.VM = {template: function (e) {
  var t = {escapeExpression: Handlebars.Utils.escapeExpression, invokePartial: Handlebars.VM.invokePartial, programs: [], program: function (e, t, n) {
    var r = this.programs[e];
    return n ? Handlebars.VM.program(t, n) : r ? r : (r = this.programs[e] = Handlebars.VM.program(t), r)
  }, programWithDepth: Handlebars.VM.programWithDepth, noop: Handlebars.VM.noop};
  return function (n, r) {return r = r || {}, e.call(t, Handlebars, n, r.helpers, r.partials, r.data)}
}, programWithDepth: function (e, t, n) {
  var r = Array.prototype.slice.call(arguments, 2);
  return function (n, i) {return i = i || {}, e.apply(this, [n, i.data || t].concat(r))}
}, program: function (e, t) {return function (n, r) {return r = r || {}, e(n, r.data || t)}}, noop: function () {return""}, invokePartial: function (e, t, n, r, i, s) {
  options = {helpers: r, partials: i, data: s};
  if (e === undefined)throw new Handlebars.Exception("The partial " + t + " could not be found");
  if (e instanceof Function)return e(n, options);
  if (!Handlebars.compile)throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode");
  return i[t] = Handlebars.compile(e), i[t](n, options)
}}, Handlebars.template = Handlebars.VM.template, define("Handlebars", function (e) {return function () {return e.Handlebars}}(this)), function () {
  var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.push, u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce, d = r.reduceRight, v = r.filter, m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, E = Object.keys, S = s.bind, x = function (e) {
    if (e instanceof x)return e;
    if (!(this instanceof x))return new x(e);
    this._wrapped = e
  };
  typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
  var T = x.each = x.forEach = function (e, t, r) {
    if (e == null)return;
    if (c && e.forEach === c)e.forEach(t, r); else if (e.length === +e.length) {for (var i = 0, s = e.length; i < s; i++)if (t.call(r, e[i], i, e) === n)return} else {
      var o = x.keys(e);
      for (var i = 0, s = o.length; i < s; i++)if (t.call(r, e[o[i]], o[i], e) === n)return
    }
  };
  x.map = x.collect = function (e, t, n) {
    var r = [];
    return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {r.push(t.call(n, e, i, s))}), r)
  };
  var N = "Reduce of empty array with no initial value";
  x.reduce = x.foldl = x.inject = function (e, t, n, r) {
    var i = arguments.length > 2;
    e == null && (e = []);
    if (p && e.reduce === p)return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
    T(e, function (e, s, o) {i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)});
    if (!i)throw new TypeError(N);
    return n
  }, x.reduceRight = x.foldr = function (e, t, n, r) {
    var i = arguments.length > 2;
    e == null && (e = []);
    if (d && e.reduceRight === d)return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
    var s = e.length;
    if (s !== +s) {
      var o = x.keys(e);
      s = o.length
    }
    T(e, function (u, a, f) {a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)});
    if (!i)throw new TypeError(N);
    return n
  }, x.find = x.detect = function (e, t, n) {
    var r;
    return C(e, function (e, i, s) {if (t.call(n, e, i, s))return r = e, !0}), r
  }, x.filter = x.select = function (e, t, n) {
    var r = [];
    return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {t.call(n, e, i, s) && r.push(e)}), r)
  }, x.reject = function (e, t, n) {return x.filter(e, function (e, r, i) {return!t.call(n, e, r, i)}, n)}, x.every = x.all = function (e, t, r) {
    t || (t = x.identity);
    var i = !0;
    return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {if (!(i = i && t.call(r, e, s, o)))return n}), !!i)
  };
  var C = x.some = x.any = function (e, t, r) {
    t || (t = x.identity);
    var i = !1;
    return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {if (i || (i = t.call(r, e, s, o)))return n}), !!i)
  };
  x.contains = x.include = function (e, t) {return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {return e === t})}, x.invoke = function (e, t) {
    var n = u.call(arguments, 2), r = x.isFunction(t);
    return x.map(e, function (e) {return(r ? t : e[t]).apply(e, n)})
  }, x.pluck = function (e, t) {return x.map(e, function (e) {return e[t]})}, x.where = function (e, t, n) {
    return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function (e) {
      for (var n in t)if (t[n] !== e[n])return!1;
      return!0
    })
  }, x.findWhere = function (e, t) {return x.where(e, t, !0)}, x.max = function (e, t, n) {
    if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535)return Math.max.apply(Math, e);
    if (!t && x.isEmpty(e))return-Infinity;
    var r = {computed: -Infinity, value: -Infinity};
    return T(e, function (e, i, s) {
      var o = t ? t.call(n, e, i, s) : e;
      o > r.computed && (r = {value: e, computed: o})
    }), r.value
  }, x.min = function (e, t, n) {
    if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535)return Math.min.apply(Math, e);
    if (!t && x.isEmpty(e))return Infinity;
    var r = {computed: Infinity, value: Infinity};
    return T(e, function (e, i, s) {
      var o = t ? t.call(n, e, i, s) : e;
      o < r.computed && (r = {value: e, computed: o})
    }), r.value
  }, x.shuffle = function (e) {
    var t, n = 0, r = [];
    return T(e, function (e) {t = x.random(n++), r[n - 1] = r[t], r[t] = e}), r
  }, x.sample = function (e, t, n) {return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))};
  var k = function (e) {return x.isFunction(e) ? e : function (t) {return t[e]}};
  x.sortBy = function (e, t, n) {
    var r = k(t);
    return x.pluck(x.map(e, function (e, t, i) {return{value: e, index: t, criteria: r.call(n, e, t, i)}}).sort(function (e, t) {
      var n = e.criteria, r = t.criteria;
      if (n !== r) {
        if (n > r || n === void 0)return 1;
        if (n < r || r === void 0)return-1
      }
      return e.index - t.index
    }), "value")
  };
  var L = function (e) {
    return function (t, n, r) {
      var i = {}, s = n == null ? x.identity : k(n);
      return T(t, function (n, o) {
        var u = s.call(r, n, o, t);
        e(i, u, n)
      }), i
    }
  };
  x.groupBy = L(function (e, t, n) {(x.has(e, t) ? e[t] : e[t] = []).push(n)}), x.indexBy = L(function (e, t, n) {e[t] = n}), x.countBy = L(function (e, t) {x.has(e, t) ? e[t]++ : e[t] = 1}), x.sortedIndex = function (e, t, n, r) {
    n = n == null ? x.identity : k(n);
    var i = n.call(r, t), s = 0, o = e.length;
    while (s < o) {
      var u = s + o >>> 1;
      n.call(r, e[u]) < i ? s = u + 1 : o = u
    }
    return s
  }, x.toArray = function (e) {return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []}, x.size = function (e) {return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length}, x.first = x.head = x.take = function (e, t, n) {return e == null ? void 0 : t == null || n ? e[0] : u.call(e, 0, t)}, x.initial = function (e, t, n) {return u.call(e, 0, e.length - (t == null || n ? 1 : t))}, x.last = function (e, t, n) {return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))}, x.rest = x.tail = x.drop = function (e, t, n) {return u.call(e, t == null || n ? 1 : t)}, x.compact = function (e) {return x.filter(e, x.identity)};
  var A = function (e, t, n) {return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function (e) {x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)}), n)};
  x.flatten = function (e, t) {return A(e, t, [])}, x.without = function (e) {return x.difference(e, u.call(arguments, 1))}, x.uniq = x.unique = function (e, t, n, r) {
    x.isFunction(t) && (r = n, n = t, t = !1);
    var i = n ? x.map(e, n, r) : e, s = [], o = [];
    return T(i, function (n, r) {if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n))o.push(n), s.push(e[r])}), s
  }, x.union = function () {return x.uniq(x.flatten(arguments, !0))}, x.intersection = function (e) {
    var t = u.call(arguments, 1);
    return x.filter(x.uniq(e), function (e) {return x.every(t, function (t) {return x.indexOf(t, e) >= 0})})
  }, x.difference = function (e) {
    var t = a.apply(r, u.call(arguments, 1));
    return x.filter(e, function (e) {return!x.contains(t, e)})
  }, x.zip = function () {
    var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e);
    for (var n = 0; n < e; n++)t[n] = x.pluck(arguments, "" + n);
    return t
  }, x.object = function (e, t) {
    if (e == null)return{};
    var n = {};
    for (var r = 0, i = e.length; r < i; r++)t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
    return n
  }, x.indexOf = function (e, t, n) {
    if (e == null)return-1;
    var r = 0, i = e.length;
    if (n) {
      if (typeof n != "number")return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
      r = n < 0 ? Math.max(0, i + n) : n
    }
    if (y && e.indexOf === y)return e.indexOf(t, n);
    for (; r < i; r++)if (e[r] === t)return r;
    return-1
  }, x.lastIndexOf = function (e, t, n) {
    if (e == null)return-1;
    var r = n != null;
    if (b && e.lastIndexOf === b)return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
    var i = r ? n : e.length;
    while (i--)if (e[i] === t)return i;
    return-1
  }, x.range = function (e, t, n) {
    arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
    var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
    while (i < r)s[i++] = e, e += n;
    return s
  };
  var O = function () {};
  x.bind = function (e, t) {
    var n, r;
    if (S && e.bind === S)return S.apply(e, u.call(arguments, 1));
    if (!x.isFunction(e))throw new TypeError;
    return n = u.call(arguments, 2), r = function () {
      if (this instanceof r) {
        O.prototype = e.prototype;
        var i = new O;
        O.prototype = null;
        var s = e.apply(i, n.concat(u.call(arguments)));
        return Object(s) === s ? s : i
      }
      return e.apply(t, n.concat(u.call(arguments)))
    }
  }, x.partial = function (e) {
    var t = u.call(arguments, 1);
    return function () {return e.apply(this, t.concat(u.call(arguments)))}
  }, x.bindAll = function (e) {
    var t = u.call(arguments, 1);
    if (t.length === 0)throw new Error("bindAll must be passed function names");
    return T(t, function (t) {e[t] = x.bind(e[t], e)}), e
  }, x.memoize = function (e, t) {
    var n = {};
    return t || (t = x.identity), function () {
      var r = t.apply(this, arguments);
      return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
    }
  }, x.delay = function (e, t) {
    var n = u.call(arguments, 2);
    return setTimeout(function () {return e.apply(null, n)}, t)
  }, x.defer = function (e) {return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))}, x.throttle = function (e, t, n) {
    var r, i, s, o = null, u = 0;
    n || (n = {});
    var a = function () {u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)};
    return function () {
      var f = new Date;
      !u && n.leading === !1 && (u = f);
      var l = t - (f - u);
      return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
    }
  }, x.debounce = function (e, t, n) {
    var r, i, s, o, u;
    return function () {
      s = this, i = arguments, o = new Date;
      var a = function () {
        var f = new Date - o;
        f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i)))
      }, f = n && !r;
      return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i)), u
    }
  }, x.once = function (e) {
    var t = !1, n;
    return function () {return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)}
  }, x.wrap = function (e, t) {
    return function () {
      var n = [e];
      return o.apply(n, arguments), t.apply(this, n)
    }
  }, x.compose = function () {
    var e = arguments;
    return function () {
      var t = arguments;
      for (var n = e.length - 1; n >= 0; n--)t = [e[n].apply(this, t)];
      return t[0]
    }
  }, x.after = function (e, t) {return function () {if (--e < 1)return t.apply(this, arguments)}}, x.keys = E || function (e) {
    if (e !== Object(e))throw new TypeError("Invalid object");
    var t = [];
    for (var n in e)x.has(e, n) && t.push(n);
    return t
  }, x.values = function (e) {
    var t = x.keys(e), n = t.length, r = new Array(n);
    for (var i = 0; i < n; i++)r[i] = e[t[i]];
    return r
  }, x.pairs = function (e) {
    var t = x.keys(e), n = t.length, r = new Array(n);
    for (var i = 0; i < n; i++)r[i] = [t[i], e[t[i]]];
    return r
  }, x.invert = function (e) {
    var t = {}, n = x.keys(e);
    for (var r = 0, i = n.length; r < i; r++)t[e[n[r]]] = n[r];
    return t
  }, x.functions = x.methods = function (e) {
    var t = [];
    for (var n in e)x.isFunction(e[n]) && t.push(n);
    return t.sort()
  }, x.extend = function (e) {return T(u.call(arguments, 1), function (t) {if (t)for (var n in t)e[n] = t[n]}), e}, x.pick = function (e) {
    var t = {}, n = a.apply(r, u.call(arguments, 1));
    return T(n, function (n) {n in e && (t[n] = e[n])}), t
  }, x.omit = function (e) {
    var t = {}, n = a.apply(r, u.call(arguments, 1));
    for (var i in e)x.contains(n, i) || (t[i] = e[i]);
    return t
  }, x.defaults = function (e) {return T(u.call(arguments, 1), function (t) {if (t)for (var n in t)e[n] === void 0 && (e[n] = t[n])}), e}, x.clone = function (e) {return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e}, x.tap = function (e, t) {return t(e), e};
  var M = function (e, t, n, r) {
    if (e === t)return e !== 0 || 1 / e == 1 / t;
    if (e == null || t == null)return e === t;
    e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
    var i = f.call(e);
    if (i != f.call(t))return!1;
    switch (i) {
      case"[object String]":
        return e == String(t);
      case"[object Number]":
        return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
      case"[object Date]":
      case"[object Boolean]":
        return+e == +t;
      case"[object RegExp]":
        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
    }
    if (typeof e != "object" || typeof t != "object")return!1;
    var s = n.length;
    while (s--)if (n[s] == e)return r[s] == t;
    var o = e.constructor, u = t.constructor;
    if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u))return!1;
    n.push(e), r.push(t);
    var a = 0, l = !0;
    if (i == "[object Array]") {
      a = e.length, l = a == t.length;
      if (l)while (a--)if (!(l = M(e[a], t[a], n, r)))break
    } else {
      for (var c in e)if (x.has(e, c)) {
        a++;
        if (!(l = x.has(t, c) && M(e[c], t[c], n, r)))break
      }
      if (l) {
        for (c in t)if (x.has(t, c) && !(a--))break;
        l = !a
      }
    }
    return n.pop(), r.pop(), l
  };
  x.isEqual = function (e, t) {return M(e, t, [], [])}, x.isEmpty = function (e) {
    if (e == null)return!0;
    if (x.isArray(e) || x.isString(e))return e.length === 0;
    for (var t in e)if (x.has(e, t))return!1;
    return!0
  }, x.isElement = function (e) {return!!e && e.nodeType === 1}, x.isArray = w || function (e) {return f.call(e) == "[object Array]"}, x.isObject = function (e) {return e === Object(e)}, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {x["is" + e] = function (t) {return f.call(t) == "[object " + e + "]"}}), x.isArguments(arguments) || (x.isArguments = function (e) {return!!e && !!x.has(e, "callee")}), typeof /./ != "function" && (x.isFunction = function (e) {return typeof e == "function"}), x.isFinite = function (e) {return isFinite(e) && !isNaN(parseFloat(e))}, x.isNaN = function (e) {return x.isNumber(e) && e != +e}, x.isBoolean = function (e) {return e === !0 || e === !1 || f.call(e) == "[object Boolean]"}, x.isNull = function (e) {return e === null}, x.isUndefined = function (e) {return e === void 0}, x.has = function (e, t) {return l.call(e, t)}, x.noConflict = function () {return e._ = t, this}, x.identity = function (e) {return e}, x.times = function (e, t, n) {
    var r = Array(Math.max(0, e));
    for (var i = 0; i < e; i++)r[i] = t.call(n, i);
    return r
  }, x.random = function (e, t) {return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))};
  var _ = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
  _.unescape = x.invert(_.escape);
  var D = {escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"), unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")};
  x.each(["escape", "unescape"], function (e) {x[e] = function (t) {return t == null ? "" : ("" + t).replace(D[e], function (t) {return _[e][t]})}}), x.result = function (e, t) {
    if (e == null)return void 0;
    var n = e[t];
    return x.isFunction(n) ? n.call(e) : n
  }, x.mixin = function (e) {
    T(x.functions(e), function (t) {
      var n = x[t] = e[t];
      x.prototype[t] = function () {
        var e = [this._wrapped];
        return o.apply(e, arguments), F.call(this, n.apply(x, e))
      }
    })
  };
  var P = 0;
  x.uniqueId = function (e) {
    var t = ++P + "";
    return e ? e + t : t
  }, x.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
  var H = /(.)^/, B = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029"}, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  x.template = function (e, t, n) {
    var r;
    n = x.defaults({}, n, x.templateSettings);
    var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"), s = 0, o = "__p+='";
    e.replace(i, function (t, n, r, i, u) {return o += e.slice(s, u).replace(j, function (e) {return"\\" + B[e]}), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t}), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
    try {r = new Function(n.variable || "obj", "_", o)} catch (u) {throw u.source = o, u}
    if (t)return r(t, x);
    var a = function (e) {return r.call(this, e, x)};
    return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
  }, x.chain = function (e) {return x(e).chain()};
  var F = function (e) {return this._chain ? x(e).chain() : e};
  x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
    var t = r[e];
    x.prototype[e] = function () {
      var n = this._wrapped;
      return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
    }
  }), T(["concat", "join", "slice"], function (e) {
    var t = r[e];
    x.prototype[e] = function () {return F.call(this, t.apply(this._wrapped, arguments))}
  }), x.extend(x.prototype, {chain: function () {return this._chain = !0, this}, value: function () {return this._wrapped}})
}.call(this), define("Underscore", function (e) {return function () {return e._}}(this)), function () {
  var e = this, t = e.Backbone, n = Array.prototype.slice, r = Array.prototype.splice, i;
  typeof exports != "undefined" ? i = exports : i = e.Backbone = {}, i.VERSION = "0.9.2";
  var s = e._;
  !s && typeof require != "undefined" && (s = require("underscore"));
  var o = e.jQuery || e.Zepto || e.ender;
  i.setDomLibrary = function (e) {o = e}, i.noConflict = function () {return e.Backbone = t, this}, i.emulateHTTP = !1, i.emulateJSON = !1;
  var u = /\s+/, a = i.Events = {on: function (e, t, n) {
    var r, i, s, o, a;
    if (!t)return this;
    e = e.split(u), r = this._callbacks || (this._callbacks = {});
    while (i = e.shift())a = r[i], s = a ? a.tail : {}, s.next = o = {}, s.context = n, s.callback = t, r[i] = {tail: o, next: a ? a.next : s};
    return this
  }, off: function (e, t, n) {
    var r, i, o, a, f, l;
    if (!(i = this._callbacks))return;
    if (!(e || t || n))return delete this._callbacks, this;
    e = e ? e.split(u) : s.keys(i);
    while (r = e.shift()) {
      o = i[r], delete i[r];
      if (!o || !t && !n)continue;
      a = o.tail;
      while ((o = o.next) !== a)f = o.callback, l = o.context, (t && f !== t || n && l !== n) && this.on(r, f, l)
    }
    return this
  }, trigger: function (e) {
    var t, r, i, s, o, a, f;
    if (!(i = this._callbacks))return this;
    a = i.all, e = e.split(u), f = n.call(arguments, 1);
    while (t = e.shift()) {
      if (r = i[t]) {
        s = r.tail;
        while ((r = r.next) !== s)r.callback.apply(r.context || this, f)
      }
      if (r = a) {
        s = r.tail, o = [t].concat(f);
        while ((r = r.next) !== s)r.callback.apply(r.context || this, o)
      }
    }
    return this
  }};
  a.bind = a.on, a.unbind = a.off;
  var f = i.Model = function (e, t) {
    var n;
    e || (e = {}), t && t.parse && (e = this.parse(e));
    if (n = C(this, "defaults"))e = s.extend({}, n, e);
    t && t.collection && (this.collection = t.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = s.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {silent: !0}), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = s.clone(this.attributes), this.initialize.apply(this, arguments)
  };
  s.extend(f.prototype, a, {changed: null, _silent: null, _pending: null, idAttribute: "id", initialize: function () {}, toJSON: function (e) {return s.clone(this.attributes)}, get: function (e) {return this.attributes[e]}, escape: function (e) {
    var t;
    if (t = this._escapedAttributes[e])return t;
    var n = this.get(e);
    return this._escapedAttributes[e] = s.escape(n == null ? "" : "" + n)
  }, has: function (e) {return this.get(e) != null}, set: function (e, t, n) {
    var r, i, o;
    s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n || (n = {});
    if (!r)return this;
    r instanceof f && (r = r.attributes);
    if (n.unset)for (i in r)r[i] = void 0;
    if (!this._validate(r, n))return!1;
    this.idAttribute in r && (this.id = r[this.idAttribute]);
    var u = n.changes = {}, a = this.attributes, l = this._escapedAttributes, c = this._previousAttributes || {};
    for (i in r) {
      o = r[i];
      if (!s.isEqual(a[i], o) || n.unset && s.has(a, i))delete l[i], (n.silent ? this._silent : u)[i] = !0;
      n.unset ? delete a[i] : a[i] = o, !s.isEqual(c[i], o) || s.has(a, i) != s.has(c, i) ? (this.changed[i] = o, n.silent || (this._pending[i] = !0)) : (delete this.changed[i], delete this._pending[i])
    }
    return n.silent || this.change(n), this
  }, unset: function (e, t) {return(t || (t = {})).unset = !0, this.set(e, null, t)}, clear: function (e) {return(e || (e = {})).unset = !0, this.set(s.clone(this.attributes), e)}, fetch: function (e) {
    e = e ? s.clone(e) : {};
    var t = this, n = e.success;
    return e.success = function (r, i, s) {
      if (!t.set(t.parse(r, s), e))return!1;
      n && n(t, r)
    }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e)
  }, save: function (e, t, n) {
    var r, o;
    s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n = n ? s.clone(n) : {};
    if (n.wait) {
      if (!this._validate(r, n))return!1;
      o = s.clone(this.attributes)
    }
    var u = s.extend({}, n, {silent: !0});
    if (r && !this.set(r, n.wait ? u : n))return!1;
    var a = this, f = n.success;
    n.success = function (e, t, i) {
      var o = a.parse(e, i);
      n.wait && (delete n.wait, o = s.extend(r || {}, o));
      if (!a.set(o, n))return!1;
      f ? f(a, e) : a.trigger("sync", a, e, n)
    }, n.error = i.wrapError(n.error, a, n);
    var l = this.isNew() ? "create" : "update", c = (this.sync || i.sync).call(this, l, this, n);
    return n.wait && this.set(o, u), c
  }, destroy: function (e) {
    e = e ? s.clone(e) : {};
    var t = this, n = e.success, r = function () {t.trigger("destroy", t, t.collection, e)};
    if (this.isNew())return r(), !1;
    e.success = function (i) {e.wait && r(), n ? n(t, i) : t.trigger("sync", t, i, e)}, e.error = i.wrapError(e.error, t, e);
    var o = (this.sync || i.sync).call(this, "delete", this, e);
    return e.wait || r(), o
  }, url: function () {
    var e = C(this, "urlRoot") || C(this.collection, "url") || k();
    return this.isNew() ? e : e + (e.charAt(e.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id)
  }, parse: function (e, t) {return e}, clone: function () {return new this.constructor(this.attributes)}, isNew: function () {return this.id == null}, change: function (e) {
    e || (e = {});
    var t = this._changing;
    this._changing = !0;
    for (var n in this._silent)this._pending[n] = !0;
    var r = s.extend({}, e.changes, this._silent);
    this._silent = {};
    for (var n in r)this.trigger("change:" + n, this, this.get(n), e);
    if (t)return this;
    while (!s.isEmpty(this._pending)) {
      this._pending = {}, this.trigger("change", this, e);
      for (var n in this.changed) {
        if (this._pending[n] || this._silent[n])continue;
        delete this.changed[n]
      }
      this._previousAttributes = s.clone(this.attributes)
    }
    return this._changing = !1, this
  }, hasChanged: function (e) {return arguments.length ? s.has(this.changed, e) : !s.isEmpty(this.changed)}, changedAttributes: function (e) {
    if (!e)return this.hasChanged() ? s.clone(this.changed) : !1;
    var t, n = !1, r = this._previousAttributes;
    for (var i in e) {
      if (s.isEqual(r[i], t = e[i]))continue;
      (n || (n = {}))[i] = t
    }
    return n
  }, previous: function (e) {return!arguments.length || !this._previousAttributes ? null : this._previousAttributes[e]}, previousAttributes: function () {return s.clone(this._previousAttributes)}, isValid: function () {return!this.validate(this.attributes)}, _validate: function (e, t) {
    if (t.silent || !this.validate)return!0;
    e = s.extend({}, this.attributes, e);
    var n = this.validate(e, t);
    return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0
  }});
  var l = i.Collection = function (e, t) {t || (t = {}), t.model && (this.model = t.model), t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {silent: !0, parse: t.parse})};
  s.extend(l.prototype, a, {model: f, initialize: function () {}, toJSON: function (e) {return this.map(function (t) {return t.toJSON(e)})}, add: function (e, t) {
    var n, i, o, u, a, f, l = {}, c = {}, h = [];
    t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
    for (n = 0, o = e.length; n < o; n++) {
      if (!(u = e[n] = this._prepareModel(e[n], t)))throw new Error("Can't add an invalid model to a collection");
      a = u.cid, f = u.id;
      if (l[a] || this._byCid[a] || f != null && (c[f] || this._byId[f])) {
        h.push(n);
        continue
      }
      l[a] = c[f] = u
    }
    n = h.length;
    while (n--)e.splice(h[n], 1);
    for (n = 0, o = e.length; n < o; n++)(u = e[n]).on("all", this._onModelEvent, this), this._byCid[u.cid] = u, u.id != null && (this._byId[u.id] = u);
    this.length += o, i = t.at != null ? t.at : this.models.length, r.apply(this.models, [i, 0].concat(e)), this.comparator && this.sort({silent: !0});
    if (t.silent)return this;
    for (n = 0, o = this.models.length; n < o; n++) {
      if (!l[(u = this.models[n]).cid])continue;
      t.index = n, u.trigger("add", u, this, t)
    }
    return this
  }, remove: function (e, t) {
    var n, r, i, o;
    t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
    for (n = 0, r = e.length; n < r; n++) {
      o = this.getByCid(e[n]) || this.get(e[n]);
      if (!o)continue;
      delete this._byId[o.id], delete this._byCid[o.cid], i = this.indexOf(o), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, o.trigger("remove", o, this, t)), this._removeReference(o)
    }
    return this
  }, push: function (e, t) {return e = this._prepareModel(e, t), this.add(e, t), e}, pop: function (e) {
    var t = this.at(this.length - 1);
    return this.remove(t, e), t
  }, unshift: function (e, t) {return e = this._prepareModel(e, t), this.add(e, s.extend({at: 0}, t)), e}, shift: function (e) {
    var t = this.at(0);
    return this.remove(t, e), t
  }, get: function (e) {return e == null ? void 0 : this._byId[e.id != null ? e.id : e]}, getByCid: function (e) {return e && this._byCid[e.cid || e]}, at: function (e) {return this.models[e]}, where: function (e) {
    return s.isEmpty(e) ? [] : this.filter(function (t) {
      for (var n in e)if (e[n] !== t.get(n))return!1;
      return!0
    })
  }, sort: function (e) {
    e || (e = {});
    if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
    var t = s.bind(this.comparator, this);
    return this.comparator.length == 1 ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this
  }, pluck: function (e) {return s.map(this.models, function (t) {return t.get(e)})}, reset: function (e, t) {
    e || (e = []), t || (t = {});
    for (var n = 0, r = this.models.length; n < r; n++)this._removeReference(this.models[n]);
    return this._reset(), this.add(e, s.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), this
  }, fetch: function (e) {
    e = e ? s.clone(e) : {}, e.parse === undefined && (e.parse = !0);
    var t = this, n = e.success;
    return e.success = function (r, i, s) {t[e.add ? "add" : "reset"](t.parse(r, s), e), n && n(t, r)}, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e)
  }, create: function (e, t) {
    var n = this;
    t = t ? s.clone(t) : {}, e = this._prepareModel(e, t);
    if (!e)return!1;
    t.wait || n.add(e, t);
    var r = t.success;
    return t.success = function (i, s, o) {t.wait && n.add(i, t), r ? r(i, s) : i.trigger("sync", e, s, t)}, e.save(null, t), e
  }, parse: function (e, t) {return e}, chain: function () {return s(this.models).chain()}, _reset: function (e) {this.length = 0, this.models = [], this._byId = {}, this._byCid = {}}, _prepareModel: function (e, t) {
    t || (t = {});
    if (e instanceof f)e.collection || (e.collection = this); else {
      var n = e;
      t.collection = this, e = new this.model(n, t), e._validate(e.attributes, t) || (e = !1)
    }
    return e
  }, _removeReference: function (e) {this == e.collection && delete e.collection, e.off("all", this._onModelEvent, this)}, _onModelEvent: function (e, t, n, r) {
    if ((e == "add" || e == "remove") && n != this)return;
    e == "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], this._byId[t.id] = t), this.trigger.apply(this, arguments)
  }});
  var c = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
  s.each(c, function (e) {l.prototype[e] = function () {return s[e].apply(s, [this.models].concat(s.toArray(arguments)))}});
  var h = i.Router = function (e) {e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)}, p = /:\w+/g, d = /\*\w+/g, v = /[-[\]{}()+?.,\\^$|#\s]/g;
  s.extend(h.prototype, a, {initialize: function () {}, route: function (e, t, n) {
    return i.history || (i.history = new m), s.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), i.history.route(e, s.bind(function (r) {
      var s = this._extractParameters(e, r);
      n && n.apply(this, s), this.trigger.apply(this, ["route:" + t].concat(s)), i.history.trigger("route", this, t, s)
    }, this)), this
  }, navigate: function (e, t) {i.history.navigate(e, t)}, _bindRoutes: function () {
    if (!this.routes)return;
    var e = [];
    for (var t in this.routes)e.unshift([t, this.routes[t]]);
    for (var n = 0, r = e.length; n < r; n++)this.route(e[n][0], e[n][1], this[e[n][1]])
  }, _routeToRegExp: function (e) {return e = e.replace(v, "\\$&").replace(p, "([^/]+)").replace(d, "(.*?)"), new RegExp("^" + e + "$")}, _extractParameters: function (e, t) {return e.exec(t).slice(1)}});
  var m = i.History = function () {this.handlers = [], s.bindAll(this, "checkUrl")}, g = /^[#\/]/, y = /msie [\w.]+/;
  m.started = !1, s.extend(m.prototype, a, {interval: 50, getHash: function (e) {
    var t = e ? e.location : window.location, n = t.href.match(/#(.*)$/);
    return n ? n[1] : ""
  }, getFragment: function (e, t) {
    if (e == null)if (this._hasPushState || t) {
      e = window.location.pathname;
      var n = window.location.search;
      n && (e += n)
    } else e = this.getHash();
    return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(g, "")
  }, start: function (e) {
    if (m.started)throw new Error("Backbone.history has already been started");
    m.started = !0, this.options = s.extend({}, {root: "/"}, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
    var t = this.getFragment(), n = document.documentMode, r = y.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
    r && (this.iframe = o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !r ? o(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
    var i = window.location, u = i.pathname == this.options.root;
    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !u)return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
    this._wantsPushState && this._hasPushState && u && i.hash && (this.fragment = this.getHash().replace(g, ""), window.history.replaceState({}, document.title, i.protocol + "//" + i.host + this.options.root + this.fragment));
    if (!this.options.silent)return this.loadUrl()
  }, stop: function () {o(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), m.started = !1}, route: function (e, t) {this.handlers.unshift({route: e, callback: t})}, checkUrl: function (e) {
    var t = this.getFragment();
    t == this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
    if (t == this.fragment)return!1;
    this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
  }, loadUrl: function (e) {
    var t = this.fragment = this.getFragment(e), n = s.any(this.handlers, function (e) {if (e.route.test(t))return e.callback(t), !0});
    return n
  }, navigate: function (e, t) {
    if (!m.started)return!1;
    if (!t || t === !0)t = {trigger: t};
    var n = (e || "").replace(g, "");
    if (this.fragment == n)return;
    this._hasPushState ? (n.indexOf(this.options.root) != 0 && (n = this.options.root + n), this.fragment = n, window.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n)) : this._wantsHashChange ? (this.fragment = n, this._updateHash(window.location, n, t.replace), this.iframe && n != this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, t.replace))) : window.location.assign(this.options.root + e), t.trigger && this.loadUrl(e)
  }, _updateHash: function (e, t, n) {n ? e.replace(e.toString().replace(/(javascript:|#).*$/, "") + "#" + t) : e.hash = t}});
  var b = i.View = function (e) {this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()}, w = /^(\S+)\s*(.*)$/, E = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
  s.extend(b.prototype, a, {tagName: "div", $: function (e) {return this.$el.find(e)}, initialize: function () {}, render: function () {return this}, remove: function () {return this.$el.remove(), this}, make: function (e, t, n) {
    var r = document.createElement(e);
    return t && o(r).attr(t), n && o(r).html(n), r
  }, setElement: function (e, t) {return this.$el && this.undelegateEvents(), this.$el = e instanceof o ? e : o(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this}, delegateEvents: function (e) {
    if (!e && !(e = C(this, "events")))return;
    this.undelegateEvents();
    for (var t in e) {
      var n = e[t];
      s.isFunction(n) || (n = this[e[t]]);
      if (!n)throw new Error('Method "' + e[t] + '" does not exist');
      var r = t.match(w), i = r[1], o = r[2];
      n = s.bind(n, this), i += ".delegateEvents" + this.cid, o === "" ? this.$el.bind(i, n) : this.$el.delegate(o, i, n)
    }
  }, undelegateEvents: function () {this.$el.unbind(".delegateEvents" + this.cid)}, _configure: function (e) {
    this.options && (e = s.extend({}, this.options, e));
    for (var t = 0, n = E.length; t < n; t++) {
      var r = E[t];
      e[r] && (this[r] = e[r])
    }
    this.options = e
  }, _ensureElement: function () {
    if (!this.el) {
      var e = C(this, "attributes") || {};
      this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1)
    } else this.setElement(this.el, !1)
  }});
  var S = function (e, t) {
    var n = N(this, e, t);
    return n.extend = this.extend, n
  };
  f.extend = l.extend = h.extend = b.extend = S;
  var x = {create: "POST", update: "PUT", "delete": "DELETE", read: "GET"};
  i.sync = function (e, t, n) {
    var r = x[e];
    n || (n = {});
    var u = {type: r, dataType: "json"};
    return n.url || (u.url = C(t, "url") || k()), !n.data && t && (e == "create" || e == "update") && (u.contentType = "application/json", u.data = JSON.stringify(t.toJSON())), i.emulateJSON && (u.contentType = "application/x-www-form-urlencoded", u.data = u.data ? {model: u.data} : {}), i.emulateHTTP && (r === "PUT" || r === "DELETE") && (i.emulateJSON && (u.data._method = r), u.type = "POST", u.beforeSend = function (e) {e.setRequestHeader("X-HTTP-Method-Override", r)}), u.type !== "GET" && !i.emulateJSON && (u.processData = !1), o.ajax(s.extend(u, n))
  }, i.wrapError = function (e, t, n) {return function (r, i) {i = r === t ? i : r, e ? e(t, i, n) : t.trigger("error", t, i, n)}};
  var T = function () {}, N = function (e, t, n) {
    var r;
    return t && t.hasOwnProperty("constructor") ? r = t.constructor : r = function () {e.apply(this, arguments)}, s.extend(r, e), T.prototype = e.prototype, r.prototype = new T, t && s.extend(r.prototype, t), n && s.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
  }, C = function (e, t) {return!e || !e[t] ? null : s.isFunction(e[t]) ? e[t]() : e[t]}, k = function () {throw new Error('A "url" property or function must be specified')}
}.call(this), define("backbone-raw", ["Underscore", "../jslib/jquery"], function (e) {return function () {return e.Backbone}}(this)), function (e) {
  var t, n, r;
  typeof window == "undefined" ? (t = require("underscore"), n = require("backbone"), r = module.exports = n) : (t = window._, n = window.Backbone, r = window), n.Relational = {showWarnings: !0}, n.Semaphore = {_permitsAvailable: null, _permitsUsed: 0, acquire: function () {
    if (this._permitsAvailable && this._permitsUsed >= this._permitsAvailable)throw new Error("Max permits acquired");
    this._permitsUsed++
  }, release: function () {
    if (this._permitsUsed === 0)throw new Error("All permits released");
    this._permitsUsed--
  }, isLocked: function () {return this._permitsUsed > 0}, setAvailablePermits: function (e) {
    if (this._permitsUsed > e)throw new Error("Available permits cannot be less than used permits");
    this._permitsAvailable = e
  }}, n.BlockingQueue = function () {this._queue = []}, t.extend(n.BlockingQueue.prototype, n.Semaphore, {_queue: null, add: function (e) {this.isBlocked() ? this._queue.push(e) : e()}, process: function () {while (this._queue && this._queue.length)this._queue.shift()()}, block: function () {this.acquire()}, unblock: function () {this.release(), this.isBlocked() || this.process()}, isBlocked: function () {return this.isLocked()}}), n.Relational.eventQueue = new n.BlockingQueue, n.Store = function () {this._collections = [], this._reverseRelations = [], this._subModels = [], this._modelScopes = [r]}, t.extend(n.Store.prototype, n.Events, {addModelScope: function (e) {this._modelScopes.push(e)}, addSubModels: function (e, t) {this._subModels.push({superModelType: t, subModels: e})}, setupSuperModel: function (e) {
    t.find(this._subModels, function (n) {
      return t.find(n.subModels, function (t, r) {
        var i = this.getObjectByName(t);
        if (e === i)return n.superModelType._subModels[r] = e, e._superModel = n.superModelType, e._subModelTypeValue = r, e._subModelTypeAttribute = n.superModelType.prototype.subModelTypeAttribute, !0
      }, this)
    }, this)
  }, addReverseRelation: function (e) {
    var n = t.any(this._reverseRelations, function (n) {return t.all(e, function (e, t) {return e === n[t]})});
    if (!n && e.model && e.type) {
      this._reverseRelations.push(e);
      var r = function (e, n) {e.prototype.relations || (e.prototype.relations = []), e.prototype.relations.push(n), t.each(e._subModels, function (e) {r(e, n)}, this)};
      r(e.model, e), this.retroFitRelation(e)
    }
  }, retroFitRelation: function (e) {
    var t = this.getCollection(e.model);
    t.each(function (t) {
      if (!(t instanceof e.model))return;
      new e.type(t, e)
    }, this)
  }, getCollection: function (e) {
    e instanceof n.RelationalModel && (e = e.constructor);
    var r = e;
    while (r._superModel)r = r._superModel;
    var i = t.detect(this._collections, function (e) {return e.model === r});
    return i || (i = this._createCollection(e)), i
  }, getObjectByName: function (e) {
    var n = e.split("."), r = null;
    return t.find(this._modelScopes, function (e) {
      r = t.reduce(n, function (e, t) {return e[t]}, e);
      if (r && r !== e)return!0
    }, this), r
  }, _createCollection: function (e) {
    var t;
    return e instanceof n.RelationalModel && (e = e.constructor), e.prototype instanceof n.RelationalModel && (t = new n.Collection, t.model = e, this._collections.push(t)), t
  }, resolveIdForItem: function (e, r) {
    var i = t.isString(r) || t.isNumber(r) ? r : null;
    return i == null && (r instanceof n.RelationalModel ? i = r.id : t.isObject(r) && (i = r[e.prototype.idAttribute])), i
  }, find: function (e, t) {
    var n = this.resolveIdForItem(e, t), r = this.getCollection(e);
    if (r) {
      var i = r.get(n);
      if (i instanceof e)return i
    }
    return null
  }, register: function (e) {
    var t = e.collection, n = this.getCollection(e);
    n && n.add(e), e.bind("destroy", this.unregister, this), e.collection = t
  }, update: function (e) {
    var t = this.getCollection(e);
    t._onModelEvent("change:" + e.idAttribute, e, t)
  }, unregister: function (e) {
    e.unbind("destroy", this.unregister);
    var t = this.getCollection(e);
    t && t.remove(e)
  }}), n.Relational.store = new n.Store, n.Relation = function (e, r) {
    this.instance = e, r = t.isObject(r) ? r : {}, this.reverseRelation = t.defaults(r.reverseRelation || {}, this.options.reverseRelation), this.reverseRelation.type = t.isString(this.reverseRelation.type) ? n[this.reverseRelation.type] || n.Relational.store.getObjectByName(this.reverseRelation.type) : this.reverseRelation.type, this.model = r.model || this.instance.constructor, this.options = t.defaults(r, this.options, n.Relation.prototype.options), this.key = this.options.key, this.keySource = this.options.keySource || this.key, this.keyDestination = this.options.keyDestination || this.options.keySource || this.key, this.relatedModel = this.options.relatedModel, t.isString(this.relatedModel) && (this.relatedModel = n.Relational.store.getObjectByName(this.relatedModel));
    if (!this.checkPreconditions())return!1;
    e && (this.keyContents = this.instance.get(this.keySource), this.key !== this.keySource && this.instance.unset(this.keySource, {silent: !0}), this.instance._relations.push(this)), !this.options.isAutoRelation && this.reverseRelation.type && this.reverseRelation.key && n.Relational.store.addReverseRelation(t.defaults({isAutoRelation: !0, model: this.relatedModel, relatedModel: this.model, reverseRelation: this.options}, this.reverseRelation)), t.bindAll(this, "_modelRemovedFromCollection", "_relatedModelAdded", "_relatedModelRemoved"), e && (this.initialize(), n.Relational.store.getCollection(this.instance).bind("relational:remove", this._modelRemovedFromCollection), n.Relational.store.getCollection(this.relatedModel).bind("relational:add", this._relatedModelAdded).bind("relational:remove", this._relatedModelRemoved))
  }, n.Relation.extend = n.Model.extend, t.extend(n.Relation.prototype, n.Events, n.Semaphore, {options: {createModels: !0, includeInJSON: !0, isAutoRelation: !1}, instance: null, key: null, keyContents: null, relatedModel: null, reverseRelation: null, related: null, _relatedModelAdded: function (e, t, n) {
    var r = this;
    e.queue(function () {r.tryAddRelated(e, n)})
  }, _relatedModelRemoved: function (e, t, n) {this.removeRelated(e, n)}, _modelRemovedFromCollection: function (e) {e === this.instance && this.destroy()}, checkPreconditions: function () {
    var e = this.instance, r = this.key, i = this.model, s = this.relatedModel, o = n.Relational.showWarnings && typeof console != "undefined";
    if (!i || !r || !s)return o && console.warn("Relation=%o; no model, key or relatedModel (%o, %o, %o)", this, i, r, s), !1;
    if (i.prototype instanceof n.RelationalModel) {
      if (s.prototype instanceof n.RelationalModel) {
        if (this instanceof n.HasMany && this.reverseRelation.type === n.HasMany)return o && console.warn("Relation=%o; relation is a HasMany, and the reverseRelation is HasMany as well.", this), !1;
        if (e && e._relations.length) {
          var u = t.any(e._relations, function (e) {
            var t = this.reverseRelation.key && e.reverseRelation.key;
            return e.relatedModel === s && e.key === r && (!t || this.reverseRelation.key === e.reverseRelation.key)
          }, this);
          if (u)return o && console.warn("Relation=%o between instance=%o.%s and relatedModel=%o.%s already exists", this, e, r, s, this.reverseRelation.key), !1
        }
        return!0
      }
      return o && console.warn("Relation=%o; relatedModel does not inherit from Backbone.RelationalModel (%o)", this, s), !1
    }
    return o && console.warn("Relation=%o; model does not inherit from Backbone.RelationalModel (%o)", this, e), !1
  }, setRelated: function (e, n) {this.related = e, this.instance.acquire(), this.instance.set(this.key, e, t.defaults(n || {}, {silent: !0})), this.instance.release()}, _isReverseRelation: function (e) {return e.instance instanceof this.relatedModel && this.reverseRelation.key === e.key && this.key === e.reverseRelation.key ? !0 : !1}, getReverseRelations: function (e) {
    var n = [], r = t.isUndefined(e) ? this.related && (this.related.models || [this.related]) : [e];
    return t.each(r, function (e) {t.each(e.getRelations(), function (e) {this._isReverseRelation(e) && n.push(e)}, this)}, this), n
  }, sanitizeOptions: function (e) {return e = e ? t.clone(e) : {}, e.silent && (e.silentChange = !0, delete e.silent), e}, unsanitizeOptions: function (e) {return e = e ? t.clone(e) : {}, e.silentChange && (e.silent = !0, delete e.silentChange), e}, destroy: function () {n.Relational.store.getCollection(this.instance).unbind("relational:remove", this._modelRemovedFromCollection), n.Relational.store.getCollection(this.relatedModel).unbind("relational:add", this._relatedModelAdded).unbind("relational:remove", this._relatedModelRemoved), t.each(this.getReverseRelations(), function (e) {e.removeRelated(this.instance)}, this)}}), n.HasOne = n.Relation.extend({options: {reverseRelation: {type: "HasMany"}}, initialize: function () {
    t.bindAll(this, "onChange"), this.instance.bind("relational:change:" + this.key, this.onChange);
    var e = this.findRelated({silent: !0});
    this.setRelated(e), t.each(this.getReverseRelations(), function (e) {e.addRelated(this.instance)}, this)
  }, findRelated: function (e) {
    var t = this.keyContents, n = null;
    return t instanceof this.relatedModel ? n = t : t && (n = this.relatedModel.findOrCreate(t, {create: this.options.createModels})), n
  }, onChange: function (e, r, i) {
    if (this.isLocked())return;
    this.acquire(), i = this.sanitizeOptions(i);
    var s = t.isUndefined(i._related), o = s ? this.related : i._related;
    if (s) {
      this.keyContents = r;
      if (r instanceof this.relatedModel)this.related = r; else if (r) {
        var u = this.findRelated(i);
        this.setRelated(u)
      } else this.setRelated(null)
    }
    o && this.related !== o && t.each(this.getReverseRelations(o), function (e) {e.removeRelated(this.instance, i)}, this), t.each(this.getReverseRelations(), function (e) {e.addRelated(this.instance, i)}, this);
    if (!i.silentChange && this.related !== o) {
      var a = this;
      n.Relational.eventQueue.add(function () {a.instance.trigger("update:" + a.key, a.instance, a.related, i)})
    }
    this.release()
  }, tryAddRelated: function (e, t) {
    if (this.related)return;
    t = this.sanitizeOptions(t);
    var r = this.keyContents;
    if (r) {
      var i = n.Relational.store.resolveIdForItem(this.relatedModel, r);
      e.id === i && this.addRelated(e, t)
    }
  }, addRelated: function (e, t) {
    if (e !== this.related) {
      var n = this.related || null;
      this.setRelated(e), this.onChange(this.instance, e, {_related: n})
    }
  }, removeRelated: function (e, t) {
    if (!this.related)return;
    if (e === this.related) {
      var n = this.related || null;
      this.setRelated(null), this.onChange(this.instance, e, {_related: n})
    }
  }}), n.HasMany = n.Relation.extend({collectionType: null, options: {reverseRelation: {type: "HasOne"}, collectionType: n.Collection, collectionKey: !0, collectionOptions: {}}, initialize: function () {
    t.bindAll(this, "onChange", "handleAddition", "handleRemoval", "handleReset"), this.instance.bind("relational:change:" + this.key, this.onChange), this.collectionType = this.options.collectionType, t.isString(this.collectionType) && (this.collectionType = n.Relational.store.getObjectByName(this.collectionType));
    if (!this.collectionType.prototype instanceof n.Collection)throw new Error("collectionType must inherit from Backbone.Collection");
    this.keyContents instanceof n.Collection ? this.setRelated(this._prepareCollection(this.keyContents)) : this.setRelated(this._prepareCollection()), this.findRelated({silent: !0})
  }, _getCollectionOptions: function () {return t.isFunction(this.options.collectionOptions) ? this.options.collectionOptions(this.instance) : this.options.collectionOptions}, _prepareCollection: function (e) {
    this.related && this.related.unbind("relational:add", this.handleAddition).unbind("relational:remove", this.handleRemoval).unbind("relational:reset", this.handleReset);
    if (!e || !(e instanceof n.Collection))e = new this.collectionType([], this._getCollectionOptions());
    e.model = this.relatedModel;
    if (this.options.collectionKey) {
      var t = this.options.collectionKey === !0 ? this.options.reverseRelation.key : this.options.collectionKey;
      e[t] && e[t] !== this.instance ? n.Relational.showWarnings && typeof console != "undefined" && console.warn("Relation=%o; collectionKey=%s already exists on collection=%o", this, t, this.options.collectionKey) : t && (e[t] = this.instance)
    }
    return e.bind("relational:add", this.handleAddition).bind("relational:remove", this.handleRemoval).bind("relational:reset", this.handleReset), e
  }, findRelated: function (e) {
    if (this.keyContents) {
      var r = [];
      this.keyContents instanceof n.Collection ? r = this.keyContents.models : (this.keyContents = t.isArray(this.keyContents) ? this.keyContents : [this.keyContents], t.each(this.keyContents, function (e) {
        var t = null;
        e instanceof this.relatedModel ? t = e : t = this.relatedModel.findOrCreate(e, {create: this.options.createModels}), t && !this.related.getByCid(t) && !this.related.get(t) && r.push(t)
      }, this)), r.length && (e = this.unsanitizeOptions(e), this.related.add(r, e))
    }
  }, onChange: function (e, r, i) {
    i = this.sanitizeOptions(i), this.keyContents = r, t.each(this.getReverseRelations(), function (e) {e.removeRelated(this.instance, i)}, this);
    if (r instanceof n.Collection)this._prepareCollection(r), this.related = r; else {
      var s;
      this.related instanceof n.Collection ? (s = this.related, s.remove(s.models)) : s = this._prepareCollection(), this.setRelated(s), this.findRelated(i)
    }
    t.each(this.getReverseRelations(), function (e) {e.addRelated(this.instance, i)}, this);
    var o = this;
    n.Relational.eventQueue.add(function () {!i.silentChange && o.instance.trigger("update:" + o.key, o.instance, o.related, i)})
  }, tryAddRelated: function (e, r) {
    r = this.sanitizeOptions(r);
    if (!this.related.getByCid(e) && !this.related.get(e)) {
      var i = t.any(this.keyContents, function (t) {
        var r = n.Relational.store.resolveIdForItem(this.relatedModel, t);
        return r && r === e.id
      }, this);
      i && this.related.add(e, r)
    }
  }, handleAddition: function (e, r, i) {
    if (!(e instanceof n.Model))return;
    i = this.sanitizeOptions(i), t.each(this.getReverseRelations(e), function (e) {e.addRelated(this.instance, i)}, this);
    var s = this;
    n.Relational.eventQueue.add(function () {!i.silentChange && s.instance.trigger("add:" + s.key, e, s.related, i)})
  }, handleRemoval: function (e, r, i) {
    if (!(e instanceof n.Model))return;
    i = this.sanitizeOptions(i), t.each(this.getReverseRelations(e), function (e) {e.removeRelated(this.instance, i)}, this);
    var s = this;
    n.Relational.eventQueue.add(function () {!i.silentChange && s.instance.trigger("remove:" + s.key, e, s.related, i)})
  }, handleReset: function (e, t) {
    t = this.sanitizeOptions(t);
    var r = this;
    n.Relational.eventQueue.add(function () {!t.silentChange && r.instance.trigger("reset:" + r.key, r.related, t)})
  }, addRelated: function (e, t) {
    var n = this;
    t = this.unsanitizeOptions(t), e.queue(function () {n.related && !n.related.getByCid(e) && !n.related.get(e) && n.related.add(e, t)})
  }, removeRelated: function (e, t) {t = this.unsanitizeOptions(t), (this.related.getByCid(e) || this.related.get(e)) && this.related.remove(e, t)}}), n.RelationalModel = n.Model.extend({relations: null, _relations: null, _isInitialized: !1, _deferProcessing: !1, _queue: null, subModelTypeAttribute: "type", subModelTypes: null, constructor: function (e, r) {
    var i = this;
    if (r && r.collection) {
      this._deferProcessing = !0;
      var s = function (e) {e === i && (i._deferProcessing = !1, i.processQueue(), r.collection.unbind("relational:add", s))};
      r.collection.bind("relational:add", s), t.defer(function () {s(i)})
    }
    this._queue = new n.BlockingQueue, this._queue.block(), n.Relational.eventQueue.block(), n.Model.apply(this, arguments), n.Relational.eventQueue.unblock()
  }, trigger: function (e) {
    if (e.length > 5 && "change" === e.substr(0, 6)) {
      var t = this, r = arguments;
      n.Relational.eventQueue.add(function () {n.Model.prototype.trigger.apply(t, r)})
    } else n.Model.prototype.trigger.apply(this, arguments);
    return this
  }, initializeRelations: function () {
    this.acquire(), this._relations = [], t.each(this.relations, function (e) {
      var r = t.isString(e.type) ? n[e.type] || n.Relational.store.getObjectByName(e.type) : e.type;
      r && r.prototype instanceof n.Relation ? new r(this, e) : n.Relational.showWarnings && typeof console != "undefined" && console.warn("Relation=%o; missing or invalid type!", e)
    }, this), this._isInitialized = !0, this.release(), this.processQueue()
  }, updateRelations: function (e) {
    this._isInitialized && !this.isLocked() && t.each(this._relations, function (t) {
      var n = this.attributes[t.key];
      t.related !== n && this.trigger("relational:change:" + t.key, this, n, e || {})
    }, this)
  }, queue: function (e) {this._queue.add(e)}, processQueue: function () {this._isInitialized && !this._deferProcessing && this._queue.isBlocked() && this._queue.unblock()}, getRelation: function (e) {return t.detect(this._relations, function (t) {if (t.key === e)return!0}, this)}, getRelations: function () {return this._relations}, fetchRelated: function (e, r, i) {
    r || (r = {});
    var s, o = [], u = this.getRelation(e), a = u && u.keyContents, f = a && t.select(t.isArray(a) ? a : [a], function (e) {
      var t = n.Relational.store.resolveIdForItem(u.relatedModel, e);
      return t && (i || !n.Relational.store.find(u.relatedModel, t))
    }, this);
    if (f && f.length) {
      var l = t.map(f, function (e) {
        var n;
        if (t.isObject(e))n = u.relatedModel.build(e); else {
          var r = {};
          r[u.relatedModel.prototype.idAttribute] = e, n = u.relatedModel.build(r)
        }
        return n
      }, this);
      u.related instanceof n.Collection && t.isFunction(u.related.url) && (s = u.related.url(l));
      if (s && s !== u.related.url()) {
        var c = t.defaults({error: function () {
          var e = arguments;
          t.each(l, function (t) {t.trigger("destroy", t, t.collection, r), r.error && r.error.apply(t, e)})
        }, url: s}, r, {add: !0});
        o = [u.related.fetch(c)]
      } else o = t.map(l, function (e) {
        var n = t.defaults({error: function () {e.trigger("destroy", e, e.collection, r), r.error && r.error.apply(e, arguments)}}, r);
        return e.fetch(n)
      }, this)
    }
    return o
  }, set: function (e, r, i) {
    n.Relational.eventQueue.block();
    var s;
    t.isObject(e) || e == null ? (s = e, i = r) : (s = {}, s[e] = r);
    var o = n.Model.prototype.set.apply(this, arguments);
    return!this._isInitialized && !this.isLocked() ? (this.constructor.initializeModelHierarchy(), n.Relational.store.register(this), this.initializeRelations()) : s && this.idAttribute in s && n.Relational.store.update(this), s && this.updateRelations(i), n.Relational.eventQueue.unblock(), o
  }, unset: function (e, t) {
    n.Relational.eventQueue.block();
    var r = n.Model.prototype.unset.apply(this, arguments);
    return this.updateRelations(t), n.Relational.eventQueue.unblock(), r
  }, clear: function (e) {
    n.Relational.eventQueue.block();
    var t = n.Model.prototype.clear.apply(this, arguments);
    return this.updateRelations(e), n.Relational.eventQueue.unblock(), t
  }, change: function (e) {
    var t = this, r = arguments;
    n.Relational.eventQueue.add(function () {n.Model.prototype.change.apply(t, r)})
  }, clone: function () {
    var e = t.clone(this.attributes);
    return t.isUndefined(e[this.idAttribute]) || (e[this.idAttribute] = null), t.each(this.getRelations(), function (t) {delete e[t.key]}), new this.constructor(e)
  }, toJSON: function () {
    if (this.isLocked())return this.id;
    this.acquire();
    var e = n.Model.prototype.toJSON.call(this);
    return this.constructor._superModel && !(this.constructor._subModelTypeAttribute in e) && (e[this.constructor._subModelTypeAttribute] = this.constructor._subModelTypeValue), t.each(this._relations, function (r) {
      var i = e[r.key];
      if (r.options.includeInJSON === !0)i && t.isFunction(i.toJSON) ? e[r.keyDestination] = i.toJSON() : e[r.keyDestination] = null; else if (t.isString(r.options.includeInJSON))i instanceof n.Collection ? e[r.keyDestination] = i.pluck(r.options.includeInJSON) : i instanceof n.Model ? e[r.keyDestination] = i.get(r.options.includeInJSON) : e[r.keyDestination] = null; else if (t.isArray(r.options.includeInJSON))if (i instanceof n.Collection) {
        var s = [];
        i.each(function (e) {
          var n = {};
          t.each(r.options.includeInJSON, function (t) {n[t] = e.get(t)}), s.push(n)
        }), e[r.keyDestination] = s
      } else if (i instanceof n.Model) {
        var s = {};
        t.each(r.options.includeInJSON, function (e) {s[e] = i.get(e)}), e[r.keyDestination] = s
      } else e[r.keyDestination] = null; else delete e[r.key];
      r.keyDestination !== r.key && delete e[r.key]
    }), this.release(), e
  }}, {setup: function (e) {
    this.prototype.relations = (this.prototype.relations || []).slice(0), this._subModels = {}, this._superModel = null, this.prototype.hasOwnProperty("subModelTypes") ? n.Relational.store.addSubModels(this.prototype.subModelTypes, this) : this.prototype.subModelTypes = null, t.each(this.prototype.relations, function (e) {
      e.model || (e.model = this);
      if (e.reverseRelation && e.model === this) {
        var r = !0;
        if (t.isString(e.relatedModel)) {
          var i = n.Relational.store.getObjectByName(e.relatedModel);
          r = i && i.prototype instanceof n.RelationalModel
        }
        var s = t.isString(e.type) ? n[e.type] || n.Relational.store.getObjectByName(e.type) : e.type;
        r && s && s.prototype instanceof n.Relation && new s(null, e)
      }
    }, this)
  }, build: function (e, t) {
    var n = this;
    this.initializeModelHierarchy();
    if (this._subModels && this.prototype.subModelTypeAttribute in e) {
      var r = e[this.prototype.subModelTypeAttribute], i = this._subModels[r];
      i && (n = i)
    }
    return new n(e, t)
  }, initializeModelHierarchy: function () {
    if (t.isUndefined(this._superModel) || t.isNull(this._superModel)) {
      n.Relational.store.setupSuperModel(this);
      if (this._superModel) {
        if (this._superModel.prototype.relations) {
          var e = t.any(this.prototype.relations, function (e) {return e.model && e.model !== this}, this);
          e || (this.prototype.relations = this._superModel.prototype.relations.concat(this.prototype.relations))
        }
      } else this._superModel = !1
    }
    this.prototype.subModelTypes && t.keys(this.prototype.subModelTypes).length !== t.keys(this._subModels).length && t.each(this.prototype.subModelTypes, function (e) {
      var t = n.Relational.store.getObjectByName(e);
      t && t.initializeModelHierarchy()
    })
  }, findOrCreate: function (e, r) {
    var i = n.Relational.store.find(this, e);
    if (t.isObject(e))if (i)i.set(e, r); else if (!r || r && r.create !== !1)i = this.build(e, r);
    return i
  }}), t.extend(n.RelationalModel.prototype, n.Semaphore), n.Collection.prototype.__prepareModel = n.Collection.prototype._prepareModel, n.Collection.prototype._prepareModel = function (e, t) {
    t || (t = {});
    if (e instanceof n.Model)e.collection || (e.collection = this); else {
      var r = e;
      t.collection = this, typeof this.model.build != "undefined" ? e = this.model.build(r, t) : e = new this.model(r, t), e._validate(e.attributes, t) || (e = !1)
    }
    return e
  };
  var i = n.Collection.prototype.__add = n.Collection.prototype.add;
  n.Collection.prototype.add = function (e, r) {
    r || (r = {}), t.isArray(e) || (e = [e]);
    var s = [];
    return t.each(e, function (e) {
      if (!(e instanceof n.Model)) {
        var t = n.Relational.store.find(this.model, e[this.model.prototype.idAttribute]);
        t ? (t.set(t.parse ? t.parse(e) : e, r), e = t) : e = n.Collection.prototype._prepareModel.call(this, e, r)
      }
      e instanceof n.Model && !this.get(e) && !this.getByCid(e) && s.push(e)
    }, this), s.length && (i.call(this, s, r), t.each(s, function (e) {this.trigger("relational:add", e, this, r)}, this)), this
  };
  var s = n.Collection.prototype.__remove = n.Collection.prototype.remove;
  n.Collection.prototype.remove = function (e, r) {return r || (r = {}), t.isArray(e) ? e = e.slice(0) : e = [e], t.each(e, function (e) {e = this.getByCid(e) || this.get(e), e instanceof n.Model && (s.call(this, e, r), this.trigger("relational:remove", e, this, r))}, this), this};
  var o = n.Collection.prototype.__reset = n.Collection.prototype.reset;
  n.Collection.prototype.reset = function (e, t) {return o.call(this, e, t), this.trigger("relational:reset", this, t), this};
  var u = n.Collection.prototype.__sort = n.Collection.prototype.sort;
  n.Collection.prototype.sort = function (e) {return u.call(this, e), this.trigger("relational:reset", this, e), this};
  var a = n.Collection.prototype.__trigger = n.Collection.prototype.trigger;
  n.Collection.prototype.trigger = function (e) {
    if (e === "add" || e === "remove" || e === "reset") {
      var t = this, r = arguments;
      n.Relational.eventQueue.add(function () {a.apply(t, r)})
    } else a.apply(this, arguments);
    return this
  }, n.RelationalModel.extend = function (e, t) {
    var r = n.Model.extend.apply(this, arguments);
    return r.setup(this), r
  }
}(), define("backbone-relational", ["backbone-raw"], function () {}), Backbone.Paginator = function (e, t, n) {
  var r = {};
  return r.version = "0.15", r.clientPager = e.Collection.extend({initialize: function () {this.useDiacriticsPlugin = !0, this.useLevenshteinPlugin = !0, this.sortColumn = "", this.sortDirection = "desc", this.lastSortColumn = "", this.fieldFilterRules = [], this.lastFieldFilterRules = [], this.filterFields = "", this.filterExpression = "", this.lastFilterExpression = ""}, sync: function (e, r, i) {
    var s = this;
    t.defaults(s.paginator_ui, {firstPage: 0, currentPage: 1, perPage: 5, totalPages: 10}), t.each(s.paginator_ui, function (e, n) {t.isUndefined(s[n]) && (s[n] = s.paginator_ui[n])});
    var o = {};
    t.each(s.server_api, function (e, n) {t.isFunction(e) && (e = t.bind(e, s), e = e()), o[n] = e});
    var u = t.clone(s.paginator_core);
    return t.each(u, function (e, n) {t.isFunction(e) && (e = t.bind(e, s), e = e()), u[n] = e}), u = t.defaults(u, {timeout: 25e3, cache: !1, type: "GET", dataType: "jsonp"}), u = t.extend(u, {jsonpCallback: "callback", data: decodeURIComponent(n.param(o)), processData: !1, url: t.result(u, "url")}, i), n.ajax(u)
  }, nextPage: function () {this.currentPage = ++this.currentPage, this.pager()}, previousPage: function () {this.currentPage = --this.currentPage || 1, this.pager()}, goTo: function (e) {e !== undefined && (this.currentPage = parseInt(e, 10), this.pager())}, howManyPer: function (e) {
    if (e !== undefined) {
      var t = this.perPage;
      this.perPage = parseInt(e, 10), this.currentPage = Math.ceil((t * (this.currentPage - 1) + 1) / e), this.pager()
    }
  }, setSort: function (e, t) {e !== undefined && t !== undefined && (this.lastSortColumn = this.sortColumn, this.sortColumn = e, this.sortDirection = t, this.pager(), this.info())}, setFieldFilter: function (e) {t.isEmpty(e) || (this.lastFieldFilterRules = this.fieldFilterRules, this.fieldFilterRules = e, this.pager(), this.info())}, doFakeFieldFilter: function (e) {
    if (!t.isEmpty(e)) {
      var n = this.lastFieldFilterRules, r = this.fieldFilterRules;
      this.lastFieldFilterRules = this.fieldFilterRules, this.fieldFilterRules = e, this.pager(), this.info();
      var i = this.models.length;
      return this.lastFieldFilterRules = n, this.fieldFilterRules = r, this.pager(), this.info(), i
    }
  }, setFilter: function (e, t) {e !== undefined && t !== undefined && (this.filterFields = e, this.lastFilterExpression = this.filterExpression, this.filterExpression = t, this.pager(), this.info())}, doFakeFilter: function (e, t) {
    if (e !== undefined && t !== undefined) {
      var n = this.filterFields, r = this.lastFilterExpression, i = this.filterExpression;
      this.filterFields = e, this.lastFilterExpression = this.filterExpression, this.filterExpression = t, this.pager(), this.info();
      var s = this.models.length;
      return this.filterFields = n, this.lastFilterExpression = r, this.filterExpression = i, this.pager(), this.info(), s
    }
  }, pager: function () {
    var e = this, n = this.perPage, r = (e.currentPage - 1) * n, i = r + n;
    e.origModels === undefined && (e.origModels = e.models), e.models = e.origModels, this.sortColumn !== "" && (e.models = e._sort(e.models, this.sortColumn, this.sortDirection)), t.isEmpty(this.fieldFilterRules) || (e.models = e._fieldFilter(e.models, this.fieldFilterRules)), this.filterExpression !== "" && (e.models = e._filter(e.models, this.filterFields, this.filterExpression));
    if (this.lastSortColumn !== this.sortColumn || this.lastFilterExpression !== this.filterExpression || !t.isEqual(this.fieldFilterRules, this.lastFieldFilterRules))r = 0, i = r + n, e.currentPage = 1, this.lastSortColumn = this.sortColumn, this.lastFieldFilterRules = this.fieldFilterRules, this.lastFilterExpression = this.filterExpression;
    e.sortedAndFilteredModels = e.models, e.reset(e.models.slice(r, i))
  }, _sort: function (e, t, n) {
    return e = e.sort(function (e, r) {
      var i = e.get(t), s = r.get(t);
      if (!i || !s)return 0;
      i = i.toString().toLowerCase(), s = s.toString().toLowerCase();
      if (n === "desc")if (!i.match(/[^\d\.]/) && i.match(/[\d\.]*/) && !s.match(/[^\d\.]/) && s.match(/[\d\.]*/)) {
        if (i - 0 < s - 0)return 1;
        if (i - 0 > s - 0)return-1
      } else {
        if (i < s)return 1;
        if (i > s)return-1
      } else if (!i.match(/[^\d\.]/) && i.match(/[\d\.]*/) && !s.match(/[^\d\.]/) && s.match(/[\d\.]*/)) {
        if (i - 0 < s - 0)return-1;
        if (i - 0 > s - 0)return 1
      } else {
        if (i < s)return-1;
        if (i > s)return 1
      }
      return 0
    }), e
  }, _fieldFilter: function (e, n) {
    if (t.isEmpty(n))return e;
    var r = [];
    return t.each(e, function (e) {
      var i = !0;
      t.each(n, function (n) {
        if (!i)return!1;
        i = !1;
        if (n.type === "function") {
          var r = t.wrap(n.value, function (t) {return t(e.get(n.field))});
          r() && (i = !0)
        } else n.type === "required" ? t.isEmpty(e.get(n.field).toString()) || (i = !0) : n.type === "min" ? !t.isNaN(Number(e.get(n.field))) && !t.isNaN(Number(n.value)) && Number(e.get(n.field)) >= Number(n.value) && (i = !0) : n.type === "max" ? !t.isNaN(Number(e.get(n.field))) && !t.isNaN(Number(n.value)) && Number(e.get(n.field)) <= Number(n.value) && (i = !0) : n.type === "range" ? !t.isNaN(Number(e.get(n.field))) && t.isObject(n.value) && !t.isNaN(Number(n.value.min)) && !t.isNaN(Number(n.value.max)) && Number(e.get(n.field)) >= Number(n.value.min) && Number(e.get(n.field)) <= Number(n.value.max) && (i = !0) : n.type === "minLength" ? e.get(n.field).toString().length >= n.value && (i = !0) : n.type === "maxLength" ? e.get(n.field).toString().length <= n.value && (i = !0) : n.type === "rangeLength" ? t.isObject(n.value) && !t.isNaN(Number(n.value.min)) && !t.isNaN(Number(n.value.max)) && e.get(n.field).toString().length >= n.value.min && e.get(n.field).toString().length <= n.value.max && (i = !0) : n.type === "oneOf" ? t.isArray(n.value) && t.include(n.value, e.get(n.field)) && (i = !0) : n.type === "equalTo" ? n.value === e.get(n.field) && (i = !0) : n.type === "pattern" ? e.get(n.field).toString().match(n.value) && (i = !0) : i = !1
      }), i && r.push(e)
    }), r
  }, _filter: function (n, r, i) {
    var s = this, o = {};
    t.isString(r) ? o[r] = {cmp_method: "regexp"} : t.isArray(r) ? t.each(r, function (e) {o[e] = {cmp_method: "regexp"}}) : t.each(r, function (e, n) {o[n] = t.defaults(e, {cmp_method: "regexp"})}), r = o, t.has(e.Paginator, "removeDiacritics") && s.useDiacriticsPlugin && (i = e.Paginator.removeDiacritics(i));
    if (i === "" || !t.isString(i))return n;
    var u = i.match(/\w+/ig), a = "(" + t.uniq(u).join("|") + ")", f = new RegExp(a, "igm"), l = [];
    return t.each(n, function (n) {
      var o = [];
      t.each(r, function (r, a) {
        var l = n.get(a);
        if (l) {
          var c = [];
          t.has(e.Paginator, "removeDiacritics") && s.useDiacriticsPlugin ? l = e.Paginator.removeDiacritics(l.toString()) : l = l.toString();
          if (r.cmp_method === "levenshtein" && t.has(e.Paginator, "levenshtein") && s.useLevenshteinPlugin) {
            var h = e.Paginator.levenshtein(l, i);
            t.defaults(r, {max_distance: 0}), h <= r.max_distance && (c = t.uniq(u))
          } else c = l.match(f);
          c = t.map(c, function (e) {return e.toString().toLowerCase()}), t.each(c, function (e) {o.push(e)})
        }
      }), o = t.uniq(t.without(o, "")), t.isEmpty(t.difference(u, o)) && l.push(n)
    }), l
  }, info: function () {
    var e = this, t = {}, n = e.sortedAndFilteredModels ? e.sortedAndFilteredModels.length : e.length, r = Math.ceil(n / e.perPage);
    return t = {totalUnfilteredRecords: e.origModels.length, totalRecords: n, currentPage: e.currentPage, perPage: this.perPage, totalPages: r, lastPage: r, previous: !1, next: !1, startRecord: n === 0 ? 0 : (e.currentPage - 1) * this.perPage + 1, endRecord: Math.min(n, e.currentPage * this.perPage)}, e.currentPage > 1 && (t.previous = e.currentPage - 1), e.currentPage < t.totalPages && (t.next = e.currentPage + 1), t.pageSet = e.setPagination(t), e.information = t, t
  }, setPagination: function (e) {
    var t = [], n = 0, r = 0, i = 3, s = i * 2, o = Math.ceil(e.totalRecords / e.perPage), u = -1;
    if (o > 1)if (o < 7 + s)for (n = 1, r = o; n <= r; n++)t.push(n); else if (o > 5 + s)if (e.currentPage < 1 + s)for (n = 1, r = 4 + s; n < r; n++)t.push(n); else if (o - s > e.currentPage && e.currentPage > s)for (n = e.currentPage - i; n <= e.currentPage + i; n++)t.push(n); else for (n = o - (2 + s); n <= o; n++)t.push(n);
    return t
  }}), r.requestPager = e.Collection.extend({sync: function (e, r, i) {
    var s = this;
    t.defaults(s.paginator_ui, {firstPage: 0, currentPage: 1, perPage: 5, totalPages: 10}), t.each(s.paginator_ui, function (e, n) {t.isUndefined(s[n]) && (s[n] = s.paginator_ui[n])});
    var o = {};
    t.each(s.server_api, function (e, n) {t.isFunction(e) && (e = t.bind(e, s), e = e()), o[n] = e});
    var u = t.clone(s.paginator_core);
    return t.each(u, function (e, n) {t.isFunction(e) && (e = t.bind(e, s), e = e()), u[n] = e}), u = t.defaults(u, {timeout: 25e3, cache: !1, type: "GET", dataType: "jsonp"}), i.data ? i.data = decodeURIComponent(n.param(t.extend(o, i.data))) : i.data = decodeURIComponent(n.param(o)), u = t.extend(u, {jsonpCallback: "callback", processData: !1, url: t.result(u, "url")}, i), n.ajax(u)
  }, requestNextPage: function (e) {
    if (this.currentPage !== undefined)return this.currentPage += 1, this.pager(e);
    var t = new n.Deferred;
    return t.reject(), t.promise()
  }, requestPreviousPage: function (e) {
    if (this.currentPage !== undefined)return this.currentPage -= 1, this.pager(e);
    var t = new n.Deferred;
    return t.reject(), t.promise()
  }, updateOrder: function (e) {e !== undefined && (this.sortField = e, this.pager())}, goTo: function (e, t) {
    if (e !== undefined)return this.currentPage = parseInt(e, 10), this.pager(t);
    var r = new n.Deferred;
    return r.reject(), r.promise()
  }, howManyPer: function (e) {e !== undefined && (this.currentPage = this.firstPage, this.perPage = e, this.pager())}, sort: function () {}, info: function () {
    var e = {totalRecords: this.totalRecords || 0, currentPage: this.currentPage, firstPage: this.firstPage, totalPages: this.totalPages, lastPage: this.totalPages, perPage: this.perPage};
    return this.information = e, e
  }, pager: function (e) {return t.isObject(e) || (e = {}), this.fetch(e)}}), r
}(Backbone, _, jQuery), define("backbone-paginator", ["backbone-raw"], function () {}), define("Backbone", ["backbone-raw", "backbone-relational", "backbone-paginator"], function (e) {return e}), define("PoE/Item/DisplayProperty/ValueStyle", [], function () {return{Default: 0, Augmented: 1, Unmet: 2, PhysicalDamage: 3, FireDamage: 4, ColdDamage: 5, LightningDamage: 6, ChaosDamage: 7, MagicItem: 8, RareItem: 9, UniqueItem: 10}}), define("PoE/Item/DisplayProperty/DisplayMode", [], function () {return{NameValue: 0, ValueName: 1, Progress: 2, Inject: 3}}), define("PoE/Item/FrameType", [], function () {return{Normal: 0, Magic: 1, Rare: 2, Unique: 3, Gem: 4, Currency: 5, Quest: 6}}), define("PoE/Item/Popup/Constants", [], function () {return{MinWidth: 262.88032454361, Padding: 6.0851926977688, MaxWidth: 547.66734279919, MaxDescriptionWidth: 365.11156186613}}), define("PoE/Item/Popup", ["Handlebars", "Backbone", "../jslib/jquery", "./DisplayProperty/ValueStyle", "./DisplayProperty/DisplayMode", "./FrameType", "./Popup/Constants"], function (e, t, n, r, i, s, o) {
  e.registerHelper("itemDisplayProperty", function (t, n) {
    var s = "", o = t.name, u = function (t) {
      var n;
      switch (t[1]) {
        default:
        case r.Default:
          n = "Default";
          break;
        case r.Augmented:
          n = "Augmented";
          break;
        case r.Unmet:
          n = "Unmet";
          break;
        case r.PhysicalDamage:
          n = "PhysicalDamage";
          break;
        case r.FireDamage:
          n = "FireDamage";
          break;
        case r.ColdDamage:
          n = "ColdDamage";
          break;
        case r.LightningDamage:
          n = "LightningDamage";
          break;
        case r.ChaosDamage:
          n = "ChaosDamage"
      }
      return'<span class="colour' + n + '">' + e.Utils.escapeExpression(t[0]) + "</span>"
    };
    o = o == "" ? "" : "<span>" + e.Utils.escapeExpression(o) + "</span>", t.displayMode == i.Progress && (s = '<span class="experienceBar"><span class="fill"><span style="width: ' + Math.round(t.progress * 100) + '%;"></span></span></span>');
    switch (t.displayMode) {
      case i.NameValue:
      case i.ValueName:
      case i.Progress:
        var a = "";
        for (var f = 0, l = t.values.length; f < l; ++f)a += (f > 0 ? ", " : "") + u(t.values[f]);
        t.displayMode == i.Progress && (o = ""), n = o == "" || a == "" ? "" : n, s += t.displayMode == i.ValueName ? a + n + o : o + n + a;
        break;
      case i.Inject:
        for (var f = 0, l = t.values.length; f < l; ++f)o = o.replace("%" + f, u(t.values[f]));
        s += o
    }
    return new e.SafeString(s)
  });
  var u = t.View.extend({initialize: function () {u.template === null && (u.template = e.compile(this.tpl)), this.template = u.template}, render: function () {
    var e = this.model.toJSON(), t = !1, n = function (n, r) {e[n] && (t && (e[r] = !0), t = !0)};
    e.identified || (e.unidentifiedText = "Unidentified"), e.corrupted && (e.corruptedText = "Corrupted"), e.duplicated && (e.duplicatedText = "Mirrored"), n("properties"), n("requirements", "sep1"), n("secDescrText", "sep2"), n("implicitMods", "sep3"), n("explicitMods", "sep4"), n("cosmeticMods", "sep5"), n("additionalProperties", "sep6"), n("nextLevelRequirements", "sep7"), n("unidentifiedText", "sep8"), n("corruptedText", "sep9"), n("duplicatedText", "sep10"), n("descrText", "sep11"), n("flavourText", "sep12"), this.$el.addClass("itemPopupContainer").addClass("newItemPopup");
    var r = "";
    switch (this.model.get("frameType")) {
      default:
      case s.Normal:
        r = "normalPopup";
        break;
      case s.Magic:
        r = "magicPopup";
        break;
      case s.Rare:
        r = "rarePopup";
        break;
      case s.Unique:
        r = "uniquePopup";
        break;
      case s.Gem:
        r = "gemPopup";
        break;
      case s.Currency:
        r = "currencyPopup";
        break;
      case s.Quest:
        r = "questPopup"
    }
    this.$el.addClass(r), e.name && e.typeLine && (e.headerTwoLine = !0), t && (e.hasContent = !0), e.requirements && e.requirements.length > 0 && (e.requirements[0].first = !0), e.nextLevelRequirements && e.nextLevelRequirements.length > 0 && (e.nextLevelRequirements[0].first = !0), this.$el.empty().html(this.template(e))
  }, updatePopupWidth: function () {
    this.$el.css("position", "relative"), this.$el.css("top", "0px"), this.$el.css("left", "0px"), this.$el.css("width", "auto");
    var e = this.$el.find(".itemName:first"), t = 0;
    this.$el.find(".lc").each(function () {
      var e = n(this), r = e.outerWidth(!0) + 2;
      r > t && (t = r)
    }), this.$el.find(".descrText span, .secDescrText span").each(function () {
      var e = n(this), r = e.outerWidth(!0);
      r > o.MaxDescriptionWidth && (r = o.MaxDescriptionWidth), r > t && (t = r)
    }), this.$el.width(t + this.$el.outerWidth(!0) - this.$el.outerWidth(!0))
  }, close: function () {this.remove(), this.off()}});
  return u.template = null, u.prototype.tpl = '         <div class="itemBoxContent">             <div class="itemHeader test {{#if headerTwoLine}}doubleLine{{/if}}">                 <span class="l"></span>                 {{#if name}}                 <div class="itemName">                     <span class="lc">{{name}}</span>                 </div>                 {{/if}}                 {{#if typeLine}}                 <div class="itemName typeLine">                     <span class="lc">{{typeLine}}</span>                 </div>                 {{/if}}                 <span class="r"></span>             </div>             {{#if hasContent}}             <div class="content">                {{#if properties}}                     {{#each properties}}                     <div class="displayProperty"><span class="lc">{{itemDisplayProperty this ": "}}</span></div>                    {{/each}}                 {{/if}}                 {{#if sep1}}<div class="separator"></div>{{/if}}                 {{#if requirements}}                     <div class="requirements"><span class="lc">                    {{#each requirements}}{{#if first}}Requires {{else}}, {{/if}}{{itemDisplayProperty this " "}}{{/each}}                     </span></div>                 {{/if}}                 {{#if sep2}}<div class="separator"></div>{{/if}}                 {{#if secDescrText}}                     <div class="secDescrText"><span>{{secDescrText}}</span></div>                 {{/if}}                 {{#if sep3}}<div class="separator"></div>{{/if}}                 {{#if implicitMods}}                     {{#each implicitMods}}<div class="implicitMod"><span class="lc">{{this}}</span></div>{{/each}}                 {{/if}}                 {{#if sep4}}<div class="separator"></div>{{/if}}                 {{#if explicitMods}}                     {{#each explicitMods}}<div class="explicitMod"><span class="lc">{{this}}</span></div>{{/each}}                 {{/if}}                 {{#if craftedMods}}                     {{#each craftedMods}}<div class="craftedMod"><span class="lc">{{this}}</span></div>{{/each}}                 {{/if}}                 {{#if sep5}}<div class="separator"></div>{{/if}}                 {{#if cosmeticMods}}                     {{#each cosmeticMods}}<div class="cosmeticMod"><span class="lc">{{this}}</span></div>{{/each}}                 {{/if}}                 {{#if sep6}}<div class="separator"></div>{{/if}}                 {{#if additionalProperties}}                     {{#each additionalProperties}}                     <div class="additionalProperty"><span class="lc">{{itemDisplayProperty this ": "}}</span></div>                    {{/each}}                 {{/if}}                 {{#if sep7}}<div class="separator"></div>{{/if}}                 {{#if nextLevelRequirements}}                 <div class="nextLevelRequirements"><span class="lc">Next Level:</span><br /><span class="lc">                    {{#each nextLevelRequirements}}{{#if first}}Requires {{else}}, {{/if}}{{itemDisplayProperty this " "}}{{/each}}                 </span></div>                 {{/if}}                 {{#if sep8}}<div class="separator"></div>{{/if}}                 {{#if unidentifiedText}}<div class="unmet"><span class="lc">{{unidentifiedText}}</span></div>{{/if}}                {{#if sep9}}<div class="separator"></div>{{/if}}                 {{#if corruptedText}}<div class="unmet"><span class="lc">{{corruptedText}}</span></div>{{/if}}                {{#if sep10}}<div class="separator"></div>{{/if}}                 {{#if duplicatedText}}<div class="augmented"><span class="lc">{{duplicatedText}}</span></div>{{/if}}                {{#if sep11}}<div class="separator"></div>{{/if}}                 {{#if descrText}}                 <div class="descrText"><span>{{descrText}}</span></div>                 {{/if}}                 {{#if sep12}}<div class="separator"></div>{{/if}}                 {{#if flavourText}}                     {{#each flavourText}}<div class="flavourText"><span class="lc">{{this}}</span></div>{{/each}}                 {{/if}}             </div>             {{/if}}        </div>     ', u
}), define("PoE/Geom/Point", [], function () {
  var e = function (e, t) {this.x = e === undefined ? 0 : e, this.y = t === undefined ? 0 : t};
  return e.prototype.scale = function (e) {this.x *= e, this.y *= e}, e.prototype.inverseTranslate = function (e) {this.x -= e.x, this.y -= e.y}, e.prototype.translateX = function (e) {return this.x += e, this}, e.prototype.translateY = function (e) {return this.y += e, this}, e.prototype.distTo = function (e) {return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2))}, e.prototype.angleTo = function (e) {return Math.atan2(e.y - this.y, e.x - this.x)}, e.prototype.clone = function () {return new e(this.x, this.y)}, e.prototype.toString = function () {return"(" + this.x + "," + this.y + ")"}, e.prototype.eq = function (e) {return this.x === e.x && this.y === e.y}, e.prototype.neq = function (e) {return!this.eq(e)}, e
}), define("PoE/Geom/Offset", [], function () {
  var e = function (e, t, n, r) {this.top = e, this.left = r, this.bottom = n, this.right = t};
  return e.getBoundsOffset = function (t, n) {return new e(t.tl.y - n.tl.y, t.br.x - n.br.x, t.br.y - n.br.y, t.tl.x - n.tl.x)}, e
}), define("PoE/Layout/Popup", ["PoE/Geom/Point", "PoE/Geom/Offset"], function (e, t) {
  var n = {makePopup: function (e) {
    if (n.popupContainerEl === undefined) {
      var t = $("#poe-popup-container");
      t.length == 0 && (t = $('<div id="poe-item-popup-container" style="position: absolute; width: 800px; left: -1000px"></div>'), $("body").append(t)), n.popupContainerEl = t
    }
    n.popupContainerEl.append(e)
  }};
  return n
}), define("PoE/Geom/Bounds", ["./Point", "./Offset"], function (e, t) {
  var n = function (t, n) {this.tl = t === undefined ? new e : t, this.br = n === undefined ? new e : n};
  return n.prototype.top = function () {return this.tl.y}, n.prototype.bottom = function () {return this.br.y}, n.prototype.left = function () {return this.tl.x}, n.prototype.right = function () {return this.br.x}, n.prototype.centerAt = function (e) {
    var t = this.width() / 2, n = this.height() / 2;
    this.tl.x = e.x - t, this.tl.y = e.y - n, this.br.x = e.x + t, this.br.y = e.y + n
  }, n.prototype.width = function (e) {return e !== undefined ? (this.br.x = this.tl.x + e, this) : this.br.x - this.tl.x}, n.prototype.height = function (e) {return e !== undefined ? (this.br.y = this.tl.y + e, this) : this.br.y - this.tl.y}, n.prototype.scale = function () {this.tl.scale(), this.br.scale()}, n.prototype.contains = function (e) {return this.containsCoords(e.x, e.y)}, n.prototype.containsCoords = function (e, t) {return e >= this.tl.x && e <= this.br.x && t >= this.tl.y && t <= this.br.y}, n.prototype.containsBounds = function (e) {return this.contains(e.tl) && this.contains(e.br)}, n.prototype.translateX = function (e) {return this.tl.translateX(e), this.br.translateX(e), this}, n.prototype.translateY = function (e) {return this.tl.translateY(e), this.br.translateY(e), this}, n.prototype.grow = function (e) {this.tl.x -= e, this.tl.y -= e, this.br.x += e, this.br.y += e}, n.prototype.tr = function () {return new e(this.br.x, this.tl.y)}, n.prototype.bl = function () {return new e(this.tl.x, this.br.y)}, n.prototype.intersectionPoint = function (t, n, r) {
    var i = function (e, t) {
      var n = t.y - e.y, r = e.x - t.x, i = n * e.x + r * e.y;
      return{A: n, B: r, C: i, point1: e, point2: t}
    }, s = function (e, t) {return e.A * t.B - t.A * e.B}, o = function (t, n) {
      var i = s(t, n);
      if (i == 0)return!1;
      var o = function (e, t) {
        var n = Math.min(t.point1.x, t.point2.x), i = Math.max(t.point1.x, t.point2.x), s = Math.min(t.point1.y, t.point2.y), o = Math.max(t.point1.y, t.point2.y);
        return e.x >= n - r && e.x <= i + r && e.y >= s - r && e.y <= o + r
      }, u = new e((n.B * t.C - t.B * n.C) / i, (t.A * n.C - n.A * t.C) / i);
      return!o(u, t) || !o(u, n) ? !1 : u
    }, u = this.tl, a = this.tr(), f = this.bl(), l = this.br, c = i(t, n), h = o(i(u, a), c);
    return h !== !1 ? h : (h = o(i(a, l), c), h !== !1 ? h : (h = o(i(f, l), c), h !== !1 ? h : (h = o(i(u, f), c), h !== !1 ? h : !1)))
  }, n.prototype.clone = function () {return new n(this.tl.clone(), this.br.clone())}, n.prototype.toString = function () {return"Bounds(" + this.tl + ", " + this.br + ")"}, n.prototype.positionAbove = function (e) {e instanceof n && this.translateY(e.tl.y - this.br.y)}, n.prototype.positionBelow = function (e) {e instanceof n && this.translateY(e.br.y - this.tl.y)}, n.prototype.positionLeft = function (e) {e instanceof n && this.translateX(e.tl.x - this.br.x)}, n.prototype.positionRight = function (e) {e instanceof n && this.translateX(e.br.x - this.tl.x)}, n.prototype.alignTop = function (e) {e instanceof n && this.translateY(e.tl.y - this.tl.y)}, n.prototype.positionTopLeftX = function (e) {
    var t = this.width();
    this.tl.x = e, this.width(t)
  }, n.prototype.positionTopLeftY = function (e) {
    var t = this.height();
    this.tl.y = e, this.height(t)
  }, n.prototype.positionAtXCenter = function (e) {e instanceof n && this.positionTopLeftX(e.tl.x + e.width() / 2 - this.width() / 2)}, n.prototype.positionAtYCenter = function (e) {e instanceof n && this.positionTopLeftY(e.tl.y + e.height() / 2 - this.height() / 2)}, n.prototype.positionInsideLeftEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    if (n.left >= 0)return;
    this.translateX(-n.left)
  }, n.prototype.positionInsideRightEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    if (n.right <= 0)return;
    this.translateX(-n.right)
  }, n.prototype.positionInsideTopEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    if (n.top >= 0)return;
    this.translateY(-n.top)
  }, n.prototype.positionInsideBottomEdge = function (e) {
    var n = t.getBoundsOffset(this, e);
    if (n.bottom >= 0)return;
    this.translateY(-n.bottom)
  }, n.prototype.fitsAbove = function (e, n) {
    var r = t.getBoundsOffset(e, n);
    return r.top >= this.height() && n.width() >= this.width()
  }, n.prototype.fitsRight = function (e, n) {
    var r = t.getBoundsOffset(e, n);
    return-r.right >= this.width() && n.height() >= this.height()
  }, n.prototype.fitsLeft = function (e, n) {
    var r = t.getBoundsOffset(e, n);
    return r.left >= this.width() && n.height() >= this.height()
  }, n.prototype.fitsBelow = function (e, n) {
    var r = t.getBoundsOffset(e, n);
    return-r.bottom >= this.height() && n.width() >= this.width()
  }, n.prototype.draw = function (e) {
    var t = this.clone();
    setTimeout(function () {
      var e = $("<div></div>").css("position", "absolute").width(t.width()).height(t.height()).css("top", t.top()).css("left", t.left()).css("background", "#33a").css("border", "1px solid #a33").css("opacity", ".6").css("z-index", 5e3);
      $("body").append(e), setTimeout(function () {e.fadeOut(3e3, function () {$(this).remove()})}, 3e3)
    }, 500)
  }, n.prototype.eq = function (e) {return this.tl.eq(e.tl) && this.br.eq(e.br)}, n.prototype.neq = function (e) {return!this.eq(e)}, n
}), define("PoE/Layout", ["PoE/Geom/Point", "PoE/Geom/Bounds", "PoE/Layout/Popup"], function (e, t, n) {
  var r = {smartPositionNextTo: function (e, t) {
    var n = r.getViewportBounds(), i = e.fitsAbove(t, n);
    if (!i && e.fitsRight(t, n)) {
      e.positionAbove(t), e.positionRight(t), e.positionInsideTopEdge(n);
      return
    }
    if (!i && e.fitsLeft(t, n)) {
      e.positionAbove(t), e.positionLeft(t), e.positionInsideTopEdge(n);
      return
    }
    if (!i && e.fitsBelow(t, n)) {
      e.positionBelow(t), e.positionAtXCenter(t), e.positionInsideLeftEdge(n), e.positionInsideRightEdge(n);
      return
    }
    e.positionAbove(t), e.positionAtXCenter(t), e.positionInsideRightEdge(n), e.positionInsideLeftEdge(n)
  }, getElementBounds: function (n) {
    var r = n.offset();
    return new t(new e(r.left, r.top), new e(r.left + n.outerWidth(!1), r.top + n.outerHeight(!1)))
  }, getViewportBounds: function () {
    var n = $(window), r = n.scrollLeft(), i = n.scrollTop();
    return new t(new e(r, i), new e(r + n.width(), i + n.height()))
  }, positionPopups: function (e, i, s) {
    var o = null, u = new t;
    s && s.mode !== undefined && (o = s.mode);
    var a = r.getElementBounds(i), f = r.getElementBounds(n.popupContainerEl);
    for (var l = 0, c = e.length; l < c; ++l) {
      var h = e[l], p = h.el.outerWidth(!0), d = h.el.outerHeight(!0);
      u.height(Math.max(d, u.height())), u.width(u.width() + p)
    }
    switch (o) {
      case"smart":
      default:
        r.smartPositionNextTo(u, a);
        break;
      case"below":
        u.positionBelow(a), u.positionAtXCenter(a);
        break;
      case"left":
        u.positionLeft(a), u.positionAtYCenter(a);
        break;
      case"rightTop":
        u.positionRight(a), u.alignTop(a)
    }
    u.translateX(-f.left()), u.translateY(-f.top());
    var v = u.left();
    for (var l = 0, c = e.length; l < c; ++l) {
      var h = e[l];
      h.el.css("left", v).css("top", u.top()), v += h.el.outerWidth(!0)
    }
  }};
  return r
}), define("PoE/Layout/Popup/Popup", ["PoE/Geom/Point", "PoE/Geom/Offset", "PoE/Layout/Popup", "PoE/Layout"], function (e, t, n, r) {
  var i = function (e, t) {
    this.init = function () {this.el = e instanceof jQuery ? e : $(e), this.events = {prePosition: function () {}}, this.isPopup = !1, this.widthFunc = t && t.widthFunc ? t.widthFunc : null, this.visible = !1}, this.create = function () {
      if (this.isPopup)return;
      n.makePopup(this.el), this.el.css("position", "absolute"), this.el.hide(), this.visible = !1, this.isPopup = !0
    }, this.smartPositionByEl = function (e) {
      this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute");
      var t = this;
      r.positionPopups([this], e, {mode: "smart"})
    }, this.positionBelowEl = function (e) {this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute"), r.positionPopups([this], e, {mode: "below"})}, this.positionLeftEl = function (e) {this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute"), r.positionPopups([this], e, {mode: "left"})}, this.positionRightTopEl = function (e) {this.create(), this.show(), this.events.prePosition(this), this.el.css("position", "absolute"), r.positionPopups([this], e, {mode: "rightTop"})}, this.isVisible = function () {return this.visible}, this.show = function () {this.visible = !0, this.el.show()}, this.hide = function () {this.visible = !1, this.el.hide()}, this.init()
  };
  return i
}), define("PoE/Layout/Popup/PopupGroup", ["PoE/Layout", "PoE/Geom/Offset"], function (e) {
  var t = function (e, t) {};
  return function (t) {
    this.popups = t, this.smartPositionByEl = function (n) {
      for (var r = 0, i = this.popups.length; r < i; ++r) {
        var s = this.popups[r];
        s.el.show(), s.events.prePosition(s), s.el.css("position", "absolute")
      }
      e.positionPopups(t, n, {mode: "smart"})
    }
  }
}), define("PoE/DOM/Util", ["../jslib/jquery"], function (e) {
  return{isNextSiblingTextNode: function (t) {
    if (t instanceof e) {
      if (t.length == 0)return!1;
      t = t[0]
    }
    var n = t.nextSibling;
    return n && n.nodeType == 3
  }, isPrevSiblingTextNode: function (t) {
    if (t instanceof e) {
      if (t.length == 0)return!1;
      t = t[0]
    }
    var n = t.previousSibling;
    return n && n.nodeType == 3
  }, getSelectedText: function (t) {
    t instanceof e && (t = t[0]);
    if ("selectionStart"in t) {
      var n = t.selectionStart, r = t.selectionEnd, i = r - n;
      return t.value.substr(n, i)
    }
    if (document.selection) {
      t.focus();
      var s = document.selection.createRange();
      return null == s ? "" : s.text
    }
    return""
  }}
}), define("PoE/Item/Item", ["Handlebars", "Backbone", "../jslib/jquery", "./Popup", "PoE/Layout/Popup/Popup", "PoE/Layout/Popup/PopupGroup", "PoE/Layout", "PoE/DOM/Util"], function (e, t, n, r, i, s, o, u) {
  var a = t.View.extend({initialize: function () {a.template === null && (a.template = e.compile(this.tpl)), this.template = a.template, this.state = {itemHovered: !1, inSocketHover: !1, showSocketKeyDown: !1}, this.options.enableVerified === undefined && (this.options.enableVerified = !1), this.options.enableLeague === undefined && (this.options.enableLeague = !1), this.options.showSockets === undefined && (this.options.showSockets = !1), this.leaguePopup = null, this.options.showSockets && this.$el.addClass("showSockets")}, events: {click: "itemClick"}, itemClick: function (e) {this.trigger("itemClick", this.model)}, render: function () {
    var e = this.model.toJSON();
    e.enableVerified = this.options.enableVerified, e.enableLeague = this.options.enableLeague, e.sockets = [];
    var t = this.model.get("sockets");
    e.numSockets = t.length;
    for (var o = 0, u = t.length - 1; o <= u; ++o) {
      var a = t[o], f = {index: o, str: a.attr == "S", dex: a.attr == "D", "int": a.attr == "I", gen: a.attr == "G", linkNext: o < u && a.group == t[o + 1].group, rightAlign: o >= 2 && o <= 3};
      e.sockets.push(f)
    }
    this.model.get("socketedItems").forEach(function (t) {
      var n = t.get("socket");
      e.sockets[n].socketed = !0, e.sockets[n].support = t.get("support"), t.get("colour") == "G" && (e.sockets[n].genGem = !0)
    }), this.$el.addClass("newItemContainer").addClass("iW" + this.model.get("w")).addClass("iH" + this.model.get("h")), this.$el.empty().html(this.template(e));
    var l = this, c = new r({model: this.model});
    c.render();
    var h = this.$el.find(".popupPlaceholder:first");
    h.replaceWith(c.$el), this.$socketsEl = this.$el.find(".sockets"), this.socketEls = this.$socketsEl.children(".socket"), this.socketPopups = [], this.options.enableLeague && (this.leaguePopup = new i(this.$el.find(".itemLeaguePopup:first")), this.leaguePopup.events.prePosition = function (e) {e.el.css("position", "relative"), e.el.css("float", "left"), e.el.width(e.el.width()), e.el.css("float", "none")}), this.model.get("socketedItems").forEach(function (e, t) {
      var s = new r({model: e}), o = e.get("socket");
      s.render(), l.$el.find(".socketPopups").append(s.$el);
      var u = new i(s.$el);
      u.events.prePosition = function (e) {return function () {e.updatePopupWidth()}}(s), l.socketPopups.push({view: s, popup: u, $socketEl: n(l.socketEls.get(o))})
    }), this.mainPopup = {view: c, popup: new i(c.$el)}, this.mainPopup.popup.events.prePosition = function () {return function () {l.mainPopup.view.updatePopupWidth()}}(), this.mainPopup.popup.create(), this.itemIconEl = this.$el.find(".icon:first"), this.$el.mouseover(function () {l.handleItemMouseover()}).mouseout(function () {l.handleItemMouseout()}), n(document).keydown(function (e) {return l.handleKeyDown(e)}).keyup(function (e) {return l.handleKeyUp(e)});
    for (var o = 0, p = l.socketPopups.length; o < p; ++o) {
      var d = l.socketPopups[o];
      d.popup.create(), d.$socketEl.mouseover(function (e) {
        return function (t) {
          l.state.inSocketHover = !0, n(this).addClass("socketHover"), l.hoverStart();
          var r = new s([l.mainPopup.popup, e.popup]);
          r.smartPositionByEl(l.$el)
        }
      }(d)).mouseout(function (e) {return function (t) {l.state.inSocketHover = !1, n(this).removeClass("socketHover"), e.popup.hide(), l.hoverEnd()}}(d))
    }
    this.$el.addClass("itemRendered"), this.trigger("render")
  }, handleKeyDown: function (e) {
    if (e.which == 18) {
      this.state.showSocketKeyDown = !0;
      if (this.state.itemHovered)return;
      return this.hideSockets(!1), !1
    }
  }, handleKeyUp: function (e) {
    if (e.which == 18) {
      this.state.showSocketKeyDown = !1;
      if (this.state.itemHovered)return;
      this.hideSockets(!0)
    }
  }, handleItemMouseover: function () {
    this.hoverStart(), this.hideSockets(!1);
    if (this.state.inSocketHover)return;
    this.mainPopup.popup.smartPositionByEl(this.$el)
  }, handleItemMouseout: function () {!this.state.inSocketHover && !this.state.showSocketKeyDown && this.hideSockets(!0), this.mainPopup.popup.hide(), this.hoverEnd()}, hoverStart: function () {this.state.itemHovered = !0, this.$el.addClass("hovered"), this.options.enableLeague && this.leaguePopup.positionBelowEl(this.$el)}, hoverEnd: function () {this.state.itemHovered = !1, this.$el.removeClass("hovered"), this.options.enableLeague && this.leaguePopup.hide()}, hideSockets: function (e) {e ? this.$socketsEl.hide() : this.$socketsEl.show()}, setPlaced: function (e, t) {this.$el.addClass("itemPlaced").addClass("ipW" + e).addClass("ipH" + t), this.model.get("identified") || this.$el.addClass("unidentified"), this.model.get("corrupted") && this.$el.addClass("corrupted")}, close: function () {
    this.remove(), this.off(), this.mainPopup.view.close();
    for (var e = 0, t = this.socketPopups.length; e < t; ++e)this.socketPopups[e].view.close()
  }});
  return a.template = null, a.prototype.tpl = ' 	<div class="popupPlaceholder"></div> 	<div class="socketPopups"></div> 	<div class="iconContainer"> 	 	<div class="icon"> 	 		<img src="{{icon}}" alt="" /> 			<div class="sockets numSockets{{numSockets}}"> 			{{#each sockets}} 			{{#if linkNext}}<div class="socketLink socketLink{{index}}"></div>{{/if}} 			<div class="socket{{#if rightAlign}} socketRight{{/if}}{{#if socketed}} socketed{{/if}}{{#if support}} socketSupport{{/if}}{{#if genGem}} genGem{{/if}}{{#if str}} socketStr{{/if}}{{#if dex}} socketDex{{/if}}{{#if int}} socketInt{{/if}}{{#if gen}} socketGen{{/if}}"></div> 			{{/each}} 			</div> 	 	</div> 		{{#if enableVerified}}{{#if verified}}<div class="verifiedStatus">Verified</div>{{/if}}{{/if}} 		{{#if enableLeague}}<div class="itemLeaguePopup">{{league}} league</div>{{/if}} 	</div> 	', a
}), define("PoE/BetaCountdown", ["plugins"], function (e) {
  return function (t, n) {
    this.countdownContEl = e(t), this.loadingEl = this.countdownContEl.find(".loading:first"), this.activeContainerEl = this.countdownContEl.find(".activeContainer:first"), this.countdownEl = this.countdownContEl.find(".countdown:first"), this.countdownLastEl = this.countdownContEl.find(".p1Status .lastInvite:first"), this.countdownNextEl = this.countdownContEl.find(".p1Status .nextInvite:first"), this.countdownLastNameEl = this.countdownLastEl.find(".name:first"), this.countdownNextNameEl = this.countdownNextEl.find(".name:first"), this.P2countdownLastEl = this.countdownContEl.find(".p2Status .lastInvite:first"), this.P2countdownNextEl = this.countdownContEl.find(".p2Status .nextInvite:first"), this.P2countdownLastNameEl = this.P2countdownLastEl.find(".name:first"), this.P2countdownNextNameEl = this.P2countdownNextEl.find(".name:first"), this.boxContainerEl = e(n), this.id = 0, this.intervalId = null, this.XHR = null, this.hasCountdown = !1, this.latestName = "", this.nextName = "", this.upcoming = [], this.upcomingIndex = 0, this.upcomingLen = 0, this.P2latestName = "", this.P2nextName = "", this.P2upcoming = [], this.P2upcomingIndex = 0, this.P2upcomingLen = 0;
    var r = this;
    this.init = function () {this.loading(!0), this.next(), setInterval(this.showNextUpcoming, 1500)}, this.showNextUpcoming = function () {
      if (r.upcoming === !1)return;
      var e = r.upcoming[r.upcomingIndex];
      if (e === undefined)return;
      r.nextName != e.name && (r.countdownNextNameEl.empty().hide().append(e.name).slideDown("fast"), r.nextName = e.name), ++r.upcomingIndex, r.upcomingIndex == r.upcomingLen && (r.upcomingIndex = 0);
      if (r.P2upcoming === !1)return;
      e = r.P2upcoming[r.P2upcomingIndex];
      if (e === undefined)return;
      r.P2nextName != e.name && (r.P2countdownNextNameEl.empty().hide().append(e.name).slideDown("fast"), r.P2nextName = e.name), ++r.P2upcomingIndex, r.P2upcomingIndex == r.P2upcomingLen && (r.P2upcomingIndex = 0)
    }, this.loading = function (e) {e ? (this.loadingEl.show(), this.activeContainerEl.hide()) : (this.loadingEl.hide(), this.activeContainerEl.show())}, this.expiry = function () {this.next()}, this.startInterval = function () {
      if (this.intervalId !== null)return;
      this.intervalId = setInterval(function (e) {return function () {e.next()}}(this), 3e3)
    }, this.endInterval = function () {
      if (this.intervalId === null)return;
      clearInterval(this.intervalId), this.intervalId = null
    }, this.countdown = function (e, t, n) {
      var r = 0;
      e !== !1 && this.latestName != e["name"] && (this.countdownLastNameEl.empty().hide().append(e.name).fadeIn(), this.latestName = e.name), t === !1 ? (this.nextName != "**NONE**" && (this.countdownNextNameEl.empty().hide().append('<span class="none">None</span>').fadeIn(), this.nextName = "**NONE**"), this.upcoming = !1, this.upcomingIndex = 0, this.upcomingLen = 0, this.startInterval()) : (this.upcomingIndex = 0, this.upcoming = t, this.upcomingLen = t.length, r = +n), r <= 0 && (r = 1), this.hasCountdown ? this.countdownEl.countdown("change", {until: r}) : (this.countdownEl.countdown({until: r, onExpiry: function (e) {return function () {e.expiry()}}(this)}), this.hasCountdown = !0)
    }, this.next = function () {
      if (this.XHR !== null)return;
      var t = this;
      this.XHR = e.ajax({url: "/scripts/beta-invite-query.php?mode=next", async: !0, cache: !1, dataType: "json", data: {id: this.id}, success: function (e) {
        t.endInterval();
        switch (e.action) {
          case"end":
            t.end();
            break;
          case"update":
            t.countdown(e.p1.last, e.p1.upcoming, e.p1.next_s), t.loading(!1)
        }
        t.XHR = null
      }, error: function (e, n, r) {t.endInterval(), t.end(), t.XHR = null}})
    }, this.end = function () {this.boxContainerEl.slideUp("fast", function () {e(this).remove()})}, this.checkName = function () {}, this.serverSync = function () {
      var t = null;
      return e.ajax({url: "/index/beta-invite-query/mode/sync", async: !1, dataType: "json", success: function (e) {t = new Date(e)}, error: function (e, n, r) {t = new Date}}), t
    }, this.init()
  }
}), define("PoE/Backbone/Model/Item/SocketedItem", ["Backbone"], function (e) {return e.RelationalModel.extend({})}), define("PoE/Backbone/Collection/Item/SocketedItemCollection", ["Backbone", "PoE/Backbone/Model/Item/SocketedItem"], function (e, t) {return e.Collection.extend({model: t})}), define("PoE/Backbone/Model/Item/Item", ["Backbone", "./SocketedItem", "PoE/Backbone/Collection/Item/SocketedItemCollection"], function (e, t, n) {
  return e.RelationalModel.extend({relations: [
    {type: e.HasMany, key: "socketedItems", relatedModel: t, collectionType: n}
  ]})
}), define("PoE/DOM/DeferredLoader", [], function () {
  var e = function (e) {
    this.threshold = e && e.threshold ? e.threshold : 0, this.jobs = [], this.$window = $(window), this.viewPort = {top: null, bottom: null};
    var t = this;
    this.updatePositions(), this.jobTimer = !1, this.$window.scroll(function () {this.jobTimer && clearTimeout(this.jobTimer), this.jobTimer = setTimeout(function () {t.processJobs()}, 500)})
  };
  return e.prototype.processJobs = function () {
    this.updatePositions();
    for (var e = this.jobs.length - 1; e >= 0; --e) {
      var t = this.jobs[e];
      this.processJob(t) && this.jobs.splice(e, 1)
    }
  }, e.prototype.updatePositions = function () {this.viewPort.top = this.$window.scrollTop(), this.viewPort.bottom = this.viewPort.top + this.$window.height()}, e.prototype.processJob = function (e) {
    if (e.acceptFunc && e.acceptFunc(e.element)) {
      var t = e.element.offset().top, n = t + e.element.height();
      if (t >= this.viewPort.top - this.threshold && n <= this.viewPort.bottom + this.threshold)return e.callback(), !0
    }
    return!1
  }, e.prototype.deferLoad = function (e, t, n) {
    var r = {element: e instanceof $ ? e : $(e), callback: t};
    n && n.acceptFunc && (r.acceptFunc = n.acceptFunc);
    if (this.processJob(r))return;
    this.jobs.push(r)
  }, e
}), define("PoE/Util/ThrottledExecutor", [], function () {
  var e = function (e) {this.throttle = e && e.throttle ? e.throttle : 1, this.threads = e && e.threads ? e.threads : 1, this.jitter = e && e.jitter ? e.jitter : 0, this.jobs = [], this.numThreads = 0};
  return e.prototype.execute = function (e) {this.numThreads < this.threads ? this.runThread(e) : this.jobs.push(e)}, e.prototype.processNextJob = function (e) {this.jobs.length > 0 && this.runThread(this.jobs.shift())}, e.prototype.runThread = function (e) {
    ++this.numThreads;
    var t = e(), n = this, r = $.Deferred();
    r.done(function () {setTimeout(function () {--n.numThreads, n.processNextJob()}, n.throttle + (n.jitter == 0 ? 0 : Math.floor(Math.random() * n.jitter + 1)))}), t && t.promise ? t.done(function () {r.resolve()}) : r.resolve()
  }, e
}), define("PoE/Item/LayoutManager", ["PoE/DOM/Util"], function (e) {
  var t = function () {
    var n = function (n) {
      var r = n.offset(), i = n.prev(), s = n.next(), o, u = function (e) {return e.hasClass("newItemContainer") || e.hasClass("itemFragment")}, a = function (e) {return e.hasClass("itemFragment")}, f = function (e) {return e.hasClass("itemRendered")}, l = function (e) {return e.hasClass("itemSmartLayoutStop")}, c = function (e) {return e.hasClass("itemSmartLayoutBreak")}, h = function (e, t) {e.attr("data-last-offset-top", t.top), e.attr("data-last-offset-left", t.left)}, p = function () {
        var e = $('<div class="itemSmartLayoutBreak itemSmartLayoutStop"></div>');
        return t.debug && e.css("background", "cyan").css("height", "2px"), e
      }, d = function () {
        var e = $('<div class="itemSmartLayoutBreak"></div>');
        return t.debug && e.css("background", "red").css("height", "2px"), e
      }, v = function (e, t) {return t.top > e.top || t.left < e.left}, m = function (e) {
        var n = e, r;
        for (; ;) {
          t.debug && (n.css("background", "green"), setTimeout(function (e) {return function () {e.css("background", "")}}(n), 5e3)), r = n.next();
          if (r.length == 0) {
            n.after(p());
            return
          }
          if (l(r))return;
          if (c(r)) {
            var i = n.offset(), s = n.data("last-offset-top"), o = n.data("last-offset-left"), a = r, m = a.data("last-offset-top");
            if (i.top == s && i.left == o)return;
            if (i.left == o)return;
            r = a.next();
            var g = r.offset();
            a.remove();
            var y = r.offset();
            if (g.top == y.top && g.left == y.left) {
              h(n, i);
              var b = d();
              r.before(b), h(b, b.offset());
              return
            }
            r = n
          } else {
            if (!u(r)) {
              r.before(p());
              return
            }
            if (!f(r))return;
            var i = n.offset(), g = r.offset();
            if (v(i, g)) {
              h(n, i);
              var b = d();
              r.before(b), h(b, b.offset());
              var w = r.offset();
              if (w.top == g.top && w.left == g.top)return
            }
          }
          n = r
        }
      };
      if (e.isPrevSiblingTextNode(n)) {
        n.before(p()), m(n);
        return
      }
      if (e.isNextSiblingTextNode(n)) {
        n.after(p()), m(n);
        return
      }
      if (i.length == 0) {
        m(n);
        return
      }
      if (!u(i) && !c(i)) {
        n.before(p()), m(n);
        return
      }
      m(i)
    };
    this.smartLayout = function (e) {e.on("render", function () {n(e.$el)})}
  };
  return t.debug = !1, t
}), define("PoE/Backbone/EventBus", ["Backbone", "Underscore"], function (e, t) {return t.extend({}, e.Events)}), define("PoE/Item/DeferredItemRenderer", ["PoE/Backbone/Model/Item/Item", "PoE/Item/Item", "PoE/DOM/DeferredLoader", "PoE/Util/ThrottledExecutor", "PoE/Item/LayoutManager", "PoE/Backbone/EventBus"], function (e, t, n, r, i, s) {
  var o = function (e) {this.config = e || []};
  return o.prototype.run = function () {
    var o = new n({threshold: 200}), u = new r({throttle: 4, threads: 6, jitter: 3}), a = new i;
    s.on("spoilerShow", function () {o.processJobs()});
    for (var f = 0, l = this.config.length; f < l; ++f) {
      var c = $("#item-fragment-" + this.config[f][0]), h = this.config[f][2], p = typeof h.enableSmartLayout == "undefined" ? !0 : h.enableSmartLayout, d = new t({el: c, enableVerified: typeof h.enableVerified == "undefined" ? !0 : h.enableVerified, enableLeague: typeof h.enableLeague == "undefined" ? !0 : h.enableLeague, showSockets: typeof h.showSockets == "undefined" ? !1 : h.showSockets, model: new e(this.config[f][1])});
      p && a.smartLayout(d), o.deferLoad(c, function (e) {return function () {u.execute(function () {e.render(), e.$el.removeClass("itemFragment")})}}(d), {acceptFunc: function (e) {return e.is(":visible")}})
    }
  }, o
}), define("PoE/Forum", ["../jslib/jquery", "PoE/Backbone/EventBus"], function (e, t) {
  window.POE = window.POE || {};
  var n = window.POE;
  n.Forum = {}, n.Forum.SpoilerClick = function (n) {
    var r = e(n), i = e(n).parent(), s = i.parent(), o = s.children(".spoilerContent:first");
    return s.hasClass("spoilerHidden") ? (r.val("Hide"), o.hide(), s.removeClass("spoilerHidden").addClass("spoilerVisible"), o.slideDown(400, function () {t.trigger("spoilerShow")})) : (r.val("Show"), o.fadeOut("fast", function () {s.removeClass("spoilerVisible").addClass("spoilerHidden")})), !1
  }, e(".report-post a").click(function (t) {
    var n = e(t.target).parent().data();
    e('#forum-report-box #forum-report-form input[name="reported_id"]').val(n.reportedid), e('#forum-report-box #forum-report-form input[name="forum_post_id"]').val(n.forumpostid), e("#forum-report-box #forum-report-form .reported_name").html(e(t.target).closest(".post_info_content").find(".post_by_account").find("a").eq(0).html().trim()), e('#forum-report-box #forum-report-form textarea[name="description"]').val(""), e('#forum-report-box #forum-report-form select[name="type"]').val(""), e(this).colorbox({width: "650px", height: "380px", href: "#forum-report-box", inline: !0, onComplete: function (t) {e("#colorbox").addClass("colorBoxTheme1"), e("#forum-report-box").show()}, onCleanup: function () {e("#forum-report-box").hide()}})
  }), e("#forum-report-form").submit(function (t) {
    var n = e(this).find('input[type="submit"]'), r = n.css("background"), i = n.css("color"), s = n.css("border-color"), o = n.css("padding-left"), u = n.val();
    n.prop("disabled", !0), n.css("background", "#1f202c url('/image/UI/loader/loading-1.gif?1375395152') no-repeat 3px 3px"), n.css("padding-left", "25px"), n.val("Submitting...");
    var a = e(this).serialize();
    e(this).find('select[name="type"]').val() ? e.ajax({url: "/api/report", type: "POST", dataType: "json", data: a, success: function (t) {n.css("background", "#173517"), n.css("color", "#86ff4d"), n.css("border-color", "#647a64"), n.css("padding-left", o), n.val("Submitted"), setTimeout(function () {e.colorbox.close(), n.css("background", r), n.css("color", i), n.css("border-color", s), n.val(u)}, 1500)}, complete: function () {setTimeout(function () {n.prop("disabled", !1)}, 1500)}}) : (alert("Please select a Report Type"), n.css("background", r), n.css("color", i), n.css("border-color", s), n.css("padding-left", o), n.val(u), n.prop("disabled", !1)), t.preventDefault()
  })
}), function (e) {
  function O(e, t, n, r) {
    var i = n.lang();
    return i[e].call ? i[e](n, r) : i[e][t]
  }

  function M(e, t) {return function (n) {return B(e.call(this, n), t)}}

  function _(e) {
    return function (t) {
      var n = e.call(this, t);
      return n + this.lang().ordinal(n)
    }
  }

  function D(e, t, n) {this._d = e, this._isUTC = !!t, this._a = e._a || null, this._lang = n || !1}

  function P(e) {
    var t = this._data = {}, n = e.years || e.y || 0, r = e.months || e.M || 0, i = e.weeks || e.w || 0, s = e.days || e.d || 0, o = e.hours || e.h || 0, u = e.minutes || e.m || 0, a = e.seconds || e.s || 0, f = e.milliseconds || e.ms || 0;
    this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, t.milliseconds = f % 1e3, a += H(f / 1e3), t.seconds = a % 60, u += H(a / 60), t.minutes = u % 60, o += H(u / 60), t.hours = o % 24, s += H(o / 24), s += i * 7, t.days = s % 30, r += H(s / 30), t.months = r % 12, n += H(r / 12), t.years = n, this._lang = !1
  }

  function H(e) {return e < 0 ? Math.ceil(e) : Math.floor(e)}

  function B(e, t) {
    var n = e + "";
    while (n.length < t)n = "0" + n;
    return n
  }

  function j(e, t, n) {
    var r = t._milliseconds, i = t._days, s = t._months, o;
    r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())))
  }

  function F(e) {return Object.prototype.toString.call(e) === "[object Array]"}

  function I(e, t) {
    var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, s;
    for (s = 0; s < n; s++)~~e[s] !== ~~t[s] && i++;
    return i + r
  }

  function q(e, t, n, r) {
    var i, s, o = [];
    for (i = 0; i < 7; i++)o[i] = e[i] = e[i] == null ? i === 2 ? 1 : 0 : e[i];
    return e[7] = o[7] = t, e[8] != null && (o[8] = e[8]), e[3] += n || 0, e[4] += r || 0, s = new Date(0), t ? (s.setUTCFullYear(e[0], e[1], e[2]), s.setUTCHours(e[3], e[4], e[5], e[6])) : (s.setFullYear(e[0], e[1], e[2]), s.setHours(e[3], e[4], e[5], e[6])), s._a = o, s
  }

  function R(e, n) {
    var r, i, o = [];
    !n && u && (n = require("./lang/" + e));
    for (r = 0; r < a.length; r++)n[a[r]] = n[a[r]] || s.en[a[r]];
    for (r = 0; r < 12; r++)i = t([2e3, r]), o[r] = new RegExp("^" + (n.months[r] || n.months(i, "")) + "|^" + (n.monthsShort[r] || n.monthsShort(i, "")).replace(".", ""), "i");
    return n.monthsParse = n.monthsParse || o, s[e] = n, n
  }

  function U(e) {
    var n = typeof e == "string" && e || e && e._lang || null;
    return n ? s[n] || R(n) : t
  }

  function z(e) {return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")}

  function W(e) {
    var t = e.match(l), n, r;
    for (n = 0, r = t.length; n < r; n++)A[t[n]] ? t[n] = A[t[n]] : t[n] = z(t[n]);
    return function (i) {
      var s = "";
      for (n = 0; n < r; n++)s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
      return s
    }
  }

  function X(e, t) {
    function r(t) {return e.lang().longDateFormat[t] || t}

    var n = 5;
    while (n-- && c.test(t))t = t.replace(c, r);
    return C[t] || (C[t] = W(t)), C[t](e)
  }

  function V(e) {
    switch (e) {
      case"DDDD":
        return v;
      case"YYYY":
        return m;
      case"S":
      case"SS":
      case"SSS":
      case"DDD":
        return d;
      case"MMM":
      case"MMMM":
      case"dd":
      case"ddd":
      case"dddd":
      case"a":
      case"A":
        return g;
      case"Z":
      case"ZZ":
        return y;
      case"T":
        return b;
      case"MM":
      case"DD":
      case"YY":
      case"HH":
      case"hh":
      case"mm":
      case"ss":
      case"M":
      case"D":
      case"d":
      case"H":
      case"h":
      case"m":
      case"s":
        return p;
      default:
        return new RegExp(e.replace("\\", ""))
    }
  }

  function $(e, t, n, r) {
    var i, s;
    switch (e) {
      case"M":
      case"MM":
        n[1] = t == null ? 0 : ~~t - 1;
        break;
      case"MMM":
      case"MMMM":
        for (i = 0; i < 12; i++)if (U().monthsParse[i].test(t)) {
          n[1] = i, s = !0;
          break
        }
        s || (n[8] = !1);
        break;
      case"D":
      case"DD":
      case"DDD":
      case"DDDD":
        t != null && (n[2] = ~~t);
        break;
      case"YY":
        n[0] = ~~t + (~~t > 70 ? 1900 : 2e3);
        break;
      case"YYYY":
        n[0] = ~~Math.abs(t);
        break;
      case"a":
      case"A":
        r.isPm = (t + "").toLowerCase() === "pm";
        break;
      case"H":
      case"HH":
      case"h":
      case"hh":
        n[3] = ~~t;
        break;
      case"m":
      case"mm":
        n[4] = ~~t;
        break;
      case"s":
      case"ss":
        n[5] = ~~t;
        break;
      case"S":
      case"SS":
      case"SSS":
        n[6] = ~~(("0." + t) * 1e3);
        break;
      case"Z":
      case"ZZ":
        r.isUTC = !0, i = (t + "").match(x), i && i[1] && (r.tzh = ~~i[1]), i && i[2] && (r.tzm = ~~i[2]), i && i[0] === "+" && (r.tzh = -r.tzh, r.tzm = -r.tzm)
    }
    t == null && (n[8] = !1)
  }

  function J(e, t) {
    var n = [0, 0, 1, 0, 0, 0, 0], r = {tzh: 0, tzm: 0}, i = t.match(l), s, o;
    for (s = 0; s < i.length; s++)o = (V(i[s]).exec(e) || [])[0], o && (e = e.slice(e.indexOf(o) + o.length)), A[i[s]] && $(i[s], o, n, r);
    return r.isPm && n[3] < 12 && (n[3] += 12), r.isPm === !1 && n[3] === 12 && (n[3] = 0), q(n, r.isUTC, r.tzh, r.tzm)
  }

  function K(e, t) {
    var n, r = e.match(h) || [], i, s = 99, o, u, a;
    for (o = 0; o < t.length; o++)u = J(e, t[o]), i = X(new D(u), t[o]).match(h) || [], a = I(r, i), a < s && (s = a, n = u);
    return n
  }

  function Q(e) {
    var t = "YYYY-MM-DDT", n;
    if (w.exec(e)) {
      for (n = 0; n < 4; n++)if (S[n][1].exec(e)) {
        t += S[n][0];
        break
      }
      return y.exec(e) ? J(e, t + " Z") : J(e, t)
    }
    return new Date(e)
  }

  function G(e, t, n, r, i) {
    var s = i.relativeTime[e];
    return typeof s == "function" ? s(t || 1, !!n, e, r) : s.replace(/%d/i, t || 1)
  }

  function Y(e, t, n) {
    var i = r(Math.abs(e) / 1e3), s = r(i / 60), o = r(s / 60), u = r(o / 24), a = r(u / 365), f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
    return f[2] = t, f[3] = e > 0, f[4] = n, G.apply({}, f)
  }

  function Z(e, n) {
    t.fn[e] = function (e) {
      var t = this._isUTC ? "UTC" : "";
      return e != null ? (this._d["set" + t + n](e), this) : this._d["get" + t + n]()
    }
  }

  function et(e) {t.duration.fn[e] = function () {return this._data[e]}}

  function tt(e, n) {t.duration.fn["as" + e] = function () {return+this / n}}

  var t, n = "1.7.2", r = Math.round, i, s = {}, o = "en", u = typeof module != "undefined" && module.exports, a = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"), f = /^\/?Date\((\-?\d+)/i, l = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g, c = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g, h = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, p = /\d\d?/, d = /\d{1,3}/, v = /\d{3}/, m = /\d{1,4}/, g = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i, y = /Z|[\+\-]\d\d:?\d\d/i, b = /T/i, w = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, E = "YYYY-MM-DDTHH:mm:ssZ", S = [
    ["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/],
    ["HH:mm:ss", /T\d\d:\d\d:\d\d/],
    ["HH:mm", /T\d\d:\d\d/],
    ["HH", /T\d\d/]
  ], x = /([\+\-]|\d\d)/gi, T = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), N = {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}, C = {}, k = "DDD w M D d".split(" "), L = "M D H h m s w".split(" "), A = {M: function () {return this.month() + 1}, MMM: function (e) {return O("monthsShort", this.month(), this, e)}, MMMM: function (e) {return O("months", this.month(), this, e)}, D: function () {return this.date()}, DDD: function () {
    var e = new Date(this.year(), this.month(), this.date()), t = new Date(this.year(), 0, 1);
    return~~((e - t) / 864e5 + 1.5)
  }, d: function () {return this.day()}, dd: function (e) {return O("weekdaysMin", this.day(), this, e)}, ddd: function (e) {return O("weekdaysShort", this.day(), this, e)}, dddd: function (e) {return O("weekdays", this.day(), this, e)}, w: function () {
    var e = new Date(this.year(), this.month(), this.date() - this.day() + 5), t = new Date(e.getFullYear(), 0, 4);
    return~~((e - t) / 864e5 / 7 + 1.5)
  }, YY: function () {return B(this.year() % 100, 2)}, YYYY: function () {return B(this.year(), 4)}, a: function () {return this.lang().meridiem(this.hours(), this.minutes(), !0)}, A: function () {return this.lang().meridiem(this.hours(), this.minutes(), !1)}, H: function () {return this.hours()}, h: function () {return this.hours() % 12 || 12}, m: function () {return this.minutes()}, s: function () {return this.seconds()}, S: function () {return~~(this.milliseconds() / 100)}, SS: function () {return B(~~(this.milliseconds() / 10), 2)}, SSS: function () {return B(this.milliseconds(), 3)}, Z: function () {
    var e = -this.zone(), t = "+";
    return e < 0 && (e = -e, t = "-"), t + B(~~(e / 60), 2) + ":" + B(~~e % 60, 2)
  }, ZZ: function () {
    var e = -this.zone(), t = "+";
    return e < 0 && (e = -e, t = "-"), t + B(~~(10 * e / 6), 4)
  }};
  while (k.length)i = k.pop(), A[i + "o"] = _(A[i]);
  while (L.length)i = L.pop(), A[i + i] = M(A[i], 2);
  A.DDDD = M(A.DDD, 3), t = function (n, r) {
    if (n === null || n === "")return null;
    var i, s;
    return t.isMoment(n) ? new D(new Date(+n._d), n._isUTC, n._lang) : (r ? F(r) ? i = K(n, r) : i = J(n, r) : (s = f.exec(n), i = n === e ? new Date : s ? new Date(+s[1]) : n instanceof Date ? n : F(n) ? q(n) : typeof n == "string" ? Q(n) : new Date(n)), new D(i))
  }, t.utc = function (e, n) {return F(e) ? new D(q(e, !0), !0) : (typeof e == "string" && !y.exec(e) && (e += " +0000", n && (n += " Z")), t(e, n).utc())}, t.unix = function (e) {return t(e * 1e3)}, t.duration = function (e, n) {
    var r = t.isDuration(e), i = typeof e == "number", s = r ? e._data : i ? {} : e, o;
    return i && (n ? s[n] = e : s.milliseconds = e), o = new P(s), r && (o._lang = e._lang), o
  }, t.humanizeDuration = function (e, n, r) {return t.duration(e, n === !0 ? null : n).humanize(n === !0 ? !0 : r)}, t.version = n, t.defaultFormat = E, t.lang = function (e, n) {
    var r;
    if (!e)return o;
    (n || !s[e]) && R(e, n);
    if (s[e]) {
      for (r = 0; r < a.length; r++)t[a[r]] = s[e][a[r]];
      t.monthsParse = s[e].monthsParse, o = e
    }
  }, t.langData = U, t.isMoment = function (e) {return e instanceof D}, t.isDuration = function (e) {return e instanceof P}, t.lang("en", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"}, meridiem: function (e, t, n) {return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"}, calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[last] dddd [at] LT", sameElse: "L"}, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, ordinal: function (e) {
    var t = e % 10;
    return~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th"
  }}), t.fn = D.prototype = {clone: function () {return t(this)}, valueOf: function () {return+this._d}, unix: function () {return Math.floor(+this._d / 1e3)}, toString: function () {return this._d.toString()}, toDate: function () {return this._d}, toArray: function () {
    var e = this;
    return[e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds(), !!this._isUTC]
  }, isValid: function () {return this._a ? this._a[8] != null ? !!this._a[8] : !I(this._a, (this._a[7] ? t.utc(this._a) : t(this._a)).toArray()) : !isNaN(this._d.getTime())}, utc: function () {return this._isUTC = !0, this}, local: function () {return this._isUTC = !1, this}, format: function (e) {return X(this, e ? e : t.defaultFormat)}, add: function (e, n) {
    var r = n ? t.duration(+n, e) : t.duration(e);
    return j(this, r, 1), this
  }, subtract: function (e, n) {
    var r = n ? t.duration(+n, e) : t.duration(e);
    return j(this, r, -1), this
  }, diff: function (e, n, i) {
    var s = this._isUTC ? t(e).utc() : t(e).local(), o = (this.zone() - s.zone()) * 6e4, u = this._d - s._d - o, a = this.year() - s.year(), f = this.month() - s.month(), l = this.date() - s.date(), c;
    return n === "months" ? c = a * 12 + f + l / 30 : n === "years" ? c = a + (f + l / 30) / 12 : c = n === "seconds" ? u / 1e3 : n === "minutes" ? u / 6e4 : n === "hours" ? u / 36e5 : n === "days" ? u / 864e5 : n === "weeks" ? u / 6048e5 : u, i ? c : r(c)
  }, from: function (e, n) {return t.duration(this.diff(e)).lang(this._lang).humanize(!n)}, fromNow: function (e) {return this.from(t(), e)}, calendar: function () {
    var e = this.diff(t().sod(), "days", !0), n = this.lang().calendar, r = n.sameElse, i = e < -6 ? r : e < -1 ? n.lastWeek : e < 0 ? n.lastDay : e < 1 ? n.sameDay : e < 2 ? n.nextDay : e < 7 ? n.nextWeek : r;
    return this.format(typeof i == "function" ? i.apply(this) : i)
  }, isLeapYear: function () {
    var e = this.year();
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
  }, isDST: function () {return this.zone() < t([this.year()]).zone() || this.zone() < t([this.year(), 5]).zone()}, day: function (e) {
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e == null ? t : this.add({d: e - t})
  }, startOf: function (e) {
    switch (e.replace(/s$/, "")) {
      case"year":
        this.month(0);
      case"month":
        this.date(1);
      case"day":
        this.hours(0);
      case"hour":
        this.minutes(0);
      case"minute":
        this.seconds(0);
      case"second":
        this.milliseconds(0)
    }
    return this
  }, endOf: function (e) {return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1)}, sod: function () {return this.clone().startOf("day")}, eod: function () {return this.clone().endOf("day")}, zone: function () {return this._isUTC ? 0 : this._d.getTimezoneOffset()}, daysInMonth: function () {return t.utc([this.year(), this.month() + 1, 0]).date()}, lang: function (t) {return t === e ? U(this) : (this._lang = t, this)}};
  for (i = 0; i < T.length; i++)Z(T[i].toLowerCase(), T[i]);
  Z("year", "FullYear"), t.duration.fn = P.prototype = {weeks: function () {return H(this.days() / 7)}, valueOf: function () {return this._milliseconds + this._days * 864e5 + this._months * 2592e6}, humanize: function (e) {
    var t = +this, n = this.lang().relativeTime, r = Y(t, !e, this.lang()), i = t <= 0 ? n.past : n.future;
    return e && (typeof i == "function" ? r = i(r) : r = i.replace(/%s/i, r)), r
  }, lang: t.fn.lang};
  for (i in N)N.hasOwnProperty(i) && (tt(i, N[i]), et(i.toLowerCase()));
  tt("Weeks", 6048e5), u && (module.exports = t), typeof ender == "undefined" && (this.moment = t), typeof define == "function" && define.amd && define("moment", [], function () {return t})
}.call(this), define("lib/moment/moment-1.7.2", function () {}), define("moment", ["lib/moment/moment-1.7.2"], function () {return moment}), define("PoE/Forum/AutosaveWatcher", ["require", "../jslib/jquery"], function (e) {
  var t = e("jquery");
  return function (e, n, r, i) {
    var s = this;
    this.$el = t(e), this.lastSaveCharLength = this.$el.val().length, this.currentCharLength = this.lastSaveCharLength, this.forceSaveChars = 5, this.forceSaveInterval = 1e4, this.dirty = !1, this.inputTimeout = null, this.inputSaveTimeout = 1e3, this.doSave = function () {s.lastSaveCharLength = s.currentCharLength, s.dirty = !1, r()}, this.$el.on("input", function () {n(), s.dirty = !0, s.currentCharLength = s.$el.val().length, s.inputTimeout !== null && clearTimeout(s.inputTimeout), s.inputTimeout = setTimeout(function () {Math.abs(s.currentCharLength - s.lastSaveCharLength) >= s.forceSaveChars && s.doSave(), s.inputTimeout = null}, s.inputSaveTimeout)}), setInterval(function () {s.dirty && s.doSave()}, this.forceSaveInterval)
  }
}), define("PoE/Forum/Autosave", ["require", "../jslib/jquery", "moment", "./AutosaveWatcher"], function (e) {
  var t = e("jquery"), n = e("moment"), r = e("./AutosaveWatcher");
  return function (e, i, s, o) {
    this.$status = t(e), this.$status.addClass("forumDraftStatus");
    var u = this;
    this.saving = !1, this.repeatSave = !1, this.$savingStatus = t('<div class="savingStatus">Saving draft.<span class="loading-inline"></span></div>'), this.$lastSaved = t('<div class="lastSave"></div>').hide(), this.$revertible = t('<a class="revertible" href="#">You are editing a saved draft. Click here to edit the original.</div>'), this.$savingStatus.hide(), o.revertible && (this.$status.append(this.$revertible), this.$revertible.on("click", function (e) {e.preventDefault(), o.revertible() && u.$revertible.remove()})), this.$status.append(this.$savingStatus).append(this.$lastSaved), this.modified = !1, this.lastSaveTime = null, this.showSaving = function (e) {return}, this.setLastSaved = function () {}, this.updateLastSaved = function () {u.$lastSaved.show(), u.$lastSaved.text("Draft " + (this.modified ? "out of sync" : "up to date") + "." + (this.lastSaveTime === null ? "" : " Saved at " + this.lastSaveTime.format("h:mm:ss a, MMMM Do YYYY")))}, this.save = function () {
      if (u.saving) {
        u.repeatSave = !0;
        return
      }
      u.modified = !1, u.showSaving(!0);
      var e = o.dataFactory();
      return u.saving = !0, t.ajax({url: o.url, type: "PUT", dataType: "json", data: JSON.stringify(e), contentType: "application/json", success: function (e) {u.lastSaveTime = n(), u.updateLastSaved()}, error: function () {}}).always(function () {u.showSaving(!1), u.saving = !1, u.repeatSave && (u.repeatSave = !1, u.save())})
    }, this.watchers = [];
    for (var a = 0, f = o.watch.length; a < f; ++a)this.watchers.push(new r(o.watch[a], function () {u.modified = !0, u.updateLastSaved()}, function () {return function () {u.save()}}(), {}))
  }
}), define("PoE/Forum/Thread/Autosave", ["require", "../jslib/jquery", "moment", "PoE/Forum/Autosave"], function (e) {
  var t = e("jquery"), n = e("moment"), r = e("PoE/Forum/Autosave");
  return function (e, n, i, s, o, u) {
    var a = t(n), f = t(e), l, c;
    switch (s) {
      case"new":
        l = "forumId";
        break;
      case"edit":
        l = "threadId";
        break;
      default:
        return
    }
    c = {url: "/api/forum/thread/draft", watch: [a, f], dataFactory: function () {
      var e = {};
      return e.content = a.val(), e.title = f.val(), e[l] = o, e
    }}, u.revertible && (c.revertible = function () {return confirm("Revert to original thread content?") ? (f.val(u.revertible.title), a.val(u.revertible.content), !0) : !1}), this.autosave = new r(i, s, o, c)
  }
}), define("PoE/Forum/Post/Autosave", ["require", "../jslib/jquery", "moment", "PoE/Forum/Autosave"], function (e) {
  var t = e("jquery"), n = e("moment"), r = e("PoE/Forum/Autosave");
  return function (e, n, i, s, o) {
    var u = t(e), a, f;
    switch (i) {
      case"new":
        a = "threadId";
        break;
      case"edit":
        a = "postId";
        break;
      default:
        return
    }
    f = {url: "/api/forum/post/draft", watch: [u], dataFactory: function () {
      var e = {};
      return e.content = u.val(), e[a] = s, e
    }}, o.revertible && (f.revertible = function () {return confirm("Revert to original post content?") ? (u.val(o.revertible.content), !0) : !1}), this.autosave = new r(n, i, s, f)
  }
}), define("PoE/Form", ["../jslib/jquery"], function (e) {
  window.POE = window.POE || {};
  var t = window.POE;
  t.Form = function (t, n, r) {
    this.formEl = t, this.submit = function () {this.formEl.submit()}, this.init = function () {
      var t = this;
      this.opts = {successFunc: function (e) {}, dataPreSubmitFunc: function (e) {}, url: "/"}, e.extend(this.opts, r), this.formEl.submit(function () {
        t.clearMessages();
        var r = {};
        for (var i = 0, s = n.length; i < s; ++i) {
          var o = n[i], u = t.getValue(o);
          if (u === null)continue;
          r[o] = u
        }
        return t.opts.dataPreSubmitFunc(r), e.ajax({url: t.opts.url, type: "POST", dataType: "json", data: r, success: function (e) {return function (t) {t.status ? e.opts.successFunc(t) : e.addMessages(t.messages)}}(t)}), !1
      })
    }, this.clearMessages = function () {this.formEl.find(".errors").remove()}, this.addMessages = function (t) {
      for (var r = 0, i = n.length; r < i; ++r) {
        var s = n[r], o = "";
        if (t[s] === undefined)continue;
        for (var u in t[s])o += "<li>" + t[s][u] + "</li>";
        var a = this.formEl.find('[name="' + s + '"]'), f = e('<ul class="errors">' + o + "</ul>").hide();
        a.parents("div.form-text-l:first").after(f)
      }
      this.formEl.find("ul.errors").fadeIn("fast")
    }, this.getValue = function (t) {
      var n = this.formEl.find('[name="' + t + '"]'), r = n.length, i = null;
      return r > 1 ? n.each(function (t, n) {n = e(n), n.is(":checkbox") ? n.is(":checked") && (i === null && (i = []), i.push(n.val())) : i.push(n.val())}) : i = n.val(), i
    }, this.init()
  }
}), define("PoE/PassiveSkillTree/ObjectList", [], function () {
  return function () {
    this.init = function () {this.objects = [], this.priorities = [], this.priorityToObjects = {}}, this.add = function (e, t) {t = t === undefined ? 0 : t, this.priorityToObjects[t] === undefined && (this.priorities.push(t), this.priorityToObjects[t] = [], this.priorities.sort(function (e, t) {return e - t})), this.priorityToObjects[t].push(e)}, this.remove = function (e) {
      var t = !1;
      for (var n in this.priorityToObjects) {
        var r = this.priorityToObjects[n];
        for (var i = r.length - 1; i >= 0; --i)r[i] === e && (r.splice(i, 1), t = !0)
      }
      return t
    }, this.foreachObject = function (e) {
      for (var t = 0, n = this.priorities.length; t < n; ++t) {
        var r = this.priorityToObjects[this.priorities[t]];
        for (var i = 0, s = r.length; i < s; ++i)e(r[i])
      }
    }, this.init()
  }
}), define("PoE/PassiveSkillTree/EventContainer", [], function () {return function () {this.init = function () {this.events = []}, this.trigger = function () {for (var e = 0, t = this.events.length; e < t; ++e)this.events[e]()}, this.add = function (e) {if (e instanceof Array)for (var t = 0, n = e.length; t < n; ++t)this.add(e[t]); else this.events.push(e)}, this.remove = function (e) {for (var t = 0; t < this.events.length; ++t)this.events[t] === e && this.events.splice(t, 1)}, this.init()}}), define("PoE/PassiveSkillTree/PassiveAllocation", [], function () {
  return function (e) {
    this.init = function () {this.skillTree = e, this.characterLevel = 100, this.extraSkillPoints = 21, this.numAllocatedSkills = 0, this.allocatedSkills = {}, this.canAllocateSkills = {}}, this.foreachAllocatedSkill = function (e) {for (var t in this.allocatedSkills)e(this.allocatedSkills[t])}, this.isAllocated = function (e) {return this.allocatedSkills[e.skill.getHash()] !== undefined}, this.loadHashArray = function (e) {
      this.reset();
      for (var t = 0, n = e.length; t < n; ++t) {
        var r = e[t], i = this.skillTree.getNode(r);
        ++this.numAllocatedSkills, this.allocatedSkills[r] = i, i.active = !0, this.passiveAllocated(i.skill)
      }
      this.recalcCanAllocateSkills(), this.skillTree.events.pointsChanged.trigger()
    }, this.allocate = function (e) {
      if (this.skillTree.readonly)return!1;
      if (this.allocatedSkills[e] !== undefined)return!1;
      if (this.getPassiveSkillPointsAvailable() == 0)return!1;
      var t = this.skillTree.getNode(e);
      return this.isAllowedAllocate(t) ? (++this.numAllocatedSkills, t.active = !0, this.allocatedSkills[e] = t, this.recalcCanAllocateSkills(), this.passiveAllocated(t.skill), this.skillTree.pushHistoryState(), this.skillTree.events.pointsChanged.trigger(), !0) : !1
    }, this.unallocate = function (e) {
      if (this.skillTree.readonly)return!1;
      var t = this.skillTree.getNode(e);
      return this.isAllocatedLeaf(t) ? (--this.numAllocatedSkills, t.active = !1, delete this.allocatedSkills[e], this.recalcCanAllocateSkills(), this.passiveUnallocated(t.skill), this.skillTree.pushHistoryState(), this.skillTree.events.pointsChanged.trigger(), !0) : !1
    }, this.isAllocatedLeaf = function (e) {
      if (!e.active)return!1;
      var t = [];
      return this.skillTree.visitNodes(this.skillTree.startNode, t, function (t) {return t.skill === null || t !== e && t.active}), t.length == this.numAllocatedSkills
    }, this.isAllowedAllocate = function (e) {
      if (e.active)return!1;
      if (e === this.skillTree.startNode)return!0;
      for (var t in e.outNodes) {
        var n = e.outNodes[t];
        if (n.active || n.isClassStartPosition(this.skillTree.characterClass))return!0
      }
      var r = this;
      return e.findNeighbourNode(function (e) {return e.active || e.isClassStartPosition(r.skillTree.characterClass)}) === !1 ? !1 : !0
    }, this.recalcCanAllocateSkills = function () {
      this.clearCanAllocateSkills();
      var e = this;
      for (var t in this.allocatedSkills) {
        var n = this.allocatedSkills[t];
        n.foreachNeighbourNode(function (t) {
          if (t.active || t.canAllocate)return;
          e.isAllowedAllocate(t) && (t.canAllocate = !0, e.canAllocateSkills[t.skill.getHash()] = t)
        })
      }
    }, this.clearCanAllocateSkills = function () {
      for (var e in this.canAllocateSkills) {
        var t = this.canAllocateSkills[e];
        t.canAllocate = !1
      }
    }, this.reset = function () {
      for (var e in this.allocatedSkills) {
        var t = this.allocatedSkills[e];
        t.active = !1, this.passiveUnallocated(t.skill)
      }
      this.clearCanAllocateSkills(), this.numAllocatedSkills = 0, this.allocatedSkills = {}, this.canAllocateSkills = {}, this.skillTree.events.pointsChanged.trigger()
    }, this.getTotalSkillPoints = function () {return this.extraSkillPoints + this.characterLevel - 1}, this.getPassiveSkillPointsAvailable = function () {return this.getTotalSkillPoints() - this.numAllocatedSkills}, this.passiveAllocated = function () {}, this.passiveUnallocated = function () {}, this.init()
  }
}), define("PoE/PassiveSkillTree/Stats", [], function () {return function () {this.init = function () {this.attributes = [0, 0, 0]}, this.getAttribute = function (e) {return this.attributes[e]}, this.setAttribute = function (e, t) {this.attributes[e] = t, this.statsChanged()}, this.addAttribute = function (e, t) {this.attributes[e] += t, this.statsChanged()}, this.subAttribute = function (e, t) {this.attributes[e] -= t, this.statsChanged()}, this.statsChanged = function () {}, this.init()}}), define("PoE/PassiveSkillTree/Skill", [], function () {
  var e = function (e) {this.init = function () {this.hash = null, this.icon = null, this.iconActiveSources = e.iconHighlighted, this.skillDescription = e.sd, this.displayName = e.dn, this.sa = e.sa, this.da = e.da, this.ia = e.ia, e.id !== undefined && (this.hash = e.id), e.icon !== undefined && (this.icon = e.icon)}, this.init()};
  return e.prototype.getHash = function () {return this.hash}, e
}), define("PoE/PassiveSkillTree/Node", ["./Skill"], function (e) {
  var t = function (t) {this.init = function () {this.group = null, this.orbit = t.o, this.orbitIndex = t.oidx, this.outNodes = {}, this.inNodes = {}, this.clickObj = null, this.keyStone = null, this.startPositionClasses = null, this.isClassStartNode = !1, this.notable = null, this.active = !1, this.canAllocate = !1, this.renderState = {hover: !1}, this.popup = null, this.clickable = null, this.similarNodeHighlighter = null, this.pathHighlighterGroup = null, t.ks !== null && (this.keyStone = t.ks), t.spc !== undefined && (this.startPositionClasses = t.spc, this.startPositionClasses.length > 0 && (this.isClassStartNode = !0)), t.not !== undefined && (this.notable = t.not), t.m !== undefined && (this.mastery = t.m), this.skill = new e(t)}, this.init()};
  return t.prototype.isClassStartPosition = function (e) {
    if (this.startPositionClasses === null)return!1;
    for (var t = 0, n = this.startPositionClasses.length; t != n; ++t)if (this.startPositionClasses[t] == e)return!0;
    return!1
  }, t.prototype.addOutNode = function (e) {this.outNodes[e.skill.getHash()] = e, e.addInNode(this)}, t.prototype.addInNode = function (e) {this.inNodes[e.skill.getHash()] = e}, t.prototype.setGroup = function (e) {this.group = e}, t.prototype.foreachOutNode = function (e) {for (var t in this.outNodes)e.call(this, this.outNodes[t])}, t.prototype.foreachInNode = function (e) {for (var t in this.inNodes)e.call(this, this.inNodes[t])}, t.prototype.foreachNeighbourNode = function (e) {this.foreachOutNode(e), this.foreachInNode(e)}, t.prototype.findNeighbourNode = function (e) {
    for (var t in this.outNodes)if (e.call(this, this.outNodes[t]))return this.outNodes[t];
    for (var t in this.inNodes)if (e.call(this, this.inNodes[t]))return this.inNodes[t];
    return!1
  }, t.prototype.isKeyStone = function () {return this.keyStone}, t.prototype.isMastery = function () {return this.mastery}, t
}), define("PoE/PassiveSkillTree/Group", [], function () {
  var e = function (e, t, n) {this.id = e, this.position = t, this.nodes = {}, this.occupiedOrbits = n};
  return e.prototype.addNode = function (e) {this.nodes[e.skill.getHash()] = e, e.setGroup(this)}, e.prototype.getId = function () {return this.id}, e.prototype.foreachNode = function (e) {for (var t in this.nodes)e.call(this, this.nodes[t])}, e.prototype.isOccupiedOrbit = function (e) {return this.occupiedOrbits[e] !== undefined}, e
}), define("PoE/PassiveSkillTree/Tile", [], function () {return function () {this.canvas = null, this.dirty = !0}}), define("PoE/PassiveSkillTree/Clickable", [], function () {
  var e = function (e) {this.bounds = e, this.mouseMoved = !1};
  return e.prototype.hitTest = function (e) {return this.bounds.contains(e.worldPosition)}, e.prototype.onclickTest = function (e) {return this.hitTest(e) ? (this.onclick(e), !0) : !1}, e.prototype.onmousemoveTest = function (e) {
    if (!this.hitTest(e))return!1;
    this.mouseMoved = !0, this.onmousemove(e)
  }, e.prototype.forceMouseOut = function () {
    if (!this.mouseMoved)return!1;
    this.mouseMoved = !1, this.onmouseout()
  }, e.prototype.onmouseoutTest = function (e) {
    if (!this.mouseMoved)return!1;
    if (this.hitTest(e))return!1;
    this.mouseMoved = !1, this.onmouseout()
  }, e.prototype.onclick = function (e) {}, e.prototype.onmousemove = function (e) {}, e.prototype.onmouseout = function (e) {}, e
}), define("PoE/PassiveSkillTree/BFS/PathIterator", [], function () {
  return function (e, t) {
    this.startNode = e, this.nodeRelationshipData = t, this.iterate = function (t) {
      var n = [], r = this.nodeRelationshipData[e.skill.getHash()].parents;
      n.push(e);
      var i = [];
      i.push(e), visited = {};
      while (i.length > 0) {
        var s = i.pop(), o = this.nodeRelationshipData[s.skill.getHash()], r = o.parents;
        for (var u = 0, a = r.length; u < a; ++u) {
          t(s, r[u], o.depth);
          if (visited[r[u].skill.getHash()] !== undefined)continue;
          visited[r[u].skill.getHash()] = !0, i.push(r[u]), n.push(r[u])
        }
      }
      return n
    }, this.getStartNodeDepth = function () {return this.nodeRelationshipData[this.startNode.skill.getHash()].depth}
  }
}), define("PoE/PassiveSkillTree/UtilityFunctions", [], function () {
  return{calculateLerpPosition: function (e, t, n) {
    var r = t - e, i = r / n;
    return i
  }, calculateFlipPosition: function (e, t, n) {
    var r = t - e, i = r / n, s = parseInt(i) % 2, o = i % 1;
    return s == 0 ? o : 1 - o
  }}
}), define("PoE/PassiveSkillTree/RGBA", ["./UtilityFunctions"], function (e) {
  var t = function (n, r, i, s) {
    this.r = n || 0, this.g = r || 0, this.b = i || 0, this.a = s || 0, this.addA = function (e) {this.a += e, this.a > 1 && (this.a = 1)}, this.flipBetween = function (t, n, r, i, s, o, u, a) {this.setInterpolatedValue(t, n, e.calculateFlipPosition(r, i, s), e.calculateFlipPosition(r, i, o), e.calculateFlipPosition(r, i, u), e.calculateFlipPosition(r, i, a))}, this.lerpBetween = function (t, n, r, i, s, o, u, a) {this.setInterpolatedValue(t, n, e.calculateLerpPosition(r, i, s), e.calculateLerpPosition(r, i, o), e.calculateLerpPosition(r, i, u), e.calculateLerpPosition(r, i, a))}, this.setInterpolatedValue = function (e, t, n, r, i, s) {
      var o = this, u = function (n, r) {e[n] < t[n] ? (o[n] = e[n] + (t[n] - e[n]) * r, o[n] > t[n] && (o[n] = t[n])) : (o[n] = e[n] - (e[n] - t[n]) * r, o[n] < t[n] && (o[n] = t[n]))};
      u("r", n), u("g", r), u("b", i), u("a", s), this.r = Math.round(this.r), this.g = Math.round(this.g), this.b = Math.round(this.b)
    }, this.getCanvasRGBA = function () {return"rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"}, this.clone = function () {return new t(this.r, this.g, this.b, this.a)}
  };
  return t
}), define("PoE/PassiveSkillTree/PathHighlighter", ["./BFS/PathIterator", "./RGBA"], function (e, t) {
  return function (n, r, i) {
    this.init = function () {this.skillTree = n, this.drawObject = null, this.bfsPathIterator = new e(r, i), this.states = {BEGIN: 0, DEFAULT: 1, END: 2}, this.state = this.states.BEGIN, this.params = {}, this.params[this.states.DEFAULT] = {speed: 1e3, sFillC: new t(50, 50, 255, .4), eFillC: new t(50, 50, 255, .6), sStrokeC: new t(200, 200, 255, .4), eStrokeC: new t(255, 255, 255, .6)}, this.params[this.states.END] = {speed: 100, sFillC: null, sStrokeC: null, eFillC: new t, eStrokeC: new t(0, 0, 0, 0)}, this.params[this.states.BEGIN] = {speed: 50, sFillC: new t(255, 255, 255, 1), sStrokeC: new t(255, 255, 255, 1)}, this.params[this.states.BEGIN].eFillC = this.params[this.states.DEFAULT].sFillC, this.params[this.states.BEGIN].eStrokeC = this.params[this.states.DEFAULT].sStrokeC, this.events = {endFunc: function () {}}, this.start = (new Date).getTime(), this.setupDrawObject(), this.begin()}, this.setupDrawObject = function () {
      this.drawObject = new function (e) {
        this.init = function () {this.highlighter = e, this.skillTree = e.skillTree, this.fillC = new t(50, 50, 255, .5), this.strokeC = new t(50, 50, 255, .6), this.fillC = new t(50, 50, 255, .5), this.strokeC = new t(50, 50, 255, .6)};
        var n = this;
        this.begin = function () {
          var e = this.highlighter.params[this.highlighter.states.BEGIN], t = this;
          setTimeout(function () {t.beginDefault()}, e.speed)
        }, this.beginDefault = function (e) {this.highlighter.start = e || (new Date).getTime(), this.highlighter.state = this.highlighter.states.DEFAULT}, this.end = function () {
          this.highlighter.state = this.highlighter.states.END, this.highlighter.params[this.highlighter.states.END].sFillC = this.fillC.clone(), this.highlighter.params[this.highlighter.states.END].sStrokeC = this.strokeC.clone(), this.highlighter.start = (new Date).getTime();
          var e = this;
          setTimeout(function () {e.endImmediately()}, this.highlighter.params[this.highlighter.states.END].speed)
        }, this.endImmediately = function () {this.skillTree.midDrawObjects.remove(this.highlighter.drawObject) && this.highlighter.events.endFunc()}, this.draw = function () {
          var e = n.skillTree.midCtx, t = function (e, t, r) {
            var i = t.position, s = (new Date).getTime();
            switch (n.highlighter.state) {
              case n.highlighter.states.BEGIN:
                var o = n.highlighter.params[n.highlighter.states.BEGIN];
                n.fillC.lerpBetween(o.sFillC, o.eFillC, n.highlighter.start, s, o.speed, o.speed, o.speed, o.speed), n.strokeC.lerpBetween(o.sStrokeC, o.eStrokeC, n.highlighter.start, s, o.speed, o.speed, o.speed, o.speed);
                break;
              case n.highlighter.states.DEFAULT:
                var o = n.highlighter.params[n.highlighter.states.DEFAULT];
                n.fillC.flipBetween(o.sFillC, o.eFillC, n.highlighter.start, s, o.speed, o.speed, o.speed, o.speed), n.strokeC.flipBetween(o.sStrokeC, o.eStrokeC, n.highlighter.start, s, o.speed, o.speed, o.speed, o.speed);
                break;
              case n.highlighter.states.END:
                var o = n.highlighter.params[n.highlighter.states.END];
                n.strokeC.lerpBetween(o.sStrokeC, o.eStrokeC, n.highlighter.start, s, o.speed, o.speed, o.speed, o.speed)
            }
            if (n.skillTree.viewPort.bounds.contains(i)) {
              var u = n.skillTree.getNodeRadius(e);
              i = n.skillTree.worldToScreen(i), n.skillTree.midCtx.beginPath(), n.skillTree.midCtx.lineWidth = 2, n.skillTree.midCtx.strokeStyle = "rgba(255,255,255,1)", n.skillTree.midCtx.fillStyle = "rgba(255,255,255,1)", n.skillTree.midCtx.arc(i.x, i.y, u * n.skillTree.viewPort.zoom, 0, 2 * Math.PI, !1), n.skillTree.midCtx.globalCompositeOperation = "destination-out", n.skillTree.midCtx.fill(), n.skillTree.midCtx.stroke(), n.skillTree.midCtx.strokeStyle = n.strokeC.getCanvasRGBA(), n.skillTree.midCtx.fillStyle = n.fillC.getCanvasRGBA(), n.skillTree.midCtx.globalCompositeOperation = "source-over", n.skillTree.midCtx.fill(), n.skillTree.midCtx.stroke();
              if (r !== null) {
                var a = 50 * n.skillTree.viewPort.zoom, f = n.skillTree.midCtx.measureText(r).width;
                n.strokeC.addA(.3), n.skillTree.midCtx.fillStyle = n.strokeC.getCanvasRGBA(), n.skillTree.midCtx.font = a + "pt FontinBold", n.skillTree.midCtx.fillText(r, i.x - f / 2, i.y + a / 2)
              }
            } else n.skillTree.drawViewportIntersectionPoint(i, function (e) {n.skillTree.topCtx.beginPath(), n.skillTree.topCtx.lineWidth = 2, n.skillTree.topCtx.strokeStyle = n.strokeC.getCanvasRGBA(), n.skillTree.topCtx.fillStyle = n.fillC.getCanvasRGBA(), n.skillTree.topCtx.arc(e.x, e.y, 2, 0, 2 * Math.PI, !1), n.skillTree.topCtx.fill(), n.skillTree.topCtx.stroke(), n.skillTree.drawState.topDirty = !0})
          };
          n.highlighter.bfsPathIterator.iterate(function (t, r) {
            n.skillTree.drawPathBetweenNodes(t, r, function (t, r) {
              var i = t.position, s = r.position;
              i = n.skillTree.worldToScreen(i), s = n.skillTree.worldToScreen(s), e.beginPath(), e.lineWidth = 3, e.strokeStyle = n.strokeC.getCanvasRGBA(), e.moveTo(i.x, i.y), e.lineTo(s.x, s.y), e.stroke()
            }, function (t, r, i, s) {t = n.skillTree.worldToScreen(t), e.beginPath(), e.lineWidth = 3, e.strokeStyle = n.strokeC.getCanvasRGBA(), e.arc(t.x, t.y, s * n.skillTree.viewPort.zoom, r - Math.PI / 2, i - Math.PI / 2, !1), e.stroke()})
          }), n.highlighter.bfsPathIterator.iterate(function (e, r, i) {t(r, n.skillTree.getNodePositionInfo(r), null)}), t(n.highlighter.bfsPathIterator.startNode, n.skillTree.getNodePositionInfo(n.highlighter.bfsPathIterator.startNode), n.highlighter.bfsPathIterator.getStartNodeDepth())
        }, this.init()
      }(this), this.skillTree.midDrawObjects.add(this.drawObject, 0)
    }, this.begin = function () {this.drawObject.begin()}, this.beginDefault = function (e) {this.drawObject.beginDefault(e)}, this.end = function () {this.drawObject.end()}, this.endImmediately = function () {this.drawObject.endImmediately()}, this.init()
  }
}), define("PoE/PassiveSkillTree/PathHighlighterGroup", ["./PathHighlighter"], function (e) {
  return function (t, n) {
    this.init = function () {this.skillTree = t, this.shortestPathsSets = n, this.pathHighlighters = []}, this.begin = function () {
      this.pathHighlighters = [];
      for (var t = 0, n = this.shortestPathsSets.length; t < n; ++t)(function (n, r) {n.pathHighlighters[t] = new e(n.skillTree, r.goalNodeData.node, r.nodeRelationshipData)})(this, this.shortestPathsSets[t])
    }, this.end = function () {for (var e = 0, t = this.shortestPathsSets.length; e < t; ++e)this.pathHighlighters[e].end()}, this.init()
  }
}), define("PoE/PassiveSkillTree/Popup", [], function () {
  var e = function (e, t, n, r, i, s, o) {this.id = e, this.destCanvas = t, this.destCtx = t.getContext("2d"), this.x = n, this.y = r, this.contentRenderFunc = o, this.resize(i, s)};
  return e.prototype.resize = function (e, t) {this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = e, this.canvas.height = t}, e.prototype.draw = function () {
    this.contentRenderFunc(this, !0, this.ctx), this.ctx.lineWidth = 4, this.ctx.fillStyle = "rgba(0,0,0,.80)", this.ctx.strokeStyle = "rgb(203,181,156)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fill(), this.ctx.stroke(), this.contentRenderFunc(this, !1, this.ctx);
    var e = this.x, t = this.y, n = e + this.canvas.width, r = t + this.canvas.height;
    n > this.destCanvas.width && (e -= n - this.destCanvas.width), r > this.destCanvas.height && (t -= r - this.destCanvas.height), this.destCtx.drawImage(this.canvas, e, t)
  }, e
}), define("PoE/PassiveSkillTree/BFS/NodeData", [], function () {return function (e, t) {this.node = e, this.parents = [], this.depth = t}}), define("PoE/PassiveSkillTree/ByteDecoder", [], function () {
  return function () {
    this.init = function () {this.dataString = "", this.position = 0}, this.bytesToInt16 = function (e) {return this.bytesToInt(e, 2)}, this.bytesToInt = function (e, t) {
      t = t || 4;
      var n = 0;
      for (var r = 0; r < t; ++r)n += e[r], r < t - 1 && (n <<= 8);
      return n
    }, this.hasData = function () {return this.position < this.dataString.length}, this.getDataString = function () {return this.dataString}, this.setDataString = function (e) {this.dataString = e, this.position = 0}, this.readInt8 = function () {return this.readInt(1)}, this.readInt16 = function () {return this.readInt(2)}, this.readInt = function (e) {
      e = e || 4;
      var t = this.position + e;
      if (t > this.dataString.length)throw"Integer read exceeds bounds";
      var n = [];
      for (; this.position < t; ++this.position)n.push(this.dataString.charAt(this.position).charCodeAt(0));
      return this.bytesToInt(n, e)
    }, this.init()
  }
}), define("PoE/PassiveSkillTree/ByteEncoder", [], function () {
  return function () {
    this.init = function () {this.dataString = "", this.position = 0}, this.int16ToBytes = function (e) {return this.intToBytes(e, 2)}, this.intToBytes = function (e, t) {
      t = t || 4, e = parseInt(e);
      var n = [], r = t;
      do n[--r] = e & 255, e >>= 8; while (r > 0);
      return n
    }, this.appendInt8 = function (e) {this.appendInt(e, 1)}, this.appendInt16 = function (e) {this.appendInt(e, 2)}, this.appendInt = function (e, t) {
      t = t || 4;
      var n = this.intToBytes(e, t);
      for (var r = 0; r < t; ++r)this.dataString += String.fromCharCode(n[r])
    }, this.getDataString = function () {return this.dataString}, this.init()
  }
}), define("PoE/PassiveSkillTree/NodeHighlighter/AnimationType", [], function () {return{Default: 0, In: 1, Out: 2}}), define("PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighter", ["../jslib/jquery", "PoE/PassiveSkillTree/RGBA", "./AnimationType"], function (e, t, n) {
  var r = function (e, r) {this.acceptFunc = function (e) {return!0}, this.animations = {}, this.animations[n.In] = {speed: 50, fillColour: {start: new t(255, 255, 255, 1)}, strokeColour: {start: new t(255, 255, 255, 1)}}, this.animations[n.Default] = {speed: 1e3, fillColour: {start: new t(255, 213, 47, .3), end: new t(255, 213, 47, .6)}, strokeColour: {start: new t(255, 213, 47, .4), end: new t(255, 213, 47, .7)}}, this.animations[n.Out] = {speed: 100, fillColour: {start: null, end: new t}, strokeColour: {start: null, end: new t(0, 0, 0, 0)}}, this.skillTree = e, this.init(r)};
  return r.prototype.draw = function () {
    var e = (new Date).getTime();
    switch (this.animationState) {
      case n.In:
        var t = this.animations[n.In];
        this.fillColour.lerpBetween(t.fillColour.start, t.fillColour.end, this.start, e, t.speed, t.speed, t.speed, t.speed), this.strokeColour.lerpBetween(t.strokeColour.start, t.strokeColour.end, this.start, e, t.speed, t.speed, t.speed, t.speed);
        break;
      case n.Default:
        var t = this.animations[n.Default];
        this.fillColour.flipBetween(t.fillColour.start, t.fillColour.end, this.start, e, t.speed, t.speed, t.speed, t.speed), this.strokeColour.flipBetween(t.strokeColour.start, t.strokeColour.end, this.start, e, t.speed, t.speed, t.speed, t.speed);
        break;
      case n.Out:
        var t = this.animations[n.Out];
        this.strokeColour.lerpBetween(t.strokeColour.start, t.strokeColour.end, this.start, e, t.speed, t.speed, t.speed, t.speed)
    }
    for (var r = 0, i = this.nodes.length; r < i; ++r) {
      var s = this.nodes[r], o = this.skillTree.getNodeRadius(s), u = this.skillTree.getNodePositionInfo(s).position;
      if (this.skillTree.viewPort.bounds.contains(u))u = this.skillTree.worldToScreen(u), this.skillTree.midCtx.beginPath(), this.skillTree.midCtx.lineWidth = 2, this.skillTree.midCtx.strokeStyle = this.strokeColour.getCanvasRGBA(), this.skillTree.midCtx.fillStyle = this.fillColour.getCanvasRGBA(), this.skillTree.midCtx.arc(u.x, u.y, o * this.skillTree.viewPort.zoom, 0, 2 * Math.PI, !1), this.skillTree.midCtx.fill(), this.skillTree.midCtx.stroke(); else {
        var a = this;
        this.skillTree.drawViewportIntersectionPoint(u, function (e) {a.skillTree.topCtx.beginPath(), a.skillTree.topCtx.lineWidth = 2, a.skillTree.topCtx.strokeStyle = a.strokeColour.getCanvasRGBA(), a.skillTree.topCtx.fillStyle = a.fillColour.getCanvasRGBA(), a.skillTree.topCtx.arc(e.x, e.y, 2, 0, 2 * Math.PI, !1), a.skillTree.topCtx.fill(), a.skillTree.topCtx.stroke(), a.skillTree.drawState.topDirty = !0})
      }
    }
  }, r.prototype.begin = function () {
    var e = this;
    this.animations[n.In].fillColour.end = this.animations[n.Default].fillColour.start, setTimeout(function () {e.beginDefault()}, this.animations[n.In].speed)
  }, r.prototype.beginDefault = function (e) {this.start = e || (new Date).getTime(), this.animationState = n.Default}, r.prototype.end = function (t) {
    var r = e.Deferred(), i = this;
    return this.animationState = n.Out, this.animations[n.Out].fillColour.start = this.fillColour.clone(), this.animations[n.Out].strokeColour.start = this.strokeColour.clone(), this.start = (new Date).getTime(), setTimeout(function () {i.endImmediately(), r.resolve()}, this.animations[n.Out].speed), r.promise()
  }, r.prototype.endImmediately = function () {this.skillTree.midDrawObjects.remove(this.drawObject)}, r.prototype.copyStateFrom = function (e) {this.start = e.start, this.fillColour = e.fillColour.clone(), this.strokeColour = e.strokeColour.clone()}, r.prototype.init = function (e) {
    e && e.animations && this.configAnimation(e.animations), this.fillColour = new t, this.strokeColour = new t, this.start = (new Date).getTime(), this.nodes = e.nodes || [], this.animationState = n.In, this.animations[n.In].fillColour.end = this.animations[n.Default].fillColour.start, this.animations[n.In].strokeColour.end = this.animations[n.Default].strokeColour.start;
    var r = this;
    this.drawObject = {draw: function () {r.draw()}}, this.skillTree.midDrawObjects.add(this.drawObject, 10)
  }, r.prototype.setNodes = function (e) {this.nodes = e}, r.prototype.configAnimation = function (e) {
    if (!e)return;
    var t, r = function (e, t) {t.speed !== undefined && (e.speed = t.speed), t.fillColour && (t.fillColour.start && (e.fillColour.start = t.fillColour.start), t.fillColour.end && (e.fillColour.end = t.fillColour.end)), t.strokeColour && (t.strokeColour.start && (e.strokeColour.start = t.strokeColour.start), t.strokeColour.end && (e.strokeColour.end = t.strokeColour.end))};
    e && typeof e[n.Default] != "undefined" && r(this.animations[n.Default], e[n.Default]), e && typeof e[n.In] != "undefined" && r(this.animations[n.In], e[n.In]), e && typeof e[n.Out] != "undefined" && r(this.animations[n.Out], e[n.Out])
  }, r
}), define("PoE/PassiveSkillTree/NodeHighlighter/NodeHighlighterGroup", [], function () {
  var e = function (e) {this.init(e)};
  return e.prototype.foreachHighlighter = function (e) {for (var t = 0, n = this.highlighters.length; t < n; ++t)e(this.highlighters[t], t)}, e.prototype.begin = function () {this.foreachHighlighter(function (e) {e.begin()})}, e.prototype.beginDefault = function (e) {this.foreachHighlighter(function (t) {t.beginDefault(e)})}, e.prototype.end = function () {
    var e = [];
    return this.foreachHighlighter(function (t) {e.push(t.end())}), $.when.apply(null, e)
  }, e.prototype.endImmediately = function () {this.foreachHighlighter(function (e) {e.endImmediately()})}, e.prototype.copyStateFrom = function (e) {this.foreachHighlighter(function (t, n) {t.copyStateFrom(e.getHighlighter(n))})}, e.prototype.getHighlighter = function (e) {return this.highlighters[e]}, e.prototype.init = function (e) {
    if (!e)return;
    this.highlighters = e.highlighters || []
  }, e
}), define("PoE/Deployment/Config", [], function () {return{httpCDNUrl: "http://webcdn.pathofexile.com/", httpsCDNUrl: "https://web-grindinggear.netdna-ssl.com/"}}), define("PoE/Helpers", ["PoE/Deployment/Config"], function (e) {return{imageUrl: function (e) {return this.distUrl("image/" + e)}, distUrl: function (t) {return window.location.protocol == "https:" ? e.httpsCDNUrl + t : e.httpCDNUrl + t}, translate: function (e) {return typeof __ != "undefined" && typeof __[e] != "undefined" ? __[e] : e}}}), define("PoE/PassiveSkillTree/PassiveSkillTree", ["plugins", "PoE/Geom/Bounds", "PoE/Geom/Point", "./ObjectList", "./EventContainer", "./PassiveAllocation", "./Stats", "./Node", "./Group", "./Tile", "./Clickable", "./PathHighlighterGroup", "./Popup", "./BFS/NodeData", "./ByteDecoder", "./ByteEncoder", "./NodeHighlighter/NodeHighlighter", "./NodeHighlighter/AnimationType", "./NodeHighlighter/NodeHighlighterGroup", "./RGBA", "PoE/Helpers"], function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w) {
  var E = function (v, g, b, S, x, T, N, C) {
    this.init = function () {
      this.containerEl = e("#" + v);
      if (!this.isCanvasSupported()) {
        this.containerEl.append('<h1 class="error">The Passive Skill Tree requires a browser that supports canvas.</h1><p class="error m-pad">If you are running Internet Explorer you need at least version 9. If you are running Internet Explorer 9 and get this message, please make sure compatibility view is disabled.<br /><br />You may need to upgrade your browser. Some other browsers that work with the passive skill tree are: <a href="https://www.google.com/chrome/">Chrome</a>, <a href="http://www.mozilla.org/firefox/">Firefox</a>, <a href="http://www.apple.com/safari/">Safari</a> and <a href="http://www.opera.com/download/">Opera</a>.</p>');
        return
      }
      var u = this;
      this.fullscreenContainerEl = e("#" + g), this.containerEl.width(b), this.containerEl.height(S), this.totW = 1e3, this.totH = 1e3, this.xshift = Math.ceil(this.totW / 2), this.yshift = Math.ceil(this.totH / 2), this.initialWidth = b, this.initialHeight = S, this.canvas = document.createElement("canvas"), this.canvas.width = b, this.canvas.height = S, this.containerEl.append(this.canvas), this.$window = e(window), this.$bodyEl = e("body"), this.$canvas = e(this.canvas), this.$canvas.attr("id", "skillTreeMainCanvas"), this.ctx = this.canvas.getContext("2d"), this.midCanvas = document.createElement("canvas"), this.containerEl.append(this.midCanvas), this.$midCanvas = e(this.midCanvas), this.$midCanvas.attr("id", "skillTreeMidCanvas"), this.midCanvas.width = this.canvas.width, this.midCanvas.height = this.canvas.height, this.midCtx = this.midCanvas.getContext("2d"), this.topCanvas = document.createElement("canvas"), this.$topCanvas = e(this.topCanvas), this.$topCanvas.attr("id", "skillTreeTopCanvas"), this.containerEl.append(this.topCanvas), this.topCanvas.width = this.canvas.width, this.topCanvas.height = this.canvas.height, this.topCtx = this.topCanvas.getContext("2d"), this.scaleFactor = this.canvas.height / 1600, this.fps = 30, this.skillsPerOrbit = [1, 6, 12, 12, 12], this.orbitRadii = [0, 82, 162, 335, 493], this.nodeRadius = 51, this.nodeRadiusKeystone = 109, this.nodeRadiusNotable = 70, this.nodeRadiusMastery = 107, this.nodeRadiusClassStart = 200, this.groups = {}, this.nodes = {}, this.extent = new t, this.tileSize = 512, this.tiles = [], this.finalDrawFuncs = [], this.popupId = 0, this.popups = {}, this.assets = {}, this.characterData = N.characterData, this.constants = N.constants, this.imageZoomLevels = N.imageZoomLevels, this.skillSprites = N.skillSprites, this.characterClassToStartNode = {}, this.readonly = !1, this.fullScreen = !1, this.errorMessage = null, this.settings = {highlightSimilarNodes: !1, highlightShortestPaths: !1, enableSound: !1}, this.mousePos = new n(-1, -1), this.midDrawObjects = new r, this.events = {classChosen: function () {}, historyUrlSet: function (e) {}, pointsChanged: new i, onload: function () {}, onFullScreenUpdate: function () {}, onFullScreenBegin: function () {}, onFullScreenEnd: function () {}}, this.characterAttributes = [0, 0, 0], this.searchHighlighter = null, this.initializationComplete = e.Deferred(), this.loadCounter = 0, C && (C.events && (C.events.classChosen && (this.events.classChosen = C.events.classChosen), C.events.historyUrlSet && (this.events.historyUrlSet = C.events.historyUrlSet), C.events.pointsChanged && this.events.pointsChanged.add(C.events.pointsChanged), C.events.onload && (this.events.onload = C.events.onload), C.events.onFullScreenUpdate && (this.events.onFullScreenUpdate = C.events.onFullScreenUpdate), C.events.onFullScreenBegin && (this.events.onFullScreenBegin = C.events.onFullScreenBegin), C.events.onFullScreenEnd && (this.events.onFullScreenEnd = C.events.onFullScreenEnd)), C.readonly && (this.readonly = !0)), this.passiveAllocation = new s(this), this.passiveAllocation.passiveAllocated = function (e) {u.drawState.dirty = !0, u.drawState.topDirty = !0, u.stats.addAttribute(u.constants.characterAttributes.Strength, e.sa), u.stats.addAttribute(u.constants.characterAttributes.Dexterity, e.da), u.stats.addAttribute(u.constants.characterAttributes.Intelligence, e.ia)}, this.passiveAllocation.passiveUnallocated = function (e) {u.drawState.dirty = !0, u.drawState.topDirty = !0, u.stats.subAttribute(u.constants.characterAttributes.Strength, e.sa), u.stats.subAttribute(u.constants.characterAttributes.Dexterity, e.da), u.stats.subAttribute(u.constants.characterAttributes.Intelligence, e.ia)}, this.stats = new o, this.stats.statsChanged = function () {}, this.drawState = {dirty: !0, topDirty: !0, dirtyFullRedraw: !0, cancelInProgress: !1, active: !1, idle: !0, lastFrame: null}, this.worldToView = function (e) {};
      var a = this.initAssets();
      u.initLoadingRenderLoop(), a.done(function () {u.initGraph(), u.initViewPort(), u.initListeners(), u.initKeyListeners(), u.initMouseListeners(), u.initTileGrid(), u.setCharacterClass(x), u.loadBaseCharacterAttributes(), u.endLoadingRenderLoop(), u.events.pointsChanged.trigger(), u.events.onload(), u.initRenderLoop(), u.initializationComplete.resolve()}), window.onpopstate = function (e) {
        if (e.state === null)return;
        u.loadStateFromUrl()
      }
    }, this.toggleFullScreen = function (e) {this.fullScreen = !this.fullScreen, this.$bodyEl.css("overflow", this.fullScreen ? "hidden" : "visible"), this.updateCanvasSize(), this.fullScreen ? (this.fullscreenContainerEl.append(this.canvas).append(this.midCanvas).append(this.topCanvas), this.events.onFullScreenBegin()) : (this.containerEl.append(this.canvas).append(this.midCanvas).append(this.topCanvas), this.events.onFullScreenEnd()), e || this.pushHistoryState()}, this.updateCanvasSize = function () {
      if (this.fullScreen) {
        var e = this.events.onFullScreenUpdate() || {top: "0px", left: "0px", width: this.$window.width(), height: this.$window.height()};
        this.$canvas.css("position", "fixed").css("top", e.top).css("left", e.left), this.$midCanvas.css("position", "fixed").css("top", e.top).css("left", e.left), this.$topCanvas.css("position", "fixed").css("top", e.top).css("left", e.left), this.canvas.width = e.width, this.canvas.height = e.height, this.midCanvas.width = e.width, this.midCanvas.height = e.height, this.topCanvas.width = e.width, this.topCanvas.height = e.height
      } else this.$canvas.css("position", "absolute"), this.$midCanvas.css("position", "absolute"), this.$topCanvas.css("position", "absolute"), this.canvas.width = this.initialWidth, this.canvas.height = this.initialHeight, this.midCanvas.width = this.initialWidth, this.midCanvas.height = this.initialHeight, this.topCanvas.width = this.initialWidth, this.topCanvas.height = this.initialHeight;
      this.forceMouseOut(), this.initTileGrid(), this.viewPort.recalcBounds(), this.drawState.dirtyFullRedraw = !0, this.drawState.dirty = !0, this.drawState.topDirty = !0
    }, this.isCanvasSupported = function () {
      var e = document.createElement("canvas");
      return!!e.getContext && !!e.getContext("2d")
    }, this.isAudioSupported = function () {
      var e = document.createElement("audio");
      return e.canPlayType && e.canPlayType('audio/ogg; codecs="vorbis"')
    }, this.isHistorySupported = function () {return!!window.history && !!history.pushState}, this.loadStateFromUrl = function () {
      var e = this;
      this.initializationComplete.done(function () {
        var t = window.location.href.split("/"), n = t[t.length - 1], r = t[t.length - 2];
        if (n == "passive-skill-tree" || n == "" && r == "passive-skill-tree")return;
        e.loadHistoryUrl(n == "" ? r : n)
      })
    }, this.loadBaseCharacterAttributes = function () {this.stats.setAttribute(this.constants.characterAttributes.Strength, this.characterData[this.characterClass].base_str), this.stats.setAttribute(this.constants.characterAttributes.Dexterity, this.characterData[this.characterClass].base_dex), this.stats.setAttribute(this.constants.characterAttributes.Intelligence, this.characterData[this.characterClass].base_int)}, this.pushHistoryState = function () {
      if (!this.isHistorySupported())return;
      var e = this.getHistoryUrl();
      window.history.pushState({}, "", e), this.events.historyUrlSet(e)
    }, this.fullRedraw = function () {this.drawState.dirty = !0, this.drawState.dirtyFullRedraw = !0}, this.reset = function (e) {this.passiveAllocation.reset(), e && e.characterClass && this.setCharacterClass(e.characterClass), this.pushHistoryState(), this.fullRedraw()}, this.setCharacterClass = function (e) {this.characterClass = e, this.startNode && (this.startNode.active = !1), this.startNode = this.characterClassToStartNode[e], this.startNode.active = !0, this.viewPort.setPosition(this.getNodePositionInfo(this.startNode).position), this.loadBaseCharacterAttributes(), this.events.classChosen(e)}, this.loadCharacterData = function (e, t) {this.passiveAllocation.reset(), this.setCharacterClass(e), this.passiveAllocation.loadHashArray(t), this.events.historyUrlSet(this.getHistoryUrl()), this.fullRedraw()}, this.drawArc = function (e, t, n, r, i, s) {
      var o = i - r, u = o / (Math.PI / 2), a = o;
      e.save(), e.translate(Math.round(n.x), Math.round(n.y)), e.scale(s, s), e.rotate(-Math.PI), e.rotate(r);
      for (var f = 0, l = Math.ceil(u); f < l; ++f) {
        if (a < Math.PI / 2) {
          e.beginPath(), e.lineWidth = 4, e.fillStyle = "rgba(200,0,0,.5)", e.strokeStyle = "rgba(150,150,0,.8)", e.moveTo(0, 0), e.arc(0, 0, t.width, Math.PI, a + Math.PI, !1), e.clip(), e.drawImage(t, 0, 0, t.width, t.height, -t.width, -t.height, t.width, t.height);
          continue
        }
        e.drawImage(t, 0, 0, t.width, t.height, -t.width, -t.height, t.width, t.height), e.rotate(Math.PI / 2), a -= Math.PI / 2
      }
      e.restore()
    }, this.drawStraightPath = function (e, t, n, r, i, s, o) {
      var u = function (e, t, n) {return(1 - e) * t.x + e * n.x}, a = function (e, t, n) {return(1 - e) * t.y + e * n.y}, f = n.distTo(r), l = t.width * i, c = f;
      totSegments = f / l, dt = 1 / totSegments;
      var h = n.angleTo(r), p = 0;
      for (var d = 0, v = Math.ceil(totSegments); d < v; ++d) {
        var m = t.width;
        c < l && (m *= c / l), e.save(), e.translate(Math.round(u(p, n, r)), Math.round(a(p, n, r))), e.scale(i, i), e.rotate(h), e.drawImage(t, 0, Math.round(-(t.height / 2)), Math.round(m), t.height), e.restore(), p += dt, c -= l
      }
      if (s !== undefined) {
        var g = s.height * i, y = Math.round(s.width * i), b = Math.round(g / 2);
        g = Math.round(g), e.save(), e.translate(Math.round(n.x), Math.round(n.y)), e.rotate(h), e.drawImage(s, o, -b, y, g), e.restore(), e.save(), e.translate(Math.round(r.x), Math.round(r.y)), e.rotate(h + Math.PI), e.drawImage(s, o, -b, y, g), e.restore()
      }
    }, this.playSound = function (e) {
      if (!this.settings.enableSound || this.sounds[e] === undefined)return;
      this.sounds[e].play()
    }, this.initAssets = function () {
      var t = [], n = this, r = function (e, r) {
        var i = n.loadWaitAsset(e, r);
        ++n.loadCounter, i.done(function () {--n.loadCounter}), t.push(i)
      };
      r(N.assets.PSSkillFrame, "PSSkillFrame"), r(N.assets.PSSkillFrameHighlighted, "PSSkillFrameHighlighted"), r(N.assets.PSSkillFrameActive, "PSSkillFrameActive"), r(N.assets.PSGroupBackground1, "PSGroupBackground1"), r(N.assets.PSGroupBackground2, "PSGroupBackground2"), r(N.assets.PSGroupBackground3, "PSGroupBackground3"), r(N.assets.KeystoneFrameUnallocated, "KeystoneFrameUnallocated"), r(N.assets.KeystoneFrameCanAllocate, "KeystoneFrameCanAllocate"), r(N.assets.KeystoneFrameAllocated, "KeystoneFrameAllocated"), r(N.assets.Orbit1Normal, "Orbit1Normal"), r(N.assets.Orbit1Intermediate, "Orbit1Intermediate"), r(N.assets.Orbit1Active, "Orbit1Active"), r(N.assets.Orbit2Normal, "Orbit2Normal"), r(N.assets.Orbit2Intermediate, "Orbit2Intermediate"), r(N.assets.Orbit2Active, "Orbit2Active"), r(N.assets.Orbit3Normal, "Orbit3Normal"), r(N.assets.Orbit3Intermediate, "Orbit3Intermediate"), r(N.assets.Orbit3Active, "Orbit3Active"), r(N.assets.Orbit4Normal, "Orbit4Normal"), r(N.assets.Orbit4Intermediate, "Orbit4Intermediate"), r(N.assets.Orbit4Active, "Orbit4Active"), r(N.assets.LineConnectorNormal, "LineConnectorNormal"), r(N.assets.LineConnectorIntermediate, "LineConnectorIntermediate"), r(N.assets.LineConnectorActive, "LineConnectorActive"), r(N.assets.PSLineDeco, "PSLineDeco"), r(N.assets.PSLineDecoHighlighted, "PSLineDecoHighlighted"), r(N.assets.PSStartNodeBackgroundInactive, "PSStartNodeBackgroundInactive"), r(N.assets.PSStartNodeBackgroundInactive, "PSStartNodeBackgroundInactive"), r(N.assets.centerduelist, "centerduelist"), r(N.assets.centermarauder, "centermarauder"), r(N.assets.centerranger, "centerranger"), r(N.assets.centershadow, "centershadow"), r(N.assets.centertemplar, "centertemplar"), r(N.assets.centerwitch, "centerwitch"), r(N.assets.centerscion, "centerscion"), r(N.assets.Background1, "Background1"), r(N.assets.NotableFrameUnallocated, "NotableFrameUnallocated"), r(N.assets.NotableFrameCanAllocate, "NotableFrameCanAllocate"), r(N.assets.NotableFrameAllocated, "NotableFrameAllocated"), r(N.assets.PSPointsFrame, "PSPointsFrame"), r(N.assets.imgPSFadeCorner, "imgPSFadeCorner"), r(N.assets.imgPSFadeSide, "imgPSFadeSide");
      for (var i in this.skillSprites) {
        N.assets[i] = {};
        for (var s = 0, o = this.skillSprites[i].length; s < o; ++s)N.assets[i][this.imageZoomLevels[s]] = N.imageRoot + "/build-gen/passive-skill-sprite/" + this.skillSprites[i][s].filename;
        r(N.assets[i], i)
      }
      return e.when.apply(null, t)
    }, this.loadWaitAsset = function (t, n) {
      var r = this, i = function (t, n, i) {
        var s = new Image, o = e.Deferred();
        return s.onload = function () {i === undefined ? r.assets[n] = s : (r.assets[n] === undefined && (r.assets[n] = {}), r.assets[n][i] = s), o.resolve()}, s.src = t, o.promise()
      };
      if (typeof t == "object") {
        var s = [];
        for (var o in t)s.push(i(t[o], n, o));
        return e.when.apply(null, s)
      }
      return i(t, n)
    }, this.endLoadingRenderLoop = function () {clearInterval(this.loadingRenderLoopIntervalId)}, this.initLoadingRenderLoop = function () {
      var e = this, t = this.loadCounter;
      this.loadingRenderLoopIntervalId = setInterval(function () {
        var n = t == 0 ? 1 : (t - e.loadCounter) / t;
        e.drawLoading(n)
      }, 1e3 / this.fps)
    }, this.initRenderLoop = function () {
      var e = this;
      setInterval(function () {e.draw()}, 1e3 / this.fps)
    }, this.initGraph = function () {
      this.rootNode = new u(N.root);
      for (var e = 0, t = N.nodes.length; e < t; ++e) {
        var r = N.nodes[e], i = new u(r);
        this.addNode(i);
        if (this.startNode === undefined)for (var s = 0, o = i.startPositionClasses.length; s < o; ++s) {
          var f = i.startPositionClasses[s];
          this.characterClassToStartNode[f] = i, f == this.characterClass && (this.startNode = i, i.active = !0)
        }
      }
      for (var s = 0, o = N.root.out.length; s < o; ++s)this.rootNode.addOutNode(this.getNode(N.root.out[s]));
      for (var e = 0, t = N.nodes.length; e < t; ++e) {
        var r = N.nodes[e], i = this.getNode(r.id);
        for (var s = 0, o = r.out.length; s < o; ++s)i.addOutNode(this.getNode(r.out[s]))
      }
      for (var l in N.groups) {
        var c = N.groups[l], h = new a(l, new n(c.x, c.y), c.oo);
        this.addGroup(h);
        for (var e = 0, t = c.n.length; e < t; ++e)h.addNode(this.getNode(c.n[e]))
      }
      this.extent.tl.x = N.min_x, this.extent.tl.y = N.min_y, this.extent.br.x = N.max_x, this.extent.br.y = N.max_y, this.extent.grow(this.getOrbitRadius(4) * 3), this.defaultExtent = this.extent.clone()
    }, this.getShortestPathsFromActiveNodes = function (e) {
      var t = this.characterClassToStartNode[this.characterClass], n = this, r = -1, i = [], s = function (t) {
        n.visitBFS(t, function (t) {return t === e}, function (e) {return!n.passiveAllocation.isAllocated(e) && !e.isClassStartNode}, function (e, t) {
          i.push({goalNodeData: e, nodeRelationshipData: t});
          if (r == -1 || e.depth < r)r = e.depth;
          for (var n = i.length - 1; n >= 0; --n)i[n].goalNodeData.depth > r && i.splice(n, 1)
        })
      };
      return s(this.startNode), this.passiveAllocation.foreachAllocatedSkill(s), i
    }, this.recalculateExtent = function () {
      this.extent = this.defaultExtent.clone();
      var e = this.canvas.width / this.viewPort.zoom, t = this.canvas.height / this.viewPort.zoom;
      this.extent.width() < e && this.extent.width(e), this.extent.height() < t && this.extent.height(t), this.extent.centerAt(new n)
    }, this.initTileGrid = function () {
      this.grid = {}, this.grid.xTiles = Math.ceil(this.extent.width() * this.viewPort.zoom / this.tileSize) + 1, this.grid.yTiles = Math.ceil(this.extent.height() * this.viewPort.zoom / this.tileSize) + 1, this.grid.tiles = [];
      for (var e = 0; e < this.grid.yTiles; ++e) {
        this.grid.tiles[e] = [];
        for (var t = 0; t < this.grid.xTiles; ++t)this.grid.tiles[e][t] = new f
      }
    }, this.calcTileGrid = function () {this.grid.lExtentToLVisGridOffsetPx = (this.viewPort.bounds.tl.x - this.extent.tl.x) * this.viewPort.zoom, this.grid.tExtentToTVisGridOffsetPx = (this.viewPort.bounds.tl.y - this.extent.tl.y) * this.viewPort.zoom, this.grid.lExtentToRVisGridOffsetPx = (this.viewPort.bounds.br.x - this.extent.tl.x) * this.viewPort.zoom, this.grid.tExtentToBVisGridOffsetPx = (this.viewPort.bounds.br.y - this.extent.tl.y) * this.viewPort.zoom, this.grid.lExtentToLVisGridOffsetTiles = this.grid.lExtentToLVisGridOffsetPx / this.tileSize, this.grid.tExtentToTVisGridOffsetTiles = this.grid.tExtentToTVisGridOffsetPx / this.tileSize, this.grid.lExtentToRVisGridOffsetTiles = this.grid.lExtentToRVisGridOffsetPx / this.tileSize, this.grid.tExtentToBVisGridOffsetTiles = this.grid.tExtentToBVisGridOffsetPx / this.tileSize, this.grid.visGridWidthTiles = this.grid.lExtentToRVisGridOffsetTiles - this.grid.lExtentToLVisGridOffsetTiles, this.grid.visGridHeightTiles = this.grid.tExtentToBVisGridOffsetTiles - this.grid.tExtentToTVisGridOffsetTiles, this.grid.visGridStartXTilePos = Math.floor(this.grid.lExtentToLVisGridOffsetTiles), this.grid.visGridStartYTilePos = Math.floor(this.grid.tExtentToTVisGridOffsetTiles), this.grid.visGridXTileviewPortShift = this.grid.lExtentToLVisGridOffsetTiles - this.grid.visGridStartXTilePos, this.grid.visGridYTileviewPortShift = this.grid.tExtentToTVisGridOffsetTiles - this.grid.visGridStartYTilePos, this.grid.drawTileW = Math.ceil(this.grid.visGridWidthTiles) + Math.ceil(this.grid.visGridXTileviewPortShift), this.grid.drawTileH = Math.ceil(this.grid.visGridHeightTiles) + Math.ceil(this.grid.visGridYTileviewPortShift), this.grid.visGridXviewPortShift = this.grid.visGridXTileviewPortShift * this.tileSize, this.grid.visGridYviewPortShift = this.grid.visGridYTileviewPortShift * this.tileSize}, this.initViewPort = function () {
      this.viewPort = {skillTree: this, position: new n, bounds: new t, moveStartView: null, moveStartWorld: null, zoomLevels: T, zoomIndex: 0, zoom: T[0]};
      var e = this;
      this.viewPort.zoomIn = function () {
        if (this.zoomIndex == this.zoomLevels.length - 1)return;
        ++this.zoomIndex, this.zoom = this.zoomLevels[this.zoomIndex], this.recalcBounds()
      }, this.viewPort.zoomOut = function () {
        if (this.zoomIndex == 0)return;
        --this.zoomIndex, this.zoom = this.zoomLevels[this.zoomIndex], this.recalcBounds()
      }, this.viewPort.recalcBounds = function () {
        var t = !1;
        this.skillTree.recalculateExtent(), this.bounds.width(this.skillTree.canvas.width / this.zoom), this.bounds.height(this.skillTree.canvas.height / this.zoom), this.bounds.centerAt(this.position), this.bounds.br.x > e.extent.br.x && (this.position.x = e.extent.br.x - this.bounds.width() / 2, t = !0), this.bounds.br.y > e.extent.br.y && (this.position.y = e.extent.br.y - this.bounds.height() / 2, t = !0), this.bounds.tl.x < e.extent.tl.x && (this.position.x = e.extent.tl.x + this.bounds.width() / 2, t = !0), this.bounds.tl.y < e.extent.tl.y && (this.position.y = e.extent.tl.y + this.bounds.height() / 2, t = !0), t && this.bounds.centerAt(this.position)
      }, this.viewPort.beginMove = function (e, t) {this.moveStartView = new n(e, t), this.moveStartWorld = this.position.clone()}, this.viewPort.endMove = function () {this.moveStartView = null, this.moveStartWorld = null}, this.viewPort.updateMove = function (e, t) {return this.moveStartView === null || this.moveStartView.x == e && this.moveStartView.y == t ? !1 : (this.position = this.moveStartWorld.clone(), this.position.translateX((this.moveStartView.x - e) / this.zoom), this.position.translateY((this.moveStartView.y - t) / this.zoom), this.recalcBounds(), !0)}, this.viewPort.setPosition = function (e) {this.position = e, this.recalcBounds()}, this.viewPort.recalcBounds()
    }, this.initListeners = function () {
      var e = this;
      this.$window.resize(function () {e.fullScreen && e.updateCanvasSize()})
    }, this.initKeyListeners = function () {
      var e = this;
      this.$window.keypress(function (t) {
        switch (t.which) {
          case 61:
            e.viewPort.zoomIn(), e.initTileGrid(), e.drawState.dirty = !0, e.trigMouseMoveHandler();
            break;
          case 45:
            e.viewPort.zoomOut(), e.initTileGrid(), e.drawState.dirty = !0, e.trigMouseMoveHandler();
            break;
          case 102:
            e.toggleFullScreen()
        }
      })
    }, this.clickHandler = function (e, t) {
      var n = {x: e, y: t, worldPosition: this.getScreenWorldPosition(e, t)};
      this.foreachClickable(function (e) {return e.onclickTest(n)})
    }, this.trigMouseMoveHandler = function () {this.mouseMoveHandler(this.mousePos.x, this.mousePos.y)}, this.mouseLeaveHander = function () {this.mouseUpHandler()}, this.mouseUpHandler = function () {this.viewPort.endMove(), this.drawState.dirty = !0}, this.mouseMoveHandler = function (e, t) {
      var n = {x: e, y: t, worldPosition: this.getScreenWorldPosition(e, t)};
      this.foreachClickable(function (e) {e.onmousemoveTest(n), e.onmouseoutTest(n)})
    }, this.forceMouseOut = function () {this.foreachClickable(function (e) {return e.forceMouseOut()})}, this.foreachVisibleGridTile = function (e) {
      for (var t = 0; t < this.grid.drawTileW; ++t)for (var n = 0; n < this.grid.drawTileH; ++n) {
        var r = t + this.grid.visGridStartXTilePos, i = n + this.grid.visGridStartYTilePos;
        if (e.call(this, this.grid.tiles[i][r], r, i, t, n) === !0)return
      }
    }, this.initMouseListeners = function () {
      var e = this;
      this.$topCanvas.on("mouseout", function () {e.mouseLeaveHander()}), this.$topCanvas.mousedown(function (t) {
        var n = e.$topCanvas.offset();
        t.preventDefault(), e.viewPort.beginMove(t.pageX, t.pageY), e.clickHandler(t.pageX - n.left, t.pageY - n.top)
      }), this.$topCanvas.mouseup(function () {e.mouseUpHandler()}), this.$topCanvas.mousemove(function (t) {
        var n = e.$topCanvas.offset();
        e.mousePos.x = t.pageX - n.left, e.mousePos.y = t.pageY - n.top, e.trigMouseMoveHandler(), e.viewPort.updateMove(t.pageX, t.pageY) && (e.drawState.dirty = !0)
      }), this.$topCanvas.mouseout(function (t) {e.forceMouseOut()}), this.$topCanvas.mousewheel(function (t, n) {
        for (var r = 0; r < n; ++r)e.viewPort.zoomIn();
        for (var r = 0; r > n; --r)e.viewPort.zoomOut();
        return e.initTileGrid(), e.trigMouseMoveHandler(), e.drawState.dirty = !0, !1
      })
    }, this.drawDebug = function () {this.ctx.fillStyle = "rgb(20,200,20)", this.ctx.font = "10pt Arial", this.ctx.fillText("Zoom: " + this.viewPort.zoom, 10, 60)}, this.getCurrentImageZoomLevel = function () {
      var e = this.imageZoomLevels.length;
      for (var t = 0; t < e; ++t)if (this.viewPort.zoom <= this.imageZoomLevels[t])return this.imageZoomLevels[t];
      return this.imageZoomLevels[e - 1]
    }, this.loadImage = function (e, t) {
      var n = this, r = null;
      if (n.assets[e] !== undefined) {
        t(n.assets[e]);
        return
      }
      r = new Image, r.onload = function () {t(r), n.assets[e] = r}, r.src = e
    }, this.drawTile = function (e, n, r) {
      if (!e.dirty && !this.drawState.dirtyFullRedraw)return!1;
      e.canvas === null && (e.canvas = document.createElement("canvas"), e.canvas.width = this.tileSize, e.canvas.height = this.tileSize);
      var i = e.canvas, s = i.getContext("2d"), o = i.width, u = i.height, a = this.getCurrentImageZoomLevel(), f = r / a, l = new t;
      l.tl.x = n.x, l.tl.y = n.y, l.width(i.width / r), l.height(i.height / r);
      var c = l.clone();
      c.grow(this.getOrbitRadius(4) * 2 + 480);
      var h = this.nodeRadius * r;
      return this.drawBackgroundTile(s, n, a, f), this.foreachGroup(function (e) {
        if (!c.contains(e.position))return;
        var t = e.position.clone();
        t.inverseTranslate(l.tl), t.scale(r), this.drawGroupBackground(s, e, t, a, f);
        var n = this;
        e.foreachNode(function (e) {
          var t = n.getNodePositionInfo(e), i = t.position;
          i.inverseTranslate(l.tl), i.scale(r);
          for (var o = 0, u = e.startPositionClasses.length; o < u; ++o)n.drawStartNodeBackground(s, i, a, f, e.startPositionClasses[o]);
          if (u > 0)return
        })
      }), this.foreachGroup(function (e) {
        if (!c.contains(e.position))return;
        var t = e.position.clone();
        t.inverseTranslate(l.tl), t.scale(r);
        var n = this;
        e.foreachNode(function (e) {
          var t = n.getNodePositionInfo(e), i = t.position;
          i.inverseTranslate(l.tl), i.scale(r);
          if (e.startPositionClasses.length > 0)return;
          e.foreachOutNode(function (t) {
            var i = n.getNodePositionInfo(t), o = i.position, u = null;
            o.inverseTranslate(l.tl), o.scale(r);
            if (t.startPositionClasses.length > 0)return;
            n.drawPathBetweenNodes(e, t, function (i, o) {
              var u = i.position, c = o.position;
              u.inverseTranslate(l.tl), u.scale(r), c.inverseTranslate(l.tl), c.scale(r);
              var h = "Normal";
              if (e.active && t.active)h = "Active"; else if (e.active || t.active)h = "Intermediate";
              n.drawStraightPath(s, n.assets["LineConnector" + h][a], u, c, f, n.assets["PSLineDeco" + (e.active || t.active ? "Highlighted" : "")][a], (n.nodeRadius - 22) * r)
            }, function (i, o, u, c) {
              i.inverseTranslate(l.tl), i.scale(r);
              var h = "Normal";
              if (e.active && t.active)h = "Active"; else if (e.active || t.active)h = "Intermediate";
              var p = n.assets["Orbit" + t.orbit + h][a];
              n.drawArc(s, p, i, o - Math.PI / 2, u - Math.PI / 2, f)
            })
          })
        })
      }), this.foreachGroup(function (e) {
        if (!c.contains(e.position))return;
        var t = e.position.clone();
        t.inverseTranslate(l.tl), t.scale(r);
        var n = this;
        this.drawGroupNodes(e, s, r, a, f, l, function (e) {return e.isMastery()}), this.drawGroupNodes(e, s, r, a, f, l, function (e) {return!e.isMastery()})
      }), e.dirty = !1, !0
    }, this.drawGroupNodes = function (e, n, r, i, s, o, u) {
      var a = this;
      e.foreachNode(function (e) {
        if (!u(e))return;
        var f = a.getNodePositionInfo(e), h = f.position.clone(), p = f.position;
        p.inverseTranslate(o.tl), p.scale(r);
        if (e.startPositionClasses.length > 0)return;
        var d = !1, v = null;
        e.isMastery() ? v = "mastery" : e.notable ? v = "notable" + (e.active ? "Active" : "Inactive") : e.keyStone ? v = "keystone" + (e.active ? "Active" : "Inactive") : v = "normal" + (e.active ? "Active" : "Inactive"), d = a.skillSprites[v][a.viewPort.zoomIndex].coords[e.skill.icon];
        if (d) {
          var m = a.assets[v][i], g = d.w * s, y = g / 2;
          g = Math.round(g), n.drawImage(m, d.x, d.y, d.w, d.h, Math.round(p.x - y), Math.round(p.y - y), g, g)
        } else n.beginPath(), n.fillStyle = "rgb(0,0,0)", n.arc(Math.round(p.x), Math.round(p.y), nodeR, 0, 2 * Math.PI, !1), n.fill();
        if (!e.isMastery()) {
          var b = null;
          e.isKeyStone() ? b = a.assets["KeystoneFrame" + (e.active ? "Allocated" : e.canAllocate ? "CanAllocate" : "Unallocated")][i] : e.notable ? b = a.assets["NotableFrame" + (e.active ? "Allocated" : e.canAllocate ? "CanAllocate" : "Unallocated")][i] : e.active ? b = a.assets.PSSkillFrameActive[i] : e.canAllocate ? b = a.assets.PSSkillFrameHighlighted[i] : b = a.assets["PSSkillFrame" + (e.active ? "Active" : "")][i];
          var w = b.width * s, E = w / 2;
          w = Math.round(w), n.drawImage(b, 0, 0, b.width, b.height, Math.round(p.x - E), Math.round(p.y - E), w, w)
        }
        if (e.clickable === null && !e.isMastery()) {
          var S = new t, x;
          e.isKeyStone() ? x = a.nodeRadiusKeystone : e.isMastery() ? x = a.nodeRadiusMastery : x = a.nodeRadius, S.tl.x = h.x - x, S.tl.y = h.y - x, S.br.x = h.x + x, S.br.y = h.y + x;
          var T = new l(S);
          e.clickable = T, T.onclick = function (t) {
            a.drawState.dirty = !0, a.drawState.dirtyFullRedraw = !0;
            var n = !1;
            e.active ? a.passiveAllocation.unallocate(e.skill.getHash()) && (n = !0) : a.passiveAllocation.allocate(e.skill.getHash(), !0) && (n = !0);
            if (n && a.settings.highlightShortestPaths && e.pathHighlighterGroup !== null) {
              e.pathHighlighterGroup.end();
              var r = a.getShortestPathsFromActiveNodes(e);
              e.pathHighlighterGroup = new c(a, r), e.pathHighlighterGroup.begin()
            }
          }, T.onmousemove = function (t) {
            var n = t.x, r = t.y;
            a.drawState.dirty = !0, e.renderState.hover = !0, e.popup = a.createPopup(a.midCanvas, Math.round(n + 10), Math.round(r - 10), 300, 200, function (t, n, r) {
              var i = 0, s = 0, o = Math.round(21 * a.scaleFactor), u = Math.round(19 * a.scaleFactor), f = o * 3, l = u * 2;
              r.fillStyle = "rgb(200,200,200)", r.font = o + "pt FontinBold", n ? (s = r.measureText(e.skill.displayName).width, s > i && (i = s)) : r.fillText(e.skill.displayName, 5, Math.round(o * 2)), r.font = u + "pt FontinBold";
              for (var c = 0, h = e.skill.skillDescription.length; c < h; ++c)f += l, n ? (s = r.measureText(e.skill.skillDescription[c]).width, s > i && (i = s)) : r.fillText(e.skill.skillDescription[c], 5, Math.round(f));
              n && t.resize(i + 10, Math.round(f + l / 2))
            }), a.settings.highlightSimilarNodes && a.highlightSimilarNodes(e);
            if (a.settings.highlightShortestPaths && e.pathHighlighterGroup === null) {
              var i = a.getShortestPathsFromActiveNodes(e);
              e.pathHighlighterGroup = new c(a, i), e.pathHighlighterGroup.begin()
            }
          }, T.onmouseout = function (t) {a.drawState.dirty = !0, e.renderState.hover = !1, a.removePopup(e.popup), e.similarNodeHighlighter !== null && e.similarNodeHighlighter.end().done(function (e, t) {return function () {e.similarNodeHighlighter === t && (e.similarNodeHighlighter = null)}}(e, e.similarNodeHighlighter)), e.pathHighlighterGroup !== null && (e.pathHighlighterGroup.end(), e.pathHighlighterGroup = null)}
        }
      })
    }, this.drawNode = function (e, t) {t(e, this.getNodePositionInfo(e))}, this.drawPathBetweenNodes = function (e, t, n, r) {
      var i = this.getNodePositionInfo(e), s = this.getNodePositionInfo(t);
      if (e.group != t.group || e.orbit != t.orbit)n(i, s); else {
        var o = e.group.position.clone(), u = i.angle, a = s.angle, f = u < a;
        u = f ? i.angle : s.angle, a = f ? s.angle : i.angle;
        var l = a - u;
        if (l > Math.PI) {
          var c = 2 * Math.PI - l;
          u = a, a = u + c
        }
        var h = this.orbitRadii[e.orbit];
        r(o, u, a, h)
      }
    }, this.drawLoading = function (e) {
      var t = w.translate("Loading") + "... " + (Math.round(e * 100) + "%"), n = 20, r = this.canvas.width / 2, i = this.canvas.height / 2, s = this.ctx.measureText(t);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgb(251,243,241)", this.ctx.font = n + "pt FontinBold", this.ctx.fillText(t, Math.round(r - s.width / 2), Math.round(i - n / 2))
    }, this.draw = function () {
      this.drawState.active = !0, this.calcTileGrid();
      if (this.drawState.dirtyFullRedraw || !this.lastDrawBounds || this.lastDrawBounds.neq(this.viewPort.bounds))this.lastDrawBounds = this.viewPort.bounds.clone(), this.foreachVisibleGridTile(function (e, t, n, r, i) {this.drawTilePos(t, n), this.ctx.drawImage(e.canvas, 0, 0, this.tileSize, this.tileSize, Math.round(r * this.tileSize - this.grid.visGridXviewPortShift), Math.round(i * this.tileSize - this.grid.visGridYviewPortShift), this.tileSize, this.tileSize)});
      this.drawMidCanvas(), this.drawTopCanvas();
      for (var e = 0, t = this.finalDrawFuncs.length; e < t; ++e)this.finalDrawFuncs[e]();
      this.finalDrawFuncs = [];
      for (var n in this.popups)this.popups[n].draw();
      this.errorMessage !== null && (this.ctx.fillStyle = "rgb(251,30,30)", this.ctx.font = "10pt FontinBold", this.ctx.fillText(this.errorMessage, 10, this.canvas.height - 20)), this.drawState.lastFrame = new Date, this.beginIdle(), this.drawState.dirty = !1, this.drawState.dirtyFullRedraw = !1, this.drawState.active = !1
    }, this.drawImageTiled = function (e, t, n, r, i, s, o, u) {
      var a = e.width * n, f = e.height * r, l = o - i, c = u - s;
      for (var h = 0, p = Math.ceil(l / a); h < p; ++h) {
        var d = h * a + i;
        for (var v = 0, m = Math.ceil(c / f); v < m; ++v) {
          t.save(), t.translate(d, v * f + s);
          var g = e.width, y = a, b = e.height, w = f;
          if (h == p - 1) {
            var E = l % a, S = a - E;
            E !== 0 && (y -= S, g *= E / a)
          }
          if (v == m - 1) {
            var E = Math.round(c) % Math.round(f), x = f - E;
            E !== 0 && (w -= x, b *= E / f)
          }
          t.drawImage(e, 0, 0, g, b, 0, 0, y, w), t.restore()
        }
      }
    }, this.createRotatedCanvasImage = function (e, t, n, r) {
      var i = document.createElement("canvas");
      return i.width = n, i.height = r, outCtx = i.getContext("2d"), outCtx.save(), outCtx.translate(n / 2, r / 2), outCtx.rotate(t), outCtx.drawImage(e, -e.width / 2, -e.height / 2), outCtx.restore(), i
    }, this.drawTopCanvas = function () {
      if (!this.drawState.topDirty)return;
      this.topCtx.clearRect(0, 0, this.topCanvas.width, this.topCanvas.height), this.drawBorder(), this.drawHeader(), this.drawState.topDirty = !1
    }, this.drawMidCanvas = function () {this.midCtx.clearRect(0, 0, this.midCanvas.width, this.midCanvas.height), this.midDrawObjects.foreachObject(function (e) {e.draw()})}, this.drawBorder = function () {
      var e = this.assets.imgPSFadeCorner[1], t = this.assets.imgPSFadeSide[1], n = this.scaleFactor, r = e.width * n, i = e.height * n, s = t.height * n, o = this.createRotatedCanvasImage(e, Math.PI / 2, e.width, e.height), u = this.createRotatedCanvasImage(e, Math.PI, e.width, e.height), a = this.createRotatedCanvasImage(e, -Math.PI / 2, e.width, e.height), f = this.createRotatedCanvasImage(t, 0, t.width, t.height), l = this.createRotatedCanvasImage(t, Math.PI, t.width, t.height), c = this.createRotatedCanvasImage(t, -Math.PI / 2, t.height, t.width), h = this.createRotatedCanvasImage(t, Math.PI / 2, t.height, t.width);
      this.topCtx.drawImage(e, 0, 0, e.width, e.height, 0, 0, r, i), this.topCtx.drawImage(o, 0, 0, o.width, o.height, this.topCanvas.width - r, 0, r, i), this.topCtx.drawImage(u, 0, 0, u.width, u.height, this.topCanvas.width - r, this.topCanvas.height - i, r, i), this.topCtx.drawImage(a, 0, 0, a.width, a.height, 0, this.topCanvas.height - i, r, i), this.drawImageTiled(l, this.topCtx, n, n, r, this.topCanvas.height - s, this.topCanvas.width - r, this.canvas.height, "rgb(200,200,0)"), this.drawImageTiled(f, this.topCtx, n, n, r, 0, this.topCanvas.width - r, s, "rgb(200,20,200)"), this.drawImageTiled(c, this.topCtx, n, n, 0, i, c.width * n, this.topCanvas.height - i, "rgb(0,20,200)"), this.drawImageTiled(h, this.topCtx, n, n, this.topCanvas.width - h.width * n, i, this.topCanvas.width, this.canvas.height - i)
    }, this.drawHeader = function () {
      if (this.readonly)return;
      var e = this.passiveAllocation.getPassiveSkillPointsAvailable();
      if (e > 0) {
        var t = this.assets.PSPointsFrame[1], n = this.scaleFactor, r = t.width * n, i = t.height * n, s = r / 2, o = Math.round(i / 2), u = this.topCanvas.width / 2;
        this.topCtx.drawImage(t, 0, 0, t.width, t.height, Math.round(u - s), 20 - o, Math.round(r), Math.round(i)), this.topCtx.fillStyle = "rgb(251,243,241)", this.topCtx.font = "10pt FontinBold";
        var a = "Point" + (e == 1 ? "" : "s") + " Left", f = e + " " + w.translate(a), l = this.topCtx.measureText(f);
        this.topCtx.fillText(f, Math.round(u - l.width / 2), 20 - o + 16)
      }
    }, this.drawIdle = function () {
      this.calcTileGrid();
      for (var e = 0; e < this.grid.visGridWidthTiles + 2; ++e)for (var t = 0; t < this.grid.visGridHeightTiles + 2; ++t) {
        var n = e + this.grid.visGridStartXTilePos - 1, r = t + this.grid.visGridStartYTilePos - 1;
        if (this.grid.tiles[r] === undefined || this.grid.tiles[r][n] === undefined)continue;
        if (this.drawTilePos(n, r)) {
          this.drawState.lastFrame = new Date, this.beginIdle();
          return
        }
      }
    }, this.getNodeRadius = function (e) {return e.notable ? this.nodeRadiusNotable : e.isKeyStone() ? this.nodeRadiusKeystone : e.isMastery() ? this.nodeRadiusMastery : e.isClassStartNode ? this.nodeRadiusClassStart : this.nodeRadius}, this.beginIdle = function () {
      var e = this;
      setTimeout(function () {
        var t = new Date;
        t.getTime() - e.drawState.lastFrame.getTime() >= 200 && e.drawIdle()
      }, 250)
    }, this.getScreenWorldPosition = function (e, t) {return new n(this.viewPort.bounds.tl.x + e / this.viewPort.zoom, this.viewPort.bounds.tl.y + t / this.viewPort.zoom)}, this.worldToScreen = function (e) {return new n((e.x - this.viewPort.bounds.tl.x) * this.viewPort.zoom, (e.y - this.viewPort.bounds.tl.y) * this.viewPort.zoom)}, this.getTileWorldPosition = function (e, t) {
      var r = new n;
      return r.x = e * this.tileSize / this.viewPort.zoom + this.extent.tl.x, r.y = t * this.tileSize / this.viewPort.zoom + this.extent.tl.y, r
    }, this.drawTilePos = function (e, t) {
      var n = this.getTileWorldPosition(e, t);
      return this.drawTile(this.grid.tiles[t][e], n, this.viewPort.zoom)
    }, this.drawStartNodeBackground = function (e, t, n, r, i) {
      var s = i == this.characterClass, o = this.assets[s ? "centerduelist" : "PSStartNodeBackgroundInactive"][n], u = o.width * r, a = o.height * r, f = u / 2, l = a / 2, c = "PSStartNodeBackgroundInactive";
      if (s)switch (i) {
        case this.constants.classes.StrClass:
          c = "centermarauder";
          break;
        case this.constants.classes.DexClass:
          c = "centerranger";
          break;
        case this.constants.classes.IntClass:
          c = "centerwitch";
          break;
        case this.constants.classes.StrDexClass:
          c = "centerduelist";
          break;
        case this.constants.classes.StrIntClass:
          c = "centertemplar";
          break;
        case this.constants.classes.DexIntClass:
          c = "centershadow";
          break;
        case this.constants.classes.StrDexIntClass:
          c = "centerscion"
      }
      o = this.assets[c][n], e.drawImage(o, 0, 0, o.width, o.height, Math.round(t.x - f), Math.round(t.y - l), Math.round(u), Math.round(a));
      if (s) {
        var h = Math.ceil(25 * this.viewPort.zoom);
        e.font = h + "pt FontinRegular";
        var p = 300 * (Math.PI / 180), d = t.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(p), v = t.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(p);
        e.fillStyle = "rgb(235,46,16)";
        var m = e.measureText(this.stats.getAttribute(this.constants.characterAttributes.Strength));
        e.fillText(this.stats.getAttribute(this.constants.characterAttributes.Strength), d - m.width / 2, v + h / 2);
        var p = 60 * (Math.PI / 180), d = t.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(p), v = t.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(p);
        e.beginPath(), e.fillStyle = "rgb(1,217,1)";
        var m = e.measureText(this.stats.getAttribute(this.constants.characterAttributes.Dexterity));
        e.fillText(this.stats.getAttribute(this.constants.characterAttributes.Dexterity), d - m.width / 2, v + h / 2);
        var p = 180 * (Math.PI / 180), d = t.x + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.sin(p), v = t.y + this.constants.PSSCentreInnerRadius * this.viewPort.zoom * Math.cos(p);
        e.beginPath(), e.fillStyle = "rgb(88,130,255)";
        var m = e.measureText(this.stats.getAttribute(this.constants.characterAttributes.Intelligence));
        e.fillText(this.stats.getAttribute(this.constants.characterAttributes.Intelligence), d - m.width / 2, v + h / 2)
      }
    }, this.drawGroupBackground = function (e, t, n, r, i) {
      if (t.isOccupiedOrbit(3)) {
        var s = this.assets.PSGroupBackground3[r], o = s.width * i, u = o / 2;
        e.drawImage(s, 0, 0, s.width, s.height, Math.round(n.x - u), Math.round(n.y - u), Math.round(o), Math.round(u)), e.save(), e.translate(Math.round(n.x), Math.round(n.y)), e.rotate(Math.PI), u = Math.round(u), e.translate(0, -u), e.drawImage(this.assets.PSGroupBackground3[r], 0, 0, this.assets.PSGroupBackground3[r].width, this.assets.PSGroupBackground3[r].height, -u, 0, o, u), e.restore()
      }
      if (t.isOccupiedOrbit(2)) {
        var s = this.assets.PSGroupBackground2[r], o = Math.round(s.width * i), u = o / 2;
        e.drawImage(s, 0, 0, s.width, s.height, Math.round(n.x - u), Math.round(n.y - u), o, o)
      }
      if (t.isOccupiedOrbit(1)) {
        var s = this.assets.PSGroupBackground1[r], o = Math.round(s.width * i), u = o / 2;
        e.drawImage(s, 0, 0, s.width, s.height, Math.round(n.x - u), Math.round(n.y - u), o, o)
      }
    }, this.drawBackgroundTile = function (e, t, n, r) {
      var i = this.assets.Background1[n], s = t.x - this.extent.tl.x, o = t.y - this.extent.tl.y, u = i.width * r, a = i.height * r, f = s % u, l = o % a;
      for (var c = 0, h = Math.ceil((this.tileSize + f) / u); c < h; ++c)for (var p = 0, d = Math.ceil((this.tileSize + l) / a); p < d; ++p)e.drawImage(i, 0, 0, i.width, i.height, Math.round(-f + c * u), Math.round(-l + p * a), Math.round(u), Math.round(a))
    }, this.drawImageCentered = function (e, t, n, r, i) {
      var s = t.width * i, o = s / 2, u = t.height * i, a = u / 2;
      e.drawImage(t, 0, 0, t.width, t.height, Math.round(n.x - o), Math.round(n.y - a), Math.round(s), Math.round(u))
    }, this.foreachGroup = function (e) {for (var t in this.groups)e.call(this, this.groups[t])}, this.foreachNode = function (e) {for (var t in this.nodes)if (e.call(this, this.nodes[t]) === !0)return}, this.foreachClickable = function (e) {
      var t = this;
      this.foreachNode(function (n) {
        if (n.clickable === null)return!1;
        if (e.call(t, n.clickable) === !0)return
      })
    }, this.findNodes = function (e) {
      var t = [];
      for (var n in this.nodes) {
        var r = this.nodes[n];
        e.call(this, r) && t.push(r)
      }
      return t
    }, this.getNode = function (e) {return this.nodes[e]}, this.getGroup = function (e) {return this.groups[e]}, this.addNode = function (e) {this.nodes[e.skill.getHash()] = e}, this.addGroup = function (e) {this.groups[e.getId()] = e}, this.getOrbitSkillCount = function (e) {return this.skillsPerOrbit[e]}, this.getOrbitRadius = function (e) {return this.orbitRadii[e]}, this.getNodePositionInfo = function (e) {
      var t = e.group.position.clone(), n = this.getOrbitRadius(e.orbit), r = 2 * Math.PI * e.orbitIndex / this.getOrbitSkillCount(e.orbit);
      return t.x -= n * Math.sin(-r), t.y -= n * Math.cos(-r), {position: t, angle: r}
    }, this.createPopup = function (e, t, n, r, i, s) {
      var o = new h(v, e, t, n, r, i, s);
      return this.popups[o.id] = o, ++this.popupId, o
    }, this.removePopup = function (e) {delete this.popups[e.id]}, this.calculateFlipPosition = function (e, t, n) {
      var r = t - e, i = r / n, s = parseInt(i) % 2, o = i % 1;
      return s == 0 ? o : 1 - o
    }, this.calculateLerpPosition = function (e, t, n) {
      var r = t - e, i = r / n;
      return i
    }, this.createDefaultHighlighterGroup = function (e) {return new y({highlighters: [new m(this, {nodes: e.filter(function (e) {return!e.isMastery()})})]})}, this.highlightSearchQuery = function (e) {
      var t, n = !0, r = e.length <= 2;
      if (!r) {
        e = e.toLowerCase();
        var i = this.findNodes(function (t) {
          if (t.isMastery())return!1;
          if (t.skill.displayName.toLowerCase().indexOf(e) != -1)return!0;
          for (var n = 0, r = t.skill.skillDescription.length; n < r; ++n)if (t.skill.skillDescription[n].toLowerCase().indexOf(e) != -1)return!0;
          return!1
        });
        t = this.createDefaultHighlighterGroup(i), this.searchHighlighter !== null && t.copyStateFrom(this.searchHighlighter)
      }
      this.searchHighlighter !== null && (this.searchHighlighter.endImmediately(), this.searchHighlighter = null, n = !1);
      if (r)return;
      this.searchHighlighter = t, n ? this.searchHighlighter.begin() : this.searchHighlighter.beginDefault(t.start)
    }, this.highlightSimilarNodes = function (e) {
      if (e.similarNodeHighlighter !== null)return;
      var t = this, n = this.findNodes(function (t) {return e.skill.displayName == t.skill.displayName}), r = this.createDefaultHighlighterGroup(n);
      e.similarNodeHighlighter = r, r.begin()
    }, this.visitNodes = function (e, t, n) {
      var r = {}, i = [];
      i.push(e);
      while (i.length > 0) {
        var s = i.pop(), o = s.skill.getHash();
        r[o] === undefined && n(s) && (t.push(s), r[o] = !0, s.foreachNeighbourNode(function (e) {
          var t = e.skill.getHash();
          r[t] === undefined && n(e) && i.push(e)
        }))
      }
    }, this.visitBFS = function (e, t, n, r) {
      var i = [], s = {}, o = {};
      i.push(e), s[e.skill.getHash()] = !0;
      var u = function (e, t) {o[t.skill.getHash()] === undefined && (o[t.skill.getHash()] = new p(t, e))}, a = function (e) {return o[e.skill.getHash()]};
      u(0, e);
      while (i.length > 0) {
        var f = i.shift(), l = f.skill.getHash(), c = o[f.skill.getHash()];
        if (t(f)) {
          r(c, o);
          return
        }
        f.foreachNeighbourNode(function (e) {
          if (e.skill.getHash() === null || !n(e))return;
          u(c.depth + 1, e);
          if (s[e.skill.getHash()] === undefined)o[e.skill.getHash()].parents.push(f); else {
            var t = a(e);
            t.depth - 1 == c.depth && o[e.skill.getHash()].parents.push(f)
          }
          if (s[e.skill.getHash()] !== undefined)return;
          s[e.skill.getHash()] = !0, i.push(e)
        })
      }
    }, this.getHistoryUrl = function () {
      if (!this.isHistorySupported())return"";
      var e = [];
      for (var t in this.passiveAllocation.allocatedSkills)e.push(t);
      return E.generatePermaLink(this.characterClass, e, this.fullScreen)
    }, this.loadHistoryUrl = function (t) {
      t = t.replace(/-/g, "+").replace(/_/g, "/");
      try {t = e.base64.decode(t)} catch (n) {
        this.errorMessage = "Failed to load build from URL. Please make sure it was copied correctly.";
        var r = this, i = function () {r.events.pointsChanged.remove(i), r.errorMessage = null};
        this.events.pointsChanged.add(i);
        return
      }
      var s = new d;
      s.setDataString(t);
      var o = s.readInt(), u = s.readInt8(), a = 0;
      o > 0 && (a = s.readInt8());
      if (o != E.CurrentVersion) {
        alert("The build you are trying to load is using an old version of the passive tree and will not work.");
        return
      }
      var f = [];
      while (s.hasData())f.push(s.readInt16());
      this.loadCharacterData(u, f), a == 1 && this.toggleFullScreen(!0)
    }, this.drawViewportIntersectionPoint = function (e, t) {
      var n = this.viewPort.bounds.intersectionPoint(e, this.viewPort.position, 20), r = 5, i = 2;
      !1 !== n && (n = this.worldToScreen(n), n.x < r ? n.x += i - 1 : n.x > this.canvas.width - r && (n.x -= i), n.y < r ? n.y += i - 1 : n.y > this.canvas.height - r && (n.y -= i), this.finalDrawFuncs.push(function () {t(n)}))
    }, this.init()
  };
  return E.CurrentVersion = 2, E.generatePermaLink = function (t, n, r) {
    var i = new v;
    i.appendInt(E.CurrentVersion), i.appendInt8(t), i.appendInt8(r ? 1 : 0);
    for (var s = 0, o = n.length; s < o; ++s)i.appendInt16(n[s]);
    var u = e.base64.encode(i.getDataString());
    return u = u.replace(/\+/g, "-").replace(/\//g, "_"), "/passive-skill-tree/" + u
  }, E
}), define("PoE/PublicGameAccessCountdown", ["plugins"], function (e) {
  return function (t, n, r, i) {
    this.init = function () {this.containerEl = e(t), this.timerEl = e(n), this.preEl = e(r), this.activeEl = e(i), this.preActive = !1}, this.run = function (t, n) {
      var r = this, i = function (e, t) {e > 0 ? r.startPreCountdown(e, t) : t > 0 ? r.startActiveCountdown(t) : r.accessEnded()};
      t === undefined || n === undefined ? e.ajax({url: "/index/public-game-access-countdown-query", async: !0, cache: !1, dataType: "json", data: {}, success: function (e) {e.success && i(e.ss, e.es)}}) : i(t, n)
    }, this.startPreCountdown = function (e, t) {this.preEl.show(), this.activeEl.hide(), this.timerEl.show(), this.containerEl.show(), this.containerEl.css("display", "inline-block"), this.preActive = !0, this.timerEl.countdown({until: e, layout: '<div class="days">{dn}</div><div class="hours">{hn}</div><div class="minutes">{mn}</div><div class="seconds">{sn}</div>', onExpiry: function (n) {return function () {n.startActiveCountdown(t - e)}}(this)})}, this.startActiveCountdown = function (e) {
      this.activeEl.show(), this.preEl.hide(), this.containerEl.show(), this.containerEl.css("display", "inline-block"), this.timerEl.show();
      var t = function (e) {return function () {e.accessEnded()}}(this);
      this.preActive ? this.timerEl.countdown("change", {until: e, onExpiry: t}) : this.timerEl.countdown({layout: '<div class="days">{dn}</div><div class="hours">{hn}</div><div class="minutes">{mn}</div><div class="seconds">{sn}</div>', until: e, onExpiry: t}), this.preActive = !1
    }, this.accessEnded = function () {this.activeEl.hide(), this.timerEl.hide(), this.preEl.show(), this.containerEl.slideUp()}, this.init()
  }
}), define("PoE/Widget/YoutubeVideo", ["require", "../jslib/jquery"], function (e) {
  var t = e("jquery"), n = function (e) {
    var n = e instanceof t ? e : t(e);
    if (!n.length)return;
    var r = n.attr("src");
    if (r)return;
    var i = n.data("src");
    i && n.attr("src", i)
  };
  return n
}), define("PoE/Shop", ["require", "plugins", "PoE/Widget/YoutubeVideo"], function (e) {
  var t = e("plugins"), n = e("PoE/Widget/YoutubeVideo"), r = {showBuyItemModal: function (e, r) {
    if (t("#colorbox").is(":visible"))return;
    r = t(r), window.location.hash = "microtransaction-" + e;
    var i = r.closest(".shopItemBase"), s = i.find(".shopBuyItemModal:first"), o = i.find(".video");
    if (o.length)var u = new n(o);
    return t(document).bind("cbox_open", function () {s.show(), t("#colorbox").addClass("colorBoxTheme1")}), t(document).bind("cbox_cleanup", function () {s.hide(), window.location.hash = "", t("#colorbox").removeClass("colorBoxTheme1"), t(document).unbind("cbox_open"), t(document).unbind("cbox_cleanup")}), t.colorbox({inline: !0, href: s}), !1
  }, showVideoPreviewModal: function (e) {
    e = t(e);
    var r = e.parent().find(".shopPreviewModal"), i = new n(r.find(".video"));
    return t(document).bind("cbox_open", function () {r.show(), t("#colorbox").addClass("colorBoxTheme1")}), t(document).bind("cbox_cleanup", function () {r.hide(), t(document).unbind("cbox_open"), t(document).unbind("cbox_cleanup")}), t(document).bind("cbox_close", function () {t("#colorbox").removeClass("colorBoxTheme1")}), t.colorbox({inline: !0, href: r}), !1
  }, buyItem: function (e, n) {
    n = t(n);
    var r = n.closest(".purchaseOptions"), i = n.closest(".shopBuyItemModal"), s = i.find(".buyButton"), o = i.find(".buyButtonDisabled"), u = i.find(".purchasingInfo"), a = i.find(".backButton"), f = i.find(".purchasedInfo"), l = i.find(".errorInfo"), c = l.find(".message"), h = i.find(".totalCost");
    return s.hide(), u.show(), h.hide(), o.show(), t.fn.colorbox.resize(), t.ajax({url: "/shop/buy-item", type: "POST", dataType: "json", data: {itemID: e}, success: function (e) {
      if (e === !1)return;
      u.hide(), a.css("display", "block"), o.hide();
      switch (e.status) {
        case"success":
          f.show();
          break;
        case"error":
          c.text(e.message), l.show()
      }
      POE.Shop.updatePage(), t.fn.colorbox.resize()
    }, error: function (e) {return!1}}), !1
  }, cancelBuyItem: function () {return t.colorbox.close(), !1}, redirPurchaseFromBuyItem: function (e) {return POE.Shop.rememberRecent(e, function () {window.location.href = "/purchase"}), !1}, rememberRecent: function (e, n) {t.ajax({url: "/shop/remember-recently-viewed-item", type: "POST", dataType: "json", data: {itemID: e}, success: n, error: function (e) {return!1}})}, updatePage: function () {
    var e = {items: []}, n = t(".shopCurrentCoinValue.account"), r = t(".shopCurrentCoinValue.guild"), i = t(".shopHideDuringReload"), s = t(".shopShowDuringReload");
    t(".shopItemBase").each(function () {
      var n = t(this), r = n.data("item-id");
      e.items.push({id: n.attr("id"), itemID: r});
      var i = n.find(".disablingLoadingContainer:first"), s = i.find(".loading");
      s.width(n.width()).height(n.height()), i.width(n.width()).height(n.height())
    }), i.hide(), s.show(), n.text("Loading..."), r.text("Loading..."), t.ajax({url: "/shop/xhr-update-page", type: "POST", dataType: "json", data: e, success: function (e) {
      if (e === !1)return;
      for (var o = 0, u = e.items.length; o < u; ++o) {
        var a = t("#" + e.items[o].id), f = e.items[o].itemID;
        a.replaceWith(e.items[o].html), a = t("#" + e.items[o].id)
      }
      n.text(e.accountPoints), r.text(e.guildPoints), i.show(), s.hide()
    }, error: function (e) {return!1}})
  }, loadHashTag: function () {
    var e = "#microtransaction-", n = this;
    if (window.location.hash.indexOf(e) === -1) {
      window.location.hash = "";
      return
    }
    var r = window.location.hash.substr(e.length - 1), i = null, s = r.indexOf(",");
    s === -1 ? i = r.substr(1) : i = r.substring(1, s);
    var o = !1;
    t(".shopItemBase").each(function (e, r) {
      r = t(r);
      if (r.data("item-id") !== i)return;
      return o = !0, n.showBuyItemModal(i, r), !1
    }), o || (window.location.hash = "")
  }};
  return r
}), define("PoE/Ladder/Ladder", ["plugins"], function (e) {
  return function () {
    var t = e("#ladderStatusContainer"), n = e("#leagueStatus"), r = e("#leagueCountdownBox"), i = r.find(".countdownLabel:first"), s = r.find(".timer:first"), o = e("#leagueBeginLabel"), u = e("#leagueEndLabel");
    this.status = null, this.init = function () {
      switch (LADDER_STATUS.status) {
        case"waitStart":
          this.startWait();
          break;
        case"inProgress":
          this.startActive();
          break;
        case"complete":
          this.complete();
          return
      }
    }, this.startWait = function () {LADDER_STATUS.startSecFromNow == 0 ? this.startActive() : (this.status = "waitStart", s.countdown({until: LADDER_STATUS.startSecFromNow, onExpiry: function (e) {return function () {e.startActive()}}(this)}))}, this.startActive = function () {
      var e = function (e) {return function () {e.complete()}}(this);
      this.status == "waitStart" ? (this.status = "inProgress", this.updateStatus(), s.countdown("change", {until: LADDER_STATUS.endSecFromStart, onExpiry: e})) : (LADDER_STATUS.endSecFromNow == 0 && this.complete(), s.countdown({until: LADDER_STATUS.endSecFromNow, onExpiry: e}))
    }, this.updateStatus = function () {n.text(LADDER_STATUS[this.status].message).removeClass().addClass(LADDER_STATUS[this.status]["class"]), o.text(LADDER_STATUS[this.status].beginLabel), u.text(LADDER_STATUS[this.status].endLabel), i.text(LADDER_STATUS[this.status].countdownLabel).removeClass([LADDER_STATUS.waitStart["class"], LADDER_STATUS.inProgress["class"]]).addClass(LADDER_STATUS[this.status]["class"])}, this.complete = function () {this.status = "complete", this.updateStatus(), r.fadeOut("slow", function () {e(this).remove(), t.removeClass("ladderStatusCountdownActive")})}, this.init()
  }
}), define("PoE/Environment", [], function () {
  var e = typeof process != "undefined" && process.versions && process.versions.node, t = null, n = null;
  return{isNode: function () {return e}, isBrowser: function () {return!e}, getAppRoot: function () {return t}, getJsDir: function () {return n}, config: function (e) {
    if (!e)return;
    e.appRoot && (t = e.appRoot), e.jsDir && (n = e.jsDir)
  }}
}), define("PoE/Handlebars/TemplateCollection", ["../jslib/jquery", "Handlebars", "PoE/Environment"], function (e, t, n) {
  var r = {};
  return{load: function (i, s) {
    return i = i.replace(/^\/*/, ""), e.Deferred(function (e) {
      if (r[i] !== undefined) {
        e.resolve(r[i]);
        return
      }
      n.isNode() ? require(["fs", "path"], function (s, o) {
        var u = n.getAppRoot(), a = n.getJsDir();
        if (u === null)throw"appRoot is not configured";
        if (a === null)throw"jsDir is not configured";
        var f = o.resolve(o.join(u, a)), l = o.resolve(o.join(f, i));
        if (l.indexOf(f) !== 0) {
          console.error("File: " + l + " not within " + f), e.reject();
          return
        }
        s.readFile(l, "utf8", function (n, i) {
          if (n) {
            console.error("Failed to open file: %s", n), e.reject();
            return
          }
          r[l] = t.compile(i), e.resolve(r[l])
        })
      }) : require(["text!" + i], function (n) {r[i] = t.compile(n), e.resolve(r[i])})
    }).promise()
  }}
}), define("PoE/Util/Date", ["../jslib/jquery", "moment"], function (e, t) {
  return{Countdown: function (n, r, i) {
    t.isMoment(n) ? n = n.unix() * 1e3 : n = n.getTime();
    var s = e.Deferred(), o = setInterval(function () {i && i(), (new Date).getTime() > n && (clearInterval(o), s.resolve())}, 1e3);
    return r && s.done(r), s.promise()
  }, getTimezone: function () {
    var t = new Date, n = new Date, r = new Date, i, s, o, u, a = e("#create_account");
    n.setDate(1), n.setMonth(1), r.setDate(1), r.setMonth(7), i = parseInt(t.getTimezoneOffset()), s = parseInt(n.getTimezoneOffset()), o = parseInt(r.getTimezoneOffset());
    if (s == o)u = !1; else {
      var f = s - o < 0;
      f && i == s || !f && i == o ? u = !0 : u = !1
    }
    return{offset: i, dst: u}
  }}
}), define("PoE/Model/Account/Account", ["Backbone"], function (e) {return e.RelationalModel.extend({relations: []})}), define("PoE/Model/League/LadderEntry", ["Backbone", "PoE/Util/Date", "PoE/Model/Account/Account"], function (e, t, n) {
  return e.RelationalModel.extend({relations: [
    {type: e.HasOne, key: "account", relatedModel: n}
  ], initialize: function () {}})
}), define("PoE/Backbone/Paginator", ["../jslib/jquery", "Backbone"], function (e, t) {
  return t.Paginator.requestPager.extend({resetPaginator: function (e) {
    var t = this;
    _.defaults(t.paginator_ui, {firstPage: 0, currentPage: 1, perPage: 5, totalPages: 10}), _.each(t.paginator_ui, function (e, n) {_.isUndefined(t[n]) && (t[n] = t.paginator_ui[n])});
    var n = {};
    _.each(t.server_api, function (e, r) {_.isFunction(e) && (e = _.bind(e, t), e = e()), n[r] = e}), this.reset(this.parse(e))
  }, perPageOptions: []})
}), define("PoE/Collection/League/LadderEntries", ["../jslib/jquery", "Backbone", "PoE/Model/League/LadderEntry", "PoE/Backbone/Paginator"], function (e, t, n, r) {return r.extend({model: n, paginator_core: {url: "/api/ladders", dataType: "json"}, paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5, totalPages: 10}, server_api: {offset: function () {return(this.currentPage - 1) * this.perPage}, limit: function () {return this.perPage}, id: function () {return this.id}}, perPageOptions: [5, 20, 50, 100], parse: function (e) {return e.limit && (this.perPage = parseInt(e.limit, 10)), e.leagueId && (this.id = e.leagueId), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries}})}), define("PoE/Widget/ProfileLink/ProfileLink", ["require", "../jslib/jquery", "Backbone", "PoE/Layout/Popup/Popup"], function (e) {
  var t = e("jquery"), n = e("Backbone"), r = e("PoE/Layout/Popup/Popup"), i = {}, s = {};
  return n.View.extend({initialize: function () {
    var e = this, n = t.Deferred();
    this.loaded = n.promise();
    if (this.hasTwitch()) {
      this.$twitch = this.$el.find(".twitch"), this.loadTwitch().done(function () {n.resolve()}), this.options.twitchClickHandler && this.$twitch.on("click", function (t) {
        if (!e.result)return;
        e.options.twitchClickHandler(t, e.result)
      }), this.$twitch.on("mouseover", function (n) {e.isStreaming() && (e.twitchPopup = new r(t('<div class="twitchProfilePopup"><div class="name"></div><img></div>')), e.twitchPopup.el.find("img").attr("src", e.result.stream.preview.medium), e.twitchPopup.el.find(".name").text(e.result.stream.channel.display_name), e.twitchPopup.smartPositionByEl(e.$twitch))}), this.$twitch.on("mouseout", function (n) {e.twitchPopup && t(".twitchProfilePopup").hide()});
      if (this.isTwitchAutoRefresh()) {
        var o = e.$el.attr("data-twitch-user");
        clearTimeout(s[o]), s[o] = setTimeout(function () {delete i[o], e.initialize()}, 6e4 + Math.round(Math.random() * 60) * 1e3)
      }
    } else n.resolve()
  }, loadPromise: function () {return this.loaded}, hasTwitch: function () {return this.$el.hasClass("hasTwitch")}, isTwitchAutoRefresh: function () {return this.$el.hasClass("twitchAutoRefresh")}, isStreaming: function () {return this.hasTwitch() && this.result && this.result.stream && this.result.stream.game === "Path of Exile"}, getTwitchStream: function () {return this.result}, handleResponse: function (e) {
    var t = "https://api.twitch.tv/kraken/streams/";
    if (e && e._links && e._links.self) {
      var n = e._links.self.substr(t.length).toLowerCase();
      i[n].resolve(e)
    }
  }, loadTwitch: function () {
    var e = this.$el.attr("data-twitch-user"), n = this;
    e = e.toLowerCase(), window.twcb || (window.twcb = function (e) {n.handleResponse(e)});
    var r = t.Deferred();
    return i[e] = r, t.ajax({url: "https://api.twitch.tv/kraken/streams/" + encodeURI(e) + "?callback=twcb", dataType: "script", cache: !0}), n.twitchPopup = !1, i[e].done(function (e) {
      n.result = e;
      var r = t('.profile-link[data-twitch-user="' + n.$el.attr("data-twitch-user").replace('"', '"') + '"]');
      n.isStreaming() ? (r.find(".twitch").attr("title", e.stream.channel.status ? e.stream.channel.status : "Streaming Now!"), r.addClass("twitchOnline twitchShow"), r.removeClass("twitchOffline")) : (r.find(".twitch").attr("title", "Offline"), r.addClass("twitchOffline"), r.removeClass("twitchOnline"), r.removeClass("twitchShow"), n.options.showOffline && n.$el.addClass("twitchShow"))
    }), i[e]
  }})
}), define("text", ["module"], function (e) {
  var t, n, r = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], i = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, s = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, o = typeof location != "undefined" && location.href, u = o && location.protocol && location.protocol.replace(/\:/, ""), a = o && location.hostname, f = o && (location.port || undefined), l = [], c = e.config && e.config() || {};
  t = {version: "2.0.3", strip: function (e) {
    if (e) {
      e = e.replace(i, "");
      var t = e.match(s);
      t && (e = t[1])
    } else e = "";
    return e
  }, jsEscape: function (e) {return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")}, createXhr: c.createXhr || function () {
    var e, t, n;
    if (typeof XMLHttpRequest != "undefined")return new XMLHttpRequest;
    if (typeof ActiveXObject != "undefined")for (t = 0; t < 3; t += 1) {
      n = r[t];
      try {e = new ActiveXObject(n)} catch (i) {}
      if (e) {
        r = [n];
        break
      }
    }
    return e
  }, parseName: function (e) {
    var t = !1, n = e.indexOf("."), r = e.substring(0, n), i = e.substring(n + 1, e.length);
    return n = i.indexOf("!"), n !== -1 && (t = i.substring(n + 1, i.length), t = t === "strip", i = i.substring(0, n)), {moduleName: r, ext: i, strip: t}
  }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (e, n, r, i) {
    var s, o, u, a = t.xdRegExp.exec(e);
    return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || u === i)) : !0
  }, finishLoad: function (e, n, r, i) {r = n ? t.strip(r) : r, c.isBuild && (l[e] = r), i(r)}, load: function (e, n, r, i) {
    if (i.isBuild && !i.inlineText) {
      r();
      return
    }
    c.isBuild = i.isBuild;
    var s = t.parseName(e), l = s.moduleName + "." + s.ext, h = n.toUrl(l), p = c.useXhr || t.useXhr;
    !o || p(h, u, a, f) ? t.get(h, function (n) {t.finishLoad(e, s.strip, n, r)}, function (e) {r.error && r.error(e)}) : n([l], function (e) {t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)})
  }, write: function (e, n, r, i) {
    if (l.hasOwnProperty(n)) {
      var s = t.jsEscape(l[n]);
      r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
    }
  }, writeFile: function (e, n, r, i, s) {
    var o = t.parseName(n), u = o.moduleName + "." + o.ext, a = r.toUrl(o.moduleName + "." + o.ext) + ".js";
    t.load(u, r, function (n) {
      var r = function (e) {return i(a, e)};
      r.asModule = function (e, t) {return i.asModule(e, a, t)}, t.write(e, u, r, s)
    }, s)
  }};
  if (c.env === "node" || !c.env && typeof process != "undefined" && process.versions && !!process.versions.node)n = require.nodeRequire("fs"), t.get = function (e, t) {
    var r = n.readFileSync(e, "utf8");
    r.indexOf("﻿") === 0 && (r = r.substring(1)), t(r)
  }; else if (c.env === "xhr" || !c.env && t.createXhr())t.get = function (e, n, r) {
    var i = t.createXhr();
    i.open("GET", e, !0), c.onXhr && c.onXhr(i, e), i.onreadystatechange = function (t) {
      var s, o;
      i.readyState === 4 && (s = i.status, s > 399 && s < 600 ? (o = new Error(e + " HTTP status: " + s), o.xhr = i, r(o)) : n(i.responseText))
    }, i.send(null)
  }; else if (c.env === "rhino" || !c.env && typeof Packages != "undefined" && typeof java != "undefined")t.get = function (e, t) {
    var n, r, i = "utf-8", s = new java.io.File(e), o = java.lang.System.getProperty("line.separator"), u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)), a = "";
    try {
      n = new java.lang.StringBuffer, r = u.readLine(), r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)), n.append(r);
      while ((r = u.readLine()) !== null)n.append(o), n.append(r);
      a = String(n.toString())
    } finally {u.close()}
    t(a)
  };
  return t
}), define("text!PoE/Widget/League/Ladder/LadderEntry.hbt", [], function () {return'<td class="onlineStatus"><img class="onlineStatus" src="/image/ladder/{{#if online}}online{{else}}offline{{/if}}.png" alt="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" title="{{#if online}}{{translate "Online"}}{{else}}{{translate "Offline"}}{{/if}}" /></td>\n<td class="rank">{{rank}}</td>\n<td class="account">{{profileLink account manualInit=true}}</td>\n<td class="character">{{character.name}}{{#if dead}} (<span class="deadText">{{translate "Dead"}}</span>){{/if}}</td>\n<td class="class">{{translate character.class}}</td>\n<td class="level">{{character.level}}</td>\n<td class="experience">{{character.experience}}</td>'}), define("PoE/Widget/League/Ladder/LadderEntry", ["plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Widget/ProfileLink/ProfileLink", "text!PoE/Widget/League/Ladder/LadderEntry.hbt"], function (e, t, n, r) {
  return t.View.extend({tagName: "tr", initialize: function () {this.$el.addClass("entry"), this.options.altRow && this.$el.addClass("even")}, twitchClicked: function (e, t) {
    if (document.location.protocol === "https:" || !t.stream)return;
    e.preventDefault(), this.trigger("twitchProfileClicked", t)
  }, getProfileLink: function () {return this.profileLink}, render: function () {
    var t = this, i = e.Deferred();
    return n.load("PoE/Widget/League/Ladder/LadderEntry.hbt").then(function (e) {
      var n = t.model.toJSON();
      n.dead && t.$el.addClass("dead"), t.$el.html(e(n)), t.profileLink = new r({el: t.$el.find(".profile-link"), showOffline: !0, twitchClickHandler: function (e, n) {t.twitchClicked(e, n)}}), t.profileLink.loadPromise().done(function () {i.resolve()})
    }, function () {}), i.promise()
  }})
}), function (e) {typeof module == "function" ? module.exports = e(this.jQuery || require("jquery")) : this.NProgress = e(this.jQuery)}(function (e) {
  function r(e, t, n) {return e < t ? t : e > n ? n : e}

  function i(e) {return(-1 + e) * 100}

  function s(e, r, s) {
    var o = {}, u = t.getCSSPropPrefix() + "transform", a = t.getCSSPropPrefix() + "transition";
    return n.positionUsing === "translate3d" ? o[u] = "translate3d(" + i(e) + "%,0,0)" : n.positionUsing === "translate" ? o[u] = "translate(" + i(e) + "%,0)" : o["margin-left"] = i(e) + "%", o[a] = "all " + r + "ms " + s, o
  }

  var t = {};
  t.version = "0.1.2";
  var n = t.settings = {minimum: .08, easing: "ease", positionUsing: "", speed: 200, trickle: !0, trickleRate: .02, trickleSpeed: 800, showSpinner: !0, template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};
  return t.configure = function (t) {return e.extend(n, t), this}, t.status = null, t.set = function (e) {
    var i = t.isStarted();
    e = r(e, n.minimum, 1), t.status = e === 1 ? null : e;
    var o = t.render(!i), u = o.find('[role="bar"]'), a = n.speed, f = n.easing;
    return o[0].offsetWidth, o.queue(function (r) {n.positionUsing === "" && (n.positionUsing = t.getPositioningCSS()), u.css(s(e, a, f)), e === 1 ? (o.css({transition: "none", opacity: 1}), o[0].offsetWidth, setTimeout(function () {o.css({transition: "all " + a + "ms linear", opacity: 0}), setTimeout(function () {t.remove(), r()}, a)}, a)) : setTimeout(r, a)}), this
  }, t.isStarted = function () {return typeof t.status == "number"}, t.start = function () {
    t.status || t.set(0);
    var e = function () {
      setTimeout(function () {
        if (!t.status)return;
        t.trickle(), e()
      }, n.trickleSpeed)
    };
    return n.trickle && e(), this
  }, t.done = function (e) {return!e && !t.status ? this : t.inc(.3 + .5 * Math.random()).set(1)}, t.inc = function (e) {
    var n = t.status;
    return n ? (typeof e != "number" && (e = (1 - n) * r(Math.random() * n, .1, .95)), n = r(n + e, 0, .994), t.set(n)) : t.start()
  }, t.trickle = function () {return t.inc(Math.random() * n.trickleRate)}, t.render = function (r) {
    if (t.isRendered())return e("#nprogress");
    e("html").addClass("nprogress-busy");
    var s = e("<div id='nprogress'>").html(n.template), o = r ? "-100" : i(t.status || 0);
    return s.find('[role="bar"]').css({transition: "all 0 linear", transform: "translate3d(" + o + "%,0,0)"}), n.showSpinner || s.find('[role="spinner"]').remove(), s.appendTo(document.body), s
  }, t.remove = function () {e("html").removeClass("nprogress-busy"), e("#nprogress").remove()}, t.isRendered = function () {return e("#nprogress").length > 0}, t.getPositioningCSS = function () {
    var e = document.body.style, t = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
    return t + "Perspective"in e ? "translate3d" : t + "Transform"in e ? "translate" : "margin"
  }, t.getCSSPropPrefix = function () {
    var e = document.body.style;
    return"WebkitTransform"in e ? "-webkit-" : "MozTransform"in e ? "-moz-" : "msTransform"in e ? "-ms-" : "OTransform"in e ? "-o-" : ""
  }, t
}),define("nprogress", ["../jslib/jquery"], function (e) {return function () {return e.NProgress}}(this)),define("PoE/Loader", ["require", "nprogress"], function (e) {
  var t = e("nprogress");
  return{start: function () {t.start()}, done: function () {t.done()}, abort: function () {t.done()}, follow: function (e) {
    var t = this;
    this.start(), e.then(function () {t.done()}, function () {t.abort()})
  }}
}),define("PoE/Handlebars/Helpers", ["Handlebars", "moment", "PoE/Helpers"], function (e, t, n) {
  e.registerHelper("uc", function (e) {return encodeURIComponent(e)}), e.registerHelper("percentageSpecial", function (t, n) {return t.percentageType || t.category ? new e.SafeString("%") : ""}), e.registerHelper("profileLink", function (t, r) {
    var i = e.Utils.escapeExpression(t.name), s = ["profile-link"], o = "", u = "", a = "", f = [], l = "";
    t.staff && s.push("staff"), t.moderator && s.push("forumModerator"), t.challenges.total && (s.push("achieved"), u = "Completed " + e.Utils.escapeExpression(t.challenges.total) + " Challenge" + (t.challenges.total > 1 ? "s" : ""), o = '<img class="achievement" src="' + n.imageUrl("icons/achievements/" + e.Utils.escapeExpression(t.challenges.total) + ".png?v=3") + '" alt="' + u + '" title="' + u + '" />'), t.twitch && (s.push("hasTwitch"), s.push("twitchAutoRefresh"), a = '<a class="twitch" href="http://www.twitch.tv/' + encodeURIComponent(t.twitch.name) + '" target="_blank"></a>', f.push('data-twitch-user="' + e.Utils.escapeExpression(t.twitch.name) + '"')), r && r.hash && r.hash.manualInit && s.push("manualInit"), r && r.hash && r.hash.tab && (l = "/" + r.hash.tab);
    var c = '<span class="' + s.join(" ") + '" ' + f.join(" ") + ">" + '<a href="/account/view-profile/' + i + l + '">' + o + i + "</a>" + a + "</span>";
    return new e.SafeString(c)
  }), e.registerHelper("pagination2", function () {
    var t = this.info, n = t.currentPage, r = t.firstPage, i = t.lastPage, s = t.perPage, o = t.totalPages, u = t.totalRecords, a = this.perPageOptions, f = 1, l = this.paginationClass !== undefined ? this.paginationClass : "pagination", c = '<div class="' + l + '">', h = function (e, t) {return'<a href="#" data-gotopage="' + t + '" class="link gotoPage' + (t == n ? " currentPage" : "") + '">' + e + "</a>"};
    if (u == 0)return"";
    if (o > 1) {
      n > 1 && (c += h(e.helpers.translate("Prev"), n - 1));
      for (var p = Math.min(n - 1, 3); f < p; ++f)c += h(f, f);
      f = Math.max(f, n - 3);
      for (; f < n; ++f)c += h(f, f);
      c += h(f, f), ++f;
      for (var p = Math.min(f + 3, o); f < p; ++f)c += h(f, f);
      f = Math.max(f, o - 3);
      for (; f <= o; ++f)c += h(f, f);
      n < o && (c += h(e.helpers.translate("Next"), n + 1))
    }
    if (a.length) {
      c += '<select class="perPageOptions">';
      for (var f = 0, p = a.length; f < p; ++f) {
        var d = a[f];
        c += '<option value="' + d + '"' + (d == s ? ' selected="selected"' : "") + ">" + d + " " + e.helpers.translate("per page") + "</option>"
      }
      c += "</select>"
    }
    return c += "</div>", new e.SafeString(c)
  }), e.registerHelper("moment", function (e, n) {
    var r = n.hash.format || "dddd, MMMM Do YYYY, h:mm:ss a ZZ";
    return t(e).format(r)
  }), e.registerHelper("ifCond", function (e, t, n, r) {
    switch (t) {
      case"==":
        return e == n ? r.fn(this) : r.inverse(this);
      case"===":
        return e === n ? r.fn(this) : r.inverse(this);
      case"<":
        return e < n ? r.fn(this) : r.inverse(this);
      case"<=":
        return e <= n ? r.fn(this) : r.inverse(this);
      case">":
        return e > n ? r.fn(this) : r.inverse(this);
      case">=":
        return e >= n ? r.fn(this) : r.inverse(this);
      default:
        return r.inverse(this)
    }
  }), e.registerHelper("translate", function (e) {return typeof __ != "undefined" && typeof __[e] != "undefined" ? __[e] : e})
}),define("PoE/View/Widget/Pagination", ["plugins", "Backbone", "Handlebars", "PoE/Loader", "PoE/Handlebars/Helpers"], function (e, t, n, r) {
  return t.View.extend({initialize: function () {this.collection.on("reset", this.doReset, this), this.collection.on("change", this.render, this), this.xhr = null}, events: {"click a.gotoPage": "gotoPage", "change .perPageOptions": "changePerPage"}, gotoPage: function (t) {
    var n = e(t.target), r = n.data("gotopage");
    this.doGoToPage(r), t.preventDefault()
  }, doGoToPage: function (e) {
    var t = this;
    this.xhr && (this.xhr.abort(), this.xhr = null), r.start(), t.trigger("loadStart");
    var n = this.collection.goTo(e);
    this.xhr = n, n.always(function (e) {return function () {t.trigger("loadEnd"), t.xhr = null}}(n))
  }, changePerPage: function (e) {
    var t = this;
    r.start(), this.xhr && (this.xhr.abort(), this.xhr = null), t.trigger("loadStart"), this.collection.howManyPer(parseInt(this.$perPageOptions.find("option:selected").val(), 10))
  }, doReset: function () {r.done(), this.render()}, render: function () {
    var e = n.compile("{{pagination2}}"), t = this.collection.info(), r = {info: t, perPageOptions: this.collection.perPageOptions};
    t.totalRecords <= t.perPage && this.collection.perPageOptions.length === 0 ? this.$el.addClass("hidden") : this.$el.removeClass("hidden"), this.$el.html(e(r)), this.$perPageOptions = this.$el.find(".perPageOptions")
  }})
}),define("text!PoE/Widget/League/Ladder/Ladder.hbt", [], function () {return'{{#if options.title}}\n    <h2>{{options.title}}</h2>\n{{else}}\n    {{#unless options.hideTitle}}\n        <h2>{{translate "Ladder"}}</h2>\n    {{/unless}}\n{{/if}}\n\n<div class="controls">\n    <label for="autoRefresh">{{translate "Auto refresh"}}</label>\n    <input type="checkbox" value="1" name="autoRefresh" />\n    <input type="button" class="refresh button1" value="{{translate "Refresh"}}" />\n    {{#if league}}\n        <a class="exportCsv button1" href="/ladder/export-csv/league/{{uc league.id}}/index/1">{{translate "Export CSV"}}</a>\n    {{/if}}\n</div>\n<div class="loading"></div>\n<table>\n    <thead>\n	    <tr>\n	        <th></th>\n	        <th>{{translate "Rank"}}</th>\n	        <th>{{translate "Account"}}</th>\n	        <th>{{translate "Character"}}</th>\n	        <th>{{translate "Class"}}</th>\n	        <th>{{translate "Level"}}</th>\n	        <th>{{translate "Experience"}}</th>\n	    </tr>\n    </thead> \n    <tbody class="entries"></tbody>\n</table>\n<div class="pagination"></div>'}),define("PoE/Widget/League/Ladder/Ladder", ["plugins", "Backbone", "moment", "PoE/Handlebars/TemplateCollection", "PoE/Collection/League/LadderEntries", "./LadderEntry", "PoE/View/Widget/Pagination", "text!PoE/Widget/League/Ladder/Ladder.hbt"], function (e, t, n, r, i, s, o) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.$el.attr("class", "ladderView"), !this.collection && this.model && (this.collection = this.model.get("ladder")), this.collection.info().totalRecords == 0 && this.$el.addClass("empty"), this.pagination = new o({collection: this.collection}), this.pagination.render(), this.collection.on("change", function () {this.render()}), this.collection.on("reset", function () {e.hideLoader(), e.addAll()}), this.pagination.on("loadStart", function () {e.showLoader()}), this.pagination.on("loadEnd", function () {e.hideLoader()}), this.autoRefreshInterval = null, this.ladderEntries = []
  }, showLoader: function () {this.$entries.css("opacity", .5), this.$loading.show(), this.$loading.css("top", this.$entries.offset().top - this.$el.offset().top), this.$loading.height(this.$entries.height())}, hideLoader: function () {this.$entries.css("opacity", 1), this.$loading.hide()}, initElementRefs: function () {this.$entries = this.$el.find(".entries"), this.$loading = this.$el.find(".loading"), this.$autoRefresh = this.$el.find('input[name="autoRefresh"]')}, events: {"click .refresh": "refresh", 'change input[name="autoRefresh"]': "autoRefresh"}, autoRefresh: function (e) {
    var t = this;
    e.preventDefault(), this.$autoRefresh.is(":checked") && this.autoRefreshInterval === null ? this.autoRefreshInterval = setInterval(function () {t.refresh()}, 3e4) : this.autoRefreshInterval !== null && (clearInterval(this.autoRefreshInterval), this.autoRefreshInterval = null)
  }, refresh: function (e) {
    var t = this;
    e && e.preventDefault(), this.showLoader(), this.collection.fetch().always(function () {t.hideLoader()})
  }, addAll: function () {
    var t = this, n = [];
    return this.$entries.empty(), this.ladderEntries = [], this.collection.each(function (e, r) {
      var e = new s({model: e, altRow: r % 2 == 1});
      n.push(e.render()), t.$entries.append(e.el), e.on("twitchProfileClicked", function (e) {t.trigger("twitchProfileClicked", e)}), t.ladderEntries.push(e)
    }), e.when.apply(null, n)
  }, render: function () {
    var e = this;
    return r.load("PoE/Widget/League/Ladder/Ladder.hbt").done(function (t) {
      var n = {options: {}};
      e.model && (n.league = e.model.toJSON()), e.options.hideTitle && (n.options.hideTitle = !0), e.options.title && (n.options.title = e.options.title), e.$el.html(t(n)), e.initElementRefs(), e.$loading.hide(), e.$el.find(".pagination").replaceWith(e.pagination.el), e.addAll().done(function () {
        e.collection.every(function (t, n) {
          var r = e.ladderEntries[n].getProfileLink();
          return r.isStreaming() ? (e.trigger("foundInitialLivestream", r.getTwitchStream()), !1) : !0
        })
      })
    })
  }})
}),define("PoE/Polyfill/Placeholder", ["../jslib/jquery"], function (e) {
  Modernizr.input.placeholder || (e("[placeholder]").focus(function () {
    var t = e(this);
    t.val() == t.attr("placeholder") && (t.val(""), t.removeClass("placeholder"))
  }).blur(function () {
    var t = e(this);
    if (t.val() == "" || t.val() == t.attr("placeholder"))t.addClass("placeholder"), t.val(t.attr("placeholder"))
  }).blur(), e("[placeholder]").parents("form").submit(function () {
    e(this).find("[placeholder]").each(function () {
      var t = e(this);
      t.val() == t.attr("placeholder") && t.val("")
    })
  }))
}),define("PoE/Layout/MenuPopupDelay", ["../jslib/jquery"], function (e) {
  e("#siteNav>li").hover(function (t) {
    t = e(t.delegateTarget), t.addClass("hoverHide");
    var n = setTimeout(function () {t.addClass("hoverShow").removeClass("hoverHide"), t.data("timer", null)}, 150);
    t.data("timer", n)
  }, function (t) {
    t = e(t.delegateTarget), t.removeClass("hoverShow").removeClass("hoverHide");
    var n = t.data("timer");
    n && (clearTimeout(n), t.data("timer", null))
  })
}),define("PoE/Backbone/Collection/Item/ItemCollection", ["Backbone", "PoE/Backbone/Model/Item/Item"], function (e, t) {return e.Collection.extend({model: t})}),define("PoE/API/Character", ["../jslib/jquery", "PoE/Backbone/Collection/Item/ItemCollection"], function (e, t) {
  return{getItems: function (n) {
    var r = e.Deferred(), i = {character: n.characterName};
    return n.accountName && (i.accountName = n.accountName), e.ajax({url: "/character-window/get-items", type: "POST", dataType: "json", data: i, success: function (e) {r.resolve(new t(e.items))}}), r.promise()
  }}
}),define("PoE/Inventory/Constants", [], function () {return{gridSize: 47.464503042596, inventoryWidth: .60851926977688, inventory: {bodyArmour: {x: 247.05882352941, y: 124.13793103448}, weapon: {x: 60.851926977688, y: 29.20892494929}, offhand: {x: 433.26572008114, y: 29.20892494929}, boots: {x: 363.89452332657, y: 230.62880324544}, ring: {x: 177.68762677485, y: 171.60243407708}, ring2: {x: 363.89452332657, y: 171.60243407708}, amulet: {x: 363.89452332657, y: 112.57606490872}, gloves: {x: 130.22312373225, y: 230.62880324544}, belt: {x: 247.05882352941, y: 278.09330628803}, helm: {x: 247.05882352941, y: 17.647058823529}, flask: {x: 181.33874239351, y: 336.51115618661}, stash: {x: 15.212981744422, y: 97.3630831643}, main: {x: 9, y: 449.56795131846}}, stashBounds: {w: 600, h: 778.9046653144}, inventoryBounds: {w: 600, h: 781.33874239351}}}),define("PoE/Inventory/MainInventoryPanel", ["plugins", "Backbone", "PoE/API/Character", "PoE/Item/Item", "PoE/Backbone/EventBus", "./Constants"], function (e, t, n, r, i, s) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.$el.addClass("mainInventoryPanel"), this.renderedItems = [], this.activeCharacter = this.options.activeCharacter, this.accountName = this.options.accountName || null, this.weaponSlot = 1, i.on("activeCharacterChanged", function (t) {e.activeCharacter = t, e.render()})
  }, events: {"click .weaponSwap1.left": "swapWeaponSlot", "click .weaponSwap2.left": "swapWeaponSlot", "click .weaponSwap1.right": "swapWeaponSlot", "click .weaponSwap2.right": "swapWeaponSlot", "click .weaponSwapMini.left": "swapWeaponSlot", "click .weaponSwapMini.right": "swapWeaponSlot"}, showCharacterItems: function () {
    var e = this, t = {characterName: this.activeCharacter.get("name")};
    this.accountName && (t.accountName = this.accountName), n.getItems(t).done(function (t) {e.collection = t, e.showItems()})
  }, showItems: function () {
    var e = this;
    this.clearItems(), this.weapon1 = null, this.weapon2 = null, this.offhand1 = null, this.offhand2 = null, this.collection.each(function (t) {
      var n = 0, i = 0, o = 1, u = 1, a = t.get("x"), f = t.get("y"), l = t.get("w"), c = t.get("h"), h = l, p = c, d = t.get("inventoryId"), v = new r({model: t});
      switch (d) {
        case"MainInventory":
          n = s.inventory.main.x + s.gridSize * a, i = s.inventory.main.y + s.gridSize * f;
          break;
        case"BodyArmour":
          n = s.inventory.bodyArmour.x, i = s.inventory.bodyArmour.y, h = 2, p = 3;
          break;
        case"Weapon":
          e.weapon1 = v, n = s.inventory.weapon.x, i = s.inventory.weapon.y, h = 2, p = 4, v.$el.hide();
          break;
        case"Weapon2":
          e.weapon2 = v, n = s.inventory.weapon.x, i = s.inventory.weapon.y, h = 2, p = 4, v.$el.hide();
          break;
        case"Offhand":
          e.offhand1 = v, n = s.inventory.offhand.x, i = s.inventory.offhand.y, h = 2, p = 4, v.$el.hide();
          break;
        case"Offhand2":
          e.offhand2 = v, n = s.inventory.offhand.x, i = s.inventory.offhand.y, h = 2, p = 4, v.$el.hide();
          break;
        case"Boots":
          n = s.inventory.boots.x, i = s.inventory.boots.y, h = 2, p = 2;
          break;
        case"Ring":
          n = s.inventory.ring.x, i = s.inventory.ring.y;
          break;
        case"Ring2":
          n = s.inventory.ring2.x, i = s.inventory.ring2.y;
          break;
        case"Amulet":
          n = s.inventory.amulet.x, i = s.inventory.amulet.y;
          break;
        case"Gloves":
          n = s.inventory.gloves.x, i = s.inventory.gloves.y;
          break;
        case"Belt":
          n = s.inventory.belt.x, i = s.inventory.belt.y;
          break;
        case"Helm":
          n = s.inventory.helm.x, i = s.inventory.helm.y;
          break;
        case"Flask":
          n = s.inventory.flask.x + a * s.gridSize, i = s.inventory.flask.y
      }
      n += 5, i += 82;
      var m = {character: e.activeCharacter.get("name"), item: t, inventory: d};
      e.renderedItems.push(v), v.render(), v.setPlaced(h, p), v.on("itemClick", function (t) {return function () {e.itemClicked(t)}}(m)), e.$el.append(v.$el), v.$el.css("position", "absolute"), v.$el.css("left", n), v.$el.css("top", i)
    }), this.showActiveWeaponSlots()
  }, swapWeaponSlot: function (e) {this.weaponSlot === 1 ? this.weaponSlot = 2 : this.weaponSlot = 1, this.showActiveWeaponSlots()}, showActiveWeaponSlots: function () {
    var e = null, t = null, n = null, r = null, i = null, s = function () {}, o = function () {}, u = "weapon" + this.weaponSlot, a = "offhand" + this.weaponSlot, o = this.weaponSlot === 1 ? 2 : 1;
    hideW = "weapon" + o, hideO = "offhand" + o, this[u] && this[u].$el.show(), this[u] && this[u].$el.show(), this.$weaponSwapMiniL.empty(), this.$weaponSwapMiniR.empty(), this.showMiniSlots(!1), this.weaponSlot === 1 ? (this.weapon1 && this.weapon1.$el.show(), this.offhand1 && this.offhand1.$el.show(), this.weapon2 && (this.showMiniSlots(!0), this.populateSwapMini(this.weapon2.$el, this.$weaponSwapMiniL), this.weapon2.$el.hide()), this.offhand2 && (this.showMiniSlots(!0), this.populateSwapMini(this.offhand2.$el, this.$weaponSwapMiniR), this.offhand2.$el.hide()), this.$weaponSwap1.show(), this.$weaponSwap2.hide()) : (this.weapon2 && this.weapon2.$el.show(), this.offhand2 && this.offhand2.$el.show(), this.weapon1 && (this.showMiniSlots(!0), this.populateSwapMini(this.weapon1.$el, this.$weaponSwapMiniL), this.weapon1.$el.hide()), this.offhand1 && (this.showMiniSlots(!0), this.populateSwapMini(this.offhand1.$el, this.$weaponSwapMiniR), this.offhand1.$el.hide()), this.$weaponSwap2.show(), this.$weaponSwap1.hide())
  }, showMiniSlots: function (e) {e ? (this.$weaponSwapMiniL.show(), this.$weaponSwapMiniR.show()) : (this.$weaponSwapMiniL.hide(), this.$weaponSwapMiniR.hide())}, populateSwapMini: function (e, t) {
    var n = e.find(".iconContainer").offset().top - e.offset().top, r = s.gridSize * 2, i = s.gridSize * 4, o = e.find(".icon").width(), u = i - 2 * n, a = 6, f = t.width() - 2 * a, l = t.height() - 2 * a, c = e.find(".icon img").clone();
    c.width(o * (f / r)), c.height(u * (l / i)), c.css("top", (l - c.height()) / 2 + a), c.css("left", (f - c.width()) / 2 + a), t.append(c)
  }, clearItems: function () {
    for (var e = 0, t = this.renderedItems.length; e < t; ++e)this.renderedItems[e].close();
    this.renderedItems = []
  }, itemClicked: function (e) {i.trigger("inventoryItem.click", e)}, show: function () {this.$el.show()}, hide: function () {this.$el.hide()}, close: function () {this.remove(), this.unbind()}, render: function () {
    var t = e.Deferred();
    return this.$el.empty().append('<div class="weaponSwap1 left"></div><div class="weaponSwap2 left"></div><div class="weaponSwap1 right"></div><div class="weaponSwap2 right"></div><div class="weaponSwapMini left"></div><div class="weaponSwapMini right"></div>'), this.$weaponSwap1 = this.$el.find(".weaponSwap1"), this.$weaponSwap2 = this.$el.find(".weaponSwap2"), this.$weaponSwapMiniL = this.$el.find(".weaponSwapMini.left"), this.$weaponSwapMiniR = this.$el.find(".weaponSwapMini.right"), this.showCharacterItems(), t.resolve(), this.delegateEvents(), t.promise()
  }})
}),define("PoE/API/League", ["../jslib/jquery", "PoE/Backbone/Collection/Item/ItemCollection"], function (e, t) {
  return{getStashItems: function (n) {
    var r = e.Deferred(), i = {};
    return i.league = n.league, i.tabs = n.tabs ? 1 : 0, i.tabIndex = n.tabIndex, n.accountName && (i.accountName = n.accountName), e.ajax({url: "/character-window/get-stash-items", type: "POST", dataType: "json", data: i, success: function (e) {
      var n = {};
      e.tabs && (n.tabs = e.tabs), r.resolve(new t(e.items), n)
    }}), r.promise()
  }, getMTXStashItems: function (n) {
    var r = e.Deferred(), i = {};
    return i.league = n.league, i.tabs = n.tabs ? 1 : 0, i.tabIndex = n.tabIndex, n.accountName && (i.accountName = n.accountName), e.ajax({url: "/character-window/get-mtx-stash-items", type: "POST", dataType: "json", data: i, success: function (e) {
      var n = {};
      e.tabs && (n.tabs = e.tabs), r.resolve(new t(e.items), n, e.selectedTab)
    }}), r.promise()
  }}
}),define("PoE/CharacterWindow/Tab", ["require", "PoE/Environment/Font"], function (e) {
  var t = e("PoE/Environment/Font"), n = function (e, t, n, r, i, s, o, u) {
    this.init = function () {
      this.$el = $('<div class="tab"><div class="l"></div><div class="label"></div><div class="r"></div></div>'), this.srcL = n, this.srcC = r, this.srcR = i, this.$el.find(".label").text(e), this.onclick = o && o.onclick ? o.onclick : function () {}, this.onload = o && o.onload ? o.onload : function () {}, this.$el.on("click", this.onclick), this.$el.hide(), this.width = null, this.height = null, this.loaded = !1, this.selected = !1, this.name = e, this.index = t, this.colour = s, this.hidden = u;
      var a = this;
      this.$el.click(function () {a.onclick()})
    }, this.getColour = function () {return this.colour}, this.refresh = function () {this.$el.children().css("background-position", "0px " + (this.selected || this.hovered ? this.height : 0) + "px")}, this.select = function () {this.selected = !0, this.refresh()}, this.deselect = function () {this.selected = !1, this.refresh()}, this.isLoaded = function () {return this.loaded}, this.show = function () {
      this.$el.show();
      var e = this
    }, this.hide = function () {this.$el.hide()}, this.init()
  };
  return n.prototype.load = function () {
    this.imgC = new Image, this.imgL = new Image, this.imgR = new Image;
    var e = this, n = [];
    if (this.isLoaded()) {
      var r = $.Deferred();
      return r.resolve(), r
    }
    n.push(t.waitLoad("FontinRegular"));
    var r = $.Deferred();
    this.imgC.onload = function (t) {return function () {e.$el.find(".label").css("background-image", "url('" + e.srcC + "')").height(e.imgC.height / 2), t.resolve()}}(r), n.push(r), this.imgC.src = this.srcC;
    var r = $.Deferred();
    this.imgL.onload = function (t) {return function () {e.$el.find(".l").css("background-image", "url('" + e.srcL + "')").width(e.imgL.width).height(e.imgL.height / 2), t.resolve()}}(r), n.push(r), this.imgL.src = this.srcL;
    var r = $.Deferred();
    return this.imgR.onload = function (t) {return function () {e.$el.find(".r").css("background-image", "url('" + e.srcR + "')").width(e.imgR.width).height(e.imgR.height / 2), t.resolve()}}(r), n.push(r), this.imgR.src = this.srcR, $.when.apply(null, n).then(function () {e.loaded = !0, e.$el.show(), e.width = e.$el.find(".label").width() + e.$el.find(".l").width() + e.$el.find(".r").width(), e.height = e.$el.height(), e.$el.width(e.width), e.$el.height(e.height), e.$el.hide(), e.refresh(), e.onload(), r.resolve()}).promise()
  }, n
}),define("PoE/CharacterWindow/TabsControl", ["PoE/CharacterWindow/Tab", "PoE/Layout/Popup/Popup", "../jslib/jquery", "jquery.jscrollpane"], function (e, t, n) {
  return function (r, i) {
    this.init = function () {
      var e = this;
      this.el = n(r), this.onTabClicked = function () {}, this.controls = {}, this.controls.leftControlsEl = this.el.find(".leftControls"), this.controls.leftButtonEl = this.controls.leftControlsEl.find(".leftButton"), this.controls.rightControlsEl = this.el.find(".rightControls"), this.controls.rightButtonEl = this.controls.rightControlsEl.find(".rightButton"), this.controls.tabSelectButtonEl = this.controls.rightControlsEl.find(".tabSelectButton"), this.controls.tabSelectEl = this.controls.rightControlsEl.find(".stashTabSelect"), this.controls.visible = !1, this.controls.tabsControl = this, this.controls.leftButtonDown = !1, this.controls.rightButtonDown = !1, this.controls.tabSelectPopup = null, this.organiseInterval = null, this.doOrganise = !1, this.controls.leftControlsWidth = function () {return this.leftControlsEl.width()}, this.controls.rightControlsWidth = function () {return this.rightControlsEl.width()}, this.controls.leftButtonOnclick = function () {}, this.controls.rightButtonOnclick = function () {}, this.controls.tabSelectButtonOnclick = function () {}, this.controls.leftButtonEl.on("mousedown", function () {e.controls.leftButtonDown = !0, setTimeout(function () {e.scrollTabsLeftRepeat()}, 50)}), this.controls.leftButtonEl.on("mouseup", function () {e.controls.leftButtonDown = !1, e.endScrollTabsLeftRepeat(), e.scrollTabsLeft()}), this.controls.rightButtonEl.on("mousedown", function () {e.controls.rightButtonDown = !0, setTimeout(function () {e.scrollTabsRightRepeat()}, 50)}), this.controls.rightButtonEl.on("mouseup", function () {e.controls.rightButtonDown = !1, e.endScrollTabsRightRepeat(), e.scrollTabsRight()}), this.controls.tabSelectButtonEl.on("click", function () {
        e.controls.tabSelectButtonOnclick();
        if (e.controls.tabSelectPopup === null)return;
        e.controls.tabSelectPopup.isVisible() ? e.controls.tabSelectPopup.hide() : (e.controls.tabSelectPopup.positionRightTopEl(e.controls.tabSelectButtonEl), e.controls.tabSelectEl.jScrollPane({showArrows: !0}))
      }), this.controls.show = function () {this.leftControlsEl.show(), this.rightControlsEl.show(), this.tabsControl.tabsEl.css("left", this.leftControlsEl.width()), this.tabsControl.tabsEl.css("right", this.rightControlsEl.width()), this.tabSelectPopup === null && (this.tabSelectEl.width(this.tabSelectEl.width() + 16), this.tabSelectEl.jScrollPane({showArrows: !0}), this.tabSelectPopup = new t(this.tabSelectEl), this.tabSelectPopup.hide()), this.visible = !0}, this.tabsEl = this.el.find(".tabs:first"), this.visibleTabsWidth = 0, this.visibleTabs = [], this.tabs = [], this.tabsAlign = "l", this.leftIndex = null, this.rightIndex = null, this.selectedTab = null, this.tabsOverflow = !1, this.leftIndex = 0;
      var e = this;
      this.width = this.el.width(), this.widthLessControls = this.width
    }, this.scrollTabsLeft = function () {(this.tabsAlign == "l" || this.visibleTabsWidth == this.tabsEl.width()) && this.leftIndex > 0 && --this.leftIndex, this.tabsAlign = "l", this.organise(), this.controls.leftButtonOnclick()}, this.scrollTabsRight = function () {(this.tabsAlign == "r" || this.visibleTabsWidth == this.tabsEl.width()) && this.rightIndex < this.tabs.length - 1 && ++this.rightIndex, this.tabsAlign = "r", this.organise(), this.controls.rightButtonOnclick()}, this.scrollTabsLeftRepeatInterval = null, this.scrollTabsLeftRepeat = function () {
      if (this.scrollTabsLeftRepeatInterval !== null || !this.controls.leftButtonDown)return;
      var e = this;
      this.scrollTabsLeftRepeatInterval = setInterval(function () {e.scrollTabsLeft()}, 100)
    }, this.endScrollTabsLeftRepeat = function () {
      if (this.scrollTabsLeftRepeatInterval === null)return;
      clearInterval(this.scrollTabsLeftRepeatInterval), this.scrollTabsLeftRepeatInterval = null
    }, this.scrollTabsRightRepeatInterval = null, this.scrollTabsRightRepeat = function () {
      if (this.scrollTabsRightRepeatInterval !== null || !this.controls.rightButtonDown)return;
      var e = this;
      this.scrollTabsRightRepeatInterval = setInterval(function () {e.scrollTabsRight()}, 100)
    }, this.endScrollTabsRightRepeat = function () {
      if (this.scrollTabsRightRepeatInterval === null)return;
      clearInterval(this.scrollTabsRightRepeatInterval), this.scrollTabsRightRepeatInterval = null
    }, this.getSelectedTabIndex = function () {return this.selectedTab === null ? 0 : this.selectedTab.index}, this.getSelectedTab = function () {return this.selectedTab}, this.tabLoaded = function (e) {this.organise()}, this.tabClicked = function (e) {this.selectedTab.deselect(), e.select(), this.selectedTab = e, e.index == this.leftIndex && this.tabsAlign == "r" ? (this.tabsAlign = "l", this.organise()) : e.index == this.rightIndex && this.tabsAlign == "l" ? (this.tabsAlign = "r", this.organise()) : e.index < this.leftIndex ? (this.leftIndex = e.index, this.tabsAlign = "l", this.organise()) : e.index > this.rightIndex && (this.rightIndex = e.index, this.tabsAlign = "r", this.organise()), this.organise(), this.onTabClicked(e)}, this.hide = function () {
      this.el.hide();
      if (this.controls.tabSelectPopup === null)return;
      this.controls.tabSelectPopup.hide()
    }, this.show = function () {this.el.show()}, this.close = function () {
      if (this.controls.tabSelectPopup === null)return;
      this.controls.tabSelectPopup.el.remove()
    }, this.loadTabs = function (t) {
      var r = this;
      this.leftIndex = 0, this.tabsAlign = "l", this.tabsEl.empty(), this.tabs = [], this.controls.tabSelectEl.empty(), this.controls.tabSelectPopup !== null && (this.controls.tabSelectPopup.el.remove(), this.controls.tabSelectPopup = null);
      for (var i = 0, s = t.length; i < s; ++i) {
        var o = new e(t[i].n, i, t[i].srcL, t[i].srcC, t[i].srcR, t[i].colour, null, t[i].hidden), u = o.$el;
        o.onclick = function () {r.tabClicked(this)}, this.tabs[i] = o, this.tabsEl.append(u);
        if (!t[i].hidden) {
          var a = n('<div class="option"></div>');
          a.text(o.name);
          if (t[i].colour.r !== 124 && t[i].colour.g !== 84 && t[i].colour.b !== 54) {
            var f = "rgb(" + t[i].colour.r + "," + t[i].colour.g + "," + t[i].colour.b + ")", l = 40, c = "rgb(" + Math.max(t[i].colour.r - l, 0) + "," + Math.max(t[i].colour.g - l, 0) + "," + Math.max(t[i].colour.b - l, 0) + ")";
            a.css("background", c), a.hover(function (e) {return function () {n(this).css("background", e)}}(f), function (e) {return function () {n(this).css("background", e)}}(c))
          }
          a.on("click", function (e) {return function () {r.tabClicked(e)}}(o)), this.controls.tabSelectEl.append(a)
        }
        t[i].selected && (this.selectedTab = this.tabs[i], this.selectedTab.select())
      }
      this.organise()
    }, this.organise = function () {
      var e = this;
      this.organiseInterval !== null && (clearInterval(this.organiseInterval), this.organiseInterval = null), this.doOrganise = !0, this.organiseInterval = setInterval(function () {
        if (!e.doOrganise)return;
        var t = 0, n = [], r = [], i = function (i) {
          var s = e.tabs[i];
          return s.isLoaded() ? (t += s.width, r.push(s), t > e.width ? (e.tabsOverflow = !0, !0) : !1) : (n.push(s), !1)
        };
        if (e.tabsAlign == "l") {
          for (var s = e.leftIndex, o = e.tabs.length - 1; s <= o; ++s)if (i(s) || s == o) {
            e.rightIndex = s;
            break
          }
        } else for (var s = e.rightIndex; s >= 0; --s)if (i(s) || s == 0) {
          e.leftIndex = s;
          break
        }
        for (var s = 0, o = e.visibleTabs.length; s < o; ++s)e.visibleTabs[s].hide();
        e.visibleTabsWidth = 0, e.visibleTabs = [];
        if (e.controls.visible || t > e.width) {
          e.tabsEl.css("self", e.controls.leftControlsWidth()), e.controls.show(!0), e.tabsEl.addClass("tabsOverflow");
          var u = function (n, i) {
            var s = r[n];
            return s.hidden ? !1 : (s.$el.css("position", "absolute").css(i ? "right" : "left", "").css(i ? "left" : "right", t), s.show(), e.visibleTabs.push(s), e.visibleTabsWidth += s.width, t += s.width, t >= e.widthLessControls ? !0 : !1)
          };
          t = 0;
          if (e.tabsAlign == "l") {
            for (var s = 0, o = r.length - 1; s <= o; ++s)if (u(s, !0) || s == o) {
              e.rightIndex = r[s].index;
              break
            }
          } else for (var s = 0, o = r.length - 1; s <= o; ++s)if (u(s, !1) || s == o) {
            e.leftIndex = r[s].index;
            break
          }
        } else for (var s = 0, o = r.length; s < o; ++s) {
          var a = r[s];
          e.visibleTabs.push(a), e.visibleTabsWidth += a.width, a.$el.css("position", "relative").css("display", "inline-block").css("left", "").css("right", ""), a.hidden || a.show()
        }
        this.doOrganise = !1;
        if (n.length > 0)for (var s = 0, o = n.length; s < o; ++s) {
          var f = n[s].load();
          f.then(function () {e.doOrganise = !0}, function () {console.warn("Failed to load tab", s), clearInterval(e.organiseInterval), e.organiseInterval = null})
        } else clearInterval(e.organiseInterval), e.organiseInterval = null, setTimeout(function () {
          for (var t = 0; t < e.visibleTabs.length; t++) {
            var n = e.visibleTabs[t];
            n.hidden || n.show(), n.$el.find(".r").width(18)
          }
        }, 100)
      }, 50)
    }, this.init()
  }
}),define("PoE/Inventory/StashPanel", ["plugins", "Backbone", "PoE/API/League", "PoE/Item/Item", "PoE/Backbone/EventBus", "PoE/CharacterWindow/TabsControl", "./Constants", "PoE/Helpers"], function (e, t, n, r, i, s, o, u) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.$el.addClass("stashPanel"), this.renderedItems = [], this.activeLeague = this.options.activeLeague, this.accountName = this.options.accountName || null, i.on("activeCharacterChanged", function (t) {
      if (e.activeLeague == t.get("league"))return;
      e.activeLeague = t.get("league"), e.render()
    })
  }, initElementRefs: function () {this.$borderTop = this.$el.find(".border.t"), this.$borderTopRight = this.$el.find(".border.tr"), this.$borderRight = this.$el.find(".border.r"), this.$borderBottomRight = this.$el.find(".border.br"), this.$borderBottom = this.$el.find(".border.b"), this.$borderBottomLeft = this.$el.find(".border.bl"), this.$borderLeft = this.$el.find(".border.l"), this.$borderTopLeft = this.$el.find(".border.tl")}, showStashItems: function (e) {
    var t = this, r = {league: this.activeLeague, tabs: !!e, tabIndex: this.tabsControl.getSelectedTabIndex(), accountName: this.accountName};
    n.getStashItems(r).done(function (e, n) {t.collection = e, n.tabs && t.createStashTabs(n.tabs), t.showItems()})
  }, showItems: function () {
    var e = this;
    this.clearItems(), this.collection.each(function (t) {
      var n = 0, i = 0, s = 1, u = 1, a = t.get("x"), f = t.get("y"), l = t.get("w"), c = t.get("h"), h = l, p = c, d = t.get("inventoryId");
      n = o.inventory.stash.x + o.gridSize * a, i = o.inventory.stash.y + o.gridSize * f, n -= 1, i += 46, s = l * o.gridSize, u = c * o.gridSize, clickCallbackData = {league: e.activeLeague, item: t, inventory: d};
      var v = new r({model: t});
      e.renderedItems.push(v), v.render(), v.setPlaced(h, p), v.on("itemClick", function (t) {return function () {e.itemClicked(t)}}(clickCallbackData)), e.$el.append(v.$el), v.$el.css("position", "absolute"), v.$el.css("left", n), v.$el.css("top", i)
    })
  }, clearItems: function () {
    for (var e = 0, t = this.renderedItems.length; e < t; ++e)this.renderedItems[e].close();
    this.renderedItems = []
  }, createStashTabs: function (e) {
    this.tabsControl.loadTabs(e);
    var t = this.tabsControl.getSelectedTab(), n;
    if (!t)return;
    n = t.getColour(), this.setBorderColour(n.r, n.g, n.b)
  }, itemClicked: function (e) {i.trigger("inventoryItem.click", e)}, show: function () {this.tabsControl.show(), this.$el.show()}, hide: function () {this.$el.hide(), this.tabsControl.hide()}, close: function () {this.tabsControl.close(), this.remove(), this.unbind()}, setBorderColour: function (e, t, n) {this.$borderTop.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-t.png") + "')"), this.$borderTopRight.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-tr.png") + "')"), this.$borderRight.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-r.png") + "')"), this.$borderBottomRight.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-br.png") + "')"), this.$borderBottom.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-b.png") + "')"), this.$borderBottomLeft.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-bl.png") + "')"), this.$borderLeft.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-l.png") + "')"), this.$borderTopLeft.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-tl.png") + "')")}, render: function () {
    var t = e.Deferred();
    this.$el.html('                <div id="stash-tab-container" class="stashTabContainer tabControl">                    <div class="leftControls">                        <div class="leftButton"></div>                    </div>                    <div class="tabs"></div>                    <div class="rightControls">                        <div class="rightButton"></div>                        <div class="tabSelectButton"></div>                        <div class="stashTabSelect poeScroll FontinRegular"></div>                    </div>                </div>                <div class="border tl"></div>                 <div class="border t"></div>                 <div class="border tr"></div>                 <div class="border r"></div>                 <div class="border br"></div>                 <div class="border b"></div>                 <div class="border bl"></div>                 <div class="border l"></div>             ');
    var n = this;
    return n.$el.find("img").attr("src", n.options.stashImageSrc), this.$tabsControl = n.$el.find("#stash-tab-container"), this.tabsControl = new s(this.$tabsControl, this.options.tabControlConfig), this.tabsControl.onTabClicked = function (e) {
      var t = e.getColour();
      n.setBorderColour(t.r, t.g, t.b), n.showStashItems()
    }, this.showStashItems(!0), this.rendered = !0, this.initElementRefs(), t.resolve(), t.promise()
  }})
}),define("PoE/Inventory/MTXStashPanel", ["plugins", "Backbone", "PoE/API/League", "PoE/Item/Item", "PoE/Backbone/EventBus", "PoE/CharacterWindow/TabsControl", "./Constants", "PoE/Helpers"], function (e, t, n, r, i, s, o, u) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.$el.addClass("stashPanel").addClass("mtxStashPanel"), this.renderedItems = [], this.activeLeague = this.options.activeLeague, this.accountName = this.options.accountName || null, i.on("activeCharacterChanged", function (t) {
      if (e.activeLeague == t.get("league"))return;
      e.activeLeague = t.get("league"), e.render()
    })
  }, initElementRefs: function () {this.$borderTop = this.$el.find(".border.t"), this.$borderTopRight = this.$el.find(".border.tr"), this.$borderRight = this.$el.find(".border.r"), this.$borderBottomRight = this.$el.find(".border.br"), this.$borderBottom = this.$el.find(".border.b"), this.$borderBottomLeft = this.$el.find(".border.bl"), this.$borderLeft = this.$el.find(".border.l"), this.$borderTopLeft = this.$el.find(".border.tl")}, showMTXStashItems: function (e) {
    var t = this, r = {league: this.activeLeague, tabs: !!e, tabIndex: this.tabsControl.getSelectedTabIndex(), accountName: this.accountName};
    n.getMTXStashItems(r).done(function (e, n, r) {t.collection = e, n.tabs && t.createMTXStashTabs(n.tabs, r), t.showItems()})
  }, showItems: function () {
    var e = this;
    this.clearItems(), this.collection.each(function (t) {
      var n = 0, i = 0, s = 1, u = 1, a = t.get("x"), f = t.get("y"), l = t.get("w"), c = t.get("h"), h = l, p = c, d = t.get("inventoryId");
      n = o.inventory.stash.x + o.gridSize + o.gridSize * a, i = o.inventory.stash.y + o.gridSize + o.gridSize * f, n -= 1, i += 46, s = l * o.gridSize, u = c * o.gridSize, clickCallbackData = {league: e.activeLeague, item: t, inventory: d};
      var v = new r({model: t});
      e.renderedItems.push(v), v.render(), v.setPlaced(h, p), v.on("itemClick", function (t) {return function () {e.itemClicked(t)}}(clickCallbackData)), e.$el.append(v.$el), v.$el.css("position", "absolute"), v.$el.css("left", n), v.$el.css("top", i)
    })
  }, clearItems: function () {
    for (var e = 0, t = this.renderedItems.length; e < t; ++e)this.renderedItems[e].close();
    this.renderedItems = []
  }, createMTXStashTabs: function (e, t) {
    this.tabsControl.loadTabs(e, t != null ? t : 0);
    var n = this.tabsControl.getSelectedTab(), r;
    if (!n)return;
    r = n.getColour(), this.setBorderColour(r.r, r.g, r.b)
  }, itemClicked: function (e) {i.trigger("inventoryItem.click", e)}, show: function () {this.tabsControl.show(), this.$el.show()}, hide: function () {this.$el.hide(), this.tabsControl.hide()}, close: function () {this.tabsControl.close(), this.remove(), this.unbind()}, setBorderColour: function (e, t, n) {this.$borderTop.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-t.png") + "')"), this.$borderTopRight.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-tr.png") + "')"), this.$borderRight.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-r.png") + "')"), this.$borderBottomRight.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-br.png") + "')"), this.$borderBottom.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-b.png") + "')"), this.$borderBottomLeft.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-bl.png") + "')"), this.$borderLeft.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-l.png") + "')"), this.$borderTopLeft.css("background", "url('" + u.imageUrl("inventory/stash/border-image-" + e + "-" + t + "-" + n + "-tl.png") + "')")}, render: function () {
    var t = e.Deferred();
    this.$el.html('                <div id="stash-tab-container" class="stashTabContainer tabControl">                    <div class="leftControls">                        <div class="leftButton"></div>                    </div>                    <div class="tabs"></div>                    <div class="rightControls">                        <div class="rightButton"></div>                        <div class="tabSelectButton"></div>                        <div class="stashTabSelect poeScroll FontinRegular"></div>                    </div>                </div>                <div class="border tl"></div>                 <div class="border t"></div>                 <div class="border tr"></div>                 <div class="border r"></div>                 <div class="border br"></div>                 <div class="border b"></div>                 <div class="border bl"></div>                 <div class="border l"></div>             ');
    var n = this;
    return n.$el.find("img").attr("src", n.options.stashImageSrc), this.$tabsControl = n.$el.find("#stash-tab-container"), this.tabsControl = new s(this.$tabsControl, this.options.tabControlConfig), this.tabsControl.onTabClicked = function (e) {
      var t = e.getColour();
      n.setBorderColour(t.r, t.g, t.b), n.showMTXStashItems()
    }, this.showMTXStashItems(!0), this.rendered = !0, this.initElementRefs(), t.resolve(), t.promise()
  }})
}),define("PoE/Backbone/Model/Character/Character", ["Backbone"], function (e) {return e.RelationalModel.extend({relations: []})}),define("PoE/Backbone/Collection/Character/CharacterCollection", ["Backbone", "PoE/Backbone/Model/Character/Character"], function (e, t) {return e.Collection.extend({model: t})}),define("PoE/API/Account", ["../jslib/jquery", "PoE/Backbone/Collection/Character/CharacterCollection"], function (e, t) {
  return{getCharacters: function (n) {
    var r = e.Deferred(), i = {};
    return n.accountName && (i.accountName = n.accountName), e.ajax({url: "/character-window/get-characters", type: "POST", dataType: "json", data: i, success: function (e) {r.resolve(new t(e))}}), r.promise()
  }}
}),define("text!PoE/Inventory/InventoryManagerMenuCharacter.hbt", [], function () {return'{{#with character}}\n<div class="icon {{class}}"></div>\n<div class="infoLine1"><span class="characterName">{{name}}</span></div>\n<div class="infoLine2">{{translate "Level"}} {{level}} {{translate class}}</div>\n<div class="infoLine3">{{league}} {{translate "League"}}</div>\n{{/with}}\n'}),define("PoE/Inventory/InventoryManagerMenuCharacter", ["../jslib/jquery", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Backbone/EventBus", "text!PoE/Inventory/InventoryManagerMenuCharacter.hbt"], function (e, t, n, r) {
  return t.View.extend({tagName: "li", initialize: function () {
    var e = this;
    this.$el.addClass("character"), this.active = e.options.active, this.active && this.$el.addClass("active"), r.on("activeCharacterChanged", function (t) {t.get("name") == e.model.get("name") ? (e.active = !0, e.$el.addClass("active")) : (e.active = !1, e.$el.removeClass("active"))})
  }, events: {"click .icon": "characterClicked", "click .infoLine1": "characterClicked", "click .infoLine2": "characterClicked"}, characterClicked: function () {r.trigger("activeCharacterChanged", this.model)}, render: function () {
    var e = this;
    n.load("PoE/Inventory/InventoryManagerMenuCharacter.hbt").done(function (t) {
      var n = {character: e.model.toJSON()};
      e.$el.html(t(n))
    })
  }})
}),define("text!PoE/Inventory/InventoryManagerMenu.hbt", [], function () {return'<div class="inventoryButton showInventoryButton active"></div>\n<div class="inventoryButton showStashButton"></div>\n<div class="inventoryButton showSkillTreeButton"></div>\n<div class="inventoryButton showMTXStashButton"></div>\n\n<ul class="characters">\n</ul>\n'}),define("PoE/Inventory/InventoryManagerMenu", ["../jslib/jquery", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/API/Account", "./InventoryManagerMenuCharacter", "PoE/Backbone/EventBus", "text!PoE/Inventory/InventoryManagerMenu.hbt"], function (e, t, n, r, i, s) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.accountName = this.options.accountName || null;
    var t = {};
    this.accountName && (t.accountName = this.accountName), this.charactersLoaded = r.getCharacters(t).done(function (t) {e.characters = t}), this.activeCharacter = this.options.activeCharacter, s.on("activeCharacterChanged", function (t) {e.activeCharacter = t})
  }, initElementRefs: function () {this.$menu = this.$el.find("ul"), this.$characters = this.$el.find(".characters")}, events: {"click .showInventoryButton": "showInventory", "click .showStashButton": "showStash", "click .showSkillTreeButton": "showSkillTree", "click .showMTXStashButton": "showMTXStash"}, showInventory: function (t) {this.resetMenu(), this.trigger("showInventory"), e(".inventoryButton").removeClass("active"), e(t.target).addClass("active")}, showStash: function (t) {this.resetMenu(), this.trigger("showStash"), e(".inventoryButton").removeClass("active"), e(t.target).addClass("active")}, showSkillTree: function (t) {this.resetMenu(), this.trigger("showPassiveSkillTree"), e(".inventoryButton").removeClass("active"), e(t.target).addClass("active")}, showMTXStash: function (t) {this.resetMenu(), this.trigger("showMTXStash"), e(".inventoryButton").removeClass("active"), e(t.target).addClass("active")}, resetMenu: function () {this.$menu.find("input").removeClass("active")}, render: function () {
    var e = this;
    n.load("PoE/Inventory/InventoryManagerMenu.hbt").done(function (t) {
      e.charactersLoaded.done(function (n) {
        var r = {};
        e.$el.html(t(r)), e.initElementRefs(), n.each(function (t) {
          var n = new i({model: t, active: t.get("name") == e.activeCharacter.get("name")});
          e.$characters.append(n.$el), n.render()
        })
      })
    })
  }})
}),define("text!PoE/Inventory/InventoryManager.hbt", [], function () {return'<div class="inventoryManagerMenu"></div>\n<div class="activePanel"></div>\n'}),define("PoE/Inventory/InventoryManager", ["plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "./MainInventoryPanel", "./StashPanel", "./MTXStashPanel", "./InventoryManagerMenu", "PoE/PassiveSkillTree/PassiveSkillTree", "PoE/Backbone/EventBus", "text!PoE/Inventory/InventoryManager.hbt"], function (e, t, n, r, i, s, o, u, a) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.$el.addClass("inventoryManager"), this.activeCharacter = this.options.activeCharacter, this.accountName = this.options.accountName || null, a.on("activeCharacterChanged", function (t) {e.activeCharacter = t})
  }, open: function () {
    var t = this;
    e(document).bind("cbox_open", function () {t.show(), e("#colorbox").addClass("colorBoxPanelTheme")}), e(document).bind("cbox_cleanup", function () {t.hide(), e(document).unbind("cbox_open"), e(document).unbind("cbox_cleanup")}), this.show(), e.colorbox({inline: !0, href: this.$el}), this.$colorbox || (this.$colorbox = e("#colorbox"), this.$colorbox.addClass("inventoryManagerColorbox")), setTimeout(function () {e.colorbox.resize()}, 2e3)
  }, createMainInventoryPanel: function () {
    if (this.mainInventoryPanel)return;
    this.mainInventoryPanel = new r({accountName: this.accountName, inventoryImageSrc: this.options.inventoryImageSrc, activeCharacter: this.options.activeCharacter})
  }, createStashPanel: function () {
    if (this.stashPanel)return;
    this.stashPanel = new i({accountName: this.accountName, stashImageSrc: this.options.stashImageSrc, activeLeague: this.options.activeCharacter.get("league")})
  }, createMTXStashPanel: function () {
    if (this.mtxStashPanel)return;
    this.mtxStashPanel = new s({accountName: this.accountName, mtxStashImageSrc: this.options.mtxStashImageSrc, activeLeague: this.options.activeCharacter.get("league")})
  }, createMenu: function () {
    var t = this;
    if (this.menu)return;
    this.menu = new o({el: this.$menu, activeCharacter: this.options.activeCharacter, accountName: this.accountName}), this.menu.on("showInventory", function () {t.showMainInventory()}), this.menu.on("showStash", function () {t.showStash()}), this.menu.on("showPassiveSkillTree", function () {
      var n = this.activeCharacter.get("classId"), r = this.activeCharacter.get("name"), i = {reqData: 0, character: r};
      t.accountName && (i.accountName = t.accountName), e.ajax({url: "/character-window/get-passive-skills", data: i, dataType: "json", success: function (e) {
        if (e === !1)return;
        window.location.href = u.generatePermaLink(n, e.hashes, !1)
      }})
    }), this.menu.on("showMTXStash", function () {t.showMTXStash()}), this.menu.render()
  }, showMainInventory: function () {this.createMainInventoryPanel(), this.closeActivePanel(), this.currentPanel = this.mainInventoryPanel, this.renderActivePanel()}, showStash: function () {this.createStashPanel(), this.closeActivePanel(), this.currentPanel = this.stashPanel, this.renderActivePanel()}, showMTXStash: function () {this.createMTXStashPanel(), this.closeActivePanel(), this.currentPanel = this.mtxStashPanel, this.renderActivePanel()}, closeActivePanel: function () {this.currentPanel && this.currentPanel.close()}, renderActivePanel: function () {this.$activePanel.empty().append(this.currentPanel.$el), this.currentPanel.render().done(function () {e.colorbox.resize()})}, show: function () {this.currentPanel && this.currentPanel.show(), this.$el.show()}, hide: function () {this.currentPanel && this.currentPanel.hide(), this.$el.hide()}, close: function () {this.closeActivePanel(), this.remove(), this.unbind()}, render: function () {
    var t = this;
    return n.load("PoE/Inventory/InventoryManager.hbt").done(function (n) {t.$el.html(n({})), t.$el.find("img.inventoryImage").attr("src", t.options.inventoryImageSrc), t.$el.find("img.stashImage").attr("src", t.options.stashImageSrc), t.$activePanel = t.$el.find(".activePanel"), t.$menu = t.$el.find(".inventoryManagerMenu"), t.currentPanel || (t.createMainInventoryPanel(), t.currentPanel = t.mainInventoryPanel), t.createMenu(), t.$activePanel.empty().append(t.currentPanel.el), t.currentPanel.render().done(function () {e.colorbox.resize()})})
  }})
}),define("text!PoE/Inventory/InventoryControls.hbt", [], function () {return'{{#with activeCharacter}}\n<div class="infoLine1"><span class="characterName">{{name}}</span></div>\n<div class="infoLine2">{{translate "Level"}} {{level}} {{translate class}}</div>\n<div class="infoLine3">{{translate league}} {{translate "League"}}</div>\n{{/with}}\n<div class="icon {{activeCharacter.class}}"></div>\n<a class="open" href="#">{{translate "SWITCH CHARACTER"}}</a>\n'}),define("PoE/Inventory/InventoryControls", ["../jslib/jquery", "Backbone", "PoE/Handlebars/TemplateCollection", "./InventoryManager", "PoE/Backbone/Model/Character/Character", "PoE/Backbone/EventBus", "text!PoE/Inventory/InventoryControls.hbt"], function (e, t, n, r, i, s) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.initElementRefs(), this.activeCharacter = new i(this.options.activeCharacter), this.accountName = this.options.accountName || null, s.on("activeCharacterChanged", function (t) {e.activeCharacter = t, e.render()})
  }, initElementRefs: function () {this.$body = e("body")}, events: {"click .open": "open", "click .icon": "open", "click .infoLine1": "open", "click .infoLine2": "open"}, open: function (e) {
    e.preventDefault();
    var t = this;
    if (!this.inventoryManager) {
      var n = this.options.inventoryManager;
      n.id = "inventory-manager", n.activeCharacter = this.activeCharacter, n.accountName = this.accountName, this.inventoryManager = new r(n), this.$body.append(this.inventoryManager.$el), this.inventoryManagerRendered = this.inventoryManager.render()
    }
    this.inventoryManagerRendered.done(function () {t.inventoryManager.open()})
  }, render: function () {
    var e = this, t = {activeCharacter: this.activeCharacter.toJSON()};
    n.load("PoE/Inventory/InventoryControls.hbt").done(function (n) {e.$el.html(n(t))})
  }})
}),define("PoE/Model/Account/Guild/PointsTransaction", ["Backbone"], function (e) {return e.RelationalModel.extend({url: "/api/account/guild/point-transactions", relations: []})}),define("PoE/Model/Account/Guild/Guild", ["require", "Backbone"], function (e) {
  var t = e("Backbone");
  return t.RelationalModel.extend({url: "/api/guild", relations: []})
}),define("PoE/Collection/Account/Guild/PointTransactions", ["require", "../jslib/jquery", "Backbone", "PoE/Backbone/Paginator", "PoE/Model/Account/Guild/PointsTransaction"], function (e) {
  var t = e("jquery"), n = e("Backbone"), r = e("PoE/Backbone/Paginator"), i = e("PoE/Model/Account/Guild/PointsTransaction");
  return r.extend({model: i, paginator_core: {url: "/api/account/guild/point-transactions", dataType: "json"}, paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5, totalPages: 10}, server_api: {offset: function () {return(this.currentPage - 1) * this.perPage}, limit: function () {return this.perPage}}, perPageOptions: [5, 20, 50, 100], parse: function (e) {return e.limit && (this.perPage = parseInt(e.limit, 10)), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries}})
}),define("PoE/API/Error", ["require", "../jslib/jquery"], function (e) {
  var t = e("jquery"), n = function () {this.message = null, this.code = null};
  return n.prototype.getMessage = function () {return this.message}, n.prototype.setMessage = function (e) {this.message = e}, n.prototype.setCode = function (e) {this.code = e}, n.fromResponse = function (e) {
    var r = new n, i;
    return e.responseText && (i = t.parseJSON(e.responseText), r.setMessage(i.error.message), r.setCode(i.error.code)), r
  }, n
}),define("text!PoE/Widget/Guild/AccountTransaction.hbt", [], function () {return'<div class="txInfo">\r\n    <div class="left">\r\n        <span class="points">{{points}}<span class="pointsIcon" title="Points"></span></span>\r\n    </div>\r\n    <div class="createdAt">{{moment createdAt format="MMMM Do YYYY, h:mm:ss a"}}</div>\r\n</div>\r\n{{#ifCond status "===" "new"}}\r\n    <div class="menu">\r\n        <button class="cancel button1 important">{{translate "Cancel"}}</button>\r\n    </div>\r\n{{else}}\r\n    <div class="status">\r\n        {{#ifCond status "===" "cancelled"}}{{translate "Cancelled"}}{{/ifCond}}\r\n        {{#ifCond status "===" "rejected"}}{{translate "Rejected"}}{{/ifCond}}\r\n        {{#ifCond status "===" "complete"}}{{translate "Complete"}}{{/ifCond}}\r\n    </div>\r\n{{/ifCond}}\r\n<div class="error"></div>'}),define("PoE/Widget/Guild/AccountTransaction", ["require", "Backbone", "../jslib/jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Loader", "PoE/API/Error", "PoE/Helpers", "text!PoE/Widget/Guild/AccountTransaction.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoE/Model/Account/Guild/PointsTransaction"), s = e("PoE/Loader"), o = e("PoE/API/Error"), u = e("PoE/Helpers");
  return e("text!PoE/Widget/Guild/AccountTransaction.hbt"), t.View.extend({initialize: function () {}, events: {"click button.cancel": "cancel"}, startAction: function () {s.start(), this.disableButtons(), this.clearError()}, endAction: function () {s.done(), this.enableButtons()}, disableButtons: function () {this.$cancelButton.attr("disabled", !0)}, enableButtons: function () {this.$cancelButton.removeAttr("disabled")}, cancel: function () {
    var e = this;
    confirm(u.translate("Cancel transaction?")) && (this.startAction(), this.model.save({method: "cancel"}, {type: "post", success: function () {e.render()}, error: function (t, n) {
      var r = o.fromResponse(n);
      e.showError(r.getMessage())
    }}).always(function () {e.endAction()}))
  }, clearError: function () {this.$error.hide()}, showError: function (e) {this.$error.text(e), this.$error.show()}, render: function () {
    var e = this;
    r.load("PoE/Widget/Guild/AccountTransaction.hbt").done(function (t) {
      var n = e.model.toJSON();
      e.$el.html(t(n)), e.$el.removeClass().addClass("transaction").addClass(e.model.get("status")), e.$cancelButton = e.$el.find("button.cancel"), e.$error = e.$el.find(".error")
    })
  }})
}),define("text!PoE/Widget/Guild/Guild.hbt", [], function () {return'<div class="left balance">\r\n    <h2>{{translate "Guild Balance"}}</h2>\r\n    <div class="points" title="Guild Points">{{guild.points}}</div>\r\n</div>'}),define("PoE/Widget/Guild/Guild", ["require", "Backbone", "../jslib/jquery", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/Guild/Guild.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), r = e("PoE/Handlebars/TemplateCollection");
  return e("text!PoE/Widget/Guild/Guild.hbt"), t.View.extend({initialize: function () {
    var e = this;
    this.$el.addClass("guild"), this.model.on("change", function () {e.render()})
  }, render: function () {
    var e = this;
    r.load("PoE/Widget/Guild/Guild.hbt").done(function (t) {
      var n = {guild: e.model.toJSON(), identifyingMember: e.options.identifyingMember.toJSON()};
      e.$el.html(t(n))
    })
  }})
}),define("text!PoE/Widget/Guild/MemberPanel.hbt", [], function () {return'<div class="frame">\r\n    <div class="background"></div>\r\n    <div class="top"></div>\r\n    <div class="bottom"></div>\r\n    <div class="content">\r\n        <div class="guild"></div>\r\n    </div>\r\n</div>\r\n<div class="memberPanel">\r\n    <div class="frame">\r\n        <div class="background"></div>\r\n        <div class="top"></div>\r\n        <div class="bottom"></div>\r\n        <div class="content">\r\n            <div class="createTransaction">\r\n                <h2>{{translate "Give Microtransaction Points to Guild"}}</h2>\r\n                <p>{{translate "Use this form to send points to your Guild to allow your Guild Leader to purchase Microtransactions. If the Guild Leader accepts your points you can not be kicked out for three months."}}</p>\r\n                <div class="formT1">\r\n                    <div class="row points">\r\n                        <label for="points">{{translate "Points Amount"}}:</label>\r\n                        <div class="element">\r\n                            <input type="text" name="points" class="points">\r\n                            <ul></ul>\r\n                            <div class="success message"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="row"><div class="element"><button class="createTransaction button1 important">{{translate "Give Points"}}</button></div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="frame">\r\n        <div class="background"></div>\r\n        <div class="top"></div>\r\n        <div class="bottom"></div>\r\n        <div class="content">\r\n            <div class="currentTransactions">\r\n                <h2>{{translate "Transaction History"}}</h2>\r\n                <div class="entries"></div>\r\n                <div class="pagination"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'}),define("PoE/Widget/Guild/MemberPanel", ["require", "Backbone", "../jslib/jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Model/Account/Guild/Guild", "PoE/Collection/Account/Guild/PointTransactions", "PoE/View/Widget/Pagination", "./AccountTransaction", "./Guild", "PoE/API/Error", "PoE/Loader", "PoE/Helpers", "text!PoE/Widget/Guild/MemberPanel.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoE/Model/Account/Guild/PointsTransaction"), s = e("PoE/Model/Account/Guild/Guild"), o = e("PoE/Collection/Account/Guild/PointTransactions"), u = e("PoE/View/Widget/Pagination"), a = e("./AccountTransaction"), f = e("./Guild"), l = e("PoE/API/Error"), c = e("PoE/Loader"), h = e("PoE/Helpers");
  return e("text!PoE/Widget/Guild/MemberPanel.hbt"), t.View.extend({initialize: function () {
    var e = this;
    this.accountTransactions = new o, this.fetchAccountTransactions(), this.accountTransactionsPagination = new u({collection: this.accountTransactions}), this.accountTransactions.on("reset", function () {e.addAccountTransactions()}), this.guildView = new f({model: this.model, identifyingMember: this.options.identifyingMember}), this.guildView.render()
  }, events: {"click button.createTransaction": "create"}, transactionCompleted: function () {c.start(), this.model.fetch().always(function () {c.done()})}, fetchAccountTransactions: function () {
    var e = this;
    this.accountTransactions.fetch().done(function () {e.addAccountTransactions()})
  }, create: function () {
    var e = parseInt(n.trim(this.$points.val()), 10), t = this;
    if (isNaN(e))this.showPointsError(h.translate("Amount is not a number")); else if (e <= 0)this.showPointsError(h.translate("Amount must be greater than 0")); else if (confirm(h.translate("Transfer") + " " + e + " " + h.translate("point" + (e > 1 ? "s" : "") + " to your guild") + "?")) {
      this.clearPointsError(), this.$createButton.attr("disabled", !0);
      var r = new i({points: e});
      c.start(), r.save().then(function () {t.fetchAccountTransactions(), t.showSuccessMessage(h.translate("Transaction created"))}, function (e) {
        var n = l.fromResponse(e);
        t.showPointsError(n.getMessage())
      }).always(function () {c.done(), t.$createButton.removeAttr("disabled")})
    }
  }, showSuccessMessage: function (e) {
    var t = this;
    this.$successMessage.text(e), this.successTimeout && clearTimeout(this.successTimeout), this.successTimeout = setTimeout(function () {t.$successMessage.hide()}, 2e4)
  }, showPointsError: function (e) {
    this.clearPointsError(), this.$pointsRow.addClass("error");
    var t = n("<li></li>").text(e);
    this.$pointsErrors.append(t)
  }, clearPointsError: function () {this.$pointsRow.removeClass("error"), this.$pointsErrors.empty()}, addAccountTransactions: function () {
    var e = this;
    this.$accountTransactions.empty(), this.accountTransactions.each(function (t) {
      var n = new a({model: t});
      n.render(), e.$accountTransactions.append(n.el)
    })
  }, render: function () {
    var e = this;
    r.load("PoE/Widget/Guild/MemberPanel.hbt").done(function (t) {
      var n = {identifyingMember: e.options.identifyingMember.toJSON()};
      e.$el.html(t(n)), e.accountTransactionsPagination.render(), e.$el.find(".memberPanel .pagination").replaceWith(e.accountTransactionsPagination.el), e.accountTransactionsPagination.delegateEvents(), e.$accountTransactions = e.$el.find(".memberPanel .entries"), e.addAccountTransactions(), e.$pointsRow = e.$el.find(".createTransaction .row.points"), e.$points = e.$pointsRow.find("input.points"), e.$pointsErrors = e.$pointsRow.find("ul"), e.$createButton = e.$el.find("button.createTransaction"), e.$successMessage = e.$el.find(".success.message"), e.$el.find(".guild").replaceWith(e.guildView.el), e.guildView.delegateEvents(), e.delegateEvents()
    })
  }})
}),define("PoE/Model/Guild/PointsTransaction", ["Backbone"], function (e) {return e.RelationalModel.extend({url: "/api/guild/point-transactions", relations: []})}),define("PoE/Collection/Guild/PointTransactions", ["require", "../jslib/jquery", "Backbone", "PoE/Backbone/Paginator", "PoE/Model/Guild/PointsTransaction"], function (e) {
  var t = e("jquery"), n = e("Backbone"), r = e("PoE/Backbone/Paginator"), i = e("PoE/Model/Guild/PointsTransaction");
  return r.extend({model: i, paginator_core: {url: "/api/guild/point-transactions", dataType: "json"}, paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5, totalPages: 10}, server_api: {offset: function () {return(this.currentPage - 1) * this.perPage}, limit: function () {return this.perPage}}, perPageOptions: [5, 20, 50, 100], parse: function (e) {return e.limit && (this.perPage = parseInt(e.limit, 10)), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries}})
}),define("text!PoE/Widget/Guild/GuildTransaction.hbt", [], function () {return'<div class="txInfo">\r\n    <div class="left">\r\n        <span class="points">{{points}}<span class="pointsIcon" title="Points"></span></span>\r\n        {{#if manual}}\r\n        {{translate "Manual transfer"}}\r\n        {{else}}\r\n        {{translate "from"}} {{profileLink account}}\r\n        {{/if}}\r\n    </div>\r\n    <div class="createdAt">{{moment createdAt format="MMMM Do YYYY, h:mm:ss a"}}</div>\r\n</div>\r\n{{#ifCond status "===" "new"}}\r\n    <div class="menu">\r\n        <button class="accept button1 important">{{translate "Accept"}}</button>\r\n        <button class="reject button1 important">{{translate "Reject"}}</button>\r\n    </div>\r\n{{else}}\r\n    <div class="status">\r\n        {{#ifCond status "===" "cancelled"}}{{translate "Cancelled"}}{{/ifCond}}\r\n        {{#ifCond status "===" "rejected"}}{{translate "Rejected"}}{{/ifCond}}\r\n        {{#ifCond status "===" "complete"}}{{translate "Complete"}}{{/ifCond}}\r\n    </div>\r\n{{/ifCond}}\r\n<div class="error"></div>'}),define("PoE/Widget/Guild/GuildTransaction", ["require", "Backbone", "../jslib/jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Loader", "PoE/API/Error", "PoE/Helpers", "text!PoE/Widget/Guild/GuildTransaction.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoE/Model/Account/Guild/PointsTransaction"), s = e("PoE/Loader"), o = e("PoE/API/Error"), u = e("PoE/Helpers");
  return e("text!PoE/Widget/Guild/GuildTransaction.hbt"), t.View.extend({initialize: function () {}, events: {"click button.accept": "accept", "click button.reject": "reject"}, startAction: function () {s.start(), this.disableButtons(), this.clearError()}, endAction: function () {s.done(), this.enableButtons()}, accept: function () {
    var e = this;
    confirm(u.translate("Accept transaction?")) && (this.startAction(), this.model.save({method: "accept"}, {type: "post", success: function () {e.render(), e.trigger("transactionComplete")}, error: function (t, n) {
      var r = o.fromResponse(n);
      e.showError(r.getMessage())
    }}).always(function () {e.endAction()}))
  }, reject: function () {
    var e = this;
    confirm(u.translate("Reject transaction?")) && (this.startAction(), this.model.save({method: "reject"}, {type: "post", success: function () {e.render()}, error: function (t, n) {
      var r = o.fromResponse(n);
      e.showError(r.getMessage())
    }}).always(function () {e.endAction()}))
  }, clearError: function () {this.$error.hide()}, showError: function (e) {this.$error.text(e), this.$error.show()}, disableButtons: function () {this.$acceptButton.attr("disabled", !0), this.$rejectButton.attr("disabled", !0)}, enableButtons: function () {this.$acceptButton.removeAttr("disabled"), this.$rejectButton.removeAttr("disabled")}, render: function () {
    var e = this;
    r.load("PoE/Widget/Guild/GuildTransaction.hbt").done(function (t) {
      var n = e.model.toJSON();
      e.$el.html(t(n)), e.$el.removeClass().addClass("transaction").addClass(e.model.get("status")), e.$acceptButton = e.$el.find("button.accept"), e.$rejectButton = e.$el.find("button.reject"), e.$error = e.$el.find(".error")
    })
  }})
}),define("text!PoE/Widget/Guild/LeaderPanel.hbt", [], function () {return'<div class="frame">\r\n    <div class="background"></div>\r\n    <div class="top"></div>\r\n    <div class="bottom"></div>\r\n    <div class="content">\r\n        <div class="guild"></div>\r\n    </div>\r\n</div>\r\n<div class="frame">\r\n    <div class="background"></div>\r\n    <div class="top"></div>\r\n    <div class="bottom"></div>\r\n    <div class="content">\r\n        <div class="leaderPanel">\r\n            <div class="transactions">\r\n                <h2>{{translate "Guild Transactions"}}</h2>\r\n                <p>{{translate "This is a list of points transfers from members of your Guild. Accept transactions to credit the points to your Guild. You will not be able to kick a player for three months if you accept their points."}}</p>\r\n                <div class="entries"></div>\r\n                <div class="pagination"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'}),define("PoE/Widget/Guild/LeaderPanel", ["require", "Backbone", "../jslib/jquery", "PoE/Handlebars/TemplateCollection", "PoE/Model/Account/Guild/PointsTransaction", "PoE/Model/Account/Guild/Guild", "PoE/Collection/Guild/PointTransactions", "PoE/View/Widget/Pagination", "./GuildTransaction", "./Guild", "PoE/API/Error", "PoE/Loader", "text!PoE/Widget/Guild/LeaderPanel.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoE/Model/Account/Guild/PointsTransaction"), s = e("PoE/Model/Account/Guild/Guild"), o = e("PoE/Collection/Guild/PointTransactions"), u = e("PoE/View/Widget/Pagination"), a = e("./GuildTransaction"), f = e("./Guild"), l = e("PoE/API/Error"), c = e("PoE/Loader");
  return e("text!PoE/Widget/Guild/LeaderPanel.hbt"), t.View.extend({initialize: function () {
    var e = this;
    this.options.identifyingMember.get("type") === "Leader" && (this.guildTransactions = new o, this.fetchGuildTransactions(), this.guildTransactionsPagination = new u({collection: this.guildTransactions}), this.guildTransactions.on("reset", function () {e.addGuildTransactions()})), this.guildView = new f({model: this.model, identifyingMember: this.options.identifyingMember}), this.guildView.render()
  }, events: {}, transactionCompleted: function () {c.start(), this.model.fetch().always(function () {c.done()})}, fetchGuildTransactions: function () {
    var e = this;
    this.options.identifyingMember.get("type") === "Leader" && this.guildTransactions.fetch().done(function () {e.addGuildTransactions()})
  }, showPointsError: function (e) {
    this.clearPointsError(), this.$pointsRow.addClass("error");
    var t = n("<li></li>").text(e);
    this.$pointsErrors.append(t)
  }, clearPointsError: function () {this.$pointsRow.removeClass("error"), this.$pointsErrors.empty()}, addGuildTransactions: function () {
    var e = this;
    this.$guildTransactions.empty(), this.guildTransactions.each(function (t) {
      var n = new a({model: t});
      n.on("transactionComplete", function () {e.transactionCompleted()}), n.render(), e.$guildTransactions.append(n.el)
    })
  }, render: function () {
    var e = this;
    r.load("PoE/Widget/Guild/LeaderPanel.hbt").done(function (t) {
      var n = {identifyingMember: e.options.identifyingMember.toJSON()};
      e.$el.html(t(n)), e.options.identifyingMember.get("type") === "Leader" && (e.guildTransactionsPagination.render(), e.$el.find(".leaderPanel .pagination").replaceWith(e.guildTransactionsPagination.el), e.guildTransactionsPagination.delegateEvents(), e.$guildTransactions = e.$el.find(".leaderPanel .entries"), e.addGuildTransactions()), e.$el.find(".guild").replaceWith(e.guildView.el), e.guildView.delegateEvents(), e.delegateEvents()
    })
  }})
}),define("PoE/API/Livestream/TwitchTV", ["../jslib/jquery"], function (e) {
  return{fetch: function (t) {
    var n = e.Deferred(), r = t && t.limit || 3, i = this;
    window.twlscb || (window.twlscb = function (e) {i.result = e, n.resolve(e)});
    var s = e.ajax({url: "https://api.twitch.tv/kraken/streams?game=Path+of+Exile&limit=" + r + "&callback=twlscb", dataType: "script", cache: !0});
    return n
  }}
}),define("PoE/Widget/TwitchTV", ["../jslib/jquery", "PoE/API/Livestream/TwitchTV"], function (e, t) {
  var n = function (n, r, i) {
    this.$containerEl = n instanceof e ? n : e(n), this.$el = r instanceof e ? r : e(r), this.blacklist = i && i.blacklist || [], this.limit = i && i.limit ? i.limit : 3;
    var s = this;
    t.fetch({limit: this.limit + this.blacklist.length}).done(function (e) {s.result = e, s.draw()})
  };
  return n.prototype.draw = function () {
    this.$el.empty();
    var t = this.result.streams.length;
    if (t == 0)return;
    var n = 0;
    for (var r = 0; r < t; ++r) {
      var i = this.result.streams[r], s = e('<div class="stream"><div><a><img/></a></div><div><a><span class="status"></span></a><div class="info"><div class="nameCont"><a><span class="name"></span></a></div><div class="viewersCont"><a><span class="viewers"></span></a></div></div></div>'), o = e("<img/>");
      if (e.inArray(i.channel.name, this.blacklist) != -1 || n >= this.limit)continue;
      s.find("img").attr("src", i.preview.medium), s.find("a").attr("href", i.channel.url), s.find(".status").text(i.channel.status), s.find(".name").text(i.channel.name), s.find(".viewers").text(i.viewers + " viewer" + (i.viewers == 1 ? "" : "s") + ""), this.$el.append(s), ++n
    }
    this.$el.append('<div class="clear"></div>'), n > 0 && this.$containerEl.show()
  }, n
}),define("PoE/Widget/YoutubeModal", ["require", "../jslib/jquery", "./YoutubeVideo"], function (e) {
  var t = e("jquery"), n = e("./YoutubeVideo"), r = function (e) {
    var r = e instanceof t ? e : t(e), i = r.find(".video");
    t(document).bind("cbox_open", function () {t("#colorbox").addClass("colorBoxTheme1 hideClose")}), t(document).bind("cbox_cleanup", function () {}), this.show = function () {
      if (i.length) {
        console.log("show vid!");
        var e = new n(i)
      }
      t.colorbox({inline: !0, href: r})
    }
  };
  return r
}),define("PoE/Widget/OpenBetaCountdown", ["plugins", "Backbone"], function (e, t) {
  return t.View.extend({initialize: function () {}, render: function () {
    var t = this;
    if (this.options.secs <= 0)return;
    this.$countdown = this.$el.find(".countdown"), this.last = [null, null, null, null, null, null, null], this.$countdown.countdown({until: this.options.secs, layout: '<div class="days">{dn}</div><div class="hours">{hn}</div><div class="minutes">{mn}</div><div class="seconds">{sn}</div>', onExpiry: function () {setTimeout(function () {e("body").removeClass("openBetaCountdownEnabled"), t.$el.parents(".layoutBox1:first").remove(), t.$el.remove()}, 1e4)}, onTick: function (e) {
      var n = function (n, r) {e[n] !== t.last[n] && (t.last[n] = e[n], t.$countdown.find(r).addClass("start"), setTimeout(function () {t.$countdown.find(r).addClass("done")}, 0))};
      n(6, ".seconds"), n(5, ".minutes"), n(4, ".hours"), n(3, ".days")
    }})
  }})
}),function (e) {
  var t = function () {
    var e = "s", n = function (e) {
      var t = -e.getTimezoneOffset();
      return t !== null ? t : 0
    }, r = function (e, t, n) {
      var r = new Date;
      return e !== undefined && r.setFullYear(e), r.setDate(n), r.setMonth(t), r
    }, i = function (e) {return n(r(e, 0, 2))}, s = function (e) {return n(r(e, 5, 2))}, o = function (e) {
      var t = e.getMonth() > 7 ? s(e.getFullYear()) : i(e.getFullYear()), r = n(e);
      return t - r !== 0
    }, u = function () {
      var t = i(), n = s(), r = i() - s();
      return r < 0 ? t + ",1" : r > 0 ? n + ",1," + e : t + ",0"
    }, a = function () {
      var e = u();
      return new t.TimeZone(t.olson.timezones[e])
    }, f = function (e) {
      var t = new Date(2010, 6, 15, 1, 0, 0, 0), n = {"America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0), "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0), "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0), "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0), "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0), "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0), "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0), "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0), "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0), "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0), "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0), "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0), "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0), "Asia/Beirut": new Date(2011, 2, 27, 1, 0, 0, 0), "Europe/Helsinki": new Date(2011, 2, 27, 4, 0, 0, 0), "Europe/Istanbul": new Date(2011, 2, 28, 5, 0, 0, 0), "Asia/Damascus": new Date(2011, 3, 1, 2, 0, 0, 0), "Asia/Jerusalem": new Date(2011, 3, 1, 6, 0, 0, 0), "Asia/Gaza": new Date(2009, 2, 28, 0, 30, 0, 0), "Africa/Cairo": new Date(2009, 3, 25, 0, 30, 0, 0), "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0), "Pacific/Fiji": new Date(2010, 11, 29, 23, 0, 0, 0), "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0), "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0), "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0), "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0), "Europe/Moscow": t, "Asia/Yekaterinburg": t, "Asia/Omsk": t, "Asia/Krasnoyarsk": t, "Asia/Irkutsk": t, "Asia/Yakutsk": t, "Asia/Vladivostok": t, "Asia/Kamchatka": t, "Europe/Minsk": t, "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)};
      return n[e]
    };
    return{determine: a, date_is_dst: o, dst_start_for: f}
  }();
  t.TimeZone = function (e) {
    var n = {"America/Denver": ["America/Denver", "America/Mazatlan"], "America/Chicago": ["America/Chicago", "America/Mexico_City"], "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"], "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"], "Asia/Beirut": ["Asia/Beirut", "Europe/Helsinki", "Europe/Istanbul", "Asia/Damascus", "Asia/Jerusalem", "Asia/Gaza"], "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"], "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"], "America/New_York": ["America/Havana", "America/New_York"], "America/Halifax": ["America/Goose_Bay", "America/Halifax"], "America/Godthab": ["America/Miquelon", "America/Godthab"], "Asia/Dubai": ["Europe/Moscow"], "Asia/Dhaka": ["Asia/Yekaterinburg"], "Asia/Jakarta": ["Asia/Omsk"], "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"], "Asia/Tokyo": ["Asia/Irkutsk"], "Australia/Brisbane": ["Asia/Yakutsk"], "Pacific/Noumea": ["Asia/Vladivostok"], "Pacific/Tarawa": ["Asia/Kamchatka"], "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"], "Asia/Baghdad": ["Europe/Minsk"]}, r = e, i = function () {
      var e = n[r], i = e.length, s = 0, o = e[0];
      for (; s < i; s += 1) {
        o = e[s];
        if (t.date_is_dst(t.dst_start_for(o))) {
          r = o;
          return
        }
      }
    }, s = function () {return typeof n[r] != "undefined"};
    return s() && i(), {name: function () {return r}}
  }, t.olson = {}, t.olson.timezones = {"-720,0": "Etc/GMT+12", "-660,0": "Pacific/Pago_Pago", "-600,1": "America/Adak", "-600,0": "Pacific/Honolulu", "-570,0": "Pacific/Marquesas", "-540,0": "Pacific/Gambier", "-540,1": "America/Anchorage", "-480,1": "America/Los_Angeles", "-480,0": "Pacific/Pitcairn", "-420,0": "America/Phoenix", "-420,1": "America/Denver", "-360,0": "America/Guatemala", "-360,1": "America/Chicago", "-360,1,s": "Pacific/Easter", "-300,0": "America/Bogota", "-300,1": "America/New_York", "-270,0": "America/Caracas", "-240,1": "America/Halifax", "-240,0": "America/Santo_Domingo", "-240,1,s": "America/Santiago", "-210,1": "America/St_Johns", "-180,1": "America/Godthab", "-180,0": "America/Argentina/Buenos_Aires", "-180,1,s": "America/Montevideo", "-120,0": "Etc/GMT+2", "-120,1": "Etc/GMT+2", "-60,1": "Atlantic/Azores", "-60,0": "Atlantic/Cape_Verde", "0,0": "Etc/UTC", "0,1": "Europe/London", "60,1": "Europe/Berlin", "60,0": "Africa/Lagos", "60,1,s": "Africa/Windhoek", "120,1": "Asia/Beirut", "120,0": "Africa/Johannesburg", "180,0": "Asia/Baghdad", "180,1": "Europe/Moscow", "210,1": "Asia/Tehran", "240,0": "Asia/Dubai", "240,1": "Asia/Baku", "270,0": "Asia/Kabul", "300,1": "Asia/Yekaterinburg", "300,0": "Asia/Karachi", "330,0": "Asia/Kolkata", "345,0": "Asia/Kathmandu", "360,0": "Asia/Dhaka", "360,1": "Asia/Omsk", "390,0": "Asia/Rangoon", "420,1": "Asia/Krasnoyarsk", "420,0": "Asia/Jakarta", "480,0": "Asia/Shanghai", "480,1": "Asia/Irkutsk", "525,0": "Australia/Eucla", "525,1,s": "Australia/Eucla", "540,1": "Asia/Yakutsk", "540,0": "Asia/Tokyo", "570,0": "Australia/Darwin", "570,1,s": "Australia/Adelaide", "600,0": "Australia/Brisbane", "600,1": "Asia/Vladivostok", "600,1,s": "Australia/Sydney", "630,1,s": "Australia/Lord_Howe", "660,1": "Asia/Kamchatka", "660,0": "Pacific/Noumea", "690,0": "Pacific/Norfolk", "720,1,s": "Pacific/Auckland", "720,0": "Pacific/Tarawa", "765,1,s": "Pacific/Chatham", "780,0": "Pacific/Tongatapu", "780,1,s": "Pacific/Apia", "840,0": "Pacific/Kiritimati"}, typeof exports != "undefined" ? exports.jstz = t : e.jstz = t
}(this),define("jstz", function (e) {return function () {return e.jstz}}(this)),define("PoE/Widget/R16Label", ["jstz", "Backbone", "PoE/Helpers"], function (e, t, n) {
  return t.View.extend({initialize: function () {}, render: function () {
    var t = e.determine();
    if (t.name() != "Pacific/Auckland")return;
    this.$el.addClass("active"), this.$el.html('<img src="' + n.imageUrl("legal/r16small.png") + '" alt="Restricted to persons 16 Years and over." />')
  }})
}),define("text!PoE/Widget/Season/Reward.hbt", [], function () {return'<div class="points">{{requiredPoints}}</div>\r\n<div class="itemDest"></div>\r\n<div class="marker"></div>'}),define("PoE/Widget/Season/Reward", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "PoE/Item/Item", "PoE/Backbone/Model/Item/Item", "text!PoE/Widget/Season/Reward.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("Handlebars"), i = e("PoE/Handlebars/TemplateCollection"), s = e("PoE/Item/Item"), o = e("PoE/Backbone/Model/Item/Item");
  return e("text!PoE/Widget/Season/Reward.hbt"), n.View.extend({initialize: function () {this.$el.addClass("reward"), this.options.last && this.$el.addClass("last")}, initElementRefs: function () {}, events: {}, render: function () {
    var e = this;
    return i.load("PoE/Widget/Season/Reward.hbt").done(function (t) {
      var n = e.model.toJSON();
      e.$el.html(t(n));
      var r = e.model.get("item");
      if (r) {
        var i = new s({enableVerified: !1, enableLeague: !1, model: new o(r)});
        i.render(), e.$el.find(".itemDest").replaceWith(i.$el)
      }
    })
  }})
}),define("PoE/Model/Season/PlayerInfo", ["Backbone"], function (e) {return e.RelationalModel.extend({})}),define("PoE/Model/Season/LifetimePlayerInfo", ["Backbone"], function (e) {return e.RelationalModel.extend({})}),define("text!PoE/Widget/Season/SeasonInfo.hbt", [], function () {return'<div class="seasonInfo currentSeasonInfo{{#if small}} small{{/if}}{{#if garena}} garena{{/if}}" id="{{season.htmlId}}">\r\n    <div class="content">\r\n        <h1 class="name">{{season.id}}</h1>\r\n        {{#unless small}}\r\n            {{{season.htmlContent}}}\r\n        {{/unless}}\r\n    </div>\r\n    <div class="pointsBackground"></div>\r\n    <div class="pointsProgress">\r\n        <div class="barContainer"><div class="bar"></div></div>\r\n        <div class="frame"></div>\r\n    </div>\r\n    <div class="playerInfo">\r\n    {{label}}: {{playerInfo.points}}\r\n    </div>\r\n</div>\r\n\r\n<div class="seasonInfo lifetimeSeasonInfo{{#if small}} small{{/if}}">\r\n    <div class="pointsProgress">\r\n        <div class="barContainer"><div class="bar"></div></div>\r\n        <div class="frame"></div>\r\n    </div>\r\n    <div class="playerInfo">\r\n        Lifetime Points: {{lifetimePlayerInfo.points}}\r\n    </div>\r\n</div>'}),define("PoE/Widget/Season/SeasonInfo", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "./Reward", "PoE/Model/Season/PlayerInfo", "PoE/Model/Season/LifetimePlayerInfo", "text!PoE/Widget/Season/SeasonInfo.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("Handlebars"), i = e("PoE/Handlebars/TemplateCollection"), s = e("./Reward");
  return e("PoE/Model/Season/PlayerInfo"), e("PoE/Model/Season/LifetimePlayerInfo"), e("text!PoE/Widget/Season/SeasonInfo.hbt"), n.View.extend({initialize: function () {this.playerInfo = this.options.playerInfo || null, this.small = !!this.options.small, this.garena = this.options.garena ? this.options.garena : !1, this.label = this.options.label ? this.options.label : "Season Reward Points"}, initElementRefs: function () {}, events: {}, render: function () {
    var e = this;
    i.load("PoE/Widget/Season/SeasonInfo.hbt").done(function (t) {
      var n = {small: e.small, season: e.model.toJSON(), playerInfo: e.playerInfo ? e.playerInfo.toJSON() : {points: 0}, garena: e.garena, label: e.label}, r = n.playerInfo.points, i = e.model.get("rewards").last();
      e.$el.html(t(n)), e.$bar = e.$el.find(".currentSeasonInfo .pointsProgress .bar");
      var o = e.$el.find(".currentSeasonInfo .pointsProgress");
      e.pointsProgressWidth = o.width();
      if (i) {
        var u = e.model.get("rewards").first().get("requiredPoints"), a = e.model.get("rewards").length, f = function (e) {
          var t = 2;
          return Math.log(e) / Math.log(2) - Math.log(u) * 8 / Math.log(t)
        }, l = i.get("requiredPoints"), c = f(l), h = e.model.get("rewards");
        h.each(function (t, n) {
          var u = new s({model: t, last: t === i});
          o.append(u.$el), u.render().done(function (t, n) {
            return function () {
              var n = f(t.model.get("requiredPoints")) / c, i = t.$el.find(".newItemContainer"), s = t.model.get("itemOffsetX"), o = t.model.get("itemOffsetY");
              h.length > 12 && i.addClass("smaller"), t.$el.css("left", e.getRewardPosition(t.model) - t.$el.width()), r >= t.model.get("requiredPoints") && t.$el.addClass("achieved"), s !== null && i.css("right", s), o !== null && i.css("bottom", o)
            }
          }(u, n))
        });
        var p = 0, d = 0, v = null, m = null, g = Math.min(r, l);
        for (var y = 0, b = h.length; y < b; ++y) {
          v = h.at(y).get("requiredPoints"), m = e.getRewardPosition(h.at(y));
          if (g >= p && g <= v) {
            var w = (m - d) * (g - p) / (v - p) + d;
            e.$bar.css("width", w + "px");
            break
          }
          p = v, d = m
        }
      }
    })
  }, getRewardPosition: function (e) {
    var t = this.model.get("rewards"), n = t.indexOf(e);
    return this.pointsProgressWidth * ((n + 1) / t.length)
  }})
}),define("text!PoE/Widget/Season/Ladder/Entry.hbt", [], function () {return'<td class="rank">{{rank}}</td><td class="account">{{profileLink account}}</td><td class="points">{{points}}</td>'}),define("PoE/Widget/Season/Ladder/Entry", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/Season/Ladder/Entry.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("Handlebars"), i = e("PoE/Handlebars/TemplateCollection");
  return e("text!PoE/Widget/Season/Ladder/Entry.hbt"), n.View.extend({tagName: "tr", initialize: function () {}, render: function () {
    var e = this;
    i.load("PoE/Widget/Season/Ladder/Entry.hbt").done(function (t) {
      var n = e.model.toJSON();
      e.$el.html(t(n))
    })
  }})
}),define("PoEAdmin/Model/Season/Season", ["require", "Backbone"], function (e) {
  var t = e("Backbone");
  return t.RelationalModel.extend({urlRoot: "/api/seasons", relations: []})
}),define("PoEAdmin/Collection/Season/Seasons", ["require", "Backbone", "PoEAdmin/Model/Season/Season"], function (e) {
  var t = e("Backbone"), n = e("PoEAdmin/Model/Season/Season");
  return t.Collection.extend({model: n, url: "/api/seasons"})
}),define("text!PoE/Widget/Season/Ladder/Ladder.hbt", [], function () {return'<h1>{{translate name}} {{translate "Ladder"}}</h1>\r\n<select class="seasons">\r\n    {{#each seasons}}\r\n        <option value="{{this.id}}"{{#ifCond this.id "===" ../name}} selected{{/ifCond}}>{{translate this.id}}</option>\r\n    {{/each}}\r\n</select>\r\n<div class="loading"></div>\r\n<table>\r\n    <thead>\r\n    <tr>\r\n        <th>{{translate "Rank"}}</th>\r\n        <th>{{translate "Account"}}</th>\r\n        <th>{{translate "Points"}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="entries"></tbody>\r\n</table>\r\n<div class="pagination"></div>'}),define("PoE/Widget/Season/Ladder/Ladder", ["require", "plugins", "Backbone", "Handlebars", "PoE/Handlebars/TemplateCollection", "./Entry", "PoEAdmin/Collection/Season/Seasons", "PoE/View/Widget/Pagination", "text!PoE/Widget/Season/Ladder/Ladder.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("Handlebars"), i = e("PoE/Handlebars/TemplateCollection"), s = e("./Entry"), o = e("PoEAdmin/Collection/Season/Seasons"), u = e("PoE/View/Widget/Pagination");
  return e("text!PoE/Widget/Season/Ladder/Ladder.hbt"), n.View.extend({initialize: function () {
    var e = this, n = t.Deferred();
    this.$el.addClass("seasonLadder"), this.pagination = new u({collection: this.collection}), this.garena = this.options.garena ? this.options.garena : !1, this.seasons = new o, this.deps = n.promise(), this.collection.on("change", function () {e.render()}), this.collection.on("reset", function () {e.hideLoader(), e.addAll()}), this.pagination.on("loadStart", function () {e.showLoader()}), this.pagination.on("loadEnd", function () {e.hideLoader()}), this.seasons.fetch({success: function () {
      var t = e.seasons.models[e.seasons.models.length - 1];
      e.collection.server_api.id = t.id, n.resolve()
    }})
  }, events: {"change select.seasons": "changeSeason"}, changeSeason: function (e) {e.preventDefault(), this.collection.server_api.id = this.$seasonsSelect.val(), this.collection.reset(), this.render(), this.collection.fetch()}, showLoader: function () {this.$entries.css("opacity", .5), this.$loading.show(), this.$loading.css("top", this.$entries.offset().top - this.$el.offset().top), this.$loading.height(this.$entries.height())}, hideLoader: function () {this.$entries.css("opacity", 1), this.$loading.hide()}, addAll: function () {
    var e = this;
    e.$entries.empty(), this.collection.each(function (t) {
      var n = new s({model: t});
      n.render(), e.$entries.append(n.$el)
    })
  }, render: function () {
    var e = this;
    this.deps.done(function () {
      i.load("PoE/Widget/Season/Ladder/Ladder.hbt").done(function (t) {
        var n = {name: e.collection.server_api.id, seasons: e.seasons.toJSON(), garena: e.garena};
        e.$el.html(t(n)), e.$entries = e.$el.find(".entries"), e.$loading = e.$el.find(".loading"), e.$loading.hide(), e.$seasonsSelect = e.$el.find("select.seasons"), e.addAll(), e.pagination.render(), e.$el.find(".pagination").replaceWith(e.pagination.el), e.pagination.delegateEvents(), e.delegateEvents()
      })
    })
  }})
}),define("PoE/Model/League/Prize", ["Backbone", "PoE/Util/Date", "exports"], function (e, t, n) {
  var r = e.RelationalModel.extend({defaults: {claimed: !1}});
  return n.Prize = r, r
}),define("PoE/Collection/League/PrizeCollection", ["Backbone", "PoE/Model/League/Prize", "exports"], function (e, t, n) {
  var r = e.Collection.extend({model: t});
  return n.PrizeCollection = r, r
}),define("PoE/Model/League/Rule", ["Backbone"], function (e) {
  var t = e.RelationalModel.extend({initialize: function () {}});
  return t
}),define("PoE/Model/League/Event", ["Backbone", "moment", "PoE/Util/Date", "./Prize", "PoE/Collection/League/PrizeCollection", "PoE/Model/League/Rule", "PoE/Model/League/LadderEntry", "PoE/Collection/League/LadderEntries", "exports"], function (e, t, n, r, i, s, o, u, a) {
  var f = e.RelationalModel.extend({relations: [
    {type: e.HasMany, key: "prizes", relatedModel: r, collectionType: i, reverseRelation: {key: "event", type: e.HasOne}},
    {type: e.HasMany, key: "rules", relatedModel: s},
    {type: e.HasMany, key: "ladder", relatedModel: o, collectionType: u, collectionOptions: {}}
  ], initialize: function () {
    var e = t(), n = this.get("startAt"), r = this.get("endAt"), i = this.get("registerAt");
    n && r && (n = t(this.get("startAt")), r = t(this.get("endAt")), r.diff(e) < 0 ? this.set("complete", !0) : (i && (i = t(i), i.diff(e) < 0 && this.set("register", !0)), n.diff(e) > 0 ? this.set("upcoming", !0) : this.set("inProgress", !0))), this.bind("change", this.setTimers), this.bind("change:complete", this.finish);
    var s = this;
    this.setTimers()
  }, setTimers: function () {
    var e = this;
    if (!this.get("event"))return;
    this.get("upcoming") ? n.Countdown(t(this.get("startAt")), function () {e.set("upcoming", !1), e.set("inProgress", !0), e.trigger("changeContinue")}, function () {e.trigger("upcomingTick")}) : this.get("inProgress") ? n.Countdown(t(this.get("endAt")), function () {e.set("inProgress", !1), e.set("complete", !0), e.trigger("changeContinue")}, function () {e.trigger("inProgressTick")}) : this.get("complete") && (this.unset("register"), this.completeTickIntervalId && clearInterval(this.completeTickIntervalId), this.completeTickIntervalId = setInterval(function () {e.trigger("completeTick")}, 1e3));
    if ((this.get("upcoming") || this.get("inProgress")) && !this.get("register")) {
      var r = this.get("registerAt");
      r && n.Countdown(t(r), function () {e.set("register", !0), e.trigger("registrationOpen")})
    }
  }, finish: function () {this.trigger("eventFinish")}});
  return a.Event = f, f
}),define("text!PoE/Widget/League/EventInfo/EventInfo.hbt", [], function () {return'<div class="details{{#unless complete}} hasCountdown{{/unless}}">\n    <div class="left">\n        {{#if event}}\n        <div>\n            <div>\n                <span class="startInfo">{{#if upcoming}}{{translate "Starts"}}{{/if}}{{#if inProgress}}{{translate "Started"}}{{/if}}{{#if complete}}{{translate "Started"}}{{/if}}\n                    {{#unless ch}}\n                    <span class="startTimeAgo">{{startTimeAgo}}</span>\n                    {{/unless}}\n                </span>\n                {{#unless ch}}\n                {{translate "at"}}\n                {{/unless}}\n                <span class="date">{{startDate}}</span>\n            </div>\n            <div>\n                <span class="endInfo">{{#if upcoming}}{{translate "Finishes"}}{{/if}}{{#if inProgress}}{{translate "Finishes"}}{{/if}}{{#if complete}}{{translate "Finished"}}{{/if}}\n                    {{#unless ch}}\n                    <span class="endTimeAgo">{{endTimeAgo}}</span>\n                    {{/unless}}\n                </span>\n                {{#unless ch}}\n                {{translate "at"}}\n                {{/unless}}\n                <span class="date">{{endDate}}</span>\n            </div>\n            {{#if register}}<div class="registrationOpen">{{translate "Registration open"}}</div>{{/if}}        \n        </div>\n        {{/if}}\n        \n        {{#if rules}}\n        <div class="rules">\n            <h2>{{translate "Rules"}}</h2>\n            {{#each rules}}\n            <ul class="rule">\n               <li><span class="name">{{translate name}}:</span><span class="ruleDescription">{{translate description}}</span></li>\n            </ul>\n            {{/each}}\n        </div>\n        {{/if}}\n    </div>\n    \n    {{#if event}}\n        {{#if complete}}\n        <div class="finishedMessage">\n            {{translate "League has finished"}}.\n        </div>\n        {{else}}\n        <div class="countdownContainer">\n            <div class="countdownDescription">{{#if upcoming}}{{translate "Starts"}}{{/if}}{{#if inProgress}}{{translate "Finishes"}}{{/if}}</div>\n            <div class="countdown"></div>\n        </div>\n        {{/if}}\n\n    {{/if}}\n</div>\n<div class="clear"></div>\n\n\n'}),define("PoE/Widget/League/EventInfo/EventInfo", ["plugins", "Backbone", "PoE/Model/League/Event", "Handlebars", "moment", "PoE/Environment", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/League/EventInfo/EventInfo.hbt"], function (e, t, n, r, i, s, o) {
  return t.View.extend({initialize: function () {this.model.bind("changeContinue", this.render, this), this.model.bind("eventFinish", this.render, this), this.model.bind("registrationOpen", this.render, this), this.startTimeAgoText = "", this.endTimeAgoText = "", this.ch = this.options.ch}, initElementRefs: function () {this.$startTimeAgo = this.$el.find(".startTimeAgo"), this.$endTimeAgo = this.$el.find(".endTimeAgo"), this.$countdown = this.$el.find(".countdown")}, events: {}, render: function () {
    var e = this;
    return this.$el.html(""), i.relativeTime.s = function (e) {return e === 1 ? "1 second" : e + " seconds"}, o.load("PoE/Widget/League/EventInfo/EventInfo.hbt").done(function (t) {
      var n = e.model.toJSON(), r = e.model.get("startAt"), s = e.model.get("endAt");
      r && (r = i(r), n.startDate = r.format("h:mm a, MMMM Do YYYY G\\MTZ"), n.startTimeAgo = r.fromNow()), s && (s = i(s), n.endDate = s.format("h:mm a, MMMM Do YYYY G\\MTZ"), n.endTimeAgo = s.fromNow()), n.ch = e.ch, e.$el.empty().html(t(n)), e.initElementRefs(), e.model.get("upcoming") ? e.$countdown.countdown({until: r.toDate()}) : e.model.get("inProgress") && e.$countdown.countdown({until: s.toDate()}), e.model.off("upcomingTick"), e.model.off("inProgressTick"), e.model.off("completeTick"), e.model.on("upcomingTick inProgressTick completeTick", function () {
        var t = r.fromNow(), n = s.fromNow();
        t != e.startTimeAgoText && (e.$startTimeAgo.text(t), e.startTimeAgoText = t), n != e.endTimeAgoText && (e.$endTimeAgo.text(n), e.endTimeAgoText = n)
      })
    })
  }})
}),define("text!PoE/Widget/Twitch/Stream.hbt", [], function () {return'<h2><a href="{{stream.channel.url}}" target="_blank">{{stream.channel.status}}</a></h2>\r\n\r\n<a class="close button1" href="#" title="Close">X</a>\r\n\r\n<object type="application/x-shockwave-flash" height="400" width="590" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel={{channel}}" bgcolor="#000000">\r\n    <param  name="allowFullScreen" value="true" />\r\n    <param  name="allowScriptAccess" value="always" />\r\n    <param  name="allowNetworking" value="all" />\r\n    <param  name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" />\r\n    <param  name="flashvars" value="hostname=www.twitch.tv&channel={{stream.channel.name}}&auto_play=true&start_volume=25" />\r\n</object><iframe frameborder="0" scrolling="no" id="chat_embed" src="http://twitch.tv/chat/embed?channel={{stream.channel.name}}&amp;popout_chat=true" height="400" width="300"></iframe>'}),define("PoE/Widget/Twitch/Stream", ["require", "Backbone", "../jslib/jquery", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/Twitch/Stream.hbt"], function (e) {
  var t = e("Backbone"), n = e("jquery"), r = e("PoE/Handlebars/TemplateCollection");
  return e("text!PoE/Widget/Twitch/Stream.hbt"), t.View.extend({loadStream: function (e) {return this.$el.empty().show(), this.stream = e, this.render()}, className: "twitchWidget", events: {"click .close": "close"}, close: function (e) {e.preventDefault(), this.$el.empty(), this.$el.hide()}, render: function () {
    var e = n.Deferred(), t = this, i;
    if (document.location.protocol === "https:")return;
    return i = {stream: this.stream}, r.load("PoE/Widget/Twitch/Stream.hbt").done(function (n) {t.$el.html(n(i)), e.resolve()}), e.promise()
  }})
}),define("PoE/Widget/League/Event/Event", ["plugins", "Backbone", "PoE/Model/League/Event", "Handlebars", "PoE/Environment", "PoE/Handlebars/TemplateCollection", "PoE/Widget/League/Ladder/Ladder", "PoE/Widget/League/EventInfo/EventInfo", "PoE/Widget/Twitch/Stream"], function (e, t, n, r, i, s, o, u, a) {
  return t.View.extend({initialize: function () {
    var e = this;
    this.ch = this.options.ch ? !0 : !1, this.ladder = new o({model: this.model}), this.eventInfo = new u({model: this.model, ch: this.ch}), this.$el.attr("class", "eventView"), this.twitch = new a, this.currentStream = null, this.ladder.on("twitchProfileClicked", function (t) {t.stream && (this.currentStream = t.stream, e.twitch.loadStream(t.stream))}), this.ladder.on("foundInitialLivestream", function (t) {
      if (document.location.protocol === "https:" || e.currentStream || !e.model.get("event") || !e.model.get("upcoming") && !e.model.get("inProgress"))return;
      e.twitch.loadStream(t.stream), e.currentStream = t.stream
    })
  }, initElementRefs: function () {}, events: {}, render: function () {this.$el.html('<div class="info"></div><div class="twitch"></div><div class="ladder"></div>'), this.$el.find(".info").replaceWith(this.eventInfo.el), this.$el.find(".ladder").replaceWith(this.ladder.el), this.$el.find(".twitch").replaceWith(this.twitch.$el), this.ladder.render(), this.eventInfo.render()}})
}),define("PoE/Widget/ProfileLink/Manager", ["require", "../jslib/jquery", "Backbone", "./ProfileLink"], function (e) {
  var t = e("jquery"), n = e("Backbone"), r = e("./ProfileLink"), i = function () {this.loadFromDOM = function () {t(".profile-link.hasTwitch:not(.manualInit)").each(function () {var e = new r({el: this})})}};
  return i
}),define("default/gallery/gallery", ["require", "plugins"], function (e) {
  var t = e("plugins"), n = n || {};
  return n.Gallery = function (e, r, i, s) {
    this.init = function () {
      var o = this;
      this.els = {content: t(e), breadcrumb: t(r)}, this.els.pagination = t(i), this.els.botControls = this.els.pagination.parent(), this.state = {current: null, states: {browseGalleries: new n.Gallery.BrowseGalleriesState(this), viewGallery: new n.Gallery.ViewGalleryState(this), previewImage: new n.Gallery.PreviewImageState(this), loading: new n.Gallery.LoadingState(this)}}, this.options = {enableHistory: !0}, this.events = {avatarChosen: function () {}}, this.isHistorySupported() && (window.onpopstate = function (e) {
        if (e.state === null)return;
        o.loadStateFromUrl()
      }), this.setOpts(s)
    }, this.setOpts = function (e) {
      if (!e)return;
      e.enableHistory !== undefined && (this.options.enableHistory = e.enableHistory), e.events && e.events.avatarChosen && (this.events.avatarChosen = e.events.avatarChosen)
    }, this.loadStateFromUrl = function () {
      var e = this, t = window.location.href.split("/"), n = t[t.length - 1], r = t[t.length - 2], i = -1;
      for (var s = 0, o = t.length; s < o; ++s)if (t[s] == "gallery") {
        i = s;
        break
      }
      if (i == -1)return;
      t = t.slice(i + 1);
      for (var u in this.state.states)if (this.state.states[u].loadStateFromUrlParts(t))return
    }, this.enableBotControls = function (e) {e ? this.els.botControls.show() : this.els.botControls.hide()}, this.setStartState = function (e, t) {this.state.current = this.state.states[e], this.state.current.setState(t), this.pushHistoryState()}, this.currentState = function () {return this.state.current}, this.getState = function (e) {
      var t = this.state.states[e];
      return t === undefined ? null : t
    }, this.showState = function (e) {
      var t = this.state.states[e];
      if (t === undefined)return;
      this.state.current = t, t.show()
    }, this.browseGalleries = function (e) {
      var t = this;
      return this.state.states.browseGalleries.load(function () {t.showState("browseGalleries")}), !1
    }, this.viewGallery = function (e) {
      var t = this;
      return this.state.states.viewGallery.setGalleryId(e), this.state.states.viewGallery.load(function () {t.showState("viewGallery")}), !1
    }, this.previewImage = function (e) {
      var t = this;
      return this.state.states.previewImage.setImageId(e), this.state.states.previewImage.load(function () {t.showState("previewImage")}), !1
    }, this.setAvatarImageId = function (e, n) {
      if (!confirm("Make this image your avatar?"))return!1;
      n = t(n);
      var r = n.parents(".avatar-status:first"), i = r.find(".current-avatar"), s = r.find(".make-avatar"), o = this;
      return r.height(r.height()), i.hide(), s.hide(), r.addClass("avatar-status-loading"), t.ajax({url: "/my-account/set-avatar-image-id", data: {id: e}, cache: !1, dataType: "json", type: "POST", success: function (e) {e == 1 ? (r.removeClass("avatar-status-loading"), o.els.content.find(".current-avatar").hide(), o.els.content.find(".make-avatar").show(), s.hide(), i.fadeIn(), o.events.avatarChosen()) : s.show()}}), !1
    }, this.pushHistoryState = function () {
      if (!this.isHistorySupported())return;
      window.history.pushState({}, "", this.state.current.getHistoryUrl())
    }, this.isHistorySupported = function () {return!!window.history && !!history.pushState}, this.init()
  }, n.Gallery.LoadingState = function (e) {this.init = function () {this.gallery = e, this.loadingEl = t('<div class="loading"></div>'), this.state = {}}, this.loadStateFromUrlParts = function (e) {return!1}, this.load = function (e) {}, this.show = function () {this.gallery.els.content.empty().append(this.loadingEl)}, this.init()}, n.Gallery.BrowseGalleriesState = function (e) {
    this.init = function () {this.gallery = e, this.state = {page: 1, perPage: 8}, this.responseCache = null}, this.getHistoryUrl = function () {return"/gallery" + (this.state.page != 1 ? "/page/" + this.state.page : "")}, this.load = function (e, n) {
      var r = this;
      this.gallery.state.states.loading.show(), t.ajax({url: "/gallery", data: {page: this.state.page, perPage: this.state.perPage, _xhr: !0}, cache: !1, dataType: "json", type: "GET", success: function (t) {r.responseCache = t, e(), r.gallery.options.enableHistory && (n === undefined || n) && r.gallery.pushHistoryState()}})
    }, this.loadStateFromUrlParts = function (e) {
      var t = this;
      if (e.length > 0)if (e[0] == "view" || e[0] == "preview")return!1;
      this.state.page = 1, e = e.slice(0);
      while (e.length > 0) {
        var n = e.shift();
        n == "page" && e.length > 0 && (this.state.page = e.shift())
      }
      return this.load(function () {t.gallery.showState("browseGalleries")}, !1), !0
    }, this.gotoPage = function (e) {
      var t = this;
      return this.state.page = e, this.load(function () {t.gallery.showState("browseGalleries")}), !1
    }, this.setState = function (e) {this.state = t.extend({}, this.state, e)}, this.show = function () {this.gallery.state.current = this, this.gallery.els.content.empty().hide().append(this.responseCache.content).fadeIn(), this.gallery.els.breadcrumb.empty().append(this.responseCache.breadcrumb), this.gallery.els.pagination.empty().append(this.responseCache.pagination), this.gallery.enableBotControls(this.responseCache.bce)}, this.init()
  }, n.Gallery.ViewGalleryState = function (e) {
    this.init = function () {this.gallery = e, this.state = {galleryId: null, page: 1, perPage: 8}, this.responseCache = null}, this.getHistoryUrl = function () {return"/gallery/view/" + this.state.galleryId + (this.state.page != 1 ? "/page/" + this.state.page : "")}, this.setGalleryId = function (e) {this.state.galleryId = e}, this.gotoPage = function (e) {
      var t = this;
      return this.state.page = e, this.load(function () {t.gallery.showState("viewGallery")}), !1
    }, this.load = function (e, n) {
      var r = this;
      this.gallery.state.states.loading.show(), t.ajax({url: "/gallery/view/" + this.state.galleryId, data: {page: this.state.page, perPage: this.state.perPage, _xhr: !0}, cache: !1, dataType: "json", type: "GET", success: function (t) {r.responseCache = t, e(), r.gallery.options.enableHistory && (n === undefined || n) && r.gallery.pushHistoryState()}})
    }, this.loadStateFromUrlParts = function (e) {
      e = e.slice(0);
      if (e.length < 2)return!1;
      if (e.shift() != "view")return!1;
      this.state.page = 1, this.state.galleryId = e.shift();
      while (e.length > 0) {
        var t = e.shift();
        t == "page" && e.length > 0 && (this.state.page = e.shift())
      }
      var n = this;
      this.load(function () {n.gallery.showState("viewGallery")}, !1)
    }, this.show = function () {this.gallery.els.content.empty().hide().append(this.responseCache.content).fadeIn(), this.gallery.els.breadcrumb.empty().append(this.responseCache.breadcrumb), this.gallery.els.pagination.empty().append(this.responseCache.pagination), this.gallery.enableBotControls(this.responseCache.bce)}, this.setState = function (e) {this.state = t.extend({}, this.state, e)}, this.init()
  }, n.Gallery.PreviewImageState = function (e) {
    this.init = function () {this.gallery = e, this.state = {imageId: null}, this.responseCache = null}, this.getHistoryUrl = function () {return"/gallery/preview/" + this.state.imageId}, this.setImageId = function (e) {this.state.imageId = e}, this.loadStateFromUrlParts = function (e) {
      return!1;
      var t
    }, this.load = function (e, n) {
      this.gallery.state.states.loading.show();
      var r = this;
      t.ajax({url: "/gallery/preview/" + this.state.imageId, data: {_xhr: !0}, cache: !1, dataType: "json", type: "GET", success: function (t) {r.responseCache = t, e(), r.gallery.options.enableHistory && (n === undefined || n) && r.gallery.pushHistoryState()}})
    }, this.show = function () {this.gallery.els.content.empty().hide().append(this.responseCache.content).fadeIn(), this.gallery.els.breadcrumb.empty().append(this.responseCache.breadcrumb), this.gallery.els.pagination.empty().append(this.responseCache.pagination), this.gallery.enableBotControls(this.responseCache.bce)}, this.setState = function (e) {this.state = e}, this.init()
  }, n
}),define("PoE/Shop/LogMessages", ["require"], function (e) {return{logMessages: [], logInfo: function (e) {this.logMessages.push(["I", (new Date).getTime(), e])}, logWarn: function (e) {this.logMessages.push(["W", (new Date).getTime(), e])}}}),define("PoE/Shop/Helpers", ["require"], function (e) {
  return{formatXHRError: function (e, t, n) {
    var r = "";
    switch (t) {
      case"timeout":
        r = "Request timed out. ";
        break;
      case"abort":
        r = "Request aborted. "
    }
    return r += "Code (" + e.status + ")", r
  }}
}),define("PoE/Shop/PaymentForm", ["require", "../jslib/jquery", "./LogMessages", "PoE/Backbone/EventBus", "./Helpers"], function (e) {
  var t = e("jquery"), n = e("./LogMessages"), r = e("PoE/Backbone/EventBus"), i = e("./Helpers");
  return function (e, s) {
    this.formEl = t(e), this.formSubmitEl = this.formEl.find(".submit-button:first"), this.formLoadingEl = this.formEl.find(".loading:first"), this.formErrorsEl = this.formEl.find(".payment-errors:first"), this.formCardNumberEl = this.formEl.find(".card-number:first"), this.formCvcEl = this.formEl.find(".card-cvc:first"), this.formExpMonth = this.formEl.find(".card-expiry-month:first"), this.formExpYear = this.formEl.find(".card-expiry-year:first"), this.formNameEl = this.formEl.find(".name:first"), this.formAddressLine1El = this.formEl.find(".address_line1:first"), this.formAddressLine2El = this.formEl.find(".address_line2:first"), this.formAddressZipEl = this.formEl.find(".address_zip:first"), this.errorPrefix = "", s && s.errorPrefix && (this.errorPrefix = s.errorPrefix), this.init = function () {
      var e = this;
      this.showError = function (t) {e.formErrorsEl.html(e.errorPrefix + t), e.formLoadingEl.removeClass("loadingVisible"), e.formSubmitEl.removeAttr("disabled")}, this.formEl.submit(function (s) {
        return s.preventDefault(), n.logInfo("Submit payment form"), e.formSubmitEl.attr("disabled", "disabled"), r.trigger("shop.purchaseStart"), e.formLoadingEl.height(e.formSubmitEl.height()).addClass("loadingVisible"), e.formErrorsEl.html(""), n.logInfo("Create token"), Stripe.createToken({number: e.formCardNumberEl.val(), cvc: e.formCvcEl.val(), exp_month: e.formExpMonth.val(), exp_year: "20" + e.formExpYear.val(), name: e.formNameEl.val(), address_line1: e.formAddressLine1El.val(), address_line2: e.formAddressLine2El.val(), address_zip: e.formAddressZipEl.val()}, function (s, o) {
          if (o.error)n.logWarn("Got error response: " + o.error.message), e.showError(o.error.message), r.trigger("shop.purchaseEnd"); else {
            var u = o.id;
            n.logInfo("Got token: " + u.substring(0, 10) + "... Send XHR"), t.ajax({type: "POST", data: {source: "use-card", js: "1", saveForLater: e.formEl.find('input[name="saveForLater"]').is(":checked") ? "1" : "0", stripeToken: o.id, log: n.logMessages}, dataType: "json", success: function (t) {t.error ? (e.showError(t.error.message), r.trigger("shop.purchaseEnd")) : window.location.href = t.redirect}, error: function (t, n, s) {e.showError(i.formatXHRError(t, n, s)), r.trigger("shop.purchaseEnd")}})
          }
        }), !1
      }), this.formEl.closest(".optionBox").removeClass("loading")
    }, this.init()
  }
}),define("PoE/Shop/PaymentFormExistingCard", ["require", "../jslib/jquery", "./LogMessages", "PoE/Backbone/EventBus", "./Helpers"], function (e) {
  var t = e("jquery"), n = e("./LogMessages"), r = e("PoE/Backbone/EventBus"), i = e("./Helpers");
  return function (e, n) {
    this.formEl = t(e), this.formErrorsEl = this.formEl.find(".payment-errors:first"), this.formSubmitEl = this.formEl.find(".submit-button:first"), this.formLoadingEl = this.formEl.find(".loading:first"), this.cardIdEl = this.formEl.find('input[name="cid"]'), this.$removeButton = this.formEl.find(".remove a"), this.errorPrefix = "", n && n.errorPrefix && (this.errorPrefix = n.errorPrefix), this.init = function () {
      var e = this;
      this.showError = function (t) {this.formErrorsEl.html(e.errorPrefix + t), this.formLoadingEl.removeClass("loadingVisible"), this.formSubmitEl.removeAttr("disabled")}, this.formEl.submit(function () {return r.trigger("shop.purchaseStart"), e.formSubmitEl.attr("disabled", "disabled").fadeOut("fast"), e.formLoadingEl.height(e.formSubmitEl.height()).addClass("loadingVisible"), t.ajax({type: "POST", data: {source: "use-existing-card", js: "1", cid: e.cardIdEl.val()}, dataType: "json", success: function (t) {t.error ? (e.showError(t.error.message), r.trigger("shop.purchaseEnd")) : window.location.href = t.redirect}, error: function (t, n, s) {e.showError(i.formatXHRError(t, n, s)), r.trigger("shop.purchaseEnd")}}), !1}), this.$removeButton.on("click", function (n) {
        n.preventDefault();
        if (!confirm("Remove card?"))return!1;
        r.trigger("shop.purchaseStart");
        var i = e.$removeButton.data("cardid"), s = e.$removeButton.closest(".shopExistingOptionContainer");
        return this.formEl = s.closest("form"), e.$removeButton.remove(), t.ajax({url: "/shop/remove-card", type: "POST", data: {cid: i}, dataType: "json", success: function (e) {s.slideUp("fast", function () {t(this).remove()}), r.trigger("shop.purchaseEnd")}, failure: function (e) {r.trigger("shop.purchaseEnd"), alert("Failed to remove card")}}), !1
      }), this.formEl.closest(".shopExistingOptionContainer").removeClass("loading")
    }, this.init()
  }
}),define("PoE/Collection/League/EventsCollection", ["../jslib/jquery", "Backbone", "PoE/Model/League/Event", "moment"], function (e, t, n) {return t.Collection.extend({model: n, sortByStartDate: function () {this.comparator = function (e, t) {return e.get("startAt") && t.get("startAt") ? moment(e.get("startAt")).diff(moment(t.get("startAt"))) : 0}, this.sort()}})}),define("text!PoE/Widget/League/EventCalendar/Event.hbt", [], function () {return'{{#if url}}<a href="{{url}}">{{id}}</a>{{else}}{{id}}{{/if}}'}),define("PoE/Widget/League/EventCalendar/Event", ["require", "Backbone", "moment", "Underscore", "PoE/Handlebars/TemplateCollection", "text!PoE/Widget/League/EventCalendar/Event.hbt"], function (e) {
  var t = e("Backbone"), n = e("moment"), r = e("Underscore"), i = e("PoE/Handlebars/TemplateCollection");
  return e("text!PoE/Widget/League/EventCalendar/Event.hbt"), t.View.extend({className: "event", initialize: function () {}, render: function () {
    var e = this, t = this.model.toJSON();
    return t.url == "" && delete t.url, t.inProgress ? this.$el.addClass("inProgress") : t.complete && this.$el.addClass("complete"), i.load("PoE/Widget/League/EventCalendar/Event.hbt").done(function (n) {e.$el.html(n(t))})
  }})
}),define("PoE/Widget/League/EventCalendar/Day", ["require", "Backbone", "moment", "Underscore", "./Event"], function (e) {
  var t = e("Backbone"), n = e("moment"), r = e("Underscore"), i = e("./Event");
  return t.View.extend({className: "day", initialize: function () {this.periods = this.options.periods, this.start = this.options.start, this.end = this.options.end}, render: function () {
    var e = [], t = this;
    this.$el.html('<div class="label"></div><div class="periods"></div>'), $periods = this.$el.find(".periods"), $label = this.$el.find(".label"), this.start.format("D") == 1 ? ($label.html(this.start.format("MMM D")), $label.addClass("first")) : $label.html(this.start.format("D")), this.periodToEl = {};
    for (var n = 0, r = this.periods.length; n < r; ++n) {
      var s = $('<div class="period"></div>');
      $periods.append(s), s.addClass("period" + n), this.periodToEl[this.periods[n]] = s
    }
    return this.collection.each(function (n) {
      var r = new i({model: n});
      e.push(r.render()), t.periodToEl[t.getEventMinutesOffset(n)].append(r.$el)
    }), $.when.apply(null, e)
  }, getEventMinutesOffset: function (e) {
    var t = n(e.get("startAt"));
    return t.hours() * 60 + t.minutes()
  }})
}),define("PoE/Widget/League/EventCalendar/Week", ["require", "Backbone", "moment", "Underscore", "PoE/Collection/League/EventsCollection", "./Day"], function (e) {
  var t = e("Backbone"), n = e("moment"), r = e("Underscore"), i = e("PoE/Collection/League/EventsCollection"), s = e("./Day");
  return t.View.extend({className: "week", initialize: function () {this.start = this.options.start, this.end = this.options.end}, render: function () {
    var e = [], t = this;
    this.$el.html('<div class="periodsInfo"><div class="label"></div><div class="periods"></div></div>'), this.$el.find(".label").html(this.start.format("MMM"));
    var n = this.collectMinutes(this.collection);
    $periods = this.$el.find(".periodsInfo .periods");
    for (var r = 0, i = n.length; r < i; ++r) {
      var o = this.start.clone().add("minutes", n[r]), u = $('<div class="period"></div>');
      u.addClass("period" + r), u.html(o.format("h:mm A")), $periods.append(u)
    }
    var a = this.start.clone(), f = a.clone().add("days", 1);
    for (var r = 0; r < 7; ++r) {
      var l = new s({start: a, end: f, collection: this.retrieveEventsUntilDate(this.collection, f), periods: n});
      e.push(l.render()), this.$el.append(l.$el), a = f, f = f.clone(), f.add("days", 1)
    }
    $.when.apply(null, e).done(function () {
      for (var e = 0, r = n.length; e < r; ++e) {
        var i = 0, s = t.$el.find(".period" + e);
        s.each(function () {i = Math.max($(this).height(), i)}), s.height(i)
      }
    })
  }, getEventMinutesOffset: function (e) {
    var t = n(e.get("startAt"));
    return t.hours() * 60 + t.minutes()
  }, collectMinutes: function (e) {
    var t = [], n = this;
    return e.each(function (e) {t.push(n.getEventMinutesOffset(e))}), t.sort(function (e, t) {return e - t}), r.uniq(t, !0)
  }, retrieveEventsUntilDate: function (e, t) {
    var r = new i;
    for (var s = 0, o = e.length; s < o; ++s) {
      var u = e.at(0), a = n(u.get("startAt"));
      if (a.diff(t) >= 0)break;
      r.push(e.shift())
    }
    return r
  }})
}),define("PoE/Widget/League/EventCalendar/EventCalendar", ["require", "Backbone", "moment", "Underscore", "PoE/Collection/League/EventsCollection", "./Week", "PoE/Helpers"], function (e) {
  var t = e("Backbone"), n = e("moment"), r = e("Underscore"), i = e("PoE/Collection/League/EventsCollection"), s = e("./Week");
  return e("PoE/Helpers"), t.View.extend({initialize: function () {
    var e = this, t = new i;
    for (var n = 0, r = e.collection.length; n < r; ++n) {
      var s = e.collection.at(n);
      s.get("startAt") && t.push(s)
    }
    this.collection = t, this.collection.sortByStartDate(), this.startDay = 1, this.$el.addClass("eventCalendar"), e.title = e.options.title ? e.options.title : "Events Schedule", e.note = e.options.note ? e.options.note : "Please note that the times on this schedule are shown in your local timezone"
  }, render: function () {
    var e = this;
    if (this.collection.isEmpty())return;
    this.$el.html("<h1> " + e.title + '</h1>                <p class="description">' + e.note + '.</p>                <div class="entries"></div>                <div class="debug"></div>                '), $entries = this.$el.find(".entries"), $debug = this.$el.find(".debug");
    var t = this.collection.first(), r = n(t.get("startAt")), i = r.clone().day(0).hours(0).minutes(0).seconds(0).milliseconds(0), o = n(this.collection.last().get("startAt"));
    i.add("days", this.startDay), r.diff(i) < 0 && i.add("weeks", -1);
    var u = i.clone();
    u.add("weeks", 1), this.collection.length && $entries.append('<div class="header"><div class="col"></div><div class="col">Monday</div><div class="col">Tuesday</div><div class="col">Wednesday</div><div class="col">Thursday</div><div class="col">Friday</div><div class="col">Saturday</div><div class="col">Sunday</div></div>');
    while (this.collection.length) {
      var a = this.retrieveEventsUntilDate(this.collection, u), f = new s({collection: a, start: i.clone(), end: u.clone()});
      $entries.append(f.$el), f.render(), i = u, u = u.clone(), u.add("weeks", 1)
    }
    this.collection.each(function (e) {
      var t = n(e.get("startAt"));
      $debug.append("<div>" + e.get("id") + " " + t.format() + "</div>")
    })
  }, retrieveEventsUntilDate: function (e, t) {
    var r = new i;
    for (var s = 0, o = e.length; s < o; ++s) {
      var u = e.at(0), a = n(u.get("startAt"));
      if (!a || a.diff(t) >= 0)break;
      r.push(e.shift())
    }
    return r
  }})
}),define("PoE/Collection/League/Signature", ["../jslib/jquery", "Backbone", "PoE/Model/League/LadderEntry", "PoE/Backbone/Paginator", "./LadderEntries"], function (e, t, n, r, i) {return i.extend({paginator_core: {url: "/api/signature-ladders", dataType: "json"}, server_api: {offset: function () {return(this.currentPage - 1) * this.perPage}, limit: function () {return this.perPage}, id: function () {return this.id}, characterClass: function () {return this.characterClass}}, perPageOptions: [], parse: function (e) {return e.limit && (this.perPage = parseInt(e.limit, 10)), e.id && (this.id = e.id), e.characterClass && (this.characterClass = e.characterClass), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries}})}),define("text!PoE/View/Season/ViewSignatureRaces.hbt", [], function () {return'<div class="seasons-list poeForm">\r\n    <select name="seasons">\r\n        {{#each seasons}}\r\n            <option value="{{numericId}}">{{id}}</option>\r\n        {{/each}}\r\n    </select>\r\n</div>\r\n<div class="races">\r\n</div>'}),define("PoE/View/Season/ViewSignatureRaces", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoEAdmin/Collection/Season/Seasons", "PoE/Collection/League/Signature", "PoE/Widget/League/Ladder/Ladder", "text!PoE/View/Season/ViewSignatureRaces.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoEAdmin/Collection/Season/Seasons"), s = e("PoE/Collection/League/Signature"), o = e("PoE/Widget/League/Ladder/Ladder");
  return e("text!PoE/View/Season/ViewSignatureRaces.hbt"), n.View.extend({initialize: function () {
    var e = this, n = t.Deferred();
    this.$el.addClass("adminTheme1"), this.classes = this.options.classes, this.races = {}, this.chosenSeason = !1, this.garena = this.options.garena ? this.options.garena : !1, this.seasons = new i, this.deps = n.promise(), this.seasons.fetch({success: function () {n.resolve()}})
  }, events: {'change select[name="seasons"]': "changeSeason"}, changeSeason: function (e) {
    var n = this;
    if (n.$seasons.val()) {
      n.$races.html("");
      for (var r in n.classes) {
        var i = new s;
        i.id = n.$seasons.val(), i.characterClass = n.classes[r], i.fetch({success: function (e) {
          var r = new o({collection: e, title: e.characterClass});
          r.render().done(function () {r.$el.addClass("layoutBox1").addClass("layoutBoxFull").addClass("defaultTheme"), r.$el.find("h2").each(function () {t(this).replaceWith("<h1>" + t(this).html() + "</h1>")}), r.$el.find("h1").addClass("topBar").addClass("first").addClass("last").addClass("layoutBoxTitle")}), n.$races.append(r.el)
        }})
      }
    }
  }, render: function () {
    var e = this;
    this.deps.done(function () {
      r.load("PoE/View/Season/ViewSignatureRaces.hbt").done(function (t) {
        e.seasons.models.reverse();
        var n = [];
        for (var r in e.seasons.models)n.push(e.seasons.models[r].toJSON());
        var i = {seasons: n, garena: e.garena};
        e.$el.html(t(i)), e.delegateEvents(), e.$seasons = e.$el.find('select[name="seasons"]'), e.$races = e.$el.find(".races"), e.changeSeason()
      })
    })
  }})
}),define("text!PoE/View/Season/PlayerHistory.hbt", [], function () {return'<div class="row league">\r\n    <div class="name cell info">{{leagueName}}</div>\r\n    <div class="points cell info">{{points}}</div>\r\n    <div class="rank cell info">\r\n        {{rank}}\r\n        {{#if pins}}\r\n        <a class="showcase-pin button add" data-type="event_rank" data-subtype="{{leagueName}}"></a>\r\n        {{/if}}\r\n    </div>\r\n</div>\r\n<div class="row trophy even">\r\n    {{#each trophies}}\r\n    <div class="name cell info">&gt; {{description}}</div>\r\n    <div class="points cell info">{{points}}</div>\r\n    {{/each}}\r\n</div>'}),define("PoE/View/Season/PlayerHistory", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Helpers", "text!PoE/View/Season/PlayerHistory.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoE/Helpers");
  return e("text!PoE/View/Season/PlayerHistory.hbt"), n.View.extend({initialize: function () {}, events: {"click .showcase-pin.add": "pin"}, pin: function (e) {
    var n = this, r = t(e.target);
    t.ajax({url: BASEURL + "/api/account/showcase-pins", dataType: "json", data: r.data(), type: "POST", success: function (e) {t(".showcase-message").length ? t(".showcase-message").html(i.translate("Added pin")).animate({opacity: 1}, 800, function () {setTimeout(function () {t(".showcase-message").animate({opacity: 0}, 1500)}, 2e3)}) : alert("Added pin")}, error: function (e) {alert(i.translate("There was an error adding this pin"))}})
  }, render: function () {
    var e = this;
    return r.load("PoE/View/Season/PlayerHistory.hbt").done(function (t) {
      var n = e.model.toJSON();
      n.pins = e.options.pins ? !0 : !1, e.$el.html(t(n))
    })
  }})
}),define("PoE/Model/Season/Reward", ["Backbone", "PoE/Backbone/Model/Item/Item"], function (e, t, n) {
  return e.RelationalModel.extend({relations: [
    {type: e.HasOne, key: "item", relatedModel: n}
  ]})
}),define("PoE/Model/Season/Season", ["Backbone", "./Reward"], function (e, t) {
  return e.RelationalModel.extend({relations: [
    {type: e.HasMany, key: "rewards", relatedModel: t}
  ]})
}),define("PoE/Model/Season/PlayerHistory", ["require", "Backbone", "./Season"], function (e) {
  var t = e("Backbone"), n = e("./Season");
  return t.RelationalModel.extend({relations: [
    {type: t.HasOne, key: "season", relatedModel: n}
  ]})
}),define("PoE/Collection/Season/PlayerHistory", ["require", "Backbone", "PoE/Model/Season/PlayerHistory", "PoE/Backbone/Paginator"], function (e) {
  var t = e("Backbone"), n = e("PoE/Model/Season/PlayerHistory"), r = e("PoE/Backbone/Paginator");
  return r.extend({model: n, paginator_core: {url: "/api/season-player-history", dataType: "json"}, paginator_ui: {firstPage: 1, currentPage: 1, perPage: 5}, server_api: {page: function () {return this.currentPage}, perPage: function () {return this.perPage}, seasonId: "", id: ""}, perPageOptions: [5, 10, 20], parse: function (e) {return this.totalRecords = e.total, this.totalPages = Math.ceil(this.totalRecords / this.perPage), e.entries}})
}),define("text!PoE/View/Season/PlayerHistoryViewer.hbt", [], function () {return'<div class="loading-inline">{{translate "Loading"}}...</div>\r\n\r\n{{#if showSeasonSelect}}\r\n<select name="seasons">\r\n    <option value=""></option>\r\n    {{#each seasons}}\r\n    <option value="{{id}}">{{translate id}}</option>\r\n    {{/each}}\r\n</select>\r\n<span class="loading-inline"></span>\r\n{{/if}}\r\n\r\n<div class="historyContainer">\r\n    <div class="history">\r\n        <div class="row heading">\r\n            <div class="name cell">{{translate "League"}}</div>\r\n            <div class="points cell">{{translate "Points"}}</div>\r\n            <div class="rank cell">{{translate "Rank"}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="pagination"></div>'}),define("PoE/View/Season/PlayerHistoryViewer", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/View/Season/PlayerHistory", "PoEAdmin/Collection/Season/Seasons", "PoE/Collection/Season/PlayerHistory", "PoE/View/Widget/Pagination", "PoE/Helpers", "text!PoE/View/Season/PlayerHistoryViewer.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoE/View/Season/PlayerHistory"), s = e("PoEAdmin/Collection/Season/Seasons"), o = e("PoE/Collection/Season/PlayerHistory"), u = e("PoE/View/Widget/Pagination"), a = e("PoE/Helpers");
  return e("text!PoE/View/Season/PlayerHistoryViewer.hbt"), n.View.extend({initialize: function () {
    var e = this, n = t.Deferred();
    this.$el.addClass("playerHistoryViewer").addClass("table"), this.history = new o, this.history.server_api.id = this.model.get("id"), this.pagination = new u({collection: this.history}), this.pins = this.options.pins ? !0 : !1, this.seasons = new s, this.deps = n.promise(), this.seasons.fetch({success: function () {n.resolve()}}), this.history.on("change", function () {e.updateHistory()}), this.history.on("reset", function () {e.updateHistory(), e.$el.find(".loading-inline").hide()})
  }, events: {'change select[name="seasons"]': "changeSeason"}, changeSeason: function (e) {
    var t = this;
    t.$loader.show(), this.history.server_api.seasonId = this.seasons.get(t.options.seasonName ? t.options.seasonName : this.$seasons.val()).get("id"), this.history.fetch({success: function () {t.updateHistory(), t.$loader.hide()}, error: function () {alert(a.translate("Failed to load history")), t.$loader.hide()}})
  }, updateHistory: function () {
    var e = this;
    this.$history.children("div:not(:first)").remove(), this.history.each(function (t) {
      var n = new i({model: t, pins: e.pins});
      n.render(), e.$history.append(n.$el)
    })
  }, render: function () {
    var e = this, n = t.Deferred();
    this.rendered = n.promise(), this.deps.done(function () {
      r.load("PoE/View/Season/PlayerHistoryViewer.hbt").done(function (t) {
        var r = {seasons: e.seasons.toJSON(), showSeasonSelect: !e.options.seasonName};
        e.$el.html(t(r)), e.delegateEvents(), e.$el.find(".pagination").replaceWith(e.pagination.el), e.$seasons = e.$el.find('select[name="seasons"]'), e.$loader = e.$el.find(".loading-inline").hide(), e.$history = e.$el.find(".history"), e.pagination.render(), e.pagination.delegateEvents(), n.resolve(), e.options.seasonName && e.changeSeason()
      })
    })
  }})
}),define("PoE/Model/Account/ShowcasePin", ["Backbone"], function (e) {return e.RelationalModel.extend({relations: []})}),define("PoE/Collection/Account/ShowcasePins", ["../jslib/jquery", "Backbone", "PoE/Model/Account/ShowcasePin", "PoE/Backbone/Paginator"], function (e, t, n, r) {return r.extend({model: n, paginator_core: {url: "/api/account/showcase-pins", dataType: "json"}, paginator_ui: {firstPage: 1, currentPage: 1, perPage: 10, totalPages: 10}, server_api: {offset: function () {return(this.currentPage - 1) * this.perPage}, limit: function () {return this.perPage}, accountID: ""}, parse: function (e) {return e.limit && (this.perPage = parseInt(e.limit, 10)), e.seasonId && (this.server_api.id = e.seasonId), this.totalRecords = e.total, this.totalPages = Math.ceil(e.total / this.perPage), e.entries}})}),define("text!PoE/View/Profile/ShowcasePins.hbt", [], function () {return'{{#if noResult}}\r\n{{#if ../curAccountProfile}}\r\n<div class="showcase-item">\r\n    <p><em>{{translate "Your showcase is empty. Click a"}} <img src="/image/profile/pin.png" /> {{translate "to pin a notable item here."}}</em></p>\r\n</div>\r\n{{/if}}\r\n{{else}}\r\n\r\n{{#each showcasePins}}\r\n<div class="showcase-item">\r\n    <img class="icon" src="{{icon}}" />\r\n\r\n    <h2>{{label}}</h2>\r\n\r\n    {{#if ../curAccountProfile}}\r\n    <div class="showcase-manage">\r\n        <a class="showcase-pin button delete" data-id="{{id}}"></a>\r\n        <a class="showcase-move button up" data-id="{{id}}" data-direction="up"></a>\r\n        <a class="showcase-move button down" data-id="{{id}}" data-direction="down"></a>\r\n    </div>\r\n    {{/if}}\r\n</div>\r\n{{/each}}\r\n\r\n{{/if}}'}),define("PoE/View/Profile/ShowcasePins", ["require", "plugins", "Backbone", "PoE/Handlebars/TemplateCollection", "PoE/Collection/Account/ShowcasePins", "PoE/Helpers", "text!PoE/View/Profile/ShowcasePins.hbt"], function (e) {
  var t = e("plugins"), n = e("Backbone"), r = e("PoE/Handlebars/TemplateCollection"), i = e("PoE/Collection/Account/ShowcasePins"), s = e("PoE/Helpers");
  return e("text!PoE/View/Profile/ShowcasePins.hbt"), n.View.extend({initialize: function () {
    var e = this, n = t.Deferred();
    this.messageTimer = !1, this.showcasepins = new i, this.deps = n.promise(), this.showcasepins.server_api.accountID = this.options.accountID, this.showcasepins.fetch({success: function () {n.resolve()}})
  }, events: {"click .showcase-pin.button.delete": "unpin", "click .showcase-move.button": "move"}, unpin: function (e) {
    var n = this, r = t(e.target);
    if (r.hasClass("disabled"))return;
    t.ajax({url: BASEURL + "/api/account/showcase-pins/" + r.data("id"), dataType: "json", data: r.data(), type: "DELETE", success: function (e) {t(".showcase-message").html(s.translate("Deleted pin")).animate({opacity: 1}, 600, function () {clearTimeout(n.messageTimer), n.messageTimer = setTimeout(function () {t(".showcase-message").stop().animate({opacity: 0}, 1300)}, 2e3)}), n.refresh()}, error: function (e) {alert(s.translate("There was an error deleting this pin"))}})
  }, move: function (e) {
    var n = this, r = t(e.target);
    if (r.hasClass("disabled"))return;
    t.ajax({url: BASEURL + "/api/account/showcase-pins/" + r.data("id"), dataType: "json", data: JSON.stringify(r.data()), contentType: "application/json", type: "PUT", success: function (e) {t(".showcase-message").html(s.translate("Moved pin")).animate({opacity: 1}, 800, function () {clearTimeout(n.messageTimer), n.messageTimer = setTimeout(function () {t(".showcase-message").stop().animate({opacity: 0}, 1500)}, 2e3)}), n.refresh()}, error: function (e) {alert(s.translate("There was an error moving this pin"))}})
  }, refresh: function () {
    var e = this;
    e.showcasepins.fetch({success: function () {e.render()}})
  }, render: function () {
    var e = this;
    this.deps.done(function () {
      r.load("PoE/View/Profile/ShowcasePins.hbt").done(function (t) {
        var n = {showcasePins: e.showcasepins.toJSON(), curAccountProfile: e.options.curAccountProfile, noResult: e.showcasepins.totalRecords === 0};
        e.$el.html(t(n)), e.$el.find(".showcase-move.up:first, .showcase-move.down:last").addClass("disabled")
      })
    })
  }})
}),define("forum/forum", ["../jslib/jquery"], function (e) {
  return function () {
    e(document).ready(function () {
      e(".forumTable .setReadButton").each(function () {
        e(this).bind("click", function (t) {
          var n = this.id.substring(9, this.id.length), r = e(this), i = r.parent(), s = i.children(".status");
          r.unbind(), e.ajax({url: "/forum/set-thread-read/" + n, type: "GET", dataType: "json", success: function (t) {
            if ("R" == t) {
              var o = e("<img>"), u = e("<div></div>");
              o.attr("src", "/image/forum/read-no-new.png"), u.append(o).hide(), s.find("a").attr("title", STATUS_READ_TEXT).attr("href", i.find(".title a").attr("href")), s.children("div").append(u), u.fadeIn(500, function () {s.find("img").before(o).remove(), u.remove()})
            }
            e(r).fadeOut("slow"), e("#set_read_" + n).fadeOut("slow")
          }, error: function (e) {alert("There was a problem processing your request. Please try again later")}})
        })
      }), e("#search-button").click(function () {e(".forumSearchForm form").submit()})
    })
  }
}),define("forum/forum-index", ["../jslib/jquery"], function (e) {
  return function () {
    e(document).ready(function () {
      e(".view-more-forums a").click(function () {
        var t = e(this), n = t.parents("table:first"), r = n.find("tr:not(.heading)"), i = n.find("tr.heading"), s;
        return r.removeClass("hidden").hide().fadeIn("slow", function () {e(this).show()}), s = e('<img src="' + THREADS_IMG_SRC + '" />'), s.hide(), i.find("th.threads").empty().append(s), s.fadeIn("fast"), s = e('<img src="' + POSTS_IMG_SRC + '" />'), s.hide(), i.find("th.posts").empty().append(s), s.fadeIn("fast"), s = e('<img src="' + LAST_POST_IMG_SRC + '" />'), s.hide(), i.find("th.last_post").empty().append(s), s.fadeIn("fast"), i.find("img.hidden").hide().removeClass("hidden").fadeIn("slow"), !1
      })
    }), window.ClearForumStatusButton = function (t, n, r) {
      var i = e(t);
      i.click(function () {
        var t = e(this);
        e.ajax({url: r == "f" ? "/forum/clear-forum-viewed/" + n : "/forum/page/clear-forum-viewed/" + n, type: "GET", dataType: "json", data: {}, success: function (n) {
          var r = e("<img>"), i = e("<div></div>"), s = t.parent().children(".status");
          r.attr("src", "/image/forum/old.png"), i.append(r).hide(), s.find("a").attr("title", STATUS_OLD_TEXT), s.children("div").append(i), i.fadeIn(500, function () {s.find("img").before(r).remove(), i.remove()})
        }, failure: function (e) {alert("There was a problem processing your request. Please try again later")}}), t.fadeOut("slow")
      })
    }
  }
}),define("PoE/Form/Account/SignUpBase", ["require", "PoE/Util/Date", "plugins"], function (e) {
  var t = e("PoE/Util/Date"), n = e("plugins");
  return function (e) {
    var r = e instanceof n ? e : n(e), i = r.find('input[name="submit"]'), s = t.getTimezone();
    r.find('input[name="dst"]').val(s.dst ? 1 : 0), r.find('input[name="tzOffset"]').val(s.offset), r.submit(function () {return i.attr("disabled", !0).val("Loading..."), !0})
  }
}),define("PoE/Form/CaptchaRow", ["require", "plugins"], function (e) {
  var t = e("plugins");
  return function (e) {
    var n = e.find(".row.captcha"), r = n.find("img"), i = n.find('input[name="captcha[id]"]'), s = t('<div class="refresh" title="Refresh captcha"></div>');
    n.find(".element").append(s), s.click(function () {t.ajax({url: "/default/account/refresh-captcha", dataType: "json", success: function (e) {e != 0 ? (r.hide().attr("src", "/gen/image/captcha/" + e + ".png"), i.attr("value", e)) : (t('input[name="captcha[input]"]').parent().find(".errors").length == 0 && t('input[name="captcha[input]"]').parent().find(".refresh").after('<ul class="errors"></ul>'), t('input[name="captcha[input]"]').parent().find(".errors").html(""), t('input[name="captcha[input]"]').parent().find(".errors").append("<li>Too many captcha refresh requests, please wait</li>")), r.fadeIn()}})})
  }
}),define("PoE/Form/Account/SignUp", ["require", "plugins", "PoE/Form/Account/SignUpBase", "PoE/Form/CaptchaRow"], function (e) {
  var t = e("plugins"), n = e("PoE/Form/Account/SignUpBase"), r = e("PoE/Form/CaptchaRow");
  return function () {
    var e = t("#sign-up-container .layoutBoxContent"), i = t("#create_account"), s = t("#terms_of_use");
    n(i), r(i), t(function () {s.height(e.height())});
    var o = i.find('input[name="email"]'), u = t('<div class="emailSuggestion">Did you mean <span class="suggestedEmail"></span>?</div>'), a = u.find(".suggestedEmail"), f = ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com", "live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk", "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com", "mail.ru", "web.de", "gmx.de", "yahoo.com.tw", "yandex.ru", "hotmail.fr", "o2.pl", "wp.pl", "hotmail.de", "yahoo.de", "gmx.net", "comcast.net", "outlook.com"];
    o.after(u), o.blur(function () {o.mailcheck({domains: f, suggested: function (e, t) {a.text(t.full), u.fadeIn("fast")}, empty: function (e) {u.hide()}})})
  }
}),define("PoE/Form/Account/SteamSignUp", ["require", "plugins", "PoE/Form/Account/SignUpBase"], function (e) {
  var t = e("plugins"), n = e("PoE/Form/Account/SignUpBase");
  return function () {
    var e = t("#create_account"), r = t("#sign-up-container .layoutBoxContent"), i = t("#terms_of_use");
    n(e), t(function () {i.height(r.height())})
  }
}),require.config({waitSeconds: 0, paths: {"backbone-raw": "lib/backbone/backbone-0.9.2", "backbone-relational": "lib/backbone/backbone-relational", "backbone-paginator": "lib/backbone/backbone.paginator", text: "lib/backbone/plugins/text", goog: "lib/requirejs/plugins/goog", propertyParser: "lib/requirejs/plugins/propertyParser", async: "lib/requirejs/plugins/async", Underscore: "lib/underscore/underscore", jquery: "lib/jquery/jquery-1.8.3", Handlebars: "external/handlebars-1.0.0.beta.6", "jQuery.countdown": "external/jquery/jquery.countdown", "jquery.jscrollpane": "external/jquery/jquery.jscrollpane.min", "jquery.mousewheel": "external/jquery/jquery.mousewheel.min", "jquery.base64": "external/jquery/jquery.base64.min", "jquery.colorbox": "external/jquery/jquery.colorbox-min", "jquery.tabify": "external/jquery/jquery.tabify", "jquery.ui": "external/jquery/jquery-ui-1.10.3.custom.min", "jquery.jplayer": "external/jquery/jquery.jplayer", moment: "lib/moment/moment", "socket.io": "lib/socket.io/socket.io.min", jstz: "lib/jstz", mailcheck: "lib/mailcheck", nprogress: "lib/nprogress", angularLib: "lib/angular/angular", angularResource: "lib/angular/angular-resource", angular: "lib/angular/angular-ui-router", restangular: "lib/angular/restangular", webfont: "lib/webfont-1.5.0", gheader: "/garena-asset/gheader", gheaderTW: "/garena-asset/gheader-tw"}, shim: {jstz: {exports: "jstz"}, "backbone-raw": {deps: ["Underscore", "jquery"], exports: "Backbone"}, "backbone-relational": {deps: ["backbone-raw"]}, "backbone-paginator": {deps: ["backbone-raw"]}, Handlebars: {exports: "Handlebars"}, Underscore: {exports: "_"}, jquery: {exports: "$"}, mailcheck: {deps: ["jquery"], exports: "Kicksend"}, "socket.io": {exports: "io"}, "forum/forum-index": ["jquery"], "admin/moderator-panel": ["jquery"], "PoE/Form": ["jquery"], "gg/grid/grid": ["jquery"], "gg/grid/extension/distinct": ["jquery"], nprogress: {deps: ["jquery"], exports: "NProgress"}, angularLib: {exports: "angular"}, angularResource: {deps: ["angularLib"], exports: "angular"}, restangular: {deps: ["angularResource", "Underscore"], exports: "angular"}, angular: {deps: ["restangular"], exports: "angular"}, webfont: {exports: "WebFont"}, gheader: {deps: ["jquery"]}, gheaderTW: {deps: ["jquery"]}}}),define("main", ["../jslib/jquery", "PoE/Environment/Font", "plugins", "jQuery.countdown", "jquery.jscrollpane", "jquery.mousewheel", "jquery.base64", "/js/external/iepngfix_tilebg.js", "/js/global.js", "PoE/Item/Item", "PoE/BetaCountdown", "PoE/Item/DeferredItemRenderer", "PoE/Forum", "PoE/Forum/Thread/Autosave", "PoE/Forum/Post/Autosave", "PoE/Form", "PoE/PassiveSkillTree/PassiveSkillTree", "PoE/PublicGameAccessCountdown", "PoE/Shop", "PoE/Ladder/Ladder", "PoE/Widget/League/Ladder/Ladder", "PoE/Polyfill/Placeholder", "PoE/Layout/MenuPopupDelay", "PoE/Inventory/InventoryControls", "PoE/Widget/Guild/MemberPanel", "PoE/Widget/Guild/LeaderPanel", "PoE/Widget/TwitchTV", "PoE/Widget/YoutubeModal", "PoE/Widget/OpenBetaCountdown", "PoE/Widget/R16Label", "PoE/Widget/Season/SeasonInfo", "PoE/Widget/Season/Ladder/Ladder", "PoE/Widget/League/Event/Event", "PoE/Widget/ProfileLink/Manager", "PoE/Widget/ProfileLink/ProfileLink", "default/gallery/gallery", "PoE/Shop/PaymentForm", "PoE/Shop/PaymentFormExistingCard", "PoE/Widget/League/EventCalendar/EventCalendar", "PoE/View/Season/ViewSignatureRaces", "PoE/View/Season/PlayerHistory", "PoE/View/Season/PlayerHistoryViewer", "PoE/View/Profile/ShowcasePins", "forum/forum", "forum/forum-index", "PoE/Form/Account/SignUp", "PoE/Form/Account/SteamSignUp"], function (e, t) {
  var n = function () {e("#siteCentered").css("min-height", e(window).height())};
  e(window).resize(function () {n()}), t.loadFonts()
})