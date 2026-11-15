export const __rspack_esm_ids = [622950]
export const __webpack_modules__ = {
  p2tp(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("zd8w"),
      i = n("oyxz"),
      l = n("FvYa"),
      r = n("bVeK"),
      d = n("AWNZ"),
      u = n("ZEx5"),
      c = n("sn2N")
    function m(e) {
      let t,
        n,
        s,
        m,
        f,
        g,
        p,
        _,
        b,
        x = (0, o.c)(45),
        { trigger: y, isAutomationEnabled: v, onOpenTrigger: w, showUnavailableConditions: j, variant: k } = e,
        T = y?.presentation
      x[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)("span", { children: (0, a.jsx)(r.o1J, {}) })), (x[0] = t))
        : (t = x[0])
      let S = y?.connector_type,
        A = T?.icon_url
      x[1] !== S || x[2] !== A
        ? ((n = (0, a.jsx)(l.R, { size: 20, alt: "", fallback: t, knownAppId: S, logoUrl: A })),
          (x[1] = S),
          (x[2] = A),
          (x[3] = n))
        : (n = x[3])
      let M = n
      ;(x[4] !== T?.display_name || x[5] !== y?.connector_type
        ? ((s =
            T?.display_name ??
            y?.connector_type ??
            (0, a.jsx)(i.A, {
              id: "inbox.automations.cloud.webhook.fallback",
              defaultMessage: "Webhook",
              description:
                "Fallback name for a cloud task's event trigger when its connected app is unavailable in the details panel",
            })),
          (x[4] = T?.display_name),
          (x[5] = y?.connector_type),
          (x[6] = s))
        : (s = x[6]),
        x[7] !== s
          ? ((m = (0, a.jsx)("span", { className: "break-words select-text", children: s })), (x[7] = s), (x[8] = m))
          : (m = x[8]))
      let C = m
      x[9] !== v || x[10] !== y?.is_enabled
        ? ((f =
            v && y?.is_enabled === !1
              ? (0, a.jsx)(i.A, {
                  id: "inbox.automations.cloud.webhook.inactive",
                  defaultMessage: "Trigger inactive — this trigger won’t start the task",
                  description:
                    "Warning that this connected-app trigger cannot start the active task; other enabled triggers may still start it",
                })
              : null),
          (x[9] = v),
          (x[10] = y?.is_enabled),
          (x[11] = f))
        : (f = x[11])
      let D = f
      if ("form" === k) {
        let e,
          t,
          n,
          o,
          s,
          l,
          r,
          c = C
        if (y?.connector_type === "slack" && "message" === y.webhook_name) {
          let e
          ;(x[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(i.A, {
                id: "automations.configuration.slackTask",
                defaultMessage: "New Slack message",
                description: "Trigger option for a new Slack message",
              })),
              (x[12] = e))
            : (e = x[12]),
            (c = e))
        } else if (y?.connector_type === "gmail" && "message" === y.webhook_name) {
          let e
          ;(x[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(i.A, {
                id: "automations.configuration.gmailTask",
                defaultMessage: "New email",
                description: "Trigger option for new Gmail email",
              })),
              (x[13] = e))
            : (e = x[13]),
            (c = e))
        } else if (y?.connector_type === "github" && "pull_request" === y.webhook_name) {
          let e
          ;(x[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(i.A, {
                id: "automations.configuration.githubEvent",
                defaultMessage: "GitHub event",
                description: "Trigger option for a GitHub event",
              })),
              (x[14] = e))
            : (e = x[14]),
            (c = e))
        }
        return (
          x[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(i.A, {
                id: "automations.configuration.schedule",
                defaultMessage: "Trigger",
                description: "Label identifying the scheduled task trigger",
              })),
              (x[15] = e))
            : (e = x[15]),
          x[16] !== c
            ? ((t = (0, a.jsx)("span", { className: "min-w-0 text-end break-words", children: c })),
              (x[16] = c),
              (x[17] = t))
            : (t = x[17]),
          x[18] !== M
            ? ((n = (0, a.jsx)("span", { className: "shrink-0 text-default", children: M })), (x[18] = M), (x[19] = n))
            : (n = x[19]),
          x[20] !== n || x[21] !== t
            ? ((o = (0, a.jsx)(d.ic, {
                variant: "nested",
                labelSizing: "content",
                label: e,
                control: (0, a.jsxs)("span", {
                  className: "flex min-w-0 items-center gap-1.5 text-tertiary",
                  children: [t, n],
                }),
              })),
              (x[20] = n),
              (x[21] = t),
              (x[22] = o))
            : (o = x[22]),
          x[23] !== D
            ? ((s = null != D ? (0, a.jsx)(d.ic, { variant: "nested", label: D, control: null }) : null),
              (x[23] = D),
              (x[24] = s))
            : (s = x[24]),
          x[25] !== T || x[26] !== y?.connector_type
            ? ((l =
                null == T
                  ? (0, a.jsx)(d.ic, {
                      variant: "nested",
                      label: (0, a.jsx)(i.A, {
                        id: "inbox.automations.cloud.webhook.unavailable",
                        defaultMessage: "Trigger details unavailable",
                        description:
                          "Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters",
                      }),
                      control: null,
                    })
                  : T.condition_rows.map((e) => {
                      let { id: t, label: n, value: o } = e
                      return (0, a.jsx)(
                        d.ic,
                        {
                          variant: "nested",
                          labelSizing: "content",
                          label:
                            y?.connector_type === "slack" && "channels" === t
                              ? (0, a.jsx)(i.A, {
                                  id: "automations.configuration.channels",
                                  defaultMessage: "In channels",
                                  description: "Slack channels to monitor for new messages",
                                })
                              : n,
                          control: (0, a.jsx)("span", {
                            className: "min-w-0 text-end break-words text-tertiary select-text",
                            children: o,
                          }),
                        },
                        t,
                      )
                    })),
              (x[25] = T),
              (x[26] = y?.connector_type),
              (x[27] = l))
            : (l = x[27]),
          x[28] !== o || x[29] !== s || x[30] !== l
            ? ((r = (0, a.jsxs)(u.t, { variant: "form", children: [o, s, l] })),
              (x[28] = o),
              (x[29] = s),
              (x[30] = l),
              (x[31] = r))
            : (r = x[31]),
          r
        )
      }
      return (
        x[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("span", {
              className: "select-none",
              children: (0, a.jsx)(i.A, {
                id: "inbox.automations.cloud.webhook.trigger",
                defaultMessage: "Trigger",
                description:
                  "Section heading above the connected app that can trigger a cloud webhook task in its details panel",
              }),
            })),
            (x[32] = g))
          : (g = x[32]),
        x[33] !== M || x[34] !== D || x[35] !== C || x[36] !== w || x[37] !== y
          ? ((p = (0, a.jsx)(c.C, {
              title: g,
              children: (0, a.jsx)(u.t, {
                children:
                  null != y && null != w
                    ? (0, a.jsx)(d.kG, {
                        description: D,
                        edgeRounding: "surface",
                        icon: M,
                        label: C,
                        trailing: (0, a.jsx)(r.uM3, {}),
                        onClick: () => w(y),
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
            (x[33] = M),
            (x[34] = D),
            (x[35] = C),
            (x[36] = w),
            (x[37] = y),
            (x[38] = p))
          : (p = x[38]),
        x[39] !== T || x[40] !== j
          ? ((_ =
              (null == T && j) || (T?.condition_rows.length ?? 0) > 0
                ? (0, a.jsx)(c.C, {
                    title: (0, a.jsx)("span", {
                      className: "select-none",
                      children: (0, a.jsx)(i.A, {
                        id: "inbox.automations.cloud.webhook.condition",
                        defaultMessage: "Condition",
                        description:
                          "Section heading above the read-only event filters for a cloud webhook task in its details panel",
                      }),
                    }),
                    children: (0, a.jsx)(u.t, {
                      children:
                        null == T
                          ? (0, a.jsx)(d.ic, {
                              control: null,
                              label: (0, a.jsx)("span", {
                                className: "select-none",
                                children: (0, a.jsx)(i.A, {
                                  id: "inbox.automations.cloud.webhook.unavailable",
                                  defaultMessage: "Trigger details unavailable",
                                  description:
                                    "Shown instead of event filters when a cloud webhook task's trigger metadata is unavailable; it does not mean the trigger has no filters",
                                }),
                              }),
                              variant: "nested",
                            })
                          : T.condition_rows.map(h),
                    }),
                  })
                : null),
            (x[39] = T),
            (x[40] = j),
            (x[41] = _))
          : (_ = x[41]),
        x[42] !== _ || x[43] !== p
          ? ((b = (0, a.jsxs)(a.Fragment, { children: [p, _] })), (x[42] = _), (x[43] = p), (x[44] = b))
          : (b = x[44]),
        b
      )
    }
    function h(e) {
      let { id: t, label: n, value: o } = e
      return (0, a.jsx)(
        d.ic,
        {
          control: (0, a.jsx)("span", {
            className: "max-w-64 text-end text-base break-words text-default select-text",
            children: o,
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
            l = (0, o.c)(17),
            { triggers: r, isAutomationEnabled: d, onOpenTrigger: u, showUnavailableConditions: c, variant: h } = e,
            f = void 0 === c || c,
            g = void 0 === h ? "default" : h
          if (null == r || 0 === r.length) {
            let e
            return (
              l[0] !== d || l[1] !== f || l[2] !== g
                ? ((e = (0, a.jsx)(m, {
                    variant: g,
                    trigger: void 0,
                    isAutomationEnabled: d,
                    showUnavailableConditions: f,
                  })),
                  (l[0] = d),
                  (l[1] = f),
                  (l[2] = g),
                  (l[3] = e))
                : (e = l[3]),
              e
            )
          }
          if (l[4] !== d || l[5] !== u || l[6] !== f || l[7] !== r || l[8] !== g) {
            let e
            ;(l[10] !== d || l[11] !== u || l[12] !== f || l[13] !== g
              ? ((e = (e, t) =>
                  (0, a.jsxs)(
                    s.Fragment,
                    {
                      children: [
                        t > 0
                          ? (0, a.jsx)("div", {
                              className: "text-center text-sm text-tertiary select-none",
                              children: (0, a.jsx)(i.A, {
                                id: "inbox.automations.cloud.webhook.or",
                                defaultMessage: "Or",
                                description:
                                  "Separator between alternative triggers in a cloud webhook task's details panel; any one of the triggers can start the task",
                              }),
                            })
                          : null,
                        (0, a.jsx)(m, {
                          variant: g,
                          trigger: e,
                          isAutomationEnabled: d,
                          showUnavailableConditions: f,
                          onOpenTrigger: u,
                        }),
                      ],
                    },
                    e.id,
                  )),
                (l[10] = d),
                (l[11] = u),
                (l[12] = f),
                (l[13] = g),
                (l[14] = e))
              : (e = l[14]),
              (t = r.map(e)),
              (l[4] = d),
              (l[5] = u),
              (l[6] = f),
              (l[7] = r),
              (l[8] = g),
              (l[9] = t))
          } else t = l[9]
          return (
            l[15] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (l[15] = t), (l[16] = n)) : (n = l[16]),
            n
          )
        },
      },
    )
  },
  nWtQ(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("Wf1j"),
      i = n("oyxz"),
      l = n("dMTK"),
      r = n("KIKs"),
      d = n("fGpH"),
      u = n("mmmg"),
      c = n("ZlGh")
    let m = new Set(u.GR)
    function h(e) {
      return !m.has(e)
    }
    function f(e) {
      return e.trim()
    }
    function g(e, t, n) {
      let a = { hour: "numeric", minute: "2-digit" },
        o = t.formatTimeToParts(e, a),
        s = o.find((e) => "dayPeriod" === e.type)?.value
      n &&
        null != s &&
        o.find((e) => "minute" === e.type)?.value === t.formatNumber(0, { minimumIntegerDigits: 2, useGrouping: !1 }) &&
        (a.minute = void 0)
      let i = t.formatTime(e, a)
      return null == s ? i : i.replace(s, s.toLocaleLowerCase(t.locale))
    }
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n,
            u,
            m = (0, o.c)(39),
            { automation: p, teamId: _, variant: b } = e,
            x = void 0 === b ? "editor" : b,
            y = (0, s.A)(),
            v = (0, r.wv)()
          m[0] !== p ? ((t = (0, d.Xr)(p)), (m[0] = p), (m[1] = t)) : (t = m[1])
          let w = t,
            j = p.schedule_components
          m[2] !== p || m[3] !== _
            ? ((n = (0, d.mZ)({ automation: p, teamId: _ })), (m[2] = p), (m[3] = _), (m[4] = n))
            : (n = m[4])
          let k = n,
            T = "recurring",
            S = "",
            A = "",
            M = "",
            C = 1
          if ("active" !== w) T = w
          else if (null != k && "condition_watch" !== p.timing_mode) T = "everyMinutes"
          else if ("summary" === x && p.display_schedule) {
            let e
            return (
              m[5] !== p.display_schedule
                ? ((e = (0, a.jsx)(a.Fragment, { children: p.display_schedule })),
                  (m[5] = p.display_schedule),
                  (m[6] = e))
                : (e = m[6]),
              e
            )
          } else if ("condition_watch" === p.timing_mode) T = "monitoring"
          else {
            let e
            m[7] !== p ? ((e = (0, c.qz)(p)), (m[7] = p), (m[8] = e)) : (e = m[8])
            let t = e.scheduleConfig
            if (null != t.oneTimeDate) {
              let e = `${t.oneTimeDate}T${t.time}:00`
              if (m[9] !== p.schedule_time_of_day || m[10] !== y || m[11] !== v || m[12] !== e || m[13] !== x) {
                let t = new Date(e),
                  n = (0, l.f$)(t, v),
                  a = p.schedule_time_of_day
                ;(0 === n
                  ? ((T = a ?? "time"), (A = g(t, y, "summary" === x)))
                  : n > 0 && n < 7
                    ? ((T = null == a ? "weekdayTime" : "weekday"),
                      (M = y.formatDate(t, { weekday: null == a ? "short" : "long" })),
                      (A = g(t, y, "summary" === x)))
                    : ((T = "date"), (S = y.formatDate(t, { day: "numeric", month: "short" }))),
                  (m[9] = p.schedule_time_of_day),
                  (m[10] = y),
                  (m[11] = v),
                  (m[12] = e),
                  (m[13] = x),
                  (m[14] = T),
                  (m[15] = A),
                  (m[16] = M),
                  (m[17] = S))
              } else ((T = m[14]), (A = m[15]), (M = m[16]), (S = m[17]))
            } else if ("hourly" === t.mode) T = 1 === (C = t.intervalHours ?? 1) ? "hourly" : "everyHours"
            else {
              let e = /(?:^|\r?\n)RRULE:([^\r\n]+)/.exec(p.schedule)?.[1],
                t = /(?:^|;)INTERVAL=([^;]+)/.exec(e ?? "")?.[1]
              if (null == t || "1" === t)
                switch (j.frequency) {
                  case "custom":
                  case "once":
                  case "yearly":
                    break
                  case "hourly":
                  case "monthly":
                    T = j.frequency
                    break
                  case "daily": {
                    let e = j.by_hour,
                      t = j.by_minute
                    if ("flexible_schedule" === p.timing_mode) T = "daily"
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
                      ;((T = "dailyTime"),
                        m[18] !== e || m[19] !== y || m[20] !== t || m[21] !== x
                          ? ((n = g(new Date(2e3, 0, 1, e, t), y, "summary" === x)),
                            (m[18] = e),
                            (m[19] = y),
                            (m[20] = t),
                            (m[21] = x),
                            (m[22] = n))
                          : (n = m[22]),
                        (A = n))
                    }
                    break
                  }
                  case "weekly": {
                    let e, t
                    if (
                      (m[23] !== j.by_day
                        ? ((e = 0 === (t = new Set(j.by_day?.split(",").map(f))).size || [...t].some(h)),
                          (m[23] = j.by_day),
                          (m[24] = e),
                          (m[25] = t))
                        : ((e = m[24]), (t = m[25])),
                      e)
                    )
                      break
                    if (1 === t.size) {
                      let e
                      ;(m[26] !== t ? ((e = [...t][0] ?? "recurring"), (m[26] = t), (m[27] = e)) : (e = m[27]), (T = e))
                    } else
                      T =
                        5 === t.size && ["MO", "TU", "WE", "TH", "FR"].every((e) => t.has(e))
                          ? "weekdays"
                          : 2 === t.size && t.has("SA") && t.has("SU")
                            ? "weekends"
                            : "weekly"
                  }
                }
            }
          }
          if ("summary" === x && ("dailyTime" === T || "weekdayTime" === T)) {
            let e
            return (
              m[28] !== T || m[29] !== A || m[30] !== M
                ? ((e = (0, a.jsx)(i.A, {
                    id: "automations.scheduled.summary.compactCadenceWithTime",
                    defaultMessage: "{cadence, select, dailyTime {Daily · {time}} other {{weekday} · {time}}}",
                    description:
                      "Compact schedule in a conversation's Scheduled summary row. dailyTime means a daily recurrence; otherwise weekday is a locale-formatted weekday. time is a locale-formatted exact time. The middle dot separates the cadence or weekday from the time; adapt punctuation and order for the locale.",
                    values: { cadence: T, time: A, weekday: M },
                  })),
                  (m[28] = T),
                  (m[29] = A),
                  (m[30] = M),
                  (m[31] = e))
                : (e = m[31]),
              e
            )
          }
          return (
            m[32] !== T || m[33] !== S || m[34] !== C || m[35] !== k || m[36] !== A || m[37] !== M
              ? ((u = (0, a.jsx)(i.A, {
                  id: "automations.scheduled.editor.compactCadenceWithMinutes",
                  defaultMessage:
                    "{cadence, select, completed {Completed} paused {Paused} monitoring {Monitoring} daily {Daily} dailyTime {Daily {time}} everyMinutes {Every {minutes, number} min} hourly {Hourly} everyHours {Every {hours, plural, one {hour} other {# hours}}} weekly {Weekly} weekdays {Weekdays} weekends {Weekends} monthly {Monthly} MO {Mondays} TU {Tuesdays} WE {Wednesdays} TH {Thursdays} FR {Fridays} SA {Saturdays} SU {Sundays} morning {Morning} afternoon {Afternoon} evening {Evening} night {Night} time {{time}} weekday {{weekday}} weekdayTime {{weekday} {time}} date {{date}} other {Recurring}}",
                  description:
                    "Compact schedule or status above the task title in the Scheduled task editor. cadence selects the schedule type or paused/completed status. time is a locale-formatted exact time, minutes and hours are the recurrence intervals in their respective units, weekday is a locale-formatted weekday, and date is a locale-formatted month and day. Keep the label short.",
                  values: { cadence: T, date: S, time: A, weekday: M, hours: C, minutes: k },
                })),
                (m[32] = T),
                (m[33] = S),
                (m[34] = C),
                (m[35] = k),
                (m[36] = A),
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
    n.d(t, { M: () => ed, Q: () => el })
    var a = n("ABep"),
      o = n("QosV"),
      s = n("ULZ9"),
      i = n("on57"),
      l = n("SZCv"),
      r = n.n(l),
      d = n("zTeN"),
      u = n("DBCl"),
      c = n("zd8w"),
      m = n("Wf1j"),
      h = n("oyxz"),
      f = n("HZfM"),
      g = n("SPnB"),
      p = n("GIgU"),
      _ = n("UeCG"),
      b = n("LTLZ"),
      x = n("jov5"),
      y = n("K6Gm"),
      v = n("R2L4"),
      w = n("rL0w"),
      j = n("SV27"),
      k = n("jAnS"),
      T = n("Sm6l"),
      S = n("JNtf"),
      A = n("mUDD"),
      M = n("SGsN"),
      C = n("KIKs"),
      D = n("hlym"),
      E = n("OWtl"),
      I = n("soaw"),
      N = n("aa4G"),
      R = n("fyx9"),
      P = n("odKs"),
      U = n("sn2N"),
      L = n("ED7I"),
      O = n("fGpH"),
      q = n("Ro2M"),
      H = n("p2tp"),
      z = n("nWtQ"),
      K = n("c7WY"),
      G = n("k7o2"),
      F = n("sujc"),
      $ = n("nvO1"),
      W = n("sK0R")
    let V = (0, d.i1)(E.u, (e, { get: t }) => {
      let n = e.cloudTeam
      if (null != n && !t($.lc, n.accountId)) return !0
      let a = t(W.LN, { draft: e, personal: null == n })
      if (null == n) return a?.status !== "loading"
      let o = t($.Bn, n)
      if (null == o.data) return null != o.error
      let s = (0, $.id)(o.data)
      if (null == s) return !0
      let i = { ...n, serviceAccountId: s },
        l = t(G.WD, i),
        r = t(F.T, i),
        d = t(G.Ys, { ...i, view: "installed", query: "" }),
        u =
          (null != l.data || null != l.error) &&
          (null != r.data || null != r.error) &&
          (null != l.error || null != r.error || null != d.data || null != d.error)
      return a?.status !== "loading" && u
    })
    var B = n("qjUD"),
      Y = n("ZlGh"),
      Q = n("xA2X"),
      Z = n("lBzi"),
      J = n("AWNZ"),
      X = n("ZEx5"),
      ee = n("OMIV"),
      et = n("HFSu"),
      en = n("GDNt")
    let ea = (0, d.vU)(E.u, (e, { get: t, scope: n }) => {
      let a = t(g.chatGptAuthenticatedAccountId$)
      return {
        enabled: "allowed" === t(g.m0).status && null != a,
        queryKey: ["cloud-automations", "webhook-batch", a, e],
        queryFn: async ({ signal: t }) => {
          let o = await et.CodexRequest.safeGet("/automation/{automation_id}/webhook_batch_state", {
            parameters: { path: { automation_id: e } },
            signal: t,
          })
          if ((t.throwIfAborted(), null != o.is_enabled && n.get(g.chatGptAuthenticatedAccountId$) === a)) {
            let t = o.is_enabled
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
              n.query.setData(q._x, (n) =>
                n?.accountId === a && n?.items.some(({ automation: n }) => n.id === e && n.is_enabled !== t)
                  ? {
                      ...n,
                      items: n.items.map((n) =>
                        n.automation.id === e ? { ...n, automation: { ...n.automation, is_enabled: t } } : n,
                      ),
                    }
                  : n,
              ),
              n.query.setData(q.jv, e, (e) =>
                null == e || e.automation.is_enabled === t
                  ? e
                  : { ...e, automation: { ...e.automation, is_enabled: t } },
              ))
          }
          return o
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
        s,
        i,
        l,
        r,
        u,
        f,
        p,
        _,
        b = (0, o.c)(39),
        { automation: x, disabled: y, hasChanges: v, isRunning: w, onRunningChange: j, onStarted: k } = e,
        S = (0, d.gh)(E.u),
        A = (0, d._U)(ee.JW, "1159770884"),
        C = (0, m.A)(),
        D = (0, c.useRef)(null)
      b[0] !== A ? ((t = { enabled: A }), (b[0] = A), (b[1] = t)) : (t = b[1])
      let { data: I, isPending: N, error: R, refetch: P } = (0, d._U)(ea, x.id, t),
        { isPending: U } = (0, d.Ul)(q.x2),
        L = R instanceof en.fk ? R.status : null,
        O = 404 === L || 410 === L,
        H = 401 === L || 403 === L,
        z = (I?.is_enabled ?? x.is_enabled) === !1 && !O && !H && null != I && I.pending_event_count > 0,
        K = !z && !v && null == R && null != I && I.pending_event_count > 0
      if (
        (b[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = () => () => D.current?.abort()), (s = []), (b[2] = n), (b[3] = s))
          : ((n = b[2]), (s = b[3])),
        (0, c.useEffect)(n, s),
        !A)
      )
        return null
      b[4] !== x.conversation_id ||
      b[5] !== x.id ||
      b[6] !== y ||
      b[7] !== C ||
      b[8] !== j ||
      b[9] !== k ||
      b[10] !== P ||
      b[11] !== S
        ? ((i = (e) => {
            if (y || null != D.current) return
            let t = S.get(g.chatGptAuthenticatedAccountId$),
              n = new AbortController()
            ;((D.current = n),
              j(!0),
              ("resume" === e
                ? S.get(q.x2).mutateAsync({ automationId: x.id, isEnabled: !0 }).then(ei)
                : et.CodexRequest.safePost("/automation/{automation_id}/webhook_batch/run_now", {
                    parameters: { path: { automation_id: x.id } },
                    requestBody: { request_id: globalThis.crypto.randomUUID() },
                    signal: n.signal,
                  }).then(es)
              )
                .then((e) => {
                  n.signal.aborted ||
                    S.get(g.chatGptAuthenticatedAccountId$) !== t ||
                    0 === e ||
                    (S.get(M.Id).success(
                      C.formatMessage(
                        {
                          id: "automations.editor.webhook.runNowSuccessWithCount",
                          defaultMessage: "Running {count, plural, one {# pending event} other {# pending events}}",
                          description:
                            "Success toast after the Scheduled task editor starts a queued webhook-event batch. The count is the number of events started.",
                        },
                        { count: e },
                      ),
                    ),
                    null != x.conversation_id && S.query.invalidate(Z.chatGptConversationQueryById$, x.conversation_id),
                    k())
                })
                .catch(() => {
                  n.signal.aborted ||
                    S.get(g.chatGptAuthenticatedAccountId$) !== t ||
                    S.get(M.Id).danger(
                      "resume" === e
                        ? C.formatMessage({
                            id: "automations.scheduled.webhook.resumeError",
                            defaultMessage: "Couldn’t resume task",
                            description:
                              "Error toast when resuming a paused webhook task from the Scheduled editor fails.",
                          })
                        : C.formatMessage({
                            id: "automations.editor.webhook.runNowFailure",
                            defaultMessage: "Couldn’t run pending events",
                            description:
                              "Error toast when the Scheduled task editor cannot start the queued webhook-event batch.",
                          }),
                      {
                        errorAnalytics: {
                          toastId: "resume" === e ? "toggle_automation_status" : "automation_editor_webhook_run_now",
                        },
                      },
                    )
                })
                .finally(() => {
                  ;((D.current = null),
                    n.signal.aborted || S.get(g.chatGptAuthenticatedAccountId$) !== t || (j(!1), P()))
                }))
          }),
          (b[4] = x.conversation_id),
          (b[5] = x.id),
          (b[6] = y),
          (b[7] = C),
          (b[8] = j),
          (b[9] = k),
          (b[10] = P),
          (b[11] = S),
          (b[12] = i))
        : (i = b[12])
      let G = i
      if (N) {
        let e
        ;(b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsLoading",
              defaultMessage: "Checking pending events…",
              description:
                "Loading status while the Scheduled task editor checks the queue of webhook events waiting to run.",
            })),
            (b[13] = e))
          : (e = b[13]),
          (l = e))
      } else if (O) {
        let e
        ;(b[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsTerminal",
              defaultMessage: "This task has ended and can’t process pending events",
              description:
                "Status in the Scheduled editor when a webhook task no longer exists or has ended and cannot process queued events.",
            })),
            (b[14] = e))
          : (e = b[14]),
          (l = e))
      } else if (null != R) {
        let e
        ;(b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsError",
              defaultMessage: "Unable to check pending events",
              description:
                "Error status in the Scheduled task editor when the queue of webhook events cannot be loaded.",
            })),
            (b[15] = e))
          : (e = b[15]),
          (l = e))
      } else {
        let e,
          t = I?.pending_event_count
        ;(b[16] !== t
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEvents",
              defaultMessage: "{count, plural, one {# event waiting} other {# events waiting}}",
              description:
                "Queue count in the Scheduled task editor. The count is the number of webhook events waiting to run.",
              values: { count: t },
            })),
            (b[16] = t),
            (b[17] = e))
          : (e = b[17]),
          (l = e))
      }
      if (U) {
        let e
        ;(b[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsStatusUpdating",
              defaultMessage: "Updating task status…",
              description: "Progress label while the Scheduled editor resumes a paused webhook task.",
            })),
            (b[18] = e))
          : (e = b[18]),
          (r = e))
      } else if (w) {
        let e
        ;(b[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsStarting",
              defaultMessage: "Starting pending events…",
              description: "Progress label while the Scheduled editor starts queued webhook events.",
            })),
            (b[19] = e))
          : (e = b[19]),
          (r = e))
      } else if (z) {
        let e
        ;(b[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "automations.editor.webhook.pendingEventsPaused",
              defaultMessage: "Task is paused. Resume to process pending events.",
              description:
                "Explanation in the Scheduled task editor that a paused webhook task must be resumed before its queued events can run.",
            })),
            (b[20] = e))
          : (e = b[20]),
          (r = e))
      }
      return (
        b[21] !== K || b[22] !== R || b[23] !== H || b[24] !== z || b[25] !== O
          ? ((u = null),
            z ? (u = "resume") : null == R || H || O ? K && (u = "run") : (u = "retry"),
            (b[21] = K),
            (b[22] = R),
            (b[23] = H),
            (b[24] = z),
            (b[25] = O),
            (b[26] = u))
          : (u = b[26]),
        b[27] !== l
          ? ((f = (0, a.jsx)("span", { "aria-live": "polite", className: "select-none", children: l })),
            (b[27] = l),
            (b[28] = f))
          : (f = b[28]),
        b[29] !== u || b[30] !== y || b[31] !== w || b[32] !== P || b[33] !== G
          ? ((p =
              null == u
                ? null
                : (0, a.jsxs)(T.$, {
                    color: "secondary",
                    disabled: y,
                    loading: w,
                    type: "button",
                    onClick: () => {
                      "retry" === u ? P() : null != u && G(u)
                    },
                    children: [
                      "resume" === u &&
                        (0, a.jsx)(h.A, {
                          id: "automations.editor.webhook.resume",
                          defaultMessage: "Resume",
                          description:
                            "Button in the Scheduled editor that resumes a paused webhook task so queued events can be processed.",
                        }),
                      "retry" === u &&
                        (0, a.jsx)(h.A, {
                          id: "automations.editor.webhook.retry",
                          defaultMessage: "Retry",
                          description:
                            "Button in the Scheduled editor that retries loading the queue of webhook events after a temporary error.",
                        }),
                      "run" === u &&
                        (0, a.jsx)(h.A, {
                          id: "automations.editor.webhook.runNow",
                          defaultMessage: "Run now",
                          description:
                            "Button in the Scheduled editor that immediately starts the pending webhook-event batch.",
                        }),
                    ],
                  })),
            (b[29] = u),
            (b[30] = y),
            (b[31] = w),
            (b[32] = P),
            (b[33] = G),
            (b[34] = p))
          : (p = b[34]),
        b[35] !== r || b[36] !== f || b[37] !== p
          ? ((_ = (0, a.jsx)(X.t, {
              children: (0, a.jsx)(J.ic, { size: "compact", label: f, description: r, control: p }),
            })),
            (b[35] = r),
            (b[36] = f),
            (b[37] = p),
            (b[38] = _))
          : (_ = b[38]),
        _
      )
    }
    function es(e) {
      return e.flushed_event_count ?? 0
    }
    function ei() {
      return 0
    }
    function el(e) {
      let t,
        n,
        l,
        N,
        G,
        F,
        $,
        W,
        Z,
        J,
        X,
        ee,
        et,
        en,
        ea,
        es,
        ei,
        el,
        eu,
        ec,
        em,
        eh,
        ef,
        eg,
        ep,
        e_,
        eb,
        ex,
        ey,
        ev,
        ew,
        ej,
        ek,
        eT,
        eS,
        eA,
        eM,
        eC,
        eD,
        eE,
        eI,
        eN,
        eR,
        eP,
        eU,
        eL,
        eO,
        eq,
        eH,
        ez,
        eK,
        eG,
        eF,
        e$,
        eW,
        eV = (0, o.c)(259),
        { ref: eB, item: eY, relatedActions: eQ, waitForInitialData: eZ, onOpen: eJ, onClose: eX } = e,
        e1 = (0, d.gh)(E.u),
        e0 = (0, m.A)(),
        e2 = (0, f.Zp)(),
        e3 = (0, f.zy)(),
        e4 = (0, C.wv)(),
        e5 = (0, d.Ul)(x.e),
        e6 = (0, c.useId)(),
        e7 = (0, c.useId)(),
        e8 = (0, c.useId)(),
        e9 = (0, I.a)(),
        te = (0, c.useRef)(null),
        tt = (0, c.useRef)(!1),
        tn = (0, c.useRef)(null),
        ta = (0, c.useRef)(null),
        { automation: to } = eY
      eV[0] !== e5 || eV[1] !== eY.teamId || eV[2] !== e1
        ? ((t = (e) => {
            let t = e1.get(g.chatGptAuthenticatedAccountId$),
              n = eY.teamId ?? e.team_id,
              a = {
                ...(0, Y.qz)(e, e5 ? "configuration" : void 0),
                cloudTeam: null != t && null != n ? { accountId: t, teamId: n } : null,
              }
            return e5 ? (0, j.$6)(a) : a
          }),
          (eV[0] = e5),
          (eV[1] = eY.teamId),
          (eV[2] = e1),
          (eV[3] = t))
        : (t = eV[3])
      let ts = t
      eV[4] !== to || eV[5] !== ts ? ((n = () => ts(to)), (eV[4] = to), (eV[5] = ts), (eV[6] = n)) : (n = eV[6])
      let [ti] = (0, c.useState)(n),
        [tl, tr] = (0, c.useState)(!1),
        td = (0, d._U)(!(void 0 !== eZ && eZ) || !e5 || V, ti)
      eV[7] !== tl || eV[8] !== eJ
        ? ((l = () => {
            tl || (tr(!0), eJ?.())
          }),
          (eV[7] = tl),
          (eV[8] = eJ),
          (eV[9] = l))
        : (l = eV[9])
      let tu = l
      eV[10] !== to.id || eV[11] !== ti || eV[12] !== e3.search || eV[13] !== e1
        ? ((N = () => {
            let e = (0, w.R4)(e1, new URLSearchParams(e3.search), to.id)
            return e?.draft.cloudTeam?.teamId === ti.cloudTeam?.teamId ? (e?.draft ?? ti) : ti
          }),
          (eV[10] = to.id),
          (eV[11] = ti),
          (eV[12] = e3.search),
          (eV[13] = e1),
          (eV[14] = N))
        : (N = eV[14])
      let [tc, tm] = (0, c.useState)(N)
      eV[15] !== tc.scheduleConfig.oneTimeDate || eV[16] !== tc.scheduleConfig.time
        ? ((G = (e) => {
            tm(
              e.scheduleConfig.oneTimeDate !== tc.scheduleConfig.oneTimeDate ||
                e.scheduleConfig.time !== tc.scheduleConfig.time
                ? { ...e, scheduleConfig: { ...e.scheduleConfig, oneTimeSeconds: 0 } }
                : e,
            )
          }),
          (eV[15] = tc.scheduleConfig.oneTimeDate),
          (eV[16] = tc.scheduleConfig.time),
          (eV[17] = G))
        : (G = eV[17])
      let th = G,
        [tf, tg] = (0, c.useState)(!1),
        [tp, t_] = (0, c.useState)(null),
        [tb, tx] = (0, c.useState)(!1),
        [ty, tv] = (0, c.useState)(null),
        [tw, tj] = (0, c.useState)(!1),
        { isPending: tk } = (0, d.Ul)(q.x2),
        { isPending: tT } = (0, d.Ul)(q.lu),
        tS = tb || tw || tk || tT,
        tA = ty ?? to
      eV[18] !== tA ? ((F = (0, O.Xr)(tA)), (eV[18] = tA), (eV[19] = F)) : (F = eV[19])
      let tM = "completed" === F
      eV[20] !== tA || eV[21] !== tM
        ? (($ = (0, O.RQ)(tA).canManage && !tM), (eV[20] = tA), (eV[21] = tM), (eV[22] = $))
        : ($ = eV[22])
      let tC = $,
        tD = "condition_watch" === to.timing_mode
      eV[23] !== to ? ((W = (0, O.nT)(to)), (eV[23] = to), (eV[24] = W)) : (W = eV[24])
      let tE = W
      eV[25] !== ts || eV[26] !== ti || eV[27] !== ty
        ? ((Z = null == ty ? ti : ts(ty)), (eV[25] = ts), (eV[26] = ti), (eV[27] = ty), (eV[28] = Z))
        : (Z = eV[28])
      let tI = Z
      eV[29] !== tA || eV[30] !== tc
        ? ((J = (0, Y.tV)(tA, tc)), (eV[29] = tA), (eV[30] = tc), (eV[31] = J))
        : (J = eV[31])
      let tN = J
      eV[32] !== tc || eV[33] !== tI
        ? ((X =
            tc.name !== tI.name ||
            (0, p.Tj)(tc) !== (0, p.Tj)(tI) ||
            (tc.eventTrigger?.when ?? "") !== (tI.eventTrigger?.when ?? "")),
          (eV[32] = tc),
          (eV[33] = tI),
          (eV[34] = X))
        : (X = eV[34])
      let tR = X
      eV[35] !== tA || eV[36] !== tc || eV[37] !== e4
        ? ((ee = (0, Y.Rd)(tA, tc, e4)), (eV[35] = tA), (eV[36] = tc), (eV[37] = e4), (eV[38] = ee))
        : (ee = eV[38])
      let tP = ee
      eV[39] !== tC ||
      eV[40] !== tA ||
      eV[41] !== tP ||
      eV[42] !== tc ||
      eV[43] !== tN ||
      eV[44] !== e5 ||
      eV[45] !== eY.teamId
        ? ((et =
            tC &&
            tN &&
            (null != eY.teamId || null != tA.team_id || r()(tc.environments, tA.environments) || (0, p.y5)(tc)) &&
            tc.name.trim().length > 0 &&
            tc.prompt.trim().length > 0 &&
            (!e5 || (tc.name.length <= 250 && !(0, u.wPy)((0, p.Tj)(tc, tA.prompt)))) &&
            null == tP &&
            (!tc.scheduleDirty || (0, P.SK)(tc.scheduleConfig))),
          (eV[39] = tC),
          (eV[40] = tA),
          (eV[41] = tP),
          (eV[42] = tc),
          (eV[43] = tN),
          (eV[44] = e5),
          (eV[45] = eY.teamId),
          (eV[46] = et))
        : (et = eV[46])
      let tU = et
      eV[47] !== to.id || eV[48] !== e3.search || eV[49] !== e1
        ? ((en = () => {
            ;(0, w.iP)(e1, new URLSearchParams(e3.search), to.id)
          }),
          (eV[47] = to.id),
          (eV[48] = e3.search),
          (eV[49] = e1),
          (eV[50] = en))
        : (en = eV[50])
      let tL = en
      eV[51] !== to.id ||
      eV[52] !== tc ||
      eV[53] !== ti ||
      eV[54] !== e3.pathname ||
      eV[55] !== e3.search ||
      eV[56] !== e1
        ? ((ea = () => {
            let e = (0, w.uU)(
              e1,
              { draft: tc, initialDraft: ti, hasSelectedSchedule: !0 },
              `${(0, R.d0)()}?${new URLSearchParams({ automationId: to.id, automationSource: "cloud", edit_modal: "true" })}`,
            )
            return null != e ? ((tn.current = tc), e) : e3.pathname + e3.search
          }),
          (eV[51] = to.id),
          (eV[52] = tc),
          (eV[53] = ti),
          (eV[54] = e3.pathname),
          (eV[55] = e3.search),
          (eV[56] = e1),
          (eV[57] = ea))
        : (ea = eV[57])
      let tO = ea
      eV[58] !== tL || eV[59] !== eX
        ? ((es = () => {
            let e = ta.current
            ;((ta.current = null), (tt.current = !0), tL(), eX(), e?.(!0))
          }),
          (eV[58] = tL),
          (eV[59] = eX),
          (eV[60] = es))
        : (es = eV[60])
      let tq = es
      eV[61] !== tq || eV[62] !== tR || eV[63] !== tS
        ? ((ei = () => {
            tS || (tR ? tg(!0) : tq())
          }),
          (eV[61] = tq),
          (eV[62] = tR),
          (eV[63] = tS),
          (eV[64] = ei))
        : (ei = eV[64])
      let tH = ei
      ;(eV[65] !== tS || eV[66] !== tH
        ? ((el = () => ({
            requestClose: () =>
              tS || null != ta.current
                ? Promise.resolve(!1)
                : new Promise((e) => {
                    ;((ta.current = e), tH())
                  }),
          })),
          (eV[65] = tS),
          (eV[66] = tH),
          (eV[67] = el))
        : (el = eV[67]),
        (0, c.useImperativeHandle)(eB, el),
        eV[68] !== tU ||
        eV[69] !== tL ||
        eV[70] !== tA ||
        eV[71] !== tc ||
        eV[72] !== e0 ||
        eV[73] !== e9 ||
        eV[74] !== tS ||
        eV[75] !== eX ||
        eV[76] !== e1
          ? ((eu = () => {
              if (tS || null != te.current || !tU) return
              let e = e1.get(g.chatGptAuthenticatedAccountId$),
                t = new AbortController()
              ;((te.current = t), tx(!0))
              let n = () => !t.signal.aborted && e9() && e1.get(g.chatGptAuthenticatedAccountId$) === e
              ;(0, K.CN)(e1, { automation: tA, draft: tc, signal: t.signal })
                .then(() => {
                  n() && ((tt.current = !0), tL(), eX())
                })
                .catch((e) => {
                  n() &&
                    e1
                      .get(M.Id)
                      .danger(
                        e0.formatMessage({
                          id: "automations.scheduled.editor.saveError",
                          defaultMessage: "Couldn’t save task",
                          description:
                            "Error toast when a Scheduled task edit could not be saved; the editor stays open with the user's draft intact",
                        }),
                        {
                          errorAnalytics: { toastId: "automations.scheduled.editor.saveError" },
                          description: e instanceof Error ? e.message : void 0,
                        },
                      )
                })
                .finally(() => {
                  ;((te.current = null), e9() && tx(!1))
                })
            }),
            (eV[68] = tU),
            (eV[69] = tL),
            (eV[70] = tA),
            (eV[71] = tc),
            (eV[72] = e0),
            (eV[73] = e9),
            (eV[74] = tS),
            (eV[75] = eX),
            (eV[76] = e1),
            (eV[77] = eu))
          : (eu = eV[77]))
      let tz = eu
      ;(eV[78] === Symbol.for("react.memo_cache_sentinel")
        ? ((ec = () => () => {
            ;(te.current?.abort(), ta.current?.(!1))
          }),
          (em = []),
          (eV[78] = ec),
          (eV[79] = em))
        : ((ec = eV[78]), (em = eV[79])),
        (0, c.useEffect)(ec, em),
        eV[80] !== tc
          ? ((eh = (e) => {
              tn.current !== tc && e.preventDefault()
            }),
            (eV[80] = tc),
            (eV[81] = eh))
          : (eh = eV[81]))
      let tK = (0, c.useEffectEvent)(eh)
      ;(eV[82] !== tR || eV[83] !== tK
        ? ((ef = () => {
            if (tR)
              return (window.addEventListener("beforeunload", tK), () => window.removeEventListener("beforeunload", tK))
          }),
          (eV[82] = tR),
          (eV[83] = tK),
          (eV[84] = ef))
        : (ef = eV[84]),
        eV[85] !== tR ? ((eg = [tR]), (eV[85] = tR), (eV[86] = eg)) : (eg = eV[86]),
        (0, c.useEffect)(ef, eg))
      let tG = tD ? "text-sm leading-5 font-medium uppercase" : "text-base leading-7 font-normal",
        tF = tD || (tA.is_enabled && !tM) ? "text-info" : "text-tertiary"
      ;(eV[87] !== tG || eV[88] !== tF
        ? ((ep = (0, i.A)("select-none", tG, tF)), (eV[87] = tG), (eV[88] = tF), (eV[89] = ep))
        : (ep = eV[89]),
        eV[90] !== tA || eV[91] !== tD || eV[92] !== eY.teamId
          ? ((e_ = tD
              ? (0, a.jsx)(h.A, {
                  id: "automations.scheduled.editor.monitoring",
                  defaultMessage: "Monitoring",
                  description: "Task type in the Scheduled editor for a task watching for changes",
                })
              : (0, a.jsx)(z.p, { automation: tA, teamId: eY.teamId })),
            (eV[90] = tA),
            (eV[91] = tD),
            (eV[92] = eY.teamId),
            (eV[93] = e_))
          : (e_ = eV[93]),
        eV[94] !== ep || eV[95] !== e_
          ? ((eb = (0, a.jsx)("p", { className: ep, children: e_ })), (eV[94] = ep), (eV[95] = e_), (eV[96] = eb))
          : (eb = eV[96]),
        eV[97] !== e0
          ? ((ex = e0.formatMessage({
              id: "automations.editor.title",
              defaultMessage: "Title",
              description: "Accessible label for the editable title in the Scheduled task editor",
            })),
            (eV[97] = e0),
            (eV[98] = ex))
          : (ex = eV[98]))
      let t$ = !tC
      ;(eV[99] === Symbol.for("react.memo_cache_sentinel")
        ? ((ey = (e) => tm((t) => ({ ...t, name: e.target.value }))), (eV[99] = ey))
        : (ey = eV[99]),
        eV[100] !== tc.name || eV[101] !== tS || eV[102] !== ex || eV[103] !== t$ || eV[104] !== e6
          ? ((ev = (0, a.jsx)("textarea", {
              id: e6,
              className:
                "m-0 block field-sizing-content w-full min-w-0 resize-none overflow-hidden rounded-lg border-0 bg-transparent p-0 text-lg leading-7 font-medium wrap-anywhere text-default outline-none",
              name: "title",
              "aria-label": ex,
              rows: 1,
              readOnly: t$,
              disabled: tS,
              value: tc.name,
              onChange: ey,
              onKeyDown: er,
            })),
            (eV[100] = tc.name),
            (eV[101] = tS),
            (eV[102] = ex),
            (eV[103] = t$),
            (eV[104] = e6),
            (eV[105] = ev))
          : (ev = eV[105]),
        eV[106] !== eb || eV[107] !== ev
          ? ((ew = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [eb, ev] })),
            (eV[106] = eb),
            (eV[107] = ev),
            (eV[108] = ew))
          : (ew = eV[108]))
      let tW = ew
      eV[109] !== tC || eV[110] !== tA || eV[111] !== e5 || eV[112] !== tS || eV[113] !== eY
        ? ((ej = tC
            ? (0, a.jsx)(L.s, {
                item: { ...eY, automation: tA },
                statusMutation: q.x2,
                onStatusChanged: tv,
                renderActions: (e) => {
                  let { isPaused: t, isStatusPending: n, pauseAction: o, resumeAction: s } = e
                  return (0, a.jsx)(B.Q, {
                    isPaused: t,
                    isPending: n ?? !1,
                    disabled: tS || !0 === (t ? s : o).disabled,
                    disabledReason: t ? s.disabledReason : void 0,
                    onClick: (t ? s : o).onSelect,
                    size: e5 ? "dialogAction" : "medium",
                  })
                },
              })
            : null),
          (eV[109] = tC),
          (eV[110] = tA),
          (eV[111] = e5),
          (eV[112] = tS),
          (eV[113] = eY),
          (eV[114] = ej))
        : (ej = eV[114])
      let tV = ej,
        tB = !tU || tS
      ;(eV[115] === Symbol.for("react.memo_cache_sentinel")
        ? ((ek = (0, a.jsx)(h.A, {
            id: "automations.scheduled.editor.save",
            defaultMessage: "Save",
            description: "Button that saves edited Scheduled task instructions and schedule",
          })),
          (eV[115] = ek))
        : (ek = eV[115]),
        eV[116] !== e8 || eV[117] !== tb || eV[118] !== tB
          ? ((eT = (0, a.jsx)(T.$, { disabled: tB, loading: tb, form: e8, type: "submit", children: ek })),
            (eV[116] = e8),
            (eV[117] = tb),
            (eV[118] = tB),
            (eV[119] = eT))
          : (eT = eV[119]),
        eV[120] !== tV || eV[121] !== eT
          ? ((eS = (0, a.jsxs)(A.Es, { expandSingleButton: !1, children: [tV, eT] })),
            (eV[120] = tV),
            (eV[121] = eT),
            (eV[122] = eS))
          : (eS = eV[122]))
      let tY = eS
      ;(eV[123] !== tz
        ? ((eA = (e) => (0, D.k)(e, () => tz())),
          (eM = (e) => {
            ;(e.preventDefault(), tz())
          }),
          (eV[123] = tz),
          (eV[124] = eA),
          (eV[125] = eM))
        : ((eA = eV[124]), (eM = eV[125])),
        eV[126] === Symbol.for("react.memo_cache_sentinel")
          ? ((eC = (0, a.jsx)(S.L3, {
              className: "sr-only",
              children: (0, a.jsx)(h.A, {
                id: "automations.scheduled.editor.title",
                defaultMessage: "Edit task",
                description: "Accessible title of the Scheduled task editor dialog",
              }),
            })),
            (eV[126] = eC))
          : (eC = eV[126]),
        eV[127] !== tW
          ? ((eD = (0, a.jsxs)(A.OO, { children: [eC, tW] })), (eV[127] = tW), (eV[128] = eD))
          : (eD = eV[128]),
        eV[129] !== tu
          ? ((eE = (e) => {
              null != e && tu()
            }),
            (eV[129] = tu),
            (eV[130] = eE))
          : (eE = eV[130]))
      let tQ = !tC || tS
      eV[131] !== tA || eV[132] !== tE || eV[133] !== e2
        ? ((eI = tE
            ? (0, a.jsx)(H.C, {
                triggers: tA.webhook_triggers,
                isAutomationEnabled: tA.is_enabled,
                showUnavailableConditions: !1,
                onOpenTrigger: (e) => {
                  e2(`/settings/connectors?${new URLSearchParams({ connector: e.connector_id })}`)
                },
              })
            : null),
          (eV[131] = tA),
          (eV[132] = tE),
          (eV[133] = e2),
          (eV[134] = eI))
        : (eI = eV[134])
      let tZ = `${e7}-label`
      ;(eV[135] === Symbol.for("react.memo_cache_sentinel")
        ? ((eN = (0, a.jsx)(h.A, {
            id: "automations.editor.promptSectionLabel",
            defaultMessage: "Prompt",
            description: "Label above the editable instructions in the Scheduled task editor",
          })),
          (eV[135] = eN))
        : (eN = eV[135]),
        eV[136] !== e7 || eV[137] !== tZ
          ? ((eR = (0, a.jsx)("label", { id: tZ, className: "uppercase select-none", htmlFor: e7, children: eN })),
            (eV[136] = e7),
            (eV[137] = tZ),
            (eV[138] = eR))
          : (eR = eV[138]))
      let tJ = `${e7}-label`,
        tX = `${e7}-label`,
        t1 = !tC
      ;(eV[139] === Symbol.for("react.memo_cache_sentinel")
        ? ((eP = (e) => tm((t) => ({ ...t, prompt: e.target.value }))), (eV[139] = eP))
        : (eP = eV[139]),
        eV[140] !== tc.prompt || eV[141] !== e7 || eV[142] !== tX || eV[143] !== t1
          ? ((eU = (0, a.jsx)("textarea", {
              id: e7,
              className:
                "m-0 block field-sizing-content max-h-56 min-h-28 w-full min-w-0 resize-none overflow-y-auto border-0 bg-transparent p-0 text-base leading-7 font-normal wrap-anywhere text-default outline-none",
              "aria-labelledby": tX,
              name: "prompt",
              readOnly: t1,
              rows: 1,
              value: tc.prompt,
              onChange: eP,
            })),
            (eV[140] = tc.prompt),
            (eV[141] = e7),
            (eV[142] = tX),
            (eV[143] = t1),
            (eV[144] = eU))
          : (eU = eV[144]),
        eV[145] !== tJ || eV[146] !== eU
          ? ((eL = (0, a.jsx)("label", {
              className: "block cursor-text rounded-[20px] border border-default p-6 focus-within:border-ring",
              "aria-labelledby": tJ,
              children: eU,
            })),
            (eV[145] = tJ),
            (eV[146] = eU),
            (eV[147] = eL))
          : (eL = eV[147]),
        eV[148] !== eR || eV[149] !== eL
          ? ((eO = (0, a.jsx)(U.C, { title: eR, children: eL })), (eV[148] = eR), (eV[149] = eL), (eV[150] = eO))
          : (eO = eV[150]),
        eV[151] !== to.conversation_id ||
        eV[152] !== to.source_conversation_is_work_mode ||
        eV[153] !== tC ||
        eV[154] !== tA ||
        eV[155] !== tN ||
        eV[156] !== tS ||
        eV[157] !== tw ||
        eV[158] !== tE ||
        eV[159] !== e2 ||
        eV[160] !== eX
          ? ((eq =
              tE && !0 === to.source_conversation_is_work_mode
                ? (0, a.jsx)(eo, {
                    automation: tA,
                    disabled: !tC || tS,
                    hasChanges: tN,
                    isRunning: tw,
                    onRunningChange: tj,
                    onStarted: () => {
                      ;((tt.current = !0), eX(), null != to.conversation_id && e2((0, k.mv)(to.conversation_id)))
                    },
                  })
                : null),
            (eV[151] = to.conversation_id),
            (eV[152] = to.source_conversation_is_work_mode),
            (eV[153] = tC),
            (eV[154] = tA),
            (eV[155] = tN),
            (eV[156] = tS),
            (eV[157] = tw),
            (eV[158] = tE),
            (eV[159] = e2),
            (eV[160] = eX),
            (eV[161] = eq))
          : (eq = eV[161]),
        eV[162] !== tA || eV[163] !== tc || eV[164] !== tE
          ? ((eH = tE ? null : (0, a.jsx)(Q.V, { automation: tA, draft: tc, onChange: tm })),
            (eV[162] = tA),
            (eV[163] = tc),
            (eV[164] = tE),
            (eV[165] = eH))
          : (eH = eV[165]),
        eV[166] !== tP
          ? ((ez =
              null == tP
                ? null
                : (0, a.jsxs)("p", {
                    className: "text-sm text-danger select-none",
                    role: "alert",
                    children: [
                      "too-far" === tP &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.dateTooFar",
                          defaultMessage: "Choose a date within the next two years",
                          description:
                            "Validation error in the Scheduled task editor when a one-time task is scheduled two years or more in the future",
                        }),
                      "end-past" === tP &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.endDateInPast",
                          defaultMessage: "Choose an end date today or later",
                          description:
                            "Validation error in the Scheduled task editor when a recurrence end date is in the past",
                        }),
                      "past" === tP &&
                        (0, a.jsx)(h.A, {
                          id: "automations.scheduled.editor.dateInPast",
                          defaultMessage: "Choose a date and time in the future",
                          description:
                            "Validation error in the Scheduled task editor when a one-time task is scheduled in the past",
                        }),
                    ],
                  })),
            (eV[166] = tP),
            (eV[167] = ez))
          : (ez = eV[167]),
        eV[168] !== eE ||
        eV[169] !== tQ ||
        eV[170] !== eI ||
        eV[171] !== eO ||
        eV[172] !== eq ||
        eV[173] !== eH ||
        eV[174] !== ez
          ? ((eK = (0, a.jsxs)("fieldset", {
              ref: eE,
              className: "flex min-w-0 flex-col gap-6",
              disabled: tQ,
              children: [eI, eO, eq, eH, ez],
            })),
            (eV[168] = eE),
            (eV[169] = tQ),
            (eV[170] = eI),
            (eV[171] = eO),
            (eV[172] = eq),
            (eV[173] = eH),
            (eV[174] = ez),
            (eV[175] = eK))
          : (eK = eV[175]),
        eV[176] !== tY ? ((eG = (0, a.jsx)(A.OO, { children: tY })), (eV[176] = tY), (eV[177] = eG)) : (eG = eV[177]),
        eV[178] !== e8 ||
        eV[179] !== eQ ||
        eV[180] !== eA ||
        eV[181] !== eM ||
        eV[182] !== eD ||
        eV[183] !== eK ||
        eV[184] !== eG
          ? ((eF = (0, a.jsxs)(A.R4, {
              as: "form",
              id: e8,
              size: "viewport",
              onKeyDown: eA,
              onSubmit: eM,
              children: [eD, eQ, eK, eG],
            })),
            (eV[178] = e8),
            (eV[179] = eQ),
            (eV[180] = eA),
            (eV[181] = eM),
            (eV[182] = eD),
            (eV[183] = eK),
            (eV[184] = eG),
            (eV[185] = eF))
          : (eF = eV[185]))
      let t0 = eF
      if (e5) {
        let e, t, n, o, s, i, l
        if (tE) {
          let t
          ;(eV[186] !== tA.is_enabled || eV[187] !== tA.webhook_triggers
            ? ((t = (0, a.jsx)(H.C, {
                variant: "form",
                triggers: tA.webhook_triggers,
                isAutomationEnabled: tA.is_enabled,
                showUnavailableConditions: !1,
              })),
              (eV[186] = tA.is_enabled),
              (eV[187] = tA.webhook_triggers),
              (eV[188] = t))
            : (t = eV[188]),
            (e = t))
        } else if (tD) {
          let t
          ;(eV[189] !== tA || eV[190] !== tc
            ? ((t = (0, a.jsx)(Q.V, { form: !0, automation: tA, draft: tc, onChange: tm })),
              (eV[189] = tA),
              (eV[190] = tc),
              (eV[191] = t))
            : (t = eV[191]),
            (e = t))
        } else {
          let t,
            n,
            o,
            s = null == tc.cloudTeam && null == eY.teamId
          ;(eV[192] !== to || eV[193] !== ts || eV[194] !== th || eV[195] !== tc.scheduleConfig.oneTimeDate
            ? ((t = (e) => {
                if (
                  null != tc.scheduleConfig.oneTimeDate &&
                  null == e.scheduleConfig.oneTimeDate &&
                  null == e.webhookTriggers
                ) {
                  let { untilDate: t, untilTime: n } = ts(to).scheduleConfig
                  th({ ...e, scheduleConfig: { ...e.scheduleConfig, untilDate: t, untilTime: n } })
                  return
                }
                th(e)
              }),
              (eV[192] = to),
              (eV[193] = ts),
              (eV[194] = th),
              (eV[195] = tc.scheduleConfig.oneTimeDate),
              (eV[196] = t))
            : (t = eV[196]),
            eV[197] !== th || eV[198] !== tc
              ? ((n = (e) => {
                  th({
                    ...tc,
                    rawRrule: null,
                    scheduleDirty: !0,
                    scheduleConfig: { ...tc.scheduleConfig, untilDate: e, untilTime: null == e ? void 0 : "23:59:59" },
                  })
                }),
                (eV[197] = th),
                (eV[198] = tc),
                (eV[199] = n))
              : (n = eV[199]),
            eV[200] !== tc || eV[201] !== s || eV[202] !== t || eV[203] !== n
              ? ((o = (0, a.jsx)(y.q, {
                  personal: s,
                  draft: tc,
                  onChange: t,
                  onChangeEndDate: n,
                  executionLocation: "cloud",
                })),
                (eV[200] = tc),
                (eV[201] = s),
                (eV[202] = t),
                (eV[203] = n),
                (eV[204] = o))
              : (o = eV[204]),
            (e = o))
        }
        eV[205] !== tC || eV[206] !== ti || eV[207] !== tD || eV[208] !== tE
          ? ((t = tC
              ? {
                  executionLocation: "cloud",
                  hasSelectedSchedule: !0,
                  initialDraft: ti,
                  triggerMode: tE || tD ? "read-only" : "time",
                }
              : void 0),
            (eV[205] = tC),
            (eV[206] = ti),
            (eV[207] = tD),
            (eV[208] = tE),
            (eV[209] = t))
          : (t = eV[209])
        let r = tb || tw || tT,
          d = !tC
        eV[210] !== tz
          ? ((n = (e) => {
              ;(e.preventDefault(), tz())
            }),
            (eV[210] = tz),
            (eV[211] = n))
          : (n = eV[211])
        let u = null == tA.aeon_id && "local" !== tA.executor
        ;(eV[212] !== tc || eV[213] !== eY.teamId || eV[214] !== u
          ? ((o = (0, a.jsx)(_.u, {
              draft: tc,
              setDraft: tm,
              executionLocation: "cloud",
              teamId: eY.teamId,
              supportsRemoteExecutors: u,
            })),
            (eV[212] = tc),
            (eV[213] = eY.teamId),
            (eV[214] = u),
            (eV[215] = o))
          : (o = eV[215]),
          eV[216] !== tc || eV[217] !== eY.teamId
            ? ((s =
                null == tc.cloudTeam && null == eY.teamId
                  ? null
                  : (0, a.jsx)(v.j, { draft: tc, onChange: tm, teamId: eY.teamId })),
              (eV[216] = tc),
              (eV[217] = eY.teamId),
              (eV[218] = s))
            : (s = eV[218]),
          eV[219] !== tc || eV[220] !== tO || eV[221] !== eY.teamId
            ? ((i = (0, a.jsx)(v.n, { draft: tc, teamId: eY.teamId, getOAuthReturnTo: tO })),
              (eV[219] = tc),
              (eV[220] = tO),
              (eV[221] = eY.teamId),
              (eV[222] = i))
            : (i = eV[222]),
          eV[223] !== tU ||
          eV[224] !== th ||
          eV[225] !== tP ||
          eV[226] !== tc ||
          eV[227] !== tO ||
          eV[228] !== tu ||
          eV[229] !== tk ||
          eV[230] !== tH ||
          eV[231] !== e ||
          eV[232] !== tV ||
          eV[233] !== t ||
          eV[234] !== r ||
          eV[235] !== d ||
          eV[236] !== n ||
          eV[237] !== o ||
          eV[238] !== s ||
          eV[239] !== i
            ? ((l = (0, a.jsx)(b.L, {
                onOpen: tu,
                executionLocation: "cloud",
                setup: t,
                getOAuthReturnTo: tO,
                draft: tc,
                onChange: th,
                onClose: tH,
                canSave: tU,
                isSaving: r,
                isChangingStatus: tk,
                disabled: d,
                statusAction: tV,
                onSubmit: n,
                dateError: tP,
                schedule: e,
                advanced: o,
                owner: s,
                plugins: i,
              })),
              (eV[223] = tU),
              (eV[224] = th),
              (eV[225] = tP),
              (eV[226] = tc),
              (eV[227] = tO),
              (eV[228] = tu),
              (eV[229] = tk),
              (eV[230] = tH),
              (eV[231] = e),
              (eV[232] = tV),
              (eV[233] = t),
              (eV[234] = r),
              (eV[235] = d),
              (eV[236] = n),
              (eV[237] = o),
              (eV[238] = s),
              (eV[239] = i),
              (eV[240] = l))
            : (l = eV[240]),
          (e$ = l))
      } else {
        let e, t, n, o
        eV[241] !== tH
          ? ((e = (e) => {
              e || tH()
            }),
            (eV[241] = tH),
            (eV[242] = e))
          : (e = eV[242])
        let i = tp ?? void 0
        ;(eV[243] !== t0 || eV[244] !== i
          ? ((t = (0, a.jsx)(s.z, { radixPortalContainer: i, children: t0 })),
            (eV[243] = t0),
            (eV[244] = i),
            (eV[245] = t))
          : (t = eV[245]),
          eV[246] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("div", { ref: t_ })), (eV[246] = n))
            : (n = eV[246]),
          eV[247] !== e || eV[248] !== t
            ? ((o = (0, a.jsxs)(S.lG, {
                contentOverflow: "visible",
                open: !0,
                size: "xwide",
                variant: "chatgpt",
                onOpenChange: e,
                children: [t, n],
              })),
              (eV[247] = e),
              (eV[248] = t),
              (eV[249] = o))
            : (o = eV[249]),
          (e$ = o))
      }
      return (
        eV[250] !== tL ||
        eV[251] !== e$ ||
        eV[252] !== tq ||
        eV[253] !== tl ||
        eV[254] !== tR ||
        eV[255] !== td ||
        eV[256] !== tS ||
        eV[257] !== tf
          ? ((eW =
              tl || td
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      e$,
                      (0, a.jsx)(ed, {
                        isPending: tS,
                        shouldBlock: () => (tR || tS) && !tt.current,
                        onDiscardNavigation: tL,
                        dismissal: tf
                          ? {
                              onCancel: () => {
                                ;(tg(!1), ta.current?.(!1), (ta.current = null))
                              },
                              onDiscard: tq,
                            }
                          : null,
                      }),
                    ],
                  })
                : null),
            (eV[250] = tL),
            (eV[251] = e$),
            (eV[252] = tq),
            (eV[253] = tl),
            (eV[254] = tR),
            (eV[255] = td),
            (eV[256] = tS),
            (eV[257] = tf),
            (eV[258] = eW))
          : (eW = eV[258]),
        eW
      )
    }
    function er(e) {
      "Enter" !== e.key ||
        e.shiftKey ||
        e.nativeEvent.isComposing ||
        (e.preventDefault(), e.currentTarget.form?.requestSubmit())
    }
    function ed(e) {
      let t,
        n = (0, o.c)(3),
        s = (0, c.useContext)(f.hf)
      return (
        n[0] !== s || n[1] !== e
          ? ((t = null == s ? (0, a.jsx)(ec, { ...e }) : (0, a.jsx)(eu, { ...e })), (n[0] = s), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function eu(e) {
      let t,
        n = (0, o.c)(3),
        s = (0, N.e)(e.shouldBlock)
      return (
        n[0] !== s || n[1] !== e
          ? ((t = (0, a.jsx)(ec, { ...e, blocker: s })), (n[0] = s), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function ec(e) {
      let t,
        n,
        s,
        i,
        l,
        r,
        d,
        u,
        c,
        m,
        f,
        g,
        p,
        _,
        b = (0, o.c)(30),
        { blocker: x, dismissal: y, isPending: v, onDiscardNavigation: w } = e,
        j = x?.state === "blocked" ? x : null
      if (j?.isCommitting || (null == j && null == y)) return null
      let k = null == j ? (y?.isPending ?? v) : v
      b[0] !== y || b[1] !== j
        ? ((t = () => {
            ;(y?.onCancel(), j?.reset())
          }),
          (b[0] = y),
          (b[1] = j),
          (b[2] = t))
        : (t = b[2])
      let M = t
      b[3] !== y || b[4] !== j || b[5] !== w
        ? ((n = () => {
            null == j ? y?.onDiscard() : (y?.onCancel(), w?.(), j.proceed())
          }),
          (b[3] = y),
          (b[4] = j),
          (b[5] = w),
          (b[6] = n))
        : (n = b[6])
      let C = n
      return (
        b[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { shouldStopPointerDownPropagation: !1 }), (b[7] = s))
          : (s = b[7]),
        b[8] !== M
          ? ((i = (e) => {
              e || M()
            }),
            (b[8] = M),
            (b[9] = i))
          : (i = b[9]),
        b[10] !== C || b[11] !== k
          ? ((l = (e) => {
              ;(e.preventDefault(), k || C())
            }),
            (b[10] = C),
            (b[11] = k),
            (b[12] = l))
          : (l = b[12]),
        b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(S.L3, {
              className: "text-form-title",
              children: (0, a.jsx)(h.A, {
                id: "automations.editor.discardChangesTitle",
                defaultMessage: "Discard changes?",
                description: "Confirmation title when closing the Scheduled task editor with unsaved changes",
              }),
            })),
            (b[13] = r))
          : (r = b[13]),
        b[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(A.OO, {
              children: (0, a.jsx)(A.c7, {
                subtitleSize: "sm",
                subtitleTone: "secondary",
                title: r,
                subtitle: (0, a.jsx)(S.rr, {
                  className: "text-form-body font-normal",
                  children: (0, a.jsx)(h.A, {
                    id: "automations.scheduled.editor.discardDescription",
                    defaultMessage: "Your changes will not be saved",
                    description: "Warning in the discard confirmation for the Scheduled task editor",
                  }),
                }),
              }),
            })),
            (b[14] = d))
          : (d = b[14]),
        b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(h.A, {
              id: "automations.editor.keepEditing",
              defaultMessage: "Keep editing",
              description: "Button that returns to the Scheduled task editor without discarding the draft",
            })),
            (b[15] = u))
          : (u = b[15]),
        b[16] !== M
          ? ((c = (0, a.jsx)(T.$, {
              color: "secondary",
              focusRing: "surface",
              size: "dialogAction",
              type: "button",
              onClick: M,
              children: u,
            })),
            (b[16] = M),
            (b[17] = c))
          : (c = b[17]),
        b[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(h.A, {
              id: "automations.editor.discardChanges",
              defaultMessage: "Discard changes",
              description: "Button that closes the Scheduled task editor and discards unsaved changes",
            })),
            (b[18] = m))
          : (m = b[18]),
        b[19] !== k
          ? ((f = (0, a.jsx)(T.$, { color: "danger", disabled: k, size: "dialogAction", type: "submit", children: m })),
            (b[19] = k),
            (b[20] = f))
          : (f = b[20]),
        b[21] !== f || b[22] !== c
          ? ((g = (0, a.jsx)(A.OO, { children: (0, a.jsxs)(A.Es, { children: [c, f] }) })),
            (b[21] = f),
            (b[22] = c),
            (b[23] = g))
          : (g = b[23]),
        b[24] !== g || b[25] !== l
          ? ((p = (0, a.jsxs)(A.R4, { as: "form", onSubmit: l, children: [d, g] })),
            (b[24] = g),
            (b[25] = l),
            (b[26] = p))
          : (p = b[26]),
        b[27] !== p || b[28] !== i
          ? ((_ = (0, a.jsx)(S.lG, {
              open: !0,
              showDialogClose: !1,
              size: "narrow",
              variant: "form",
              contentProps: s,
              onOpenChange: i,
              children: p,
            })),
            (b[27] = p),
            (b[28] = i),
            (b[29] = _))
          : (_ = b[29]),
        _
      )
    }
  },
  qjUD(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("slpy"),
      i = n("oyxz"),
      l = n("Sm6l")
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            n,
            r,
            d = (0, o.c)(13),
            { isPaused: u, isPending: c, disabled: m, disabledReason: h, onClick: f, size: g } = e,
            p = void 0 === g ? "dialogAction" : g,
            _ = c || void 0,
            b = m || void 0,
            x = m && null == h,
            y = m ? void 0 : f
          return (
            d[0] !== u
              ? ((t = u
                  ? (0, a.jsx)(i.A, {
                      id: "inbox.automations.resumeTooltip",
                      defaultMessage: "Resume",
                      description: "Tooltip label for resuming an automation",
                    })
                  : (0, a.jsx)(i.A, {
                      id: "inbox.automations.pauseTooltip",
                      defaultMessage: "Pause",
                      description: "Tooltip label for pausing an automation",
                    })),
                (d[0] = u),
                (d[1] = t))
              : (t = d[1]),
            d[2] !== c || d[3] !== p || d[4] !== _ || d[5] !== b || d[6] !== x || d[7] !== y || d[8] !== t
              ? ((n = (0, a.jsx)(l.$, {
                  "aria-busy": _,
                  "aria-disabled": b,
                  color: "secondary",
                  radius: "full",
                  size: p,
                  type: "button",
                  disabled: x,
                  loading: c,
                  onClick: y,
                  children: t,
                })),
                (d[2] = c),
                (d[3] = p),
                (d[4] = _),
                (d[5] = b),
                (d[6] = x),
                (d[7] = y),
                (d[8] = t),
                (d[9] = n))
              : (n = d[9]),
            d[10] !== h || d[11] !== n
              ? ((r = (0, a.jsx)(s.m, { content: h, children: n })), (d[10] = h), (d[11] = n), (d[12] = r))
              : (r = d[12]),
            r
          )
        },
      },
    )
  },
  R2L4(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("slpy"),
      i = n("fxCc"),
      l = n("i5ac"),
      r = n.n(l),
      d = n("zTeN"),
      u = n("oyxz"),
      c = n("hOO0"),
      m = n("FpcZ"),
      h = n("SPnB"),
      f = n("fcqj"),
      g = n("FvYa"),
      p = n("Sm6l"),
      _ = n("bVeK"),
      b = n("RNul"),
      x = n("AWNZ"),
      y = n("ZEx5"),
      v = n("rCoD"),
      w = n("k7o2"),
      j = n("sujc"),
      k = n("nvO1")
    function T(e) {
      let t,
        n,
        s = (0, o.c)(13),
        { team: i, getOAuthReturnTo: l } = e,
        { data: r, error: c, refetch: m } = (0, d._U)(k.Bn, i)
      s[0] !== r ? ((t = null == r ? null : (0, k.id)(r)), (s[0] = r), (s[1] = t)) : (t = s[1])
      let h = t
      if (null != h) {
        let e
        return (
          s[2] !== l || s[3] !== h || s[4] !== i
            ? ((e = (0, a.jsx)(S, { getOAuthReturnTo: l, ...i, serviceAccountId: h }, h)),
              (s[2] = l),
              (s[3] = h),
              (s[4] = i),
              (s[5] = e))
            : (e = s[5]),
          e
        )
      }
      s[6] !== r ? ((n = null == r ? (0, a.jsx)(b.y, {}) : (0, a.jsx)(U, {})), (s[6] = r), (s[7] = n)) : (n = s[7])
      let f = n
      if (null != c) {
        let e, t, n
        ;(s[8] !== m ? ((e = () => void m()), (s[8] = m), (s[9] = e)) : (e = s[9]),
          s[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "automations.configuration.retryPlugins",
                defaultMessage: "Couldn’t load plugins. Retry",
                description: "Retries loading team plugins after a request fails",
              })),
              (s[10] = t))
            : (t = s[10]),
          s[11] !== e
            ? ((n = (0, a.jsx)(p.$, { color: "ghost", size: "toolbar", onClick: e, children: t })),
              (s[11] = e),
              (s[12] = n))
            : (n = s[12]),
          (f = n))
      }
      return f
    }
    function S(e) {
      let t,
        n,
        s,
        l,
        h,
        x,
        y,
        v,
        T,
        S = (0, o.c)(22)
      S[0] !== e ? (({ getOAuthReturnTo: t, ...n } = e), (S[0] = e), (S[1] = t), (S[2] = n)) : ((t = S[1]), (n = S[2]))
      let N = (0, d._U)(k.rN, n.accountId),
        { data: R, error: P, isLoading: L, refetch: O } = (0, d._U)(j.T, n),
        { error: q, isPending: H, refetch: z } = (0, d._U)(w.WD, n)
      S[3] !== n ? ((s = { ...n, view: "installed", query: "" }), (S[3] = n), (S[4] = s)) : (s = S[4])
      let { data: K, error: G, isLoading: F, refetch: $, hasNextPage: W } = (0, d._U)(w.Ys, s),
        V = r()(R?.links.filter(E), D),
        { data: B } = (0, i.E)(
          (0, m.getHostedAppsContentQueriesOptions)({ accountId: n.accountId, appIds: V.map(C), enabled: N }),
        )
      S[5] !== B ? ((l = new Map(B?.map(M))), (S[5] = B), (S[6] = l)) : (l = S[6])
      let Y = l
      S[7] !== Y
        ? ((h = (e) => ({
            id: e.link_id,
            name: (0, a.jsx)(u.A, {
              id: "automations.configuration.workspacePluginName",
              defaultMessage: "{connectionName} · Workspace",
              description: "Name of a plugin connection provided by the workspace, followed by its source",
              values: { connectionName: e.name },
            }),
            logo: (0, a.jsx)(g.R, {
              alt: e.connector_name,
              connectorId: e.connector_id,
              knownAppId: e.connector_name,
              logoUrl: Y.get((0, c.$)(e.connector_id))?.light,
              logoDarkUrl: Y.get((0, c.$)(e.connector_id))?.dark,
              size: 20,
              fallback: (0, a.jsx)(_.wdY, {}),
            }),
          })),
          (S[7] = Y),
          (S[8] = h))
        : (h = S[8])
      let Q = [
        ...V.map(h),
        ...(K ?? [])
          .filter(
            (e) => !V.some((t) => null != e.connector_id && (0, c.$)(t.connector_id) === (0, c.$)(e.connector_id)),
          )
          .map(A),
      ]
      S[9] !== H || S[10] !== F || S[11] !== L
        ? ((x = H || F || L ? (0, a.jsx)(b.y, {}) : null), (S[9] = H), (S[10] = F), (S[11] = L), (S[12] = x))
        : (x = S[12])
      let Z =
        null != q || null != G || null != P
          ? (0, a.jsx)(p.$, {
              color: "ghost",
              size: "toolbar",
              onClick: () => {
                ;(O(), z(), $())
              },
              children: (0, a.jsx)(u.A, {
                id: "automations.configuration.retryPlugins",
                defaultMessage: "Couldn’t load plugins. Retry",
                description: "Retries loading team plugins after a request fails",
              }),
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(I, { plugins: Q, hasNextPage: W }),
                null == K || L || 0 !== Q.length ? null : (0, a.jsx)(U, {}),
              ],
            })
      return (
        S[13] !== x || S[14] !== Z
          ? ((y = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [x, Z] })),
            (S[13] = x),
            (S[14] = Z),
            (S[15] = y))
          : (y = S[15]),
        S[16] !== t || S[17] !== n
          ? ((v = (0, a.jsx)(f.f, { ...n, getOAuthReturnTo: t })), (S[16] = t), (S[17] = n), (S[18] = v))
          : (v = S[18]),
        S[19] !== y || S[20] !== v
          ? ((T = (0, a.jsxs)(a.Fragment, { children: [y, v] })), (S[19] = y), (S[20] = v), (S[21] = T))
          : (T = S[21]),
        T
      )
    }
    function A(e) {
      return {
        id: e.id,
        name: e.release.display_name,
        logo: (0, a.jsx)(g.R, {
          alt: e.release.display_name,
          size: 20,
          logoUrl: e.release.interface.logo_url,
          logoDarkUrl: e.release.interface.logo_url_dark,
          fallback: (0, a.jsx)(_.wdY, {}),
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
        i,
        l = (0, o.c)(8),
        { plugins: r, hasNextPage: d } = e,
        c = void 0 !== d && d
      return (
        l[0] !== r ? ((t = r.slice(0, 4).map(R)), (l[0] = r), (l[1] = t)) : (t = l[1]),
        l[2] !== c || l[3] !== r
          ? ((n =
              r.length > 4
                ? (0, a.jsx)(s.m, {
                    interactive: !0,
                    align: "end",
                    side: "bottom",
                    sideOffset: 5,
                    maxWidth: 320,
                    contentClassName: "max-h-64 min-w-48 overflow-y-auto text-start",
                    content: r.slice(4).map(N),
                    children: (0, a.jsx)(s.m.TriggerDecorator, {
                      unstyled: !0,
                      className: "shrink-0",
                      children: (0, a.jsx)("span", {
                        children: (0, a.jsx)(u.A, {
                          id: "automations.routine.morePlugins",
                          defaultMessage: "+{count}{more}",
                          description:
                            "Number of additional plugins available to the team; a trailing plus means another page is available",
                          values: { count: r.length - 4, more: c ? "+" : "" },
                        }),
                      }),
                    }),
                  })
                : null),
            (l[2] = c),
            (l[3] = r),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== t || l[6] !== n
          ? ((i = (0, a.jsxs)(a.Fragment, { children: [t, n] })), (l[5] = t), (l[6] = n), (l[7] = i))
          : (i = l[7]),
        i
      )
    }
    function N(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex items-center gap-2 px-2 py-1.5 text-sm text-default",
          children: [
            (0, a.jsx)("span", { className: "inline-flex shrink-0", children: e.logo }),
            (0, a.jsx)("span", { className: "min-w-0", children: e.name }),
          ],
        },
        e.id,
      )
    }
    function R(e) {
      return (0, a.jsx)(
        s.m,
        {
          content: e.name,
          children: (0, a.jsx)(s.m.TriggerDecorator, {
            unstyled: !0,
            children: (0, a.jsx)("span", { className: "inline-flex shrink-0", children: e.logo }),
          }),
        },
        e.id,
      )
    }
    function P(e) {
      let t,
        n,
        s = (0, o.c)(3),
        { children: i } = e
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(u.A, {
              id: "automations.routine.availablePlugins",
              defaultMessage: "Plugins",
              description: "Label for plugins available to the selected team routine",
            })),
            (s[0] = t))
          : (t = s[0]),
        s[1] !== i
          ? ((n = (0, a.jsx)(x.ic, {
              variant: "nested",
              label: t,
              control: (0, a.jsx)("div", { className: "flex min-w-0 items-center justify-end gap-2", children: i }),
            })),
            (s[1] = i),
            (s[2] = n))
          : (n = s[2]),
        n
      )
    }
    function U() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "automations.routine.noPlugins",
                defaultMessage: "None connected",
                description: "Shown when no plugins are available for a team routine",
              }),
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
            s,
            i = (0, o.c)(16),
            { draft: l, onChange: r, teamId: c } = e,
            m = (0, d.Ul)(h.chatGptAuthenticatedAccountId$),
            f = (0, d._U)(k.lc, m)
          i[0] !== m || i[1] !== l.cloudTeam || i[2] !== c
            ? ((t = l.cloudTeam ?? (null != m && null != c ? { accountId: m, teamId: c } : null)),
              (i[0] = m),
              (i[1] = l.cloudTeam),
              (i[2] = c),
              (i[3] = t))
            : (t = i[3])
          let g = t
          if (null == l.id && (f || null != l.cloudTeam)) {
            let e,
              t,
              o = l.cloudTeam?.teamId ?? "personal"
            ;(i[4] !== l || i[5] !== r
              ? ((e = (e) => r({ ...l, cloudTeam: e, webhookTriggers: void 0 })), (i[4] = l), (i[5] = r), (i[6] = e))
              : (e = i[6]),
              i[7] !== l.cloudTeam || i[8] !== o || i[9] !== e
                ? ((t = (0, a.jsx)(v.v, { variant: "form", selection: l.cloudTeam, onSelect: e }, o)),
                  (i[7] = l.cloudTeam),
                  (i[8] = o),
                  (i[9] = e),
                  (i[10] = t))
                : (t = i[10]),
              (n = t))
          } else if (null != g) {
            let e
            ;(i[11] !== g.teamId
              ? ((e = (0, a.jsx)(v.W, { teamId: g.teamId, variant: "form" })), (i[11] = g.teamId), (i[12] = e))
              : (e = i[12]),
              (n = e))
          } else {
            let e
            ;(i[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(x.ic, {
                  label: (0, a.jsx)(u.A, {
                    id: "automations.configuration.runsAs",
                    defaultMessage: "Run as",
                    description: "Label identifying whose account runs this scheduled task",
                  }),
                  control: (0, a.jsx)(u.A, {
                    id: "settings.teams.automation.me",
                    defaultMessage: "Me",
                    description: "Selected value for a cloud scheduled task that runs as the current user",
                  }),
                  variant: "nested",
                })),
                (i[13] = e))
              : (e = i[13]),
              (n = e))
          }
          return (
            i[14] !== n
              ? ((s = (0, a.jsx)(y.t, { variant: "outlined", children: n })), (i[14] = n), (i[15] = s))
              : (s = i[15]),
            s
          )
        },
        n: function (e) {
          let t,
            n,
            s = (0, o.c)(7),
            { draft: i, getOAuthReturnTo: l, teamId: r } = e,
            u = (0, d.Ul)(h.chatGptAuthenticatedAccountId$)
          s[0] !== u || s[1] !== i.cloudTeam || s[2] !== r
            ? ((t = i.cloudTeam ?? (null != u && null != r ? { accountId: u, teamId: r } : null)),
              (s[0] = u),
              (s[1] = i.cloudTeam),
              (s[2] = r),
              (s[3] = t))
            : (t = s[3])
          let c = t
          return (
            s[4] !== l || s[5] !== c
              ? ((n =
                  null == c
                    ? null
                    : (0, a.jsx)(y.t, {
                        variant: "outlined",
                        children: (0, a.jsx)(P, { children: (0, a.jsx)(T, { team: c, getOAuthReturnTo: l }) }),
                      })),
                (s[4] = l),
                (s[5] = c),
                (s[6] = n))
              : (n = s[6]),
            n
          )
        },
      },
    )
  },
  o791(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      s = n("iH4j"),
      i = n("u6fG"),
      l = n("zTeN"),
      r = n("zd8w"),
      d = n("Wf1j"),
      u = n("oyxz"),
      c = n("YJm0"),
      m = n("OAko"),
      h = n("bqtn"),
      f = n("HOLv"),
      g = n("bVeK"),
      p = n("X6Vn"),
      _ = n("f38C"),
      b = n("RNul"),
      x = n("OWtl"),
      y = n("OMIV"),
      v = n("ED7I"),
      w = n("fGpH"),
      j = n("Ro2M"),
      k = n("u0nx"),
      T = n("FLVF"),
      S = n("TzXS")
    function A(e) {
      let t,
        s,
        i,
        r,
        d = (0, o.c)(17),
        { item: f, source: _, disabled: b } = e,
        v = (0, l.gh)(x.u),
        { data: j } = (0, m.YL)(),
        k = (0, l._U)(y.JW, "1431301099"),
        A = null == f.teamId && k && j?.structure === "workspace"
      d[0] !== A ? ((t = { enabled: A }), (d[0] = A), (d[1] = t)) : (t = d[1])
      let { data: M } = (0, l._U)(c.t, j?.id ?? null, t)
      d[2] !== f.automation || d[3] !== _
        ? ((s = "editor" === _ ? (0, w.Xr)(f.automation) : (0, S.jv)(f.automation)),
          (d[2] = f.automation),
          (d[3] = _),
          (d[4] = s))
        : (s = d[4])
      let C = s
      d[5] !== j || d[6] !== M?.features || d[7] !== f.teamId || d[8] !== k || d[9] !== C
        ? ((i =
            null == f.teamId &&
            k &&
            "completed" !== C &&
            null != j &&
            "quorum" !== j.plan_type &&
            ("workspace" !== j.structure || M?.features?.includes("workspace_share_links"))),
          (d[5] = j),
          (d[6] = M?.features),
          (d[7] = f.teamId),
          (d[8] = k),
          (d[9] = C),
          (d[10] = i))
        : (i = d[10])
      let D = i
      return (
        d[11] !== D || d[12] !== b || d[13] !== f || d[14] !== v || d[15] !== _
          ? ((r = D
              ? (0, a.jsx)(h.ms.Item, {
                  disabled: b,
                  leftIcon: (0, a.jsx)(g._Ui, {}),
                  onSelect: () => {
                    !(async function (e, t, a) {
                      let { ScheduledTaskShareDialog: o } = await n.e(655368).then(n.bind(n, "JoAv"))
                      ;((0, T.I)(e, "task_share_button_clicked", t.automation.id, a),
                        (0, p.qf)(e, o, { automation: t.automation }))
                    })(v, f, _)
                  },
                  children: (0, a.jsx)(u.A, {
                    id: "automations.tasks.row.action.share",
                    defaultMessage: "Share",
                    description: "Opens a dialog for sharing a copy of this task's instructions and schedule",
                  }),
                })
              : null),
            (d[11] = D),
            (d[12] = b),
            (d[13] = f),
            (d[14] = v),
            (d[15] = _),
            (d[16] = r))
          : (r = d[16]),
        r
      )
    }
    n.d(
      t,
      {},
      {
        Y: A,
        i: function (e) {
          let t,
            n,
            c,
            m,
            p,
            x,
            y,
            T = (0, o.c)(39),
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
              rowRef: L,
              additionalMenuItems: O,
              shareMenuItem: q,
              statusFirst: H,
              menuProps: z,
              menuTriggerSize: K,
              onMenuOpenChange: G,
            } = e,
            F = void 0 === U ? "scheduled_page" : U,
            $ = void 0 !== H && H,
            { isPending: W } = (0, l._U)(k.F, M.automation.id),
            V = P || W,
            [B, Y] = (0, r.useState)(!1)
          T[0] !== G
            ? ((t = () => {
                ;(Y(!1), G?.(!1))
              }),
              (T[0] = G),
              (T[1] = t))
            : (t = T[1])
          let Q = t,
            Z = (0, l.Ul)(j.x2),
            J = Z.isPending && Z.variables?.automationId === M.automation.id,
            X = (0, r.useRef)(null)
          ;(T[2] !== B || T[3] !== J || T[4] !== L
            ? ((n = () => {
                let e
                if (!B || J || null == L) return
                let t = () => {
                    ;(clearTimeout(e), (e = void 0))
                  },
                  n = (n) => {
                    n.target instanceof Node &&
                      (L.current?.contains(n.target) || X.current?.contains(n.target)
                        ? t()
                        : null == e && (e = setTimeout(() => Y(!1), 150)))
                  }
                return (
                  document.addEventListener("pointermove", n, { passive: !0 }),
                  () => {
                    ;(document.removeEventListener("pointermove", n), t())
                  }
                )
              }),
              (c = [B, J, L]),
              (T[2] = B),
              (T[3] = J),
              (T[4] = L),
              (T[5] = n),
              (T[6] = c))
            : ((n = T[5]), (c = T[6])),
            (0, r.useEffect)(n, c))
          let ee = (0, d.A)()
          T[7] !== M.automation || T[8] !== F
            ? ((m = "editor" === F ? (0, w.Xr)(M.automation) : (0, S.jv)(M.automation)),
              (T[7] = M.automation),
              (T[8] = F),
              (T[9] = m))
            : (m = T[9])
          let et = m
          T[10] !== M.automation ? ((p = (0, w.nT)(M.automation)), (T[10] = M.automation), (T[11] = p)) : (p = T[11])
          let en = p
          return (
            T[12] !== O ||
            T[13] !== Q ||
            T[14] !== ee ||
            T[15] !== B ||
            T[16] !== V ||
            T[17] !== J ||
            T[18] !== en ||
            T[19] !== M ||
            T[20] !== z ||
            T[21] !== K ||
            T[22] !== G ||
            T[23] !== I ||
            T[24] !== N ||
            T[25] !== R ||
            T[26] !== q ||
            T[27] !== F ||
            T[28] !== et ||
            T[29] !== $
              ? ((x = (e) => {
                  let { deleteAction: t, pauseAction: n, resumeAction: o } = e,
                    l =
                      "completed" !== et
                        ? (0, a.jsx)(h.ms.Item, {
                            "aria-busy": J || void 0,
                            disabled: "paused" === et ? o.disabled : n.disabled,
                            focusableWhenDisabled: J || ("paused" === et && null != o.disabledReason),
                            tooltipText: "paused" === et ? o.disabledReason : void 0,
                            rightIcon: J ? (0, a.jsx)(b.y, { className: "icon-xs" }) : void 0,
                            leftIcon:
                              "paused" === et ? (0, a.jsx)(f.I, { asset: i.j }) : (0, a.jsx)(f.I, { asset: s.D }),
                            onSelect: (e) => {
                              ;(e.preventDefault(), ("paused" === et ? o : n).onSelect())
                            },
                            children:
                              "paused" === et
                                ? (0, a.jsx)(u.A, {
                                    id: "inbox.automations.resumeTooltip",
                                    defaultMessage: "Resume",
                                    description: "Tooltip label for resuming an automation",
                                  })
                                : (0, a.jsx)(u.A, {
                                    id: "inbox.automations.pauseTooltip",
                                    defaultMessage: "Pause",
                                    description: "Tooltip label for pausing an automation",
                                  }),
                          })
                        : null
                  return (0, a.jsxs)(h.Ab, {
                    ...z,
                    contentRef: X,
                    open: B,
                    onOpenChange: (e) => {
                      ;(Y(e), G?.(e))
                    },
                    align: "end",
                    contentWidth: z?.contentWidth ?? "xs",
                    triggerButton: (0, a.jsx)(_.p, {
                      size: K,
                      label: ee.formatMessage({
                        id: "automations.tasks.row.moreActions",
                        defaultMessage: "More task actions",
                        description: "Accessible label for the menu of actions on a scheduled task",
                      }),
                    }),
                    children: [
                      $ ? l : null,
                      (null != I || null != N) && "completed" !== et
                        ? (0, a.jsx)(h.ms.Item, {
                            disabled: V || J || en,
                            "aria-busy": V || void 0,
                            focusableWhenDisabled: V || en,
                            tooltipText: en
                              ? (0, a.jsx)("div", {
                                  className: "max-w-48 text-balance",
                                  children: (0, a.jsx)(u.A, {
                                    id: "automations.actions.runNow.triggerBasedTooltip",
                                    defaultMessage: "Automations triggered by events can’t be run manually",
                                    description:
                                      "Tooltip on the disabled Run now menu action for automations that run only when an external event triggers them",
                                  }),
                                })
                              : void 0,
                            leftIcon: R ?? (0, a.jsx)(g.Tv9, {}),
                            rightIcon: V ? (0, a.jsx)(b.y, { className: "icon-xs" }) : void 0,
                            onSelect: (e) => {
                              null != N ? (e.preventDefault(), N().then(Q, Q)) : I?.()
                            },
                            children: (0, a.jsx)(u.A, {
                              id: "automations.actions.runNow",
                              defaultMessage: "Run now",
                              description: "Menu action on the Scheduled page that runs the selected task immediately",
                            }),
                          })
                        : null,
                      O,
                      q ?? (0, a.jsx)(A, { item: M, source: F, disabled: !1 }),
                      $ ? null : l,
                      null != t
                        ? (0, a.jsx)(h.ms.Group, {
                            children: (0, a.jsx)(h.ms.Item, {
                              tone: "danger",
                              disabled: t.disabled,
                              leftIcon: (0, a.jsx)(g.zwW, {}),
                              onSelect: t.onSelect,
                              children: (0, a.jsx)(u.A, {
                                id: "settings.automations.delete",
                                defaultMessage: "Delete",
                                description: "Menu item for deleting a scheduled task",
                              }),
                            }),
                          })
                        : null,
                    ],
                  })
                }),
                (T[12] = O),
                (T[13] = Q),
                (T[14] = ee),
                (T[15] = B),
                (T[16] = V),
                (T[17] = J),
                (T[18] = en),
                (T[19] = M),
                (T[20] = z),
                (T[21] = K),
                (T[22] = G),
                (T[23] = I),
                (T[24] = N),
                (T[25] = R),
                (T[26] = q),
                (T[27] = F),
                (T[28] = et),
                (T[29] = $),
                (T[30] = x))
              : (x = T[30]),
            T[31] !== Q || T[32] !== M || T[33] !== C || T[34] !== D || T[35] !== E || T[36] !== et || T[37] !== x
              ? ((y = (0, a.jsx)(v.s, {
                  item: M,
                  onDeleted: C,
                  onPaused: D,
                  onResumed: E,
                  onStatusChanged: Q,
                  status: et,
                  statusMutation: j.x2,
                  renderActions: x,
                })),
                (T[31] = Q),
                (T[32] = M),
                (T[33] = C),
                (T[34] = D),
                (T[35] = E),
                (T[36] = et),
                (T[37] = x),
                (T[38] = y))
              : (y = T[38]),
            y
          )
        },
      },
    )
  },
  rL0w(e, t, n) {
    var a = n("SPnB"),
      o = n("fyx9"),
      s = n("SV27")
    let i = (0, n("Nwp9").m3)("scheduled-task-oauth-draft-v1", null)
    function l(e, t, n = null) {
      let o = e.get(i)
      return o?.draft.id === n &&
        (null == n
          ? "create" === t.get("automationMode")
          : "create" !== t.get("automationMode") && t.get("automationId") === n) &&
        t.get("automationDraftId") === o.id &&
        o.accountId === e.get(a.chatGptAuthenticatedAccountId$) &&
        o.userId === e.get(a.chatGptAuthenticatedUserId$) &&
        o.expiresAt > Date.now()
        ? { ...o, draft: (0, s.$6)(o.draft), initialDraft: (0, s.$6)(o.initialDraft) }
        : null
    }
    n.d(
      t,
      {},
      {
        R4: l,
        iP: function (e, t, n = null) {
          null != l(e, t, n) && e.set(i, null)
        },
        uU: function (e, t, n) {
          let s = e.get(a.chatGptAuthenticatedAccountId$),
            l = e.get(a.chatGptAuthenticatedUserId$)
          if (null == s || null == l) return null
          let r = crypto.randomUUID()
          e.set(i, {
            ...t,
            draft: { ...t.draft, eventTrigger: t.draft.eventTrigger ?? { selected: !1, when: "" } },
            initialDraft: {
              ...t.initialDraft,
              eventTrigger: t.initialDraft.eventTrigger ?? { selected: !1, when: "" },
            },
            id: r,
            accountId: s,
            userId: l,
            expiresAt: Date.now() + 36e5,
          })
          let d = new URL(n, "https://chatgpt.com")
          return (
            null == t.draft.id &&
              "create" !== d.searchParams.get("automationMode") &&
              ((d.pathname = (0, o.d0)()), (d.search = "automationMode=create")),
            d.searchParams.set("automationDraftId", r),
            d.pathname + d.search
          )
        },
      },
    )
  },
  xA2X(e, t, n) {
    n.d(t, { V: () => D })
    var a = n("ABep"),
      o = n("QosV"),
      s = n("zTeN"),
      i = n("Wf1j"),
      l = n("oyxz"),
      r = n("Qgfj"),
      d = n("ASxG"),
      u = n("AWNZ"),
      c = n("ZEx5"),
      m = n("OMIV"),
      h = n("oVAd"),
      f = n("odKs"),
      g = n("cOBD"),
      p = n("BCU4"),
      _ = n("gM9O"),
      b = n("dUCV"),
      x = n("sn2N"),
      y = n("fGpH"),
      v = n("zd8w"),
      w = n("Sm6l"),
      j = n("bVeK"),
      k = n("nzx4")
    function T(e) {
      let t,
        n,
        s,
        r,
        d,
        u,
        c,
        m,
        h,
        f,
        g,
        p,
        _,
        b,
        x,
        y,
        T,
        M,
        C,
        D = (0, o.c)(89),
        { value: E, onChange: I } = e,
        N = (0, i.A)(),
        [R, P] = (0, v.useState)(!1),
        [U, L] = (0, v.useState)(A)
      D[0] !== U ? ((t = U.getFullYear()), (D[0] = U), (D[1] = t)) : (t = D[1])
      let O = U.getMonth() + 1
      if (D[2] !== N || D[3] !== U || D[4] !== I || D[5] !== R || D[6] !== t || D[7] !== O || D[8] !== E) {
        let e,
          o,
          i,
          y,
          v,
          T,
          A,
          M,
          C,
          q,
          H,
          z,
          K,
          G,
          F,
          $ = new Date(t, O, 0).getDate()
        ;((s = k.AM),
          (u = R),
          D[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (e) => {
                if (e) {
                  let e = new Date()
                  L(new Date(e.getFullYear(), e.getMonth(), 1))
                }
                P(e)
              }),
              (D[23] = c))
            : (c = D[23]),
          D[24] !== N
            ? ((e = N.formatMessage({
                id: "automations.editor.schedule.monthlyDate",
                defaultMessage: "Monthly date",
                description: "Label for the monthly day-of-month calendar control",
              })),
              (D[24] = N),
              (D[25] = e))
            : (e = D[25]),
          D[26] !== E
            ? ((o = (0, a.jsx)("span", {
                className: "truncate",
                children: (0, a.jsx)(l.A, {
                  id: "automations.editor.schedule.everyMonthOnDay",
                  defaultMessage: "Every month on the {day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
                  description: "Summary text for a monthly schedule day selection",
                  values: { day: E },
                }),
              })),
              (D[26] = E),
              (D[27] = o))
            : (o = D[27]),
          D[28] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, a.jsx)(j.Aq_, {})), (D[28] = i)) : (i = D[28]),
          D[29] !== e || D[30] !== o
            ? ((m = (0, a.jsx)(k.Wv, {
                asChild: !0,
                children: (0, a.jsxs)(w.$, { color: "ghost", size: "composerPill", "aria-label": e, children: [o, i] }),
              })),
              (D[29] = e),
              (D[30] = o),
              (D[31] = m))
            : (m = D[31]),
          (n = k.hl),
          (x = "end"),
          (r = "content"),
          (d = "menu"),
          (_ = "flex flex-col gap-3 text-sm select-none"),
          D[32] !== N || D[33] !== U
            ? ((y = N.formatDate(U, { month: "long", year: "numeric" })), (D[32] = N), (D[33] = U), (D[34] = y))
            : (y = D[34]),
          D[35] !== y
            ? ((v = (0, a.jsx)("span", { className: "font-medium", children: y })), (D[35] = y), (D[36] = v))
            : (v = D[36]),
          D[37] !== N
            ? ((T = N.formatMessage({
                id: "automations.editor.schedule.previousMonth",
                defaultMessage: "Previous month",
                description: "Accessible label for moving the monthly calendar backward",
              })),
              (D[37] = N),
              (D[38] = T))
            : (T = D[38]),
          D[39] !== U
            ? ((A = () => L(new Date(U.getFullYear(), U.getMonth() - 1, 1))), (D[39] = U), (D[40] = A))
            : (A = D[40]),
          D[41] === Symbol.for("react.memo_cache_sentinel") ? ((M = (0, a.jsx)(j.z_d, {})), (D[41] = M)) : (M = D[41]),
          D[42] !== T || D[43] !== A
            ? ((C = (0, a.jsx)(w.$, {
                color: "ghost",
                radius: "full",
                size: "iconCircle",
                "aria-label": T,
                onClick: A,
                children: M,
              })),
              (D[42] = T),
              (D[43] = A),
              (D[44] = C))
            : (C = D[44]),
          D[45] !== N
            ? ((q = N.formatMessage({
                id: "automations.editor.schedule.nextMonth",
                defaultMessage: "Next month",
                description: "Accessible label for moving the monthly calendar forward",
              })),
              (D[45] = N),
              (D[46] = q))
            : (q = D[46]),
          D[47] !== U
            ? ((H = () => L(new Date(U.getFullYear(), U.getMonth() + 1, 1))), (D[47] = U), (D[48] = H))
            : (H = D[48]),
          D[49] === Symbol.for("react.memo_cache_sentinel") ? ((z = (0, a.jsx)(j.uM3, {})), (D[49] = z)) : (z = D[49]),
          D[50] !== q || D[51] !== H
            ? ((K = (0, a.jsx)(w.$, {
                color: "ghost",
                radius: "full",
                size: "iconCircle",
                "aria-label": q,
                onClick: H,
                children: z,
              })),
              (D[50] = q),
              (D[51] = H),
              (D[52] = K))
            : (K = D[52]),
          D[53] !== C || D[54] !== K
            ? ((G = (0, a.jsxs)("div", { className: "flex gap-1", children: [C, K] })),
              (D[53] = C),
              (D[54] = K),
              (D[55] = G))
            : (G = D[55]),
          D[56] !== v || D[57] !== G
            ? ((b = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [v, G] })),
              (D[56] = v),
              (D[57] = G),
              (D[58] = b))
            : (b = D[58]),
          (h = "grid grid-cols-7 gap-1"),
          D[59] !== N
            ? ((f = Array.from({ length: 7 }, (e, t) =>
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
              (D[60] = f))
            : (f = D[60]),
          D[61] !== U ? ((g = Array.from({ length: U.getDay() }, S)), (D[61] = U), (D[62] = g)) : (g = D[62]),
          D[63] !== N || D[64] !== U || D[65] !== I || D[66] !== E
            ? ((F = (e, t) => {
                let n = t + 1
                return (0, a.jsx)(
                  w.$,
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
              (D[67] = F))
            : (F = D[67]),
          (p = Array.from({ length: $ }, F)),
          (D[2] = N),
          (D[3] = U),
          (D[4] = I),
          (D[5] = R),
          (D[6] = t),
          (D[7] = O),
          (D[8] = E),
          (D[9] = n),
          (D[10] = s),
          (D[11] = r),
          (D[12] = d),
          (D[13] = u),
          (D[14] = c),
          (D[15] = m),
          (D[16] = h),
          (D[17] = f),
          (D[18] = g),
          (D[19] = p),
          (D[20] = _),
          (D[21] = b),
          (D[22] = x))
      } else
        ((n = D[9]),
          (s = D[10]),
          (r = D[11]),
          (d = D[12]),
          (u = D[13]),
          (c = D[14]),
          (m = D[15]),
          (h = D[16]),
          (f = D[17]),
          (g = D[18]),
          (p = D[19]),
          (_ = D[20]),
          (b = D[21]),
          (x = D[22]))
      return (
        D[68] !== h || D[69] !== f || D[70] !== g || D[71] !== p
          ? ((y = (0, a.jsxs)("div", { className: h, children: [f, g, p] })),
            (D[68] = h),
            (D[69] = f),
            (D[70] = g),
            (D[71] = p),
            (D[72] = y))
          : (y = D[72]),
        D[73] !== y || D[74] !== _ || D[75] !== b
          ? ((T = (0, a.jsxs)("div", { className: _, children: [b, y] })),
            (D[73] = y),
            (D[74] = _),
            (D[75] = b),
            (D[76] = T))
          : (T = D[76]),
        D[77] !== n || D[78] !== r || D[79] !== d || D[80] !== T || D[81] !== x
          ? ((M = (0, a.jsx)(n, { align: x, size: r, variant: d, children: T })),
            (D[77] = n),
            (D[78] = r),
            (D[79] = d),
            (D[80] = T),
            (D[81] = x),
            (D[82] = M))
          : (M = D[82]),
        D[83] !== s || D[84] !== u || D[85] !== c || D[86] !== m || D[87] !== M
          ? ((C = (0, a.jsxs)(s, { open: u, onOpenChange: c, children: [m, M] })),
            (D[83] = s),
            (D[84] = u),
            (D[85] = c),
            (D[86] = m),
            (D[87] = M),
            (D[88] = C))
          : (C = D[88]),
        C
      )
    }
    function S(e, t) {
      return (0, a.jsx)("span", {}, `blank-${t}`)
    }
    function A() {
      return new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    }
    var M = n("ZlGh")
    let C = d.object({ allowed_frequencies: d.array(d.unknown()).optional() })
    function D(e) {
      let t,
        n,
        r,
        d,
        v,
        w,
        j,
        k,
        S,
        A,
        D,
        P,
        U,
        L,
        O,
        q,
        H,
        z,
        K,
        G,
        F,
        $,
        W,
        V,
        B,
        Y,
        Q = (0, o.c)(126),
        {
          afterScheduleRows: Z,
          automation: J,
          draft: X,
          onChange: ee,
          sharedPreview: et,
          weekdayLabelFormat: en,
          form: ea,
        } = e,
        eo = void 0 !== et && et,
        es = void 0 !== ea && ea,
        ei = (0, i.A)(),
        el = (0, s.Ul)(m.M9)
      if (
        Q[0] !== J ||
        Q[1] !== el ||
        Q[2] !== X ||
        Q[3] !== es ||
        Q[4] !== ei ||
        Q[5] !== ee ||
        Q[6] !== eo ||
        Q[7] !== en
      ) {
        k = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            o,
            s,
            i,
            m,
            x,
            G,
            F,
            $,
            W,
            V = C.safeParse(el?.getDynamicConfig("208167308").get("automation_capabilities", null)),
            B = V.success ? V.data.allowed_frequencies?.filter(I) : void 0
          ;((n = X.scheduleConfig),
            (d = "condition_watch" === J.timing_mode),
            Q[27] !== n.time ? ((e = n.time.split(":")), (Q[27] = n.time), (Q[28] = e)) : (e = Q[28]))
          let Y = Number(e[0])
          ;(Q[29] !== Y ? ((o = (0, f.C_)(Y)), (Q[29] = Y), (Q[30] = o)) : (o = Q[30]),
            (q = o),
            (r =
              "daily" === n.mode ||
              "weekdays" === n.mode ||
              "weekly" === n.mode ||
              "monthly" === n.mode ||
              (null != n.oneTimeDate && "flexible_schedule" === J.timing_mode)))
          let Z =
              "custom" === (0, M.qz)(J).scheduleConfig.mode &&
              !["daily", "weekly", "monthly"].includes(J.schedule_components.frequency),
            et = "custom" === n.mode ? (0, f.RD)(n.customRrule) : null,
            ea = "custom" === n.mode && !Z && null != et
          ;(Q[31] !== X || Q[32] !== ee
            ? ((s = (e) => ee({ ...X, scheduleConfig: e, scheduleDirty: !0, rawRrule: null })),
              (Q[31] = X),
              (Q[32] = ee),
              (Q[33] = s))
            : (s = Q[33]),
            (K = s),
            Q[34] !== n || Q[35] !== K
              ? ((i = (e) =>
                  K({ ...n, time: e.time, weekdays: e.weekdays, monthDay: e.monthDays[0], customRrule: (0, f.vQ)(e) })),
                (Q[34] = n),
                (Q[35] = K),
                (Q[36] = i))
              : (i = Q[36]))
          let er = i
          Q[37] !== J || Q[38] !== n || Q[39] !== K
            ? ((m = (e) => {
                e !== n.mode && K((0, M.iB)(J, n, e))
              }),
              (Q[37] = J),
              (Q[38] = n),
              (Q[39] = K),
              (Q[40] = m))
            : (m = Q[40])
          let ed = m
          Q[41] !== n.mode ? ((x = (e) => e.id === n.mode), (Q[41] = n.mode), (Q[42] = x)) : (x = Q[42])
          let eu = g.TJ.find(x),
            ec = g.TJ.filter((e) => null == B || B.includes("weekdays" === e.id ? "weekly" : e.id))
          if (
            (Q[43] === Symbol.for("react.memo_cache_sentinel")
              ? ((G = new Intl.DateTimeFormat("sv-SE", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hourCycle: "h23",
                }).format(new Date())),
                (Q[43] = G))
              : (G = Q[43]),
            (z = G),
            Q[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = ["morning", "afternoon", "evening", "night"]), (Q[44] = F))
              : (F = Q[44]),
            Q[45] !== n.oneTimeDate
              ? (($ = F.filter((e) => null == n.oneTimeDate || `${n.oneTimeDate} ${M.nT[e]}` >= z)),
                (Q[45] = n.oneTimeDate),
                (Q[46] = $))
              : ($ = Q[46]),
            Q[47] !== ei || Q[48] !== $
              ? ((W = $.map((e) => ({ id: e, label: ei.formatMessage(R[e]) }))), (Q[47] = ei), (Q[48] = $), (Q[49] = W))
              : (W = Q[49]),
            (H = W),
            es && d)
          ) {
            let e, t
            ;(Q[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(l.A, { ...R.repeat })), (Q[50] = e))
              : (e = Q[50]),
              Q[51] !== J
                ? ((t = (0, a.jsx)(c.t, {
                    variant: "input",
                    children: (0, a.jsx)(u.ic, {
                      variant: "nested",
                      label: e,
                      control: (0, a.jsx)("span", {
                        className: "text-tertiary",
                        children: (0, a.jsx)(N, { automation: J }),
                      }),
                    }),
                  })),
                  (Q[51] = J),
                  (Q[52] = t))
                : (t = Q[52]),
              (k = t))
            break e
          }
          ;((j = "flex flex-col gap-5"),
            (t = c.t),
            (S = eo ? "outlined" : "default"),
            Q[53] !== J || Q[54] !== d
              ? ((A = d
                  ? (0, a.jsx)(u.ic, {
                      label: (0, a.jsx)(l.A, { ...R.repeat }),
                      control: (0, a.jsx)(N, { automation: J }),
                    })
                  : null),
                (Q[53] = J),
                (Q[54] = d),
                (Q[55] = A))
              : (A = Q[55]),
            Q[56] !== J || Q[57] !== ei || Q[58] !== d || Q[59] !== eo
              ? ((D = d && eo ? (0, a.jsx)(u.ic, { label: (0, y.AT)({ automation: J }, ei), control: null }) : null),
                (Q[56] = J),
                (Q[57] = ei),
                (Q[58] = d),
                (Q[59] = eo),
                (Q[60] = D))
              : (D = Q[60]),
            (P =
              d || null != n.oneTimeDate || null == eu
                ? null
                : (0, a.jsx)(u.ic, {
                    label: (0, a.jsx)(l.A, { ...R.repeat }),
                    control: (0, a.jsx)(_.H, {
                      ariaLabel: ei.formatMessage(R.repeat),
                      options: ec.map((e) => ({ id: e.id, label: ei.formatMessage(e.labelMessage) })),
                      selectedId: n.mode,
                      selectedLabel: ei.formatMessage(eu.labelMessage),
                      onSelect: ed,
                    }),
                  })),
            Q[61] !== n || Q[62] !== ei || Q[63] !== d || Q[64] !== K
              ? ((U =
                  d || null == n.oneTimeDate
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(l.A, { ...R.date }),
                        control: (0, a.jsx)(h.h, {
                          ariaLabel: ei.formatMessage(R.date),
                          value: n.oneTimeDate,
                          onChange: (e) => K({ ...n, oneTimeDate: e }),
                        }),
                      })),
                (Q[61] = n),
                (Q[62] = ei),
                (Q[63] = d),
                (Q[64] = K),
                (Q[65] = U))
              : (U = Q[65]),
            Q[66] !== n || Q[67] !== ei || Q[68] !== d || Q[69] !== K
              ? ((L =
                  d || null != n.oneTimeDate || "hourly" !== n.mode
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(l.A, { ...R.every }),
                        control: (0, a.jsx)(_.H, {
                          ariaLabel: ei.formatMessage(R.every),
                          options: Array.from({ length: 23 }, (e, t) => ({
                            id: String(t + 1),
                            label: ei.formatMessage(R.hours, { hours: t + 1 }),
                          })),
                          selectedId: String(n.intervalHours),
                          selectedLabel: ei.formatMessage(R.hours, { hours: n.intervalHours }),
                          onSelect: (e) => K({ ...n, intervalHours: Number(e), intervalMinutes: null }),
                        }),
                      })),
                (Q[66] = n),
                (Q[67] = ei),
                (Q[68] = d),
                (Q[69] = K),
                (Q[70] = L))
              : (L = Q[70]),
            Q[71] !== n || Q[72] !== d || Q[73] !== K || Q[74] !== en
              ? ((O =
                  d || "weekly" !== n.mode || null != n.oneTimeDate
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(l.A, { ...R.daysOfWeek }),
                        control: (0, a.jsx)(b.l, {
                          value: n.weekdays,
                          onChange: (e) => K({ ...n, weekdays: e }),
                          weekdayLabelFormat: en,
                        }),
                      })),
                (Q[71] = n),
                (Q[72] = d),
                (Q[73] = K),
                (Q[74] = en),
                (Q[75] = O))
              : (O = Q[75]),
            Q[76] !== n || Q[77] !== d || Q[78] !== K
              ? ((v =
                  d || "monthly" !== n.mode || null != n.oneTimeDate
                    ? null
                    : (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(l.A, { ...R.monthlyDate }),
                        control: (0, a.jsx)(T, { value: n.monthDay ?? 1, onChange: (e) => K({ ...n, monthDay: e }) }),
                      })),
                (Q[76] = n),
                (Q[77] = d),
                (Q[78] = K),
                (Q[79] = v))
              : (v = Q[79]),
            (w =
              !d && ea && null != et
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(l.A, { ...R.frequency }),
                        control: (0, a.jsx)(_.H, {
                          ariaLabel: ei.formatMessage(R.frequency),
                          options: g.TJ.filter(E).map((e) => ({ id: e.id, label: ei.formatMessage(e.labelMessage) })),
                          selectedId: et.frequency,
                          selectedLabel: ei.formatMessage(R.customFrequency, { frequency: et.frequency }),
                          onSelect: (e) => {
                            ;("daily" === e || "weekly" === e || "monthly" === e) &&
                              er({ ...et, frequency: e, interval: 1 })
                          },
                        }),
                      }),
                      "weekly" === et.frequency
                        ? (0, a.jsx)(u.ic, {
                            label: (0, a.jsx)(l.A, { ...R.daysOfWeek }),
                            control: (0, a.jsx)(b.l, {
                              value: et.weekdays,
                              onChange: (e) => er({ ...et, weekdays: e }),
                              weekdayLabelFormat: en,
                            }),
                          })
                        : null,
                      "monthly" === et.frequency
                        ? (0, a.jsx)(u.ic, {
                            label: (0, a.jsx)(l.A, { ...R.monthlyDate }),
                            control: (0, a.jsx)(T, {
                              value: et.monthDays[0] ?? 1,
                              onChange: (e) => er({ ...et, monthDays: [e] }),
                            }),
                          })
                        : null,
                      (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(l.A, { ...R.time }),
                        control: (0, a.jsx)(p.b, { value: et.time, onChange: (e) => er({ ...et, time: e }) }),
                      }),
                    ],
                  })
                : null))
        }
        ;((Q[0] = J),
          (Q[1] = el),
          (Q[2] = X),
          (Q[3] = es),
          (Q[4] = ei),
          (Q[5] = ee),
          (Q[6] = eo),
          (Q[7] = en),
          (Q[8] = t),
          (Q[9] = n),
          (Q[10] = r),
          (Q[11] = d),
          (Q[12] = v),
          (Q[13] = w),
          (Q[14] = j),
          (Q[15] = k),
          (Q[16] = S),
          (Q[17] = A),
          (Q[18] = D),
          (Q[19] = P),
          (Q[20] = U),
          (Q[21] = L),
          (Q[22] = O),
          (Q[23] = q),
          (Q[24] = H),
          (Q[25] = z),
          (Q[26] = K))
      } else
        ((t = Q[8]),
          (n = Q[9]),
          (r = Q[10]),
          (d = Q[11]),
          (v = Q[12]),
          (w = Q[13]),
          (j = Q[14]),
          (k = Q[15]),
          (S = Q[16]),
          (A = Q[17]),
          (D = Q[18]),
          (P = Q[19]),
          (U = Q[20]),
          (L = Q[21]),
          (O = Q[22]),
          (q = Q[23]),
          (H = Q[24]),
          (z = Q[25]),
          (K = Q[26]))
      if (k !== Symbol.for("react.early_return_sentinel")) return k
      ;(Q[80] !== n || Q[81] !== r || Q[82] !== ei || Q[83] !== d || Q[84] !== q || Q[85] !== H || Q[86] !== K
        ? ((G =
            !d && r
              ? (0, a.jsx)(u.ic, {
                  label: (0, a.jsx)(l.A, { ...R.time }),
                  control: (0, a.jsx)(_.H, {
                    ariaLabel: ei.formatMessage(R.time),
                    options: H,
                    selectedId: q,
                    selectedLabel: ei.formatMessage(R[q]),
                    onSelect: (e) => K({ ...n, time: M.nT[e], oneTimeSeconds: 0 }),
                  }),
                })
              : null),
          (Q[80] = n),
          (Q[81] = r),
          (Q[82] = ei),
          (Q[83] = d),
          (Q[84] = q),
          (Q[85] = H),
          (Q[86] = K),
          (Q[87] = G))
        : (G = Q[87]),
        Q[88] !== n || Q[89] !== r || Q[90] !== d || Q[91] !== z || Q[92] !== K
          ? ((F =
              d || null == n.oneTimeDate || r
                ? null
                : (0, a.jsx)(u.ic, {
                    label: (0, a.jsx)(l.A, { ...R.time }),
                    control: (0, a.jsx)(p.b, {
                      value: n.time,
                      isOptionVisible: (e) => null == n.oneTimeDate || `${n.oneTimeDate} ${e}` >= z,
                      onChange: (e) => K({ ...n, time: e, oneTimeSeconds: 0 }),
                    }),
                  })),
            (Q[88] = n),
            (Q[89] = r),
            (Q[90] = d),
            (Q[91] = z),
            (Q[92] = K),
            (Q[93] = F))
          : (F = Q[93]),
        Q[94] !== t ||
        Q[95] !== Z ||
        Q[96] !== v ||
        Q[97] !== w ||
        Q[98] !== G ||
        Q[99] !== F ||
        Q[100] !== S ||
        Q[101] !== A ||
        Q[102] !== D ||
        Q[103] !== P ||
        Q[104] !== U ||
        Q[105] !== L ||
        Q[106] !== O
          ? (($ = (0, a.jsxs)(t, { variant: S, children: [A, D, P, U, L, O, v, w, G, F, Z] })),
            (Q[94] = t),
            (Q[95] = Z),
            (Q[96] = v),
            (Q[97] = w),
            (Q[98] = G),
            (Q[99] = F),
            (Q[100] = S),
            (Q[101] = A),
            (Q[102] = D),
            (Q[103] = P),
            (Q[104] = U),
            (Q[105] = L),
            (Q[106] = O),
            (Q[107] = $))
          : ($ = Q[107]),
        Q[108] !== J.default_timezone || Q[109] !== n || Q[110] !== ei || Q[111] !== d || Q[112] !== eo || Q[113] !== K
          ? ((W =
              d || null != n.oneTimeDate
                ? null
                : (0, a.jsxs)(c.t, {
                    variant: eo ? "outlined" : "default",
                    children: [
                      (0, a.jsx)(u.ic, {
                        label: (0, a.jsx)(l.A, { ...R.endRepeat }),
                        control: (0, a.jsx)(_.H, {
                          ariaLabel: ei.formatMessage(R.endRepeat),
                          options: [
                            { id: "never", label: ei.formatMessage(R.never) },
                            { id: "on-date", label: ei.formatMessage(R.onDate) },
                          ],
                          selectedId: null == n.untilDate ? "never" : "on-date",
                          selectedLabel: ei.formatMessage(null == n.untilDate ? R.never : R.onDate),
                          onSelect: (e) => {
                            if ("never" === e) return void K({ ...n, untilDate: void 0, untilTime: void 0 })
                            if (null != n.untilDate) return
                            let t = new Date()
                            ;(t.setMonth(t.getMonth() + 1),
                              K({
                                ...n,
                                untilTime: "23:59:59",
                                untilDate: new Intl.DateTimeFormat("en-CA", {
                                  timeZone: J.default_timezone,
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                }).format(t),
                              }))
                          },
                        }),
                      }),
                      null != n.untilDate
                        ? (0, a.jsx)(u.ic, {
                            label: (0, a.jsx)(l.A, { ...R.date }),
                            control: (0, a.jsx)(h.h, {
                              ariaLabel: ei.formatMessage(R.date),
                              value: n.untilDate,
                              timeZone: J.default_timezone,
                              onChange: (e) => K({ ...n, untilDate: e, untilTime: "23:59:59" }),
                            }),
                          })
                        : null,
                    ],
                  })),
            (Q[108] = J.default_timezone),
            (Q[109] = n),
            (Q[110] = ei),
            (Q[111] = d),
            (Q[112] = eo),
            (Q[113] = K),
            (Q[114] = W))
          : (W = Q[114]),
        Q[115] !== d || Q[116] !== eo
          ? ((V =
              d && eo
                ? (0, a.jsx)(c.t, {
                    variant: "outlined",
                    children: (0, a.jsx)(u.ic, {
                      label: (0, a.jsx)(l.A, { ...R.time }),
                      control: (0, a.jsx)(l.A, { ...R.custom }),
                    }),
                  })
                : null),
            (Q[115] = d),
            (Q[116] = eo),
            (Q[117] = V))
          : (V = Q[117]),
        Q[118] !== j || Q[119] !== $ || Q[120] !== W || Q[121] !== V
          ? ((B = (0, a.jsxs)("div", { className: j, children: [$, W, V] })),
            (Q[118] = j),
            (Q[119] = $),
            (Q[120] = W),
            (Q[121] = V),
            (Q[122] = B))
          : (B = Q[122]))
      let er = B
      return (
        Q[123] !== er || Q[124] !== eo
          ? ((Y = eo
              ? er
              : (0, a.jsx)(x.C, {
                  title: (0, a.jsx)("span", {
                    className: "text-xs uppercase select-none",
                    children: (0, a.jsx)(l.A, { ...R.frequency }),
                  }),
                  children: er,
                })),
            (Q[123] = er),
            (Q[124] = eo),
            (Q[125] = Y))
          : (Y = Q[125]),
        Y
      )
    }
    function E(e) {
      return "daily" === e.id || "weekly" === e.id || "monthly" === e.id
    }
    function I(e) {
      return "string" == typeof e
    }
    function N(e) {
      let t,
        n,
        s,
        i = (0, o.c)(9),
        { automation: r } = e
      if (i[0] !== r.schedule) {
        let e = r.schedule.match(/^RRULE:(.+)$/m)?.[1]
        ;((t = Number(e?.match(/(?:^|;)INTERVAL=(\d+)/)?.[1] ?? 1)),
          (n = e?.match(/(?:^|;)FREQ=(\w+)/)?.[1]),
          (i[0] = r.schedule),
          (i[1] = t),
          (i[2] = n))
      } else ((t = i[1]), (n = i[2]))
      let d = n
      if ("custom" === r.schedule_components.frequency && Number.isSafeInteger(t) && t > 0) {
        if ("MINUTELY" === d) {
          let e
          return (
            i[3] !== t
              ? ((e = (0, a.jsx)(l.A, { ...R.minutes, values: { minutes: t } })), (i[3] = t), (i[4] = e))
              : (e = i[4]),
            e
          )
        }
        if ("HOURLY" === d) {
          let e
          return (
            i[5] !== t
              ? ((e = (0, a.jsx)(l.A, { ...R.everyHours, values: { hours: t } })), (i[5] = t), (i[6] = e))
              : (e = i[6]),
            e
          )
        }
      }
      return (
        i[7] !== r.schedule_components.frequency
          ? ((s = (0, a.jsx)(l.A, { ...R.repeatValue, values: { frequency: r.schedule_components.frequency } })),
            (i[7] = r.schedule_components.frequency),
            (i[8] = s))
          : (s = i[8]),
        s
      )
    }
    let R = (0, r.YK)({
      frequency: {
        id: "automations.editor.schedule.frequencySectionLabel",
        defaultMessage: "Frequency",
        description: "Section label for the schedule controls in the Scheduled task editor",
      },
      repeat: {
        id: "automations.editor.schedule.repeat",
        defaultMessage: "Repeat",
        description: "Row label for the repeat frequency in the Scheduled task editor",
      },
      date: {
        id: "automations.editor.schedule.date",
        defaultMessage: "Date",
        description: "Row label for choosing the scheduled date in the Scheduled task editor",
      },
      every: {
        id: "automations.editor.schedule.every",
        defaultMessage: "Every",
        description: "Row label for an hourly interval in the Scheduled task editor",
      },
      hours: {
        id: "automations.editor.schedule.hourInterval",
        defaultMessage: "{hours, plural, one {# hour} other {# hours}}",
        description: "Choice of hourly interval in the Scheduled editor; hours is the number between runs",
      },
      daysOfWeek: {
        id: "automations.editor.schedule.daysOfWeek",
        defaultMessage: "Days of the week",
        description: "Row label for weekdays in the Scheduled task editor",
      },
      monthlyDate: {
        id: "automations.editor.schedule.monthlyDate",
        defaultMessage: "Monthly date",
        description: "Row label for choosing a day of the month in the Scheduled task editor",
      },
      time: {
        id: "automations.editor.schedule.time",
        defaultMessage: "Time",
        description: "Row label for task time in the Scheduled editor",
      },
      morning: {
        id: "automations.editor.schedule.morning",
        defaultMessage: "Morning",
        description: "Flexible task time option in the Scheduled editor, represented by 9 AM",
      },
      afternoon: {
        id: "automations.editor.schedule.afternoon",
        defaultMessage: "Afternoon",
        description: "Flexible task time option in the Scheduled editor, represented by 2 PM",
      },
      evening: {
        id: "automations.editor.schedule.evening",
        defaultMessage: "Evening",
        description: "Flexible task time option in the Scheduled editor, represented by 6 PM",
      },
      night: {
        id: "automations.editor.schedule.night",
        defaultMessage: "Night",
        description: "Flexible task time option in the Scheduled editor, represented by 10 PM",
      },
      customFrequency: {
        id: "automations.scheduled.custom.frequency",
        defaultMessage: "{frequency, select, daily {Daily} weekly {Weekly} monthly {Monthly} other {Custom}}",
        description: "Selected structured custom frequency in the Scheduled editor",
      },
      endRepeat: {
        id: "automations.editor.schedule.until",
        defaultMessage: "End repeat",
        description: "Row label for when a repeating scheduled task stops",
      },
      never: {
        id: "automations.editor.schedule.untilNever",
        defaultMessage: "Never",
        description: "End-repeat option for a scheduled task that does not expire",
      },
      onDate: {
        id: "automations.editor.schedule.untilOnDate",
        defaultMessage: "On date",
        description: "End-repeat option that enables choosing an end date",
      },
      custom: {
        id: "automations.sharing.preview.dialog.custom_task_time",
        defaultMessage: "Custom",
        description: "Read-only time value for a shared monitoring task",
      },
      minutes: {
        id: "automations.scheduled.monitoring.minutes",
        defaultMessage: "Every {minutes, plural, one {minute} other {# minutes}}",
        description: "Monitoring interval shown in the Scheduled editor; minutes is the interval length",
      },
      everyHours: {
        id: "automations.scheduled.monitoring.hours",
        defaultMessage: "Every {hours, plural, one {hour} other {# hours}}",
        description: "Monitoring interval shown in the Scheduled editor; hours is the interval length",
      },
      repeatValue: {
        id: "automations.sharing.preview.repeatValue",
        defaultMessage:
          "{frequency, select, once {Once} hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Annually} other {Custom}}",
        description: "Repeat frequency of a shared monitoring task",
      },
    })
  },
  FLVF(e, t, n) {
    var a = n("l8z4"),
      o = n("PFjh"),
      s = n("yGJW")
    let i = {
        task_share_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_BUTTON_CLICKED",
        task_share_sheet_viewed: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_SHEET_VIEWED",
        task_share_link_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_BUTTON_CLICKED",
        task_share_link_created: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_CREATED",
        task_share_link_refreshed: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_REFRESHED",
        task_share_link_delete_button_clicked: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETE_BUTTON_CLICKED",
        task_share_link_deleted: "CHATGPT_TASKS_EVENT_TYPE_TASK_SHARE_LINK_DELETED",
      },
      l = {
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
          ;((0, s.yy)(e, a.AS, { type: i[t], taskId: n, source: l[r], ...d }),
            e
              .get(o.T$)
              .count("default", "automations.sharing.event", {
                type: t,
                source: "scheduled_page" === r ? "tasks_page_task_row" : r,
                ...(d?.success == null ? {} : { success: String(d.success) }),
              }))
        },
        u: function (e, t, n, i) {
          ;((0, s.yy)(e, a.AS, {
            type: r[t],
            source: "CHATGPT_TASKS_INTERACTION_SOURCE_SHARED_TASK_SHEET",
            sharePostId: n,
            ...i,
          }),
            e
              .get(o.T$)
              .count("default", "automations.sharing.event", {
                type: t,
                source: "shared_task_sheet",
                ...(i?.success == null ? {} : { success: String(i.success) }),
              }))
        },
      },
    )
  },
  TzXS(e, t, n) {
    var a = n("fGpH")
    function o(e) {
      return (0, a.nT)(e) || 0 !== e.next_run_times.length ? (e.is_enabled ? "active" : "paused") : "completed"
    }
    function s({ automation: e }, t) {
      let n = t?.[e.id] ?? Date.parse(e.updated_at)
      return Number.isNaN(n) ? 0 : n
    }
    n.d(
      t,
      {},
      {
        jv: o,
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
          for (let i of e) {
            let e = o(i.automation)
            ;(a[e].push(i), "active" !== e && s(i, "paused" === e ? n : void 0) >= t - 864e5 && a.recent.push(i))
          }
          for (let e of [a.paused, a.completed]) e.sort((e, t) => s(t) - s(e))
          return (a.recent.sort((e, t) => s(t, n) - s(e, n)), a)
        },
      },
    )
  },
  dMTK(e, t, n) {
    function a(e, t) {
      return (
        (Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())) /
        864e5
      )
    }
    function o(e, t) {
      let n = e.formatRelativeTime(t, "day", { numeric: "auto" })
      return e.locale.startsWith("en") ? n.charAt(0).toUpperCase() + n.slice(1) : n
    }
    n.d(
      t,
      {},
      {
        AR: function (e, t = Date.now()) {
          let n = null,
            a = !1
          return e.map((e) => {
            if (null == e) return ((n = null), (a = !0), null)
            let o = null
            for (let s of e)
              (s.breaksPreviousAdjacency && (n = null),
                null == o &&
                  (function ({ current: e, previous: t, isFirstUserTurn: n, nowMs: a }) {
                    return (
                      null != e.sentAtMs &&
                      !!Number.isFinite(e.sentAtMs) &&
                      ((!!n && a - e.sentAtMs > 36e5) ||
                        (t?.role === "assistant" &&
                          null != t.sentAtMs &&
                          Number.isFinite(t.sentAtMs) &&
                          e.sentAtMs - t.sentAtMs > ("user" === e.role ? 36e5 : 6e5)))
                    )
                  })({ current: s, previous: n, isFirstUserTurn: "user" === s.role && !a, nowMs: t }) &&
                  (o = s.sentAtMs),
                (a = a || "user" === s.role),
                (n = s))
            return o
          })
        },
        a7: function (e, t, n) {
          let s = Math.max(a(n, t), 0)
          return {
            date:
              s <= 1
                ? o(e, -s)
                : s <= 7
                  ? e.formatDate(t, { weekday: "long" })
                  : s <= 365
                    ? e.formatDate(t, { weekday: "short", month: "short", day: "numeric" })
                    : e.formatDate(t, { month: "short", day: "numeric", year: "numeric" }),
            time: e.formatTime(t, { hour: "numeric", minute: "2-digit" }),
            includeAt: s > 7,
          }
        },
        f$: a,
        gE: o,
      },
    )
  },
}
//# sourceMappingURL=622950.39ffdd7f94.js.map
