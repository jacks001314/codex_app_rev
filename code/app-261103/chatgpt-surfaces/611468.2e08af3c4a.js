/*! LICENSE: 611468.2e08af3c4a.js.LICENSE.txt */
export const __rspack_esm_ids = [611468]
export const __webpack_modules__ = {
  x8Nb(e, t, n) {
    n.d(t, { yP: () => ec, LP: () => el })
    var a = n("zd8w"),
      o = n("on57"),
      i = n("hlJj"),
      r = n("Zi5c"),
      s = n("WpG7"),
      l = n("Q0yO"),
      c = n("ZiXJ"),
      d = n("ZDYK"),
      u = n("bx2r"),
      p = n("pQlJ"),
      g = n("fgDr"),
      m = n("mobK"),
      h = ["option"],
      f = g.M
    function v(e) {
      var t = e.option,
        n = (function (e, t) {
          if (null == e) return {}
          var n,
            a,
            o = (function (e, t) {
              if (null == e) return {}
              var n = {}
              for (var a in e)
                if ({}.hasOwnProperty.call(e, a)) {
                  if (-1 !== t.indexOf(a)) continue
                  n[a] = e[a]
                }
              return n
            })(e, t)
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            for (a = 0; a < i.length; a++)
              ((n = i[a]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
          }
          return o
        })(e, h)
      return a.createElement(m.y, {
        option: t,
        DefaultShape: f,
        shapeProps: n,
        activeClassName: "recharts-active-bar",
        inActiveClassName: "recharts-inactive-bar",
      })
    }
    var b = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        return (n, a) => {
          if ((0, l.Et)(e)) return e
          var o = (0, l.Et)(n) || (0, l.uy)(n)
          return o
            ? e(n, a)
            : (o ||
                (0, p.A)(
                  !1,
                  "minPointSize callback function received a value with type of ".concat(
                    typeof n,
                    ". Currently only numbers or null/undefined are supported.",
                  ),
                ),
              t)
        }
      },
      y = n("rQ8o"),
      x = n("LabL"),
      A = n("XYC9"),
      C = n("povp"),
      w = n("CkDz"),
      I = n("Bj57"),
      O = n("P9gZ"),
      k = n("QsfR"),
      _ = n("eFLx"),
      S = n("AvUj"),
      N = n("ncvm"),
      M = n("RUGI"),
      E = n("WKyW"),
      T = n("Dqte"),
      j = n("Oeqw"),
      R = n("UdvQ"),
      P = n("aHZf"),
      D = n("jTKk"),
      L = n("rYo8"),
      z = n("D3sE"),
      U = n("OuWM"),
      F = ["onMouseEnter", "onMouseLeave", "onClick"],
      B = ["value", "background", "tooltipPosition"],
      q = ["id"],
      G = ["onMouseEnter", "onClick", "onMouseLeave"]
    function V(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e
        })(e) ||
        (function (e, t) {
          var n = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]
          if (null != n) {
            var a,
              o,
              i,
              r,
              s = [],
              l = !0,
              c = !1
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return
                l = !1
              } else for (; !(l = (a = i.call(n)).done) && (s.push(a.value), s.length !== t); l = !0);
            } catch (e) {
              ;((c = !0), (o = e))
            } finally {
              try {
                if (!l && null != n.return && ((r = n.return()), Object(r) !== r)) return
              } finally {
                if (c) throw o
              }
            }
            return s
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return W(e, t)
            var n = {}.toString.call(e).slice(8, -1)
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? W(e, t)
                  : void 0
            )
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          )
        })()
      )
    }
    function W(e, t) {
      ;(null == t || t > e.length) && (t = e.length)
      for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n]
      return a
    }
    function K() {
      return (K = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(null, arguments)
    }
    function H(e, t) {
      var n = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e)
        ;(t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, a))
      }
      return n
    }
    function X(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? H(Object(n), !0).forEach(function (t) {
              var a, o, i
              ;((a = e),
                (o = t),
                (i = n[t]),
                (o = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e
                    var n = e[Symbol.toPrimitive]
                    if (void 0 !== n) {
                      var a = n.call(e, t || "default")
                      if ("object" != typeof a) return a
                      throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                  })(e, "string")
                  return "symbol" == typeof t ? t : t + ""
                })(o)) in a
                  ? Object.defineProperty(a, o, { value: i, enumerable: !0, configurable: !0, writable: !0 })
                  : (a[o] = i))
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
      }
      return e
    }
    function Q(e, t) {
      if (null == e) return {}
      var n,
        a,
        o = (function (e, t) {
          if (null == e) return {}
          var n = {}
          for (var a in e)
            if ({}.hasOwnProperty.call(e, a)) {
              if (-1 !== t.indexOf(a)) continue
              n[a] = e[a]
            }
          return n
        })(e, t)
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e)
        for (a = 0; a < i.length; a++)
          ((n = i[a]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
      }
      return o
    }
    var Y = a.memo((e) => {
      var t = e.dataKey,
        n = e.stroke,
        o = e.strokeWidth,
        i = e.fill,
        r = e.name,
        s = e.hide,
        c = e.unit,
        u = e.formatter,
        p = e.tooltipType,
        g = e.id,
        m = {
          dataDefinedOnItem: void 0,
          getPosition: l.lQ,
          settings: {
            stroke: n,
            strokeWidth: o,
            fill: i,
            dataKey: t,
            nameKey: void 0,
            name: (0, d.uM)(r, t),
            hide: s,
            type: p,
            color: i,
            unit: c,
            formatter: u,
            graphicalItemId: g,
          },
        }
      return a.createElement(x.r, { tooltipEntrySettings: m })
    })
    function Z(e) {
      var t,
        n = (0, O.G)(_.A2),
        o = e.data,
        i = e.dataKey,
        r = e.background,
        s = e.allOtherBarProps,
        l = s.onMouseEnter,
        c = s.onMouseLeave,
        d = s.onClick,
        p = Q(s, F),
        g = (0, y.Cj)(l, i, s.id),
        m = (0, y.Pg)(c),
        h = (0, y.Ub)(d, i, s.id)
      if (!r || null == o) return null
      var f = (0, T.ic)(r)
      return a.createElement(
        P.g,
        {
          zIndex:
            ((t = D.I.barBackground),
            r && "object" == typeof r && "zIndex" in r && "number" == typeof r.zIndex && (0, L.H)(r.zIndex)
              ? r.zIndex
              : t),
        },
        o.map((e, t) => {
          e.value
          var o = e.background,
            s = (e.tooltipPosition, Q(e, B))
          if (!o) return null
          var l = g(e, e.originalDataIndex),
            c = m(e, e.originalDataIndex),
            d = h(e, e.originalDataIndex),
            b = X(
              X(
                X(X(X({ option: r, isActive: String(e.originalDataIndex) === n }, s), {}, { fill: "#eee" }, o), f),
                (0, u.XC)(p, e, t),
              ),
              {},
              {
                onMouseEnter: l,
                onMouseLeave: c,
                onClick: d,
                dataKey: i,
                index: t,
                className: "recharts-bar-background-rectangle",
              },
            )
          return a.createElement(v, K({ key: "background-bar-".concat(t) }, b))
        }),
      )
    }
    function J(e) {
      var t = e.showLabels,
        n = e.children,
        o = e.rects,
        i =
          null == o
            ? void 0
            : o.map((e) => {
                var t = { x: e.x, y: e.y, width: e.width, lowerWidth: e.width, upperWidth: e.width, height: e.height }
                return X(
                  X({}, t),
                  {},
                  { value: e.value, payload: e.payload, parentViewBox: e.parentViewBox, viewBox: t, fill: e.fill },
                )
              })
      return a.createElement(s.h8, { value: t ? i : void 0 }, n)
    }
    function $(e) {
      var t,
        n = e.shape,
        o = e.activeBar,
        i = e.baseProps,
        r = e.entry,
        s = e.index,
        l = e.dataKey,
        c = (0, O.G)(_.A2),
        d = (0, O.G)(_.Xb),
        u = o && String(r.originalDataIndex) === c && (null == d || l === d),
        p = V((0, a.useState)(!1), 2),
        g = p[0],
        m = p[1],
        h = V((0, a.useState)(!1), 2),
        f = h[0],
        b = h[1]
      ;(0, a.useEffect)(() => {
        var e
        return (
          u
            ? (m(!0),
              (e = requestAnimationFrame(() => {
                b(!0)
              })))
            : b(!1),
          () => {
            cancelAnimationFrame(e)
          }
        )
      }, [u])
      var y = (0, a.useCallback)(() => {
          u || m(!1)
        }, [u]),
        x = u && f,
        A = u || g
      t = u ? (!0 === o ? n : o) : n
      var C = a.createElement(
        v,
        K({}, i, { name: String(i.name) }, r, {
          isActive: x,
          option: t,
          index: s,
          dataKey: l,
          animationElapsedTime: e.animationElapsedTime,
          isAnimating: e.isAnimating,
          isEntrance: e.isEntrance,
          onTransitionEnd: y,
        }),
      )
      return A
        ? a.createElement(P.g, { zIndex: D.I.activeBar }, a.createElement(U.RW, { index: r.originalDataIndex }, C))
        : C
    }
    function ee(e) {
      var t = e.shape,
        n = e.baseProps,
        o = e.entry,
        i = e.index,
        r = e.dataKey
      return a.createElement(
        v,
        K({}, n, { name: String(n.name) }, o, {
          isActive: !1,
          option: t,
          index: i,
          dataKey: r,
          animationElapsedTime: e.animationElapsedTime,
          isAnimating: e.isAnimating,
          isEntrance: e.isEntrance,
        }),
      )
    }
    function et(e) {
      var t,
        n = e.data,
        o = e.props,
        i = e.animationElapsedTime,
        r = e.isAnimating,
        s = e.isEntrance,
        l = null != (t = (0, T.uZ)(o)) ? t : {},
        c = l.id,
        d = Q(l, q),
        p = o.shape,
        g = o.dataKey,
        m = o.activeBar,
        h = o.onMouseEnter,
        f = o.onClick,
        v = o.onMouseLeave,
        b = Q(o, G),
        x = (0, y.Cj)(h, g, c),
        A = (0, y.Pg)(v),
        C = (0, y.Ub)(f, g, c)
      return n
        ? a.createElement(
            a.Fragment,
            null,
            n.map((e, t) =>
              a.createElement(
                U.RW,
                K(
                  {
                    index: e.originalDataIndex,
                    key: "rectangle-"
                      .concat(null == e ? void 0 : e.x, "-")
                      .concat(null == e ? void 0 : e.y, "-")
                      .concat(null == e ? void 0 : e.value, "-")
                      .concat(t),
                    className: "recharts-bar-rectangle",
                  },
                  (0, u.XC)(b, e, t),
                  {
                    onMouseEnter: x(e, e.originalDataIndex),
                    onMouseLeave: A(e, e.originalDataIndex),
                    onClick: C(e, e.originalDataIndex),
                  },
                ),
                m
                  ? a.createElement($, {
                      shape: p,
                      activeBar: m,
                      baseProps: d,
                      entry: e,
                      index: t,
                      dataKey: g,
                      animationElapsedTime: i,
                      isAnimating: r,
                      isEntrance: s,
                    })
                  : a.createElement(ee, {
                      shape: p,
                      baseProps: d,
                      entry: e,
                      index: t,
                      dataKey: g,
                      animationElapsedTime: i,
                      isAnimating: r,
                      isEntrance: s,
                    }),
              ),
            ),
          )
        : null
    }
    function en(e) {
      var t = e.props,
        n = e.previousRectanglesRef,
        o = t.data,
        r = t.isAnimationActive,
        l = t.animationBegin,
        c = t.animationDuration,
        d = t.animationEasing,
        u = t.animationInterpolateFn,
        p = t.layout,
        g = (0, j.I)(t.onAnimationStart, t.onAnimationEnd),
        m = g.isAnimating,
        h = g.handleAnimationStart,
        f = g.handleAnimationEnd
      return a.createElement(
        J,
        { showLabels: !m, rects: o },
        a.createElement(
          j.U,
          {
            animationInput: o,
            animationIdPrefix: "recharts-bar-",
            items: o,
            previousItemsRef: n,
            isAnimationActive: r,
            animationBegin: l,
            animationDuration: c,
            animationEasing: d,
            onAnimationStart: h,
            onAnimationEnd: f,
            animationInterpolateFn: u,
            animationMatchBy: t.animationMatchBy,
            layout: p,
          },
          (e, n, o) =>
            a.createElement(
              i.W,
              null,
              a.createElement(et, {
                props: t,
                data: e,
                animationElapsedTime: n,
                isAnimating: m || n < 1,
                isEntrance: o,
              }),
            ),
        ),
        a.createElement(s.qY, { label: t.label }),
        t.children,
      )
    }
    function ea(e) {
      var t = (0, a.useRef)(null)
      return a.createElement(en, { previousRectanglesRef: t, props: e })
    }
    var eo = (e, t) => {
      var n = Array.isArray(e.value) ? e.value[1] : e.value
      return { x: e.x, y: e.y, value: n, errorVal: (0, d.kr)(e, t) }
    }
    class ei extends a.PureComponent {
      render() {
        var e = this.props,
          t = e.hide,
          n = e.data,
          r = e.dataKey,
          s = e.className,
          l = e.xAxisId,
          c = e.yAxisId,
          d = e.needClip,
          u = e.background,
          p = e.id
        if (t || null == n) return null
        var g = (0, o.$)("recharts-bar", s)
        return a.createElement(
          i.W,
          { className: g, id: p },
          d && a.createElement("defs", null, a.createElement(C.Q, { clipPathId: p, xAxisId: l, yAxisId: c })),
          a.createElement(
            i.W,
            { className: "recharts-bar-rectangles", clipPath: d ? "url(#clipPath-".concat(p, ")") : void 0 },
            a.createElement(Z, { data: n, dataKey: r, background: u, allOtherBarProps: this.props }),
            a.createElement(ea, this.props),
          ),
        )
      }
    }
    var er = {
      activeBar: !1,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease",
      animationInterpolateFn: (e, t, n) =>
        null == e
          ? []
          : 1 === t
            ? e.flatMap((e) => ("removed" === e.status ? [] : [e.next]))
            : e.flatMap((e) => {
                if ("removed" === e.status)
                  return "horizontal" === n
                    ? [
                        X(
                          X({}, e.prev),
                          {},
                          {
                            height: (0, l.GW)(e.prev.height, 0, t),
                            y: (0, l.GW)(e.prev.y, e.prev.y + e.prev.height, t),
                          },
                        ),
                      ]
                    : [X(X({}, e.prev), {}, { width: (0, l.GW)(e.prev.width, 0, t) })]
                if ("matched" === e.status)
                  return [
                    X(
                      X({}, e.next),
                      {},
                      {
                        x: (0, l.GW)(e.prev.x, e.next.x, t),
                        y: (0, l.GW)(e.prev.y, e.next.y, t),
                        width: (0, l.GW)(e.prev.width, e.next.width, t),
                        height: (0, l.GW)(e.prev.height, e.next.height, t),
                      },
                    ),
                  ]
                var a = e.next
                return "horizontal" === n
                  ? [X(X({}, a), {}, { height: (0, l.GW)(0, a.height, t), y: (0, l.GW)(a.stackedBarStart, a.y, t) })]
                  : [X(X({}, a), {}, { width: (0, l.GW)(0, a.width, t), x: (0, l.GW)(a.stackedBarStart, a.x, t) })]
              }),
      animationMatchBy: R.Um,
      background: !1,
      hide: !1,
      isAnimationActive: "auto",
      label: !1,
      legendType: "rect",
      minPointSize: 0,
      shape: f,
      xAxisId: 0,
      yAxisId: 0,
      zIndex: D.I.bar,
    }
    function es(e) {
      var t,
        n = e.xAxisId,
        o = e.yAxisId,
        i = e.hide,
        s = e.legendType,
        l = e.minPointSize,
        d = e.activeBar,
        u = e.animationBegin,
        p = e.animationDuration,
        g = e.animationEasing,
        m = e.isAnimationActive,
        h = (0, C.l)(n, o).needClip,
        f = (0, w.WX)(),
        v = (0, k.r)(),
        b = (0, c.aS)(e.children, r.f),
        y = (0, O.G)((t) => (0, I.OS)(t, e.id, v, b))
      if ("vertical" !== f && "horizontal" !== f) return null
      var x = null == y ? void 0 : y[0]
      return (
        (t = null == x || null == x.height || null == x.width ? 0 : "vertical" === f ? x.height / 2 : x.width / 2),
        a.createElement(
          A.zk,
          { xAxisId: n, yAxisId: o, data: y, dataPointFormatter: eo, errorBarOffset: t },
          a.createElement(
            ei,
            K({}, e, {
              layout: f,
              needClip: h,
              data: y,
              xAxisId: n,
              yAxisId: o,
              hide: i,
              legendType: s,
              minPointSize: l,
              activeBar: d,
              animationBegin: u,
              animationDuration: p,
              animationEasing: g,
              isAnimationActive: m,
            }),
          ),
        )
      )
    }
    function el(e) {
      var t = e.layout,
        n = e.barSettings,
        a = n.dataKey,
        o = n.minPointSize,
        i = n.hasCustomShape,
        r = e.pos,
        s = e.bandSize,
        c = e.xAxis,
        u = e.yAxis,
        p = e.xAxisTicks,
        g = e.yAxisTicks,
        m = e.stackedData,
        h = e.displayedData,
        f = e.offset,
        v = e.cells,
        y = e.parentViewBox,
        x = e.dataStartIndex,
        A = "horizontal" === t ? u : c,
        C = m ? A.scale.domain() : null,
        w = (0, d.DW)({ numericAxis: A }),
        I = A.scale.map(w)
      return h
        .map((e, n) => {
          if (m) {
            var h = m[n + x]
            if (null == h) return null
            O = (0, d._f)(h, C)
          } else Array.isArray((O = (0, d.kr)(e, a))) || (O = [w, O])
          var A = b(o, 0)(O[1], n)
          if ("horizontal" === t) {
            var O,
              k,
              _,
              S,
              N,
              M,
              E,
              T = u.scale.map(O[0]),
              j = u.scale.map(O[1])
            if (null == T || null == j) return null
            ;((k = (0, d.y2)({ axis: c, ticks: p, bandSize: s, offset: r.offset, entry: e, index: n })),
              (_ = null != (E = null != j ? j : T) ? E : void 0),
              (S = r.size))
            var R = T - j
            if (
              ((N = (0, l.M8)(R) ? 0 : R),
              (M = { x: k, y: f.top, width: S, height: f.height }),
              Math.abs(A) > 0 && Math.abs(N) < Math.abs(A))
            ) {
              var P = (0, l.sA)(N || A) * (Math.abs(A) - Math.abs(N))
              ;((_ -= P), (N += P))
            }
          } else {
            var D = c.scale.map(O[0]),
              L = c.scale.map(O[1])
            if (null == D || null == L) return null
            if (
              ((k = D),
              (_ = (0, d.y2)({ axis: u, ticks: g, bandSize: s, offset: r.offset, entry: e, index: n })),
              (S = L - D),
              (N = r.size),
              (M = { x: f.left, y: _, width: f.width, height: N }),
              Math.abs(A) > 0 && Math.abs(S) < Math.abs(A))
            ) {
              var z = (0, l.sA)(S || A) * (Math.abs(A) - Math.abs(S))
              S += z
            }
          }
          return null != k && null != _ && null != S && null != N && (i || (0 !== S && 0 !== N))
            ? X(
                X({}, e),
                {},
                {
                  stackedBarStart: I,
                  x: k,
                  y: _,
                  width: S,
                  height: N,
                  value: m ? O : O[1],
                  payload: e,
                  background: M,
                  tooltipPosition: { x: k + S / 2, y: _ + N / 2 },
                  parentViewBox: y,
                  originalDataIndex: n,
                },
                v && v[n] && v[n].props,
              )
            : null
        })
        .filter(Boolean)
    }
    var ec = a.memo(function (e) {
      var t = (0, N.e)(e, er),
        n = (0, U.Jy)(t.stackId),
        o = (0, k.r)()
      return a.createElement(M.x, { id: t.id, type: "bar" }, (e) => {
        var i, r, s, l
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(S.A, {
            legendPayload:
              ((i = t.dataKey),
              (r = t.name),
              (s = t.fill),
              (l = t.legendType),
              [{ inactive: t.hide, dataKey: i, type: l, color: s, value: (0, d.uM)(r, i), payload: t }]),
          }),
          a.createElement(Y, {
            dataKey: t.dataKey,
            stroke: t.stroke,
            strokeWidth: t.strokeWidth,
            fill: t.fill,
            name: t.name,
            hide: t.hide,
            unit: t.unit,
            formatter: t.formatter,
            tooltipType: t.tooltipType,
            id: e,
          }),
          a.createElement(E.p, {
            type: "bar",
            id: e,
            data: void 0,
            xAxisId: t.xAxisId,
            yAxisId: t.yAxisId,
            zAxisId: 0,
            dataKey: t.dataKey,
            stackId: n,
            hide: t.hide,
            barSize: t.barSize,
            minPointSize: t.minPointSize,
            maxBarSize: t.maxBarSize,
            isPanorama: o,
            hasCustomShape: null != t.shape && t.shape !== f,
          }),
          a.createElement(P.g, { zIndex: t.zIndex }, a.createElement(es, K({}, t, { id: e }))),
        )
      })
    }, z.P)
    ec.displayName = "Bar"
  },
  OuWM(e, t, n) {
    n.d(t, { A_: () => S, RW: () => k, Jy: () => w })
    var a = n("zd8w"),
      o = n("ZDYK"),
      i = n("PqVW"),
      r = n("ncvm"),
      s = n("P9gZ"),
      l = n("eQWv"),
      c = n("oI7Z"),
      d = n("Bj57"),
      u = (e, t) => t,
      p = (e, t, n) => n,
      g = (0, l.Mz)([u, c.ld, p], (e, t, n) =>
        t
          .filter((e) => "bar" === e.type)
          .filter((t) => t.stackId === e)
          .filter((e) => e.isPanorama === n)
          .filter((e) => !e.hide),
      ),
      m = (0, l.Mz)([g], (e) => e.map((e) => e.id)),
      h = (0, l.Mz)([(e) => e, u, p], (e, t, n) => {
        var a = m(e, t, n),
          o = []
        return (
          a.forEach((t) => {
            var a = (0, d.OS)(e, t, n, void 0)
            null == a ||
              a.forEach((e) => {
                var t = e.originalDataIndex
                o[t] = ((e, t) => {
                  if (!e) return t
                  if (!t) return e
                  var n = Math.min(e.x, e.x + e.width, t.x, t.x + t.width),
                    a = Math.min(e.y, e.y + e.height, t.y, t.y + t.height)
                  return {
                    x: n,
                    y: a,
                    width: Math.max(e.x, e.x + e.width, t.x, t.x + t.width) - n,
                    height: Math.max(e.y, e.y + e.height, t.y, t.y + t.height) - a,
                  }
                })(o[t], e)
              })
          }),
          o
        )
      }),
      f = n("QsfR"),
      v = n("hlJj"),
      b = n("fgDr"),
      y = n("D3sE"),
      x = ["index"]
    function A() {
      return (A = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(null, arguments)
    }
    var C = (0, a.createContext)(void 0),
      w = (e) => {
        var t = (0, a.useContext)(C)
        return null != t ? t.stackId : null != e ? (0, o.$8)(e) : void 0
      },
      I = { radius: 0 },
      O = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t),
      k = (e) => {
        var t = e.index,
          n = (function (e, t) {
            if (null == e) return {}
            var n,
              a,
              o = (function (e, t) {
                if (null == e) return {}
                var n = {}
                for (var a in e)
                  if ({}.hasOwnProperty.call(e, a)) {
                    if (-1 !== t.indexOf(a)) continue
                    n[a] = e[a]
                  }
                return n
              })(e, t)
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e)
              for (a = 0; a < i.length; a++)
                ((n = i[a]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
            }
            return o
          })(e, x),
          o = ((e) => {
            var t = (0, a.useContext)(C)
            if (null != t) {
              var n = t.stackId
              return "url(#".concat(O(n, e), ")")
            }
          })(t)
        return a.createElement(v.W, A({ className: "recharts-bar-stack-layer", clipPath: o }, n))
      },
      _ = (e) => {
        var t = e.stackId,
          n = e.radius,
          o = (0, f.r)(),
          i = (0, s.G)((e) => h(e, t, o))
        return null == i || 0 === i.length
          ? null
          : a.createElement(
              "defs",
              null,
              i.map((e, o) => {
                if (null == e) return null
                var i = O(t, o)
                return a.createElement(
                  "clipPath",
                  { key: i, id: i },
                  a.createElement(b.M, {
                    isAnimationActive: !1,
                    isUpdateAnimationActive: !1,
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    radius: n,
                  }),
                )
              }),
            )
      },
      S = a.memo((e) => {
        var t = (0, i.Y)("recharts-bar-stack", (0, o.$8)(e.stackId)),
          n = (0, r.e)(e, I),
          s = n.children,
          l = n.radius,
          c = (0, a.useMemo)(() => ({ stackId: t, radius: l }), [t, l])
        return a.createElement(C.Provider, { value: c }, a.createElement(_, { stackId: t, radius: l }), s)
      }, y.P)
  },
  ZOaQ(e, t, n) {
    var a = n("zd8w"),
      o = n("oM1g"),
      i = n("Y44c"),
      r = ["axis", "item"],
      s = (0, a.forwardRef)((e, t) =>
        a.createElement(i.P, {
          chartName: "BarChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: r,
          tooltipPayloadSearcher: o.uN,
          categoricalChartProps: e,
          ref: t,
        }),
      )
    n.d(t, {}, { E: s })
  },
  XYC9(e, t, n) {
    var a = n("zd8w"),
      o = ["children"],
      i = (0, a.createContext)({
        data: [],
        xAxisId: "xAxis-0",
        yAxisId: "yAxis-0",
        dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
        errorBarOffset: 0,
      })
    n.d(
      t,
      {},
      {
        zk: function (e) {
          var t = e.children,
            n = (function (e, t) {
              if (null == e) return {}
              var n,
                a,
                o = (function (e, t) {
                  if (null == e) return {}
                  var n = {}
                  for (var a in e)
                    if ({}.hasOwnProperty.call(e, a)) {
                      if (-1 !== t.indexOf(a)) continue
                      n[a] = e[a]
                    }
                  return n
                })(e, t)
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e)
                for (a = 0; a < i.length; a++)
                  ((n = i[a]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
              }
              return o
            })(e, o)
          return a.createElement(i.Provider, { value: n }, t)
        },
      },
    )
  },
  Bj57(e, t, n) {
    n.d(t, { OS: () => S })
    var a = n("eQWv"),
      o = n("oI7Z"),
      i = n("Q0yO"),
      r = n("ZDYK"),
      s = n("x8Nb"),
      l = n("CkDz"),
      c = n("lB2r"),
      d = n("bCB3"),
      u = n("LmbY"),
      p = n("hJJ2")
    function g(e, t) {
      ;(null == t || t > e.length) && (t = e.length)
      for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n]
      return a
    }
    var m = (e, t, n) => {
        var a = null != n ? n : e
        if (!(0, i.uy)(a)) return (0, i.F4)(a, t, 0)
      },
      h = n("rYo8")
    function f(e, t) {
      var n = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e)
        ;(t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, a))
      }
      return n
    }
    function v(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? f(Object(n), !0).forEach(function (t) {
              var a, o, i
              ;((a = e),
                (o = t),
                (i = n[t]),
                (o = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e
                    var n = e[Symbol.toPrimitive]
                    if (void 0 !== n) {
                      var a = n.call(e, t || "default")
                      if ("object" != typeof a) return a
                      throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                  })(e, "string")
                  return "symbol" == typeof t ? t : t + ""
                })(o)) in a
                  ? Object.defineProperty(a, o, { value: i, enumerable: !0, configurable: !0, writable: !0 })
                  : (a[o] = i))
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
      }
      return e
    }
    var b = n("YlPv"),
      y = n("tRhI"),
      x = (0, a.Mz)([o.ld, (e, t) => t], (e, t) => e.filter((e) => "bar" === e.type).find((e) => e.id === t)),
      A = (0, a.Mz)([x], (e) => (null == e ? void 0 : e.maxBarSize)),
      C = (0, a.Mz)([l.fz, o.ld, y.W, y.B, (e, t, n) => n], (e, t, n, a, o) =>
        t
          .filter((t) => ("horizontal" === e ? t.xAxisId === n : t.yAxisId === a))
          .filter((e) => e.isPanorama === o)
          .filter((e) => !1 === e.hide)
          .filter((e) => "bar" === e.type),
      ),
      w = (0, a.Mz)(
        [
          C,
          u.x3,
          (e, t) => {
            var n = (0, l.fz)(e),
              a = (0, y.W)(e, t),
              i = (0, y.B)(e, t)
            if (null != a && null != i) return "horizontal" === n ? (0, o.BQ)(e, "xAxis", a) : (0, o.BQ)(e, "yAxis", i)
          },
        ],
        (e, t, n) => {
          var a = e.filter(p.g),
            o = e.filter((e) => null == e.stackId),
            i = Object.entries(
              a.reduce((e, t) => {
                var n = e[t.stackId]
                return (null == n && (n = []), n.push(t), (e[t.stackId] = n), e)
              }, {}),
            ).map((e) => {
              var a,
                o =
                  (function (e) {
                    if (Array.isArray(e)) return e
                  })(e) ||
                  (function (e) {
                    var t = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]
                    if (null != t) {
                      var n,
                        a,
                        o,
                        i,
                        r = [],
                        s = !0,
                        l = !1
                      try {
                        ;((o = (t = t.call(e)).next), !1)
                        for (; !(s = (n = o.call(t)).done) && (r.push(n.value), 2 !== r.length); s = !0);
                      } catch (e) {
                        ;((l = !0), (a = e))
                      } finally {
                        try {
                          if (!s && null != t.return && ((i = t.return()), Object(i) !== i)) return
                        } finally {
                          if (l) throw a
                        }
                      }
                      return r
                    }
                  })(e) ||
                  (function (e) {
                    if (e) {
                      if ("string" == typeof e) return g(e, 2)
                      var t = {}.toString.call(e).slice(8, -1)
                      return (
                        "Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t
                          ? Array.from(e)
                          : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                            ? g(e, 2)
                            : void 0
                      )
                    }
                  })(e) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    )
                  })(),
                i = o[0],
                r = o[1]
              return {
                stackId: i,
                dataKeys: r.map((e) => e.dataKey),
                barSize: m(t, n, null == (a = r[0]) ? void 0 : a.barSize),
              }
            }),
            r = o.map((e) => ({
              stackId: void 0,
              dataKeys: [e.dataKey].filter((e) => null != e),
              barSize: m(t, n, e.barSize),
            }))
          return [...i, ...r]
        },
      ),
      I = (e, t, n) => {
        var a,
          i,
          s = (0, l.fz)(e),
          c = (0, y.W)(e, t),
          d = (0, y.B)(e, t)
        if (null != c && null != d)
          return (
            "horizontal" === s
              ? ((a = (0, o.Gx)(e, "xAxis", c, n)), (i = (0, o.CR)(e, "xAxis", c, n)))
              : ((a = (0, o.Gx)(e, "yAxis", d, n)), (i = (0, o.CR)(e, "yAxis", d, n))),
            (0, r.Hj)(a, i)
          )
      },
      O = (0, a.Mz)(
        [
          w,
          u.JN,
          u._5,
          u.gY,
          (e, t, n) => {
            var a,
              s,
              c,
              d,
              p = x(e, t)
            if (null == p) return 0
            var g = (0, y.W)(e, t),
              m = (0, y.B)(e, t)
            if (null == g || null == m) return 0
            var h = (0, l.fz)(e),
              f = (0, u.JN)(e),
              v = p.maxBarSize,
              b = (0, i.uy)(v) ? f : v
            return (
              "horizontal" === h
                ? ((c = (0, o.Gx)(e, "xAxis", g, n)), (d = (0, o.CR)(e, "xAxis", g, n)))
                : ((c = (0, o.Gx)(e, "yAxis", m, n)), (d = (0, o.CR)(e, "yAxis", m, n))),
              null != (a = null != (s = (0, r.Hj)(c, d, !0)) ? s : b) ? a : 0
            )
          },
          I,
          A,
        ],
        (e, t, n, a, o, r, s) => {
          var l = (function (e, t, n, a, o) {
            var r,
              s,
              l = a.length
            if (!(l < 1)) {
              var c = (0, i.F4)(e, n, 0, !0),
                d = []
              if ((0, h.H)(null == (r = a[0]) ? void 0 : r.barSize)) {
                var u = !1,
                  p = n / l,
                  g = a.reduce((e, t) => e + (t.barSize || 0), 0)
                ;((g += (l - 1) * c) >= n && ((g -= (l - 1) * c), (c = 0)),
                  g >= n && p > 0 && ((u = !0), (p *= 0.9), (g = l * p)))
                var m = { offset: Math.round((n - g) / 2) - c, size: 0 }
                s = a.reduce((e, t) => {
                  var n,
                    a = {
                      stackId: t.stackId,
                      dataKeys: t.dataKeys,
                      position: { offset: m.offset + m.size + c, size: u ? p : null != (n = t.barSize) ? n : 0 },
                    },
                    o = [...e, a]
                  return ((m = a.position), o)
                }, d)
              } else {
                var f = (0, i.F4)(t, n, 0, !0)
                n - 2 * f - (l - 1) * c <= 0 && (c = 0)
                var v = (n - 2 * f - (l - 1) * c) / l
                v > 1 && (v = Math.round(v))
                var b = (0, h.H)(o) ? Math.min(v, o) : v
                s = a.reduce(
                  (e, t, n) => [
                    ...e,
                    {
                      stackId: t.stackId,
                      dataKeys: t.dataKeys,
                      position: { offset: f + (v + c) * n + (v - b) / 2, size: b },
                    },
                  ],
                  d,
                )
              }
              return s
            }
          })(n, a, o !== r ? o : r, e, (0, i.uy)(s) ? t : s)
          return (
            o !== r &&
              null != l &&
              (l = l.map((e) =>
                v(v({}, e), {}, { position: v(v({}, e.position), {}, { offset: e.position.offset - o / 2 }) }),
              )),
            l
          )
        },
      ),
      k = (0, a.Mz)([O, x], (e, t) => {
        if (null != e && null != t) {
          var n = e.find((e) => e.stackId === t.stackId && null != t.dataKey && e.dataKeys.includes(t.dataKey))
          if (null != n) return n.position
        }
      }),
      _ = (0, a.Mz)(
        [
          (e, t, n) => {
            var a = (0, l.fz)(e),
              i = (0, y.W)(e, t),
              r = (0, y.B)(e, t)
            if (null != i && null != r)
              return "horizontal" === a ? (0, o.TC)(e, "yAxis", r, n) : (0, o.TC)(e, "xAxis", i, n)
          },
          x,
        ],
        (e, t) => {
          var n = (0, b.x)(t)
          if (!e || null == n || null == t) return
          var a = t.stackId
          if (null != a) {
            var o = e[a]
            if (o) {
              var i = o.stackedData
              if (i) return i.find((e) => e.key === n)
            }
          }
        },
      ),
      S = (0, a.Mz)(
        [
          d.HZ,
          d.c2,
          (e, t, n) => {
            var a = (0, y.W)(e, t)
            if (null != a) return (0, o.Gx)(e, "xAxis", a, n)
          },
          (e, t, n) => {
            var a = (0, y.B)(e, t)
            if (null != a) return (0, o.Gx)(e, "yAxis", a, n)
          },
          (e, t, n) => {
            var a = (0, y.W)(e, t)
            if (null != a) return (0, o.CR)(e, "xAxis", a, n)
          },
          (e, t, n) => {
            var a = (0, y.B)(e, t)
            if (null != a) return (0, o.CR)(e, "yAxis", a, n)
          },
          k,
          l.fz,
          c.rN,
          I,
          _,
          x,
          (e, t, n, a) => a,
        ],
        (e, t, n, a, o, i, r, l, c, d, u, p, g) => {
          var m,
            h = c.chartData,
            f = c.dataStartIndex,
            v = c.dataEndIndex
          if (
            null != p &&
            null != r &&
            null != t &&
            ("horizontal" === l || "vertical" === l) &&
            null != n &&
            null != a &&
            null != o &&
            null != i &&
            null != d
          ) {
            var b = p.data
            if (null != (m = null != b && b.length > 0 ? b : null == h ? void 0 : h.slice(f, v + 1)))
              return (0, s.LP)({
                layout: l,
                barSettings: p,
                pos: r,
                parentViewBox: t,
                bandSize: d,
                xAxis: n,
                yAxis: a,
                xAxisTicks: o,
                yAxisTicks: i,
                stackedData: u,
                displayedData: m,
                offset: e,
                cells: g,
                dataStartIndex: f,
              })
          }
        },
      )
  },
  iLrd(e, t, n) {
    var a = n("zd8w"),
      o =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            },
      i = a.useState,
      r = a.useEffect,
      s = a.useLayoutEffect,
      l = a.useDebugValue
    function c(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !o(e, n)
      } catch (e) {
        return !0
      }
    }
    var d =
      "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
            return t()
          }
        : function (e, t) {
            var n = t(),
              a = i({ inst: { value: n, getSnapshot: t } }),
              o = a[0].inst,
              d = a[1]
            return (
              s(
                function () {
                  ;((o.value = n), (o.getSnapshot = t), c(o) && d({ inst: o }))
                },
                [e, n, t],
              ),
              r(
                function () {
                  return (
                    c(o) && d({ inst: o }),
                    e(function () {
                      c(o) && d({ inst: o })
                    })
                  )
                },
                [e],
              ),
              l(n),
              n
            )
          }
    t.useSyncExternalStore = void 0 !== a.useSyncExternalStore ? a.useSyncExternalStore : d
  },
  aWDT0(e, t, n) {
    var a = n("zd8w"),
      o = n("aapa"),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            },
      r = o.useSyncExternalStore,
      s = a.useRef,
      l = a.useEffect,
      c = a.useMemo,
      d = a.useDebugValue
    t.useSyncExternalStoreWithSelector = function (e, t, n, a, o) {
      var u = s(null)
      if (null === u.current) {
        var p = { hasValue: !1, value: null }
        u.current = p
      } else p = u.current
      var g = r(
        e,
        (u = c(
          function () {
            function e(e) {
              if (!l) {
                if (((l = !0), (r = e), (e = a(e)), void 0 !== o && p.hasValue)) {
                  var t = p.value
                  if (o(t, e)) return (s = t)
                }
                return (s = e)
              }
              if (((t = s), i(r, e))) return t
              var n = a(e)
              return void 0 !== o && o(t, n) ? ((r = e), t) : ((r = e), (s = n))
            }
            var r,
              s,
              l = !1,
              c = void 0 === n ? null : n
            return [
              function () {
                return e(t())
              },
              null === c
                ? void 0
                : function () {
                    return e(c())
                  },
            ]
          },
          [t, n, a, o],
        ))[0],
        u[1],
      )
      return (
        l(
          function () {
            ;((p.hasValue = !0), (p.value = g))
          },
          [g],
        ),
        d(g),
        g
      )
    }
  },
  aapa(e, t, n) {
    e.exports = n("iLrd")
  },
  sTDd(e, t, n) {
    e.exports = n("aWDT0")
  },
  ghCo(e, t, n) {
    e.exports = n.p + "assets/computer-use-plugin-icon.4695bfc94d.png"
  },
  G6Yj(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, a.jsx)("path", {
              fill: "#2E9EFF",
              d: "M22 9v4H2V7c0-2.35 1.65-4 4-4h2.637c2.988 0 2.75 2 4.613 2H18c2.35 0 4 1.65 4 4Z",
            }),
            (0, a.jsx)("path", {
              fill: "#68C4FF",
              d: "M18 21c2.35 0 4-1.65 4-4v-5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v5c0 2.35 1.65 4 4 4h12Z",
            }),
          ],
        })))
  },
  pCvK(e, t, n) {
    var a = n("aNWx"),
      o = n("ASxG"),
      i = n("A5O4"),
      r = n("GaA7")
    let s = o.strictObject({ outcome: o.literal("completed"), url: o.url() }).transform((e) => ({ ...e, output: "" })),
      l = o.strictObject({ accepted: o.literal(!0), result: o.union([a.c3, s]) }),
      c = o.object({ type: o.literal("text"), text: o.string() })
    n.d(
      t,
      {},
      {
        N: function (e) {
          let t
          if (e.tool !== a.Ru || "completed" !== e.status) return null
          if ("dynamicToolCall" === e.type) {
            if ("codex_app" !== e.namespace || !0 !== e.success) return null
            t = e.contentItems?.find((e) => "inputText" === e.type)?.text
          } else {
            if ("codex_app" !== e.server || null != e.error || null == e.result) return null
            for (let n of e.result.content) {
              let e = c.safeParse(n)
              if (e.success) {
                t = e.data.text
                break
              }
            }
          }
          if (null == t) return null
          try {
            let e = JSON.parse(t),
              n = l.safeParse(e)
            return n.success ? n.data.result : null
          } catch {
            return null
          }
        },
        V: async function ({ scope: e, argumentsValue: t, conversationId: n, hostId: a }) {
          let o = r.appServices.conversationalOnboarding
          if (null == o) return null
          let s = await o.completeTask({ argumentsValue: t, conversationId: n, hostId: a })
          return null == s
            ? null
            : ("completed" === s.completion.outcome
                ? (0, i.d_)(e, s.selectedTask, { isRevert: s.isRevert })
                : (0, i.wW)(e, s.selectedTask, { isRevert: s.isRevert }),
              s.completion)
        },
      },
    )
  },
  Ia2g(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("slpy"),
      r = n("h818"),
      s = n("zTeN"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("n5iL"),
      u = n("tsTf"),
      p = n("ygO2"),
      g = n("AxFa"),
      m = n("bqtn"),
      h = n("GO7r"),
      f = n("RltM"),
      v = n("WNfT"),
      b = n("Y5qM"),
      y = n("KRWX")
    function x(e) {
      let t,
        n,
        i,
        r,
        s,
        l = (0, o.c)(17),
        { headerContent: d, headingAction: u, title: p, subtitle: g, reason: m, details: h, announce: v } = e,
        y = void 0 !== v && v,
        x = y || void 0,
        A = y ? "alert" : void 0
      return (
        l[0] !== d || l[1] !== g || l[2] !== p
          ? ((t = (0, a.jsx)(b.Q, { headerContent: d, subtitle: g, title: p })),
            (l[0] = d),
            (l[1] = g),
            (l[2] = p),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== x || l[5] !== A || l[6] !== t
          ? ((n = (0, a.jsx)("div", { className: "min-w-0 flex-1", "aria-atomic": x, role: A, children: t })),
            (l[4] = x),
            (l[5] = A),
            (l[6] = t),
            (l[7] = n))
          : (n = l[7]),
        l[8] !== u || l[9] !== n
          ? ((i = (0, a.jsxs)("div", { className: "flex items-start gap-2", children: [n, u] })),
            (l[8] = u),
            (l[9] = n),
            (l[10] = i))
          : (i = l[10]),
        l[11] !== h || l[12] !== m
          ? ((r =
              null != m || null != h
                ? (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      null == m
                        ? null
                        : (0, a.jsx)(f.S, {
                            label: (0, a.jsx)(c.A, {
                              id: "approvalRequestCard.reasonLabel",
                              defaultMessage: "Reason",
                              description: "Section label for the reason shown in approval requests",
                            }),
                            children: m,
                          }),
                      h,
                    ],
                  })
                : null),
            (l[11] = h),
            (l[12] = m),
            (l[13] = r))
          : (r = l[13]),
        l[14] !== i || l[15] !== r
          ? ((s = (0, a.jsxs)(a.Fragment, { children: [i, r] })), (l[14] = i), (l[15] = r), (l[16] = s))
          : (s = l[16]),
        s
      )
    }
    n.d(
      t,
      {},
      {
        _: x,
        n: function (e) {
          let t,
            n,
            f,
            b,
            A,
            C,
            w,
            I,
            O,
            k,
            _,
            S,
            N,
            M,
            E,
            T,
            j,
            R,
            P,
            D,
            L,
            z = (0, o.c)(64)
          z[0] !== e
            ? (({ embedded: b, body: n, actions: t, ...f } = e),
              (z[0] = e),
              (z[1] = t),
              (z[2] = n),
              (z[3] = f),
              (z[4] = b))
            : ((t = z[1]), (n = z[2]), (f = z[3]), (b = z[4]))
          let U = (0, y.f)(),
            F = (0, s._U)(d.X1, "approval.approve"),
            B = (0, s._U)(d.X1, "approval.decline"),
            q = (0, l.A)(),
            G = t.leadingAction,
            V = t.scopedApproveAction
          z[5] !== t.disabled || z[6] !== U
            ? ((A =
                U &&
                !0 !== t.disabled &&
                document.activeElement?.closest(
                  "input, textarea, [contenteditable]:not([contenteditable='false' i])",
                ) == null),
              (z[5] = t.disabled),
              (z[6] = U),
              (z[7] = A))
            : (A = z[7])
          let W = A,
            K = U && !0 !== t.disabled && !0 !== t.disableHotkeys && !0 !== t.isLoading
          z[8] !== t.approveLabel
            ? ((C =
                t.approveLabel ??
                (0, a.jsx)(c.A, {
                  id: "approvalRequestCard.allowOnce",
                  defaultMessage: "Allow once",
                  description: "Primary action label for approving a request once",
                })),
              (z[8] = t.approveLabel),
              (z[9] = C))
            : (C = z[9])
          let H = C
          z[10] !== t.approveDisabled || z[11] !== F || z[12] !== K
            ? ((w =
                K && !0 !== t.approveDisabled && null != F
                  ? (0, a.jsx)("span", {
                      className: "@max-md/approval-card:hidden",
                      children: (0, a.jsx)(v.$, { variant: "primary", children: F }),
                    })
                  : null),
              (z[10] = t.approveDisabled),
              (z[11] = F),
              (z[12] = K),
              (z[13] = w))
            : (w = z[13])
          let X = w
          ;(z[14] !== t
            ? ((I = (e) => {
                !0 !== t.approveDisabled && t.onApprove(e)
              }),
              (z[14] = t),
              (z[15] = I))
            : (I = z[15]),
            z[16] !== t.onDeny || z[17] !== K || z[18] !== I
              ? ((O = { enabled: K, onApprove: I, onDecline: t.onDeny }),
                (z[16] = t.onDeny),
                (z[17] = K),
                (z[18] = I),
                (z[19] = O))
              : (O = z[19]),
            (0, u.r)(O),
            z[20] !== f
              ? ((k = (0, a.jsx)("div", {
                  className: "flex min-h-0 min-w-0 flex-col gap-2 overflow-y-auto overscroll-contain px-4 pt-4 pb-3",
                  children: (0, a.jsx)(x, { ...f, announce: !0 }),
                })),
                (z[20] = f),
                (z[21] = k))
              : (k = z[21]),
            z[22] !== t
              ? ((_ = (e) => {
                  ;(e.preventDefault(),
                    !0 !== t.disabled && !0 !== t.isLoading && !0 !== t.approveDisabled && t.onApprove(e.timeStamp))
                }),
                (z[22] = t),
                (z[23] = _))
              : (_ = z[23]),
            z[24] !== t.disabled || z[25] !== t.isLoading || z[26] !== G
              ? ((S =
                  null != G &&
                  "menu" in G &&
                  (0, a.jsx)(m.Ab, {
                    align: "start",
                    side: "top",
                    disabled: t.disabled || t.isLoading,
                    triggerButton: (0, a.jsxs)(p.$, {
                      allowShrink: !0,
                      className: "max-w-full @max-md/approval-card:justify-center",
                      color: "outline",
                      size: "composer",
                      children: [
                        (0, a.jsx)("span", { className: "truncate", children: G.label }),
                        (0, a.jsx)(h.HIf, { "aria-hidden": "true", className: "icon-sm" }),
                      ],
                    }),
                    children: G.menu,
                  })),
                (z[24] = t.disabled),
                (z[25] = t.isLoading),
                (z[26] = G),
                (z[27] = S))
              : (S = z[27]),
            z[28] !== t.disabled || z[29] !== t.isLoading || z[30] !== G
              ? ((N =
                  null != G &&
                  "onClick" in G &&
                  (0, a.jsx)(i.m, {
                    content: G.tooltipContent,
                    children: (0, a.jsx)(p.$, {
                      allowShrink: !0,
                      className: "max-w-full @max-md/approval-card:justify-center",
                      color: "outline",
                      disabled: t.disabled || t.isLoading,
                      size: "composer",
                      onClick: (e) => G.onClick(e.timeStamp),
                      children: (0, a.jsx)("span", {
                        className: "truncate",
                        children:
                          G.label ??
                          (0, a.jsx)(c.A, {
                            id: "approvalRequestCard.alwaysAllow",
                            defaultMessage: "Always allow",
                            description: "Button label for always approving matching requests",
                          }),
                      }),
                    }),
                  })),
                (z[28] = t.disabled),
                (z[29] = t.isLoading),
                (z[30] = G),
                (z[31] = N))
              : (N = z[31]))
          let Q = t.disabled || t.isLoading
          return (
            z[32] !== t ? ((M = (e) => t.onDeny(e.timeStamp)), (z[32] = t), (z[33] = M)) : (M = z[33]),
            z[34] !== t.denyLabel
              ? ((E =
                  t.denyLabel ??
                  (0, a.jsx)(c.A, {
                    id: "approvalRequestCard.deny",
                    defaultMessage: "Deny",
                    description: "Button label for denying an approval request",
                  })),
                (z[34] = t.denyLabel),
                (z[35] = E))
              : (E = z[35]),
            z[36] !== K || z[37] !== B
              ? ((T =
                  K && null != B
                    ? (0, a.jsx)("span", {
                        className: "@max-md/approval-card:hidden",
                        children: (0, a.jsx)(v.$, { variant: "secondary", children: B }),
                      })
                    : null),
                (z[36] = K),
                (z[37] = B),
                (z[38] = T))
              : (T = z[38]),
            z[39] !== Q || z[40] !== M || z[41] !== E || z[42] !== T
              ? ((j = (0, a.jsxs)(p.$, {
                  className: "@max-md/approval-card:justify-center",
                  color: "outline",
                  disabled: Q,
                  size: "composer",
                  onClick: M,
                  children: [E, T],
                })),
                (z[39] = Q),
                (z[40] = M),
                (z[41] = E),
                (z[42] = T),
                (z[43] = j))
              : (j = z[43]),
            z[44] !== t || z[45] !== H || z[46] !== X || z[47] !== q || z[48] !== V || z[49] !== W
              ? ((R =
                  null != V
                    ? (0, a.jsxs)(g._, {
                        autoFocus: W,
                        className: "min-w-0 @max-md/approval-card:w-full",
                        color: "primary",
                        disabled: t.disabled,
                        dropdownAlign: "end",
                        loading: t.isLoading,
                        primaryClassName:
                          "min-w-0 overflow-hidden @max-md/approval-card:flex-1 @max-md/approval-card:justify-center @max-md/approval-card:ps-6",
                        primaryDisabled: t.approveDisabled,
                        secondaryAriaLabel: q.formatMessage({
                          id: "approvalRequestCard.approvalOptions",
                          defaultMessage: "Approval options",
                          description: "Accessible label for opening approval scope options",
                        }),
                        size: "composer",
                        dropdownContent: (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(m.ms.Item, {
                              disabled: t.disabled || t.approveDisabled,
                              onSelect: () => t.onApprove(),
                              children: H,
                            }),
                            (0, a.jsx)(m.ms.Item, {
                              disabled: t.disabled,
                              rightIconAsset: null == V.infoTooltip ? void 0 : r.c,
                              tooltipText: V.infoTooltip,
                              onSelect: V.onClick,
                              children:
                                V.label ??
                                (0, a.jsx)(c.A, {
                                  id: "approvalRequestCard.allowConversation",
                                  defaultMessage: "Allow this conversation",
                                  description: "Button label for approving a request for the current conversation",
                                }),
                            }),
                          ],
                        }),
                        onClick: (e) => t.onApprove(e.timeStamp),
                        children: [(0, a.jsx)("span", { className: "truncate", children: H }), X],
                      })
                    : (0, a.jsxs)(p.$, {
                        autoFocus: W,
                        allowShrink: !0,
                        className: "max-w-full @max-md/approval-card:justify-center",
                        color: "primary",
                        disabled: t.disabled || t.approveDisabled,
                        loading: t.isLoading,
                        size: "composer",
                        type: "submit",
                        children: [(0, a.jsx)("span", { className: "truncate", children: H }), X],
                      })),
                (z[44] = t),
                (z[45] = H),
                (z[46] = X),
                (z[47] = q),
                (z[48] = V),
                (z[49] = W),
                (z[50] = R))
              : (R = z[50]),
            z[51] !== j || z[52] !== R
              ? ((P = (0, a.jsxs)("div", {
                  className:
                    "ms-auto flex min-w-0 items-center gap-2 @max-md/approval-card:ms-0 @max-md/approval-card:w-full @max-md/approval-card:flex-col @max-md/approval-card:items-stretch",
                  children: [j, R],
                })),
                (z[51] = j),
                (z[52] = R),
                (z[53] = P))
              : (P = z[53]),
            z[54] !== P || z[55] !== _ || z[56] !== S || z[57] !== N
              ? ((D = (0, a.jsxs)("form", {
                  className:
                    "flex shrink-0 items-center gap-2 px-4 pt-2 pb-4 @max-md/approval-card:flex-col @max-md/approval-card:items-stretch",
                  onSubmit: _,
                  children: [S, N, P],
                })),
                (z[54] = P),
                (z[55] = _),
                (z[56] = S),
                (z[57] = N),
                (z[58] = D))
              : (D = z[58]),
            z[59] !== n || z[60] !== b || z[61] !== D || z[62] !== k
              ? ((L = (0, a.jsxs)(v.A, {
                  className: "@container/approval-card",
                  embedded: b,
                  "data-codex-approval-surface": !0,
                  children: [k, n, D],
                })),
                (z[59] = n),
                (z[60] = b),
                (z[61] = D),
                (z[62] = k),
                (z[63] = L))
              : (L = z[63]),
            L
          )
        },
      },
    )
  },
  y358(e, t, n) {
    var a = n("zd8w"),
      o = n("X6Vn"),
      i = n("N34f")
    let r = (0, a.lazy)(async () => ({
      default: (await Promise.all([n.e(589469), n.e(603466)]).then(n.bind(n, "oBy1"))).ExternalAgentImportSetupModal,
    }))
    n.d(
      t,
      {},
      {
        r: function (e, { hostId: t, initialTab: n, onEvent: a, restoreFocusFallback: s }) {
          if (!0 === e.get(i.I) || (0, o.oY)(e, r)) return
          let l = document.activeElement,
            c = l instanceof HTMLElement && l !== document.body && l !== document.documentElement ? l : null
          ;(0, o.qf)(e, r, {
            hostId: t,
            initialTab: n,
            onEvent: a,
            restoreFocus: () => {
              c?.isConnected ? c.focus() : s?.()
            },
          })
        },
      },
    )
  },
  ltay(e, t, n) {
    var a = n("D7Ms"),
      o = n("zTeN"),
      i = n("GaA7"),
      r = n("q77y"),
      s = n("OWtl"),
      l = n("rvFo"),
      c = n("Igx9")
    let d = (0, o.vU)(s.u, (e) => {
      let t = i.appServices?.externalAgentImport
      return {
        queryKey: [c.Tt, e],
        queryFn:
          null == t
            ? a.hT
            : ({ signal: n }) => (0, r.P)(t.readImportedConnectors({ hostId: e, providers: ["claude-cowork"] }), n),
        retry: !1,
        staleTime: l.D.FIVE_MINUTES,
      }
    })
    n.d(
      t,
      {},
      {
        M: d,
        p: function ({ apps: e, candidates: t }) {
          let n = new Map(e.map((e) => [e.id, e])),
            a = new Map()
          for (let t of e) {
            let e = t.name.trim().toLowerCase()
            a.set(e, [...(a.get(e) ?? []), t])
          }
          let o = new Map()
          for (let e of t) {
            if (null == e.codexAppId) continue
            let t = n.get(e.codexAppId)
            null != t && o.set(e.name.trim().toLowerCase(), t)
          }
          let i = [],
            r = new Set()
          for (let e of t) {
            let t = e.name.trim().toLowerCase(),
              s = null == e.codexAppId ? void 0 : n.get(e.codexAppId),
              l = a.get(t) ?? [],
              c = s ?? o.get(t) ?? l.find((e) => null != e.logoUrl || null != e.logoUrlDark) ?? l[0]
            null == c || r.has(c.id) || (r.add(c.id), i.push(c))
          }
          return i
        },
      },
    )
  },
  U2Lm(e, t, n) {
    var a = n("hOO0"),
      o = n("C3Kr"),
      i = n("ueue"),
      r = n("ltay")
    function s(e, t) {
      return (
        (0, i._s)(t.marketplaceName) &&
        (null != t.canonicalAppId ? (0, a.$)(t.canonicalAppId) === (0, a.$)(e.id) : (0, o.Y)(e, t.plugin))
      )
    }
    n.d(
      t,
      {},
      {
        R: function ({ candidates: e, directoryApps: t, plugins: n, runtimeApps: a, useCanonicalAppIds: l = !1 }) {
          let c = [],
            d = [],
            u = new Map(a.map((e) => [e.id, e])),
            p = new Set()
          for (let a of (0, r.p)({ apps: t, candidates: e })) {
            let e = n.filter((e) => (l ? s(a, e) : (0, i._s)(e.marketplaceName) && (0, o.Y)(a, e.plugin)))
            if (0 === e.length || e.some((e) => e.plugin.installed)) {
              u.get(a.id)?.isAccessible || c.push(a)
              continue
            }
            let t = e[0]
            null == t || p.has(t.plugin.id) || (p.add(t.plugin.id), d.push({ app: a, plugin: t }))
          }
          return { appsRequiringConnection: c, importedPlugins: d }
        },
        k: s,
      },
    )
  },
  agQ0(e, t, n) {
    n.d(t, { O: () => M, u: () => N })
    var a = n("zTeN"),
      o = n("HUHI"),
      i = n("OiCI"),
      r = n("cLdu"),
      s = n("Gg2s"),
      l = n("OWtl"),
      c = n("kfGJ"),
      d = n("oeej"),
      u = n("ltay"),
      p = n("CpsU"),
      g = n.n(p),
      m = n("i5ac"),
      h = n.n(m),
      f = n("hOO0"),
      v = n("eFn4"),
      b = n("ygu7"),
      y = n("EEop"),
      x = n("Buqh"),
      A = n("mq2k"),
      C = n("ueue"),
      w = n("ndjw"),
      I = n("rvFo"),
      O = n("U2Lm")
    let k = (0, a.i1)(l.u, ({ hostId: e, apps: t }, { get: n }) => {
        let a = (0, r.hE)(e),
          o = n(i.tT),
          s = !!a || n(A.Y, e)
        if (null == s || (a && null == o) || (!a && e === c.fI && n(v.$S).authLoading))
          return { status: "loading", data: void 0 }
        let l = a ? null : n(w.FM, { hostId: e }),
          d = a ? null : n(w.lE, { hostId: e })
        if (l?.error != null || d?.error != null)
          return {
            status: "error",
            data: void 0,
            retry: () => {
              ;(l?.refetch(), d?.refetch())
            },
          }
        if (!a && (l?.data == null || d?.data == null)) return { status: "loading", data: void 0 }
        let u = a ? void 0 : (0, C.vZ)({ hostId: e, workspaceRoots: l?.data?.roots, codexHome: d?.data?.codexHome }),
          p = n(r.qF, { accountId: a ? o : null, hostId: e, roots: u }),
          g = a ? null : n(x.M, e),
          m = [l, d, p, g]
        if (m.some((e) => e?.error != null))
          return {
            status: "error",
            data: void 0,
            retry: () => {
              for (let e of m) e?.refetch()
            },
          }
        if (m.some((e) => null != e && null == e.data)) return { status: "loading", data: void 0 }
        let b = h()([...(p.data ?? []), ...(g?.data?.plugins ?? [])], ({ plugin: e }) => e.id),
          y = t.filter((e) => !b.some((t) => (0, O.k)(e, t))),
          I =
            s && null != o && y.length > 0 ? n(_, { hostId: e, appIds: y.map((e) => (0, f.$)(e.id)), roots: u }) : null
        if (I?.error != null)
          return {
            status: "error",
            data: void 0,
            retry: () => {
              I.refetch()
            },
          }
        if (null != I && null == I.data) return { status: "loading", data: void 0 }
        let k = new Map(b.map((e) => [e.plugin.id, e]))
        for (let e of I?.data ?? []) {
          let t = k.get(e.plugin.id)
          k.set(
            e.plugin.id,
            t?.plugin.installed
              ? {
                  ...e,
                  plugin: {
                    ...e.plugin,
                    installed: !0,
                    installedAt: t.plugin.installedAt,
                    enabled: t.plugin.enabled,
                    installPolicy: t.plugin.installPolicy,
                    installPolicySource: t.plugin.installPolicySource,
                    localVersion: t.plugin.localVersion,
                    remotePluginId: e.plugin.remotePluginId ?? t.plugin.remotePluginId,
                  },
                }
              : e,
          )
        }
        return {
          status: "ready",
          data: { plugins: Array.from(k.values()), isFetching: m.some((e) => e?.isFetching) || I?.isFetching === !0 },
        }
      }),
      _ = (0, a.vU)(l.u, ({ hostId: e, appIds: t, roots: n }, { get: a, scope: o }) => {
        let r = a(i.tT)
        return {
          queryKey: ["plugins", "imported-details", e, r, t, n],
          queryFn: async ({ signal: a }) => {
            let i = []
            for (let s of g()(t, 4)) {
              a.throwIfAborted()
              let t = await Promise.all(
                s.map(async (t) => {
                  let { plugin_id: i } = await o.queryClient.fetchQuery((0, b.cO)(t, r))
                  if (null == i) return null
                  a.throwIfAborted()
                  let s = await o.queryClient.fetchQuery({
                    ...o.query.getOptions(y.Pc, (0, y.N$)({ hostId: e, pluginId: i, remotePluginId: i, roots: n })),
                    retry: !1,
                  })
                  return { ...(0, C.qA)(s), canonicalAppId: t }
                }),
              )
              i.push(...t.filter((e) => null != e))
            }
            return (a.throwIfAborted(), i)
          },
          retry: !1,
          staleTime: I.D.ONE_MINUTE,
        }
      }),
      S = (0, a.vU)(l.u, (e, { get: t, scope: n }) => (0, o.bK)(n, e, void 0)),
      N = (0, a.i1)(l.u, (e, { get: t }) => {
        let n = e === c.fI,
          a = n ? t(u.M, e) : null,
          i = t(d.Vh, e),
          l = n ? a?.data?.connectors : [],
          p = i.data
        if (null == p || (null == l && (a?.error != null || 0 === p.length)))
          return a?.error != null || null != i.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  ;(a?.refetch(), i.refetch())
                },
              }
            : { data: void 0, status: "loading" }
        let g = [...(l ?? []), ...p]
        if (0 === g.length)
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let m = t(s.u9, e),
          h = m.data
        if (null == h)
          return null != m.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  m.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        if (!h.some((e) => "apps" === e.name && e.enabled))
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let f = t(S, e),
          v = f.data
        if (null == v)
          return null != f.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  f.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        let b = (0, u.p)({ apps: v, candidates: g })
        if (0 === b.length)
          return {
            data: { kind: "complete", setup: { appsRequiringConnection: [], importedPlugins: [] } },
            status: "ready",
          }
        let y = t(o.lb, e),
          x = y.data
        if (null == x)
          return null != y.error
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  y.refetch()
                },
              }
            : { data: void 0, status: "loading" }
        if (h.find((e) => "plugins" === e.name)?.enabled === !1) {
          let e = new Map(x.map((e) => [e.id, e]))
          return {
            data: {
              kind: "complete",
              setup: { appsRequiringConnection: b.filter((t) => !e.get(t.id)?.isAccessible), importedPlugins: [] },
            },
            status: "ready",
          }
        }
        if (e === c.fI || (0, r.hE)(e)) {
          let n = t(k, { hostId: e, apps: b })
          return "ready" !== n.status
            ? n
            : {
                status: "ready",
                data: {
                  kind: "targeted-plugins",
                  ...n.data,
                  setup: (0, O.R)({
                    candidates: g,
                    directoryApps: v,
                    plugins: n.data.plugins,
                    runtimeApps: x,
                    useCanonicalAppIds: !0,
                  }),
                },
              }
        }
        return { data: { candidates: g, directoryApps: v, kind: "plugin-directory", runtimeApps: x }, status: "ready" }
      })
    function M({ inputsResult: e, pluginDirectory: t }) {
      return "ready" !== e.status
        ? e
        : "plugin-directory" !== e.data.kind
          ? { data: e.data.setup, status: "ready" }
          : null != t.errorMessage
            ? {
                data: void 0,
                status: "error",
                retry: () => {
                  t.refetch()
                },
              }
            : t.isLoading
              ? { data: void 0, status: "loading" }
              : {
                  data: (0, O.R)({
                    candidates: e.data.candidates,
                    directoryApps: e.data.directoryApps,
                    plugins: t.plugins,
                    runtimeApps: e.data.runtimeApps,
                  }),
                  status: "ready",
                }
    }
  },
  W38p(e, t, n) {
    var a = n("QosV"),
      o = n("zTeN"),
      i = n("ueue"),
      r = n("B81s"),
      s = n("oeej"),
      l = n("ltay"),
      c = n("agQ0")
    function d(e) {
      return e.successes.some(u)
    }
    function u(e) {
      return "MCP_SERVER_CONFIG" === e.itemType || "PLUGINS" === e.itemType
    }
    function p(e) {
      return "claude-cowork" !== e
    }
    function g(e) {
      return "SESSIONS" === e.itemType
    }
    function m({
      allowUnknownProviderNames: e,
      appsRequiringConnection: t,
      connectors: n,
      histories: a,
      importedPlugins: o,
    }) {
      let i = (e) =>
          e
            .trim()
            .toLowerCase()
            .replaceAll(/[^a-z0-9]+/g, ""),
        r = new Set(
          a
            .filter((t) => "claude-cowork" !== t.providerId && (e || null != t.providerId))
            .flatMap((e) =>
              e.successes.flatMap((e) =>
                "MCP_SERVER_CONFIG" === e.itemType || "PLUGINS" === e.itemType
                  ? [e.source, e.target, e.title].flatMap((e) => (null == e ? [] : [i(e), i(e.split("@")[0] ?? e)]))
                  : [],
              ),
            ),
        )
      for (let { codexAppId: e, name: t } of n) (r.add(i(t)), null != e && r.add(i(e)))
      let s = (...e) => e.some((e) => null != e && r.has(i(e)))
      return {
        appsRequiringConnection: t.filter((e) => s(e.id, e.name, ...e.pluginDisplayNames)),
        importedPlugins: o.filter(({ app: e, plugin: t }) =>
          s(
            e.id,
            e.name,
            ...e.pluginDisplayNames,
            t.plugin.id,
            t.plugin.name,
            t.plugin.interface?.displayName,
            t.displayName,
          ),
        ),
      }
    }
    n.d(
      t,
      {},
      {
        K: function (e) {
          let t,
            n,
            u,
            h,
            f,
            v,
            b,
            y,
            x,
            A,
            C = (0, a.c)(36),
            { enabled: w, foregroundImport: I, hostId: O } = e
          C[0] !== w ? ((t = { enabled: w }), (C[0] = w), (C[1] = t)) : (t = C[1])
          let { data: k, error: _, isFetching: S, refetch: N } = (0, o._U)(s.ej, O, t),
            M =
              null == I
                ? (k ?? [])
                : (k ?? []).filter(
                    (e) =>
                      Number(e.completedAtMs) >= I.startedAtMs &&
                      (null == e.providerId || I.providerIds.some((t) => t === e.providerId)),
                  ),
            E =
              null != I &&
              M.some(
                (e) =>
                  ("claude-code" === e.providerId ||
                    (null == e.providerId && 1 === I.providerIds.length && "claude-code" === I.providerIds[0])) &&
                  e.successes.some(g),
              ),
            { data: T } = (0, o._U)(s.Vh, O, { enabled: w && E }),
            j = E && (T?.length ?? 0) > 0
          C[2] !== w || C[3] !== I?.providerIds || C[4] !== O
            ? ((n = w && I?.providerIds.includes("claude-cowork") === !0 && "local" === O),
              (C[2] = w),
              (C[3] = I?.providerIds),
              (C[4] = O),
              (C[5] = n))
            : (n = C[5])
          let R = n
          C[6] !== R ? ((u = { enabled: R }), (C[6] = R), (C[7] = u)) : (u = C[7])
          let { data: P, error: D, isFetching: L } = (0, o._U)(l.M, O, u),
            z =
              R && null != I
                ? (P?.connectors ?? []).filter(
                    (e) =>
                      "remoteMcpServersConfig" === e.source &&
                      "importedAtMs" in e &&
                      "number" == typeof e.importedAtMs &&
                      e.importedAtMs >= I.startedAtMs,
                  )
                : [],
            U =
              j ||
              M.some((e) =>
                e.successes.some(
                  (t) =>
                    "MCP_SERVER_CONFIG" === t.itemType ||
                    "PLUGINS" === t.itemType ||
                    ("SESSIONS" === t.itemType &&
                      ("claude-cowork" === e.providerId || null == e.providerId) &&
                      z.length > 0),
                ),
              ),
            F = w && (null == I || U),
            B = (0, o._U)(c.u, O, { enabled: F }),
            q = F && "ready" === B.status && "plugin-directory" === B.data.kind,
            {
              availablePlugins: G,
              errorMessage: V,
              isFetching: W,
              isLoading: K,
              refetch: H,
            } = (0, i.Z_)(O, void 0, { enabled: q }),
            X = (0, c.O)({
              inputsResult: B,
              pluginDirectory: { errorMessage: V, isLoading: K, plugins: G, refetch: H },
            }),
            Q =
              "ready" === X.status &&
              null != I &&
              ((q && W) || (F && "ready" === B.status && "targeted-plugins" === B.data.kind && B.data.isFetching))
                ? "loading"
                : X.status,
            Y = (0, s.eB)(M),
            { data: Z, error: J, isFetching: $, refetch: ee } = (0, o._U)(r.lt, O, { enabled: w && Y }),
            et = X.data,
            en = {
              appsRequiringConnection: et?.appsRequiringConnection ?? [],
              importedPlugins: et?.importedPlugins ?? [],
            },
            { appsRequiringConnection: ea, importedPlugins: eo } =
              null == I
                ? en
                : m({
                    ...en,
                    allowUnknownProviderNames: I.providerIds.some(p),
                    connectors: [...z, ...(E ? (T ?? []) : [])],
                    histories: M,
                  }),
            ei = (null == I || U) && (ea.length > 0 || eo.length > 0),
            er = (0, s.W$)({ histories: M, mcpServerStatuses: Z?.data ?? [] })
          C[8] !== I?.providerIds
            ? ((h = (e) =>
                null == e.providerId
                  ? I?.providerIds.includes("claude-cowork") !== !0
                  : "claude-cowork" !== e.providerId),
              (C[8] = I?.providerIds),
              (C[9] = h))
            : (h = C[9])
          let es = M.filter(h),
            el = m({
              allowUnknownProviderNames: !1,
              appsRequiringConnection: ea,
              connectors: E ? (T ?? []) : [],
              histories: es,
              importedPlugins: eo,
            }),
            ec = (0, s.W$)({ histories: es, mcpServerStatuses: Z?.data ?? [] }).length > 0,
            ed = j || es.some(d),
            eu =
              ("ready" === Q && (el.appsRequiringConnection.length > 0 || el.importedPlugins.length > 0)) ||
              ec ||
              (ed && "error" === X.status),
            ep = R && (L || (null == P && null == D)),
            eg = "local" === O && null == P && null == D
          C[10] !== M ? ((f = (0, s.uD)(M)), (C[10] = M), (C[11] = f)) : (f = C[11])
          let em = f,
            eh = "ready"
          Y && null == Z && (eh = null == J ? "loading" : "error")
          let ef =
              w &&
              ((null == k && null == _) ||
                (null != I && S) ||
                (ep && !eu) ||
                (F && "loading" === Q && !(null != I && eg && "loading" === B.status && ec)) ||
                (Y && !(null != I && ei) && ((null != I && $) || (null == Z && null == J)))),
            ev = null
          ;(!ef &&
            (ei
              ? (ev = "apps")
              : er.length > 0
                ? (ev = "mcps")
                : null != I && U && "error" === X.status && (ev = "apps")),
            C[12] !== X
              ? ((v = () => {
                  "error" === X.status && X.retry()
                }),
                (C[12] = X),
                (C[13] = v))
              : (v = C[13]),
            C[14] !== N
              ? ((b = () => {
                  N()
                }),
                (C[14] = N),
                (C[15] = b))
              : (b = C[15]),
            C[16] !== ee
              ? ((y = () => {
                  ee()
                }),
                (C[16] = ee),
                (C[17] = y))
              : (y = C[17]))
          let eb = F ? Q : "ready",
            ey = null == _ ? "ready" : "error"
          return (
            C[18] !== eh || C[19] !== ey || C[20] !== eb
              ? ((x = { apps: eb, hooks: ey, mcps: eh }), (C[18] = eh), (C[19] = ey), (C[20] = eb), (C[21] = x))
              : (x = C[21]),
            C[22] !== ea ||
            C[23] !== U ||
            C[24] !== em ||
            C[25] !== Y ||
            C[26] !== M ||
            C[27] !== eo ||
            C[28] !== ev ||
            C[29] !== ef ||
            C[30] !== er ||
            C[31] !== x ||
            C[32] !== v ||
            C[33] !== b ||
            C[34] !== y
              ? ((A = {
                  appsRequiringConnection: ea,
                  hasImportedConnectorSetup: U,
                  hasImportedHooks: em,
                  hasImportedMcpServers: Y,
                  histories: M,
                  importedPlugins: eo,
                  initialTab: ev,
                  isLoading: ef,
                  mcpServerNamesRequiringAuthentication: er,
                  retryImportedApps: v,
                  retryImportHistories: b,
                  retryMcpServerStatuses: y,
                  tabStatus: x,
                }),
                (C[22] = ea),
                (C[23] = U),
                (C[24] = em),
                (C[25] = Y),
                (C[26] = M),
                (C[27] = eo),
                (C[28] = ev),
                (C[29] = ef),
                (C[30] = er),
                (C[31] = x),
                (C[32] = v),
                (C[33] = b),
                (C[34] = y),
                (C[35] = A))
              : (A = C[35]),
            A
          )
        },
      },
    )
  },
  RltM(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("CtJU"),
      r = n("hueg")
    let s = /\bhttps?:\/\/[^\s"'<>]+/giu,
      l = /[),.;:!?]+$/u
    function c(e) {
      let t,
        n,
        i = (0, o.c)(4),
        { children: r } = e
      return (
        i[0] !== r
          ? ((t = (function (e) {
              let t = [],
                n = 0
              for (let a of e.matchAll(s)) {
                let o = a[0],
                  i = a.index,
                  r = o.replace(l, "")
                0 !== r.length &&
                  (i > n && t.push({ index: n, kind: "text", text: e.slice(n, i) }),
                  t.push({ href: r, index: i, kind: "link" }),
                  (n = i + r.length))
              }
              return (n < e.length && t.push({ index: n, kind: "text", text: e.slice(n) }), t)
            })(r).map(d)),
            (i[0] = r),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[2] = t), (i[3] = n)) : (n = i[3]),
        n
      )
    }
    function d(e) {
      switch (e.kind) {
        case "text":
          return (0, a.jsx)("span", { children: e.text }, `text-${e.index}`)
        case "link":
          return (0, a.jsx)(r.t, { href: e.href, children: e.href }, `link-${e.index}`)
      }
    }
    n.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            n,
            r = (0, o.c)(5),
            { label: s, children: l } = e
          return (
            r[0] !== l
              ? ((t =
                  "string" == typeof l
                    ? (0, a.jsx)("span", { className: "min-w-0", children: (0, a.jsx)(c, { children: l }) })
                    : l),
                (r[0] = l),
                (r[1] = t))
              : (t = r[1]),
            r[2] !== s || r[3] !== t
              ? ((n = (0, a.jsx)("dl", {
                  className: "@container",
                  children: (0, a.jsx)(i.l, {
                    className: "[--detail-row-font-size:var(--codex-chat-font-size)]",
                    label: s,
                    children: t,
                  }),
                })),
                (r[2] = s),
                (r[3] = t),
                (r[4] = n))
              : (n = r[4]),
            n
          )
        },
        i: c,
      },
    )
  },
  W27Y(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("ykqL"),
      r = n("zTeN"),
      s = n("I3F6"),
      l = n("zd8w"),
      c = n("Wf1j"),
      d = n("oyxz"),
      u = n("Dgwo"),
      p = n("ghCo"),
      g = n("HOLv"),
      m = n("OWtl"),
      h = n("kpIY"),
      f = n("J75w")
    n.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            n,
            v,
            b,
            y,
            x,
            A,
            C,
            w,
            I,
            O,
            k,
            _ = (0, o.c)(42),
            { ApprovalCard: S, conversationId: N, hostId: M, onRequestSettled: E, request: T, requestId: j } = e,
            R = (0, r.gh)(m.u),
            P = (0, c.A)(),
            D = (0, r.Ul)(f.f) ?? (0, h.TB)(f.A, !1)
          _[0] !== N || _[1] !== M || _[2] !== j
            ? ((t = JSON.stringify([M, N, j])), (_[0] = N), (_[1] = M), (_[2] = j), (_[3] = t))
            : (t = _[3])
          let L = t,
            z = (0, l.useRef)(null),
            [U, F] = (0, l.useState)(null),
            B = "high" === T.riskLevel
          _[4] !== D || _[5] !== P || _[6] !== T.subtitle
            ? ((n =
                [
                  !1 === D
                    ? P.formatMessage({
                        id: "composer.computerUseAppApproval.disclosure",
                        defaultMessage:
                          "Computer Use lets ChatGPT use apps on your computer. It may take screenshots of app contents while working. You can choose which apps ChatGPT can access, stop actions at any time, and control whether screenshots are used for training.",
                        description:
                          "First-use disclosure explaining native Computer Use app access, screenshot capture, and user controls, shown until the user approves an app",
                      })
                    : void 0,
                  T.subtitle,
                ]
                  .filter(Boolean)
                  .join("\n\n") || void 0),
              (_[4] = D),
              (_[5] = P),
              (_[6] = T.subtitle),
              (_[7] = n))
            : (n = _[7])
          let q = n
          _[8] !== N || _[9] !== M || _[10] !== E || _[11] !== j || _[12] !== L || _[13] !== R
            ? ((v = (e, t) => {
                let n = void 0 === t ? null : t
                z.current !== L &&
                  ((z.current = L),
                  F(L),
                  "accept" === e && R.set(f.f, !0),
                  (0, u.V)(R, M)
                    .replyWithMcpServerElicitationResponse(
                      N,
                      j,
                      (0, s.Se)(e, "accept" === e && null != n ? { persist: n } : null),
                    )
                    .then(
                      () => E(e),
                      () => {
                        z.current === L && ((z.current = null), F(null))
                      },
                    ))
              }),
              (_[8] = N),
              (_[9] = M),
              (_[10] = E),
              (_[11] = j),
              (_[12] = L),
              (_[13] = R),
              (_[14] = v))
            : (v = _[14])
          let G = v
          ;(_[15] !== B || _[16] !== T.connectorName
            ? ((b = B
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(g.I, { className: "shrink-0 text-warning", "aria-hidden": !1, asset: i.h }),
                      (0, a.jsx)("span", {
                        className: "font-medium text-warning",
                        children: (0, a.jsx)(d.A, {
                          id: "composer.mcpToolCallApproval.elevatedRiskLabel",
                          defaultMessage: "Elevated Risk",
                          description: "Header label for elevated-risk MCP approval requests",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("img", {
                        alt: "",
                        className: "icon-sm rounded-[3px] object-contain",
                        draggable: !1,
                        src: p,
                      }),
                      (0, a.jsx)("span", { children: T.connectorName }),
                    ],
                  })),
              (_[15] = B),
              (_[16] = T.connectorName),
              (_[17] = b))
            : (b = _[17]),
            _[18] !== T.appDisplayName
              ? ((y = (0, a.jsx)(d.A, {
                  id: "composer.computerUseAppApproval.title.chatgpt",
                  defaultMessage: "Allow ChatGPT to use {appDisplayName}?",
                  description: "Title asking whether ChatGPT may use an app through Computer Use",
                  values: { appDisplayName: T.appDisplayName },
                })),
                (_[18] = T.appDisplayName),
                (_[19] = y))
              : (y = _[19]),
            _[20] !== q
              ? ((x = q && (0, a.jsx)("span", { className: "whitespace-pre-line", children: q })),
                (_[20] = q),
                (_[21] = x))
              : (x = _[21]))
          let V = U === L
          return (
            _[22] !== G || _[23] !== T.persistModes
              ? ((A = T.persistModes.includes("always")
                  ? {
                      label: (0, a.jsx)(d.A, {
                        id: "composer.computerUseAppApproval.action.alwaysApprove",
                        defaultMessage: "Always allow",
                        description: "Button label for always approving Computer Use access to an app",
                      }),
                      onClick: () => G("accept", "always"),
                    }
                  : void 0),
                (_[22] = G),
                (_[23] = T.persistModes),
                (_[24] = A))
              : (A = _[24]),
            _[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, a.jsx)(d.A, {
                  id: "composer.computerUseAppApproval.action.approve",
                  defaultMessage: "Allow this conversation",
                  description: "Primary action label for approving Computer Use access to an app",
                })),
                (_[25] = C))
              : (C = _[25]),
            _[26] !== G || _[27] !== T.persistModes
              ? ((w = () => {
                  G("accept", T.persistModes.includes("session") ? "session" : null)
                }),
                (_[26] = G),
                (_[27] = T.persistModes),
                (_[28] = w))
              : (w = _[28]),
            _[29] !== G
              ? ((I = () => {
                  G("decline")
                }),
                (_[29] = G),
                (_[30] = I))
              : (I = _[30]),
            _[31] !== w || _[32] !== I || _[33] !== V || _[34] !== A
              ? ((O = { isLoading: V, leadingAction: A, approveLabel: C, onApprove: w, onDeny: I }),
                (_[31] = w),
                (_[32] = I),
                (_[33] = V),
                (_[34] = A),
                (_[35] = O))
              : (O = _[35]),
            _[36] !== S || _[37] !== O || _[38] !== b || _[39] !== y || _[40] !== x
              ? ((k = (0, a.jsx)(S, { headerContent: b, title: y, subtitle: x, actions: O })),
                (_[36] = S),
                (_[37] = O),
                (_[38] = b),
                (_[39] = y),
                (_[40] = x),
                (_[41] = k))
              : (k = _[41]),
            k
          )
        },
      },
    )
  },
  QSwz(e, t, n) {
    var a = n("QosV"),
      o = n("zTeN"),
      i = n("zd8w"),
      r = n("TSib"),
      s = n("ipIJ"),
      l = n("Sd8U"),
      c = n("Oj9r"),
      d = n("vzzY"),
      u = n("ALWK")
    n.d(
      t,
      {},
      {
        r: function (e) {
          let t,
            n,
            p,
            g,
            m,
            h = (0, a.c)(14)
          h[0] !== e ? ((t = void 0 === e ? {} : e), (h[0] = e), (h[1] = t)) : (t = h[1])
          let { transcriptMcpAppIds: f, blockedWidgetSource: v, shouldBlockExternalEgress: b } = t,
            y = void 0 !== b && b,
            x = (0, o.gh)(c.GD),
            A = (0, o.gh)(l.PR),
            C = (0, o.Ul)(u.tA),
            w = (0, o.Ul)(r.ib)
          return (
            h[2] !== w || h[3] !== v || h[4] !== A || h[5] !== C || h[6] !== x || h[7] !== y || h[8] !== f
              ? ((n = () => {
                  for (let [e, t] of ("chatgpt-thread" === x.value.routeKind &&
                    (0, s.EQ)(
                      A,
                      w.filter((e) => y || (null != v && (e.widgetSource ?? "descriptor") === v)),
                    ),
                  C))
                    (y ||
                      (null != v && (t.content.mcpAppScope.widgetSource ?? "descriptor") === v) ||
                      (t.hostedInThreadScrollLayout && f?.has(e) === !1)) &&
                      (0, u.$u)(x, e)
                }),
                (p = [w, v, f, A, C, x, y]),
                (h[2] = w),
                (h[3] = v),
                (h[4] = A),
                (h[5] = C),
                (h[6] = x),
                (h[7] = y),
                (h[8] = f),
                (h[9] = n),
                (h[10] = p))
              : ((n = h[9]), (p = h[10])),
            (0, i.useLayoutEffect)(n, p),
            h[11] !== x
              ? ((g = () => {
                  ;(0, d.TG)(x)
                }),
                (m = [x]),
                (h[11] = x),
                (h[12] = g),
                (h[13] = m))
              : ((g = h[12]), (m = h[13])),
            (0, i.useLayoutEffect)(g, m),
            null
          )
        },
      },
    )
  },
  JyWv(e, t, n) {
    var a = n("ASxG"),
      o = n("Lz8z"),
      i = n("b5As"),
      r = n("pdFc")
    let s = ["enable_notifications", "create_automation", "triage_github_prs", "catch_up_linear"],
      l = [
        "enable_notifications",
        "create_automation",
        "summarize_inbox",
        "catch_up_updates_and_blockers",
        "summarize_current_priorities",
      ],
      c = {
        product_management: "review_roadmaps_and_projects",
        design: "review_design_briefs",
        marketing: "review_campaigns",
        sales: "review_account_plans",
        finance: "review_forecasts",
        operations: "review_operating_plans",
        people_hr: "review_people_plans_and_policies",
        legal: "review_contracts_and_policies",
        student: "review_class_materials",
      },
      d = a.array(a.string().min(1))
    function u(e) {
      return (null == e ? void 0 : c[e]) ?? "review_business_and_project_plans"
    }
    function p(e, t) {
      return [...((0, r.JJ)(e) ? s : l), u(t)]
    }
    function g({
      canEnableNotifications: e,
      candidateItemIds: t,
      hideGoogleWorkspaceItems: n,
      mailProvider: a,
      plan: r,
      taskDefinitions: s,
    }) {
      let l = (0, o.tN)(a, r)
      return Array.from(new Set(t))
        .filter((t) => {
          if ("enable_notifications" === t) return e
          if (
            "create_project" === t ||
            "explore_codex" === t ||
            "claude_import" === t ||
            "finish_connecting_imported_tools" === t
          )
            return !0
          let a = s[t]
          return (
            null != a &&
            ("google" !== l || !Object.values(a.pluginSlots ?? {}).some((e) => !(0, i.sM)(e, r) || (n && i.nt.has(e))))
          )
        })
        .slice(0, 10)
    }
    n.d(
      t,
      {},
      {
        B8: "2214619544",
        OE: g,
        PL: u,
        Yx: function (e, t) {
          for (let n of null == t ? ["general"] : [t, "general"]) {
            let t = d.safeParse(e.get(n, []))
            if (t.success && t.data.length > 0) return { parameter: n, taskIds: t.data }
          }
          return null
        },
        pi: function ({
          assignmentParameter: e,
          canEnableNotifications: t,
          generalAssignment: n,
          hideGoogleWorkspaceItems: a,
          mailProvider: o,
          plan: i,
          representativeRole: r,
          roleAssignment: s,
          roles: l,
          taskDefinitions: c,
        }) {
          let u,
            m = d.safeParse(s),
            h = d.safeParse(n),
            f = m.success && m.data.length > 0 ? m.data : null,
            v = h.success && h.data.length > 0 ? h.data : null,
            b = void 0 === e ? r : e,
            y = null
          null != b && null != f ? ((y = b), (u = f)) : null != v ? ((y = "general"), (u = v)) : (u = p(l, r))
          let x = g({
            canEnableNotifications: t,
            candidateItemIds: u,
            hideGoogleWorkspaceItems: a,
            mailProvider: o,
            plan: i,
            taskDefinitions: c,
          })
          return x.length > 0
            ? { exposureParameter: y, itemIds: x }
            : {
                exposureParameter: y,
                itemIds: g({
                  canEnableNotifications: t,
                  candidateItemIds: p(l, r),
                  hideGoogleWorkspaceItems: a,
                  mailProvider: o,
                  plan: i,
                  taskDefinitions: c,
                }),
              }
        },
      },
    )
  },
  gKHu(e, t, n) {
    var a = n("Qgfj")
    let o = {
      explore_codex: {
        origin: "checked_in",
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.exploreCodex",
            defaultMessage: "Explore what your assistant can do",
            description: "Plugin-free onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.exploreCodex.prompt",
            defaultMessage: "Help me explore what you can do and suggest three useful ways to get started",
            description:
              "Composer prefill prompt for the plugin-free onboarding checklist item that helps users explore their assistant",
          }),
        },
      },
      create_automation: {
        origin: "checked_in",
        pluginSlots: { chatApp: "slack", mailApp: "gmail" },
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.createAutomation",
            defaultMessage: "Set up a daily update",
            description: "Onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.createAutomation.providerPrompt",
            defaultMessage: `Create a Scheduled Task called "Weekday Morning Brief" that runs every weekday at 7:30 AM in my local time zone.

First, make a lightweight read from {chatApp} and {mailApp}. If either needs access, open its connection flow instead of asking me to connect in chat. Once connected, retry and continue.

Once both sources are connected, generate today's real brief immediately using live connected sources. If live source data is unavailable, say which source is unavailable instead of generating a dummy brief.

For the first-run output only, start with a short, celebratory confirmation that I've created my first Scheduled Task. Briefly explain what a Scheduled Task is and summarize this task's name, schedule, timezone, and connected sources in a clear, polished format. Then transition into today's brief. Keep this introduction concise, and do not repeat it on future runs.

For each run:
- Search since the last successful run, or the past 3 days if this is the first run.
- Do not rescan older items unless needed to understand a thread, document, or citation.
- For {mailApp}, search the primary inbox only. Exclude junk, deleted items, and promotional or social categories.
- For {chatApp}, prioritize DMs, mentions, threads I'm in, and high-signal channels only.
- Stop once you have enough candidates to identify the top 3–5 important items.
- Do not perform exhaustive searches.
- Do not show connector checks, tool details, search notes, or process commentary.
- Return exactly one final response when done.

Brief format:

# Morning Brief

## Key items
- Include only the top 3–5 items likely to need attention today.
- Combine {chatApp} and {mailApp} into one list.
- For each item, include: what it is, why it matters, suggested action, urgency, and a direct link or citation.

## Later / FYI
- Optional, max 3 bullets, only if useful.

If there are no important items in the lookback window, say: "No urgent items found."

Keep it fast, concise, and skimmable. No calendar section. No process notes.`,
            description: "Composer prefill prompt for the daily update automation onboarding checklist item",
          }),
        },
      },
      summarize_inbox: {
        origin: "checked_in",
        pluginSlots: { mailApp: "gmail" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.summarizeInbox",
            defaultMessage: "Summarize my inbox",
            description: "Onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.summarizeInbox.prompt",
            defaultMessage: "Summarize my unread emails and draft responses",
            description: "Composer prefill prompt for the mail inbox summary onboarding checklist item",
          }),
        },
      },
      triage_github_prs: {
        origin: "checked_in",
        pluginSlots: { codeHost: "github" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.triageGithubPrs",
            defaultMessage: "Triage GitHub PRs",
            description: "Onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.triageGithubPrs.prompt",
            defaultMessage: "Inspect PRs, triage issues, debug failing checks, and prepare code changes for review",
            description: "Composer prefill prompt for the GitHub PR triage onboarding checklist item",
          }),
        },
      },
      catch_up_updates_and_blockers: {
        origin: "checked_in",
        pluginSlots: { chatApp: "slack" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.catchUpUpdatesAndBlockers",
            defaultMessage: "Catch me up on updates and blockers",
            description: "Onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.catchUpUpdatesAndBlockers.prompt",
            defaultMessage: "catch me up on recent decisions and open questions.",
            description: "Composer prefill prompt for the messaging updates and blockers onboarding checklist item",
          }),
        },
      },
      catch_up_linear: {
        origin: "checked_in",
        pluginSlots: { projectTracker: "linear" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.catchUpLinear",
            defaultMessage: "Catch me up on Linear",
            description: "Onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.catchUpLinear.prompt",
            defaultMessage:
              "Summarize recent activity on my assigned Linear issues. Highlight decisions, blockers, changed priorities, and anything waiting on me. Suggest next steps.",
            description: "Composer prefill prompt for the Linear issue activity onboarding checklist item",
          }),
        },
      },
      summarize_current_priorities: {
        origin: "checked_in",
        pluginSlots: { workspaceApp: "notion" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.summarizeCurrentPriorities",
            defaultMessage: "Summarize current priorities",
            description: "Onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.summarizeCurrentPriorities.prompt",
            defaultMessage: "Create a Notion doc summarizing my current priorities and next steps",
            description: "Composer prefill prompt for the Notion current priorities onboarding checklist item",
          }),
        },
      },
      review_business_and_project_plans: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans",
            defaultMessage: "Review the latest plans",
            description: "Onboarding checklist item in the sidebar",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.prompt",
            defaultMessage: "review the latest business or project results and plans, and flag opportunities",
            description: "Composer prefill prompt for the file storage plans review onboarding checklist item",
          }),
        },
      },
      review_roadmaps_and_projects: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.productManagement",
            defaultMessage: "Review roadmaps and projects",
            description: "File storage review onboarding checklist item for product roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.productManagement.prompt",
            defaultMessage:
              "review recent roadmap docs, specs, research summaries, metrics, and planning docs. Summarize changes, risks, open questions, and recommended product decisions.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for product roles",
          }),
        },
      },
      review_design_briefs: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.design",
            defaultMessage: "Review design briefs",
            description: "File storage review onboarding checklist item for design roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.design.prompt",
            defaultMessage:
              "review recent briefs, research summaries, brand guidelines, and launch docs. Summarize goals, constraints, feedback, risks, and next design moves.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for design roles",
          }),
        },
      },
      review_campaigns: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.marketing",
            defaultMessage: "Review campaigns",
            description: "File storage review onboarding checklist item for marketing roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.marketing.prompt",
            defaultMessage:
              "review recent campaign briefs, messaging docs, creative assets, content calendars, and performance readouts. Summarize changes, opportunities, risks, and next actions.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for marketing roles",
          }),
        },
      },
      review_account_plans: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.sales",
            defaultMessage: "Review account plans",
            description: "File storage review onboarding checklist item for sales roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.sales.prompt",
            defaultMessage:
              "review recent account plans, call notes, proposals, QBR decks, and pipeline reviews. Summarize deal changes, risks, and next sales actions.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for sales roles",
          }),
        },
      },
      review_forecasts: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.finance",
            defaultMessage: "Review forecasts",
            description: "File storage review onboarding checklist item for finance roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.finance.prompt",
            defaultMessage:
              "review recent forecasts, budgets, models, business reviews, and performance readouts. Summarize changes, assumptions, risks, and recommended finance actions.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for finance roles",
          }),
        },
      },
      review_operating_plans: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.operations",
            defaultMessage: "Review operating plans",
            description: "File storage review onboarding checklist item for operations roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.operations.prompt",
            defaultMessage:
              "review recent trackers, project plans, SOPs, status reports, and operating reviews. Summarize changes, blockers, risks, owners, and next actions.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for operations roles",
          }),
        },
      },
      review_people_plans_and_policies: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.peopleHr",
            defaultMessage: "Review plans and policies",
            description: "File storage review onboarding checklist item for people and HR roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.peopleHr.prompt",
            defaultMessage:
              "review recent hiring plans, onboarding docs, policy drafts, survey summaries, and manager guides. Summarize changes, gaps, risks, and next People actions.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for people and HR roles",
          }),
        },
      },
      review_contracts_and_policies: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.legal",
            defaultMessage: "Review contracts and policies",
            description: "File storage review onboarding checklist item for legal roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.legal.prompt",
            defaultMessage:
              "review recent contracts, redlines, policy drafts, negotiation notes, and approval docs. Summarize key changes, obligations, risks, and next legal actions.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for legal roles",
          }),
        },
      },
      review_class_materials: {
        origin: "checked_in",
        pluginSlots: { fileStorageApp: "google-drive" },
        prependPluginMentions: !0,
        messages: {
          label: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.student",
            defaultMessage: "Review class materials",
            description: "File storage review onboarding checklist item for student roles",
          }),
          prompt: (0, a.zR)({
            id: "sidebarOnboardingChecklist.reviewLatestPlans.student.prompt",
            defaultMessage:
              "review recent lecture notes, readings, assignments, project docs, and shared class materials. Summarize key points, deadlines, gaps, and next study steps.",
            description:
              "Composer prefill prompt for the file storage review onboarding checklist item for student roles",
          }),
        },
      },
    }
    n.d(t, {}, { i: o })
  },
  k6B9(e, t, n) {
    var a = n("DBCl"),
      o = n("HJEB"),
      i = n("Qgfj"),
      r = n("YWcr"),
      s = n("MX6A"),
      l = n("Lz8z"),
      c = n("JyWv"),
      d = n("gKHu"),
      u = n("WUxr")
    let p = { "chatgpt-for-finance": "ChatGPT Financial Services" },
      g = {
        id: "enable_notifications",
        action: "enable_notifications",
        message: (0, i.zR)({
          id: "sidebarOnboardingChecklist.enableNotifications",
          defaultMessage: "Enable notifications",
          description: "Onboarding checklist item in the sidebar",
        }),
      },
      m = {
        id: "create_project",
        action: "create_project",
        message: (0, i.zR)({
          id: "sidebarOnboardingChecklist.createProject",
          defaultMessage: "Create a project",
          description: "Onboarding checklist item for creating a project",
        }),
      },
      h = {
        id: "claude_import",
        action: "import_claude",
        message: (0, i.zR)({
          id: "sidebarOnboardingChecklist.importFromClaude",
          defaultMessage: "Import from Claude",
          description: "Claude import item in the sidebar onboarding checklist",
        }),
      }
    function f(e, t) {
      return "string" == typeof e.message ? e.message : t.formatMessage(e.message)
    }
    function v(e) {
      return (0, s.xR)(e.label, (0, r.vt)(e.pluginId))
    }
    function b(e, t, n) {
      return "string" != typeof e.prompt ? t.formatMessage(e.prompt, n) : y(e.prompt, n)
    }
    function y(e, t) {
      let n = e
      for (let [e, a] of Object.entries(t ?? {})) n = n.replaceAll(`{${e}}`, a)
      return n
    }
    n.d(
      t,
      {},
      {
        EU: function (e, t) {
          let n = b(e, t, e.promptValues)
          return !0 !== e.prependPluginMentions || null == e.pluginMentions
            ? n
            : `${e.pluginMentions.map(v).join(" ")} ${n}`
        },
        HV: function ({ items: e, remotePluginIdsByName: t }) {
          let n = new Map()
          for (let o of e)
            if ("start_prompt" === o.action)
              for (let e of o.pluginMentions ?? []) {
                let o = (0, a.zAW)(e.pluginId),
                  i = null == o ? e.pluginId : e.pluginId.slice(0, -o.length - 1),
                  r = t?.[e.pluginId] ?? t?.[i]
                null != r && n.set(e.pluginId, r)
              }
          return n
        },
        N3: f,
        S_: function ({
          items: e,
          locale: t,
          mailProvider: n,
          plan: i = null,
          representativeRole: r = null,
          taskDefinitions: s,
        }) {
          let f = [],
            b = (0, l.tN)(n, i)
          for (let n of e) {
            let e,
              i,
              y,
              x,
              A,
              { id: C } = n
            if ("create_project" === C) {
              f.push({ ...m, message: n.snapshot?.type === "sidebar_project" ? n.snapshot.label : m.message })
              continue
            }
            if ("claude_import" === C) {
              f.push({ ...h, message: n.snapshot?.type === "sidebar_claude_import" ? n.snapshot.label : h.message })
              continue
            }
            if ("enable_notifications" === C) {
              f.push({ ...g, message: n.snapshot?.type === "sidebar_notification" ? n.snapshot.label : g.message })
              continue
            }
            let w = "review_latest_plans" === C ? (0, c.PL)(r) : C,
              I = "explore_codex" === C ? d.i.explore_codex : s[w],
              O = "review_latest_plans" === C || n.snapshot?.type !== "sidebar" ? null : n.snapshot,
              k = !1
            if (null != O)
              ((i = O.instructions),
                (y = !0 === O.isAutoSubmitEnabled),
                (e = O.label),
                (x = O.pluginSlots),
                (k = !0 === O.prependPluginMentions),
                (A = O.prompt))
            else {
              if (null == I) continue
              ;((e = (0, u.oy)(I, "label", t)),
                (i = "remote" === I.origin ? I.instructions : void 0),
                (y = "remote" !== I.origin || !1 !== I.is_auto_submit_enabled),
                (x = I.pluginSlots),
                (k = "checked_in" === I.origin && !0 === I.prependPluginMentions),
                (A = (0, u.oy)(I, "prompt", t)))
            }
            let _ = {
              action: "start_prompt",
              id: C,
              instructions: i,
              isAutoSubmitEnabled: y,
              message: e,
              pluginSlots: x,
              prependPluginMentions: k,
              prompt: A,
            }
            if (null == x) {
              f.push(_)
              continue
            }
            let S = {},
              N = []
            for (let [e, t] of Object.entries(x)) {
              let n = (function (e) {
                let t = (0, a.zAW)(e),
                  n = null == t ? e : e.slice(0, -t.length - 1)
                return { label: `@${p[n] ?? (0, o.l)(n)}`, pluginId: null == t ? `${e}@${a.xiH}` : e }
              })((0, l.H3)(t, b))
              ;((S[e] = v(n)), N.push(n))
            }
            f.push({ ..._, pluginMentions: N, promptValues: S })
          }
          return f
        },
        dk: function (e) {
          return null == e.instructions ? void 0 : y(e.instructions, e.promptValues)
        },
        jd: function (e, t) {
          if ("create_project" === e.action) return { type: "sidebar_project", label: f(e, t) }
          if ("import_claude" === e.action) return { type: "sidebar_claude_import", label: f(e, t) }
          if ("enable_notifications" === e.action) return { type: "sidebar_notification", label: f(e, t) }
          let n =
            null == e.pluginSlots ? void 0 : Object.fromEntries(Object.keys(e.pluginSlots).map((e) => [e, `{${e}}`]))
          return {
            type: "sidebar",
            isAutoSubmitEnabled: !1 !== e.isAutoSubmitEnabled,
            instructions: e.instructions,
            label: f(e, t),
            pluginSlots: e.pluginSlots,
            prependPluginMentions: !0 === e.prependPluginMentions || void 0,
            prompt: b(e, t, n),
          }
        },
        r1: function ({ disabledRemotePluginIds: e, enabled: t, items: n, remotePluginIds: a }) {
          return t
            ? n.filter(
                (t) =>
                  "start_prompt" !== t.action ||
                  !t.pluginMentions?.some(({ pluginId: t }) => {
                    let n = a.get(t)
                    return null != n && e.has(n)
                  }),
              )
            : n
        },
        vI: function (e) {
          if ("start_prompt" !== e.action || e.pluginMentions?.length !== 1) return null
          let [t] = e.pluginMentions,
            n = (0, a.zAW)(t.pluginId)
          return null == n ? t.pluginId : t.pluginId.slice(0, -n.length - 1)
        },
      },
    )
  },
  WUxr(e, t, n) {
    var a = n("ASxG"),
      o = n("lphL"),
      i = n("OTo7")
    n("gKHu")
    let r = new Set([
        "create_project",
        "enable_notifications",
        "explore_codex",
        "finish_connecting_imported_tools",
        "review_latest_plans",
        "claude_import",
        ...i.wJ,
      ]),
      s = a.object({
        id: a.string().min(1),
        defaultMessage: a.string().min(1),
        description: a.string().min(1),
        translations: a.record(a.string(), a.string().min(1)).optional(),
      }),
      l = a
        .object({
          kind: a.literal("prompt").optional(),
          is_auto_submit_enabled: a.boolean().optional(),
          instructions: a.string().min(1).optional(),
          remotePluginIds: a
            .record(a.string().min(1), a.string().min(1))
            .optional()
            .catch(void 0),
          pluginSlots: a.record(a.string().min(1), a.string().min(1)).optional(),
          messages: a.object({ label: s, prompt: s }),
        })
        .superRefine((e, t) => {
          ;[e.messages.label.defaultMessage, ...Object.values(e.messages.label.translations ?? {})].some(
            (e) => d(e)?.size !== 0,
          ) &&
            t.addIssue({ code: "custom", message: "Label copy cannot contain variables", path: ["messages", "label"] })
          let n = new Set(Object.keys(e.pluginSlots ?? {})),
            a = d(e.instructions ?? ""),
            o = [e.messages.prompt.defaultMessage, ...Object.values(e.messages.prompt.translations ?? {})]
          ;(null == a ||
            o.some((e) => {
              let t = d(e)
              if (null == t) return !0
              let o = new Set([...a, ...t])
              return o.size !== n.size || Array.from(n).some((e) => !o.has(e))
            })) &&
            t.addIssue({
              code: "custom",
              message: "Prompt and instruction variables must exactly match pluginSlots",
              path: ["pluginSlots"],
            })
        }),
      c = a.record(a.string().min(1), a.unknown())
    function d(e) {
      let t = new Set(),
        n = e.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (e, n) => (t.add(n), ""))
      return /[{}]/.test(n) ? null : t
    }
    n.d(
      t,
      {},
      {
        GX: function (e) {
          return Object.fromEntries(
            Object.values(e).flatMap((e) => ("remote" === e.origin ? Object.entries(e.remotePluginIds ?? {}) : [])),
          )
        },
        oy: function (e, t, n) {
          if ("checked_in" === e.origin) return e.messages[t]
          let a = e.messages[t]
          return {
            id: `${a.id}.statsig.${n}`,
            defaultMessage: a.translations?.[o.X[n] ?? n] ?? a.defaultMessage,
            description: a.description,
          }
        },
        rP: function (e) {
          let t = c.safeParse(e)
          if (!t.success) return {}
          let n = {}
          for (let [e, a] of Object.entries(t.data)) {
            if (r.has(e)) continue
            let t = l.safeParse(a)
            t.success && (n[e] = { ...t.data, origin: "remote" })
          }
          return n
        },
      },
    )
  },
  kEpr(e, t, n) {
    var a = n("zTeN"),
      o = n("OWtl")
    let i = (0, a.vP)(o.u, !1),
      r = (0, a.vP)(o.u, !1)
    n.d(t, {}, { i: r, s: i })
  },
  WWNi(e, t, n) {
    let a
    var o = n("zTeN"),
      i = n("OWtl"),
      r = n("kEpr")
    let s = (0, o.vP)(i.u, "not-determined")
    function l() {
      ;(clearTimeout(a), (a = void 0))
    }
    n.d(
      t,
      {},
      {
        l7: function (e) {
          ;(e.set(s, "disabled"),
            l(),
            (a = setTimeout(() => {
              ;((a = void 0), e.set(r.i, !1), e.set(r.s, !0))
            }, 2e3)))
        },
        mt: s,
        uZ: function (e) {
          ;(l(), e.set(r.i, !1), e.set(r.s, !0))
        },
      },
    )
  },
  lphL(e, t, n) {
    n.d(
      t,
      {},
      {
        X: {
          "bg-BG": "bg",
          "bn-BD": "bn",
          "bs-BA": "bs",
          "ca-ES": "ca",
          "cs-CZ": "cs",
          "da-DK": "da",
          "de-DE": "de",
          "el-GR": "el",
          "es-419": "es-419",
          "es-ES": "es",
          "et-EE": "et",
          "fi-FI": "fi",
          "fr-CA": "fr-CA",
          "fr-FR": "fr",
          "gu-IN": "gu",
          "hi-IN": "hi",
          "hr-HR": "hr",
          "hu-HU": "hu",
          "hy-AM": "hy",
          "id-ID": "id",
          "is-IS": "is",
          "it-IT": "it",
          "ja-JP": "ja",
          "ka-GE": "ka",
          "kn-IN": "kn",
          "ko-KR": "ko",
          "lv-LV": "lv",
          "mk-MK": "mk",
          "mr-IN": "mr",
          "ms-MY": "ms",
          "my-MM": "my",
          "nb-NO": "nb",
          "nl-NL": "nl",
          "pl-PL": "pl",
          "pt-BR": "pt",
          "pt-PT": "pt-PT",
          "ro-RO": "ro",
          "ru-RU": "ru",
          "sk-SK": "sk",
          "sl-SI": "sl",
          "so-SO": "so",
          "sq-AL": "sq",
          "sr-RS": "sr",
          "sv-SE": "sv",
          "sw-TZ": "sw",
          "ta-IN": "ta",
          "te-IN": "te",
          "th-TH": "th",
          "tr-TR": "tr",
          "uk-UA": "uk",
          "vi-VN": "vi",
          "zh-CN": "zh",
          "zh-HK": "zh-HK",
          "zh-TW": "zh-Hant",
        },
      },
    )
  },
  Lz8z(e, t, n) {
    var a = n("zTeN"),
      o = n("GaA7"),
      i = n("q77y"),
      r = n("OWtl"),
      s = n("rvFo"),
      l = n("vw1R")
    let c = {
        gmail: "outlook-email",
        "google-calendar": "outlook-calendar",
        "google-drive": "sharepoint",
        slack: "teams",
      },
      d = ["mail-provider", "email-domain"],
      u = (0, a.vU)(r.u, (e) => ({
        enabled: null != e,
        queryKey: [...d, e],
        queryFn: ({ signal: t }) => {
          let n = o.appServices?.mailProvider
          return null == e || null == n ? Promise.resolve(null) : (0, i.P)(n.getForEmailDomain(e), t)
        },
        retry: 2,
        staleTime: s.D.FIVE_MINUTES,
      }))
    n.d(
      t,
      {},
      {
        H3: function (e, t) {
          return "microsoft" !== t ? e : (c[e] ?? e)
        },
        dm: u,
        lp: function ({ debugOverride: e, detectedProvider: t, emailDomain: n, isError: a }) {
          return e ?? t ?? (null === t || null == n || a ? "other" : null)
        },
        rm: function (e) {
          if (null == e) return null
          let t = e.lastIndexOf("@")
          if (t <= 0) return null
          let n = e
            .slice(t + 1)
            .trim()
            .toLowerCase()
          return 0 === n.length ? null : n
        },
        tN: function (e, t) {
          return "other" !== e ? e : (0, l.o)(t) ? "microsoft" : "google"
        },
      },
    )
  },
  b5As(e, t, n) {
    var a = n("LjYy")
    let o = new Set(["gmail", "google-calendar", "google-drive"]),
      i = new Set([a.x.FREE, a.x.GO])
    n.d(
      t,
      {},
      {
        Po: function (e, t) {
          return "chatgpt" === t || (0 === e.apps.length && 0 === e.appTemplates.length)
        },
        nt: o,
        sM: function (e, t, n = null) {
          return null == t || ((null == n || n.includes(t)) && !(i.has(t) && o.has(e)))
        },
      },
    )
  },
  Mnx9(e, t, n) {
    n.d(
      t,
      {},
      {
        n: function () {
          let e = globalThis.window?.electronBridge?.getDesktopUserAgent?.()
          return { "x-openai-use-sheep": "1", ...(e ? { "User-Agent": e } : {}) }
        },
      },
    )
  },
  BHkq(e, t, n) {
    var a = n("ABep"),
      o = n("QosV")
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            i,
            r = (0, o.c)(7),
            { answer: s, attachment: l } = e
          return (
            r[0] !== l ? ((t = null != l && (0, a.jsx)(l, {})), (r[0] = l), (r[1] = t)) : (t = r[1]),
            r[2] !== s
              ? ((n = (0, a.jsx)("div", {
                  className: "flex w-full justify-end",
                  children: (0, a.jsx)("span", { className: "rounded-3xl bg-text/5 px-3 py-2", children: s }),
                })),
                (r[2] = s),
                (r[3] = n))
              : (n = r[3]),
            r[4] !== t || r[5] !== n
              ? ((i = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [t, n] })),
                (r[4] = t),
                (r[5] = n),
                (r[6] = i))
              : (i = r[6]),
            i
          )
        },
      },
    )
  },
  S1hE(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zd8w"),
      r = n("cWXs")
    n.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            n,
            s,
            l,
            c,
            d,
            u = (0, o.c)(25),
            {
              animate: p,
              children: g,
              className: m,
              completionFallbackMs: h,
              components: f,
              fadeSegmentDelayMs: v,
              onComplete: b,
            } = e,
            y = void 0 === h ? 2500 : h,
            x = void 0 === v ? 24 : v,
            A = (0, i.useRef)(null)
          u[0] !== b
            ? ((t = () => {
                b?.()
              }),
              (u[0] = b),
              (u[1] = t))
            : (t = u[1])
          let C = (0, i.useEffectEvent)(t),
            w = null != b
          return (
            u[2] !== p || u[3] !== C || u[4] !== y || u[5] !== w
              ? ((n = () => {
                  if (!p || !w) return
                  let e = window.setTimeout(() => {
                    A.current === e && ((A.current = null), C())
                  }, y)
                  return (
                    (A.current = e),
                    () => {
                      ;(window.clearTimeout(e), A.current === e && (A.current = null))
                    }
                  )
                }),
                (u[2] = p),
                (u[3] = C),
                (u[4] = y),
                (u[5] = w),
                (u[6] = n))
              : (n = u[6]),
            u[7] !== p || u[8] !== g || u[9] !== y || u[10] !== w
              ? ((s = [p, g, y, w]), (u[7] = p), (u[8] = g), (u[9] = y), (u[10] = w), (u[11] = s))
              : (s = u[11]),
            (0, i.useEffect)(n, s),
            u[12] !== p || u[13] !== w || u[14] !== b
              ? ((l = (e) => {
                  if (!p || !w || null == A.current || !(e.target instanceof HTMLElement)) return
                  let t = e.target.style.getPropertyValue("--fade-delay")
                  if ("" === t) return
                  let n = Number.parseFloat(t)
                  Array.from(e.currentTarget.querySelectorAll('[style*="--fade-delay"]')).some(
                    (e) => Number.parseFloat(e.style.getPropertyValue("--fade-delay")) > n,
                  ) || (window.clearTimeout(A.current), (A.current = null), b())
                }),
                (u[12] = p),
                (u[13] = w),
                (u[14] = b),
                (u[15] = l))
              : (l = u[15]),
            u[16] !== p || u[17] !== g || u[18] !== m || u[19] !== f || u[20] !== x
              ? ((c = (0, a.jsx)(r.K, {
                  className: m,
                  components: f,
                  fadeSegmentDelayMs: x,
                  fadeSegmentMaxDelayMs: 800,
                  isStreaming: p,
                  children: g,
                })),
                (u[16] = p),
                (u[17] = g),
                (u[18] = m),
                (u[19] = f),
                (u[20] = x),
                (u[21] = c))
              : (c = u[21]),
            u[22] !== l || u[23] !== c
              ? ((d = (0, a.jsx)("div", { onAnimationEnd: l, children: c })), (u[22] = l), (u[23] = c), (u[24] = d))
              : (d = u[24]),
            d
          )
        },
      },
    )
  },
  UbHS(e, t, n) {
    var a = n("zTeN"),
      o = n("OWtl"),
      i = n("HriZ")
    let r = (0, a.z8)("OnboardingScope", { parent: o.u }),
      s = (0, a.vP)(r, () => i.bJ.Start),
      l = (0, a.vP)(r, () => null),
      c = (0, a.vP)(r, () => null),
      d = (0, a.vP)(r, !1),
      u = (0, a.vP)(r, !1),
      p = (0, a.vP)(r, () => null),
      g = (0, a.vP)(r, () => null)
    n.d(t, {}, { Cj: l, KI: u, MD: r, Xp: p, iq: g, u6: d, w3: c, zG: s })
  },
  HriZ(e, t, n) {
    var a = n("ASxG"),
      o = n("j6in"),
      i = n("OTo7"),
      r = n("IZMR")
    let s = [
        "default",
        "engineering",
        "product_management",
        "finance",
        "marketing",
        "sales",
        "operations",
        "people_hr",
        "legal",
        "data_science",
        "design",
        "student",
        "something_else",
      ],
      l = ["coding", "non_coding"],
      c = a.object({
        roleSelectionSkipped: a.literal(!0).optional(),
        state: a.object({
          completedOnboardingEntrypoint: a.literal("life_sciences").optional(),
          completedConversationalOnboarding: a.literal(!0).optional(),
          completedConversationalOnboardingTaskId: i.Ll.nullable().optional(),
          completedConversationalOnboardingTaskSnapshot: i.MV.nullable().optional(),
          conversationalOnboardingSkipped: a.boolean().optional(),
          onboardingCreditRewardWarningShown: a.boolean().optional(),
          roles: a.array(a.enum(s)),
          personalizedSuggestionsEnabled: a.boolean(),
          workMode: a.enum(l).nullable(),
        }),
        options: a.object({ focusComposer: a.boolean().optional(), prefillPrompt: a.string().optional() }).optional(),
      }),
      d = {
        Start: "start",
        WelcomeAnimation: "welcome-animation",
        FinanceWelcome: "finance-welcome",
        RosalindWelcome: "rosalind-welcome",
        TeenWelcome: "teen-welcome",
        TeenInterests: "teen-interests",
        TeenPrompts: "teen-prompts",
        ConversationalOnboarding: "conversational-onboarding",
        RoleSelection: "role-selection",
        AgentMigrationSourceSelection: "agent-migration-source-selection",
        AgentMigrationItemSelection: "agent-migration-item-selection",
        Complete: "complete",
      },
      u = a.object({ step: a.literal(d.FinanceWelcome) }),
      p = a.object({ step: a.literal(d.RosalindWelcome), continueWithoutLifeSciencesRole: a.literal(!0).optional() }),
      g = a.object({ step: a.literal(d.TeenWelcome) }),
      m = a.object({ step: a.literal(d.TeenInterests), interests: a.array(a.enum(r.Z)) }),
      h = a.object({ step: a.literal(d.TeenPrompts), completion: c }),
      f = a.object({
        step: a.literal(d.ConversationalOnboarding),
        completedOnboardingEntrypoint: a.literal("life_sciences").optional(),
        completedConversationalOnboardingTaskId: i.Ll.nullable(),
        completedConversationalOnboardingTaskSnapshot: i.MV.nullable(),
        onboardingCreditRewardWarningShown: a.boolean(),
        roles: a.array(a.enum(s)),
        personalizedSuggestionsEnabled: a.boolean(),
        skipRemainingOnboarding: a.boolean(),
        conversationalOnboardingSkipped: a.boolean().optional(),
        workMode: a.enum(l).nullable(),
      }),
      v = a.object({
        step: a.literal(d.RoleSelection),
        roles: a.array(a.enum(s)),
        personalizedSuggestionsEnabled: a.boolean(),
        skipped: a.literal(!0).optional(),
        workMode: a.enum(l).nullable(),
      }),
      b = a.object({
        step: a.literal(d.AgentMigrationSourceSelection),
        providerIds: a.array(a.enum(o.t_)),
        skipped: a.boolean().optional(),
      }),
      y = a.object({ step: a.literal(d.AgentMigrationItemSelection), action: a.enum(["imported", "skipped"]) }),
      x = a.discriminatedUnion("step", [u, p, g, m, h, f, v, b, y])
    n.d(t, {}, { Ev: x, bJ: d })
  },
  IZMR(e, t, n) {
    n.d(
      t,
      {},
      {
        J: function (e, t) {
          return e.includes(t) ? e.filter((e) => e !== t) : [...e, t]
        },
        Z: [
          "animals",
          "fitness",
          "school",
          "art_creative",
          "beauty_style",
          "science",
          "money",
          "gaming",
          "music",
          "sports",
          "coding",
          "other",
        ],
      },
    )
  },
  P8f7(e, t, n) {
    n.d(
      t,
      {},
      {
        F: function ({
          platform: e,
          getComputerUseStatus: t,
          computerUseAvailable: n,
          computerHistoryAvailable: a,
          getComputerHistoryStatus: o,
          isComputerHistoryAvailabilityLoading: i,
          localFilesAvailable: r,
          getLocalFilesStatus: s,
        }) {
          return [
            {
              id: "computer-history",
              status: "macOS" === e && a ? o() : "macOS" === e && i ? "checking" : "unavailable",
            },
            { id: "computer-use", status: n ? t() : "unavailable" },
            { id: "local-files", status: r ? s() : "unavailable" },
          ]
        },
        R: function (e) {
          return e.some(({ status: e }) => "checking" === e)
            ? null
            : e.filter(({ status: e }) => "enabled" !== e && "unavailable" !== e).map(({ id: e }) => e)
        },
      },
    )
  },
  A5O4(e, t, n) {
    var a = n("iRMi"),
      o = n("yGJW"),
      i = n("WFY2")
    let r = new WeakMap(),
      s = new WeakMap()
    function l(e) {
      return s.get(e.node)
    }
    function c(e, t) {
      u(
        e,
        t,
        a.CodexConversationalOnboardingFailureKind.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_PLUGIN_UNAVAILABLE,
      )
    }
    function d({ scope: e, action: t, failureKind: n, selectedTask: i }) {
      ;(0, o.yy)(e, a.CodexConversationalOnboardingLifecycleEvent, {
        action: t,
        failureKind: n,
        sourceAttributionId: l(e),
        taskId: i ?? void 0,
        taskType: null == i ? void 0 : h(i),
      })
    }
    function u(e, t, n, o = "task") {
      p({
        scope: e,
        accessType: m(t),
        action:
          "capability" === o
            ? a.CodexConversationalOnboardingAccessAction.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_FAILED
            : a.CodexConversationalOnboardingAccessAction.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FAILED,
        failureKind: n,
        task: t,
      })
    }
    function p({ scope: e, accessType: t, action: n, failureKind: i, task: r }) {
      ;(0, o.yy)(e, a.CodexConversationalOnboardingAccessEvent, {
        accessType: t,
        action: n,
        failureKind: i,
        sourceAttributionId: l(e),
        taskId: r,
        taskType: null == r ? void 0 : h(r),
      })
    }
    function g({ scope: e, action: t, failureKind: n, task: i }) {
      ;(0, o.yy)(e, a.CodexConversationalOnboardingExecutionEvent, {
        action: t,
        failureKind: n,
        sourceAttributionId: l(e),
        taskId: i,
        taskType: h(i),
      })
    }
    function m(e) {
      switch (e) {
        case "computer_use":
          return a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_COMPUTER_USE
        case "desktop_note":
          return a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_DESKTOP
        case "csv_chart":
        case "data_science_csv_chart":
          return a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CSV_PICKER
        case "hold_next_free_hour":
        case "hold_next_free_hour_personalized":
          return a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CALENDAR_APP
        case "send_message_to_self":
        case "send_message_to_self_personalized":
          return a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_MESSAGING_APP
        default:
          return a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_UNSPECIFIED
      }
    }
    function h(e) {
      switch (e) {
        case "computer_use":
          return a.CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_COMPUTER_USE
        case "desktop_note":
          return a.CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_DESKTOP_NOTE
        case "csv_chart":
        case "data_science_csv_chart":
          return a.CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_CSV_CHART
        case "hold_next_free_hour":
        case "hold_next_free_hour_personalized":
          return a.CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_HOLD_NEXT_FREE_HOUR
        case "send_message_to_self":
        case "send_message_to_self_personalized":
          return a.CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_SEND_MESSAGE_TO_SELF
        default:
          return a.CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_UNSPECIFIED
      }
    }
    n.d(
      t,
      {},
      {
        $e: function (e, t) {
          ;(0, o.yy)(e, a.CodexConversationalOnboardingRoleEvent, {
            action: a.CodexConversationalOnboardingRoleAction.CODEX_CONVERSATIONAL_ONBOARDING_ROLE_ACTION_SELECTED,
            roleType: t,
            sourceAttributionId: l(e),
          })
        },
        $z: function (e, t, n) {
          g({
            scope: e,
            action:
              n?.isRevert === !0
                ? a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_STARTED
                : a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_STARTED,
            task: t,
          })
        },
        BZ: function (e) {
          ;(s.set(e.node, crypto.randomUUID()),
            d({
              scope: e,
              action:
                a.CodexConversationalOnboardingLifecycleAction.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_STARTED,
            }))
        },
        CQ: function (e, t, n = "task") {
          u(
            e,
            t,
            a.CodexConversationalOnboardingFailureKind.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_REQUEST_FAILED,
            n,
          )
        },
        I_: function (e, t) {
          ;(0, o.yy)(e, a.CodexConversationalOnboardingTaskEvent, {
            action: a.CodexConversationalOnboardingTaskAction.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_SELECTED,
            sourceAttributionId: l(e),
            taskType: h(t),
            taskId: t,
          })
        },
        J4: function (e, t, n = "task") {
          p({
            scope: e,
            accessType: m(t),
            action:
              "capability" === n
                ? a.CodexConversationalOnboardingAccessAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_COMPLETED
                : a.CodexConversationalOnboardingAccessAction.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_COMPLETED,
            task: t,
          })
        },
        Kj: function (e, t) {
          g({
            scope: e,
            action:
              a.CodexConversationalOnboardingExecutionAction.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
            failureKind:
              a.CodexConversationalOnboardingFailureKind
                .CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_COMPLETION_MISSING,
            task: t,
          })
        },
        Lu: function (e, t) {
          g({
            scope: e,
            action:
              a.CodexConversationalOnboardingExecutionAction.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_CANCELLED,
            task: t,
          })
        },
        OY: function (e, t, n) {
          let a = r.get(e.node)
          ;(null == a && ((a = new Set()), r.set(e.node, a)),
            a.has(t) ||
              (a.add(t),
              i.v.info("Conversational onboarding plugin task hidden", { safe: { pluginName: n, task: t } }),
              c(e, t)))
        },
        S1: function (e, t) {
          d({
            scope: e,
            action:
              a.CodexConversationalOnboardingLifecycleAction.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_SKIPPED,
            selectedTask: t,
          })
        },
        Sj: function (e, t) {
          ;(0, o.yy)(e, a.CodexConversationalOnboardingTaskEvent, {
            action:
              a.CodexConversationalOnboardingTaskAction.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_REVERT_CLICKED,
            sourceAttributionId: l(e),
            taskType: h(t),
            taskId: t,
          })
        },
        Uc: function (e, t, n, o) {
          p({
            scope: e,
            accessType:
              "computer-history" === t
                ? a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_COMPUTER_HISTORY
                : a.CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_LOCAL_FILES,
            action: {
              requested:
                a.CodexConversationalOnboardingAccessAction
                  .CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_REQUESTED,
              completed:
                a.CodexConversationalOnboardingAccessAction
                  .CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_COMPLETED,
              denied:
                a.CodexConversationalOnboardingAccessAction
                  .CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_DENIED,
              failed:
                a.CodexConversationalOnboardingAccessAction
                  .CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_FAILED,
            }[n],
            failureKind:
              "failed" === n
                ? (o ??
                  a.CodexConversationalOnboardingFailureKind
                    .CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_REQUEST_FAILED)
                : void 0,
          })
        },
        ZT: function (e, t) {
          p({
            scope: e,
            accessType: m(t),
            action: a.CodexConversationalOnboardingAccessAction.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_DENIED,
            task: t,
          })
        },
        c9: function (e, t, n = "task") {
          p({
            scope: e,
            accessType: m(t),
            action:
              "capability" === n
                ? a.CodexConversationalOnboardingAccessAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_FOLLOW_UP_REQUESTED
                : a.CodexConversationalOnboardingAccessAction.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_REQUESTED,
            task: t,
          })
        },
        dE: function (e, t, n) {
          g({
            scope: e,
            action:
              n?.isRevert === !0
                ? a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_FAILED
                : a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
            failureKind:
              a.CodexConversationalOnboardingFailureKind.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
            task: t,
          })
        },
        d_: function (e, t, n) {
          g({
            scope: e,
            action:
              n?.isRevert === !0
                ? a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_COMPLETED
                : a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_COMPLETED,
            task: t,
          })
        },
        lD: function (e, t) {
          d({
            scope: e,
            action:
              a.CodexConversationalOnboardingLifecycleAction.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_COMPLETED,
            selectedTask: t,
          })
        },
        ln: l,
        pL: function (e, t) {
          d({
            scope: e,
            action:
              a.CodexConversationalOnboardingLifecycleAction.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_FAILED,
            failureKind:
              a.CodexConversationalOnboardingFailureKind.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_START_FAILED,
            selectedTask: t,
          })
        },
        pf: function (e, t) {
          u(
            e,
            t,
            a.CodexConversationalOnboardingFailureKind
              .CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_HOST_SERVICE_UNAVAILABLE,
          )
        },
        rf: c,
        t6: function (e, t) {
          p({
            scope: e,
            accessType: m(t),
            action: a.CodexConversationalOnboardingAccessAction.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_STARTED,
            task: t,
          })
        },
        wW: function (e, t, n) {
          g({
            scope: e,
            action:
              n?.isRevert === !0
                ? a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_REVERT_FAILED
                : a.CodexConversationalOnboardingExecutionAction
                    .CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
            failureKind:
              a.CodexConversationalOnboardingFailureKind.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_UNSPECIFIED,
            task: t,
          })
        },
      },
    )
  },
  skUx(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("yu23"),
      r = n("Wf1j"),
      s = n("oyxz"),
      l = n("FvYa"),
      c = n("ygO2"),
      d = n("HOLv"),
      u = n("S1hE"),
      p = n("h5BB")
    function g(e) {
      let t,
        n,
        i,
        r,
        s = (0, o.c)(16),
        {
          declinedMessage: l,
          intro: c,
          permissionStatus: d,
          request: p,
          requestError: g,
          requestFailed: m,
          showRequest: h,
          onIntroComplete: f,
        } = e
      if ("denied" === d) {
        let e
        return (s[0] !== l ? ((e = (0, a.jsx)(a.Fragment, { children: l })), (s[0] = l), (s[1] = e)) : (e = s[1]), e)
      }
      return "allowed" === d
        ? null
        : (s[2] !== c || s[3] !== f
            ? ((t = (0, a.jsx)(u.H, { animate: !0, onComplete: f, children: c })), (s[2] = c), (s[3] = f), (s[4] = t))
            : (t = s[4]),
          s[5] !== p || s[6] !== h
            ? ((n = h ? (0, a.jsx)("div", { className: "w-full max-w-[536px]", children: p }) : null),
              (s[5] = p),
              (s[6] = h),
              (s[7] = n))
            : (n = s[7]),
          s[8] !== g || s[9] !== m || s[10] !== h
            ? ((i = h && m ? (0, a.jsx)("p", { className: "text-sm", children: g }) : null),
              (s[8] = g),
              (s[9] = m),
              (s[10] = h),
              (s[11] = i))
            : (i = s[11]),
          s[12] !== t || s[13] !== n || s[14] !== i
            ? ((r = (0, a.jsxs)(a.Fragment, { children: [t, n, i] })),
              (s[12] = t),
              (s[13] = n),
              (s[14] = i),
              (s[15] = r))
            : (r = s[15]),
          r)
    }
    n.d(
      t,
      {},
      {
        BZ: function (e) {
          let t,
            n,
            u,
            m,
            h,
            f,
            v,
            b,
            y,
            x,
            A,
            C,
            w,
            I,
            O = (0, o.c)(40),
            { app: k, connection: _, permissionStatus: S, pluginName: N, showRequest: M, onIntroComplete: E } = e,
            T = "connecting" === _.phase,
            j = (0, r.A)()
          ;(O[0] !== k.name
            ? ((t = (0, a.jsx)("p", {
                children: (0, a.jsx)(s.A, {
                  id: "electron.onboarding.conversationalOnboarding.appAccessDeclined",
                  defaultMessage: "No problem — you can connect {appName} later. You’re all set.",
                  description: "Closing message when app access is declined during conversational onboarding",
                  values: { appName: k.name },
                }),
              })),
              (O[0] = k.name),
              (O[1] = t))
            : (t = O[1]),
            O[2] !== k.name || O[3] !== j
              ? ((n = j.formatMessage(
                  {
                    id: "electron.onboarding.conversationalOnboarding.appPermissionIntro",
                    defaultMessage: "I can do that, but I’ll need access to {appName}. Mind connecting it?",
                    description: "Explanation before requesting app access during conversational onboarding",
                  },
                  { appName: k.name },
                )),
                (O[2] = k.name),
                (O[3] = j),
                (O[4] = n))
              : (n = O[4]))
          let R = T ? _.onCancel : _.onDismiss
          ;(O[5] !== T
            ? ((u = T
                ? (0, a.jsx)(s.A, {
                    id: "electron.onboarding.conversationalOnboarding.appPermissionCancel",
                    defaultMessage: "Cancel",
                    description: "Button that cancels an app connection attempt during conversational onboarding",
                  })
                : (0, a.jsx)(s.A, {
                    id: "electron.onboarding.conversationalOnboarding.appPermissionNotNow",
                    defaultMessage: "Not now",
                    description: "Button that declines connecting an app during conversational onboarding",
                  })),
              (O[5] = T),
              (O[6] = u))
            : (u = O[6]),
            O[7] !== R || O[8] !== u
              ? ((m = (0, a.jsx)(c.$, { color: "secondary", size: "medium", onClick: R, children: u })),
                (O[7] = R),
                (O[8] = u),
                (O[9] = m))
              : (m = O[9]))
          let P = T ? void 0 : _.onConnect
          ;(O[10] !== T
            ? ((h = T
                ? (0, a.jsx)(s.A, {
                    id: "electron.onboarding.conversationalOnboarding.appPermissionConnecting",
                    defaultMessage: "Connecting…",
                    description: "Button label while an app connection is in progress during conversational onboarding",
                  })
                : (0, a.jsx)(s.A, {
                    id: "electron.onboarding.conversationalOnboarding.appPermissionConnect",
                    defaultMessage: "Connect",
                    description: "Button that connects an app during conversational onboarding",
                  })),
              (O[10] = T),
              (O[11] = h))
            : (h = O[11]),
            O[12] !== T || O[13] !== P || O[14] !== h
              ? ((f = (0, a.jsx)(c.$, { color: "primary", loading: T, size: "medium", onClick: P, children: h })),
                (O[12] = T),
                (O[13] = P),
                (O[14] = h),
                (O[15] = f))
              : (f = O[15]),
            O[16] !== m || O[17] !== f
              ? ((v = (0, a.jsxs)(a.Fragment, { children: [m, f] })), (O[16] = m), (O[17] = f), (O[18] = v))
              : (v = O[18]),
            O[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, a.jsx)("span", {
                  className: "inline-flex items-center justify-center",
                  children: (0, a.jsx)(d.I, { "aria-hidden": !1, asset: i.k }),
                })),
                (O[19] = b))
              : (b = O[19]),
            O[20] !== N
              ? ((y = (0, a.jsx)(l.R, { alt: "", className: "size-6", knownAppId: N, fallback: b })),
                (O[20] = N),
                (O[21] = y))
              : (y = O[21]),
            O[22] !== k.name
              ? ((x = (0, a.jsx)(s.A, {
                  id: "electron.onboarding.conversationalOnboarding.appPermissionDescription",
                  defaultMessage: "Use {appName} to complete this task",
                  description: "Generic description of app access requested during conversational onboarding",
                  values: { appName: k.name },
                })),
                (O[22] = k.name),
                (O[23] = x))
              : (x = O[23]),
            O[24] !== k.name
              ? ((A = (0, a.jsx)(s.A, {
                  id: "electron.onboarding.conversationalOnboarding.connectNamedApp",
                  defaultMessage: "Connect {appName}",
                  description: "Title of an app connection request during conversational onboarding",
                  values: { appName: k.name },
                })),
                (O[24] = k.name),
                (O[25] = A))
              : (A = O[25]),
            O[26] !== y || O[27] !== x || O[28] !== A || O[29] !== v
              ? ((C = (0, a.jsx)(p.B, { actions: v, icon: y, subtitle: x, title: A })),
                (O[26] = y),
                (O[27] = x),
                (O[28] = A),
                (O[29] = v),
                (O[30] = C))
              : (C = O[30]),
            O[31] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, a.jsx)(s.A, {
                  id: "electron.onboarding.conversationalOnboarding.appConnectFailed",
                  defaultMessage: "I couldn’t finish that connection. Try again or connect it later in Settings.",
                  description: "Error shown when an app connection cannot finish during conversational onboarding",
                })),
                (O[31] = w))
              : (w = O[31]))
          let D = "needs-connection" === _.phase && _.requestFailed
          return (
            O[32] !== E || O[33] !== S || O[34] !== M || O[35] !== t || O[36] !== C || O[37] !== D || O[38] !== n
              ? ((I = (0, a.jsx)(g, {
                  declinedMessage: t,
                  intro: n,
                  permissionStatus: S,
                  request: C,
                  requestError: w,
                  requestFailed: D,
                  showRequest: M,
                  onIntroComplete: E,
                })),
                (O[32] = E),
                (O[33] = S),
                (O[34] = M),
                (O[35] = t),
                (O[36] = C),
                (O[37] = D),
                (O[38] = n),
                (O[39] = I))
              : (I = O[39]),
            I
          )
        },
        W_: function (e) {
          let t,
            n,
            i,
            r = (0, o.c)(5),
            { onRetry: l } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)("p", {
                  children: (0, a.jsx)(s.A, {
                    id: "electron.onboarding.conversationalOnboarding.startError",
                    defaultMessage: "ChatGPT couldn’t start that task",
                    description: "Error shown when a conversational onboarding task cannot start",
                  }),
                })),
                (r[0] = t))
              : (t = r[0]),
            r[1] !== l
              ? ((n =
                  null == l
                    ? null
                    : (0, a.jsx)(c.$, {
                        color: "primary",
                        size: "medium",
                        onClick: l,
                        children: (0, a.jsx)(s.A, {
                          id: "electron.onboarding.conversationalOnboarding.tryAgain",
                          defaultMessage: "Try again",
                          description: "Button that retries a conversational onboarding task",
                        }),
                      })),
                (r[1] = l),
                (r[2] = n))
              : (n = r[2]),
            r[3] !== n
              ? ((i = (0, a.jsxs)("div", { className: "flex items-center gap-3", children: [t, n] })),
                (r[3] = n),
                (r[4] = i))
              : (i = r[4]),
            i
          )
        },
        gf: g,
      },
    )
  },
  QWBF(e, t, n) {
    n.d(t, { r: () => m })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("ThBa"),
      r = n("zd8w"),
      s = n("Wf1j"),
      l = n("oyxz"),
      c = n("ygO2"),
      d = n("HOLv"),
      u = n("wwME"),
      p = n("S1hE"),
      g = n("bnxy")
    function m(e) {
      let t,
        n,
        m,
        h,
        f,
        v,
        b,
        y,
        x,
        A,
        C,
        w,
        I,
        O,
        k,
        _,
        S,
        N,
        M,
        E,
        T,
        j,
        R = (0, o.c)(67),
        {
          animate: P,
          completionMessage: D,
          filePath: L,
          icon: z,
          introMessage: U,
          preview: F,
          typeLabel: B,
          onCompletionComplete: q,
          onIntroComplete: G,
          onOpen: V,
          onReveal: W,
        } = e,
        K = void 0 === P || P,
        H = (0, s.A)(),
        [X, Q] = (0, r.useState)(!1),
        { platform: Y } = (0, u.V)()
      if (R[0] !== K || R[1] !== L || R[2] !== H || R[3] !== U || R[4] !== G || R[5] !== Y || R[6] !== F) {
        let e
        ;((m = (0, g.Q0)(L)),
          R[16] !== H || R[17] !== Y
            ? ((e =
                "macOS" === Y
                  ? H.formatMessage({
                      id: "electron.onboarding.conversationalOnboarding.openInFinder",
                      defaultMessage: "Open in Finder",
                      description: "Button label for revealing an onboarding artifact in Finder",
                    })
                  : "windows" === Y
                    ? H.formatMessage({
                        id: "electron.onboarding.conversationalOnboarding.openInFileExplorer",
                        defaultMessage: "Open in File Explorer",
                        description: "Button label for revealing an onboarding artifact in File Explorer",
                      })
                    : H.formatMessage({
                        id: "electron.onboarding.conversationalOnboarding.openInFileManager",
                        defaultMessage: "Open in File Manager",
                        description: "Button label for revealing an onboarding artifact in the system file manager",
                      })),
              (R[16] = H),
              (R[17] = Y),
              (R[18] = e))
            : (e = R[18]),
          (n = e),
          (t =
            "macOS" === Y
              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAADmRJREFUeAGtWgmQXVWZ/s659229pqE7SRsInUAiiaY0GQsGlGFGhmXchhlLi6nAWFMDU1NTY2lZUi6FJW7ljiKWpZQlVFzQlIoLhagICBYiYkpDNpAQIEaydSfdr9/r99695xz//z/n3vf6dXcSoE/XyXnvvrP8+//950Zh/qZCt3c8+uiZyYqxt9Qqp11wuGnPrSVqZdOoNDW2mDoM8By8lOacirRuRBGmS0ChrN3+4bLe21edeLC15093/9+bLn060CKz5yO0u0XUzY40/Y97kujWh55s9RWmAG2o0x+c9aucW2D5i+Ii30spDassLB1Vj2OsO0u3rlwyc8Preno+CyahS2DdFETOOf1th2e2PtIc7WkoB620omHRaH0hzcvbVq1TG19Rmnn3CEZPV6pGz0w2pZOsaNy53s9P2ckn/5CkhUjFi0E0b2FIZhMth/6KQjGaj0YH4xQMkdVIHCyNPZFCpRgU7eVn6st19N218bllpZ7KmIjDPvGNN95oP3fcTe59rGUKJR1jEZqiU+stYNVyi1vPLWJA6xPOZ1qb9O9R43D/RIofPWFhEo1ez0jUewjpVSrdQ4IezDSROav7lnP77ry3ubJQVBqL1Kx1eNmwwhdeWcSLaWzs3ziU4HvbDJb2kW8whwZ25YZi/TMjqp9pF2J3pemV3/tNc4zMhj0Is7oLI/Mp7hPG7nnz9PEZhQ+uf/HKZOKuXVbA+y+KcajqnzmKJLu3N3vvS8z12Rx3VyO6rVRTJDCyP2tndWfCmFqRaDZ2z5uzjvpwv8VIl9m4kxA93++X9MV4+0ZgmozGkXn1WOXufF5/lKfHN23duuLBJ9IlMRmss3rBDd0JDpivNVPg8tV21j5O/hT9uXwfSTYd61Q+KnRS85+jRfxsZ5MmRzxf796Tlm+993dr9eiF//RmN2799kFyi9GnZiwuXa47iGdCldgxRxwbOn92HT1/TvNTWeNZLVN/03qFetPv38vnjIz9qz6MgddGzSCGRezlksPqsrf/NDx2Qew8nrQHzpnpNGjh/KUF1Bt+swJxeCweuiweb2KddXipgGBWI+Fg4xlOTIAlqbKRCTpVGzQ+fnAoFkelvpTkoWP2MS2A4PlpszyuttRKR8nDnerGp9CqM2T/Y7HIJA2H2yAgIQovoLHBa49virSyR5OppX5PyjFL42aiErHRU+CA5xQoq5imkejkM0jXJHqW0LBxiZ5LvGv7Q04f23OsUUssEepFrjJGndcAgiC4RRJs/F6NVGmdpm7YUu5m1Up4nDOGz9QLPUX86WvXY3zno7QJOVva/i1bw3ydvdShjxQvGrDefGR0npnOjjTFxZdvRpEAXEp5lWGECb/JfLTHIJ/2eaka0ElKAiGbUsSiIqLmjtRpU+7ELo7+Zgu2b3k/okpBdmaU2rmmQebzz2crBF8TaeUE81Ednam58+4H8PAjO3Dfw9uI8JSeW49GJSc5vy5ojrWg6Xl2Xit1LrZBx051WOY8wZ9VZkxE4EOjUOqHoTBp2JmYDt22jWrD4eKXFcWMMqI1a0tCippjbqUyBUgSu4piNEn0Bdo/yjKAdsKQpvSbWauPUi6PVrFjbydCrMZJsxQ7e6Qimm9E1byW4aDtIGyYSpxlZNN1i1yCKTPJcb4r1DGhScrE80jSJwZcxObmjV+n3uNdRELg9fzZ+lzCWzn6IKHCEI6NJD+2/XLOyM5FBUatYbFs6TmwiRXzMKnLMyvRgtdvoOgAdmQrjPnkZIV03RV/2EzOXr0Sdmo3Vp45Kiai4CMOb06sCV28mHj00DO1PgpZL7jYiaFGeRi1wft51K79nTepHazhDbc9j2TGIanPIIpjDww4etCcSaL8srNjgRFsXmK77CNa5TbcVqcnbNWaMdRaTRyskdGxdkN2zqyImY/IhFgrbOacXbIaQTTgBKB5e1JdJpopPA99qoDG8ZbYoKaSwYWoghBRC1GKNf1FTCde+mJCUoq4eczTOzFZDg63DO0XCdFsbpq4ZkY8PSygIExeQxOc8czz2bGEJTpIRf5AlqjtgFyqS+0ur6Gc2DWbAZtXSkRuGmNJkeqNJg1Y8S0/f4ESI5dM1JaYIPEoDxysXKbLKK7avPQlD4hzkQmxYTm2UeMt3oVdnLJ+E+Xmd4qcGb9mqq5xxSs0JlMtqs3jfCdlaIOzBVtgSmcXI0H60P4c3tuIbSrZNfbeQF867EflDq1mAeDusc2Npphs8HfLS5iuwyNK0xF1OgVxioCc05PmSGQ88WySaUCsynri2cliY332i1S2dZv4jBkxVzV7zFN+mLd2ueILDDrESibN2MtJdp51CBE4OSByUn153TnvS5H1RNtQEbLsYy3lH2ObDjtV3s7yW5gMVmbfQxXiggI4fK5boVFt2dxslMqmSSryeN+EBRk8PVHLISwXNpx9QywV+BG0m7CGrA0x1XpfyMpI1x45wcifCXO6Rk3+8tvdKYpcu1MSs9Qd9wIDLu1xvfVxn+lIiLCEGDphtzx6OGFCMhThGB9aXYAYcbY5Q9a84MDssfOLW2BsNjTedlMD56xQFE69jUxNO3z86jJqx712RVgIWjyZL4QQapS/EVTKdkAJnwM4K8c+JQeTeYmtRFJ/7mB+OsbpJoGU4KEBMtv1B53MlYOVkmA9xmnBAzmX06ukwI89N9bn6QUdax7Qf4KD88/WQ4g0lGVSL2exfAEWstDBvzOMMGy6TkumEMyV4Wv2KZ+JPZhzC4A5RxC3NNRH6NMgbSQShTgknkpVld1ysAbYBBheZAmqe30I9RhZFuHwIeNDcQhF7GMcMIzNihk/SrUm4dk43zlEGa+mbIx7+vDYB1diz08+jGJfma76Uh/KOuZ1r2k/y0AeYSdyZi6A6FpeElHKcT3rpCG6EcRz+5/Bhesuw76n98uaNOzFc4wkSJtXePzZiBMbpbxj+Pie5RrBmLIBcT50DqZ//wX8cfIveNU7bic8VBcI7DXhZenCmmytPDMuaMCHQmu9RAV+wEMQ/nzacIT7f/Fb3HbLVyghpjht5HQ0qWyN4wL5gJFMLPVFkLyvibWATIJQLuVbYZv6zj8aho3cOdwRxHzNO+9DNPZmNJ/4Ph799KuQJtO0kEhKfIHN60y4yMlG+Wx90rIkykSkTRmbKJBQSsxwmBwa0bjp41/C1794M8bHJ7D1vrvp6sSFEtTI2HJKzNAGgXomyEeIM01o7pgksxxYeficfeU+M17HhqvvwPDrb0bzyB7sumUtnv7FpyTEcI3ATCjjpdO5Vllv8C0xAUaepPaWz+ZDwzH++Ps/4Lq3/hd+fc89WL7iLGy55y5MTMwQUbQnZXW/hrREgjJJ7BkQu+K9qTKkKicuaRStPFjAE5UWM2lNz2DZxs0YXvdG7LzjbTj2yGdQ2/5V9K5/B4Y3XYf+ZavFLEzLBNjgfC0QMFapTPmBLrqOHK7hoZ/fjwd+9hNMHDlE950N/P8Nn8CGTa/Gkb9OoliqkGNGggxSKcY5lHJFZoWWZlPnZWVBq6NxJTL7UxuNqO4bp1kI1InNaZa06sOrr3sIk89uxzP3vhv1x25BbcfXEPWNojR6AYojG1EePAdxpZ8kF+OXvwKe+vMEDu5/CvuefBxHnj+AmRkqhoq9+Per/xf/8C9X4PhEFdXJBuJihWiMJMMyptIBirJwFV1oaRvjeM2ip6gFlgxWzFQ8XHFP0ddN897MdaTknBcqZNJaHT1Dq7DhmnvRrB7B0T0/wrEnfojqnrtR2PVDxJSJqUZHT7mC9/50AAPDQ+QzZQyevhwbX3cFzvvHN+Cs1aswebyKiaPTKBTIWaM4j1gZYLQiea9FNtMGOdgMod2e2GtgxaA+EA+46oOpG3w7QsSQtW7umFtUBkbptaJpsr1WsPSV12B007USZZL6MSTTR4mSaTIPgy3vG8XBiT4MntaPKKK7zVoTaauFyWN1csKiZFrWrs3AYmiaTT0Or5AUF+8au/alZDYcKKzgpVVDMw/GyXO77qqb1355gPQknGbS7h6DRaEjCQniDDaethritHFUQTRwhvjANFExtmoAR6spGnWO4U2ZGxdKUifzBgJurQ9coYbigOkhBOcA2V9jbBT48p1N9JcjYbZFAcRO7P2Bfu+1lzy7Zk2xTmnaSg1rwguMBUbm3oZubPu+TG7zSSvEAdlrRAPJjCVMVGnCSEwQ19FaXr9pfz1ifKFisnwjY6in+UUKh3eKNuWCxfY/t3DwqJJE2GpZd9GFRfzPW87byUpTm//efLg6QxxIeanDdcgJxtDlPsnq/PpEAFaYY9gFSd/PHmCtWClILDIYnL0HyG7f/BWm8xHSd9qXc0WJiB/sdfjYFh4942kB7l0XJzcHI/BlypXfcFP7d8700DaRNyWH+cZZASr3kYXnsgZuv6EHD2xL5OJgToAA5ruEIkhu8fIzYuze18JHbrdYMeIvClqJMldtrqgbzufKX+CTtGjvXtd3+a3p8cFWwldHi/KalRsXL6cPWHz0v8uSiZstN6ew99Cf3yGztrSAnT37Lb758wQHxynp9fvihXw/XX9+Id56TWEVCeg5dF1WRvuabs2lH0p2D6aUM93iMcHtyHGHkSUKS/r5erINfbN7PUMO26QsPVVXqJLDlynD9pX9WtY0QSSz7rxitPWaeD0R/yRCUdqNaqMdO/YPfuh3Zxx4fFut1M8igV2098YvtLG9E2POlhQ2v7XS+sAFjbVKVQ5ggf9qkDXxie88Xr9+ywOVT+7c1YoGi4ZujWVLtP/t3OJk9VV3W2CN8/HMKF/wmGKMC8+PzfVvtF96ebnwHoT/iNK900InSFV3y3ceO7deWvlvf6n2XHTomDtzuqWHm4nrTYwq0QuGl/RmSm7eyFBJ0aoQo1EsuPpgL6pnLsWzZw01H17i9v34qktes62Tnu49/ga7VMivBx+KzQAAAABJRU5ErkJggg=="
              : "windows" === Y
                ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAYAAAAjFjtnAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAB9VJREFUeAHVWUuLHUUU/qpuz51JZpIYE51ofAR0ERGCuHARHyhKVFAUd+JGFHQTUNCN/gB1IQgSJAvd6CaQpUQjCC6CySZGA5JkETExZjLETJJ5ZO7Nvd11rO6ux6nq6psJyIDFbar71Os75zvnVHddsWsHJvd9KE8v9rCFCCsuAlAdifMHjuKLt/eoT7Qo01eOVS7iyj45O7eIzRpMR4ibG6wVpqk1EJvvFvjw8+L2j/fjshYXWMWSLfQwrcHjZsGXRY8R1/rA/CkqPnpXXuxDrf1sP4ZYRSbEn1/JhuOUuhCrrWxUyQn5PdvQ6z6j1mMV3Umc3CtvwvNHFymhNkzi1JbX1INYndLJ+gP8Z0V7lOj1sf3K16AT53CmN0A20jVFeC9S8vSwbNNGcWrHbnpKHPnUMhA7zArvS4RVJdBbKjB160Y8+MQr6K6dBKmi6lPj0RGvlK6G9aVycw11MshDWdUn1/2NrGy3Ti3qtWfOzqrfTsz9rBkw0wc5NHFf4WVyUQIT1bjhgLC8THjosUexbecLUDO/AktzWimqx5Aq4esh5XhVPVcXSrnScv9s+1eKC51d5Ji+kzU+20dL7n1gm4SQj2f9ocD8lRwbNk5CZp0QOwK8oWL6VulJuxNdbNu+Hfc9sgsyn0f+1yE9b2Y7ODAOsFOCQtBBGx9TG6FUnsx9KRssLmLL1k3ILs0VeOmt97HurvsNXYisT26SuigmK6sB6No/oMu/Q6mBBj/OQBGbx05hxqVYjgzEBtXgrbBUqPImzd6FQ2/Q9B3aX69d0BLNgKatoq7yN1MbBQgJqsnuW3U/4tbj1q4snGgz7RSxwfu0M6OQTd8+rsHPaF+bqHcmSA+8qlGDFNZywlzK7H7CTebiiChkr1KsKXPMxmyRvw/HsblNLYvenAY/zoAJb1EK/TC5uGMnbkOiDSFgapkPLUol+mey0wEcZJ6Mw8GEeGF468Zt1FSw3QhIzM3mRXqMbc+ctRs7Do0AHzEzAiDdQBlKMoqRBuN9Mw64FFXpUiAxkc0+Cu2uA4x0qxEuGLcJalMuZD2L921iFDUmJ4XR7qFC+kf1XQlA1jepeM2AMbkDHdeJiYz7UGLDabNoLCPQCtwOkQGZ4qELEZrFyBpZSIXWbVjQtrdkL4rigka0BZsmJVnLvOPH+CntQvHkwaaUdoeYudggTUXTjKbcqnYhEmyj4q6DxqREbYtyC7YocyO/X4kLRm2ZdxUOHg1q0+DD1wVqWC6MkdDvVRpgK+C0UTKGHGG+xQrBt1hnRIzEYxqspJhtYSbzQl5aqE2Cj4NWoRE3nJ2UwqkYccqodrdrMOCsjibwpPWijBQH4ojgs1d7zKgbj/UMgH0tJuhqyUjUYCT1Ch3JkXpOA4ytHawdZCGYdmZ9rCCYhHmmSM7HCmatFEARJwD3rZEaoxrKZL4Tc6GUIjCL6M9ERQrpoAzjwCrmv2c5iGYwl8oKAbS5U8oAURCbOuEySp8oDPXpFeUDdNWCPoccGL1TgUctrKQDvJQXJNEv1lanG5n2i0zW7NANMlJWL4LI6ggWygsN/nofa4rzODi3Ez8uPozZ6+sgq+MQZY5LfI2y1kcqREyuzEd99aFfGFbqqxRNj1/Frs3H8fI9R3GlfxtUNzNKxIYJmRT5sRcpYCBynbz8muxfxPGrd2LX6b2YH2xEN7uKDgYeWDmxOYGgwn7PwrVXiigDwslQ11b5oT7WW16LDWMz+OHJ97Bj0yzyznqMZVQfuyRPNCoFXqCG9a3P60Xz/jwOz92Hp09+g9smT2vD1u7kLGIBWaAVSApZUSZdOmW8UuQMUMvLr/Dexa04+Pyb2Dl9Bp3uBDrSGCeIh1op2XwZU67TIFdY6i/j6VNfYnrdaRTKq+gWdRuNHe5fs314GQA2uMkYzBrBYtC/Qs85ufkMnvtuj465IfrD0V91MgwQtvnoibr5RXzw925MTixgWAgG2gc+WdBODgbOKOgAe9A1C6HcKjLQbiunlvDOsdcwJearA7QwCXgMElHas4FXukknX8KBhccx0Vn0C1vrS30YUF4dfmlCZX0sQ9WxoKz7lc9S1M9OXv8pUcmrKZVPHvrqjOm1zz2qs931Cgu1bHRZOdAcSQUBXFr0Oo1hqbgFXSwx6lW9+Nk/2OZHzgWEskCMv5lasGdytWFifALF+JrqZJC72fJgnWa+NEwEnqXqzOVV8OyDaoKisMmDWb9Ud3EB9NP3wNR6d5oh7be1OT32x0uxXATH6NUR2dgElh54SGeU3OCzeUXqmNC7gWQxGp3qZSElMFzYQFR+q+dZZHIKeH23/g8mZ1mIorxPPjOlslKwd2gD9PssmAn1KRWBp0x+sVMJ5nvglvZuwYO2qorcKxPn8yAtmsXdfqGM4diGZxV0S7o8xwoFwUssiP2rBPP/uthUaLMGy9lB2lQsbVKQacix53HY/wTcPFHGAldACMRBG7++y2xcWP9A2+uuC1bLlKJwMQY6nTa5G7b3bxqfHfc0MpCibpdIzsz2DuggIWcq5ofSWUj5VwW7TxgQFOV6QoucuBu0KxniN1FOhjW4eCD97w/NXqJv5dZnj7w4P6RfZMbB18ErMu4iCn7DodCVDA0+FcNkHelBCHv+Ks1/ECb/C2ZoaftSmY+r9k5Wi61RyrXHOor0n0qH73q1eAn/9/IvOen1B2ZxWQEAAAAASUVORK5CYII="
                : null),
          (b = "flex w-full flex-col gap-4"),
          R[19] !== K || R[20] !== U || R[21] !== G
            ? ((y =
                null != U
                  ? (0, a.jsx)(p.H, {
                      animate: K,
                      onComplete: () => {
                        ;(Q(!0), G?.())
                      },
                      children: U,
                    })
                  : null),
              (R[19] = K),
              (R[20] = U),
              (R[21] = G),
              (R[22] = y))
            : (y = R[22]),
          (x = F),
          (v =
            "group/resource-card relative flex w-full max-w-[536px] min-w-0 items-center gap-4 self-start overflow-hidden rounded-2xl border border-default bg-surface p-4 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)]"),
          (h = "button"),
          (f = H.formatMessage(
            {
              id: "electron.onboarding.conversationalOnboarding.openArtifactFile",
              defaultMessage: "Open {filename}",
              description: "Accessible label for opening a file created during conversational onboarding",
            },
            { filename: m },
          )),
          (R[0] = K),
          (R[1] = L),
          (R[2] = H),
          (R[3] = U),
          (R[4] = G),
          (R[5] = Y),
          (R[6] = F),
          (R[7] = t),
          (R[8] = n),
          (R[9] = m),
          (R[10] = h),
          (R[11] = f),
          (R[12] = v),
          (R[13] = b),
          (R[14] = y),
          (R[15] = x))
      } else
        ((t = R[7]),
          (n = R[8]),
          (m = R[9]),
          (h = R[10]),
          (f = R[11]),
          (v = R[12]),
          (b = R[13]),
          (y = R[14]),
          (x = R[15]))
      return (
        R[23] !== V || R[24] !== h || R[25] !== f
          ? ((A = (0, a.jsx)("button", {
              type: h,
              "aria-label": f,
              className:
                "peer/resource-card absolute inset-0 cursor-interaction bg-transparent group-hover/resource-card:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
              onClick: V,
            })),
            (R[23] = V),
            (R[24] = h),
            (R[25] = f),
            (R[26] = A))
          : (A = R[26]),
        R[27] !== z
          ? ((C = (0, a.jsx)("div", {
              className: "pointer-events-none relative z-10",
              children: (0, a.jsx)("span", {
                className:
                  "flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#F4F4F4] text-secondary dark:bg-[#303030]",
                children: z,
              }),
            })),
            (R[27] = z),
            (R[28] = C))
          : (C = R[28]),
        R[29] !== m
          ? ((w = (0, a.jsx)("div", { className: "truncate text-lg leading-6 text-default", children: m })),
            (R[29] = m),
            (R[30] = w))
          : (w = R[30]),
        R[31] !== B
          ? ((I = (0, a.jsx)("span", { className: "end-resource-default-subtitle", children: B })),
            (R[31] = B),
            (R[32] = I))
          : (I = R[32]),
        R[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, a.jsx)("span", {
              className: "end-resource-hover-subtitle hidden",
              children: (0, a.jsx)(l.A, {
                id: "electron.onboarding.conversationalOnboarding.openArtifactFileLabel",
                defaultMessage: "Open file",
                description: "Hover subtitle for opening a file created during conversational onboarding",
              }),
            })),
            (R[33] = O))
          : (O = R[33]),
        R[34] !== I
          ? ((k = (0, a.jsxs)("div", {
              className:
                "truncate text-base leading-5 text-tertiary peer-hover/resource-card:[&_.end-resource-default-subtitle]:hidden peer-hover/resource-card:[&_.end-resource-hover-subtitle]:inline-flex",
              children: [I, O],
            })),
            (R[34] = I),
            (R[35] = k))
          : (k = R[35]),
        R[36] !== w || R[37] !== k
          ? ((_ = (0, a.jsxs)("div", {
              className: "pointer-events-none relative z-10 min-w-0 flex-1",
              children: [w, k],
            })),
            (R[36] = w),
            (R[37] = k),
            (R[38] = _))
          : (_ = R[38]),
        R[39] !== m || R[40] !== H
          ? ((S = H.formatMessage(
              {
                id: "electron.onboarding.conversationalOnboarding.openArtifact",
                defaultMessage: "Reveal {filename} in its folder",
                description: "Accessible label for revealing a file created during conversational onboarding",
              },
              { filename: m },
            )),
            (R[39] = m),
            (R[40] = H),
            (R[41] = S))
          : (S = R[41]),
        R[42] !== t
          ? ((N =
              null == t
                ? (0, a.jsx)(d.I, { asset: i.M })
                : (0, a.jsx)("img", { alt: "", "aria-hidden": !0, className: "size-4", src: t })),
            (R[42] = t),
            (R[43] = N))
          : (N = R[43]),
        R[44] !== n || R[45] !== W || R[46] !== S || R[47] !== N
          ? ((M = (0, a.jsx)("div", {
              className:
                "pointer-events-auto relative z-10 flex shrink-0 items-center gap-2 [&_button]:h-8 [&_button]:w-fit [&_button]:px-3 [&_button]:py-0 [&_button]:text-lg [&_button]:leading-6",
              children: (0, a.jsxs)(c.$, {
                type: "button",
                "aria-label": S,
                color: "outline",
                size: "medium",
                onClick: W,
                children: [N, n],
              }),
            })),
            (R[44] = n),
            (R[45] = W),
            (R[46] = S),
            (R[47] = N),
            (R[48] = M))
          : (M = R[48]),
        R[49] !== _ || R[50] !== M || R[51] !== v || R[52] !== A || R[53] !== C
          ? ((E = (0, a.jsxs)("div", { className: v, children: [A, C, _, M] })),
            (R[49] = _),
            (R[50] = M),
            (R[51] = v),
            (R[52] = A),
            (R[53] = C),
            (R[54] = E))
          : (E = R[54]),
        R[55] !== K || R[56] !== D || R[57] !== X || R[58] !== U || R[59] !== q
          ? ((T =
              (!K || X || null == U) && null != D ? (0, a.jsx)(p.H, { animate: K, onComplete: q, children: D }) : null),
            (R[55] = K),
            (R[56] = D),
            (R[57] = X),
            (R[58] = U),
            (R[59] = q),
            (R[60] = T))
          : (T = R[60]),
        R[61] !== E || R[62] !== T || R[63] !== b || R[64] !== y || R[65] !== x
          ? ((j = (0, a.jsxs)("div", { className: b, children: [y, x, E, T] })),
            (R[61] = E),
            (R[62] = T),
            (R[63] = b),
            (R[64] = y),
            (R[65] = x),
            (R[66] = j))
          : (j = R[66]),
        j
      )
    }
  },
  cT32(e, t, n) {
    n.d(t, { C: () => H })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zTeN"),
      r = n("DBCl"),
      s = n("Wf1j"),
      l = n("oyxz"),
      c = n("tl5a"),
      d = n("xeus"),
      u = n("vdpW"),
      p = n("PgCv"),
      g = n("FOks"),
      m = n("AqC0"),
      h = n("umSm"),
      f = n("d159"),
      v = n("qYBv"),
      b = n("QSwz"),
      y = n("S1hE"),
      x = n("B81s"),
      A = n("OWtl"),
      C = n("qixt"),
      w = n("v0rv"),
      I = n("ser0"),
      O = n("cRg6"),
      k = n("Zg6g"),
      _ = n("yu23"),
      S = n("I3F6"),
      N = n("Dgwo"),
      M = n("Ia2g"),
      E = n("FvYa"),
      T = n("ygO2"),
      j = n("HOLv"),
      R = n("Mrfa"),
      P = n("W27Y"),
      D = n("atrt")
    function L(e) {
      let t,
        n,
        c,
        d,
        u,
        p,
        g,
        m,
        h,
        f,
        v,
        b,
        x,
        C,
        w,
        I,
        O = (0, o.c)(62),
        { appInfo: k, conversationId: L, hostId: G, pendingRequest: V, onDecline: W, onRetry: K } = e,
        H = (0, i.gh)(A.u),
        X = (0, s.A)()
      O[0] !== L || O[1] !== G || O[2] !== V.requestId || O[3] !== H
        ? ((t = async (e) => {
            await (0, N.V)(H, G).replyWithMcpServerElicitationResponse(L, V.requestId, (0, S.Se)(e))
          }),
          (O[0] = L),
          (O[1] = G),
          (O[2] = V.requestId),
          (O[3] = H),
          (O[4] = t))
        : (t = O[4])
      let Q = t
      O[5] !== K || O[6] !== Q
        ? ((n =
            null == K
              ? void 0
              : () => {
                  Q("decline").then(K).catch(B)
                }),
          (O[5] = K),
          (O[6] = Q),
          (O[7] = n))
        : (n = O[7])
      let Y = n
      if ("connectorAuth" === V.elicitation.kind) {
        let e
        return (
          O[8] !== L || O[9] !== G || O[10] !== V.elicitation || O[11] !== V.requestId
            ? ((e = (0, a.jsx)(D.S, { auth: V.elicitation, conversationId: L, hostId: G, requestId: V.requestId })),
              (O[8] = L),
              (O[9] = G),
              (O[10] = V.elicitation),
              (O[11] = V.requestId),
              (O[12] = e))
            : (e = O[12]),
          e
        )
      }
      if ("mcpToolCall" !== V.elicitation.kind || V.elicitation.approveDisabled || "high" === V.elicitation.riskLevel) {
        let e
        return (O[13] !== Y ? ((e = (0, a.jsx)(q, { onRetry: Y })), (O[13] = Y), (O[14] = e)) : (e = O[14]), e)
      }
      let Z = V.elicitation.approval.connector_id,
        J = V.request.params.serverName
      if (
        O[15] !== k ||
        O[16] !== Z ||
        O[17] !== L ||
        O[18] !== G ||
        O[19] !== W ||
        O[20] !== V.elicitation ||
        O[21] !== V.requestId ||
        O[22] !== J
      ) {
        c = Symbol.for("react.early_return_sentinel")
        e: {
          let e = null == k && Z === r.t_C && ((0, r.qOc)(J) || "computer-use" === J) ? (0, R.m)(V.elicitation) : null
          if (null != e) {
            let t, n
            O[24] !== W
              ? ((t = (e) => {
                  "decline" === e && W?.()
                }),
                (O[24] = W),
                (O[25] = t))
              : (t = O[25])
            let o = { ...e, persistModes: e.persistModes.filter(F) }
            ;(O[26] !== L || O[27] !== G || O[28] !== V.requestId || O[29] !== t || O[30] !== o
              ? ((n = (0, a.jsx)(P.I, {
                  ApprovalCard: M.n,
                  conversationId: L,
                  hostId: G,
                  onRequestSettled: t,
                  request: o,
                  requestId: V.requestId,
                })),
                (O[26] = L),
                (O[27] = G),
                (O[28] = V.requestId),
                (O[29] = t),
                (O[30] = o),
                (O[31] = n))
              : (n = O[31]),
              (c = n))
            break e
          }
        }
        ;((O[15] = k),
          (O[16] = Z),
          (O[17] = L),
          (O[18] = G),
          (O[19] = W),
          (O[20] = V.elicitation),
          (O[21] = V.requestId),
          (O[22] = J),
          (O[23] = c))
      } else c = O[23]
      if (c !== Symbol.for("react.early_return_sentinel")) return c
      if (null == k || Z === r.t_C || Z !== k.id) {
        let e
        return (O[32] !== Y ? ((e = (0, a.jsx)(q, { onRetry: Y })), (O[32] = Y), (O[33] = e)) : (e = O[33]), e)
      }
      return (
        O[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)("span", {
              className: "inline-flex items-center justify-center",
              children: (0, a.jsx)(j.I, { className: "shrink-0", "aria-hidden": !1, asset: _.k }),
            })),
            (O[34] = d))
          : (d = O[34]),
        O[35] !== k
          ? ((u = (0, a.jsx)(E.R, { alt: "", appInfo: k, className: "size-6 shrink-0 object-contain", fallback: d })),
            (O[35] = k),
            (O[36] = u))
          : (u = O[36]),
        O[37] !== k.name || O[38] !== X
          ? ((p = X.formatMessage(
              {
                id: "electron.onboarding.conversationalOnboarding.mcpApprovalTitle",
                defaultMessage: "Allow {appName} to complete this action?",
                description: "Generic approval request for an app action during conversational onboarding",
              },
              { appName: k.name },
            )),
            (O[37] = k.name),
            (O[38] = X),
            (O[39] = p))
          : (p = O[39]),
        O[40] !== p ? ((g = (0, a.jsx)(y.H, { animate: !0, children: p })), (O[40] = p), (O[41] = g)) : (g = O[41]),
        O[42] !== u || O[43] !== g
          ? ((m = (0, a.jsxs)("div", {
              className: "flex max-w-[448px] items-start gap-2 text-[16px] leading-6 text-default",
              children: [u, g],
            })),
            (O[42] = u),
            (O[43] = g),
            (O[44] = m))
          : (m = O[44]),
        O[45] !== W || O[46] !== Q
          ? ((h = () => {
              Q("decline").then(W).catch(U)
            }),
            (O[45] = W),
            (O[46] = Q),
            (O[47] = h))
          : (h = O[47]),
        O[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(l.A, {
              id: "electron.onboarding.conversationalOnboarding.mcpApprovalDecline",
              defaultMessage: "Cancel",
              description: "Button that declines an MCP action during conversational onboarding",
            })),
            (O[48] = f))
          : (f = O[48]),
        O[49] !== h
          ? ((v = (0, a.jsx)(T.$, { color: "outline", size: "medium", onClick: h, children: f })),
            (O[49] = h),
            (O[50] = v))
          : (v = O[50]),
        O[51] !== Q
          ? ((b = () => {
              Q("accept").catch(z)
            }),
            (O[51] = Q),
            (O[52] = b))
          : (b = O[52]),
        O[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(l.A, {
              id: "electron.onboarding.conversationalOnboarding.mcpApprovalAllow",
              defaultMessage: "Allow",
              description: "Button that allows an MCP action during conversational onboarding",
            })),
            (O[53] = x))
          : (x = O[53]),
        O[54] !== b
          ? ((C = (0, a.jsx)(T.$, { color: "primary", size: "medium", onClick: b, children: x })),
            (O[54] = b),
            (O[55] = C))
          : (C = O[55]),
        O[56] !== v || O[57] !== C
          ? ((w = (0, a.jsxs)("div", {
              className:
                "flex justify-end gap-2 [&_button]:h-8 [&_button]:px-3 [&_button]:py-0 [&_button]:text-lg [&_button]:leading-6",
              children: [v, C],
            })),
            (O[56] = v),
            (O[57] = C),
            (O[58] = w))
          : (w = O[58]),
        O[59] !== w || O[60] !== m
          ? ((I = (0, a.jsxs)("div", {
              className:
                "flex w-full max-w-[536px] flex-col gap-4 self-start overflow-hidden rounded-[20px] bg-surface p-4 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)] ring-1 ring-border ring-inset",
              children: [m, w],
            })),
            (O[59] = w),
            (O[60] = m),
            (O[61] = I))
          : (I = O[61]),
        I
      )
    }
    function z() {}
    function U() {}
    function F(e) {
      return "session" === e
    }
    function B() {}
    function q(e) {
      let t,
        n,
        i,
        r = (0, o.c)(5),
        { onRetry: s } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(l.A, {
              id: "electron.onboarding.conversationalOnboarding.mcpApprovalError",
              defaultMessage: "ChatGPT couldn’t complete that action",
              description: "Error shown when conversational onboarding receives an unexpected app approval request",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== s
          ? ((n =
              null == s
                ? null
                : (0, a.jsx)(T.$, {
                    color: "primary",
                    size: "medium",
                    onClick: s,
                    children: (0, a.jsx)(l.A, {
                      id: "electron.onboarding.conversationalOnboarding.mcpApprovalRetry",
                      defaultMessage: "Try again",
                      description:
                        "Button that retries a conversational onboarding task after an unexpected app approval request",
                    }),
                  })),
            (r[1] = s),
            (r[2] = n))
          : (n = r[2]),
        r[3] !== n
          ? ((i = (0, a.jsxs)("div", {
              className:
                "flex w-full max-w-[536px] items-center justify-between gap-4 self-start rounded-[20px] border border-default bg-surface p-4",
              children: [t, n],
            })),
            (r[3] = n),
            (r[4] = i))
          : (i = r[4]),
        i
      )
    }
    let G = (0, r.DIv)(r.m20),
      V = "__CONVERSATIONAL_ONBOARDING_LINK__",
      W = "__CONVERSATIONAL_ONBOARDING_TEXT__",
      K = (0, i.i1)(A.u, (e, { get: t }) => {
        let n = t(u.hm, e)
        return null == e || null == n
          ? null
          : n.flatMap((n) => {
              let a = t(u.mz, { ...e, itemId: n })
              return null == a ? [] : [a]
            })
      })
    function H(e) {
      let t,
        n,
        r,
        l,
        h,
        A,
        w,
        _,
        S,
        N,
        M,
        E = (0, o.c)(63),
        {
          appInfo: T,
          appPluginName: j,
          conversation: R,
          completionLinkLabel: P,
          completionMessage: D,
          computerUseUndo: z,
          hasAdvancedCapabilitiesSetup: U,
          onChooseAnotherTask: F,
          onCompletionComplete: B,
          onRetryTask: q,
        } = e,
        H = void 0 !== U && U,
        Z = R.conversationId,
        J = (0, p.d)(),
        $ = (0, i.Ul)(d.w)
      E[0] !== R.hostId || E[1] !== Z
        ? ((t = { hostId: R.hostId, threadId: Z }), (E[0] = R.hostId), (E[1] = Z), (E[2] = t))
        : (t = E[2])
      let ee = (0, i._U)(u._2, t),
        et = (0, i._U)(u.Ko, ee),
        en = (0, i._U)(K, ee),
        ea = null == et || null == en ? null : { ...et, items: en },
        eo = (0, i._U)(I.NX, Z),
        ei = (0, i._U)(c.dA, Z),
        er = (0, i._U)(c.be, Z),
        es = (0, s.A)(),
        el = er?.type === "mcpServerElicitation" ? er : null,
        ec = (0, i._U)(c.jR, Z),
        ed =
          null == ea || null == ei
            ? null
            : (0, m.fW)(
                ea,
                ei.filter((e) => null != ea.turnId && "turnId" in e.params && e.params.turnId === ea.turnId),
                { isBackgroundSubagentsEnabled: J, openAIFormElicitationsEnabled: $ },
              ),
        eu = ed?.items.some(Q) ?? !1,
        { data: ep } = (0, i._U)(x.pu, R.hostId, { enabled: eu }),
        eg = ed?.items.filter((e) => "mcp-tool-call" === e.type && (0, v.kT)({ item: e, mcpServerStatuses: ep })) ?? [],
        em = eg.length > 0,
        eh = em ? eg : (ed?.items.filter(X) ?? []),
        ef = eh.length > 0,
        ev = ef
          ? eh
          : (ed?.items.filter((e) =>
              "mcp-tool-call" === e.type
                ? (0, v.kT)({ item: e, mcpServerStatuses: ep })
                : "user-message" !== e.type &&
                  "exec" !== e.type &&
                  "patch" !== e.type &&
                  "dynamic-tool-call" !== e.type &&
                  "turn-diff" !== e.type &&
                  "web-search" !== e.type &&
                  (null == el || "mcp-server-elicitation" !== e.type || e.requestId !== el.requestId),
            ) ?? [])
      E[3] !== eo || E[4] !== D || E[5] !== ef || E[6] !== es
        ? ((n =
            eo?.outcome === "completed" && ef
              ? (function (e, t) {
                  let n = e.indexOf(V)
                  if (-1 === n) return e.replace(W, () => t).trim()
                  let a = e.lastIndexOf("\n", n - 1) + 1,
                    o = e.indexOf("\n", n + V.length),
                    i = -1 === o ? e.length : o,
                    r = e.slice(a, i)
                  return (
                    r.includes(W)
                      ? `${e.slice(0, a)}${r.replace(V, "").replace(/\s*(?:[-\u2013\u2014:|]\s*|\(\s*\)|\[\s*\])$/, "")}${e.slice(i)}`
                      : `${e.slice(0, a)}${e.slice(-1 === o ? e.length : o + 1)}`
                  )
                    .replace(W, () => t)
                    .trim()
                })(
                  es.formatMessage(D, { hasText: eo.output.trim().length > 0 ? "yes" : "no", link: V, text: W }),
                  eo.output,
                )
              : null),
          (E[3] = eo),
          (E[4] = D),
          (E[5] = ef),
          (E[6] = es),
          (E[7] = n))
        : (n = E[7])
      let eb = n
      if (null != eo && ("not_completed" === eo.outcome || !ef)) {
        let e
        if (null == T) {
          let e, t
          if (z?.isRestoring === !0 && null != z.originalTurnId && z.originalTurnId === ea?.turnId) {
            let e
            return (
              E[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(Y, {})), (E[8] = e)) : (e = E[8]),
              e
            )
          }
          return (
            E[9] !== z || E[10] !== ea?.status
              ? ((e =
                  null == z
                    ? void 0
                    : { isRestored: z.isRestoring, onUndo: ea?.status === "inProgress" ? void 0 : z.onUndo }),
                (E[9] = z),
                (E[10] = ea?.status),
                (E[11] = e))
              : (e = E[11]),
            E[12] !== eo || E[13] !== H || E[14] !== F || E[15] !== B || E[16] !== q || E[17] !== e
              ? ((t = (0, a.jsx)(O.W, {
                  completion: eo,
                  hasAdvancedCapabilitiesSetup: H,
                  undo: e,
                  onChooseAnotherTask: F,
                  onCompletionComplete: B,
                  onRetryTask: q,
                })),
                (E[12] = eo),
                (E[13] = H),
                (E[14] = F),
                (E[15] = B),
                (E[16] = q),
                (E[17] = e),
                (E[18] = t))
              : (t = E[18]),
            t
          )
        }
        return (
          E[19] !== T ||
          E[20] !== j ||
          E[21] !== eo ||
          E[22] !== P ||
          E[23] !== D ||
          E[24] !== F ||
          E[25] !== B ||
          E[26] !== q
            ? ((e = (0, a.jsx)(k.TD, {
                appInfo: T,
                appPluginName: j,
                completion: eo,
                linkLabel: P,
                message: D,
                onCompletionComplete: B,
                onChooseAnotherTask: F,
                onRetryTask: q,
              })),
              (E[19] = T),
              (E[20] = j),
              (E[21] = eo),
              (E[22] = P),
              (E[23] = D),
              (E[24] = F),
              (E[25] = B),
              (E[26] = q),
              (E[27] = e))
            : (e = E[27]),
          e
        )
      }
      if (null == ea || null == ed) {
        let e
        return (
          E[28] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(Y, {})), (E[28] = e)) : (e = E[28]),
          e
        )
      }
      let ey = ea.turnId ?? "conversational-onboarding-live-activity"
      return (
        E[29] !== ey ? ((r = { turnKey: ey, footer: null }), (E[29] = ey), (E[30] = r)) : (r = E[30]),
        E[31] !== T ? ((l = null == T ? [] : [T]), (E[31] = T), (E[32] = l)) : (l = E[32]),
        E[33] !== ed || E[34] !== ev
          ? ((h = { ...ed, items: ev }), (E[33] = ed), (E[34] = ev), (E[35] = h))
          : (h = E[35]),
        E[36] !== R.conversationId || E[37] !== R.hostId || E[38] !== ea || E[39] !== ec || E[40] !== l || E[41] !== h
          ? ((A = (0, a.jsx)(f.K, {
              commentaryDisplay: "all",
              conversationDetailLevel: C.O$,
              conversationId: R.conversationId,
              cwd: G,
              hostId: R.hostId,
              isMostRecentTurn: !0,
              isProjectlessConversation: !0,
              isReadOnly: !0,
              modelProvider: ec,
              renderMcpApps: !0,
              resolvedApps: l,
              turn: ea,
              turnSearchKey: "conversational-onboarding-live-activity",
              turnState: h,
            })),
            (E[36] = R.conversationId),
            (E[37] = R.hostId),
            (E[38] = ea),
            (E[39] = ec),
            (E[40] = l),
            (E[41] = h),
            (E[42] = A))
          : (A = E[42]),
        E[43] !== r || E[44] !== A
          ? ((w = (0, a.jsx)(i.Ui, { scope: g.$, value: r, children: A })), (E[43] = r), (E[44] = A), (E[45] = w))
          : (w = E[45]),
        E[46] !== em ? ((_ = em ? (0, a.jsx)(b.r, {}) : null), (E[46] = em), (E[47] = _)) : (_ = E[47]),
        E[48] !== eb || E[49] !== B
          ? ((S = null == eb ? null : (0, a.jsx)(y.H, { animate: !0, onComplete: B, children: eb })),
            (E[48] = eb),
            (E[49] = B),
            (E[50] = S))
          : (S = E[50]),
        E[51] !== T || E[52] !== R.conversationId || E[53] !== R.hostId || E[54] !== el || E[55] !== F || E[56] !== q
          ? ((N =
              null == el
                ? null
                : (0, a.jsx)(L, {
                    appInfo: T,
                    conversationId: R.conversationId,
                    hostId: R.hostId,
                    pendingRequest: el,
                    onDecline: F,
                    onRetry: q,
                  })),
            (E[51] = T),
            (E[52] = R.conversationId),
            (E[53] = R.hostId),
            (E[54] = el),
            (E[55] = F),
            (E[56] = q),
            (E[57] = N))
          : (N = E[57]),
        E[58] !== _ || E[59] !== S || E[60] !== N || E[61] !== w
          ? ((M = (0, a.jsxs)("div", {
              "data-mcp-app-portal-target": "true",
              className: "relative flex w-full flex-col gap-4",
              children: [w, _, S, N],
            })),
            (E[58] = _),
            (E[59] = S),
            (E[60] = N),
            (E[61] = w),
            (E[62] = M))
          : (M = E[62]),
        M
      )
    }
    function X(e) {
      return "assistant-message" === e.type && (0, w.GF)(e.content)
    }
    function Q(e) {
      return (
        "mcp-tool-call" === e.type &&
        null == e.mcpAppResourceUri &&
        (e.result?.type === "success" || (!e.completed && null == e.result))
      )
    }
    function Y() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.N, {
              className: "text-lg leading-6",
              children: (0, a.jsx)(l.A, {
                id: "electron.onboarding.conversationalOnboarding.executionThinking",
                defaultMessage: "Thinking",
                description: "Animated thinking label during conversational onboarding task execution",
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
  },
  wsDK(e, t, n) {
    var a = n("zTeN"),
      o = n("OWtl")
    let i = (0, a.bD)(o.u, (e) => null, void 0, { key: ({ hostId: e, threadId: t }) => `${e}:${t}` })
    n.d(t, {}, { c: i })
  },
  ser0(e, t, n) {
    n.d(t, { a7: () => X, G6: () => G, gh: () => B, NX: () => F, K: () => V, OK: () => q, e_: () => H, sm: () => K })
    var a = n("NxBK"),
      o = n("zTeN"),
      i = n("DBCl"),
      r = n("aNWx"),
      s = n("yJfM"),
      l = n("Dgwo"),
      c = n("pCvK"),
      d = n("binO"),
      u = n("tl5a"),
      p = n("vdpW"),
      g = n("lqHG"),
      m = n("VvpR"),
      h = n("wCOm"),
      f = n("SPnB"),
      v = n("QX7Q"),
      b = n("NF58"),
      y = n("ay73"),
      x = n("GaA7"),
      A = n("OWtl"),
      C = n("PLHV"),
      w = n("wsDK"),
      I = n("ASxG"),
      O = n("kpIY"),
      k = n("OTo7")
    let _ = "electron:conversational-onboarding-conversation",
      S = "electron:conversational-onboarding-conversation-ids",
      N = I.array(I.string().min(1).transform(i.JXB)),
      M = I.strictObject({
        appPluginName: I.string().nullable().default(null),
        approvedWritableRoot: I.string().min(1).nullable(),
        conversationId: I.string().min(1).transform(i.JXB),
        hostId: I.string().min(1),
        selectedTask: k.Ll,
      }).refine(({ approvedWritableRoot: e, selectedTask: t }) => "desktop_note" !== t || null != e, {
        message: "Local file onboarding requires an approved writable root",
        path: ["approvedWritableRoot"],
      })
    function E(e, t = (0, O.TB)(_, null)) {
      let n = M.safeParse(t)
      return n.success && n.data.hostId === e ? n.data : null
    }
    function T(e) {
      let t = j()
      t.includes(e) || (0, O.jx)(S, [...t, e])
    }
    function j() {
      return N.catch([]).parse((0, O.TB)(S, []))
    }
    let R = `Execute the selected conversational onboarding task immediately. Do not invoke an onboarding skill or interactive onboarding tool. Do not ask follow-up questions or offer task choices. Use a sensible default when optional details are unavailable. Immediately acknowledge the task before calling any tool, using one short user-visible sentence. Always write natural-language text in the user's app language ({locale}), including progress updates and final responses. Give brief progress updates in an ELI5 style without being patronizing. Use one short plain-language sentence describing the user-visible goal, not the implementation. Never mention commands, tools, code, paths, API parameters, filename checks, validation steps, or fallback logic. Do not repeat acknowledgements. Prefer the simplest reliable local toolchain already available and do not install packages. Honor every writable root approved before this conversation. Before the final response, call ${r.Ru} with exactly one terminal outcome. Write completion tool output in the user's app language ({locale}) using that locale's conventions for dates, times, weekday and month names, numbers, and punctuation. Localize task-specific output examples instead of copying their language or formatting. Use {"outcome":"completed","output":"<task-specific output>","url":"<created or affected resource URL>"} when the intended action happened, following any selected task output instruction exactly. Use {"outcome":"not_completed","output":"<friendly first-person sentence>"} when execution succeeded but the intended result could not be achieved. Focus a not_completed output on the user's goal. Omit technical details, tool names, raw constraints, time zones, and error text. Authentication, connector, tool, and runtime errors are execution failures; explain them briefly and stop without calling the completion tool. If the completion tool rejects a terminal result, correct it and retry. After it succeeds, do not call it again. Give one concise final response and stop`,
      P = new Map(),
      D = new Map(),
      L = new Map(),
      z = (0, o.vP)(A.u, null),
      U = (0, o.vU)(A.u, (e, { get: t }) => {
        let n = x.appServices.conversationalOnboarding,
          a = t(f.chatGptAuthenticatedAccountId$),
          o = t(f.chatGptAuthenticatedUserId$)
        return {
          enabled: null != n && null != a && null != o,
          queryKey: ["conversational-onboarding-completion", e, a, o],
          queryFn: async () =>
            (await n?.getTaskCompletionState({ hostId: "local", conversationId: e })) ?? { status: "unavailable" },
          staleTime: 0,
        }
      }),
      F = (0, o.i1)(A.u, (e, { get: t, scope: n }) => {
        if (null == e) return null
        if (null != x.appServices.conversationalOnboarding) {
          let n = t(U, e).data
          if (n?.status === "completed") return n.completion
          if (n?.status !== "absent") return null
        }
        let a = t(p.M, { hostId: t(u.qX, e), threadId: e })
        if (null == a) return null
        let o = t(z) === e ? Math.max(0, a.length - 1) : 0
        for (let e = a.length - 1; e >= o; e -= 1) {
          let o = a[e]
          t(p.hm, o)
          let i = (0, p.od)(n, o)
          if (null != i)
            for (let e = i.items.length - 1; e >= 0; e -= 1) {
              let n = i.items[e]
              if ((n?.type !== "dynamicToolCall" && n?.type !== "mcpToolCall") || n.tool !== r.Ru) continue
              let a = t(p.mz, { ...o, itemId: n.id })
              if (a?.type !== "dynamicToolCall" && a?.type !== "mcpToolCall") continue
              let s = (0, c.N)(a)
              if (null != s) return s
            }
        }
        return null
      }),
      B = (0, o.i1)(A.u, (e, { get: t }) => {
        if (null == e) return !1
        let n = t(u.VY, e)
        return null != n && "inProgress" !== n && null == t(F, e)
      })
    async function q(e, t, n) {
      if (null != x.appServices.conversationalOnboarding) {
        let o = e.query.snapshot(U, t)
        for (await o.cancel(); ;) {
          n.throwIfAborted()
          try {
            let e = await o.fetch()
            if ("completed" === e.status) return e.completion
            if ("absent" === e.status) break
            return null
          } catch (e) {
            if (!(e instanceof a.cc)) throw e
          }
        }
      }
      return e.get(F, t)
    }
    async function G(e, t) {
      let n = await W(e, t),
        a = D.get(n.conversationId)
      return (
        null != a && (await a, D.get(n.conversationId) === a && D.delete(n.conversationId)),
        e.set(z, n.conversationId),
        K(e, t)
      )
    }
    function V(e, t) {
      return W(e, t)
    }
    function W(e, t) {
      let n = L.get(t.hostId) ?? 0,
        a = E(t.hostId)
      if (a?.appPluginName === t.appPluginName && a.selectedTask === t.selectedTask) return Promise.resolve(a)
      let o = P.get(t.hostId),
        r = t.appPluginName
      if (o?.appPluginName === r && o?.generation === n && o.selectedTask === t.selectedTask) return o.promise
      if (o?.generation === n)
        return Promise.reject(Error("Another conversational onboarding task is already starting"))
      let s = (async function (e, t, n) {
        let a = E(t.hostId)
        null != a && (await Q(e, a))
        let o = await (async function (
          e,
          {
            agentMode: t,
            loadModelConfig: n,
            hostId: a,
            permissionProfileId: o,
            permissionsRequirements: r,
            projectRoot: s,
            prompt: c,
            serviceTier: d,
            shouldSendPermissionOverrides: u,
          },
        ) {
          let p = await n(),
            m = Y(c),
            f = [s],
            y = (0, b.wW)(f),
            x = await (0, b.fO)(f, { prompt: m }),
            A = x.cwd ?? s
          if (y && null == x.projectlessOutputDirectory) throw Error("No projectless output directory found")
          let { config: w } = await (0, l.V)(e, a).sendRequest(
              "config/read",
              { includeLayers: !1, cwd: A },
              { priority: "critical" },
            ),
            I = (0, v.k)({
              addedFiles: [],
              additionalDeveloperInstructions: R.replaceAll("{locale}", (0, C.O9)()),
              agentMode: (0, i.Jhm)("granular", r) ? "granular" : t,
              permissionProfileId: o,
              shouldSendPermissionOverrides: u,
              collaborationMode: null,
              config: (0, h.Y$)(w),
              configOverrides: { model: p.model, model_reasoning_effort: p.reasoning_effort },
              cwd: A,
              fileAttachments: [],
              input: [],
              model: p.model,
              projectlessOutputDirectory: x.projectlessOutputDirectory,
              reasoningEffort: p.reasoning_effort,
              serviceTier: d,
              threadSource: "conversational_onboarding",
              turnTrigger: "conversational_onboarding",
              threadStartKind: "conversational_onboarding",
              workspaceKind: y ? "projectless" : "project",
              workspaceRoots: x.workspaceRoots,
            }),
            O = await (0, g.g)(e, a, I)
          "created" === O.status && T(O.conversationId)
          let k = (0, g.c)(e, O)
          if (null != k) throw k
          if ("created" !== O.status) throw Error("Task creation is not confirmed")
          return O.conversationId
        })(e, t)
        if ((L.get(t.hostId) ?? 0) !== n)
          throw (
            (0, d.F)(e, { conversationId: o, hostId: t.hostId, initiatedBy: "system" }),
            await x.appServices.conversationalOnboarding?.clearTaskCompletionExpectation({
              conversationId: o,
              hostId: t.hostId,
            }),
            Error("Conversational onboarding start was cancelled")
          )
        let r = {
          appPluginName: t.appPluginName,
          approvedWritableRoot: null,
          conversationId: o,
          hostId: t.hostId,
          selectedTask: t.selectedTask,
        }
        return ((0, O.jx)(_, r), T(r.conversationId), r)
      })(e, t, n)
      P.set(t.hostId, { appPluginName: r, generation: n, promise: s, selectedTask: t.selectedTask })
      let c = () => {
        P.get(t.hostId)?.promise === s && P.delete(t.hostId)
      }
      return (s.then(c, c), s)
    }
    async function K(e, t) {
      let n = L.get(t.hostId) ?? 0,
        a = await W(e, t)
      if (
        (!0 === t.requiresCodexAppsReady &&
          (await (async function (e, t, n) {
            let a = { hostId: t, threadId: n },
              o = null
            try {
              let t = await Promise.race([
                e
                  .when((e) => {
                    let t = e.get(w.c, a)
                    return null != t && "starting" !== t.status
                  })
                  .then(() => e.get(w.c, a)),
                new Promise((e) => {
                  o = setTimeout(() => e(null), 35e3)
                }),
              ])
              if (t?.status !== "ready") throw Error("Codex Apps did not become ready for onboarding")
            } finally {
              null != o && clearTimeout(o)
            }
          })(e, t.hostId, a.conversationId)),
        (L.get(t.hostId) ?? 0) !== n)
      )
        throw Error("Conversational onboarding start was cancelled")
      let o = D.get(a.conversationId)
      if (null != o) return (await o, a)
      let i = (async () => {
        if (
          !0 !==
            (await x.appServices.conversationalOnboarding?.expectTaskCompletion({
              conversationId: a.conversationId,
              hostId: t.hostId,
              isRevert: t.isRevert,
              selectedTask: t.selectedTask,
            })) ||
          (L.get(t.hostId) ?? 0) !== n
        )
          throw Error("Conversational onboarding start was cancelled")
        ;(e.queryClient.setQueriesData(
          { queryKey: ["conversational-onboarding-completion", a.conversationId] },
          { status: "pending" },
        ),
          await (0, m.MT)(e, t.hostId, a.conversationId, {
            request: {
              turnTrigger: t.isRevert ? "conversational_onboarding_revert" : "conversational_onboarding",
              threadId: a.conversationId,
              input: [...(null == t.skill ? [] : [t.skill]), { type: "text", text: Y(t.prompt), text_elements: [] }],
              serviceTier: t.serviceTier,
            },
          }))
      })()
      D.set(a.conversationId, i)
      try {
        await i
      } catch (e) {
        throw (D.delete(a.conversationId), e)
      }
      return a
    }
    function H(e, t) {
      L.set(t, (L.get(t) ?? 0) + 1)
      let n = E(t)
      null != n && Q(e, n).catch(() => void 0)
    }
    async function X(e, t) {
      ;(await Promise.all(
        j().map((n) =>
          (0, l.V)(e, t)
            .archiveConversation(n, { useAppServerPins: e.get(y.XF), source: "conversational-onboarding-complete" })
            .then(async () => {
              await x.appServices.conversationalOnboarding?.clearTaskCompletionExpectation({
                hostId: t,
                conversationId: n,
              })
            }),
        ),
      ),
        (0, O.jx)(S, []))
    }
    async function Q(e, t) {
      let n
      ;((n = E(t.hostId)),
        n?.conversationId === t.conversationId &&
          ((0, O.jx)(_, null), 1) &&
          (D.delete(t.conversationId),
          (0, d.F)(e, { conversationId: t.conversationId, hostId: t.hostId, initiatedBy: "system" }),
          await x.appServices.conversationalOnboarding?.clearTaskCompletionExpectation({
            conversationId: t.conversationId,
            hostId: t.hostId,
          })))
    }
    function Y(e) {
      return (0, s.Ry)({
        addedFiles: [],
        fileAttachments: [],
        ideContext: null,
        imageAttachments: [],
        prompt: "function" == typeof e ? e() : e,
      })
    }
  },
  Yg8P(e, t, n) {
    let a = [
      { online: 184, retail: 96, corporate: 42 },
      { online: 196, retail: 102, corporate: 38 },
      { online: 231, retail: 110, corporate: 47 },
      { online: 218, retail: 121, corporate: 44 },
      { online: 256, retail: 134, corporate: 53 },
      { online: 247, retail: 146, corporate: 57 },
      { online: 279, retail: 162, corporate: 49 },
      { online: 305, retail: 179, corporate: 66 },
      { online: 402, retail: 265, corporate: 81 },
      { online: 386, retail: 281, corporate: 76 },
      { online: 574, retail: 398, corporate: 109 },
      { online: 641, retail: 432, corporate: 126 },
    ]
    n.d(
      t,
      {},
      {
        k: function (e) {
          let t = a.map((t, n) => {
            let a = new Date(Date.UTC(2026, n, 1))
            return {
              ...t,
              month: e.formatDate(a, { month: "short", timeZone: "UTC" }),
              monthLong: e.formatDate(a, { month: "long", timeZone: "UTC" }),
              total: t.online + t.retail + t.corporate,
            }
          })
          return {
            title: e.formatMessage({
              id: "electron.onboarding.conversationalOnboarding.sampleChart.title",
              defaultMessage: "SnapDock monthly sales orders by channel",
              description: "Title of the sample monthly sales chart",
            }),
            subtitle: e.formatMessage({
              id: "electron.onboarding.conversationalOnboarding.sampleChart.subtitle",
              defaultMessage:
                "The chart makes the September retail expansion and November–December holiday surge immediately visible",
              description: "Subtitle of the sample monthly sales chart",
            }),
            ordersLabel: e.formatMessage({
              id: "electron.onboarding.conversationalOnboarding.sampleChart.orders",
              defaultMessage: "Orders",
              description: "Vertical axis label in the sample monthly sales chart",
            }),
            accessibilityDescription: e.formatMessage(
              {
                id: "electron.onboarding.conversationalOnboarding.sampleChart.accessibilityDescription",
                defaultMessage:
                  "Stacked monthly columns show direct online, retail partner, and corporate orders. Total orders rise from {startTotal} in {startMonth} to {endTotal} in {endMonth}, with the sharpest growth during the holiday season.",
                description: "Accessible description of the sample monthly sales chart",
              },
              {
                startTotal: e.formatNumber(t[0]?.total ?? 0),
                startMonth: t[0]?.monthLong,
                endTotal: e.formatNumber(t.at(-1)?.total ?? 0),
                endMonth: t.at(-1)?.monthLong,
              },
            ),
            data: t,
            series: [
              {
                key: "online",
                label: e.formatMessage({
                  id: "electron.onboarding.conversationalOnboarding.sampleChart.directOnline",
                  defaultMessage: "Direct online",
                  description: "Direct online sales channel in the sample chart",
                }),
                color: "#0b6fc9",
              },
              {
                key: "retail",
                label: e.formatMessage({
                  id: "electron.onboarding.conversationalOnboarding.sampleChart.retailPartners",
                  defaultMessage: "Retail partners",
                  description: "Retail partner sales channel in the sample chart",
                }),
                color: "#fac936",
              },
              {
                key: "corporate",
                label: e.formatMessage({
                  id: "electron.onboarding.conversationalOnboarding.sampleChart.corporate",
                  defaultMessage: "Corporate",
                  description: "Corporate sales channel in the sample chart",
                }),
                color: "#e369ad",
              },
            ],
          }
        },
      },
    )
  },
  ifyC(e, t, n) {
    var a = n("Yg8P")
    let o = [1200, 900, 600, 300, 0]
    function i(e) {
      return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")
    }
    n.d(
      t,
      {},
      {
        d: function (e) {
          let t = (0, a.k)(e),
            n = t.series
              .map(
                ({ label: e }, t) =>
                  `<span class="legend-item"><span class="legend-swatch series-${t + 1}"></span>${i(e)}</span>`,
              )
              .join(""),
            r = t.data
              .map((n) => {
                let a = (n.total / 1300) * 100,
                  o = t.series
                    .map(
                      ({ key: t, label: a }, o) =>
                        `<div class="tooltip-row"><span><span class="tooltip-swatch series-${o + 1}"></span>${i(a)}</span><strong>${i(e.formatNumber(n[t]))}</strong></div>`,
                    )
                    .join(""),
                  r = e.formatMessage(
                    {
                      id: "electron.onboarding.conversationalOnboarding.sampleVisualization.barAccessibilityLabel",
                      defaultMessage:
                        "{month}: {total, number} orders. Direct online: {online, number}. Retail partners: {retail, number}. Corporate: {corporate, number}",
                      description:
                        "Accessible description for one monthly stacked bar in the interactive sample sales chart",
                    },
                    { corporate: n.corporate, month: n.monthLong, online: n.online, retail: n.retail, total: n.total },
                  ),
                  s = e.formatMessage(
                    {
                      id: "electron.onboarding.conversationalOnboarding.sampleVisualization.tooltipTitle",
                      defaultMessage: "{month} · {total, number} orders",
                      description: "Title in the interactive sample sales chart tooltip for one month",
                    },
                    { month: n.monthLong, total: n.total },
                  )
                return `<div class="bar" role="img" tabindex="0" aria-label="${i(r)}" style="--bar-height:${a}%">
  <span class="total">${i(e.formatNumber(n.total))}</span>
  <span class="stack" aria-hidden="true">
    ${t.series.map(({ key: e }, t) => `<span class="segment series-${t + 1}" style="--series-value:${n[e]}"></span>`).join("")}
  </span>
  <span class="month" aria-hidden="true">${i(n.month)}</span>
  <template>
    <div class="tooltip-title">${i(s)}</div>
    ${o}
  </template>
</div>`
              })
              .join(""),
            s = o
              .map((t) => `<span style="--tick-position:${((1300 - t) / 1300) * 100}%">${i(e.formatNumber(t))}</span>`)
              .join(""),
            l = o
              .filter((e) => e > 0)
              .map((e) => `<span class="grid-line" style="--tick-position:${((1300 - e) / 1300) * 100}%"></span>`)
              .join("")
          return {
            fragment: `<style>
.sample-sales-chart{box-sizing:border-box;width:100%;padding:20px 18px 14px;color:var(--foreground);font-family:var(--font-sans);background:var(--background)}
.chart-heading{display:flex;flex-wrap:wrap;align-items:start;justify-content:space-between;gap:12px;margin-bottom:18px}
.chart-title{margin:0;font-size:24px;line-height:1.2;font-weight:700}.chart-subtitle{margin:5px 0 0;max-width:560px;color:var(--muted-foreground);font-size:14px;line-height:1.4}
.legend{display:flex;flex-wrap:wrap;gap:8px 16px;padding-top:4px;color:var(--muted-foreground);font-size:13px}.legend-item{display:inline-flex;align-items:center;gap:6px}.legend-swatch,.tooltip-swatch{display:inline-block;width:10px;height:10px;border-radius:3px}
.series-1{background:var(--viz-series-1)}.series-2{background:var(--viz-series-2)}.series-3{background:var(--viz-series-3)}
.chart-scroll{overflow:visible;padding:8px 0 4px}.plot-layout{display:grid;grid-template-columns:48px minmax(0,1fr)}
.y-axis{position:relative;height:360px;color:var(--muted-foreground);font-size:12px}.y-axis span{position:absolute;right:10px;top:var(--tick-position);transform:translateY(-50%)}
.plot{position:relative;height:360px;border-bottom:1px solid var(--border);border-left:1px solid var(--border)}.grid-line{position:absolute;right:0;left:0;top:var(--tick-position);border-top:1px solid var(--border);pointer-events:none}
.bars{position:absolute;inset:0 12px;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:clamp(6px,1vw,12px)}
.bar{position:relative;display:flex;height:100%;min-width:0;cursor:default;align-items:stretch;justify-content:flex-end;border:0;padding:0;color:var(--foreground);font:inherit;background:transparent;outline:none}
.bar:focus-visible{border-radius:4px;box-shadow:0 0 0 2px var(--ring)}.bar:hover .stack,.bar:focus-visible .stack{filter:brightness(1.06);transform:translateY(-2px)}
.stack{position:absolute;inset:auto 0 0;display:flex;height:var(--bar-height);min-height:2px;flex-direction:column-reverse;overflow:hidden;border-radius:4px 4px 0 0;transition:transform 120ms ease,filter 120ms ease}.segment{min-height:1px;flex:var(--series-value)}
.total{position:absolute;bottom:calc(var(--bar-height) + 6px);left:50%;transform:translateX(-50%);font-size:11px;font-weight:600;white-space:nowrap}.month{position:absolute;top:calc(100% + 9px);left:50%;transform:translateX(-50%);color:var(--muted-foreground);font-size:12px;white-space:nowrap}
.tooltip{position:absolute;z-index:5;min-width:180px;max-width:240px;border:1px solid var(--border);border-radius:10px;padding:10px 12px;color:var(--popover-foreground);font-size:12px;background:var(--popover);box-shadow:0 8px 24px color-mix(in srgb,var(--foreground) 14%,transparent);pointer-events:none;transform:translateX(-50%)}
.tooltip[hidden]{display:none}.tooltip-title{margin-bottom:7px;font-weight:700}.tooltip-row{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:4px}.tooltip-row>span{display:flex;align-items:center;gap:6px}.tooltip-swatch{width:8px;height:8px}
.axis-caption{margin-top:26px;text-align:center;color:var(--muted-foreground);font-size:12px}
@media(max-width:560px){.sample-sales-chart{padding-inline:8px}.chart-title{font-size:20px}}
</style>
<section class="sample-sales-chart" aria-label="${i(t.accessibilityDescription)}">
  <header class="chart-heading">
    <div><h2 class="chart-title">${i(t.title)}</h2><p class="chart-subtitle">${i(t.subtitle)}</p></div>
    <div class="legend" aria-label="${i(t.title)}">${n}</div>
  </header>
  <div class="chart-scroll">
    <div class="plot-layout">
      <div class="y-axis" aria-hidden="true">${s}</div>
      <div class="plot"><div aria-hidden="true">${l}</div><div class="bars">${r}</div><div class="tooltip" role="status" hidden></div></div>
    </div>
  </div>
  <div class="axis-caption">${i(t.ordersLabel)}</div>
</section>
<script>
(() => {
  const script = document.currentScript;
  const root = script?.previousElementSibling;
  const viewport = root?.querySelector('.chart-scroll');
  const plot = root?.querySelector('.plot');
  const tooltip = root?.querySelector('.tooltip');
  if (!(viewport instanceof HTMLElement) || !(plot instanceof HTMLElement) || !(tooltip instanceof HTMLElement)) return;
  let active = null;
  const hide = (trigger) => {
    if (active !== trigger) return;
    active = null;
    tooltip.hidden = true;
  };
  const show = (trigger, clientX) => {
    const template = trigger.querySelector('template');
    if (!(template instanceof HTMLTemplateElement)) return;
    active = trigger;
    tooltip.replaceChildren(template.content.cloneNode(true));
    tooltip.hidden = false;
    const plotRect = plot.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const stackRect = trigger.querySelector('.stack')?.getBoundingClientRect() ?? triggerRect;
    const desiredX = clientX ?? triggerRect.left + triggerRect.width / 2;
    const tooltipRect = tooltip.getBoundingClientRect();
    const visibleLeft = Math.max(0, viewportRect.left - plotRect.left);
    const visibleRight = Math.min(plotRect.width, viewportRect.right - plotRect.left);
    const x = Math.max(visibleLeft + tooltipRect.width / 2 + 8, Math.min(visibleRight - tooltipRect.width / 2 - 8, desiredX - plotRect.left));
    const stackTop = stackRect.top - plotRect.top;
    const above = stackTop - tooltipRect.height - 8;
    const preferredY = above >= 8 ? above : stackTop + 8;
    const y = Math.max(8, Math.min(plotRect.height - tooltipRect.height - 8, preferredY));
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
  };
  for (const trigger of root.querySelectorAll('.bar')) {
    trigger.addEventListener('pointerenter', (event) => show(trigger, event.clientX));
    trigger.addEventListener('pointermove', (event) => show(trigger, event.clientX));
    trigger.addEventListener('pointerleave', () => hide(trigger));
    trigger.addEventListener('focus', () => show(trigger));
    trigger.addEventListener('blur', () => hide(trigger));
  }
})();
<\/script>`,
            title: t.title,
          }
        },
      },
    )
  },
  YxgN(e, t, n) {
    var a = n("ASxG"),
      o = n("Ghh3"),
      i = n("Mnx9"),
      r = n("IwWv"),
      s = n("OTo7")
    n.d(
      t,
      {},
      {
        B: async function ({ accountId: e, userId: t, locale: n, mailProvider: l, role: c, mode: d, signal: u }) {
          let p,
            g = { provider_id: "codex-starter-tasks", role: c, mail_provider: l },
            m = {
              additionalHeaders: { ...(0, i.n)(), "oai-language": n },
              expectedErrorStatuses: [404, 503],
              expectedIdentity: { accountId: e, userId: t },
              signal: AbortSignal.any([u, AbortSignal.timeout("cached" === d ? 2e3 : 1e4)]),
            }
          if (
            "pending" ===
            (p =
              "prewarm" === d
                ? await o.Request.safePost("/onboarding/recommendations", { ...m, requestBody: g })
                : "cached" === d
                  ? await o.Request.safeGet("/onboarding/recommendations/status", { ...m, parameters: { query: g } })
                  : await o.Request.safeGet("/onboarding/recommendations", {
                      ...m,
                      parameters: { query: { ...g, default: !0 } },
                    })).status
          )
            return null
          if ("codex-starter-tasks" !== p.provider_id) throw Error("Unexpected onboarding recommendation provider")
          return {
            role: c,
            assignment_source: p.assignment_source,
            personalized_task_fallbacks: p.personalized_task_fallbacks,
            task_ids: a.array(s.Ll).parse(p.task_ids),
            task_definitions: (0, r.YL)({ tasks: p.tasks }).tasks,
          }
        },
      },
    )
  },
  vDbA(e, t, n) {
    var a = n("zTeN"),
      o = n("svjy"),
      i = n("OWtl"),
      r = n("YxgN")
    let s = (0, a.vU)(i.u, (e) => ({
      queryKey: ["starter-task-personalization-prewarm", e],
      enabled: !1,
      staleTime: 1 / 0,
      gcTime: 1 / 0,
      retry: !1,
      queryFn: ({ signal: t }) => (0, r.B)({ ...e, role: null, mailProvider: null, mode: "prewarm", signal: t }),
    }))
    n.d(
      t,
      {},
      {
        K: function (e, t, n) {
          let a = e.personalized_task_fallbacks
          if (null == t || null == a) return e
          let o = { ...e.task_definitions },
            i = e.task_ids.map((i) => {
              let r = n.find((e) => e === i || a[e] === i),
                s = null == r ? void 0 : t.task_definitions[r],
                l = e.task_definitions[i]
              return null != r &&
                r !== i &&
                t.task_ids.includes(r) &&
                null != s &&
                null != l &&
                s.pluginName === l.pluginName &&
                s.pluginId === l.pluginId
                ? ((o[r] = s), r)
                : i
            })
          return { ...e, task_ids: i, task_definitions: o }
        },
        _: function (e, t, n) {
          t.isLoading ||
            n.isLoading ||
            "chatgpt" !== t.authMethod ||
            null == t.accountId ||
            null == t.userId ||
            !n.shouldShowStandardOnboarding ||
            !n.shouldShowConversationalOnboarding ||
            n.shouldShowTeenOnboarding ||
            e.query
              .getOrFetch(s, { accountId: t.accountId, userId: t.userId, locale: e.get(o.g).locale })
              .catch(() => void 0)
        },
      },
    )
  },
  IwWv(e, t, n) {
    n.d(t, { lj: () => p, YL: () => m, qu: () => g })
    var a = n("QosV"),
      o = n("DBCl"),
      i = n("ASxG"),
      r = n("hZax"),
      s = n("Qgfj")
    let l = {
        tasks: {
          computer_use: n("Dtac").o,
          hold_next_free_hour: {
            microsoftPluginId: "plugin_connector_1p_fd0f4f41caa88191a9456514bbffa06d",
            pluginId: "plugin_connector_1p_f8509de903288191b14a160c6c5d20b0",
            pluginName: "google-calendar",
            prompt:
              "Use the available Google Calendar integration to find the user's first available 30-minute block during normal working hours in the next 7 days. Use the user's primary calendar without asking follow-up questions. Create one native Google Calendar Focus Time event titled `Focus time` for that block. Call create_event with calendar_id `primary`, event_type `focusTime`, attendees `[]`, self_attendance `omit`, add_google_meet `false`, auto_decline_mode `declineNone`, chat_status `doNotDisturb`, and transparency `opaque`. Make only one native Focus Time attempt; if Google rejects it, create one standard busy event for the same block with event_type `default`, attendees `[]`, self_attendance `omit`, add_google_meet `false`, and transparency `opaque` instead of retrying other Focus Time variations. If no valid block is available in the next 7 days, do not create an event. When reporting a completed result, set output to a concise, human-readable start date and time such as `Fri, Jun 26 at 10:30 AM`; omit the end time and time zone",
            microsoftPrompt:
              "Use the available Outlook Calendar integration to find the user's first available 30-minute block during normal working hours in the next 7 days. Use the user's primary calendar without asking follow-up questions. Create a calendar event titled `Focus time` for that block to hold it. If no valid block is available in the next 7 days, do not create an event. When reporting a completed result, set output to a concise, human-readable start date and time such as `Fri, Jun 26 at 10:30 AM`; omit the end time and time zone",
            messages: {
              completionLinkLabel: (0, s.zR)({
                id: "electron.onboarding.conversationalOnboarding.pluginTasks.calendar.completionLinkLabel",
                defaultMessage: "Focus Block",
                description: "Link label for the focus block created during conversational onboarding",
              }),
              completionMessage: (0, s.zR)({
                id: "electron.onboarding.conversationalOnboarding.pluginTasks.calendar.completionMessage",
                defaultMessage:
                  "{hasText, select, yes {I scheduled a 30-minute block: {text}} other {Your focus block is scheduled}}\nHere’s a link: {link}\nNow you’ve got focus time on the books. That’s our first task done. You’re ready to go.",
                description:
                  "Completion message after conversational onboarding creates a focus block. Preserve {text} and {link}.",
              }),
              label: (0, s.zR)({
                id: "electron.onboarding.conversationalOnboarding.pluginTasks.calendar.label",
                defaultMessage: "Schedule a focus block",
                description:
                  "Conversational onboarding starter task that holds the user's next available 30-minute block during the next seven days",
              }),
            },
          },
          send_message_to_self: {
            microsoftPluginId: "plugin_connector_1p_eba8b52fe53881918408d4b46b957644",
            pluginId: "plugin_asdk_app_69a1d78e929881919bba0dbda1f6436d",
            pluginName: "slack",
            prompt:
              "Use the available Slack integration to read the current user's profile, then send a direct message to that same Slack user. Send exactly `Hi from your ChatGPT assistant!` and no additional message text. Do not ask the user to identify themselves or choose a recipient",
            microsoftPrompt:
              "Use the available Microsoft Teams integration to send the current user a note to self. Prefer an existing self-chat; otherwise create a one-member group chat containing only the caller. Send exactly `Hi from your agent!` and no additional message text. Do not ask the user to identify themselves or choose a recipient",
            messages: {
              completionLinkLabel: (0, s.zR)({
                id: "electron.onboarding.conversationalOnboarding.pluginTasks.messaging.completionLinkLabel.default",
                defaultMessage: "Slack DM",
                description: "Link label for the Slack direct message sent during conversational onboarding",
              }),
              completionMessage: (0, s.zR)({
                id: "electron.onboarding.conversationalOnboarding.pluginTasks.messaging.completionMessage",
                defaultMessage:
                  "Message sent\nHere’s a link: {link}\nThat’s our first task done. When you’re ready, I can take it further: recurring reminders, scheduled updates, automations that run on their own. You’re all set.",
                description: "Completion message after conversational onboarding sends a message. Preserve {link}.",
              }),
              label: (0, s.zR)({
                id: "electron.onboarding.conversationalOnboarding.pluginTasks.messaging.label",
                defaultMessage: "Send a message to myself",
                description: "Conversational onboarding starter task that sends the user a message",
              }),
              microsoftCompletionLinkLabel: (0, s.zR)({
                id: "electron.onboarding.conversationalOnboarding.pluginTasks.messaging.completionLinkLabel.microsoft",
                defaultMessage: "Teams chat",
                description:
                  "Link label for the Microsoft Teams self-chat message sent during conversational onboarding",
              }),
            },
          },
        },
      },
      c = i.object({
        id: i.string().min(1),
        defaultMessage: i.string().min(1),
        description: i.string().min(1),
        translations: i.record(i.string(), i.string().min(1)).optional(),
      }),
      d = i.object({
        completionLinkLabel: c,
        completionMessage: c.refine(
          ({ defaultMessage: e, translations: t }) =>
            [e, ...Object.values(t ?? {})].every(
              (t) =>
                2 === t.split("{link}").length &&
                t.split("{text}").length <= 2 &&
                t.includes("{text}") === e.includes("{text}"),
            ),
          "Expected exactly one {link} and at most one {text}",
        ),
        label: c,
        microsoftCompletionLinkLabel: c.optional(),
      }),
      u = i.object({
        connectorResolved: i.boolean().optional(),
        messages: d,
        microsoftPluginId: i.string().min(1).optional(),
        microsoftPrompt: i.string().min(1).optional(),
        pluginId: i.string().min(1).optional(),
        pluginName: i.string().min(1),
        prompt: i.string().min(1),
        revertPrompt: i.string().min(1).optional(),
      }),
      p = i.object({ tasks: i.record(i.string().min(1), u) }).parse(l)
    function g(e) {
      let t,
        n,
        o,
        i = (0, a.c)(6)
      i[0] !== e ? ((t = void 0 === e ? {} : e), (i[0] = e), (i[1] = t)) : (t = i[1])
      let { disableExposureLog: s } = t,
        l = void 0 !== s && s
      i[2] !== l ? ((n = { disableExposureLog: l }), (i[2] = l), (i[3] = n)) : (n = i[3])
      let { value: c } = (0, r.Fj)("1242950165", n)
      return (i[4] !== c ? ((o = m(c)), (i[4] = c), (i[5] = o)) : (o = i[5]), o)
    }
    function m(e) {
      let t = i.record(i.string().min(1), i.unknown()).safeParse(e.tasks)
      return t.success
        ? {
            tasks: Object.fromEntries(
              Object.entries(t.data).flatMap(([e, t]) => {
                if ("computer_use" === e) return []
                let n = u.safeParse(t)
                return n.success && n.data.pluginName !== o.t_C ? [[e, n.data]] : []
              }),
            ),
          }
        : { tasks: {} }
    }
  },
  OTo7(e, t, n) {
    var a = n("ASxG")
    let o = a.string().min(1),
      i = a.enum(["desktop_note", "csv_chart", "data_science_csv_chart", "view_protein_structure"]),
      r = a.object({
        remotePluginId: a.string().min(1).optional(),
        iconAppId: a.string().min(1).optional(),
        label: a.string().min(1),
      })
    n.d(
      t,
      {},
      { Ll: o, MV: r, u8: i, wJ: ["desktop_note", "csv_chart", "hold_next_free_hour", "send_message_to_self"] },
    )
  },
  NJKr(e, t, n) {
    n.d(t, {
      zq: () => W,
      Oi: () => en,
      Dw: () => J,
      Cx: () => $,
      $P: () => B,
      K$: () => H,
      ci: () => ee,
      SM: () => Y,
      lT: () => Z,
      Bd: () => K,
      hv: () => et,
      wG: () => F,
      x$: () => X,
      S: () => V,
      oe: () => G,
      qL: () => q,
    })
    var a = n("QosV"),
      o = n("T0Rc"),
      i = n("T4l2"),
      r = n.n(i),
      s = n("zTeN"),
      l = n("DBCl"),
      c = n("zd8w"),
      d = n("Wf1j"),
      u = n("EOo5"),
      p = n("wwME"),
      g = n("Lz8z"),
      m = n("b5As"),
      h = n("hZax"),
      f = n("YxgN"),
      v = n("vDbA"),
      b = n("IwWv"),
      y = n("OTo7"),
      x = n("aLZ2"),
      A = n("Lru8"),
      C = n("sjq4"),
      w = n("DvNy"),
      I = n("EOWJ"),
      O = n("ABep"),
      k = n("Pyfq"),
      _ = n("NEbx"),
      S = n("BGqp"),
      N = n("QSwz"),
      M = n("Sd8U"),
      E = n("vmZO"),
      T = n("CMJl"),
      j = n("gchn")
    let R = y.Ll.array().catch([]),
      P = { desktop_note: C.Ue, csv_chart: A.SQ },
      D = {
        ...P,
        data_science_csv_chart: A.GO,
        view_protein_structure: function (e, t, n) {
          let o = (0, I.P)({ ...e, pluginName: "structure-viewer" }, t, n)
          return {
            ...o,
            reset(e) {
              ;(o.reset(e), e.set(T.e, null))
            },
            retry: (e, t, n) => (e.set(T.e, null), o.retry(e, t, n)),
            View: function (e) {
              var t, n
              let i,
                r,
                l,
                c,
                d,
                u,
                p,
                g,
                m,
                h,
                f,
                v,
                b,
                y = (0, a.c)(44),
                x = (0, s.Ul)(T.e),
                A = (0, s.Ul)(w.s7)
              if (null == x || null == A) {
                let t
                return (y[0] !== e ? ((t = (0, O.jsx)(o.View, { ...e })), (y[0] = e), (y[1] = t)) : (t = y[1]), t)
              }
              y[2] !== e.context
                ? ((t = e.context),
                  (n = o),
                  (i = t.remotePlugins?.find((e) => e.pluginId === n.pluginId)?.plugin),
                  (y[2] = e.context),
                  (y[3] = i))
                : (i = y[3])
              let C = i,
                I = C?.logoPath ?? null,
                j = C?.logoDarkPath ?? null
              ;(y[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = ["structure-viewer"]), (y[4] = r))
                : (r = y[4]),
                y[5] !== x.app.description ||
                y[6] !== x.app.id ||
                y[7] !== x.app.installUrl ||
                y[8] !== x.app.name ||
                y[9] !== I ||
                y[10] !== j
                  ? ((l = {
                      appMetadata: null,
                      branding: null,
                      description: x.app.description,
                      distributionChannel: null,
                      iconAssets: null,
                      iconDarkAssets: null,
                      id: x.app.id,
                      installUrl: x.app.installUrl,
                      isAccessible: !1,
                      isEnabled: !0,
                      labels: null,
                      logoUrl: I,
                      logoUrlDark: j,
                      name: x.app.name,
                      pluginDisplayNames: r,
                    }),
                    (y[5] = x.app.description),
                    (y[6] = x.app.id),
                    (y[7] = x.app.installUrl),
                    (y[8] = x.app.name),
                    (y[9] = I),
                    (y[10] = j),
                    (y[11] = l))
                  : (l = y[11]))
              let R = l,
                P = `/welcome/conversational-onboarding/${A.conversationId}`
              return (
                y[12] !== A.conversationId || y[13] !== A.hostId || y[14] !== P
                  ? ((c = {
                      conversationId: A.conversationId,
                      hostId: A.hostId,
                      pathname: P,
                      projectContext: null,
                      routeKind: "local-thread",
                      routeTemplate: "/welcome/conversational-onboarding/:conversationId",
                      search: "",
                    }),
                    (y[12] = A.conversationId),
                    (y[13] = A.hostId),
                    (y[14] = P),
                    (y[15] = c))
                  : (c = y[15]),
                y[16] !== A.conversationId || y[17] !== A.hostId
                  ? ((d = (0, O.jsx)(k.$, { conversationId: A.conversationId, hostId: A.hostId })),
                    (y[16] = A.conversationId),
                    (y[17] = A.hostId),
                    (y[18] = d))
                  : (d = y[18]),
                y[19] !== A.conversationId
                  ? ((u = (0, M.p)(A.conversationId, "main", A.conversationId)),
                    (y[19] = A.conversationId),
                    (y[20] = u))
                  : (u = y[20]),
                y[21] !== x.item ? ((p = [x.item]), (y[21] = x.item), (y[22] = p)) : (p = y[22]),
                y[23] !== R || y[24] !== A.conversationId || y[25] !== A.hostId || y[26] !== p
                  ? ((g = (0, O.jsx)(_.g, {
                      conversationId: A.conversationId,
                      hostId: A.hostId,
                      items: p,
                      appInfoOverride: R,
                      shouldInitialize: !0,
                    })),
                    (y[23] = R),
                    (y[24] = A.conversationId),
                    (y[25] = A.hostId),
                    (y[26] = p),
                    (y[27] = g))
                  : (g = y[27]),
                y[28] !== R || y[29] !== A.conversationId || y[30] !== A.hostId || y[31] !== x.item
                  ? ((m = (0, O.jsx)(S.T, {
                      conversationId: A.conversationId,
                      hostId: A.hostId,
                      item: x.item,
                      appInfoOverride: R,
                      shouldAutoExpandMcpApp: !0,
                    })),
                    (y[28] = R),
                    (y[29] = A.conversationId),
                    (y[30] = A.hostId),
                    (y[31] = x.item),
                    (y[32] = m))
                  : (m = y[32]),
                y[33] === Symbol.for("react.memo_cache_sentinel")
                  ? ((h = (0, O.jsx)(N.r, {})), (y[33] = h))
                  : (h = y[33]),
                y[34] !== g || y[35] !== m
                  ? ((f = (0, O.jsxs)("div", {
                      "data-mcp-app-portal-target": "true",
                      className: "relative flex w-full flex-col gap-4",
                      children: [g, m, h],
                    })),
                    (y[34] = g),
                    (y[35] = m),
                    (y[36] = f))
                  : (f = y[36]),
                y[37] !== f || y[38] !== u
                  ? ((v = (0, O.jsx)(s.Ui, { scope: M.PR, value: u, children: f })),
                    (y[37] = f),
                    (y[38] = u),
                    (y[39] = v))
                  : (v = y[39]),
                y[40] !== v || y[41] !== c || y[42] !== d
                  ? ((b = (0, O.jsxs)(E.R, { route: c, children: [d, v] })),
                    (y[40] = v),
                    (y[41] = c),
                    (y[42] = d),
                    (y[43] = b))
                  : (b = y[43]),
                b
              )
            },
          }
        },
      },
      L = (0, s.vP)(w.Dx, () => ({
        entries: new Map(),
        pluginIds: new Map(),
        pluginNames: new Map(),
        visibleTaskIds: null,
      })),
      z = (0, s.vP)(w.Dx, void 0),
      U = (0, s.vP)(w.Dx, null),
      F = (0, s.vP)(w.Dx, []),
      B = (0, s.un)(w.Dx, ({ get: e }) => {
        let t = e(L)
        if (null == t.visibleTaskIds || null == e(z)) return null
        let n = e(H),
          a = e(F)
        return t.visibleTaskIds.filter((e) => t.pluginNames.has(e) && !n.has(e) && !a.includes(e))
      }),
      q = (0, s.un)(w.Dx, ({ get: e }) => {
        let t = e(L).visibleTaskIds,
          n = e(B)
        if (null == t || null == n) return null
        let a = t.filter((e) => !n.includes(e))
        for (let e of Object.keys(P)) {
          if (a.length >= 2) break
          a.includes(e) || a.push(e)
        }
        return a
      }),
      G = (0, s.un)(w.Dx, ({ get: e }) => Array.from(new Set(e(L).pluginNames.values()))),
      V = (0, s.un)(w.Dx, ({ get: e }) => Array.from(new Set(e(L).pluginIds.values()))),
      W = (0, s.i1)(w.Dx, (e, { get: t }) => t(L).entries.get(e) ?? null),
      K = (0, s.i1)(w.Dx, (e, { get: t }) => {
        if (null == e) return null
        let n = t(U)
        return n?.taskId === e ? n.entry : t(W, e)
      }),
      H = (0, s.un)(w.Dx, ({ get: e }) => {
        let t = new Map(),
          n = e(z)
        if (null == n) return t
        for (let [a, o] of e(L).pluginIds) {
          let e = n.find((e) => e.plugin.remotePluginId === o)
          null != e && t.set(a, e)
        }
        return t
      })
    function X(e, t) {
      let n,
        i,
        l,
        b,
        x,
        A,
        C,
        w,
        I,
        O,
        k,
        _,
        S = (0, a.c)(52),
        {
          computerUseAvailable: N,
          isComputerUseAvailabilityLoading: M,
          mailProvider: E,
          plan: T,
          plugins: D,
          selectedRole: U,
        } = t,
        { accountId: F, authMethod: B, userId: G } = (0, u.As)(),
        { locale: V } = (0, d.A)(),
        { platform: W, isLoading: K } = (0, p.V)(),
        H = (0, h.Ou)("2165992955"),
        X = (0, h.Ou)("1852804523")
      S[0] === Symbol.for("react.memo_cache_sentinel") ? ((n = { disableExposureLog: !0 }), (S[0] = n)) : (n = S[0])
      let Y = (0, h.Ou)("2165992955", n),
        Z = (0, s.Ul)(q)
      S[1] !== Y || S[2] !== U
        ? ((i = R.parse(Y.get("general", []))),
          (l = null == U ? null : R.parse(Y.get(U, i))),
          (S[1] = Y),
          (S[2] = U),
          (S[3] = i),
          (S[4] = l))
        : ((i = S[3]), (l = S[4]))
      let $ = l,
        et = "chatgpt" === B && null != U && null != E && null != F && null != G && !K && !M
      ;(S[5] !== F ||
      S[6] !== N ||
      S[7] !== i ||
      S[8] !== V ||
      S[9] !== E ||
      S[10] !== W ||
      S[11] !== $ ||
      S[12] !== U ||
      S[13] !== G
        ? ((b = ["conversational-onboarding-task-catalog", F, G, N, W, V, E, U, i, $]),
          (S[5] = F),
          (S[6] = N),
          (S[7] = i),
          (S[8] = V),
          (S[9] = E),
          (S[10] = W),
          (S[11] = $),
          (S[12] = U),
          (S[13] = G),
          (S[14] = b))
        : (b = S[14]),
        S[15] !== F || S[16] !== i || S[17] !== V || S[18] !== E || S[19] !== $ || S[20] !== U || S[21] !== G
          ? ((x = async (e) => {
              let { signal: t } = e
              if (null == E || null == U || null == F || null == G)
                throw Error("Missing backend onboarding task context")
              try {
                let e = { accountId: F, userId: G, locale: V, mailProvider: E, role: U, signal: t },
                  [n, a] = await Promise.all([
                    (0, f.B)({ ...e, mode: "generic" }),
                    (0, f.B)({ ...e, role: null, mailProvider: null, mode: "cached" }).catch(
                      () => (t.throwIfAborted(), null),
                    ),
                  ])
                return null == n ? Q(U) : (0, v.K)(n, a, "general" === n.assignment_source ? i : ($ ?? i))
              } catch {
                return (t.throwIfAborted(), Q(U))
              }
            }),
            (S[15] = F),
            (S[16] = i),
            (S[17] = V),
            (S[18] = E),
            (S[19] = $),
            (S[20] = U),
            (S[21] = G),
            (S[22] = x))
          : (x = S[22]),
        S[23] !== et || S[24] !== b || S[25] !== x
          ? ((A = { enabled: et, queryKey: b, queryFn: x, staleTime: 1 / 0, retry: !1 }),
            (S[23] = et),
            (S[24] = b),
            (S[25] = x),
            (S[26] = A))
          : (A = S[26]))
      let { data: en } = (0, o.I)(A)
      ;(S[27] !== B ||
      S[28] !== en ||
      S[29] !== N ||
      S[30] !== M ||
      S[31] !== K ||
      S[32] !== V ||
      S[33] !== E ||
      S[34] !== T ||
      S[35] !== W ||
      S[36] !== e ||
      S[37] !== U ||
      S[38] !== X
        ? ((C = () => {
            if (null == U || null == E || K || M) return
            let t = "chatgpt" === B ? en : Q(U)
            if (null == t) return
            let { catalog: n } = (function ({
              computerUseAvailable: e = !0,
              platform: t,
              config: n,
              taskIds: a,
              locale: o,
              mailProvider: i,
              plan: s,
              randomizeOrder: l,
            }) {
              let c = new Map(),
                d = new Map(),
                u = new Map(),
                p = (0, g.tN)(i, s),
                h = (a) => {
                  for (let i of a) {
                    if (c.size >= 8) break
                    if (c.has(i) || ("computer_use" === i && (!e || "macOS" !== t))) continue
                    let a = J(i, n, o, p)
                    if (null != a) {
                      if (ee(a)) {
                        let e = a.pluginName
                        if (!(0, m.sM)(e, s)) continue
                        ;(null != a.pluginId && d.set(i, a.pluginId), u.set(i, e))
                      }
                      c.set(i, a)
                    }
                  }
                }
              h(a)
              let f = c.size > 0
              return (
                f || h(y.wJ),
                {
                  catalog: {
                    entries: new Map([...Object.entries(P), ...c]),
                    pluginIds: d,
                    pluginNames: u,
                    visibleTaskIds: l ? r()(Array.from(c.keys())) : Array.from(c.keys()),
                  },
                  hasAssignedTasks: f,
                }
              )
            })({
              computerUseAvailable: N,
              platform: W,
              config: { tasks: t.task_definitions },
              taskIds: t.task_ids,
              locale: V,
              mailProvider: E,
              plan: T,
              randomizeOrder: X.get("randomize_order", !1),
            })
            !(function (e, t) {
              e.set(L, t)
              let n = e.get(j.hu)
              if (null == n) return
              let a = n.declinedTasks.filter((e) => t.entries.has(e))
              if ("capabilities" === n.phase || null == n.selectedTask || t.entries.has(n.selectedTask)) {
                a.length !== n.declinedTasks.length && e.set(j.hu, { ...n, declinedTasks: a })
                return
              }
              e.set(j.hu, {
                ...n,
                declinedTasks: a,
                phase: "task",
                selectedTask: null,
                permissionStatus: "not-requested",
              })
            })(e, n)
          }),
          (w = [B, en, N, V, E, M, K, W, T, e, U, X]),
          (S[27] = B),
          (S[28] = en),
          (S[29] = N),
          (S[30] = M),
          (S[31] = K),
          (S[32] = V),
          (S[33] = E),
          (S[34] = T),
          (S[35] = W),
          (S[36] = e),
          (S[37] = U),
          (S[38] = X),
          (S[39] = C),
          (S[40] = w))
        : ((C = S[39]), (w = S[40])),
        (0, c.useEffect)(C, w),
        S[41] !== en || S[42] !== et || S[43] !== H || S[44] !== U || S[45] !== Z
          ? ((I = () => {
              null != U && et && null != en && null != Z && 0 !== Z.length && (H.get("general", []), H.get(U, null))
            }),
            (O = [en, et, H, U, Z]),
            (S[41] = en),
            (S[42] = et),
            (S[43] = H),
            (S[44] = U),
            (S[45] = Z),
            (S[46] = I),
            (S[47] = O))
          : ((I = S[46]), (O = S[47])),
        (0, c.useEffect)(I, O),
        S[48] !== D || S[49] !== e
          ? ((k = () => {
              var t, n
              ;((t = e), (n = D), t.set(z, n))
            }),
            (_ = [D, e]),
            (S[48] = D),
            (S[49] = e),
            (S[50] = k),
            (S[51] = _))
          : ((k = S[50]), (_ = S[51])),
        (0, c.useEffect)(k, _))
    }
    function Q(e) {
      return { role: e, task_ids: [...y.wJ], task_definitions: b.lj.tasks }
    }
    function Y(e, t) {
      e.set(F, (e) => (e.includes(t) ? e : [...e, t]))
    }
    function Z(e) {
      e.set(F, [])
    }
    function J(e, t, n, a) {
      let o
      if ("computer_use" !== e && t.tasks[e]?.pluginName === l.t_C) return null
      let i = $(e)
      if (null != i) return i
      let r = y.u8.safeParse(e)
      if (r.success) {
        let o = D[r.data]
        if ("function" == typeof o) {
          let i = t.tasks[e] ?? b.lj.tasks[e]
          return null == i ? null : o(i, n, a)
        }
      }
      if (Object.hasOwn(t.tasks, e)) {
        o = t.tasks[e]
        let n = b.lj.tasks[e]
        n?.pluginName === o.pluginName &&
          (o = {
            ...o,
            microsoftPluginId: o.microsoftPluginId ?? n.microsoftPluginId,
            pluginId: o.pluginId ?? n.pluginId,
          })
      } else Object.hasOwn(b.lj.tasks, e) && (o = b.lj.tasks[e])
      return null == o ? null : (0, I.P)(o, n, a)
    }
    function $(e) {
      if ("computer_use" === e) return (0, x.Sp)()
      let t = y.u8.safeParse(e)
      if (!t.success) return null
      let n = D[t.data]
      return "function" == typeof n ? null : n
    }
    function ee(e) {
      return null != e && "pluginName" in e
    }
    function et(e, t) {
      let n = e.get(W, t)
      if (null == n) throw Error(`Unknown conversational onboarding task: ${t}`)
      return (e.set(U, { entry: n, taskId: t }), n)
    }
    function en(e) {
      e.set(U, null)
    }
  },
  sm2s(e, t, n) {
    n.d(t, { P: () => c })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("on57"),
      r = n("Zm2g"),
      s = n("wwME")
    n("zd8w")
    var l = (e) =>
      (0, a.jsx)("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, a.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          transform: "translate(2.48805 1.532)",
          d: "M10.2207 0.000976562C11.1145 0.00109689 11.9405 0.477458 12.3867 1.25195L13.5264 3.23047H15.8115C16.7043 3.23076 17.5301 3.70724 17.9766 4.48047L18.6855 5.70898C19.1319 6.48231 19.1319 7.43565 18.6855 8.20898L17.542 10.1865L18.6875 12.1641C19.1352 12.9378 19.1362 13.8928 18.6894 14.667L17.9805 15.8945C17.5339 16.6679 16.7084 17.1444 15.8154 17.1445H13.5303L12.3906 19.123C11.9443 19.8976 11.1186 20.376 10.2246 20.376L8.80566 20.375C7.91404 20.3748 7.0895 19.8995 6.64257 19.1279L5.49316 17.1445H3.208C2.31498 17.1444 1.48952 16.6679 1.04296 15.8945L0.334955 14.667C-0.111975 13.8928 -0.111654 12.9388 0.335931 12.165L1.48046 10.1875L0.338861 8.20898C-0.107664 7.43552 -0.107664 6.48245 0.338861 5.70898L1.04785 4.48047C1.49416 3.70752 2.31935 3.23103 3.21191 3.23047L5.49511 3.22852L6.63867 1.25C7.08527 0.476602 7.91061 -1.95133e-07 8.80371 0L10.2207 0.000976562ZM9.51074 7.18945C7.85394 7.18945 6.51083 8.53268 6.51074 10.1895C6.51074 11.8463 7.85388 13.1895 9.51074 13.1895C11.1676 13.1894 12.5107 11.8463 12.5107 10.1895C12.5106 8.53269 11.1675 7.18946 9.51074 7.18945Z",
          fill: "currentColor",
        }),
      })
    function c(e) {
      let t,
        n,
        c,
        d = (0, o.c)(9),
        { className: u } = e,
        { platform: p } = (0, s.V)(),
        g = "macOS" === p ? "/System/Applications/System Settings.app" : null
      d[0] !== g ? ((t = { appPath: g, size: "medium" }), (d[0] = g), (d[1] = t)) : (t = d[1])
      let { iconMedium: m } = (0, r.x)(t)
      if (null != m) {
        let e
        return (
          d[2] !== u || d[3] !== m
            ? ((e = (0, a.jsx)("img", { alt: "", "aria-hidden": !0, className: u, src: m })),
              (d[2] = u),
              (d[3] = m),
              (d[4] = e))
            : (e = d[4]),
          e
        )
      }
      return (
        d[5] !== u ? ((n = (0, i.A)("text-tertiary", u)), (d[5] = u), (d[6] = n)) : (n = d[6]),
        d[7] !== n ? ((c = (0, a.jsx)(l, { className: n })), (d[7] = n), (d[8] = c)) : (c = d[8]),
        c
      )
    }
  },
  qmqG(e, t, n) {
    var a = n("zTeN"),
      o = n("DBCl"),
      i = n("Dgwo"),
      r = n("TL6G"),
      s = n("OF5O"),
      l = n("md5w"),
      c = n("B81s"),
      d = n("GaA7"),
      u = n("c1Td")
    n("WFY2")
    var p = n("DvNy"),
      g = n("TfgZ")
    let m = (0, a.vP)(p.Dx, !1),
      h = (0, a.vP)(p.Dx, !1),
      f = (0, a.vP)(p.Dx, 0)
    n.d(
      t,
      {},
      {
        Gn: async function (e, t, n, a) {
          let p = (await t.refetchLocalPlugins())?.find((e) => e.plugin.name === o.t_C)
          if (!n.isActive()) return { status: "cancelled" }
          if (null == p) return { status: "unavailable" }
          if ((await a?.(), !n.isActive())) return { status: "cancelled" }
          if (
            ((n.accessStage = "enable-bundled-plugin-installation"),
            await (0, s.U)(e, o.Q2Y.COMPUTER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED, !1),
            !p.plugin.installed)
          ) {
            if (
              ((n.accessStage = "install-plugin"),
              !(
                await (0, g.Vu)({
                  scope: e,
                  hostId: t.hostId,
                  pluginNames: [o.t_C],
                  plugins: [p],
                  refetchLocalPlugins: t.refetchLocalPlugins,
                })
              ).includes(o.t_C))
            )
              throw Error("The bundled computer-use plugin could not be installed")
            if (
              ((n.accessStage = "refresh-installed-plugin"),
              null == (p = (await t.refetchLocalPlugins())?.find((e) => e.plugin.name === o.t_C)))
            )
              throw Error("The bundled computer-use plugin was not installed")
          }
          if (!p.plugin.enabled) {
            n.accessStage = "read-plugin-config"
            let a = await (0, c.dG)(e, t.queryClient, t.hostId)
            ;((n.accessStage = "enable-plugin"),
              await (0, i.V)(e, t.hostId).sendRequest("config/batchWrite", {
                edits: (0, l.g)({ enabled: !0, pluginId: p.plugin.id }),
                expectedVersion: a?.expectedVersion ?? null,
                filePath: a?.filePath ?? null,
                reloadUserConfig: !0,
              }),
              (n.accessStage = "refresh-enabled-plugin"),
              (p = (await t.refetchLocalPlugins())?.find((e) => e.plugin.name === o.t_C)))
          }
          if (!p?.plugin.installed || !p.plugin.enabled)
            throw Error("The bundled computer-use plugin could not be enabled")
          if (
            ((n.accessStage = "sync-computer-use-runtime"),
            await d.appServices.browserPluginConfig?.syncAfterPluginChange(),
            !n.isActive())
          )
            return { status: "cancelled" }
          n.accessStage = "load-computer-use-skill"
          let { data: m } = await (0, u.b)(e, t.hostId, [t.projectRoot], { forceReload: !0 }),
            h = m.flatMap(({ skills: e }) => e).find(({ name: e }) => e === `${o.t_C}:${o.t_C}`)
          if (!n.isActive()) return { status: "cancelled" }
          if (null == d.appServices.conversationalOnboarding)
            throw Error("Computer Use permission setup is unavailable")
          for (n.accessStage = "request-native-permissions"; ;) {
            let e = await d.appServices.conversationalOnboarding.requestComputerUsePermissions()
            if (!n.isActive()) return { status: "cancelled" }
            if ("granted" === e) break
          }
          return (
            r.O1.dispatchMessage("open-current-main-window", { stealFocus: !0 }),
            { status: "ready", skill: h?.enabled ? { type: "skill", name: h.name, path: h.path } : null }
          )
        },
        Jx: function (e, t) {
          if (e.get(m)) return null
          let n = e.get(f) + 1
          ;(e.set(f, n), e.set(m, !0), e.set(h, !1))
          let a = () => e.get(f) === n && t()
          return {
            accessStage: "refresh-plugin-list",
            isActive: a,
            fail() {
              a() && e.set(h, !0)
            },
            finish() {
              e.get(f) === n && e.set(m, !1)
            },
          }
        },
        TB: function (e) {
          ;(e.set(f, e.get(f) + 1), e.set(m, !1), e.set(h, !1))
        },
        jI: m,
        xM: h,
      },
    )
  },
  cRg6(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zd8w"),
      r = n("Wf1j"),
      s = n("oyxz"),
      l = n("ygO2"),
      c = n("S1hE"),
      d = n("h5BB"),
      u = n("sm2s")
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            p,
            g,
            m,
            h,
            f,
            v,
            b,
            y,
            x = (0, o.c)(39),
            {
              animate: A,
              completion: C,
              hasAdvancedCapabilitiesSetup: w,
              undo: I,
              onChooseAnotherTask: O,
              onCompletionComplete: k,
              onRetryTask: _,
            } = e,
            S = void 0 === A || A,
            N = void 0 !== w && w,
            M = (0, r.A)(),
            [E, T] = (0, i.useState)(!1)
          if ("not_completed" === C.outcome) {
            let e, t, n
            return (
              x[0] !== S || x[1] !== C.output
                ? ((e = (0, a.jsx)(c.H, { animate: S, children: C.output })), (x[0] = S), (x[1] = C.output), (x[2] = e))
                : (e = x[2]),
              x[3] !== O || x[4] !== _
                ? ((t =
                    null != _ || null != O
                      ? (0, a.jsxs)("div", {
                          className: "flex gap-3",
                          children: [
                            null == _
                              ? null
                              : (0, a.jsx)(l.$, {
                                  color: "secondary",
                                  size: "medium",
                                  onClick: _,
                                  children: (0, a.jsx)(s.A, {
                                    id: "electron.onboarding.conversationalOnboarding.tryAgain",
                                    defaultMessage: "Try again",
                                    description: "Button that retries a conversational onboarding task",
                                  }),
                                }),
                            null == O
                              ? null
                              : (0, a.jsx)(l.$, {
                                  color: "primary",
                                  size: "medium",
                                  onClick: O,
                                  children: (0, a.jsx)(s.A, {
                                    id: "electron.onboarding.conversationalOnboarding.chooseAnotherTask",
                                    defaultMessage: "Choose another task",
                                    description:
                                      "Button that returns to conversational onboarding task selection after a task could not be completed",
                                  }),
                                }),
                          ],
                        })
                      : null),
                  (x[3] = O),
                  (x[4] = _),
                  (x[5] = t))
                : (t = x[5]),
              x[6] !== e || x[7] !== t
                ? ((n = (0, a.jsxs)("div", { className: "flex flex-col items-start gap-4", children: [e, t] })),
                  (x[6] = e),
                  (x[7] = t),
                  (x[8] = n))
                : (n = x[8]),
              n
            )
          }
          return (
            x[9] !== k || x[10] !== I?.isRestored
              ? ((t = () => {
                  ;(T(!0), I?.isRestored && k?.())
                }),
                (x[9] = k),
                (x[10] = I?.isRestored),
                (x[11] = t))
              : (t = x[11]),
            x[12] !== M || x[13] !== I?.isRestored
              ? ((n = I?.isRestored
                  ? M.formatMessage({
                      id: "electron.onboarding.conversationalOnboarding.computerUse.restoredConfirmation",
                      defaultMessage: "Done. I restored your system theme.",
                      description:
                        "Assistant message shown after computer use restores the original system theme during conversational onboarding",
                    })
                  : M.formatMessage({
                      id: "electron.onboarding.conversationalOnboarding.computerUse.changedConfirmation",
                      defaultMessage: "Done. I changed your computer theme.",
                      description:
                        "Assistant message shown after computer use changes the system theme during conversational onboarding",
                    })),
                (x[12] = M),
                (x[13] = I?.isRestored),
                (x[14] = n))
              : (n = x[14]),
            x[15] !== S || x[16] !== t || x[17] !== n
              ? ((p = (0, a.jsx)(c.H, { animate: S, onComplete: t, children: n })),
                (x[15] = S),
                (x[16] = t),
                (x[17] = n),
                (x[18] = p))
              : (p = x[18]),
            x[19] !== I
              ? ((g =
                  null == I || I.isRestored
                    ? null
                    : (0, a.jsx)(l.$, {
                        color: "outline",
                        disabled: null == I.onUndo,
                        size: "medium",
                        onClick: I.onUndo,
                        children: (0, a.jsx)(s.A, {
                          id: "electron.onboarding.conversationalOnboarding.computerUse.revertTheme",
                          defaultMessage: "Revert theme",
                          description:
                            "Button that asks computer use to revert the system theme to its original appearance during conversational onboarding",
                        }),
                      })),
                (x[19] = I),
                (x[20] = g))
              : (g = x[20]),
            x[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, a.jsx)(u.P, { className: "size-6" })),
                (h = (0, a.jsx)(s.A, {
                  id: "electron.onboarding.conversationalOnboarding.computerUse.completedSubtitle",
                  defaultMessage: "Settings",
                  description:
                    "Settings subtitle on the completion card after computer use changes the system theme during conversational onboarding",
                })),
                (x[21] = m),
                (x[22] = h))
              : ((m = x[21]), (h = x[22])),
            x[23] !== I?.isRestored
              ? ((f = I?.isRestored
                  ? (0, a.jsx)(s.A, {
                      id: "electron.onboarding.conversationalOnboarding.computerUse.restored",
                      defaultMessage: "Theme restored",
                      description:
                        "Completion card title after computer use restores the original system theme during conversational onboarding",
                    })
                  : (0, a.jsx)(s.A, {
                      id: "electron.onboarding.conversationalOnboarding.computerUse.completed",
                      defaultMessage: "Theme changed",
                      description:
                        "Completion card title after computer use changes the system theme during conversational onboarding",
                    })),
                (x[23] = I?.isRestored),
                (x[24] = f))
              : (f = x[24]),
            x[25] !== g || x[26] !== f
              ? ((v = (0, a.jsx)(d.B, { actions: g, icon: m, subtitle: h, title: f })),
                (x[25] = g),
                (x[26] = f),
                (x[27] = v))
              : (v = x[27]),
            x[28] !== S || x[29] !== N || x[30] !== M || x[31] !== E || x[32] !== k || x[33] !== I?.isRestored
              ? ((b =
                  E && !I?.isRestored
                    ? (0, a.jsx)(c.H, {
                        animate: S,
                        onComplete: k,
                        children: N
                          ? M.formatMessage({
                              id: "electron.onboarding.conversationalOnboarding.computerUseFollowUp.taskCompleted",
                              defaultMessage: "And just like that, we did something on your computer.",
                              description:
                                "Completion message displayed below the system theme card before conversational onboarding offers advanced setup",
                            })
                          : M.formatMessage({
                              id: "electron.onboarding.conversationalOnboarding.computerUse.completedWithoutFollowUp",
                              defaultMessage:
                                "And just like that, we did something on your computer.\n\nYou’re all set.",
                              description:
                                "Completion and closing messages displayed below the system theme card when conversational onboarding has no advanced setup",
                            }),
                      })
                    : null),
                (x[28] = S),
                (x[29] = N),
                (x[30] = M),
                (x[31] = E),
                (x[32] = k),
                (x[33] = I?.isRestored),
                (x[34] = b))
              : (b = x[34]),
            x[35] !== v || x[36] !== b || x[37] !== p
              ? ((y = (0, a.jsxs)("div", { className: "flex w-full flex-col gap-4", children: [p, v, b] })),
                (x[35] = v),
                (x[36] = b),
                (x[37] = p),
                (x[38] = y))
              : (y = x[38]),
            y
          )
        },
      },
    )
  },
  aLZ2(e, t, n) {
    n.d(t, { Jf: () => X, Sp: () => Y, zx: () => Z })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zTeN"),
      r = n("DBCl"),
      s = n("Qgfj"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("Pyfq"),
      u = n("tl5a"),
      p = n("ghCo"),
      g = n("FvYa"),
      m = n("ygO2"),
      h = n("umSm"),
      f = n("BHkq"),
      v = n("S1hE"),
      b = n("GaA7"),
      y = n("Sd8U"),
      x = n("vmZO"),
      A = n("WFY2"),
      C = n("A5O4"),
      w = n("skUx"),
      I = n("h5BB"),
      O = n("cT32"),
      k = n("ser0"),
      _ = n("WFVe"),
      S = n("DvNy"),
      N = n("os5G"),
      M = n("cOfv"),
      E = n("CMd7"),
      T = n("zd8w"),
      j = n("wD9O"),
      R = n("nCH5"),
      P = n("hZax")
    function D() {
      let e,
        t,
        n = (0, o.c)(4),
        a = (0, P.Zj)("188145323"),
        i = (0, j.dz)()
      return (
        n[0] !== a || n[1] !== i
          ? ((e = () => {
              let e = window.electronBridge?.sendMessageFromView
              if (!a || null == b.appServices.remoteHostedPIP || null == e) return
              let t = (0, R.v)(i)
              return () => {
                t.stop()
              }
            }),
            (t = [a, i]),
            (n[0] = a),
            (n[1] = i),
            (n[2] = e),
            (n[3] = t))
          : ((e = n[2]), (t = n[3])),
        (0, T.useEffect)(e, t),
        null
      )
    }
    function L(e) {
      let t,
        n,
        a = (0, o.c)(4),
        { conversationId: i } = e,
        r = (0, P.Zj)("188145323")
      return (
        a[0] !== i || a[1] !== r
          ? ((t = () => {
              let e = window.electronBridge?.sendMessageFromView
              if (r && null != b.appServices.remoteHostedPIP && null != e)
                return (
                  b.appServices.remoteHostedPIP.showTask(i, { initialMaxDisplaySize: 280 }),
                  e({ conversationId: i, type: "remote-hosted-pip-active-thread-changed" }),
                  () => {
                    e({ conversationId: null, type: "remote-hosted-pip-active-thread-changed" })
                  }
                )
            }),
            (n = [i, r]),
            (a[0] = i),
            (a[1] = r),
            (a[2] = t),
            (a[3] = n))
          : ((t = a[2]), (n = a[3])),
        (0, T.useEffect)(t, n),
        null
      )
    }
    var z = n("sm2s"),
      U = n("qmqG"),
      F = n("cRg6"),
      B = n("Dtac")
    let q = (0, i.vP)(S.Dx, !1),
      G = (0, i.vP)(S.Dx, null),
      V = (0, i.vP)(S.Dx, null),
      W = (0, i.vP)(S.Dx, !1),
      K = (0, i.vP)(S.Dx, !1),
      H = (0, i.vP)(S.Dx, null)
    function X(e) {
      let t,
        n,
        i = (0, o.c)(3)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(D, {})), (i[0] = t)) : (t = i[0]),
        i[1] !== e
          ? ((n = (0, a.jsxs)(a.Fragment, { children: [t, (0, a.jsx)(J, { ...e })] })), (i[1] = e), (i[2] = n))
          : (n = i[2]),
        n
      )
    }
    function Q(e) {
      let t,
        n,
        i = (0, o.c)(4)
      return (
        i[0] !== e.context.hostId
          ? ((t = (t, n) => Z(t, e.context.hostId, n)), (i[0] = e.context.hostId), (i[1] = t))
          : (t = i[1]),
        (0, M.w)("computer_use", t),
        i[2] !== e ? ((n = (0, a.jsx)(X, { ...e })), (i[2] = e), (i[3] = n)) : (n = i[3]),
        n
      )
    }
    function Y() {
      let e = B.o.messages.label,
        t = window.electronBridge?.getSystemThemeVariant?.()
      return (
        "light" === t
          ? (e = (0, s.zR)({
              id: "electron.onboarding.conversationalOnboarding.pluginTasks.computerUse.switchToDarkMode",
              defaultMessage: "Change my theme to dark mode",
              description:
                "Conversational onboarding starter task that switches the computer's currently light system appearance to dark mode",
            }))
          : "dark" === t &&
            (e = (0, s.zR)({
              id: "electron.onboarding.conversationalOnboarding.pluginTasks.computerUse.switchToLightMode",
              defaultMessage: "Change my theme to light mode",
              description:
                "Conversational onboarding starter task that switches the computer's currently dark system appearance to light mode",
            })),
        {
          getDeclinedRetryPrompt: (e) =>
            e.formatMessage({
              id: "electron.onboarding.conversationalOnboarding.computerUse.declinedRetry",
              defaultMessage: "Got it. I won’t change your system theme. Want to try another quick example?",
              description: "Message shown after declining computer access during conversational onboarding",
            }),
          option: { Icon: z.P, label: e },
          prepare: (e, t, n) => Z(e, n.hostId, (0, M.V)(e, "computer_use")),
          reset: eo,
          retry(e, t, n) {
            ;(0, k.e_)(e, n.hostId)
            let a = Z(e, n.hostId, (0, M.V)(e, "computer_use"))
            return (et(e, t, n), a)
          },
          View: Q,
        }
      )
    }
    function Z(e, t, n) {
      let a,
        o = (0, N.a)({
          start: (t) => {
            ;((0, _.gM)(e, "computer_use", t, n),
              eo(e),
              (a = (0, E.Z)(e, t, (e, t) =>
                e.get(S.M8) ? { status: "failed" } : null == t ? null : { status: t.outcome, output: t.output },
              )))
          },
          onCancel: (n, a) => {
            ;(eo(e), (0, k.e_)(e, t), n.finish({ status: a }))
          },
          onSettled: () => a?.(),
        })
      return (o.start(), o)
    }
    function J(e) {
      let t,
        n,
        s,
        u,
        b,
        A,
        C,
        N,
        M,
        E,
        T,
        j,
        R,
        P = (0, o.c)(96),
        { context: D, hasAdvancedCapabilitiesSetup: z, task: V, onChooseAnotherTask: K, onRetryTask: X } = e,
        Q = void 0 !== z && z,
        Y = (0, i.gh)(S.Dx),
        Z = (0, l.A)(),
        J = (0, i.Ul)(_.Cd),
        ea = (0, i.Ul)(S.s7),
        eo = (0, i.Ul)(S.rK),
        ei = (0, i.Ul)(S.M8),
        er = (0, i.Ul)(q),
        es = (0, i.Ul)(U.jI),
        el = (0, i.Ul)(U.xM),
        ec = (0, i.Ul)(G),
        ed = (0, i.Ul)(W),
        eu = (0, i.Ul)(H),
        ep = (0, i._U)(k.gh, ea?.conversationId ?? null)
      P[0] !== D || P[1] !== X || P[2] !== Y || P[3] !== V || P[4] !== ed
        ? ((t = ed
            ? () => {
                en(Y, V, D)
              }
            : X),
          (P[0] = D),
          (P[1] = X),
          (P[2] = Y),
          (P[3] = V),
          (P[4] = ed),
          (P[5] = t))
        : (t = P[5])
      let eg = t
      P[6] !== D.localPlugins ? ((n = D.localPlugins?.find($)), (P[6] = D.localPlugins), (P[7] = n)) : (n = P[7])
      let em = n
      if (ei || ep) {
        let e, t, n
        return (
          P[8] !== Z
            ? ((e = Z.formatMessage({
                id: "electron.onboarding.conversationalOnboarding.startError",
                defaultMessage: "ChatGPT couldn’t start that task",
                description: "Error shown when a conversational onboarding task cannot start",
              })),
              (P[8] = Z),
              (P[9] = e))
            : (e = P[9]),
          P[10] !== e ? ((t = { outcome: "not_completed", output: e }), (P[10] = e), (P[11] = t)) : (t = P[11]),
          P[12] !== K || P[13] !== eg || P[14] !== t
            ? ((n = (0, a.jsx)(F.W, { completion: t, onChooseAnotherTask: K, onRetryTask: eg })),
              (P[12] = K),
              (P[13] = eg),
              (P[14] = t),
              (P[15] = n))
            : (n = P[15]),
          n
        )
      }
      if (!eo) {
        let e, t, n, o, i, r, s, l, d, u, h, f, v, b, y, x
        ;(P[16] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(ee, {})), (P[16] = e)) : (e = P[16]),
          P[17] !== Z
            ? ((t = Z.formatMessage({
                id: "electron.onboarding.conversationalOnboarding.computerUse.permissionIntro",
                defaultMessage:
                  "I can do that, but I’ll need access to your screen and accessibility settings. Mind allowing that?",
                description: "Explanation shown before requesting computer access during conversational onboarding",
              })),
              (P[17] = Z),
              (P[18] = t))
            : (t = P[18]),
          P[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(c.A, {
                id: "electron.onboarding.conversationalOnboarding.computerUse.notNow",
                defaultMessage: "Not now",
                description: "Button that returns to task selection instead of granting computer access",
              })),
              (P[19] = n))
            : (n = P[19]),
          P[20] !== es || P[21] !== K
            ? ((o = (0, a.jsx)(m.$, { color: "outline", disabled: es, size: "medium", onClick: K, children: n })),
              (P[20] = es),
              (P[21] = K),
              (P[22] = o))
            : (o = P[22]))
        let A = es || D.isConfigDataPending || D.isModelsLoading || D.isPluginsLoading
        ;(P[23] !== D || P[24] !== Y || P[25] !== V
          ? ((i = () => {
              et(Y, V, D)
            }),
            (P[23] = D),
            (P[24] = Y),
            (P[25] = V),
            (P[26] = i))
          : (i = P[26]),
          P[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)(c.A, {
                id: "electron.onboarding.conversationalOnboarding.computerUse.allowAccess",
                defaultMessage: "Allow access",
                description: "Button that enables the bundled computer-use plugin during conversational onboarding",
              })),
              (P[27] = r))
            : (r = P[27]),
          P[28] !== es || P[29] !== A || P[30] !== i
            ? ((s = (0, a.jsx)(m.$, {
                color: "primary",
                disabled: A,
                loading: es,
                size: "medium",
                onClick: i,
                children: r,
              })),
              (P[28] = es),
              (P[29] = A),
              (P[30] = i),
              (P[31] = s))
            : (s = P[31]),
          P[32] !== s || P[33] !== o
            ? ((l = (0, a.jsxs)(a.Fragment, { children: [o, s] })), (P[32] = s), (P[33] = o), (P[34] = l))
            : (l = P[34]))
        let C = em?.logoDarkPath,
          O = em?.logoPath
        return (
          P[35] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, a.jsx)("img", { alt: "", className: "size-6", draggable: !1, src: p })), (P[35] = d))
            : (d = P[35]),
          P[36] !== C || P[37] !== O
            ? ((u = (0, a.jsx)(g.R, { alt: "", className: "size-6", logoDarkUrl: C, logoUrl: O, fallback: d })),
              (P[36] = C),
              (P[37] = O),
              (P[38] = u))
            : (u = P[38]),
          P[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, a.jsx)(c.A, {
                id: "electron.onboarding.conversationalOnboarding.computerUse.accessRequested",
                defaultMessage: "Access requested",
                description: "Subtitle for the computer access permission card during conversational onboarding",
              })),
              (f = (0, a.jsx)(c.A, {
                id: "electron.onboarding.conversationalOnboarding.computerUse.permissionTitle",
                defaultMessage: "Screen and accessibility",
                description: "Title of the computer access permission card during conversational onboarding",
              })),
              (P[39] = h),
              (P[40] = f))
            : ((h = P[39]), (f = P[40])),
          P[41] !== l || P[42] !== u
            ? ((v = (0, a.jsx)(I.B, { actions: l, icon: u, subtitle: h, title: f })),
              (P[41] = l),
              (P[42] = u),
              (P[43] = v))
            : (v = P[43]),
          P[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = (0, a.jsx)(c.A, {
                id: "electron.onboarding.conversationalOnboarding.computerUse.accessFailed",
                defaultMessage:
                  "I couldn’t enable computer access. Check your system privacy settings, then try again.",
                description: "Error shown when computer access cannot be enabled during conversational onboarding",
              })),
              (P[44] = b))
            : (b = P[44]),
          P[45] !== Y ? ((y = () => Y.set(q, !0)), (P[45] = Y), (P[46] = y)) : (y = P[46]),
          P[47] !== J || P[48] !== el || P[49] !== er || P[50] !== v || P[51] !== y || P[52] !== t
            ? ((x = (0, a.jsx)(w.gf, {
                declinedMessage: e,
                intro: t,
                permissionStatus: J,
                request: v,
                requestError: b,
                requestFailed: el,
                showRequest: er,
                onIntroComplete: y,
              })),
              (P[47] = J),
              (P[48] = el),
              (P[49] = er),
              (P[50] = v),
              (P[51] = y),
              (P[52] = t),
              (P[53] = x))
            : (x = P[53]),
          x
        )
      }
      if (null == ea) {
        let e
        return (
          P[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.N, {
                className: "text-lg leading-6",
                children: (0, a.jsx)(c.A, {
                  id: "electron.onboarding.conversationalOnboarding.executionThinking",
                  defaultMessage: "Thinking",
                  description: "Animated thinking label during conversational onboarding task execution",
                }),
              })),
              (P[54] = e))
            : (e = P[54]),
          e
        )
      }
      let eh = `/welcome/conversational-onboarding/${ea.conversationId}`
      return (
        P[55] !== ea.conversationId || P[56] !== ea.hostId || P[57] !== eh
          ? ((s = {
              conversationId: ea.conversationId,
              hostId: ea.hostId,
              pathname: eh,
              projectContext: null,
              routeKind: "local-thread",
              routeTemplate: "/welcome/conversational-onboarding/:conversationId",
              search: "",
            }),
            (P[55] = ea.conversationId),
            (P[56] = ea.hostId),
            (P[57] = eh),
            (P[58] = s))
          : (s = P[58]),
        P[59] !== ea.conversationId || P[60] !== ea.hostId
          ? ((u = (0, a.jsx)(d.$, { conversationId: ea.conversationId, hostId: ea.hostId })),
            (P[59] = ea.conversationId),
            (P[60] = ea.hostId),
            (P[61] = u))
          : (u = P[61]),
        P[62] !== ea.conversationId
          ? ((b = (0, a.jsx)(L, { conversationId: ea.conversationId })), (P[62] = ea.conversationId), (P[63] = b))
          : (b = P[63]),
        P[64] !== ea.conversationId
          ? ((A = (0, y.p)(ea.conversationId, "main", ea.conversationId)), (P[64] = ea.conversationId), (P[65] = A))
          : (A = P[65]),
        P[66] !== Z || P[67] !== ed
          ? ((C = ed
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(v.H, {
                      animate: !1,
                      children: Z.formatMessage({
                        id: "electron.onboarding.conversationalOnboarding.computerUse.changedConfirmation",
                        defaultMessage: "Done. I changed your computer theme.",
                        description:
                          "Assistant message shown after computer use changes the system theme during conversational onboarding",
                      }),
                    }),
                    (0, a.jsx)(f.W, {
                      answer: (0, a.jsx)(c.A, {
                        id: "electron.onboarding.conversationalOnboarding.computerUse.revertTheme",
                        defaultMessage: "Revert theme",
                        description:
                          "Button that asks computer use to revert the system theme to its original appearance during conversational onboarding",
                      }),
                    }),
                  ],
                })
              : null),
            (P[66] = Z),
            (P[67] = ed),
            (P[68] = C))
          : (C = P[68]),
        P[69] !== D || P[70] !== ec || P[71] !== Y || P[72] !== V || P[73] !== eu || P[74] !== ed
          ? ((N =
              null != ec
                ? {
                    isRestoring: ed,
                    originalTurnId: eu,
                    onUndo: () => {
                      en(Y, V, D)
                    },
                  }
                : void 0),
            (P[69] = D),
            (P[70] = ec),
            (P[71] = Y),
            (P[72] = V),
            (P[73] = eu),
            (P[74] = ed),
            (P[75] = N))
          : (N = P[75]),
        P[76] !== Y ? ((M = () => Y.set(S.uM, !0)), (P[76] = Y), (P[77] = M)) : (M = P[77]),
        P[78] !== ea || P[79] !== Q || P[80] !== K || P[81] !== eg || P[82] !== N || P[83] !== M
          ? ((E = (0, a.jsx)(O.C, {
              appInfo: null,
              appPluginName: r.t_C,
              completionLinkLabel: B.o.messages.completionLinkLabel,
              completionMessage: B.o.messages.completionMessage,
              conversation: ea,
              hasAdvancedCapabilitiesSetup: Q,
              computerUseUndo: N,
              onChooseAnotherTask: K,
              onCompletionComplete: M,
              onRetryTask: eg,
            })),
            (P[78] = ea),
            (P[79] = Q),
            (P[80] = K),
            (P[81] = eg),
            (P[82] = N),
            (P[83] = M),
            (P[84] = E))
          : (E = P[84]),
        P[85] !== E || P[86] !== C
          ? ((T = (0, a.jsxs)("div", { className: "flex w-full flex-col gap-4", children: [C, E] })),
            (P[85] = E),
            (P[86] = C),
            (P[87] = T))
          : (T = P[87]),
        P[88] !== T || P[89] !== A
          ? ((j = (0, a.jsx)(i.Ui, { scope: y.PR, value: A, children: T })), (P[88] = T), (P[89] = A), (P[90] = j))
          : (j = P[90]),
        P[91] !== j || P[92] !== s || P[93] !== u || P[94] !== b
          ? ((R = (0, a.jsxs)(x.R, { route: s, children: [u, b, j] })),
            (P[91] = j),
            (P[92] = s),
            (P[93] = u),
            (P[94] = b),
            (P[95] = R))
          : (R = P[95]),
        R
      )
    }
    function $(e) {
      return e.plugin.name === r.t_C
    }
    function ee() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              children: (0, a.jsx)(c.A, {
                id: "electron.onboarding.conversationalOnboarding.computerUse.accessDeclined",
                defaultMessage: "No problem — you can allow computer access later",
                description: "Message shown when computer access is declined during conversational onboarding",
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    async function et(e, t, n) {
      let a = (0, U.Jx)(e, () => (0, _.xx)(e)?.isActive() ?? !1)
      if (null != a) {
        ;(0, C.c9)(e, t)
        try {
          let o = await (0, U.Gn)(e, n, a, async () => {
            ;((a.accessStage = "check-model-availability"), await n.loadModelConfig())
          })
          if (!a.isActive() || "cancelled" === o.status) return
          if ("unavailable" === o.status) return void n.onPluginUnavailable(t)
          ;((0, _.Sv)(e), (0, C.J4)(e, t), (a.accessStage = "capture-system-appearance"))
          let i = (await b.appServices.conversationalOnboarding?.getSystemAppearance()) ?? null
          if (!a.isActive()) return
          let r = o.skill
          ;(e.set(G, i), e.set(V, r), e.set(S.rK, !0), e.set(S.M8, !1), (0, C.$z)(e, t))
          let s = ea(n, t, B.o.prompt, r)
          a.accessStage = "prepare-conversation"
          let l = await (0, k.K)(e, s)
          if (!a.isActive()) return
          ;(e.set(S.s7, l),
            (a.accessStage = "start-conversation"),
            (0, _.xx)(e)?.onExecutionStarted?.(),
            await (0, k.sm)(e, s))
        } catch (n) {
          if (!a.isActive()) return
          ;(A.v.error("Failed to start the computer-use onboarding task", {
            safe: { accessStage: a.accessStage, task: t },
            sensitive: { error: n },
          }),
            "allowed" === e.get(_.Cd)
              ? (e.set(S.rK, !1), e.set(S.M8, !0), (0, C.dE)(e, t), (0, C.pL)(e, t))
              : (a.fail(), (0, C.CQ)(e, t)))
        } finally {
          a.finish()
        }
      }
    }
    async function en(e, t, n) {
      let a = e.get(G),
        o = e.get(V),
        i = e.get(S.s7),
        r = (0, _.xx)(e)
      if (!(null == a || null == i || e.get(K)) && r?.isSelected()) {
        ;(e.set(S.uM, !1),
          e.set(K, !0),
          e.set(H, e.get(u.SG, i.conversationId)),
          e.set(W, !0),
          e.set(S.M8, !1),
          (0, C.Sj)(e, t),
          (0, C.$z)(e, t, { isRevert: !0 }))
        try {
          ;(r.onExecutionStarted?.(),
            await (0, k.G6)(
              e,
              ea(
                n,
                t,
                `${B.o.revertPrompt}

The user's original system appearance was: ${a}.`,
                o,
                !0,
              ),
            ))
        } catch (n) {
          if (!r.isSelected()) return
          ;(A.v.error("Failed to restore the computer-use onboarding appearance", {
            safe: { task: t },
            sensitive: { error: n },
          }),
            e.set(S.M8, !0),
            (0, C.dE)(e, t, { isRevert: !0 }))
        } finally {
          r.isSelected() && e.set(K, !1)
        }
      }
    }
    function ea(e, t, n, a, o) {
      return {
        agentMode: e.agentMode,
        loadModelConfig: e.loadModelConfig,
        appPluginName: r.t_C,
        hostId: e.hostId,
        isRevert: o,
        permissionProfileId: e.permissionProfileId,
        permissionsRequirements: e.permissionsRequirements,
        projectRoot: e.projectRoot,
        prompt: n,
        selectedTask: t,
        serviceTier: e.serviceTier,
        skill: a ?? void 0,
        shouldSendPermissionOverrides: e.shouldSendPermissionOverrides,
      }
    }
    function eo(e) {
      ;(e.set(q, !1), (0, U.TB)(e), e.set(G, null), e.set(V, null), e.set(W, !1), e.set(K, !1), e.set(H, null))
    }
  },
  Dtac(e, t, n) {
    var a = n("DBCl"),
      o = n("Qgfj")
    let i = {
      pluginName: a.t_C,
      prompt: `Demonstrate your ability to use this computer by changing the system's
light/dark appearance.

Use computer-use tools only. Do not use a terminal, shell commands,
automation scripts, or other programmatic shortcuts.

Only interact with macOS System Settings (com.apple.systempreferences), and
only to view or change Appearance. Do not change other settings or use other apps.

Do not create, delegate to, message, or otherwise use agents or subagents. Complete the task yourself using computer-use tools only.

As you work, narrate what you are actually seeing and doing in short,
friendly, first-person progress messages. Send each message as you reach
that step, not all at the end. Be a little excited and natural, without
being overly wordy. For example:

“I can see your desktop. Let me find your system settings.”
“Found it! I’m opening your appearance settings.”
“Your computer is currently using light mode. Let’s try dark.”
“And just like that, your system theme is changed!”

Follow these steps:

1. Find and open the system settings.
2. Bring its window to the foreground. If possible, position it on the
   same monitor as the Codex app so the user can clearly see what is
   happening.
3. Do not attempt to interact with, move, or close the Codex app.
4. Open the system light/dark appearance settings.
5. Identify the original appearance setting, including whether it is
   Light, Dark, Auto, or Custom if available. Determine whether the
   system currently appears light or dark.
6. Select the opposite of the currently visible light/dark appearance.
7. Verify that the appearance actually changed.
8. Leave the new appearance selected and the system settings visible.

Do not switch the theme back. Do not claim that a step succeeded unless
you have verified it.

When reporting successful completion, set the required completion-tool URL to
https://codex.invalid/computer-use. This URL is an internal placeholder; never
display or mention it to the user.`,
      revertPrompt: `Restore the user's original system light/dark appearance.

Use computer-use tools only. Do not use a terminal, shell commands,
automation scripts, or other programmatic shortcuts.

Only interact with macOS System Settings (com.apple.systempreferences), and
only to view or change Appearance. Do not change other settings or use other apps.
Do not create, delegate to, message, or otherwise use agents or subagents.

Restore the exact original appearance provided with this task. If the original
appearance was Auto, select Auto; do not simply toggle the current appearance.

Bring the system settings window to the foreground, open the appearance
settings, select the original appearance, and verify that it was restored.
Leave the system settings visible.

As you work, narrate what you are actually seeing and doing in short, friendly,
first-person progress messages. Send each message as you reach that step.
Do not interact with, move, or close the Codex app.

Do not claim that the original appearance was restored unless you have verified
it.

When reporting successful completion, set the required completion-tool URL to
https://codex.invalid/computer-use. This URL is an internal placeholder; never
display or mention it to the user.`,
      messages: {
        completionLinkLabel: (0, o.zR)({
          id: "electron.onboarding.conversationalOnboarding.pluginTasks.computerUse.completionLinkLabel",
          defaultMessage: "System appearance",
          description:
            "Configuration-compatible completion link label for the computer-use conversational onboarding task",
        }),
        completionMessage: (0, o.zR)({
          id: "electron.onboarding.conversationalOnboarding.pluginTasks.computerUse.completionMessage",
          defaultMessage: "System appearance changed: {link}",
          description:
            "Configuration-compatible completion template for the computer-use conversational onboarding task. Preserve {link}.",
        }),
        label: (0, o.zR)({
          id: "electron.onboarding.conversationalOnboarding.pluginTasks.computerUse.label",
          defaultMessage: "Toggle system light/dark mode",
          description:
            "Conversational onboarding starter task that changes the system between light and dark appearances",
        }),
      },
    }
    n.d(t, {}, { o: i })
  },
  WGT4(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("KdgY"),
      r = n("DBCl"),
      s = n("zd8w"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("HOLv"),
      u = n("OGl1"),
      p = n("B09n"),
      g = n("YeiR"),
      m = n("bnxy"),
      h = n("QWBF"),
      f = n("ifyC")
    let v = (0, r.DIv)(r.m20),
      b = (0, s.lazy)(async () => {
        let { VisualizationDirectiveRenderer: e } = await Promise.all([
          n.e(652500),
          n.e(877652),
          n.e(373526),
          n.e(927842),
        ]).then(n.bind(n, "N9Cx"))
        return { default: e }
      })
    function y(e) {
      let t,
        n,
        i,
        r,
        d,
        u = (0, o.c)(12),
        { filePath: p, hostId: g } = e,
        h = (0, l.A)()
      u[0] !== h ? ((t = (0, f.d)(h)), (u[0] = h), (u[1] = t)) : (t = u[1])
      let v = t
      return (
        u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("div", {
              role: "status",
              className: "p-8 text-center text-secondary",
              children: (0, a.jsx)(c.A, {
                id: "electron.onboarding.conversationalOnboarding.loadingInteractiveChart",
                defaultMessage: "Loading interactive chart",
                description: "Status shown while the deterministic interactive onboarding chart renderer loads",
              }),
            })),
            (u[2] = n))
          : (n = u[2]),
        u[3] !== p ? ((i = (0, m.Q0)(p)), (u[3] = p), (u[4] = i)) : (i = u[4]),
        u[5] !== i ? ((r = { file: i }), (u[5] = i), (u[6] = r)) : (r = u[6]),
        u[7] !== g || u[8] !== r || u[9] !== v.fragment || u[10] !== v.title
          ? ((d = (0, a.jsx)(s.Suspense, {
              fallback: n,
              children: (0, a.jsx)(b, {
                attributes: r,
                embeddedHtml: v.fragment,
                hostId: g,
                title: v.title,
                variant: "inline",
              }),
            })),
            (u[7] = g),
            (u[8] = r),
            (u[9] = v.fragment),
            (u[10] = v.title),
            (u[11] = d))
          : (d = u[11]),
        d
      )
    }
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            r,
            m,
            f,
            b,
            x,
            A,
            C = (0, o.c)(31),
            { animate: w, resourceOnly: I, filePath: O, format: k, hostId: _, onCompletionComplete: S } = e,
            N = void 0 === w || w,
            M = void 0 !== I && I,
            E = (0, l.A)(),
            T = "html" === k
          if (!M) {
            let e
            ;(C[0] !== E || C[1] !== T
              ? ((e = T
                  ? E.formatMessage({
                      id: "electron.onboarding.conversationalOnboarding.csvInteractiveArtifactCompleted",
                      defaultMessage: "Done. I turned the data into an interactive chart",
                      description:
                        "Completion message after Codex creates an interactive chart from the bundled CSV during conversational onboarding",
                    })
                  : E.formatMessage({
                      id: "electron.onboarding.conversationalOnboarding.csvArtifactCompleted",
                      defaultMessage: "Done. I turned the CSV into a chart and saved it to your computer.",
                      description:
                        "Completion message after Codex creates a chart from the selected CSV during conversational onboarding",
                    })),
                (C[0] = E),
                (C[1] = T),
                (C[2] = e))
              : (e = C[2]),
              (t = e))
          }
          return (
            C[3] !== E || C[4] !== M
              ? ((n = M
                  ? void 0
                  : E.formatMessage({
                      id: "electron.onboarding.conversationalOnboarding.csvTaskCompleted",
                      defaultMessage:
                        "That’s our first task done. I can also drop it into a presentation, organize your spreadsheets, build a report, and more. You’re all set.",
                      description: "Final message after ChatGPT creates a chart during conversational onboarding",
                    })),
                (C[3] = E),
                (C[4] = M),
                (C[5] = n))
              : (n = C[5]),
            C[6] !== O || C[7] !== T
              ? ((r = T
                  ? (0, a.jsx)(d.I, { "aria-hidden": !1, asset: i.w })
                  : (0, s.createElement)((0, u.I3)(O), { className: "size-6" })),
                (C[6] = O),
                (C[7] = T),
                (C[8] = r))
              : (r = C[8]),
            C[9] !== O || C[10] !== _ || C[11] !== E || C[12] !== T
              ? ((m = T
                  ? (0, a.jsx)(y, { filePath: O, hostId: _ })
                  : (0, a.jsx)("img", {
                      alt: E.formatMessage({
                        id: "electron.onboarding.conversationalOnboarding.csvChartPreview",
                        defaultMessage: "Preview of the chart created from your CSV",
                        description: "Accessible description for the generated CSV chart preview during onboarding",
                      }),
                      className: "max-h-[220px] w-fit max-w-full rounded-xl border border-default object-contain",
                      src: (0, g.B)(O),
                    })),
                (C[9] = O),
                (C[10] = _),
                (C[11] = E),
                (C[12] = T),
                (C[13] = m))
              : (m = C[13]),
            C[14] !== T
              ? ((f = T
                  ? (0, a.jsx)(c.A, {
                      id: "electron.onboarding.conversationalOnboarding.interactiveChartArtifact",
                      defaultMessage: "Interactive chart",
                      description:
                        "File type label for the interactive HTML chart created during conversational onboarding",
                    })
                  : (0, a.jsx)(c.A, {
                      id: "electron.onboarding.conversationalOnboarding.imageArtifact",
                      defaultMessage: "Image",
                      description: "File type label for the chart image created during conversational onboarding",
                    })),
                (C[14] = T),
                (C[15] = f))
              : (f = C[15]),
            C[16] !== O || C[17] !== _
              ? ((b = () => {
                  ;(0, p.openWorkspaceFile)({ path: O, cwd: v, hostId: _, target: "systemDefault" })
                }),
                (x = () => {
                  ;(0, p.openWorkspaceFile)({ path: O, cwd: v, hostId: _, target: "fileManager" })
                }),
                (C[16] = O),
                (C[17] = _),
                (C[18] = b),
                (C[19] = x))
              : ((b = C[18]), (x = C[19])),
            C[20] !== N ||
            C[21] !== O ||
            C[22] !== t ||
            C[23] !== S ||
            C[24] !== n ||
            C[25] !== r ||
            C[26] !== m ||
            C[27] !== f ||
            C[28] !== b ||
            C[29] !== x
              ? ((A = (0, a.jsx)(
                  h.r,
                  {
                    animate: N,
                    completionMessage: n,
                    filePath: O,
                    icon: r,
                    introMessage: t,
                    preview: m,
                    typeLabel: f,
                    onCompletionComplete: S,
                    onOpen: b,
                    onReveal: x,
                  },
                  O,
                )),
                (C[20] = N),
                (C[21] = O),
                (C[22] = t),
                (C[23] = S),
                (C[24] = n),
                (C[25] = r),
                (C[26] = m),
                (C[27] = f),
                (C[28] = b),
                (C[29] = x),
                (C[30] = A))
              : (A = C[30]),
            A
          )
        },
      },
    )
  },
  Lru8(e, t, n) {
    n.d(t, { XV: () => $, YM: () => G, SQ: () => H, GO: () => X, E8: () => en })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("LIss"),
      r = n("zTeN"),
      s = n("zd8w"),
      l = n("Qgfj"),
      c = n("Wf1j"),
      d = n("oyxz"),
      u = n("OGl1"),
      p = n("Up3D"),
      g = (e) =>
        (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, a.jsx)("path", {
              fill: "url(#a)",
              d: "M13 2.594c.267 0 .538.074.813.224.274.15.583.393.924.726l4.95 4.9c.542.541.813 1.091.813 1.65v7.45c0 .725-.179 1.396-.537 2.013a4.001 4.001 0 0 1-1.463 1.449 3.87 3.87 0 0 1-2 .538h-9c-.725 0-1.396-.18-2.013-.538a4.031 4.031 0 0 1-1.45-1.45 3.937 3.937 0 0 1-.537-2.012V6.594c0-.725.179-1.392.537-2a4.002 4.002 0 0 1 1.45-1.463A3.936 3.936 0 0 1 7.5 2.594H13Z",
            }),
            (0, a.jsx)("path", {
              fill: "url(#b)",
              d: "M14.672 8.594H9.328c-1.01 0-1.828.818-1.828 1.828v5.344c0 1.01.818 1.828 1.828 1.828h5.344c1.01 0 1.828-.819 1.828-1.828v-5.344c0-1.01-.819-1.828-1.828-1.828Z",
            }),
            (0, a.jsx)("path", {
              fill: "url(#c)",
              fillOpacity: 0.3,
              d: "M14.672 8.594H9.328c-1.01 0-1.828.818-1.828 1.828v5.344c0 1.01.818 1.828 1.828 1.828h5.344c1.01 0 1.828-.819 1.828-1.828v-5.344c0-1.01-.819-1.828-1.828-1.828Z",
            }),
            (0, a.jsx)("path", {
              fill: "#fff",
              d: "M14.366 15.665h-1.388l-.87-1.639a4.799 4.799 0 0 1-.073-.136 4.771 4.771 0 0 1-.046-.122h-.015a1.188 1.188 0 0 1-.06.14c-.02.036-.042.08-.069.133l-.903 1.624H9.634l1.57-2.575-1.463-2.568h1.37l.774 1.464.079.157c.024.043.047.095.071.155h.015l.079-.165.086-.162.803-1.449h1.304l-1.484 2.529 1.528 2.614Z",
            }),
            (0, a.jsx)("path", {
              fill: "url(#d)",
              d: "M13 2.594c.267 0 .537.075.813.225.274.15.583.391.925.725l4.95 4.9c.541.541.812 1.091.812 1.65h-4.787c-.834 0-1.496-.242-1.988-.725C13.242 8.877 13 8.215 13 7.38V2.594Z",
            }),
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsxs)("radialGradient", {
                  id: "b",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientTransform: "matrix(8.99998 8.99998 -25.62054 25.62054 7.5 8.594)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#20A85E" }),
                    (0, a.jsx)("stop", { offset: 0.944, stopColor: "#09442A" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "c",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientTransform: "matrix(0 6.3 -7.25625 0 12 13.994)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: 0.58, stopColor: "#33A662", stopOpacity: 0 }),
                    (0, a.jsx)("stop", { offset: 0.974, stopColor: "#98F0B0" }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "a",
                  x1: 4.5,
                  x2: 16,
                  y1: 20.594,
                  y2: 7.094,
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: 0.178, stopColor: "#4AA647" }),
                    (0, a.jsx)("stop", { offset: 1, stopColor: "#13551B" }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "d",
                  x1: 16.5,
                  x2: 13.5,
                  y1: 6.094,
                  y2: 9.594,
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#B5E480" }),
                    (0, a.jsx)("stop", { offset: 0.851, stopColor: "#5FC34C" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      m = (e) =>
        (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, a.jsx)("path", {
              fill: "url(#a)",
              d: "M13 2.594c.267 0 .538.074.813.224.274.15.583.393.924.726l4.95 4.9c.542.541.813 1.091.813 1.65v7.45c0 .725-.179 1.396-.537 2.013a4.001 4.001 0 0 1-1.463 1.449 3.87 3.87 0 0 1-2 .538h-9c-.725 0-1.396-.18-2.013-.538a4.031 4.031 0 0 1-1.45-1.45 3.937 3.937 0 0 1-.537-2.012V6.594c0-.725.179-1.392.537-2a4.002 4.002 0 0 1 1.45-1.463A3.936 3.936 0 0 1 7.5 2.594H13Z",
            }),
            (0, a.jsx)("path", {
              fill: "url(#b)",
              d: "M14.672 8.594H9.328c-1.01 0-1.828.818-1.828 1.828v5.344c0 1.01.818 1.828 1.828 1.828h5.344c1.01 0 1.828-.819 1.828-1.828v-5.344c0-1.01-.819-1.828-1.828-1.828Z",
            }),
            (0, a.jsx)("path", {
              fill: "url(#c)",
              fillOpacity: 0.3,
              d: "M14.672 8.594H9.328c-1.01 0-1.828.818-1.828 1.828v5.344c0 1.01.818 1.828 1.828 1.828h5.344c1.01 0 1.828-.819 1.828-1.828v-5.344c0-1.01-.819-1.828-1.828-1.828Z",
            }),
            (0, a.jsx)("path", {
              fill: "#fff",
              d: "M14.366 15.665h-1.388l-.87-1.639a4.799 4.799 0 0 1-.073-.136 4.771 4.771 0 0 1-.046-.122h-.015a1.188 1.188 0 0 1-.06.14c-.02.036-.042.08-.069.133l-.903 1.624H9.634l1.57-2.575-1.463-2.568h1.37l.774 1.464.079.157c.024.043.047.095.071.155h.015l.079-.165.086-.162.803-1.449h1.304l-1.484 2.529 1.528 2.614Z",
            }),
            (0, a.jsx)("path", {
              fill: "url(#d)",
              d: "M13 2.594c.267 0 .537.075.813.225.274.15.583.391.925.725l4.95 4.9c.541.541.812 1.091.812 1.65h-4.787c-.834 0-1.496-.242-1.988-.725C13.242 8.877 13 8.215 13 7.38V2.594Z",
            }),
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsxs)("radialGradient", {
                  id: "b",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientTransform: "matrix(8.99998 8.99998 -25.62054 25.62054 7.5 8.594)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#20A85E" }),
                    (0, a.jsx)("stop", { offset: 0.944, stopColor: "#09442A" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "c",
                  cx: 0,
                  cy: 0,
                  r: 1,
                  gradientTransform: "matrix(0 6.3 -7.25625 0 12 13.994)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: 0.58, stopColor: "#33A662", stopOpacity: 0 }),
                    (0, a.jsx)("stop", { offset: 0.974, stopColor: "#98F0B0" }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "a",
                  x1: 4.5,
                  x2: 16,
                  y1: 20.594,
                  y2: 7.094,
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: 0.207, stopColor: "#349037" }),
                    (0, a.jsx)("stop", { offset: 1, stopColor: "#13551B" }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "d",
                  x1: 16.5,
                  x2: 13.5,
                  y1: 6.094,
                  y2: 9.594,
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#B5E480" }),
                    (0, a.jsx)("stop", { offset: 0.851, stopColor: "#5FC34C" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      h = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.001 2.66827C16.749 2.66827 18.166 4.08533 18.166 5.83331V14.1663C18.166 15.9143 16.749 17.3314 15.001 17.3314H5.00098C3.253 17.3314 1.83594 15.9143 1.83594 14.1663V5.83331C1.83594 4.08533 3.253 2.66827 5.00098 2.66827H15.001ZM3.16602 8.99835V14.1663C3.16602 15.1798 3.98753 16.0013 5.00098 16.0013H6.83594V8.99835H3.16602ZM8.16602 8.99835V16.0013H15.001C16.0144 16.0013 16.8359 15.1798 16.8359 14.1663V8.99835H8.16602ZM5.00098 3.99835C3.98753 3.99835 3.16602 4.81987 3.16602 5.83331V7.66827H6.83594V3.99835H5.00098ZM8.16602 7.66827H16.8359V5.83331C16.8359 4.81987 16.0144 3.99835 15.001 3.99835H8.16602V7.66827Z",
            fill: "#8F8F8F",
          }),
        }),
      f = n("svjy"),
      v = n("umSm"),
      b = n("NF58"),
      y = n("GaA7"),
      x = n("WFY2"),
      A = n("a6Zv"),
      C = n("A5O4"),
      w = n("skUx"),
      I = n("v7qY"),
      O = n("CE87"),
      k = n("fVs5"),
      _ = n("ZOaQ"),
      S = n("j2jv"),
      N = n("sGKa"),
      M = n("xAz2"),
      E = n("x8Nb"),
      T = n("WpG7"),
      j = n("Yg8P")
    let R = [0, 300, 600, 900, 1200]
    function P() {
      let e,
        t,
        n,
        i,
        r,
        s,
        l,
        d,
        u,
        p,
        g,
        m,
        h,
        f,
        v,
        b,
        y,
        x = (0, o.c)(43),
        A = (0, c.A)()
      if (x[0] !== A) {
        let o, c, b
        ;((t = (0, j.k)(A)),
          (e = _.E),
          (n = !0),
          (i = 1496),
          (d = 970),
          (u = t.title),
          (p = 8),
          (g = t.data),
          x[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = { top: 322, right: 25, bottom: 0, left: 20 }), (x[16] = m))
            : (m = x[16]),
          (h = "img"),
          x[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = { backgroundColor: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif" }),
              (v = (0, a.jsx)(S.d, { vertical: !1, stroke: "#e6e6e6" })),
              (x[17] = f),
              (x[18] = v))
            : ((f = x[17]), (v = x[18])),
          x[19] === Symbol.for("react.memo_cache_sentinel") ? ((o = { stroke: "#888888" }), (x[19] = o)) : (o = x[19]),
          x[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)(N.W, {
                dataKey: "month",
                axisLine: o,
                height: 63,
                interval: 0,
                padding: { left: -8, right: -8 },
                tick: { fill: "#888888", fontSize: 24 },
                tickLine: !1,
                tickMargin: 17,
              })),
              (x[20] = r))
            : (r = x[20]),
          x[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = [0, 1200]), (b = { fill: "#888888", fontSize: 24 }), (x[21] = c), (x[22] = b))
            : ((c = x[21]), (b = x[22])))
        let y = (e) =>
          0 === e
            ? A.formatNumber(e)
            : A.formatMessage(
                {
                  id: "electron.onboarding.conversationalOnboarding.sampleChart.thousandsOfOrders",
                  defaultMessage: "{value}k",
                  description: "Compact thousands value on the sample monthly sales chart axis",
                },
                { value: A.formatNumber(e / 1e3, { maximumFractionDigits: 1 }) },
              )
        ;(x[23] !== y
          ? ((s = (0, a.jsx)(M.h, {
              width: 95,
              axisLine: !1,
              domain: c,
              tick: b,
              tickFormatter: y,
              tickLine: !1,
              ticks: R,
            })),
            (x[23] = y),
            (x[24] = s))
          : (s = x[24]),
          (l = t.series.map((e, n) => {
            let { color: o, key: i } = e
            return (0, a.jsx)(
              E.yP,
              {
                dataKey: i,
                fill: o,
                isAnimationActive: !1,
                stackId: "orders",
                children:
                  n === t.series.length - 1
                    ? (0, a.jsx)(T.Ze, { dataKey: "total", content: (0, a.jsx)(L, { formatNumber: A.formatNumber }) })
                    : null,
              },
              i,
            )
          })),
          (x[0] = A),
          (x[1] = e),
          (x[2] = t),
          (x[3] = n),
          (x[4] = i),
          (x[5] = r),
          (x[6] = s),
          (x[7] = l),
          (x[8] = d),
          (x[9] = u),
          (x[10] = p),
          (x[11] = g),
          (x[12] = m),
          (x[13] = h),
          (x[14] = f),
          (x[15] = v))
      } else
        ((e = x[1]),
          (t = x[2]),
          (n = x[3]),
          (i = x[4]),
          (r = x[5]),
          (s = x[6]),
          (l = x[7]),
          (d = x[8]),
          (u = x[9]),
          (p = x[10]),
          (g = x[11]),
          (m = x[12]),
          (h = x[13]),
          (f = x[14]),
          (v = x[15]))
      return (
        x[25] !== t ? ((b = (0, a.jsx)(D, { model: t })), (x[25] = t), (x[26] = b)) : (b = x[26]),
        x[27] !== e ||
        x[28] !== n ||
        x[29] !== i ||
        x[30] !== r ||
        x[31] !== s ||
        x[32] !== l ||
        x[33] !== b ||
        x[34] !== d ||
        x[35] !== u ||
        x[36] !== p ||
        x[37] !== g ||
        x[38] !== m ||
        x[39] !== h ||
        x[40] !== f ||
        x[41] !== v
          ? ((y = (0, a.jsxs)(e, {
              accessibilityLayer: n,
              width: i,
              height: d,
              "aria-label": u,
              barCategoryGap: p,
              data: g,
              margin: m,
              role: h,
              style: f,
              children: [v, r, s, l, b],
            })),
            (x[27] = e),
            (x[28] = n),
            (x[29] = i),
            (x[30] = r),
            (x[31] = s),
            (x[32] = l),
            (x[33] = b),
            (x[34] = d),
            (x[35] = u),
            (x[36] = p),
            (x[37] = g),
            (x[38] = m),
            (x[39] = h),
            (x[40] = f),
            (x[41] = v),
            (x[42] = y))
          : (y = x[42]),
        y
      )
    }
    function D(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        c,
        d,
        u = (0, o.c)(21),
        { model: p } = e
      u[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = [19, 253, 512]), (u[0] = t)) : (t = u[0])
      let g = t
      if (
        (u[1] !== p.title
          ? ((n = (0, a.jsx)("title", { children: p.title })), (u[1] = p.title), (u[2] = n))
          : (n = u[2]),
        u[3] !== p.accessibilityDescription
          ? ((i = (0, a.jsx)("desc", { children: p.accessibilityDescription })),
            (u[3] = p.accessibilityDescription),
            (u[4] = i))
          : (i = u[4]),
        u[5] !== p.title
          ? ((r = (0, a.jsx)("text", {
              x: 20,
              y: 56,
              fill: "#171717",
              fontSize: 34,
              fontWeight: 700,
              children: p.title,
            })),
            (u[5] = p.title),
            (u[6] = r))
          : (r = u[6]),
        u[7] !== p.subtitle
          ? ((s = (0, a.jsx)("text", { x: 20, y: 118, fill: "#171717", fontSize: 28, children: p.subtitle })),
            (u[7] = p.subtitle),
            (u[8] = s))
          : (s = u[8]),
        u[9] !== p.series)
      ) {
        let e
        ;(u[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (e, t) => {
              let { color: n, key: o, label: i } = e
              return (0, a.jsxs)(
                "g",
                {
                  transform: `translate(${g[t]} 163)`,
                  children: [
                    (0, a.jsx)("rect", { width: 20, height: 20, rx: 5, fill: n }),
                    (0, a.jsx)("text", { x: 34, y: 19, fill: "#171717", fontSize: 28, children: i }),
                  ],
                },
                o,
              )
            }),
            (u[11] = e))
          : (e = u[11]),
          (l = p.series.map(e)),
          (u[9] = p.series),
          (u[10] = l))
      } else l = u[10]
      return (
        u[12] !== p.ordersLabel
          ? ((c = (0, a.jsx)("text", { x: 115, y: 247, fill: "#888888", fontSize: 24, children: p.ordersLabel })),
            (u[12] = p.ordersLabel),
            (u[13] = c))
          : (c = u[13]),
        u[14] !== n || u[15] !== i || u[16] !== r || u[17] !== s || u[18] !== l || u[19] !== c
          ? ((d = (0, a.jsxs)("g", { children: [n, i, r, s, l, c] })),
            (u[14] = n),
            (u[15] = i),
            (u[16] = r),
            (u[17] = s),
            (u[18] = l),
            (u[19] = c),
            (u[20] = d))
          : (d = u[20]),
        d
      )
    }
    function L(e) {
      let t,
        n,
        i = (0, o.c)(7),
        { formatNumber: r, value: s, width: l, x: c, y: d } = e
      if ("number" != typeof s || "number" != typeof l || "number" != typeof c || "number" != typeof d) return null
      let u = c + l / 2,
        p = d - 13
      return (
        i[0] !== r || i[1] !== s ? ((t = r(s)), (i[0] = r), (i[1] = s), (i[2] = t)) : (t = i[2]),
        i[3] !== u || i[4] !== p || i[5] !== t
          ? ((n = (0, a.jsx)("text", { x: u, y: p, fill: "#171717", fontSize: 26, textAnchor: "middle", children: t })),
            (i[3] = u),
            (i[4] = p),
            (i[5] = t),
            (i[6] = n))
          : (n = i[6]),
        n
      )
    }
    var z = n("ifyC"),
      U = n("gchn"),
      F = n("DvNy"),
      B = n("os5G"),
      q = n("WGT4")
    let G = (0, r.vP)(F.Dx, null),
      V = (0, r.vP)(F.Dx, !0),
      W = (0, r.vP)(F.Dx, "minimum-generation-elapsed"),
      K = (0, l.zR)({
        id: "electron.onboarding.conversationalOnboarding.taskPicker.csvChart.v2",
        defaultMessage: "Turn this spreadsheet into a chart",
        description: "Conversational onboarding starter task that charts the bundled example CSV",
      }),
      H = Q("png"),
      X = Q("html")
    function Q(e) {
      function t(t, n, a) {
        let o = en(t, n, a.projectRoot, e)
        return {
          ...o,
          start: () => {
            ;(0, U.BK)(t, n) && ((0, U.a7)(t), o.start())
          },
        }
      }
      return {
        getDeclinedRetryPrompt: (e) =>
          e.formatMessage({
            id: "electron.onboarding.conversationalOnboarding.csvTaskDeclinedRetry",
            defaultMessage: "Got it. We can skip the CSV for now. Want to try another quick example?",
            description: "Message shown after declining the CSV conversational onboarding task",
          }),
        option: { Icon: Z, SelectionAttachment: Y, label: K },
        prepare: t,
        reset: ea,
        retry(e, n, a) {
          let o = t(e, n, a)
          return (o.start(), o)
        },
        View: (t) => (0, a.jsx)($, { hostId: t.context.hostId, format: e, onRetryTask: t.onRetryTask }),
      }
    }
    function Y() {
      let e,
        t,
        n,
        i = (0, o.c)(7),
        r = (0, c.A)()
      i[0] !== r
        ? ((e = r.formatMessage({
            id: "electron.onboarding.conversationalOnboarding.sampleCsv.filename",
            defaultMessage: "SnapDock Sales Orders",
            description:
              "Filename stem shown for the sample CSV attachment during conversational onboarding. The component adds the .csv extension.",
          })),
          (i[0] = r),
          (i[1] = e))
        : (e = i[1])
      let l = `${e}.csv`
      return (
        i[2] !== l
          ? ((t = (0, s.createElement)((0, u.I3)(l), { className: "size-6" })), (i[2] = l), (i[3] = t))
          : (t = i[3]),
        i[4] !== l || i[5] !== t
          ? ((n = (0, a.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, a.jsxs)("span", {
                className: "flex items-center gap-2 rounded-3xl border border-default bg-surface px-3 py-2",
                children: [t, l],
              }),
            })),
            (i[4] = l),
            (i[5] = t),
            (i[6] = n))
          : (n = i[6]),
        n
      )
    }
    function Z(e) {
      let t,
        n = (0, o.c)(3),
        { className: i } = e,
        r = !0 === (0, A.Y)() ? g : m
      return (
        n[0] !== r || n[1] !== i
          ? ((t = (0, a.jsx)(r, { className: i })), (n[0] = r), (n[1] = i), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    async function J(e) {
      let t = await (0, b.fO)([e], { prompt: "" })
      if (null == t.projectlessOutputDirectory) throw Error("No projectless output directory found")
      return t.projectlessOutputDirectory
    }
    function $(e) {
      let t,
        n,
        i,
        s = (0, o.c)(15),
        { hostId: l, format: c, onRetryTask: d } = e,
        u = (0, r.gh)(F.Dx),
        p = (0, r.Ul)(G),
        g = (0, r.Ul)(V),
        m = (0, r.Ul)(W),
        h = (0, r.Ul)(F.rK)
      if ((0, r.Ul)(F.M8)) {
        let e
        return (s[0] !== d ? ((e = (0, a.jsx)(w.W_, { onRetry: d })), (s[0] = d), (s[1] = e)) : (e = s[1]), e)
      }
      if (!h) return null
      if (!g) {
        let e
        return (
          s[2] !== u ? ((e = (0, a.jsx)(ee, { onComplete: () => u.set(V, !0) })), (s[2] = u), (s[3] = e)) : (e = s[3]),
          e
        )
      }
      return (
        s[4] !== c || s[5] !== l || s[6] !== u
          ? ((t = (e) =>
              (0, a.jsx)(q.V, { filePath: e, format: c, hostId: l, onCompletionComplete: () => u.set(F.uM, !0) })),
            (s[4] = c),
            (s[5] = l),
            (s[6] = u),
            (s[7] = t))
          : (t = s[7]),
        s[8] !== u
          ? ((n = () => {
              let e = "reading" === u.get(W) ? "generating" : "minimum-generation-elapsed"
              u.set(W, e)
            }),
            (s[8] = u),
            (s[9] = n))
          : (n = s[9]),
        s[10] !== p || s[11] !== m || s[12] !== t || s[13] !== n
          ? ((i = (0, a.jsx)(et, { completion: p, phase: m, renderCompletion: t, onPhaseComplete: n })),
            (s[10] = p),
            (s[11] = m),
            (s[12] = t),
            (s[13] = n),
            (s[14] = i))
          : (i = s[14]),
        i
      )
    }
    function ee(e) {
      let t,
        n,
        r,
        s,
        l,
        c = (0, o.c)(6),
        { onComplete: u } = e
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { opacity: 0 }), (c[0] = t)) : (t = c[0]),
        c[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = { opacity: 1 }), (r = { delay: 2, duration: 0.2 }), (c[1] = n), (c[2] = r))
          : ((n = c[1]), (r = c[2])),
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(v.N, {
              children: (0, a.jsx)(d.A, {
                id: "electron.onboarding.conversationalOnboarding.csvExecutionThinking",
                defaultMessage: "Thinking",
                description: "Animated thinking label shown before the example CSV onboarding thread starts",
              }),
            })),
            (c[3] = s))
          : (s = c[3]),
        c[4] !== u
          ? ((l = (0, a.jsx)(i.P.div, {
              animate: t,
              className: "text-lg leading-6",
              initial: n,
              transition: r,
              onAnimationComplete: u,
              children: s,
            })),
            (c[4] = u),
            (c[5] = l))
          : (l = c[5]),
        l
      )
    }
    function et(e) {
      let t,
        n,
        r,
        s,
        l,
        c,
        u,
        g = (0, o.c)(19),
        { completion: m, phase: f, renderCompletion: b, onPhaseComplete: y } = e,
        x = "reading" === f,
        A = x ? h : p.A
      ;(g[0] !== A
        ? ((t = (0, a.jsx)(A, {
            "aria-hidden": !0,
            className:
              "size-6 shrink-0 text-[color-mix(in_srgb,var(--color-codex-description)_55%,transparent)] dark:text-[color-mix(in_srgb,var(--color-codex-description)_45%,transparent)]",
          })),
          (g[0] = A),
          (g[1] = t))
        : (t = g[1]),
        g[2] !== x
          ? ((n = (0, a.jsx)(v.N, {
              children: x
                ? (0, a.jsx)(d.A, {
                    id: "electron.onboarding.conversationalOnboarding.readingCsv",
                    defaultMessage: "Reading CSV file",
                    description: "Status shown while Codex reads the example CSV during conversational onboarding",
                  })
                : (0, a.jsx)(d.A, {
                    id: "electron.onboarding.conversationalOnboarding.generatingChart",
                    defaultMessage: "Generating chart",
                    description:
                      "Status shown while Codex generates a chart from the example CSV during conversational onboarding",
                  }),
            })),
            (g[2] = x),
            (g[3] = n))
          : (n = g[3]),
        g[4] !== t || g[5] !== n
          ? ((r = (0, a.jsxs)(a.Fragment, { children: [t, n] })), (g[4] = t), (g[5] = n), (g[6] = r))
          : (r = g[6]))
      let C = r
      if ("minimum-generation-elapsed" === f) {
        let e
        if (null != m) {
          let e
          return (g[7] !== m || g[8] !== b ? ((e = b(m)), (g[7] = m), (g[8] = b), (g[9] = e)) : (e = g[9]), e)
        }
        return (
          g[10] !== C
            ? ((e = (0, a.jsx)("div", {
                role: "status",
                className: "flex items-center gap-2 text-lg leading-6",
                children: C,
              })),
              (g[10] = C),
              (g[11] = e))
            : (e = g[11]),
          e
        )
      }
      return (
        g[12] === Symbol.for("react.memo_cache_sentinel") ? ((s = { opacity: 0 }), (g[12] = s)) : (s = g[12]),
        g[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { opacity: 1 }), (c = { delay: 2, duration: 0.2 }), (g[13] = l), (g[14] = c))
          : ((l = g[13]), (c = g[14])),
        g[15] !== y || g[16] !== f || g[17] !== C
          ? ((u = (0, a.jsx)(
              i.P.div,
              {
                animate: s,
                role: "status",
                className: "flex items-center gap-2 text-lg leading-6",
                initial: l,
                transition: c,
                onAnimationComplete: y,
                children: C,
              },
              f,
            )),
            (g[15] = y),
            (g[16] = f),
            (g[17] = C),
            (g[18] = u))
          : (u = g[18]),
        u
      )
    }
    function en(e, t, o, i) {
      return (
        ea(e),
        e.set(V, !1),
        e.set(W, "reading"),
        (0, B.a)({
          start: (r) => {
            ;(async function (e, t, o, i, r) {
              ;(r?.throwIfAborted(), e.set(F.rK, !0), e.set(F.M8, !1), (0, C.$z)(e, t))
              try {
                let t = await (
                  "html" === i
                    ? async function (e, t) {
                        let a = y.appServices.conversationalOnboarding
                        if (null == a) throw Error("CSV chart onboarding is unavailable")
                        let [o, { getStandaloneVisualizationHtml: i }] = await Promise.all([
                            J(t),
                            Promise.all([n.e(652500), n.e(877652), n.e(558422), n.e(888418)]).then(n.bind(n, "joof")),
                          ]),
                          r = e.get(f.g),
                          s = (0, z.d)(r),
                          { path: l } = await a.createSampleChart({
                            bytes: new TextEncoder().encode(i(s.fragment, { locale: r.locale, title: s.title })),
                            fileStem: r.formatMessage({
                              id: "electron.onboarding.conversationalOnboarding.sampleVisualization.filename",
                              defaultMessage: "SnapDock Monthly Sales Visualization",
                              description:
                                "Filename stem for the interactive HTML chart created during conversational onboarding. The host adds the .html extension. Short filename.",
                            }),
                            format: "html",
                            parentPath: o,
                          })
                        return l
                      }
                    : async function (e, t) {
                        let n = y.appServices.conversationalOnboarding
                        if (null == n) throw Error("CSV chart onboarding is unavailable")
                        let o = await J(t),
                          i = e.get(f.g),
                          { path: r } = await n.createSampleChart({
                            bytes: await (async function (e) {
                              let t = document.createElement("div"),
                                n = (0, O.createRoot)(t)
                              ;(0, I.flushSync)(() => {
                                n.render((0, a.jsx)(k.Kq, { value: e, children: (0, a.jsx)(P, {}) }))
                              })
                              try {
                                let e = t.querySelector("svg")
                                if (null == e) throw Error("Sample sales chart did not render an SVG")
                                let n = URL.createObjectURL(
                                  new Blob([new XMLSerializer().serializeToString(e)], {
                                    type: "image/svg+xml;charset=utf-8",
                                  }),
                                )
                                try {
                                  let t = new Image()
                                  ;((t.src = n), await t.decode())
                                  let a = document.createElement("canvas")
                                  ;((a.width = e.width.baseVal.value), (a.height = e.height.baseVal.value))
                                  let o = a.getContext("2d")
                                  if (null == o) throw Error("Sample sales chart canvas is unavailable")
                                  ;((o.fillStyle = "#ffffff"),
                                    o.fillRect(0, 0, a.width, a.height),
                                    o.drawImage(t, 0, 0))
                                  let i = await new Promise((e, t) => {
                                    a.toBlob((n) => {
                                      null == n ? t(Error("Sample sales chart PNG encoding failed")) : e(n)
                                    }, "image/png")
                                  })
                                  return new Uint8Array(await i.arrayBuffer())
                                } finally {
                                  URL.revokeObjectURL(n)
                                }
                              } finally {
                                n.unmount()
                              }
                            })(i),
                            fileStem: i.formatMessage({
                              id: "electron.onboarding.conversationalOnboarding.sampleChart.filename",
                              defaultMessage: "SnapDock Monthly Sales Chart",
                              description:
                                "Filename stem for the PNG chart created from the bundled sample CSV during conversational onboarding. The host adds the .png extension. Short filename.",
                            }),
                            parentPath: o,
                          })
                        return r
                      }
                )(e, o)
                return (r?.aborted || e.set(G, t), t)
              } catch (n) {
                throw (
                  r?.aborted ||
                    (x.v.error("Failed to create conversational onboarding CSV chart", {
                      safe: {},
                      sensitive: { error: n },
                    }),
                    (0, C.dE)(e, t),
                    (0, C.pL)(e, t),
                    e.set(F.M8, !0)),
                  n
                )
              }
            })(e, t, o, i, r.signal).then(
              (e) => r.finish({ status: "completed", output: e }),
              () => {
                let e = "cancelled" === r.signal.reason ? "cancelled" : "interrupted"
                r.finish({ status: r.signal.aborted ? e : "failed" })
              },
            )
          },
          onCancel: () => {},
        })
      )
    }
    function ea(e) {
      ;(e.set(G, null), e.set(V, !0), e.set(W, "minimum-generation-elapsed"))
    }
  },
  sjq4(e, t, n) {
    n.d(t, { p8: () => V, v6: () => z, Qb: () => M, Ue: () => D, hW: () => L })
    var a = n("ABep"),
      o = n("QosV")
    let i = (0, n("nkTT").a)({
      name: "page-text-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.75, y: 2.75, width: 16.5, height: 18.5 },
        visualBounds: { x: 3.75, y: 2.75, width: 16.5, height: 18.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.75, y: 2.75, width: 16.5, height: 18.5 },
        center: { x: 12, y: 12 },
        insets: { top: 2.75, right: 3.75, bottom: 2.75, left: 3.75 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13 13.25C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H9C8.58579 14.75 8.25 14.4142 8.25 14C8.25 13.5858 8.58579 13.25 9 13.25H13Z" fill="currentColor"/> <path d="M15 9.25C15.4142 9.25 15.75 9.58579 15.75 10C15.75 10.4142 15.4142 10.75 15 10.75H9C8.58579 10.75 8.25 10.4142 8.25 10C8.25 9.58579 8.58579 9.25 9 9.25H15Z" fill="currentColor"/> <path d="M16.7002 2.75C18.6607 2.75011 20.2499 4.33935 20.25 6.2998V17.7002C20.2499 19.6607 18.6607 21.2499 16.7002 21.25H7.2998C5.33935 21.2499 3.75011 19.6607 3.75 17.7002V6.2998C3.75011 4.33935 5.33935 2.75011 7.2998 2.75H16.7002ZM7.2998 4.25C6.16778 4.25011 5.25011 5.16778 5.25 6.2998V17.7002C5.25011 18.8322 6.16778 19.7499 7.2998 19.75H16.7002C17.8322 19.7499 18.7499 18.8322 18.75 17.7002V6.2998C18.7499 5.16778 17.8322 4.25011 16.7002 4.25H7.2998Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var r = n("LIss"),
      s = n("zTeN"),
      l = n("DBCl"),
      c = n("Qgfj"),
      d = n("Wf1j"),
      u = n("oyxz"),
      p = n("CTWI"),
      g = n("ygO2"),
      m = n("HOLv"),
      h = n("B09n"),
      f = n("G6Yj"),
      v = n("svjy"),
      b = n("umSm"),
      y = n("GaA7"),
      x = n("WFY2"),
      A = n("A5O4"),
      C = n("skUx"),
      w = n("h5BB"),
      I = n("QWBF"),
      O = n("WFVe"),
      k = n("DvNy"),
      _ = n("os5G"),
      S = n("cOfv")
    let N = (0, l.DIv)(l.m20),
      M = (0, s.vP)(k.Dx, null),
      E = (0, s.vP)(k.Dx, "complete"),
      T = (0, s.vP)(k.Dx, void 0),
      j = (0, s.vP)(k.Dx, !1),
      R = (0, s.vP)(k.Dx, !1),
      P = (0, s.vP)(k.Dx, !1),
      D = {
        getDeclinedRetryPrompt: (e) =>
          e.formatMessage({
            id: "electron.onboarding.conversationalOnboarding.desktopTaskDeclinedRetry",
            defaultMessage: "Got it. I won’t leave a note on your Desktop. Want to try another quick example?",
            description: "Message shown after declining the Desktop note conversational onboarding task",
          }),
        option: {
          Icon: function (e) {
            let t,
              n = (0, o.c)(2),
              { className: i } = e
            return (n[0] !== i ? ((t = (0, a.jsx)(f.A, { className: i })), (n[0] = i), (n[1] = t)) : (t = n[1]), t)
          },
          label: (0, c.zR)({
            id: "electron.onboarding.conversationalOnboarding.taskPicker.desktopNote",
            defaultMessage: "Leave a note on my Desktop",
            description: "Conversational onboarding starter task that creates a Desktop note",
          }),
        },
        prepare: (e) => L(e, (0, S.V)(e, "desktop_note")),
        reset: function (e) {
          ;(e.set(M, null), e.set(E, "writing"), e.set(T, void 0), e.set(j, !1), e.set(R, !1), e.set(P, !1))
        },
        retry(e) {
          let t = L(e, (0, S.V)(e, "desktop_note"))
          ;(e.set(M, null), e.set(E, "writing"), e.set(k.uM, !1), e.set(k.M8, !1))
          let n = e.get(T)
          return (null == n ? q(e) : G(e, n), t)
        },
        View: function (e) {
          let t,
            n,
            i,
            r = (0, o.c)(6)
          return (
            r[0] !== e ? (({ context: t, ...n } = e), (r[0] = e), (r[1] = t), (r[2] = n)) : ((t = r[1]), (n = r[2])),
            (0, S.w)("desktop_note", L),
            r[3] !== t.hostId || r[4] !== n
              ? ((i = (0, a.jsx)(z, { hostId: t.hostId, ...n })), (r[3] = t.hostId), (r[4] = n), (r[5] = i))
              : (i = r[5]),
            i
          )
        },
      }
    function L(e, t) {
      let n = !1,
        a = (0, _.a)({
          start: (a) =>
            (0, O.gM)(e, "desktop_note", a, {
              ...t,
              onExecutionStarted: () => {
                ;((n = !0), t?.onExecutionStarted?.())
              },
            }),
          onCancel: (e, t) => {
            n || e.finish({ status: t })
          },
        })
      return (a.start(), a)
    }
    function z(e) {
      let t,
        n,
        i,
        r,
        l,
        c,
        p,
        g,
        m,
        h,
        f,
        v = (0, o.c)(35),
        { hostId: b, hasAdvancedCapabilitiesSetup: y, onChooseAnotherTask: x, onRetryTask: A } = e,
        w = void 0 !== y && y,
        I = (0, s.gh)(k.Dx),
        _ = (0, d.A)(),
        S = (0, s.Ul)(O.Cd),
        N = (0, s.Ul)(M),
        T = (0, s.Ul)(E),
        D = (0, s.Ul)(k.rK),
        L = (0, s.Ul)(k.M8),
        z = (0, s.Ul)(j),
        G = (0, s.Ul)(R),
        W = (0, s.Ul)(P)
      if (L) {
        let e
        return (v[0] !== A ? ((e = (0, a.jsx)(C.W_, { onRetry: A })), (v[0] = A), (v[1] = e)) : (e = v[1]), e)
      }
      ;(v[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(U, {})), (v[2] = t)) : (t = v[2]),
        v[3] !== _
          ? ((n = _.formatMessage({
              id: "electron.onboarding.conversationalOnboarding.permissionIntro",
              defaultMessage:
                "I can do that, but I’ll need access to your Desktop to put the note there. Mind allowing that?",
              description: "Explanation before the conversational onboarding Desktop permission request",
            })),
            (v[3] = _),
            (v[4] = n))
          : (n = v[4]),
        v[5] !== I
          ? ((i = () => {
              q(I)
            }),
            (v[5] = I),
            (v[6] = i))
          : (i = v[6]),
        v[7] !== z || v[8] !== x || v[9] !== i
          ? ((r = (0, a.jsx)(B, { isRequesting: z, onAllow: i, onDismiss: x })),
            (v[7] = z),
            (v[8] = x),
            (v[9] = i),
            (v[10] = r))
          : (r = v[10]),
        v[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(u.A, {
              id: "electron.onboarding.conversationalOnboarding.folderAccessFailed",
              defaultMessage: "I couldn’t access your Desktop. Check your system privacy settings, then try again.",
              description: "Error shown when the system denies Desktop access during conversational onboarding",
            })),
            (v[11] = l))
          : (l = v[11]),
        v[12] !== I ? ((c = () => I.set(P, !0)), (v[12] = I), (v[13] = c)) : (c = v[13]),
        v[14] !== S || v[15] !== G || v[16] !== W || v[17] !== n || v[18] !== r || v[19] !== c
          ? ((p = (0, a.jsx)(C.gf, {
              declinedMessage: t,
              intro: n,
              permissionStatus: S,
              request: r,
              requestError: l,
              requestFailed: G,
              showRequest: W,
              onIntroComplete: c,
            })),
            (v[14] = S),
            (v[15] = G),
            (v[16] = W),
            (v[17] = n),
            (v[18] = r),
            (v[19] = c),
            (v[20] = p))
          : (p = v[20]))
      let K = p
      return D
        ? (v[21] !== w || v[22] !== b || v[23] !== I
            ? ((g = (e) =>
                (0, a.jsx)(V, {
                  filePath: e,
                  hostId: b,
                  hasAdvancedCapabilitiesSetup: w,
                  onCompletionComplete: () => I.set(k.uM, !0),
                })),
              (v[21] = w),
              (v[22] = b),
              (v[23] = I),
              (v[24] = g))
            : (g = v[24]),
          v[25] !== I
            ? ((m = () => {
                let e = "writing" === I.get(E) ? "saving" : "complete"
                I.set(E, e)
              }),
              (v[25] = I),
              (v[26] = m))
            : (m = v[26]),
          v[27] !== N || v[28] !== T || v[29] !== m || v[30] !== g
            ? ((h = (0, a.jsx)(F, { completion: N, phase: T, renderCompletion: g, onPhaseComplete: m })),
              (v[27] = N),
              (v[28] = T),
              (v[29] = m),
              (v[30] = g),
              (v[31] = h))
            : (h = v[31]),
          v[32] !== K || v[33] !== h
            ? ((f = (0, a.jsxs)(a.Fragment, { children: [K, h] })), (v[32] = K), (v[33] = h), (v[34] = f))
            : (f = v[34]),
          f)
        : K
    }
    function U() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              children: (0, a.jsx)(u.A, {
                id: "electron.onboarding.conversationalOnboarding.desktopAccessDeclined",
                defaultMessage: "No problem — you can allow Desktop access later. You’re all set.",
                description: "Closing message when Desktop access is declined during conversational onboarding",
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function F(e) {
      let t,
        n,
        i,
        s,
        l,
        c = (0, o.c)(14),
        { completion: d, phase: p, renderCompletion: g, onPhaseComplete: m } = e,
        h = "writing" === p
      c[0] !== h
        ? ((t = (0, a.jsx)(b.N, {
            children: h
              ? (0, a.jsx)(u.A, {
                  id: "electron.onboarding.conversationalOnboarding.writingNote",
                  defaultMessage: "Writing note",
                  description: "Animated status shown while the Desktop onboarding note is written",
                })
              : (0, a.jsx)(u.A, {
                  id: "electron.onboarding.conversationalOnboarding.savingNoteToDesktop",
                  defaultMessage: "Saving to Desktop",
                  description: "Animated status shown while the onboarding note is saved to the Desktop",
                }),
          })),
          (c[0] = h),
          (c[1] = t))
        : (t = c[1])
      let f = t
      if ("complete" === p) {
        let e
        if (null != d) {
          let e
          return (c[2] !== d || c[3] !== g ? ((e = g(d)), (c[2] = d), (c[3] = g), (c[4] = e)) : (e = c[4]), e)
        }
        return (
          c[5] !== f
            ? ((e = (0, a.jsx)("div", { role: "status", className: "text-lg leading-6", children: f })),
              (c[5] = f),
              (c[6] = e))
            : (e = c[6]),
          e
        )
      }
      return (
        c[7] === Symbol.for("react.memo_cache_sentinel") ? ((n = { opacity: 0 }), (c[7] = n)) : (n = c[7]),
        c[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { opacity: 1 }), (s = { delay: 2, duration: 0.2 }), (c[8] = i), (c[9] = s))
          : ((i = c[8]), (s = c[9])),
        c[10] !== m || c[11] !== p || c[12] !== f
          ? ((l = (0, a.jsx)(
              r.P.div,
              {
                animate: n,
                role: "status",
                className: "text-lg leading-6",
                initial: i,
                transition: s,
                onAnimationComplete: m,
                children: f,
              },
              p,
            )),
            (c[10] = m),
            (c[11] = p),
            (c[12] = f),
            (c[13] = l))
          : (l = c[13]),
        l
      )
    }
    function B(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        c,
        d,
        p,
        m = (0, o.c)(18),
        { isRequesting: h, onAllow: v, onDismiss: b } = e
      return (
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(u.A, {
              id: "electron.onboarding.conversationalOnboarding.folderPermissionNotNow",
              defaultMessage: "Not now",
              description: "Button that declines Desktop access during conversational onboarding",
            })),
            (m[0] = t))
          : (t = m[0]),
        m[1] !== h || m[2] !== b
          ? ((n = (0, a.jsx)(g.$, { color: "outline", disabled: h, size: "medium", onClick: b, children: t })),
            (m[1] = h),
            (m[2] = b),
            (m[3] = n))
          : (n = m[3]),
        m[4] !== h
          ? ((i = h
              ? (0, a.jsx)(u.A, {
                  id: "electron.onboarding.conversationalOnboarding.folderPermissionRequesting",
                  defaultMessage: "Requesting…",
                  description: "Button label while conversational onboarding requests Desktop access",
                })
              : (0, a.jsx)(u.A, {
                  id: "electron.onboarding.conversationalOnboarding.folderPermissionAllow",
                  defaultMessage: "Allow access",
                  description: "Button that grants Desktop access during conversational onboarding",
                })),
            (m[4] = h),
            (m[5] = i))
          : (i = m[5]),
        m[6] !== h || m[7] !== v || m[8] !== i
          ? ((r = (0, a.jsx)(g.$, { color: "primary", disabled: h, size: "medium", onClick: v, children: i })),
            (m[6] = h),
            (m[7] = v),
            (m[8] = i),
            (m[9] = r))
          : (r = m[9]),
        m[10] !== n || m[11] !== r
          ? ((s = (0, a.jsxs)(a.Fragment, { children: [n, r] })), (m[10] = n), (m[11] = r), (m[12] = s))
          : (s = m[12]),
        m[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(f.A, { className: "size-6", "aria-hidden": !0 })),
            (c = (0, a.jsx)(u.A, {
              id: "electron.onboarding.conversationalOnboarding.folderAccessRequested",
              defaultMessage: "Folder access requested",
              description: "Subtitle for the conversational onboarding Desktop access request",
            })),
            (d = (0, a.jsx)(u.A, {
              id: "electron.onboarding.conversationalOnboarding.desktopFolderName",
              defaultMessage: "Desktop",
              description: "Name of the Desktop folder requested during conversational onboarding",
            })),
            (m[13] = l),
            (m[14] = c),
            (m[15] = d))
          : ((l = m[13]), (c = m[14]), (d = m[15])),
        m[16] !== s
          ? ((p = (0, a.jsx)(w.B, { actions: s, icon: l, subtitle: c, title: d })), (m[16] = s), (m[17] = p))
          : (p = m[17]),
        p
      )
    }
    async function q(e) {
      let t = (0, O.xx)(e)
      if (!(!t?.isActive() || e.get(j))) {
        if (null == y.appServices.conversationalOnboarding) {
          ;(e.set(R, !0), (0, A.pf)(e, "desktop_note"))
          return
        }
        ;(e.set(j, !0), e.set(R, !1), e.set(O.Cd, "pending"), (0, A.c9)(e, "desktop_note"))
        try {
          let n = await y.appServices.conversationalOnboarding.requestDesktopRoot()
          if (!t.isActive()) return
          ;(e.set(T, n), (0, O.Sv)(e), (0, A.J4)(e, "desktop_note"), G(e, n))
        } catch {
          t.isActive() && ((0, A.ZT)(e, "desktop_note"), e.set(R, !0))
        } finally {
          t.isActive() && e.set(j, !1)
        }
      }
    }
    async function G(e, t) {
      let n = (0, O.xx)(e)
      if (null != n && n.isActive()) {
        ;(e.set(k.rK, !0), e.set(k.M8, !1), (0, A.$z)(e, "desktop_note"))
        try {
          n.onExecutionStarted?.()
          let a = await (async function (e, t) {
            let n = y.appServices.conversationalOnboarding
            if (null == n) throw Error("Desktop note onboarding is unavailable")
            let a = e.get(v.g),
              { path: o } = await n.createDesktopNote({
                content: a.formatMessage(
                  {
                    id: "electron.onboarding.conversationalOnboarding.desktopNote.content",
                    defaultMessage:
                      "Hello from {appName}.{paragraphBreak}You ask. I can do – now directly on your computer, too.",
                    description:
                      "Full content of the text file created by the conversational onboarding Desktop note task. The {appName} placeholder is the visible product name. The {paragraphBreak} placeholder inserts a blank line between the greeting and the second paragraph.",
                  },
                  { appName: p.C, paragraphBreak: "\n\n" },
                ),
                fileStem: a.formatMessage(
                  {
                    id: "electron.onboarding.conversationalOnboarding.desktopNote.filename",
                    defaultMessage: "Note from {appName}",
                    description:
                      "Filename stem for the text file created by the conversational onboarding Desktop note task. The host adds the .txt extension and a number when needed. The {appName} placeholder is the visible product name.",
                  },
                  { appName: p.C },
                ),
                parentPath: t,
              })
            return o
          })(e, t)
          ;(n.isActive() && e.set(M, a), n.attempt.finish({ status: "completed", output: a }))
        } catch (t) {
          ;(n.isActive() &&
            (x.v.error("Failed to create conversational onboarding Desktop note", {
              safe: {},
              sensitive: { error: t },
            }),
            (0, A.dE)(e, "desktop_note"),
            (0, A.pL)(e, "desktop_note"),
            e.set(k.M8, !0)),
            n.attempt.finish({ status: (0, _.S)(n.attempt.signal) }))
        }
      }
    }
    function V(e) {
      let t,
        n,
        r,
        s,
        l,
        c,
        p,
        g = (0, o.c)(19),
        { filePath: f, hostId: v, animate: b, hasAdvancedCapabilitiesSetup: y, onCompletionComplete: x } = e,
        A = void 0 === b || b,
        C = void 0 !== y && y,
        w = (0, d.A)()
      return (
        g[0] !== C || g[1] !== w
          ? ((t = C
              ? w.formatMessage({
                  id: "electron.onboarding.conversationalOnboarding.desktopFollowUp.artifactCompleted",
                  defaultMessage: "And just like that, we did something on your computer.",
                  description:
                    "Completion message shown below a Desktop note before conversational onboarding offers advanced setup",
                })
              : w.formatMessage(
                  {
                    id: "electron.onboarding.conversationalOnboarding.documentTaskCompleted",
                    defaultMessage:
                      "And just like that, we did something on your computer.{paragraphBreak}You’re all set.",
                    description: "Final message after ChatGPT creates a document during conversational onboarding",
                  },
                  { paragraphBreak: "\n\n" },
                )),
            (g[0] = C),
            (g[1] = w),
            (g[2] = t))
          : (t = g[2]),
        g[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(m.I, { asset: i })), (g[3] = n))
          : (n = g[3]),
        g[4] !== w
          ? ((r = w.formatMessage({
              id: "electron.onboarding.conversationalOnboarding.desktopArtifactCompleted",
              defaultMessage: "Done. I dropped this note on your Desktop. Try opening it.",
              description: "Completion message after Codex creates the conversational onboarding Desktop note",
            })),
            (g[4] = w),
            (g[5] = r))
          : (r = g[5]),
        g[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(u.A, {
              id: "electron.onboarding.conversationalOnboarding.documentArtifact",
              defaultMessage: "Document",
              description: "File type label for the text document created during conversational onboarding",
            })),
            (g[6] = s))
          : (s = g[6]),
        g[7] !== f || g[8] !== v
          ? ((l = () => {
              ;(0, h.openWorkspaceFile)({ path: f, cwd: N, hostId: v, target: "systemDefault" })
            }),
            (c = () => {
              ;(0, h.openWorkspaceFile)({ path: f, cwd: N, hostId: v, target: "fileManager" })
            }),
            (g[7] = f),
            (g[8] = v),
            (g[9] = l),
            (g[10] = c))
          : ((l = g[9]), (c = g[10])),
        g[11] !== A || g[12] !== f || g[13] !== x || g[14] !== t || g[15] !== r || g[16] !== l || g[17] !== c
          ? ((p = (0, a.jsx)(
              I.r,
              {
                animate: A,
                completionMessage: t,
                filePath: f,
                icon: n,
                introMessage: r,
                typeLabel: s,
                onCompletionComplete: x,
                onOpen: l,
                onReveal: c,
              },
              f,
            )),
            (g[11] = A),
            (g[12] = f),
            (g[13] = x),
            (g[14] = t),
            (g[15] = r),
            (g[16] = l),
            (g[17] = c),
            (g[18] = p))
          : (p = g[18]),
        p
      )
    }
  },
  WfU0(e, t, n) {
    let a = { view_protein_structure: n("CMJl").r }
    function o(e) {
      return null != e && Object.hasOwn(a, e)
    }
    n.d(
      t,
      {},
      {
        o: o,
        p: function (e, t, n, i, r) {
          if (!o(t.selectedTask)) throw Error("Unknown hardcoded plugin onboarding task")
          return a[t.selectedTask](e, t, n, i, r)
        },
      },
    )
  },
  WFVe(e, t, n) {
    var a = n("zTeN"),
      o = n("A5O4"),
      i = n("DvNy")
    let r = new WeakMap(),
      s = (0, a.vP)(i.Dx, "pending")
    function l(e) {
      return r.get(e.node)
    }
    n.d(
      t,
      {},
      {
        Cd: s,
        Sv: function (e) {
          ;(e.set(s, "allowed"), l(e)?.onAccessAllowed?.())
        },
        gM: function (e, t, n, a) {
          let i = {
            attempt: n,
            isActive: () => l(e) === i && !n.signal.aborted && !n.settled && (a?.isActive?.() ?? !0),
            isSelected: () => l(e) === i && !n.signal.aborted && (a?.isSelected?.() ?? !0),
            onAccessAllowed: a?.onAccessAllowed,
            onExecutionStarted: a?.onExecutionStarted,
          }
          ;(l(e)?.attempt.cancel(), r.set(e.node, i), e.set(s, a?.permissionStatus ?? "pending"), (0, o.t6)(e, t))
        },
        xx: l,
      },
    )
  },
  os5G(e, t, n) {
    var a = n("DBCl")
    function o(e) {
      return e.aborted ? ("cancelled" === e.reason ? "cancelled" : "interrupted") : "failed"
    }
    n.d(
      t,
      {},
      {
        S: o,
        a: function (e) {
          let t = new AbortController(),
            n = (0, a.udX)(),
            i = (0, a.udX)(),
            r = !1,
            s = !1,
            l = {
              started: n.promise,
              result: i.promise,
              signal: t.signal,
              get settled() {
                return s
              },
              finish: (n) => {
                s || ((s = !0), "completed" !== n.status && t.abort(n.status), e.onSettled?.(n), i.resolve(n))
              },
              start: () => {
                r ||
                  t.signal.aborted ||
                  s ||
                  ((r = !0),
                  (async () => {
                    try {
                      await e.start(l)
                    } catch {
                      l.finish({ status: o(t.signal) })
                    } finally {
                      n.resolve(void 0)
                    }
                  })())
              },
              cancel: (a = "interrupted") => {
                s ||
                  t.signal.aborted ||
                  (t.abort(a),
                  r
                    ? null != e.onCancel
                      ? e.onCancel(l, a)
                      : l.finish({ status: a })
                    : (n.resolve(void 0), l.finish({ status: a })))
              },
            }
          return l
        },
      },
    )
  },
  DvNy(e, t, n) {
    var a = n("zTeN"),
      o = n("UbHS")
    let i = (0, a.z8)("ConversationalOnboardingTaskScope", { parent: o.MD }),
      r = (0, a.vP)(i, !1),
      s = (0, a.vP)(i, null),
      l = (0, a.vP)(i, !1),
      c = (0, a.vP)(i, !1)
    n.d(
      t,
      {},
      {
        CL: function (e) {
          ;(e.set(r, !1), e.set(s, null), e.set(l, !1), e.set(c, !1))
        },
        Dx: i,
        M8: c,
        rK: l,
        s7: s,
        uM: r,
      },
    )
  },
  TfgZ(e, t, n) {
    var a = n("iRMi"),
      o = n("mfKi"),
      i = n("DBCl"),
      r = n("SPnB"),
      s = n("bQ7F"),
      l = n("K4kL"),
      c = n("a0aG"),
      d = n("v70x"),
      u = n("M3gf"),
      p = n("ueue"),
      g = n("yGJW"),
      m = n("WFY2"),
      h = n("A5O4")
    let f = new Map()
    function v(e, t) {
      f.delete(y(e, t))
    }
    async function b({
      scope: e,
      hostId: t,
      installAttemptId: n,
      marketplaceAnalytics: v = c.F.onboarding,
      plugin: x,
      pluginName: A,
    }) {
      if (await (0, s.QT)(e, t, [x.plugin.id, x.plugin.remotePluginId, x.plugin.shareContext?.remotePluginId]))
        return null
      let C = y(t, x)
      try {
        let s = f.get(C)
        if (null == s) {
          let c = n ?? crypto.randomUUID(),
            b = { ...(0, p.R9)(x), installAttemptId: c },
            y = performance.now()
          try {
            ;(0, d.v6)(e, {
              action: o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL,
              ...v,
              installAttemptId: c,
              plugin: x.plugin,
              result: o.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
              sourceAttributionId: (0, h.ln)(e),
            })
          } catch (e) {
            m.v.error("Failed to log conversational onboarding plugin install", {
              safe: { pluginName: A },
              sensitive: { error: e },
            })
          }
          let w = ({ errorType: t, outcome: n, result: i }) => {
              let r = Math.max(0, Math.round(performance.now() - y))
              try {
                ;((0, d.v6)(e, {
                  action: o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL,
                  errorType: t,
                  ...v,
                  installAttemptId: c,
                  plugin: x.plugin,
                  result: i,
                }),
                  (0, g.yy)(e, a.CodexPluginInstall, {
                    flowOutcome: n,
                    installAttemptId: c,
                    outcome: n,
                    pluginId: x.plugin.id,
                    pluginInstallFlowDurationMs: r,
                    pluginInstallRpcDurationMs: r,
                    remotePluginId: (0, d.pX)(x.plugin),
                    rpcOutcome: n,
                  }))
              } catch (e) {
                m.v.error("Failed to log conversational onboarding plugin install", {
                  safe: { pluginName: A },
                  sensitive: { error: e },
                })
              }
            },
            I = e.get(r.chatGptAuthenticatedAccountId$),
            O = e.get(r.chatGptAuthenticatedUserId$)
          ;((s = (0, u.KI)(e, t, b)
            .then(() => {
              ;(e.get(r.chatGptAuthenticatedAccountId$) === I &&
                e.get(r.chatGptAuthenticatedUserId$) === O &&
                (0, l.jg)(e, t, x.plugin.id, x.plugin.remotePluginId),
                w({
                  outcome: a.CodexPluginInstallOutcome.CODEX_PLUGIN_INSTALL_OUTCOME_SUCCEEDED,
                  result: o.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                }))
            })
            .catch((e) => {
              throw (
                w({
                  errorType: (0, i.VZO)(e),
                  outcome: a.CodexPluginInstallOutcome.CODEX_PLUGIN_INSTALL_OUTCOME_FAILED,
                  result: o.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                }),
                e
              )
            })),
            f.set(C, s))
        }
        return (await s, A)
      } catch (e) {
        return (
          f.delete(C),
          m.v.error("Failed to install conversational onboarding plugin", {
            safe: { pluginName: A },
            sensitive: { error: e },
          }),
          null
        )
      }
    }
    function y(e, t) {
      return `${e}:${t.marketplaceName}:${(0, p.R9)(t).pluginName}`
    }
    n.d(
      t,
      {},
      {
        Vu: async function ({ scope: e, hostId: t, pluginNames: n, plugins: a, refetchLocalPlugins: o }) {
          let i = []
          for (let e of n) {
            let n = a.find((t) => t.plugin.name === e)
            if (null != n) {
              if (n.plugin.installed && n.plugin.enabled) {
                f.delete(y(t, n))
                continue
              }
              i.push({ plugin: n, pluginName: e })
            }
          }
          if (0 === i.length) return []
          let r = Promise.all(
              i.map(({ plugin: n, pluginName: a }) => b({ scope: e, hostId: t, plugin: n, pluginName: a })),
            ).then((e) => ({ pluginNames: e.filter((e) => null != e), source: "install-response" })),
            s = !1
          try {
            let e = (async function ({ isPollingStopped: e, pluginsToInstall: t, refetchLocalPlugins: n }) {
                for (let a = 0; a < 30 && !e(); a += 1) {
                  try {
                    let e = await n()
                    if (
                      t.every(({ plugin: t }) =>
                        e?.some(
                          (e) =>
                            e.plugin.id === t.plugin.id &&
                            e.marketplaceName === t.marketplaceName &&
                            e.marketplacePath === t.marketplacePath &&
                            e.plugin.installed &&
                            e.plugin.enabled,
                        ),
                      )
                    )
                      return t.map(({ pluginName: e }) => e)
                  } catch {}
                  await new Promise((e) => {
                    setTimeout(e, 500)
                  })
                }
                return null
              })({ isPollingStopped: () => s, pluginsToInstall: i, refetchLocalPlugins: o }).then((e) =>
                null == e ? r : { pluginNames: e, source: "persisted-state" },
              ),
              t = await Promise.race([r, e])
            if ("persisted-state" === t.source)
              m.v.info("Conversational onboarding plugin readiness observed before install response", {
                safe: { pluginNames: t.pluginNames },
              })
            else if (t.pluginNames.length > 0)
              try {
                await o()
              } catch (e) {
                throw (
                  m.v.error("Failed to refresh conversational onboarding plugins after install", {
                    safe: { pluginNames: t.pluginNames },
                    sensitive: { error: e },
                  }),
                  e
                )
              }
            return t.pluginNames
          } finally {
            s = !0
          }
        },
        l5: function (e, t) {
          return f.get(y(e, t))
        },
        oK: v,
        q$: async function ({
          scope: e,
          hostId: t,
          installAttemptId: n,
          marketplaceAnalytics: a,
          plugin: o,
          retainCompletedInstallation: i = !1,
        }) {
          if (o.plugin.installed && o.plugin.enabled) return !0
          let r = await b({
            scope: e,
            hostId: t,
            installAttemptId: n,
            marketplaceAnalytics: a,
            plugin: o,
            pluginName: o.plugin.name,
          })
          return ((i && null != r) || v(t, o), null != r)
        },
      },
    )
  },
  rmL9(e, t, n) {
    n.d(t, { uS: () => I, e8: () => x, oA: () => C, ON: () => w, oU: () => O, rC: () => k })
    var a = n("zTeN"),
      o = n("mGK9"),
      i = n("a0aG"),
      r = n("loz7"),
      s = n("B81s"),
      l = n("WFY2"),
      c = n("A5O4"),
      d = n("b5As"),
      u = n("HFSu"),
      p = n("GDNt"),
      g = n("ser0"),
      m = n("DvNy"),
      h = n("os5G"),
      f = n("CMd7"),
      v = n("TfgZ")
    let b = { app: null, phase: "failed" },
      y = new WeakMap(),
      x = (0, a.vP)(m.Dx, N()),
      A = (0, a.vP)(m.Dx, null),
      C = (0, a.un)(m.Dx, ({ get: e }) => {
        let t = e(A)
        if (null != t) return t
        let n = e(m.s7),
          a = e(g.NX, n?.conversationId ?? null)
        return null != a
          ? _(a)
          : "failed" === e(x).phase || e(m.M8)
            ? { status: "failed" }
            : e(m.uM)
              ? { status: "completed" }
              : null
      })
    function w(e, t, n, a, w, I) {
      var O, k, N, T, j, R
      let P, D, L
      if (null == a || I?.aborted)
        return {
          started: Promise.resolve(),
          result: Promise.resolve({ status: I?.aborted ? "interrupted" : "not_completed" }),
          cancel: () => {},
        }
      let z =
        ((O = e),
        (k = a),
        (N = w),
        (T = n),
        (j = t),
        (R = I),
        y.get(O.node)?.attempt.cancel(),
        (0, g.e_)(O, T.hostId),
        (0, m.CL)(O),
        O.set(A, null),
        (D = () => L.attempt.cancel(R?.reason === "cancelled" ? "cancelled" : "interrupted")),
        (L = {
          attempt: (0, h.a)({
            start: () => {
              if (((P = (0, f.Z)(O, L.attempt, (e, t) => (null == t ? e.get(C) : _(t)))), !L.attempt.settled))
                return (async function (e, t, n, a) {
                  let { selection: g, execution: m } = a
                  ;(0, c.t6)(e, t)
                  let h = g.appPluginName,
                    f = a.attempt.signal,
                    y = () => {
                      ;((0, c.rf)(e, t), a.attempt.finish({ status: "not_completed" }), m.onUnavailable?.())
                    }
                  try {
                    var A, C, w, I, O, k
                    let t = g.pluginId
                    if (null == t) {
                      ;(l.v.error("Conversational onboarding task is missing a remote plugin ID", {
                        safe: { pluginName: h },
                      }),
                        y())
                      return
                    }
                    let _ = n.remotePlugins?.find((e) => e.pluginId === t)
                    if (null == _)
                      try {
                        let e = await n.refetchRemotePlugins()
                        ;(f.throwIfAborted(), (_ = e?.find((e) => e.pluginId === t)))
                      } catch (n) {
                        if (f.aborted) return
                        if (M(n)) throw n
                        ;(l.v.error("Failed to refresh conversational onboarding remote plugins", {
                          safe: { pluginId: t },
                          sensitive: { error: n },
                        }),
                          (function (e, t) {
                            S(e, t, b)
                          })(e, a))
                        return
                      }
                    if ((f.throwIfAborted(), null == _)) {
                      ;(l.v.error("Conversational onboarding remote plugin missing after refresh", {
                        safe: { pluginId: t },
                      }),
                        y())
                      return
                    }
                    ;((a.selection = { ...g, appPluginName: _.plugin.plugin.name }),
                      S(e, a, { app: null, phase: "checking-connection" }))
                    let N = await (async function ({ authMethod: e, pluginDetail: t, queryClient: n }) {
                      let a
                      if (!(0, d.Po)(t, e)) return null
                      let o = t.summary.name,
                        i = t.apps.length,
                        r = (function (e) {
                          if (
                            e.apps.length > 0 ||
                            e.appTemplates.length > 0 ||
                            (0 === e.mcpServers.length &&
                              !e.skills.some((e) => e.enabled) &&
                              "remote" !== e.summary.source.type)
                          )
                            return null
                          let t = e.summary.interface
                          return {
                            category: t?.category ?? null,
                            description: t?.shortDescription ?? e.description,
                            id: e.summary.id,
                            installUrl: null,
                            name: t?.displayName ?? e.summary.name,
                          }
                        })(t),
                        s = 1 === i ? t.apps[0] : r
                      if (null == s)
                        return (
                          l.v.error("Conversational onboarding plugin has invalid app metadata", {
                            safe: { appCount: i, pluginName: o },
                          }),
                          null
                        )
                      if (null != r) return { app: s, isConnected: !0 }
                      try {
                        var c
                        a = await n.fetchQuery(
                          ((c = s.id),
                          {
                            queryKey: ["conversational-onboarding", "app-connection", c],
                            queryFn: () =>
                              (async function (e) {
                                return (
                                  null !=
                                  (
                                    await u.CodexRequest.safeGet("/aip/connectors/{connector_id}/link", {
                                      surface: "onboarding",
                                      parameters: { path: { connector_id: e } },
                                    })
                                  ).link
                                )
                              })(c),
                            retry: (e, t) => t instanceof p.fk && 401 === t.status && e < 5,
                            retryDelay: 500,
                            staleTime: 0,
                          }),
                        )
                      } catch (e) {
                        throw (
                          l.v.error("Failed to check conversational onboarding app connection", {
                            safe: { appId: s.id, pluginName: o },
                            sensitive: { error: e },
                          }),
                          e
                        )
                      }
                      return { app: s, isConnected: a }
                    })({ authMethod: await (0, o.s)(e, n.hostId), pluginDetail: _.detail, queryClient: n.queryClient })
                    if ((f.throwIfAborted(), null == N)) return void y()
                    let T = await (async function (e, t, n) {
                      let a = t.attempt.signal
                      return (
                        a.throwIfAborted(),
                        !n.isConnected &&
                          (S(e, t, {
                            app: n.app,
                            phase: "needs-connection",
                            pluginName: t.selection.appPluginName,
                            requestFailed: !1,
                          }),
                          await new Promise((e) => {
                            let n = () => {
                              ;((t.confirmConnection = null), a.removeEventListener("abort", n), e())
                            }
                            ;((t.confirmConnection = n), a.addEventListener("abort", n, { once: !0 }))
                          }),
                          a.throwIfAborted(),
                          !0)
                      )
                    })(e, a, N)
                    ;((A = e),
                      (C = n),
                      (w = a),
                      (I = N.app),
                      (O = _.plugin),
                      (k = T),
                      (a.installation =
                        O.plugin.installed && O.plugin.enabled && !k
                          ? Promise.resolve(!0)
                          : ((w.installationStarted = !0),
                            S(
                              A,
                              w,
                              k
                                ? { app: I, phase: "connecting", pluginName: w.selection.appPluginName }
                                : { app: null, phase: "installing" },
                            ),
                            (0, c.c9)(A, w.selection.selectedTask),
                            new Promise((e) => {
                              let t = w.attempt.signal,
                                n = () => e(!1)
                              t.addEventListener("abort", n, { once: !0 })
                              let a = () => {
                                  let a = C.installPlugin(O, {
                                      hostId: C.hostId,
                                      requiresAppSetup: k,
                                      requestedConnectorId: k ? I.id : void 0,
                                      marketplaceAnalytics: i.F.onboarding,
                                      sourceAttributionId: (0, c.ln)(A),
                                      onCancel: () => {
                                        ;(t.removeEventListener("abort", n),
                                          e(!1),
                                          t.aborted ||
                                            (w.attempt.cancel("cancelled"), w.execution.onInstallCancelled?.()))
                                      },
                                      onError: () => {
                                        ;(t.removeEventListener("abort", n),
                                          e(!1),
                                          t.aborted ||
                                            ((function (e, t) {
                                              S(e, t, b)
                                            })(A, w),
                                            w.attempt.cancel()))
                                      },
                                      onSuccess: () => {
                                        ;(t.removeEventListener("abort", n),
                                          k &&
                                            !t.aborted &&
                                            S(A, w, {
                                              app: I,
                                              phase: "starting",
                                              pluginName: w.selection.appPluginName,
                                            }),
                                          e(!t.aborted))
                                      },
                                    }),
                                    o = A.get(r.Tx)
                                  ;(a &&
                                    "closed" !== o.kind &&
                                    ((w.installRequestId = o.requestId), t.aborted && E(A, w)),
                                    a || (t.removeEventListener("abort", n), e(!1)))
                                },
                                o = k ? void 0 : (0, v.l5)(C.hostId, O)
                              null == o
                                ? a()
                                : o.then(
                                    () => {
                                      ;(t.removeEventListener("abort", n), e(!t.aborted))
                                    },
                                    () => {
                                      t.aborted || a()
                                    },
                                  )
                            }))),
                      await (async function (e, t, n, a, o, i, r, d) {
                        ;(i.throwIfAborted(),
                          "connecting" !== e.get(x).phase &&
                            S(e, o, { app: n, phase: "starting", pluginName: t.appPluginName }))
                        let [u, p] = await Promise.all([
                          o.installation,
                          !d.requiresModel ||
                            (async function (e, t, n, a, o) {
                              try {
                                await n.loadModelConfig()
                              } catch (n) {
                                if ((o.throwIfAborted(), M(n))) throw n
                                return (
                                  l.v.error("Failed to load the onboarding model", {
                                    safe: { task: t.selectedTask },
                                    sensitive: { error: n },
                                  }),
                                  (0, c.dE)(e, t.selectedTask),
                                  (0, c.pL)(e, t.selectedTask),
                                  (function (e, t) {
                                    S(e, t, b)
                                  })(e, a),
                                  !1
                                )
                              }
                              return (o.throwIfAborted(), !0)
                            })(e, t, a, o, i),
                        ])
                        ;(i.throwIfAborted(), u)
                          ? p &&
                            ((o.installationStarted || d.requiresModel) &&
                              (await a.queryClient.invalidateQueries({
                                queryKey: [...s.ey, a.hostId],
                                refetchType: "none",
                              })),
                            S(e, o, { app: n, phase: "executing", pluginName: t.appPluginName }),
                            (0, c.J4)(e, t.selectedTask),
                            await d.start(t, n, i))
                          : r()
                      })(e, a.selection, N.app, n, a, f, y, m))
                  } catch (t) {
                    if (f.aborted) return
                    if (M(t))
                      return void (function (e, t) {
                        S(e, t, b)
                      })(e, a)
                    ;(l.v.error("Failed to prepare conversational onboarding plugin task", {
                      safe: { pluginName: h },
                      sensitive: { error: t },
                    }),
                      (function (e, t) {
                        S(e, t, b)
                      })(e, a))
                  }
                })(O, j, T, L)
            },
            onSettled: (e) => {
              ;(P?.(),
                R?.removeEventListener("abort", D),
                O.set(A, e),
                "completed" !== e.status &&
                  (E(O, L),
                  "not_completed" !== e.status && (0, g.e_)(O, T.hostId),
                  "failed" === e.status && O.set(m.M8, !0)))
            },
          }),
          installRequestId: void 0,
          confirmConnection: null,
          installation: null,
          installationStarted: !1,
          selection: k,
          execution: N,
        }),
        y.set(O.node, L),
        S(O, L, { app: null, phase: "installing" }),
        R?.addEventListener("abort", D, { once: !0 }),
        L)
      return (z.attempt.start(), z.attempt)
    }
    function I(e) {
      y.get(e.node)?.confirmConnection?.()
    }
    function O(e, t = "interrupted") {
      let n = y.get(e.node)
      ;(n?.attempt.cancel(t), y.delete(e.node), e.set(x, N()))
    }
    async function k(e, t, n, a, o) {
      ;(e.set(m.rK, !0), e.set(m.M8, !1), (0, c.$z)(e, t.selectedTask))
      try {
        let i = {
            agentMode: n.agentMode,
            loadModelConfig: n.loadModelConfig,
            hostId: n.hostId,
            permissionProfileId: n.permissionProfileId,
            permissionsRequirements: n.permissionsRequirements,
            projectRoot: n.projectRoot,
            requiresCodexAppsReady: !1,
            serviceTier: n.serviceTier,
            shouldSendPermissionOverrides: n.shouldSendPermissionOverrides,
            ...t,
          },
          r = await (0, g.K)(e, i)
        ;(a.throwIfAborted(), e.set(m.s7, r), o?.(), await (0, g.sm)(e, i), a.throwIfAborted())
      } catch (n) {
        if (a.aborted) return
        if (M(n) || (n instanceof Error && "Conversational onboarding start was cancelled" === n.message))
          return void e.set(m.M8, !0)
        ;(l.v.error("Failed to start conversational onboarding task", {
          safe: { task: t.selectedTask },
          sensitive: { error: n },
        }),
          (0, c.dE)(e, t.selectedTask),
          (0, c.pL)(e, t.selectedTask),
          e.set(m.M8, !0))
      }
    }
    function _(e) {
      return { status: e.outcome, output: e.output, url: "completed" === e.outcome ? e.url : void 0, connected: !0 }
    }
    function S(e, t, n) {
      ;(t.attempt.signal.throwIfAborted(), e.set(x, n))
    }
    function N() {
      return { app: null, phase: "idle" }
    }
    function M(e) {
      return e instanceof DOMException && "AbortError" === e.name
    }
    function E(e, t) {
      e.set(r.Tx, (e) =>
        "closed" !== e.kind && null != t.installRequestId && e.requestId === t.installRequestId ? (0, r.Fi)(e) : e,
      )
    }
  },
  EOWJ(e, t, n) {
    n.d(t, { E: () => k, P: () => O })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zTeN"),
      r = n("oyxz"),
      s = n("Pyfq"),
      l = n("FvYa"),
      c = n("m5Hw"),
      d = n("umSm"),
      u = n("lphL"),
      p = n("Lz8z"),
      g = n("loz7"),
      m = n("Sd8U"),
      h = n("vmZO"),
      f = n("skUx")
    function v(e) {
      let t,
        n = (0, o.c)(2),
        { appName: i } = e
      return (
        n[0] !== i
          ? ((t = (0, a.jsx)(d.N, {
              className: "text-lg leading-6",
              children: (0, a.jsx)(r.A, {
                id: "electron.onboarding.conversationalOnboarding.installingApp",
                defaultMessage: "Installing {appName} Plugin",
                description: "Animated status shown while conversational onboarding installs an app",
                values: { appName: i },
              }),
            })),
            (n[0] = i),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    var b = n("cT32"),
      y = n("ser0"),
      x = n("gchn"),
      A = n("DvNy"),
      C = n("rmL9"),
      w = n("WfU0")
    let I = (0, i.vP)(A.Dx, !1)
    function O(e, t, n) {
      let r = e.connectorResolved ? e.pluginName : (0, p.H3)(e.pluginName, n),
        s = {
          completionLinkLabel: N(
            (r === e.pluginName ? e.messages.completionLinkLabel : e.messages.microsoftCompletionLinkLabel) ??
              e.messages.completionLinkLabel,
            t,
          ),
          completionMessage: N(e.messages.completionMessage, t),
          label: N(e.messages.label, t),
          pluginId: (e.connectorResolved || "microsoft" !== n ? e.pluginId : e.microsoftPluginId) ?? e.pluginId ?? null,
          pluginName: r,
          prompt: (r === e.pluginName ? e.prompt : e.microsoftPrompt) ?? e.prompt,
        }
      function l(e, t, n) {
        var a
        return (
          (a = { appPluginName: s.pluginName, pluginId: s.pluginId, prompt: s.prompt, selectedTask: t }),
          {
            ...(0, C.ON)(e, t, n, a, {
              onUnavailable: () => n.onPluginUnavailable(t),
              onInstallCancelled: () => n.onPluginInstallCancelled(t),
              requiresModel: !(0, w.o)(t),
              start: async (a, o, i) => {
                ;((0, x.$J)(e, "allowed"),
                  (0, w.o)(t) ? await (0, w.p)(e, a, o, n, i) : await (0, C.rC)(e, a, n, i, () => (0, x.a7)(e)))
              },
            }),
            start: () => {},
          }
        )
      }
      return {
        ...s,
        getDeclinedRetryPrompt: (e) =>
          e.formatMessage({
            id: "electron.onboarding.conversationalOnboarding.appTaskDeclinedRetry",
            defaultMessage: "Got it. I won’t use that app right now. Want to try another quick example?",
            description:
              "Message shown after declining app access or an approved app action during conversational onboarding",
          }),
        option: { Icon: M, label: s.label },
        prepare: l,
        reset: E,
        retry: (e, t, n) => ((0, y.e_)(e, n.hostId), e.set(A.s7, null), e.set(A.M8, !1), E(e), l(e, t, n)),
        View: function (e) {
          let t,
            n,
            r = (0, o.c)(8),
            l = (0, i.gh)(A.Dx),
            c = (0, i.Ul)(x.hu),
            d = c?.permissionStatus === "not-requested" ? "pending" : (c?.permissionStatus ?? "pending")
          return (
            r[0] !== l ? ((t = () => l.set(A.uM, !0)), (r[0] = l), (r[1] = t)) : (t = r[1]),
            r[2] !== e.context.remotePlugins ||
            r[3] !== e.onChooseAnotherTask ||
            r[4] !== e.onRetryTask ||
            r[5] !== d ||
            r[6] !== t
              ? ((n = (0, a.jsx)(k, {
                  remotePlugins: e.context.remotePlugins,
                  permissionStatus: d,
                  definition: s,
                  onCompletionComplete: t,
                  onChooseAnotherTask: e.onChooseAnotherTask,
                  onRetryTask: e.onRetryTask,
                })),
                (r[2] = e.context.remotePlugins),
                (r[3] = e.onChooseAnotherTask),
                (r[4] = e.onRetryTask),
                (r[5] = d),
                (r[6] = t),
                (r[7] = n))
              : (n = r[7]),
            n
          )
        },
      }
    }
    function k(e) {
      let t,
        n,
        s,
        l = (0, o.c)(50),
        {
          remotePlugins: c,
          permissionStatus: u,
          definition: p,
          onCompletionComplete: m,
          onChooseAnotherTask: h,
          onRetryTask: b,
        } = e,
        x = (0, i.gh)(A.Dx),
        w = (0, i.Ul)(A.s7),
        O = (0, i.Ul)(A.M8),
        k = (0, i.Ul)(C.e8),
        N = (0, i.Ul)(I),
        M = (0, i._U)(y.gh, w?.conversationId ?? null)
      l[0] !== p || l[1] !== c
        ? ((t = c?.find((e) => e.pluginId === p.pluginId)?.plugin ?? null),
          (n = t?.displayName?.trim() || p.pluginName),
          (l[0] = p),
          (l[1] = c),
          (l[2] = t),
          (l[3] = n))
        : ((t = l[2]), (n = l[3]))
      let E = n
      if ("failed" === k.phase || O || M) {
        let e
        ;(l[4] !== b ? ((e = (0, a.jsx)(f.W_, { onRetry: b })), (l[4] = b), (l[5] = e)) : (e = l[5]), (s = e))
      } else
        switch (k.phase) {
          case "idle":
            s = null
            break
          case "installing": {
            let e
            ;(l[6] !== E
              ? ((e = null == E ? null : (0, a.jsx)(v, { appName: E })), (l[6] = E), (l[7] = e))
              : (e = l[7]),
              (s = e))
            break
          }
          case "checking-connection": {
            let e
            ;(l[8] !== E
              ? ((e = (0, a.jsx)(d.N, {
                  className: "text-lg leading-6",
                  children: (0, a.jsx)(r.A, {
                    id: "electron.onboarding.conversationalOnboarding.checkingAppConnection",
                    defaultMessage: "Checking {appName} connection",
                    description: "Animated status shown while conversational onboarding checks an app connection",
                    values: { appName: E },
                  }),
                })),
                (l[8] = E),
                (l[9] = e))
              : (e = l[9]),
              (s = e))
            break
          }
          case "starting": {
            let e
            ;(l[10] !== E
              ? ((e = (0, a.jsx)(d.N, {
                  className: "text-lg leading-6",
                  children: (0, a.jsx)(r.A, {
                    id: "electron.onboarding.conversationalOnboarding.finishingAppConnection",
                    defaultMessage: "Finishing connection to {appName}…",
                    description:
                      "Animated status shown after app authorization while conversational onboarding finishes establishing the app connection; appName is the app's display name",
                    values: { appName: E },
                  }),
                })),
                (l[10] = E),
                (l[11] = e))
              : (e = l[11]),
              (s = e))
            break
          }
          case "executing": {
            let e
            ;(l[12] !== t ||
            l[13] !== w ||
            l[14] !== p ||
            l[15] !== h ||
            l[16] !== m ||
            l[17] !== b ||
            l[18] !== k.app ||
            l[19] !== k.pluginName
              ? ((e =
                  null == w
                    ? (0, a.jsx)(d.N, {
                        className: "text-lg leading-6",
                        children: (0, a.jsx)(r.A, {
                          id: "electron.onboarding.conversationalOnboarding.executionThinking",
                          defaultMessage: "Thinking",
                          description: "Animated thinking label during conversational onboarding task execution",
                        }),
                      })
                    : (0, a.jsx)(S, {
                        app: k.app,
                        appPlugin: t,
                        completionLinkLabel: p.completionLinkLabel,
                        completionMessage: p.completionMessage,
                        conversation: w,
                        pluginName: k.pluginName,
                        onCompletionComplete: m,
                        onChooseAnotherTask: h,
                        onRetryTask: b,
                      })),
                (l[12] = t),
                (l[13] = w),
                (l[14] = p),
                (l[15] = h),
                (l[16] = m),
                (l[17] = b),
                (l[18] = k.app),
                (l[19] = k.pluginName),
                (l[20] = e))
              : (e = l[20]),
              (s = e))
            break
          }
          case "needs-connection": {
            let e, t, n, o, i
            ;(l[21] !== x ? ((e = () => (0, C.uS)(x)), (l[21] = x), (l[22] = e)) : (e = l[22]),
              l[23] !== h || l[24] !== x
                ? ((t = () => {
                    ;((0, C.oU)(x, "cancelled"), h?.())
                  }),
                  (l[23] = h),
                  (l[24] = x),
                  (l[25] = t))
                : (t = l[25]),
              l[26] !== k.requestFailed || l[27] !== e || l[28] !== t
                ? ((n = { phase: "needs-connection", requestFailed: k.requestFailed, onConnect: e, onDismiss: t }),
                  (l[26] = k.requestFailed),
                  (l[27] = e),
                  (l[28] = t),
                  (l[29] = n))
                : (n = l[29]),
              l[30] !== x ? ((o = () => x.set(I, !0)), (l[30] = x), (l[31] = o)) : (o = l[31]),
              l[32] !== k.app || l[33] !== k.pluginName || l[34] !== u || l[35] !== N || l[36] !== n || l[37] !== o
                ? ((i = (0, a.jsx)(f.BZ, {
                    app: k.app,
                    connection: n,
                    permissionStatus: u,
                    pluginName: k.pluginName,
                    showRequest: N,
                    onIntroComplete: o,
                  })),
                  (l[32] = k.app),
                  (l[33] = k.pluginName),
                  (l[34] = u),
                  (l[35] = N),
                  (l[36] = n),
                  (l[37] = o),
                  (l[38] = i))
                : (i = l[38]),
              (s = i))
            break
          }
          case "connecting": {
            let e, t, n
            ;(l[39] !== x
              ? ((e = { phase: "connecting", onCancel: () => x.set(g.Tx, _) }), (l[39] = x), (l[40] = e))
              : (e = l[40]),
              l[41] !== x ? ((t = () => x.set(I, !0)), (l[41] = x), (l[42] = t)) : (t = l[42]),
              l[43] !== k.app || l[44] !== k.pluginName || l[45] !== u || l[46] !== N || l[47] !== e || l[48] !== t
                ? ((n = (0, a.jsx)(f.BZ, {
                    app: k.app,
                    connection: e,
                    permissionStatus: u,
                    pluginName: k.pluginName,
                    showRequest: N,
                    onIntroComplete: t,
                  })),
                  (l[43] = k.app),
                  (l[44] = k.pluginName),
                  (l[45] = u),
                  (l[46] = N),
                  (l[47] = e),
                  (l[48] = t),
                  (l[49] = n))
                : (n = l[49]),
              (s = n))
          }
        }
      return s
    }
    function _(e) {
      return (0, g.Fi)(e)
    }
    function S(e) {
      var t, n, r
      let l,
        c,
        d,
        u,
        p,
        g,
        f,
        v = (0, o.c)(29),
        {
          app: y,
          appPlugin: x,
          completionLinkLabel: A,
          completionMessage: C,
          conversation: w,
          pluginName: I,
          onCompletionComplete: O,
          onChooseAnotherTask: k,
          onRetryTask: _,
        } = e
      v[0] !== y || v[1] !== x || v[2] !== I
        ? ((t = y),
          (n = I),
          (r = x),
          (l = {
            appMetadata: null,
            branding: null,
            description: t.description,
            distributionChannel: null,
            id: t.id,
            installUrl: t.installUrl,
            isAccessible: !1,
            isEnabled: !0,
            labels: null,
            logoUrl: r?.logoPath ?? null,
            logoUrlDark: r?.logoDarkPath ?? null,
            iconAssets: null,
            iconDarkAssets: null,
            name: t.name,
            pluginDisplayNames: [n],
          }),
          (v[0] = y),
          (v[1] = x),
          (v[2] = I),
          (v[3] = l))
        : (l = v[3])
      let S = l,
        N = `/welcome/conversational-onboarding/${w.conversationId}`
      return (
        v[4] !== w.conversationId || v[5] !== w.hostId || v[6] !== N
          ? ((c = {
              conversationId: w.conversationId,
              hostId: w.hostId,
              pathname: N,
              projectContext: null,
              routeKind: "local-thread",
              routeTemplate: "/welcome/conversational-onboarding/:conversationId",
              search: "",
            }),
            (v[4] = w.conversationId),
            (v[5] = w.hostId),
            (v[6] = N),
            (v[7] = c))
          : (c = v[7]),
        v[8] !== w.conversationId || v[9] !== w.hostId
          ? ((d = (0, a.jsx)(s.$, { conversationId: w.conversationId, hostId: w.hostId })),
            (v[8] = w.conversationId),
            (v[9] = w.hostId),
            (v[10] = d))
          : (d = v[10]),
        v[11] !== w.conversationId
          ? ((u = (0, m.p)(w.conversationId, "main", w.conversationId)), (v[11] = w.conversationId), (v[12] = u))
          : (u = v[12]),
        v[13] !== S ||
        v[14] !== A ||
        v[15] !== C ||
        v[16] !== w ||
        v[17] !== k ||
        v[18] !== O ||
        v[19] !== _ ||
        v[20] !== I
          ? ((p = (0, a.jsx)(b.C, {
              appInfo: S,
              appPluginName: I,
              completionLinkLabel: A,
              completionMessage: C,
              conversation: w,
              onCompletionComplete: O,
              onChooseAnotherTask: k,
              onRetryTask: _,
            })),
            (v[13] = S),
            (v[14] = A),
            (v[15] = C),
            (v[16] = w),
            (v[17] = k),
            (v[18] = O),
            (v[19] = _),
            (v[20] = I),
            (v[21] = p))
          : (p = v[21]),
        v[22] !== u || v[23] !== p
          ? ((g = (0, a.jsx)(i.Ui, { scope: m.PR, value: u, children: p })), (v[22] = u), (v[23] = p), (v[24] = g))
          : (g = v[24]),
        v[25] !== c || v[26] !== d || v[27] !== g
          ? ((f = (0, a.jsxs)(h.R, { route: c, children: [d, g] })), (v[25] = c), (v[26] = d), (v[27] = g), (v[28] = f))
          : (f = v[28]),
        f
      )
    }
    function N(e, t) {
      return { id: e.id, defaultMessage: e.translations?.[u.X[t] ?? t] ?? e.defaultMessage, description: e.description }
    }
    function M(e) {
      let t,
        n,
        i = (0, o.c)(8),
        { appPlugin: r, className: s } = e,
        d = r?.plugin.name,
        u = r?.logoDarkPath,
        p = r?.logoPath
      return (
        i[0] !== s ? ((t = (0, a.jsx)(c.A, { className: s })), (i[0] = s), (i[1] = t)) : (t = i[1]),
        i[2] !== s || i[3] !== d || i[4] !== u || i[5] !== p || i[6] !== t
          ? ((n = (0, a.jsx)(l.R, { alt: "", className: s, knownAppId: d, logoDarkUrl: u, logoUrl: p, fallback: t })),
            (i[2] = s),
            (i[3] = d),
            (i[4] = u),
            (i[5] = p),
            (i[6] = t),
            (i[7] = n))
          : (n = i[7]),
        n
      )
    }
    function E(e) {
      ;((0, C.oU)(e), e.set(I, !1))
    }
  },
  Zg6g(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("ws5U"),
      r = n("IjbW"),
      s = n("LIss"),
      l = n("zd8w"),
      c = n("Wf1j"),
      d = n("oyxz"),
      u = n("FvYa"),
      p = n("ygO2"),
      g = n("Ot7V"),
      m = n("HOLv"),
      h = n("S1hE")
    let f = "__CONVERSATIONAL_ONBOARDING_LINK__"
    function v(e) {
      let t,
        n,
        i,
        r,
        s = (0, o.c)(12),
        { animate: l, output: u, onChooseAnotherTask: g, onRetryTask: m } = e,
        f = void 0 === l || l,
        v = (0, c.A)()
      return (
        s[0] !== v || s[1] !== u
          ? ((t =
              u ??
              v.formatMessage({
                id: "electron.onboarding.conversationalOnboarding.incompleteTask",
                defaultMessage: "ChatGPT couldn’t complete that task",
                description:
                  "Fallback explanation when an onboarding task was not completed and did not provide a reason",
              })),
            (s[0] = v),
            (s[1] = u),
            (s[2] = t))
          : (t = s[2]),
        s[3] !== f || s[4] !== t
          ? ((n = (0, a.jsx)(h.H, { animate: f, children: t })), (s[3] = f), (s[4] = t), (s[5] = n))
          : (n = s[5]),
        s[6] !== g || s[7] !== m
          ? ((i =
              null != m || null != g
                ? (0, a.jsxs)("div", {
                    className: "flex gap-3",
                    children: [
                      null == m
                        ? null
                        : (0, a.jsx)(p.$, {
                            color: "secondary",
                            size: "medium",
                            onClick: m,
                            children: (0, a.jsx)(d.A, {
                              id: "electron.onboarding.conversationalOnboarding.tryAgain",
                              defaultMessage: "Try again",
                              description: "Button that retries a conversational onboarding task",
                            }),
                          }),
                      null == g
                        ? null
                        : (0, a.jsx)(p.$, {
                            color: "primary",
                            size: "medium",
                            onClick: g,
                            children: (0, a.jsx)(d.A, {
                              id: "electron.onboarding.conversationalOnboarding.chooseAnotherTask",
                              defaultMessage: "Choose another task",
                              description:
                                "Button that returns to conversational onboarding task selection after a task could not be completed",
                            }),
                          }),
                    ],
                  })
                : null),
            (s[6] = g),
            (s[7] = m),
            (s[8] = i))
          : (i = s[8]),
        s[9] !== n || s[10] !== i
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col items-start gap-4", children: [n, i] })),
            (s[9] = n),
            (s[10] = i),
            (s[11] = r))
          : (r = s[11]),
        r
      )
    }
    function b(e) {
      let t,
        n,
        d,
        v,
        b,
        y,
        x,
        A,
        C,
        w,
        I,
        O,
        k,
        _,
        S,
        N = (0, o.c)(47),
        {
          animate: M,
          appInfo: E,
          appPluginName: T,
          output: j,
          url: R,
          linkLabel: P,
          message: D,
          onCompletionComplete: L,
        } = e,
        z = (0, c.A)()
      if (
        (N[0] !== j ? ((t = j.trim().length > 0 ? "yes" : "no"), (N[0] = j), (N[1] = t)) : (t = N[1]),
        N[2] !== z || N[3] !== D || N[4] !== j || N[5] !== t)
      ) {
        let e = { hasText: t, link: f, text: j },
          a =
            "string" == typeof D
              ? z.formatters.getMessageFormat(D, z.locale, void 0, { ignoreTag: !0 }).format(e)
              : z.formatMessage(D, e),
          [o, i] = (Array.isArray(a) ? a.join("") : a).split(f),
          r = void 0 === o ? "" : o,
          s = void 0 === i ? "" : i,
          l = r.lastIndexOf("\n"),
          c = s.indexOf("\n"),
          u = r
        ;((d = ""), (b = ""))
        let p = s
        ;((-1 !== l || -1 !== c) &&
          ((u = -1 === l ? "" : r.slice(0, l)),
          (d = r.slice(l + 1)),
          (b = -1 === c ? s : s.slice(0, c)),
          (p = -1 === c ? "" : s.slice(c + 1))),
          (n = u.trim()),
          (v = d.trim()),
          (y = b.trim()),
          (x = p.trim()),
          (N[2] = z),
          (N[3] = D),
          (N[4] = j),
          (N[5] = t),
          (N[6] = n),
          (N[7] = d),
          (N[8] = v),
          (N[9] = b),
          (N[10] = y),
          (N[11] = x))
      } else ((n = N[6]), (d = N[7]), (v = N[8]), (b = N[9]), (y = N[10]), (x = N[11]))
      let U = x,
        F = (0, r.I)(),
        B = !(void 0 === M || M) || !0 === F,
        q = (0, l.useRef)(!1)
      N[12] !== n.length || N[13] !== B
        ? ((A = () => (B ? "complete" : n.length > 0 ? "before-link" : "link")),
          (N[12] = n.length),
          (N[13] = B),
          (N[14] = A))
        : (A = N[14])
      let [G, V] = (0, l.useState)(A),
        W = B ? "complete" : G
      N[15] !== L
        ? ((C = function () {
            q.current || ((q.current = !0), V("complete"), L?.())
          }),
          (N[15] = L),
          (N[16] = C))
        : (C = N[16])
      let K = C
      N[17] !== E || N[18] !== T || N[19] !== P || N[20] !== R
        ? ((w =
            null == R
              ? P
              : (0, a.jsxs)(p.$, {
                  className: "gap-1.5 font-medium hover:underline",
                  color: "ghostMuted",
                  size: "inline",
                  onClick: (e) => {
                    ;(0, g.PQ)({ event: e, href: R, initiator: "mcp_app_resource", openTarget: "external-browser" })
                  },
                  children: [
                    (0, a.jsx)(u.R, {
                      alt: "",
                      appInfo: E,
                      className: "object-contain",
                      size: 20,
                      fallback: (0, a.jsx)("span", {
                        className: "inline-flex items-center justify-center",
                        children: (0, a.jsx)(m.I, { "aria-hidden": !1, asset: i.m }),
                      }),
                      knownAppId: T,
                    }),
                    (0, a.jsx)("span", { className: "min-w-0 whitespace-normal", children: P }),
                  ],
                })),
          (N[17] = E),
          (N[18] = T),
          (N[19] = P),
          (N[20] = R),
          (N[21] = w))
        : (w = N[21])
      let H = w
      return (
        N[22] !== K || N[23] !== B
          ? ((I = B
              ? (e) => {
                  null != e && K()
                }
              : void 0),
            (N[22] = K),
            (N[23] = B),
            (N[24] = I))
          : (I = N[24]),
        N[25] !== n || N[26] !== W
          ? ((O =
              n.length > 0
                ? (0, a.jsx)(h.H, { animate: "before-link" === W, onComplete: () => V("link"), children: n })
                : null),
            (N[25] = n),
            (N[26] = W),
            (N[27] = O))
          : (O = N[27]),
        N[28] !== U.length ||
        N[29] !== K ||
        N[30] !== H ||
        N[31] !== d ||
        N[32] !== v ||
        N[33] !== b ||
        N[34] !== y ||
        N[35] !== W ||
        N[36] !== R
          ? ((k =
              "before-link" !== W
                ? (0, a.jsx)(s.P.p, {
                    animate: { opacity: 1 },
                    className: "flex items-center gap-1.5",
                    initial: "complete" !== W && { opacity: 0 },
                    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                    onAnimationComplete:
                      "link" === W
                        ? () => {
                            U.length > 0 ? V("after-link") : K()
                          }
                        : void 0,
                    children:
                      null == R
                        ? (0, a.jsxs)("span", { children: [d, H, b] })
                        : (0, a.jsxs)(a.Fragment, { children: ["" === v ? null : v, H, "" === y ? null : y] }),
                  })
                : null),
            (N[28] = U.length),
            (N[29] = K),
            (N[30] = H),
            (N[31] = d),
            (N[32] = v),
            (N[33] = b),
            (N[34] = y),
            (N[35] = W),
            (N[36] = R),
            (N[37] = k))
          : (k = N[37]),
        N[38] !== U || N[39] !== K || N[40] !== W
          ? ((_ =
              U.length > 0 && ("after-link" === W || "complete" === W)
                ? (0, a.jsx)(h.H, { animate: "after-link" === W, onComplete: K, children: U })
                : null),
            (N[38] = U),
            (N[39] = K),
            (N[40] = W),
            (N[41] = _))
          : (_ = N[41]),
        N[42] !== _ || N[43] !== I || N[44] !== O || N[45] !== k
          ? ((S = (0, a.jsxs)("div", { className: "flex flex-col gap-4", ref: I, children: [O, k, _] })),
            (N[42] = _),
            (N[43] = I),
            (N[44] = O),
            (N[45] = k),
            (N[46] = S))
          : (S = N[46]),
        S
      )
    }
    n.d(
      t,
      {},
      {
        Ag: b,
        TD: function (e) {
          let t,
            n,
            i = (0, o.c)(17),
            {
              appInfo: r,
              appPluginName: s,
              completion: l,
              linkLabel: d,
              message: u,
              onCompletionComplete: p,
              onChooseAnotherTask: g,
              onRetryTask: m,
            } = e,
            h = (0, c.A)()
          if ("not_completed" === l.outcome) {
            let e
            return (
              i[0] !== l.output || i[1] !== g || i[2] !== m
                ? ((e = (0, a.jsx)(v, { output: l.output, onChooseAnotherTask: g, onRetryTask: m })),
                  (i[0] = l.output),
                  (i[1] = g),
                  (i[2] = m),
                  (i[3] = e))
                : (e = i[3]),
              e
            )
          }
          let f = l.output,
            y = l.url
          return (
            i[4] !== r.name || i[5] !== s || i[6] !== h || i[7] !== d
              ? ((t = h.formatMessage(d, { appName: r.name, pluginName: s })),
                (i[4] = r.name),
                (i[5] = s),
                (i[6] = h),
                (i[7] = d),
                (i[8] = t))
              : (t = i[8]),
            i[9] !== r ||
            i[10] !== s ||
            i[11] !== l.output ||
            i[12] !== l.url ||
            i[13] !== u ||
            i[14] !== p ||
            i[15] !== t
              ? ((n = (0, a.jsx)(b, {
                  appInfo: r,
                  appPluginName: s,
                  output: f,
                  url: y,
                  linkLabel: t,
                  message: u,
                  onCompletionComplete: p,
                })),
                (i[9] = r),
                (i[10] = s),
                (i[11] = l.output),
                (i[12] = l.url),
                (i[13] = u),
                (i[14] = p),
                (i[15] = t),
                (i[16] = n))
              : (n = i[16]),
            n
          )
        },
        ZK: v,
      },
    )
  },
  cOfv(e, t, n) {
    var a = n("QosV"),
      o = n("zTeN"),
      i = n("zd8w"),
      r = n("gchn"),
      s = n("WFVe"),
      l = n("DvNy")
    function c(e, t) {
      let { permissionStatus: n } = (0, r.h8)(e)
      return {
        isActive: () => (0, r.BK)(e, t),
        isSelected: () => (0, r.h8)(e).selectedTask === t,
        permissionStatus: "not-requested" === n ? "pending" : n,
        onAccessAllowed: () => (0, r.$J)(e, "allowed"),
        onExecutionStarted: () => (0, r.a7)(e),
      }
    }
    n.d(
      t,
      {},
      {
        V: c,
        w: function (e, t) {
          let n,
            r,
            d = (0, a.c)(5),
            u = (0, o.gh)(l.Dx)
          ;(d[0] !== t || d[1] !== u || d[2] !== e
            ? ((n = () => {
                null == (0, s.xx)(u) && t(u, c(u, e))
              }),
              (r = [u, e, t]),
              (d[0] = t),
              (d[1] = u),
              (d[2] = e),
              (d[3] = n),
              (d[4] = r))
            : ((n = d[3]), (r = d[4])),
            (0, i.useLayoutEffect)(n, r))
        },
      },
    )
  },
  CMJl(e, t, n) {
    var a = n("D7Ms"),
      o = n("suf3"),
      i = n("zTeN"),
      r = n("ASxG"),
      s = n("Dgwo"),
      l = n("mnR8"),
      c = n("C4Sc"),
      d = n("B81s"),
      u = n("WFY2"),
      p = n("A5O4"),
      g = n("ser0"),
      m = n("gchn"),
      h = n("DvNy")
    let f = "structure.open_from_chat",
      v = (0, i.vP)(h.Dx, null)
    n.d(
      t,
      {},
      {
        e: v,
        r: async function (e, t, n, i, b) {
          ;(e.set(h.rK, !0), e.set(h.M8, !1), (0, m.a7)(e), (0, p.$z)(e, t.selectedTask))
          try {
            let u = (0, g.K)(e, {
                agentMode: i.agentMode,
                loadModelConfig: i.loadModelConfig,
                hostId: i.hostId,
                permissionProfileId: i.permissionProfileId,
                permissionsRequirements: i.permissionsRequirements,
                projectRoot: i.projectRoot,
                requiresCodexAppsReady: !1,
                serviceTier: i.serviceTier,
                shouldSendPermissionOverrides: i.shouldSendPermissionOverrides,
                ...t,
              }),
              [m, y] = await Promise.all([
                u,
                (async function (e, { app: t, conversation: n, context: i, signal: u }) {
                  let p = (0, s.V)(e, i.hostId),
                    g = [...d.ey, i.hostId, "toolsAndAuthOnly"],
                    m = [...g.slice(0, -1), "full"],
                    h = (e) =>
                      e?.data.find(
                        (e) =>
                          "structure-viewer" === e.name &&
                          e.pluginId === t.id &&
                          (0, l.hU)(e.tools).some((e) => e.name === f),
                      ),
                    v =
                      i.localPlugins?.some(({ plugin: e }) => e.id === t.id && e.installed && e.enabled) === !0 ||
                      i.remotePlugins?.some(
                        ({ plugin: e }) => e.plugin.id === t.id && e.plugin.installed && e.plugin.enabled,
                      ) === !0
                        ? [m, g]
                            .map((e) => {
                              let t = i.queryClient.getQueryState(e)
                              return t?.isInvalidated === !0 ? void 0 : t?.data
                            })
                            .find(h)
                        : void 0
                  if (null == v) {
                    let e,
                      t,
                      n = async (e = null) => {
                        let t = await p.listMcpServers(
                          { cursor: e, detail: "toolsAndAuthOnly", limit: 100 },
                          { priority: "interactive" },
                        )
                        return (
                          u.throwIfAborted(),
                          null == t.nextCursor
                            ? t
                            : { ...t, data: [...t.data, ...(await n(t.nextCursor)).data], nextCursor: null }
                        )
                      },
                      r = i.queryClient.getQueryCache().subscribe((n) => {
                        if ((0, a.MK)({ queryKey: m, exact: !0 }, n.query)) {
                          if (
                            "removed" === n.type ||
                            ("updated" === n.type &&
                              ("invalidate" === n.action.type ||
                                ("success" === n.action.type && !0 === n.action.manual)))
                          ) {
                            e = void 0
                            return
                          }
                          "updated" === n.type &&
                            "success" === n.action.type &&
                            ((e = i.queryClient.getQueryData(m)), t?.())
                        }
                      })
                    u.addEventListener("abort", r, { once: !0 })
                    try {
                      if ((u.throwIfAborted(), (v = await n()), null == h(v))) {
                        i.queryClient.setQueryData(g, v)
                        let a = new o.$(i.queryClient, { queryFn: () => n(), queryKey: g, retry: !1, staleTime: 1 / 0 })
                        v = await new Promise((n, o) => {
                          let r = AbortSignal.any([u, AbortSignal.timeout(1e4)]),
                            s = () =>
                              o(
                                new DOMException(
                                  "Protein structure viewer startup was cancelled or timed out",
                                  u.aborted ? "AbortError" : "TimeoutError",
                                ),
                              ),
                            l = () => {
                              let t,
                                a =
                                  ((t = i.queryClient.getQueryState(m)),
                                  t?.isInvalidated === !1 && t.data === e && null != h(t.data) ? t.data : void 0)
                              return null != a && (r.removeEventListener("abort", s), n(a), !0)
                            }
                          ;(r.addEventListener("abort", s, { once: !0 }), r.aborted)
                            ? s()
                            : ((t = l),
                              a.subscribe(({ data: e, error: t }) => {
                                l() ||
                                  (null != t
                                    ? (r.removeEventListener("abort", s), o(t))
                                    : null != e &&
                                      i.queryClient.getQueryState(g)?.isInvalidated !== !0 &&
                                      null != h(e) &&
                                      (r.removeEventListener("abort", s), n(e)))
                              }),
                              l() || a.refetch())
                        }).finally(() => a.destroy())
                      }
                    } finally {
                      ;(u.removeEventListener("abort", r), r())
                    }
                    i.queryClient.setQueryData(g, v)
                  }
                  ;(u.throwIfAborted(),
                    v !== i.queryClient.getQueryData(m) && i.queryClient.setQueryData(m, v, { updatedAt: 0 }))
                  let b = h(v),
                    y = null != b ? (0, l.hU)(b.tools).find((e) => e.name === f) : void 0,
                    x = r.object({ visibility: r.array(r.enum(["app", "model"])).optional() }).safeParse(y?._meta?.ui)
                  if (
                    null == b ||
                    y?.annotations?.readOnlyHint !== !0 ||
                    !0 === y.annotations.destructiveHint ||
                    !0 === y.annotations.openWorldHint ||
                    !x.success ||
                    x.data.visibility?.includes("app") !== !0
                  )
                    throw Error("Protein structure viewer is unavailable or unsafe")
                  let { conversationId: A } = await n
                  u.throwIfAborted()
                  let C = { exampleId: "gfp-1ema", openIntentId: crypto.randomUUID(), presentation: "inline" },
                    w = performance.now(),
                    I = await p.callMcpTool(
                      { arguments: C, server: b.name, threadId: A, tool: y.name },
                      { priority: "interactive" },
                    )
                  if ((u.throwIfAborted(), !0 === I.isError)) throw Error("Protein structure viewer returned an error")
                  return {
                    callId: crypto.randomUUID(),
                    completed: !0,
                    durationMs: performance.now() - w,
                    functionName: y.name,
                    invocation: { arguments: C, server: b.name, tool: y.name },
                    mcpAppResourceUri: void 0,
                    pluginId: b.pluginId,
                    result: (0, c.gv)(
                      { _meta: I._meta ?? null, content: I.content, structuredContent: I.structuredContent ?? null },
                      null,
                      void 0,
                    ),
                    source: null,
                    threadId: A,
                    type: "mcp-tool-call",
                  }
                })(e, { app: n, context: i, conversation: u, signal: b }),
              ])
            ;(b.throwIfAborted(),
              e.set(h.s7, m),
              e.set(v, { app: n, item: y }),
              e.set(h.uM, !0),
              (0, p.d_)(e, t.selectedTask))
          } catch (n) {
            if (b.aborted || (n instanceof DOMException && "AbortError" === n.name)) return
            ;(u.v.error("Failed to start protein structure onboarding task", {
              safe: { task: t.selectedTask },
              sensitive: { error: n },
            }),
              (0, p.dE)(e, t.selectedTask),
              (0, p.pL)(e, t.selectedTask),
              e.set(h.M8, !0))
          }
        },
      },
    )
  },
  CMd7(e, t, n) {
    var a = n("WFY2"),
      o = n("ser0"),
      i = n("DvNy")
    n.d(
      t,
      {},
      {
        Z: function (e, t, n) {
          let r = !1,
            s = e.watch((s) => {
              let l = s.get(i.s7),
                c = s.get(o.NX, l?.conversationId ?? null),
                d = n(s, c)
              null != d
                ? t.finish(d)
                : null != l &&
                  s.get(o.gh, l.conversationId) &&
                  !r &&
                  ((r = !0),
                  (0, o.OK)(e, l.conversationId, t.signal)
                    .then((a) => {
                      if (t.settled) return
                      let i = n(e, a)
                      null != i ? t.finish(i) : e.get(o.gh, l.conversationId) && t.finish({ status: "failed" })
                    })
                    .catch((e) => {
                      t.settled ||
                        t.signal.aborted ||
                        (a.v.error("Failed to confirm onboarding task completion", {
                          safe: {},
                          sensitive: { error: e },
                        }),
                        t.finish({ status: "failed" }))
                    })
                    .finally(() => {
                      r = !1
                    }))
            })
          return (t.settled && s(), s)
        },
      },
    )
  },
  Reo0(e, t, n) {
    var a = n("QosV"),
      o = n("zTeN"),
      i = n("DBCl")
    n("OiCI")
    var r = n("rO8L"),
      s = n("b5As"),
      l = n("EEop"),
      c = n("ueue"),
      d = n("OWtl")
    n("kfGJ")
    var u = n("WFY2"),
      p = n("rvFo"),
      g = n("GDNt")
    async function m(e, { authMethod: t, hostId: n, pluginId: a }) {
      let o = await e.queryClient.fetchQuery({
        ...e.query.getOptions(l.Pc, { hostId: n, marketplacePath: null, pluginName: a, remoteMarketplaceName: i.xiH }),
        retry: (e, t) =>
          e < 5 &&
          (t instanceof g.fk
            ? 401 === t.status
            : /\b(?:HTTP|status) 401\b/i.test(t.message) ||
              t.message.endsWith("chatgpt authentication required for remote plugin catalog")),
        retryDelay: 500,
      })
      if (o.summary.remotePluginId !== a && o.summary.name !== a)
        throw Error("Remote plugin detail did not match the requested plugin")
      if ("DISABLED_BY_ADMIN" === o.summary.availability || null != o.summary.disabledReason) return null
      if (o.apps.length > 1) throw Error("Remote plugin detail has invalid app metadata")
      return (0, s.Po)(o, t) ? { detail: o, plugin: (0, c.qA)(o), pluginId: a } : null
    }
    let h = (0, o.vU)(d.u, ({ authMethod: e, hostId: t, plan: n, pluginIds: a }, { get: o, scope: i }) => ({
      queryKey: [...c.qw, "conversational-onboarding-remote", t, a, n, e, null],
      queryFn: async () =>
        (
          await Promise.all(
            Array.from(new Set(a)).map(async (n) => {
              try {
                return await m(i, { authMethod: e, hostId: t, pluginId: n })
              } catch (e) {
                return (
                  u.v.error("Failed to load conversational onboarding remote plugin", {
                    safe: { pluginId: n },
                    sensitive: { error: e },
                  }),
                  null
                )
              }
            }),
          )
        ).flatMap((e) =>
          null != e && (0, s.sM)(e.detail.summary.name, n, e.detail.summary.eligiblePlanTypes) ? [e] : [],
        ),
      staleTime: p.D.SIX_HOURS,
    }))
    n.d(
      t,
      {},
      {
        bC: m,
        hb: function (e) {
          let t,
            n,
            i,
            s = (0, a.c)(9),
            { authMethod: l, enabled: c, hostId: d, plan: u, pluginIds: p } = e
          s[0] !== d ? ((t = { hostId: d }), (s[0] = d), (s[1] = t)) : (t = s[1])
          let g = (0, r.J)(t)
          s[2] !== l || s[3] !== d || s[4] !== u || s[5] !== p
            ? ((n = { authMethod: l, hostId: d, plan: u, pluginIds: p }),
              (s[2] = l),
              (s[3] = d),
              (s[4] = u),
              (s[5] = p),
              (s[6] = n))
            : (n = s[6])
          let m = c && p.length > 0 && g
          return (s[7] !== m ? ((i = { enabled: m }), (s[7] = m), (s[8] = i)) : (i = s[8]), (0, o._U)(h, n, i))
        },
        k1: h,
      },
    )
  },
  gchn(e, t, n) {
    var a = n("kpIY"),
      o = n("Nwp9"),
      i = n("P8f7")
    let r = "electron:conversational-onboarding-workflow",
      s = {
        declinedTasks: [],
        phase: "role",
        selectedRole: null,
        selectedTask: null,
        permissionStatus: "not-requested",
      },
      l = (0, o.m3)(r, s)
    function c(e) {
      return e.get(l) ?? (0, a.TB)(r, s)
    }
    n.d(
      t,
      {},
      {
        $J: function (e, t) {
          let n = c(e)
          e.set(l, {
            ...n,
            permissionStatus: t,
            computerUseAccessGranted:
              ("computer_use" === n.selectedTask && "allowed" === t) || n.computerUseAccessGranted,
          })
        },
        BK: function (e, t) {
          let n = c(e)
          return "capabilities" !== n.phase && n.selectedTask === t
        },
        E4: function (e, t, n = !1) {
          e.set(l, {
            declinedTasks: [],
            phase: "task",
            importBeforeTasks: n,
            selectedRole: t,
            selectedTask: null,
            permissionStatus: "not-requested",
          })
        },
        JB: function (e, t) {
          let n = "csv_chart" !== t && "data_science_csv_chart" !== t
          e.set(l, {
            ...c(e),
            advancedCapabilitiesStatus: void 0,
            advancedCapabilitiesToSetup: void 0,
            advancedCapabilitiesVisitId: void 0,
            phase: n ? "permission" : "execution",
            selectedTask: t,
            permissionStatus: n ? "pending" : "not-requested",
          })
        },
        Ki: function (e, t) {
          let n = c(e)
          if ("execution" !== n.phase || null == n.selectedTask) return
          let a = n.advancedCapabilitiesToSetup ?? (0, i.R)(t)
          null != a &&
            e.set(l, {
              ...n,
              phase: "capabilities",
              advancedCapabilitiesToSetup: a,
              advancedCapabilitiesVisitId: crypto.randomUUID(),
              advancedCapabilitiesStatus: 0 === a.length ? "completed" : (n.advancedCapabilitiesStatus ?? "pending"),
            })
        },
        a7: function (e) {
          e.set(l, { ...c(e), phase: "execution" })
        },
        h8: c,
        hu: l,
        kq: function (e) {
          e.set(l, s)
        },
        yP: function (e, t) {
          let n = c(e)
          e.set(l, {
            ...n,
            declinedTasks: null == t ? n.declinedTasks : [...(n.declinedTasks ?? []), t],
            advancedCapabilitiesStatus: void 0,
            advancedCapabilitiesToSetup: void 0,
            advancedCapabilitiesVisitId: void 0,
            phase: "task",
            selectedTask: null,
            permissionStatus: "not-requested",
          })
        },
        zt: function (e) {
          let t = c(e)
          "capabilities" === t.phase && e.set(l, { ...t, advancedCapabilitiesStatus: "completed" })
        },
      },
    )
  },
  nCH5(e, t, n) {
    var a = n("TNWb"),
      o = n("IAYR")
    let i = `[${o.t4}="${o.bw}"]`,
      r = `[${o.Cd}]`,
      s = `[${o.Km}]`,
      l = `${i},${r},${s},${a.sC}`
    function c(e, t = !1) {
      if (e.hidden || "hidden" === window.getComputedStyle(e).visibility) return null
      let n = e.getBoundingClientRect()
      return n.width <= 0 || (!t && n.height <= 0) ? null : { height: n.height, width: n.width, x: n.left, y: n.top }
    }
    function d(e) {
      if ("attributes" === e.type) return !0
      for (let t of e.addedNodes) if (u(t)) return !0
      for (let t of e.removedNodes) if (u(t)) return !0
      return !1
    }
    function u(e) {
      return e instanceof HTMLElement && (e.matches(l) || null != e.querySelector(l))
    }
    n.d(
      t,
      {},
      {
        v: function (e) {
          let t = window.electronBridge?.sendMessageFromView
          if (null == t || null == document.body) return { setCodexHomeAvailable() {}, stop() {} }
          let n = Number.isFinite(e) && e > 0 ? e : 1,
            u = null,
            p = !1,
            g = null,
            m = null,
            h = new ResizeObserver(x),
            f = new MutationObserver((e) => {
              e.some(d) && (A(), x())
            }),
            v = new MutationObserver(x)
          function b(e) {
            var n
            let a = JSON.stringify({
              anchors: (n = e).anchors,
              anchorRect: n.anchorRect,
              hostId: n.hostId,
              homeSurfaceWidth: n.homeSurfaceWidth,
              isCodexHomeAvailable: n.isCodexHomeAvailable,
              presentationScope: n.presentationScope,
            })
            if (a === m) return
            let o = g?.anchorRect != null && null != e.anchorRect,
              i = { ...e, animated: o }
            ;((g = i), (m = a), t({ layout: i, type: "remote-hosted-pip-host-layout-changed" }))
          }
          function y() {
            b({
              anchors: null,
              anchorRect: null,
              animated: !1,
              hostId: o.bw,
              homeSurfaceWidth: null,
              isCodexHomeAvailable: !1,
              interactionPassthroughRect: null,
              presentationScope: "thread",
            })
          }
          function x() {
            null == u &&
              (u = window.requestAnimationFrame(() => {
                ;((u = null),
                  (function () {
                    if ((0, a.zf)()) return y()
                    let e = null
                    for (let t of document.querySelectorAll(i)) if (null != (e = c(t))) break
                    if (null == e) return y()
                    let t = []
                    for (let e of document.querySelectorAll(s)) {
                      let n = c(e)
                      null != n && t.push(n)
                    }
                    let l = null
                    for (let e of document.querySelectorAll(r))
                      if (null != (l = c(e, !0))) {
                        l.width = e.offsetWidth * n
                        break
                      }
                    b(
                      (0, o.kL)({
                        homeSurfaceRect: l,
                        hostId: o.bw,
                        hostRect: e,
                        isCodexHomeAvailable: p,
                        obstacleRects: t,
                      }),
                    )
                  })())
              }))
          }
          function A() {
            for (let e of (h.disconnect(), v.disconnect(), document.querySelectorAll(l)))
              (h.observe(e), v.observe(e, { attributeFilter: ["class", "hidden", "style"], attributes: !0 }))
          }
          return (
            f.observe(document.body, {
              attributeFilter: [o.t4, o.Cd, o.Km],
              attributes: !0,
              childList: !0,
              subtree: !0,
            }),
            window.addEventListener("resize", x),
            document.addEventListener("scroll", x, !0),
            A(),
            x(),
            {
              setCodexHomeAvailable(e) {
                p !== e && ((p = e), x())
              },
              stop() {
                ;(null != u && window.cancelAnimationFrame(u),
                  h.disconnect(),
                  f.disconnect(),
                  v.disconnect(),
                  window.removeEventListener("resize", x),
                  document.removeEventListener("scroll", x, !0),
                  y())
              },
            }
          )
        },
      },
    )
  },
  IAYR(e, t, n) {
    let a = { height: 250, width: 250 },
      o = ["top-left", "top-right", "bottom-left", "bottom-right"]
    function i(e, t, n) {
      let a = t.reduce((t, n) => t + c(e.rect, n), 0)
      return 1e9 * (a > 0) + 1e4 * a + 1e6 * e.priority + (e.rect.left - n.left) ** 2 + (e.rect.top - n.top) ** 2
    }
    function r(e, t, n) {
      switch (e) {
        case "top-left":
          return { x: t.x + n.left, y: t.y + n.top }
        case "top-right":
          return { x: t.x + n.right, y: t.y + n.top }
        case "bottom-left":
          return { x: t.x + n.left, y: t.y + n.bottom }
        case "bottom-right":
          return { x: t.x + n.right, y: t.y + n.bottom }
      }
    }
    function s(e, t) {
      return l(
        d(e.left, 24, Math.max(24, t.width - e.width - 24)),
        d(e.top, 24, Math.max(24, t.height - e.height - 24)),
        e,
      )
    }
    function l(e, t, n) {
      return { bottom: t + n.height, height: n.height, left: e, right: e + n.width, top: t, width: n.width }
    }
    function c(e, t) {
      let n = Math.min(e.right, t.right) - Math.max(e.left, t.left),
        a = Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)
      return n <= 0 || a <= 0 ? 0 : n * a
    }
    function d(e, t, n) {
      return Math.min(Math.max(e, t), n)
    }
    n.d(
      t,
      {},
      {
        Cd: "data-pip-home-surface",
        Km: "data-pip-obstacle",
        bw: "codex-main-thread",
        kL: function ({ homeSurfaceRect: e, hostId: t, hostRect: n, isCodexHomeAvailable: d, obstacleRects: u }) {
          var p, g
          let m,
            h,
            f = u.map((e) => {
              var t, a
              return (
                (t = n),
                (function ({ bottom: e, left: t, right: n, top: a }) {
                  return { bottom: e, height: e - a, left: t, right: n, top: a, width: n - t }
                })({
                  bottom: (a = e).y - t.y + a.height + 12,
                  left: a.x - t.x - 12,
                  right: a.x - t.x + a.width + 12,
                  top: a.y - t.y - 12,
                })
              )
            }),
            v =
              d && null != e ? ((p = n), (m = (g = e).x - p.x + g.width), (h = g.y - p.y), l(m - a.width, h, a)) : null
          return {
            anchorRect: n,
            anchors: o.map((e) =>
              (function (e, t, n, o) {
                if (null != o) return { alignment: e, point: r(e, t, o) }
                let d = s(
                    (function (e, t) {
                      switch (e) {
                        case "top-left":
                          return l(24, 24, a)
                        case "top-right":
                          return l(t.width - a.width - 24, 24, a)
                        case "bottom-left":
                          return l(24, t.height - a.height - 24, a)
                        case "bottom-right":
                          return l(t.width - a.width - 24, t.height - a.height - 24, a)
                      }
                    })(e, t),
                    t,
                  ),
                  u = d
                for (let a = 0; a < 6; a += 1) {
                  let a = (function (e, t) {
                    for (let n of t) if (c(e, n) > 0) return n
                    return null
                  })(u, n)
                  if (null == a) break
                  u = (function ({ alignment: e, hostRect: t, obstacle: n, obstacles: a, rect: o, sourceRect: r }) {
                    let c = (function (e, t, n) {
                        let a = l(t.left, n.bottom, t),
                          o = l(t.left, n.top - t.height, t),
                          i = l(n.right, t.top, t),
                          r = l(n.left - t.width, t.top, t)
                        switch (e) {
                          case "top-left":
                            return [
                              { priority: 0, rect: a },
                              { priority: 1, rect: i },
                              { priority: 2, rect: r },
                              { priority: 3, rect: o },
                            ]
                          case "top-right":
                            return [
                              { priority: 0, rect: a },
                              { priority: 1, rect: r },
                              { priority: 2, rect: i },
                              { priority: 3, rect: o },
                            ]
                          case "bottom-left":
                            return [
                              { priority: 0, rect: o },
                              { priority: 1, rect: i },
                              { priority: 2, rect: r },
                              { priority: 3, rect: a },
                            ]
                          case "bottom-right":
                            return [
                              { priority: 0, rect: o },
                              { priority: 1, rect: r },
                              { priority: 2, rect: i },
                              { priority: 3, rect: a },
                            ]
                        }
                      })(e, o, n).map((e) => ({ priority: e.priority, rect: s(e.rect, t) })),
                      d = c[0],
                      u = null == d ? 1 / 0 : i(d, a, r)
                    for (let e of c.slice(1)) {
                      let t = i(e, a, r)
                      t < u && ((d = e), (u = t))
                    }
                    return d?.rect ?? o
                  })({ alignment: e, hostRect: t, obstacle: a, obstacles: n, rect: u, sourceRect: d })
                }
                return { alignment: e, point: r(e, t, u) }
              })(e, n, f, "top-right" === e ? v : null),
            ),
            animated: !1,
            hostId: t,
            homeSurfaceWidth: e?.width ?? null,
            isCodexHomeAvailable: d,
            interactionPassthroughRect: null,
            presentationScope: "thread",
          }
        },
        t4: "data-pip-anchor-host",
      },
    )
  },
  KdgY(e, t, n) {
    let a = (0, n("nkTT").a)({
      name: "bar-chart-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        visualBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        center: { x: 12, y: 12 },
        insets: { top: 2.25, right: 2.25, bottom: 2.25, left: 2.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13.4961 2.25C14.7387 2.25 15.7461 3.25736 15.7461 4.5V6.72461H19.5C20.7426 6.72461 21.75 7.73197 21.75 8.97461V18.9746C21.75 20.4934 20.5188 21.7246 19 21.7246H15.1797C15.1207 21.7395 15.0597 21.75 14.9961 21.75C14.9325 21.75 14.8714 21.7395 14.8125 21.7246H9.17969C9.12074 21.7395 9.05967 21.75 8.99609 21.75C8.93252 21.75 8.87145 21.7395 8.8125 21.7246H5C3.48122 21.7246 2.25 20.4934 2.25 18.9746V13.4746C2.25 12.232 3.25736 11.2246 4.5 11.2246H8.24609V4.5C8.24609 3.25736 9.25345 2.25 10.4961 2.25H13.4961ZM15.7461 20.2246H19C19.6904 20.2246 20.25 19.665 20.25 18.9746V8.97461C20.25 8.5604 19.9142 8.22461 19.5 8.22461H15.7461V20.2246ZM10.4961 3.75C10.0819 3.75 9.74609 4.08579 9.74609 4.5V20.2246H14.2461V4.5C14.2461 4.08579 13.9103 3.75 13.4961 3.75H10.4961ZM4.5 12.7246C4.08579 12.7246 3.75 13.0604 3.75 13.4746V18.9746C3.75 19.665 4.30964 20.2246 5 20.2246H8.24609V12.7246H4.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { w: a })
  },
  D1Cn(e, t, n) {
    n.d(t, {
      A: () =>
        function e(t, n, r = 0, s = 1 / 0, l) {
          if (
            ((n = Math.floor(n)),
            (r = Math.floor(Math.max(0, r))),
            (s = Math.floor(Math.min(t.length - 1, s))),
            !(r <= n && n <= s))
          )
            return t
          for (
            l =
              void 0 === l
                ? o
                : (function (e = a.A) {
                    if (e === a.A) return o
                    if ("function" != typeof e) throw TypeError("compare is not a function")
                    return (t, n) => {
                      let a = e(t, n)
                      return a || 0 === a ? a : (0 === e(n, n)) - (0 === e(t, t))
                    }
                  })(l);
            s > r;
          ) {
            if (s - r > 600) {
              let a = s - r + 1,
                o = n - r + 1,
                i = Math.log(a),
                c = 0.5 * Math.exp((2 * i) / 3),
                d = 0.5 * Math.sqrt((i * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
                u = Math.max(r, Math.floor(n - (o * c) / a + d)),
                p = Math.min(s, Math.floor(n + ((a - o) * c) / a + d))
              e(t, n, u, p, l)
            }
            let a = t[n],
              o = r,
              c = s
            for (i(t, r, n), l(t[s], a) > 0 && i(t, r, s); o < c;) {
              for (i(t, o, c), ++o, --c; 0 > l(t[o], a);) ++o
              for (; l(t[c], a) > 0;) --c
            }
            ;(0 === l(t[r], a) ? i(t, r, c) : i(t, ++c, s), c <= n && (r = c + 1), n <= c && (s = c - 1))
          }
          return t
        },
    })
    var a = n("GGMO")
    function o(e, t) {
      return (null == e || !(e >= e)) - (null == t || !(t >= t)) || (e < t ? -1 : +(e > t))
    }
    function i(e, t, n) {
      let a = e[t]
      ;((e[t] = e[n]), (e[n] = a))
    }
  },
  pQlJ(e, t, n) {
    n.d(
      t,
      {},
      {
        A: function (e, t) {
          if (!e) throw Error("Invariant failed")
        },
      },
    )
  },
}
//# sourceMappingURL=611468.2e08af3c4a.js.map
