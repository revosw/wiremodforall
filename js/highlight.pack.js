/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!(function(e) {
  var n =
    ("object" == typeof window && window) || ("object" == typeof self && self);
  "undefined" != typeof exports
    ? e(exports)
    : n &&
      ((n.hljs = e({})),
      "function" == typeof define &&
        define.amd &&
        define([], function() {
          return n.hljs;
        }));
})(function(e) {
  function n(e) {
    return e
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function t(e) {
    return e.nodeName.toLowerCase();
  }
  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 === t.index;
  }
  function a(e) {
    return k.test(e);
  }
  function i(e) {
    var n,
      t,
      r,
      i,
      o = e.className + " ";
    if (((o += e.parentNode ? e.parentNode.className : ""), (t = M.exec(o))))
      return x(t[1]) ? t[1] : "no-highlight";
    for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++)
      if (((i = o[n]), a(i) || x(i))) return i;
  }
  function o(e) {
    var n,
      t = {},
      r = Array.prototype.slice.call(arguments, 1);
    for (n in e) t[n] = e[n];
    return (
      r.forEach(function(e) {
        for (n in e) t[n] = e[n];
      }),
      t
    );
  }
  function c(e) {
    var n = [];
    return (
      (function r(e, a) {
        for (var i = e.firstChild; i; i = i.nextSibling)
          3 === i.nodeType
            ? (a += i.nodeValue.length)
            : 1 === i.nodeType &&
              (n.push({ event: "start", offset: a, node: i }),
              (a = r(i, a)),
              t(i).match(/br|hr|img|input/) ||
                n.push({ event: "stop", offset: a, node: i }));
        return a;
      })(e, 0),
      n
    );
  }
  function u(e, r, a) {
    function i() {
      return e.length && r.length
        ? e[0].offset !== r[0].offset
          ? e[0].offset < r[0].offset ? e : r
          : "start" === r[0].event ? e : r
        : e.length ? e : r;
    }
    function o(e) {
      function r(e) {
        return (
          " " + e.nodeName + '="' + n(e.value).replace('"', "&quot;") + '"'
        );
      }
      s += "<" + t(e) + R.map.call(e.attributes, r).join("") + ">";
    }
    function c(e) {
      s += "</" + t(e) + ">";
    }
    function u(e) {
      ("start" === e.event ? o : c)(e.node);
    }
    for (var l = 0, s = "", f = []; e.length || r.length; ) {
      var g = i();
      if (((s += n(a.substring(l, g[0].offset))), (l = g[0].offset), g === e)) {
        f.reverse().forEach(c);
        do u(g.splice(0, 1)[0]), (g = i());
        while (g === e && g.length && g[0].offset === l);
        f.reverse().forEach(o);
      } else
        "start" === g[0].event ? f.push(g[0].node) : f.pop(),
          u(g.splice(0, 1)[0]);
    }
    return s + n(a.substr(l));
  }
  function l(e) {
    return (
      e.v &&
        !e.cached_variants &&
        (e.cached_variants = e.v.map(function(n) {
          return o(e, { v: null }, n);
        })),
      e.cached_variants || (e.eW && [o(e)]) || [e]
    );
  }
  function s(e) {
    function n(e) {
      return (e && e.source) || e;
    }
    function t(t, r) {
      return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""));
    }
    function r(a, i) {
      if (!a.compiled) {
        if (((a.compiled = !0), (a.k = a.k || a.bK), a.k)) {
          var o = {},
            c = function(n, t) {
              e.cI && (t = t.toLowerCase()),
                t.split(" ").forEach(function(e) {
                  var t = e.split("|");
                  o[t[0]] = [n, t[1] ? Number(t[1]) : 1];
                });
            };
          "string" == typeof a.k
            ? c("keyword", a.k)
            : E(a.k).forEach(function(e) {
                c(e, a.k[e]);
              }),
            (a.k = o);
        }
        (a.lR = t(a.l || /\w+/, !0)),
          i &&
            (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"),
            a.b || (a.b = /\B|\b/),
            (a.bR = t(a.b)),
            a.e || a.eW || (a.e = /\B|\b/),
            a.e && (a.eR = t(a.e)),
            (a.tE = n(a.e) || ""),
            a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)),
          a.i && (a.iR = t(a.i)),
          null == a.r && (a.r = 1),
          a.c || (a.c = []),
          (a.c = Array.prototype.concat.apply(
            [],
            a.c.map(function(e) {
              return l("self" === e ? a : e);
            })
          )),
          a.c.forEach(function(e) {
            r(e, a);
          }),
          a.starts && r(a.starts, i);
        var u = a.c
          .map(function(e) {
            return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
          })
          .concat([a.tE, a.i])
          .map(n)
          .filter(Boolean);
        a.t = u.length
          ? t(u.join("|"), !0)
          : {
              exec: function() {
                return null;
              }
            };
      }
    }
    r(e);
  }
  function f(e, t, a, i) {
    function o(e, n) {
      var t, a;
      for (t = 0, a = n.c.length; a > t; t++)
        if (r(n.c[t].bR, e)) return n.c[t];
    }
    function c(e, n) {
      if (r(e.eR, n)) {
        for (; e.endsParent && e.parent; ) e = e.parent;
        return e;
      }
      return e.eW ? c(e.parent, n) : void 0;
    }
    function u(e, n) {
      return !a && r(n.iR, e);
    }
    function l(e, n) {
      var t = N.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t];
    }
    function b(e, n, t, r) {
      var a = r ? "" : _.classPrefix,
        i = '<span class="' + a,
        o = t ? "" : C;
      return (i += e + '">'), i + n + o;
    }
    function p() {
      var e, t, r, a;
      if (!R.k) return n(k);
      for (a = "", t = 0, R.lR.lastIndex = 0, r = R.lR.exec(k); r; )
        (a += n(k.substring(t, r.index))),
          (e = l(R, r)),
          e ? ((M += e[1]), (a += b(e[0], n(r[0])))) : (a += n(r[0])),
          (t = R.lR.lastIndex),
          (r = R.lR.exec(k));
      return a + n(k.substr(t));
    }
    function d() {
      var e = "string" == typeof R.sL;
      if (e && !y[R.sL]) return n(k);
      var t = e ? f(R.sL, k, !0, E[R.sL]) : g(k, R.sL.length ? R.sL : void 0);
      return (
        R.r > 0 && (M += t.r),
        e && (E[R.sL] = t.top),
        b(t.language, t.value, !1, !0)
      );
    }
    function h() {
      (L += null != R.sL ? d() : p()), (k = "");
    }
    function v(e) {
      (L += e.cN ? b(e.cN, "", !0) : ""),
        (R = Object.create(e, { parent: { value: R } }));
    }
    function m(e, n) {
      if (((k += e), null == n)) return h(), 0;
      var t = o(n, R);
      if (t)
        return (
          t.skip ? (k += n) : (t.eB && (k += n), h(), t.rB || t.eB || (k = n)),
          v(t, n),
          t.rB ? 0 : n.length
        );
      var r = c(R, n);
      if (r) {
        var a = R;
        a.skip ? (k += n) : (a.rE || a.eE || (k += n), h(), a.eE && (k = n));
        do R.cN && (L += C), R.skip || R.sL || (M += R.r), (R = R.parent);
        while (R !== r.parent);
        return r.starts && v(r.starts, ""), a.rE ? 0 : n.length;
      }
      if (u(n, R))
        throw new Error(
          'Illegal lexeme "' + n + '" for mode "' + (R.cN || "<unnamed>") + '"'
        );
      return (k += n), n.length || 1;
    }
    var N = x(e);
    if (!N) throw new Error('Unknown language: "' + e + '"');
    s(N);
    var w,
      R = i || N,
      E = {},
      L = "";
    for (w = R; w !== N; w = w.parent) w.cN && (L = b(w.cN, "", !0) + L);
    var k = "",
      M = 0;
    try {
      for (var B, I, j = 0; ; ) {
        if (((R.t.lastIndex = j), (B = R.t.exec(t)), !B)) break;
        (I = m(t.substring(j, B.index), B[0])), (j = B.index + I);
      }
      for (m(t.substr(j)), w = R; w.parent; w = w.parent) w.cN && (L += C);
      return { r: M, value: L, language: e, top: R };
    } catch (A) {
      if (A.message && -1 !== A.message.indexOf("Illegal"))
        return { r: 0, value: n(t) };
      throw A;
    }
  }
  function g(e, t) {
    t = t || _.languages || E(y);
    var r = { r: 0, value: n(e) },
      a = r;
    return (
      t.filter(x).forEach(function(n) {
        var t = f(n, e, !1);
        (t.language = n), t.r > a.r && (a = t), t.r > r.r && ((a = r), (r = t));
      }),
      a.language && (r.second_best = a),
      r
    );
  }
  function b(e) {
    return _.tabReplace || _.useBR
      ? e.replace(B, function(e, n) {
          return _.useBR && "\n" === e
            ? "<br>"
            : _.tabReplace ? n.replace(/\t/g, _.tabReplace) : "";
        })
      : e;
  }
  function p(e, n, t) {
    var r = n ? L[n] : t,
      a = [e.trim()];
    return (
      e.match(/\bhljs\b/) || a.push("hljs"),
      -1 === e.indexOf(r) && a.push(r),
      a.join(" ").trim()
    );
  }
  function d(e) {
    var n,
      t,
      r,
      o,
      l,
      s = i(e);
    a(s) ||
      (_.useBR
        ? ((n = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          )),
          (n.innerHTML = e.innerHTML
            .replace(/\n/g, "")
            .replace(/<br[ \/]*>/g, "\n")))
        : (n = e),
      (l = n.textContent),
      (r = s ? f(s, l, !0) : g(l)),
      (t = c(n)),
      t.length &&
        ((o = document.createElementNS("http://www.w3.org/1999/xhtml", "div")),
        (o.innerHTML = r.value),
        (r.value = u(t, c(o), l))),
      (r.value = b(r.value)),
      (e.innerHTML = r.value),
      (e.className = p(e.className, s, r.language)),
      (e.result = { language: r.language, re: r.r }),
      r.second_best &&
        (e.second_best = {
          language: r.second_best.language,
          re: r.second_best.r
        }));
  }
  function h(e) {
    _ = o(_, e);
  }
  function v() {
    if (!v.called) {
      v.called = !0;
      var e = document.querySelectorAll("code");
      R.forEach.call(e, d);
    }
  }
  function m() {
    addEventListener("DOMContentLoaded", v, !1),
      addEventListener("load", v, !1);
  }
  function N(n, t) {
    var r = (y[n] = t(e));
    r.aliases &&
      r.aliases.forEach(function(e) {
        L[e] = n;
      });
  }
  function w() {
    return E(y);
  }
  function x(e) {
    return (e = (e || "").toLowerCase()), y[e] || y[L[e]];
  }
  var R = [],
    E = Object.keys,
    y = {},
    L = {},
    k = /^(no-?highlight|plain|text)$/i,
    M = /\blang(?:uage)?-([\w-]+)\b/i,
    B = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    C = "</span>",
    _ = {
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: void 0
    };
  return (
    (e.highlight = f),
    (e.highlightAuto = g),
    (e.fixMarkup = b),
    (e.highlightBlock = d),
    (e.configure = h),
    (e.initHighlighting = v),
    (e.initHighlightingOnLoad = m),
    (e.registerLanguage = N),
    (e.listLanguages = w),
    (e.getLanguage = x),
    (e.inherit = o),
    (e.IR = "[a-zA-Z]\\w*"),
    (e.UIR = "[a-zA-Z_]\\w*"),
    (e.NR = "\\b\\d+(\\.\\d+)?"),
    (e.CNR =
      "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
    (e.BNR = "\\b(0b[01]+)"),
    (e.RSR =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
    (e.BE = { b: "\\\\[\\s\\S]", r: 0 }),
    (e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }),
    (e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }),
    (e.PWM = {
      b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    }),
    (e.C = function(n, t, r) {
      var a = e.inherit({ cN: "comment", b: n, e: t, c: [] }, r || {});
      return (
        a.c.push(e.PWM),
        a.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }),
        a
      );
    }),
    (e.CLCM = e.C("//", "$")),
    (e.CBCM = e.C("/\\*", "\\*/")),
    (e.HCM = e.C("#", "$")),
    (e.NM = { cN: "number", b: e.NR, r: 0 }),
    (e.CNM = { cN: "number", b: e.CNR, r: 0 }),
    (e.BNM = { cN: "number", b: e.BNR, r: 0 }),
    (e.CSSNM = {
      cN: "number",
      b:
        e.NR +
        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      r: 0
    }),
    (e.RM = {
      cN: "regexp",
      b: /\//,
      e: /\/[gimuy]*/,
      i: /\n/,
      c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }]
    }),
    (e.TM = { cN: "title", b: e.IR, r: 0 }),
    (e.UTM = { cN: "title", b: e.UIR, r: 0 }),
    (e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }),
    e.registerLanguage("gmod_wire_e2", function(e) {
      return {
        alias: [
          "e2",
          "wire_e2",
          "gmod_wire_e2",
          "expression2",
          "exp2",
          "expr2"
        ],
        k:
          "if|0 elseif|0 else|0 for|0 foreach|0 while|0 break|0 continue|0 local|0 switch|0 case|0 default|0 function|0 return|0",
        c: [
          { cN: "string", b: /"(\\[\s\S]|(?!")[^\\])*"/ },
          { cN: "ppcommand", b: /#(include|ifdef|ifndef|else|endif)/, r: 10 },
          e.C(/#\[/, /]#/),
          e.HCM,
          {
            cN: "directive",
            v: [
              { b: /@name[^#\n]*/ },
              { b: /@model.*/ },
              { b: /@(inputs|outputs|persist|autoupdate)/ },
              { b: /@trigger( +(all|none))?/ }
            ],
            r: 10
          },
          { cN: "constant", b: /\b_[A-Z0-9_]+/, r: 0 },
          { cN: "variable", b: /\b[A-Z]\w*/, r: 0 },
          {
            cN: "operator",
            b: /[\?%^~$]|[\?\s]+:|[-+]{2}|<<|>>|->|[-+*\/!<>=]=?|[&|][&|]?/,
            r: 0
          },
          { cN: "symbol", b: /[[\](),:{}\\]+/, r: 0 },
          {
            cN: "type",
            b: /\b(angle|array|bone|complex|effect|entity|gtable|matrix[24]?|normal|number|quaternion|ranger|string|table|vector[24]?|void|wirelink)(?!\()\b/g,
            r: 0
          },
          {
            cN: "number",
            v: [
              { b: /\b0x[A-F0-9]+/ },
              { b: /\b0b[01]+/ },
              { b: /(\b\d+(\.\d*)?|\.\d+)(e[-+]?\d+)?/ }
            ],
            r: 0
          }
        ]
      };
    }),
    e
  );
});
hljs.configure({ tabReplace: "    " });
hljs.initHighlightingOnLoad();
