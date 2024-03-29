/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document) throw new Error("jQuery requires a window with a document");
      return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};

  function p(a, b) {
      b = b || d;
      var c = b.createElement("script");
      c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
  }
  var q = "3.2.1",
      r = function(a, b) {
          return new r.fn.init(a, b)
      },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function(a, b) {
          return b.toUpperCase()
      };
  r.fn = r.prototype = {
      jquery: q,
      constructor: r,
      length: 0,
      toArray: function() {
          return f.call(this)
      },
      get: function(a) {
          return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
      },
      pushStack: function(a) {
          var b = r.merge(this.constructor(), a);
          return b.prevObject = this, b
      },
      each: function(a) {
          return r.each(this, a)
      },
      map: function(a) {
          return this.pushStack(r.map(this, function(b, c) {
              return a.call(b, c, b)
          }))
      },
      slice: function() {
          return this.pushStack(f.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(a) {
          var b = this.length,
              c = +a + (a < 0 ? b : 0);
          return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: h,
      sort: c.sort,
      splice: c.splice
  }, r.extend = r.fn.extend = function() {
      var a, b, c, d, e, f, g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
      for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
          if (null != (a = arguments[h]))
              for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      return g
  }, r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
          throw new Error(a)
      },
      noop: function() {},
      isFunction: function(a) {
          return "function" === r.type(a)
      },
      isWindow: function(a) {
          return null != a && a === a.window
      },
      isNumeric: function(a) {
          var b = r.type(a);
          return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
      },
      isPlainObject: function(a) {
          var b, c;
          return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
      },
      isEmptyObject: function(a) {
          var b;
          for (b in a) return !1;
          return !0
      },
      type: function(a) {
          return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
      },
      globalEval: function(a) {
          p(a)
      },
      camelCase: function(a) {
          return a.replace(t, "ms-").replace(u, v)
      },
      each: function(a, b) {
          var c, d = 0;
          if (w(a)) {
              for (c = a.length; d < c; d++)
                  if (b.call(a[d], d, a[d]) === !1) break
          } else
              for (d in a)
                  if (b.call(a[d], d, a[d]) === !1) break; return a
      },
      trim: function(a) {
          return null == a ? "" : (a + "").replace(s, "")
      },
      makeArray: function(a, b) {
          var c = b || [];
          return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
      },
      inArray: function(a, b, c) {
          return null == b ? -1 : i.call(b, a, c)
      },
      merge: function(a, b) {
          for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
          return a.length = e, a
      },
      grep: function(a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
          return e
      },
      map: function(a, b, c) {
          var d, e, f = 0,
              h = [];
          if (w(a))
              for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
          else
              for (f in a) e = b(a[f], f, c), null != e && h.push(e);
          return g.apply([], h)
      },
      guid: 1,
      proxy: function(a, b) {
          var c, d, e;
          if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
              return a.apply(b || this, d.concat(f.call(arguments)))
          }, e.guid = a.guid = a.guid || r.guid++, e
      },
      now: Date.now,
      support: o
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
      j["[object " + b + "]"] = b.toLowerCase()
  });

  function w(a) {
      var b = !!a && "length" in a && a.length,
          c = r.type(a);
      return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
  }
  var x = function(a) {
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
          v = a.document,
          w = 0,
          x = 0,
          y = ha(),
          z = ha(),
          A = ha(),
          B = function(a, b) {
              return a === b && (l = !0), 0
          },
          C = {}.hasOwnProperty,
          D = [],
          E = D.pop,
          F = D.push,
          G = D.push,
          H = D.slice,
          I = function(a, b) {
              for (var c = 0, d = a.length; c < d; c++)
                  if (a[c] === b) return c;
              return -1
          },
          J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          K = "[\\x20\\t\\r\\n\\f]",
          L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
          N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          O = new RegExp(K + "+", "g"),
          P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
          Q = new RegExp("^" + K + "*," + K + "*"),
          R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
          S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
          T = new RegExp(N),
          U = new RegExp("^" + L + "$"),
          V = {
              ID: new RegExp("^#(" + L + ")"),
              CLASS: new RegExp("^\\.(" + L + ")"),
              TAG: new RegExp("^(" + L + "|[*])"),
              ATTR: new RegExp("^" + M),
              PSEUDO: new RegExp("^" + N),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + J + ")$", "i"),
              needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
          },
          W = /^(?:input|select|textarea|button)$/i,
          X = /^h\d$/i,
          Y = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          $ = /[+~]/,
          _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
          aa = function(a, b, c) {
              var d = "0x" + b - 65536;
              return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
          },
          ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ca = function(a, b) {
              return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
          },
          da = function() {
              m()
          },
          ea = ta(function(a) {
              return a.disabled === !0 && ("form" in a || "label" in a)
          }, {
              dir: "parentNode",
              next: "legend"
          });
      try {
          G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
      } catch (fa) {
          G = {
              apply: D.length ? function(a, b) {
                  F.apply(a, H.call(b))
              } : function(a, b) {
                  var c = a.length,
                      d = 0;
                  while (a[c++] = b[d++]);
                  a.length = c - 1
              }
          }
      }

      function ga(a, b, d, e) {
          var f, h, j, k, l, o, r, s = b && b.ownerDocument,
              w = b ? b.nodeType : 9;
          if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
          if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
              if (11 !== w && (l = Z.exec(a)))
                  if (f = l[1]) {
                      if (9 === w) {
                          if (!(j = b.getElementById(f))) return d;
                          if (j.id === f) return d.push(j), d
                      } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                  } else {
                      if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                      if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                  }
              if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                  if (1 !== w) s = b, r = a;
                  else if ("object" !== b.nodeName.toLowerCase()) {
                      (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                      while (h--) o[h] = "#" + k + " " + sa(o[h]);
                      r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                  }
                  if (r) try {
                      return G.apply(d, s.querySelectorAll(r)), d
                  } catch (x) {} finally {
                      k === u && b.removeAttribute("id")
                  }
              }
          }
          return i(a.replace(P, "$1"), b, d, e)
      }

      function ha() {
          var a = [];

          function b(c, e) {
              return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
          }
          return b
      }

      function ia(a) {
          return a[u] = !0, a
      }

      function ja(a) {
          var b = n.createElement("fieldset");
          try {
              return !!a(b)
          } catch (c) {
              return !1
          } finally {
              b.parentNode && b.parentNode.removeChild(b), b = null
          }
      }

      function ka(a, b) {
          var c = a.split("|"),
              e = c.length;
          while (e--) d.attrHandle[c[e]] = b
      }

      function la(a, b) {
          var c = b && a,
              d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
          if (d) return d;
          if (c)
              while (c = c.nextSibling)
                  if (c === b) return -1;
          return a ? 1 : -1
      }

      function ma(a) {
          return function(b) {
              var c = b.nodeName.toLowerCase();
              return "input" === c && b.type === a
          }
      }

      function na(a) {
          return function(b) {
              var c = b.nodeName.toLowerCase();
              return ("input" === c || "button" === c) && b.type === a
          }
      }

      function oa(a) {
          return function(b) {
              return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
          }
      }

      function pa(a) {
          return ia(function(b) {
              return b = +b, ia(function(c, d) {
                  var e, f = a([], c.length, b),
                      g = f.length;
                  while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
              })
          })
      }

      function qa(a) {
          return a && "undefined" != typeof a.getElementsByTagName && a
      }
      c = ga.support = {}, f = ga.isXML = function(a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName
      }, m = ga.setDocument = function(a) {
          var b, e, g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
              return a.className = "i", !a.getAttribute("className")
          }), c.getElementsByTagName = ja(function(a) {
              return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
          }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
              return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
          }), c.getById ? (d.filter.ID = function(a) {
              var b = a.replace(_, aa);
              return function(a) {
                  return a.getAttribute("id") === b
              }
          }, d.find.ID = function(a, b) {
              if ("undefined" != typeof b.getElementById && p) {
                  var c = b.getElementById(a);
                  return c ? [c] : []
              }
          }) : (d.filter.ID = function(a) {
              var b = a.replace(_, aa);
              return function(a) {
                  var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                  return c && c.value === b
              }
          }, d.find.ID = function(a, b) {
              if ("undefined" != typeof b.getElementById && p) {
                  var c, d, e, f = b.getElementById(a);
                  if (f) {
                      if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                      e = b.getElementsByName(a), d = 0;
                      while (f = e[d++])
                          if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                  }
                  return []
              }
          }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
              return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
          } : function(a, b) {
              var c, d = [],
                  e = 0,
                  f = b.getElementsByTagName(a);
              if ("*" === a) {
                  while (c = f[e++]) 1 === c.nodeType && d.push(c);
                  return d
              }
              return f
          }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
              if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
          }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
              o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
          }), ja(function(a) {
              a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var b = n.createElement("input");
              b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
          })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
              c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
          }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
              var c = 9 === a.nodeType ? a.documentElement : a,
                  d = b && b.parentNode;
              return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
          } : function(a, b) {
              if (b)
                  while (b = b.parentNode)
                      if (b === a) return !0;
              return !1
          }, B = b ? function(a, b) {
              if (a === b) return l = !0, 0;
              var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
              return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
          } : function(a, b) {
              if (a === b) return l = !0, 0;
              var c, d = 0,
                  e = a.parentNode,
                  f = b.parentNode,
                  g = [a],
                  h = [b];
              if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
              if (e === f) return la(a, b);
              c = a;
              while (c = c.parentNode) g.unshift(c);
              c = b;
              while (c = c.parentNode) h.unshift(c);
              while (g[d] === h[d]) d++;
              return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
          }, n) : n
      }, ga.matches = function(a, b) {
          return ga(a, null, null, b)
      }, ga.matchesSelector = function(a, b) {
          if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
              var d = s.call(a, b);
              if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
          } catch (e) {}
          return ga(b, n, null, [a]).length > 0
      }, ga.contains = function(a, b) {
          return (a.ownerDocument || a) !== n && m(a), t(a, b)
      }, ga.attr = function(a, b) {
          (a.ownerDocument || a) !== n && m(a);
          var e = d.attrHandle[b.toLowerCase()],
              f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
          return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
      }, ga.escape = function(a) {
          return (a + "").replace(ba, ca)
      }, ga.error = function(a) {
          throw new Error("Syntax error, unrecognized expression: " + a)
      }, ga.uniqueSort = function(a) {
          var b, d = [],
              e = 0,
              f = 0;
          if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
              while (b = a[f++]) b === a[f] && (e = d.push(f));
              while (e--) a.splice(d[e], 1)
          }
          return k = null, a
      }, e = ga.getText = function(a) {
          var b, c = "",
              d = 0,
              f = a.nodeType;
          if (f) {
              if (1 === f || 9 === f || 11 === f) {
                  if ("string" == typeof a.textContent) return a.textContent;
                  for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
              } else if (3 === f || 4 === f) return a.nodeValue
          } else
              while (b = a[d++]) c += e(b);
          return c
      }, d = ga.selectors = {
          cacheLength: 50,
          createPseudo: ia,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(a) {
                  return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
              },
              CHILD: function(a) {
                  return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
              },
              PSEUDO: function(a) {
                  var b, c = !a[6] && a[2];
                  return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
              }
          },
          filter: {
              TAG: function(a) {
                  var b = a.replace(_, aa).toLowerCase();
                  return "*" === a ? function() {
                      return !0
                  } : function(a) {
                      return a.nodeName && a.nodeName.toLowerCase() === b
                  }
              },
              CLASS: function(a) {
                  var b = y[a + " "];
                  return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                      return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                  })
              },
              ATTR: function(a, b, c) {
                  return function(d) {
                      var e = ga.attr(d, a);
                      return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                  }
              },
              CHILD: function(a, b, c, d, e) {
                  var f = "nth" !== a.slice(0, 3),
                      g = "last" !== a.slice(-4),
                      h = "of-type" === b;
                  return 1 === d && 0 === e ? function(a) {
                      return !!a.parentNode
                  } : function(b, c, i) {
                      var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                          q = b.parentNode,
                          r = h && b.nodeName.toLowerCase(),
                          s = !i && !h,
                          t = !1;
                      if (q) {
                          if (f) {
                              while (p) {
                                  m = b;
                                  while (m = m[p])
                                      if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                  o = p = "only" === a && !o && "nextSibling"
                              }
                              return !0
                          }
                          if (o = [g ? q.firstChild : q.lastChild], g && s) {
                              m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                              while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                  if (1 === m.nodeType && ++t && m === b) {
                                      k[a] = [w, n, t];
                                      break
                                  }
                          } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                              while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                  if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                          return t -= e, t === d || t % d === 0 && t / d >= 0
                      }
                  }
              },
              PSEUDO: function(a, b) {
                  var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                  return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                      var d, f = e(a, b),
                          g = f.length;
                      while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                  }) : function(a) {
                      return e(a, 0, c)
                  }) : e
              }
          },
          pseudos: {
              not: ia(function(a) {
                  var b = [],
                      c = [],
                      d = h(a.replace(P, "$1"));
                  return d[u] ? ia(function(a, b, c, e) {
                      var f, g = d(a, null, e, []),
                          h = a.length;
                      while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                  }) : function(a, e, f) {
                      return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                  }
              }),
              has: ia(function(a) {
                  return function(b) {
                      return ga(a, b).length > 0
                  }
              }),
              contains: ia(function(a) {
                  return a = a.replace(_, aa),
                      function(b) {
                          return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                      }
              }),
              lang: ia(function(a) {
                  return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                      function(b) {
                          var c;
                          do
                              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                          while ((b = b.parentNode) && 1 === b.nodeType);
                          return !1
                      }
              }),
              target: function(b) {
                  var c = a.location && a.location.hash;
                  return c && c.slice(1) === b.id
              },
              root: function(a) {
                  return a === o
              },
              focus: function(a) {
                  return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
              },
              enabled: oa(!1),
              disabled: oa(!0),
              checked: function(a) {
                  var b = a.nodeName.toLowerCase();
                  return "input" === b && !!a.checked || "option" === b && !!a.selected
              },
              selected: function(a) {
                  return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              },
              empty: function(a) {
                  for (a = a.firstChild; a; a = a.nextSibling)
                      if (a.nodeType < 6) return !1;
                  return !0
              },
              parent: function(a) {
                  return !d.pseudos.empty(a)
              },
              header: function(a) {
                  return X.test(a.nodeName)
              },
              input: function(a) {
                  return W.test(a.nodeName)
              },
              button: function(a) {
                  var b = a.nodeName.toLowerCase();
                  return "input" === b && "button" === a.type || "button" === b
              },
              text: function(a) {
                  var b;
                  return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
              },
              first: pa(function() {
                  return [0]
              }),
              last: pa(function(a, b) {
                  return [b - 1]
              }),
              eq: pa(function(a, b, c) {
                  return [c < 0 ? c + b : c]
              }),
              even: pa(function(a, b) {
                  for (var c = 0; c < b; c += 2) a.push(c);
                  return a
              }),
              odd: pa(function(a, b) {
                  for (var c = 1; c < b; c += 2) a.push(c);
                  return a
              }),
              lt: pa(function(a, b, c) {
                  for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                  return a
              }),
              gt: pa(function(a, b, c) {
                  for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                  return a
              })
          }
      }, d.pseudos.nth = d.pseudos.eq;
      for (b in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) d.pseudos[b] = ma(b);
      for (b in {
              submit: !0,
              reset: !0
          }) d.pseudos[b] = na(b);

      function ra() {}
      ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
          var c, e, f, g, h, i, j, k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          h = a, i = [], j = d.preFilter;
          while (h) {
              c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                  value: c,
                  type: e[0].replace(P, " ")
              }), h = h.slice(c.length));
              for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                  value: c,
                  type: g,
                  matches: e
              }), h = h.slice(c.length));
              if (!c) break
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
      };

      function sa(a) {
          for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
          return d
      }

      function ta(a, b, c) {
          var d = b.dir,
              e = b.next,
              f = e || d,
              g = c && "parentNode" === f,
              h = x++;
          return b.first ? function(b, c, e) {
              while (b = b[d])
                  if (1 === b.nodeType || g) return a(b, c, e);
              return !1
          } : function(b, c, i) {
              var j, k, l, m = [w, h];
              if (i) {
                  while (b = b[d])
                      if ((1 === b.nodeType || g) && a(b, c, i)) return !0
              } else
                  while (b = b[d])
                      if (1 === b.nodeType || g)
                          if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                          else {
                              if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                              if (k[f] = m, m[2] = a(b, c, i)) return !0
                          } return !1
          }
      }

      function ua(a) {
          return a.length > 1 ? function(b, c, d) {
              var e = a.length;
              while (e--)
                  if (!a[e](b, c, d)) return !1;
              return !0
          } : a[0]
      }

      function va(a, b, c) {
          for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
          return c
      }

      function wa(a, b, c, d, e) {
          for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
          return g
      }

      function xa(a, b, c, d, e, f) {
          return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
              var j, k, l, m = [],
                  n = [],
                  o = g.length,
                  p = f || va(b || "*", h.nodeType ? [h] : h, []),
                  q = !a || !f && b ? p : wa(p, m, a, h, i),
                  r = c ? e || (f ? a : o || d) ? [] : g : q;
              if (c && c(q, r, h, i), d) {
                  j = wa(r, n), d(j, [], h, i), k = j.length;
                  while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
              }
              if (f) {
                  if (e || a) {
                      if (e) {
                          j = [], k = r.length;
                          while (k--)(l = r[k]) && j.push(q[k] = l);
                          e(null, r = [], j, i)
                      }
                      k = r.length;
                      while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                  }
              } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
          })
      }

      function ya(a) {
          for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                  return a === b
              }, h, !0), l = ta(function(a) {
                  return I(b, a) > -1
              }, h, !0), m = [function(a, c, d) {
                  var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                  return b = null, e
              }]; i < f; i++)
              if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
              else {
                  if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                      for (e = ++i; e < f; e++)
                          if (d.relative[a[e].type]) break;
                      return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                          value: " " === a[i - 2].type ? "*" : ""
                      })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                  }
                  m.push(c)
              }
          return ua(m)
      }

      function za(a, b) {
          var c = b.length > 0,
              e = a.length > 0,
              f = function(f, g, h, i, k) {
                  var l, o, q, r = 0,
                      s = "0",
                      t = f && [],
                      u = [],
                      v = j,
                      x = f || e && d.find.TAG("*", k),
                      y = w += null == v ? 1 : Math.random() || .1,
                      z = x.length;
                  for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                      if (e && l) {
                          o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                          while (q = a[o++])
                              if (q(l, g || n, h)) {
                                  i.push(l);
                                  break
                              }
                          k && (w = y)
                      }
                      c && ((l = !q && l) && r--, f && t.push(l))
                  }
                  if (r += s, c && s !== r) {
                      o = 0;
                      while (q = b[o++]) q(t, u, g, h);
                      if (f) {
                          if (r > 0)
                              while (s--) t[s] || u[s] || (u[s] = E.call(i));
                          u = wa(u)
                      }
                      G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                  }
                  return k && (w = y, j = v), t
              };
          return c ? ia(f) : f
      }
      return h = ga.compile = function(a, b) {
          var c, d = [],
              e = [],
              f = A[a + " "];
          if (!f) {
              b || (b = g(a)), c = b.length;
              while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
              f = A(a, za(e, d)), f.selector = a
          }
          return f
      }, i = ga.select = function(a, b, c, e) {
          var f, i, j, k, l, m = "function" == typeof a && a,
              n = !e && g(a = m.selector || a);
          if (c = c || [], 1 === n.length) {
              if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                  if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                  m && (b = b.parentNode), a = a.slice(i.shift().value.length)
              }
              f = V.needsContext.test(a) ? 0 : i.length;
              while (f--) {
                  if (j = i[f], d.relative[k = j.type]) break;
                  if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                      if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                      break
                  }
              }
          }
          return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
      }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
          return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
      }), ja(function(a) {
          return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
      }) || ka("type|href|height|width", function(a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
      }), c.attributes && ja(function(a) {
          return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
      }) || ka("value", function(a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
      }), ja(function(a) {
          return null == a.getAttribute("disabled")
      }) || ka(J, function(a, b, c) {
          var d;
          if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }), ga
  }(a);
  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
  var y = function(a, b, c) {
          var d = [],
              e = void 0 !== c;
          while ((a = a[b]) && 9 !== a.nodeType)
              if (1 === a.nodeType) {
                  if (e && r(a).is(c)) break;
                  d.push(a)
              }
          return d
      },
      z = function(a, b) {
          for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
          return c
      },
      A = r.expr.match.needsContext;

  function B(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;

  function E(a, b, c) {
      return r.isFunction(b) ? r.grep(a, function(a, d) {
          return !!b.call(a, d, a) !== c
      }) : b.nodeType ? r.grep(a, function(a) {
          return a === b !== c
      }) : "string" != typeof b ? r.grep(a, function(a) {
          return i.call(b, a) > -1 !== c
      }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType
      }))
  }
  r.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
          return 1 === a.nodeType
      }))
  }, r.fn.extend({
      find: function(a) {
          var b, c, d = this.length,
              e = this;
          if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
              for (b = 0; b < d; b++)
                  if (r.contains(e[b], this)) return !0
          }));
          for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
          return d > 1 ? r.uniqueSort(c) : c
      },
      filter: function(a) {
          return this.pushStack(E(this, a || [], !1))
      },
      not: function(a) {
          return this.pushStack(E(this, a || [], !0))
      },
      is: function(a) {
          return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
      }
  });
  var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function(a, b, c) {
          var e, f;
          if (!a) return this;
          if (c = c || F, "string" == typeof a) {
              if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
              if (e[1]) {
                  if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                      for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                  return this
              }
              return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
          }
          return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
      };
  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/,
      J = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  r.fn.extend({
      has: function(a) {
          var b = r(a, this),
              c = b.length;
          return this.filter(function() {
              for (var a = 0; a < c; a++)
                  if (r.contains(this, b[a])) return !0
          })
      },
      closest: function(a, b) {
          var c, d = 0,
              e = this.length,
              f = [],
              g = "string" != typeof a && r(a);
          if (!A.test(a))
              for (; d < e; d++)
                  for (c = this[d]; c && c !== b; c = c.parentNode)
                      if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                          f.push(c);
                          break
                      }
          return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
      },
      index: function(a) {
          return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(a, b) {
          return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
      },
      addBack: function(a) {
          return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
  });

  function K(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType);
      return a
  }
  r.each({
      parent: function(a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null
      },
      parents: function(a) {
          return y(a, "parentNode")
      },
      parentsUntil: function(a, b, c) {
          return y(a, "parentNode", c)
      },
      next: function(a) {
          return K(a, "nextSibling")
      },
      prev: function(a) {
          return K(a, "previousSibling")
      },
      nextAll: function(a) {
          return y(a, "nextSibling")
      },
      prevAll: function(a) {
          return y(a, "previousSibling")
      },
      nextUntil: function(a, b, c) {
          return y(a, "nextSibling", c)
      },
      prevUntil: function(a, b, c) {
          return y(a, "previousSibling", c)
      },
      siblings: function(a) {
          return z((a.parentNode || {}).firstChild, a)
      },
      children: function(a) {
          return z(a.firstChild)
      },
      contents: function(a) {
          return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
      }
  }, function(a, b) {
      r.fn[a] = function(c, d) {
          var e = r.map(this, b, c);
          return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
      }
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function M(a) {
      var b = {};
      return r.each(a.match(L) || [], function(a, c) {
          b[c] = !0
      }), b
  }
  r.Callbacks = function(a) {
      a = "string" == typeof a ? M(a) : r.extend({}, a);
      var b, c, d, e, f = [],
          g = [],
          h = -1,
          i = function() {
              for (e = e || a.once, d = b = !0; g.length; h = -1) {
                  c = g.shift();
                  while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
              }
              a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
          },
          j = {
              add: function() {
                  return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                      r.each(b, function(b, c) {
                          r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                      })
                  }(arguments), c && !b && i()), this
              },
              remove: function() {
                  return r.each(arguments, function(a, b) {
                      var c;
                      while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                  }), this
              },
              has: function(a) {
                  return a ? r.inArray(a, f) > -1 : f.length > 0
              },
              empty: function() {
                  return f && (f = []), this
              },
              disable: function() {
                  return e = g = [], f = c = "", this
              },
              disabled: function() {
                  return !f
              },
              lock: function() {
                  return e = g = [], c || b || (f = c = ""), this
              },
              locked: function() {
                  return !!e
              },
              fireWith: function(a, c) {
                  return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
              },
              fire: function() {
                  return j.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!d
              }
          };
      return j
  };

  function N(a) {
      return a
  }

  function O(a) {
      throw a
  }

  function P(a, b, c, d) {
      var e;
      try {
          a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
      } catch (a) {
          c.apply(void 0, [a])
      }
  }
  r.extend({
      Deferred: function(b) {
          var c = [
                  ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                  ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
              ],
              d = "pending",
              e = {
                  state: function() {
                      return d
                  },
                  always: function() {
                      return f.done(arguments).fail(arguments), this
                  },
                  "catch": function(a) {
                      return e.then(null, a)
                  },
                  pipe: function() {
                      var a = arguments;
                      return r.Deferred(function(b) {
                          r.each(c, function(c, d) {
                              var e = r.isFunction(a[d[4]]) && a[d[4]];
                              f[d[1]](function() {
                                  var a = e && e.apply(this, arguments);
                                  a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                              })
                          }), a = null
                      }).promise()
                  },
                  then: function(b, d, e) {
                      var f = 0;

                      function g(b, c, d, e) {
                          return function() {
                              var h = this,
                                  i = arguments,
                                  j = function() {
                                      var a, j;
                                      if (!(b < f)) {
                                          if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                          j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                      }
                                  },
                                  k = e ? j : function() {
                                      try {
                                          j()
                                      } catch (a) {
                                          r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                                      }
                                  };
                              b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                          }
                      }
                      return r.Deferred(function(a) {
                          c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                      }).promise()
                  },
                  promise: function(a) {
                      return null != a ? r.extend(a, e) : e
                  }
              },
              f = {};
          return r.each(c, function(a, b) {
              var g = b[2],
                  h = b[5];
              e[b[1]] = g.add, h && g.add(function() {
                  d = h
              }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                  return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              }, f[b[0] + "With"] = g.fireWith
          }), e.promise(f), b && b.call(f, f), f
      },
      when: function(a) {
          var b = arguments.length,
              c = b,
              d = Array(c),
              e = f.call(arguments),
              g = r.Deferred(),
              h = function(a) {
                  return function(c) {
                      d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                  }
              };
          if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
          while (c--) P(e[c], h(c), g.reject);
          return g.promise()
      }
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function(b, c) {
      a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
  }, r.readyException = function(b) {
      a.setTimeout(function() {
          throw b
      })
  };
  var R = r.Deferred();
  r.fn.ready = function(a) {
      return R.then(a)["catch"](function(a) {
          r.readyException(a)
      }), this
  }, r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(a) {
          (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
      }
  }), r.ready.then = R.then;

  function S() {
      d.removeEventListener("DOMContentLoaded", S),
          a.removeEventListener("load", S), r.ready()
  }
  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function(a, b, c, d, e, f, g) {
          var h = 0,
              i = a.length,
              j = null == c;
          if ("object" === r.type(c)) {
              e = !0;
              for (h in c) T(a, b, h, c[h], !0, f, g)
          } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                  return j.call(r(a), c)
              })), b))
              for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
          return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
      },
      U = function(a) {
          return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
      };

  function V() {
      this.expando = r.expando + V.uid++
  }
  V.uid = 1, V.prototype = {
      cache: function(a) {
          var b = a[this.expando];
          return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
              value: b,
              configurable: !0
          }))), b
      },
      set: function(a, b, c) {
          var d, e = this.cache(a);
          if ("string" == typeof b) e[r.camelCase(b)] = c;
          else
              for (d in b) e[r.camelCase(d)] = b[d];
          return e
      },
      get: function(a, b) {
          return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
      },
      access: function(a, b, c) {
          return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
      },
      remove: function(a, b) {
          var c, d = a[this.expando];
          if (void 0 !== d) {
              if (void 0 !== b) {
                  Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
                  while (c--) delete d[b[c]]
              }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
          }
      },
      hasData: function(a) {
          var b = a[this.expando];
          return void 0 !== b && !r.isEmptyObject(b)
      }
  };
  var W = new V,
      X = new V,
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function $(a) {
      return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
  }

  function _(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
          if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
              try {
                  c = $(c)
              } catch (e) {}
              X.set(a, b, c)
          } else c = void 0;
      return c
  }
  r.extend({
      hasData: function(a) {
          return X.hasData(a) || W.hasData(a)
      },
      data: function(a, b, c) {
          return X.access(a, b, c)
      },
      removeData: function(a, b) {
          X.remove(a, b)
      },
      _data: function(a, b, c) {
          return W.access(a, b, c)
      },
      _removeData: function(a, b) {
          W.remove(a, b)
      }
  }), r.fn.extend({
      data: function(a, b) {
          var c, d, e, f = this[0],
              g = f && f.attributes;
          if (void 0 === a) {
              if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                  c = g.length;
                  while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                  W.set(f, "hasDataAttrs", !0)
              }
              return e
          }
          return "object" == typeof a ? this.each(function() {
              X.set(this, a)
          }) : T(this, function(b) {
              var c;
              if (f && void 0 === b) {
                  if (c = X.get(f, a), void 0 !== c) return c;
                  if (c = _(f, a), void 0 !== c) return c
              } else this.each(function() {
                  X.set(this, a, b)
              })
          }, null, b, arguments.length > 1, null, !0)
      },
      removeData: function(a) {
          return this.each(function() {
              X.remove(this, a)
          })
      }
  }), r.extend({
      queue: function(a, b, c) {
          var d;
          if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
      },
      dequeue: function(a, b) {
          b = b || "fx";
          var c = r.queue(a, b),
              d = c.length,
              e = c.shift(),
              f = r._queueHooks(a, b),
              g = function() {
                  r.dequeue(a, b)
              };
          "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
          var c = b + "queueHooks";
          return W.get(a, c) || W.access(a, c, {
              empty: r.Callbacks("once memory").add(function() {
                  W.remove(a, [b + "queue", c])
              })
          })
      }
  }), r.fn.extend({
      queue: function(a, b) {
          var c = 2;
          return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
              var c = r.queue(this, a, b);
              r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
          })
      },
      dequeue: function(a) {
          return this.each(function() {
              r.dequeue(this, a)
          })
      },
      clearQueue: function(a) {
          return this.queue(a || "fx", [])
      },
      promise: function(a, b) {
          var c, d = 1,
              e = r.Deferred(),
              f = this,
              g = this.length,
              h = function() {
                  --d || e.resolveWith(f, [f])
              };
          "string" != typeof a && (b = a, a = void 0), a = a || "fx";
          while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
          return h(), e.promise(b)
      }
  });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function(a, b) {
          return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
      },
      ea = function(a, b, c, d) {
          var e, f, g = {};
          for (f in b) g[f] = a.style[f], a.style[f] = b[f];
          e = c.apply(a, d || []);
          for (f in b) a.style[f] = g[f];
          return e
      };

  function fa(a, b, c, d) {
      var e, f = 1,
          g = 20,
          h = d ? function() {
              return d.cur()
          } : function() {
              return r.css(a, b, "")
          },
          i = h(),
          j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
          k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
      if (k && k[3] !== j) {
          j = j || k[3], c = c || [], k = +i || 1;
          do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
      }
      return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }
  var ga = {};

  function ha(a) {
      var b, c = a.ownerDocument,
          d = a.nodeName,
          e = ga[d];
      return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
  }

  function ia(a, b) {
      for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
      for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
      return a
  }
  r.fn.extend({
      show: function() {
          return ia(this, !0)
      },
      hide: function() {
          return ia(this)
      },
      toggle: function(a) {
          return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
              da(this) ? r(this).show() : r(this).hide()
          })
      }
  });
  var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

  function na(a, b) {
      var c;
      return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
  }

  function oa(a, b) {
      for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
  }
  var pa = /<|&#?\w+;/;

  function qa(a, b, c, d, e) {
      for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
          if (f = a[n], f || 0 === f)
              if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
              else if (pa.test(f)) {
          g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
      } else m.push(b.createTextNode(f));
      l.textContent = "", n = 0;
      while (f = m[n++])
          if (d && r.inArray(f, d) > -1) e && e.push(f);
          else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
          k = 0;
          while (f = g[k++]) la.test(f.type || "") && c.push(f)
      }
      return l
  }! function() {
      var a = d.createDocumentFragment(),
          b = a.appendChild(d.createElement("div")),
          c = d.createElement("input");
      c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;

  function va() {
      return !0
  }

  function wa() {
      return !1
  }

  function xa() {
      try {
          return d.activeElement
      } catch (a) {}
  }

  function ya(a, b, c, d, e, f) {
      var g, h;
      if ("object" == typeof b) {
          "string" != typeof c && (d = d || c, c = void 0);
          for (h in b) ya(a, h, c, d, b[h], f);
          return a
      }
      if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
      else if (!e) return a;
      return 1 === f && (g = e, e = function(a) {
          return r().off(a), g.apply(this, arguments)
      }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
          r.event.add(this, b, e, d, c)
      })
  }
  r.event = {
      global: {},
      add: function(a, b, c, d, e) {
          var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
          if (q) {
              c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                  return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
              }), b = (b || "").match(L) || [""], j = b.length;
              while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join(".")
              }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
          }
      },
      remove: function(a, b, c, d, e) {
          var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
          if (q && (i = q.events)) {
              b = (b || "").match(L) || [""], j = b.length;
              while (j--)
                  if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                      l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                      while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                      g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                  } else
                      for (n in i) r.event.remove(a, n + b[j], c, d, !0);
              r.isEmptyObject(i) && W.remove(a, "handle events")
          }
      },
      dispatch: function(a) {
          var b = r.event.fix(a),
              c, d, e, f, g, h, i = new Array(arguments.length),
              j = (W.get(this, "events") || {})[b.type] || [],
              k = r.event.special[b.type] || {};
          for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
          if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
              h = r.event.handlers.call(this, b, j), c = 0;
              while ((f = h[c++]) && !b.isPropagationStopped()) {
                  b.currentTarget = f.elem, d = 0;
                  while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
              }
              return k.postDispatch && k.postDispatch.call(this, b), b.result
          }
      },
      handlers: function(a, b) {
          var c, d, e, f, g, h = [],
              i = b.delegateCount,
              j = a.target;
          if (i && j.nodeType && !("click" === a.type && a.button >= 1))
              for (; j !== this; j = j.parentNode || this)
                  if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                      for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                      f.length && h.push({
                          elem: j,
                          handlers: f
                      })
                  }
          return j = this, i < b.length && h.push({
              elem: j,
              handlers: b.slice(i)
          }), h
      },
      addProp: function(a, b) {
          Object.defineProperty(r.Event.prototype, a, {
              enumerable: !0,
              configurable: !0,
              get: r.isFunction(b) ? function() {
                  if (this.originalEvent) return b(this.originalEvent)
              } : function() {
                  if (this.originalEvent) return this.originalEvent[a]
              },
              set: function(b) {
                  Object.defineProperty(this, a, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: b
                  })
              }
          })
      },
      fix: function(a) {
          return a[r.expando] ? a : new r.Event(a)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== xa() && this.focus) return this.focus(), !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === xa() && this.blur) return this.blur(), !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
              },
              _default: function(a) {
                  return B(a.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(a) {
                  void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
              }
          }
      }
  }, r.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c)
  }, r.Event = function(a, b) {
      return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
  }, r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function() {
          var a = this.originalEvent;
          this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
      },
      stopPropagation: function() {
          var a = this.originalEvent;
          this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var a = this.originalEvent;
          this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
      }
  }, r.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(a) {
          var b = a.button;
          return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
      }
  }, r.event.addProp), r.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(a, b) {
      r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function(a) {
              var c, d = this,
                  e = a.relatedTarget,
                  f = a.handleObj;
              return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
          }
      }
  }), r.fn.extend({
      on: function(a, b, c, d) {
          return ya(this, a, b, c, d)
      },
      one: function(a, b, c, d) {
          return ya(this, a, b, c, d, 1)
      },
      off: function(a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
          if ("object" == typeof a) {
              for (e in a) this.off(e, b, a[e]);
              return this
          }
          return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
              r.event.remove(this, a, c, b)
          })
      }
  });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ea(a, b) {
      return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
  }

  function Fa(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function Ga(a) {
      var b = Ca.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function Ha(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
          if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
              delete g.handle, g.events = {};
              for (e in j)
                  for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
          }
          X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
      }
  }

  function Ia(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
  }

  function Ja(a, b, c, d) {
      b = g.apply([], b);
      var e, f, h, i, j, k, l = 0,
          m = a.length,
          n = m - 1,
          q = b[0],
          s = r.isFunction(q);
      if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
          var f = a.eq(e);
          s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
      });
      if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
          for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
          if (i)
              for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
      }
      return a
  }

  function Ka(a, b, c) {
      for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
      return a
  }
  r.extend({
      htmlPrefilter: function(a) {
          return a.replace(za, "<$1></$2>")
      },
      clone: function(a, b, c) {
          var d, e, f, g, h = a.cloneNode(!0),
              i = r.contains(a.ownerDocument, a);
          if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
              for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
          if (b)
              if (c)
                  for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
              else Ha(a, h);
          return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
      },
      cleanData: function(a) {
          for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
              if (U(c)) {
                  if (b = c[W.expando]) {
                      if (b.events)
                          for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                      c[W.expando] = void 0
                  }
                  c[X.expando] && (c[X.expando] = void 0)
              }
      }
  }), r.fn.extend({
      detach: function(a) {
          return Ka(this, a, !0)
      },
      remove: function(a) {
          return Ka(this, a)
      },
      text: function(a) {
          return T(this, function(a) {
              return void 0 === a ? r.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
              })
          }, null, a, arguments.length)
      },
      append: function() {
          return Ja(this, arguments, function(a) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var b = Ea(this, a);
                  b.appendChild(a)
              }
          })
      },
      prepend: function() {
          return Ja(this, arguments, function(a) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var b = Ea(this, a);
                  b.insertBefore(a, b.firstChild)
              }
          })
      },
      before: function() {
          return Ja(this, arguments, function(a) {
              this.parentNode && this.parentNode.insertBefore(a, this)
          })
      },
      after: function() {
          return Ja(this, arguments, function(a) {
              this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
          })
      },
      empty: function() {
          for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
          return this
      },
      clone: function(a, b) {
          return a = null != a && a, b = null == b ? a : b, this.map(function() {
              return r.clone(this, a, b)
          })
      },
      html: function(a) {
          return T(this, function(a) {
              var b = this[0] || {},
                  c = 0,
                  d = this.length;
              if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
              if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                  a = r.htmlPrefilter(a);
                  try {
                      for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                      b = 0
                  } catch (e) {}
              }
              b && this.empty().append(a)
          }, null, a, arguments.length)
      },
      replaceWith: function() {
          var a = [];
          return Ja(this, arguments, function(b) {
              var c = this.parentNode;
              r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
          }, a)
      }
  }), r.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(a, b) {
      r.fn[a] = function(a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
          return this.pushStack(d)
      }
  });
  var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function(b) {
          var c = b.ownerDocument.defaultView;
          return c && c.opener || (c = a), c.getComputedStyle(b)
      };
  ! function() {
      function b() {
          if (i) {
              i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
              var b = a.getComputedStyle(i);
              c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
          }
      }
      var c, e, f, g, h = d.createElement("div"),
          i = d.createElement("div");
      i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
          pixelPosition: function() {
              return b(), c
          },
          boxSizingReliable: function() {
              return b(), e
          },
          pixelMarginRight: function() {
              return b(), f
          },
          reliableMarginLeft: function() {
              return b(), g
          }
      }))
  }();

  function Oa(a, b, c) {
      var d, e, f, g, h = a.style;
      return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function Pa(a, b) {
      return {
          get: function() {
              return a() ? void delete this.get : (this.get = b).apply(this, arguments)
          }
      }
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Ta = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;

  function Wa(a) {
      if (a in Va) return a;
      var b = a[0].toUpperCase() + a.slice(1),
          c = Ua.length;
      while (c--)
          if (a = Ua[c] + b, a in Va) return a
  }

  function Xa(a) {
      var b = r.cssProps[a];
      return b || (b = r.cssProps[a] = Wa(a) || a), b
  }

  function Ya(a, b, c) {
      var d = ba.exec(b);
      return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }

  function Za(a, b, c, d, e) {
      var f, g = 0;
      for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
      return g
  }

  function $a(a, b, c) {
      var d, e = Na(a),
          f = Oa(a, b, e),
          g = "border-box" === r.css(a, "boxSizing", !1, e);
      return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
  }
  r.extend({
      cssHooks: {
          opacity: {
              get: function(a, b) {
                  if (b) {
                      var c = Oa(a, "opacity");
                      return "" === c ? "1" : c
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": "cssFloat"
      },
      style: function(a, b, c, d) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
              var e, f, g, h = r.camelCase(b),
                  i = Ra.test(b),
                  j = a.style;
              return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
          }
      },
      css: function(a, b, c, d) {
          var e, f, g, h = r.camelCase(b),
              i = Ra.test(b);
          return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
      }
  }), r.each(["height", "width"], function(a, b) {
      r.cssHooks[b] = {
          get: function(a, c, d) {
              if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
                  return $a(a, b, d)
              })
          },
          set: function(a, c, d) {
              var e, f = d && Na(a),
                  g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
              return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
          }
      }
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
      if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
          marginLeft: 0
      }, function() {
          return a.getBoundingClientRect().left
      })) + "px"
  }), r.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(a, b) {
      r.cssHooks[a + b] = {
          expand: function(c) {
              for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
              return e
          }
      }, La.test(a) || (r.cssHooks[a + b].set = Ya)
  }), r.fn.extend({
      css: function(a, b) {
          return T(this, function(a, b, c) {
              var d, e, f = {},
                  g = 0;
              if (Array.isArray(b)) {
                  for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                  return f
              }
              return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
          }, a, b, arguments.length > 1)
      }
  });

  function _a(a, b, c, d, e) {
      return new _a.prototype.init(a, b, c, d, e)
  }
  r.Tween = _a, _a.prototype = {
      constructor: _a,
      init: function(a, b, c, d, e, f) {
          this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
      },
      cur: function() {
          var a = _a.propHooks[this.prop];
          return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
      },
      run: function(a) {
          var b, c = _a.propHooks[this.prop];
          return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
      }
  }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
      _default: {
          get: function(a) {
              var b;
              return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
          },
          set: function(a) {
              r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
          }
      }
  }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
      set: function(a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
  }, r.easing = {
      linear: function(a) {
          return a
      },
      swing: function(a) {
          return .5 - Math.cos(a * Math.PI) / 2
      },
      _default: "swing"
  }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab, bb, cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;

  function eb() {
      bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
  }

  function fb() {
      return a.setTimeout(function() {
          ab = void 0
      }), ab = r.now()
  }

  function gb(a, b) {
      var c, d = 0,
          e = {
              height: a
          };
      for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
      return b && (e.opacity = e.width = a), e
  }

  function hb(a, b, c) {
      for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
          if (d = e[f].call(c, b, a)) return d
  }

  function ib(a, b, c) {
      var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
          m = this,
          n = {},
          o = a.style,
          p = a.nodeType && da(a),
          q = W.get(a, "fxshow");
      c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
          g.unqueued || h()
      }), g.unqueued++, m.always(function() {
          m.always(function() {
              g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
          })
      }));
      for (d in b)
          if (e = b[d], cb.test(e)) {
              if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                  if ("show" !== e || !q || void 0 === q[d]) continue;
                  p = !0
              }
              n[d] = q && q[d] || r.style(a, d)
          }
      if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
          l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
              o.display = j
          }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
              o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
          })), i = !1;
          for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
              display: j
          }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() {
              p || ia([a]), W.remove(a, "fxshow");
              for (d in n) r.style(a, d, n[d])
          })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
      }
  }

  function jb(a, b) {
      var c, d, e, f, g;
      for (c in a)
          if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
              f = g.expand(f), delete a[d];
              for (c in f) c in a || (a[c] = f[c], b[c] = e)
          } else b[d] = e
  }

  function kb(a, b, c) {
      var d, e, f = 0,
          g = kb.prefilters.length,
          h = r.Deferred().always(function() {
              delete i.elem
          }),
          i = function() {
              if (e) return !1;
              for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
              return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
          },
          j = h.promise({
              elem: a,
              props: r.extend({}, b),
              opts: r.extend(!0, {
                  specialEasing: {},
                  easing: r.easing._default
              }, c),
              originalProperties: b,
              originalOptions: c,
              startTime: ab || fb(),
              duration: c.duration,
              tweens: [],
              createTween: function(b, c) {
                  var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                  return j.tweens.push(d), d
              },
              stop: function(b) {
                  var c = 0,
                      d = b ? j.tweens.length : 0;
                  if (e) return this;
                  for (e = !0; c < d; c++) j.tweens[c].run(1);
                  return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
              }
          }),
          k = j.props;
      for (jb(k, j.opts.specialEasing); f < g; f++)
          if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
      return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
          elem: a,
          anim: j,
          queue: j.opts.queue
      })), j
  }
  r.Animation = r.extend(kb, {
          tweeners: {
              "*": [function(a, b) {
                  var c = this.createTween(a, b);
                  return fa(c.elem, a, ba.exec(b), c), c
              }]
          },
          tweener: function(a, b) {
              r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
              for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
          },
          prefilters: [ib],
          prefilter: function(a, b) {
              b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
          }
      }), r.speed = function(a, b, c) {
          var d = a && "object" == typeof a ? r.extend({}, a) : {
              complete: c || !c && b || r.isFunction(a) && a,
              duration: a,
              easing: c && b || b && !r.isFunction(b) && b
          };
          return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
              r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
          }, d
      }, r.fn.extend({
          fadeTo: function(a, b, c, d) {
              return this.filter(da).css("opacity", 0).show().end().animate({
                  opacity: b
              }, a, c, d)
          },
          animate: function(a, b, c, d) {
              var e = r.isEmptyObject(a),
                  f = r.speed(b, c, d),
                  g = function() {
                      var b = kb(this, r.extend({}, a), f);
                      (e || W.get(this, "finish")) && b.stop(!0)
                  };
              return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          },
          stop: function(a, b, c) {
              var d = function(a) {
                  var b = a.stop;
                  delete a.stop, b(c)
              };
              return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                  var b = !0,
                      e = null != a && a + "queueHooks",
                      f = r.timers,
                      g = W.get(this);
                  if (e) g[e] && g[e].stop && d(g[e]);
                  else
                      for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                  for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                  !b && c || r.dequeue(this, a)
              })
          },
          finish: function(a) {
              return a !== !1 && (a = a || "fx"), this.each(function() {
                  var b, c = W.get(this),
                      d = c[a + "queue"],
                      e = c[a + "queueHooks"],
                      f = r.timers,
                      g = d ? d.length : 0;
                  for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                  for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                  delete c.finish
              })
          }
      }), r.each(["toggle", "show", "hide"], function(a, b) {
          var c = r.fn[b];
          r.fn[b] = function(a, d, e) {
              return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
          }
      }), r.each({
          slideDown: gb("show"),
          slideUp: gb("hide"),
          slideToggle: gb("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(a, b) {
          r.fn[a] = function(a, c, d) {
              return this.animate(b, a, c, d)
          }
      }), r.timers = [], r.fx.tick = function() {
          var a, b = 0,
              c = r.timers;
          for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
          c.length || r.fx.stop(), ab = void 0
      }, r.fx.timer = function(a) {
          r.timers.push(a), r.fx.start()
      }, r.fx.interval = 13, r.fx.start = function() {
          bb || (bb = !0, eb())
      }, r.fx.stop = function() {
          bb = null
      }, r.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }, r.fn.delay = function(b, c) {
          return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
              var e = a.setTimeout(c, b);
              d.stop = function() {
                  a.clearTimeout(e)
              }
          })
      },
      function() {
          var a = d.createElement("input"),
              b = d.createElement("select"),
              c = b.appendChild(d.createElement("option"));
          a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
      }();
  var lb, mb = r.expr.attrHandle;
  r.fn.extend({
      attr: function(a, b) {
          return T(this, r.attr, a, b, arguments.length > 1)
      },
      removeAttr: function(a) {
          return this.each(function() {
              r.removeAttr(this, a)
          })
      }
  }), r.extend({
      attr: function(a, b, c) {
          var d, e, f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
              null == d ? void 0 : d))
      },
      attrHooks: {
          type: {
              set: function(a, b) {
                  if (!o.radioValue && "radio" === b && B(a, "input")) {
                      var c = a.value;
                      return a.setAttribute("type", b), c && (a.value = c), b
                  }
              }
          }
      },
      removeAttr: function(a, b) {
          var c, d = 0,
              e = b && b.match(L);
          if (e && 1 === a.nodeType)
              while (c = e[d++]) a.removeAttribute(c)
      }
  }), lb = {
      set: function(a, b, c) {
          return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
      }
  }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function(a, b, d) {
          var e, f, g = b.toLowerCase();
          return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
      }
  });
  var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;
  r.fn.extend({
      prop: function(a, b) {
          return T(this, r.prop, a, b, arguments.length > 1)
      },
      removeProp: function(a) {
          return this.each(function() {
              delete this[r.propFix[a] || a]
          })
      }
  }), r.extend({
      prop: function(a, b, c) {
          var d, e, f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
      },
      propHooks: {
          tabIndex: {
              get: function(a) {
                  var b = r.find.attr(a, "tabindex");
                  return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
              }
          }
      },
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  }), o.optSelected || (r.propHooks.selected = {
      get: function(a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null
      },
      set: function(a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
      }
  }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      r.propFix[this.toLowerCase()] = this
  });

  function pb(a) {
      var b = a.match(L) || [];
      return b.join(" ")
  }

  function qb(a) {
      return a.getAttribute && a.getAttribute("class") || ""
  }
  r.fn.extend({
      addClass: function(a) {
          var b, c, d, e, f, g, h, i = 0;
          if (r.isFunction(a)) return this.each(function(b) {
              r(this).addClass(a.call(this, b, qb(this)))
          });
          if ("string" == typeof a && a) {
              b = a.match(L) || [];
              while (c = this[i++])
                  if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                      g = 0;
                      while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                      h = pb(d), e !== h && c.setAttribute("class", h)
                  }
          }
          return this
      },
      removeClass: function(a) {
          var b, c, d, e, f, g, h, i = 0;
          if (r.isFunction(a)) return this.each(function(b) {
              r(this).removeClass(a.call(this, b, qb(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof a && a) {
              b = a.match(L) || [];
              while (c = this[i++])
                  if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                      g = 0;
                      while (f = b[g++])
                          while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                      h = pb(d), e !== h && c.setAttribute("class", h)
                  }
          }
          return this
      },
      toggleClass: function(a, b) {
          var c = typeof a;
          return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
              r(this).toggleClass(a.call(this, c, qb(this), b), b)
          }) : this.each(function() {
              var b, d, e, f;
              if ("string" === c) {
                  d = 0, e = r(this), f = a.match(L) || [];
                  while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
              } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
          })
      },
      hasClass: function(a) {
          var b, c, d = 0;
          b = " " + a + " ";
          while (c = this[d++])
              if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
          return !1
      }
  });
  var rb = /\r/g;
  r.fn.extend({
      val: function(a) {
          var b, c, d, e = this[0]; {
              if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                  var e;
                  1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
                      return null == a ? "" : a + ""
                  })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
              });
              if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          }
      }
  }), r.extend({
      valHooks: {
          option: {
              get: function(a) {
                  var b = r.find.attr(a, "value");
                  return null != b ? b : pb(r.text(a))
              }
          },
          select: {
              get: function(a) {
                  var b, c, d, e = a.options,
                      f = a.selectedIndex,
                      g = "select-one" === a.type,
                      h = g ? null : [],
                      i = g ? f + 1 : e.length;
                  for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                      if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                          if (b = r(c).val(), g) return b;
                          h.push(b)
                      }
                  return h
              },
              set: function(a, b) {
                  var c, d, e = a.options,
                      f = r.makeArray(b),
                      g = e.length;
                  while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                  return c || (a.selectedIndex = -1), f
              }
          }
      }
  }), r.each(["radio", "checkbox"], function() {
      r.valHooks[this] = {
          set: function(a, b) {
              if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
          }
      }, o.checkOn || (r.valHooks[this].get = function(a) {
          return null === a.getAttribute("value") ? "on" : a.value
      })
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
      trigger: function(b, c, e, f) {
          var g, h, i, j, k, m, n, o = [e || d],
              p = l.call(b, "type") ? b.type : b,
              q = l.call(b, "namespace") ? b.namespace.split(".") : [];
          if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
              if (!f && !n.noBubble && !r.isWindow(e)) {
                  for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                  i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
              }
              g = 0;
              while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
              return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
          }
      },
      simulate: function(a, b, c) {
          var d = r.extend(new r.Event, c, {
              type: a,
              isSimulated: !0
          });
          r.event.trigger(d, null, b)
      }
  }), r.fn.extend({
      trigger: function(a, b) {
          return this.each(function() {
              r.event.trigger(a, b, this)
          })
      },
      triggerHandler: function(a, b) {
          var c = this[0];
          if (c) return r.event.trigger(a, b, c, !0)
      }
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
      r.fn[b] = function(a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }
  }), r.fn.extend({
      hover: function(a, b) {
          return this.mouseenter(a).mouseleave(b || a)
      }
  }), o.focusin = "onfocusin" in a, o.focusin || r.each({
      focus: "focusin",
      blur: "focusout"
  }, function(a, b) {
      var c = function(a) {
          r.event.simulate(b, a.target, r.event.fix(a))
      };
      r.event.special[b] = {
          setup: function() {
              var d = this.ownerDocument || this,
                  e = W.access(d, b);
              e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
          },
          teardown: function() {
              var d = this.ownerDocument || this,
                  e = W.access(d, b) - 1;
              e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
          }
      }
  });
  var tb = a.location,
      ub = r.now(),
      vb = /\?/;
  r.parseXML = function(b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
          c = (new a.DOMParser).parseFromString(b, "text/xml")
      } catch (d) {
          c = void 0
      }
      return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
  };
  var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
      var e;
      if (Array.isArray(b)) r.each(b, function(b, e) {
          c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
      });
      else if (c || "object" !== r.type(b)) d(a, b);
      else
          for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
  }
  r.param = function(a, b) {
      var c, d = [],
          e = function(a, b) {
              var c = r.isFunction(b) ? b() : b;
              d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
          };
      if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
          e(this.name, this.value)
      });
      else
          for (c in a) Ab(c, a[c], b, e);
      return d.join("&")
  }, r.fn.extend({
      serialize: function() {
          return r.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var a = r.prop(this, "elements");
              return a ? r.makeArray(a) : this
          }).filter(function() {
              var a = this.type;
              return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
          }).map(function(a, b) {
              var c = r(this).val();
              return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
                  return {
                      name: b.name,
                      value: a.replace(xb, "\r\n")
                  }
              }) : {
                  name: b.name,
                  value: c.replace(xb, "\r\n")
              }
          }).get()
      }
  });
  var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");
  Lb.href = tb.href;

  function Mb(a) {
      return function(b, c) {
          "string" != typeof b && (c = b, b = "*");
          var d, e = 0,
              f = b.toLowerCase().match(L) || [];
          if (r.isFunction(c))
              while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
      }
  }

  function Nb(a, b, c, d) {
      var e = {},
          f = a === Jb;

      function g(h) {
          var i;
          return e[h] = !0, r.each(a[h] || [], function(a, h) {
              var j = h(b, c, d);
              return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
          }), i
      }
      return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Ob(a, b) {
      var c, d, e = r.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && r.extend(!0, a, d), a
  }

  function Pb(a, b, c) {
      var d, e, f, g, h = a.contents,
          i = a.dataTypes;
      while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
          for (e in h)
              if (h[e] && h[e].test(d)) {
                  i.unshift(e);
                  break
              }
      if (i[0] in c) f = i[0];
      else {
          for (e in c) {
              if (!i[0] || a.converters[e + " " + i[0]]) {
                  f = e;
                  break
              }
              g || (g = e)
          }
          f = f || g
      }
      if (f) return f !== i[0] && i.unshift(f), c[f]
  }

  function Qb(a, b, c, d) {
      var e, f, g, h, i, j = {},
          k = a.dataTypes.slice();
      if (k[1])
          for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      f = k.shift();
      while (f)
          if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
              if ("*" === f) f = i;
              else if ("*" !== i && i !== f) {
          if (g = j[i + " " + f] || j["* " + f], !g)
              for (e in j)
                  if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                      g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                      break
                  }
          if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else try {
                  b = g(b)
              } catch (l) {
                  return {
                      state: "parsererror",
                      error: g ? l : "No conversion from " + i + " to " + f
                  }
              }
      }
      return {
          state: "success",
          data: b
      }
  }
  r.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: tb.href,
          type: "GET",
          isLocal: Fb.test(tb.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Kb,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": r.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(a, b) {
          return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
      },
      ajaxPrefilter: Mb(Ib),
      ajaxTransport: Mb(Jb),
      ajax: function(b, c) {
          "object" == typeof b && (c = b, b = void 0), c = c || {};
          var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
              p = o.context || o,
              q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
              s = r.Deferred(),
              t = r.Callbacks("once memory"),
              u = o.statusCode || {},
              v = {},
              w = {},
              x = "canceled",
              y = {
                  readyState: 0,
                  getResponseHeader: function(a) {
                      var b;
                      if (k) {
                          if (!h) {
                              h = {};
                              while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
                          }
                          b = h[a.toLowerCase()]
                      }
                      return null == b ? null : b
                  },
                  getAllResponseHeaders: function() {
                      return k ? g : null
                  },
                  setRequestHeader: function(a, b) {
                      return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                  },
                  overrideMimeType: function(a) {
                      return null == k && (o.mimeType = a), this
                  },
                  statusCode: function(a) {
                      var b;
                      if (a)
                          if (k) y.always(a[y.status]);
                          else
                              for (b in a) u[b] = [u[b], a[b]];
                      return this
                  },
                  abort: function(a) {
                      var b = a || x;
                      return e && e.abort(b), A(0, b), this
                  }
              };
          if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
              j = d.createElement("a");
              try {
                  j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
              } catch (z) {
                  o.crossDomain = !0
              }
          }
          if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
          l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
          for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
          if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
          if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
              if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
              o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                  y.abort("timeout")
              }, o.timeout));
              try {
                  k = !1, e.send(v, A)
              } catch (z) {
                  if (k) throw z;
                  A(-1, z)
              }
          } else A(-1, "No Transport");

          function A(b, c, d, h) {
              var j, m, n, v, w, x = c;
              k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
          }
          return y
      },
      getJSON: function(a, b, c) {
          return r.get(a, b, c, "json")
      },
      getScript: function(a, b) {
          return r.get(a, void 0, b, "script")
      }
  }), r.each(["get", "post"], function(a, b) {
      r[b] = function(a, c, d, e) {
          return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
              url: a,
              type: b,
              dataType: e,
              data: c,
              success: d
          }, r.isPlainObject(a) && a))
      }
  }), r._evalUrl = function(a) {
      return r.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          "throws": !0
      })
  }, r.fn.extend({
      wrapAll: function(a) {
          var b;
          return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
              var a = this;
              while (a.firstElementChild) a = a.firstElementChild;
              return a
          }).append(this)), this
      },
      wrapInner: function(a) {
          return r.isFunction(a) ? this.each(function(b) {
              r(this).wrapInner(a.call(this, b))
          }) : this.each(function() {
              var b = r(this),
                  c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a)
          })
      },
      wrap: function(a) {
          var b = r.isFunction(a);
          return this.each(function(c) {
              r(this).wrapAll(b ? a.call(this, c) : a)
          })
      },
      unwrap: function(a) {
          return this.parent(a).not("body").each(function() {
              r(this).replaceWith(this.childNodes)
          }), this
      }
  }), r.expr.pseudos.hidden = function(a) {
      return !r.expr.pseudos.visible(a)
  }, r.expr.pseudos.visible = function(a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
  }, r.ajaxSettings.xhr = function() {
      try {
          return new a.XMLHttpRequest
      } catch (b) {}
  };
  var Rb = {
          0: 200,
          1223: 204
      },
      Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
      var c, d;
      if (o.cors || Sb && !b.crossDomain) return {
          send: function(e, f) {
              var g, h = b.xhr();
              if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                  for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
              for (g in e) h.setRequestHeader(g, e[g]);
              c = function(a) {
                  return function() {
                      c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                          binary: h.response
                      } : {
                          text: h.responseText
                      }, h.getAllResponseHeaders()))
                  }
              }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                  4 === h.readyState && a.setTimeout(function() {
                      c && d()
                  })
              }, c = c("abort");
              try {
                  h.send(b.hasContent && b.data || null)
              } catch (i) {
                  if (c) throw i
              }
          },
          abort: function() {
              c && c()
          }
      }
  }), r.ajaxPrefilter(function(a) {
      a.crossDomain && (a.contents.script = !1)
  }), r.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(a) {
              return r.globalEval(a), a
          }
      }
  }), r.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), r.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
          var b, c;
          return {
              send: function(e, f) {
                  b = r("<script>").prop({
                      charset: a.scriptCharset,
                      src: a.url
                  }).on("load error", c = function(a) {
                      b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                  }), d.head.appendChild(b[0])
              },
              abort: function() {
                  c && c()
              }
          }
      }
  });
  var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var a = Tb.pop() || r.expando + "_" + ub++;
          return this[a] = !0, a
      }
  }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
      if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
          return g || r.error(e + " was not called"), g[0]
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
          g = arguments
      }, d.always(function() {
          void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
      }), "script"
  }), o.createHTMLDocument = function() {
      var a = d.implementation.createHTMLDocument("").body;
      return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), r.parseHTML = function(a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && (c = b, b = !1);
      var e, f, g;
      return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
  }, r.fn.load = function(a, b, c) {
      var d, e, f, g = this,
          h = a.indexOf(" ");
      return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
          url: a,
          type: e || "GET",
          dataType: "html",
          data: b
      }).done(function(a) {
          f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
      }).always(c && function(a, b) {
          g.each(function() {
              c.apply(this, f || [a.responseText, b, a])
          })
      }), this
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      r.fn[b] = function(a) {
          return this.on(b, a)
      }
  }), r.expr.pseudos.animated = function(a) {
      return r.grep(r.timers, function(b) {
          return a === b.elem
      }).length
  }, r.offset = {
      setOffset: function(a, b, c) {
          var d, e, f, g, h, i, j, k = r.css(a, "position"),
              l = r(a),
              m = {};
          "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
      }
  }, r.fn.extend({
      offset: function(a) {
          if (arguments.length) return void 0 === a ? this : this.each(function(b) {
              r.offset.setOffset(this, a, b)
          });
          var b, c, d, e, f = this[0];
          if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
              top: d.top + e.pageYOffset - c.clientTop,
              left: d.left + e.pageXOffset - c.clientLeft
          }) : {
              top: 0,
              left: 0
          }
      },
      position: function() {
          if (this[0]) {
              var a, b, c = this[0],
                  d = {
                      top: 0,
                      left: 0
                  };
              return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0)
              }), {
                  top: b.top - d.top - r.css(c, "marginTop", !0),
                  left: b.left - d.left - r.css(c, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              var a = this.offsetParent;
              while (a && "static" === r.css(a, "position")) a = a.offsetParent;
              return a || ra
          })
      }
  }), r.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(a, b) {
      var c = "pageYOffset" === b;
      r.fn[a] = function(d) {
          return T(this, function(a, d, e) {
              var f;
              return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
          }, a, d, arguments.length)
      }
  }), r.each(["top", "left"], function(a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
          if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
      })
  }), r.each({
      Height: "height",
      Width: "width"
  }, function(a, b) {
      r.each({
          padding: "inner" + a,
          content: b,
          "": "outer" + a
      }, function(c, d) {
          r.fn[d] = function(e, f) {
              var g = arguments.length && (c || "boolean" != typeof e),
                  h = c || (e === !0 || f === !0 ? "margin" : "border");
              return T(this, function(b, c, e) {
                  var f;
                  return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
              }, b, g ? e : void 0, g)
          }
      })
  }), r.fn.extend({
      bind: function(a, b, c) {
          return this.on(a, null, b, c)
      },
      unbind: function(a, b) {
          return this.off(a, null, b)
      },
      delegate: function(a, b, c, d) {
          return this.on(b, a, c, d)
      },
      undelegate: function(a, b, c) {
          return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
      }
  }), r.holdReady = function(a) {
      a ? r.readyWait++ : r.ready(!0)
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
      return r
  });
  var Vb = a.jQuery,
      Wb = a.$;
  return r.noConflict = function(b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
  }, b || (a.jQuery = a.$ = r), r
});

/*
Copyright (C) Federico Zivolo 2017
Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
*/
(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
  'use strict';

  function e(e) {
      return e && '[object Function]' === {}.toString.call(e)
  }

  function t(e, t) {
      if (1 !== e.nodeType) return [];
      var o = window.getComputedStyle(e, null);
      return t ? o[t] : o
  }

  function o(e) {
      return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }

  function n(e) {
      if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
      var i = t(e),
          r = i.overflow,
          p = i.overflowX,
          s = i.overflowY;
      return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
  }

  function r(e) {
      var o = e && e.offsetParent,
          i = o && o.nodeName;
      return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
  }

  function p(e) {
      var t = e.nodeName;
      return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
  }

  function s(e) {
      return null === e.parentNode ? e : s(e.parentNode)
  }

  function d(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
      var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = o ? e : t,
          n = o ? t : e,
          a = document.createRange();
      a.setStart(i, 0), a.setEnd(n, 0);
      var f = a.commonAncestorContainer;
      if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
      var l = s(e);
      return l.host ? d(l.host, t) : d(e, s(t).host)
  }

  function a(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
          o = 'top' === t ? 'scrollTop' : 'scrollLeft',
          i = e.nodeName;
      if ('BODY' === i || 'HTML' === i) {
          var n = window.document.documentElement,
              r = window.document.scrollingElement || n;
          return r[o]
      }
      return e[o]
  }

  function f(e, t) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = a(t, 'top'),
          n = a(t, 'left'),
          r = o ? -1 : 1;
      return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
  }

  function l(e, t) {
      var o = 'x' === t ? 'Left' : 'Top',
          i = 'Left' == o ? 'Right' : 'Bottom';
      return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
  }

  function m(e, t, o, i) {
      return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
  }

  function h() {
      var e = window.document.body,
          t = window.document.documentElement,
          o = ie() && window.getComputedStyle(t);
      return {
          height: m('Height', e, t, o),
          width: m('Width', e, t, o)
      }
  }

  function c(e) {
      return se({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height
      })
  }

  function g(e) {
      var o = {};
      if (ie()) try {
          o = e.getBoundingClientRect();
          var i = a(e, 'top'),
              n = a(e, 'left');
          o.top += i, o.left += n, o.bottom += i, o.right += n
      } catch (e) {} else o = e.getBoundingClientRect();
      var r = {
              left: o.left,
              top: o.top,
              width: o.right - o.left,
              height: o.bottom - o.top
          },
          p = 'HTML' === e.nodeName ? h() : {},
          s = p.width || e.clientWidth || r.right - r.left,
          d = p.height || e.clientHeight || r.bottom - r.top,
          f = e.offsetWidth - s,
          m = e.offsetHeight - d;
      if (f || m) {
          var g = t(e);
          f -= l(g, 'x'), m -= l(g, 'y'), r.width -= f, r.height -= m
      }
      return c(r)
  }

  function u(e, o) {
      var i = ie(),
          r = 'HTML' === o.nodeName,
          p = g(e),
          s = g(o),
          d = n(e),
          a = t(o),
          l = +a.borderTopWidth.split('px')[0],
          m = +a.borderLeftWidth.split('px')[0],
          h = c({
              top: p.top - s.top - l,
              left: p.left - s.left - m,
              width: p.width,
              height: p.height
          });
      if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
          var u = +a.marginTop.split('px')[0],
              b = +a.marginLeft.split('px')[0];
          h.top -= l - u, h.bottom -= l - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
      }
      return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)), h
  }

  function b(e) {
      var t = window.document.documentElement,
          o = u(e, t),
          i = _(t.clientWidth, window.innerWidth || 0),
          n = _(t.clientHeight, window.innerHeight || 0),
          r = a(t),
          p = a(t, 'left'),
          s = {
              top: r - o.top + o.marginTop,
              left: p - o.left + o.marginLeft,
              width: i,
              height: n
          };
      return c(s)
  }

  function y(e) {
      var i = e.nodeName;
      return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
  }

  function w(e, t, i, r) {
      var p = {
              top: 0,
              left: 0
          },
          s = d(e, t);
      if ('viewport' === r) p = b(s);
      else {
          var a;
          'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
          var f = u(a, s);
          if ('HTML' === a.nodeName && !y(s)) {
              var l = h(),
                  m = l.height,
                  c = l.width;
              p.top += f.top - f.marginTop, p.bottom = m + f.top, p.left += f.left - f.marginLeft, p.right = c + f.left
          } else p = f
      }
      return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
  }

  function v(e) {
      var t = e.width,
          o = e.height;
      return t * o
  }

  function E(e, t, o, i, n) {
      var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf('auto')) return e;
      var p = w(o, i, r, n),
          s = {
              top: {
                  width: p.width,
                  height: t.top - p.top
              },
              right: {
                  width: p.right - t.right,
                  height: p.height
              },
              bottom: {
                  width: p.width,
                  height: p.bottom - t.bottom
              },
              left: {
                  width: t.left - p.left,
                  height: p.height
              }
          },
          d = Object.keys(s).map(function(e) {
              return se({
                  key: e
              }, s[e], {
                  area: v(s[e])
              })
          }).sort(function(e, t) {
              return t.area - e.area
          }),
          a = d.filter(function(e) {
              var t = e.width,
                  i = e.height;
              return t >= o.clientWidth && i >= o.clientHeight
          }),
          f = 0 < a.length ? a[0].key : d[0].key,
          l = e.split('-')[1];
      return f + (l ? '-' + l : '')
  }

  function x(e, t, o) {
      var i = d(t, o);
      return u(o, i)
  }

  function O(e) {
      var t = window.getComputedStyle(e),
          o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
          i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
          n = {
              width: e.offsetWidth + i,
              height: e.offsetHeight + o
          };
      return n
  }

  function L(e) {
      var t = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
      };
      return e.replace(/left|right|bottom|top/g, function(e) {
          return t[e]
      })
  }

  function S(e, t, o) {
      o = o.split('-')[0];
      var i = O(e),
          n = {
              width: i.width,
              height: i.height
          },
          r = -1 !== ['right', 'left'].indexOf(o),
          p = r ? 'top' : 'left',
          s = r ? 'left' : 'top',
          d = r ? 'height' : 'width',
          a = r ? 'width' : 'height';
      return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
  }

  function T(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function C(e, t, o) {
      if (Array.prototype.findIndex) return e.findIndex(function(e) {
          return e[t] === o
      });
      var i = T(e, function(e) {
          return e[t] === o
      });
      return e.indexOf(i)
  }

  function N(t, o, i) {
      var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
      return n.forEach(function(t) {
          t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          var i = t.function || t.fn;
          t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
      }), o
  }

  function k() {
      if (!this.state.isDestroyed) {
          var e = {
              instance: this,
              styles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
          };
          e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
      }
  }

  function W(e, t) {
      return e.some(function(e) {
          var o = e.name,
              i = e.enabled;
          return i && o === t
      })
  }

  function B(e) {
      for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
          var i = t[n],
              r = i ? '' + i + o : e;
          if ('undefined' != typeof window.document.body.style[r]) return r
      }
      return null
  }

  function D() {
      return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function H(e, t, o, i) {
      var r = 'BODY' === e.nodeName,
          p = r ? window : e;
      p.addEventListener(t, o, {
          passive: !0
      }), r || H(n(p.parentNode), t, o, i), i.push(p)
  }

  function P(e, t, o, i) {
      o.updateBound = i, window.addEventListener('resize', o.updateBound, {
          passive: !0
      });
      var r = n(e);
      return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
  }

  function A() {
      this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function M(e, t) {
      return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
          e.removeEventListener('scroll', t.updateBound)
      }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function I() {
      this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
  }

  function R(e) {
      return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function U(e, t) {
      Object.keys(t).forEach(function(o) {
          var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i
      })
  }

  function Y(e, t) {
      Object.keys(t).forEach(function(o) {
          var i = t[o];
          !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
      })
  }

  function F(e, t, o) {
      var i = T(e, function(e) {
              var o = e.name;
              return o === t
          }),
          n = !!i && e.some(function(e) {
              return e.name === o && e.enabled && e.order < i.order
          });
      if (!n) {
          var r = '`' + t + '`';
          console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
      }
      return n
  }

  function j(e) {
      return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }

  function K(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          o = ae.indexOf(e),
          i = ae.slice(o + 1).concat(ae.slice(0, o));
      return t ? i.reverse() : i
  }

  function q(e, t, o, i) {
      var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
          r = +n[1],
          p = n[2];
      if (!r) return e;
      if (0 === p.indexOf('%')) {
          var s;
          switch (p) {
              case '%p':
                  s = o;
                  break;
              case '%':
              case '%r':
              default:
                  s = i;
          }
          var d = c(s);
          return d[t] / 100 * r
      }
      if ('vh' === p || 'vw' === p) {
          var a;
          return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
      }
      return r
  }

  function G(e, t, o, i) {
      var n = [0, 0],
          r = -1 !== ['right', 'left'].indexOf(i),
          p = e.split(/(\+|\-)/).map(function(e) {
              return e.trim()
          }),
          s = p.indexOf(T(p, function(e) {
              return -1 !== e.search(/,|\s/)
          }));
      p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
      var d = /\s*,\s*|\s+/,
          a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
      return a = a.map(function(e, i) {
          var n = (1 === i ? !r : r) ? 'height' : 'width',
              p = !1;
          return e.reduce(function(e, t) {
              return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
          }, []).map(function(e) {
              return q(e, n, t, o)
          })
      }), a.forEach(function(e, t) {
          e.forEach(function(o, i) {
              R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
          })
      }), n
  }
  for (var z = Math.min, V = Math.floor, _ = Math.max, X = ['native code', '[object MutationObserverConstructor]'], Q = function(e) {
          return X.some(function(t) {
              return -1 < (e || '').toString().indexOf(t)
          })
      }, J = 'undefined' != typeof window, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
      if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
          $ = 1;
          break
      }
  var i, te = J && Q(window.MutationObserver),
      oe = te ? function(e) {
          var t = !1,
              o = 0,
              i = document.createElement('span'),
              n = new MutationObserver(function() {
                  e(), t = !1
              });
          return n.observe(i, {
                  attributes: !0
              }),
              function() {
                  t || (t = !0, i.setAttribute('x-index', o), ++o)
              }
      } : function(e) {
          var t = !1;
          return function() {
              t || (t = !0, setTimeout(function() {
                  t = !1, e()
              }, $))
          }
      },
      ie = function() {
          return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
      },
      ne = function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      },
      re = function() {
          function e(e, t) {
              for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
          return function(t, o, i) {
              return o && e(t.prototype, o), i && e(t, i), t
          }
      }(),
      pe = function(e, t, o) {
          return t in e ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = o, e
      },
      se = Object.assign || function(e) {
          for (var t, o = 1; o < arguments.length; o++)
              for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
      },
      de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ae = de.slice(3),
      fe = {
          FLIP: 'flip',
          CLOCKWISE: 'clockwise',
          COUNTERCLOCKWISE: 'counterclockwise'
      },
      le = function() {
          function t(o, i) {
              var n = this,
                  r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
              ne(this, t), this.scheduleUpdate = function() {
                  return requestAnimationFrame(n.update)
              }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: []
              }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                  n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
              }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                  return se({
                      name: e
                  }, n.options.modifiers[e])
              }).sort(function(e, t) {
                  return e.order - t.order
              }), this.modifiers.forEach(function(t) {
                  t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
              }), this.update();
              var p = this.options.eventsEnabled;
              p && this.enableEventListeners(), this.state.eventsEnabled = p
          }
          return re(t, [{
              key: 'update',
              value: function() {
                  return k.call(this)
              }
          }, {
              key: 'destroy',
              value: function() {
                  return D.call(this)
              }
          }, {
              key: 'enableEventListeners',
              value: function() {
                  return A.call(this)
              }
          }, {
              key: 'disableEventListeners',
              value: function() {
                  return I.call(this)
              }
          }]), t
      }();
  return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils, le.placements = de, le.Defaults = {
      placement: 'bottom',
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
          shift: {
              order: 100,
              enabled: !0,
              fn: function(e) {
                  var t = e.placement,
                      o = t.split('-')[0],
                      i = t.split('-')[1];
                  if (i) {
                      var n = e.offsets,
                          r = n.reference,
                          p = n.popper,
                          s = -1 !== ['bottom', 'top'].indexOf(o),
                          d = s ? 'left' : 'top',
                          a = s ? 'width' : 'height',
                          f = {
                              start: pe({}, d, r[d]),
                              end: pe({}, d, r[d] + r[a] - p[a])
                          };
                      e.offsets.popper = se({}, p, f[i])
                  }
                  return e
              }
          },
          offset: {
              order: 200,
              enabled: !0,
              fn: function(e, t) {
                  var o, i = t.offset,
                      n = e.placement,
                      r = e.offsets,
                      p = r.popper,
                      s = r.reference,
                      d = n.split('-')[0];
                  return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
              },
              offset: 0
          },
          preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function(e, t) {
                  var o = t.boundariesElement || r(e.instance.popper);
                  e.instance.reference === o && (o = r(o));
                  var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                  t.boundaries = i;
                  var n = t.priority,
                      p = e.offsets.popper,
                      s = {
                          primary: function(e) {
                              var o = p[e];
                              return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])), pe({}, e, o)
                          },
                          secondary: function(e) {
                              var o = 'right' === e ? 'left' : 'top',
                                  n = p[o];
                              return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
                          }
                      };
                  return n.forEach(function(e) {
                      var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                      p = se({}, p, s[t](e))
                  }), e.offsets.popper = p, e
              },
              priority: ['left', 'right', 'top', 'bottom'],
              padding: 5,
              boundariesElement: 'scrollParent'
          },
          keepTogether: {
              order: 400,
              enabled: !0,
              fn: function(e) {
                  var t = e.offsets,
                      o = t.popper,
                      i = t.reference,
                      n = e.placement.split('-')[0],
                      r = V,
                      p = -1 !== ['top', 'bottom'].indexOf(n),
                      s = p ? 'right' : 'bottom',
                      d = p ? 'left' : 'top',
                      a = p ? 'width' : 'height';
                  return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
              }
          },
          arrow: {
              order: 500,
              enabled: !0,
              fn: function(e, t) {
                  if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                  var o = t.element;
                  if ('string' == typeof o) {
                      if (o = e.instance.popper.querySelector(o), !o) return e;
                  } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                  var i = e.placement.split('-')[0],
                      n = e.offsets,
                      r = n.popper,
                      p = n.reference,
                      s = -1 !== ['left', 'right'].indexOf(i),
                      d = s ? 'height' : 'width',
                      a = s ? 'top' : 'left',
                      f = s ? 'left' : 'top',
                      l = s ? 'bottom' : 'right',
                      m = O(o)[d];
                  p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)), p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
                  var h = p[a] + p[d] / 2 - m / 2,
                      g = h - c(e.offsets.popper)[a];
                  return g = _(z(r[d] - m, g), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(g), e.offsets.arrow[f] = '', e
              },
              element: '[x-arrow]'
          },
          flip: {
              order: 600,
              enabled: !0,
              fn: function(e, t) {
                  if (W(e.instance.modifiers, 'inner')) return e;
                  if (e.flipped && e.placement === e.originalPlacement) return e;
                  var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                      i = e.placement.split('-')[0],
                      n = L(i),
                      r = e.placement.split('-')[1] || '',
                      p = [];
                  switch (t.behavior) {
                      case fe.FLIP:
                          p = [i, n];
                          break;
                      case fe.CLOCKWISE:
                          p = K(i);
                          break;
                      case fe.COUNTERCLOCKWISE:
                          p = K(i, !0);
                          break;
                      default:
                          p = t.behavior;
                  }
                  return p.forEach(function(s, d) {
                      if (i !== s || p.length === d + 1) return e;
                      i = e.placement.split('-')[0], n = L(i);
                      var a = e.offsets.popper,
                          f = e.offsets.reference,
                          l = V,
                          m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
                          h = l(a.left) < l(o.left),
                          c = l(a.right) > l(o.right),
                          g = l(a.top) < l(o.top),
                          u = l(a.bottom) > l(o.bottom),
                          b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                          y = -1 !== ['top', 'bottom'].indexOf(i),
                          w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                      (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
                  }), e
              },
              behavior: 'flip',
              padding: 5,
              boundariesElement: 'viewport'
          },
          inner: {
              order: 700,
              enabled: !1,
              fn: function(e) {
                  var t = e.placement,
                      o = t.split('-')[0],
                      i = e.offsets,
                      n = i.popper,
                      r = i.reference,
                      p = -1 !== ['left', 'right'].indexOf(o),
                      s = -1 === ['top', 'left'].indexOf(o);
                  return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = c(n), e
              }
          },
          hide: {
              order: 800,
              enabled: !0,
              fn: function(e) {
                  if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                  var t = e.offsets.reference,
                      o = T(e.instance.modifiers, function(e) {
                          return 'preventOverflow' === e.name
                      }).boundaries;
                  if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                      if (!0 === e.hide) return e;
                      e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                  } else {
                      if (!1 === e.hide) return e;
                      e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                  }
                  return e
              }
          },
          computeStyle: {
              order: 850,
              enabled: !0,
              fn: function(e, t) {
                  var o = t.x,
                      i = t.y,
                      n = e.offsets.popper,
                      p = T(e.instance.modifiers, function(e) {
                          return 'applyStyle' === e.name
                      }).gpuAcceleration;
                  void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                  var s, d, a = void 0 === p ? t.gpuAcceleration : p,
                      f = r(e.instance.popper),
                      l = g(f),
                      m = {
                          position: n.position
                      },
                      h = {
                          left: V(n.left),
                          top: V(n.top),
                          bottom: V(n.bottom),
                          right: V(n.right)
                      },
                      c = 'bottom' === o ? 'top' : 'bottom',
                      u = 'right' === i ? 'left' : 'right',
                      b = B('transform');
                  if (d = 'bottom' == c ? -l.height + h.bottom : h.top, s = 'right' == u ? -l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
                  else {
                      var y = 'bottom' == c ? -1 : 1,
                          w = 'right' == u ? -1 : 1;
                      m[c] = d * y, m[u] = s * w, m.willChange = c + ', ' + u
                  }
                  var v = {
                      "x-placement": e.placement
                  };
                  return e.attributes = se({}, v, e.attributes), e.styles = se({}, m, e.styles), e
              },
              gpuAcceleration: !0,
              x: 'bottom',
              y: 'right'
          },
          applyStyle: {
              order: 900,
              enabled: !0,
              fn: function(e) {
                  return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.offsets.arrow && U(e.arrowElement, e.offsets.arrow), e
              },
              onLoad: function(e, t, o, i, n) {
                  var r = x(n, t, e),
                      p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                  return t.setAttribute('x-placement', p), U(t, {
                      position: 'absolute'
                  }), o
              },
              gpuAcceleration: void 0
          }
      }
  }, le
});

/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
! function(a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b()
}(this, function() {
  "use strict";
  var a = function(a, b, c, d) {
      var e = {
          features: null,
          bind: function(a, b, c, d) {
              var e = (d ? "remove" : "add") + "EventListener";
              b = b.split(" ");
              for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1)
          },
          isArray: function(a) {
              return a instanceof Array
          },
          createEl: function(a, b) {
              var c = document.createElement(b || "div");
              return a && (c.className = a), c
          },
          getScrollY: function() {
              var a = window.pageYOffset;
              return void 0 !== a ? a : document.documentElement.scrollTop
          },
          unbind: function(a, b, c) {
              e.bind(a, b, c, !0)
          },
          removeClass: function(a, b) {
              var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
              a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
          },
          addClass: function(a, b) {
              e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
          },
          hasClass: function(a, b) {
              return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
          },
          getChildByClass: function(a, b) {
              for (var c = a.firstChild; c;) {
                  if (e.hasClass(c, b)) return c;
                  c = c.nextSibling
              }
          },
          arraySearch: function(a, b, c) {
              for (var d = a.length; d--;)
                  if (a[d][c] === b) return d;
              return -1
          },
          extend: function(a, b, c) {
              for (var d in b)
                  if (b.hasOwnProperty(d)) {
                      if (c && a.hasOwnProperty(d)) continue;
                      a[d] = b[d]
                  }
          },
          easing: {
              sine: {
                  out: function(a) {
                      return Math.sin(a * (Math.PI / 2))
                  },
                  inOut: function(a) {
                      return -(Math.cos(Math.PI * a) - 1) / 2
                  }
              },
              cubic: {
                  out: function(a) {
                      return --a * a * a + 1
                  }
              }
          },
          detectFeatures: function() {
              if (e.features) return e.features;
              var a = e.createEl(),
                  b = a.style,
                  c = "",
                  d = {};
              if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
                  var f = navigator.userAgent;
                  if (/iP(hone|od)/.test(navigator.platform)) {
                      var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                      g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0))
                  }
                  var h = f.match(/Android\s([0-9\.]*)/),
                      i = h ? h[1] : 0;
                  i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
              }
              for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) {
                  c = m[n];
                  for (var o = 0; 3 > o; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                  c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
              }
              if (!d.raf) {
                  var p = 0;
                  d.raf = function(a) {
                      var b = (new Date).getTime(),
                          c = Math.max(0, 16 - (b - p)),
                          d = window.setTimeout(function() {
                              a(b + c)
                          }, c);
                      return p = b + c, d
                  }, d.caf = function(a) {
                      clearTimeout(a)
                  }
              }
              return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
          }
      };
      e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) {
          b = b.split(" ");
          for (var e, f = (d ? "detach" : "attach") + "Event", g = function() {
                  c.handleEvent.call(c)
              }, h = 0; h < b.length; h++)
              if (e = b[h])
                  if ("object" == typeof c && c.handleEvent) {
                      if (d) {
                          if (!c["oldIE" + e]) return !1
                      } else c["oldIE" + e] = g;
                      a[f]("on" + e, c["oldIE" + e])
                  } else a[f]("on" + e, c)
      });
      var f = this,
          g = 25,
          h = 3,
          i = {
              allowPanToNext: !0,
              spacing: .12,
              bgOpacity: 1,
              mouseUsed: !1,
              loop: !0,
              pinchToClose: !0,
              closeOnScroll: !0,
              closeOnVerticalDrag: !0,
              verticalDragRange: .75,
              hideAnimationDuration: 333,
              showAnimationDuration: 333,
              showHideOpacity: !1,
              focus: !0,
              escKey: !0,
              arrowKeys: !0,
              mainScrollEndFriction: .35,
              panEndFriction: .35,
              isClickableElement: function(a) {
                  return "A" === a.tagName
              },
              getDoubleTapZoom: function(a, b) {
                  return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33
              },
              maxSpreadZoom: 1.33,
              modal: !0,
              scaleMode: "fit"
          };
      e.extend(i, d);
      var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la = function() {
              return {
                  x: 0,
                  y: 0
              }
          },
          ma = la(),
          na = la(),
          oa = la(),
          pa = {},
          qa = 0,
          ra = {},
          sa = la(),
          ta = 0,
          ua = !0,
          va = [],
          wa = {},
          xa = !1,
          ya = function(a, b) {
              e.extend(f, b.publicMethods), va.push(a)
          },
          za = function(a) {
              var b = _b();
              return a > b - 1 ? a - b : 0 > a ? b + a : a
          },
          Aa = {},
          Ba = function(a, b) {
              return Aa[a] || (Aa[a] = []), Aa[a].push(b)
          },
          Ca = function(a) {
              var b = Aa[a];
              if (b) {
                  var c = Array.prototype.slice.call(arguments);
                  c.shift();
                  for (var d = 0; d < b.length; d++) b[d].apply(f, c)
              }
          },
          Da = function() {
              return (new Date).getTime()
          },
          Ea = function(a) {
              ia = a, f.bg.style.opacity = a * i.bgOpacity
          },
          Fa = function(a, b, c, d, e) {
              (!xa || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
          },
          Ga = function(a) {
              da && (a && (s > f.currItem.fitRatio ? xa || (lc(f.currItem, !1, !0), xa = !0) : xa && (lc(f.currItem), xa = !1)), Fa(da, oa.x, oa.y, s))
          },
          Ha = function(a) {
              a.container && Fa(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a)
          },
          Ia = function(a, b) {
              b[E] = u + a + "px, 0px" + v
          },
          Ja = function(a, b) {
              if (!i.loop && b) {
                  var c = m + (sa.x * qa - a) / sa.x,
                      d = Math.round(a - sb.x);
                  (0 > c && d > 0 || c >= _b() - 1 && 0 > d) && (a = sb.x + d * i.mainScrollEndFriction)
              }
              sb.x = a, Ia(a, n)
          },
          Ka = function(a, b) {
              var c = tb[a] - ra[a];
              return na[a] + ma[a] + c - c * (b / t)
          },
          La = function(a, b) {
              a.x = b.x, a.y = b.y, b.id && (a.id = b.id)
          },
          Ma = function(a) {
              a.x = Math.round(a.x), a.y = Math.round(a.y)
          },
          Na = null,
          Oa = function() {
              Na && (e.unbind(document, "mousemove", Oa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Ca("mouseUsed")), Na = setTimeout(function() {
                  Na = null
              }, 100)
          },
          Pa = function() {
              e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Oa), e.bind(window, "resize scroll", f), Ca("bindEvents")
          },
          Qa = function() {
              e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Oa), N.transform && e.unbind(f.scrollWrap, "click", f), U && e.unbind(window, p, f), Ca("unbindEvents")
          },
          Ra = function(a, b) {
              var c = hc(f.currItem, pa, a);
              return b && (ca = c), c
          },
          Sa = function(a) {
              return a || (a = f.currItem), a.initialZoomLevel
          },
          Ta = function(a) {
              return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1
          },
          Ua = function(a, b, c, d) {
              return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Ka(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] ? (c[a] = b.max[a], !0) : !1)
          },
          Va = function() {
              if (E) {
                  var b = N.perspective && !G;
                  return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")")
              }
              E = "left", e.addClass(a, "pswp--ie"), Ia = function(a, b) {
                  b.left = a + "px"
              }, Ha = function(a) {
                  var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                      c = a.container.style,
                      d = b * a.w,
                      e = b * a.h;
                  c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
              }, Ga = function() {
                  if (da) {
                      var a = da,
                          b = f.currItem,
                          c = b.fitRatio > 1 ? 1 : b.fitRatio,
                          d = c * b.w,
                          e = c * b.h;
                      a.width = d + "px", a.height = e + "px", a.left = oa.x + "px", a.top = oa.y + "px"
                  }
              }
          },
          Wa = function(a) {
              var b = "";
              i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
          },
          Xa = function(a) {
              a && (X || W || ea || S) && (a.preventDefault(), a.stopPropagation())
          },
          Ya = function() {
              f.setScrollOffset(0, e.getScrollY())
          },
          Za = {},
          $a = 0,
          _a = function(a) {
              Za[a] && (Za[a].raf && I(Za[a].raf), $a--, delete Za[a])
          },
          ab = function(a) {
              Za[a] && _a(a), Za[a] || ($a++, Za[a] = {})
          },
          bb = function() {
              for (var a in Za) Za.hasOwnProperty(a) && _a(a)
          },
          cb = function(a, b, c, d, e, f, g) {
              var h, i = Da();
              ab(a);
              var j = function() {
                  if (Za[a]) {
                      if (h = Da() - i, h >= d) return _a(a), f(c), void(g && g());
                      f((c - b) * e(h / d) + b), Za[a].raf = H(j)
                  }
              };
              j()
          },
          db = {
              shout: Ca,
              listen: Ba,
              viewportSize: pa,
              options: i,
              isMainScrollAnimating: function() {
                  return ea
              },
              getZoomLevel: function() {
                  return s
              },
              getCurrentIndex: function() {
                  return m
              },
              isDragging: function() {
                  return U
              },
              isZooming: function() {
                  return _
              },
              setScrollOffset: function(a, b) {
                  ra.x = a, M = ra.y = b, Ca("updateScrollOffset", ra)
              },
              applyZoomPan: function(a, b, c, d) {
                  oa.x = b, oa.y = c, s = a, Ga(d)
              },
              init: function() {
                  if (!j && !k) {
                      var c;
                      f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
                          el: f.container.children[0],
                          wrap: 0,
                          index: -1
                      }, {
                          el: f.container.children[1],
                          wrap: 0,
                          index: -1
                      }, {
                          el: f.container.children[2],
                          wrap: 0,
                          index: -1
                      }], y[0].el.style.display = y[2].el.style.display = "none", Va(), r = {
                          resize: f.updateSize,
                          scroll: Ya,
                          keydown: Wa,
                          click: Xa
                      };
                      var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                      for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < va.length; c++) f["init" + va[c]]();
                      if (b) {
                          var g = f.ui = new b(f, e);
                          g.init()
                      }
                      Ca("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= _b()) && (m = 0), f.currItem = $b(m), (N.isOldIOSPhone || N.isOldAndroid) && (ua = !1), a.setAttribute("aria-hidden", "false"), i.modal && (ua ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Ca("initialLayout"), M = K = e.getScrollY());
                      var l = "pswp--open ";
                      for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ta = null, c = 0; h > c; c++) Ia((c + o) * sa.x, y[c].el.style);
                      L || e.bind(f.scrollWrap, q, f), Ba("initialZoomInEnd", function() {
                          f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Pa()
                      }), f.setContent(y[1], m), f.updateCurrItem(), Ca("afterInit"), ua || (w = setInterval(function() {
                          $a || U || _ || s !== f.currItem.initialZoomLevel || f.updateSize()
                      }, 1e3)), e.addClass(a, "pswp--visible")
                  }
              },
              close: function() {
                  j && (j = !1, k = !0, Ca("close"), Qa(), bc(f.currItem, null, !0, f.destroy))
              },
              destroy: function() {
                  Ca("destroy"), Wb && clearTimeout(Wb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), yb(), bb(), Aa = null
              },
              panTo: function(a, b, c) {
                  c || (a > ca.min.x ? a = ca.min.x : a < ca.max.x && (a = ca.max.x), b > ca.min.y ? b = ca.min.y : b < ca.max.y && (b = ca.max.y)), oa.x = a, oa.y = b, Ga()
              },
              handleEvent: function(a) {
                  a = a || window.event, r[a.type] && r[a.type](a)
              },
              goTo: function(a) {
                  a = za(a);
                  var b = a - m;
                  ta = b, m = a, f.currItem = $b(m), qa -= b, Ja(sa.x * qa), bb(), ea = !1, f.updateCurrItem()
              },
              next: function() {
                  f.goTo(m + 1)
              },
              prev: function() {
                  f.goTo(m - 1)
              },
              updateCurrZoomItem: function(a) {
                  if (a && Ca("beforeChange", 0), y[1].el.children.length) {
                      var b = y[1].el.children[0];
                      da = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
                  } else da = null;
                  ca = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, oa.x = ca.center.x, oa.y = ca.center.y, a && Ca("afterChange")
              },
              invalidateCurrItems: function() {
                  x = !0;
                  for (var a = 0; h > a; a++) y[a].item && (y[a].item.needsUpdate = !0)
              },
              updateCurrItem: function(a) {
                  if (0 !== ta) {
                      var b, c = Math.abs(ta);
                      if (!(a && 2 > c)) {
                          f.currItem = $b(m), xa = !1, Ca("beforeChange", ta), c >= h && (o += ta + (ta > 0 ? -h : h), c = h);
                          for (var d = 0; c > d; d++) ta > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ia((o + 2) * sa.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ia(o * sa.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
                          if (da && 1 === Math.abs(ta)) {
                              var e = $b(z);
                              e.initialZoomLevel !== s && (hc(e, pa), lc(e), Ha(e))
                          }
                          ta = 0, f.updateCurrZoomItem(), z = m, Ca("afterChange")
                      }
                  }
              },
              updateSize: function(b) {
                  if (!ua && i.modal) {
                      var c = e.getScrollY();
                      if (M !== c && (a.style.top = c + "px", M = c), !b && wa.x === window.innerWidth && wa.y === window.innerHeight) return;
                      wa.x = window.innerWidth, wa.y = window.innerHeight, a.style.height = wa.y + "px"
                  }
                  if (pa.x = f.scrollWrap.clientWidth, pa.y = f.scrollWrap.clientHeight, Ya(), sa.x = pa.x + Math.round(pa.x * i.spacing), sa.y = pa.y, Ja(sa.x * qa), Ca("beforeResize"), void 0 !== o) {
                      for (var d, g, j, k = 0; h > k; k++) d = y[k], Ia((k + o) * sa.x, d.el.style), j = m + k - 1, i.loop && _b() > 2 && (j = za(j)), g = $b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (hc(g, pa), lc(g), Ha(g));
                      x = !1
                  }
                  t = s = f.currItem.initialZoomLevel, ca = f.currItem.bounds, ca && (oa.x = ca.center.x, oa.y = ca.center.y, Ga(!0)), Ca("resize")
              },
              zoomTo: function(a, b, c, d, f) {
                  b && (t = s, tb.x = Math.abs(b.x) - oa.x, tb.y = Math.abs(b.y) - oa.y, La(na, oa));
                  var g = Ra(a, !1),
                      h = {};
                  Ua("x", g, h, a), Ua("y", g, h, a);
                  var i = s,
                      j = {
                          x: oa.x,
                          y: oa.y
                      };
                  Ma(h);
                  var k = function(b) {
                      1 === b ? (s = a, oa.x = h.x, oa.y = h.y) : (s = (a - i) * b + i, oa.x = (h.x - j.x) * b + j.x, oa.y = (h.y - j.y) * b + j.y), f && f(b), Ga(1 === b)
                  };
                  c ? cb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
              }
          },
          eb = 30,
          fb = 10,
          gb = {},
          hb = {},
          ib = {},
          jb = {},
          kb = {},
          lb = [],
          mb = {},
          nb = [],
          ob = {},
          pb = 0,
          qb = la(),
          rb = 0,
          sb = la(),
          tb = la(),
          ub = la(),
          vb = function(a, b) {
              return a.x === b.x && a.y === b.y
          },
          wb = function(a, b) {
              return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g
          },
          xb = function(a, b) {
              return ob.x = Math.abs(a.x - b.x), ob.y = Math.abs(a.y - b.y), Math.sqrt(ob.x * ob.x + ob.y * ob.y)
          },
          yb = function() {
              Y && (I(Y), Y = null)
          },
          zb = function() {
              U && (Y = H(zb), Pb())
          },
          Ab = function() {
              return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel)
          },
          Bb = function(a, b) {
              return a && a !== document ? a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : b(a) ? a : Bb(a.parentNode, b) : !1
          },
          Cb = {},
          Db = function(a, b) {
              return Cb.prevent = !Bb(a.target, i.isClickableElement), Ca("preventDragEvent", a, b, Cb), Cb.prevent
          },
          Eb = function(a, b) {
              return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b
          },
          Fb = function(a, b, c) {
              c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y)
          },
          Gb = function(a, b, c) {
              if (a - P > 50) {
                  var d = nb.length > 2 ? nb.shift() : {};
                  d.x = b, d.y = c, nb.push(d), P = a
              }
          },
          Hb = function() {
              var a = oa.y - f.currItem.initialPosition.y;
              return 1 - Math.abs(a / (pa.y / 2))
          },
          Ib = {},
          Jb = {},
          Kb = [],
          Lb = function(a) {
              for (; Kb.length > 0;) Kb.pop();
              return F ? (ka = 0, lb.forEach(function(a) {
                  0 === ka ? Kb[0] = a : 1 === ka && (Kb[1] = a), ka++
              })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Kb[0] = Eb(a.touches[0], Ib), a.touches.length > 1 && (Kb[1] = Eb(a.touches[1], Jb))) : (Ib.x = a.pageX, Ib.y = a.pageY, Ib.id = "", Kb[0] = Ib), Kb
          },
          Mb = function(a, b) {
              var c, d, e, g, h = 0,
                  j = oa[a] + b[a],
                  k = b[a] > 0,
                  l = sb.x + b.x,
                  m = sb.x - mb.x;
              return c = j > ca.min[a] || j < ca.max[a] ? i.panEndFriction : 1, j = oa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (da ? "h" !== fa || "x" !== a || W || (k ? (j > ca.min[a] && (c = i.panEndFriction, h = ca.min[a] - j, d = ca.min[a] - na[a]), (0 >= d || 0 > m) && _b() > 1 ? (g = l, 0 > m && l > mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j)) : (j < ca.max[a] && (c = i.panEndFriction, h = j - ca.max[a], d = na[a] - ca.max[a]), (0 >= d || m > 0) && _b() > 1 ? (g = l, m > 0 && l < mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j))) : g = l, "x" !== a) ? void(ea || Z || s > f.currItem.fitRatio && (oa[a] += b[a] * c)) : (void 0 !== g && (Ja(g, !0), Z = g === mb.x ? !1 : !0), ca.min.x !== ca.max.x && (void 0 !== e ? oa.x = e : Z || (oa.x += b.x * c)), void 0 !== g)
          },
          Nb = function(a) {
              if (!("mousedown" === a.type && a.button > 0)) {
                  if (Zb) return void a.preventDefault();
                  if (!T || "mousedown" !== a.type) {
                      if (Db(a, !0) && a.preventDefault(), Ca("pointerDown"), F) {
                          var b = e.arraySearch(lb, a.pointerId, "id");
                          0 > b && (b = lb.length), lb[b] = {
                              x: a.pageX,
                              y: a.pageY,
                              id: a.pointerId
                          }
                      }
                      var c = Lb(a),
                          d = c.length;
                      $ = null, bb(), U && 1 !== d || (U = ga = !0, e.bind(window, p, f), R = ja = ha = S = Z = X = V = W = !1, fa = null, Ca("firstTouchStart", c), La(na, oa), ma.x = ma.y = 0, La(jb, c[0]), La(kb, jb), mb.x = sa.x * qa, nb = [{
                          x: jb.x,
                          y: jb.y
                      }], P = O = Da(), Ra(s, !0), yb(), zb()), !_ && d > 1 && !ea && !Z && (t = s, W = !1, _ = V = !0, ma.y = ma.x = 0, La(na, oa), La(gb, c[0]), La(hb, c[1]), Fb(gb, hb, ub), tb.x = Math.abs(ub.x) - oa.x, tb.y = Math.abs(ub.y) - oa.y, aa = ba = xb(gb, hb))
                  }
              }
          },
          Ob = function(a) {
              if (a.preventDefault(), F) {
                  var b = e.arraySearch(lb, a.pointerId, "id");
                  if (b > -1) {
                      var c = lb[b];
                      c.x = a.pageX, c.y = a.pageY
                  }
              }
              if (U) {
                  var d = Lb(a);
                  if (fa || X || _) $ = d;
                  else if (sb.x !== sa.x * qa) fa = "h";
                  else {
                      var f = Math.abs(d[0].x - jb.x) - Math.abs(d[0].y - jb.y);
                      Math.abs(f) >= fb && (fa = f > 0 ? "h" : "v", $ = d)
                  }
              }
          },
          Pb = function() {
              if ($) {
                  var a = $.length;
                  if (0 !== a)
                      if (La(gb, $[0]), ib.x = gb.x - jb.x, ib.y = gb.y - jb.y, _ && a > 1) {
                          if (jb.x = gb.x, jb.y = gb.y, !ib.x && !ib.y && vb($[1], hb)) return;
                          La(hb, $[1]), W || (W = !0, Ca("zoomGestureStarted"));
                          var b = xb(gb, hb),
                              c = Ub(b);
                          c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ja = !0);
                          var d = 1,
                              e = Sa(),
                              g = Ta();
                          if (e > c)
                              if (i.pinchToClose && !ja && t <= f.currItem.initialZoomLevel) {
                                  var h = e - c,
                                      j = 1 - h / (e / 1.2);
                                  Ea(j), Ca("onPinchClose", j), ha = !0
                              } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
                          else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                          0 > d && (d = 0), aa = b, Fb(gb, hb, qb), ma.x += qb.x - ub.x, ma.y += qb.y - ub.y, La(ub, qb), oa.x = Ka("x", c), oa.y = Ka("y", c), R = c > s, s = c, Ga()
                      } else {
                          if (!fa) return;
                          if (ga && (ga = !1, Math.abs(ib.x) >= fb && (ib.x -= $[0].x - kb.x), Math.abs(ib.y) >= fb && (ib.y -= $[0].y - kb.y)), jb.x = gb.x, jb.y = gb.y, 0 === ib.x && 0 === ib.y) return;
                          if ("v" === fa && i.closeOnVerticalDrag && !Ab()) {
                              ma.y += ib.y, oa.y += ib.y;
                              var k = Hb();
                              return S = !0, Ca("onVerticalDrag", k), Ea(k), void Ga()
                          }
                          Gb(Da(), gb.x, gb.y), X = !0, ca = f.currItem.bounds;
                          var l = Mb("x", ib);
                          l || (Mb("y", ib), Ma(oa), Ga())
                      }
              }
          },
          Qb = function(a) {
              if (N.isOldAndroid) {
                  if (T && "mouseup" === a.type) return;
                  a.type.indexOf("touch") > -1 && (clearTimeout(T), T = setTimeout(function() {
                      T = 0
                  }, 600))
              }
              Ca("pointerUp"), Db(a, !1) && a.preventDefault();
              var b;
              if (F) {
                  var c = e.arraySearch(lb, a.pointerId, "id");
                  if (c > -1)
                      if (b = lb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";
                      else {
                          var d = {
                              4: "mouse",
                              2: "touch",
                              3: "pen"
                          };
                          b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
                      }
              }
              var g, h = Lb(a),
                  j = h.length;
              if ("mouseup" === a.type && (j = 0), 2 === j) return $ = null, !0;
              1 === j && La(kb, h[0]), 0 !== j || fa || ea || (b || ("mouseup" === a.type ? b = {
                  x: a.pageX,
                  y: a.pageY,
                  type: "mouse"
              } : a.changedTouches && a.changedTouches[0] && (b = {
                  x: a.changedTouches[0].pageX,
                  y: a.changedTouches[0].pageY,
                  type: "touch"
              })), Ca("touchRelease", a, b));
              var k = -1;
              if (0 === j && (U = !1, e.unbind(window, p, f), yb(), _ ? k = 0 : -1 !== rb && (k = Da() - rb)), rb = 1 === j ? Da() : -1, g = -1 !== k && 150 > k ? "zoom" : "swipe", _ && 2 > j && (_ = !1, 1 === j && (g = "zoomPointerUp"), Ca("zoomGestureEnded")), $ = null, X || W || ea || S)
                  if (bb(), Q || (Q = Rb()), Q.calculateSwipeSpeed("x"), S) {
                      var l = Hb();
                      if (l < i.verticalDragRange) f.close();
                      else {
                          var m = oa.y,
                              n = ia;
                          cb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function(a) {
                              oa.y = (f.currItem.initialPosition.y - m) * a + m, Ea((1 - n) * a + n), Ga()
                          }), Ca("onVerticalDrag", 1)
                      }
                  } else {
                      if ((Z || ea) && 0 === j) {
                          var o = Tb(g, Q);
                          if (o) return;
                          g = "zoomPointerUp"
                      }
                      if (!ea) return "swipe" !== g ? void Vb() : void(!Z && s > f.currItem.fitRatio && Sb(Q))
                  }
          },
          Rb = function() {
              var a, b, c = {
                  lastFlickOffset: {},
                  lastFlickDist: {},
                  lastFlickSpeed: {},
                  slowDownRatio: {},
                  slowDownRatioReverse: {},
                  speedDecelerationRatio: {},
                  speedDecelerationRatioAbs: {},
                  distanceOffset: {},
                  backAnimDestination: {},
                  backAnimStarted: {},
                  calculateSwipeSpeed: function(d) {
                      nb.length > 1 ? (a = Da() - P + 50, b = nb[nb.length - 2][d]) : (a = Da() - O, b = kb[d]), c.lastFlickOffset[d] = jb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1
                  },
                  calculateOverBoundsAnimOffset: function(a, b) {
                      c.backAnimStarted[a] || (oa[a] > ca.min[a] ? c.backAnimDestination[a] = ca.min[a] : oa[a] < ca.max[a] && (c.backAnimDestination[a] = ca.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, cb("bounceZoomPan" + a, oa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function(b) {
                          oa[a] = b, Ga()
                      }))))
                  },
                  calculateAnimOffset: function(a) {
                      c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, oa[a] += c.distanceOffset[a])
                  },
                  panAnimLoop: function() {
                      return Za.zoomPan && (Za.zoomPan.raf = H(c.panAnimLoop), c.now = Da(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ga(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (oa.x = Math.round(oa.x), oa.y = Math.round(oa.y), Ga(), void _a("zoomPan")) : void 0
                  }
              };
              return c
          },
          Sb = function(a) {
              return a.calculateSwipeSpeed("y"), ca = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (ab("zoomPan"), a.lastNow = Da(), void a.panAnimLoop())
          },
          Tb = function(a, b) {
              var c;
              ea || (pb = m);
              var d;
              if ("swipe" === a) {
                  var g = jb.x - kb.x,
                      h = b.lastFlickDist.x < 10;
                  g > eb && (h || b.lastFlickOffset.x > 20) ? d = -1 : -eb > g && (h || b.lastFlickOffset.x < -20) && (d = 1)
              }
              var j;
              d && (m += d, 0 > m ? (m = i.loop ? _b() - 1 : 0, j = !0) : m >= _b() && (m = i.loop ? 0 : _b() - 1, j = !0), (!j || i.loop) && (ta += d, qa -= d, c = !0));
              var k, l = sa.x * qa,
                  n = Math.abs(l - sb.x);
              return c || l > sb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, pb === m && (c = !1), ea = !0, Ca("mainScrollAnimStart"), cb("mainScroll", sb.x, l, k, e.easing.cubic.out, Ja, function() {
                  bb(), ea = !1, pb = -1, (c || pb !== m) && f.updateCurrItem(), Ca("mainScrollAnimComplete")
              }), c && f.updateCurrItem(!0), c
          },
          Ub = function(a) {
              return 1 / ba * a * t
          },
          Vb = function() {
              var a = s,
                  b = Sa(),
                  c = Ta();
              b > s ? a = b : s > c && (a = c);
              var d, g = 1,
                  h = ia;
              return ha && !R && !ja && b > s ? (f.close(), !0) : (ha && (d = function(a) {
                  Ea((g - h) * a + h)
              }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
          };
      ya("Gestures", {
          publicMethods: {
              initGestures: function() {
                  var a = function(a, b, c, d, e) {
                      A = a + b, B = a + c, C = a + d, D = e ? a + e : ""
                  };
                  F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Nb, r[B] = Ob, r[C] = Qb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
              }
          }
      });
      var Wb, Xb, Yb, Zb, $b, _b, ac, bc = function(b, c, d, g) {
              Wb && clearTimeout(Wb), Zb = !0, Yb = !0;
              var h;
              b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
              var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
                  k = function() {
                      _a("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Ea(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ca("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Zb = !1
                  };
              if (!j || !h || void 0 === h.x) return Ca("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), a.style.opacity = d ? 0 : 1, Ea(1), void(j ? setTimeout(function() {
                  k()
              }, j) : k());
              var n = function() {
                  var c = l,
                      g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                  b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, oa.x = h.x, oa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ga()), ab("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function() {
                      e.addClass(a, "pswp--animate_opacity")
                  }, 30)), Wb = setTimeout(function() {
                      if (Ca("initialZoom" + (d ? "Out" : "In")), d) {
                          var f = h.w / b.w,
                              i = {
                                  x: oa.x,
                                  y: oa.y
                              },
                              l = s,
                              m = ia,
                              n = function(b) {
                                  1 === b ? (s = f, oa.x = h.x, oa.y = h.y - M) : (s = (f - l) * b + l, oa.x = (h.x - i.x) * b + i.x, oa.y = (h.y - M - i.y) * b + i.y), Ga(), g ? a.style.opacity = 1 - b : Ea(m - b * m)
                              };
                          c ? cb("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Wb = setTimeout(k, j + 20))
                      } else s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), Ea(1), g ? a.style.opacity = 1 : Ea(1), Wb = setTimeout(k, j + 20)
                  }, d ? 25 : 90)
              };
              n()
          },
          cc = {},
          dc = [],
          ec = {
              index: 0,
              errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
              forceProgressiveLoading: !1,
              preload: [1, 1],
              getNumItemsFn: function() {
                  return Xb.length
              }
          },
          fc = function() {
              return {
                  center: {
                      x: 0,
                      y: 0
                  },
                  max: {
                      x: 0,
                      y: 0
                  },
                  min: {
                      x: 0,
                      y: 0
                  }
              }
          },
          gc = function(a, b, c) {
              var d = a.bounds;
              d.center.x = Math.round((cc.x - b) / 2), d.center.y = Math.round((cc.y - c) / 2) + a.vGap.top, d.max.x = b > cc.x ? Math.round(cc.x - b) : d.center.x, d.max.y = c > cc.y ? Math.round(cc.y - c) + a.vGap.top : d.center.y, d.min.x = b > cc.x ? 0 : d.center.x, d.min.y = c > cc.y ? a.vGap.top : d.center.y
          },
          hc = function(a, b, c) {
              if (a.src && !a.loadError) {
                  var d = !c;
                  if (d && (a.vGap || (a.vGap = {
                          top: 0,
                          bottom: 0
                      }), Ca("parseVerticalMargin", a)), cc.x = b.x, cc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
                      var e = cc.x / a.w,
                          f = cc.y / a.h;
                      a.fitRatio = f > e ? e : f;
                      var g = i.scaleMode;
                      "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = fc())
                  }
                  if (!c) return;
                  return gc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
              }
              return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = fc(), a.initialPosition = a.bounds.center, a.bounds
          },
          ic = function(a, b, c, d, e, g) {
              b.loadError || d && (b.imageAppended = !0, lc(b, d, b === f.currItem && xa), c.appendChild(d), g && setTimeout(function() {
                  b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null)
              }, 500))
          },
          jc = function(a) {
              a.loading = !0, a.loaded = !1;
              var b = a.img = e.createEl("pswp__img", "img"),
                  c = function() {
                      a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null
                  };
              return b.onload = c, b.onerror = function() {
                  a.loadError = !0, c()
              }, b.src = a.src, b
          },
          kc = function(a, b) {
              return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0
          },
          lc = function(a, b, c) {
              if (a.src) {
                  b || (b = a.container.lastChild);
                  var d = c ? a.w : Math.round(a.w * a.fitRatio),
                      e = c ? a.h : Math.round(a.h * a.fitRatio);
                  a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
              }
          },
          mc = function() {
              if (dc.length) {
                  for (var a, b = 0; b < dc.length; b++) a = dc[b], a.holder.index === a.index && ic(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                  dc = []
              }
          };
      ya("Controller", {
          publicMethods: {
              lazyLoadItem: function(a) {
                  a = za(a);
                  var b = $b(a);
                  b && (!b.loaded && !b.loading || x) && (Ca("gettingData", a, b), b.src && jc(b))
              },
              initController: function() {
                  e.extend(i, ec, !0), f.items = Xb = c, $b = f.getItemAt, _b = i.getNumItemsFn, ac = i.loop, _b() < 3 && (i.loop = !1), Ba("beforeChange", function(a) {
                      var b, c = i.preload,
                          d = null === a ? !0 : a >= 0,
                          e = Math.min(c[0], _b()),
                          g = Math.min(c[1], _b());
                      for (b = 1;
                          (d ? g : e) >= b; b++) f.lazyLoadItem(m + b);
                      for (b = 1;
                          (d ? e : g) >= b; b++) f.lazyLoadItem(m - b)
                  }), Ba("initialLayout", function() {
                      f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m)
                  }), Ba("mainScrollAnimComplete", mc), Ba("initialZoomInEnd", mc), Ba("destroy", function() {
                      for (var a, b = 0; b < Xb.length; b++) a = Xb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                      dc = null
                  })
              },
              getItemAt: function(a) {
                  return a >= 0 && void 0 !== Xb[a] ? Xb[a] : !1
              },
              allowProgressiveImg: function() {
                  return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200
              },
              setContent: function(a, b) {
                  i.loop && (b = za(b));
                  var c = f.getItemAt(a.index);
                  c && (c.container = null);
                  var d, g = f.getItemAt(b);
                  if (!g) return void(a.el.innerHTML = "");
                  Ca("gettingData", b, g), a.index = b, a.item = g;
                  var h = g.container = e.createEl("pswp__zoom-wrap");
                  if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), kc(g), hc(g, pa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, lc(g, d), ic(b, g, h, d, !0));
                  else {
                      if (g.loadComplete = function(c) {
                              if (j) {
                                  if (a && a.index === b) {
                                      if (kc(c, !0)) return c.loadComplete = c.img = null, hc(c, pa), Ha(c), void(a.index === m && f.updateCurrZoomItem());
                                      c.imageAppended ? !Zb && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (ea || Zb) ? dc.push({
                                          item: c,
                                          baseDiv: h,
                                          img: c.img,
                                          index: b,
                                          holder: a,
                                          clearPlaceholder: !0
                                      }) : ic(b, c, h, c.img, ea || Zb, !0)
                                  }
                                  c.loadComplete = null, c.img = null, Ca("imageLoadComplete", b, c)
                              }
                          }, e.features.transform) {
                          var k = "pswp__img pswp__img--placeholder";
                          k += g.msrc ? "" : " pswp__img--placeholder--blank";
                          var l = e.createEl(k, g.msrc ? "img" : "");
                          g.msrc && (l.src = g.msrc), lc(g, l), h.appendChild(l), g.placeholder = l
                      }
                      g.loading || jc(g), f.allowProgressiveImg() && (!Yb && N.transform ? dc.push({
                          item: g,
                          baseDiv: h,
                          img: g.img,
                          index: b,
                          holder: a
                      }) : ic(b, g, h, g.img, !0, !0))
                  }
                  Yb || b !== m ? Ha(g) : (da = h.style, bc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
              },
              cleanSlide: function(a) {
                  a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1
              }
          }
      });
      var nc, oc = {},
          pc = function(a, b, c) {
              var d = document.createEvent("CustomEvent"),
                  e = {
                      origEvent: a,
                      target: a.target,
                      releasePoint: b,
                      pointerType: c || "touch"
                  };
              d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
          };
      ya("Tap", {
          publicMethods: {
              initTap: function() {
                  Ba("firstTouchStart", f.onTapStart), Ba("touchRelease", f.onTapRelease), Ba("destroy", function() {
                      oc = {}, nc = null
                  })
              },
              onTapStart: function(a) {
                  a.length > 1 && (clearTimeout(nc), nc = null)
              },
              onTapRelease: function(a, b) {
                  if (b && !X && !V && !$a) {
                      var c = b;
                      if (nc && (clearTimeout(nc), nc = null, wb(c, oc))) return void Ca("doubleTap", c);
                      if ("mouse" === b.type) return void pc(a, b, "mouse");
                      var d = a.target.tagName.toUpperCase();
                      if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void pc(a, b);
                      La(oc, c), nc = setTimeout(function() {
                          pc(a, b), nc = null
                      }, 300)
                  }
              }
          }
      });
      var qc;
      ya("DesktopZoom", {
          publicMethods: {
              initDesktopZoom: function() {
                  L || (G ? Ba("mouseUsed", function() {
                      f.setupDesktopZoom()
                  }) : f.setupDesktopZoom(!0))
              },
              setupDesktopZoom: function(b) {
                  qc = {};
                  var c = "wheel mousewheel DOMMouseScroll";
                  Ba("bindEvents", function() {
                      e.bind(a, c, f.handleMouseWheel)
                  }), Ba("unbindEvents", function() {
                      qc && e.unbind(a, c, f.handleMouseWheel)
                  }), f.mouseZoomedIn = !1;
                  var d, g = function() {
                          f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h()
                      },
                      h = function() {
                          d && (e.removeClass(a, "pswp--dragging"), d = !1)
                      };
                  Ba("resize", g), Ba("afterChange", g), Ba("pointerDown", function() {
                      f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"))
                  }), Ba("pointerUp", h), b || g()
              },
              handleMouseWheel: function(a) {
                  if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || $a || U ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
                  if (a.stopPropagation(), qc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (qc.x = 18 * a.deltaX, qc.y = 18 * a.deltaY) : (qc.x = a.deltaX, qc.y = a.deltaY);
                  else if ("wheelDelta" in a) a.wheelDeltaX && (qc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? qc.y = -.16 * a.wheelDeltaY : qc.y = -.16 * a.wheelDelta;
                  else {
                      if (!("detail" in a)) return;
                      qc.y = a.detail
                  }
                  Ra(s, !0);
                  var b = oa.x - qc.x,
                      c = oa.y - qc.y;
                  (i.modal || b <= ca.min.x && b >= ca.max.x && c <= ca.min.y && c >= ca.max.y) && a.preventDefault(), f.panTo(b, c)
              },
              toggleDesktopZoom: function(b) {
                  b = b || {
                      x: pa.x / 2 + ra.x,
                      y: pa.y / 2 + ra.y
                  };
                  var c = i.getDoubleTapZoom(!0, f.currItem),
                      d = s === c;
                  f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
              }
          }
      });
      var rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc = {
              history: !0,
              galleryUID: 1
          },
          Ec = function() {
              return Bc.hash.substring(1)
          },
          Fc = function() {
              rc && clearTimeout(rc), tc && clearTimeout(tc)
          },
          Gc = function() {
              var a = Ec(),
                  b = {};
              if (a.length < 5) return b;
              var c, d = a.split("&");
              for (c = 0; c < d.length; c++)
                  if (d[c]) {
                      var e = d[c].split("=");
                      e.length < 2 || (b[e[0]] = e[1])
                  }
              if (i.galleryPIDs) {
                  var f = b.pid;
                  for (b.pid = 0, c = 0; c < Xb.length; c++)
                      if (Xb[c].pid === f) {
                          b.pid = c;
                          break
                      }
              } else b.pid = parseInt(b.pid, 10) - 1;
              return b.pid < 0 && (b.pid = 0), b
          },
          Hc = function() {
              if (tc && clearTimeout(tc), $a || U) return void(tc = setTimeout(Hc, 500));
              uc ? clearTimeout(sc) : uc = !0;
              var a = m + 1,
                  b = $b(m);
              b.hasOwnProperty("pid") && (a = b.pid);
              var c = xc + "&gid=" + i.galleryUID + "&pid=" + a;
              yc || -1 === Bc.hash.indexOf(c) && (Ac = !0);
              var d = Bc.href.split("#")[0] + "#" + c;
              Cc ? "#" + c !== window.location.hash && history[yc ? "replaceState" : "pushState"]("", document.title, d) : yc ? Bc.replace(d) : Bc.hash = c, yc = !0, sc = setTimeout(function() {
                  uc = !1
              }, 60)
          };
      ya("History", {
          publicMethods: {
              initHistory: function() {
                  if (e.extend(i, Dc, !0), i.history) {
                      Bc = window.location, Ac = !1, zc = !1, yc = !1, xc = Ec(), Cc = "pushState" in history, xc.indexOf("gid=") > -1 && (xc = xc.split("&gid=")[0], xc = xc.split("?gid=")[0]), Ba("afterChange", f.updateURL), Ba("unbindEvents", function() {
                          e.unbind(window, "hashchange", f.onHashChange)
                      });
                      var a = function() {
                          wc = !0, zc || (Ac ? history.back() : xc ? Bc.hash = xc : Cc ? history.pushState("", document.title, Bc.pathname + Bc.search) : Bc.hash = ""), Fc()
                      };
                      Ba("unbindEvents", function() {
                          l && a()
                      }), Ba("destroy", function() {
                          wc || a()
                      }), Ba("firstUpdate", function() {
                          m = Gc().pid
                      });
                      var b = xc.indexOf("pid=");
                      b > -1 && (xc = xc.substring(0, b), "&" === xc.slice(-1) && (xc = xc.slice(0, -1))), setTimeout(function() {
                          j && e.bind(window, "hashchange", f.onHashChange)
                      }, 40)
                  }
              },
              onHashChange: function() {
                  return Ec() === xc ? (zc = !0, void f.close()) : void(uc || (vc = !0, f.goTo(Gc().pid), vc = !1))
              },
              updateURL: function() {
                  Fc(), vc || (yc ? rc = setTimeout(Hc, 800) : Hc())
              }
          }
      }), e.extend(f, db)
  };
  return a
});
/*!
* Bootstrap v4.2.1 (https://getbootstrap.com/)
* Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("popper.js"), require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "popper.js", "jquery"], e) : e(t.bootstrap = {}, t.Popper, t.jQuery)
}(this, function(t, u, g) {
  "use strict";

  function i(t, e) {
      for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
  }

  function s(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t
  }

  function l(o) {
      for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
              e = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
              return Object.getOwnPropertyDescriptor(r, t).enumerable
          }))), e.forEach(function(t) {
              var e, n, i;
              e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[n] = i
          })
      }
      return o
  }
  u = u && u.hasOwnProperty("default") ? u.default : u, g = g && g.hasOwnProperty("default") ? g.default : g;
  var e = "transitionend";

  function n(t) {
      var e = this,
          n = !1;
      return g(this).one(_.TRANSITION_END, function() {
          n = !0
      }), setTimeout(function() {
          n || _.triggerTransitionEnd(e)
      }, t), this
  }
  var _ = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function(t) {
          for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
          return t
      },
      getSelectorFromElement: function(t) {
          var e = t.getAttribute("data-target");
          if (!e || "#" === e) {
              var n = t.getAttribute("href");
              e = n && "#" !== n ? n.trim() : ""
          }
          return e && document.querySelector(e) ? e : null
      },
      getTransitionDurationFromElement: function(t) {
          if (!t) return 0;
          var e = g(t).css("transition-duration"),
              n = g(t).css("transition-delay"),
              i = parseFloat(e),
              o = parseFloat(n);
          return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
      },
      reflow: function(t) {
          return t.offsetHeight
      },
      triggerTransitionEnd: function(t) {
          g(t).trigger(e)
      },
      supportsTransitionEnd: function() {
          return Boolean(e)
      },
      isElement: function(t) {
          return (t[0] || t).nodeType
      },
      typeCheckConfig: function(t, e, n) {
          for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                  var o = n[i],
                      r = e[i],
                      s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                  if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
              }
          var a
      },
      findShadowRoot: function(t) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
          var e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null
      }
  };
  g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function(t) {
          if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
  };
  var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = g.fn[o],
      h = {
          CLOSE: "close" + a,
          CLOSED: "closed" + a,
          CLICK_DATA_API: "click" + a + ".data-api"
      },
      f = "alert",
      d = "fade",
      m = "show",
      p = function() {
          function i(t) {
              this._element = t
          }
          var t = i.prototype;
          return t.close = function(t) {
              var e = this._element;
              t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
          }, t.dispose = function() {
              g.removeData(this._element, r), this._element = null
          }, t._getRootElement = function(t) {
              var e = _.getSelectorFromElement(t),
                  n = !1;
              return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n
          }, t._triggerCloseEvent = function(t) {
              var e = g.Event(h.CLOSE);
              return g(t).trigger(e), e
          }, t._removeElement = function(e) {
              var n = this;
              if (g(e).removeClass(m), g(e).hasClass(d)) {
                  var t = _.getTransitionDurationFromElement(e);
                  g(e).one(_.TRANSITION_END, function(t) {
                      return n._destroyElement(e, t)
                  }).emulateTransitionEnd(t)
              } else this._destroyElement(e)
          }, t._destroyElement = function(t) {
              g(t).detach().trigger(h.CLOSED).remove()
          }, i._jQueryInterface = function(n) {
              return this.each(function() {
                  var t = g(this),
                      e = t.data(r);
                  e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
              })
          }, i._handleDismiss = function(e) {
              return function(t) {
                  t && t.preventDefault(), e.close(this)
              }
          }, s(i, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }]), i
      }();
  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function() {
      return g.fn[o] = c, p._jQueryInterface
  };
  var v = "button",
      E = "bs.button",
      y = "." + E,
      C = ".data-api",
      T = g.fn[v],
      S = "active",
      b = "btn",
      I = "focus",
      D = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      A = 'input:not([type="hidden"])',
      N = ".active",
      O = ".btn",
      k = {
          CLICK_DATA_API: "click" + y + C,
          FOCUS_BLUR_DATA_API: "focus" + y + C + " blur" + y + C
      },
      P = function() {
          function n(t) {
              this._element = t
          }
          var t = n.prototype;
          return t.toggle = function() {
              var t = !0,
                  e = !0,
                  n = g(this._element).closest(w)[0];
              if (n) {
                  var i = this._element.querySelector(A);
                  if (i) {
                      if ("radio" === i.type)
                          if (i.checked && this._element.classList.contains(S)) t = !1;
                          else {
                              var o = n.querySelector(N);
                              o && g(o).removeClass(S)
                          }
                      if (t) {
                          if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                          i.checked = !this._element.classList.contains(S), g(i).trigger("change")
                      }
                      i.focus(), e = !1
                  }
              }
              e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)
          }, t.dispose = function() {
              g.removeData(this._element, E), this._element = null
          }, n._jQueryInterface = function(e) {
              return this.each(function() {
                  var t = g(this).data(E);
                  t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]()
              })
          }, s(n, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }]), n
      }();
  g(document).on(k.CLICK_DATA_API, D, function(t) {
      t.preventDefault();
      var e = t.target;
      g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle")
  }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
      var e = g(t.target).closest(O)[0];
      g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function() {
      return g.fn[v] = T, P._jQueryInterface
  };
  var L = "carousel",
      j = "bs.carousel",
      H = "." + j,
      R = ".data-api",
      U = g.fn[L],
      W = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0
      },
      x = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean"
      },
      F = "next",
      q = "prev",
      M = "left",
      K = "right",
      Q = {
          SLIDE: "slide" + H,
          SLID: "slid" + H,
          KEYDOWN: "keydown" + H,
          MOUSEENTER: "mouseenter" + H,
          MOUSELEAVE: "mouseleave" + H,
          TOUCHSTART: "touchstart" + H,
          TOUCHMOVE: "touchmove" + H,
          TOUCHEND: "touchend" + H,
          POINTERDOWN: "pointerdown" + H,
          POINTERUP: "pointerup" + H,
          DRAG_START: "dragstart" + H,
          LOAD_DATA_API: "load" + H + R,
          CLICK_DATA_API: "click" + H + R
      },
      B = "carousel",
      V = "active",
      Y = "slide",
      X = "carousel-item-right",
      z = "carousel-item-left",
      G = "carousel-item-next",
      J = "carousel-item-prev",
      Z = "pointer-event",
      $ = ".active",
      tt = ".active.carousel-item",
      et = ".carousel-item",
      nt = ".carousel-item img",
      it = ".carousel-item-next, .carousel-item-prev",
      ot = ".carousel-indicators",
      rt = "[data-slide], [data-slide-to]",
      st = '[data-ride="carousel"]',
      at = {
          TOUCH: "touch",
          PEN: "pen"
      },
      lt = function() {
          function r(t, e) {
              this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
          }
          var t = r.prototype;
          return t.next = function() {
              this._isSliding || this._slide(F)
          }, t.nextWhenVisible = function() {
              !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
          }, t.prev = function() {
              this._isSliding || this._slide(q)
          }, t.pause = function(t) {
              t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, t.cycle = function(t) {
              t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, t.to = function(t) {
              var e = this;
              this._activeElement = this._element.querySelector(tt);
              var n = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                  if (this._isSliding) g(this._element).one(Q.SLID, function() {
                      return e.to(t)
                  });
                  else {
                      if (n === t) return this.pause(), void this.cycle();
                      var i = n < t ? F : q;
                      this._slide(i, this._items[t])
                  }
          }, t.dispose = function() {
              g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, t._getConfig = function(t) {
              return t = l({}, W, t), _.typeCheckConfig(L, t, x), t
          }, t._handleSwipe = function() {
              var t = Math.abs(this.touchDeltaX);
              if (!(t <= 40)) {
                  var e = t / this.touchDeltaX;
                  0 < e && this.prev(), e < 0 && this.next()
              }
          }, t._addEventListeners = function() {
              var e = this;
              this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                  return e._keydown(t)
              }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                  return e.pause(t)
              }).on(Q.MOUSELEAVE, function(t) {
                  return e.cycle(t)
              }), this._addTouchEventListeners()
          }, t._addTouchEventListeners = function() {
              var n = this;
              if (this._touchSupported) {
                  var e = function(t) {
                          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                      },
                      i = function(t) {
                          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) {
                              return n.cycle(t)
                          }, 500 + n._config.interval))
                      };
                  g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                      return t.preventDefault()
                  }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                      return e(t)
                  }), g(this._element).on(Q.POINTERUP, function(t) {
                      return i(t)
                  }), this._element.classList.add(Z)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                      return e(t)
                  }), g(this._element).on(Q.TOUCHMOVE, function(t) {
                      var e;
                      (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                  }), g(this._element).on(Q.TOUCHEND, function(t) {
                      return i(t)
                  }))
              }
          }, t._keydown = function(t) {
              if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                  case 37:
                      t.preventDefault(), this.prev();
                      break;
                  case 39:
                      t.preventDefault(), this.next()
              }
          }, t._getItemIndex = function(t) {
              return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t)
          }, t._getItemByDirection = function(t, e) {
              var n = t === F,
                  i = t === q,
                  o = this._getItemIndex(e),
                  r = this._items.length - 1;
              if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
              var s = (o + (t === q ? -1 : 1)) % this._items.length;
              return -1 === s ? this._items[this._items.length - 1] : this._items[s]
          }, t._triggerSlideEvent = function(t, e) {
              var n = this._getItemIndex(t),
                  i = this._getItemIndex(this._element.querySelector(tt)),
                  o = g.Event(Q.SLIDE, {
                      relatedTarget: t,
                      direction: e,
                      from: i,
                      to: n
                  });
              return g(this._element).trigger(o), o
          }, t._setActiveIndicatorElement = function(t) {
              if (this._indicatorsElement) {
                  var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                  g(e).removeClass(V);
                  var n = this._indicatorsElement.children[this._getItemIndex(t)];
                  n && g(n).addClass(V)
              }
          }, t._slide = function(t, e) {
              var n, i, o, r = this,
                  s = this._element.querySelector(tt),
                  a = this._getItemIndex(s),
                  l = e || s && this._getItemByDirection(t, s),
                  c = this._getItemIndex(l),
                  h = Boolean(this._interval);
              if (o = t === F ? (n = z, i = G, M) : (n = X, i = J, K), l && g(l).hasClass(V)) this._isSliding = !1;
              else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                  this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                  var u = g.Event(Q.SLID, {
                      relatedTarget: l,
                      direction: o,
                      from: a,
                      to: c
                  });
                  if (g(this._element).hasClass(Y)) {
                      g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                      var f = parseInt(l.getAttribute("data-interval"), 10);
                      this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                      var d = _.getTransitionDurationFromElement(s);
                      g(s).one(_.TRANSITION_END, function() {
                          g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                              return g(r._element).trigger(u)
                          }, 0)
                      }).emulateTransitionEnd(d)
                  } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
                  h && this.cycle()
              }
          }, r._jQueryInterface = function(i) {
              return this.each(function() {
                  var t = g(this).data(j),
                      e = l({}, W, g(this).data());
                  "object" == typeof i && (e = l({}, e, i));
                  var n = "string" == typeof i ? i : e.slide;
                  if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);
                  else if ("string" == typeof n) {
                      if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                      t[n]()
                  } else e.interval && (t.pause(), t.cycle())
              })
          }, r._dataApiClickHandler = function(t) {
              var e = _.getSelectorFromElement(this);
              if (e) {
                  var n = g(e)[0];
                  if (n && g(n).hasClass(B)) {
                      var i = l({}, g(n).data(), g(this).data()),
                          o = this.getAttribute("data-slide-to");
                      o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault()
                  }
              }
          }, s(r, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "Default",
              get: function() {
                  return W
              }
          }]), r
      }();
  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function() {
      for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
          var i = g(t[e]);
          lt._jQueryInterface.call(i, i.data())
      }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function() {
      return g.fn[L] = U, lt._jQueryInterface
  };
  var ct = "collapse",
      ht = "bs.collapse",
      ut = "." + ht,
      ft = g.fn[ct],
      dt = {
          toggle: !0,
          parent: ""
      },
      gt = {
          toggle: "boolean",
          parent: "(string|element)"
      },
      _t = {
          SHOW: "show" + ut,
          SHOWN: "shown" + ut,
          HIDE: "hide" + ut,
          HIDDEN: "hidden" + ut,
          CLICK_DATA_API: "click" + ut + ".data-api"
      },
      mt = "show",
      pt = "collapse",
      vt = "collapsing",
      Et = "collapsed",
      yt = "width",
      Ct = "height",
      Tt = ".show, .collapsing",
      St = '[data-toggle="collapse"]',
      bt = function() {
          function a(e, t) {
              this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
              for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                  var r = n[i],
                      s = _.getSelectorFromElement(r),
                      a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                          return t === e
                      });
                  null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
              }
              this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          var t = a.prototype;
          return t.toggle = function() {
              g(this._element).hasClass(mt) ? this.hide() : this.show()
          }, t.show = function() {
              var t, e, n = this;
              if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                      return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
                  })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                  var i = g.Event(_t.SHOW);
                  if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                      t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                      var o = this._getDimension();
                      g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Et).attr("aria-expanded", !0), this.setTransitioning(!0);
                      var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                          s = _.getTransitionDurationFromElement(this._element);
                      g(this._element).one(_.TRANSITION_END, function() {
                          g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN)
                      }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                  }
              }
          }, t.hide = function() {
              var t = this;
              if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                  var e = g.Event(_t.HIDE);
                  if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                      var n = this._getDimension();
                      this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                      var i = this._triggerArray.length;
                      if (0 < i)
                          for (var o = 0; o < i; o++) {
                              var r = this._triggerArray[o],
                                  s = _.getSelectorFromElement(r);
                              if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(Et).attr("aria-expanded", !1)
                          }
                      this.setTransitioning(!0);
                      this._element.style[n] = "";
                      var a = _.getTransitionDurationFromElement(this._element);
                      g(this._element).one(_.TRANSITION_END, function() {
                          t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                      }).emulateTransitionEnd(a)
                  }
              }
          }, t.setTransitioning = function(t) {
              this._isTransitioning = t
          }, t.dispose = function() {
              g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, t._getConfig = function(t) {
              return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t
          }, t._getDimension = function() {
              return g(this._element).hasClass(yt) ? yt : Ct
          }, t._getParent = function() {
              var t, n = this;
              _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
              var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                  i = [].slice.call(t.querySelectorAll(e));
              return g(i).each(function(t, e) {
                  n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
              }), t
          }, t._addAriaAndCollapsedClass = function(t, e) {
              var n = g(t).hasClass(mt);
              e.length && g(e).toggleClass(Et, !n).attr("aria-expanded", n)
          }, a._getTargetFromElement = function(t) {
              var e = _.getSelectorFromElement(t);
              return e ? document.querySelector(e) : null
          }, a._jQueryInterface = function(i) {
              return this.each(function() {
                  var t = g(this),
                      e = t.data(ht),
                      n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                  if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
                      if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                      e[i]()
                  }
              })
          }, s(a, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "Default",
              get: function() {
                  return dt
              }
          }]), a
      }();
  g(document).on(_t.CLICK_DATA_API, St, function(t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = g(this),
          e = _.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(e));
      g(i).each(function() {
          var t = g(this),
              e = t.data(ht) ? "toggle" : n.data();
          bt._jQueryInterface.call(t, e)
      })
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function() {
      return g.fn[ct] = ft, bt._jQueryInterface
  };
  var It = "dropdown",
      Dt = "bs.dropdown",
      wt = "." + Dt,
      At = ".data-api",
      Nt = g.fn[It],
      Ot = new RegExp("38|40|27"),
      kt = {
          HIDE: "hide" + wt,
          HIDDEN: "hidden" + wt,
          SHOW: "show" + wt,
          SHOWN: "shown" + wt,
          CLICK: "click" + wt,
          CLICK_DATA_API: "click" + wt + At,
          KEYDOWN_DATA_API: "keydown" + wt + At,
          KEYUP_DATA_API: "keyup" + wt + At
      },
      Pt = "disabled",
      Lt = "show",
      jt = "dropup",
      Ht = "dropright",
      Rt = "dropleft",
      Ut = "dropdown-menu-right",
      Wt = "position-static",
      xt = '[data-toggle="dropdown"]',
      Ft = ".dropdown form",
      qt = ".dropdown-menu",
      Mt = ".navbar-nav",
      Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Qt = "top-start",
      Bt = "top-end",
      Vt = "bottom-start",
      Yt = "bottom-end",
      Xt = "right-start",
      zt = "left-start",
      Gt = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic"
      },
      Jt = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string"
      },
      Zt = function() {
          function c(t, e) {
              this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
          }
          var t = c.prototype;
          return t.toggle = function() {
              if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                  var t = c._getParentFromElement(this._element),
                      e = g(this._menu).hasClass(Lt);
                  if (c._clearMenus(), !e) {
                      var n = {
                              relatedTarget: this._element
                          },
                          i = g.Event(kt.SHOW, n);
                      if (g(t).trigger(i), !i.isDefaultPrevented()) {
                          if (!this._inNavbar) {
                              if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                              var o = this._element;
                              "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Wt), this._popper = new u(o, this._menu, this._getPopperConfig())
                          }
                          "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                      }
                  }
              }
          }, t.show = function() {
              if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                  var t = {
                          relatedTarget: this._element
                      },
                      e = g.Event(kt.SHOW, t),
                      n = c._getParentFromElement(this._element);
                  g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
              }
          }, t.hide = function() {
              if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                  var t = {
                          relatedTarget: this._element
                      },
                      e = g.Event(kt.HIDE, t),
                      n = c._getParentFromElement(this._element);
                  g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
              }
          }, t.dispose = function() {
              g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
          }, t.update = function() {
              this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
          }, t._addEventListeners = function() {
              var e = this;
              g(this._element).on(kt.CLICK, function(t) {
                  t.preventDefault(), t.stopPropagation(), e.toggle()
              })
          }, t._getConfig = function(t) {
              return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t
          }, t._getMenuElement = function() {
              if (!this._menu) {
                  var t = c._getParentFromElement(this._element);
                  t && (this._menu = t.querySelector(qt))
              }
              return this._menu
          }, t._getPlacement = function() {
              var t = g(this._element.parentNode),
                  e = Vt;
              return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(Ut) && (e = Bt)) : t.hasClass(Ht) ? e = Xt : t.hasClass(Rt) ? e = zt : g(this._menu).hasClass(Ut) && (e = Yt), e
          }, t._detectNavbar = function() {
              return 0 < g(this._element).closest(".navbar").length
          }, t._getPopperConfig = function() {
              var e = this,
                  t = {};
              "function" == typeof this._config.offset ? t.fn = function(t) {
                  return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t
              } : t.offset = this._config.offset;
              var n = {
                  placement: this._getPlacement(),
                  modifiers: {
                      offset: t,
                      flip: {
                          enabled: this._config.flip
                      },
                      preventOverflow: {
                          boundariesElement: this._config.boundary
                      }
                  }
              };
              return "static" === this._config.display && (n.modifiers.applyStyle = {
                  enabled: !1
              }), n
          }, c._jQueryInterface = function(e) {
              return this.each(function() {
                  var t = g(this).data(Dt);
                  if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
                      if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                      t[e]()
                  }
              })
          }, c._clearMenus = function(t) {
              if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                  for (var e = [].slice.call(document.querySelectorAll(xt)), n = 0, i = e.length; n < i; n++) {
                      var o = c._getParentFromElement(e[n]),
                          r = g(e[n]).data(Dt),
                          s = {
                              relatedTarget: e[n]
                          };
                      if (t && "click" === t.type && (s.clickEvent = t), r) {
                          var a = r._menu;
                          if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                              var l = g.Event(kt.HIDE, s);
                              g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                          }
                      }
                  }
          }, c._getParentFromElement = function(t) {
              var e, n = _.getSelectorFromElement(t);
              return n && (e = document.querySelector(n)), e || t.parentNode
          }, c._dataApiKeydownHandler = function(t) {
              if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                  var e = c._getParentFromElement(this),
                      n = g(e).hasClass(Lt);
                  if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                      var i = [].slice.call(e.querySelectorAll(Kt));
                      if (0 !== i.length) {
                          var o = i.indexOf(t.target);
                          38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                      }
                  } else {
                      if (27 === t.which) {
                          var r = e.querySelector(xt);
                          g(r).trigger("focus")
                      }
                      g(this).trigger("click")
                  }
              }
          }, s(c, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "Default",
              get: function() {
                  return Gt
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return Jt
              }
          }]), c
      }();
  g(document).on(kt.KEYDOWN_DATA_API, xt, Zt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Zt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Zt._clearMenus).on(kt.CLICK_DATA_API, xt, function(t) {
      t.preventDefault(), t.stopPropagation(), Zt._jQueryInterface.call(g(this), "toggle")
  }).on(kt.CLICK_DATA_API, Ft, function(t) {
      t.stopPropagation()
  }), g.fn[It] = Zt._jQueryInterface, g.fn[It].Constructor = Zt, g.fn[It].noConflict = function() {
      return g.fn[It] = Nt, Zt._jQueryInterface
  };
  var $t = "modal",
      te = "bs.modal",
      ee = "." + te,
      ne = g.fn[$t],
      ie = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
      },
      oe = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
      },
      re = {
          HIDE: "hide" + ee,
          HIDDEN: "hidden" + ee,
          SHOW: "show" + ee,
          SHOWN: "shown" + ee,
          FOCUSIN: "focusin" + ee,
          RESIZE: "resize" + ee,
          CLICK_DISMISS: "click.dismiss" + ee,
          KEYDOWN_DISMISS: "keydown.dismiss" + ee,
          MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
          CLICK_DATA_API: "click" + ee + ".data-api"
      },
      se = "modal-scrollbar-measure",
      ae = "modal-backdrop",
      le = "modal-open",
      ce = "fade",
      he = "show",
      ue = ".modal-dialog",
      fe = '[data-toggle="modal"]',
      de = '[data-dismiss="modal"]',
      ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      _e = ".sticky-top",
      me = function() {
          function o(t, e) {
              this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
          }
          var t = o.prototype;
          return t.toggle = function(t) {
              return this._isShown ? this.hide() : this.show(t)
          }, t.show = function(t) {
              var e = this;
              if (!this._isShown && !this._isTransitioning) {
                  g(this._element).hasClass(ce) && (this._isTransitioning = !0);
                  var n = g.Event(re.SHOW, {
                      relatedTarget: t
                  });
                  g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, de, function(t) {
                      return e.hide(t)
                  }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                      g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                          g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                      })
                  }), this._showBackdrop(function() {
                      return e._showElement(t)
                  }))
              }
          }, t.hide = function(t) {
              var e = this;
              if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                  var n = g.Event(re.HIDE);
                  if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                      this._isShown = !1;
                      var i = g(this._element).hasClass(ce);
                      if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(he), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
                          var o = _.getTransitionDurationFromElement(this._element);
                          g(this._element).one(_.TRANSITION_END, function(t) {
                              return e._hideModal(t)
                          }).emulateTransitionEnd(o)
                      } else this._hideModal()
                  }
              }
          }, t.dispose = function() {
              [window, this._element, this._dialog].forEach(function(t) {
                  return g(t).off(ee)
              }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
          }, t.handleUpdate = function() {
              this._adjustDialog()
          }, t._getConfig = function(t) {
              return t = l({}, ie, t), _.typeCheckConfig($t, t, oe), t
          }, t._showElement = function(t) {
              var e = this,
                  n = g(this._element).hasClass(ce);
              this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(he), this._config.focus && this._enforceFocus();
              var i = g.Event(re.SHOWN, {
                      relatedTarget: t
                  }),
                  o = function() {
                      e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i)
                  };
              if (n) {
                  var r = _.getTransitionDurationFromElement(this._dialog);
                  g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
              } else o()
          }, t._enforceFocus = function() {
              var e = this;
              g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                  document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
              })
          }, t._setEscapeEvent = function() {
              var e = this;
              this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                  27 === t.which && (t.preventDefault(), e.hide())
              }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
          }, t._setResizeEvent = function() {
              var e = this;
              this._isShown ? g(window).on(re.RESIZE, function(t) {
                  return e.handleUpdate(t)
              }) : g(window).off(re.RESIZE)
          }, t._hideModal = function() {
              var t = this;
              this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                  g(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN)
              })
          }, t._removeBackdrop = function() {
              this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
          }, t._showBackdrop = function(t) {
              var e = this,
                  n = g(this._element).hasClass(ce) ? ce : "";
              if (this._isShown && this._config.backdrop) {
                  if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function(t) {
                          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                      }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(he), !t) return;
                  if (!n) return void t();
                  var i = _.getTransitionDurationFromElement(this._backdrop);
                  g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
              } else if (!this._isShown && this._backdrop) {
                  g(this._backdrop).removeClass(he);
                  var o = function() {
                      e._removeBackdrop(), t && t()
                  };
                  if (g(this._element).hasClass(ce)) {
                      var r = _.getTransitionDurationFromElement(this._backdrop);
                      g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                  } else o()
              } else t && t()
          }, t._adjustDialog = function() {
              var t = this._element.scrollHeight > document.documentElement.clientHeight;
              !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, t._resetAdjustments = function() {
              this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, t._checkScrollbar = function() {
              var t = document.body.getBoundingClientRect();
              this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, t._setScrollbar = function() {
              var o = this;
              if (this._isBodyOverflowing) {
                  var t = [].slice.call(document.querySelectorAll(ge)),
                      e = [].slice.call(document.querySelectorAll(_e));
                  g(t).each(function(t, e) {
                      var n = e.style.paddingRight,
                          i = g(e).css("padding-right");
                      g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                  }), g(e).each(function(t, e) {
                      var n = e.style.marginRight,
                          i = g(e).css("margin-right");
                      g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                  });
                  var n = document.body.style.paddingRight,
                      i = g(document.body).css("padding-right");
                  g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
              }
              g(document.body).addClass(le)
          }, t._resetScrollbar = function() {
              var t = [].slice.call(document.querySelectorAll(ge));
              g(t).each(function(t, e) {
                  var n = g(e).data("padding-right");
                  g(e).removeData("padding-right"), e.style.paddingRight = n || ""
              });
              var e = [].slice.call(document.querySelectorAll("" + _e));
              g(e).each(function(t, e) {
                  var n = g(e).data("margin-right");
                  "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
              });
              var n = g(document.body).data("padding-right");
              g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
          }, t._getScrollbarWidth = function() {
              var t = document.createElement("div");
              t.className = se, document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e
          }, o._jQueryInterface = function(n, i) {
              return this.each(function() {
                  var t = g(this).data(te),
                      e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                  if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
                      if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                      t[n](i)
                  } else e.show && t.show(i)
              })
          }, s(o, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "Default",
              get: function() {
                  return ie
              }
          }]), o
      }();
  g(document).on(re.CLICK_DATA_API, fe, function(t) {
      var e, n = this,
          i = _.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
      var r = g(e).one(re.SHOW, function(t) {
          t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
              g(n).is(":visible") && n.focus()
          })
      });
      me._jQueryInterface.call(g(e), o, this)
  }), g.fn[$t] = me._jQueryInterface, g.fn[$t].Constructor = me, g.fn[$t].noConflict = function() {
      return g.fn[$t] = ne, me._jQueryInterface
  };
  var pe = "tooltip",
      ve = "bs.tooltip",
      Ee = "." + ve,
      ye = g.fn[pe],
      Ce = "bs-tooltip",
      Te = new RegExp("(^|\\s)" + Ce + "\\S+", "g"),
      Se = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)"
      },
      be = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
      },
      Ie = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent"
      },
      De = "show",
      we = "out",
      Ae = {
          HIDE: "hide" + Ee,
          HIDDEN: "hidden" + Ee,
          SHOW: "show" + Ee,
          SHOWN: "shown" + Ee,
          INSERTED: "inserted" + Ee,
          CLICK: "click" + Ee,
          FOCUSIN: "focusin" + Ee,
          FOCUSOUT: "focusout" + Ee,
          MOUSEENTER: "mouseenter" + Ee,
          MOUSELEAVE: "mouseleave" + Ee
      },
      Ne = "fade",
      Oe = "show",
      ke = ".tooltip-inner",
      Pe = ".arrow",
      Le = "hover",
      je = "focus",
      He = "click",
      Re = "manual",
      Ue = function() {
          function i(t, e) {
              if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
              this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
          }
          var t = i.prototype;
          return t.enable = function() {
              this._isEnabled = !0
          }, t.disable = function() {
              this._isEnabled = !1
          }, t.toggleEnabled = function() {
              this._isEnabled = !this._isEnabled
          }, t.toggle = function(t) {
              if (this._isEnabled)
                  if (t) {
                      var e = this.constructor.DATA_KEY,
                          n = g(t.currentTarget).data(e);
                      n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                  } else {
                      if (g(this.getTipElement()).hasClass(Oe)) return void this._leave(null, this);
                      this._enter(null, this)
                  }
          }, t.dispose = function() {
              clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
          }, t.show = function() {
              var e = this;
              if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
              var t = g.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                  g(this.element).trigger(t);
                  var n = _.findShadowRoot(this.element),
                      i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                  if (t.isDefaultPrevented() || !i) return;
                  var o = this.getTipElement(),
                      r = _.getUID(this.constructor.NAME);
                  o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(Ne);
                  var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                      a = this._getAttachment(s);
                  this.addAttachmentClass(a);
                  var l = this._getContainer();
                  g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
                      placement: a,
                      modifiers: {
                          offset: {
                              offset: this.config.offset
                          },
                          flip: {
                              behavior: this.config.fallbackPlacement
                          },
                          arrow: {
                              element: Pe
                          },
                          preventOverflow: {
                              boundariesElement: this.config.boundary
                          }
                      },
                      onCreate: function(t) {
                          t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                      },
                      onUpdate: function(t) {
                          return e._handlePopperPlacementChange(t)
                      }
                  }), g(o).addClass(Oe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                  var c = function() {
                      e.config.animation && e._fixTransition();
                      var t = e._hoverState;
                      e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e)
                  };
                  if (g(this.tip).hasClass(Ne)) {
                      var h = _.getTransitionDurationFromElement(this.tip);
                      g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                  } else c()
              }
          }, t.hide = function(t) {
              var e = this,
                  n = this.getTipElement(),
                  i = g.Event(this.constructor.Event.HIDE),
                  o = function() {
                      e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                  };
              if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                  if (g(n).removeClass(Oe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[He] = !1, this._activeTrigger[je] = !1, this._activeTrigger[Le] = !1, g(this.tip).hasClass(Ne)) {
                      var r = _.getTransitionDurationFromElement(n);
                      g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                  } else o();
                  this._hoverState = ""
              }
          }, t.update = function() {
              null !== this._popper && this._popper.scheduleUpdate()
          }, t.isWithContent = function() {
              return Boolean(this.getTitle())
          }, t.addAttachmentClass = function(t) {
              g(this.getTipElement()).addClass(Ce + "-" + t)
          }, t.getTipElement = function() {
              return this.tip = this.tip || g(this.config.template)[0], this.tip
          }, t.setContent = function() {
              var t = this.getTipElement();
              this.setElementContent(g(t.querySelectorAll(ke)), this.getTitle()), g(t).removeClass(Ne + " " + Oe)
          }, t.setElementContent = function(t, e) {
              var n = this.config.html;
              "object" == typeof e && (e.nodeType || e.jquery) ? n ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) : t[n ? "html" : "text"](e)
          }, t.getTitle = function() {
              var t = this.element.getAttribute("data-original-title");
              return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
          }, t._getContainer = function() {
              return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
          }, t._getAttachment = function(t) {
              return be[t.toUpperCase()]
          }, t._setListeners = function() {
              var i = this;
              this.config.trigger.split(" ").forEach(function(t) {
                  if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                      return i.toggle(t)
                  });
                  else if (t !== Re) {
                      var e = t === Le ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                          n = t === Le ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                      g(i.element).on(e, i.config.selector, function(t) {
                          return i._enter(t)
                      }).on(n, i.config.selector, function(t) {
                          return i._leave(t)
                      })
                  }
              }), g(this.element).closest(".modal").on("hide.bs.modal", function() {
                  i.element && i.hide()
              }), this.config.selector ? this.config = l({}, this.config, {
                  trigger: "manual",
                  selector: ""
              }) : this._fixTitle()
          }, t._fixTitle = function() {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, t._enter = function(t, e) {
              var n = this.constructor.DATA_KEY;
              (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? je : Le] = !0), g(e.getTipElement()).hasClass(Oe) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                  e._hoverState === De && e.show()
              }, e.config.delay.show) : e.show())
          }, t._leave = function(t, e) {
              var n = this.constructor.DATA_KEY;
              (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? je : Le] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                  e._hoverState === we && e.hide()
              }, e.config.delay.hide) : e.hide())
          }, t._isWithActiveTrigger = function() {
              for (var t in this._activeTrigger)
                  if (this._activeTrigger[t]) return !0;
              return !1
          }, t._getConfig = function(t) {
              return "number" == typeof(t = l({}, this.constructor.Default, g(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                  show: t.delay,
                  hide: t.delay
              }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(pe, t, this.constructor.DefaultType), t
          }, t._getDelegateConfig = function() {
              var t = {};
              if (this.config)
                  for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
              return t
          }, t._cleanTipClass = function() {
              var t = g(this.getTipElement()),
                  e = t.attr("class").match(Te);
              null !== e && e.length && t.removeClass(e.join(""))
          }, t._handlePopperPlacementChange = function(t) {
              var e = t.instance;
              this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
          }, t._fixTransition = function() {
              var t = this.getTipElement(),
                  e = this.config.animation;
              null === t.getAttribute("x-placement") && (g(t).removeClass(Ne), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
          }, i._jQueryInterface = function(n) {
              return this.each(function() {
                  var t = g(this).data(ve),
                      e = "object" == typeof n && n;
                  if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(ve, t)), "string" == typeof n)) {
                      if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                      t[n]()
                  }
              })
          }, s(i, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "Default",
              get: function() {
                  return Ie
              }
          }, {
              key: "NAME",
              get: function() {
                  return pe
              }
          }, {
              key: "DATA_KEY",
              get: function() {
                  return ve
              }
          }, {
              key: "Event",
              get: function() {
                  return Ae
              }
          }, {
              key: "EVENT_KEY",
              get: function() {
                  return Ee
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return Se
              }
          }]), i
      }();
  g.fn[pe] = Ue._jQueryInterface, g.fn[pe].Constructor = Ue, g.fn[pe].noConflict = function() {
      return g.fn[pe] = ye, Ue._jQueryInterface
  };
  var We = "popover",
      xe = "bs.popover",
      Fe = "." + xe,
      qe = g.fn[We],
      Me = "bs-popover",
      Ke = new RegExp("(^|\\s)" + Me + "\\S+", "g"),
      Qe = l({}, Ue.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      Be = l({}, Ue.DefaultType, {
          content: "(string|element|function)"
      }),
      Ve = "fade",
      Ye = "show",
      Xe = ".popover-header",
      ze = ".popover-body",
      Ge = {
          HIDE: "hide" + Fe,
          HIDDEN: "hidden" + Fe,
          SHOW: "show" + Fe,
          SHOWN: "shown" + Fe,
          INSERTED: "inserted" + Fe,
          CLICK: "click" + Fe,
          FOCUSIN: "focusin" + Fe,
          FOCUSOUT: "focusout" + Fe,
          MOUSEENTER: "mouseenter" + Fe,
          MOUSELEAVE: "mouseleave" + Fe
      },
      Je = function(t) {
          var e, n;

          function i() {
              return t.apply(this, arguments) || this
          }
          n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
          var o = i.prototype;
          return o.isWithContent = function() {
              return this.getTitle() || this._getContent()
          }, o.addAttachmentClass = function(t) {
              g(this.getTipElement()).addClass(Me + "-" + t)
          }, o.getTipElement = function() {
              return this.tip = this.tip || g(this.config.template)[0], this.tip
          }, o.setContent = function() {
              var t = g(this.getTipElement());
              this.setElementContent(t.find(Xe), this.getTitle());
              var e = this._getContent();
              "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ze), e), t.removeClass(Ve + " " + Ye)
          }, o._getContent = function() {
              return this.element.getAttribute("data-content") || this.config.content
          }, o._cleanTipClass = function() {
              var t = g(this.getTipElement()),
                  e = t.attr("class").match(Ke);
              null !== e && 0 < e.length && t.removeClass(e.join(""))
          }, i._jQueryInterface = function(n) {
              return this.each(function() {
                  var t = g(this).data(xe),
                      e = "object" == typeof n ? n : null;
                  if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(xe, t)), "string" == typeof n)) {
                      if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                      t[n]()
                  }
              })
          }, s(i, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "Default",
              get: function() {
                  return Qe
              }
          }, {
              key: "NAME",
              get: function() {
                  return We
              }
          }, {
              key: "DATA_KEY",
              get: function() {
                  return xe
              }
          }, {
              key: "Event",
              get: function() {
                  return Ge
              }
          }, {
              key: "EVENT_KEY",
              get: function() {
                  return Fe
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return Be
              }
          }]), i
      }(Ue);
  g.fn[We] = Je._jQueryInterface, g.fn[We].Constructor = Je, g.fn[We].noConflict = function() {
      return g.fn[We] = qe, Je._jQueryInterface
  };
  var Ze = "scrollspy",
      $e = "bs.scrollspy",
      tn = "." + $e,
      en = g.fn[Ze],
      nn = {
          offset: 10,
          method: "auto",
          target: ""
      },
      on = {
          offset: "number",
          method: "string",
          target: "(string|element)"
      },
      rn = {
          ACTIVATE: "activate" + tn,
          SCROLL: "scroll" + tn,
          LOAD_DATA_API: "load" + tn + ".data-api"
      },
      sn = "dropdown-item",
      an = "active",
      ln = '[data-spy="scroll"]',
      cn = ".nav, .list-group",
      hn = ".nav-link",
      un = ".nav-item",
      fn = ".list-group-item",
      dn = ".dropdown",
      gn = ".dropdown-item",
      _n = ".dropdown-toggle",
      mn = "offset",
      pn = "position",
      vn = function() {
          function n(t, e) {
              var n = this;
              this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + hn + "," + this._config.target + " " + fn + "," + this._config.target + " " + gn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(rn.SCROLL, function(t) {
                  return n._process(t)
              }), this.refresh(), this._process()
          }
          var t = n.prototype;
          return t.refresh = function() {
              var e = this,
                  t = this._scrollElement === this._scrollElement.window ? mn : pn,
                  o = "auto" === this._config.method ? t : this._config.method,
                  r = o === pn ? this._getScrollTop() : 0;
              this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                  var e, n = _.getSelectorFromElement(t);
                  if (n && (e = document.querySelector(n)), e) {
                      var i = e.getBoundingClientRect();
                      if (i.width || i.height) return [g(e)[o]().top + r, n]
                  }
                  return null
              }).filter(function(t) {
                  return t
              }).sort(function(t, e) {
                  return t[0] - e[0]
              }).forEach(function(t) {
                  e._offsets.push(t[0]), e._targets.push(t[1])
              })
          }, t.dispose = function() {
              g.removeData(this._element, $e), g(this._scrollElement).off(tn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, t._getConfig = function(t) {
              if ("string" != typeof(t = l({}, nn, "object" == typeof t && t ? t : {})).target) {
                  var e = g(t.target).attr("id");
                  e || (e = _.getUID(Ze), g(t.target).attr("id", e)), t.target = "#" + e
              }
              return _.typeCheckConfig(Ze, t, on), t
          }, t._getScrollTop = function() {
              return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, t._getScrollHeight = function() {
              return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, t._getOffsetHeight = function() {
              return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
          }, t._process = function() {
              var t = this._getScrollTop() + this._config.offset,
                  e = this._getScrollHeight(),
                  n = this._config.offset + e - this._getOffsetHeight();
              if (this._scrollHeight !== e && this.refresh(), n <= t) {
                  var i = this._targets[this._targets.length - 1];
                  this._activeTarget !== i && this._activate(i)
              } else {
                  if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                  for (var o = this._offsets.length; o--;) {
                      this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                  }
              }
          }, t._activate = function(e) {
              this._activeTarget = e, this._clear();
              var t = this._selector.split(",").map(function(t) {
                      return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  }),
                  n = g([].slice.call(document.querySelectorAll(t.join(","))));
              n.hasClass(sn) ? (n.closest(dn).find(_n).addClass(an), n.addClass(an)) : (n.addClass(an), n.parents(cn).prev(hn + ", " + fn).addClass(an), n.parents(cn).prev(un).children(hn).addClass(an)), g(this._scrollElement).trigger(rn.ACTIVATE, {
                  relatedTarget: e
              })
          }, t._clear = function() {
              [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                  return t.classList.contains(an)
              }).forEach(function(t) {
                  return t.classList.remove(an)
              })
          }, n._jQueryInterface = function(e) {
              return this.each(function() {
                  var t = g(this).data($e);
                  if (t || (t = new n(this, "object" == typeof e && e), g(this).data($e, t)), "string" == typeof e) {
                      if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                      t[e]()
                  }
              })
          }, s(n, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "Default",
              get: function() {
                  return nn
              }
          }]), n
      }();
  g(window).on(rn.LOAD_DATA_API, function() {
      for (var t = [].slice.call(document.querySelectorAll(ln)), e = t.length; e--;) {
          var n = g(t[e]);
          vn._jQueryInterface.call(n, n.data())
      }
  }), g.fn[Ze] = vn._jQueryInterface, g.fn[Ze].Constructor = vn, g.fn[Ze].noConflict = function() {
      return g.fn[Ze] = en, vn._jQueryInterface
  };
  var En = "bs.tab",
      yn = "." + En,
      Cn = g.fn.tab,
      Tn = {
          HIDE: "hide" + yn,
          HIDDEN: "hidden" + yn,
          SHOW: "show" + yn,
          SHOWN: "shown" + yn,
          CLICK_DATA_API: "click" + yn + ".data-api"
      },
      Sn = "dropdown-menu",
      bn = "active",
      In = "disabled",
      Dn = "fade",
      wn = "show",
      An = ".dropdown",
      Nn = ".nav, .list-group",
      On = ".active",
      kn = "> li > .active",
      Pn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Ln = ".dropdown-toggle",
      jn = "> .dropdown-menu .active",
      Hn = function() {
          function i(t) {
              this._element = t
          }
          var t = i.prototype;
          return t.show = function() {
              var n = this;
              if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(bn) || g(this._element).hasClass(In))) {
                  var t, i, e = g(this._element).closest(Nn)[0],
                      o = _.getSelectorFromElement(this._element);
                  if (e) {
                      var r = "UL" === e.nodeName || "OL" === e.nodeName ? kn : On;
                      i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                  }
                  var s = g.Event(Tn.HIDE, {
                          relatedTarget: this._element
                      }),
                      a = g.Event(Tn.SHOW, {
                          relatedTarget: i
                      });
                  if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                      o && (t = document.querySelector(o)), this._activate(this._element, e);
                      var l = function() {
                          var t = g.Event(Tn.HIDDEN, {
                                  relatedTarget: n._element
                              }),
                              e = g.Event(Tn.SHOWN, {
                                  relatedTarget: i
                              });
                          g(i).trigger(t), g(n._element).trigger(e)
                      };
                      t ? this._activate(t, t.parentNode, l) : l()
                  }
              }
          }, t.dispose = function() {
              g.removeData(this._element, En), this._element = null
          }, t._activate = function(t, e, n) {
              var i = this,
                  o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(On) : g(e).find(kn))[0],
                  r = n && o && g(o).hasClass(Dn),
                  s = function() {
                      return i._transitionComplete(t, o, n)
                  };
              if (o && r) {
                  var a = _.getTransitionDurationFromElement(o);
                  g(o).removeClass(wn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
              } else s()
          }, t._transitionComplete = function(t, e, n) {
              if (e) {
                  g(e).removeClass(bn);
                  var i = g(e.parentNode).find(jn)[0];
                  i && g(i).removeClass(bn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
              }
              if (g(t).addClass(bn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), g(t).addClass(wn), t.parentNode && g(t.parentNode).hasClass(Sn)) {
                  var o = g(t).closest(An)[0];
                  if (o) {
                      var r = [].slice.call(o.querySelectorAll(Ln));
                      g(r).addClass(bn)
                  }
                  t.setAttribute("aria-expanded", !0)
              }
              n && n()
          }, i._jQueryInterface = function(n) {
              return this.each(function() {
                  var t = g(this),
                      e = t.data(En);
                  if (e || (e = new i(this), t.data(En, e)), "string" == typeof n) {
                      if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                      e[n]()
                  }
              })
          }, s(i, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }]), i
      }();
  g(document).on(Tn.CLICK_DATA_API, Pn, function(t) {
      t.preventDefault(), Hn._jQueryInterface.call(g(this), "show")
  }), g.fn.tab = Hn._jQueryInterface, g.fn.tab.Constructor = Hn, g.fn.tab.noConflict = function() {
      return g.fn.tab = Cn, Hn._jQueryInterface
  };
  var Rn = "toast",
      Un = "bs.toast",
      Wn = "." + Un,
      xn = g.fn[Rn],
      Fn = {
          CLICK_DISMISS: "click.dismiss" + Wn,
          HIDE: "hide" + Wn,
          HIDDEN: "hidden" + Wn,
          SHOW: "show" + Wn,
          SHOWN: "shown" + Wn
      },
      qn = "fade",
      Mn = "hide",
      Kn = "show",
      Qn = "showing",
      Bn = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
      },
      Vn = {
          animation: !0,
          autohide: !0,
          delay: 500
      },
      Yn = '[data-dismiss="toast"]',
      Xn = function() {
          function i(t, e) {
              this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
          }
          var t = i.prototype;
          return t.show = function() {
              var t = this;
              g(this._element).trigger(Fn.SHOW), this._config.animation && this._element.classList.add(qn);
              var e = function() {
                  t._element.classList.remove(Qn), t._element.classList.add(Kn), g(t._element).trigger(Fn.SHOWN), t._config.autohide && t.hide()
              };
              if (this._element.classList.remove(Mn), this._element.classList.add(Qn), this._config.animation) {
                  var n = _.getTransitionDurationFromElement(this._element);
                  g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
              } else e()
          }, t.hide = function(t) {
              var e = this;
              this._element.classList.contains(Kn) && (g(this._element).trigger(Fn.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                  e._close()
              }, this._config.delay))
          }, t.dispose = function() {
              clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Kn) && this._element.classList.remove(Kn), g(this._element).off(Fn.CLICK_DISMISS), g.removeData(this._element, Un), this._element = null, this._config = null
          }, t._getConfig = function(t) {
              return t = l({}, Vn, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Rn, t, this.constructor.DefaultType), t
          }, t._setListeners = function() {
              var t = this;
              g(this._element).on(Fn.CLICK_DISMISS, Yn, function() {
                  return t.hide(!0)
              })
          }, t._close = function() {
              var t = this,
                  e = function() {
                      t._element.classList.add(Mn), g(t._element).trigger(Fn.HIDDEN)
                  };
              if (this._element.classList.remove(Kn), this._config.animation) {
                  var n = _.getTransitionDurationFromElement(this._element);
                  g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
              } else e()
          }, i._jQueryInterface = function(n) {
              return this.each(function() {
                  var t = g(this),
                      e = t.data(Un);
                  if (e || (e = new i(this, "object" == typeof n && n), t.data(Un, e)), "string" == typeof n) {
                      if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                      e[n](this)
                  }
              })
          }, s(i, null, [{
              key: "VERSION",
              get: function() {
                  return "4.2.1"
              }
          }, {
              key: "DefaultType",
              get: function() {
                  return Bn
              }
          }]), i
      }();
  g.fn[Rn] = Xn._jQueryInterface, g.fn[Rn].Constructor = Xn, g.fn[Rn].noConflict = function() {
          return g.fn[Rn] = xn, Xn._jQueryInterface
      },
      function() {
          if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          var t = g.fn.jquery.split(" ")[0].split(".");
          if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Zt, t.Modal = me, t.Popover = Je, t.Scrollspy = vn, t.Tab = Hn, t.Toast = Xn, t.Tooltip = Ue, Object.defineProperty(t, "__esModule", {
          value: !0
      })
});
//# sourceMappingURL=bootstrap.min.js.map
/**
* downCount: Simple Countdown clock with offset
* Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
*/

! function(e) {
  e.fn.downCount = function(t, n) {
      function r() {
          var e = new Date(o.date),
              t = i(),
              r = e - t;
          if (0 > r) return clearInterval(a), void(n && "function" == typeof n && n());
          var d = 1e3,
              s = 60 * d,
              l = 60 * s,
              u = 24 * l,
              h = Math.floor(r / u),
              c = Math.floor(r % u / l),
              g = Math.floor(r % l / s),
              v = Math.floor(r % s / d);
          h = String(h).length >= 2 ? h : "0" + h, c = String(c).length >= 2 ? c : "0" + c, g = String(g).length >= 2 ? g : "0" + g, v = String(v).length >= 2 ? v : "0" + v;
          var x = 1 === h ? "Day" : "Days",
              D = 1 === c ? "Hour" : "Hours",
              y = 1 === g ? "Min" : "Mins",
              M = 1 === v ? "Sec" : "Secs";
          f.find(".days").text(h), f.find(".hours").text(c), f.find(".minutes").text(g), f.find(".seconds").text(v), f.find(".days_ref").text(x), f.find(".hours_ref").text(D), f.find(".minutes_ref").text(y), f.find(".seconds_ref").text(M)
      }
      var o = e.extend({
          date: null,
          offset: null
      }, t);
      o.date || e.error("Date is not defined."), Date.parse(o.date) || e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
      var f = this,
          i = function() {
              var e = new Date,
                  t = e.getTime() + 6e4 * e.getTimezoneOffset(),
                  n = new Date(t + 36e5 * o.offset);
              return n
          },
          a = setInterval(r, 1e3)
  }
}(jQuery);
/*!
*  GMAP3 Plugin for jQuery
*  Version   : 6.0.0
*  Date      : 2014-04-25
*  Author    : DEMONTE Jean-Baptiste
*  Contact   : jbdemonte@gmail.com
*  Web site  : http://gmap3.net
*  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
*  
*  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
*  All rights reserved.
*/
! function(t, n) {
  function e(t) {
      return "object" == typeof t
  }

  function o(t) {
      return "string" == typeof t
  }

  function i(t) {
      return "number" == typeof t
  }

  function a(t) {
      return t === n
  }

  function r() {
      q = google.maps, A || (A = {
          verbose: !1,
          queryLimit: {
              attempt: 5,
              delay: 250,
              random: 250
          },
          classes: function() {
              var n = {};
              return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(t, e) {
                  n[e] = q[e]
              }), n
          }(),
          map: {
              mapTypeId: q.MapTypeId.ROADMAP,
              center: [46.578498, 2.457275],
              zoom: 2
          },
          overlay: {
              pane: "floatPane",
              content: "",
              offset: {
                  x: 0,
                  y: 0
              }
          },
          geoloc: {
              getCurrentPosition: {
                  maximumAge: 6e4,
                  timeout: 5e3
              }
          }
      })
  }

  function s(t, n) {
      return a(t) ? "gmap3_" + (n ? Z + 1 : ++Z) : t
  }

  function u(t) {
      var n, e = q.version.split(".");
      for (t = t.split("."), n = 0; n < e.length; n++) e[n] = parseInt(e[n], 10);
      for (n = 0; n < t.length; n++) {
          if (t[n] = parseInt(t[n], 10), !e.hasOwnProperty(n)) return !1;
          if (e[n] < t[n]) return !1
      }
      return !0
  }

  function l(n, e, o, i, a) {
      function r(e, i) {
          e && t.each(e, function(t, e) {
              var r = n,
                  s = e;
              R(e) && (r = e[0], s = e[1]), i(o, t, function(t) {
                  s.apply(r, [a || o, t, u])
              })
          })
      }
      var s = e.td || {},
          u = {
              id: i,
              data: s.data,
              tag: s.tag
          };
      r(s.events, q.event.addListener), r(s.onces, q.event.addListenerOnce)
  }

  function d(t) {
      var n, e = [];
      for (n in t) t.hasOwnProperty(n) && e.push(n);
      return e
  }

  function c(t, n) {
      var e, o = arguments;
      for (e = 2; e < o.length; e++)
          if (n in o[e] && o[e].hasOwnProperty(n)) return void(t[n] = o[e][n])
  }

  function p(n, e) {
      var o, i, a = ["data", "tag", "id", "events", "onces"],
          r = {};
      if (n.td)
          for (o in n.td) n.td.hasOwnProperty(o) && "options" !== o && "values" !== o && (r[o] = n.td[o]);
      for (i = 0; i < a.length; i++) c(r, a[i], e, n.td);
      return r.options = t.extend({}, n.opts || {}, e.options || {}), r
  }

  function f() {
      if (A.verbose) {
          var t, n = [];
          if (window.console && z(console.error)) {
              for (t = 0; t < arguments.length; t++) n.push(arguments[t]);
              console.error.apply(console, n)
          } else {
              for (n = "", t = 0; t < arguments.length; t++) n += arguments[t].toString() + " ";
              alert(n)
          }
      }
  }

  function g(t) {
      return (i(t) || o(t)) && "" !== t && !isNaN(t)
  }

  function h(t) {
      var n, o = [];
      if (!a(t))
          if (e(t))
              if (i(t.length)) o = t;
              else
                  for (n in t) o.push(t[n]);
      else o.push(t);
      return o
  }

  function v(n) {
      return n ? z(n) ? n : (n = h(n), function(o) {
          var i;
          if (a(o)) return !1;
          if (e(o)) {
              for (i = 0; i < o.length; i++)
                  if (t.inArray(o[i], n) >= 0) return !0;
              return !1
          }
          return t.inArray(o, n) >= 0
      }) : void 0
  }

  function m(t, n, e) {
      var i = n ? t : null;
      return !t || o(t) ? i : t.latLng ? m(t.latLng) : t instanceof q.LatLng ? t : g(t.lat) ? new q.LatLng(t.lat, t.lng) : !e && R(t) && g(t[0]) && g(t[1]) ? new q.LatLng(t[0], t[1]) : i
  }

  function y(t) {
      var n, e;
      return !t || t instanceof q.LatLngBounds ? t || null : (R(t) ? 2 === t.length ? (n = m(t[0]), e = m(t[1])) : 4 === t.length && (n = m([t[0], t[1]]), e = m([t[2], t[3]])) : "ne" in t && "sw" in t ? (n = m(t.ne), e = m(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (n = m([t.n, t.e]), e = m([t.s, t.w])), n && e ? new q.LatLngBounds(e, n) : null)
  }

  function w(t, n, e, i, a) {
      var r = e ? m(i.td, !1, !0) : !1,
          s = r ? {
              latLng: r
          } : i.td.address ? o(i.td.address) ? {
              address: i.td.address
          } : i.td.address : !1,
          u = s ? G.get(s) : !1,
          l = this;
      s ? (a = a || 0, u ? (i.latLng = u.results[0].geometry.location, i.results = u.results, i.status = u.status, n.apply(t, [i])) : (s.location && (s.location = m(s.location)), s.bounds && (s.bounds = y(s.bounds)), M().geocode(s, function(o, r) {
          r === q.GeocoderStatus.OK ? (G.store(s, {
              results: o,
              status: r
          }), i.latLng = o[0].geometry.location, i.results = o, i.status = r, n.apply(t, [i])) : r === q.GeocoderStatus.OVER_QUERY_LIMIT && a < A.queryLimit.attempt ? setTimeout(function() {
              w.apply(l, [t, n, e, i, a + 1])
          }, A.queryLimit.delay + Math.floor(Math.random() * A.queryLimit.random)) : (f("geocode failed", r, s), i.latLng = i.results = !1, i.status = r, n.apply(t, [i]))
      }))) : (i.latLng = m(i.td, !1, !0), n.apply(t, [i]))
  }

  function L(n, e, o, i) {
      function a() {
          do s++; while (s < n.length && !("address" in n[s]));
          return s >= n.length ? void o.apply(e, [i]) : void w(r, function(e) {
              delete e.td, t.extend(n[s], e), a.apply(r, [])
          }, !0, {
              td: n[s]
          })
      }
      var r = this,
          s = -1;
      a()
  }

  function b(t, n, e) {
      var o = !1;
      navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(i) {
          o || (o = !0, e.latLng = new q.LatLng(i.coords.latitude, i.coords.longitude), n.apply(t, [e]))
      }, function() {
          o || (o = !0, e.latLng = !1, n.apply(t, [e]))
      }, e.opts.getCurrentPosition) : (e.latLng = !1, n.apply(t, [e]))
  }

  function x(t) {
      var n, o = !1;
      if (e(t) && t.hasOwnProperty("get")) {
          for (n in t)
              if ("get" !== n) return !1;
          o = !t.get.hasOwnProperty("callback")
      }
      return o
  }

  function M() {
      return V.geocoder || (V.geocoder = new q.Geocoder), V.geocoder
  }

  function I() {
      var t = [];
      this.get = function(n) {
          if (t.length) {
              var o, i, a, r, s, u = d(n);
              for (o = 0; o < t.length; o++) {
                  for (r = t[o], s = u.length === r.keys.length, i = 0; i < u.length && s; i++) a = u[i], s = a in r.request, s && (s = e(n[a]) && "equals" in n[a] && z(n[a]) ? n[a].equals(r.request[a]) : n[a] === r.request[a]);
                  if (s) return r.results
              }
          }
      }, this.store = function(n, e) {
          t.push({
              request: n,
              keys: d(n),
              results: e
          })
      }
  }

  function P() {
      var t = [],
          n = this;
      n.empty = function() {
          return !t.length
      }, n.add = function(n) {
          t.push(n)
      }, n.get = function() {
          return t.length ? t[0] : !1
      }, n.ack = function() {
          t.shift()
      }
  }

  function k() {
      function n(t) {
          return {
              id: t.id,
              name: t.name,
              object: t.obj,
              tag: t.tag,
              data: t.data
          }
      }

      function e(t) {
          z(t.setMap) && t.setMap(null), z(t.remove) && t.remove(), z(t.free) && t.free(), t = null
      }
      var o = {},
          i = {},
          r = this;
      r.add = function(t, n, e, a) {
          var u = t.td || {},
              l = s(u.id);
          return o[n] || (o[n] = []), l in i && r.clearById(l), i[l] = {
              obj: e,
              sub: a,
              name: n,
              id: l,
              tag: u.tag,
              data: u.data
          }, o[n].push(l), l
      }, r.getById = function(t, e, o) {
          var a = !1;
          return t in i && (a = e ? i[t].sub : o ? n(i[t]) : i[t].obj), a
      }, r.get = function(t, e, a, r) {
          var s, u, l = v(a);
          if (!o[t] || !o[t].length) return null;
          for (s = o[t].length; s;)
              if (s--, u = o[t][e ? s : o[t].length - s - 1], u && i[u]) {
                  if (l && !l(i[u].tag)) continue;
                  return r ? n(i[u]) : i[u].obj
              }
          return null
      }, r.all = function(t, e, r) {
          var s = [],
              u = v(e),
              l = function(t) {
                  var e, a;
                  for (e = 0; e < o[t].length; e++)
                      if (a = o[t][e], a && i[a]) {
                          if (u && !u(i[a].tag)) continue;
                          s.push(r ? n(i[a]) : i[a].obj)
                      }
              };
          if (t in o) l(t);
          else if (a(t))
              for (t in o) l(t);
          return s
      }, r.rm = function(t, n, e) {
          var a, s;
          if (!o[t]) return !1;
          if (n)
              if (e)
                  for (a = o[t].length - 1; a >= 0 && (s = o[t][a], !n(i[s].tag)); a--);
              else
                  for (a = 0; a < o[t].length && (s = o[t][a], !n(i[s].tag)); a++);
          else a = e ? o[t].length - 1 : 0;
          return a in o[t] ? r.clearById(o[t][a], a) : !1
      }, r.clearById = function(t, n) {
          if (t in i) {
              var r, s = i[t].name;
              for (r = 0; a(n) && r < o[s].length; r++) t === o[s][r] && (n = r);
              return e(i[t].obj), i[t].sub && e(i[t].sub), delete i[t], o[s].splice(n, 1), !0
          }
          return !1
      }, r.objGetById = function(t) {
          var n, e;
          if (o.clusterer)
              for (e in o.clusterer)
                  if ((n = i[o.clusterer[e]].obj.getById(t)) !== !1) return n;
          return !1
      }, r.objClearById = function(t) {
          var n;
          if (o.clusterer)
              for (n in o.clusterer)
                  if (i[o.clusterer[n]].obj.clearById(t)) return !0;
          return null
      }, r.clear = function(t, n, e, i) {
          var a, s, u, l = v(i);
          if (t && t.length) t = h(t);
          else {
              t = [];
              for (a in o) t.push(a)
          }
          for (s = 0; s < t.length; s++)
              if (u = t[s], n) r.rm(u, l, !0);
              else if (e) r.rm(u, l, !1);
          else
              for (; r.rm(u, l, !1););
      }, r.objClear = function(n, e, a, r) {
          var s;
          if (o.clusterer && (t.inArray("marker", n) >= 0 || !n.length))
              for (s in o.clusterer) i[o.clusterer[s]].obj.clear(e, a, r)
      }
  }

  function B(n, e, i) {
      function a(t) {
          var n = {};
          return n[t] = {}, n
      }

      function r() {
          var t;
          for (t in i)
              if (i.hasOwnProperty(t) && !u.hasOwnProperty(t)) return t
      }
      var s, u = {},
          l = this,
          d = {
              latLng: {
                  map: !1,
                  marker: !1,
                  infowindow: !1,
                  circle: !1,
                  overlay: !1,
                  getlatlng: !1,
                  getmaxzoom: !1,
                  getelevation: !1,
                  streetviewpanorama: !1,
                  getaddress: !0
              },
              geoloc: {
                  getgeoloc: !0
              }
          };
      o(i) && (i = a(i)), l.run = function() {
          for (var o, a; o = r();) {
              if (z(n[o])) return s = o, a = t.extend(!0, {}, A[o] || {}, i[o].options || {}), void(o in d.latLng ? i[o].values ? L(i[o].values, n, n[o], {
                  td: i[o],
                  opts: a,
                  session: u
              }) : w(n, n[o], d.latLng[o], {
                  td: i[o],
                  opts: a,
                  session: u
              }) : o in d.geoloc ? b(n, n[o], {
                  td: i[o],
                  opts: a,
                  session: u
              }) : n[o].apply(n, [{
                  td: i[o],
                  opts: a,
                  session: u
              }]));
              u[o] = null
          }
          e.apply(n, [i, u])
      }, l.ack = function(t) {
          u[s] = t, l.run.apply(l, [])
      }
  }

  function j() {
      return V.ds || (V.ds = new q.DirectionsService), V.ds
  }

  function O() {
      return V.dms || (V.dms = new q.DistanceMatrixService), V.dms
  }

  function C() {
      return V.mzs || (V.mzs = new q.MaxZoomService), V.mzs
  }

  function E() {
      return V.es || (V.es = new q.ElevationService), V.es
  }

  function S(t) {
      function n() {
          var t = this;
          return t.onAdd = function() {}, t.onRemove = function() {}, t.draw = function() {}, A.classes.OverlayView.apply(t, [])
      }
      n.prototype = A.classes.OverlayView.prototype;
      var e = new n;
      return e.setMap(t), e
  }

  function T(n, o, i) {
      function a(t) {
          T[t] || (delete _[t].options.map, T[t] = new A.classes.Marker(_[t].options), l(n, {
              td: _[t]
          }, T[t], _[t].id))
      }

      function r() {
          return (y = U.getProjection()) ? (P = !0, j.push(q.event.addListener(o, "zoom_changed", f)), j.push(q.event.addListener(o, "bounds_changed", f)), void h()) : void setTimeout(function() {
              r.apply(B, [])
          }, 25)
      }

      function u(t) {
          e(O[t]) ? (z(O[t].obj.setMap) && O[t].obj.setMap(null), z(O[t].obj.remove) && O[t].obj.remove(), z(O[t].shadow.remove) && O[t].obj.remove(), z(O[t].shadow.setMap) && O[t].shadow.setMap(null), delete O[t].obj, delete O[t].shadow) : T[t] && T[t].setMap(null), delete O[t]
      }

      function d() {
          var t, n, e, o, i, a, r, s, u = Math.cos,
              l = Math.sin,
              d = arguments;
          return d[0] instanceof q.LatLng ? (t = d[0].lat(), e = d[0].lng(), d[1] instanceof q.LatLng ? (n = d[1].lat(), o = d[1].lng()) : (n = d[1], o = d[2])) : (t = d[0], e = d[1], d[2] instanceof q.LatLng ? (n = d[2].lat(), o = d[2].lng()) : (n = d[2], o = d[3])), i = Math.PI * t / 180, a = Math.PI * e / 180, r = Math.PI * n / 180, s = Math.PI * o / 180, 6371e3 * Math.acos(Math.min(u(i) * u(r) * u(a) * u(s) + u(i) * l(a) * u(r) * l(s) + l(i) * l(r), 1))
      }

      function c() {
          var t = d(o.getCenter(), o.getBounds().getNorthEast()),
              n = new q.Circle({
                  center: o.getCenter(),
                  radius: 1.25 * t
              });
          return n.getBounds()
      }

      function p() {
          var t, n = {};
          for (t in O) n[t] = !0;
          return n
      }

      function f() {
          clearTimeout(m), m = setTimeout(h, 25)
      }

      function g(t) {
          var n = y.fromLatLngToDivPixel(t),
              e = y.fromDivPixelToLatLng(new q.Point(n.x + i.radius, n.y - i.radius)),
              o = y.fromDivPixelToLatLng(new q.Point(n.x - i.radius, n.y + i.radius));
          return new q.LatLngBounds(o, e)
      }

      function h() {
          if (!x && !I && P) {
              var n, e, a, r, s, l, d, f, h, v, m, y = !1,
                  b = [],
                  B = {},
                  j = o.getZoom(),
                  C = "maxZoom" in i && j > i.maxZoom,
                  E = p();
              for (M = !1, j > 3 && (s = c(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), n = 0; n < _.length; n++) !_[n] || y && !s.contains(_[n].options.position) || w && !w(D[n]) || b.push(n);
              for (;;) {
                  for (n = 0; B[n] && n < b.length;) n++;
                  if (n === b.length) break;
                  if (r = [], k && !C) {
                      m = 10;
                      do
                          for (f = r, r = [], m--, d = f.length ? s.getCenter() : _[b[n]].options.position, s = g(d), e = n; e < b.length; e++) B[e] || s.contains(_[b[e]].options.position) && r.push(e); while (f.length < r.length && r.length > 1 && m)
                  } else
                      for (e = n; e < b.length; e++)
                          if (!B[e]) {
                              r.push(e);
                              break
                          } for (l = {
                          indexes: [],
                          ref: []
                      }, h = v = 0, a = 0; a < r.length; a++) B[r[a]] = !0, l.indexes.push(b[r[a]]), l.ref.push(b[r[a]]), h += _[b[r[a]]].options.position.lat(), v += _[b[r[a]]].options.position.lng();
                  h /= r.length, v /= r.length, l.latLng = new q.LatLng(h, v), l.ref = l.ref.join("-"), l.ref in E ? delete E[l.ref] : (1 === r.length && (O[l.ref] = !0), L(l))
              }
              t.each(E, function(t) {
                  u(t)
              }), I = !1
          }
      }
      var m, y, w, L, b, x = !1,
          M = !1,
          I = !1,
          P = !1,
          k = !0,
          B = this,
          j = [],
          O = {},
          C = {},
          E = {},
          T = [],
          _ = [],
          D = [],
          U = S(o, i.radius);
      r(), B.getById = function(t) {
          return t in C ? (a(C[t]), T[C[t]]) : !1
      }, B.rm = function(t) {
          var n = C[t];
          T[n] && T[n].setMap(null), delete T[n], T[n] = !1, delete _[n], _[n] = !1, delete D[n], D[n] = !1, delete C[t], delete E[n], M = !0
      }, B.clearById = function(t) {
          return t in C ? (B.rm(t), !0) : void 0
      }, B.clear = function(t, n, e) {
          var o, i, a, r, s, u = [],
              l = v(e);
          for (t ? (o = _.length - 1, i = -1, a = -1) : (o = 0, i = _.length, a = 1), r = o; r !== i && (!_[r] || l && !l(_[r].tag) || (u.push(E[r]), !n && !t)); r += a);
          for (s = 0; s < u.length; s++) B.rm(u[s])
      }, B.add = function(t, n) {
          t.id = s(t.id), B.clearById(t.id), C[t.id] = T.length, E[T.length] = t.id, T.push(null), _.push(t), D.push(n), M = !0
      }, B.addMarker = function(t, e) {
          e = e || {}, e.id = s(e.id), B.clearById(e.id), e.options || (e.options = {}), e.options.position = t.getPosition(), l(n, {
              td: e
          }, t, e.id), C[e.id] = T.length, E[T.length] = e.id, T.push(t), _.push(e), D.push(e.data || {}), M = !0
      }, B.td = function(t) {
          return _[t]
      }, B.value = function(t) {
          return D[t]
      }, B.marker = function(t) {
          return t in T ? (a(t), T[t]) : !1
      }, B.markerIsSet = function(t) {
          return Boolean(T[t])
      }, B.setMarker = function(t, n) {
          T[t] = n
      }, B.store = function(t, n, e) {
          O[t.ref] = {
              obj: n,
              shadow: e
          }
      }, B.free = function() {
          var n;
          for (n = 0; n < j.length; n++) q.event.removeListener(j[n]);
          j = [], t.each(O, function(t) {
              u(t)
          }), O = {}, t.each(_, function(t) {
              _[t] = null
          }), _ = [], t.each(T, function(t) {
              T[t] && (T[t].setMap(null), delete T[t])
          }), T = [], t.each(D, function(t) {
              delete D[t]
          }), D = [], C = {}, E = {}
      }, B.filter = function(t) {
          w = t, h()
      }, B.enable = function(t) {
          k !== t && (k = t, h())
      }, B.display = function(t) {
          L = t
      }, B.error = function(t) {
          b = t
      }, B.beginUpdate = function() {
          x = !0
      }, B.endUpdate = function() {
          x = !1, M && h()
      }, B.autofit = function(t) {
          var n;
          for (n = 0; n < _.length; n++) _[n] && t.extend(_[n].options.position)
      }
  }

  function _(t, n) {
      var e = this;
      e.id = function() {
          return t
      }, e.filter = function(t) {
          n.filter(t)
      }, e.enable = function() {
          n.enable(!0)
      }, e.disable = function() {
          n.enable(!1)
      }, e.add = function(t, e, o) {
          o || n.beginUpdate(), n.addMarker(t, e), o || n.endUpdate()
      }, e.getById = function(t) {
          return n.getById(t)
      }, e.clearById = function(t, e) {
          var o;
          return e || n.beginUpdate(), o = n.clearById(t), e || n.endUpdate(), o
      }, e.clear = function(t, e, o, i) {
          i || n.beginUpdate(), n.clear(t, e, o), i || n.endUpdate()
      }
  }

  function D(n, e, o, i) {
      var a = this,
          r = [];
      A.classes.OverlayView.call(a), a.setMap(n), a.onAdd = function() {
          var n = a.getPanes();
          e.pane in n && t(n[e.pane]).append(i), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(n, e) {
              r.push(q.event.addDomListener(i[0], e, function(n) {
                  t.Event(n).stopPropagation(), q.event.trigger(a, e, [n]), a.draw()
              }))
          }), r.push(q.event.addDomListener(i[0], "contextmenu", function(n) {
              t.Event(n).stopPropagation(), q.event.trigger(a, "rightclick", [n]), a.draw()
          }))
      }, a.getPosition = function() {
          return o
      }, a.setPosition = function(t) {
          o = t, a.draw()
      }, a.draw = function() {
          var t = a.getProjection().fromLatLngToDivPixel(o);
          i.css("left", t.x + e.offset.x + "px").css("top", t.y + e.offset.y + "px")
      }, a.onRemove = function() {
          var t;
          for (t = 0; t < r.length; t++) q.event.removeListener(r[t]);
          i.remove()
      }, a.hide = function() {
          i.hide()
      }, a.show = function() {
          i.show()
      }, a.toggle = function() {
          i && (i.is(":visible") ? a.show() : a.hide())
      }, a.toggleDOM = function() {
          a.setMap(a.getMap() ? null : n)
      }, a.getDOMElement = function() {
          return i[0]
      }
  }

  function U(i) {
      function r() {
          !b && (b = M.get()) && b.run()
      }

      function d() {
          b = null, M.ack(), r.call(x)
      }

      function c(t) {
          var n, e = t.td.callback;
          e && (n = Array.prototype.slice.call(arguments, 1), z(e) ? e.apply(i, n) : R(e) && z(e[1]) && e[1].apply(e[0], n))
      }

      function g(t, n, e) {
          e && l(i, t, n, e), c(t, n), b.ack(n)
      }

      function v(n, e) {
          e = e || {};
          var o = e.td && e.td.options ? e.td.options : 0;
          S ? o && (o.center && (o.center = m(o.center)), S.setOptions(o)) : (o = e.opts || t.extend(!0, {}, A.map, o || {}), o.center = n || m(o.center), S = new A.classes.Map(i.get(0), o))
      }

      function w(e) {
          var o, a, r = new T(i, S, e),
              s = {},
              u = {},
              d = [],
              c = /^[0-9]+$/;
          for (a in e) c.test(a) ? (d.push(1 * a), u[a] = e[a], u[a].width = u[a].width || 0, u[a].height = u[a].height || 0) : s[a] = e[a];
          return d.sort(function(t, n) {
              return t > n
          }), o = s.calculator ? function(n) {
              var e = [];
              return t.each(n, function(t, n) {
                  e.push(r.value(n))
              }), s.calculator.apply(i, [e])
          } : function(t) {
              return t.length
          }, r.error(function() {
              f.apply(x, arguments)
          }), r.display(function(a) {
              var c, p, f, g, h, v, y = o(a.indexes);
              if (e.force || y > 1)
                  for (c = 0; c < d.length; c++) d[c] <= y && (p = u[d[c]]);
              p ? (h = p.offset || [-p.width / 2, -p.height / 2], f = t.extend({}, s), f.options = t.extend({
                  pane: "overlayLayer",
                  content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "",
                  offset: {
                      x: ("x" in h ? h.x : h[0]) || 0,
                      y: ("y" in h ? h.y : h[1]) || 0
                  }
              }, s.options || {}), g = x.overlay({
                  td: f,
                  opts: f.options,
                  latLng: m(a)
              }, !0), f.options.pane = "floatShadow", f.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({
                  cursor: "pointer"
              }), v = x.overlay({
                  td: f,
                  opts: f.options,
                  latLng: m(a)
              }, !0), s.data = {
                  latLng: m(a),
                  markers: []
              }, t.each(a.indexes, function(t, n) {
                  s.data.markers.push(r.value(n)), r.markerIsSet(n) && r.marker(n).setMap(null)
              }), l(i, {
                  td: s
              }, v, n, {
                  main: g,
                  shadow: v
              }), r.store(a, g, v)) : t.each(a.indexes, function(t, n) {
                  r.marker(n).setMap(S)
              })
          }), r
      }

      function L(n, e, o) {
          var a = [],
              r = "values" in n.td;
          return r || (n.td.values = [{
              options: n.opts
          }]), n.td.values.length ? (v(), t.each(n.td.values, function(t, r) {
              var s, u, d, c, f = p(n, r);
              if (f.options[o])
                  if (f.options[o][0][0] && R(f.options[o][0][0]))
                      for (u = 0; u < f.options[o].length; u++)
                          for (d = 0; d < f.options[o][u].length; d++) f.options[o][u][d] = m(f.options[o][u][d]);
                  else
                      for (u = 0; u < f.options[o].length; u++) f.options[o][u] = m(f.options[o][u]);
              f.options.map = S, c = new q[e](f.options), a.push(c), s = I.add({
                  td: f
              }, e.toLowerCase(), c), l(i, {
                  td: f
              }, c, s)
          }), void g(n, r ? a : a[0])) : void g(n, !1)
      }
      var b, x = this,
          M = new P,
          I = new k,
          S = null;
      x._plan = function(t) {
          var n;
          for (n = 0; n < t.length; n++) M.add(new B(x, d, t[n]));
          r()
      }, x.map = function(t) {
          v(t.latLng, t), l(i, t, S), g(t, S)
      }, x.destroy = function(t) {
          I.clear(), i.empty(), S && (S = null), g(t, !0)
      }, x.overlay = function(n, e) {
          var o = [],
              a = "values" in n.td;
          return a || (n.td.values = [{
              latLng: n.latLng,
              options: n.opts
          }]), n.td.values.length ? (D.__initialised || (D.prototype = new A.classes.OverlayView, D.__initialised = !0), t.each(n.td.values, function(a, r) {
              var s, u, d = p(n, r),
                  c = t(document.createElement("div")).css({
                      border: "none",
                      borderWidth: 0,
                      position: "absolute"
                  });
              c.append(d.options.content), u = new D(S, d.options, m(d) || m(r), c), o.push(u), c = null, e || (s = I.add(n, "overlay", u), l(i, {
                  td: d
              }, u, s))
          }), e ? o[0] : void g(n, a ? o : o[0])) : void g(n, !1)
      }, x.marker = function(n) {
          var e, o, a, r = "values" in n.td,
              u = !S;
          return r || (n.opts.position = n.latLng || m(n.opts.position), n.td.values = [{
              options: n.opts
          }]), n.td.values.length ? (u && v(), n.td.cluster && !S.getBounds() ? void q.event.addListenerOnce(S, "bounds_changed", function() {
              x.marker.apply(x, [n])
          }) : void(n.td.cluster ? (n.td.cluster instanceof _ ? (o = n.td.cluster, a = I.getById(o.id(), !0)) : (a = w(n.td.cluster), o = new _(s(n.td.id, !0), a), I.add(n, "clusterer", o, a)), a.beginUpdate(), t.each(n.td.values, function(t, e) {
              var o = p(n, e);
              o.options.position = m(o.options.position ? o.options.position : e), o.options.position && (o.options.map = S, u && (S.setCenter(o.options.position), u = !1), a.add(o, e))
          }), a.endUpdate(), g(n, o)) : (e = [], t.each(n.td.values, function(t, o) {
              var a, r, s = p(n, o);
              s.options.position = m(s.options.position ? s.options.position : o), s.options.position && (s.options.map = S, u && (S.setCenter(s.options.position), u = !1), r = new A.classes.Marker(s.options), e.push(r), a = I.add({
                  td: s
              }, "marker", r), l(i, {
                  td: s
              }, r, a))
          }), g(n, r ? e : e[0])))) : void g(n, !1)
      }, x.getroute = function(t) {
          t.opts.origin = m(t.opts.origin, !0), t.opts.destination = m(t.opts.destination, !0), j().route(t.opts, function(n, e) {
              c(t, e === q.DirectionsStatus.OK ? n : !1, e), b.ack()
          })
      }, x.getdistance = function(t) {
          var n;
          for (t.opts.origins = h(t.opts.origins), n = 0; n < t.opts.origins.length; n++) t.opts.origins[n] = m(t.opts.origins[n], !0);
          for (t.opts.destinations = h(t.opts.destinations), n = 0; n < t.opts.destinations.length; n++) t.opts.destinations[n] = m(t.opts.destinations[n], !0);
          O().getDistanceMatrix(t.opts, function(n, e) {
              c(t, e === q.DistanceMatrixStatus.OK ? n : !1, e), b.ack()
          })
      }, x.infowindow = function(e) {
          var o = [],
              r = "values" in e.td;
          r || (e.latLng && (e.opts.position = e.latLng), e.td.values = [{
              options: e.opts
          }]), t.each(e.td.values, function(t, s) {
              var u, d, c = p(e, s);
              c.options.position = m(c.options.position ? c.options.position : s.latLng), S || v(c.options.position), d = new A.classes.InfoWindow(c.options), d && (a(c.open) || c.open) && (r ? d.open(S, c.anchor || n) : d.open(S, c.anchor || (e.latLng ? n : e.session.marker ? e.session.marker : n))), o.push(d), u = I.add({
                  td: c
              }, "infowindow", d), l(i, {
                  td: c
              }, d, u)
          }), g(e, r ? o : o[0])
      }, x.circle = function(n) {
          var e = [],
              o = "values" in n.td;
          return o || (n.opts.center = n.latLng || m(n.opts.center), n.td.values = [{
              options: n.opts
          }]), n.td.values.length ? (t.each(n.td.values, function(t, o) {
              var a, r, s = p(n, o);
              s.options.center = m(s.options.center ? s.options.center : o), S || v(s.options.center), s.options.map = S, r = new A.classes.Circle(s.options), e.push(r), a = I.add({
                  td: s
              }, "circle", r), l(i, {
                  td: s
              }, r, a)
          }), void g(n, o ? e : e[0])) : void g(n, !1)
      }, x.getaddress = function(t) {
          c(t, t.results, t.status), b.ack()
      }, x.getlatlng = function(t) {
          c(t, t.results, t.status), b.ack()
      }, x.getmaxzoom = function(t) {
          C().getMaxZoomAtLatLng(t.latLng, function(n) {
              c(t, n.status === q.MaxZoomStatus.OK ? n.zoom : !1, status), b.ack()
          })
      }, x.getelevation = function(t) {
          var n, e = [],
              o = function(n, e) {
                  c(t, e === q.ElevationStatus.OK ? n : !1, e), b.ack()
              };
          if (t.latLng) e.push(t.latLng);
          else
              for (e = h(t.td.locations || []), n = 0; n < e.length; n++) e[n] = m(e[n]);
          if (e.length) E().getElevationForLocations({
              locations: e
          }, o);
          else {
              if (t.td.path && t.td.path.length)
                  for (n = 0; n < t.td.path.length; n++) e.push(m(t.td.path[n]));
              e.length ? E().getElevationAlongPath({
                  path: e,
                  samples: t.td.samples
              }, o) : b.ack()
          }
      }, x.defaults = function(n) {
          t.each(n.td, function(n, o) {
              A[n] = e(A[n]) ? t.extend({}, A[n], o) : o
          }), b.ack(!0)
      }, x.rectangle = function(n) {
          var e = [],
              o = "values" in n.td;
          return o || (n.td.values = [{
              options: n.opts
          }]), n.td.values.length ? (t.each(n.td.values, function(t, o) {
              var a, r, s = p(n, o);
              s.options.bounds = y(s.options.bounds ? s.options.bounds : o), S || v(s.options.bounds.getCenter()), s.options.map = S, r = new A.classes.Rectangle(s.options), e.push(r), a = I.add({
                  td: s
              }, "rectangle", r), l(i, {
                  td: s
              }, r, a)
          }), void g(n, o ? e : e[0])) : void g(n, !1)
      }, x.polyline = function(t) {
          L(t, "Polyline", "path")
      }, x.polygon = function(t) {
          L(t, "Polygon", "paths")
      }, x.trafficlayer = function(t) {
          v();
          var n = I.get("trafficlayer");
          n || (n = new A.classes.TrafficLayer, n.setMap(S), I.add(t, "trafficlayer", n)), g(t, n)
      }, x.bicyclinglayer = function(t) {
          v();
          var n = I.get("bicyclinglayer");
          n || (n = new A.classes.BicyclingLayer, n.setMap(S), I.add(t, "bicyclinglayer", n)), g(t, n)
      }, x.groundoverlay = function(t) {
          t.opts.bounds = y(t.opts.bounds), t.opts.bounds && v(t.opts.bounds.getCenter());
          var n, e = new A.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
          e.setMap(S), n = I.add(t, "groundoverlay", e), g(t, e, n)
      }, x.streetviewpanorama = function(n) {
          n.opts.opts || (n.opts.opts = {}), n.latLng ? n.opts.opts.position = n.latLng : n.opts.opts.position && (n.opts.opts.position = m(n.opts.opts.position)), n.td.divId ? n.opts.container = document.getElementById(n.td.divId) : n.opts.container && (n.opts.container = t(n.opts.container).get(0));
          var e, o = new A.classes.StreetViewPanorama(n.opts.container, n.opts.opts);
          o && S.setStreetView(o), e = I.add(n, "streetviewpanorama", o), g(n, o, e)
      }, x.kmllayer = function(n) {
          var e = [],
              o = "values" in n.td;
          return o || (n.td.values = [{
              options: n.opts
          }]), n.td.values.length ? (t.each(n.td.values, function(t, o) {
              var a, r, s, d = p(n, o);
              S || v(), s = d.options, d.options.opts && (s = d.options.opts, d.options.url && (s.url = d.options.url)), s.map = S, r = u("3.10") ? new A.classes.KmlLayer(s) : new A.classes.KmlLayer(s.url, s), e.push(r), a = I.add({
                  td: d
              }, "kmllayer", r), l(i, {
                  td: d
              }, r, a)
          }), void g(n, o ? e : e[0])) : void g(n, !1)
      }, x.panel = function(n) {
          v();
          var e, o, r = 0,
              s = 0,
              u = t(document.createElement("div"));
          u.css({
              position: "absolute",
              zIndex: 1e3,
              visibility: "hidden"
          }), n.opts.content && (o = t(n.opts.content), u.append(o), i.first().prepend(u), a(n.opts.left) ? a(n.opts.right) ? n.opts.center && (r = (i.width() - o.width()) / 2) : r = i.width() - o.width() - n.opts.right : r = n.opts.left, a(n.opts.top) ? a(n.opts.bottom) ? n.opts.middle && (s = (i.height() - o.height()) / 2) : s = i.height() - o.height() - n.opts.bottom : s = n.opts.top, u.css({
              top: s,
              left: r,
              visibility: "visible"
          })), e = I.add(n, "panel", u), g(n, u, e), u = null
      }, x.directionsrenderer = function(n) {
          n.opts.map = S;
          var e, o = new q.DirectionsRenderer(n.opts);
          n.td.divId ? o.setPanel(document.getElementById(n.td.divId)) : n.td.container && o.setPanel(t(n.td.container).get(0)), e = I.add(n, "directionsrenderer", o), g(n, o, e)
      }, x.getgeoloc = function(t) {
          g(t, t.latLng)
      }, x.styledmaptype = function(t) {
          v();
          var n = new A.classes.StyledMapType(t.td.styles, t.opts);
          S.mapTypes.set(t.td.id, n), g(t, n)
      }, x.imagemaptype = function(t) {
          v();
          var n = new A.classes.ImageMapType(t.opts);
          S.mapTypes.set(t.td.id, n), g(t, n)
      }, x.autofit = function(n) {
          var e = new q.LatLngBounds;
          t.each(I.all(), function(t, n) {
              n.getPosition ? e.extend(n.getPosition()) : n.getBounds ? (e.extend(n.getBounds().getNorthEast()), e.extend(n.getBounds().getSouthWest())) : n.getPaths ? n.getPaths().forEach(function(t) {
                  t.forEach(function(t) {
                      e.extend(t)
                  })
              }) : n.getPath ? n.getPath().forEach(function(t) {
                  e.extend(t)
              }) : n.getCenter ? e.extend(n.getCenter()) : "function" == typeof _ && n instanceof _ && (n = I.getById(n.id(), !0), n && n.autofit(e))
          }), e.isEmpty() || S.getBounds() && S.getBounds().equals(e) || ("maxZoom" in n.td && q.event.addListenerOnce(S, "bounds_changed", function() {
              this.getZoom() > n.td.maxZoom && this.setZoom(n.td.maxZoom)
          }), S.fitBounds(e)), g(n, !0)
      }, x.clear = function(n) {
          if (o(n.td)) {
              if (I.clearById(n.td) || I.objClearById(n.td)) return void g(n, !0);
              n.td = {
                  name: n.td
              }
          }
          n.td.id ? t.each(h(n.td.id), function(t, n) {
              I.clearById(n) || I.objClearById(n)
          }) : (I.clear(h(n.td.name), n.td.last, n.td.first, n.td.tag), I.objClear(h(n.td.name), n.td.last, n.td.first, n.td.tag)), g(n, !0)
      }, x.get = function(e, i, a) {
          var r, s, u = i ? e : e.td;
          return i || (a = u.full), o(u) ? (s = I.getById(u, !1, a) || I.objGetById(u), s === !1 && (r = u, u = {})) : r = u.name, "map" === r && (s = S), s || (s = [], u.id ? (t.each(h(u.id), function(t, n) {
              s.push(I.getById(n, !1, a) || I.objGetById(n))
          }), R(u.id) || (s = s[0])) : (t.each(r ? h(r) : [n], function(n, e) {
              var o;
              u.first ? (o = I.get(e, !1, u.tag, a), o && s.push(o)) : u.all ? t.each(I.all(e, u.tag, a), function(t, n) {
                  s.push(n)
              }) : (o = I.get(e, !0, u.tag, a), o && s.push(o))
          }), u.all || R(r) || (s = s[0]))), s = R(s) || !u.all ? s : [s], i ? s : void g(e, s)
      }, x.exec = function(n) {
          t.each(h(n.td.func), function(e, o) {
              t.each(x.get(n.td, !0, n.td.hasOwnProperty("full") ? n.td.full : !0), function(t, n) {
                  o.call(i, n)
              })
          }), g(n, !0)
      }, x.trigger = function(n) {
          if (o(n.td)) q.event.trigger(S, n.td);
          else {
              var e = [S, n.td.eventName];
              n.td.var_args && t.each(n.td.var_args, function(t, n) {
                  e.push(n)
              }), q.event.trigger.apply(q.event, e)
          }
          c(n), b.ack()
      }
  }
  var A, q, Z = 0,
      z = t.isFunction,
      R = t.isArray,
      V = {},
      G = new I;
  t.fn.gmap3 = function() {
      var n, e = [],
          o = !0,
          i = [];
      for (r(), n = 0; n < arguments.length; n++) arguments[n] && e.push(arguments[n]);
      return e.length || e.push("map"), t.each(this, function() {
          var n = t(this),
              a = n.data("gmap3");
          o = !1, a || (a = new U(n), n.data("gmap3", a)), 1 !== e.length || "get" !== e[0] && !x(e[0]) ? a._plan(e) : i.push("get" === e[0] ? a.get("map", !0) : a.get(e[0].get, !0, e[0].get.full))
      }), i.length ? 1 === i.length ? i[0] : i : this
  }
}(jQuery);
/*!
* imagesLoaded PACKAGED v4.1.1
* JavaScript is all like "You images are done yet or what?"
* MIT License
*/

! function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
      if (t && e) {
          var i = this._events = this._events || {},
              n = i[t] = i[t] || [];
          return -1 == n.indexOf(e) && n.push(e), this
      }
  }, e.once = function(t, e) {
      if (t && e) {
          this.on(t, e);
          var i = this._onceEvents = this._onceEvents || {},
              n = i[t] = i[t] || {};
          return n[e] = !0, this
      }
  }, e.off = function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this
      }
  }, e.emitEvent = function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
          var n = 0,
              o = i[n];
          e = e || [];
          for (var r = this._onceEvents && this._onceEvents[t]; o;) {
              var s = r && r[o];
              s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
          }
          return this
      }
  }, t
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
      return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
  function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t
  }

  function n(t) {
      var e = [];
      if (Array.isArray(t)) e = t;
      else if ("number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
      else e.push(t);
      return e
  }

  function o(t, e, r) {
      return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
          this.check()
      }.bind(this))) : new o(t, e, r)
  }

  function r(t) {
      this.img = t
  }

  function s(t, e) {
      this.url = t, this.element = e, this.img = new Image
  }
  var h = t.jQuery,
      a = t.console;
  o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
      this.images = [], this.elements.forEach(this.addElementImages, this)
  }, o.prototype.addElementImages = function(t) {
      "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
      var e = t.nodeType;
      if (e && d[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
              var o = i[n];
              this.addImage(o)
          }
          if ("string" == typeof this.options.background) {
              var r = t.querySelectorAll(this.options.background);
              for (n = 0; n < r.length; n++) {
                  var s = r[n];
                  this.addElementBackgroundImages(s)
              }
          }
      }
  };
  var d = {
      1: !0,
      9: !0,
      11: !0
  };
  return o.prototype.addElementBackgroundImages = function(t) {
      var e = getComputedStyle(t);
      if (e)
          for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
              var o = n && n[2];
              o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
          }
  }, o.prototype.addImage = function(t) {
      var e = new r(t);
      this.images.push(e)
  }, o.prototype.addBackground = function(t, e) {
      var i = new s(t, e);
      this.images.push(i)
  }, o.prototype.check = function() {
      function t(t, i, n) {
          setTimeout(function() {
              e.progress(t, i, n)
          })
      }
      var e = this;
      return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
          e.once("progress", t), e.check()
      }) : void this.complete()
  }, o.prototype.progress = function(t, e, i) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
  }, o.prototype.complete = function() {
      var t = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this)
      }
  }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
      var t = this.getIsImageComplete();
      return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, r.prototype.getIsImageComplete = function() {
      return this.img.complete && void 0 !== this.img.naturalWidth
  }, r.prototype.confirm = function(t, e) {
      this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
  }, r.prototype.handleEvent = function(t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
  }, r.prototype.onload = function() {
      this.confirm(!0, "onload"), this.unbindEvents()
  }, r.prototype.onerror = function() {
      this.confirm(!1, "onerror"), this.unbindEvents()
  }, r.prototype.unbindEvents = function() {
      this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
      this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
      var t = this.getIsImageComplete();
      t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function() {
      this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function(t, e) {
      this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
  }, o.makeJQueryPlugin = function(e) {
      e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function(t, e) {
          var i = new o(this, t, e);
          return i.jqDeferred.promise(h(this))
      })
  }, o.makeJQueryPlugin(), o
});
/*!
* Isotope PACKAGED v3.0.3
*
* Licensed GPLv3 for open source use
* or Isotope Commercial License for commercial use
*
* http://isotope.metafizzy.co
* Copyright 2017 Metafizzy
*/

! function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
      return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, s, a) {
      function u(t, e, n) {
          var o, s = "$()." + i + '("' + e + '")';
          return t.each(function(t, u) {
              var h = a.data(u, i);
              if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
              var d = h[e];
              if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
              var l = d.apply(h, n);
              o = void 0 === o ? l : o
          }), void 0 !== o ? o : t
      }

      function h(t, e) {
          t.each(function(t, n) {
              var o = a.data(n, i);
              o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
          })
      }
      a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
          a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
      }), a.fn[i] = function(t) {
          if ("string" == typeof t) {
              var e = o.call(arguments, 1);
              return u(this, t, e)
          }
          return h(this, t), this
      }, n(a))
  }

  function n(t) {
      !t || t && t.bridget || (t.bridget = i)
  }
  var o = Array.prototype.slice,
      s = t.console,
      r = "undefined" == typeof s ? function() {} : function(t) {
          s.error(t)
      };
  return n(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
      if (t && e) {
          var i = this._events = this._events || {},
              n = i[t] = i[t] || [];
          return n.indexOf(e) == -1 && n.push(e), this
      }
  }, e.once = function(t, e) {
      if (t && e) {
          this.on(t, e);
          var i = this._onceEvents = this._onceEvents || {},
              n = i[t] = i[t] || {};
          return n[e] = !0, this
      }
  }, e.off = function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
          var n = i.indexOf(e);
          return n != -1 && i.splice(n, 1), this
      }
  }, e.emitEvent = function(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
          var n = 0,
              o = i[n];
          e = e || [];
          for (var s = this._onceEvents && this._onceEvents[t]; o;) {
              var r = s && s[o];
              r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
          }
          return this
      }
  }, t
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
      return e()
  }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
      var e = parseFloat(t),
          i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e
  }

  function e() {}

  function i() {
      for (var t = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0
          }, e = 0; e < h; e++) {
          var i = u[e];
          t[i] = 0
      }
      return t
  }

  function n(t) {
      var e = getComputedStyle(t);
      return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
  }

  function o() {
      if (!d) {
          d = !0;
          var e = document.createElement("div");
          e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
          var i = document.body || document.documentElement;
          i.appendChild(e);
          var o = n(e);
          s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
      }
  }

  function s(e) {
      if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
          var s = n(e);
          if ("none" == s.display) return i();
          var a = {};
          a.width = e.offsetWidth, a.height = e.offsetHeight;
          for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
              var f = u[l],
                  m = s[f],
                  c = parseFloat(m);
              a[f] = isNaN(c) ? 0 : c
          }
          var p = a.paddingLeft + a.paddingRight,
              y = a.paddingTop + a.paddingBottom,
              g = a.marginLeft + a.marginRight,
              v = a.marginTop + a.marginBottom,
              _ = a.borderLeftWidth + a.borderRightWidth,
              I = a.borderTopWidth + a.borderBottomWidth,
              z = d && r,
              S = t(s.width);
          S !== !1 && (a.width = S + (z ? 0 : p + _));
          var x = t(s.height);
          return x !== !1 && (a.height = x + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
      }
  }
  var r, a = "undefined" == typeof console ? e : function(t) {
          console.error(t)
      },
      u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      h = u.length,
      d = !1;
  return s
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
          var n = e[i],
              o = n + "MatchesSelector";
          if (t[o]) return o
      }
  }();
  return function(e, i) {
      return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
      return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
      for (var i in e) t[i] = e[i];
      return t
  }, i.modulo = function(t, e) {
      return (t % e + e) % e
  }, i.makeArray = function(t) {
      var e = [];
      if (Array.isArray(t)) e = t;
      else if (t && "object" == typeof t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
      else e.push(t);
      return e
  }, i.removeFrom = function(t, e) {
      var i = t.indexOf(e);
      i != -1 && t.splice(i, 1)
  }, i.getParent = function(t, i) {
      for (; t != document.body;)
          if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
      return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
  }, i.filterFindElements = function(t, n) {
      t = i.makeArray(t);
      var o = [];
      return t.forEach(function(t) {
          if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
          }
      }), o
  }, i.debounceMethod = function(t, e, i) {
      var n = t.prototype[e],
          o = e + "Timeout";
      t.prototype[e] = function() {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
              s = this;
          this[o] = setTimeout(function() {
              n.apply(s, e), delete s[o]
          }, i || 100)
      }
  }, i.docReady = function(t) {
      var e = document.readyState;
      "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
      return t.replace(/(.)([A-Z])/g, function(t, e, i) {
          return e + "-" + i
      }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function(e, o) {
      i.docReady(function() {
          var s = i.toDashed(o),
              r = "data-" + s,
              a = document.querySelectorAll("[" + r + "]"),
              u = document.querySelectorAll(".js-" + s),
              h = i.makeArray(a).concat(i.makeArray(u)),
              d = r + "-options",
              l = t.jQuery;
          h.forEach(function(t) {
              var i, s = t.getAttribute(r) || t.getAttribute(d);
              try {
                  i = s && JSON.parse(s)
              } catch (a) {
                  return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
              }
              var u = new e(t, i);
              l && l.data(t, o, u)
          })
      })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
  "use strict";

  function i(t) {
      for (var e in t) return !1;
      return e = null, !0
  }

  function n(t, e) {
      t && (this.element = t, this.layout = e, this.position = {
          x: 0,
          y: 0
      }, this._create())
  }

  function o(t) {
      return t.replace(/([A-Z])/g, function(t) {
          return "-" + t.toLowerCase()
      })
  }
  var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend"
      }[r],
      h = {
          transform: a,
          transition: r,
          transitionDuration: r + "Duration",
          transitionProperty: r + "Property",
          transitionDelay: r + "Delay"
      },
      d = n.prototype = Object.create(t.prototype);
  d.constructor = n, d._create = function() {
      this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
      }, this.css({
          position: "absolute"
      })
  }, d.handleEvent = function(t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
  }, d.getSize = function() {
      this.size = e(this.element)
  }, d.css = function(t) {
      var e = this.element.style;
      for (var i in t) {
          var n = h[i] || i;
          e[n] = t[i]
      }
  }, d.getPosition = function() {
      var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          s = this.layout.size,
          r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
          a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
      r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
  }, d.layoutPosition = function() {
      var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[o];
      e[s] = this.getXValue(a), e[r] = "";
      var u = n ? "paddingTop" : "paddingBottom",
          h = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[u];
      e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function(t) {
      var e = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function(t) {
      var e = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function(t, e) {
      this.getPosition();
      var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10),
          r = o === this.position.x && s === this.position.y;
      if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
      var a = t - i,
          u = e - n,
          h = {};
      h.transform = this.getTranslate(a, u), this.transition({
          to: h,
          onTransitionEnd: {
              transform: this.layoutPosition
          },
          isCleaning: !0
      })
  }, d.getTranslate = function(t, e) {
      var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
      return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function(t, e) {
      this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
      this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
  }, d._nonTransition = function(t) {
      this.css(t.to), t.isCleaning && this._removeStyles(t.to);
      for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function(t) {
      if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
      var e = this._transn;
      for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
      for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
      if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null
      }
      this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + o(a);
  d.enableTransition = function() {
      if (!this.isTransitioning) {
          var t = this.layout.options.transitionDuration;
          t = "number" == typeof t ? t + "ms" : t, this.css({
              transitionProperty: l,
              transitionDuration: t,
              transitionDelay: this.staggerDelay || 0
          }), this.element.addEventListener(u, this, !1)
      }
  }, d.onwebkitTransitionEnd = function(t) {
      this.ontransitionend(t)
  }, d.onotransitionend = function(t) {
      this.ontransitionend(t)
  };
  var f = {
      "-webkit-transform": "transform"
  };
  d.ontransitionend = function(t) {
      if (t.target === this.element) {
          var e = this._transn,
              n = f[t.propertyName] || t.propertyName;
          if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
              var o = e.onEnd[n];
              o.call(this), delete e.onEnd[n]
          }
          this.emitEvent("transitionEnd", [this])
      }
  }, d.disableTransition = function() {
      this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(t) {
      var e = {};
      for (var i in t) e[i] = "";
      this.css(e)
  };
  var m = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
      this.css(m)
  }, d.stagger = function(t) {
      t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
          display: ""
      }), this.emitEvent("remove", [this])
  }, d.remove = function() {
      return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
          this.removeElem()
      }), void this.hide()) : void this.removeElem()
  }, d.reveal = function() {
      delete this.isHidden, this.css({
          display: ""
      });
      var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
      e[i] = this.onRevealTransitionEnd, this.transition({
          from: t.hiddenStyle,
          to: t.visibleStyle,
          isCleaning: !0,
          onTransitionEnd: e
      })
  }, d.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(t) {
      var e = this.layout.options[t];
      if (e.opacity) return "opacity";
      for (var i in e) return i
  }, d.hide = function() {
      this.isHidden = !0, this.css({
          display: ""
      });
      var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
      e[i] = this.onHideTransitionEnd, this.transition({
          from: t.visibleStyle,
          to: t.hiddenStyle,
          isCleaning: !0,
          onTransitionEnd: e
      })
  }, d.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
          display: "none"
      }), this.emitEvent("hide"))
  }, d.destroy = function() {
      this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
      })
  }, n
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
      return e(t, i, n, o, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
  "use strict";

  function s(t, e) {
      var i = n.getQueryElement(t);
      if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
      this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
      var o = ++l;
      this.element.outlayerGUID = o, f[o] = this, this._create();
      var s = this._getOption("initLayout");
      s && this.layout()
  }

  function r(t) {
      function e() {
          t.apply(this, arguments)
      }
      return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
          i = e && e[1],
          n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = c[n] || 1;
      return i * o
  }
  var u = t.console,
      h = t.jQuery,
      d = function() {},
      l = 0,
      f = {};
  s.namespace = "outlayer", s.Item = o, s.defaults = {
      containerStyle: {
          position: "relative"
      },
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
      },
      visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
      }
  };
  var m = s.prototype;
  n.extend(m, e.prototype), m.option = function(t) {
      n.extend(this.options, t)
  }, m._getOption = function(t) {
      var e = this.constructor.compatOptions[t];
      return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, s.compatOptions = {
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer"
  }, m._create = function() {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
      var t = this._getOption("resize");
      t && this.bindResize()
  }, m.reloadItems = function() {
      this.items = this._itemize(this.element.children)
  }, m._itemize = function(t) {
      for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
          var s = e[o],
              r = new i(s, this);
          n.push(r)
      }
      return n
  }, m._filterFindItemElements = function(t) {
      return n.filterFindElements(t, this.options.itemSelector)
  }, m.getItemElements = function() {
      return this.items.map(function(t) {
          return t.element
      })
  }, m.layout = function() {
      this._resetLayout(), this._manageStamps();
      var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
      this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, m._init = m.layout, m._resetLayout = function() {
      this.getSize()
  }, m.getSize = function() {
      this.size = i(this.element)
  }, m._getMeasurement = function(t, e) {
      var n, o = this.options[t];
      o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
  }, m.layoutItems = function(t, e) {
      t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, m._getItemsForLayout = function(t) {
      return t.filter(function(t) {
          return !t.isIgnored
      })
  }, m._layoutItems = function(t, e) {
      if (this._emitCompleteOnItems("layout", t), t && t.length) {
          var i = [];
          t.forEach(function(t) {
              var n = this._getItemLayoutPosition(t);
              n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
          }, this), this._processLayoutQueue(i)
      }
  }, m._getItemLayoutPosition = function() {
      return {
          x: 0,
          y: 0
      }
  }, m._processLayoutQueue = function(t) {
      this.updateStagger(), t.forEach(function(t, e) {
          this._positionItem(t.item, t.x, t.y, t.isInstant, e)
      }, this)
  }, m.updateStagger = function() {
      var t = this.options.stagger;
      return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, m._positionItem = function(t, e, i, n, o) {
      n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
  }, m._postLayout = function() {
      this.resizeContainer()
  }, m.resizeContainer = function() {
      var t = this._getOption("resizeContainer");
      if (t) {
          var e = this._getContainerSize();
          e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
      }
  }, m._getContainerSize = d, m._setContainerMeasure = function(t, e) {
      if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
      }
  }, m._emitCompleteOnItems = function(t, e) {
      function i() {
          o.dispatchEvent(t + "Complete", null, [e])
      }

      function n() {
          r++, r == s && i()
      }
      var o = this,
          s = e.length;
      if (!e || !s) return void i();
      var r = 0;
      e.forEach(function(e) {
          e.once(t, n)
      })
  }, m.dispatchEvent = function(t, e, i) {
      var n = e ? [e].concat(i) : i;
      if (this.emitEvent(t, n), h)
          if (this.$element = this.$element || h(this.element), e) {
              var o = h.Event(e);
              o.type = t, this.$element.trigger(o, i)
          } else this.$element.trigger(t, i)
  }, m.ignore = function(t) {
      var e = this.getItem(t);
      e && (e.isIgnored = !0)
  }, m.unignore = function(t) {
      var e = this.getItem(t);
      e && delete e.isIgnored
  }, m.stamp = function(t) {
      t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, m.unstamp = function(t) {
      t = this._find(t), t && t.forEach(function(t) {
          n.removeFrom(this.stamps, t), this.unignore(t)
      }, this)
  }, m._find = function(t) {
      if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)
  }, m._manageStamps = function() {
      this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, m._getBoundingRect = function() {
      var t = this.element.getBoundingClientRect(),
          e = this.size;
      this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
      }
  }, m._manageStamp = d, m._getElementOffset = function(t) {
      var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          s = {
              left: e.left - n.left - o.marginLeft,
              top: e.top - n.top - o.marginTop,
              right: n.right - e.right - o.marginRight,
              bottom: n.bottom - e.bottom - o.marginBottom
          };
      return s
  }, m.handleEvent = n.handleEvent, m.bindResize = function() {
      t.addEventListener("resize", this), this.isResizeBound = !0
  }, m.unbindResize = function() {
      t.removeEventListener("resize", this), this.isResizeBound = !1
  }, m.onresize = function() {
      this.resize()
  }, n.debounceMethod(s, "onresize", 100), m.resize = function() {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, m.needsResizeLayout = function() {
      var t = i(this.element),
          e = this.size && t;
      return e && t.innerWidth !== this.size.innerWidth
  }, m.addItems = function(t) {
      var e = this._itemize(t);
      return e.length && (this.items = this.items.concat(e)), e
  }, m.appended = function(t) {
      var e = this.addItems(t);
      e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, m.prepended = function(t) {
      var e = this._itemize(t);
      if (e.length) {
          var i = this.items.slice(0);
          this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
      }
  }, m.reveal = function(t) {
      if (this._emitCompleteOnItems("reveal", t), t && t.length) {
          var e = this.updateStagger();
          t.forEach(function(t, i) {
              t.stagger(i * e), t.reveal()
          })
      }
  }, m.hide = function(t) {
      if (this._emitCompleteOnItems("hide", t), t && t.length) {
          var e = this.updateStagger();
          t.forEach(function(t, i) {
              t.stagger(i * e), t.hide()
          })
      }
  }, m.revealItemElements = function(t) {
      var e = this.getItems(t);
      this.reveal(e)
  }, m.hideItemElements = function(t) {
      var e = this.getItems(t);
      this.hide(e)
  }, m.getItem = function(t) {
      for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i
      }
  }, m.getItems = function(t) {
      t = n.makeArray(t);
      var e = [];
      return t.forEach(function(t) {
          var i = this.getItem(t);
          i && e.push(i)
      }, this), e
  }, m.remove = function(t) {
      var e = this.getItems(t);
      this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
          t.remove(), n.removeFrom(this.items, t)
      }, this)
  }, m.destroy = function() {
      var t = this.element.style;
      t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
          t.destroy()
      }), this.unbindResize();
      var e = this.element.outlayerGUID;
      delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
  }, s.data = function(t) {
      t = n.getQueryElement(t);
      var e = t && t.outlayerGUID;
      return e && f[e]
  }, s.create = function(t, e) {
      var i = r(s);
      return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
  };
  var c = {
      ms: 1,
      s: 1e3
  };
  return s.Item = o, s
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
  "use strict";

  function e() {
      t.Item.apply(this, arguments)
  }
  var i = e.prototype = Object.create(t.Item.prototype),
      n = i._create;
  i._create = function() {
      this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
  }, i.updateSortData = function() {
      if (!this.isIgnored) {
          this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
          var t = this.layout.options.getSortData,
              e = this.layout._sorters;
          for (var i in t) {
              var n = e[i];
              this.sortData[i] = n(this.element, this)
          }
      }
  };
  var o = i.destroy;
  return i.destroy = function() {
      o.apply(this, arguments), this.css({
          display: ""
      })
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
  "use strict";

  function i(t) {
      this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  var n = i.prototype,
      o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return o.forEach(function(t) {
      n[t] = function() {
          return e.prototype[t].apply(this.isotope, arguments)
      }
  }), n.needsVerticalResizeLayout = function() {
      var e = t(this.isotope.element),
          i = this.isotope.size && e;
      return i && e.innerHeight != this.isotope.size.innerHeight
  }, n._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments)
  }, n.getColumnWidth = function() {
      this.getSegmentSize("column", "Width")
  }, n.getRowHeight = function() {
      this.getSegmentSize("row", "Height")
  }, n.getSegmentSize = function(t, e) {
      var i = t + e,
          n = "outer" + e;
      if (this._getMeasurement(i, n), !this[i]) {
          var o = this.getFirstItemSize();
          this[i] = o && o[n] || this.isotope.size["inner" + e]
      }
  }, n.getFirstItemSize = function() {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element)
  }, n.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments)
  }, n.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function(t, e) {
      function o() {
          i.apply(this, arguments)
      }
      return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var t = 0; t < this.cols; t++) this.colYs.push(0);
      this.maxY = 0
  }, i.prototype.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
          var t = this.items[0],
              i = t && t.element;
          this.columnWidth = i && e(i).outerWidth || this.containerWidth
      }
      var n = this.columnWidth += this.gutter,
          o = this.containerWidth + this.gutter,
          s = o / n,
          r = n - o % n,
          a = r && r < 1 ? "round" : "floor";
      s = Math[a](s), this.cols = Math.max(s, 1)
  }, i.prototype.getContainerWidth = function() {
      var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
      this.containerWidth = n && n.innerWidth
  }, i.prototype._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
      n = Math.min(n, this.cols);
      for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
              x: this.columnWidth * r,
              y: s
          }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; d < h; d++) this.colYs[r + d] = u;
      return a
  }, i.prototype._getColGroup = function(t) {
      if (t < 2) return this.colYs;
      for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
          var o = this.colYs.slice(n, n + t);
          e[n] = Math.max.apply(Math, o)
      }
      return e
  }, i.prototype._manageStamp = function(t) {
      var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          s = o ? n.left : n.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
      a = Math.max(0, a);
      var u = Math.floor(r / this.columnWidth);
      u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
      for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, i.prototype._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t = {
          height: this.maxY
      };
      return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, i.prototype._getContainerFitWidth = function() {
      for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
      return (this.cols - t) * this.columnWidth - this.gutter
  }, i.prototype.needsResizeLayout = function() {
      var t = this.containerWidth;
      return this.getContainerWidth(), t != this.containerWidth
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
  "use strict";
  var i = t.create("masonry"),
      n = i.prototype,
      o = {
          _getElementOffset: !0,
          layout: !0,
          _getMeasurement: !0
      };
  for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
  var r = n.measureColumns;
  n.measureColumns = function() {
      this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = n._getOption;
  return n._getOption = function(t) {
      return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("fitRows"),
      i = e.prototype;
  return i._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
      var n = {
          x: this.x,
          y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
  }, i._getContainerSize = function() {
      return {
          height: this.maxY
      }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("vertical", {
          horizontalAlignment: 0
      }),
      i = e.prototype;
  return i._resetLayout = function() {
      this.y = 0
  }, i._getItemLayoutPosition = function(t) {
      t.getSize();
      var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
          i = this.y;
      return this.y += t.size.outerHeight, {
          x: e,
          y: i
      }
  }, i._getContainerSize = function() {
      return {
          height: this.y
      }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
      return e(t, i, n, o, s, r, a)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, s, r) {
  function a(t, e) {
      return function(i, n) {
          for (var o = 0; o < t.length; o++) {
              var s = t[o],
                  r = i.sortData[s],
                  a = n.sortData[s];
              if (r > a || r < a) {
                  var u = void 0 !== e[s] ? e[s] : e,
                      h = u ? 1 : -1;
                  return (r > a ? 1 : -1) * h
              }
          }
          return 0
      }
  }
  var u = t.jQuery,
      h = String.prototype.trim ? function(t) {
          return t.trim()
      } : function(t) {
          return t.replace(/^\s+|\s+$/g, "")
      },
      d = e.create("isotope", {
          layoutMode: "masonry",
          isJQueryFiltering: !0,
          sortAscending: !0
      });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function() {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
      for (var t in r.modes) this._initLayoutMode(t)
  }, l.reloadItems = function() {
      this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, l._itemize = function() {
      for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
          var n = t[i];
          n.id = this.itemGUID++
      }
      return this._updateItemsSortData(t), t
  }, l._initLayoutMode = function(t) {
      var e = r.modes[t],
          i = this.options[t] || {};
      this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, l.layout = function() {
      return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
  }, l._layout = function() {
      var t = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, l.arrange = function(t) {
      this.option(t), this._getIsInstant();
      var e = this._filter(this.items);
      this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
  }, l._init = l.arrange, l._hideReveal = function(t) {
      this.reveal(t.needReveal), this.hide(t.needHide)
  }, l._getIsInstant = function() {
      var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
      return this._isInstant = e, e
  }, l._bindArrangeComplete = function() {
      function t() {
          e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
      }
      var e, i, n, o = this;
      this.once("layoutComplete", function() {
          e = !0, t()
      }), this.once("hideComplete", function() {
          i = !0, t()
      }), this.once("revealComplete", function() {
          n = !0, t()
      })
  }, l._filter = function(t) {
      var e = this.options.filter;
      e = e || "*";
      for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
          var a = t[r];
          if (!a.isIgnored) {
              var u = s(a);
              u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
          }
      }
      return {
          matches: i,
          needReveal: n,
          needHide: o
      }
  }, l._getFilterTest = function(t) {
      return u && this.options.isJQueryFiltering ? function(e) {
          return u(e.element).is(t)
      } : "function" == typeof t ? function(e) {
          return t(e.element)
      } : function(e) {
          return n(e.element, t)
      }
  }, l.updateSortData = function(t) {
      var e;
      t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
  }, l._getSorters = function() {
      var t = this.options.getSortData;
      for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i)
      }
  }, l._updateItemsSortData = function(t) {
      for (var e = t && t.length, i = 0; e && i < e; i++) {
          var n = t[i];
          n.updateSortData()
      }
  };
  var f = function() {
      function t(t) {
          if ("string" != typeof t) return t;
          var i = h(t).split(" "),
              n = i[0],
              o = n.match(/^\[(.+)\]$/),
              s = o && o[1],
              r = e(s, n),
              a = d.sortDataParsers[i[1]];
          return t = a ? function(t) {
              return t && a(r(t))
          } : function(t) {
              return t && r(t)
          }
      }

      function e(t, e) {
          return t ? function(e) {
              return e.getAttribute(t)
          } : function(t) {
              var i = t.querySelector(e);
              return i && i.textContent
          }
      }
      return t
  }();
  d.sortDataParsers = {
      parseInt: function(t) {
          return parseInt(t, 10)
      },
      parseFloat: function(t) {
          return parseFloat(t)
      }
  }, l._sort = function() {
      if (this.options.sortBy) {
          var t = o.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e)
      }
  }, l._getIsSameSortBy = function(t) {
      for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
      return !0
  }, l._mode = function() {
      var t = this.options.layoutMode,
          e = this.modes[t];
      if (!e) throw new Error("No layout mode: " + t);
      return e.options = this.options[t], e
  }, l._resetLayout = function() {
      e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, l._getItemLayoutPosition = function(t) {
      return this._mode()._getItemLayoutPosition(t)
  }, l._manageStamp = function(t) {
      this._mode()._manageStamp(t)
  }, l._getContainerSize = function() {
      return this._mode()._getContainerSize()
  }, l.needsResizeLayout = function() {
      return this._mode().needsResizeLayout()
  }, l.appended = function(t) {
      var e = this.addItems(t);
      if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i)
      }
  }, l.prepended = function(t) {
      var e = this._itemize(t);
      if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
      }
  }, l._filterRevealAdded = function(t) {
      var e = this._filter(t);
      return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, l.insert = function(t) {
      var e = this.addItems(t);
      if (e.length) {
          var i, n, o = e.length;
          for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
          var s = this._filter(e).matches;
          for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
          this.reveal(s)
      }
  };
  var m = l.remove;
  return l.remove = function(t) {
      t = o.makeArray(t);
      var e = this.getItems(t);
      m.call(this, t);
      for (var i = e && e.length, n = 0; i && n < i; n++) {
          var s = e[n];
          o.removeFrom(this.filteredItems, s)
      }
  }, l.shuffle = function() {
      for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random()
      }
      this.options.sortBy = "random", this._sort(), this._layout()
  }, l._noTransition = function(t, e) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var n = t.apply(this, e);
      return this.options.transitionDuration = i, n
  }, l.getFilteredItemElements = function() {
      return this.filteredItems.map(function(t) {
          return t.element
      })
  }, d
});
! function(t, e) {
  "function" == typeof define && define.amd ? define([], e(t)) : "object" == typeof exports ? module.exports = e(t) : t.iziToast = e(t)
}("undefined" != typeof global ? global : this.window || this.global, function(t) {
  "use strict";
  var e = {},
      o = "iziToast",
      n = (document.querySelector("body"), !!/Mobi/.test(navigator.userAgent)),
      i = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
      s = "undefined" != typeof InstallTrigger,
      a = "ontouchstart" in document.documentElement,
      r = ["bottomRight", "bottomLeft", "bottomCenter", "topRight", "topLeft", "topCenter", "center"],
      l = {
          info: {
              color: "blue",
              icon: "ico-info"
          },
          success: {
              color: "green",
              icon: "ico-check"
          },
          warning: {
              color: "yellow",
              icon: "ico-warning"
          },
          error: {
              color: "red",
              icon: "ico-error"
          }
      },
      d = 568,
      c = {},
      u = {
          id: "",
          "class": "",
          title: "",
          titleColor: "",
          titleSize: "",
          titleLineHeight: "",
          message: "",
          messageColor: "",
          messageSize: "",
          messageLineHeight: "",
          backgroundColor: "",
          color: "",
          icon: "",
          iconText: "",
          iconColor: "",
          image: "",
          imageWidth: 50,
          maxWidth: null,
          zindex: null,
          layout: 1,
          balloon: !1,
          close: !0,
          rtl: !1,
          position: "bottomRight",
          target: "",
          targetFirst: !0,
          timeout: 5e3,
          drag: !0,
          pauseOnHover: !0,
          resetOnHover: !1,
          progressBar: !0,
          progressBarColor: "",
          animateInside: !0,
          buttons: {},
          transitionIn: "fadeInUp",
          transitionOut: "fadeOut",
          transitionInMobile: "fadeInUp",
          transitionOutMobile: "fadeOutDown",
          onOpen: function() {},
          onClose: function() {}
      };
  if ("remove" in Element.prototype || (Element.prototype.remove = function() {
          this.parentNode && this.parentNode.removeChild(this)
      }), "function" != typeof window.CustomEvent) {
      var p = function(t, e) {
          e = e || {
              bubbles: !1,
              cancelable: !1,
              detail: void 0
          };
          var o = document.createEvent("CustomEvent");
          return o.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), o
      };
      p.prototype = window.Event.prototype, window.CustomEvent = p
  }
  var m = function(t, e, o) {
          if ("[object Object]" === Object.prototype.toString.call(t))
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.call(o, t[n], n, t);
          else if (t)
              for (var i = 0, s = t.length; s > i; i++) e.call(o, t[i], i, t)
      },
      f = function(t, e) {
          var o = {};
          return m(t, function(e, n) {
              o[n] = t[n]
          }), m(e, function(t, n) {
              o[n] = e[n]
          }), o
      },
      g = function(t) {
          var e = document.createDocumentFragment(),
              o = document.createElement("div");
          for (o.innerHTML = t; o.firstChild;) e.appendChild(o.firstChild);
          return e
      },
      v = function(t) {
          return "#" == t.substring(0, 1) || "rgb" == t.substring(0, 3) || "hsl" == t.substring(0, 3)
      },
      h = function() {
          return {
              move: function(t, e, o, n) {
                  var a, r = .3,
                      l = 180;
                  t.style.transform = "translateX(" + n + "px)", n > 0 ? (a = (l - n) / l, r > a && e.hide(f(o, {
                      transitionOut: "fadeOutRight",
                      transitionOutMobile: "fadeOutRight"
                  }), t, "drag")) : (a = (l + n) / l, r > a && e.hide(f(o, {
                      transitionOut: "fadeOutLeft",
                      transitionOutMobile: "fadeOutLeft"
                  }), t, "drag")), t.style.opacity = a, r > a && ((i || s) && (t.style.left = n + "px"), t.parentNode.style.opacity = r, this.stopMoving(t, null))
              },
              startMoving: function(t, e, o, n) {
                  n = n || window.event;
                  var i = a ? n.touches[0].clientX : n.clientX,
                      s = t.style.transform.replace("px)", "");
                  s = s.replace("translateX(", "");
                  var r = i - s;
                  t.classList.remove(o.transitionIn), t.classList.remove(o.transitionInMobile), t.style.transition = "", a ? document.ontouchmove = function(n) {
                      n.preventDefault(), n = n || window.event;
                      var i = n.touches[0].clientX,
                          s = i - r;
                      h.move(t, e, o, s)
                  } : document.onmousemove = function(n) {
                      n.preventDefault(), n = n || window.event;
                      var i = n.clientX,
                          s = i - r;
                      h.move(t, e, o, s)
                  }
              },
              stopMoving: function(t, e) {
                  a ? document.ontouchmove = function() {} : document.onmousemove = function() {}, t.style.transition = "transform 0.4s ease, opacity 0.4s ease", t.style.opacity = "", t.style.transform = "", window.setTimeout(function() {
                      t.style.transition = ""
                  }, 400)
              }
          }
      }(),
      y = function(t, e, n) {
          var i = t.querySelector("." + o + "-progressbar div"),
              s = null,
              a = {
                  Paused: !1,
                  Reseted: !1,
                  Closed: !1
              },
              r = {
                  hideEta: null,
                  maxHideTime: null,
                  currentTime: (new Date).getTime(),
                  updateProgress: function() {
                      if (a.Paused = !!t.classList.contains(o + "-paused"), a.Reseted = !!t.classList.contains(o + "-reseted"), a.Closed = !!t.classList.contains(o + "-closed"), a.Reseted && (clearTimeout(s), i.style.width = "100%", y(t, e, n), t.classList.remove(o + "-reseted")), a.Closed && (clearTimeout(s), t.classList.remove(o + "-closed")), !a.Paused && !a.Reseted && !a.Closed) {
                          r.currentTime = r.currentTime + 10;
                          var l = (r.hideEta - r.currentTime) / r.maxHideTime * 100;
                          i.style.width = l + "%", (Math.round(l) < 0 || "object" != typeof t) && (clearTimeout(s), n.apply())
                      }
                  }
              };
          e.timeout > 0 && (r.maxHideTime = parseFloat(e.timeout), r.hideEta = (new Date).getTime() + r.maxHideTime, s = setInterval(r.updateProgress, 10))
      };
  return e.destroy = function() {
      m(document.querySelectorAll("." + o + "-wrapper"), function(t, e) {
          t.remove()
      }), m(document.querySelectorAll("." + o), function(t, e) {
          t.remove()
      }), document.removeEventListener(o + "-open", {}, !1), document.removeEventListener(o + "-close", {}, !1), c = {}
  }, e.settings = function(t) {
      e.destroy(), c = t, u = f(u, t || {})
  }, m(l, function(t, o) {
      e[o] = function(e) {
          var o = f(c, e || {});
          o = f(t, o || {}), this.show(o)
      }
  }), e.hide = function(t, e, i) {
      var s = f(u, t || {});
      i = i || !1, "object" != typeof e && (e = document.querySelector(e)), e.classList.add(o + "-closed"), (s.transitionIn || s.transitionInMobile) && (e.classList.remove(s.transitionIn), e.classList.remove(s.transitionInMobile)), n || window.innerWidth <= d ? s.transitionOutMobile && e.classList.add(s.transitionOutMobile) : s.transitionOut && e.classList.add(s.transitionOut);
      var a = e.parentNode.offsetHeight;
      e.parentNode.style.height = a + "px", e.style.pointerEvents = "none", (!n || window.innerWidth > d) && (e.parentNode.style.transitionDelay = "0.2s"), setTimeout(function() {
          e.parentNode.style.height = "0px", e.parentNode.style.overflow = "", window.setTimeout(function() {
              e.parentNode.remove()
          }, 1e3)
      }, 200);
      try {
          s.closedBy = i;
          var r = new CustomEvent(o + "-close", {
              detail: s,
              bubles: !0,
              cancelable: !0
          });
          document.dispatchEvent(r)
      } catch (l) {
          console.warn(l)
      }
      "undefined" != typeof s.onClose && s.onClose.apply(null, [s, e, i])
  }, e.show = function(t) {
      var e = this,
          i = f(c, t || {});
      i = f(u, i);
      var s = {
          toast: document.createElement("div"),
          toastBody: document.createElement("div"),
          toastCapsule: document.createElement("div"),
          icon: document.createElement("i"),
          cover: document.createElement("div"),
          strong: document.createElement("strong"),
          p: document.createElement("p"),
          progressBar: document.createElement("div"),
          progressBarDiv: document.createElement("div"),
          buttonClose: document.createElement("button"),
          buttons: document.createElement("div"),
          wrapper: null
      };
      s.toastBody.appendChild(s.strong), s.toastBody.appendChild(s.p), s.toast.appendChild(s.toastBody), s.toastCapsule.appendChild(s.toast),
          function() {
              if (s.toast.classList.add(o), s.toastCapsule.classList.add(o + "-capsule"), s.toastBody.classList.add(o + "-body"), n || window.innerWidth <= d ? i.transitionInMobile && s.toast.classList.add(i.transitionInMobile) : i.transitionIn && s.toast.classList.add(i.transitionIn), i["class"]) {
                  var t = i["class"].split(" ");
                  m(t, function(t, e) {
                      s.toast.classList.add(t)
                  })
              }
              i.id && (s.toast.id = i.id), i.rtl && s.toast.classList.add(o + "-rtl"), i.layout > 1 && s.toast.classList.add(o + "-layout" + i.layout), i.balloon && s.toast.classList.add(o + "-balloon"), i.maxWidth && (isNaN(i.maxWidth) ? s.toast.style.maxWidth = i.maxWidth : s.toast.style.maxWidth = i.maxWidth + "px"), i.color && (v(i.color) ? s.toast.style.background = i.color : s.toast.classList.add(o + "-color-" + i.color)), i.backgroundColor && (s.toast.style.background = i.backgroundColor, i.balloon && (s.toast.style.borderColor = i.backgroundColor))
          }(),
          function() {
              i.image && (s.cover.classList.add(o + "-cover"), s.cover.style.width = i.imageWidth + "px", s.cover.style.backgroundImage = "url(" + i.image + ")", i.rtl ? s.toastBody.style.marginRight = i.imageWidth + 10 + "px" : s.toastBody.style.marginLeft = i.imageWidth + 10 + "px", s.toast.appendChild(s.cover))
          }(),
          function() {
              i.close ? (s.buttonClose.classList.add(o + "-close"), s.buttonClose.addEventListener("click", function(t) {
                  t.target;
                  e.hide(i, s.toast, "button")
              }), s.toast.appendChild(s.buttonClose)) : i.rtl ? s.toast.style.paddingLeft = "30px" : s.toast.style.paddingRight = "30px"
          }(),
          function() {
              i.progressBar ? (s.progressBar.classList.add(o + "-progressbar"), s.progressBarDiv.style.background = i.progressBarColor, s.progressBar.appendChild(s.progressBarDiv), s.toast.appendChild(s.progressBar), setTimeout(function() {
                  y(s.toast, i, function() {
                      e.hide(i, s.toast)
                  })
              }, 300)) : i.progressBar === !1 && i.timeout > 0 && setTimeout(function() {
                  e.hide(i, s.toast)
              }, i.timeout)
          }(),
          function() {
              i.icon && (s.icon.setAttribute("class", o + "-icon " + i.icon), i.iconText && s.icon.appendChild(document.createTextNode(i.iconText)), i.rtl ? s.toastBody.style.paddingRight = "33px" : s.toastBody.style.paddingLeft = "33px", i.iconColor && (s.icon.style.color = i.iconColor), s.toastBody.appendChild(s.icon))
          }(),
          function() {
              i.titleColor && (s.strong.style.color = i.titleColor), i.titleSize && (isNaN(i.titleSize) ? s.strong.style.fontSize = i.titleSize : s.strong.style.fontSize = i.titleSize + "px"), i.titleLineHeight && (isNaN(i.titleSize) ? s.strong.style.lineHeight = i.titleLineHeight : s.strong.style.lineHeight = i.titleLineHeight + "px"), s.strong.appendChild(g(i.title))
          }(),
          function() {
              i.messageColor && (s.p.style.color = i.messageColor), i.messageSize && (isNaN(i.titleSize) ? s.p.style.fontSize = i.messageSize : s.p.style.fontSize = i.messageSize + "px"), i.messageLineHeight && (isNaN(i.titleSize) ? s.p.style.lineHeight = i.messageLineHeight : s.p.style.lineHeight = i.messageLineHeight + "px"), s.p.appendChild(g(i.message))
          }(),
          function() {
              if (i.buttons.length > 0) {
                  s.buttons.classList.add(o + "-buttons"), i.rtl ? s.p.style.marginLeft = "15px" : s.p.style.marginRight = "15px";
                  var t = 0;
                  m(i.buttons, function(o, n) {
                      s.buttons.appendChild(g(o[0]));
                      var i = s.buttons.childNodes;
                      i[t].addEventListener("click", function(t) {
                          t.preventDefault();
                          var n = o[1];
                          return new n(e, s.toast)
                      }), t++
                  }), s.toastBody.appendChild(s.buttons)
              }
          }(),
          function() {
              s.toastCapsule.style.visibility = "hidden", setTimeout(function() {
                  var t = s.toast.offsetHeight,
                      e = s.toast.currentStyle || window.getComputedStyle(s.toast),
                      o = e.marginTop;
                  o = o.split("px"), o = parseInt(o[0]);
                  var n = e.marginBottom;
                  n = n.split("px"), n = parseInt(n[0]), s.toastCapsule.style.visibility = "", s.toastCapsule.style.height = t + n + o + "px", setTimeout(function() {
                      s.toastCapsule.style.height = "auto", i.target && (s.toastCapsule.style.overflow = "visible")
                  }, 1e3)
              }, 100)
          }(),
          function() {
              var t = i.position;
              if (i.target) s.wrapper = document.querySelector(i.target), s.wrapper.classList.add(o + "-target"), i.targetFirst ? s.wrapper.insertBefore(s.toastCapsule, s.wrapper.firstChild) : s.wrapper.appendChild(s.toastCapsule);
              else {
                  if (-1 == r.indexOf(i.position)) return void console.warn("[" + o + "] Incorrect position.\nIt can be › " + r);
                  t = n || window.innerWidth <= d ? "bottomLeft" == i.position || "bottomRight" == i.position || "bottomCenter" == i.position ? o + "-wrapper-bottomCenter" : "topLeft" == i.position || "topRight" == i.position || "topCenter" == i.position ? o + "-wrapper-topCenter" : o + "-wrapper-center" : o + "-wrapper-" + t, s.wrapper = document.querySelector("." + o + "-wrapper." + t), s.wrapper || (s.wrapper = document.createElement("div"), s.wrapper.classList.add(o + "-wrapper"), s.wrapper.classList.add(t), document.body.appendChild(s.wrapper)), "topLeft" == i.position || "topCenter" == i.position || "topRight" == i.position ? s.wrapper.insertBefore(s.toastCapsule, s.wrapper.firstChild) : s.wrapper.appendChild(s.toastCapsule)
              }
              isNaN(i.zindex) ? console.warn("[" + o + "] Invalid zIndex.") : s.wrapper.style.zIndex = i.zindex
          }(),
          function() {
              if (i.animateInside) {
                  s.toast.classList.add(o + "-animateInside");
                  var t = 200,
                      e = 100,
                      n = 300;
                  if ("bounceInLeft" == i.transitionIn && (t = 400, e = 200, n = 400), window.setTimeout(function() {
                          s.strong.classList.add("slideIn")
                      }, t), window.setTimeout(function() {
                          s.p.classList.add("slideIn")
                      }, e), i.icon && window.setTimeout(function() {
                          s.icon.classList.add("revealIn")
                      }, n), i.buttons.length > 0 && s.buttons) {
                      var a = 150;
                      m(s.buttons.childNodes, function(t, e) {
                          window.setTimeout(function() {
                              t.classList.add("revealIn")
                          }, a), a += a
                      })
                  }
              }
          }(), i.onOpen.apply(null, [i, s.toast]);
      try {
          var l = new CustomEvent(o + "-open", {
              detail: i,
              bubles: !0,
              cancelable: !0
          });
          document.dispatchEvent(l)
      } catch (p) {
          console.warn(p)
      }
      i.pauseOnHover && (s.toast.addEventListener("mouseenter", function(t) {
          this.classList.add(o + "-paused")
      }), s.toast.addEventListener("mouseleave", function(t) {
          this.classList.remove(o + "-paused")
      })), i.resetOnHover && (s.toast.addEventListener("mouseenter", function(t) {
          this.classList.add(o + "-reseted")
      }), s.toast.addEventListener("mouseleave", function(t) {
          this.classList.remove(o + "-reseted")
      })), i.drag && (a ? (s.toast.addEventListener("touchstart", function(t) {
          h.startMoving(this, e, i, t)
      }, !1), s.toast.addEventListener("touchend", function(t) {
          h.stopMoving(this, t)
      }, !1)) : (s.toast.addEventListener("mousedown", function(t) {
          t.preventDefault(), h.startMoving(this, e, i, t)
      }, !1), s.toast.addEventListener("mouseup", function(t) {
          t.preventDefault(), h.stopMoving(this, t)
      }, !1)))
  }, e
});
/*! nouislider - 8.5.1 - 2016-04-24 16:00:29 */

! function(a) {
  "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? module.exports = a() : window.noUiSlider = a()
}(function() {
  "use strict";

  function a(a) {
      return a.filter(function(a) {
          return this[a] ? !1 : this[a] = !0
      }, {})
  }

  function b(a, b) {
      return Math.round(a / b) * b
  }

  function c(a) {
      var b = a.getBoundingClientRect(),
          c = a.ownerDocument,
          d = c.documentElement,
          e = l();
      return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (e.x = 0), {
          top: b.top + e.y - d.clientTop,
          left: b.left + e.x - d.clientLeft
      }
  }

  function d(a) {
      return "number" == typeof a && !isNaN(a) && isFinite(a)
  }

  function e(a, b, c) {
      i(a, b), setTimeout(function() {
          j(a, b)
      }, c)
  }

  function f(a) {
      return Math.max(Math.min(a, 100), 0)
  }

  function g(a) {
      return Array.isArray(a) ? a : [a]
  }

  function h(a) {
      var b = a.split(".");
      return b.length > 1 ? b[1].length : 0
  }

  function i(a, b) {
      a.classList ? a.classList.add(b) : a.className += " " + b
  }

  function j(a, b) {
      a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ")
  }

  function k(a, b) {
      return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className)
  }

  function l() {
      var a = void 0 !== window.pageXOffset,
          b = "CSS1Compat" === (document.compatMode || ""),
          c = a ? window.pageXOffset : b ? document.documentElement.scrollLeft : document.body.scrollLeft,
          d = a ? window.pageYOffset : b ? document.documentElement.scrollTop : document.body.scrollTop;
      return {
          x: c,
          y: d
      }
  }

  function m() {
      return window.navigator.pointerEnabled ? {
          start: "pointerdown",
          move: "pointermove",
          end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
          start: "MSPointerDown",
          move: "MSPointerMove",
          end: "MSPointerUp"
      } : {
          start: "mousedown touchstart",
          move: "mousemove touchmove",
          end: "mouseup touchend"
      }
  }

  function n(a, b) {
      return 100 / (b - a)
  }

  function o(a, b) {
      return 100 * b / (a[1] - a[0])
  }

  function p(a, b) {
      return o(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0])
  }

  function q(a, b) {
      return b * (a[1] - a[0]) / 100 + a[0]
  }

  function r(a, b) {
      for (var c = 1; a >= b[c];) c += 1;
      return c
  }

  function s(a, b, c) {
      if (c >= a.slice(-1)[0]) return 100;
      var d, e, f, g, h = r(c, a);
      return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + p([d, e], c) / n(f, g)
  }

  function t(a, b, c) {
      if (c >= 100) return a.slice(-1)[0];
      var d, e, f, g, h = r(c, b);
      return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], q([d, e], (c - f) * n(f, g))
  }

  function u(a, c, d, e) {
      if (100 === e) return e;
      var f, g, h = r(e, a);
      return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : c[h - 1] ? a[h - 1] + b(e - a[h - 1], c[h - 1]) : e
  }

  function v(a, b, c) {
      var e;
      if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value.");
      if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !d(e) || !d(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
      c.xPct.push(e), c.xVal.push(b[0]), e ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1])
  }

  function w(a, b, c) {
      return b ? void(c.xSteps[a] = o([c.xVal[a], c.xVal[a + 1]], b) / n(c.xPct[a], c.xPct[a + 1])) : !0
  }

  function x(a, b, c, d) {
      this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c;
      var e, f = [];
      for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]);
      for (f.length && "object" == typeof f[0][0] ? f.sort(function(a, b) {
              return a[0][0] - b[0][0]
          }) : f.sort(function(a, b) {
              return a[0] - b[0]
          }), e = 0; e < f.length; e++) v(f[e][1], f[e][0], this);
      for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) w(e, this.xNumSteps[e], this)
  }

  function y(a, b) {
      if (!d(b)) throw new Error("noUiSlider: 'step' is not numeric.");
      a.singleStep = b
  }

  function z(a, b) {
      if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider: 'range' is not an object.");
      if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      if (b.min === b.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
      a.spectrum = new x(b, a.snap, a.dir, a.singleStep)
  }

  function A(a, b) {
      if (b = g(b), !Array.isArray(b) || !b.length || b.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
      a.handles = b.length, a.start = b
  }

  function B(a, b) {
      if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.")
  }

  function C(a, b) {
      if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.")
  }

  function D(a, b) {
      if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider: 'animationDuration' option must be a number.")
  }

  function E(a, b) {
      if ("lower" === b && 1 === a.handles) a.connect = 1;
      else if ("upper" === b && 1 === a.handles) a.connect = 2;
      else if (b === !0 && 2 === a.handles) a.connect = 3;
      else {
          if (b !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
          a.connect = 0
      }
  }

  function F(a, b) {
      switch (b) {
          case "horizontal":
              a.ort = 0;
              break;
          case "vertical":
              a.ort = 1;
              break;
          default:
              throw new Error("noUiSlider: 'orientation' option is invalid.")
      }
  }

  function G(a, b) {
      if (!d(b)) throw new Error("noUiSlider: 'margin' option must be numeric.");
      if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
  }

  function H(a, b) {
      if (!d(b)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (a.limit = a.spectrum.getMargin(b), !a.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
  }

  function I(a, b) {
      switch (b) {
          case "ltr":
              a.dir = 0;
              break;
          case "rtl":
              a.dir = 1, a.connect = [0, 2, 1, 3][a.connect];
              break;
          default:
              throw new Error("noUiSlider: 'direction' option was not recognized.")
      }
  }

  function J(a, b) {
      if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var c = b.indexOf("tap") >= 0,
          d = b.indexOf("drag") >= 0,
          e = b.indexOf("fixed") >= 0,
          f = b.indexOf("snap") >= 0,
          g = b.indexOf("hover") >= 0;
      if (d && !a.connect) throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
      a.events = {
          tap: c || f,
          drag: d,
          fixed: e,
          snap: f,
          hover: g
      }
  }

  function K(a, b) {
      var c;
      if (b !== !1)
          if (b === !0)
              for (a.tooltips = [], c = 0; c < a.handles; c++) a.tooltips.push(!0);
          else {
              if (a.tooltips = g(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
              a.tooltips.forEach(function(a) {
                  if ("boolean" != typeof a && ("object" != typeof a || "function" != typeof a.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
              })
          }
  }

  function L(a, b) {
      if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0;
      throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
  }

  function M(a, b) {
      if (void 0 !== b && "string" != typeof b && b !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      a.cssPrefix = b
  }

  function N(a, b) {
      if (void 0 !== b && "object" != typeof b) throw new Error("noUiSlider: 'cssClasses' must be an object.");
      if ("string" == typeof a.cssPrefix) {
          a.cssClasses = {};
          for (var c in b) b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c])
      } else a.cssClasses = b
  }

  function O(a) {
      var b, c = {
          margin: 0,
          limit: 0,
          animate: !0,
          animationDuration: 300,
          format: R
      };
      b = {
          step: {
              r: !1,
              t: y
          },
          start: {
              r: !0,
              t: A
          },
          connect: {
              r: !0,
              t: E
          },
          direction: {
              r: !0,
              t: I
          },
          snap: {
              r: !1,
              t: B
          },
          animate: {
              r: !1,
              t: C
          },
          animationDuration: {
              r: !1,
              t: D
          },
          range: {
              r: !0,
              t: z
          },
          orientation: {
              r: !1,
              t: F
          },
          margin: {
              r: !1,
              t: G
          },
          limit: {
              r: !1,
              t: H
          },
          behaviour: {
              r: !0,
              t: J
          },
          format: {
              r: !1,
              t: L
          },
          tooltips: {
              r: !1,
              t: K
          },
          cssPrefix: {
              r: !1,
              t: M
          },
          cssClasses: {
              r: !1,
              t: N
          }
      };
      var d = {
          connect: !1,
          direction: "ltr",
          behaviour: "tap",
          orientation: "horizontal",
          cssPrefix: "noUi-",
          cssClasses: {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              ltr: "ltr",
              rtl: "rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              stacking: "stacking",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub"
          }
      };
      return Object.keys(b).forEach(function(e) {
          if (void 0 === a[e] && void 0 === d[e]) {
              if (b[e].r) throw new Error("noUiSlider: '" + e + "' is required.");
              return !0
          }
          b[e].t(c, void 0 === a[e] ? d[e] : a[e])
      }), c.pips = a.pips, c.style = c.ort ? "top" : "left", c
  }

  function P(b, d, n) {
      function o(a, b, c) {
          var d = a + b[0],
              e = a + b[1];
          return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [f(d), f(e)]) : [d, e]
      }

      function p(a, b) {
          a.preventDefault();
          var c, d, e = 0 === a.type.indexOf("touch"),
              f = 0 === a.type.indexOf("mouse"),
              g = 0 === a.type.indexOf("pointer"),
              h = a;
          return 0 === a.type.indexOf("MSPointer") && (g = !0), e && (c = a.changedTouches[0].pageX, d = a.changedTouches[0].pageY), b = b || l(), (f || g) && (c = a.clientX + b.x, d = a.clientY + b.y), h.pageOffset = b, h.points = [c, d], h.cursor = f || g, h
      }

      function q(a, b) {
          var c = document.createElement("div"),
              e = document.createElement("div"),
              f = [d.cssClasses.handleLower, d.cssClasses.handleUpper];
          return a && f.reverse(), i(e, d.cssClasses.handle), i(e, f[b]), i(c, d.cssClasses.origin), c.appendChild(e), c
      }

      function r(a, b, c) {
          switch (a) {
              case 1:
                  i(b, d.cssClasses.connect), i(c[0], d.cssClasses.background);
                  break;
              case 3:
                  i(c[1], d.cssClasses.background);
              case 2:
                  i(c[0], d.cssClasses.connect);
              case 0:
                  i(b, d.cssClasses.background)
          }
      }

      function s(a, b, c) {
          var d, e = [];
          for (d = 0; a > d; d += 1) e.push(c.appendChild(q(b, d)));
          return e
      }

      function t(a, b, c) {
          i(c, d.cssClasses.target), 0 === a ? i(c, d.cssClasses.ltr) : i(c, d.cssClasses.rtl), 0 === b ? i(c, d.cssClasses.horizontal) : i(c, d.cssClasses.vertical);
          var e = document.createElement("div");
          return i(e, d.cssClasses.base), c.appendChild(e), e
      }

      function u(a, b) {
          if (!d.tooltips[b]) return !1;
          var c = document.createElement("div");
          return c.className = d.cssClasses.tooltip, a.firstChild.appendChild(c)
      }

      function v() {
          d.dir && d.tooltips.reverse();
          var a = W.map(u);
          d.dir && (a.reverse(), d.tooltips.reverse()), S("update", function(b, c, e) {
              a[c] && (a[c].innerHTML = d.tooltips[c] === !0 ? b[c] : d.tooltips[c].to(e[c]))
          })
      }

      function w(a, b, c) {
          if ("range" === a || "steps" === a) return _.xVal;
          if ("count" === a) {
              var d, e = 100 / (b - 1),
                  f = 0;
              for (b = [];
                  (d = f++ * e) <= 100;) b.push(d);
              a = "positions"
          }
          return "positions" === a ? b.map(function(a) {
              return _.fromStepping(c ? _.getStep(a) : a)
          }) : "values" === a ? c ? b.map(function(a) {
              return _.fromStepping(_.getStep(_.toStepping(a)))
          }) : b : void 0
      }

      function x(b, c, d) {
          function e(a, b) {
              return (a + b).toFixed(7) / 1
          }
          var f = _.direction,
              g = {},
              h = _.xVal[0],
              i = _.xVal[_.xVal.length - 1],
              j = !1,
              k = !1,
              l = 0;
          return _.direction = 0, d = a(d.slice().sort(function(a, b) {
              return a - b
          })), d[0] !== h && (d.unshift(h), j = !0), d[d.length - 1] !== i && (d.push(i), k = !0), d.forEach(function(a, f) {
              var h, i, m, n, o, p, q, r, s, t, u = a,
                  v = d[f + 1];
              if ("steps" === c && (h = _.xNumSteps[f]), h || (h = v - u), u !== !1 && void 0 !== v)
                  for (i = u; v >= i; i = e(i, h)) {
                      for (n = _.toStepping(i), o = n - l, r = o / b, s = Math.round(r), t = o / s, m = 1; s >= m; m += 1) p = l + m * t, g[p.toFixed(5)] = ["x", 0];
                      q = d.indexOf(i) > -1 ? 1 : "steps" === c ? 2 : 0, !f && j && (q = 0), i === v && k || (g[n.toFixed(5)] = [i, q]), l = n
                  }
          }), _.direction = f, g
      }

      function y(a, b, c) {
          function e(a, b) {
              var c = b === d.cssClasses.value,
                  e = c ? m : n,
                  f = c ? k : l;
              return b + " " + e[d.ort] + " " + f[a]
          }

          function f(a, b, c) {
              return 'class="' + e(c[1], b) + '" style="' + d.style + ": " + a + '%"'
          }

          function g(a, e) {
              _.direction && (a = 100 - a), e[1] = e[1] && b ? b(e[0], e[1]) : e[1], j += "<div " + f(a, d.cssClasses.marker, e) + "></div>", e[1] && (j += "<div " + f(a, d.cssClasses.value, e) + ">" + c.to(e[0]) + "</div>")
          }
          var h = document.createElement("div"),
              j = "",
              k = [d.cssClasses.valueNormal, d.cssClasses.valueLarge, d.cssClasses.valueSub],
              l = [d.cssClasses.markerNormal, d.cssClasses.markerLarge, d.cssClasses.markerSub],
              m = [d.cssClasses.valueHorizontal, d.cssClasses.valueVertical],
              n = [d.cssClasses.markerHorizontal, d.cssClasses.markerVertical];
          return i(h, d.cssClasses.pips), i(h, 0 === d.ort ? d.cssClasses.pipsHorizontal : d.cssClasses.pipsVertical), Object.keys(a).forEach(function(b) {
              g(b, a[b])
          }), h.innerHTML = j, h
      }

      function z(a) {
          var b = a.mode,
              c = a.density || 1,
              d = a.filter || !1,
              e = a.values || !1,
              f = a.stepped || !1,
              g = w(b, e, f),
              h = x(c, b, g),
              i = a.format || {
                  to: Math.round
              };
          return Z.appendChild(y(h, d, i))
      }

      function A() {
          var a = V.getBoundingClientRect(),
              b = "offset" + ["Width", "Height"][d.ort];
          return 0 === d.ort ? a.width || V[b] : a.height || V[b]
      }

      function B(a, b, c) {
          var e;
          for (e = 0; e < d.handles; e++)
              if (-1 === $[e]) return;
          void 0 !== b && 1 !== d.handles && (b = Math.abs(b - d.dir)), Object.keys(ba).forEach(function(d) {
              var e = d.split(".")[0];
              a === e && ba[d].forEach(function(a) {
                  a.call(X, g(P()), b, g(C(Array.prototype.slice.call(aa))), c || !1, $)
              })
          })
      }

      function C(a) {
          return 1 === a.length ? a[0] : d.dir ? a.reverse() : a
      }

      function D(a, b, c, e) {
          var f = function(b) {
                  return Z.hasAttribute("disabled") ? !1 : k(Z, d.cssClasses.tap) ? !1 : (b = p(b, e.pageOffset), a === Y.start && void 0 !== b.buttons && b.buttons > 1 ? !1 : e.hover && b.buttons ? !1 : (b.calcPoint = b.points[d.ort], void c(b, e)))
              },
              g = [];
          return a.split(" ").forEach(function(a) {
              b.addEventListener(a, f, !1), g.push([a, f])
          }), g
      }

      function E(a, b) {
          if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === a.buttons && 0 !== b.buttonsProperty) return F(a, b);
          var c, d, e = b.handles || W,
              f = !1,
              g = 100 * (a.calcPoint - b.start) / b.baseSize,
              h = e[0] === W[0] ? 0 : 1;
          if (c = o(g, b.positions, e.length > 1), f = L(e[0], c[h], 1 === e.length), e.length > 1) {
              if (f = L(e[1], c[h ? 0 : 1], !1) || f)
                  for (d = 0; d < b.handles.length; d++) B("slide", d)
          } else f && B("slide", h)
      }

      function F(a, b) {
          var c = V.querySelector("." + d.cssClasses.active),
              e = b.handles[0] === W[0] ? 0 : 1;
          null !== c && j(c, d.cssClasses.active), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
          var f = document.documentElement;
          f.noUiListeners.forEach(function(a) {
              f.removeEventListener(a[0], a[1])
          }), j(Z, d.cssClasses.drag), B("set", e), B("change", e), void 0 !== b.handleNumber && B("end", b.handleNumber)
      }

      function G(a, b) {
          "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && F(a, b)
      }

      function H(a, b) {
          var c = document.documentElement;
          if (1 === b.handles.length) {
              if (b.handles[0].hasAttribute("disabled")) return !1;
              i(b.handles[0].children[0], d.cssClasses.active)
          }
          a.preventDefault(), a.stopPropagation();
          var e = D(Y.move, c, E, {
                  start: a.calcPoint,
                  baseSize: A(),
                  pageOffset: a.pageOffset,
                  handles: b.handles,
                  handleNumber: b.handleNumber,
                  buttonsProperty: a.buttons,
                  positions: [$[0], $[W.length - 1]]
              }),
              f = D(Y.end, c, F, {
                  handles: b.handles,
                  handleNumber: b.handleNumber
              }),
              g = D("mouseout", c, G, {
                  handles: b.handles,
                  handleNumber: b.handleNumber
              });
          if (c.noUiListeners = e.concat(f, g), a.cursor) {
              document.body.style.cursor = getComputedStyle(a.target).cursor, W.length > 1 && i(Z, d.cssClasses.drag);
              var h = function() {
                  return !1
              };
              document.body.noUiListener = h, document.body.addEventListener("selectstart", h, !1)
          }
          void 0 !== b.handleNumber && B("start", b.handleNumber)
      }

      function I(a) {
          var b, f, g = a.calcPoint,
              h = 0;
          return a.stopPropagation(), W.forEach(function(a) {
              h += c(a)[d.style]
          }), b = h / 2 > g || 1 === W.length ? 0 : 1, W[b].hasAttribute("disabled") && (b = b ? 0 : 1), g -= c(V)[d.style], f = 100 * g / A(), d.events.snap || e(Z, d.cssClasses.tap, d.animationDuration), W[b].hasAttribute("disabled") ? !1 : (L(W[b], f), B("slide", b, !0), B("set", b, !0), B("change", b, !0), void(d.events.snap && H(a, {
              handles: [W[b]]
          })))
      }

      function J(a) {
          var b = a.calcPoint - c(V)[d.style],
              e = _.getStep(100 * b / A()),
              f = _.fromStepping(e);
          Object.keys(ba).forEach(function(a) {
              "hover" === a.split(".")[0] && ba[a].forEach(function(a) {
                  a.call(X, f)
              })
          })
      }

      function K(a) {
          if (a.fixed || W.forEach(function(a, b) {
                  D(Y.start, a.children[0], H, {
                      handles: [a],
                      handleNumber: b
                  })
              }), a.tap && D(Y.start, V, I, {
                  handles: W
              }), a.hover && D(Y.move, V, J, {
                  hover: !0
              }), a.drag) {
              var b = [V.querySelector("." + d.cssClasses.connect)];
              i(b[0], d.cssClasses.draggable), a.fixed && b.push(W[b[0] === W[0] ? 1 : 0].children[0]), b.forEach(function(a) {
                  D(Y.start, a, H, {
                      handles: W
                  })
              })
          }
      }

      function L(a, b, c) {
          var e = a !== W[0] ? 1 : 0,
              g = $[0] + d.margin,
              h = $[1] - d.margin,
              k = $[0] + d.limit,
              l = $[1] - d.limit;
          return W.length > 1 && (b = e ? Math.max(b, g) : Math.min(b, h)), c !== !1 && d.limit && W.length > 1 && (b = e ? Math.min(b, k) : Math.max(b, l)), b = _.getStep(b), b = f(b), b === $[e] ? !1 : (window.requestAnimationFrame ? window.requestAnimationFrame(function() {
              a.style[d.style] = b + "%"
          }) : a.style[d.style] = b + "%", a.previousSibling || (j(a, d.cssClasses.stacking), b > 50 && i(a, d.cssClasses.stacking)), $[e] = b, aa[e] = _.fromStepping(b), B("update", e), !0)
      }

      function M(a, b) {
          var c, e, f;
          for (d.limit && (a += 1), c = 0; a > c; c += 1) e = c % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = d.format.from(f), (f === !1 || isNaN(f) || L(W[e], _.toStepping(f), c === 3 - d.dir) === !1) && B("update", e))
      }

      function N(a, b) {
          var c, f, h = g(a);
          for (b = void 0 === b ? !0 : !!b, d.dir && d.handles > 1 && h.reverse(), d.animate && -1 !== $[0] && e(Z, d.cssClasses.tap, d.animationDuration), c = W.length > 1 ? 3 : 1, 1 === h.length && (c = 1), M(c, h), f = 0; f < W.length; f++) null !== h[f] && b && B("set", f)
      }

      function P() {
          var a, b = [];
          for (a = 0; a < d.handles; a += 1) b[a] = d.format.to(aa[a]);
          return C(b)
      }

      function Q() {
          for (var a in d.cssClasses) d.cssClasses.hasOwnProperty(a) && j(Z, d.cssClasses[a]);
          for (; Z.firstChild;) Z.removeChild(Z.firstChild);
          delete Z.noUiSlider
      }

      function R() {
          var a = $.map(function(a, b) {
              var c = _.getApplicableStep(a),
                  d = h(String(c[2])),
                  e = aa[b],
                  f = 100 === a ? null : c[2],
                  g = Number((e - c[2]).toFixed(d)),
                  i = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
              return [i, f]
          });
          return C(a)
      }

      function S(a, b) {
          ba[a] = ba[a] || [], ba[a].push(b), "update" === a.split(".")[0] && W.forEach(function(a, b) {
              B("update", b)
          })
      }

      function T(a) {
          var b = a && a.split(".")[0],
              c = b && a.substring(b.length);
          Object.keys(ba).forEach(function(a) {
              var d = a.split(".")[0],
                  e = a.substring(d.length);
              b && b !== d || c && c !== e || delete ba[a]
          })
      }

      function U(a, b) {
          var c = P(),
              e = O({
                  start: [0, 0],
                  margin: a.margin,
                  limit: a.limit,
                  step: void 0 === a.step ? d.singleStep : a.step,
                  range: a.range,
                  animate: a.animate,
                  snap: void 0 === a.snap ? d.snap : a.snap
              });
          ["margin", "limit", "range", "animate"].forEach(function(b) {
              void 0 !== a[b] && (d[b] = a[b])
          }), e.spectrum.direction = _.direction, _ = e.spectrum, $ = [-1, -1], N(a.start || c, b)
      }
      var V, W, X, Y = m(),
          Z = b,
          $ = [-1, -1],
          _ = d.spectrum,
          aa = [],
          ba = {};
      if (Z.noUiSlider) throw new Error("Slider was already initialized.");
      return V = t(d.dir, d.ort, Z), W = s(d.handles, d.dir, V), r(d.connect, Z, W), d.pips && z(d.pips), d.tooltips && v(), X = {
          destroy: Q,
          steps: R,
          on: S,
          off: T,
          get: P,
          set: N,
          updateOptions: U,
          options: n,
          target: Z,
          pips: z
      }, K(d.events), X
  }

  function Q(a, b) {
      if (!a.nodeName) throw new Error("noUiSlider.create requires a single element.");
      var c = O(b, a),
          d = P(a, c, b);
      return d.set(c.start), a.noUiSlider = d, d
  }
  x.prototype.getMargin = function(a) {
      return 2 === this.xPct.length ? o(this.xVal, a) : !1
  }, x.prototype.toStepping = function(a) {
      return a = s(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a
  }, x.prototype.fromStepping = function(a) {
      return this.direction && (a = 100 - a), t(this.xVal, this.xPct, a)
  }, x.prototype.getStep = function(a) {
      return this.direction && (a = 100 - a), a = u(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a
  }, x.prototype.getApplicableStep = function(a) {
      var b = r(a, this.xPct),
          c = 100 === a ? 2 : 1;
      return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]]
  }, x.prototype.convert = function(a) {
      return this.getStep(this.toStepping(a))
  };
  var R = {
      to: function(a) {
          return void 0 !== a && a.toFixed(2)
      },
      from: Number
  };
  return {
      create: Q
  }
});
/**
* Owl Carousel v2.2.1
* Copyright 2013-2017 David Deutsch
* Licensed under  ()
*/
! function(a, b, c, d) {
  function e(b, c) {
      this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
              start: null,
              current: null
          },
          direction: null
      }, this._states = {
          current: {},
          tags: {
              initializing: ["busy"],
              animating: ["busy"],
              dragging: ["interacting"]
          }
      }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
          this._handlers[c] = a.proxy(this[c], this)
      }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
      }, this)), a.each(e.Workers, a.proxy(function(b, c) {
          this._pipe.push({
              filter: c.filter,
              run: a.proxy(c.run, this)
          })
      }, this)), this.setup(), this.initialize()
  }
  e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab"
  }, e.Width = {
      Default: "default",
      Inner: "inner",
      Outer: "outer"
  }, e.Type = {
      Event: "event",
      State: "state"
  }, e.Plugins = {}, e.Workers = [{
      filter: ["width", "settings"],
      run: function() {
          this._width = this.$element.width()
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          a.current = this._items && this._items[this.relative(this._current)]
      }
  }, {
      filter: ["items", "settings"],
      run: function() {
          this.$stage.children(".cloned").remove()
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          var b = this.settings.margin || "",
              c = !this.settings.autoWidth,
              d = this.settings.rtl,
              e = {
                  width: "auto",
                  "margin-left": d ? b : "",
                  "margin-right": d ? "" : b
              };
          !c && this.$stage.children().css(e), a.css = e
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
              c = null,
              d = this._items.length,
              e = !this.settings.autoWidth,
              f = [];
          for (a.items = {
                  merge: !1,
                  width: b
              }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
          this._widths = f
      }
  }, {
      filter: ["items", "settings"],
      run: function() {
          var b = [],
              c = this._items,
              d = this.settings,
              e = Math.max(2 * d.items, 4),
              f = 2 * Math.ceil(c.length / 2),
              g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
              h = "",
              i = "";
          for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
          this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function() {
          for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
          this._coordinates = f
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function() {
          var a = this.settings.stagePadding,
              b = this._coordinates,
              c = {
                  width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                  "padding-left": a || "",
                  "padding-right": a || ""
              };
          this.$stage.css(c)
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          var b = this._coordinates.length,
              c = !this.settings.autoWidth,
              d = this.$stage.children();
          if (c && a.items.merge)
              for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
          else c && (a.css.width = a.items.width, d.css(a.css))
      }
  }, {
      filter: ["items"],
      run: function() {
          this._coordinates.length < 1 && this.$stage.removeAttr("style")
      }
  }, {
      filter: ["width", "items", "settings"],
      run: function(a) {
          a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
      }
  }, {
      filter: ["position"],
      run: function() {
          this.animate(this.coordinates(this._current))
      }
  }, {
      filter: ["width", "position", "items", "settings"],
      run: function() {
          var a, b, c, d, e = this.settings.rtl ? 1 : -1,
              f = 2 * this.settings.stagePadding,
              g = this.coordinates(this.current()) + f,
              h = g + this.width() * e,
              i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
          this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
      }
  }], e.prototype.initialize = function() {
      if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
          var b, c, e;
          b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
      }
      this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.setup = function() {
      var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
      c ? (a.each(c, function(a) {
          a <= b && a > d && (d = Number(a))
      }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
          property: {
              name: "settings",
              value: e
          }
      }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
          property: {
              name: "settings",
              value: this.settings
          }
      })
  }, e.prototype.optionsLogic = function() {
      this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function(b) {
      var c = this.trigger("prepare", {
          content: b
      });
      return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
          content: c.data
      }), c.data
  }, e.prototype.update = function() {
      for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
              return this[a]
          }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function(a) {
      switch (a = a || e.Width.Default) {
          case e.Width.Inner:
          case e.Width.Outer:
              return this._width;
          default:
              return this._width - 2 * this.settings.stagePadding + this.settings.margin
      }
  }, e.prototype.refresh = function() {
      this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function() {
      b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function() {
      return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
  }, e.prototype.registerEventHandlers = function() {
      a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
          return !1
      })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function(b) {
      var d = null;
      3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
          x: d[16 === d.length ? 12 : 4],
          y: d[16 === d.length ? 13 : 5]
      }) : (d = this.$stage.position(), d = {
          x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
          y: d.top
      }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
          var d = this.difference(this._drag.pointer, this.pointer(b));
          a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
      }, this)))
  }, e.prototype.onDragMove = function(a) {
      var b = null,
          c = null,
          d = null,
          e = this.difference(this._drag.pointer, this.pointer(a)),
          f = this.difference(this._drag.stage.start, e);
      this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function(b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
          e = this._drag.stage.current,
          f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
          return !1
      })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function(b, c) {
      var d = -1,
          e = 30,
          f = this.width(),
          g = this.coordinates();
      return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
          return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
      }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
  }, e.prototype.animate = function(b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
          transform: "translate3d(" + b + "px,0px,0px)",
          transition: this.speed() / 1e3 + "s"
      }) : c ? this.$stage.animate({
          left: b + "px"
      }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
          left: b + "px"
      })
  }, e.prototype.is = function(a) {
      return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function(a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (a = this.normalize(a), this._current !== a) {
          var b = this.trigger("change", {
              property: {
                  name: "position",
                  value: a
              }
          });
          b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
              property: {
                  name: "position",
                  value: this._current
              }
          })
      }
      return this._current
  }, e.prototype.invalidate = function(b) {
      return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
          return b
      })
  }, e.prototype.reset = function(a) {
      a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function(a, b) {
      var c = this._items.length,
          e = b ? 0 : this._clones.length;
      return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
  }, e.prototype.relative = function(a) {
      return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function(a) {
      var b, c, d, e = this.settings,
          f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
          for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
          f = b + 1
      } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0)
  }, e.prototype.minimum = function(a) {
      return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function(a) {
      return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function(a) {
      return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function(b) {
      var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function(a) {
              return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
          };
      return b === d ? a.map(this._clones, function(a, b) {
          return f(b)
      }) : a.map(this._clones, function(a, c) {
          return a === b ? f(c) : null
      })
  }, e.prototype.speed = function(a) {
      return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function(b) {
      var c, e = 1,
          f = b - 1;
      return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
          return this.coordinates(b)
      }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
  }, e.prototype.duration = function(a, b, c) {
      return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function(a, b) {
      var c = this.current(),
          d = null,
          e = a - this.relative(c),
          f = (e > 0) - (e < 0),
          g = this._items.length,
          h = this.minimum(),
          i = this.maximum();
      this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
  }, e.prototype.next = function(a) {
      a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function(a) {
      a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function(a) {
      if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
      this.leave("animating"), this.trigger("translated")
  }, e.prototype.viewport = function() {
      var d;
      return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
  }, e.prototype.replace = function(b) {
      this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
          return 1 === this.nodeType
      }).each(a.proxy(function(a, b) {
          b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
      }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function(b, c) {
      var e = this.relative(this._current);
      c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
          content: b,
          position: c
      }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
          content: b,
          position: c
      })
  }, e.prototype.remove = function(a) {
      a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
          content: this._items[a],
          position: a
      }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
          content: null,
          position: a
      }))
  }, e.prototype.preloadAutoWidthImages = function(b) {
      b.each(a.proxy(function(b, c) {
          this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
              c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
          }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
      }, this))
  }, e.prototype.destroy = function() {
      this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function(a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
          case "<":
              return d ? a > c : a < c;
          case ">":
              return d ? a < c : a > c;
          case ">=":
              return d ? a <= c : a >= c;
          case "<=":
              return d ? a >= c : a <= c
      }
  }, e.prototype.on = function(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function(a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function(b, c, d, f, g) {
      var h = {
              item: {
                  count: this._items.length,
                  index: this.current()
              }
          },
          i = a.camelCase(a.grep(["on", b, d], function(a) {
              return a
          }).join("-").toLowerCase()),
          j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
              relatedTarget: this
          }, h, c));
      return this._supress[b] || (a.each(this._plugins, function(a, b) {
          b.onTrigger && b.onTrigger(j)
      }), this.register({
          type: e.Type.Event,
          name: b
      }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function(b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
      }, this))
  }, e.prototype.leave = function(b) {
      a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
          this._states.current[b]--
      }, this))
  }, e.prototype.register = function(b) {
      if (b.type === e.Type.Event) {
          if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
              var c = a.event.special[b.name]._default;
              a.event.special[b.name]._default = function(a) {
                  return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
              }, a.event.special[b.name].owl = !0
          }
      } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
          return a.inArray(c, this._states.tags[b.name]) === d
      }, this)))
  }, e.prototype.suppress = function(b) {
      a.each(b, a.proxy(function(a, b) {
          this._supress[b] = !0
      }, this))
  }, e.prototype.release = function(b) {
      a.each(b, a.proxy(function(a, b) {
          delete this._supress[b]
      }, this))
  }, e.prototype.pointer = function(a) {
      var c = {
          x: null,
          y: null
      };
      return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.isNumeric = function(a) {
      return !isNaN(parseFloat(a))
  }, e.prototype.difference = function(a, b) {
      return {
          x: a.x - b.x,
          y: a.y - b.y
      }
  }, a.fn.owlCarousel = function(b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
          var d = a(this),
              f = d.data("owl.carousel");
          f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
              f.register({
                  type: e.Type.Event,
                  name: c
              }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                  a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
              }, f))
          })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
      })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._interval = null, this._visible = null, this._handlers = {
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoRefresh && this.watch()
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
  }, e.prototype.watch = function() {
      this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function() {
      this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function() {
      var a, c;
      b.clearInterval(this._interval);
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._loaded = [], this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
              if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                  for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                          this.load(b)
                      }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
      lazyLoad: !1
  }, e.prototype.load = function(c) {
      var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
      !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
          var e, f = a(d),
              g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
          this._core.trigger("load", {
              element: f,
              url: g
          }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
              f.css("opacity", 1), this._core.trigger("loaded", {
                  element: f,
                  url: g
              }, "lazy")
          }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
              f.css({
                  "background-image": 'url("' + g + '")',
                  opacity: "1"
              }), this._core.trigger("loaded", {
                  element: f,
                  url: g
              }, "lazy")
          }, this), e.src = g)
      }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function() {
      var a, b;
      for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoHeight && this.update()
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
          }, this),
          "loaded.owl.lazy": a.proxy(function(a) {
              a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
      autoHeight: !1,
      autoHeightClass: "owl-height"
  }, e.prototype.update = function() {
      var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage.children().toArray().slice(b, c),
          e = [],
          f = 0;
      a.each(d, function(b, c) {
          e.push(a(c).height())
      }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function() {
      var a, b;
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._videos = {}, this._playing = null, this._handlers = {
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.register({
                  type: "state",
                  name: "playing",
                  tags: ["interacting"]
              })
          }, this),
          "resize.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
          }, this),
          "refreshed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && "position" === a.property.name && this._playing && this.stop()
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
              if (b.namespace) {
                  var c = a(b.content).find(".owl-video");
                  c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
              }
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
          this.play(a)
      }, this))
  };
  e.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
  }, e.prototype.fetch = function(a, b) {
      var c = function() {
              return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
          }(),
          d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
      if (!g) throw new Error("Missing video URL.");
      if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
      else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
      else {
          if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
          c = "vzaar"
      }
      d = d[6], this._videos[g] = {
          type: c,
          id: d,
          width: e,
          height: f
      }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function(b, c) {
      var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function(a) {
              e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
          };
      if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
      "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
          type: "GET",
          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function(a) {
              f = a[0].thumbnail_large, l(f)
          }
      }) : "vzaar" === c.type && a.ajax({
          type: "GET",
          url: "//vzaar.com/api/videos/" + c.id + ".json",
          jsonp: "callback",
          dataType: "jsonp",
          success: function(a) {
              f = a.framegrab_url, l(f)
          }
      })
  }, e.prototype.stop = function() {
      this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function(b) {
      var c, d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
      this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function() {
      var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
      return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function() {
      var a, b;
      this._core.$element.off("click.owl.video");
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
          "change.owl.carousel": a.proxy(function(a) {
              a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
              a.namespace && (this.swapping = "translated" == a.type)
          }, this),
          "translate.owl.carousel": a.proxy(function(a) {
              a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
          }, this)
      }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
          animateOut: !1,
          animateIn: !1
      }, e.prototype.swap = function() {
          if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
              this.core.speed(0);
              var b, c = a.proxy(this.clear, this),
                  d = this.core.$stage.children().eq(this.previous),
                  e = this.core.$stage.children().eq(this.next),
                  f = this.core.settings.animateIn,
                  g = this.core.settings.animateOut;
              this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                  left: b + "px"
              }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
          }
      }, e.prototype.clear = function(b) {
          a(b.target).css({
              left: ""
          }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
      }, e.prototype.destroy = function() {
          var a, b;
          for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
          for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
      },
      a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
      this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
          }, this),
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.autoplay && this.play()
          }, this),
          "play.owl.autoplay": a.proxy(function(a, b, c) {
              a.namespace && this.play(b, c)
          }, this),
          "stop.owl.autoplay": a.proxy(function(a) {
              a.namespace && this.stop()
          }, this),
          "mouseover.owl.autoplay": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
          }, this),
          "touchstart.owl.core": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
          }, this),
          "touchend.owl.core": a.proxy(function() {
              this._core.settings.autoplayHoverPause && this.play()
          }, this)
      }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
  }, e.prototype.play = function(a, b) {
      this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
  }, e.prototype._getNextTimeout = function(d, e) {
      return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
          this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
      }, this), d || this._core.settings.autoplayTimeout)
  }, e.prototype._setAutoPlayInterval = function() {
      this._timeout = this._getNextTimeout()
  }, e.prototype.stop = function() {
      this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
  }, e.prototype.pause = function() {
      this._core.is("rotating") && (this._paused = !0)
  }, e.prototype.destroy = function() {
      var a, b;
      this.stop();
      for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(b) {
      this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
      }, this._handlers = {
          "prepared.owl.carousel": a.proxy(function(b) {
              b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
          }, this),
          "added.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
          }, this),
          "remove.owl.carousel": a.proxy(function(a) {
              a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
              a.namespace && "position" == a.property.name && this.draw()
          }, this),
          "initialized.owl.carousel": a.proxy(function(a) {
              a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
          }, this),
          "refreshed.owl.carousel": a.proxy(function(a) {
              a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
  }, e.prototype.initialize = function() {
      var b, c = this._core.settings;
      this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
          this.prev(c.navSpeed)
      }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
          this.next(c.navSpeed)
      }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
          var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
          b.preventDefault(), this.to(d, c.dotsSpeed)
      }, this));
      for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function() {
      var a, b, c, d;
      for (a in this._handlers) this.$element.off(a, this._handlers[a]);
      for (b in this._controls) this._controls[b].remove();
      for (d in this.overides) this._core[d] = this._overrides[d];
      for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function() {
      var a, b, c, d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
      if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
              if (b >= h || 0 === b) {
                  if (this._pages.push({
                          start: Math.min(f, a - d),
                          end: a - d + h - 1
                      }), Math.min(f, a - d) === f) break;
                  b = 0, ++c
              }
              b += this._core.mergers(this._core.relative(a))
          }
  }, e.prototype.draw = function() {
      var b, c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
      this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function(b) {
      var c = this._core.settings;
      b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
      }
  }, e.prototype.current = function() {
      var b = this._core.relative(this._core.current());
      return a.grep(this._pages, a.proxy(function(a, c) {
          return a.start <= b && a.end >= b
      }, this)).pop()
  }, e.prototype.getPosition = function(b) {
      var c, d, e = this._core.settings;
      return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function(b) {
      a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function(b, c, d) {
      var e;
      !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(c) {
      this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
          "initialized.owl.carousel": a.proxy(function(c) {
              c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
              if (b.namespace) {
                  var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                  if (!c) return;
                  this._hashes[c] = b.content
              }
          }, this),
          "changed.owl.carousel": a.proxy(function(c) {
              if (c.namespace && "position" === c.property.name) {
                  var d = this._core.items(this._core.relative(this._core.current())),
                      e = a.map(this._hashes, function(a, b) {
                          return a === d ? b : null
                      }).join();
                  if (!e || b.location.hash.slice(1) === e) return;
                  b.location.hash = e
              }
          }, this)
      }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
          var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
          f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
      }, this))
  };
  e.Defaults = {
      URLhashListener: !1
  }, e.prototype.destroy = function() {
      var c, d;
      a(b).off("hashchange.owl.navigation");
      for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
      for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  function e(b, c) {
      var e = !1,
          f = b.charAt(0).toUpperCase() + b.slice(1);
      return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
          if (g[b] !== d) return e = !c || b, !1
      }), e
  }

  function f(a) {
      return e(a, !0)
  }
  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
          transition: {
              end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend"
              }
          },
          animation: {
              end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend"
              }
          }
      },
      j = {
          csstransforms: function() {
              return !!e("transform")
          },
          csstransforms3d: function() {
              return !!e("perspective")
          },
          csstransitions: function() {
              return !!e("transition")
          },
          cssanimations: function() {
              return !!e("animation")
          }
      };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/*!
* data-owl-carousel - wrapper for owlCarousel with data-attributes support
*/
! function(a, b, c) {
  "use strict";
  a.fn.siCarousel = function() {
      return "undefined" == typeof a.fn.owlCarousel ? this : this.each(function() {
          var b = a(this),
              c = a.extend(!0, {}, a.fn.siCarousel.defaults, b.data("owl-carousel"));
          b.owlCarousel(c)
      })
  }, a.fn.siCarousel.defaults = {
      items: 1,
      loop: !1,
      nav: !1,
      navText: [],
      dots: !0,
      slideBy: 1,
      lazyLoad: !1,
      autoplay: !1,
      autoplayTimeout: 4e3,
      responsive: {},
      animateOut: !1,
      animateIn: !1,
      smartSpeed: 450,
      navSpeed: 450
  }, a(function() {
      a("[data-owl-carousel]").siCarousel()
  })
}(jQuery, window, document);
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
! function(a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function() {
  "use strict";
  var a = function(a, b) {
      var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
          w = !1,
          x = !0,
          y = !0,
          z = {
              barsSize: {
                  top: 44,
                  bottom: "auto"
              },
              closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
              timeToIdle: 4e3,
              timeToIdleOutside: 1e3,
              loadingIndicatorDelay: 1e3,
              addCaptionHTMLFn: function(a, b) {
                  return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
              },
              closeEl: !0,
              captionEl: !0,
              fullscreenEl: !0,
              zoomEl: !0,
              shareEl: !0,
              counterEl: !0,
              arrowEl: !0,
              preloaderEl: !0,
              tapToClose: !1,
              tapToToggleControls: !0,
              clickToCloseNonZoomable: !0,
              shareButtons: [{
                  id: "facebook",
                  label: "Share on Facebook",
                  url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
              }, {
                  id: "twitter",
                  label: "Tweet",
                  url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
              }, {
                  id: "pinterest",
                  label: "Pin it",
                  url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
              }, {
                  id: "download",
                  label: "Download image",
                  url: "{{raw_image_url}}",
                  download: !0
              }],
              getImageURLForShare: function() {
                  return a.currItem.src || ""
              },
              getPageURLForShare: function() {
                  return window.location.href
              },
              getTextForShare: function() {
                  return a.currItem.title || ""
              },
              indexIndicatorSep: " / ",
              fitControlsWidth: 1200
          },
          A = function(a) {
              if (r) return !0;
              a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
              for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
              if (d) {
                  a.stopPropagation && a.stopPropagation(), r = !0;
                  var h = b.features.isOldAndroid ? 600 : 30;
                  s = setTimeout(function() {
                      r = !1
                  }, h)
              }
          },
          B = function() {
              return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
          },
          C = function(a, c, d) {
              b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
          },
          D = function() {
              var a = 1 === q.getNumItemsFn();
              a !== p && (C(d, "ui--one-slide", a), p = a)
          },
          E = function() {
              C(i, "share-modal--hidden", y)
          },
          F = function() {
              return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() {
                  y && E()
              }, 300)) : (E(), setTimeout(function() {
                  y || b.addClass(i, "pswp__share-modal--fade-in")
              }, 30)), y || H(), !1
          },
          G = function(b) {
              b = b || window.event;
              var c = b.target || b.srcElement;
              return a.shout("shareLinkClick", b, c), c.href ? c.hasAttribute("download") ? !0 : (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1) : !1
          },
          H = function() {
              for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
              i.children[0].innerHTML = f, i.children[0].onclick = G
          },
          I = function(a) {
              for (var c = 0; c < q.closeElClasses.length; c++)
                  if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
          },
          J = 0,
          K = function() {
              clearTimeout(u), J = 0, k && v.setIdle(!1)
          },
          L = function(a) {
              a = a ? a : window.event;
              var b = a.relatedTarget || a.toElement;
              b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() {
                  v.setIdle(!0)
              }, q.timeToIdleOutside))
          },
          M = function() {
              q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
          },
          N = function() {
              q.preloaderEl && (O(!0), l("beforeChange", function() {
                  clearTimeout(o), o = setTimeout(function() {
                      a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
                  }, q.loadingIndicatorDelay)
              }), l("imageLoadComplete", function(b, c) {
                  a.currItem === c && O(!0)
              }))
          },
          O = function(a) {
              n !== a && (C(m, "preloader--active", !a), n = a)
          },
          P = function(a) {
              var c = a.vGap;
              if (B()) {
                  var g = q.barsSize;
                  if (q.captionEl && "auto" === g.bottom)
                      if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                          var h = f.clientHeight;
                          c.bottom = parseInt(h, 10) || 44
                      } else c.bottom = g.top;
                  else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                  c.top = g.top
              } else c.top = c.bottom = 0
          },
          Q = function() {
              q.timeToIdle && l("mouseUsed", function() {
                  b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() {
                      J++, 2 === J && v.setIdle(!0)
                  }, q.timeToIdle / 2)
              })
          },
          R = function() {
              l("onVerticalDrag", function(a) {
                  x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls()
              });
              var a;
              l("onPinchClose", function(b) {
                  x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
              }), l("zoomGestureEnded", function() {
                  a = !1, a && !x && v.showControls()
              })
          },
          S = [{
              name: "caption",
              option: "captionEl",
              onInit: function(a) {
                  e = a
              }
          }, {
              name: "share-modal",
              option: "shareEl",
              onInit: function(a) {
                  i = a
              },
              onTap: function() {
                  F()
              }
          }, {
              name: "button--share",
              option: "shareEl",
              onInit: function(a) {
                  h = a
              },
              onTap: function() {
                  F()
              }
          }, {
              name: "button--zoom",
              option: "zoomEl",
              onTap: a.toggleDesktopZoom
          }, {
              name: "counter",
              option: "counterEl",
              onInit: function(a) {
                  g = a
              }
          }, {
              name: "button--close",
              option: "closeEl",
              onTap: a.close
          }, {
              name: "button--arrow--left",
              option: "arrowEl",
              onTap: a.prev
          }, {
              name: "button--arrow--right",
              option: "arrowEl",
              onTap: a.next
          }, {
              name: "button--fs",
              option: "fullscreenEl",
              onTap: function() {
                  c.isFullscreen() ? c.exit() : c.enter()
              }
          }, {
              name: "preloader",
              option: "preloaderEl",
              onInit: function(a) {
                  m = a
              }
          }],
          T = function() {
              var a, c, e, f = function(d) {
                  if (d)
                      for (var f = d.length, g = 0; f > g; g++) {
                          a = d[g], c = a.className;
                          for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
                      }
              };
              f(d.children);
              var g = b.getChildByClass(d, "pswp__top-bar");
              g && f(g.children)
          };
      v.init = function() {
          b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
              var c = a.currItem.initialZoomLevel;
              a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
          }), l("preventDragEvent", function(a, b, c) {
              var d = a.target || a.srcElement;
              d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
          }), l("bindEvents", function() {
              b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
          }), l("unbindEvents", function() {
              y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
          }), l("destroy", function() {
              q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
          }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() {
              q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
          }), l("initialZoomOut", function() {
              b.addClass(d, "pswp__ui--hidden")
          }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
      }, v.setIdle = function(a) {
          k = a, C(d, "ui--idle", a)
      }, v.update = function() {
          x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
      }, v.updateFullscreen = function(d) {
          d && setTimeout(function() {
              a.setScrollOffset(0, b.getScrollY())
          }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
      }, v.updateIndexIndicator = function() {
          q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
      }, v.onGlobalTap = function(c) {
          c = c || window.event;
          var d = c.target || c.srcElement;
          if (!r)
              if (c.detail && "mouse" === c.detail.pointerType) {
                  if (I(d)) return void a.close();
                  b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
              } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
      }, v.onMouseOver = function(a) {
          a = a || window.event;
          var b = a.target || a.srcElement;
          C(d, "ui--over-close", I(b))
      }, v.hideControls = function() {
          b.addClass(d, "pswp__ui--hidden"), x = !1
      }, v.showControls = function() {
          x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
      }, v.supportsFullscreen = function() {
          var a = document;
          return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
      }, v.getFullscreenAPI = function() {
          var b, c = document.documentElement,
              d = "fullscreenchange";
          return c.requestFullscreen ? b = {
              enterK: "requestFullscreen",
              exitK: "exitFullscreen",
              elementK: "fullscreenElement",
              eventK: d
          } : c.mozRequestFullScreen ? b = {
              enterK: "mozRequestFullScreen",
              exitK: "mozCancelFullScreen",
              elementK: "mozFullScreenElement",
              eventK: "moz" + d
          } : c.webkitRequestFullscreen ? b = {
              enterK: "webkitRequestFullscreen",
              exitK: "webkitExitFullscreen",
              elementK: "webkitFullscreenElement",
              eventK: "webkit" + d
          } : c.msRequestFullscreen && (b = {
              enterK: "msRequestFullscreen",
              exitK: "msExitFullscreen",
              elementK: "msFullscreenElement",
              eventK: "MSFullscreenChange"
          }), b && (b.enter = function() {
              return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
          }, b.exit = function() {
              return q.closeOnScroll = j, document[this.exitK]()
          }, b.isFullscreen = function() {
              return document[this.elementK]
          }), b
      }
  };
  return a
});

/*! VelocityJS.org (1.4.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(a) {
  "use strict";

  function b(a) {
      var b = a.length,
          d = c.type(a);
      return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
  }
  if (!a.jQuery) {
      var c = function(a, b) {
          return new c.fn.init(a, b)
      };
      c.isWindow = function(a) {
          return a && a === a.window
      }, c.type = function(a) {
          return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + ""
      }, c.isArray = Array.isArray || function(a) {
          return "array" === c.type(a)
      }, c.isPlainObject = function(a) {
          var b;
          if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
          try {
              if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
          } catch (d) {
              return !1
          }
          for (b in a);
          return void 0 === b || f.call(a, b)
      }, c.each = function(a, c, d) {
          var e, f = 0,
              g = a.length,
              h = b(a);
          if (d) {
              if (h)
                  for (; f < g && (e = c.apply(a[f], d), e !== !1); f++);
              else
                  for (f in a)
                      if (a.hasOwnProperty(f) && (e = c.apply(a[f], d), e === !1)) break
          } else if (h)
              for (; f < g && (e = c.call(a[f], f, a[f]), e !== !1); f++);
          else
              for (f in a)
                  if (a.hasOwnProperty(f) && (e = c.call(a[f], f, a[f]), e === !1)) break; return a
      }, c.data = function(a, b, e) {
          if (void 0 === e) {
              var f = a[c.expando],
                  g = f && d[f];
              if (void 0 === b) return g;
              if (g && b in g) return g[b]
          } else if (void 0 !== b) {
              var h = a[c.expando] || (a[c.expando] = ++c.uuid);
              return d[h] = d[h] || {}, d[h][b] = e, e
          }
      }, c.removeData = function(a, b) {
          var e = a[c.expando],
              f = e && d[e];
          f && (b ? c.each(b, function(a, b) {
              delete f[b]
          }) : delete d[e])
      }, c.extend = function() {
          var a, b, d, e, f, g, h = arguments[0] || {},
              i = 1,
              j = arguments.length,
              k = !1;
          for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++)
              if (f = arguments[i])
                  for (e in f) f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d)));
          return h
      }, c.queue = function(a, d, e) {
          function f(a, c) {
              var d = c || [];
              return a && (b(Object(a)) ? ! function(a, b) {
                  for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
                  if (c !== c)
                      for (; void 0 !== b[d];) a[e++] = b[d++];
                  return a.length = e, a
              }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
          }
          if (a) {
              d = (d || "fx") + "queue";
              var g = c.data(a, d);
              return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
          }
      }, c.dequeue = function(a, b) {
          c.each(a.nodeType ? [a] : a, function(a, d) {
              b = b || "fx";
              var e = c.queue(d, b),
                  f = e.shift();
              "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                  c.dequeue(d, b)
              }))
          })
      }, c.fn = c.prototype = {
          init: function(a) {
              if (a.nodeType) return this[0] = a, this;
              throw new Error("Not a DOM node.")
          },
          offset: function() {
              var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                  top: 0,
                  left: 0
              };
              return {
                  top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                  left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
              }
          },
          position: function() {
              function a(a) {
                  for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;) b = b.offsetParent;
                  return b || document
              }
              var b = this[0],
                  d = a(b),
                  e = this.offset(),
                  f = /^(?:body|html)$/i.test(d.nodeName) ? {
                      top: 0,
                      left: 0
                  } : c(d).offset();
              return e.top -= parseFloat(b.style.marginTop) || 0, e.left -= parseFloat(b.style.marginLeft) || 0, d.style && (f.top += parseFloat(d.style.borderTopWidth) || 0, f.left += parseFloat(d.style.borderLeftWidth) || 0), {
                  top: e.top - f.top,
                  left: e.left - f.left
              }
          }
      };
      var d = {};
      c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
      for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
      c.fn.init.prototype = c.fn, a.Velocity = {
          Utilities: c
      }
  }
}(window),
function(a) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
  "use strict";
  return function(a, b, c, d) {
      function e(a) {
          for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
              var e = a[b];
              e && d.push(e)
          }
          return d
      }

      function f(a) {
          return t.isWrapped(a) ? a = s.call(a) : t.isNode(a) && (a = [a]), a
      }

      function g(a) {
          var b = o.data(a, "velocity");
          return null === b ? d : b
      }

      function h(a, b) {
          var c = g(a);
          c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout))
      }

      function i(a, b) {
          var c = g(a);
          c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining))
      }

      function j(a) {
          return function(b) {
              return Math.round(b * a) * (1 / a)
          }
      }

      function k(a, c, d, e) {
          function f(a, b) {
              return 1 - 3 * b + 3 * a
          }

          function g(a, b) {
              return 3 * b - 6 * a
          }

          function h(a) {
              return 3 * a
          }

          function i(a, b, c) {
              return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
          }

          function j(a, b, c) {
              return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
          }

          function k(b, c) {
              for (var e = 0; e < p; ++e) {
                  var f = j(c, a, d);
                  if (0 === f) return c;
                  var g = i(c, a, d) - b;
                  c -= g / f
              }
              return c
          }

          function l() {
              for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d)
          }

          function m(b, c, e) {
              var f, g, h = 0;
              do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
              return g
          }

          function n(b) {
              for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
              --e;
              var g = (b - x[e]) / (x[e + 1] - x[e]),
                  h = c + g * u,
                  i = j(h, a, d);
              return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u)
          }

          function o() {
              y = !0, a === c && d === e || l()
          }
          var p = 4,
              q = .001,
              r = 1e-7,
              s = 10,
              t = 11,
              u = 1 / (t - 1),
              v = "Float32Array" in b;
          if (4 !== arguments.length) return !1;
          for (var w = 0; w < 4; ++w)
              if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
          a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
          var x = v ? new Float32Array(t) : new Array(t),
              y = !1,
              z = function(b) {
                  return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
              };
          z.getControlPoints = function() {
              return [{
                  x: a,
                  y: c
              }, {
                  x: d,
                  y: e
              }]
          };
          var A = "generateBezier(" + [a, c, d, e] + ")";
          return z.toString = function() {
              return A
          }, z
      }

      function l(a, b) {
          var c = a;
          return t.isString(a) ? x.Easings[a] || (c = !1) : c = t.isArray(a) && 1 === a.length ? j.apply(null, a) : t.isArray(a) && 2 === a.length ? y.apply(null, a.concat([b])) : !(!t.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = x.Easings[x.defaults.easing] ? x.defaults.easing : w), c
      }

      function m(a) {
          if (a) {
              var b = x.timestamp && a !== !0 ? a : r.now(),
                  c = x.State.calls.length;
              c > 1e4 && (x.State.calls = e(x.State.calls), c = x.State.calls.length);
              for (var f = 0; f < c; f++)
                  if (x.State.calls[f]) {
                      var h = x.State.calls[f],
                          i = h[0],
                          j = h[2],
                          k = h[3],
                          l = !!k,
                          q = null,
                          s = h[5],
                          u = h[6];
                      if (k || (k = x.State.calls[f][3] = b - 16), s) {
                          if (s.resume !== !0) continue;
                          k = h[3] = Math.round(b - u - 16), h[5] = null
                      }
                      u = h[6] = b - k;
                      for (var v = Math.min(u / j.duration, 1), w = 0, y = i.length; w < y; w++) {
                          var A = i[w],
                              C = A.element;
                          if (g(C)) {
                              var D = !1;
                              if (j.display !== d && null !== j.display && "none" !== j.display) {
                                  if ("flex" === j.display) {
                                      var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                      o.each(E, function(a, b) {
                                          z.setPropertyValue(C, "display", b)
                                      })
                                  }
                                  z.setPropertyValue(C, "display", j.display)
                              }
                              j.visibility !== d && "hidden" !== j.visibility && z.setPropertyValue(C, "visibility", j.visibility);
                              for (var F in A)
                                  if (A.hasOwnProperty(F) && "element" !== F) {
                                      var G, H = A[F],
                                          I = t.isString(H.easing) ? x.Easings[H.easing] : H.easing;
                                      if (t.isString(H.pattern)) {
                                          var J = 1 === v ? function(a, b, c) {
                                              var d = H.endValue[b];
                                              return c ? Math.round(d) : d
                                          } : function(a, b, c) {
                                              var d = H.startValue[b],
                                                  e = H.endValue[b] - d,
                                                  f = d + e * I(v, j, e);
                                              return c ? Math.round(f) : f
                                          };
                                          G = H.pattern.replace(/{(\d+)(!)?}/g, J)
                                      } else if (1 === v) G = H.endValue;
                                      else {
                                          var K = H.endValue - H.startValue;
                                          G = H.startValue + K * I(v, j, K)
                                      }
                                      if (!l && G === H.currentValue) continue;
                                      if (H.currentValue = G, "tween" === F) q = G;
                                      else {
                                          var L;
                                          if (z.Hooks.registered[F]) {
                                              L = z.Hooks.getRoot(F);
                                              var M = g(C).rootPropertyValueCache[L];
                                              M && (H.rootPropertyValue = M)
                                          }
                                          var N = z.setPropertyValue(C, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                                          z.Hooks.registered[F] && (z.Normalizations.registered[L] ? g(C).rootPropertyValueCache[L] = z.Normalizations.registered[L]("extract", null, N[1]) : g(C).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0)
                                      }
                                  }
                              j.mobileHA && g(C).transformCache.translate3d === d && (g(C).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && z.flushTransformCache(C)
                          }
                      }
                      j.display !== d && "none" !== j.display && (x.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (x.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f)
                  }
          }
          x.State.isTicking && B(m)
      }

      function n(a, b) {
          if (!x.State.calls[a]) return !1;
          for (var c = x.State.calls[a][0], e = x.State.calls[a][1], f = x.State.calls[a][2], h = x.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
              var l = c[j].element;
              b || f.loop || ("none" === f.display && z.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && z.setPropertyValue(l, "visibility", f.visibility));
              var m = g(l);
              if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
                  m.isAnimating = !1, m.rootPropertyValueCache = {};
                  var n = !1;
                  o.each(z.Lists.transforms3D, function(a, b) {
                      var c = /^scale/.test(b) ? 1 : 0,
                          e = m.transformCache[b];
                      m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b])
                  }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && z.flushTransformCache(l), z.Values.removeClass(l, "velocity-animating")
              }
              if (!b && f.complete && !f.loop && j === k - 1) try {
                  f.complete.call(e, e)
              } catch (p) {
                  setTimeout(function() {
                      throw p
                  }, 1)
              }
              h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function(a, b) {
                  if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 === 0) {
                      var c = b.startValue;
                      b.startValue = b.endValue, b.endValue = c
                  }
                  /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
              }), x(l, "reverse", {
                  loop: !0,
                  delay: f.delay
              })), f.queue !== !1 && o.dequeue(l, f.queue)
          }
          x.State.calls[a] = !1;
          for (var q = 0, r = x.State.calls.length; q < r; q++)
              if (x.State.calls[q] !== !1) {
                  i = !0;
                  break
              }
          i === !1 && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = [])
      }
      var o, p = function() {
              if (c.documentMode) return c.documentMode;
              for (var a = 7; a > 4; a--) {
                  var b = c.createElement("div");
                  if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
              }
              return d
          }(),
          q = function() {
              var a = 0;
              return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                  var c, d = (new Date).getTime();
                  return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                      b(d + c)
                  }, c)
              }
          }(),
          r = function() {
              var a = b.performance || {};
              if (!Object.prototype.hasOwnProperty.call(a, "now")) {
                  var c = a.timing && a.timing.domComplete ? a.timing.domComplete : (new Date).getTime();
                  a.now = function() {
                      return (new Date).getTime() - c
                  }
              }
              return a
          }(),
          s = function() {
              var a = Array.prototype.slice;
              try {
                  a.call(c.documentElement)
              } catch (b) {
                  a = function() {
                      for (var a = this.length, b = []; --a > 0;) b[a] = this[a];
                      return b
                  }
              }
              return a
          }(),
          t = {
              isNumber: function(a) {
                  return "number" == typeof a
              },
              isString: function(a) {
                  return "string" == typeof a
              },
              isArray: Array.isArray || function(a) {
                  return "[object Array]" === Object.prototype.toString.call(a)
              },
              isFunction: function(a) {
                  return "[object Function]" === Object.prototype.toString.call(a)
              },
              isNode: function(a) {
                  return a && a.nodeType
              },
              isWrapped: function(a) {
                  return a && t.isNumber(a.length) && !t.isString(a) && !t.isFunction(a) && !t.isNode(a) && (0 === a.length || t.isNode(a[0]))
              },
              isSVG: function(a) {
                  return b.SVGElement && a instanceof b.SVGElement
              },
              isEmptyObject: function(a) {
                  for (var b in a)
                      if (a.hasOwnProperty(b)) return !1;
                  return !0
              }
          },
          u = !1;
      if (a.fn && a.fn.jquery ? (o = a, u = !0) : o = b.Velocity.Utilities, p <= 8 && !u) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
      var v = 400,
          w = "swing",
          x = {
              State: {
                  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                  isAndroid: /Android/i.test(navigator.userAgent),
                  isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                  isChrome: b.chrome,
                  isFirefox: /Firefox/i.test(navigator.userAgent),
                  prefixElement: c.createElement("div"),
                  prefixMatches: {},
                  scrollAnchor: null,
                  scrollPropertyLeft: null,
                  scrollPropertyTop: null,
                  isTicking: !1,
                  calls: [],
                  delayedElements: {
                      count: 0
                  }
              },
              CSS: {},
              Utilities: o,
              Redirects: {},
              Easings: {},
              Promise: b.Promise,
              defaults: {
                  queue: "",
                  duration: v,
                  easing: w,
                  begin: d,
                  complete: d,
                  progress: d,
                  display: d,
                  visibility: d,
                  loop: !1,
                  delay: !1,
                  mobileHA: !0,
                  _cacheValues: !0,
                  promiseRejectEmpty: !0
              },
              init: function(a) {
                  o.data(a, "velocity", {
                      isSVG: t.isSVG(a),
                      isAnimating: !1,
                      computedStyle: null,
                      tweensContainer: null,
                      rootPropertyValueCache: {},
                      transformCache: {}
                  })
              },
              hook: null,
              mock: !1,
              version: {
                  major: 1,
                  minor: 4,
                  patch: 2
              },
              debug: !1,
              timestamp: !0,
              pauseAll: function(a) {
                  var b = (new Date).getTime();
                  o.each(x.State.calls, function(b, c) {
                      if (c) {
                          if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                          c[5] = {
                              resume: !1
                          }
                      }
                  }), o.each(x.State.delayedElements, function(a, c) {
                      c && h(c, b)
                  })
              },
              resumeAll: function(a) {
                  var b = (new Date).getTime();
                  o.each(x.State.calls, function(b, c) {
                      if (c) {
                          if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                          c[5] && (c[5].resume = !0)
                      }
                  }), o.each(x.State.delayedElements, function(a, c) {
                      c && i(c, b)
                  })
              }
          };
      b.pageYOffset !== d ? (x.State.scrollAnchor = b, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");
      var y = function() {
          function a(a) {
              return -a.tension * a.x - a.friction * a.v
          }

          function b(b, c, d) {
              var e = {
                  x: b.x + d.dx * c,
                  v: b.v + d.dv * c,
                  tension: b.tension,
                  friction: b.friction
              };
              return {
                  dx: e.v,
                  dv: a(e)
              }
          }

          function c(c, d) {
              var e = {
                      dx: c.v,
                      dv: a(c)
                  },
                  f = b(c, .5 * d, e),
                  g = b(c, .5 * d, f),
                  h = b(c, d, g),
                  i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                  j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
              return c.x = c.x + i * d, c.v = c.v + j * d, c
          }
          return function d(a, b, e) {
              var f, g, h, i = {
                      x: -1,
                      v: 0,
                      tension: null,
                      friction: null
                  },
                  j = [0],
                  k = 0,
                  l = 1e-4,
                  m = .016;
              for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m;;)
                  if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > l && Math.abs(h.v) > l)) break;
              return f ? function(a) {
                  return j[a * (j.length - 1) | 0]
              } : k
          }
      }();
      x.Easings = {
          linear: function(a) {
              return a
          },
          swing: function(a) {
              return .5 - Math.cos(a * Math.PI) / 2
          },
          spring: function(a) {
              return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
          }
      }, o.each([
          ["ease", [.25, .1, .25, 1]],
          ["ease-in", [.42, 0, 1, 1]],
          ["ease-out", [0, 0, .58, 1]],
          ["ease-in-out", [.42, 0, .58, 1]],
          ["easeInSine", [.47, 0, .745, .715]],
          ["easeOutSine", [.39, .575, .565, 1]],
          ["easeInOutSine", [.445, .05, .55, .95]],
          ["easeInQuad", [.55, .085, .68, .53]],
          ["easeOutQuad", [.25, .46, .45, .94]],
          ["easeInOutQuad", [.455, .03, .515, .955]],
          ["easeInCubic", [.55, .055, .675, .19]],
          ["easeOutCubic", [.215, .61, .355, 1]],
          ["easeInOutCubic", [.645, .045, .355, 1]],
          ["easeInQuart", [.895, .03, .685, .22]],
          ["easeOutQuart", [.165, .84, .44, 1]],
          ["easeInOutQuart", [.77, 0, .175, 1]],
          ["easeInQuint", [.755, .05, .855, .06]],
          ["easeOutQuint", [.23, 1, .32, 1]],
          ["easeInOutQuint", [.86, 0, .07, 1]],
          ["easeInExpo", [.95, .05, .795, .035]],
          ["easeOutExpo", [.19, 1, .22, 1]],
          ["easeInOutExpo", [1, 0, 0, 1]],
          ["easeInCirc", [.6, .04, .98, .335]],
          ["easeOutCirc", [.075, .82, .165, 1]],
          ["easeInOutCirc", [.785, .135, .15, .86]]
      ], function(a, b) {
          x.Easings[b[0]] = k.apply(null, b[1])
      });
      var z = x.CSS = {
          RegEx: {
              isHex: /^#([A-f\d]{3}){1,2}$/i,
              valueUnwrap: /^[A-z]+\((.*)\)$/i,
              wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
              valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
          },
          Lists: {
              colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
              transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
              transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
              units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
              colorNames: {
                  aliceblue: "240,248,255",
                  antiquewhite: "250,235,215",
                  aquamarine: "127,255,212",
                  aqua: "0,255,255",
                  azure: "240,255,255",
                  beige: "245,245,220",
                  bisque: "255,228,196",
                  black: "0,0,0",
                  blanchedalmond: "255,235,205",
                  blueviolet: "138,43,226",
                  blue: "0,0,255",
                  brown: "165,42,42",
                  burlywood: "222,184,135",
                  cadetblue: "95,158,160",
                  chartreuse: "127,255,0",
                  chocolate: "210,105,30",
                  coral: "255,127,80",
                  cornflowerblue: "100,149,237",
                  cornsilk: "255,248,220",
                  crimson: "220,20,60",
                  cyan: "0,255,255",
                  darkblue: "0,0,139",
                  darkcyan: "0,139,139",
                  darkgoldenrod: "184,134,11",
                  darkgray: "169,169,169",
                  darkgrey: "169,169,169",
                  darkgreen: "0,100,0",
                  darkkhaki: "189,183,107",
                  darkmagenta: "139,0,139",
                  darkolivegreen: "85,107,47",
                  darkorange: "255,140,0",
                  darkorchid: "153,50,204",
                  darkred: "139,0,0",
                  darksalmon: "233,150,122",
                  darkseagreen: "143,188,143",
                  darkslateblue: "72,61,139",
                  darkslategray: "47,79,79",
                  darkturquoise: "0,206,209",
                  darkviolet: "148,0,211",
                  deeppink: "255,20,147",
                  deepskyblue: "0,191,255",
                  dimgray: "105,105,105",
                  dimgrey: "105,105,105",
                  dodgerblue: "30,144,255",
                  firebrick: "178,34,34",
                  floralwhite: "255,250,240",
                  forestgreen: "34,139,34",
                  fuchsia: "255,0,255",
                  gainsboro: "220,220,220",
                  ghostwhite: "248,248,255",
                  gold: "255,215,0",
                  goldenrod: "218,165,32",
                  gray: "128,128,128",
                  grey: "128,128,128",
                  greenyellow: "173,255,47",
                  green: "0,128,0",
                  honeydew: "240,255,240",
                  hotpink: "255,105,180",
                  indianred: "205,92,92",
                  indigo: "75,0,130",
                  ivory: "255,255,240",
                  khaki: "240,230,140",
                  lavenderblush: "255,240,245",
                  lavender: "230,230,250",
                  lawngreen: "124,252,0",
                  lemonchiffon: "255,250,205",
                  lightblue: "173,216,230",
                  lightcoral: "240,128,128",
                  lightcyan: "224,255,255",
                  lightgoldenrodyellow: "250,250,210",
                  lightgray: "211,211,211",
                  lightgrey: "211,211,211",
                  lightgreen: "144,238,144",
                  lightpink: "255,182,193",
                  lightsalmon: "255,160,122",
                  lightseagreen: "32,178,170",
                  lightskyblue: "135,206,250",
                  lightslategray: "119,136,153",
                  lightsteelblue: "176,196,222",
                  lightyellow: "255,255,224",
                  limegreen: "50,205,50",
                  lime: "0,255,0",
                  linen: "250,240,230",
                  magenta: "255,0,255",
                  maroon: "128,0,0",
                  mediumaquamarine: "102,205,170",
                  mediumblue: "0,0,205",
                  mediumorchid: "186,85,211",
                  mediumpurple: "147,112,219",
                  mediumseagreen: "60,179,113",
                  mediumslateblue: "123,104,238",
                  mediumspringgreen: "0,250,154",
                  mediumturquoise: "72,209,204",
                  mediumvioletred: "199,21,133",
                  midnightblue: "25,25,112",
                  mintcream: "245,255,250",
                  mistyrose: "255,228,225",
                  moccasin: "255,228,181",
                  navajowhite: "255,222,173",
                  navy: "0,0,128",
                  oldlace: "253,245,230",
                  olivedrab: "107,142,35",
                  olive: "128,128,0",
                  orangered: "255,69,0",
                  orange: "255,165,0",
                  orchid: "218,112,214",
                  palegoldenrod: "238,232,170",
                  palegreen: "152,251,152",
                  paleturquoise: "175,238,238",
                  palevioletred: "219,112,147",
                  papayawhip: "255,239,213",
                  peachpuff: "255,218,185",
                  peru: "205,133,63",
                  pink: "255,192,203",
                  plum: "221,160,221",
                  powderblue: "176,224,230",
                  purple: "128,0,128",
                  red: "255,0,0",
                  rosybrown: "188,143,143",
                  royalblue: "65,105,225",
                  saddlebrown: "139,69,19",
                  salmon: "250,128,114",
                  sandybrown: "244,164,96",
                  seagreen: "46,139,87",
                  seashell: "255,245,238",
                  sienna: "160,82,45",
                  silver: "192,192,192",
                  skyblue: "135,206,235",
                  slateblue: "106,90,205",
                  slategray: "112,128,144",
                  snow: "255,250,250",
                  springgreen: "0,255,127",
                  steelblue: "70,130,180",
                  tan: "210,180,140",
                  teal: "0,128,128",
                  thistle: "216,191,216",
                  tomato: "255,99,71",
                  turquoise: "64,224,208",
                  violet: "238,130,238",
                  wheat: "245,222,179",
                  whitesmoke: "245,245,245",
                  white: "255,255,255",
                  yellowgreen: "154,205,50",
                  yellow: "255,255,0"
              }
          },
          Hooks: {
              templates: {
                  textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                  boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                  clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                  backgroundPosition: ["X Y", "0% 0%"],
                  transformOrigin: ["X Y Z", "50% 50% 0px"],
                  perspectiveOrigin: ["X Y", "50% 50%"]
              },
              registered: {},
              register: function() {
                  for (var a = 0; a < z.Lists.colors.length; a++) {
                      var b = "color" === z.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                      z.Hooks.templates[z.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                  }
                  var c, d, e;
                  if (p)
                      for (c in z.Hooks.templates)
                          if (z.Hooks.templates.hasOwnProperty(c)) {
                              d = z.Hooks.templates[c], e = d[0].split(" ");
                              var f = d[1].match(z.RegEx.valueSplit);
                              "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), z.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                          }
                  for (c in z.Hooks.templates)
                      if (z.Hooks.templates.hasOwnProperty(c)) {
                          d = z.Hooks.templates[c], e = d[0].split(" ");
                          for (var g in e)
                              if (e.hasOwnProperty(g)) {
                                  var h = c + e[g],
                                      i = g;
                                  z.Hooks.registered[h] = [c, i]
                              }
                      }
              },
              getRoot: function(a) {
                  var b = z.Hooks.registered[a];
                  return b ? b[0] : a
              },
              getUnit: function(a, b) {
                  var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                  return c && z.Lists.units.indexOf(c) >= 0 ? c : ""
              },
              fixColors: function(a) {
                  return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(a, b, c) {
                      return z.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + z.Lists.colorNames[c] + (b ? "" : ",1)") : b + c
                  })
              },
              cleanRootPropertyValue: function(a, b) {
                  return z.RegEx.valueUnwrap.test(b) && (b = b.match(z.RegEx.valueUnwrap)[1]), z.Values.isCSSNullValue(b) && (b = z.Hooks.templates[a][1]), b
              },
              extractValue: function(a, b) {
                  var c = z.Hooks.registered[a];
                  if (c) {
                      var d = c[0],
                          e = c[1];
                      return b = z.Hooks.cleanRootPropertyValue(d, b), b.toString().match(z.RegEx.valueSplit)[e]
                  }
                  return b
              },
              injectValue: function(a, b, c) {
                  var d = z.Hooks.registered[a];
                  if (d) {
                      var e, f, g = d[0],
                          h = d[1];
                      return c = z.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(z.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                  }
                  return c
              }
          },
          Normalizations: {
              registered: {
                  clip: function(a, b, c) {
                      switch (a) {
                          case "name":
                              return "clip";
                          case "extract":
                              var d;
                              return z.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(z.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                          case "inject":
                              return "rect(" + c + ")"
                      }
                  },
                  blur: function(a, b, c) {
                      switch (a) {
                          case "name":
                              return x.State.isFirefox ? "filter" : "-webkit-filter";
                          case "extract":
                              var d = parseFloat(c);
                              if (!d && 0 !== d) {
                                  var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                  d = e ? e[1] : 0
                              }
                              return d;
                          case "inject":
                              return parseFloat(c) ? "blur(" + c + ")" : "none"
                      }
                  },
                  opacity: function(a, b, c) {
                      if (p <= 8) switch (a) {
                          case "name":
                              return "filter";
                          case "extract":
                              var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                              return c = d ? d[1] / 100 : 1;
                          case "inject":
                              return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                      } else switch (a) {
                          case "name":
                              return "opacity";
                          case "extract":
                              return c;
                          case "inject":
                              return c
                      }
                  }
              },
              register: function() {
                  function a(a, b, c) {
                      var d = "border-box" === z.getPropertyValue(b, "boxSizing").toString().toLowerCase();
                      if (d === (c || !1)) {
                          var e, f, g = 0,
                              h = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                              i = ["padding" + h[0], "padding" + h[1], "border" + h[0] + "Width", "border" + h[1] + "Width"];
                          for (e = 0; e < i.length; e++) f = parseFloat(z.getPropertyValue(b, i[e])), isNaN(f) || (g += f);
                          return c ? -g : g
                      }
                      return 0
                  }

                  function b(b, c) {
                      return function(d, e, f) {
                          switch (d) {
                              case "name":
                                  return b;
                              case "extract":
                                  return parseFloat(f) + a(b, e, c);
                              case "inject":
                                  return parseFloat(f) - a(b, e, c) + "px"
                          }
                      }
                  }
                  p && !(p > 9) || x.State.isGingerbread || (z.Lists.transformsBase = z.Lists.transformsBase.concat(z.Lists.transforms3D));
                  for (var c = 0; c < z.Lists.transformsBase.length; c++) ! function() {
                      var a = z.Lists.transformsBase[c];
                      z.Normalizations.registered[a] = function(b, c, e) {
                          switch (b) {
                              case "name":
                                  return "transform";
                              case "extract":
                                  return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");
                              case "inject":
                                  var f = !1;
                                  switch (a.substr(0, a.length - 1)) {
                                      case "translate":
                                          f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                          break;
                                      case "scal":
                                      case "scale":
                                          x.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);
                                          break;
                                      case "skew":
                                          f = !/(deg|\d)$/i.test(e);
                                          break;
                                      case "rotate":
                                          f = !/(deg|\d)$/i.test(e)
                                  }
                                  return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a]
                          }
                      }
                  }();
                  for (var e = 0; e < z.Lists.colors.length; e++) ! function() {
                      var a = z.Lists.colors[e];
                      z.Normalizations.registered[a] = function(b, c, e) {
                          switch (b) {
                              case "name":
                                  return a;
                              case "extract":
                                  var f;
                                  if (z.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                  else {
                                      var g, h = {
                                          black: "rgb(0, 0, 0)",
                                          blue: "rgb(0, 0, 255)",
                                          gray: "rgb(128, 128, 128)",
                                          green: "rgb(0, 128, 0)",
                                          red: "rgb(255, 0, 0)",
                                          white: "rgb(255, 255, 255)"
                                      };
                                      /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : z.RegEx.isHex.test(e) ? g = "rgb(" + z.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                  }
                                  return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
                              case "inject":
                                  return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                          }
                      }
                  }();
                  z.Normalizations.registered.innerWidth = b("width", !0), z.Normalizations.registered.innerHeight = b("height", !0), z.Normalizations.registered.outerWidth = b("width"), z.Normalizations.registered.outerHeight = b("height")
              }
          },
          Names: {
              camelCase: function(a) {
                  return a.replace(/-(\w)/g, function(a, b) {
                      return b.toUpperCase()
                  })
              },
              SVGAttribute: function(a) {
                  var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                  return (p || x.State.isAndroid && !x.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
              },
              prefixCheck: function(a) {
                  if (x.State.prefixMatches[a]) return [x.State.prefixMatches[a], !0];
                  for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
                      var e;
                      if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                              return a.toUpperCase()
                          }), t.isString(x.State.prefixElement.style[e])) return x.State.prefixMatches[a] = e, [e, !0]
                  }
                  return [a, !1]
              }
          },
          Values: {
              hexToRgb: function(a) {
                  var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                  return a = a.replace(c, function(a, b, c, d) {
                      return b + b + c + c + d + d
                  }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
              },
              isCSSNullValue: function(a) {
                  return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
              },
              getUnitType: function(a) {
                  return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
              },
              getDisplayType: function(a) {
                  var b = a && a.tagName.toString().toLowerCase();
                  return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
              },
              addClass: function(a, b) {
                  if (a)
                      if (a.classList) a.classList.add(b);
                      else if (t.isString(a.className)) a.className += (a.className.length ? " " : "") + b;
                  else {
                      var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                      a.setAttribute("class", c + (c ? " " : "") + b)
                  }
              },
              removeClass: function(a, b) {
                  if (a)
                      if (a.classList) a.classList.remove(b);
                      else if (t.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                  else {
                      var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                      a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "))
                  }
              }
          },
          getPropertyValue: function(a, c, e, f) {
              function h(a, c) {
                  var e = 0;
                  if (p <= 8) e = o.css(a, c);
                  else {
                      var i = !1;
                      /^(width|height)$/.test(c) && 0 === z.getPropertyValue(a, "display") && (i = !0, z.setPropertyValue(a, "display", z.Values.getDisplayType(a)));
                      var j = function() {
                          i && z.setPropertyValue(a, "display", "none")
                      };
                      if (!f) {
                          if ("height" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                              var k = a.offsetHeight - (parseFloat(z.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingBottom")) || 0);
                              return j(), k
                          }
                          if ("width" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                              var l = a.offsetWidth - (parseFloat(z.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingRight")) || 0);
                              return j(), l
                          }
                      }
                      var m;
                      m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j()
                  }
                  if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
                      var n = h(a, "position");
                      ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px")
                  }
                  return e
              }
              var i;
              if (z.Hooks.registered[c]) {
                  var j = c,
                      k = z.Hooks.getRoot(j);
                  e === d && (e = z.getPropertyValue(a, z.Names.prefixCheck(k)[0])), z.Normalizations.registered[k] && (e = z.Normalizations.registered[k]("extract", a, e)), i = z.Hooks.extractValue(j, e)
              } else if (z.Normalizations.registered[c]) {
                  var l, m;
                  l = z.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, z.Names.prefixCheck(l)[0]), z.Values.isCSSNullValue(m) && z.Hooks.templates[c] && (m = z.Hooks.templates[c][1])), i = z.Normalizations.registered[c]("extract", a, m)
              }
              if (!/^[\d-]/.test(i)) {
                  var n = g(a);
                  if (n && n.isSVG && z.Names.SVGAttribute(c))
                      if (/^(height|width)$/i.test(c)) try {
                          i = a.getBBox()[c]
                      } catch (q) {
                          i = 0
                      } else i = a.getAttribute(c);
                      else i = h(a, z.Names.prefixCheck(c)[0])
              }
              return z.Values.isCSSNullValue(i) && (i = 0), x.debug >= 2 && console.log("Get " + c + ": " + i), i
          },
          setPropertyValue: function(a, c, d, e, f) {
              var h = c;
              if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
              else if (z.Normalizations.registered[c] && "transform" === z.Normalizations.registered[c]("name", a)) z.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
              else {
                  if (z.Hooks.registered[c]) {
                      var i = c,
                          j = z.Hooks.getRoot(c);
                      e = e || z.getPropertyValue(a, j), d = z.Hooks.injectValue(i, d, e), c = j
                  }
                  if (z.Normalizations.registered[c] && (d = z.Normalizations.registered[c]("inject", a, d), c = z.Normalizations.registered[c]("name", a)), h = z.Names.prefixCheck(c)[0], p <= 8) try {
                      a.style[h] = d
                  } catch (k) {
                      x.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                  } else {
                      var l = g(a);
                      l && l.isSVG && z.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d
                  }
                  x.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
              }
              return [h, d]
          },
          flushTransformCache: function(a) {
              var b = "",
                  c = g(a);
              if ((p || x.State.isAndroid && !x.State.isChrome) && c && c.isSVG) {
                  var d = function(b) {
                          return parseFloat(z.getPropertyValue(a, b))
                      },
                      e = {
                          translate: [d("translateX"), d("translateY")],
                          skewX: [d("skewX")],
                          skewY: [d("skewY")],
                          scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
                          rotate: [d("rotateZ"), 0, 0]
                      };
                  o.each(g(a).transformCache, function(a) {
                      /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a])
                  })
              } else {
                  var f, h;
                  o.each(g(a).transformCache, function(c) {
                      return f = g(a).transformCache[c], "transformPerspective" === c ? (h = f, !0) : (9 === p && "rotateZ" === c && (c = "rotate"), void(b += c + f + " "))
                  }), h && (b = "perspective" + h + " " + b)
              }
              z.setPropertyValue(a, "transform", b)
          }
      };
      z.Hooks.register(), z.Normalizations.register(), x.hook = function(a, b, c) {
          var e;
          return a = f(a), o.each(a, function(a, f) {
              if (g(f) === d && x.init(f), c === d) e === d && (e = z.getPropertyValue(f, b));
              else {
                  var h = z.setPropertyValue(f, b, c);
                  "transform" === h[0] && x.CSS.flushTransformCache(f), e = h
              }
          }), e
      };
      var A = function() {
          function a() {
              return k ? y.promise || null : p
          }

          function e(a, e) {
              function f(f) {
                  var k, n;
                  if (i.begin && 0 === C) try {
                      i.begin.call(r, r)
                  } catch (p) {
                      setTimeout(function() {
                          throw p
                      }, 1)
                  }
                  if ("scroll" === F) {
                      var q, v, w, A = /^x$/i.test(i.axis) ? "Left" : "Top",
                          D = parseFloat(i.offset) || 0;
                      i.container ? t.isWrapped(i.container) || t.isNode(i.container) ? (i.container = i.container[0] || i.container, q = i.container["scroll" + A], w = q + o(a).position()[A.toLowerCase()] + D) : i.container = null : (q = x.State.scrollAnchor[x.State["scrollProperty" + A]], v = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], w = o(a).offset()[A.toLowerCase()] + D), j = {
                          scroll: {
                              rootPropertyValue: !1,
                              startValue: q,
                              currentValue: q,
                              endValue: w,
                              unitType: "",
                              easing: i.easing,
                              scrollData: {
                                  container: i.container,
                                  direction: A,
                                  alternateValue: v
                              }
                          },
                          element: a
                      }, x.debug && console.log("tweensContainer (scroll): ", j.scroll, a)
                  } else if ("reverse" === F) {
                      if (k = g(a), !k) return;
                      if (!k.tweensContainer) return void o.dequeue(a, i.queue);
                      "none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, u.easing || delete i.easing, u.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);
                      for (var E in n)
                          if (n.hasOwnProperty(E) && "element" !== E) {
                              var G = n[E].startValue;
                              n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = G, t.isEmptyObject(u) || (n[E].easing = i.easing), x.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a)
                          }
                      j = n
                  } else if ("start" === F) {
                      k = g(a), k && k.tweensContainer && k.isAnimating === !0 && (n = k.tweensContainer);
                      var H = function(b, c) {
                              var d, f, g;
                              return t.isFunction(b) && (b = b.call(a, e, B)), t.isArray(b) ? (d = b[0], !t.isArray(b[1]) && /^[\d-]/.test(b[1]) || t.isFunction(b[1]) || z.RegEx.isHex.test(b[1]) ? g = b[1] : t.isString(b[1]) && !z.RegEx.isHex.test(b[1]) && x.Easings[b[1]] || t.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), t.isFunction(d) && (d = d.call(a, e, B)), t.isFunction(g) && (g = g.call(a, e, B)), [d || 0, f, g]
                          },
                          I = function(e, f) {
                              var g, l = z.Hooks.getRoot(e),
                                  m = !1,
                                  p = f[0],
                                  q = f[1],
                                  r = f[2];
                              if (!(k && k.isSVG || "tween" === l || z.Names.prefixCheck(l)[1] !== !1 || z.Normalizations.registered[l] !== d)) return void(x.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
                              (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : z.Hooks.registered[e] ? r === d ? (m = z.getPropertyValue(a, l), r = z.getPropertyValue(a, e, m)) : m = z.Hooks.templates[l][1] : r === d && (r = z.getPropertyValue(a, e));
                              var s, u, v, w = !1,
                                  y = function(a, b) {
                                      var c, d;
                                      return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                          return c = a, ""
                                      }), c || (c = z.Values.getUnitType(a)), [d, c]
                                  };
                              if (r !== p && t.isString(r) && t.isString(p)) {
                                  g = "";
                                  var A = 0,
                                      B = 0,
                                      C = [],
                                      D = [],
                                      E = 0,
                                      F = 0,
                                      G = 0;
                                  for (r = z.Hooks.fixColors(r), p = z.Hooks.fixColors(p); A < r.length && B < p.length;) {
                                      var H = r[A],
                                          I = p[B];
                                      if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
                                          for (var J = H, K = I, M = ".", N = "."; ++A < r.length;) {
                                              if (H = r[A], H === M) M = "..";
                                              else if (!/\d/.test(H)) break;
                                              J += H
                                          }
                                          for (; ++B < p.length;) {
                                              if (I = p[B], I === N) N = "..";
                                              else if (!/\d/.test(I)) break;
                                              K += I
                                          }
                                          var O = z.Hooks.getUnit(r, A),
                                              P = z.Hooks.getUnit(p, B);
                                          if (A += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));
                                          else {
                                              var Q = parseFloat(J),
                                                  R = parseFloat(K);
                                              g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R))
                                          }
                                      } else {
                                          if (H !== I) {
                                              E = 0;
                                              break
                                          }
                                          g += H, A++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0)
                                      }
                                  }
                                  A === r.length && B === p.length || (x.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (x.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, u = v = "") : g = d)
                              }
                              g || (s = y(e, r), r = s[0], v = s[1], s = y(e, p), p = s[0].replace(/^([+-\/*])=/, function(a, b) {
                                  return w = b, ""
                              }), u = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === u && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, u = "em") : /^scale/.test(e) ? (p /= 100, u = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, u = "")));
                              var S = function() {
                                  var d = {
                                          myParent: a.parentNode || c.body,
                                          position: z.getPropertyValue(a, "position"),
                                          fontSize: z.getPropertyValue(a, "fontSize")
                                      },
                                      e = d.position === L.lastPosition && d.myParent === L.lastParent,
                                      f = d.fontSize === L.lastFontSize;
                                  L.lastParent = d.myParent, L.lastPosition = d.position, L.lastFontSize = d.fontSize;
                                  var g = 100,
                                      h = {};
                                  if (f && e) h.emToPx = L.lastEmToPx, h.percentToPxWidth = L.lastPercentToPxWidth, h.percentToPxHeight = L.lastPercentToPxHeight;
                                  else {
                                      var i = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                      x.init(i), d.myParent.appendChild(i), o.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                          x.CSS.setPropertyValue(i, b, "hidden")
                                      }), x.CSS.setPropertyValue(i, "position", d.position), x.CSS.setPropertyValue(i, "fontSize", d.fontSize), x.CSS.setPropertyValue(i, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                          x.CSS.setPropertyValue(i, b, g + "%")
                                      }), x.CSS.setPropertyValue(i, "paddingLeft", g + "em"), h.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(z.getPropertyValue(i, "width", null, !0)) || 1) / g, h.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(z.getPropertyValue(i, "height", null, !0)) || 1) / g, h.emToPx = L.lastEmToPx = (parseFloat(z.getPropertyValue(i, "paddingLeft")) || 1) / g, d.myParent.removeChild(i)
                                  }
                                  return null === L.remToPx && (L.remToPx = parseFloat(z.getPropertyValue(c.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(b.innerWidth) / 100, L.vhToPx = parseFloat(b.innerHeight) / 100), h.remToPx = L.remToPx, h.vwToPx = L.vwToPx, h.vhToPx = L.vhToPx, x.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(h), a), h
                              };
                              if (/[\/*]/.test(w)) u = v;
                              else if (v !== u && 0 !== r)
                                  if (0 === p) u = v;
                                  else {
                                      h = h || S();
                                      var T = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                      switch (v) {
                                          case "%":
                                              r *= "x" === T ? h.percentToPxWidth : h.percentToPxHeight;
                                              break;
                                          case "px":
                                              break;
                                          default:
                                              r *= h[v + "ToPx"]
                                      }
                                      switch (u) {
                                          case "%":
                                              r *= 1 / ("x" === T ? h.percentToPxWidth : h.percentToPxHeight);
                                              break;
                                          case "px":
                                              break;
                                          default:
                                              r *= 1 / h[u + "ToPx"]
                                      }
                                  }
                              switch (w) {
                                  case "+":
                                      p = r + p;
                                      break;
                                  case "-":
                                      p = r - p;
                                      break;
                                  case "*":
                                      p *= r;
                                      break;
                                  case "/":
                                      p = r / p
                              }
                              j[e] = {
                                  rootPropertyValue: m,
                                  startValue: r,
                                  currentValue: r,
                                  endValue: p,
                                  unitType: u,
                                  easing: q
                              }, g && (j[e].pattern = g), x.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
                          };
                      for (var J in s)
                          if (s.hasOwnProperty(J)) {
                              var K = z.Names.camelCase(J),
                                  N = H(s[J]);
                              if (z.Lists.colors.indexOf(K) >= 0) {
                                  var O = N[0],
                                      P = N[1],
                                      Q = N[2];
                                  if (z.RegEx.isHex.test(O)) {
                                      for (var R = ["Red", "Green", "Blue"], S = z.Values.hexToRgb(O), T = Q ? z.Values.hexToRgb(Q) : d, U = 0; U < R.length; U++) {
                                          var V = [S[U]];
                                          P && V.push(P), T !== d && V.push(T[U]), I(K + R[U], V)
                                      }
                                      continue
                                  }
                              }
                              I(K, N)
                          }
                      j.element = a
                  }
                  j.element && (z.Values.addClass(a, "velocity-animating"), M.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), C === B - 1 ? (x.State.calls.push([M, r, i, null, y.resolver, null, 0]), x.State.isTicking === !1 && (x.State.isTicking = !0, m())) : C++)
              }
              var h, i = o.extend({}, x.defaults, u),
                  j = {};
              switch (g(a) === d && x.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function(b) {
                  x.velocityQueueEntryFlag = !0;
                  var c = x.State.delayedElements.count++;
                  x.State.delayedElements[c] = a;
                  var d = function(a) {
                      return function() {
                          x.State.delayedElements[a] = !1, b()
                      }
                  }(c);
                  g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                      setTimeout: setTimeout(b, parseFloat(i.delay)),
                      next: d
                  }
              }), i.duration.toString().toLowerCase()) {
                  case "fast":
                      i.duration = 200;
                      break;
                  case "normal":
                      i.duration = v;
                      break;
                  case "slow":
                      i.duration = 600;
                      break;
                  default:
                      i.duration = parseFloat(i.duration) || 1
              }
              if (x.mock !== !1 && (x.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(x.mock) || 1, i.delay *= parseFloat(x.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !t.isFunction(i.begin) && (i.begin = null), i.progress && !t.isFunction(i.progress) && (i.progress = null), i.complete && !t.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = x.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && x.State.isMobile && !x.State.isGingerbread, i.queue === !1)
                  if (i.delay) {
                      var k = x.State.delayedElements.count++;
                      x.State.delayedElements[k] = a;
                      var n = function(a) {
                          return function() {
                              x.State.delayedElements[a] = !1, f()
                          }
                      }(k);
                      g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                          setTimeout: setTimeout(f, parseFloat(i.delay)),
                          next: n
                      }
                  } else f();
              else o.queue(a, i.queue, function(a, b) {
                  return b === !0 ? (y.promise && y.resolver(r), !0) : (x.velocityQueueEntryFlag = !0, void f(a))
              });
              "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
          }
          var j, k, p, q, r, s, u, w = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || t.isString(arguments[0].properties));
          t.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = w ? arguments[0].elements || arguments[0].e : arguments[0]);
          var y = {
              promise: null,
              resolver: null,
              rejecter: null
          };
          if (k && x.Promise && (y.promise = new x.Promise(function(a, b) {
                  y.resolver = a, y.rejecter = b
              })), w ? (s = arguments[0].properties || arguments[0].p, u = arguments[0].options || arguments[0].o) : (s = arguments[q], u = arguments[q + 1]), r = f(r), !r) return void(y.promise && (s && u && u.promiseRejectEmpty === !1 ? y.resolver() : y.rejecter()));
          var B = r.length,
              C = 0;
          if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(u)) {
              var D = q + 1;
              u = {};
              for (var E = D; E < arguments.length; E++) t.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? t.isString(arguments[E]) || t.isArray(arguments[E]) ? u.easing = arguments[E] : t.isFunction(arguments[E]) && (u.complete = arguments[E]) : u.duration = arguments[E]
          }
          var F;
          switch (s) {
              case "scroll":
                  F = "scroll";
                  break;
              case "reverse":
                  F = "reverse";
                  break;
              case "pause":
                  var G = (new Date).getTime();
                  return o.each(r, function(a, b) {
                      h(b, G)
                  }), o.each(x.State.calls, function(a, b) {
                      var c = !1;
                      b && o.each(b[1], function(a, e) {
                          var f = u === d ? "" : u;
                          return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || (o.each(r, function(a, d) {
                              if (d === e) return b[5] = {
                                  resume: !1
                              }, c = !0, !1
                          }), !c && void 0)
                      })
                  }), a();
              case "resume":
                  return o.each(r, function(a, b) {
                      i(b, G)
                  }), o.each(x.State.calls, function(a, b) {
                      var c = !1;
                      b && o.each(b[1], function(a, e) {
                          var f = u === d ? "" : u;
                          return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || (!b[5] || (o.each(r, function(a, d) {
                              if (d === e) return b[5].resume = !0, c = !0, !1
                          }), !c && void 0))
                      })
                  }), a();
              case "finish":
              case "finishAll":
              case "stop":
                  o.each(r, function(a, b) {
                      g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || u !== !0 && !t.isString(u) || (o.each(o.queue(b, t.isString(u) ? u : ""), function(a, b) {
                          t.isFunction(b) && b()
                      }), o.queue(b, t.isString(u) ? u : "", []))
                  });
                  var H = [];
                  return o.each(x.State.calls, function(a, b) {
                      b && o.each(b[1], function(c, e) {
                          var f = u === d ? "" : u;
                          return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || void o.each(r, function(c, d) {
                              if (d === e)
                                  if ((u === !0 || t.isString(u)) && (o.each(o.queue(d, t.isString(u) ? u : ""), function(a, b) {
                                          t.isFunction(b) && b(null, !0)
                                      }), o.queue(d, t.isString(u) ? u : "", [])), "stop" === s) {
                                      var h = g(d);
                                      h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function(a, b) {
                                          b.endValue = b.currentValue
                                      }), H.push(a)
                                  } else "finish" !== s && "finishAll" !== s || (b[2].duration = 1)
                          })
                      })
                  }), "stop" === s && (o.each(H, function(a, b) {
                      n(b, !0)
                  }), y.promise && y.resolver(r)), a();
              default:
                  if (!o.isPlainObject(s) || t.isEmptyObject(s)) {
                      if (t.isString(s) && x.Redirects[s]) {
                          j = o.extend({}, u);
                          var I = j.duration,
                              J = j.delay || 0;
                          return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function(a, b) {
                              parseFloat(j.stagger) ? j.delay = J + parseFloat(j.stagger) * a : t.isFunction(j.stagger) && (j.delay = J + j.stagger.call(b, a, B)), j.drag && (j.duration = parseFloat(I) || (/^(callout|transition)/.test(s) ? 1e3 : v), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / B : (a + 1) / B), .75 * j.duration, 200)), x.Redirects[s].call(b, b, j || {}, a, B, r, y.promise ? y : d)
                          }), a()
                      }
                      var K = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
                      return y.promise ? y.rejecter(new Error(K)) : console.log(K), a()
                  }
                  F = "start"
          }
          var L = {
                  lastParent: null,
                  lastPosition: null,
                  lastFontSize: null,
                  lastPercentToPxWidth: null,
                  lastPercentToPxHeight: null,
                  lastEmToPx: null,
                  remToPx: null,
                  vwToPx: null,
                  vhToPx: null
              },
              M = [];
          o.each(r, function(a, b) {
              t.isNode(b) && e(b, a)
          }), j = o.extend({}, x.defaults, u), j.loop = parseInt(j.loop, 10);
          var N = 2 * j.loop - 1;
          if (j.loop)
              for (var O = 0; O < N; O++) {
                  var P = {
                      delay: j.delay,
                      progress: j.progress
                  };
                  O === N - 1 && (P.display = j.display, P.visibility = j.visibility, P.complete = j.complete), A(r, "reverse", P)
              }
          return a()
      };
      x = o.extend(A, x), x.animate = A;
      var B = b.requestAnimationFrame || q;
      if (!x.State.isMobile && c.hidden !== d) {
          var C = function() {
              c.hidden ? (B = function(a) {
                  return setTimeout(function() {
                      a(!0)
                  }, 16)
              }, m()) : B = b.requestAnimationFrame || q
          };
          C(), c.addEventListener("visibilitychange", C)
      }
      return a.Velocity = x, a !== b && (a.fn.velocity = A, a.fn.velocity.defaults = x.defaults), o.each(["Down", "Up"], function(a, b) {
          x.Redirects["slide" + b] = function(a, c, e, f, g, h) {
              var i = o.extend({}, c),
                  j = i.begin,
                  k = i.complete,
                  l = {},
                  m = {
                      height: "",
                      marginTop: "",
                      marginBottom: "",
                      paddingTop: "",
                      paddingBottom: ""
                  };
              i.display === d && (i.display = "Down" === b ? "inline" === x.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                  0 === e && j && j.call(g, g);
                  for (var c in m)
                      if (m.hasOwnProperty(c)) {
                          l[c] = a.style[c];
                          var d = z.getPropertyValue(a, c);
                          m[c] = "Down" === b ? [d, 0] : [0, d]
                      }
                  l.overflow = a.style.overflow, a.style.overflow = "hidden"
              }, i.complete = function() {
                  for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]);
                  e === f - 1 && (k && k.call(g, g), h && h.resolver(g))
              }, x(a, m, i)
          }
      }), o.each(["In", "Out"], function(a, b) {
          x.Redirects["fade" + b] = function(a, c, e, f, g, h) {
              var i = o.extend({}, c),
                  j = i.complete,
                  k = {
                      opacity: "In" === b ? 1 : 0
                  };
              0 !== e && (i.begin = null), e !== f - 1 ? i.complete = null : i.complete = function() {
                  j && j.call(g, g), h && h.resolver(g)
              }, i.display === d && (i.display = "In" === b ? "auto" : "none"), x(this, k, i)
          }
      }), x
  }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});