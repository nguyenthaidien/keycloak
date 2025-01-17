/** @license React v16.13.0
 * react.production.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const e = {};
!(function (e) {
  function t(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function n(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = U),
      (this.updater = n || N);
  }
  function r() {}
  function o(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = U),
      (this.updater = n || N);
  }
  function u(e, t, n) {
    var r,
      o = {},
      u = null,
      l = null;
    if (null != t)
      for (r in (void 0 !== t.ref && (l = t.ref),
      void 0 !== t.key && (u = "" + t.key),
      t))
        z.call(t, r) && !H.hasOwnProperty(r) && (o[r] = t[r]);
    var i = arguments.length - 2;
    if (1 === i) o.children = n;
    else if (1 < i) {
      for (var a = Array(i), c = 0; c < i; c++) a[c] = arguments[c + 2];
      o.children = a;
    }
    if (e && e.defaultProps)
      for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
    return {
      $$typeof: x,
      type: e,
      key: u,
      ref: l,
      props: o,
      _owner: B.current,
    };
  }
  function l(e) {
    return "object" == typeof e && null !== e && e.$$typeof === x;
  }
  function i(e, t, n, r) {
    if (Y.length) {
      var o = Y.pop();
      return (
        (o.result = e),
        (o.keyPrefix = t),
        (o.func = n),
        (o.context = r),
        (o.count = 0),
        o
      );
    }
    return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
  }
  function a(e) {
    (e.result = null),
      (e.keyPrefix = null),
      (e.func = null),
      (e.context = null),
      (e.count = 0),
      10 > Y.length && Y.push(e);
  }
  function c(e, n, r) {
    return null == e
      ? 0
      : (function e(n, r, o, u) {
          var l = typeof n;
          ("undefined" !== l && "boolean" !== l) || (n = null);
          var i = !1;
          if (null === n) i = !0;
          else
            switch (l) {
              case "string":
              case "number":
                i = !0;
                break;
              case "object":
                switch (n.$$typeof) {
                  case x:
                  case C:
                    i = !0;
                }
            }
          if (i) return o(u, n, "" === r ? "." + f(n, 0) : r), 1;
          if (((i = 0), (r = "" === r ? "." : r + ":"), Array.isArray(n)))
            for (var a = 0; a < n.length; a++) {
              var c = r + f((l = n[a]), a);
              i += e(l, c, o, u);
            }
          else if (
            (null === n || "object" != typeof n
              ? (c = null)
              : (c =
                  "function" == typeof (c = (M && n[M]) || n["@@iterator"])
                    ? c
                    : null),
            "function" == typeof c)
          )
            for (n = c.call(n), a = 0; !(l = n.next()).done; )
              i += e((l = l.value), (c = r + f(l, a++)), o, u);
          else if ("object" === l)
            throw (
              ((o = "" + n),
              Error(
                t(
                  31,
                  "[object Object]" === o
                    ? "object with keys {" + Object.keys(n).join(", ") + "}"
                    : o,
                  ""
                )
              ))
            );
          return i;
        })(e, "", n, r);
  }
  function f(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { "=": "=0", ":": "=2" };
          return (
            "$" +
            ("" + e).replace(/[=:]/g, function (e) {
              return t[e];
            })
          );
        })(e.key)
      : t.toString(36);
  }
  function s(e, t, n) {
    e.func.call(e.context, t, e.count++);
  }
  function p(e, t, n) {
    var r = e.result,
      o = e.keyPrefix;
    (e = e.func.call(e.context, t, e.count++)),
      Array.isArray(e)
        ? y(e, r, n, function (e) {
            return e;
          })
        : null != e &&
          (l(e) &&
            (e = (function (e, t) {
              return {
                $$typeof: x,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
              };
            })(
              e,
              o +
                (!e.key || (t && t.key === e.key)
                  ? ""
                  : ("" + e.key).replace(W, "$&/") + "/") +
                n
            )),
          r.push(e));
  }
  function y(e, t, n, r, o) {
    var u = "";
    null != n && (u = ("" + n).replace(W, "$&/") + "/"),
      c(e, p, (t = i(t, u, r, o))),
      a(t);
  }
  function d() {
    var e = G.current;
    if (null === e) throw Error(t(321));
    return e;
  }
  function b(e, t) {
    var n = e.length;
    e.push(t);
    e: for (;;) {
      var r = (n - 1) >>> 1,
        o = e[r];
      if (!(void 0 !== o && 0 < h(o, t))) break e;
      (e[r] = t), (e[n] = o), (n = r);
    }
  }
  function m(e) {
    return void 0 === (e = e[0]) ? null : e;
  }
  function v(e) {
    var t = e[0];
    if (void 0 !== t) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, o = e.length; r < o; ) {
          var u = 2 * (r + 1) - 1,
            l = e[u],
            i = u + 1,
            a = e[i];
          if (void 0 !== l && 0 > h(l, n))
            void 0 !== a && 0 > h(a, l)
              ? ((e[r] = a), (e[i] = n), (r = i))
              : ((e[r] = l), (e[u] = n), (r = u));
          else {
            if (!(void 0 !== a && 0 > h(a, n))) break e;
            (e[r] = a), (e[i] = n), (r = i);
          }
        }
      }
      return t;
    }
    return null;
  }
  function h(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  function _(e) {
    for (var t = m(ve); null !== t; ) {
      if (null === t.callback) v(ve);
      else {
        if (!(t.startTime <= e)) break;
        v(ve), (t.sortIndex = t.expirationTime), b(me, t);
      }
      t = m(ve);
    }
  }
  function w(e) {
    if (((Se = !1), _(e), !ke))
      if (null !== m(me)) (ke = !0), ee(g);
      else {
        var t = m(ve);
        null !== t && te(w, t.startTime - e);
      }
  }
  function g(e, t) {
    (ke = !1), Se && ((Se = !1), ne()), (ge = !0);
    var n = we;
    try {
      for (
        _(t), _e = m(me);
        null !== _e && (!(_e.expirationTime > t) || (e && !re()));

      ) {
        var r = _e.callback;
        if (null !== r) {
          (_e.callback = null), (we = _e.priorityLevel);
          var o = r(_e.expirationTime <= t);
          (t = Z()),
            "function" == typeof o ? (_e.callback = o) : _e === m(me) && v(me),
            _(t);
        } else v(me);
        _e = m(me);
      }
      if (null !== _e) var u = !0;
      else {
        var l = m(ve);
        null !== l && te(w, l.startTime - t), (u = !1);
      }
      return u;
    } finally {
      (_e = null), (we = n), (ge = !1);
    }
  }
  function k(e) {
    switch (e) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3;
    }
  }
  var S = "function" == typeof Symbol && Symbol.for,
    x = S ? Symbol.for("react.element") : 60103,
    C = S ? Symbol.for("react.portal") : 60106,
    E = S ? Symbol.for("react.fragment") : 60107,
    j = S ? Symbol.for("react.strict_mode") : 60108,
    O = S ? Symbol.for("react.profiler") : 60114,
    P = S ? Symbol.for("react.provider") : 60109,
    R = S ? Symbol.for("react.context") : 60110,
    T = S ? Symbol.for("react.forward_ref") : 60112,
    $ = S ? Symbol.for("react.suspense") : 60113,
    I = S ? Symbol.for("react.memo") : 60115,
    F = S ? Symbol.for("react.lazy") : 60116,
    M = "function" == typeof Symbol && Symbol.iterator,
    A = Object.getOwnPropertySymbols,
    L = Object.prototype.hasOwnProperty,
    D = Object.prototype.propertyIsEnumerable,
    q = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        var t = {};
        for (e = 0; 10 > e; e++) t["_" + String.fromCharCode(e)] = e;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            n[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          for (var n, r = Object(e), o = 1; o < arguments.length; o++) {
            var u = Object(arguments[o]);
            for (var l in u) L.call(u, l) && (r[l] = u[l]);
            if (A) {
              n = A(u);
              for (var i = 0; i < n.length; i++)
                D.call(u, n[i]) && (r[n[i]] = u[n[i]]);
            }
          }
          return r;
        },
    N = {
      isMounted: function (e) {
        return !1;
      },
      enqueueForceUpdate: function (e, t, n) {},
      enqueueReplaceState: function (e, t, n, r) {},
      enqueueSetState: function (e, t, n, r) {},
    },
    U = {};
  (n.prototype.isReactComponent = {}),
    (n.prototype.setState = function (e, n) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(t(85));
      this.updater.enqueueSetState(this, e, n, "setState");
    }),
    (n.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (r.prototype = n.prototype),
    ((S = o.prototype = new r()).constructor = o),
    q(S, n.prototype),
    (S.isPureReactComponent = !0);
  var V,
    B = { current: null },
    z = Object.prototype.hasOwnProperty,
    H = { key: !0, ref: !0, __self: !0, __source: !0 },
    W = /\/+/g,
    Y = [],
    G = { current: null };
  if ("undefined" == typeof window || "function" != typeof MessageChannel) {
    var J = null,
      K = null,
      Q = function () {
        if (null !== J)
          try {
            var e = Z();
            J(!0, e), (J = null);
          } catch (e) {
            throw (setTimeout(Q, 0), e);
          }
      },
      X = Date.now(),
      Z = function () {
        return Date.now() - X;
      },
      ee = function (e) {
        null !== J ? setTimeout(ee, 0, e) : ((J = e), setTimeout(Q, 0));
      },
      te = function (e, t) {
        K = setTimeout(e, t);
      },
      ne = function () {
        clearTimeout(K);
      },
      re = function () {
        return !1;
      };
    S = V = function () {};
  } else {
    var oe = window.performance,
      ue = window.Date,
      le = window.setTimeout,
      ie = window.clearTimeout;
    if (
      ("undefined" != typeof console &&
        ((S = window.cancelAnimationFrame),
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
        "function" != typeof S &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          )),
      "object" == typeof oe && "function" == typeof oe.now)
    )
      Z = function () {
        return oe.now();
      };
    else {
      var ae = ue.now();
      Z = function () {
        return ue.now() - ae;
      };
    }
    var ce = !1,
      fe = null,
      se = -1,
      pe = 5,
      ye = 0;
    (re = function () {
      return Z() >= ye;
    }),
      (S = function () {}),
      (V = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
            )
          : (pe = 0 < e ? Math.floor(1e3 / e) : 5);
      });
    var de = new MessageChannel(),
      be = de.port2;
    (de.port1.onmessage = function () {
      if (null !== fe) {
        var e = Z();
        ye = e + pe;
        try {
          fe(!0, e) ? be.postMessage(null) : ((ce = !1), (fe = null));
        } catch (e) {
          throw (be.postMessage(null), e);
        }
      } else ce = !1;
    }),
      (ee = function (e) {
        (fe = e), ce || ((ce = !0), be.postMessage(null));
      }),
      (te = function (e, t) {
        se = le(function () {
          e(Z());
        }, t);
      }),
      (ne = function () {
        ie(se), (se = -1);
      });
  }
  var me = [],
    ve = [],
    he = 1,
    _e = null,
    we = 3,
    ge = !1,
    ke = !1,
    Se = !1,
    xe = 0;
  q(
    (de = {
      ReactCurrentDispatcher: G,
      ReactCurrentOwner: B,
      IsSomeRendererActing: { current: !1 },
      assign: q,
    }),
    {
      Scheduler: {
        __proto__: null,
        unstable_ImmediatePriority: 1,
        unstable_UserBlockingPriority: 2,
        unstable_NormalPriority: 3,
        unstable_IdlePriority: 5,
        unstable_LowPriority: 4,
        unstable_runWithPriority: function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = we;
          we = e;
          try {
            return t();
          } finally {
            we = n;
          }
        },
        unstable_next: function (e) {
          switch (we) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = we;
          }
          var n = we;
          we = t;
          try {
            return e();
          } finally {
            we = n;
          }
        },
        unstable_scheduleCallback: function (e, t, n) {
          var r = Z();
          if ("object" == typeof n && null !== n) {
            var o = n.delay;
            (o = "number" == typeof o && 0 < o ? r + o : r),
              (n = "number" == typeof n.timeout ? n.timeout : k(e));
          } else (n = k(e)), (o = r);
          return (
            (e = {
              id: he++,
              callback: t,
              priorityLevel: e,
              startTime: o,
              expirationTime: (n = o + n),
              sortIndex: -1,
            }),
            o > r
              ? ((e.sortIndex = o),
                b(ve, e),
                null === m(me) &&
                  e === m(ve) &&
                  (Se ? ne() : (Se = !0), te(w, o - r)))
              : ((e.sortIndex = n), b(me, e), ke || ge || ((ke = !0), ee(g))),
            e
          );
        },
        unstable_cancelCallback: function (e) {
          e.callback = null;
        },
        unstable_wrapCallback: function (e) {
          var t = we;
          return function () {
            var n = we;
            we = t;
            try {
              return e.apply(this, arguments);
            } finally {
              we = n;
            }
          };
        },
        unstable_getCurrentPriorityLevel: function () {
          return we;
        },
        unstable_shouldYield: function () {
          var e = Z();
          _(e);
          var t = m(me);
          return (
            (t !== _e &&
              null !== _e &&
              null !== t &&
              null !== t.callback &&
              t.startTime <= e &&
              t.expirationTime < _e.expirationTime) ||
            re()
          );
        },
        unstable_requestPaint: S,
        unstable_continueExecution: function () {
          ke || ge || ((ke = !0), ee(g));
        },
        unstable_pauseExecution: function () {},
        unstable_getFirstCallbackNode: function () {
          return m(me);
        },
        get unstable_now() {
          return Z;
        },
        get unstable_forceFrameRate() {
          return V;
        },
        unstable_Profiling: null,
      },
      SchedulerTracing: {
        __proto__: null,
        __interactionsRef: null,
        __subscriberRef: null,
        unstable_clear: function (e) {
          return e();
        },
        unstable_getCurrent: function () {
          return null;
        },
        unstable_getThreadID: function () {
          return ++xe;
        },
        unstable_trace: function (e, t, n) {
          return n();
        },
        unstable_wrap: function (e) {
          return e;
        },
        unstable_subscribe: function (e) {},
        unstable_unsubscribe: function (e) {},
      },
    }
  ),
    (e.Children = {
      map: function (e, t, n) {
        if (null == e) return e;
        var r = [];
        return y(e, r, null, t, n), r;
      },
      forEach: function (e, t, n) {
        if (null == e) return e;
        c(e, s, (t = i(null, null, t, n))), a(t);
      },
      count: function (e) {
        return c(
          e,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (e) {
        var t = [];
        return (
          y(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (!l(e)) throw Error(t(143));
        return e;
      },
    }),
    (e.Component = n),
    (e.Fragment = E),
    (e.Profiler = O),
    (e.PureComponent = o),
    (e.StrictMode = j),
    (e.Suspense = $),
    (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = de),
    (e.cloneElement = function (e, n, r) {
      if (null == e) throw Error(t(267, e));
      var o = q({}, e.props),
        u = e.key,
        l = e.ref,
        i = e._owner;
      if (null != n) {
        if (
          (void 0 !== n.ref && ((l = n.ref), (i = B.current)),
          void 0 !== n.key && (u = "" + n.key),
          e.type && e.type.defaultProps)
        )
          var a = e.type.defaultProps;
        for (c in n)
          z.call(n, c) &&
            !H.hasOwnProperty(c) &&
            (o[c] = void 0 === n[c] && void 0 !== a ? a[c] : n[c]);
      }
      var c = arguments.length - 2;
      if (1 === c) o.children = r;
      else if (1 < c) {
        a = Array(c);
        for (var f = 0; f < c; f++) a[f] = arguments[f + 2];
        o.children = a;
      }
      return { $$typeof: x, type: e.type, key: u, ref: l, props: o, _owner: i };
    }),
    (e.createContext = function (e, t) {
      return (
        void 0 === t && (t = null),
        ((e = {
          $$typeof: R,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }).Provider = { $$typeof: P, _context: e }),
        (e.Consumer = e)
      );
    }),
    (e.createElement = u),
    (e.createFactory = function (e) {
      var t = u.bind(null, e);
      return (t.type = e), t;
    }),
    (e.createRef = function () {
      return { current: null };
    }),
    (e.forwardRef = function (e) {
      return { $$typeof: T, render: e };
    }),
    (e.isValidElement = l),
    (e.lazy = function (e) {
      return { $$typeof: F, _ctor: e, _status: -1, _result: null };
    }),
    (e.memo = function (e, t) {
      return { $$typeof: I, type: e, compare: void 0 === t ? null : t };
    }),
    (e.useCallback = function (e, t) {
      return d().useCallback(e, t);
    }),
    (e.useContext = function (e, t) {
      return d().useContext(e, t);
    }),
    (e.useDebugValue = function (e, t) {}),
    (e.useEffect = function (e, t) {
      return d().useEffect(e, t);
    }),
    (e.useImperativeHandle = function (e, t, n) {
      return d().useImperativeHandle(e, t, n);
    }),
    (e.useLayoutEffect = function (e, t) {
      return d().useLayoutEffect(e, t);
    }),
    (e.useMemo = function (e, t) {
      return d().useMemo(e, t);
    }),
    (e.useReducer = function (e, t, n) {
      return d().useReducer(e, t, n);
    }),
    (e.useRef = function (e) {
      return d().useRef(e);
    }),
    (e.useState = function (e) {
      return d().useState(e);
    }),
    (e.version = "16.13.0");
})(e);
const {
  Children: t,
  Component: n,
  Fragment: r,
  Profiler: o,
  PureComponent: u,
  StrictMode: l,
  Suspense: i,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: a,
  cloneElement: c,
  createContext: f,
  createElement: s,
  createFactory: p,
  createRef: y,
  forwardRef: d,
  isValidElement: b,
  lazy: m,
  memo: v,
  useCallback: h,
  useContext: _,
  useDebugValue: w,
  useEffect: g,
  useImperativeHandle: k,
  useLayoutEffect: S,
  useMemo: x,
  useReducer: C,
  useRef: E,
  useState: j,
  version: O,
} = e;
export default e;
export {
  t as Children,
  n as Component,
  r as Fragment,
  o as Profiler,
  u as PureComponent,
  l as StrictMode,
  i as Suspense,
  a as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  c as cloneElement,
  f as createContext,
  s as createElement,
  p as createFactory,
  y as createRef,
  d as forwardRef,
  b as isValidElement,
  m as lazy,
  v as memo,
  h as useCallback,
  _ as useContext,
  w as useDebugValue,
  g as useEffect,
  k as useImperativeHandle,
  S as useLayoutEffect,
  x as useMemo,
  C as useReducer,
  E as useRef,
  j as useState,
  O as version,
};
//# sourceMappingURL=react.js.map
