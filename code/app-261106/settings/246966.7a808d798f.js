export const __rspack_esm_ids = [246966]
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
      g = s("QsfR"),
      m = s("PsSt"),
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
        k = (0, m.Y)(),
        M = (0, g.r)(),
        S = (0, d.G)((e) => (0, h.iV)(e, "xAxis", j, M)),
        E = (0, d.G)((e) => (0, h.iV)(e, "yAxis", C, M))
      if (null == S || null == E) return null
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
          g = r.x2,
          m = r.y1,
          p = r.y2
        if (null == i || null == a) return null
        var f = new b.z({ x: i, y: a }),
          x = {
            x: e ? (null != (o = i.map(h, { position: "start" })) ? o : null) : i.rangeMin(),
            y: s ? (null != (u = a.map(m, { position: "start" })) ? u : null) : a.rangeMin(),
          },
          y = {
            x: t ? (null != (c = i.map(g, { position: "end" })) ? c : null) : i.rangeMax(),
            y: n ? (null != (d = a.map(p, { position: "end" })) ? d : null) : a.rangeMax(),
          }
        return "discard" !== r.ifOverflow || (f.isInRange(x) && f.isInRange(y)) ? (0, l.sl)(x, y) : null
      })(T, P, N, I, S, E, e)
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
      g = s("QsfR"),
      m = s("PsSt"),
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
        v = (0, g.r)(),
        j = (0, m.Y)(),
        C = (0, d.G)((e) => (0, h.Rl)(e, t)),
        k = (0, d.G)((e) => (0, h.sf)(e, s)),
        M = (0, d.G)((e) => (0, h.iV)(e, "xAxis", t, v)),
        S = (0, d.G)((e) => (0, h.iV)(e, "yAxis", s, v)),
        E = (0, u.sk)()
      if (!j || !E || null == C || null == k || null == M || null == S) return null
      var T = ((e, t, s, n, i, a, r) => {
        var o,
          u,
          c = r.x,
          d = r.y,
          h = r.segment,
          g = r.ifOverflow,
          m = (0, l.vh)(c)
        if ((0, l.vh)(d)) {
          var p = s.x,
            f = s.width,
            x = t.map(d, { position: n })
          if (!(0, b.H)(x) || ("discard" === g && !t.isInRange(x))) return null
          var y = [
            { x: p + f, y: x },
            { x: p, y: x },
          ]
          return "left" === a ? y.reverse() : y
        }
        if (m) {
          var v = s.y,
            w = s.height,
            A = e.map(c, { position: n })
          if (!(0, b.H)(A) || ("discard" === g && !e.isInRange(A))) return null
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
            "discard" === g && u.some((e) => !o.isInRange(e)) ? null : u)
          : null
      })(M, S, E, e.position, C.orientation, k.orientation, e)
      if (!T) return null
      var P = T[0],
        N = T[1]
      if (null == P || null == N) return null
      var I = P.x,
        L = P.y,
        R = N.x,
        O = N.y,
        U = w(
          w({ clipPath: "hidden" === y ? "url(#".concat(j, ")") : void 0 }, (0, p.a)(e)),
          {},
          { x1: I, y1: L, x2: R, y2: O },
        ),
        D = (0, o.vh)({ x1: I, y1: L, x2: R, y2: O })
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
          })(c, U),
          n.createElement(
            r.zJ,
            A({}, D, { lowerWidth: D.width, upperWidth: D.width }),
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
    function M(e) {
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
    ;((M.displayName = "ReferenceLine"), s.d(t, {}, { e_: M }))
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
      g = s("jAnS"),
      m = s("T8X0"),
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
        M = (0, r.gh)(x.u),
        S = (0, h.As)(),
        E = (0, r.Ul)(m.uI),
        { data: T, status: P } = (0, f.P1)(),
        N = (0, o.zy)()
      j[0] !== N ? ((t = (0, o.AO)(N)), (j[0] = N), (j[1] = t)) : (t = j[1])
      let I = t,
        L = (0, l.useRef)(null),
        R = (0, l.useRef)(void 0),
        O = "chatgpt" === S.authMethod || "chatgptAuthTokens" === S.authMethod
      j[2] !== N.pathname || j[3] !== N.search || j[4] !== E || j[5] !== k
        ? ((s =
            "chatgpt-thread" === k ||
            ("home" === k && "/" === N.pathname && (0, g.CV)(N.search)) ||
            ("chat" === E && ("home" === k || "other" === k))),
          (j[2] = N.pathname),
          (j[3] = N.search),
          (j[4] = E),
          (j[5] = k),
          (j[6] = s))
        : (s = j[6])
      let U = s,
        D = !0 === T && "success" === P && !S.isLoading && O && U
      j[7] !== S.accountId ||
      j[8] !== S.computeResidency ||
      j[9] !== N.hash ||
      j[10] !== N.pathname ||
      j[11] !== N.search ||
      j[12] !== I ||
      j[13] !== C ||
      j[14] !== M
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
              n = (0, d.U)(S.accountId, S.computeResidency, N.pathname)
            n
              ? ((e.search = ""), (e.hash = ""))
              : ["/p/:promoCode", "/up/:promoCode", "/codex/p/:promoCode"].includes(C) && (e.pathname = N.pathname)
            let i = (0, u.fn)({ url: e.toString(), referrer: n ? void 0 : (s ?? void 0) }),
              a = M.get(p.YV)
            ;(a.logProductEvent(c.rN, { ...i, anonymousId: R.current }, (e) => {
              "sent" === e.status && "hidden" === document.visibilityState && a.flush().catch(_)
            }),
              (L.current = { key: I, url: i.url }))
          }),
          (j[7] = S.accountId),
          (j[8] = S.computeResidency),
          (j[9] = N.hash),
          (j[10] = N.pathname),
          (j[11] = N.search),
          (j[12] = I),
          (j[13] = C),
          (j[14] = M),
          (j[15] = n))
        : (n = j[15])
      let q = (0, l.useEffectEvent)(n)
      return (
        j[16] !== D || j[17] !== q || j[18] !== I
          ? ((a = () => {
              if (!D) {
                L.current = null
                return
              }
              if (L.current?.key === I) return
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
            (j[16] = D),
            (j[17] = q),
            (j[18] = I),
            (j[19] = a))
          : (a = j[19]),
        j[20] !== D || j[21] !== I || j[22] !== C
          ? ((b = [D, I, C]), (j[20] = D), (j[21] = I), (j[22] = C), (j[23] = b))
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
        { routeTemplate: h, routeKind: g } = e,
        m = (0, o.zy)()
      d[0] !== m ? ((t = (0, o.AO)(m)), (d[0] = m), (d[1] = t)) : (t = d[1])
      let p = t
      ;(d[2] !== h ? ((s = () => () => {}), (d[2] = h), (d[3] = s)) : (s = d[3]),
        d[4] !== p || d[5] !== h ? ((a = [p, h]), (d[4] = p), (d[5] = h), (d[6] = a)) : (a = d[6]),
        (0, l.useEffect)(s, a))
      let f = "/settings/usage" !== h
      return (
        d[7] !== h || d[8] !== f
          ? ((r = (0, n.jsx)(j, { routeTemplate: h, enabled: f })), (d[7] = h), (d[8] = f), (d[9] = r))
          : (r = d[9]),
        d[10] !== g || d[11] !== h
          ? ((u = (0, n.jsx)(b, { routeTemplate: h, routeKind: g })), (d[10] = g), (d[11] = h), (d[12] = u))
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
        { routeTemplate: d, settingsTab: h, enabled: g } = e,
        m = void 0 === g || g,
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
        c[7] !== b || c[8] !== _ || c[9] !== m || c[10] !== j || c[11] !== y
          ? ((n = () => {
              if ("success" !== _ || !0 !== b) return void y.set(w, null)
              if (!m) return
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
            (c[9] = m),
            (c[10] = j),
            (c[11] = y),
            (c[12] = n))
          : (n = c[12]),
        c[13] !== b || c[14] !== _ || c[15] !== m || c[16] !== A || c[17] !== d || c[18] !== y || c[19] !== h
          ? ((u = [b, _, m, A, d, h, y]),
            (c[13] = b),
            (c[14] = _),
            (c[15] = m),
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
            { ariaLabel: d, className: h, options: g, selectedId: m, animateSelection: p, size: f, onSelect: x } = e,
            y = void 0 === p || p,
            b = void 0 === f ? "default" : f,
            _ = (0, l.useId)(),
            v =
              "compact" === b
                ? "inline-grid gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5"
                : "bg-text/10 inline-grid gap-1 rounded-2xl p-1"
          c[0] !== h || c[1] !== v ? ((t = (0, a.A)(v, h)), (c[0] = h), (c[1] = v), (c[2] = t)) : (t = c[2])
          let w = `repeat(${g.length}, minmax(0, 1fr))`
          if (
            (c[3] !== w ? ((s = { gridTemplateColumns: w }), (c[3] = w), (c[4] = s)) : (s = c[4]),
            c[5] !== y || c[6] !== _ || c[7] !== x || c[8] !== g || c[9] !== m || c[10] !== b)
          ) {
            let e
            ;(c[12] !== y || c[13] !== _ || c[14] !== x || c[15] !== m || c[16] !== b
              ? ((e = (e) => {
                  let t = e.id === m
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
                (c[15] = m),
                (c[16] = b),
                (c[17] = e))
              : (e = c[17]),
              (o = g.map(e)),
              (c[5] = y),
              (c[6] = _),
              (c[7] = x),
              (c[8] = g),
              (c[9] = m),
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
            g,
            m = (0, i.c)(30),
            { actions: p, asset: f, subtitle: x, subtitleClassName: y, title: b, variant: _ } = e,
            v = void 0 === _ ? "default" : _
          m[0] !== f
            ? ((t = null == f ? null : (0, n.jsx)("div", { className: "flex", children: f })), (m[0] = f), (m[1] = t))
            : (t = m[1])
          let w = "page" === v ? "flex-nowrap" : "flex-wrap"
          m[2] !== w
            ? ((s = (0, a.A)("flex min-w-0 items-start justify-between gap-4", w)), (m[2] = w), (m[3] = s))
            : (s = m[3])
          let A = "settingsCompact" === v ? "gap-1.25" : "gap-1.5"
          m[4] !== A ? ((r = (0, a.A)("flex min-w-0 flex-1 basis-64 flex-col", A)), (m[4] = A), (m[5] = r)) : (r = m[5])
          let j = "settings" === v && "heading-lg font-normal",
            C = "settingsCompact" === v && "heading-lg font-semibold leading-7",
            k = "page" === v && "heading-lg electron:heading-xl",
            M = "default" === v && "heading-base electron:heading-lg"
          return (
            m[6] !== M || m[7] !== j || m[8] !== C || m[9] !== k
              ? ((l = (0, a.A)("min-w-0 break-words text-default", j, C, k, M)),
                (m[6] = M),
                (m[7] = j),
                (m[8] = C),
                (m[9] = k),
                (m[10] = l))
              : (l = m[10]),
            m[11] !== l || m[12] !== b
              ? ((o = (0, n.jsx)("h1", { className: l, children: b })), (m[11] = l), (m[12] = b), (m[13] = o))
              : (o = m[13]),
            m[14] !== x || m[15] !== y
              ? ((u =
                  null == x
                    ? null
                    : (0, n.jsx)("div", { className: (0, a.A)("text-base text-secondary", y), children: x })),
                (m[14] = x),
                (m[15] = y),
                (m[16] = u))
              : (u = m[16]),
            m[17] !== o || m[18] !== u || m[19] !== r
              ? ((c = (0, n.jsxs)("div", { className: r, children: [o, u] })),
                (m[17] = o),
                (m[18] = u),
                (m[19] = r),
                (m[20] = c))
              : (c = m[20]),
            m[21] !== p
              ? ((d =
                  null == p
                    ? null
                    : (0, n.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: p })),
                (m[21] = p),
                (m[22] = d))
              : (d = m[22]),
            m[23] !== c || m[24] !== d || m[25] !== s
              ? ((h = (0, n.jsxs)("div", { className: s, children: [c, d] })),
                (m[23] = c),
                (m[24] = d),
                (m[25] = s),
                (m[26] = h))
              : (h = m[26]),
            m[27] !== h || m[28] !== t
              ? ((g = (0, n.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, h],
                })),
                (m[27] = h),
                (m[28] = t),
                (m[29] = g))
              : (g = m[29]),
            g
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
              hideValues: g,
              orientation: m,
              ticks: p,
              maximumValue: f,
              minimumValue: x,
              showPercentageUnit: y,
              unit: b,
            } = e,
            _ = void 0 !== g && g,
            v = void 0 === m ? "left" : m,
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
          let M = "credits" === b || "usd" === b || _
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
          let S = 56 * !_
          return (
            h[20] !== _ ||
            h[21] !== v ||
            h[22] !== S ||
            h[23] !== M ||
            h[24] !== t ||
            h[25] !== s ||
            h[26] !== u ||
            h[27] !== c
              ? ((d = (0, n.jsx)(l.h, {
                  orientation: v,
                  allowDecimals: M,
                  axisLine: !1,
                  hide: _,
                  domain: t,
                  interval: 0,
                  tick: s,
                  tickCount: 4,
                  ticks: u,
                  tickFormatter: c,
                  tickLine: !1,
                  width: S,
                })),
                (h[20] = _),
                (h[21] = v),
                (h[22] = S),
                (h[23] = M),
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
            { height: u, points: c, width: d, x: h, y: g } = e,
            m = c?.[0]
          o[0] !== c ? ((t = c?.at(-1)), (o[0] = c), (o[1] = t)) : (t = o[1])
          let p = t
          if (null != m && null != p) ((s = m.x), (a = m.y), (r = p.y))
          else {
            if (null == h || null == g || null == d || null == u) return null
            ;((s = h + d / 2), (a = g), (r = g + u))
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
            g = void 0 !== r && r,
            m = "middle"
          return (
            g || 0 !== l ? g || l !== c - 1 || (m = "end") : (m = "start"),
            a[0] !== l || a[1] !== o.value || a[2] !== u
              ? ((t = null == u ? o.value : u(o.value, l)), (a[0] = l), (a[1] = o.value), (a[2] = u), (a[3] = t))
              : (t = a[3]),
            a[4] !== t || a[5] !== m || a[6] !== d || a[7] !== h
              ? ((s = (0, n.jsx)("text", {
                  className: "text-xs",
                  dy: 12,
                  fill: "var(--color-text-secondary)",
                  textAnchor: m,
                  x: d,
                  y: h,
                  children: t,
                })),
                (a[4] = t),
                (a[5] = m),
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
      h = s("Sm6l"),
      g = s("evwP"),
      m = s("JJW2"),
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
          ? ((s = (0, n.jsx)(m.A, { "aria-hidden": "true", className: t })), (o[2] = t), (o[3] = s))
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
    function M(e) {
      let t,
        s,
        a,
        l,
        o,
        c = (0, i.c)(12),
        { children: d, reduceMotion: h } = e,
        [g, m] = (0, u.useState)(null)
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            m(e.contentRect.height)
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
        c[3] !== g ? ((a = null == g ? void 0 : { height: g }), (c[3] = g), (c[4] = a)) : (a = c[4]),
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
            m,
            p,
            A,
            C,
            S,
            E,
            T,
            P = (0, i.c)(73),
            {
              actions: N,
              analyticsChart: I,
              balanceHistory: L,
              totalDescription: R,
              activeSeriesKey: O,
              children: U,
              emptyMessage: D,
              dailyLegend: q,
              estimatedSpendUsd: F,
              fillChartHeight: H,
              hasData: G,
              hideTotal: z,
              onChangeSeriesIsolation: B,
              onHoverSeriesChange: W,
              onToggleSeries: $,
              preservePopulatedCardLayout: V,
              consumerAnalytics: Y,
              scope: X,
              hiddenSeriesKeys: Z,
              series: K,
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
            eg = () => {
              ;((ed.current = null), W?.(eh.current))
            },
            em = el && ei,
            ep = em && ea && null == ee,
            ef = J.isLoading && !G,
            ex = !!J.isUpdating,
            ey = ef || ex,
            eb = K.length > 0 || null != $,
            e_ = null != q && !G && !J.isLoading
          if (
            (null != et || (J.isLoading && J.preserveEmptyLayout)) &&
            !G &&
            !J.isError &&
            null != D &&
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
              P[2] !== D || P[3] !== J.isLoading || P[4] !== J.reduceMotion
                ? ((t = J.isLoading ? (0, n.jsx)(w, { compact: !0, reduceMotion: J.reduceMotion }) : D),
                  (P[2] = D),
                  (P[3] = J.isLoading),
                  (P[4] = J.reduceMotion),
                  (P[5] = t))
                : (t = P[5]),
              P[6] !== t
                ? ((s = (0, n.jsx)(g.W, { layout: "settings-row", children: t })), (P[6] = t), (P[7] = s))
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
            ew = K.map(v),
            eA = null == q ? ew : o()(ew, _, "desc"),
            ej =
              null == q
                ? "flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs leading-4 text-secondary"
                : "-mx-2 grid h-25 grid-cols-2 content-start gap-x-6 gap-y-1 overflow-y-auto px-2 @lg:grid-cols-3 pointer-coarse:h-auto pointer-coarse:min-h-25 pointer-coarse:overflow-visible",
            eC = !el && "mt-2",
            ek = !G && "min-h-4",
            eM = !J.reduceMotion && "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
            eS = ex && "opacity-60"
          P[11] !== eM || P[12] !== eS || P[13] !== ej || P[14] !== eC || P[15] !== ek
            ? ((t = (0, r.A)(ej, eC, ek, eM, eS)),
              (P[11] = eM),
              (P[12] = eS),
              (P[13] = ej),
              (P[14] = eC),
              (P[15] = ek),
              (P[16] = t))
            : (t = P[16])
          let eE = null == q ? void 0 : eg,
            eT = eA.map((e) => {
              let t,
                { entry: s, index: i } = e,
                l = K.length > 1 && !Z?.has(s.key) && K.every((e) => e.key === s.key || Z?.has(e.key)),
                o = q?.shares?.get(s.key)
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
                    null == q
                      ? "inline-flex items-center gap-1"
                      : "-mx-2 flex h-12 min-w-0 items-center gap-2.5 rounded-md px-2 text-start hover:bg-secondary-ghost-hover focus-visible:bg-secondary-ghost-hover",
                    null != $ && "cursor-interaction",
                    null != O && O !== s.key && "opacity-40",
                    Z?.has(s.key) && "opacity-50",
                  ),
                  "aria-pressed": null == $ ? void 0 : !Z?.has(s.key) && (!eo || !!Z?.size),
                  onClick:
                    null == $
                      ? void 0
                      : (e) => {
                          ;(null == B || 0 === e.detail || e.detail % 2 == 1) &&
                            ((ec.current = l ? s.key : null),
                            $(s.key),
                            eo && null != I && K.length > 1 && (0, x.zJ)(eu, I, l ? null : s.key))
                        },
                  onDoubleClick:
                    null == B
                      ? void 0
                      : () => {
                          let e = ec.current === s.key ? null : s.key
                          ;(B(e), !eo && null != I && K.length > 1 && (0, x.zJ)(eu, I, e))
                        },
                  onPointerEnter:
                    null == q
                      ? void 0
                      : (e) => {
                          "touch" !== e.pointerType && ((ed.current = s.key), W?.(s.key))
                        },
                  onPointerLeave: null == q ? void 0 : eg,
                  onPointerCancel: null == q ? void 0 : eg,
                  onFocus:
                    null == q
                      ? void 0
                      : (e) => {
                          e.currentTarget.matches(":focus-visible") && ((eh.current = s.key), W?.(s.key))
                        },
                  onBlur:
                    null == q
                      ? void 0
                      : () => {
                          ;((eh.current = null), W?.(ed.current))
                        },
                  type: null == $ ? void 0 : "button",
                  children: [
                    (0, n.jsx)(b.z, { color: s.color, index: i, variant: null == q ? "dot" : "bar" }),
                    null == q
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
              return null != q || (null == s.tooltip && null == B)
                ? u
                : (0, n.jsx)(
                    a.m,
                    {
                      content: (0, n.jsxs)(n.Fragment, {
                        children: [
                          s.tooltip,
                          null != B
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
            ? ((l = el ? (0, n.jsx)(M, { reduceMotion: J.reduceMotion, children: eP }) : eP),
              (P[21] = el),
              (P[22] = eP),
              (P[23] = J.reduceMotion),
              (P[24] = l))
            : (l = P[24])
          let eN = l,
            eI = en ? "gap-3" : "gap-2",
            eL = ep ? "pt-6" : "pt-3.5",
            eR = !em && (!el || eb ? "min-h-64" : "min-h-60"),
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
            P[32] !== F ||
            P[33] !== ea ||
            P[34] !== ef ||
            P[35] !== ey ||
            P[36] !== X ||
            P[37] !== J.reduceMotion ||
            P[38] !== ee ||
            P[39] !== et ||
            P[40] !== R ||
            P[41] !== es
              ? ((m =
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
                                  null == F
                                    ? null
                                    : (0, n.jsx)("span", {
                                        className: "text-xs leading-4 text-secondary",
                                        children: (0, n.jsx)(y.j, { usd: F }),
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
                (P[32] = F),
                (P[33] = ea),
                (P[34] = ef),
                (P[35] = ey),
                (P[36] = X),
                (P[37] = J.reduceMotion),
                (P[38] = ee),
                (P[39] = et),
                (P[40] = R),
                (P[41] = es),
                (P[42] = m))
              : (m = P[42]))
          let eU = null == q ? "contents" : "relative flex flex-col gap-2",
            eD = el && !e_ && "relative z-10"
          P[43] !== en ||
          P[44] !== em ||
          P[45] !== ey ||
          P[46] !== ep ||
          P[47] !== $ ||
          P[48] !== er ||
          P[49] !== J.reduceMotion ||
          P[50] !== eD
            ? ((p = (0, r.A)(
                eD,
                em ? (0, r.A)("shrink-0", { "h-48": en, "h-44": !en && ep, "h-36": !en && !ep }) : "flex-1",
                er && null != $ ? "min-h-36" : "min-h-24",
                !J.reduceMotion && "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none",
                ey && "opacity-60",
              )),
              (P[43] = en),
              (P[44] = em),
              (P[45] = ey),
              (P[46] = ep),
              (P[47] = $),
              (P[48] = er),
              (P[49] = J.reduceMotion),
              (P[50] = eD),
              (P[51] = p))
            : (p = P[51])
          let eq = ex || void 0,
            eF = e_ ? "absolute inset-0" : "contents"
          ;(P[52] !== U || P[53] !== D || P[54] !== ei || P[55] !== G || P[56] !== J
            ? ((A = (0, n.jsx)(k, { emptyMessage: D, fillChartHeight: ei, hasData: G, status: J, children: U })),
              (P[52] = U),
              (P[53] = D),
              (P[54] = ei),
              (P[55] = G),
              (P[56] = J),
              (P[57] = A))
            : (A = P[57]),
            P[58] !== eF || P[59] !== A
              ? ((C = (0, n.jsx)("div", { className: eF, children: A })), (P[58] = eF), (P[59] = A), (P[60] = C))
              : (C = P[60]),
            P[61] !== p || P[62] !== eq || P[63] !== C
              ? ((S = (0, n.jsx)("div", { className: p, "aria-busy": eq, children: C })),
                (P[61] = p),
                (P[62] = eq),
                (P[63] = C),
                (P[64] = S))
              : (S = P[64]))
          let eH = (G && (!el || K.length > 0)) || (er && null != $) ? eN : null
          return (
            P[65] !== eU || P[66] !== S || P[67] !== eH
              ? ((E = (0, n.jsxs)("div", { className: eU, children: [S, eH] })),
                (P[65] = eU),
                (P[66] = S),
                (P[67] = eH),
                (P[68] = E))
              : (E = P[68]),
            P[69] !== h || P[70] !== m || P[71] !== E
              ? ((T = (0, n.jsx)(f.t, {
                  contentOverflow: "visible",
                  children: (0, n.jsxs)("div", { className: h, children: [m, E] }),
                })),
                (P[69] = h),
                (P[70] = m),
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
              g = "number" == typeof h && Number.isFinite(h) ? h : u
            return [{ key: e.key, name: e.name, color: e.color, value: g, y: c }]
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
            g = t ? l?.getBoundingClientRect() : void 0
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
            tooltipWidth: null == g ? (l?.offsetWidth ?? 0) : g.width / d,
            tooltipHeight: null == g ? (l?.offsetHeight ?? 0) : g.height / h,
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
            g,
            m,
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
              ? ((g = (0, n.jsxs)("g", { "aria-hidden": s, pointerEvents: a, children: [c, d] })),
                (p[20] = s),
                (p[21] = a),
                (p[22] = c),
                (p[23] = d),
                (p[24] = g))
              : (g = p[24]),
            p[25] !== t || p[26] !== h || p[27] !== g
              ? ((m = (0, n.jsx)(t, { zIndex: h, children: g })), (p[25] = t), (p[26] = h), (p[27] = g), (p[28] = m))
              : (m = p[28]),
            m
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
              consumerAnalytics: g,
              scope: m,
            } = e,
            p = void 0 !== g && g
          o[0] !== c || o[1] !== h ? ((t = c ? () => h(!1) : void 0), (o[0] = c), (o[1] = h), (o[2] = t)) : (t = o[2])
          let f = t
          o[3] !== d || o[4] !== h || o[5] !== m
            ? ((s =
                "workspace" === m
                  ? void 0
                  : () => {
                      ;(h(!0), d())
                    }),
              (o[3] = d),
              (o[4] = h),
              (o[5] = m),
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
  LiVI(e, t, s) {
    s.d(t, { UsageSettingsPage: () => sl })
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
      g = s("QIEU"),
      m = s("Yy67")
    let p = (0, s("iJY0").a)({
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
      body: '<path d="M12.002 2.25C13.1291 2.25003 14.2175 2.42343 15.2402 2.74609C15.6351 2.87083 15.8541 3.29257 15.7295 3.6875C15.6048 4.08244 15.1831 4.30137 14.7881 4.17676C13.9098 3.89971 12.9741 3.75003 12.002 3.75C6.89242 3.75 2.75 7.89242 2.75 13.002C2.75008 15.4424 3.69407 17.6608 5.23828 19.3145C5.52099 19.6172 5.50488 20.0923 5.20215 20.375C4.8994 20.6575 4.42522 20.6405 4.14258 20.3379C2.34919 18.4175 1.25008 15.8374 1.25 13.002C1.25 7.06399 6.06399 2.25 12.002 2.25Z" fill="currentColor"/> <path d="M21.3447 9.34473C21.7404 9.22373 22.1597 9.44619 22.2812 9.8418C22.5883 10.8417 22.7539 11.9036 22.7539 13.002C22.7538 15.8371 21.6545 18.4175 19.8613 20.3379C19.5787 20.6405 19.1045 20.6573 18.8018 20.375C18.499 20.0923 18.4829 19.6172 18.7656 19.3145C20.3095 17.6609 21.2538 15.4422 21.2539 13.002C21.2539 12.0543 21.1114 11.1402 20.8477 10.2812C20.7264 9.88543 20.9489 9.46627 21.3447 9.34473Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8262 6.15039C18.119 5.85754 18.5938 5.85761 18.8867 6.15039C19.1796 6.44329 19.1796 6.91806 18.8867 7.21094L14.6123 11.4844C14.8723 11.9308 15.0244 12.4481 15.0244 13.002C15.0242 14.6713 13.6713 16.0242 12.002 16.0244C10.3324 16.0244 8.97869 14.6714 8.97852 13.002C8.97858 11.3324 10.3324 9.97852 12.002 9.97852C12.5729 9.97858 13.1051 10.1399 13.5605 10.415L17.8262 6.15039ZM12.002 11.4785C11.1608 11.4785 10.4786 12.1608 10.4785 13.002C10.4787 13.843 11.1609 14.5244 12.002 14.5244C12.8429 14.5242 13.5242 13.8429 13.5244 13.002C13.5243 12.1609 12.843 11.4787 12.002 11.4785Z" fill="currentColor"/>',
    })
    var f = s("zTeN"),
      x = s("oyxz"),
      y = s("Sm6l"),
      b = s("HOLv"),
      _ = s("smwl"),
      v = s("NLdj"),
      w = s("pdRU"),
      A = s("gPv1"),
      j = s("T1PX"),
      C = s("BSnr"),
      k = s("AWNZ"),
      M = s("ZEx5"),
      S = s("hZax"),
      E = s("rivV"),
      T = s("x7EU"),
      P = s("LjYy"),
      N = s("XHZ2"),
      I = s("Wf1j"),
      L = s("Ot7V"),
      R = s("QpGz"),
      O = s("laUo"),
      U = s("PXhB"),
      D = s("ae6t")
    function q(e) {
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
        g,
        m,
        p = (0, i.c)(30),
        { plan: f } = e,
        b = (0, I.A)()
      p[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (p[0] = t)) : (t = p[0])
      let v = (0, R.q)(t),
        w = (0, D.j)(),
        A = (0, O.m6)(f),
        j = null != A
      p[1] !== j ? ((s = { enabled: j }), (p[1] = j), (p[2] = s)) : (s = p[2])
      let { data: S } = (0, _.zw)(s)
      if (null == A) return null
      let E =
          null != S
            ? (0, U.m)({
                intl: b,
                amount: S.monthlyAmounts[A.pricePlan] ?? null,
                currencyCode: S.currencyCode,
                minorUnitExponent: S.minorUnitExponent,
              })
            : null,
        T = C.X
      ;(p[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)(x.A, {
            id: "settings.usage.plan.title",
            defaultMessage: "Your plan",
            description: "Title for the current plan section in usage settings",
          })),
          (p[3] = a))
        : (a = p[3]),
        p[4] !== f
          ? ((r = (0, n.jsx)(C.X.Header, { title: a, subtitle: (0, n.jsx)(F, { plan: f }) })), (p[4] = f), (p[5] = r))
          : (r = p[5]))
      let N = C.X,
        L = M.t,
        q = k.ic,
        H = (function (e) {
          switch (e) {
            case P.x.FREE:
              return (0, n.jsx)(x.A, {
                id: "settings.usage.plan.free",
                defaultMessage: "ChatGPT Free",
                description: "Name of the Free plan in usage settings",
              })
            case P.x.GO:
              return (0, n.jsx)(x.A, {
                id: "settings.usage.plan.go",
                defaultMessage: "ChatGPT Go",
                description: "Name of the Go plan in usage settings",
              })
            case P.x.PLUS:
              return (0, n.jsx)(x.A, {
                id: "settings.usage.plan.plus",
                defaultMessage: "ChatGPT Plus",
                description: "Name of the Plus plan in usage settings",
              })
            case P.x.PROLITE:
            case P.x.PRO:
            case P.x.PROMAX:
              return (0, n.jsx)(x.A, {
                id: "settings.usage.plan.pro.numberedTiers",
                defaultMessage: "ChatGPT {plan, select, prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}",
                description:
                  "Current Pro plan name in usage settings. plan is the persisted subscription type: prolite is Pro 100, pro is Pro 200, and promax is Pro 500. The numbers are fixed SKU names, not localized prices. ChatGPT and Pro are product names.",
                values: { plan: e },
              })
          }
        })(A.pricePlan)
      return (
        p[6] !== E
          ? ((l =
              null != E
                ? (0, n.jsx)(x.A, {
                    id: "settings.usage.plan.monthlyPrice",
                    defaultMessage: "{price} / month",
                    description: "Localized monthly price below the current plan name",
                    values: { price: E },
                  })
                : null),
            (p[6] = E),
            (p[7] = l))
          : (l = p[7]),
        p[8] !== v || p[9] !== w || p[10] !== A.pricePlan
          ? ((o = (e) => {
              w({ currentPlan: A.pricePlan, event: e, getPricingUrl: v, source: "usage_settings_plan_row" })
            }),
            (p[8] = v),
            (p[9] = w),
            (p[10] = A.pricePlan),
            (p[11] = o))
          : (o = p[11]),
        p[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(x.A, {
              id: "settings.usage.plan.view",
              defaultMessage: "View plans",
              description: "CTA to open the plan selection dialog",
            })),
            (p[12] = u))
          : (u = p[12]),
        p[13] !== o
          ? ((c = (0, n.jsx)(y.$, { color: "secondary", size: "toolbar", onClick: o, children: u })),
            (p[13] = o),
            (p[14] = c))
          : (c = p[14]),
        p[15] !== q || p[16] !== c || p[17] !== H || p[18] !== l
          ? ((d = (0, n.jsx)(q, { className: "gap-6", label: H, description: l, control: c })),
            (p[15] = q),
            (p[16] = c),
            (p[17] = H),
            (p[18] = l),
            (p[19] = d))
          : (d = p[19]),
        p[20] !== L || p[21] !== d
          ? ((h = (0, n.jsx)(L, { children: d })), (p[20] = L), (p[21] = d), (p[22] = h))
          : (h = p[22]),
        p[23] !== h || p[24] !== N.Content
          ? ((g = (0, n.jsx)(N.Content, { children: h })), (p[23] = h), (p[24] = N.Content), (p[25] = g))
          : (g = p[25]),
        p[26] !== T || p[27] !== g || p[28] !== r
          ? ((m = (0, n.jsxs)(T, { children: [r, g] })), (p[26] = T), (p[27] = g), (p[28] = r), (p[29] = m))
          : (m = p[29]),
        m
      )
    }
    function F(e) {
      let t,
        s,
        a,
        r = (0, i.c)(12),
        { plan: l } = e
      ;(r[0] !== l ? ((t = (0, O.gx)(l)), (r[0] = l), (r[1] = t)) : (t = r[1]),
        r[2] !== t ? ((s = { enabled: t }), (r[2] = t), (r[3] = s)) : (s = r[3]))
      let { data: o } = (0, _.TG)(s)
      if (!(0, O.gx)(l)) return null
      let u = (0, O.q8)(o),
        c = "ios" === u ? O.R0 : "android" === u ? O.PI : O.oK
      r[4] !== c
        ? ((a = (e) =>
            (0, n.jsx)("a", {
              className: "cursor-interaction text-link-primary!",
              href: c,
              target: "_blank",
              rel: "noreferrer",
              onClick: (e) => {
                ;(0, L.PQ)({ event: e, href: c, initiator: "open_in_browser_bridge" })
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
              ? ((e = (0, n.jsx)(x.A, {
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
              ? ((e = (0, n.jsx)(x.A, {
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
              ? ((e = (0, n.jsx)(x.A, {
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
    var H = s("EOo5"),
      G = s("irkb"),
      z = s("T0Rc"),
      B = s("xSOA"),
      W = s("Qgfj"),
      $ = s("bqtn"),
      V = s("SGsN"),
      Y = s("F0xz"),
      X = s("OWtl"),
      Z = s("SJoA"),
      K = s("I7Ou"),
      Q = s("QyE3"),
      J = s("SOLA"),
      ee = s("rvFo"),
      et = s("HFSu"),
      es = s("eShZ")
    let en = (0, W.YK)({
        save: {
          id: "settings.usage.subscriptionSharing.apps.save",
          defaultMessage: "Save",
          description:
            "Button at the top of App limits that saves all pending changes to apps' use of the user's ChatGPT plan allowance",
        },
      }),
      ei = (0, W.YK)({
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
    var ea = s("g2p6")
    let er = (0, W.YK)({
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
    function el() {
      let e,
        t,
        s,
        a,
        r,
        l,
        o,
        u,
        c = (0, i.c)(26),
        d = (0, f.gh)(X.u),
        h = (0, I.A)(),
        { data: g, isError: m, isFetching: p, refetch: b } = (0, f.Ul)(ea.s6)
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = ["set-chatpass-credit-preference"]), (c[0] = e))
        : (e = c[0]),
        c[1] !== d ? ((t = (e) => (0, ea.b$)(d, e)), (c[1] = d), (c[2] = t)) : (t = c[2]),
        c[3] !== h || c[4] !== d
          ? ((s = (e, t) => {
              d.get(V.Id).success(h.formatMessage(t ? er.enabled : er.disabled))
            }),
            (a = () => {
              d.get(V.Id).danger(h.formatMessage(er.updateError), {
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
      let { isPending: _, mutate: v } = (0, B.n)(r)
      if (m && null == g) {
        let e, t, s, i
        return (
          c[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", {
                role: "alert",
                children: (0, n.jsx)(x.A, {
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
            ? ((s = (0, n.jsx)(x.A, {
                id: "common.retry",
                defaultMessage: "Retry",
                description: "Button to retry an operation after an error",
              })),
              (c[14] = s))
            : (s = c[14]),
          c[15] !== p || c[16] !== t
            ? ((i = (0, n.jsx)(k.ic, {
                label: e,
                control: (0, n.jsx)(y.$, { color: "secondary", loading: p, size: "toolbar", onClick: t, children: s }),
              })),
              (c[15] = p),
              (c[16] = t),
              (c[17] = i))
            : (i = c[17]),
          i
        )
      }
      if (null == g) {
        let e
        return (
          c[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(K.u, {
                children: (0, n.jsx)(x.A, {
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
          ? ((l = (0, n.jsx)(x.A, {
              id: "settings.usage.credit.chatpass.title",
              defaultMessage: "Allow other apps to use credits after reaching your usage limit",
              description:
                "Label for the preference allowing AI requests in other apps to use the user's credits after the user's ChatGPT plan usage limit is reached",
            })),
            (o = (0, n.jsx)(x.A, {
              id: "settings.usage.credit.chatpass.description",
              defaultMessage: "Applies to apps you’ve allowed to use your ChatGPT plan.",
              description:
                "Description for the preference explaining that apps using the user's ChatGPT plan may consume available credits after the user's usage limit is reached",
            })),
            (c[19] = l),
            (c[20] = o))
          : ((l = c[19]), (o = c[20])),
        c[21] !== h || c[22] !== _ || c[23] !== v || c[24] !== g.canConsumePersonalCreditsChatPass
          ? ((u = (0, n.jsx)(k.ic, {
              label: l,
              description: o,
              control: (e) => {
                let { "aria-describedby": t } = e
                return (0, n.jsx)(Y.l, {
                  "aria-describedby": t,
                  ariaLabel: h.formatMessage({
                    id: "settings.usage.credit.chatpass.ariaLabel",
                    defaultMessage: "Allow other apps to use credits after reaching your usage limit",
                    description:
                      "Accessible label for the preference allowing AI requests in other apps to use the user's credits after the user's ChatGPT plan usage limit is reached",
                  }),
                  checked: g.canConsumePersonalCreditsChatPass,
                  disabled: _,
                  onChange: (e) => v(e),
                })
              },
            })),
            (c[21] = h),
            (c[22] = _),
            (c[23] = v),
            (c[24] = g.canConsumePersonalCreditsChatPass),
            (c[25] = u))
          : (u = c[25]),
        u
      )
    }
    let eo = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    function eu(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        h,
        g,
        m,
        p,
        b,
        _,
        v,
        w,
        A,
        j,
        S,
        E,
        T,
        P = (0, i.c)(65),
        { isPolling: N, showCreditPreference: I } = e,
        L = (0, f.gh)(X.u),
        { accountId: R, userId: O } = (0, H.As)(),
        U = (0, G.jE)()
      P[0] !== R || P[1] !== O
        ? ((t = ["usage-settings", "chatpass-apps", R, O]), (P[0] = R), (P[1] = O), (P[2] = t))
        : (t = P[2])
      let D = t
      P[3] === Symbol.for("react.memo_cache_sentinel") ? ((s = {}), (P[3] = s)) : (s = P[3])
      let [q, F] = (0, r.useState)(s)
      ;(P[4] !== N
        ? ((a = (e) => !!N && ("success" !== e.state.status || null != e.state.data) && ee.D.ONE_MINUTE),
          (P[4] = N),
          (P[5] = a))
        : (a = P[5]),
        P[6] !== N || P[7] !== D || P[8] !== a
          ? ((l = {
              queryKey: D,
              queryFn: ec,
              staleTime: ee.D.ONE_MINUTE,
              refetchInterval: a,
              refetchOnWindowFocus: N,
              retry: !1,
            }),
            (P[6] = N),
            (P[7] = D),
            (P[8] = a),
            (P[9] = l))
          : (l = P[9]))
      let { data: W, isError: $, isFetching: Y, isSuccess: Z, refetch: Q } = (0, z.I)(l)
      ;(P[10] !== U || P[11] !== D
        ? ((o = () => U.cancelQueries({ queryKey: D })), (P[10] = U), (P[11] = D), (P[12] = o))
        : (o = P[12]),
        P[13] !== R
          ? ((u = (e) =>
              et.CodexRequest.safePut("/wham/usage/chatpass/limits", {
                additionalHeaders: null == R ? void 0 : { "ChatGPT-Account-ID": R },
                expectedErrorStatuses: [400, 401, 403, 404, 503],
                requestBody: { global_percentage: 100, per_app_percentage: e },
              })),
            (P[13] = R),
            (P[14] = u))
          : (u = P[14]),
        P[15] !== U || P[16] !== D || P[17] !== L
          ? ((c = async (e) => {
              ;(await U.cancelQueries({ queryKey: D }),
                U.setQueryData(D, (t) =>
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
                L.get(V.Id).success((0, n.jsx)(x.A, { ...ei.limitsUpdated })),
                F({}),
                U.invalidateQueries({ queryKey: D }))
            }),
            (P[15] = U),
            (P[16] = D),
            (P[17] = L),
            (P[18] = c))
          : (c = P[18]),
        P[19] !== L
          ? ((d = () => {
              L.get(V.Id).danger((0, n.jsx)(x.A, { ...ei.limitsUpdateError }), {
                errorAnalytics: { toastId: "chatpassAppLimits.onError.limitUpdateError" },
              })
            }),
            (P[19] = L),
            (P[20] = d))
          : (d = P[20]),
        P[21] !== o || P[22] !== u || P[23] !== c || P[24] !== d
          ? ((h = { onMutate: o, mutationFn: u, onSuccess: c, onError: d }),
            (P[21] = o),
            (P[22] = u),
            (P[23] = c),
            (P[24] = d),
            (P[25] = h))
          : (h = P[25]))
      let { isPending: es, mutate: ea } = (0, B.n)(h)
      P[26] !== W?.items || P[27] !== W?.items.some || P[28] !== q
        ? ((g =
            W?.items.some((e) => {
              let t = q[e.id]
              return null != t && t !== e.allowed_usage_percent
            }) ?? !1),
          (P[26] = W?.items),
          (P[27] = W?.items.some),
          (P[28] = q),
          (P[29] = g))
        : (g = P[29])
      let er = g
      return ((0, J.iv)("usage.chatpass-app-limits", er), (Z && null == W) || W?.items.length === 0)
        ? null
        : (P[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, n.jsx)(x.A, {
                id: "settings.usage.subscriptionSharing.title",
                defaultMessage: "App limits",
                description:
                  "Title for the section controlling how much of the user's subscription allowance apps can use",
              })),
              (p = (0, n.jsx)(x.A, {
                id: "settings.usage.subscriptionSharing.description",
                defaultMessage: "Set limits for each app’s use of your ChatGPT plan and credits.",
                description:
                  "Description below the App limits heading for settings that control each app's use of the user's ChatGPT plan allowance and whether apps may use credits",
              })),
              (P[30] = m),
              (P[31] = p))
            : ((m = P[30]), (p = P[31])),
          P[32] !== W || P[33] !== q || P[34] !== er || P[35] !== es || P[36] !== ea
            ? ((b =
                null != W
                  ? (0, n.jsx)(y.$, {
                      color: er ? "primary" : "secondary",
                      size: "toolbar",
                      disabled: !er || es,
                      loading: es,
                      onClick: () => {
                        er &&
                          !es &&
                          ea(Object.fromEntries(W.items.map((e) => [e.id, q[e.id] ?? e.allowed_usage_percent])))
                      },
                      children: (0, n.jsx)(x.A, { ...en.save }),
                    })
                  : null),
              (P[32] = W),
              (P[33] = q),
              (P[34] = er),
              (P[35] = es),
              (P[36] = ea),
              (P[37] = b))
            : (b = P[37]),
          P[38] !== b
            ? ((_ = (0, n.jsx)(C.X.Header, {
                className: "select-none",
                size: "base",
                title: m,
                subtitle: p,
                actions: b,
              })),
              (P[38] = b),
              (P[39] = _))
            : (_ = P[39]),
          P[40] !== W?.items || P[41] !== W?.items.map || P[42] !== q || P[43] !== es
            ? ((v = W?.items.map((e) =>
                (0, n.jsx)(
                  ed,
                  {
                    app: e,
                    disabled: es,
                    limitPercent: q[e.id] ?? e.allowed_usage_percent,
                    onLimitChange: (t) => {
                      es ||
                        F((s) => {
                          let n = { ...s }
                          return (t === e.allowed_usage_percent ? delete n[e.id] : (n[e.id] = t), n)
                        })
                    },
                  },
                  e.id,
                ),
              )),
              (P[40] = W?.items),
              (P[41] = W?.items.map),
              (P[42] = q),
              (P[43] = es),
              (P[44] = v))
            : (v = P[44]),
          P[45] !== $ || P[46] !== Y || P[47] !== Q
            ? ((w = $
                ? (0, n.jsx)(k.ic, {
                    label: (0, n.jsx)("span", {
                      role: "alert",
                      children: (0, n.jsx)(x.A, {
                        id: "settings.usage.subscriptionSharing.apps.loadError",
                        defaultMessage: "Couldn't load app limits",
                        description: "Error when fetching per-app subscription sharing limits and usage",
                      }),
                    }),
                    control: (0, n.jsx)(y.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: Y,
                      onClick: () => void Q(),
                      children: (0, n.jsx)(x.A, {
                        id: "settings.usage.subscriptionSharing.apps.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry loading per-app subscription sharing limits and usage",
                      }),
                    }),
                  })
                : null),
              (P[45] = $),
              (P[46] = Y),
              (P[47] = Q),
              (P[48] = w))
            : (w = P[48]),
          P[49] !== W || P[50] !== $
            ? ((A =
                $ || null != W
                  ? null
                  : (0, n.jsx)(K.u, {
                      children: (0, n.jsx)(x.A, {
                        id: "settings.usage.subscriptionSharing.apps.loading",
                        defaultMessage: "Loading app limits…",
                        description: "Loading state for per-app subscription sharing limits and usage",
                      }),
                    })),
              (P[49] = W),
              (P[50] = $),
              (P[51] = A))
            : (A = P[51]),
          P[52] !== v || P[53] !== w || P[54] !== A
            ? ((j = (0, n.jsxs)(M.t, { className: "select-none", children: [v, w, A] })),
              (P[52] = v),
              (P[53] = w),
              (P[54] = A),
              (P[55] = j))
            : (j = P[55]),
          P[56] !== W || P[57] !== I
            ? ((S = I && null != W ? (0, n.jsx)(M.t, { children: (0, n.jsx)(el, {}) }) : null),
              (P[56] = W),
              (P[57] = I),
              (P[58] = S))
            : (S = P[58]),
          P[59] !== j || P[60] !== S
            ? ((E = (0, n.jsxs)(C.X.Content, { className: "gap-4", children: [j, S] })),
              (P[59] = j),
              (P[60] = S),
              (P[61] = E))
            : (E = P[61]),
          P[62] !== _ || P[63] !== E
            ? ((T = (0, n.jsxs)(C.X, { children: [_, E] })), (P[62] = _), (P[63] = E), (P[64] = T))
            : (T = P[64]),
          T)
    }
    async function ec(e) {
      let { signal: t } = e
      try {
        return await et.CodexRequest.safeGet("/wham/usage/chatpass/apps", { signal: t })
      } catch (e) {
        if (e instanceof es.fk && (401 === e.status || 403 === e.status || 404 === e.status)) return null
        throw e
      }
    }
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
        g,
        m,
        p = (0, i.c)(36),
        { app: f, disabled: x, limitPercent: y, onLimitChange: b } = e,
        _ = (0, I.A)(),
        [v, w] = (0, r.useState)(10),
        A = y > 0,
        j = A ? y : v
      p[0] !== f ? ((t = (0, n.jsx)(Z.y, { app: { ...f, type: "oai_apps" } })), (p[0] = f), (p[1] = t)) : (t = p[1])
      let C = f.name,
        M = !A || x
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
        p[5] !== S ? ((a = (0, n.jsx)(W.Gr, { value: S, style: "percent" })), (p[5] = S), (p[6] = a)) : (a = p[6]),
        p[7] !== s || p[8] !== a
          ? ((l = (0, n.jsx)(Q.vg, { "aria-label": s, children: a })), (p[7] = s), (p[8] = a), (p[9] = l))
          : (l = p[9]),
        p[10] !== b || p[11] !== j
          ? ((o = eo.map((e) =>
              (0, n.jsx)(
                $.ms.Item,
                {
                  role: "menuitemradio",
                  "aria-checked": e === j,
                  onSelect: () => b(e),
                  children: (0, n.jsx)(W.Gr, { value: e / 100, style: "percent" }),
                },
                e,
              ),
            )),
            (p[10] = b),
            (p[11] = j),
            (p[12] = o))
          : (o = p[12]),
        p[13] !== M || p[14] !== l || p[15] !== o
          ? ((u = (0, n.jsx)($.Ab, {
              align: "end",
              contentWidth: "menuNarrow",
              disabled: M,
              triggerButton: l,
              children: o,
            })),
            (p[13] = M),
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
          ? ((h = (0, n.jsx)(Y.l, { checked: A, disabled: x, "aria-label": c, onChange: d })),
            (p[24] = x),
            (p[25] = c),
            (p[26] = d),
            (p[27] = A),
            (p[28] = h))
          : (h = p[28]),
        p[29] !== h || p[30] !== u
          ? ((g = (0, n.jsxs)(n.Fragment, { children: [u, h] })), (p[29] = h), (p[30] = u), (p[31] = g))
          : (g = p[31]),
        p[32] !== f.name || p[33] !== t || p[34] !== g
          ? ((m = (0, n.jsx)(k.ic, { icon: t, label: C, controlSizing: "content", control: g })),
            (p[32] = f.name),
            (p[33] = t),
            (p[34] = g),
            (p[35] = m))
          : (m = p[35]),
        m
      )
    }
    function eh(e) {
      let t,
        s = (0, i.c)(4),
        { isPolling: a, showCreditPreference: r } = e,
        l = void 0 === a || a,
        o = void 0 !== r && r,
        u = (0, S.Zj)("185496087"),
        { accountId: c, authMethod: d, userId: h } = (0, H.As)()
      if (!u || "chatgpt" !== d || null == c || null == h) return null
      let g = `${c}:${h}`
      return (
        s[0] !== l || s[1] !== o || s[2] !== g
          ? ((t = (0, n.jsx)(eu, { isPolling: l, showCreditPreference: o }, g)),
            (s[0] = l),
            (s[1] = o),
            (s[2] = g),
            (s[3] = t))
          : (t = s[3]),
        t
      )
    }
    var eg = s("DBCl"),
      em = s("RxZZ"),
      ep = s("iRMi"),
      ef = s("OAko"),
      ex = s("evwP"),
      ey = s("BrP7"),
      eb = s("LXBZ"),
      e_ = s("yGJW"),
      ev = s("bZug"),
      ew = s("uris")
    function eA() {
      let e,
        t,
        s,
        a,
        r,
        l,
        o,
        u = (0, i.c)(27),
        c = (0, I.A)(),
        { userId: d, accountId: h } = (0, H.As)(),
        g = new Intl.DateTimeFormat().resolvedOptions().timeZone
      u[0] !== h || u[1] !== d
        ? ((e = ["rate-limit-reset-credits", "history", d, h]), (u[0] = h), (u[1] = d), (u[2] = e))
        : (e = u[2])
      let m = null != d && null != h
      u[3] !== e || u[4] !== m
        ? ((t = { queryKey: e, enabled: m, staleTime: 6e4, initialPageParam: "", queryFn: ek, getNextPageParam: eC }),
          (u[3] = e),
          (u[4] = m),
          (u[5] = t))
        : (t = u[5])
      let {
          data: p,
          isPending: f,
          isError: b,
          refetch: _,
          hasNextPage: v,
          fetchNextPage: w,
          isFetchingNextPage: A,
          isFetchNextPageError: j,
        } = (0, ew.q)(t),
        C = p?.pages.flatMap(ej)
      u[6] !== f
        ? ((s = f
            ? (0, n.jsx)(K.u, {
                children: (0, n.jsx)(x.A, {
                  id: "settings.usage.bankedResetHistory.loading",
                  defaultMessage: "Loading banked reset history…",
                  description:
                    "Loading status for the customer's banked reset history in Codex Usage & billing settings.",
                }),
              })
            : null),
          (u[6] = f),
          (u[7] = s))
        : (s = u[7])
      let M = C?.map((e) =>
        (0, n.jsx)(
          k.ic,
          {
            label:
              "granted" === e.kind
                ? (0, n.jsx)(x.A, {
                    id: "settings.usage.bankedResetHistory.received",
                    defaultMessage: "Reset received",
                    description:
                      "History event in Codex Usage & billing settings: the customer received a usage reset saved for later. No grant source is shown.",
                  })
                : (0, n.jsx)(x.A, {
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
                  children: c.formatDate(e.occurred_at, { month: "short", day: "numeric", timeZone: g }),
                }),
                (0, n.jsx)("span", {
                  className: "text-xs text-secondary",
                  children: c.formatTime(e.occurred_at, {
                    hour: "numeric",
                    minute: "2-digit",
                    timeZone: g,
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
        u[8] !== C?.length
          ? ((a =
              C?.length === 0
                ? (0, n.jsx)(ex.W, {
                    align: "start",
                    layout: "settings-row",
                    children: (0, n.jsx)(x.A, {
                      id: "settings.usage.bankedResetHistory.empty",
                      defaultMessage: "No banked reset activity in the past 30 days",
                      description:
                        "Empty history in Codex Usage & billing settings, shown when no saved usage resets were granted or used during the past 30 days.",
                    }),
                  })
                : null),
            (u[8] = C?.length),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== w || u[11] !== b || u[12] !== j || u[13] !== A || u[14] !== _
          ? ((r = b
              ? (0, n.jsx)(k.ic, {
                  label: (0, n.jsx)(x.A, {
                    id: "settings.usage.bankedResetHistory.error",
                    defaultMessage: "Couldn’t load banked reset history",
                    description:
                      "Error in Codex Usage & billing settings when fetching banked reset activity fails. Existing resets are unaffected.",
                  }),
                  control: (0, n.jsx)(y.$, {
                    color: "secondary",
                    loading: A,
                    onClick: () => void (j ? w() : _()),
                    size: "toolbar",
                    children: (0, n.jsx)(x.A, {
                      id: "settings.usage.resets.retry",
                      defaultMessage: "Retry",
                      description: "Button label for retrying Codex usage reset loading in settings",
                    }),
                  }),
                })
              : null),
            (u[10] = w),
            (u[11] = b),
            (u[12] = j),
            (u[13] = A),
            (u[14] = _),
            (u[15] = r))
          : (r = u[15]),
        u[16] !== w || u[17] !== v || u[18] !== b || u[19] !== A
          ? ((l =
              !b && v
                ? (0, n.jsx)(k.ic, {
                    label: null,
                    control: (0, n.jsx)(y.$, {
                      color: "secondary",
                      loading: A,
                      onClick: () => void w(),
                      size: "toolbar",
                      children: (0, n.jsx)(x.A, {
                        id: "settings.usage.bankedResetHistory.more",
                        defaultMessage: "Show more",
                        description:
                          "Button in Codex Usage & billing settings to load older banked reset events within the same 30-day history window.",
                      }),
                    }),
                  })
                : null),
            (u[16] = w),
            (u[17] = v),
            (u[18] = b),
            (u[19] = A),
            (u[20] = l))
          : (l = u[20]),
        u[21] !== s || u[22] !== M || u[23] !== a || u[24] !== r || u[25] !== l
          ? ((o = (0, n.jsxs)(n.Fragment, { children: [s, M, a, r, l] })),
            (u[21] = s),
            (u[22] = M),
            (u[23] = a),
            (u[24] = r),
            (u[25] = l),
            (u[26] = o))
          : (o = u[26]),
        o
      )
    }
    function ej(e) {
      return e.events
    }
    function eC(e) {
      return e.next_cursor ?? void 0
    }
    function ek(e) {
      let { pageParam: t, signal: s } = e
      return et.CodexRequest.safeGet("/wham/rate-limit-reset-credits/history", {
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
          ? ((t = (0, n.jsx)(x.A, {
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
    function eS(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        h,
        g = (0, i.c)(31),
        { activeCreditId: m, credit: p, isConfirming: f, isResetting: b, onUseReset: _ } = e,
        v = (0, I.A)(),
        w = (0, r.useId)(),
        A = (0, r.useId)(),
        j = (0, r.useId)(),
        C = p?.id,
        M = p?.expires_at
      g[0] !== M || g[1] !== v
        ? ((t =
            null == M
              ? null
              : v.formatDate(M, {
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  month: "short",
                  timeZoneName: "short",
                })),
          (g[0] = M),
          (g[1] = v),
          (g[2] = t))
        : (t = g[2])
      let S = t
      ;(g[3] !== p?.title
        ? ((s =
            p?.title?.trim() ||
            (0, n.jsx)(x.A, {
              id: "settings.usage.resets.fallbackTitle",
              defaultMessage: "Usage reset",
              description: "Fallback title for a Codex usage limit reset in settings",
            })),
          (g[3] = p?.title),
          (g[4] = s))
        : (s = g[4]),
        g[5] !== A || g[6] !== s
          ? ((a = (0, n.jsx)("span", { id: A, children: s })), (g[5] = A), (g[6] = s), (g[7] = a))
          : (a = g[7]),
        g[8] !== j || g[9] !== S
          ? ((l =
              null == S
                ? null
                : (0, n.jsx)("span", {
                    id: j,
                    children: (0, n.jsx)(x.A, {
                      id: "settings.usage.resets.expiresWithTimeZone",
                      defaultMessage: "Expires {date}",
                      description: "Expiration date, time, and time zone for a Codex usage limit reset in settings",
                      values: { date: S },
                    }),
                  })),
            (g[8] = j),
            (g[9] = S),
            (g[10] = l))
          : (l = g[10]))
      let E = null == S ? void 0 : j,
        T = `${w} ${A}`,
        P = f ? "primary" : "secondary",
        N = m === (C ?? "automatic")
      return (
        g[11] !== C || g[12] !== _
          ? ((o = () => {
              _(C)
            }),
            (g[11] = C),
            (g[12] = _),
            (g[13] = o))
          : (o = g[13]),
        g[14] !== f
          ? ((u = f
              ? (0, n.jsx)(x.A, {
                  id: "settings.usage.resets.confirmReset",
                  defaultMessage: "Confirm",
                  description: "Button label confirming the redemption of a Codex usage limit reset from settings",
                })
              : (0, n.jsx)(x.A, {
                  id: "settings.usage.resets.useReset",
                  defaultMessage: "Use reset",
                  description: "Button label for redeeming a Codex usage limit reset from settings",
                })),
            (g[14] = f),
            (g[15] = u))
          : (u = g[15]),
        g[16] !== w || g[17] !== u
          ? ((c = (0, n.jsx)("span", { id: w, children: u })), (g[16] = w), (g[17] = u), (g[18] = c))
          : (c = g[18]),
        g[19] !== b || g[20] !== c || g[21] !== E || g[22] !== T || g[23] !== P || g[24] !== N || g[25] !== o
          ? ((d = (0, n.jsx)(y.$, {
              "aria-describedby": E,
              "aria-labelledby": T,
              color: P,
              disabled: b,
              loading: N,
              onClick: o,
              size: "toolbar",
              children: c,
            })),
            (g[19] = b),
            (g[20] = c),
            (g[21] = E),
            (g[22] = T),
            (g[23] = P),
            (g[24] = N),
            (g[25] = o),
            (g[26] = d))
          : (d = g[26]),
        g[27] !== d || g[28] !== a || g[29] !== l
          ? ((h = (0, n.jsx)(k.ic, { label: a, description: l, control: d })),
            (g[27] = d),
            (g[28] = a),
            (g[29] = l),
            (g[30] = h))
          : (h = g[30]),
        h
      )
    }
    function eE(e) {
      let t,
        s,
        a,
        l,
        o = (0, i.c)(22),
        { activeCreditId: u, credits: c, isResetFillActive: d, isResetting: h, onUseReset: g, retryCreditId: m } = e,
        [p, f] = (0, r.useState)(null)
      o[0] !== p || o[1] !== g
        ? ((t = async (e) => {
            let t = e ?? "automatic"
            p !== t ? f(t) : (f(null), await g(e))
          }),
          (o[0] = p),
          (o[1] = g),
          (o[2] = t))
        : (t = o[2])
      let x = t
      if (
        (o[3] !== c ? ((s = 0 === c.length ? [null] : c), (o[3] = c), (o[4] = s)) : (s = o[4]),
        o[5] !== u || o[6] !== p || o[7] !== x || o[8] !== d || o[9] !== h || o[10] !== m || o[11] !== s)
      ) {
        let e
        ;(o[13] !== u || o[14] !== p || o[15] !== x || o[16] !== d || o[17] !== h || o[18] !== m
          ? ((e = (e) => {
              let t = e?.id ?? "automatic"
              return (0, n.jsx)(
                eS,
                {
                  activeCreditId: u,
                  credit: e,
                  isConfirming: p === t,
                  isResetting: d || h || (null != m && m !== t),
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
            (o[18] = m),
            (o[19] = e))
          : (e = o[19]),
          (a = s.map(e)),
          (o[5] = u),
          (o[6] = p),
          (o[7] = x),
          (o[8] = d),
          (o[9] = h),
          (o[10] = m),
          (o[11] = s),
          (o[12] = a))
      } else a = o[12]
      return (o[20] !== a ? ((l = (0, n.jsx)(n.Fragment, { children: a })), (o[20] = a), (o[21] = l)) : (l = o[21]), l)
    }
    function eT(e) {
      let t,
        s,
        a,
        l,
        o,
        u = (0, i.c)(36),
        { isResetFillActive: c, onResetAttemptCancel: d, onResetAttemptStart: h, onResetComplete: g } = e,
        m = (0, f.gh)(X.u),
        p = (0, I.A)(),
        b = (0, r.useRef)(null),
        _ = (0, r.useId)(),
        [v, w] = (0, r.useState)(null),
        [A] = (0, r.useState)(eb.A),
        [j, S] = (0, r.useState)(null),
        { data: E, error: T, isPending: P, refetch: N } = (0, ef.Gh)(),
        L = (0, ef.U1)()
      u[0] !== E?.credits ? ((t = E?.credits?.filter(eN)), (u[0] = E?.credits), (u[1] = t)) : (t = u[1])
      let R = t,
        O = E?.available_count ?? 0,
        U = E?.history_enabled ?? !1
      U && null == v && w(0 === O ? "history" : "available")
      let D = j?.credits ?? R,
        q = j?.availableCount ?? O,
        F = L.isPending ? (L.variables?.creditId ?? "automatic") : null
      u[2] !== L.mutateAsync ||
      u[3] !== p ||
      u[4] !== d ||
      u[5] !== h ||
      u[6] !== g ||
      u[7] !== j ||
      u[8] !== A ||
      u[9] !== m ||
      u[10] !== q ||
      u[11] !== D
        ? ((s = async (e) => {
            let t = e ?? "automatic"
            if ((null != j && j.creditId !== t) || null == D) return
            null == j && h?.()
            let s = await A.redeem({ availableCount: q, consume: L.mutateAsync, creditId: e })
            switch (s.status) {
              case "in_flight":
                return
              case "transport_error":
                ;(S({ availableCount: q, creditId: s.creditId ?? "automatic", credits: D }),
                  m
                    .get(V.Id)
                    .danger(
                      p.formatMessage({
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
                  m
                    .get(V.Id)
                    .danger((0, eb.M)(s.code, p), {
                      errorAnalytics: { toastId: "resetSettingsGroupContent.handleUseReset" },
                    }))
                return
              case "reset": {
                S(null)
                let e = Math.max(s.availableCountBefore - 1, 0)
                ;((0, e_.yy)(m, ep.CodexRateLimitResetCreditRedeemed, {
                  availableCountBefore: s.availableCountBefore,
                  componentType: "settings",
                  redemptionMethod: null == s.creditId ? "automatic" : "selected_credit",
                  remainingCount: e,
                }),
                  m
                    .get(V.Id)
                    .success(
                      p.formatMessage({
                        id: "settings.usage.resets.success",
                        defaultMessage: "Usage limits reset",
                        description: "Success toast shown after redeeming a Codex usage reset from settings",
                      }),
                    ),
                  g?.(),
                  b.current?.focus())
              }
            }
          }),
          (u[2] = L.mutateAsync),
          (u[3] = p),
          (u[4] = d),
          (u[5] = h),
          (u[6] = g),
          (u[7] = j),
          (u[8] = A),
          (u[9] = m),
          (u[10] = q),
          (u[11] = D),
          (u[12] = s))
        : (s = u[12])
      let H = s
      if (null == j && P && null == E) {
        let e
        ;(u[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(K.u, {
              children: (0, n.jsx)(x.A, {
                id: "settings.usage.resets.loading",
                defaultMessage: "Loading usage limit resets…",
                description: "Loading state for Codex usage limit resets in settings",
              }),
            })),
            (u[13] = e))
          : (e = u[13]),
          (a = e))
      } else if (null == j && null != T && null == E) {
        let e, t, s, i
        ;(u[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(x.A, {
              id: "settings.usage.resets.loadError",
              defaultMessage: "Couldn’t load usage limit resets",
              description: "Error shown when Codex usage limit resets cannot be loaded in settings",
            })),
            (u[14] = e))
          : (e = u[14]),
          u[15] !== N
            ? ((t = () => {
                N()
              }),
              (u[15] = N),
              (u[16] = t))
            : (t = u[16]),
          u[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(x.A, {
                id: "settings.usage.resets.retry",
                defaultMessage: "Retry",
                description: "Button label for retrying Codex usage reset loading in settings",
              })),
              (u[17] = s))
            : (s = u[17]),
          u[18] !== t
            ? ((i = (0, n.jsx)(k.ic, {
                label: e,
                control: (0, n.jsx)(y.$, { color: "secondary", onClick: t, size: "toolbar", children: s }),
              })),
              (u[18] = t),
              (u[19] = i))
            : (i = u[19]),
          (a = i))
      } else if (null == D || (0 === D.length && 0 === q)) {
        let e
        ;(u[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(ex.W, {
              align: "start",
              layout: "settings-row",
              children: (0, n.jsx)(x.A, {
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
          t = j?.creditId ?? null
        ;(u[21] !== F || u[22] !== L.isPending || u[23] !== H || u[24] !== c || u[25] !== t || u[26] !== D
          ? ((e = (0, n.jsx)(eE, {
              activeCreditId: F,
              credits: D,
              isResetFillActive: c,
              isResetting: L.isPending,
              onUseReset: H,
              retryCreditId: t,
            })),
            (u[21] = F),
            (u[22] = L.isPending),
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
          ? ((l = (0, n.jsx)(C.X.Header, {
              title: (0, n.jsx)(eM, { headingRef: b }),
              subtitle: (0, n.jsx)(x.A, {
                id: "settings.usage.resets.description",
                defaultMessage: "Use a reset to restore your 5-hour limit, weekly limit, or both",
                description:
                  "Description of available usage-limit resets. Each reset restores the usage windows supported by that reset ticket.",
              }),
            })),
            (u[28] = l))
          : (l = u[28]),
        u[29] !== a || u[30] !== U || u[31] !== p || u[32] !== _ || u[33] !== v || u[34] !== q
          ? ((o = (0, n.jsxs)(C.X, {
              children: [
                l,
                (0, n.jsx)(C.X.Content, {
                  children: (0, n.jsx)(M.t, {
                    children: U
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(k.ic, {
                              label: (0, n.jsx)(ey.t, {
                                ariaLabel: p.formatMessage({
                                  id: "settings.usage.resets.tabs.label",
                                  defaultMessage: "Usage limit resets",
                                  description:
                                    "Accessible label for tabs switching between available usage resets and reset history in Codex settings.",
                                }),
                                selectedKey: v ?? "available",
                                onSelect: w,
                                variant: "toolbar",
                                tabs: [
                                  {
                                    key: "available",
                                    panelId: `${_}-available`,
                                    name: (0, n.jsx)("span", {
                                      className: "inline-flex items-center gap-1.5",
                                      children: (0, n.jsx)(x.A, {
                                        id: "settings.usage.resets.tabs.available.label",
                                        defaultMessage: "Available <count>{availableCount}</count>",
                                        description:
                                          "Short tab label in Codex Usage settings showing available usage resets. availableCount is the localized number of resets available to use, displayed in muted text by the count tag. The sibling tab is History.",
                                        values: { availableCount: p.formatNumber(q), count: eP },
                                      }),
                                    }),
                                  },
                                  {
                                    key: "history",
                                    panelId: `${_}-history`,
                                    name: (0, n.jsx)(x.A, {
                                      id: "settings.usage.resets.tabs.history",
                                      defaultMessage: "History",
                                      description:
                                        "Tab in Codex Usage settings showing resets received or used in the past 30 days. The sibling tab is Available.",
                                    }),
                                  },
                                ],
                              }),
                              control:
                                "history" === v
                                  ? (0, n.jsx)("span", {
                                      className: "text-xs text-secondary",
                                      children: (0, n.jsx)(x.A, {
                                        id: "settings.usage.bankedResetHistory.period",
                                        defaultMessage: "Past 30 days",
                                        description:
                                          "Fixed time range for the customer's banked reset history in Codex Usage & billing settings.",
                                      }),
                                    })
                                  : null,
                            }),
                            (0, n.jsx)("div", {
                              id: `${_}-${v}`,
                              className: ev.r,
                              role: "tabpanel",
                              "aria-labelledby": `${_}-${v}-tab`,
                              tabIndex: 0,
                              children: "history" === v ? (0, n.jsx)(eA, {}) : a,
                            }),
                          ],
                        })
                      : a,
                  }),
                }),
              ],
            })),
            (u[29] = a),
            (u[30] = U),
            (u[31] = p),
            (u[32] = _),
            (u[33] = v),
            (u[34] = q),
            (u[35] = o))
          : (o = u[35]),
        o
      )
    }
    function eP(e) {
      return (0, n.jsx)("span", { className: "font-normal text-secondary", children: e })
    }
    function eN(e) {
      return "available" === e.status
    }
    function eI(e) {
      let t,
        s,
        a = (0, i.c)(6),
        { isResetFillActive: r, onResetAttemptCancel: l, onResetAttemptStart: o, onResetComplete: u } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(eL, {}) })), (a[0] = t))
          : (t = a[0]),
        a[1] !== r || a[2] !== l || a[3] !== o || a[4] !== u
          ? ((s = (0, n.jsxs)(n.Fragment, {
              children: [
                t,
                (0, n.jsx)(eT, {
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
    function eL() {
      let e,
        t,
        s,
        a = (0, i.c)(6),
        r = (0, f.gh)(X.u),
        l = (0, I.A)(),
        o = (0, em.iK)(eg.U6S.agentUsageResetEnabled)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(x.A, {
              id: "settings.usage.resets.agentEnabled.label",
              defaultMessage: "Allow your assistant to use resets",
              description:
                "Label for the desktop setting that lets the assistant use a banked usage reset after the user explicitly authorizes it",
            })),
            (t = (0, n.jsx)(x.A, {
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
          ? ((s = (0, n.jsx)(C.X, {
              children: (0, n.jsx)(C.X.Content, {
                children: (0, n.jsx)(M.t, {
                  children: (0, n.jsx)(k.ic, {
                    label: e,
                    description: t,
                    control: (e) =>
                      (0, n.jsx)(Y.l, {
                        ...e,
                        checked: o,
                        onChange: (e) => {
                          ;(0, em.gc)(r, eg.U6S.agentUsageResetEnabled, e).catch(() => {
                            r.get(V.Id).danger(
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
    var eR = s("zLIa"),
      eO = s("Myba"),
      eU = s("sgJo"),
      eD = s("LH8k"),
      eq = s("F9Qp"),
      eF = s("iH1J"),
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
        g,
        m,
        p = (0, i.c)(38),
        {
          isUsdWorkspace: f,
          isPolling: y,
          limitAmount: b,
          remainingPercent: _,
          resetLabel: v,
          usedAmount: w,
          usageLabel: A,
        } = e,
        j = void 0 === y || y,
        C = (0, I.A)(),
        k = f ? 0 : (b ?? 0),
        M = !f && null != w && null != b && b > 0
      p[0] !== j || p[1] !== k || p[2] !== M
        ? ((t = { isPolling: j, credits: k, enabled: M }), (p[0] = j), (p[1] = k), (p[2] = M), (p[3] = t))
        : (t = p[3])
      let { data: S } = (0, eO.Q4)(t),
        E = S?.estimated_usage_usd_micros == null ? null : S.estimated_usage_usd_micros / 1e6,
        T = null == w || null == b || b <= 0 || null == E ? null : (w / b) * E
      p[4] !== C
        ? ((s = (e) =>
            C.formatNumber(e, {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })),
          (p[4] = C),
          (p[5] = s))
        : (s = p[5])
      let P = s
      ;(p[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, n.jsx)("span", {
            className: "text-sm font-medium text-default",
            children: (0, n.jsx)(x.A, {
              id: "settings.usage.limits.monthly.billingLabel",
              defaultMessage: "Monthly limit",
              description: "Label for the monthly credit limit card in enterprise usage settings",
            }),
          })),
          (p[6] = a))
        : (a = p[6]),
        p[7] !== C || p[8] !== _
          ? ((r = C.formatNumber(_, { maximumFractionDigits: 0 })), (p[7] = C), (p[8] = _), (p[9] = r))
          : (r = p[9]),
        p[10] !== r
          ? ((l = (0, n.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                a,
                (0, n.jsx)("span", {
                  className: "text-xs text-secondary tabular-nums",
                  children: (0, n.jsx)(x.A, {
                    id: "settings.usage.limits.progress.remaining",
                    defaultMessage: "{remaining}% left",
                    description: "Remaining percentage shown next to usage progress",
                    values: { remaining: r },
                  }),
                }),
              ],
            })),
            (p[10] = r),
            (p[11] = l))
          : (l = p[11]))
      let N = 100 - _
      return (
        p[12] !== C || p[13] !== f
          ? ((o = f
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
            (p[12] = C),
            (p[13] = f),
            (p[14] = o))
          : (o = p[14]),
        p[15] !== o || p[16] !== N
          ? ((u = (0, n.jsx)("progress", {
              max: 100,
              value: N,
              "aria-label": o,
              className:
                "h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-neutral-solid [&::-ms-fill]:bg-neutral-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-neutral-solid",
            })),
            (p[15] = o),
            (p[16] = N),
            (p[17] = u))
          : (u = p[17]),
        p[18] !== v ? ((c = (0, n.jsx)("span", { children: v })), (p[18] = v), (p[19] = c)) : (c = p[19]),
        p[20] !== E ||
        p[21] !== T ||
        p[22] !== P ||
        p[23] !== C ||
        p[24] !== f ||
        p[25] !== b ||
        p[26] !== A ||
        p[27] !== w
          ? ((d =
              f || null == A || null == w || null == b || null == T || null == E
                ? A
                : (0, n.jsx)(x.A, {
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
            (p[20] = E),
            (p[21] = T),
            (p[22] = P),
            (p[23] = C),
            (p[24] = f),
            (p[25] = b),
            (p[26] = A),
            (p[27] = w),
            (p[28] = d))
          : (d = p[28]),
        p[29] !== d
          ? ((h = (0, n.jsx)("span", { className: "tabular-nums", children: d })), (p[29] = d), (p[30] = h))
          : (h = p[30]),
        p[31] !== c || p[32] !== h
          ? ((g = (0, n.jsxs)("div", {
              className: "flex items-center justify-between gap-3 text-xs text-tertiary",
              children: [c, h],
            })),
            (p[31] = c),
            (p[32] = h),
            (p[33] = g))
          : (g = p[33]),
        p[34] !== u || p[35] !== g || p[36] !== l
          ? ((m = (0, n.jsxs)("div", { className: "flex flex-col gap-2 p-4 select-none", children: [l, u, g] })),
            (p[34] = u),
            (p[35] = g),
            (p[36] = l),
            (p[37] = m))
          : (m = p[37]),
        m
      )
    }
    var ez = s("BhIm"),
      eB = s("KIKs")
    function eW(e) {
      let t,
        s,
        a,
        r = (0, i.c)(22),
        { resetAt: l } = e,
        o = (0, I.A)(),
        u = (0, eB.wv)(),
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
          ? ((s = (0, n.jsx)(x.A, {
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
          ? ((e = (0, n.jsx)(x.A, {
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
          ? ((e = (0, n.jsx)(x.A, {
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
          ? ((e = (0, n.jsx)(x.A, {
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
          ? ((e = (0, n.jsx)(x.A, {
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
      eY = s("LFJ8"),
      eX = s("Cm1Y"),
      eZ = s("i85S"),
      eK = s("YzhQ"),
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
        g,
        m = (0, i.c)(20),
        { rateLimitStatus: p } = e,
        _ = (0, f.gh)(X.u),
        v = (0, I.A)(),
        w = (0, l.zy)(),
        A = (0, eZ.b)(),
        { data: j } = (0, ef.YL)(),
        { data: C, isError: M } = (0, ef.Gh)(),
        S = (0, eX.ai)(j?.structure === "personal" ? "personal" : j?.id, "use_embedded_credit_checkout", !0)
      if (
        M ||
        C?.immediate_reset_purchase_eligible !== !0 ||
        j?.structure !== "personal" ||
        j.id !== p?.account_id ||
        !(0, eK.Ss)(p).some(e1)
      )
        return null
      m[0] !== w || m[1] !== A || m[2] !== p || m[3] !== _ || m[4] !== S
        ? ((t = (e) => {
            ;((0, e_.yy)(_, e$.EBm, { surface: "chatgpt_usage_settings" }),
              A((0, eQ.Rw)(), e) ||
                S({
                  getUrl: eQ.Rw,
                  state: {
                    rateLimitResetCheckout: {
                      accountId: p.account_id,
                      conversationId: null,
                      returnTo: `${w.pathname}${w.search}${w.hash}`,
                      turnId: null,
                    },
                  },
                }) ||
                (0, L.PQ)({
                  event: e,
                  href: (0, eQ.Rw)(),
                  initiator: "open_in_browser_bridge",
                  useExternalBrowser: !0,
                }))
          }),
          (m[0] = w),
          (m[1] = A),
          (m[2] = p),
          (m[3] = _),
          (m[4] = S),
          (m[5] = t))
        : (t = m[5])
      let E = t
      return (
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(eJ, { "aria-hidden": !0, className: "icon-sm -scale-x-100 transform text-default" })),
            (m[6] = s))
          : (s = m[6]),
        m[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("span", {
              className: "truncate",
              children: (0, n.jsx)(x.A, {
                id: "settings.usage.limits.buyReset.label",
                defaultMessage: "Reset your usage limits now",
                description:
                  "Label for the immediate Codex usage reset purchase action beneath the user's personal usage limits",
              }),
            })),
            (m[7] = a))
          : (a = m[7]),
        m[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(x.A, {
              id: "settings.usage.limits.buyReset.tooltip",
              defaultMessage: "This is not a banked reset. Buying an instant reset will reset your limits immediately.",
              description:
                "Tooltip explaining that purchasing a Codex usage reset applies it immediately instead of saving a banked reset",
            })),
            (m[8] = r))
          : (r = m[8]),
        m[9] !== v
          ? ((o = v.formatMessage({
              id: "settings.usage.limits.buyReset.tooltipLabel",
              defaultMessage: "How buying a reset works",
              description:
                "Accessible label for the tooltip explaining that a purchased Codex usage reset applies immediately and cannot be banked",
            })),
            (m[9] = v),
            (m[10] = o))
          : (o = m[10]),
        m[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(b.I, { asset: eY.q, "aria-hidden": !0 })), (m[11] = u))
          : (u = m[11]),
        m[12] !== o
          ? ((c = (0, n.jsxs)("span", {
              className: "flex min-w-0 items-center gap-1 select-none",
              children: [
                a,
                (0, n.jsx)(eV.m, {
                  side: "bottom",
                  content: r,
                  children: (0, n.jsx)(y.$, { "aria-label": o, color: "ghostTertiary", size: "inline", children: u }),
                }),
              ],
            })),
            (m[12] = o),
            (m[13] = c))
          : (c = m[13]),
        m[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(x.A, {
              id: "settings.usage.limits.buyReset.button",
              defaultMessage: "Buy an instant reset",
              description: "Button for purchasing an immediate reset of the user's personal Codex usage limits",
            })),
            (m[14] = d))
          : (d = m[14]),
        m[15] !== E
          ? ((h = (0, n.jsx)(y.$, { color: "ghostAccent", onClick: E, size: "composerSm", children: d })),
            (m[15] = E),
            (m[16] = h))
          : (h = m[16]),
        m[17] !== c || m[18] !== h
          ? ((g = (0, n.jsx)("div", {
              className: "-mt-5 rounded-b-2xl bg-secondary-soft-alpha pt-4",
              children: (0, n.jsx)(k.ic, { icon: s, label: c, control: h, size: "compact" }),
            })),
            (m[17] = c),
            (m[18] = h),
            (m[19] = g))
          : (g = m[19]),
        g
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
          accessibleLabel: g,
          description: m,
          fullWidth: p,
          isResetFillActive: f,
          remainingLabel: y,
          remainingPercent: b,
          resetFillAnimation: _,
          resetFillRemainingPercent: v,
        } = e,
        w = void 0 !== p && p,
        A = void 0 !== f && f,
        j = void 0 === y ? "left" : y,
        C = (0, I.A)(),
        k = (0, eq.N8)(b),
        M = (0, eq.N8)(v ?? b),
        S = (0, e2.d)(0),
        E = A && null == v ? void 0 : _,
        T = E?.progress ?? S,
        P = A && null != E && null != v
      h[0] !== M ? ((t = (e) => M + (100 - M) * e), (h[0] = M), (h[1] = t)) : (t = h[1])
      let N = (0, e3.G)(T, t),
        L = (0, e3.G)(N, e9),
        R = P ? 100 : k
      h[2] !== g || h[3] !== C
        ? ((s =
            g ??
            C.formatMessage({
              id: "settings.usage.limits.progress.ariaLabel",
              defaultMessage: "Usage remaining",
              description: "Aria label for usage remaining progress bars",
            })),
          (h[2] = g),
          (h[3] = C),
          (h[4] = s))
        : (s = h[4])
      let O = s,
        U = P
          ? (0, n.jsx)(e5.P.span, { children: L }, "remaining-percent")
          : C.formatNumber(k, { maximumFractionDigits: 0 }),
        D = w ? "h-1.5 w-full" : "w-24"
      ;(h[5] !== N || h[6] !== k || h[7] !== R || h[8] !== w || h[9] !== E || h[10] !== O || h[11] !== P
        ? ((r =
            null == E || (w && !P)
              ? (0, n.jsx)("progress", {
                  className: (0, a.A)(
                    "h-1.5 overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-text/10",
                    w ? "block w-full" : "w-24",
                    w && k <= 10
                      ? "[&::-moz-progress-bar]:bg-warning-solid [&::-ms-fill]:bg-warning-solid [&::-webkit-progress-value]:bg-warning-solid"
                      : "[&::-moz-progress-bar]:bg-neutral-solid [&::-ms-fill]:bg-neutral-solid [&::-webkit-progress-value]:bg-neutral-solid",
                  ),
                  max: 100,
                  value: k,
                  "aria-label": O,
                })
              : (0, n.jsx)(e4.I, {
                  accessibleLabel: O,
                  animatedPercent: N,
                  isResetFillActive: P,
                  remainingPercent: R,
                  resetFillAnimation: E,
                  size: w ? "compact" : "default",
                })),
          (h[5] = N),
          (h[6] = k),
          (h[7] = R),
          (h[8] = w),
          (h[9] = E),
          (h[10] = O),
          (h[11] = P),
          (h[12] = r))
        : (r = h[12]),
        h[13] !== D || h[14] !== r
          ? ((l = (0, n.jsx)("div", { className: D, children: r })), (h[13] = D), (h[14] = r), (h[15] = l))
          : (l = h[15]))
      let q = l,
        F = w ? "text-xs leading-4" : "min-w-[72px] text-sm"
      ;(h[16] !== F
        ? ((o = (0, a.A)("text-end whitespace-nowrap text-secondary tabular-nums", F)), (h[16] = F), (h[17] = o))
        : (o = h[17]),
        h[18] !== U || h[19] !== j
          ? ((u =
              "remaining" === j
                ? (0, n.jsx)(x.A, {
                    id: "settings.usage.limits.monthly.progress.remaining",
                    defaultMessage: "{remaining}% remaining",
                    description: "Remaining percentage shown next to usage progress",
                    values: { remaining: U },
                  })
                : (0, n.jsx)(x.A, {
                    id: "settings.usage.limits.progress.remaining",
                    defaultMessage: "{remaining}% left",
                    description: "Remaining percentage shown next to usage progress",
                    values: { remaining: U },
                  })),
            (h[18] = U),
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
          h[24] !== m ? ((e = (0, n.jsx)("span", { children: m })), (h[24] = m), (h[25] = e)) : (e = h[25]),
          h[26] !== H || h[27] !== e
            ? ((t = (0, n.jsxs)("div", {
                className: "flex items-baseline justify-between gap-1.25 text-xs leading-4 text-secondary",
                children: [e, H],
              })),
              (h[26] = H),
              (h[27] = e),
              (h[28] = t))
            : (t = h[28]),
          h[29] !== t || h[30] !== q
            ? ((s = (0, n.jsxs)("div", { className: "flex flex-col gap-1.25", children: [t, q] })),
              (h[29] = t),
              (h[30] = q),
              (h[31] = s))
            : (s = h[31]),
          s
        )
      }
      return (
        h[32] !== H || h[33] !== q
          ? ((d = (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [q, H] })),
            (h[32] = H),
            (h[33] = q),
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
        l = (0, i.c)(26),
        {
          header: o,
          fullWidth: u,
          isPolling: c,
          isUsdWorkspace: d,
          isResetFillActive: h,
          rateLimitStatus: g,
          resetFillAnimation: m,
          resetFillRateLimitStatus: p,
          showEnterpriseMonthlyUsageLimit: f,
          showMonthlyUsageLimit: b,
          showResetPurchase: _,
          showUsageBillingLayout: v,
          canRequestEnterpriseMonthlyUsageLimit: w,
          workspaceRequestPolicy: A,
          workspaceMonthlyUsage: j,
          workspaceAdminRequests: S,
          isWorkspaceAdminRequestsLoading: E,
          isSavingWorkspaceAdminRequest: P,
          saveWorkspaceAdminRequest: N,
        } = e,
        I = void 0 !== u && u,
        R = void 0 === c || c,
        O = void 0 !== d && d,
        U = void 0 !== h && h,
        D = void 0 !== f && f,
        q = void 0 === b || b,
        F = void 0 !== _ && _,
        H = void 0 !== v && v,
        G = void 0 !== w && w,
        z = void 0 === j ? null : j,
        B = void 0 === S ? null : S,
        W = void 0 !== E && E,
        $ = void 0 !== P && P,
        V = U && null != p ? p : g
      if (
        l[0] !== G ||
        l[1] !== I ||
        l[2] !== o ||
        l[3] !== R ||
        l[4] !== U ||
        l[5] !== $ ||
        l[6] !== O ||
        l[7] !== W ||
        l[8] !== g ||
        l[9] !== m ||
        l[10] !== p ||
        l[11] !== N ||
        l[12] !== D ||
        l[13] !== q ||
        l[14] !== F ||
        l[15] !== H ||
        l[16] !== V ||
        l[17] !== B ||
        l[18] !== z ||
        l[19] !== A
      ) {
        a = Symbol.for("react.early_return_sentinel")
        e: {
          var Y, X, Z
          let e,
            i = (0, eH.mO)(V),
            r = ta(i, null),
            l =
              U && null != p
                ? new Map(ta((0, eH.mO)(p), null).map((e) => [e.key, (0, eq.rU)(e.bucket.usedPercent ?? 0)]))
                : null,
            u = D
              ? ((Y = z),
                (X = V),
                null == (e = (0, T.Li)(Y))
                  ? null
                  : {
                      key: "workspace-monthly",
                      remainingPercent: e.remainingPercent,
                      resetAt:
                        (X?.spend_control?.individual_limit?.unit ?? "credit") === (Y?.balance_unit ?? "credit") &&
                        Number(X?.spend_control?.individual_limit?.limit) === e.limit
                          ? (X?.spend_control?.individual_limit?.reset_at ?? null)
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
                  let n = t.find(tl) ?? null
                  if (null == n) return null
                  let i = n.bucket.usedPercent ?? 0
                  return {
                    key: n.key,
                    remainingPercent: (0, eq.rU)(i),
                    resetAt: n.bucket.resetsAt ?? null,
                    usedAmount: null,
                    limitAmount: null,
                  }
                })({ rateLimitStatus: V, coreUsageLimitRows: r })
          q || (u = null)
          let c = q && null == u ? r : r.filter(e7),
            d = ta(i, "gpt-5.3-codex-spark"),
            h = D && G,
            f = A?.kind === "custom" ? A.request_url : null,
            b = D && null == u
          if (null == u && 0 === c.length && 0 === d.length && !b && !h) {
            a = null
            break e
          }
          ;((t =
            null != u || c.length > 0 || b || h
              ? (0, n.jsxs)(C.X, {
                  children: [
                    o ??
                      (0, n.jsx)(C.X.Header, {
                        title: H
                          ? (0, n.jsx)(x.A, {
                              id: "settings.usage.limits.plan.title",
                              defaultMessage: "Plan limits",
                              description: "Title for enterprise usage limits that are shared across eligible products",
                            })
                          : (0, n.jsx)(x.A, {
                              id: "settings.usage.limits.title",
                              defaultMessage: "General usage limits",
                              description: "Title for the usage limits section in usage settings",
                            }),
                        subtitle: H
                          ? (0, n.jsx)(x.A, {
                              id: "settings.usage.limits.plan.subtitle",
                              defaultMessage:
                                "Shared across Chat, Codex, Work, Workspace Agents, ChatGPT for Excel, and ChatGPT for PowerPoint.",
                              description:
                                "Explains that the enterprise monthly usage limit is shared across Chat, Codex, Work, Workspace Agents, ChatGPT for Excel, and ChatGPT for PowerPoint. Depending on the plan, usage is measured in credits or dollars.",
                            })
                          : null,
                      }),
                    (0, n.jsxs)(C.X.Content, {
                      children: [
                        b
                          ? (0, n.jsx)(te, {
                              isPolling: R,
                              currentMonthUsage: z?.current_month_usage ?? null,
                              isUsdWorkspace: O,
                              showEstimatedSpend: H && !O,
                            })
                          : null,
                        null != u || c.length > 0
                          ? (0, n.jsxs)(M.t, {
                              className: F ? "relative z-10" : void 0,
                              dividers: !I,
                              variant: I ? "metered" : "default",
                              children: [
                                null != u
                                  ? (0, n.jsx)(
                                      tn,
                                      {
                                        isPolling: R,
                                        fullWidth: I,
                                        isResetFillActive: U,
                                        isUsdWorkspace: O,
                                        resetFillAnimation: m,
                                        resetFillRemainingPercent: l?.get(u.key),
                                        showUsageBillingLayout: H,
                                        usageLimit: u,
                                      },
                                      u.key,
                                    )
                                  : null,
                                c.map((e) =>
                                  (0, n.jsx)(
                                    ti,
                                    {
                                      fullWidth: I,
                                      isResetFillActive: U,
                                      rateLimitRow: e,
                                      resetFillAnimation: m,
                                      resetFillRemainingPercent: l?.get(e.key),
                                    },
                                    e.key,
                                  ),
                                ),
                              ],
                            })
                          : null,
                        F ? (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(e0, { rateLimitStatus: g }) }) : null,
                        h && A?.kind === "openai_native"
                          ? (0, n.jsx)(ts, {
                              pendingRequest:
                                ((Z = B),
                                Z?.items.find((e) => "pending" === e.status && null != (e.payloads.find(tr) ?? null)) ??
                                  null),
                              isLoading: W,
                              isSaving: $,
                              saveWorkspaceAdminRequest: N,
                            })
                          : null,
                        h && A?.kind === "custom"
                          ? (0, n.jsx)(M.t, {
                              className: "mt-2",
                              children: (0, n.jsx)(k.ic, {
                                label: null,
                                description:
                                  null != A.instructions
                                    ? (0, n.jsx)("span", {
                                        className: "leading-relaxed whitespace-pre-wrap",
                                        children: A.instructions,
                                      })
                                    : null,
                                control:
                                  null != f
                                    ? (0, n.jsx)(y.$, {
                                        color: "primary",
                                        size: "medium",
                                        className: "rounded-full",
                                        onClick: (e) => {
                                          ;(0, L.PQ)({ event: e, href: f, initiator: "open_in_browser_bridge" })
                                        },
                                        children: (0, n.jsx)(x.A, {
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
                ? (0, n.jsxs)(C.X, {
                    children: [
                      (0, n.jsx)(C.X.Header, {
                        title: (0, n.jsx)(x.A, {
                          id: "settings.usage.limits.spark.title",
                          defaultMessage: "GPT-5.3-Codex-Spark usage limits",
                          description: "Title for the GPT-5.3-Codex-Spark usage limits section",
                        }),
                      }),
                      (0, n.jsx)(C.X.Content, {
                        children: (0, n.jsx)(M.t, {
                          dividers: !I,
                          variant: I ? "metered" : "default",
                          children: d.map((e) =>
                            (0, n.jsx)(
                              ti,
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
        ;((l[0] = G),
          (l[1] = I),
          (l[2] = o),
          (l[3] = R),
          (l[4] = U),
          (l[5] = $),
          (l[6] = O),
          (l[7] = W),
          (l[8] = g),
          (l[9] = m),
          (l[10] = p),
          (l[11] = N),
          (l[12] = D),
          (l[13] = q),
          (l[14] = F),
          (l[15] = H),
          (l[16] = V),
          (l[17] = B),
          (l[18] = z),
          (l[19] = A),
          (l[20] = t),
          (l[21] = s),
          (l[22] = a))
      } else ((t = l[20]), (s = l[21]), (a = l[22]))
      return a !== Symbol.for("react.early_return_sentinel")
        ? a
        : (l[23] !== t || l[24] !== s
            ? ((r = (0, n.jsxs)(n.Fragment, { children: [t, s] })), (l[23] = t), (l[24] = s), (l[25] = r))
            : (r = l[25]),
          r)
    }
    function e7(e) {
      return !tl(e)
    }
    function te(e) {
      let t,
        s,
        a,
        r,
        l = (0, i.c)(12),
        { currentMonthUsage: o, isPolling: u, isUsdWorkspace: c, showEstimatedSpend: d } = e,
        h = (0, I.A)(),
        g = o ?? 0,
        m = d && null != o && o > 0
      l[0] !== u || l[1] !== g || l[2] !== m
        ? ((t = { isPolling: u, credits: g, enabled: m }), (l[0] = u), (l[1] = g), (l[2] = m), (l[3] = t))
        : (t = l[3])
      let { data: p } = (0, eO.Q4)(t),
        f = d && p?.estimated_usage_usd_micros != null ? p.estimated_usage_usd_micros / 1e6 : null
      return (
        l[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(tt, { muted: !0 })), (l[4] = s))
          : (s = l[4]),
        l[5] !== o || l[6] !== f || l[7] !== h || l[8] !== c
          ? ((a =
              null == o
                ? null
                : (0, n.jsx)(k.ic, {
                    label: (0, n.jsx)(x.A, {
                      id: "settings.usage.limits.monthly.currentUsage",
                      defaultMessage: "Your usage this month",
                      description:
                        "Label for the current user's monthly credit usage when no monthly usage limit is set.",
                    }),
                    control: (0, n.jsxs)("span", {
                      className: "text-sm text-secondary tabular-nums",
                      children: [
                        c
                          ? (0, n.jsx)(W.Gr, {
                              value: Math.max(o, 0),
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 6,
                            })
                          : null,
                        c || null != f
                          ? null
                          : (0, n.jsx)(x.A, {
                              id: "settings.usage.limits.monthly.currentUsageCredits",
                              defaultMessage: "{credits, plural, one {# credit} other {# credits}}",
                              description:
                                "Credit amount used by the current user this month when no monthly usage limit is set.",
                              values: { credits: Math.max(o, 0) },
                            }),
                        c || null == f
                          ? null
                          : (0, n.jsx)(x.A, {
                              id: "settings.usage.limits.monthly.currentUsageCreditsAndEstimatedSpend",
                              defaultMessage: "{credits, plural, one {# credit} other {# credits}} · Est. {cost}",
                              description:
                                "Credits used this month and their estimated US dollar cost when no monthly usage limit is set",
                              values: {
                                credits: Math.max(o, 0),
                                cost: h.formatNumber(f, {
                                  style: "currency",
                                  currency: "USD",
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: f > 0 && f < 0.01 ? 6 : 2,
                                }),
                              },
                            }),
                      ],
                    }),
                  })),
            (l[5] = o),
            (l[6] = f),
            (l[7] = h),
            (l[8] = c),
            (l[9] = a))
          : (a = l[9]),
        l[10] !== a ? ((r = (0, n.jsxs)(M.t, { children: [s, a] })), (l[10] = a), (l[11] = r)) : (r = l[11]),
        r
      )
    }
    function tt(e) {
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
          ? ((s = (0, n.jsx)(x.A, {
              id: "settings.usage.limits.monthly.none",
              defaultMessage: "Your admin hasn’t set a usage limit",
              description:
                "Informational message shown when the admin has not set a monthly usage limit for the current user",
            })),
            (r[1] = s))
          : (s = r[1]),
        r[2] !== o
          ? ((a = (0, n.jsx)(k.ic, {
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
    function ts(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d = (0, i.c)(28),
        { pendingRequest: h, isLoading: g, isSaving: m, saveWorkspaceAdminRequest: p } = e,
        b = (0, f.gh)(X.u),
        _ = (0, I.A)(),
        [v, w] = (0, r.useState)(!1),
        [A, j] = (0, r.useState)(h?.justification ?? "")
      d[0] !== _ || d[1] !== A || d[2] !== h || d[3] !== p || d[4] !== b
        ? ((t = () => {
            let e = A.trim()
            0 === e.length
              ? b
                  .get(V.Id)
                  .warning(
                    _.formatMessage({
                      id: "settings.usage.limits.requestMissingJustification",
                      defaultMessage: "Enter a justification to submit your request",
                      description: "Toast shown when a workspace usage limit request is missing a justification",
                    }),
                  )
              : p?.({ justification: e, requestId: h?.id })
                  .then(() => {
                    ;(b
                      .get(V.Id)
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
                      w(!1))
                  })
                  .catch((e) => {
                    null == h &&
                    e instanceof es.fk &&
                    409 === e.status &&
                    (0, eD.d)(e)?.message === "A pending workspace admin request already exists."
                      ? b
                          .get(V.Id)
                          .warning(
                            _.formatMessage({
                              id: "settings.usage.limits.requestAlreadyPending",
                              defaultMessage: "You already have a usage request pending admin review.",
                              description:
                                "Toast in Usage settings when a member submits a second usage limit increase request while their first request is awaiting an admin decision.",
                            }),
                          )
                      : b
                          .get(V.Id)
                          .danger(
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
          (d[1] = A),
          (d[2] = h),
          (d[3] = p),
          (d[4] = b),
          (d[5] = t))
        : (t = d[5])
      let C = t
      d[6] !== h
        ? ((s =
            null != h
              ? (0, n.jsx)("div", {
                  className: "text-sm text-secondary",
                  children: (0, n.jsx)(x.A, {
                    id: "settings.usage.limits.requestPending",
                    defaultMessage: "Your request is pending admin review.",
                    description: "Status text for a pending workspace usage limit request",
                  }),
                })
              : null),
          (d[6] = h),
          (d[7] = s))
        : (s = d[7])
      let k = null == p
      return (
        d[8] !== h?.justification
          ? ((a = () => {
              ;(j(h?.justification ?? ""), w(!0))
            }),
            (d[8] = h?.justification),
            (d[9] = a))
          : (a = d[9]),
        d[10] !== h
          ? ((l =
              null == h
                ? (0, n.jsx)(x.A, {
                    id: "settings.usage.limits.requestIncrease",
                    defaultMessage: "Request more usage",
                    description: "Button to request more monthly workspace usage",
                  })
                : (0, n.jsx)(x.A, {
                    id: "settings.usage.limits.updatePendingRequest",
                    defaultMessage: "Update pending request",
                    description: "Button to update an existing pending workspace usage limit request",
                  })),
            (d[10] = h),
            (d[11] = l))
          : (l = d[11]),
        d[12] !== g || d[13] !== k || d[14] !== a || d[15] !== l
          ? ((o = (0, n.jsx)(y.$, {
              color: "primary",
              size: "medium",
              className: "self-start rounded-full",
              loading: g,
              disabled: k,
              onClick: a,
              children: l,
            })),
            (d[12] = g),
            (d[13] = k),
            (d[14] = a),
            (d[15] = l),
            (d[16] = o))
          : (o = d[16]),
        d[17] !== C || d[18] !== _ || d[19] !== v || d[20] !== m || d[21] !== A || d[22] !== h
          ? ((u = v
              ? (0, n.jsx)(M.t, {
                  className: "mt-1 w-full",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col gap-3 p-3",
                    children: [
                      (0, n.jsxs)("label", {
                        className: "flex flex-col gap-1.5 text-sm font-medium text-default",
                        children: [
                          (0, n.jsx)(x.A, {
                            id: "settings.usage.limits.requestJustificationLabel",
                            defaultMessage: "Justification",
                            description: "Label for the workspace usage limit request justification",
                          }),
                          (0, n.jsx)(eR.TM, {
                            value: A,
                            rows: 3,
                            placeholder: _.formatMessage({
                              id: "settings.usage.limits.requestJustificationPlaceholder",
                              defaultMessage: "Tell your admin why you need more usage",
                              description: "Placeholder for the workspace usage limit request justification",
                            }),
                            onChange: (e) => {
                              j(e.target.value)
                            },
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex justify-end gap-2",
                        children: [
                          (0, n.jsx)(y.$, {
                            color: "secondary",
                            size: "default",
                            onClick: () => {
                              w(!1)
                            },
                            children: (0, n.jsx)(x.A, {
                              id: "settings.usage.limits.requestCancel",
                              defaultMessage: "Cancel",
                              description: "Cancel button for the workspace usage limit request form",
                            }),
                          }),
                          (0, n.jsx)(y.$, {
                            color: "primary",
                            size: "default",
                            loading: m,
                            onClick: C,
                            children:
                              null == h
                                ? (0, n.jsx)(x.A, {
                                    id: "settings.usage.limits.requestSave",
                                    defaultMessage: "Submit request",
                                    description: "Submit button for a workspace usage limit request",
                                  })
                                : (0, n.jsx)(x.A, {
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
            (d[17] = C),
            (d[18] = _),
            (d[19] = v),
            (d[20] = m),
            (d[21] = A),
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
    function tn(e) {
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
          isPolling: g,
          isResetFillActive: m,
          isUsdWorkspace: p,
          resetFillAnimation: f,
          resetFillRemainingPercent: y,
          showUsageBillingLayout: b,
          usageLimit: _,
        } = e,
        v = (0, I.A)()
      d[0] !== _.remainingPercent
        ? ((t = (0, eq.N8)(_.remainingPercent)), (d[0] = _.remainingPercent), (d[1] = t))
        : (t = d[1])
      let w = t
      d[2] !== _.resetAt
        ? ((a = null == (s = (0, eq.tB)(_.resetAt)) ? null : (0, eq.h6)(s)), (d[2] = _.resetAt), (d[3] = s), (d[4] = a))
        : ((s = d[3]), (a = d[4]))
      let A = a,
        j = null
      if (null != _.usedAmount && null != _.limitAmount) {
        let e
        ;(d[5] !== v || d[6] !== p || d[7] !== _.limitAmount || d[8] !== _.usedAmount
          ? ((e = p
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
                  { used: tu(v, _.usedAmount), limit: tu(v, _.limitAmount) },
                )),
            (d[5] = v),
            (d[6] = p),
            (d[7] = _.limitAmount),
            (d[8] = _.usedAmount),
            (d[9] = e))
          : (e = d[9]),
          (j = e))
      }
      let C = null
      if (h && null != s) {
        let e
        ;(d[10] !== s ? ((e = (0, n.jsx)(eW, { resetAt: s })), (d[10] = s), (d[11] = e)) : (e = d[11]), (C = e))
      } else if (null != A) {
        let e
        ;(d[12] !== A
          ? ((e = (0, n.jsx)(x.A, {
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
          d[14] !== g || d[15] !== p || d[16] !== w || d[17] !== C || d[18] !== t || d[19] !== s || d[20] !== j
            ? ((e = (0, n.jsx)(eG, {
                isPolling: g,
                isUsdWorkspace: p,
                limitAmount: t,
                remainingPercent: w,
                resetLabel: C,
                usedAmount: s,
                usageLabel: j,
              })),
              (d[14] = g),
              (d[15] = p),
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
      let M = r,
        S = h ? "stacked" : "default"
      d[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, n.jsx)(x.A, {
            id: "settings.usage.limits.monthly.label",
            defaultMessage: "Monthly usage limit",
            description: "Label for a monthly usage limit row",
          })),
          (d[25] = l))
        : (l = d[25])
      let E = h ? null : M,
        T = h ? M : void 0
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
        d[28] !== h || d[29] !== m || d[30] !== w || d[31] !== f || d[32] !== y || d[33] !== T || d[34] !== o
          ? ((u = (0, n.jsx)(e6, {
              fullWidth: h,
              description: T,
              accessibleLabel: o,
              isResetFillActive: m,
              remainingLabel: "remaining",
              remainingPercent: w,
              resetFillAnimation: f,
              resetFillRemainingPercent: y,
            })),
            (d[28] = h),
            (d[29] = m),
            (d[30] = w),
            (d[31] = f),
            (d[32] = y),
            (d[33] = T),
            (d[34] = o),
            (d[35] = u))
          : (u = d[35]),
        d[36] !== S || d[37] !== E || d[38] !== u
          ? ((c = (0, n.jsx)(k.ic, { variant: S, label: l, description: E, control: u })),
            (d[36] = S),
            (d[37] = E),
            (d[38] = u),
            (d[39] = c))
          : (c = d[39]),
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
        u = (0, i.c)(26),
        {
          fullWidth: c,
          isResetFillActive: d,
          rateLimitRow: h,
          resetFillAnimation: g,
          resetFillRemainingPercent: m,
        } = e,
        p = void 0 !== c && c,
        f = (0, I.A)()
      u[0] !== f || u[1] !== h.bucket.resetsAt || u[2] !== h.bucket.windowDurationMins
        ? ((s =
            null == (t = (0, eq.tB)(h.bucket.resetsAt ?? null))
              ? null
              : to(h.bucket.windowDurationMins ?? 0, 10080)
                ? f.formatDate(t, { dateStyle: "medium", timeStyle: "short" })
                : (0, eq.h6)(t)),
          (u[0] = f),
          (u[1] = h.bucket.resetsAt),
          (u[2] = h.bucket.windowDurationMins),
          (u[3] = t),
          (u[4] = s))
        : ((t = u[3]), (s = u[4]))
      let y = null
      if (p && null != t) {
        let e
        ;(u[5] !== t ? ((e = (0, n.jsx)(eW, { resetAt: t })), (u[5] = t), (u[6] = e)) : (e = u[6]), (y = e))
      } else if (null != s) {
        let e
        ;(u[7] !== s
          ? ((e = (0, n.jsx)(x.A, {
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
      u[9] !== b ? ((a = (0, eq.rU)(b)), (u[9] = b), (u[10] = a)) : (a = u[10])
      let _ = a,
        v = p ? "stacked" : "default"
      u[11] !== p || u[12] !== h
        ? ((r = (function (e, t = !1) {
            let s = e.bucket.windowDurationMins ?? 0
            return tl(e)
              ? (0, n.jsx)(x.A, {
                  id: "settings.usage.limits.monthly.label",
                  defaultMessage: "Monthly usage limit",
                  description: "Label for a monthly usage limit row",
                })
              : to(s, 300)
                ? t
                  ? (0, n.jsx)(x.A, {
                      id: "settings.usage.personalLimits.fiveHour",
                      defaultMessage: "5-hour limit",
                      description:
                        "Label for the Consumer or Business included usage limit that resets every five hours",
                    })
                  : (0, n.jsx)(x.A, {
                      id: "settings.usage.limits.fiveHour.label",
                      defaultMessage: "5 hour usage limit",
                      description: "Label for the 5-hour usage limit row",
                    })
                : to(s, 10080)
                  ? t
                    ? (0, n.jsx)(x.A, {
                        id: "settings.usage.personalLimits.weekly",
                        defaultMessage: "Weekly limit",
                        description: "Label for the Consumer or Business included usage limit that resets each week",
                      })
                    : (0, n.jsx)(x.A, {
                        id: "settings.usage.limits.week.label",
                        defaultMessage: "Weekly usage limit",
                        description: "Label for a weekly usage limit row",
                      })
                  : to(s, 1440)
                    ? (0, n.jsx)(x.A, {
                        id: "settings.usage.limits.day.label",
                        defaultMessage: "Daily usage limit",
                        description: "Label for a daily usage limit row",
                      })
                    : (0, n.jsx)(x.A, {
                        id: "settings.usage.limits.genericWindow.label",
                        defaultMessage: "Usage limit",
                        description: "Generic label for a usage limit row",
                      })
          })(h, p)),
          (u[11] = p),
          (u[12] = h),
          (u[13] = r))
        : (r = u[13])
      let w = p ? void 0 : y,
        A = p ? y : void 0
      return (
        u[14] !== p || u[15] !== d || u[16] !== _ || u[17] !== g || u[18] !== m || u[19] !== A
          ? ((l = (0, n.jsx)(e6, {
              fullWidth: p,
              description: A,
              isResetFillActive: d,
              remainingPercent: _,
              resetFillAnimation: g,
              resetFillRemainingPercent: m,
            })),
            (u[14] = p),
            (u[15] = d),
            (u[16] = _),
            (u[17] = g),
            (u[18] = m),
            (u[19] = A),
            (u[20] = l))
          : (l = u[20]),
        u[21] !== v || u[22] !== r || u[23] !== w || u[24] !== l
          ? ((o = (0, n.jsx)(k.ic, { variant: v, label: r, description: w, control: l })),
            (u[21] = v),
            (u[22] = r),
            (u[23] = w),
            (u[24] = l),
            (u[25] = o))
          : (o = u[25]),
        o
      )
    }
    function ta(e, t) {
      let s = null == t ? (e.find((e) => null == e.limitName) ?? null) : (0, eH.nW)(e, t)
      return null == s ? [] : (0, eF.m)({ entry: s, keyPrefix: t ?? "core" })
    }
    function tr(e) {
      return (
        "spend_limit" === e.kind &&
        "account_user_spend_controls" === e.target.source &&
        "account_user.credit_limits" === e.target.source_id
      )
    }
    function tl(e) {
      return to(e.bucket.windowDurationMins ?? 0, 43200)
    }
    function to(e, t) {
      return !!Number.isFinite(e) && !(e <= 0) && Math.abs(e - t) <= 0.05 * t
    }
    function tu(e, t) {
      let s = Number(t)
      return Number.isFinite(s)
        ? e.formatNumber(Math.max(s, 0), { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        : t
    }
    var tc = s("ZOaQ"),
      td = s("MIhr"),
      th = s("j2jv"),
      tg = s("TjJf"),
      tm = s("sGKa"),
      tp = s("NxWE"),
      tf = s("x8Nb"),
      tx = s("fgDr"),
      ty = s("Y9i8"),
      tb = s("bVeK"),
      t_ = s("o6lh"),
      tv = s("Rd02"),
      tw = s("MFyU"),
      tA = s("O28E")
    function tj(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u = (0, i.c)(16),
        { rateLimitStatus: c, reduceMotion: d } = e,
        h = (0, H.As)(),
        g = (0, S.Zj)("2125321167"),
        m = (0, S.Zj)("393259752")
      if (u[0] !== m || u[1] !== h || u[2] !== g || u[3] !== c) {
        l = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            n = (0, eH.mO)(c).find(tk),
            i = null == n ? [] : (0, eF.m)({ entry: n, keyPrefix: "core" }),
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
            !g ||
            !m ||
            null == h.accountId ||
            null == h.userId ||
            ("chatgpt" !== h.authMethod && "chatgptAuthTokens" !== h.authMethod) ||
            0 === o.length
          ) {
            l = null
            break e
          }
          ;((t = tM), (s = `${h.accountId}:${h.userId}`), (a = o), (r = i.map(tC)))
        }
        ;((u[0] = m), (u[1] = h), (u[2] = g), (u[3] = c), (u[4] = t), (u[5] = s), (u[6] = a), (u[7] = r), (u[8] = l))
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
    function tC(e) {
      let { bucket: t } = e
      return t
    }
    function tk(e) {
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
        g,
        m,
        p,
        f,
        b,
        _,
        v,
        w,
        A,
        j,
        k,
        M,
        S,
        E,
        T,
        P,
        N,
        L,
        R,
        O,
        U,
        D,
        q,
        F,
        G,
        B,
        $,
        V,
        Y,
        X,
        Z,
        K = (0, i.c)(118),
        { currentWindows: Q, now: J, availableWindows: en, reduceMotion: ei } = e,
        ea = (0, r.useId)(),
        er = new Intl.DateTimeFormat().resolvedOptions().timeZone,
        el = (0, H.As)(),
        eo = (0, I.A)(),
        eu = (0, l.KC)(),
        [ec, ed] = (0, r.useState)(300)
      K[0] !== en || K[1] !== ec
        ? ((t = en.includes(ec) ? ec : (en[0] ?? 10080)), (K[0] = en), (K[1] = ec), (K[2] = t))
        : (t = K[2])
      let eh = t
      K[3] !== eh ? ((s = (e) => 1 >= Math.abs((e.windowDurationMins ?? 0) - eh)), (K[3] = eh), (K[4] = s)) : (s = K[4])
      let eg = Q.find(s),
        [em, ep] = (0, r.useState)(!1),
        [ef, ex] = (0, r.useState)(null),
        [ey, eb] = (0, r.useState)(!1)
      K[5] !== el || K[6] !== eh
        ? ((a = (function ({ accountId: e, userId: t, authMethod: s }, n) {
            return {
              queryKey: ["plan-limit-balance-history", e, t, n],
              enabled: ("chatgpt" === s || "chatgptAuthTokens" === s) && null != e && null != t,
              queryFn: async ({ signal: e }) => {
                let t
                do {
                  e.throwIfAborted()
                  try {
                    let s = await et.CodexRequest.safeGet("/wham/usage/plan_limit_balance_history", {
                      parameters: { query: { window_minutes: n, cursor: t?.next_cursor } },
                      signal: e,
                      expectedErrorStatuses: [404, 409],
                    })
                    null == t ? (t = s) : (t.points.push(...s.points), (t.next_cursor = s.next_cursor))
                  } catch (e) {
                    if (e instanceof es.fk && 404 === e.status) return null
                    throw e
                  }
                } while (null != t.next_cursor)
                return t
              },
              retry: (e, t) => e < 1 && t instanceof es.fk && 409 === t.status,
              staleTime: ee.D.FIVE_MINUTES,
              refetchOnWindowFocus: !1,
            }
          })(el, eh)),
          (K[5] = el),
          (K[6] = eh),
          (K[7] = a))
        : (a = K[7])
      let { data: e_, dataUpdatedAt: ev, isPending: ew, isError: eA, refetch: ej } = (0, z.I)(a),
        eC = e_?.points.at(-1),
        ek = e_?.points[0]
      K[8] !== ek ? ((o = null == ek ? void 0 : Date.parse(ek.observed_at)), (K[8] = ek), (K[9] = o)) : (o = K[9])
      let eM = o,
        eS = e_?.data_as_of ?? eC?.observed_at,
        eE = null == eS ? void 0 : Date.parse(eS)
      K[10] !== ev || K[11] !== J
        ? ((u = (e) => J ?? Math.max(e.getTime(), ev)), (K[10] = ev), (K[11] = J), (K[12] = u))
        : (u = K[12])
      let eT = (0, eB.wv)(u),
        eP = e_?.points.flatMap((e, t) => {
          let s = e_.points[t - 1]
          if (null == s || s.plan_type !== e.plan_type) return []
          let n = Date.parse(s.estimated_reset_at)
          return n > Date.parse(s.observed_at) &&
            n <= Date.parse(e.observed_at) &&
            Date.parse(e.estimated_reset_at) - n > 6e4
            ? [n]
            : []
        }),
        eN = 0,
        eI =
          null == e_ || null == eM || null == eE
            ? void 0
            : Array.from({ length: 64 }, (e, t) => {
                let s = eM + ((eT - eM) * t) / 63
                if (s > eE) return { timestamp: s, remaining: null }
                for (; eN + 1 < e_.points.length && Date.parse(e_.points[eN + 1].observed_at) <= s;) eN += 1
                let n = e_.points[eN],
                  i = Date.parse(n.observed_at),
                  a = eP?.find((e) => e > i && e <= s)
                return { timestamp: s, remaining: null == a ? n.remaining_basis_points / 100 : 100 }
              }),
        eL = eI?.find((e) => !em && e.timestamp === ef && null != e.remaining),
        eR = C.X
      ;(K[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, n.jsx)(x.A, {
            id: "settings.usage.balanceHistory.title",
            defaultMessage: "Recent plan usage",
            description: "Heading for the recent remaining allowance chart on Usage Overview",
          })),
          (d = (0, n.jsx)(x.A, {
            id: "settings.usage.balanceHistory.description",
            defaultMessage: "How your activity draws down your allowance",
            description: "Description of the plan allowance balance history chart",
          })),
          (K[13] = c),
          (K[14] = d))
        : ((c = K[13]), (d = K[14])),
        K[15] !== en || K[16] !== eo || K[17] !== ei || K[18] !== eh
          ? ((h =
              en.length > 1
                ? (0, n.jsx)(ty.q, {
                    ariaLabel: eo.formatMessage({
                      id: "settings.usage.balanceHistory.window",
                      defaultMessage: "Plan limit window",
                      description: "Accessible label for choosing five-hour or weekly allowance history",
                    }),
                    selectedId: String(eh),
                    size: "compact",
                    animateSelection: !ei,
                    options: en.map(tP),
                    onSelect: (e) => ed("300" === e ? 300 : 10080),
                  })
                : null),
            (K[15] = en),
            (K[16] = eo),
            (K[17] = ei),
            (K[18] = eh),
            (K[19] = h))
          : (h = K[19]),
        K[20] !== h
          ? ((g = (0, n.jsx)(C.X.Header, { title: c, subtitle: d, actions: h })), (K[20] = h), (K[21] = g))
          : (g = K[21]))
      let eO = C.X,
        eU = tw.G
      K[22] === Symbol.for("react.memo_cache_sentinel") ? ((m = []), (K[22] = m)) : (m = K[22])
      let eD = (eI?.length ?? 0) > 0,
        eF =
          null == eC
            ? null
            : (0, n.jsx)(eV.m, {
                content: (0, n.jsx)(x.A, {
                  id: "settings.usage.balanceHistory.carriedBalanceHelp",
                  defaultMessage:
                    "Updated daily. Bars carry the last observed balance forward between samples and estimate full allowance at resets. Balances and reset times are approximate.",
                  description: "Explains delayed and approximate balance history",
                }),
                children: (0, n.jsx)("span", {
                  children:
                    null != eL
                      ? eo.formatDate(eL.timestamp, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: er,
                        })
                      : (0, n.jsx)(x.A, {
                          id: "settings.usage.balanceHistory.historyThroughCaption",
                          defaultMessage: "History through {time}",
                          description: "Date of the displayed balance sample, not the current live balance",
                          values: {
                            time: eo.formatDate(eS, {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                              timeZone: er,
                            }),
                          },
                        }),
                }),
              }),
        eH,
        eG =
          null == eg
            ? null
            : (0, n.jsx)(W.Gr, {
                value: (eL?.remaining ?? (0, eq.rU)(eg.usedPercent)) / 100,
                style: "percent",
                maximumFractionDigits: +(null != eL),
              })
      ;(K[23] !== ej
        ? ((p = () => {
            ej()
          }),
          (K[23] = ej),
          (K[24] = p))
        : (p = K[24]),
        K[25] !== eA || K[26] !== ew || K[27] !== ei || K[28] !== p
          ? ((f = { isLoading: ew, isError: eA, reduceMotion: ei, onRetry: p }),
            (K[25] = eA),
            (K[26] = ew),
            (K[27] = ei),
            (K[28] = p),
            (K[29] = f))
          : (f = K[29]),
        K[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsx)(x.A, {
              id: "settings.usage.balanceHistory.empty",
              defaultMessage: "Balance history isn’t available yet",
              description: "No historical allowance observations are available",
            })),
            (K[30] = b))
          : (b = K[30]))
      let ez = tA.H
      K[31] === Symbol.for("react.memo_cache_sentinel") ? ((_ = () => ex(null)), (K[31] = _)) : (_ = K[31])
      let eW = tc.E
      ;(K[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (e) => ex(null == e.activeLabel ? null : Number(e.activeLabel))),
          (w = () => ex(null)),
          (K[32] = v),
          (K[33] = w))
        : ((v = K[32]), (w = K[33])),
        K[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = { top: 32, right: 0, bottom: 0, left: 0 }), (K[34] = A))
          : (A = K[34]),
        K[35] !== em
          ? ((j = em
              ? (0, n.jsx)("rect", { width: 8, height: 8, fill: "var(--color-background-secondary-ghost-hover)" })
              : null),
            (K[35] = em),
            (K[36] = j))
          : (j = K[36]),
        K[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)("path", {
              d: "M-2 2L2-2M0 8L8 0M6 10L10 6",
              stroke: "var(--color-text-secondary)",
              strokeOpacity: 0.2,
            })),
            (K[37] = k))
          : (k = K[37]),
        K[38] !== ea || K[39] !== j
          ? ((M = (0, n.jsx)("defs", {
              children: (0, n.jsxs)("pattern", {
                id: ea,
                width: 8,
                height: 8,
                patternUnits: "userSpaceOnUse",
                children: [j, k],
              }),
            })),
            (K[38] = ea),
            (K[39] = j),
            (K[40] = M))
          : (M = K[40]),
        K[41] !== eE || K[42] !== eT || K[43] !== ea
          ? ((S =
              null != eE && eE < eT
                ? (0, n.jsx)(td.T, {
                    x1: eE,
                    x2: eT,
                    y1: 0,
                    y2: 100,
                    fill: `url(#${ea})`,
                    fillOpacity: 1,
                    stroke: "none",
                    shape: (0, n.jsx)(tN, { onHoverChange: ep }),
                  })
                : null),
            (K[41] = eE),
            (K[42] = eT),
            (K[43] = ea),
            (K[44] = S))
          : (S = K[44]),
        K[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, n.jsx)(th.d, { vertical: !1, stroke: "var(--color-border-subtle)" })), (K[45] = E))
          : (E = K[45]),
        K[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(tv.Qr, { unit: "percent", orientation: "right", ticks: [0, 50, 100] })), (K[46] = T))
          : (T = K[46]))
      let e$ = eP?.map((e) => {
        let t = eI?.findIndex((t) => t.timestamp >= e)
        if (null == eI || null == t || t <= 0) return null
        let s = (eI[t - 1].timestamp + eI[t].timestamp) / 2
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
              value: eo.formatMessage({
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
      K[47] !== eT || K[48] !== eM
        ? ((P = null != eM && null != eT ? [eM, (eM + eT) / 2, eT] : void 0), (K[47] = eT), (K[48] = eM), (K[49] = P))
        : (P = K[49])
      let eY = eM ?? "dataMin"
      ;(K[50] !== eT || K[51] !== eY ? ((N = [eY, eT]), (K[50] = eT), (K[51] = eY), (K[52] = N)) : (N = K[52]),
        K[53] !== eT || K[54] !== eo || K[55] !== er
          ? ((L = (e) =>
              e === eT
                ? eo.formatMessage({
                    id: "settings.usage.balanceHistory.now",
                    defaultMessage: "Now",
                    description:
                      "Current time at the right edge of the allowance history chart, including recent history that is not available yet",
                  })
                : eo.formatDate(e, { month: "short", day: "numeric", timeZone: er })),
            (K[53] = eT),
            (K[54] = eo),
            (K[55] = er),
            (K[56] = L))
          : (L = K[56]),
        K[57] !== P || K[58] !== N || K[59] !== L
          ? ((R = (0, n.jsx)(tm.W, {
              ticks: P,
              dataKey: "timestamp",
              type: "number",
              scale: "time",
              domain: N,
              axisLine: !1,
              tickLine: !1,
              interval: 0,
              tick: tE,
              tickFormatter: L,
            })),
            (K[57] = P),
            (K[58] = N),
            (K[59] = L),
            (K[60] = R))
          : (R = K[60]))
      let eX = !ey && !em && void 0
      return (
        K[61] !== em ? ((O = !em && (0, n.jsx)(tv.kr, {})), (K[61] = em), (K[62] = O)) : (O = K[62]),
        K[63] !== eo || K[64] !== eI || K[65] !== er
          ? ((U = (e) => {
              let { active: t, label: s } = e,
                i = eI?.find((e) => e.timestamp === Number(s))
              return t && null != i
                ? (0, n.jsxs)("div", {
                    className: "sr-only",
                    role: "status",
                    children: [
                      (0, n.jsx)("div", {
                        children: eo.formatDate(i.timestamp, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: er,
                        }),
                      }),
                      null == i.remaining
                        ? (0, n.jsx)(x.A, {
                            id: "settings.usage.balanceHistory.pendingAggregation",
                            defaultMessage: "Recent usage isn’t available yet",
                            description:
                              "Chart region after the latest aggregation cutoff with no reported balance history yet",
                          })
                        : (0, n.jsx)(W.Gr, { value: i.remaining / 100, style: "percent", maximumFractionDigits: 1 }),
                    ],
                  })
                : null
            }),
            (K[63] = eo),
            (K[64] = eI),
            (K[65] = er),
            (K[66] = U))
          : (U = K[66]),
        K[67] !== eX || K[68] !== O || K[69] !== U
          ? ((D = (0, n.jsx)(tp.m, { active: eX, cursor: O, filterNull: !1, content: U })),
            (K[67] = eX),
            (K[68] = O),
            (K[69] = U),
            (K[70] = D))
          : (D = K[70]),
        K[71] === Symbol.for("react.memo_cache_sentinel") ? ((q = [2, 2, 0, 0]), (K[71] = q)) : (q = K[71]),
        K[72] !== eL || K[73] !== eI
          ? ((F = (0, n.jsx)(tf.yP, {
              dataKey: "remaining",
              name: "remaining",
              fill: t_.sh,
              maxBarSize: 44,
              isAnimationActive: !1,
              radius: q,
              shape: (e) =>
                (0, n.jsx)(tx.M, {
                  ...e,
                  pointerEvents: "none",
                  fillOpacity: null == eL || eI?.[e.originalDataIndex]?.timestamp === eL.timestamp ? 1 : 0.5,
                }),
            })),
            (K[72] = eL),
            (K[73] = eI),
            (K[74] = F))
          : (F = K[74]),
        K[75] !== eW ||
        K[76] !== eI ||
        K[77] !== tT ||
        K[78] !== v ||
        K[79] !== w ||
        K[80] !== A ||
        K[81] !== M ||
        K[82] !== S ||
        K[83] !== E ||
        K[84] !== T ||
        K[85] !== e$ ||
        K[86] !== R ||
        K[87] !== D ||
        K[88] !== F
          ? ((G = (0, n.jsxs)(eW, {
              data: eI,
              onMouseDown: tT,
              onMouseMove: v,
              onMouseLeave: w,
              accessibilityLayer: !0,
              margin: A,
              children: [M, S, E, T, e$, R, D, F],
            })),
            (K[75] = eW),
            (K[76] = eI),
            (K[77] = tT),
            (K[78] = v),
            (K[79] = w),
            (K[80] = A),
            (K[81] = M),
            (K[82] = S),
            (K[83] = E),
            (K[84] = T),
            (K[85] = e$),
            (K[86] = R),
            (K[87] = D),
            (K[88] = F),
            (K[89] = G))
          : (G = K[89]),
        K[90] !== ez || K[91] !== eb || K[92] !== _ || K[93] !== G || K[94] !== ey
          ? ((B = (0, n.jsx)(ez, {
              consumerAnalytics: !0,
              scope: "consumer",
              isTooltipDismissed: ey,
              onTooltipDismissedChange: eb,
              onResetHover: _,
              children: G,
            })),
            (K[90] = ez),
            (K[91] = eb),
            (K[92] = _),
            (K[93] = G),
            (K[94] = ey),
            (K[95] = B))
          : (B = K[95]),
        K[96] !== eU ||
        K[97] !== m ||
        K[98] !== eD ||
        K[99] !== eF ||
        K[100] !== eH ||
        K[101] !== eG ||
        K[102] !== f ||
        K[103] !== b ||
        K[104] !== B
          ? (($ = (0, n.jsx)(eU, {
              activeSeriesKey: null,
              balanceHistory: !0,
              consumerAnalytics: !0,
              fillChartHeight: !0,
              scope: "consumer",
              series: m,
              hasData: eD,
              title: null,
              totalDescription: eF,
              total: eH,
              totalLabel: eG,
              status: f,
              emptyMessage: b,
              children: B,
            })),
            (K[96] = eU),
            (K[97] = m),
            (K[98] = eD),
            (K[99] = eF),
            (K[100] = eH),
            (K[101] = eG),
            (K[102] = f),
            (K[103] = b),
            (K[104] = B),
            (K[105] = $))
          : ($ = K[105]),
        K[106] !== eO.Content || K[107] !== $
          ? ((V = (0, n.jsx)(eO.Content, { children: $ })), (K[106] = eO.Content), (K[107] = $), (K[108] = V))
          : (V = K[108]),
        K[109] !== eu
          ? ((Y = eu?.visibleSettingsSections.some(tS)
              ? (0, n.jsxs)(y.$, {
                  className: "underline-offset-2 hover:underline focus-visible:underline",
                  color: "ghostMuted",
                  size: "inline",
                  onClick: () => eu.onSelectSection("analytics"),
                  children: [
                    (0, n.jsx)(x.A, {
                      id: "settings.usage.balanceHistory.viewHistory",
                      defaultMessage: "View usage history",
                      description: "Open Analytics from recent plan usage",
                    }),
                    (0, n.jsx)(tb.$XR, {}),
                  ],
                })
              : null),
            (K[109] = eu),
            (K[110] = Y))
          : (Y = K[110]),
        K[111] !== Y
          ? ((X = (0, n.jsx)(C.X.Footer, { variant: "action", children: Y })), (K[111] = Y), (K[112] = X))
          : (X = K[112]),
        K[113] !== eR || K[114] !== V || K[115] !== X || K[116] !== g
          ? ((Z = (0, n.jsxs)(eR, { children: [g, V, X] })),
            (K[113] = eR),
            (K[114] = V),
            (K[115] = X),
            (K[116] = g),
            (K[117] = Z))
          : (Z = K[117]),
        Z
      )
    }
    function tS(e) {
      let { slug: t } = e
      return "analytics" === t
    }
    function tE(e) {
      return (0, n.jsx)(tv.ps, { ...e })
    }
    function tT(e, t) {
      return t.preventDefault()
    }
    function tP(e) {
      return {
        id: String(e),
        label: (0, n.jsx)(x.A, {
          id: "settings.usage.balanceHistory.windowLabel",
          defaultMessage: "{minutes, select, 300 {5-hour} other {Weekly}}",
          description: "Allowance history window selector",
          values: { minutes: e },
        }),
      }
    }
    function tN(e) {
      let t,
        s,
        a,
        r,
        l = (0, i.c)(12),
        { x: o, y: u, width: c, height: d, fill: h, onHoverChange: g } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(x.A, {
              id: "settings.usage.balanceHistory.pendingAggregation",
              defaultMessage: "Recent usage isn’t available yet",
              description: "Chart region after the latest aggregation cutoff with no reported balance history yet",
            })),
            (l[0] = t))
          : (t = l[0]),
        l[1] !== g
          ? ((s = () => g(!0)), (a = () => g(!1)), (l[1] = g), (l[2] = s), (l[3] = a))
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
    var tI = s("SPnB"),
      tL = s("jdiu"),
      tR = s("eFxf")
    function tO() {
      let e,
        t,
        s,
        a = (0, i.c)(10),
        r = (0, f.gh)(X.u),
        l = (0, eZ.b)(),
        { accountId: o } = (0, H.As)(),
        { data: u } = (0, ef.YL)(),
        c = (0, S.AS)(),
        d = (0, f.Ul)(tL.jc)
      return (
        a[0] !== o || a[1] !== u || a[2] !== l || a[3] !== r || a[4] !== c
          ? ((e = (e) => {
              ;((0, tR.Ih)(c),
                (0, tR.uS)(r, {
                  audience: "workspace",
                  checkoutKind: "standalone_credit",
                  entryPoint: "usage_settings_purchase_cta",
                }),
                (0, tL.nZ)({
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
          ? ((t = (0, n.jsx)(x.A, {
              id: "settings.usage.credit.balance.addBusinessCredits",
              defaultMessage: "Add more",
              description:
                "Button beside the shared workspace credit balance in Usage settings. Opens the credit purchase flow for a Business workspace owner.",
            })),
            (a[6] = t))
          : (t = a[6]),
        a[7] !== d || a[8] !== e
          ? ((s = (0, n.jsx)(y.$, {
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
    var tU = s("LfMl"),
      tD = s("WePE"),
      tq = s("Ghh3")
    function tF(e) {
      let t,
        s = (0, i.c)(6),
        { canPurchaseCredits: a, renderCreditBalance: r } = e,
        l = void 0 === a || a,
        { accountId: o, authMethod: u, userId: c } = (0, H.As)(),
        { data: d } = (0, ef.YL)()
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
          ? ((t = (0, n.jsx)(tH, { accountId: o, canPurchaseCredits: l, renderCreditBalance: r }, o)),
            (s[2] = o),
            (s[3] = l),
            (s[4] = r),
            (s[5] = t))
          : (t = s[5]),
        t
      )
    }
    function tH(e) {
      let t,
        s,
        a,
        l,
        o,
        u,
        c,
        d,
        h,
        g,
        m,
        p,
        b,
        v,
        w,
        A,
        j,
        C,
        M,
        E,
        T,
        P = (0, i.c)(80),
        { accountId: L, canPurchaseCredits: R, renderCreditBalance: O } = e,
        U = (0, f.gh)(X.u),
        D = (0, I.A)(),
        { authMethod: q, userId: F } = (0, H.As)(),
        { data: G } = (0, ef.YL)(),
        B = (0, S.AS)(),
        W = (0, eZ.b)(),
        [$, V] = (0, r.useState)(!1)
      ;(P[0] !== L || P[1] !== q || P[2] !== F
        ? ((t = ["workspace-auto-reload-policy", q, F, L]), (P[0] = L), (P[1] = q), (P[2] = F), (P[3] = t))
        : (t = P[3]),
        P[4] !== L
          ? ((s = (e) => {
              let { signal: t } = e
              return tq.Request.safeGet("/pageConfigs/billing", { additionalHeaders: { [eg.zBc]: L }, signal: t })
            }),
            (P[4] = L),
            (P[5] = s))
          : (s = P[5]),
        P[6] !== t || P[7] !== s
          ? ((a = { queryKey: t, queryFn: s, staleTime: ee.D.ONE_MINUTE, refetchOnWindowFocus: "always" }),
            (P[6] = t),
            (P[7] = s),
            (P[8] = a))
          : (a = P[8]))
      let { data: Z, isPending: K, isError: Q, refetch: J } = (0, z.I)(a),
        et =
          Z?.credits.eligible === !0 &&
          Z.credits.credit_policy?.kind === "business" &&
          !0 === Z.credits.credit_policy.can_manage_auto_reload
      P[9] !== et
        ? ((l = { enabled: et, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (P[9] = et), (P[10] = l))
        : (l = P[10])
      let { data: es, isPending: en, isError: ei, refetch: ea } = (0, _.q7)(l)
      P[11] !== et ? ((o = { enabled: et, refetchOnWindowFocus: "always" }), (P[11] = et), (P[12] = o)) : (o = P[12])
      let { data: er, isPending: el, isError: eo, refetch: eu } = (0, _.Ko)(o)
      P[13] !== et ? ((u = { enabled: et }), (P[13] = et), (P[14] = u)) : (u = P[14])
      let { data: ec } = (0, f._U)(_.pb, et || R ? L : null, u)
      P[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { analyticsSurface: "wham_usage_dashboard" }), (P[15] = c))
        : (c = P[15])
      let ed = (0, _.MU)(c),
        eh = !es?.isEnabled && es?.paymentMethod == null,
        em = K || (!Q && et && (en || (!ei && eh && el))),
        ep = !Q && et && null != es && !ei && !(eh && (eo || (er?.payment_methods.length ?? 0) === 0))
      P[16] !== R || P[17] !== ep || P[18] !== ec
        ? ((d = (ep || R) && ec?.balance != null && Number.isFinite(Number(ec.balance))),
          (P[16] = R),
          (P[17] = ep),
          (P[18] = ec),
          (P[19] = d))
        : (d = P[19])
      let ex = d
      ;(P[20] !== L || P[21] !== q || P[22] !== ex || P[23] !== F
        ? ((h = (0, _.tj)({ accountId: L, authMethod: q, userId: F, enabled: ex })),
          (P[20] = L),
          (P[21] = q),
          (P[22] = ex),
          (P[23] = F),
          (P[24] = h))
        : (h = P[24]),
        P[25] !== L
          ? ((g = async (e) => {
              let { signal: t } = e
              return (
                await tq.Request.safeGet("/subscriptions/credits/discount-offer", {
                  additionalHeaders: { [eg.zBc]: L },
                  signal: t,
                })
              ).offer
            }),
            (P[25] = L),
            (P[26] = g))
          : (g = P[26]),
        P[27] !== g || P[28] !== h ? ((m = { ...h, queryFn: g }), (P[27] = g), (P[28] = h), (P[29] = m)) : (m = P[29]))
      let { data: ey, isError: eb, isFetching: e_ } = (0, z.I)(m),
        ev = !ex || eb || e_ ? null : ey
      P[30] !== ev?.auto_reload || P[31] !== ep || P[32] !== es?.isEnabled
        ? ((p = ep && es?.isEnabled === !1 ? (ev?.auto_reload?.tiers.reduce(tz, 0) ?? 0) : 0),
          (P[30] = ev?.auto_reload),
          (P[31] = ep),
          (P[32] = es?.isEnabled),
          (P[33] = p))
        : (p = P[33])
      let ew = p
      if (P[34] !== ev || P[35] !== R || P[36] !== em || P[37] !== ew || P[38] !== O) {
        let e = R && !em && 0 === ew ? (ev?.one_time.tiers.reduce(tG, 0) ?? 0) : 0
        ;((b = O?.(e)), (P[34] = ev), (P[35] = R), (P[36] = em), (P[37] = ew), (P[38] = O), (P[39] = b))
      } else b = P[39]
      let eA = b
      if (Q || (et && (ei || (eh && eo)))) {
        let e, t, s, i, a
        return (
          P[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(x.A, {
                id: "settings.usage.autoTopUp.workspace.loadError",
                defaultMessage: "Could not load automatic reload settings",
                description: "Error shown when a Business workspace owner cannot load automatic credit reload settings",
              })),
              (P[40] = e))
            : (e = P[40]),
          P[41] !== et || P[42] !== eh || P[43] !== J || P[44] !== eu || P[45] !== ea
            ? ((t = () => {
                ;(J(), et && (ea(), eh && eu()))
              }),
              (P[41] = et),
              (P[42] = eh),
              (P[43] = J),
              (P[44] = eu),
              (P[45] = ea),
              (P[46] = t))
            : (t = P[46]),
          P[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(x.A, {
                id: "settings.usage.load.retry",
                defaultMessage: "Retry",
                description: "Retry button for usage settings fetch errors",
              })),
              (P[47] = s))
            : (s = P[47]),
          P[48] !== t
            ? ((i = (0, n.jsx)(k.ic, {
                label: e,
                control: (0, n.jsx)(y.$, { color: "secondary", size: "toolbar", onClick: t, children: s }),
              })),
              (P[48] = t),
              (P[49] = i))
            : (i = P[49]),
          P[50] !== eA || P[51] !== i
            ? ((a = (0, n.jsxs)(n.Fragment, { children: [eA, i] })), (P[50] = eA), (P[51] = i), (P[52] = a))
            : (a = P[52]),
          a
        )
      }
      return ep && null != es
        ? (P[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, n.jsx)(x.A, {
                id: "settings.usage.credit.balance.autoReloadLabel",
                defaultMessage: "Automatic reload",
                description: "Label for the automatic credits reload setting in Usage and billing",
              })),
              (P[53] = v))
            : (v = P[53]),
          P[54] !== ew
            ? ((w = ew > 0 ? (0, n.jsx)(N.u1, { discountPercent: ew }) : null), (P[54] = ew), (P[55] = w))
            : (w = P[55]),
          P[56] !== D || P[57] !== es.isEnabled
            ? ((A = es.isEnabled
                ? D.formatMessage({
                    id: "settings.usage.credit.balance.manageAutoReload",
                    defaultMessage: "Manage auto-reload",
                    description: "Accessible label for managing active automatic credits reload from Usage and billing",
                  })
                : D.formatMessage({
                    id: "settings.usage.credit.balance.setupAutoReload",
                    defaultMessage: "Set up auto-reload",
                    description: "Accessible label for setting up automatic credits reload from Usage and billing",
                  })),
              (P[56] = D),
              (P[57] = es.isEnabled),
              (P[58] = A))
            : (A = P[58]),
          P[59] === Symbol.for("react.memo_cache_sentinel") ? ((j = () => V(!0)), (P[59] = j)) : (j = P[59]),
          P[60] !== es.isEnabled || P[61] !== A
            ? ((C = (0, n.jsx)(Y.l, { checked: es.isEnabled, ariaLabel: A, onChange: j })),
              (P[60] = es.isEnabled),
              (P[61] = A),
              (P[62] = C))
            : (C = P[62]),
          P[63] !== w || P[64] !== C
            ? ((M = (0, n.jsx)(k.ic, { label: v, control: (0, n.jsxs)(n.Fragment, { children: [w, C] }) })),
              (P[63] = w),
              (P[64] = C),
              (P[65] = M))
            : (M = P[65]),
          P[66] !== L ||
          P[67] !== G ||
          P[68] !== $ ||
          P[69] !== ed ||
          P[70] !== W ||
          P[71] !== U ||
          P[72] !== es ||
          P[73] !== B ||
          P[74] !== ec?.balance
            ? ((E = $
                ? (0, n.jsx)(N.bH, {
                    open: !0,
                    showCreditDiscounts: !0,
                    serverState: es,
                    creditBalance: ec?.balance,
                    paymentAccountId: L,
                    creditPurchaseUrl: `https://chatgpt.com/pricing/credits?account_id=${encodeURIComponent(L)}&audience=workspace`,
                    ...ed,
                    onOpenChange: V,
                    onPurchaseCredits: (e) => {
                      ;(e.preventDefault(),
                        (0, tR.Ih)(B),
                        (0, tL.nZ)({
                          scope: U,
                          navigateToPurchase: W,
                          accountId: L,
                          currentAccount: G,
                          event: e,
                          statsigClient: B,
                        }))
                    },
                  })
                : null),
              (P[66] = L),
              (P[67] = G),
              (P[68] = $),
              (P[69] = ed),
              (P[70] = W),
              (P[71] = U),
              (P[72] = es),
              (P[73] = B),
              (P[74] = ec?.balance),
              (P[75] = E))
            : (E = P[75]),
          P[76] !== eA || P[77] !== M || P[78] !== E
            ? ((T = (0, n.jsxs)(n.Fragment, { children: [eA, M, E] })),
              (P[76] = eA),
              (P[77] = M),
              (P[78] = E),
              (P[79] = T))
            : (T = P[79]),
          T)
        : (eA ?? null)
    }
    function tG(e, t) {
      return Math.max(e, t.percent_off)
    }
    function tz(e, t) {
      return Math.max(e, t.percent_off)
    }
    var tB = s("X4FU")
    function tW(e) {
      let t,
        s,
        a,
        r,
        l,
        o,
        u,
        c,
        d = (0, i.c)(60),
        { canPurchaseCredits: h, isPolling: g, rateLimitStatus: m } = e,
        p = (0, f.gh)(X.u),
        { accountId: b, userId: v } = (0, H.As)(),
        w = (0, f.Ul)(tI.o8),
        A = (0, f._U)(tD.Wx, b),
        { data: j, isError: S, isLoading: E } = (0, ef.YL)(),
        P = j?.id ?? null
      d[0] !== b || d[1] !== S || d[2] !== E || d[3] !== m || d[4] !== P || d[5] !== v
        ? ((t = (0, T.jV)({
            authAccountId: b,
            authUserId: v,
            currentAccountId: P,
            isCurrentAccountError: S,
            isCurrentAccountLoading: E,
            rateLimitStatus: m,
          })),
          (d[0] = b),
          (d[1] = S),
          (d[2] = E),
          (d[3] = m),
          (d[4] = P),
          (d[5] = v),
          (d[6] = t))
        : (t = d[6])
      let N = t,
        I = S || j?.id !== b ? null : j.account_user_role,
        R = "account-owner" === I,
        O = R || "account-admin" === I,
        U = m?.spend_control?.individual_limit,
        D = m?.credits?.has_credits === !1,
        q = null != I && !O && null != U && 0 >= Number(U.remaining),
        F = N && q
      d[7] !== b || d[8] !== F ? ((s = { accountId: b, enabled: F }), (d[7] = b), (d[8] = F), (d[9] = s)) : (s = d[9])
      let { data: G, isError: z, isLoading: B, refetch: W } = (0, _.sl)(s),
        $ = U?.reset_at ?? null
      d[10] !== $ ? ((a = (0, eq.tB)($)), (d[10] = $), (d[11] = a)) : (a = d[11])
      let V = a,
        Y = q && G?.kind === "custom" ? G.instructions : null
      d[12] !== b || d[13] !== N || d[14] !== w || d[15] !== v
        ? ((r = N && null != b && null != w ? { accountId: b, userId: v, requestUserId: w } : null),
          (d[12] = b),
          (d[13] = N),
          (d[14] = w),
          (d[15] = v),
          (d[16] = r))
        : (r = d[16])
      let Z = r,
        K = (0, f._U)(tD.R6, Z)
      if (
        d[17] !== I ||
        d[18] !== q ||
        d[19] !== R ||
        d[20] !== U?.source ||
        d[21] !== m?.rate_limit_upsell ||
        d[22] !== G?.kind ||
        d[23] !== Z ||
        d[24] !== A ||
        d[25] !== D
      ) {
        if (((l = null), null != Z && null != I && !R && (D || (q && G?.kind === "openai_native")) && !0 === A)) {
          let e
          d[27] !== m?.rate_limit_upsell?.ctas || d[28] !== m?.rate_limit_upsell?.ctas.find
            ? ((e = m?.rate_limit_upsell?.ctas.find(t$)?.reason),
              (d[27] = m?.rate_limit_upsell?.ctas),
              (d[28] = m?.rate_limit_upsell?.ctas.find),
              (d[29] = e))
            : (e = d[29])
          let t = e
          null != t
            ? (l = t)
            : q && U?.source === "account_user_spend_controls"
              ? (l = "INDIVIDUAL_SPEND_LIMIT_REACHED")
              : q && U?.source === "workspace_spend_controls"
                ? (l = "SEAT_TYPE_SPEND_LIMIT_REACHED")
                : D && (l = "WORKSPACE_CREDITS_EXHAUSTED")
        }
        ;((d[17] = I),
          (d[18] = q),
          (d[19] = R),
          (d[20] = U?.source),
          (d[21] = m?.rate_limit_upsell),
          (d[22] = G?.kind),
          (d[23] = Z),
          (d[24] = A),
          (d[25] = D),
          (d[26] = l))
      } else l = d[26]
      return N && null != m && (null != U || R || D)
        ? (d[30] !== I || d[31] !== O || d[32] !== U || d[33] !== D
            ? ((o =
                null == I || O || null == U
                  ? (0, n.jsx)(x.A, {
                      id: "settings.usage.businessCredits.description",
                      defaultMessage:
                        "Shared workspace credits let you keep using Work and Codex beyond included usage.",
                      description:
                        "Credits section description explaining shared workspace credits. Work and Codex are product names.",
                    })
                  : D
                    ? (0, n.jsx)(x.A, {
                        id: "settings.usage.businessCredits.member.unavailableDescription",
                        defaultMessage:
                          "Shared workspace credits let you keep using Work and Codex beyond included usage. Monthly credit limits are set by your workspace owner.",
                        description:
                          "Credits section description for a Business workspace member when the shared credit pool is exhausted. Work and Codex are product names.",
                      })
                    : (0, n.jsx)(x.A, {
                        id: "settings.usage.businessCredits.member.description",
                        defaultMessage: "Monthly credit limits are set by your workspace owner.",
                        description:
                          "Credits section description for a Business workspace member whose monthly credit allowance is managed by their workspace owner.",
                      })),
              (d[30] = I),
              (d[31] = O),
              (d[32] = U),
              (d[33] = D),
              (d[34] = o))
            : (o = d[34]),
          d[35] !== b ||
          d[36] !== I ||
          d[37] !== O ||
          d[38] !== h ||
          d[39] !== q ||
          d[40] !== Y ||
          d[41] !== R ||
          d[42] !== g ||
          d[43] !== z ||
          d[44] !== B ||
          d[45] !== U ||
          d[46] !== W ||
          d[47] !== G ||
          d[48] !== V ||
          d[49] !== p ||
          d[50] !== o ||
          d[51] !== Z ||
          d[52] !== l ||
          d[53] !== K ||
          d[54] !== A ||
          d[55] !== D
            ? ((u = (e) => {
                let { actions: t } = e,
                  s = null
                if (O)
                  s = (0, n.jsx)(y.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: (e) => {
                      t.increase_spend_cap.onClick(e)
                    },
                    children: (0, n.jsx)(x.A, {
                      id: "settings.usage.businessCredits.increaseLimit",
                      defaultMessage: "Increase monthly limit",
                      description:
                        "Button that opens the workspace usage limit editor for an owner or admin to change their monthly credit limit.",
                    }),
                  })
                else if (q && (G?.kind === "openai_native" || (G?.kind === "custom" && G.request_url))) {
                  let e = "custom" !== G.kind && (null != l ? K.disabled : t.request_increase.disabled)
                  s = (0, n.jsx)(y.$, {
                    color: "secondary",
                    size: "toolbar",
                    disabled: e,
                    loading: "custom" !== G.kind && (!1 !== A ? K.isSubmitting : e),
                    onClick: (e) => {
                      "custom" === G.kind && G.request_url
                        ? (0, L.PQ)({ event: e, href: G.request_url, initiator: "open_in_browser_bridge" })
                        : null != Z && null != l
                          ? (0, tD.Zu)(p, Z, l, { surface: "CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS" })
                          : t.request_increase.onClick(e)
                    },
                    children: (0, n.jsx)(x.A, { ...tY.requestUsage }),
                  })
                }
                return (0, n.jsxs)(C.X, {
                  children: [
                    (0, n.jsx)(C.X.Header, { title: (0, n.jsx)(x.A, { ...tB.z.title }), subtitle: o }),
                    (0, n.jsx)(C.X.Content, {
                      children: (0, n.jsxs)(M.t, {
                        children: [
                          null != U
                            ? (0, n.jsx)(k.ic, {
                                label: (0, n.jsx)(x.A, {
                                  id: "settings.usage.businessCredits.monthlyRemaining",
                                  defaultMessage: "{remaining, number} of {limit, number} monthly credits left",
                                  description:
                                    "Remaining personal monthly credit allowance out of the configured total in a Business workspace.",
                                  values: {
                                    remaining: Math.max(0, Math.ceil(Number(U.remaining))),
                                    limit: Number(U.limit),
                                  },
                                }),
                                description:
                                  null != V || null != Y
                                    ? (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          null != V
                                            ? (0, n.jsx)("div", { children: (0, n.jsx)(eW, { resetAt: V }) })
                                            : null,
                                          null != Y
                                            ? (0, n.jsx)("span", {
                                                className: "leading-relaxed whitespace-pre-wrap",
                                                children: Y,
                                              })
                                            : null,
                                        ],
                                      })
                                    : null,
                                control: s,
                              })
                            : null,
                          q && (z || B)
                            ? (0, n.jsx)(k.ic, {
                                label: z
                                  ? (0, n.jsx)(x.A, {
                                      id: "settings.usage.businessCredits.requestPolicy.error",
                                      defaultMessage: "Couldn’t load usage request settings",
                                      description:
                                        "Shown when the workspace policy for requesting a monthly credit limit increase could not be loaded.",
                                    })
                                  : (0, n.jsx)(x.A, {
                                      id: "settings.usage.businessCredits.requestPolicy.loading",
                                      defaultMessage: "Loading usage request settings…",
                                      description:
                                        "Shown while loading the workspace policy for requesting a monthly credit limit increase.",
                                    }),
                                control: z
                                  ? (0, n.jsx)(y.$, {
                                      color: "secondary",
                                      size: "toolbar",
                                      onClick: () => void W(),
                                      children: (0, n.jsx)(x.A, {
                                        id: "settings.usage.load.retry",
                                        defaultMessage: "Retry",
                                        description: "Retry button for usage settings fetch errors",
                                      }),
                                    })
                                  : null,
                              })
                            : null,
                          R && null != b
                            ? (0, n.jsx)(
                                tF,
                                {
                                  canPurchaseCredits: h,
                                  renderCreditBalance: (e) =>
                                    (0, n.jsx)(tV, {
                                      accountId: b,
                                      canPurchaseCredits: h,
                                      isPolling: g,
                                      discountPercent: e,
                                    }),
                                },
                                b,
                              )
                            : null,
                          !R && D
                            ? (0, n.jsx)(k.ic, {
                                label: (0, n.jsx)(x.A, {
                                  id: "settings.usage.businessCredits.unavailable",
                                  defaultMessage: "Workspace credits are unavailable",
                                  description:
                                    "Shown to a Business workspace member or admin when the shared workspace credit pool is exhausted. The numeric workspace balance is not disclosed.",
                                }),
                                control:
                                  null != I
                                    ? (0, n.jsx)(y.$, {
                                        color: "secondary",
                                        size: "toolbar",
                                        disabled: null != l ? K.disabled : t.notify_owner.disabled,
                                        loading: !1 !== A ? K.isSubmitting : t.notify_owner.disabled,
                                        onClick: (e) => {
                                          null != Z && null != l
                                            ? (0, tD.Zu)(p, Z, l, {
                                                surface: "CHATGPT_WORKSPACE_USAGE_REQUEST_SURFACE_SETTINGS",
                                              })
                                            : t.notify_owner.onClick(e)
                                        },
                                        children: (0, n.jsx)(x.A, { ...tY.requestUsage }),
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
              (d[35] = b),
              (d[36] = I),
              (d[37] = O),
              (d[38] = h),
              (d[39] = q),
              (d[40] = Y),
              (d[41] = R),
              (d[42] = g),
              (d[43] = z),
              (d[44] = B),
              (d[45] = U),
              (d[46] = W),
              (d[47] = G),
              (d[48] = V),
              (d[49] = p),
              (d[50] = o),
              (d[51] = Z),
              (d[52] = l),
              (d[53] = K),
              (d[54] = A),
              (d[55] = D),
              (d[56] = u))
            : (u = d[56]),
          d[57] !== m || d[58] !== u
            ? ((c = (0, n.jsx)(tU.u, { rateLimitStatus: m, source: "usage_settings_purchase_cta", children: u })),
              (d[57] = m),
              (d[58] = u),
              (d[59] = c))
            : (c = d[59]),
          c)
        : null
    }
    function t$(e) {
      return "request_usage" === e.action
    }
    function tV(e) {
      let t,
        s,
        a,
        l,
        o,
        u = (0, i.c)(14),
        { accountId: c, canPurchaseCredits: d, isPolling: h, discountPercent: g } = e,
        [m, p] = (0, r.useState)(!1),
        y = h || !m
      u[0] !== y ? ((t = { enabled: y }), (u[0] = y), (u[1] = t)) : (t = u[1])
      let { data: b, isLoading: v, isSuccess: w, isError: A } = (0, f._U)(_.pb, c, t)
      !m && (w || A) && p(!0)
      let j = b?.balance == null ? null : Number(b.balance)
      if (v) {
        let e
        ;(u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(x.A, {
              id: "settings.usage.businessCredits.loading",
              defaultMessage: "Loading workspace credits…",
              description: "Shown while loading the workspace owner's shared credit balance.",
            })),
            (u[2] = e))
          : (e = u[2]),
          (s = e))
      } else if (null != j && Number.isFinite(j)) {
        let e,
          t = Math.max(0, Math.ceil(j))
        ;(u[3] !== t
          ? ((e = (0, n.jsx)(x.A, {
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
          ? ((e = (0, n.jsx)(x.A, {
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
        u[8] !== d || u[9] !== g
          ? ((l = d
              ? (0, n.jsxs)("div", {
                  className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
                  children: [g > 0 ? (0, n.jsx)(N.u1, { discountPercent: g }) : null, (0, n.jsx)(tO, {})],
                })
              : null),
            (u[8] = d),
            (u[9] = g),
            (u[10] = l))
          : (l = u[10]),
        u[11] !== a || u[12] !== l
          ? ((o = (0, n.jsx)(k.ic, { label: a, control: l })), (u[11] = a), (u[12] = l), (u[13] = o))
          : (o = u[13]),
        o
      )
    }
    let tY = (0, W.YK)({
      requestUsage: {
        id: "settings.usage.businessCredits.requestUsage",
        defaultMessage: "Request more usage",
        description:
          "Button for a workspace member or admin to request more credits or a higher monthly allowance from their workspace owner.",
      },
    })
    var tX = s("AKNp")
    function tZ(e) {
      let t,
        s = (0, i.c)(3),
        { plan: a, showUnifiedUsage: r } = e,
        l = void 0 !== r && r
      return (
        s[0] !== a || s[1] !== l
          ? ((t = (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsx)(tK, { plan: a, showUnifiedUsage: l, respectUpsellSuppression: !1 }),
                }),
                null,
              ],
            })),
            (s[0] = a),
            (s[1] = l),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function tK(e) {
      let t,
        s,
        a,
        r,
        l,
        o = (0, i.c)(15),
        { plan: u, respectUpsellSuppression: c, showUnifiedUsage: d } = e
      o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (o[0] = t)) : (t = o[0])
      let h = (0, R.q)(t),
        g = (0, D.j)()
      o[1] !== u ? ((s = (0, O.m6)(u)), (o[1] = u), (o[2] = s)) : (s = o[2])
      let m = s,
        p = (0, S.AS)()
      if (null != m && null != (0, O.N8)(u) && (!c || (0, tX.ku)(p, "Agent usage settings upgrade link"))) {
        let e, t
        o[3] !== h || o[4] !== g || o[5] !== m
          ? ((e = (e) =>
              (0, n.jsx)("span", {
                className: "inline-flex",
                children: (0, n.jsx)(y.$, {
                  color: "ghostAccent",
                  size: "inline",
                  onClick: (e) => {
                    g({ currentPlan: m.pricePlan, event: e, getPricingUrl: h, source: "usage_settings_plan_row" })
                  },
                  children: e,
                }),
              })),
            (o[3] = h),
            (o[4] = g),
            (o[5] = m),
            (o[6] = e))
          : (e = o[6])
        let s = e
        ;(o[7] !== d || o[8] !== s
          ? ((t = d
              ? (0, n.jsx)(x.A, {
                  id: "settings.usage.personalLimits.upgradeDescription.unified",
                  defaultMessage:
                    "Shared across all of ChatGPT and Codex. For more usage, <upgrade>upgrade your plan</upgrade>.",
                  description:
                    "Subtitle beneath Plan limits in Usage settings. ChatGPT and Codex share an allowance. The upgrade tag opens the existing plan upgrade flow.",
                  values: { upgrade: s },
                })
              : (0, n.jsx)(x.A, {
                  id: "settings.usage.personalLimits.upgradeDescription",
                  defaultMessage:
                    "Shared across Codex, Work, Workspace Agents, and ChatGPT for Excel. Chat conversations are not included. To increase usage, <upgrade>upgrade your plan</upgrade>",
                  description:
                    "Explains which products share a personal plan's included usage. The upgrade tag opens the existing plan upgrade flow. Codex, Work, Workspace Agents, ChatGPT for Excel, and Chat are product names.",
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
              ? (0, n.jsx)(x.A, {
                  id: "settings.usage.personalLimits.sharedDescription.unified",
                  defaultMessage: "Shared across all of ChatGPT and Codex.",
                  description:
                    "Subtitle beneath Plan limits in Usage settings when an upgrade is unavailable. ChatGPT and Codex share the same included plan allowance.",
                })
              : (0, n.jsx)(x.A, {
                  id: "settings.usage.personalLimits.sharedDescription",
                  defaultMessage:
                    "Shared across Codex, Work, Workspace Agents, and ChatGPT for Excel. Chat conversations are not included.",
                  description:
                    "Explains the products that share a Consumer or Business user's included-plan usage limits. Ordinary Chat conversations do not count.",
                })),
            (o[10] = d),
            (o[11] = e))
          : (e = o[11]),
          (a = e))
      }
      return (
        o[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(x.A, {
              id: "settings.usage.personalLimits.title",
              defaultMessage: "Plan limits",
              description: "Heading for a Consumer or Business user's own included-plan usage limits",
            })),
            (o[12] = r))
          : (r = o[12]),
        o[13] !== a ? ((l = (0, n.jsx)(C.X.Header, { title: r, subtitle: a })), (o[13] = a), (o[14] = l)) : (l = o[14]),
        l
      )
    }
    function tQ(e) {
      let t,
        s,
        a,
        o,
        c,
        g,
        m,
        p,
        b,
        C,
        M,
        I,
        L,
        R,
        O,
        U,
        D,
        F,
        H,
        G,
        z,
        B,
        W,
        $,
        V,
        Y = (0, i.c)(131),
        { isPolling: X } = e,
        Z = (0, l.KC)()
      Y[0] !== Z?.visibleSettingsSections || Y[1] !== Z?.visibleSettingsSections.some
        ? ((t = Z?.visibleSettingsSections.some(t1) ?? !1),
          (Y[0] = Z?.visibleSettingsSections),
          (Y[1] = Z?.visibleSettingsSections.some),
          (Y[2] = t))
        : (t = Y[2])
      let K = t,
        { data: Q, isLoading: J, isError: ee } = (0, f.Ul)(A.Ix),
        {
          autoReloadSettings: et,
          canManageCreditSettings: es,
          canPurchaseBusinessCredits: en,
          canViewCreditSettings: ei,
          isUsageSettingsVisible: ea,
          isUsageSettingsAccessLoading: er,
          plan: el,
        } = (0, u.AH)(Q?.credits?.balance != null, "usage"),
        eo = X && ea
      Y[3] !== eo ? ((s = { enabled: eo }), (Y[3] = eo), (Y[4] = s)) : (s = Y[4])
      let { refetch: eu } = (0, f.Ul)(A.qR, s),
        ec = (0, j.I)(),
        ed = (0, S.AS)(),
        eg = (0, S.Zj)("1405076622"),
        em = (0, S.Zj)("1748121887"),
        ep = (0, w.k)(ec),
        [ef, ex] = (0, r.useState)(null),
        [ey, eb] = (0, r.useState)(null)
      Y[5] !== el ? ((a = (0, h.uz)(el)), (Y[5] = el), (Y[6] = a)) : (a = Y[6])
      let e_ = a,
        ev = el === P.x.ENT26
      Y[7] !== eg || Y[8] !== el ? ((o = (0, E.U9)(el, eg)), (Y[7] = eg), (Y[8] = el), (Y[9] = o)) : (o = Y[9])
      let ew = o,
        eA = (em || !1) && ew,
        ej = e_ && ea && !er
      Y[10] !== es ? ((c = { enabled: es }), (Y[10] = es), (Y[11] = c)) : (c = Y[11])
      let { data: eC } = (0, _.sD)(c)
      Y[12] !== eC?.one_time.tiers || Y[13] !== eC?.one_time.tiers.reduce
        ? ((g = eC?.one_time.tiers.reduce(t0, 0) ?? 0),
          (Y[12] = eC?.one_time.tiers),
          (Y[13] = eC?.one_time.tiers.reduce),
          (Y[14] = g))
        : (g = Y[14])
      let ek = g
      Y[15] !== eC?.auto_reload?.tiers || Y[16] !== eC?.auto_reload?.tiers.reduce
        ? ((m = eC?.auto_reload?.tiers.reduce(tJ, 0) ?? 0),
          (Y[15] = eC?.auto_reload?.tiers),
          (Y[16] = eC?.auto_reload?.tiers.reduce),
          (Y[17] = m))
        : (m = Y[17])
      let eM = m
      Y[18] !== es ? ((p = { enabled: es, refetchOnWindowFocus: "always" }), (Y[18] = es), (Y[19] = p)) : (p = Y[19])
      let { data: eS, isPending: eE } = (0, _.Ko)(p),
        eT = (eS?.payment_methods.length ?? 0) > 0
      Y[20] !== es || Y[21] !== eT || Y[22] !== eS || Y[23] !== ed
        ? ((b = !1), (Y[20] = es), (Y[21] = eT), (Y[22] = eS), (Y[23] = ed), (Y[24] = b))
        : (b = Y[24])
      let eP = b,
        eN = es && !0
      Y[25] !== eN
        ? ((C = { enabled: eN, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (Y[25] = eN), (Y[26] = C))
        : (C = Y[26])
      let { data: eL, isPending: eR, isError: eO, refetch: eU } = (0, _.q7)(C)
      Y[27] !== eL || Y[28] !== eP || Y[29] !== es || Y[30] !== eT
        ? ((M = es && (eT || eP || (eL?.isEnabled === !0 && (0, v.Zu)(eL.autoReloadCreditDiscountPolicy)))),
          (Y[27] = eL),
          (Y[28] = eP),
          (Y[29] = es),
          (Y[30] = eT),
          (Y[31] = M))
        : (M = Y[31])
      let eD = M
      Y[32] !== ej || Y[33] !== X
        ? ((I = { isPolling: X, enabled: ej }), (Y[32] = ej), (Y[33] = X), (Y[34] = I))
        : (I = Y[34])
      let { data: eq, isLoading: eF, isError: eH, refetch: eG } = (0, _.Xb)(I)
      Y[35] !== eq
        ? ((L = null != (0, T.Li)(eq) && eq?.effective_monthly_limit?.enforcement_mode === "HARD_CAP"),
          (Y[35] = eq),
          (Y[36] = L))
        : (L = Y[36])
      let ez = L,
        eB = ej && ez
      Y[37] !== eB ? ((R = { enabled: eB }), (Y[37] = eB), (Y[38] = R)) : (R = Y[38])
      let { data: eW, isLoading: e$, isError: eV, refetch: eY } = (0, _.sl)(R),
        eX = eW?.kind === "openai_native",
        eZ = ej && ez && eX
      Y[39] !== eZ ? ((O = { enabled: eZ }), (Y[39] = eZ), (Y[40] = O)) : (O = Y[40])
      let { data: eK, isLoading: eQ, isError: eJ, refetch: e0 } = (0, _.w8)(O),
        e1 = (0, _.wU)()
      Y[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = { analyticsSurface: "wham_usage_dashboard" }), (Y[41] = U))
        : (U = Y[41])
      let { enableAutoTopUpMutation: e2, updateAutoTopUpMutation: e3, disableAutoTopUpMutation: e5 } = (0, _.MU)(U)
      if (!ea && !er) return null
      let e4 = e_ ? (eF && null == eq) || (eB && e$ && null == eW) || (ez && eX && eQ && null == eK) : J && null == Q,
        e6 = e_ ? (eH && null == eq) || (eB && eV && null == eW) || (ez && eX && eJ && null == eK) : ee && null == Q
      Y[42] !== ez || Y[43] !== e_ || Y[44] !== eu || Y[45] !== e0 || Y[46] !== eG || Y[47] !== eY || Y[48] !== eX
        ? ((D = () => {
            e_ ? (eG(), ez && (eY(), eX && e0())) : eu()
          }),
          (Y[42] = ez),
          (Y[43] = e_),
          (Y[44] = eu),
          (Y[45] = e0),
          (Y[46] = eG),
          (Y[47] = eY),
          (Y[48] = eX),
          (Y[49] = D))
        : (D = Y[49])
      let e9 = D
      Y[50] !== Q
        ? ((F = () => {
            ex((e) => e ?? Q ?? null)
          }),
          (Y[50] = Q),
          (Y[51] = F))
        : (F = Y[51])
      let e7 = F
      Y[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = () => {
            ex(null)
          }),
          (Y[52] = H))
        : (H = Y[52])
      let te = H
      Y[53] !== Q || Y[54] !== ef || Y[55] !== ep
        ? ((G = () => {
            let e = { animationComplete: !1, rateLimitStatus: ef ?? Q ?? null, refreshComplete: !1 }
            ;(ex(null),
              eb(e),
              ep.start(() => {
                eb((t) => (t === e ? { ...t, animationComplete: !0 } : t))
              }))
          }),
          (Y[53] = Q),
          (Y[54] = ef),
          (Y[55] = ep),
          (Y[56] = G))
        : (G = Y[56])
      let tt = G
      Y[57] !== Q || Y[58] !== ey
        ? ((z =
            null != ey &&
            (function (e, t) {
              return (
                t4(e?.rate_limit?.primary_window, t?.rate_limit?.primary_window) ||
                t4(e?.rate_limit?.secondary_window, t?.rate_limit?.secondary_window) ||
                (!t5(e) && !t5(t))
              )
            })(ey.rateLimitStatus, Q ?? null)),
          (Y[57] = Q),
          (Y[58] = ey),
          (Y[59] = z))
        : (z = Y[59])
      let ts = z
      null != ey && ey.animationComplete && !ey.refreshComplete && ts && eb({ ...ey, refreshComplete: !0 })
      let tn = null != ey && !ey.refreshComplete && (!ey.animationComplete || !ts)
      if (er || e6 || e4) {
        let e,
          t,
          s = null
        if (!er && e6) {
          let t, i, a
          ;(Y[60] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(x.A, {
                id: "settings.usage.load.error",
                defaultMessage: "Could not load usage settings.",
                description: "Error label shown when usage settings cannot be fetched",
              })),
              (Y[60] = t))
            : (t = Y[60]),
            (e = t),
            Y[61] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(x.A, {
                  id: "settings.usage.load.retry",
                  defaultMessage: "Retry",
                  description: "Retry button for usage settings fetch errors",
                })),
                (Y[61] = i))
              : (i = Y[61]),
            Y[62] !== e9
              ? ((a = (0, n.jsx)(y.$, { color: "secondary", size: "toolbar", onClick: e9, children: i })),
                (Y[62] = e9),
                (Y[63] = a))
              : (a = Y[63]),
            (s = a))
        } else {
          let t
          ;(Y[64] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(x.A, {
                id: "settings.usage.load.loading",
                defaultMessage: "Loading usage settings…",
                description: "Loading label while access to Usage settings and their data are being resolved",
              })),
              (Y[64] = t))
            : (t = Y[64]),
            (e = t))
        }
        return (
          Y[65] !== s || Y[66] !== e
            ? ((t = (0, n.jsx)(t3, { rowLabel: e, rowControl: s })), (Y[65] = s), (Y[66] = e), (Y[67] = t))
            : (t = Y[67]),
          t
        )
      }
      let ti = Q?.show_unified_usage_in_settings === !0,
        ta = null
      if ((0, h.Hw)(el)) {
        let e,
          t = Q ?? null
        ;(Y[68] !== en || Y[69] !== X || Y[70] !== t
          ? ((e = (0, n.jsx)(tW, { canPurchaseCredits: en, isPolling: X, rateLimitStatus: t })),
            (Y[68] = en),
            (Y[69] = X),
            (Y[70] = t),
            (Y[71] = e))
          : (e = Y[71]),
          (ta = e))
      } else if (eD && null != eL) {
        let e,
          t = Q?.credits ?? null
        ;(Y[72] !== eL ||
        Y[73] !== e5 ||
        Y[74] !== e2 ||
        Y[75] !== eT ||
        Y[76] !== eM ||
        Y[77] !== ek ||
        Y[78] !== ti ||
        Y[79] !== t ||
        Y[80] !== e3
          ? ((e = (0, n.jsx)(N.be, {
              showUnifiedUsage: ti,
              serverState: eL,
              hasSavedPaymentMethod: eT,
              maximumCreditPurchaseDiscountPercent: ek,
              maximumAutoReloadDiscountPercent: eM,
              creditDetails: t,
              enableAutoTopUpMutation: e2,
              updateAutoTopUpMutation: e3,
              disableAutoTopUpMutation: e5,
            })),
            (Y[72] = eL),
            (Y[73] = e5),
            (Y[74] = e2),
            (Y[75] = eT),
            (Y[76] = eM),
            (Y[77] = ek),
            (Y[78] = ti),
            (Y[79] = t),
            (Y[80] = e3),
            (Y[81] = e))
          : (e = Y[81]),
          (ta = e))
      } else if (ei) {
        let e,
          t,
          s,
          i = es && (eE || (eN && eR))
        Y[82] !== es || Y[83] !== e5 || Y[84] !== et
          ? ((e =
              es || null == et
                ? void 0
                : { isEnabled: et.isEnabled, isPending: e5.isPending, onDisable: e5.mutateAsync }),
            (Y[82] = es),
            (Y[83] = e5),
            (Y[84] = et),
            (Y[85] = e))
          : (e = Y[85])
        let a = i ? 0 : ek,
          r = Q?.credits ?? null,
          l = null == eS ? void 0 : eT
        ;(Y[86] !== eD || Y[87] !== eO || Y[88] !== eU
          ? ((t = eD
              ? (0, n.jsx)(k.ic, {
                  label: eO
                    ? (0, n.jsx)(x.A, {
                        id: "settings.usage.autoTopUp.load.error",
                        defaultMessage: "Could not load automatic reload settings",
                        description:
                          "Error shown in the Credits section when automatic credit reload settings fail to load; usage limits and the credit balance remain available",
                      })
                    : (0, n.jsx)(d.j, {
                        children: (0, n.jsx)(x.A, {
                          id: "settings.usage.autoTopUp.load.loading",
                          defaultMessage: "Loading automatic reload settings…",
                          description:
                            "Loading status for automatic credit reload controls in the Credits section; usage limits and the credit balance remain available",
                        }),
                      }),
                  control: eO
                    ? (0, n.jsx)(y.$, {
                        color: "secondary",
                        size: "toolbar",
                        onClick: () => void eU(),
                        children: (0, n.jsx)(x.A, {
                          id: "settings.usage.load.retry",
                          defaultMessage: "Retry",
                          description: "Retry button for usage settings fetch errors",
                        }),
                      })
                    : void 0,
                })
              : null),
            (Y[86] = eD),
            (Y[87] = eO),
            (Y[88] = eU),
            (Y[89] = t))
          : (t = Y[89]),
          Y[90] !== es || Y[91] !== ti || Y[92] !== e || Y[93] !== a || Y[94] !== r || Y[95] !== l || Y[96] !== t
            ? ((s = (0, n.jsx)(N.CK, {
                showUnifiedUsage: ti,
                autoReload: e,
                canPurchaseCredits: es,
                maximumCreditPurchaseDiscountPercent: a,
                creditDetails: r,
                hasSavedPaymentMethod: l,
                children: t,
              })),
              (Y[90] = es),
              (Y[91] = ti),
              (Y[92] = e),
              (Y[93] = a),
              (Y[94] = r),
              (Y[95] = l),
              (Y[96] = t),
              (Y[97] = s))
            : (s = Y[97]),
          (ta = s))
      }
      Y[98] !== ta ||
      Y[99] !== ez ||
      Y[100] !== K ||
      Y[101] !== e_ ||
      Y[102] !== X ||
      Y[103] !== tn ||
      Y[104] !== ev ||
      Y[105] !== eQ ||
      Y[106] !== el ||
      Y[107] !== Q ||
      Y[108] !== ef ||
      Y[109] !== ec ||
      Y[110] !== ep ||
      Y[111] !== ey?.rateLimitStatus ||
      Y[112] !== eA ||
      Y[113] !== ti ||
      Y[114] !== e1 ||
      Y[115] !== eK ||
      Y[116] !== eq ||
      Y[117] !== eW
        ? ((B = e_
            ? (0, n.jsx)(e8, {
                isPolling: X,
                isUsdWorkspace: ev,
                rateLimitStatus: Q ?? null,
                showEnterpriseMonthlyUsageLimit: !0,
                showUsageBillingLayout: eA,
                canRequestEnterpriseMonthlyUsageLimit: ez,
                workspaceRequestPolicy: eW,
                workspaceMonthlyUsage: eq ?? null,
                workspaceAdminRequests: eK ?? null,
                isWorkspaceAdminRequestsLoading: eQ,
                isSavingWorkspaceAdminRequest: e1.isPending,
                saveWorkspaceAdminRequest: e1.mutateAsync,
              })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  ti ? (0, n.jsx)(t2, {}) : null,
                  K ? null : (0, n.jsx)(q, { plan: el }),
                  (0, n.jsx)(e8, {
                    isPolling: X,
                    header: (0, n.jsx)(tZ, { plan: el, showUnifiedUsage: ti }),
                    fullWidth: !0,
                    showMonthlyUsageLimit: !(0, h.Hw)(el),
                    isResetFillActive: tn,
                    rateLimitStatus: Q ?? null,
                    resetFillAnimation: ep,
                    resetFillRateLimitStatus: ey?.rateLimitStatus,
                    showResetPurchase: null == ef && !tn,
                  }),
                  (0, n.jsx)(tj, { rateLimitStatus: Q ?? null, reduceMotion: ec }),
                  ta,
                ],
              })),
          (Y[98] = ta),
          (Y[99] = ez),
          (Y[100] = K),
          (Y[101] = e_),
          (Y[102] = X),
          (Y[103] = tn),
          (Y[104] = ev),
          (Y[105] = eQ),
          (Y[106] = el),
          (Y[107] = Q),
          (Y[108] = ef),
          (Y[109] = ec),
          (Y[110] = ep),
          (Y[111] = ey?.rateLimitStatus),
          (Y[112] = eA),
          (Y[113] = ti),
          (Y[114] = e1),
          (Y[115] = eK),
          (Y[116] = eq),
          (Y[117] = eW),
          (Y[118] = B))
        : (B = Y[118])
      let tr = eD || ei
      return (
        Y[119] !== X || Y[120] !== tr
          ? ((W = (0, n.jsx)(eh, { isPolling: X, showCreditPreference: tr })),
            (Y[119] = X),
            (Y[120] = tr),
            (Y[121] = W))
          : (W = Y[121]),
        Y[122] !== e7 || Y[123] !== tt || Y[124] !== e_ || Y[125] !== tn
          ? (($ = e_
              ? null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(eI, {
                      isResetFillActive: tn,
                      onResetAttemptCancel: te,
                      onResetAttemptStart: e7,
                      onResetComplete: tt,
                    }),
                    null,
                  ],
                })),
            (Y[122] = e7),
            (Y[123] = tt),
            (Y[124] = e_),
            (Y[125] = tn),
            (Y[126] = $))
          : ($ = Y[126]),
        Y[127] !== B || Y[128] !== W || Y[129] !== $
          ? ((V = (0, n.jsxs)(n.Fragment, { children: [B, W, $] })),
            (Y[127] = B),
            (Y[128] = W),
            (Y[129] = $),
            (Y[130] = V))
          : (V = Y[130]),
        V
      )
    }
    function tJ(e, t) {
      return Math.max(e, t.percent_off)
    }
    function t0(e, t) {
      return Math.max(e, t.percent_off)
    }
    function t1(e) {
      let { slug: t } = e
      return "billing" === t
    }
    function t2() {
      let e,
        t,
        s,
        a,
        r = (0, i.c)(4)
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(b.I, { asset: p })),
            (t = (0, n.jsx)(x.A, {
              id: "settings.usage.unifiedMeter.notice.title",
              defaultMessage: "One usage meter across all of ChatGPT",
              description:
                "Heading of the Usage settings notice announcing that chat and agentic activity now share one plan allowance.",
            })),
            (s = (0, n.jsx)(x.A, {
              id: "settings.usage.unifiedMeter.notice.description",
              defaultMessage: "Agentic usage and chat limits are now unified in a single plan allowance.",
              description:
                "Body of the Usage settings notice. Agentic usage means activity performed by agents such as Codex. It now counts toward the same plan allowance as chat.",
            })),
            (r[0] = e),
            (r[1] = t),
            (r[2] = s))
          : ((e = r[0]), (t = r[1]), (s = r[2])),
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(M.t, {
              children: (0, n.jsx)(k.ic, {
                icon: e,
                label: t,
                description: s,
                control: (0, n.jsx)(y.z, {
                  href: m.yC,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  color: "secondary",
                  children: (0, n.jsx)(x.A, {
                    id: "settings.usage.unifiedMeter.notice.learnMore",
                    defaultMessage: "Learn more",
                    description:
                      "Button in the unified usage notice in Settings. Opens the Help Center article about shared plan limits.",
                  }),
                }),
              }),
            })),
            (r[3] = a))
          : (a = r[3]),
        a
      )
    }
    function t3(e) {
      let t,
        s = (0, i.c)(3),
        { rowLabel: a, rowControl: r } = e
      return (
        s[0] !== r || s[1] !== a
          ? ((t =
              null == r
                ? (0, n.jsx)(d.j, { children: a })
                : (0, n.jsx)(C.X, {
                    children: (0, n.jsx)(C.X.Content, {
                      children: (0, n.jsx)(M.t, {
                        children: (0, n.jsx)(k.ic, { className: "gap-6", label: a, control: r }),
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
    function t5(e) {
      return e?.rate_limit?.primary_window != null || e?.rate_limit?.secondary_window != null
    }
    function t4(e, t) {
      return null == e || null == t
        ? null != e || null != t
        : e.used_percent !== t.used_percent ||
            e.reset_at !== t.reset_at ||
            e.limit_window_seconds !== t.limit_window_seconds
    }
    var t6 = s("RQya"),
      t9 = s("EShr"),
      t8 = s("jxU8")
    function t7(e) {
      let t,
        s,
        a,
        r,
        o,
        u,
        c = (0, i.c)(18)
      c[0] !== e ? (({ section: s, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = s)) : ((t = c[1]), (s = c[2]))
      let d = void 0 === s ? "usage" : s,
        h = (0, l.KC)()
      c[3] !== h?.visibleSettingsSections || c[4] !== h?.visibleSettingsSections.filter
        ? ((a = h?.visibleSettingsSections.filter(st).map(se)),
          (c[3] = h?.visibleSettingsSections),
          (c[4] = h?.visibleSettingsSections.filter),
          (c[5] = a))
        : (a = c[5])
      let g = a,
        m = "analytics" === d,
        p = h?.showUsageOnlyLabel
      c[6] !== p
        ? ((r = (0, n.jsx)(Q.gl, { slug: "usage", showUsageOnlyLabel: p, showChatGptDataControlsLabel: !1 })),
          (c[6] = p),
          (c[7] = r))
        : (r = c[7])
      let f = null != g && g.length > 1 ? "default" : t.density
      return (
        c[8] !== d || c[9] !== g
          ? ((o = null != g && g.length > 1 ? (0, n.jsx)(ss, { tabs: g, section: d }) : void 0),
            (c[8] = d),
            (c[9] = g),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== t || c[12] !== d || c[13] !== m || c[14] !== r || c[15] !== f || c[16] !== o
          ? ((u = (0, n.jsx)(t8.P, {
              ...t,
              containTouchOverscroll: m,
              scrollResetKey: d,
              title: r,
              subtitle: void 0,
              density: f,
              subtitleClassName: "whitespace-normal",
              stickyControls: o,
            })),
            (c[11] = t),
            (c[12] = d),
            (c[13] = m),
            (c[14] = r),
            (c[15] = f),
            (c[16] = o),
            (c[17] = u))
          : (u = c[17]),
        u
      )
    }
    function se(e) {
      let { slug: t } = e
      return {
        id: t,
        label:
          "usage" === t
            ? (0, n.jsx)(x.A, {
                id: "settings.usage.overviewTab",
                defaultMessage: "Overview",
                description: "Tab for current usage limits and billing controls",
              })
            : (0, n.jsx)(Q.s, { slug: t }),
      }
    }
    function st(e) {
      let { slug: t } = e
      return (0, g.yk)(t)
    }
    function ss(e) {
      let t,
        s,
        a,
        o,
        u,
        c = (0, i.c)(14),
        { tabs: d, section: h } = e,
        { onSelectSection: g, restoreUsageTabFocus: m } = (0, l.KC)(),
        p = (0, r.useRef)(null)
      ;(c[0] !== m
        ? ((t = () => {
            let e = requestAnimationFrame(() => m(p.current))
            return () => cancelAnimationFrame(e)
          }),
          (c[0] = m),
          (c[1] = t))
        : (t = c[1]),
        c[2] !== m || c[3] !== h ? ((s = [m, h]), (c[2] = m), (c[3] = h), (c[4] = s)) : (s = c[4]),
        (0, r.useLayoutEffect)(t, s))
      let f = (0, I.A)()
      return (
        c[5] !== g
          ? ((a = (e) => {
              g(e, void 0, !0)
            }),
            (c[5] = g),
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
              children: (0, n.jsx)(t9.T, { options: d, selectedId: h, size: "toolbar", onSelect: a, ariaLabel: o }),
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
    var sn = s("sQDv")
    let si = {
      usage: ep.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_USAGE,
      analytics: ep.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_ANALYTICS,
      "consumer-view": ep.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_CONSUMER_VIEW,
      "usage-code-review": ep.CodexAppSettingsTab.CODEX_APP_SETTINGS_TAB_CODE_REVIEW,
    }
    function sa(e) {
      let t,
        s = (0, i.c)(3),
        { section: a } = e,
        r = null == a ? void 0 : si[a],
        l = null != a
      return (
        s[0] !== r || s[1] !== l
          ? ((t = (0, n.jsx)(sn.V, { routeTemplate: "/settings/usage", settingsTab: r, enabled: l })),
            (s[0] = r),
            (s[1] = l),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    let sr = {
      usage: function (e) {
        let t,
          s = (0, i.c)(2),
          { isPolling: a } = e,
          r = void 0 === a || a
        return (
          s[0] !== r
            ? ((t = (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(tQ, { isPolling: r })] })),
              (s[0] = r),
              (s[1] = t))
            : (t = s[1]),
          t
        )
      },
      analytics: (0, c.e)(
        async () =>
          (await Promise.all([s.e(817089), s.e(333192), s.e(816455)]).then(s.bind(s, "Qpbb"))).UsageAnalyticsSettings,
      ),
      "consumer-view": (0, c.e)(
        async () =>
          (await Promise.all([s.e(817089), s.e(333192), s.e(513149)]).then(s.bind(s, "vbFU"))).ConsumerViewSettings,
      ),
      "usage-code-review": (0, c.e)(
        async () => (await Promise.all([s.e(817089), s.e(445660)]).then(s.bind(s, "JKAM"))).UsageCodeReviewSettings,
      ),
    }
    function sl(e) {
      let t = (0, i.c)(3),
        { visibleSettingsSections: s } = (0, l.KC)(),
        [c] = (0, l.ok)(),
        m = (0, l.zy)(),
        p = (0, g.yx)(c.get("tab")),
        f = s.map(su).filter(g.yk),
        { plan: x } = (0, u.AH)(),
        y = "usage" !== p || 1 !== f.length || null == x || (0, h.uz)(x) ? "default" : "compact",
        b = (0, g.Qm)(p, m.search)
      if (`${m.pathname}${m.search}` !== b) {
        let e,
          s = `${b}${m.hash}`
        return (
          t[0] !== m.state || t[1] !== s
            ? ((e = (0, n.jsx)(l.C5, { to: s, state: m.state, replace: !0 })), (t[0] = m.state), (t[1] = s), (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      return (0, n.jsxs)(t7, {
        section: p,
        density: y,
        children: [
          (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(sa, { section: f.includes(p) ? p : null }) }),
          f.map((e) => {
            let t = sr[e]
            return (0, n.jsx)(
              "div",
              {
                hidden: e !== p,
                children: (0, n.jsx)("div", {
                  className: (0, a.A)("flex flex-col", "compact" === y ? "gap-5.5" : "gap-10"),
                  children: (0, n.jsx)(o.t, {
                    name: "UsageSettingsPanel",
                    fallback: so,
                    children: (0, n.jsx)(r.Suspense, {
                      fallback: (0, n.jsx)(d.j, {}),
                      children: (0, n.jsx)(t6.Z, {
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
    function so(e) {
      return (0, n.jsx)(o.j, { error: e.error, resetError: () => e.resetError(), stayOnPage: !0 })
    }
    function su(e) {
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
        g = (0, n.c)(24),
        { days: m, enabled: p, isPolling: f, scope: x } = t,
        y = void 0 === x ? "workspace" : x,
        { accountId: b, authMethod: A, userId: j } = (0, r.As)()
      g[0] !== m ? ((s = _(m)), (g[0] = m), (g[1] = s)) : (s = g[1])
      let { endDate: C, startDate: k } = s
      ;(g[2] !== b || g[3] !== e || g[4] !== C || g[5] !== y || g[6] !== k || g[7] !== j
        ? ((a = [...u, e, b, j, y, k, C]),
          (g[2] = b),
          (g[3] = e),
          (g[4] = C),
          (g[5] = y),
          (g[6] = k),
          (g[7] = j),
          (g[8] = a))
        : (a = g[8]),
        g[9] !== e || g[10] !== C || g[11] !== y || g[12] !== k
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
            (g[9] = e),
            (g[10] = C),
            (g[11] = y),
            (g[12] = k),
            (g[13] = c))
          : (c = g[13]),
        g[14] !== C || g[15] !== y || g[16] !== k
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
            (g[14] = C),
            (g[15] = y),
            (g[16] = k),
            (g[17] = d))
          : (d = g[17]))
      let M = p && "chatgpt" === A && null != b && null != j,
        S = !!(void 0 === f || f) && l.D.ONE_MINUTE
      return (
        g[18] !== a || g[19] !== c || g[20] !== d || g[21] !== M || g[22] !== S
          ? ((h = {
              queryKey: a,
              queryFn: c,
              select: d,
              enabled: M,
              refetchInterval: S,
              staleTime: l.D.ONE_MINUTE,
              refetchOnWindowFocus: !1,
              retry: !1,
            }),
            (g[18] = a),
            (g[19] = c),
            (g[20] = d),
            (g[21] = M),
            (g[22] = S),
            (g[23] = h))
          : (h = g[23]),
        (0, i.I)(h)
      )
    }
    function h(e, t) {
      return o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-token-usage-breakdown", {
        additionalHeaders: { "x-openai-codex-usage-categories": "1" },
        parameters: { query: { start_date: e, end_date: t, group_by: "day" } },
      })
    }
    function g(e) {
      let t = m(
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
            : m(
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
        ...m(
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
    function m(e, t, s) {
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
            g = (0, n.c)(19),
            { days: m, enabled: p, isPolling: f, scope: y } = e,
            b = void 0 === y ? "workspace" : y,
            { accountId: w, authMethod: A, userId: j } = (0, r.As)()
          g[0] !== m ? ((t = _(m)), (g[0] = m), (g[1] = t)) : (t = g[1])
          let { endDate: C, startDate: k } = t
          ;(g[2] !== w || g[3] !== C || g[4] !== b || g[5] !== k || g[6] !== j
            ? ((s = "business" === b ? [...u, "business-usage", w, j, k, C] : [...u, "token-history", w, j, b, k, C]),
              (g[2] = w),
              (g[3] = C),
              (g[4] = b),
              (g[5] = k),
              (g[6] = j),
              (g[7] = s))
            : (s = g[7]),
            g[8] !== C || g[9] !== b || g[10] !== k
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
                          g = ("model" in e ? e.text_total_tokens : void 0) || r + d + h
                        ;((s.uncachedInputTokens += r),
                          (s.cachedInputTokens += d),
                          (s.outputTokens += h),
                          (s.totalTokens += g),
                          (n[t] = s),
                          (a[t] = (a[t] ?? 0) + g),
                          (l += g),
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
                (g[8] = C),
                (g[9] = b),
                (g[10] = k),
                (g[11] = a),
                (g[12] = c))
              : ((a = g[11]), (c = g[12])))
          let M = p && "consumer" !== b && "chatgpt" === A && null != w && null != j,
            S = !!(void 0 === f || f) && l.D.ONE_MINUTE
          return (
            g[13] !== s || g[14] !== a || g[15] !== c || g[16] !== M || g[17] !== S
              ? ((d = {
                  queryKey: s,
                  queryFn: a,
                  select: c,
                  enabled: M,
                  refetchInterval: S,
                  staleTime: l.D.ONE_MINUTE,
                  refetchOnWindowFocus: !1,
                  retry: !1,
                }),
                (g[13] = s),
                (g[14] = a),
                (g[15] = c),
                (g[16] = M),
                (g[17] = S),
                (g[18] = d))
              : (d = g[18]),
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
            { credits: d, enabled: h, isPolling: g } = e,
            { accountId: m, authMethod: p, userId: f } = (0, r.As)(),
            x = Math.round(1e6 * d) / 1e6
          ;(c[0] !== m || c[1] !== x || c[2] !== f
            ? ((t = [...u, "credit-estimate", m, f, x]), (c[0] = m), (c[1] = x), (c[2] = f), (c[3] = t))
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
          let y = h && x > 0 && "chatgpt" === p && null != m && null != f,
            b = !!(void 0 === g || g) && l.D.THIRTY_SECONDS
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
            g = (0, n.c)(26),
            { balanceUnit: p, breakdown: x, days: y, enabled: b, isPolling: w, scope: A } = e,
            j = void 0 === A ? "workspace" : A,
            { accountId: C, authMethod: k, userId: M } = (0, r.As)()
          g[0] !== y ? ((t = _(y)), (g[0] = y), (g[1] = t)) : (t = g[1])
          let { endDate: S, startDate: E } = t
          ;(g[2] !== C || g[3] !== p || g[4] !== x || g[5] !== S || g[6] !== j || g[7] !== E || g[8] !== M
            ? ((s =
                "business" === j
                  ? [...u, "business-usage", C, M, E, S]
                  : [
                      ...u,
                      "credit-history",
                      C,
                      M,
                      j,
                      ...("consumer" === j ? [] : [E, S, x]),
                      ...("workspace" === j && null != p ? [p] : []),
                    ]),
              (g[2] = C),
              (g[3] = p),
              (g[4] = x),
              (g[5] = S),
              (g[6] = j),
              (g[7] = E),
              (g[8] = M),
              (g[9] = s))
            : (s = g[9]),
            g[10] !== p || g[11] !== x || g[12] !== S || g[13] !== j || g[14] !== E
              ? ((a = async () => {
                  if ("consumer" === j)
                    return o.CodexRequest.safeGet("/wham/usage/credit-usage-events", {
                      additionalHeaders: { "x-openai-codex-usage-categories": "1" },
                    })
                  if ("business" === j) return h(E, S)
                  let e = await o.CodexRequest.safeGet("/wham/usage/daily-workspace-user-credit-usage", {
                    parameters: {
                      query: {
                        start_date: E,
                        end_date: S,
                        breakdown: "reasoning" === x ? "reasoning_effort" : x,
                        ...(null == p ? {} : { balance_unit: p }),
                      },
                    },
                  })
                  if ((e.unit ?? "credit") !== (p ?? "credit"))
                    throw Error("Usage history response has an unexpected balance unit")
                  return e
                }),
                (g[10] = p),
                (g[11] = x),
                (g[12] = S),
                (g[13] = j),
                (g[14] = E),
                (g[15] = a))
              : (a = g[15]),
            g[16] !== x || g[17] !== S || g[18] !== E
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
                    let r = m(
                      v(t, s).map((e) => ({ date: e, values: a.get(e) ?? {} })),
                      "credits",
                      "data_freshness_ts" in e ? (e.data_freshness_ts ?? null) : null,
                    )
                    return null == i ? r : { ...r, paidModelTotal: i }
                  })(e, E, S, x)),
                (g[16] = x),
                (g[17] = S),
                (g[18] = E),
                (g[19] = c))
              : (c = g[19]))
          let T = b && "chatgpt" === k && null != C && null != M,
            P = !!(void 0 === w || w) && l.D.ONE_MINUTE
          return (
            g[20] !== s || g[21] !== a || g[22] !== c || g[23] !== T || g[24] !== P
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
                (g[20] = s),
                (g[21] = a),
                (g[22] = c),
                (g[23] = T),
                (g[24] = P),
                (g[25] = d))
              : (d = g[25]),
            (0, i.I)(d)
          )
        },
        ZY: function (e) {
          let t,
            s,
            a,
            c,
            d = (0, n.c)(16),
            { days: h, enabled: m, isPolling: p, offsetDays: f } = e,
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
          let j = m && "chatgpt" === b && null != y && null != v,
            C = !!(void 0 === p || p) && l.D.ONE_MINUTE
          return (
            d[11] !== s || d[12] !== a || d[13] !== j || d[14] !== C
              ? ((c = {
                  queryKey: s,
                  queryFn: a,
                  select: g,
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
      g = s("OWtl"),
      m = s("qWrV")
    function p(e) {
      let t,
        s,
        n,
        a = (0, i.c)(9),
        { identity: u, section: c } = e,
        d = (0, l.gh)(g.u),
        m = (0, o.useRef)(null)
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
                m.current = null
                return
              }
              let e = JSON.stringify([u, c])
              e !== m.current &&
                ((m.current = e),
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
            g = (0, o.use)(m.Wj),
            p = g?.identity ?? null,
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
          u[7] !== g || u[8] !== c || u[9] !== v
            ? ((n = () => {
                null != g && (0, h.yy)(g.scope, a.av6, { chart: m.K2[c], outcome: v })
              }),
              (u[7] = g),
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
            y = (0, l.gh)(g.u),
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
              ? ((r = (0, n.jsxs)(m.Wj, { value: s, children: [a, x] })),
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
      g = s("eFxf"),
      m = s("OWtl"),
      p = s("hZax"),
      f = s("UR81"),
      x = s("LjYy")
    let y = "3909937021",
      b = "1014047933",
      _ = (0, i.vU)(m.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => o.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      v = (0, i.vU)(m.u, ({ accountId: e, userId: t }) => ({
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
            m,
            x,
            A,
            j,
            C,
            k,
            M,
            S,
            E = (0, n.c)(35),
            { accountId: T, userId: P, authMethod: N, isLoading: I } = (0, r.As)(),
            L = (0, i.Ul)(null),
            R = "chatgpt" === N,
            O = (0, p.AS)(),
            U = (0, p.Zj)(y),
            D = (0, p.DR)(y),
            q = (0, p.XR)(),
            { data: F, isLoading: H, hasEverErrored: G } = (0, u.YL)(),
            { data: z, isLoading: B } = (0, l.U)(),
            W =
              R &&
              F?.id === T &&
              F?.structure === "workspace" &&
              "account-owner" === F.account_user_role &&
              (0, f.Hw)(F.plan_type),
            $ = R && !q && (0, h.b0)({ accountId: T, currentAccount: F, statsigClient: O }),
            V = F?.plan_type ?? (!H || G ? z?.plan : void 0)
          E[0] !== R || E[1] !== V ? ((s = R && (0, f.Hw)(V)), (E[0] = R), (E[1] = V), (E[2] = s)) : (s = E[2])
          let Y = s,
            X = (0, p.Zj)(!!Y && b),
            Z = (0, p.DR)(Y ? b : y)
          E[3] !== V ? ((o = w(V)), (E[3] = V), (E[4] = o)) : (o = E[4])
          let K = o
          E[5] !== V ? ((m = (0, f.uz)(V)), (E[5] = V), (E[6] = m)) : (m = E[6])
          let Q = m,
            J = !!R && !!K && !q && (0, g.fV)(O, V),
            ee = F?.structure === "personal" && F.id === T
          E[7] !== T || E[8] !== F?.id || E[9] !== F?.plan_type || E[10] !== R || E[11] !== ee
            ? ((x = !1), (E[7] = T), (E[8] = F?.id), (E[9] = F?.plan_type), (E[10] = R), (E[11] = ee), (E[12] = x))
            : (x = E[12])
          let et = x
          E[13] !== et ? ((A = { enabled: et }), (E[13] = et), (E[14] = A)) : (A = E[14])
          let { data: es, isLoading: en } = (0, i._U)(_, T ?? null, A),
            ei = R && ((0, c.IH)(V) || J),
            ea = T ?? null,
            er = P ?? null
          ;(E[15] !== ea || E[16] !== er
            ? ((j = { accountId: ea, userId: er }), (E[15] = ea), (E[16] = er), (E[17] = j))
            : (j = E[17]),
            !1 !== E[18] ? ((C = { enabled: !1 }), (E[18] = !1), (E[19] = C)) : (C = E[19]))
          let { data: el, isPending: eo } = (0, i._U)(v, j, C),
            eu = R && ee && !ei
          E[20] !== eu ? ((k = { enabled: eu }), (E[20] = eu), (E[21] = k)) : (k = E[21])
          let { data: ec, isLoading: ed } = (0, d.q7)(k),
            [eh, eg] = (0, a.useState)(null),
            em = eu && ec?.isEnabled === !0,
            ep = "usage" === t && eu && (em || eh === T) ? T : null
          eh !== ep && eg(ep)
          let ef = em || null != ep,
            ex = R && Q && U,
            ey = R && !q && !("isNoop" in O),
            eb = Y && !q && X,
            e_ = R && H && !G,
            ev = R && K && q,
            ew = R && Q && (q || D)
          E[22] !== R || E[23] !== K || E[24] !== q || E[25] !== V
            ? ((M = R && (K || (0, f.Hw)(V)) && q), (E[22] = R), (E[23] = K), (E[24] = q), (E[25] = V), (E[26] = M))
            : (M = E[26])
          let eA = M,
            ej = Y && (q || Z),
            eC = (function ({
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
              let g = "chatgpt" === e,
                m = g && w(i) && a,
                p = g && ((0, c.IH)(i) || m || (n && r)),
                x = w(i),
                y = (0, f.uz)(i),
                b = p || (g && (0, f.Hw)(i) && (d || h)) || (g && ((x && t) || (n && s)))
              return {
                canManageCreditSettings: p,
                canViewCreditSettings: b,
                isUsageSettingsVisible:
                  b || (g && x) || (g && (x || (0, f.Hw)(i)) && o) || (g && (0, f.Hw)(i) && u) || (g && y && l),
              }
            })({
              authMethod: N,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: ef,
              isPersonalAccount: ee,
              plan: V,
              isFreeOrGoCreditPurchaseEnabled: J,
              hasStudentCreditAccess: !1,
              isEnterpriseUsageSettingsEnabled: ex,
              isConsumerUsageAnalyticsEnabled: ey,
              isBusinessUsageDashboardEnabled: eb,
              canPurchaseBusinessCredits: $,
              isBusinessWorkspaceOwner: W,
            }),
            ek = !0 === L || eC.isUsageSettingsVisible || (et && es?.show_usage_tab === !0),
            eM = ef ? ec : void 0,
            eS = I || (R && B) || e_ || ev || ew || eA || ej || (et && en) || (eu && ed && !ek)
          return (
            E[27] !== $ || E[28] !== W || E[29] !== ek || E[30] !== V || E[31] !== eM || E[32] !== eS || E[33] !== eC
              ? ((S = {
                  autoReloadSettings: eM,
                  ...eC,
                  canPurchaseBusinessCredits: $,
                  isBusinessWorkspaceOwner: W,
                  isUsageSettingsVisible: ek,
                  isUsageSettingsAccessLoading: eS,
                  plan: V,
                }),
                (E[27] = $),
                (E[28] = W),
                (E[29] = ek),
                (E[30] = V),
                (E[31] = eM),
                (E[32] = eS),
                (E[33] = eC),
                (E[34] = S))
              : (S = E[34]),
            S
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
      g = s("V8uZ"),
      m = s("oFmV")
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
        M,
        S,
        E,
        T,
        P,
        N,
        I,
        L,
        R,
        O,
        U,
        D,
        q,
        F,
        H,
        G,
        z,
        B,
        W,
        $,
        V,
        Y,
        X,
        Z,
        K,
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
            fullWidth: M,
            contentClassName: y,
            subtitleClassName: k,
            action: t,
            toolbarActions: P,
            stickyControls: j,
            footer: _,
            embedded: S,
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
          (en[15] = M),
          (en[16] = S),
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
          (M = en[15]),
          (S = en[16]),
          (E = en[17]),
          (T = en[18]),
          (P = en[19]))
      let ei = void 0 !== M && M,
        ea = void 0 !== S && S,
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
        eg = (0, r.useContext)(m.S),
        em = !!eg?.slateLayout && !ea
      ;(0, h.U)(o.mk)
      let ep = em && !1,
        ef = eg?.targetId ?? null,
        ex = eg?.targetText ?? null,
        ey = eg?.navigationKey ?? null
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
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${g.Wu.join(", ")})` },
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
          ? ((U = (0, n.jsxs)(n.Fragment, { children: [p, O] })), (en[32] = p), (en[33] = O), (en[34] = U))
          : (U = en[34]))
      let eb = U,
        e_ = ea ? "default" : "settings"
      "compact" === el && (e_ = "settingsCompact")
      let ev = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        ew =
          "default" === b &&
          (ea && !ei ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eA = ei ? null : ea ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(en[35] !== y || en[36] !== j || en[37] !== ev || en[38] !== ew || en[39] !== eA || en[40] !== em
        ? ((D = (0, a.A)(
            "group/settings mx-auto flex w-full flex-col",
            ev,
            ew,
            eA,
            em && ["px-panel pb-panel", null == j && "pt-panel"],
            y,
          )),
          (en[35] = y),
          (en[36] = j),
          (en[37] = ev),
          (en[38] = ew),
          (en[39] = eA),
          (en[40] = em),
          (en[41] = D))
        : (D = en[41]),
        en[42] !== t ||
        en[43] !== s ||
        en[44] !== el ||
        en[45] !== ea ||
        en[46] !== e_ ||
        en[47] !== C ||
        en[48] !== k ||
        en[49] !== T ||
        en[50] !== em
          ? ((q =
              null == T || em
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
            (en[50] = em),
            (en[51] = q))
          : (q = en[51]),
        en[52] !== j
          ? ((F = null == j ? null : (0, n.jsx)(c.J1, { className: "top-0 pt-panel pb-2", children: j })),
            (en[52] = j),
            (en[53] = F))
          : (F = en[53]))
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
        en[60] !== el || en[61] !== D || en[62] !== q || en[63] !== F || en[64] !== G
          ? ((z = (0, n.jsxs)("div", { ref: eo, className: D, "data-density": el, children: [q, F, G] })),
            (en[60] = el),
            (en[61] = D),
            (en[62] = q),
            (en[63] = F),
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
        ? ((B = (0, a.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            x,
          )),
          (en[78] = x),
          (en[79] = B))
        : (B = en[79]),
        en[80] !== T || en[81] !== ep
          ? ((W = ep
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
            (en[82] = W))
          : (W = en[82]),
        en[83] !== p || en[84] !== eb || en[85] !== P || en[86] !== em
          ? (($ =
              em && null == p && null == P
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
            (en[86] = em),
            (en[87] = $))
          : ($ = en[87]))
      let eM = ec || void 0,
        eS = ep ? ed : void 0,
        eE = ep || void 0
      en[88] !== ep
        ? ((V = ep ? (e) => eh(e.currentTarget.scrollTop > 0) : void 0), (en[88] = ep), (en[89] = V))
        : (V = en[89])
      let eT = !em && "p-panel"
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
        en[100] !== em
          ? ((X =
              null == T || !em || ep
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
            (en[100] = em),
            (en[101] = X))
          : (X = en[101]),
        en[102] !== ek ||
        en[103] !== eM ||
        en[104] !== eS ||
        en[105] !== eE ||
        en[106] !== V ||
        en[107] !== Y ||
        en[108] !== X
          ? ((Z = (0, n.jsxs)("div", {
              ref: eu,
              "data-contain-touch-overscroll": eM,
              "data-app-shell-page-scrolled": eS,
              "data-settings-mobile-header": eE,
              onScroll: V,
              className: Y,
              children: [X, ek],
            })),
            (en[102] = ek),
            (en[103] = eM),
            (en[104] = eS),
            (en[105] = eE),
            (en[106] = V),
            (en[107] = Y),
            (en[108] = X),
            (en[109] = Z))
          : (Z = en[109]),
        en[110] !== _
          ? ((K =
              null != _ &&
              (0, n.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: _,
              })),
            (en[110] = _),
            (en[111] = K))
          : (K = en[111]),
        en[112] !== v ||
        en[113] !== w ||
        en[114] !== B ||
        en[115] !== W ||
        en[116] !== $ ||
        en[117] !== Z ||
        en[118] !== K
          ? ((Q = (0, n.jsxs)("div", { ref: v, className: B, ...w, children: [W, $, Z, K] })),
            (en[112] = v),
            (en[113] = w),
            (en[114] = B),
            (en[115] = W),
            (en[116] = $),
            (en[117] = Z),
            (en[118] = K),
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
          ? ((s = (0, n.jsx)(m.S.Provider, { value: t, children: r })), (a[5] = r), (a[6] = t), (a[7] = s))
          : (s = a[7]),
        s
      )
    }
  },
  oFmV(e, t, s) {
    let n = (0, s("zd8w").createContext)(null)
    s.d(t, {}, { S: n })
  },
  SJoA(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("jXFy"),
      r = s("fKVQ"),
      l = s("zMV2"),
      o = s("FSc3"),
      u = s("JCLg"),
      c = s("on57"),
      d = s("zd8w"),
      h = s("HOLv"),
      g = s("bVeK")
    let m = new Set([
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
    s.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            s,
            r = (0, i.c)(10),
            { app: l, borderless: o } = e,
            u = void 0 !== o && o
          switch (l.type) {
            case "apple": {
              let e
              ;(r[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(g.PPn, {})), (r[0] = e))
                : (e = r[0]),
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
              ;(r[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(g.HUG, {})), (r[2] = e))
                : (e = r[2]),
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
              ? ((s = (0, n.jsx)(p, { borderless: u, children: t })), (r[7] = u), (r[8] = t), (r[9] = s))
              : (s = r[9]),
            s
          )
        },
        y: function (e) {
          let t,
            s,
            a,
            g,
            f = (0, i.c)(23),
            { app: x, size: y, borderless: b } = e,
            _ = void 0 === y ? "list" : y,
            v = void 0 !== b && b,
            w = "codex_generated_site" === x.client_app_type,
            A = "ads" === x.client_app_type
          f[0] !== x.logo_uri
            ? ((t = (function (e) {
                if (null == e || "" === e.trim()) return null
                try {
                  let t = new URL(e.trim())
                  return "https:" === t.protocol && m.has(t.hostname) ? t.href : null
                } catch {
                  return null
                }
              })(x.logo_uri)),
              (f[0] = x.logo_uri),
              (f[1] = t))
            : (t = f[1])
          let j = t,
            [C, k] = (0, d.useState)(null),
            [M, S] = (0, d.useState)(null),
            E = null != j && M === j,
            T = null != j && C === j && !E
          if (w) {
            let e,
              t = "detail" === _ ? u.g : o.t
            ;(f[2] !== t
              ? ((e = (0, n.jsx)(h.I, { className: "shrink-0", asset: t, focusable: "false" })), (f[2] = t), (f[3] = e))
              : (e = f[3]),
              (s = e))
          } else if (A) {
            let e,
              t = "detail" === _ ? l.o : r.T
            ;(f[4] !== t
              ? ((e = (0, n.jsx)(h.I, { className: "shrink-0", asset: t, focusable: "false" })), (f[4] = t), (f[5] = e))
              : (e = f[5]),
              (s = e))
          } else {
            let e,
              t,
              i,
              a = "detail" === _ ? "text-xl" : "text-sm"
            ;(f[6] !== a ? ((e = (0, c.A)("font-medium text-secondary", a)), (f[6] = a), (f[7] = e)) : (e = f[7]),
              f[8] !== x.name
                ? ((t = Array.from(x.name.trim())[0]?.toUpperCase()), (f[8] = x.name), (f[9] = t))
                : (t = f[9]),
              f[10] !== e || f[11] !== t
                ? ((i = (0, n.jsx)("span", { className: e, children: t })), (f[10] = e), (f[11] = t), (f[12] = i))
                : (i = f[12]),
              (s = i))
          }
          let P = !T && s
          return (
            f[13] !== E || f[14] !== T || f[15] !== j || f[16] !== _
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
                            ;(k(j), S(null))
                          },
                          onError: () => S(j),
                        },
                        j,
                      )),
                (f[13] = E),
                (f[14] = T),
                (f[15] = j),
                (f[16] = _),
                (f[17] = a))
              : (a = f[17]),
            f[18] !== v || f[19] !== _ || f[20] !== P || f[21] !== a
              ? ((g = (0, n.jsxs)(p, { size: _, borderless: v, children: [P, a] })),
                (f[18] = v),
                (f[19] = _),
                (f[20] = P),
                (f[21] = a),
                (f[22] = g))
              : (g = f[22]),
            g
          )
        },
      },
    )
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
      g = (0, a.vU)(
        r.u,
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
            var s, i, a
            let r
            return null == e
              ? null
              : new Map(
                  (null == n
                    ? e.threads
                    : ((s = e.threads),
                      (i = n),
                      (a = t),
                      (r = new Map(s.map((e) => [e.thread_id, e]))),
                      i.flatMap((e) => {
                        let t = e[0]
                        if (null == t) return []
                        let s = 0,
                          n = 0,
                          i = 0,
                          l = []
                        for (let t of e) {
                          let e = r.get(t)
                          if (null == e) return []
                          if ("usd" === a) {
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
                            l.push(...(e.groups ?? [])))
                        }
                        return [
                          {
                            thread_id: t,
                            estimated_usage_credits_micros: s,
                            estimated_usage_usd_micros: i,
                            native_usage_usd_micros: n,
                            groups: l,
                          },
                        ]
                      }))
                  ).flatMap((e) => {
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
                )
          },
          retry: !1,
          refetchInterval: (e) => ((n?.length ?? s.length) === 1 || null != e.state.data) && l.D.ONE_MINUTE,
          refetchIntervalInBackground: (n?.length ?? s.length) === 1,
          refetchOnMount: n?.length === 1 ? "always" : 1 === s.length,
          staleTime: l.D.ONE_MINUTE,
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
        yy: g,
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
    function g(e) {
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
    function m(e, t) {
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
        r8: function ({
          backgroundColorToken: e = "--color-surface",
          includeReviewColors: t = !1,
          variant: s = "inline",
        } = {}) {
          let a = getComputedStyle(document.documentElement),
            l = "dark" === document.documentElement.dataset.theme ? "dark" : "light",
            h = document.createElement("div")
          ;((h.style.display = "none"), h.setAttribute("aria-hidden", "true"), document.body.appendChild(h))
          try {
            var f, x
            let y,
              b,
              _,
              v,
              w,
              A,
              j,
              C,
              k,
              M,
              S,
              E,
              T,
              P,
              N,
              I,
              L,
              R,
              O,
              U,
              D,
              q,
              F,
              H,
              G,
              z,
              B,
              W,
              $,
              V,
              Y,
              X,
              Z,
              K,
              Q,
              J,
              ee,
              et,
              es,
              en,
              ei,
              ea,
              er,
              el,
              eo,
              eu,
              ec,
              ed = c(a, h, "--text-base", "fontSize", "14px"),
              eh = c(a, h, "--codex-chat-font-size", "fontSize", ed),
              eg = c(a, h, "--text-sm", "fontSize", "14px"),
              em = c(a, h, "--text-sm--line-height", "lineHeight", "20px"),
              ep =
                ((y = "--color-surface-elevated-secondary"),
                (b = "light-dark(rgb(255 255 255), rgb(45 45 45))"),
                c(a, h, y, "backgroundColor", b)),
              ef = ((_ = "--color-text"), (v = "light-dark(rgb(26 28 31), rgb(255 255 255))"), c(a, h, _, "color", v)),
              ex =
                ((w = "--codex-theme-accent-text"),
                (A = "light-dark(rgb(51 156 255), rgb(131 195 255))"),
                c(a, h, w, "color", A)),
              ey =
                ((f =
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
                  })(ex) ?? i[l]),
                (x = l),
                (j = d(f)),
                (C = 0.96 + 0.12 * p((j.chroma - 0.06) / 0.16, 0, 1)),
                (k = o[x].map(d).map((e) => ({ ...e, chroma: e.chroma * C }))),
                (function (e, t) {
                  let s = []
                  for (; s.length < 5 && e.length > 0;) {
                    let n = 0,
                      i = -1
                    e.forEach((e, a) => {
                      let r = Math.min(m(e.hue, t), ...s.map((t) => m(e.hue, t.hue)))
                      r > i && ((i = r), (n = a))
                    })
                    let [a] = e.splice(n, 1)
                    null != a && s.push(a)
                  }
                  return s
                })([...k.filter((e) => m(e.hue, j.hue) >= 30), ...k.filter((e) => 30 > m(e.hue, j.hue))], j.hue).map(
                  g,
                )),
              eb = r[l],
              e_ = c(a, h, "--radius-lg", "borderRadius", "10px")
            return {
              ...(t && {
                "--color-background-info-solid":
                  ((M = "--color-background-info-solid"), (S = "#339cff"), c(a, h, M, "backgroundColor", S)),
                "--color-text-info": ((E = "--color-text-info"), (T = "#339cff"), c(a, h, E, "color", T)),
              }),
              "--accent":
                ((P = "--codex-theme-accent-background-subtle"),
                (N = "light-dark(rgb(229 242 255), rgb(13 39 63))"),
                c(a, h, P, "backgroundColor", N)),
              "--accent-foreground": ex,
              "--background": "live" === s ? ep : ((I = e), (L = u), c(a, h, I, "backgroundColor", L)),
              "--border":
                ((R = "--color-border"),
                (O = "light-dark(rgb(26 28 31 / 8%), rgb(255 255 255 / 8.2%))"),
                c(a, h, R, "color", O)),
              "--border-strong":
                ((U = "--color-border-strong"),
                (D = "light-dark(rgb(26 28 31 / 12%), rgb(255 255 255 / 12%))"),
                c(a, h, U, "color", D)),
              "--card": `color-mix(in oklab, ${ef} 5%, transparent)`,
              "--card-foreground": ef,
              "--corner-shape": a.getPropertyValue("--codex-corner-shape").trim() || "round",
              "--control-spacing": c(a, h, "--spacing-button-toolbar-inline", "paddingInlineStart", "12px"),
              "--cursor-interaction":
                getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
              "--destructive":
                ((q = "--color-text-warning"),
                (F = "light-dark(rgb(226 85 7), rgb(255 133 73))"),
                c(a, h, q, "color", F)),
              "--font-mono": c(
                a,
                h,
                "--font-mono",
                "fontFamily",
                'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              ),
              "--font-sans": c(a, h, "--font-sans", "fontFamily", '-apple-system, system-ui, "Segoe UI", sans-serif'),
              "--font-size-base": "live" === s ? eg : eh,
              "--font-weight-normal": "live" === s ? "400" : c(a, h, "--font-ui-weight", "fontWeight", "400"),
              ...("live" === s && {
                "--font-line-height-base": em,
                "--font-size-small": `max(11px, ${c(a, h, "--text-xs", "fontSize", "12px")})`,
                "--icon-size": "18px",
              }),
              "--foreground": ef,
              "--input":
                ((H = "--color-border-primary-outline"),
                (G = "light-dark(rgb(26 28 31 / 11.8%), color-mix(in oklab, rgb(0 0 0) 10%, transparent))"),
                c(a, h, H, "color", G)),
              "--muted": `color-mix(in srgb, ${ef} 10%, transparent)`,
              "--muted-foreground":
                ((z = "--color-codex-description"),
                (B = "light-dark(rgb(26 28 31 / 49.4%), rgb(255 255 255 / 49.8%))"),
                c(a, h, z, "color", B)),
              "--popover": ep,
              "--popover-foreground": ((W = "--color-text"), ($ = ef), c(a, h, W, "color", $)),
              "--primary": ex,
              "--primary-foreground":
                ((V = "--color-text-inverse"),
                (Y = "light-dark(rgb(255 255 255), rgb(13 13 13))"),
                c(a, h, V, "color", Y)),
              "--radius": e_,
              "--radius-2xl": c(a, h, "--radius-2xl", "borderRadius", "16px"),
              "--radius-lg": e_,
              "--radius-md": c(a, h, "--radius-md", "borderRadius", "8px"),
              "--radius-sm": c(a, h, "--radius-sm", "borderRadius", "6px"),
              "--ring":
                ((X = "--color-ring"),
                (Z = "light-dark(rgb(51 156 255), rgb(131 195 255 / 76%))"),
                c(a, h, X, "color", Z)),
              "--secondary":
                ((K = "--color-background-primary-soft-alpha"),
                (Q = "light-dark(rgb(243 243 243), rgb(48 48 48))"),
                c(a, h, K, "backgroundColor", Q)),
              "--secondary-foreground": ef,
              "--blue":
                ((J = "--color-chart-blue"),
                (ee = "light-dark(rgb(51 156 255), rgb(51 156 255))"),
                c(a, h, J, "color", ee)),
              "--orange":
                ((et = "--color-chart-orange"),
                (es = "light-dark(rgb(226 85 7), rgb(251 106 34))"),
                c(a, h, et, "color", es)),
              "--green":
                ((en = "--color-chart-green"),
                (ei = "light-dark(rgb(0 162 64), rgb(64 201 119))"),
                c(a, h, en, "color", ei)),
              "--red":
                ((ea = "--color-chart-red"),
                (er = "light-dark(rgb(224 46 42), rgb(255 103 100))"),
                c(a, h, ea, "color", er)),
              "--purple":
                ((el = "--color-chart-purple"),
                (eo = "light-dark(rgb(146 79 247), rgb(173 123 249))"),
                c(a, h, el, "color", eo)),
              "--yellow":
                ((eu = "--color-chart-yellow"),
                (ec = "light-dark(rgb(255 195 0), rgb(255 210 64))"),
                c(a, h, eu, "color", ec)),
              ...n,
              "--viz-series-1": ex,
              "--viz-series-2": ey[0] ?? eb[0],
              "--viz-series-3": ey[1] ?? eb[1],
              "--viz-series-4": ey[2] ?? eb[2],
              "--viz-series-5": ey[3] ?? eb[3],
              "--viz-series-6": ey[4] ?? eb[4],
            }
          } finally {
            h.remove()
          }
        },
        sh: a,
      },
    )
  },
  LFJ8(e, t, s) {
    let n = (0, s("iJY0").a)({
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
      body: '<path d="M6 5.51953C6.2651 5.51953 6.48047 5.7349 6.48047 6V8C6.48047 8.2651 6.2651 8.48047 6 8.48047C5.7349 8.48047 5.51953 8.2651 5.51953 8V6C5.51953 5.7349 5.7349 5.51953 6 5.51953Z" fill="currentColor"/> <path d="M6.12305 3.58789C6.40097 3.64481 6.61035 3.8908 6.61035 4.18555C6.61035 4.52244 6.33689 4.7959 6 4.7959C5.70525 4.7959 5.45926 4.58651 5.40234 4.30859L5.38965 4.18555L5.40234 4.0625C5.45926 3.78458 5.70525 3.5752 6 3.5752L6.12305 3.58789Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.01953C8.75038 1.01953 10.9805 3.24962 10.9805 6C10.9805 8.75038 8.75038 10.9805 6 10.9805C3.24962 10.9805 1.01953 8.75038 1.01953 6C1.01953 3.24962 3.24962 1.01953 6 1.01953ZM6 1.98047C3.77982 1.98047 1.98047 3.77982 1.98047 6C1.98047 8.22018 3.77982 10.0195 6 10.0195C8.22018 10.0195 10.0195 8.22018 10.0195 6C10.0195 3.77982 8.22018 1.98047 6 1.98047Z" fill="currentColor"/>',
    })
    s.d(t, {}, { q: n })
  },
  fKVQ(e, t, s) {
    let n = (0, s("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9507 2.51071C16.6106 1.89607 18.3753 3.12451 18.3755 4.8945V13.9375C18.3755 15.6723 16.6756 16.8972 15.0298 16.3486L12.1255 15.3799V15.417C12.1254 16.2155 11.8831 16.9743 11.3364 17.5371C10.7856 18.104 10.0195 18.3749 9.1665 18.375C8.31369 18.3749 7.54831 18.1039 6.99756 17.5371C6.45082 16.9743 6.20855 16.2156 6.2085 15.417V13.4101C6.13435 13.3877 6.05753 13.375 5.97998 13.375H3.75049C2.34676 13.375 1.2085 12.2367 1.2085 10.833V8.33298C1.20882 6.92952 2.34696 5.79196 3.75049 5.79196H5.95166C6.04536 5.79193 6.1382 5.77467 6.22607 5.74216L14.9507 2.51071ZM7.9585 15.417C7.95854 15.8678 8.09108 16.151 8.25244 16.3174C8.40993 16.4794 8.6866 16.6249 9.1665 16.625C9.64666 16.6249 9.92307 16.4794 10.0806 16.3174C10.2421 16.1511 10.3754 15.8681 10.3755 15.417V14.7968L7.9585 13.9912V15.417ZM16.6255 4.8945C16.6253 4.34332 16.075 3.96092 15.5581 4.15231L6.92236 7.35055V11.8017L15.5835 14.6884C16.096 14.8591 16.6255 14.4777 16.6255 13.9375V4.8945ZM3.75049 7.54196C3.31346 7.54196 2.95882 7.89602 2.9585 8.33298V10.833C2.9585 11.2702 3.31326 11.625 3.75049 11.625H5.17236V7.54196H3.75049Z" fill="currentColor"/>',
    })
    s.d(t, {}, { T: n })
  },
  zMV2(e, t, s) {
    let n = (0, s("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9731 4.15811C26.531 3.21084 29.2502 5.10338 29.2505 7.83096V22.2997C29.2505 24.973 26.6313 26.8608 24.0952 26.0155L19.2505 24.4003V24.6669C19.2505 25.9151 18.8716 27.0884 18.0298 27.955C17.1822 28.8273 15.9992 29.2499 14.6665 29.2499C13.3337 29.2498 12.1508 28.8274 11.3032 27.955C10.4614 27.0884 10.0835 25.9151 10.0835 24.6669V21.3446L10.0151 21.3222C9.87096 21.2742 9.71983 21.25 9.56787 21.2499H6.00049C3.83737 21.2499 2.0835 19.496 2.0835 17.3329V13.3329C2.08377 11.17 3.83754 9.4169 6.00049 9.4169H9.52197C9.68991 9.4169 9.85667 9.38636 10.0142 9.32803L23.9731 4.15811ZM12.5835 24.6669C12.5835 25.4187 12.8057 25.9127 13.0972 26.2128C13.3829 26.5067 13.8666 26.7498 14.6665 26.7499C15.4668 26.7499 15.9511 26.5068 16.2368 26.2128C16.5283 25.9127 16.7505 25.4187 16.7505 24.6669V23.5673L12.5835 22.1776V24.6669ZM26.7505 7.83096C26.7502 6.84456 25.7664 6.16025 24.8413 6.50283L11.0835 11.5976V19.0429L24.8853 23.6444C25.8026 23.9502 26.7505 23.2667 26.7505 22.2997V7.83096ZM6.00049 11.9169C5.21826 11.9169 4.58377 12.5507 4.5835 13.3329V17.3329C4.5835 18.1153 5.21808 18.7499 6.00049 18.7499H8.5835V11.9169H6.00049Z" fill="currentColor"/>',
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
            g = null,
            m = (0, l.i)(p)
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
            for (null == d && (g = h((p = m()))), a = 0; a <= f; ++a) {
              if (!(a < f && c((o = i[a]), a, i)) === x)
                if ((x = !x)) ((r = a), g.areaStart(), g.lineStart())
                else {
                  for (g.lineEnd(), g.lineStart(), l = a - 1; l >= r; --l) g.point(y[l], b[l])
                  ;(g.lineEnd(), g.areaEnd())
                }
              x && ((y[a] = +e(o, a, i)), (b[a] = +t(o, a, i)), g.point(u ? +u(o, a, i) : y[a], s ? +s(o, a, i) : b[a]))
            }
            if (p) return ((g = null), p + "" || null)
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
              return arguments.length ? ((h = e), null != d && (g = h(d)), p) : h
            }),
            (p.context = function (e) {
              return arguments.length ? (null == e ? (d = g = null) : (g = h((d = e))), p) : d
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
              g = !1
            for (null == o && (c = u((l = d()))), a = 0; a <= h; ++a)
              (!(a < h && s((r = i[a]), a, i)) === g && ((g = !g) ? c.lineStart() : c.lineEnd()),
                g && c.point(+e(r, a, i), +t(r, a, i)))
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
            let g = s - r,
              m = i - l,
              p = o * o + u * u,
              f = Math.sqrt(p),
              x = Math.sqrt(h),
              y = a * Math.tan((n - Math.acos((p + h - (g * g + m * m)) / (2 * f * x))) / 2),
              b = y / x,
              _ = y / f
            ;(Math.abs(b - 1) > 1e-6 && this._append`L${e + b * c},${t + b * d}`,
              this._append`A${a},${a},0,0,${+(d * g > c * m)},${(this._x1 = e + _ * o)},${(this._y1 = t + _ * u)}`)
          } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`
      }
      arc(e, t, s, r, l, o) {
        if (((e *= 1), (t *= 1), (s *= 1), (o = !!o), s < 0)) throw Error(`negative radius: ${s}`)
        let u = s * Math.cos(r),
          c = s * Math.sin(r),
          d = e + u,
          h = t + c,
          g = 1 ^ o,
          m = o ? r - l : l - r
        ;(null === this._x1
          ? this._append`M${d},${h}`
          : (Math.abs(this._x1 - d) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && this._append`L${d},${h}`,
          s &&
            (m < 0 && (m = (m % i) + i),
            m > a
              ? this
                  ._append`A${s},${s},0,1,${g},${e - u},${t - c}A${s},${s},0,1,${g},${(this._x1 = d)},${(this._y1 = h)}`
              : m > 1e-6 &&
                this
                  ._append`A${s},${s},0,${+(m >= n)},${g},${(this._x1 = e + s * Math.cos(l))},${(this._y1 = t + s * Math.sin(l))}`))
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
//# sourceMappingURL=246966.7a808d798f.js.map
