export const __rspack_esm_ids = [622950]
export const __webpack_modules__ = {
  p2tp(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      o = n("zd8w"),
      s = n("oyxz"),
      i = n("FvYa"),
      r = n("bVeK"),
      d = n("AWNZ"),
      u = n("ZEx5"),
      c = n("sn2N")
    function m(e) {
      let t,
        n,
        o,
        m,
        g,
        f,
        _,
        x,
        p,
        y = (0, l.c)(45),
        { trigger: b, isAutomationEnabled: j, onOpenTrigger: v, showUnavailableConditions: T, variant: A } = e,
        w = b?.presentation
      y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)("span", { children: (0, a.jsx)(r.o1J, {}) })), (y[0] = t))
        : (t = y[0])
      let S = b?.connector_type,
        k = w?.icon_url
      y[1] !== S || y[2] !== k
        ? ((n = (0, a.jsx)(i.R, { size: 20, alt: "", fallback: t, knownAppId: S, logoUrl: k })),
          (y[1] = S),
          (y[2] = k),
          (y[3] = n))
        : (n = y[3])
      let M = n
      ;(y[4] !== w?.display_name || y[5] !== b?.connector_type
        ? ((o =
            w?.display_name ??
            b?.connector_type ??
            (0, a.jsx)(s.A, { id: "inbox.automations.cloud.webhook.fallback", defaultMessage: "Webhook" })),
          (y[4] = w?.display_name),
          (y[5] = b?.connector_type),
          (y[6] = o))
        : (o = y[6]),
        y[7] !== o
          ? ((m = (0, a.jsx)("span", { className: "break-words select-text", children: o })), (y[7] = o), (y[8] = m))
          : (m = y[8]))
      let C = m
      y[9] !== j || y[10] !== b?.is_enabled
        ? ((g =
            j && b?.is_enabled === !1
              ? (0, a.jsx)(s.A, {
                  id: "inbox.automations.cloud.webhook.inactive",
                  defaultMessage: "Trigger inactive \u2014 this trigger won\u2019t start the task",
                })
              : null),
          (y[9] = j),
          (y[10] = b?.is_enabled),
          (y[11] = g))
        : (g = y[11])
      let D = g
      if ("form" === A) {
        let e,
          t,
          n,
          l,
          o,
          i,
          r,
          c = C
        if (b?.connector_type === "slack" && "message" === b.webhook_name) {
          let e
          ;(y[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(s.A, {
                id: "automations.configuration.slackTask",
                defaultMessage: "New Slack message",
              })),
              (y[12] = e))
            : (e = y[12]),
            (c = e))
        } else if (b?.connector_type === "gmail" && "message" === b.webhook_name) {
          let e
          ;(y[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(s.A, { id: "automations.configuration.gmailTask", defaultMessage: "New email" })),
              (y[13] = e))
            : (e = y[13]),
            (c = e))
        } else if (b?.connector_type === "github" && "pull_request" === b.webhook_name) {
          let e
          ;(y[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(s.A, { id: "automations.configuration.githubEvent", defaultMessage: "GitHub event" })),
              (y[14] = e))
            : (e = y[14]),
            (c = e))
        }
        return (
          y[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(s.A, { id: "automations.configuration.schedule", defaultMessage: "Trigger" })),
              (y[15] = e))
            : (e = y[15]),
          y[16] !== c
            ? ((t = (0, a.jsx)("span", { className: "min-w-0 text-end break-words", children: c })),
              (y[16] = c),
              (y[17] = t))
            : (t = y[17]),
          y[18] !== M
            ? ((n = (0, a.jsx)("span", { className: "shrink-0 text-default", children: M })), (y[18] = M), (y[19] = n))
            : (n = y[19]),
          y[20] !== n || y[21] !== t
            ? ((l = (0, a.jsx)(d.ic, {
                variant: "nested",
                labelSizing: "content",
                label: e,
                control: (0, a.jsxs)("span", {
                  className: "flex min-w-0 items-center gap-1.5 text-tertiary",
                  children: [t, n],
                }),
              })),
              (y[20] = n),
              (y[21] = t),
              (y[22] = l))
            : (l = y[22]),
          y[23] !== D
            ? ((o = null != D ? (0, a.jsx)(d.ic, { variant: "nested", label: D, control: null }) : null),
              (y[23] = D),
              (y[24] = o))
            : (o = y[24]),
          y[25] !== w || y[26] !== b?.connector_type
            ? ((i =
                null == w
                  ? (0, a.jsx)(d.ic, {
                      variant: "nested",
                      label: (0, a.jsx)(s.A, {
                        id: "inbox.automations.cloud.webhook.unavailable",
                        defaultMessage: "Trigger details unavailable",
                      }),
                      control: null,
                    })
                  : w.condition_rows.map((e) => {
                      let { id: t, label: n, value: l } = e
                      return (0, a.jsx)(
                        d.ic,
                        {
                          variant: "nested",
                          labelSizing: "content",
                          label:
                            b?.connector_type === "slack" && "channels" === t
                              ? (0, a.jsx)(s.A, {
                                  id: "automations.configuration.channels",
                                  defaultMessage: "In channels",
                                })
                              : n,
                          control: (0, a.jsx)("span", {
                            className: "min-w-0 text-end break-words text-tertiary select-text",
                            children: l,
                          }),
                        },
                        t,
                      )
                    })),
              (y[25] = w),
              (y[26] = b?.connector_type),
              (y[27] = i))
            : (i = y[27]),
          y[28] !== l || y[29] !== o || y[30] !== i
            ? ((r = (0, a.jsxs)(u.t, { variant: "form", children: [l, o, i] })),
              (y[28] = l),
              (y[29] = o),
              (y[30] = i),
              (y[31] = r))
            : (r = y[31]),
          r
        )
      }
      return (
        y[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)("span", {
              className: "select-none",
              children: (0, a.jsx)(s.A, { id: "inbox.automations.cloud.webhook.trigger", defaultMessage: "Trigger" }),
            })),
            (y[32] = f))
          : (f = y[32]),
        y[33] !== M || y[34] !== D || y[35] !== C || y[36] !== v || y[37] !== b
          ? ((_ = (0, a.jsx)(c.C, {
              title: f,
              children: (0, a.jsx)(u.t, {
                children:
                  null != b && null != v
                    ? (0, a.jsx)(d.kG, {
                        description: D,
                        edgeRounding: "surface",
                        icon: M,
                        label: C,
                        trailing: (0, a.jsx)(r.uM3, {}),
                        onClick: () => v(b),
                      })
                    : (0, a.jsx)(d.ic, {
                        control:
                          null != D
                            ? (0, a.jsx)("span", { className: "text-sm text-secondary select-none", children: D })
                            : null,
                        icon: M,
                        label: C,
                      }),
              }),
            })),
            (y[33] = M),
            (y[34] = D),
            (y[35] = C),
            (y[36] = v),
            (y[37] = b),
            (y[38] = _))
          : (_ = y[38]),
        y[39] !== w || y[40] !== T
          ? ((x =
              (null == w && T) || (w?.condition_rows.length ?? 0) > 0
                ? (0, a.jsx)(c.C, {
                    title: (0, a.jsx)("span", {
                      className: "select-none",
                      children: (0, a.jsx)(s.A, {
                        id: "inbox.automations.cloud.webhook.condition",
                        defaultMessage: "Condition",
                      }),
                    }),
                    children: (0, a.jsx)(u.t, {
                      children:
                        null == w
                          ? (0, a.jsx)(d.ic, {
                              control: null,
                              label: (0, a.jsx)("span", {
                                className: "select-none",
                                children: (0, a.jsx)(s.A, {
                                  id: "inbox.automations.cloud.webhook.unavailable",
                                  defaultMessage: "Trigger details unavailable",
                                }),
                              }),
                              variant: "nested",
                            })
                          : w.condition_rows.map(h),
                    }),
                  })
                : null),
            (y[39] = w),
            (y[40] = T),
            (y[41] = x))
          : (x = y[41]),
        y[42] !== x || y[43] !== _
          ? ((p = (0, a.jsxs)(a.Fragment, { children: [_, x] })), (y[42] = x), (y[43] = _), (y[44] = p))
          : (p = y[44]),
        p
      )
    }
    function h(e) {
      let { id: t, label: n, value: l } = e
      return (0, a.jsx)(
        d.ic,
        {
          control: (0, a.jsx)("span", {
            className: "max-w-64 text-end text-base break-words text-default select-text",
            children: l,
          }),
          label: (0, a.jsx)("span", { className: "select-none", children: n }),
          labelSizing: "content",
          variant: "nested",
        },
        t,
      )
    }
    n.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            n,
            i = (0, l.c)(17),
            { triggers: r, isAutomationEnabled: d, onOpenTrigger: u, showUnavailableConditions: c, variant: h } = e,
            g = void 0 === c || c,
            f = void 0 === h ? "default" : h
          if (null == r || 0 === r.length) {
            let e
            return (
              i[0] !== d || i[1] !== g || i[2] !== f
                ? ((e = (0, a.jsx)(m, {
                    variant: f,
                    trigger: void 0,
                    isAutomationEnabled: d,
                    showUnavailableConditions: g,
                  })),
                  (i[0] = d),
                  (i[1] = g),
                  (i[2] = f),
                  (i[3] = e))
                : (e = i[3]),
              e
            )
          }
          if (i[4] !== d || i[5] !== u || i[6] !== g || i[7] !== r || i[8] !== f) {
            let e
            ;(i[10] !== d || i[11] !== u || i[12] !== g || i[13] !== f
              ? ((e = (e, t) =>
                  (0, a.jsxs)(
                    o.Fragment,
                    {
                      children: [
                        t > 0
                          ? (0, a.jsx)("div", {
                              className: "text-center text-sm text-tertiary select-none",
                              children: (0, a.jsx)(s.A, {
                                id: "inbox.automations.cloud.webhook.or",
                                defaultMessage: "Or",
                              }),
                            })
                          : null,
                        (0, a.jsx)(m, {
                          variant: f,
                          trigger: e,
                          isAutomationEnabled: d,
                          showUnavailableConditions: g,
                          onOpenTrigger: u,
                        }),
                      ],
                    },
                    e.id,
                  )),
                (i[10] = d),
                (i[11] = u),
                (i[12] = g),
                (i[13] = f),
                (i[14] = e))
              : (e = i[14]),
              (t = r.map(e)),
              (i[4] = d),
              (i[5] = u),
              (i[6] = g),
              (i[7] = r),
              (i[8] = f),
              (i[9] = t))
          } else t = i[9]
          return (
            i[15] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[15] = t), (i[16] = n)) : (n = i[16]),
            n
          )
        },
      },
    )
  },
  nWtQ(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      o = n("Wf1j"),
      s = n("oyxz"),
      i = n("dMTK"),
      r = n("KIKs"),
      d = n("fGpH"),
      u = n("mmmg"),
      c = n("ZlGh")
    let m = new Set(u.GR)
    function h(e) {
      return !m.has(e)
    }
    function g(e) {
      return e.trim()
    }
    function f(e, t, n) {
      let a = { hour: "numeric", minute: "2-digit" },
        l = t.formatTimeToParts(e, a),
        o = l.find((e) => "dayPeriod" === e.type)?.value
      n &&
        null != o &&
        l.find((e) => "minute" === e.type)?.value === t.formatNumber(0, { minimumIntegerDigits: 2, useGrouping: !1 }) &&
        (a.minute = void 0)
      let s = t.formatTime(e, a)
      return null == o ? s : s.replace(o, o.toLocaleLowerCase(t.locale))
    }
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n,
            u,
            m = (0, l.c)(39),
            { automation: _, teamId: x, variant: p } = e,
            y = void 0 === p ? "editor" : p,
            b = (0, o.A)(),
            j = (0, r.wv)()
          m[0] !== _ ? ((t = (0, d.Xr)(_)), (m[0] = _), (m[1] = t)) : (t = m[1])
          let v = t,
            T = _.schedule_components
          m[2] !== _ || m[3] !== x
            ? ((n = (0, d.mZ)({ automation: _, teamId: x })), (m[2] = _), (m[3] = x), (m[4] = n))
            : (n = m[4])
          let A = n,
            w = "recurring",
            S = "",
            k = "",
            M = "",
            C = 1
          if ("active" !== v) w = v
          else if (null != A && "condition_watch" !== _.timing_mode) w = "everyMinutes"
          else if ("summary" === y && _.display_schedule) {
            let e
            return (
              m[5] !== _.display_schedule
                ? ((e = (0, a.jsx)(a.Fragment, { children: _.display_schedule })),
                  (m[5] = _.display_schedule),
                  (m[6] = e))
                : (e = m[6]),
              e
            )
          } else if ("condition_watch" === _.timing_mode) w = "monitoring"
          else {
            let e
            m[7] !== _ ? ((e = (0, c.qz)(_)), (m[7] = _), (m[8] = e)) : (e = m[8])
            let t = e.scheduleConfig
            if (null != t.oneTimeDate) {
              let e = `${t.oneTimeDate}T${t.time}:00`
              if (m[9] !== _.schedule_time_of_day || m[10] !== b || m[11] !== j || m[12] !== e || m[13] !== y) {
                let t = new Date(e),
                  n = (0, i.f$)(t, j),
                  a = _.schedule_time_of_day
                ;(0 === n
                  ? ((w = a ?? "time"), (k = f(t, b, "summary" === y)))
                  : n > 0 && n < 7
                    ? ((w = null == a ? "weekdayTime" : "weekday"),
                      (M = b.formatDate(t, { weekday: null == a ? "short" : "long" })),
                      (k = f(t, b, "summary" === y)))
                    : ((w = "date"), (S = b.formatDate(t, { day: "numeric", month: "short" }))),
                  (m[9] = _.schedule_time_of_day),
                  (m[10] = b),
                  (m[11] = j),
                  (m[12] = e),
                  (m[13] = y),
                  (m[14] = w),
                  (m[15] = k),
                  (m[16] = M),
                  (m[17] = S))
              } else ((w = m[14]), (k = m[15]), (M = m[16]), (S = m[17]))
            } else if ("hourly" === t.mode) w = 1 === (C = t.intervalHours ?? 1) ? "hourly" : "everyHours"
            else {
              let e = /(?:^|\r?\n)RRULE:([^\r\n]+)/.exec(_.schedule)?.[1],
                t = /(?:^|;)INTERVAL=([^;]+)/.exec(e ?? "")?.[1]
              if (null == t || "1" === t)
                switch (T.frequency) {
                  case "custom":
                  case "once":
                  case "yearly":
                    break
                  case "hourly":
                  case "monthly":
                    w = T.frequency
                    break
                  case "daily": {
                    let e = T.by_hour,
                      t = T.by_minute
                    if ("flexible_schedule" === _.timing_mode) w = "daily"
                    else if (
                      null != e &&
                      null != t &&
                      Number.isInteger(e) &&
                      Number.isInteger(t) &&
                      e >= 0 &&
                      e <= 23 &&
                      t >= 0 &&
                      t <= 59
                    ) {
                      let n
                      ;((w = "dailyTime"),
                        m[18] !== e || m[19] !== b || m[20] !== t || m[21] !== y
                          ? ((n = f(new Date(2e3, 0, 1, e, t), b, "summary" === y)),
                            (m[18] = e),
                            (m[19] = b),
                            (m[20] = t),
                            (m[21] = y),
                            (m[22] = n))
                          : (n = m[22]),
                        (k = n))
                    }
                    break
                  }
                  case "weekly": {
                    let e, t
                    if (
                      (m[23] !== T.by_day
                        ? ((e = 0 === (t = new Set(T.by_day?.split(",").map(g))).size || [...t].some(h)),
                          (m[23] = T.by_day),
                          (m[24] = e),
                          (m[25] = t))
                        : ((e = m[24]), (t = m[25])),
                      e)
                    )
                      break
                    if (1 === t.size) {
                      let e
                      ;(m[26] !== t ? ((e = [...t][0] ?? "recurring"), (m[26] = t), (m[27] = e)) : (e = m[27]), (w = e))
                    } else
                      w =
                        5 === t.size && ["MO", "TU", "WE", "TH", "FR"].every((e) => t.has(e))
                          ? "weekdays"
                          : 2 === t.size && t.has("SA") && t.has("SU")
                            ? "weekends"
                            : "weekly"
                  }
                }
            }
          }
          if ("summary" === y && ("dailyTime" === w || "weekdayTime" === w)) {
            let e
            return (
              m[28] !== w || m[29] !== k || m[30] !== M
                ? ((e = (0, a.jsx)(s.A, {
                    id: "automations.scheduled.summary.compactCadenceWithTime",
                    defaultMessage: "{cadence, select, dailyTime {Daily \xb7 {time}} other {{weekday} \xb7 {time}}}",
                    values: { cadence: w, time: k, weekday: M },
                  })),
                  (m[28] = w),
                  (m[29] = k),
                  (m[30] = M),
                  (m[31] = e))
                : (e = m[31]),
              e
            )
          }
          return (
            m[32] !== w || m[33] !== S || m[34] !== C || m[35] !== A || m[36] !== k || m[37] !== M
              ? ((u = (0, a.jsx)(s.A, {
                  id: "automations.scheduled.editor.compactCadenceWithMinutes",
                  defaultMessage:
                    "{cadence, select, completed {Completed} paused {Paused} monitoring {Monitoring} daily {Daily} dailyTime {Daily {time}} everyMinutes {Every {minutes, number} min} hourly {Hourly} everyHours {Every {hours, plural, one {hour} other {# hours}}} weekly {Weekly} weekdays {Weekdays} weekends {Weekends} monthly {Monthly} MO {Mondays} TU {Tuesdays} WE {Wednesdays} TH {Thursdays} FR {Fridays} SA {Saturdays} SU {Sundays} morning {Morning} afternoon {Afternoon} evening {Evening} night {Night} time {{time}} weekday {{weekday}} weekdayTime {{weekday} {time}} date {{date}} other {Recurring}}",
                  values: { cadence: w, date: S, time: k, weekday: M, hours: C, minutes: A },
                })),
                (m[32] = w),
                (m[33] = S),
                (m[34] = C),
                (m[35] = A),
                (m[36] = k),
                (m[37] = M),
                (m[38] = u))
              : (u = m[38]),
            u
          )
        },
      },
    )
  },
  ELci(e, t, n) {
    n.d(t, { M: () => eu, Q: () => er })
    var a = n("ABep"),
      l = n("QosV"),
      o = n("ULZ9"),
      s = n("on57"),
      i = n("SZCv"),
      r = n.n(i),
      d = n("qmMi"),
      u = n("DBCl"),
      c = n("zd8w"),
      m = n("Wf1j"),
      h = n("oyxz"),
      g = n("Ywss"),
      f = n("SPnB"),
      _ = n("GIgU"),
      x = n("my85"),
      p = n("LTLZ"),
      y = n("jov5"),
      b = n("yCFB"),
      j = n("R2L4"),
      v = n("rL0w"),
      T = n("SV27"),
      A = n("jAnS"),
      w = n("Sm6l"),
      S = n("JNtf"),
      k = n("mUDD"),
      M = n("SGsN"),
      C = n("KIKs"),
      D = n("hlym"),
      E = n("OWtl"),
      I = n("soaw"),
      N = n("aa4G"),
      R = n("fyx9"),
      P = n("odKs"),
      U = n("sn2N"),
      O = n("ED7I"),
      L = n("qFJj"),
      K = n("fGpH"),
      H = n("Ro2M"),
      q = n("p2tp"),
      z = n("nWtQ"),
      G = n("c7WY"),
      $ = n("k7o2"),
      F = n("sujc"),
      W = n("nvO1"),
      V = n("sK0R")
    let Y = (0, d.i1)(E.u, (e, { get: t }) => {
      let n = e.cloudTeam
      if (null != n && !t(W.lc, n.accountId)) return !0
      let a = t(V.LN, { draft: e, personal: null == n })
      if (null == n) return a?.status !== "loading"
      let l = t(W.Bn, n)
      if (null == l.data) return null != l.error
      let o = (0, W.id)(l.data)
      if (null == o) return !0
      let s = { ...n, serviceAccountId: o },
        i = t($.WD, s),
        r = t(F.T, s),
        d = t($.Ys, { ...s, view: "installed", query: "" }),
        u =
          (null != i.data || null != i.error) &&
          (null != r.data || null != r.error) &&
          (null != i.error || null != r.error || null != d.data || null != d.error)
      return a?.status !== "loading" && u
    })
    var B = n("qjUD"),
      Q = n("ZlGh"),
      Z = n("xA2X"),
      J = n("CKur"),
      X = n("AWNZ"),
      ee = n("ZEx5"),
      et = n("OMIV"),
      en = n("kK7d"),
      ea = n("GDNt")
    let el = (0, d.vU)(E.u, (e, { get: t, scope: n }) => {
      let a = t(f.chatGptAuthenticatedAccountId$)
      return {
        enabled: "allowed" === t(f.m0).status && null != a,
        queryKey: ["cloud-automations", "webhook-batch", a, e],
        queryFn: async ({ signal: t }) => {
          let l = await en.CodexRequest.safeGet("/automation/{automation_id}/webhook_batch_state", {
            parameters: { path: { automation_id: e } },
            signal: t,
          })
          if ((t.throwIfAborted(), null != l.is_enabled && n.get(f.chatGptAuthenticatedAccountId$) === a)) {
            let t = l.is_enabled
            ;(n.queryClient.setQueriesData({ queryKey: ["cloud-automations", "scheduled-page", a] }, (n) => {
              if (null == n) return n
              let a = n.pages.map((n) =>
                n.items.some((n) => n.id === e && n.is_enabled !== t)
                  ? {
                      ...n,
                      items: n.items.map((n) => (n.id === e && n.is_enabled !== t ? { ...n, is_enabled: t } : n)),
                    }
                  : n,
              )
              return a.some((e, t) => e !== n.pages[t]) ? { ...n, pages: a } : void 0
            }),
              n.query.setData(H._x, (n) =>
                n?.accountId === a && n?.items.some(({ automation: n }) => n.id === e && n.is_enabled !== t)
                  ? {
                      ...n,
                      items: n.items.map((n) =>
                        n.automation.id === e ? { ...n, automation: { ...n.automation, is_enabled: t } } : n,
                      ),
                    }
                  : n,
              ),
              n.query.setData(H.jv, e, (e) =>
                null == e || e.automation.is_enabled === t
                  ? e
                  : { ...e, automation: { ...e.automation, is_enabled: t } },
              ))
          }
          return l
        },
        refetchInterval: 5e3,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        retry: !1,
        staleTime: 0,
      }
    })
    function eo(e) {
      let t,
        n,
        o,
        s,
        i,
        r,
        u,
        g,
        _,
        x,
        p,
        y = (0, l.c)(45),
        { automation: b, disabled: j, hasChanges: v, isRunning: T, onRunningChange: A, onStarted: S } = e,
        k = (0, d.gh)(E.u),
        C = (0, d._U)(et.JW, "1159770884"),
        D = (0, m.A)(),
        I = (0, c.useRef)(null)
      y[0] !== C ? ((t = { enabled: C }), (y[0] = C), (y[1] = t)) : (t = y[1])
      let { data: N, isPending: R, error: P, refetch: U } = (0, d._U)(el, b.id, t),
        { isPending: O } = (0, d.Ul)(H.x2),
        L = P instanceof ea.fk ? P.status : null,
        q = 404 === L || 410 === L,
        z = 401 === L || 403 === L,
        G = (N?.is_enabled ?? b.is_enabled) === !1 && !q && !z && null != N && N.pending_event_count > 0
      y[2] !== b || y[3] !== N || y[4] !== P || y[5] !== v || y[6] !== G
        ? ((n = (0, K.kn)(b) && !G && !v && null == P && null != N && N.pending_event_count > 0),
          (y[2] = b),
          (y[3] = N),
          (y[4] = P),
          (y[5] = v),
          (y[6] = G),
          (y[7] = n))
        : (n = y[7])
      let $ = n
      if (
        (y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = () => () => I.current?.abort()), (s = []), (y[8] = o), (y[9] = s))
          : ((o = y[8]), (s = y[9])),
        (0, c.useEffect)(o, s),
        !C)
      )
        return null
      y[10] !== b.conversation_id ||
      y[11] !== b.id ||
      y[12] !== j ||
      y[13] !== D ||
      y[14] !== A ||
      y[15] !== S ||
      y[16] !== U ||
      y[17] !== k
        ? ((i = (e) => {
            if (j || null != I.current) return
            let t = k.get(f.chatGptAuthenticatedAccountId$),
              n = new AbortController()
            ;((I.current = n),
              A(!0),
              ("resume" === e
                ? k.get(H.x2).mutateAsync({ automationId: b.id, isEnabled: !0 }).then(ei)
                : en.CodexRequest.safePost("/automation/{automation_id}/webhook_batch/run_now", {
                    parameters: { path: { automation_id: b.id } },
                    requestBody: { request_id: globalThis.crypto.randomUUID() },
                    signal: n.signal,
                  }).then(es)
              )
                .then((e) => {
                  n.signal.aborted ||
                    k.get(f.chatGptAuthenticatedAccountId$) !== t ||
                    0 === e ||
                    (k
                      .get(M.Id)
                      .success(
                        D.formatMessage(
                          {
                            id: "automations.editor.webhook.runNowSuccessWithCount",
                            defaultMessage: "Running {count, plural, one {# pending event} other {# pending events}}",
                          },
                          { count: e },
                        ),
                      ),
                    null != b.conversation_id && k.query.invalidate(J.chatGptConversationQueryById$, b.conversation_id),
                    S())
                })
                .catch(() => {
                  n.signal.aborted ||
                    k.get(f.chatGptAuthenticatedAccountId$) !== t ||
                    k
                      .get(M.Id)
                      .danger(
                        "resume" === e
                          ? D.formatMessage({
                              id: "automations.scheduled.webhook.resumeError",
                              defaultMessage: "Couldn\u2019t resume task",
                            })
                          : D.formatMessage({
                              id: "automations.editor.webhook.runNowFailure",
                              defaultMessage: "Couldn\u2019t run pending events",
                            }),
                        {
                          errorAnalytics: {
                            toastId: "resume" === e ? "toggle_automation_status" : "automation_editor_webhook_run_now",
                          },
                        },
                      )
                })
                .finally(() => {
                  ;((I.current = null),
                    n.signal.aborted || k.get(f.chatGptAuthenticatedAccountId$) !== t || (A(!1), U()))
                }))
          }),
          (y[10] = b.conversation_id),
          (y[11] = b.id),
          (y[12] = j),
          (y[13] = D),
          (y[14] = A),
          (y[15] = S),
          (y[16] = U),
          (y[17] = k),
          (y[18] = i))
        : (i = y[18])
      let F = i
      if (R) {
        let e
        ;(y[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsLoading",
              defaultMessage: "Checking pending events\u2026",
            })),
            (y[19] = e))
          : (e = y[19]),
          (r = e))
      } else if (q) {
        let e
        ;(y[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsTerminal",
              defaultMessage: "This task has ended and can\u2019t process pending events",
            })),
            (y[20] = e))
          : (e = y[20]),
          (r = e))
      } else if (null != P) {
        let e
        ;(y[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsError",
              defaultMessage: "Unable to check pending events",
            })),
            (y[21] = e))
          : (e = y[21]),
          (r = e))
      } else {
        let e,
          t = N?.pending_event_count
        ;(y[22] !== t
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEvents",
              defaultMessage: "{count, plural, one {# event waiting} other {# events waiting}}",
              values: { count: t },
            })),
            (y[22] = t),
            (y[23] = e))
          : (e = y[23]),
          (r = e))
      }
      if (O) {
        let e
        ;(y[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsStatusUpdating",
              defaultMessage: "Updating task status\u2026",
            })),
            (y[24] = e))
          : (e = y[24]),
          (u = e))
      } else if (T) {
        let e
        ;(y[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsStarting",
              defaultMessage: "Starting pending events\u2026",
            })),
            (y[25] = e))
          : (e = y[25]),
          (u = e))
      } else if (G) {
        let e
        ;(y[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsPaused",
              defaultMessage: "Task is paused. Resume to process pending events.",
            })),
            (y[26] = e))
          : (e = y[26]),
          (u = e))
      }
      return (
        y[27] !== $ || y[28] !== P || y[29] !== z || y[30] !== G || y[31] !== q
          ? ((g = null),
            G ? (g = "resume") : null == P || z || q ? $ && (g = "run") : (g = "retry"),
            (y[27] = $),
            (y[28] = P),
            (y[29] = z),
            (y[30] = G),
            (y[31] = q),
            (y[32] = g))
          : (g = y[32]),
        y[33] !== r
          ? ((_ = (0, a.jsx)("span", { "aria-live": "polite", className: "select-none", children: r })),
            (y[33] = r),
            (y[34] = _))
          : (_ = y[34]),
        y[35] !== g || y[36] !== j || y[37] !== T || y[38] !== U || y[39] !== F
          ? ((x =
              null == g
                ? null
                : (0, a.jsxs)(w.$, {
                    color: "secondary",
                    disabled: j,
                    loading: T,
                    type: "button",
                    onClick: () => {
                      "retry" === g ? U() : null != g && F(g)
                    },
                    children: [
                      "resume" === g &&
                        (0, a.jsx)(h.A, { id: "automations.editor.webhook.resume", defaultMessage: "Resume" }),
                      "retry" === g &&
                        (0, a.jsx)(h.A, { id: "automations.editor.webhook.retry", defaultMessage: "Retry" }),
                      "run" === g &&
                        (0, a.jsx)(h.A, { id: "automations.editor.webhook.runNow", defaultMessage: "Run now" }),
                    ],
                  })),
            (y[35] = g),
            (y[36] = j),
            (y[37] = T),
            (y[38] = U),
            (y[39] = F),
            (y[40] = x))
          : (x = y[40]),
        y[41] !== u || y[42] !== _ || y[43] !== x
          ? ((p = (0, a.jsx)(ee.t, {
              children: (0, a.jsx)(X.ic, { size: "compact", label: _, description: u, control: x }),
            })),
            (y[41] = u),
            (y[42] = _),
            (y[43] = x),
            (y[44] = p))
          : (p = y[44]),
        p
      )
    }
    function es(e) {
      return e.flushed_event_count ?? 0
    }
    function ei() {
      return 0
    }
    function er(e) {
      let t,
        n,
        i,
        N,
        $,
        F,
        W,
        V,
        J,
        X,
        ee,
        et,
        en,
        ea,
        el,
        es,
        ei,
        er,
        ec,
        em,
        eh,
        eg,
        ef,
        e_,
        ex,
        ep,
        ey,
        eb,
        ej,
        ev,
        eT,
        eA,
        ew,
        eS,
        ek,
        eM,
        eC,
        eD,
        eE,
        eI,
        eN,
        eR,
        eP,
        eU,
        eO,
        eL,
        eK,
        eH,
        eq,
        ez,
        eG,
        e$,
        eF,
        eW,
        eV,
        eY,
        eB = (0, l.c)(265),
        {
          ref: eQ,
          item: eZ,
          relatedActions: eJ,
          waitForInitialData: eX,
          onOpen: e1,
          onClose: e0,
          onStatusChangeRequested: e2,
        } = e,
        e3 = (0, d.gh)(E.u),
        e4 = (0, m.A)(),
        e5 = (0, g.Zp)(),
        e6 = (0, g.zy)(),
        e7 = (0, C.wv)(),
        e8 = (0, d.Ul)(y.e),
        e9 = (0, c.useId)(),
        te = (0, c.useId)(),
        tt = (0, c.useId)(),
        tn = (0, I.a)(),
        ta = (0, c.useRef)(null),
        tl = (0, c.useRef)(!1),
        to = (0, c.useRef)(null),
        ts = (0, c.useRef)(null),
        { automation: ti } = eZ
      eB[0] !== e8 || eB[1] !== eZ.teamId || eB[2] !== e3
        ? ((t = (e) => {
            let t = e3.get(f.chatGptAuthenticatedAccountId$),
              n = eZ.teamId ?? e.team_id,
              a = {
                ...(0, Q.qz)(e, e8 ? "configuration" : void 0),
                cloudTeam: null != t && null != n ? { accountId: t, teamId: n } : null,
              }
            return e8 ? (0, T.$6)(a) : a
          }),
          (eB[0] = e8),
          (eB[1] = eZ.teamId),
          (eB[2] = e3),
          (eB[3] = t))
        : (t = eB[3])
      let tr = t
      eB[4] !== ti || eB[5] !== tr ? ((n = () => tr(ti)), (eB[4] = ti), (eB[5] = tr), (eB[6] = n)) : (n = eB[6])
      let [td] = (0, c.useState)(n),
        [tu, tc] = (0, c.useState)(!1),
        tm = (0, d._U)(!(void 0 !== eX && eX) || !e8 || Y, td)
      eB[7] !== tu || eB[8] !== e1
        ? ((i = () => {
            tu || (tc(!0), e1?.())
          }),
          (eB[7] = tu),
          (eB[8] = e1),
          (eB[9] = i))
        : (i = eB[9])
      let th = i
      eB[10] !== ti.id || eB[11] !== td || eB[12] !== e6.search || eB[13] !== e3
        ? ((N = () => {
            let e = (0, v.R4)(e3, new URLSearchParams(e6.search), ti.id)
            return e?.draft.cloudTeam?.teamId === td.cloudTeam?.teamId ? (e?.draft ?? td) : td
          }),
          (eB[10] = ti.id),
          (eB[11] = td),
          (eB[12] = e6.search),
          (eB[13] = e3),
          (eB[14] = N))
        : (N = eB[14])
      let [tg, tf] = (0, c.useState)(N)
      eB[15] !== tg.scheduleConfig.oneTimeDate || eB[16] !== tg.scheduleConfig.time
        ? (($ = (e) => {
            tf(
              e.scheduleConfig.oneTimeDate !== tg.scheduleConfig.oneTimeDate ||
                e.scheduleConfig.time !== tg.scheduleConfig.time
                ? { ...e, scheduleConfig: { ...e.scheduleConfig, oneTimeSeconds: 0 } }
                : e,
            )
          }),
          (eB[15] = tg.scheduleConfig.oneTimeDate),
          (eB[16] = tg.scheduleConfig.time),
          (eB[17] = $))
        : ($ = eB[17])
      let t_ = $,
        [tx, tp] = (0, c.useState)(!1),
        [ty, tb] = (0, c.useState)(null),
        [tj, tv] = (0, c.useState)(!1),
        [tT, tA] = (0, c.useState)(null),
        [tw, tS] = (0, c.useState)(!1),
        { isPending: tk } = (0, d.Ul)(H.x2),
        { isPending: tM } = (0, d.Ul)(H.lu),
        tC = tj || tw || tk || tM,
        tD = tT ?? ti
      eB[18] !== tD ? ((F = (0, K.Xr)(tD)), (eB[18] = tD), (eB[19] = F)) : (F = eB[19])
      let tE = "completed" === F
      eB[20] !== tD || eB[21] !== tE
        ? ((W = (0, K.RQ)(tD).canManage && !tE), (eB[20] = tD), (eB[21] = tE), (eB[22] = W))
        : (W = eB[22])
      let tI = W,
        tN = "condition_watch" === ti.timing_mode
      eB[23] !== ti ? ((V = (0, K.nT)(ti)), (eB[23] = ti), (eB[24] = V)) : (V = eB[24])
      let tR = V
      eB[25] !== tr || eB[26] !== td || eB[27] !== tT
        ? ((J = null == tT ? td : tr(tT)), (eB[25] = tr), (eB[26] = td), (eB[27] = tT), (eB[28] = J))
        : (J = eB[28])
      let tP = J
      eB[29] !== tD || eB[30] !== tg
        ? ((X = (0, Q.tV)(tD, tg)), (eB[29] = tD), (eB[30] = tg), (eB[31] = X))
        : (X = eB[31])
      let tU = X
      eB[32] !== tg || eB[33] !== tP
        ? ((ee =
            tg.name !== tP.name ||
            (0, _.Tj)(tg) !== (0, _.Tj)(tP) ||
            (tg.eventTrigger?.when ?? "") !== (tP.eventTrigger?.when ?? "")),
          (eB[32] = tg),
          (eB[33] = tP),
          (eB[34] = ee))
        : (ee = eB[34])
      let tO = ee
      eB[35] !== tD || eB[36] !== tg || eB[37] !== e7
        ? ((et = (0, Q.Rd)(tD, tg, e7)), (eB[35] = tD), (eB[36] = tg), (eB[37] = e7), (eB[38] = et))
        : (et = eB[38])
      let tL = et
      eB[39] !== tI ||
      eB[40] !== tD.environments ||
      eB[41] !== tD.prompt ||
      eB[42] !== tD.team_id ||
      eB[43] !== tL ||
      eB[44] !== tg ||
      eB[45] !== tU ||
      eB[46] !== e8 ||
      eB[47] !== eZ.teamId
        ? ((en = (0, _.Tj)(tg, tD.prompt)),
          (ea =
            tI &&
            tU &&
            (null != eZ.teamId || null != tD.team_id || r()(tg.environments, tD.environments) || (0, _.y5)(tg)) &&
            tg.name.trim().length > 0 &&
            tg.prompt.trim().length > 0 &&
            (!e8 || (tg.name.length <= 250 && !(0, u.wPy)(en))) &&
            null == tL &&
            (!tg.scheduleDirty || (0, P.SK)(tg.scheduleConfig))),
          (eB[39] = tI),
          (eB[40] = tD.environments),
          (eB[41] = tD.prompt),
          (eB[42] = tD.team_id),
          (eB[43] = tL),
          (eB[44] = tg),
          (eB[45] = tU),
          (eB[46] = e8),
          (eB[47] = eZ.teamId),
          (eB[48] = en),
          (eB[49] = ea))
        : ((en = eB[48]), (ea = eB[49]))
      let tK = ea
      eB[50] !== ti.id || eB[51] !== e6.search || eB[52] !== e3
        ? ((el = () => {
            ;(0, v.iP)(e3, new URLSearchParams(e6.search), ti.id)
          }),
          (eB[50] = ti.id),
          (eB[51] = e6.search),
          (eB[52] = e3),
          (eB[53] = el))
        : (el = eB[53])
      let tH = el
      eB[54] !== ti.id ||
      eB[55] !== tg ||
      eB[56] !== td ||
      eB[57] !== e6.pathname ||
      eB[58] !== e6.search ||
      eB[59] !== e3
        ? ((es = () => {
            let e = (0, v.uU)(
              e3,
              { draft: tg, initialDraft: td, hasSelectedSchedule: !0 },
              `${(0, R.d0)()}?${new URLSearchParams({ automationId: ti.id, automationSource: "cloud", edit_modal: "true" })}`,
            )
            return null != e ? ((to.current = tg), e) : e6.pathname + e6.search
          }),
          (eB[54] = ti.id),
          (eB[55] = tg),
          (eB[56] = td),
          (eB[57] = e6.pathname),
          (eB[58] = e6.search),
          (eB[59] = e3),
          (eB[60] = es))
        : (es = eB[60])
      let tq = es
      eB[61] !== tH || eB[62] !== e0
        ? ((ei = () => {
            let e = ts.current
            ;((ts.current = null), (tl.current = !0), tH(), e0(), e?.(!0))
          }),
          (eB[61] = tH),
          (eB[62] = e0),
          (eB[63] = ei))
        : (ei = eB[63])
      let tz = ei
      eB[64] !== tz || eB[65] !== tO || eB[66] !== tC
        ? ((er = () => {
            tC || (tO ? tp(!0) : tz())
          }),
          (eB[64] = tz),
          (eB[65] = tO),
          (eB[66] = tC),
          (eB[67] = er))
        : (er = eB[67])
      let tG = er
      ;(eB[68] !== tC || eB[69] !== tG
        ? ((ec = () => ({
            requestClose: () =>
              tC || null != ts.current
                ? Promise.resolve(!1)
                : new Promise((e) => {
                    ;((ts.current = e), tG())
                  }),
          })),
          (eB[68] = tC),
          (eB[69] = tG),
          (eB[70] = ec))
        : (ec = eB[70]),
        (0, c.useImperativeHandle)(eQ, ec),
        eB[71] !== tK ||
        eB[72] !== tH ||
        eB[73] !== tD ||
        eB[74] !== tg ||
        eB[75] !== e4 ||
        eB[76] !== tn ||
        eB[77] !== tC ||
        eB[78] !== e0 ||
        eB[79] !== e3
          ? ((em = () => {
              if (tC || null != ta.current || !tK) return
              let e = e3.get(f.chatGptAuthenticatedAccountId$),
                t = new AbortController()
              ;((ta.current = t), tv(!0))
              let n = () => !t.signal.aborted && tn() && e3.get(f.chatGptAuthenticatedAccountId$) === e
              ;(0, G.CN)(e3, { automation: tD, draft: tg, signal: t.signal })
                .then(() => {
                  n() && ((tl.current = !0), tH(), e0())
                })
                .catch((e) => {
                  n() &&
                    e3
                      .get(M.Id)
                      .danger(
                        e4.formatMessage({
                          id: "automations.scheduled.editor.saveError",
                          defaultMessage: "Couldn\u2019t save task",
                        }),
                        {
                          errorAnalytics: { toastId: "automations.scheduled.editor.saveError" },
                          description: (0, L.P)(e, e4),
                        },
                      )
                })
                .finally(() => {
                  ;((ta.current = null), tn() && tv(!1))
                })
            }),
            (eB[71] = tK),
            (eB[72] = tH),
            (eB[73] = tD),
            (eB[74] = tg),
            (eB[75] = e4),
            (eB[76] = tn),
            (eB[77] = tC),
            (eB[78] = e0),
            (eB[79] = e3),
            (eB[80] = em))
          : (em = eB[80]))
      let t$ = em
      ;(eB[81] === Symbol.for("react.memo_cache_sentinel")
        ? ((eh = () => () => {
            ;(ta.current?.abort(), ts.current?.(!1))
          }),
          (eg = []),
          (eB[81] = eh),
          (eB[82] = eg))
        : ((eh = eB[81]), (eg = eB[82])),
        (0, c.useEffect)(eh, eg),
        eB[83] !== tg
          ? ((ef = (e) => {
              to.current !== tg && e.preventDefault()
            }),
            (eB[83] = tg),
            (eB[84] = ef))
          : (ef = eB[84]))
      let tF = (0, c.useEffectEvent)(ef)
      ;(eB[85] !== tO || eB[86] !== tF
        ? ((e_ = () => {
            if (tO)
              return (window.addEventListener("beforeunload", tF), () => window.removeEventListener("beforeunload", tF))
          }),
          (eB[85] = tO),
          (eB[86] = tF),
          (eB[87] = e_))
        : (e_ = eB[87]),
        eB[88] !== tO ? ((ex = [tO]), (eB[88] = tO), (eB[89] = ex)) : (ex = eB[89]),
        (0, c.useEffect)(e_, ex))
      let tW = tN ? "text-sm leading-5 font-medium uppercase" : "text-base leading-7 font-normal",
        tV = tN || (tD.is_enabled && !tE) ? "text-info" : "text-tertiary"
      ;(eB[90] !== tW || eB[91] !== tV
        ? ((ep = (0, s.A)("select-none", tW, tV)), (eB[90] = tW), (eB[91] = tV), (eB[92] = ep))
        : (ep = eB[92]),
        eB[93] !== tD || eB[94] !== tN || eB[95] !== eZ.teamId
          ? ((ey = tN
              ? (0, a.jsx)(h.A, { id: "automations.scheduled.editor.monitoring", defaultMessage: "Monitoring" })
              : (0, a.jsx)(z.p, { automation: tD, teamId: eZ.teamId })),
            (eB[93] = tD),
            (eB[94] = tN),
            (eB[95] = eZ.teamId),
            (eB[96] = ey))
          : (ey = eB[96]),
        eB[97] !== ep || eB[98] !== ey
          ? ((eb = (0, a.jsx)("p", { className: ep, children: ey })), (eB[97] = ep), (eB[98] = ey), (eB[99] = eb))
          : (eb = eB[99]),
        eB[100] !== e4
          ? ((ej = e4.formatMessage({ id: "automations.editor.title", defaultMessage: "Title" })),
            (eB[100] = e4),
            (eB[101] = ej))
          : (ej = eB[101]))
      let tY = !tI
      ;(eB[102] === Symbol.for("react.memo_cache_sentinel")
        ? ((ev = (e) => tf((t) => ({ ...t, name: e.target.value }))), (eB[102] = ev))
        : (ev = eB[102]),
        eB[103] !== tg.name || eB[104] !== tC || eB[105] !== ej || eB[106] !== tY || eB[107] !== e9
          ? ((eT = (0, a.jsx)("textarea", {
              id: e9,
              className:
                "m-0 block field-sizing-content w-full min-w-0 resize-none overflow-hidden rounded-lg border-0 bg-transparent p-0 text-lg leading-7 font-medium wrap-anywhere text-default outline-none",
              name: "title",
              "aria-label": ej,
              rows: 1,
              readOnly: tY,
              disabled: tC,
              value: tg.name,
              onChange: ev,
              onKeyDown: ed,
            })),
            (eB[103] = tg.name),
            (eB[104] = tC),
            (eB[105] = ej),
            (eB[106] = tY),
            (eB[107] = e9),
            (eB[108] = eT))
          : (eT = eB[108]),
        eB[109] !== eb || eB[110] !== eT
          ? ((eA = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [eb, eT] })),
            (eB[109] = eb),
            (eB[110] = eT),
            (eB[111] = eA))
          : (eA = eB[111]))
      let tB = eA
      eB[112] !== tI || eB[113] !== tD || eB[114] !== e8 || eB[115] !== tC || eB[116] !== eZ || eB[117] !== e2
        ? ((ew = tI
            ? (0, a.jsx)(O.s, {
                item: { ...eZ, automation: tD },
                statusMutation: H.x2,
                onStatusChangeRequested: e2,
                onStatusChanged: tA,
                renderActions: (e) => {
                  let { isPaused: t, isStatusPending: n, pauseAction: l, resumeAction: o } = e
                  return (0, a.jsx)(B.Q, {
                    isPaused: t,
                    isPending: n ?? !1,
                    disabled: tC || !0 === (t ? o : l).disabled,
                    disabledReason: t ? o.disabledReason : void 0,
                    onClick: (t ? o : l).onSelect,
                    size: e8 ? "dialogAction" : "medium",
                  })
                },
              })
            : null),
          (eB[112] = tI),
          (eB[113] = tD),
          (eB[114] = e8),
          (eB[115] = tC),
          (eB[116] = eZ),
          (eB[117] = e2),
          (eB[118] = ew))
        : (ew = eB[118])
      let tQ = ew,
        tZ = !tK || tC
      ;(eB[119] === Symbol.for("react.memo_cache_sentinel")
        ? ((eS = (0, a.jsx)(h.A, { id: "automations.scheduled.editor.save", defaultMessage: "Save" })), (eB[119] = eS))
        : (eS = eB[119]),
        eB[120] !== tt || eB[121] !== tj || eB[122] !== tZ
          ? ((ek = (0, a.jsx)(w.$, { disabled: tZ, loading: tj, form: tt, type: "submit", children: eS })),
            (eB[120] = tt),
            (eB[121] = tj),
            (eB[122] = tZ),
            (eB[123] = ek))
          : (ek = eB[123]),
        eB[124] !== tQ || eB[125] !== ek
          ? ((eM = (0, a.jsxs)(k.Es, { expandSingleButton: !1, children: [tQ, ek] })),
            (eB[124] = tQ),
            (eB[125] = ek),
            (eB[126] = eM))
          : (eM = eB[126]))
      let tJ = eM
      ;(eB[127] !== t$
        ? ((eC = (e) => (0, D.k)(e, () => t$())),
          (eD = (e) => {
            ;(e.preventDefault(), t$())
          }),
          (eB[127] = t$),
          (eB[128] = eC),
          (eB[129] = eD))
        : ((eC = eB[128]), (eD = eB[129])),
        eB[130] === Symbol.for("react.memo_cache_sentinel")
          ? ((eE = (0, a.jsx)(S.L3, {
              className: "sr-only",
              children: (0, a.jsx)(h.A, { id: "automations.scheduled.editor.title", defaultMessage: "Edit task" }),
            })),
            (eB[130] = eE))
          : (eE = eB[130]),
        eB[131] !== tB
          ? ((eI = (0, a.jsxs)(k.OO, { children: [eE, tB] })), (eB[131] = tB), (eB[132] = eI))
          : (eI = eB[132]),
        eB[133] !== th
          ? ((eN = (e) => {
              null != e && th()
            }),
            (eB[133] = th),
            (eB[134] = eN))
          : (eN = eB[134]))
      let tX = !tI || tC
      eB[135] !== tD.is_enabled || eB[136] !== tD.webhook_triggers || eB[137] !== tR || eB[138] !== e5
        ? ((eR = tR
            ? (0, a.jsx)(q.C, {
                triggers: tD.webhook_triggers,
                isAutomationEnabled: tD.is_enabled,
                showUnavailableConditions: !1,
                onOpenTrigger: (e) => {
                  e5(`/settings/connectors?${new URLSearchParams({ connector: e.connector_id })}`)
                },
              })
            : null),
          (eB[135] = tD.is_enabled),
          (eB[136] = tD.webhook_triggers),
          (eB[137] = tR),
          (eB[138] = e5),
          (eB[139] = eR))
        : (eR = eB[139])
      let t1 = `${te}-label`
      ;(eB[140] === Symbol.for("react.memo_cache_sentinel")
        ? ((eP = (0, a.jsx)(h.A, { id: "automations.editor.promptSectionLabel", defaultMessage: "Prompt" })),
          (eB[140] = eP))
        : (eP = eB[140]),
        eB[141] !== te || eB[142] !== t1
          ? ((eU = (0, a.jsx)("label", { id: t1, className: "uppercase select-none", htmlFor: te, children: eP })),
            (eB[141] = te),
            (eB[142] = t1),
            (eB[143] = eU))
          : (eU = eB[143]))
      let t0 = `${te}-label`,
        t2 = `${te}-label`,
        t3 = !tI
      ;(eB[144] === Symbol.for("react.memo_cache_sentinel")
        ? ((eO = (e) => tf((t) => ({ ...t, prompt: e.target.value }))), (eB[144] = eO))
        : (eO = eB[144]),
        eB[145] !== tg.prompt || eB[146] !== te || eB[147] !== t2 || eB[148] !== t3
          ? ((eL = (0, a.jsx)("textarea", {
              id: te,
              className:
                "m-0 block field-sizing-content max-h-56 min-h-28 w-full min-w-0 resize-none overflow-y-auto border-0 bg-transparent p-0 text-base leading-7 font-normal wrap-anywhere text-default outline-none",
              "aria-labelledby": t2,
              name: "prompt",
              readOnly: t3,
              rows: 1,
              value: tg.prompt,
              onChange: eO,
            })),
            (eB[145] = tg.prompt),
            (eB[146] = te),
            (eB[147] = t2),
            (eB[148] = t3),
            (eB[149] = eL))
          : (eL = eB[149]),
        eB[150] !== t0 || eB[151] !== eL
          ? ((eK = (0, a.jsx)("label", {
              className: "block cursor-text rounded-[20px] border border-default p-6 focus-within:border-ring",
              "aria-labelledby": t0,
              children: eL,
            })),
            (eB[150] = t0),
            (eB[151] = eL),
            (eB[152] = eK))
          : (eK = eB[152]),
        eB[153] !== eU || eB[154] !== eK
          ? ((eH = (0, a.jsx)(U.C, { title: eU, children: eK })), (eB[153] = eU), (eB[154] = eK), (eB[155] = eH))
          : (eH = eB[155]),
        eB[156] !== ti.conversation_id ||
        eB[157] !== ti.source_conversation_is_work_mode ||
        eB[158] !== tI ||
        eB[159] !== tD ||
        eB[160] !== tU ||
        eB[161] !== tC ||
        eB[162] !== tw ||
        eB[163] !== tR ||
        eB[164] !== e5 ||
        eB[165] !== e0
          ? ((eq =
              tR && !0 === ti.source_conversation_is_work_mode
                ? (0, a.jsx)(eo, {
                    automation: tD,
                    disabled: !tI || tC,
                    hasChanges: tU,
                    isRunning: tw,
                    onRunningChange: tS,
                    onStarted: () => {
                      ;((tl.current = !0), e0(), null != ti.conversation_id && e5((0, A.mv)(ti.conversation_id)))
                    },
                  })
                : null),
            (eB[156] = ti.conversation_id),
            (eB[157] = ti.source_conversation_is_work_mode),
            (eB[158] = tI),
            (eB[159] = tD),
            (eB[160] = tU),
            (eB[161] = tC),
            (eB[162] = tw),
            (eB[163] = tR),
            (eB[164] = e5),
            (eB[165] = e0),
            (eB[166] = eq))
          : (eq = eB[166]),
        eB[167] !== tD || eB[168] !== tg || eB[169] !== tR
          ? ((ez = tR ? null : (0, a.jsx)(Z.V, { automation: tD, draft: tg, onChange: tf })),
            (eB[167] = tD),
            (eB[168] = tg),
            (eB[169] = tR),
            (eB[170] = ez))
          : (ez = eB[170]),
        eB[171] !== tL
          ? ((eG =
              null == tL
                ? null
                : (0, a.jsxs)("p", {
                    className: "text-sm text-danger select-none",
                    role: "alert",
                    children: [
                      "too-far" === tL &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.dateTooFar",
                          defaultMessage: "Choose a date within the next two years",
                        }),
                      "end-past" === tL &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.endDateInPast",
                          defaultMessage: "Choose an end date today or later",
                        }),
                      "past" === tL &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.dateInPast",
                          defaultMessage: "Choose a date and time in the future",
                        }),
                    ],
                  })),
            (eB[171] = tL),
            (eB[172] = eG))
          : (eG = eB[172]),
        eB[173] !== eN ||
        eB[174] !== tX ||
        eB[175] !== eR ||
        eB[176] !== eH ||
        eB[177] !== eq ||
        eB[178] !== ez ||
        eB[179] !== eG
          ? ((e$ = (0, a.jsxs)("fieldset", {
              ref: eN,
              className: "flex min-w-0 flex-col gap-6",
              disabled: tX,
              children: [eR, eH, eq, ez, eG],
            })),
            (eB[173] = eN),
            (eB[174] = tX),
            (eB[175] = eR),
            (eB[176] = eH),
            (eB[177] = eq),
            (eB[178] = ez),
            (eB[179] = eG),
            (eB[180] = e$))
          : (e$ = eB[180]),
        eB[181] !== tJ ? ((eF = (0, a.jsx)(k.OO, { children: tJ })), (eB[181] = tJ), (eB[182] = eF)) : (eF = eB[182]),
        eB[183] !== tt ||
        eB[184] !== eJ ||
        eB[185] !== eC ||
        eB[186] !== eD ||
        eB[187] !== eI ||
        eB[188] !== e$ ||
        eB[189] !== eF
          ? ((eW = (0, a.jsxs)(k.R4, {
              as: "form",
              id: tt,
              size: "viewport",
              onKeyDown: eC,
              onSubmit: eD,
              children: [eI, eJ, e$, eF],
            })),
            (eB[183] = tt),
            (eB[184] = eJ),
            (eB[185] = eC),
            (eB[186] = eD),
            (eB[187] = eI),
            (eB[188] = e$),
            (eB[189] = eF),
            (eB[190] = eW))
          : (eW = eB[190]))
      let t4 = eW
      if (e8) {
        let e, t, n, l, o, s, i
        if (tR) {
          let t
          ;(eB[191] !== tD.is_enabled || eB[192] !== tD.webhook_triggers
            ? ((t = (0, a.jsx)(q.C, {
                variant: "form",
                triggers: tD.webhook_triggers,
                isAutomationEnabled: tD.is_enabled,
                showUnavailableConditions: !1,
              })),
              (eB[191] = tD.is_enabled),
              (eB[192] = tD.webhook_triggers),
              (eB[193] = t))
            : (t = eB[193]),
            (e = t))
        } else if (tN) {
          let t
          ;(eB[194] !== tD || eB[195] !== tg
            ? ((t = (0, a.jsx)(Z.V, { form: !0, automation: tD, draft: tg, onChange: tf })),
              (eB[194] = tD),
              (eB[195] = tg),
              (eB[196] = t))
            : (t = eB[196]),
            (e = t))
        } else {
          let t,
            n,
            l,
            o = null == tg.cloudTeam && null == eZ.teamId
          ;(eB[197] !== ti || eB[198] !== tr || eB[199] !== t_ || eB[200] !== tg.scheduleConfig.oneTimeDate
            ? ((t = (e) => {
                if (
                  null != tg.scheduleConfig.oneTimeDate &&
                  null == e.scheduleConfig.oneTimeDate &&
                  null == e.webhookTriggers
                ) {
                  let { untilDate: t, untilTime: n } = tr(ti).scheduleConfig
                  t_({ ...e, scheduleConfig: { ...e.scheduleConfig, untilDate: t, untilTime: n } })
                  return
                }
                t_(e)
              }),
              (eB[197] = ti),
              (eB[198] = tr),
              (eB[199] = t_),
              (eB[200] = tg.scheduleConfig.oneTimeDate),
              (eB[201] = t))
            : (t = eB[201]),
            eB[202] !== t_ || eB[203] !== tg
              ? ((n = (e) => {
                  t_({
                    ...tg,
                    rawRrule: null,
                    scheduleDirty: !0,
                    scheduleConfig: { ...tg.scheduleConfig, untilDate: e, untilTime: null == e ? void 0 : "23:59:59" },
                  })
                }),
                (eB[202] = t_),
                (eB[203] = tg),
                (eB[204] = n))
              : (n = eB[204]),
            eB[205] !== tg || eB[206] !== o || eB[207] !== t || eB[208] !== n
              ? ((l = (0, a.jsx)(b.q, {
                  personal: o,
                  draft: tg,
                  onChange: t,
                  onChangeEndDate: n,
                  executionLocation: "cloud",
                })),
                (eB[205] = tg),
                (eB[206] = o),
                (eB[207] = t),
                (eB[208] = n),
                (eB[209] = l))
              : (l = eB[209]),
            (e = l))
        }
        eB[210] !== tI || eB[211] !== td || eB[212] !== tN || eB[213] !== tR
          ? ((t = tI
              ? {
                  executionLocation: "cloud",
                  hasSelectedSchedule: !0,
                  initialDraft: td,
                  triggerMode: tR || tN ? "read-only" : "time",
                }
              : void 0),
            (eB[210] = tI),
            (eB[211] = td),
            (eB[212] = tN),
            (eB[213] = tR),
            (eB[214] = t))
          : (t = eB[214])
        let r = tj || tw || tM,
          d = !tI
        eB[215] !== t$
          ? ((n = (e) => {
              ;(e.preventDefault(), t$())
            }),
            (eB[215] = t$),
            (eB[216] = n))
          : (n = eB[216])
        let u = null == tD.aeon_id && "local" !== tD.executor
        ;(eB[217] !== tg || eB[218] !== eZ.teamId || eB[219] !== u
          ? ((l = (0, a.jsx)(x.u, {
              draft: tg,
              setDraft: tf,
              executionLocation: "cloud",
              teamId: eZ.teamId,
              supportsRemoteExecutors: u,
            })),
            (eB[217] = tg),
            (eB[218] = eZ.teamId),
            (eB[219] = u),
            (eB[220] = l))
          : (l = eB[220]),
          eB[221] !== tg || eB[222] !== eZ.teamId
            ? ((o =
                null == tg.cloudTeam && null == eZ.teamId
                  ? null
                  : (0, a.jsx)(j.j, { draft: tg, onChange: tf, teamId: eZ.teamId })),
              (eB[221] = tg),
              (eB[222] = eZ.teamId),
              (eB[223] = o))
            : (o = eB[223]),
          eB[224] !== tg || eB[225] !== tq || eB[226] !== eZ.teamId
            ? ((s = (0, a.jsx)(j.n, { draft: tg, teamId: eZ.teamId, getOAuthReturnTo: tq })),
              (eB[224] = tg),
              (eB[225] = tq),
              (eB[226] = eZ.teamId),
              (eB[227] = s))
            : (s = eB[227]),
          eB[228] !== tK ||
          eB[229] !== t_ ||
          eB[230] !== tL ||
          eB[231] !== tg ||
          eB[232] !== tq ||
          eB[233] !== th ||
          eB[234] !== tk ||
          eB[235] !== en ||
          eB[236] !== tG ||
          eB[237] !== e ||
          eB[238] !== tQ ||
          eB[239] !== t ||
          eB[240] !== r ||
          eB[241] !== d ||
          eB[242] !== n ||
          eB[243] !== l ||
          eB[244] !== o ||
          eB[245] !== s
            ? ((i = (0, a.jsx)(p.L, {
                promptForSave: en,
                onOpen: th,
                executionLocation: "cloud",
                setup: t,
                getOAuthReturnTo: tq,
                draft: tg,
                onChange: t_,
                onClose: tG,
                canSave: tK,
                isSaving: r,
                isChangingStatus: tk,
                disabled: d,
                statusAction: tQ,
                onSubmit: n,
                dateError: tL,
                schedule: e,
                advanced: l,
                owner: o,
                plugins: s,
              })),
              (eB[228] = tK),
              (eB[229] = t_),
              (eB[230] = tL),
              (eB[231] = tg),
              (eB[232] = tq),
              (eB[233] = th),
              (eB[234] = tk),
              (eB[235] = en),
              (eB[236] = tG),
              (eB[237] = e),
              (eB[238] = tQ),
              (eB[239] = t),
              (eB[240] = r),
              (eB[241] = d),
              (eB[242] = n),
              (eB[243] = l),
              (eB[244] = o),
              (eB[245] = s),
              (eB[246] = i))
            : (i = eB[246]),
          (eV = i))
      } else {
        let e, t, n, l
        eB[247] !== tG
          ? ((e = (e) => {
              e || tG()
            }),
            (eB[247] = tG),
            (eB[248] = e))
          : (e = eB[248])
        let s = ty ?? void 0
        ;(eB[249] !== t4 || eB[250] !== s
          ? ((t = (0, a.jsx)(o.z, { radixPortalContainer: s, children: t4 })),
            (eB[249] = t4),
            (eB[250] = s),
            (eB[251] = t))
          : (t = eB[251]),
          eB[252] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("div", { ref: tb })), (eB[252] = n))
            : (n = eB[252]),
          eB[253] !== e || eB[254] !== t
            ? ((l = (0, a.jsxs)(S.lG, {
                contentOverflow: "visible",
                open: !0,
                size: "xwide",
                variant: "chatgpt",
                onOpenChange: e,
                children: [t, n],
              })),
              (eB[253] = e),
              (eB[254] = t),
              (eB[255] = l))
            : (l = eB[255]),
          (eV = l))
      }
      return (
        eB[256] !== tH ||
        eB[257] !== eV ||
        eB[258] !== tz ||
        eB[259] !== tu ||
        eB[260] !== tO ||
        eB[261] !== tm ||
        eB[262] !== tC ||
        eB[263] !== tx
          ? ((eY =
              tu || tm
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      eV,
                      (0, a.jsx)(eu, {
                        isPending: tC,
                        shouldBlock: () => (tO || tC) && !tl.current,
                        onDiscardNavigation: tH,
                        dismissal: tx
                          ? {
                              onCancel: () => {
                                ;(tp(!1), ts.current?.(!1), (ts.current = null))
                              },
                              onDiscard: tz,
                            }
                          : null,
                      }),
                    ],
                  })
                : null),
            (eB[256] = tH),
            (eB[257] = eV),
            (eB[258] = tz),
            (eB[259] = tu),
            (eB[260] = tO),
            (eB[261] = tm),
            (eB[262] = tC),
            (eB[263] = tx),
            (eB[264] = eY))
          : (eY = eB[264]),
        eY
      )
    }
    function ed(e) {
      "Enter" !== e.key ||
        e.shiftKey ||
        e.nativeEvent.isComposing ||
        (e.preventDefault(), e.currentTarget.form?.requestSubmit())
    }
    function eu(e) {
      let t,
        n = (0, l.c)(3),
        o = (0, c.useContext)(g.hf)
      return (
        n[0] !== o || n[1] !== e
          ? ((t = null == o ? (0, a.jsx)(em, { ...e }) : (0, a.jsx)(ec, { ...e })), (n[0] = o), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function ec(e) {
      let t,
        n = (0, l.c)(3),
        o = (0, N.e)(e.shouldBlock)
      return (
        n[0] !== o || n[1] !== e
          ? ((t = (0, a.jsx)(em, { ...e, blocker: o })), (n[0] = o), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function em(e) {
      let t,
        n,
        o,
        s,
        i,
        r,
        d,
        u,
        c,
        m,
        g,
        f,
        _,
        x,
        p = (0, l.c)(30),
        { blocker: y, dismissal: b, isPending: j, onDiscardNavigation: v } = e,
        T = y?.state === "blocked" ? y : null
      if (T?.isCommitting || (null == T && null == b)) return null
      let A = null == T ? (b?.isPending ?? j) : j
      p[0] !== b || p[1] !== T
        ? ((t = () => {
            ;(b?.onCancel(), T?.reset())
          }),
          (p[0] = b),
          (p[1] = T),
          (p[2] = t))
        : (t = p[2])
      let M = t
      p[3] !== b || p[4] !== T || p[5] !== v
        ? ((n = () => {
            null == T ? b?.onDiscard() : (b?.onCancel(), v?.(), T.proceed())
          }),
          (p[3] = b),
          (p[4] = T),
          (p[5] = v),
          (p[6] = n))
        : (n = p[6])
      let C = n
      return (
        p[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = { shouldStopPointerDownPropagation: !1 }), (p[7] = o))
          : (o = p[7]),
        p[8] !== M
          ? ((s = (e) => {
              e || M()
            }),
            (p[8] = M),
            (p[9] = s))
          : (s = p[9]),
        p[10] !== C || p[11] !== A
          ? ((i = (e) => {
              ;(e.preventDefault(), A || C())
            }),
            (p[10] = C),
            (p[11] = A),
            (p[12] = i))
          : (i = p[12]),
        p[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(S.L3, {
              className: "text-form-title",
              children: (0, a.jsx)(h.A, {
                id: "automations.editor.discardChangesTitle",
                defaultMessage: "Discard changes?",
              }),
            })),
            (p[13] = r))
          : (r = p[13]),
        p[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(k.OO, {
              children: (0, a.jsx)(k.c7, {
                subtitleSize: "sm",
                subtitleTone: "secondary",
                title: r,
                subtitle: (0, a.jsx)(S.rr, {
                  className: "text-form-body font-normal",
                  children: (0, a.jsx)(h.A, {
                    id: "automations.scheduled.editor.discardDescription",
                    defaultMessage: "Your changes will not be saved",
                  }),
                }),
              }),
            })),
            (p[14] = d))
          : (d = p[14]),
        p[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(h.A, { id: "automations.editor.keepEditing", defaultMessage: "Keep editing" })),
            (p[15] = u))
          : (u = p[15]),
        p[16] !== M
          ? ((c = (0, a.jsx)(w.$, {
              color: "secondary",
              focusRing: "surface",
              size: "dialogAction",
              type: "button",
              onClick: M,
              children: u,
            })),
            (p[16] = M),
            (p[17] = c))
          : (c = p[17]),
        p[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(h.A, { id: "automations.editor.discardChanges", defaultMessage: "Discard changes" })),
            (p[18] = m))
          : (m = p[18]),
        p[19] !== A
          ? ((g = (0, a.jsx)(w.$, { color: "danger", disabled: A, size: "dialogAction", type: "submit", children: m })),
            (p[19] = A),
            (p[20] = g))
          : (g = p[20]),
        p[21] !== g || p[22] !== c
          ? ((f = (0, a.jsx)(k.OO, { children: (0, a.jsxs)(k.Es, { children: [c, g] }) })),
            (p[21] = g),
            (p[22] = c),
            (p[23] = f))
          : (f = p[23]),
        p[24] !== f || p[25] !== i
          ? ((_ = (0, a.jsxs)(k.R4, { as: "form", onSubmit: i, children: [d, f] })),
            (p[24] = f),
            (p[25] = i),
            (p[26] = _))
          : (_ = p[26]),
        p[27] !== _ || p[28] !== s
          ? ((x = (0, a.jsx)(S.lG, {
              open: !0,
              showDialogClose: !1,
              size: "narrow",
              variant: "form",
              contentProps: o,
              onOpenChange: s,
              children: _,
            })),
            (p[27] = _),
            (p[28] = s),
            (p[29] = x))
          : (x = p[29]),
        x
      )
    }
  },
  qjUD(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      o = n("slpy"),
      s = n("oyxz"),
      i = n("Sm6l")
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            n,
            r,
            d = (0, l.c)(13),
            { isPaused: u, isPending: c, disabled: m, disabledReason: h, onClick: g, size: f } = e,
            _ = void 0 === f ? "dialogAction" : f,
            x = c || void 0,
            p = m || void 0,
            y = m && null == h,
            b = m ? void 0 : g
          return (
            d[0] !== u
              ? ((t = u
                  ? (0, a.jsx)(s.A, { id: "inbox.automations.resumeTooltip", defaultMessage: "Resume" })
                  : (0, a.jsx)(s.A, { id: "inbox.automations.pauseTooltip", defaultMessage: "Pause" })),
                (d[0] = u),
                (d[1] = t))
              : (t = d[1]),
            d[2] !== c || d[3] !== _ || d[4] !== x || d[5] !== p || d[6] !== y || d[7] !== b || d[8] !== t
              ? ((n = (0, a.jsx)(i.$, {
                  "aria-busy": x,
                  "aria-disabled": p,
                  color: "secondary",
                  radius: "full",
                  size: _,
                  type: "button",
                  disabled: y,
                  loading: c,
                  onClick: b,
                  children: t,
                })),
                (d[2] = c),
                (d[3] = _),
                (d[4] = x),
                (d[5] = p),
                (d[6] = y),
                (d[7] = b),
                (d[8] = t),
                (d[9] = n))
              : (n = d[9]),
            d[10] !== h || d[11] !== n
              ? ((r = (0, a.jsx)(o.m, { content: h, children: n })), (d[10] = h), (d[11] = n), (d[12] = r))
              : (r = d[12]),
            r
          )
        },
      },
    )
  },
  R2L4(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      o = n("slpy"),
      s = n("fxCc"),
      i = n("i5ac"),
      r = n.n(i),
      d = n("qmMi"),
      u = n("oyxz"),
      c = n("hOO0"),
      m = n("FpcZ"),
      h = n("SPnB"),
      g = n("fcqj"),
      f = n("FvYa"),
      _ = n("Sm6l"),
      x = n("bVeK"),
      p = n("RNul"),
      y = n("AWNZ"),
      b = n("ZEx5"),
      j = n("rCoD"),
      v = n("k7o2"),
      T = n("sujc"),
      A = n("nvO1")
    function w(e) {
      let t,
        n,
        o = (0, l.c)(13),
        { team: s, getOAuthReturnTo: i } = e,
        { data: r, error: c, refetch: m } = (0, d._U)(A.Bn, s)
      o[0] !== r ? ((t = null == r ? null : (0, A.id)(r)), (o[0] = r), (o[1] = t)) : (t = o[1])
      let h = t
      if (null != h) {
        let e
        return (
          o[2] !== i || o[3] !== h || o[4] !== s
            ? ((e = (0, a.jsx)(S, { getOAuthReturnTo: i, ...s, serviceAccountId: h }, h)),
              (o[2] = i),
              (o[3] = h),
              (o[4] = s),
              (o[5] = e))
            : (e = o[5]),
          e
        )
      }
      o[6] !== r ? ((n = null == r ? (0, a.jsx)(p.y, {}) : (0, a.jsx)(U, {})), (o[6] = r), (o[7] = n)) : (n = o[7])
      let g = n
      if (null != c) {
        let e, t, n
        ;(o[8] !== m ? ((e = () => void m()), (o[8] = m), (o[9] = e)) : (e = o[9]),
          o[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "automations.configuration.retryPlugins",
                defaultMessage: "Couldn\u2019t load plugins. Retry",
              })),
              (o[10] = t))
            : (t = o[10]),
          o[11] !== e
            ? ((n = (0, a.jsx)(_.$, { color: "ghost", size: "toolbar", onClick: e, children: t })),
              (o[11] = e),
              (o[12] = n))
            : (n = o[12]),
          (g = n))
      }
      return g
    }
    function S(e) {
      let t,
        n,
        o,
        i,
        h,
        y,
        b,
        j,
        w,
        S = (0, l.c)(22)
      S[0] !== e ? (({ getOAuthReturnTo: t, ...n } = e), (S[0] = e), (S[1] = t), (S[2] = n)) : ((t = S[1]), (n = S[2]))
      let N = (0, d._U)(A.rN, n.accountId),
        { data: R, error: P, isLoading: O, refetch: L } = (0, d._U)(T.T, n),
        { error: K, isPending: H, refetch: q } = (0, d._U)(v.WD, n)
      S[3] !== n ? ((o = { ...n, view: "installed", query: "" }), (S[3] = n), (S[4] = o)) : (o = S[4])
      let { data: z, error: G, isLoading: $, refetch: F, hasNextPage: W } = (0, d._U)(v.Ys, o),
        V = r()(R?.links.filter(E), D),
        { data: Y } = (0, s.E)(
          (0, m.getHostedAppsContentQueriesOptions)({ accountId: n.accountId, appIds: V.map(C), enabled: N }),
        )
      S[5] !== Y ? ((i = new Map(Y?.map(M))), (S[5] = Y), (S[6] = i)) : (i = S[6])
      let B = i
      S[7] !== B
        ? ((h = (e) => ({
            id: e.link_id,
            name: (0, a.jsx)(u.A, {
              id: "automations.configuration.workspacePluginName",
              defaultMessage: "{connectionName} \xb7 Workspace",
              values: { connectionName: e.name },
            }),
            logo: (0, a.jsx)(f.R, {
              alt: e.connector_name,
              connectorId: e.connector_id,
              knownAppId: e.connector_name,
              logoUrl: B.get((0, c.$)(e.connector_id))?.light,
              logoDarkUrl: B.get((0, c.$)(e.connector_id))?.dark,
              size: 20,
              fallback: (0, a.jsx)(x.wdY, {}),
            }),
          })),
          (S[7] = B),
          (S[8] = h))
        : (h = S[8])
      let Q = [
        ...V.map(h),
        ...(z ?? [])
          .filter(
            (e) => !V.some((t) => null != e.connector_id && (0, c.$)(t.connector_id) === (0, c.$)(e.connector_id)),
          )
          .map(k),
      ]
      S[9] !== H || S[10] !== $ || S[11] !== O
        ? ((y = H || $ || O ? (0, a.jsx)(p.y, {}) : null), (S[9] = H), (S[10] = $), (S[11] = O), (S[12] = y))
        : (y = S[12])
      let Z =
        null != K || null != G || null != P
          ? (0, a.jsx)(_.$, {
              color: "ghost",
              size: "toolbar",
              onClick: () => {
                ;(L(), q(), F())
              },
              children: (0, a.jsx)(u.A, {
                id: "automations.configuration.retryPlugins",
                defaultMessage: "Couldn\u2019t load plugins. Retry",
              }),
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(I, { plugins: Q, hasNextPage: W }),
                null == z || O || 0 !== Q.length ? null : (0, a.jsx)(U, {}),
              ],
            })
      return (
        S[13] !== y || S[14] !== Z
          ? ((b = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [y, Z] })),
            (S[13] = y),
            (S[14] = Z),
            (S[15] = b))
          : (b = S[15]),
        S[16] !== t || S[17] !== n
          ? ((j = (0, a.jsx)(g.f, { ...n, getOAuthReturnTo: t })), (S[16] = t), (S[17] = n), (S[18] = j))
          : (j = S[18]),
        S[19] !== b || S[20] !== j
          ? ((w = (0, a.jsxs)(a.Fragment, { children: [b, j] })), (S[19] = b), (S[20] = j), (S[21] = w))
          : (w = S[21]),
        w
      )
    }
    function k(e) {
      return {
        id: e.id,
        name: e.release.display_name,
        logo: (0, a.jsx)(f.R, {
          alt: e.release.display_name,
          size: 20,
          logoUrl: e.release.interface.logo_url,
          logoDarkUrl: e.release.interface.logo_url_dark,
          fallback: (0, a.jsx)(x.wdY, {}),
        }),
      }
    }
    function M(e) {
      return [(0, c.$)(e.id), { light: e.icon_url, dark: e.icon_dark_url }]
    }
    function C(e) {
      return e.connector_id
    }
    function D(e) {
      return (0, c.$)(e.connector_id)
    }
    function E(e) {
      return e.enabled
    }
    function I(e) {
      let t,
        n,
        s,
        i = (0, l.c)(8),
        { plugins: r, hasNextPage: d } = e,
        c = void 0 !== d && d
      return (
        i[0] !== r ? ((t = r.slice(0, 4).map(N)), (i[0] = r), (i[1] = t)) : (t = i[1]),
        i[2] !== c || i[3] !== r
          ? ((n =
              r.length > 4
                ? (0, a.jsx)(o.m, {
                    interactive: !0,
                    align: "end",
                    side: "bottom",
                    sideOffset: 5,
                    maxWidth: 320,
                    contentClassName: "max-h-64 min-w-48 overflow-y-auto text-start",
                    content: (0, a.jsx)(R, { plugins: r }),
                    children: (0, a.jsx)(o.m.TriggerDecorator, {
                      unstyled: !0,
                      className: "shrink-0",
                      children: (0, a.jsx)("span", {
                        children: (0, a.jsx)(u.A, {
                          id: "automations.routine.morePlugins",
                          defaultMessage: "+{count}{more}",
                          values: { count: r.length - 4, more: c ? "+" : "" },
                        }),
                      }),
                    }),
                  })
                : null),
            (i[2] = c),
            (i[3] = r),
            (i[4] = n))
          : (n = i[4]),
        i[5] !== t || i[6] !== n
          ? ((s = (0, a.jsxs)(a.Fragment, { children: [t, n] })), (i[5] = t), (i[6] = n), (i[7] = s))
          : (s = i[7]),
        s
      )
    }
    function N(e) {
      return (0, a.jsx)(
        o.m,
        {
          content: e.name,
          children: (0, a.jsx)(o.m.TriggerDecorator, {
            unstyled: !0,
            children: (0, a.jsx)("span", { className: "inline-flex shrink-0", children: e.logo }),
          }),
        },
        e.id,
      )
    }
    function R({ plugins: e }) {
      return e
        .slice(4)
        .map((e) =>
          (0, a.jsxs)(
            "div",
            {
              className: "flex items-center gap-2 px-2 py-1.5 text-sm text-default",
              children: [
                (0, a.jsx)("span", { className: "inline-flex shrink-0", children: e.logo }),
                (0, a.jsx)("span", { className: "min-w-0", children: e.name }),
              ],
            },
            e.id,
          ),
        )
    }
    function P(e) {
      let t,
        n,
        o = (0, l.c)(3),
        { children: s } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(u.A, { id: "automations.routine.availablePlugins", defaultMessage: "Plugins" })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== s
          ? ((n = (0, a.jsx)(y.ic, {
              variant: "nested",
              label: t,
              control: (0, a.jsx)("div", { className: "flex min-w-0 items-center justify-end gap-2", children: s }),
            })),
            (o[1] = s),
            (o[2] = n))
          : (n = o[2]),
        n
      )
    }
    function U() {
      let e,
        t = (0, l.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, { id: "automations.routine.noPlugins", defaultMessage: "None connected" }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    n.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            n,
            o,
            s = (0, l.c)(16),
            { draft: i, onChange: r, teamId: c } = e,
            m = (0, d.Ul)(h.chatGptAuthenticatedAccountId$),
            g = (0, d._U)(A.lc, m)
          s[0] !== m || s[1] !== i.cloudTeam || s[2] !== c
            ? ((t = i.cloudTeam ?? (null != m && null != c ? { accountId: m, teamId: c } : null)),
              (s[0] = m),
              (s[1] = i.cloudTeam),
              (s[2] = c),
              (s[3] = t))
            : (t = s[3])
          let f = t
          if (null == i.id && (g || null != i.cloudTeam)) {
            let e,
              t,
              l = i.cloudTeam?.teamId ?? "personal"
            ;(s[4] !== i || s[5] !== r
              ? ((e = (e) => r({ ...i, cloudTeam: e, webhookTriggers: void 0 })), (s[4] = i), (s[5] = r), (s[6] = e))
              : (e = s[6]),
              s[7] !== i.cloudTeam || s[8] !== l || s[9] !== e
                ? ((t = (0, a.jsx)(j.v, { variant: "form", selection: i.cloudTeam, onSelect: e }, l)),
                  (s[7] = i.cloudTeam),
                  (s[8] = l),
                  (s[9] = e),
                  (s[10] = t))
                : (t = s[10]),
              (n = t))
          } else if (null != f) {
            let e
            ;(s[11] !== f.teamId
              ? ((e = (0, a.jsx)(j.W, { teamId: f.teamId, variant: "form" })), (s[11] = f.teamId), (s[12] = e))
              : (e = s[12]),
              (n = e))
          } else {
            let e
            ;(s[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(y.ic, {
                  label: (0, a.jsx)(u.A, { id: "automations.configuration.runsAs", defaultMessage: "Run as" }),
                  control: (0, a.jsx)(u.A, { id: "settings.teams.automation.me", defaultMessage: "Me" }),
                  variant: "nested",
                })),
                (s[13] = e))
              : (e = s[13]),
              (n = e))
          }
          return (
            s[14] !== n
              ? ((o = (0, a.jsx)(b.t, { variant: "outlined", children: n })), (s[14] = n), (s[15] = o))
              : (o = s[15]),
            o
          )
        },
        n: function (e) {
          let t,
            n,
            o = (0, l.c)(7),
            { draft: s, getOAuthReturnTo: i, teamId: r } = e,
            u = (0, d.Ul)(h.chatGptAuthenticatedAccountId$)
          o[0] !== u || o[1] !== s.cloudTeam || o[2] !== r
            ? ((t = s.cloudTeam ?? (null != u && null != r ? { accountId: u, teamId: r } : null)),
              (o[0] = u),
              (o[1] = s.cloudTeam),
              (o[2] = r),
              (o[3] = t))
            : (t = o[3])
          let c = t
          return (
            o[4] !== i || o[5] !== c
              ? ((n =
                  null == c
                    ? null
                    : (0, a.jsx)(b.t, {
                        variant: "outlined",
                        children: (0, a.jsx)(P, { children: (0, a.jsx)(w, { team: c, getOAuthReturnTo: i }) }),
                      })),
                (o[4] = i),
                (o[5] = c),
                (o[6] = n))
              : (n = o[6]),
            n
          )
        },
      },
    )
  },
  o791(e, t, n) {
    var a = n("ABep"),
      l = n("QosV"),
      o = n("Lbd1"),
      s = n("hwA8"),
      i = n("qmMi"),
      r = n("zd8w"),
      d = n("Wf1j"),
      u = n("oyxz"),
      c = n("YJm0"),
      m = n("OAko"),
      h = n("bqtn"),
      g = n("HOLv"),
      f = n("bVeK"),
      _ = n("X6Vn"),
      x = n("f38C"),
      p = n("RNul"),
      y = n("OWtl"),
      b = n("OMIV"),
      j = n("ED7I"),
      v = n("fGpH"),
      T = n("Ro2M"),
      A = n("u0nx"),
      w = n("FLVF"),
      S = n("TzXS")
    function k(e) {
      let t,
        o,
        s,
        r,
        d = (0, l.c)(17),
        { item: g, source: x, disabled: p } = e,
        j = (0, i.gh)(y.u),
        { data: T } = (0, m.YL)(),
        A = (0, i._U)(b.JW, "1431301099"),
        k = null == g.teamId && A && T?.structure === "workspace"
      d[0] !== k ? ((t = { enabled: k }), (d[0] = k), (d[1] = t)) : (t = d[1])
      let { data: M } = (0, i._U)(c.t, T?.id ?? null, t)
      d[2] !== g.automation || d[3] !== x
        ? ((o = "editor" === x ? (0, v.Xr)(g.automation) : (0, S.jv)(g.automation)),
          (d[2] = g.automation),
          (d[3] = x),
          (d[4] = o))
        : (o = d[4])
      let C = o
      d[5] !== T || d[6] !== M?.features || d[7] !== g.teamId || d[8] !== A || d[9] !== C
        ? ((s =
            null == g.teamId &&
            A &&
            "completed" !== C &&
            null != T &&
            "quorum" !== T.plan_type &&
            ("workspace" !== T.structure || M?.features?.includes("workspace_share_links"))),
          (d[5] = T),
          (d[6] = M?.features),
          (d[7] = g.teamId),
          (d[8] = A),
          (d[9] = C),
          (d[10] = s))
        : (s = d[10])
      let D = s
      return (
        d[11] !== D || d[12] !== p || d[13] !== g || d[14] !== j || d[15] !== x
          ? ((r = D
              ? (0, a.jsx)(h.ms.Item, {
                  disabled: p,
                  leftIcon: (0, a.jsx)(f._Ui, {}),
                  onSelect: () => {
                    !(async function (e, t, a) {
                      let { ScheduledTaskShareDialog: l } = await n.e(655368).then(n.bind(n, "JoAv"))
                      ;((0, w.I)(e, "task_share_button_clicked", t.automation.id, a),
                        (0, _.qf)(e, l, { automation: t.automation }))
                    })(j, g, x)
                  },
                  children: (0, a.jsx)(u.A, { id: "automations.tasks.row.action.share", defaultMessage: "Share" }),
                })
              : null),
            (d[11] = D),
            (d[12] = p),
            (d[13] = g),
            (d[14] = j),
            (d[15] = x),
            (d[16] = r))
          : (r = d[16]),
        r
      )
    }
    n.d(
      t,
      {},
      {
        Y: k,
        i: function (e) {
          let t,
            n,
            c,
            m,
            _,
            y,
            b,
            w = (0, l.c)(39),
            {
              item: M,
              onDeleted: C,
              onPaused: D,
              onResumed: E,
              onRunNow: I,
              onRunNowAsync: N,
              runNowIcon: R,
              isRunNowPending: P,
              source: U,
              rowRef: O,
              additionalMenuItems: L,
              shareMenuItem: K,
              statusFirst: H,
              menuProps: q,
              menuTriggerSize: z,
              onMenuOpenChange: G,
            } = e,
            $ = void 0 === U ? "scheduled_page" : U,
            F = void 0 !== H && H,
            { isPending: W } = (0, i._U)(A.F, M.automation.id),
            V = P || W,
            [Y, B] = (0, r.useState)(!1)
          w[0] !== G
            ? ((t = () => {
                ;(B(!1), G?.(!1))
              }),
              (w[0] = G),
              (w[1] = t))
            : (t = w[1])
          let Q = t,
            Z = (0, i.Ul)(T.x2),
            J = Z.isPending && Z.variables?.automationId === M.automation.id,
            X = (0, r.useRef)(null)
          ;(w[2] !== Y || w[3] !== J || w[4] !== O
            ? ((n = () => {
                let e
                if (!Y || J || null == O) return
                let t = () => {
                    ;(clearTimeout(e), (e = void 0))
                  },
                  n = (n) => {
                    n.target instanceof Node &&
                      (O.current?.contains(n.target) || X.current?.contains(n.target)
                        ? t()
                        : null == e && (e = setTimeout(() => B(!1), 150)))
                  }
                return (
                  document.addEventListener("pointermove", n, { passive: !0 }),
                  () => {
                    ;(document.removeEventListener("pointermove", n), t())
                  }
                )
              }),
              (c = [Y, J, O]),
              (w[2] = Y),
              (w[3] = J),
              (w[4] = O),
              (w[5] = n),
              (w[6] = c))
            : ((n = w[5]), (c = w[6])),
            (0, r.useEffect)(n, c))
          let ee = (0, d.A)()
          w[7] !== M.automation || w[8] !== $
            ? ((m = "editor" === $ ? (0, v.Xr)(M.automation) : (0, S.jv)(M.automation)),
              (w[7] = M.automation),
              (w[8] = $),
              (w[9] = m))
            : (m = w[9])
          let et = m
          w[10] !== M.automation ? ((_ = (0, v.nT)(M.automation)), (w[10] = M.automation), (w[11] = _)) : (_ = w[11])
          let en = _
          return (
            w[12] !== L ||
            w[13] !== Q ||
            w[14] !== ee ||
            w[15] !== Y ||
            w[16] !== V ||
            w[17] !== J ||
            w[18] !== en ||
            w[19] !== M ||
            w[20] !== q ||
            w[21] !== z ||
            w[22] !== G ||
            w[23] !== I ||
            w[24] !== N ||
            w[25] !== R ||
            w[26] !== K ||
            w[27] !== $ ||
            w[28] !== et ||
            w[29] !== F
              ? ((y = (e) => {
                  let { deleteAction: t, pauseAction: n, resumeAction: l } = e,
                    i =
                      "completed" !== et
                        ? (0, a.jsx)(h.ms.Item, {
                            "aria-busy": J || void 0,
                            disabled: "paused" === et ? l.disabled : n.disabled,
                            focusableWhenDisabled: J || ("paused" === et && null != l.disabledReason),
                            tooltipText: "paused" === et ? l.disabledReason : void 0,
                            rightIcon: J ? (0, a.jsx)(p.y, { className: "icon-xs" }) : void 0,
                            leftIcon:
                              "paused" === et ? (0, a.jsx)(g.I, { asset: s.j }) : (0, a.jsx)(g.I, { asset: o.D }),
                            onSelect: (e) => {
                              ;(e.preventDefault(), ("paused" === et ? l : n).onSelect())
                            },
                            children:
                              "paused" === et
                                ? (0, a.jsx)(u.A, { id: "inbox.automations.resumeTooltip", defaultMessage: "Resume" })
                                : (0, a.jsx)(u.A, { id: "inbox.automations.pauseTooltip", defaultMessage: "Pause" }),
                          })
                        : null
                  return (0, a.jsxs)(h.Ab, {
                    ...q,
                    contentRef: X,
                    open: Y,
                    onOpenChange: (e) => {
                      ;(B(e), G?.(e))
                    },
                    align: "end",
                    contentWidth: q?.contentWidth ?? "xs",
                    triggerButton: (0, a.jsx)(x.p, {
                      size: z,
                      label: ee.formatMessage({
                        id: "automations.tasks.row.moreActions",
                        defaultMessage: "More task actions",
                      }),
                    }),
                    children: [
                      F ? i : null,
                      (null != I || null != N) && (0, v.kn)(M.automation) && "completed" !== et
                        ? (0, a.jsx)(h.ms.Item, {
                            disabled: V || J || en,
                            "aria-busy": V || void 0,
                            focusableWhenDisabled: V || en,
                            tooltipText: en
                              ? (0, a.jsx)("div", {
                                  className: "max-w-48 text-balance",
                                  children: (0, a.jsx)(u.A, {
                                    id: "automations.actions.runNow.triggerBasedTooltip",
                                    defaultMessage: "Automations triggered by events can\u2019t be run manually",
                                  }),
                                })
                              : void 0,
                            leftIcon: R ?? (0, a.jsx)(f.Tv9, {}),
                            rightIcon: V ? (0, a.jsx)(p.y, { className: "icon-xs" }) : void 0,
                            onSelect: (e) => {
                              null != N ? (e.preventDefault(), N().then(Q, Q)) : I?.()
                            },
                            children: (0, a.jsx)(u.A, { id: "automations.actions.runNow", defaultMessage: "Run now" }),
                          })
                        : null,
                      L,
                      K ?? (0, a.jsx)(k, { item: M, source: $, disabled: !1 }),
                      F ? null : i,
                      null != t
                        ? (0, a.jsx)(h.ms.Group, {
                            children: (0, a.jsx)(h.ms.Item, {
                              tone: "danger",
                              disabled: t.disabled,
                              leftIcon: (0, a.jsx)(f.zwW, {}),
                              onSelect: t.onSelect,
                              children: (0, a.jsx)(u.A, {
                                id: "settings.automations.delete",
                                defaultMessage: "Delete",
                              }),
                            }),
                          })
                        : null,
                    ],
                  })
                }),
                (w[12] = L),
                (w[13] = Q),
                (w[14] = ee),
                (w[15] = Y),
                (w[16] = V),
                (w[17] = J),
                (w[18] = en),
                (w[19] = M),
                (w[20] = q),
                (w[21] = z),
                (w[22] = G),
                (w[23] = I),
                (w[24] = N),
                (w[25] = R),
                (w[26] = K),
                (w[27] = $),
                (w[28] = et),
                (w[29] = F),
                (w[30] = y))
              : (y = w[30]),
            w[31] !== Q || w[32] !== M || w[33] !== C || w[34] !== D || w[35] !== E || w[36] !== et || w[37] !== y
              ? ((b = (0, a.jsx)(j.s, {
                  item: M,
                  onDeleted: C,
                  onPaused: D,
                  onResumed: E,
                  onStatusChanged: Q,
                  status: et,
                  statusMutation: T.x2,
                  renderActions: y,
                })),
                (w[31] = Q),
                (w[32] = M),
                (w[33] = C),
                (w[34] = D),
                (w[35] = E),
                (w[36] = et),
                (w[37] = y),
                (w[38] = b))
              : (b = w[38]),
            b
          )
        },
      },
    )
  },
  rL0w(e, t, n) {
    var a = n("SPnB"),
      l = n("fyx9"),
      o = n("SV27")
    let s = (0, n("Nwp9").m3)("scheduled-task-oauth-draft-v1", null)
    function i(e, t, n = null) {
      let l = e.get(s)
      return l?.draft.id === n &&
        (null == n
          ? "create" === t.get("automationMode")
          : "create" !== t.get("automationMode") && t.get("automationId") === n) &&
        t.get("automationDraftId") === l.id &&
        l.accountId === e.get(a.chatGptAuthenticatedAccountId$) &&
        l.userId === e.get(a.chatGptAuthenticatedUserId$) &&
        l.expiresAt > Date.now()
        ? { ...l, draft: (0, o.$6)(l.draft), initialDraft: (0, o.$6)(l.initialDraft) }
        : null
    }
    n.d(
      t,
      {},
      {
        R4: i,
        iP: function (e, t, n = null) {
          null != i(e, t, n) && e.set(s, null)
        },
        uU: function (e, t, n) {
          let o = e.get(a.chatGptAuthenticatedAccountId$),
            i = e.get(a.chatGptAuthenticatedUserId$)
          if (null == o || null == i) return null
          let r = crypto.randomUUID()
          e.set(s, {
            ...t,
            draft: { ...t.draft, eventTrigger: t.draft.eventTrigger ?? { selected: !1, when: "" } },
            initialDraft: {
              ...t.initialDraft,
              eventTrigger: t.initialDraft.eventTrigger ?? { selected: !1, when: "" },
            },
            id: r,
            accountId: o,
            userId: i,
            expiresAt: Date.now() + 36e5,
          })
          let d = new URL(n, "https://chatgpt.com")
          return (
            null == t.draft.id &&
              "create" !== d.searchParams.get("automationMode") &&
              ((d.pathname = (0, l.d0)()), (d.search = "automationMode=create")),
            d.searchParams.set("automationDraftId", r),
            d.pathname + d.search
          )
        },
      },
    )
  },
  xA2X(e, t, n) {
    n.d(t, { V: () => E })
    var a = n("ABep"),
      l = n("QosV"),
      o = n("qmMi"),
      s = n("Wf1j"),
      i = n("oyxz"),
      r = n("Qgfj"),
      d = n("ASxG"),
      u = n("Sm6l"),
      c = n("bVeK"),
      m = n("syEl"),
      h = n("AWNZ"),
      g = n("ZEx5"),
      f = n("OMIV"),
      _ = n("oVAd"),
      x = n("odKs"),
      p = n("cOBD"),
      y = n("BCU4"),
      b = n("gM9O"),
      j = n("dUCV"),
      v = n("sn2N"),
      T = n("fGpH"),
      A = n("zd8w"),
      w = n("nzx4")
    function S(e) {
      let t,
        n,
        o,
        r,
        d,
        m,
        h,
        g,
        f,
        _,
        x,
        p,
        y,
        b,
        j,
        v,
        T,
        S,
        C,
        D = (0, l.c)(89),
        { value: E, onChange: I } = e,
        N = (0, s.A)(),
        [R, P] = (0, A.useState)(!1),
        [U, O] = (0, A.useState)(M)
      D[0] !== U ? ((t = U.getFullYear()), (D[0] = U), (D[1] = t)) : (t = D[1])
      let L = U.getMonth() + 1
      if (D[2] !== N || D[3] !== U || D[4] !== I || D[5] !== R || D[6] !== t || D[7] !== L || D[8] !== E) {
        let e,
          l,
          s,
          v,
          T,
          A,
          S,
          M,
          C,
          K,
          H,
          q,
          z,
          G,
          $,
          F = new Date(t, L, 0).getDate()
        ;((o = w.AM),
          (m = R),
          D[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (e) => {
                if (e) {
                  let e = new Date()
                  O(new Date(e.getFullYear(), e.getMonth(), 1))
                }
                P(e)
              }),
              (D[23] = h))
            : (h = D[23]),
          D[24] !== N
            ? ((e = N.formatMessage({ id: "automations.editor.schedule.monthlyDate", defaultMessage: "Monthly date" })),
              (D[24] = N),
              (D[25] = e))
            : (e = D[25]),
          D[26] !== E
            ? ((l = (0, a.jsx)("span", {
                className: "truncate",
                children: (0, a.jsx)(i.A, {
                  id: "automations.editor.schedule.everyMonthOnDay",
                  defaultMessage: "Every month on the {day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
                  values: { day: E },
                }),
              })),
              (D[26] = E),
              (D[27] = l))
            : (l = D[27]),
          D[28] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, a.jsx)(c.Aq_, {})), (D[28] = s)) : (s = D[28]),
          D[29] !== e || D[30] !== l
            ? ((g = (0, a.jsx)(w.Wv, {
                asChild: !0,
                children: (0, a.jsxs)(u.$, { color: "ghost", size: "composerPill", "aria-label": e, children: [l, s] }),
              })),
              (D[29] = e),
              (D[30] = l),
              (D[31] = g))
            : (g = D[31]),
          (n = w.hl),
          (j = "end"),
          (r = "content"),
          (d = "menu"),
          (y = "flex flex-col gap-3 text-sm select-none"),
          D[32] !== N || D[33] !== U
            ? ((v = N.formatDate(U, { month: "long", year: "numeric" })), (D[32] = N), (D[33] = U), (D[34] = v))
            : (v = D[34]),
          D[35] !== v
            ? ((T = (0, a.jsx)("span", { className: "font-medium", children: v })), (D[35] = v), (D[36] = T))
            : (T = D[36]),
          D[37] !== N
            ? ((A = N.formatMessage({
                id: "automations.editor.schedule.previousMonth",
                defaultMessage: "Previous month",
              })),
              (D[37] = N),
              (D[38] = A))
            : (A = D[38]),
          D[39] !== U
            ? ((S = () => O(new Date(U.getFullYear(), U.getMonth() - 1, 1))), (D[39] = U), (D[40] = S))
            : (S = D[40]),
          D[41] === Symbol.for("react.memo_cache_sentinel") ? ((M = (0, a.jsx)(c.z_d, {})), (D[41] = M)) : (M = D[41]),
          D[42] !== A || D[43] !== S
            ? ((C = (0, a.jsx)(u.$, {
                color: "ghost",
                radius: "full",
                size: "iconCircle",
                "aria-label": A,
                onClick: S,
                children: M,
              })),
              (D[42] = A),
              (D[43] = S),
              (D[44] = C))
            : (C = D[44]),
          D[45] !== N
            ? ((K = N.formatMessage({ id: "automations.editor.schedule.nextMonth", defaultMessage: "Next month" })),
              (D[45] = N),
              (D[46] = K))
            : (K = D[46]),
          D[47] !== U
            ? ((H = () => O(new Date(U.getFullYear(), U.getMonth() + 1, 1))), (D[47] = U), (D[48] = H))
            : (H = D[48]),
          D[49] === Symbol.for("react.memo_cache_sentinel") ? ((q = (0, a.jsx)(c.uM3, {})), (D[49] = q)) : (q = D[49]),
          D[50] !== K || D[51] !== H
            ? ((z = (0, a.jsx)(u.$, {
                color: "ghost",
                radius: "full",
                size: "iconCircle",
                "aria-label": K,
                onClick: H,
                children: q,
              })),
              (D[50] = K),
              (D[51] = H),
              (D[52] = z))
            : (z = D[52]),
          D[53] !== C || D[54] !== z
            ? ((G = (0, a.jsxs)("div", { className: "flex gap-1", children: [C, z] })),
              (D[53] = C),
              (D[54] = z),
              (D[55] = G))
            : (G = D[55]),
          D[56] !== T || D[57] !== G
            ? ((b = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [T, G] })),
              (D[56] = T),
              (D[57] = G),
              (D[58] = b))
            : (b = D[58]),
          (f = "grid grid-cols-7 gap-1"),
          D[59] !== N
            ? ((_ = Array.from({ length: 7 }, (e, t) =>
                (0, a.jsx)(
                  "span",
                  {
                    className: "flex size-8 items-center justify-center text-xs text-secondary",
                    children: N.formatDate(new Date(2021, 0, 3 + t), { weekday: "narrow" }),
                  },
                  t,
                ),
              )),
              (D[59] = N),
              (D[60] = _))
            : (_ = D[60]),
          D[61] !== U ? ((x = Array.from({ length: U.getDay() }, k)), (D[61] = U), (D[62] = x)) : (x = D[62]),
          D[63] !== N || D[64] !== U || D[65] !== I || D[66] !== E
            ? (($ = (e, t) => {
                let n = t + 1
                return (0, a.jsx)(
                  u.$,
                  {
                    "aria-label": N.formatDate(new Date(U.getFullYear(), U.getMonth(), n), { dateStyle: "long" }),
                    "aria-pressed": n === E,
                    color: n === E ? "primary" : "ghostActive",
                    radius: "full",
                    size: "iconCircle",
                    onClick: () => {
                      ;(I(n), P(!1))
                    },
                    children: n,
                  },
                  n,
                )
              }),
              (D[63] = N),
              (D[64] = U),
              (D[65] = I),
              (D[66] = E),
              (D[67] = $))
            : ($ = D[67]),
          (p = Array.from({ length: F }, $)),
          (D[2] = N),
          (D[3] = U),
          (D[4] = I),
          (D[5] = R),
          (D[6] = t),
          (D[7] = L),
          (D[8] = E),
          (D[9] = n),
          (D[10] = o),
          (D[11] = r),
          (D[12] = d),
          (D[13] = m),
          (D[14] = h),
          (D[15] = g),
          (D[16] = f),
          (D[17] = _),
          (D[18] = x),
          (D[19] = p),
          (D[20] = y),
          (D[21] = b),
          (D[22] = j))
      } else
        ((n = D[9]),
          (o = D[10]),
          (r = D[11]),
          (d = D[12]),
          (m = D[13]),
          (h = D[14]),
          (g = D[15]),
          (f = D[16]),
          (_ = D[17]),
          (x = D[18]),
          (p = D[19]),
          (y = D[20]),
          (b = D[21]),
          (j = D[22]))
      return (
        D[68] !== f || D[69] !== _ || D[70] !== x || D[71] !== p
          ? ((v = (0, a.jsxs)("div", { className: f, children: [_, x, p] })),
            (D[68] = f),
            (D[69] = _),
            (D[70] = x),
            (D[71] = p),
            (D[72] = v))
          : (v = D[72]),
        D[73] !== v || D[74] !== y || D[75] !== b
          ? ((T = (0, a.jsxs)("div", { className: y, children: [b, v] })),
            (D[73] = v),
            (D[74] = y),
            (D[75] = b),
            (D[76] = T))
          : (T = D[76]),
        D[77] !== n || D[78] !== r || D[79] !== d || D[80] !== T || D[81] !== j
          ? ((S = (0, a.jsx)(n, { align: j, size: r, variant: d, children: T })),
            (D[77] = n),
            (D[78] = r),
            (D[79] = d),
            (D[80] = T),
            (D[81] = j),
            (D[82] = S))
          : (S = D[82]),
        D[83] !== o || D[84] !== m || D[85] !== h || D[86] !== g || D[87] !== S
          ? ((C = (0, a.jsxs)(o, { open: m, onOpenChange: h, children: [g, S] })),
            (D[83] = o),
            (D[84] = m),
            (D[85] = h),
            (D[86] = g),
            (D[87] = S),
            (D[88] = C))
          : (C = D[88]),
        C
      )
    }
    function k(e, t) {
      return (0, a.jsx)("span", {}, `blank-${t}`)
    }
    function M() {
      return new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    }
    var C = n("ZlGh")
    let D = d.Ikc({ allowed_frequencies: d.YOg(d.L5J()).optional() })
    function E(e) {
      let t,
        n,
        r,
        d,
        u,
        c,
        m,
        A,
        w,
        k,
        M,
        E,
        O,
        L,
        K,
        H,
        q,
        z,
        G,
        $,
        F,
        W,
        V,
        Y,
        B,
        Q,
        Z = (0, l.c)(129),
        {
          afterScheduleRows: J,
          automation: X,
          draft: ee,
          onChange: et,
          sharedPreview: en,
          weekdayLabelFormat: ea,
          form: el,
        } = e,
        eo = void 0 !== en && en,
        es = void 0 !== el && el,
        ei = (0, s.A)(),
        er = (0, o.Ul)(f.M9)
      if (
        Z[0] !== X ||
        Z[1] !== er ||
        Z[2] !== ee ||
        Z[3] !== es ||
        Z[4] !== ei ||
        Z[5] !== et ||
        Z[6] !== eo ||
        Z[7] !== ea
      ) {
        A = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            l,
            o,
            s,
            f,
            v,
            $,
            F,
            W,
            V,
            Y,
            B = D.safeParse(er?.getDynamicConfig("208167308").get("automation_capabilities", null)),
            Q = B.success ? B.data.allowed_frequencies?.filter(N) : void 0
          ;((n = ee.scheduleConfig),
            (d = "condition_watch" === X.timing_mode),
            Z[27] !== n.time ? ((e = n.time.split(":")), (Z[27] = n.time), (Z[28] = e)) : (e = Z[28]))
          let J = Number(e[0])
          ;(Z[29] !== J ? ((l = (0, x.C_)(J)), (Z[29] = J), (Z[30] = l)) : (l = Z[30]),
            (H = l),
            (r =
              "daily" === n.mode ||
              "weekdays" === n.mode ||
              "weekly" === n.mode ||
              "monthly" === n.mode ||
              (null != n.oneTimeDate && "flexible_schedule" === X.timing_mode)))
          let en =
              "custom" === (0, C.qz)(X).scheduleConfig.mode &&
              !["daily", "weekly", "monthly"].includes(X.schedule_components.frequency),
            el = "custom" === n.mode ? (0, x.RD)(n.customRrule) : null,
            ed = "custom" === n.mode && !en && null != el
          ;(Z[31] !== ee || Z[32] !== et
            ? ((o = (e) => et({ ...ee, scheduleConfig: e, scheduleDirty: !0, rawRrule: null })),
              (Z[31] = ee),
              (Z[32] = et),
              (Z[33] = o))
            : (o = Z[33]),
            (G = o),
            Z[34] !== n || Z[35] !== G
              ? ((s = (e) =>
                  G({ ...n, time: e.time, weekdays: e.weekdays, monthDay: e.monthDays[0], customRrule: (0, x.vQ)(e) })),
                (Z[34] = n),
                (Z[35] = G),
                (Z[36] = s))
              : (s = Z[36]))
          let eu = s
          Z[37] !== X || Z[38] !== n || Z[39] !== G
            ? ((f = (e) => {
                e !== n.mode && G((0, C.iB)(X, n, e))
              }),
              (Z[37] = X),
              (Z[38] = n),
              (Z[39] = G),
              (Z[40] = f))
            : (f = Z[40])
          let ec = f
          Z[41] !== n.mode ? ((v = (e) => e.id === n.mode), (Z[41] = n.mode), (Z[42] = v)) : (v = Z[42])
          let em = p.TJ.find(v),
            eh = p.TJ.filter((e) => null == Q || Q.includes("weekdays" === e.id ? "weekly" : e.id))
          ;(Z[43] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = new Intl.DateTimeFormat("sv-SE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: "h23",
              }).format(new Date())),
              (Z[43] = $))
            : ($ = Z[43]),
            (z = $),
            Z[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = ["morning", "afternoon", "evening", "night"]), (Z[44] = F))
              : (F = Z[44]),
            Z[45] !== n.oneTimeDate
              ? ((W = F.filter((e) => null == n.oneTimeDate || `${n.oneTimeDate} ${C.nT[e]}` >= z)),
                (Z[45] = n.oneTimeDate),
                (Z[46] = W))
              : (W = Z[46]),
            Z[47] !== ei || Z[48] !== W
              ? ((V = W.map((e) => ({ id: e, label: ei.formatMessage(U[e]) }))), (Z[47] = ei), (Z[48] = W), (Z[49] = V))
              : (V = Z[49]),
            (q = V),
            Z[50] !== X || Z[51] !== eo
              ? ((Y = eo ? (0, a.jsx)(P, { automation: X }) : (0, a.jsx)(R, {})),
                (Z[50] = X),
                (Z[51] = eo),
                (Z[52] = Y))
              : (Y = Z[52]))
          let eg = Y
          if (es && d) {
            let e, t
            ;(Z[53] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(i.A, { ...U.repeat })), (Z[53] = e))
              : (e = Z[53]),
              Z[54] !== eg
                ? ((t = (0, a.jsx)(g.t, {
                    variant: "input",
                    children: (0, a.jsx)(h.ic, { variant: "nested", label: e, control: eg }),
                  })),
                  (Z[54] = eg),
                  (Z[55] = t))
                : (t = Z[55]),
              (A = t))
            break e
          }
          ;((m = "flex flex-col gap-5"),
            (t = g.t),
            (w = eo ? "outlined" : "default"),
            Z[56] !== d || Z[57] !== eg
              ? ((k = d ? (0, a.jsx)(h.ic, { label: (0, a.jsx)(i.A, { ...U.repeat }), control: eg }) : null),
                (Z[56] = d),
                (Z[57] = eg),
                (Z[58] = k))
              : (k = Z[58]),
            Z[59] !== X || Z[60] !== ei || Z[61] !== d || Z[62] !== eo
              ? ((M = d && eo ? (0, a.jsx)(h.ic, { label: (0, T.AT)({ automation: X }, ei), control: null }) : null),
                (Z[59] = X),
                (Z[60] = ei),
                (Z[61] = d),
                (Z[62] = eo),
                (Z[63] = M))
              : (M = Z[63]),
            (E =
              d || null != n.oneTimeDate || null == em
                ? null
                : (0, a.jsx)(h.ic, {
                    label: (0, a.jsx)(i.A, { ...U.repeat }),
                    control: (0, a.jsx)(b.H, {
                      ariaLabel: ei.formatMessage(U.repeat),
                      options: eh.map((e) => ({ id: e.id, label: ei.formatMessage(e.labelMessage) })),
                      selectedId: n.mode,
                      selectedLabel: ei.formatMessage(em.labelMessage),
                      onSelect: ec,
                    }),
                  })),
            Z[64] !== n || Z[65] !== ei || Z[66] !== d || Z[67] !== G
              ? ((O =
                  d || null == n.oneTimeDate
                    ? null
                    : (0, a.jsx)(h.ic, {
                        label: (0, a.jsx)(i.A, { ...U.date }),
                        control: (0, a.jsx)(_.h, {
                          ariaLabel: ei.formatMessage(U.date),
                          value: n.oneTimeDate,
                          onChange: (e) => G({ ...n, oneTimeDate: e }),
                        }),
                      })),
                (Z[64] = n),
                (Z[65] = ei),
                (Z[66] = d),
                (Z[67] = G),
                (Z[68] = O))
              : (O = Z[68]),
            Z[69] !== n || Z[70] !== ei || Z[71] !== d || Z[72] !== G
              ? ((L =
                  d || null != n.oneTimeDate || "hourly" !== n.mode
                    ? null
                    : (0, a.jsx)(h.ic, {
                        label: (0, a.jsx)(i.A, { ...U.every }),
                        control: (0, a.jsx)(b.H, {
                          ariaLabel: ei.formatMessage(U.every),
                          options: Array.from({ length: 23 }, (e, t) => ({
                            id: String(t + 1),
                            label: ei.formatMessage(U.hours, { hours: t + 1 }),
                          })),
                          selectedId: String(n.intervalHours),
                          selectedLabel: ei.formatMessage(U.hours, { hours: n.intervalHours }),
                          onSelect: (e) => G({ ...n, intervalHours: Number(e), intervalMinutes: null }),
                        }),
                      })),
                (Z[69] = n),
                (Z[70] = ei),
                (Z[71] = d),
                (Z[72] = G),
                (Z[73] = L))
              : (L = Z[73]),
            Z[74] !== n || Z[75] !== d || Z[76] !== G || Z[77] !== ea
              ? ((K =
                  d || "weekly" !== n.mode || null != n.oneTimeDate
                    ? null
                    : (0, a.jsx)(h.ic, {
                        label: (0, a.jsx)(i.A, { ...U.daysOfWeek }),
                        control: (0, a.jsx)(j.l, {
                          value: n.weekdays,
                          onChange: (e) => G({ ...n, weekdays: e }),
                          weekdayLabelFormat: ea,
                        }),
                      })),
                (Z[74] = n),
                (Z[75] = d),
                (Z[76] = G),
                (Z[77] = ea),
                (Z[78] = K))
              : (K = Z[78]),
            Z[79] !== n || Z[80] !== d || Z[81] !== G
              ? ((u =
                  d || "monthly" !== n.mode || null != n.oneTimeDate
                    ? null
                    : (0, a.jsx)(h.ic, {
                        label: (0, a.jsx)(i.A, { ...U.monthlyDate }),
                        control: (0, a.jsx)(S, { value: n.monthDay ?? 1, onChange: (e) => G({ ...n, monthDay: e }) }),
                      })),
                (Z[79] = n),
                (Z[80] = d),
                (Z[81] = G),
                (Z[82] = u))
              : (u = Z[82]),
            (c =
              !d && ed && null != el
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(h.ic, {
                        label: (0, a.jsx)(i.A, { ...U.frequency }),
                        control: (0, a.jsx)(b.H, {
                          ariaLabel: ei.formatMessage(U.frequency),
                          options: p.TJ.filter(I).map((e) => ({ id: e.id, label: ei.formatMessage(e.labelMessage) })),
                          selectedId: el.frequency,
                          selectedLabel: ei.formatMessage(U.customFrequency, { frequency: el.frequency }),
                          onSelect: (e) => {
                            ;("daily" === e || "weekly" === e || "monthly" === e) &&
                              eu({ ...el, frequency: e, interval: 1 })
                          },
                        }),
                      }),
                      "weekly" === el.frequency
                        ? (0, a.jsx)(h.ic, {
                            label: (0, a.jsx)(i.A, { ...U.daysOfWeek }),
                            control: (0, a.jsx)(j.l, {
                              value: el.weekdays,
                              onChange: (e) => eu({ ...el, weekdays: e }),
                              weekdayLabelFormat: ea,
                            }),
                          })
                        : null,
                      "monthly" === el.frequency
                        ? (0, a.jsx)(h.ic, {
                            label: (0, a.jsx)(i.A, { ...U.monthlyDate }),
                            control: (0, a.jsx)(S, {
                              value: el.monthDays[0] ?? 1,
                              onChange: (e) => eu({ ...el, monthDays: [e] }),
                            }),
                          })
                        : null,
                      (0, a.jsx)(h.ic, {
                        label: (0, a.jsx)(i.A, { ...U.time }),
                        control: (0, a.jsx)(y.b, { value: el.time, onChange: (e) => eu({ ...el, time: e }) }),
                      }),
                    ],
                  })
                : null))
        }
        ;((Z[0] = X),
          (Z[1] = er),
          (Z[2] = ee),
          (Z[3] = es),
          (Z[4] = ei),
          (Z[5] = et),
          (Z[6] = eo),
          (Z[7] = ea),
          (Z[8] = t),
          (Z[9] = n),
          (Z[10] = r),
          (Z[11] = d),
          (Z[12] = u),
          (Z[13] = c),
          (Z[14] = m),
          (Z[15] = A),
          (Z[16] = w),
          (Z[17] = k),
          (Z[18] = M),
          (Z[19] = E),
          (Z[20] = O),
          (Z[21] = L),
          (Z[22] = K),
          (Z[23] = H),
          (Z[24] = q),
          (Z[25] = z),
          (Z[26] = G))
      } else
        ((t = Z[8]),
          (n = Z[9]),
          (r = Z[10]),
          (d = Z[11]),
          (u = Z[12]),
          (c = Z[13]),
          (m = Z[14]),
          (A = Z[15]),
          (w = Z[16]),
          (k = Z[17]),
          (M = Z[18]),
          (E = Z[19]),
          (O = Z[20]),
          (L = Z[21]),
          (K = Z[22]),
          (H = Z[23]),
          (q = Z[24]),
          (z = Z[25]),
          (G = Z[26]))
      if (A !== Symbol.for("react.early_return_sentinel")) return A
      ;(Z[83] !== n || Z[84] !== r || Z[85] !== ei || Z[86] !== d || Z[87] !== H || Z[88] !== q || Z[89] !== G
        ? (($ =
            !d && r
              ? (0, a.jsx)(h.ic, {
                  label: (0, a.jsx)(i.A, { ...U.time }),
                  control: (0, a.jsx)(b.H, {
                    ariaLabel: ei.formatMessage(U.time),
                    options: q,
                    selectedId: H,
                    selectedLabel: ei.formatMessage(U[H]),
                    onSelect: (e) => G({ ...n, time: C.nT[e], oneTimeSeconds: 0 }),
                  }),
                })
              : null),
          (Z[83] = n),
          (Z[84] = r),
          (Z[85] = ei),
          (Z[86] = d),
          (Z[87] = H),
          (Z[88] = q),
          (Z[89] = G),
          (Z[90] = $))
        : ($ = Z[90]),
        Z[91] !== n || Z[92] !== r || Z[93] !== d || Z[94] !== z || Z[95] !== G
          ? ((F =
              d || null == n.oneTimeDate || r
                ? null
                : (0, a.jsx)(h.ic, {
                    label: (0, a.jsx)(i.A, { ...U.time }),
                    control: (0, a.jsx)(y.b, {
                      value: n.time,
                      isOptionVisible: (e) => null == n.oneTimeDate || `${n.oneTimeDate} ${e}` >= z,
                      onChange: (e) => G({ ...n, time: e, oneTimeSeconds: 0 }),
                    }),
                  })),
            (Z[91] = n),
            (Z[92] = r),
            (Z[93] = d),
            (Z[94] = z),
            (Z[95] = G),
            (Z[96] = F))
          : (F = Z[96]),
        Z[97] !== t ||
        Z[98] !== J ||
        Z[99] !== u ||
        Z[100] !== c ||
        Z[101] !== $ ||
        Z[102] !== F ||
        Z[103] !== w ||
        Z[104] !== k ||
        Z[105] !== M ||
        Z[106] !== E ||
        Z[107] !== O ||
        Z[108] !== L ||
        Z[109] !== K
          ? ((W = (0, a.jsxs)(t, { variant: w, children: [k, M, E, O, L, K, u, c, $, F, J] })),
            (Z[97] = t),
            (Z[98] = J),
            (Z[99] = u),
            (Z[100] = c),
            (Z[101] = $),
            (Z[102] = F),
            (Z[103] = w),
            (Z[104] = k),
            (Z[105] = M),
            (Z[106] = E),
            (Z[107] = O),
            (Z[108] = L),
            (Z[109] = K),
            (Z[110] = W))
          : (W = Z[110]),
        Z[111] !== X.default_timezone || Z[112] !== n || Z[113] !== ei || Z[114] !== d || Z[115] !== eo || Z[116] !== G
          ? ((V =
              d || null != n.oneTimeDate
                ? null
                : (0, a.jsxs)(g.t, {
                    variant: eo ? "outlined" : "default",
                    children: [
                      (0, a.jsx)(h.ic, {
                        label: (0, a.jsx)(i.A, { ...U.endRepeat }),
                        control: (0, a.jsx)(b.H, {
                          ariaLabel: ei.formatMessage(U.endRepeat),
                          options: [
                            { id: "never", label: ei.formatMessage(U.never) },
                            { id: "on-date", label: ei.formatMessage(U.onDate) },
                          ],
                          selectedId: null == n.untilDate ? "never" : "on-date",
                          selectedLabel: ei.formatMessage(null == n.untilDate ? U.never : U.onDate),
                          onSelect: (e) => {
                            if ("never" === e) return void G({ ...n, untilDate: void 0, untilTime: void 0 })
                            if (null != n.untilDate) return
                            let t = new Date()
                            ;(t.setMonth(t.getMonth() + 1),
                              G({
                                ...n,
                                untilTime: "23:59:59",
                                untilDate: new Intl.DateTimeFormat("en-CA", {
                                  timeZone: X.default_timezone,
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                }).format(t),
                              }))
                          },
                        }),
                      }),
                      null != n.untilDate
                        ? (0, a.jsx)(h.ic, {
                            label: (0, a.jsx)(i.A, { ...U.date }),
                            control: (0, a.jsx)(_.h, {
                              ariaLabel: ei.formatMessage(U.date),
                              value: n.untilDate,
                              timeZone: X.default_timezone,
                              onChange: (e) => G({ ...n, untilDate: e, untilTime: "23:59:59" }),
                            }),
                          })
                        : null,
                    ],
                  })),
            (Z[111] = X.default_timezone),
            (Z[112] = n),
            (Z[113] = ei),
            (Z[114] = d),
            (Z[115] = eo),
            (Z[116] = G),
            (Z[117] = V))
          : (V = Z[117]),
        Z[118] !== d || Z[119] !== eo
          ? ((Y =
              d && eo
                ? (0, a.jsx)(g.t, {
                    variant: "outlined",
                    children: (0, a.jsx)(h.ic, {
                      label: (0, a.jsx)(i.A, { ...U.time }),
                      control: (0, a.jsx)(i.A, { ...U.custom }),
                    }),
                  })
                : null),
            (Z[118] = d),
            (Z[119] = eo),
            (Z[120] = Y))
          : (Y = Z[120]),
        Z[121] !== m || Z[122] !== W || Z[123] !== V || Z[124] !== Y
          ? ((B = (0, a.jsxs)("div", { className: m, children: [W, V, Y] })),
            (Z[121] = m),
            (Z[122] = W),
            (Z[123] = V),
            (Z[124] = Y),
            (Z[125] = B))
          : (B = Z[125]))
      let ed = B
      return (
        Z[126] !== ed || Z[127] !== eo
          ? ((Q = eo
              ? ed
              : (0, a.jsx)(v.C, {
                  title: (0, a.jsx)("span", {
                    className: "text-xs uppercase select-none",
                    children: (0, a.jsx)(i.A, { ...U.frequency }),
                  }),
                  children: ed,
                })),
            (Z[126] = ed),
            (Z[127] = eo),
            (Z[128] = Q))
          : (Q = Z[128]),
        Q
      )
    }
    function I(e) {
      return "daily" === e.id || "weekly" === e.id || "monthly" === e.id
    }
    function N(e) {
      return "string" == typeof e
    }
    function R() {
      let e,
        t,
        n,
        o = (0, l.c)(4),
        r = (0, s.A)()
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(i.A, {
              id: "automations.editor.schedule.monitoring.label",
              defaultMessage: "Periodically",
            })),
            (o[0] = e))
          : (e = o[0]),
        o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(i.A, {
              id: "automations.editor.schedule.monitoring.helpText",
              defaultMessage:
                "ChatGPT regularly checks for specific conditions to be met before running this schedule.",
            })),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== r
          ? ((n = (0, a.jsxs)("span", {
              className: "inline-flex items-center gap-1 text-tertiary",
              children: [
                e,
                (0, a.jsx)(m.J, {
                  content: t,
                  children: (e) =>
                    (0, a.jsx)(u.$, {
                      ...e,
                      type: "button",
                      unstyled: !0,
                      "aria-label": r.formatMessage({
                        id: "automations.editor.schedule.monitoring.infoLabel",
                        defaultMessage: "About periodic schedules",
                      }),
                      children: (0, a.jsx)(c.ehD, {}),
                    }),
                }),
              ],
            })),
            (o[2] = r),
            (o[3] = n))
          : (n = o[3]),
        n
      )
    }
    function P(e) {
      let t,
        n,
        o,
        s = (0, l.c)(9),
        { automation: r } = e
      if (s[0] !== r.schedule) {
        let e = r.schedule.match(/^RRULE:(.+)$/m)?.[1]
        ;((t = Number(e?.match(/(?:^|;)INTERVAL=(\d+)/)?.[1] ?? 1)),
          (n = e?.match(/(?:^|;)FREQ=(\w+)/)?.[1]),
          (s[0] = r.schedule),
          (s[1] = t),
          (s[2] = n))
      } else ((t = s[1]), (n = s[2]))
      let d = n
      if ("custom" === r.schedule_components.frequency && Number.isSafeInteger(t) && t > 0) {
        if ("MINUTELY" === d) {
          let e
          return (
            s[3] !== t
              ? ((e = (0, a.jsx)(i.A, { ...U.minutes, values: { minutes: t } })), (s[3] = t), (s[4] = e))
              : (e = s[4]),
            e
          )
        }
        if ("HOURLY" === d) {
          let e
          return (
            s[5] !== t
              ? ((e = (0, a.jsx)(i.A, { ...U.everyHours, values: { hours: t } })), (s[5] = t), (s[6] = e))
              : (e = s[6]),
            e
          )
        }
      }
      return (
        s[7] !== r.schedule_components.frequency
          ? ((o = (0, a.jsx)(i.A, { ...U.repeatValue, values: { frequency: r.schedule_components.frequency } })),
            (s[7] = r.schedule_components.frequency),
            (s[8] = o))
          : (o = s[8]),
        o
      )
    }
    let U = (0, r.YK)({
      frequency: { id: "automations.editor.schedule.frequencySectionLabel", defaultMessage: "Frequency" },
      repeat: { id: "automations.editor.schedule.repeat", defaultMessage: "Repeat" },
      date: { id: "automations.editor.schedule.date", defaultMessage: "Date" },
      every: { id: "automations.editor.schedule.every", defaultMessage: "Every" },
      hours: {
        id: "automations.editor.schedule.hourInterval",
        defaultMessage: "{hours, plural, one {# hour} other {# hours}}",
      },
      daysOfWeek: { id: "automations.editor.schedule.daysOfWeek", defaultMessage: "Days of the week" },
      monthlyDate: { id: "automations.editor.schedule.monthlyDate", defaultMessage: "Monthly date" },
      time: { id: "automations.editor.schedule.time", defaultMessage: "Time" },
      morning: { id: "automations.editor.schedule.morning", defaultMessage: "Morning" },
      afternoon: { id: "automations.editor.schedule.afternoon", defaultMessage: "Afternoon" },
      evening: { id: "automations.editor.schedule.evening", defaultMessage: "Evening" },
      night: { id: "automations.editor.schedule.night", defaultMessage: "Night" },
      customFrequency: {
        id: "automations.scheduled.custom.frequency",
        defaultMessage: "{frequency, select, daily {Daily} weekly {Weekly} monthly {Monthly} other {Custom}}",
      },
      endRepeat: { id: "automations.editor.schedule.until", defaultMessage: "End repeat" },
      never: { id: "automations.editor.schedule.untilNever", defaultMessage: "Never" },
      onDate: { id: "automations.editor.schedule.untilOnDate", defaultMessage: "On date" },
      custom: { id: "automations.sharing.preview.dialog.custom_task_time", defaultMessage: "Custom" },
      minutes: {
        id: "automations.scheduled.monitoring.minutes",
        defaultMessage: "Every {minutes, plural, one {minute} other {# minutes}}",
      },
      everyHours: {
        id: "automations.scheduled.monitoring.hours",
        defaultMessage: "Every {hours, plural, one {hour} other {# hours}}",
      },
      repeatValue: {
        id: "automations.sharing.preview.repeatValue",
        defaultMessage:
          "{frequency, select, once {Once} hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Annually} other {Custom}}",
      },
    })
  },
  FLVF(e, t, n) {
    var a = n("l8z4"),
      l = n("PFjh"),
      o = n("yGJW")
    let s = {
        task_share_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_BUTTON_CLICKED",
        task_share_sheet_viewed: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_SHEET_VIEWED",
        task_share_link_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_BUTTON_CLICKED",
        task_share_link_created: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_CREATED",
        task_share_link_refreshed: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_REFRESHED",
        task_share_link_delete_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETE_BUTTON_CLICKED",
        task_share_link_deleted: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETED",
      },
      i = {
        site_scheduled_tab: "CHATGPT_TASKS_INTERACTION_SOURCE_UNSPECIFIED",
        scheduled_page: "CHATGPT_TASKS_INTERACTION_SOURCE_TASKS_PAGE_TASK_ROW",
        editor: "CHATGPT_TASKS_INTERACTION_SOURCE_EDITOR",
        sharing_sheet: "CHATGPT_TASKS_INTERACTION_SOURCE_SHARING_SHEET",
      },
      r = {
        shared_task_sheet_viewed: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SHEET_VIEWED",
        shared_task_save_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_BUTTON_CLICKED",
        shared_task_save_submitted: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_SAVE_SUBMITTED",
        shared_task_report_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_SHARED_TASK_REPORT_BUTTON_CLICKED",
      }
    n.d(
      t,
      {},
      {
        I: function (e, t, n, r = "sharing_sheet", d) {
          ;((0, o.yy)(e, a.AS, { type: s[t], taskId: n, source: i[r], ...d }),
            e
              .get(l.T$)
              .count("default", "automations.sharing.event", {
                type: t,
                source: "scheduled_page" === r ? "tasks_page_task_row" : r,
                ...(d?.success == null ? {} : { success: String(d.success) }),
              }))
        },
        u: function (e, t, n, s) {
          ;((0, o.yy)(e, a.AS, {
            type: r[t],
            source: "CHATGPT_TASKS_INTERACTION_SOURCE_SHARED_TASK_SHEET",
            sharePostId: n,
            ...s,
          }),
            e
              .get(l.T$)
              .count("default", "automations.sharing.event", {
                type: t,
                source: "shared_task_sheet",
                ...(s?.success == null ? {} : { success: String(s.success) }),
              }))
        },
      },
    )
  },
  TzXS(e, t, n) {
    var a = n("fGpH")
    function l(e) {
      return (0, a.nT)(e) || 0 !== e.next_run_times.length ? (e.is_enabled ? "active" : "paused") : "completed"
    }
    function o({ automation: e }, t) {
      let n = t?.[e.id] ?? Date.parse(e.updated_at)
      return Number.isNaN(n) ? 0 : n
    }
    n.d(
      t,
      {},
      {
        jv: l,
        pK: function (...e) {
          let t = new Map()
          for (let n of e)
            for (let e of n ?? []) {
              let n = t.get(e.id)
              ;(null == n || e.updated_at >= n.updated_at) && t.set(e.id, e)
            }
          return Array.from(t.values(), (e) => ({ automation: e }))
        },
        rk: function (e, t, n) {
          let a = { active: [], recent: [], paused: [], completed: [] }
          for (let s of e) {
            let e = l(s.automation)
            ;(a[e].push(s), "active" !== e && o(s, "paused" === e ? n : void 0) >= t - 864e5 && a.recent.push(s))
          }
          for (let e of [a.paused, a.completed]) e.sort((e, t) => o(t) - o(e))
          return (a.recent.sort((e, t) => o(t, n) - o(e, n)), a)
        },
      },
    )
  },
}
//# sourceMappingURL=622950.84ac03d321.js.map
