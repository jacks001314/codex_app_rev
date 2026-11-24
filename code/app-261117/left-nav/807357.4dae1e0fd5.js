export const __rspack_esm_ids = [807357]
export const __webpack_modules__ = {
  oVAd(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("ZOYk"),
      o = a("eWPL"),
      i = a("on57"),
      r = a("zd8w"),
      u = a("Wf1j"),
      d = a("oyxz"),
      c = a("Qgfj"),
      m = a("odKs"),
      g = a("hIjX"),
      f = a("meRA"),
      h = a("cOBD"),
      b = a("BCU4"),
      y = a("gM9O"),
      x = a("dUCV"),
      p = a("sn2N"),
      M = a("Sm6l"),
      v = a("JNtf"),
      j = a("mUDD"),
      w = a("HOLv"),
      D = a("zLIa"),
      T = a("AWNZ"),
      k = a("ZEx5")
    let R = ["hourly", "daily", "weekly", "monthly", "yearly"],
      S = Array.from({ length: 12 }, (e, t) => t + 1)
    function L(e) {
      return { id: String(e), label: String(e) }
    }
    function C(e) {
      let t,
        a,
        s,
        u,
        d,
        c,
        m,
        g,
        f = (0, n.c)(22),
        { appearance: h, ariaLabel: b, timeZone: y, value: x, onChange: p } = e,
        M = void 0 === h ? "default" : h,
        v = (0, r.useId)()
      f[0] !== y
        ? ((t = new Intl.DateTimeFormat("en-CA", {
            timeZone: y,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date())),
          (f[0] = y),
          (f[1] = t))
        : (t = f[1])
      let j = t,
        w = "form" === M ? "text-secondary" : "text-tertiary"
      f[2] !== w ? ((a = (0, i.A)("-me-1.5 text-base", w)), (f[2] = w), (f[3] = a)) : (a = f[3])
      let D = `${j}T00:00:00`
      f[4] !== D ? ((s = new Date(D)), (f[4] = D), (f[5] = s)) : (s = f[5])
      let T =
        "form" === M
          ? "[--select-control-font-size:var(--text-form-body)]"
          : "[--select-control-font-size:var(--text-base)]"
      f[6] !== T
        ? ((u = (0, i.A)("[--select-control-font-weight:var(--font-ui-weight)]", T)), (f[6] = T), (f[7] = u))
        : (u = f[7])
      let k = `${x}T00:00:00`
      return (
        f[8] !== k ? ((d = new Date(k)), (f[8] = k), (f[9] = d)) : (d = f[9]),
        f[10] !== p
          ? ((c = (e) => {
              null != e &&
                p(new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(e))
            }),
            (f[10] = p),
            (f[11] = c))
          : (c = f[11]),
        f[12] !== v || f[13] !== d || f[14] !== c || f[15] !== s || f[16] !== u
          ? ((m = (0, l.jsx)(o.l, {
              id: v,
              align: "end",
              dropdownIconType: "chevronDown",
              min: s,
              size: "sm",
              triggerClassName: u,
              triggerDateFormat: "MMM d, yyyy",
              triggerShowIcon: !1,
              value: d,
              valueType: "date",
              variant: "ghost",
              onChange: c,
            })),
            (f[12] = v),
            (f[13] = d),
            (f[14] = c),
            (f[15] = s),
            (f[16] = u),
            (f[17] = m))
          : (m = f[17]),
        f[18] !== b || f[19] !== m || f[20] !== a
          ? ((g = (0, l.jsx)("div", { "aria-label": b, className: a, role: "group", children: m })),
            (f[18] = b),
            (f[19] = m),
            (f[20] = a),
            (f[21] = g))
          : (g = f[21]),
        g
      )
    }
    let N = (0, c.YK)({
        intervalUnit: {
          id: "automations.schedule.intervalUnit",
          defaultMessage: "{unit, select, hour {hours} other {minutes}}",
        },
        endRepeatNever: { id: "inbox.automations.endRepeat.never", defaultMessage: "Never" },
        endRepeatOnDate: { id: "inbox.automations.endRepeat.onDate", defaultMessage: "On date" },
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
      A = { hourly: N.hourly, daily: N.daily, weekly: N.weekly, monthly: N.monthly, yearly: N.yearly },
      I = {
        hourly: N.hourlyUnit,
        daily: N.dailyUnit,
        weekly: N.weeklyUnit,
        monthly: N.monthlyUnit,
        yearly: N.yearlyUnit,
      }
    a.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            a,
            o,
            i,
            c,
            O,
            U,
            z,
            F,
            q,
            _,
            H,
            E,
            B,
            $,
            W,
            K,
            V,
            Q,
            Z,
            P,
            Y,
            G,
            X,
            J,
            ee,
            et,
            ea,
            el,
            en,
            es,
            eo,
            ei,
            er,
            eu,
            ed,
            ec,
            em,
            eg,
            ef,
            eh = (0, n.c)(175),
            {
              appearance: eb,
              afterScheduleRows: ey,
              beforeScheduleRows: ex,
              grouped: ep,
              showCustomRuleFallback: eM,
              frequencyLabel: ev,
              heading: ej,
              scheduleConfig: ew,
              intervalStyle: eD,
              scheduleSource: eT,
              minuteIntervals: ek,
              minuteIntervalDisabled: eR,
              minuteIntervalError: eS,
              timeZone: eL,
              onChangeEndDate: eC,
              onUpdateScheduleDraft: eN,
            } = e,
            eA = void 0 === eb ? "default" : eb,
            eI = void 0 !== ep && ep,
            eO = void 0 !== eM && eM,
            eU = void 0 !== eR && eR,
            ez = (0, u.A)(),
            eF = (0, r.useRef)(null),
            [eq, e_] = (0, r.useState)(!1),
            [eH, eE] = (0, r.useState)("")
          eh[0] !== ew.intervalMinutes
            ? ((t = () => (null != ew.intervalMinutes && ew.intervalMinutes % 60 != 0 ? "minute" : "hour")),
              (eh[0] = ew.intervalMinutes),
              (eh[1] = t))
            : (t = eh[1])
          let [eB, e$] = (0, r.useState)(t),
            eW = "heartbeat" === eD,
            eK = ew.intervalMinutes ?? 60 * ew.intervalHours,
            eV = "local" === eT || (null != ek && ek.length > 0) || null != ew.intervalMinutes,
            eQ = eV ? eB : "hour",
            eZ = "hour" === eQ ? 60 : 1,
            eP = null != ew.intervalMinutes && ("local" === eT || (null != ek && ek.length > 0)),
            eY = "cloud" === eT ? h.TJ : h.f0
          if (eh[2] !== ez || eh[3] !== eY) {
            let e
            ;(eh[5] !== ez
              ? ((e = (e) => ({ id: e.id, label: ez.formatMessage(e.labelMessage) })), (eh[5] = ez), (eh[6] = e))
              : (e = eh[6]),
              (a = eY.map(e)),
              (eh[2] = ez),
              (eh[3] = eY),
              (eh[4] = a))
          } else a = eh[4]
          let eG = a
          if (
            eh[7] !== eA ||
            eh[8] !== ex ||
            eh[9] !== eV ||
            eh[10] !== ev ||
            eh[11] !== eI ||
            eh[12] !== ej ||
            eh[13] !== eK ||
            eh[14] !== eQ ||
            eh[15] !== ez ||
            eh[16] !== eW ||
            eh[17] !== eU ||
            eh[18] !== eS ||
            eh[19] !== ek ||
            eh[20] !== eG ||
            eh[21] !== eC ||
            eh[22] !== eN ||
            eh[23] !== eP ||
            eh[24] !== eH ||
            eh[25] !== ew ||
            eh[26] !== eY ||
            eh[27] !== eT ||
            eh[28] !== eL ||
            eh[29] !== eZ
          ) {
            let e,
              t,
              a,
              n,
              r,
              u,
              g = eY.find((e) => e.id === ew.mode) ?? eY[0],
              b = ew.weekdays[0] ?? h.O0["0"].id
            z = ew.monthDay ?? 1
            let v = h.O0.find((e) => e.id === b) ?? h.O0["0"]
            ;((F =
              null != ew.oneTimeDate ||
              "daily" === ew.mode ||
              "weekdays" === ew.mode ||
              "weekly" === ew.mode ||
              "monthly" === ew.mode),
              eh[46] !== ew.customRrule || eh[47] !== ew.mode || eh[48] !== ew.oneTimeDate
                ? ((e = null == ew.oneTimeDate && "custom" === ew.mode ? (0, m.RD)(ew.customRrule) : null),
                  (eh[46] = ew.customRrule),
                  (eh[47] = ew.mode),
                  (eh[48] = ew.oneTimeDate),
                  (eh[49] = e))
                : (e = eh[49]),
              (c = e),
              eh[50] !== eH || eh[51] !== ew
                ? ((t = (0, m.SK)({ ...ew, mode: "custom", customRrule: eH })),
                  (eh[50] = eH),
                  (eh[51] = ew),
                  (eh[52] = t))
                : (t = eh[52]),
              (U = t),
              eh[53] !== eN || eh[54] !== ew
                ? ((a = (e) => {
                    eN({ ...ew, ...e })
                  }),
                  (eh[53] = eN),
                  (eh[54] = ew),
                  (eh[55] = a))
                : (a = eh[55]),
              (V = a),
              eh[56] !== eC || eh[57] !== V
                ? ((n = (e) => {
                    null != eC ? eC(e) : V({ untilDate: e })
                  }),
                  (eh[56] = eC),
                  (eh[57] = V),
                  (eh[58] = n))
                : (n = eh[58]))
            let j = n
            ;(eh[59] !== c || eh[60] !== V
              ? ((r = (e) => {
                  null != c && V({ customRrule: (0, m.vQ)({ ...c, ...e }) })
                }),
                (eh[59] = c),
                (eh[60] = V),
                (eh[61] = r))
              : (r = eh[61]),
              (K = r),
              eh[62] !== eA ||
              eh[63] !== j ||
              eh[64] !== ez ||
              eh[65] !== ew.oneTimeDate ||
              eh[66] !== ew.untilDate ||
              eh[67] !== eT ||
              eh[68] !== eL
                ? ((u =
                    "cloud" === eT && null == ew.oneTimeDate
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(T.ic, {
                              control: (0, l.jsx)(y.H, {
                                appearance: eA,
                                ariaLabel: ez.formatMessage({
                                  id: "inbox.automations.endRepeat.ariaLabel",
                                  defaultMessage: "End repeat",
                                }),
                                options: [
                                  { id: "never", label: ez.formatMessage(N.endRepeatNever) },
                                  { id: "on-date", label: ez.formatMessage(N.endRepeatOnDate) },
                                ],
                                selectedId: null == ew.untilDate ? "never" : "on-date",
                                selectedLabel: ez.formatMessage(
                                  null == ew.untilDate ? N.endRepeatNever : N.endRepeatOnDate,
                                ),
                                onSelect: (e) => {
                                  if (e === (null == ew.untilDate ? "never" : "on-date")) return
                                  if ("never" === e) return void j(void 0)
                                  let t = new Date()
                                  ;(t.setMonth(t.getMonth() + 1),
                                    j(
                                      new Intl.DateTimeFormat("en-CA", {
                                        timeZone: eL,
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                      }).format(t),
                                    ))
                                },
                              }),
                              label: ez.formatMessage({
                                id: "inbox.automations.endRepeat.label",
                                defaultMessage: "End repeat",
                              }),
                              variant: "nested",
                            }),
                            null != ew.untilDate
                              ? (0, l.jsx)(T.ic, {
                                  control: (0, l.jsx)(C, {
                                    appearance: eA,
                                    ariaLabel: ez.formatMessage({
                                      id: "inbox.automations.endRepeatDate.ariaLabel",
                                      defaultMessage: "End date",
                                    }),
                                    timeZone: eL,
                                    value: ew.untilDate,
                                    onChange: j,
                                  }),
                                  label: ez.formatMessage({
                                    id: "inbox.automations.endRepeatDate.label",
                                    defaultMessage: "Date",
                                  }),
                                  variant: "nested",
                                })
                              : null,
                          ],
                        })
                      : null),
                  (eh[62] = eA),
                  (eh[63] = j),
                  (eh[64] = ez),
                  (eh[65] = ew.oneTimeDate),
                  (eh[66] = ew.untilDate),
                  (eh[67] = eT),
                  (eh[68] = eL),
                  (eh[69] = u))
                : (u = eh[69]),
              (O = u),
              (i = p.C),
              eh[70] !== ej ||
              eh[71] !== ez ||
              eh[72] !== ew.customRrule ||
              eh[73] !== ew.mode ||
              eh[74] !== ew.oneTimeDate
                ? ((H =
                    null == ew.oneTimeDate && "custom" === ew.mode && (void 0 === ej || null != ej)
                      ? (0, l.jsx)(M.$, {
                          "aria-label": ez.formatMessage({
                            id: "inbox.automations.scheduleRule.open",
                            defaultMessage: "Edit schedule rule",
                          }),
                          className: "h-7 w-7 rounded-md !p-1 text-default opacity-75 hover:opacity-100",
                          color: "ghostActive",
                          size: "icon",
                          onClick: (e) => {
                            ;((eF.current = e.currentTarget), eE(ew.customRrule), e_(!0))
                          },
                          children: (0, l.jsx)(w.I, { asset: s.T }),
                        })
                      : null),
                  (eh[70] = ej),
                  (eh[71] = ez),
                  (eh[72] = ew.customRrule),
                  (eh[73] = ew.mode),
                  (eh[74] = ew.oneTimeDate),
                  (eh[75] = H))
                : (H = eh[75]),
              eh[76] !== ej
                ? ((E =
                    void 0 !== ej
                      ? ej
                      : (0, l.jsx)(d.A, { id: "inbox.automations.frequency", defaultMessage: "Frequency" })),
                  (eh[76] = ej),
                  (eh[77] = E))
                : (E = eh[77]),
              (o = k.t),
              (B = eI ? "input" : "default"),
              ($ = ex),
              (W =
                null == ew.oneTimeDate
                  ? (0, l.jsx)(T.ic, {
                      control: (0, l.jsx)(y.H, {
                        appearance: eA,
                        ariaLabel: ez.formatMessage({
                          id: "settings.automations.scheduleModeLabel",
                          defaultMessage: "Repeat schedule",
                        }),
                        options: eG,
                        selectedId: ew.mode,
                        selectedLabel: ez.formatMessage(g.labelMessage),
                        onSelect: (e) => {
                          e !== ew.mode && eN((0, m.dl)(ew, e))
                        },
                      }),
                      label: ev ?? ez.formatMessage({ id: "inbox.automations.repeat.label", defaultMessage: "Repeat" }),
                      variant: "nested",
                    })
                  : (0, l.jsx)(T.ic, {
                      control: (0, l.jsx)(C, {
                        appearance: eA,
                        ariaLabel: ez.formatMessage({
                          id: "inbox.automations.oneTimeDate.ariaLabel",
                          defaultMessage: "Scheduled date",
                        }),
                        timeZone: eL,
                        value: ew.oneTimeDate,
                        onChange: (e) => {
                          V({ oneTimeDate: e })
                        },
                      }),
                      label: ez.formatMessage({ id: "inbox.automations.oneTimeDate.label", defaultMessage: "Date" }),
                      variant: "nested",
                    })),
              eh[78] !== eA ||
              eh[79] !== eV ||
              eh[80] !== eK ||
              eh[81] !== eQ ||
              eh[82] !== ez ||
              eh[83] !== eW ||
              eh[84] !== eU ||
              eh[85] !== eS ||
              eh[86] !== ek ||
              eh[87] !== eP ||
              eh[88] !== ew.mode ||
              eh[89] !== ew.oneTimeDate ||
              eh[90] !== eZ ||
              eh[91] !== V
                ? ((q =
                    null == ew.oneTimeDate && "hourly" === ew.mode
                      ? (0, l.jsx)(T.ic, {
                          control: (0, l.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              "minute" === eQ && null != ek
                                ? (0, l.jsx)(y.H, {
                                    appearance: eA,
                                    ariaLabel: ez.formatMessage({
                                      id: "settings.automations.scheduleIntervalDuration",
                                      defaultMessage: "Interval duration",
                                    }),
                                    disabled: eU,
                                    error: eS,
                                    options: ek.map((e) => ({ id: String(e), label: ez.formatNumber(e) })),
                                    selectedId: String(eK),
                                    selectedLabel: ez.formatNumber(eK),
                                    onSelect: (e) => V({ intervalMinutes: Number(e) }),
                                  })
                                : (0, l.jsx)(f.w, {
                                    appearance: eA,
                                    ariaLabel: ez.formatMessage({
                                      id: "settings.automations.scheduleIntervalDuration",
                                      defaultMessage: "Interval duration",
                                    }),
                                    max: eW || "minute" === eQ ? 999 / eZ : 23,
                                    min: eW ? 1 / eZ : 1,
                                    step: eW || eP ? 1 / eZ : 1,
                                    value: eK / eZ,
                                    onChange: (e) => {
                                      let t = Math.round(e * eZ)
                                      t !== eK &&
                                        V(
                                          "minute" === eQ || eW || eP
                                            ? { intervalMinutes: t }
                                            : { intervalHours: e, intervalMinutes: null },
                                        )
                                    },
                                  }),
                              (0, l.jsx)(y.H, {
                                appearance: eA,
                                ariaLabel: ez.formatMessage({
                                  id: "settings.automations.scheduleIntervalUnit",
                                  defaultMessage: "Interval unit",
                                }),
                                options: (eV ? ["minute", "hour"] : ["hour"]).map((e) => ({
                                  id: e,
                                  label: ez.formatMessage(N.intervalUnit, { unit: e }),
                                })),
                                selectedId: eQ,
                                selectedLabel: ez.formatMessage(N.intervalUnit, { unit: eQ }),
                                onSelect: e$,
                              }),
                            ],
                          }),
                          label: ez.formatMessage({
                            id: "settings.automations.scheduleIntervalLabel",
                            defaultMessage: "Every",
                          }),
                          variant: "nested",
                        })
                      : null),
                  (eh[78] = eA),
                  (eh[79] = eV),
                  (eh[80] = eK),
                  (eh[81] = eQ),
                  (eh[82] = ez),
                  (eh[83] = eW),
                  (eh[84] = eU),
                  (eh[85] = eS),
                  (eh[86] = ek),
                  (eh[87] = eP),
                  (eh[88] = ew.mode),
                  (eh[89] = ew.oneTimeDate),
                  (eh[90] = eZ),
                  (eh[91] = V),
                  (eh[92] = q))
                : (q = eh[92]),
              (_ =
                null == ew.oneTimeDate && "weekly" === ew.mode
                  ? (0, l.jsx)(T.ic, {
                      control:
                        "cloud" === eT || ew.weekdays.length > 1
                          ? (0, l.jsx)(x.l, {
                              appearance: eA,
                              value: ew.weekdays,
                              onChange: (e) => {
                                V({ weekdays: e })
                              },
                            })
                          : (0, l.jsx)(y.H, {
                              appearance: eA,
                              ariaLabel: ez.formatMessage({
                                id: "inbox.automations.scheduleWeekday.ariaLabel",
                                defaultMessage: "Day of the week",
                              }),
                              options: h.O0.map((e) => ({ id: e.id, label: ez.formatMessage(e.longLabelMessage) })),
                              selectedId: v.id,
                              selectedLabel: ez.formatMessage(v.longLabelMessage),
                              onSelect: (e) => {
                                V({ weekdays: [e] })
                              },
                            }),
                      label: ez.formatMessage({ id: "inbox.automations.day.label", defaultMessage: "On" }),
                      labelSizing: "content",
                      variant: "nested",
                    })
                  : null),
              (eh[7] = eA),
              (eh[8] = ex),
              (eh[9] = eV),
              (eh[10] = ev),
              (eh[11] = eI),
              (eh[12] = ej),
              (eh[13] = eK),
              (eh[14] = eQ),
              (eh[15] = ez),
              (eh[16] = eW),
              (eh[17] = eU),
              (eh[18] = eS),
              (eh[19] = ek),
              (eh[20] = eG),
              (eh[21] = eC),
              (eh[22] = eN),
              (eh[23] = eP),
              (eh[24] = eH),
              (eh[25] = ew),
              (eh[26] = eY),
              (eh[27] = eT),
              (eh[28] = eL),
              (eh[29] = eZ),
              (eh[30] = o),
              (eh[31] = i),
              (eh[32] = c),
              (eh[33] = O),
              (eh[34] = U),
              (eh[35] = z),
              (eh[36] = F),
              (eh[37] = q),
              (eh[38] = _),
              (eh[39] = H),
              (eh[40] = E),
              (eh[41] = B),
              (eh[42] = $),
              (eh[43] = W),
              (eh[44] = K),
              (eh[45] = V))
          } else
            ((o = eh[30]),
              (i = eh[31]),
              (c = eh[32]),
              (O = eh[33]),
              (U = eh[34]),
              (z = eh[35]),
              (F = eh[36]),
              (q = eh[37]),
              (_ = eh[38]),
              (H = eh[39]),
              (E = eh[40]),
              (B = eh[41]),
              ($ = eh[42]),
              (W = eh[43]),
              (K = eh[44]),
              (V = eh[45]))
          ;(eh[93] !== eA ||
          eh[94] !== ez ||
          eh[95] !== ew.mode ||
          eh[96] !== ew.oneTimeDate ||
          eh[97] !== z ||
          eh[98] !== V
            ? ((Q =
                null == ew.oneTimeDate && "monthly" === ew.mode
                  ? (0, l.jsx)(T.ic, {
                      control: (0, l.jsx)(y.H, {
                        appearance: eA,
                        ariaLabel: ez.formatMessage({
                          id: "inbox.automations.monthDay.ariaLabel",
                          defaultMessage: "Day of the month",
                        }),
                        options: h.nb.map(L),
                        selectedId: String(z),
                        selectedLabel: String(z),
                        onSelect: (e) => {
                          V({ monthDay: Number(e) })
                        },
                      }),
                      label: ez.formatMessage({ id: "inbox.automations.day.label", defaultMessage: "On" }),
                      variant: "nested",
                    })
                  : null),
              (eh[93] = eA),
              (eh[94] = ez),
              (eh[95] = ew.mode),
              (eh[96] = ew.oneTimeDate),
              (eh[97] = z),
              (eh[98] = V),
              (eh[99] = Q))
            : (Q = eh[99]),
            eh[100] !== eA ||
            eh[101] !== ez ||
            eh[102] !== ew.oneTimeDate ||
            eh[103] !== ew.time ||
            eh[104] !== F ||
            eh[105] !== eL ||
            eh[106] !== V
              ? ((Z = F
                  ? (0, l.jsx)(T.ic, {
                      control: (0, l.jsx)(b.b, {
                        appearance: eA,
                        value: ew.time,
                        timeZone: eL,
                        date: ew.oneTimeDate,
                        onChange: (e) => {
                          V({ time: e })
                        },
                      }),
                      label:
                        null != ew.oneTimeDate
                          ? ez.formatMessage({
                              id: "inbox.automations.scheduleStartTime.label",
                              defaultMessage: "Start time",
                            })
                          : ez.formatMessage({ id: "inbox.automations.scheduleTime.label", defaultMessage: "Time" }),
                      variant: "nested",
                    })
                  : null),
                (eh[100] = eA),
                (eh[101] = ez),
                (eh[102] = ew.oneTimeDate),
                (eh[103] = ew.time),
                (eh[104] = F),
                (eh[105] = eL),
                (eh[106] = V),
                (eh[107] = Z))
              : (Z = eh[107]),
            eh[108] !== eA || eh[109] !== c || eh[110] !== ez || eh[111] !== eL || eh[112] !== K
              ? ((P =
                  null != c
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(T.ic, {
                            control: (0, l.jsx)(y.H, {
                              appearance: eA,
                              ariaLabel: ez.formatMessage({
                                id: "inbox.automations.customFrequency.ariaLabel",
                                defaultMessage: "Repeat frequency",
                              }),
                              options: R.map((e) => ({ id: e, label: ez.formatMessage(A[e]) })),
                              selectedId: c.frequency,
                              selectedLabel: ez.formatMessage(A[c.frequency]),
                              onSelect: (e) => {
                                K({ frequency: e })
                              },
                            }),
                            label: ez.formatMessage({
                              id: "inbox.automations.customFrequency.label",
                              defaultMessage: "Repeats",
                            }),
                            variant: "nested",
                          }),
                          (0, l.jsx)(T.ic, {
                            control: (0, l.jsx)(f.w, {
                              appearance: eA,
                              ariaLabel: ez.formatMessage({
                                id: "inbox.automations.customInterval.ariaLabel",
                                defaultMessage: "Repeat interval",
                              }),
                              max: 999,
                              min: 1,
                              suffix: ez.formatMessage(I[c.frequency], { count: c.interval }),
                              value: c.interval,
                              onChange: (e) => {
                                K({ interval: e })
                              },
                            }),
                            label: ez.formatMessage({
                              id: "inbox.automations.customInterval.label",
                              defaultMessage: "Every",
                            }),
                            variant: "nested",
                          }),
                          "weekly" === c.frequency
                            ? (0, l.jsx)(T.ic, {
                                control: (0, l.jsx)(x.l, {
                                  appearance: eA,
                                  value: c.weekdays,
                                  onChange: (e) => {
                                    K({ weekdays: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customWeekdays.label",
                                  defaultMessage: "On",
                                }),
                                labelSizing: "content",
                                variant: "nested",
                              })
                            : null,
                          "yearly" === c.frequency
                            ? (0, l.jsx)(T.ic, {
                                control: (0, l.jsx)(y.H, {
                                  appearance: eA,
                                  ariaLabel: ez.formatMessage({
                                    id: "inbox.automations.customMonth.ariaLabel",
                                    defaultMessage: "Month",
                                  }),
                                  options: S.map((e) => ({
                                    id: String(e),
                                    label: ez.formatDate(new Date(2024, e - 1, 1), { month: "long" }),
                                  })),
                                  selectedId: String(c.month),
                                  selectedLabel: ez.formatDate(new Date(2024, c.month - 1, 1), { month: "long" }),
                                  onSelect: (e) => {
                                    K({ month: Number(e) })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customMonth.label",
                                  defaultMessage: "In",
                                }),
                                variant: "nested",
                              })
                            : null,
                          "monthly" === c.frequency || "yearly" === c.frequency
                            ? (0, l.jsx)(T.ic, {
                                control: (0, l.jsx)(g.j, {
                                  appearance: eA,
                                  value: c.monthDays,
                                  onChange: (e) => {
                                    K({ monthDays: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customMonthDay.label",
                                  defaultMessage: "On days",
                                }),
                                variant: "nested",
                              })
                            : null,
                          "hourly" === c.frequency
                            ? (0, l.jsx)(T.ic, {
                                control: (0, l.jsx)(f.w, {
                                  appearance: eA,
                                  ariaLabel: ez.formatMessage({
                                    id: "inbox.automations.customMinute.ariaLabel",
                                    defaultMessage: "Minute past the hour",
                                  }),
                                  max: 59,
                                  min: 0,
                                  value: c.minute,
                                  onChange: (e) => {
                                    K({ minute: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customMinute.label",
                                  defaultMessage: "At minute",
                                }),
                                variant: "nested",
                              })
                            : (0, l.jsx)(T.ic, {
                                control: (0, l.jsx)(b.b, {
                                  appearance: eA,
                                  value: c.time,
                                  timeZone: eL,
                                  onChange: (e) => {
                                    K({ time: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customStartTime.label",
                                  defaultMessage: "Start time",
                                }),
                                variant: "nested",
                              }),
                        ],
                      })
                    : null),
                (eh[108] = eA),
                (eh[109] = c),
                (eh[110] = ez),
                (eh[111] = eL),
                (eh[112] = K),
                (eh[113] = P))
              : (P = eh[113]),
            eh[114] !== c ||
            eh[115] !== ez ||
            eh[116] !== ew.customRrule ||
            eh[117] !== ew.mode ||
            eh[118] !== ew.oneTimeDate ||
            eh[119] !== eO
              ? ((Y =
                  eO && "custom" === ew.mode && null == ew.oneTimeDate && null == c
                    ? (0, l.jsx)(T.ic, {
                        variant: "nested",
                        label: (0, m.em)({
                          rrule: ew.customRrule,
                          intl: ez,
                          fallbackMessage: ez.formatMessage({
                            id: "inbox.automations.scheduleRule.advanced",
                            defaultMessage: "Advanced schedule",
                          }),
                        }),
                        control: (0, l.jsx)(M.$, {
                          color: "ghost",
                          size: "composerSm",
                          type: "button",
                          onClick: (e) => {
                            ;((eF.current = e.currentTarget), eE(ew.customRrule), e_(!0))
                          },
                          children: (0, l.jsx)(d.A, {
                            id: "inbox.automations.scheduleRule.edit",
                            defaultMessage: "Edit rule",
                          }),
                        }),
                      })
                    : null),
                (eh[114] = c),
                (eh[115] = ez),
                (eh[116] = ew.customRrule),
                (eh[117] = ew.mode),
                (eh[118] = ew.oneTimeDate),
                (eh[119] = eO),
                (eh[120] = Y))
              : (Y = eh[120]))
          let eX = eI ? O : null
          ;(eh[121] !== o ||
          eh[122] !== ey ||
          eh[123] !== q ||
          eh[124] !== _ ||
          eh[125] !== Q ||
          eh[126] !== Z ||
          eh[127] !== P ||
          eh[128] !== Y ||
          eh[129] !== eX ||
          eh[130] !== B ||
          eh[131] !== $ ||
          eh[132] !== W
            ? ((G = (0, l.jsxs)(o, { variant: B, children: [$, W, q, _, Q, Z, P, Y, ey, eX] })),
              (eh[121] = o),
              (eh[122] = ey),
              (eh[123] = q),
              (eh[124] = _),
              (eh[125] = Q),
              (eh[126] = Z),
              (eh[127] = P),
              (eh[128] = Y),
              (eh[129] = eX),
              (eh[130] = B),
              (eh[131] = $),
              (eh[132] = W),
              (eh[133] = G))
            : (G = eh[133]),
            eh[134] !== O || eh[135] !== eI
              ? ((X = eI || null == O ? null : (0, l.jsx)(k.t, { className: "mt-2", children: O })),
                (eh[134] = O),
                (eh[135] = eI),
                (eh[136] = X))
              : (X = eh[136]),
            eh[137] === Symbol.for("react.memo_cache_sentinel")
              ? ((J = {
                  onCloseAutoFocus: (e) => {
                    ;(e.preventDefault(), eF.current?.focus({ preventScroll: !0 }))
                  },
                }),
                (eh[137] = J))
              : (J = eh[137]),
            eh[138] !== U || eh[139] !== eH || eh[140] !== V
              ? ((ee = (e) => {
                  ;(e.preventDefault(), U && (V({ customRrule: eH }), e_(!1)))
                }),
                (eh[138] = U),
                (eh[139] = eH),
                (eh[140] = V),
                (eh[141] = ee))
              : (ee = eh[141]),
            eh[142] === Symbol.for("react.memo_cache_sentinel")
              ? ((et = (0, l.jsx)(v.L3, {
                  className: "contents",
                  children: (0, l.jsx)(d.A, {
                    id: "inbox.automations.scheduleRule.title",
                    defaultMessage: "Edit schedule rule",
                  }),
                })),
                (eh[142] = et))
              : (et = eh[142]),
            eh[143] === Symbol.for("react.memo_cache_sentinel")
              ? ((ea = (0, l.jsx)(j.OO, {
                  children: (0, l.jsx)(j.c7, {
                    title: et,
                    subtitle: (0, l.jsx)(v.rr, {
                      className: "contents",
                      children: (0, l.jsx)(d.A, {
                        id: "inbox.automations.scheduleRule.description",
                        defaultMessage: "Use an RRULE to define a custom schedule",
                      }),
                    }),
                  }),
                })),
                (eh[143] = ea))
              : (ea = eh[143]),
            eh[144] === Symbol.for("react.memo_cache_sentinel")
              ? ((el = (0, l.jsx)("span", {
                  className: "text-sm font-medium text-default",
                  children: (0, l.jsx)(d.A, {
                    id: "inbox.automations.scheduleRule.inputLabel",
                    defaultMessage: "RRULE",
                  }),
                })),
                (eh[144] = el))
              : (el = eh[144]))
          let eJ = !U
          ;(eh[145] !== ez
            ? ((en = ez.formatMessage({
                id: "settings.automations.scheduleCustomPlaceholder",
                defaultMessage: "RRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=9;BYMINUTE=0",
              })),
              (eh[145] = ez),
              (eh[146] = en))
            : (en = eh[146]),
            eh[147] === Symbol.for("react.memo_cache_sentinel")
              ? ((es = (e) => {
                  eE(e.currentTarget.value)
                }),
                (eh[147] = es))
              : (es = eh[147]),
            eh[148] !== eH || eh[149] !== eJ || eh[150] !== en
              ? ((eo = (0, l.jsx)(D.pd, {
                  variant: "code",
                  autoFocus: !0,
                  "aria-invalid": eJ,
                  placeholder: en,
                  spellCheck: !1,
                  value: eH,
                  onChange: es,
                })),
                (eh[148] = eH),
                (eh[149] = eJ),
                (eh[150] = en),
                (eh[151] = eo))
              : (eo = eh[151]),
            eh[152] !== U
              ? ((ei = U
                  ? null
                  : (0, l.jsx)("span", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, l.jsx)(d.A, {
                        id: "inbox.automations.scheduleRule.invalid",
                        defaultMessage: "Enter a valid RRULE",
                      }),
                    })),
                (eh[152] = U),
                (eh[153] = ei))
              : (ei = eh[153]),
            eh[154] !== eo || eh[155] !== ei
              ? ((er = (0, l.jsx)(j.OO, {
                  children: (0, l.jsxs)("label", { className: "flex flex-col gap-2", children: [el, eo, ei] }),
                })),
                (eh[154] = eo),
                (eh[155] = ei),
                (eh[156] = er))
              : (er = eh[156]),
            eh[157] === Symbol.for("react.memo_cache_sentinel")
              ? ((eu = (0, l.jsx)(M.$, {
                  color: "ghost",
                  type: "button",
                  onClick: () => {
                    e_(!1)
                  },
                  children: (0, l.jsx)(d.A, { id: "inbox.automations.scheduleRule.cancel", defaultMessage: "Cancel" }),
                })),
                (eh[157] = eu))
              : (eu = eh[157]))
          let e1 = !U
          return (
            eh[158] === Symbol.for("react.memo_cache_sentinel")
              ? ((ed = (0, l.jsx)(d.A, { id: "inbox.automations.scheduleRule.save", defaultMessage: "Save" })),
                (eh[158] = ed))
              : (ed = eh[158]),
            eh[159] !== e1
              ? ((ec = (0, l.jsx)(j.OO, {
                  children: (0, l.jsxs)(j.Es, {
                    children: [eu, (0, l.jsx)(M.$, { disabled: e1, type: "submit", children: ed })],
                  }),
                })),
                (eh[159] = e1),
                (eh[160] = ec))
              : (ec = eh[160]),
            eh[161] !== ee || eh[162] !== er || eh[163] !== ec
              ? ((em = (0, l.jsxs)(j.R4, { as: "form", onSubmit: ee, children: [ea, er, ec] })),
                (eh[161] = ee),
                (eh[162] = er),
                (eh[163] = ec),
                (eh[164] = em))
              : (em = eh[164]),
            eh[165] !== eq || eh[166] !== em
              ? ((eg = (0, l.jsx)(v.lG, {
                  contentProps: J,
                  open: eq,
                  size: "compact",
                  onOpenChange: e_,
                  children: em,
                })),
                (eh[165] = eq),
                (eh[166] = em),
                (eh[167] = eg))
              : (eg = eh[167]),
            eh[168] !== i || eh[169] !== H || eh[170] !== E || eh[171] !== G || eh[172] !== X || eh[173] !== eg
              ? ((ef = (0, l.jsxs)(i, { actions: H, title: E, children: [G, X, eg] })),
                (eh[168] = i),
                (eh[169] = H),
                (eh[170] = E),
                (eh[171] = G),
                (eh[172] = X),
                (eh[173] = eg),
                (eh[174] = ef))
              : (ef = eh[174]),
            ef
          )
        },
        h: C,
      },
    )
  },
  hIjX(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("qTvt"),
      o = a("Tp04"),
      i = a("on57"),
      r = a("zd8w"),
      u = a("Wf1j"),
      d = a("cOBD"),
      c = a("Sm6l"),
      m = a("bqtn"),
      g = a("HOLv")
    function f(e, t) {
      return e - t
    }
    a.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            a,
            h,
            b,
            y,
            x,
            p,
            M,
            v,
            j = (0, n.c)(26),
            { appearance: w, value: D, onChange: T } = e,
            k = void 0 === w ? "default" : w,
            R = (0, u.A)(),
            [S, L] = (0, r.useState)(null)
          j[0] !== R || j[1] !== D
            ? ((t =
                D.length <= 3
                  ? D.join(", ")
                  : R.formatMessage(
                      {
                        id: "inbox.automations.customMonthDays.summary",
                        defaultMessage: "{count, plural, one {# day} other {# days}}",
                      },
                      { count: D.length },
                    )),
              (j[0] = R),
              (j[1] = D),
              (j[2] = t))
            : (t = j[2])
          let C = t
          ;(j[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (e) => {
                L(e?.closest(".codex-dialog") ?? null)
              }),
              (j[3] = a))
            : (a = j[3]),
            j[4] !== R
              ? ((h = R.formatMessage({
                  id: "inbox.automations.customMonthDays.ariaLabel",
                  defaultMessage: "Days of the month",
                })),
                (j[4] = R),
                (j[5] = h))
              : (h = j[5]))
          let N = "form" === k ? "ghostTertiary" : "ghost",
            A = "form" === k ? "formValue" : "composerSm",
            I = "default" === k && "text-base text-default"
          ;(j[6] !== I ? ((b = (0, i.A)("max-w-40 truncate tabular-nums", I)), (j[6] = I), (j[7] = b)) : (b = j[7]),
            j[8] !== C || j[9] !== b
              ? ((y = (0, l.jsx)("span", { className: b, children: C })), (j[8] = C), (j[9] = b), (j[10] = y))
              : (y = j[10]))
          let O = "form" === k ? o.U : s.K
          return (
            j[11] !== O ? ((x = (0, l.jsx)(g.I, { asset: O })), (j[11] = O), (j[12] = x)) : (x = j[12]),
            j[13] !== x || j[14] !== h || j[15] !== N || j[16] !== A || j[17] !== y
              ? ((p = (0, l.jsxs)(c.$, {
                  ref: a,
                  "aria-label": h,
                  className: "max-w-full min-w-0",
                  color: N,
                  size: A,
                  children: [y, x],
                })),
                (j[13] = x),
                (j[14] = h),
                (j[15] = N),
                (j[16] = A),
                (j[17] = y),
                (j[18] = p))
              : (p = j[18]),
            j[19] !== T || j[20] !== D
              ? ((M = d.nb.map((e) => {
                  let t = D.includes(e)
                  return (0, l.jsx)(
                    m.ms.CheckboxItem,
                    {
                      checked: t,
                      onCheckedChange: (t) => {
                        let a = !0 === t ? [...D, e].sort(f) : D.filter((t) => t !== e)
                        a.length > 0 && T(a)
                      },
                      children: e,
                    },
                    e,
                  )
                })),
                (j[19] = T),
                (j[20] = D),
                (j[21] = M))
              : (M = j[21]),
            j[22] !== S || j[23] !== p || j[24] !== M
              ? ((v = (0, l.jsx)(m.Ab, {
                  scrollFade: !0,
                  align: "end",
                  contentMaxHeight: "tall",
                  contentWidth: "sm",
                  portalContainer: S,
                  triggerButton: p,
                  children: M,
                })),
                (j[22] = S),
                (j[23] = p),
                (j[24] = M),
                (j[25] = v))
              : (v = j[25]),
            v
          )
        },
      },
    )
  },
  meRA(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("on57")
    function o(e) {
      "Enter" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), e.currentTarget.blur())
    }
    a.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            a,
            i,
            r,
            u,
            d,
            c = (0, n.c)(24),
            { appearance: m, ariaLabel: g, max: f, min: h, step: b, suffix: y, value: x, onChange: p } = e,
            M = void 0 === b ? 1 : b,
            v = "form" === (void 0 === m ? "default" : m) ? "text-form-body" : "text-base"
          c[0] !== v
            ? ((t = (0, s.A)("flex items-center gap-1.5 text-default", v)), (c[0] = v), (c[1] = t))
            : (t = c[1])
          let j = String(x),
            w = 1 === M ? "numeric" : "decimal",
            D = 1 === M ? "[0-9]*" : "[0-9]*[.]?[0-9]*"
          return (
            c[2] !== f || c[3] !== h || c[4] !== p || c[5] !== M || c[6] !== x
              ? ((a = (e) => {
                  if (e.currentTarget.value === String(x)) return
                  if (0 === e.currentTarget.value.length || !Number.isFinite(Number(e.currentTarget.value))) {
                    e.currentTarget.value = String(x)
                    return
                  }
                  let t = Math.min(f, Math.max(h, Math.round(Number(e.currentTarget.value) / M) * M))
                  ;((e.currentTarget.value = String(t)), t !== x && p(t))
                }),
                (c[2] = f),
                (c[3] = h),
                (c[4] = p),
                (c[5] = M),
                (c[6] = x),
                (c[7] = a))
              : (a = c[7]),
            c[8] !== M
              ? ((i = (e) => {
                  e.currentTarget.value = e.currentTarget.value.replaceAll(1 === M ? /[^0-9]/g : /[^0-9.]/g, "")
                }),
                (c[8] = M),
                (c[9] = i))
              : (i = c[9]),
            c[10] !== g || c[11] !== j || c[12] !== w || c[13] !== D || c[14] !== a || c[15] !== i || c[16] !== x
              ? ((r = (0, l.jsx)(
                  "input",
                  {
                    "aria-label": g,
                    className: "w-12 bg-transparent text-end tabular-nums outline-none",
                    defaultValue: j,
                    inputMode: w,
                    pattern: D,
                    type: "text",
                    onBlur: a,
                    onChange: i,
                    onKeyDown: o,
                  },
                  x,
                )),
                (c[10] = g),
                (c[11] = j),
                (c[12] = w),
                (c[13] = D),
                (c[14] = a),
                (c[15] = i),
                (c[16] = x),
                (c[17] = r))
              : (r = c[17]),
            c[18] !== y
              ? ((u = null != y ? (0, l.jsx)("span", { className: "text-codex-description", children: y }) : null),
                (c[18] = y),
                (c[19] = u))
              : (u = c[19]),
            c[20] !== r || c[21] !== u || c[22] !== t
              ? ((d = (0, l.jsxs)("label", { className: t, children: [r, u] })),
                (c[20] = r),
                (c[21] = u),
                (c[22] = t),
                (c[23] = d))
              : (d = c[23]),
            d
          )
        },
      },
    )
  },
  cOBD(e, t, a) {
    var l = a("Qgfj"),
      n = a("odKs")
    let s = Array.from({ length: 96 }, (e, t) => {
        let a = 15 * t
        return (0, n.mR)(Math.floor(a / 60), a % 60)
      }),
      o = [
        {
          id: "hourly",
          labelMessage: (0, l.zR)({ id: "settings.automations.scheduleMode.interval", defaultMessage: "Interval" }),
        },
        {
          id: "daily",
          labelMessage: (0, l.zR)({ id: "settings.automations.scheduleMode.daily", defaultMessage: "Daily" }),
        },
        {
          id: "weekdays",
          labelMessage: (0, l.zR)({ id: "settings.automations.scheduleMode.weekdays", defaultMessage: "Weekdays" }),
        },
        {
          id: "weekly",
          labelMessage: (0, l.zR)({ id: "settings.automations.scheduleMode.weekly", defaultMessage: "Weekly" }),
        },
      ],
      i = {
        id: "custom",
        labelMessage: (0, l.zR)({ id: "settings.automations.scheduleMode.custom", defaultMessage: "Custom" }),
      },
      r = [...o, i],
      u = [
        ...o,
        {
          id: "monthly",
          labelMessage: (0, l.zR)({ id: "settings.automations.scheduleMode.monthly", defaultMessage: "Monthly" }),
        },
        i,
      ],
      d = Array.from({ length: 31 }, (e, t) => t + 1),
      c = [
        {
          id: "MO",
          labelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.mon", defaultMessage: "Mo" }),
          longLabelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.monday", defaultMessage: "Monday" }),
        },
        {
          id: "TU",
          labelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.tue", defaultMessage: "Tu" }),
          longLabelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.tuesday", defaultMessage: "Tuesday" }),
        },
        {
          id: "WE",
          labelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.wed", defaultMessage: "We" }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.wednesday",
            defaultMessage: "Wednesday",
          }),
        },
        {
          id: "TH",
          labelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.thu", defaultMessage: "Th" }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.thursday",
            defaultMessage: "Thursday",
          }),
        },
        {
          id: "FR",
          labelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.fri", defaultMessage: "Fr" }),
          longLabelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.friday", defaultMessage: "Friday" }),
        },
        {
          id: "SA",
          labelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.sat", defaultMessage: "Sa" }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.saturday",
            defaultMessage: "Saturday",
          }),
        },
        {
          id: "SU",
          labelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.sun", defaultMessage: "Su" }),
          longLabelMessage: (0, l.zR)({ id: "settings.automations.rrule.weekday.sunday", defaultMessage: "Sunday" }),
        },
      ]
    a.d(
      t,
      {},
      {
        O0: c,
        T6: function (e, t) {
          let a = (0, n.lT)(e)
          return a ? t.formatTime(new Date(2024, 0, 1, a.hour, a.minute), { hour: "numeric", minute: "2-digit" }) : e
        },
        TJ: u,
        f0: r,
        gP: s,
        nb: d,
      },
    )
  },
  BCU4(e, t, a) {
    a.d(t, { b: () => h })
    var l = a("ABep"),
      n = a("QosV"),
      s = a("ClXH"),
      o = a("qTvt"),
      i = a("Tp04"),
      r = a("on57"),
      u = a("zd8w"),
      d = a("Wf1j"),
      c = a("cOBD"),
      m = a("fGpH"),
      g = a("HOLv"),
      f = a("nzx4")
    function h(e) {
      let t,
        a,
        h,
        M,
        v,
        j,
        w,
        D,
        T,
        k,
        R,
        S,
        L,
        C,
        N,
        A,
        I,
        O,
        U,
        z,
        F,
        q,
        _,
        H,
        E,
        B,
        $,
        W,
        K = (0, n.c)(124),
        { appearance: V, value: Q, onChange: Z, isOptionVisible: P, timeZone: Y, date: G } = e,
        X = void 0 === V ? "default" : V,
        J = (0, d.A)(),
        ee = (0, u.useId)(),
        et = (0, u.useRef)(null),
        ea = (0, u.useRef)(Q),
        [el, en] = (0, u.useState)(!1),
        [es, eo] = (0, u.useState)(!1),
        [ei, er] = (0, u.useState)(""),
        [eu, ed] = (0, u.useState)(null),
        [ec, em] = (0, u.useState)(Q),
        [eg, ef] = (0, u.useState)()
      K[0] !== P || K[1] !== Q
        ? ((t = [...new Set([...c.gP, Q])].filter((e) => P?.(e) ?? !0).sort()), (K[0] = P), (K[1] = Q), (K[2] = t))
        : (t = K[2])
      let eh = t
      K[3] !== P || K[4] !== eu
        ? ((a = null != eu && (P?.(eu) ?? !0)), (K[3] = P), (K[4] = eu), (K[5] = a))
        : (a = K[5])
      let eb = a
      K[6] !== J
        ? ((h = J.formatMessage({ id: "settings.automations.scheduleTime", defaultMessage: "Time" })),
          (K[6] = J),
          (K[7] = h))
        : (h = K[7])
      let ey = h
      if (null != Y) {
        let e
        ;(K[8] !== G || K[9] !== J || K[10] !== Y || K[11] !== Q
          ? ((e = J.formatTime((0, m.dQ)(G ?? "2026-01-01", Q, Y, 0), {
              timeZone: Y,
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: null == G ? "shortGeneric" : "short",
            })),
            (K[8] = G),
            (K[9] = J),
            (K[10] = Y),
            (K[11] = Q),
            (K[12] = e))
          : (e = K[12]),
          (M = e))
      } else if ("field" === X) {
        let e
        if (K[13] !== J || K[14] !== Q) {
          let t, a
          K[16] !== Q ? ((t = Q.slice(0, 2)), (K[16] = Q), (K[17] = t)) : (t = K[17])
          let l = Number(t)
          ;(K[18] !== Q ? ((a = Q.slice(3)), (K[18] = Q), (K[19] = a)) : (a = K[19]),
            (e = J.formatTime(new Date(2024, 0, 1, l, Number(a)), { hour: "2-digit", minute: "2-digit" })),
            (K[13] = J),
            (K[14] = Q),
            (K[15] = e))
        } else e = K[15]
        M = e
      } else {
        let e
        ;(K[20] !== J || K[21] !== Q ? ((e = (0, c.T6)(Q, J)), (K[20] = J), (K[21] = Q), (K[22] = e)) : (e = K[22]),
          (M = e))
      }
      K[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = () => {
            ;(en(!1), eo(!1), er(""))
          }),
          (K[23] = v))
        : (v = K[23])
      let ex = v
      K[24] !== es || K[25] !== Z || K[26] !== eu || K[27] !== eb
        ? ((j = () => {
            ;(es && eb && Z(eu), ex())
          }),
          (K[24] = es),
          (K[25] = Z),
          (K[26] = eu),
          (K[27] = eb),
          (K[28] = j))
        : (j = K[28])
      let ep = j
      K[29] !== Z
        ? ((w = (e) => {
            ;(Z(e), ex(), et.current?.focus())
          }),
          (K[29] = Z),
          (K[30] = w))
        : (w = K[30])
      let eM = w
      K[31] !== el || K[32] !== Q
        ? ((D = () => {
            el || (em(Q), en(!0))
          }),
          (K[31] = el),
          (K[32] = Q),
          (K[33] = D))
        : (D = K[33])
      let ev = D
      K[34] !== es || K[35] !== eh || K[36] !== eu || K[37] !== Q
        ? ((T = (e) => {
            ;(er(e), es ? "" === e && null != eu && (ea.current = eu) : (ea.current = Q))
            let t = (function (e, t) {
              let a = e
                  .trim()
                  .toLowerCase()
                  .replace(/([ap])\.?m\.?$/, "$1m"),
                l = /^(\d{1,4})(?::(\d{2}))?\s*([ap](?:m)?)?$/.exec(a)
              if (null == l) return null
              let [, n = "", s, o] = l
              if (null != s && n.length > 2) return null
              let i = Number(n.length > 2 ? n.slice(0, -2) : n),
                r = Number(s ?? (n.length > 2 ? n.slice(-2) : "0"))
              if (r > 59 || i > (null == o ? 23 : 12) || (null != o && i < 1)) return null
              if (null != o) i = (i % 12) + 12 * !!o.startsWith("p")
              else if (null != t && i >= 1 && i <= 12 && !n.startsWith("0")) {
                let e = 60 * Number(t.slice(0, 2)) + Number(t.slice(3)),
                  a = i % 12
                i = [a, a + 12].find((t) => 60 * t + r > e) ?? a
              }
              return `${String(i).padStart(2, "0")}:${String(r).padStart(2, "0")}`
            })(e, ea.current)
            if ((ed(t), null != t && eh.length > 0)) {
              let e = p,
                a = e(t)
              em(eh.reduce((t, l) => (Math.abs(e(l) - a) < Math.abs(e(t) - a) ? l : t)))
            }
          }),
          (K[34] = es),
          (K[35] = eh),
          (K[36] = eu),
          (K[37] = Q),
          (K[38] = T))
        : (T = K[38])
      let ej = T
      K[39] !== ep || K[40] !== ev
        ? ((k = (e) => {
            e ? ev() : ep()
          }),
          (K[39] = ep),
          (K[40] = ev),
          (K[41] = k))
        : (k = K[41])
      let ew =
        "field" === X
          ? "focus-within:border-text/50 forced-colors:focus-within:outline-2 forced-colors:focus-within:outline-solid"
          : "has-focus-visible:outline has-focus-visible:outline-2"
      K[42] !== X || K[43] !== ew
        ? ((R = (0, r.A)(
            "inline-flex min-w-0 items-center gap-2",
            ew,
            {
              default: "h-token-button-composer-sm rounded-md text-base leading-5 text-tertiary",
              form: "min-h-10 rounded-md text-form-body text-secondary",
              field: "h-9 w-full rounded-lg border border-secondary-outline px-3 text-sm leading-5 text-default",
            }[X],
          )),
          (K[42] = X),
          (K[43] = ew),
          (K[44] = R))
        : (R = K[44])
      let eD = el ? ee : void 0,
        eT = el ? `${ee}-${ec}` : void 0,
        ek = es && "" !== ei && !eb,
        eR = !es,
        eS = es ? ei : M,
        eL = Math.max(M.length, ei.length, 5),
        eC = "field" === X ? "flex-1 text-start" : "field-sizing-content min-w-[5ch] text-end",
        eN = !es && "cursor-interaction caret-transparent"
      ;(K[45] !== eC || K[46] !== eN
        ? ((S = (0, r.A)(
            "min-w-0 max-w-full border-0 bg-transparent p-0 text-[length:inherit] leading-[inherit] text-inherit tabular-nums outline-none",
            eC,
            eN,
          )),
          (K[45] = eC),
          (K[46] = eN),
          (K[47] = S))
        : (S = K[47]),
        K[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (e) => ef(e.currentTarget.closest('[role="dialog"]') ?? void 0)), (K[48] = L))
          : (L = K[48]),
        K[49] !== ej ? ((C = (e) => ej(e.target.value)), (K[49] = ej), (K[50] = C)) : (C = K[50]),
        K[51] !== ec ||
        K[52] !== ep ||
        K[53] !== es ||
        K[54] !== ei.length ||
        K[55] !== el ||
        K[56] !== eh ||
        K[57] !== eu ||
        K[58] !== eM ||
        K[59] !== ev ||
        K[60] !== ej ||
        K[61] !== eb
          ? ((N = (e) => {
              if (!e.nativeEvent.isComposing)
                if (
                  (!es ||
                    null == eu ||
                    0 !== e.currentTarget.selectionStart ||
                    e.currentTarget.selectionEnd !== ei.length ||
                    e.metaKey ||
                    e.ctrlKey ||
                    e.altKey ||
                    (1 !== e.key.length && "Backspace" !== e.key && "Delete" !== e.key) ||
                    (ea.current = eu),
                  "Escape" === e.key)
                )
                  (e.preventDefault(), e.stopPropagation(), ex())
                else if ("Tab" === e.key) ep()
                else if ("Enter" === e.key)
                  (e.preventDefault(), e.stopPropagation(), el ? (es ? eb && ep() : eh.includes(ec) && eM(ec)) : ev())
                else if ("ArrowDown" === e.key || "ArrowUp" === e.key)
                  if ((e.preventDefault(), el)) {
                    let t = eh.indexOf(ec),
                      a = eh[Math.max(0, Math.min(eh.length - 1, t + ("ArrowDown" === e.key ? 1 : -1)))]
                    null != a &&
                      (em(a),
                      ed(a),
                      er(
                        `${Number(a.slice(0, 2)) % 12 || 12}:${a.slice(3)} ${Number(a.slice(0, 2)) >= 12 ? "pm" : "am"}`,
                      ),
                      eo(!0))
                  } else ev()
                else
                  es ||
                    e.metaKey ||
                    e.ctrlKey ||
                    e.altKey ||
                    (1 !== e.key.length && "Backspace" !== e.key && "Delete" !== e.key) ||
                    (e.preventDefault(), ev(), eo(!0), ej(1 === e.key.length ? e.key : ""))
            }),
            (K[51] = ec),
            (K[52] = ep),
            (K[53] = es),
            (K[54] = ei.length),
            (K[55] = el),
            (K[56] = eh),
            (K[57] = eu),
            (K[58] = eM),
            (K[59] = ev),
            (K[60] = ej),
            (K[61] = eb),
            (K[62] = N))
          : (N = K[62]),
        K[63] !== es || K[64] !== eu || K[65] !== ev || K[66] !== ej
          ? ((A = (e) => {
              ;(e.preventDefault(),
                ev(),
                eo(!0),
                es && null != eu && (ea.current = eu),
                ej(e.clipboardData.getData("text")))
            }),
            (K[63] = es),
            (K[64] = eu),
            (K[65] = ev),
            (K[66] = ej),
            (K[67] = A))
          : (A = K[67]),
        K[68] !== ey ||
        K[69] !== el ||
        K[70] !== ev ||
        K[71] !== eD ||
        K[72] !== eT ||
        K[73] !== ek ||
        K[74] !== eR ||
        K[75] !== eS ||
        K[76] !== eL ||
        K[77] !== S ||
        K[78] !== C ||
        K[79] !== N ||
        K[80] !== A
          ? ((I = (0, l.jsx)("input", {
              ref: et,
              role: "combobox",
              "aria-label": ey,
              "aria-expanded": el,
              "aria-controls": eD,
              "aria-activedescendant": eT,
              "aria-autocomplete": "none",
              "aria-invalid": ek,
              autoComplete: "off",
              readOnly: eR,
              value: eS,
              size: eL,
              className: S,
              onFocus: L,
              onClick: ev,
              onChange: C,
              onKeyDown: N,
              onPaste: A,
            })),
            (K[68] = ey),
            (K[69] = el),
            (K[70] = ev),
            (K[71] = eD),
            (K[72] = eT),
            (K[73] = ek),
            (K[74] = eR),
            (K[75] = eS),
            (K[76] = eL),
            (K[77] = S),
            (K[78] = C),
            (K[79] = N),
            (K[80] = A),
            (K[81] = I))
          : (I = K[81]),
        K[82] !== ev
          ? ((O = () => {
              ;(et.current?.focus(), ev())
            }),
            (K[82] = ev),
            (K[83] = O))
          : (O = K[83]))
      let eA = "form" === X ? i.U : o.K
      if (
        (K[84] !== eA ? ((U = (0, l.jsx)(g.I, { asset: eA })), (K[84] = eA), (K[85] = U)) : (U = K[85]),
        K[86] !== ey || K[87] !== O || K[88] !== U
          ? ((z = (0, l.jsx)("button", {
              type: "button",
              tabIndex: -1,
              "aria-label": ey,
              className: "shrink-0 cursor-interaction",
              onClick: O,
              children: U,
            })),
            (K[86] = ey),
            (K[87] = O),
            (K[88] = U),
            (K[89] = z))
          : (z = K[89]),
        K[90] !== R || K[91] !== I || K[92] !== z
          ? ((F = (0, l.jsx)(f.dT, { asChild: !0, children: (0, l.jsxs)("div", { className: R, children: [I, z] }) })),
            (K[90] = R),
            (K[91] = I),
            (K[92] = z),
            (K[93] = F))
          : (F = K[93]),
        K[94] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (e) => {
              e.target instanceof Node && et.current?.parentElement?.contains(e.target) && e.preventDefault()
            }),
            (_ = (e) => {
              ;(e.preventDefault(), ex())
            }),
            (K[94] = q),
            (K[95] = _))
          : ((q = K[94]), (_ = K[95])),
        K[96] !== ec
          ? ((H = (e) => {
              let t = e?.querySelector(`[data-time="${ec}"]`)
              null != e && null != t && (e.scrollTop = t.offsetTop - (e.clientHeight - t.offsetHeight) / 2)
            }),
            (K[96] = ec),
            (K[97] = H))
          : (H = K[97]),
        K[98] !== ec || K[99] !== J || K[100] !== ee || K[101] !== eh || K[102] !== eM || K[103] !== Q)
      ) {
        let e
        ;(K[105] !== ec || K[106] !== J || K[107] !== ee || K[108] !== eM || K[109] !== Q
          ? ((e = (e) =>
              (0, l.jsxs)(
                "button",
                {
                  id: `${ee}-${e}`,
                  type: "button",
                  role: "option",
                  "aria-selected": e === ec,
                  "data-time": e,
                  tabIndex: -1,
                  className: (0, r.A)(
                    "flex w-full cursor-interaction items-center justify-between gap-2 rounded-xl px-row-x py-row-y text-sm text-default tabular-nums hover:bg-secondary-ghost-hover",
                    e === ec && "bg-secondary-ghost-hover",
                  ),
                  onPointerDown: b,
                  onClick: () => eM(e),
                  children: [(0, c.T6)(e, J), e === Q ? (0, l.jsx)(g.I, { asset: s.G }) : null],
                },
                e,
              )),
            (K[105] = ec),
            (K[106] = J),
            (K[107] = ee),
            (K[108] = eM),
            (K[109] = Q),
            (K[110] = e))
          : (e = K[110]),
          (E = eh.map(e)),
          (K[98] = ec),
          (K[99] = J),
          (K[100] = ee),
          (K[101] = eh),
          (K[102] = eM),
          (K[103] = Q),
          (K[104] = E))
      } else E = K[104]
      return (
        K[111] !== ey || K[112] !== ee || K[113] !== H || K[114] !== E
          ? ((B = (0, l.jsx)("div", {
              ref: H,
              id: ee,
              role: "listbox",
              "aria-label": ey,
              className: "relative max-h-72 min-h-0 overflow-y-auto",
              children: E,
            })),
            (K[111] = ey),
            (K[112] = ee),
            (K[113] = H),
            (K[114] = E),
            (K[115] = B))
          : (B = K[115]),
        K[116] !== eg || K[117] !== B
          ? (($ = (0, l.jsx)(f.hl, {
              align: "end",
              variant: "menu",
              size: "content",
              className: "min-w-40 overflow-hidden",
              portalContainer: eg,
              onOpenAutoFocus: x,
              onCloseAutoFocus: y,
              onInteractOutside: q,
              onEscapeKeyDown: _,
              children: B,
            })),
            (K[116] = eg),
            (K[117] = B),
            (K[118] = $))
          : ($ = K[118]),
        K[119] !== el || K[120] !== k || K[121] !== F || K[122] !== $
          ? ((W = (0, l.jsxs)(f.AM, { open: el, onOpenChange: k, children: [F, $] })),
            (K[119] = el),
            (K[120] = k),
            (K[121] = F),
            (K[122] = $),
            (K[123] = W))
          : (W = K[123]),
        W
      )
    }
    function b(e) {
      return e.preventDefault()
    }
    function y(e) {
      return e.preventDefault()
    }
    function x(e) {
      return e.preventDefault()
    }
    function p(e) {
      return 60 * Number(e.slice(0, 2)) + Number(e.slice(3))
    }
  },
  gM9O(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("slpy"),
      o = a("ClXH"),
      i = a("qTvt"),
      r = a("Tp04"),
      u = a("on57"),
      d = a("zd8w"),
      c = a("oyxz"),
      m = a("TjgH"),
      g = a("Sm6l"),
      f = a("bqtn"),
      h = a("HOLv")
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a,
            b,
            y,
            x,
            p,
            M,
            v,
            j,
            w,
            D,
            T = (0, n.c)(46),
            {
              appearance: k,
              ariaLabel: R,
              disabled: S,
              error: L,
              options: C,
              selectedId: N,
              selectedLabel: A,
              onSelect: I,
            } = e,
            O = void 0 === k ? "default" : k,
            U = void 0 !== S && S,
            z = (0, d.useId)(),
            F = (0, d.useRef)(null),
            [q, _] = (0, d.useState)(!1),
            H = !q && void 0
          T[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => {
                let t = F.current?.querySelector('[data-selected="true"]')
                null != t &&
                  (e.preventDefault(),
                  t.focus({ preventScroll: !0 }),
                  requestAnimationFrame(() => {
                    t.scrollIntoView({ block: "nearest" })
                  }))
              }),
              (T[0] = t))
            : (t = T[0])
          let E = null != L || void 0,
            B = null != L ? z : void 0,
            $ = "form" === O && "not-disabled:not-aria-disabled:text-secondary",
            W = "default" === O && "pe-0"
          T[1] !== $ || T[2] !== W
            ? ((a = (0, u.A)("max-w-full min-w-0", $, W)), (T[1] = $), (T[2] = W), (T[3] = a))
            : (a = T[3])
          let K = "form" === O ? "ghostTertiary" : "ghost",
            V = "form" === O ? "formValue" : "composerSm"
          ;(T[4] !== L || T[5] !== z
            ? ((b = null != L ? (0, l.jsx)("span", { id: z, className: "sr-only", children: L }) : null),
              (T[4] = L),
              (T[5] = z),
              (T[6] = b))
            : (b = T[6]),
            T[7] !== L
              ? ((y =
                  null != L
                    ? (0, l.jsx)(m.E, {
                        variant: "caution",
                        children: (0, l.jsx)(c.A, {
                          id: "automation.schedule.unsupportedInterval",
                          defaultMessage: "Unsupported",
                        }),
                      })
                    : null),
                (T[7] = L),
                (T[8] = y))
              : (y = T[8]))
          let Q = "default" === O && "text-tertiary",
            Z = "default" === O && "text-base leading-5"
          ;(T[9] !== Q || T[10] !== Z
            ? ((x = (0, u.A)("truncate", Q, Z)), (T[9] = Q), (T[10] = Z), (T[11] = x))
            : (x = T[11]),
            T[12] !== A || T[13] !== x
              ? ((p = (0, l.jsx)("span", { className: x, children: A })), (T[12] = A), (T[13] = x), (T[14] = p))
              : (p = T[14]))
          let P = "default" === O ? "text-tertiary" : void 0,
            Y = "form" === O ? r.U : i.K
          if (
            (T[15] !== P || T[16] !== Y
              ? ((M = (0, l.jsx)(h.I, { className: P, asset: Y })), (T[15] = P), (T[16] = Y), (T[17] = M))
              : (M = T[17]),
            T[18] !== R ||
            T[19] !== U ||
            T[20] !== K ||
            T[21] !== V ||
            T[22] !== b ||
            T[23] !== y ||
            T[24] !== p ||
            T[25] !== M ||
            T[26] !== E ||
            T[27] !== B ||
            T[28] !== a
              ? ((v = (0, l.jsxs)(g.$, {
                  "aria-label": R,
                  "aria-invalid": E,
                  "aria-describedby": B,
                  disabled: U,
                  className: a,
                  color: K,
                  size: V,
                  children: [b, y, p, M],
                })),
                (T[18] = R),
                (T[19] = U),
                (T[20] = K),
                (T[21] = V),
                (T[22] = b),
                (T[23] = y),
                (T[24] = p),
                (T[25] = M),
                (T[26] = E),
                (T[27] = B),
                (T[28] = a),
                (T[29] = v))
              : (v = T[29]),
            T[30] !== I || T[31] !== C || T[32] !== N)
          ) {
            let e
            ;(T[34] !== I || T[35] !== N
              ? ((e = (e) =>
                  (0, l.jsx)(
                    f.ms.Item,
                    {
                      "data-selected": e.id === N,
                      rightIconAsset: e.id === N ? o.G : void 0,
                      onSelect: () => {
                        I(e.id)
                      },
                      children: e.label,
                    },
                    e.id,
                  )),
                (T[34] = I),
                (T[35] = N),
                (T[36] = e))
              : (e = T[36]),
              (j = C.map(e)),
              (T[30] = I),
              (T[31] = C),
              (T[32] = N),
              (T[33] = j))
          } else j = T[33]
          return (
            T[37] !== U || T[38] !== q || T[39] !== v || T[40] !== j
              ? ((w = (0, l.jsx)("span", {
                  className: "inline-flex max-w-full min-w-0",
                  children: (0, l.jsx)(f.Ab, {
                    open: q,
                    onOpenChange: _,
                    scrollFade: !0,
                    disabled: U,
                    modal: !0,
                    align: "end",
                    contentRef: F,
                    onOpenAutoFocus: t,
                    contentWidth: "sm",
                    contentMaxHeight: "list",
                    triggerButton: v,
                    children: j,
                  }),
                })),
                (T[37] = U),
                (T[38] = q),
                (T[39] = v),
                (T[40] = j),
                (T[41] = w))
              : (w = T[41]),
            T[42] !== L || T[43] !== w || T[44] !== H
              ? ((D = (0, l.jsx)(s.m, { content: L, forceOpen: H, children: w })),
                (T[42] = L),
                (T[43] = w),
                (T[44] = H),
                (T[45] = D))
              : (D = T[45]),
            D
          )
        },
      },
    )
  },
  dUCV(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("qTvt"),
      o = a("Tp04"),
      i = a("on57"),
      r = a("Wf1j"),
      u = a("cOBD"),
      d = a("Sm6l"),
      c = a("bqtn"),
      m = a("HOLv")
    function g(e) {
      return e.label
    }
    a.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            a = (0, n.c)(20),
            { appearance: f, value: h, onChange: b, weekdayLabelFormat: y } = e,
            x = void 0 === f ? "default" : f,
            p = (0, r.A)()
          if (a[0] !== x || a[1] !== p || a[2] !== b || a[3] !== h || a[4] !== y) {
            let e, n, r, f, M, v
            a[6] !== p || a[7] !== y
              ? ((e = (e, t) => ({
                  id: e.id,
                  label:
                    "short" === y
                      ? p.formatDate(Date.UTC(2024, 0, t + 1), { weekday: "short", timeZone: "UTC" })
                      : p.formatMessage(e.longLabelMessage),
                })),
                (a[6] = p),
                (a[7] = y),
                (a[8] = e))
              : (e = a[8])
            let j = u.O0.map(e)
            a[9] !== h ? ((n = (e) => h.includes(e.id)), (a[9] = h), (a[10] = n)) : (n = a[10])
            let w = j.filter(n).map(g)
            a[11] !== p
              ? ((r = p.formatMessage({
                  id: "inbox.automations.customWeekdays.ariaLabel",
                  defaultMessage: "Days of the week",
                })),
                (a[11] = p),
                (a[12] = r))
              : (r = a[12])
            let D = "default" === x && "text-base text-default"
            a[13] !== D ? ((f = (0, i.A)("truncate", D)), (a[13] = D), (a[14] = f)) : (f = a[14])
            let T = "form" === x ? o.U : s.K
            ;(a[15] !== T ? ((M = (0, l.jsx)(m.I, { asset: T })), (a[15] = T), (a[16] = M)) : (M = a[16]),
              a[17] !== b || a[18] !== h
                ? ((v = (e) => {
                    let t = h.includes(e.id)
                    return (0, l.jsx)(
                      c.ms.CheckboxItem,
                      {
                        checked: t,
                        onCheckedChange: (t) => {
                          let a = !0 === t ? [...h, e.id] : h.filter((t) => t !== e.id)
                          a.length > 0 && b(a)
                        },
                        children: e.label,
                      },
                      e.id,
                    )
                  }),
                  (a[17] = b),
                  (a[18] = h),
                  (a[19] = v))
                : (v = a[19]),
              (t = (0, l.jsx)(c.Ab, {
                scrollFade: !0,
                align: "end",
                contentWidth: "sm",
                triggerButton: (0, l.jsxs)(d.$, {
                  "aria-label": r,
                  className: "max-w-full min-w-0",
                  color: "form" === x ? "ghostTertiary" : "ghost",
                  size: "form" === x ? "formValue" : "composerSm",
                  children: [
                    (0, l.jsx)("span", { className: f, children: p.formatList(w, { type: "conjunction" }) }),
                    M,
                  ],
                }),
                children: j.map(v),
              })),
              (a[0] = x),
              (a[1] = p),
              (a[2] = b),
              (a[3] = h),
              (a[4] = y),
              (a[5] = t))
          } else t = a[5]
          return t
        },
      },
    )
  },
  sn2N(e, t, a) {
    var l = a("ABep"),
      n = a("QosV")
    a.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            a,
            s,
            o = (0, n.c)(8),
            { actions: i, children: r, title: u } = e
          return (
            o[0] !== i || o[1] !== u
              ? ((t =
                  null != u || null != i
                    ? (0, l.jsxs)("div", {
                        className: "flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-tertiary",
                        children: [(0, l.jsx)("span", { className: "opacity-75", children: u }), i],
                      })
                    : null),
                (o[0] = i),
                (o[1] = u),
                (o[2] = t))
              : (t = o[2]),
            o[3] !== r
              ? ((a = (0, l.jsx)("div", { className: "flex min-h-0 flex-col", children: r })), (o[3] = r), (o[4] = a))
              : (a = o[4]),
            o[5] !== t || o[6] !== a
              ? ((s = (0, l.jsxs)("section", { className: "flex min-h-0 flex-col", children: [t, a] })),
                (o[5] = t),
                (o[6] = a),
                (o[7] = s))
              : (s = o[7]),
            s
          )
        },
      },
    )
  },
  Tp04(e, t, a) {
    let l = (0, a("ESTr").a)({
      name: "chevron-down-sm-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 6.001221, y: 7.917969, width: 7.99707, height: 4.491211 },
        visualBounds: { x: 6.001221, y: 7.917969, width: 7.99707, height: 4.491211 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 6.001221, y: 7.917969, width: 7.99707, height: 4.491211 },
        center: { x: 9.999756, y: 10.163575 },
        insets: { top: 7.917969, right: 6.001709, bottom: 7.59082, left: 6.001221 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999756, y: 10.163575 },
          foreground: { x: 9.999756, y: 10.163575 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M12.863 8.11274C13.1226 7.85332 13.5437 7.85342 13.8034 8.11274C14.0631 8.37244 14.0631 8.79445 13.8034 9.05415L10.7653 12.0922C10.3429 12.5147 9.65747 12.5147 9.23506 12.0922L6.19599 9.05415C5.9363 8.79445 5.9363 8.37244 6.19599 8.11274C6.45569 7.85304 6.8777 7.85304 7.1374 8.11274L9.99971 10.976L12.863 8.11274Z" fill="currentColor"/>',
    })
    a.d(t, {}, { U: l })
  },
}
//# sourceMappingURL=807357.4dae1e0fd5.js.map
