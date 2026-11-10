export const __rspack_esm_ids = [832672]
export const __webpack_modules__ = {
  MIhr(e, t, s) {
    var n = s("zd8w"),
      i = s("on57"),
      a = s("hlJj"),
      r = s("LHfz"),
      l = s("QS88"),
      o = s("Q0yO"),
      u = s("fgDr"),
      c = s("jBoW"),
      d = s("P9gZ"),
      h = s("oI7Z"),
      m = s("QsfR"),
      g = s("PsSt"),
      p = s("TZVD"),
      f = s("ncvm"),
      x = s("aHZf"),
      y = s("jTKk"),
      b = s("QEXq")
    function _(e, t) {
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
          ? _(Object(s), !0).forEach(function (t) {
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
            : _(Object(s)).forEach(function (t) {
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
            t((0, c.Xn)(e)),
            () => {
              t((0, c.A$)(e))
            }
          ),
        ),
        null
      )
    }
    function j(e) {
      var t,
        s = e.x1,
        c = e.x2,
        f = e.y1,
        y = e.y2,
        _ = e.className,
        A = e.shape,
        j = e.xAxisId,
        C = e.yAxisId,
        k = (0, g.Y)(),
        S = (0, m.r)(),
        M = (0, d.G)((e) => (0, h.iV)(e, "xAxis", j, S)),
        E = (0, d.G)((e) => (0, h.iV)(e, "yAxis", C, S))
      if (null == M || null == E) return null
      var T = (0, o.vh)(s),
        P = (0, o.vh)(c),
        N = (0, o.vh)(f),
        I = (0, o.vh)(y)
      if (!T && !P && !N && !I && !A) return null
      var L = ((e, t, s, n, i, a, r) => {
        var o,
          u,
          c,
          d,
          h = r.x1,
          m = r.x2,
          g = r.y1,
          p = r.y2
        if (null == i || null == a) return null
        var f = new b.z({ x: i, y: a }),
          x = {
            x: e ? (null != (o = i.map(h, { position: "start" })) ? o : null) : i.rangeMin(),
            y: s ? (null != (u = a.map(g, { position: "start" })) ? u : null) : a.rangeMin(),
          },
          y = {
            x: t ? (null != (c = i.map(m, { position: "end" })) ? c : null) : i.rangeMax(),
            y: n ? (null != (d = a.map(p, { position: "end" })) ? d : null) : a.rangeMax(),
          }
        return "discard" !== r.ifOverflow || (f.isInRange(x) && f.isInRange(y)) ? (0, l.sl)(x, y) : null
      })(T, P, N, I, M, E, e)
      if (!L && !A) return null
      var R = "hidden" === e.ifOverflow
      return n.createElement(
        x.g,
        { zIndex: e.zIndex },
        n.createElement(
          a.W,
          { className: (0, i.$)("recharts-reference-area", _) },
          ((t = v(v({ clipPath: R ? "url(#".concat(k, ")") : void 0 }, (0, p.a)(e)), L)),
          n.isValidElement(A)
            ? n.cloneElement(A, t)
            : "function" == typeof A
              ? A(t)
              : n.createElement(u.M, w({}, t, { className: "recharts-reference-area-rect" }))),
          null != L &&
            n.createElement(
              r.zJ,
              w({}, L, { lowerWidth: L.width, upperWidth: L.width }),
              n.createElement(r._I, { label: e.label }),
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
    function k(e) {
      var t = (0, f.e)(e, C)
      return n.createElement(
        n.Fragment,
        null,
        n.createElement(A, {
          yAxisId: t.yAxisId,
          xAxisId: t.xAxisId,
          ifOverflow: t.ifOverflow,
          x1: t.x1,
          x2: t.x2,
          y1: t.y1,
          y2: t.y2,
        }),
        n.createElement(j, t),
      )
    }
    ;((k.displayName = "ReferenceArea"), s.d(t, {}, { T: k }))
  },
  TjJf(e, t, s) {
    var n = s("zd8w"),
      i = s("on57"),
      a = s("hlJj"),
      r = s("LHfz"),
      l = s("Q0yO"),
      o = s("QS88"),
      u = s("CkDz"),
      c = s("jBoW"),
      d = s("P9gZ"),
      h = s("oI7Z"),
      m = s("QsfR"),
      g = s("PsSt"),
      p = s("TZVD"),
      f = s("ncvm"),
      x = s("aHZf"),
      y = s("jTKk"),
      b = s("rYo8"),
      _ = s("QEXq")
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
    function w(e) {
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
    function A() {
      return (A = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = arguments[t]
              for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n])
            }
            return e
          }).apply(null, arguments)
    }
    function j(e) {
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
        f = e.className,
        y = e.ifOverflow,
        v = (0, m.r)(),
        j = (0, g.Y)(),
        C = (0, d.G)((e) => (0, h.Rl)(e, t)),
        k = (0, d.G)((e) => (0, h.sf)(e, s)),
        S = (0, d.G)((e) => (0, h.iV)(e, "xAxis", t, v)),
        M = (0, d.G)((e) => (0, h.iV)(e, "yAxis", s, v)),
        E = (0, u.sk)()
      if (!j || !E || null == C || null == k || null == S || null == M) return null
      var T = ((e, t, s, n, i, a, r) => {
        var o,
          u,
          c = r.x,
          d = r.y,
          h = r.segment,
          m = r.ifOverflow,
          g = (0, l.vh)(c)
        if ((0, l.vh)(d)) {
          var p = s.x,
            f = s.width,
            x = t.map(d, { position: n })
          if (!(0, b.H)(x) || ("discard" === m && !t.isInRange(x))) return null
          var y = [
            { x: p + f, y: x },
            { x: p, y: x },
          ]
          return "left" === a ? y.reverse() : y
        }
        if (g) {
          var v = s.y,
            w = s.height,
            A = e.map(c, { position: n })
          if (!(0, b.H)(A) || ("discard" === m && !e.isInRange(A))) return null
          var j = [
            { x: A, y: v + w },
            { x: A, y: v },
          ]
          return "top" === i ? j.reverse() : j
        }
        return null != h && 2 === h.length
          ? ((u = [
              (o = new _.z({ x: e, y: t })).mapWithFallback(h[0], { position: n, fallback: "rangeMin" }),
              o.mapWithFallback(h[1], { position: n, fallback: "rangeMax" }),
            ]),
            "discard" === m && u.some((e) => !o.isInRange(e)) ? null : u)
          : null
      })(S, M, E, e.position, C.orientation, k.orientation, e)
      if (!T) return null
      var P = T[0],
        N = T[1]
      if (null == P || null == N) return null
      var I = P.x,
        L = P.y,
        R = N.x,
        O = N.y,
        D = w(
          w({ clipPath: "hidden" === y ? "url(#".concat(j, ")") : void 0 }, (0, p.a)(e)),
          {},
          { x1: I, y1: L, x2: R, y2: O },
        ),
        U = (0, o.vh)({ x1: I, y1: L, x2: R, y2: O })
      return n.createElement(
        x.g,
        { zIndex: e.zIndex },
        n.createElement(
          a.W,
          { className: (0, i.$)("recharts-reference-line", f) },
          ((e, t) => {
            var s
            if (n.isValidElement(e)) s = n.cloneElement(e, t)
            else if ("function" == typeof e) s = e(t)
            else {
              if (!(0, b.H)(t.x1) || !(0, b.H)(t.y1) || !(0, b.H)(t.x2) || !(0, b.H)(t.y2)) return null
              s = n.createElement("line", A({}, t, { className: "recharts-reference-line-line" }))
            }
            return s
          })(c, D),
          n.createElement(
            r.zJ,
            A({}, U, { lowerWidth: U.width, upperWidth: U.width }),
            n.createElement(r._I, { label: e.label }),
            e.children,
          ),
        ),
      )
    }
    var k = {
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
      var t = (0, f.e)(e, k)
      return n.createElement(
        n.Fragment,
        null,
        n.createElement(j, {
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
  ZOaQ(e, t, s) {
    var n = s("zd8w"),
      i = s("oM1g"),
      a = s("Y44c"),
      r = ["axis", "item"],
      l = (0, n.forwardRef)((e, t) =>
        n.createElement(a.P, {
          chartName: "BarChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: r,
          tooltipPayloadSearcher: i.uN,
          categoricalChartProps: e,
          ref: t,
        }),
      )
    s.d(t, {}, { E: l })
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
              r = t.position,
              l = t.fallback
            return (
              (i = "rangeMin" === l ? this.yAxisScale.rangeMin() : "rangeMax" === l ? this.yAxisScale.rangeMax() : 0),
              (a = "rangeMin" === l ? this.xAxisScale.rangeMin() : "rangeMax" === l ? this.xAxisScale.rangeMax() : 0),
              {
                x: null != (s = this.xAxisScale.map(e.x, { position: r })) ? s : a,
                y: null != (n = this.yAxisScale.map(e.y, { position: r })) ? n : i,
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
    s.d(t, { q: () => A, V: () => j })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("iRMi"),
      r = s("zTeN"),
      l = s("zd8w"),
      o = s("HZfM"),
      u = s("ZtCH"),
      c = s("MVHH"),
      d = s("mtSb"),
      h = s("EOo5"),
      m = s("jAnS"),
      g = s("T8X0"),
      p = s("yGJW"),
      f = s("B81s"),
      x = s("OWtl"),
      y = s("LwX0")
    function b(e) {
      let t,
        s,
        n,
        a,
        b,
        w,
        A,
        j = (0, i.c)(27),
        { routeTemplate: C, routeKind: k } = e,
        S = (0, r.gh)(x.u),
        M = (0, h.As)(),
        E = (0, r.Ul)(g.uI),
        { data: T, status: P } = (0, f.P1)(),
        N = (0, o.zy)()
      j[0] !== N ? ((t = (0, o.AO)(N)), (j[0] = N), (j[1] = t)) : (t = j[1])
      let I = t,
        L = (0, l.useRef)(null),
        R = (0, l.useRef)(void 0),
        O = "chatgpt" === M.authMethod || "chatgptAuthTokens" === M.authMethod
      j[2] !== N.pathname || j[3] !== N.search || j[4] !== E || j[5] !== k
        ? ((s =
            "chatgpt-thread" === k ||
            ("home" === k && "/" === N.pathname && (0, m.CV)(N.search)) ||
            ("chat" === E && ("home" === k || "other" === k))),
          (j[2] = N.pathname),
          (j[3] = N.search),
          (j[4] = E),
          (j[5] = k),
          (j[6] = s))
        : (s = j[6])
      let D = s,
        U = !0 === T && "success" === P && !M.isLoading && O && D
      j[7] !== M.accountId ||
      j[8] !== M.computeResidency ||
      j[9] !== N.hash ||
      j[10] !== N.pathname ||
      j[11] !== N.search ||
      j[12] !== I ||
      j[13] !== C ||
      j[14] !== S
        ? ((n = () => {
            null == R.current && (R.current = (0, u.xu)(window.location))
            let e = new URL(window.location.href)
            ;((e.pathname = C), (e.search = N.search), (e.hash = N.hash))
            let t = N.hash.slice(N.hash.indexOf("?") + 1),
              s = [
                new URLSearchParams(N.search).get("referrer"),
                new URLSearchParams(t).get("referrer"),
                L.current?.url,
                document.referrer,
              ].find(v),
              n = (0, d.U)(M.accountId, M.computeResidency, N.pathname)
            n
              ? ((e.search = ""), (e.hash = ""))
              : ["/p/:promoCode", "/up/:promoCode", "/codex/p/:promoCode"].includes(C) && (e.pathname = N.pathname)
            let i = (0, u.fn)({ url: e.toString(), referrer: n ? void 0 : (s ?? void 0) }),
              a = S.get(p.YV)
            ;(a.logProductEvent(c.rN, { ...i, anonymousId: R.current }, (e) => {
              "sent" === e.status && "hidden" === document.visibilityState && a.flush().catch(_)
            }),
              (L.current = { key: I, url: i.url }))
          }),
          (j[7] = M.accountId),
          (j[8] = M.computeResidency),
          (j[9] = N.hash),
          (j[10] = N.pathname),
          (j[11] = N.search),
          (j[12] = I),
          (j[13] = C),
          (j[14] = S),
          (j[15] = n))
        : (n = j[15])
      let F = (0, l.useEffectEvent)(n)
      return (
        j[16] !== U || j[17] !== F || j[18] !== I
          ? ((a = () => {
              if (!U) {
                L.current = null
                return
              }
              if (L.current?.key === I) return
              let e = !1
              return (
                queueMicrotask(() => {
                  e || F()
                }),
                () => {
                  e = !0
                }
              )
            }),
            (j[16] = U),
            (j[17] = F),
            (j[18] = I),
            (j[19] = a))
          : (a = j[19]),
        j[20] !== U || j[21] !== I || j[22] !== C
          ? ((b = [U, I, C]), (j[20] = U), (j[21] = I), (j[22] = C), (j[23] = b))
          : (b = j[23]),
        (0, l.useEffect)(a, b),
        j[24] !== N.search
          ? ((w = () => {
              let e = !1
              return (
                queueMicrotask(() => {
                  e || (0, y.gJ)(N.search)
                }),
                () => {
                  e = !0
                }
              )
            }),
            (A = [N.search]),
            (j[24] = N.search),
            (j[25] = w),
            (j[26] = A))
          : ((w = j[25]), (A = j[26])),
        (0, l.useEffect)(w, A),
        null
      )
    }
    function _() {}
    function v(e) {
      let t = (0, u.fn)({ url: void 0, referrer: e ?? void 0 })
      return null != t.referrer || null != t.referrerToken
    }
    let w = (0, r.vP)(x.u, () => null)
    function A(e) {
      let t,
        s,
        a,
        r,
        u,
        c,
        d = (0, i.c)(16),
        { routeTemplate: h, routeKind: m } = e,
        g = (0, o.zy)()
      d[0] !== g ? ((t = (0, o.AO)(g)), (d[0] = g), (d[1] = t)) : (t = d[1])
      let p = t
      ;(d[2] !== h ? ((s = () => () => {}), (d[2] = h), (d[3] = s)) : (s = d[3]),
        d[4] !== p || d[5] !== h ? ((a = [p, h]), (d[4] = p), (d[5] = h), (d[6] = a)) : (a = d[6]),
        (0, l.useEffect)(s, a))
      let f = "/settings/usage" !== h
      return (
        d[7] !== h || d[8] !== f
          ? ((r = (0, n.jsx)(j, { routeTemplate: h, enabled: f })), (d[7] = h), (d[8] = f), (d[9] = r))
          : (r = d[9]),
        d[10] !== m || d[11] !== h
          ? ((u = (0, n.jsx)(b, { routeTemplate: h, routeKind: m })), (d[10] = m), (d[11] = h), (d[12] = u))
          : (u = d[12]),
        d[13] !== r || d[14] !== u
          ? ((c = (0, n.jsxs)(n.Fragment, { children: [r, u] })), (d[13] = r), (d[14] = u), (d[15] = c))
          : (c = d[15]),
        c
      )
    }
    function j(e) {
      let t,
        s,
        n,
        u,
        c = (0, i.c)(21),
        { routeTemplate: d, settingsTab: h, enabled: m } = e,
        g = void 0 === m || m,
        y = (0, r.gh)(x.u),
        { data: b, status: _ } = (0, f.P1)(),
        v = (0, o.zy)()
      c[0] !== v ? ((t = (0, o.AO)(v)), (c[0] = v), (c[1] = t)) : (t = c[1])
      let A = t
      c[2] !== A || c[3] !== d || c[4] !== y || c[5] !== h
        ? ((s = () => {
            let e = y.get(w)
            e?.pageViewKey !== A &&
              ((0, p.yy)(y, a.CodexAppPageView, {
                routeTemplate: d,
                previousRouteTemplate: e?.routeTemplate,
                settingsTab: h,
              }),
              y.set(w, { pageViewKey: A, routeTemplate: d }))
          }),
          (c[2] = A),
          (c[3] = d),
          (c[4] = y),
          (c[5] = h),
          (c[6] = s))
        : (s = c[6])
      let j = (0, l.useEffectEvent)(s)
      return (
        c[7] !== b || c[8] !== _ || c[9] !== g || c[10] !== j || c[11] !== y
          ? ((n = () => {
              if ("success" !== _ || !0 !== b) return void y.set(w, null)
              if (!g) return
              let e = !1
              return (
                queueMicrotask(() => {
                  e || j()
                }),
                () => {
                  e = !0
                }
              )
            }),
            (c[7] = b),
            (c[8] = _),
            (c[9] = g),
            (c[10] = j),
            (c[11] = y),
            (c[12] = n))
          : (n = c[12]),
        c[13] !== b || c[14] !== _ || c[15] !== g || c[16] !== A || c[17] !== d || c[18] !== y || c[19] !== h
          ? ((u = [b, _, g, A, d, h, y]),
            (c[13] = b),
            (c[14] = _),
            (c[15] = g),
            (c[16] = A),
            (c[17] = d),
            (c[18] = y),
            (c[19] = h),
            (c[20] = u))
          : (u = c[20]),
        (0, l.useEffect)(n, u),
        null
      )
    }
  },
  Y9i8(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57"),
      r = s("LIss"),
      l = s("zd8w")
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
            { ariaLabel: d, className: h, options: m, selectedId: g, animateSelection: p, size: f, onSelect: x } = e,
            y = void 0 === p || p,
            b = void 0 === f ? "default" : f,
            _ = (0, l.useId)(),
            v =
              "compact" === b
                ? "inline-grid gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5"
                : "bg-text/10 inline-grid gap-1 rounded-2xl p-1"
          c[0] !== h || c[1] !== v ? ((t = (0, a.A)(v, h)), (c[0] = h), (c[1] = v), (c[2] = t)) : (t = c[2])
          let w = `repeat(${m.length}, minmax(0, 1fr))`
          if (
            (c[3] !== w ? ((s = { gridTemplateColumns: w }), (c[3] = w), (c[4] = s)) : (s = c[4]),
            c[5] !== y || c[6] !== _ || c[7] !== x || c[8] !== m || c[9] !== g || c[10] !== b)
          ) {
            let e
            ;(c[12] !== y || c[13] !== _ || c[14] !== x || c[15] !== g || c[16] !== b
              ? ((e = (e) => {
                  let t = e.id === g
                  return (0, n.jsxs)(
                    "button",
                    {
                      className: (0, a.A)(
                        "cursor-interaction relative isolate min-w-0 transition-transform duration-basic active:scale-[0.98]",
                        "compact" === b
                          ? "flex h-6 items-center justify-center rounded-lg px-2 py-0 text-xs leading-4 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0"
                          : "rounded-xl px-3 py-1.5 text-sm font-medium",
                        t ? ("compact" === b && "text-default") || "text-black" : "text-secondary",
                      ),
                      type: "button",
                      "aria-label": e.ariaLabel,
                      "aria-pressed": t,
                      onClick: () => {
                        x(e.id)
                      },
                      children: [
                        t
                          ? (0, n.jsx)(r.P.span, {
                              layoutId: y ? _ : void 0,
                              className:
                                "compact" === b
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
                (c[13] = _),
                (c[14] = x),
                (c[15] = g),
                (c[16] = b),
                (c[17] = e))
              : (e = c[17]),
              (o = m.map(e)),
              (c[5] = y),
              (c[6] = _),
              (c[7] = x),
              (c[8] = m),
              (c[9] = g),
              (c[10] = b),
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
  GK7D(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57")
    s.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            s,
            r,
            l,
            o,
            u,
            c,
            d,
            h,
            m,
            g = (0, i.c)(30),
            { actions: p, asset: f, subtitle: x, subtitleClassName: y, title: b, variant: _ } = e,
            v = void 0 === _ ? "default" : _
          g[0] !== f
            ? ((t = null == f ? null : (0, n.jsx)("div", { className: "flex", children: f })), (g[0] = f), (g[1] = t))
            : (t = g[1])
          let w = "page" === v ? "flex-nowrap" : "flex-wrap"
          g[2] !== w
            ? ((s = (0, a.A)("flex min-w-0 items-start justify-between gap-4", w)), (g[2] = w), (g[3] = s))
            : (s = g[3])
          let A = "settingsCompact" === v ? "gap-1.25" : "gap-1.5"
          g[4] !== A ? ((r = (0, a.A)("flex min-w-0 flex-1 basis-64 flex-col", A)), (g[4] = A), (g[5] = r)) : (r = g[5])
          let j = "settings" === v && "heading-lg font-normal",
            C = "settingsCompact" === v && "heading-lg font-semibold leading-7",
            k = "page" === v && "heading-lg electron:heading-xl",
            S = "default" === v && "heading-base electron:heading-lg"
          return (
            g[6] !== S || g[7] !== j || g[8] !== C || g[9] !== k
              ? ((l = (0, a.A)("min-w-0 break-words text-default", j, C, k, S)),
                (g[6] = S),
                (g[7] = j),
                (g[8] = C),
                (g[9] = k),
                (g[10] = l))
              : (l = g[10]),
            g[11] !== l || g[12] !== b
              ? ((o = (0, n.jsx)("h1", { className: l, children: b })), (g[11] = l), (g[12] = b), (g[13] = o))
              : (o = g[13]),
            g[14] !== x || g[15] !== y
              ? ((u =
                  null == x
                    ? null
                    : (0, n.jsx)("div", { className: (0, a.A)("text-base text-secondary", y), children: x })),
                (g[14] = x),
                (g[15] = y),
                (g[16] = u))
              : (u = g[16]),
            g[17] !== o || g[18] !== u || g[19] !== r
              ? ((c = (0, n.jsxs)("div", { className: r, children: [o, u] })),
                (g[17] = o),
                (g[18] = u),
                (g[19] = r),
                (g[20] = c))
              : (c = g[20]),
            g[21] !== p
              ? ((d =
                  null == p
                    ? null
                    : (0, n.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: p })),
                (g[21] = p),
                (g[22] = d))
              : (d = g[22]),
            g[23] !== c || g[24] !== d || g[25] !== s
              ? ((h = (0, n.jsxs)("div", { className: s, children: [c, d] })),
                (g[23] = c),
                (g[24] = d),
                (g[25] = s),
                (g[26] = h))
              : (h = g[26]),
            g[27] !== h || g[28] !== t
              ? ((m = (0, n.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, h],
                })),
                (g[27] = h),
                (g[28] = t),
                (g[29] = m))
              : (m = g[29]),
            m
          )
        },
      },
    )
  },
  EShr(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("slpy"),
      r = s("on57"),
      l = s("zd8w"),
      o = s("ygO2")
    function u(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    s.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            s,
            c,
            d,
            h = (0, i.c)(13),
            {
              options: m,
              selectedId: g,
              onHover: p,
              onSelect: f,
              size: x,
              className: y,
              buttonClassName: b,
              fullWidth: _,
              wrapLabels: v,
              uniform: w,
              selectedColor: A,
              unselectedColor: j,
              focusRing: C,
              variant: k,
              ariaLabel: S,
              ariaLabelledBy: M,
            } = e,
            E = void 0 === m ? [] : m,
            T = void 0 !== _ && _,
            P = void 0 !== v && v,
            N = void 0 === k ? "default" : k,
            I = (0, l.useRef)(null)
          h[0] !== g ? ((t = (e) => e.id === g), (h[0] = g), (h[1] = t)) : (t = h[1])
          let L = E.findIndex(t),
            R =
              -1 === L
                ? void 0
                : {
                    "--segmented-form-indicator-width": `${100 / E.length}%`,
                    "--segmented-form-indicator-offset": `${100 * L}%`,
                  },
            O = x ?? "default",
            D = "default",
            U = void 0 === A ? "segmentedSelected" : A,
            F = void 0 === j ? "ghost" : j
          "inset" === N
            ? ((O = x ?? "compact"), (D = "large"), (U = "segmentedInsetSelected"))
            : "field" === N
              ? ((O = "fieldSegment"), (U = "segmentedInsetSelected"))
              : "form" === N
                ? ((O = x ?? "recoveryAction"),
                  (D = "full"),
                  (U = "segmentedFormSelected"),
                  (F = "segmentedFormUnselected"))
                : "pricing" === N
                  ? ((O = "dialog"), (D = "extraLarge"))
                  : "filter" === N
                    ? ((O = "compact"), (D = "full"), (U = "secondary"), (F = "ghostTertiary"))
                    : "viewer" === N && ((O = "inline"), (D = "full"), (F = "ghostActive"))
          let q = w ?? ("icon" === O && E.length > 2)
          ;(h[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = () => {
                let e = I.current
                if (null == e) return
                let t = () => {
                  let t = e.querySelector('button[aria-pressed="true"], a[aria-current="page"]')
                  if (null == t) return
                  let s = t.offsetLeft,
                    n = s + t.offsetWidth,
                    i = e.scrollLeft,
                    a = i + e.clientWidth
                  s < i ? (e.scrollLeft = s) : n > a && (e.scrollLeft = n - e.clientWidth)
                }
                if ("u" < typeof ResizeObserver) return void t()
                let s = new ResizeObserver(t)
                for (let t of (s.observe(e), e.querySelectorAll("button, a"))) s.observe(t)
                return () => {
                  s.disconnect()
                }
              }),
              (h[2] = s))
            : (s = h[2]),
            (0, l.useLayoutEffect)(s, [E, g]))
          let H = (0, r.A)(
              "relative min-w-0 max-w-full items-center",
              "mode" === N
                ? [
                    T ? "grid w-full" : "inline-grid",
                    "isolate h-9 auto-cols-fr grid-flow-col gap-0 rounded-full select-none",
                  ]
                : [
                    T ? "flex w-full" : "inline-flex",
                    "hide-scrollbar overflow-x-auto overflow-y-hidden",
                    "field" === N || "form" === N ? "gap-0" : "gap-0.5",
                  ],
              "inset" === N && "rounded-[10px] bg-(--segmented-control-background) p-0.5",
              "field" === N && "h-8 rounded-lg bg-secondary-soft dark:bg-text/5",
              "form" === N && [
                "isolate rounded-full bg-background-segmented-form-track dark:inset-shadow-sm dark:inset-ring-1 dark:inset-ring-border-subtle",
                "compact" === O ? "p-0.5" : "p-1",
              ],
              "pricing" === N && "rounded-[20px] bg-surface-secondary p-1",
              "viewer" === N && "h-full p-0.5",
              y,
            ),
            G =
              "form" === N && -1 !== L
                ? (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, r.A)(
                      "pointer-events-none absolute z-10 flex forced-colors:hidden",
                      "compact" === O ? "inset-0.5" : "inset-1",
                    ),
                    style: R,
                    children: (0, n.jsx)("span", {
                      className:
                        "h-full w-(--segmented-form-indicator-width) rounded-full bg-background-segmented-form-selected shadow-md motion-safe:transition-transform motion-safe:duration-basic motion-safe:ease-in-out ltr:translate-x-(--segmented-form-indicator-offset) rtl:-translate-x-(--segmented-form-indicator-offset) dark:shadow-lg-stronger dark:inset-shadow-2xs dark:inset-shadow-border",
                    }),
                  })
                : null
          h[3] !== N
            ? ((c =
                "mode" === N
                  ? (0, n.jsx)("span", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-x-px top-1/2 z-0 h-8.5 -translate-y-1/2 rounded-full bg-background-mode-toggle-track",
                    })
                  : null),
              (h[3] = N),
              (h[4] = c))
            : (c = h[4])
          let z = E.map((e) => {
            let t = e.id === g,
              s = e.disabled ?? !1,
              { id: i, label: l, ariaLabel: u, tooltipContent: c, disabled: d, ...h } = e,
              m = {
                unstyled: "mode" === N,
                color: t ? U : F,
                focusRing: C ?? ("inset" === N || "field" === N ? "default" : "inset"),
                size: O,
                radius: D,
                onPointerEnter: null == p || s ? void 0 : () => p(i),
                uniform: q,
                "aria-label": u,
                disabled: s,
                className: (0, r.A)(
                  T ? "flex-1 justify-center" : "shrink-0",
                  P && "self-stretch py-2",
                  "form" === N &&
                    "relative min-w-0 flex-1 basis-0 focus-visible:z-20 motion-safe:transition-colors motion-safe:duration-basic",
                  "mode" === N && [
                    "relative z-10 h-full min-w-0 justify-center rounded-full border px-10 text-sm font-medium @max-lg/home-mode-toggle:px-2.5",
                    t
                      ? "border-mode-toggle-selected bg-background-mode-toggle-selected text-mode-toggle-primary shadow-mode-toggle-selected"
                      : "border-transparent text-mode-toggle-inactive hover:text-mode-toggle-primary focus-visible:text-mode-toggle-primary",
                  ],
                  "viewer" === N && "h-full px-2.5",
                  b,
                ),
                children:
                  "form" === N || P
                    ? (0, n.jsx)("span", {
                        className: (0, r.A)(
                          "form" === N && "relative z-20",
                          P && "min-w-0 wrap-anywhere whitespace-normal",
                        ),
                        children: l,
                      })
                    : l,
              },
              x =
                null != h.to
                  ? (0, n.jsx)(o.z, { ...h, ...m, "aria-current": t ? "page" : void 0 }, i)
                  : (0, n.jsx)(o.$, { ...m, onClick: () => f?.(i), "aria-pressed": t }, i)
            return c ? (0, n.jsx)(a.m, { content: c, children: x }, i) : x
          })
          return (
            h[5] !== S || h[6] !== M || h[7] !== u || h[8] !== G || h[9] !== c || h[10] !== z || h[11] !== H
              ? ((d = (0, n.jsxs)("div", {
                  ref: I,
                  className: H,
                  role: "group",
                  "aria-label": S,
                  "aria-labelledby": M,
                  onWheel: u,
                  children: [G, c, z],
                })),
                (h[5] = S),
                (h[6] = M),
                (h[7] = u),
                (h[8] = G),
                (h[9] = c),
                (h[10] = z),
                (h[11] = H),
                (h[12] = d))
              : (d = h[12]),
            d
          )
        },
      },
    )
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
            r = e.formatNumberToParts(t, n(s, i, "symbol"))
          if (r.some(({ type: e, value: t }) => "currency" === e && t === s)) {
            let l = e.formatNumberToParts(t, n(s, i))
            l.some(({ type: e, value: t }) => "currency" === e && t !== s) ? (r = l) : (a = null)
          }
          return { currencyCodeLabel: a, formatted: r.map(({ value: e }) => e).join(""), parts: r }
        },
        m: function ({ intl: e, amount: t, currencyCode: s, minorUnitExponent: i }) {
          return null == t ? null : e.formatNumber(t, n(s, i))
        },
      },
    )
  },
  Rd02(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("Wf1j"),
      r = s("UfZA"),
      l = s("xAz2"),
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
            h = (0, i.c)(29),
            {
              hideValues: m,
              orientation: g,
              ticks: p,
              maximumValue: f,
              minimumValue: x,
              showPercentageUnit: y,
              unit: b,
            } = e,
            _ = void 0 !== m && m,
            v = void 0 === g ? "left" : g,
            w = void 0 === x ? 0 : x,
            A = void 0 === y || y,
            j = (0, a.A)(),
            C = w,
            k = f
          if (A && "percent" === b) k = 100
          else if (null != f && (0 !== w || 0 !== f)) {
            let e
            if (h[0] !== _ || h[1] !== f || h[2] !== w || h[3] !== b) {
              let t = (0, r.dG)([w, f], 4, "credits" === b || "usd" === b || _)
              ;((C = t[0] ?? w),
                (e = t.at(-1) ?? f),
                (h[0] = _),
                (h[1] = f),
                (h[2] = w),
                (h[3] = b),
                (h[4] = e),
                (h[5] = C))
            } else ((e = h[4]), (C = h[5]))
            k = e
          }
          let S = "credits" === b || "usd" === b || _
          ;(h[6] !== k || h[7] !== C
            ? ((t = null == k ? void 0 : [C, k]), (h[6] = k), (h[7] = C), (h[8] = t))
            : (t = h[8]),
            h[9] !== v
              ? ((s = {
                  className: "text-xs",
                  fill: "var(--color-text-secondary)",
                  textAnchor: "start",
                  ...("left" === v ? { x: 0 } : {}),
                }),
                (h[9] = v),
                (h[10] = s))
              : (s = h[10]),
            h[11] !== A || h[12] !== p || h[13] !== b
              ? ((u = p ?? (A && "percent" === b ? [0, 33.333333333333336, 66.66666666666667, 100] : void 0)),
                (h[11] = A),
                (h[12] = p),
                (h[13] = b),
                (h[14] = u))
              : (u = h[14]),
            h[15] !== _ || h[16] !== j || h[17] !== A || h[18] !== b
              ? ((c = (e) =>
                  _
                    ? ""
                    : A && "percent" === b
                      ? j.formatNumber(e / 100, { maximumFractionDigits: 0, style: "percent" })
                      : "usd" === b
                        ? (0, o.W)(e, j, !0)
                        : j.formatNumber(e, { maximumFractionDigits: e < 1 ? 2 : 1, notation: "compact" })),
                (h[15] = _),
                (h[16] = j),
                (h[17] = A),
                (h[18] = b),
                (h[19] = c))
              : (c = h[19]))
          let M = 56 * !_
          return (
            h[20] !== _ ||
            h[21] !== v ||
            h[22] !== M ||
            h[23] !== S ||
            h[24] !== t ||
            h[25] !== s ||
            h[26] !== u ||
            h[27] !== c
              ? ((d = (0, n.jsx)(l.h, {
                  orientation: v,
                  allowDecimals: S,
                  axisLine: !1,
                  hide: _,
                  domain: t,
                  interval: 0,
                  tick: s,
                  tickCount: 4,
                  ticks: u,
                  tickFormatter: c,
                  tickLine: !1,
                  width: M,
                })),
                (h[20] = _),
                (h[21] = v),
                (h[22] = M),
                (h[23] = S),
                (h[24] = t),
                (h[25] = s),
                (h[26] = u),
                (h[27] = c),
                (h[28] = d))
              : (d = h[28]),
            d
          )
        },
        kr: function (e) {
          let t,
            s,
            a,
            r,
            l,
            o = (0, i.c)(6),
            { height: u, points: c, width: d, x: h, y: m } = e,
            g = c?.[0]
          o[0] !== c ? ((t = c?.at(-1)), (o[0] = c), (o[1] = t)) : (t = o[1])
          let p = t
          if (null != g && null != p) ((s = g.x), (a = g.y), (r = p.y))
          else {
            if (null == h || null == m || null == d || null == u) return null
            ;((s = h + d / 2), (a = m), (r = m + u))
          }
          return (
            o[2] !== r || o[3] !== a || o[4] !== s
              ? ((l = (0, n.jsx)("line", {
                  x1: s,
                  x2: s,
                  y1: a,
                  y2: r,
                  pointerEvents: "none",
                  stroke: "var(--color-border-strong)",
                })),
                (o[2] = r),
                (o[3] = a),
                (o[4] = s),
                (o[5] = l))
              : (l = o[5]),
            l
          )
        },
        ps: function (e) {
          let t,
            s,
            a = (0, i.c)(9),
            { centerLabels: r, index: l, payload: o, tickFormatter: u, visibleTicksCount: c, x: d, y: h } = e,
            m = void 0 !== r && r,
            g = "middle"
          return (
            m || 0 !== l ? m || l !== c - 1 || (g = "end") : (g = "start"),
            a[0] !== l || a[1] !== o.value || a[2] !== u
              ? ((t = null == u ? o.value : u(o.value, l)), (a[0] = l), (a[1] = o.value), (a[2] = u), (a[3] = t))
              : (t = a[3]),
            a[4] !== t || a[5] !== g || a[6] !== d || a[7] !== h
              ? ((s = (0, n.jsx)("text", {
                  className: "text-xs",
                  dy: 12,
                  fill: "var(--color-text-secondary)",
                  textAnchor: g,
                  x: d,
                  y: h,
                  children: t,
                })),
                (a[4] = t),
                (a[5] = g),
                (a[6] = d),
                (a[7] = h),
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
      r = s("on57"),
      l = s("c7eY"),
      o = s.n(l),
      u = s("zd8w"),
      c = s("oyxz"),
      d = s("Qgfj"),
      h = s("ygO2"),
      m = s("evwP"),
      g = s("JnO7"),
      p = s("nsuH"),
      f = s("ZEx5"),
      x = s("qWrV"),
      y = s("e3HG"),
      b = s("Cbpy")
    function _(e) {
      let { entry: t } = e
      return t.total ?? -1 / 0
    }
    function v(e, t) {
      return { entry: e, index: t }
    }
    function w(e) {
      let t,
        s,
        a = (0, i.c)(4),
        { compact: r, reduceMotion: l } = e,
        o = void 0 !== l && l
      if (void 0 !== r && r) {
        let e
        return (a[0] !== o ? ((e = (0, n.jsx)(j, { reduceMotion: o })), (a[0] = o), (a[1] = e)) : (e = a[1]), e)
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
                  children: [4, 43, 83, 122].map(A),
                }),
              ],
            })),
            (a[3] = s))
          : (s = a[3]),
        s
      )
    }
    function A(e) {
      return (0, n.jsx)(
        "line",
        { stroke: "var(--color-border-subtle)", vectorEffect: "non-scaling-stroke", x1: 0, x2: 100, y1: e, y2: e },
        e,
      )
    }
    function j(e) {
      let t,
        s,
        a,
        l,
        o = (0, i.c)(7),
        { reduceMotion: u } = e,
        d = !(void 0 !== u && u) && "motion-safe:animate-spin"
      return (
        o[0] !== d ? ((t = (0, r.A)("icon-xs text-secondary", d)), (o[0] = d), (o[1] = t)) : (t = o[1]),
        o[2] !== t
          ? ((s = (0, n.jsx)(g.A, { "aria-hidden": "true", className: t })), (o[2] = t), (o[3] = s))
          : (s = o[3]),
        o[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("span", {
              className: "sr-only",
              children: (0, n.jsx)(c.A, {
                id: "settings.usage.billing.chart.loading",
                defaultMessage: "Loading usage data…",
                description: "Loading state for enterprise billing and usage charts",
              }),
            })),
            (o[4] = a))
          : (a = o[4]),
        o[5] !== s
          ? ((l = (0, n.jsxs)("span", { className: "inline-flex items-center", role: "status", children: [s, a] })),
            (o[5] = s),
            (o[6] = l))
          : (l = o[6]),
        l
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
    function k(e) {
      let t,
        s,
        a = (0, i.c)(13),
        { children: r, emptyMessage: l, fillChartHeight: o, hasData: u, status: d } = e
      if (u) {
        let e
        return (
          a[0] !== r || a[1] !== o
            ? ((e = o ? (0, n.jsx)("div", { className: "absolute inset-0", children: r }) : r),
              (a[0] = r),
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
            ? ((e = (0, n.jsx)(w, { reduceMotion: d.reduceMotion })), (a[3] = d.reduceMotion), (a[4] = e))
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
                  description: "Error state for enterprise billing and usage charts",
                }),
              })),
              (a[5] = e))
            : (e = a[5]),
          a[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(c.A, {
                id: "settings.usage.billing.chart.retry",
                defaultMessage: "Retry",
                description: "Retry button for enterprise billing and usage charts",
              })),
              (a[6] = t))
            : (t = a[6]),
          a[7] !== d.onRetry
            ? ((s = (0, n.jsxs)(C, {
                children: [
                  e,
                  (0, n.jsx)(h.$, { color: "secondary", size: "toolbar", onClick: d.onRetry, children: t }),
                ],
              })),
              (a[7] = d.onRetry),
              (a[8] = s))
            : (s = a[8]),
          s
        )
      }
      return (
        a[9] !== l
          ? ((t =
              l ??
              (0, n.jsx)(c.A, {
                id: "settings.usage.billing.chart.empty",
                defaultMessage: "No usage recorded yet",
                description: "Empty state for enterprise billing and usage charts",
              })),
            (a[9] = l),
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
        l,
        o,
        c = (0, i.c)(12),
        { children: d, reduceMotion: h } = e,
        [m, g] = (0, u.useState)(null)
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            g(e.contentRect.height)
          }),
          (c[0] = t))
        : (t = c[0])
      let f = (0, p.wY)(t),
        x = !h && "transition-all duration-relaxed ease-basic motion-reduce:transition-none"
      return (
        c[1] !== x
          ? ((s = (0, r.A)("-mx-2 -mb-1 mt-1 box-content shrink-0 overflow-hidden px-2 py-1", x)),
            (c[1] = x),
            (c[2] = s))
          : (s = c[2]),
        c[3] !== m ? ((a = null == m ? void 0 : { height: m }), (c[3] = m), (c[4] = a)) : (a = c[4]),
        c[5] !== d || c[6] !== f
          ? ((l = (0, n.jsx)("div", { ref: f, children: d })), (c[5] = d), (c[6] = f), (c[7] = l))
          : (l = c[7]),
        c[8] !== s || c[9] !== a || c[10] !== l
          ? ((o = (0, n.jsx)("div", { className: s, style: a, children: l })),
            (c[8] = s),
            (c[9] = a),
            (c[10] = l),
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
            l,
            h,
            g,
            p,
            A,
            C,
            M,
            E,
            T,
            P = (0, i.c)(73),
            {
              actions: N,
              analyticsChart: I,
              balanceHistory: L,
              totalDescription: R,
              activeSeriesKey: O,
              children: D,
              emptyMessage: U,
              dailyLegend: F,
              estimatedSpendUsd: q,
              fillChartHeight: H,
              hasData: G,
              hideTotal: z,
              onChangeSeriesIsolation: W,
              onHoverSeriesChange: B,
              onToggleSeries: $,
              preservePopulatedCardLayout: V,
              consumerAnalytics: Y,
              scope: X,
              hiddenSeriesKeys: K,
              series: Z,
              singleSelection: Q,
              status: J,
              title: ee,
              total: et,
              totalLabel: es,
            } = e,
            en = void 0 !== L && L,
            ei = void 0 !== H && H,
            ea = void 0 !== z && z,
            er = void 0 !== V && V,
            el = void 0 !== Y && Y,
            eo = void 0 !== Q && Q,
            eu = (0, u.use)(x.Wj)?.scope ?? null,
            ec = (0, u.useRef)(null),
            ed = (0, u.useRef)(null),
            eh = (0, u.useRef)(null),
            em = () => {
              ;((ed.current = null), B?.(eh.current))
            },
            eg = el && ei,
            ep = eg && ea && null == ee,
            ef = J.isLoading && !G,
            ex = !!J.isUpdating,
            ey = ef || ex,
            eb = Z.length > 0 || null != $,
            e_ = null != F && !G && !J.isLoading
          if (
            (null != et || (J.isLoading && J.preserveEmptyLayout)) &&
            !G &&
            !J.isError &&
            null != U &&
            !er &&
            (!J.isLoading || J.preserveEmptyLayout)
          ) {
            let e,
              t,
              s,
              i,
              a = !J.reduceMotion && "transition-all duration-relaxed ease-basic motion-reduce:transition-none"
            return (
              P[0] !== a
                ? ((e = (0, r.A)("flex min-h-16 flex-col justify-center", a)), (P[0] = a), (P[1] = e))
                : (e = P[1]),
              P[2] !== U || P[3] !== J.isLoading || P[4] !== J.reduceMotion
                ? ((t = J.isLoading ? (0, n.jsx)(w, { compact: !0, reduceMotion: J.reduceMotion }) : U),
                  (P[2] = U),
                  (P[3] = J.isLoading),
                  (P[4] = J.reduceMotion),
                  (P[5] = t))
                : (t = P[5]),
              P[6] !== t
                ? ((s = (0, n.jsx)(m.W, { layout: "settings-row", children: t })), (P[6] = t), (P[7] = s))
                : (s = P[7]),
              P[8] !== s || P[9] !== e
                ? ((i = (0, n.jsx)(f.t, { children: (0, n.jsx)("div", { className: e, children: s }) })),
                  (P[8] = s),
                  (P[9] = e),
                  (P[10] = i))
                : (i = P[10]),
              i
            )
          }
          let ev = null == $ ? "span" : "button",
            ew = Z.map(v),
            eA = null == F ? ew : o()(ew, _, "desc"),
            ej =
              null == F
                ? "flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs leading-4 text-secondary"
                : "-mx-2 grid h-25 grid-cols-2 content-start gap-x-6 gap-y-1 overflow-y-auto px-2 @lg:grid-cols-3 pointer-coarse:h-auto pointer-coarse:min-h-25 pointer-coarse:overflow-visible",
            eC = !el && "mt-2",
            ek = !G && "min-h-4",
            eS = !J.reduceMotion && "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
            eM = ex && "opacity-60"
          P[11] !== eS || P[12] !== eM || P[13] !== ej || P[14] !== eC || P[15] !== ek
            ? ((t = (0, r.A)(ej, eC, ek, eS, eM)),
              (P[11] = eS),
              (P[12] = eM),
              (P[13] = ej),
              (P[14] = eC),
              (P[15] = ek),
              (P[16] = t))
            : (t = P[16])
          let eE = null == F ? void 0 : em,
            eT = eA.map((e) => {
              let t,
                { entry: s, index: i } = e,
                l = Z.length > 1 && !K?.has(s.key) && Z.every((e) => e.key === s.key || K?.has(e.key)),
                o = F?.shares?.get(s.key)
              t =
                null == o
                  ? (0, n.jsx)(c.A, {
                      id: "consumerUsage.legend.unavailableShare",
                      defaultMessage: "-",
                      description: "Placeholder when the selected day has no available usage share",
                    })
                  : o > 0 && o < 0.001
                    ? (0, n.jsx)(c.A, {
                        id: "consumerUsage.legend.belowPrecision",
                        defaultMessage: "<{threshold}",
                        description:
                          "A positive share of usage smaller than 0.1 percent, displayed as less than the smallest shown percentage rather than zero",
                        values: {
                          threshold: (0, n.jsx)(d.Gr, { value: 0.001, style: "percent", maximumFractionDigits: 1 }),
                        },
                      })
                    : (0, n.jsx)(d.Gr, { value: o, style: "percent", maximumFractionDigits: 1 })
              let u = (0, n.jsxs)(
                ev,
                {
                  className: (0, r.A)(
                    null == F
                      ? "inline-flex items-center gap-1"
                      : "-mx-2 flex h-12 min-w-0 items-center gap-2.5 rounded-md px-2 text-start hover:bg-primary-ghost-hover focus-visible:bg-primary-ghost-hover",
                    null != $ && "cursor-interaction",
                    null != O && O !== s.key && "opacity-40",
                    K?.has(s.key) && "opacity-50",
                  ),
                  "aria-pressed": null == $ ? void 0 : !K?.has(s.key) && (!eo || !!K?.size),
                  onClick:
                    null == $
                      ? void 0
                      : (e) => {
                          ;(null == W || 0 === e.detail || e.detail % 2 == 1) &&
                            ((ec.current = l ? s.key : null),
                            $(s.key),
                            eo && null != I && Z.length > 1 && (0, x.zJ)(eu, I, l ? null : s.key))
                        },
                  onDoubleClick:
                    null == W
                      ? void 0
                      : () => {
                          let e = ec.current === s.key ? null : s.key
                          ;(W(e), !eo && null != I && Z.length > 1 && (0, x.zJ)(eu, I, e))
                        },
                  onPointerEnter:
                    null == F
                      ? void 0
                      : (e) => {
                          "touch" !== e.pointerType && ((ed.current = s.key), B?.(s.key))
                        },
                  onPointerLeave: null == F ? void 0 : em,
                  onPointerCancel: null == F ? void 0 : em,
                  onFocus:
                    null == F
                      ? void 0
                      : (e) => {
                          e.currentTarget.matches(":focus-visible") && ((eh.current = s.key), B?.(s.key))
                        },
                  onBlur:
                    null == F
                      ? void 0
                      : () => {
                          ;((eh.current = null), B?.(ed.current))
                        },
                  type: null == $ ? void 0 : "button",
                  children: [
                    (0, n.jsx)(b.z, { color: s.color, index: i, variant: null == F ? "dot" : "bar" }),
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
                    !el && eo && null != s.total
                      ? (0, n.jsx)("span", { children: (0, n.jsx)(d.Gr, { value: s.total }) })
                      : null,
                  ],
                },
                s.key,
              )
              return null != F || (null == s.tooltip && null == W)
                ? u
                : (0, n.jsx)(
                    a.m,
                    {
                      content: (0, n.jsxs)(n.Fragment, {
                        children: [
                          s.tooltip,
                          null != W
                            ? (0, n.jsx)("div", {
                                children: l
                                  ? (0, n.jsx)(c.A, {
                                      id: "settings.usage.billing.chart.legend.showAll",
                                      defaultMessage: "Double-click to show all",
                                      description:
                                        "Chart legend tooltip explaining how to restore every series after isolating one",
                                    })
                                  : (0, n.jsx)(c.A, {
                                      id: "settings.usage.billing.chart.legend.isolate",
                                      defaultMessage: "Double-click to isolate",
                                      description: "Chart legend tooltip explaining how to show only this series",
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
          P[17] !== t || P[18] !== eE || P[19] !== eT
            ? ((s = (0, n.jsx)("div", { className: t, onScroll: eE, children: eT })),
              (P[17] = t),
              (P[18] = eE),
              (P[19] = eT),
              (P[20] = s))
            : (s = P[20])
          let eP = s
          P[21] !== el || P[22] !== eP || P[23] !== J.reduceMotion
            ? ((l = el ? (0, n.jsx)(S, { reduceMotion: J.reduceMotion, children: eP }) : eP),
              (P[21] = el),
              (P[22] = eP),
              (P[23] = J.reduceMotion),
              (P[24] = l))
            : (l = P[24])
          let eN = l,
            eI = en ? "gap-3" : "gap-2",
            eL = ep ? "pt-6" : "pt-3.5",
            eR = !eg && (!el || eb ? "min-h-64" : "min-h-60"),
            eO = !J.reduceMotion && "transition-all duration-relaxed ease-basic motion-reduce:transition-none"
          ;(P[25] !== eI || P[26] !== eL || P[27] !== eR || P[28] !== eO
            ? ((h = (0, r.A)("@container flex flex-col px-4 pb-3 select-none", eI, eL, eR, eO)),
              (P[25] = eI),
              (P[26] = eL),
              (P[27] = eR),
              (P[28] = eO),
              (P[29] = h))
            : (h = P[29]),
            P[30] !== N ||
            P[31] !== en ||
            P[32] !== q ||
            P[33] !== ea ||
            P[34] !== ef ||
            P[35] !== ey ||
            P[36] !== X ||
            P[37] !== J.reduceMotion ||
            P[38] !== ee ||
            P[39] !== et ||
            P[40] !== R ||
            P[41] !== es
              ? ((g =
                  null != ee || null != N || !ea || null != es || ey
                    ? (0, n.jsxs)("div", {
                        className: (0, r.A)("flex flex-col gap-0", !en && "mb-2"),
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-between gap-2",
                            children: [
                              (0, n.jsxs)("span", {
                                className: (0, r.A)(
                                  "text-xs leading-4 text-default",
                                  ey && "inline-flex items-center gap-2",
                                ),
                                children: [
                                  (0, n.jsx)("span", {
                                    className: (0, r.A)(
                                      !J.reduceMotion &&
                                        "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
                                      ey && "opacity-60",
                                    ),
                                    children: ee,
                                  }),
                                  ey ? (0, n.jsx)(j, { reduceMotion: J.reduceMotion }) : null,
                                ],
                              }),
                              N,
                            ],
                          }),
                          ea && null == es
                            ? null
                            : (0, n.jsxs)("div", {
                                className: (0, r.A)(
                                  "flex items-baseline gap-1",
                                  !J.reduceMotion &&
                                    "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
                                  ey && "opacity-60",
                                ),
                                children: [
                                  ef
                                    ? (0, n.jsx)("div", { "aria-hidden": !0, className: "h-8" })
                                    : (0, n.jsx)("span", {
                                        className: "heading-lg font-medium text-default",
                                        children:
                                          es ??
                                          (null == et
                                            ? null
                                            : (0, n.jsx)(d.Gr, {
                                                value: et,
                                                notation: "workspace" === X ? "compact" : "standard",
                                                maximumFractionDigits: "workspace" === X && et < 1e3 ? 0 : 1,
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
                          null == R
                            ? null
                            : (0, n.jsx)("div", { className: "text-xs leading-4 text-secondary", children: R }),
                        ],
                      })
                    : null),
                (P[30] = N),
                (P[31] = en),
                (P[32] = q),
                (P[33] = ea),
                (P[34] = ef),
                (P[35] = ey),
                (P[36] = X),
                (P[37] = J.reduceMotion),
                (P[38] = ee),
                (P[39] = et),
                (P[40] = R),
                (P[41] = es),
                (P[42] = g))
              : (g = P[42]))
          let eD = null == F ? "contents" : "relative flex flex-col gap-2",
            eU = el && !e_ && "relative z-10"
          P[43] !== en ||
          P[44] !== eg ||
          P[45] !== ey ||
          P[46] !== ep ||
          P[47] !== $ ||
          P[48] !== er ||
          P[49] !== J.reduceMotion ||
          P[50] !== eU
            ? ((p = (0, r.A)(
                eU,
                eg ? (0, r.A)("shrink-0", { "h-48": en, "h-44": !en && ep, "h-36": !en && !ep }) : "flex-1",
                er && null != $ ? "min-h-36" : "min-h-24",
                !J.reduceMotion && "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
                ey && "opacity-60",
              )),
              (P[43] = en),
              (P[44] = eg),
              (P[45] = ey),
              (P[46] = ep),
              (P[47] = $),
              (P[48] = er),
              (P[49] = J.reduceMotion),
              (P[50] = eU),
              (P[51] = p))
            : (p = P[51])
          let eF = ex || void 0,
            eq = e_ ? "absolute inset-0" : "contents"
          ;(P[52] !== D || P[53] !== U || P[54] !== ei || P[55] !== G || P[56] !== J
            ? ((A = (0, n.jsx)(k, { emptyMessage: U, fillChartHeight: ei, hasData: G, status: J, children: D })),
              (P[52] = D),
              (P[53] = U),
              (P[54] = ei),
              (P[55] = G),
              (P[56] = J),
              (P[57] = A))
            : (A = P[57]),
            P[58] !== eq || P[59] !== A
              ? ((C = (0, n.jsx)("div", { className: eq, children: A })), (P[58] = eq), (P[59] = A), (P[60] = C))
              : (C = P[60]),
            P[61] !== p || P[62] !== eF || P[63] !== C
              ? ((M = (0, n.jsx)("div", { className: p, "aria-busy": eF, children: C })),
                (P[61] = p),
                (P[62] = eF),
                (P[63] = C),
                (P[64] = M))
              : (M = P[64]))
          let eH = (G && (!el || Z.length > 0)) || (er && null != $) ? eN : null
          return (
            P[65] !== eD || P[66] !== M || P[67] !== eH
              ? ((E = (0, n.jsxs)("div", { className: eD, children: [M, eH] })),
                (P[65] = eD),
                (P[66] = M),
                (P[67] = eH),
                (P[68] = E))
              : (E = P[68]),
            P[69] !== h || P[70] !== g || P[71] !== E
              ? ((T = (0, n.jsx)(f.t, {
                  contentOverflow: "visible",
                  children: (0, n.jsxs)("div", { className: h, children: [g, E] }),
                })),
                (P[69] = h),
                (P[70] = g),
                (P[71] = E),
                (P[72] = T))
              : (T = P[72]),
            T
          )
        },
        L: w,
      },
    )
  },
  e3HG(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("oyxz"),
      r = s("Qgfj")
    s.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            s = (0, i.c)(3),
            { usd: l } = e,
            o = l > 0 && l < 0.01 ? 6 : 2
          return (
            s[0] !== o || s[1] !== l
              ? ((t = (0, n.jsx)(a.A, {
                  id: "settings.usage.billing.estimatedSpend",
                  defaultMessage: "Est. {value}",
                  description: "Estimated US dollar cost for a credit usage amount",
                  values: {
                    value: (0, n.jsx)(r.Gr, {
                      value: l,
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: o,
                    }),
                  },
                })),
                (s[0] = o),
                (s[1] = l),
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
                r = i?.height ?? 0
              return [{ ...n, y: a + (n.y - a) * t, height: r + (n.height - r) * t }]
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
                r = -1 === a ? s.length - 1 : a,
                l = s[Math.max(0, r - 1)],
                o = s[r]
              if (null == l.x || null == l.y || null == o.x || null == o.y) return [n]
              let u = o.x === l.x ? o.y : l.y + ((o.y - l.y) * (i - l.x)) / (o.x - l.x)
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
            r = 0 === s || a + s <= i ? a : e.y - s - 12,
            l = Math.max(n, i - s)
          return { x: Math.max(0, Math.min(e.x + 12, e.chartWidth - t)), y: Math.max(n, Math.min(r, l)) }
        },
        Z5: a,
        jn: function ({ data: e, pointer: t, series: s, xScale: n, yScale: i, yInverseScale: a }) {
          if (null == e || 0 === e.length) return []
          let r = e.findIndex((e) => {
            let s = n(e.date, { position: "middle" })
            return null != s && s >= t.x
          })
          r < 0 && (r = e.length - 1)
          let l = e[Math.max(0, r - 1)],
            o = e[r]
          if (null == l || null == o) return []
          let u = n(l.date, { position: "middle" }),
            c = n(o.date, { position: "middle" })
          if (null == u || null == c) return []
          let d = u === c ? 0 : Math.max(0, Math.min(1, (t.x - u) / (c - u)))
          return s.flatMap((e, s) => {
            let n = e.value(l),
              r = e.value(o)
            if (!Number.isFinite(n) || !Number.isFinite(r)) return []
            let u = n + (r - n) * d,
              c = t.curveYBySeries?.[s] ?? i(u)
            if (null == c || !Number.isFinite(c)) return []
            let h = null == t.curveYBySeries ? void 0 : a?.(c),
              m = "number" == typeof h && Number.isFinite(h) ? h : u
            return [{ key: e.key, name: e.name, color: e.color, value: m, y: c }]
          })
        },
        nV: function (e, t, s = !1) {
          let n,
            { relativeX: a, relativeY: r } = (0, i.X)(e),
            l = e.currentTarget.querySelector(".recharts-tooltip-wrapper"),
            o = e.currentTarget.clientWidth,
            u = e.currentTarget.clientHeight,
            c = t || s ? e.currentTarget.getBoundingClientRect() : void 0,
            d = null == c || 0 === o ? 1 : c.width / o || 1,
            h = null == c || 0 === u ? d : c.height / u || 1,
            m = t ? l?.getBoundingClientRect() : void 0
          if (s && null != c) {
            let t = 0,
              s = window.innerHeight
            for (let n = e.currentTarget.parentElement; null != n; n = n.parentElement)
              if ("visible" !== getComputedStyle(n).overflowY) {
                let e = n.getBoundingClientRect()
                ;((t = Math.max(t, e.top)), (s = Math.min(s, e.bottom)))
              }
            n = { top: (t - c.top) / h, bottom: (s - c.top) / h }
          }
          return {
            x: a,
            y: r,
            chartWidth: o,
            chartHeight: u,
            tooltipWidth: null == m ? (l?.offsetWidth ?? 0) : m.width / d,
            tooltipHeight: null == m ? (l?.offsetHeight ?? 0) : m.height / h,
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
      r = s("m6vF"),
      l = s("aHZf"),
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
            h,
            m,
            g,
            p = (0, i.c)(29),
            { data: f, pointer: x, series: y } = e,
            b = (0, r.oM)(),
            _ = (0, r.Ph)(),
            v = (0, r.AD)(),
            w = (0, r.Sg)()
          if (
            null == x ||
            null == b ||
            null == _ ||
            null == v ||
            x.x < b.x ||
            x.x > b.x + b.width ||
            x.y < b.y ||
            x.y > b.y + b.height
          )
            return null
          if (
            p[0] !== f ||
            p[1] !== b.height ||
            p[2] !== b.y ||
            p[3] !== x ||
            p[4] !== y ||
            p[5] !== _ ||
            p[6] !== w ||
            p[7] !== v
          ) {
            let e,
              i = (0, u.jn)({ data: f, pointer: x, series: y, xScale: _, yScale: v, yInverseScale: w })
            ;((t = l.g), (h = o.I.activeDot), (s = "true"), (a = "none"))
            let r = b.y + b.height
            ;(p[14] !== b.y || p[15] !== x.x || p[16] !== r
              ? ((c = (0, n.jsx)("line", { x1: x.x, x2: x.x, y1: b.y, y2: r, stroke: "var(--color-border-strong)" })),
                (p[14] = b.y),
                (p[15] = x.x),
                (p[16] = r),
                (p[17] = c))
              : (c = p[17]),
              p[18] !== x.x
                ? ((e = (e) =>
                    (0, n.jsx)(
                      "circle",
                      { cx: x.x, cy: e.y, fill: e.color, r: 4, stroke: "var(--color-surface)", strokeWidth: 2 },
                      e.key,
                    )),
                  (p[18] = x.x),
                  (p[19] = e))
                : (e = p[19]),
              (d = i.map(e)),
              (p[0] = f),
              (p[1] = b.height),
              (p[2] = b.y),
              (p[3] = x),
              (p[4] = y),
              (p[5] = _),
              (p[6] = w),
              (p[7] = v),
              (p[8] = t),
              (p[9] = s),
              (p[10] = a),
              (p[11] = c),
              (p[12] = d),
              (p[13] = h))
          } else ((t = p[8]), (s = p[9]), (a = p[10]), (c = p[11]), (d = p[12]), (h = p[13]))
          return (
            p[20] !== s || p[21] !== a || p[22] !== c || p[23] !== d
              ? ((m = (0, n.jsxs)("g", { "aria-hidden": s, pointerEvents: a, children: [c, d] })),
                (p[20] = s),
                (p[21] = a),
                (p[22] = c),
                (p[23] = d),
                (p[24] = m))
              : (m = p[24]),
            p[25] !== t || p[26] !== h || p[27] !== m
              ? ((g = (0, n.jsx)(t, { zIndex: h, children: m })), (p[25] = t), (p[26] = h), (p[27] = m), (p[28] = g))
              : (g = p[28]),
            g
          )
        },
        H: function (e) {
          let t,
            s,
            r,
            l,
            o = (0, i.c)(17),
            {
              children: u,
              isTooltipDismissed: c,
              onResetHover: d,
              onTooltipDismissedChange: h,
              consumerAnalytics: m,
              scope: g,
            } = e,
            p = void 0 !== m && m
          o[0] !== c || o[1] !== h ? ((t = c ? () => h(!1) : void 0), (o[0] = c), (o[1] = h), (o[2] = t)) : (t = o[2])
          let f = t
          o[3] !== d || o[4] !== h || o[5] !== g
            ? ((s =
                "workspace" === g
                  ? void 0
                  : () => {
                      ;(h(!0), d())
                    }),
              (o[3] = d),
              (o[4] = h),
              (o[5] = g),
              (o[6] = s))
            : (s = o[6])
          let x = s
          return (
            o[7] !== p || o[8] !== d || o[9] !== h || o[10] !== f
              ? ((r = p
                  ? (e) => {
                      if ("Escape" === e.key) {
                        let t = e.currentTarget.querySelector(".recharts-tooltip-wrapper")
                        t?.querySelector('[role="status"]') != null &&
                          "visible" === getComputedStyle(t).visibility &&
                          (e.stopPropagation(), h(!0), d())
                      } else f?.()
                    }
                  : f),
                (o[7] = p),
                (o[8] = d),
                (o[9] = h),
                (o[10] = f),
                (o[11] = r))
              : (r = o[11]),
            o[12] !== u || o[13] !== x || o[14] !== f || o[15] !== r
              ? ((l = (0, n.jsx)(a.u, {
                  width: "100%",
                  height: "100%",
                  minHeight: 144,
                  onFocusCapture: f,
                  onKeyDownCapture: r,
                  onMouseLeave: x,
                  onMouseMoveCapture: f,
                  onWheelCapture: x,
                  children: u,
                })),
                (o[12] = u),
                (o[13] = x),
                (o[14] = f),
                (o[15] = r),
                (o[16] = l))
              : (l = o[16]),
            l
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
            { color: r, index: l, variant: o } = e,
            u = r ?? a.Kj[l % a.Kj.length]
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
  d2tF(e, t, s) {
    s.d(t, { UsageSettingsPage: () => si })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57"),
      r = s("zd8w"),
      l = s("HZfM"),
      o = s("uXTt"),
      u = s("WXto"),
      c = s("v4LA"),
      d = s("odCE"),
      h = s("UR81"),
      m = s("QIEU"),
      g = s("zTeN"),
      p = s("oyxz"),
      f = s("ygO2"),
      x = s("EOo5"),
      y = s("OAko"),
      b = s("i85S"),
      _ = s("jdiu"),
      v = s("eFxf"),
      w = s("OWtl"),
      A = s("hZax")
    function j() {
      let e,
        t,
        s,
        a = (0, i.c)(10),
        r = (0, g.gh)(w.u),
        l = (0, b.b)(),
        { accountId: o } = (0, x.As)(),
        { data: u } = (0, y.YL)(),
        c = (0, A.AS)(),
        d = (0, g.Ul)(_.jc)
      return (
        a[0] !== o || a[1] !== u || a[2] !== l || a[3] !== r || a[4] !== c
          ? ((e = (e) => {
              ;((0, v.Ih)(c),
                (0, v.uS)(r, {
                  audience: "workspace",
                  checkoutKind: "standalone_credit",
                  entryPoint: "usage_settings_purchase_cta",
                }),
                (0, _.nZ)({
                  scope: r,
                  navigateToPurchase: l,
                  accountId: o,
                  currentAccount: u,
                  event: e,
                  statsigClient: c,
                }))
            }),
            (a[0] = o),
            (a[1] = u),
            (a[2] = l),
            (a[3] = r),
            (a[4] = c),
            (a[5] = e))
          : (e = a[5]),
        a[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(p.A, {
              id: "settings.usage.credit.balance.addBusinessCredits",
              defaultMessage: "Add more",
              description:
                "Button beside the shared workspace credit balance in Usage settings. Opens the credit purchase flow for a Business workspace owner.",
            })),
            (a[6] = t))
          : (t = a[6]),
        a[7] !== d || a[8] !== e
          ? ((s = (0, n.jsx)(f.$, {
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
    var C = s("smwl"),
      k = s("NLdj"),
      S = s("pdRU"),
      M = s("gPv1"),
      E = s("T1PX"),
      T = s("BSnr"),
      P = s("AWNZ"),
      N = s("ZEx5"),
      I = s("rivV"),
      L = s("x7EU"),
      R = s("LjYy"),
      O = s("f9RG"),
      D = s("Wf1j"),
      U = s("Ot7V"),
      F = s("QpGz"),
      q = s("laUo"),
      H = s("PXhB"),
      G = s("ae6t")
    function z(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u,
        c,
        d,
        h,
        m,
        g,
        x = (0, i.c)(30),
        { plan: y } = e,
        b = (0, D.A)()
      x[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (x[0] = t)) : (t = x[0])
      let _ = (0, F.q)(t),
        v = (0, G.j)(),
        w = (0, q.m6)(y),
        A = null != w
      x[1] !== A ? ((s = { enabled: A }), (x[1] = A), (x[2] = s)) : (s = x[2])
      let { data: j } = (0, C.zw)(s)
      if (null == w) return null
      let k =
          null != j
            ? (0, H.m)({
                intl: b,
                amount: j.monthlyAmounts[w.pricePlan] ?? null,
                currencyCode: j.currencyCode,
                minorUnitExponent: j.minorUnitExponent,
              })
            : null,
        S = T.X
      ;(x[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)(p.A, {
            id: "settings.usage.plan.title",
            defaultMessage: "Your plan",
            description: "Title for the current plan section in usage settings",
          })),
          (x[3] = a))
        : (a = x[3]),
        x[4] !== y
          ? ((r = (0, n.jsx)(T.X.Header, { title: a, subtitle: (0, n.jsx)(W, { plan: y }) })), (x[4] = y), (x[5] = r))
          : (r = x[5]))
      let M = T.X,
        E = N.t,
        I = P.ic,
        L = (function (e) {
          switch (e) {
            case R.x.FREE:
              return (0, n.jsx)(p.A, {
                id: "settings.usage.plan.free",
                defaultMessage: "ChatGPT Free",
                description: "Name of the Free plan in usage settings",
              })
            case R.x.GO:
              return (0, n.jsx)(p.A, {
                id: "settings.usage.plan.go",
                defaultMessage: "ChatGPT Go",
                description: "Name of the Go plan in usage settings",
              })
            case R.x.PLUS:
              return (0, n.jsx)(p.A, {
                id: "settings.usage.plan.plus",
                defaultMessage: "ChatGPT Plus",
                description: "Name of the Plus plan in usage settings",
              })
            case R.x.PROLITE:
            case R.x.PRO:
            case R.x.PROMAX:
              return (0, n.jsx)(p.A, {
                id: "settings.usage.plan.pro.numberedTiers",
                defaultMessage: "ChatGPT {plan, select, prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}",
                description:
                  "Current Pro plan name in usage settings. plan is the persisted subscription type: prolite is Pro 100, pro is Pro 200, and promax is Pro 500. The numbers are fixed SKU names, not localized prices. ChatGPT and Pro are product names.",
                values: { plan: e },
              })
          }
        })(w.pricePlan)
      return (
        x[6] !== k
          ? ((l =
              null != k
                ? (0, n.jsx)(p.A, {
                    id: "settings.usage.plan.monthlyPrice",
                    defaultMessage: "{price} / month",
                    description: "Localized monthly price below the current plan name",
                    values: { price: k },
                  })
                : null),
            (x[6] = k),
            (x[7] = l))
          : (l = x[7]),
        x[8] !== _ || x[9] !== v || x[10] !== w.pricePlan
          ? ((o = (e) => {
              v({ currentPlan: w.pricePlan, event: e, getPricingUrl: _, source: "usage_settings_plan_row" })
            }),
            (x[8] = _),
            (x[9] = v),
            (x[10] = w.pricePlan),
            (x[11] = o))
          : (o = x[11]),
        x[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(p.A, {
              id: "settings.usage.plan.view",
              defaultMessage: "View plans",
              description: "CTA to open the plan selection dialog",
            })),
            (x[12] = u))
          : (u = x[12]),
        x[13] !== o
          ? ((c = (0, n.jsx)(f.$, { color: "secondary", size: "toolbar", onClick: o, children: u })),
            (x[13] = o),
            (x[14] = c))
          : (c = x[14]),
        x[15] !== I || x[16] !== c || x[17] !== L || x[18] !== l
          ? ((d = (0, n.jsx)(I, { className: "gap-6", label: L, description: l, control: c })),
            (x[15] = I),
            (x[16] = c),
            (x[17] = L),
            (x[18] = l),
            (x[19] = d))
          : (d = x[19]),
        x[20] !== E || x[21] !== d
          ? ((h = (0, n.jsx)(E, { children: d })), (x[20] = E), (x[21] = d), (x[22] = h))
          : (h = x[22]),
        x[23] !== h || x[24] !== M.Content
          ? ((m = (0, n.jsx)(M.Content, { children: h })), (x[23] = h), (x[24] = M.Content), (x[25] = m))
          : (m = x[25]),
        x[26] !== S || x[27] !== m || x[28] !== r
          ? ((g = (0, n.jsxs)(S, { children: [r, m] })), (x[26] = S), (x[27] = m), (x[28] = r), (x[29] = g))
          : (g = x[29]),
        g
      )
    }
    function W(e) {
      let t,
        s,
        a,
        r = (0, i.c)(12),
        { plan: l } = e
      ;(r[0] !== l ? ((t = (0, q.gx)(l)), (r[0] = l), (r[1] = t)) : (t = r[1]),
        r[2] !== t ? ((s = { enabled: t }), (r[2] = t), (r[3] = s)) : (s = r[3]))
      let { data: o } = (0, C.TG)(s)
      if (!(0, q.gx)(l)) return null
      let u = (0, q.q8)(o),
        c = "ios" === u ? q.R0 : "android" === u ? q.PI : q.oK
      r[4] !== c
        ? ((a = (e) =>
            (0, n.jsx)("a", {
              className: "cursor-interaction text-info",
              href: c,
              target: "_blank",
              rel: "noreferrer",
              onClick: (e) => {
                ;(0, U.PQ)({ event: e, href: c, initiator: "open_in_browser_bridge" })
              },
              children: e,
            })),
          (r[4] = c),
          (r[5] = a))
        : (a = r[5])
      let d = a
      switch (u) {
        case null: {
          let e
          return (
            r[6] !== d
              ? ((e = (0, n.jsx)(p.A, {
                  id: "settings.usage.plan.manageOnWebDescription",
                  defaultMessage:
                    "Your subscription is managed through ChatGPT. Go to <cancel>Settings > Billing on Web</cancel> to manage or cancel your plan",
                  description:
                    "Description beneath Your plan for a ChatGPT web-managed subscription. The cancel tag links to billing settings where the user can manage or cancel the subscription. Web refers to the web application.",
                  values: { cancel: d },
                })),
                (r[6] = d),
                (r[7] = e))
              : (e = r[7]),
            e
          )
        }
        case "ios": {
          let e
          return (
            r[8] !== d
              ? ((e = (0, n.jsx)(p.A, {
                  id: "settings.usage.cancelPlan.appleDescription",
                  defaultMessage:
                    "Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>",
                  description: "Description shown when an Apple-managed subscription must be canceled through iOS",
                  values: { cancel: d },
                })),
                (r[8] = d),
                (r[9] = e))
              : (e = r[9]),
            e
          )
        }
        case "android": {
          let e
          return (
            r[10] !== d
              ? ((e = (0, n.jsx)(p.A, {
                  id: "settings.usage.cancelPlan.googlePlayDescription",
                  defaultMessage:
                    "Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>",
                  description:
                    "Description shown when a Google Play-managed subscription must be canceled through Android",
                  values: { cancel: d },
                })),
                (r[10] = d),
                (r[11] = e))
              : (e = r[11]),
            e
          )
        }
      }
    }
    var B = s("irkb"),
      $ = s("T0Rc"),
      V = s("xSOA"),
      Y = s("Qgfj"),
      X = s("bqtn"),
      K = s("SGsN"),
      Z = s("F0xz"),
      Q = s("chIh"),
      J = s("I7Ou"),
      ee = s("QyE3"),
      et = s("SOLA"),
      es = s("rvFo"),
      en = s("HFSu"),
      ei = s("eShZ")
    let ea = (0, Y.YK)({
        save: {
          id: "settings.usage.subscriptionSharing.apps.save",
          defaultMessage: "Save",
          description:
            "Button at the top of App limits that saves all pending changes to apps' use of the user's ChatGPT plan allowance",
        },
      }),
      er = (0, Y.YK)({
        limitsUpdated: {
          id: "settings.usage.subscriptionSharing.apps.limitsUpdated",
          defaultMessage: "App limits updated",
          description:
            "Success toast after saving the pending changes to apps' use of the user's ChatGPT plan allowance",
        },
        limitsUpdateError: {
          id: "settings.usage.subscriptionSharing.apps.limitsUpdateError",
          defaultMessage: "Couldn't update app limits. Please try again",
          description:
            "Error toast when saving the pending changes to apps' use of the user's ChatGPT plan allowance fails",
        },
      })
    var el = s("g2p6")
    let eo = (0, Y.YK)({
      enabled: {
        id: "settings.usage.subscriptionSharing.credits.enabled",
        defaultMessage: "Credit use for other apps turned on",
        description: "Success toast after saving the preference to allow other apps to use the user's credits",
      },
      disabled: {
        id: "settings.usage.subscriptionSharing.credits.disabled",
        defaultMessage: "Credit use for other apps turned off",
        description: "Success toast after saving the preference to prevent other apps from using the user's credits",
      },
      updateError: {
        id: "settings.usage.subscriptionSharing.credits.updateError",
        defaultMessage: "Couldn’t update credit preference",
        description:
          "Error toast when the preference allowing AI requests in other apps to use credits cannot be saved",
      },
    })
    function eu() {
      let e,
        t,
        s,
        a,
        r,
        l,
        o,
        u,
        c = (0, i.c)(26),
        d = (0, g.gh)(w.u),
        h = (0, D.A)(),
        { data: m, isError: x, isFetching: y, refetch: b } = (0, g.Ul)(el.s6)
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = ["set-chatpass-credit-preference"]), (c[0] = e))
        : (e = c[0]),
        c[1] !== d ? ((t = (e) => (0, el.b$)(d, e)), (c[1] = d), (c[2] = t)) : (t = c[2]),
        c[3] !== h || c[4] !== d
          ? ((s = (e, t) => {
              d.get(K.Id).success(h.formatMessage(t ? eo.enabled : eo.disabled))
            }),
            (a = () => {
              d.get(K.Id).danger(h.formatMessage(eo.updateError), {
                errorAnalytics: { toastId: "settings.usage.subscriptionSharing.credits.updateError" },
              })
            }),
            (c[3] = h),
            (c[4] = d),
            (c[5] = s),
            (c[6] = a))
          : ((s = c[5]), (a = c[6])),
        c[7] !== t || c[8] !== s || c[9] !== a
          ? ((r = { mutationKey: e, mutationFn: t, onSuccess: s, onError: a }),
            (c[7] = t),
            (c[8] = s),
            (c[9] = a),
            (c[10] = r))
          : (r = c[10]))
      let { isPending: _, mutate: v } = (0, V.n)(r)
      if (x && null == m) {
        let e, t, s, i
        return (
          c[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", {
                role: "alert",
                children: (0, n.jsx)(p.A, {
                  id: "settings.usage.subscriptionSharing.credits.loadError",
                  defaultMessage: "Couldn’t load credit preference",
                  description:
                    "Error shown when the preference allowing AI requests in other apps to use credits cannot be loaded",
                }),
              })),
              (c[11] = e))
            : (e = c[11]),
          c[12] !== b ? ((t = () => void b()), (c[12] = b), (c[13] = t)) : (t = c[13]),
          c[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(p.A, {
                id: "common.retry",
                defaultMessage: "Retry",
                description: "Button to retry an operation after an error",
              })),
              (c[14] = s))
            : (s = c[14]),
          c[15] !== y || c[16] !== t
            ? ((i = (0, n.jsx)(P.ic, {
                label: e,
                control: (0, n.jsx)(f.$, { color: "secondary", loading: y, size: "toolbar", onClick: t, children: s }),
              })),
              (c[15] = y),
              (c[16] = t),
              (c[17] = i))
            : (i = c[17]),
          i
        )
      }
      if (null == m) {
        let e
        return (
          c[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(J.u, {
                children: (0, n.jsx)(p.A, {
                  id: "settings.usage.subscriptionSharing.credits.loading",
                  defaultMessage: "Loading credit preference…",
                  description: "Loading state for the preference allowing AI requests in other apps to use credits",
                }),
              })),
              (c[18] = e))
            : (e = c[18]),
          e
        )
      }
      return (
        c[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(p.A, {
              id: "settings.usage.credit.chatpass.title",
              defaultMessage: "Allow other apps to use credits after reaching your usage limit",
              description:
                "Label for the preference allowing AI requests in other apps to use the user's credits after the user's ChatGPT plan usage limit is reached",
            })),
            (o = (0, n.jsx)(p.A, {
              id: "settings.usage.credit.chatpass.description",
              defaultMessage: "Applies to apps you’ve allowed to use your ChatGPT plan.",
              description:
                "Description for the preference explaining that apps using the user's ChatGPT plan may consume available credits after the user's usage limit is reached",
            })),
            (c[19] = l),
            (c[20] = o))
          : ((l = c[19]), (o = c[20])),
        c[21] !== h || c[22] !== _ || c[23] !== v || c[24] !== m.canConsumePersonalCreditsChatPass
          ? ((u = (0, n.jsx)(P.ic, {
              label: l,
              description: o,
              control: (e) => {
                let { "aria-describedby": t } = e
                return (0, n.jsx)(Z.l, {
                  "aria-describedby": t,
                  ariaLabel: h.formatMessage({
                    id: "settings.usage.credit.chatpass.ariaLabel",
                    defaultMessage: "Allow other apps to use credits after reaching your usage limit",
                    description:
                      "Accessible label for the preference allowing AI requests in other apps to use the user's credits after the user's ChatGPT plan usage limit is reached",
                  }),
                  checked: m.canConsumePersonalCreditsChatPass,
                  disabled: _,
                  onChange: (e) => v(e),
                })
              },
            })),
            (c[21] = h),
            (c[22] = _),
            (c[23] = v),
            (c[24] = m.canConsumePersonalCreditsChatPass),
            (c[25] = u))
          : (u = c[25]),
        u
      )
    }
    let ec = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    function ed(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        h,
        m,
        y,
        b,
        _,
        v,
        A,
        j,
        C,
        k,
        S,
        M,
        E,
        I = (0, i.c)(63),
        { isPolling: L, showCreditPreference: R } = e,
        O = (0, g.gh)(w.u),
        { accountId: D, userId: U } = (0, x.As)(),
        F = (0, B.jE)()
      I[0] !== D || I[1] !== U
        ? ((t = ["usage-settings", "chatpass-apps", D, U]), (I[0] = D), (I[1] = U), (I[2] = t))
        : (t = I[2])
      let q = t
      I[3] === Symbol.for("react.memo_cache_sentinel") ? ((s = {}), (I[3] = s)) : (s = I[3])
      let [H, G] = (0, r.useState)(s)
      ;(I[4] !== L
        ? ((a = (e) => !!L && ("success" !== e.state.status || null != e.state.data) && es.D.ONE_MINUTE),
          (I[4] = L),
          (I[5] = a))
        : (a = I[5]),
        I[6] !== L || I[7] !== q || I[8] !== a
          ? ((l = {
              queryKey: q,
              queryFn: eh,
              staleTime: es.D.ONE_MINUTE,
              refetchInterval: a,
              refetchOnWindowFocus: L,
              retry: !1,
            }),
            (I[6] = L),
            (I[7] = q),
            (I[8] = a),
            (I[9] = l))
          : (l = I[9]))
      let { data: z, isError: W, isFetching: Y, isSuccess: X, refetch: Z } = (0, $.I)(l)
      ;(I[10] !== F || I[11] !== q
        ? ((o = () => F.cancelQueries({ queryKey: q })), (I[10] = F), (I[11] = q), (I[12] = o))
        : (o = I[12]),
        I[13] !== D
          ? ((u = (e) =>
              en.CodexRequest.safePut("/wham/usage/chatpass/limits", {
                additionalHeaders: null == D ? void 0 : { "ChatGPT-Account-ID": D },
                expectedErrorStatuses: [400, 401, 403, 404, 503],
                requestBody: { global_percentage: 100, per_app_percentage: e },
              })),
            (I[13] = D),
            (I[14] = u))
          : (u = I[14]),
        I[15] !== F || I[16] !== q || I[17] !== O
          ? ((c = async (e) => {
              ;(await F.cancelQueries({ queryKey: q }),
                F.setQueryData(q, (t) =>
                  null == t
                    ? t
                    : {
                        ...t,
                        items: t.items.map((t) => ({
                          ...t,
                          allowed_usage_percent: e.per_app_percentage?.[t.id] ?? 100,
                        })),
                      },
                ),
                O.get(K.Id).success((0, n.jsx)(p.A, { ...er.limitsUpdated })),
                G({}),
                F.invalidateQueries({ queryKey: q }))
            }),
            (I[15] = F),
            (I[16] = q),
            (I[17] = O),
            (I[18] = c))
          : (c = I[18]),
        I[19] !== O
          ? ((d = () => {
              O.get(K.Id).danger((0, n.jsx)(p.A, { ...er.limitsUpdateError }), {
                errorAnalytics: { toastId: "chatpassAppLimits.onError.limitUpdateError" },
              })
            }),
            (I[19] = O),
            (I[20] = d))
          : (d = I[20]),
        I[21] !== o || I[22] !== u || I[23] !== c || I[24] !== d
          ? ((h = { onMutate: o, mutationFn: u, onSuccess: c, onError: d }),
            (I[21] = o),
            (I[22] = u),
            (I[23] = c),
            (I[24] = d),
            (I[25] = h))
          : (h = I[25]))
      let { isPending: Q, mutate: ee } = (0, V.n)(h)
      I[26] !== z?.items || I[27] !== H
        ? ((m =
            z?.items.some((e) => {
              let t = H[e.id]
              return null != t && t !== e.allowed_usage_percent
            }) ?? !1),
          (I[26] = z?.items),
          (I[27] = H),
          (I[28] = m))
        : (m = I[28])
      let ei = m
      return ((0, et.iv)("usage.chatpass-app-limits", ei), (X && null == z) || z?.items.length === 0)
        ? null
        : (I[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = (0, n.jsx)(p.A, {
                id: "settings.usage.subscriptionSharing.title",
                defaultMessage: "App limits",
                description:
                  "Title for the section controlling how much of the user's subscription allowance apps can use",
              })),
              (b = (0, n.jsx)(p.A, {
                id: "settings.usage.subscriptionSharing.description",
                defaultMessage: "Set limits for each app’s use of your ChatGPT plan and credits.",
                description:
                  "Description below the App limits heading for settings that control each app's use of the user's ChatGPT plan allowance and whether apps may use credits",
              })),
              (I[29] = y),
              (I[30] = b))
            : ((y = I[29]), (b = I[30])),
          I[31] !== z || I[32] !== H || I[33] !== ei || I[34] !== Q || I[35] !== ee
            ? ((_ =
                null != z
                  ? (0, n.jsx)(f.$, {
                      color: ei ? "primary" : "secondary",
                      size: "toolbar",
                      disabled: !ei || Q,
                      loading: Q,
                      onClick: () => {
                        ei &&
                          !Q &&
                          ee(Object.fromEntries(z.items.map((e) => [e.id, H[e.id] ?? e.allowed_usage_percent])))
                      },
                      children: (0, n.jsx)(p.A, { ...ea.save }),
                    })
                  : null),
              (I[31] = z),
              (I[32] = H),
              (I[33] = ei),
              (I[34] = Q),
              (I[35] = ee),
              (I[36] = _))
            : (_ = I[36]),
          I[37] !== _
            ? ((v = (0, n.jsx)(T.X.Header, {
                className: "select-none",
                size: "base",
                title: y,
                subtitle: b,
                actions: _,
              })),
              (I[37] = _),
              (I[38] = v))
            : (v = I[38]),
          I[39] !== z?.items || I[40] !== H || I[41] !== Q
            ? ((A = z?.items.map((e) =>
                (0, n.jsx)(
                  em,
                  {
                    app: e,
                    disabled: Q,
                    limitPercent: H[e.id] ?? e.allowed_usage_percent,
                    onLimitChange: (t) => {
                      Q ||
                        G((s) => {
                          let n = { ...s }
                          return (t === e.allowed_usage_percent ? delete n[e.id] : (n[e.id] = t), n)
                        })
                    },
                  },
                  e.id,
                ),
              )),
              (I[39] = z?.items),
              (I[40] = H),
              (I[41] = Q),
              (I[42] = A))
            : (A = I[42]),
          I[43] !== W || I[44] !== Y || I[45] !== Z
            ? ((j = W
                ? (0, n.jsx)(P.ic, {
                    label: (0, n.jsx)("span", {
                      role: "alert",
                      children: (0, n.jsx)(p.A, {
                        id: "settings.usage.subscriptionSharing.apps.loadError",
                        defaultMessage: "Couldn't load app limits",
                        description: "Error when fetching per-app subscription sharing limits and usage",
                      }),
                    }),
                    control: (0, n.jsx)(f.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: Y,
                      onClick: () => void Z(),
                      children: (0, n.jsx)(p.A, {
                        id: "settings.usage.subscriptionSharing.apps.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry loading per-app subscription sharing limits and usage",
                      }),
                    }),
                  })
                : null),
              (I[43] = W),
              (I[44] = Y),
              (I[45] = Z),
              (I[46] = j))
            : (j = I[46]),
          I[47] !== z || I[48] !== W
            ? ((C =
                W || null != z
                  ? null
                  : (0, n.jsx)(J.u, {
                      children: (0, n.jsx)(p.A, {
                        id: "settings.usage.subscriptionSharing.apps.loading",
                        defaultMessage: "Loading app limits…",
                        description: "Loading state for per-app subscription sharing limits and usage",
                      }),
                    })),
              (I[47] = z),
              (I[48] = W),
              (I[49] = C))
            : (C = I[49]),
          I[50] !== A || I[51] !== j || I[52] !== C
            ? ((k = (0, n.jsxs)(N.t, { className: "select-none", children: [A, j, C] })),
              (I[50] = A),
              (I[51] = j),
              (I[52] = C),
              (I[53] = k))
            : (k = I[53]),
          I[54] !== z || I[55] !== R
            ? ((S = R && null != z ? (0, n.jsx)(N.t, { children: (0, n.jsx)(eu, {}) }) : null),
              (I[54] = z),
              (I[55] = R),
              (I[56] = S))
            : (S = I[56]),
          I[57] !== k || I[58] !== S
            ? ((M = (0, n.jsxs)(T.X.Content, { className: "gap-4", children: [k, S] })),
              (I[57] = k),
              (I[58] = S),
              (I[59] = M))
            : (M = I[59]),
          I[60] !== v || I[61] !== M
            ? ((E = (0, n.jsxs)(T.X, { children: [v, M] })), (I[60] = v), (I[61] = M), (I[62] = E))
            : (E = I[62]),
          E)
    }
    async function eh(e) {
      let { signal: t } = e
      try {
        return await en.CodexRequest.safeGet("/wham/usage/chatpass/apps", { signal: t })
      } catch (e) {
        if (e instanceof ei.fk && (401 === e.status || 403 === e.status || 404 === e.status)) return null
        throw e
      }
    }
    function em(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        h,
        m,
        g,
        p = (0, i.c)(36),
        { app: f, disabled: x, limitPercent: y, onLimitChange: b } = e,
        _ = (0, D.A)(),
        [v, w] = (0, r.useState)(10),
        A = y > 0,
        j = A ? y : v
      p[0] !== f ? ((t = (0, n.jsx)(Q.y, { app: { ...f, type: "oai_apps" } })), (p[0] = f), (p[1] = t)) : (t = p[1])
      let C = f.name,
        k = !A || x
      p[2] !== f.name || p[3] !== _
        ? ((s = _.formatMessage(
            {
              id: "settings.usage.subscriptionSharing.apps.planLimitLabel",
              defaultMessage: "Plan limit for {app}",
              description:
                "Accessible label for the percentage dropdown in an app's row. It selects how much of the user's ChatGPT plan allowance the app may use; app is the app's display name",
            },
            { app: f.name },
          )),
          (p[2] = f.name),
          (p[3] = _),
          (p[4] = s))
        : (s = p[4])
      let S = j / 100
      return (
        p[5] !== S ? ((a = (0, n.jsx)(Y.Gr, { value: S, style: "percent" })), (p[5] = S), (p[6] = a)) : (a = p[6]),
        p[7] !== s || p[8] !== a
          ? ((l = (0, n.jsx)(ee.vg, { "aria-label": s, children: a })), (p[7] = s), (p[8] = a), (p[9] = l))
          : (l = p[9]),
        p[10] !== b || p[11] !== j
          ? ((o = ec.map((e) =>
              (0, n.jsx)(
                X.ms.Item,
                {
                  role: "menuitemradio",
                  "aria-checked": e === j,
                  onSelect: () => b(e),
                  children: (0, n.jsx)(Y.Gr, { value: e / 100, style: "percent" }),
                },
                e,
              ),
            )),
            (p[10] = b),
            (p[11] = j),
            (p[12] = o))
          : (o = p[12]),
        p[13] !== k || p[14] !== l || p[15] !== o
          ? ((u = (0, n.jsx)(X.Ab, {
              align: "end",
              contentWidth: "menuNarrow",
              disabled: k,
              triggerButton: l,
              children: o,
            })),
            (p[13] = k),
            (p[14] = l),
            (p[15] = o),
            (p[16] = u))
          : (u = p[16]),
        p[17] !== f.name || p[18] !== _
          ? ((c = _.formatMessage(
              {
                id: "settings.usage.subscriptionSharing.apps.usePlanLimitsLabel",
                defaultMessage: "Allow {app} to use plan limits",
                description:
                  "Accessible label for the toggle in an app's row. When enabled, the app can use the selected percentage of the user's ChatGPT plan allowance; when disabled, its limit is zero. app is the app's display name",
              },
              { app: f.name },
            )),
            (p[17] = f.name),
            (p[18] = _),
            (p[19] = c))
          : (c = p[19]),
        p[20] !== v || p[21] !== y || p[22] !== b
          ? ((d = (e) => {
              ;(e || w(y), b(e ? v : 0))
            }),
            (p[20] = v),
            (p[21] = y),
            (p[22] = b),
            (p[23] = d))
          : (d = p[23]),
        p[24] !== x || p[25] !== c || p[26] !== d || p[27] !== A
          ? ((h = (0, n.jsx)(Z.l, { checked: A, disabled: x, "aria-label": c, onChange: d })),
            (p[24] = x),
            (p[25] = c),
            (p[26] = d),
            (p[27] = A),
            (p[28] = h))
          : (h = p[28]),
        p[29] !== h || p[30] !== u
          ? ((m = (0, n.jsxs)(n.Fragment, { children: [u, h] })), (p[29] = h), (p[30] = u), (p[31] = m))
          : (m = p[31]),
        p[32] !== f.name || p[33] !== t || p[34] !== m
          ? ((g = (0, n.jsx)(P.ic, { icon: t, label: C, controlSizing: "content", control: m })),
            (p[32] = f.name),
            (p[33] = t),
            (p[34] = m),
            (p[35] = g))
          : (g = p[35]),
        g
      )
    }
    function eg(e) {
      let t,
        s = (0, i.c)(4),
        { isPolling: a, showCreditPreference: r } = e,
        l = void 0 === a || a,
        o = void 0 !== r && r,
        u = (0, A.Zj)("185496087"),
        { accountId: c, authMethod: d, userId: h } = (0, x.As)()
      if (!u || "chatgpt" !== d || null == c || null == h) return null
      let m = `${c}:${h}`
      return (
        s[0] !== l || s[1] !== o || s[2] !== m
          ? ((t = (0, n.jsx)(ed, { isPolling: l, showCreditPreference: o }, m)),
            (s[0] = l),
            (s[1] = o),
            (s[2] = m),
            (s[3] = t))
          : (t = s[3]),
        t
      )
    }
    var ep = s("DBCl"),
      ef = s("RxZZ"),
      ex = s("iRMi"),
      ey = s("evwP"),
      eb = s("BrP7"),
      e_ = s("LXBZ"),
      ev = s("yGJW"),
      ew = s("bZug"),
      eA = s("uris")
    function ej() {
      let e,
        t,
        s,
        a,
        r,
        l,
        o,
        u = (0, i.c)(27),
        c = (0, D.A)(),
        { userId: d, accountId: h } = (0, x.As)(),
        m = new Intl.DateTimeFormat().resolvedOptions().timeZone
      u[0] !== h || u[1] !== d
        ? ((e = ["rate-limit-reset-credits", "history", d, h]), (u[0] = h), (u[1] = d), (u[2] = e))
        : (e = u[2])
      let g = null != d && null != h
      u[3] !== e || u[4] !== g
        ? ((t = { queryKey: e, enabled: g, staleTime: 6e4, initialPageParam: "", queryFn: eS, getNextPageParam: ek }),
          (u[3] = e),
          (u[4] = g),
          (u[5] = t))
        : (t = u[5])
      let {
          data: y,
          isPending: b,
          isError: _,
          refetch: v,
          hasNextPage: w,
          fetchNextPage: A,
          isFetchingNextPage: j,
          isFetchNextPageError: C,
        } = (0, eA.q)(t),
        k = y?.pages.flatMap(eC)
      u[6] !== b
        ? ((s = b
            ? (0, n.jsx)(J.u, {
                children: (0, n.jsx)(p.A, {
                  id: "settings.usage.bankedResetHistory.loading",
                  defaultMessage: "Loading banked reset history…",
                  description:
                    "Loading status for the customer's banked reset history in Codex Usage & billing settings.",
                }),
              })
            : null),
          (u[6] = b),
          (u[7] = s))
        : (s = u[7])
      let S = k?.map((e) =>
        (0, n.jsx)(
          P.ic,
          {
            label:
              "granted" === e.kind
                ? (0, n.jsx)(p.A, {
                    id: "settings.usage.bankedResetHistory.received",
                    defaultMessage: "Reset received",
                    description:
                      "History event in Codex Usage & billing settings: the customer received a usage reset saved for later. No grant source is shown.",
                  })
                : (0, n.jsx)(p.A, {
                    id: "settings.usage.bankedResetHistory.redeemed",
                    defaultMessage: "Reset used",
                    description:
                      "History event in Codex Usage & billing settings: the customer redeemed a previously saved usage reset.",
                  }),
            control: (0, n.jsxs)("time", {
              className: "flex flex-col gap-0.5 text-end text-sm",
              dateTime: e.occurred_at,
              children: [
                (0, n.jsx)("span", {
                  children: c.formatDate(e.occurred_at, { month: "short", day: "numeric", timeZone: m }),
                }),
                (0, n.jsx)("span", {
                  className: "text-xs text-secondary",
                  children: c.formatTime(e.occurred_at, {
                    hour: "numeric",
                    minute: "2-digit",
                    timeZone: m,
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
        u[8] !== k?.length
          ? ((a =
              k?.length === 0
                ? (0, n.jsx)(ey.W, {
                    align: "start",
                    layout: "settings-row",
                    children: (0, n.jsx)(p.A, {
                      id: "settings.usage.bankedResetHistory.empty",
                      defaultMessage: "No banked reset activity in the past 30 days",
                      description:
                        "Empty history in Codex Usage & billing settings, shown when no saved usage resets were granted or used during the past 30 days.",
                    }),
                  })
                : null),
            (u[8] = k?.length),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== A || u[11] !== _ || u[12] !== C || u[13] !== j || u[14] !== v
          ? ((r = _
              ? (0, n.jsx)(P.ic, {
                  label: (0, n.jsx)(p.A, {
                    id: "settings.usage.bankedResetHistory.error",
                    defaultMessage: "Couldn’t load banked reset history",
                    description:
                      "Error in Codex Usage & billing settings when fetching banked reset activity fails. Existing resets are unaffected.",
                  }),
                  control: (0, n.jsx)(f.$, {
                    color: "secondary",
                    loading: j,
                    onClick: () => void (C ? A() : v()),
                    size: "toolbar",
                    children: (0, n.jsx)(p.A, {
                      id: "settings.usage.resets.retry",
                      defaultMessage: "Retry",
                      description: "Button label for retrying Codex usage reset loading in settings",
                    }),
                  }),
                })
              : null),
            (u[10] = A),
            (u[11] = _),
            (u[12] = C),
            (u[13] = j),
            (u[14] = v),
            (u[15] = r))
          : (r = u[15]),
        u[16] !== A || u[17] !== w || u[18] !== _ || u[19] !== j
          ? ((l =
              !_ && w
                ? (0, n.jsx)(P.ic, {
                    label: null,
                    control: (0, n.jsx)(f.$, {
                      color: "secondary",
                      loading: j,
                      onClick: () => void A(),
                      size: "toolbar",
                      children: (0, n.jsx)(p.A, {
                        id: "settings.usage.bankedResetHistory.more",
                        defaultMessage: "Show more",
                        description:
                          "Button in Codex Usage & billing settings to load older banked reset events within the same 30-day history window.",
                      }),
                    }),
                  })
                : null),
            (u[16] = A),
            (u[17] = w),
            (u[18] = _),
            (u[19] = j),
            (u[20] = l))
          : (l = u[20]),
        u[21] !== s || u[22] !== S || u[23] !== a || u[24] !== r || u[25] !== l
          ? ((o = (0, n.jsxs)(n.Fragment, { children: [s, S, a, r, l] })),
            (u[21] = s),
            (u[22] = S),
            (u[23] = a),
            (u[24] = r),
            (u[25] = l),
            (u[26] = o))
          : (o = u[26]),
        o
      )
    }
    function eC(e) {
      return e.events
    }
    function ek(e) {
      return e.next_cursor ?? void 0
    }
    function eS(e) {
      let { pageParam: t, signal: s } = e
      return en.CodexRequest.safeGet("/wham/rate-limit-reset-credits/history", {
        parameters: { query: { cursor: t || void 0 } },
        signal: s,
      })
    }
    function eM(e) {
      let t,
        s,
        a = (0, i.c)(3),
        { headingRef: r } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(p.A, {
              id: "settings.usage.resets.title",
              defaultMessage: "Usage limit resets",
              description: "Title for the Codex usage limit resets section in settings",
            })),
            (a[0] = t))
          : (t = a[0]),
        a[1] !== r
          ? ((s = (0, n.jsx)("span", { ref: r, tabIndex: -1, children: t })), (a[1] = r), (a[2] = s))
          : (s = a[2]),
        s
      )
    }
    function eE(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        h,
        m = (0, i.c)(31),
        { activeCreditId: g, credit: x, isConfirming: y, isResetting: b, onUseReset: _ } = e,
        v = (0, D.A)(),
        w = (0, r.useId)(),
        A = (0, r.useId)(),
        j = (0, r.useId)(),
        C = x?.id,
        k = x?.expires_at
      m[0] !== k || m[1] !== v
        ? ((t =
            null == k
              ? null
              : v.formatDate(k, {
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  month: "short",
                  timeZoneName: "short",
                })),
          (m[0] = k),
          (m[1] = v),
          (m[2] = t))
        : (t = m[2])
      let S = t
      ;(m[3] !== x?.title
        ? ((s =
            x?.title?.trim() ||
            (0, n.jsx)(p.A, {
              id: "settings.usage.resets.fallbackTitle",
              defaultMessage: "Usage reset",
              description: "Fallback title for a Codex usage limit reset in settings",
            })),
          (m[3] = x?.title),
          (m[4] = s))
        : (s = m[4]),
        m[5] !== A || m[6] !== s
          ? ((a = (0, n.jsx)("span", { id: A, children: s })), (m[5] = A), (m[6] = s), (m[7] = a))
          : (a = m[7]),
        m[8] !== j || m[9] !== S
          ? ((l =
              null == S
                ? null
                : (0, n.jsx)("span", {
                    id: j,
                    children: (0, n.jsx)(p.A, {
                      id: "settings.usage.resets.expiresWithTimeZone",
                      defaultMessage: "Expires {date}",
                      description: "Expiration date, time, and time zone for a Codex usage limit reset in settings",
                      values: { date: S },
                    }),
                  })),
            (m[8] = j),
            (m[9] = S),
            (m[10] = l))
          : (l = m[10]))
      let M = null == S ? void 0 : j,
        E = `${w} ${A}`,
        T = y ? "primary" : "secondary",
        N = g === (C ?? "automatic")
      return (
        m[11] !== C || m[12] !== _
          ? ((o = () => {
              _(C)
            }),
            (m[11] = C),
            (m[12] = _),
            (m[13] = o))
          : (o = m[13]),
        m[14] !== y
          ? ((u = y
              ? (0, n.jsx)(p.A, {
                  id: "settings.usage.resets.confirmReset",
                  defaultMessage: "Confirm",
                  description: "Button label confirming the redemption of a Codex usage limit reset from settings",
                })
              : (0, n.jsx)(p.A, {
                  id: "settings.usage.resets.useReset",
                  defaultMessage: "Use reset",
                  description: "Button label for redeeming a Codex usage limit reset from settings",
                })),
            (m[14] = y),
            (m[15] = u))
          : (u = m[15]),
        m[16] !== w || m[17] !== u
          ? ((c = (0, n.jsx)("span", { id: w, children: u })), (m[16] = w), (m[17] = u), (m[18] = c))
          : (c = m[18]),
        m[19] !== b || m[20] !== c || m[21] !== M || m[22] !== E || m[23] !== T || m[24] !== N || m[25] !== o
          ? ((d = (0, n.jsx)(f.$, {
              "aria-describedby": M,
              "aria-labelledby": E,
              color: T,
              disabled: b,
              loading: N,
              onClick: o,
              size: "toolbar",
              children: c,
            })),
            (m[19] = b),
            (m[20] = c),
            (m[21] = M),
            (m[22] = E),
            (m[23] = T),
            (m[24] = N),
            (m[25] = o),
            (m[26] = d))
          : (d = m[26]),
        m[27] !== d || m[28] !== a || m[29] !== l
          ? ((h = (0, n.jsx)(P.ic, { label: a, description: l, control: d })),
            (m[27] = d),
            (m[28] = a),
            (m[29] = l),
            (m[30] = h))
          : (h = m[30]),
        h
      )
    }
    function eT(e) {
      let t,
        s,
        a,
        l,
        o = (0, i.c)(22),
        { activeCreditId: u, credits: c, isResetFillActive: d, isResetting: h, onUseReset: m, retryCreditId: g } = e,
        [p, f] = (0, r.useState)(null)
      o[0] !== p || o[1] !== m
        ? ((t = async (e) => {
            let t = e ?? "automatic"
            p !== t ? f(t) : (f(null), await m(e))
          }),
          (o[0] = p),
          (o[1] = m),
          (o[2] = t))
        : (t = o[2])
      let x = t
      if (
        (o[3] !== c ? ((s = 0 === c.length ? [null] : c), (o[3] = c), (o[4] = s)) : (s = o[4]),
        o[5] !== u || o[6] !== p || o[7] !== x || o[8] !== d || o[9] !== h || o[10] !== g || o[11] !== s)
      ) {
        let e
        ;(o[13] !== u || o[14] !== p || o[15] !== x || o[16] !== d || o[17] !== h || o[18] !== g
          ? ((e = (e) => {
              let t = e?.id ?? "automatic"
              return (0, n.jsx)(
                eE,
                {
                  activeCreditId: u,
                  credit: e,
                  isConfirming: p === t,
                  isResetting: d || h || (null != g && g !== t),
                  onUseReset: x,
                },
                t,
              )
            }),
            (o[13] = u),
            (o[14] = p),
            (o[15] = x),
            (o[16] = d),
            (o[17] = h),
            (o[18] = g),
            (o[19] = e))
          : (e = o[19]),
          (a = s.map(e)),
          (o[5] = u),
          (o[6] = p),
          (o[7] = x),
          (o[8] = d),
          (o[9] = h),
          (o[10] = g),
          (o[11] = s),
          (o[12] = a))
      } else a = o[12]
      return (o[20] !== a ? ((l = (0, n.jsx)(n.Fragment, { children: a })), (o[20] = a), (o[21] = l)) : (l = o[21]), l)
    }
    function eP(e) {
      let t,
        s,
        a,
        l,
        o,
        u = (0, i.c)(36),
        { isResetFillActive: c, onResetAttemptCancel: d, onResetAttemptStart: h, onResetComplete: m } = e,
        x = (0, g.gh)(w.u),
        b = (0, D.A)(),
        _ = (0, r.useRef)(null),
        v = (0, r.useId)(),
        [A, j] = (0, r.useState)(null),
        [C] = (0, r.useState)(e_.A),
        [k, S] = (0, r.useState)(null),
        { data: M, error: E, isPending: I, refetch: L } = (0, y.Gh)(),
        R = (0, y.U1)()
      u[0] !== M?.credits ? ((t = M?.credits?.filter(eI)), (u[0] = M?.credits), (u[1] = t)) : (t = u[1])
      let O = t,
        U = M?.available_count ?? 0,
        F = M?.history_enabled ?? !1
      F && null == A && j(0 === U ? "history" : "available")
      let q = k?.credits ?? O,
        H = k?.availableCount ?? U,
        G = R.isPending ? (R.variables?.creditId ?? "automatic") : null
      u[2] !== R.mutateAsync ||
      u[3] !== b ||
      u[4] !== d ||
      u[5] !== h ||
      u[6] !== m ||
      u[7] !== k ||
      u[8] !== C ||
      u[9] !== x ||
      u[10] !== H ||
      u[11] !== q
        ? ((s = async (e) => {
            let t = e ?? "automatic"
            if ((null != k && k.creditId !== t) || null == q) return
            null == k && h?.()
            let s = await C.redeem({ availableCount: H, consume: R.mutateAsync, creditId: e })
            switch (s.status) {
              case "in_flight":
                return
              case "transport_error":
                ;(S({ availableCount: H, creditId: s.creditId ?? "automatic", credits: q }),
                  x
                    .get(K.Id)
                    .danger(
                      b.formatMessage({
                        id: "codex.rateLimitResetModal.error",
                        defaultMessage: "Couldn’t reset usage. Please try again",
                        description: "Error shown when resetting Codex usage fails",
                      }),
                      { errorAnalytics: { toastId: "codex.rateLimitResetModal.error" } },
                    ))
                return
              case "rejected":
                ;(S(null),
                  d?.(),
                  x
                    .get(K.Id)
                    .danger((0, e_.M)(s.code, b), {
                      errorAnalytics: { toastId: "resetSettingsGroupContent.handleUseReset" },
                    }))
                return
              case "reset": {
                S(null)
                let e = Math.max(s.availableCountBefore - 1, 0)
                ;((0, ev.yy)(x, ex.CodexRateLimitResetCreditRedeemed, {
                  availableCountBefore: s.availableCountBefore,
                  componentType: "settings",
                  redemptionMethod: null == s.creditId ? "automatic" : "selected_credit",
                  remainingCount: e,
                }),
                  x
                    .get(K.Id)
                    .success(
                      b.formatMessage({
                        id: "settings.usage.resets.success",
                        defaultMessage: "Usage limits reset",
                        description: "Success toast shown after redeeming a Codex usage reset from settings",
                      }),
                    ),
                  m?.(),
                  _.current?.focus())
              }
            }
          }),
          (u[2] = R.mutateAsync),
          (u[3] = b),
          (u[4] = d),
          (u[5] = h),
          (u[6] = m),
          (u[7] = k),
          (u[8] = C),
          (u[9] = x),
          (u[10] = H),
          (u[11] = q),
          (u[12] = s))
        : (s = u[12])
      let z = s
      if (null == k && I && null == M) {
        let e
        ;(u[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(J.u, {
              children: (0, n.jsx)(p.A, {
                id: "settings.usage.resets.loading",
                defaultMessage: "Loading usage limit resets…",
                description: "Loading state for Codex usage limit resets in settings",
              }),
            })),
            (u[13] = e))
          : (e = u[13]),
          (a = e))
      } else if (null == k && null != E && null == M) {
        let e, t, s, i
        ;(u[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.resets.loadError",
              defaultMessage: "Couldn’t load usage limit resets",
              description: "Error shown when Codex usage limit resets cannot be loaded in settings",
            })),
            (u[14] = e))
          : (e = u[14]),
          u[15] !== L
            ? ((t = () => {
                L()
              }),
              (u[15] = L),
              (u[16] = t))
            : (t = u[16]),
          u[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(p.A, {
                id: "settings.usage.resets.retry",
                defaultMessage: "Retry",
                description: "Button label for retrying Codex usage reset loading in settings",
              })),
              (u[17] = s))
            : (s = u[17]),
          u[18] !== t
            ? ((i = (0, n.jsx)(P.ic, {
                label: e,
                control: (0, n.jsx)(f.$, { color: "secondary", onClick: t, size: "toolbar", children: s }),
              })),
              (u[18] = t),
              (u[19] = i))
            : (i = u[19]),
          (a = i))
      } else if (null == q || (0 === q.length && 0 === H)) {
        let e
        ;(u[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(ey.W, {
              align: "start",
              layout: "settings-row",
              children: (0, n.jsx)(p.A, {
                id: "settings.usage.resets.empty",
                defaultMessage: "No resets available",
                description: "Empty state when no Codex usage limit resets are available",
              }),
            })),
            (u[20] = e))
          : (e = u[20]),
          (a = e))
      } else {
        let e,
          t = k?.creditId ?? null
        ;(u[21] !== G || u[22] !== R.isPending || u[23] !== z || u[24] !== c || u[25] !== t || u[26] !== q
          ? ((e = (0, n.jsx)(eT, {
              activeCreditId: G,
              credits: q,
              isResetFillActive: c,
              isResetting: R.isPending,
              onUseReset: z,
              retryCreditId: t,
            })),
            (u[21] = G),
            (u[22] = R.isPending),
            (u[23] = z),
            (u[24] = c),
            (u[25] = t),
            (u[26] = q),
            (u[27] = e))
          : (e = u[27]),
          (a = e))
      }
      return (
        u[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(T.X.Header, {
              title: (0, n.jsx)(eM, { headingRef: _ }),
              subtitle: (0, n.jsx)(p.A, {
                id: "settings.usage.resets.description",
                defaultMessage: "Use a reset to restore your 5-hour limit, weekly limit, or both",
                description:
                  "Description of available usage-limit resets. Each reset restores the usage windows supported by that reset ticket.",
              }),
            })),
            (u[28] = l))
          : (l = u[28]),
        u[29] !== a || u[30] !== F || u[31] !== b || u[32] !== v || u[33] !== A || u[34] !== H
          ? ((o = (0, n.jsxs)(T.X, {
              children: [
                l,
                (0, n.jsx)(T.X.Content, {
                  children: (0, n.jsx)(N.t, {
                    children: F
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(P.ic, {
                              label: (0, n.jsx)(eb.t, {
                                ariaLabel: b.formatMessage({
                                  id: "settings.usage.resets.tabs.label",
                                  defaultMessage: "Usage limit resets",
                                  description:
                                    "Accessible label for tabs switching between available usage resets and reset history in Codex settings.",
                                }),
                                selectedKey: A ?? "available",
                                onSelect: j,
                                variant: "toolbar",
                                tabs: [
                                  {
                                    key: "available",
                                    panelId: `${v}-available`,
                                    name: (0, n.jsx)("span", {
                                      className: "inline-flex items-center gap-1.5",
                                      children: (0, n.jsx)(p.A, {
                                        id: "settings.usage.resets.tabs.available.label",
                                        defaultMessage: "Available <count>{availableCount}</count>",
                                        description:
                                          "Short tab label in Codex Usage settings showing available usage resets. availableCount is the localized number of resets available to use, displayed in muted text by the count tag. The sibling tab is History.",
                                        values: { availableCount: b.formatNumber(H), count: eN },
                                      }),
                                    }),
                                  },
                                  {
                                    key: "history",
                                    panelId: `${v}-history`,
                                    name: (0, n.jsx)(p.A, {
                                      id: "settings.usage.resets.tabs.history",
                                      defaultMessage: "History",
                                      description:
                                        "Tab in Codex Usage settings showing resets received or used in the past 30 days. The sibling tab is Available.",
                                    }),
                                  },
                                ],
                              }),
                              control:
                                "history" === A
                                  ? (0, n.jsx)("span", {
                                      className: "text-xs text-secondary",
                                      children: (0, n.jsx)(p.A, {
                                        id: "settings.usage.bankedResetHistory.period",
                                        defaultMessage: "Past 30 days",
                                        description:
                                          "Fixed time range for the customer's banked reset history in Codex Usage & billing settings.",
                                      }),
                                    })
                                  : null,
                            }),
                            (0, n.jsx)("div", {
                              id: `${v}-${A}`,
                              className: ew.r,
                              role: "tabpanel",
                              "aria-labelledby": `${v}-${A}-tab`,
                              tabIndex: 0,
                              children: "history" === A ? (0, n.jsx)(ej, {}) : a,
                            }),
                          ],
                        })
                      : a,
                  }),
                }),
              ],
            })),
            (u[29] = a),
            (u[30] = F),
            (u[31] = b),
            (u[32] = v),
            (u[33] = A),
            (u[34] = H),
            (u[35] = o))
          : (o = u[35]),
        o
      )
    }
    function eN(e) {
      return (0, n.jsx)("span", { className: "font-normal text-secondary", children: e })
    }
    function eI(e) {
      return "available" === e.status
    }
    function eL(e) {
      let t,
        s,
        a = (0, i.c)(6),
        { isResetFillActive: r, onResetAttemptCancel: l, onResetAttemptStart: o, onResetComplete: u } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(eR, {}) })), (a[0] = t))
          : (t = a[0]),
        a[1] !== r || a[2] !== l || a[3] !== o || a[4] !== u
          ? ((s = (0, n.jsxs)(n.Fragment, {
              children: [
                t,
                (0, n.jsx)(eP, {
                  isResetFillActive: r,
                  onResetAttemptCancel: l,
                  onResetAttemptStart: o,
                  onResetComplete: u,
                }),
              ],
            })),
            (a[1] = r),
            (a[2] = l),
            (a[3] = o),
            (a[4] = u),
            (a[5] = s))
          : (s = a[5]),
        s
      )
    }
    function eR() {
      let e,
        t,
        s,
        a = (0, i.c)(6),
        r = (0, g.gh)(w.u),
        l = (0, D.A)(),
        o = (0, ef.iK)(ep.U6S.agentUsageResetEnabled)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.resets.agentEnabled.label",
              defaultMessage: "Allow your assistant to use resets",
              description:
                "Label for the desktop setting that lets the assistant use a banked usage reset after the user explicitly authorizes it",
            })),
            (t = (0, n.jsx)(p.A, {
              id: "settings.usage.resets.agentEnabled.description",
              defaultMessage:
                "Allow your assistant to use a reset only when you explicitly request it during a conversation and your current limit has 10% or less remaining. Resets are never used automatically.",
              description:
                "Explains that the assistant only uses a reset when explicitly requested during a conversation, with 10 percent or less of the current limit remaining, and never automatically",
            })),
            (a[0] = e),
            (a[1] = t))
          : ((e = a[0]), (t = a[1])),
        a[2] !== o || a[3] !== l || a[4] !== r
          ? ((s = (0, n.jsx)(T.X, {
              children: (0, n.jsx)(T.X.Content, {
                children: (0, n.jsx)(N.t, {
                  children: (0, n.jsx)(P.ic, {
                    label: e,
                    description: t,
                    control: (e) =>
                      (0, n.jsx)(Z.l, {
                        ...e,
                        checked: o,
                        onChange: (e) => {
                          ;(0, ef.gc)(r, ep.U6S.agentUsageResetEnabled, e).catch(() => {
                            r.get(K.Id).danger(
                              l.formatMessage({
                                id: "settings.usage.resets.agentEnabled.error",
                                defaultMessage: "Couldn’t update usage reset setting",
                                description: "Error shown when saving whether the assistant can use usage resets fails",
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
            (a[2] = o),
            (a[3] = l),
            (a[4] = r),
            (a[5] = s))
          : (s = a[5]),
        s
      )
    }
    var eO = s("zLIa"),
      eD = s("Myba"),
      eU = s("miPE"),
      eF = s("F9Qp"),
      eq = s("iH1J"),
      eH = s("hQzs")
    function eG(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u,
        c,
        d,
        h,
        m,
        g,
        f = (0, i.c)(38),
        {
          isUsdWorkspace: x,
          isPolling: y,
          limitAmount: b,
          remainingPercent: _,
          resetLabel: v,
          usedAmount: w,
          usageLabel: A,
        } = e,
        j = void 0 === y || y,
        C = (0, D.A)(),
        k = x ? 0 : (b ?? 0),
        S = !x && null != w && null != b && b > 0
      f[0] !== j || f[1] !== k || f[2] !== S
        ? ((t = { isPolling: j, credits: k, enabled: S }), (f[0] = j), (f[1] = k), (f[2] = S), (f[3] = t))
        : (t = f[3])
      let { data: M } = (0, eD.Q4)(t),
        E = M?.estimated_usage_usd_micros == null ? null : M.estimated_usage_usd_micros / 1e6,
        T = null == w || null == b || b <= 0 || null == E ? null : (w / b) * E
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
      let P = s
      ;(f[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)("span", {
            className: "text-sm font-medium text-default",
            children: (0, n.jsx)(p.A, {
              id: "settings.usage.limits.monthly.billingLabel",
              defaultMessage: "Monthly limit",
              description: "Label for the monthly credit limit card in enterprise usage settings",
            }),
          })),
          (f[6] = a))
        : (a = f[6]),
        f[7] !== C || f[8] !== _
          ? ((r = C.formatNumber(_, { maximumFractionDigits: 0 })), (f[7] = C), (f[8] = _), (f[9] = r))
          : (r = f[9]),
        f[10] !== r
          ? ((l = (0, n.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                a,
                (0, n.jsx)("span", {
                  className: "text-xs text-secondary tabular-nums",
                  children: (0, n.jsx)(p.A, {
                    id: "settings.usage.limits.progress.remaining",
                    defaultMessage: "{remaining}% left",
                    description: "Remaining percentage shown next to usage progress",
                    values: { remaining: r },
                  }),
                }),
              ],
            })),
            (f[10] = r),
            (f[11] = l))
          : (l = f[11]))
      let N = 100 - _
      return (
        f[12] !== C || f[13] !== x
          ? ((o = x
              ? C.formatMessage({
                  id: "settings.usage.limits.monthly.usdProgressAriaLabel",
                  defaultMessage: "Monthly spend used",
                  description: "Accessible label for the native USD spend progress bar in enterprise usage settings",
                })
              : C.formatMessage({
                  id: "settings.usage.limits.monthly.billingProgressAriaLabel",
                  defaultMessage: "Monthly credits used",
                  description:
                    "Accessible label for the monthly credit consumption progress bar in enterprise billing analytics settings",
                })),
            (f[12] = C),
            (f[13] = x),
            (f[14] = o))
          : (o = f[14]),
        f[15] !== o || f[16] !== N
          ? ((u = (0, n.jsx)("progress", {
              max: 100,
              value: N,
              "aria-label": o,
              className:
                "h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-primary-solid [&::-ms-fill]:bg-primary-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-primary-solid",
            })),
            (f[15] = o),
            (f[16] = N),
            (f[17] = u))
          : (u = f[17]),
        f[18] !== v ? ((c = (0, n.jsx)("span", { children: v })), (f[18] = v), (f[19] = c)) : (c = f[19]),
        f[20] !== E ||
        f[21] !== T ||
        f[22] !== P ||
        f[23] !== C ||
        f[24] !== x ||
        f[25] !== b ||
        f[26] !== A ||
        f[27] !== w
          ? ((d =
              x || null == A || null == w || null == b || null == T || null == E
                ? A
                : (0, n.jsx)(p.A, {
                    id: "settings.usage.limits.monthly.creditsAndEstimatedSpendUsed",
                    defaultMessage: "{used} of {limit} credits used · Est. {usedCost} of {limitCost} used",
                    description:
                      "Monthly usage summary showing credits used out of the credit limit, followed by estimated US dollars spent out of the estimated dollar limit",
                    values: {
                      used: C.formatNumber(w, { maximumFractionDigits: 0 }),
                      limit: C.formatNumber(b, { maximumFractionDigits: 0 }),
                      usedCost: P(T),
                      limitCost: P(E),
                    },
                  })),
            (f[20] = E),
            (f[21] = T),
            (f[22] = P),
            (f[23] = C),
            (f[24] = x),
            (f[25] = b),
            (f[26] = A),
            (f[27] = w),
            (f[28] = d))
          : (d = f[28]),
        f[29] !== d
          ? ((h = (0, n.jsx)("span", { className: "tabular-nums", children: d })), (f[29] = d), (f[30] = h))
          : (h = f[30]),
        f[31] !== c || f[32] !== h
          ? ((m = (0, n.jsxs)("div", {
              className: "flex items-center justify-between gap-3 text-xs text-tertiary",
              children: [c, h],
            })),
            (f[31] = c),
            (f[32] = h),
            (f[33] = m))
          : (m = f[33]),
        f[34] !== u || f[35] !== m || f[36] !== l
          ? ((g = (0, n.jsxs)("div", { className: "flex flex-col gap-2 p-4 select-none", children: [l, u, m] })),
            (f[34] = u),
            (f[35] = m),
            (f[36] = l),
            (f[37] = g))
          : (g = f[37]),
        g
      )
    }
    var ez = s("BhIm"),
      eW = s("KIKs")
    function eB(e) {
      let t,
        s,
        a,
        r = (0, i.c)(22),
        { resetAt: l } = e,
        o = (0, D.A)(),
        u = (0, eW.wv)(),
        c = Math.max(0, Math.ceil((l.getTime() - u.getTime()) / 6e4)),
        d = Math.floor(c / 1440),
        h = Math.floor((c % 1440) / 60)
      if (
        c > 0 &&
        "function" == typeof Intl.DurationFormat &&
        Intl.DurationFormat.supportedLocalesOf(o.locale).length > 0 &&
        (o.locale === o.defaultLocale || o.messages["settings.usage.personalLimits.resetsInDuration"]?.length)
      ) {
        let e, s
        r[0] !== d || r[1] !== h || r[2] !== o.locale || r[3] !== c
          ? ((e = new Intl.DurationFormat(o.locale, {
              style: "en" === new Intl.Locale(o.locale).language ? "narrow" : "short",
              hoursDisplay: d > 0 ? "always" : "auto",
              minutesDisplay: 0 === d ? "always" : "auto",
            }).format(d > 0 ? { days: d, hours: h } : { hours: h, minutes: c % 60 })),
            (r[0] = d),
            (r[1] = h),
            (r[2] = o.locale),
            (r[3] = c),
            (r[4] = e))
          : (e = r[4])
        let i = e
        ;(r[5] !== i
          ? ((s = (0, n.jsx)(p.A, {
              id: "settings.usage.personalLimits.resetsInDuration",
              defaultMessage: "Resets in {duration}",
              description:
                "Countdown until an included usage limit resets, shown in usage settings. {duration} is a complete locale-formatted duration with compact units, such as 5d 14h, 1h 0m, or 3m in English, and localized units and separators in other languages. It is an amount of time remaining, not a calendar date or clock time. Do not add unit names. Use wording that works with a standalone duration; a label such as Time until reset: {duration} is acceptable if a preposition would require inflecting the units. Keep the label concise.",
              values: { duration: i },
            })),
            (r[5] = i),
            (r[6] = s))
          : (s = r[6]),
          (t = s))
      } else if (d > 0) {
        let e
        ;(r[7] !== d || r[8] !== h
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.personalLimits.resetsInDaysHours",
              defaultMessage: "Resets in {days}d {hours}h",
              description:
                "Countdown until an included usage limit resets, in days (d) and hours (h). Choose wording that avoids any ambiguity with a day of the month or a clock time.",
              values: { days: d, hours: h },
            })),
            (r[7] = d),
            (r[8] = h),
            (r[9] = e))
          : (e = r[9]),
          (t = e))
      } else if (h > 0) {
        let e,
          s = c % 60
        ;(r[10] !== h || r[11] !== s
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.personalLimits.resetsInHoursMinutes",
              defaultMessage: "Resets in {hours}h {minutes}m",
              description: "Countdown until an included usage limit resets, in hours (h) and minutes (m)",
              values: { hours: h, minutes: s },
            })),
            (r[10] = h),
            (r[11] = s),
            (r[12] = e))
          : (e = r[12]),
          (t = e))
      } else if (c > 0) {
        let e
        ;(r[13] !== c
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.personalLimits.resetsInMinutes",
              defaultMessage: "Resets in {minutes}m",
              description: "Countdown until an included usage limit resets, in minutes (m)",
              values: { minutes: c },
            })),
            (r[13] = c),
            (r[14] = e))
          : (e = r[14]),
          (t = e))
      } else {
        let e
        ;(r[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.personalLimits.resetsNow",
              defaultMessage: "Resets now",
              description: "Shown when an included usage limit has reached its scheduled reset time",
            })),
            (r[15] = e))
          : (e = r[15]),
          (t = e))
      }
      return (
        r[16] !== o || r[17] !== l
          ? ((s = o.formatDate(l, { dateStyle: "full", timeStyle: "long" })), (r[16] = o), (r[17] = l), (r[18] = s))
          : (s = r[18]),
        r[19] !== t || r[20] !== s
          ? ((a = (0, n.jsx)("span", { title: s, children: t })), (r[19] = t), (r[20] = s), (r[21] = a))
          : (a = r[21]),
        a
      )
    }
    var e$ = s("mBJV"),
      eV = s("slpy"),
      eY = s("CnTb"),
      eX = s("HOLv"),
      eK = s("Cm1Y"),
      eZ = s("YzhQ"),
      eQ = s("JQNV"),
      eJ = (e) =>
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
    function e0(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c,
        d,
        h,
        m,
        x = (0, i.c)(20),
        { rateLimitStatus: _ } = e,
        v = (0, g.gh)(w.u),
        A = (0, D.A)(),
        j = (0, l.zy)(),
        C = (0, b.b)(),
        { data: k } = (0, y.YL)(),
        { data: S, isError: M } = (0, y.Gh)(),
        E = (0, eK.ai)(k?.structure === "personal" ? "personal" : k?.id, "use_embedded_credit_checkout", !0)
      if (
        M ||
        S?.immediate_reset_purchase_eligible !== !0 ||
        k?.structure !== "personal" ||
        k.id !== _?.account_id ||
        !(0, eZ.Ss)(_).some(e1)
      )
        return null
      x[0] !== j || x[1] !== C || x[2] !== _ || x[3] !== v || x[4] !== E
        ? ((t = (e) => {
            ;((0, ev.yy)(v, e$.EBm, { surface: "chatgpt_usage_settings" }),
              C((0, eQ.Rw)(), e) ||
                E({
                  getUrl: eQ.Rw,
                  state: {
                    rateLimitResetCheckout: {
                      accountId: _.account_id,
                      conversationId: null,
                      returnTo: `${j.pathname}${j.search}${j.hash}`,
                      turnId: null,
                    },
                  },
                }) ||
                (0, U.PQ)({
                  event: e,
                  href: (0, eQ.Rw)(),
                  initiator: "open_in_browser_bridge",
                  useExternalBrowser: !0,
                }))
          }),
          (x[0] = j),
          (x[1] = C),
          (x[2] = _),
          (x[3] = v),
          (x[4] = E),
          (x[5] = t))
        : (t = x[5])
      let T = t
      return (
        x[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(eJ, { "aria-hidden": !0, className: "icon-sm -scale-x-100 transform text-default" })),
            (x[6] = s))
          : (s = x[6]),
        x[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("span", {
              className: "truncate",
              children: (0, n.jsx)(p.A, {
                id: "settings.usage.limits.buyReset.label",
                defaultMessage: "Reset your usage limits now",
                description:
                  "Label for the immediate Codex usage reset purchase action beneath the user's personal usage limits",
              }),
            })),
            (x[7] = a))
          : (a = x[7]),
        x[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(p.A, {
              id: "settings.usage.limits.buyReset.tooltip",
              defaultMessage: "This is not a banked reset. Buying an instant reset will reset your limits immediately.",
              description:
                "Tooltip explaining that purchasing a Codex usage reset applies it immediately instead of saving a banked reset",
            })),
            (x[8] = r))
          : (r = x[8]),
        x[9] !== A
          ? ((o = A.formatMessage({
              id: "settings.usage.limits.buyReset.tooltipLabel",
              defaultMessage: "How buying a reset works",
              description:
                "Accessible label for the tooltip explaining that a purchased Codex usage reset applies immediately and cannot be banked",
            })),
            (x[9] = A),
            (x[10] = o))
          : (o = x[10]),
        x[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(eX.I, { asset: eY.q, "aria-hidden": !0 })), (x[11] = u))
          : (u = x[11]),
        x[12] !== o
          ? ((c = (0, n.jsxs)("span", {
              className: "flex min-w-0 items-center gap-1 select-none",
              children: [
                a,
                (0, n.jsx)(eV.m, {
                  side: "bottom",
                  content: r,
                  children: (0, n.jsx)(f.$, { "aria-label": o, color: "ghostTertiary", size: "inline", children: u }),
                }),
              ],
            })),
            (x[12] = o),
            (x[13] = c))
          : (c = x[13]),
        x[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(p.A, {
              id: "settings.usage.limits.buyReset.button",
              defaultMessage: "Buy an instant reset",
              description: "Button for purchasing an immediate reset of the user's personal Codex usage limits",
            })),
            (x[14] = d))
          : (d = x[14]),
        x[15] !== T
          ? ((h = (0, n.jsx)(f.$, { color: "ghostAccent", onClick: T, size: "composerSm", children: d })),
            (x[15] = T),
            (x[16] = h))
          : (h = x[16]),
        x[17] !== c || x[18] !== h
          ? ((m = (0, n.jsx)("div", {
              className: "-mt-5 rounded-b-2xl bg-secondary-soft-alpha pt-4",
              children: (0, n.jsx)(P.ic, { icon: s, label: c, control: h, size: "compact" }),
            })),
            (x[17] = c),
            (x[18] = h),
            (x[19] = m))
          : (m = x[19]),
        m
      )
    }
    function e1(e) {
      let { usedPercent: t } = e
      return t > 0
    }
    var e2 = s("K45w"),
      e3 = s("W5pg"),
      e5 = s("LIss"),
      e4 = s("Ol5M")
    function e6(e) {
      let t,
        s,
        r,
        l,
        o,
        u,
        c,
        d,
        h = (0, i.c)(35),
        {
          accessibleLabel: m,
          description: g,
          fullWidth: f,
          isResetFillActive: x,
          remainingLabel: y,
          remainingPercent: b,
          resetFillAnimation: _,
          resetFillRemainingPercent: v,
        } = e,
        w = void 0 !== f && f,
        A = void 0 !== x && x,
        j = void 0 === y ? "left" : y,
        C = (0, D.A)(),
        k = (0, eF.N8)(b),
        S = (0, eF.N8)(v ?? b),
        M = (0, e2.d)(0),
        E = A && null == v ? void 0 : _,
        T = E?.progress ?? M,
        P = A && null != E && null != v
      h[0] !== S ? ((t = (e) => S + (100 - S) * e), (h[0] = S), (h[1] = t)) : (t = h[1])
      let N = (0, e3.G)(T, t),
        I = (0, e3.G)(N, e9),
        L = P ? 100 : k
      h[2] !== m || h[3] !== C
        ? ((s =
            m ??
            C.formatMessage({
              id: "settings.usage.limits.progress.ariaLabel",
              defaultMessage: "Usage remaining",
              description: "Aria label for usage remaining progress bars",
            })),
          (h[2] = m),
          (h[3] = C),
          (h[4] = s))
        : (s = h[4])
      let R = s,
        O = P
          ? (0, n.jsx)(e5.P.span, { children: I }, "remaining-percent")
          : C.formatNumber(k, { maximumFractionDigits: 0 }),
        U = w ? "h-1.5 w-full" : "w-24"
      ;(h[5] !== N || h[6] !== k || h[7] !== L || h[8] !== w || h[9] !== E || h[10] !== R || h[11] !== P
        ? ((r =
            null == E || (w && !P)
              ? (0, n.jsx)("progress", {
                  className: (0, a.A)(
                    "h-1.5 overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-text/10",
                    w ? "block w-full" : "w-24",
                    w && k <= 10
                      ? "[&::-moz-progress-bar]:bg-warning-solid [&::-ms-fill]:bg-warning-solid [&::-webkit-progress-value]:bg-warning-solid"
                      : "[&::-moz-progress-bar]:bg-primary-solid [&::-ms-fill]:bg-primary-solid [&::-webkit-progress-value]:bg-primary-solid",
                  ),
                  max: 100,
                  value: k,
                  "aria-label": R,
                })
              : (0, n.jsx)(e4.I, {
                  accessibleLabel: R,
                  animatedPercent: N,
                  isResetFillActive: P,
                  remainingPercent: L,
                  resetFillAnimation: E,
                  size: w ? "compact" : "default",
                })),
          (h[5] = N),
          (h[6] = k),
          (h[7] = L),
          (h[8] = w),
          (h[9] = E),
          (h[10] = R),
          (h[11] = P),
          (h[12] = r))
        : (r = h[12]),
        h[13] !== U || h[14] !== r
          ? ((l = (0, n.jsx)("div", { className: U, children: r })), (h[13] = U), (h[14] = r), (h[15] = l))
          : (l = h[15]))
      let F = l,
        q = w ? "text-xs leading-4" : "min-w-[72px] text-sm"
      ;(h[16] !== q
        ? ((o = (0, a.A)("text-end whitespace-nowrap text-secondary tabular-nums", q)), (h[16] = q), (h[17] = o))
        : (o = h[17]),
        h[18] !== O || h[19] !== j
          ? ((u =
              "remaining" === j
                ? (0, n.jsx)(p.A, {
                    id: "settings.usage.limits.monthly.progress.remaining",
                    defaultMessage: "{remaining}% remaining",
                    description: "Remaining percentage shown next to usage progress",
                    values: { remaining: O },
                  })
                : (0, n.jsx)(p.A, {
                    id: "settings.usage.limits.progress.remaining",
                    defaultMessage: "{remaining}% left",
                    description: "Remaining percentage shown next to usage progress",
                    values: { remaining: O },
                  })),
            (h[18] = O),
            (h[19] = j),
            (h[20] = u))
          : (u = h[20]),
        h[21] !== o || h[22] !== u
          ? ((c = (0, n.jsx)("span", { className: o, children: u })), (h[21] = o), (h[22] = u), (h[23] = c))
          : (c = h[23]))
      let H = c
      if (w) {
        let e, t, s
        return (
          h[24] !== g ? ((e = (0, n.jsx)("span", { children: g })), (h[24] = g), (h[25] = e)) : (e = h[25]),
          h[26] !== H || h[27] !== e
            ? ((t = (0, n.jsxs)("div", {
                className: "flex items-baseline justify-between gap-1.25 text-xs leading-4 text-secondary",
                children: [e, H],
              })),
              (h[26] = H),
              (h[27] = e),
              (h[28] = t))
            : (t = h[28]),
          h[29] !== t || h[30] !== F
            ? ((s = (0, n.jsxs)("div", { className: "flex flex-col gap-1.25", children: [t, F] })),
              (h[29] = t),
              (h[30] = F),
              (h[31] = s))
            : (s = h[31]),
          s
        )
      }
      return (
        h[32] !== H || h[33] !== F
          ? ((d = (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [F, H] })),
            (h[32] = H),
            (h[33] = F),
            (h[34] = d))
          : (d = h[34]),
        d
      )
    }
    function e9(e) {
      return Math.round(e)
    }
    function e8(e) {
      let t,
        s,
        a,
        r,
        l = (0, i.c)(27),
        {
          header: o,
          fullWidth: u,
          isPolling: c,
          isUsdWorkspace: d,
          isResetFillActive: h,
          rateLimitStatus: m,
          resetFillAnimation: g,
          resetFillRateLimitStatus: x,
          purchaseCreditsAction: y,
          showEnterpriseMonthlyUsageLimit: b,
          showMonthlyUsageLimit: _,
          showResetPurchase: v,
          showUsageBillingLayout: w,
          canRequestEnterpriseMonthlyUsageLimit: A,
          workspaceRequestPolicy: j,
          workspaceMonthlyUsage: C,
          workspaceAdminRequests: k,
          isWorkspaceAdminRequestsLoading: S,
          isSavingWorkspaceAdminRequest: M,
          saveWorkspaceAdminRequest: E,
        } = e,
        I = void 0 !== u && u,
        R = void 0 === c || c,
        O = void 0 !== d && d,
        D = void 0 !== h && h,
        F = void 0 !== b && b,
        q = void 0 === _ || _,
        H = void 0 !== v && v,
        G = void 0 !== w && w,
        z = void 0 !== A && A,
        W = void 0 === C ? null : C,
        B = void 0 === k ? null : k,
        $ = void 0 !== S && S,
        V = void 0 !== M && M,
        Y = D && null != x ? x : m
      if (
        l[0] !== z ||
        l[1] !== I ||
        l[2] !== o ||
        l[3] !== R ||
        l[4] !== D ||
        l[5] !== V ||
        l[6] !== O ||
        l[7] !== $ ||
        l[8] !== y ||
        l[9] !== m ||
        l[10] !== g ||
        l[11] !== x ||
        l[12] !== E ||
        l[13] !== F ||
        l[14] !== q ||
        l[15] !== H ||
        l[16] !== G ||
        l[17] !== Y ||
        l[18] !== B ||
        l[19] !== W ||
        l[20] !== j
      ) {
        a = Symbol.for("react.early_return_sentinel")
        e: {
          var X, K, Z
          let e,
            i = (0, eH.mO)(Y),
            r = tr(i, null),
            l =
              D && null != x
                ? new Map(tr((0, eH.mO)(x), null).map((e) => [e.key, (0, eF.rU)(e.bucket.usedPercent ?? 0)]))
                : null,
            u = F
              ? ((X = W),
                (K = Y),
                null == (e = (0, L.Li)(X))
                  ? null
                  : {
                      key: "workspace-monthly",
                      remainingPercent: e.remainingPercent,
                      resetAt:
                        (K?.spend_control?.individual_limit?.unit ?? "credit") === (X?.balance_unit ?? "credit") &&
                        Number(K?.spend_control?.individual_limit?.limit) === e.limit
                          ? (K?.spend_control?.individual_limit?.reset_at ?? null)
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
                  let n = t.find(to) ?? null
                  if (null == n) return null
                  let i = n.bucket.usedPercent ?? 0
                  return {
                    key: n.key,
                    remainingPercent: (0, eF.rU)(i),
                    resetAt: n.bucket.resetsAt ?? null,
                    usedAmount: null,
                    limitAmount: null,
                  }
                })({ rateLimitStatus: Y, coreUsageLimitRows: r })
          q || (u = null)
          let c = q && null == u ? r : r.filter(te),
            d = tr(i, "gpt-5.3-codex-spark"),
            h = F && z,
            b = j?.kind === "custom" ? j.request_url : null,
            _ = F && null == u
          if (null == u && 0 === c.length && 0 === d.length && !_ && !h) {
            a = null
            break e
          }
          ;((t =
            null != u || c.length > 0 || _ || h
              ? (0, n.jsxs)(T.X, {
                  children: [
                    o ??
                      (0, n.jsx)(T.X.Header, {
                        title: G
                          ? (0, n.jsx)(p.A, {
                              id: "settings.usage.limits.plan.title",
                              defaultMessage: "Plan limits",
                              description: "Title for enterprise usage limits that are shared across eligible products",
                            })
                          : (0, n.jsx)(p.A, {
                              id: "settings.usage.limits.title",
                              defaultMessage: "General usage limits",
                              description: "Title for the usage limits section in usage settings",
                            }),
                        subtitle: G
                          ? (0, n.jsx)(p.A, {
                              id: "settings.usage.limits.plan.subtitle",
                              defaultMessage:
                                "Shared across Chat, Codex, Work, Workspace Agents, ChatGPT for Excel, and ChatGPT for PowerPoint.",
                              description:
                                "Explains that the enterprise monthly usage limit is shared across Chat, Codex, Work, Workspace Agents, ChatGPT for Excel, and ChatGPT for PowerPoint. Depending on the plan, usage is measured in credits or dollars.",
                            })
                          : null,
                      }),
                    (0, n.jsxs)(T.X.Content, {
                      children: [
                        _
                          ? (0, n.jsx)(tt, {
                              isPolling: R,
                              currentMonthUsage: W?.current_month_usage ?? null,
                              isUsdWorkspace: O,
                              showEstimatedSpend: G && !O,
                            })
                          : null,
                        null != u || c.length > 0
                          ? (0, n.jsxs)(N.t, {
                              className: H ? "relative z-10" : void 0,
                              dividers: !I,
                              variant: I ? "metered" : "default",
                              children: [
                                null != u
                                  ? (0, n.jsx)(
                                      ti,
                                      {
                                        isPolling: R,
                                        fullWidth: I,
                                        isResetFillActive: D,
                                        isUsdWorkspace: O,
                                        resetFillAnimation: g,
                                        resetFillRemainingPercent: l?.get(u.key),
                                        showUsageBillingLayout: G,
                                        usageLimit: u,
                                      },
                                      u.key,
                                    )
                                  : null,
                                c.map((e) =>
                                  (0, n.jsx)(
                                    ta,
                                    {
                                      fullWidth: I,
                                      isResetFillActive: D,
                                      rateLimitRow: e,
                                      resetFillAnimation: g,
                                      resetFillRemainingPercent: l?.get(e.key),
                                    },
                                    e.key,
                                  ),
                                ),
                              ],
                            })
                          : null,
                        !D && null != y && c.some(e7)
                          ? (0, n.jsx)(N.t, {
                              children: (0, n.jsx)(P.ic, {
                                label: (0, n.jsx)(p.A, {
                                  id: "settings.usage.limits.addCredits",
                                  defaultMessage: "Add credits to keep going",
                                  description:
                                    "Offers a Business workspace owner credit checkout when included usage is exhausted",
                                }),
                                control: y,
                              }),
                            })
                          : null,
                        H ? (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(e0, { rateLimitStatus: m }) }) : null,
                        h && j?.kind === "openai_native"
                          ? (0, n.jsx)(tn, {
                              pendingRequest:
                                ((Z = B),
                                Z?.items.find((e) => "pending" === e.status && null != (e.payloads.find(tl) ?? null)) ??
                                  null),
                              isLoading: $,
                              isSaving: V,
                              saveWorkspaceAdminRequest: E,
                            })
                          : null,
                        h && j?.kind === "custom"
                          ? (0, n.jsx)(N.t, {
                              className: "mt-2",
                              children: (0, n.jsx)(P.ic, {
                                label: null,
                                description:
                                  null != j.instructions
                                    ? (0, n.jsx)("span", {
                                        className: "leading-relaxed whitespace-pre-wrap",
                                        children: j.instructions,
                                      })
                                    : null,
                                control:
                                  null != b
                                    ? (0, n.jsx)(f.$, {
                                        color: "primary",
                                        size: "medium",
                                        className: "rounded-full",
                                        onClick: (e) => {
                                          ;(0, U.PQ)({ event: e, href: b, initiator: "open_in_browser_bridge" })
                                        },
                                        children: (0, n.jsx)(p.A, {
                                          id: "settings.usage.limits.customRequestIncrease",
                                          defaultMessage: "Request more usage",
                                          description:
                                            "Member-facing button in Codex usage settings that opens the workspace's custom HTTPS page for requesting more monthly usage",
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
                ? (0, n.jsxs)(T.X, {
                    children: [
                      (0, n.jsx)(T.X.Header, {
                        title: (0, n.jsx)(p.A, {
                          id: "settings.usage.limits.spark.title",
                          defaultMessage: "GPT-5.3-Codex-Spark usage limits",
                          description: "Title for the GPT-5.3-Codex-Spark usage limits section",
                        }),
                      }),
                      (0, n.jsx)(T.X.Content, {
                        children: (0, n.jsx)(N.t, {
                          dividers: !I,
                          variant: I ? "metered" : "default",
                          children: d.map((e) =>
                            (0, n.jsx)(
                              ta,
                              {
                                fullWidth: I,
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
        ;((l[0] = z),
          (l[1] = I),
          (l[2] = o),
          (l[3] = R),
          (l[4] = D),
          (l[5] = V),
          (l[6] = O),
          (l[7] = $),
          (l[8] = y),
          (l[9] = m),
          (l[10] = g),
          (l[11] = x),
          (l[12] = E),
          (l[13] = F),
          (l[14] = q),
          (l[15] = H),
          (l[16] = G),
          (l[17] = Y),
          (l[18] = B),
          (l[19] = W),
          (l[20] = j),
          (l[21] = t),
          (l[22] = s),
          (l[23] = a))
      } else ((t = l[21]), (s = l[22]), (a = l[23]))
      return a !== Symbol.for("react.early_return_sentinel")
        ? a
        : (l[24] !== t || l[25] !== s
            ? ((r = (0, n.jsxs)(n.Fragment, { children: [t, s] })), (l[24] = t), (l[25] = s), (l[26] = r))
            : (r = l[26]),
          r)
    }
    function e7(e) {
      let { bucket: t } = e
      return (t.usedPercent ?? 0) >= 100
    }
    function te(e) {
      return !to(e)
    }
    function tt(e) {
      let t,
        s,
        a,
        r,
        l = (0, i.c)(12),
        { currentMonthUsage: o, isPolling: u, isUsdWorkspace: c, showEstimatedSpend: d } = e,
        h = (0, D.A)(),
        m = o ?? 0,
        g = d && null != o && o > 0
      l[0] !== u || l[1] !== m || l[2] !== g
        ? ((t = { isPolling: u, credits: m, enabled: g }), (l[0] = u), (l[1] = m), (l[2] = g), (l[3] = t))
        : (t = l[3])
      let { data: f } = (0, eD.Q4)(t),
        x = d && f?.estimated_usage_usd_micros != null ? f.estimated_usage_usd_micros / 1e6 : null
      return (
        l[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(ts, { muted: !0 })), (l[4] = s))
          : (s = l[4]),
        l[5] !== o || l[6] !== x || l[7] !== h || l[8] !== c
          ? ((a =
              null == o
                ? null
                : (0, n.jsx)(P.ic, {
                    label: (0, n.jsx)(p.A, {
                      id: "settings.usage.limits.monthly.currentUsage",
                      defaultMessage: "Your usage this month",
                      description:
                        "Label for the current user's monthly credit usage when no monthly usage limit is set.",
                    }),
                    control: (0, n.jsxs)("span", {
                      className: "text-sm text-secondary tabular-nums",
                      children: [
                        c
                          ? (0, n.jsx)(Y.Gr, {
                              value: Math.max(o, 0),
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 6,
                            })
                          : null,
                        c || null != x
                          ? null
                          : (0, n.jsx)(p.A, {
                              id: "settings.usage.limits.monthly.currentUsageCredits",
                              defaultMessage: "{credits, plural, one {# credit} other {# credits}}",
                              description:
                                "Credit amount used by the current user this month when no monthly usage limit is set.",
                              values: { credits: Math.max(o, 0) },
                            }),
                        c || null == x
                          ? null
                          : (0, n.jsx)(p.A, {
                              id: "settings.usage.limits.monthly.currentUsageCreditsAndEstimatedSpend",
                              defaultMessage: "{credits, plural, one {# credit} other {# credits}} · Est. {cost}",
                              description:
                                "Credits used this month and their estimated US dollar cost when no monthly usage limit is set",
                              values: {
                                credits: Math.max(o, 0),
                                cost: h.formatNumber(x, {
                                  style: "currency",
                                  currency: "USD",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: x > 0 && x < 0.01 ? 6 : 2,
                                }),
                              },
                            }),
                      ],
                    }),
                  })),
            (l[5] = o),
            (l[6] = x),
            (l[7] = h),
            (l[8] = c),
            (l[9] = a))
          : (a = l[9]),
        l[10] !== a ? ((r = (0, n.jsxs)(N.t, { children: [s, a] })), (l[10] = a), (l[11] = r)) : (r = l[11]),
        r
      )
    }
    function ts(e) {
      let t,
        s,
        a,
        r = (0, i.c)(4),
        { muted: l } = e
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(eU.A, { "aria-hidden": !0, className: "icon-sm text-tertiary" })), (r[0] = t))
        : (t = r[0])
      let o = l ? "font-normal text-secondary" : void 0
      return (
        r[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(p.A, {
              id: "settings.usage.limits.monthly.none",
              defaultMessage: "Your admin hasn’t set a usage limit",
              description:
                "Informational message shown when the admin has not set a monthly usage limit for the current user",
            })),
            (r[1] = s))
          : (s = r[1]),
        r[2] !== o
          ? ((a = (0, n.jsx)(P.ic, {
              icon: t,
              label: (0, n.jsx)("span", { className: o, children: s }),
              control: null,
            })),
            (r[2] = o),
            (r[3] = a))
          : (a = r[3]),
        a
      )
    }
    function tn(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d = (0, i.c)(28),
        { pendingRequest: h, isLoading: m, isSaving: x, saveWorkspaceAdminRequest: y } = e,
        b = (0, g.gh)(w.u),
        _ = (0, D.A)(),
        [v, A] = (0, r.useState)(!1),
        [j, C] = (0, r.useState)(h?.justification ?? "")
      d[0] !== _ || d[1] !== j || d[2] !== h || d[3] !== y || d[4] !== b
        ? ((t = () => {
            let e = j.trim()
            0 === e.length
              ? b
                  .get(K.Id)
                  .warning(
                    _.formatMessage({
                      id: "settings.usage.limits.requestMissingJustification",
                      defaultMessage: "Enter a justification to submit your request",
                      description: "Toast shown when a workspace usage limit request is missing a justification",
                    }),
                  )
              : y?.({ justification: e, requestId: h?.id })
                  .then(() => {
                    ;(b
                      .get(K.Id)
                      .success(
                        _.formatMessage(
                          null == h
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
                      A(!1))
                  })
                  .catch(() => {
                    b.get(K.Id).danger(
                      _.formatMessage({
                        id: "settings.usage.limits.requestSaveError",
                        defaultMessage: "Could not save your request. Please try again",
                        description: "Toast shown when a workspace usage limit request cannot be saved",
                      }),
                      { errorAnalytics: { toastId: "settings.usage.limits.requestSaveError" } },
                    )
                  })
          }),
          (d[0] = _),
          (d[1] = j),
          (d[2] = h),
          (d[3] = y),
          (d[4] = b),
          (d[5] = t))
        : (t = d[5])
      let k = t
      d[6] !== h
        ? ((s =
            null != h
              ? (0, n.jsx)("div", {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(p.A, {
                    id: "settings.usage.limits.requestPending",
                    defaultMessage: "Your request is pending admin review.",
                    description: "Status text for a pending workspace usage limit request",
                  }),
                })
              : null),
          (d[6] = h),
          (d[7] = s))
        : (s = d[7])
      let S = null == y
      return (
        d[8] !== h?.justification
          ? ((a = () => {
              ;(C(h?.justification ?? ""), A(!0))
            }),
            (d[8] = h?.justification),
            (d[9] = a))
          : (a = d[9]),
        d[10] !== h
          ? ((l =
              null == h
                ? (0, n.jsx)(p.A, {
                    id: "settings.usage.limits.requestIncrease",
                    defaultMessage: "Request more usage",
                    description: "Button to request more monthly workspace usage",
                  })
                : (0, n.jsx)(p.A, {
                    id: "settings.usage.limits.updatePendingRequest",
                    defaultMessage: "Update pending request",
                    description: "Button to update an existing pending workspace usage limit request",
                  })),
            (d[10] = h),
            (d[11] = l))
          : (l = d[11]),
        d[12] !== m || d[13] !== S || d[14] !== a || d[15] !== l
          ? ((o = (0, n.jsx)(f.$, {
              color: "primary",
              size: "medium",
              className: "self-start rounded-full",
              loading: m,
              disabled: S,
              onClick: a,
              children: l,
            })),
            (d[12] = m),
            (d[13] = S),
            (d[14] = a),
            (d[15] = l),
            (d[16] = o))
          : (o = d[16]),
        d[17] !== k || d[18] !== _ || d[19] !== v || d[20] !== x || d[21] !== j || d[22] !== h
          ? ((u = v
              ? (0, n.jsx)(N.t, {
                  className: "mt-1 w-full",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col gap-3 p-3",
                    children: [
                      (0, n.jsxs)("label", {
                        className: "flex flex-col gap-1.5 text-sm font-medium text-default",
                        children: [
                          (0, n.jsx)(p.A, {
                            id: "settings.usage.limits.requestJustificationLabel",
                            defaultMessage: "Justification",
                            description: "Label for the workspace usage limit request justification",
                          }),
                          (0, n.jsx)(eO.TM, {
                            value: j,
                            rows: 3,
                            placeholder: _.formatMessage({
                              id: "settings.usage.limits.requestJustificationPlaceholder",
                              defaultMessage: "Tell your admin why you need more usage",
                              description: "Placeholder for the workspace usage limit request justification",
                            }),
                            onChange: (e) => {
                              C(e.target.value)
                            },
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex justify-end gap-2",
                        children: [
                          (0, n.jsx)(f.$, {
                            color: "secondary",
                            size: "default",
                            onClick: () => {
                              A(!1)
                            },
                            children: (0, n.jsx)(p.A, {
                              id: "settings.usage.limits.requestCancel",
                              defaultMessage: "Cancel",
                              description: "Cancel button for the workspace usage limit request form",
                            }),
                          }),
                          (0, n.jsx)(f.$, {
                            color: "primary",
                            size: "default",
                            loading: x,
                            onClick: k,
                            children:
                              null == h
                                ? (0, n.jsx)(p.A, {
                                    id: "settings.usage.limits.requestSave",
                                    defaultMessage: "Submit request",
                                    description: "Submit button for a workspace usage limit request",
                                  })
                                : (0, n.jsx)(p.A, {
                                    id: "settings.usage.limits.requestUpdate",
                                    defaultMessage: "Update request",
                                    description: "Submit button for updating a pending workspace usage limit request",
                                  }),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : null),
            (d[17] = k),
            (d[18] = _),
            (d[19] = v),
            (d[20] = x),
            (d[21] = j),
            (d[22] = h),
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
    function ti(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u,
        c,
        d = (0, i.c)(40),
        {
          fullWidth: h,
          isPolling: m,
          isResetFillActive: g,
          isUsdWorkspace: f,
          resetFillAnimation: x,
          resetFillRemainingPercent: y,
          showUsageBillingLayout: b,
          usageLimit: _,
        } = e,
        v = (0, D.A)()
      d[0] !== _.remainingPercent
        ? ((t = (0, eF.N8)(_.remainingPercent)), (d[0] = _.remainingPercent), (d[1] = t))
        : (t = d[1])
      let w = t
      d[2] !== _.resetAt
        ? ((a = null == (s = (0, eF.tB)(_.resetAt)) ? null : (0, eF.h6)(s)), (d[2] = _.resetAt), (d[3] = s), (d[4] = a))
        : ((s = d[3]), (a = d[4]))
      let A = a,
        j = null
      if (null != _.usedAmount && null != _.limitAmount) {
        let e
        ;(d[5] !== v || d[6] !== f || d[7] !== _.limitAmount || d[8] !== _.usedAmount
          ? ((e = f
              ? v.formatMessage(
                  {
                    id: "settings.usage.limits.monthly.usdUsed",
                    defaultMessage: "{used} of {limit} used",
                    description: "Actual USD spend toward the current user's monthly spend limit",
                  },
                  { used: (0, ez.W)(Number(_.usedAmount), v), limit: (0, ez.W)(Number(_.limitAmount), v) },
                )
              : v.formatMessage(
                  {
                    id: "settings.usage.limits.monthly.creditsUsed",
                    defaultMessage: "{used} of {limit} credits used",
                    description: "Usage summary for monthly usage limit credits that have been used",
                  },
                  { used: tc(v, _.usedAmount), limit: tc(v, _.limitAmount) },
                )),
            (d[5] = v),
            (d[6] = f),
            (d[7] = _.limitAmount),
            (d[8] = _.usedAmount),
            (d[9] = e))
          : (e = d[9]),
          (j = e))
      }
      let C = null
      if (h && null != s) {
        let e
        ;(d[10] !== s ? ((e = (0, n.jsx)(eB, { resetAt: s })), (d[10] = s), (d[11] = e)) : (e = d[11]), (C = e))
      } else if (null != A) {
        let e
        ;(d[12] !== A
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.limits.window.resetAt",
              defaultMessage: "Resets {time}",
              description: "Description showing when a usage limit window resets",
              values: { time: A },
            })),
            (d[12] = A),
            (d[13] = e))
          : (e = d[13]),
          (C = e))
      }
      if (b) {
        let e,
          t = null == _.limitAmount ? null : Number(_.limitAmount),
          s = null == _.usedAmount ? null : Number(_.usedAmount)
        return (
          d[14] !== m || d[15] !== f || d[16] !== w || d[17] !== C || d[18] !== t || d[19] !== s || d[20] !== j
            ? ((e = (0, n.jsx)(eG, {
                isPolling: m,
                isUsdWorkspace: f,
                limitAmount: t,
                remainingPercent: w,
                resetLabel: C,
                usedAmount: s,
                usageLabel: j,
              })),
              (d[14] = m),
              (d[15] = f),
              (d[16] = w),
              (d[17] = C),
              (d[18] = t),
              (d[19] = s),
              (d[20] = j),
              (d[21] = e))
            : (e = d[21]),
          e
        )
      }
      d[22] !== C || d[23] !== j
        ? ((r =
            null != j || null != C
              ? (0, n.jsxs)("span", {
                  className: "flex flex-wrap gap-x-2",
                  children: [
                    null != j ? (0, n.jsx)("span", { children: j }) : null,
                    null != C ? (0, n.jsx)("span", { children: C }) : null,
                  ],
                })
              : null),
          (d[22] = C),
          (d[23] = j),
          (d[24] = r))
        : (r = d[24])
      let k = r,
        S = h ? "stacked" : "default"
      d[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, n.jsx)(p.A, {
            id: "settings.usage.limits.monthly.label",
            defaultMessage: "Monthly usage limit",
            description: "Label for a monthly usage limit row",
          })),
          (d[25] = l))
        : (l = d[25])
      let M = h ? null : k,
        E = h ? k : void 0
      return (
        d[26] !== v
          ? ((o = v.formatMessage({
              id: "settings.usage.limits.monthly.progress.remainingAriaLabel",
              defaultMessage: "Monthly usage remaining",
              description: "Accessible label for the monthly usage remaining progress bar",
            })),
            (d[26] = v),
            (d[27] = o))
          : (o = d[27]),
        d[28] !== h || d[29] !== g || d[30] !== w || d[31] !== x || d[32] !== y || d[33] !== E || d[34] !== o
          ? ((u = (0, n.jsx)(e6, {
              fullWidth: h,
              description: E,
              accessibleLabel: o,
              isResetFillActive: g,
              remainingLabel: "remaining",
              remainingPercent: w,
              resetFillAnimation: x,
              resetFillRemainingPercent: y,
            })),
            (d[28] = h),
            (d[29] = g),
            (d[30] = w),
            (d[31] = x),
            (d[32] = y),
            (d[33] = E),
            (d[34] = o),
            (d[35] = u))
          : (u = d[35]),
        d[36] !== S || d[37] !== M || d[38] !== u
          ? ((c = (0, n.jsx)(P.ic, { variant: S, label: l, description: M, control: u })),
            (d[36] = S),
            (d[37] = M),
            (d[38] = u),
            (d[39] = c))
          : (c = d[39]),
        c
      )
    }
    function ta(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u = (0, i.c)(26),
        {
          fullWidth: c,
          isResetFillActive: d,
          rateLimitRow: h,
          resetFillAnimation: m,
          resetFillRemainingPercent: g,
        } = e,
        f = void 0 !== c && c,
        x = (0, D.A)()
      u[0] !== x || u[1] !== h.bucket.resetsAt || u[2] !== h.bucket.windowDurationMins
        ? ((s =
            null == (t = (0, eF.tB)(h.bucket.resetsAt ?? null))
              ? null
              : tu(h.bucket.windowDurationMins ?? 0, 10080)
                ? x.formatDate(t, { dateStyle: "medium", timeStyle: "short" })
                : (0, eF.h6)(t)),
          (u[0] = x),
          (u[1] = h.bucket.resetsAt),
          (u[2] = h.bucket.windowDurationMins),
          (u[3] = t),
          (u[4] = s))
        : ((t = u[3]), (s = u[4]))
      let y = null
      if (f && null != t) {
        let e
        ;(u[5] !== t ? ((e = (0, n.jsx)(eB, { resetAt: t })), (u[5] = t), (u[6] = e)) : (e = u[6]), (y = e))
      } else if (null != s) {
        let e
        ;(u[7] !== s
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.limits.window.resetAt",
              defaultMessage: "Resets {time}",
              description: "Description showing when a usage limit window resets",
              values: { time: s },
            })),
            (u[7] = s),
            (u[8] = e))
          : (e = u[8]),
          (y = e))
      }
      let b = h.bucket.usedPercent ?? 0
      u[9] !== b ? ((a = (0, eF.rU)(b)), (u[9] = b), (u[10] = a)) : (a = u[10])
      let _ = a,
        v = f ? "stacked" : "default"
      u[11] !== f || u[12] !== h
        ? ((r = (function (e, t = !1) {
            let s = e.bucket.windowDurationMins ?? 0
            return to(e)
              ? (0, n.jsx)(p.A, {
                  id: "settings.usage.limits.monthly.label",
                  defaultMessage: "Monthly usage limit",
                  description: "Label for a monthly usage limit row",
                })
              : tu(s, 300)
                ? t
                  ? (0, n.jsx)(p.A, {
                      id: "settings.usage.personalLimits.fiveHour",
                      defaultMessage: "5-hour limit",
                      description:
                        "Label for the Consumer or Business included usage limit that resets every five hours",
                    })
                  : (0, n.jsx)(p.A, {
                      id: "settings.usage.limits.fiveHour.label",
                      defaultMessage: "5 hour usage limit",
                      description: "Label for the 5-hour usage limit row",
                    })
                : tu(s, 10080)
                  ? t
                    ? (0, n.jsx)(p.A, {
                        id: "settings.usage.personalLimits.weekly",
                        defaultMessage: "Weekly limit",
                        description: "Label for the Consumer or Business included usage limit that resets each week",
                      })
                    : (0, n.jsx)(p.A, {
                        id: "settings.usage.limits.week.label",
                        defaultMessage: "Weekly usage limit",
                        description: "Label for a weekly usage limit row",
                      })
                  : tu(s, 1440)
                    ? (0, n.jsx)(p.A, {
                        id: "settings.usage.limits.day.label",
                        defaultMessage: "Daily usage limit",
                        description: "Label for a daily usage limit row",
                      })
                    : (0, n.jsx)(p.A, {
                        id: "settings.usage.limits.genericWindow.label",
                        defaultMessage: "Usage limit",
                        description: "Generic label for a usage limit row",
                      })
          })(h, f)),
          (u[11] = f),
          (u[12] = h),
          (u[13] = r))
        : (r = u[13])
      let w = f ? void 0 : y,
        A = f ? y : void 0
      return (
        u[14] !== f || u[15] !== d || u[16] !== _ || u[17] !== m || u[18] !== g || u[19] !== A
          ? ((l = (0, n.jsx)(e6, {
              fullWidth: f,
              description: A,
              isResetFillActive: d,
              remainingPercent: _,
              resetFillAnimation: m,
              resetFillRemainingPercent: g,
            })),
            (u[14] = f),
            (u[15] = d),
            (u[16] = _),
            (u[17] = m),
            (u[18] = g),
            (u[19] = A),
            (u[20] = l))
          : (l = u[20]),
        u[21] !== v || u[22] !== r || u[23] !== w || u[24] !== l
          ? ((o = (0, n.jsx)(P.ic, { variant: v, label: r, description: w, control: l })),
            (u[21] = v),
            (u[22] = r),
            (u[23] = w),
            (u[24] = l),
            (u[25] = o))
          : (o = u[25]),
        o
      )
    }
    function tr(e, t) {
      let s = null == t ? (e.find((e) => null == e.limitName) ?? null) : (0, eH.nW)(e, t)
      return null == s ? [] : (0, eq.m)({ entry: s, keyPrefix: t ?? "core" })
    }
    function tl(e) {
      return (
        "spend_limit" === e.kind &&
        "account_user_spend_controls" === e.target.source &&
        "account_user.credit_limits" === e.target.source_id
      )
    }
    function to(e) {
      return tu(e.bucket.windowDurationMins ?? 0, 43200)
    }
    function tu(e, t) {
      return !!Number.isFinite(e) && !(e <= 0) && Math.abs(e - t) <= 0.05 * t
    }
    function tc(e, t) {
      let s = Number(t)
      return Number.isFinite(s)
        ? e.formatNumber(Math.max(s, 0), { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        : t
    }
    var td = s("ZOaQ"),
      th = s("MIhr"),
      tm = s("j2jv"),
      tg = s("TjJf"),
      tp = s("sGKa"),
      tf = s("NxWE"),
      tx = s("x8Nb"),
      ty = s("fgDr"),
      tb = s("Y9i8"),
      t_ = s("GO7r"),
      tv = s("o6lh"),
      tw = s("Rd02"),
      tA = s("MFyU"),
      tj = s("O28E")
    function tC(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u = (0, i.c)(16),
        { rateLimitStatus: c, reduceMotion: d } = e,
        h = (0, x.As)(),
        m = (0, A.Zj)("2125321167"),
        g = (0, A.Zj)("393259752")
      if (u[0] !== g || u[1] !== h || u[2] !== m || u[3] !== c) {
        l = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            n = (0, eH.mO)(c).find(tS),
            i = null == n ? [] : (0, eq.m)({ entry: n, keyPrefix: "core" }),
            o = []
          for (let t of (u[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = [300, 10080]), (u[9] = e))
            : (e = u[9]),
          e))
            i.some((e) => {
              let { bucket: s } = e
              return 1 >= Math.abs((s.windowDurationMins ?? 0) - t)
            }) && o.push(t)
          if (
            !m ||
            !g ||
            null == h.accountId ||
            null == h.userId ||
            ("chatgpt" !== h.authMethod && "chatgptAuthTokens" !== h.authMethod) ||
            0 === o.length
          ) {
            l = null
            break e
          }
          ;((t = tM), (s = `${h.accountId}:${h.userId}`), (a = o), (r = i.map(tk)))
        }
        ;((u[0] = g), (u[1] = h), (u[2] = m), (u[3] = c), (u[4] = t), (u[5] = s), (u[6] = a), (u[7] = r), (u[8] = l))
      } else ((t = u[4]), (s = u[5]), (a = u[6]), (r = u[7]), (l = u[8]))
      return l !== Symbol.for("react.early_return_sentinel")
        ? l
        : (u[10] !== t || u[11] !== d || u[12] !== s || u[13] !== a || u[14] !== r
            ? ((o = (0, n.jsx)(t, { availableWindows: a, currentWindows: r, reduceMotion: d }, s)),
              (u[10] = t),
              (u[11] = d),
              (u[12] = s),
              (u[13] = a),
              (u[14] = r),
              (u[15] = o))
            : (o = u[15]),
          o)
    }
    function tk(e) {
      let { bucket: t } = e
      return t
    }
    function tS(e) {
      let { limitName: t } = e
      return null == t
    }
    function tM(e) {
      let t,
        s,
        a,
        o,
        u,
        c,
        d,
        h,
        m,
        g,
        y,
        b,
        _,
        v,
        w,
        A,
        j,
        C,
        k,
        S,
        M,
        E,
        P,
        N,
        I,
        L,
        R,
        O,
        U,
        F,
        q,
        H,
        G,
        z,
        W,
        B,
        V,
        X,
        K = (0, i.c)(114),
        { currentWindows: Z, now: Q, availableWindows: J, reduceMotion: ee } = e,
        et = (0, r.useId)(),
        ea = new Intl.DateTimeFormat().resolvedOptions().timeZone,
        er = (0, x.As)(),
        el = (0, D.A)(),
        eo = (0, l.KC)(),
        [eu, ec] = (0, r.useState)(300)
      K[0] !== J || K[1] !== eu
        ? ((t = J.includes(eu) ? eu : (J[0] ?? 10080)), (K[0] = J), (K[1] = eu), (K[2] = t))
        : (t = K[2])
      let ed = t
      K[3] !== ed ? ((s = (e) => 1 >= Math.abs((e.windowDurationMins ?? 0) - ed)), (K[3] = ed), (K[4] = s)) : (s = K[4])
      let eh = Z.find(s),
        [em, eg] = (0, r.useState)(!1),
        [ep, ef] = (0, r.useState)(null),
        [ex, ey] = (0, r.useState)(!1)
      K[5] !== er || K[6] !== ed
        ? ((a = (function ({ accountId: e, userId: t, authMethod: s }, n) {
            return {
              queryKey: ["plan-limit-balance-history", e, t, n],
              enabled: ("chatgpt" === s || "chatgptAuthTokens" === s) && null != e && null != t,
              queryFn: async ({ signal: e }) => {
                let t
                do {
                  e.throwIfAborted()
                  try {
                    let s = await en.CodexRequest.safeGet("/wham/usage/plan_limit_balance_history", {
                      parameters: { query: { window_minutes: n, cursor: t?.next_cursor } },
                      signal: e,
                      expectedErrorStatuses: [404, 409],
                    })
                    null == t ? (t = s) : (t.points.push(...s.points), (t.next_cursor = s.next_cursor))
                  } catch (e) {
                    if (e instanceof ei.fk && 404 === e.status) return null
                    throw e
                  }
                } while (null != t.next_cursor)
                return t
              },
              retry: (e, t) => e < 1 && t instanceof ei.fk && 409 === t.status,
              staleTime: es.D.FIVE_MINUTES,
              refetchOnWindowFocus: !1,
            }
          })(er, ed)),
          (K[5] = er),
          (K[6] = ed),
          (K[7] = a))
        : (a = K[7])
      let { data: eb, dataUpdatedAt: e_, isPending: ev, isError: ew, refetch: eA } = (0, $.I)(a),
        ej = eb?.points.at(-1),
        eC = eb?.points[0]
      K[8] !== eC ? ((o = null == eC ? void 0 : Date.parse(eC.observed_at)), (K[8] = eC), (K[9] = o)) : (o = K[9])
      let ek = o,
        eS = eb?.data_as_of ?? ej?.observed_at,
        eM = null == eS ? void 0 : Date.parse(eS)
      K[10] !== e_ || K[11] !== Q
        ? ((u = (e) => Q ?? Math.max(e.getTime(), e_)), (K[10] = e_), (K[11] = Q), (K[12] = u))
        : (u = K[12])
      let eE = (0, eW.wv)(u),
        eT = eb?.points.flatMap((e, t) => {
          let s = eb.points[t - 1]
          if (null == s || s.plan_type !== e.plan_type) return []
          let n = Date.parse(s.estimated_reset_at)
          return n > Date.parse(s.observed_at) &&
            n <= Date.parse(e.observed_at) &&
            Date.parse(e.estimated_reset_at) - n > 6e4
            ? [n]
            : []
        }),
        eP = 0,
        eN =
          null == eb || null == ek || null == eM
            ? void 0
            : Array.from({ length: 64 }, (e, t) => {
                let s = ek + ((eE - ek) * t) / 63
                if (s > eM) return { timestamp: s, remaining: null }
                for (; eP + 1 < eb.points.length && Date.parse(eb.points[eP + 1].observed_at) <= s;) eP += 1
                let n = eb.points[eP],
                  i = Date.parse(n.observed_at),
                  a = eT?.find((e) => e > i && e <= s)
                return { timestamp: s, remaining: null == a ? n.remaining_basis_points / 100 : 100 }
              }),
        eI = eN?.find((e) => !em && e.timestamp === ep && null != e.remaining),
        eL = T.X
      ;(K[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, n.jsx)(p.A, {
            id: "settings.usage.balanceHistory.title",
            defaultMessage: "Recent plan usage",
            description: "Heading for the recent remaining allowance chart on Usage Overview",
          })),
          (d = (0, n.jsx)(p.A, {
            id: "settings.usage.balanceHistory.description",
            defaultMessage: "How your activity draws down your allowance",
            description: "Description of the plan allowance balance history chart",
          })),
          (K[13] = c),
          (K[14] = d))
        : ((c = K[13]), (d = K[14])),
        K[15] !== J || K[16] !== el || K[17] !== ee || K[18] !== ed
          ? ((h =
              J.length > 1
                ? (0, n.jsx)(tb.q, {
                    ariaLabel: el.formatMessage({
                      id: "settings.usage.balanceHistory.window",
                      defaultMessage: "Plan limit window",
                      description: "Accessible label for choosing five-hour or weekly allowance history",
                    }),
                    selectedId: String(ed),
                    size: "compact",
                    animateSelection: !ee,
                    options: J.map(tN),
                    onSelect: (e) => ec("300" === e ? 300 : 10080),
                  })
                : null),
            (K[15] = J),
            (K[16] = el),
            (K[17] = ee),
            (K[18] = ed),
            (K[19] = h))
          : (h = K[19]),
        K[20] !== h
          ? ((m = (0, n.jsx)(T.X.Header, { title: c, subtitle: d, actions: h })), (K[20] = h), (K[21] = m))
          : (m = K[21]))
      let eR = T.X,
        eO = tA.G
      K[22] === Symbol.for("react.memo_cache_sentinel") ? ((g = []), (K[22] = g)) : (g = K[22])
      let eD = (eN?.length ?? 0) > 0,
        eU =
          null == ej
            ? null
            : (0, n.jsx)(eV.m, {
                content: (0, n.jsx)(p.A, {
                  id: "settings.usage.balanceHistory.carriedBalanceHelp",
                  defaultMessage:
                    "Updated daily. Bars carry the last observed balance forward between samples and estimate full allowance at resets. Balances and reset times are approximate.",
                  description: "Explains delayed and approximate balance history",
                }),
                children: (0, n.jsx)("span", {
                  children:
                    null != eI
                      ? el.formatDate(eI.timestamp, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: ea,
                        })
                      : (0, n.jsx)(p.A, {
                          id: "settings.usage.balanceHistory.historyThroughCaption",
                          defaultMessage: "History through {time}",
                          description: "Date of the displayed balance sample, not the current live balance",
                          values: {
                            time: el.formatDate(eS, {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                              timeZone: ea,
                            }),
                          },
                        }),
                }),
              }),
        eq,
        eH =
          null == eh
            ? null
            : (0, n.jsx)(Y.Gr, {
                value: (eI?.remaining ?? (0, eF.rU)(eh.usedPercent)) / 100,
                style: "percent",
                maximumFractionDigits: +(null != eI),
              })
      ;(K[23] !== eA
        ? ((y = () => {
            eA()
          }),
          (K[23] = eA),
          (K[24] = y))
        : (y = K[24]),
        K[25] !== ew || K[26] !== ev || K[27] !== ee || K[28] !== y
          ? ((b = { isLoading: ev, isError: ew, reduceMotion: ee, onRetry: y }),
            (K[25] = ew),
            (K[26] = ev),
            (K[27] = ee),
            (K[28] = y),
            (K[29] = b))
          : (b = K[29]),
        K[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)(p.A, {
              id: "settings.usage.balanceHistory.empty",
              defaultMessage: "Balance history isn’t available yet",
              description: "No historical allowance observations are available",
            })),
            (K[30] = _))
          : (_ = K[30]))
      let eG = tj.H
      K[31] === Symbol.for("react.memo_cache_sentinel") ? ((v = () => ef(null)), (K[31] = v)) : (v = K[31])
      let ez = td.E
      ;(K[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (e) => ef(null == e.activeLabel ? null : Number(e.activeLabel))),
          (A = () => ef(null)),
          (K[32] = w),
          (K[33] = A))
        : ((w = K[32]), (A = K[33])),
        K[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = { top: 32, right: 0, bottom: 0, left: 0 }), (K[34] = j))
          : (j = K[34]),
        K[35] !== em
          ? ((C = em
              ? (0, n.jsx)("rect", { width: 8, height: 8, fill: "var(--color-background-primary-ghost-hover)" })
              : null),
            (K[35] = em),
            (K[36] = C))
          : (C = K[36]),
        K[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)("path", {
              d: "M-2 2L2-2M0 8L8 0M6 10L10 6",
              stroke: "var(--color-text-secondary)",
              strokeOpacity: 0.2,
            })),
            (K[37] = k))
          : (k = K[37]),
        K[38] !== et || K[39] !== C
          ? ((S = (0, n.jsx)("defs", {
              children: (0, n.jsxs)("pattern", {
                id: et,
                width: 8,
                height: 8,
                patternUnits: "userSpaceOnUse",
                children: [C, k],
              }),
            })),
            (K[38] = et),
            (K[39] = C),
            (K[40] = S))
          : (S = K[40]))
      let eB =
        null != eM && eM < eE
          ? (0, n.jsx)(th.T, {
              x1: eM,
              x2: eE,
              y1: 0,
              y2: 100,
              fill: `url(#${et})`,
              fillOpacity: 1,
              stroke: "none",
              shape: (0, n.jsx)(tI, { onHoverChange: eg }),
            })
          : null
      ;(K[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (0, n.jsx)(tm.d, { vertical: !1, stroke: "var(--color-border-subtle)" })), (K[41] = M))
        : (M = K[41]),
        K[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, n.jsx)(tw.Qr, { unit: "percent", orientation: "right", ticks: [0, 50, 100] })), (K[42] = E))
          : (E = K[42]))
      let e$ = eT?.map((e) => {
        let t = eN?.findIndex((t) => t.timestamp >= e)
        if (null == eN || null == t || t <= 0) return null
        let s = (eN[t - 1].timestamp + eN[t].timestamp) / 2
        return (0, n.jsx)(
          tg.e_,
          {
            segment: [
              { x: s, y: 0 },
              { x: s, y: 110 },
            ],
            ifOverflow: "visible",
            stroke: "var(--color-text-tertiary)",
            strokeDasharray: "3 3",
            label: {
              value: el.formatMessage({
                id: "settings.usage.balanceHistory.reset",
                defaultMessage: "Reset",
                description: "Approximate reset between two observed allowance samples",
              }),
              position: "top",
              offset: 8,
              fill: "var(--color-text-tertiary)",
              className: "text-xs",
            },
          },
          e,
        )
      })
      K[43] !== eE || K[44] !== ek
        ? ((P = null != ek && null != eE ? [ek, (ek + eE) / 2, eE] : void 0), (K[43] = eE), (K[44] = ek), (K[45] = P))
        : (P = K[45])
      let eY = ek ?? "dataMin"
      ;(K[46] !== eE || K[47] !== eY ? ((N = [eY, eE]), (K[46] = eE), (K[47] = eY), (K[48] = N)) : (N = K[48]),
        K[49] !== eE || K[50] !== el || K[51] !== ea
          ? ((I = (e) =>
              e === eE
                ? el.formatMessage({
                    id: "settings.usage.balanceHistory.now",
                    defaultMessage: "Now",
                    description:
                      "Current time at the right edge of the allowance history chart, including recent history that is not available yet",
                  })
                : el.formatDate(e, { month: "short", day: "numeric", timeZone: ea })),
            (K[49] = eE),
            (K[50] = el),
            (K[51] = ea),
            (K[52] = I))
          : (I = K[52]),
        K[53] !== P || K[54] !== N || K[55] !== I
          ? ((L = (0, n.jsx)(tp.W, {
              ticks: P,
              dataKey: "timestamp",
              type: "number",
              scale: "time",
              domain: N,
              axisLine: !1,
              tickLine: !1,
              interval: 0,
              tick: tT,
              tickFormatter: I,
            })),
            (K[53] = P),
            (K[54] = N),
            (K[55] = I),
            (K[56] = L))
          : (L = K[56]))
      let eX = !ex && !em && void 0
      return (
        K[57] !== em ? ((R = !em && (0, n.jsx)(tw.kr, {})), (K[57] = em), (K[58] = R)) : (R = K[58]),
        K[59] !== el || K[60] !== eN || K[61] !== ea
          ? ((O = (e) => {
              let { active: t, label: s } = e,
                i = eN?.find((e) => e.timestamp === Number(s))
              return t && null != i
                ? (0, n.jsxs)("div", {
                    className: "sr-only",
                    role: "status",
                    children: [
                      (0, n.jsx)("div", {
                        children: el.formatDate(i.timestamp, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: ea,
                        }),
                      }),
                      null == i.remaining
                        ? (0, n.jsx)(p.A, {
                            id: "settings.usage.balanceHistory.pendingAggregation",
                            defaultMessage: "Recent usage isn’t available yet",
                            description:
                              "Chart region after the latest aggregation cutoff with no reported balance history yet",
                          })
                        : (0, n.jsx)(Y.Gr, { value: i.remaining / 100, style: "percent", maximumFractionDigits: 1 }),
                    ],
                  })
                : null
            }),
            (K[59] = el),
            (K[60] = eN),
            (K[61] = ea),
            (K[62] = O))
          : (O = K[62]),
        K[63] !== eX || K[64] !== R || K[65] !== O
          ? ((U = (0, n.jsx)(tf.m, { active: eX, cursor: R, filterNull: !1, content: O })),
            (K[63] = eX),
            (K[64] = R),
            (K[65] = O),
            (K[66] = U))
          : (U = K[66]),
        K[67] === Symbol.for("react.memo_cache_sentinel") ? ((F = [2, 2, 0, 0]), (K[67] = F)) : (F = K[67]),
        K[68] !== eI || K[69] !== eN
          ? ((q = (0, n.jsx)(tx.yP, {
              dataKey: "remaining",
              name: "remaining",
              fill: tv.sh,
              maxBarSize: 44,
              isAnimationActive: !1,
              radius: F,
              shape: (e) =>
                (0, n.jsx)(ty.M, {
                  ...e,
                  pointerEvents: "none",
                  fillOpacity: null == eI || eN?.[e.originalDataIndex]?.timestamp === eI.timestamp ? 1 : 0.5,
                }),
            })),
            (K[68] = eI),
            (K[69] = eN),
            (K[70] = q))
          : (q = K[70]),
        K[71] !== ez ||
        K[72] !== eN ||
        K[73] !== tP ||
        K[74] !== w ||
        K[75] !== A ||
        K[76] !== j ||
        K[77] !== S ||
        K[78] !== eB ||
        K[79] !== M ||
        K[80] !== E ||
        K[81] !== e$ ||
        K[82] !== L ||
        K[83] !== U ||
        K[84] !== q
          ? ((H = (0, n.jsxs)(ez, {
              data: eN,
              onMouseDown: tP,
              onMouseMove: w,
              onMouseLeave: A,
              accessibilityLayer: !0,
              margin: j,
              children: [S, eB, M, E, e$, L, U, q],
            })),
            (K[71] = ez),
            (K[72] = eN),
            (K[73] = tP),
            (K[74] = w),
            (K[75] = A),
            (K[76] = j),
            (K[77] = S),
            (K[78] = eB),
            (K[79] = M),
            (K[80] = E),
            (K[81] = e$),
            (K[82] = L),
            (K[83] = U),
            (K[84] = q),
            (K[85] = H))
          : (H = K[85]),
        K[86] !== eG || K[87] !== ey || K[88] !== v || K[89] !== H || K[90] !== ex
          ? ((G = (0, n.jsx)(eG, {
              consumerAnalytics: !0,
              scope: "consumer",
              isTooltipDismissed: ex,
              onTooltipDismissedChange: ey,
              onResetHover: v,
              children: H,
            })),
            (K[86] = eG),
            (K[87] = ey),
            (K[88] = v),
            (K[89] = H),
            (K[90] = ex),
            (K[91] = G))
          : (G = K[91]),
        K[92] !== eO ||
        K[93] !== g ||
        K[94] !== eD ||
        K[95] !== eU ||
        K[96] !== eq ||
        K[97] !== eH ||
        K[98] !== b ||
        K[99] !== _ ||
        K[100] !== G
          ? ((z = (0, n.jsx)(eO, {
              activeSeriesKey: null,
              balanceHistory: !0,
              consumerAnalytics: !0,
              fillChartHeight: !0,
              scope: "consumer",
              series: g,
              hasData: eD,
              title: null,
              totalDescription: eU,
              total: eq,
              totalLabel: eH,
              status: b,
              emptyMessage: _,
              children: G,
            })),
            (K[92] = eO),
            (K[93] = g),
            (K[94] = eD),
            (K[95] = eU),
            (K[96] = eq),
            (K[97] = eH),
            (K[98] = b),
            (K[99] = _),
            (K[100] = G),
            (K[101] = z))
          : (z = K[101]),
        K[102] !== eR.Content || K[103] !== z
          ? ((W = (0, n.jsx)(eR.Content, { children: z })), (K[102] = eR.Content), (K[103] = z), (K[104] = W))
          : (W = K[104]),
        K[105] !== eo
          ? ((B = eo?.visibleSettingsSections.some(tE)
              ? (0, n.jsxs)(f.$, {
                  className: "underline-offset-2 hover:underline focus-visible:underline",
                  color: "ghostMuted",
                  size: "inline",
                  onClick: () => eo.onSelectSection("analytics"),
                  children: [
                    (0, n.jsx)(p.A, {
                      id: "settings.usage.balanceHistory.viewHistory",
                      defaultMessage: "View usage history",
                      description: "Open Analytics from recent plan usage",
                    }),
                    (0, n.jsx)(t_.$XR, {}),
                  ],
                })
              : null),
            (K[105] = eo),
            (K[106] = B))
          : (B = K[106]),
        K[107] !== B
          ? ((V = (0, n.jsx)(T.X.Footer, { variant: "action", children: B })), (K[107] = B), (K[108] = V))
          : (V = K[108]),
        K[109] !== eL || K[110] !== W || K[111] !== V || K[112] !== m
          ? ((X = (0, n.jsxs)(eL, { children: [m, W, V] })),
            (K[109] = eL),
            (K[110] = W),
            (K[111] = V),
            (K[112] = m),
            (K[113] = X))
          : (X = K[113]),
        X
      )
    }
    function tE(e) {
      let { slug: t } = e
      return "analytics" === t
    }
    function tT(e) {
      return (0, n.jsx)(tw.ps, { ...e })
    }
    function tP(e, t) {
      return t.preventDefault()
    }
    function tN(e) {
      return {
        id: String(e),
        label: (0, n.jsx)(p.A, {
          id: "settings.usage.balanceHistory.windowLabel",
          defaultMessage: "{minutes, select, 300 {5-hour} other {Weekly}}",
          description: "Allowance history window selector",
          values: { minutes: e },
        }),
      }
    }
    function tI(e) {
      let t,
        s,
        a,
        r,
        l = (0, i.c)(12),
        { x: o, y: u, width: c, height: d, fill: h, onHoverChange: m } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(p.A, {
              id: "settings.usage.balanceHistory.pendingAggregation",
              defaultMessage: "Recent usage isn’t available yet",
              description: "Chart region after the latest aggregation cutoff with no reported balance history yet",
            })),
            (l[0] = t))
          : (t = l[0]),
        l[1] !== m
          ? ((s = () => m(!0)), (a = () => m(!1)), (l[1] = m), (l[2] = s), (l[3] = a))
          : ((s = l[2]), (a = l[3])),
        l[4] !== h || l[5] !== d || l[6] !== s || l[7] !== a || l[8] !== c || l[9] !== o || l[10] !== u
          ? ((r = (0, n.jsx)(eV.m, {
              side: "top",
              align: "end",
              openDelay: 0,
              content: t,
              children: (0, n.jsx)("rect", {
                x: o,
                y: u,
                width: c,
                height: d,
                fill: h,
                pointerEvents: "all",
                onPointerEnter: s,
                onPointerLeave: a,
              }),
            })),
            (l[4] = h),
            (l[5] = d),
            (l[6] = s),
            (l[7] = a),
            (l[8] = c),
            (l[9] = o),
            (l[10] = u),
            (l[11] = r))
          : (r = l[11]),
        r
      )
    }
    s("qF12")
    var tL = s("SPnB"),
      tR = s("LfMl"),
      tO = s("WePE"),
      tD = s("Ghh3")
    function tU(e) {
      let t,
        s = (0, i.c)(6),
        { canPurchaseCredits: a, renderCreditBalance: r } = e,
        l = void 0 === a || a,
        { accountId: o, authMethod: u, userId: c } = (0, x.As)(),
        { data: d } = (0, y.YL)()
      if (
        "chatgpt" !== u ||
        null == o ||
        null == c ||
        d?.id !== o ||
        "workspace" !== d.structure ||
        "account-owner" !== d.account_user_role ||
        !(0, h.Hw)(d.plan_type)
      ) {
        let e
        return (s[0] !== r ? ((e = r?.(0) ?? null), (s[0] = r), (s[1] = e)) : (e = s[1]), e)
      }
      return (
        s[2] !== o || s[3] !== l || s[4] !== r
          ? ((t = (0, n.jsx)(tF, { accountId: o, canPurchaseCredits: l, renderCreditBalance: r }, o)),
            (s[2] = o),
            (s[3] = l),
            (s[4] = r),
            (s[5] = t))
          : (t = s[5]),
        t
      )
    }
    function tF(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        h,
        m,
        j,
        k,
        S,
        M,
        E,
        T,
        N,
        I,
        L,
        R,
        U,
        F,
        q = (0, i.c)(80),
        { accountId: H, canPurchaseCredits: G, renderCreditBalance: z } = e,
        W = (0, g.gh)(w.u),
        B = (0, D.A)(),
        { authMethod: V, userId: Y } = (0, x.As)(),
        { data: X } = (0, y.YL)(),
        K = (0, A.AS)(),
        Q = (0, b.b)(),
        [J, ee] = (0, r.useState)(!1)
      ;(q[0] !== H || q[1] !== V || q[2] !== Y
        ? ((t = ["workspace-auto-reload-policy", V, Y, H]), (q[0] = H), (q[1] = V), (q[2] = Y), (q[3] = t))
        : (t = q[3]),
        q[4] !== H
          ? ((s = (e) => {
              let { signal: t } = e
              return tD.Request.safeGet("/pageConfigs/billing", { additionalHeaders: { [ep.zBc]: H }, signal: t })
            }),
            (q[4] = H),
            (q[5] = s))
          : (s = q[5]),
        q[6] !== t || q[7] !== s
          ? ((a = { queryKey: t, queryFn: s, staleTime: es.D.ONE_MINUTE, refetchOnWindowFocus: "always" }),
            (q[6] = t),
            (q[7] = s),
            (q[8] = a))
          : (a = q[8]))
      let { data: et, isPending: en, isError: ei, refetch: ea } = (0, $.I)(a),
        er =
          et?.credits.eligible === !0 &&
          et.credits.credit_policy?.kind === "business" &&
          !0 === et.credits.credit_policy.can_manage_auto_reload
      q[9] !== er
        ? ((l = { enabled: er, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (q[9] = er), (q[10] = l))
        : (l = q[10])
      let { data: el, isPending: eo, isError: eu, refetch: ec } = (0, C.q7)(l)
      q[11] !== er ? ((o = { enabled: er, refetchOnWindowFocus: "always" }), (q[11] = er), (q[12] = o)) : (o = q[12])
      let { data: ed, isPending: eh, isError: em, refetch: eg } = (0, C.Ko)(o)
      q[13] !== er ? ((u = { enabled: er }), (q[13] = er), (q[14] = u)) : (u = q[14])
      let { data: ef } = (0, g._U)(C.pb, er || G ? H : null, u)
      q[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { analyticsSurface: "wham_usage_dashboard" }), (q[15] = c))
        : (c = q[15])
      let ex = (0, C.MU)(c),
        ey = !el?.isEnabled && el?.paymentMethod == null,
        eb = en || (!ei && er && (eo || (!eu && ey && eh))),
        e_ = !ei && er && null != el && !eu && !(ey && (em || (ed?.payment_methods.length ?? 0) === 0))
      ;(q[16] !== H || q[17] !== V || q[18] !== G || q[19] !== e_ || q[20] !== Y || q[21] !== ef
        ? ((d = (e_ || G) && ef?.balance != null && Number.isFinite(Number(ef.balance))),
          (m = $.I),
          (h = (0, C.tj)({ accountId: H, authMethod: V, userId: Y, enabled: d })),
          (q[16] = H),
          (q[17] = V),
          (q[18] = G),
          (q[19] = e_),
          (q[20] = Y),
          (q[21] = ef),
          (q[22] = d),
          (q[23] = h),
          (q[24] = m))
        : ((d = q[22]), (h = q[23]), (m = q[24])),
        q[25] !== H
          ? ((j = async (e) => {
              let { signal: t } = e
              return (
                await tD.Request.safeGet("/subscriptions/credits/discount-offer", {
                  additionalHeaders: { [ep.zBc]: H },
                  signal: t,
                })
              ).offer
            }),
            (q[25] = H),
            (q[26] = j))
          : (j = q[26]),
        q[27] !== j || q[28] !== h ? ((k = { ...h, queryFn: j }), (q[27] = j), (q[28] = h), (q[29] = k)) : (k = q[29]))
      let { data: ev, isError: ew, isFetching: eA } = m(k),
        ej = !d || ew || eA ? null : ev
      q[30] !== ej?.auto_reload?.tiers || q[31] !== e_ || q[32] !== el?.isEnabled
        ? ((S = e_ && el?.isEnabled === !1 ? (ej?.auto_reload?.tiers.reduce(tH, 0) ?? 0) : 0),
          (q[30] = ej?.auto_reload?.tiers),
          (q[31] = e_),
          (q[32] = el?.isEnabled),
          (q[33] = S))
        : (S = q[33])
      let eC = S
      if (q[34] !== ej?.one_time || q[35] !== G || q[36] !== eb || q[37] !== eC || q[38] !== z) {
        let e = G && !eb && 0 === eC ? (ej?.one_time.tiers.reduce(tq, 0) ?? 0) : 0
        ;((M = z?.(e)), (q[34] = ej?.one_time), (q[35] = G), (q[36] = eb), (q[37] = eC), (q[38] = z), (q[39] = M))
      } else M = q[39]
      let ek = M
      if (ei || (er && (eu || (ey && em)))) {
        let e, t, s, i, a
        return (
          q[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(p.A, {
                id: "settings.usage.autoTopUp.workspace.loadError",
                defaultMessage: "Could not load automatic reload settings",
                description: "Error shown when a Business workspace owner cannot load automatic credit reload settings",
              })),
              (q[40] = e))
            : (e = q[40]),
          q[41] !== er || q[42] !== ey || q[43] !== ea || q[44] !== eg || q[45] !== ec
            ? ((t = () => {
                ;(ea(), er && (ec(), ey && eg()))
              }),
              (q[41] = er),
              (q[42] = ey),
              (q[43] = ea),
              (q[44] = eg),
              (q[45] = ec),
              (q[46] = t))
            : (t = q[46]),
          q[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(p.A, {
                id: "settings.usage.load.retry",
                defaultMessage: "Retry",
                description: "Retry button for usage settings fetch errors",
              })),
              (q[47] = s))
            : (s = q[47]),
          q[48] !== t
            ? ((i = (0, n.jsx)(P.ic, {
                label: e,
                control: (0, n.jsx)(f.$, { color: "secondary", size: "toolbar", onClick: t, children: s }),
              })),
              (q[48] = t),
              (q[49] = i))
            : (i = q[49]),
          q[50] !== ek || q[51] !== i
            ? ((a = (0, n.jsxs)(n.Fragment, { children: [ek, i] })), (q[50] = ek), (q[51] = i), (q[52] = a))
            : (a = q[52]),
          a
        )
      }
      return e_ && null != el
        ? (q[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = (0, n.jsx)(p.A, {
                id: "settings.usage.credit.balance.autoReloadLabel",
                defaultMessage: "Automatic reload",
                description: "Label for the automatic credits reload setting in Usage and billing",
              })),
              (q[53] = E))
            : (E = q[53]),
          q[54] !== eC
            ? ((T = eC > 0 ? (0, n.jsx)(O.u1, { discountPercent: eC }) : null), (q[54] = eC), (q[55] = T))
            : (T = q[55]),
          q[56] !== B || q[57] !== el.isEnabled
            ? ((N = el.isEnabled
                ? B.formatMessage({
                    id: "settings.usage.credit.balance.manageAutoReload",
                    defaultMessage: "Manage auto-reload",
                    description: "Accessible label for managing active automatic credits reload from Usage and billing",
                  })
                : B.formatMessage({
                    id: "settings.usage.credit.balance.setupAutoReload",
                    defaultMessage: "Set up auto-reload",
                    description: "Accessible label for setting up automatic credits reload from Usage and billing",
                  })),
              (q[56] = B),
              (q[57] = el.isEnabled),
              (q[58] = N))
            : (N = q[58]),
          q[59] === Symbol.for("react.memo_cache_sentinel") ? ((I = () => ee(!0)), (q[59] = I)) : (I = q[59]),
          q[60] !== el.isEnabled || q[61] !== N
            ? ((L = (0, n.jsx)(Z.l, { checked: el.isEnabled, ariaLabel: N, onChange: I })),
              (q[60] = el.isEnabled),
              (q[61] = N),
              (q[62] = L))
            : (L = q[62]),
          q[63] !== T || q[64] !== L
            ? ((R = (0, n.jsx)(P.ic, { label: E, control: (0, n.jsxs)(n.Fragment, { children: [T, L] }) })),
              (q[63] = T),
              (q[64] = L),
              (q[65] = R))
            : (R = q[65]),
          q[66] !== H ||
          q[67] !== X ||
          q[68] !== J ||
          q[69] !== ex ||
          q[70] !== Q ||
          q[71] !== W ||
          q[72] !== el ||
          q[73] !== K ||
          q[74] !== ef?.balance
            ? ((U = J
                ? (0, n.jsx)(O.bH, {
                    open: !0,
                    showCreditDiscounts: !0,
                    serverState: el,
                    creditBalance: ef?.balance,
                    paymentAccountId: H,
                    creditPurchaseUrl: `https://chatgpt.com/pricing/credits?account_id=${encodeURIComponent(H)}&audience=workspace`,
                    ...ex,
                    onOpenChange: ee,
                    onPurchaseCredits: (e) => {
                      ;(e.preventDefault(),
                        (0, v.Ih)(K),
                        (0, _.nZ)({
                          scope: W,
                          navigateToPurchase: Q,
                          accountId: H,
                          currentAccount: X,
                          event: e,
                          statsigClient: K,
                        }))
                    },
                  })
                : null),
              (q[66] = H),
              (q[67] = X),
              (q[68] = J),
              (q[69] = ex),
              (q[70] = Q),
              (q[71] = W),
              (q[72] = el),
              (q[73] = K),
              (q[74] = ef?.balance),
              (q[75] = U))
            : (U = q[75]),
          q[76] !== ek || q[77] !== R || q[78] !== U
            ? ((F = (0, n.jsxs)(n.Fragment, { children: [ek, R, U] })),
              (q[76] = ek),
              (q[77] = R),
              (q[78] = U),
              (q[79] = F))
            : (F = q[79]),
          F)
        : (ek ?? null)
    }
    function tq(e, t) {
      return Math.max(e, t.percent_off)
    }
    function tH(e, t) {
      return Math.max(e, t.percent_off)
    }
    var tG = s("X4FU")
    function tz(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u,
        c,
        d = (0, i.c)(59),
        { canPurchaseCredits: h, isPolling: m, rateLimitStatus: b } = e,
        _ = (0, g.gh)(w.u),
        { accountId: v, userId: A } = (0, x.As)(),
        j = (0, g.Ul)(tL.o8),
        k = (0, g._U)(tO.Wx, v),
        { data: S, isError: M, isLoading: E } = (0, y.YL)(),
        I = S?.id ?? null
      d[0] !== v || d[1] !== M || d[2] !== E || d[3] !== b || d[4] !== I || d[5] !== A
        ? ((t = (0, L.jV)({
            authAccountId: v,
            authUserId: A,
            currentAccountId: I,
            isCurrentAccountError: M,
            isCurrentAccountLoading: E,
            rateLimitStatus: b,
          })),
          (d[0] = v),
          (d[1] = M),
          (d[2] = E),
          (d[3] = b),
          (d[4] = I),
          (d[5] = A),
          (d[6] = t))
        : (t = d[6])
      let R = t,
        O = M || S?.id !== v ? null : S.account_user_role,
        D = "account-owner" === O,
        F = D || "account-admin" === O,
        q = b?.spend_control?.individual_limit,
        H = b?.credits?.has_credits === !1,
        G = null != O && !F && null != q && 0 >= Number(q.remaining),
        z = R && G
      d[7] !== v || d[8] !== z ? ((s = { accountId: v, enabled: z }), (d[7] = v), (d[8] = z), (d[9] = s)) : (s = d[9])
      let { data: W, isError: B, isLoading: $, refetch: V } = (0, C.sl)(s),
        Y = q?.reset_at ?? null
      d[10] !== Y ? ((a = (0, eF.tB)(Y)), (d[10] = Y), (d[11] = a)) : (a = d[11])
      let X = a,
        K = G && W?.kind === "custom" ? W.instructions : null
      d[12] !== v || d[13] !== R || d[14] !== j || d[15] !== A
        ? ((r = R && null != v && null != j ? { accountId: v, userId: A, requestUserId: j } : null),
          (d[12] = v),
          (d[13] = R),
          (d[14] = j),
          (d[15] = A),
          (d[16] = r))
        : (r = d[16])
      let Z = r,
        Q = (0, g._U)(tO.R6, Z)
      if (
        d[17] !== O ||
        d[18] !== G ||
        d[19] !== D ||
        d[20] !== q?.source ||
        d[21] !== b?.rate_limit_upsell?.ctas ||
        d[22] !== W?.kind ||
        d[23] !== Z ||
        d[24] !== k ||
        d[25] !== H
      ) {
        if (((l = null), null != Z && null != O && !D && (H || (G && W?.kind === "openai_native")) && !0 === k)) {
          let e
          d[27] !== b?.rate_limit_upsell?.ctas
            ? ((e = b?.rate_limit_upsell?.ctas.find(tW)?.reason), (d[27] = b?.rate_limit_upsell?.ctas), (d[28] = e))
            : (e = d[28])
          let t = e
          null != t
            ? (l = t)
            : G && q?.source === "account_user_spend_controls"
              ? (l = "INDIVIDUAL_SPEND_LIMIT_REACHED")
              : G && q?.source === "workspace_spend_controls"
                ? (l = "SEAT_TYPE_SPEND_LIMIT_REACHED")
                : H && (l = "WORKSPACE_CREDITS_EXHAUSTED")
        }
        ;((d[17] = O),
          (d[18] = G),
          (d[19] = D),
          (d[20] = q?.source),
          (d[21] = b?.rate_limit_upsell?.ctas),
          (d[22] = W?.kind),
          (d[23] = Z),
          (d[24] = k),
          (d[25] = H),
          (d[26] = l))
      } else l = d[26]
      return R && null != b && (null != q || D || H)
        ? (d[29] !== O || d[30] !== F || d[31] !== q || d[32] !== H
            ? ((o =
                null == O || F || null == q
                  ? (0, n.jsx)(p.A, {
                      id: "settings.usage.businessCredits.description",
                      defaultMessage:
                        "Shared workspace credits let you keep using Work and Codex beyond included usage.",
                      description:
                        "Credits section description explaining shared workspace credits. Work and Codex are product names.",
                    })
                  : H
                    ? (0, n.jsx)(p.A, {
                        id: "settings.usage.businessCredits.member.unavailableDescription",
                        defaultMessage:
                          "Shared workspace credits let you keep using Work and Codex beyond included usage. Monthly credit limits are set by your workspace owner.",
                        description:
                          "Credits section description for a Business workspace member when the shared credit pool is exhausted. Work and Codex are product names.",
                      })
                    : (0, n.jsx)(p.A, {
                        id: "settings.usage.businessCredits.member.description",
                        defaultMessage: "Monthly credit limits are set by your workspace owner.",
                        description:
                          "Credits section description for a Business workspace member whose monthly credit allowance is managed by their workspace owner.",
                      })),
              (d[29] = O),
              (d[30] = F),
              (d[31] = q),
              (d[32] = H),
              (d[33] = o))
            : (o = d[33]),
          d[34] !== v ||
          d[35] !== O ||
          d[36] !== F ||
          d[37] !== h ||
          d[38] !== G ||
          d[39] !== K ||
          d[40] !== D ||
          d[41] !== m ||
          d[42] !== B ||
          d[43] !== $ ||
          d[44] !== q ||
          d[45] !== V ||
          d[46] !== W ||
          d[47] !== X ||
          d[48] !== _ ||
          d[49] !== o ||
          d[50] !== Z ||
          d[51] !== l ||
          d[52] !== Q ||
          d[53] !== k ||
          d[54] !== H
            ? ((u = (e) => {
                let { actions: t } = e,
                  s = null
                if (F)
                  s = (0, n.jsx)(f.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: (e) => {
                      t.increase_spend_cap.onClick(e)
                    },
                    children: (0, n.jsx)(p.A, {
                      id: "settings.usage.businessCredits.increaseLimit",
                      defaultMessage: "Increase monthly limit",
                      description:
                        "Button that opens the workspace usage limit editor for an owner or admin to change their monthly credit limit.",
                    }),
                  })
                else if (G && (W?.kind === "openai_native" || (W?.kind === "custom" && W.request_url))) {
                  let e = "custom" !== W.kind && (null != l ? Q.disabled : t.request_increase.disabled)
                  s = (0, n.jsx)(f.$, {
                    color: "secondary",
                    size: "toolbar",
                    disabled: e,
                    loading: "custom" !== W.kind && (!1 !== k ? Q.isSubmitting : e),
                    onClick: (e) => {
                      "custom" === W.kind && W.request_url
                        ? (0, U.PQ)({ event: e, href: W.request_url, initiator: "open_in_browser_bridge" })
                        : null != Z && null != l
                          ? (0, tO.Zu)(_, Z, l, { surface: "CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS" })
                          : t.request_increase.onClick(e)
                    },
                    children: (0, n.jsx)(p.A, { ...t$.requestUsage }),
                  })
                }
                return (0, n.jsxs)(T.X, {
                  children: [
                    (0, n.jsx)(T.X.Header, { title: (0, n.jsx)(p.A, { ...tG.z.title }), subtitle: o }),
                    (0, n.jsx)(T.X.Content, {
                      children: (0, n.jsxs)(N.t, {
                        children: [
                          null != q
                            ? (0, n.jsx)(P.ic, {
                                label: (0, n.jsx)(p.A, {
                                  id: "settings.usage.businessCredits.monthlyRemaining",
                                  defaultMessage: "{remaining, number} of {limit, number} monthly credits left",
                                  description:
                                    "Remaining personal monthly credit allowance out of the configured total in a Business workspace.",
                                  values: {
                                    remaining: Math.max(0, Math.ceil(Number(q.remaining))),
                                    limit: Number(q.limit),
                                  },
                                }),
                                description:
                                  null != X || null != K
                                    ? (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          null != X
                                            ? (0, n.jsx)("div", { children: (0, n.jsx)(eB, { resetAt: X }) })
                                            : null,
                                          null != K
                                            ? (0, n.jsx)("span", {
                                                className: "leading-relaxed whitespace-pre-wrap",
                                                children: K,
                                              })
                                            : null,
                                        ],
                                      })
                                    : null,
                                control: s,
                              })
                            : null,
                          G && (B || $)
                            ? (0, n.jsx)(P.ic, {
                                label: B
                                  ? (0, n.jsx)(p.A, {
                                      id: "settings.usage.businessCredits.requestPolicy.error",
                                      defaultMessage: "Couldn’t load usage request settings",
                                      description:
                                        "Shown when the workspace policy for requesting a monthly credit limit increase could not be loaded.",
                                    })
                                  : (0, n.jsx)(p.A, {
                                      id: "settings.usage.businessCredits.requestPolicy.loading",
                                      defaultMessage: "Loading usage request settings…",
                                      description:
                                        "Shown while loading the workspace policy for requesting a monthly credit limit increase.",
                                    }),
                                control: B
                                  ? (0, n.jsx)(f.$, {
                                      color: "secondary",
                                      size: "toolbar",
                                      onClick: () => void V(),
                                      children: (0, n.jsx)(p.A, {
                                        id: "settings.usage.load.retry",
                                        defaultMessage: "Retry",
                                        description: "Retry button for usage settings fetch errors",
                                      }),
                                    })
                                  : null,
                              })
                            : null,
                          D && null != v
                            ? (0, n.jsx)(
                                tU,
                                {
                                  canPurchaseCredits: h,
                                  renderCreditBalance: (e) =>
                                    (0, n.jsx)(tB, {
                                      accountId: v,
                                      canPurchaseCredits: h,
                                      isPolling: m,
                                      discountPercent: e,
                                    }),
                                },
                                v,
                              )
                            : null,
                          !D && H
                            ? (0, n.jsx)(P.ic, {
                                label: (0, n.jsx)(p.A, {
                                  id: "settings.usage.businessCredits.unavailable",
                                  defaultMessage: "Workspace credits are unavailable",
                                  description:
                                    "Shown to a Business workspace member or admin when the shared workspace credit pool is exhausted. The numeric workspace balance is not disclosed.",
                                }),
                                control:
                                  null != O
                                    ? (0, n.jsx)(f.$, {
                                        color: "secondary",
                                        size: "toolbar",
                                        disabled: null != l ? Q.disabled : t.notify_owner.disabled,
                                        loading: !1 !== k ? Q.isSubmitting : t.notify_owner.disabled,
                                        onClick: (e) => {
                                          null != Z && null != l
                                            ? (0, tO.Zu)(_, Z, l, {
                                                surface: "CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS",
                                              })
                                            : t.notify_owner.onClick(e)
                                        },
                                        children: (0, n.jsx)(p.A, { ...t$.requestUsage }),
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
              (d[34] = v),
              (d[35] = O),
              (d[36] = F),
              (d[37] = h),
              (d[38] = G),
              (d[39] = K),
              (d[40] = D),
              (d[41] = m),
              (d[42] = B),
              (d[43] = $),
              (d[44] = q),
              (d[45] = V),
              (d[46] = W),
              (d[47] = X),
              (d[48] = _),
              (d[49] = o),
              (d[50] = Z),
              (d[51] = l),
              (d[52] = Q),
              (d[53] = k),
              (d[54] = H),
              (d[55] = u))
            : (u = d[55]),
          d[56] !== b || d[57] !== u
            ? ((c = (0, n.jsx)(tR.u, { rateLimitStatus: b, source: "usage_settings_purchase_cta", children: u })),
              (d[56] = b),
              (d[57] = u),
              (d[58] = c))
            : (c = d[58]),
          c)
        : null
    }
    function tW(e) {
      return "request_usage" === e.action
    }
    function tB(e) {
      let t,
        s,
        a,
        l,
        o,
        u = (0, i.c)(14),
        { accountId: c, canPurchaseCredits: d, isPolling: h, discountPercent: m } = e,
        [f, x] = (0, r.useState)(!1),
        y = h || !f
      u[0] !== y ? ((t = { enabled: y }), (u[0] = y), (u[1] = t)) : (t = u[1])
      let { data: b, isLoading: _, isSuccess: v, isError: w } = (0, g._U)(C.pb, c, t)
      !f && (v || w) && x(!0)
      let A = b?.balance == null ? null : Number(b.balance)
      if (_) {
        let e
        ;(u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.businessCredits.loading",
              defaultMessage: "Loading workspace credits…",
              description: "Shown while loading the workspace owner's shared credit balance.",
            })),
            (u[2] = e))
          : (e = u[2]),
          (s = e))
      } else if (null != A && Number.isFinite(A)) {
        let e,
          t = Math.max(0, Math.ceil(A))
        ;(u[3] !== t
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.businessCredits.balance.count",
              defaultMessage: "{balance, plural, one {# workspace credit} other {# workspace credits}}",
              description:
                "The shared workspace credit balance, visible only to workspace owners in Usage settings. Fractional balances round up to whole credits; negative balances display as zero.",
              values: { balance: t },
            })),
            (u[3] = t),
            (u[4] = e))
          : (e = u[4]),
          (s = e))
      } else {
        let e
        ;(u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(p.A, {
              id: "settings.usage.businessCredits.balanceUnknown",
              defaultMessage: "Workspace credit balance unavailable",
              description:
                "Shown when the owner's workspace credit balance could not be loaded. This does not mean the workspace has no credits.",
            })),
            (u[5] = e))
          : (e = u[5]),
          (s = e))
      }
      return (
        u[6] !== s ? ((a = (0, n.jsx)("span", { role: "status", children: s })), (u[6] = s), (u[7] = a)) : (a = u[7]),
        u[8] !== d || u[9] !== m
          ? ((l = d
              ? (0, n.jsxs)("div", {
                  className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
                  children: [m > 0 ? (0, n.jsx)(O.u1, { discountPercent: m }) : null, (0, n.jsx)(j, {})],
                })
              : null),
            (u[8] = d),
            (u[9] = m),
            (u[10] = l))
          : (l = u[10]),
        u[11] !== a || u[12] !== l
          ? ((o = (0, n.jsx)(P.ic, { label: a, control: l })), (u[11] = a), (u[12] = l), (u[13] = o))
          : (o = u[13]),
        o
      )
    }
    let t$ = (0, Y.YK)({
      requestUsage: {
        id: "settings.usage.businessCredits.requestUsage",
        defaultMessage: "Request more usage",
        description:
          "Button for a workspace member or admin to request more credits or a higher monthly allowance from their workspace owner.",
      },
    })
    var tV = s("AKNp")
    function tY(e) {
      let t,
        s = (0, i.c)(2),
        { plan: a } = e
      return (
        s[0] !== a
          ? ((t = (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(tX, { plan: a, respectUpsellSuppression: !1 }) }),
                null,
              ],
            })),
            (s[0] = a),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function tX(e) {
      let t,
        s,
        a,
        r,
        l = (0, i.c)(11),
        { plan: o, respectUpsellSuppression: u } = e
      l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (l[0] = t)) : (t = l[0])
      let c = (0, F.q)(t),
        d = (0, G.j)()
      l[1] !== o ? ((s = (0, q.m6)(o)), (l[1] = o), (l[2] = s)) : (s = l[2])
      let h = s,
        m = (0, A.AS)()
      return (
        l[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(p.A, {
              id: "settings.usage.personalLimits.title",
              defaultMessage: "Plan limits",
              description: "Heading for a Consumer or Business user's own included-plan usage limits",
            })),
            (l[3] = a))
          : (a = l[3]),
        l[4] !== c || l[5] !== d || l[6] !== h || l[7] !== o || l[8] !== u || l[9] !== m
          ? ((r = (0, n.jsx)(T.X.Header, {
              title: a,
              subtitle:
                null != h && null != (0, q.N8)(o) && (!u || (0, tV.ku)(m, "Agent usage settings upgrade link"))
                  ? (0, n.jsx)(p.A, {
                      id: "settings.usage.personalLimits.upgradeDescription",
                      defaultMessage:
                        "Shared across Codex, Work, Workspace Agents, and ChatGPT for Excel. Chat conversations are not included. To increase usage, <upgrade>upgrade your plan</upgrade>",
                      description:
                        "Explains which products share a personal plan's included usage. The upgrade tag opens the existing plan upgrade flow. Codex, Work, Workspace Agents, ChatGPT for Excel, and Chat are product names.",
                      values: {
                        upgrade: (e) =>
                          (0, n.jsx)("span", {
                            className: "inline-flex",
                            children: (0, n.jsx)(f.$, {
                              color: "ghostAccent",
                              size: "inline",
                              onClick: (e) => {
                                d({
                                  currentPlan: h.pricePlan,
                                  event: e,
                                  getPricingUrl: c,
                                  source: "usage_settings_plan_row",
                                })
                              },
                              children: e,
                            }),
                          }),
                      },
                    })
                  : (0, n.jsx)(p.A, {
                      id: "settings.usage.personalLimits.sharedDescription",
                      defaultMessage:
                        "Shared across Codex, Work, Workspace Agents, and ChatGPT for Excel. Chat conversations are not included.",
                      description:
                        "Explains the products that share a Consumer or Business user's included-plan usage limits. Ordinary Chat conversations do not count.",
                    }),
            })),
            (l[4] = c),
            (l[5] = d),
            (l[6] = h),
            (l[7] = o),
            (l[8] = u),
            (l[9] = m),
            (l[10] = r))
          : (r = l[10]),
        r
      )
    }
    function tK(e) {
      let t,
        s,
        a,
        o,
        c,
        m,
        x,
        y,
        b,
        _,
        v,
        w,
        T,
        N,
        D,
        U,
        F,
        q,
        H,
        G,
        W,
        B,
        $,
        V,
        Y,
        X = (0, i.c)(126),
        { isPolling: K } = e,
        Z = (0, l.KC)()
      X[0] !== Z?.visibleSettingsSections
        ? ((t = Z?.visibleSettingsSections.some(tJ) ?? !1), (X[0] = Z?.visibleSettingsSections), (X[1] = t))
        : (t = X[1])
      let Q = t,
        { data: J, isLoading: ee, isError: et } = (0, g.Ul)(M.Ix),
        {
          autoReloadSettings: es,
          canManageCreditSettings: en,
          canPurchaseBusinessCredits: ei,
          canViewCreditSettings: ea,
          isUsageSettingsVisible: er,
          isUsageSettingsAccessLoading: el,
          plan: eo,
        } = (0, u.AH)(J?.credits?.balance != null, "usage"),
        eu = K && er
      X[2] !== eu ? ((s = { enabled: eu }), (X[2] = eu), (X[3] = s)) : (s = X[3])
      let { refetch: ec } = (0, g.Ul)(M.qR, s),
        ed = (0, E.I)(),
        eh = (0, A.AS)(),
        em = (0, A.Zj)("1405076622"),
        ep = (0, A.Zj)("1748121887"),
        ef = (0, S.k)(ed),
        [ex, ey] = (0, r.useState)(null),
        [eb, e_] = (0, r.useState)(null)
      X[4] !== eo ? ((a = (0, h.uz)(eo)), (X[4] = eo), (X[5] = a)) : (a = X[5])
      let ev = a,
        ew = eo === R.x.ENT26
      X[6] !== em || X[7] !== eo ? ((o = (0, I.U9)(eo, em)), (X[6] = em), (X[7] = eo), (X[8] = o)) : (o = X[8])
      let eA = o,
        ej = (ep || !1) && eA,
        eC = ev && er && !el
      X[9] !== en ? ((c = { enabled: en }), (X[9] = en), (X[10] = c)) : (c = X[10])
      let { data: ek } = (0, C.sD)(c)
      X[11] !== ek?.one_time.tiers
        ? ((m = ek?.one_time.tiers.reduce(tQ, 0) ?? 0), (X[11] = ek?.one_time.tiers), (X[12] = m))
        : (m = X[12])
      let eS = m
      X[13] !== ek?.auto_reload?.tiers
        ? ((x = ek?.auto_reload?.tiers.reduce(tZ, 0) ?? 0), (X[13] = ek?.auto_reload?.tiers), (X[14] = x))
        : (x = X[14])
      let eM = x
      X[15] !== en ? ((y = { enabled: en, refetchOnWindowFocus: "always" }), (X[15] = en), (X[16] = y)) : (y = X[16])
      let { data: eE, isPending: eT } = (0, C.Ko)(y),
        eP = (eE?.payment_methods.length ?? 0) > 0
      X[17] !== en || X[18] !== eP || X[19] !== eE || X[20] !== eh
        ? ((b = !1), (X[17] = en), (X[18] = eP), (X[19] = eE), (X[20] = eh), (X[21] = b))
        : (b = X[21])
      let eN = b,
        eI = en && !0
      X[22] !== eI
        ? ((_ = { enabled: eI, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (X[22] = eI), (X[23] = _))
        : (_ = X[23])
      let { data: eR, isPending: eO, isError: eD, refetch: eU } = (0, C.q7)(_)
      X[24] !== eR || X[25] !== eN || X[26] !== en || X[27] !== eP
        ? ((v = en && (eP || eN || (eR?.isEnabled === !0 && (0, k.Zu)(eR.autoReloadCreditDiscountPolicy)))),
          (X[24] = eR),
          (X[25] = eN),
          (X[26] = en),
          (X[27] = eP),
          (X[28] = v))
        : (v = X[28])
      let eF = v
      X[29] !== eC || X[30] !== K
        ? ((w = { isPolling: K, enabled: eC }), (X[29] = eC), (X[30] = K), (X[31] = w))
        : (w = X[31])
      let { data: eq, isLoading: eH, isError: eG, refetch: ez } = (0, C.Xb)(w)
      X[32] !== eq
        ? ((T = null != (0, L.Li)(eq) && eq?.effective_monthly_limit?.enforcement_mode === "HARD_CAP"),
          (X[32] = eq),
          (X[33] = T))
        : (T = X[33])
      let eW = T,
        eB = eC && eW
      X[34] !== eB ? ((N = { enabled: eB }), (X[34] = eB), (X[35] = N)) : (N = X[35])
      let { data: e$, isLoading: eV, isError: eY, refetch: eX } = (0, C.sl)(N),
        eK = e$?.kind === "openai_native",
        eZ = eC && eW && eK
      X[36] !== eZ ? ((D = { enabled: eZ }), (X[36] = eZ), (X[37] = D)) : (D = X[37])
      let { data: eQ, isLoading: eJ, isError: e0, refetch: e1 } = (0, C.w8)(D),
        e2 = (0, C.wU)()
      X[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = { analyticsSurface: "wham_usage_dashboard" }), (X[38] = U))
        : (U = X[38])
      let { enableAutoTopUpMutation: e3, updateAutoTopUpMutation: e5, disableAutoTopUpMutation: e4 } = (0, C.MU)(U)
      if (!er && !el) return null
      let e6 = ev ? (eH && null == eq) || (eB && eV && null == e$) || (eW && eK && eJ && null == eQ) : ee && null == J,
        e9 = ev ? (eG && null == eq) || (eB && eY && null == e$) || (eW && eK && e0 && null == eQ) : et && null == J
      X[39] !== eW || X[40] !== ev || X[41] !== ec || X[42] !== e1 || X[43] !== ez || X[44] !== eX || X[45] !== eK
        ? ((F = () => {
            ev ? (ez(), eW && (eX(), eK && e1())) : ec()
          }),
          (X[39] = eW),
          (X[40] = ev),
          (X[41] = ec),
          (X[42] = e1),
          (X[43] = ez),
          (X[44] = eX),
          (X[45] = eK),
          (X[46] = F))
        : (F = X[46])
      let e7 = F
      X[47] !== J
        ? ((q = () => {
            ey((e) => e ?? J ?? null)
          }),
          (X[47] = J),
          (X[48] = q))
        : (q = X[48])
      let te = q
      X[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = () => {
            ey(null)
          }),
          (X[49] = H))
        : (H = X[49])
      let tt = H
      X[50] !== J || X[51] !== ex || X[52] !== ef
        ? ((G = () => {
            let e = { animationComplete: !1, rateLimitStatus: ex ?? J ?? null, refreshComplete: !1 }
            ;(ey(null),
              e_(e),
              ef.start(() => {
                e_((t) => (t === e ? { ...t, animationComplete: !0 } : t))
              }))
          }),
          (X[50] = J),
          (X[51] = ex),
          (X[52] = ef),
          (X[53] = G))
        : (G = X[53])
      let ts = G
      X[54] !== J || X[55] !== eb
        ? ((W =
            null != eb &&
            (function (e, t) {
              return (
                t2(e?.rate_limit?.primary_window, t?.rate_limit?.primary_window) ||
                t2(e?.rate_limit?.secondary_window, t?.rate_limit?.secondary_window) ||
                (!t1(e) && !t1(t))
              )
            })(eb.rateLimitStatus, J ?? null)),
          (X[54] = J),
          (X[55] = eb),
          (X[56] = W))
        : (W = X[56])
      let tn = W
      null != eb && eb.animationComplete && !eb.refreshComplete && tn && e_({ ...eb, refreshComplete: !0 })
      let ti = null != eb && !eb.refreshComplete && (!eb.animationComplete || !tn)
      if (el || e9 || e6) {
        let e,
          t,
          s = null
        if (!el && e9) {
          let t, i, a
          ;(X[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(p.A, {
                id: "settings.usage.load.error",
                defaultMessage: "Could not load usage settings.",
                description: "Error label shown when usage settings cannot be fetched",
              })),
              (X[57] = t))
            : (t = X[57]),
            (e = t),
            X[58] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(p.A, {
                  id: "settings.usage.load.retry",
                  defaultMessage: "Retry",
                  description: "Retry button for usage settings fetch errors",
                })),
                (X[58] = i))
              : (i = X[58]),
            X[59] !== e7
              ? ((a = (0, n.jsx)(f.$, { color: "secondary", size: "toolbar", onClick: e7, children: i })),
                (X[59] = e7),
                (X[60] = a))
              : (a = X[60]),
            (s = a))
        } else {
          let t
          ;(X[61] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(p.A, {
                id: "settings.usage.load.loading",
                defaultMessage: "Loading usage settings…",
                description: "Loading label while access to Usage settings and their data are being resolved",
              })),
              (X[61] = t))
            : (t = X[61]),
            (e = t))
        }
        return (
          X[62] !== s || X[63] !== e
            ? ((t = (0, n.jsx)(t0, { rowLabel: e, rowControl: s })), (X[62] = s), (X[63] = e), (X[64] = t))
            : (t = X[64]),
          t
        )
      }
      let ta = null
      if ((0, h.Hw)(eo)) {
        let e,
          t = J ?? null
        ;(X[65] !== ei || X[66] !== K || X[67] !== t
          ? ((e = (0, n.jsx)(tz, { canPurchaseCredits: ei, isPolling: K, rateLimitStatus: t })),
            (X[65] = ei),
            (X[66] = K),
            (X[67] = t),
            (X[68] = e))
          : (e = X[68]),
          (ta = e))
      } else if (eF && null != eR) {
        let e,
          t = J?.credits ?? null
        ;(X[69] !== eR ||
        X[70] !== e4 ||
        X[71] !== e3 ||
        X[72] !== eP ||
        X[73] !== eM ||
        X[74] !== eS ||
        X[75] !== t ||
        X[76] !== e5
          ? ((e = (0, n.jsx)(O.be, {
              serverState: eR,
              hasSavedPaymentMethod: eP,
              maximumCreditPurchaseDiscountPercent: eS,
              maximumAutoReloadDiscountPercent: eM,
              creditDetails: t,
              enableAutoTopUpMutation: e3,
              updateAutoTopUpMutation: e5,
              disableAutoTopUpMutation: e4,
            })),
            (X[69] = eR),
            (X[70] = e4),
            (X[71] = e3),
            (X[72] = eP),
            (X[73] = eM),
            (X[74] = eS),
            (X[75] = t),
            (X[76] = e5),
            (X[77] = e))
          : (e = X[77]),
          (ta = e))
      } else if (ea) {
        let e,
          t,
          s,
          i = en && (eT || (eI && eO))
        X[78] !== en || X[79] !== e4 || X[80] !== es
          ? ((e =
              en || null == es
                ? void 0
                : { isEnabled: es.isEnabled, isPending: e4.isPending, onDisable: e4.mutateAsync }),
            (X[78] = en),
            (X[79] = e4),
            (X[80] = es),
            (X[81] = e))
          : (e = X[81])
        let a = i ? 0 : eS,
          r = J?.credits ?? null,
          l = null == eE ? void 0 : eP
        ;(X[82] !== eF || X[83] !== eD || X[84] !== eU
          ? ((t = eF
              ? (0, n.jsx)(P.ic, {
                  label: eD
                    ? (0, n.jsx)(p.A, {
                        id: "settings.usage.autoTopUp.load.error",
                        defaultMessage: "Could not load automatic reload settings",
                        description:
                          "Error shown in the Credits section when automatic credit reload settings fail to load; usage limits and the credit balance remain available",
                      })
                    : (0, n.jsx)(d.j, {
                        children: (0, n.jsx)(p.A, {
                          id: "settings.usage.autoTopUp.load.loading",
                          defaultMessage: "Loading automatic reload settings…",
                          description:
                            "Loading status for automatic credit reload controls in the Credits section; usage limits and the credit balance remain available",
                        }),
                      }),
                  control: eD
                    ? (0, n.jsx)(f.$, {
                        color: "secondary",
                        size: "toolbar",
                        onClick: () => void eU(),
                        children: (0, n.jsx)(p.A, {
                          id: "settings.usage.load.retry",
                          defaultMessage: "Retry",
                          description: "Retry button for usage settings fetch errors",
                        }),
                      })
                    : void 0,
                })
              : null),
            (X[82] = eF),
            (X[83] = eD),
            (X[84] = eU),
            (X[85] = t))
          : (t = X[85]),
          X[86] !== en || X[87] !== e || X[88] !== a || X[89] !== r || X[90] !== l || X[91] !== t
            ? ((s = (0, n.jsx)(O.CK, {
                autoReload: e,
                canPurchaseCredits: en,
                maximumCreditPurchaseDiscountPercent: a,
                creditDetails: r,
                hasSavedPaymentMethod: l,
                children: t,
              })),
              (X[86] = en),
              (X[87] = e),
              (X[88] = a),
              (X[89] = r),
              (X[90] = l),
              (X[91] = t),
              (X[92] = s))
            : (s = X[92]),
          (ta = s))
      }
      X[93] !== ei ||
      X[94] !== ta ||
      X[95] !== eW ||
      X[96] !== Q ||
      X[97] !== ev ||
      X[98] !== K ||
      X[99] !== ti ||
      X[100] !== ew ||
      X[101] !== eJ ||
      X[102] !== eo ||
      X[103] !== J ||
      X[104] !== ex ||
      X[105] !== ed ||
      X[106] !== ef ||
      X[107] !== eb?.rateLimitStatus ||
      X[108] !== ej ||
      X[109] !== e2 ||
      X[110] !== eQ ||
      X[111] !== eq ||
      X[112] !== e$
        ? ((B = ev
            ? (0, n.jsx)(e8, {
                isPolling: K,
                isUsdWorkspace: ew,
                rateLimitStatus: J ?? null,
                showEnterpriseMonthlyUsageLimit: !0,
                showUsageBillingLayout: ej,
                canRequestEnterpriseMonthlyUsageLimit: eW,
                workspaceRequestPolicy: e$,
                workspaceMonthlyUsage: eq ?? null,
                workspaceAdminRequests: eQ ?? null,
                isWorkspaceAdminRequestsLoading: eJ,
                isSavingWorkspaceAdminRequest: e2.isPending,
                saveWorkspaceAdminRequest: e2.mutateAsync,
              })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  Q ? null : (0, n.jsx)(z, { plan: eo }),
                  (0, n.jsx)(e8, {
                    isPolling: K,
                    header: (0, n.jsx)(tY, { plan: eo }),
                    fullWidth: !0,
                    showMonthlyUsageLimit: !(0, h.Hw)(eo),
                    isResetFillActive: ti,
                    rateLimitStatus: J ?? null,
                    resetFillAnimation: ef,
                    resetFillRateLimitStatus: eb?.rateLimitStatus,
                    purchaseCreditsAction: ei ? (0, n.jsx)(j, {}) : null,
                    showResetPurchase: null == ex && !ti,
                  }),
                  (0, n.jsx)(tC, { rateLimitStatus: J ?? null, reduceMotion: ed }),
                  ta,
                ],
              })),
          (X[93] = ei),
          (X[94] = ta),
          (X[95] = eW),
          (X[96] = Q),
          (X[97] = ev),
          (X[98] = K),
          (X[99] = ti),
          (X[100] = ew),
          (X[101] = eJ),
          (X[102] = eo),
          (X[103] = J),
          (X[104] = ex),
          (X[105] = ed),
          (X[106] = ef),
          (X[107] = eb?.rateLimitStatus),
          (X[108] = ej),
          (X[109] = e2),
          (X[110] = eQ),
          (X[111] = eq),
          (X[112] = e$),
          (X[113] = B))
        : (B = X[113])
      let tr = eF || ea
      return (
        X[114] !== K || X[115] !== tr
          ? (($ = (0, n.jsx)(eg, { isPolling: K, showCreditPreference: tr })),
            (X[114] = K),
            (X[115] = tr),
            (X[116] = $))
          : ($ = X[116]),
        X[117] !== te || X[118] !== ts || X[119] !== ev || X[120] !== ti
          ? ((V = ev
              ? null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(eL, {
                      isResetFillActive: ti,
                      onResetAttemptCancel: tt,
                      onResetAttemptStart: te,
                      onResetComplete: ts,
                    }),
                    null,
                  ],
                })),
            (X[117] = te),
            (X[118] = ts),
            (X[119] = ev),
            (X[120] = ti),
            (X[121] = V))
          : (V = X[121]),
        X[122] !== B || X[123] !== $ || X[124] !== V
          ? ((Y = (0, n.jsxs)(n.Fragment, { children: [B, $, V] })),
            (X[122] = B),
            (X[123] = $),
            (X[124] = V),
            (X[125] = Y))
          : (Y = X[125]),
        Y
      )
    }
    function tZ(e, t) {
      return Math.max(e, t.percent_off)
    }
    function tQ(e, t) {
      return Math.max(e, t.percent_off)
    }
    function tJ(e) {
      let { slug: t } = e
      return "billing" === t
    }
    function t0(e) {
      let t,
        s = (0, i.c)(3),
        { rowLabel: a, rowControl: r } = e
      return (
        s[0] !== r || s[1] !== a
          ? ((t =
              null == r
                ? (0, n.jsx)(d.j, { children: a })
                : (0, n.jsx)(T.X, {
                    children: (0, n.jsx)(T.X.Content, {
                      children: (0, n.jsx)(N.t, {
                        children: (0, n.jsx)(P.ic, { className: "gap-6", label: a, control: r }),
                      }),
                    }),
                  })),
            (s[0] = r),
            (s[1] = a),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function t1(e) {
      return e?.rate_limit?.primary_window != null || e?.rate_limit?.secondary_window != null
    }
    function t2(e, t) {
      return null == e || null == t
        ? null != e || null != t
        : e.used_percent !== t.used_percent ||
            e.reset_at !== t.reset_at ||
            e.limit_window_seconds !== t.limit_window_seconds
    }
    var t3 = s("RQya"),
      t5 = s("EShr"),
      t4 = s("jxU8")
    function t6(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c = (0, i.c)(17)
      c[0] !== e ? (({ section: s, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = s)) : ((t = c[1]), (s = c[2]))
      let d = void 0 === s ? "usage" : s,
        h = (0, l.KC)()
      c[3] !== h?.visibleSettingsSections
        ? ((a = h?.visibleSettingsSections.filter(t8).map(t9)), (c[3] = h?.visibleSettingsSections), (c[4] = a))
        : (a = c[4])
      let m = a,
        g = "analytics" === d,
        p = h?.showUsageOnlyLabel
      c[5] !== p
        ? ((r = (0, n.jsx)(ee.gl, { slug: "usage", showUsageOnlyLabel: p, showChatGptDataControlsLabel: !1 })),
          (c[5] = p),
          (c[6] = r))
        : (r = c[6])
      let f = null != m && m.length > 1 ? "default" : t.density
      return (
        c[7] !== d || c[8] !== m
          ? ((o = null != m && m.length > 1 ? (0, n.jsx)(t7, { tabs: m, section: d }) : void 0),
            (c[7] = d),
            (c[8] = m),
            (c[9] = o))
          : (o = c[9]),
        c[10] !== t || c[11] !== d || c[12] !== g || c[13] !== r || c[14] !== f || c[15] !== o
          ? ((u = (0, n.jsx)(t4.P, {
              ...t,
              containTouchOverscroll: g,
              scrollResetKey: d,
              title: r,
              subtitle: void 0,
              density: f,
              subtitleClassName: "whitespace-normal",
              stickyControls: o,
            })),
            (c[10] = t),
            (c[11] = d),
            (c[12] = g),
            (c[13] = r),
            (c[14] = f),
            (c[15] = o),
            (c[16] = u))
          : (u = c[16]),
        u
      )
    }
    function t9(e) {
      let { slug: t } = e
      return {
        id: t,
        label:
          "usage" === t
            ? (0, n.jsx)(p.A, {
                id: "settings.usage.overviewTab",
                defaultMessage: "Overview",
                description: "Tab for current usage limits and billing controls",
              })
            : (0, n.jsx)(ee.s, { slug: t }),
      }
    }
    function t8(e) {
      let { slug: t } = e
      return (0, m.yk)(t)
    }
    function t7(e) {
      let t,
        s,
        a,
        o,
        u,
        c = (0, i.c)(14),
        { tabs: d, section: h } = e,
        { onSelectSection: m, restoreUsageTabFocus: g } = (0, l.KC)(),
        p = (0, r.useRef)(null)
      ;(c[0] !== g
        ? ((t = () => {
            let e = requestAnimationFrame(() => g(p.current))
            return () => cancelAnimationFrame(e)
          }),
          (c[0] = g),
          (c[1] = t))
        : (t = c[1]),
        c[2] !== g || c[3] !== h ? ((s = [g, h]), (c[2] = g), (c[3] = h), (c[4] = s)) : (s = c[4]),
        (0, r.useLayoutEffect)(t, s))
      let f = (0, D.A)()
      return (
        c[5] !== m
          ? ((a = (e) => {
              m(e, void 0, !0)
            }),
            (c[5] = m),
            (c[6] = a))
          : (a = c[6]),
        c[7] !== f
          ? ((o = f.formatMessage({
              id: "settings.usage.tabsLabel",
              defaultMessage: "Usage sections",
              description: "Accessible label for the overview and analytics tabs in Usage settings",
            })),
            (c[7] = f),
            (c[8] = o))
          : (o = c[8]),
        c[9] !== h || c[10] !== a || c[11] !== o || c[12] !== d
          ? ((u = (0, n.jsx)("div", {
              ref: p,
              children: (0, n.jsx)(t5.T, { options: d, selectedId: h, size: "toolbar", onSelect: a, ariaLabel: o }),
            })),
            (c[9] = h),
            (c[10] = a),
            (c[11] = o),
            (c[12] = d),
            (c[13] = u))
          : (u = c[13]),
        u
      )
    }
    var se = s("sQDv")
    let st = {
      usage: ex.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_USAGE,
      analytics: ex.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_ANALYTICS,
      "consumer-view": ex.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_CONSUMER_VIEW,
      "usage-code-review": ex.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_CODE_REVIEW,
    }
    function ss(e) {
      let t,
        s = (0, i.c)(3),
        { section: a } = e,
        r = null == a ? void 0 : st[a],
        l = null != a
      return (
        s[0] !== r || s[1] !== l
          ? ((t = (0, n.jsx)(se.V, { routeTemplate: "/settings/usage", settingsTab: r, enabled: l })),
            (s[0] = r),
            (s[1] = l),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    let sn = {
      usage: function (e) {
        let t,
          s = (0, i.c)(2),
          { isPolling: a } = e,
          r = void 0 === a || a
        return (
          s[0] !== r
            ? ((t = (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(tK, { isPolling: r })] })),
              (s[0] = r),
              (s[1] = t))
            : (t = s[1]),
          t
        )
      },
      analytics: (0, c.e)(
        async () =>
          (await Promise.all([s.e(817089), s.e(556836), s.e(989648)]).then(s.bind(s, "Qpbb"))).UsageAnalyticsSettings,
      ),
      "consumer-view": (0, c.e)(
        async () =>
          (await Promise.all([s.e(817089), s.e(556836), s.e(174942)]).then(s.bind(s, "vbFU"))).ConsumerViewSettings,
      ),
      "usage-code-review": (0, c.e)(
        async () => (await Promise.all([s.e(817089), s.e(700331)]).then(s.bind(s, "JKAM"))).UsageCodeReviewSettings,
      ),
    }
    function si(e) {
      let t = (0, i.c)(3),
        { visibleSettingsSections: s } = (0, l.KC)(),
        [c] = (0, l.ok)(),
        g = (0, l.zy)(),
        p = (0, m.yx)(c.get("tab")),
        f = s.map(sr).filter(m.yk),
        { plan: x } = (0, u.AH)(),
        y = "usage" !== p || 1 !== f.length || null == x || (0, h.uz)(x) ? "default" : "compact",
        b = (0, m.Qm)(p, g.search)
      if (`${g.pathname}${g.search}` !== b) {
        let e,
          s = `${b}${g.hash}`
        return (
          t[0] !== g.state || t[1] !== s
            ? ((e = (0, n.jsx)(l.C5, { to: s, state: g.state, replace: !0 })), (t[0] = g.state), (t[1] = s), (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      return (0, n.jsxs)(t6, {
        section: p,
        density: y,
        children: [
          (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(ss, { section: f.includes(p) ? p : null }) }),
          f.map((e) => {
            let t = sn[e]
            return (0, n.jsx)(
              "div",
              {
                hidden: e !== p,
                children: (0, n.jsx)("div", {
                  className: (0, a.A)("flex flex-col", "compact" === y ? "gap-5.5" : "gap-10"),
                  children: (0, n.jsx)(o.t, {
                    name: "UsageSettingsPanel",
                    fallback: sa,
                    children: (0, n.jsx)(r.Suspense, {
                      fallback: (0, n.jsx)(d.j, {}),
                      children: (0, n.jsx)(t3.Z, {
                        section: e,
                        isSelected: e === p,
                        children: (0, n.jsx)(t, { isPolling: e === p }),
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
    function sa(e) {
      return (0, n.jsx)(o.j, { error: e.error, resetError: () => e.resetError(), stayOnPage: !0 })
    }
    function sr(e) {
      let { slug: t } = e
      return t
    }
  },
  Myba(e, t, s) {
    var n = s("QosV"),
      i = s("T0Rc"),
      a = s("S2r0"),
      r = s("EOo5"),
      l = s("rvFo"),
      o = s("HFSu")
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
        h,
        m = (0, n.c)(24),
        { days: g, enabled: p, isPolling: f, scope: x } = t,
        y = void 0 === x ? "workspace" : x,
        { accountId: b, authMethod: A, userId: j } = (0, r.As)()
      m[0] !== g ? ((s = _(g)), (m[0] = g), (m[1] = s)) : (s = m[1])
      let { endDate: C, startDate: k } = s
      ;(m[2] !== b || m[3] !== e || m[4] !== C || m[5] !== y || m[6] !== k || m[7] !== j
        ? ((a = [...u, e, b, j, y, k, C]),
          (m[2] = b),
          (m[3] = e),
          (m[4] = C),
          (m[5] = y),
          (m[6] = k),
          (m[7] = j),
          (m[8] = a))
        : (a = m[8]),
        m[9] !== e || m[10] !== C || m[11] !== y || m[12] !== k
          ? ((c = () =>
              "skills" === e
                ? o.CodexRequest.safeGet("/wham/analytics/daily-skill-usage-metrics", {
                    parameters: {
                      query: {
                        start_date: k,
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
                        start_date: k,
                        end_date: C,
                        group_by: "day",
                        top_plugin_limit: "workspace" === y ? 8 : 10,
                        workspace_user: !0,
                      },
                    },
                  })),
            (m[9] = e),
            (m[10] = C),
            (m[11] = y),
            (m[12] = k),
            (m[13] = c))
          : (c = m[13]),
        m[14] !== C || m[15] !== y || m[16] !== k
          ? ((d = (e) => {
              var t, s, n, i
              let a, r, l, o
              return (
                (t = e),
                (s = k),
                (n = C),
                (i = y),
                (a = new Map()),
                (r = new Map()),
                (l = new Map(t.data.map((e) => [e.date, e]))),
                {
                  total: (o = v(s, n).map((e) => {
                    let t = l.get(e)
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
                        ;((t = "" === s || "other" === s || "other" === t.toLowerCase() ? "other" : (r.get(s) ?? t)),
                          r.set(s, t))
                      }
                      let s = a.get(t)
                      ;((n[t] = (n[t] ?? 0) + e.invocation_counts),
                        a.set(t, {
                          key: t,
                          name: s?.name ?? e.display_name,
                          total: (s?.total ?? 0) + e.invocation_counts,
                        }))
                    }
                    return { date: t.date, total: w(n), values: n }
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
            (m[14] = C),
            (m[15] = y),
            (m[16] = k),
            (m[17] = d))
          : (d = m[17]))
      let S = p && "chatgpt" === A && null != b && null != j,
        M = !!(void 0 === f || f) && l.D.ONE_MINUTE
      return (
        m[18] !== a || m[19] !== c || m[20] !== d || m[21] !== S || m[22] !== M
          ? ((h = {
              queryKey: a,
              queryFn: c,
              select: d,
              enabled: S,
              refetchInterval: M,
              staleTime: l.D.ONE_MINUTE,
              refetchOnWindowFocus: !1,
              retry: !1,
            }),
            (m[18] = a),
            (m[19] = c),
            (m[20] = d),
            (m[21] = S),
            (m[22] = M),
            (m[23] = h))
          : (h = m[23]),
        (0, i.I)(h)
      )
    }
    function h(e, t) {
      return o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-token-usage-breakdown", {
        additionalHeaders: { "x-openai-codex-usage-categories": "1" },
        parameters: { query: { start_date: e, end_date: t, group_by: "day" } },
      })
    }
    function m(e) {
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
              let t = f(e)
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
        total: w(n),
        units: t,
        dataFreshnessTimestamp: s,
        series: Object.entries(n).map(([e, t]) => ({ key: e, label: e, total: t })),
        data: e,
      }
    }
    function p(
      {
        auth: e,
        days: t,
        enabled: s = !0,
        isPolling: n = !0,
        refetchInterval: i = l.D.ONE_MINUTE,
        retry: a = !1,
        scope: r,
      },
      o,
    ) {
      let { endDate: c, startDate: d } = _(t)
      return {
        query: { start_date: d, end_date: c, group_by: "day", workspace_user: !0 },
        queryKey: [...u, o, e.accountId, e.userId, r, d, c],
        enabled: s && "chatgpt" === e.authMethod && null != e.accountId && null != e.userId,
        refetchInterval: !!n && i,
        staleTime: l.D.ONE_MINUTE,
        refetchOnWindowFocus: !1,
        retry: a,
      }
    }
    function f(e) {
      return e.startsWith("work_") ? "work" : "codex"
    }
    function x(e) {
      let t = e.trim().toLowerCase()
      return "codex-auto-review" === t || "other" === t ? "other" : e
    }
    function y(e, t) {
      let s = w(e),
        n = Math.max(0, (t ?? s) - s)
      n > 0 && (e.other = (e.other ?? 0) + n)
    }
    function b(e, t) {
      return {
        total: e.reduce((e, t) => e + t.total, 0),
        dataFreshnessTimestamp: null,
        series: t
          .map((t) => ({ key: t, name: t, total: e.reduce((e, s) => e + (s.values[t] ?? 0), 0) }))
          .filter(({ total: e }) => e > 0),
        data: e,
      }
    }
    function _(e, t = 0) {
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
    function w(e) {
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
            m = (0, n.c)(19),
            { days: g, enabled: p, isPolling: f, scope: y } = e,
            b = void 0 === y ? "workspace" : y,
            { accountId: w, authMethod: A, userId: j } = (0, r.As)()
          m[0] !== g ? ((t = _(g)), (m[0] = g), (m[1] = t)) : (t = m[1])
          let { endDate: C, startDate: k } = t
          ;(m[2] !== w || m[3] !== C || m[4] !== b || m[5] !== k || m[6] !== j
            ? ((s = "business" === b ? [...u, "business-usage", w, j, k, C] : [...u, "token-history", w, j, b, k, C]),
              (m[2] = w),
              (m[3] = C),
              (m[4] = b),
              (m[5] = k),
              (m[6] = j),
              (m[7] = s))
            : (s = m[7]),
            m[8] !== C || m[9] !== b || m[10] !== k
              ? ((a = () =>
                  "business" === b
                    ? h(k, C)
                    : o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-token-usage-breakdown", {
                        additionalHeaders: { "x-openai-codex-usage-categories": "1" },
                        parameters: {
                          query: {
                            start_date: k,
                            end_date: C,
                            group_by: "day",
                            breakdown_by: ["model"],
                            modes: ["codex", "work"],
                          },
                        },
                      })),
                (c = (e) => {
                  var t, s, n, i
                  let a, r, l, o
                  return (
                    (t = e),
                    (s = k),
                    (n = C),
                    (i = "workspace" !== b),
                    (a = {}),
                    (r = new Map(t.data.map((e) => [e.date, e]))),
                    (l = 0),
                    (o = v(s, n).map((e) => {
                      let t = r.get(e),
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
                          r = e.uncached_text_input_tokens ?? 0,
                          d = e.cached_text_input_tokens ?? 0,
                          h = e.text_output_tokens ?? 0,
                          m = ("model" in e ? e.text_total_tokens : void 0) || r + d + h
                        ;((s.uncachedInputTokens += r),
                          (s.cachedInputTokens += d),
                          (s.outputTokens += h),
                          (s.totalTokens += m),
                          (n[t] = s),
                          (a[t] = (a[t] ?? 0) + m),
                          (l += m),
                          (o += r),
                          (u += d),
                          (c += h))
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
                      total: l,
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
                (m[8] = C),
                (m[9] = b),
                (m[10] = k),
                (m[11] = a),
                (m[12] = c))
              : ((a = m[11]), (c = m[12])))
          let S = p && "consumer" !== b && "chatgpt" === A && null != w && null != j,
            M = !!(void 0 === f || f) && l.D.ONE_MINUTE
          return (
            m[13] !== s || m[14] !== a || m[15] !== c || m[16] !== S || m[17] !== M
              ? ((d = {
                  queryKey: s,
                  queryFn: a,
                  select: c,
                  enabled: S,
                  refetchInterval: M,
                  staleTime: l.D.ONE_MINUTE,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (m[13] = s),
                (m[14] = a),
                (m[15] = c),
                (m[16] = S),
                (m[17] = M),
                (m[18] = d))
              : (d = m[18]),
            (0, i.I)(d)
          )
        },
        EN: function (e) {
          let { query: t, ...s } = p(e, "code-review")
          return (0, a.j)({
            ...s,
            queryFn: () =>
              o.CodexRequest.safeGet("/wham/analytics/daily-code-review-metrics", { parameters: { query: t } }),
            enabled: s.enabled && "workspace" !== e.scope,
          })
        },
        F7: function (e) {
          let { query: t, ...s } = p(e, "turns")
          return (0, a.j)({
            ...s,
            queryFn: () =>
              o.CodexRequest.safeGet("/wham/analytics/daily-workspace-usage-counts", { parameters: { query: t } }),
            select: (e) =>
              (function (e, t, s) {
                let n = new Map(e.data.map((e) => [e.date, e])),
                  i = v(t, s).filter((e) => e !== s || n.has(e)),
                  a = {},
                  r = new Map()
                for (let t of e.data) {
                  let e = {}
                  for (let s of t.models ?? []) {
                    let t = x(s.model)
                    e[t] = (e[t] ?? 0) + (s.turns ?? 0)
                  }
                  for (let [s, n] of (y(e, t.totals?.turns), r.set(t.date, e), Object.entries(e)))
                    a[s] = (a[s] ?? 0) + n
                }
                let l = Object.entries(a)
                    .filter(([, e]) => e > 0)
                    .sort(
                      ([e, t], [s, n]) => Number("other" === e) - Number("other" === s) || n - t || e.localeCompare(s),
                    )
                    .map(([e]) => e),
                  o = i.map((e) => {
                    let t = r.get(e),
                      s = Object.fromEntries(l.map((e) => [e, t?.[e] ?? 0]))
                    return { date: e, total: w(s), values: s }
                  }),
                  u = i.map((e) => {
                    let t = n.get(e),
                      s = Object.fromEntries(
                        Object.entries(c).map(([e, s]) => [
                          e,
                          t?.clients.reduce((e, t) => e + (s.includes(t.client_id) ? t.turns : 0), 0) ?? 0,
                        ]),
                      )
                    return (y(s, t?.totals?.turns), { date: e, total: w(s), values: s })
                  }),
                  d = Object.keys(c)
                return (
                  u.some(({ values: e }) => null != e.other) && d.push("other"),
                  { byModel: b(o, l), bySurface: b(u, d) }
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
            { credits: d, enabled: h, isPolling: m } = e,
            { accountId: g, authMethod: p, userId: f } = (0, r.As)(),
            x = Math.round(1e6 * d) / 1e6
          ;(c[0] !== g || c[1] !== x || c[2] !== f
            ? ((t = [...u, "credit-estimate", g, f, x]), (c[0] = g), (c[1] = x), (c[2] = f), (c[3] = t))
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
          let y = h && x > 0 && "chatgpt" === p && null != g && null != f,
            b = !!(void 0 === m || m) && l.D.THIRTY_SECONDS
          return (
            c[6] !== t || c[7] !== s || c[8] !== y || c[9] !== b
              ? ((a = {
                  queryKey: t,
                  queryFn: s,
                  enabled: y,
                  refetchInterval: b,
                  staleTime: l.D.THIRTY_SECONDS,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (c[6] = t),
                (c[7] = s),
                (c[8] = y),
                (c[9] = b),
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
            m = (0, n.c)(26),
            { balanceUnit: p, breakdown: x, days: y, enabled: b, isPolling: w, scope: A } = e,
            j = void 0 === A ? "workspace" : A,
            { accountId: C, authMethod: k, userId: S } = (0, r.As)()
          m[0] !== y ? ((t = _(y)), (m[0] = y), (m[1] = t)) : (t = m[1])
          let { endDate: M, startDate: E } = t
          ;(m[2] !== C || m[3] !== p || m[4] !== x || m[5] !== M || m[6] !== j || m[7] !== E || m[8] !== S
            ? ((s =
                "business" === j
                  ? [...u, "business-usage", C, S, E, M]
                  : [
                      ...u,
                      "credit-history",
                      C,
                      S,
                      j,
                      ...("consumer" === j ? [] : [E, M, x]),
                      ...("workspace" === j && null != p ? [p] : []),
                    ]),
              (m[2] = C),
              (m[3] = p),
              (m[4] = x),
              (m[5] = M),
              (m[6] = j),
              (m[7] = E),
              (m[8] = S),
              (m[9] = s))
            : (s = m[9]),
            m[10] !== p || m[11] !== x || m[12] !== M || m[13] !== j || m[14] !== E
              ? ((a = async () => {
                  if ("consumer" === j)
                    return o.CodexRequest.safeGet("/wham/usage/credit-usage-events", {
                      additionalHeaders: { "x-openai-codex-usage-categories": "1" },
                    })
                  if ("business" === j) return h(E, M)
                  let e = await o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-credit-usage", {
                    parameters: {
                      query: {
                        start_date: E,
                        end_date: M,
                        breakdown: "reasoning" === x ? "reasoning_effort" : x,
                        ...(null == p ? {} : { balance_unit: p }),
                      },
                    },
                  })
                  if ((e.unit ?? "credit") !== (p ?? "credit"))
                    throw Error("Usage history response has an unexpected balance unit")
                  return e
                }),
                (m[10] = p),
                (m[11] = x),
                (m[12] = M),
                (m[13] = j),
                (m[14] = E),
                (m[15] = a))
              : (a = m[15]),
            m[16] !== x || m[17] !== M || m[18] !== E
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
                    for (let r of e.data) {
                      let e = r.date.slice(0, 10)
                      if (e < t || e > s) continue
                      let l = a.get(e) ?? {}
                      if ("credit_amount" in r) {
                        let e = f(r.product_surface)
                        l[e] = (l[e] ?? 0) + r.credit_amount
                      } else if (
                        ((i = (i ?? 0) + (r.models?.reduce((e, t) => e + (t.on_demand_credits ?? 0), 0) ?? 0)),
                        "product" === n)
                      )
                        for (let [e, t] of Object.entries(r.premium_usage_values?.credit_usage_credits ?? {})) {
                          let s = f(e)
                          l[s] = (l[s] ?? 0) + t
                        }
                      else
                        for (let e of r.models ?? []) {
                          let t = "speed" === n ? (e.speed ?? "unknown") : e.model
                          l[t] = (l[t] ?? 0) + (e.on_demand_credits ?? 0)
                        }
                      a.set(e, l)
                    }
                    let r = g(
                      v(t, s).map((e) => ({ date: e, values: a.get(e) ?? {} })),
                      "credits",
                      "data_freshness_ts" in e ? (e.data_freshness_ts ?? null) : null,
                    )
                    return null == i ? r : { ...r, paidModelTotal: i }
                  })(e, E, M, x)),
                (m[16] = x),
                (m[17] = M),
                (m[18] = E),
                (m[19] = c))
              : (c = m[19]))
          let T = b && "chatgpt" === k && null != C && null != S,
            P = !!(void 0 === w || w) && l.D.ONE_MINUTE
          return (
            m[20] !== s || m[21] !== a || m[22] !== c || m[23] !== T || m[24] !== P
              ? ((d = {
                  queryKey: s,
                  queryFn: a,
                  select: c,
                  enabled: T,
                  refetchInterval: P,
                  staleTime: l.D.ONE_MINUTE,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (m[20] = s),
                (m[21] = a),
                (m[22] = c),
                (m[23] = T),
                (m[24] = P),
                (m[25] = d))
              : (d = m[25]),
            (0, i.I)(d)
          )
        },
        ZY: function (e) {
          let t,
            s,
            a,
            c,
            d = (0, n.c)(16),
            { days: h, enabled: g, isPolling: p, offsetDays: f } = e,
            x = void 0 === f ? 0 : f,
            { accountId: y, authMethod: b, userId: v } = (0, r.As)()
          d[0] !== h || d[1] !== x ? ((t = _(h, x)), (d[0] = h), (d[1] = x), (d[2] = t)) : (t = d[2])
          let { endDate: w, startDate: A } = t
          ;(d[3] !== y || d[4] !== w || d[5] !== A || d[6] !== v
            ? ((s = [...u, "personal-history", y, v, A, w]), (d[3] = y), (d[4] = w), (d[5] = A), (d[6] = v), (d[7] = s))
            : (s = d[7]),
            d[8] !== w || d[9] !== A
              ? ((a = () =>
                  o.CodexRequest.safeGet("/wham/usage/daily-token-usage-breakdown", {
                    additionalHeaders: { "x-openai-codex-usage-categories": "1" },
                    parameters: { query: { start_date: A, end_date: w, group_by: "day" } },
                  })),
                (d[8] = w),
                (d[9] = A),
                (d[10] = a))
              : (a = d[10]))
          let j = g && "chatgpt" === b && null != y && null != v,
            C = !!(void 0 === p || p) && l.D.ONE_MINUTE
          return (
            d[11] !== s || d[12] !== a || d[13] !== j || d[14] !== C
              ? ((c = {
                  queryKey: s,
                  queryFn: a,
                  select: m,
                  enabled: j,
                  refetchInterval: C,
                  staleTime: l.D.ONE_MINUTE,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (d[11] = s),
                (d[12] = a),
                (d[13] = j),
                (d[14] = C),
                (d[15] = c))
              : (c = d[15]),
            (0, i.I)(c)
          )
        },
        eU: function (e) {
          return d("plugins", e)
        },
        mV: _,
        my: function (e) {
          let { query: t, ...s } = p(e, "lines-of-code")
          return (0, a.j)({
            ...s,
            queryFn: () =>
              o.CodexRequest.safeGet("/wham/analytics/code-attribution", {
                parameters: { query: { ...t, group: "workspace" } },
              }),
            select: (e) =>
              b(
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
    let r = {
        usage_history: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_USAGE_HISTORY",
        tokens: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOKENS",
        product_activity: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_PRODUCT_ACTIVITY",
        tool_activity: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOOL_ACTIVITY",
        code_review_priority: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_PRIORITY",
        code_review_reactions: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_REACTIONS",
        code_review: "CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW",
      },
      l = (0, i.createContext)(null)
    function o(e, t, s, i) {
      null != e && (0, a.yy)(e, n.Y8j, { chart: r[t], action: s, selection: i })
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
        K2: r,
        Wj: l,
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
      r = s("MVHH"),
      l = s("zTeN"),
      o = s("zd8w"),
      u = s("SPnB"),
      c = s("EOo5"),
      d = s("OAko"),
      h = s("yGJW"),
      m = s("OWtl"),
      g = s("qWrV")
    function p(e) {
      let t,
        s,
        n,
        a = (0, i.c)(9),
        { identity: u, section: c } = e,
        d = (0, l.gh)(m.u),
        g = (0, o.useRef)(null)
      a[0] !== d
        ? ((t = (e) => {
            ;(0, h.yy)(d, r.$K, { tab: e })
          }),
          (a[0] = d),
          (a[1] = t))
        : (t = a[1])
      let p = (0, o.useEffectEvent)(t)
      return (
        a[2] !== u || a[3] !== p || a[4] !== c
          ? ((s = () => {
              if (null == u) {
                g.current = null
                return
              }
              let e = JSON.stringify([u, c])
              e !== g.current &&
                ((g.current = e),
                ("usage" === c || "analytics" === c) &&
                  p("usage" === c ? "CHATGPT_WEB_SETTINGS_TAB_USAGE" : "CHATGPT_WEB_SETTINGS_TAB_ANALYTICS"))
            }),
            (a[2] = u),
            (a[3] = p),
            (a[4] = c),
            (a[5] = s))
          : (s = a[5]),
        a[6] !== u || a[7] !== c ? ((n = [u, c]), (a[6] = u), (a[7] = c), (a[8] = n)) : (n = a[8]),
        (0, o.useEffect)(s, n),
        null
      )
    }
    function f(e) {
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
            r,
            l,
            u = (0, i.c)(20),
            { chart: c, queries: d } = e,
            m = (0, o.use)(g.Wj),
            p = m?.identity ?? null,
            b = (0, o.useRef)(null)
          u[0] !== d ? ((t = d.length > 0 && d.every(y)), (u[0] = d), (u[1] = t)) : (t = u[1])
          let _ = t,
            v = d.some(x)
              ? "CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_ERROR"
              : "CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_SUCCESS"
          u[2] !== c || u[3] !== p || u[4] !== v || u[5] !== d
            ? ((s = JSON.stringify([p, c, v, d.map(f)])), (u[2] = c), (u[3] = p), (u[4] = v), (u[5] = d), (u[6] = s))
            : (s = u[6])
          let w = s
          u[7] !== m || u[8] !== c || u[9] !== v
            ? ((n = () => {
                null != m && (0, h.yy)(m.scope, a.av6, { chart: g.K2[c], outcome: v })
              }),
              (u[7] = m),
              (u[8] = c),
              (u[9] = v),
              (u[10] = n))
            : (n = u[10])
          let A = (0, o.useEffectEvent)(n)
          return (
            u[11] !== p || u[12] !== A || u[13] !== w || u[14] !== _
              ? ((r = () => {
                  null != p && _ && b.current !== w && ((b.current = w), A())
                }),
                (u[11] = p),
                (u[12] = A),
                (u[13] = w),
                (u[14] = _),
                (u[15] = r))
              : (r = u[15]),
            u[16] !== p || u[17] !== w || u[18] !== _
              ? ((l = [p, w, _]), (u[16] = p), (u[17] = w), (u[18] = _), (u[19] = l))
              : (l = u[19]),
            (0, o.useEffect)(r, l),
            null
          )
        },
        Z: function (e) {
          let t,
            s,
            a,
            r,
            o = (0, i.c)(20),
            { section: h, isSelected: f, children: x } = e,
            y = (0, l.gh)(m.u),
            { accountId: b, userId: _, authMethod: v, isLoading: w } = (0, c.As)(),
            { data: A } = (0, d.YL)(),
            j = (0, l.Ul)(u.mZ)
          o[0] !== b ||
          o[1] !== v ||
          o[2] !== A?.id ||
          o[3] !== A?.plan_type ||
          o[4] !== j ||
          o[5] !== w ||
          o[6] !== f ||
          o[7] !== h ||
          o[8] !== _
            ? ((t = null),
              (o[0] = b),
              (o[1] = v),
              (o[2] = A?.id),
              (o[3] = A?.plan_type),
              (o[4] = j),
              (o[5] = w),
              (o[6] = f),
              (o[7] = h),
              (o[8] = _),
              (o[9] = t))
            : (t = o[9])
          let C = t
          return (
            o[10] !== C || o[11] !== y
              ? ((s = null == C ? null : { scope: y, identity: C }), (o[10] = C), (o[11] = y), (o[12] = s))
              : (s = o[12]),
            o[13] !== C || o[14] !== h
              ? ((a = (0, n.jsx)(p, { identity: C, section: h })), (o[13] = C), (o[14] = h), (o[15] = a))
              : (a = o[15]),
            o[16] !== x || o[17] !== s || o[18] !== a
              ? ((r = (0, n.jsxs)(g.Wj, { value: s, children: [a, x] })),
                (o[16] = x),
                (o[17] = s),
                (o[18] = a),
                (o[19] = r))
              : (r = o[19]),
            r
          )
        },
      },
    )
  },
  WXto(e, t, s) {
    var n = s("QosV"),
      i = s("zTeN"),
      a = s("zd8w"),
      r = s("EOo5"),
      l = s("YitN"),
      o = s("Ghh3"),
      u = s("OAko"),
      c = s("laUo"),
      d = s("smwl"),
      h = s("jdiu"),
      m = s("eFxf"),
      g = s("OWtl"),
      p = s("hZax"),
      f = s("UR81"),
      x = s("LjYy")
    let y = "3909937021",
      b = "1014047933",
      _ = (0, i.vU)(g.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => o.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      v = (0, i.vU)(g.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["student-codex-credit-enrollment", e, t],
        queryFn: ({ signal: e }) =>
          o.Request.safePost("/students/refresh_enrollment_status", {
            requestBody: { campaign_id: "student_codex_credits" },
            signal: e,
          }),
        staleTime: 6e4,
        retry: !1,
      }))
    function w(e) {
      return e === x.x.FREE || e === x.x.GO
    }
    s.d(
      t,
      {},
      {
        AH: function (e, t) {
          let s,
            o,
            g,
            x,
            A,
            j,
            C,
            k,
            S = (0, n.c)(30),
            { accountId: M, userId: E, authMethod: T, isLoading: P } = (0, r.As)(),
            N = (0, i.Ul)(null),
            I = "chatgpt" === T,
            L = (0, p.AS)(),
            R = (0, p.Zj)(y),
            O = (0, p.DR)(y),
            D = (0, p.XR)(),
            { data: U, isLoading: F, hasEverErrored: q } = (0, u.YL)(),
            { data: H, isLoading: G } = (0, l.U)(),
            z =
              I &&
              U?.id === M &&
              U?.structure === "workspace" &&
              "account-owner" === U.account_user_role &&
              (0, f.Hw)(U.plan_type),
            W = I && !D && (0, h.b0)({ accountId: M, currentAccount: U, statsigClient: L }),
            B = U?.plan_type ?? (!F || q ? H?.plan : void 0),
            $ = I && (0, f.Hw)(B),
            V = (0, p.Zj)(!!$ && b),
            Y = (0, p.DR)($ ? b : y)
          S[0] !== B ? ((s = w(B)), (S[0] = B), (S[1] = s)) : (s = S[1])
          let X = s,
            K = (0, f.uz)(B),
            Z = !!I && !!X && !D && (0, m.fV)(L, B),
            Q = U?.structure === "personal" && U.id === M
          S[2] !== M || S[3] !== U?.id || S[4] !== U?.plan_type || S[5] !== I || S[6] !== Q
            ? ((o = !1), (S[2] = M), (S[3] = U?.id), (S[4] = U?.plan_type), (S[5] = I), (S[6] = Q), (S[7] = o))
            : (o = S[7])
          let J = o
          S[8] !== J ? ((g = { enabled: J }), (S[8] = J), (S[9] = g)) : (g = S[9])
          let { data: ee, isLoading: et } = (0, i._U)(_, M ?? null, g),
            es = I && ((0, c.IH)(B) || Z),
            en = M ?? null,
            ei = E ?? null
          ;(S[10] !== en || S[11] !== ei
            ? ((x = { accountId: en, userId: ei }), (S[10] = en), (S[11] = ei), (S[12] = x))
            : (x = S[12]),
            !1 !== S[13] ? ((A = { enabled: !1 }), (S[13] = !1), (S[14] = A)) : (A = S[14]))
          let { data: ea, isPending: er } = (0, i._U)(v, x, A),
            el = I && Q && !es
          S[15] !== el ? ((j = { enabled: el }), (S[15] = el), (S[16] = j)) : (j = S[16])
          let { data: eo, isLoading: eu } = (0, d.q7)(j),
            [ec, ed] = (0, a.useState)(null),
            eh = el && eo?.isEnabled === !0,
            em = "usage" === t && el && (eh || ec === M) ? M : null
          ec !== em && ed(em)
          let eg = eh || null != em,
            ep = I && K && R,
            ef = I && !D && !("isNoop" in L),
            ex = $ && !D && V,
            ey = I && F && !q,
            eb = I && X && D,
            e_ = I && K && (D || O)
          S[17] !== I || S[18] !== X || S[19] !== D || S[20] !== B
            ? ((C = I && (X || (0, f.Hw)(B)) && D), (S[17] = I), (S[18] = X), (S[19] = D), (S[20] = B), (S[21] = C))
            : (C = S[21])
          let ev = C,
            ew = $ && (D || Y),
            eA = (function ({
              authMethod: e,
              hasCreditBalance: t = !1,
              hasEnabledAutoReload: s = !1,
              isPersonalAccount: n = !1,
              plan: i,
              isFreeOrGoCreditPurchaseEnabled: a = !1,
              hasStudentCreditAccess: r = !1,
              isEnterpriseUsageSettingsEnabled: l = !1,
              isConsumerUsageAnalyticsEnabled: o = !1,
              isBusinessUsageDashboardEnabled: u = !1,
              canPurchaseBusinessCredits: d = !1,
              isBusinessWorkspaceOwner: h = !1,
            }) {
              let m = "chatgpt" === e,
                g = m && w(i) && a,
                p = m && ((0, c.IH)(i) || g || (n && r)),
                x = w(i),
                y = (0, f.uz)(i),
                b = p || (m && (0, f.Hw)(i) && (d || h)) || (m && ((x && t) || (n && s)))
              return {
                canManageCreditSettings: p,
                canViewCreditSettings: b,
                isUsageSettingsVisible:
                  b || (m && x) || (m && (x || (0, f.Hw)(i)) && o) || (m && (0, f.Hw)(i) && u) || (m && y && l),
              }
            })({
              authMethod: T,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: eg,
              isPersonalAccount: Q,
              plan: B,
              isFreeOrGoCreditPurchaseEnabled: Z,
              hasStudentCreditAccess: !1,
              isEnterpriseUsageSettingsEnabled: ep,
              isConsumerUsageAnalyticsEnabled: ef,
              isBusinessUsageDashboardEnabled: ex,
              canPurchaseBusinessCredits: W,
              isBusinessWorkspaceOwner: z,
            }),
            ej = !0 === N || eA.isUsageSettingsVisible || (J && ee?.show_usage_tab === !0),
            eC = eg ? eo : void 0,
            ek = P || (I && G) || ey || eb || e_ || ev || ew || (J && et) || (el && eu && !ej)
          return (
            S[22] !== W || S[23] !== z || S[24] !== ej || S[25] !== B || S[26] !== eC || S[27] !== ek || S[28] !== eA
              ? ((k = {
                  autoReloadSettings: eC,
                  ...eA,
                  canPurchaseBusinessCredits: W,
                  isBusinessWorkspaceOwner: z,
                  isUsageSettingsVisible: ej,
                  isUsageSettingsAccessLoading: ek,
                  plan: B,
                }),
                (S[22] = W),
                (S[23] = z),
                (S[24] = ej),
                (S[25] = B),
                (S[26] = eC),
                (S[27] = ek),
                (S[28] = eA),
                (S[29] = k))
              : (k = S[29]),
            k
          )
        },
        t$: _,
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
                description: "Error shown when a Codex rate limit reset request was already redeemed",
              })
            case "no_credit":
              return t.formatMessage({
                id: "codex.rateLimitResetModal.noCredit",
                defaultMessage: "No resets are available",
                description: "Error shown when the user has no Codex rate limit resets available",
              })
            case "nothing_to_reset":
              return t.formatMessage({
                id: "codex.rateLimitResetModal.nothingToReset",
                defaultMessage: "Your usage does not need a reset right now",
                description: "Error shown when the user's Codex usage does not need a rate limit reset",
              })
          }
        },
      },
    )
  },
  jxU8(e, t, s) {
    s.d(t, { P: () => p, Y: () => f })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57"),
      r = s("zd8w"),
      l = s("bJfu"),
      o = s("qbQ6"),
      u = s("GK7D"),
      c = s("PkPj"),
      d = s("DiyT"),
      h = s("ibLK"),
      m = s("V8uZ"),
      g = s("oFmV")
    function p(e) {
      let t,
        s,
        p,
        f,
        x,
        y,
        b,
        _,
        v,
        w,
        A,
        j,
        C,
        k,
        S,
        M,
        E,
        T,
        P,
        N,
        I,
        L,
        R,
        O,
        D,
        U,
        F,
        q,
        H,
        G,
        z,
        W,
        B,
        $,
        V,
        Y,
        X,
        K,
        Z,
        Q,
        J,
        ee,
        et,
        es,
        en = (0, i.c)(120)
      en[0] !== e
        ? (({
            title: T,
            asset: s,
            backSlot: p,
            subtitle: C,
            children: f,
            fullWidth: S,
            contentClassName: y,
            subtitleClassName: k,
            action: t,
            toolbarActions: P,
            stickyControls: j,
            footer: _,
            embedded: M,
            density: b,
            scrollResetKey: A,
            containTouchOverscroll: E,
            ref: v,
            className: x,
            ...w
          } = e),
          (en[0] = e),
          (en[1] = t),
          (en[2] = s),
          (en[3] = p),
          (en[4] = f),
          (en[5] = x),
          (en[6] = y),
          (en[7] = b),
          (en[8] = _),
          (en[9] = v),
          (en[10] = w),
          (en[11] = A),
          (en[12] = j),
          (en[13] = C),
          (en[14] = k),
          (en[15] = S),
          (en[16] = M),
          (en[17] = E),
          (en[18] = T),
          (en[19] = P))
        : ((t = en[1]),
          (s = en[2]),
          (p = en[3]),
          (f = en[4]),
          (x = en[5]),
          (y = en[6]),
          (b = en[7]),
          (_ = en[8]),
          (v = en[9]),
          (w = en[10]),
          (A = en[11]),
          (j = en[12]),
          (C = en[13]),
          (k = en[14]),
          (S = en[15]),
          (M = en[16]),
          (E = en[17]),
          (T = en[18]),
          (P = en[19]))
      let ei = void 0 !== S && S,
        ea = void 0 !== M && M,
        er = void 0 !== E && E,
        el = b ?? "default",
        eo = (0, r.useRef)(null),
        eu = (0, r.useRef)(null),
        ec = er && !ea && !1
      ;((et = (0, i.c)(4)),
        (es = (0, h.U)(ec ? "(pointer: coarse)" : null)),
        et[0] !== es || et[1] !== eu
          ? ((J = () => {
              let e = eu.current
              if (!es || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let s = e.closest("[data-app-shell-frame]") ?? e,
                n = e.closest("[data-app-shell-main-surface]"),
                i = null,
                a = 0,
                r = () => {
                  i = null
                },
                l = (t) => {
                  let s = t.touches[0]
                  if (1 !== t.touches.length || null == s) return void r()
                  let l = t.composedPath().includes(e),
                    o = t.target,
                    u =
                      o instanceof Element &&
                      ((o.contains(e) && n?.contains(o)) || null != o.closest("[data-app-shell-main-titlebar]"))
                  l || u ? ((i = { x: s.clientX, y: s.clientY, inPanel: l }), (a = s.clientY)) : r()
                },
                o = (t) => {
                  let n = t.touches[0]
                  if (1 !== t.touches.length || null == n || null == i) return void r()
                  let l = n.clientY > a
                  if (
                    ((a = n.clientY),
                    !(!t.cancelable || !l || n.clientY - i.y <= Math.abs(n.clientX - i.x)) &&
                      (!i.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let n of t.composedPath()) {
                      if (n === e || n === s) break
                      if (
                        n instanceof HTMLElement &&
                        n.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(n).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                u = { capture: !0, passive: !0 }
              return (
                s.addEventListener("touchstart", l, u),
                s.addEventListener("touchmove", o, { capture: !0, passive: !1 }),
                s.addEventListener("touchend", r, u),
                s.addEventListener("touchcancel", r, u),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    s.removeEventListener("touchstart", l, !0),
                    s.removeEventListener("touchmove", o, !0),
                    s.removeEventListener("touchend", r, !0),
                    s.removeEventListener("touchcancel", r, !0))
                }
              )
            }),
            (ee = [es, eu]),
            (et[0] = es),
            (et[1] = eu),
            (et[2] = J),
            (et[3] = ee))
          : ((J = et[2]), (ee = et[3])),
        (0, r.useEffect)(J, ee))
      let [ed, eh] = (0, r.useState)(!1),
        em = (0, r.useContext)(g.S),
        eg = !!em?.slateLayout && !ea
      ;(0, h.U)(o.mk)
      let ep = eg && !1,
        ef = em?.targetId ?? null,
        ex = em?.targetText ?? null,
        ey = em?.navigationKey ?? null
      ;(en[20] !== A
        ? ((N = () => {
            null != A && null != eu.current && (eu.current.scrollTop = 0)
          }),
          (I = [A]),
          (en[20] = A),
          (en[21] = N),
          (en[22] = I))
        : ((N = en[21]), (I = en[22])),
        (0, r.useLayoutEffect)(N, I),
        en[23] !== ef || en[24] !== ex
          ? ((L = () => {
              let e, t
              if (null == ef && null == ex) return
              let s = eo.current
              if (null == s) return
              let n = () => {
                  if (null == ex) return null == ef ? null : document.getElementById(ef)
                  let e = ex.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    n = null
                  for (let i of s.querySelectorAll("*")) {
                    let s = (i.getAttribute("placeholder") ?? i.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == s ||
                      !t.every((e) => s.includes(e)) ||
                      null != i.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let a = s.includes(e)
                    ;(null == n || (a && !n.isContiguous) || (a === n.isContiguous && s.length <= n.text.length)) &&
                      (n = { element: i, isContiguous: a, text: s })
                  }
                  return n?.element ?? null
                },
                i = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == ex)) return
                  let n = "true" === document.documentElement.dataset.reducedMotion,
                    i = t.closest("button"),
                    a = i?.parentElement ?? t
                  if (null == i) {
                    let e = t.closest("section")
                    for (let n = t.parentElement; null != n && n !== e && n !== s; n = n.parentElement)
                      if (
                        Array.from(n.children).some(
                          (e) =>
                            !e.contains(t) &&
                            (e.matches(
                              'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                            ) ||
                              null !=
                                e.querySelector(
                                  'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                                )),
                        )
                      ) {
                        a = n
                        break
                      }
                  }
                  e = a.animate?.(
                    n
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${m.Wu.join(", ")})` },
                  )
                },
                a =
                  null == ex
                    ? new ResizeObserver(() => {
                        let e = n()
                        null != e && i(e)
                      })
                    : null,
                r = () => {
                  for (let e of (t?.disconnect(), a?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    s.ownerDocument.removeEventListener(e, r)
                }
              if (null != a)
                for (let e of (a.observe(s), ["wheel", "pointerdown", "keydown"]))
                  s.ownerDocument.addEventListener(e, r, { passive: !0 })
              let l = n()
              return (
                null != l
                  ? i(l)
                  : (t = new MutationObserver(() => {
                      let e = n()
                      null != e && (i(e), t?.disconnect())
                    })).observe(null == ex ? document.body : s, { childList: !0, subtree: !0 }),
                () => {
                  ;(r(), e?.cancel())
                }
              )
            }),
            (en[23] = ef),
            (en[24] = ex),
            (en[25] = L))
          : (L = en[25]),
        en[26] !== ey || en[27] !== ef || en[28] !== ex
          ? ((R = [ey, ef, ex]), (en[26] = ey), (en[27] = ef), (en[28] = ex), (en[29] = R))
          : (R = en[29]),
        (0, r.useLayoutEffect)(L, R),
        en[30] !== P
          ? ((O =
              null == P
                ? null
                : (0, n.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: P,
                  })),
            (en[30] = P),
            (en[31] = O))
          : (O = en[31]),
        en[32] !== p || en[33] !== O
          ? ((D = (0, n.jsxs)(n.Fragment, { children: [p, O] })), (en[32] = p), (en[33] = O), (en[34] = D))
          : (D = en[34]))
      let eb = D,
        e_ = ea ? "default" : "settings"
      "compact" === el && (e_ = "settingsCompact")
      let ev = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        ew =
          "default" === b &&
          (ea && !ei ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eA = ei ? null : ea ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(en[35] !== y || en[36] !== j || en[37] !== ev || en[38] !== ew || en[39] !== eA || en[40] !== eg
        ? ((U = (0, a.A)(
            "group/settings mx-auto flex w-full flex-col",
            ev,
            ew,
            eA,
            eg && ["px-panel pb-panel", null == j && "pt-panel"],
            y,
          )),
          (en[35] = y),
          (en[36] = j),
          (en[37] = ev),
          (en[38] = ew),
          (en[39] = eA),
          (en[40] = eg),
          (en[41] = U))
        : (U = en[41]),
        en[42] !== t ||
        en[43] !== s ||
        en[44] !== el ||
        en[45] !== ea ||
        en[46] !== e_ ||
        en[47] !== C ||
        en[48] !== k ||
        en[49] !== T ||
        en[50] !== eg
          ? ((F =
              null == T || eg
                ? null
                : (0, n.jsx)("div", {
                    className: (0, a.A)("compact" === el && "pb-5.5", "default" === el && (ea ? "pb-panel" : "pb-8")),
                    children: (0, n.jsx)(u.z, {
                      actions: t,
                      asset: s,
                      subtitle: C,
                      subtitleClassName: (0, a.A)("text-balance", k),
                      title: T,
                      variant: e_,
                    }),
                  })),
            (en[42] = t),
            (en[43] = s),
            (en[44] = el),
            (en[45] = ea),
            (en[46] = e_),
            (en[47] = C),
            (en[48] = k),
            (en[49] = T),
            (en[50] = eg),
            (en[51] = F))
          : (F = en[51]),
        en[52] !== j
          ? ((q = null == j ? null : (0, n.jsx)(c.J1, { className: "top-0 pt-panel pb-2", children: j })),
            (en[52] = j),
            (en[53] = q))
          : (q = en[53]))
      let ej =
          ea && !ei
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        eC = null != j && "pt-5"
      ;(en[54] !== ej || en[55] !== eC
        ? ((H = (0, a.A)("flex flex-col", ej, eC)), (en[54] = ej), (en[55] = eC), (en[56] = H))
        : (H = en[56]),
        en[57] !== f || en[58] !== H
          ? ((G = (0, n.jsx)("div", { className: H, children: f })), (en[57] = f), (en[58] = H), (en[59] = G))
          : (G = en[59]),
        en[60] !== el || en[61] !== U || en[62] !== F || en[63] !== q || en[64] !== G
          ? ((z = (0, n.jsxs)("div", { ref: eo, className: U, "data-density": el, children: [F, q, G] })),
            (en[60] = el),
            (en[61] = U),
            (en[62] = F),
            (en[63] = q),
            (en[64] = G),
            (en[65] = z))
          : (z = en[65]))
      let ek = z
      if (ea) {
        let e, t, s
        return (
          en[66] !== x ? ((e = (0, a.A)("flex min-h-0 flex-col", x)), (en[66] = x), (en[67] = e)) : (e = en[67]),
          en[68] !== p || en[69] !== eb || en[70] !== P
            ? ((t =
                null != p || null != P
                  ? (0, n.jsx)("div", { className: "flex items-center pb-panel", children: eb })
                  : null),
              (en[68] = p),
              (en[69] = eb),
              (en[70] = P),
              (en[71] = t))
            : (t = en[71]),
          en[72] !== ek || en[73] !== v || en[74] !== w || en[75] !== e || en[76] !== t
            ? ((s = (0, n.jsxs)("div", { ref: v, className: e, ...w, children: [t, ek] })),
              (en[72] = ek),
              (en[73] = v),
              (en[74] = w),
              (en[75] = e),
              (en[76] = t),
              (en[77] = s))
            : (s = en[77]),
          s
        )
      }
      ;(en[78] !== x
        ? ((W = (0, a.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            x,
          )),
          (en[78] = x),
          (en[79] = W))
        : (W = en[79]),
        en[80] !== T || en[81] !== ep
          ? ((B = ep
              ? (0, n.jsx)(l.G.Header, {
                  divider: !1,
                  children: (0, n.jsx)(l.G.HeaderToolbar, {
                    children: (0, n.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: T,
                    }),
                  }),
                })
              : null),
            (en[80] = T),
            (en[81] = ep),
            (en[82] = B))
          : (B = en[82]),
        en[83] !== p || en[84] !== eb || en[85] !== P || en[86] !== eg
          ? (($ =
              eg && null == p && null == P
                ? null
                : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: eb,
                    }),
                  })),
            (en[83] = p),
            (en[84] = eb),
            (en[85] = P),
            (en[86] = eg),
            (en[87] = $))
          : ($ = en[87]))
      let eS = ec || void 0,
        eM = ep ? ed : void 0,
        eE = ep || void 0
      en[88] !== ep
        ? ((V = ep ? (e) => eh(e.currentTarget.scrollTop > 0) : void 0), (en[88] = ep), (en[89] = V))
        : (V = en[89])
      let eT = !eg && "p-panel"
      return (
        en[90] !== eT
          ? ((Y = (0, a.A)("flex-1 scrollbar-stable overflow-y-auto", eT)), (en[90] = eT), (en[91] = Y))
          : (Y = en[91]),
        en[92] !== t ||
        en[93] !== s ||
        en[94] !== el ||
        en[95] !== ei ||
        en[96] !== C ||
        en[97] !== k ||
        en[98] !== T ||
        en[99] !== ep ||
        en[100] !== eg
          ? ((X =
              null == T || !eg || ep
                ? null
                : (0, n.jsx)(d.g, {
                    className: ei ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        null == s ? null : (0, n.jsx)("div", { className: "flex", children: s }),
                        (0, n.jsx)("h1", {
                          className: (0, a.A)("text-default", "compact" === el ? "heading-lg" : "heading-xl"),
                          children: T,
                        }),
                        null == C
                          ? null
                          : (0, n.jsx)("div", {
                              className: (0, a.A)("text-base leading-6 text-balance text-secondary", k),
                              children: C,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, n.jsx)(d.T, { search: null, actions: t }),
                  })),
            (en[92] = t),
            (en[93] = s),
            (en[94] = el),
            (en[95] = ei),
            (en[96] = C),
            (en[97] = k),
            (en[98] = T),
            (en[99] = ep),
            (en[100] = eg),
            (en[101] = X))
          : (X = en[101]),
        en[102] !== ek ||
        en[103] !== eS ||
        en[104] !== eM ||
        en[105] !== eE ||
        en[106] !== V ||
        en[107] !== Y ||
        en[108] !== X
          ? ((K = (0, n.jsxs)("div", {
              ref: eu,
              "data-contain-touch-overscroll": eS,
              "data-app-shell-page-scrolled": eM,
              "data-settings-mobile-header": eE,
              onScroll: V,
              className: Y,
              children: [X, ek],
            })),
            (en[102] = ek),
            (en[103] = eS),
            (en[104] = eM),
            (en[105] = eE),
            (en[106] = V),
            (en[107] = Y),
            (en[108] = X),
            (en[109] = K))
          : (K = en[109]),
        en[110] !== _
          ? ((Z =
              null != _ &&
              (0, n.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: _,
              })),
            (en[110] = _),
            (en[111] = Z))
          : (Z = en[111]),
        en[112] !== v ||
        en[113] !== w ||
        en[114] !== W ||
        en[115] !== B ||
        en[116] !== $ ||
        en[117] !== K ||
        en[118] !== Z
          ? ((Q = (0, n.jsxs)("div", { ref: v, className: W, ...w, children: [B, $, K, Z] })),
            (en[112] = v),
            (en[113] = w),
            (en[114] = W),
            (en[115] = B),
            (en[116] = $),
            (en[117] = K),
            (en[118] = Z),
            (en[119] = Q))
          : (Q = en[119]),
        Q
      )
    }
    function f(e) {
      let t,
        s,
        a = (0, i.c)(8),
        { children: r, navigationKey: l, slateLayout: o, targetId: u, targetText: c } = e,
        d = void 0 !== o && o,
        h = void 0 === c ? null : c
      return (
        a[0] !== l || a[1] !== d || a[2] !== u || a[3] !== h
          ? ((t =
              null != u || null != h || d ? { navigationKey: l, slateLayout: d, targetId: u, targetText: h } : null),
            (a[0] = l),
            (a[1] = d),
            (a[2] = u),
            (a[3] = h),
            (a[4] = t))
          : (t = a[4]),
        a[5] !== r || a[6] !== t
          ? ((s = (0, n.jsx)(g.S.Provider, { value: t, children: r })), (a[5] = r), (a[6] = t), (a[7] = s))
          : (s = a[7]),
        s
      )
    }
  },
  oFmV(e, t, s) {
    let n = (0, s("zd8w").createContext)(null)
    s.d(t, {}, { S: n })
  },
  chIh(e, t, s) {
    s.d(t, { O: () => f, y: () => p })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("TEcx")
    let r = (0, s("nkTT").a)({
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
      body: '<path d="M14.9506 2.51071C16.6104 1.89607 18.3752 3.12451 18.3754 4.8945V13.9375C18.3754 15.6723 16.6755 16.8972 15.0297 16.3486L12.1254 15.3799V15.417C12.1253 16.2155 11.8829 16.9743 11.3363 17.5371C10.7855 18.104 10.0193 18.3749 9.16638 18.375C8.31357 18.3749 7.54819 18.1039 6.99744 17.5371C6.4507 16.9743 6.20842 16.2156 6.20837 15.417V13.4101C6.13423 13.3877 6.0574 13.375 5.97986 13.375H3.75037C2.34664 13.375 1.20837 12.2367 1.20837 10.833V8.33298C1.20869 6.92952 2.34684 5.79196 3.75037 5.79196H5.95154C6.04523 5.79193 6.13808 5.77467 6.22595 5.74216L14.9506 2.51071ZM7.95837 15.417C7.95842 15.8678 8.09096 16.151 8.25232 16.3174C8.40981 16.4794 8.68647 16.6249 9.16638 16.625C9.64653 16.6249 9.92295 16.4794 10.0804 16.3174C10.2419 16.1511 10.3753 15.8681 10.3754 15.417V14.7968L7.95837 13.9912V15.417ZM16.6254 4.8945C16.6252 4.34332 16.0749 3.96092 15.558 4.15231L6.92224 7.35055V11.8017L15.5834 14.6884C16.0959 14.8591 16.6254 14.4777 16.6254 13.9375V4.8945ZM3.75037 7.54196C3.31334 7.54196 2.95869 7.89602 2.95837 8.33298V10.833C2.95837 11.2702 3.31314 11.625 3.75037 11.625H5.17224V7.54196H3.75037Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var l = s("hwJp"),
      o = s("rPwO"),
      u = s("O0JV"),
      c = s("on57"),
      d = s("zd8w"),
      h = s("HOLv"),
      m = s("GO7r")
    let g = new Set([
      "assets.chatgpt.site",
      "auth-cdn.oaistatic.com",
      "cdn.openai.com",
      "cdn.oaistatic.com",
      "files.openai.com",
      "persistent.oaistatic.com",
    ])
    function p(e) {
      let t,
        s,
        a,
        m,
        p = (0, i.c)(23),
        { app: f, size: y, borderless: b } = e,
        _ = void 0 === y ? "list" : y,
        v = void 0 !== b && b,
        w = "codex_generated_site" === f.client_app_type,
        A = "ads" === f.client_app_type
      p[0] !== f.logo_uri
        ? ((t = (function (e) {
            if (null == e || "" === e.trim()) return null
            try {
              let t = new URL(e.trim())
              return "https:" === t.protocol && g.has(t.hostname) ? t.href : null
            } catch {
              return null
            }
          })(f.logo_uri)),
          (p[0] = f.logo_uri),
          (p[1] = t))
        : (t = p[1])
      let j = t,
        [C, k] = (0, d.useState)(null),
        [S, M] = (0, d.useState)(null),
        E = null != j && S === j,
        T = null != j && C === j && !E
      if (w) {
        let e,
          t = "detail" === _ ? u.g : o.t
        ;(p[2] !== t
          ? ((e = (0, n.jsx)(h.I, { className: "shrink-0", asset: t, focusable: "false" })), (p[2] = t), (p[3] = e))
          : (e = p[3]),
          (s = e))
      } else if (A) {
        let e,
          t = "detail" === _ ? l.o : r
        ;(p[4] !== t
          ? ((e = (0, n.jsx)(h.I, { className: "shrink-0", asset: t, focusable: "false" })), (p[4] = t), (p[5] = e))
          : (e = p[5]),
          (s = e))
      } else {
        let e,
          t,
          i,
          a = "detail" === _ ? "text-xl" : "text-sm"
        ;(p[6] !== a ? ((e = (0, c.A)("font-medium text-secondary", a)), (p[6] = a), (p[7] = e)) : (e = p[7]),
          p[8] !== f.name
            ? ((t = Array.from(f.name.trim())[0]?.toUpperCase()), (p[8] = f.name), (p[9] = t))
            : (t = p[9]),
          p[10] !== e || p[11] !== t
            ? ((i = (0, n.jsx)("span", { className: e, children: t })), (p[10] = e), (p[11] = t), (p[12] = i))
            : (i = p[12]),
          (s = i))
      }
      let P = !T && s
      return (
        p[13] !== E || p[14] !== T || p[15] !== j || p[16] !== _
          ? ((a =
              null == j || E
                ? null
                : (0, n.jsx)(
                    "img",
                    {
                      className: (0, c.A)("detail" === _ ? "size-10" : "size-6", "object-contain", !T && "hidden"),
                      alt: "",
                      src: j,
                      referrerPolicy: "no-referrer",
                      onLoad: () => {
                        ;(k(j), M(null))
                      },
                      onError: () => M(j),
                    },
                    j,
                  )),
            (p[13] = E),
            (p[14] = T),
            (p[15] = j),
            (p[16] = _),
            (p[17] = a))
          : (a = p[17]),
        p[18] !== v || p[19] !== _ || p[20] !== P || p[21] !== a
          ? ((m = (0, n.jsxs)(x, { size: _, borderless: v, children: [P, a] })),
            (p[18] = v),
            (p[19] = _),
            (p[20] = P),
            (p[21] = a),
            (p[22] = m))
          : (m = p[22]),
        m
      )
    }
    function f(e) {
      let t,
        s,
        r = (0, i.c)(10),
        { app: l, borderless: o } = e,
        u = void 0 !== o && o
      switch (l.type) {
        case "apple": {
          let e
          ;(r[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(m.PPn, {})), (r[0] = e)) : (e = r[0]),
            (t = e))
          break
        }
        case "codex_cli": {
          let e
          ;(r[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(h.I, { asset: a.E })), (r[1] = e))
            : (e = r[1]),
            (t = e))
          break
        }
        case "oai_apps": {
          let e
          ;(r[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(m.HUG, {})), (r[2] = e)) : (e = r[2]),
            (t = e))
          break
        }
        case "kakao_talk":
        case "viber": {
          let e, s
          ;(r[3] !== l.name
            ? ((e = Array.from(l.name.trim())[0]?.toUpperCase()), (r[3] = l.name), (r[4] = e))
            : (e = r[4]),
            r[5] !== e
              ? ((s = (0, n.jsx)("span", { className: "text-sm font-medium text-secondary", children: e })),
                (r[5] = e),
                (r[6] = s))
              : (s = r[6]),
            (t = s))
        }
      }
      return (
        r[7] !== u || r[8] !== t
          ? ((s = (0, n.jsx)(x, { borderless: u, children: t })), (r[7] = u), (r[8] = t), (r[9] = s))
          : (s = r[9]),
        s
      )
    }
    function x(e) {
      let t,
        s,
        a = (0, i.c)(6),
        { children: r, size: l, borderless: o } = e,
        u = !(void 0 !== o && o) && "border border-default",
        d = "detail" === (void 0 === l ? "list" : l) ? "size-12 rounded-xl" : "size-8 rounded-lg"
      return (
        a[0] !== u || a[1] !== d
          ? ((t = (0, c.A)("flex shrink-0 items-center justify-center select-none", u, d)),
            (a[0] = u),
            (a[1] = d),
            (a[2] = t))
          : (t = a[2]),
        a[3] !== r || a[4] !== t
          ? ((s = (0, n.jsx)("span", { className: t, "aria-hidden": !0, children: r })),
            (a[3] = r),
            (a[4] = t),
            (a[5] = s))
          : (s = a[5]),
        s
      )
    }
  },
  I7Ou(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("RNul"),
      r = s("AWNZ")
    s.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            s,
            l = (0, i.c)(3),
            { children: o } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(a.y, { className: "icon-xs shrink-0 text-secondary" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== o
              ? ((s = (0, n.jsx)("div", {
                  role: "status",
                  children: (0, n.jsx)(r.ic, {
                    label: (0, n.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, n.jsx)("span", { className: "text-balance", children: o })],
                    }),
                    control: null,
                  }),
                })),
                (l[1] = o),
                (l[2] = s))
              : (s = l[2]),
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
      r = s("RNul")
    s.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            s,
            l,
            o = (0, i.c)(5),
            { children: u } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(r.y, { className: "icon-xs shrink-0 text-secondary" })), (o[0] = t))
              : (t = o[0]),
            o[1] !== u
              ? ((s =
                  void 0 === u
                    ? (0, n.jsx)(a.A, {
                        id: "settings.panel.loading",
                        defaultMessage: "Loading settings…",
                        description: "Loading state shown while settings load",
                      })
                    : u),
                (o[1] = u),
                (o[2] = s))
              : (s = o[2]),
            o[3] !== s
              ? ((l = (0, n.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, n.jsx)("span", { className: "text-balance", children: s })],
                })),
                (o[3] = s),
                (o[4] = l))
              : (l = o[4]),
            l
          )
        },
      },
    )
  },
  rivV(e, t, s) {
    var n = s("CpsU"),
      i = s.n(n),
      a = s("zTeN"),
      r = s("OWtl"),
      l = s("rvFo"),
      o = s("HFSu"),
      u = s("LjYy"),
      c = s("GDNt")
    let d = ["none", "minimal", "low", "medium", "high", "xhigh", "max", "ultra"],
      h = ["fast", "ultrafast", "standard"],
      m = (0, a.vU)(r.u, ({ accountId: e, balanceUnit: t = "credit", conversationIds: s }) => ({
        enabled: null != e && s.length > 0,
        queryKey: ["thread-usage", e, ...("usd" === t ? ["usd"] : []), ...s],
        queryFn: async ({ signal: e }) => {
          let t = async (s) => {
              try {
                return await o.CodexRequest.safePost("/wham/usage/thread_usage/query", {
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
        select: (e) =>
          null == e
            ? null
            : new Map(
                e.threads.flatMap((e) => {
                  let s = "usd" === t ? e.native_usage_usd_micros : e.estimated_usage_credits_micros
                  if (null == s) return []
                  let n = "usd" === t ? s : e.estimated_usage_usd_micros
                  return [
                    [
                      e.thread_id,
                      {
                        balanceUnit: "usd" === t ? "usd" : void 0,
                        conversationId: e.thread_id,
                        costUsd: null == n ? null : n / 1e6,
                        creditsUsed: "usd" === t ? 0 : s / 1e6,
                        groups: e.groups ?? [],
                      },
                    ],
                  ]
                }),
              ),
        retry: !1,
        refetchInterval: (e) => (1 === s.length || null != e.state.data) && l.D.ONE_MINUTE,
        refetchIntervalInBackground: 1 === s.length,
        refetchOnMount: 1 === s.length,
        staleTime: l.D.ONE_MINUTE,
      }))
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
              r = n.get(a)
            if (null == r) {
              n.set(a, {
                value: a,
                amountMicros: e,
                netNewInputTokens: i.net_new_input_tokens,
                cachedInputTokens: i.cached_input_tokens,
                outputTokens: i.output_tokens,
              })
              continue
            }
            ;((r.amountMicros += e),
              (r.netNewInputTokens =
                null != r.netNewInputTokens && null != i.net_new_input_tokens
                  ? r.netNewInputTokens + i.net_new_input_tokens
                  : null),
              (r.cachedInputTokens =
                null != r.cachedInputTokens && null != i.cached_input_tokens
                  ? r.cachedInputTokens + i.cached_input_tokens
                  : null),
              (r.outputTokens =
                null != r.outputTokens && null != i.output_tokens ? r.outputTokens + i.output_tokens : null))
          }
          let i = "reasoning_effort" === t ? d : "speed" === t ? h : null
          return Array.from(n.values()).sort((e, t) => {
            if (null == i) return t.amountMicros - e.amountMicros
            let s = i.indexOf(e.value ?? ""),
              n = i.indexOf(t.value ?? "")
            return (s < 0 ? i.length : s) - (n < 0 ? i.length : n)
          })
        },
        yy: m,
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
            var r, l, o
            let u,
              c =
                ((r = s),
                (l = n),
                (o = a),
                1 >= Math.abs((u = r.windowDurationMins ?? 0) - 300)
                  ? "five-hour"
                  : 1 >= Math.abs(u - 10080)
                    ? "weekly"
                    : 1 >= Math.abs(u - 43200)
                      ? "monthly"
                      : `${l}-${o}-${u}`),
              d = i.get(c) ?? 0
            i.set(c, d + 1)
            let h = 0 === d ? c : `${c}-${n}`
            return { key: `${t}-${h}`, bucket: s, limitName: e.limitName }
          })
        },
      },
    )
  },
  o6lh(e, t, s) {
    let n = { "--visualize-paint-gutter": "5px" },
      i = { dark: "#83c3ff", light: "#339cff" },
      a = `var(--vscode-charts-blue, light-dark(${i.light}, ${i.dark}))`,
      r = {
        dark: ["#f59a56", "#74d58b", "#f08fc0", "#aa91ef", "#5acbc2"],
        light: ["#f3883b", "#5dc977", "#eb77b1", "#9b79ec", "#3ab9b1"],
      },
      l = ["var(--color-text-info)", ...r.light.map((e, t) => `light-dark(${e}, ${r.dark[t]})`)],
      o = {
        dark: ["#f08fc0", "#6aa3ff", "#74d58b", "#f59a55", "#f5d45f", "#59cbc2", "#aa91ef", "#63c7e5"],
        light: ["#e879b0", "#4f8df7", "#62c87a", "#f08a42", "#f2c94c", "#43b8b0", "#9a7be8", "#4fbad9"],
      },
      u = "light-dark(rgb(255 255 255), rgb(24 24 24))"
    function c(e, t, s, n, i) {
      let a = e.getPropertyValue(s).trim()
      if (0 === a.length) return i
      t.style[n] = `var(${s})`
      let r = getComputedStyle(t)[n].trim()
      return r.length > 0 && r !== `var(${s})` && !r.includes("var(") ? r : a.includes("var(") ? i : a
    }
    function d(e) {
      let t = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4),
        s = t(Number.parseInt(e.slice(1, 3), 16) / 255),
        n = t(Number.parseInt(e.slice(3, 5), 16) / 255),
        i = t(Number.parseInt(e.slice(5, 7), 16) / 255),
        a = Math.cbrt(0.4122214708 * s + 0.5363325363 * n + 0.0514459929 * i),
        r = Math.cbrt(0.2119034982 * s + 0.6806995451 * n + 0.1073969566 * i),
        l = Math.cbrt(0.0883024619 * s + 0.2817188376 * n + 0.6299787005 * i),
        o = 1.9779984951 * a - 2.428592205 * r + 0.4505937099 * l,
        u = 0.0259040371 * a + 0.7827717662 * r - 0.808675766 * l
      return {
        chroma: Math.hypot(o, u),
        hue: ((180 * Math.atan2(u, o)) / Math.PI + 360) % 360,
        lightness: 0.2104542553 * a + 0.793617785 * r - 0.0040720468 * l,
      }
    }
    function h({ chroma: e, hue: t, lightness: s }) {
      let n = (t * Math.PI) / 180,
        i = e * Math.cos(n),
        a = e * Math.sin(n),
        r = (s + 0.3963377774 * i + 0.2158037573 * a) ** 3,
        l = (s - 0.1055613458 * i - 0.0638541728 * a) ** 3,
        o = (s - 0.0894841775 * i - 1.291485548 * a) ** 3,
        u = (e) => (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055)
      return [
        u(4.0767416621 * r - 3.3077115913 * l + 0.2309699292 * o),
        u(-1.2684380046 * r + 2.6097574011 * l - 0.3413193965 * o),
        u(-0.0041960863 * r - 0.7034186147 * l + 1.707614701 * o),
      ]
    }
    function m(e) {
      let t = { ...e }
      for (; !h(t).every((e) => e >= -1e-4 && e <= 1.0001) && t.chroma > 0.005;) t.chroma *= 0.96
      return `#${h(t)
        .map((e) =>
          Math.round(255 * p(e, 0, 1))
            .toString(16)
            .padStart(2, "0"),
        )
        .join("")}`
    }
    function g(e, t) {
      return Math.min(Math.abs(e - t), 360 - Math.abs(e - t))
    }
    function p(e, t, s) {
      return Math.max(t, Math.min(s, e))
    }
    s.d(
      t,
      {},
      {
        Kj: l,
        SH: u,
        r8: function ({ backgroundColorToken: e = "--color-surface", variant: t = "inline" } = {}) {
          let s = getComputedStyle(document.documentElement),
            a = "dark" === document.documentElement.dataset.theme ? "dark" : "light",
            l = document.createElement("div")
          ;((l.style.display = "none"), l.setAttribute("aria-hidden", "true"), document.body.appendChild(l))
          try {
            var h, f
            let x,
              y,
              b,
              _,
              v,
              w,
              A,
              j,
              C,
              k,
              S,
              M,
              E,
              T,
              P,
              N,
              I,
              L,
              R,
              O,
              D,
              U,
              F,
              q,
              H,
              G,
              z,
              W,
              B,
              $,
              V,
              Y,
              X,
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
              er = c(s, l, "--text-base", "fontSize", "14px"),
              el = c(s, l, "--codex-chat-font-size", "fontSize", er),
              eo = c(s, l, "--text-sm", "fontSize", "14px"),
              eu = c(s, l, "--text-sm--line-height", "lineHeight", "20px"),
              ec =
                ((x = "--color-surface-elevated-secondary"),
                (y = "light-dark(rgb(255 255 255), rgb(45 45 45))"),
                c(s, l, x, "backgroundColor", y)),
              ed = ((b = "--color-text"), (_ = "light-dark(rgb(26 28 31), rgb(255 255 255))"), c(s, l, b, "color", _)),
              eh =
                ((v = "--codex-theme-accent-text"),
                (w = "light-dark(rgb(51 156 255), rgb(131 195 255))"),
                c(s, l, v, "color", w)),
              em =
                ((h =
                  (function (e) {
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
                        Math.round(p(e * a, 0, 255))
                          .toString(16)
                          .padStart(2, "0"),
                      )
                      .join("")}`
                  })(eh) ?? i[a]),
                (f = a),
                (A = d(h)),
                (j = 0.96 + 0.12 * p((A.chroma - 0.06) / 0.16, 0, 1)),
                (C = o[f].map(d).map((e) => ({ ...e, chroma: e.chroma * j }))),
                (function (e, t) {
                  let s = []
                  for (; s.length < 5 && e.length > 0;) {
                    let n = 0,
                      i = -1
                    e.forEach((e, a) => {
                      let r = Math.min(g(e.hue, t), ...s.map((t) => g(e.hue, t.hue)))
                      r > i && ((i = r), (n = a))
                    })
                    let [a] = e.splice(n, 1)
                    null != a && s.push(a)
                  }
                  return s
                })([...C.filter((e) => g(e.hue, A.hue) >= 30), ...C.filter((e) => 30 > g(e.hue, A.hue))], A.hue).map(
                  m,
                )),
              eg = r[a],
              ep = c(s, l, "--radius-lg", "borderRadius", "10px")
            return {
              "--accent":
                ((k = "--codex-theme-accent-background-subtle"),
                (S = "light-dark(rgb(229 242 255), rgb(13 39 63))"),
                c(s, l, k, "backgroundColor", S)),
              "--accent-foreground": eh,
              "--background": "live" === t ? ec : ((M = e), (E = u), c(s, l, M, "backgroundColor", E)),
              "--border":
                ((T = "--color-border"),
                (P = "light-dark(rgb(26 28 31 / 8%), rgb(255 255 255 / 8.2%))"),
                c(s, l, T, "color", P)),
              "--border-strong":
                ((N = "--color-border-strong"),
                (I = "light-dark(rgb(26 28 31 / 12%), rgb(255 255 255 / 12%))"),
                c(s, l, N, "color", I)),
              "--card": `color-mix(in oklab, ${ed} 5%, transparent)`,
              "--card-foreground": ed,
              "--corner-shape": s.getPropertyValue("--codex-corner-shape").trim() || "round",
              "--control-spacing": c(s, l, "--spacing-button-toolbar-inline", "paddingInlineStart", "12px"),
              "--cursor-interaction":
                getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
              "--destructive":
                ((L = "--color-text-warning"),
                (R = "light-dark(rgb(226 85 7), rgb(255 133 73))"),
                c(s, l, L, "color", R)),
              "--font-mono": c(
                s,
                l,
                "--font-mono",
                "fontFamily",
                'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              ),
              "--font-sans": c(s, l, "--font-sans", "fontFamily", '-apple-system, system-ui, "Segoe UI", sans-serif'),
              "--font-size-base": "live" === t ? eo : el,
              "--font-weight-normal": "live" === t ? "400" : c(s, l, "--font-ui-weight", "fontWeight", "400"),
              ...("live" === t && {
                "--font-line-height-base": eu,
                "--font-size-small": `max(11px, ${c(s, l, "--text-xs", "fontSize", "12px")})`,
                "--icon-size": "18px",
              }),
              "--foreground": ed,
              "--input":
                ((O = "--color-border-primary-outline"),
                (D = "light-dark(rgb(26 28 31 / 11.8%), color-mix(in oklab, rgb(0 0 0) 10%, transparent))"),
                c(s, l, O, "color", D)),
              "--muted": `color-mix(in srgb, ${ed} 10%, transparent)`,
              "--muted-foreground":
                ((U = "--color-codex-description"),
                (F = "light-dark(rgb(26 28 31 / 49.4%), rgb(255 255 255 / 49.8%))"),
                c(s, l, U, "color", F)),
              "--popover": ec,
              "--popover-foreground": ((q = "--color-text"), (H = ed), c(s, l, q, "color", H)),
              "--primary": eh,
              "--primary-foreground":
                ((G = "--color-text-inverse"),
                (z = "light-dark(rgb(255 255 255), rgb(13 13 13))"),
                c(s, l, G, "color", z)),
              "--radius": ep,
              "--radius-2xl": c(s, l, "--radius-2xl", "borderRadius", "16px"),
              "--radius-lg": ep,
              "--radius-md": c(s, l, "--radius-md", "borderRadius", "8px"),
              "--radius-sm": c(s, l, "--radius-sm", "borderRadius", "6px"),
              "--ring":
                ((W = "--color-ring"),
                (B = "light-dark(rgb(51 156 255), rgb(131 195 255 / 76%))"),
                c(s, l, W, "color", B)),
              "--secondary":
                (($ = "--color-background-primary-soft-alpha"),
                (V = "light-dark(rgb(243 243 243), rgb(48 48 48))"),
                c(s, l, $, "backgroundColor", V)),
              "--secondary-foreground": ed,
              "--blue":
                ((Y = "--color-chart-blue"),
                (X = "light-dark(rgb(51 156 255), rgb(51 156 255))"),
                c(s, l, Y, "color", X)),
              "--orange":
                ((K = "--color-chart-orange"),
                (Z = "light-dark(rgb(226 85 7), rgb(251 106 34))"),
                c(s, l, K, "color", Z)),
              "--green":
                ((Q = "--color-chart-green"),
                (J = "light-dark(rgb(0 162 64), rgb(64 201 119))"),
                c(s, l, Q, "color", J)),
              "--red":
                ((ee = "--color-chart-red"),
                (et = "light-dark(rgb(224 46 42), rgb(255 103 100))"),
                c(s, l, ee, "color", et)),
              "--purple":
                ((es = "--color-chart-purple"),
                (en = "light-dark(rgb(146 79 247), rgb(173 123 249))"),
                c(s, l, es, "color", en)),
              "--yellow":
                ((ei = "--color-chart-yellow"),
                (ea = "light-dark(rgb(255 195 0), rgb(255 210 64))"),
                c(s, l, ei, "color", ea)),
              ...n,
              "--viz-series-1": eh,
              "--viz-series-2": em[0] ?? eg[0],
              "--viz-series-3": em[1] ?? eg[1],
              "--viz-series-4": em[2] ?? eg[2],
              "--viz-series-5": em[3] ?? eg[3],
              "--viz-series-6": em[4] ?? eg[4],
            }
          } finally {
            l.remove()
          }
        },
        sh: a,
      },
    )
  },
  CnTb(e, t, s) {
    let n = (0, s("nkTT").a)({
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
  hwJp(e, t, s) {
    let n = (0, s("nkTT").a)({
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
      body: '<path d="M23.973 4.15811C26.5309 3.21084 29.2501 5.10338 29.2504 7.83096V22.2997C29.2504 24.973 26.6312 26.8608 24.0951 26.0155L19.2504 24.4003V24.6669C19.2504 25.9151 18.8715 27.0884 18.0297 27.955C17.1821 28.8273 15.9991 29.2499 14.6664 29.2499C13.3336 29.2498 12.1507 28.8274 11.3031 27.955C10.4613 27.0884 10.0834 25.9151 10.0834 24.6669V21.3446L10.015 21.3222C9.87083 21.2742 9.71971 21.25 9.56775 21.2499H6.00037C3.83725 21.2499 2.08337 19.496 2.08337 17.3329V13.3329C2.08365 11.17 3.83742 9.4169 6.00037 9.4169H9.52185C9.68979 9.4169 9.85655 9.38636 10.014 9.32803L23.973 4.15811ZM12.5834 24.6669C12.5834 25.4187 12.8056 25.9127 13.097 26.2128C13.3828 26.5067 13.8664 26.7498 14.6664 26.7499C15.4667 26.7499 15.951 26.5068 16.2367 26.2128C16.5282 25.9127 16.7504 25.4187 16.7504 24.6669V23.5673L12.5834 22.1776V24.6669ZM26.7504 7.83096C26.7501 6.84456 25.7663 6.16025 24.8412 6.50283L11.0834 11.5976V19.0429L24.8851 23.6444C25.8025 23.9502 26.7504 23.2667 26.7504 22.2997V7.83096ZM6.00037 11.9169C5.21813 11.9169 4.58365 12.5507 4.58337 13.3329V17.3329C4.58337 18.1153 5.21796 18.7499 6.00037 18.7499H8.58337V11.9169H6.00037Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    s.d(t, {}, { o: n })
  },
  D1Cn(e, t, s) {
    s.d(t, {
      A: () =>
        function e(t, s, r = 0, l = 1 / 0, o) {
          if (
            ((s = Math.floor(s)),
            (r = Math.floor(Math.max(0, r))),
            (l = Math.floor(Math.min(t.length - 1, l))),
            !(r <= s && s <= l))
          )
            return t
          for (
            o =
              void 0 === o
                ? i
                : (function (e = n.A) {
                    if (e === n.A) return i
                    if ("function" != typeof e) throw TypeError("compare is not a function")
                    return (t, s) => {
                      let n = e(t, s)
                      return n || 0 === n ? n : (0 === e(s, s)) - (0 === e(t, t))
                    }
                  })(o);
            l > r;
          ) {
            if (l - r > 600) {
              let n = l - r + 1,
                i = s - r + 1,
                a = Math.log(n),
                u = 0.5 * Math.exp((2 * a) / 3),
                c = 0.5 * Math.sqrt((a * u * (n - u)) / n) * (i - n / 2 < 0 ? -1 : 1),
                d = Math.max(r, Math.floor(s - (i * u) / n + c)),
                h = Math.min(l, Math.floor(s + ((n - i) * u) / n + c))
              e(t, s, d, h, o)
            }
            let n = t[s],
              i = r,
              u = l
            for (a(t, r, s), o(t[l], n) > 0 && a(t, r, l); i < u;) {
              for (a(t, i, u), ++i, --u; 0 > o(t[i], n);) ++i
              for (; o(t[u], n) > 0;) --u
            }
            ;(0 === o(t[r], n) ? a(t, r, u) : a(t, ++u, l), u <= s && (r = u + 1), s <= u && (l = u - 1))
          }
          return t
        },
    })
    var n = s("GGMO")
    function i(e, t) {
      return (null == e || !(e >= e)) - (null == t || !(t >= t)) || (e < t ? -1 : +(e > t))
    }
    function a(e, t, s) {
      let n = e[t]
      ;((e[t] = e[s]), (e[s] = n))
    }
  },
  e2Qa(e, t, s) {
    var n = s("Db1a"),
      i = s("YAwX"),
      a = s("DZhG"),
      r = s("dQbG"),
      l = s("Rjuc"),
      o = s("lCw0")
    s.d(
      t,
      {},
      {
        A: function (e, t, s) {
          var u = null,
            c = (0, i.A)(!0),
            d = null,
            h = a.A,
            m = null,
            g = (0, l.i)(p)
          function p(i) {
            var a,
              r,
              l,
              o,
              p,
              f = (i = (0, n.A)(i)).length,
              x = !1,
              y = Array(f),
              b = Array(f)
            for (null == d && (m = h((p = g()))), a = 0; a <= f; ++a) {
              if (!(a < f && c((o = i[a]), a, i)) === x)
                if ((x = !x)) ((r = a), m.areaStart(), m.lineStart())
                else {
                  for (m.lineEnd(), m.lineStart(), l = a - 1; l >= r; --l) m.point(y[l], b[l])
                  ;(m.lineEnd(), m.areaEnd())
                }
              x && ((y[a] = +e(o, a, i)), (b[a] = +t(o, a, i)), m.point(u ? +u(o, a, i) : y[a], s ? +s(o, a, i) : b[a]))
            }
            if (p) return ((m = null), p + "" || null)
          }
          function f() {
            return (0, r.A)().defined(c).curve(h).context(d)
          }
          return (
            (e = "function" == typeof e ? e : void 0 === e ? o.x : (0, i.A)(+e)),
            (t = "function" == typeof t ? t : void 0 === t ? (0, i.A)(0) : (0, i.A)(+t)),
            (s = "function" == typeof s ? s : void 0 === s ? o.y : (0, i.A)(+s)),
            (p.x = function (t) {
              return arguments.length ? ((e = "function" == typeof t ? t : (0, i.A)(+t)), (u = null), p) : e
            }),
            (p.x0 = function (t) {
              return arguments.length ? ((e = "function" == typeof t ? t : (0, i.A)(+t)), p) : e
            }),
            (p.x1 = function (e) {
              return arguments.length ? ((u = null == e ? null : "function" == typeof e ? e : (0, i.A)(+e)), p) : u
            }),
            (p.y = function (e) {
              return arguments.length ? ((t = "function" == typeof e ? e : (0, i.A)(+e)), (s = null), p) : t
            }),
            (p.y0 = function (e) {
              return arguments.length ? ((t = "function" == typeof e ? e : (0, i.A)(+e)), p) : t
            }),
            (p.y1 = function (e) {
              return arguments.length ? ((s = null == e ? null : "function" == typeof e ? e : (0, i.A)(+e)), p) : s
            }),
            (p.lineX0 = p.lineY0 =
              function () {
                return f().x(e).y(t)
              }),
            (p.lineY1 = function () {
              return f().x(e).y(s)
            }),
            (p.lineX1 = function () {
              return f().x(u).y(t)
            }),
            (p.defined = function (e) {
              return arguments.length ? ((c = "function" == typeof e ? e : (0, i.A)(!!e)), p) : c
            }),
            (p.curve = function (e) {
              return arguments.length ? ((h = e), null != d && (m = h(d)), p) : h
            }),
            (p.context = function (e) {
              return arguments.length ? (null == e ? (d = m = null) : (m = h((d = e))), p) : d
            }),
            p
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
        r = (s - e._y1) / (i || (n < 0 && -0))
      return (
        ((a < 0 ? -1 : 1) + (r < 0 ? -1 : 1)) *
          Math.min(Math.abs(a), Math.abs(r), 0.5 * Math.abs((a * i + r * n) / (n + i))) || 0
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
        r = e._y1,
        l = (a - n) / 3
      e._context.bezierCurveTo(n + l, i + l * t, a - l, r - l * s, a, r)
    }
    function r(e) {
      this._context = e
    }
    function l(e) {
      this._context = new o(e)
    }
    function o(e) {
      this._context = e
    }
    ;((r.prototype = {
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
      ((l.prototype = Object.create(r.prototype)).point = function (e, t) {
        r.prototype.point.call(this, t, e)
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
            return new r(e)
          },
          N: function (e) {
            return new l(e)
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
        r = Array(n)
      for (i[0] = 0, a[0] = 2, r[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
        ((i[t] = 1), (a[t] = 4), (r[t] = 4 * e[t] + 2 * e[t + 1]))
      for (i[n - 1] = 2, a[n - 1] = 7, r[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
        ((s = i[t] / a[t - 1]), (a[t] -= s), (r[t] -= s * r[t - 1]))
      for (i[n - 1] = r[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (r[t] - i[t + 1]) / a[t]
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
            for (var n = i(e), a = i(t), r = 0, l = 1; l < s; ++r, ++l)
              this._context.bezierCurveTo(n[0][r], a[0][r], n[1][r], a[1][r], e[l], t[l])
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
      r = s("Rjuc"),
      l = s("lCw0")
    s.d(
      t,
      {},
      {
        A: function (e, t) {
          var s = (0, i.A)(!0),
            o = null,
            u = a.A,
            c = null,
            d = (0, r.i)(h)
          function h(i) {
            var a,
              r,
              l,
              h = (i = (0, n.A)(i)).length,
              m = !1
            for (null == o && (c = u((l = d()))), a = 0; a <= h; ++a)
              (!(a < h && s((r = i[a]), a, i)) === m && ((m = !m) ? c.lineStart() : c.lineEnd()),
                m && c.point(+e(r, a, i), +t(r, a, i)))
            if (l) return ((c = null), l + "" || null)
          }
          return (
            (e = "function" == typeof e ? e : void 0 === e ? l.x : (0, i.A)(e)),
            (t = "function" == typeof t ? t : void 0 === t ? l.y : (0, i.A)(t)),
            (h.x = function (t) {
              return arguments.length ? ((e = "function" == typeof t ? t : (0, i.A)(+t)), h) : e
            }),
            (h.y = function (e) {
              return arguments.length ? ((t = "function" == typeof e ? e : (0, i.A)(+e)), h) : t
            }),
            (h.defined = function (e) {
              return arguments.length ? ((s = "function" == typeof e ? e : (0, i.A)(!!e)), h) : s
            }),
            (h.curve = function (e) {
              return arguments.length ? ((u = e), null != o && (c = u(o)), h) : u
            }),
            (h.context = function (e) {
              return arguments.length ? (null == e ? (o = c = null) : (c = u((o = e))), h) : o
            }),
            h
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
            for (var s, i, a, r = 0, l = e[0].length; r < l; ++r) {
              for (a = s = 0; s < i; ++s) a += e[s][r][1] || 0
              if (a) for (s = 0; s < i; ++s) e[s][r][1] /= a
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
            for (var s, n, i, a = 1, r = e[t[0]], l = r.length; a < i; ++a)
              for (n = r, r = e[t[a]], s = 0; s < l; ++s) r[s][1] += r[s][0] = isNaN(n[s][1]) ? n[s][0] : n[s][1]
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
    function r(e) {
      this._ += e[0]
      for (let t = 1, s = e.length; t < s; ++t) this._ += arguments[t] + e[t]
    }
    class l {
      constructor(e) {
        ;((this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == e
              ? r
              : (function (e) {
                  let t = Math.floor(e)
                  if (!(t >= 0)) throw Error(`invalid digits: ${e}`)
                  if (t > 15) return r
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
        let r = this._x1,
          l = this._y1,
          o = s - e,
          u = i - t,
          c = r - e,
          d = l - t,
          h = c * c + d * d
        if (null === this._x1) this._append`M${(this._x1 = e)},${(this._y1 = t)}`
        else if (h > 1e-6)
          if (Math.abs(d * o - u * c) > 1e-6 && a) {
            let m = s - r,
              g = i - l,
              p = o * o + u * u,
              f = Math.sqrt(p),
              x = Math.sqrt(h),
              y = a * Math.tan((n - Math.acos((p + h - (m * m + g * g)) / (2 * f * x))) / 2),
              b = y / x,
              _ = y / f
            ;(Math.abs(b - 1) > 1e-6 && this._append`L${e + b * c},${t + b * d}`,
              this._append`A${a},${a},0,0,${+(d * m > c * g)},${(this._x1 = e + _ * o)},${(this._y1 = t + _ * u)}`)
          } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`
      }
      arc(e, t, s, r, l, o) {
        if (((e *= 1), (t *= 1), (s *= 1), (o = !!o), s < 0)) throw Error(`negative radius: ${s}`)
        let u = s * Math.cos(r),
          c = s * Math.sin(r),
          d = e + u,
          h = t + c,
          m = 1 ^ o,
          g = o ? r - l : l - r
        ;(null === this._x1
          ? this._append`M${d},${h}`
          : (Math.abs(this._x1 - d) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && this._append`L${d},${h}`,
          s &&
            (g < 0 && (g = (g % i) + i),
            g > a
              ? this
                  ._append`A${s},${s},0,1,${m},${e - u},${t - c}A${s},${s},0,1,${m},${(this._x1 = d)},${(this._y1 = h)}`
              : g > 1e-6 &&
                this
                  ._append`A${s},${s},0,${+(g >= n)},${m},${(this._x1 = e + s * Math.cos(l))},${(this._y1 = t + s * Math.sin(l))}`))
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
        () => new l(t)
      )
    }
    l.prototype
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
      r = s("jCc0")
    function l(e, t) {
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
            t = r.A,
            s = a.A,
            u = l
          function c(i) {
            var a,
              r,
              l = Array.from(e.apply(this, arguments), o),
              c = l.length,
              d = -1
            for (let e of i) for (a = 0, ++d; a < c; ++a) (l[a][d] = [0, +u(e, l[a].key, d, i)]).data = e
            for (a = 0, r = (0, n.A)(t(l)); a < c; ++a) l[r[a]].index = a
            return (s(l, r), l)
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
                ? ((t = null == e ? r.A : "function" == typeof e ? e : (0, i.A)(Array.from(e))), c)
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
//# sourceMappingURL=832672.5d5bbf639a.js.map
