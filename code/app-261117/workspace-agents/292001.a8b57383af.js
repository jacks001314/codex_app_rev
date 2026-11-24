export const __rspack_esm_ids = [292001]
export const __webpack_modules__ = {
  ylLY(e, t, n) {
    let l = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { t: l })
  },
  taVj(e, t, n) {
    var l = n("ABep"),
      a = n("QosV"),
      s = n("oyxz"),
      i = n("Sm6l"),
      r = n("JNtf"),
      o = n("mUDD")
    n.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            n,
            d,
            u,
            c,
            m,
            g,
            h,
            f,
            p,
            y,
            x,
            b,
            _ = (0, a.c)(34),
            { isPending: v, name: j, onCancel: A, onCloseAutoFocus: w, onConfirm: T, open: M } = e
          _[0] !== w
            ? ((t = {
                onCloseAutoFocus: (e) => {
                  null != w && (e.preventDefault(), w())
                },
              }),
              (_[0] = w),
              (_[1] = t))
            : (t = _[1])
          let C = !v
          return (
            _[2] !== v || _[3] !== A
              ? ((n = (e) => {
                  e || v || A()
                }),
                (_[2] = v),
                (_[3] = A),
                (_[4] = n))
              : (n = _[4]),
            _[5] !== v || _[6] !== T
              ? ((d = (e) => {
                  ;(e.preventDefault(), v || T())
                }),
                (_[5] = v),
                (_[6] = T),
                (_[7] = d))
              : (d = _[7]),
            _[8] !== j
              ? ((u = (0, l.jsx)(r.L3, {
                  children: (0, l.jsx)(s.A, {
                    id: "inbox.automations.deleteConfirm.title",
                    defaultMessage: "Delete {name}?",
                    values: { name: (0, l.jsx)("strong", { className: "font-semibold text-default", children: j }) },
                  }),
                })),
                (_[8] = j),
                (_[9] = u))
              : (u = _[9]),
            _[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, l.jsx)(r.rr, {
                  children: (0, l.jsx)(s.A, {
                    id: "inbox.automations.deleteConfirm.descriptionNoPeriod",
                    defaultMessage: "This will permanently delete the scheduled task and stop future runs",
                  }),
                })),
                (_[10] = c))
              : (c = _[10]),
            _[11] !== u
              ? ((m = (0, l.jsx)(o.OO, { children: (0, l.jsx)(o.c7, { title: u, subtitle: c }) })),
                (_[11] = u),
                (_[12] = m))
              : (m = _[12]),
            _[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, l.jsx)(s.A, { id: "inbox.automations.deleteConfirm.cancel", defaultMessage: "Cancel" })),
                (_[13] = g))
              : (g = _[13]),
            _[14] !== v || _[15] !== A
              ? ((h = (0, l.jsx)(i.$, { color: "outline", disabled: v, onClick: A, children: g })),
                (_[14] = v),
                (_[15] = A),
                (_[16] = h))
              : (h = _[16]),
            _[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, l.jsx)(s.A, {
                  id: "inbox.automations.deleteConfirm.confirm",
                  defaultMessage: "Delete scheduled task",
                })),
                (_[17] = f))
              : (f = _[17]),
            _[18] !== v
              ? ((p = (0, l.jsx)(i.$, { color: "danger", loading: v, type: "submit", children: f })),
                (_[18] = v),
                (_[19] = p))
              : (p = _[19]),
            _[20] !== p || _[21] !== h
              ? ((y = (0, l.jsx)(o.OO, { children: (0, l.jsxs)(o.Es, { children: [h, p] }) })),
                (_[20] = p),
                (_[21] = h),
                (_[22] = y))
              : (y = _[22]),
            _[23] !== y || _[24] !== d || _[25] !== m
              ? ((x = (0, l.jsxs)(o.R4, { as: "form", onSubmit: d, children: [m, y] })),
                (_[23] = y),
                (_[24] = d),
                (_[25] = m),
                (_[26] = x))
              : (x = _[26]),
            _[27] !== v || _[28] !== M || _[29] !== t || _[30] !== x || _[31] !== C || _[32] !== n
              ? ((b = (0, l.jsx)(r.lG, {
                  open: M,
                  contentProps: t,
                  showDialogClose: C,
                  shouldIgnoreClickOutside: v,
                  onOpenChange: n,
                  children: x,
                })),
                (_[27] = v),
                (_[28] = M),
                (_[29] = t),
                (_[30] = x),
                (_[31] = C),
                (_[32] = n),
                (_[33] = b))
              : (b = _[33]),
            b
          )
        },
      },
    )
  },
  LxxF(e, t, n) {
    n.d(t, { WorkspaceAgentSchedulesDialog: () => eP })
    var l = n("ABep"),
      a = n("QosV"),
      s = n("hwkA"),
      i = n("slpy"),
      r = n("T0Rc"),
      o = n("qmMi"),
      d = n("zd8w"),
      u = n("Wf1j"),
      c = n("oyxz"),
      m = n("Ywss"),
      g = n("SPnB"),
      h = n("taVj"),
      f = n("jAnS"),
      p = n("FvYa"),
      y = n("TjgH"),
      x = n("MM0V"),
      b = n("LMw7"),
      _ = n("JNtf"),
      v = n("mUDD"),
      j = n("ZtSy"),
      A = n("bVeK"),
      w = n("zkPp"),
      T = n("lOWF"),
      M = n("OWtl"),
      C = n("soaw"),
      k = n("LNWO"),
      E = n("QxT8"),
      N = n("OQWN"),
      S = n("M2S2")
    function D(e, t) {
      let n = e.rules.map((e) => {
        let n = e.interval ?? 1,
          l = null != e.hour || e.byweekday?.length || e.bymonthday?.length
        if ("minutely" === e.freq && !l && null == e.minute)
          return t.formatMessage(
            {
              id: "workspaceAgents.schedules.summaryEveryMinute",
              defaultMessage: "Every {interval, plural, one {minute} other {# minutes}}",
            },
            { interval: n },
          )
        if ("hourly" === e.freq && !l && (null == e.minute || 0 === e.minute))
          return t.formatMessage(
            {
              id: "workspaceAgents.schedules.summaryEveryHour",
              defaultMessage: "Every {interval, plural, one {hour} other {# hours}}",
            },
            { interval: n },
          )
        if ("daily" === e.freq && 1 === n && null != e.hour && !e.byweekday?.length && !e.bymonthday?.length)
          return t.formatMessage(
            { id: "workspaceAgents.schedules.summaryEveryDay", defaultMessage: "Every day at {time}" },
            { time: I(t, e.hour, e.minute ?? 0) },
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
            { id: "workspaceAgents.schedules.summaryWeekdays", defaultMessage: "{weekdays} at {time}" },
            { weekdays: t.formatList(n), time: I(t, e.hour, e.minute ?? 0) },
          )
        }
        return null
      })
      return n.some((e) => null == e) ? (0, S._t)(e, t) : t.formatList(n.filter((e) => null != e))
    }
    function I(e, t, n) {
      let l = new Date(Date.UTC(2021, 0, 1, t, n)),
        a = new Intl.DateTimeFormat(e.locale, {
          hour: "numeric",
          ...(0 === n ? {} : { minute: "2-digit" }),
          timeZone: "UTC",
        }).formatToParts(l)
      return a
        .filter((e, t) => !("literal" === e.type && /^\s+$/u.test(e.value) && a[t + 1]?.type === "dayPeriod"))
        .map((e) => e.value)
        .join("")
    }
    var L = n("R4Ep"),
      U = n("KYL2"),
      G = n("A9LP"),
      P = n("odKs"),
      R = n("BCU4"),
      O = n("Sm6l"),
      H = n("bqtn"),
      q = n("f38C"),
      z = n("on57")
    function B(e) {
      let t,
        n,
        s,
        i,
        r = (0, a.c)(8),
        { children: o, variant: d } = e,
        u = "soft" === (void 0 === d ? "inline" : d) ? "rounded-2xl bg-secondary-soft text-default" : "text-info"
      return (
        r[0] !== u
          ? ((t = (0, z.A)("flex items-start gap-3 px-3 py-3 text-sm leading-5", u)), (r[0] = u), (r[1] = t))
          : (t = r[1]),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsx)(A.zOs, { className: "shrink-0" })), (r[2] = n))
          : (n = r[2]),
        r[3] !== o
          ? ((s = (0, l.jsx)("div", { className: "min-w-0 flex-1", children: o })), (r[3] = o), (r[4] = s))
          : (s = r[4]),
        r[5] !== t || r[6] !== s
          ? ((i = (0, l.jsxs)("aside", { className: t, children: [n, s] })), (r[5] = t), (r[6] = s), (r[7] = i))
          : (i = r[7]),
        i
      )
    }
    var F = n("Qgfj")
    let Y = (0, F.YK)({
      chatGptDestination: { id: "workspaceAgents.schedules.chatGptDestination", defaultMessage: "ChatGPT" },
    })
    var $ = n("K2hS"),
      W = n("UIGa"),
      Z = n("Cmnu"),
      K = n("pZwg"),
      V = n("fZ4G")
    let Q = ({
      value: e,
      onChange: t,
      children: n,
      block: a,
      pill: s = K.N.pill,
      variant: i,
      size: r = "md",
      gutterSize: o,
      className: u,
      onClick: c,
      ref: m,
      ...g
    }) => {
      let h = (0, d.useRef)(null),
        f = (0, d.useRef)(null),
        p = (0, d.useCallback)((e) => {
          let t = h.current,
            n = f.current
          if (!t || !n) return
          let l = t?.querySelector('[data-state="on"]')
          if (!l) return
          let a = t.clientWidth,
            s = Math.floor(l.clientWidth),
            i = l.offsetLeft
          if (
            (a - (s + i) < (Number.parseFloat(getComputedStyle(t).paddingRight) || 0) && (s -= 1),
            (n.style.width = `${Math.floor(s)}px`),
            (n.style.transform = `translateX(${i}px)`),
            t.scrollWidth > a)
          ) {
            let n = 0.15 * a,
              s = t.getBoundingClientRect(),
              i = l.getBoundingClientRect()
            if (i.left < s.left + n || i.right > s.right - n) {
              let n = i.left + i.width / 2 - (s.left + s.width / 2)
              e ? t.scrollBy({ left: n, behavior: "smooth" }) : t.scrollBy({ left: n, behavior: "instant" })
            }
          }
        }, [])
      return (
        (0, Z.wY)({
          ref: h,
          onResize: () => {
            let e = f.current
            if (!e) return
            let t = e.style.transition
            ;((e.style.transition = ""), p(!1), (e.style.transition = t))
          },
        }),
        (0, d.useLayoutEffect)(() => {
          let e = h.current,
            t = f.current
          e &&
            t &&
            (p(!!t.style.transition),
            t.style.transition ||
              (0, V.yQ)(() => {
                t.style.transition = "width 300ms var(--cubic-enter), transform 300ms var(--cubic-enter)"
              }))
        }, [p, e, r, o, s, i]),
        (0, l.jsxs)($.bL, {
          ref: (0, W.P)([h, m]),
          className: (0, z.A)("SegmentedControl-CujMkm", u),
          type: "single",
          value: e,
          loop: !1,
          onValueChange: (e) => {
            e && t && t(e)
          },
          onClick: c,
          "data-block": a ? "" : void 0,
          "data-pill": s ? "" : void 0,
          "data-variant": i,
          "data-size": r,
          "data-gutter-size": o,
          ...g,
          children: [(0, l.jsx)("div", { className: "SegmentedControlThumb-fJJYCA", ref: f }), n],
        })
      )
    }
    Q.Option = ({ children: e, ...t }) =>
      (0, l.jsx)($.q7, {
        className: "SegmentedControlOption-I_uCIR",
        ...t,
        onPointerEnter: V.Ny,
        children: (0, l.jsx)("span", { className: "relative", children: e }),
      })
    var X = n("oVAd"),
      J = n("hIjX"),
      ee = n("meRA"),
      et = n("cOBD"),
      en = n("gM9O"),
      el = n("dUCV"),
      ea = n("sn2N"),
      es = n("AWNZ")
    let ei = ["hourly", "daily", "weekly", "monthly", "yearly"],
      er = Array.from({ length: 12 }, (e, t) => t + 1)
    function eo(e) {
      let t,
        n,
        s,
        i,
        r,
        o,
        m,
        g,
        h,
        f,
        p,
        y,
        x,
        b,
        _,
        v,
        j,
        A,
        w = (0, a.c)(89),
        { scheduleConfig: T, timeZone: M, timeControl: C, onUpdateScheduleDraft: k } = e,
        E = (0, u.A)()
      w[0] !== T.intervalMinutes
        ? ((t = () => (null != T.intervalMinutes && T.intervalMinutes % 60 != 0 ? "minute" : "hour")),
          (w[0] = T.intervalMinutes),
          (w[1] = t))
        : (t = w[1])
      let [N, S] = (0, d.useState)(t),
        D = T.intervalMinutes ?? 60 * T.intervalHours,
        I = "hour" === N ? 60 : 1,
        L = null != T.intervalMinutes
      w[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["daily", "weekdays", "weekly"]), (w[2] = n))
        : (n = w[2])
      let U = n.includes(T.mode)
      if (
        w[3] !== D ||
        w[4] !== N ||
        w[5] !== E ||
        w[6] !== U ||
        w[7] !== k ||
        w[8] !== L ||
        w[9] !== T ||
        w[10] !== M ||
        w[11] !== I
      ) {
        let e = T.weekdays
        "daily" === T.mode ? (e = et.O0.map(eh)) : "weekdays" === T.mode && (e = et.O0.slice(0, 5).map(eg))
        let t = U ? "daily" : T.mode
        if (w[24] !== t || w[25] !== E || w[26] !== U || w[27] !== k || w[28] !== T) {
          let e, n, a, d, u
          ;(w[37] !== t
            ? ((e = (e) => !["weekdays", "weekly"].includes(e.id) && ("custom" !== e.id || "custom" === t)),
              (w[37] = t),
              (w[38] = e))
            : (e = w[38]),
            w[39] !== E
              ? ((n = (e) => ({ id: e.id, label: E.formatMessage(e.labelMessage) })), (w[39] = E), (w[40] = n))
              : (n = w[40]))
          let c = et.f0.filter(e).map(n)
          ;((r = T.monthDay ?? 1),
            (o = null != T.oneTimeDate || U || "monthly" === T.mode),
            w[41] !== T.customRrule || w[42] !== T.mode || w[43] !== T.oneTimeDate
              ? ((a = null == T.oneTimeDate && "custom" === T.mode ? (0, P.RD)(T.customRrule) : null),
                (w[41] = T.customRrule),
                (w[42] = T.mode),
                (w[43] = T.oneTimeDate),
                (w[44] = a))
              : (a = w[44]),
            (i = a),
            w[45] !== k || w[46] !== T
              ? ((d = (e) => {
                  k({ ...T, ...e })
                }),
                (w[45] = k),
                (w[46] = T),
                (w[47] = d))
              : (d = w[47]),
            (b = d),
            w[48] !== i || w[49] !== b
              ? ((u = (e) => {
                  null != i && b({ customRrule: (0, P.vQ)({ ...i, ...e }) })
                }),
                (w[48] = i),
                (w[49] = b),
                (w[50] = u))
              : (u = w[50]),
            (x = u),
            (s = ea.C),
            (p = null),
            (y =
              null == T.oneTimeDate
                ? (0, l.jsx)(Q, {
                    "aria-label": E.formatMessage({
                      id: "settings.automations.scheduleModeLabel",
                      defaultMessage: "Repeat schedule",
                    }),
                    className: "mb-5 font-normal",
                    block: !0,
                    pill: !0,
                    size: "lg",
                    gutterSize: "2xs",
                    variant: "form",
                    value: t,
                    onChange: (e) => {
                      e !== t && k((0, P.dl)(T, e))
                    },
                    children: c.map(em),
                  })
                : null),
            (w[24] = t),
            (w[25] = E),
            (w[26] = U),
            (w[27] = k),
            (w[28] = T),
            (w[29] = s),
            (w[30] = i),
            (w[31] = r),
            (w[32] = o),
            (w[33] = p),
            (w[34] = y),
            (w[35] = x),
            (w[36] = b))
        } else ((s = w[29]), (i = w[30]), (r = w[31]), (o = w[32]), (p = w[33]), (y = w[34]), (x = w[35]), (b = w[36]))
        ;((m = "flex flex-col overflow-hidden"),
          w[51] !== E || w[52] !== T.oneTimeDate || w[53] !== M || w[54] !== b
            ? ((g =
                null != T.oneTimeDate
                  ? (0, l.jsx)(es.ic, {
                      control: (0, l.jsx)(X.h, {
                        ariaLabel: E.formatMessage({
                          id: "inbox.automations.oneTimeDate.ariaLabel",
                          defaultMessage: "Scheduled date",
                        }),
                        timeZone: M,
                        value: T.oneTimeDate,
                        onChange: (e) => {
                          b({ oneTimeDate: e })
                        },
                      }),
                      label: E.formatMessage({ id: "inbox.automations.oneTimeDate.label", defaultMessage: "Date" }),
                      variant: "nested",
                    })
                  : null),
              (w[51] = E),
              (w[52] = T.oneTimeDate),
              (w[53] = M),
              (w[54] = b),
              (w[55] = g))
            : (g = w[55]),
          w[56] !== D ||
          w[57] !== N ||
          w[58] !== E ||
          w[59] !== L ||
          w[60] !== T.mode ||
          w[61] !== T.oneTimeDate ||
          w[62] !== I ||
          w[63] !== b
            ? ((h =
                null == T.oneTimeDate && "hourly" === T.mode
                  ? (0, l.jsx)(es.ic, {
                      control: (0, l.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                          (0, l.jsx)(ee.w, {
                            ariaLabel: E.formatMessage({
                              id: "settings.automations.scheduleIntervalDuration",
                              defaultMessage: "Interval duration",
                            }),
                            max: "minute" === N ? 999 : 23,
                            min: 1,
                            step: L ? 1 / I : 1,
                            value: D / I,
                            onChange: (e) => {
                              let t = Math.round(e * I)
                              t !== D &&
                                b(
                                  "minute" === N || L
                                    ? { intervalMinutes: t }
                                    : { intervalHours: e, intervalMinutes: null },
                                )
                            },
                          }),
                          (0, l.jsx)(en.H, {
                            ariaLabel: E.formatMessage({
                              id: "settings.automations.scheduleIntervalUnit",
                              defaultMessage: "Interval unit",
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
                      }),
                      variant: "nested",
                    })
                  : null),
              (w[56] = D),
              (w[57] = N),
              (w[58] = E),
              (w[59] = L),
              (w[60] = T.mode),
              (w[61] = T.oneTimeDate),
              (w[62] = I),
              (w[63] = b),
              (w[64] = h))
            : (h = w[64]),
          (f = U
            ? (0, l.jsxs)("fieldset", {
                className: "min-w-0",
                children: [
                  (0, l.jsx)("legend", {
                    className: "mb-2 text-sm font-medium",
                    children: (0, l.jsx)(c.A, {
                      id: "workspaceAgents.schedules.runEvery",
                      defaultMessage: "Run every",
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "flex gap-2",
                    children: [et.O0["6"], ...et.O0.slice(0, 6)].map((t) => {
                      let n = e.includes(t.id),
                        a = () => b({ mode: "weekly", weekdays: n && 1 === e.length ? et.O0.map(ec) : [t.id] })
                      return (0, l.jsx)(
                        O.$,
                        {
                          type: "button",
                          color: n ? "accent" : "outlineSurface",
                          size: "field",
                          radius: "full",
                          className: "min-w-0 flex-1 justify-center leading-5",
                          "aria-label": E.formatMessage(t.longLabelMessage),
                          "aria-pressed": n,
                          onClick: (l) => {
                            l.shiftKey
                              ? a()
                              : l.detail > 1 ||
                                (n && 1 === e.length) ||
                                b({
                                  mode: "weekly",
                                  weekdays: n
                                    ? e.filter((e) => e !== t.id)
                                    : et.O0.filter((n) => {
                                        let { id: l } = n
                                        return l === t.id || e.includes(l)
                                      }).map(eu),
                                })
                          },
                          onDoubleClick: a,
                          children: E.formatMessage(t.labelMessage),
                        },
                        t.id,
                      )
                    }),
                  }),
                ],
              })
            : null),
          (w[3] = D),
          (w[4] = N),
          (w[5] = E),
          (w[6] = U),
          (w[7] = k),
          (w[8] = L),
          (w[9] = T),
          (w[10] = M),
          (w[11] = I),
          (w[12] = s),
          (w[13] = i),
          (w[14] = r),
          (w[15] = o),
          (w[16] = m),
          (w[17] = g),
          (w[18] = h),
          (w[19] = f),
          (w[20] = p),
          (w[21] = y),
          (w[22] = x),
          (w[23] = b))
      } else
        ((s = w[12]),
          (i = w[13]),
          (r = w[14]),
          (o = w[15]),
          (m = w[16]),
          (g = w[17]),
          (h = w[18]),
          (f = w[19]),
          (p = w[20]),
          (y = w[21]),
          (x = w[22]),
          (b = w[23]))
      w[65] !== E || w[66] !== T.mode || w[67] !== T.oneTimeDate || w[68] !== r || w[69] !== b
        ? ((_ =
            null == T.oneTimeDate && "monthly" === T.mode
              ? (0, l.jsx)(es.ic, {
                  control: (0, l.jsx)(en.H, {
                    ariaLabel: E.formatMessage({
                      id: "inbox.automations.monthDay.ariaLabel",
                      defaultMessage: "Day of the month",
                    }),
                    options: et.nb.map(ed),
                    selectedId: String(r),
                    selectedLabel: String(r),
                    onSelect: (e) => {
                      b({ monthDay: Number(e) })
                    },
                  }),
                  label: E.formatMessage({ id: "inbox.automations.day.label", defaultMessage: "On" }),
                  variant: "nested",
                })
              : null),
          (w[65] = E),
          (w[66] = T.mode),
          (w[67] = T.oneTimeDate),
          (w[68] = r),
          (w[69] = b),
          (w[70] = _))
        : (_ = w[70])
      let G = o ? C : null
      return (
        w[71] !== i || w[72] !== E || w[73] !== M || w[74] !== x
          ? ((v =
              null != i
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(es.ic, {
                        control: (0, l.jsx)(en.H, {
                          ariaLabel: E.formatMessage({
                            id: "inbox.automations.customFrequency.ariaLabel",
                            defaultMessage: "Repeat frequency",
                          }),
                          options: ei.map((e) => ({ id: e, label: E.formatMessage(ep[e]) })),
                          selectedId: i.frequency,
                          selectedLabel: E.formatMessage(ep[i.frequency]),
                          onSelect: (e) => {
                            x({ frequency: e })
                          },
                        }),
                        label: E.formatMessage({
                          id: "inbox.automations.customFrequency.label",
                          defaultMessage: "Repeats",
                        }),
                        variant: "nested",
                      }),
                      (0, l.jsx)(es.ic, {
                        control: (0, l.jsx)(ee.w, {
                          ariaLabel: E.formatMessage({
                            id: "inbox.automations.customInterval.ariaLabel",
                            defaultMessage: "Repeat interval",
                          }),
                          max: 999,
                          min: 1,
                          suffix: E.formatMessage(ey[i.frequency], { count: i.interval }),
                          value: i.interval,
                          onChange: (e) => {
                            x({ interval: e })
                          },
                        }),
                        label: E.formatMessage({
                          id: "inbox.automations.customInterval.label",
                          defaultMessage: "Every",
                        }),
                        variant: "nested",
                      }),
                      "weekly" === i.frequency
                        ? (0, l.jsx)(es.ic, {
                            control: (0, l.jsx)(el.l, {
                              value: i.weekdays,
                              onChange: (e) => {
                                x({ weekdays: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customWeekdays.label",
                              defaultMessage: "On",
                            }),
                            labelSizing: "content",
                            variant: "nested",
                          })
                        : null,
                      "yearly" === i.frequency
                        ? (0, l.jsx)(es.ic, {
                            control: (0, l.jsx)(en.H, {
                              ariaLabel: E.formatMessage({
                                id: "inbox.automations.customMonth.ariaLabel",
                                defaultMessage: "Month",
                              }),
                              options: er.map((e) => ({
                                id: String(e),
                                label: E.formatDate(new Date(2024, e - 1, 1), { month: "long" }),
                              })),
                              selectedId: String(i.month),
                              selectedLabel: E.formatDate(new Date(2024, i.month - 1, 1), { month: "long" }),
                              onSelect: (e) => {
                                x({ month: Number(e) })
                              },
                            }),
                            label: E.formatMessage({ id: "inbox.automations.customMonth.label", defaultMessage: "In" }),
                            variant: "nested",
                          })
                        : null,
                      "monthly" === i.frequency || "yearly" === i.frequency
                        ? (0, l.jsx)(es.ic, {
                            control: (0, l.jsx)(J.j, {
                              value: i.monthDays,
                              onChange: (e) => {
                                x({ monthDays: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customMonthDay.label",
                              defaultMessage: "On days",
                            }),
                            variant: "nested",
                          })
                        : null,
                      "hourly" === i.frequency
                        ? (0, l.jsx)(es.ic, {
                            control: (0, l.jsx)(ee.w, {
                              ariaLabel: E.formatMessage({
                                id: "inbox.automations.customMinute.ariaLabel",
                                defaultMessage: "Minute past the hour",
                              }),
                              max: 59,
                              min: 0,
                              value: i.minute,
                              onChange: (e) => {
                                x({ minute: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customMinute.label",
                              defaultMessage: "At minute",
                            }),
                            variant: "nested",
                          })
                        : (0, l.jsx)(es.ic, {
                            control: (0, l.jsx)(R.b, {
                              value: i.time,
                              timeZone: M,
                              onChange: (e) => {
                                x({ time: e })
                              },
                            }),
                            label: E.formatMessage({
                              id: "inbox.automations.customStartTime.label",
                              defaultMessage: "Start time",
                            }),
                            variant: "nested",
                          }),
                    ],
                  })
                : null),
            (w[71] = i),
            (w[72] = E),
            (w[73] = M),
            (w[74] = x),
            (w[75] = v))
          : (v = w[75]),
        w[76] !== G || w[77] !== v || w[78] !== m || w[79] !== g || w[80] !== h || w[81] !== f || w[82] !== _
          ? ((j = (0, l.jsxs)("div", { className: m, children: [g, h, f, _, G, v] })),
            (w[76] = G),
            (w[77] = v),
            (w[78] = m),
            (w[79] = g),
            (w[80] = h),
            (w[81] = f),
            (w[82] = _),
            (w[83] = j))
          : (j = w[83]),
        w[84] !== s || w[85] !== j || w[86] !== p || w[87] !== y
          ? ((A = (0, l.jsxs)(s, { title: p, children: [y, j] })),
            (w[84] = s),
            (w[85] = j),
            (w[86] = p),
            (w[87] = y),
            (w[88] = A))
          : (A = w[88]),
        A
      )
    }
    function ed(e) {
      return { id: String(e), label: String(e) }
    }
    function eu(e) {
      let { id: t } = e
      return t
    }
    function ec(e) {
      let { id: t } = e
      return t
    }
    function em(e) {
      return (0, l.jsx)(Q.Option, { value: e.id, children: e.label }, e.id)
    }
    function eg(e) {
      let { id: t } = e
      return t
    }
    function eh(e) {
      let { id: t } = e
      return t
    }
    let ef = (0, F.YK)({
        intervalUnit: {
          id: "automations.schedule.intervalUnit",
          defaultMessage: "{unit, select, hour {hours} other {minutes}}",
        },
        hourly: { id: "inbox.automations.customFrequency.hourly", defaultMessage: "Hourly" },
        daily: { id: "inbox.automations.customFrequency.daily", defaultMessage: "Daily" },
        weekly: { id: "inbox.automations.customFrequency.weekly", defaultMessage: "Weekly" },
        monthly: { id: "inbox.automations.customFrequency.monthly", defaultMessage: "Monthly" },
        yearly: { id: "inbox.automations.customFrequency.yearly", defaultMessage: "Yearly" },
        hourlyUnit: {
          id: "inbox.automations.customFrequencyUnit.hours",
          defaultMessage: "{count, plural, one {hour} other {hours}}",
        },
        dailyUnit: {
          id: "inbox.automations.customFrequencyUnit.days",
          defaultMessage: "{count, plural, one {day} other {days}}",
        },
        weeklyUnit: {
          id: "inbox.automations.customFrequencyUnit.weeks",
          defaultMessage: "{count, plural, one {week} other {weeks}}",
        },
        monthlyUnit: {
          id: "inbox.automations.customFrequencyUnit.months",
          defaultMessage: "{count, plural, one {month} other {months}}",
        },
        yearlyUnit: {
          id: "inbox.automations.customFrequencyUnit.years",
          defaultMessage: "{count, plural, one {year} other {years}}",
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
    var ex = n("ClXH"),
      eb = n("qTvt"),
      e_ = n("ZZgR"),
      ev = n("HOLv")
    function ej(e) {
      let t,
        n,
        r,
        o,
        u,
        m,
        g,
        h,
        f,
        p,
        x = (0, a.c)(109),
        {
          ariaLabel: b,
          disabled: _,
          error: v,
          options: j,
          selectedId: A,
          selectedLabel: w,
          selectedIcon: T,
          searchPlaceholder: M,
          onSelect: C,
        } = e,
        k = void 0 !== _ && _,
        E = (0, d.useId)(),
        N = (0, d.useRef)(null),
        [S, D] = (0, d.useState)(!1),
        [I, L] = (0, d.useState)(""),
        U = null != v || void 0,
        G = null != v ? E : void 0
      ;(x[0] !== v || x[1] !== E
        ? ((t = null != v ? (0, l.jsx)("span", { id: E, className: "sr-only", children: v }) : null),
          (x[0] = v),
          (x[1] = E),
          (x[2] = t))
        : (t = x[2]),
        x[3] !== v
          ? ((n =
              null != v
                ? (0, l.jsx)(y.E, {
                    variant: "caution",
                    children: (0, l.jsx)(c.A, {
                      id: "automation.schedule.unsupportedInterval",
                      defaultMessage: "Unsupported",
                    }),
                  })
                : null),
            (x[3] = v),
            (x[4] = n))
          : (n = x[4]),
        x[5] !== w
          ? ((r = (0, l.jsx)("span", { className: "truncate", children: w })), (x[5] = w), (x[6] = r))
          : (r = x[6]),
        x[7] !== T || x[8] !== r
          ? ((o = (0, l.jsxs)("span", {
              className: "flex min-w-0 flex-1 items-center gap-1.5 text-start",
              children: [T, r],
            })),
            (x[7] = T),
            (x[8] = r),
            (x[9] = o))
          : (o = x[9]),
        x[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, l.jsx)(ev.I, { asset: eb.K })), (x[10] = u))
          : (u = x[10]),
        x[11] !== b || x[12] !== k || x[13] !== U || x[14] !== G || x[15] !== t || x[16] !== n || x[17] !== o
          ? ((m = (0, l.jsxs)(s.$, {
              className: "max-w-full min-w-0 font-normal",
              "aria-label": b,
              "aria-invalid": U,
              "aria-describedby": G,
              disabled: k,
              color: "secondary",
              variant: "outline",
              size: "xl",
              gutterSize: "md",
              iconSize: "sm",
              pill: !1,
              block: !0,
              children: [t, n, o, u],
            })),
            (x[11] = b),
            (x[12] = k),
            (x[13] = U),
            (x[14] = G),
            (x[15] = t),
            (x[16] = n),
            (x[17] = o),
            (x[18] = m))
          : (m = x[18]))
      let P = m
      if (null != M) {
        let e, t, n, a, s, r, o, d, u, m, g, h, f, p, y, _, w, T, E, N, U, G, R, O, H, q, z
        if (
          x[19] !== b ||
          x[20] !== k ||
          x[21] !== v ||
          x[22] !== C ||
          x[23] !== S ||
          x[24] !== j ||
          x[25] !== I ||
          x[26] !== M ||
          x[27] !== A ||
          x[28] !== P
        ) {
          let c,
            G = I.trim().toLocaleLowerCase()
          ;((s = j.filter((e) => `${e.id} ${e.label}`.toLocaleLowerCase().includes(G))),
            (a = i.m),
            (N = v),
            (U = !S && void 0),
            (E = "inline-flex w-full min-w-0"),
            (n = e_.A),
            (g = !0),
            (h = S),
            x[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (e) => {
                  ;(D(e), L(""))
                }),
                (x[50] = f))
              : (f = x[50]),
            (p = k),
            (y = "end"),
            (_ = "sm"),
            (w = "list"),
            (T = P),
            (t = e_.G.Root),
            (d = M),
            (u = A),
            x[51] !== I || x[52] !== M
              ? ((m = (0, l.jsx)(e_.G.Input, { placeholder: M, value: I, onValueChange: L })),
                (x[51] = I),
                (x[52] = M),
                (x[53] = m))
              : (m = x[53]),
            (e = e_.G.List),
            (r = b),
            x[54] !== k || x[55] !== C || x[56] !== A
              ? ((c = (e) =>
                  (0, l.jsx)(
                    e_.G.Item,
                    {
                      value: e.id,
                      disabled: k,
                      icon: e.icon,
                      rightIcon: e.id === A ? (0, l.jsx)(ev.I, { asset: ex.G }) : void 0,
                      onSelect: () => {
                        ;(C(e.id), D(!1), L(""))
                      },
                      children: e.label,
                    },
                    e.id,
                  )),
                (x[54] = k),
                (x[55] = C),
                (x[56] = A),
                (x[57] = c))
              : (c = x[57]),
            (o = s.map(c)),
            (x[19] = b),
            (x[20] = k),
            (x[21] = v),
            (x[22] = C),
            (x[23] = S),
            (x[24] = j),
            (x[25] = I),
            (x[26] = M),
            (x[27] = A),
            (x[28] = P),
            (x[29] = e),
            (x[30] = t),
            (x[31] = n),
            (x[32] = a),
            (x[33] = s),
            (x[34] = r),
            (x[35] = o),
            (x[36] = d),
            (x[37] = u),
            (x[38] = m),
            (x[39] = g),
            (x[40] = h),
            (x[41] = f),
            (x[42] = p),
            (x[43] = y),
            (x[44] = _),
            (x[45] = w),
            (x[46] = T),
            (x[47] = E),
            (x[48] = N),
            (x[49] = U))
        } else
          ((e = x[29]),
            (t = x[30]),
            (n = x[31]),
            (a = x[32]),
            (s = x[33]),
            (r = x[34]),
            (o = x[35]),
            (d = x[36]),
            (u = x[37]),
            (m = x[38]),
            (g = x[39]),
            (h = x[40]),
            (f = x[41]),
            (p = x[42]),
            (y = x[43]),
            (_ = x[44]),
            (w = x[45]),
            (T = x[46]),
            (E = x[47]),
            (N = x[48]),
            (U = x[49]))
        return (
          x[58] !== s.length
            ? ((G =
                0 === s.length
                  ? (0, l.jsx)("div", {
                      role: "status",
                      className: "px-row-x py-row-y text-sm text-secondary",
                      children: (0, l.jsx)(c.A, {
                        id: "workspaceAgents.schedules.noMatchingTimeZones",
                        defaultMessage: "No matching time zones",
                      }),
                    })
                  : null),
              (x[58] = s.length),
              (x[59] = G))
            : (G = x[59]),
          x[60] !== e || x[61] !== r || x[62] !== o || x[63] !== G
            ? ((R = (0, l.jsxs)(e, { "aria-label": r, children: [o, G] })),
              (x[60] = e),
              (x[61] = r),
              (x[62] = o),
              (x[63] = G),
              (x[64] = R))
            : (R = x[64]),
          x[65] !== t || x[66] !== d || x[67] !== u || x[68] !== m || x[69] !== R
            ? ((O = (0, l.jsxs)(t, { label: d, defaultValue: u, children: [m, R] })),
              (x[65] = t),
              (x[66] = d),
              (x[67] = u),
              (x[68] = m),
              (x[69] = R),
              (x[70] = O))
            : (O = x[70]),
          x[71] !== n ||
          x[72] !== g ||
          x[73] !== h ||
          x[74] !== f ||
          x[75] !== p ||
          x[76] !== y ||
          x[77] !== _ ||
          x[78] !== w ||
          x[79] !== T ||
          x[80] !== O
            ? ((H = (0, l.jsx)(n, {
                modal: g,
                open: h,
                onOpenChange: f,
                disabled: p,
                align: y,
                contentWidth: _,
                contentMaxHeight: w,
                triggerButton: T,
                children: O,
              })),
              (x[71] = n),
              (x[72] = g),
              (x[73] = h),
              (x[74] = f),
              (x[75] = p),
              (x[76] = y),
              (x[77] = _),
              (x[78] = w),
              (x[79] = T),
              (x[80] = O),
              (x[81] = H))
            : (H = x[81]),
          x[82] !== E || x[83] !== H
            ? ((q = (0, l.jsx)("span", { className: E, children: H })), (x[82] = E), (x[83] = H), (x[84] = q))
            : (q = x[84]),
          x[85] !== a || x[86] !== N || x[87] !== U || x[88] !== q
            ? ((z = (0, l.jsx)(a, { content: N, forceOpen: U, children: q })),
              (x[85] = a),
              (x[86] = N),
              (x[87] = U),
              (x[88] = q),
              (x[89] = z))
            : (z = x[89]),
          z
        )
      }
      let R = !S && void 0
      if (
        (x[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (e) => {
              let t = N.current?.querySelector('[data-selected="true"]')
              null != t &&
                (e.preventDefault(),
                t.focus({ preventScroll: !0 }),
                requestAnimationFrame(() => {
                  t.scrollIntoView({ block: "nearest" })
                }))
            }),
            (x[90] = g))
          : (g = x[90]),
        x[91] !== k || x[92] !== C || x[93] !== j || x[94] !== A)
      ) {
        let e
        ;(x[96] !== k || x[97] !== C || x[98] !== A
          ? ((e = (e) =>
              (0, l.jsx)(
                H.ms.Item,
                {
                  disabled: k,
                  "data-selected": e.id === A,
                  leftIcon: e.icon,
                  rightIconAsset: e.id === A ? ex.G : void 0,
                  onSelect: () => {
                    C(e.id)
                  },
                  children: e.label,
                },
                e.id,
              )),
            (x[96] = k),
            (x[97] = C),
            (x[98] = A),
            (x[99] = e))
          : (e = x[99]),
          (h = j.map(e)),
          (x[91] = k),
          (x[92] = C),
          (x[93] = j),
          (x[94] = A),
          (x[95] = h))
      } else h = x[95]
      return (
        x[100] !== k || x[101] !== S || x[102] !== h || x[103] !== P
          ? ((f = (0, l.jsx)("span", {
              className: "inline-flex w-full min-w-0",
              children: (0, l.jsx)(H.Ab, {
                open: S,
                onOpenChange: D,
                scrollFade: !0,
                disabled: k,
                modal: !0,
                align: "end",
                contentRef: N,
                onOpenAutoFocus: g,
                contentWidth: "sm",
                contentMaxHeight: "list",
                triggerButton: P,
                children: h,
              }),
            })),
            (x[100] = k),
            (x[101] = S),
            (x[102] = h),
            (x[103] = P),
            (x[104] = f))
          : (f = x[104]),
        x[105] !== v || x[106] !== R || x[107] !== f
          ? ((p = (0, l.jsx)(i.m, { content: v, forceOpen: R, children: f })),
            (x[105] = v),
            (x[106] = R),
            (x[107] = f),
            (x[108] = p))
          : (p = x[108]),
        p
      )
    }
    var eA = "title-_ZnNd1"
    function ew(e) {
      let t,
        n,
        s,
        r,
        o,
        m,
        g,
        h,
        f,
        p,
        y,
        b,
        j,
        w,
        T,
        M,
        C,
        k,
        E,
        N,
        D,
        I,
        L,
        U,
        G,
        z,
        F,
        $,
        W,
        Z,
        K,
        V,
        Q,
        X,
        J,
        ee,
        et,
        en,
        el,
        ea,
        es,
        ei,
        er,
        ed,
        eu,
        ec,
        em,
        eg = (0, a.c)(180),
        {
          agentName: eh,
          channelBinding: ef,
          trigger: ep,
          destinations: ey,
          canEdit: ex,
          pending: eb,
          error: e_,
          onClose: ev,
          onSave: ew,
          onDelete: eU,
          onEnabledChange: eG,
          onSaveAndRun: eP,
          runMode: eR,
          notice: eO,
          showBackButton: eH,
          saveDisabled: eq,
          onInteraction: ez,
        } = e,
        eB = void 0 === eR ? "preview" : eR,
        eF = void 0 === eH || eH,
        eY = void 0 !== eq && eq,
        e$ = (0, u.A)(),
        [eW, eZ] = (0, d.useState)(ep?.instructions ?? "")
      eg[0] !== ep
        ? ((t = null == ep ? new Intl.DateTimeFormat().resolvedOptions().timeZone : (ep.tz ?? "UTC")),
          (eg[0] = ep),
          (eg[1] = t))
        : (t = eg[1])
      let [eK, eV] = (0, d.useState)(t)
      eg[2] !== ep?.rules
        ? ((n = () =>
            (ep?.rules ?? [{ freq: "weekly", hour: 8, minute: 0, byweekday: [0, 1, 2, 3, 4], interval: 1 }]).map(eD)),
          (eg[2] = ep?.rules),
          (eg[3] = n))
        : (n = eg[3])
      let [eQ, eX] = (0, d.useState)(n),
        [eJ, e0] = (0, d.useState)(null),
        e1 = ep?.channel_binding ?? ef
      eg[4] !== ey || eg[5] !== e1 ? ((s = (0, S.XL)(ey, e1)), (eg[4] = ey), (eg[5] = e1), (eg[6] = s)) : (s = eg[6])
      let e2 = s
      eg[7] !== eJ || eg[8] !== ey || eg[9] !== e2
        ? ((r =
            ey.find((e) => {
              let { id: t } = e
              return t === eJ
            }) ?? e2),
          (eg[7] = eJ),
          (eg[8] = ey),
          (eg[9] = e2),
          (eg[10] = r))
        : (r = eg[10])
      let e3 = r
      eg[11] !== ef || eg[12] !== e3?.binding || eg[13] !== ep?.channel_binding
        ? ((o = e3?.binding ?? ep?.channel_binding ?? ef ?? { type: "chatgpt" }),
          (eg[11] = ef),
          (eg[12] = e3?.binding),
          (eg[13] = ep?.channel_binding),
          (eg[14] = o))
        : (o = eg[14])
      let e5 = o,
        e4 = e3?.parentTriggerId ?? (e3 === e2 ? ep?.parent_trigger_id : void 0)
      if (
        eg[15] !== e5 ||
        eg[16] !== ex ||
        eg[17] !== eW ||
        eg[18] !== e$ ||
        eg[19] !== ez ||
        eg[20] !== e4 ||
        eg[21] !== eb ||
        eg[22] !== eQ ||
        eg[23] !== eY ||
        eg[24] !== eK ||
        eg[25] !== ep
      ) {
        let e,
          t,
          n,
          a,
          s,
          i,
          r,
          o = eQ.map(eS)
        if (eg[39] !== eK) {
          k = !0
          try {
            new Intl.DateTimeFormat(void 0, { timeZone: eK })
          } catch {
            k = !1
          }
          ;((eg[39] = eK), (eg[40] = k))
        } else k = eg[40]
        eg[41] !== ex || eg[42] !== e$.locale || eg[43] !== eK
          ? ((e = [...new Set([eK, "UTC", ...(ex ? Intl.supportedValuesOf("timeZone") : [])])].map((e) => {
              let t = e
              try {
                let n = new Intl.DateTimeFormat(e$.locale, { timeZone: e, timeZoneName: "longGeneric" })
                  .formatToParts(new Date("2026-01-01T00:00:00Z"))
                  .find(eN)?.value
                null != n && (t = `${n} \u{2013} ${e.split("/").at(-1)?.replaceAll("_", " ")}`)
              } catch {}
              return { id: e, label: t }
            })),
            (eg[41] = ex),
            (eg[42] = e$.locale),
            (eg[43] = eK),
            (eg[44] = e))
          : (e = eg[44])
        let d = e,
          u = !ex || eb
        ;(eg[45] !== e$
          ? ((t = e$.formatMessage({
              id: "workspaceAgents.schedules.timezoneLabel",
              defaultMessage: "Schedule time zone",
            })),
            (eg[45] = e$),
            (eg[46] = t))
          : (t = eg[46]),
          eg[47] !== e$ || eg[48] !== k
            ? ((n = k
                ? void 0
                : e$.formatMessage({
                    id: "workspaceAgents.schedules.invalidTimezone",
                    defaultMessage: "Choose a valid time zone",
                  })),
              (eg[47] = e$),
              (eg[48] = k),
              (eg[49] = n))
            : (n = eg[49]),
          eg[50] !== e$
            ? ((a = e$.formatMessage({
                id: "workspaceAgents.schedules.searchTimeZones",
                defaultMessage: "Search time zones",
              })),
              (eg[50] = e$),
              (eg[51] = a))
            : (a = eg[51]),
          eg[52] !== eK || eg[53] !== d
            ? ((s =
                d.find((e) => {
                  let { id: t } = e
                  return t === eK
                })?.label ?? eK),
              (eg[52] = eK),
              (eg[53] = d),
              (eg[54] = s))
            : (s = eg[54]),
          eg[55] !== ez
            ? ((i = (e) => {
                ;(eV(e), ez?.({ actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE", schedule: {} }))
              }),
              (eg[55] = ez),
              (eg[56] = i))
            : (i = eg[56]),
          eg[57] !== u ||
          eg[58] !== t ||
          eg[59] !== n ||
          eg[60] !== a ||
          eg[61] !== s ||
          eg[62] !== i ||
          eg[63] !== eK ||
          eg[64] !== d
            ? ((r = (0, l.jsx)(ej, {
                disabled: u,
                ariaLabel: t,
                error: n,
                options: d,
                searchPlaceholder: a,
                selectedId: eK,
                selectedLabel: s,
                onSelect: i,
              })),
              (eg[57] = u),
              (eg[58] = t),
              (eg[59] = n),
              (eg[60] = a),
              (eg[61] = s),
              (eg[62] = i),
              (eg[63] = eK),
              (eg[64] = d),
              (eg[65] = r))
            : (r = eg[65]),
          (M = r),
          (C = o.every(eE)),
          (g = "slack" === e5.type && !e4),
          (m = ex && !eb && !eY && eW.length <= 6e3 && k && C && eQ.length > 0 && !g),
          (h = ep),
          (f = "SCHEDULE"),
          (p = ep?.enabled ?? !0),
          (y = eW),
          (b = eK),
          (j = e5),
          (w = "slack" === e5.type ? e4 : void 0),
          (T = o.filter(ek)),
          (eg[15] = e5),
          (eg[16] = ex),
          (eg[17] = eW),
          (eg[18] = e$),
          (eg[19] = ez),
          (eg[20] = e4),
          (eg[21] = eb),
          (eg[22] = eQ),
          (eg[23] = eY),
          (eg[24] = eK),
          (eg[25] = ep),
          (eg[26] = m),
          (eg[27] = g),
          (eg[28] = h),
          (eg[29] = f),
          (eg[30] = p),
          (eg[31] = y),
          (eg[32] = b),
          (eg[33] = j),
          (eg[34] = w),
          (eg[35] = T),
          (eg[36] = M),
          (eg[37] = C),
          (eg[38] = k))
      } else
        ((m = eg[26]),
          (g = eg[27]),
          (h = eg[28]),
          (f = eg[29]),
          (p = eg[30]),
          (y = eg[31]),
          (b = eg[32]),
          (j = eg[33]),
          (w = eg[34]),
          (T = eg[35]),
          (M = eg[36]),
          (C = eg[37]),
          (k = eg[38]))
      eg[66] !== h ||
      eg[67] !== f ||
      eg[68] !== p ||
      eg[69] !== y ||
      eg[70] !== b ||
      eg[71] !== j ||
      eg[72] !== w ||
      eg[73] !== T
        ? ((E = {
            ...h,
            type: f,
            enabled: p,
            instructions: y,
            tz: b,
            channel_binding: j,
            parent_trigger_id: w,
            rules: T,
          }),
          (eg[66] = h),
          (eg[67] = f),
          (eg[68] = p),
          (eg[69] = y),
          (eg[70] = b),
          (eg[71] = j),
          (eg[72] = w),
          (eg[73] = T),
          (eg[74] = E))
        : (E = eg[74])
      let e7 = E
      eg[75] !== e$ || eg[76] !== eB
        ? ((N =
            "published" === eB
              ? e$.formatMessage({
                  id: "workspaceAgents.schedules.saveAndRunTooltip",
                  defaultMessage: "Save and run the published agent",
                })
              : e$.formatMessage({
                  id: "workspaceAgents.schedules.saveAndRunPreviewTooltip",
                  defaultMessage: "Save and run preview",
                })),
          (eg[75] = e$),
          (eg[76] = eB),
          (eg[77] = N))
        : (N = eg[77])
      let e6 = N
      ;(eg[78] !== m || eg[79] !== e7 || eg[80] !== ew
        ? ((D = (e) => {
            ;(e.preventDefault(), m && ew(e7))
          }),
          (eg[78] = m),
          (eg[79] = e7),
          (eg[80] = ew),
          (eg[81] = D))
        : (D = eg[81]),
        eg[82] !== ev || eg[83] !== eb || eg[84] !== eF
          ? ((I = eF
              ? (0, l.jsxs)(O.$, {
                  color: "ghost",
                  size: "iconCircleLg",
                  type: "button",
                  disabled: eb,
                  onClick: ev,
                  children: [
                    (0, l.jsx)(A.KBq, {}),
                    (0, l.jsx)("span", {
                      className: "sr-only",
                      children: (0, l.jsx)(c.A, { id: "workspaceAgents.schedules.back", defaultMessage: "Back" }),
                    }),
                  ],
                })
              : null),
            (eg[82] = ev),
            (eg[83] = eb),
            (eg[84] = eF),
            (eg[85] = I))
          : (I = eg[85]),
        eg[86] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, l.jsx)(v.c7, {
              className: "min-w-0 flex-1",
              titleClassName: eA,
              title: (0, l.jsx)(_.L3, {
                className: eA,
                children: (0, l.jsx)(c.A, {
                  id: "workspaceAgents.schedules.editor.title",
                  defaultMessage: "Automations",
                }),
              }),
            })),
            (eg[86] = L))
          : (L = eg[86]),
        eg[87] !== ex ||
        eg[88] !== e$ ||
        eg[89] !== eG ||
        eg[90] !== ez ||
        eg[91] !== eb ||
        eg[92] !== eQ ||
        eg[93] !== ep?.enabled
          ? ((U =
              ex && (null != eG || eQ.some(eC))
                ? (0, l.jsxs)(H.Ab, {
                    align: "end",
                    contentWidth: "menu",
                    triggerButton: (0, l.jsx)(q.p, {
                      disabled: eb,
                      label: e$.formatMessage({
                        id: "workspaceAgents.schedules.options",
                        defaultMessage: "Automation options",
                      }),
                    }),
                    children: [
                      null != eG
                        ? (0, l.jsx)(H.ms.Item, {
                            LeftIcon: ep?.enabled === !1 ? A.Iz7 : A.Ov7,
                            disabled: eb,
                            onSelect: () => eG(ep?.enabled === !1),
                            children:
                              ep?.enabled === !1
                                ? (0, l.jsx)(c.A, { id: "workspaceAgents.schedules.resume", defaultMessage: "Resume" })
                                : (0, l.jsx)(c.A, { id: "workspaceAgents.schedules.pause", defaultMessage: "Pause" }),
                          })
                        : null,
                      eQ.map((e, t) =>
                        null == e.config.oneTimeDate
                          ? (0, l.jsx)(
                              H.ms.Item,
                              {
                                disabled: eb || "custom" === e.config.mode,
                                onSelect: () => {
                                  ;(eX((e) =>
                                    e.map((e, n) =>
                                      n === t ? { ...e, config: (0, P.dl)(e.config, "custom"), dirty: !0 } : e,
                                    ),
                                  ),
                                    ez?.({
                                      actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE",
                                      schedule: { scheduleType: eL("custom") },
                                    }))
                                },
                                children: (0, l.jsx)(c.A, {
                                  id: "workspaceAgents.schedules.customOption",
                                  defaultMessage:
                                    "{count, plural, one {Custom schedule} other {Custom schedule for rule {number}}}",
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
            (eg[87] = ex),
            (eg[88] = e$),
            (eg[89] = eG),
            (eg[90] = ez),
            (eg[91] = eb),
            (eg[92] = eQ),
            (eg[93] = ep?.enabled),
            (eg[94] = U))
          : (U = eg[94]),
        eg[95] !== I || eg[96] !== U
          ? ((G = (0, l.jsx)(v.OO, {
              children: (0, l.jsxs)("div", {
                className: "flex min-h-12 items-center gap-0.5 pe-8",
                children: [I, L, U],
              }),
            })),
            (eg[95] = I),
            (eg[96] = U),
            (eg[97] = G))
          : (G = eg[97]),
        eg[98] !== e_
          ? ((z = null == e_ ? null : (0, l.jsx)(x.l, { type: "error", content: e_ })), (eg[98] = e_), (eg[99] = z))
          : (z = eg[99]),
        eg[100] !== ex || eg[101] !== g
          ? ((F =
              !ex || g
                ? (0, l.jsx)(B, {
                    children: ex
                      ? (0, l.jsx)(c.A, {
                          id: "workspaceAgents.schedules.missingChannel",
                          defaultMessage: "Reconnect this channel before updating the automation.",
                        })
                      : (0, l.jsx)(c.A, {
                          id: "workspaceAgents.schedules.readOnly",
                          defaultMessage:
                            "You can view this automation, but you don\u2019t have permission to update it.",
                        }),
                  })
                : null),
            (eg[100] = ex),
            (eg[101] = g),
            (eg[102] = F))
          : (F = eg[102]))
      let e8 = !ex || eb
      if (eg[103] !== ez || eg[104] !== eQ || eg[105] !== eK || eg[106] !== M || eg[107] !== k) {
        let e
        ;(eg[109] !== ez || eg[110] !== eK || eg[111] !== M || eg[112] !== k
          ? ((e = (e, t) =>
              (0, l.jsx)(
                eo,
                {
                  timeZone: k ? eK : void 0,
                  scheduleConfig: e.config,
                  timeControl: (0, l.jsxs)("div", {
                    className: "mt-5 grid min-w-0 grid-cols-2 gap-2",
                    children: [
                      (0, l.jsx)(R.b, {
                        appearance: "field",
                        value: e.config.time,
                        onChange: (e) => {
                          ;(ez?.({
                            actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE",
                            schedule: {},
                          }),
                            eX((n) =>
                              n.map((n, l) => (l === t ? { ...n, config: { ...n.config, time: e }, dirty: !0 } : n)),
                            ))
                        },
                      }),
                      M,
                    ],
                  }),
                  onUpdateScheduleDraft: (n) => {
                    let l = eL(n.mode)
                    ;(ez?.({
                      actionType:
                        l === eL(e.config.mode)
                          ? "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE"
                          : "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE",
                      schedule: { scheduleType: l },
                    }),
                      eX((e) => e.map((e, l) => (l === t ? { ...e, config: n, dirty: !0 } : e))))
                  },
                },
                t,
              )),
            (eg[109] = ez),
            (eg[110] = eK),
            (eg[111] = M),
            (eg[112] = k),
            (eg[113] = e))
          : (e = eg[113]),
          ($ = eQ.map(e)),
          (eg[103] = ez),
          (eg[104] = eQ),
          (eg[105] = eK),
          (eg[106] = M),
          (eg[107] = k),
          (eg[108] = $))
      } else $ = eg[108]
      ;(eg[114] !== eQ || eg[115] !== M
        ? ((W = eQ.every(eM) ? M : null), (eg[114] = eQ), (eg[115] = M), (eg[116] = W))
        : (W = eg[116]),
        eg[117] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, l.jsx)("span", {
              className: "text-sm font-medium",
              children: (0, l.jsx)(c.A, { id: "workspaceAgents.schedules.destination", defaultMessage: "Channel" }),
            })),
            (eg[117] = Z))
          : (Z = eg[117]))
      let e9 = !ex || eb || null != ef
      ;(eg[118] !== e$
        ? ((K = e$.formatMessage({
            id: "workspaceAgents.schedules.destinationLabel",
            defaultMessage: "Automation destination",
          })),
          (eg[118] = e$),
          (eg[119] = K))
        : (K = eg[119]),
        eg[120] !== ey ? ((V = ey.map(eT)), (eg[120] = ey), (eg[121] = V)) : (V = eg[121]))
      let te = e3?.id ?? ""
      return (
        eg[122] !== e5.type
          ? ((Q = (0, l.jsx)(eI, { type: e5.type })), (eg[122] = e5.type), (eg[123] = Q))
          : (Q = eg[123]),
        eg[124] !== e5.channel_id || eg[125] !== e5.type || eg[126] !== e3?.label || eg[127] !== e$
          ? ((X = "slack" === e5.type ? (e3?.label ?? `#${e5.channel_id}`) : e$.formatMessage(Y.chatGptDestination)),
            (eg[124] = e5.channel_id),
            (eg[125] = e5.type),
            (eg[126] = e3?.label),
            (eg[127] = e$),
            (eg[128] = X))
          : (X = eg[128]),
        eg[129] !== ey || eg[130] !== ez
          ? ((J = (e) => {
              ;(e0(e),
                ez?.({
                  actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CHANNEL_CHANGE",
                  schedule: {
                    channelType:
                      ey.find((t) => t.id === e)?.binding.type === "slack"
                        ? "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK"
                        : "CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT",
                  },
                }))
            }),
            (eg[129] = ey),
            (eg[130] = ez),
            (eg[131] = J))
          : (J = eg[131]),
        eg[132] !== e9 ||
        eg[133] !== K ||
        eg[134] !== V ||
        eg[135] !== te ||
        eg[136] !== Q ||
        eg[137] !== X ||
        eg[138] !== J
          ? ((ee = (0, l.jsx)("div", {
              className: "border-t border-default pt-5",
              children: (0, l.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  Z,
                  (0, l.jsx)(ej, {
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
            (eg[132] = e9),
            (eg[133] = K),
            (eg[134] = V),
            (eg[135] = te),
            (eg[136] = Q),
            (eg[137] = X),
            (eg[138] = J),
            (eg[139] = ee))
          : (ee = eg[139]),
        eg[140] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = (0, l.jsx)(c.A, {
              id: "workspaceAgents.schedules.prompt",
              defaultMessage: "Additional instructions",
            })),
            (eg[140] = et))
          : (et = eg[140]),
        eg[141] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, l.jsxs)("span", {
              className: "flex items-baseline gap-1 text-sm font-medium text-default select-none",
              children: [
                et,
                (0, l.jsx)("span", {
                  className: "font-normal text-tertiary",
                  children: (0, l.jsx)(c.A, { id: "workspaceAgents.schedules.optional", defaultMessage: "(Optional)" }),
                }),
              ],
            })),
            (eg[141] = en))
          : (en = eg[141]),
        eg[142] !== e$
          ? ((el = e$.formatMessage({
              id: "workspaceAgents.schedules.instructionsLabel",
              defaultMessage: "Additional instructions",
            })),
            (eg[142] = e$),
            (eg[143] = el))
          : (el = eg[143]),
        eg[144] !== eh || eg[145] !== e$
          ? ((ea = eh?.trim()
              ? e$.formatMessage(
                  {
                    id: "workspaceAgents.schedules.namedInstructionsPlaceholder",
                    defaultMessage: "What should {agentName} do?",
                  },
                  { agentName: eh },
                )
              : e$.formatMessage({
                  id: "workspaceAgents.schedules.instructionsPlaceholder",
                  defaultMessage: "What should I do?",
                })),
            (eg[144] = eh),
            (eg[145] = e$),
            (eg[146] = ea))
          : (ea = eg[146]),
        eg[147] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (e) => eZ(e.target.value)), (eg[147] = es))
          : (es = eg[147]),
        eg[148] !== eW || eg[149] !== el || eg[150] !== ea
          ? ((ei = (0, l.jsxs)("label", {
              className: "flex flex-col gap-2",
              children: [
                en,
                (0, l.jsx)("textarea", {
                  className: "instructions-eaZOg_",
                  name: "instructions",
                  "aria-label": el,
                  rows: 4,
                  placeholder: ea,
                  maxLength: 6e3,
                  value: eW,
                  onChange: es,
                }),
              ],
            })),
            (eg[148] = eW),
            (eg[149] = el),
            (eg[150] = ea),
            (eg[151] = ei))
          : (ei = eg[151]),
        eg[152] !== C
          ? ((er = C
              ? null
              : (0, l.jsx)(x.l, {
                  type: "error",
                  content: (0, l.jsx)(c.A, {
                    id: "workspaceAgents.schedules.invalidRule",
                    defaultMessage:
                      "Choose a repeating schedule with one time per rule, at least 15 minutes apart, without a year, end date, or numbered weekday",
                  }),
                })),
            (eg[152] = C),
            (eg[153] = er))
          : (er = eg[153]),
        eg[154] !== e8 || eg[155] !== $ || eg[156] !== W || eg[157] !== ee || eg[158] !== ei || eg[159] !== er
          ? ((ed = (0, l.jsxs)("fieldset", {
              disabled: e8,
              className: "flex min-w-0 flex-col gap-5",
              children: [$, W, ee, ei, er],
            })),
            (eg[154] = e8),
            (eg[155] = $),
            (eg[156] = W),
            (eg[157] = ee),
            (eg[158] = ei),
            (eg[159] = er),
            (eg[160] = ed))
          : (ed = eg[160]),
        eg[161] !== eO || eg[162] !== z || eg[163] !== F || eg[164] !== ed
          ? ((eu = (0, l.jsx)(v.OO, {
              className: "min-h-0 overflow-y-auto",
              children: (0, l.jsxs)("div", { className: "min-w-0 shrink-0", children: [eO, z, F, ed] }),
            })),
            (eg[161] = eO),
            (eg[162] = z),
            (eg[163] = F),
            (eg[164] = ed),
            (eg[165] = eu))
          : (eu = eg[165]),
        eg[166] !== ex ||
        eg[167] !== m ||
        eg[168] !== e7 ||
        eg[169] !== eU ||
        eg[170] !== eP ||
        eg[171] !== eb ||
        eg[172] !== e6 ||
        eg[173] !== ep
          ? ((ec =
              ex || null != eU
                ? (0, l.jsx)(v.OO, {
                    spacing: "large",
                    children: (0, l.jsxs)(v.Es, {
                      expandSingleButton: !1,
                      children: [
                        (0, l.jsxs)("div", {
                          className: "me-auto flex items-center gap-1",
                          children: [
                            ex && null != eP
                              ? (0, l.jsx)(i.m, {
                                  content: e6,
                                  children: (0, l.jsxs)(O.$, {
                                    color: "ghostActive",
                                    size: "dialog",
                                    radius: "full",
                                    "aria-label": e6,
                                    type: "button",
                                    disabled: !m,
                                    onClick: () => {
                                      eP(e7)
                                    },
                                    children: [
                                      (0, l.jsx)(A.Tv9, {}),
                                      (0, l.jsx)(c.A, {
                                        id: "workspaceAgents.schedules.saveAndRun",
                                        defaultMessage: "Run",
                                      }),
                                    ],
                                  }),
                                })
                              : null,
                            null != eU
                              ? (0, l.jsxs)(O.$, {
                                  color: "ghostDanger",
                                  size: "dialog",
                                  radius: "full",
                                  type: "button",
                                  disabled: eb,
                                  onClick: (e) => eU(e.currentTarget),
                                  children: [
                                    (0, l.jsx)(A.cSG, {}),
                                    (0, l.jsx)(c.A, {
                                      id: "workspaceAgents.schedules.delete",
                                      defaultMessage: "Delete",
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                        ex
                          ? (0, l.jsx)(O.$, {
                              size: "dialogAction",
                              radius: "full",
                              type: "submit",
                              disabled: !m,
                              loading: eb,
                              children:
                                null == ep
                                  ? (0, l.jsx)(c.A, {
                                      id: "workspaceAgents.schedules.compactAdd",
                                      defaultMessage: "Add automation",
                                    })
                                  : (0, l.jsx)(c.A, {
                                      id: "workspaceAgents.schedules.save",
                                      defaultMessage: "Update automation",
                                    }),
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (eg[166] = ex),
            (eg[167] = m),
            (eg[168] = e7),
            (eg[169] = eU),
            (eg[170] = eP),
            (eg[171] = eb),
            (eg[172] = e6),
            (eg[173] = ep),
            (eg[174] = ec))
          : (ec = eg[174]),
        eg[175] !== D || eg[176] !== G || eg[177] !== eu || eg[178] !== ec
          ? ((em = (0, l.jsxs)(v.R4, {
              as: "form",
              variant: "chatgpt",
              className: "form-JXyvQT",
              size: "scrollable",
              onSubmit: D,
              children: [G, eu, ec],
            })),
            (eg[175] = D),
            (eg[176] = G),
            (eg[177] = eu),
            (eg[178] = ec),
            (eg[179] = em))
          : (em = eg[179]),
        em
      )
    }
    function eT(e) {
      let { id: t, label: n, binding: a } = e
      return { id: t, label: n, icon: (0, l.jsx)(eI, { type: a.type }) }
    }
    function eM(e) {
      return !["daily", "weekdays", "weekly", "monthly"].includes(e.config.mode)
    }
    function eC(e) {
      return null == e.config.oneTimeDate
    }
    function ek(e) {
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
    function eI(e) {
      let t,
        n = (0, a.c)(2),
        { type: s } = e
      return (
        n[0] !== s
          ? ((t =
              "slack" === s
                ? (0, l.jsx)(p.R, { alt: "", knownAppId: "slack", size: 20, fallback: (0, l.jsx)(T.A, {}) })
                : (0, l.jsx)(T.A, { "aria-hidden": !0, className: "size-5 shrink-0" })),
            (n[0] = s),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function eL(e) {
      return "hourly" === e
        ? "CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY"
        : ["daily", "weekdays", "weekly"].includes(e)
          ? "CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY"
          : "CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM"
    }
    var eU = n("qQGj"),
      eG = n("Kwur")
    function eP(e) {
      let t,
        n,
        s,
        i,
        r,
        u,
        c,
        h,
        p = (0, a.c)(31),
        {
          accountId: y,
          agentId: x,
          channelBinding: b,
          initialSelectedScheduleId: v,
          versionScope: j,
          onPreviewRun: A,
          onClose: w,
          onCloseAutoFocus: T,
        } = e,
        E = void 0 === j ? "published" : j,
        N = (0, o.gh)(M.u),
        S = (0, m.Zp)(),
        D = (0, C.a)(),
        I = (0, d.useRef)(null)
      ;(p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => I.current?.abort()), (n = []), (p[0] = t), (p[1] = n))
        : ((t = p[0]), (n = p[1])),
        (0, d.useEffect)(t, n))
      let L = (0, o._U)(eU.M, x),
        [G, P] = (0, d.useState)(!1)
      return (
        p[2] !== L || p[3] !== w
          ? ((s = (e) => {
              e || L.isPending || w()
            }),
            (p[2] = L),
            (p[3] = w),
            (p[4] = s))
          : (s = p[4]),
        p[5] !== T
          ? ((i = {
              onCloseAutoFocus: (e) => {
                null != T && (e.preventDefault(), T())
              },
            }),
            (p[5] = T),
            (p[6] = i))
          : (i = p[6]),
        p[7] !== y || p[8] !== x || p[9] !== D || p[10] !== S || p[11] !== w || p[12] !== N
          ? ((r = async (e) => {
              if (null != I.current) return null
              let t = new AbortController()
              return (
                (I.current = t),
                P(!0),
                (async function (e, t, n, l, a) {
                  let { authenticatedUserId: s, accountUserId: i } = e.get(g.PO),
                    r = e.get(g.o8),
                    o = () => {
                      let n = e.get(g.PO)
                      return (
                        !a.aborted &&
                        null != r &&
                        e.get(g.o8) === r &&
                        null != s &&
                        null != i &&
                        n.authenticatedUserId === s &&
                        n.accountUserId === i &&
                        e.get(g.chatGptAuthenticatedAccountId$) === t &&
                        !0 === e.get(k.XL)
                      )
                    }
                  if (null == s || null == r || !o()) return null
                  let d = { accountId: t, userId: r },
                    u = () => {
                      if ((a.throwIfAborted(), !o())) throw Error("The active account changed during an automation run")
                    },
                    c = await eG.Request.safePost("/hermes/agent/{agent_id}/triggers/{trigger_id}/run_now", {
                      parameters: { path: { agent_id: n, trigger_id: l } },
                      expectedIdentity: d,
                      assertRequestCurrent: u,
                      signal: AbortSignal.timeout(45e3),
                    }).catch((e) => {
                      if (o()) throw e
                      return null
                    })
                  if (null == c || !o()) return null
                  if ("dispatched" !== c.status && "completed" !== c.status)
                    throw Error("The automation was not started")
                  e.query.invalidate(U.sy, n)
                  let m = c.conversation_id?.trim()
                  if (m) return { conversationId: m }
                  let h = c.run_id?.trim()
                  if (!h) return { conversationId: null }
                  for (let e = 0; e < 6; e++) {
                    if ((e > 0 && (await new Promise((e) => setTimeout(e, 350))), !o())) return null
                    try {
                      let e = await eG.Request.safeGet("/hermes/agent/{agent_id}/conversations", {
                        parameters: { path: { agent_id: n }, query: { limit: 10 } },
                        expectedIdentity: d,
                        assertRequestCurrent: u,
                        signal: a,
                      })
                      if (!o()) return null
                      let t = e.items.find((e) => e.fiber_id === h)?.id.trim()
                      if (t) return { conversationId: t }
                    } catch {
                      return o() ? { conversationId: null } : null
                    }
                  }
                  return { conversationId: null }
                })(N, y, x, e, t.signal)
                  .then((e) => (e?.conversationId != null && D() && (w(), S((0, f.mv)(e.conversationId))), e))
                  .finally(() => {
                    ;((I.current = null), D() && P(!1))
                  })
              )
            }),
            (p[7] = y),
            (p[8] = x),
            (p[9] = D),
            (p[10] = S),
            (p[11] = w),
            (p[12] = N),
            (p[13] = r))
          : (r = p[13]),
        p[14] !== D || p[15] !== w || p[16] !== A
          ? ((u =
              null == A
                ? void 0
                : (e) => (
                    P(!0),
                    Promise.resolve()
                      .then(() => A(e))
                      .then(() => {
                        D() && w()
                      })
                      .finally(() => {
                        D() && P(!1)
                      })
                  )),
            (p[14] = D),
            (p[15] = w),
            (p[16] = A),
            (p[17] = u))
          : (u = p[17]),
        p[18] !== y ||
        p[19] !== x ||
        p[20] !== b ||
        p[21] !== v ||
        p[22] !== G ||
        p[23] !== r ||
        p[24] !== u ||
        p[25] !== E
          ? ((c = (0, l.jsx)(eR, {
              accountId: y,
              agentId: x,
              channelBinding: b,
              initialSelectedScheduleId: v,
              versionScope: E,
              previewPending: G,
              onPublishedRun: r,
              onPreviewRun: u,
            })),
            (p[18] = y),
            (p[19] = x),
            (p[20] = b),
            (p[21] = v),
            (p[22] = G),
            (p[23] = r),
            (p[24] = u),
            (p[25] = E),
            (p[26] = c))
          : (c = p[26]),
        p[27] !== s || p[28] !== i || p[29] !== c
          ? ((h = (0, l.jsx)(_.lG, {
              size: "responsiveSheet",
              variant: "chatgpt",
              contentClassName: "dialog-KHYIQJ",
              open: !0,
              onOpenChange: s,
              contentProps: i,
              children: c,
            })),
            (p[27] = s),
            (p[28] = i),
            (p[29] = c),
            (p[30] = h))
          : (h = p[30]),
        h
      )
    }
    function eR(e) {
      let t,
        n,
        m,
        f,
        j,
        I,
        P,
        R,
        O,
        H,
        q,
        z,
        F,
        $,
        W,
        Z,
        K,
        V,
        Q,
        X,
        J,
        ee,
        et,
        en,
        el = (0, a.c)(98),
        {
          accountId: ea,
          agentId: es,
          channelBinding: ei,
          versionScope: er,
          initialSelectedScheduleId: eo,
          previewPending: ed,
          onPublishedRun: eu,
          onPreviewRun: ec,
        } = e,
        em = (0, o.gh)(M.u),
        eg = (0, u.A)(),
        eh = (0, C.a)(),
        ef = (0, o.Ul)(g.o8),
        [ep, ey] = (0, d.useState)(!1),
        { data: ex, isPending: eb, error: e_, refetch: ev } = (0, o._U)(eU.k, es),
        ej = "published" === er
      el[0] !== ej ? ((t = { enabled: ej }), (el[0] = ej), (el[1] = t)) : (t = el[1])
      let { data: eT, error: eM, isPending: eC, refetch: ek } = (0, o._U)(U.a3, es, t),
        eE = "draft" === er
      el[2] !== eE ? ((n = { enabled: eE }), (el[2] = eE), (el[3] = n)) : (n = el[3])
      let { data: eN, error: eS, isPending: eD, refetch: eI } = (0, o._U)(N.m9, es, n),
        eL = "draft" === er ? eN : eT,
        eG = "draft" === er ? eN?.draft_version : eT?.latest_published_version,
        eP = "draft" === er ? eS : eM,
        eR = "draft" === er ? eD : eC,
        ez = eN?.agent.viewer_capability === "hermes_admin" || eN?.agent.viewer_capability === "hermes_write",
        { accountUserId: eB, authenticatedUserId: eF } = (0, o.Ul)(g.PO),
        eY = !0 === (0, o.Ul)(k.XL),
        e$ = !0 === (0, o.Ul)(k.lF),
        eW = (0, o._U)(eU.M, es),
        eZ = eW.isPending || ed,
        eK = (0, d.useId)(),
        eV = (0, d.useRef)(null),
        eQ = (0, d.useRef)(null),
        [eX, eJ] = (0, d.useState)(eo ?? null),
        [e0, e1] = (0, d.useState)(null),
        [e2, e3] = (0, d.useState)(null),
        e5 = ex?.filter(
          (e) =>
            "SCHEDULE" === e.trigger.type &&
            (null == ei ||
              ("slack" === ei.type
                ? e.trigger.channel_binding?.type === "slack" &&
                  e.trigger.channel_binding.channel_id === ei.channel_id &&
                  e.trigger.channel_binding.link_id === ei.link_id
                : e.trigger.channel_binding?.type !== "slack")),
        ),
        e4 = ei?.type === "chatgpt" || ei?.type === "slack" ? e5?.some(eq) : !!e5?.length,
        e7 =
          e2 ??
          (null == eo &&
            null != ex &&
            !e4 &&
            null == e_ &&
            null == eP &&
            !eR &&
            eY &&
            null != eB &&
            null != eG &&
            ("published" === er || ez)),
        [e6, e8] = (0, d.useState)(null),
        e9 = eG?.config?.tools?.connectors?.length !== 0,
        te = e7 && e9
      el[4] !== ea || el[5] !== es || el[6] !== ef || el[7] !== te || el[8] !== er
        ? ((m = (0, E.As)({ accountId: ea, userId: ef, agentId: es, versionScope: er, enabled: te })),
          (el[4] = ea),
          (el[5] = es),
          (el[6] = ef),
          (el[7] = te),
          (el[8] = er),
          (el[9] = m))
        : (m = el[9])
      let { data: tt, isFetching: tn, error: tl, refetch: ta } = (0, r.I)(m)
      el[10] !== tt ? ((f = tt?.some(eH)), (el[10] = tt), (el[11] = f)) : (f = el[11])
      let ts = f
      el[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, l.jsx)(c.A, {
            id: "workspaceAgents.schedules.checkingConnections",
            defaultMessage: "Checking app connections\u2026",
          })),
          (el[12] = j))
        : (j = el[12])
      let ti = j,
        tr = e5?.find((e) => {
          let { id: t } = e
          return t === eX
        }),
        to = tr?.trigger.type === "SCHEDULE" ? tr.trigger : null,
        td = e5?.find((e) => {
          let { id: t } = e
          return t === e0
        }),
        tu = eY && null != eB && null != eG && ("published" === er || ez),
        tc = (0, S.jd)(eG),
        tm = [{ id: "chatgpt", label: eg.formatMessage(Y.chatGptDestination), binding: { type: "chatgpt" } }]
      if ((e$ && eL?.agent.creator_id === eB && tm.push(...tc), null != ei)) {
        let e = (0, S.XL)(tm, ei)
        tm = null == e ? [] : [e]
      }
      el[13] !== eY || el[14] !== e$ || el[15] !== eL?.agent.creator_id || el[16] !== eB
        ? ((I = (e) =>
            (0, S.Uk)({ resource: e, userId: eB, agentCreatorId: eL?.agent.creator_id, canAccess: eY, canShare: e$ })),
          (el[13] = eY),
          (el[14] = e$),
          (el[15] = eL?.agent.creator_id),
          (el[16] = eB),
          (el[17] = I))
        : (I = el[17])
      let tg = I
      el[18] !== eg || el[19] !== e8
        ? ((P = (e) =>
            e8(
              (e instanceof Error ? e.message : null) ||
                eg.formatMessage({
                  id: "workspaceAgents.schedules.actionError",
                  defaultMessage: "Could not update the automation. Try again",
                }),
            )),
          (el[18] = eg),
          (el[19] = e8),
          (el[20] = P))
        : (P = el[20])
      let th = P
      el[21] !== e8
        ? ((R = () => {
            ;(eJ(null), e3(!1), e1(null), e8(null))
          }),
          (el[21] = e8),
          (el[22] = R))
        : (R = el[22])
      let tf = R
      el[23] !== ea ||
      el[24] !== es ||
      el[25] !== eF ||
      el[26] !== eg ||
      el[27] !== ec ||
      el[28] !== em ||
      el[29] !== e8 ||
      el[30] !== eB ||
      el[31] !== er
        ? ((O = async (e) => {
            let t = em.get(g.PO)
            if (
              null == ec ||
              "SCHEDULE" !== e.trigger.type ||
              em.get(g.chatGptAuthenticatedAccountId$) !== ea ||
              t.accountUserId !== eB ||
              t.authenticatedUserId !== eF ||
              null == eF ||
              !0 !== em.get(k.XL)
            )
              return
            e8(null)
            let n = (0, G.sA)(
              em,
              es,
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
              er,
            )
            try {
              ;(await ec(
                e.trigger.instructions?.trim() ||
                  eg.formatMessage({
                    id: "workspaceAgents.schedules.previewFallbackPrompt",
                    defaultMessage: "Start execution",
                  }),
              ),
                n(!0))
            } catch (e) {
              ;(n(!1),
                e8(
                  e instanceof Error
                    ? e.message
                    : eg.formatMessage({
                        id: "workspaceAgents.schedules.previewError",
                        defaultMessage: "Could not start the preview. Try again",
                      }),
                ))
            }
          }),
          (el[23] = ea),
          (el[24] = es),
          (el[25] = eF),
          (el[26] = eg),
          (el[27] = ec),
          (el[28] = em),
          (el[29] = e8),
          (el[30] = eB),
          (el[31] = er),
          (el[32] = O))
        : (O = el[32])
      let tp = O
      el[33] !== ea ||
      el[34] !== es ||
      el[35] !== eg ||
      el[36] !== eh ||
      el[37] !== eu ||
      el[38] !== eZ ||
      el[39] !== ef ||
      el[40] !== em ||
      el[41] !== e8
        ? ((H = async (e) => {
            let t = () => em.get(g.chatGptAuthenticatedAccountId$) === ea && em.get(g.o8) === ef
            if (eZ || null == ef || !t()) return
            ;(e8(null), ey(!1))
            let n = (0, G.sA)(
              em,
              es,
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
              let l = await eu(e.id)
              if (!t()) return
              ;(n(null != l), null != l && eh() && ey(!0))
            } catch {
              if (!t()) return
              ;(n(!1),
                eh() &&
                  e8(
                    eg.formatMessage({
                      id: "workspaceAgents.schedules.runFailed",
                      defaultMessage: "Could not start the automation. Try again",
                    }),
                  ))
            }
          }),
          (el[33] = ea),
          (el[34] = es),
          (el[35] = eg),
          (el[36] = eh),
          (el[37] = eu),
          (el[38] = eZ),
          (el[39] = ef),
          (el[40] = em),
          (el[41] = e8),
          (el[42] = H))
        : (H = el[42])
      let ty = H,
        tx = e5?.map((e, t, n) => {
          if ("SCHEDULE" !== e.trigger.type) return null
          let a = e.trigger,
            { canDelete: r } = tg(e),
            o = eY && e.owner_user_id === eB && (a.channel_binding?.type !== "slack" || eL?.agent.creator_id === eB),
            d = D(a, eg),
            u =
              a.channel_binding?.type === "slack"
                ? ((0, S.XL)(tc, a.channel_binding)?.label ?? `#${a.channel_binding.channel_id}`)
                : eg.formatMessage(Y.chatGptDestination),
            m = o && ("draft" === er ? null != ec : eL?.latest_published_version != null),
            g =
              "draft" === er
                ? eg.formatMessage({ id: "workspaceAgents.schedules.runPreview", defaultMessage: "Run preview" })
                : eg.formatMessage({
                    id: "workspaceAgents.schedules.runPublished",
                    defaultMessage: "Run published version",
                  }),
            h = eg.formatMessage({ id: "workspaceAgents.schedules.deleteRow", defaultMessage: "Delete automation" })
          return (0, l.jsx)(
            w.fy,
            {
              density: "profile",
              surface: "plain",
              showDivider: t < n.length - 1,
              ariaLabel: d,
              ariaDescribedBy: `${eK}-${e.id}-details${!1 === a.enabled ? ` ${eK}-${e.id}-paused` : ""}`,
              isSelected: eX === e.id,
              hasInteractiveContent: !0,
              isDisabled: eZ,
              title: d,
              onSelect: () => {
                ;((0, G.OW)(
                  em,
                  es,
                  {
                    actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_SELECT",
                    schedule: { scheduleTriggerId: e.id },
                  },
                  er,
                ),
                  eJ(e.id),
                  e8(null))
              },
              children: (0, l.jsxs)("div", {
                className: "flex min-w-0 items-center gap-2 px-4",
                children: [
                  (0, l.jsx)("span", {
                    className: "-ms-1 me-2 flex shrink-0 items-center",
                    children:
                      a.channel_binding?.type === "slack"
                        ? (0, l.jsx)(p.R, { alt: "", knownAppId: "slack", size: 20, fallback: (0, l.jsx)(A.JZN, {}) })
                        : (0, l.jsx)(T.A, { "aria-hidden": !0, className: "size-5 shrink-0" }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, l.jsx)("span", {
                            className: "truncate text-sm leading-5 font-medium",
                            children: "published" === er ? D(a, eg) : d,
                          }),
                          !1 === a.enabled
                            ? (0, l.jsx)("span", {
                                id: `${eK}-${e.id}-paused`,
                                children: (0, l.jsx)(y.E, {
                                  variant: "outline",
                                  children: (0, l.jsx)(c.A, {
                                    id: "workspaceAgents.schedules.paused",
                                    defaultMessage: "Paused",
                                  }),
                                }),
                              })
                            : null,
                        ],
                      }),
                      (0, l.jsx)("div", {
                        id: `${eK}-${e.id}-details`,
                        className: "truncate text-sm leading-5 text-secondary",
                        children: a.instructions
                          ? (0, l.jsx)(c.A, {
                              id: "workspaceAgents.schedules.rowDescription",
                              defaultMessage: "{destination} \xb7 {instructions}",
                              values: { destination: u, instructions: a.instructions },
                            })
                          : u,
                      }),
                    ],
                  }),
                  m || r
                    ? (0, l.jsxs)("div", {
                        className:
                          "pointer-events-auto flex shrink-0 items-center gap-1.5 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 pointer-coarse:opacity-100",
                        children: [
                          m
                            ? (0, l.jsx)(i.m, {
                                content: g,
                                children: (0, l.jsx)(s.$, {
                                  "aria-label": g,
                                  className: "enabled:text-default",
                                  color: "secondary",
                                  variant: "outline",
                                  size: "xl",
                                  iconSize: "lg",
                                  pill: !0,
                                  uniform: !0,
                                  "aria-disabled": eZ,
                                  onClick: () => {
                                    eZ || ("draft" === er ? tp(e) : ty(e))
                                  },
                                  children: (0, l.jsx)(A.Tv9, {}),
                                }),
                              })
                            : null,
                          r
                            ? (0, l.jsx)(i.m, {
                                content: h,
                                children: (0, l.jsx)(s.$, {
                                  "aria-label": h,
                                  className: "enabled:text-default",
                                  color: "secondary",
                                  variant: "outline",
                                  size: "xl",
                                  iconSize: "lg",
                                  pill: !0,
                                  uniform: !0,
                                  disabled: eZ,
                                  onClick: (t) => {
                                    ;((eV.current = t.currentTarget), e1(e.id), e8(null))
                                  },
                                  children: (0, l.jsx)(A.zwW, {}),
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
      if (null != e_ || null != eP) {
        let e
        ;(el[43] !== ev || el[44] !== eI || el[45] !== ek || el[46] !== er
          ? ((e = (0, l.jsx)(L.p, {
              onRetry: () => {
                ;(ev(), "draft" === er ? eI() : ek())
              },
            })),
            (el[43] = ev),
            (el[44] = eI),
            (el[45] = ek),
            (el[46] = er),
            (el[47] = e))
          : (e = el[47]),
          (tx = e))
      } else if (eb || eR) {
        let e
        ;(el[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(b.Q, {
              children: (0, l.jsx)(c.A, {
                id: "workspaceAgents.schedules.loading",
                defaultMessage: "Loading automations\u2026",
              }),
            })),
            (el[48] = e))
          : (e = el[48]),
          (tx = e))
      } else if (e5?.length === 0) {
        let e
        ;(el[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(b.Q, {
              children: (0, l.jsx)(c.A, {
                id: "workspaceAgents.schedules.empty",
                defaultMessage: "No automations yet",
              }),
            })),
            (el[49] = e))
          : (e = el[49]),
          (tx = e))
      }
      el[50] !== eL || el[51] !== er
        ? ((q =
            "draft" === er && null != eL && null == eL.latest_published_version
              ? (0, l.jsx)("div", {
                  className: "mb-3",
                  children: (0, l.jsx)(B, {
                    variant: "soft",
                    children: (0, l.jsx)(c.A, {
                      id: "workspaceAgents.schedules.unpublishedDraft",
                      defaultMessage: "Automations won't run until you create your agent",
                    }),
                  }),
                })
              : null),
          (el[50] = eL),
          (el[51] = er),
          (el[52] = q))
        : (q = el[52])
      let tb = q
      ;(el[53] !== eg
        ? ((z = eg.formatMessage({
            id: "workspaceAgents.schedules.automationName",
            defaultMessage: "this automation",
          })),
          (el[53] = eg),
          (el[54] = z))
        : (z = el[54]),
        el[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = () => {
              eV.current?.isConnected ? eV.current.focus() : eQ.current?.focus()
            }),
            (el[55] = F))
          : (F = el[55]),
        el[56] !== eZ
          ? (($ = () => {
              eZ || e1(null)
            }),
            (el[56] = eZ),
            (el[57] = $))
          : ($ = el[57]))
      let t_ = (0, l.jsx)(h.o, {
        open: null != td,
        isPending: eZ,
        name: z,
        onCloseAutoFocus: F,
        onCancel: $,
        onConfirm: () => {
          null == td ||
            eZ ||
            (e8(null),
            eW.mutate(
              { accountId: ea, versionScope: er, resource: td, delete: !0 },
              {
                onSuccess: tf,
                onError: (e) => {
                  ;(e1(null), th(e))
                },
              },
            ))
        },
      })
      if (e7 || null != to) {
        let e, t, n
        return (
          el[58] !== tn || el[59] !== tl || el[60] !== e7 || el[61] !== ts || el[62] !== e9
            ? ((e =
                e7 && e9 && tn && !ts && null == tl
                  ? (0, l.jsx)("span", { role: "status", className: "sr-only", children: ti })
                  : null),
              (el[58] = tn),
              (el[59] = tl),
              (el[60] = e7),
              (el[61] = ts),
              (el[62] = e9),
              (el[63] = e))
            : (e = el[63]),
          el[64] !== ta ||
          el[65] !== tn ||
          el[66] !== tl ||
          el[67] !== e7 ||
          el[68] !== ts ||
          el[69] !== e9 ||
          el[70] !== e8
            ? ((t =
                e7 && e9 && (null != tl || ts)
                  ? (0, l.jsx)(x.l, {
                      type: tl ? "error" : "normal",
                      content: tn
                        ? ti
                        : (0, l.jsx)(c.A, {
                            id: "workspaceAgents.schedules.repairConnections",
                            defaultMessage:
                              "Review this agent's app connections in <link>ChatGPT settings</link>, then check again to continue",
                            values: { link: eO },
                          }),
                      primaryCtaText: (0, l.jsx)(c.A, {
                        id: "workspaceAgents.schedules.checkConnections",
                        defaultMessage: "Check again",
                      }),
                      isPrimaryCtaDisabled: tn,
                      onPrimaryCtaClick: () => {
                        ;(e8(null), ta())
                      },
                    })
                  : null),
              (el[64] = ta),
              (el[65] = tn),
              (el[66] = tl),
              (el[67] = e7),
              (el[68] = ts),
              (el[69] = e9),
              (el[70] = e8),
              (el[71] = t))
            : (t = el[71]),
          el[72] !== e || el[73] !== t || el[74] !== tb
            ? ((n = (0, l.jsxs)(l.Fragment, { children: [tb, e, t] })),
              (el[72] = e),
              (el[73] = t),
              (el[74] = tb),
              (el[75] = n))
            : (n = el[75]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              t_,
              (0, l.jsx)(
                ew,
                {
                  agentName: eG?.name,
                  channelBinding: ei,
                  onDelete:
                    null != tr && tg(tr).canDelete
                      ? (e) => {
                          ;((eV.current = e), e1(tr.id), e8(null))
                        }
                      : void 0,
                  onEnabledChange:
                    null != tr && null != to && tg(tr).canEdit
                      ? (e) => {
                          ;(e8(null),
                            eW.mutate(
                              { accountId: ea, versionScope: er, resource: tr, trigger: { ...to, enabled: e } },
                              { onError: th },
                            ))
                        }
                      : void 0,
                  showBackButton: null != e5 && e5.length > 0,
                  trigger: to,
                  destinations: tm,
                  canEdit: null == tr ? tu : tg(tr).canEdit,
                  pending: eZ,
                  saveDisabled:
                    (null != ei && 0 === tm.length) || (e7 && e9 && (tn || null == tt || null != tl || !0 === ts)),
                  notice: n,
                  onInteraction: (e) =>
                    (0, G.OW)(em, es, { ...e, schedule: { ...e.schedule, scheduleTriggerId: tr?.id } }, er),
                  error: e6,
                  onClose: tf,
                  runMode: "published" === er ? "published" : "preview",
                  onSaveAndRun:
                    "draft" === er && null == ec
                      ? void 0
                      : async (e) => {
                          e8(null)
                          try {
                            let t = await eW.mutateAsync({ accountId: ea, versionScope: er, resource: tr, trigger: e })
                            if (null == t) return
                            ;(e3(!1), eJ(t.id), "published" === er ? await ty(t) : await tp(t))
                          } catch (e) {
                            th(e)
                          }
                        },
                  onSave: (e) => {
                    ;(e8(null),
                      eW.mutate(
                        { accountId: ea, versionScope: er, resource: tr, trigger: e },
                        { onSuccess: tf, onError: th },
                      ))
                  },
                },
                tr?.id ?? "new",
              ),
            ],
          })
        )
      }
      ;(el[76] !== ep
        ? ((W = ep
            ? (0, l.jsx)(x.l, {
                type: "success",
                content: (0, l.jsx)(c.A, {
                  id: "workspaceAgents.schedules.runStarted",
                  defaultMessage: "Automation started. Its conversation will appear in agent activity.",
                }),
              })
            : null),
          (el[76] = ep),
          (el[77] = W))
        : (W = el[77]),
        el[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, l.jsx)(v.c7, {
              titleClassName: eA,
              title: (0, l.jsx)(_.L3, {
                className: eA,
                children: (0, l.jsx)(c.A, { id: "workspaceAgents.schedules.title", defaultMessage: "Automations" }),
              }),
            })),
            (el[78] = Z))
          : (Z = el[78]),
        el[79] !== W ? ((K = (0, l.jsxs)(v.OO, { children: [W, Z] })), (el[79] = W), (el[80] = K)) : (K = el[80]),
        el[81] !== tb
          ? ((V = null == tb ? null : (0, l.jsx)("div", { className: "mb-4", children: tb })),
            (el[81] = tb),
            (el[82] = V))
          : (V = el[82]))
      let tv = null != e5 && e5.length > 0
      el[83] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = (0, l.jsx)("span", { className: "ms-3 me-2", children: (0, l.jsx)(A.ONy, {}) })), (el[83] = Q))
        : (Q = el[83])
      let tj = !tu || eZ
      return (
        el[84] !== es || el[85] !== em || el[86] !== e8 || el[87] !== er
          ? ((X = () => {
              ;((0, G.OW)(em, es, { actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_ADD" }, er),
                e3(!0),
                e8(null))
            }),
            (el[84] = es),
            (el[85] = em),
            (el[86] = e8),
            (el[87] = er),
            (el[88] = X))
          : (X = el[88]),
        el[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, l.jsx)("span", {
              className: "block text-sm leading-5 font-medium",
              children: (0, l.jsx)(c.A, { id: "workspaceAgents.schedules.add", defaultMessage: "Add automation" }),
            })),
            (el[89] = J))
          : (J = el[89]),
        el[90] !== tv || el[91] !== tj || el[92] !== X
          ? ((ee = (0, l.jsx)(w.fy, {
              density: "profile",
              surface: "plain",
              showDivider: tv,
              icon: Q,
              isSelected: !1,
              isDisabled: tj,
              onSelect: X,
              title: J,
            })),
            (el[90] = tv),
            (el[91] = tj),
            (el[92] = X),
            (el[93] = ee))
          : (ee = el[93]),
        el[94] !== e6
          ? ((et =
              null == e6
                ? null
                : (0, l.jsx)("div", { className: "my-4", children: (0, l.jsx)(x.l, { type: "error", content: e6 }) })),
            (el[94] = e6),
            (el[95] = et))
          : (et = el[95]),
        el[96] !== tx
          ? ((en = (0, l.jsx)("div", { className: "flex flex-col", children: tx })), (el[96] = tx), (el[97] = en))
          : (en = el[97]),
        (0, l.jsxs)(v.R4, {
          size: "viewport",
          variant: "chatgpt",
          className: "list-SMJmm9",
          children: [
            K,
            (0, l.jsx)(v.OO, {
              children: (0, l.jsxs)("div", {
                ref: eQ,
                className: "flex flex-col",
                tabIndex: -1,
                children: [V, ee, et, en, t_],
              }),
            }),
          ],
        })
      )
    }
    function eO(e) {
      return (0, l.jsx)(j.G, {
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
    function eq(e) {
      let { trigger: t } = e
      return "SCHEDULE" === t.type && !1 !== t.enabled
    }
  },
  K2hS(e, t, n) {
    n.d(t, { q7: () => k, bL: () => b })
    var l = n("zd8w"),
      a = n("zWxU"),
      s = n("Fc3g"),
      i = n("XDr4"),
      r = n("kUVq"),
      o = n("Hj0L"),
      d = n("ABep"),
      u = Object.defineProperty,
      c = l.forwardRef(
        u(
          function (e, t) {
            let { pressed: n, defaultPressed: l, onPressedChange: a, ...i } = e,
              [u, c] = (0, o.i)({ prop: n, onChange: a, defaultProp: l ?? !1, caller: "Toggle" })
            return (0, d.jsx)(s.sG.button, {
              type: "button",
              "aria-pressed": u,
              "data-state": u ? "on" : "off",
              "data-disabled": e.disabled ? "" : void 0,
              ...i,
              ref: t,
              onClick: (0, r.mK)(e.onClick, () => {
                e.disabled || c(!u)
              }),
            })
          },
          "name",
          { value: "Toggle", configurable: !0 },
        ),
      ),
      m = n("k5JT"),
      g = Object.defineProperty,
      h = (e, t) => g(e, "name", { value: t, configurable: !0 }),
      f = "ToggleGroup",
      [p, y] = (0, a.A)(f, [i.RG]),
      x = (0, i.RG)(),
      b = l.forwardRef(
        h(function (e, t) {
          let { type: n, ...l } = e
          if ("single" === n) return (0, d.jsx)(j, { role: "radiogroup", ...l, ref: t })
          if ("multiple" === n) return (0, d.jsx)(A, { role: "toolbar", ...l, ref: t })
          throw Error(`Missing prop \`type\` expected on \`${f}\``)
        }, "ToggleGroup"),
      ),
      [_, v] = p(f),
      j = l.forwardRef(
        h(function (e, t) {
          let { value: n, defaultValue: a, onValueChange: s = h(() => {}, "onValueChange"), ...i } = e,
            [r, u] = (0, o.i)({ prop: n, defaultProp: a ?? "", onChange: s, caller: f })
          return (0, d.jsx)(_, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: l.useMemo(() => (r ? [r] : []), [r]),
            onItemActivate: u,
            onItemDeactivate: l.useCallback(() => u(""), [u]),
            children: (0, d.jsx)(M, { ...i, ref: t }),
          })
        }, "ToggleGroupImplSingle"),
      ),
      A = l.forwardRef(
        h(function (e, t) {
          let { value: n, defaultValue: a, onValueChange: s = h(() => {}, "onValueChange"), ...i } = e,
            [r, u] = (0, o.i)({ prop: n, defaultProp: a ?? [], onChange: s, caller: f }),
            c = l.useCallback((e) => u((t = []) => [...t, e]), [u]),
            m = l.useCallback((e) => u((t = []) => t.filter((t) => t !== e)), [u])
          return (0, d.jsx)(_, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: r,
            onItemActivate: c,
            onItemDeactivate: m,
            children: (0, d.jsx)(M, { ...i, ref: t }),
          })
        }, "ToggleGroupImplMultiple"),
      ),
      [w, T] = p(f),
      M = l.forwardRef(
        h(function (e, t) {
          let {
              __scopeToggleGroup: n,
              disabled: l = !1,
              rovingFocus: a = !0,
              orientation: r,
              dir: o,
              loop: u = !0,
              ...c
            } = e,
            g = x(n),
            h = (0, m.useDirection)(o),
            f = { dir: h, ...c }
          return (0, d.jsx)(w, {
            scope: n,
            rovingFocus: a,
            disabled: l,
            children: a
              ? (0, d.jsx)(i.bL, {
                  asChild: !0,
                  ...g,
                  orientation: r,
                  dir: h,
                  loop: u,
                  children: (0, d.jsx)(s.sG.div, { ...f, ref: t }),
                })
              : (0, d.jsx)(s.sG.div, { ...f, ref: t }),
          })
        }, "ToggleGroupImpl"),
      ),
      C = "ToggleGroupItem",
      k = l.forwardRef(
        h(function (e, t) {
          let n = v(C, e.__scopeToggleGroup),
            a = T(C, e.__scopeToggleGroup),
            s = x(e.__scopeToggleGroup),
            r = n.value.includes(e.value),
            o = a.disabled || e.disabled,
            u = { ...e, pressed: r, disabled: o },
            c = l.useRef(null)
          return a.rovingFocus
            ? (0, d.jsx)(i.q7, {
                asChild: !0,
                ...s,
                focusable: !o,
                active: r,
                ref: c,
                children: (0, d.jsx)(E, { ...u, ref: t }),
              })
            : (0, d.jsx)(E, { ...u, ref: t })
        }, "ToggleGroupItem"),
      ),
      E = l.forwardRef(
        h(function (e, t) {
          let { __scopeToggleGroup: n, value: l, ...a } = e,
            s = v(C, n),
            i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 },
            r = "single" === s.type ? i : void 0
          return (0, d.jsx)(c, {
            ...r,
            ...a,
            ref: t,
            onPressedChange: (e) => {
              e ? s.onItemActivate(l) : s.onItemDeactivate(l)
            },
          })
        }, "ToggleGroupItemImpl"),
      )
  },
}
//# sourceMappingURL=292001.a8b57383af.js.map
