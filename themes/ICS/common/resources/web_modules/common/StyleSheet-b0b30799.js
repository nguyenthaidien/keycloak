import { c as u } from "./_commonjsHelpers-b1deedd1.js";
var A = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function E(u) {
  function A(u, A, e) {
    var C = A.trim().split(s);
    A = C;
    var F = C.length,
      r = u.length;
    switch (r) {
      case 0:
      case 1:
        var t = 0;
        for (u = 0 === r ? "" : u[0] + " "; t < F; ++t)
          A[t] = E(u, A[t], e).trim();
        break;
      default:
        var D = (t = 0);
        for (A = []; t < F; ++t)
          for (var B = 0; B < r; ++B) A[D++] = E(u[B] + " ", C[t], e).trim();
    }
    return A;
  }
  function E(u, A, E) {
    var e = A.charCodeAt(0);
    switch ((33 > e && (e = (A = A.trim()).charCodeAt(0)), e)) {
      case 38:
        return A.replace(o, "$1" + u.trim());
      case 58:
        return u.trim() + A.replace(o, "$1" + u.trim());
      default:
        if (0 < 1 * E && 0 < A.indexOf("\f"))
          return A.replace(o, (58 === u.charCodeAt(0) ? "" : "$1") + u.trim());
    }
    return u + A;
  }
  function e(u, A, E, F) {
    var r = u + ";",
      t = 2 * A + 3 * E + 4 * F;
    if (944 === t) {
      u = r.indexOf(":", 9) + 1;
      var D = r.substring(u, r.length - 1).trim();
      return (
        (D = r.substring(0, u).trim() + D + ";"),
        1 === O || (2 === O && C(D, 1)) ? "-webkit-" + D + D : D
      );
    }
    if (0 === O || (2 === O && !C(r, 1))) return r;
    switch (t) {
      case 1015:
        return 97 === r.charCodeAt(10) ? "-webkit-" + r + r : r;
      case 951:
        return 116 === r.charCodeAt(3) ? "-webkit-" + r + r : r;
      case 963:
        return 110 === r.charCodeAt(5) ? "-webkit-" + r + r : r;
      case 1009:
        if (100 !== r.charCodeAt(4)) break;
      case 969:
      case 942:
        return "-webkit-" + r + r;
      case 978:
        return "-webkit-" + r + "-moz-" + r + r;
      case 1019:
      case 983:
        return "-webkit-" + r + "-moz-" + r + "-ms-" + r + r;
      case 883:
        if (45 === r.charCodeAt(8)) return "-webkit-" + r + r;
        if (0 < r.indexOf("image-set(", 11))
          return r.replace(w, "$1-webkit-$2") + r;
        break;
      case 932:
        if (45 === r.charCodeAt(4))
          switch (r.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                r.replace("-grow", "") +
                "-webkit-" +
                r +
                "-ms-" +
                r.replace("grow", "positive") +
                r
              );
            case 115:
              return (
                "-webkit-" + r + "-ms-" + r.replace("shrink", "negative") + r
              );
            case 98:
              return (
                "-webkit-" +
                r +
                "-ms-" +
                r.replace("basis", "preferred-size") +
                r
              );
          }
        return "-webkit-" + r + "-ms-" + r + r;
      case 964:
        return "-webkit-" + r + "-ms-flex-" + r + r;
      case 1023:
        if (99 !== r.charCodeAt(8)) break;
        return (
          "-webkit-box-pack" +
          (D = r
            .substring(r.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")) +
          "-webkit-" +
          r +
          "-ms-flex-pack" +
          D +
          r
        );
      case 1005:
        return c.test(r)
          ? r.replace(n, ":-webkit-") + r.replace(n, ":-moz-") + r
          : r;
      case 1e3:
        switch (
          ((A = (D = r.substring(13).trim()).indexOf("-") + 1),
          D.charCodeAt(0) + D.charCodeAt(A))
        ) {
          case 226:
            D = r.replace(d, "tb");
            break;
          case 232:
            D = r.replace(d, "tb-rl");
            break;
          case 220:
            D = r.replace(d, "lr");
            break;
          default:
            return r;
        }
        return "-webkit-" + r + "-ms-" + D + r;
      case 1017:
        if (-1 === r.indexOf("sticky", 9)) break;
      case 975:
        switch (
          ((A = (r = u).length - 10),
          (t =
            (D = (33 === r.charCodeAt(A) ? r.substring(0, A) : r)
              .substring(u.indexOf(":", 7) + 1)
              .trim()).charCodeAt(0) +
            (0 | D.charCodeAt(7))))
        ) {
          case 203:
            if (111 > D.charCodeAt(8)) break;
          case 115:
            r = r.replace(D, "-webkit-" + D) + ";" + r;
            break;
          case 207:
          case 102:
            r =
              r.replace(D, "-webkit-" + (102 < t ? "inline-" : "") + "box") +
              ";" +
              r.replace(D, "-webkit-" + D) +
              ";" +
              r.replace(D, "-ms-" + D + "box") +
              ";" +
              r;
        }
        return r + ";";
      case 938:
        if (45 === r.charCodeAt(5))
          switch (r.charCodeAt(6)) {
            case 105:
              return (
                (D = r.replace("-items", "")),
                "-webkit-" + r + "-webkit-box-" + D + "-ms-flex-" + D + r
              );
            case 115:
              return "-webkit-" + r + "-ms-flex-item-" + r.replace(g, "") + r;
            default:
              return (
                "-webkit-" +
                r +
                "-ms-flex-line-pack" +
                r.replace("align-content", "").replace(g, "") +
                r
              );
          }
        break;
      case 973:
      case 989:
        if (45 !== r.charCodeAt(3) || 122 === r.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === m.test(u))
          return 115 === (D = u.substring(u.indexOf(":") + 1)).charCodeAt(0)
            ? e(u.replace("stretch", "fill-available"), A, E, F).replace(
                ":fill-available",
                ":stretch"
              )
            : r.replace(D, "-webkit-" + D) +
                r.replace(D, "-moz-" + D.replace("fill-", "")) +
                r;
        break;
      case 962:
        if (
          ((r =
            "-webkit-" + r + (102 === r.charCodeAt(5) ? "-ms-" + r : "") + r),
          211 === E + F &&
            105 === r.charCodeAt(13) &&
            0 < r.indexOf("transform", 10))
        )
          return (
            r.substring(0, r.indexOf(";", 27) + 1).replace(i, "$1-webkit-$2") +
            r
          );
    }
    return r;
  }
  function C(u, A) {
    var E = u.indexOf(1 === A ? ":" : "{"),
      e = u.substring(0, 3 !== A ? E : 10);
    return (
      (E = u.substring(E + 1, u.length - 1)),
      P(2 !== A ? e : e.replace(k, "$1"), E, A)
    );
  }
  function F(u, A) {
    var E = e(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return E !== A + ";"
      ? E.replace(b, " or ($1)").substring(4)
      : "(" + A + ")";
  }
  function r(u, A, E, e, C, F, r, t, B, a) {
    for (var n, c = 0, i = A; c < _; ++c)
      switch ((n = S[c].call(D, u, i, E, e, C, F, r, t, B, a))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          i = n;
      }
    if (i !== A) return i;
  }
  function t(u) {
    return (
      void 0 !== (u = u.prefix) &&
        ((P = null),
        u ? ("function" != typeof u ? (O = 1) : ((O = 2), (P = u))) : (O = 0)),
      t
    );
  }
  function D(u, E) {
    var t = u;
    if ((33 > t.charCodeAt(0) && (t = t.trim()), (t = [t]), 0 < _)) {
      var D = r(-1, E, t, t, x, v, 0, 0, 0, 0);
      void 0 !== D && "string" == typeof D && (E = D);
    }
    var n = (function u(E, t, D, n, c) {
      for (
        var i,
          s,
          o,
          d,
          b,
          g = 0,
          k = 0,
          m = 0,
          w = 0,
          S = 0,
          P = 0,
          z = (o = i = 0),
          I = 0,
          N = 0,
          R = 0,
          T = 0,
          W = D.length,
          G = W - 1,
          M = "",
          Z = "",
          L = "",
          H = "";
        I < W;

      ) {
        if (
          ((s = D.charCodeAt(I)),
          I === G &&
            0 !== k + w + m + g &&
            (0 !== k && (s = 47 === k ? 10 : 47), (w = m = g = 0), W++, G++),
          0 === k + w + m + g)
        ) {
          if (
            I === G &&
            (0 < N && (M = M.replace(a, "")), 0 < M.trim().length)
          ) {
            switch (s) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                M += D.charAt(I);
            }
            s = 59;
          }
          switch (s) {
            case 123:
              for (i = (M = M.trim()).charCodeAt(0), o = 1, T = ++I; I < W; ) {
                switch ((s = D.charCodeAt(I))) {
                  case 123:
                    o++;
                    break;
                  case 125:
                    o--;
                    break;
                  case 47:
                    switch ((s = D.charCodeAt(I + 1))) {
                      case 42:
                      case 47:
                        u: {
                          for (z = I + 1; z < G; ++z)
                            switch (D.charCodeAt(z)) {
                              case 47:
                                if (
                                  42 === s &&
                                  42 === D.charCodeAt(z - 1) &&
                                  I + 2 !== z
                                ) {
                                  I = z + 1;
                                  break u;
                                }
                                break;
                              case 10:
                                if (47 === s) {
                                  I = z + 1;
                                  break u;
                                }
                            }
                          I = z;
                        }
                    }
                    break;
                  case 91:
                    s++;
                  case 40:
                    s++;
                  case 34:
                  case 39:
                    for (; I++ < G && D.charCodeAt(I) !== s; );
                }
                if (0 === o) break;
                I++;
              }
              switch (
                ((o = D.substring(T, I)),
                0 === i && (i = (M = M.replace(B, "").trim()).charCodeAt(0)),
                i)
              ) {
                case 64:
                  switch (
                    (0 < N && (M = M.replace(a, "")), (s = M.charCodeAt(1)))
                  ) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      N = t;
                      break;
                    default:
                      N = j;
                  }
                  if (
                    ((T = (o = u(t, N, o, s, c + 1)).length),
                    0 < _ &&
                      ((b = r(3, o, (N = A(j, M, R)), t, x, v, T, s, c, n)),
                      (M = N.join("")),
                      void 0 !== b &&
                        0 === (T = (o = b.trim()).length) &&
                        ((s = 0), (o = ""))),
                    0 < T)
                  )
                    switch (s) {
                      case 115:
                        M = M.replace(p, F);
                      case 100:
                      case 109:
                      case 45:
                        o = M + "{" + o + "}";
                        break;
                      case 107:
                        (o = (M = M.replace(l, "$1 $2")) + "{" + o + "}"),
                          (o =
                            1 === O || (2 === O && C("@" + o, 3))
                              ? "@-webkit-" + o + "@" + o
                              : "@" + o);
                        break;
                      default:
                        (o = M + o), 112 === n && ((Z += o), (o = ""));
                    }
                  else o = "";
                  break;
                default:
                  o = u(t, A(t, M, R), o, n, c + 1);
              }
              (L += o),
                (o = R = N = z = i = 0),
                (M = ""),
                (s = D.charCodeAt(++I));
              break;
            case 125:
            case 59:
              if (1 < (T = (M = (0 < N ? M.replace(a, "") : M).trim()).length))
                switch (
                  (0 === z &&
                    ((i = M.charCodeAt(0)), 45 === i || (96 < i && 123 > i)) &&
                    (T = (M = M.replace(" ", ":")).length),
                  0 < _ &&
                    void 0 !== (b = r(1, M, t, E, x, v, Z.length, n, c, n)) &&
                    0 === (T = (M = b.trim()).length) &&
                    (M = "\0\0"),
                  (i = M.charCodeAt(0)),
                  (s = M.charCodeAt(1)),
                  i)
                ) {
                  case 0:
                    break;
                  case 64:
                    if (105 === s || 99 === s) {
                      H += M + D.charAt(I);
                      break;
                    }
                  default:
                    58 !== M.charCodeAt(T - 1) &&
                      (Z += e(M, i, s, M.charCodeAt(2)));
                }
              (R = N = z = i = 0), (M = ""), (s = D.charCodeAt(++I));
          }
        }
        switch (s) {
          case 13:
          case 10:
            47 === k
              ? (k = 0)
              : 0 === 1 + i &&
                107 !== n &&
                0 < M.length &&
                ((N = 1), (M += "\0")),
              0 < _ * $ && r(0, M, t, E, x, v, Z.length, n, c, n),
              (v = 1),
              x++;
            break;
          case 59:
          case 125:
            if (0 === k + w + m + g) {
              v++;
              break;
            }
          default:
            switch ((v++, (d = D.charAt(I)), s)) {
              case 9:
              case 32:
                if (0 === w + g + k)
                  switch (S) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      d = "";
                      break;
                    default:
                      32 !== s && (d = " ");
                  }
                break;
              case 0:
                d = "\\0";
                break;
              case 12:
                d = "\\f";
                break;
              case 11:
                d = "\\v";
                break;
              case 38:
                0 === w + k + g && ((N = R = 1), (d = "\f" + d));
                break;
              case 108:
                if (0 === w + k + g + y && 0 < z)
                  switch (I - z) {
                    case 2:
                      112 === S && 58 === D.charCodeAt(I - 3) && (y = S);
                    case 8:
                      111 === P && (y = P);
                  }
                break;
              case 58:
                0 === w + k + g && (z = I);
                break;
              case 44:
                0 === k + m + w + g && ((N = 1), (d += "\r"));
                break;
              case 34:
              case 39:
                0 === k && (w = w === s ? 0 : 0 === w ? s : w);
                break;
              case 91:
                0 === w + k + m && g++;
                break;
              case 93:
                0 === w + k + m && g--;
                break;
              case 41:
                0 === w + k + g && m--;
                break;
              case 40:
                if (0 === w + k + g) {
                  if (0 === i)
                    switch (2 * S + 3 * P) {
                      case 533:
                        break;
                      default:
                        i = 1;
                    }
                  m++;
                }
                break;
              case 64:
                0 === k + m + w + g + z + o && (o = 1);
                break;
              case 42:
              case 47:
                if (!(0 < w + g + m))
                  switch (k) {
                    case 0:
                      switch (2 * s + 3 * D.charCodeAt(I + 1)) {
                        case 235:
                          k = 47;
                          break;
                        case 220:
                          (T = I), (k = 42);
                      }
                      break;
                    case 42:
                      47 === s &&
                        42 === S &&
                        T + 2 !== I &&
                        (33 === D.charCodeAt(T + 2) &&
                          (Z += D.substring(T, I + 1)),
                        (d = ""),
                        (k = 0));
                  }
            }
            0 === k && (M += d);
        }
        (P = S), (S = s), I++;
      }
      if (0 < (T = Z.length)) {
        if (
          ((N = t),
          0 < _ &&
            void 0 !== (b = r(2, Z, N, E, x, v, T, n, c, n)) &&
            0 === (Z = b).length)
        )
          return H + Z + L;
        if (((Z = N.join(",") + "{" + Z + "}"), 0 != O * y)) {
          switch ((2 !== O || C(Z, 2) || (y = 0), y)) {
            case 111:
              Z = Z.replace(h, ":-moz-$1") + Z;
              break;
            case 112:
              Z =
                Z.replace(f, "::-webkit-input-$1") +
                Z.replace(f, "::-moz-$1") +
                Z.replace(f, ":-ms-input-$1") +
                Z;
          }
          y = 0;
        }
      }
      return H + Z + L;
    })(j, t, E, 0, 0);
    return (
      0 < _ &&
        void 0 !== (D = r(-2, n, t, t, x, v, n.length, 0, 0, 0)) &&
        (n = D),
      "",
      (y = 0),
      (v = x = 1),
      n
    );
  }
  var B = /^\0+/g,
    a = /[\0\r\f]/g,
    n = /: */g,
    c = /zoo|gra/,
    i = /([,: ])(transform)/g,
    s = /,\r+?/g,
    o = /([\t\r\n ])*\f?&/g,
    l = /@(k\w+)\s*(\S*)\s*/,
    f = /::(place)/g,
    h = /:(read-only)/g,
    d = /[svh]\w+-[tblr]{2}/,
    p = /\(\s*(.*)\s*\)/g,
    b = /([\s\S]*?);/g,
    g = /-self|flex-/g,
    k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    m = /stretch|:\s*\w+\-(?:conte|avail)/,
    w = /([^-])(image-set\()/,
    v = 1,
    x = 1,
    y = 0,
    O = 1,
    j = [],
    S = [],
    _ = 0,
    P = null,
    $ = 0;
  return (
    (D.use = function u(A) {
      switch (A) {
        case void 0:
        case null:
          _ = S.length = 0;
          break;
        default:
          switch (A.constructor) {
            case Array:
              for (var E = 0, e = A.length; E < e; ++E) u(A[E]);
              break;
            case Function:
              S[_++] = A;
              break;
            case Boolean:
              $ = 0 | !!A;
          }
      }
      return u;
    }),
    (D.set = t),
    void 0 !== u && t(u),
    D
  );
}
var e,
  C,
  F = u(function (u, A) {
    u.exports = function (u) {
      function A(A) {
        if (A)
          try {
            u(A + "}");
          } catch (u) {}
      }
      return function (E, e, C, F, r, t, D, B, a, n) {
        switch (E) {
          case 1:
            if (0 === a && 64 === e.charCodeAt(0)) return u(e + ";"), "";
            break;
          case 2:
            if (0 === B) return e + "/*|*/";
            break;
          case 3:
            switch (B) {
              case 102:
              case 112:
                return u(C[0] + e), "";
              default:
                return e + (0 === n ? "/*|*/" : "");
            }
          case -2:
            e.split("/*|*/}").forEach(A);
        }
      };
    };
  }),
  r = /[A-Z]|^ms/g,
  t =
    ((e = function (u) {
      return u.replace(r, "-$&").toLowerCase();
    }),
    (C = {}),
    function (u) {
      return void 0 === C[u] && (C[u] = e(u)), C[u];
    }),
  D = function (u, E) {
    return null == E || "boolean" == typeof E
      ? ""
      : 1 === A[u] || 45 === u.charCodeAt(1) || isNaN(E) || 0 === E
      ? E
      : E + "px";
  },
  B = function u(A) {
    for (var E = A.length, e = 0, C = ""; e < E; e++) {
      var F = A[e];
      if (null != F) {
        var r = void 0;
        switch (typeof F) {
          case "boolean":
            break;
          case "function":
            r = u([F()]);
            break;
          case "object":
            if (Array.isArray(F)) r = u(F);
            else
              for (var t in ((r = ""), F))
                F[t] && t && (r && (r += " "), (r += t));
            break;
          default:
            r = F;
        }
        r && (C && (C += " "), (C += r));
      }
    }
    return C;
  },
  a = "undefined" != typeof document;
