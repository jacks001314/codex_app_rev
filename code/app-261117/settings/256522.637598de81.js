export const __rspack_esm_ids = [256522]
export const __webpack_modules__ = {
  MIhr(e, t, s) {
    var n = s("zd8w"),
      i = s("on57"),
      a = s("hlJj"),
      l = s("LHfz"),
      r = s("QS88"),
      o = s("Q0yO"),
      u = s("fgDr"),
      c = s("jBoW"),
      d = s("P9gZ"),
      m = s("oI7Z"),
      h = s("QsfR"),
      g = s("PsSt"),
      f = s("TZVD"),
      p = s("ncvm"),
      x = s("aHZf"),
      y = s("jTKk"),
      _ = s("QEXq")
    function b(e, t) {
      var s = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        ;(t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          s.push.apply(s, n))
      }
      return s
    }
    function v(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? b(Object(s), !0).forEach(function (t) {
              var n, i, a
              ;((n = e),
                (i = t),
                (a = s[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e
                    var s = e[Symbol.toPrimitive]
                    if (void 0 !== s) {
                      var n = s.call(e, t || "default")
                      if ("object" != typeof n) return n
                      throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                  })(e, "string")
                  return "symbol" == typeof t ? t : t + ""
                })(i)) in n
                  ? Object.defineProperty(n, i, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                  : (n[i] = a))
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : b(Object(s)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
              })
      }
      return e
    }
    function j() {
      return (j = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = arguments[t]
              for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n])
            }
            return e
          }).apply(null, arguments)
    }
    function w(e) {
      var t = (0, d.j)()
      return (
        (0, n.useEffect)(
          () => (
            t((0, c.Xn)(e)),
            () => {
              t((0, c.A$)(e))
            }
          ),
        ),
        null
      )
    }
    function A(e) {
      var t,
        s = e.x1,
        c = e.x2,
        p = e.y1,
        y = e.y2,
        b = e.className,
        w = e.shape,
        A = e.xAxisId,
        C = e.yAxisId,
        M = (0, g.Y)(),
        S = (0, h.r)(),
        k = (0, d.G)((e) => (0, m.iV)(e, "xAxis", A, S)),
        E = (0, d.G)((e) => (0, m.iV)(e, "yAxis", C, S))
      if (null == k || null == E) return null
      var N = (0, o.vh)(s),
        T = (0, o.vh)(c),
        I = (0, o.vh)(p),
        P = (0, o.vh)(y)
      if (!N && !T && !I && !P && !w) return null
      var R = ((e, t, s, n, i, a, l) => {
        var o,
          u,
          c,
          d,
          m = l.x1,
          h = l.x2,
          g = l.y1,
          f = l.y2
        if (null == i || null == a) return null
        var p = new _.z({ x: i, y: a }),
          x = {
            x: e ? (null != (o = i.map(m, { position: "start" })) ? o : null) : i.rangeMin(),
            y: s ? (null != (u = a.map(g, { position: "start" })) ? u : null) : a.rangeMin(),
          },
          y = {
            x: t ? (null != (c = i.map(h, { position: "end" })) ? c : null) : i.rangeMax(),
            y: n ? (null != (d = a.map(f, { position: "end" })) ? d : null) : a.rangeMax(),
          }
        return "discard" !== l.ifOverflow || (p.isInRange(x) && p.isInRange(y)) ? (0, r.sl)(x, y) : null
      })(N, T, I, P, k, E, e)
      if (!R && !w) return null
      var L = "hidden" === e.ifOverflow
      return n.createElement(
        x.g,
        { zIndex: e.zIndex },
        n.createElement(
          a.W,
          { className: (0, i.$)("recharts-reference-area", b) },
          ((t = v(v({ clipPath: L ? "url(#".concat(M, ")") : void 0 }, (0, f.a)(e)), R)),
          n.isValidElement(w)
            ? n.cloneElement(w, t)
            : "function" == typeof w
              ? w(t)
              : n.createElement(u.M, j({}, t, { className: "recharts-reference-area-rect" }))),
          null != R &&
            n.createElement(
              l.zJ,
              j({}, R, { lowerWidth: R.width, upperWidth: R.width }),
              n.createElement(l._I, { label: e.label }),
              e.children,
            ),
        ),
      )
    }
    var C = {
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      radius: 0,
      fill: "#ccc",
      label: !1,
      fillOpacity: 0.5,
      stroke: "none",
      strokeWidth: 1,
      zIndex: y.I.area,
    }
    function M(e) {
      var t = (0, p.e)(e, C)
      return n.createElement(
        n.Fragment,
        null,
        n.createElement(w, {
          yAxisId: t.yAxisId,
          xAxisId: t.xAxisId,
          ifOverflow: t.ifOverflow,
          x1: t.x1,
          x2: t.x2,
          y1: t.y1,
          y2: t.y2,
        }),
        n.createElement(A, t),
      )
    }
    ;((M.displayName = "ReferenceArea"), s.d(t, {}, { T: M }))
  },
  TjJf(e, t, s) {
    var n = s("zd8w"),
      i = s("on57"),
      a = s("hlJj"),
      l = s("LHfz"),
      r = s("Q0yO"),
      o = s("QS88"),
      u = s("CkDz"),
      c = s("jBoW"),
      d = s("P9gZ"),
      m = s("oI7Z"),
      h = s("QsfR"),
      g = s("PsSt"),
      f = s("TZVD"),
      p = s("ncvm"),
      x = s("aHZf"),
      y = s("jTKk"),
      _ = s("rYo8"),
      b = s("QEXq")
    function v(e, t) {
      var s = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        ;(t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          s.push.apply(s, n))
      }
      return s
    }
    function j(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? v(Object(s), !0).forEach(function (t) {
              var n, i, a
              ;((n = e),
                (i = t),
                (a = s[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e
                    var s = e[Symbol.toPrimitive]
                    if (void 0 !== s) {
                      var n = s.call(e, t || "default")
                      if ("object" != typeof n) return n
                      throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                  })(e, "string")
                  return "symbol" == typeof t ? t : t + ""
                })(i)) in n
                  ? Object.defineProperty(n, i, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                  : (n[i] = a))
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : v(Object(s)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
              })
      }
      return e
    }
    function w() {
      return (w = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = arguments[t]
              for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n])
            }
            return e
          }).apply(null, arguments)
    }
    function A(e) {
      var t = (0, d.j)()
      return (
        (0, n.useEffect)(
          () => (
            t((0, c.cG)(e)),
            () => {
              t((0, c.hj)(e))
            }
          ),
        ),
        null
      )
    }
    function C(e) {
      var t = e.xAxisId,
        s = e.yAxisId,
        c = e.shape,
        p = e.className,
        y = e.ifOverflow,
        v = (0, h.r)(),
        A = (0, g.Y)(),
        C = (0, d.G)((e) => (0, m.Rl)(e, t)),
        M = (0, d.G)((e) => (0, m.sf)(e, s)),
        S = (0, d.G)((e) => (0, m.iV)(e, "xAxis", t, v)),
        k = (0, d.G)((e) => (0, m.iV)(e, "yAxis", s, v)),
        E = (0, u.sk)()
      if (!A || !E || null == C || null == M || null == S || null == k) return null
      var N = ((e, t, s, n, i, a, l) => {
        var o,
          u,
          c = l.x,
          d = l.y,
          m = l.segment,
          h = l.ifOverflow,
          g = (0, r.vh)(c)
        if ((0, r.vh)(d)) {
          var f = s.x,
            p = s.width,
            x = t.map(d, { position: n })
          if (!(0, _.H)(x) || ("discard" === h && !t.isInRange(x))) return null
          var y = [
            { x: f + p, y: x },
            { x: f, y: x },
          ]
          return "left" === a ? y.reverse() : y
        }
        if (g) {
          var v = s.y,
            j = s.height,
            w = e.map(c, { position: n })
          if (!(0, _.H)(w) || ("discard" === h && !e.isInRange(w))) return null
          var A = [
            { x: w, y: v + j },
            { x: w, y: v },
          ]
          return "top" === i ? A.reverse() : A
        }
        return null != m && 2 === m.length
          ? ((u = [
              (o = new b.z({ x: e, y: t })).mapWithFallback(m[0], { position: n, fallback: "rangeMin" }),
              o.mapWithFallback(m[1], { position: n, fallback: "rangeMax" }),
            ]),
            "discard" === h && u.some((e) => !o.isInRange(e)) ? null : u)
          : null
      })(S, k, E, e.position, C.orientation, M.orientation, e)
      if (!N) return null
      var T = N[0],
        I = N[1]
      if (null == T || null == I) return null
      var P = T.x,
        R = T.y,
        L = I.x,
        O = I.y,
        D = j(
          j({ clipPath: "hidden" === y ? "url(#".concat(A, ")") : void 0 }, (0, f.a)(e)),
          {},
          { x1: P, y1: R, x2: L, y2: O },
        ),
        U = (0, o.vh)({ x1: P, y1: R, x2: L, y2: O })
      return n.createElement(
        x.g,
        { zIndex: e.zIndex },
        n.createElement(
          a.W,
          { className: (0, i.$)("recharts-reference-line", p) },
          ((e, t) => {
            var s
            if (n.isValidElement(e)) s = n.cloneElement(e, t)
            else if ("function" == typeof e) s = e(t)
            else {
              if (!(0, _.H)(t.x1) || !(0, _.H)(t.y1) || !(0, _.H)(t.x2) || !(0, _.H)(t.y2)) return null
              s = n.createElement("line", w({}, t, { className: "recharts-reference-line-line" }))
            }
            return s
          })(c, D),
          n.createElement(
            l.zJ,
            w({}, U, { lowerWidth: U.width, upperWidth: U.width }),
            n.createElement(l._I, { label: e.label }),
            e.children,
          ),
        ),
      )
    }
    var M = {
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      fill: "none",
      label: !1,
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1,
      position: "middle",
      zIndex: y.I.line,
    }
    function S(e) {
      var t = (0, p.e)(e, M)
      return n.createElement(
        n.Fragment,
        null,
        n.createElement(A, {
          yAxisId: t.yAxisId,
          xAxisId: t.xAxisId,
          ifOverflow: t.ifOverflow,
          x: t.x,
          y: t.y,
          segment: t.segment,
        }),
        n.createElement(C, t),
      )
    }
    ;((S.displayName = "ReferenceLine"), s.d(t, {}, { e_: S }))
  },
  QEXq(e, t, s) {
    s.d(
      t,
      {},
      {
        z: class {
          constructor(e) {
            var t = e.x,
              s = e.y
            ;((this.xAxisScale = t), (this.yAxisScale = s))
          }
          map(e, t) {
            var s,
              n,
              i = t.position
            return {
              x: null != (s = this.xAxisScale.map(e.x, { position: i })) ? s : 0,
              y: null != (n = this.yAxisScale.map(e.y, { position: i })) ? n : 0,
            }
          }
          mapWithFallback(e, t) {
            var s,
              n,
              i,
              a,
              l = t.position,
              r = t.fallback
            return (
              (i = "rangeMin" === r ? this.yAxisScale.rangeMin() : "rangeMax" === r ? this.yAxisScale.rangeMax() : 0),
              (a = "rangeMin" === r ? this.xAxisScale.rangeMin() : "rangeMax" === r ? this.xAxisScale.rangeMax() : 0),
              {
                x: null != (s = this.xAxisScale.map(e.x, { position: l })) ? s : a,
                y: null != (n = this.yAxisScale.map(e.y, { position: l })) ? n : i,
              }
            )
          }
          isInRange(e) {
            var t = e.x,
              s = e.y,
              n = null == t || this.xAxisScale.isInRange(t),
              i = null == s || this.yAxisScale.isInRange(s)
            return n && i
          }
        },
      },
    )
  },
  ieEC(e, t, s) {
    var n = s("ABep")
    ;(s("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 10,
          height: 10,
          viewBox: "0 0 10 10",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M8.46713 1.74129C8.65596 1.8728 8.70244 2.13249 8.57092 2.32133L4.50842 8.15466C4.43793 8.25588 4.32621 8.32067 4.20335 8.33157C4.08048 8.34248 3.9591 8.29839 3.87188 8.21117L1.47604 5.81533C1.31332 5.65262 1.31332 5.3888 1.47604 5.22608C1.63876 5.06336 1.90258 5.06336 2.0653 5.22608L4.1091 7.26988L7.88708 1.84508C8.0186 1.65625 8.27829 1.60978 8.46713 1.74129Z",
            fill: "currentColor",
          }),
        })))
  },
  LwX0(e, t, s) {
    let n = "auth_utm_cleanup"
    function i(e) {
      return e.startsWith("utm_") || "entry_id" === e || "deep_link_id" === e
    }
    s.d(
      t,
      {},
      {
        HN: i,
        Uy: function (e) {
          ;[...e.keys()].some(i) && e.set(n, "1")
        },
        gJ: function (e) {
          if ("1" !== new URLSearchParams(e).get(n)) return
          let t = new URL(window.location.href)
          if ("1" === t.searchParams.get(n)) {
            for (let e of [...t.searchParams.keys()]) (e === n || i(e)) && t.searchParams.delete(e)
            window.history.replaceState(window.history.state, "", t)
          }
        },
      },
    )
  },
  sQDv(e, t, s) {
    s.d(t, { q: () => A, V: () => C })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("iRMi"),
      l = s("qmMi"),
      r = s("zd8w"),
      o = s("Ywss"),
      u = s("ZtCH"),
      c = s("zGRL"),
      d = s("MVHH"),
      m = s("mtSb"),
      h = s("UOa8"),
      g = s("jAnS"),
      f = s("T8X0"),
      p = s("yGJW"),
      x = s("B81s"),
      y = s("OWtl"),
      _ = s("LwX0")
    function b(e) {
      let t,
        s,
        n,
        a,
        b,
        w,
        A,
        C = (0, i.c)(27),
        { routeTemplate: M, routeKind: S } = e,
        k = (0, l.gh)(y.u),
        E = (0, h.As)(),
        N = (0, l.Ul)(f.uI),
        { data: T, status: I } = (0, x.P1)(),
        P = (0, o.zy)()
      C[0] !== P ? ((t = (0, o.AO)(P)), (C[0] = P), (C[1] = t)) : (t = C[1])
      let R = t,
        L = (0, r.useRef)(null),
        O = (0, r.useRef)(void 0),
        D = "chatgpt" === E.authMethod || "chatgptAuthTokens" === E.authMethod
      C[2] !== P.pathname || C[3] !== P.search || C[4] !== N || C[5] !== S
        ? ((s =
            "chatgpt-thread" === S ||
            ("home" === S && "/" === P.pathname && (0, g.CV)(P.search)) ||
            ("chat" === N && ("home" === S || "other" === S))),
          (C[2] = P.pathname),
          (C[3] = P.search),
          (C[4] = N),
          (C[5] = S),
          (C[6] = s))
        : (s = C[6])
      let U = s,
        F = !0 === T && "success" === I && !E.isLoading && D && U
      C[7] !== E.accountId ||
      C[8] !== E.computeResidency ||
      C[9] !== P.hash ||
      C[10] !== P.pathname ||
      C[11] !== P.search ||
      C[12] !== R ||
      C[13] !== M ||
      C[14] !== k
        ? ((n = () => {
            null == O.current && (O.current = (0, u.xu)(window.location))
            let e = new URL(window.location.href)
            ;((e.pathname = M), (e.search = P.search), (e.hash = P.hash))
            let t = P.hash.slice(P.hash.indexOf("?") + 1),
              s = [
                new URLSearchParams(P.search).get("referrer"),
                new URLSearchParams(t).get("referrer"),
                L.current?.url,
                document.referrer,
              ].find(j),
              n = (0, m.U)(E.accountId, E.computeResidency, P.pathname)
            n
              ? ((e.search = ""), (e.hash = ""))
              : ["/p/:promoCode", "/up/:promoCode", "/codex/p/:promoCode"].includes(M) && (e.pathname = P.pathname)
            let i = (0, u.fn)({ url: e.toString(), referrer: n ? void 0 : (s ?? void 0) }),
              a = k.get(p.YV)
            ;(a.logProductEvent(
              d.rN,
              { ...i, anonymousId: O.current },
              (e) => {
                "sent" === e.status && "hidden" === document.visibilityState && a.flush().catch(v)
              },
              (e) => {
                window.location.pathname === P.pathname && (0, c.em)(P.pathname, e)
              },
            ),
              (L.current = { key: R, url: i.url }))
          }),
          (C[7] = E.accountId),
          (C[8] = E.computeResidency),
          (C[9] = P.hash),
          (C[10] = P.pathname),
          (C[11] = P.search),
          (C[12] = R),
          (C[13] = M),
          (C[14] = k),
          (C[15] = n))
        : (n = C[15])
      let q = (0, r.useEffectEvent)(n)
      return (
        C[16] !== F || C[17] !== q || C[18] !== R
          ? ((a = () => {
              if (!F) {
                L.current = null
                return
              }
              if (L.current?.key === R) return
              let e = !1
              return (
                queueMicrotask(() => {
                  e || q()
                }),
                () => {
                  e = !0
                }
              )
            }),
            (C[16] = F),
            (C[17] = q),
            (C[18] = R),
            (C[19] = a))
          : (a = C[19]),
        C[20] !== F || C[21] !== R || C[22] !== M
          ? ((b = [F, R, M]), (C[20] = F), (C[21] = R), (C[22] = M), (C[23] = b))
          : (b = C[23]),
        (0, r.useEffect)(a, b),
        C[24] !== P.search
          ? ((w = () => {
              let e = !1
              return (
                queueMicrotask(() => {
                  e || (0, _.gJ)(P.search)
                }),
                () => {
                  e = !0
                }
              )
            }),
            (A = [P.search]),
            (C[24] = P.search),
            (C[25] = w),
            (C[26] = A))
          : ((w = C[25]), (A = C[26])),
        (0, r.useEffect)(w, A),
        null
      )
    }
    function v() {}
    function j(e) {
      let t = (0, u.fn)({ url: void 0, referrer: e ?? void 0 })
      return null != t.referrer || null != t.referrerToken
    }
    let w = (0, l.vP)(y.u, () => null)
    function A(e) {
      let t,
        s,
        a,
        l,
        u,
        c,
        d = (0, i.c)(16),
        { routeTemplate: m, routeKind: h } = e,
        g = (0, o.zy)()
      d[0] !== g ? ((t = (0, o.AO)(g)), (d[0] = g), (d[1] = t)) : (t = d[1])
      let f = t
      ;(d[2] !== m ? ((s = () => () => {}), (d[2] = m), (d[3] = s)) : (s = d[3]),
        d[4] !== f || d[5] !== m ? ((a = [f, m]), (d[4] = f), (d[5] = m), (d[6] = a)) : (a = d[6]),
        (0, r.useEffect)(s, a))
      let p = "/settings/usage" !== m
      return (
        d[7] !== m || d[8] !== p
          ? ((l = (0, n.jsx)(C, { routeTemplate: m, enabled: p })), (d[7] = m), (d[8] = p), (d[9] = l))
          : (l = d[9]),
        d[10] !== h || d[11] !== m
          ? ((u = (0, n.jsx)(b, { routeTemplate: m, routeKind: h })), (d[10] = h), (d[11] = m), (d[12] = u))
          : (u = d[12]),
        d[13] !== l || d[14] !== u
          ? ((c = (0, n.jsxs)(n.Fragment, { children: [l, u] })), (d[13] = l), (d[14] = u), (d[15] = c))
          : (c = d[15]),
        c
      )
    }
    function C(e) {
      let t,
        s,
        n,
        u,
        c = (0, i.c)(21),
        { routeTemplate: d, settingsTab: m, enabled: h } = e,
        g = void 0 === h || h,
        f = (0, l.gh)(y.u),
        { data: _, status: b } = (0, x.P1)(),
        v = (0, o.zy)()
      c[0] !== v ? ((t = (0, o.AO)(v)), (c[0] = v), (c[1] = t)) : (t = c[1])
      let j = t
      c[2] !== j || c[3] !== d || c[4] !== f || c[5] !== m
        ? ((s = () => {
            let e = f.get(w)
            e?.pageViewKey !== j &&
              ((0, p.yy)(f, a.CodexAppPageView, {
                routeTemplate: d,
                previousRouteTemplate: e?.routeTemplate,
                settingsTab: m,
              }),
              f.set(w, { pageViewKey: j, routeTemplate: d }))
          }),
          (c[2] = j),
          (c[3] = d),
          (c[4] = f),
          (c[5] = m),
          (c[6] = s))
        : (s = c[6])
      let A = (0, r.useEffectEvent)(s)
      return (
        c[7] !== _ || c[8] !== b || c[9] !== g || c[10] !== A || c[11] !== f
          ? ((n = () => {
              if ("success" !== b || !0 !== _) return void f.set(w, null)
              if (!g) return
              let e = !1
              return (
                queueMicrotask(() => {
                  e || A()
                }),
                () => {
                  e = !0
                }
              )
            }),
            (c[7] = _),
            (c[8] = b),
            (c[9] = g),
            (c[10] = A),
            (c[11] = f),
            (c[12] = n))
          : (n = c[12]),
        c[13] !== _ || c[14] !== b || c[15] !== g || c[16] !== j || c[17] !== d || c[18] !== f || c[19] !== m
          ? ((u = [_, b, g, j, d, m, f]),
            (c[13] = _),
            (c[14] = b),
            (c[15] = g),
            (c[16] = j),
            (c[17] = d),
            (c[18] = f),
            (c[19] = m),
            (c[20] = u))
          : (u = c[20]),
        (0, r.useEffect)(n, u),
        null
      )
    }
  },
  Y9i8(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57"),
      l = s("K4Cx"),
      r = s("zd8w")
    s.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            s,
            o,
            u,
            c = (0, i.c)(23),
            { ariaLabel: d, className: m, options: h, selectedId: g, animateSelection: f, size: p, onSelect: x } = e,
            y = void 0 === f || f,
            _ = void 0 === p ? "default" : p,
            b = (0, r.useId)(),
            v =
              "compact" === _
                ? "inline-grid gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5"
                : "bg-text/10 inline-grid gap-1 rounded-2xl p-1"
          c[0] !== m || c[1] !== v ? ((t = (0, a.A)(v, m)), (c[0] = m), (c[1] = v), (c[2] = t)) : (t = c[2])
          let j = `repeat(${h.length}, minmax(0, 1fr))`
          if (
            (c[3] !== j ? ((s = { gridTemplateColumns: j }), (c[3] = j), (c[4] = s)) : (s = c[4]),
            c[5] !== y || c[6] !== b || c[7] !== x || c[8] !== h || c[9] !== g || c[10] !== _)
          ) {
            let e
            ;(c[12] !== y || c[13] !== b || c[14] !== x || c[15] !== g || c[16] !== _
              ? ((e = (e) => {
                  let t = e.id === g
                  return (0, n.jsxs)(
                    "button",
                    {
                      className: (0, a.A)(
                        "cursor-interaction relative isolate min-w-0 transition-transform duration-basic active:scale-[0.98]",
                        "compact" === _
                          ? "flex h-6 items-center justify-center rounded-lg px-2 py-0 text-xs leading-4 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0"
                          : "rounded-xl px-3 py-1.5 text-sm font-medium",
                        t ? ("compact" === _ && "text-default") || "text-black" : "text-secondary",
                      ),
                      type: "button",
                      "aria-label": e.ariaLabel,
                      "aria-pressed": t,
                      onClick: () => {
                        x(e.id)
                      },
                      children: [
                        t
                          ? (0, n.jsx)(l.P.span, {
                              layoutId: y ? b : void 0,
                              className:
                                "compact" === _
                                  ? "absolute inset-0 -z-10 rounded-lg bg-surface shadow-sm"
                                  : "absolute inset-0 -z-10 rounded-xl bg-white shadow-sm",
                              transition: { type: "spring", duration: 0.28, bounce: 0 },
                            })
                          : null,
                        e.label,
                      ],
                    },
                    e.id,
                  )
                }),
                (c[12] = y),
                (c[13] = b),
                (c[14] = x),
                (c[15] = g),
                (c[16] = _),
                (c[17] = e))
              : (e = c[17]),
              (o = h.map(e)),
              (c[5] = y),
              (c[6] = b),
              (c[7] = x),
              (c[8] = h),
              (c[9] = g),
              (c[10] = _),
              (c[11] = o))
          } else o = c[11]
          return (
            c[18] !== d || c[19] !== t || c[20] !== s || c[21] !== o
              ? ((u = (0, n.jsx)("div", { className: t, role: "group", "aria-label": d, style: s, children: o })),
                (c[18] = d),
                (c[19] = t),
                (c[20] = s),
                (c[21] = o),
                (c[22] = u))
              : (u = c[22]),
            u
          )
        },
      },
    )
  },
  BrP7(e, t, s) {
    s.d(t, { t: () => j })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("i1uX"),
      l = s("on57"),
      r = s("IjbW"),
      o = s("K4Cx"),
      u = s("zd8w"),
      c = s("UxN3"),
      d = s("SziE"),
      m = s("hZax"),
      h = s("Sm6l")
    let g = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function f(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c,
        d,
        m,
        f,
        p,
        x,
        y = (0, i.c)(26)
      y[0] !== e
        ? (({ children: t, icon: s, size: r, surface: o, labelVisibility: u, ...a } = e),
          (y[0] = e),
          (y[1] = t),
          (y[2] = s),
          (y[3] = a),
          (y[4] = r),
          (y[5] = o),
          (y[6] = u))
        : ((t = y[1]), (s = y[2]), (a = y[3]), (r = y[4]), (o = y[5]), (u = y[6]))
      let _ = void 0 === o ? "elevated" : o,
        b = void 0 === u ? "visible" : u,
        v = "large" === r && "visible" === b && "pb-1.5"
      y[7] !== v ? ((c = (0, l.A)("group/labeled-icon flex-col gap-1.5", v)), (y[7] = v), (y[8] = c)) : (c = y[8])
      let j = "elevated" === _ ? "border shadow-xs" : "border-hairline",
        w = g[r]
      ;(y[9] !== j || y[10] !== w.icon
        ? ((d = (0, l.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            j,
            w.icon,
          )),
          (y[9] = j),
          (y[10] = w.icon),
          (y[11] = d))
        : (d = y[11]),
        y[12] !== s || y[13] !== d
          ? ((m = (0, n.jsx)("span", { className: d, children: s })), (y[12] = s), (y[13] = d), (y[14] = m))
          : (m = y[14]))
      let A = "hidden" === b ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        C = "visible" === b && g[r].caption
      return (
        y[15] !== C || y[16] !== A ? ((f = (0, l.A)(A, C)), (y[15] = C), (y[16] = A), (y[17] = f)) : (f = y[17]),
        y[18] !== t || y[19] !== f
          ? ((p = (0, n.jsx)("span", { className: f, children: t })), (y[18] = t), (y[19] = f), (y[20] = p))
          : (p = y[20]),
        y[21] !== a || y[22] !== p || y[23] !== c || y[24] !== m
          ? ((x = (0, n.jsxs)(h.$, {
              ...a,
              className: c,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [m, p],
            })),
            (y[21] = a),
            (y[22] = p),
            (y[23] = c),
            (y[24] = m),
            (y[25] = x))
          : (x = y[25]),
        x
      )
    }
    let p = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      x = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${p} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      y = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      _ = {
        ...x,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${y} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      b = {
        ...x,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      v = {
        text: {
          ...x,
          listClassName: "flex min-w-0 items-center justify-center gap-5",
          tabButtonClassName: "flex min-h-9 min-w-0 items-center font-medium",
          selectedClassName: "text-default font-semibold",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:text-default",
        },
        segmented: {
          closeButtonClassName: "px-1",
          itemClassName: "flex-1",
          listClassName: "border-default flex items-center rounded-lg border",
          segmentedEdges: !0,
          selectedClassName: "bg-text-emphasis/25 text-default",
          selectionIndicator: null,
          tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:bg-text-emphasis/5",
        },
        toolbar: x,
        settings: { ...x, tabButtonClassName: `${p} button-toolbar` },
        search: {
          ...x,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...x,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...x,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${x.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...x,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...x, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: _,
        sectionFilter: {
          ..._,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${y} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ..._,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${y} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ...x,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...x,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...x,
          listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        segmentedPill: b,
        segmentedPillMuted: {
          ...b,
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default dark:text-text/50",
        },
        profile: {
          ...x,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...x, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
        underline: {
          closeButtonClassName: "px-1",
          itemClassName: "shrink-0 pb-2",
          listClassName: "border-default flex min-w-0 items-start gap-8 border-b",
          segmentedEdges: !1,
          selectedClassName: "text-default",
          selectionIndicator: "underline",
          tabButtonClassName: "flex min-w-0 gap-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:text-default",
        },
      }
    function j(e) {
      let t,
        s = (0, i.c)(39),
        {
          tabs: r,
          selectedKey: o,
          onSelect: g,
          onTabClick: p,
          onTabHover: x,
          className: y,
          fill: _,
          scrollable: b,
          tabListRef: j,
          variant: C,
          ariaLabel: M,
          ariaLabelledBy: S,
          activationMode: k,
          animateSelection: E,
          dividerBefore: N,
        } = e,
        T = void 0 !== _ && _,
        I = void 0 !== b && b,
        P = void 0 === C ? "segmented" : C,
        R = void 0 === k ? "automatic" : k,
        L = (0, u.useId)(),
        O = v[P],
        D = "inset" === P || "choice" === P,
        U = (0, m.Zj)(!D && "icon" !== P && "text-secondary" === O.unselectedTextClassName && "1244723012"),
        F = void 0 !== E && E && ("segmentedPill" === P || "segmentedPillMuted" === P),
        q = F ? "text-default font-medium" : O.selectedClassName
      if (
        s[0] !== R ||
        s[1] !== F ||
        s[2] !== M ||
        s[3] !== S ||
        s[4] !== y ||
        s[5] !== N ||
        s[6] !== T ||
        s[7] !== g ||
        s[8] !== p ||
        s[9] !== x ||
        s[10] !== O.closeButtonClassName ||
        s[11] !== O.itemClassName ||
        s[12] !== O.listClassName ||
        s[13] !== O.segmentedEdges ||
        s[14] !== O.selectionIndicator ||
        s[15] !== O.tabButtonClassName ||
        s[16] !== O.textSizeClassName ||
        s[17] !== O.unselectedClassName ||
        s[18] !== O.unselectedTextClassName ||
        s[19] !== I ||
        s[20] !== q ||
        s[21] !== o ||
        s[22] !== L ||
        s[23] !== j ||
        s[24] !== r ||
        s[25] !== U ||
        s[26] !== D ||
        s[27] !== P
      ) {
        let e,
          i,
          u = (0, l.A)(U ? "text-tertiary" : O.unselectedTextClassName, O.unselectedClassName),
          m = D ? h.$ : "button",
          _ = T && "w-full",
          b = I && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(s[29] !== y || s[30] !== O.listClassName || s[31] !== _ || s[32] !== b
          ? ((e = (0, l.A)(O.listClassName, _, b, y)),
            (s[29] = y),
            (s[30] = O.listClassName),
            (s[31] = _),
            (s[32] = b),
            (s[33] = e))
          : (e = s[33]),
          s[34] !== R || s[35] !== g || s[36] !== I || s[37] !== r
            ? ((i = (e) => {
                let t
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let s = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  n = s.findIndex((t) => t === e.target)
                if (n < 0 || 0 === s.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let i = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? s.length - 1
                      : (n + (e.key === (i ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + s.length) % s.length),
                  s[t]?.focus(),
                  I && s[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let a = r[t]
                null != a && "automatic" === R && g(a.key, e.timeStamp)
              }),
              (s[34] = R),
              (s[35] = g),
              (s[36] = I),
              (s[37] = r),
              (s[38] = i))
            : (i = s[38]),
          (t = (0, n.jsx)("div", {
            ref: j,
            role: "tablist",
            tabIndex: -1,
            "aria-label": M,
            "aria-labelledby": S,
            className: e,
            onWheel: I ? w : void 0,
            onKeyDown: i,
            children: r.map((e, t) => {
              let s,
                i,
                h = e.key === o,
                y = h ? q : u,
                _ = 0 === t,
                b = t === r.length - 1,
                v = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": h,
                  tabIndex: h ? 0 : -1,
                  onPointerEnter: null == x ? void 0 : () => x(e.key),
                  onClick: (t) => {
                    ;((h && "manual" !== R) || g(e.key, t.timeStamp), p?.(e.key))
                  },
                }
              return (
                "inset" === P
                  ? ((s = h ? "segmentedInsetSelected" : "ghost"), (i = "compact"))
                  : "choice" === P && ((s = h ? "choiceSelected" : "outlineGhost"), (i = "dialogAction")),
                (0, n.jsxs)(
                  "div",
                  {
                    className: (0, l.A)(
                      "relative flex min-w-0 items-center",
                      O.itemClassName,
                      T && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      _ || e.key !== N
                        ? null
                        : (0, n.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === P
                        ? (0, n.jsx)(f, { ...v, icon: e.icon, size: "large", children: e.name })
                        : (0, n.jsxs)(m, {
                            ...v,
                            className: (0, l.A)(
                              T && "min-w-0 flex-1 justify-center",
                              F && "relative isolate",
                              !D && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                O.textSizeClassName ?? "text-sm",
                                O.tabButtonClassName,
                                I && "ring-inset",
                                O.segmentedEdges && _ && "rounded-l-md",
                                O.segmentedEdges && b && "rounded-r-md",
                                "browse" === P && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", h && "ring-1 ring-border-strong"]
                                  : y,
                              ],
                            ),
                            color: s,
                            radius: "choice" === P ? "full" : void 0,
                            size: i,
                            children: [
                              F && h ? (0, n.jsx)(A, { layoutId: L }) : null,
                              null != e.icon
                                ? (0, n.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              T ? (0, n.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === O.selectionIndicator && h
                        ? (0, n.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, n.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, l.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              O.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, n.jsx)(c.bF, {
                              "aria-hidden": !1,
                              asset16: a.Q,
                              legacyIcon: d.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      O.segmentedEdges && !b
                        ? (0, n.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (s[0] = R),
          (s[1] = F),
          (s[2] = M),
          (s[3] = S),
          (s[4] = y),
          (s[5] = N),
          (s[6] = T),
          (s[7] = g),
          (s[8] = p),
          (s[9] = x),
          (s[10] = O.closeButtonClassName),
          (s[11] = O.itemClassName),
          (s[12] = O.listClassName),
          (s[13] = O.segmentedEdges),
          (s[14] = O.selectionIndicator),
          (s[15] = O.tabButtonClassName),
          (s[16] = O.textSizeClassName),
          (s[17] = O.unselectedClassName),
          (s[18] = O.unselectedTextClassName),
          (s[19] = I),
          (s[20] = q),
          (s[21] = o),
          (s[22] = L),
          (s[23] = j),
          (s[24] = r),
          (s[25] = U),
          (s[26] = D),
          (s[27] = P),
          (s[28] = t))
      } else t = s[28]
      return t
    }
    function w(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function A(e) {
      let t,
        s,
        a = (0, i.c)(5),
        { layoutId: l } = e,
        u = 0.25 * !(0, r.I)()
      return (
        a[0] !== u ? ((t = { type: "spring", duration: u, bounce: 0 }), (a[0] = u), (a[1] = t)) : (t = a[1]),
        a[2] !== l || a[3] !== t
          ? ((s = (0, n.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: l,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (a[2] = l),
            (a[3] = t),
            (a[4] = s))
          : (s = a[4]),
        s
      )
    }
  },
  PXhB(e, t, s) {
    function n(e, t, s = "narrowSymbol") {
      return {
        style: "currency",
        currency: e,
        currencyDisplay: s,
        trailingZeroDisplay: "stripIfInteger",
        minimumFractionDigits: t ?? void 0,
        maximumFractionDigits: t ?? void 0,
      }
    }
    s.d(
      t,
      {},
      {
        U: function ({ intl: e, amount: t, currencyCode: s, minorUnitExponent: i }) {
          if (null == t) return null
          let a = s,
            l = e.formatNumberToParts(t, n(s, i, "symbol"))
          if (l.some(({ type: e, value: t }) => "currency" === e && t === s)) {
            let r = e.formatNumberToParts(t, n(s, i))
            r.some(({ type: e, value: t }) => "currency" === e && t !== s) ? (l = r) : (a = null)
          }
          return { currencyCodeLabel: a, formatted: l.map(({ value: e }) => e).join(""), parts: l }
        },
        m: function ({ intl: e, amount: t, currencyCode: s, minorUnitExponent: i }) {
          return null == t ? null : e.formatNumber(t, n(s, i))
        },
      },
    )
  },
  p1QF(e, t, s) {
    var n = s("S2r0"),
      i = s("qmMi"),
      a = s("Qgfj"),
      l = s("SPnB"),
      r = s("g2p6"),
      o = s("OAko"),
      u = s("eFxf"),
      c = s("gPv1"),
      d = s("OWtl"),
      m = s("OMIV"),
      h = s("O666"),
      g = s("rvFo"),
      f = s("kK7d"),
      p = s("eShZ"),
      x = s("smwl"),
      y = s("WXto")
    let _ = (0, a.YK)({
        title: {
          id: "settings.usage.credit.chatpass.title",
          defaultMessage: "Allow other apps to use credits after reaching your usage limit",
        },
        description: {
          id: "settings.usage.credit.chatpass.description",
          defaultMessage: "Applies to apps you\u2019ve allowed to use your ChatGPT plan.",
        },
      }),
      b = { section: "usage", id: "usage-chatpass-credit-preference", title: _.title, description: _.description },
      v = (0, i.vU)(d.u, A),
      j = (0, i.vU)(d.u, (e) => (0, x.bB)({ ...e, authMethod: "chatgpt" })),
      w = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(l.PO)
        if (t.authLoading || null == t.authenticatedAccountId || null == t.userId || !e(l.MS)) return !1
        let s = { accountId: t.authenticatedAccountId, userId: t.userId }
        {
          let n = (0, o.F7)(e(o.LI).data)
          if (n?.id !== s.accountId) return !1
          let i = n.plan_type ?? t.plan,
            a = (0, y.M7)(i) && !e(m.RS) && !0 === e(h.H$, { layer: u.ZL, parameter: u.ZK, disableExposureLog: !0 }),
            l = e(c.Ix).data?.credits?.balance != null,
            r = e(y.fQ, s, { enabled: !1 }).data
          if (
            !(0, y.jJ)({
              authMethod: t.authMethod,
              plan: i,
              isPersonalAccount: !0,
              isFreeOrGoCreditPurchaseEnabled: a,
              hasCreditBalance: l,
              hasStudentCreditAccess: r?.metadata?.enrollment_step === "enrolled",
            }).canViewCreditSettings &&
            e(j, s).data?.isEnabled !== !0
          )
            return !1
        }
        let n = e(v, s).data
        return null != n && n.items.length > 0 && null != e(r.s6).data
      })
    function A({ accountId: e, userId: t }) {
      return (0, n.j)({
        queryKey: ["usage-settings", "chatpass-apps", e, t],
        queryFn: async ({ signal: e }) => {
          try {
            return await f.CodexRequest.safeGet("/wham/usage/chatpass/apps", { signal: e })
          } catch (e) {
            if (e instanceof p.FetchError && (401 === e.status || 403 === e.status || 404 === e.status)) return null
            throw e
          }
        },
        staleTime: g.D.ONE_MINUTE,
        retry: !1,
      })
    }
    s.d(t, {}, { Bd: A, RX: w, qF: b })
  },
  RRNp(e, t, s) {
    var n = s("qmMi"),
      i = s("Qgfj"),
      a = s("SPnB"),
      l = s("OAko"),
      r = s("OWtl"),
      o = s("UR81")
    let u = (0, i.YK)({
        assistant: {
          id: "settings.usage.resets.agentEnabled.label",
          defaultMessage: "Allow your assistant to use resets",
        },
        resets: { id: "settings.usage.resets.title", defaultMessage: "Usage limit resets" },
      }),
      c = { section: "usage", id: "usage-assistant-reset", title: u.assistant },
      d = { section: "usage", id: "usage-limit-resets", title: u.resets },
      m = (0, n.un)(r.u, ({ get: e }) => {
        let t = e(a.PO)
        if (t.authLoading || null == t.authenticatedAccountId) return []
        let s = (0, l.F7)(e(l.LI).data)
        if (s?.id !== t.authenticatedAccountId && t.accountId !== t.authenticatedAccountId) return []
        let n = s?.id === t.authenticatedAccountId ? s.plan_type : t.plan
        return null == n || (0, o.uz)(n) ? [] : [d, c]
      })
    s.d(t, {}, { b: m, dR: c, oU: d })
  },
  Rd02(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("Wf1j"),
      l = s("UfZA"),
      r = s("xAz2"),
      o = s("BhIm")
    s.d(
      t,
      {},
      {
        Qr: function (e) {
          let t,
            s,
            u,
            c,
            d,
            m = (0, i.c)(29),
            {
              hideValues: h,
              orientation: g,
              ticks: f,
              maximumValue: p,
              minimumValue: x,
              showPercentageUnit: y,
              unit: _,
            } = e,
            b = void 0 !== h && h,
            v = void 0 === g ? "left" : g,
            j = void 0 === x ? 0 : x,
            w = void 0 === y || y,
            A = (0, a.A)(),
            C = j,
            M = p
          if (w && "percent" === _) M = 100
          else if (null != p && (0 !== j || 0 !== p)) {
            let e
            if (m[0] !== b || m[1] !== p || m[2] !== j || m[3] !== _) {
              let t = (0, l.dG)([j, p], 4, "credits" === _ || "usd" === _ || b)
              ;((C = t[0] ?? j),
                (e = t.at(-1) ?? p),
                (m[0] = b),
                (m[1] = p),
                (m[2] = j),
                (m[3] = _),
                (m[4] = e),
                (m[5] = C))
            } else ((e = m[4]), (C = m[5]))
            M = e
          }
          let S = "credits" === _ || "usd" === _ || b
          ;(m[6] !== M || m[7] !== C
            ? ((t = null == M ? void 0 : [C, M]), (m[6] = M), (m[7] = C), (m[8] = t))
            : (t = m[8]),
            m[9] !== v
              ? ((s = {
                  className: "text-xs",
                  fill: "var(--color-text-secondary)",
                  textAnchor: "start",
                  ...("left" === v ? { x: 0 } : {}),
                }),
                (m[9] = v),
                (m[10] = s))
              : (s = m[10]),
            m[11] !== w || m[12] !== f || m[13] !== _
              ? ((u = f ?? (w && "percent" === _ ? [0, 33.333333333333336, 66.66666666666667, 100] : void 0)),
                (m[11] = w),
                (m[12] = f),
                (m[13] = _),
                (m[14] = u))
              : (u = m[14]),
            m[15] !== b || m[16] !== A || m[17] !== w || m[18] !== _
              ? ((c = (e) =>
                  b
                    ? ""
                    : w && "percent" === _
                      ? A.formatNumber(e / 100, { maximumFractionDigits: 0, style: "percent" })
                      : "usd" === _
                        ? (0, o.W)(e, A, !0)
                        : A.formatNumber(e, { maximumFractionDigits: e < 1 ? 2 : 1, notation: "compact" })),
                (m[15] = b),
                (m[16] = A),
                (m[17] = w),
                (m[18] = _),
                (m[19] = c))
              : (c = m[19]))
          let k = 56 * !b
          return (
            m[20] !== b ||
            m[21] !== v ||
            m[22] !== k ||
            m[23] !== S ||
            m[24] !== t ||
            m[25] !== s ||
            m[26] !== u ||
            m[27] !== c
              ? ((d = (0, n.jsx)(r.h, {
                  orientation: v,
                  allowDecimals: S,
                  axisLine: !1,
                  hide: b,
                  domain: t,
                  interval: 0,
                  tick: s,
                  tickCount: 4,
                  ticks: u,
                  tickFormatter: c,
                  tickLine: !1,
                  width: k,
                })),
                (m[20] = b),
                (m[21] = v),
                (m[22] = k),
                (m[23] = S),
                (m[24] = t),
                (m[25] = s),
                (m[26] = u),
                (m[27] = c),
                (m[28] = d))
              : (d = m[28]),
            d
          )
        },
        kr: function (e) {
          let t,
            s,
            a,
            l,
            r,
            o = (0, i.c)(6),
            { height: u, points: c, width: d, x: m, y: h } = e,
            g = c?.[0]
          o[0] !== c ? ((t = c?.at(-1)), (o[0] = c), (o[1] = t)) : (t = o[1])
          let f = t
          if (null != g && null != f) ((s = g.x), (a = g.y), (l = f.y))
          else {
            if (null == m || null == h || null == d || null == u) return null
            ;((s = m + d / 2), (a = h), (l = h + u))
          }
          return (
            o[2] !== l || o[3] !== a || o[4] !== s
              ? ((r = (0, n.jsx)("line", {
                  x1: s,
                  x2: s,
                  y1: a,
                  y2: l,
                  pointerEvents: "none",
                  stroke: "var(--color-border-strong)",
                })),
                (o[2] = l),
                (o[3] = a),
                (o[4] = s),
                (o[5] = r))
              : (r = o[5]),
            r
          )
        },
        ps: function (e) {
          let t,
            s,
            a = (0, i.c)(9),
            { centerLabels: l, index: r, payload: o, tickFormatter: u, visibleTicksCount: c, x: d, y: m } = e,
            h = void 0 !== l && l,
            g = "middle"
          return (
            h || 0 !== r ? h || r !== c - 1 || (g = "end") : (g = "start"),
            a[0] !== r || a[1] !== o.value || a[2] !== u
              ? ((t = null == u ? o.value : u(o.value, r)), (a[0] = r), (a[1] = o.value), (a[2] = u), (a[3] = t))
              : (t = a[3]),
            a[4] !== t || a[5] !== g || a[6] !== d || a[7] !== m
              ? ((s = (0, n.jsx)("text", {
                  className: "text-xs",
                  dy: 12,
                  fill: "var(--color-text-secondary)",
                  textAnchor: g,
                  x: d,
                  y: m,
                  children: t,
                })),
                (a[4] = t),
                (a[5] = g),
                (a[6] = d),
                (a[7] = m),
                (a[8] = s))
              : (s = a[8]),
            s
          )
        },
      },
    )
  },
  MFyU(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("slpy"),
      l = s("on57"),
      r = s("c7eY"),
      o = s.n(r),
      u = s("zd8w"),
      c = s("oyxz"),
      d = s("Qgfj"),
      m = s("Sm6l"),
      h = s("evwP"),
      g = s("FyDI"),
      f = s("nsuH"),
      p = s("ZEx5"),
      x = s("qWrV"),
      y = s("e3HG"),
      _ = s("Cbpy")
    function b(e) {
      let { entry: t } = e
      return t.total ?? -1 / 0
    }
    function v(e, t) {
      return { entry: e, index: t }
    }
    function j(e) {
      let t,
        s,
        a = (0, i.c)(4),
        { compact: l, reduceMotion: r } = e,
        o = void 0 !== r && r
      if (void 0 !== l && l) {
        let e
        return (a[0] !== o ? ((e = (0, n.jsx)(A, { reduceMotion: o })), (a[0] = o), (a[1] = e)) : (e = a[1]), e)
      }
      return (
        a[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", { className: "w-11 shrink-0" })), (a[2] = t))
          : (t = a[2]),
        a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsxs)("div", {
              "aria-hidden": !0,
              className: "flex h-36 gap-3",
              children: [
                t,
                (0, n.jsx)("svg", {
                  className: "min-w-0 flex-1",
                  preserveAspectRatio: "none",
                  viewBox: "0 0 100 144",
                  children: [4, 43, 83, 122].map(w),
                }),
              ],
            })),
            (a[3] = s))
          : (s = a[3]),
        s
      )
    }
    function w(e) {
      return (0, n.jsx)(
        "line",
        { stroke: "var(--color-border-subtle)", vectorEffect: "non-scaling-stroke", x1: 0, x2: 100, y1: e, y2: e },
        e,
      )
    }
    function A(e) {
      let t,
        s,
        a,
        r,
        o = (0, i.c)(7),
        { reduceMotion: u } = e,
        d = !(void 0 !== u && u) && "motion-safe:animate-spin"
      return (
        o[0] !== d ? ((t = (0, l.A)("icon-xs text-secondary", d)), (o[0] = d), (o[1] = t)) : (t = o[1]),
        o[2] !== t
          ? ((s = (0, n.jsx)(g.A, { "aria-hidden": "true", className: t })), (o[2] = t), (o[3] = s))
          : (s = o[3]),
        o[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("span", {
              className: "sr-only",
              children: (0, n.jsx)(c.A, {
                id: "settings.usage.billing.chart.loading",
                defaultMessage: "Loading usage data\u2026",
              }),
            })),
            (o[4] = a))
          : (a = o[4]),
        o[5] !== s
          ? ((r = (0, n.jsxs)("span", { className: "inline-flex items-center", role: "status", children: [s, a] })),
            (o[5] = s),
            (o[6] = r))
          : (r = o[6]),
        r
      )
    }
    function C(e) {
      let t,
        s = (0, i.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, n.jsx)("div", {
              className: "flex h-full items-center justify-center gap-3 text-sm text-tertiary",
              children: a,
            })),
            (s[0] = a),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function M(e) {
      let t,
        s,
        a = (0, i.c)(13),
        { children: l, emptyMessage: r, fillChartHeight: o, hasData: u, status: d } = e
      if (u) {
        let e
        return (
          a[0] !== l || a[1] !== o
            ? ((e = o ? (0, n.jsx)("div", { className: "absolute inset-0", children: l }) : l),
              (a[0] = l),
              (a[1] = o),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      if (d.isLoading) {
        let e
        return (
          a[3] !== d.reduceMotion
            ? ((e = (0, n.jsx)(j, { reduceMotion: d.reduceMotion })), (a[3] = d.reduceMotion), (a[4] = e))
            : (e = a[4]),
          e
        )
      }
      if (d.isError) {
        let e, t, s
        return (
          a[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", {
                children: (0, n.jsx)(c.A, {
                  id: "settings.usage.billing.chart.error",
                  defaultMessage: "Could not load usage data",
                }),
              })),
              (a[5] = e))
            : (e = a[5]),
          a[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(c.A, { id: "settings.usage.billing.chart.retry", defaultMessage: "Retry" })), (a[6] = t))
            : (t = a[6]),
          a[7] !== d.onRetry
            ? ((s = (0, n.jsxs)(C, {
                children: [
                  e,
                  (0, n.jsx)(m.$, { color: "secondary", size: "toolbar", onClick: d.onRetry, children: t }),
                ],
              })),
              (a[7] = d.onRetry),
              (a[8] = s))
            : (s = a[8]),
          s
        )
      }
      return (
        a[9] !== r
          ? ((t =
              r ??
              (0, n.jsx)(c.A, { id: "settings.usage.billing.chart.empty", defaultMessage: "No usage recorded yet" })),
            (a[9] = r),
            (a[10] = t))
          : (t = a[10]),
        a[11] !== t ? ((s = (0, n.jsx)(C, { children: t })), (a[11] = t), (a[12] = s)) : (s = a[12]),
        s
      )
    }
    function S(e) {
      let t,
        s,
        a,
        r,
        o,
        c = (0, i.c)(12),
        { children: d, reduceMotion: m } = e,
        [h, g] = (0, u.useState)(null)
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            g(e.contentRect.height)
          }),
          (c[0] = t))
        : (t = c[0])
      let p = (0, f.wY)(t),
        x = !m && "transition-[height] duration-relaxed ease-basic motion-reduce:transition-none"
      return (
        c[1] !== x
          ? ((s = (0, l.A)("-mx-2 -mb-1 mt-1 box-content shrink-0 overflow-hidden px-2 py-1", x)),
            (c[1] = x),
            (c[2] = s))
          : (s = c[2]),
        c[3] !== h ? ((a = null == h ? void 0 : { height: h }), (c[3] = h), (c[4] = a)) : (a = c[4]),
        c[5] !== d || c[6] !== p
          ? ((r = (0, n.jsx)("div", { ref: p, children: d })), (c[5] = d), (c[6] = p), (c[7] = r))
          : (r = c[7]),
        c[8] !== s || c[9] !== a || c[10] !== r
          ? ((o = (0, n.jsx)("div", { className: s, style: a, children: r })),
            (c[8] = s),
            (c[9] = a),
            (c[10] = r),
            (c[11] = o))
          : (o = c[11]),
        o
      )
    }
    s.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            s,
            r,
            m,
            g,
            f,
            w,
            C,
            k,
            E,
            N,
            T = (0, i.c)(73),
            {
              actions: I,
              analyticsChart: P,
              balanceHistory: R,
              totalDescription: L,
              activeSeriesKey: O,
              children: D,
              emptyMessage: U,
              dailyLegend: F,
              estimatedSpendUsd: q,
              fillChartHeight: H,
              hasData: z,
              hideTotal: B,
              onChangeSeriesIsolation: G,
              onHoverSeriesChange: $,
              onToggleSeries: W,
              preservePopulatedCardLayout: V,
              consumerAnalytics: X,
              scope: Y,
              hiddenSeriesKeys: K,
              series: Z,
              singleSelection: Q,
              status: J,
              title: ee,
              total: et,
              totalLabel: es,
            } = e,
            en = void 0 !== R && R,
            ei = void 0 !== H && H,
            ea = void 0 !== B && B,
            el = void 0 !== V && V,
            er = void 0 !== X && X,
            eo = void 0 !== Q && Q,
            eu = (0, u.use)(x.Wj)?.scope ?? null,
            ec = (0, u.useRef)(null),
            ed = (0, u.useRef)(null),
            em = (0, u.useRef)(null),
            eh = () => {
              ;((ed.current = null), $?.(em.current))
            },
            eg = er && ei,
            ef = eg && ea && null == ee,
            ep = J.isLoading && !z,
            ex = !!J.isUpdating,
            ey = ep || ex,
            e_ = Z.length > 0 || null != W,
            eb = null != F && !z && !J.isLoading
          if (
            (null != et || (J.isLoading && J.preserveEmptyLayout)) &&
            !z &&
            !J.isError &&
            null != U &&
            !el &&
            (!J.isLoading || J.preserveEmptyLayout)
          ) {
            let e,
              t,
              s,
              i,
              a =
                !J.reduceMotion &&
                "transition-[min-height,padding,gap] duration-relaxed ease-basic motion-reduce:transition-none"
            return (
              T[0] !== a
                ? ((e = (0, l.A)("flex min-h-16 flex-col justify-center", a)), (T[0] = a), (T[1] = e))
                : (e = T[1]),
              T[2] !== U || T[3] !== J.isLoading || T[4] !== J.reduceMotion
                ? ((t = J.isLoading ? (0, n.jsx)(j, { compact: !0, reduceMotion: J.reduceMotion }) : U),
                  (T[2] = U),
                  (T[3] = J.isLoading),
                  (T[4] = J.reduceMotion),
                  (T[5] = t))
                : (t = T[5]),
              T[6] !== t
                ? ((s = (0, n.jsx)(h.W, { layout: "settings-row", children: t })), (T[6] = t), (T[7] = s))
                : (s = T[7]),
              T[8] !== s || T[9] !== e
                ? ((i = (0, n.jsx)(p.t, { children: (0, n.jsx)("div", { className: e, children: s }) })),
                  (T[8] = s),
                  (T[9] = e),
                  (T[10] = i))
                : (i = T[10]),
              i
            )
          }
          let ev = null == W ? "span" : "button",
            ej = Z.map(v),
            ew = null == F ? ej : o()(ej, b, "desc"),
            eA =
              null == F
                ? "flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs leading-4 text-secondary"
                : "-mx-2 grid h-25 grid-cols-2 content-start gap-x-6 gap-y-1 overflow-y-auto px-2 @lg:grid-cols-3 pointer-coarse:h-auto pointer-coarse:min-h-25 pointer-coarse:overflow-visible",
            eC = !er && "mt-2",
            eM = !z && "min-h-4",
            eS = !J.reduceMotion && "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
            ek = ex && "opacity-60"
          T[11] !== eS || T[12] !== ek || T[13] !== eA || T[14] !== eC || T[15] !== eM
            ? ((t = (0, l.A)(eA, eC, eM, eS, ek)),
              (T[11] = eS),
              (T[12] = ek),
              (T[13] = eA),
              (T[14] = eC),
              (T[15] = eM),
              (T[16] = t))
            : (t = T[16])
          let eE = null == F ? void 0 : eh,
            eN = ew.map((e) => {
              let t,
                { entry: s, index: i } = e,
                r = Z.length > 1 && !K?.has(s.key) && Z.every((e) => e.key === s.key || K?.has(e.key)),
                o = F?.shares?.get(s.key)
              t =
                null == o
                  ? (0, n.jsx)(c.A, { id: "consumerUsage.legend.unavailableShare", defaultMessage: "-" })
                  : o > 0 && o < 0.001
                    ? (0, n.jsx)(c.A, {
                        id: "consumerUsage.legend.belowPrecision",
                        defaultMessage: "<{threshold}",
                        values: {
                          threshold: (0, n.jsx)(d.Gr, { value: 0.001, style: "percent", maximumFractionDigits: 1 }),
                        },
                      })
                    : (0, n.jsx)(d.Gr, { value: o, style: "percent", maximumFractionDigits: 1 })
              let u = (0, n.jsxs)(
                ev,
                {
                  className: (0, l.A)(
                    null == F
                      ? "inline-flex items-center gap-1"
                      : "-mx-2 flex h-12 min-w-0 items-center gap-2.5 rounded-md px-2 text-start hover:bg-secondary-ghost-hover focus-visible:bg-secondary-ghost-hover",
                    null != W && "cursor-interaction",
                    null != O && O !== s.key && "opacity-40",
                    K?.has(s.key) && "opacity-50",
                  ),
                  "aria-pressed": null == W ? void 0 : !K?.has(s.key) && (!eo || !!K?.size),
                  onClick:
                    null == W
                      ? void 0
                      : (e) => {
                          ;(null == G || 0 === e.detail || e.detail % 2 == 1) &&
                            ((ec.current = r ? s.key : null),
                            W(s.key),
                            eo && null != P && Z.length > 1 && (0, x.zJ)(eu, P, r ? null : s.key))
                        },
                  onDoubleClick:
                    null == G
                      ? void 0
                      : () => {
                          let e = ec.current === s.key ? null : s.key
                          ;(G(e), !eo && null != P && Z.length > 1 && (0, x.zJ)(eu, P, e))
                        },
                  onPointerEnter:
                    null == F
                      ? void 0
                      : (e) => {
                          "touch" !== e.pointerType && ((ed.current = s.key), $?.(s.key))
                        },
                  onPointerLeave: null == F ? void 0 : eh,
                  onPointerCancel: null == F ? void 0 : eh,
                  onFocus:
                    null == F
                      ? void 0
                      : (e) => {
                          e.currentTarget.matches(":focus-visible") && ((em.current = s.key), $?.(s.key))
                        },
                  onBlur:
                    null == F
                      ? void 0
                      : () => {
                          ;((em.current = null), $?.(ed.current))
                        },
                  type: null == W ? void 0 : "button",
                  children: [
                    (0, n.jsx)(_.z, { color: s.color, index: i, variant: null == F ? "dot" : "bar" }),
                    null == F
                      ? s.name
                      : (0, n.jsxs)("span", {
                          className: "flex min-w-0 flex-col",
                          children: [
                            (0, n.jsx)("span", {
                              className: "truncate text-xs leading-normal font-normal text-default",
                              children: s.name,
                            }),
                            (0, n.jsx)("span", {
                              className: "text-lg leading-snug font-medium text-default tabular-nums",
                              children: t,
                            }),
                          ],
                        }),
                    !er && eo && null != s.total
                      ? (0, n.jsx)("span", { children: (0, n.jsx)(d.Gr, { value: s.total }) })
                      : null,
                  ],
                },
                s.key,
              )
              return null != F || (null == s.tooltip && null == G)
                ? u
                : (0, n.jsx)(
                    a.m,
                    {
                      content: (0, n.jsxs)(n.Fragment, {
                        children: [
                          s.tooltip,
                          null != G
                            ? (0, n.jsx)("div", {
                                children: r
                                  ? (0, n.jsx)(c.A, {
                                      id: "settings.usage.billing.chart.legend.showAll",
                                      defaultMessage: "Double-click to show all",
                                    })
                                  : (0, n.jsx)(c.A, {
                                      id: "settings.usage.billing.chart.legend.isolate",
                                      defaultMessage: "Double-click to isolate",
                                    }),
                              })
                            : null,
                        ],
                      }),
                      children: u,
                    },
                    s.key,
                  )
            })
          T[17] !== t || T[18] !== eE || T[19] !== eN
            ? ((s = (0, n.jsx)("div", { className: t, onScroll: eE, children: eN })),
              (T[17] = t),
              (T[18] = eE),
              (T[19] = eN),
              (T[20] = s))
            : (s = T[20])
          let eT = s
          T[21] !== er || T[22] !== eT || T[23] !== J.reduceMotion
            ? ((r = er ? (0, n.jsx)(S, { reduceMotion: J.reduceMotion, children: eT }) : eT),
              (T[21] = er),
              (T[22] = eT),
              (T[23] = J.reduceMotion),
              (T[24] = r))
            : (r = T[24])
          let eI = r,
            eP = en ? "gap-3" : "gap-2",
            eR = ef ? "pt-6" : "pt-3.5",
            eL = !eg && (!er || e_ ? "min-h-64" : "min-h-60"),
            eO =
              !J.reduceMotion &&
              "transition-[min-height,padding,gap] duration-relaxed ease-basic motion-reduce:transition-none"
          ;(T[25] !== eP || T[26] !== eR || T[27] !== eL || T[28] !== eO
            ? ((m = (0, l.A)("@container flex flex-col px-4 pb-3 select-none", eP, eR, eL, eO)),
              (T[25] = eP),
              (T[26] = eR),
              (T[27] = eL),
              (T[28] = eO),
              (T[29] = m))
            : (m = T[29]),
            T[30] !== I ||
            T[31] !== en ||
            T[32] !== q ||
            T[33] !== ea ||
            T[34] !== ep ||
            T[35] !== ey ||
            T[36] !== Y ||
            T[37] !== J.reduceMotion ||
            T[38] !== ee ||
            T[39] !== et ||
            T[40] !== L ||
            T[41] !== es
              ? ((g =
                  null != ee || null != I || !ea || null != es || ey
                    ? (0, n.jsxs)("div", {
                        className: (0, l.A)("flex flex-col gap-0", !en && "mb-2"),
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-between gap-2",
                            children: [
                              (0, n.jsxs)("span", {
                                className: (0, l.A)(
                                  "text-xs leading-4 text-default",
                                  ey && "inline-flex items-center gap-2",
                                ),
                                children: [
                                  (0, n.jsx)("span", {
                                    className: (0, l.A)(
                                      !J.reduceMotion &&
                                        "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
                                      ey && "opacity-60",
                                    ),
                                    children: ee,
                                  }),
                                  ey ? (0, n.jsx)(A, { reduceMotion: J.reduceMotion }) : null,
                                ],
                              }),
                              I,
                            ],
                          }),
                          ea && null == es
                            ? null
                            : (0, n.jsxs)("div", {
                                className: (0, l.A)(
                                  "flex items-baseline gap-1",
                                  !J.reduceMotion &&
                                    "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
                                  ey && "opacity-60",
                                ),
                                children: [
                                  ep
                                    ? (0, n.jsx)("div", { "aria-hidden": !0, className: "h-8" })
                                    : (0, n.jsx)("span", {
                                        className: "heading-lg font-medium text-default",
                                        children:
                                          es ??
                                          (null == et
                                            ? null
                                            : (0, n.jsx)(d.Gr, {
                                                value: et,
                                                notation: "workspace" === Y ? "compact" : "standard",
                                                maximumFractionDigits: "workspace" === Y && et < 1e3 ? 0 : 1,
                                              })),
                                      }),
                                  null == q
                                    ? null
                                    : (0, n.jsx)("span", {
                                        className: "text-xs leading-4 text-secondary",
                                        children: (0, n.jsx)(y.j, { usd: q }),
                                      }),
                                ],
                              }),
                          null == L
                            ? null
                            : (0, n.jsx)("div", { className: "text-xs leading-4 text-secondary", children: L }),
                        ],
                      })
                    : null),
                (T[30] = I),
                (T[31] = en),
                (T[32] = q),
                (T[33] = ea),
                (T[34] = ep),
                (T[35] = ey),
                (T[36] = Y),
                (T[37] = J.reduceMotion),
                (T[38] = ee),
                (T[39] = et),
                (T[40] = L),
                (T[41] = es),
                (T[42] = g))
              : (g = T[42]))
          let eD = null == F ? "contents" : "relative flex flex-col gap-2",
            eU = er && !eb && "relative z-10"
          T[43] !== en ||
          T[44] !== eg ||
          T[45] !== ey ||
          T[46] !== ef ||
          T[47] !== W ||
          T[48] !== el ||
          T[49] !== J.reduceMotion ||
          T[50] !== eU
            ? ((f = (0, l.A)(
                eU,
                eg ? (0, l.A)("shrink-0", { "h-48": en, "h-44": !en && ef, "h-36": !en && !ef }) : "flex-1",
                el && null != W ? "min-h-36" : "min-h-24",
                !J.reduceMotion && "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
                ey && "opacity-60",
              )),
              (T[43] = en),
              (T[44] = eg),
              (T[45] = ey),
              (T[46] = ef),
              (T[47] = W),
              (T[48] = el),
              (T[49] = J.reduceMotion),
              (T[50] = eU),
              (T[51] = f))
            : (f = T[51])
          let eF = ex || void 0,
            eq = eb ? "absolute inset-0" : "contents"
          ;(T[52] !== D || T[53] !== U || T[54] !== ei || T[55] !== z || T[56] !== J
            ? ((w = (0, n.jsx)(M, { emptyMessage: U, fillChartHeight: ei, hasData: z, status: J, children: D })),
              (T[52] = D),
              (T[53] = U),
              (T[54] = ei),
              (T[55] = z),
              (T[56] = J),
              (T[57] = w))
            : (w = T[57]),
            T[58] !== eq || T[59] !== w
              ? ((C = (0, n.jsx)("div", { className: eq, children: w })), (T[58] = eq), (T[59] = w), (T[60] = C))
              : (C = T[60]),
            T[61] !== f || T[62] !== eF || T[63] !== C
              ? ((k = (0, n.jsx)("div", { className: f, "aria-busy": eF, children: C })),
                (T[61] = f),
                (T[62] = eF),
                (T[63] = C),
                (T[64] = k))
              : (k = T[64]))
          let eH = (z && (!er || Z.length > 0)) || (el && null != W) ? eI : null
          return (
            T[65] !== eD || T[66] !== k || T[67] !== eH
              ? ((E = (0, n.jsxs)("div", { className: eD, children: [k, eH] })),
                (T[65] = eD),
                (T[66] = k),
                (T[67] = eH),
                (T[68] = E))
              : (E = T[68]),
            T[69] !== m || T[70] !== g || T[71] !== E
              ? ((N = (0, n.jsx)(p.t, {
                  contentOverflow: "visible",
                  children: (0, n.jsxs)("div", { className: m, children: [g, E] }),
                })),
                (T[69] = m),
                (T[70] = g),
                (T[71] = E),
                (T[72] = N))
              : (N = T[72]),
            N
          )
        },
        L: j,
      },
    )
  },
  e3HG(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("oyxz"),
      l = s("Qgfj")
    s.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            s = (0, i.c)(3),
            { usd: r } = e,
            o = r > 0 && r < 0.01 ? 6 : 2
          return (
            s[0] !== o || s[1] !== r
              ? ((t = (0, n.jsx)(a.A, {
                  id: "settings.usage.billing.estimatedSpend",
                  defaultMessage: "Est. {value}",
                  values: {
                    value: (0, n.jsx)(l.Gr, {
                      value: r,
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: o,
                    }),
                  },
                })),
                (s[0] = o),
                (s[1] = r),
                (s[2] = t))
              : (t = s[2]),
            t
          )
        },
      },
    )
  },
  pWo8(e, t, s) {
    var n = s("UdvQ"),
      i = s("ZPsI")
    let a = (0, n.EI)("date")
    s.d(
      t,
      {},
      {
        BN: (e, t) => {
          let s = e?.some((e) => "matched" !== e.status || e.prev.x !== e.next.x || e.prev.width !== e.next.width)
          return (
            e?.flatMap((e) => {
              if ("removed" === e.status) return []
              let n = e.next,
                i = "added" === e.status || s ? null : e.prev,
                a = i?.y ?? n.stackedBarStart,
                l = i?.height ?? 0
              return [{ ...n, y: a + (n.y - a) * t, height: l + (n.height - l) * t }]
            }) ?? []
          )
        },
        X2: (e, t) => {
          let s = e?.flatMap((e) => ("added" === e.status ? [] : [e.prev])) ?? []
          return (
            e?.flatMap((e) => {
              if ("removed" === e.status) return []
              let n = e.next,
                i = n.x
              if (null == i || null == n.y || 0 === s.length) return [n]
              let a = s.findIndex((e) => null != e.x && e.x >= i),
                l = -1 === a ? s.length - 1 : a,
                r = s[Math.max(0, l - 1)],
                o = s[l]
              if (null == r.x || null == r.y || null == o.x || null == o.y) return [n]
              let u = o.x === r.x ? o.y : r.y + ((o.y - r.y) * (i - r.x)) / (o.x - r.x)
              return [{ ...n, y: u + (n.y - u) * t }]
            }) ?? []
          )
        },
        YZ: function (e) {
          let t = e.tooltipWidth || 260,
            s = e.tooltipHeight,
            n = e.tooltipVerticalBounds?.top ?? 0,
            i = e.tooltipVerticalBounds?.bottom ?? (0 === e.chartHeight ? 1 / 0 : e.chartHeight),
            a = e.y + 12,
            l = 0 === s || a + s <= i ? a : e.y - s - 12,
            r = Math.max(n, i - s)
          return { x: Math.max(0, Math.min(e.x + 12, e.chartWidth - t)), y: Math.max(n, Math.min(l, r)) }
        },
        Z5: a,
        jn: function ({ data: e, pointer: t, series: s, xScale: n, yScale: i, yInverseScale: a }) {
          if (null == e || 0 === e.length) return []
          let l = e.findIndex((e) => {
            let s = n(e.date, { position: "middle" })
            return null != s && s >= t.x
          })
          l < 0 && (l = e.length - 1)
          let r = e[Math.max(0, l - 1)],
            o = e[l]
          if (null == r || null == o) return []
          let u = n(r.date, { position: "middle" }),
            c = n(o.date, { position: "middle" })
          if (null == u || null == c) return []
          let d = u === c ? 0 : Math.max(0, Math.min(1, (t.x - u) / (c - u)))
          return s.flatMap((e, s) => {
            let n = e.value(r),
              l = e.value(o)
            if (!Number.isFinite(n) || !Number.isFinite(l)) return []
            let u = n + (l - n) * d,
              c = t.curveYBySeries?.[s] ?? i(u)
            if (null == c || !Number.isFinite(c)) return []
            let m = null == t.curveYBySeries ? void 0 : a?.(c),
              h = "number" == typeof m && Number.isFinite(m) ? m : u
            return [{ key: e.key, name: e.name, color: e.color, value: h, y: c }]
          })
        },
        nV: function (e, t, s = !1) {
          let n,
            { relativeX: a, relativeY: l } = (0, i.X)(e),
            r = e.currentTarget.querySelector(".recharts-tooltip-wrapper"),
            o = e.currentTarget.clientWidth,
            u = e.currentTarget.clientHeight,
            c = t || s ? e.currentTarget.getBoundingClientRect() : void 0,
            d = null == c || 0 === o ? 1 : c.width / o || 1,
            m = null == c || 0 === u ? d : c.height / u || 1,
            h = t ? r?.getBoundingClientRect() : void 0
          if (s && null != c) {
            let t = 0,
              s = window.innerHeight
            for (let n = e.currentTarget.parentElement; null != n; n = n.parentElement)
              if ("visible" !== getComputedStyle(n).overflowY) {
                let e = n.getBoundingClientRect()
                ;((t = Math.max(t, e.top)), (s = Math.min(s, e.bottom)))
              }
            n = { top: (t - c.top) / m, bottom: (s - c.top) / m }
          }
          return {
            x: a,
            y: l,
            chartWidth: o,
            chartHeight: u,
            tooltipWidth: null == h ? (r?.offsetWidth ?? 0) : h.width / d,
            tooltipHeight: null == h ? (r?.offsetHeight ?? 0) : h.height / m,
            tooltipVerticalBounds: n,
            curveYBySeries: t
              ? Array.from(
                  e.currentTarget.querySelectorAll(".recharts-line:not(.opacity-0) .recharts-line-curve"),
                  (e) =>
                    (function (e, t) {
                      if ("function" != typeof e.getTotalLength || "function" != typeof e.getPointAtLength) return null
                      try {
                        let s = 0,
                          n = e.getTotalLength()
                        if (!Number.isFinite(n) || 0 === n) return null
                        let i = e.getPointAtLength(s),
                          a = e.getPointAtLength(n)
                        if (t <= i.x) return i.y
                        if (t >= a.x) return a.y
                        for (let i = 0; i < 11; i += 1) {
                          let i = (s + n) / 2
                          e.getPointAtLength(i).x < t ? (s = i) : (n = i)
                        }
                        return e.getPointAtLength((s + n) / 2).y
                      } catch {
                        return null
                      }
                    })(e, a),
                )
              : void 0,
          }
        },
      },
    )
  },
  O28E(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("phtB"),
      l = s("m6vF"),
      r = s("aHZf"),
      o = s("jTKk"),
      u = s("pWo8")
    s.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            s,
            a,
            c,
            d,
            m,
            h,
            g,
            f = (0, i.c)(29),
            { data: p, pointer: x, series: y } = e,
            _ = (0, l.oM)(),
            b = (0, l.Ph)(),
            v = (0, l.AD)(),
            j = (0, l.Sg)()
          if (
            null == x ||
            null == _ ||
            null == b ||
            null == v ||
            x.x < _.x ||
            x.x > _.x + _.width ||
            x.y < _.y ||
            x.y > _.y + _.height
          )
            return null
          if (
            f[0] !== p ||
            f[1] !== _.height ||
            f[2] !== _.y ||
            f[3] !== x ||
            f[4] !== y ||
            f[5] !== b ||
            f[6] !== j ||
            f[7] !== v
          ) {
            let e,
              i = (0, u.jn)({ data: p, pointer: x, series: y, xScale: b, yScale: v, yInverseScale: j })
            ;((t = r.g), (m = o.I.activeDot), (s = "true"), (a = "none"))
            let l = _.y + _.height
            ;(f[14] !== _.y || f[15] !== x.x || f[16] !== l
              ? ((c = (0, n.jsx)("line", { x1: x.x, x2: x.x, y1: _.y, y2: l, stroke: "var(--color-border-strong)" })),
                (f[14] = _.y),
                (f[15] = x.x),
                (f[16] = l),
                (f[17] = c))
              : (c = f[17]),
              f[18] !== x.x
                ? ((e = (e) =>
                    (0, n.jsx)(
                      "circle",
                      { cx: x.x, cy: e.y, fill: e.color, r: 4, stroke: "var(--color-surface)", strokeWidth: 2 },
                      e.key,
                    )),
                  (f[18] = x.x),
                  (f[19] = e))
                : (e = f[19]),
              (d = i.map(e)),
              (f[0] = p),
              (f[1] = _.height),
              (f[2] = _.y),
              (f[3] = x),
              (f[4] = y),
              (f[5] = b),
              (f[6] = j),
              (f[7] = v),
              (f[8] = t),
              (f[9] = s),
              (f[10] = a),
              (f[11] = c),
              (f[12] = d),
              (f[13] = m))
          } else ((t = f[8]), (s = f[9]), (a = f[10]), (c = f[11]), (d = f[12]), (m = f[13]))
          return (
            f[20] !== s || f[21] !== a || f[22] !== c || f[23] !== d
              ? ((h = (0, n.jsxs)("g", { "aria-hidden": s, pointerEvents: a, children: [c, d] })),
                (f[20] = s),
                (f[21] = a),
                (f[22] = c),
                (f[23] = d),
                (f[24] = h))
              : (h = f[24]),
            f[25] !== t || f[26] !== m || f[27] !== h
              ? ((g = (0, n.jsx)(t, { zIndex: m, children: h })), (f[25] = t), (f[26] = m), (f[27] = h), (f[28] = g))
              : (g = f[28]),
            g
          )
        },
        H: function (e) {
          let t,
            s,
            l,
            r,
            o = (0, i.c)(17),
            {
              children: u,
              isTooltipDismissed: c,
              onResetHover: d,
              onTooltipDismissedChange: m,
              consumerAnalytics: h,
              scope: g,
            } = e,
            f = void 0 !== h && h
          o[0] !== c || o[1] !== m ? ((t = c ? () => m(!1) : void 0), (o[0] = c), (o[1] = m), (o[2] = t)) : (t = o[2])
          let p = t
          o[3] !== d || o[4] !== m || o[5] !== g
            ? ((s =
                "workspace" === g
                  ? void 0
                  : () => {
                      ;(m(!0), d())
                    }),
              (o[3] = d),
              (o[4] = m),
              (o[5] = g),
              (o[6] = s))
            : (s = o[6])
          let x = s
          return (
            o[7] !== f || o[8] !== d || o[9] !== m || o[10] !== p
              ? ((l = f
                  ? (e) => {
                      if ("Escape" === e.key) {
                        let t = e.currentTarget.querySelector(".recharts-tooltip-wrapper")
                        t?.querySelector('[role="status"]') != null &&
                          "visible" === getComputedStyle(t).visibility &&
                          (e.stopPropagation(), m(!0), d())
                      } else p?.()
                    }
                  : p),
                (o[7] = f),
                (o[8] = d),
                (o[9] = m),
                (o[10] = p),
                (o[11] = l))
              : (l = o[11]),
            o[12] !== u || o[13] !== x || o[14] !== p || o[15] !== l
              ? ((r = (0, n.jsx)(a.u, {
                  width: "100%",
                  height: "100%",
                  minHeight: 144,
                  onFocusCapture: p,
                  onKeyDownCapture: l,
                  onMouseLeave: x,
                  onMouseMoveCapture: p,
                  onWheelCapture: x,
                  children: u,
                })),
                (o[12] = u),
                (o[13] = x),
                (o[14] = p),
                (o[15] = l),
                (o[16] = r))
              : (r = o[16]),
            r
          )
        },
      },
    )
  },
  Cbpy(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("o6lh")
    s.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            s = (0, i.c)(4),
            { color: l, index: r, variant: o } = e,
            u = l ?? a.Kj[r % a.Kj.length]
          if ("bar" === (void 0 === o ? "dot" : o)) {
            let e
            return (
              s[0] !== u
                ? ((e = (0, n.jsx)("svg", {
                    "aria-hidden": "true",
                    className: "h-10 w-1 shrink-0",
                    viewBox: "0 0 4 40",
                    children: (0, n.jsx)("rect", { width: 4, height: 40, rx: 2, fill: u }),
                  })),
                  (s[0] = u),
                  (s[1] = e))
                : (e = s[1]),
              e
            )
          }
          return (
            s[2] !== u
              ? ((t = (0, n.jsx)("svg", {
                  "aria-hidden": "true",
                  className: "size-2.5 shrink-0",
                  viewBox: "0 0 10 10",
                  children: (0, n.jsx)("circle", { cx: 5, cy: 5, fill: u, r: 5 }),
                })),
                (s[2] = u),
                (s[3] = t))
              : (t = s[3]),
            t
          )
        },
      },
    )
  },
  qF12(e, t, s) {
    var n = s("o6lh")
    s.d(
      t,
      {},
      {
        AS: function (e) {
          return [...n.Kj.slice(3), ...n.Kj.slice(0, 3)].find((t) => !e.some((e) => e.color === t)) ?? n.Kj[3]
        },
        Ft: function (e, t) {
          return null != e && t.some(({ key: t }) => e.has(t)) && t.some(({ key: t }) => !e.has(t)) ? e : null
        },
        Ib: [4, 4, 0, 0],
        OP: function (e, t, s, n) {
          let i = new Set([...(e ?? []), ...[...(n ?? [])].filter((e) => !s.some((t) => t.key === e))])
          return i.has(t) ? (i.delete(t), i) : s.some((e) => e.key !== t && !i.has(e.key)) ? (i.add(t), i) : (e ?? i)
        },
        bG: "__other_usage_series__",
        cc: function (e) {
          let t = e.indexOf(": ")
          if (-1 === t) return e
          let s = e.slice(0, t),
            n = e.slice(t + 2),
            i = `${s} `
          return (n.startsWith(i) && n.slice(i.length)) || n
        },
        vD: function (e, t, s) {
          let n = new Set([...(s ?? []), ...t.map((e) => e.key)])
          return (n.delete(e), n)
        },
      },
    )
  },
  BhIm(e, t, s) {
    s.d(
      t,
      {},
      {
        W: function (e, t, s = !1) {
          let n = Math.abs(e)
          return t.formatNumber(e, {
            style: "currency",
            currency: "USD",
            notation: s ? "compact" : "standard",
            minimumFractionDigits: s && n >= 1e3 ? 0 : 2,
            maximumFractionDigits: 2,
            maximumSignificantDigits: n > 0 && n < 0.01 ? 3 : void 0,
          })
        },
      },
    )
  },
  TMLa(e, t, s) {
    s.d(t, { UsageSettingsPage: () => sN })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57"),
      l = s("zd8w"),
      r = s("Ywss"),
      o = s("uXTt"),
      u = s("WXto"),
      c = s("v4LA"),
      d = s("odCE"),
      m = s("UR81"),
      h = s("QIEU"),
      g = s("Yy67")
    let f = "oai/siwc-credit-referral"
    function p(e) {
      return (window.addEventListener(f, e), () => window.removeEventListener(f, e))
    }
    function x() {
      try {
        let [e, t = "", s] = (sessionStorage.getItem(f) ?? "").split(":")
        if (void 0 === s && Number(e) > Date.now() && /^[A-Za-z0-9_-]{1,255}$/.test(t))
          return { expiresAt: e, appId: t }
      } catch {}
    }
    let y = (0, s("ESTr").a)({
      name: "gauge-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 1.25, y: 2.25, width: 21.503906, height: 18.326416 },
        visualBounds: { x: 1.25, y: 2.25, width: 21.503906, height: 18.326416 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.25, y: 2.25, width: 21.503906, height: 18.326416 },
        center: { x: 12.001953, y: 11.413208 },
        insets: { top: 2.25, right: 1.246094, bottom: 3.423584, left: 1.25 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.001953, y: 11.413208 },
          foreground: { x: 12.001953, y: 11.413208 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M12.002 2.25C13.1291 2.25003 14.2175 2.42343 15.2402 2.74609C15.6351 2.87083 15.8541 3.29257 15.7295 3.6875C15.6048 4.08244 15.1831 4.30137 14.7881 4.17676C13.9098 3.89971 12.9741 3.75003 12.002 3.75C6.89242 3.75 2.75 7.89242 2.75 13.002C2.75008 15.4424 3.69407 17.6608 5.23828 19.3145C5.52099 19.6172 5.50488 20.0923 5.20215 20.375C4.8994 20.6575 4.42522 20.6405 4.14258 20.3379C2.34919 18.4175 1.25008 15.8374 1.25 13.002C1.25 7.06399 6.06399 2.25 12.002 2.25Z" fill="currentColor"/> <path d="M21.3447 9.34473C21.7404 9.22373 22.1597 9.44619 22.2812 9.8418C22.5883 10.8417 22.7539 11.9036 22.7539 13.002C22.7538 15.8371 21.6545 18.4175 19.8613 20.3379C19.5787 20.6405 19.1045 20.6573 18.8018 20.375C18.499 20.0923 18.4829 19.6172 18.7656 19.3145C20.3095 17.6609 21.2538 15.4422 21.2539 13.002C21.2539 12.0543 21.1114 11.1402 20.8477 10.2812C20.7264 9.88543 20.9489 9.46627 21.3447 9.34473Z" fill="currentColor"/> <path d="M17.8262 6.15039C18.119 5.85754 18.5938 5.85761 18.8867 6.15039C19.1796 6.44329 19.1796 6.91806 18.8867 7.21094L14.6123 11.4844C14.8723 11.9308 15.0244 12.4481 15.0244 13.002C15.0242 14.6713 13.6713 16.0242 12.002 16.0244C10.3324 16.0244 8.97869 14.6714 8.97852 13.002C8.97858 11.3324 10.3324 9.97852 12.002 9.97852C12.5729 9.97858 13.1051 10.1399 13.5605 10.415L17.8262 6.15039ZM12.002 11.4785C11.1608 11.4785 10.4786 12.1608 10.4785 13.002C10.4787 13.843 11.1609 14.5244 12.002 14.5244C12.8429 14.5242 13.5242 13.8429 13.5244 13.002C13.5243 12.1609 12.843 11.4787 12.002 11.4785Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var _ = s("qmMi"),
      b = s("oyxz"),
      v = s("UOa8"),
      j = s("Sm6l"),
      w = s("HOLv"),
      A = s("smwl"),
      C = s("T0Rc"),
      M = s("i85S"),
      S = s("pdRU"),
      k = s("gPv1"),
      E = s("T1PX"),
      N = s("BSnr"),
      T = s("AWNZ"),
      I = s("ZEx5"),
      P = s("hZax"),
      R = s("rivV"),
      L = s("x7EU"),
      O = s("LjYy"),
      D = s("xJwB"),
      U = s("uSFS"),
      F = s("Wf1j"),
      q = s("Ot7V"),
      H = s("QpGz"),
      z = s("laUo"),
      B = s("PXhB"),
      G = s("GEHh")
    function $(e) {
      let t,
        s,
        a,
        l,
        r,
        o,
        u,
        c,
        d,
        m,
        h,
        g,
        f = (0, i.c)(30),
        { plan: p } = e,
        x = (0, F.A)()
      f[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (f[0] = t)) : (t = f[0])
      let y = (0, H.q)(t),
        _ = (0, G.j)(),
        v = (0, z.m6)(p),
        w = null != v
      f[1] !== w ? ((s = { enabled: w }), (f[1] = w), (f[2] = s)) : (s = f[2])
      let { data: C } = (0, A.zw)(s)
      if (null == v) return null
      let M =
          null != C
            ? (0, B.m)({
                intl: x,
                amount: C.monthlyAmounts[v.pricePlan] ?? null,
                currencyCode: C.currencyCode,
                minorUnitExponent: C.minorUnitExponent,
              })
            : null,
        S = N.X
      ;(f[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)(b.A, { id: "settings.usage.plan.title", defaultMessage: "Your plan" })), (f[3] = a))
        : (a = f[3]),
        f[4] !== p
          ? ((l = (0, n.jsx)(N.X.Header, { title: a, subtitle: (0, n.jsx)(W, { plan: p }) })), (f[4] = p), (f[5] = l))
          : (l = f[5]))
      let k = N.X,
        E = I.t,
        P = T.ic,
        R = (function (e) {
          switch (e) {
            case O.x.FREE:
              return (0, n.jsx)(b.A, { id: "settings.usage.plan.free", defaultMessage: "ChatGPT Free" })
            case O.x.GO:
              return (0, n.jsx)(b.A, { id: "settings.usage.plan.go", defaultMessage: "ChatGPT Go" })
            case O.x.PLUS:
              return (0, n.jsx)(b.A, { id: "settings.usage.plan.plus", defaultMessage: "ChatGPT Plus" })
            case O.x.PROLITE:
            case O.x.PRO:
            case O.x.PROMAX:
              return (0, n.jsx)(b.A, {
                id: "settings.usage.plan.pro.numberedTiers",
                defaultMessage: "ChatGPT {plan, select, prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}",
                values: { plan: e },
              })
          }
        })(v.pricePlan)
      return (
        f[6] !== M
          ? ((r =
              null != M
                ? (0, n.jsx)(b.A, {
                    id: "settings.usage.plan.monthlyPrice",
                    defaultMessage: "{price} / month",
                    values: { price: M },
                  })
                : null),
            (f[6] = M),
            (f[7] = r))
          : (r = f[7]),
        f[8] !== y || f[9] !== _ || f[10] !== v.pricePlan
          ? ((o = (e) => {
              _({ currentPlan: v.pricePlan, event: e, getPricingUrl: y, source: "usage_settings_plan_row" })
            }),
            (f[8] = y),
            (f[9] = _),
            (f[10] = v.pricePlan),
            (f[11] = o))
          : (o = f[11]),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(b.A, { id: "settings.usage.plan.view", defaultMessage: "View plans" })), (f[12] = u))
          : (u = f[12]),
        f[13] !== o
          ? ((c = (0, n.jsx)(j.$, { color: "secondary", size: "toolbar", onClick: o, children: u })),
            (f[13] = o),
            (f[14] = c))
          : (c = f[14]),
        f[15] !== P || f[16] !== c || f[17] !== R || f[18] !== r
          ? ((d = (0, n.jsx)(P, { className: "gap-6", label: R, description: r, control: c })),
            (f[15] = P),
            (f[16] = c),
            (f[17] = R),
            (f[18] = r),
            (f[19] = d))
          : (d = f[19]),
        f[20] !== E || f[21] !== d
          ? ((m = (0, n.jsx)(E, { children: d })), (f[20] = E), (f[21] = d), (f[22] = m))
          : (m = f[22]),
        f[23] !== m || f[24] !== k.Content
          ? ((h = (0, n.jsx)(k.Content, { children: m })), (f[23] = m), (f[24] = k.Content), (f[25] = h))
          : (h = f[25]),
        f[26] !== S || f[27] !== h || f[28] !== l
          ? ((g = (0, n.jsxs)(S, { children: [l, h] })), (f[26] = S), (f[27] = h), (f[28] = l), (f[29] = g))
          : (g = f[29]),
        g
      )
    }
    function W(e) {
      let t,
        s,
        a,
        l = (0, i.c)(12),
        { plan: r } = e
      ;(l[0] !== r ? ((t = (0, z.gx)(r)), (l[0] = r), (l[1] = t)) : (t = l[1]),
        l[2] !== t ? ((s = { enabled: t }), (l[2] = t), (l[3] = s)) : (s = l[3]))
      let { data: o } = (0, A.TG)(s)
      if (!(0, z.gx)(r)) return null
      let u = (0, z.q8)(o),
        c = "ios" === u ? z.R0 : "android" === u ? z.PI : z.oK
      l[4] !== c
        ? ((a = (e) =>
            (0, n.jsx)("a", {
              className: "cursor-interaction text-link-primary!",
              href: c,
              target: "_blank",
              rel: "noreferrer",
              onClick: (e) => {
                ;(0, q.PQ)({ event: e, href: c, initiator: "open_in_browser_bridge" })
              },
              children: e,
            })),
          (l[4] = c),
          (l[5] = a))
        : (a = l[5])
      let d = a
      switch (u) {
        case null: {
          let e
          return (
            l[6] !== d
              ? ((e = (0, n.jsx)(b.A, {
                  id: "settings.usage.plan.manageOnWebDescription",
                  defaultMessage:
                    "Your subscription is managed through ChatGPT. Go to <cancel>Settings > Billing on Web</cancel> to manage or cancel your plan",
                  values: { cancel: d },
                })),
                (l[6] = d),
                (l[7] = e))
              : (e = l[7]),
            e
          )
        }
        case "ios": {
          let e
          return (
            l[8] !== d
              ? ((e = (0, n.jsx)(b.A, {
                  id: "settings.usage.cancelPlan.appleDescription",
                  defaultMessage:
                    "Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>",
                  values: { cancel: d },
                })),
                (l[8] = d),
                (l[9] = e))
              : (e = l[9]),
            e
          )
        }
        case "android": {
          let e
          return (
            l[10] !== d
              ? ((e = (0, n.jsx)(b.A, {
                  id: "settings.usage.cancelPlan.googlePlayDescription",
                  defaultMessage:
                    "Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>",
                  values: { cancel: d },
                })),
                (l[10] = d),
                (l[11] = e))
              : (e = l[11]),
            e
          )
        }
      }
    }
    var V = s("cE8H"),
      X = s("irkb"),
      Y = s("xSOA"),
      K = s("Qgfj"),
      Z = s("SPnB"),
      Q = s("TjgH"),
      J = s("bqtn"),
      ee = s("SGsN"),
      et = s("F0xz"),
      es = s("ieEC"),
      en = s("OWtl"),
      ei = s("SJoA"),
      ea = s("I7Ou"),
      el = s("QyE3"),
      er = s("SOLA"),
      eo = s("rvFo"),
      eu = s("kK7d")
    let ec = (0, K.YK)({ save: { id: "settings.usage.subscriptionSharing.apps.save", defaultMessage: "Save" } })
    function ed(e) {
      return e.allowed_usage_percent > 0 && e.windows?.some((e) => 0 === e.remaining_percent) === !0
    }
    let em = (0, K.YK)({
      limitsUpdated: {
        id: "settings.usage.subscriptionSharing.apps.limitsUpdated",
        defaultMessage: "App limits updated",
      },
      limitsUpdateError: {
        id: "settings.usage.subscriptionSharing.apps.limitsUpdateError",
        defaultMessage: "Couldn't update app limits. Please try again",
      },
    })
    var eh = s("g2p6"),
      eg = s("pO0d"),
      ef = s("p1QF")
    let ep = (0, K.YK)({
      enabled: {
        id: "settings.usage.subscriptionSharing.credits.enabled",
        defaultMessage: "Credit use for other apps turned on",
      },
      disabled: {
        id: "settings.usage.subscriptionSharing.credits.disabled",
        defaultMessage: "Credit use for other apps turned off",
      },
      updateError: {
        id: "settings.usage.subscriptionSharing.credits.updateError",
        defaultMessage: "Couldn\u2019t update credit preference",
      },
    })
    function ex() {
      let e,
        t,
        s,
        a,
        l,
        r,
        o = (0, i.c)(29),
        u = (0, _.gh)(en.u),
        c = (0, F.A)(),
        { accountId: d, userId: m } = (0, v.As)(),
        h = (0, X.jE)(),
        { data: g, isError: f, isFetching: p, refetch: x } = (0, _.Ul)(eh.s6)
      ;(o[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = ["set-chatpass-credit-preference"]), (o[0] = e))
        : (e = o[0]),
        o[1] !== u ? ((t = (e) => (0, eh.b$)(u, e)), (o[1] = u), (o[2] = t)) : (t = o[2]),
        o[3] !== d || o[4] !== c || o[5] !== h || o[6] !== u || o[7] !== m
          ? ((s = (e, t) => {
              let s = ["usage-settings", "chatpass-apps", d, m]
              ;(h.setQueryData(s, ey),
                h.invalidateQueries({ queryKey: s }),
                u.get(ee.Id).success(c.formatMessage(t ? ep.enabled : ep.disabled)))
            }),
            (o[3] = d),
            (o[4] = c),
            (o[5] = h),
            (o[6] = u),
            (o[7] = m),
            (o[8] = s))
          : (s = o[8]),
        o[9] !== c || o[10] !== u
          ? ((a = () => {
              u.get(ee.Id).danger(c.formatMessage(ep.updateError), {
                errorAnalytics: { toastId: "settings.usage.subscriptionSharing.credits.updateError" },
              })
            }),
            (o[9] = c),
            (o[10] = u),
            (o[11] = a))
          : (a = o[11]),
        o[12] !== t || o[13] !== s || o[14] !== a
          ? ((l = { mutationKey: e, mutationFn: t, onSuccess: s, onError: a }),
            (o[12] = t),
            (o[13] = s),
            (o[14] = a),
            (o[15] = l))
          : (l = o[15]))
      let { isPending: y, mutate: w } = (0, Y.n)(l)
      if (f && null == g) {
        let e, t, s, i
        return (
          o[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", {
                role: "alert",
                children: (0, n.jsx)(b.A, {
                  id: "settings.usage.subscriptionSharing.credits.loadError",
                  defaultMessage: "Couldn\u2019t load credit preference",
                }),
              })),
              (o[16] = e))
            : (e = o[16]),
          o[17] !== x ? ((t = () => void x()), (o[17] = x), (o[18] = t)) : (t = o[18]),
          o[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(b.A, { id: "common.retry", defaultMessage: "Retry" })), (o[19] = s))
            : (s = o[19]),
          o[20] !== p || o[21] !== t
            ? ((i = (0, n.jsx)(T.ic, {
                label: e,
                control: (0, n.jsx)(j.$, { color: "secondary", loading: p, size: "toolbar", onClick: t, children: s }),
              })),
              (o[20] = p),
              (o[21] = t),
              (o[22] = i))
            : (i = o[22]),
          i
        )
      }
      if (null == g) {
        let e
        return (
          o[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(ea.u, {
                children: (0, n.jsx)(b.A, {
                  id: "settings.usage.subscriptionSharing.credits.loading",
                  defaultMessage: "Loading credit preference\u2026",
                }),
              })),
              (o[23] = e))
            : (e = o[23]),
          e
        )
      }
      return (
        o[24] !== c || o[25] !== y || o[26] !== w || o[27] !== g.canConsumePersonalCreditsChatPass
          ? ((r = (0, n.jsx)(eg.GC, {
              entry: ef.qF,
              control: (e) => {
                let { "aria-describedby": t } = e
                return (0, n.jsx)(et.l, {
                  "aria-describedby": t,
                  ariaLabel: c.formatMessage({
                    id: "settings.usage.credit.chatpass.ariaLabel",
                    defaultMessage: "Allow other apps to use credits after reaching your usage limit",
                  }),
                  checked: g.canConsumePersonalCreditsChatPass,
                  disabled: y,
                  onChange: (e) => w(e),
                })
              },
            })),
            (o[24] = c),
            (o[25] = y),
            (o[26] = w),
            (o[27] = g.canConsumePersonalCreditsChatPass),
            (o[28] = r))
          : (r = o[28]),
        r
      )
    }
    function ey(e) {
      return null == e ? e : { ...e, items: e.items.map(e_) }
    }
    function e_(e) {
      return { ...e, credits_enabled: null }
    }
    let eb = ""
    function ev() {
      return eb
    }
    let ej = "siwc-return-reminder-changed"
    function ew(e) {
      return (window.addEventListener(ej, e), () => window.removeEventListener(ej, e))
    }
    function eA({ accountId: e, userId: t }) {
      return "oai/siwc-return-reminder:" + JSON.stringify([e, t])
    }
    function eC({ referral: e }) {
      return JSON.stringify([e.appId, e.expiresAt])
    }
    let eM = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      eS = () => x()?.appId ?? "",
      ek = () => x()?.expiresAt ?? ""
    function eE(e) {
      var t
      let s,
        a,
        r,
        o,
        u,
        c,
        d,
        m,
        h,
        g,
        f,
        x,
        y,
        w,
        A,
        M,
        S,
        E,
        P,
        R,
        L,
        O,
        D,
        U,
        q,
        H,
        z,
        B,
        G,
        $,
        W = (0, i.c)(121),
        { isPolling: K, showCreditPreference: Q } = e,
        J = (0, _.gh)(en.u),
        et = (0, F.A)(),
        es = (0, l.useSyncExternalStore)(p, ek, eI),
        ei = (0, _.Ul)(Z.MS),
        { data: el } = (0, _.Ul)(k.Ix)
      W[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { mutationKey: ["set-chatpass-credit-preference"] }), (W[0] = s))
        : (s = W[0])
      let eh = (0, V.l)(s),
        eg = (0, l.useSyncExternalStore)(p, eS, eT),
        { accountId: ep, userId: ey } = (0, v.As)(),
        e_ = (0, X.jE)()
      W[1] !== ep || W[2] !== ey
        ? ((a = ["usage-settings", "chatpass-apps", ep, ey]), (W[1] = ep), (W[2] = ey), (W[3] = a))
        : (a = W[3])
      let eM = a
      W[4] === Symbol.for("react.memo_cache_sentinel") ? ((r = {}), (W[4] = r)) : (r = W[4])
      let [eE, eR] = (0, l.useState)(r)
      ;(W[5] !== ep || W[6] !== ey
        ? ((o = (0, ef.Bd)({ accountId: ep, userId: ey })), (W[5] = ep), (W[6] = ey), (W[7] = o))
        : (o = W[7]),
        W[8] !== K
          ? ((u = (e) => !!K && ("success" !== e.state.status || null != e.state.data) && eo.D.ONE_MINUTE),
            (W[8] = K),
            (W[9] = u))
          : (u = W[9]),
        W[10] !== K || W[11] !== o || W[12] !== u
          ? ((c = { ...o, staleTime: eo.D.ONE_MINUTE, refetchInterval: u, refetchOnWindowFocus: K }),
            (W[10] = K),
            (W[11] = o),
            (W[12] = u),
            (W[13] = c))
          : (c = W[13]))
      let { data: eL, isError: eO, isFetching: eD, isSuccess: eU, refetch: eF } = (0, C.I)(c)
      ;(W[14] !== e_ || W[15] !== eM
        ? ((d = () => e_.cancelQueries({ queryKey: eM })), (W[14] = e_), (W[15] = eM), (W[16] = d))
        : (d = W[16]),
        W[17] !== ep
          ? ((m = (e) =>
              eu.CodexRequest.safePut("/wham/usage/chatpass/limits", {
                additionalHeaders: null == ep ? void 0 : { "ChatGPT-Account-ID": ep },
                expectedErrorStatuses: [400, 401, 403, 404, 503],
                requestBody: { global_percentage: 100, per_app_percentage: e },
              })),
            (W[17] = ep),
            (W[18] = m))
          : (m = W[18]),
        W[19] !== e_ || W[20] !== eM || W[21] !== J
          ? ((h = async (e) => {
              ;(await e_.cancelQueries({ queryKey: eM }),
                e_.setQueryData(eM, (t) =>
                  null == t
                    ? t
                    : {
                        ...t,
                        items: t.items.map((t) => ({
                          ...t,
                          allowed_usage_percent: e.per_app_percentage?.[t.id] ?? 100,
                          plan_available: null,
                          credits_enabled: null,
                        })),
                      },
                ),
                J.get(ee.Id).success((0, n.jsx)(b.A, { ...em.limitsUpdated })),
                eR({}),
                e_.invalidateQueries({ queryKey: eM }))
            }),
            (W[19] = e_),
            (W[20] = eM),
            (W[21] = J),
            (W[22] = h))
          : (h = W[22]),
        W[23] !== J
          ? ((g = () => {
              J.get(ee.Id).danger((0, n.jsx)(b.A, { ...em.limitsUpdateError }), {
                errorAnalytics: { toastId: "chatpassAppLimits.onError.limitUpdateError" },
              })
            }),
            (W[23] = J),
            (W[24] = g))
          : (g = W[24]),
        W[25] !== g || W[26] !== d || W[27] !== m || W[28] !== h
          ? ((f = { onMutate: d, mutationFn: m, onSuccess: h, onError: g }),
            (W[25] = g),
            (W[26] = d),
            (W[27] = m),
            (W[28] = h),
            (W[29] = f))
          : (f = W[29]))
      let { isPending: eq, mutate: eH } = (0, Y.n)(f)
      W[30] !== eL?.items || W[31] !== eL?.items.some || W[32] !== eE
        ? ((x =
            eL?.items.some((e) => {
              let t = eE[e.id]
              return null != t && t !== e.allowed_usage_percent
            }) ?? !1),
          (W[30] = eL?.items),
          (W[31] = eL?.items.some),
          (W[32] = eE),
          (W[33] = x))
        : (x = W[33])
      let ez = x
      ;((0, er.iv)("usage.chatpass-app-limits", ez),
        W[34] !== eL?.items || W[35] !== eL?.items.find || W[36] !== eg
          ? ((y = eL?.items.find((e) => e.id === eg)),
            (W[34] = eL?.items),
            (W[35] = eL?.items.find),
            (W[36] = eg),
            (W[37] = y))
          : (y = W[37]))
      let eB = y,
        eG = el?.user_id === ey && (el?.account_id === ep || (ei && el?.account_id === "")) && el?.credits != null,
        e$ =
          eG &&
          (el.credits?.has_credits === !0 || el.credits?.unlimited === !0) &&
          !el.spend_control?.reached &&
          !el.credits?.overage_limit_reached,
        eW = eB?.credits_enabled === !0 && e$
      W[38] !== eW || W[39] !== eh || W[40] !== eG || W[41] !== eO || W[42] !== eD || W[43] !== eq || W[44] !== eB
        ? (!eB ||
            0 !== eh ||
            eq ||
            eD ||
            eO ||
            (eW || !0 === eB.plan_available
              ? (w = !1)
              : !1 === eB.plan_available &&
                (!1 === eB.credits_enabled || (!0 === eB.credits_enabled && eG)) &&
                (w = !0)),
          (W[38] = eW),
          (W[39] = eh),
          (W[40] = eG),
          (W[41] = eO),
          (W[42] = eD),
          (W[43] = eq),
          (W[44] = eB),
          (W[45] = w))
        : (w = W[45])
      let eV =
        (0, l.useSyncExternalStore)(ew, ev, eN) ===
        eA((t = { accountId: ep ?? "", userId: ey ?? "", referral: { appId: eg, expiresAt: es } })) + eC(t) + ":shown"
      if (
        (W[46] !== ep ||
        W[47] !== w ||
        W[48] !== et ||
        W[49] !== es ||
        W[50] !== eB ||
        W[51] !== eg ||
        W[52] !== J ||
        W[53] !== ey
          ? ((A = () => {
              ep &&
                ey &&
                eB &&
                void 0 !== w &&
                (function (e) {
                  if (!e.referral.appId || Number(e.referral.expiresAt) <= Date.now()) return !1
                  try {
                    let t = eA(e),
                      s = eC(e),
                      n = sessionStorage.getItem(t),
                      i = n
                    ;(e.blocked && n !== s + ":shown" ? (i = s) : e.blocked || n !== s || (i = s + ":shown"),
                      n !== i && null != i && sessionStorage.setItem(t, i))
                    let a = t + i
                    return (eb !== a && ((eb = a), window.dispatchEvent(new Event(ej))), !e.blocked && n === s)
                  } catch {
                    return !1
                  }
                })({ accountId: ep, userId: ey, referral: { appId: eg, expiresAt: es }, blocked: w }) &&
                J.get(ee.Id).success(
                  et.formatMessage(
                    {
                      id: "siwcCredits.returnToSource",
                      defaultMessage: "You can close this tab and return to {appName}.",
                    },
                    { appName: eB.name },
                  ),
                  { duration: 10, hasCloseButton: !0, position: "top-right" },
                )
            }),
            (W[46] = ep),
            (W[47] = w),
            (W[48] = et),
            (W[49] = es),
            (W[50] = eB),
            (W[51] = eg),
            (W[52] = J),
            (W[53] = ey),
            (W[54] = A))
          : (A = W[54]),
        W[55] !== ep ||
        W[56] !== w ||
        W[57] !== et ||
        W[58] !== es ||
        W[59] !== eB ||
        W[60] !== eg ||
        W[61] !== J ||
        W[62] !== ey
          ? ((M = [ep, ey, eB, eg, es, w, J, et]),
            (W[55] = ep),
            (W[56] = w),
            (W[57] = et),
            (W[58] = es),
            (W[59] = eB),
            (W[60] = eg),
            (W[61] = J),
            (W[62] = ey),
            (W[63] = M))
          : (M = W[63]),
        (0, l.useEffect)(A, M),
        W[64] !== w ||
          W[65] !== eW ||
          W[66] !== eL ||
          W[67] !== eE ||
          W[68] !== ez ||
          W[69] !== eq ||
          W[70] !== ei ||
          W[71] !== eU ||
          W[72] !== eH ||
          W[73] !== eV ||
          W[74] !== eB ||
          W[75] !== eg)
      ) {
        U = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            s,
            i = eL?.items.toSorted((e, t) => Number(t.id === eB?.id) - Number(e.id === eB?.id))
          if ((eU && null == eL) || eL?.items.length === 0) {
            U = null
            break e
          }
          ;((P = N.X),
            W[84] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(b.A, {
                  id: "settings.usage.subscriptionSharing.title",
                  defaultMessage: "Connected App Limits",
                })),
                (t = (0, n.jsx)(b.A, {
                  id: "settings.usage.subscriptionSharing.description",
                  defaultMessage: "Set limits for each app\u2019s use of your ChatGPT plan and credits.",
                })),
                (W[84] = e),
                (W[85] = t))
              : ((e = W[84]), (t = W[85])),
            W[86] !== eL || W[87] !== eE || W[88] !== ez || W[89] !== eq || W[90] !== ei || W[91] !== eH
              ? ((s =
                  ei && null != eL
                    ? (0, n.jsx)(j.$, {
                        color: ez ? "primary" : "secondary",
                        size: "toolbar",
                        disabled: !ez || eq,
                        loading: eq,
                        onClick: () => {
                          ez &&
                            !eq &&
                            eH(Object.fromEntries(eL.items.map((e) => [e.id, eE[e.id] ?? e.allowed_usage_percent])))
                        },
                        children: (0, n.jsx)(b.A, { ...ec.save }),
                      })
                    : null),
                (W[86] = eL),
                (W[87] = eE),
                (W[88] = ez),
                (W[89] = eq),
                (W[90] = ei),
                (W[91] = eH),
                (W[92] = s))
              : (s = W[92]),
            W[93] !== s
              ? ((D = (0, n.jsx)(N.X.Header, {
                  className: "select-none",
                  size: "base",
                  title: e,
                  subtitle: t,
                  actions: s,
                })),
                (W[93] = s),
                (W[94] = D))
              : (D = W[94]),
            (E = N.X.Content),
            (O = "gap-4"),
            (S = I.t),
            (R = "select-none"),
            (L = i?.map((e) =>
              (0, n.jsx)(
                eP,
                {
                  app: e,
                  blocked: e.id === eg ? w : ed(e),
                  recovered: e.id === eg && eV,
                  canContinueWithCredits: eW,
                  isReferringApp: e.id === eB?.id,
                  quietLimitBadge: null != eB && e.id !== eB.id,
                  disabled: eq,
                  editable: ei,
                  limitPercent: eE[e.id] ?? e.allowed_usage_percent,
                  onLimitChange: (t) => {
                    eq ||
                      eR((s) => {
                        let n = { ...s }
                        return (t === e.allowed_usage_percent ? delete n[e.id] : (n[e.id] = t), n)
                      })
                  },
                },
                e.id,
              ),
            )))
        }
        ;((W[64] = w),
          (W[65] = eW),
          (W[66] = eL),
          (W[67] = eE),
          (W[68] = ez),
          (W[69] = eq),
          (W[70] = ei),
          (W[71] = eU),
          (W[72] = eH),
          (W[73] = eV),
          (W[74] = eB),
          (W[75] = eg),
          (W[76] = S),
          (W[77] = E),
          (W[78] = P),
          (W[79] = R),
          (W[80] = L),
          (W[81] = O),
          (W[82] = D),
          (W[83] = U))
      } else ((S = W[76]), (E = W[77]), (P = W[78]), (R = W[79]), (L = W[80]), (O = W[81]), (D = W[82]), (U = W[83]))
      return U !== Symbol.for("react.early_return_sentinel")
        ? U
        : (W[95] !== eO || W[96] !== eD || W[97] !== eF
            ? ((q = eO
                ? (0, n.jsx)(T.ic, {
                    label: (0, n.jsx)("span", {
                      role: "alert",
                      children: (0, n.jsx)(b.A, {
                        id: "settings.usage.subscriptionSharing.apps.loadError",
                        defaultMessage: "Couldn't load app limits",
                      }),
                    }),
                    control: (0, n.jsx)(j.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: eD,
                      onClick: () => void eF(),
                      children: (0, n.jsx)(b.A, {
                        id: "settings.usage.subscriptionSharing.apps.retry",
                        defaultMessage: "Retry",
                      }),
                    }),
                  })
                : null),
              (W[95] = eO),
              (W[96] = eD),
              (W[97] = eF),
              (W[98] = q))
            : (q = W[98]),
          W[99] !== eL || W[100] !== eO
            ? ((H =
                eO || null != eL
                  ? null
                  : (0, n.jsx)(ea.u, {
                      children: (0, n.jsx)(b.A, {
                        id: "settings.usage.subscriptionSharing.apps.loading",
                        defaultMessage: "Loading app limits\u2026",
                      }),
                    })),
              (W[99] = eL),
              (W[100] = eO),
              (W[101] = H))
            : (H = W[101]),
          W[102] !== S || W[103] !== R || W[104] !== L || W[105] !== q || W[106] !== H
            ? ((z = (0, n.jsxs)(S, { className: R, children: [L, q, H] })),
              (W[102] = S),
              (W[103] = R),
              (W[104] = L),
              (W[105] = q),
              (W[106] = H),
              (W[107] = z))
            : (z = W[107]),
          W[108] !== eL || W[109] !== ei || W[110] !== Q
            ? ((B = ei && Q && null != eL ? (0, n.jsx)(I.t, { children: (0, n.jsx)(ex, {}) }) : null),
              (W[108] = eL),
              (W[109] = ei),
              (W[110] = Q),
              (W[111] = B))
            : (B = W[111]),
          W[112] !== E || W[113] !== O || W[114] !== z || W[115] !== B
            ? ((G = (0, n.jsxs)(E, { className: O, children: [z, B] })),
              (W[112] = E),
              (W[113] = O),
              (W[114] = z),
              (W[115] = B),
              (W[116] = G))
            : (G = W[116]),
          W[117] !== P || W[118] !== D || W[119] !== G
            ? (($ = (0, n.jsxs)(P, { children: [D, G] })), (W[117] = P), (W[118] = D), (W[119] = G), (W[120] = $))
            : ($ = W[120]),
          $)
    }
    function eN() {
      return ""
    }
    function eT() {
      return ""
    }
    function eI() {
      return ""
    }
    function eP(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c,
        d,
        m,
        h = (0, i.c)(38),
        {
          app: g,
          isReferringApp: f,
          blocked: p,
          recovered: x,
          canContinueWithCredits: y,
          quietLimitBadge: _,
          disabled: v,
          editable: j,
          limitPercent: w,
          onLimitChange: A,
        } = e,
        C = (0, F.A)(),
        [M, S] = (0, l.useState)(10),
        k = w > 0,
        E = k ? w : M,
        N = !0 === p,
        I = x && !1 === p,
        P = "bg-secondary-soft dark:bg-primary-ghost-hover"
      ;(N
        ? (P = "bg-danger-soft-alpha dark:bg-danger-soft-alpha!")
        : I && (P = "bg-chart-green/15 dark:bg-chart-green/15!"),
        h[0] !== g || h[1] !== I || h[2] !== y
          ? ((t = ed(g)
              ? (0, n.jsx)("span", {
                  className: "block",
                  children:
                    I && y
                      ? (0, n.jsx)(b.A, {
                          id: "settings.usage.subscriptionSharing.apps.usingCredits.description",
                          defaultMessage:
                            "Used its {limit, number, percent} share of your plan, now using credit balance",
                          values: { limit: g.allowed_usage_percent / 100 },
                        })
                      : (0, n.jsx)(b.A, {
                          id: "settings.usage.subscriptionSharing.apps.limitReached.description",
                          defaultMessage: "Used its {limit, number, percent} share of your plan",
                          values: { limit: g.allowed_usage_percent / 100 },
                        }),
                })
              : null),
            (h[0] = g),
            (h[1] = I),
            (h[2] = y),
            (h[3] = t))
          : (t = h[3]),
        h[4] !== g.name || h[5] !== I
          ? ((s = I
              ? (0, n.jsx)("span", {
                  className: "sr-only",
                  role: "status",
                  children: (0, n.jsx)(b.A, {
                    id: "settings.usage.subscriptionSharing.apps.recovered",
                    defaultMessage: "Access restored for {app}.",
                    values: { app: g.name },
                  }),
                })
              : null),
            (h[4] = g.name),
            (h[5] = I),
            (h[6] = s))
          : (s = h[6]),
        h[7] !== t || h[8] !== s
          ? ((a = (0, n.jsxs)(n.Fragment, { children: [t, s] })), (h[7] = t), (h[8] = s), (h[9] = a))
          : (a = h[9]))
      let R = a,
        L = f ? P : void 0,
        O = f ? "recommendation" : "default"
      return (
        h[10] !== g
          ? ((r = (0, n.jsx)(ei.y, { app: { ...g, type: "oai_apps" } })), (h[10] = g), (h[11] = r))
          : (r = h[11]),
        h[12] !== I
          ? ((o = I ? (0, n.jsx)(es.A, { className: "icon-sm", "aria-hidden": "true" }) : null),
            (h[12] = I),
            (h[13] = o))
          : (o = h[13]),
        h[14] !== N || h[15] !== _
          ? ((u = N
              ? (0, n.jsx)(Q.E, {
                  variant: _ ? "outline" : "danger",
                  children: (0, n.jsx)(b.A, {
                    id: "settings.usage.subscriptionSharing.apps.limitReached",
                    defaultMessage: "Limit reached",
                  }),
                })
              : null),
            (h[14] = N),
            (h[15] = _),
            (h[16] = u))
          : (u = h[16]),
        h[17] !== g.name || h[18] !== o || h[19] !== u
          ? ((c = (0, n.jsxs)("span", { className: "flex flex-wrap items-center gap-2", children: [g.name, o, u] })),
            (h[17] = g.name),
            (h[18] = o),
            (h[19] = u),
            (h[20] = c))
          : (c = h[20]),
        h[21] !== g.name ||
        h[22] !== v ||
        h[23] !== j ||
        h[24] !== M ||
        h[25] !== C ||
        h[26] !== w ||
        h[27] !== A ||
        h[28] !== E ||
        h[29] !== k
          ? ((d = j
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(J.Ab, {
                      align: "end",
                      contentWidth: "menuNarrow",
                      disabled: !k || v,
                      triggerButton: (0, n.jsx)(el.vg, {
                        "aria-label": C.formatMessage(
                          {
                            id: "settings.usage.subscriptionSharing.apps.planLimitLabel",
                            defaultMessage: "Plan limit for {app}",
                          },
                          { app: g.name },
                        ),
                        children: (0, n.jsx)(K.Gr, { value: E / 100, style: "percent" }),
                      }),
                      children: (0, n.jsx)(J.ms.RadioGroup, {
                        value: E.toString(),
                        children: eM.map((e) =>
                          (0, n.jsx)(
                            J.ms.RadioItem,
                            {
                              value: e.toString(),
                              onSelect: () => A(e),
                              children: (0, n.jsx)(K.Gr, { value: e / 100, style: "percent" }),
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                    (0, n.jsx)(et.l, {
                      checked: k,
                      disabled: v,
                      "aria-label": C.formatMessage(
                        {
                          id: "settings.usage.subscriptionSharing.apps.usePlanLimitsLabel",
                          defaultMessage: "Allow {app} to use plan limits",
                        },
                        { app: g.name },
                      ),
                      onChange: (e) => {
                        ;(e || S(w), A(e ? M : 0))
                      },
                    }),
                  ],
                })
              : void 0),
            (h[21] = g.name),
            (h[22] = v),
            (h[23] = j),
            (h[24] = M),
            (h[25] = C),
            (h[26] = w),
            (h[27] = A),
            (h[28] = E),
            (h[29] = k),
            (h[30] = d))
          : (d = h[30]),
        h[31] !== R || h[32] !== d || h[33] !== L || h[34] !== O || h[35] !== r || h[36] !== c
          ? ((m = (0, n.jsx)(T.ic, {
              className: L,
              variant: O,
              icon: r,
              label: c,
              description: R,
              controlSizing: "content",
              control: d,
            })),
            (h[31] = R),
            (h[32] = d),
            (h[33] = L),
            (h[34] = O),
            (h[35] = r),
            (h[36] = c),
            (h[37] = m))
          : (m = h[37]),
        m
      )
    }
    function eR(e) {
      let t,
        s = (0, i.c)(4),
        { isPolling: a, showCreditPreference: l } = e,
        r = void 0 === a || a,
        o = void 0 !== l && l,
        u = (0, P.Zj)("185496087"),
        { accountId: c, authMethod: d, userId: m } = (0, v.As)()
      if (!u || "chatgpt" !== d || null == c || null == m) return null
      let h = `${c}:${m}`
      return (
        s[0] !== r || s[1] !== o || s[2] !== h
          ? ((t = (0, n.jsx)(eE, { isPolling: r, showCreditPreference: o }, h)),
            (s[0] = r),
            (s[1] = o),
            (s[2] = h),
            (s[3] = t))
          : (t = s[3]),
        t
      )
    }
    var eL = s("DBCl"),
      eO = s("RxZZ"),
      eD = s("RRNp"),
      eU = s("iRMi"),
      eF = s("OAko"),
      eq = s("evwP"),
      eH = s("BrP7"),
      ez = s("LXBZ"),
      eB = s("yGJW"),
      eG = s("bZug"),
      e$ = s("uris")
    function eW() {
      let e,
        t,
        s,
        a,
        l,
        r,
        o,
        u = (0, i.c)(27),
        c = (0, F.A)(),
        { userId: d, accountId: m } = (0, v.As)(),
        h = new Intl.DateTimeFormat().resolvedOptions().timeZone
      u[0] !== m || u[1] !== d
        ? ((e = ["rate-limit-reset-credits", "history", d, m]), (u[0] = m), (u[1] = d), (u[2] = e))
        : (e = u[2])
      let g = null != d && null != m
      u[3] !== e || u[4] !== g
        ? ((t = { queryKey: e, enabled: g, staleTime: 6e4, initialPageParam: "", queryFn: eY, getNextPageParam: eX }),
          (u[3] = e),
          (u[4] = g),
          (u[5] = t))
        : (t = u[5])
      let {
          data: f,
          isPending: p,
          isError: x,
          refetch: y,
          hasNextPage: _,
          fetchNextPage: w,
          isFetchingNextPage: A,
          isFetchNextPageError: C,
        } = (0, e$.q)(t),
        M = f?.pages.flatMap(eV)
      u[6] !== p
        ? ((s = p
            ? (0, n.jsx)(ea.u, {
                children: (0, n.jsx)(b.A, {
                  id: "settings.usage.bankedResetHistory.loading",
                  defaultMessage: "Loading banked reset history\u2026",
                }),
              })
            : null),
          (u[6] = p),
          (u[7] = s))
        : (s = u[7])
      let S = M?.map((e) =>
        (0, n.jsx)(
          T.ic,
          {
            label:
              "granted" === e.kind
                ? (0, n.jsx)(b.A, {
                    id: "settings.usage.bankedResetHistory.received",
                    defaultMessage: "Reset received",
                  })
                : (0, n.jsx)(b.A, { id: "settings.usage.bankedResetHistory.redeemed", defaultMessage: "Reset used" }),
            control: (0, n.jsxs)("time", {
              className: "flex flex-col gap-0.5 text-end text-sm",
              dateTime: e.occurred_at,
              children: [
                (0, n.jsx)("span", {
                  children: c.formatDate(e.occurred_at, { month: "short", day: "numeric", timeZone: h }),
                }),
                (0, n.jsx)("span", {
                  className: "text-xs text-secondary",
                  children: c.formatTime(e.occurred_at, {
                    hour: "numeric",
                    minute: "2-digit",
                    timeZone: h,
                    timeZoneName: "short",
                  }),
                }),
              ],
            }),
          },
          e.id,
        ),
      )
      return (
        u[8] !== M?.length
          ? ((a =
              M?.length === 0
                ? (0, n.jsx)(eq.W, {
                    align: "start",
                    layout: "settings-row",
                    children: (0, n.jsx)(b.A, {
                      id: "settings.usage.bankedResetHistory.empty",
                      defaultMessage: "No banked reset activity in the past 30 days",
                    }),
                  })
                : null),
            (u[8] = M?.length),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== w || u[11] !== x || u[12] !== C || u[13] !== A || u[14] !== y
          ? ((l = x
              ? (0, n.jsx)(T.ic, {
                  label: (0, n.jsx)(b.A, {
                    id: "settings.usage.bankedResetHistory.error",
                    defaultMessage: "Couldn\u2019t load banked reset history",
                  }),
                  control: (0, n.jsx)(j.$, {
                    color: "secondary",
                    loading: A,
                    onClick: () => void (C ? w() : y()),
                    size: "toolbar",
                    children: (0, n.jsx)(b.A, { id: "settings.usage.resets.retry", defaultMessage: "Retry" }),
                  }),
                })
              : null),
            (u[10] = w),
            (u[11] = x),
            (u[12] = C),
            (u[13] = A),
            (u[14] = y),
            (u[15] = l))
          : (l = u[15]),
        u[16] !== w || u[17] !== _ || u[18] !== x || u[19] !== A
          ? ((r =
              !x && _
                ? (0, n.jsx)(T.ic, {
                    label: null,
                    control: (0, n.jsx)(j.$, {
                      color: "secondary",
                      loading: A,
                      onClick: () => void w(),
                      size: "toolbar",
                      children: (0, n.jsx)(b.A, {
                        id: "settings.usage.bankedResetHistory.more",
                        defaultMessage: "Show more",
                      }),
                    }),
                  })
                : null),
            (u[16] = w),
            (u[17] = _),
            (u[18] = x),
            (u[19] = A),
            (u[20] = r))
          : (r = u[20]),
        u[21] !== s || u[22] !== S || u[23] !== a || u[24] !== l || u[25] !== r
          ? ((o = (0, n.jsxs)(n.Fragment, { children: [s, S, a, l, r] })),
            (u[21] = s),
            (u[22] = S),
            (u[23] = a),
            (u[24] = l),
            (u[25] = r),
            (u[26] = o))
          : (o = u[26]),
        o
      )
    }
    function eV(e) {
      return e.events
    }
    function eX(e) {
      return e.next_cursor ?? void 0
    }
    function eY(e) {
      let { pageParam: t, signal: s } = e
      return eu.CodexRequest.safeGet("/wham/rate-limit-reset-credits/history", {
        parameters: { query: { cursor: t || void 0 } },
        signal: s,
      })
    }
    function eK(e) {
      let t,
        s,
        a = (0, i.c)(3),
        { headingRef: l } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(b.A, { ...eD.oU.title })), (a[0] = t))
          : (t = a[0]),
        a[1] !== l
          ? ((s = (0, n.jsx)("span", { ref: l, tabIndex: -1, children: t })), (a[1] = l), (a[2] = s))
          : (s = a[2]),
        s
      )
    }
    function eZ(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c,
        d,
        m,
        h = (0, i.c)(31),
        { activeCreditId: g, credit: f, isConfirming: p, isResetting: x, onUseReset: y } = e,
        _ = (0, F.A)(),
        v = (0, l.useId)(),
        w = (0, l.useId)(),
        A = (0, l.useId)(),
        C = f?.id,
        M = f?.expires_at
      h[0] !== M || h[1] !== _
        ? ((t =
            null == M
              ? null
              : _.formatDate(M, {
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  month: "short",
                  timeZoneName: "short",
                })),
          (h[0] = M),
          (h[1] = _),
          (h[2] = t))
        : (t = h[2])
      let S = t
      ;(h[3] !== f?.title
        ? ((s =
            f?.title?.trim() ||
            (0, n.jsx)(b.A, { id: "settings.usage.resets.fallbackTitle", defaultMessage: "Usage reset" })),
          (h[3] = f?.title),
          (h[4] = s))
        : (s = h[4]),
        h[5] !== w || h[6] !== s
          ? ((a = (0, n.jsx)("span", { id: w, children: s })), (h[5] = w), (h[6] = s), (h[7] = a))
          : (a = h[7]),
        h[8] !== A || h[9] !== S
          ? ((r =
              null == S
                ? null
                : (0, n.jsx)("span", {
                    id: A,
                    children: (0, n.jsx)(b.A, {
                      id: "settings.usage.resets.expiresWithTimeZone",
                      defaultMessage: "Expires {date}",
                      values: { date: S },
                    }),
                  })),
            (h[8] = A),
            (h[9] = S),
            (h[10] = r))
          : (r = h[10]))
      let k = null == S ? void 0 : A,
        E = `${v} ${w}`,
        N = p ? "primary" : "secondary",
        I = g === (C ?? "automatic")
      return (
        h[11] !== C || h[12] !== y
          ? ((o = () => {
              y(C)
            }),
            (h[11] = C),
            (h[12] = y),
            (h[13] = o))
          : (o = h[13]),
        h[14] !== p
          ? ((u = p
              ? (0, n.jsx)(b.A, { id: "settings.usage.resets.confirmReset", defaultMessage: "Confirm" })
              : (0, n.jsx)(b.A, { id: "settings.usage.resets.useReset", defaultMessage: "Use reset" })),
            (h[14] = p),
            (h[15] = u))
          : (u = h[15]),
        h[16] !== v || h[17] !== u
          ? ((c = (0, n.jsx)("span", { id: v, children: u })), (h[16] = v), (h[17] = u), (h[18] = c))
          : (c = h[18]),
        h[19] !== x || h[20] !== c || h[21] !== k || h[22] !== E || h[23] !== N || h[24] !== I || h[25] !== o
          ? ((d = (0, n.jsx)(j.$, {
              "aria-describedby": k,
              "aria-labelledby": E,
              color: N,
              disabled: x,
              loading: I,
              onClick: o,
              size: "toolbar",
              children: c,
            })),
            (h[19] = x),
            (h[20] = c),
            (h[21] = k),
            (h[22] = E),
            (h[23] = N),
            (h[24] = I),
            (h[25] = o),
            (h[26] = d))
          : (d = h[26]),
        h[27] !== d || h[28] !== a || h[29] !== r
          ? ((m = (0, n.jsx)(T.ic, { label: a, description: r, control: d })),
            (h[27] = d),
            (h[28] = a),
            (h[29] = r),
            (h[30] = m))
          : (m = h[30]),
        m
      )
    }
    function eQ(e) {
      let t,
        s,
        a,
        r,
        o = (0, i.c)(22),
        { activeCreditId: u, credits: c, isResetFillActive: d, isResetting: m, onUseReset: h, retryCreditId: g } = e,
        [f, p] = (0, l.useState)(null)
      o[0] !== f || o[1] !== h
        ? ((t = async (e) => {
            let t = e ?? "automatic"
            f !== t ? p(t) : (p(null), await h(e))
          }),
          (o[0] = f),
          (o[1] = h),
          (o[2] = t))
        : (t = o[2])
      let x = t
      if (
        (o[3] !== c ? ((s = 0 === c.length ? [null] : c), (o[3] = c), (o[4] = s)) : (s = o[4]),
        o[5] !== u || o[6] !== f || o[7] !== x || o[8] !== d || o[9] !== m || o[10] !== g || o[11] !== s)
      ) {
        let e
        ;(o[13] !== u || o[14] !== f || o[15] !== x || o[16] !== d || o[17] !== m || o[18] !== g
          ? ((e = (e) => {
              let t = e?.id ?? "automatic"
              return (0, n.jsx)(
                eZ,
                {
                  activeCreditId: u,
                  credit: e,
                  isConfirming: f === t,
                  isResetting: d || m || (null != g && g !== t),
                  onUseReset: x,
                },
                t,
              )
            }),
            (o[13] = u),
            (o[14] = f),
            (o[15] = x),
            (o[16] = d),
            (o[17] = m),
            (o[18] = g),
            (o[19] = e))
          : (e = o[19]),
          (a = s.map(e)),
          (o[5] = u),
          (o[6] = f),
          (o[7] = x),
          (o[8] = d),
          (o[9] = m),
          (o[10] = g),
          (o[11] = s),
          (o[12] = a))
      } else a = o[12]
      return (o[20] !== a ? ((r = (0, n.jsx)(n.Fragment, { children: a })), (o[20] = a), (o[21] = r)) : (r = o[21]), r)
    }
    function eJ(e) {
      let t,
        s,
        a,
        r,
        o,
        u = (0, i.c)(36),
        { isResetFillActive: c, onResetAttemptCancel: d, onResetAttemptStart: m, onResetComplete: h } = e,
        g = (0, _.gh)(en.u),
        f = (0, F.A)(),
        p = (0, l.useRef)(null),
        x = (0, l.useId)(),
        [y, v] = (0, l.useState)(null),
        [w] = (0, l.useState)(ez.A),
        [A, C] = (0, l.useState)(null),
        { data: M, error: S, isPending: k, refetch: E } = (0, eF.Gh)(),
        P = (0, eF.U1)()
      u[0] !== M?.credits ? ((t = M?.credits?.filter(e1)), (u[0] = M?.credits), (u[1] = t)) : (t = u[1])
      let R = t,
        L = M?.available_count ?? 0,
        O = M?.history_enabled ?? !1
      O && null == y && v(0 === L ? "history" : "available")
      let D = A?.credits ?? R,
        U = A?.availableCount ?? L,
        q = P.isPending ? (P.variables?.creditId ?? "automatic") : null
      u[2] !== P.mutateAsync ||
      u[3] !== f ||
      u[4] !== d ||
      u[5] !== m ||
      u[6] !== h ||
      u[7] !== A ||
      u[8] !== w ||
      u[9] !== g ||
      u[10] !== U ||
      u[11] !== D
        ? ((s = async (e) => {
            let t = e ?? "automatic"
            if ((null != A && A.creditId !== t) || null == D) return
            null == A && m?.()
            let s = await w.redeem({ availableCount: U, consume: P.mutateAsync, creditId: e })
            switch (s.status) {
              case "in_flight":
                return
              case "transport_error":
                ;(C({ availableCount: U, creditId: s.creditId ?? "automatic", credits: D }),
                  g
                    .get(ee.Id)
                    .danger(
                      f.formatMessage({
                        id: "codex.rateLimitResetModal.error",
                        defaultMessage: "Couldn\u2019t reset usage. Please try again",
                      }),
                      { errorAnalytics: { toastId: "codex.rateLimitResetModal.error" } },
                    ))
                return
              case "rejected":
                ;(C(null),
                  d?.(),
                  g
                    .get(ee.Id)
                    .danger((0, ez.M)(s.code, f), {
                      errorAnalytics: { toastId: "resetSettingsGroupContent.handleUseReset" },
                    }))
                return
              case "reset": {
                C(null)
                let e = Math.max(s.availableCountBefore - 1, 0)
                ;((0, eB.yy)(g, eU.CodexRateLimitResetCreditRedeemed, {
                  availableCountBefore: s.availableCountBefore,
                  componentType: "settings",
                  redemptionMethod: null == s.creditId ? "automatic" : "selected_credit",
                  remainingCount: e,
                }),
                  g
                    .get(ee.Id)
                    .success(
                      f.formatMessage({ id: "settings.usage.resets.success", defaultMessage: "Usage limits reset" }),
                    ),
                  h?.(),
                  p.current?.focus())
              }
            }
          }),
          (u[2] = P.mutateAsync),
          (u[3] = f),
          (u[4] = d),
          (u[5] = m),
          (u[6] = h),
          (u[7] = A),
          (u[8] = w),
          (u[9] = g),
          (u[10] = U),
          (u[11] = D),
          (u[12] = s))
        : (s = u[12])
      let H = s
      if (null == A && k && null == M) {
        let e
        ;(u[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(ea.u, {
              children: (0, n.jsx)(b.A, {
                id: "settings.usage.resets.loading",
                defaultMessage: "Loading usage limit resets\u2026",
              }),
            })),
            (u[13] = e))
          : (e = u[13]),
          (a = e))
      } else if (null == A && null != S && null == M) {
        let e, t, s, i
        ;(u[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.resets.loadError",
              defaultMessage: "Couldn\u2019t load usage limit resets",
            })),
            (u[14] = e))
          : (e = u[14]),
          u[15] !== E
            ? ((t = () => {
                E()
              }),
              (u[15] = E),
              (u[16] = t))
            : (t = u[16]),
          u[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(b.A, { id: "settings.usage.resets.retry", defaultMessage: "Retry" })), (u[17] = s))
            : (s = u[17]),
          u[18] !== t
            ? ((i = (0, n.jsx)(T.ic, {
                label: e,
                control: (0, n.jsx)(j.$, { color: "secondary", onClick: t, size: "toolbar", children: s }),
              })),
              (u[18] = t),
              (u[19] = i))
            : (i = u[19]),
          (a = i))
      } else if (null == D || (0 === D.length && 0 === U)) {
        let e
        ;(u[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(eq.W, {
              align: "start",
              layout: "settings-row",
              children: (0, n.jsx)(b.A, { id: "settings.usage.resets.empty", defaultMessage: "No resets available" }),
            })),
            (u[20] = e))
          : (e = u[20]),
          (a = e))
      } else {
        let e,
          t = A?.creditId ?? null
        ;(u[21] !== q || u[22] !== P.isPending || u[23] !== H || u[24] !== c || u[25] !== t || u[26] !== D
          ? ((e = (0, n.jsx)(eQ, {
              activeCreditId: q,
              credits: D,
              isResetFillActive: c,
              isResetting: P.isPending,
              onUseReset: H,
              retryCreditId: t,
            })),
            (u[21] = q),
            (u[22] = P.isPending),
            (u[23] = H),
            (u[24] = c),
            (u[25] = t),
            (u[26] = D),
            (u[27] = e))
          : (e = u[27]),
          (a = e))
      }
      return (
        u[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(eg.ek, {
              entry: eD.oU,
              children: (0, n.jsx)(N.X.Header, {
                title: (0, n.jsx)(eK, { headingRef: p }),
                subtitle: (0, n.jsx)(b.A, {
                  id: "settings.usage.resets.description",
                  defaultMessage: "Use a reset to restore your 5-hour limit, weekly limit, or both",
                }),
              }),
            })),
            (u[28] = r))
          : (r = u[28]),
        u[29] !== a || u[30] !== O || u[31] !== f || u[32] !== x || u[33] !== y || u[34] !== U
          ? ((o = (0, n.jsxs)(N.X, {
              children: [
                r,
                (0, n.jsx)(N.X.Content, {
                  children: (0, n.jsx)(I.t, {
                    children: O
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(T.ic, {
                              label: (0, n.jsx)(eH.t, {
                                ariaLabel: f.formatMessage({
                                  id: "settings.usage.resets.tabs.label",
                                  defaultMessage: "Usage limit resets",
                                }),
                                selectedKey: y ?? "available",
                                onSelect: v,
                                variant: "toolbar",
                                tabs: [
                                  {
                                    key: "available",
                                    panelId: `${x}-available`,
                                    name: (0, n.jsx)("span", {
                                      className: "inline-flex items-center gap-1.5",
                                      children: (0, n.jsx)(b.A, {
                                        id: "settings.usage.resets.tabs.available.label",
                                        defaultMessage: "Available <count>{availableCount}</count>",
                                        values: { availableCount: f.formatNumber(U), count: e0 },
                                      }),
                                    }),
                                  },
                                  {
                                    key: "history",
                                    panelId: `${x}-history`,
                                    name: (0, n.jsx)(b.A, {
                                      id: "settings.usage.resets.tabs.history",
                                      defaultMessage: "History",
                                    }),
                                  },
                                ],
                              }),
                              control:
                                "history" === y
                                  ? (0, n.jsx)("span", {
                                      className: "text-xs text-secondary",
                                      children: (0, n.jsx)(b.A, {
                                        id: "settings.usage.bankedResetHistory.period",
                                        defaultMessage: "Past 30 days",
                                      }),
                                    })
                                  : null,
                            }),
                            (0, n.jsx)("div", {
                              id: `${x}-${y}`,
                              className: eG.r,
                              role: "tabpanel",
                              "aria-labelledby": `${x}-${y}-tab`,
                              tabIndex: 0,
                              children: "history" === y ? (0, n.jsx)(eW, {}) : a,
                            }),
                          ],
                        })
                      : a,
                  }),
                }),
              ],
            })),
            (u[29] = a),
            (u[30] = O),
            (u[31] = f),
            (u[32] = x),
            (u[33] = y),
            (u[34] = U),
            (u[35] = o))
          : (o = u[35]),
        o
      )
    }
    function e0(e) {
      return (0, n.jsx)("span", { className: "font-normal text-secondary", children: e })
    }
    function e1(e) {
      return "available" === e.status
    }
    function e2(e) {
      let t,
        s,
        a = (0, i.c)(6),
        { isResetFillActive: l, onResetAttemptCancel: r, onResetAttemptStart: o, onResetComplete: u } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(e3, {}) })), (a[0] = t))
          : (t = a[0]),
        a[1] !== l || a[2] !== r || a[3] !== o || a[4] !== u
          ? ((s = (0, n.jsxs)(n.Fragment, {
              children: [
                t,
                (0, n.jsx)(eJ, {
                  isResetFillActive: l,
                  onResetAttemptCancel: r,
                  onResetAttemptStart: o,
                  onResetComplete: u,
                }),
              ],
            })),
            (a[1] = l),
            (a[2] = r),
            (a[3] = o),
            (a[4] = u),
            (a[5] = s))
          : (s = a[5]),
        s
      )
    }
    function e3() {
      let e,
        t,
        s = (0, i.c)(5),
        a = (0, _.gh)(en.u),
        l = (0, F.A)(),
        r = (0, eO.iK)(eL.U6S.agentUsageResetEnabled)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.resets.agentEnabled.description",
              defaultMessage:
                "Allow your assistant to use a reset only when you explicitly request it during a conversation and your current limit has 10% or less remaining. Resets are never used automatically.",
            })),
            (s[0] = e))
          : (e = s[0]),
        s[1] !== r || s[2] !== l || s[3] !== a
          ? ((t = (0, n.jsx)(N.X, {
              children: (0, n.jsx)(N.X.Content, {
                children: (0, n.jsx)(I.t, {
                  children: (0, n.jsx)(eg.GC, {
                    entry: eD.dR,
                    description: e,
                    control: (e) =>
                      (0, n.jsx)(et.l, {
                        ...e,
                        checked: r,
                        onChange: (e) => {
                          ;(0, eO.gc)(a, eL.U6S.agentUsageResetEnabled, e).catch(() => {
                            a.get(ee.Id).danger(
                              l.formatMessage({
                                id: "settings.usage.resets.agentEnabled.error",
                                defaultMessage: "Couldn\u2019t update usage reset setting",
                              }),
                              { errorAnalytics: { toastId: "settings.usage.resets.agentEnabled.error" } },
                            )
                          })
                        },
                      }),
                  }),
                }),
              }),
            })),
            (s[1] = r),
            (s[2] = l),
            (s[3] = a),
            (s[4] = t))
          : (t = s[4]),
        t
      )
    }
    var e5 = s("zLIa"),
      e4 = s("Myba"),
      e6 = s("gZbc"),
      e8 = s("LH8k"),
      e9 = s("F9Qp"),
      e7 = s("iH1J"),
      te = s("hQzs"),
      tt = s("eShZ")
    function ts(e) {
      let t,
        s,
        a,
        l,
        r,
        o,
        u,
        c,
        d,
        m,
        h,
        g,
        f = (0, i.c)(38),
        {
          isUsdWorkspace: p,
          isPolling: x,
          limitAmount: y,
          remainingPercent: _,
          resetLabel: v,
          usedAmount: j,
          usageLabel: w,
        } = e,
        A = void 0 === x || x,
        C = (0, F.A)(),
        M = p ? 0 : (y ?? 0),
        S = !p && null != j && null != y && y > 0
      f[0] !== A || f[1] !== M || f[2] !== S
        ? ((t = { isPolling: A, credits: M, enabled: S }), (f[0] = A), (f[1] = M), (f[2] = S), (f[3] = t))
        : (t = f[3])
      let { data: k } = (0, e4.Q4)(t),
        E = k?.estimated_usage_usd_micros == null ? null : k.estimated_usage_usd_micros / 1e6,
        N = null == j || null == y || y <= 0 || null == E ? null : (j / y) * E
      f[4] !== C
        ? ((s = (e) =>
            C.formatNumber(e, {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })),
          (f[4] = C),
          (f[5] = s))
        : (s = f[5])
      let T = s
      ;(f[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)("span", {
            className: "text-sm font-medium text-default",
            children: (0, n.jsx)(b.A, {
              id: "settings.usage.limits.monthly.billingLabel",
              defaultMessage: "Monthly limit",
            }),
          })),
          (f[6] = a))
        : (a = f[6]),
        f[7] !== C || f[8] !== _
          ? ((l = C.formatNumber(_, { maximumFractionDigits: 0 })), (f[7] = C), (f[8] = _), (f[9] = l))
          : (l = f[9]),
        f[10] !== l
          ? ((r = (0, n.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                a,
                (0, n.jsx)("span", {
                  className: "text-xs text-secondary tabular-nums",
                  children: (0, n.jsx)(b.A, {
                    id: "settings.usage.limits.progress.remaining",
                    defaultMessage: "{remaining}% left",
                    values: { remaining: l },
                  }),
                }),
              ],
            })),
            (f[10] = l),
            (f[11] = r))
          : (r = f[11]))
      let I = 100 - _
      return (
        f[12] !== C || f[13] !== p
          ? ((o = p
              ? C.formatMessage({
                  id: "settings.usage.limits.monthly.usdProgressAriaLabel",
                  defaultMessage: "Monthly spend used",
                })
              : C.formatMessage({
                  id: "settings.usage.limits.monthly.billingProgressAriaLabel",
                  defaultMessage: "Monthly credits used",
                })),
            (f[12] = C),
            (f[13] = p),
            (f[14] = o))
          : (o = f[14]),
        f[15] !== o || f[16] !== I
          ? ((u = (0, n.jsx)("progress", {
              max: 100,
              value: I,
              "aria-label": o,
              className:
                "h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-neutral-solid [&::-ms-fill]:bg-neutral-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-neutral-solid",
            })),
            (f[15] = o),
            (f[16] = I),
            (f[17] = u))
          : (u = f[17]),
        f[18] !== v ? ((c = (0, n.jsx)("span", { children: v })), (f[18] = v), (f[19] = c)) : (c = f[19]),
        f[20] !== E ||
        f[21] !== N ||
        f[22] !== T ||
        f[23] !== C ||
        f[24] !== p ||
        f[25] !== y ||
        f[26] !== w ||
        f[27] !== j
          ? ((d =
              p || null == w || null == j || null == y || null == N || null == E
                ? w
                : (0, n.jsx)(b.A, {
                    id: "settings.usage.limits.monthly.creditsAndEstimatedSpendUsed",
                    defaultMessage: "{used} of {limit} credits used \xb7 Est. {usedCost} of {limitCost} used",
                    values: {
                      used: C.formatNumber(j, { maximumFractionDigits: 0 }),
                      limit: C.formatNumber(y, { maximumFractionDigits: 0 }),
                      usedCost: T(N),
                      limitCost: T(E),
                    },
                  })),
            (f[20] = E),
            (f[21] = N),
            (f[22] = T),
            (f[23] = C),
            (f[24] = p),
            (f[25] = y),
            (f[26] = w),
            (f[27] = j),
            (f[28] = d))
          : (d = f[28]),
        f[29] !== d
          ? ((m = (0, n.jsx)("span", { className: "tabular-nums", children: d })), (f[29] = d), (f[30] = m))
          : (m = f[30]),
        f[31] !== c || f[32] !== m
          ? ((h = (0, n.jsxs)("div", {
              className: "flex items-center justify-between gap-3 text-xs text-tertiary",
              children: [c, m],
            })),
            (f[31] = c),
            (f[32] = m),
            (f[33] = h))
          : (h = f[33]),
        f[34] !== u || f[35] !== h || f[36] !== r
          ? ((g = (0, n.jsxs)("div", { className: "flex flex-col gap-2 p-4 select-none", children: [r, u, h] })),
            (f[34] = u),
            (f[35] = h),
            (f[36] = r),
            (f[37] = g))
          : (g = f[37]),
        g
      )
    }
    var tn = s("BhIm"),
      ti = s("KIKs")
    function ta(e) {
      let t,
        s,
        a,
        l = (0, i.c)(22),
        { resetAt: r } = e,
        o = (0, F.A)(),
        u = (0, ti.wv)(),
        c = Math.max(0, Math.ceil((r.getTime() - u.getTime()) / 6e4)),
        d = Math.floor(c / 1440),
        m = Math.floor((c % 1440) / 60)
      if (
        c > 0 &&
        "function" == typeof Intl.DurationFormat &&
        Intl.DurationFormat.supportedLocalesOf(o.locale).length > 0 &&
        (o.locale === o.defaultLocale || o.messages["settings.usage.personalLimits.resetsInDuration"]?.length)
      ) {
        let e, s
        l[0] !== d || l[1] !== m || l[2] !== o.locale || l[3] !== c
          ? ((e = new Intl.DurationFormat(o.locale, {
              style: "en" === new Intl.Locale(o.locale).language ? "narrow" : "short",
              hoursDisplay: d > 0 ? "always" : "auto",
              minutesDisplay: 0 === d ? "always" : "auto",
            }).format(d > 0 ? { days: d, hours: m } : { hours: m, minutes: c % 60 })),
            (l[0] = d),
            (l[1] = m),
            (l[2] = o.locale),
            (l[3] = c),
            (l[4] = e))
          : (e = l[4])
        let i = e
        ;(l[5] !== i
          ? ((s = (0, n.jsx)(b.A, {
              id: "settings.usage.personalLimits.resetsInDuration",
              defaultMessage: "Resets in {duration}",
              values: { duration: i },
            })),
            (l[5] = i),
            (l[6] = s))
          : (s = l[6]),
          (t = s))
      } else if (d > 0) {
        let e
        ;(l[7] !== d || l[8] !== m
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.personalLimits.resetsInDaysHours",
              defaultMessage: "Resets in {days}d {hours}h",
              values: { days: d, hours: m },
            })),
            (l[7] = d),
            (l[8] = m),
            (l[9] = e))
          : (e = l[9]),
          (t = e))
      } else if (m > 0) {
        let e,
          s = c % 60
        ;(l[10] !== m || l[11] !== s
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.personalLimits.resetsInHoursMinutes",
              defaultMessage: "Resets in {hours}h {minutes}m",
              values: { hours: m, minutes: s },
            })),
            (l[10] = m),
            (l[11] = s),
            (l[12] = e))
          : (e = l[12]),
          (t = e))
      } else if (c > 0) {
        let e
        ;(l[13] !== c
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.personalLimits.resetsInMinutes",
              defaultMessage: "Resets in {minutes}m",
              values: { minutes: c },
            })),
            (l[13] = c),
            (l[14] = e))
          : (e = l[14]),
          (t = e))
      } else {
        let e
        ;(l[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(b.A, { id: "settings.usage.personalLimits.resetsNow", defaultMessage: "Resets now" })),
            (l[15] = e))
          : (e = l[15]),
          (t = e))
      }
      return (
        l[16] !== o || l[17] !== r
          ? ((s = o.formatDate(r, { dateStyle: "full", timeStyle: "long" })), (l[16] = o), (l[17] = r), (l[18] = s))
          : (s = l[18]),
        l[19] !== t || l[20] !== s
          ? ((a = (0, n.jsx)("span", { title: s, children: t })), (l[19] = t), (l[20] = s), (l[21] = a))
          : (a = l[21]),
        a
      )
    }
    var tl = s("mBJV"),
      tr = s("slpy"),
      to = s("GvFV"),
      tu = s("Cm1Y"),
      tc = s("YzhQ"),
      td = s("JQNV"),
      tm = (e) =>
        (0, n.jsx)("svg", {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M2.66681 1.6416C2.95661 1.64178 3.19123 1.87715 3.19123 2.16699V4.02734C4.3333 2.67207 6.04732 1.80861 7.96466 1.80859C11.4006 1.80869 14.1922 4.57839 14.1922 8.00098C14.1918 11.4232 11.4003 14.1923 7.96466 14.1924C4.86286 14.1924 2.28811 11.9362 1.81525 8.97949C1.7695 8.69318 1.96448 8.42368 2.2508 8.37793C2.53702 8.33234 2.80662 8.52725 2.85236 8.81348C3.24421 11.2641 5.38203 13.1425 7.96466 13.1426C10.8266 13.1425 13.141 10.8371 13.1414 8.00098C13.1414 5.16445 10.8269 2.85947 7.96466 2.85938C6.31988 2.85939 4.85564 3.62099 3.90705 4.80859H5.99982C6.28977 4.80859 6.52521 5.04403 6.52521 5.33398C6.52503 5.62378 6.28966 5.8584 5.99982 5.8584H2.99982C2.5258 5.85836 2.14142 5.47402 2.14142 5V2.16699C2.14142 1.87706 2.37689 1.64164 2.66681 1.6416Z",
            fill: "currentColor",
          }),
        })
    function th(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        m,
        h,
        g = (0, i.c)(20),
        { rateLimitStatus: f } = e,
        p = (0, _.gh)(en.u),
        x = (0, F.A)(),
        y = (0, r.zy)(),
        v = (0, M.b)(),
        { data: A } = (0, eF.YL)(),
        { data: C, isError: S } = (0, eF.Gh)(),
        k = (0, tu.ai)(A?.structure === "personal" ? "personal" : A?.id, "use_embedded_credit_checkout", !0)
      if (
        S ||
        C?.immediate_reset_purchase_eligible !== !0 ||
        A?.structure !== "personal" ||
        A.id !== f?.account_id ||
        !(0, tc.Ss)(f).some(tg)
      )
        return null
      g[0] !== y || g[1] !== v || g[2] !== f || g[3] !== p || g[4] !== k
        ? ((t = (e) => {
            ;((0, eB.yy)(p, tl.EBm, { surface: "chatgpt_usage_settings" }),
              v((0, td.Rw)(), e) ||
                k({
                  getUrl: td.Rw,
                  state: {
                    rateLimitResetCheckout: {
                      accountId: f.account_id,
                      conversationId: null,
                      returnTo: `${y.pathname}${y.search}${y.hash}`,
                      turnId: null,
                    },
                  },
                }) ||
                (0, q.PQ)({
                  event: e,
                  href: (0, td.Rw)(),
                  initiator: "open_in_browser_bridge",
                  useExternalBrowser: !0,
                }))
          }),
          (g[0] = y),
          (g[1] = v),
          (g[2] = f),
          (g[3] = p),
          (g[4] = k),
          (g[5] = t))
        : (t = g[5])
      let E = t
      return (
        g[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(tm, { "aria-hidden": !0, className: "icon-sm -scale-x-100 transform text-default" })),
            (g[6] = s))
          : (s = g[6]),
        g[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("span", {
              className: "truncate",
              children: (0, n.jsx)(b.A, {
                id: "settings.usage.limits.buyReset.label",
                defaultMessage: "Reset your usage limits now",
              }),
            })),
            (g[7] = a))
          : (a = g[7]),
        g[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(b.A, {
              id: "settings.usage.limits.buyReset.tooltip",
              defaultMessage: "This is not a banked reset. Buying an instant reset will reset your limits immediately.",
            })),
            (g[8] = l))
          : (l = g[8]),
        g[9] !== x
          ? ((o = x.formatMessage({
              id: "settings.usage.limits.buyReset.tooltipLabel",
              defaultMessage: "How buying a reset works",
            })),
            (g[9] = x),
            (g[10] = o))
          : (o = g[10]),
        g[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(w.I, { asset: to.q, "aria-hidden": !0 })), (g[11] = u))
          : (u = g[11]),
        g[12] !== o
          ? ((c = (0, n.jsxs)("span", {
              className: "flex min-w-0 items-center gap-1 select-none",
              children: [
                a,
                (0, n.jsx)(tr.m, {
                  side: "bottom",
                  content: l,
                  children: (0, n.jsx)(j.$, { "aria-label": o, color: "ghostTertiary", size: "inline", children: u }),
                }),
              ],
            })),
            (g[12] = o),
            (g[13] = c))
          : (c = g[13]),
        g[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(b.A, {
              id: "settings.usage.limits.buyReset.button",
              defaultMessage: "Buy an instant reset",
            })),
            (g[14] = d))
          : (d = g[14]),
        g[15] !== E
          ? ((m = (0, n.jsx)(j.$, { color: "ghostAccent", onClick: E, size: "composerSm", children: d })),
            (g[15] = E),
            (g[16] = m))
          : (m = g[16]),
        g[17] !== c || g[18] !== m
          ? ((h = (0, n.jsx)("div", {
              className: "-mt-5 rounded-b-2xl bg-secondary-soft-alpha pt-4",
              children: (0, n.jsx)(T.ic, { icon: s, label: c, control: m, size: "compact" }),
            })),
            (g[17] = c),
            (g[18] = m),
            (g[19] = h))
          : (h = g[19]),
        h
      )
    }
    function tg(e) {
      let { usedPercent: t } = e
      return t > 0
    }
    var tf = s("K45w"),
      tp = s("W5pg"),
      tx = s("K4Cx"),
      ty = s("Ol5M")
    function t_(e) {
      let t,
        s,
        l,
        r,
        o,
        u,
        c,
        d,
        m = (0, i.c)(35),
        {
          accessibleLabel: h,
          description: g,
          fullWidth: f,
          isResetFillActive: p,
          remainingLabel: x,
          remainingPercent: y,
          resetFillAnimation: _,
          resetFillRemainingPercent: v,
        } = e,
        j = void 0 !== f && f,
        w = void 0 !== p && p,
        A = void 0 === x ? "left" : x,
        C = (0, F.A)(),
        M = (0, e9.N8)(y),
        S = (0, e9.N8)(v ?? y),
        k = (0, tf.d)(0),
        E = w && null == v ? void 0 : _,
        N = E?.progress ?? k,
        T = w && null != E && null != v
      m[0] !== S ? ((t = (e) => S + (100 - S) * e), (m[0] = S), (m[1] = t)) : (t = m[1])
      let I = (0, tp.G)(N, t),
        P = (0, tp.G)(I, tb),
        R = T ? 100 : M
      m[2] !== h || m[3] !== C
        ? ((s =
            h ??
            C.formatMessage({ id: "settings.usage.limits.progress.ariaLabel", defaultMessage: "Usage remaining" })),
          (m[2] = h),
          (m[3] = C),
          (m[4] = s))
        : (s = m[4])
      let L = s,
        O = T
          ? (0, n.jsx)(tx.P.span, { children: P }, "remaining-percent")
          : C.formatNumber(M, { maximumFractionDigits: 0 }),
        D = j ? "h-1.5 w-full" : "w-24"
      ;(m[5] !== I || m[6] !== M || m[7] !== R || m[8] !== j || m[9] !== E || m[10] !== L || m[11] !== T
        ? ((l =
            null == E || (j && !T)
              ? (0, n.jsx)("progress", {
                  className: (0, a.A)(
                    "h-1.5 overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-text/10",
                    j ? "block w-full" : "w-24",
                    j && M <= 10
                      ? "[&::-moz-progress-bar]:bg-warning-solid [&::-ms-fill]:bg-warning-solid [&::-webkit-progress-value]:bg-warning-solid"
                      : "[&::-moz-progress-bar]:bg-neutral-solid [&::-ms-fill]:bg-neutral-solid [&::-webkit-progress-value]:bg-neutral-solid",
                  ),
                  max: 100,
                  value: M,
                  "aria-label": L,
                })
              : (0, n.jsx)(ty.I, {
                  accessibleLabel: L,
                  animatedPercent: I,
                  isResetFillActive: T,
                  remainingPercent: R,
                  resetFillAnimation: E,
                  size: j ? "compact" : "default",
                })),
          (m[5] = I),
          (m[6] = M),
          (m[7] = R),
          (m[8] = j),
          (m[9] = E),
          (m[10] = L),
          (m[11] = T),
          (m[12] = l))
        : (l = m[12]),
        m[13] !== D || m[14] !== l
          ? ((r = (0, n.jsx)("div", { className: D, children: l })), (m[13] = D), (m[14] = l), (m[15] = r))
          : (r = m[15]))
      let U = r,
        q = j ? "text-xs leading-4" : "min-w-[72px] text-sm"
      ;(m[16] !== q
        ? ((o = (0, a.A)("text-end whitespace-nowrap text-secondary tabular-nums", q)), (m[16] = q), (m[17] = o))
        : (o = m[17]),
        m[18] !== O || m[19] !== A
          ? ((u =
              "remaining" === A
                ? (0, n.jsx)(b.A, {
                    id: "settings.usage.limits.monthly.progress.remaining",
                    defaultMessage: "{remaining}% remaining",
                    values: { remaining: O },
                  })
                : (0, n.jsx)(b.A, {
                    id: "settings.usage.limits.progress.remaining",
                    defaultMessage: "{remaining}% left",
                    values: { remaining: O },
                  })),
            (m[18] = O),
            (m[19] = A),
            (m[20] = u))
          : (u = m[20]),
        m[21] !== o || m[22] !== u
          ? ((c = (0, n.jsx)("span", { className: o, children: u })), (m[21] = o), (m[22] = u), (m[23] = c))
          : (c = m[23]))
      let H = c
      if (j) {
        let e, t, s
        return (
          m[24] !== g ? ((e = (0, n.jsx)("span", { children: g })), (m[24] = g), (m[25] = e)) : (e = m[25]),
          m[26] !== H || m[27] !== e
            ? ((t = (0, n.jsxs)("div", {
                className: "flex items-baseline justify-between gap-1.25 text-xs leading-4 text-secondary",
                children: [e, H],
              })),
              (m[26] = H),
              (m[27] = e),
              (m[28] = t))
            : (t = m[28]),
          m[29] !== t || m[30] !== U
            ? ((s = (0, n.jsxs)("div", { className: "flex flex-col gap-1.25", children: [t, U] })),
              (m[29] = t),
              (m[30] = U),
              (m[31] = s))
            : (s = m[31]),
          s
        )
      }
      return (
        m[32] !== H || m[33] !== U
          ? ((d = (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [U, H] })),
            (m[32] = H),
            (m[33] = U),
            (m[34] = d))
          : (d = m[34]),
        d
      )
    }
    function tb(e) {
      return Math.round(e)
    }
    function tv(e) {
      let t,
        s,
        a,
        l,
        r = (0, i.c)(26),
        {
          header: o,
          fullWidth: u,
          isPolling: c,
          isUsdWorkspace: d,
          isResetFillActive: m,
          rateLimitStatus: h,
          resetFillAnimation: g,
          resetFillRateLimitStatus: f,
          showEnterpriseMonthlyUsageLimit: p,
          showMonthlyUsageLimit: x,
          showResetPurchase: y,
          showUsageBillingLayout: _,
          canRequestEnterpriseMonthlyUsageLimit: v,
          workspaceRequestPolicy: w,
          workspaceMonthlyUsage: A,
          workspaceAdminRequests: C,
          isWorkspaceAdminRequestsLoading: M,
          isSavingWorkspaceAdminRequest: S,
          saveWorkspaceAdminRequest: k,
        } = e,
        E = void 0 !== u && u,
        P = void 0 === c || c,
        R = void 0 !== d && d,
        O = void 0 !== m && m,
        D = void 0 !== p && p,
        U = void 0 === x || x,
        F = void 0 !== y && y,
        H = void 0 !== _ && _,
        z = void 0 !== v && v,
        B = void 0 === A ? null : A,
        G = void 0 === C ? null : C,
        $ = void 0 !== M && M,
        W = void 0 !== S && S,
        V = O && null != f ? f : h
      if (
        r[0] !== z ||
        r[1] !== E ||
        r[2] !== o ||
        r[3] !== P ||
        r[4] !== O ||
        r[5] !== W ||
        r[6] !== R ||
        r[7] !== $ ||
        r[8] !== h ||
        r[9] !== g ||
        r[10] !== f ||
        r[11] !== k ||
        r[12] !== D ||
        r[13] !== U ||
        r[14] !== F ||
        r[15] !== H ||
        r[16] !== V ||
        r[17] !== G ||
        r[18] !== B ||
        r[19] !== w
      ) {
        a = Symbol.for("react.early_return_sentinel")
        e: {
          var X, Y, K
          let e,
            i = (0, te.mO)(V),
            l = tk(i, null),
            r =
              O && null != f
                ? new Map(tk((0, te.mO)(f), null).map((e) => [e.key, (0, e9.rU)(e.bucket.usedPercent ?? 0)]))
                : null,
            u = D
              ? ((X = B),
                (Y = V),
                null == (e = (0, L.Li)(X))
                  ? null
                  : {
                      key: "workspace-monthly",
                      remainingPercent: e.remainingPercent,
                      resetAt:
                        (Y?.spend_control?.individual_limit?.unit ?? "credit") === (X?.balance_unit ?? "credit") &&
                        Number(Y?.spend_control?.individual_limit?.limit) === e.limit
                          ? (Y?.spend_control?.individual_limit?.reset_at ?? null)
                          : null,
                      usedAmount: String(e.used),
                      limitAmount: String(e.limit),
                    })
              : (function ({ rateLimitStatus: e, coreUsageLimitRows: t }) {
                  let s = e?.spend_control?.individual_limit ?? null
                  if (null != s)
                    return {
                      key: "spend-control-monthly",
                      remainingPercent: s.remaining_percent,
                      resetAt: s.reset_at,
                      usedAmount: s.used,
                      limitAmount: s.limit,
                    }
                  let n = t.find(tN) ?? null
                  if (null == n) return null
                  let i = n.bucket.usedPercent ?? 0
                  return {
                    key: n.key,
                    remainingPercent: (0, e9.rU)(i),
                    resetAt: n.bucket.resetsAt ?? null,
                    usedAmount: null,
                    limitAmount: null,
                  }
                })({ rateLimitStatus: V, coreUsageLimitRows: l })
          U || (u = null)
          let c = U && null == u ? l : l.filter(tj),
            d = tk(i, "gpt-5.3-codex-spark"),
            m = D && z,
            p = w?.kind === "custom" ? w.request_url : null,
            x = D && null == u
          if (null == u && 0 === c.length && 0 === d.length && !x && !m) {
            a = null
            break e
          }
          ;((t =
            null != u || c.length > 0 || x || m
              ? (0, n.jsxs)(N.X, {
                  children: [
                    o ??
                      (0, n.jsx)(N.X.Header, {
                        title: H
                          ? (0, n.jsx)(b.A, { id: "settings.usage.limits.plan.title", defaultMessage: "Plan limits" })
                          : (0, n.jsx)(b.A, {
                              id: "settings.usage.limits.title",
                              defaultMessage: "General usage limits",
                            }),
                        subtitle: H
                          ? (0, n.jsx)(b.A, {
                              id: "settings.usage.limits.plan.subtitle",
                              defaultMessage:
                                "Shared across Chat, Codex, Work, Workspace Agents, ChatGPT for Excel, and ChatGPT for PowerPoint.",
                            })
                          : null,
                      }),
                    (0, n.jsxs)(N.X.Content, {
                      children: [
                        x
                          ? (0, n.jsx)(tw, {
                              isPolling: P,
                              currentMonthUsage: B?.current_month_usage ?? null,
                              isUsdWorkspace: R,
                              showEstimatedSpend: H && !R,
                            })
                          : null,
                        null != u || c.length > 0
                          ? (0, n.jsxs)(I.t, {
                              className: F ? "relative z-10" : void 0,
                              dividers: !E,
                              variant: E ? "metered" : "default",
                              children: [
                                null != u
                                  ? (0, n.jsx)(
                                      tM,
                                      {
                                        isPolling: P,
                                        fullWidth: E,
                                        isResetFillActive: O,
                                        isUsdWorkspace: R,
                                        resetFillAnimation: g,
                                        resetFillRemainingPercent: r?.get(u.key),
                                        showUsageBillingLayout: H,
                                        usageLimit: u,
                                      },
                                      u.key,
                                    )
                                  : null,
                                c.map((e) =>
                                  (0, n.jsx)(
                                    tS,
                                    {
                                      fullWidth: E,
                                      isResetFillActive: O,
                                      rateLimitRow: e,
                                      resetFillAnimation: g,
                                      resetFillRemainingPercent: r?.get(e.key),
                                    },
                                    e.key,
                                  ),
                                ),
                              ],
                            })
                          : null,
                        F ? (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(th, { rateLimitStatus: h }) }) : null,
                        m && w?.kind === "openai_native"
                          ? (0, n.jsx)(tC, {
                              pendingRequest:
                                ((K = G),
                                K?.items.find((e) => "pending" === e.status && null != (e.payloads.find(tE) ?? null)) ??
                                  null),
                              isLoading: $,
                              isSaving: W,
                              saveWorkspaceAdminRequest: k,
                            })
                          : null,
                        m && w?.kind === "custom"
                          ? (0, n.jsx)(I.t, {
                              className: "mt-2",
                              children: (0, n.jsx)(T.ic, {
                                label: null,
                                description:
                                  null != w.instructions
                                    ? (0, n.jsx)("span", {
                                        className: "leading-relaxed whitespace-pre-wrap",
                                        children: w.instructions,
                                      })
                                    : null,
                                control:
                                  null != p
                                    ? (0, n.jsx)(j.$, {
                                        color: "primary",
                                        size: "medium",
                                        className: "rounded-full",
                                        onClick: (e) => {
                                          ;(0, q.PQ)({ event: e, href: p, initiator: "open_in_browser_bridge" })
                                        },
                                        children: (0, n.jsx)(b.A, {
                                          id: "settings.usage.limits.customRequestIncrease",
                                          defaultMessage: "Request more usage",
                                        }),
                                      })
                                    : null,
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                })
              : null),
            (s =
              d.length > 0
                ? (0, n.jsxs)(N.X, {
                    children: [
                      (0, n.jsx)(N.X.Header, {
                        title: (0, n.jsx)(b.A, {
                          id: "settings.usage.limits.spark.title",
                          defaultMessage: "GPT-5.3-Codex-Spark usage limits",
                        }),
                      }),
                      (0, n.jsx)(N.X.Content, {
                        children: (0, n.jsx)(I.t, {
                          dividers: !E,
                          variant: E ? "metered" : "default",
                          children: d.map((e) =>
                            (0, n.jsx)(
                              tS,
                              {
                                fullWidth: E,
                                isResetFillActive: !1,
                                rateLimitRow: e,
                                resetFillAnimation: void 0,
                                resetFillRemainingPercent: void 0,
                              },
                              e.key,
                            ),
                          ),
                        }),
                      }),
                    ],
                  })
                : null))
        }
        ;((r[0] = z),
          (r[1] = E),
          (r[2] = o),
          (r[3] = P),
          (r[4] = O),
          (r[5] = W),
          (r[6] = R),
          (r[7] = $),
          (r[8] = h),
          (r[9] = g),
          (r[10] = f),
          (r[11] = k),
          (r[12] = D),
          (r[13] = U),
          (r[14] = F),
          (r[15] = H),
          (r[16] = V),
          (r[17] = G),
          (r[18] = B),
          (r[19] = w),
          (r[20] = t),
          (r[21] = s),
          (r[22] = a))
      } else ((t = r[20]), (s = r[21]), (a = r[22]))
      return a !== Symbol.for("react.early_return_sentinel")
        ? a
        : (r[23] !== t || r[24] !== s
            ? ((l = (0, n.jsxs)(n.Fragment, { children: [t, s] })), (r[23] = t), (r[24] = s), (r[25] = l))
            : (l = r[25]),
          l)
    }
    function tj(e) {
      return !tN(e)
    }
    function tw(e) {
      let t,
        s,
        a,
        l,
        r = (0, i.c)(12),
        { currentMonthUsage: o, isPolling: u, isUsdWorkspace: c, showEstimatedSpend: d } = e,
        m = (0, F.A)(),
        h = o ?? 0,
        g = d && null != o && o > 0
      r[0] !== u || r[1] !== h || r[2] !== g
        ? ((t = { isPolling: u, credits: h, enabled: g }), (r[0] = u), (r[1] = h), (r[2] = g), (r[3] = t))
        : (t = r[3])
      let { data: f } = (0, e4.Q4)(t),
        p = d && f?.estimated_usage_usd_micros != null ? f.estimated_usage_usd_micros / 1e6 : null
      return (
        r[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(tA, { muted: !0 })), (r[4] = s))
          : (s = r[4]),
        r[5] !== o || r[6] !== p || r[7] !== m || r[8] !== c
          ? ((a =
              null == o
                ? null
                : (0, n.jsx)(T.ic, {
                    label: (0, n.jsx)(b.A, {
                      id: "settings.usage.limits.monthly.currentUsage",
                      defaultMessage: "Your usage this month",
                    }),
                    control: (0, n.jsxs)("span", {
                      className: "text-sm text-secondary tabular-nums",
                      children: [
                        c
                          ? (0, n.jsx)(K.Gr, {
                              value: Math.max(o, 0),
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 6,
                            })
                          : null,
                        c || null != p
                          ? null
                          : (0, n.jsx)(b.A, {
                              id: "settings.usage.limits.monthly.currentUsageCredits",
                              defaultMessage: "{credits, plural, one {# credit} other {# credits}}",
                              values: { credits: Math.max(o, 0) },
                            }),
                        c || null == p
                          ? null
                          : (0, n.jsx)(b.A, {
                              id: "settings.usage.limits.monthly.currentUsageCreditsAndEstimatedSpend",
                              defaultMessage: "{credits, plural, one {# credit} other {# credits}} \xb7 Est. {cost}",
                              values: {
                                credits: Math.max(o, 0),
                                cost: m.formatNumber(p, {
                                  style: "currency",
                                  currency: "USD",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: p > 0 && p < 0.01 ? 6 : 2,
                                }),
                              },
                            }),
                      ],
                    }),
                  })),
            (r[5] = o),
            (r[6] = p),
            (r[7] = m),
            (r[8] = c),
            (r[9] = a))
          : (a = r[9]),
        r[10] !== a ? ((l = (0, n.jsxs)(I.t, { children: [s, a] })), (r[10] = a), (r[11] = l)) : (l = r[11]),
        l
      )
    }
    function tA(e) {
      let t,
        s,
        a,
        l = (0, i.c)(4),
        { muted: r } = e
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(e6.A, { "aria-hidden": !0, className: "icon-sm text-tertiary" })), (l[0] = t))
        : (t = l[0])
      let o = r ? "font-normal text-secondary" : void 0
      return (
        l[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(b.A, {
              id: "settings.usage.limits.monthly.none",
              defaultMessage: "Your admin hasn\u2019t set a usage limit",
            })),
            (l[1] = s))
          : (s = l[1]),
        l[2] !== o
          ? ((a = (0, n.jsx)(T.ic, {
              icon: t,
              label: (0, n.jsx)("span", { className: o, children: s }),
              control: null,
            })),
            (l[2] = o),
            (l[3] = a))
          : (a = l[3]),
        a
      )
    }
    function tC(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c,
        d = (0, i.c)(28),
        { pendingRequest: m, isLoading: h, isSaving: g, saveWorkspaceAdminRequest: f } = e,
        p = (0, _.gh)(en.u),
        x = (0, F.A)(),
        [y, v] = (0, l.useState)(!1),
        [w, A] = (0, l.useState)(m?.justification ?? "")
      d[0] !== x || d[1] !== w || d[2] !== m || d[3] !== f || d[4] !== p
        ? ((t = () => {
            let e = w.trim()
            0 === e.length
              ? p
                  .get(ee.Id)
                  .warning(
                    x.formatMessage({
                      id: "settings.usage.limits.requestMissingJustification",
                      defaultMessage: "Enter a justification to submit your request",
                    }),
                  )
              : f?.({ justification: e, requestId: m?.id })
                  .then(() => {
                    ;(p
                      .get(ee.Id)
                      .success(
                        x.formatMessage(
                          null == m
                            ? {
                                id: "settings.usage.limits.requestSaved",
                                defaultMessage: "Request submitted",
                                description: "Toast shown when a workspace usage limit request is submitted",
                              }
                            : {
                                id: "settings.usage.limits.requestUpdated",
                                defaultMessage: "Request updated",
                                description: "Toast shown when a workspace usage limit request is updated",
                              },
                        ),
                      ),
                      v(!1))
                  })
                  .catch((e) => {
                    null == m &&
                    e instanceof tt.FetchError &&
                    409 === e.status &&
                    (0, e8.d)(e)?.message === "A pending workspace admin request already exists."
                      ? p
                          .get(ee.Id)
                          .warning(
                            x.formatMessage({
                              id: "settings.usage.limits.requestAlreadyPending",
                              defaultMessage: "You already have a usage request pending admin review.",
                            }),
                          )
                      : p
                          .get(ee.Id)
                          .danger(
                            x.formatMessage({
                              id: "settings.usage.limits.requestSaveError",
                              defaultMessage: "Could not save your request. Please try again",
                            }),
                            { errorAnalytics: { toastId: "settings.usage.limits.requestSaveError" } },
                          )
                  })
          }),
          (d[0] = x),
          (d[1] = w),
          (d[2] = m),
          (d[3] = f),
          (d[4] = p),
          (d[5] = t))
        : (t = d[5])
      let C = t
      d[6] !== m
        ? ((s =
            null != m
              ? (0, n.jsx)("div", {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(b.A, {
                    id: "settings.usage.limits.requestPending",
                    defaultMessage: "Your request is pending admin review.",
                  }),
                })
              : null),
          (d[6] = m),
          (d[7] = s))
        : (s = d[7])
      let M = null == f
      return (
        d[8] !== m?.justification
          ? ((a = () => {
              ;(A(m?.justification ?? ""), v(!0))
            }),
            (d[8] = m?.justification),
            (d[9] = a))
          : (a = d[9]),
        d[10] !== m
          ? ((r =
              null == m
                ? (0, n.jsx)(b.A, { id: "settings.usage.limits.requestIncrease", defaultMessage: "Request more usage" })
                : (0, n.jsx)(b.A, {
                    id: "settings.usage.limits.updatePendingRequest",
                    defaultMessage: "Update pending request",
                  })),
            (d[10] = m),
            (d[11] = r))
          : (r = d[11]),
        d[12] !== h || d[13] !== M || d[14] !== a || d[15] !== r
          ? ((o = (0, n.jsx)(j.$, {
              color: "primary",
              size: "medium",
              className: "self-start rounded-full",
              loading: h,
              disabled: M,
              onClick: a,
              children: r,
            })),
            (d[12] = h),
            (d[13] = M),
            (d[14] = a),
            (d[15] = r),
            (d[16] = o))
          : (o = d[16]),
        d[17] !== C || d[18] !== x || d[19] !== y || d[20] !== g || d[21] !== w || d[22] !== m
          ? ((u = y
              ? (0, n.jsx)(I.t, {
                  className: "mt-1 w-full",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col gap-3 p-3",
                    children: [
                      (0, n.jsxs)("label", {
                        className: "flex flex-col gap-1.5 text-sm font-medium text-default",
                        children: [
                          (0, n.jsx)(b.A, {
                            id: "settings.usage.limits.requestJustificationLabel",
                            defaultMessage: "Justification",
                          }),
                          (0, n.jsx)(e5.TM, {
                            value: w,
                            rows: 3,
                            placeholder: x.formatMessage({
                              id: "settings.usage.limits.requestJustificationPlaceholder",
                              defaultMessage: "Tell your admin why you need more usage",
                            }),
                            onChange: (e) => {
                              A(e.target.value)
                            },
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex justify-end gap-2",
                        children: [
                          (0, n.jsx)(j.$, {
                            color: "secondary",
                            size: "default",
                            onClick: () => {
                              v(!1)
                            },
                            children: (0, n.jsx)(b.A, {
                              id: "settings.usage.limits.requestCancel",
                              defaultMessage: "Cancel",
                            }),
                          }),
                          (0, n.jsx)(j.$, {
                            color: "primary",
                            size: "default",
                            loading: g,
                            onClick: C,
                            children:
                              null == m
                                ? (0, n.jsx)(b.A, {
                                    id: "settings.usage.limits.requestSave",
                                    defaultMessage: "Submit request",
                                  })
                                : (0, n.jsx)(b.A, {
                                    id: "settings.usage.limits.requestUpdate",
                                    defaultMessage: "Update request",
                                  }),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : null),
            (d[17] = C),
            (d[18] = x),
            (d[19] = y),
            (d[20] = g),
            (d[21] = w),
            (d[22] = m),
            (d[23] = u))
          : (u = d[23]),
        d[24] !== s || d[25] !== o || d[26] !== u
          ? ((c = (0, n.jsxs)("div", { className: "mt-2 flex flex-col items-start gap-2", children: [s, o, u] })),
            (d[24] = s),
            (d[25] = o),
            (d[26] = u),
            (d[27] = c))
          : (c = d[27]),
        c
      )
    }
    function tM(e) {
      let t,
        s,
        a,
        l,
        r,
        o,
        u,
        c,
        d = (0, i.c)(40),
        {
          fullWidth: m,
          isPolling: h,
          isResetFillActive: g,
          isUsdWorkspace: f,
          resetFillAnimation: p,
          resetFillRemainingPercent: x,
          showUsageBillingLayout: y,
          usageLimit: _,
        } = e,
        v = (0, F.A)()
      d[0] !== _.remainingPercent
        ? ((t = (0, e9.N8)(_.remainingPercent)), (d[0] = _.remainingPercent), (d[1] = t))
        : (t = d[1])
      let j = t
      d[2] !== _.resetAt
        ? ((a = null == (s = (0, e9.tB)(_.resetAt)) ? null : (0, e9.h6)(s)), (d[2] = _.resetAt), (d[3] = s), (d[4] = a))
        : ((s = d[3]), (a = d[4]))
      let w = a,
        A = null
      if (null != _.usedAmount && null != _.limitAmount) {
        let e
        ;(d[5] !== v || d[6] !== f || d[7] !== _.limitAmount || d[8] !== _.usedAmount
          ? ((e = f
              ? v.formatMessage(
                  { id: "settings.usage.limits.monthly.usdUsed", defaultMessage: "{used} of {limit} used" },
                  { used: (0, tn.W)(Number(_.usedAmount), v), limit: (0, tn.W)(Number(_.limitAmount), v) },
                )
              : v.formatMessage(
                  { id: "settings.usage.limits.monthly.creditsUsed", defaultMessage: "{used} of {limit} credits used" },
                  { used: tI(v, _.usedAmount), limit: tI(v, _.limitAmount) },
                )),
            (d[5] = v),
            (d[6] = f),
            (d[7] = _.limitAmount),
            (d[8] = _.usedAmount),
            (d[9] = e))
          : (e = d[9]),
          (A = e))
      }
      let C = null
      if (m && null != s) {
        let e
        ;(d[10] !== s ? ((e = (0, n.jsx)(ta, { resetAt: s })), (d[10] = s), (d[11] = e)) : (e = d[11]), (C = e))
      } else if (null != w) {
        let e
        ;(d[12] !== w
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.limits.window.resetAt",
              defaultMessage: "Resets {time}",
              values: { time: w },
            })),
            (d[12] = w),
            (d[13] = e))
          : (e = d[13]),
          (C = e))
      }
      if (y) {
        let e,
          t = null == _.limitAmount ? null : Number(_.limitAmount),
          s = null == _.usedAmount ? null : Number(_.usedAmount)
        return (
          d[14] !== h || d[15] !== f || d[16] !== j || d[17] !== C || d[18] !== t || d[19] !== s || d[20] !== A
            ? ((e = (0, n.jsx)(ts, {
                isPolling: h,
                isUsdWorkspace: f,
                limitAmount: t,
                remainingPercent: j,
                resetLabel: C,
                usedAmount: s,
                usageLabel: A,
              })),
              (d[14] = h),
              (d[15] = f),
              (d[16] = j),
              (d[17] = C),
              (d[18] = t),
              (d[19] = s),
              (d[20] = A),
              (d[21] = e))
            : (e = d[21]),
          e
        )
      }
      d[22] !== C || d[23] !== A
        ? ((l =
            null != A || null != C
              ? (0, n.jsxs)("span", {
                  className: "flex flex-wrap gap-x-2",
                  children: [
                    null != A ? (0, n.jsx)("span", { children: A }) : null,
                    null != C ? (0, n.jsx)("span", { children: C }) : null,
                  ],
                })
              : null),
          (d[22] = C),
          (d[23] = A),
          (d[24] = l))
        : (l = d[24])
      let M = l,
        S = m ? "stacked" : "default"
      d[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)(b.A, { id: "settings.usage.limits.monthly.label", defaultMessage: "Monthly usage limit" })),
          (d[25] = r))
        : (r = d[25])
      let k = m ? null : M,
        E = m ? M : void 0
      return (
        d[26] !== v
          ? ((o = v.formatMessage({
              id: "settings.usage.limits.monthly.progress.remainingAriaLabel",
              defaultMessage: "Monthly usage remaining",
            })),
            (d[26] = v),
            (d[27] = o))
          : (o = d[27]),
        d[28] !== m || d[29] !== g || d[30] !== j || d[31] !== p || d[32] !== x || d[33] !== E || d[34] !== o
          ? ((u = (0, n.jsx)(t_, {
              fullWidth: m,
              description: E,
              accessibleLabel: o,
              isResetFillActive: g,
              remainingLabel: "remaining",
              remainingPercent: j,
              resetFillAnimation: p,
              resetFillRemainingPercent: x,
            })),
            (d[28] = m),
            (d[29] = g),
            (d[30] = j),
            (d[31] = p),
            (d[32] = x),
            (d[33] = E),
            (d[34] = o),
            (d[35] = u))
          : (u = d[35]),
        d[36] !== S || d[37] !== k || d[38] !== u
          ? ((c = (0, n.jsx)(T.ic, { variant: S, label: r, description: k, control: u })),
            (d[36] = S),
            (d[37] = k),
            (d[38] = u),
            (d[39] = c))
          : (c = d[39]),
        c
      )
    }
    function tS(e) {
      var t, s, a
      let l,
        r,
        o,
        u,
        c,
        d,
        m,
        h = (0, i.c)(27),
        {
          fullWidth: g,
          isResetFillActive: f,
          rateLimitRow: p,
          resetFillAnimation: x,
          resetFillRemainingPercent: y,
        } = e,
        _ = void 0 !== g && g,
        v = (0, F.A)()
      h[0] !== v || h[1] !== p.bucket.resetsAt || h[2] !== p.bucket.windowDurationMins
        ? ((o =
            null == (r = (0, e9.tB)(p.bucket.resetsAt ?? null))
              ? null
              : tT(p.bucket.windowDurationMins ?? 0, 10080)
                ? v.formatDate(r, { dateStyle: "medium", timeStyle: "short" })
                : (0, e9.h6)(r)),
          (h[0] = v),
          (h[1] = p.bucket.resetsAt),
          (h[2] = p.bucket.windowDurationMins),
          (h[3] = r),
          (h[4] = o))
        : ((r = h[3]), (o = h[4]))
      let j = null
      if (_ && null != r) {
        let e
        ;(h[5] !== r ? ((e = (0, n.jsx)(ta, { resetAt: r })), (h[5] = r), (h[6] = e)) : (e = h[6]), (j = e))
      } else if (null != o) {
        let e
        ;(h[7] !== o
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.limits.window.resetAt",
              defaultMessage: "Resets {time}",
              values: { time: o },
            })),
            (h[7] = o),
            (h[8] = e))
          : (e = h[8]),
          (j = e))
      }
      let w = p.bucket.usedPercent ?? 0
      h[9] !== w ? ((u = (0, e9.rU)(w)), (h[9] = w), (h[10] = u)) : (u = h[10])
      let A = u,
        C = _ ? "stacked" : "default"
      h[11] !== _ || h[12] !== v || h[13] !== p
        ? ((t = p),
          (s = _),
          (a = v),
          (l = t.bucket.windowDurationMins ?? 0),
          (c = tN(t)
            ? (0, n.jsx)(b.A, { id: "settings.usage.limits.monthly.label", defaultMessage: "Monthly usage limit" })
            : tT(l, 300)
              ? s
                ? (0, n.jsx)(b.A, { id: "settings.usage.personalLimits.fiveHour", defaultMessage: "5-hour limit" })
                : (0, n.jsx)(b.A, { id: "settings.usage.limits.fiveHour.label", defaultMessage: "5 hour usage limit" })
              : tT(l, 10080)
                ? s
                  ? (0, n.jsx)(b.A, { id: "settings.usage.personalLimits.weekly", defaultMessage: "Weekly limit" })
                  : (0, n.jsx)(b.A, { id: "settings.usage.limits.week.label", defaultMessage: "Weekly usage limit" })
                : tT(l, 1440)
                  ? (0, n.jsx)(b.A, { id: "settings.usage.limits.day.label", defaultMessage: "Daily usage limit" })
                  : (0, n.jsx)(b.A, {
                      id: "settings.usage.limits.customWindow.label",
                      defaultMessage: "{duration} usage limit",
                      values: { duration: (0, e9.He)({ intl: a, minutes: l }) },
                    })),
          (h[11] = _),
          (h[12] = v),
          (h[13] = p),
          (h[14] = c))
        : (c = h[14])
      let M = _ ? void 0 : j,
        S = _ ? j : void 0
      return (
        h[15] !== _ || h[16] !== f || h[17] !== A || h[18] !== x || h[19] !== y || h[20] !== S
          ? ((d = (0, n.jsx)(t_, {
              fullWidth: _,
              description: S,
              isResetFillActive: f,
              remainingPercent: A,
              resetFillAnimation: x,
              resetFillRemainingPercent: y,
            })),
            (h[15] = _),
            (h[16] = f),
            (h[17] = A),
            (h[18] = x),
            (h[19] = y),
            (h[20] = S),
            (h[21] = d))
          : (d = h[21]),
        h[22] !== C || h[23] !== c || h[24] !== M || h[25] !== d
          ? ((m = (0, n.jsx)(T.ic, { variant: C, label: c, description: M, control: d })),
            (h[22] = C),
            (h[23] = c),
            (h[24] = M),
            (h[25] = d),
            (h[26] = m))
          : (m = h[26]),
        m
      )
    }
    function tk(e, t) {
      let s = null == t ? (e.find((e) => null == e.limitName) ?? null) : (0, te.nW)(e, t)
      return null == s ? [] : (0, e7.m)({ entry: s, keyPrefix: t ?? "core" })
    }
    function tE(e) {
      return (
        "spend_limit" === e.kind &&
        "account_user_spend_controls" === e.target.source &&
        "account_user.credit_limits" === e.target.source_id
      )
    }
    function tN(e) {
      return tT(e.bucket.windowDurationMins ?? 0, 43200)
    }
    function tT(e, t) {
      return !!Number.isFinite(e) && !(e <= 0) && Math.abs(e - t) <= 0.05 * t
    }
    function tI(e, t) {
      let s = Number(t)
      return Number.isFinite(s)
        ? e.formatNumber(Math.max(s, 0), { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        : t
    }
    var tP = s("ZOaQ"),
      tR = s("MIhr"),
      tL = s("j2jv"),
      tO = s("TjJf"),
      tD = s("sGKa"),
      tU = s("NxWE"),
      tF = s("x8Nb"),
      tq = s("fgDr"),
      tH = s("Y9i8"),
      tz = s("bVeK"),
      tB = s("o6lh"),
      tG = s("Rd02"),
      t$ = s("MFyU"),
      tW = s("O28E")
    function tV(e) {
      let t,
        s,
        a,
        l,
        r,
        o,
        u = (0, i.c)(14),
        { rateLimitStatus: c, reduceMotion: d } = e,
        m = (0, v.As)()
      if (u[0] !== m || u[1] !== c) {
        r = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            n = (0, te.mO)(c).find(tY),
            i = null == n ? [] : (0, e7.m)({ entry: n, keyPrefix: "core" }),
            o = []
          for (let t of (u[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = [300, 10080]), (u[7] = e))
            : (e = u[7]),
          e))
            i.some((e) => {
              let { bucket: s } = e
              return 1 >= Math.abs((s.windowDurationMins ?? 0) - t)
            }) && o.push(t)
          if (
            null == m.accountId ||
            null == m.userId ||
            ("chatgpt" !== m.authMethod && "chatgptAuthTokens" !== m.authMethod) ||
            0 === o.length
          ) {
            r = null
            break e
          }
          ;((t = tK), (s = `${m.accountId}:${m.userId}`), (a = o), (l = i.map(tX)))
        }
        ;((u[0] = m), (u[1] = c), (u[2] = t), (u[3] = s), (u[4] = a), (u[5] = l), (u[6] = r))
      } else ((t = u[2]), (s = u[3]), (a = u[4]), (l = u[5]), (r = u[6]))
      return r !== Symbol.for("react.early_return_sentinel")
        ? r
        : (u[8] !== t || u[9] !== d || u[10] !== s || u[11] !== a || u[12] !== l
            ? ((o = (0, n.jsx)(t, { availableWindows: a, currentWindows: l, reduceMotion: d }, s)),
              (u[8] = t),
              (u[9] = d),
              (u[10] = s),
              (u[11] = a),
              (u[12] = l),
              (u[13] = o))
            : (o = u[13]),
          o)
    }
    function tX(e) {
      let { bucket: t } = e
      return t
    }
    function tY(e) {
      let { limitName: t } = e
      return null == t
    }
    function tK(e) {
      let t,
        s,
        a,
        o,
        u,
        c,
        d,
        m,
        h,
        g,
        f,
        p,
        x,
        y,
        _,
        w,
        A,
        M,
        S,
        k,
        E,
        T,
        I,
        P,
        R,
        L,
        O,
        D,
        U,
        q,
        H,
        z,
        B,
        G,
        $,
        W,
        V,
        X,
        Y,
        Z = (0, i.c)(118),
        { currentWindows: Q, now: J, availableWindows: ee, reduceMotion: et } = e,
        es = (0, l.useId)(),
        en = new Intl.DateTimeFormat().resolvedOptions().timeZone,
        ei = (0, v.As)(),
        ea = (0, F.A)(),
        el = (0, r.KC)(),
        [er, ec] = (0, l.useState)(300)
      Z[0] !== ee || Z[1] !== er
        ? ((t = ee.includes(er) ? er : (ee[0] ?? 10080)), (Z[0] = ee), (Z[1] = er), (Z[2] = t))
        : (t = Z[2])
      let ed = t
      Z[3] !== ed ? ((s = (e) => 1 >= Math.abs((e.windowDurationMins ?? 0) - ed)), (Z[3] = ed), (Z[4] = s)) : (s = Z[4])
      let em = Q.find(s),
        [eh, eg] = (0, l.useState)(!1),
        [ef, ep] = (0, l.useState)(null),
        [ex, ey] = (0, l.useState)(!1)
      Z[5] !== ei || Z[6] !== ed
        ? ((a = (function ({ accountId: e, userId: t, authMethod: s }, n) {
            return {
              queryKey: ["plan-limit-balance-history", e, t, n],
              enabled: ("chatgpt" === s || "chatgptAuthTokens" === s) && null != e && null != t,
              queryFn: async ({ signal: e }) => {
                let t
                do {
                  e.throwIfAborted()
                  try {
                    let s = await eu.CodexRequest.safeGet("/wham/usage/plan_limit_balance_history", {
                      parameters: { query: { window_minutes: n, cursor: t?.next_cursor } },
                      signal: e,
                      expectedErrorStatuses: [404, 409],
                    })
                    null == t ? (t = s) : (t.points.push(...s.points), (t.next_cursor = s.next_cursor))
                  } catch (e) {
                    if (e instanceof tt.FetchError && 404 === e.status) return null
                    throw e
                  }
                } while (null != t.next_cursor)
                return t
              },
              retry: (e, t) => e < 1 && t instanceof tt.FetchError && 409 === t.status,
              staleTime: eo.D.FIVE_MINUTES,
              refetchOnWindowFocus: !1,
            }
          })(ei, ed)),
          (Z[5] = ei),
          (Z[6] = ed),
          (Z[7] = a))
        : (a = Z[7])
      let { data: e_, dataUpdatedAt: eb, isSuccess: ev, isPending: ej, isError: ew, refetch: eA } = (0, C.I)(a),
        eC = e_?.points.at(-1),
        eM = e_?.points[0]
      Z[8] !== eM ? ((o = null == eM ? void 0 : Date.parse(eM.observed_at)), (Z[8] = eM), (Z[9] = o)) : (o = Z[9])
      let eS = o,
        ek = e_?.data_as_of ?? eC?.observed_at,
        eE = null == ek ? void 0 : Date.parse(ek)
      Z[10] !== eb || Z[11] !== J
        ? ((u = (e) => J ?? Math.max(e.getTime(), eb)), (Z[10] = eb), (Z[11] = J), (Z[12] = u))
        : (u = Z[12])
      let eN = (0, ti.wv)(u)
      if (ev && null == e_) return null
      let eT = e_?.points.flatMap((e, t) => {
          let s = e_.points[t - 1]
          if (null == s || s.plan_type !== e.plan_type) return []
          let n = Date.parse(s.estimated_reset_at)
          return n > Date.parse(s.observed_at) &&
            n <= Date.parse(e.observed_at) &&
            Date.parse(e.estimated_reset_at) - n > 6e4
            ? [n]
            : []
        }),
        eI = 0,
        eP =
          null == e_ || null == eS || null == eE
            ? void 0
            : Array.from({ length: 64 }, (e, t) => {
                let s = eS + ((eN - eS) * t) / 63
                if (s > eE) return { timestamp: s, remaining: null }
                for (; eI + 1 < e_.points.length && Date.parse(e_.points[eI + 1].observed_at) <= s;) eI += 1
                let n = e_.points[eI],
                  i = Date.parse(n.observed_at),
                  a = eT?.find((e) => e > i && e <= s)
                return { timestamp: s, remaining: null == a ? n.remaining_basis_points / 100 : 100 }
              }),
        eR = eP?.find((e) => !eh && e.timestamp === ef && null != e.remaining),
        eL = N.X
      ;(Z[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, n.jsx)(b.A, { id: "settings.usage.balanceHistory.title", defaultMessage: "Recent plan usage" })),
          (d = (0, n.jsx)(b.A, {
            id: "settings.usage.balanceHistory.description",
            defaultMessage: "How your activity draws down your allowance",
          })),
          (Z[13] = c),
          (Z[14] = d))
        : ((c = Z[13]), (d = Z[14])),
        Z[15] !== ee || Z[16] !== ea || Z[17] !== et || Z[18] !== ed
          ? ((m =
              ee.length > 1
                ? (0, n.jsx)(tH.q, {
                    ariaLabel: ea.formatMessage({
                      id: "settings.usage.balanceHistory.window",
                      defaultMessage: "Plan limit window",
                    }),
                    selectedId: String(ed),
                    size: "compact",
                    animateSelection: !et,
                    options: ee.map(t0),
                    onSelect: (e) => ec("300" === e ? 300 : 10080),
                  })
                : null),
            (Z[15] = ee),
            (Z[16] = ea),
            (Z[17] = et),
            (Z[18] = ed),
            (Z[19] = m))
          : (m = Z[19]),
        Z[20] !== m
          ? ((h = (0, n.jsx)(N.X.Header, { title: c, subtitle: d, actions: m })), (Z[20] = m), (Z[21] = h))
          : (h = Z[21]))
      let eO = N.X,
        eD = t$.G
      Z[22] === Symbol.for("react.memo_cache_sentinel") ? ((g = []), (Z[22] = g)) : (g = Z[22])
      let eU = (eP?.length ?? 0) > 0,
        eF =
          null == eC
            ? null
            : (0, n.jsx)(tr.m, {
                content: (0, n.jsx)(b.A, {
                  id: "settings.usage.balanceHistory.carriedBalanceHelp",
                  defaultMessage:
                    "Updated daily. Bars carry the last observed balance forward between samples and estimate full allowance at resets. Balances and reset times are approximate.",
                }),
                children: (0, n.jsx)("span", {
                  children:
                    null != eR
                      ? ea.formatDate(eR.timestamp, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: en,
                        })
                      : (0, n.jsx)(b.A, {
                          id: "settings.usage.balanceHistory.historyThroughCaption",
                          defaultMessage: "History through {time}",
                          values: {
                            time: ea.formatDate(ek, {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                              timeZone: en,
                            }),
                          },
                        }),
                }),
              }),
        eq,
        eH =
          null == em
            ? null
            : (0, n.jsx)(K.Gr, {
                value: (eR?.remaining ?? (0, e9.rU)(em.usedPercent)) / 100,
                style: "percent",
                maximumFractionDigits: +(null != eR),
              })
      ;(Z[23] !== eA
        ? ((f = () => {
            eA()
          }),
          (Z[23] = eA),
          (Z[24] = f))
        : (f = Z[24]),
        Z[25] !== ew || Z[26] !== ej || Z[27] !== et || Z[28] !== f
          ? ((p = { isLoading: ej, isError: ew, reduceMotion: et, onRetry: f }),
            (Z[25] = ew),
            (Z[26] = ej),
            (Z[27] = et),
            (Z[28] = f),
            (Z[29] = p))
          : (p = Z[29]),
        Z[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)(b.A, {
              id: "settings.usage.balanceHistory.empty",
              defaultMessage: "Balance history isn\u2019t available yet",
            })),
            (Z[30] = x))
          : (x = Z[30]))
      let ez = tW.H
      Z[31] === Symbol.for("react.memo_cache_sentinel") ? ((y = () => ep(null)), (Z[31] = y)) : (y = Z[31])
      let eB = tP.E
      ;(Z[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e) => ep(null == e.activeLabel ? null : Number(e.activeLabel))),
          (w = () => ep(null)),
          (Z[32] = _),
          (Z[33] = w))
        : ((_ = Z[32]), (w = Z[33])),
        Z[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = { top: 32, right: 0, bottom: 0, left: 0 }), (Z[34] = A))
          : (A = Z[34]),
        Z[35] !== eh
          ? ((M = eh
              ? (0, n.jsx)("rect", { width: 8, height: 8, fill: "var(--color-background-secondary-ghost-hover)" })
              : null),
            (Z[35] = eh),
            (Z[36] = M))
          : (M = Z[36]),
        Z[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsx)("path", {
              d: "M-2 2L2-2M0 8L8 0M6 10L10 6",
              stroke: "var(--color-text-secondary)",
              strokeOpacity: 0.2,
            })),
            (Z[37] = S))
          : (S = Z[37]),
        Z[38] !== es || Z[39] !== M
          ? ((k = (0, n.jsx)("defs", {
              children: (0, n.jsxs)("pattern", {
                id: es,
                width: 8,
                height: 8,
                patternUnits: "userSpaceOnUse",
                children: [M, S],
              }),
            })),
            (Z[38] = es),
            (Z[39] = M),
            (Z[40] = k))
          : (k = Z[40]),
        Z[41] !== eE || Z[42] !== eN || Z[43] !== es
          ? ((E =
              null != eE && eE < eN
                ? (0, n.jsx)(tR.T, {
                    x1: eE,
                    x2: eN,
                    y1: 0,
                    y2: 100,
                    fill: `url(#${es})`,
                    fillOpacity: 1,
                    stroke: "none",
                    shape: (0, n.jsx)(t1, { onHoverChange: eg }),
                  })
                : null),
            (Z[41] = eE),
            (Z[42] = eN),
            (Z[43] = es),
            (Z[44] = E))
          : (E = Z[44]),
        Z[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(tL.d, { vertical: !1, stroke: "var(--color-border-subtle)" })), (Z[45] = T))
          : (T = Z[45]),
        Z[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, n.jsx)(tG.Qr, { unit: "percent", orientation: "right", ticks: [0, 50, 100] })), (Z[46] = I))
          : (I = Z[46]))
      let eG = eT?.map((e) => {
        let t = eP?.findIndex((t) => t.timestamp >= e)
        if (null == eP || null == t || t <= 0) return null
        let s = (eP[t - 1].timestamp + eP[t].timestamp) / 2
        return (0, n.jsx)(
          tO.e_,
          {
            segment: [
              { x: s, y: 0 },
              { x: s, y: 110 },
            ],
            ifOverflow: "visible",
            stroke: "var(--color-text-tertiary)",
            strokeDasharray: "3 3",
            label: {
              value: ea.formatMessage({ id: "settings.usage.balanceHistory.reset", defaultMessage: "Reset" }),
              position: "top",
              offset: 8,
              fill: "var(--color-text-tertiary)",
              className: "text-xs",
            },
          },
          e,
        )
      })
      Z[47] !== eN || Z[48] !== eS
        ? ((P = null != eS && null != eN ? [eS, (eS + eN) / 2, eN] : void 0), (Z[47] = eN), (Z[48] = eS), (Z[49] = P))
        : (P = Z[49])
      let e$ = eS ?? "dataMin"
      ;(Z[50] !== eN || Z[51] !== e$ ? ((R = [e$, eN]), (Z[50] = eN), (Z[51] = e$), (Z[52] = R)) : (R = Z[52]),
        Z[53] !== eN || Z[54] !== ea || Z[55] !== en
          ? ((L = (e) =>
              e === eN
                ? ea.formatMessage({ id: "settings.usage.balanceHistory.now", defaultMessage: "Now" })
                : ea.formatDate(e, { month: "short", day: "numeric", timeZone: en })),
            (Z[53] = eN),
            (Z[54] = ea),
            (Z[55] = en),
            (Z[56] = L))
          : (L = Z[56]),
        Z[57] !== P || Z[58] !== R || Z[59] !== L
          ? ((O = (0, n.jsx)(tD.W, {
              ticks: P,
              dataKey: "timestamp",
              type: "number",
              scale: "time",
              domain: R,
              axisLine: !1,
              tickLine: !1,
              interval: 0,
              tick: tQ,
              tickFormatter: L,
            })),
            (Z[57] = P),
            (Z[58] = R),
            (Z[59] = L),
            (Z[60] = O))
          : (O = Z[60]))
      let eW = !ex && !eh && void 0
      return (
        Z[61] !== eh ? ((D = !eh && (0, n.jsx)(tG.kr, {})), (Z[61] = eh), (Z[62] = D)) : (D = Z[62]),
        Z[63] !== ea || Z[64] !== eP || Z[65] !== en
          ? ((U = (e) => {
              let { active: t, label: s } = e,
                i = eP?.find((e) => e.timestamp === Number(s))
              return t && null != i
                ? (0, n.jsxs)("div", {
                    className: "sr-only",
                    role: "status",
                    children: [
                      (0, n.jsx)("div", {
                        children: ea.formatDate(i.timestamp, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: en,
                        }),
                      }),
                      null == i.remaining
                        ? (0, n.jsx)(b.A, {
                            id: "settings.usage.balanceHistory.pendingAggregation",
                            defaultMessage: "Recent usage isn\u2019t available yet",
                          })
                        : (0, n.jsx)(K.Gr, { value: i.remaining / 100, style: "percent", maximumFractionDigits: 1 }),
                    ],
                  })
                : null
            }),
            (Z[63] = ea),
            (Z[64] = eP),
            (Z[65] = en),
            (Z[66] = U))
          : (U = Z[66]),
        Z[67] !== eW || Z[68] !== D || Z[69] !== U
          ? ((q = (0, n.jsx)(tU.m, { active: eW, cursor: D, filterNull: !1, content: U })),
            (Z[67] = eW),
            (Z[68] = D),
            (Z[69] = U),
            (Z[70] = q))
          : (q = Z[70]),
        Z[71] === Symbol.for("react.memo_cache_sentinel") ? ((H = [2, 2, 0, 0]), (Z[71] = H)) : (H = Z[71]),
        Z[72] !== eR || Z[73] !== eP
          ? ((z = (0, n.jsx)(tF.yP, {
              dataKey: "remaining",
              name: "remaining",
              fill: tB.sh,
              maxBarSize: 44,
              isAnimationActive: !1,
              radius: H,
              shape: (e) =>
                (0, n.jsx)(tq.M, {
                  ...e,
                  pointerEvents: "none",
                  fillOpacity: null == eR || eP?.[e.originalDataIndex]?.timestamp === eR.timestamp ? 1 : 0.5,
                }),
            })),
            (Z[72] = eR),
            (Z[73] = eP),
            (Z[74] = z))
          : (z = Z[74]),
        Z[75] !== eB ||
        Z[76] !== eP ||
        Z[77] !== tJ ||
        Z[78] !== _ ||
        Z[79] !== w ||
        Z[80] !== A ||
        Z[81] !== k ||
        Z[82] !== E ||
        Z[83] !== T ||
        Z[84] !== I ||
        Z[85] !== eG ||
        Z[86] !== O ||
        Z[87] !== q ||
        Z[88] !== z
          ? ((B = (0, n.jsxs)(eB, {
              data: eP,
              onMouseDown: tJ,
              onMouseMove: _,
              onMouseLeave: w,
              accessibilityLayer: !0,
              margin: A,
              children: [k, E, T, I, eG, O, q, z],
            })),
            (Z[75] = eB),
            (Z[76] = eP),
            (Z[77] = tJ),
            (Z[78] = _),
            (Z[79] = w),
            (Z[80] = A),
            (Z[81] = k),
            (Z[82] = E),
            (Z[83] = T),
            (Z[84] = I),
            (Z[85] = eG),
            (Z[86] = O),
            (Z[87] = q),
            (Z[88] = z),
            (Z[89] = B))
          : (B = Z[89]),
        Z[90] !== ez || Z[91] !== ey || Z[92] !== y || Z[93] !== B || Z[94] !== ex
          ? ((G = (0, n.jsx)(ez, {
              consumerAnalytics: !0,
              scope: "consumer",
              isTooltipDismissed: ex,
              onTooltipDismissedChange: ey,
              onResetHover: y,
              children: B,
            })),
            (Z[90] = ez),
            (Z[91] = ey),
            (Z[92] = y),
            (Z[93] = B),
            (Z[94] = ex),
            (Z[95] = G))
          : (G = Z[95]),
        Z[96] !== eD ||
        Z[97] !== g ||
        Z[98] !== eU ||
        Z[99] !== eF ||
        Z[100] !== eq ||
        Z[101] !== eH ||
        Z[102] !== p ||
        Z[103] !== x ||
        Z[104] !== G
          ? (($ = (0, n.jsx)(eD, {
              activeSeriesKey: null,
              balanceHistory: !0,
              consumerAnalytics: !0,
              fillChartHeight: !0,
              scope: "consumer",
              series: g,
              hasData: eU,
              title: null,
              totalDescription: eF,
              total: eq,
              totalLabel: eH,
              status: p,
              emptyMessage: x,
              children: G,
            })),
            (Z[96] = eD),
            (Z[97] = g),
            (Z[98] = eU),
            (Z[99] = eF),
            (Z[100] = eq),
            (Z[101] = eH),
            (Z[102] = p),
            (Z[103] = x),
            (Z[104] = G),
            (Z[105] = $))
          : ($ = Z[105]),
        Z[106] !== eO.Content || Z[107] !== $
          ? ((W = (0, n.jsx)(eO.Content, { children: $ })), (Z[106] = eO.Content), (Z[107] = $), (Z[108] = W))
          : (W = Z[108]),
        Z[109] !== el
          ? ((V = el?.visibleSettingsSections.some(tZ)
              ? (0, n.jsxs)(j.$, {
                  className: "underline-offset-2 hover:underline focus-visible:underline",
                  color: "ghostMuted",
                  size: "inline",
                  onClick: () => el.onSelectSection("analytics"),
                  children: [
                    (0, n.jsx)(b.A, {
                      id: "settings.usage.balanceHistory.viewHistory",
                      defaultMessage: "View usage history",
                    }),
                    (0, n.jsx)(tz.$XR, {}),
                  ],
                })
              : null),
            (Z[109] = el),
            (Z[110] = V))
          : (V = Z[110]),
        Z[111] !== V
          ? ((X = (0, n.jsx)(N.X.Footer, { variant: "action", children: V })), (Z[111] = V), (Z[112] = X))
          : (X = Z[112]),
        Z[113] !== eL || Z[114] !== W || Z[115] !== X || Z[116] !== h
          ? ((Y = (0, n.jsxs)(eL, { children: [h, W, X] })),
            (Z[113] = eL),
            (Z[114] = W),
            (Z[115] = X),
            (Z[116] = h),
            (Z[117] = Y))
          : (Y = Z[117]),
        Y
      )
    }
    function tZ(e) {
      let { slug: t } = e
      return "analytics" === t
    }
    function tQ(e) {
      return (0, n.jsx)(tG.ps, { ...e })
    }
    function tJ(e, t) {
      return t.preventDefault()
    }
    function t0(e) {
      return {
        id: String(e),
        label: (0, n.jsx)(b.A, {
          id: "settings.usage.balanceHistory.windowLabel",
          defaultMessage: "{minutes, select, 300 {5-hour} other {Weekly}}",
          values: { minutes: e },
        }),
      }
    }
    function t1(e) {
      let t,
        s,
        a,
        l,
        r = (0, i.c)(12),
        { x: o, y: u, width: c, height: d, fill: m, onHoverChange: h } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(b.A, {
              id: "settings.usage.balanceHistory.pendingAggregation",
              defaultMessage: "Recent usage isn\u2019t available yet",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== h
          ? ((s = () => h(!0)), (a = () => h(!1)), (r[1] = h), (r[2] = s), (r[3] = a))
          : ((s = r[2]), (a = r[3])),
        r[4] !== m || r[5] !== d || r[6] !== s || r[7] !== a || r[8] !== c || r[9] !== o || r[10] !== u
          ? ((l = (0, n.jsx)(tr.m, {
              side: "top",
              align: "end",
              openDelay: 0,
              content: t,
              children: (0, n.jsx)("rect", {
                x: o,
                y: u,
                width: c,
                height: d,
                fill: m,
                pointerEvents: "all",
                onPointerEnter: s,
                onPointerLeave: a,
              }),
            })),
            (r[4] = m),
            (r[5] = d),
            (r[6] = s),
            (r[7] = a),
            (r[8] = c),
            (r[9] = o),
            (r[10] = u),
            (r[11] = l))
          : (l = r[11]),
        l
      )
    }
    s("qF12")
    var t2 = s("jdiu"),
      t3 = s("eFxf")
    function t5() {
      let e,
        t,
        s,
        a = (0, i.c)(10),
        l = (0, _.gh)(en.u),
        r = (0, M.b)(),
        { accountId: o } = (0, v.As)(),
        { data: u } = (0, eF.YL)(),
        c = (0, P.AS)(),
        d = (0, _.Ul)(t2.jc)
      return (
        a[0] !== o || a[1] !== u || a[2] !== r || a[3] !== l || a[4] !== c
          ? ((e = (e) => {
              ;((0, t3.Ih)(c),
                (0, t3.uS)(l, {
                  audience: "workspace",
                  checkoutKind: "standalone_credit",
                  entryPoint: "usage_settings_purchase_cta",
                }),
                (0, t2.nZ)({
                  scope: l,
                  navigateToPurchase: r,
                  accountId: o,
                  currentAccount: u,
                  event: e,
                  statsigClient: c,
                }))
            }),
            (a[0] = o),
            (a[1] = u),
            (a[2] = r),
            (a[3] = l),
            (a[4] = c),
            (a[5] = e))
          : (e = a[5]),
        a[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(b.A, {
              id: "settings.usage.credit.balance.addBusinessCredits",
              defaultMessage: "Add more",
            })),
            (a[6] = t))
          : (t = a[6]),
        a[7] !== d || a[8] !== e
          ? ((s = (0, n.jsx)(j.$, {
              color: "secondary",
              disabled: d,
              loading: d,
              size: "toolbar",
              onClick: e,
              children: t,
            })),
            (a[7] = d),
            (a[8] = e),
            (a[9] = s))
          : (s = a[9]),
        s
      )
    }
    var t4 = s("LfMl"),
      t6 = s("WePE"),
      t8 = s("Kwur")
    function t9(e) {
      let t,
        s = (0, i.c)(6),
        { canPurchaseCredits: a, renderCreditBalance: l } = e,
        r = void 0 === a || a,
        { accountId: o, authMethod: u, userId: c } = (0, v.As)(),
        { data: d } = (0, eF.YL)()
      if (
        "chatgpt" !== u ||
        null == o ||
        null == c ||
        d?.id !== o ||
        "workspace" !== d.structure ||
        "account-owner" !== d.account_user_role ||
        !(0, m.Hw)(d.plan_type)
      ) {
        let e
        return (s[0] !== l ? ((e = l?.(0) ?? null), (s[0] = l), (s[1] = e)) : (e = s[1]), e)
      }
      return (
        s[2] !== o || s[3] !== r || s[4] !== l
          ? ((t = (0, n.jsx)(t7, { accountId: o, canPurchaseCredits: r, renderCreditBalance: l }, o)),
            (s[2] = o),
            (s[3] = r),
            (s[4] = l),
            (s[5] = t))
          : (t = s[5]),
        t
      )
    }
    function t7(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c,
        d,
        m,
        h,
        g,
        f,
        p,
        x,
        y,
        w,
        S,
        k,
        E,
        N,
        I,
        R = (0, i.c)(80),
        { accountId: L, canPurchaseCredits: O, renderCreditBalance: U } = e,
        q = (0, _.gh)(en.u),
        H = (0, F.A)(),
        { authMethod: z, userId: B } = (0, v.As)(),
        { data: G } = (0, eF.YL)(),
        $ = (0, P.AS)(),
        W = (0, M.b)(),
        [V, X] = (0, l.useState)(!1)
      ;(R[0] !== L || R[1] !== z || R[2] !== B
        ? ((t = ["workspace-auto-reload-policy", z, B, L]), (R[0] = L), (R[1] = z), (R[2] = B), (R[3] = t))
        : (t = R[3]),
        R[4] !== L
          ? ((s = (e) => {
              let { signal: t } = e
              return t8.Request.safeGet("/pageConfigs/billing", { additionalHeaders: { [eL.zBc]: L }, signal: t })
            }),
            (R[4] = L),
            (R[5] = s))
          : (s = R[5]),
        R[6] !== t || R[7] !== s
          ? ((a = { queryKey: t, queryFn: s, staleTime: eo.D.ONE_MINUTE, refetchOnWindowFocus: "always" }),
            (R[6] = t),
            (R[7] = s),
            (R[8] = a))
          : (a = R[8]))
      let { data: Y, isPending: K, isError: Z, refetch: Q } = (0, C.I)(a),
        J =
          Y?.credits.eligible === !0 &&
          Y.credits.credit_policy?.kind === "business" &&
          !0 === Y.credits.credit_policy.can_manage_auto_reload
      R[9] !== J
        ? ((r = { enabled: J, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (R[9] = J), (R[10] = r))
        : (r = R[10])
      let { data: ee, isPending: es, isError: ei, refetch: ea } = (0, A.q7)(r)
      R[11] !== J ? ((o = { enabled: J, refetchOnWindowFocus: "always" }), (R[11] = J), (R[12] = o)) : (o = R[12])
      let { data: el, isPending: er, isError: eu, refetch: ec } = (0, A.Ko)(o)
      R[13] !== J ? ((u = { enabled: J }), (R[13] = J), (R[14] = u)) : (u = R[14])
      let { data: ed } = (0, _._U)(A.pb, J || O ? L : null, u)
      R[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { analyticsSurface: "wham_usage_dashboard" }), (R[15] = c))
        : (c = R[15])
      let em = (0, A.MU)(c),
        eh = !ee?.isEnabled && ee?.paymentMethod == null,
        eg = K || (!Z && J && (es || (!ei && eh && er))),
        ef = !Z && J && null != ee && !ei && !(eh && (eu || (el?.payment_methods.length ?? 0) === 0))
      R[16] !== O || R[17] !== ef || R[18] !== ed
        ? ((d = (ef || O) && ed?.balance != null && Number.isFinite(Number(ed.balance))),
          (R[16] = O),
          (R[17] = ef),
          (R[18] = ed),
          (R[19] = d))
        : (d = R[19])
      let ep = d
      ;(R[20] !== L || R[21] !== z || R[22] !== ep || R[23] !== B
        ? ((m = (0, A.tj)({ accountId: L, authMethod: z, userId: B, enabled: ep })),
          (R[20] = L),
          (R[21] = z),
          (R[22] = ep),
          (R[23] = B),
          (R[24] = m))
        : (m = R[24]),
        R[25] !== L
          ? ((h = async (e) => {
              let { signal: t } = e
              return (
                await t8.Request.safeGet("/subscriptions/credits/discount-offer", {
                  additionalHeaders: { [eL.zBc]: L },
                  signal: t,
                })
              ).offer
            }),
            (R[25] = L),
            (R[26] = h))
          : (h = R[26]),
        R[27] !== h || R[28] !== m ? ((g = { ...m, queryFn: h }), (R[27] = h), (R[28] = m), (R[29] = g)) : (g = R[29]))
      let { data: ex, isError: ey, isFetching: e_ } = (0, C.I)(g),
        eb = !ep || ey || e_ ? null : ex
      R[30] !== eb?.auto_reload || R[31] !== ef || R[32] !== ee?.isEnabled
        ? ((f = ef && ee?.isEnabled === !1 ? (eb?.auto_reload?.tiers.reduce(st, 0) ?? 0) : 0),
          (R[30] = eb?.auto_reload),
          (R[31] = ef),
          (R[32] = ee?.isEnabled),
          (R[33] = f))
        : (f = R[33])
      let ev = f
      if (R[34] !== eb || R[35] !== O || R[36] !== eg || R[37] !== ev || R[38] !== U) {
        let e = O && !eg && 0 === ev ? (eb?.one_time.tiers.reduce(se, 0) ?? 0) : 0
        ;((p = U?.(e)), (R[34] = eb), (R[35] = O), (R[36] = eg), (R[37] = ev), (R[38] = U), (R[39] = p))
      } else p = R[39]
      let ej = p
      if (Z || (J && (ei || (eh && eu)))) {
        let e, t, s, i, a
        return (
          R[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(b.A, {
                id: "settings.usage.autoTopUp.workspace.loadError",
                defaultMessage: "Could not load automatic reload settings",
              })),
              (R[40] = e))
            : (e = R[40]),
          R[41] !== J || R[42] !== eh || R[43] !== Q || R[44] !== ec || R[45] !== ea
            ? ((t = () => {
                ;(Q(), J && (ea(), eh && ec()))
              }),
              (R[41] = J),
              (R[42] = eh),
              (R[43] = Q),
              (R[44] = ec),
              (R[45] = ea),
              (R[46] = t))
            : (t = R[46]),
          R[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(b.A, { id: "settings.usage.load.retry", defaultMessage: "Retry" })), (R[47] = s))
            : (s = R[47]),
          R[48] !== t
            ? ((i = (0, n.jsx)(T.ic, {
                label: e,
                control: (0, n.jsx)(j.$, { color: "secondary", size: "toolbar", onClick: t, children: s }),
              })),
              (R[48] = t),
              (R[49] = i))
            : (i = R[49]),
          R[50] !== ej || R[51] !== i
            ? ((a = (0, n.jsxs)(n.Fragment, { children: [ej, i] })), (R[50] = ej), (R[51] = i), (R[52] = a))
            : (a = R[52]),
          a
        )
      }
      return ef && null != ee
        ? (R[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, n.jsx)(b.A, {
                id: "settings.usage.credit.balance.autoReloadLabel",
                defaultMessage: "Automatic reload",
              })),
              (R[53] = x))
            : (x = R[53]),
          R[54] !== ev
            ? ((y = ev > 0 ? (0, n.jsx)(D.u1, { discountPercent: ev }) : null), (R[54] = ev), (R[55] = y))
            : (y = R[55]),
          R[56] !== H || R[57] !== ee.isEnabled
            ? ((w = ee.isEnabled
                ? H.formatMessage({
                    id: "settings.usage.credit.balance.manageAutoReload",
                    defaultMessage: "Manage auto-reload",
                  })
                : H.formatMessage({
                    id: "settings.usage.credit.balance.setupAutoReload",
                    defaultMessage: "Set up auto-reload",
                  })),
              (R[56] = H),
              (R[57] = ee.isEnabled),
              (R[58] = w))
            : (w = R[58]),
          R[59] === Symbol.for("react.memo_cache_sentinel") ? ((S = () => X(!0)), (R[59] = S)) : (S = R[59]),
          R[60] !== ee.isEnabled || R[61] !== w
            ? ((k = (0, n.jsx)(et.l, { checked: ee.isEnabled, ariaLabel: w, onChange: S })),
              (R[60] = ee.isEnabled),
              (R[61] = w),
              (R[62] = k))
            : (k = R[62]),
          R[63] !== y || R[64] !== k
            ? ((E = (0, n.jsx)(T.ic, { label: x, control: (0, n.jsxs)(n.Fragment, { children: [y, k] }) })),
              (R[63] = y),
              (R[64] = k),
              (R[65] = E))
            : (E = R[65]),
          R[66] !== L ||
          R[67] !== G ||
          R[68] !== V ||
          R[69] !== em ||
          R[70] !== W ||
          R[71] !== q ||
          R[72] !== ee ||
          R[73] !== $ ||
          R[74] !== ed?.balance
            ? ((N = V
                ? (0, n.jsx)(D.bH, {
                    open: !0,
                    showCreditDiscounts: !0,
                    serverState: ee,
                    creditBalance: ed?.balance,
                    paymentAccountId: L,
                    creditPurchaseUrl: `https://chatgpt.com/pricing/credits?account_id=${encodeURIComponent(L)}&audience=workspace`,
                    ...em,
                    onOpenChange: X,
                    onPurchaseCredits: (e) => {
                      ;(e.preventDefault(),
                        (0, t3.Ih)($),
                        (0, t2.nZ)({
                          scope: q,
                          navigateToPurchase: W,
                          accountId: L,
                          currentAccount: G,
                          event: e,
                          statsigClient: $,
                        }))
                    },
                  })
                : null),
              (R[66] = L),
              (R[67] = G),
              (R[68] = V),
              (R[69] = em),
              (R[70] = W),
              (R[71] = q),
              (R[72] = ee),
              (R[73] = $),
              (R[74] = ed?.balance),
              (R[75] = N))
            : (N = R[75]),
          R[76] !== ej || R[77] !== E || R[78] !== N
            ? ((I = (0, n.jsxs)(n.Fragment, { children: [ej, E, N] })),
              (R[76] = ej),
              (R[77] = E),
              (R[78] = N),
              (R[79] = I))
            : (I = R[79]),
          I)
        : (ej ?? null)
    }
    function se(e, t) {
      return Math.max(e, t.percent_off)
    }
    function st(e, t) {
      return Math.max(e, t.percent_off)
    }
    var ss = s("X4FU")
    function sn(e) {
      let t,
        s,
        a,
        l,
        r,
        o,
        u,
        c,
        d = (0, i.c)(62),
        { canPurchaseCredits: m, isPolling: h, rateLimitStatus: g } = e,
        f = (0, _.gh)(en.u),
        { accountId: p, userId: x } = (0, v.As)(),
        y = (0, _.Ul)(Z.o8),
        w = (0, _._U)(t6.Wx, p),
        { data: C, isError: M, isLoading: S } = (0, eF.YL)(),
        k = C?.id ?? null
      d[0] !== p || d[1] !== M || d[2] !== S || d[3] !== g || d[4] !== k || d[5] !== x
        ? ((t = (0, L.jV)({
            authAccountId: p,
            authUserId: x,
            currentAccountId: k,
            isCurrentAccountError: M,
            isCurrentAccountLoading: S,
            rateLimitStatus: g,
          })),
          (d[0] = p),
          (d[1] = M),
          (d[2] = S),
          (d[3] = g),
          (d[4] = k),
          (d[5] = x),
          (d[6] = t))
        : (t = d[6])
      let E = t,
        P = M || C?.id !== p ? null : C.account_user_role,
        R = "account-owner" === P,
        O = R || "account-admin" === P,
        D = g?.spend_control?.individual_limit,
        U = g?.credits?.has_credits === !1,
        F = null != P && !O && null != D && 0 >= Number(D.remaining),
        H = E && F
      d[7] !== p || d[8] !== H ? ((s = { accountId: p, enabled: H }), (d[7] = p), (d[8] = H), (d[9] = s)) : (s = d[9])
      let { data: z, isError: B, isLoading: G, refetch: $ } = (0, A.sl)(s),
        W = D?.reset_at ?? null
      d[10] !== W ? ((a = (0, e9.tB)(W)), (d[10] = W), (d[11] = a)) : (a = d[11])
      let V = a,
        X = F && z?.kind === "custom" ? z.instructions : null
      d[12] !== p || d[13] !== E || d[14] !== y || d[15] !== x
        ? ((l = E && null != p && null != y ? { accountId: p, userId: x, requestUserId: y } : null),
          (d[12] = p),
          (d[13] = E),
          (d[14] = y),
          (d[15] = x),
          (d[16] = l))
        : (l = d[16])
      let Y = l,
        K = (0, _._U)(t6.R6, Y),
        Q = K.hasPendingRequest
      if (
        d[17] !== P ||
        d[18] !== F ||
        d[19] !== R ||
        d[20] !== D?.source ||
        d[21] !== g?.rate_limit_upsell ||
        d[22] !== z?.kind ||
        d[23] !== Y ||
        d[24] !== w ||
        d[25] !== U
      ) {
        if (((r = null), null != Y && null != P && !R && (U || (F && z?.kind === "openai_native")) && !0 === w)) {
          let e
          d[27] !== g?.rate_limit_upsell?.ctas || d[28] !== g?.rate_limit_upsell?.ctas.find
            ? ((e = g?.rate_limit_upsell?.ctas.find(si)?.reason),
              (d[27] = g?.rate_limit_upsell?.ctas),
              (d[28] = g?.rate_limit_upsell?.ctas.find),
              (d[29] = e))
            : (e = d[29])
          let t = e
          null != t
            ? (r = t)
            : F && D?.source === "account_user_spend_controls"
              ? (r = "INDIVIDUAL_SPEND_LIMIT_REACHED")
              : F && D?.source === "workspace_spend_controls"
                ? (r = "SEAT_TYPE_SPEND_LIMIT_REACHED")
                : U && (r = "WORKSPACE_CREDITS_EXHAUSTED")
        }
        ;((d[17] = P),
          (d[18] = F),
          (d[19] = R),
          (d[20] = D?.source),
          (d[21] = g?.rate_limit_upsell),
          (d[22] = z?.kind),
          (d[23] = Y),
          (d[24] = w),
          (d[25] = U),
          (d[26] = r))
      } else r = d[26]
      return E && null != g && (null != D || R || U)
        ? (d[30] !== P || d[31] !== O || d[32] !== D || d[33] !== U
            ? ((o =
                null == P || O || null == D
                  ? (0, n.jsx)(b.A, {
                      id: "settings.usage.businessCredits.description",
                      defaultMessage:
                        "Shared workspace credits let you keep using Work and Codex beyond included usage.",
                    })
                  : U
                    ? (0, n.jsx)(b.A, {
                        id: "settings.usage.businessCredits.member.unavailableDescription",
                        defaultMessage:
                          "Shared workspace credits let you keep using Work and Codex beyond included usage. Monthly credit limits are set by your workspace owner.",
                      })
                    : (0, n.jsx)(b.A, {
                        id: "settings.usage.businessCredits.member.description",
                        defaultMessage: "Monthly credit limits are set by your workspace owner.",
                      })),
              (d[30] = P),
              (d[31] = O),
              (d[32] = D),
              (d[33] = U),
              (d[34] = o))
            : (o = d[34]),
          d[35] !== p ||
          d[36] !== P ||
          d[37] !== O ||
          d[38] !== m ||
          d[39] !== F ||
          d[40] !== X ||
          d[41] !== R ||
          d[42] !== h ||
          d[43] !== B ||
          d[44] !== G ||
          d[45] !== D ||
          d[46] !== $ ||
          d[47] !== z ||
          d[48] !== V ||
          d[49] !== f ||
          d[50] !== Q ||
          d[51] !== o ||
          d[52] !== Y ||
          d[53] !== r ||
          d[54] !== K.disabled ||
          d[55] !== K.isSubmitting ||
          d[56] !== w ||
          d[57] !== U
            ? ((u = (e) => {
                let { actions: t } = e,
                  s = null
                if (O)
                  s = (0, n.jsx)(j.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: (e) => {
                      t.increase_spend_cap.onClick(e)
                    },
                    children: (0, n.jsx)(b.A, {
                      id: "settings.usage.businessCredits.increaseLimit",
                      defaultMessage: "Increase monthly limit",
                    }),
                  })
                else if (F && (z?.kind === "openai_native" || (z?.kind === "custom" && z.request_url))) {
                  let e = "custom" !== z.kind && (null != r ? K.disabled : t.request_increase.disabled)
                  s = (0, n.jsx)(j.$, {
                    color: "secondary",
                    size: "toolbar",
                    disabled: e,
                    loading: "custom" !== z.kind && (!1 !== w ? K.isSubmitting : e),
                    onClick: (e) => {
                      "custom" === z.kind && z.request_url
                        ? (0, q.PQ)({ event: e, href: z.request_url, initiator: "open_in_browser_bridge" })
                        : null != Y && null != r
                          ? (0, t6.Zu)(f, Y, r, { surface: "CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS" })
                          : t.request_increase.onClick(e)
                    },
                    children:
                      "custom" !== z.kind && Q
                        ? (0, n.jsx)(b.A, { ...t6.bV.requested })
                        : (0, n.jsx)(b.A, { ...sl.requestUsage }),
                  })
                }
                return (0, n.jsxs)(N.X, {
                  children: [
                    (0, n.jsx)(N.X.Header, { title: (0, n.jsx)(b.A, { ...ss.z.title }), subtitle: o }),
                    (0, n.jsx)(N.X.Content, {
                      children: (0, n.jsxs)(I.t, {
                        children: [
                          null != D
                            ? (0, n.jsx)(T.ic, {
                                label: (0, n.jsx)(b.A, {
                                  id: "settings.usage.businessCredits.monthlyRemaining",
                                  defaultMessage: "{remaining, number} of {limit, number} monthly credits left",
                                  values: {
                                    remaining: Math.max(0, Math.ceil(Number(D.remaining))),
                                    limit: Number(D.limit),
                                  },
                                }),
                                description:
                                  null != V || null != X
                                    ? (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          null != V
                                            ? (0, n.jsx)("div", { children: (0, n.jsx)(ta, { resetAt: V }) })
                                            : null,
                                          null != X
                                            ? (0, n.jsx)("span", {
                                                className: "leading-relaxed whitespace-pre-wrap",
                                                children: X,
                                              })
                                            : null,
                                        ],
                                      })
                                    : null,
                                control: s,
                              })
                            : null,
                          F && (B || G)
                            ? (0, n.jsx)(T.ic, {
                                label: B
                                  ? (0, n.jsx)(b.A, {
                                      id: "settings.usage.businessCredits.requestPolicy.error",
                                      defaultMessage: "Couldn\u2019t load usage request settings",
                                    })
                                  : (0, n.jsx)(b.A, {
                                      id: "settings.usage.businessCredits.requestPolicy.loading",
                                      defaultMessage: "Loading usage request settings\u2026",
                                    }),
                                control: B
                                  ? (0, n.jsx)(j.$, {
                                      color: "secondary",
                                      size: "toolbar",
                                      onClick: () => void $(),
                                      children: (0, n.jsx)(b.A, {
                                        id: "settings.usage.load.retry",
                                        defaultMessage: "Retry",
                                      }),
                                    })
                                  : null,
                              })
                            : null,
                          R && null != p
                            ? (0, n.jsx)(
                                t9,
                                {
                                  canPurchaseCredits: m,
                                  renderCreditBalance: (e) =>
                                    (0, n.jsx)(sa, {
                                      accountId: p,
                                      canPurchaseCredits: m,
                                      isPolling: h,
                                      discountPercent: e,
                                    }),
                                },
                                p,
                              )
                            : null,
                          !R && U
                            ? (0, n.jsx)(T.ic, {
                                label: (0, n.jsx)(b.A, {
                                  id: "settings.usage.businessCredits.unavailable",
                                  defaultMessage: "Workspace credits are unavailable",
                                }),
                                control:
                                  null != P
                                    ? (0, n.jsx)(j.$, {
                                        color: "secondary",
                                        size: "toolbar",
                                        disabled: null != r ? K.disabled : t.notify_owner.disabled,
                                        loading: !1 !== w ? K.isSubmitting : t.notify_owner.disabled,
                                        onClick: (e) => {
                                          null != Y && null != r
                                            ? (0, t6.Zu)(f, Y, r, {
                                                surface: "CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS",
                                              })
                                            : t.notify_owner.onClick(e)
                                        },
                                        children: Q
                                          ? (0, n.jsx)(b.A, { ...t6.bV.requested })
                                          : (0, n.jsx)(b.A, { ...sl.requestUsage }),
                                      })
                                    : null,
                              })
                            : null,
                        ],
                      }),
                    }),
                  ],
                })
              }),
              (d[35] = p),
              (d[36] = P),
              (d[37] = O),
              (d[38] = m),
              (d[39] = F),
              (d[40] = X),
              (d[41] = R),
              (d[42] = h),
              (d[43] = B),
              (d[44] = G),
              (d[45] = D),
              (d[46] = $),
              (d[47] = z),
              (d[48] = V),
              (d[49] = f),
              (d[50] = Q),
              (d[51] = o),
              (d[52] = Y),
              (d[53] = r),
              (d[54] = K.disabled),
              (d[55] = K.isSubmitting),
              (d[56] = w),
              (d[57] = U),
              (d[58] = u))
            : (u = d[58]),
          d[59] !== g || d[60] !== u
            ? ((c = (0, n.jsx)(t4.u, { rateLimitStatus: g, source: "usage_settings_purchase_cta", children: u })),
              (d[59] = g),
              (d[60] = u),
              (d[61] = c))
            : (c = d[61]),
          c)
        : null
    }
    function si(e) {
      return "request_usage" === e.action
    }
    function sa(e) {
      let t,
        s,
        a,
        r,
        o,
        u = (0, i.c)(14),
        { accountId: c, canPurchaseCredits: d, isPolling: m, discountPercent: h } = e,
        [g, f] = (0, l.useState)(!1),
        p = m || !g
      u[0] !== p ? ((t = { enabled: p }), (u[0] = p), (u[1] = t)) : (t = u[1])
      let { data: x, isLoading: y, isSuccess: v, isError: j } = (0, _._U)(A.pb, c, t)
      !g && (v || j) && f(!0)
      let w = x?.balance == null ? null : Number(x.balance)
      if (y) {
        let e
        ;(u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.businessCredits.loading",
              defaultMessage: "Loading workspace credits\u2026",
            })),
            (u[2] = e))
          : (e = u[2]),
          (s = e))
      } else if (null != w && Number.isFinite(w)) {
        let e,
          t = Math.max(0, Math.ceil(w))
        ;(u[3] !== t
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.businessCredits.balance.count",
              defaultMessage: "{balance, plural, one {# workspace credit} other {# workspace credits}}",
              values: { balance: t },
            })),
            (u[3] = t),
            (u[4] = e))
          : (e = u[4]),
          (s = e))
      } else {
        let e
        ;(u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(b.A, {
              id: "settings.usage.businessCredits.balanceUnknown",
              defaultMessage: "Workspace credit balance unavailable",
            })),
            (u[5] = e))
          : (e = u[5]),
          (s = e))
      }
      return (
        u[6] !== s ? ((a = (0, n.jsx)("span", { role: "status", children: s })), (u[6] = s), (u[7] = a)) : (a = u[7]),
        u[8] !== d || u[9] !== h
          ? ((r = d
              ? (0, n.jsxs)("div", {
                  className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
                  children: [h > 0 ? (0, n.jsx)(D.u1, { discountPercent: h }) : null, (0, n.jsx)(t5, {})],
                })
              : null),
            (u[8] = d),
            (u[9] = h),
            (u[10] = r))
          : (r = u[10]),
        u[11] !== a || u[12] !== r
          ? ((o = (0, n.jsx)(T.ic, { label: a, control: r })), (u[11] = a), (u[12] = r), (u[13] = o))
          : (o = u[13]),
        o
      )
    }
    let sl = (0, K.YK)({
      requestUsage: { id: "settings.usage.businessCredits.requestUsage", defaultMessage: "Request more usage" },
    })
    var sr = s("AKNp")
    function so(e) {
      let t,
        s = (0, i.c)(3),
        { plan: a, showUnifiedUsage: l } = e,
        r = void 0 !== l && l
      return (
        s[0] !== a || s[1] !== r
          ? ((t = (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsx)(su, { plan: a, showUnifiedUsage: r, respectUpsellSuppression: !1 }),
                }),
                null,
              ],
            })),
            (s[0] = a),
            (s[1] = r),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function su(e) {
      let t,
        s,
        a,
        l,
        r,
        o = (0, i.c)(15),
        { plan: u, respectUpsellSuppression: c, showUnifiedUsage: d } = e
      o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (o[0] = t)) : (t = o[0])
      let m = (0, H.q)(t),
        h = (0, G.j)()
      o[1] !== u ? ((s = (0, z.m6)(u)), (o[1] = u), (o[2] = s)) : (s = o[2])
      let g = s,
        f = (0, P.AS)()
      if (null != g && null != (0, z.N8)(u) && (!c || (0, sr.ku)(f, "Agent usage settings upgrade link"))) {
        let e, t
        o[3] !== m || o[4] !== h || o[5] !== g
          ? ((e = (e) =>
              (0, n.jsx)("span", {
                className: "inline-flex",
                children: (0, n.jsx)(j.$, {
                  color: "ghostAccent",
                  size: "inline",
                  onClick: (e) => {
                    h({ currentPlan: g.pricePlan, event: e, getPricingUrl: m, source: "usage_settings_plan_row" })
                  },
                  children: e,
                }),
              })),
            (o[3] = m),
            (o[4] = h),
            (o[5] = g),
            (o[6] = e))
          : (e = o[6])
        let s = e
        ;(o[7] !== d || o[8] !== s
          ? ((t = d
              ? (0, n.jsx)(b.A, {
                  id: "settings.usage.personalLimits.upgradeDescription.unified",
                  defaultMessage:
                    "Shared across all of ChatGPT and Codex. For more usage, <upgrade>upgrade your plan</upgrade>.",
                  values: { upgrade: s },
                })
              : (0, n.jsx)(b.A, {
                  id: "settings.usage.personalLimits.upgradeDescription",
                  defaultMessage:
                    "Shared across Codex, Work, Workspace Agents, and ChatGPT for Excel. Chat conversations are not included. To increase usage, <upgrade>upgrade your plan</upgrade>",
                  values: { upgrade: s },
                })),
            (o[7] = d),
            (o[8] = s),
            (o[9] = t))
          : (t = o[9]),
          (a = t))
      } else {
        let e
        ;(o[10] !== d
          ? ((e = d
              ? (0, n.jsx)(b.A, {
                  id: "settings.usage.personalLimits.sharedDescription.unified",
                  defaultMessage: "Shared across all of ChatGPT and Codex.",
                })
              : (0, n.jsx)(b.A, {
                  id: "settings.usage.personalLimits.sharedDescription",
                  defaultMessage:
                    "Shared across Codex, Work, Workspace Agents, and ChatGPT for Excel. Chat conversations are not included.",
                })),
            (o[10] = d),
            (o[11] = e))
          : (e = o[11]),
          (a = e))
      }
      return (
        o[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(b.A, { id: "settings.usage.personalLimits.title", defaultMessage: "Plan limits" })),
            (o[12] = l))
          : (l = o[12]),
        o[13] !== a ? ((r = (0, n.jsx)(N.X.Header, { title: l, subtitle: a })), (o[13] = a), (o[14] = r)) : (r = o[14]),
        r
      )
    }
    let sc = () => x()?.appId ?? ""
    function sd(e) {
      let t,
        s,
        a,
        o,
        c,
        h,
        g,
        y,
        w,
        N,
        I,
        F,
        q,
        H,
        z,
        B,
        G,
        W,
        V,
        X,
        Y,
        K,
        Z,
        Q,
        J,
        ee,
        et,
        es,
        en,
        ei,
        ea,
        el = (0, i.c)(156),
        { isPolling: er } = e,
        { search: eo } = (0, r.zy)(),
        eu = (0, M.b)()
      ;(el[0] !== eo
        ? ((t = () =>
            (function (e) {
              let t = new URLSearchParams(e)
              if (!t.has("initiator_client_id")) return
              let s = t.getAll("initiator_client_id"),
                n = s[0] ?? ""
              try {
                if (1 === s.length && /^[A-Za-z0-9_-]{1,255}$/.test(n)) {
                  let [e, t] = (sessionStorage.getItem(f) ?? "").split(":")
                  if (t === n) {
                    let t = performance.getEntriesByType("navigation")[0]
                    if (Number(e) > performance.timeOrigin || t?.type !== "navigate") return
                  }
                  sessionStorage.setItem(f, `${Date.now() + 36e5}:${n}`)
                } else sessionStorage.removeItem(f)
                window.dispatchEvent(new Event(f))
              } catch {}
            })(eo)),
          (s = [eo]),
          (el[0] = eo),
          (el[1] = t),
          (el[2] = s))
        : ((t = el[1]), (s = el[2])),
        (0, l.useEffect)(t, s))
      let { data: ec, isLoading: ed, isError: em } = (0, _.Ul)(k.Ix),
        {
          autoReloadSettings: eh,
          canManageCreditSettings: eg,
          canPurchaseBusinessCredits: ef,
          canViewCreditSettings: ep,
          isUsageSettingsVisible: ex,
          isUsageSettingsAccessLoading: ey,
          plan: e_,
        } = (0, u.AH)(ec?.credits?.balance != null, "usage"),
        eb = er && ex
      el[3] !== eb ? ((a = { enabled: eb }), (el[3] = eb), (el[4] = a)) : (a = el[4])
      let { refetch: ev } = (0, _.Ul)(k.qR, a),
        ej = (0, l.useSyncExternalStore)(p, sc, sg),
        { accountId: ew, authMethod: eA, userId: eC } = (0, v.As)(),
        eM = (0, P.Zj)("185496087"),
        eS = (0, P.Zj)("2523809281"),
        { data: ek, isPending: eE } = (function () {
          let e,
            t = (0, i.c)(3),
            { accountId: s, userId: n } = (0, v.As)()
          return (
            t[0] !== s || t[1] !== n
              ? ((e = { queryKey: ["usage-settings", "chatpass-apps", s, n], enabled: !1, staleTime: 1 / 0 }),
                (t[0] = s),
                (t[1] = n),
                (t[2] = e))
              : (e = t[2]),
            (0, C.I)(e)
          )
        })(),
        eN = eM && "chatgpt" === eA && null != ew && null != eC
      el[5] !== ek?.items || el[6] !== ek?.items.some || el[7] !== eN || el[8] !== ej
        ? ((o = eN && !!ek?.items.some((e) => e.id === ej)),
          (el[5] = ek?.items),
          (el[6] = ek?.items.some),
          (el[7] = eN),
          (el[8] = ej),
          (el[9] = o))
        : (o = el[9])
      let eT = o
      el[10] !== ew || el[11] !== eN || el[12] !== ej || el[13] !== eC
        ? ((c = null), (el[10] = ew), (el[11] = eN), (el[12] = ej), (el[13] = eC), (el[14] = c))
        : (c = el[14])
      let eI = c
      el[15] !== eI ? ((h = { key: eI, complete: !1 }), (el[15] = eI), (el[16] = h)) : (h = el[16])
      let [eP, eL] = (0, l.useState)(h)
      ;(eP.key !== eI ? eL({ key: eI, complete: !1 }) : eE || eP.complete || eL({ key: eI, complete: !0 }),
        el[17] !== eI || el[18] !== eP.complete || el[19] !== eE
          ? ((g = () => {
              if (null == eI || !eE || eP.complete) return
              let e = window.setTimeout(() => {
                eL({ key: eI, complete: !0 })
              }, 700)
              return () => window.clearTimeout(e)
            }),
            (y = [eI, eE, eP.complete]),
            (el[17] = eI),
            (el[18] = eP.complete),
            (el[19] = eE),
            (el[20] = g),
            (el[21] = y))
          : ((g = el[20]), (y = el[21])),
        (0, l.useEffect)(g, y))
      let eO = null != eI && eE && !(eP.key === eI && eP.complete)
      el[22] !== eT || el[23] !== eS || el[24] !== ej || el[25] !== eo
        ? ((w = !1), (el[22] = eT), (el[23] = eS), (el[24] = ej), (el[25] = eo), (el[26] = w))
        : (w = el[26])
      let eD = w
      el[27] !== ek?.items || el[28] !== ek?.items.find || el[29] !== eN || el[30] !== eu
        ? ((N = (e) => {
            let t = x()
            return (ek?.items.find((e) => e.id === t?.appId), !1)
          }),
          (el[27] = ek?.items),
          (el[28] = ek?.items.find),
          (el[29] = eN),
          (el[30] = eu),
          (el[31] = N))
        : (N = el[31])
      let eU = N,
        eF = (0, E.I)(),
        eq = (0, P.AS)(),
        eH = (0, P.Zj)("1405076622"),
        ez = (0, P.Zj)("1748121887"),
        eB = (0, S.k)(eF),
        [eG, e$] = (0, l.useState)(null),
        [eW, eV] = (0, l.useState)(null)
      el[32] !== e_ ? ((I = (0, m.uz)(e_)), (el[32] = e_), (el[33] = I)) : (I = el[33])
      let eX = I,
        eY = e_ === O.x.ENT26
      el[34] !== eH || el[35] !== e_
        ? ((F = (0, R.U9)(e_, eH)), (el[34] = eH), (el[35] = e_), (el[36] = F))
        : (F = el[36])
      let eK = F,
        eZ = (ez || !1) && eK,
        eQ = eX && ex && !ey
      el[37] !== eg ? ((q = { enabled: eg }), (el[37] = eg), (el[38] = q)) : (q = el[38])
      let { data: eJ } = (0, A.sD)(q)
      el[39] !== eJ?.one_time.tiers || el[40] !== eJ?.one_time.tiers.reduce
        ? ((H = eJ?.one_time.tiers.reduce(sh, 0) ?? 0),
          (el[39] = eJ?.one_time.tiers),
          (el[40] = eJ?.one_time.tiers.reduce),
          (el[41] = H))
        : (H = el[41])
      let e0 = H
      el[42] !== eJ?.auto_reload?.tiers || el[43] !== eJ?.auto_reload?.tiers.reduce
        ? ((z = eJ?.auto_reload?.tiers.reduce(sm, 0) ?? 0),
          (el[42] = eJ?.auto_reload?.tiers),
          (el[43] = eJ?.auto_reload?.tiers.reduce),
          (el[44] = z))
        : (z = el[44])
      let e1 = z
      el[45] !== eg
        ? ((B = { enabled: eg, refetchOnWindowFocus: "always" }), (el[45] = eg), (el[46] = B))
        : (B = el[46])
      let { data: e3, isPending: e5 } = (0, A.Ko)(B),
        e4 = (e3?.payment_methods.length ?? 0) > 0,
        e6 =
          (0, U.wO)({
            canManageCreditSettings: eg,
            hasPaymentMethodsInventory: null != e3,
            hasSavedPaymentMethod: e4,
          }) && (0, P.XM)(eq, U.pl).get("enabled", !1),
        e8 = { canManageCreditSettings: eg, canAddFirstPaymentMethod: e6, hasSavedPaymentMethod: e4 },
        e9 = (0, U.bF)(e8),
        {
          data: e7,
          isPending: te,
          isError: tt,
          refetch: ts,
        } = (0, A.q7)({ enabled: e9, includePaymentMethod: !0, refetchOnWindowFocus: "always" }),
        tn = (0, U._K)(e8, e7)
      el[47] !== eQ || el[48] !== er
        ? ((G = { isPolling: er, enabled: eQ }), (el[47] = eQ), (el[48] = er), (el[49] = G))
        : (G = el[49])
      let { data: ti, isLoading: ta, isError: tl, refetch: tr } = (0, A.Xb)(G)
      el[50] !== ti
        ? ((W = null != (0, L.Li)(ti) && ti?.effective_monthly_limit?.enforcement_mode === "HARD_CAP"),
          (el[50] = ti),
          (el[51] = W))
        : (W = el[51])
      let to = W,
        tu = eQ && to
      el[52] !== tu ? ((V = { enabled: tu }), (el[52] = tu), (el[53] = V)) : (V = el[53])
      let { data: tc, isLoading: td, isError: tm, refetch: th } = (0, A.sl)(V),
        tg = tc?.kind === "openai_native",
        tf = eQ && to && tg
      el[54] !== tf ? ((X = { enabled: tf }), (el[54] = tf), (el[55] = X)) : (X = el[55])
      let { data: tp, isLoading: tx, isError: ty, refetch: t_ } = (0, A.w8)(X),
        tb = (0, A.wU)()
      el[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = { analyticsSurface: "wham_usage_dashboard" }), (el[56] = Y))
        : (Y = el[56])
      let { enableAutoTopUpMutation: tj, updateAutoTopUpMutation: tw, disableAutoTopUpMutation: tA } = (0, A.MU)(Y)
      if (!ex && !ey) return null
      let tC = eX ? (ta && null == ti) || (tu && td && null == tc) || (to && tg && tx && null == tp) : ed && null == ec,
        tM = eX ? (tl && null == ti) || (tu && tm && null == tc) || (to && tg && ty && null == tp) : em && null == ec
      el[57] !== to ||
      el[58] !== eX ||
      el[59] !== ev ||
      el[60] !== t_ ||
      el[61] !== tr ||
      el[62] !== th ||
      el[63] !== tg
        ? ((K = () => {
            eX ? (tr(), to && (th(), tg && t_())) : ev()
          }),
          (el[57] = to),
          (el[58] = eX),
          (el[59] = ev),
          (el[60] = t_),
          (el[61] = tr),
          (el[62] = th),
          (el[63] = tg),
          (el[64] = K))
        : (K = el[64])
      let tS = K
      el[65] !== ec
        ? ((Z = () => {
            e$((e) => e ?? ec ?? null)
          }),
          (el[65] = ec),
          (el[66] = Z))
        : (Z = el[66])
      let tk = Z
      el[67] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = () => {
            e$(null)
          }),
          (el[67] = Q))
        : (Q = el[67])
      let tE = Q
      el[68] !== ec || el[69] !== eG || el[70] !== eB
        ? ((J = () => {
            let e = { animationComplete: !1, rateLimitStatus: eG ?? ec ?? null, refreshComplete: !1 }
            ;(e$(null),
              eV(e),
              eB.start(() => {
                eV((t) => (t === e ? { ...t, animationComplete: !0 } : t))
              }))
          }),
          (el[68] = ec),
          (el[69] = eG),
          (el[70] = eB),
          (el[71] = J))
        : (J = el[71])
      let tN = J
      el[72] !== ec || el[73] !== eW
        ? ((ee =
            null != eW &&
            (function (e, t) {
              return (
                sy(e?.rate_limit?.primary_window, t?.rate_limit?.primary_window) ||
                sy(e?.rate_limit?.secondary_window, t?.rate_limit?.secondary_window) ||
                (!sx(e) && !sx(t))
              )
            })(eW.rateLimitStatus, ec ?? null)),
          (el[72] = ec),
          (el[73] = eW),
          (el[74] = ee))
        : (ee = el[74])
      let tT = ee
      null != eW && eW.animationComplete && !eW.refreshComplete && tT && eV({ ...eW, refreshComplete: !0 })
      let tI = null != eW && !eW.refreshComplete && (!eW.animationComplete || !tT)
      if (ey || tM || tC) {
        let e,
          t,
          s = null
        if (!ey && tM) {
          let t, i, a
          ;(el[75] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(b.A, {
                id: "settings.usage.load.error",
                defaultMessage: "Could not load usage settings.",
              })),
              (el[75] = t))
            : (t = el[75]),
            (e = t),
            el[76] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(b.A, { id: "settings.usage.load.retry", defaultMessage: "Retry" })), (el[76] = i))
              : (i = el[76]),
            el[77] !== tS
              ? ((a = (0, n.jsx)(j.$, { color: "secondary", size: "toolbar", onClick: tS, children: i })),
                (el[77] = tS),
                (el[78] = a))
              : (a = el[78]),
            (s = a))
        } else {
          let t
          ;(el[79] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(b.A, {
                id: "settings.usage.load.loading",
                defaultMessage: "Loading usage settings\u2026",
              })),
              (el[79] = t))
            : (t = el[79]),
            (e = t))
        }
        return (
          el[80] !== s || el[81] !== e
            ? ((t = (0, n.jsx)(sp, { rowLabel: e, rowControl: s })), (el[80] = s), (el[81] = e), (el[82] = t))
            : (t = el[82]),
          t
        )
      }
      let tP = ec?.show_unified_usage_in_settings === !0
      el[83] !== e7 || el[84] !== tn || el[85] !== tt || el[86] !== ts
        ? ((et =
            tn && null == e7
              ? (0, n.jsx)(T.ic, {
                  label: tt
                    ? (0, n.jsx)(b.A, {
                        id: "settings.usage.autoTopUp.load.error",
                        defaultMessage: "Could not load automatic reload settings",
                      })
                    : (0, n.jsx)(d.j, {
                        children: (0, n.jsx)(b.A, {
                          id: "settings.usage.autoTopUp.load.loading",
                          defaultMessage: "Loading automatic reload settings\u2026",
                        }),
                      }),
                  control: tt
                    ? (0, n.jsx)(j.$, {
                        color: "secondary",
                        size: "toolbar",
                        onClick: () => void ts(),
                        children: (0, n.jsx)(b.A, { id: "settings.usage.load.retry", defaultMessage: "Retry" }),
                      })
                    : void 0,
                })
              : null),
          (el[83] = e7),
          (el[84] = tn),
          (el[85] = tt),
          (el[86] = ts),
          (el[87] = et))
        : (et = el[87])
      let tR = et,
        tL = null
      if ((0, m.Hw)(e_)) {
        let e,
          t = ec ?? null
        ;(el[88] !== ef || el[89] !== er || el[90] !== t
          ? ((e = (0, n.jsx)(sn, { canPurchaseCredits: ef, isPolling: er, rateLimitStatus: t })),
            (el[88] = ef),
            (el[89] = er),
            (el[90] = t),
            (el[91] = e))
          : (e = el[91]),
          (tL = e))
      } else if ((tn && null != e7) || (eg && eD)) {
        let e,
          t = tn ? e7 : void 0,
          s = ec?.credits ?? null
        ;(el[92] !== tR ||
        el[93] !== tA ||
        el[94] !== tj ||
        el[95] !== e4 ||
        el[96] !== eO ||
        el[97] !== e1 ||
        el[98] !== e0 ||
        el[99] !== eU ||
        el[100] !== e_ ||
        el[101] !== eD ||
        el[102] !== tP ||
        el[103] !== t ||
        el[104] !== s ||
        el[105] !== tw
          ? ((e = (0, n.jsx)(D.be, {
              comparePlansPlan: e_,
              showUnifiedUsage: tP,
              showCreditPurchase: eD,
              onPurchaseCredits: eU,
              isCreditPurchasePending: eO,
              serverState: t,
              hasSavedPaymentMethod: e4,
              maximumCreditPurchaseDiscountPercent: e0,
              maximumAutoReloadDiscountPercent: e1,
              creditDetails: s,
              enableAutoTopUpMutation: tj,
              updateAutoTopUpMutation: tw,
              disableAutoTopUpMutation: tA,
              children: tR,
            })),
            (el[92] = tR),
            (el[93] = tA),
            (el[94] = tj),
            (el[95] = e4),
            (el[96] = eO),
            (el[97] = e1),
            (el[98] = e0),
            (el[99] = eU),
            (el[100] = e_),
            (el[101] = eD),
            (el[102] = tP),
            (el[103] = t),
            (el[104] = s),
            (el[105] = tw),
            (el[106] = e))
          : (e = el[106]),
          (tL = e))
      } else if (ep) {
        let e,
          t,
          s = eg && (e5 || (e9 && te))
        el[107] !== eg || el[108] !== tA || el[109] !== eh
          ? ((e =
              eg || null == eh
                ? void 0
                : { isEnabled: eh.isEnabled, isPending: tA.isPending, onDisable: tA.mutateAsync }),
            (el[107] = eg),
            (el[108] = tA),
            (el[109] = eh),
            (el[110] = e))
          : (e = el[110])
        let i = s ? 0 : e0,
          a = ec?.credits ?? null,
          l = null == e3 ? void 0 : e4
        ;(el[111] !== tR ||
        el[112] !== eg ||
        el[113] !== eO ||
        el[114] !== eU ||
        el[115] !== e_ ||
        el[116] !== tP ||
        el[117] !== e ||
        el[118] !== i ||
        el[119] !== a ||
        el[120] !== l
          ? ((t = (0, n.jsx)(D.CK, {
              comparePlansPlan: e_,
              showUnifiedUsage: tP,
              onPurchaseCredits: eU,
              isCreditPurchasePending: eO,
              autoReload: e,
              canPurchaseCredits: eg,
              maximumCreditPurchaseDiscountPercent: i,
              creditDetails: a,
              hasSavedPaymentMethod: l,
              children: tR,
            })),
            (el[111] = tR),
            (el[112] = eg),
            (el[113] = eO),
            (el[114] = eU),
            (el[115] = e_),
            (el[116] = tP),
            (el[117] = e),
            (el[118] = i),
            (el[119] = a),
            (el[120] = l),
            (el[121] = t))
          : (t = el[121]),
          (tL = t))
      }
      el[122] !== er || el[123] !== ep
        ? ((es = (0, n.jsx)(eR, { isPolling: er, showCreditPreference: ep }, "chatpass-settings")),
          (el[122] = er),
          (el[123] = ep),
          (el[124] = es))
        : (es = el[124])
      let tO = es,
        tD = eT ? tO : null
      ;(el[125] !== to ||
      el[126] !== eX ||
      el[127] !== er ||
      el[128] !== tI ||
      el[129] !== eY ||
      el[130] !== tx ||
      el[131] !== e_ ||
      el[132] !== ec ||
      el[133] !== eG ||
      el[134] !== eF ||
      el[135] !== eB ||
      el[136] !== eW?.rateLimitStatus ||
      el[137] !== eZ ||
      el[138] !== tP ||
      el[139] !== tb ||
      el[140] !== tp ||
      el[141] !== ti ||
      el[142] !== tc
        ? ((en = eX
            ? (0, n.jsx)(tv, {
                isPolling: er,
                isUsdWorkspace: eY,
                rateLimitStatus: ec ?? null,
                showEnterpriseMonthlyUsageLimit: !0,
                showUsageBillingLayout: eZ,
                canRequestEnterpriseMonthlyUsageLimit: to,
                workspaceRequestPolicy: tc,
                workspaceMonthlyUsage: ti ?? null,
                workspaceAdminRequests: tp ?? null,
                isWorkspaceAdminRequestsLoading: tx,
                isSavingWorkspaceAdminRequest: tb.isPending,
                saveWorkspaceAdminRequest: tb.mutateAsync,
              })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  tP ? (0, n.jsx)(sf, {}) : null,
                  (0, n.jsx)($, { plan: e_ }),
                  (0, n.jsx)(tv, {
                    isPolling: er,
                    header: (0, n.jsx)(so, { plan: e_, showUnifiedUsage: tP }),
                    fullWidth: !0,
                    showMonthlyUsageLimit: !(0, m.Hw)(e_),
                    isResetFillActive: tI,
                    rateLimitStatus: ec ?? null,
                    resetFillAnimation: eB,
                    resetFillRateLimitStatus: eW?.rateLimitStatus,
                    showResetPurchase: null == eG && !tI,
                  }),
                  (0, n.jsx)(tV, { rateLimitStatus: ec ?? null, reduceMotion: eF }),
                ],
              })),
          (el[125] = to),
          (el[126] = eX),
          (el[127] = er),
          (el[128] = tI),
          (el[129] = eY),
          (el[130] = tx),
          (el[131] = e_),
          (el[132] = ec),
          (el[133] = eG),
          (el[134] = eF),
          (el[135] = eB),
          (el[136] = eW?.rateLimitStatus),
          (el[137] = eZ),
          (el[138] = tP),
          (el[139] = tb),
          (el[140] = tp),
          (el[141] = ti),
          (el[142] = tc),
          (el[143] = en))
        : (en = el[143]),
        el[144] !== tL || el[145] !== tk || el[146] !== tN || el[147] !== eX || el[148] !== tI
          ? ((ei = eX
              ? null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(e2, {
                      isResetFillActive: tI,
                      onResetAttemptCancel: tE,
                      onResetAttemptStart: tk,
                      onResetComplete: tN,
                    }),
                    tL,
                  ],
                })),
            (el[144] = tL),
            (el[145] = tk),
            (el[146] = tN),
            (el[147] = eX),
            (el[148] = tI),
            (el[149] = ei))
          : (ei = el[149]))
      let tU = eT ? null : tO
      return (
        el[150] !== tD || el[151] !== en || el[152] !== ei || el[153] !== tU || null !== el[154]
          ? ((ea = (0, n.jsxs)(n.Fragment, { children: [tD, en, ei, tU, null] })),
            (el[150] = tD),
            (el[151] = en),
            (el[152] = ei),
            (el[153] = tU),
            (el[154] = null),
            (el[155] = ea))
          : (ea = el[155]),
        ea
      )
    }
    function sm(e, t) {
      return Math.max(e, t.percent_off)
    }
    function sh(e, t) {
      return Math.max(e, t.percent_off)
    }
    function sg() {
      return ""
    }
    function sf() {
      let e,
        t,
        s,
        a,
        l = (0, i.c)(4)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(w.I, { asset: y })),
            (t = (0, n.jsx)(b.A, {
              id: "settings.usage.unifiedMeter.notice.title",
              defaultMessage: "One usage meter across all of ChatGPT",
            })),
            (s = (0, n.jsx)(b.A, {
              id: "settings.usage.unifiedMeter.notice.description",
              defaultMessage: "Agentic usage and chat limits are now unified in a single plan allowance.",
            })),
            (l[0] = e),
            (l[1] = t),
            (l[2] = s))
          : ((e = l[0]), (t = l[1]), (s = l[2])),
        l[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(I.t, {
              children: (0, n.jsx)(T.ic, {
                icon: e,
                label: t,
                description: s,
                control: (0, n.jsx)(j.z, {
                  href: g.yC,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  color: "secondary",
                  children: (0, n.jsx)(b.A, {
                    id: "settings.usage.unifiedMeter.notice.learnMore",
                    defaultMessage: "Learn more",
                  }),
                }),
              }),
            })),
            (l[3] = a))
          : (a = l[3]),
        a
      )
    }
    function sp(e) {
      let t,
        s = (0, i.c)(3),
        { rowLabel: a, rowControl: l } = e
      return (
        s[0] !== l || s[1] !== a
          ? ((t =
              null == l
                ? (0, n.jsx)(d.j, { children: a })
                : (0, n.jsx)(N.X, {
                    children: (0, n.jsx)(N.X.Content, {
                      children: (0, n.jsx)(I.t, {
                        children: (0, n.jsx)(T.ic, { className: "gap-6", label: a, control: l }),
                      }),
                    }),
                  })),
            (s[0] = l),
            (s[1] = a),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function sx(e) {
      return e?.rate_limit?.primary_window != null || e?.rate_limit?.secondary_window != null
    }
    function sy(e, t) {
      return null == e || null == t
        ? null != e || null != t
        : e.used_percent !== t.used_percent ||
            e.reset_at !== t.reset_at ||
            e.limit_window_seconds !== t.limit_window_seconds
    }
    var s_ = s("RQya"),
      sb = s("EShr"),
      sv = s("jxU8")
    function sj(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d = (0, i.c)(19)
      d[0] !== e ? (({ section: s, ...t } = e), (d[0] = e), (d[1] = t), (d[2] = s)) : ((t = d[1]), (s = d[2]))
      let m = void 0 === s ? "usage" : s,
        h = (0, r.KC)()
      d[3] !== h?.visibleSettingsSections || d[4] !== h?.visibleSettingsSections.filter
        ? ((a = h?.visibleSettingsSections.filter(sA).map(sw)),
          (d[3] = h?.visibleSettingsSections),
          (d[4] = h?.visibleSettingsSections.filter),
          (d[5] = a))
        : (a = d[5])
      let g = a,
        f = "analytics" === m,
        p = h?.showUsageOnlyLabel
      ;(d[6] !== p
        ? ((l = (0, n.jsx)(el.gl, { slug: "usage", showUsageOnlyLabel: p, showChatGptDataControlsLabel: !1 })),
          (d[6] = p),
          (d[7] = l))
        : (l = d[7]),
        d[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(b.A, {
              id: "settings.usage.overview.help",
              defaultMessage: "Track your usage and check your limits",
            })),
            (d[8] = o))
          : (o = d[8]))
      let x = null != g && g.length > 1 ? "default" : t.density
      return (
        d[9] !== m || d[10] !== g
          ? ((u = null != g && g.length > 1 ? (0, n.jsx)(sC, { tabs: g, section: m }) : void 0),
            (d[9] = m),
            (d[10] = g),
            (d[11] = u))
          : (u = d[11]),
        d[12] !== t || d[13] !== m || d[14] !== f || d[15] !== l || d[16] !== x || d[17] !== u
          ? ((c = (0, n.jsx)(sv.P, {
              ...t,
              containTouchOverscroll: f,
              scrollResetKey: m,
              title: l,
              subtitle: void 0,
              overview: o,
              density: x,
              subtitleClassName: "whitespace-normal",
              stickyControls: u,
            })),
            (d[12] = t),
            (d[13] = m),
            (d[14] = f),
            (d[15] = l),
            (d[16] = x),
            (d[17] = u),
            (d[18] = c))
          : (c = d[18]),
        c
      )
    }
    function sw(e) {
      let { slug: t } = e
      return {
        id: t,
        label:
          "usage" === t
            ? (0, n.jsx)(b.A, { id: "settings.usage.overviewTab", defaultMessage: "Overview" })
            : (0, n.jsx)(el.s, { slug: t }),
      }
    }
    function sA(e) {
      let { slug: t } = e
      return (0, h.yk)(t)
    }
    function sC(e) {
      let t,
        s,
        a,
        o,
        u,
        c = (0, i.c)(14),
        { tabs: d, section: m } = e,
        { onSelectSection: h, restoreUsageTabFocus: g } = (0, r.KC)(),
        f = (0, l.useRef)(null)
      ;(c[0] !== g
        ? ((t = () => {
            let e = requestAnimationFrame(() => g(f.current))
            return () => cancelAnimationFrame(e)
          }),
          (c[0] = g),
          (c[1] = t))
        : (t = c[1]),
        c[2] !== g || c[3] !== m ? ((s = [g, m]), (c[2] = g), (c[3] = m), (c[4] = s)) : (s = c[4]),
        (0, l.useLayoutEffect)(t, s))
      let p = (0, F.A)()
      return (
        c[5] !== h
          ? ((a = (e) => {
              h(e, !0)
            }),
            (c[5] = h),
            (c[6] = a))
          : (a = c[6]),
        c[7] !== p
          ? ((o = p.formatMessage({ id: "settings.usage.tabsLabel", defaultMessage: "Usage sections" })),
            (c[7] = p),
            (c[8] = o))
          : (o = c[8]),
        c[9] !== m || c[10] !== a || c[11] !== o || c[12] !== d
          ? ((u = (0, n.jsx)("div", {
              ref: f,
              children: (0, n.jsx)(sb.T, { options: d, selectedId: m, size: "toolbar", onSelect: a, ariaLabel: o }),
            })),
            (c[9] = m),
            (c[10] = a),
            (c[11] = o),
            (c[12] = d),
            (c[13] = u))
          : (u = c[13]),
        u
      )
    }
    var sM = s("sQDv")
    let sS = {
      usage: eU.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_USAGE,
      analytics: eU.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_ANALYTICS,
      "consumer-view": eU.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_CONSUMER_VIEW,
      "usage-code-review": eU.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_CODE_REVIEW,
    }
    function sk(e) {
      let t,
        s = (0, i.c)(3),
        { section: a } = e,
        l = null == a ? void 0 : sS[a],
        r = null != a
      return (
        s[0] !== l || s[1] !== r
          ? ((t = (0, n.jsx)(sM.V, { routeTemplate: "/settings/usage", settingsTab: l, enabled: r })),
            (s[0] = l),
            (s[1] = r),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    let sE = {
      usage: function (e) {
        let t,
          s = (0, i.c)(2),
          { isPolling: a } = e,
          l = void 0 === a || a
        return (
          s[0] !== l
            ? ((t = (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(sd, { isPolling: l })] })),
              (s[0] = l),
              (s[1] = t))
            : (t = s[1]),
          t
        )
      },
      analytics: (0, c.e)(
        async () =>
          (await Promise.all([s.e(817089), s.e(886484), s.e(689428)]).then(s.bind(s, "Qpbb"))).UsageAnalyticsSettings,
      ),
      "consumer-view": (0, c.e)(
        async () =>
          (await Promise.all([s.e(817089), s.e(886484), s.e(466426)]).then(s.bind(s, "vbFU"))).ConsumerViewSettings,
      ),
      "usage-code-review": (0, c.e)(
        async () => (await Promise.all([s.e(817089), s.e(844391)]).then(s.bind(s, "JKAM"))).UsageCodeReviewSettings,
      ),
    }
    function sN(e) {
      let t = (0, i.c)(3),
        { visibleSettingsSections: s } = (0, r.KC)(),
        [c] = (0, r.ok)(),
        g = (0, r.zy)(),
        f = (0, h.yx)(c.get("tab")),
        p = s.map(sI).filter(h.yk),
        { plan: x } = (0, u.AH)(),
        y = "usage" !== f || 1 !== p.length || null == x || (0, m.uz)(x) ? "default" : "compact",
        _ = (0, h.Qm)(f, g.search)
      if (`${g.pathname}${g.search}` !== _) {
        let e,
          s = `${_}${g.hash}`
        return (
          t[0] !== g.state || t[1] !== s
            ? ((e = (0, n.jsx)(r.C5, { to: s, state: g.state, replace: !0 })), (t[0] = g.state), (t[1] = s), (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      return (0, n.jsxs)(sj, {
        section: f,
        density: y,
        children: [
          (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(sk, { section: p.includes(f) ? f : null }) }),
          p.map((e) => {
            let t = sE[e]
            return (0, n.jsx)(
              "div",
              {
                hidden: e !== f,
                children: (0, n.jsx)("div", {
                  className: (0, a.A)("flex flex-col", "compact" === y ? "gap-5.5" : "gap-10"),
                  children: (0, n.jsx)(o.t, {
                    name: "UsageSettingsPanel",
                    fallback: sT,
                    children: (0, n.jsx)(l.Suspense, {
                      fallback: (0, n.jsx)(d.j, {}),
                      children: (0, n.jsx)(s_.Z, {
                        section: e,
                        isSelected: e === f,
                        children: (0, n.jsx)(t, { isPolling: e === f }),
                      }),
                    }),
                  }),
                }),
              },
              e,
            )
          }),
        ],
      })
    }
    function sT(e) {
      return (0, n.jsx)(o.j, { error: e.error, resetError: () => e.resetError(), stayOnPage: !0 })
    }
    function sI(e) {
      let { slug: t } = e
      return t
    }
  },
  Myba(e, t, s) {
    var n = s("QosV"),
      i = s("T0Rc"),
      a = s("S2r0"),
      l = s("UOa8"),
      r = s("rvFo"),
      o = s("kK7d")
    let u = ["usage-settings", "usage-billing"],
      c = {
        desktop: ["CODEX_DESKTOP_APP", "CODEX_WORK_DESKTOP"],
        cli: ["CODEX_CLI"],
        vscode: ["CODEX_IDE_VSCODE"],
        web: ["CODEX_WEB"],
        workWeb: ["CODEX_WORK_WEB"],
        mobile: ["CODEX_WORK_MOBILE"],
        codeReview: ["CODEX_GITHUB"],
      }
    function d(e, t) {
      let s,
        a,
        c,
        d,
        m,
        h = (0, n.c)(24),
        { days: g, enabled: f, isPolling: p, scope: x } = t,
        y = void 0 === x ? "workspace" : x,
        { accountId: _, authMethod: w, userId: A } = (0, l.As)()
      h[0] !== g ? ((s = b(g)), (h[0] = g), (h[1] = s)) : (s = h[1])
      let { endDate: C, startDate: M } = s
      ;(h[2] !== _ || h[3] !== e || h[4] !== C || h[5] !== y || h[6] !== M || h[7] !== A
        ? ((a = [...u, e, _, A, y, M, C]),
          (h[2] = _),
          (h[3] = e),
          (h[4] = C),
          (h[5] = y),
          (h[6] = M),
          (h[7] = A),
          (h[8] = a))
        : (a = h[8]),
        h[9] !== e || h[10] !== C || h[11] !== y || h[12] !== M
          ? ((c = () =>
              "skills" === e
                ? o.CodexRequest.safeGet("/wham/analytics/daily-skill-usage-metrics", {
                    parameters: {
                      query: {
                        start_date: M,
                        end_date: C,
                        group_by: "day",
                        top_skill_limit: "workspace" === y ? 6 : 10,
                        workspace_user: !0,
                      },
                    },
                  })
                : o.CodexRequest.safeGet("/wham/analytics/daily-plugin-usage-metrics", {
                    parameters: {
                      query: {
                        start_date: M,
                        end_date: C,
                        group_by: "day",
                        top_plugin_limit: "workspace" === y ? 8 : 10,
                        workspace_user: !0,
                      },
                    },
                  })),
            (h[9] = e),
            (h[10] = C),
            (h[11] = y),
            (h[12] = M),
            (h[13] = c))
          : (c = h[13]),
        h[14] !== C || h[15] !== y || h[16] !== M
          ? ((d = (e) => {
              var t, s, n, i
              let a, l, r, o
              return (
                (t = e),
                (s = M),
                (n = C),
                (i = y),
                (a = new Map()),
                (l = new Map()),
                (r = new Map(t.data.map((e) => [e.date, e]))),
                {
                  total: (o = v(s, n).map((e) => {
                    let t = r.get(e)
                    if (null == t) return { date: e, total: 0, values: {} }
                    let s = "skill_usage_overviews" in t ? t.skill_usage_overviews : t.plugin_usage_overviews,
                      n = {}
                    for (let e of s) {
                      if ("workspace" !== i && 0 === e.invocation_counts) continue
                      let t = "workspace" !== i && "skill_name" in e ? e.skill_name : e.display_name
                      if ("workspace" !== i) {
                        let s = (function (e) {
                          let t = e
                              .normalize("NFKC")
                              .replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069]/gu, "")
                              .replace(/^connector\s+/iu, "")
                              .replace(/\s+/gu, " ")
                              .trim()
                              .toLowerCase(),
                            s = t.indexOf(":")
                          if (s < 0) return t
                          let n = t.slice(0, s).trim(),
                            i = t.slice(s + 1).trim()
                          return i === n ||
                            i.startsWith(`${n.split(" ")[0]} `) ||
                            ("openai library" === n && "library" === i)
                            ? i
                            : t
                        })(e.display_name)
                        ;((t = "" === s || "other" === s || "other" === t.toLowerCase() ? "other" : (l.get(s) ?? t)),
                          l.set(s, t))
                      }
                      let s = a.get(t)
                      ;((n[t] = (n[t] ?? 0) + e.invocation_counts),
                        a.set(t, {
                          key: t,
                          name: s?.name ?? e.display_name,
                          total: (s?.total ?? 0) + e.invocation_counts,
                        }))
                    }
                    return { date: t.date, total: j(n), values: n }
                  })).reduce((e, t) => e + t.total, 0),
                  dataFreshnessTimestamp: t.data_freshness_ts ?? null,
                  series: Array.from(a.values()).sort(
                    (e, t) =>
                      Number("workspace" !== i && "other" === e.key) - Number("workspace" !== i && "other" === t.key) ||
                      t.total - e.total ||
                      ("workspace" === i ? 0 : e.key.localeCompare(t.key)),
                  ),
                  data: o,
                }
              )
            }),
            (h[14] = C),
            (h[15] = y),
            (h[16] = M),
            (h[17] = d))
          : (d = h[17]))
      let S = f && "chatgpt" === w && null != _ && null != A,
        k = !!(void 0 === p || p) && r.D.ONE_MINUTE
      return (
        h[18] !== a || h[19] !== c || h[20] !== d || h[21] !== S || h[22] !== k
          ? ((m = {
              queryKey: a,
              queryFn: c,
              select: d,
              enabled: S,
              refetchInterval: k,
              staleTime: r.D.ONE_MINUTE,
              refetchOnWindowFocus: !1,
              retry: !1,
            }),
            (h[18] = a),
            (h[19] = c),
            (h[20] = d),
            (h[21] = S),
            (h[22] = k),
            (h[23] = m))
          : (m = h[23]),
        (0, i.I)(m)
      )
    }
    function m(e, t) {
      return o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-token-usage-breakdown", {
        additionalHeaders: { "x-openai-codex-usage-categories": "1" },
        parameters: { query: { start_date: e, end_date: t, group_by: "day" } },
      })
    }
    function h(e) {
      let t = g(
          e.data.map(({ date: e, models: t }) => {
            let s = {}
            for (let { credits: e, model: n } of t ?? []) s[n] = (s[n] ?? 0) + e
            return { date: e, values: s }
          }),
          e.units,
          e.data_freshness_ts ?? null,
        ),
        s = new Set(
          "credits" === e.units
            ? []
            : t.series
                .filter(({ key: e, total: s }) => s > 0 && ("other" === e.toLowerCase() || 100 * s < t.total))
                .map(({ key: e }) => e),
        ),
        n =
          0 === s.size
            ? t
            : g(
                t.data.map(({ date: e, values: t }) => {
                  let n = {}
                  for (let [e, i] of Object.entries(t)) {
                    let t = s.has(e) ? "other" : e
                    n[t] = (n[t] ?? 0) + i
                  }
                  return { date: e, values: n }
                }),
                t.units,
                t.dataFreshnessTimestamp,
              )
      return {
        attribution: e.data,
        ...g(
          e.data.map(({ date: e, product_surface_usage_values: t }) => {
            let s = {}
            for (let [e, n] of Object.entries(t)) {
              let t = p(e)
              s[t] = (s[t] ?? 0) + n
            }
            return { date: e, values: s }
          }),
          e.units,
          e.data_freshness_ts ?? null,
        ),
        byModel: {
          ...n,
          series: n.series
            .filter(({ total: e }) => e > 0)
            .sort(
              (e, t) =>
                Number(s.size > 0 && "other" === e.key) - Number(s.size > 0 && "other" === t.key) ||
                t.total - e.total ||
                e.key.localeCompare(t.key),
            ),
        },
      }
    }
    function g(e, t, s) {
      let n = {}
      for (let { values: t } of e) for (let [e, s] of Object.entries(t)) n[e] = (n[e] ?? 0) + s
      return {
        total: j(n),
        units: t,
        dataFreshnessTimestamp: s,
        series: Object.entries(n).map(([e, t]) => ({ key: e, label: e, total: t })),
        data: e,
      }
    }
    function f(
      {
        auth: e,
        days: t,
        enabled: s = !0,
        isPolling: n = !0,
        refetchInterval: i = r.D.ONE_MINUTE,
        retry: a = !1,
        scope: l,
      },
      o,
    ) {
      let { endDate: c, startDate: d } = b(t)
      return {
        query: { start_date: d, end_date: c, group_by: "day", workspace_user: !0 },
        queryKey: [...u, o, e.accountId, e.userId, l, d, c],
        enabled: s && "chatgpt" === e.authMethod && null != e.accountId && null != e.userId,
        refetchInterval: !!n && i,
        staleTime: r.D.ONE_MINUTE,
        refetchOnWindowFocus: !1,
        retry: a,
      }
    }
    function p(e) {
      return e.startsWith("work_") ? "work" : "codex"
    }
    function x(e) {
      let t = e.trim().toLowerCase()
      return "codex-auto-review" === t || "other" === t ? "other" : e
    }
    function y(e, t) {
      let s = j(e),
        n = Math.max(0, (t ?? s) - s)
      n > 0 && (e.other = (e.other ?? 0) + n)
    }
    function _(e, t) {
      return {
        total: e.reduce((e, t) => e + t.total, 0),
        dataFreshnessTimestamp: null,
        series: t
          .map((t) => ({ key: t, name: t, total: e.reduce((e, s) => e + (s.values[t] ?? 0), 0) }))
          .filter(({ total: e }) => e > 0),
        data: e,
      }
    }
    function b(e, t = 0) {
      let s = new Date()
      s.setUTCDate(s.getUTCDate() - t)
      let n = new Date(s)
      return (
        n.setUTCDate(n.getUTCDate() - e + 1),
        { endDate: s.toISOString().slice(0, 10), startDate: n.toISOString().slice(0, 10) }
      )
    }
    function v(e, t) {
      let s = new Date(`${e}T00:00:00.000Z`),
        n = []
      for (; s.toISOString().slice(0, 10) <= t;)
        (n.push(s.toISOString().slice(0, 10)), s.setUTCDate(s.getUTCDate() + 1))
      return n
    }
    function j(e) {
      return Object.values(e).reduce((e, t) => e + t, 0)
    }
    s.d(
      t,
      {},
      {
        BV: function (e) {
          let t,
            s,
            a,
            c,
            d,
            h = (0, n.c)(19),
            { days: g, enabled: f, isPolling: p, scope: y } = e,
            _ = void 0 === y ? "workspace" : y,
            { accountId: j, authMethod: w, userId: A } = (0, l.As)()
          h[0] !== g ? ((t = b(g)), (h[0] = g), (h[1] = t)) : (t = h[1])
          let { endDate: C, startDate: M } = t
          ;(h[2] !== j || h[3] !== C || h[4] !== _ || h[5] !== M || h[6] !== A
            ? ((s = "business" === _ ? [...u, "business-usage", j, A, M, C] : [...u, "token-history", j, A, _, M, C]),
              (h[2] = j),
              (h[3] = C),
              (h[4] = _),
              (h[5] = M),
              (h[6] = A),
              (h[7] = s))
            : (s = h[7]),
            h[8] !== C || h[9] !== _ || h[10] !== M
              ? ((a = () =>
                  "business" === _
                    ? m(M, C)
                    : o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-token-usage-breakdown", {
                        additionalHeaders: { "x-openai-codex-usage-categories": "1" },
                        parameters: {
                          query: {
                            start_date: M,
                            end_date: C,
                            group_by: "day",
                            breakdown_by: ["model"],
                            modes: ["codex", "work"],
                          },
                        },
                      })),
                (c = (e) => {
                  var t, s, n, i
                  let a, l, r, o
                  return (
                    (t = e),
                    (s = M),
                    (n = C),
                    (i = "workspace" !== _),
                    (a = {}),
                    (l = new Map(t.data.map((e) => [e.date, e]))),
                    (r = 0),
                    (o = v(s, n).map((e) => {
                      let t = l.get(e),
                        s = t?.groups ?? t?.models ?? [],
                        n = {},
                        o = 0,
                        u = 0,
                        c = 0
                      for (let e of s) {
                        let t
                        ;((t = "model" in e ? e.model : e.is_other ? "other" : e.dimensions.model), i && (t = x(t)))
                        let s = n[t] ?? {
                            uncachedInputTokens: 0,
                            cachedInputTokens: 0,
                            outputTokens: 0,
                            totalTokens: 0,
                          },
                          l = e.uncached_text_input_tokens ?? 0,
                          d = e.cached_text_input_tokens ?? 0,
                          m = e.text_output_tokens ?? 0,
                          h = ("model" in e ? e.text_total_tokens : void 0) || l + d + m
                        ;((s.uncachedInputTokens += l),
                          (s.cachedInputTokens += d),
                          (s.outputTokens += m),
                          (s.totalTokens += h),
                          (n[t] = s),
                          (a[t] = (a[t] ?? 0) + h),
                          (r += h),
                          (o += l),
                          (u += d),
                          (c += m))
                      }
                      return {
                        date: e,
                        uncachedInputTokens: o,
                        cachedInputTokens: u,
                        outputTokens: c,
                        tokensByModel: n,
                      }
                    })),
                    {
                      total: r,
                      dataFreshnessTimestamp: t.data_freshness_ts ?? null,
                      models: Object.entries(a)
                        .map(([e, t]) => ({ key: e, total: t }))
                        .sort(
                          (e, t) =>
                            Number(i && "other" === e.key) - Number(i && "other" === t.key) || t.total - e.total,
                        ),
                      data: o,
                    }
                  )
                }),
                (h[8] = C),
                (h[9] = _),
                (h[10] = M),
                (h[11] = a),
                (h[12] = c))
              : ((a = h[11]), (c = h[12])))
          let S = f && "consumer" !== _ && "chatgpt" === w && null != j && null != A,
            k = !!(void 0 === p || p) && r.D.ONE_MINUTE
          return (
            h[13] !== s || h[14] !== a || h[15] !== c || h[16] !== S || h[17] !== k
              ? ((d = {
                  queryKey: s,
                  queryFn: a,
                  select: c,
                  enabled: S,
                  refetchInterval: k,
                  staleTime: r.D.ONE_MINUTE,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (h[13] = s),
                (h[14] = a),
                (h[15] = c),
                (h[16] = S),
                (h[17] = k),
                (h[18] = d))
              : (d = h[18]),
            (0, i.I)(d)
          )
        },
        EN: function (e) {
          let { query: t, ...s } = f(e, "code-review")
          return (0, a.j)({
            ...s,
            queryFn: () =>
              o.CodexRequest.safeGet("/wham/analytics/daily-code-review-metrics", { parameters: { query: t } }),
            enabled: s.enabled && "workspace" !== e.scope,
          })
        },
        F7: function (e) {
          let { query: t, ...s } = f(e, "turns")
          return (0, a.j)({
            ...s,
            queryFn: () =>
              o.CodexRequest.safeGet("/wham/analytics/daily-workspace-usage-counts", { parameters: { query: t } }),
            select: (e) =>
              (function (e, t, s) {
                let n = new Map(e.data.map((e) => [e.date, e])),
                  i = v(t, s).filter((e) => e !== s || n.has(e)),
                  a = {},
                  l = new Map()
                for (let t of e.data) {
                  let e = {}
                  for (let s of t.models ?? []) {
                    let t = x(s.model)
                    e[t] = (e[t] ?? 0) + (s.turns ?? 0)
                  }
                  for (let [s, n] of (y(e, t.totals?.turns), l.set(t.date, e), Object.entries(e)))
                    a[s] = (a[s] ?? 0) + n
                }
                let r = Object.entries(a)
                    .filter(([, e]) => e > 0)
                    .sort(
                      ([e, t], [s, n]) => Number("other" === e) - Number("other" === s) || n - t || e.localeCompare(s),
                    )
                    .map(([e]) => e),
                  o = i.map((e) => {
                    let t = l.get(e),
                      s = Object.fromEntries(r.map((e) => [e, t?.[e] ?? 0]))
                    return { date: e, total: j(s), values: s }
                  }),
                  u = i.map((e) => {
                    let t = n.get(e),
                      s = Object.fromEntries(
                        Object.entries(c).map(([e, s]) => [
                          e,
                          t?.clients.reduce((e, t) => e + (s.includes(t.client_id) ? t.turns : 0), 0) ?? 0,
                        ]),
                      )
                    return (y(s, t?.totals?.turns), { date: e, total: j(s), values: s })
                  }),
                  d = Object.keys(c)
                return (
                  u.some(({ values: e }) => null != e.other) && d.push("other"),
                  { byModel: _(o, r), bySurface: _(u, d) }
                )
              })(e, t.start_date, t.end_date),
            enabled: s.enabled && "workspace" !== e.scope,
          })
        },
        Iu: function (e) {
          return d("skills", e)
        },
        Q4: function (e) {
          let t,
            s,
            a,
            c = (0, n.c)(11),
            { credits: d, enabled: m, isPolling: h } = e,
            { accountId: g, authMethod: f, userId: p } = (0, l.As)(),
            x = Math.round(1e6 * d) / 1e6
          ;(c[0] !== g || c[1] !== x || c[2] !== p
            ? ((t = [...u, "credit-estimate", g, p, x]), (c[0] = g), (c[1] = x), (c[2] = p), (c[3] = t))
            : (t = c[3]),
            c[4] !== x
              ? ((s = async () => {
                  try {
                    return await o.CodexRequest.safePost("/wham/usage/credits/estimate", {
                      requestBody: { credits: x },
                    })
                  } catch {
                    return null
                  }
                }),
                (c[4] = x),
                (c[5] = s))
              : (s = c[5]))
          let y = m && x > 0 && "chatgpt" === f && null != g && null != p,
            _ = !!(void 0 === h || h) && r.D.THIRTY_SECONDS
          return (
            c[6] !== t || c[7] !== s || c[8] !== y || c[9] !== _
              ? ((a = {
                  queryKey: t,
                  queryFn: s,
                  enabled: y,
                  refetchInterval: _,
                  staleTime: r.D.THIRTY_SECONDS,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (c[6] = t),
                (c[7] = s),
                (c[8] = y),
                (c[9] = _),
                (c[10] = a))
              : (a = c[10]),
            (0, i.I)(a)
          )
        },
        X6: function (e) {
          let t,
            s,
            a,
            c,
            d,
            h = (0, n.c)(26),
            { balanceUnit: f, breakdown: x, days: y, enabled: _, isPolling: j, scope: w } = e,
            A = void 0 === w ? "workspace" : w,
            { accountId: C, authMethod: M, userId: S } = (0, l.As)()
          h[0] !== y ? ((t = b(y)), (h[0] = y), (h[1] = t)) : (t = h[1])
          let { endDate: k, startDate: E } = t
          ;(h[2] !== C || h[3] !== f || h[4] !== x || h[5] !== k || h[6] !== A || h[7] !== E || h[8] !== S
            ? ((s =
                "business" === A
                  ? [...u, "business-usage", C, S, E, k]
                  : [
                      ...u,
                      "credit-history",
                      C,
                      S,
                      A,
                      ...("consumer" === A ? [] : [E, k, x]),
                      ...("workspace" === A && null != f ? [f] : []),
                    ]),
              (h[2] = C),
              (h[3] = f),
              (h[4] = x),
              (h[5] = k),
              (h[6] = A),
              (h[7] = E),
              (h[8] = S),
              (h[9] = s))
            : (s = h[9]),
            h[10] !== f || h[11] !== x || h[12] !== k || h[13] !== A || h[14] !== E
              ? ((a = async () => {
                  if ("consumer" === A)
                    return o.CodexRequest.safeGet("/wham/usage/credit-usage-events", {
                      additionalHeaders: { "x-openai-codex-usage-categories": "1" },
                    })
                  if ("business" === A) return m(E, k)
                  let e = await o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-credit-usage", {
                    parameters: {
                      query: {
                        start_date: E,
                        end_date: k,
                        breakdown: "reasoning" === x ? "reasoning_effort" : x,
                        ...(null == f ? {} : { balance_unit: f }),
                      },
                    },
                  })
                  if ((e.unit ?? "credit") !== (f ?? "credit"))
                    throw Error("Usage history response has an unexpected balance unit")
                  return e
                }),
                (h[10] = f),
                (h[11] = x),
                (h[12] = k),
                (h[13] = A),
                (h[14] = E),
                (h[15] = a))
              : (a = h[15]),
            h[16] !== x || h[17] !== k || h[18] !== E
              ? ((c = (e) =>
                  (function (e, t, s, n) {
                    let i
                    if ("series" in e) {
                      let n = new Map(e.data.map((e) => [e.date, e.values]))
                      return {
                        total: e.series.reduce((e, t) => e + t.total, 0),
                        dataFreshnessTimestamp: e.data_freshness_ts ?? null,
                        series: e.series,
                        data: v(t, s).map((e) => ({ date: e, values: n.get(e) ?? {} })),
                      }
                    }
                    let a = new Map()
                    for (let l of e.data) {
                      let e = l.date.slice(0, 10)
                      if (e < t || e > s) continue
                      let r = a.get(e) ?? {}
                      if ("credit_amount" in l) {
                        let e = p(l.product_surface)
                        r[e] = (r[e] ?? 0) + l.credit_amount
                      } else if (
                        ((i = (i ?? 0) + (l.models?.reduce((e, t) => e + (t.on_demand_credits ?? 0), 0) ?? 0)),
                        "product" === n)
                      )
                        for (let [e, t] of Object.entries(l.premium_usage_values?.credit_usage_credits ?? {})) {
                          let s = p(e)
                          r[s] = (r[s] ?? 0) + t
                        }
                      else
                        for (let e of l.models ?? []) {
                          let t = "speed" === n ? (e.speed ?? "unknown") : e.model
                          r[t] = (r[t] ?? 0) + (e.on_demand_credits ?? 0)
                        }
                      a.set(e, r)
                    }
                    let l = g(
                      v(t, s).map((e) => ({ date: e, values: a.get(e) ?? {} })),
                      "credits",
                      "data_freshness_ts" in e ? (e.data_freshness_ts ?? null) : null,
                    )
                    return null == i ? l : { ...l, paidModelTotal: i }
                  })(e, E, k, x)),
                (h[16] = x),
                (h[17] = k),
                (h[18] = E),
                (h[19] = c))
              : (c = h[19]))
          let N = _ && "chatgpt" === M && null != C && null != S,
            T = !!(void 0 === j || j) && r.D.ONE_MINUTE
          return (
            h[20] !== s || h[21] !== a || h[22] !== c || h[23] !== N || h[24] !== T
              ? ((d = {
                  queryKey: s,
                  queryFn: a,
                  select: c,
                  enabled: N,
                  refetchInterval: T,
                  staleTime: r.D.ONE_MINUTE,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (h[20] = s),
                (h[21] = a),
                (h[22] = c),
                (h[23] = N),
                (h[24] = T),
                (h[25] = d))
              : (d = h[25]),
            (0, i.I)(d)
          )
        },
        ZY: function (e) {
          let t,
            s,
            a,
            c,
            d = (0, n.c)(16),
            { days: m, enabled: g, isPolling: f, offsetDays: p } = e,
            x = void 0 === p ? 0 : p,
            { accountId: y, authMethod: _, userId: v } = (0, l.As)()
          d[0] !== m || d[1] !== x ? ((t = b(m, x)), (d[0] = m), (d[1] = x), (d[2] = t)) : (t = d[2])
          let { endDate: j, startDate: w } = t
          ;(d[3] !== y || d[4] !== j || d[5] !== w || d[6] !== v
            ? ((s = [...u, "personal-history", y, v, w, j]), (d[3] = y), (d[4] = j), (d[5] = w), (d[6] = v), (d[7] = s))
            : (s = d[7]),
            d[8] !== j || d[9] !== w
              ? ((a = () =>
                  o.CodexRequest.safeGet("/wham/usage/daily-token-usage-breakdown", {
                    additionalHeaders: { "x-openai-codex-usage-categories": "1" },
                    parameters: { query: { start_date: w, end_date: j, group_by: "day" } },
                  })),
                (d[8] = j),
                (d[9] = w),
                (d[10] = a))
              : (a = d[10]))
          let A = g && "chatgpt" === _ && null != y && null != v,
            C = !!(void 0 === f || f) && r.D.ONE_MINUTE
          return (
            d[11] !== s || d[12] !== a || d[13] !== A || d[14] !== C
              ? ((c = {
                  queryKey: s,
                  queryFn: a,
                  select: h,
                  enabled: A,
                  refetchInterval: C,
                  staleTime: r.D.ONE_MINUTE,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (d[11] = s),
                (d[12] = a),
                (d[13] = A),
                (d[14] = C),
                (d[15] = c))
              : (c = d[15]),
            (0, i.I)(c)
          )
        },
        eU: function (e) {
          return d("plugins", e)
        },
        mV: b,
        my: function (e) {
          let { query: t, ...s } = f(e, "lines-of-code")
          return (0, a.j)({
            ...s,
            queryFn: () =>
              o.CodexRequest.safeGet("/wham/analytics/code-attribution", {
                parameters: { query: { ...t, group: "workspace" } },
              }),
            select: (e) =>
              _(
                e.data.map(({ code_attribution: e, date: t }) => ({
                  date: t,
                  total: e.lines_of_code.added,
                  values: { linesOfCode: e.lines_of_code.added },
                })),
                ["linesOfCode"],
              ),
            enabled: s.enabled && "business" === e.scope,
          })
        },
      },
    )
  },
  QIEU(e, t, s) {
    let n = [
      { section: "usage", value: "overview" },
      { section: "analytics", value: "analytics" },
      { section: "consumer-view", value: "consumer-view" },
      { section: "usage-code-review", value: "code-review" },
    ]
    s.d(
      t,
      {},
      {
        Qm: function (e, t = "") {
          let s = n.find((t) => t.section === e)
          if (null == s) return `/settings/${e}${t}`
          let i = new URLSearchParams(t)
          return (i.set("tab", s.value), `/settings/usage?${i}`)
        },
        yk: function (e) {
          return n.some((t) => t.section === e)
        },
        yx: function (e) {
          return n.find(({ value: t }) => t === e)?.section ?? "usage"
        },
      },
    )
  },
  qWrV(e, t, s) {
    var n = s("mBJV"),
      i = s("zd8w"),
      a = s("yGJW")
    let l = {
        usage_history: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_USAGE_HISTORY",
        tokens: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOKENS",
        product_activity: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_PRODUCT_ACTIVITY",
        tool_activity: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOOL_ACTIVITY",
        code_review_priority: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_PRIORITY",
        code_review_reactions: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_REACTIONS",
        code_review: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW",
      },
      r = (0, i.createContext)(null)
    function o(e, t, s, i) {
      null != e && (0, a.yy)(e, n.Y8j, { chart: l[t], action: s, selection: i })
    }
    s.d(
      t,
      {},
      {
        $c: function (e, t, s) {
          o(
            e,
            t,
            "CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_DATE_RANGE_CHANGED",
            7 === s
              ? "CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SEVEN_DAYS"
              : "CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_THIRTY_DAYS",
          )
        },
        K2: l,
        Wj: r,
        to: function (e, t, s) {
          o(
            e,
            t,
            "CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_BREAKDOWN_CHANGED",
            {
              model: "CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_MODEL",
              product: "CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_PRODUCT",
              surface: "CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_SURFACE",
            }[s],
          )
        },
        zJ: function (e, t, s) {
          o(
            e,
            t,
            "CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_SERIES_FILTER_CHANGED",
            null == s
              ? "CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SERIES_CLEARED"
              : "CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SERIES_SELECTED",
          )
        },
      },
    )
  },
  RQya(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("mBJV"),
      l = s("MVHH"),
      r = s("qmMi"),
      o = s("zd8w"),
      u = s("SPnB"),
      c = s("UOa8"),
      d = s("OAko"),
      m = s("yGJW"),
      h = s("OWtl"),
      g = s("qWrV")
    function f(e) {
      let t,
        s,
        n,
        a = (0, i.c)(9),
        { identity: u, section: c } = e,
        d = (0, r.gh)(h.u),
        g = (0, o.useRef)(null)
      a[0] !== d
        ? ((t = (e) => {
            ;(0, m.yy)(d, l.$K, { tab: e })
          }),
          (a[0] = d),
          (a[1] = t))
        : (t = a[1])
      let f = (0, o.useEffectEvent)(t)
      return (
        a[2] !== u || a[3] !== f || a[4] !== c
          ? ((s = () => {
              if (null == u) {
                g.current = null
                return
              }
              let e = JSON.stringify([u, c])
              e !== g.current &&
                ((g.current = e),
                ("usage" === c || "analytics" === c) &&
                  f("usage" === c ? "CHATGPT_WEB_SETTINGS_TAB_USAGE" : "CHATGPT_WEB_SETTINGS_TAB_ANALYTICS"))
            }),
            (a[2] = u),
            (a[3] = f),
            (a[4] = c),
            (a[5] = s))
          : (s = a[5]),
        a[6] !== u || a[7] !== c ? ((n = [u, c]), (a[6] = u), (a[7] = c), (a[8] = n)) : (n = a[8]),
        (0, o.useEffect)(s, n),
        null
      )
    }
    function p(e) {
      return [e.dataUpdatedAt, e.errorUpdatedAt]
    }
    function x(e) {
      return "error" === e.status
    }
    function y(e) {
      return "pending" !== e.status && "idle" === e.fetchStatus
    }
    s.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            s,
            n,
            l,
            r,
            u = (0, i.c)(20),
            { chart: c, queries: d } = e,
            h = (0, o.use)(g.Wj),
            f = h?.identity ?? null,
            _ = (0, o.useRef)(null)
          u[0] !== d ? ((t = d.length > 0 && d.every(y)), (u[0] = d), (u[1] = t)) : (t = u[1])
          let b = t,
            v = d.some(x)
              ? "CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_ERROR"
              : "CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_SUCCESS"
          u[2] !== c || u[3] !== f || u[4] !== v || u[5] !== d
            ? ((s = JSON.stringify([f, c, v, d.map(p)])), (u[2] = c), (u[3] = f), (u[4] = v), (u[5] = d), (u[6] = s))
            : (s = u[6])
          let j = s
          u[7] !== h || u[8] !== c || u[9] !== v
            ? ((n = () => {
                null != h && (0, m.yy)(h.scope, a.av6, { chart: g.K2[c], outcome: v })
              }),
              (u[7] = h),
              (u[8] = c),
              (u[9] = v),
              (u[10] = n))
            : (n = u[10])
          let w = (0, o.useEffectEvent)(n)
          return (
            u[11] !== f || u[12] !== w || u[13] !== j || u[14] !== b
              ? ((l = () => {
                  null != f && b && _.current !== j && ((_.current = j), w())
                }),
                (u[11] = f),
                (u[12] = w),
                (u[13] = j),
                (u[14] = b),
                (u[15] = l))
              : (l = u[15]),
            u[16] !== f || u[17] !== j || u[18] !== b
              ? ((r = [f, j, b]), (u[16] = f), (u[17] = j), (u[18] = b), (u[19] = r))
              : (r = u[19]),
            (0, o.useEffect)(l, r),
            null
          )
        },
        Z: function (e) {
          let t,
            s,
            a,
            l,
            o = (0, i.c)(20),
            { section: m, isSelected: p, children: x } = e,
            y = (0, r.gh)(h.u),
            { accountId: _, userId: b, authMethod: v, isLoading: j } = (0, c.As)(),
            { data: w } = (0, d.YL)(),
            A = (0, r.Ul)(u.mZ)
          o[0] !== _ ||
          o[1] !== v ||
          o[2] !== w?.id ||
          o[3] !== w?.plan_type ||
          o[4] !== A ||
          o[5] !== j ||
          o[6] !== p ||
          o[7] !== m ||
          o[8] !== b
            ? ((t = null),
              (o[0] = _),
              (o[1] = v),
              (o[2] = w?.id),
              (o[3] = w?.plan_type),
              (o[4] = A),
              (o[5] = j),
              (o[6] = p),
              (o[7] = m),
              (o[8] = b),
              (o[9] = t))
            : (t = o[9])
          let C = t
          return (
            o[10] !== C || o[11] !== y
              ? ((s = null == C ? null : { scope: y, identity: C }), (o[10] = C), (o[11] = y), (o[12] = s))
              : (s = o[12]),
            o[13] !== C || o[14] !== m
              ? ((a = (0, n.jsx)(f, { identity: C, section: m })), (o[13] = C), (o[14] = m), (o[15] = a))
              : (a = o[15]),
            o[16] !== x || o[17] !== s || o[18] !== a
              ? ((l = (0, n.jsxs)(g.Wj, { value: s, children: [a, x] })),
                (o[16] = x),
                (o[17] = s),
                (o[18] = a),
                (o[19] = l))
              : (l = o[19]),
            l
          )
        },
      },
    )
  },
  LXBZ(e, t, s) {
    s.d(
      t,
      {},
      {
        A: function () {
          let e,
            t = !1
          return {
            async redeem({ availableCount: s, consume: n, creditId: i }) {
              if (t) return { status: "in_flight" }
              null == e &&
                (e = { availableCount: s, creditId: i, hasTransportFailure: !1, redeemRequestId: crypto.randomUUID() })
              let a = e
              t = !0
              try {
                let t = await n({ creditId: a.creditId, redeemRequestId: a.redeemRequestId })
                if (((e = void 0), "reset" === t.code || (a.hasTransportFailure && "already_redeemed" === t.code)))
                  return {
                    availableCountBefore: a.availableCount,
                    creditId: a.creditId,
                    resetType: t.credit?.reset_type ?? null,
                    status: "reset",
                  }
                return { code: t.code, status: "rejected" }
              } catch {
                return ((a.hasTransportFailure = !0), { creditId: a.creditId, status: "transport_error" })
              } finally {
                t = !1
              }
            },
          }
        },
        M: function (e, t) {
          switch (e) {
            case "already_redeemed":
              return t.formatMessage({
                id: "codex.rateLimitResetModal.alreadyRedeemed",
                defaultMessage: "This reset was already used",
              })
            case "no_credit":
              return t.formatMessage({
                id: "codex.rateLimitResetModal.noCredit",
                defaultMessage: "No resets are available",
              })
            case "nothing_to_reset":
              return t.formatMessage({
                id: "codex.rateLimitResetModal.nothingToReset",
                defaultMessage: "Your usage does not need a reset right now",
              })
          }
        },
      },
    )
  },
  oFmV(e, t, s) {
    let n = (0, s("zd8w").createContext)(null)
    s.d(t, {}, { S: n })
  },
  SJoA(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("fMor"),
      l = s("plnw"),
      r = s("yfk0"),
      o = s("GCvj"),
      u = s("mqZc"),
      c = s("on57"),
      d = s("zd8w"),
      m = s("HOLv"),
      h = s("bVeK")
    let g = new Set([
      "assets.chatgpt.site",
      "auth-cdn.oaistatic.com",
      "cdn.openai.com",
      "cdn.oaistatic.com",
      "files.openai.com",
      "persistent.oaistatic.com",
    ])
    function f(e) {
      let t,
        s,
        a = (0, i.c)(6),
        { children: l, size: r, borderless: o } = e,
        u = !(void 0 !== o && o) && "border border-default",
        d = "detail" === (void 0 === r ? "list" : r) ? "size-12 rounded-xl" : "size-8 rounded-lg"
      return (
        a[0] !== u || a[1] !== d
          ? ((t = (0, c.A)("flex shrink-0 items-center justify-center select-none", u, d)),
            (a[0] = u),
            (a[1] = d),
            (a[2] = t))
          : (t = a[2]),
        a[3] !== l || a[4] !== t
          ? ((s = (0, n.jsx)("span", { className: t, "aria-hidden": !0, children: l })),
            (a[3] = l),
            (a[4] = t),
            (a[5] = s))
          : (s = a[5]),
        s
      )
    }
    s.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            s,
            l = (0, i.c)(10),
            { app: r, borderless: o } = e,
            u = void 0 !== o && o
          switch (r.type) {
            case "apple": {
              let e
              ;(l[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(h.YEY, {})), (l[0] = e))
                : (e = l[0]),
                (t = e))
              break
            }
            case "codex_cli": {
              let e
              ;(l[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(m.I, { asset: a.E })), (l[1] = e))
                : (e = l[1]),
                (t = e))
              break
            }
            case "oai_apps": {
              let e
              ;(l[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(h.HUG, {})), (l[2] = e))
                : (e = l[2]),
                (t = e))
              break
            }
            case "kakao_talk":
            case "viber": {
              let e, s
              ;(l[3] !== r.name
                ? ((e = Array.from(r.name.trim())[0]?.toUpperCase()), (l[3] = r.name), (l[4] = e))
                : (e = l[4]),
                l[5] !== e
                  ? ((s = (0, n.jsx)("span", { className: "text-sm font-medium text-secondary", children: e })),
                    (l[5] = e),
                    (l[6] = s))
                  : (s = l[6]),
                (t = s))
            }
          }
          return (
            l[7] !== u || l[8] !== t
              ? ((s = (0, n.jsx)(f, { borderless: u, children: t })), (l[7] = u), (l[8] = t), (l[9] = s))
              : (s = l[9]),
            s
          )
        },
        y: function (e) {
          let t,
            s,
            a,
            h,
            p = (0, i.c)(23),
            { app: x, size: y, borderless: _ } = e,
            b = void 0 === y ? "list" : y,
            v = void 0 !== _ && _,
            j = "codex_generated_site" === x.client_app_type,
            w = "ads" === x.client_app_type
          p[0] !== x.logo_uri
            ? ((t = (function (e) {
                if (null == e || "" === e.trim()) return null
                try {
                  let t = new URL(e.trim())
                  return "https:" === t.protocol && g.has(t.hostname) ? t.href : null
                } catch {
                  return null
                }
              })(x.logo_uri)),
              (p[0] = x.logo_uri),
              (p[1] = t))
            : (t = p[1])
          let A = t,
            [C, M] = (0, d.useState)(null),
            [S, k] = (0, d.useState)(null),
            E = null != A && S === A,
            N = null != A && C === A && !E
          if (j) {
            let e,
              t = "detail" === b ? u.g : o.t
            ;(p[2] !== t
              ? ((e = (0, n.jsx)(m.I, { className: "shrink-0", asset: t, focusable: "false" })), (p[2] = t), (p[3] = e))
              : (e = p[3]),
              (s = e))
          } else if (w) {
            let e,
              t = "detail" === b ? r.o : l.T
            ;(p[4] !== t
              ? ((e = (0, n.jsx)(m.I, { className: "shrink-0", asset: t, focusable: "false" })), (p[4] = t), (p[5] = e))
              : (e = p[5]),
              (s = e))
          } else {
            let e,
              t,
              i,
              a = "detail" === b ? "text-xl" : "text-sm"
            ;(p[6] !== a ? ((e = (0, c.A)("font-medium text-secondary", a)), (p[6] = a), (p[7] = e)) : (e = p[7]),
              p[8] !== x.name
                ? ((t = Array.from(x.name.trim())[0]?.toUpperCase()), (p[8] = x.name), (p[9] = t))
                : (t = p[9]),
              p[10] !== e || p[11] !== t
                ? ((i = (0, n.jsx)("span", { className: e, children: t })), (p[10] = e), (p[11] = t), (p[12] = i))
                : (i = p[12]),
              (s = i))
          }
          let T = !N && s
          return (
            p[13] !== E || p[14] !== N || p[15] !== A || p[16] !== b
              ? ((a =
                  null == A || E
                    ? null
                    : (0, n.jsx)(
                        "img",
                        {
                          className: (0, c.A)("detail" === b ? "size-10" : "size-6", "object-contain", !N && "hidden"),
                          alt: "",
                          src: A,
                          referrerPolicy: "no-referrer",
                          onLoad: () => {
                            ;(M(A), k(null))
                          },
                          onError: () => k(A),
                        },
                        A,
                      )),
                (p[13] = E),
                (p[14] = N),
                (p[15] = A),
                (p[16] = b),
                (p[17] = a))
              : (a = p[17]),
            p[18] !== v || p[19] !== b || p[20] !== T || p[21] !== a
              ? ((h = (0, n.jsxs)(f, { size: b, borderless: v, children: [T, a] })),
                (p[18] = v),
                (p[19] = b),
                (p[20] = T),
                (p[21] = a),
                (p[22] = h))
              : (h = p[22]),
            h
          )
        },
      },
    )
  },
  I7Ou(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("RNul"),
      l = s("AWNZ")
    s.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            s,
            r = (0, i.c)(3),
            { children: o } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(a.y, { className: "icon-xs shrink-0 text-secondary" })), (r[0] = t))
              : (t = r[0]),
            r[1] !== o
              ? ((s = (0, n.jsx)("div", {
                  role: "status",
                  children: (0, n.jsx)(l.ic, {
                    label: (0, n.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, n.jsx)("span", { className: "text-balance", children: o })],
                    }),
                    control: null,
                  }),
                })),
                (r[1] = o),
                (r[2] = s))
              : (s = r[2]),
            s
          )
        },
      },
    )
  },
  odCE(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("oyxz"),
      l = s("RNul")
    s.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            s,
            r,
            o = (0, i.c)(5),
            { children: u } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(l.y, { className: "icon-xs shrink-0 text-secondary" })), (o[0] = t))
              : (t = o[0]),
            o[1] !== u
              ? ((s =
                  void 0 === u
                    ? (0, n.jsx)(a.A, { id: "settings.panel.loading", defaultMessage: "Loading settings\u2026" })
                    : u),
                (o[1] = u),
                (o[2] = s))
              : (s = o[2]),
            o[3] !== s
              ? ((r = (0, n.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, n.jsx)("span", { className: "text-balance", children: s })],
                })),
                (o[3] = s),
                (o[4] = r))
              : (r = o[4]),
            r
          )
        },
      },
    )
  },
  rivV(e, t, s) {
    var n = s("CpsU"),
      i = s.n(n),
      a = s("qmMi"),
      l = s("OWtl"),
      r = s("rvFo"),
      o = s("kK7d"),
      u = s("LjYy"),
      c = s("GDNt")
    let d = ["none", "minimal", "low", "medium", "high", "xhigh", "max", "ultra"],
      m = ["fast", "ultrafast", "standard"],
      h = (0, a.vU)(
        l.u,
        ({
          accountId: e,
          balanceUnit: t = "credit",
          conversationIds: s,
          taskThreadIds: n,
          includeCreditsAvailability: a = null != n,
        }) => ({
          enabled: null != e && s.length > 0,
          queryKey: [
            "thread-usage",
            e,
            ...("usd" === t ? ["usd"] : []),
            ...(a ? [{ includeCreditsAvailability: a }] : []),
            ...s,
          ],
          queryFn: async ({ signal: e }) => {
            let t = async (s) => {
                try {
                  return await o.CodexRequest.safePost("/wham/usage/thread_usage/query", {
                    parameters: a ? { query: { include_credits_availability: !0 } } : void 0,
                    requestBody: { thread_ids: s },
                    signal: e,
                  })
                } catch (e) {
                  if (e instanceof c.fk) {
                    if (503 === e.status && e.message.includes("Thread usage is incomplete.")) {
                      if (1 === s.length) return { threads: [] }
                      let e = Math.ceil(s.length / 2),
                        n = [await t(s.slice(0, e)), await t(s.slice(e))]
                      return n.some((e) => null == e) ? null : { threads: n.flatMap((e) => e?.threads ?? []) }
                    }
                    if ([401, 403, 404, 503].includes(e.status)) return null
                  }
                  throw e
                }
              },
              n = []
            for (let e of i()(i()(s, 100), 2)) n.push(...(await Promise.all(e.map(t))))
            return n.some((e) => null == e) ? null : { threads: n.flatMap((e) => e?.threads ?? []) }
          },
          select: (e) => {
            var s, i, l
            let r
            return null == e
              ? null
              : new Map(
                  (null == n
                    ? e.threads
                    : ((s = e.threads),
                      (i = n),
                      (l = t),
                      (r = new Map(s.map((e) => [e.thread_id, e]))),
                      i.flatMap((e) => {
                        let t = e[0]
                        if (null == t) return []
                        let s = 0,
                          n = 0,
                          i = 0,
                          a = []
                        for (let t of e) {
                          let e = r.get(t)
                          if (null == e) return []
                          if ("usd" === l) {
                            if (null == e.native_usage_usd_micros) return []
                            n += e.native_usage_usd_micros
                          } else {
                            if (!1 === e.credits_available || null == e.estimated_usage_credits_micros) return []
                            s += e.estimated_usage_credits_micros
                          }
                          ;((i =
                            null != i && null != e.estimated_usage_usd_micros
                              ? i + e.estimated_usage_usd_micros
                              : null),
                            a.push(...(e.groups ?? [])))
                        }
                        return [
                          {
                            thread_id: t,
                            estimated_usage_credits_micros: s,
                            estimated_usage_usd_micros: i,
                            native_usage_usd_micros: n,
                            groups: a,
                          },
                        ]
                      }))
                  ).flatMap((e) => {
                    let s = "usd" === t ? e.native_usage_usd_micros : e.estimated_usage_credits_micros,
                      i = e.task_credit_status
                    if (
                      null == s ||
                      (a &&
                        null == n &&
                        "credit" === t &&
                        null == i &&
                        (!1 === e.credits_available || (null == e.credits_available && 0 === s)))
                    )
                      return []
                    let l = "usd" === t ? s : e.estimated_usage_usd_micros
                    return [
                      [
                        e.thread_id,
                        {
                          balanceUnit: "usd" === t ? "usd" : void 0,
                          ...(i && { taskCreditStatus: i }),
                          conversationId: e.thread_id,
                          costUsd: null == l ? null : l / 1e6,
                          creditsUsed: "usd" === t ? 0 : s / 1e6,
                          groups: e.groups ?? [],
                        },
                      ],
                    ]
                  }),
                )
          },
          retry: !1,
          refetchInterval: (e) => ((n?.length ?? s.length) === 1 || null != e.state.data) && r.D.ONE_MINUTE,
          refetchIntervalInBackground: (n?.length ?? s.length) === 1,
          refetchOnMount: n?.length === 1 ? "always" : 1 === s.length,
          staleTime: r.D.ONE_MINUTE,
        }),
      )
    s.d(
      t,
      {},
      {
        U9: function (e, t) {
          return (
            e === u.x.ENTERPRISE_CBP ||
            e === u.x.ENTERPRISE_CBP_USAGE_BASED ||
            e === u.x.ENTERPRISE_CBP_AUTOMATION ||
            e === u.x.ENT26 ||
            (e === u.x.EDUCATION_CBP && t)
          )
        },
        Xz: function (e, t, s = "credit") {
          let n = new Map()
          for (let i of e) {
            let e = "usd" === s ? i.native_usage_usd_micros : i.estimated_usage_credits_micros
            if (null == e || e < 0) continue
            let a = i[t],
              l = n.get(a)
            if (null == l) {
              n.set(a, {
                value: a,
                amountMicros: e,
                netNewInputTokens: i.net_new_input_tokens,
                cachedInputTokens: i.cached_input_tokens,
                outputTokens: i.output_tokens,
              })
              continue
            }
            ;((l.amountMicros += e),
              (l.netNewInputTokens =
                null != l.netNewInputTokens && null != i.net_new_input_tokens
                  ? l.netNewInputTokens + i.net_new_input_tokens
                  : null),
              (l.cachedInputTokens =
                null != l.cachedInputTokens && null != i.cached_input_tokens
                  ? l.cachedInputTokens + i.cached_input_tokens
                  : null),
              (l.outputTokens =
                null != l.outputTokens && null != i.output_tokens ? l.outputTokens + i.output_tokens : null))
          }
          let i = "reasoning_effort" === t ? d : "speed" === t ? m : null
          return Array.from(n.values()).sort((e, t) => {
            if (null == i) return t.amountMicros - e.amountMicros
            let s = i.indexOf(e.value ?? ""),
              n = i.indexOf(t.value ?? "")
            return (s < 0 ? i.length : s) - (n < 0 ? i.length : n)
          })
        },
        yy: h,
      },
    )
  },
  iH1J(e, t, s) {
    var n = s("F9Qp")
    s.d(
      t,
      {},
      {
        m: function ({ entry: e, keyPrefix: t }) {
          let s = [
            { bucket: e.snapshot.primary, role: "primary" },
            { bucket: e.snapshot.secondary, role: "secondary" },
          ]
            .filter((e) => (0, n._m)(e.bucket))
            .sort((e, t) => (e.bucket.windowDurationMins ?? 0) - (t.bucket.windowDurationMins ?? 0))
          if (0 === s.length) return []
          let i = new Map()
          return s.map(({ bucket: s, role: n }, a) => {
            var l, r, o
            let u,
              c =
                ((l = s),
                (r = n),
                (o = a),
                1 >= Math.abs((u = l.windowDurationMins ?? 0) - 300)
                  ? "five-hour"
                  : 1 >= Math.abs(u - 10080)
                    ? "weekly"
                    : 1 >= Math.abs(u - 43200)
                      ? "monthly"
                      : `${r}-${o}-${u}`),
              d = i.get(c) ?? 0
            i.set(c, d + 1)
            let m = 0 === d ? c : `${c}-${n}`
            return { key: `${t}-${m}`, bucket: s, limitName: e.limitName }
          })
        },
      },
    )
  },
  o6lh(e, t, s) {
    let n = { "--visualize-paint-gutter": "5px" },
      i = { dark: "#83c3ff", light: "#339cff" },
      a = `var(--vscode-charts-blue, light-dark(${i.light}, ${i.dark}))`,
      l = ["#f59a56", "#74d58b", "#f08fc0", "#aa91ef", "#5acbc2"],
      r = [
        "var(--color-text-info)",
        ...["#f3883b", "#5dc977", "#eb77b1", "#9b79ec", "#3ab9b1"].map((e, t) => `light-dark(${e}, ${l[t]})`),
      ],
      o = {
        dark: ["#f08fc0", "#6aa3ff", "#74d58b", "#f59a55", "#f5d45f", "#59cbc2", "#aa91ef", "#63c7e5"],
        light: ["#e879b0", "#4f8df7", "#62c87a", "#f08a42", "#f2c94c", "#43b8b0", "#9a7be8", "#4fbad9"],
      },
      u = "light-dark(rgb(255 255 255), rgb(24 24 24))"
    function c(e, t, s, n, i) {
      let a = e.getPropertyValue(s).trim()
      if (0 === a.length) return i
      t.style[n] = `var(${s})`
      let l = getComputedStyle(t)[n].trim()
      return l.length > 0 && l !== `var(${s})` && !l.includes("var(") ? l : a.includes("var(") ? i : a
    }
    function d(e) {
      let t = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4),
        s = t(Number.parseInt(e.slice(1, 3), 16) / 255),
        n = t(Number.parseInt(e.slice(3, 5), 16) / 255),
        i = t(Number.parseInt(e.slice(5, 7), 16) / 255),
        a = Math.cbrt(0.4122214708 * s + 0.5363325363 * n + 0.0514459929 * i),
        l = Math.cbrt(0.2119034982 * s + 0.6806995451 * n + 0.1073969566 * i),
        r = Math.cbrt(0.0883024619 * s + 0.2817188376 * n + 0.6299787005 * i),
        o = 1.9779984951 * a - 2.428592205 * l + 0.4505937099 * r,
        u = 0.0259040371 * a + 0.7827717662 * l - 0.808675766 * r
      return {
        chroma: Math.hypot(o, u),
        hue: ((180 * Math.atan2(u, o)) / Math.PI + 360) % 360,
        lightness: 0.2104542553 * a + 0.793617785 * l - 0.0040720468 * r,
      }
    }
    function m({ chroma: e, hue: t, lightness: s }) {
      let n = (t * Math.PI) / 180,
        i = e * Math.cos(n),
        a = e * Math.sin(n),
        l = (s + 0.3963377774 * i + 0.2158037573 * a) ** 3,
        r = (s - 0.1055613458 * i - 0.0638541728 * a) ** 3,
        o = (s - 0.0894841775 * i - 1.291485548 * a) ** 3,
        u = (e) => (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055)
      return [
        u(4.0767416621 * l - 3.3077115913 * r + 0.2309699292 * o),
        u(-1.2684380046 * l + 2.6097574011 * r - 0.3413193965 * o),
        u(-0.0041960863 * l - 0.7034186147 * r + 1.707614701 * o),
      ]
    }
    function h(e, t) {
      return Math.min(Math.abs(e - t), 360 - Math.abs(e - t))
    }
    function g(e, t, s) {
      return Math.max(t, Math.min(s, e))
    }
    s.d(
      t,
      {},
      {
        Kj: r,
        SH: u,
        r8: function ({
          backgroundColorToken: e = "--color-surface",
          includeReviewColors: t = !1,
          includeViewerPanelColors: s = !1,
          pageHeaderDensity: a,
          variant: l = "inline",
        } = {}) {
          let r = getComputedStyle(document.documentElement),
            f = "dark" === document.documentElement.dataset.theme ? "dark" : "light",
            p = document.createElement("div")
          ;((p.style.display = "none"), p.setAttribute("aria-hidden", "true"), document.body.appendChild(p))
          try {
            let x,
              y,
              _,
              b,
              v,
              j,
              w,
              A,
              C,
              M,
              S,
              k,
              E,
              N,
              T,
              I,
              P,
              R,
              L,
              O,
              D,
              U,
              F,
              q,
              H,
              z,
              B,
              G,
              $,
              W,
              V,
              X,
              Y,
              K,
              Z,
              Q,
              J,
              ee,
              et,
              es,
              en,
              ei,
              ea,
              el,
              er,
              eo,
              eu,
              ec,
              ed,
              em,
              eh,
              eg = c(r, p, "--text-base", "fontSize", "14px"),
              ef = c(r, p, "--codex-chat-font-size", "fontSize", eg),
              ep = c(r, p, "--text-sm", "fontSize", "14px"),
              ex = c(r, p, "--text-sm--line-height", "lineHeight", "20px"),
              ey =
                ((x = "--color-surface-elevated-secondary"),
                (y = "light-dark(rgb(255 255 255), rgb(45 45 45))"),
                c(r, p, x, "backgroundColor", y)),
              e_ = ((_ = "--color-text"), (b = "light-dark(rgb(26 28 31), rgb(255 255 255))"), c(r, p, _, "color", b)),
              eb =
                ((v = "--codex-theme-accent-text"),
                (j = "light-dark(rgb(51 156 255), rgb(131 195 255))"),
                c(r, p, v, "color", j)),
              ev = (function (e, t) {
                let s = (function (e) {
                    let t = e.trim().match(/^#([\da-f]{6})(?:[\da-f]{2})?$/i)?.[1]
                    if (null != t) return `#${t.toLowerCase()}`
                    let s = e.trim().match(/^rgba?\((.*)\)$/i)?.[1],
                      n = e.trim().match(/^color\(\s*srgb\s+(.*)\)$/i)?.[1],
                      i = (s ?? n)
                        ?.split("/")[0]
                        ?.trim()
                        .split(/[,\s]+/)
                        .filter(Boolean)
                        .slice(0, 3)
                        .map(Number)
                    if (i?.length !== 3 || i.some(Number.isNaN)) return null
                    let a = null == n ? 1 : 255
                    return `#${i
                      .map((e) =>
                        Math.round(g(e * a, 0, 255))
                          .toString(16)
                          .padStart(2, "0"),
                      )
                      .join("")}`
                  })(e),
                  n = d(s ?? i[t]),
                  a = 0.96 + 0.12 * g((n.chroma - 0.06) / 0.16, 0, 1),
                  l = o[t].map(d).map((e) => ({ ...e, chroma: e.chroma * a })),
                  r = l.reduce((e, t) => (h(t.hue, n.hue) < h(e.hue, n.hue) ? t : e))
                function u(a) {
                  let o = l[a]
                  return n.chroma >= 0.04 && o === r && h(o.hue, n.hue) < h(n.hue, 25)
                    ? null == s
                      ? i[t]
                      : e
                    : (function (e) {
                        let t = { ...e }
                        for (; !m(t).every((e) => e >= -1e-4 && e <= 1.0001) && t.chroma > 0.005;) t.chroma *= 0.96
                        return `#${m(t)
                          .map((e) =>
                            Math.round(255 * g(e, 0, 1))
                              .toString(16)
                              .padStart(2, "0"),
                          )
                          .join("")}`
                      })(o)
                }
                return {
                  "--viz-series-1": u(1),
                  "--viz-series-2": u(3),
                  "--viz-series-3": u(2),
                  "--viz-series-4": u(0),
                  "--viz-series-5": u(6),
                  "--viz-series-6": u(5),
                }
              })(eb, f),
              ej = c(r, p, "--radius-lg", "borderRadius", "10px")
            return {
              ...(null != a && {
                "--page-header-clearance":
                  ((eh = "compact" === a ? "--viewer-header-height-compact" : "--viewer-header-height"),
                  c(r, p, eh, "paddingInlineStart", "0px")),
              }),
              ...(s && {
                "--color-background-viewer-control":
                  ((w = "--color-background-viewer-control"), (A = ey), c(r, p, w, "backgroundColor", A)),
                "--color-surface-elevated":
                  ((C = "--color-surface-elevated"), (M = ey), c(r, p, C, "backgroundColor", M)),
                "--color-text-secondary": ((S = "--color-text-secondary"), (k = e_), c(r, p, S, "color", k)),
              }),
              ...(t && {
                "--color-background-info-solid":
                  ((E = "--color-background-info-solid"), (N = "#339cff"), c(r, p, E, "backgroundColor", N)),
                "--color-text-info": ((T = "--color-text-info"), (I = "#339cff"), c(r, p, T, "color", I)),
              }),
              "--accent":
                ((P = "--codex-theme-accent-background-subtle"),
                (R = "light-dark(rgb(229 242 255), rgb(13 39 63))"),
                c(r, p, P, "backgroundColor", R)),
              "--accent-foreground": eb,
              "--background": "live" === l ? ey : ((L = e), (O = u), c(r, p, L, "backgroundColor", O)),
              "--border":
                ((D = "--color-border"),
                (U = "light-dark(rgb(26 28 31 / 8%), rgb(255 255 255 / 8.2%))"),
                c(r, p, D, "color", U)),
              "--border-strong":
                ((F = "--color-border-strong"),
                (q = "light-dark(rgb(26 28 31 / 12%), rgb(255 255 255 / 12%))"),
                c(r, p, F, "color", q)),
              "--card": `color-mix(in oklab, ${e_} 5%, transparent)`,
              "--card-foreground": e_,
              "--corner-shape": r.getPropertyValue("--codex-corner-shape").trim() || "round",
              "--control-spacing": c(r, p, "--spacing-button-toolbar-inline", "paddingInlineStart", "12px"),
              "--cursor-interaction":
                getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
              "--destructive":
                ((H = "--color-text-warning"),
                (z = "light-dark(rgb(226 85 7), rgb(255 133 73))"),
                c(r, p, H, "color", z)),
              "--font-mono": c(
                r,
                p,
                "--font-mono",
                "fontFamily",
                'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              ),
              "--font-sans": c(r, p, "--font-sans", "fontFamily", '-apple-system, system-ui, "Segoe UI", sans-serif'),
              "--font-size-base": "live" === l ? ep : ef,
              "--font-weight-normal": "live" === l ? "400" : c(r, p, "--font-ui-weight", "fontWeight", "400"),
              ...("live" === l && {
                "--font-line-height-base": ex,
                "--font-size-small": `max(11px, ${c(r, p, "--text-xs", "fontSize", "12px")})`,
                "--icon-size": "18px",
              }),
              "--foreground": e_,
              "--input":
                ((B = "--color-border-primary-outline"),
                (G = "light-dark(rgb(26 28 31 / 11.8%), color-mix(in oklab, rgb(0 0 0) 10%, transparent))"),
                c(r, p, B, "color", G)),
              "--muted": `color-mix(in srgb, ${e_} 10%, transparent)`,
              "--muted-foreground":
                (($ = "--color-codex-description"),
                (W = "light-dark(rgb(26 28 31 / 49.4%), rgb(255 255 255 / 49.8%))"),
                c(r, p, $, "color", W)),
              "--popover": ey,
              "--popover-foreground": ((V = "--color-text"), (X = e_), c(r, p, V, "color", X)),
              "--primary": eb,
              "--primary-foreground":
                ((Y = "--color-text-inverse"),
                (K = "light-dark(rgb(255 255 255), rgb(13 13 13))"),
                c(r, p, Y, "color", K)),
              "--radius": ej,
              "--radius-2xl": c(r, p, "--radius-2xl", "borderRadius", "16px"),
              "--radius-lg": ej,
              "--radius-md": c(r, p, "--radius-md", "borderRadius", "8px"),
              "--radius-sm": c(r, p, "--radius-sm", "borderRadius", "6px"),
              "--ring":
                ((Z = "--color-ring"),
                (Q = "light-dark(rgb(51 156 255), rgb(131 195 255 / 76%))"),
                c(r, p, Z, "color", Q)),
              "--secondary":
                ((J = "--color-background-primary-soft-alpha"),
                (ee = "light-dark(rgb(243 243 243), rgb(48 48 48))"),
                c(r, p, J, "backgroundColor", ee)),
              "--secondary-foreground": e_,
              "--blue":
                ((et = "--color-chart-blue"),
                (es = "light-dark(rgb(51 156 255), rgb(51 156 255))"),
                c(r, p, et, "color", es)),
              "--orange":
                ((en = "--color-chart-orange"),
                (ei = "light-dark(rgb(226 85 7), rgb(251 106 34))"),
                c(r, p, en, "color", ei)),
              "--green":
                ((ea = "--color-chart-green"),
                (el = "light-dark(rgb(0 162 64), rgb(64 201 119))"),
                c(r, p, ea, "color", el)),
              "--red":
                ((er = "--color-chart-red"),
                (eo = "light-dark(rgb(224 46 42), rgb(255 103 100))"),
                c(r, p, er, "color", eo)),
              "--purple":
                ((eu = "--color-chart-purple"),
                (ec = "light-dark(rgb(146 79 247), rgb(173 123 249))"),
                c(r, p, eu, "color", ec)),
              "--yellow":
                ((ed = "--color-chart-yellow"),
                (em = "light-dark(rgb(255 195 0), rgb(255 210 64))"),
                c(r, p, ed, "color", em)),
              ...n,
              ...ev,
            }
          } finally {
            p.remove()
          }
        },
        sh: a,
      },
    )
  },
  GvFV(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "circle-info-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 1.019531, y: 1.019531, width: 9.960938, height: 9.960938 },
        visualBounds: { x: 1.019531, y: 1.019531, width: 9.960938, height: 9.960938 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.019531, y: 1.019531, width: 9.960938, height: 9.960938 },
        center: { x: 6, y: 6 },
        insets: { top: 1.019531, right: 1.019531, bottom: 1.019531, left: 1.019531 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6, y: 6 }, foreground: { x: 6, y: 6 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6 5.51953C6.2651 5.51953 6.48047 5.7349 6.48047 6V8C6.48047 8.2651 6.2651 8.48047 6 8.48047C5.7349 8.48047 5.51953 8.2651 5.51953 8V6C5.51953 5.7349 5.7349 5.51953 6 5.51953Z" fill="currentColor"/> <path d="M6.12305 3.58789C6.40097 3.64481 6.61035 3.8908 6.61035 4.18555C6.61035 4.52244 6.33689 4.7959 6 4.7959C5.70525 4.7959 5.45926 4.58651 5.40234 4.30859L5.38965 4.18555L5.40234 4.0625C5.45926 3.78458 5.70525 3.5752 6 3.5752L6.12305 3.58789Z" fill="currentColor"/> <path d="M6 1.01953C8.75038 1.01953 10.9805 3.24962 10.9805 6C10.9805 8.75038 8.75038 10.9805 6 10.9805C3.24962 10.9805 1.01953 8.75038 1.01953 6C1.01953 3.24962 3.24962 1.01953 6 1.01953ZM6 1.98047C3.77982 1.98047 1.98047 3.77982 1.98047 6C1.98047 8.22018 3.77982 10.0195 6 10.0195C8.22018 10.0195 10.0195 8.22018 10.0195 6C10.0195 3.77982 8.22018 1.98047 6 1.98047Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { q: n })
  },
  plnw(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "megaphone-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
        visualBounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.208496, y: 2.350342, width: 17.166992, height: 16.024658 },
        center: { x: 9.791992, y: 10.362671 },
        insets: { top: 2.350342, right: 1.624512, bottom: 1.625, left: 1.208496 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.791992, y: 10.362671 },
          foreground: { x: 9.791992, y: 10.362671 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M14.9507 2.51071C16.6106 1.89607 18.3753 3.12451 18.3755 4.8945V13.9375C18.3755 15.6723 16.6756 16.8972 15.0298 16.3486L12.1255 15.3799V15.417C12.1254 16.2155 11.8831 16.9743 11.3364 17.5371C10.7856 18.104 10.0195 18.3749 9.1665 18.375C8.31369 18.3749 7.54831 18.1039 6.99756 17.5371C6.45082 16.9743 6.20855 16.2156 6.2085 15.417V13.4101C6.13435 13.3877 6.05753 13.375 5.97998 13.375H3.75049C2.34676 13.375 1.2085 12.2367 1.2085 10.833V8.33298C1.20882 6.92952 2.34696 5.79196 3.75049 5.79196H5.95166C6.04536 5.79193 6.1382 5.77467 6.22607 5.74216L14.9507 2.51071ZM7.9585 15.417C7.95854 15.8678 8.09108 16.151 8.25244 16.3174C8.40993 16.4794 8.6866 16.6249 9.1665 16.625C9.64666 16.6249 9.92307 16.4794 10.0806 16.3174C10.2421 16.1511 10.3754 15.8681 10.3755 15.417V14.7968L7.9585 13.9912V15.417ZM16.6255 4.8945C16.6253 4.34332 16.075 3.96092 15.5581 4.15231L6.92236 7.35055V11.8017L15.5835 14.6884C16.096 14.8591 16.6255 14.4777 16.6255 13.9375V4.8945ZM3.75049 7.54196C3.31346 7.54196 2.95882 7.89602 2.9585 8.33298V10.833C2.9585 11.2702 3.31326 11.625 3.75049 11.625H5.17236V7.54196H3.75049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { T: n })
  },
  yfk0(e, t, s) {
    let n = (0, s("ESTr").a)({
      name: "megaphone-regular-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 2.083496, y: 3.910889, width: 27.166992, height: 25.339111 },
        visualBounds: { x: 2.083496, y: 3.910889, width: 27.166992, height: 25.339111 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.083496, y: 3.910889, width: 27.166992, height: 25.339111 },
        center: { x: 15.666992, y: 16.580444 },
        insets: { top: 3.910889, right: 2.749512, bottom: 2.75, left: 2.083496 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 15.666992, y: 16.580444 },
          foreground: { x: 15.666992, y: 16.580444 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M23.9731 4.15811C26.531 3.21084 29.2502 5.10338 29.2505 7.83096V22.2997C29.2505 24.973 26.6313 26.8608 24.0952 26.0155L19.2505 24.4003V24.6669C19.2505 25.9151 18.8716 27.0884 18.0298 27.955C17.1822 28.8273 15.9992 29.2499 14.6665 29.2499C13.3337 29.2498 12.1508 28.8274 11.3032 27.955C10.4614 27.0884 10.0835 25.9151 10.0835 24.6669V21.3446L10.0151 21.3222C9.87096 21.2742 9.71983 21.25 9.56787 21.2499H6.00049C3.83737 21.2499 2.0835 19.496 2.0835 17.3329V13.3329C2.08377 11.17 3.83754 9.4169 6.00049 9.4169H9.52197C9.68991 9.4169 9.85667 9.38636 10.0142 9.32803L23.9731 4.15811ZM12.5835 24.6669C12.5835 25.4187 12.8057 25.9127 13.0972 26.2128C13.3829 26.5067 13.8666 26.7498 14.6665 26.7499C15.4668 26.7499 15.9511 26.5068 16.2368 26.2128C16.5283 25.9127 16.7505 25.4187 16.7505 24.6669V23.5673L12.5835 22.1776V24.6669ZM26.7505 7.83096C26.7502 6.84456 25.7664 6.16025 24.8413 6.50283L11.0835 11.5976V19.0429L24.8853 23.6444C25.8026 23.9502 26.7505 23.2667 26.7505 22.2997V7.83096ZM6.00049 11.9169C5.21826 11.9169 4.58377 12.5507 4.5835 13.3329V17.3329C4.5835 18.1153 5.21808 18.7499 6.00049 18.7499H8.5835V11.9169H6.00049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { o: n })
  },
  e2Qa(e, t, s) {
    var n = s("Db1a"),
      i = s("YAwX"),
      a = s("DZhG"),
      l = s("dQbG"),
      r = s("Rjuc"),
      o = s("lCw0")
    s.d(
      t,
      {},
      {
        A: function (e, t, s) {
          var u = null,
            c = (0, i.A)(!0),
            d = null,
            m = a.A,
            h = null,
            g = (0, r.i)(f)
          function f(i) {
            var a,
              l,
              r,
              o,
              f,
              p = (i = (0, n.A)(i)).length,
              x = !1,
              y = Array(p),
              _ = Array(p)
            for (null == d && (h = m((f = g()))), a = 0; a <= p; ++a) {
              if (!(a < p && c((o = i[a]), a, i)) === x)
                if ((x = !x)) ((l = a), h.areaStart(), h.lineStart())
                else {
                  for (h.lineEnd(), h.lineStart(), r = a - 1; r >= l; --r) h.point(y[r], _[r])
                  ;(h.lineEnd(), h.areaEnd())
                }
              x && ((y[a] = +e(o, a, i)), (_[a] = +t(o, a, i)), h.point(u ? +u(o, a, i) : y[a], s ? +s(o, a, i) : _[a]))
            }
            if (f) return ((h = null), f + "" || null)
          }
          function p() {
            return (0, l.A)().defined(c).curve(m).context(d)
          }
          return (
            (e = "function" == typeof e ? e : void 0 === e ? o.x : (0, i.A)(+e)),
            (t = "function" == typeof t ? t : void 0 === t ? (0, i.A)(0) : (0, i.A)(+t)),
            (s = "function" == typeof s ? s : void 0 === s ? o.y : (0, i.A)(+s)),
            (f.x = function (t) {
              return arguments.length ? ((e = "function" == typeof t ? t : (0, i.A)(+t)), (u = null), f) : e
            }),
            (f.x0 = function (t) {
              return arguments.length ? ((e = "function" == typeof t ? t : (0, i.A)(+t)), f) : e
            }),
            (f.x1 = function (e) {
              return arguments.length ? ((u = null == e ? null : "function" == typeof e ? e : (0, i.A)(+e)), f) : u
            }),
            (f.y = function (e) {
              return arguments.length ? ((t = "function" == typeof e ? e : (0, i.A)(+e)), (s = null), f) : t
            }),
            (f.y0 = function (e) {
              return arguments.length ? ((t = "function" == typeof e ? e : (0, i.A)(+e)), f) : t
            }),
            (f.y1 = function (e) {
              return arguments.length ? ((s = null == e ? null : "function" == typeof e ? e : (0, i.A)(+e)), f) : s
            }),
            (f.lineX0 = f.lineY0 =
              function () {
                return p().x(e).y(t)
              }),
            (f.lineY1 = function () {
              return p().x(e).y(s)
            }),
            (f.lineX1 = function () {
              return p().x(u).y(t)
            }),
            (f.defined = function (e) {
              return arguments.length ? ((c = "function" == typeof e ? e : (0, i.A)(!!e)), f) : c
            }),
            (f.curve = function (e) {
              return arguments.length ? ((m = e), null != d && (h = m(d)), f) : m
            }),
            (f.context = function (e) {
              return arguments.length ? (null == e ? (d = h = null) : (h = m((d = e))), f) : d
            }),
            f
          )
        },
      },
    )
  },
  vbRY(e, t, s) {
    function n(e, t, s) {
      e._context.bezierCurveTo(
        (2 * e._x0 + e._x1) / 3,
        (2 * e._y0 + e._y1) / 3,
        (e._x0 + 2 * e._x1) / 3,
        (e._y0 + 2 * e._y1) / 3,
        (e._x0 + 4 * e._x1 + t) / 6,
        (e._y0 + 4 * e._y1 + s) / 6,
      )
    }
    function i(e) {
      this._context = e
    }
    ;((i.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = 0 / 0
      },
      lineStart: function () {
        ;((this._x0 = this._x1 = this._y0 = this._y1 = 0 / 0), (this._point = 0))
      },
      lineEnd: function () {
        switch (this._point) {
          case 3:
            n(this, this._x1, this._y1)
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }
        ;((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line))
      },
      point: function (e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            ;((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
            break
          case 1:
            this._point = 2
            break
          case 2:
            ;((this._point = 3), this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6))
          default:
            n(this, e, t)
        }
        ;((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t))
      },
    }),
      s.d(
        t,
        {},
        {
          Ay: function (e) {
            return new i(e)
          },
          xO: i,
          zx: n,
        },
      ))
  },
  Rb9v(e, t, s) {
    var n = s("Qstg"),
      i = s("vbRY")
    function a(e) {
      this._context = e
    }
    ;((a.prototype = {
      areaStart: n.A,
      areaEnd: n.A,
      lineStart: function () {
        ;((this._x0 =
          this._x1 =
          this._x2 =
          this._x3 =
          this._x4 =
          this._y0 =
          this._y1 =
          this._y2 =
          this._y3 =
          this._y4 =
            0 / 0),
          (this._point = 0))
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            ;(this._context.moveTo(this._x2, this._y2), this._context.closePath())
            break
          case 2:
            ;(this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
              this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
              this._context.closePath())
            break
          case 3:
            ;(this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4))
        }
      },
      point: function (e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            ;((this._point = 1), (this._x2 = e), (this._y2 = t))
            break
          case 1:
            ;((this._point = 2), (this._x3 = e), (this._y3 = t))
            break
          case 2:
            ;((this._point = 3),
              (this._x4 = e),
              (this._y4 = t),
              this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6))
            break
          default:
            ;(0, i.zx)(this, e, t)
        }
        ;((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t))
      },
    }),
      s.d(
        t,
        {},
        {
          A: function (e) {
            return new a(e)
          },
        },
      ))
  },
  bX2U(e, t, s) {
    var n = s("vbRY")
    function i(e) {
      this._context = e
    }
    ;((i.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = 0 / 0
      },
      lineStart: function () {
        ;((this._x0 = this._x1 = this._y0 = this._y1 = 0 / 0), (this._point = 0))
      },
      lineEnd: function () {
        ;((this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line))
      },
      point: function (e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            this._point = 1
            break
          case 1:
            this._point = 2
            break
          case 2:
            this._point = 3
            var s = (this._x0 + 4 * this._x1 + e) / 6,
              i = (this._y0 + 4 * this._y1 + t) / 6
            this._line ? this._context.lineTo(s, i) : this._context.moveTo(s, i)
            break
          case 3:
            this._point = 4
          default:
            ;(0, n.zx)(this, e, t)
        }
        ;((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t))
      },
    }),
      s.d(
        t,
        {},
        {
          A: function (e) {
            return new i(e)
          },
        },
      ))
  },
  GJI9(e, t, s) {
    class n {
      constructor(e, t) {
        ;((this._context = e), (this._x = t))
      }
      areaStart() {
        this._line = 0
      }
      areaEnd() {
        this._line = 0 / 0
      }
      lineStart() {
        this._point = 0
      }
      lineEnd() {
        ;((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line))
      }
      point(e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            ;((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
            break
          case 1:
            this._point = 2
          default:
            this._x
              ? this._context.bezierCurveTo((this._x0 = (this._x0 + e) / 2), this._y0, this._x0, t, e, t)
              : this._context.bezierCurveTo(this._x0, (this._y0 = (this._y0 + t) / 2), e, this._y0, e, t)
        }
        ;((this._x0 = e), (this._y0 = t))
      }
    }
    s.d(
      t,
      {},
      {
        dJ: function (e) {
          return new n(e, !0)
        },
        kl: function (e) {
          return new n(e, !1)
        },
      },
    )
  },
  DZhG(e, t, s) {
    function n(e) {
      this._context = e
    }
    ;((n.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = 0 / 0
      },
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        ;((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line))
      },
      point: function (e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            ;((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
            break
          case 1:
            this._point = 2
          default:
            this._context.lineTo(e, t)
        }
      },
    }),
      s.d(
        t,
        {},
        {
          A: function (e) {
            return new n(e)
          },
        },
      ))
  },
  GTr4(e, t, s) {
    var n = s("Qstg")
    function i(e) {
      this._context = e
    }
    ;((i.prototype = {
      areaStart: n.A,
      areaEnd: n.A,
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        this._point && this._context.closePath()
      },
      point: function (e, t) {
        ;((e *= 1),
          (t *= 1),
          this._point ? this._context.lineTo(e, t) : ((this._point = 1), this._context.moveTo(e, t)))
      },
    }),
      s.d(
        t,
        {},
        {
          A: function (e) {
            return new i(e)
          },
        },
      ))
  },
  tusw(e, t, s) {
    function n(e, t, s) {
      var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
        l = (s - e._y1) / (i || (n < 0 && -0))
      return (
        ((a < 0 ? -1 : 1) + (l < 0 ? -1 : 1)) *
          Math.min(Math.abs(a), Math.abs(l), 0.5 * Math.abs((a * i + l * n) / (n + i))) || 0
      )
    }
    function i(e, t) {
      var s = e._x1 - e._x0
      return s ? ((3 * (e._y1 - e._y0)) / s - t) / 2 : t
    }
    function a(e, t, s) {
      var n = e._x0,
        i = e._y0,
        a = e._x1,
        l = e._y1,
        r = (a - n) / 3
      e._context.bezierCurveTo(n + r, i + r * t, a - r, l - r * s, a, l)
    }
    function l(e) {
      this._context = e
    }
    function r(e) {
      this._context = new o(e)
    }
    function o(e) {
      this._context = e
    }
    ;((l.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = 0 / 0
      },
      lineStart: function () {
        ;((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = 0 / 0), (this._point = 0))
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1)
            break
          case 3:
            a(this, this._t0, i(this, this._t0))
        }
        ;((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line))
      },
      point: function (e, t) {
        var s = 0 / 0
        if (((t *= 1), (e *= 1) !== this._x1 || t !== this._y1)) {
          switch (this._point) {
            case 0:
              ;((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
              break
            case 1:
              this._point = 2
              break
            case 2:
              ;((this._point = 3), a(this, i(this, (s = n(this, e, t))), s))
              break
            default:
              a(this, this._t0, (s = n(this, e, t)))
          }
          ;((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t), (this._t0 = s))
        }
      },
    }),
      ((r.prototype = Object.create(l.prototype)).point = function (e, t) {
        l.prototype.point.call(this, t, e)
      }),
      (o.prototype = {
        moveTo: function (e, t) {
          this._context.moveTo(t, e)
        },
        closePath: function () {
          this._context.closePath()
        },
        lineTo: function (e, t) {
          this._context.lineTo(t, e)
        },
        bezierCurveTo: function (e, t, s, n, i, a) {
          this._context.bezierCurveTo(t, e, n, s, a, i)
        },
      }),
      s.d(
        t,
        {},
        {
          G: function (e) {
            return new l(e)
          },
          N: function (e) {
            return new r(e)
          },
        },
      ))
  },
  tbbF(e, t, s) {
    function n(e) {
      this._context = e
    }
    function i(e) {
      var t,
        s,
        n = e.length - 1,
        i = Array(n),
        a = Array(n),
        l = Array(n)
      for (i[0] = 0, a[0] = 2, l[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
        ((i[t] = 1), (a[t] = 4), (l[t] = 4 * e[t] + 2 * e[t + 1]))
      for (i[n - 1] = 2, a[n - 1] = 7, l[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
        ((s = i[t] / a[t - 1]), (a[t] -= s), (l[t] -= s * l[t - 1]))
      for (i[n - 1] = l[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (l[t] - i[t + 1]) / a[t]
      for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1]
      return [i, a]
    }
    ;((n.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = 0 / 0
      },
      lineStart: function () {
        ;((this._x = []), (this._y = []))
      },
      lineEnd: function () {
        var e = this._x,
          t = this._y,
          s = e.length
        if (s)
          if ((this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), 2 === s))
            this._context.lineTo(e[1], t[1])
          else
            for (var n = i(e), a = i(t), l = 0, r = 1; r < s; ++l, ++r)
              this._context.bezierCurveTo(n[0][l], a[0][l], n[1][l], a[1][l], e[r], t[r])
        ;((this._line || (0 !== this._line && 1 === s)) && this._context.closePath(),
          (this._line = 1 - this._line),
          (this._x = this._y = null))
      },
      point: function (e, t) {
        ;(this._x.push(+e), this._y.push(+t))
      },
    }),
      s.d(
        t,
        {},
        {
          A: function (e) {
            return new n(e)
          },
        },
      ))
  },
  MTEf(e, t, s) {
    function n(e, t) {
      ;((this._context = e), (this._t = t))
    }
    ;((n.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = 0 / 0
      },
      lineStart: function () {
        ;((this._x = this._y = 0 / 0), (this._point = 0))
      },
      lineEnd: function () {
        ;(0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line)))
      },
      point: function (e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            ;((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
            break
          case 1:
            this._point = 2
          default:
            if (this._t <= 0) (this._context.lineTo(this._x, t), this._context.lineTo(e, t))
            else {
              var s = this._x * (1 - this._t) + e * this._t
              ;(this._context.lineTo(s, this._y), this._context.lineTo(s, t))
            }
        }
        ;((this._x = e), (this._y = t))
      },
    }),
      s.d(
        t,
        {},
        {
          Ay: function (e) {
            return new n(e, 0.5)
          },
          Ko: function (e) {
            return new n(e, 0)
          },
          Ps: function (e) {
            return new n(e, 1)
          },
        },
      ))
  },
  dQbG(e, t, s) {
    var n = s("Db1a"),
      i = s("YAwX"),
      a = s("DZhG"),
      l = s("Rjuc"),
      r = s("lCw0")
    s.d(
      t,
      {},
      {
        A: function (e, t) {
          var s = (0, i.A)(!0),
            o = null,
            u = a.A,
            c = null,
            d = (0, l.i)(m)
          function m(i) {
            var a,
              l,
              r,
              m = (i = (0, n.A)(i)).length,
              h = !1
            for (null == o && (c = u((r = d()))), a = 0; a <= m; ++a)
              (!(a < m && s((l = i[a]), a, i)) === h && ((h = !h) ? c.lineStart() : c.lineEnd()),
                h && c.point(+e(l, a, i), +t(l, a, i)))
            if (r) return ((c = null), r + "" || null)
          }
          return (
            (e = "function" == typeof e ? e : void 0 === e ? r.x : (0, i.A)(e)),
            (t = "function" == typeof t ? t : void 0 === t ? r.y : (0, i.A)(t)),
            (m.x = function (t) {
              return arguments.length ? ((e = "function" == typeof t ? t : (0, i.A)(+t)), m) : e
            }),
            (m.y = function (e) {
              return arguments.length ? ((t = "function" == typeof e ? e : (0, i.A)(+e)), m) : t
            }),
            (m.defined = function (e) {
              return arguments.length ? ((s = "function" == typeof e ? e : (0, i.A)(!!e)), m) : s
            }),
            (m.curve = function (e) {
              return arguments.length ? ((u = e), null != o && (c = u(o)), m) : u
            }),
            (m.context = function (e) {
              return arguments.length ? (null == e ? (o = c = null) : (c = u((o = e))), m) : o
            }),
            m
          )
        },
      },
    )
  },
  Qstg(e, t, s) {
    s.d(t, {}, { A: function () {} })
  },
  IHxH(e, t, s) {
    var n = s("Oves")
    s.d(
      t,
      {},
      {
        A: function (e, t) {
          if ((i = e.length) > 0) {
            for (var s, i, a, l = 0, r = e[0].length; l < r; ++l) {
              for (a = s = 0; s < i; ++s) a += e[s][l][1] || 0
              if (a) for (s = 0; s < i; ++s) e[s][l][1] /= a
            }
            ;(0, n.A)(e, t)
          }
        },
      },
    )
  },
  Oves(e, t, s) {
    s.d(
      t,
      {},
      {
        A: function (e, t) {
          if ((i = e.length) > 1)
            for (var s, n, i, a = 1, l = e[t[0]], r = l.length; a < i; ++a)
              for (n = l, l = e[t[a]], s = 0; s < r; ++s) l[s][1] += l[s][0] = isNaN(n[s][1]) ? n[s][0] : n[s][1]
        },
      },
    )
  },
  jCc0(e, t, s) {
    s.d(
      t,
      {},
      {
        A: function (e) {
          for (var t = e.length, s = Array(t); --t >= 0;) s[t] = t
          return s
        },
      },
    )
  },
  Rjuc(e, t, s) {
    s.d(t, { i: () => o })
    let n = Math.PI,
      i = 2 * n,
      a = i - 1e-6
    function l(e) {
      this._ += e[0]
      for (let t = 1, s = e.length; t < s; ++t) this._ += arguments[t] + e[t]
    }
    class r {
      constructor(e) {
        ;((this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == e
              ? l
              : (function (e) {
                  let t = Math.floor(e)
                  if (!(t >= 0)) throw Error(`invalid digits: ${e}`)
                  if (t > 15) return l
                  let s = 10 ** t
                  return function (e) {
                    this._ += e[0]
                    for (let t = 1, n = e.length; t < n; ++t) this._ += Math.round(arguments[t] * s) / s + e[t]
                  }
                })(e)))
      }
      moveTo(e, t) {
        this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`
      }
      closePath() {
        null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`)
      }
      lineTo(e, t) {
        this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`
      }
      quadraticCurveTo(e, t, s, n) {
        this._append`Q${+e},${+t},${(this._x1 = +s)},${(this._y1 = +n)}`
      }
      bezierCurveTo(e, t, s, n, i, a) {
        this._append`C${+e},${+t},${+s},${+n},${(this._x1 = +i)},${(this._y1 = +a)}`
      }
      arcTo(e, t, s, i, a) {
        if (((e *= 1), (t *= 1), (s *= 1), (i *= 1), (a *= 1) < 0)) throw Error(`negative radius: ${a}`)
        let l = this._x1,
          r = this._y1,
          o = s - e,
          u = i - t,
          c = l - e,
          d = r - t,
          m = c * c + d * d
        if (null === this._x1) this._append`M${(this._x1 = e)},${(this._y1 = t)}`
        else if (m > 1e-6)
          if (Math.abs(d * o - u * c) > 1e-6 && a) {
            let h = s - l,
              g = i - r,
              f = o * o + u * u,
              p = Math.sqrt(f),
              x = Math.sqrt(m),
              y = a * Math.tan((n - Math.acos((f + m - (h * h + g * g)) / (2 * p * x))) / 2),
              _ = y / x,
              b = y / p
            ;(Math.abs(_ - 1) > 1e-6 && this._append`L${e + _ * c},${t + _ * d}`,
              this._append`A${a},${a},0,0,${+(d * h > c * g)},${(this._x1 = e + b * o)},${(this._y1 = t + b * u)}`)
          } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`
      }
      arc(e, t, s, l, r, o) {
        if (((e *= 1), (t *= 1), (s *= 1), (o = !!o), s < 0)) throw Error(`negative radius: ${s}`)
        let u = s * Math.cos(l),
          c = s * Math.sin(l),
          d = e + u,
          m = t + c,
          h = 1 ^ o,
          g = o ? l - r : r - l
        ;(null === this._x1
          ? this._append`M${d},${m}`
          : (Math.abs(this._x1 - d) > 1e-6 || Math.abs(this._y1 - m) > 1e-6) && this._append`L${d},${m}`,
          s &&
            (g < 0 && (g = (g % i) + i),
            g > a
              ? this
                  ._append`A${s},${s},0,1,${h},${e - u},${t - c}A${s},${s},0,1,${h},${(this._x1 = d)},${(this._y1 = m)}`
              : g > 1e-6 &&
                this
                  ._append`A${s},${s},0,${+(g >= n)},${h},${(this._x1 = e + s * Math.cos(r))},${(this._y1 = t + s * Math.sin(r))}`))
      }
      rect(e, t, s, n) {
        this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(s *= 1)}v${+n}h${-s}Z`
      }
      toString() {
        return this._
      }
    }
    function o(e) {
      let t = 3
      return (
        (e.digits = function (s) {
          if (!arguments.length) return t
          if (null == s) t = null
          else {
            let e = Math.floor(s)
            if (!(e >= 0)) throw RangeError(`invalid digits: ${s}`)
            t = e
          }
          return e
        }),
        () => new r(t)
      )
    }
    r.prototype
  },
  lCw0(e, t, s) {
    s.d(
      t,
      {},
      {
        x: function (e) {
          return e[0]
        },
        y: function (e) {
          return e[1]
        },
      },
    )
  },
  IJX4(e, t, s) {
    var n = s("Db1a"),
      i = s("YAwX"),
      a = s("Oves"),
      l = s("jCc0")
    function r(e, t) {
      return e[t]
    }
    function o(e) {
      let t = []
      return ((t.key = e), t)
    }
    s.d(
      t,
      {},
      {
        A: function () {
          var e = (0, i.A)([]),
            t = l.A,
            s = a.A,
            u = r
          function c(i) {
            var a,
              l,
              r = Array.from(e.apply(this, arguments), o),
              c = r.length,
              d = -1
            for (let e of i) for (a = 0, ++d; a < c; ++a) (r[a][d] = [0, +u(e, r[a].key, d, i)]).data = e
            for (a = 0, l = (0, n.A)(t(r)); a < c; ++a) r[l[a]].index = a
            return (s(r, l), r)
          }
          return (
            (c.keys = function (t) {
              return arguments.length ? ((e = "function" == typeof t ? t : (0, i.A)(Array.from(t))), c) : e
            }),
            (c.value = function (e) {
              return arguments.length ? ((u = "function" == typeof e ? e : (0, i.A)(+e)), c) : u
            }),
            (c.order = function (e) {
              return arguments.length
                ? ((t = null == e ? l.A : "function" == typeof e ? e : (0, i.A)(Array.from(e))), c)
                : t
            }),
            (c.offset = function (e) {
              return arguments.length ? ((s = null == e ? a.A : e), c) : s
            }),
            c
          )
        },
      },
    )
  },
}
//# sourceMappingURL=256522.637598de81.js.map
