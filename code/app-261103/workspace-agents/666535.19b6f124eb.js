export const __rspack_esm_ids = [666535]
export const __webpack_modules__ = {
  taVj(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      l = n("oyxz"),
      i = n("ygO2"),
      o = n("JNtf"),
      r = n("mUDD")
    n.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            n,
            d,
            c,
            u,
            m,
            h,
            g,
            f,
            p,
            y,
            b,
            x,
            v = (0, s.c)(34),
            { isPending: w, name: A, onCancel: _, onCloseAutoFocus: j, onConfirm: k, open: T } = e
          v[0] !== j
            ? ((t = {
                onCloseAutoFocus: (e) => {
                  null != j && (e.preventDefault(), j())
                },
              }),
              (v[0] = j),
              (v[1] = t))
            : (t = v[1])
          let C = !w
          return (
            v[2] !== w || v[3] !== _
              ? ((n = (e) => {
                  e || w || _()
                }),
                (v[2] = w),
                (v[3] = _),
                (v[4] = n))
              : (n = v[4]),
            v[5] !== w || v[6] !== k
              ? ((d = (e) => {
                  ;(e.preventDefault(), w || k())
                }),
                (v[5] = w),
                (v[6] = k),
                (v[7] = d))
              : (d = v[7]),
            v[8] !== A
              ? ((c = (0, a.jsx)(o.L3, {
                  children: (0, a.jsx)(l.A, {
                    id: "inbox.automations.deleteConfirm.title",
                    defaultMessage: "Delete {name}?",
                    description: "Title for the delete automation confirmation dialog",
                    values: { name: (0, a.jsx)("strong", { className: "font-semibold text-default", children: A }) },
                  }),
                })),
                (v[8] = A),
                (v[9] = c))
              : (c = v[9]),
            v[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsx)(o.rr, {
                  children: (0, a.jsx)(l.A, {
                    id: "inbox.automations.deleteConfirm.descriptionNoPeriod",
                    defaultMessage: "This will permanently delete the scheduled task and stop future runs",
                    description: "Description for the delete scheduled task confirmation dialog",
                  }),
                })),
                (v[10] = u))
              : (u = v[10]),
            v[11] !== c
              ? ((m = (0, a.jsx)(r.OO, { children: (0, a.jsx)(r.c7, { title: c, subtitle: u }) })),
                (v[11] = c),
                (v[12] = m))
              : (m = v[12]),
            v[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, a.jsx)(l.A, {
                  id: "inbox.automations.deleteConfirm.cancel",
                  defaultMessage: "Cancel",
                  description: "Cancel button label for delete automation confirmation dialog",
                })),
                (v[13] = h))
              : (h = v[13]),
            v[14] !== w || v[15] !== _
              ? ((g = (0, a.jsx)(i.$, { color: "outline", disabled: w, onClick: _, children: h })),
                (v[14] = w),
                (v[15] = _),
                (v[16] = g))
              : (g = v[16]),
            v[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, a.jsx)(l.A, {
                  id: "inbox.automations.deleteConfirm.confirm",
                  defaultMessage: "Delete scheduled task",
                  description: "Confirm button label for delete scheduled task confirmation dialog",
                })),
                (v[17] = f))
              : (f = v[17]),
            v[18] !== w
              ? ((p = (0, a.jsx)(i.$, { color: "danger", loading: w, type: "submit", children: f })),
                (v[18] = w),
                (v[19] = p))
              : (p = v[19]),
            v[20] !== p || v[21] !== g
              ? ((y = (0, a.jsx)(r.OO, { children: (0, a.jsxs)(r.Es, { children: [g, p] }) })),
                (v[20] = p),
                (v[21] = g),
                (v[22] = y))
              : (y = v[22]),
            v[23] !== y || v[24] !== d || v[25] !== m
              ? ((b = (0, a.jsxs)(r.R4, { as: "form", onSubmit: d, children: [m, y] })),
                (v[23] = y),
                (v[24] = d),
                (v[25] = m),
                (v[26] = b))
              : (b = v[26]),
            v[27] !== w || v[28] !== T || v[29] !== t || v[30] !== b || v[31] !== C || v[32] !== n
              ? ((x = (0, a.jsx)(o.lG, {
                  open: T,
                  contentProps: t,
                  showDialogClose: C,
                  shouldIgnoreClickOutside: w,
                  onOpenChange: n,
                  children: b,
                })),
                (v[27] = w),
                (v[28] = T),
                (v[29] = t),
                (v[30] = b),
                (v[31] = C),
                (v[32] = n),
                (v[33] = x))
              : (x = v[33]),
            x
          )
        },
      },
    )
  },
  LxxF(e, t, n) {
    n.d(t, { WorkspaceAgentSchedulesDialog: () => eP })
    var a = n("ABep"),
      s = n("QosV"),
      l = n("hwkA"),
      i = n("slpy"),
      o = n("T0Rc"),
      r = n("zTeN"),
      d = n("zd8w"),
      c = n("Wf1j"),
      u = n("oyxz"),
      m = n("HZfM"),
      h = n("SPnB"),
      g = n("taVj"),
      f = n("jAnS"),
      p = n("FvYa"),
      y = n("TjgH"),
      b = n("zKCW"),
      x = n("LMw7"),
      v = n("JNtf"),
      w = n("mUDD"),
      A = n("ZtSy"),
      _ = n("GO7r"),
      j = n("zkPp"),
      k = n("BrEg"),
      T = n("OWtl"),
      C = n("soaw"),
      M = n("LNWO"),
      E = n("QxT8"),
      N = n("OQWN"),
      S = n("M2S2")
    function D(e, t) {
      let n = e.rules.map((e) => {
        let n = e.interval ?? 1,
          a = null != e.hour || e.byweekday?.length || e.bymonthday?.length
        if ("minutely" === e.freq && !a && null == e.minute)
          return t.formatMessage(
            {
              id: "workspaceAgents.schedules.summaryEveryMinute",
              defaultMessage: "Every {interval, plural, one {minute} other {# minutes}}",
              description:
                "Automation list label for an interval in minutes. interval is the positive number of minutes between runs.",
            },
            { interval: n },
          )
        if ("hourly" === e.freq && !a && (null == e.minute || 0 === e.minute))
          return t.formatMessage(
            {
              id: "workspaceAgents.schedules.summaryEveryHour",
              defaultMessage: "Every {interval, plural, one {hour} other {# hours}}",
              description:
                "Automation list label for an interval in hours. interval is the positive number of hours between runs.",
            },
            { interval: n },
          )
        if ("daily" === e.freq && 1 === n && null != e.hour && !e.byweekday?.length && !e.bymonthday?.length)
          return t.formatMessage(
            {
              id: "workspaceAgents.schedules.summaryEveryDay",
              defaultMessage: "Every day at {time}",
              description: "Summary of a daily automation in its saved timezone. time is a localized clock time.",
            },
            { time: L(t, e.hour, e.minute ?? 0) },
          )
        if ("weekly" === e.freq && 1 === n && null != e.hour && e.byweekday?.length && !e.bymonthday?.length) {
          let n = [...new Set(e.byweekday)]
            .sort((e, t) => e - t)
            .map((n) =>
              t.formatDate(new Date(Date.UTC(2021, 0, 4 + n)), {
                weekday: e.byweekday?.length === 1 ? "long" : "short",
                timeZone: "UTC",
              }),
            )
          return t.formatMessage(
            {
              id: "workspaceAgents.schedules.summaryWeekdays",
              defaultMessage: "{weekdays} at {time}",
              description:
                "Summary of a weekly automation in its saved timezone. weekdays is the localized list of selected days and time is a clock time.",
            },
            { weekdays: t.formatList(n), time: L(t, e.hour, e.minute ?? 0) },
          )
        }
        return null
      })
      return n.some((e) => null == e) ? (0, S._t)(e, t) : t.formatList(n.filter((e) => null != e))
    }
    function L(e, t, n) {
      let a = new Date(Date.UTC(2021, 0, 1, t, n)),
        s = new Intl.DateTimeFormat(e.locale, {
          hour: "numeric",
          ...(0 === n ? {} : { minute: "2-digit" }),
          timeZone: "UTC",
        }).formatToParts(a)
      return s
        .filter((e, t) => !("literal" === e.type && /^\s+$/u.test(e.value) && s[t + 1]?.type === "dayPeriod"))
        .map((e) => e.value)
        .join("")
    }
    var I = n("R4Ep"),
      U = n("KYL2"),
      G = n("A9LP"),
      P = n("odKs"),
      R = n("BCU4"),
      O = n("ygO2"),
      H = n("bqtn"),
      z = n("f38C"),
      q = n("on57")
    function B(e) {
      let t,
        n,
        l,
        i,
        o = (0, s.c)(8),
        { children: r, variant: d } = e,
        c = "soft" === (void 0 === d ? "inline" : d) ? "rounded-2xl bg-secondary-soft text-default" : "text-info"
      return (
        o[0] !== c
          ? ((t = (0, q.A)("flex items-start gap-3 px-3 py-3 text-sm leading-5", c)), (o[0] = c), (o[1] = t))
          : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(_.zOs, { className: "shrink-0" })), (o[2] = n))
          : (n = o[2]),
        o[3] !== r
          ? ((l = (0, a.jsx)("div", { className: "min-w-0 flex-1", children: r })), (o[3] = r), (o[4] = l))
          : (l = o[4]),
        o[5] !== t || o[6] !== l
          ? ((i = (0, a.jsxs)("aside", { className: t, children: [n, l] })), (o[5] = t), (o[6] = l), (o[7] = i))
          : (i = o[7]),
        i
      )
    }
    var W = n("Qgfj")
    let F = (0, W.YK)({
      chatGptDestination: {
        id: "workspaceAgents.schedules.chatGptDestination",
        defaultMessage: "ChatGPT",
        description: "Destination label for a private Workspace Agent automation in ChatGPT",
      },
    })
    var Y = n("K2hS"),
      $ = n("UIGa"),
      Z = n("Cmnu"),
      K = n("pZwg"),
      V = n("fZ4G")
    let Q = ({
      value: e,
      onChange: t,
      children: n,
      block: s,
      pill: l = K.N.pill,
      variant: i,
      size: o = "md",
      gutterSize: r,
      className: c,
      onClick: u,
      ref: m,
      ...h
    }) => {
      let g = (0, d.useRef)(null),
        f = (0, d.useRef)(null),
        p = (0, d.useCallback)((e) => {
          let t = g.current,
            n = f.current
          if (!t || !n) return
          let a = t?.querySelector('[data-state="on"]')
          if (!a) return
          let s = t.clientWidth,
            l = Math.floor(a.clientWidth),
            i = a.offsetLeft
          if (
            (s - (l + i) < (Number.parseFloat(getComputedStyle(t).paddingRight) || 0) && (l -= 1),
            (n.style.width = `${Math.floor(l)}px`),
            (n.style.transform = `translateX(${i}px)`),
            t.scrollWidth > s)
          ) {
            let n = 0.15 * s,
              l = t.getBoundingClientRect(),
              i = a.getBoundingClientRect()
            if (i.left < l.left + n || i.right > l.right - n) {
              let n = i.left + i.width / 2 - (l.left + l.width / 2)
              e ? t.scrollBy({ left: n, behavior: "smooth" }) : t.scrollBy({ left: n, behavior: "instant" })
            }
          }
        }, [])
      return (
        (0, Z.wY)({
          ref: g,
          onResize: () => {
            let e = f.current
            if (!e) return
            let t = e.style.transition
            ;((e.style.transition = ""), p(!1), (e.style.transition = t))
          },
        }),
        (0, d.useLayoutEffect)(() => {
          let e = g.current,
            t = f.current
          e &&
            t &&
            (p(!!t.style.transition),
            t.style.transition ||
              (0, V.yQ)(() => {
                t.style.transition = "width 300ms var(--cubic-enter), transform 300ms var(--cubic-enter)"
              }))
        }, [p, e, o, r, l, i]),
        (0, a.jsxs)(Y.bL, {
          ref: (0, $.P)([g, m]),
          className: (0, q.A)("SegmentedControl-CujMkm", c),
          type: "single",
          value: e,
          loop: !1,
          onValueChange: (e) => {
            e && t && t(e)
          },
          onClick: u,
          "data-block": s ? "" : void 0,
          "data-pill": l ? "" : void 0,
          "data-variant": i,
          "data-size": o,
          "data-gutter-size": r,
          ...h,
          children: [(0, a.jsx)("div", { className: "SegmentedControlThumb-fJJYCA", ref: f }), n],
        })
      )
    }
    Q.Option = ({ children: e, ...t }) =>
      (0, a.jsx)(Y.q7, {
        className: "SegmentedControlOption-I_uCIR",
        ...t,
        onPointerEnter: V.Ny,
        children: (0, a.jsx)("span", { className: "relative", children: e }),
      })
    var X = n("oVAd"),
      J = n("hIjX"),
      ee = n("meRA"),
      et = n("cOBD"),
      en = n("gM9O"),
      ea = n("dUCV"),
      es = n("sn2N"),
      el = n("AWNZ")
    let ei = ["hourly", "daily", "weekly", "monthly", "yearly"],
      eo = Array.from({ length: 12 }, (e, t) => t + 1)
    function er(e) {
      let t,
        n,
        l,
        i,
        o,
        r,
        m,
        h,
        g,
        f,
        p,
        y,
        b,
        x,
        v,
        w,
        A,
        _,
        j = (0, s.c)(89),
        { scheduleConfig: k, timeZone: T, timeControl: C, onUpdateScheduleDraft: M } = e,
        E = (0, c.A)()
      j[0] !== k.intervalMinutes
        ? ((t = () => (null != k.intervalMinutes && k.intervalMinutes % 60 != 0 ? "minute" : "hour")),
          (j[0] = k.intervalMinutes),
          (j[1] = t))
        : (t = j[1])
      let [N, S] = (0, d.useState)(t),
        D = k.intervalMinutes ?? 60 * k.intervalHours,
        L = "hour" === N ? 60 : 1,
        I = null != k.intervalMinutes
      j[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["daily", "weekdays", "weekly"]), (j[2] = n))
        : (n = j[2])
      let U = n.includes(k.mode)
      if (
        j[3] !== D ||
        j[4] !== N ||
        j[5] !== E ||
        j[6] !== U ||
        j[7] !== M ||
        j[8] !== I ||
        j[9] !== k ||
        j[10] !== T ||
        j[11] !== L
      ) {
        let e = k.weekdays
        "daily" === k.mode ? (e = et.O0.map(eg)) : "weekdays" === k.mode && (e = et.O0.slice(0, 5).map(eh))
        let t = U ? "daily" : k.mode
        if (j[24] !== t || j[25] !== E || j[26] !== U || j[27] !== M || j[28] !== k) {
          let e, n, s, d, c
          ;(j[37] !== t
            ? ((e = (e) => !["weekdays", "weekly"].includes(e.id) && ("custom" !== e.id || "custom" === t)),
              (j[37] = t),
              (j[38] = e))
            : (e = j[38]),
            j[39] !== E
              ? ((n = (e) => ({ id: e.id, label: E.formatMessage(e.labelMessage) })), (j[39] = E), (j[40] = n))
              : (n = j[40]))
          let u = et.f0.filter(e).map(n)
          ;((o = k.monthDay ?? 1),
            (r = null != k.oneTimeDate || U || "monthly" === k.mode),
            j[41] !== k.customRrule || j[42] !== k.mode || j[43] !== k.oneTimeDate
              ? ((s = null == k.oneTimeDate && "custom" === k.mode ? (0, P.RD)(k.customRrule) : null),
                (j[41] = k.customRrule),
                (j[42] = k.mode),
                (j[43] = k.oneTimeDate),
                (j[44] = s))
              : (s = j[44]),
            (i = s),
            j[45] !== M || j[46] !== k
              ? ((d = (e) => {
                  M({ ...k, ...e })
                }),
                (j[45] = M),
                (j[46] = k),
                (j[47] = d))
              : (d = j[47]),
            (x = d),
            j[48] !== i || j[49] !== x
              ? ((c = (e) => {
                  null != i && x({ customRrule: (0, P.vQ)({ ...i, ...e }) })
                }),
                (j[48] = i),
                (j[49] = x),
                (j[50] = c))
              : (c = j[50]),
            (b = c),
            (l = es.C),
            (p = null),
            (y =
              null == k.oneTimeDate
                ? (0, a.jsx)(Q, {
                    "aria-label": E.formatMessage({
                      id: "settings.automations.scheduleModeLabel",
                      defaultMessage: "Repeat schedule",
                      description: "Aria label for schedule type dropdown",
                    }),
                    className: "mb-5 font-normal",
                    block: !0,
                    pill: !0,
                    size: "lg",
                    gutterSize: "2xs",
                    variant: "form",
                    value: t,
                    onChange: (e) => {
                      e !== t && M((0, P.dl)(k, e))
                    },
                    children: u.map(em),
                  })
                : null),
            (j[24] = t),
            (j[25] = E),
            (j[26] = U),
            (j[27] = M),
            (j[28] = k),
            (j[29] = l),
            (j[30] = i),
            (j[31] = o),
            (j[32] = r),
            (j[33] = p),
            (j[34] = y),
            (j[35] = b),
            (j[36] = x))
        } else ((l = j[29]), (i = j[30]), (o = j[31]), (r = j[32]), (p = j[33]), (y = j[34]), (b = j[35]), (x = j[36]))
        ;((m = "flex flex-col overflow-hidden"),
          j[51] !== E || j[52] !== k.oneTimeDate || j[53] !== T || j[54] !== x
            ? ((h =
                null != k.oneTimeDate
                  ? (0, a.jsx)(el.ic, {
                      control: (0, a.jsx)(X.h, {
                        ariaLabel: E.formatMessage({
                          id: "inbox.automations.oneTimeDate.ariaLabel",
                          defaultMessage: "Scheduled date",
                          description: "Accessible label for choosing the date of a one-time cloud scheduled task",
                        }),
                        timeZone: T,
                        value: k.oneTimeDate,
                        onChange: (e) => {
                          x({ oneTimeDate: e })
                        },
                      }),
                      label: E.formatMessage({
                        id: "inbox.automations.oneTimeDate.label",
                        defaultMessage: "Date",
                        description: "Label for the date of a one-time scheduled task",
                      }),
                      variant: "nested",
                    })
                  : null),
              (j[51] = E),
              (j[52] = k.oneTimeDate),
              (j[53] = T),
              (j[54] = x),
              (j[55] = h))
            : (h = j[55]),
          j[56] !== D ||
          j[57] !== N ||
          j[58] !== E ||
          j[59] !== I ||
          j[60] !== k.mode ||
          j[61] !== k.oneTimeDate ||
          j[62] !== L ||
          j[63] !== x
            ? ((g =
                null == k.oneTimeDate && "hourly" === k.mode
                  ? (0, a.jsx)(el.ic, {
                      control: (0, a.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                          (0, a.jsx)(ee.w, {
                            ariaLabel: E.formatMessage({
                              id: "settings.automations.scheduleIntervalDuration",
                              defaultMessage: "Interval duration",
                              description: "Accessible label for a task's repeat interval amount",
                            }),
                            max: "minute" === N ? 999 : 23,
                            min: 1,
                            step: I ? 1 / L : 1,
                            value: D / L,
                            onChange: (e) => {
                              let t = Math.round(e * L)
                              t !== D &&
                                x(
                                  "minute" === N || I
                                    ? { intervalMinutes: t }
                                    : { intervalHours: e, intervalMinutes: null },
                                )
                            },
                          }),
                          (0, a.jsx)(en.H, {
                            ariaLabel: E.formatMessage({
                              id: "settings.automations.scheduleIntervalUnit",
                              defaultMessage: "Interval unit",
                              description:
                                "Accessible label for selecting minutes or hours for a task's repeat interval",
                            }),
                            options: ["minute", "hour"].map((e) => ({
                              id: e,
                              label: E.formatMessage(ef.intervalUnit, { unit: e }),
                            })),
                            selectedId: N,
                            selectedLabel: E.formatMessage(ef.intervalUnit, { unit: N }),
                            onSelect: S,
                          }),
                        ],
                      }),
                      label: E.formatMessage({
                        id: "settings.automations.scheduleIntervalLabel",
                        defaultMessage: "Every",
                        description: "Label for the automation interval input",
                      }),
                      variant: "nested",
                    })
                  : null),
              (j[56] = D),
              (j[57] = N),
              (j[58] = E),
              (j[59] = I),
              (j[60] = k.mode),
              (j[61] = k.oneTimeDate),
              (j[62] = L),
              (j[63] = x),
              (j[64] = g))
            : (g = j[64]),
          (f = U
            ? (0, a.jsxs)("fieldset", {
                className: "min-w-0",
                children: [
                  (0, a.jsx)("legend", {
                    className: "mb-2 text-sm font-medium",
                    children: (0, a.jsx)(u.A, {
                      id: "workspaceAgents.schedules.runEvery",
                      defaultMessage: "Run every",
                      description: "Label for the weekdays on which an agent automation runs",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "flex gap-2",
                    children: [et.O0["6"], ...et.O0.slice(0, 6)].map((t) => {
                      let n = e.includes(t.id),
                        s = () => x({ mode: "weekly", weekdays: n && 1 === e.length ? et.O0.map(eu) : [t.id] })
                      return (0, a.jsx)(
                        O.$,
                        {
                          type: "button",
                          color: n ? "accent" : "outlineSurface",
                          size: "field",
                          radius: "full",
                          className: "min-w-0 flex-1 justify-center leading-5",
                          "aria-label": E.formatMessage(t.longLabelMessage),
                          "aria-pressed": n,
                          onClick: (a) => {
                            a.shiftKey
                              ? s()
                              : a.detail > 1 ||
                                (n && 1 === e.length) ||
                                x({
                                  mode: "weekly",
                                  weekdays: n
                                    ? e.filter((e) => e !== t.id)
                                    : et.O0.filter((n) => {
                                        let { id: a } = n
                                        return a === t.id || e.includes(a)
                                      }).map(ec),
                                })
                          },
                          onDoubleClick: s,
                          children: E.formatMessage(t.labelMessage),
                        },
                        t.id,
                      )
                    }),
                  }),
                ],
              })
            : null),
          (j[3] = D),
          (j[4] = N),
          (j[5] = E),
          (j[6] = U),
          (j[7] = M),
          (j[8] = I),
          (j[9] = k),
          (j[10] = T),
          (j[11] = L),
          (j[12] = l),
          (j[13] = i),
          (j[14] = o),
          (j[15] = r),
          (j[16] = m),
          (j[17] = h),
          (j[18] = g),
          (j[19] = f),
          (j[20] = p),
          (j[21] = y),
          (j[22] = b),
          (j[23] = x))
      } else
        ((l = j[12]),
          (i = j[13]),
          (o = j[14]),
          (r = j[15]),
          (m = j[16]),
          (h = j[17]),
          (g = j[18]),
          (f = j[19]),
          (p = j[20]),
          (y = j[21]),
          (b = j[22]),
          (x = j[23]))
      j[65] !== E || j[66] !== k.mode || j[67] !== k.oneTimeDate || j[68] !== o || j[69] !== x
        ? ((v =
            null == k.oneTimeDate && "monthly" === k.mode
              ? (0, a.jsx)(el.ic, {
                  control: (0, a.jsx)(en.H, {
                    ariaLabel: E.formatMessage({
                      id: "inbox.automations.monthDay.ariaLabel",
                      defaultMessage: "Day of the month",
                      description: "Accessible label for the monthly scheduled task day-of-month selector",
                    }),
                    options: et.nb.map(ed),
                    selectedId: String(o),
                    selectedLabel: String(o),
                    onSelect: (e) => {
                      x({ monthDay: Number(e) })
                    },
                  }),
                  label: E.formatMessage({
                    id: "inbox.automations.day.label",
                    defaultMessage: "On",
                    description: "Label for the scheduled task weekday row",
                  }),
                  variant: "nested",
                })
              : null),
          (j[65] = E),
          (j[66] = k.mode),
          (j[67] = k.oneTimeDate),
          (j[68] = o),
          (j[69] = x),
          (j[70] = v))
        : (v = j[70])
      let G = r ? C : null
      return (
        j[71] !== i || j[72] !== E || j[73] !== T || j[74] !== b
          ? ((w =
              null != i
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(el.ic, {
                        control: (0, a.jsx)(en.H, {
                          ariaLabel: E.formatMessage({
                            id: "inbox.automations.customFrequency.ariaLabel",
                            defaultMessage: "Repeat frequency",
                            description: "Accessible label for the custom scheduled task frequency selector",
                          }),
                          options: ei.map((e) => ({ id: e, label: E.formatMessage(ep[e]) })),
                          selectedId: i.frequency,
                          selectedLabel: E.formatMessage(ep[i.frequency]),
                          onSelect: (e) => {
                            b({ frequency: e })
                          },
                        }),
                        label: E.formatMessage({
                          id: "inbox.automations.customFrequency.label",
                          defaultMessage: "Repeats",
                          description: "Label for the custom schedule frequency row",
                        }),
                        variant: "nested",
                      }),
                      (0, a.jsx)(el.ic, {
                        control: (0, a.jsx)(ee.w, {
                          ariaLabel: E.formatMessage({
                            id: "inbox.automations.customInterval.ariaLabel",
                            defaultMessage: "Repeat interval",
                            description: "Accessible label for the custom schedule interval input",
                          }),
                          max: 999,
                          min: 1,
                          suffix: E.formatMessage(ey[i.frequency], { count: i.interval }),
                          value: i.interval,
                          onChange: (e) => {
                            b({ interval: e })
                          },
                        }),
                        label: E.formatMessage({
                          id: "inbox.automations.customInterval.label",
                          defaultMessage: "Every",
                          description: "Label for the custom schedule interval row",
                        }),
                        variant: "nested",
                      }),
                      "weekly" === i.frequency
                        ? (0, a.jsx)(el.ic, {
                            control: (0, a.jsx)(ea.l, {
                              value: i.weekdays,
                              onChange: (e) => {
                                b({ weekdays: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customWeekdays.label",
                              defaultMessage: "On",
                              description: "Label for the custom schedule weekdays row",
                            }),
                            labelSizing: "content",
                            variant: "nested",
                          })
                        : null,
                      "yearly" === i.frequency
                        ? (0, a.jsx)(el.ic, {
                            control: (0, a.jsx)(en.H, {
                              ariaLabel: E.formatMessage({
                                id: "inbox.automations.customMonth.ariaLabel",
                                defaultMessage: "Month",
                                description: "Accessible label for the custom schedule month selector",
                              }),
                              options: eo.map((e) => ({
                                id: String(e),
                                label: E.formatDate(new Date(2024, e - 1, 1), { month: "long" }),
                              })),
                              selectedId: String(i.month),
                              selectedLabel: E.formatDate(new Date(2024, i.month - 1, 1), { month: "long" }),
                              onSelect: (e) => {
                                b({ month: Number(e) })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customMonth.label",
                              defaultMessage: "In",
                              description: "Label for the custom schedule month row",
                            }),
                            variant: "nested",
                          })
                        : null,
                      "monthly" === i.frequency || "yearly" === i.frequency
                        ? (0, a.jsx)(el.ic, {
                            control: (0, a.jsx)(J.j, {
                              value: i.monthDays,
                              onChange: (e) => {
                                b({ monthDays: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customMonthDay.label",
                              defaultMessage: "On days",
                              description: "Label for the custom schedule days of month row",
                            }),
                            variant: "nested",
                          })
                        : null,
                      "hourly" === i.frequency
                        ? (0, a.jsx)(el.ic, {
                            control: (0, a.jsx)(ee.w, {
                              ariaLabel: E.formatMessage({
                                id: "inbox.automations.customMinute.ariaLabel",
                                defaultMessage: "Minute past the hour",
                                description: "Accessible label for the custom hourly schedule minute input",
                              }),
                              max: 59,
                              min: 0,
                              value: i.minute,
                              onChange: (e) => {
                                b({ minute: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customMinute.label",
                              defaultMessage: "At minute",
                              description: "Label for the custom hourly schedule minute row",
                            }),
                            variant: "nested",
                          })
                        : (0, a.jsx)(el.ic, {
                            control: (0, a.jsx)(R.b, {
                              value: i.time,
                              timeZone: T,
                              onChange: (e) => {
                                b({ time: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customStartTime.label",
                              defaultMessage: "Start time",
                              description: "Label for the time a custom recurring scheduled task starts",
                            }),
                            variant: "nested",
                          }),
                    ],
                  })
                : null),
            (j[71] = i),
            (j[72] = E),
            (j[73] = T),
            (j[74] = b),
            (j[75] = w))
          : (w = j[75]),
        j[76] !== G || j[77] !== w || j[78] !== m || j[79] !== h || j[80] !== g || j[81] !== f || j[82] !== v
          ? ((A = (0, a.jsxs)("div", { className: m, children: [h, g, f, v, G, w] })),
            (j[76] = G),
            (j[77] = w),
            (j[78] = m),
            (j[79] = h),
            (j[80] = g),
            (j[81] = f),
            (j[82] = v),
            (j[83] = A))
          : (A = j[83]),
        j[84] !== l || j[85] !== A || j[86] !== p || j[87] !== y
          ? ((_ = (0, a.jsxs)(l, { title: p, children: [y, A] })),
            (j[84] = l),
            (j[85] = A),
            (j[86] = p),
            (j[87] = y),
            (j[88] = _))
          : (_ = j[88]),
        _
      )
    }
    function ed(e) {
      return { id: String(e), label: String(e) }
    }
    function ec(e) {
      let { id: t } = e
      return t
    }
    function eu(e) {
      let { id: t } = e
      return t
    }
    function em(e) {
      return (0, a.jsx)(Q.Option, { value: e.id, children: e.label }, e.id)
    }
    function eh(e) {
      let { id: t } = e
      return t
    }
    function eg(e) {
      let { id: t } = e
      return t
    }
    let ef = (0, W.YK)({
        intervalUnit: {
          id: "automations.schedule.intervalUnit",
          defaultMessage: "{unit, select, hour {hours} other {minutes}}",
          description: "Unit option beside a task's numeric repeat interval; unit is hour or minute",
        },
        hourly: {
          id: "inbox.automations.customFrequency.hourly",
          defaultMessage: "Hourly",
          description: "Custom scheduled task frequency option for hours",
        },
        daily: {
          id: "inbox.automations.customFrequency.daily",
          defaultMessage: "Daily",
          description: "Custom scheduled task frequency option for days",
        },
        weekly: {
          id: "inbox.automations.customFrequency.weekly",
          defaultMessage: "Weekly",
          description: "Custom scheduled task frequency option for weeks",
        },
        monthly: {
          id: "inbox.automations.customFrequency.monthly",
          defaultMessage: "Monthly",
          description: "Custom scheduled task frequency option for months",
        },
        yearly: {
          id: "inbox.automations.customFrequency.yearly",
          defaultMessage: "Yearly",
          description: "Custom scheduled task frequency option for years",
        },
        hourlyUnit: {
          id: "inbox.automations.customFrequencyUnit.hours",
          defaultMessage: "{count, plural, one {hour} other {hours}}",
          description: "Unit shown after a custom hourly schedule interval",
        },
        dailyUnit: {
          id: "inbox.automations.customFrequencyUnit.days",
          defaultMessage: "{count, plural, one {day} other {days}}",
          description: "Unit shown after a custom daily schedule interval",
        },
        weeklyUnit: {
          id: "inbox.automations.customFrequencyUnit.weeks",
          defaultMessage: "{count, plural, one {week} other {weeks}}",
          description: "Unit shown after a custom weekly schedule interval",
        },
        monthlyUnit: {
          id: "inbox.automations.customFrequencyUnit.months",
          defaultMessage: "{count, plural, one {month} other {months}}",
          description: "Unit shown after a custom monthly schedule interval",
        },
        yearlyUnit: {
          id: "inbox.automations.customFrequencyUnit.years",
          defaultMessage: "{count, plural, one {year} other {years}}",
          description: "Unit shown after a custom yearly schedule interval",
        },
      }),
      ep = { hourly: ef.hourly, daily: ef.daily, weekly: ef.weekly, monthly: ef.monthly, yearly: ef.yearly },
      ey = {
        hourly: ef.hourlyUnit,
        daily: ef.dailyUnit,
        weekly: ef.weeklyUnit,
        monthly: ef.monthlyUnit,
        yearly: ef.yearlyUnit,
      }
    var eb = n("Ks4B"),
      ex = n("iG6x"),
      ev = n("ZZgR"),
      ew = n("HOLv")
    function eA(e) {
      let t,
        n,
        o,
        r,
        c,
        m,
        h,
        g,
        f,
        p,
        b = (0, s.c)(109),
        {
          ariaLabel: x,
          disabled: v,
          error: w,
          options: A,
          selectedId: _,
          selectedLabel: j,
          selectedIcon: k,
          searchPlaceholder: T,
          onSelect: C,
        } = e,
        M = void 0 !== v && v,
        E = (0, d.useId)(),
        N = (0, d.useRef)(null),
        [S, D] = (0, d.useState)(!1),
        [L, I] = (0, d.useState)(""),
        U = null != w || void 0,
        G = null != w ? E : void 0
      ;(b[0] !== w || b[1] !== E
        ? ((t = null != w ? (0, a.jsx)("span", { id: E, className: "sr-only", children: w }) : null),
          (b[0] = w),
          (b[1] = E),
          (b[2] = t))
        : (t = b[2]),
        b[3] !== w
          ? ((n =
              null != w
                ? (0, a.jsx)(y.E, {
                    variant: "caution",
                    children: (0, a.jsx)(u.A, {
                      id: "automation.schedule.unsupportedInterval",
                      defaultMessage: "Unsupported",
                      description:
                        "Badge beside a selected automation interval that the current owner's schedule policy does not allow. The user must choose a supported interval to save.",
                    }),
                  })
                : null),
            (b[3] = w),
            (b[4] = n))
          : (n = b[4]),
        b[5] !== j
          ? ((o = (0, a.jsx)("span", { className: "truncate", children: j })), (b[5] = j), (b[6] = o))
          : (o = b[6]),
        b[7] !== k || b[8] !== o
          ? ((r = (0, a.jsxs)("span", {
              className: "flex min-w-0 flex-1 items-center gap-1.5 text-start",
              children: [k, o],
            })),
            (b[7] = k),
            (b[8] = o),
            (b[9] = r))
          : (r = b[9]),
        b[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(ew.I, { asset: ex.K })), (b[10] = c))
          : (c = b[10]),
        b[11] !== x || b[12] !== M || b[13] !== U || b[14] !== G || b[15] !== t || b[16] !== n || b[17] !== r
          ? ((m = (0, a.jsxs)(l.$, {
              className: "max-w-full min-w-0 font-normal",
              "aria-label": x,
              "aria-invalid": U,
              "aria-describedby": G,
              disabled: M,
              color: "secondary",
              variant: "outline",
              size: "xl",
              gutterSize: "md",
              iconSize: "sm",
              pill: !1,
              block: !0,
              children: [t, n, r, c],
            })),
            (b[11] = x),
            (b[12] = M),
            (b[13] = U),
            (b[14] = G),
            (b[15] = t),
            (b[16] = n),
            (b[17] = r),
            (b[18] = m))
          : (m = b[18]))
      let P = m
      if (null != T) {
        let e, t, n, s, l, o, r, d, c, m, h, g, f, p, y, v, j, k, E, N, U, G, R, O, H, z, q
        if (
          b[19] !== x ||
          b[20] !== M ||
          b[21] !== w ||
          b[22] !== C ||
          b[23] !== S ||
          b[24] !== A ||
          b[25] !== L ||
          b[26] !== T ||
          b[27] !== _ ||
          b[28] !== P
        ) {
          let u,
            G = L.trim().toLocaleLowerCase()
          ;((l = A.filter((e) => `${e.id} ${e.label}`.toLocaleLowerCase().includes(G))),
            (s = i.m),
            (N = w),
            (U = !S && void 0),
            (E = "inline-flex w-full min-w-0"),
            (n = ev.A),
            (h = !0),
            (g = S),
            b[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (e) => {
                  ;(D(e), I(""))
                }),
                (b[50] = f))
              : (f = b[50]),
            (p = M),
            (y = "end"),
            (v = "sm"),
            (j = "list"),
            (k = P),
            (t = ev.G.Root),
            (d = T),
            (c = _),
            b[51] !== L || b[52] !== T
              ? ((m = (0, a.jsx)(ev.G.Input, { placeholder: T, value: L, onValueChange: I })),
                (b[51] = L),
                (b[52] = T),
                (b[53] = m))
              : (m = b[53]),
            (e = ev.G.List),
            (o = x),
            b[54] !== M || b[55] !== C || b[56] !== _
              ? ((u = (e) =>
                  (0, a.jsx)(
                    ev.G.Item,
                    {
                      value: e.id,
                      disabled: M,
                      icon: e.icon,
                      rightIcon: e.id === _ ? (0, a.jsx)(ew.I, { asset: eb.G }) : void 0,
                      onSelect: () => {
                        ;(C(e.id), D(!1), I(""))
                      },
                      children: e.label,
                    },
                    e.id,
                  )),
                (b[54] = M),
                (b[55] = C),
                (b[56] = _),
                (b[57] = u))
              : (u = b[57]),
            (r = l.map(u)),
            (b[19] = x),
            (b[20] = M),
            (b[21] = w),
            (b[22] = C),
            (b[23] = S),
            (b[24] = A),
            (b[25] = L),
            (b[26] = T),
            (b[27] = _),
            (b[28] = P),
            (b[29] = e),
            (b[30] = t),
            (b[31] = n),
            (b[32] = s),
            (b[33] = l),
            (b[34] = o),
            (b[35] = r),
            (b[36] = d),
            (b[37] = c),
            (b[38] = m),
            (b[39] = h),
            (b[40] = g),
            (b[41] = f),
            (b[42] = p),
            (b[43] = y),
            (b[44] = v),
            (b[45] = j),
            (b[46] = k),
            (b[47] = E),
            (b[48] = N),
            (b[49] = U))
        } else
          ((e = b[29]),
            (t = b[30]),
            (n = b[31]),
            (s = b[32]),
            (l = b[33]),
            (o = b[34]),
            (r = b[35]),
            (d = b[36]),
            (c = b[37]),
            (m = b[38]),
            (h = b[39]),
            (g = b[40]),
            (f = b[41]),
            (p = b[42]),
            (y = b[43]),
            (v = b[44]),
            (j = b[45]),
            (k = b[46]),
            (E = b[47]),
            (N = b[48]),
            (U = b[49]))
        return (
          b[58] !== l.length
            ? ((G =
                0 === l.length
                  ? (0, a.jsx)("div", {
                      role: "status",
                      className: "px-row-x py-row-y text-sm text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "workspaceAgents.schedules.noMatchingTimeZones",
                        defaultMessage: "No matching time zones",
                        description: "Empty result in the searchable time zone selector for an agent automation",
                      }),
                    })
                  : null),
              (b[58] = l.length),
              (b[59] = G))
            : (G = b[59]),
          b[60] !== e || b[61] !== o || b[62] !== r || b[63] !== G
            ? ((R = (0, a.jsxs)(e, { "aria-label": o, children: [r, G] })),
              (b[60] = e),
              (b[61] = o),
              (b[62] = r),
              (b[63] = G),
              (b[64] = R))
            : (R = b[64]),
          b[65] !== t || b[66] !== d || b[67] !== c || b[68] !== m || b[69] !== R
            ? ((O = (0, a.jsxs)(t, { label: d, defaultValue: c, children: [m, R] })),
              (b[65] = t),
              (b[66] = d),
              (b[67] = c),
              (b[68] = m),
              (b[69] = R),
              (b[70] = O))
            : (O = b[70]),
          b[71] !== n ||
          b[72] !== h ||
          b[73] !== g ||
          b[74] !== f ||
          b[75] !== p ||
          b[76] !== y ||
          b[77] !== v ||
          b[78] !== j ||
          b[79] !== k ||
          b[80] !== O
            ? ((H = (0, a.jsx)(n, {
                modal: h,
                open: g,
                onOpenChange: f,
                disabled: p,
                align: y,
                contentWidth: v,
                contentMaxHeight: j,
                triggerButton: k,
                children: O,
              })),
              (b[71] = n),
              (b[72] = h),
              (b[73] = g),
              (b[74] = f),
              (b[75] = p),
              (b[76] = y),
              (b[77] = v),
              (b[78] = j),
              (b[79] = k),
              (b[80] = O),
              (b[81] = H))
            : (H = b[81]),
          b[82] !== E || b[83] !== H
            ? ((z = (0, a.jsx)("span", { className: E, children: H })), (b[82] = E), (b[83] = H), (b[84] = z))
            : (z = b[84]),
          b[85] !== s || b[86] !== N || b[87] !== U || b[88] !== z
            ? ((q = (0, a.jsx)(s, { content: N, forceOpen: U, children: z })),
              (b[85] = s),
              (b[86] = N),
              (b[87] = U),
              (b[88] = z),
              (b[89] = q))
            : (q = b[89]),
          q
        )
      }
      let R = !S && void 0
      if (
        (b[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (e) => {
              let t = N.current?.querySelector('[data-selected="true"]')
              null != t &&
                (e.preventDefault(),
                t.focus({ preventScroll: !0 }),
                requestAnimationFrame(() => {
                  t.scrollIntoView({ block: "nearest" })
                }))
            }),
            (b[90] = h))
          : (h = b[90]),
        b[91] !== M || b[92] !== C || b[93] !== A || b[94] !== _)
      ) {
        let e
        ;(b[96] !== M || b[97] !== C || b[98] !== _
          ? ((e = (e) =>
              (0, a.jsx)(
                H.ms.Item,
                {
                  disabled: M,
                  "data-selected": e.id === _,
                  leftIcon: e.icon,
                  rightIconAsset: e.id === _ ? eb.G : void 0,
                  onSelect: () => {
                    C(e.id)
                  },
                  children: e.label,
                },
                e.id,
              )),
            (b[96] = M),
            (b[97] = C),
            (b[98] = _),
            (b[99] = e))
          : (e = b[99]),
          (g = A.map(e)),
          (b[91] = M),
          (b[92] = C),
          (b[93] = A),
          (b[94] = _),
          (b[95] = g))
      } else g = b[95]
      return (
        b[100] !== M || b[101] !== S || b[102] !== g || b[103] !== P
          ? ((f = (0, a.jsx)("span", {
              className: "inline-flex w-full min-w-0",
              children: (0, a.jsx)(H.Ab, {
                open: S,
                onOpenChange: D,
                scrollFade: !0,
                disabled: M,
                modal: !0,
                align: "end",
                contentRef: N,
                onOpenAutoFocus: h,
                contentWidth: "sm",
                contentMaxHeight: "list",
                triggerButton: P,
                children: g,
              }),
            })),
            (b[100] = M),
            (b[101] = S),
            (b[102] = g),
            (b[103] = P),
            (b[104] = f))
          : (f = b[104]),
        b[105] !== w || b[106] !== R || b[107] !== f
          ? ((p = (0, a.jsx)(i.m, { content: w, forceOpen: R, children: f })),
            (b[105] = w),
            (b[106] = R),
            (b[107] = f),
            (b[108] = p))
          : (p = b[108]),
        p
      )
    }
    var e_ = "title-_ZnNd1"
    function ej(e) {
      let t,
        n,
        l,
        o,
        r,
        m,
        h,
        g,
        f,
        p,
        y,
        x,
        A,
        j,
        k,
        T,
        C,
        M,
        E,
        N,
        D,
        L,
        I,
        U,
        G,
        q,
        W,
        Y,
        $,
        Z,
        K,
        V,
        Q,
        X,
        J,
        ee,
        et,
        en,
        ea,
        es,
        el,
        ei,
        eo,
        ed,
        ec,
        eu,
        em,
        eh = (0, s.c)(179),
        {
          agentName: eg,
          channelBinding: ef,
          trigger: ep,
          destinations: ey,
          canEdit: eb,
          pending: ex,
          error: ev,
          onClose: ew,
          onSave: ej,
          onDelete: eU,
          onEnabledChange: eG,
          onSaveAndRun: eP,
          runMode: eR,
          notice: eO,
          showBackButton: eH,
          saveDisabled: ez,
          onInteraction: eq,
        } = e,
        eB = void 0 === eR ? "preview" : eR,
        eW = void 0 === eH || eH,
        eF = void 0 !== ez && ez,
        eY = (0, c.A)(),
        [e$, eZ] = (0, d.useState)(ep?.instructions ?? "")
      eh[0] !== ep
        ? ((t = null == ep ? new Intl.DateTimeFormat().resolvedOptions().timeZone : (ep.tz ?? "UTC")),
          (eh[0] = ep),
          (eh[1] = t))
        : (t = eh[1])
      let [eK, eV] = (0, d.useState)(t)
      eh[2] !== ep?.rules
        ? ((n = () =>
            (ep?.rules ?? [{ freq: "weekly", hour: 8, minute: 0, byweekday: [0, 1, 2, 3, 4], interval: 1 }]).map(eD)),
          (eh[2] = ep?.rules),
          (eh[3] = n))
        : (n = eh[3])
      let [eQ, eX] = (0, d.useState)(n),
        [eJ, e0] = (0, d.useState)(null),
        e1 = ep?.channel_binding ?? ef
      eh[4] !== ey || eh[5] !== e1 ? ((l = (0, S.XL)(ey, e1)), (eh[4] = ey), (eh[5] = e1), (eh[6] = l)) : (l = eh[6])
      let e2 = l
      eh[7] !== eJ || eh[8] !== ey || eh[9] !== e2
        ? ((o =
            ey.find((e) => {
              let { id: t } = e
              return t === eJ
            }) ?? e2),
          (eh[7] = eJ),
          (eh[8] = ey),
          (eh[9] = e2),
          (eh[10] = o))
        : (o = eh[10])
      let e3 = o
      eh[11] !== ef || eh[12] !== e3?.binding || eh[13] !== ep?.channel_binding
        ? ((r = e3?.binding ?? ep?.channel_binding ?? ef ?? { type: "chatgpt" }),
          (eh[11] = ef),
          (eh[12] = e3?.binding),
          (eh[13] = ep?.channel_binding),
          (eh[14] = r))
        : (r = eh[14])
      let e5 = r,
        e4 = e3?.parentTriggerId ?? (e3 === e2 ? ep?.parent_trigger_id : void 0)
      if (
        eh[15] !== e5 ||
        eh[16] !== eb ||
        eh[17] !== e$ ||
        eh[18] !== eY ||
        eh[19] !== eq ||
        eh[20] !== e4 ||
        eh[21] !== ex ||
        eh[22] !== eQ ||
        eh[23] !== eF ||
        eh[24] !== eK ||
        eh[25] !== ep
      ) {
        let e,
          t,
          n,
          s,
          l,
          i,
          o,
          r = eQ.map(eS)
        if (eh[39] !== eK) {
          M = !0
          try {
            new Intl.DateTimeFormat(void 0, { timeZone: eK })
          } catch {
            M = !1
          }
          ;((eh[39] = eK), (eh[40] = M))
        } else M = eh[40]
        eh[41] !== eY.locale || eh[42] !== eK
          ? ((e = [...new Set([eK, "UTC", ...Intl.supportedValuesOf("timeZone")])].map((e) => {
              let t = e
              try {
                let n = new Intl.DateTimeFormat(eY.locale, { timeZone: e, timeZoneName: "longGeneric" })
                  .formatToParts(new Date("2026-01-01T00:00:00Z"))
                  .find(eN)?.value
                null != n && (t = `${n} – ${e.split("/").at(-1)?.replaceAll("_", " ")}`)
              } catch {}
              return { id: e, label: t }
            })),
            (eh[41] = eY.locale),
            (eh[42] = eK),
            (eh[43] = e))
          : (e = eh[43])
        let d = e,
          c = !eb || ex
        ;(eh[44] !== eY
          ? ((t = eY.formatMessage({
              id: "workspaceAgents.schedules.timezoneLabel",
              defaultMessage: "Schedule time zone",
              description: "Accessible label for editing a schedule's IANA time zone",
            })),
            (eh[44] = eY),
            (eh[45] = t))
          : (t = eh[45]),
          eh[46] !== eY || eh[47] !== M
            ? ((n = M
                ? void 0
                : eY.formatMessage({
                    id: "workspaceAgents.schedules.invalidTimezone",
                    defaultMessage: "Choose a valid time zone",
                    description: "Validation error for an invalid saved schedule time zone",
                  })),
              (eh[46] = eY),
              (eh[47] = M),
              (eh[48] = n))
            : (n = eh[48]),
          eh[49] !== eY
            ? ((s = eY.formatMessage({
                id: "workspaceAgents.schedules.searchTimeZones",
                defaultMessage: "Search time zones",
                description: "Placeholder in the searchable time zone selector for an agent automation",
              })),
              (eh[49] = eY),
              (eh[50] = s))
            : (s = eh[50]),
          eh[51] !== eK || eh[52] !== d
            ? ((l =
                d.find((e) => {
                  let { id: t } = e
                  return t === eK
                })?.label ?? eK),
              (eh[51] = eK),
              (eh[52] = d),
              (eh[53] = l))
            : (l = eh[53]),
          eh[54] !== eq
            ? ((i = (e) => {
                ;(eV(e), eq?.({ actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE", schedule: {} }))
              }),
              (eh[54] = eq),
              (eh[55] = i))
            : (i = eh[55]),
          eh[56] !== c ||
          eh[57] !== t ||
          eh[58] !== n ||
          eh[59] !== s ||
          eh[60] !== l ||
          eh[61] !== i ||
          eh[62] !== eK ||
          eh[63] !== d
            ? ((o = (0, a.jsx)(eA, {
                disabled: c,
                ariaLabel: t,
                error: n,
                options: d,
                searchPlaceholder: s,
                selectedId: eK,
                selectedLabel: l,
                onSelect: i,
              })),
              (eh[56] = c),
              (eh[57] = t),
              (eh[58] = n),
              (eh[59] = s),
              (eh[60] = l),
              (eh[61] = i),
              (eh[62] = eK),
              (eh[63] = d),
              (eh[64] = o))
            : (o = eh[64]),
          (T = o),
          (C = r.every(eE)),
          (h = "slack" === e5.type && !e4),
          (m = eb && !ex && !eF && e$.length <= 6e3 && M && C && eQ.length > 0 && !h),
          (g = ep),
          (f = "SCHEDULE"),
          (p = ep?.enabled ?? !0),
          (y = e$),
          (x = eK),
          (A = e5),
          (j = "slack" === e5.type ? e4 : void 0),
          (k = r.filter(eM)),
          (eh[15] = e5),
          (eh[16] = eb),
          (eh[17] = e$),
          (eh[18] = eY),
          (eh[19] = eq),
          (eh[20] = e4),
          (eh[21] = ex),
          (eh[22] = eQ),
          (eh[23] = eF),
          (eh[24] = eK),
          (eh[25] = ep),
          (eh[26] = m),
          (eh[27] = h),
          (eh[28] = g),
          (eh[29] = f),
          (eh[30] = p),
          (eh[31] = y),
          (eh[32] = x),
          (eh[33] = A),
          (eh[34] = j),
          (eh[35] = k),
          (eh[36] = T),
          (eh[37] = C),
          (eh[38] = M))
      } else
        ((m = eh[26]),
          (h = eh[27]),
          (g = eh[28]),
          (f = eh[29]),
          (p = eh[30]),
          (y = eh[31]),
          (x = eh[32]),
          (A = eh[33]),
          (j = eh[34]),
          (k = eh[35]),
          (T = eh[36]),
          (C = eh[37]),
          (M = eh[38]))
      eh[65] !== g ||
      eh[66] !== f ||
      eh[67] !== p ||
      eh[68] !== y ||
      eh[69] !== x ||
      eh[70] !== A ||
      eh[71] !== j ||
      eh[72] !== k
        ? ((E = {
            ...g,
            type: f,
            enabled: p,
            instructions: y,
            tz: x,
            channel_binding: A,
            parent_trigger_id: j,
            rules: k,
          }),
          (eh[65] = g),
          (eh[66] = f),
          (eh[67] = p),
          (eh[68] = y),
          (eh[69] = x),
          (eh[70] = A),
          (eh[71] = j),
          (eh[72] = k),
          (eh[73] = E))
        : (E = eh[73])
      let e6 = E
      eh[74] !== eY || eh[75] !== eB
        ? ((N =
            "published" === eB
              ? eY.formatMessage({
                  id: "workspaceAgents.schedules.saveAndRunTooltip",
                  defaultMessage: "Save and run the published agent",
                  description:
                    "Tooltip for the Run button, which saves the automation before starting the published agent",
                })
              : eY.formatMessage({
                  id: "workspaceAgents.schedules.saveAndRunPreviewTooltip",
                  defaultMessage: "Save and run preview",
                  description:
                    "Tooltip for the Run button, which saves the automation before starting a preview of the agent draft",
                })),
          (eh[74] = eY),
          (eh[75] = eB),
          (eh[76] = N))
        : (N = eh[76])
      let e7 = N
      ;(eh[77] !== m || eh[78] !== e6 || eh[79] !== ej
        ? ((D = (e) => {
            ;(e.preventDefault(), m && ej(e6))
          }),
          (eh[77] = m),
          (eh[78] = e6),
          (eh[79] = ej),
          (eh[80] = D))
        : (D = eh[80]),
        eh[81] !== ew || eh[82] !== ex || eh[83] !== eW
          ? ((L = eW
              ? (0, a.jsxs)(O.$, {
                  color: "ghost",
                  size: "iconCircleLg",
                  type: "button",
                  disabled: ex,
                  onClick: ew,
                  children: [
                    (0, a.jsx)(_.KBq, {}),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: (0, a.jsx)(u.A, {
                        id: "workspaceAgents.schedules.back",
                        defaultMessage: "Back",
                        description: "Returns to the automation list without saving the schedule",
                      }),
                    }),
                  ],
                })
              : null),
            (eh[81] = ew),
            (eh[82] = ex),
            (eh[83] = eW),
            (eh[84] = L))
          : (L = eh[84]),
        eh[85] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, a.jsx)(w.c7, {
              className: "min-w-0 flex-1",
              titleClassName: e_,
              title: (0, a.jsx)(v.L3, {
                className: e_,
                children: (0, a.jsx)(u.A, {
                  id: "workspaceAgents.schedules.editor.title",
                  defaultMessage: "Automations",
                  description: "Title of the editor for a Workspace Agent's scheduled run",
                }),
              }),
            })),
            (eh[85] = I))
          : (I = eh[85]),
        eh[86] !== eb ||
        eh[87] !== eY ||
        eh[88] !== eG ||
        eh[89] !== eq ||
        eh[90] !== ex ||
        eh[91] !== eQ ||
        eh[92] !== ep?.enabled
          ? ((U =
              eb && (null != eG || eQ.some(eC))
                ? (0, a.jsxs)(H.Ab, {
                    align: "end",
                    contentWidth: "menu",
                    triggerButton: (0, a.jsx)(z.p, {
                      disabled: ex,
                      label: eY.formatMessage({
                        id: "workspaceAgents.schedules.options",
                        defaultMessage: "Automation options",
                        description: "Opens schedule type and pause or resume actions for this automation",
                      }),
                    }),
                    children: [
                      null != eG
                        ? (0, a.jsx)(H.ms.Item, {
                            LeftIcon: ep?.enabled === !1 ? _.Iz7 : _.Ov7,
                            disabled: ex,
                            onSelect: () => eG(ep?.enabled === !1),
                            children:
                              ep?.enabled === !1
                                ? (0, a.jsx)(u.A, {
                                    id: "workspaceAgents.schedules.resume",
                                    defaultMessage: "Resume",
                                    description: "Resumes a paused Workspace Agent schedule",
                                  })
                                : (0, a.jsx)(u.A, {
                                    id: "workspaceAgents.schedules.pause",
                                    defaultMessage: "Pause",
                                    description: "Pauses a Workspace Agent schedule",
                                  }),
                          })
                        : null,
                      eQ.map((e, t) =>
                        null == e.config.oneTimeDate
                          ? (0, a.jsx)(
                              H.ms.Item,
                              {
                                disabled: ex || "custom" === e.config.mode,
                                onSelect: () => {
                                  ;(eX((e) =>
                                    e.map((e, n) =>
                                      n === t ? { ...e, config: (0, P.dl)(e.config, "custom"), dirty: !0 } : e,
                                    ),
                                  ),
                                    eq?.({
                                      actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE",
                                      schedule: { scheduleType: eI("custom") },
                                    }))
                                },
                                children: (0, a.jsx)(u.A, {
                                  id: "workspaceAgents.schedules.customOption",
                                  defaultMessage:
                                    "{count, plural, one {Custom schedule} other {Custom schedule for rule {number}}}",
                                  description: "Opens custom recurrence controls for the selected automation rule",
                                  values: { count: eQ.length, number: t + 1 },
                                }),
                              },
                              t,
                            )
                          : null,
                      ),
                    ],
                  })
                : null),
            (eh[86] = eb),
            (eh[87] = eY),
            (eh[88] = eG),
            (eh[89] = eq),
            (eh[90] = ex),
            (eh[91] = eQ),
            (eh[92] = ep?.enabled),
            (eh[93] = U))
          : (U = eh[93]),
        eh[94] !== L || eh[95] !== U
          ? ((G = (0, a.jsx)(w.OO, {
              children: (0, a.jsxs)("div", {
                className: "flex min-h-12 items-center gap-0.5 pe-8",
                children: [L, I, U],
              }),
            })),
            (eh[94] = L),
            (eh[95] = U),
            (eh[96] = G))
          : (G = eh[96]),
        eh[97] !== ev
          ? ((q = null == ev ? null : (0, a.jsx)(b.l, { type: "error", content: ev })), (eh[97] = ev), (eh[98] = q))
          : (q = eh[98]),
        eh[99] !== eb || eh[100] !== h
          ? ((W =
              !eb || h
                ? (0, a.jsx)(B, {
                    children: eb
                      ? (0, a.jsx)(u.A, {
                          id: "workspaceAgents.schedules.missingChannel",
                          defaultMessage: "Reconnect this channel before updating the automation.",
                          description: "Notice when a missing Slack connection prevents saving an agent schedule",
                        })
                      : (0, a.jsx)(u.A, {
                          id: "workspaceAgents.schedules.readOnly",
                          defaultMessage: "You can view this automation, but you don’t have permission to update it.",
                          description: "Notice when permissions prevent editing an agent schedule",
                        }),
                  })
                : null),
            (eh[99] = eb),
            (eh[100] = h),
            (eh[101] = W))
          : (W = eh[101]))
      let e8 = !eb || ex
      if (eh[102] !== eq || eh[103] !== eQ || eh[104] !== eK || eh[105] !== T || eh[106] !== M) {
        let e
        ;(eh[108] !== eq || eh[109] !== eK || eh[110] !== T || eh[111] !== M
          ? ((e = (e, t) =>
              (0, a.jsx)(
                er,
                {
                  timeZone: M ? eK : void 0,
                  scheduleConfig: e.config,
                  timeControl: (0, a.jsxs)("div", {
                    className: "mt-5 grid min-w-0 grid-cols-2 gap-2",
                    children: [
                      (0, a.jsx)(R.b, {
                        appearance: "field",
                        value: e.config.time,
                        onChange: (e) => {
                          ;(eq?.({
                            actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE",
                            schedule: {},
                          }),
                            eX((n) =>
                              n.map((n, a) => (a === t ? { ...n, config: { ...n.config, time: e }, dirty: !0 } : n)),
                            ))
                        },
                      }),
                      T,
                    ],
                  }),
                  onUpdateScheduleDraft: (n) => {
                    let a = eI(n.mode)
                    ;(eq?.({
                      actionType:
                        a === eI(e.config.mode)
                          ? "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE"
                          : "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE",
                      schedule: { scheduleType: a },
                    }),
                      eX((e) => e.map((e, a) => (a === t ? { ...e, config: n, dirty: !0 } : e))))
                  },
                },
                t,
              )),
            (eh[108] = eq),
            (eh[109] = eK),
            (eh[110] = T),
            (eh[111] = M),
            (eh[112] = e))
          : (e = eh[112]),
          (Y = eQ.map(e)),
          (eh[102] = eq),
          (eh[103] = eQ),
          (eh[104] = eK),
          (eh[105] = T),
          (eh[106] = M),
          (eh[107] = Y))
      } else Y = eh[107]
      ;(eh[113] !== eQ || eh[114] !== T
        ? (($ = eQ.every(eT) ? T : null), (eh[113] = eQ), (eh[114] = T), (eh[115] = $))
        : ($ = eh[115]),
        eh[116] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, a.jsx)("span", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "workspaceAgents.schedules.destination",
                defaultMessage: "Channel",
                description: "Label for where an agent's scheduled run will appear",
              }),
            })),
            (eh[116] = Z))
          : (Z = eh[116]))
      let e9 = !eb || ex || null != ef
      ;(eh[117] !== eY
        ? ((K = eY.formatMessage({
            id: "workspaceAgents.schedules.destinationLabel",
            defaultMessage: "Automation destination",
            description: "Accessible label for choosing where a scheduled agent runs",
          })),
          (eh[117] = eY),
          (eh[118] = K))
        : (K = eh[118]),
        eh[119] !== ey ? ((V = ey.map(ek)), (eh[119] = ey), (eh[120] = V)) : (V = eh[120]))
      let te = e3?.id ?? ""
      return (
        eh[121] !== e5.type
          ? ((Q = (0, a.jsx)(eL, { type: e5.type })), (eh[121] = e5.type), (eh[122] = Q))
          : (Q = eh[122]),
        eh[123] !== e5.channel_id || eh[124] !== e5.type || eh[125] !== e3?.label || eh[126] !== eY
          ? ((X = "slack" === e5.type ? (e3?.label ?? `#${e5.channel_id}`) : eY.formatMessage(F.chatGptDestination)),
            (eh[123] = e5.channel_id),
            (eh[124] = e5.type),
            (eh[125] = e3?.label),
            (eh[126] = eY),
            (eh[127] = X))
          : (X = eh[127]),
        eh[128] !== ey || eh[129] !== eq
          ? ((J = (e) => {
              ;(e0(e),
                eq?.({
                  actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CHANNEL_CHANGE",
                  schedule: {
                    channelType:
                      ey.find((t) => t.id === e)?.binding.type === "slack"
                        ? "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK"
                        : "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT",
                  },
                }))
            }),
            (eh[128] = ey),
            (eh[129] = eq),
            (eh[130] = J))
          : (J = eh[130]),
        eh[131] !== e9 ||
        eh[132] !== K ||
        eh[133] !== V ||
        eh[134] !== te ||
        eh[135] !== Q ||
        eh[136] !== X ||
        eh[137] !== J
          ? ((ee = (0, a.jsx)("div", {
              className: "border-t border-default pt-5",
              children: (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  Z,
                  (0, a.jsx)(eA, {
                    disabled: e9,
                    ariaLabel: K,
                    options: V,
                    selectedId: te,
                    selectedIcon: Q,
                    selectedLabel: X,
                    onSelect: J,
                  }),
                ],
              }),
            })),
            (eh[131] = e9),
            (eh[132] = K),
            (eh[133] = V),
            (eh[134] = te),
            (eh[135] = Q),
            (eh[136] = X),
            (eh[137] = J),
            (eh[138] = ee))
          : (ee = eh[138]),
        eh[139] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = (0, a.jsx)(u.A, {
              id: "workspaceAgents.schedules.prompt",
              defaultMessage: "Additional instructions",
              description: "Label for optional instructions used when a scheduled agent runs",
            })),
            (eh[139] = et))
          : (et = eh[139]),
        eh[140] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, a.jsxs)("span", {
              className: "flex items-baseline gap-1 text-sm font-medium text-default select-none",
              children: [
                et,
                (0, a.jsx)("span", {
                  className: "font-normal text-tertiary",
                  children: (0, a.jsx)(u.A, {
                    id: "workspaceAgents.schedules.optional",
                    defaultMessage: "(Optional)",
                    description: "Indicates automation instructions can be left empty",
                  }),
                }),
              ],
            })),
            (eh[140] = en))
          : (en = eh[140]),
        eh[141] !== eY
          ? ((ea = eY.formatMessage({
              id: "workspaceAgents.schedules.instructionsLabel",
              defaultMessage: "Additional instructions",
              description: "Accessible label for optional automation instructions",
            })),
            (eh[141] = eY),
            (eh[142] = ea))
          : (ea = eh[142]),
        eh[143] !== eg || eh[144] !== eY
          ? ((es = eg?.trim()
              ? eY.formatMessage(
                  {
                    id: "workspaceAgents.schedules.namedInstructionsPlaceholder",
                    defaultMessage: "What should {agentName} do?",
                    description: "Placeholder asking what the named agent should do when this automation runs",
                  },
                  { agentName: eg },
                )
              : eY.formatMessage({
                  id: "workspaceAgents.schedules.instructionsPlaceholder",
                  defaultMessage: "What should I do?",
                  description: "Placeholder asking what the agent should do when this automation runs",
                })),
            (eh[143] = eg),
            (eh[144] = eY),
            (eh[145] = es))
          : (es = eh[145]),
        eh[146] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (e) => eZ(e.target.value)), (eh[146] = el))
          : (el = eh[146]),
        eh[147] !== e$ || eh[148] !== ea || eh[149] !== es
          ? ((ei = (0, a.jsxs)("label", {
              className: "flex flex-col gap-2",
              children: [
                en,
                (0, a.jsx)("textarea", {
                  className: "instructions-eaZOg_",
                  name: "instructions",
                  "aria-label": ea,
                  rows: 4,
                  placeholder: es,
                  maxLength: 6e3,
                  value: e$,
                  onChange: el,
                }),
              ],
            })),
            (eh[147] = e$),
            (eh[148] = ea),
            (eh[149] = es),
            (eh[150] = ei))
          : (ei = eh[150]),
        eh[151] !== C
          ? ((eo = C
              ? null
              : (0, a.jsx)(b.l, {
                  type: "error",
                  content: (0, a.jsx)(u.A, {
                    id: "workspaceAgents.schedules.invalidRule",
                    defaultMessage:
                      "Choose a repeating schedule with one time per rule, at least 15 minutes apart, without a year, end date, or numbered weekday",
                    description:
                      "Validation error for a recurrence that the Workspace Agent schedule service cannot represent",
                  }),
                })),
            (eh[151] = C),
            (eh[152] = eo))
          : (eo = eh[152]),
        eh[153] !== e8 || eh[154] !== Y || eh[155] !== $ || eh[156] !== ee || eh[157] !== ei || eh[158] !== eo
          ? ((ed = (0, a.jsxs)("fieldset", {
              disabled: e8,
              className: "flex min-w-0 flex-col gap-5",
              children: [Y, $, ee, ei, eo],
            })),
            (eh[153] = e8),
            (eh[154] = Y),
            (eh[155] = $),
            (eh[156] = ee),
            (eh[157] = ei),
            (eh[158] = eo),
            (eh[159] = ed))
          : (ed = eh[159]),
        eh[160] !== eO || eh[161] !== q || eh[162] !== W || eh[163] !== ed
          ? ((ec = (0, a.jsx)(w.OO, {
              className: "min-h-0 overflow-y-auto",
              children: (0, a.jsxs)("div", { className: "min-w-0 shrink-0", children: [eO, q, W, ed] }),
            })),
            (eh[160] = eO),
            (eh[161] = q),
            (eh[162] = W),
            (eh[163] = ed),
            (eh[164] = ec))
          : (ec = eh[164]),
        eh[165] !== eb ||
        eh[166] !== m ||
        eh[167] !== e6 ||
        eh[168] !== eU ||
        eh[169] !== eP ||
        eh[170] !== ex ||
        eh[171] !== e7 ||
        eh[172] !== ep
          ? ((eu =
              eb || null != eU
                ? (0, a.jsx)(w.OO, {
                    spacing: "large",
                    children: (0, a.jsxs)(w.Es, {
                      expandSingleButton: !1,
                      children: [
                        (0, a.jsxs)("div", {
                          className: "me-auto flex items-center gap-1",
                          children: [
                            eb && null != eP
                              ? (0, a.jsx)(i.m, {
                                  content: e7,
                                  children: (0, a.jsxs)(O.$, {
                                    color: "ghostActive",
                                    size: "dialog",
                                    radius: "full",
                                    "aria-label": e7,
                                    type: "button",
                                    disabled: !m,
                                    onClick: () => {
                                      eP(e6)
                                    },
                                    children: [
                                      (0, a.jsx)(_.Tv9, {}),
                                      (0, a.jsx)(u.A, {
                                        id: "workspaceAgents.schedules.saveAndRun",
                                        defaultMessage: "Run",
                                        description: "Button that saves this automation and then runs the agent",
                                      }),
                                    ],
                                  }),
                                })
                              : null,
                            null != eU
                              ? (0, a.jsxs)(O.$, {
                                  color: "ghostDanger",
                                  size: "dialog",
                                  radius: "full",
                                  type: "button",
                                  disabled: ex,
                                  onClick: (e) => eU(e.currentTarget),
                                  children: [
                                    (0, a.jsx)(_.cSG, {}),
                                    (0, a.jsx)(u.A, {
                                      id: "workspaceAgents.schedules.delete",
                                      defaultMessage: "Delete",
                                      description: "Deletes a Workspace Agent schedule after confirmation",
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                        eb
                          ? (0, a.jsx)(O.$, {
                              size: "dialogAction",
                              radius: "full",
                              type: "submit",
                              disabled: !m,
                              loading: ex,
                              children:
                                null == ep
                                  ? (0, a.jsx)(u.A, {
                                      id: "workspaceAgents.schedules.compactAdd",
                                      defaultMessage: "Add automation",
                                      description: "Creates a Workspace Agent automation",
                                    })
                                  : (0, a.jsx)(u.A, {
                                      id: "workspaceAgents.schedules.save",
                                      defaultMessage: "Update automation",
                                      description: "Saves a Workspace Agent automation",
                                    }),
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (eh[165] = eb),
            (eh[166] = m),
            (eh[167] = e6),
            (eh[168] = eU),
            (eh[169] = eP),
            (eh[170] = ex),
            (eh[171] = e7),
            (eh[172] = ep),
            (eh[173] = eu))
          : (eu = eh[173]),
        eh[174] !== D || eh[175] !== G || eh[176] !== ec || eh[177] !== eu
          ? ((em = (0, a.jsxs)(w.R4, {
              as: "form",
              variant: "chatgpt",
              className: "form-JXyvQT",
              size: "scrollable",
              onSubmit: D,
              children: [G, ec, eu],
            })),
            (eh[174] = D),
            (eh[175] = G),
            (eh[176] = ec),
            (eh[177] = eu),
            (eh[178] = em))
          : (em = eh[178]),
        em
      )
    }
    function ek(e) {
      let { id: t, label: n, binding: s } = e
      return { id: t, label: n, icon: (0, a.jsx)(eL, { type: s.type }) }
    }
    function eT(e) {
      return !["daily", "weekdays", "weekly", "monthly"].includes(e.config.mode)
    }
    function eC(e) {
      return null == e.config.oneTimeDate
    }
    function eM(e) {
      return null != e
    }
    function eE(e) {
      return null != e
    }
    function eN(e) {
      return "timeZoneName" === e.type
    }
    function eS(e) {
      return e.dirty ? (0, S.rR)(e.config) : e.original
    }
    function eD(e) {
      return { original: e, config: (0, S.BE)(e), dirty: !1 }
    }
    function eL(e) {
      let t,
        n = (0, s.c)(2),
        { type: l } = e
      return (
        n[0] !== l
          ? ((t =
              "slack" === l
                ? (0, a.jsx)(p.R, { alt: "", knownAppId: "slack", size: 20, fallback: (0, a.jsx)(k.A, {}) })
                : (0, a.jsx)(k.A, { "aria-hidden": !0, className: "size-5 shrink-0" })),
            (n[0] = l),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function eI(e) {
      return "hourly" === e
        ? "CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY"
        : ["daily", "weekdays", "weekly"].includes(e)
          ? "CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY"
          : "CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM"
    }
    var eU = n("qQGj"),
      eG = n("Ghh3")
    function eP(e) {
      let t,
        n,
        l,
        i,
        o,
        c,
        u,
        g,
        p = (0, s.c)(31),
        {
          accountId: y,
          agentId: b,
          channelBinding: x,
          initialSelectedScheduleId: w,
          versionScope: A,
          onPreviewRun: _,
          onClose: j,
          onCloseAutoFocus: k,
        } = e,
        E = void 0 === A ? "published" : A,
        N = (0, r.gh)(T.u),
        S = (0, m.Zp)(),
        D = (0, C.a)(),
        L = (0, d.useRef)(null)
      ;(p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => L.current?.abort()), (n = []), (p[0] = t), (p[1] = n))
        : ((t = p[0]), (n = p[1])),
        (0, d.useEffect)(t, n))
      let I = (0, r._U)(eU.M, b),
        [G, P] = (0, d.useState)(!1)
      return (
        p[2] !== I || p[3] !== j
          ? ((l = (e) => {
              e || I.isPending || j()
            }),
            (p[2] = I),
            (p[3] = j),
            (p[4] = l))
          : (l = p[4]),
        p[5] !== k
          ? ((i = {
              onCloseAutoFocus: (e) => {
                null != k && (e.preventDefault(), k())
              },
            }),
            (p[5] = k),
            (p[6] = i))
          : (i = p[6]),
        p[7] !== y || p[8] !== b || p[9] !== D || p[10] !== S || p[11] !== j || p[12] !== N
          ? ((o = async (e) => {
              if (null != L.current) return null
              let t = new AbortController()
              return (
                (L.current = t),
                P(!0),
                (async function (e, t, n, a, s) {
                  let { authenticatedUserId: l, accountUserId: i } = e.get(h.PO),
                    o = e.get(h.o8),
                    r = () => {
                      let n = e.get(h.PO)
                      return (
                        !s.aborted &&
                        null != o &&
                        e.get(h.o8) === o &&
                        null != l &&
                        null != i &&
                        n.authenticatedUserId === l &&
                        n.accountUserId === i &&
                        e.get(h.chatGptAuthenticatedAccountId$) === t &&
                        !0 === e.get(M.XL)
                      )
                    }
                  if (null == l || null == o || !r()) return null
                  let d = { accountId: t, userId: o },
                    c = () => {
                      if ((s.throwIfAborted(), !r())) throw Error("The active account changed during an automation run")
                    },
                    u = await eG.Request.safePost("/hermes/agent/{agent_id}/triggers/{trigger_id}/run_now", {
                      parameters: { path: { agent_id: n, trigger_id: a } },
                      expectedIdentity: d,
                      assertRequestCurrent: c,
                      signal: AbortSignal.timeout(45e3),
                    }).catch((e) => {
                      if (r()) throw e
                      return null
                    })
                  if (null == u || !r()) return null
                  if ("dispatched" !== u.status && "completed" !== u.status)
                    throw Error("The automation was not started")
                  e.query.invalidate(U.sy, n)
                  let m = u.conversation_id?.trim()
                  if (m) return { conversationId: m }
                  let g = u.run_id?.trim()
                  if (!g) return { conversationId: null }
                  for (let e = 0; e < 6; e++) {
                    if ((e > 0 && (await new Promise((e) => setTimeout(e, 350))), !r())) return null
                    try {
                      let e = await eG.Request.safeGet("/hermes/agent/{agent_id}/conversations", {
                        parameters: { path: { agent_id: n }, query: { limit: 10 } },
                        expectedIdentity: d,
                        assertRequestCurrent: c,
                        signal: s,
                      })
                      if (!r()) return null
                      let t = e.items.find((e) => e.fiber_id === g)?.id.trim()
                      if (t) return { conversationId: t }
                    } catch {
                      return r() ? { conversationId: null } : null
                    }
                  }
                  return { conversationId: null }
                })(N, y, b, e, t.signal)
                  .then((e) => (e?.conversationId != null && D() && (j(), S((0, f.mv)(e.conversationId))), e))
                  .finally(() => {
                    ;((L.current = null), D() && P(!1))
                  })
              )
            }),
            (p[7] = y),
            (p[8] = b),
            (p[9] = D),
            (p[10] = S),
            (p[11] = j),
            (p[12] = N),
            (p[13] = o))
          : (o = p[13]),
        p[14] !== D || p[15] !== j || p[16] !== _
          ? ((c =
              null == _
                ? void 0
                : (e) => (
                    P(!0),
                    Promise.resolve()
                      .then(() => _(e))
                      .then(() => {
                        D() && j()
                      })
                      .finally(() => {
                        D() && P(!1)
                      })
                  )),
            (p[14] = D),
            (p[15] = j),
            (p[16] = _),
            (p[17] = c))
          : (c = p[17]),
        p[18] !== y ||
        p[19] !== b ||
        p[20] !== x ||
        p[21] !== w ||
        p[22] !== G ||
        p[23] !== o ||
        p[24] !== c ||
        p[25] !== E
          ? ((u = (0, a.jsx)(eR, {
              accountId: y,
              agentId: b,
              channelBinding: x,
              initialSelectedScheduleId: w,
              versionScope: E,
              previewPending: G,
              onPublishedRun: o,
              onPreviewRun: c,
            })),
            (p[18] = y),
            (p[19] = b),
            (p[20] = x),
            (p[21] = w),
            (p[22] = G),
            (p[23] = o),
            (p[24] = c),
            (p[25] = E),
            (p[26] = u))
          : (u = p[26]),
        p[27] !== l || p[28] !== i || p[29] !== u
          ? ((g = (0, a.jsx)(v.lG, {
              size: "responsiveSheet",
              variant: "chatgpt",
              contentClassName: "dialog-KHYIQJ",
              open: !0,
              onOpenChange: l,
              contentProps: i,
              children: u,
            })),
            (p[27] = l),
            (p[28] = i),
            (p[29] = u),
            (p[30] = g))
          : (g = p[30]),
        g
      )
    }
    function eR(e) {
      let t,
        n,
        m,
        f,
        A,
        L,
        P,
        R,
        O,
        H,
        z,
        q,
        W,
        Y,
        $,
        Z,
        K,
        V,
        Q,
        X,
        J,
        ee,
        et,
        en,
        ea = (0, s.c)(98),
        {
          accountId: es,
          agentId: el,
          channelBinding: ei,
          versionScope: eo,
          initialSelectedScheduleId: er,
          previewPending: ed,
          onPublishedRun: ec,
          onPreviewRun: eu,
        } = e,
        em = (0, r.gh)(T.u),
        eh = (0, c.A)(),
        eg = (0, C.a)(),
        ef = (0, r.Ul)(h.o8),
        [ep, ey] = (0, d.useState)(!1),
        { data: eb, isPending: ex, error: ev, refetch: ew } = (0, r._U)(eU.k, el),
        eA = "published" === eo
      ea[0] !== eA ? ((t = { enabled: eA }), (ea[0] = eA), (ea[1] = t)) : (t = ea[1])
      let { data: ek, error: eT, isPending: eC, refetch: eM } = (0, r._U)(U.a3, el, t),
        eE = "draft" === eo
      ea[2] !== eE ? ((n = { enabled: eE }), (ea[2] = eE), (ea[3] = n)) : (n = ea[3])
      let { data: eN, error: eS, isPending: eD, refetch: eL } = (0, r._U)(N.m9, el, n),
        eI = "draft" === eo ? eN : ek,
        eG = "draft" === eo ? eN?.draft_version : ek?.latest_published_version,
        eP = "draft" === eo ? eS : eT,
        eR = "draft" === eo ? eD : eC,
        eq = eN?.agent.viewer_capability === "hermes_admin" || eN?.agent.viewer_capability === "hermes_write",
        { accountUserId: eB, authenticatedUserId: eW } = (0, r.Ul)(h.PO),
        eF = !0 === (0, r.Ul)(M.XL),
        eY = !0 === (0, r.Ul)(M.lF),
        e$ = (0, r._U)(eU.M, el),
        eZ = e$.isPending || ed,
        eK = (0, d.useId)(),
        eV = (0, d.useRef)(null),
        eQ = (0, d.useRef)(null),
        [eX, eJ] = (0, d.useState)(er ?? null),
        [e0, e1] = (0, d.useState)(null),
        [e2, e3] = (0, d.useState)(null),
        e5 = eb?.filter(
          (e) =>
            "SCHEDULE" === e.trigger.type &&
            (null == ei ||
              ("slack" === ei.type
                ? e.trigger.channel_binding?.type === "slack" &&
                  e.trigger.channel_binding.channel_id === ei.channel_id &&
                  e.trigger.channel_binding.link_id === ei.link_id
                : e.trigger.channel_binding?.type !== "slack")),
        ),
        e4 = ei?.type === "chatgpt" || ei?.type === "slack" ? e5?.some(ez) : !!e5?.length,
        e6 =
          e2 ??
          (null == er &&
            null != eb &&
            !e4 &&
            null == ev &&
            null == eP &&
            !eR &&
            eF &&
            null != eB &&
            null != eG &&
            ("published" === eo || eq)),
        [e7, e8] = (0, d.useState)(null),
        e9 = eG?.config?.tools?.connectors?.length !== 0,
        te = e6 && e9
      ea[4] !== es || ea[5] !== el || ea[6] !== ef || ea[7] !== te || ea[8] !== eo
        ? ((m = (0, E.As)({ accountId: es, userId: ef, agentId: el, versionScope: eo, enabled: te })),
          (ea[4] = es),
          (ea[5] = el),
          (ea[6] = ef),
          (ea[7] = te),
          (ea[8] = eo),
          (ea[9] = m))
        : (m = ea[9])
      let { data: tt, isFetching: tn, error: ta, refetch: ts } = (0, o.I)(m)
      ea[10] !== tt ? ((f = tt?.some(eH)), (ea[10] = tt), (ea[11] = f)) : (f = ea[11])
      let tl = f
      ea[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, a.jsx)(u.A, {
            id: "workspaceAgents.schedules.checkingConnections",
            defaultMessage: "Checking app connections…",
            description: "Status while checking personal app connections before scheduling an agent",
          })),
          (ea[12] = A))
        : (A = ea[12])
      let ti = A,
        to = e5?.find((e) => {
          let { id: t } = e
          return t === eX
        }),
        tr = to?.trigger.type === "SCHEDULE" ? to.trigger : null,
        td = e5?.find((e) => {
          let { id: t } = e
          return t === e0
        }),
        tc = eF && null != eB && null != eG && ("published" === eo || eq),
        tu = (0, S.jd)(eG),
        tm = [{ id: "chatgpt", label: eh.formatMessage(F.chatGptDestination), binding: { type: "chatgpt" } }]
      if ((eY && eI?.agent.creator_id === eB && tm.push(...tu), null != ei)) {
        let e = (0, S.XL)(tm, ei)
        tm = null == e ? [] : [e]
      }
      ea[13] !== eF || ea[14] !== eY || ea[15] !== eI?.agent.creator_id || ea[16] !== eB
        ? ((L = (e) =>
            (0, S.Uk)({ resource: e, userId: eB, agentCreatorId: eI?.agent.creator_id, canAccess: eF, canShare: eY })),
          (ea[13] = eF),
          (ea[14] = eY),
          (ea[15] = eI?.agent.creator_id),
          (ea[16] = eB),
          (ea[17] = L))
        : (L = ea[17])
      let th = L
      ea[18] !== eh || ea[19] !== e8
        ? ((P = (e) =>
            e8(
              (e instanceof Error ? e.message : null) ||
                eh.formatMessage({
                  id: "workspaceAgents.schedules.actionError",
                  defaultMessage: "Could not update the automation. Try again",
                  description: "Error shown when changing an agent schedule fails",
                }),
            )),
          (ea[18] = eh),
          (ea[19] = e8),
          (ea[20] = P))
        : (P = ea[20])
      let tg = P
      ea[21] !== e8
        ? ((R = () => {
            ;(eJ(null), e3(!1), e1(null), e8(null))
          }),
          (ea[21] = e8),
          (ea[22] = R))
        : (R = ea[22])
      let tf = R
      ea[23] !== es ||
      ea[24] !== el ||
      ea[25] !== eW ||
      ea[26] !== eh ||
      ea[27] !== eu ||
      ea[28] !== em ||
      ea[29] !== e8 ||
      ea[30] !== eB ||
      ea[31] !== eo
        ? ((O = async (e) => {
            let t = em.get(h.PO)
            if (
              null == eu ||
              "SCHEDULE" !== e.trigger.type ||
              em.get(h.chatGptAuthenticatedAccountId$) !== es ||
              t.accountUserId !== eB ||
              t.authenticatedUserId !== eW ||
              null == eW ||
              !0 !== em.get(M.XL)
            )
              return
            e8(null)
            let n = (0, G.sA)(
              em,
              el,
              {
                actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW",
                schedule: {
                  scheduleTriggerId: e.id,
                  channelType:
                    e.trigger.channel_binding?.type === "slack"
                      ? "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK"
                      : "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT",
                },
              },
              eo,
            )
            try {
              ;(await eu(
                e.trigger.instructions?.trim() ||
                  eh.formatMessage({
                    id: "workspaceAgents.schedules.previewFallbackPrompt",
                    defaultMessage: "Start execution",
                    description:
                      "First user message in an agent draft preview when the automation has no additional instructions",
                  }),
              ),
                n(!0))
            } catch (e) {
              ;(n(!1),
                e8(
                  e instanceof Error
                    ? e.message
                    : eh.formatMessage({
                        id: "workspaceAgents.schedules.previewError",
                        defaultMessage: "Could not start the preview. Try again",
                        description: "Error shown when the saved automation cannot start an agent draft preview",
                      }),
                ))
            }
          }),
          (ea[23] = es),
          (ea[24] = el),
          (ea[25] = eW),
          (ea[26] = eh),
          (ea[27] = eu),
          (ea[28] = em),
          (ea[29] = e8),
          (ea[30] = eB),
          (ea[31] = eo),
          (ea[32] = O))
        : (O = ea[32])
      let tp = O
      ea[33] !== es ||
      ea[34] !== el ||
      ea[35] !== eh ||
      ea[36] !== eg ||
      ea[37] !== ec ||
      ea[38] !== eZ ||
      ea[39] !== ef ||
      ea[40] !== em ||
      ea[41] !== e8
        ? ((H = async (e) => {
            let t = () => em.get(h.chatGptAuthenticatedAccountId$) === es && em.get(h.o8) === ef
            if (eZ || null == ef || !t()) return
            ;(e8(null), ey(!1))
            let n = (0, G.sA)(
              em,
              el,
              {
                actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW",
                schedule: {
                  scheduleTriggerId: e.id,
                  channelType:
                    "SCHEDULE" === e.trigger.type && e.trigger.channel_binding?.type === "slack"
                      ? "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK"
                      : "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT",
                },
              },
              "published",
            )
            try {
              let a = await ec(e.id)
              if (!t()) return
              ;(n(null != a), null != a && eg() && ey(!0))
            } catch {
              if (!t()) return
              ;(n(!1),
                eg() &&
                  e8(
                    eh.formatMessage({
                      id: "workspaceAgents.schedules.runFailed",
                      defaultMessage: "Could not start the automation. Try again",
                      description: "Error when starting an immediate run of a published agent automation",
                    }),
                  ))
            }
          }),
          (ea[33] = es),
          (ea[34] = el),
          (ea[35] = eh),
          (ea[36] = eg),
          (ea[37] = ec),
          (ea[38] = eZ),
          (ea[39] = ef),
          (ea[40] = em),
          (ea[41] = e8),
          (ea[42] = H))
        : (H = ea[42])
      let ty = H,
        tb = e5?.map((e, t, n) => {
          if ("SCHEDULE" !== e.trigger.type) return null
          let s = e.trigger,
            { canDelete: o } = th(e),
            r = eF && e.owner_user_id === eB && (s.channel_binding?.type !== "slack" || eI?.agent.creator_id === eB),
            d = D(s, eh),
            c =
              s.channel_binding?.type === "slack"
                ? ((0, S.XL)(tu, s.channel_binding)?.label ?? `#${s.channel_binding.channel_id}`)
                : eh.formatMessage(F.chatGptDestination),
            m = r && ("draft" === eo ? null != eu : eI?.latest_published_version != null),
            h =
              "draft" === eo
                ? eh.formatMessage({
                    id: "workspaceAgents.schedules.runPreview",
                    defaultMessage: "Run preview",
                    description: "Starts a preview of the agent draft with this automation's instructions",
                  })
                : eh.formatMessage({
                    id: "workspaceAgents.schedules.runPublished",
                    defaultMessage: "Run published version",
                    description:
                      "Starts this automation immediately with the published agent and its saved destination",
                  }),
            g = eh.formatMessage({
              id: "workspaceAgents.schedules.deleteRow",
              defaultMessage: "Delete automation",
              description:
                "Accessible label and tooltip for an automation row's delete button. Opens a confirmation before deleting the automation.",
            })
          return (0, a.jsx)(
            j.fy,
            {
              density: "profile",
              surface: "plain",
              showDivider: t < n.length - 1,
              ariaLabel: d,
              ariaDescribedBy: `${eK}-${e.id}-details${!1 === s.enabled ? ` ${eK}-${e.id}-paused` : ""}`,
              isSelected: eX === e.id,
              hasInteractiveContent: !0,
              isDisabled: eZ,
              title: d,
              onSelect: () => {
                ;((0, G.OW)(
                  em,
                  el,
                  {
                    actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_SELECT",
                    schedule: { scheduleTriggerId: e.id },
                  },
                  eo,
                ),
                  eJ(e.id),
                  e8(null))
              },
              children: (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-2 px-4",
                children: [
                  (0, a.jsx)("span", {
                    className: "-ms-1 me-2 flex shrink-0 items-center",
                    children:
                      s.channel_binding?.type === "slack"
                        ? (0, a.jsx)(p.R, { alt: "", knownAppId: "slack", size: 20, fallback: (0, a.jsx)(_.JZN, {}) })
                        : (0, a.jsx)(k.A, { "aria-hidden": !0, className: "size-5 shrink-0" }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsx)("span", {
                            className: "truncate text-sm leading-5 font-medium",
                            children: "published" === eo ? D(s, eh) : d,
                          }),
                          !1 === s.enabled
                            ? (0, a.jsx)("span", {
                                id: `${eK}-${e.id}-paused`,
                                children: (0, a.jsx)(y.E, {
                                  variant: "outline",
                                  children: (0, a.jsx)(u.A, {
                                    id: "workspaceAgents.schedules.paused",
                                    defaultMessage: "Paused",
                                    description: "Status badge for a paused Workspace Agent automation",
                                  }),
                                }),
                              })
                            : null,
                        ],
                      }),
                      (0, a.jsx)("div", {
                        id: `${eK}-${e.id}-details`,
                        className: "truncate text-sm leading-5 text-secondary",
                        children: s.instructions
                          ? (0, a.jsx)(u.A, {
                              id: "workspaceAgents.schedules.rowDescription",
                              defaultMessage: "{destination} · {instructions}",
                              description: "Destination and instructions beneath an agent automation's schedule",
                              values: { destination: c, instructions: s.instructions },
                            })
                          : c,
                      }),
                    ],
                  }),
                  m || o
                    ? (0, a.jsxs)("div", {
                        className:
                          "pointer-events-auto flex shrink-0 items-center gap-1.5 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 pointer-coarse:opacity-100",
                        children: [
                          m
                            ? (0, a.jsx)(i.m, {
                                content: h,
                                children: (0, a.jsx)(l.$, {
                                  "aria-label": h,
                                  color: "primary",
                                  variant: "outline",
                                  size: "xl",
                                  iconSize: "lg",
                                  pill: !0,
                                  uniform: !0,
                                  "aria-disabled": eZ,
                                  onClick: () => {
                                    eZ || ("draft" === eo ? tp(e) : ty(e))
                                  },
                                  children: (0, a.jsx)(_.Tv9, {}),
                                }),
                              })
                            : null,
                          o
                            ? (0, a.jsx)(i.m, {
                                content: g,
                                children: (0, a.jsx)(l.$, {
                                  "aria-label": g,
                                  color: "primary",
                                  variant: "outline",
                                  size: "xl",
                                  iconSize: "lg",
                                  pill: !0,
                                  uniform: !0,
                                  disabled: eZ,
                                  onClick: (t) => {
                                    ;((eV.current = t.currentTarget), e1(e.id), e8(null))
                                  },
                                  children: (0, a.jsx)(_.zwW, {}),
                                }),
                              })
                            : null,
                        ],
                      })
                    : null,
                ],
              }),
            },
            e.id,
          )
        })
      if (null != ev || null != eP) {
        let e
        ;(ea[43] !== ew || ea[44] !== eL || ea[45] !== eM || ea[46] !== eo
          ? ((e = (0, a.jsx)(I.p, {
              onRetry: () => {
                ;(ew(), "draft" === eo ? eL() : eM())
              },
            })),
            (ea[43] = ew),
            (ea[44] = eL),
            (ea[45] = eM),
            (ea[46] = eo),
            (ea[47] = e))
          : (e = ea[47]),
          (tb = e))
      } else if (ex || eR) {
        let e
        ;(ea[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(x.Q, {
              children: (0, a.jsx)(u.A, {
                id: "workspaceAgents.schedules.loading",
                defaultMessage: "Loading automations…",
                description: "Loading state for an agent's schedules",
              }),
            })),
            (ea[48] = e))
          : (e = ea[48]),
          (tb = e))
      } else if (e5?.length === 0) {
        let e
        ;(ea[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(x.Q, {
              children: (0, a.jsx)(u.A, {
                id: "workspaceAgents.schedules.empty",
                defaultMessage: "No automations yet",
                description: "Empty state when an agent has no accessible scheduled runs",
              }),
            })),
            (ea[49] = e))
          : (e = ea[49]),
          (tb = e))
      }
      ea[50] !== eI || ea[51] !== eo
        ? ((z =
            "draft" === eo && null != eI && null == eI.latest_published_version
              ? (0, a.jsx)("div", {
                  className: "mb-3",
                  children: (0, a.jsx)(B, {
                    variant: "soft",
                    children: (0, a.jsx)(u.A, {
                      id: "workspaceAgents.schedules.unpublishedDraft",
                      defaultMessage: "Automations won't run until you create your agent",
                      description:
                        "Notice in the agent editor's automation dialog when configuring a saved draft that has never been published",
                    }),
                  }),
                })
              : null),
          (ea[50] = eI),
          (ea[51] = eo),
          (ea[52] = z))
        : (z = ea[52])
      let tx = z
      ;(ea[53] !== eh
        ? ((q = eh.formatMessage({
            id: "workspaceAgents.schedules.automationName",
            defaultMessage: "this automation",
            description: "Name used when confirming deletion of an unnamed Workspace Agent schedule",
          })),
          (ea[53] = eh),
          (ea[54] = q))
        : (q = ea[54]),
        ea[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = () => {
              eV.current?.isConnected ? eV.current.focus() : eQ.current?.focus()
            }),
            (ea[55] = W))
          : (W = ea[55]),
        ea[56] !== eZ
          ? ((Y = () => {
              eZ || e1(null)
            }),
            (ea[56] = eZ),
            (ea[57] = Y))
          : (Y = ea[57]))
      let tv = (0, a.jsx)(g.o, {
        open: null != td,
        isPending: eZ,
        name: q,
        onCloseAutoFocus: W,
        onCancel: Y,
        onConfirm: () => {
          null == td ||
            eZ ||
            (e8(null),
            e$.mutate(
              { accountId: es, versionScope: eo, resource: td, delete: !0 },
              {
                onSuccess: tf,
                onError: (e) => {
                  ;(e1(null), tg(e))
                },
              },
            ))
        },
      })
      if (e6 || null != tr) {
        let e, t, n
        return (
          ea[58] !== tn || ea[59] !== ta || ea[60] !== e6 || ea[61] !== tl || ea[62] !== e9
            ? ((e =
                e6 && e9 && tn && !tl && null == ta
                  ? (0, a.jsx)("span", { role: "status", className: "sr-only", children: ti })
                  : null),
              (ea[58] = tn),
              (ea[59] = ta),
              (ea[60] = e6),
              (ea[61] = tl),
              (ea[62] = e9),
              (ea[63] = e))
            : (e = ea[63]),
          ea[64] !== ts ||
          ea[65] !== tn ||
          ea[66] !== ta ||
          ea[67] !== e6 ||
          ea[68] !== tl ||
          ea[69] !== e9 ||
          ea[70] !== e8
            ? ((t =
                e6 && e9 && (null != ta || tl)
                  ? (0, a.jsx)(b.l, {
                      type: ta ? "error" : "normal",
                      content: tn
                        ? ti
                        : (0, a.jsx)(u.A, {
                            id: "workspaceAgents.schedules.repairConnections",
                            defaultMessage:
                              "Review this agent's app connections in <link>ChatGPT settings</link>, then check again to continue",
                            description:
                              "Recovery instructions with a link to app connection settings before creating an automation",
                            values: { link: eO },
                          }),
                      primaryCtaText: (0, a.jsx)(u.A, {
                        id: "workspaceAgents.schedules.checkConnections",
                        defaultMessage: "Check again",
                        description: "Rechecks the agent's app connections after the user repairs them",
                      }),
                      isPrimaryCtaDisabled: tn,
                      onPrimaryCtaClick: () => {
                        ;(e8(null), ts())
                      },
                    })
                  : null),
              (ea[64] = ts),
              (ea[65] = tn),
              (ea[66] = ta),
              (ea[67] = e6),
              (ea[68] = tl),
              (ea[69] = e9),
              (ea[70] = e8),
              (ea[71] = t))
            : (t = ea[71]),
          ea[72] !== e || ea[73] !== t || ea[74] !== tx
            ? ((n = (0, a.jsxs)(a.Fragment, { children: [tx, e, t] })),
              (ea[72] = e),
              (ea[73] = t),
              (ea[74] = tx),
              (ea[75] = n))
            : (n = ea[75]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              tv,
              (0, a.jsx)(
                ej,
                {
                  agentName: eG?.name,
                  channelBinding: ei,
                  onDelete:
                    null != to && th(to).canDelete
                      ? (e) => {
                          ;((eV.current = e), e1(to.id), e8(null))
                        }
                      : void 0,
                  onEnabledChange:
                    null != to && null != tr && th(to).canEdit
                      ? (e) => {
                          ;(e8(null),
                            e$.mutate(
                              { accountId: es, versionScope: eo, resource: to, trigger: { ...tr, enabled: e } },
                              { onError: tg },
                            ))
                        }
                      : void 0,
                  showBackButton: null != e5 && e5.length > 0,
                  trigger: tr,
                  destinations: tm,
                  canEdit: null == to ? tc : th(to).canEdit,
                  pending: eZ,
                  saveDisabled:
                    (null != ei && 0 === tm.length) || (e6 && e9 && (tn || null == tt || null != ta || !0 === tl)),
                  notice: n,
                  onInteraction: (e) =>
                    (0, G.OW)(em, el, { ...e, schedule: { ...e.schedule, scheduleTriggerId: to?.id } }, eo),
                  error: e7,
                  onClose: tf,
                  runMode: "published" === eo ? "published" : "preview",
                  onSaveAndRun:
                    "draft" === eo && null == eu
                      ? void 0
                      : async (e) => {
                          e8(null)
                          try {
                            let t = await e$.mutateAsync({ accountId: es, versionScope: eo, resource: to, trigger: e })
                            if (null == t) return
                            ;(e3(!1), eJ(t.id), "published" === eo ? await ty(t) : await tp(t))
                          } catch (e) {
                            tg(e)
                          }
                        },
                  onSave: (e) => {
                    ;(e8(null),
                      e$.mutate(
                        { accountId: es, versionScope: eo, resource: to, trigger: e },
                        { onSuccess: tf, onError: tg },
                      ))
                  },
                },
                to?.id ?? "new",
              ),
            ],
          })
        )
      }
      ;(ea[76] !== ep
        ? (($ = ep
            ? (0, a.jsx)(b.l, {
                type: "success",
                content: (0, a.jsx)(u.A, {
                  id: "workspaceAgents.schedules.runStarted",
                  defaultMessage: "Automation started. Its conversation will appear in agent activity.",
                  description:
                    "Confirmation that a scheduled agent run was accepted but its conversation is not yet available",
                }),
              })
            : null),
          (ea[76] = ep),
          (ea[77] = $))
        : ($ = ea[77]),
        ea[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, a.jsx)(w.c7, {
              titleClassName: e_,
              title: (0, a.jsx)(v.L3, {
                className: e_,
                children: (0, a.jsx)(u.A, {
                  id: "workspaceAgents.schedules.title",
                  defaultMessage: "Automations",
                  description: "Title of the list of a Workspace Agent's scheduled runs",
                }),
              }),
            })),
            (ea[78] = Z))
          : (Z = ea[78]),
        ea[79] !== $ ? ((K = (0, a.jsxs)(w.OO, { children: [$, Z] })), (ea[79] = $), (ea[80] = K)) : (K = ea[80]),
        ea[81] !== tx
          ? ((V = null == tx ? null : (0, a.jsx)("div", { className: "mb-4", children: tx })),
            (ea[81] = tx),
            (ea[82] = V))
          : (V = ea[82]))
      let tw = null != e5 && e5.length > 0
      ea[83] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = (0, a.jsx)("span", { className: "ms-3 me-2", children: (0, a.jsx)(_.ONy, {}) })), (ea[83] = Q))
        : (Q = ea[83])
      let tA = !tc || eZ
      return (
        ea[84] !== el || ea[85] !== em || ea[86] !== e8 || ea[87] !== eo
          ? ((X = () => {
              ;((0, G.OW)(em, el, { actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_ADD" }, eo),
                e3(!0),
                e8(null))
            }),
            (ea[84] = el),
            (ea[85] = em),
            (ea[86] = e8),
            (ea[87] = eo),
            (ea[88] = X))
          : (X = ea[88]),
        ea[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, a.jsx)("span", {
              className: "block text-sm leading-5 font-medium",
              children: (0, a.jsx)(u.A, {
                id: "workspaceAgents.schedules.add",
                defaultMessage: "Add automation",
                description: "Opens the form to schedule a Workspace Agent",
              }),
            })),
            (ea[89] = J))
          : (J = ea[89]),
        ea[90] !== tw || ea[91] !== tA || ea[92] !== X
          ? ((ee = (0, a.jsx)(j.fy, {
              density: "profile",
              surface: "plain",
              showDivider: tw,
              icon: Q,
              isSelected: !1,
              isDisabled: tA,
              onSelect: X,
              title: J,
            })),
            (ea[90] = tw),
            (ea[91] = tA),
            (ea[92] = X),
            (ea[93] = ee))
          : (ee = ea[93]),
        ea[94] !== e7
          ? ((et =
              null == e7
                ? null
                : (0, a.jsx)("div", { className: "my-4", children: (0, a.jsx)(b.l, { type: "error", content: e7 }) })),
            (ea[94] = e7),
            (ea[95] = et))
          : (et = ea[95]),
        ea[96] !== tb
          ? ((en = (0, a.jsx)("div", { className: "flex flex-col", children: tb })), (ea[96] = tb), (ea[97] = en))
          : (en = ea[97]),
        (0, a.jsxs)(w.R4, {
          size: "viewport",
          variant: "chatgpt",
          className: "list-SMJmm9",
          children: [
            K,
            (0, a.jsx)(w.OO, {
              children: (0, a.jsxs)("div", {
                ref: eQ,
                className: "flex flex-col",
                tabIndex: -1,
                children: [V, ee, et, en, tv],
              }),
            }),
          ],
        })
      )
    }
    function eO(e) {
      return (0, a.jsx)(A.G, {
        href: "https://chatgpt.com/#settings/Connectors",
        initiator: "external_link",
        openTarget: "external-browser",
        children: e,
      })
    }
    function eH(e) {
      return (
        "PERSONAL" === e.auth_type &&
        ["missing_link", "missing_actions", "needs_reconnect", "scope_upgrade_required"].includes(e.link_status)
      )
    }
    function ez(e) {
      let { trigger: t } = e
      return "SCHEDULE" === t.type && !1 !== t.enabled
    }
  },
  K2hS(e, t, n) {
    n.d(t, { q7: () => M, bL: () => x })
    var a = n("zd8w"),
      s = n("zWxU"),
      l = n("Fc3g"),
      i = n("XDr4"),
      o = n("kUVq"),
      r = n("Hj0L"),
      d = n("ABep"),
      c = Object.defineProperty,
      u = a.forwardRef(
        c(
          function (e, t) {
            let { pressed: n, defaultPressed: a, onPressedChange: s, ...i } = e,
              [c, u] = (0, r.i)({ prop: n, onChange: s, defaultProp: a ?? !1, caller: "Toggle" })
            return (0, d.jsx)(l.sG.button, {
              type: "button",
              "aria-pressed": c,
              "data-state": c ? "on" : "off",
              "data-disabled": e.disabled ? "" : void 0,
              ...i,
              ref: t,
              onClick: (0, o.mK)(e.onClick, () => {
                e.disabled || u(!c)
              }),
            })
          },
          "name",
          { value: "Toggle", configurable: !0 },
        ),
      ),
      m = n("k5JT"),
      h = Object.defineProperty,
      g = (e, t) => h(e, "name", { value: t, configurable: !0 }),
      f = "ToggleGroup",
      [p, y] = (0, s.A)(f, [i.RG]),
      b = (0, i.RG)(),
      x = a.forwardRef(
        g(function (e, t) {
          let { type: n, ...a } = e
          if ("single" === n) return (0, d.jsx)(A, { role: "radiogroup", ...a, ref: t })
          if ("multiple" === n) return (0, d.jsx)(_, { role: "toolbar", ...a, ref: t })
          throw Error(`Missing prop \`type\` expected on \`${f}\``)
        }, "ToggleGroup"),
      ),
      [v, w] = p(f),
      A = a.forwardRef(
        g(function (e, t) {
          let { value: n, defaultValue: s, onValueChange: l = g(() => {}, "onValueChange"), ...i } = e,
            [o, c] = (0, r.i)({ prop: n, defaultProp: s ?? "", onChange: l, caller: f })
          return (0, d.jsx)(v, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: a.useMemo(() => (o ? [o] : []), [o]),
            onItemActivate: c,
            onItemDeactivate: a.useCallback(() => c(""), [c]),
            children: (0, d.jsx)(T, { ...i, ref: t }),
          })
        }, "ToggleGroupImplSingle"),
      ),
      _ = a.forwardRef(
        g(function (e, t) {
          let { value: n, defaultValue: s, onValueChange: l = g(() => {}, "onValueChange"), ...i } = e,
            [o, c] = (0, r.i)({ prop: n, defaultProp: s ?? [], onChange: l, caller: f }),
            u = a.useCallback((e) => c((t = []) => [...t, e]), [c]),
            m = a.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c])
          return (0, d.jsx)(v, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: o,
            onItemActivate: u,
            onItemDeactivate: m,
            children: (0, d.jsx)(T, { ...i, ref: t }),
          })
        }, "ToggleGroupImplMultiple"),
      ),
      [j, k] = p(f),
      T = a.forwardRef(
        g(function (e, t) {
          let {
              __scopeToggleGroup: n,
              disabled: a = !1,
              rovingFocus: s = !0,
              orientation: o,
              dir: r,
              loop: c = !0,
              ...u
            } = e,
            h = b(n),
            g = (0, m.useDirection)(r),
            f = { dir: g, ...u }
          return (0, d.jsx)(j, {
            scope: n,
            rovingFocus: s,
            disabled: a,
            children: s
              ? (0, d.jsx)(i.bL, {
                  asChild: !0,
                  ...h,
                  orientation: o,
                  dir: g,
                  loop: c,
                  children: (0, d.jsx)(l.sG.div, { ...f, ref: t }),
                })
              : (0, d.jsx)(l.sG.div, { ...f, ref: t }),
          })
        }, "ToggleGroupImpl"),
      ),
      C = "ToggleGroupItem",
      M = a.forwardRef(
        g(function (e, t) {
          let n = w(C, e.__scopeToggleGroup),
            s = k(C, e.__scopeToggleGroup),
            l = b(e.__scopeToggleGroup),
            o = n.value.includes(e.value),
            r = s.disabled || e.disabled,
            c = { ...e, pressed: o, disabled: r },
            u = a.useRef(null)
          return s.rovingFocus
            ? (0, d.jsx)(i.q7, {
                asChild: !0,
                ...l,
                focusable: !r,
                active: o,
                ref: u,
                children: (0, d.jsx)(E, { ...c, ref: t }),
              })
            : (0, d.jsx)(E, { ...c, ref: t })
        }, "ToggleGroupItem"),
      ),
      E = a.forwardRef(
        g(function (e, t) {
          let { __scopeToggleGroup: n, value: a, ...s } = e,
            l = w(C, n),
            i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 },
            o = "single" === l.type ? i : void 0
          return (0, d.jsx)(u, {
            ...o,
            ...s,
            ref: t,
            onPressedChange: (e) => {
              e ? l.onItemActivate(a) : l.onItemDeactivate(a)
            },
          })
        }, "ToggleGroupItemImpl"),
      )
  },
}
//# sourceMappingURL=666535.19b6f124eb.js.map
