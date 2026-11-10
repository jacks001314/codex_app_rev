/*! LICENSE: 728748.501fed6f8a.js.LICENSE.txt */
export const __rspack_esm_ids = [728748]
export const __webpack_modules__ = {
  HDMd(e, t, i) {
    var s = i("zd8w"),
      r = i("Rb9v"),
      a = i("bX2U"),
      n = i("vbRY"),
      l = i("GJI9"),
      o = i("GTr4"),
      c = i("DZhG"),
      d = i("tusw"),
      u = i("tbbF"),
      p = i("MTEf"),
      h = i("e2Qa"),
      g = i("dQbG"),
      m = i("on57"),
      f = i("bx2r"),
      x = i("Q0yO"),
      v = i("rYo8"),
      b = i("Dqte"),
      _ = i("CkDz")
    function y() {
      return (y = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t]
              for (var s in i) ({}).hasOwnProperty.call(i, s) && (e[s] = i[s])
            }
            return e
          }).apply(null, arguments)
    }
    function w(e, t) {
      var i = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e)
        ;(t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          i.push.apply(i, s))
      }
      return i
    }
    function j(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? w(Object(i), !0).forEach(function (t) {
              var s, r, a
              ;((s = e),
                (r = t),
                (a = i[t]),
                (r = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e
                    var i = e[Symbol.toPrimitive]
                    if (void 0 !== i) {
                      var s = i.call(e, t || "default")
                      if ("object" != typeof s) return s
                      throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                  })(e, "string")
                  return "symbol" == typeof t ? t : t + ""
                })(r)) in s
                  ? Object.defineProperty(s, r, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                  : (s[r] = a))
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : w(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
              })
      }
      return e
    }
    var N = {
        curveBasisClosed: r.A,
        curveBasisOpen: a.A,
        curveBasis: n.Ay,
        curveBumpX: l.dJ,
        curveBumpY: l.kl,
        curveLinearClosed: o.A,
        curveLinear: c.A,
        curveMonotoneX: d.G,
        curveMonotoneY: d.N,
        curveNatural: u.A,
        curveStep: p.Ay,
        curveStepAfter: p.Ps,
        curveStepBefore: p.Ko,
      },
      S = (e) => (0, v.H)(e.x) && (0, v.H)(e.y),
      T = (e) => null != e.base && S(e.base) && S(e),
      P = (e) => e.x,
      E = (e) => e.y
    i.d(
      t,
      {},
      {
        Ip: (e) => {
          var t = e.className,
            i = e.points,
            r = e.path,
            a = e.pathRef,
            n = (0, _.WX)()
          if ((!i || !i.length) && !r) return null
          var l = {
              type: e.type,
              points: e.points,
              baseLine: e.baseLine,
              layout: e.layout || n,
              connectNulls: e.connectNulls,
            },
            o =
              i && i.length
                ? ((e) => {
                    var t = e.type,
                      i = e.points,
                      s = void 0 === i ? [] : i,
                      r = e.baseLine,
                      a = e.layout,
                      n = e.connectNulls,
                      l = void 0 !== n && n,
                      o = ((e, t) => {
                        if ("function" == typeof e) return e
                        var i = "curve".concat((0, x.Zb)(e))
                        if (("curveMonotone" === i || "curveBump" === i) && t) {
                          var s = N["".concat(i).concat("vertical" === t ? "Y" : "X")]
                          if (s) return s
                        }
                        return N[i] || c.A
                      })(void 0 === t ? "linear" : t, a),
                      d = l ? s.filter(S) : s
                    if (Array.isArray(r)) {
                      var u = s.map((e, t) => j(j({}, e), {}, { base: r[t] }))
                      return (
                        "vertical" === a
                          ? (0, h.A)()
                              .y(E)
                              .x1(P)
                              .x0((e) => e.base.x)
                          : (0, h.A)()
                              .x(P)
                              .y1(E)
                              .y0((e) => e.base.y)
                      )
                        .defined(T)
                        .curve(o)(l ? u.filter(T) : u)
                    }
                    return (
                      "vertical" === a && (0, x.Et)(r)
                        ? (0, h.A)().y(E).x1(P).x0(r)
                        : (0, x.Et)(r)
                          ? (0, h.A)().x(P).y1(E).y0(r)
                          : (0, g.A)().x(P).y(E)
                    )
                      .defined(S)
                      .curve(o)(d)
                  })(l)
                : r
          return s.createElement(
            "path",
            y({}, (0, b.uZ)(e), (0, f._U)(e), {
              className: (0, m.$)("recharts-curve", t),
              d: null === o ? void 0 : o,
              ref: a,
            }),
          )
        },
      },
    )
  },
  iLrd(e, t, i) {
    var s = i("zd8w"),
      r =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            },
      a = s.useState,
      n = s.useEffect,
      l = s.useLayoutEffect,
      o = s.useDebugValue
    function c(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var i = t()
        return !r(e, i)
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
            var i = t(),
              s = a({ inst: { value: i, getSnapshot: t } }),
              r = s[0].inst,
              d = s[1]
            return (
              l(
                function () {
                  ;((r.value = i), (r.getSnapshot = t), c(r) && d({ inst: r }))
                },
                [e, i, t],
              ),
              n(
                function () {
                  return (
                    c(r) && d({ inst: r }),
                    e(function () {
                      c(r) && d({ inst: r })
                    })
                  )
                },
                [e],
              ),
              o(i),
              i
            )
          }
    t.useSyncExternalStore = void 0 !== s.useSyncExternalStore ? s.useSyncExternalStore : d
  },
  aWDT0(e, t, i) {
    var s = i("zd8w"),
      r = i("aapa"),
      a =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            },
      n = r.useSyncExternalStore,
      l = s.useRef,
      o = s.useEffect,
      c = s.useMemo,
      d = s.useDebugValue
    t.useSyncExternalStoreWithSelector = function (e, t, i, s, r) {
      var u = l(null)
      if (null === u.current) {
        var p = { hasValue: !1, value: null }
        u.current = p
      } else p = u.current
      var h = n(
        e,
        (u = c(
          function () {
            function e(e) {
              if (!o) {
                if (((o = !0), (n = e), (e = s(e)), void 0 !== r && p.hasValue)) {
                  var t = p.value
                  if (r(t, e)) return (l = t)
                }
                return (l = e)
              }
              if (((t = l), a(n, e))) return t
              var i = s(e)
              return void 0 !== r && r(t, i) ? ((n = e), t) : ((n = e), (l = i))
            }
            var n,
              l,
              o = !1,
              c = void 0 === i ? null : i
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
          [t, i, s, r],
        ))[0],
        u[1],
      )
      return (
        o(
          function () {
            ;((p.hasValue = !0), (p.value = h))
          },
          [h],
        ),
        d(h),
        h
      )
    }
  },
  aapa(e, t, i) {
    e.exports = i("iLrd")
  },
  sTDd(e, t, i) {
    e.exports = i("aWDT0")
  },
  c4HL(e, t, i) {
    var s = i("ABep")
    ;(i("zd8w"),
      (t.A = (e) =>
        (0, s.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, s.jsx)("path", {
            d: "M16.0017 8.33334C16.0017 7.78014 15.553 7.33139 14.9998 7.33139H12.3318V16.0013H16.0017V8.33334ZM11.0017 5.00034C11.0017 4.44713 10.553 3.99838 9.99976 3.99838H4.99976C4.4467 3.99856 3.99878 4.44724 3.99878 5.00034V16.0013H6.83472V14.1664C6.83489 13.7993 7.13274 13.5015 7.49976 13.5013C7.86692 13.5013 8.16462 13.7992 8.16479 14.1664V16.0013H11.0017V5.00034ZM12.3318 6.00131H14.9998C16.2875 6.00131 17.3318 7.0456 17.3318 8.33334V16.0013H18.3337L18.4675 16.015C18.7704 16.077 18.9986 16.3452 18.9988 16.6664C18.9988 16.9876 18.7705 17.2556 18.4675 17.3177L18.3337 17.3314H1.66675C1.29948 17.3314 1.00171 17.0336 1.00171 16.6664C1.00188 16.2992 1.29959 16.0013 1.66675 16.0013H2.6687V5.00034C2.6687 3.7127 3.71216 2.66848 4.99976 2.6683H9.99976C11.2875 2.6683 12.3318 3.71259 12.3318 5.00034V6.00131Z",
            fill: "currentColor",
          }),
        })))
  },
  dBpL(e, t, i) {
    var s = i("ABep")
    ;(i("zd8w"),
      (t.A = (e) =>
        (0, s.jsxs)("svg", {
          width: 18,
          height: 18,
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, s.jsx)("rect", {
              x: 3.19995,
              y: 6.20001,
              width: 11.6,
              height: 8.8,
              rx: 2.25,
              stroke: "currentColor",
              strokeWidth: 1.33,
            }),
            (0, s.jsx)("path", {
              d: "M5.30005 6.29999V5.99999C5.30005 3.95653 6.9566 2.29999 9.00005 2.29999C11.0435 2.29999 12.7 3.95653 12.7 5.99999V6.29999",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M8.5 10.5H9.5",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        })))
  },
  aF7W(e, t, i) {
    var s = i("ASxG")
    let r = { "7d": 7, "30d": 30 },
      a = s.object({
        start_time_ms: s.number().int().nonnegative(),
        end_time_ms: s.number().int().nonnegative(),
        granularity: s.enum(["1h", "1d"]),
      }),
      n = s.object({
        request_traffic: s
          .object({
            total_requests: s.number().nonnegative(),
            unique_visitors: s.number().nonnegative(),
            points: s.array(
              s.object({
                timestamp_ms: s.number().int().nonnegative(),
                requests: s.number().nonnegative(),
                unique_visitors: s.number().nonnegative(),
                requests_by_type: s.record(s.string(), s.number().nonnegative()),
              }),
            ),
            top_paths: s.array(
              s.object({
                path: s.string().min(1),
                requests: s.number().nonnegative(),
                unique_visitors: s.number().nonnegative(),
              }),
            ),
          })
          .nullish(),
        project_id: s.string(),
        window: a,
        overall: s.object({
          page_views: s.object({ value: s.number().nonnegative() }),
          unique_visitors: s.object({ value: s.number().nonnegative() }),
        }),
        timeseries: s.object({
          points: s.array(
            s.object({
              requests_by_type: s.record(s.string(), s.number().nonnegative()).optional(),
              timestamp_ms: s.number().int().nonnegative(),
              page_views: s.number().nonnegative(),
              unique_visitors: s.number().nonnegative(),
            }),
          ),
        }),
        top_pages: s.array(
          s.object({
            path: s.string().min(1),
            page_views: s.number().nonnegative(),
            unique_visitors: s.number().nonnegative(),
          }),
        ),
      }),
      l = s.object({ project_id: s.string(), event_names: s.array(s.string().min(1).max(64)) }),
      o = s.object({
        project_id: s.string(),
        event_name: s.string().min(1).max(64),
        window: a.extend({ granularity: s.literal("1d") }),
        overall: s.object({
          occurrences: s.object({ value: s.number().nonnegative() }),
          unique_visitors: s.object({ value: s.number().nonnegative() }),
        }),
        timeseries: s.object({
          points: s.array(
            s.object({ timestamp_ms: s.number().int().nonnegative(), occurrences: s.number().nonnegative() }),
          ),
        }),
      }),
      c = n.transform((e) => ({
        endTimeMs: e.window.end_time_ms,
        interval: "1h" === e.window.granularity ? "hourly" : "daily",
        projectId: e.project_id,
        startTimeMs: e.window.start_time_ms,
        hasRequestBreakdown: null != e.request_traffic,
        summary: {
          pageViews: e.request_traffic?.total_requests ?? e.overall.page_views.value,
          uniqueVisitors: e.request_traffic?.unique_visitors ?? e.overall.unique_visitors.value,
        },
        topPages:
          null != e.request_traffic
            ? e.request_traffic.top_paths.map(({ requests: e, path: t, unique_visitors: i }) => ({
                pageViews: e,
                path: t,
                uniqueVisitors: i,
              }))
            : e.top_pages.map(({ page_views: e, path: t, unique_visitors: i }) => ({
                pageViews: e,
                path: t,
                uniqueVisitors: i,
              })),
        traffic:
          null != e.request_traffic
            ? e.request_traffic.points.map(
                ({ requests: e, timestamp_ms: t, unique_visitors: i, requests_by_type: s }) => ({
                  pageViews: e,
                  timestampMs: t,
                  uniqueVisitors: i,
                  requestsByType: s,
                }),
              )
            : e.timeseries.points.map(({ page_views: e, timestamp_ms: t, unique_visitors: i }) => ({
                requestsByType: void 0,
                pageViews: e,
                timestampMs: t,
                uniqueVisitors: i,
              })),
      })),
      d = n.omit({ request_traffic: !0 }).transform((e) => c.parse(e)),
      u = l.transform((e) => ({ eventNames: e.event_names, projectId: e.project_id })),
      p = o.transform((e) => ({
        endTimeMs: e.window.end_time_ms,
        eventName: e.event_name,
        interval: "daily",
        occurrences: e.timeseries.points.map(({ occurrences: e, timestamp_ms: t }) => ({ count: e, timestampMs: t })),
        projectId: e.project_id,
        startTimeMs: e.window.start_time_ms,
        totalOccurrences: e.overall.occurrences.value,
        uniqueVisitors: e.overall.unique_visitors.value,
      }))
    function h(e, t) {
      switch (t) {
        case "auto":
          return "7d" === e ? "hourly" : "daily"
        case "hourly":
        case "daily":
          return t
      }
    }
    i.d(
      t,
      {},
      {
        EM: function (e, t) {
          if (null == t || 0 === t) return
          let i = ((e - t) / t) * 100
          return Number.isFinite(i) ? i : void 0
        },
        NK: p,
        Vc: ["7d", "30d"],
        Ye: d,
        aE: u,
        cK: c,
        co: "Etc/GMT+8",
        dy: h,
        uK: function (e, t, i = Date.now()) {
          let s = h(e, t),
            a = 864e5 * Math.floor((i - 288e5) / 864e5) + 288e5
          return {
            endTimeMs: "daily" === s ? a + 864e5 : 36e5 * Math.ceil(i / 36e5),
            interval: s,
            startTimeMs: a - (r[e] - 1) * 864e5,
          }
        },
      },
    )
  },
  bS6T(e, t, i) {
    var s = i("zTeN"),
      r = i("ASxG"),
      a = i("OWtl"),
      n = i("rvFo"),
      l = i("SQbA"),
      o = i("aF7W")
    let c = ["appgen", "analytics", "overview"],
      d = ["appgen", "analytics", "events"],
      u = ["appgen", "analytics", "event"],
      p = (0, s.vU)(a.u, (e) => ({
        queryKey: (function ({ includeRequestBreakdown: e, granularity: t, projectId: i, range: s }) {
          return [...c, i, s, (0, o.dy)(s, t), ...(e ? ["request-breakdown"] : [])]
        })(e),
        queryFn: async () => {
          let { endTimeMs: t, interval: i, startTimeMs: s } = (0, o.uK)(e.range, e.granularity)
          return (e.includeRequestBreakdown ? o.cK : o.Ye).parse(
            await (0, l.callSitesTool)(
              "sites.get_site_analytics_overview",
              { project_id: e.projectId, start_time_ms: s, end_time_ms: t, granularity: "hourly" === i ? "1h" : "1d" },
              r.unknown(),
            ),
          )
        },
        retry: !1,
        refetchInterval: f,
        refetchIntervalInBackground: !0,
        refetchOnMount: (e) => !x(e.state.dataUpdatedAt) || "always",
        staleTime: n.D.FIVE_MINUTES,
      })),
      h = (0, s.vU)(a.u, (e) => {
        var t
        return {
          queryKey: ((t = e), [...d, t]),
          queryFn: async () => {
            let { endTimeMs: t, startTimeMs: i } = (0, o.uK)("30d", "daily")
            return o.aE.parse(
              await (0, l.callSitesTool)(
                "sites.list_site_analytics_events",
                { project_id: e, start_time_ms: i, end_time_ms: t },
                r.unknown(),
              ),
            )
          },
          retry: !1,
          refetchInterval: f,
          refetchIntervalInBackground: !0,
          refetchOnMount: (e) => !x(e.state.dataUpdatedAt) || "always",
          staleTime: n.D.FIVE_MINUTES,
        }
      }),
      g = (0, s.vU)(a.u, (e) => ({
        queryKey: (function ({ eventName: e, projectId: t, range: i }) {
          return [...u, t, e, i]
        })(e),
        queryFn: async () => {
          let { endTimeMs: t, startTimeMs: i } = (0, o.uK)(e.range, "daily")
          return o.NK.parse(
            await (0, l.callSitesTool)(
              "sites.query_site_analytics_event",
              { project_id: e.projectId, event_name: e.eventName, start_time_ms: i, end_time_ms: t },
              r.unknown(),
            ),
          )
        },
        retry: !1,
        refetchInterval: f,
        refetchIntervalInBackground: !0,
        refetchOnMount: (e) => !x(e.state.dataUpdatedAt) || "always",
        staleTime: n.D.FIVE_MINUTES,
      })),
      m = (0, s.vU)(a.u, (e) => ({
        queryKey: [...c, e.projectId, "comparison", e.startTimeMs, e.endTimeMs, e.interval, e.includeRequestBreakdown],
        queryFn: async () =>
          (e.includeRequestBreakdown ? o.cK : o.Ye).parse(
            await (0, l.callSitesTool)(
              "sites.get_site_analytics_overview",
              {
                project_id: e.projectId,
                start_time_ms: e.startTimeMs - 6048e5,
                end_time_ms: e.endTimeMs - 6048e5,
                granularity: "hourly" === e.interval ? "1h" : "1d",
              },
              r.unknown(),
            ),
          ),
        retry: !1,
        staleTime: n.D.FIVE_MINUTES,
      }))
    function f() {
      return (0, o.uK)("30d", "daily").endTimeMs - Date.now() + 1e3 + Math.random() * n.D.FIVE_MINUTES
    }
    function x(e) {
      return (0, o.uK)("30d", "daily", e).endTimeMs !== (0, o.uK)("30d", "daily").endTimeMs
    }
    i.d(t, {}, { Dm: h, F3: m, S5: g, rX: p })
  },
  PMoT(e, t, i) {
    i.d(t, { g: () => d })
    var s = i("ABep"),
      r = i("QosV"),
      a = i("c4HL"),
      n = i("v9CS"),
      l = i("dBpL")
    i("zd8w")
    var o = (e) =>
        (0, s.jsx)("svg", {
          width: 16,
          height: 13,
          viewBox: "0 0 16 13",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, s.jsx)("path", {
            d: "M1.19707 11.7413C1.19712 10.5109 1.65242 9.63179 2.30186 9.05449C2.96226 8.46747 3.85986 8.16159 4.77686 8.16152C5.69398 8.16152 6.59225 8.46737 7.25273 9.05449C7.90211 9.63179 8.35747 10.5109 8.35752 11.7413C8.35752 12.0719 8.62551 12.3398 8.95605 12.3398C9.28646 12.3397 9.55459 12.0718 9.55459 11.7413C9.55454 10.1861 8.96474 8.97533 8.04727 8.15977C7.14081 7.35416 5.94889 6.96445 4.77686 6.96445C3.60478 6.96452 2.41287 7.35403 1.50645 8.15977C0.588974 8.97533 5.14984e-05 10.1861 0 11.7413C0 12.0719 0.267993 12.3398 0.598535 12.3398C0.929078 12.3398 1.19707 12.0719 1.19707 11.7413ZM15.8221 11.0452C15.8221 9.44591 15.0886 8.27774 14.0326 7.61045C12.9989 6.95726 11.6905 6.80379 10.5346 7.12969C10.2164 7.2194 10.0309 7.55071 10.1206 7.86885C10.2104 8.18673 10.5409 8.37141 10.8589 8.28193C11.7108 8.04169 12.6661 8.16236 13.3937 8.62207C14.0989 9.06778 14.625 9.85234 14.625 11.0452C14.6251 11.3757 14.893 11.6437 15.2235 11.6437C15.554 11.6437 15.822 11.3757 15.8221 11.0452ZM9.90264 3.38467C9.90264 2.56133 10.5699 1.89318 11.3933 1.89316C12.2166 1.89316 12.8839 2.56132 12.8839 3.38467C12.8837 4.20784 12.2165 4.87529 11.3933 4.87529C10.5701 4.87528 9.90285 4.20783 9.90264 3.38467ZM2.93818 3.03574C2.93836 2.02032 3.76143 1.19723 4.77686 1.19707C5.79241 1.19707 6.61623 2.02022 6.61641 3.03574C6.61641 4.05141 5.79252 4.87529 4.77686 4.87529C3.76133 4.87513 2.93818 4.05131 2.93818 3.03574ZM8.70557 3.38467C8.70578 4.86891 9.90897 6.07235 11.3933 6.07236C12.8776 6.07236 14.0807 4.86892 14.081 3.38467C14.081 1.90023 12.8777 0.696094 11.3933 0.696094C9.90884 0.69611 8.70557 1.90024 8.70557 3.38467ZM1.74111 3.03574C1.74111 4.71239 3.10024 6.0722 4.77686 6.07236C6.45361 6.07236 7.81348 4.71249 7.81348 3.03574C7.8133 1.35914 6.4535 0 4.77686 0C3.10035 0.000159546 1.74129 1.35924 1.74111 3.03574Z",
            fill: "currentColor",
          }),
        }),
      c = i("BF4Y")
    function d(e) {
      let t,
        i,
        d,
        u,
        p = (0, r.c)(14)
      ;(p[0] !== e
        ? (({ accessPolicy: t, accessState: d, ...i } = e), (p[0] = e), (p[1] = t), (p[2] = i), (p[3] = d))
        : ((t = p[1]), (i = p[2]), (d = p[3])),
        p[4] !== t || p[5] !== d ? ((u = d ?? (0, c.hv)(t)), (p[4] = t), (p[5] = d), (p[6] = u)) : (u = p[6]))
      let h = u
      switch (h.accessMode) {
        case "admins_only":
        case "custom": {
          let e
          return (
            p[7] !== h || p[8] !== i
              ? ((e = (0, c.rp)(h) ? (0, s.jsx)(l.A, { ...i }) : (0, s.jsx)(o, { ...i })),
                (p[7] = h),
                (p[8] = i),
                (p[9] = e))
              : (e = p[9]),
            e
          )
        }
        case "workspace_all": {
          let e
          return (p[10] !== i ? ((e = (0, s.jsx)(a.A, { ...i })), (p[10] = i), (p[11] = e)) : (e = p[11]), e)
        }
        case "public": {
          let e
          return (p[12] !== i ? ((e = (0, s.jsx)(n.A, { ...i })), (p[12] = i), (p[13] = e)) : (e = p[13]), e)
        }
      }
    }
  },
  aoeJ(e, t, i) {
    var s = i("Qgfj"),
      r = i("BF4Y")
    let a = (0, s.YK)({
        restricted: {
          id: "appgenAccess.state.restricted",
          defaultMessage: "Restricted access",
          description:
            "Sharing status for a Site whose recipient counts are unavailable. Access is restricted, but this label does not imply that only the owner has access.",
        },
        groups: {
          id: "appgenAccess.state.visibleToGroups",
          defaultMessage: "Visible to {groupCount, plural, one {# group} other {# groups}}",
          description: "Label for a site shared with one or more groups",
        },
        owner_only: {
          id: "appgenAccess.state.onlyVisibleToYou",
          defaultMessage: "Only visible to you",
          description: "Label for a site whose access is limited to its owner",
        },
        people: {
          id: "appgenAccess.state.visibleToPeople",
          defaultMessage: "Visible to {userCount, plural, one {# person} other {# people}}",
          description: "Label for a site shared with one or more people",
        },
        people_and_groups: {
          id: "appgenAccess.state.visibleToPeopleAndGroups",
          defaultMessage: "Visible to people and groups",
          description: "Label for a site shared with both people and groups",
        },
        public: {
          id: "appgenAccess.state.visibleToEveryone",
          defaultMessage: "Visible to everyone",
          description: "Label for a site shared publicly on the internet",
        },
        workspace_all: {
          id: "appgenAccess.state.visibleToWorkspace",
          defaultMessage: "Visible to your workspace",
          description: "Label for a site shared with anyone in the workspace",
        },
      }),
      n = (0, s.YK)({
        restricted: {
          id: "appgenAccess.shortState.restricted",
          defaultMessage: "Restricted",
          description:
            "Concise sharing status in a Site list when recipient counts are unavailable. Does not imply owner-only access.",
        },
        groups: {
          id: "appgenAccess.shortState.groups",
          defaultMessage: "{groupCount, plural, one {# group} other {# groups}}",
          description: "Concise label for a site shared with one or more groups",
        },
        owner_only: {
          id: "appgenAccess.shortState.ownerOnly",
          defaultMessage: "Only you",
          description: "Concise label for a site whose access is limited to its owner",
        },
        people: {
          id: "appgenAccess.shortState.people",
          defaultMessage: "{userCount, plural, one {# person} other {# people}}",
          description: "Concise label for a site shared with one or more people",
        },
        people_and_groups: {
          id: "appgenAccess.shortState.peopleAndGroups",
          defaultMessage: "People and groups",
          description: "Concise label for a site shared with both people and groups",
        },
        public: {
          id: "appgenAccess.shortState.public",
          defaultMessage: "Everyone",
          description: "Concise label for a site shared publicly on the internet",
        },
        workspace_all: {
          id: "appgenAccess.shortState.workspace",
          defaultMessage: "Your workspace",
          description: "Concise label for a site shared with anyone in the workspace",
        },
      }),
      l = (0, s.YK)({
        restricted: {
          id: "appgenAccess.siteState.restricted",
          defaultMessage: "This site has restricted access",
          description:
            "Tooltip for a Site link when recipient counts are unavailable. Does not imply that only the owner has access.",
        },
        groups: {
          id: "appgenAccess.siteState.visibleToGroups",
          defaultMessage: "This site is visible to {groupCount, plural, one {# group} other {# groups}}",
          description: "Tooltip for a site link shared with one or more groups",
        },
        owner_only: {
          id: "appgenAccess.siteState.onlyVisibleToYou",
          defaultMessage: "This site is only visible to you",
          description: "Tooltip for a site link whose access is limited to its owner",
        },
        people: {
          id: "appgenAccess.siteState.visibleToPeople",
          defaultMessage: "This site is visible to {userCount, plural, one {# person} other {# people}}",
          description: "Tooltip for a site link shared with one or more people",
        },
        people_and_groups: {
          id: "appgenAccess.siteState.visibleToPeopleAndGroups",
          defaultMessage: "This site is visible to people and groups",
          description: "Tooltip for a site link shared with both people and groups",
        },
        public: {
          id: "appgenAccess.siteState.visibleToEveryone",
          defaultMessage: "This site is visible to everyone",
          description: "Tooltip for a site link shared publicly on the internet",
        },
        workspace_all: {
          id: "appgenAccess.siteState.visibleToWorkspace",
          defaultMessage: "This site is visible to your workspace",
          description: "Tooltip for a site link shared with anyone in the workspace",
        },
      })
    function o(e) {
      if ((0, r.rp)(e)) return "owner_only"
      let { accessMode: t, groupCount: i, userCount: s } = e
      switch (t) {
        case "admins_only":
        case "custom":
          if (!1 === e.countsAvailable) return "restricted"
          if (s > 0 && i > 0) return "people_and_groups"
          if (s > 0) return "people"
          if (i > 0) return "groups"
          return "people"
        case "public":
        case "workspace_all":
          return t
      }
    }
    i.d(
      t,
      {},
      {
        Kk: function (e) {
          return n[o(e)]
        },
        SH: function (e) {
          return a[o(e)]
        },
        zB: function (e) {
          return l[o(e)]
        },
      },
    )
  },
  nNcN(e, t, i) {
    i.d(t, { AppgenPage: () => eL, L: () => eZ })
    var s = i("ABep"),
      r = i("QosV"),
      a = i("FCpB"),
      n = i("iRMi"),
      l = i("slpy"),
      o = i("rLlv"),
      c = i("T0Rc"),
      d = i("uris"),
      u = i("irkb"),
      p = i("on57"),
      h = i("i5ac"),
      g = i.n(h),
      m = i("zTeN"),
      f = i("zd8w"),
      x = i("Wf1j"),
      v = i("oyxz"),
      b = i("HZfM"),
      _ = i("EOo5"),
      y = i("Ro2M"),
      w = i("w5lF"),
      j = i("OAko"),
      N = i("LhhH"),
      S = i("TjgH"),
      T = i("ygO2"),
      P = i("ZtSy"),
      E = i("HOLv"),
      A = i("GO7r"),
      M = i("wZQ4"),
      C = i("FrrB"),
      I = i("pIbZ"),
      k = i("wEIr"),
      O = i("PkPj"),
      L = i("X3K1"),
      q = i("BrP7"),
      V = i("GKsW"),
      D = i("Q8aV"),
      F = i("Adh7"),
      U = i("vSFv"),
      z = i("yGJW"),
      R = i("B81s"),
      B = i("OWtl"),
      G = i("Oj9r"),
      H = i("khOd"),
      K = i("hZax"),
      X = i("rvFo"),
      Z = i("eShZ"),
      Y = i("HDMd"),
      W = i("cyb2"),
      Q = i("l5Vd"),
      $ = i("bS6T"),
      J = i("ASxG"),
      ee = i("JYRT")
    let et = J.number().int().positive().catch(5),
      ei = (0, m.T1)(B.u, (e, { scope: t }) => {
        let i = new Map(),
          s = new Map(),
          r = null,
          a = !1
        return {
          observe: (n, l) => (
            null == r &&
              (r = new IntersectionObserver((r) => {
                for (let e of r) {
                  let t = i.get(e.target)
                  null != t && (e.isIntersecting ? s.set(e.target, t) : s.delete(e.target))
                }
                !(function i() {
                  if (a || 0 === s.size) return
                  let r = et.parse(t.get(ee.X, "821253728")?.get("traffic_graph_batch_size", 5)),
                    n = [...s]
                      .sort(([e], [t]) => (e.compareDocumentPosition(t) === Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
                      .slice(0, r)
                  for (let [e] of ((a = !0), n)) s.delete(e)
                  Promise.allSettled(
                    n.map(([, i]) =>
                      t.query.fetch($.rX, {
                        includeRequestBreakdown: !1,
                        granularity: "daily",
                        projectId: i,
                        range: e,
                      }),
                    ),
                  ).then(() => {
                    ;((a = !1), i())
                  })
                })()
              })),
            i.set(n, l),
            r.observe(n),
            () => {
              ;(i.delete(n), s.delete(n), r?.unobserve(n), 0 === i.size && (r?.disconnect(), (r = null)))
            }
          ),
        }
      })
    function es(e) {
      let t,
        i,
        a,
        n,
        l,
        o,
        c,
        d = (0, r.c)(36),
        { onNavigateToSite: u, projectId: p, projectTitle: h } = e,
        g = (0, m.gh)(B.u),
        _ = (0, x.A)(),
        y = (0, b.Zp)(),
        w = (0, f.useId)(),
        j = (0, m.uO)(ei, "30d")
      ;(d[0] !== p
        ? ((t = { includeRequestBreakdown: !1, granularity: "daily", projectId: p, range: "30d" }),
          (d[0] = p),
          (d[1] = t))
        : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { enabled: !1 }), (d[2] = i)) : (i = d[2]))
      let { data: N, isError: S } = (0, m._U)($.rX, t, i)
      if (null != N) {
        let e, t, i, r, n
        d[3] !== N
          ? ((e = (0, s.jsx)("span", {
              className: "block min-h-0 w-full flex-1",
              children: (0, s.jsx)(er, { overview: N }),
            })),
            (d[3] = N),
            (d[4] = e))
          : (e = d[4])
        let l = N.summary.uniqueVisitors
        ;(d[5] !== _ || d[6] !== N.summary.uniqueVisitors
          ? ((t = _.formatNumber(N.summary.uniqueVisitors, { notation: "compact", maximumFractionDigits: 1 })),
            (d[5] = _),
            (d[6] = N.summary.uniqueVisitors),
            (d[7] = t))
          : (t = d[7]),
          d[8] !== N.summary.uniqueVisitors || d[9] !== t
            ? ((i = (0, s.jsx)(v.A, {
                id: "sitesPage.traffic.visitorsTotal",
                defaultMessage: "{count, plural, one {{visitors} Visitor} other {{visitors} Visitors}}",
                description:
                  "Small label below a site's graph showing distinct browsers that loaded a page during the full last 30 days. A returning visitor is counted once in this total. count controls pluralization; visitors is the same total formatted as a compact localized number, such as 1.2K.",
                values: { count: l, visitors: t },
              })),
              (d[8] = N.summary.uniqueVisitors),
              (d[9] = t),
              (d[10] = i))
            : (i = d[10]),
          d[11] !== i || d[12] !== w
            ? ((r = (0, s.jsx)("span", {
                id: w,
                className:
                  "w-full shrink-0 truncate text-start text-xs leading-4 text-secondary tabular-nums select-none",
                children: i,
              })),
              (d[11] = i),
              (d[12] = w),
              (d[13] = r))
            : (r = d[13]),
          d[14] !== e || d[15] !== r
            ? ((n = (0, s.jsxs)(s.Fragment, { children: [e, r] })), (d[14] = e), (d[15] = r), (d[16] = n))
            : (n = d[16]),
          (a = n))
      } else if (S) {
        let e
        ;(d[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("span", {
              className: "sr-only",
              children: (0, s.jsx)(v.A, {
                id: "appgenAnalytics.overview.error",
                defaultMessage: "Unable to load analytics",
                description: "Error shown when the site analytics overview cannot load",
              }),
            })),
            (d[17] = e))
          : (e = d[17]),
          (a = e))
      } else {
        let e
        ;(d[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(L.P, { lines: 1, size: "sm" })), (d[18] = e))
          : (e = d[18]),
          (a = e))
      }
      d[19] !== p || d[20] !== j
        ? ((n = (e) => (null == e ? void 0 : j.observe(e, p))), (d[19] = p), (d[20] = j), (d[21] = n))
        : (n = d[21])
      let T = null == N ? void 0 : w
      return (
        d[22] !== _ || d[23] !== h
          ? ((l = _.formatMessage(
              {
                id: "sitesPage.traffic.openVisitorAnalytics",
                defaultMessage: "Open analytics for {siteTitle}: unique visitors over the past 30 days",
                description:
                  "Accessible button label for a site owner's graph showing daily distinct browsers that loaded a page over the last 30 days. The siteTitle placeholder is the user-provided website title. Selecting the graph opens that site's analytics page.",
              },
              { siteTitle: h },
            )),
            (d[22] = _),
            (d[23] = h),
            (d[24] = l))
          : (l = d[24]),
        d[25] !== y || d[26] !== u || d[27] !== p || d[28] !== g
          ? ((o = () => {
              ;((0, W.Q_)(g, {
                action: W.lX.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED,
                projectId: p,
                source: W.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
              }),
                (u ?? y)((0, Q.hI)(p)))
            }),
            (d[25] = y),
            (d[26] = u),
            (d[27] = p),
            (d[28] = g),
            (d[29] = o))
          : (o = d[29]),
        d[30] !== a || d[31] !== n || d[32] !== T || d[33] !== l || d[34] !== o
          ? ((c = (0, s.jsx)("button", {
              ref: n,
              className:
                "group/traffic pointer-events-auto relative z-10 flex h-14 w-24 shrink-0 cursor-interaction flex-col justify-center gap-1 rounded-md border border-transparent p-1 hover:border-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [@container_(max-width:520px)]:hidden [@container_(max-width:720px)]:w-16",
              "aria-describedby": T,
              "aria-label": l,
              type: "button",
              onClick: o,
              children: a,
            })),
            (d[30] = a),
            (d[31] = n),
            (d[32] = T),
            (d[33] = l),
            (d[34] = o),
            (d[35] = c))
          : (c = d[35]),
        c
      )
    }
    function er(e) {
      let t,
        i,
        a = (0, r.c)(13),
        { overview: n } = e
      if (a[0] !== n.endTimeMs || a[1] !== n.startTimeMs || a[2] !== n.traffic) {
        let e, i
        a[4] !== n.endTimeMs || a[5] !== n.startTimeMs
          ? ((e = (e) => {
              let { timestampMs: t } = e
              return t >= n.startTimeMs && t < n.endTimeMs
            }),
            (a[4] = n.endTimeMs),
            (a[5] = n.startTimeMs),
            (a[6] = e))
          : (e = a[6])
        let s = n.traffic.filter(e).toSorted(en),
          r = Math.max(1, ...s.map(ea))
        ;(a[7] !== r || a[8] !== n.endTimeMs || a[9] !== n.startTimeMs
          ? ((i = (e) => {
              let { timestampMs: t, uniqueVisitors: i } = e
              return { x: 1 + (94 * (t - n.startTimeMs)) / (n.endTimeMs - n.startTimeMs - 864e5), y: 38 - (36 * i) / r }
            }),
            (a[7] = r),
            (a[8] = n.endTimeMs),
            (a[9] = n.startTimeMs),
            (a[10] = i))
          : (i = a[10]),
          (t = s.map(i)),
          (a[0] = n.endTimeMs),
          (a[1] = n.startTimeMs),
          (a[2] = n.traffic),
          (a[3] = t))
      } else t = a[3]
      let l = t
      return (
        a[11] !== l
          ? ((i = (0, s.jsx)("svg", {
              className:
                "size-full text-tertiary group-hover/traffic:text-purple group-focus-visible/traffic:text-purple",
              "aria-hidden": !0,
              focusable: "false",
              preserveAspectRatio: "none",
              viewBox: "0 0 96 40",
              children: (0, s.jsx)(Y.Ip, {
                fill: "none",
                points: l,
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                type: "monotoneX",
              }),
            })),
            (a[11] = l),
            (a[12] = i))
          : (i = a[12]),
        i
      )
    }
    function ea(e) {
      let { uniqueVisitors: t } = e
      return t
    }
    function en(e, t) {
      return e.timestampMs - t.timestampMs
    }
    var el = i("PMoT"),
      eo = i("aoeJ"),
      ec = i("U9wE"),
      ed = i("B0Vf"),
      eu = i("Ji1v"),
      ep = i("u3Vl"),
      eh = i("QGkM"),
      eg = i("NkHr"),
      em = i("A13y"),
      ef = i("p690"),
      ex = i("ex8A"),
      ev = i("uk1V"),
      eb = i("B1DJ"),
      e_ = i("ZU27"),
      ey = i("kYSX"),
      ew = i("Bbed"),
      ej = i("Sd8U"),
      eN = i("ZIh4")
    let eS = (0, ew._)(
        async () =>
          (await Promise.all([i.e(74692), i.e(1975), i.e(148321), i.e(1477), i.e(659370)]).then(i.bind(i, "JHKU")))
            .SitePreviewChat,
      ),
      eT = (0, m.un)(G.GD, ({ get: e }) => {
        let t = e(e_.It.activeTab$)
        return e(eN.IK) && null != t && (0, eN.Be)(t) ? t.props.resource : null
      })
    function eP() {
      let e,
        t,
        i,
        a,
        n,
        l,
        o,
        c,
        d,
        u,
        p,
        h = (0, r.c)(26),
        g = (0, m.gh)(G.GD),
        f = (0, m.Ul)(eT)
      if (null == f || "home" !== g.value.routeKind || null == g.value.draftThreadLocationId) return null
      if (h[0] !== f.projectId || h[1] !== g.value.clientThreadId || h[2] !== g.value.draftThreadLocationId) {
        let s = (0, ej.y8)(g.value.draftThreadLocationId, g.value.clientThreadId, f.projectId)
        ;((i = m.Ui),
          (o = ej.PR),
          (c = s),
          (t = m.Ui),
          (n = ey.gF),
          h[11] === Symbol.for("react.memo_cache_sentinel") ? ((l = { enabled: !1 }), (h[11] = l)) : (l = h[11]),
          (e = eS),
          (a = (0, ej.eL)(s)),
          (h[0] = f.projectId),
          (h[1] = g.value.clientThreadId),
          (h[2] = g.value.draftThreadLocationId),
          (h[3] = e),
          (h[4] = t),
          (h[5] = i),
          (h[6] = a),
          (h[7] = n),
          (h[8] = l),
          (h[9] = o),
          (h[10] = c))
      } else ((e = h[3]), (t = h[4]), (i = h[5]), (a = h[6]), (n = h[7]), (l = h[8]), (o = h[9]), (c = h[10]))
      return (
        h[12] !== e || h[13] !== f || h[14] !== a
          ? ((d = (0, s.jsx)(e, { resource: f }, a)), (h[12] = e), (h[13] = f), (h[14] = a), (h[15] = d))
          : (d = h[15]),
        h[16] !== t || h[17] !== n || h[18] !== l || h[19] !== d
          ? ((u = (0, s.jsx)(t, { scope: n, value: l, children: d })),
            (h[16] = t),
            (h[17] = n),
            (h[18] = l),
            (h[19] = d),
            (h[20] = u))
          : (u = h[20]),
        h[21] !== i || h[22] !== o || h[23] !== c || h[24] !== u
          ? ((p = (0, s.jsx)(i, { scope: o, value: c, children: u })),
            (h[21] = i),
            (h[22] = o),
            (h[23] = c),
            (h[24] = u),
            (h[25] = p))
          : (p = h[25]),
        p
      )
    }
    var eE = i("Ghh3"),
      eA = i("SQbA"),
      eM = i("TzYl")
    let eC = (0, m.vU)(B.u, ({ accountId: e, userId: t, projectId: i }) => ({
        queryKey: [...eA.APPGEN_PROJECT_QUERY_KEY, i, e, t],
        enabled: null != e && null != t,
        queryFn: ({ signal: s }) => {
          if (null == e || null == t) throw Error("Site enrichment requires a signed-in account")
          return (0, eA.fetchAppgenProject)(i, { signal: s, expectedIdentity: { accountId: e, userId: t } })
        },
        staleTime: X.D.THIRTY_SECONDS,
        retry: !1,
      })),
      eI = (0, m.N3)(B.u, ({ accountId: e, userId: t, query: i, view: s }) => ({
        queryKey: [...eA.APPGEN_PROJECTS_QUERY_KEY, "search", "global", e, t, i, s],
        enabled: null != e && null != t && "" !== i,
        initialPageParam: null,
        queryFn: async ({ pageParam: s, signal: r }) => {
          if (null == e || null == t) throw Error("Site search requires a signed-in account")
          null == s && (await new Promise((e) => setTimeout(e, 300)), r.throwIfAborted())
          let a = await eE.Request.safePost("/global/search", {
            requestBody: {
              query: i,
              cursor: s,
              limit: 20,
              scope: { ownership: "all" },
              source_requests: [
                {
                  type: "library",
                  filters: { lanes: ["document"], source: "generated", artifact_types: ["site"], include_sites: !0 },
                },
              ],
            },
            signal: r,
            expectedIdentity: { accountId: e, userId: t },
          })
          return {
            cursor: a.cursor,
            partial_results: a.partial_results ?? !1,
            items: a.items.flatMap((e) =>
              "site" === e.payload.kind && e.payload.live_url
                ? [
                    eh.BG.parse({
                      id: e.payload.project_id,
                      title: e.title,
                      slug: e.payload.slug ?? "",
                      live_url: e.payload.live_url ?? null,
                      screenshot_url: e.payload.library_file.thumbnail_url ?? null,
                      status: "active",
                      current_user_role: null,
                      updated_at: null == e.update_time ? "" : new Date(1e3 * e.update_time).toISOString(),
                      sharing: { access_mode: "custom", user_count: 0, group_count: 0, counts_available: !1 },
                    }),
                  ]
                : [],
            ),
          }
        },
        getNextPageParam: (e) => e.cursor ?? null,
        staleTime: 0,
        refetchOnMount: "always",
        retry: !1,
      })),
      ek = (0, m.i1)(B.u, ({ items: e, accountId: t, userId: i, view: s, pinsEnabled: r }, { get: a }) => {
        let n = [],
          l = new Set(),
          o = !1,
          c = !1
        for (let d of e) {
          let e = d.id,
            u = { accountId: t, userId: i, projectId: e },
            p = r ? a(eM.zb, u) : void 0,
            h = r ? a(eM.Uv, u) : void 0
          if ("pinned" === s && !0 !== h) {
            ;((o = o || p?.isPending === !0), (c = c || p?.isError === !0))
            continue
          }
          let g = a(eC, u)
          ;(g.isPending || g.isFetching) && l.add(e)
          let m = g.isSuccess && !g.isFetching ? g.data : void 0,
            f = null == m ? void 0 : (0, eh.f1)(m)
          n.push({
            ...d,
            ...f,
            current_user_role: m?.current_user_role ?? null,
            sharing: m?.access_policy == null ? d.sharing : (f?.sharing ?? d.sharing),
            is_pinned: h,
          })
        }
        return { projects: n, pendingEnrichment: l, isLoading: o, isError: c }
      })
    var eO = i("nJU9")
    function eL(e) {
      let t,
        i,
        a,
        n,
        l,
        o,
        p,
        h,
        y,
        N,
        S,
        P,
        E,
        M,
        k,
        L,
        F,
        U,
        G,
        Y,
        Q,
        $,
        J,
        ee,
        et,
        ei,
        es,
        er,
        ea,
        en,
        el,
        eo,
        ec,
        ed,
        eu,
        ep,
        eg,
        ex,
        ev,
        eb,
        e_,
        ey,
        ew = (0, r.c)(176),
        { collectionNavigation: ej, onNavigateToSite: eN, renderLayout: eS } = e,
        eT = (0, m.gh)(B.u),
        { data: eE, status: eA } = (0, R.P1)(),
        eC = (0, f.useRef)(!1)
      ew[0] !== eT
        ? ((t = () => {
            let e = eT.get(z.YV).submitCodexAnalyticsEvent
            eC.current || null == e || ((eC.current = !0), e({ eventKind: "appgen_my_apps_view" }))
          }),
          (ew[0] = eT),
          (ew[1] = t))
        : (t = ew[1])
      let eL = (0, f.useEffectEvent)(t)
      ;(ew[2] !== eE || ew[3] !== eA || ew[4] !== eL
        ? ((i = () => {
            "success" === eA && !0 === eE && eL()
          }),
          (ew[2] = eE),
          (ew[3] = eA),
          (ew[4] = eL),
          (ew[5] = i))
        : (i = ew[5]),
        ew[6] !== eE || ew[7] !== eA ? ((a = [eE, eA]), (ew[6] = eE), (ew[7] = eA), (ew[8] = a)) : (a = ew[8]),
        (0, f.useEffect)(i, a))
      let eY = (0, x.A)(),
        eW = (0, f.useId)(),
        eQ = (0, m.Ul)(H.GB),
        e$ = (0, K.Zj)("476199071"),
        eJ = (0, K.Zj)("1425956883"),
        e0 = (0, K.Zj)("sites-workspace-content-search"),
        [e2, e3] = (0, b.ok)(),
        e5 = (0, b.zy)(),
        e4 = new URL(ej?.href ?? e5.pathname + e5.search, "https://chatgpt.com"),
        e6 = null == ej ? e2 : e4.searchParams,
        e7 = (e, t) => {
          if (null == ej) e3(e, t)
          else {
            let i = e(new URLSearchParams(e6))
            ej.onNavigate(e4.pathname + (i.size > 0 ? `?${i}` : ""), t)
          }
        },
        e9 = "owned"
      ;(eJ && "pinned" === e6.get("view")
        ? (e9 = "pinned")
        : e$ &&
          ("shared" === e6.get("view") ? (e9 = "shared") : "all" === e6.get("view") && null != ej && (e9 = "all")),
        ej?.view != null && (e9 = ej.view))
      let [e8, te] = (0, f.useState)(""),
        tt = null == ej ? e8 : (e6.get("search") ?? "")
      ew[9] !== ej || ew[10] !== e7
        ? ((n = (e) => {
            null == ej
              ? te(e)
              : e7(
                  (t) => {
                    let i = new URLSearchParams(t)
                    return (e ? i.set("search", e) : i.delete("search"), i)
                  },
                  { replace: !0 },
                )
          }),
          (ew[9] = ej),
          (ew[10] = e7),
          (ew[11] = n))
        : (n = ew[11])
      let ti = n,
        { accountId: ts, userId: tr } = (0, _.As)(),
        ta = (0, m.Ul)(ef.x),
        tn = Array.from(tt.trim()).slice(0, 200).join(""),
        tl = "" !== tn
      ew[12] === Symbol.for("react.memo_cache_sentinel") ? ((l = { preview: !1 }), (ew[12] = l)) : (l = ew[12])
      let { data: to, isLoading: tc, isError: td } = (0, j.YL)(void 0, l),
        tu = to?.id === ts && ("workspace" === to.structure || "personal" === to.structure),
        tp = e0 && tl && tu && "workspace" === to.structure,
        th = tl ? { accountId: ts, userId: tr, query: tn } : void 0
      ew[13] !== ts || ew[14] !== tn || ew[15] !== tr
        ? ((o = { accountId: ts, userId: tr, query: tn }), (ew[13] = ts), (ew[14] = tn), (ew[15] = tr), (ew[16] = o))
        : (o = ew[16])
      let tg = "pinned" === e9 && (!tl || tu)
      ew[17] !== tg ? ((p = { enabled: tg }), (ew[17] = tg), (ew[18] = p)) : (p = ew[18])
      let {
        data: tm,
        error: tf,
        hasNextPage: tx,
        isFetchNextPageError: tv,
        isFetchingNextPage: tb,
        isLoading: t_,
        isError: ty,
        isRefetching: tw,
        fetchNextPage: tj,
        refetch: tN,
      } = (0, m._U)(eM.$B, o, p)
      ew[19] !== e$
        ? ((h = { ...eh.De, enabled: e$, staleTime: X.D.THIRTY_SECONDS }), (ew[19] = e$), (ew[20] = h))
        : (h = ew[20])
      let { data: tS, isLoading: tT } = (0, c.I)(h),
        tP = e$ && tS?.supports_editable_listing !== !1,
        tE = tl || ej?.view === "shared" || "pinned" === e9 || tP ? e9 : "owned",
        tA = "shared" === tE || "all" === tE,
        tM = tS?.enabled === !0 && tS.supports_workspace_listing,
        tC = tP && tA && tM,
        tI = !tp && tA && tT,
        {
          data: tk,
          error: tO,
          hasNextPage: tL,
          isFetchNextPageError: tq,
          isFetchingNextPage: tV,
          isLoading: tD,
          isError: tF,
          fetchNextPage: tU,
          refetch: tz,
        } = (0, d.q)({
          ...(null == th ? eh.av : (0, eh.Yj)("shared", th)),
          staleTime: null == th ? X.D.FIVE_MINUTES : 0,
          enabled: !tp && (!tl || tu) && "owned" !== tE && "pinned" !== tE && !tC && !tI && tP,
        }),
        tR = null == th ? eh.y : (0, eh.Yj)("owned", th),
        tB = null == th ? X.D.FIVE_MINUTES : 0,
        tG = (!tl || tu) && "shared" !== tE && "pinned" !== tE
      ew[21] !== tR || ew[22] !== tB || ew[23] !== tG
        ? ((y = { ...tR, staleTime: tB, enabled: tG }), (ew[21] = tR), (ew[22] = tB), (ew[23] = tG), (ew[24] = y))
        : (y = ew[24])
      let {
          data: tH,
          error: tK,
          hasNextPage: tX,
          isFetchNextPageError: tZ,
          isFetchingNextPage: tY,
          isLoading: tW,
          isError: tQ,
          isRefetching: t$,
          fetchNextPage: tJ,
          refetch: t1,
        } = (0, d.q)(y),
        t0 = tp ? "" : tn
      ew[25] !== t0 ? ((N = (0, eh.ME)(t0)), (ew[25] = t0), (ew[26] = N)) : (N = ew[26])
      let t2 = !tp && tC && (!tl || tu)
      ew[27] !== N || ew[28] !== t2
        ? ((S = { ...N, enabled: t2, staleTime: X.D.THIRTY_SECONDS }), (ew[27] = N), (ew[28] = t2), (ew[29] = S))
        : (S = ew[29])
      let {
        data: t3,
        error: t5,
        hasNextPage: t4,
        isFetchNextPageError: t6,
        isFetchingNextPage: t7,
        isLoading: t9,
        isError: t8,
        fetchNextPage: ie,
        refetch: it,
      } = (0, d.q)(S)
      ew[30] !== ts || ew[31] !== tE || ew[32] !== tn || ew[33] !== tr
        ? ((P = { accountId: ts, userId: tr, query: tn, view: tE }),
          (ew[30] = ts),
          (ew[31] = tE),
          (ew[32] = tn),
          (ew[33] = tr),
          (ew[34] = P))
        : (P = ew[34])
      let ii = P
      ew[35] !== tp ? ((E = { enabled: tp }), (ew[35] = tp), (ew[36] = E)) : (E = ew[36])
      let {
        data: is,
        error: ir,
        hasNextPage: ia,
        isFetchNextPageError: il,
        isFetchingNextPage: io,
        isLoading: ic,
        isError: id,
        isRefetching: iu,
        fetchNextPage: ip,
        refetch: ih,
      } = (0, m._U)(eI, ii, E)
      ew[37] !== ir || ew[38] !== id || ew[39] !== il || ew[40] !== iu
        ? ((M = eX(ir) || iu || (id && !il)), (ew[37] = ir), (ew[38] = id), (ew[39] = il), (ew[40] = iu), (ew[41] = M))
        : (M = ew[41])
      let ig = M
      ew[42] !== ig || ew[43] !== is?.pages
        ? ((k = ig ? [] : g()(is?.pages.flatMap(eK) ?? [], "id")), (ew[42] = ig), (ew[43] = is?.pages), (ew[44] = k))
        : (k = ew[44])
      let im = k
      ew[45] !== im || ew[46] !== eJ || ew[47] !== ii
        ? ((L = { ...ii, items: im, pinsEnabled: eJ }), (ew[45] = im), (ew[46] = eJ), (ew[47] = ii), (ew[48] = L))
        : (L = ew[48])
      let ix = (0, m._U)(tp ? ek : null, L),
        iv = (0, u.jE)()
      ew[49] !== ej ||
      ew[50] !== tp ||
      ew[51] !== tq ||
      ew[52] !== iv ||
      ew[53] !== tE ||
      ew[54] !== e7 ||
      ew[55] !== tO ||
      ew[56] !== tC
        ? ((F = () => {
            !tp &&
              ej?.view !== "shared" &&
              "owned" !== tE &&
              "pinned" !== tE &&
              !tC &&
              !tq &&
              tO instanceof Z.fk &&
              400 === tO.status &&
              (iv.setQueryData(eh.De.queryKey, eH),
              e7(
                (e) => {
                  let t = new URLSearchParams(e)
                  return (null == ej ? t.delete("view") : null == ej.view && t.set("view", "owned"), t)
                },
                { replace: !0 },
              ))
          }),
          (ew[49] = ej),
          (ew[50] = tp),
          (ew[51] = tq),
          (ew[52] = iv),
          (ew[53] = tE),
          (ew[54] = e7),
          (ew[55] = tO),
          (ew[56] = tC),
          (ew[57] = F))
        : (F = ew[57])
      let ib = (0, f.useEffectEvent)(F)
      ;(ew[58] !== ib
        ? ((U = () => {
            ib()
          }),
          (ew[58] = ib),
          (ew[59] = U))
        : (U = ew[59]),
        ew[60] !== tp || ew[61] !== tq || ew[62] !== iv || ew[63] !== tE || ew[64] !== tO || ew[65] !== tC
          ? ((G = [tp, iv, tE, tC, tO, tq]),
            (ew[60] = tp),
            (ew[61] = tq),
            (ew[62] = iv),
            (ew[63] = tE),
            (ew[64] = tO),
            (ew[65] = tC),
            (ew[66] = G))
          : (G = ew[66]),
        (0, f.useEffect)(U, G))
      let i_ = {
          hasNextPage: tx,
          isFetchNextPageError: tv,
          isFetchingNextPage: tb,
          isLoading: t_,
          isError: ty,
          fetchNextPage: tj,
          refetch: tN,
        },
        iy = {
          hasNextPage: tX,
          isFetchNextPageError: tZ,
          isFetchingNextPage: tY,
          isLoading: tW,
          isError: tQ,
          fetchNextPage: tJ,
          refetch: t1,
        },
        iw = tC
          ? {
              hasNextPage: t4,
              isFetchNextPageError: t6,
              isFetchingNextPage: t7,
              isLoading: t9,
              isError: t8,
              fetchNextPage: ie,
              refetch: it,
            }
          : {
              hasNextPage: tL,
              isFetchNextPageError: tq,
              isFetchingNextPage: tV,
              isLoading: tD,
              isError: tF,
              fetchNextPage: tU,
              refetch: tz,
            },
        ij = tp
          ? [
              {
                hasNextPage: ia,
                isFetchNextPageError: il,
                isFetchingNextPage: io,
                isLoading: ic || iu || ix?.isLoading === !0,
                isError: id || ix?.isError === !0,
                fetchNextPage:
                  ir instanceof Z.fk &&
                  400 === ir.status &&
                  ir.diagnosticError instanceof w.rX &&
                  "Invalid global search cursor" === ir.diagnosticError.detail
                    ? () => iv.resetQueries({ queryKey: eT.query.getOptions(eI, ii).queryKey, exact: !0 })
                    : ip,
                refetch: ih,
              },
              ...{ pinned: [i_], owned: [iy], all: [iy], shared: [] }[tE],
            ]
          : { pinned: [i_], all: [iy, iw], owned: [iy], shared: [iw] }[tE],
        iN = ij.some(eG),
        iS = ij.some(eB),
        iT = ij.some(eR),
        iP = (tl && !tu && tc) || tI || ij.some(ez),
        iE = (e) => {
          let t = void 0 !== e && e
          for (let e of ij) e.hasNextPage && !e.isFetchingNextPage && e.isFetchNextPageError === t && e.fetchNextPage()
        },
        iA = (0, D.p8)()
      ew[67] !== tn
        ? ((Y = (e) => {
            let t = tn.toLowerCase()
            return (
              e.title.toLowerCase().includes(t) ||
              e.slug.toLowerCase().includes(t) ||
              e.description?.toLowerCase().includes(t) === !0
            )
          }),
          (ew[67] = tn),
          (ew[68] = Y))
        : (Y = ew[68])
      let iM = Y
      if (
        ew[69] !== ix?.projects ||
        ew[70] !== tp ||
        ew[71] !== tl ||
        ew[72] !== iM ||
        ew[73] !== tK ||
        ew[74] !== t$ ||
        ew[75] !== tH ||
        ew[76] !== tf ||
        ew[77] !== tw ||
        ew[78] !== tm ||
        ew[79] !== tu ||
        ew[80] !== tE ||
        ew[81] !== tO ||
        ew[82] !== tk ||
        ew[83] !== t5 ||
        ew[84] !== t3 ||
        ew[85] !== tC
      ) {
        let e,
          t = eX(tK) ? void 0 : tH?.map(eU)
        ew[87] !== tf || ew[88] !== tm
          ? ((e = eX(tf) ? void 0 : tm), (ew[87] = tf), (ew[88] = tm), (ew[89] = e))
          : (e = ew[89])
        let i = e,
          s = tC ? t5 : tO,
          r = tC ? t3 : tk
        if ((eX(s) && (r = void 0), (Q = "owned" === tE ? t : r), tl && !tu)) Q = void 0
        else if (tp) {
          let e,
            s = []
          ;("pinned" !== tE || tw ? ("owned" !== tE && "all" !== tE) || t$ || (s = t ?? []) : (s = i ?? []),
            ew[90] !== iM
              ? ((e = (e) => null == e.live_url && "owner" === e.current_user_role && iM(e)),
                (ew[90] = iM),
                (ew[91] = e))
              : (e = ew[91]),
            (Q = g()([...(ix?.projects.filter(eF) ?? []), ...s.filter(e)], "id")))
        } else
          "pinned" === tE ? (Q = i) : "all" === tE && (Q = g()([...(t?.filter(iM) ?? []), ...(r ?? [])], "id").sort(eD))
        ;((ew[69] = ix?.projects),
          (ew[70] = tp),
          (ew[71] = tl),
          (ew[72] = iM),
          (ew[73] = tK),
          (ew[74] = t$),
          (ew[75] = tH),
          (ew[76] = tf),
          (ew[77] = tw),
          (ew[78] = tm),
          (ew[79] = tu),
          (ew[80] = tE),
          (ew[81] = tO),
          (ew[82] = tk),
          (ew[83] = t5),
          (ew[84] = t3),
          (ew[85] = tC),
          (ew[86] = Q))
      } else Q = ew[86]
      ew[92] !== tp || ew[93] !== iM || ew[94] !== Q || ew[95] !== tE || ew[96] !== tC
        ? (($ =
            Q?.filter(
              (e) =>
                tp || (("shared" !== tE || tC || "owner" !== e.current_user_role) && ("pinned" === tE || tC || iM(e))),
            ) ?? null),
          (ew[92] = tp),
          (ew[93] = iM),
          (ew[94] = Q),
          (ew[95] = tE),
          (ew[96] = tC),
          (ew[97] = $))
        : ($ = ew[97])
      let iC = $,
        iI = (tl && !tu && td) || ij.some(eV),
        ik = eY.formatMessage({
          id: "appgenPage.sites.search",
          defaultMessage: "Search sites",
          description: "Accessible label and placeholder for searching Sites",
        })
      ew[98] !== ej?.state || ew[99] !== eT || ew[100] !== iA
        ? ((J = () => {
            ;((0, W.Q_)(eT, {
              action: W.lX.CODEX_APPGEN_INTERACTION_ACTION_CREATE_SITE_CLICKED,
              source: W.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
            }),
              (0, eO.$)(eT, iA, { type: "create" }, ej?.state))
          }),
          (ew[98] = ej?.state),
          (ew[99] = eT),
          (ew[100] = iA),
          (ew[101] = J))
        : (J = ew[101])
      let iO = J
      ew[102] !== ej?.state || ew[103] !== eT || ew[104] !== iA
        ? ((ee = (e, t, i) => {
            ;(0, eO.$)(
              eT,
              iA,
              {
                type: void 0 === i ? "edit" : i,
                liveUrl: t,
                projectId: e.id,
                projectTitle: e.title,
                latestEditContext: e.latest_edit_context,
              },
              ej?.state,
            )
          }),
          (ew[102] = ej?.state),
          (ew[103] = eT),
          (ew[104] = iA),
          (ew[105] = ee))
        : (ee = ew[105])
      let iL = ee
      ew[106] !== ts ||
      ew[107] !== td ||
      ew[108] !== ij ||
      ew[109] !== im ||
      ew[110] !== tp ||
      ew[111] !== tl ||
      ew[112] !== iv ||
      ew[113] !== eT ||
      ew[114] !== tu ||
      ew[115] !== tE ||
      ew[116] !== tr
        ? ((et = () => {
            if (
              (tl && !tu && td && iv.invalidateQueries({ queryKey: ["accounts", "check"], exact: !0 }),
              tp && "pinned" === tE)
            )
              for (let e of im) eT.get(eM.zb, { accountId: ts, userId: tr, projectId: e.id }).refetch()
            for (let e of ij) e.refetch()
          }),
          (ew[106] = ts),
          (ew[107] = td),
          (ew[108] = ij),
          (ew[109] = im),
          (ew[110] = tp),
          (ew[111] = tl),
          (ew[112] = iv),
          (ew[113] = eT),
          (ew[114] = tu),
          (ew[115] = tE),
          (ew[116] = tr),
          (ew[117] = et))
        : (et = ew[117])
      let iq = et,
        iV = ej?.view == null && (tP || eJ)
      ew[118] !== ej ||
      ew[119] !== tP ||
      ew[120] !== eY ||
      ew[121] !== eW ||
      ew[122] !== eJ ||
      ew[123] !== eT ||
      ew[124] !== tE ||
      ew[125] !== e7 ||
      ew[126] !== iV
        ? ((ei = iV
            ? (0, s.jsx)(q.t, {
                ariaLabel: eY.formatMessage({
                  id: "appgenPage.views.label",
                  defaultMessage: "Site views",
                  description: "Accessible label for switching between owned, shared, and pinned sites",
                }),
                tabs: [
                  {
                    key: "owned",
                    panelId: `${eW}-owned`,
                    name:
                      null == ej
                        ? (0, s.jsx)(v.A, {
                            id: "appgenPage.ownership.owned",
                            defaultMessage: "Owned by you",
                            description: "Tab listing sites owned by the current user",
                          })
                        : (0, s.jsx)(v.A, {
                            id: "appgenPage.ownership.yours",
                            defaultMessage: "Your sites",
                            description: "Tab listing sites owned by the current user",
                          }),
                  },
                  ...(eJ
                    ? [
                        {
                          key: "pinned",
                          panelId: `${eW}-pinned`,
                          name: (0, s.jsx)(v.A, {
                            id: "appgenPage.pins.tab",
                            defaultMessage: "Pinned",
                            description: "Tab listing the current user's pinned sites",
                          }),
                        },
                      ]
                    : []),
                  ...(tP
                    ? [
                        {
                          key: "shared",
                          panelId: `${eW}-shared`,
                          name: (0, s.jsx)(v.A, {
                            id: "appgenPage.ownership.shared",
                            defaultMessage: "Shared with you",
                            description: "Tab listing sites shared with the current user",
                          }),
                        },
                      ]
                    : []),
                  ...(null != ej && tP
                    ? [
                        {
                          key: "all",
                          panelId: `${eW}-all`,
                          name: (0, s.jsx)(v.A, {
                            id: "appgenPage.ownership.all",
                            defaultMessage: "All",
                            description: "Tab listing owned sites and sites shared with the current user",
                          }),
                        },
                      ]
                    : []),
                ],
                selectedKey: tE,
                variant: "browse",
                scrollable: !0,
                onSelect: (e) => {
                  ;("pinned" === e &&
                    "pinned" !== tE &&
                    (0, W.Ju)(eT, { action: W.in.CODEX_SITES_PINS_INTERACTION_ACTION_PINNED_TAB_SELECTED }),
                    te(""),
                    e7((t) => {
                      let i = new URLSearchParams(t)
                      return (
                        i.delete("search"),
                        "all" === e || "shared" === e || "pinned" === e || (null != ej && "owned" === e)
                          ? i.set("view", e)
                          : i.delete("view"),
                        i
                      )
                    }))
                },
              })
            : void 0),
          (ew[118] = ej),
          (ew[119] = tP),
          (ew[120] = eY),
          (ew[121] = eW),
          (ew[122] = eJ),
          (ew[123] = eT),
          (ew[124] = tE),
          (ew[125] = e7),
          (ew[126] = iV),
          (ew[127] = ei))
        : (ei = ew[127])
      let iD = ei,
        iF = iV ? `${eW}-${tE}` : void 0,
        iU = iV ? `${eW}-${tE}-tab` : void 0,
        iz = iV ? "tabpanel" : void 0,
        iR = iV ? 0 : void 0
      ;(ew[128] !== eY
        ? ((es = eY.formatMessage({
            id: "appgenPage.title",
            defaultMessage: "Sites",
            description: "Header title for the Sites page",
          })),
          (ew[128] = eY),
          (ew[129] = es))
        : (es = ew[129]),
        ew[130] !== es ? ((er = (0, s.jsx)(V.Q, { title: es })), (ew[130] = es), (ew[131] = er)) : (er = ew[131]),
        ew[132] !== is?.pages || ew[133] !== iq || ew[134] !== tp
          ? ((ea =
              tp && is?.pages.some(eq)
                ? (0, s.jsxs)("div", {
                    className: "flex items-center gap-3 px-6 py-4 text-secondary",
                    role: "status",
                    children: [
                      (0, s.jsx)(v.A, {
                        id: "appgenPage.search.incomplete",
                        defaultMessage: "Some search results could not be loaded",
                        description: "Search remains usable, but some matches may be missing",
                      }),
                      (0, s.jsx)(T.$, {
                        color: "ghost",
                        onClick: iq,
                        children: (0, s.jsx)(v.A, {
                          id: "appgenPage.search.retryIncomplete",
                          defaultMessage: "Retry",
                          description: "Retry an incomplete Sites search",
                        }),
                      }),
                    ],
                  })
                : null),
            (ew[132] = is?.pages),
            (ew[133] = iq),
            (ew[134] = tp),
            (ew[135] = ea))
          : (ea = ew[135]))
      let iB =
        tp || ej?.view !== "shared" || tP
          ? (0, s.jsx)(eZ, {
              pendingEnrichment: tp ? ix?.pendingEnrichment : void 0,
              onNavigateToSite: eN,
              pinned: "pinned" === tE,
              hasNextPage: iN,
              isFetchNextPageError: iS,
              isFetchingNextPage: iT,
              isLoading: iP,
              projects: iI && !iC?.length ? null : iC,
              emptyStateShared: "shared" === tE,
              searchQuery: tt.trim(),
              shared: "owned" !== tE,
              viewMode: ta,
              onCreate: iO,
              onEdit: iL,
              onLoadNextPage: () => {
                iE()
              },
              onRetryNextPage: () => iE(!0),
              onRetry: iq,
            })
          : (0, s.jsx)(C.A, {
              title: (0, s.jsx)(v.A, {
                id: "appgenPage.shared.unavailable",
                defaultMessage: "Shared sites aren’t available right now",
                description:
                  "Shown when a Space shared collection cannot use the Sites shared listing; owned sites are not substituted",
              }),
            })
      ;(ew[136] !== iq || ew[137] !== iI || ew[138] !== iC?.length
        ? ((en = iI && iC?.length ? (0, s.jsx)(e1, { onRetry: iq }) : null),
          (ew[136] = iq),
          (ew[137] = iI),
          (ew[138] = iC?.length),
          (ew[139] = en))
        : (en = ew[139]),
        ew[140] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, s.jsx)(eP, {})), (ew[140] = el))
          : (el = ew[140]),
        ew[141] !== iF ||
        ew[142] !== iU ||
        ew[143] !== iz ||
        ew[144] !== iR ||
        ew[145] !== er ||
        ew[146] !== ea ||
        ew[147] !== iB ||
        ew[148] !== en
          ? ((eo = (0, s.jsxs)("div", {
              id: iF,
              "aria-labelledby": iU,
              role: iz,
              tabIndex: iR,
              className: "mx-auto flex min-h-full w-full flex-1 flex-col bg-surface",
              children: [er, ea, iB, en, el],
            })),
            (ew[141] = iF),
            (ew[142] = iU),
            (ew[143] = iz),
            (ew[144] = iR),
            (ew[145] = er),
            (ew[146] = ea),
            (ew[147] = iB),
            (ew[148] = en),
            (ew[149] = eo))
          : (eo = ew[149]))
      let iG = eo
      ew[150] !== eT || ew[151] !== ta
        ? ((ec = (e) => {
            e !== ta && ((0, W.Dg)(eT, e), eT.set(ef.x, e))
          }),
          (ew[150] = eT),
          (ew[151] = ta),
          (ew[152] = ec))
        : (ec = ew[152])
      let iH = ec
      if (null != eS)
        return eS({
          tabs: iD,
          children: iG,
          searchQuery: tt,
          onSearchQueryChange: ti,
          searchPlaceholder: ik,
          searchMaxLength: 200,
          viewMode: ta,
          onViewModeChange: iH,
        })
      ew[153] === Symbol.for("react.memo_cache_sentinel")
        ? ((ed = { 16: A.D_h, 20: A.sqn }), (ew[153] = ed))
        : (ed = ew[153])
      let iK = eQ ? "browser:max-md:sr-only" : void 0
      return (
        ew[154] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = (0, s.jsx)(v.A, {
              id: "appgenPage.createSite",
              defaultMessage: "Create Site",
              description: "Button label for starting a new site from the Sites page",
            })),
            (ew[154] = eu))
          : (eu = ew[154]),
        ew[155] !== iK
          ? ((ep = (0, s.jsx)("span", { className: iK, children: eu })), (ew[155] = iK), (ew[156] = ep))
          : (ep = ew[156]),
        ew[157] !== iO || ew[158] !== eQ || ew[159] !== ep
          ? ((eg = (0, s.jsx)(I.p, { color: "primary", icon: ed, onClick: iO, squareOnMobile: eQ, children: ep })),
            (ew[157] = iO),
            (ew[158] = eQ),
            (ew[159] = ep),
            (ew[160] = eg))
          : (eg = ew[160]),
        ew[161] === Symbol.for("react.memo_cache_sentinel")
          ? ((ex = (0, s.jsx)(v.A, {
              id: "appgenPage.title",
              defaultMessage: "Sites",
              description: "Header title for the Sites page",
            })),
            (ev = (0, s.jsx)(v.A, {
              id: "codexAppgenAnnouncementModal.title",
              defaultMessage: "Turn your ideas into live websites",
              description: "Title for the Sites announcement modal",
            })),
            (ew[161] = ex),
            (ew[162] = ev))
          : ((ex = ew[161]), (ev = ew[162])),
        ew[163] !== ik || ew[164] !== tt || ew[165] !== ti
          ? ((eb = {
              id: "appgen-site-search",
              autoFocus: !1,
              variant: "toolbar-compact",
              label: ik,
              maxLength: 200,
              onSearchQueryChange: ti,
              placeholder: ik,
              searchQuery: tt,
            }),
            (ew[163] = ik),
            (ew[164] = tt),
            (ew[165] = ti),
            (ew[166] = eb))
          : (eb = ew[166]),
        ew[167] !== iH || ew[168] !== ta
          ? ((e_ = (0, s.jsx)(em.V, { viewMode: ta, onViewModeChange: iH })),
            (ew[167] = iH),
            (ew[168] = ta),
            (ew[169] = e_))
          : (e_ = ew[169]),
        ew[170] !== iG || ew[171] !== eg || ew[172] !== eb || ew[173] !== e_ || ew[174] !== iD
          ? ((ey = (0, s.jsx)("div", {
              className: "flex h-full min-h-0 flex-col bg-surface",
              children: (0, s.jsx)(O.Ql, {
                animateContentLayout: !1,
                collapseHeaderOnScroll: !0,
                expandSearchWhenWrapped: !0,
                contentClassName: "bg-surface",
                contentWidth: "extraWide",
                headerPlacement: "sticky",
                headerVariant: "compact",
                headerAction: eg,
                stickyControls: iD,
                title: ex,
                subtitle: ev,
                search: eb,
                searchToolbar: e_,
                children: iG,
              }),
            })),
            (ew[170] = iG),
            (ew[171] = eg),
            (ew[172] = eb),
            (ew[173] = e_),
            (ew[174] = iD),
            (ew[175] = ey))
          : (ey = ew[175]),
        ey
      )
    }
    function eq(e) {
      return e.partial_results
    }
    function eV(e) {
      return e.isError && !e.isFetchNextPageError
    }
    function eD(e, t) {
      return Date.parse(t.updated_at) - Date.parse(e.updated_at)
    }
    function eF(e) {
      return null != e.live_url
    }
    function eU(e) {
      return { ...e, current_user_role: e.current_user_role ?? "owner" }
    }
    function ez(e) {
      return e.isLoading
    }
    function eR(e) {
      return e.isFetchingNextPage
    }
    function eB(e) {
      return e.isFetchNextPageError
    }
    function eG(e) {
      return e.hasNextPage && !e.isFetchNextPageError
    }
    function eH(e) {
      return null == e ? e : { ...e, supports_editable_listing: !1 }
    }
    function eK(e) {
      return e.items
    }
    function eX(e) {
      return e instanceof Z.fk && (401 === e.status || 403 === e.status)
    }
    function eZ(e) {
      let t,
        i,
        a,
        n = (0, r.c)(28),
        {
          pendingEnrichment: l,
          emptyStateShared: o,
          hasNextPage: c,
          isFetchNextPageError: d,
          isFetchingNextPage: u,
          isLoading: p,
          onCreate: h,
          onEdit: g,
          onNavigateToSite: m,
          onLoadNextPage: f,
          onRetryNextPage: x,
          onRetry: b,
          pinned: _,
          projects: y,
          searchQuery: w,
          shared: j,
          viewMode: N,
        } = e,
        S = void 0 === x ? f : x,
        P = void 0 !== _ && _
      if (p && !y?.length) {
        let e
        return (
          n[0] !== j || n[1] !== N
            ? ((e = (0, s.jsx)(eY, { shared: j, viewMode: N })), (n[0] = j), (n[1] = N), (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (null == y) {
        let e
        return (n[3] !== b ? ((e = (0, s.jsx)(e1, { onRetry: b })), (n[3] = b), (n[4] = e)) : (e = n[4]), e)
      }
      if (0 === y.length && !c && !d) {
        let e
        return (
          n[5] !== o || n[6] !== h || n[7] !== P || n[8] !== w || n[9] !== j
            ? ((e =
                w.length > 0
                  ? (0, s.jsx)(k.H, { query: w })
                  : (0, s.jsx)(eJ, { pinned: P, onCreate: h, shared: o ?? j })),
              (n[5] = o),
              (n[6] = h),
              (n[7] = P),
              (n[8] = w),
              (n[9] = j),
              (n[10] = e))
            : (e = n[10]),
          e
        )
      }
      let E = p || u
      return (
        n[11] !== c ||
        n[12] !== g ||
        n[13] !== f ||
        n[14] !== m ||
        n[15] !== l ||
        n[16] !== y ||
        n[17] !== j ||
        n[18] !== E ||
        n[19] !== N
          ? ((t = (0, s.jsx)(e0, {
              pendingEnrichment: l,
              projects: y,
              hasNextPage: c,
              isLoading: E,
              onEdit: g,
              onNavigateToSite: m,
              onLoadNextPage: f,
              shared: j,
              viewMode: N,
            })),
            (n[11] = c),
            (n[12] = g),
            (n[13] = f),
            (n[14] = m),
            (n[15] = l),
            (n[16] = y),
            (n[17] = j),
            (n[18] = E),
            (n[19] = N),
            (n[20] = t))
          : (t = n[20]),
        n[21] !== d || n[22] !== u || n[23] !== S
          ? ((i = d
              ? (0, s.jsxs)("div", {
                  className: "flex items-center justify-center gap-3 py-6 text-sm text-secondary",
                  role: "alert",
                  children: [
                    (0, s.jsx)(v.A, {
                      id: "appgenPage.pagination.error",
                      defaultMessage: "Unable to load more sites",
                      description:
                        "Error below the Sites list when a later page fails to load and the list may be incomplete",
                    }),
                    (0, s.jsx)(T.$, {
                      color: "outline",
                      size: "toolbar",
                      loading: u,
                      onClick: S,
                      children: (0, s.jsx)(v.A, {
                        id: "appgenPage.pagination.retry",
                        defaultMessage: "Retry",
                        description:
                          "Button to retry loading the failed next page of Sites without reloading already loaded sites",
                      }),
                    }),
                  ],
                })
              : null),
            (n[21] = d),
            (n[22] = u),
            (n[23] = S),
            (n[24] = i))
          : (i = n[24]),
        n[25] !== t || n[26] !== i
          ? ((a = (0, s.jsxs)(s.Fragment, { children: [t, i] })), (n[25] = t), (n[26] = i), (n[27] = a))
          : (a = n[27]),
        a
      )
    }
    function eY(e) {
      let t,
        i,
        a,
        n,
        l = (0, r.c)(12),
        { shared: o, viewMode: c } = e,
        d = (0, K.Zj)("262557526"),
        u = (0, K.Zj)("60299493"),
        h = (0, f.useId)()
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(v.A, {
              id: "appgenPage.loading",
              defaultMessage: "Loading sites",
              description: "Accessible status while the Sites page is loading",
            })),
            (l[0] = t))
          : (t = l[0]),
        l[1] !== h
          ? ((i = (0, s.jsx)("h2", { id: h, className: "sr-only", children: t })), (l[1] = h), (l[2] = i))
          : (i = l[2]),
        l[3] !== d || l[4] !== o || l[5] !== u || l[6] !== c
          ? ((a =
              "grid" === c
                ? (0, s.jsx)("div", {
                    className: "grid grid-cols-1 gap-6 pt-4 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4",
                    children: Array.from({ length: 6 }, eW),
                  })
                : (0, s.jsx)("div", {
                    className: "@container",
                    children: (0, s.jsxs)("div", {
                      className: (0, p.A)("grid", e6(o, !o && d && u)),
                      children: [
                        (0, s.jsx)(e7, { shared: o }),
                        Array.from({ length: 7 }, (e, t) => (0, s.jsx)(e$, { shared: o }, t)),
                      ],
                    }),
                  })),
            (l[3] = d),
            (l[4] = o),
            (l[5] = u),
            (l[6] = c),
            (l[7] = a))
          : (a = l[7]),
        l[8] !== h || l[9] !== i || l[10] !== a
          ? ((n = (0, s.jsxs)("section", {
              "aria-busy": "true",
              "aria-labelledby": h,
              className: "@container pb-3",
              "data-testid": "sites-loading-skeleton",
              role: "status",
              children: [i, a],
            })),
            (l[8] = h),
            (l[9] = i),
            (l[10] = a),
            (l[11] = n))
          : (n = l[11]),
        n
      )
    }
    function eW(e, t) {
      return (0, s.jsx)(eQ, {}, t)
    }
    function eQ() {
      let e,
        t,
        i = (0, r.c)(2)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(L.X, {
              className: "min-h-0 w-full flex-1 rounded-none",
              size: "fill",
              variant: "chatgpt-project",
            })),
            (i[0] = e))
          : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsxs)("div", {
              "aria-hidden": !0,
              className: "flex h-64 flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-card",
              children: [
                e,
                (0, s.jsxs)("div", {
                  className: "flex h-16 shrink-0 items-center justify-between border-t border-subtle px-3",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        (0, s.jsx)(L.X, { className: "w-28 max-w-[75%]", size: "sm", variant: "chatgpt-project" }),
                        (0, s.jsx)(L.X, { className: "mt-2 w-36 max-w-[90%]", size: "sm", variant: "chatgpt-project" }),
                      ],
                    }),
                    (0, s.jsx)(L.X, { className: "ms-3 size-6 shrink-0", size: "fill", variant: "chatgpt-project" }),
                  ],
                }),
              ],
            })),
            (i[1] = t))
          : (t = i[1]),
        t
      )
    }
    function e$(e) {
      let t,
        i,
        a,
        n,
        l,
        o,
        c,
        d = (0, r.c)(13),
        { shared: u } = e,
        p = (0, K.Zj)("262557526"),
        h = (0, K.Zj)("60299493")
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(L.X, { className: "h-[50px] w-20 shrink-0", size: "fill", variant: "chatgpt-project" })),
            (d[0] = t))
          : (t = d[0]),
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsxs)("div", {
              className: "flex min-w-0 items-center gap-4",
              children: [
                t,
                (0, s.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    (0, s.jsx)(L.X, { className: "w-44 max-w-[58%]", size: "sm", variant: "chatgpt-project" }),
                    (0, s.jsx)(L.X, { className: "mt-2 w-24", size: "sm", variant: "chatgpt-project" }),
                  ],
                }),
              ],
            })),
            (d[1] = i))
          : (i = d[1]),
        d[2] !== u
          ? ((a = u
              ? (0, s.jsxs)("div", {
                  className: "hidden min-w-0 items-center gap-2 ps-4 [@container_(min-width:521px)]:flex",
                  children: [
                    (0, s.jsx)(L.X, { className: "size-5 shrink-0", size: "fill", variant: "chatgpt-project" }),
                    (0, s.jsx)(L.X, { className: "w-20", size: "sm", variant: "chatgpt-project" }),
                  ],
                })
              : null),
            (d[2] = u),
            (d[3] = a))
          : (a = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)("div", {
              className: "hidden min-w-0 ps-4 [@container_(min-width:521px)]:block",
              children: (0, s.jsx)(L.X, { className: "w-20", size: "sm", variant: "chatgpt-project" }),
            })),
            (d[4] = n))
          : (n = d[4]),
        d[5] !== p || d[6] !== u || d[7] !== h
          ? ((l =
              !u && p && h
                ? (0, s.jsx)("div", {
                    className: "hidden min-w-0 ps-4 [@container_(min-width:721px)]:block",
                    children: (0, s.jsx)(L.X, { className: "w-20", size: "sm", variant: "chatgpt-project" }),
                  })
                : null),
            (d[5] = p),
            (d[6] = u),
            (d[7] = h),
            (d[8] = l))
          : (l = d[8]),
        d[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsxs)(eu.o, {
              children: [
                (0, s.jsx)(L.X, {
                  className: "h-9 w-[84px] [@container_(max-width:520px)]:hidden",
                  size: "fill",
                  variant: "chatgpt-project",
                }),
                (0, s.jsx)(L.X, { className: "size-9", size: "fill", variant: "chatgpt-project" }),
              ],
            })),
            (d[9] = o))
          : (o = d[9]),
        d[10] !== a || d[11] !== l
          ? ((c = (0, s.jsxs)("div", {
              "aria-hidden": !0,
              className: "col-span-full grid min-h-[82px] grid-cols-subgrid items-center px-4 py-4",
              children: [i, a, n, l, o],
            })),
            (d[10] = a),
            (d[11] = l),
            (d[12] = c))
          : (c = d[12]),
        c
      )
    }
    function eJ(e) {
      let t,
        i,
        a,
        n,
        l,
        c = (0, r.c)(14),
        { onCreate: d, pinned: u, shared: p } = e,
        h = void 0 !== u && u,
        g = void 0 !== p && p
      if (h) {
        let e, r
        ;(c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(v.A, {
              id: "appgenPage.pins.empty.title",
              defaultMessage: "No pinned sites yet",
              description: "Empty state title when the user has not pinned any sites",
            })),
            (c[0] = e))
          : (e = c[0]),
          (t = e),
          c[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, s.jsx)(v.A, {
                id: "appgenPage.pins.empty.description",
                defaultMessage: "Choose “Pin” from a site's menu to find it here",
                description: "Instructions for adding sites to the empty Pinned tab",
              })),
              (c[1] = r))
            : (r = c[1]),
          (i = r))
      } else if (g) {
        let e
        ;(c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(v.A, {
              id: "appgenPage.shared.empty.title",
              defaultMessage: "No sites shared with you",
              description: "Empty state title for Sites shared with the current user",
            })),
            (c[2] = e))
          : (e = c[2]),
          (t = e))
      } else {
        let e, r
        ;(c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(v.A, {
              id: "appgenPage.empty.title",
              defaultMessage: "No sites yet",
              description: "Empty state title for the Sites page",
            })),
            (c[3] = e))
          : (e = c[3]),
          (t = e),
          c[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, s.jsx)(v.A, {
                id: "appgenPage.empty.description",
                defaultMessage:
                  "Build websites and apps with databases and sign-in—try “Build a team dashboard” or “Create an event signup page”",
                description:
                  "Explanation shown to a first-time Sites user: they can create websites and applications with databases and authentication by asking for a team dashboard or event signup page",
              })),
              (c[4] = r))
            : (r = c[4]),
          (i = r))
      }
      return (
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)("span", {
              className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft",
              children: (0, s.jsx)(E.I, { asset: o.H }),
            })),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== d || c[7] !== h || c[8] !== g
          ? ((n =
              g || h
                ? void 0
                : (0, s.jsx)(T.$, {
                    color: "primary",
                    size: "toolbar",
                    onClick: d,
                    children: (0, s.jsx)(v.A, {
                      id: "appgenPage.empty.create",
                      defaultMessage: "Create new site",
                      description: "Button label for creating a new site from the empty state",
                    }),
                  })),
            (c[6] = d),
            (c[7] = h),
            (c[8] = g),
            (c[9] = n))
          : (n = c[9]),
        c[10] !== i || c[11] !== n || c[12] !== t
          ? ((l = (0, s.jsx)(C.A, {
              className: "max-w-lg self-center text-balance select-none",
              layout: "page",
              spacing: "default",
              illustration: a,
              title: t,
              description: i,
              actions: n,
            })),
            (c[10] = i),
            (c[11] = n),
            (c[12] = t),
            (c[13] = l))
          : (l = c[13]),
        l
      )
    }
    function e1(e) {
      let t,
        i,
        a,
        n = (0, r.c)(4),
        { onRetry: l } = e
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(v.A, {
              id: "appgenPage.error.title",
              defaultMessage: "Unable to load sites",
              description: "Error state title for the Sites page",
            })),
            (n[0] = t))
          : (t = n[0]),
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(v.A, {
              id: "appgenPage.error.retry",
              defaultMessage: "Retry",
              description: "Button label in the Sites error state that retries loading the user's Sites list",
            })),
            (n[1] = i))
          : (i = n[1]),
        n[2] !== l
          ? ((a = (0, s.jsx)(C.A, {
              layout: "browse",
              title: t,
              actions: (0, s.jsx)(T.$, { color: "primary", size: "toolbar", onClick: l, children: i }),
            })),
            (n[2] = l),
            (n[3] = a))
          : (a = n[3]),
        a
      )
    }
    function e0(e) {
      let t,
        i,
        a,
        n,
        l,
        o,
        c,
        d,
        u,
        h,
        g,
        f,
        x,
        v = (0, r.c)(59),
        {
          pendingEnrichment: b,
          hasNextPage: _,
          isLoading: w,
          onEdit: j,
          onNavigateToSite: N,
          onLoadNextPage: S,
          projects: T,
          shared: P,
          viewMode: E,
        } = e,
        A = (0, K.Zj)("262557526"),
        C = (0, K.Zj)("60299493")
      if (v[0] !== T || v[1] !== P) {
        let e
        ;(v[3] !== P ? ((e = (e) => !P || "owner" === e.current_user_role), (v[3] = P), (v[4] = e)) : (e = v[4]),
          (t = T.filter(e).map(e5)),
          (v[0] = T),
          (v[1] = P),
          (v[2] = t))
      } else t = v[2]
      let I = t,
        k = I.length > 0
      v[5] !== k ? ((i = { enabled: k }), (v[5] = k), (v[6] = i)) : (i = v[6])
      let { data: O } = (0, m._U)(ec.F, I, i),
        L = I.length > 0
      v[7] !== L ? ((a = { enabled: L }), (v[7] = L), (v[8] = a)) : (a = v[8])
      let { data: q } = (0, m.Ul)(y._x, a)
      v[9] !== q?.items ? ((n = new Set(q?.items.map(e3))), (v[9] = q?.items), (v[10] = n)) : (n = v[10])
      let V = n
      v[11] !== O || v[12] !== V
        ? ((l = new Set(O?.filter((e) => e.automation_ids.some((e) => V.has(e))).map(e2))),
          (v[11] = O),
          (v[12] = V),
          (v[13] = l))
        : (l = v[13])
      let D = l
      if (v[14] !== A || v[15] !== P || v[16] !== C || v[17] !== E) {
        let e =
            "grid" === E ? "grid-cols-1 gap-6 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4" : e6(P, !P && A && C),
          t = "grid" === E && "pt-4"
        ;(v[20] !== t ? ((c = (0, p.A)("@container pb-3", t)), (v[20] = t), (v[21] = c)) : (c = v[21]),
          (o = (0, p.A)("grid", e)),
          (v[14] = A),
          (v[15] = P),
          (v[16] = C),
          (v[17] = E),
          (v[18] = o),
          (v[19] = c))
      } else ((o = v[18]), (c = v[19]))
      let F = "grid" === E ? "sites-grid" : "sites-table"
      if (
        (v[22] !== P || v[23] !== E
          ? ((d = "list" === E ? (0, s.jsx)(e7, { shared: P }) : null), (v[22] = P), (v[23] = E), (v[24] = d))
          : (d = v[24]),
        v[25] !== D || v[26] !== j || v[27] !== N || v[28] !== b || v[29] !== T || v[30] !== P || v[31] !== E)
      ) {
        let e
        ;(v[33] !== D || v[34] !== j || v[35] !== N || v[36] !== b || v[37] !== P || v[38] !== E
          ? ((e = (e) =>
              (0, s.jsx)(
                e9,
                {
                  enrichmentPending: b?.has(e.id),
                  project: e,
                  hasAutomations: (!P || "owner" === e.current_user_role) && D.has(e.id),
                  shared: P,
                  onEdit: j,
                  onNavigateToSite: N,
                  viewMode: E,
                },
                e.id,
              )),
            (v[33] = D),
            (v[34] = j),
            (v[35] = N),
            (v[36] = b),
            (v[37] = P),
            (v[38] = E),
            (v[39] = e))
          : (e = v[39]),
          (u = T.map(e)),
          (v[25] = D),
          (v[26] = j),
          (v[27] = N),
          (v[28] = b),
          (v[29] = T),
          (v[30] = P),
          (v[31] = E),
          (v[32] = u))
      } else u = v[32]
      let U = null
      return (
        v[40] !== F || v[41] !== d || v[42] !== u || v[43] !== U || v[44] !== o
          ? ((h = (0, s.jsxs)("div", { className: o, "data-testid": F, children: [d, u, U] })),
            (v[40] = F),
            (v[41] = d),
            (v[42] = u),
            (v[43] = U),
            (v[44] = o),
            (v[45] = h))
          : (h = v[45]),
        v[46] !== w || v[47] !== P || v[48] !== E
          ? ((g = "list" === E && w ? (0, s.jsx)(e4, { shared: P, viewMode: E }) : null),
            (v[46] = w),
            (v[47] = P),
            (v[48] = E),
            (v[49] = g))
          : (g = v[49]),
        v[50] !== _ || v[51] !== w || v[52] !== S || v[53] !== g
          ? ((f = (0, s.jsx)(M.D, {
              browserLoadingPlaceholder: g,
              hasNextPage: _,
              isFetchingNextPage: w,
              onLoadNextPage: S,
            })),
            (v[50] = _),
            (v[51] = w),
            (v[52] = S),
            (v[53] = g),
            (v[54] = f))
          : (f = v[54]),
        v[55] !== h || v[56] !== f || v[57] !== c
          ? ((x = (0, s.jsxs)("div", { className: c, children: [h, f] })),
            (v[55] = h),
            (v[56] = f),
            (v[57] = c),
            (v[58] = x))
          : (x = v[58]),
        x
      )
    }
    function e2(e) {
      return e.project_id
    }
    function e3(e) {
      let { automation: t } = e
      return t.id
    }
    function e5(e) {
      return e.id
    }
    function e4(e) {
      let t,
        i,
        a = (0, r.c)(6),
        { shared: n, viewMode: l } = e,
        o = (0, K.Zj)("262557526"),
        c = (0, K.Zj)("60299493")
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)("span", {
              className: "sr-only",
              children: (0, s.jsx)(v.A, {
                id: "appgenPage.loadingMore",
                defaultMessage: "Loading more sites",
                description: "Accessible status while another page of Sites is loading",
              }),
            })),
            (a[0] = t))
          : (t = a[0]),
        a[1] !== o || a[2] !== n || a[3] !== c || a[4] !== l
          ? ((i = (0, s.jsxs)("div", {
              className: "w-full",
              "data-testid": "sites-pagination-loading",
              role: "status",
              children: [
                t,
                "grid" === l
                  ? (0, s.jsx)(eQ, {})
                  : (0, s.jsx)("div", {
                      className: (0, p.A)("grid", e6(n, !n && o && c)),
                      children: (0, s.jsx)(e$, { shared: n }),
                    }),
              ],
            })),
            (a[1] = o),
            (a[2] = n),
            (a[3] = c),
            (a[4] = l),
            (a[5] = i))
          : (i = a[5]),
        i
      )
    }
    function e6(e, t) {
      return t
        ? e
          ? "grid-cols-[minmax(0,1fr)_minmax(120px,160px)_minmax(120px,160px)_minmax(120px,160px)_auto] [@container_(max-width:720px)]:grid-cols-[minmax(0,1fr)_auto_auto_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]"
          : "grid-cols-[minmax(0,1fr)_minmax(120px,160px)_minmax(120px,160px)_auto] [@container_(max-width:720px)]:grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]"
        : e
          ? "grid-cols-[minmax(0,1fr)_minmax(120px,160px)_minmax(120px,160px)_auto] [@container_(max-width:720px)]:grid-cols-[minmax(0,1fr)_auto_auto_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]"
          : "grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto]"
    }
    function e7(e) {
      let t,
        i,
        a,
        n,
        l,
        o = (0, r.c)(11),
        { shared: c } = e,
        d = (0, K.Zj)("262557526"),
        u = (0, K.Zj)("60299493")
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)("div", {
              className: "flex min-w-0 items-center gap-4",
              children: (0, s.jsx)("span", {
                className: "min-w-0 flex-1",
                children: (0, s.jsx)(v.A, {
                  id: "appgenPage.list.site",
                  defaultMessage: "Site",
                  description: "Column header for a site in the Sites list",
                }),
              }),
            })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== c
          ? ((i = c
              ? (0, s.jsx)("span", {
                  className: "ps-4 [@container_(max-width:520px)]:sr-only",
                  children: (0, s.jsx)(v.A, {
                    id: "appgenPage.list.owner",
                    defaultMessage: "Owner",
                    description: "Column header for the owner of a shared site",
                  }),
                })
              : null),
            (o[1] = c),
            (o[2] = i))
          : (i = o[2]),
        o[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)("span", {
              className: "ps-4 [@container_(max-width:520px)]:sr-only",
              children: (0, s.jsx)(v.A, {
                id: "appgenPage.list.sharedWith",
                defaultMessage: "Shared with",
                description: "Column header for who can access a site in the Sites list",
              }),
            })),
            (o[3] = a))
          : (a = o[3]),
        o[4] !== d || o[5] !== c || o[6] !== u
          ? ((n =
              !c && d && u
                ? (0, s.jsx)("span", {
                    className: "ps-4 select-none [@container_(max-width:720px)]:hidden",
                    children: (0, s.jsx)(v.A, {
                      id: "appgenPage.list.visitors",
                      defaultMessage: "Visitors (30d)",
                      description:
                        "Column header above daily unique-visitor graphs and the distinct browser total for page loads across the past 30 days for each site in the Sites list. 30d means 30 days.",
                    }),
                  })
                : null),
            (o[4] = d),
            (o[5] = c),
            (o[6] = u),
            (o[7] = n))
          : (n = o[7]),
        o[8] !== i || o[9] !== n
          ? ((l = (0, s.jsxs)("div", {
              className:
                "col-span-full grid h-10.5 grid-cols-subgrid items-center border-b border-subtle px-4 text-sm leading-5 text-secondary select-none [&:has(+_[data-appgen-row]:hover)]:border-transparent",
              children: [t, i, a, n],
            })),
            (o[8] = i),
            (o[9] = n),
            (o[10] = l))
          : (l = o[10]),
        l
      )
    }
    function e9(e) {
      let t,
        i,
        n,
        l,
        o,
        c,
        d,
        u,
        p,
        h,
        g,
        v,
        b = (0, r.c)(69),
        {
          enrichmentPending: _,
          hasAutomations: y,
          onEdit: w,
          onNavigateToSite: j,
          project: N,
          shared: S,
          viewMode: T,
        } = e,
        P = void 0 !== _ && _,
        E = (0, m.gh)(G.GD),
        A = (0, x.A)()
      b[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { mounted: !1 }), (b[0] = t)) : (t = b[0])
      let M = (0, f.useRef)(t)
      ;(b[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = () => {
            let e = { mounted: !0 }
            return (
              (M.current = e),
              () => {
                ;((e.mounted = !1), e.closeExternalOpen?.())
              }
            )
          }),
          (b[1] = i))
        : (i = b[1]),
        b[2] !== N.id || b[3] !== E ? ((n = [E, N.id]), (b[2] = N.id), (b[3] = E), (b[4] = n)) : (n = b[4]),
        (0, f.useEffect)(i, n))
      let C = "suspended" === N.status,
        I = C ? null : N.live_url,
        k = S ? "owner" === N.current_user_role : "owner" === N.current_user_role || void 0 === N.current_user_role,
        O = k || "editor" === N.current_user_role
      b[5] !== E ? ((l = ev.F.isAvailable(E)), (b[5] = E), (b[6] = l)) : (l = b[6])
      let L = l,
        q = (0, K.Zj)("1498265771")
      ;(0, K.Zj)("792923027")
      let V = (0, m.Ul)(!!q && !!O && !!L && eN.Wb),
        D = q && (null != j || L) && null != I
      b[7] !== N.id || b[8] !== E
        ? ((o = (e, t) => {
            try {
              ;(0, z.yy)(E, a.Yj, { interactionType: e, projectId: N.id, source: t })
            } catch {}
          }),
          (b[7] = N.id),
          (b[8] = E),
          (b[9] = o))
        : (o = b[9])
      let F = o,
        U = "grid" === T ? "CHATGPT_SITES_SOURCE_HOME_GRID" : "CHATGPT_SITES_SOURCE_HOME_LIST"
      b[10] !== U ||
      b[11] !== A ||
      b[12] !== I ||
      b[13] !== F ||
      b[14] !== j ||
      b[15] !== N.id ||
      b[16] !== N.title ||
      b[17] !== E ||
      b[18] !== V
        ? ((c = (e, t) => {
            null != I &&
              (e?.preventDefault(),
              (0, eb.A)(E, {
                resource: { type: "appgen-app", projectId: N.id, title: N.title, url: I },
                event: e,
                lifecycle: M.current,
                intl: A,
                onNavigateToSite: j,
                presentation: "full-width",
                showComposer: V,
                onPreviewUnavailable: t,
                onOpened: (e) =>
                  F(
                    "preview" === e
                      ? "CHATGPT_SITES_INTERACTION_TYPE_PREVIEW_OPENED"
                      : "CHATGPT_SITES_INTERACTION_TYPE_SITE_OPENED",
                    U,
                  ),
              }))
          }),
          (b[10] = U),
          (b[11] = A),
          (b[12] = I),
          (b[13] = F),
          (b[14] = j),
          (b[15] = N.id),
          (b[16] = N.title),
          (b[17] = E),
          (b[18] = V),
          (b[19] = c))
        : (c = b[19])
      let R = c
      b[20] !== O || b[21] !== R || b[22] !== I || b[23] !== w || b[24] !== D || b[25] !== N || b[26] !== E
        ? ((d = (e) => {
            D
              ? R(e)
              : O &&
                ((0, W.Q_)(E, {
                  action: W.lX.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
                  projectId: N.id,
                  source: W.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
                }),
                w(N, I, "edit"))
          }),
          (b[20] = O),
          (b[21] = R),
          (b[22] = I),
          (b[23] = w),
          (b[24] = D),
          (b[25] = N),
          (b[26] = E),
          (b[27] = d))
        : (d = b[27])
      let B = d
      b[28] !== A || b[29] !== D || b[30] !== N.title
        ? ((u = D
            ? A.formatMessage(
                {
                  id: "appgenPage.visit",
                  defaultMessage: "Visit {siteTitle}",
                  description: "Accessible label for opening a live site from the sites list",
                },
                { siteTitle: N.title },
              )
            : A.formatMessage(
                {
                  id: "appgenPage.edit",
                  defaultMessage: "Edit {siteTitle}",
                  description: "Accessible label for starting a new conversation to edit a site from the sites list",
                },
                { siteTitle: N.title },
              )),
          (b[28] = A),
          (b[29] = D),
          (b[30] = N.title),
          (b[31] = u))
        : (u = b[31])
      let H = u,
        X = "active" === N.status && null == N.live_url
      return (
        b[32] !== U || b[33] !== F || b[34] !== D || b[35] !== T
          ? ((p = D
              ? () =>
                  F(
                    "CHATGPT_SITES_INTERACTION_TYPE_SITE_OPENED",
                    "grid" === T ? "CHATGPT_SITES_SOURCE_HOME_SITE_MENU" : U,
                  )
              : void 0),
            (b[32] = U),
            (b[33] = F),
            (b[34] = D),
            (b[35] = T),
            (b[36] = p))
          : (p = b[36]),
        b[37] !== R || b[38] !== I || b[39] !== w || b[40] !== D || b[41] !== N || b[42] !== V
          ? ((h = (e) => {
              let t = void 0 === e ? "edit" : e
              "edit" === t && D && V ? R(void 0, () => w(N, I, t)) : w(N, I, t)
            }),
            (b[37] = R),
            (b[38] = I),
            (b[39] = w),
            (b[40] = D),
            (b[41] = N),
            (b[42] = V),
            (b[43] = h))
          : (h = b[43]),
        b[44] !== P ||
        b[45] !== B ||
        b[46] !== y ||
        b[47] !== j ||
        b[48] !== H ||
        b[49] !== N ||
        b[50] !== S ||
        b[51] !== T
          ? ((g = (e) =>
              "grid" === T
                ? (0, s.jsx)(te, { enrichmentPending: P, actions: e, onOpen: B, openLabel: H, project: N, shared: S })
                : (0, s.jsx)(e8, {
                    enrichmentPending: P,
                    actions: e,
                    hasAutomations: y,
                    onOpen: B,
                    openLabel: H,
                    onNavigateToSite: j,
                    project: N,
                    shared: S,
                  })),
            (b[44] = P),
            (b[45] = B),
            (b[46] = y),
            (b[47] = j),
            (b[48] = H),
            (b[49] = N),
            (b[50] = S),
            (b[51] = T),
            (b[52] = g))
          : (g = b[52]),
        b[53] !== O ||
        b[54] !== k ||
        b[55] !== y ||
        b[56] !== C ||
        b[57] !== I ||
        b[58] !== j ||
        b[59] !== N.disabled_by ||
        b[60] !== N.id ||
        b[61] !== N.is_pinned ||
        b[62] !== N.title ||
        b[63] !== X ||
        b[64] !== p ||
        b[65] !== h ||
        b[66] !== g ||
        b[67] !== T
          ? ((v = (0, s.jsx)(eu.u, {
              canEdit: O,
              canManage: k,
              initialIsOwner: k,
              disabled: C,
              disabledBy: N.disabled_by,
              hasAutomations: y,
              isPinned: N.is_pinned,
              liveUrl: I,
              projectId: N.id,
              projectTitle: N.title,
              surface: "sites",
              unpublished: X,
              viewMode: T,
              onNavigateToSite: j,
              onExternalOpen: p,
              onEdit: h,
              children: g,
            })),
            (b[53] = O),
            (b[54] = k),
            (b[55] = y),
            (b[56] = C),
            (b[57] = I),
            (b[58] = j),
            (b[59] = N.disabled_by),
            (b[60] = N.id),
            (b[61] = N.is_pinned),
            (b[62] = N.title),
            (b[63] = X),
            (b[64] = p),
            (b[65] = h),
            (b[66] = g),
            (b[67] = T),
            (b[68] = v))
          : (v = b[68]),
        v
      )
    }
    function e8(e) {
      let t,
        i,
        a,
        n,
        o,
        c,
        d,
        u,
        h,
        g,
        m,
        f,
        b,
        _,
        y,
        w,
        j,
        N,
        T,
        E,
        A = (0, r.c)(83),
        {
          enrichmentPending: M,
          actions: C,
          hasAutomations: I,
          onOpen: k,
          openLabel: O,
          onNavigateToSite: L,
          project: q,
          shared: V,
        } = e,
        D = (0, x.A)(),
        F = (0, K.Zj)("262557526"),
        U = (0, K.Zj)("60299493"),
        z = q.live_url,
        R = "suspended" === q.status,
        B = "active" === q.status && null == z,
        G = R ? null : z,
        H = q.owner,
        X = V ? "owner" === q.current_user_role : "owner" === q.current_user_role || void 0 === q.current_user_role,
        Z = X || "editor" === q.current_user_role
      A[0] !== q.disabled_by
        ? ((t = (0, s.jsx)(ed.V, { disabledBy: q.disabled_by })), (A[0] = q.disabled_by), (A[1] = t))
        : (t = A[1])
      let Y = t,
        W = !R && "hover:bg-primary-ghost-hover"
      return (
        A[2] !== W
          ? ((i = (0, p.A)(
              "group/site-row relative col-span-full grid min-h-[82px] grid-cols-subgrid items-center overflow-hidden rounded-xl px-4 py-4 select-none after:pointer-events-none after:absolute after:inset-x-3 after:bottom-0 after:border-b after:border-subtle hover:after:opacity-0",
              W,
            )),
            (A[2] = W),
            (A[3] = i))
          : (i = A[3]),
        A[4] !== G || A[5] !== Z || A[6] !== D || A[7] !== k || A[8] !== q.title
          ? ((a =
              Z || null == G
                ? null
                : (0, s.jsx)(P.G, {
                    "aria-label": D.formatMessage(
                      {
                        id: "appgenPage.visit",
                        defaultMessage: "Visit {siteTitle}",
                        description: "Accessible label for opening a live site from the sites list",
                      },
                      { siteTitle: q.title },
                    ),
                    className:
                      "absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: G,
                    initiator: "sites_library",
                    onUnmodifiedClick: k,
                    openTarget: "external-browser",
                  })),
            (A[4] = G),
            (A[5] = Z),
            (A[6] = D),
            (A[7] = k),
            (A[8] = q.title),
            (A[9] = a))
          : (a = A[9]),
        A[10] !== Z || A[11] !== R || A[12] !== k || A[13] !== O
          ? ((n = Z
              ? (0, s.jsx)("button", {
                  "aria-label": O,
                  className:
                    "absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                  disabled: R,
                  type: "button",
                  onClick: k,
                })
              : null),
            (A[10] = Z),
            (A[11] = R),
            (A[12] = k),
            (A[13] = O),
            (A[14] = n))
          : (n = A[14]),
        A[15] !== q.screenshot_url
          ? ((o = (0, s.jsx)(ep.x, { screenshotUrl: q.screenshot_url, viewMode: "list" })),
            (A[15] = q.screenshot_url),
            (A[16] = o))
          : (o = A[16]),
        A[17] !== q.title
          ? ((c = (0, s.jsx)("span", {
              className: "min-w-0 truncate text-base leading-6 text-default",
              children: q.title,
            })),
            (A[17] = q.title),
            (A[18] = c))
          : (c = A[18]),
        A[19] !== q ? ((d = (0, s.jsx)(tt, { project: q })), (A[19] = q), (A[20] = d)) : (d = A[20]),
        A[21] !== I || A[22] !== L || A[23] !== q.id
          ? ((u = I ? (0, s.jsx)(ti, { projectId: q.id, onNavigateToSite: L }) : null),
            (A[21] = I),
            (A[22] = L),
            (A[23] = q.id),
            (A[24] = u))
          : (u = A[24]),
        A[25] !== Y || A[26] !== R || A[27] !== q.disabled_by
          ? ((h = R
              ? (0, s.jsx)(l.m, {
                  interactive: "openai" === q.disabled_by,
                  content: Y,
                  children: (0, s.jsx)("span", {
                    children: (0, s.jsx)(S.E, {
                      className: "pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium",
                      children: (0, s.jsx)(v.A, {
                        id: "appgenPage.disabledBadge",
                        defaultMessage: "Disabled",
                        description: "Status badge shown next to a site name when the site is disabled",
                      }),
                    }),
                  }),
                })
              : null),
            (A[25] = Y),
            (A[26] = R),
            (A[27] = q.disabled_by),
            (A[28] = h))
          : (h = A[28]),
        A[29] !== h || A[30] !== c || A[31] !== d || A[32] !== u
          ? ((g = (0, s.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [c, d, u, h] })),
            (A[29] = h),
            (A[30] = c),
            (A[31] = d),
            (A[32] = u),
            (A[33] = g))
          : (g = A[33]),
        A[34] !== q.updated_at
          ? ((m = (0, s.jsx)(eg.g, { dateString: q.updated_at })), (A[34] = q.updated_at), (A[35] = m))
          : (m = A[35]),
        A[36] !== B
          ? ((f = B
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("span", {
                      "aria-hidden": !0,
                      className: "size-0.5 shrink-0 rounded-full bg-text-tertiary",
                    }),
                    (0, s.jsx)("span", {
                      className: "truncate",
                      children: (0, s.jsx)(v.A, {
                        id: "appgenPage.notPublished",
                        defaultMessage: "Not published",
                        description: "Sites row status for a Site that has not been published",
                      }),
                    }),
                  ],
                })
              : null),
            (A[36] = B),
            (A[37] = f))
          : (f = A[37]),
        A[38] !== q.sharing
          ? ((b = (0, s.jsx)(el.g, {
              accessState: q.sharing,
              "aria-hidden": !0,
              className: "icon-xs hidden shrink-0 [@container_(max-width:520px)]:block",
            })),
            (A[38] = q.sharing),
            (A[39] = b))
          : (b = A[39]),
        A[40] !== m || A[41] !== f || A[42] !== b
          ? ((_ = (0, s.jsxs)("div", {
              className: "flex min-w-0 items-center gap-1.5 text-sm leading-5 text-secondary",
              children: [m, f, b],
            })),
            (A[40] = m),
            (A[41] = f),
            (A[42] = b),
            (A[43] = _))
          : (_ = A[43]),
        A[44] !== g || A[45] !== _
          ? ((y = (0, s.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-px", children: [g, _] })),
            (A[44] = g),
            (A[45] = _),
            (A[46] = y))
          : (y = A[46]),
        A[47] !== y || A[48] !== o
          ? ((w = (0, s.jsxs)("div", {
              className: "pointer-events-none relative z-10 flex min-w-0 items-center gap-4",
              children: [o, y],
            })),
            (A[47] = y),
            (A[48] = o),
            (A[49] = w))
          : (w = A[49]),
        A[50] !== M || A[51] !== H?.email || A[52] !== H?.name || A[53] !== q.current_user_role || A[54] !== V
          ? ((j = V
              ? (0, s.jsx)(ts, {
                  isLoading: M,
                  ownerEmail: H?.email,
                  ownerName: H?.name ?? H?.email,
                  isCurrentUser: "owner" === q.current_user_role,
                })
              : null),
            (A[50] = M),
            (A[51] = H?.email),
            (A[52] = H?.name),
            (A[53] = q.current_user_role),
            (A[54] = V),
            (A[55] = j))
          : (j = A[55]),
        A[56] !== Z ||
        A[57] !== X ||
        A[58] !== M ||
        A[59] !== R ||
        A[60] !== q.id ||
        A[61] !== q.sharing ||
        A[62] !== q.title
          ? ((N = (0, s.jsx)(tr, {
              isLoading: M,
              accessState: q.sharing,
              canManage: X,
              canViewSharing: Z,
              disabled: R,
              projectId: q.id,
              projectTitle: q.title,
              viewMode: "list",
            })),
            (A[56] = Z),
            (A[57] = X),
            (A[58] = M),
            (A[59] = R),
            (A[60] = q.id),
            (A[61] = q.sharing),
            (A[62] = q.title),
            (A[63] = N))
          : (N = A[63]),
        A[64] !== F ||
        A[65] !== X ||
        A[66] !== R ||
        A[67] !== L ||
        A[68] !== q.id ||
        A[69] !== q.title ||
        A[70] !== V ||
        A[71] !== U ||
        A[72] !== B
          ? ((T =
              !V && F && U
                ? (0, s.jsx)("div", {
                    className: "pointer-events-none relative z-10 min-w-0 ps-4 [@container_(max-width:720px)]:hidden",
                    children:
                      !X || R || B
                        ? null
                        : (0, s.jsx)(es, { onNavigateToSite: L, projectId: q.id, projectTitle: q.title }),
                  })
                : null),
            (A[64] = F),
            (A[65] = X),
            (A[66] = R),
            (A[67] = L),
            (A[68] = q.id),
            (A[69] = q.title),
            (A[70] = V),
            (A[71] = U),
            (A[72] = B),
            (A[73] = T))
          : (T = A[73]),
        A[74] !== C ||
        A[75] !== w ||
        A[76] !== j ||
        A[77] !== N ||
        A[78] !== T ||
        A[79] !== i ||
        A[80] !== a ||
        A[81] !== n
          ? ((E = (0, s.jsxs)("div", { className: i, "data-appgen-row": !0, children: [a, n, w, j, N, T, C] })),
            (A[74] = C),
            (A[75] = w),
            (A[76] = j),
            (A[77] = N),
            (A[78] = T),
            (A[79] = i),
            (A[80] = a),
            (A[81] = n),
            (A[82] = E))
          : (E = A[82]),
        E
      )
    }
    function te(e) {
      let t,
        i,
        a,
        n,
        o,
        c,
        d,
        u,
        h,
        g,
        m,
        f,
        b,
        _,
        y,
        w,
        j,
        N = (0, r.c)(57),
        { enrichmentPending: T, actions: E, onOpen: A, openLabel: M, project: C, shared: I } = e,
        k = (0, x.A)(),
        O = C.live_url,
        L = "suspended" === C.status,
        q = L ? null : O,
        V = I ? "owner" === C.current_user_role : "owner" === C.current_user_role || void 0 === C.current_user_role,
        D = V || "editor" === C.current_user_role
      N[0] !== C.disabled_by
        ? ((t = (0, s.jsx)(ed.V, { disabledBy: C.disabled_by })), (N[0] = C.disabled_by), (N[1] = t))
        : (t = N[1])
      let F = t
      ;(N[2] !== q || N[3] !== D || N[4] !== k || N[5] !== A || N[6] !== C.title
        ? ((i =
            D || null == q
              ? null
              : (0, s.jsx)(P.G, {
                  "aria-label": k.formatMessage(
                    {
                      id: "appgenPage.visit",
                      defaultMessage: "Visit {siteTitle}",
                      description: "Accessible label for opening a live site from the sites grid",
                    },
                    { siteTitle: C.title },
                  ),
                  className:
                    "absolute inset-0 cursor-interaction rounded-2xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                  href: q,
                  initiator: "sites_library",
                  onUnmodifiedClick: A,
                  openTarget: "external-browser",
                })),
          (N[2] = q),
          (N[3] = D),
          (N[4] = k),
          (N[5] = A),
          (N[6] = C.title),
          (N[7] = i))
        : (i = N[7]),
        N[8] !== D || N[9] !== L || N[10] !== A || N[11] !== M
          ? ((a = D
              ? (0, s.jsx)("button", {
                  "aria-label": M,
                  className:
                    "absolute inset-0 cursor-interaction rounded-2xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                  disabled: L,
                  type: "button",
                  onClick: A,
                })
              : null),
            (N[8] = D),
            (N[9] = L),
            (N[10] = A),
            (N[11] = M),
            (N[12] = a))
          : (a = N[12]),
        N[13] !== C.screenshot_url
          ? ((n = (0, s.jsx)(ep.x, { screenshotUrl: C.screenshot_url, viewMode: "grid" })),
            (N[13] = C.screenshot_url),
            (N[14] = n))
          : (n = N[14]))
      let U = !L && "group-hover/site-card:bg-primary-ghost-hover"
      return (
        N[15] !== U
          ? ((o = (0, p.A)(
              "pointer-events-none relative z-10 grid h-16 min-w-0 shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center border-t border-subtle",
              U,
            )),
            (N[15] = U),
            (N[16] = o))
          : (o = N[16]),
        N[17] !== C.title
          ? ((c = (0, s.jsx)("span", {
              className: "min-w-0 truncate text-sm leading-5 font-medium text-default",
              children: C.title,
            })),
            (N[17] = C.title),
            (N[18] = c))
          : (c = N[18]),
        N[19] !== C ? ((d = (0, s.jsx)(tt, { project: C })), (N[19] = C), (N[20] = d)) : (d = N[20]),
        N[21] !== F || N[22] !== L || N[23] !== C.disabled_by
          ? ((u = L
              ? (0, s.jsx)(l.m, {
                  interactive: "openai" === C.disabled_by,
                  content: F,
                  children: (0, s.jsx)("span", {
                    children: (0, s.jsx)(S.E, {
                      className: "pointer-events-auto shrink-0 px-1.5 py-0.5 text-xs font-medium",
                      children: (0, s.jsx)(v.A, {
                        id: "appgenPage.disabledBadge",
                        defaultMessage: "Disabled",
                        description: "Status badge shown next to a site name when the site is disabled",
                      }),
                    }),
                  }),
                })
              : null),
            (N[21] = F),
            (N[22] = L),
            (N[23] = C.disabled_by),
            (N[24] = u))
          : (u = N[24]),
        N[25] !== c || N[26] !== d || N[27] !== u
          ? ((h = (0, s.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [c, d, u] })),
            (N[25] = c),
            (N[26] = d),
            (N[27] = u),
            (N[28] = h))
          : (h = N[28]),
        N[29] !== D ||
        N[30] !== V ||
        N[31] !== T ||
        N[32] !== L ||
        N[33] !== C.id ||
        N[34] !== C.sharing ||
        N[35] !== C.title
          ? ((g = (0, s.jsx)(tr, {
              accessState: C.sharing,
              canManage: V,
              canViewSharing: D,
              disabled: L,
              projectId: C.id,
              projectTitle: C.title,
              viewMode: "grid",
              isLoading: T,
            })),
            (N[29] = D),
            (N[30] = V),
            (N[31] = T),
            (N[32] = L),
            (N[33] = C.id),
            (N[34] = C.sharing),
            (N[35] = C.title),
            (N[36] = g))
          : (g = N[36]),
        N[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)("span", {
              "aria-hidden": !0,
              className: "size-0.5 shrink-0 rounded-full bg-text-tertiary",
            })),
            (N[37] = m))
          : (m = N[37]),
        N[38] !== C.updated_at
          ? ((f = (0, s.jsx)("span", {
              className: "shrink-0 whitespace-nowrap",
              children: (0, s.jsx)(eg.g, { dateString: C.updated_at }),
            })),
            (N[38] = C.updated_at),
            (N[39] = f))
          : (f = N[39]),
        N[40] !== g || N[41] !== f
          ? ((b = (0, s.jsxs)("div", {
              className: "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-secondary",
              children: [g, m, f],
            })),
            (N[40] = g),
            (N[41] = f),
            (N[42] = b))
          : (b = N[42]),
        N[43] !== h || N[44] !== b
          ? ((_ = (0, s.jsxs)("div", { className: "flex min-w-0 flex-col gap-1 ps-3", children: [h, b] })),
            (N[43] = h),
            (N[44] = b),
            (N[45] = _))
          : (_ = N[45]),
        N[46] !== E
          ? ((y = (0, s.jsx)("div", {
              className: "pointer-events-auto relative z-10 flex items-center gap-1 pe-2",
              children: E,
            })),
            (N[46] = E),
            (N[47] = y))
          : (y = N[47]),
        N[48] !== _ || N[49] !== y || N[50] !== o
          ? ((w = (0, s.jsxs)("div", { className: o, children: [_, y] })),
            (N[48] = _),
            (N[49] = y),
            (N[50] = o),
            (N[51] = w))
          : (w = N[51]),
        N[52] !== w || N[53] !== i || N[54] !== a || N[55] !== n
          ? ((j = (0, s.jsxs)("article", {
              className:
                "group/site-card relative flex h-64 min-w-0 flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-card shadow-card",
              children: [i, a, n, w],
            })),
            (N[52] = w),
            (N[53] = i),
            (N[54] = a),
            (N[55] = n),
            (N[56] = j))
          : (j = N[56]),
        j
      )
    }
    function tt(e) {
      let t,
        i,
        a = (0, r.c)(9),
        { project: n } = e,
        l = (0, x.A)(),
        o = (0, K.Zj)("1425956883"),
        { accountId: c, userId: d } = (0, _.As)()
      a[0] !== c || a[1] !== n.id || a[2] !== n.is_pinned || a[3] !== d
        ? ((t = { accountId: c, userId: d, projectId: n.id, initialPinned: n.is_pinned }),
          (a[0] = c),
          (a[1] = n.id),
          (a[2] = n.is_pinned),
          (a[3] = d),
          (a[4] = t))
        : (t = a[4])
      let u = (0, m._U)(o ? eM.Uv : null, t)
      return (
        a[5] !== l || a[6] !== u || a[7] !== o
          ? ((i =
              o && u
                ? (0, s.jsx)(A.W7X, {
                    "aria-label": l.formatMessage({
                      id: "appgenPage.pins.indicator",
                      defaultMessage: "Pinned",
                      description: "Accessible label for the icon marking a site as pinned",
                    }),
                    className: "text-secondary",
                  })
                : null),
            (a[5] = l),
            (a[6] = u),
            (a[7] = o),
            (a[8] = i))
          : (i = a[8]),
        i
      )
    }
    function ti(e) {
      let t,
        i,
        a,
        n,
        o,
        c = (0, r.c)(13),
        { projectId: d, onNavigateToSite: u } = e,
        p = (0, b.Zp)(),
        h = (0, x.A)()
      c[0] !== h
        ? ((t = h.formatMessage({
            id: "appgenAutomations.indicator",
            defaultMessage: "View this Site’s schedules",
            description: "Tooltip and accessible label for the clock icon on a Site with scheduled tasks",
          })),
          (c[0] = h),
          (c[1] = t))
        : (t = c[1])
      let g = t
      return (
        c[2] !== p || c[3] !== u || c[4] !== d
          ? ((i = () => void (u ?? p)((0, Q.J6)(d))), (c[2] = p), (c[3] = u), (c[4] = d), (c[5] = i))
          : (i = c[5]),
        c[6] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, s.jsx)(A.QC9, {})), (c[6] = a)) : (a = c[6]),
        c[7] !== g || c[8] !== i
          ? ((n = (0, s.jsx)(T.$, {
              "aria-label": g,
              className: "pointer-events-auto",
              color: "ghost",
              radius: "full",
              size: "compact",
              uniform: !0,
              onClick: i,
              children: a,
            })),
            (c[7] = g),
            (c[8] = i),
            (c[9] = n))
          : (n = c[9]),
        c[10] !== g || c[11] !== n
          ? ((o = (0, s.jsx)(l.m, { content: g, children: n })), (c[10] = g), (c[11] = n), (c[12] = o))
          : (o = c[12]),
        o
      )
    }
    function ts(e) {
      let t,
        i,
        a,
        n,
        l,
        o,
        c,
        d,
        u = (0, r.c)(25),
        { isLoading: h, ownerEmail: g, ownerName: f, isCurrentUser: b } = e,
        _ = void 0 !== h && h,
        y = (0, x.A)(),
        w = (0, m.Ul)(U.JG)
      u[0] !== y || u[1] !== b || u[2] !== f
        ? ((t = b
            ? y.formatMessage({
                id: "appgenPage.ownerYou",
                defaultMessage: "You",
                description: "Owner label for a site owned by the current user",
              })
            : f?.trim() || null),
          (u[0] = y),
          (u[1] = b),
          (u[2] = f),
          (u[3] = t))
        : (t = u[3])
      let j = t,
        S = _ || void 0,
        T = j ?? g ?? "",
        P = w && "pointer-events-auto"
      return (
        u[4] !== P ? ((i = (0, p.A)("flex min-w-0 items-center gap-2", P)), (u[4] = P), (u[5] = i)) : (i = u[5]),
        u[6] !== j || u[7] !== _
          ? ((a = _
              ? (0, s.jsx)(L.X, { className: "size-6 rounded-full", size: "custom", variant: "chatgpt-project" })
              : (0, s.jsx)(N.e, { alt: "", name: j, size: "response", src: null })),
            (u[6] = j),
            (u[7] = _),
            (u[8] = a))
          : (a = u[8]),
        u[9] !== j || u[10] !== _
          ? ((n = _
              ? (0, s.jsx)(L.X, { as: "span", className: "inline-block w-20", size: "sm", variant: "chatgpt-project" })
              : (j ??
                (0, s.jsx)(v.A, {
                  id: "appgenPage.ownerUnavailable",
                  defaultMessage: "Owner unavailable",
                  description: "Fallback shown when a shared site's owner display is unavailable",
                }))),
            (u[9] = j),
            (u[10] = _),
            (u[11] = n))
          : (n = u[11]),
        u[12] !== n
          ? ((l = (0, s.jsx)("span", {
              className: "truncate text-default [@container_(max-width:520px)]:sr-only",
              children: n,
            })),
            (u[12] = n),
            (u[13] = l))
          : (l = u[13]),
        u[14] !== i || u[15] !== a || u[16] !== l
          ? ((o = (0, s.jsxs)("span", { className: i, children: [a, l] })),
            (u[14] = i),
            (u[15] = a),
            (u[16] = l),
            (u[17] = o))
          : (o = u[17]),
        u[18] !== g || u[19] !== o || u[20] !== T
          ? ((c = (0, s.jsx)(F.Ve, { accountUserId: null, accountUserEmail: g, label: T, children: o })),
            (u[18] = g),
            (u[19] = o),
            (u[20] = T),
            (u[21] = c))
          : (c = u[21]),
        u[22] !== c || u[23] !== S
          ? ((d = (0, s.jsx)("div", {
              "aria-busy": S,
              className:
                "pointer-events-none relative z-10 flex min-w-0 items-center gap-2 ps-4 text-sm leading-5 [@container_(max-width:520px)]:sr-only",
              children: c,
            })),
            (u[22] = c),
            (u[23] = S),
            (u[24] = d))
          : (d = u[24]),
        d
      )
    }
    function tr(e) {
      let t,
        i,
        a,
        l,
        o,
        c = (0, r.c)(25),
        {
          isLoading: d,
          accessState: u,
          canViewSharing: h,
          canManage: g,
          disabled: f,
          projectId: x,
          projectTitle: b,
          viewMode: _,
        } = e,
        y = void 0 !== d && d,
        w = void 0 === g || g,
        j = void 0 !== f && f,
        N = (0, m.gh)(B.u)
      c[0] !== u || c[1] !== y || c[2] !== _
        ? ((t = y
            ? (0, s.jsx)(L.X, { className: "w-20", size: "sm", variant: "chatgpt-project" })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(el.g, { className: "icon-xs shrink-0", accessState: u, "aria-hidden": !0 }),
                  (0, s.jsx)("span", {
                    className: (0, p.A)("truncate", "list" === _ && "[@container_(max-width:520px)]:sr-only"),
                    children: (0, s.jsx)(v.A, { ...(0, eo.Kk)(u), values: u }),
                  }),
                ],
              })),
          (c[0] = u),
          (c[1] = y),
          (c[2] = _),
          (c[3] = t))
        : (t = c[3])
      let S = t
      if (!h) {
        let e,
          t,
          i = y || void 0,
          r =
            "list" === _
              ? "ps-4 text-sm leading-5 text-default [@container_(max-width:520px)]:sr-only"
              : "text-xs leading-4 text-secondary"
        return (
          c[4] !== r
            ? ((e = (0, p.A)(
                "pointer-events-none relative z-10 flex min-w-0 items-center gap-1.5 justify-self-start",
                r,
              )),
              (c[4] = r),
              (c[5] = e))
            : (e = c[5]),
          c[6] !== S || c[7] !== i || c[8] !== e
            ? ((t = (0, s.jsx)("div", { "aria-busy": i, className: e, children: S })),
              (c[6] = S),
              (c[7] = i),
              (c[8] = e),
              (c[9] = t))
            : (t = c[9]),
          t
        )
      }
      let P =
        "list" === _
          ? "ps-4 text-sm leading-5 text-default [@container_(max-width:520px)]:sr-only [@container_(max-width:520px)]:focus:not-sr-only"
          : "text-xs leading-4 text-secondary"
      return (
        c[10] !== P
          ? ((i = (0, p.A)(
              "pointer-events-auto relative z-10 min-w-0 gap-1.5 justify-self-start text-start underline-offset-2 hover:underline focus-visible:underline disabled:opacity-50 disabled:hover:no-underline",
              P,
            )),
            (c[10] = P),
            (c[11] = i))
          : (i = c[11]),
        c[12] !== w || c[13] !== x || c[14] !== b || c[15] !== N
          ? ((a = () =>
              (0, ex.l)(N, x, {
                initialIsOwner: w,
                initialProjectTitle: b,
                source: n.CodexSitesSharingSource.CODEX_SITES_SHARING_SOURCE_SITES_ACCESS_BADGE,
              })),
            (c[12] = w),
            (c[13] = x),
            (c[14] = b),
            (c[15] = N),
            (c[16] = a))
          : (a = c[16]),
        c[17] !== b
          ? ((l = (0, s.jsx)("span", {
              className: "sr-only",
              children: (0, s.jsx)(v.A, {
                id: "appgenPage.openSharingSettings",
                defaultMessage: ", open sharing settings for {siteTitle}",
                description:
                  "Additional accessible button label for opening site sharing settings from the sites list access status",
                values: { siteTitle: b },
              }),
            })),
            (c[17] = b),
            (c[18] = l))
          : (l = c[18]),
        c[19] !== S || c[20] !== j || c[21] !== i || c[22] !== a || c[23] !== l
          ? ((o = (0, s.jsxs)(T.$, {
              className: i,
              color: "ghostMuted",
              disabled: j,
              size: "inline",
              onClick: a,
              children: [S, l],
            })),
            (c[19] = S),
            (c[20] = j),
            (c[21] = i),
            (c[22] = a),
            (c[23] = l),
            (c[24] = o))
          : (o = c[24]),
        o
      )
    }
  },
  GKsW(e, t, i) {
    var s = i("ABep"),
      r = i("QosV"),
      a = i("zTeN"),
      n = i("zd8w"),
      l = i("GaA7"),
      o = i("OWtl"),
      c = i("Oj9r"),
      d = i("n5oN")
    let u = (0, a.vP)(o.u, () => [])
    function p(e) {
      let t,
        i,
        s,
        c,
        d,
        p,
        f = (0, r.c)(13),
        { title: x, nativeTitle: v } = e,
        b = void 0 === v ? x : v,
        _ = (0, a.gh)(o.u),
        [y] = (0, n.useState)(h)
      return (
        f[0] !== b || f[1] !== y || f[2] !== _ || f[3] !== x
          ? ((t = () => {
              if (l.appServices?.windowTitle == null) return
              let e = { owner: y, title: null == x ? void 0 : (b ?? null) }
              ;(_.set(u, (t) => (t.some((e) => e.owner === y) ? t.map((t) => (t.owner === y ? e : t)) : [...t, e])),
                m(_))
            }),
            (i = [_, y, x, b]),
            (f[0] = b),
            (f[1] = y),
            (f[2] = _),
            (f[3] = x),
            (f[4] = t),
            (f[5] = i))
          : ((t = f[4]), (i = f[5])),
        (0, n.useEffect)(t, i),
        f[6] !== y || f[7] !== _
          ? ((s = () => () => {
              l.appServices?.windowTitle != null && (_.set(u, (e) => e.filter((e) => e.owner !== y)), m(_))
            }),
            (c = [_, y]),
            (f[6] = y),
            (f[7] = _),
            (f[8] = s),
            (f[9] = c))
          : ((s = f[8]), (c = f[9])),
        (0, n.useEffect)(s, c),
        f[10] !== x
          ? ((d = () => {
              if (null == x) return
              let e = document.title
              g(x)
              let t = document.title
              return () => {
                document.title === t && g(e)
              }
            }),
            (p = [x]),
            (f[10] = x),
            (f[11] = d),
            (f[12] = p))
          : ((d = f[11]), (p = f[12])),
        (0, n.useEffect)(d, p),
        null
      )
    }
    function h() {
      return Symbol()
    }
    function g(e) {
      let t = document.head.querySelector("title")?.firstChild
      t instanceof Text && null == t.nextSibling ? (t.data = e) : (document.title = e)
    }
    function m(e) {
      l.appServices.windowTitle?.setTitle(e.get(u).findLast((e) => void 0 !== e.title)?.title ?? null)
    }
    i.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            i = (0, r.c)(2),
            { title: n } = e,
            l = (0, a.gh)(c.GD),
            o = (0, a._U)(d.m, `${l.value.pathname}${l.value.search ?? ""}`),
            u = n ?? o
          return (i[0] !== u ? ((t = (0, s.jsx)(p, { title: u })), (i[0] = u), (i[1] = t)) : (t = i[1]), t)
        },
        Q: p,
      },
    )
  },
}
//# sourceMappingURL=728748.501fed6f8a.js.map