function n(u) {
  var A = document.createElement("style");
  return (
    A.setAttribute("data-emotion", u.key || ""),
    void 0 !== u.nonce && A.setAttribute("nonce", u.nonce),
    A.appendChild(document.createTextNode("")),
    (void 0 !== u.container ? u.container : document.head).appendChild(A),
    A
  );
}
var c = (function () {
  function u(u) {
    (this.isSpeedy = !0), (this.tags = []), (this.ctr = 0), (this.opts = u);
  }
  var A = u.prototype;
  return (
    (A.inject = function () {
      if (this.injected) throw new Error("already injected!");
      (this.tags[0] = n(this.opts)), (this.injected = !0);
    }),
    (A.speedy = function (u) {
      if (0 !== this.ctr) throw new Error("cannot change speedy now");
      this.isSpeedy = !!u;
    }),
    (A.insert = function (u, A) {
      if (this.isSpeedy) {
        var E = (function (u) {
          if (u.sheet) return u.sheet;
          for (var A = 0; A < document.styleSheets.length; A++)
            if (document.styleSheets[A].ownerNode === u)
              return document.styleSheets[A];
        })(this.tags[this.tags.length - 1]);
        try {
          E.insertRule(u, E.cssRules.length);
        } catch (u) {}
      } else {
        var e = n(this.opts);
        this.tags.push(e),
          e.appendChild(document.createTextNode(u + (A || "")));
      }
      this.ctr++, this.ctr % 65e3 == 0 && this.tags.push(n(this.opts));
    }),
    (A.flush = function () {
      this.tags.forEach(function (u) {
        return u.parentNode.removeChild(u);
      }),
        (this.tags = []),
        (this.ctr = 0),
        (this.injected = !1);
    }),
    u
  );
})();
var i = (function (u, A) {
    if (void 0 !== u.__SECRET_EMOTION__) return u.__SECRET_EMOTION__;
    void 0 === A && (A = {});
    var e,
      C,
      r = A.key || "css",
      n = F(function (u) {
        (e += u), a && s.insert(u, l);
      });
    void 0 !== A.prefix && (C = { prefix: A.prefix });
    var i = { registered: {}, inserted: {}, nonce: A.nonce, key: r },
      s = new c(A);
    a && s.inject();
    var o = new E(C);
    o.use(A.stylisPlugins)(n);
    var l = "";
    function f(u, A) {
      if (null == u) return "";
      switch (typeof u) {
        case "boolean":
          return "";
        case "function":
          if (void 0 !== u.__emotion_styles) {
            var E = u.toString();
            return E;
          }
          return f.call(
            this,
            void 0 === this ? u() : u(this.mergedProps, this.context),
            A
          );
        case "object":
          return b.call(this, u);
        default:
          var e = i.registered[u];
          return !1 === A && void 0 !== e ? e : u;
      }
    }
    var h,
      d,
      p = new WeakMap();
    function b(u) {
      if (p.has(u)) return p.get(u);
      var A = "";
      return (
        Array.isArray(u)
          ? u.forEach(function (u) {
              A += f.call(this, u, !1);
            }, this)
          : Object.keys(u).forEach(function (E) {
              "object" != typeof u[E]
                ? void 0 !== i.registered[u[E]]
                  ? (A += E + "{" + i.registered[u[E]] + "}")
                  : (A += t(E) + ":" + D(E, u[E]) + ";")
                : Array.isArray(u[E]) &&
                  "string" == typeof u[E][0] &&
                  void 0 === i.registered[u[E][0]]
                ? u[E].forEach(function (u) {
                    A += t(E) + ":" + D(E, u) + ";";
                  })
                : (A += E + "{" + f.call(this, u[E], !1) + "}");
            }, this),
        p.set(u, A),
        A
      );
    }
    var g = /label:\s*([^\s;\n{]+)\s*;/g,
      k = function (u, A) {
        return (
          (function (u) {
            for (var A, E = u.length, e = E ^ E, C = 0; E >= 4; )
              (A =
                1540483477 *
                  (65535 &
                    (A =
                      (255 & u.charCodeAt(C)) |
                      ((255 & u.charCodeAt(++C)) << 8) |
                      ((255 & u.charCodeAt(++C)) << 16) |
                      ((255 & u.charCodeAt(++C)) << 24))) +
                (((1540483477 * (A >>> 16)) & 65535) << 16)),
                (e =
                  (1540483477 * (65535 & e) +
                    (((1540483477 * (e >>> 16)) & 65535) << 16)) ^
                  (A =
                    1540483477 * (65535 & (A ^= A >>> 24)) +
                    (((1540483477 * (A >>> 16)) & 65535) << 16))),
                (E -= 4),
                ++C;
            switch (E) {
              case 3:
                e ^= (255 & u.charCodeAt(C + 2)) << 16;
              case 2:
                e ^= (255 & u.charCodeAt(C + 1)) << 8;
              case 1:
                e =
                  1540483477 * (65535 & (e ^= 255 & u.charCodeAt(C))) +
                  (((1540483477 * (e >>> 16)) & 65535) << 16);
            }
            return (
              (e =
                1540483477 * (65535 & (e ^= e >>> 13)) +
                (((1540483477 * (e >>> 16)) & 65535) << 16)),
              ((e ^= e >>> 15) >>> 0).toString(36)
            );
          })(u + A) + A
        );
      },
      m = function (u) {
        var A = !0,
          E = "",
          e = "";
        null == u || void 0 === u.raw
          ? ((A = !1), (E += f.call(this, u, !1)))
          : (E += u[0]);
        for (
          var C = arguments.length, F = new Array(C > 1 ? C - 1 : 0), r = 1;
          r < C;
          r++
        )
          F[r - 1] = arguments[r];
        return (
          F.forEach(function (e, C) {
            (E += f.call(this, e, 46 === E.charCodeAt(E.length - 1))),
              !0 === A && void 0 !== u[C + 1] && (E += u[C + 1]);
          }, this),
          (d = E),
          (E = E.replace(g, function (u, A) {
            return (e += "-" + A), "";
          })),
          (h = k(E, e)),
          E
        );
      };
    function w(u, A) {
      void 0 === i.inserted[h] && ((e = ""), o(u, A), (i.inserted[h] = e));
    }
    var v = function () {
      var u = m.apply(this, arguments),
        A = r + "-" + h;
      return (
        void 0 === i.registered[A] && (i.registered[A] = d), w("." + A, u), A
      );
    };
    function x(u, A) {
      var E = "";
      return (
        A.split(" ").forEach(function (A) {
          void 0 !== i.registered[A] ? u.push(A) : (E += A + " ");
        }),
        E
      );
    }
    function y(u, A) {
      var E = [],
        e = x(E, u);
      return E.length < 2 ? u : e + v(E, A);
    }
    function O(u) {
      i.inserted[u] = !0;
    }
    if (a) {
      var j = document.querySelectorAll("[data-emotion-" + r + "]");
      Array.prototype.forEach.call(j, function (u) {
        s.tags[0].parentNode.insertBefore(u, s.tags[0]),
          u
            .getAttribute("data-emotion-" + r)
            .split(" ")
            .forEach(O);
      });
    }
    var S = {
      flush: function () {
        a && (s.flush(), s.inject()), (i.inserted = {}), (i.registered = {});
      },
      hydrate: function (u) {
        u.forEach(O);
      },
      cx: function () {
        for (var u = arguments.length, A = new Array(u), E = 0; E < u; E++)
          A[E] = arguments[E];
        return y(B(A));
      },
      merge: y,
      getRegisteredStyles: x,
      injectGlobal: function () {
        var u = m.apply(this, arguments);
        w("", u);
      },
      keyframes: function () {
        var u = m.apply(this, arguments),
          A = "animation-" + h;
        return w("", "@keyframes " + A + "{" + u + "}"), A;
      },
      css: v,
      sheet: s,
      caches: i,
    };
    return (u.__SECRET_EMOTION__ = S), S;
  })("undefined" != typeof global ? global : {}),
  s = (i.flush, i.hydrate, i.cx),
  o = (i.merge, i.getRegisteredStyles, i.injectGlobal),
  l = (i.keyframes, i.css),
  f = (i.sheet, i.caches),
  h = {
    tr: { regexp: /[\u0069]/g, map: { i: "İ" } },
    az: { regexp: /[\u0069]/g, map: { i: "İ" } },
    lt: {
      regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
      map: { i̇: "I", j̇: "J", į̇: "Į", i̇̀: "Ì", i̇́: "Í", i̇̃: "Ĩ" },
    },
  },
  d = {
    tr: {
      regexp: /\u0130|\u0049|\u0049\u0307/g,
      map: { İ: "i", I: "ı", İ: "i" },
    },
    az: { regexp: /[\u0130]/g, map: { İ: "i", I: "ı", İ: "i" } },
    lt: {
      regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
      map: { I: "i̇", J: "j̇", Į: "į̇", Ì: "i̇̀", Í: "i̇́", Ĩ: "i̇̃" },
    },
  },
  p = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g,
  b = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g,
  g = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g,
  k = function (u, A, E) {
    if (null == u) return "";
    return (
      (E = "string" != typeof E ? " " : E),
      (function (u, A) {
        var E = d[A];
        return (
          (u = null == u ? "" : String(u)),
          E &&
            (u = u.replace(E.regexp, function (u) {
              return E.map[u];
            })),
          u.toLowerCase()
        );
      })(
        (u = String(u)
          .replace(b, "$1 $2")
          .replace(g, "$1 $2")
          .replace(p, function (u, A, e) {
            return 0 === A || A === e.length - u.length ? "" : E;
          })),
        A
      )
    );
  },
  m = function (u, A, E) {
    var e = k(u, A);
    return (
      E || (e = e.replace(/ (?=\d)/g, "_")),
      e.replace(/ (.)/g, function (u, E) {
        return (function (u, A) {
          var E = h[A];
          return (
            (u = null == u ? "" : String(u)),
            E &&
              (u = u.replace(E.regexp, function (u) {
                return E.map[u];
              })),
            u.toUpperCase()
          );
        })(E, A);
      })
    );
  };
function w(u, A) {
  var E = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(u);
    A &&
      (e = e.filter(function (A) {
        return Object.getOwnPropertyDescriptor(u, A).enumerable;
      })),
      E.push.apply(E, e);
  }
  return E;
}
function v(u, A, E) {
  return (
    A in u
      ? Object.defineProperty(u, A, {
          value: E,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[A] = E),
    u
  );
}
function x(u) {
  return (
    Boolean(u) &&
    "string" == typeof u.__className &&
    "function" == typeof u.__inject
  );
}
function y(u) {
  return Boolean(u && u.startsWith) && u.startsWith(".pf-m-");
}
function O(u, A, E) {
  if (!u) return null;
  const e = u.modifiers || u;
  return e[A] || e[m(A)] || E;
}
function j(u = {}) {
  return "string" == typeof u ? u : x(u) ? u.__className : "";
}
function S() {
  return Object.values(f.inserted);
}
function _(u, A) {
  return A.reduce(
    (A, E) =>
      (function (u) {
        for (var A = 1; A < arguments.length; A++) {
          var E = null != arguments[A] ? arguments[A] : {};
          A % 2
            ? w(E, !0).forEach(function (A) {
                v(u, A, E[A]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(E))
            : w(E).forEach(function (A) {
                Object.defineProperty(
                  u,
                  A,
                  Object.getOwnPropertyDescriptor(E, A)
                );
              });
        }
        return u;
      })({}, A, { [E]: u[E] }),
    {}
  );
}
function P(u, A) {
  var E = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(u);
    A &&
      (e = e.filter(function (A) {
        return Object.getOwnPropertyDescriptor(u, A).enumerable;
      })),
      E.push.apply(E, e);
  }
  return E;
}
function $(u, A, E) {
  return (
    A in u
      ? Object.defineProperty(u, A, {
          value: E,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[A] = E),
    u
  );
}
const z = {
  create(u) {
    const A = Object.keys(u);
    return A.length > 0
      ? A.reduce(
          (A, E) =>
            (function (u) {
              for (var A = 1; A < arguments.length; A++) {
                var E = null != arguments[A] ? arguments[A] : {};
                A % 2
                  ? P(E, !0).forEach(function (A) {
                      $(u, A, E[A]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      u,
                      Object.getOwnPropertyDescriptors(E)
                    )
                  : P(E).forEach(function (A) {
                      Object.defineProperty(
                        u,
                        A,
                        Object.getOwnPropertyDescriptor(E, A)
                      );
                    });
              }
              return u;
            })({}, A, { [E]: l(u[E]) }),
          {}
        )
      : l(u);
  },
  parse(u) {
    const A = u.match(/(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/g);
    return A
      ? A.reduce(
          (A, E) => {
            const e = (function (u) {
              return m(u.replace(/pf-((c|l|m|u|is|has)-)?/g, ""));
            })(E);
            if (A[e]) return A;
            const C = (function (u, A) {
              return {
                __className: u.replace(".", "").trim(),
                __inject() {
                  o(A);
                },
              };
            })(E, u);
            return y(E) ? (A.modifiers[e] = C) : (A[e] = C), A;
          },
          { modifiers: {}, inject: () => o(u), raw: u }
        )
      : {};
  },
};
function I(...u) {
  const A = [];
  return (
    u.forEach((u) => {
      x(u) ? A.push(j(u)) : A.push(u);
    }),
    s(...A)
  );
}
export { z as S, y as a, S as b, I as c, j as d, O as g, x as i, _ as p };
//# sourceMappingURL=StyleSheet-b0b30799.js.map
