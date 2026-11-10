export const __rspack_esm_ids = [638947]
export const __webpack_modules__ = {
  ylLY(e, t, a) {
    let l = (0, a("zd8w").createContext)(null)
    a.d(t, {}, { t: l })
  },
  oVAd(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("GxtJ"),
      o = a("Kh43"),
      i = a("on57"),
      r = a("zd8w"),
      d = a("Wf1j"),
      u = a("oyxz"),
      c = a("Qgfj"),
      m = a("odKs"),
      h = a("hIjX"),
      f = a("meRA"),
      g = a("cOBD"),
      p = a("BCU4"),
      b = a("gM9O"),
      y = a("dUCV"),
      x = a("sn2N"),
      M = a("ygO2"),
      v = a("JNtf"),
      w = a("mUDD"),
      k = a("HOLv"),
      R = a("zLIa"),
      j = a("AWNZ"),
      D = a("ZEx5")
    let L = ["hourly", "daily", "weekly", "monthly", "yearly"],
      T = Array.from({ length: 12 }, (e, t) => t + 1)
    function A(e) {
      return { id: String(e), label: String(e) }
    }
    function S(e) {
      let t,
        a,
        s,
        d,
        u,
        c,
        m,
        h,
        f = (0, n.c)(22),
        { appearance: g, ariaLabel: p, timeZone: b, value: y, onChange: x } = e,
        M = void 0 === g ? "default" : g,
        v = (0, r.useId)()
      f[0] !== b
        ? ((t = new Intl.DateTimeFormat("en-CA", {
            timeZone: b,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date())),
          (f[0] = b),
          (f[1] = t))
        : (t = f[1])
      let w = t,
        k = "form" === M ? "text-secondary" : "text-tertiary"
      f[2] !== k ? ((a = (0, i.A)("-me-1.5 text-base", k)), (f[2] = k), (f[3] = a)) : (a = f[3])
      let R = `${w}T00:00:00`
      f[4] !== R ? ((s = new Date(R)), (f[4] = R), (f[5] = s)) : (s = f[5])
      let j =
        "form" === M
          ? "[--select-control-font-size:var(--text-form-body)]"
          : "[--select-control-font-size:var(--text-base)]"
      f[6] !== j
        ? ((d = (0, i.A)("[--select-control-font-weight:var(--font-ui-weight)]", j)), (f[6] = j), (f[7] = d))
        : (d = f[7])
      let D = `${y}T00:00:00`
      return (
        f[8] !== D ? ((u = new Date(D)), (f[8] = D), (f[9] = u)) : (u = f[9]),
        f[10] !== x
          ? ((c = (e) => {
              null != e &&
                x(new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(e))
            }),
            (f[10] = x),
            (f[11] = c))
          : (c = f[11]),
        f[12] !== v || f[13] !== u || f[14] !== c || f[15] !== s || f[16] !== d
          ? ((m = (0, l.jsx)(o.l, {
              id: v,
              align: "end",
              dropdownIconType: "chevronDown",
              min: s,
              size: "sm",
              triggerClassName: d,
              triggerDateFormat: "MMM d, yyyy",
              triggerShowIcon: !1,
              value: u,
              valueType: "date",
              variant: "ghost",
              onChange: c,
            })),
            (f[12] = v),
            (f[13] = u),
            (f[14] = c),
            (f[15] = s),
            (f[16] = d),
            (f[17] = m))
          : (m = f[17]),
        f[18] !== p || f[19] !== m || f[20] !== a
          ? ((h = (0, l.jsx)("div", { "aria-label": p, className: a, role: "group", children: m })),
            (f[18] = p),
            (f[19] = m),
            (f[20] = a),
            (f[21] = h))
          : (h = f[21]),
        h
      )
    }
    let U = (0, c.YK)({
        intervalUnit: {
          id: "automations.schedule.intervalUnit",
          defaultMessage: "{unit, select, hour {hours} other {minutes}}",
          description: "Unit option beside a task's numeric repeat interval; unit is hour or minute",
        },
        endRepeatNever: {
          id: "inbox.automations.endRepeat.never",
          defaultMessage: "Never",
          description: "Dropdown option indicating that a cloud scheduled task repeats indefinitely",
        },
        endRepeatOnDate: {
          id: "inbox.automations.endRepeat.onDate",
          defaultMessage: "On date",
          description: "Dropdown option indicating that a cloud scheduled task stops repeating on a selected date",
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
      C = { hourly: U.hourly, daily: U.daily, weekly: U.weekly, monthly: U.monthly, yearly: U.yearly },
      N = {
        hourly: U.hourlyUnit,
        daily: U.dailyUnit,
        weekly: U.weeklyUnit,
        monthly: U.monthlyUnit,
        yearly: U.yearlyUnit,
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
            E,
            z,
            I,
            q,
            F,
            _,
            B,
            H,
            $,
            K,
            W,
            V,
            Q,
            G,
            J,
            P,
            Z,
            Y,
            X,
            ee,
            et,
            ea,
            el,
            en,
            es,
            eo,
            ei,
            er,
            ed,
            eu,
            ec,
            em,
            eh,
            ef,
            eg = (0, n.c)(175),
            {
              appearance: ep,
              afterScheduleRows: eb,
              beforeScheduleRows: ey,
              grouped: ex,
              showCustomRuleFallback: eM,
              frequencyLabel: ev,
              heading: ew,
              scheduleConfig: ek,
              intervalStyle: eR,
              scheduleSource: ej,
              minuteIntervals: eD,
              minuteIntervalDisabled: eL,
              minuteIntervalError: eT,
              timeZone: eA,
              onChangeEndDate: eS,
              onUpdateScheduleDraft: eU,
            } = e,
            eC = void 0 === ep ? "default" : ep,
            eN = void 0 !== ex && ex,
            eO = void 0 !== eM && eM,
            eE = void 0 !== eL && eL,
            ez = (0, d.A)(),
            eI = (0, r.useRef)(null),
            [eq, eF] = (0, r.useState)(!1),
            [e_, eB] = (0, r.useState)("")
          eg[0] !== ek.intervalMinutes
            ? ((t = () => (null != ek.intervalMinutes && ek.intervalMinutes % 60 != 0 ? "minute" : "hour")),
              (eg[0] = ek.intervalMinutes),
              (eg[1] = t))
            : (t = eg[1])
          let [eH, e$] = (0, r.useState)(t),
            eK = "heartbeat" === eR,
            eW = ek.intervalMinutes ?? 60 * ek.intervalHours,
            eV = "local" === ej || (null != eD && eD.length > 0) || null != ek.intervalMinutes,
            eQ = eV ? eH : "hour",
            eG = "hour" === eQ ? 60 : 1,
            eJ = null != ek.intervalMinutes && ("local" === ej || (null != eD && eD.length > 0)),
            eP = "cloud" === ej ? g.TJ : g.f0
          if (eg[2] !== ez || eg[3] !== eP) {
            let e
            ;(eg[5] !== ez
              ? ((e = (e) => ({ id: e.id, label: ez.formatMessage(e.labelMessage) })), (eg[5] = ez), (eg[6] = e))
              : (e = eg[6]),
              (a = eP.map(e)),
              (eg[2] = ez),
              (eg[3] = eP),
              (eg[4] = a))
          } else a = eg[4]
          let eZ = a
          if (
            eg[7] !== eC ||
            eg[8] !== ey ||
            eg[9] !== eV ||
            eg[10] !== ev ||
            eg[11] !== eN ||
            eg[12] !== ew ||
            eg[13] !== eW ||
            eg[14] !== eQ ||
            eg[15] !== ez ||
            eg[16] !== eK ||
            eg[17] !== eE ||
            eg[18] !== eT ||
            eg[19] !== eD ||
            eg[20] !== eZ ||
            eg[21] !== eS ||
            eg[22] !== eU ||
            eg[23] !== eJ ||
            eg[24] !== e_ ||
            eg[25] !== ek ||
            eg[26] !== eP ||
            eg[27] !== ej ||
            eg[28] !== eA ||
            eg[29] !== eG
          ) {
            let e,
              t,
              a,
              n,
              r,
              d,
              h = eP.find((e) => e.id === ek.mode) ?? eP[0],
              p = ek.weekdays[0] ?? g.O0["0"].id
            z = ek.monthDay ?? 1
            let v = g.O0.find((e) => e.id === p) ?? g.O0["0"]
            ;((I =
              null != ek.oneTimeDate ||
              "daily" === ek.mode ||
              "weekdays" === ek.mode ||
              "weekly" === ek.mode ||
              "monthly" === ek.mode),
              eg[46] !== ek.customRrule || eg[47] !== ek.mode || eg[48] !== ek.oneTimeDate
                ? ((e = null == ek.oneTimeDate && "custom" === ek.mode ? (0, m.RD)(ek.customRrule) : null),
                  (eg[46] = ek.customRrule),
                  (eg[47] = ek.mode),
                  (eg[48] = ek.oneTimeDate),
                  (eg[49] = e))
                : (e = eg[49]),
              (c = e),
              eg[50] !== e_ || eg[51] !== ek
                ? ((t = (0, m.SK)({ ...ek, mode: "custom", customRrule: e_ })),
                  (eg[50] = e_),
                  (eg[51] = ek),
                  (eg[52] = t))
                : (t = eg[52]),
              (E = t),
              eg[53] !== eU || eg[54] !== ek
                ? ((a = (e) => {
                    eU({ ...ek, ...e })
                  }),
                  (eg[53] = eU),
                  (eg[54] = ek),
                  (eg[55] = a))
                : (a = eg[55]),
              (V = a),
              eg[56] !== eS || eg[57] !== V
                ? ((n = (e) => {
                    null != eS ? eS(e) : V({ untilDate: e })
                  }),
                  (eg[56] = eS),
                  (eg[57] = V),
                  (eg[58] = n))
                : (n = eg[58]))
            let w = n
            ;(eg[59] !== c || eg[60] !== V
              ? ((r = (e) => {
                  null != c && V({ customRrule: (0, m.vQ)({ ...c, ...e }) })
                }),
                (eg[59] = c),
                (eg[60] = V),
                (eg[61] = r))
              : (r = eg[61]),
              (W = r),
              eg[62] !== eC ||
              eg[63] !== w ||
              eg[64] !== ez ||
              eg[65] !== ek.oneTimeDate ||
              eg[66] !== ek.untilDate ||
              eg[67] !== ej ||
              eg[68] !== eA
                ? ((d =
                    "cloud" === ej && null == ek.oneTimeDate
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(j.ic, {
                              control: (0, l.jsx)(b.H, {
                                appearance: eC,
                                ariaLabel: ez.formatMessage({
                                  id: "inbox.automations.endRepeat.ariaLabel",
                                  defaultMessage: "End repeat",
                                  description:
                                    "Accessible label for choosing when a cloud scheduled task stops repeating",
                                }),
                                options: [
                                  { id: "never", label: ez.formatMessage(U.endRepeatNever) },
                                  { id: "on-date", label: ez.formatMessage(U.endRepeatOnDate) },
                                ],
                                selectedId: null == ek.untilDate ? "never" : "on-date",
                                selectedLabel: ez.formatMessage(
                                  null == ek.untilDate ? U.endRepeatNever : U.endRepeatOnDate,
                                ),
                                onSelect: (e) => {
                                  if (e === (null == ek.untilDate ? "never" : "on-date")) return
                                  if ("never" === e) return void w(void 0)
                                  let t = new Date()
                                  ;(t.setMonth(t.getMonth() + 1),
                                    w(
                                      new Intl.DateTimeFormat("en-CA", {
                                        timeZone: eA,
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
                                description: "Label for choosing when a cloud scheduled task stops repeating",
                              }),
                              variant: "nested",
                            }),
                            null != ek.untilDate
                              ? (0, l.jsx)(j.ic, {
                                  control: (0, l.jsx)(S, {
                                    appearance: eC,
                                    ariaLabel: ez.formatMessage({
                                      id: "inbox.automations.endRepeatDate.ariaLabel",
                                      defaultMessage: "End date",
                                      description:
                                        "Accessible label for the date when a cloud scheduled task stops repeating",
                                    }),
                                    timeZone: eA,
                                    value: ek.untilDate,
                                    onChange: w,
                                  }),
                                  label: ez.formatMessage({
                                    id: "inbox.automations.endRepeatDate.label",
                                    defaultMessage: "Date",
                                    description: "Label for the date when a cloud scheduled task stops repeating",
                                  }),
                                  variant: "nested",
                                })
                              : null,
                          ],
                        })
                      : null),
                  (eg[62] = eC),
                  (eg[63] = w),
                  (eg[64] = ez),
                  (eg[65] = ek.oneTimeDate),
                  (eg[66] = ek.untilDate),
                  (eg[67] = ej),
                  (eg[68] = eA),
                  (eg[69] = d))
                : (d = eg[69]),
              (O = d),
              (i = x.C),
              eg[70] !== ew ||
              eg[71] !== ez ||
              eg[72] !== ek.customRrule ||
              eg[73] !== ek.mode ||
              eg[74] !== ek.oneTimeDate
                ? ((_ =
                    null == ek.oneTimeDate && "custom" === ek.mode && (void 0 === ew || null != ew)
                      ? (0, l.jsx)(M.$, {
                          "aria-label": ez.formatMessage({
                            id: "inbox.automations.scheduleRule.open",
                            defaultMessage: "Edit schedule rule",
                            description: "Accessible label for opening the custom schedule RRULE dialog",
                          }),
                          className: "h-7 w-7 rounded-md !p-1 text-default opacity-75 hover:opacity-100",
                          color: "ghostActive",
                          size: "icon",
                          onClick: (e) => {
                            ;((eI.current = e.currentTarget), eB(ek.customRrule), eF(!0))
                          },
                          children: (0, l.jsx)(k.I, { asset: s.T }),
                        })
                      : null),
                  (eg[70] = ew),
                  (eg[71] = ez),
                  (eg[72] = ek.customRrule),
                  (eg[73] = ek.mode),
                  (eg[74] = ek.oneTimeDate),
                  (eg[75] = _))
                : (_ = eg[75]),
              eg[76] !== ew
                ? ((B =
                    void 0 !== ew
                      ? ew
                      : (0, l.jsx)(u.A, {
                          id: "inbox.automations.frequency",
                          defaultMessage: "Frequency",
                          description: "Section label above scheduled task frequency controls",
                        })),
                  (eg[76] = ew),
                  (eg[77] = B))
                : (B = eg[77]),
              (o = D.t),
              (H = eN ? "input" : "default"),
              ($ = ey),
              (K =
                null == ek.oneTimeDate
                  ? (0, l.jsx)(j.ic, {
                      control: (0, l.jsx)(b.H, {
                        appearance: eC,
                        ariaLabel: ez.formatMessage({
                          id: "settings.automations.scheduleModeLabel",
                          defaultMessage: "Repeat schedule",
                          description: "Aria label for schedule type dropdown",
                        }),
                        options: eZ,
                        selectedId: ek.mode,
                        selectedLabel: ez.formatMessage(h.labelMessage),
                        onSelect: (e) => {
                          e !== ek.mode && eU((0, m.dl)(ek, e))
                        },
                      }),
                      label:
                        ev ??
                        ez.formatMessage({
                          id: "inbox.automations.repeat.label",
                          defaultMessage: "Repeat",
                          description: "Label for the scheduled task repeat mode row",
                        }),
                      variant: "nested",
                    })
                  : (0, l.jsx)(j.ic, {
                      control: (0, l.jsx)(S, {
                        appearance: eC,
                        ariaLabel: ez.formatMessage({
                          id: "inbox.automations.oneTimeDate.ariaLabel",
                          defaultMessage: "Scheduled date",
                          description: "Accessible label for choosing the date of a one-time cloud scheduled task",
                        }),
                        timeZone: eA,
                        value: ek.oneTimeDate,
                        onChange: (e) => {
                          V({ oneTimeDate: e })
                        },
                      }),
                      label: ez.formatMessage({
                        id: "inbox.automations.oneTimeDate.label",
                        defaultMessage: "Date",
                        description: "Label for the date of a one-time scheduled task",
                      }),
                      variant: "nested",
                    })),
              eg[78] !== eC ||
              eg[79] !== eV ||
              eg[80] !== eW ||
              eg[81] !== eQ ||
              eg[82] !== ez ||
              eg[83] !== eK ||
              eg[84] !== eE ||
              eg[85] !== eT ||
              eg[86] !== eD ||
              eg[87] !== eJ ||
              eg[88] !== ek.mode ||
              eg[89] !== ek.oneTimeDate ||
              eg[90] !== eG ||
              eg[91] !== V
                ? ((q =
                    null == ek.oneTimeDate && "hourly" === ek.mode
                      ? (0, l.jsx)(j.ic, {
                          control: (0, l.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              "minute" === eQ && null != eD
                                ? (0, l.jsx)(b.H, {
                                    appearance: eC,
                                    ariaLabel: ez.formatMessage({
                                      id: "settings.automations.scheduleIntervalDuration",
                                      defaultMessage: "Interval duration",
                                      description: "Accessible label for a task's repeat interval amount",
                                    }),
                                    disabled: eE,
                                    error: eT,
                                    options: eD.map((e) => ({ id: String(e), label: ez.formatNumber(e) })),
                                    selectedId: String(eW),
                                    selectedLabel: ez.formatNumber(eW),
                                    onSelect: (e) => V({ intervalMinutes: Number(e) }),
                                  })
                                : (0, l.jsx)(f.w, {
                                    appearance: eC,
                                    ariaLabel: ez.formatMessage({
                                      id: "settings.automations.scheduleIntervalDuration",
                                      defaultMessage: "Interval duration",
                                      description: "Accessible label for a task's repeat interval amount",
                                    }),
                                    max: eK || "minute" === eQ ? 999 / eG : 23,
                                    min: eK ? 1 / eG : 1,
                                    step: eK || eJ ? 1 / eG : 1,
                                    value: eW / eG,
                                    onChange: (e) => {
                                      let t = Math.round(e * eG)
                                      t !== eW &&
                                        V(
                                          "minute" === eQ || eK || eJ
                                            ? { intervalMinutes: t }
                                            : { intervalHours: e, intervalMinutes: null },
                                        )
                                    },
                                  }),
                              (0, l.jsx)(b.H, {
                                appearance: eC,
                                ariaLabel: ez.formatMessage({
                                  id: "settings.automations.scheduleIntervalUnit",
                                  defaultMessage: "Interval unit",
                                  description:
                                    "Accessible label for selecting minutes or hours for a task's repeat interval",
                                }),
                                options: (eV ? ["minute", "hour"] : ["hour"]).map((e) => ({
                                  id: e,
                                  label: ez.formatMessage(U.intervalUnit, { unit: e }),
                                })),
                                selectedId: eQ,
                                selectedLabel: ez.formatMessage(U.intervalUnit, { unit: eQ }),
                                onSelect: e$,
                              }),
                            ],
                          }),
                          label: ez.formatMessage({
                            id: "settings.automations.scheduleIntervalLabel",
                            defaultMessage: "Every",
                            description: "Label for the automation interval input",
                          }),
                          variant: "nested",
                        })
                      : null),
                  (eg[78] = eC),
                  (eg[79] = eV),
                  (eg[80] = eW),
                  (eg[81] = eQ),
                  (eg[82] = ez),
                  (eg[83] = eK),
                  (eg[84] = eE),
                  (eg[85] = eT),
                  (eg[86] = eD),
                  (eg[87] = eJ),
                  (eg[88] = ek.mode),
                  (eg[89] = ek.oneTimeDate),
                  (eg[90] = eG),
                  (eg[91] = V),
                  (eg[92] = q))
                : (q = eg[92]),
              (F =
                null == ek.oneTimeDate && "weekly" === ek.mode
                  ? (0, l.jsx)(j.ic, {
                      control:
                        "cloud" === ej || ek.weekdays.length > 1
                          ? (0, l.jsx)(y.l, {
                              appearance: eC,
                              value: ek.weekdays,
                              onChange: (e) => {
                                V({ weekdays: e })
                              },
                            })
                          : (0, l.jsx)(b.H, {
                              appearance: eC,
                              ariaLabel: ez.formatMessage({
                                id: "inbox.automations.scheduleWeekday.ariaLabel",
                                defaultMessage: "Day of the week",
                                description: "Accessible label for the weekly automation day selector",
                              }),
                              options: g.O0.map((e) => ({ id: e.id, label: ez.formatMessage(e.longLabelMessage) })),
                              selectedId: v.id,
                              selectedLabel: ez.formatMessage(v.longLabelMessage),
                              onSelect: (e) => {
                                V({ weekdays: [e] })
                              },
                            }),
                      label: ez.formatMessage({
                        id: "inbox.automations.day.label",
                        defaultMessage: "On",
                        description: "Label for the scheduled task weekday row",
                      }),
                      labelSizing: "content",
                      variant: "nested",
                    })
                  : null),
              (eg[7] = eC),
              (eg[8] = ey),
              (eg[9] = eV),
              (eg[10] = ev),
              (eg[11] = eN),
              (eg[12] = ew),
              (eg[13] = eW),
              (eg[14] = eQ),
              (eg[15] = ez),
              (eg[16] = eK),
              (eg[17] = eE),
              (eg[18] = eT),
              (eg[19] = eD),
              (eg[20] = eZ),
              (eg[21] = eS),
              (eg[22] = eU),
              (eg[23] = eJ),
              (eg[24] = e_),
              (eg[25] = ek),
              (eg[26] = eP),
              (eg[27] = ej),
              (eg[28] = eA),
              (eg[29] = eG),
              (eg[30] = o),
              (eg[31] = i),
              (eg[32] = c),
              (eg[33] = O),
              (eg[34] = E),
              (eg[35] = z),
              (eg[36] = I),
              (eg[37] = q),
              (eg[38] = F),
              (eg[39] = _),
              (eg[40] = B),
              (eg[41] = H),
              (eg[42] = $),
              (eg[43] = K),
              (eg[44] = W),
              (eg[45] = V))
          } else
            ((o = eg[30]),
              (i = eg[31]),
              (c = eg[32]),
              (O = eg[33]),
              (E = eg[34]),
              (z = eg[35]),
              (I = eg[36]),
              (q = eg[37]),
              (F = eg[38]),
              (_ = eg[39]),
              (B = eg[40]),
              (H = eg[41]),
              ($ = eg[42]),
              (K = eg[43]),
              (W = eg[44]),
              (V = eg[45]))
          ;(eg[93] !== eC ||
          eg[94] !== ez ||
          eg[95] !== ek.mode ||
          eg[96] !== ek.oneTimeDate ||
          eg[97] !== z ||
          eg[98] !== V
            ? ((Q =
                null == ek.oneTimeDate && "monthly" === ek.mode
                  ? (0, l.jsx)(j.ic, {
                      control: (0, l.jsx)(b.H, {
                        appearance: eC,
                        ariaLabel: ez.formatMessage({
                          id: "inbox.automations.monthDay.ariaLabel",
                          defaultMessage: "Day of the month",
                          description: "Accessible label for the monthly scheduled task day-of-month selector",
                        }),
                        options: g.nb.map(A),
                        selectedId: String(z),
                        selectedLabel: String(z),
                        onSelect: (e) => {
                          V({ monthDay: Number(e) })
                        },
                      }),
                      label: ez.formatMessage({
                        id: "inbox.automations.day.label",
                        defaultMessage: "On",
                        description: "Label for the scheduled task weekday row",
                      }),
                      variant: "nested",
                    })
                  : null),
              (eg[93] = eC),
              (eg[94] = ez),
              (eg[95] = ek.mode),
              (eg[96] = ek.oneTimeDate),
              (eg[97] = z),
              (eg[98] = V),
              (eg[99] = Q))
            : (Q = eg[99]),
            eg[100] !== eC ||
            eg[101] !== ez ||
            eg[102] !== ek.oneTimeDate ||
            eg[103] !== ek.time ||
            eg[104] !== I ||
            eg[105] !== eA ||
            eg[106] !== V
              ? ((G = I
                  ? (0, l.jsx)(j.ic, {
                      control: (0, l.jsx)(p.b, {
                        appearance: eC,
                        value: ek.time,
                        timeZone: eA,
                        date: ek.oneTimeDate,
                        onChange: (e) => {
                          V({ time: e })
                        },
                      }),
                      label:
                        null != ek.oneTimeDate
                          ? ez.formatMessage({
                              id: "inbox.automations.scheduleStartTime.label",
                              defaultMessage: "Start time",
                              description: "Label for the time a one-time scheduled task starts",
                            })
                          : ez.formatMessage({
                              id: "inbox.automations.scheduleTime.label",
                              defaultMessage: "Time",
                              description: "Label for the scheduled task time row",
                            }),
                      variant: "nested",
                    })
                  : null),
                (eg[100] = eC),
                (eg[101] = ez),
                (eg[102] = ek.oneTimeDate),
                (eg[103] = ek.time),
                (eg[104] = I),
                (eg[105] = eA),
                (eg[106] = V),
                (eg[107] = G))
              : (G = eg[107]),
            eg[108] !== eC || eg[109] !== c || eg[110] !== ez || eg[111] !== eA || eg[112] !== W
              ? ((J =
                  null != c
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(j.ic, {
                            control: (0, l.jsx)(b.H, {
                              appearance: eC,
                              ariaLabel: ez.formatMessage({
                                id: "inbox.automations.customFrequency.ariaLabel",
                                defaultMessage: "Repeat frequency",
                                description: "Accessible label for the custom scheduled task frequency selector",
                              }),
                              options: L.map((e) => ({ id: e, label: ez.formatMessage(C[e]) })),
                              selectedId: c.frequency,
                              selectedLabel: ez.formatMessage(C[c.frequency]),
                              onSelect: (e) => {
                                W({ frequency: e })
                              },
                            }),
                            label: ez.formatMessage({
                              id: "inbox.automations.customFrequency.label",
                              defaultMessage: "Repeats",
                              description: "Label for the custom schedule frequency row",
                            }),
                            variant: "nested",
                          }),
                          (0, l.jsx)(j.ic, {
                            control: (0, l.jsx)(f.w, {
                              appearance: eC,
                              ariaLabel: ez.formatMessage({
                                id: "inbox.automations.customInterval.ariaLabel",
                                defaultMessage: "Repeat interval",
                                description: "Accessible label for the custom schedule interval input",
                              }),
                              max: 999,
                              min: 1,
                              suffix: ez.formatMessage(N[c.frequency], { count: c.interval }),
                              value: c.interval,
                              onChange: (e) => {
                                W({ interval: e })
                              },
                            }),
                            label: ez.formatMessage({
                              id: "inbox.automations.customInterval.label",
                              defaultMessage: "Every",
                              description: "Label for the custom schedule interval row",
                            }),
                            variant: "nested",
                          }),
                          "weekly" === c.frequency
                            ? (0, l.jsx)(j.ic, {
                                control: (0, l.jsx)(y.l, {
                                  appearance: eC,
                                  value: c.weekdays,
                                  onChange: (e) => {
                                    W({ weekdays: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customWeekdays.label",
                                  defaultMessage: "On",
                                  description: "Label for the custom schedule weekdays row",
                                }),
                                labelSizing: "content",
                                variant: "nested",
                              })
                            : null,
                          "yearly" === c.frequency
                            ? (0, l.jsx)(j.ic, {
                                control: (0, l.jsx)(b.H, {
                                  appearance: eC,
                                  ariaLabel: ez.formatMessage({
                                    id: "inbox.automations.customMonth.ariaLabel",
                                    defaultMessage: "Month",
                                    description: "Accessible label for the custom schedule month selector",
                                  }),
                                  options: T.map((e) => ({
                                    id: String(e),
                                    label: ez.formatDate(new Date(2024, e - 1, 1), { month: "long" }),
                                  })),
                                  selectedId: String(c.month),
                                  selectedLabel: ez.formatDate(new Date(2024, c.month - 1, 1), { month: "long" }),
                                  onSelect: (e) => {
                                    W({ month: Number(e) })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customMonth.label",
                                  defaultMessage: "In",
                                  description: "Label for the custom schedule month row",
                                }),
                                variant: "nested",
                              })
                            : null,
                          "monthly" === c.frequency || "yearly" === c.frequency
                            ? (0, l.jsx)(j.ic, {
                                control: (0, l.jsx)(h.j, {
                                  appearance: eC,
                                  value: c.monthDays,
                                  onChange: (e) => {
                                    W({ monthDays: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customMonthDay.label",
                                  defaultMessage: "On days",
                                  description: "Label for the custom schedule days of month row",
                                }),
                                variant: "nested",
                              })
                            : null,
                          "hourly" === c.frequency
                            ? (0, l.jsx)(j.ic, {
                                control: (0, l.jsx)(f.w, {
                                  appearance: eC,
                                  ariaLabel: ez.formatMessage({
                                    id: "inbox.automations.customMinute.ariaLabel",
                                    defaultMessage: "Minute past the hour",
                                    description: "Accessible label for the custom hourly schedule minute input",
                                  }),
                                  max: 59,
                                  min: 0,
                                  value: c.minute,
                                  onChange: (e) => {
                                    W({ minute: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customMinute.label",
                                  defaultMessage: "At minute",
                                  description: "Label for the custom hourly schedule minute row",
                                }),
                                variant: "nested",
                              })
                            : (0, l.jsx)(j.ic, {
                                control: (0, l.jsx)(p.b, {
                                  appearance: eC,
                                  value: c.time,
                                  timeZone: eA,
                                  onChange: (e) => {
                                    W({ time: e })
                                  },
                                }),
                                label: ez.formatMessage({
                                  id: "inbox.automations.customStartTime.label",
                                  defaultMessage: "Start time",
                                  description: "Label for the time a custom recurring scheduled task starts",
                                }),
                                variant: "nested",
                              }),
                        ],
                      })
                    : null),
                (eg[108] = eC),
                (eg[109] = c),
                (eg[110] = ez),
                (eg[111] = eA),
                (eg[112] = W),
                (eg[113] = J))
              : (J = eg[113]),
            eg[114] !== c ||
            eg[115] !== ez ||
            eg[116] !== ek.customRrule ||
            eg[117] !== ek.mode ||
            eg[118] !== ek.oneTimeDate ||
            eg[119] !== eO
              ? ((P =
                  eO && "custom" === ek.mode && null == ek.oneTimeDate && null == c
                    ? (0, l.jsx)(j.ic, {
                        variant: "nested",
                        label: (0, m.em)({
                          rrule: ek.customRrule,
                          intl: ez,
                          fallbackMessage: ez.formatMessage({
                            id: "inbox.automations.scheduleRule.advanced",
                            defaultMessage: "Advanced schedule",
                            description: "Label for a saved recurrence that requires the schedule rule editor",
                          }),
                        }),
                        control: (0, l.jsx)(M.$, {
                          color: "ghost",
                          size: "composerSm",
                          type: "button",
                          onClick: (e) => {
                            ;((eI.current = e.currentTarget), eB(ek.customRrule), eF(!0))
                          },
                          children: (0, l.jsx)(u.A, {
                            id: "inbox.automations.scheduleRule.edit",
                            defaultMessage: "Edit rule",
                            description: "Opens the editor for an advanced saved schedule rule",
                          }),
                        }),
                      })
                    : null),
                (eg[114] = c),
                (eg[115] = ez),
                (eg[116] = ek.customRrule),
                (eg[117] = ek.mode),
                (eg[118] = ek.oneTimeDate),
                (eg[119] = eO),
                (eg[120] = P))
              : (P = eg[120]))
          let eY = eN ? O : null
          ;(eg[121] !== o ||
          eg[122] !== eb ||
          eg[123] !== q ||
          eg[124] !== F ||
          eg[125] !== Q ||
          eg[126] !== G ||
          eg[127] !== J ||
          eg[128] !== P ||
          eg[129] !== eY ||
          eg[130] !== H ||
          eg[131] !== $ ||
          eg[132] !== K
            ? ((Z = (0, l.jsxs)(o, { variant: H, children: [$, K, q, F, Q, G, J, P, eb, eY] })),
              (eg[121] = o),
              (eg[122] = eb),
              (eg[123] = q),
              (eg[124] = F),
              (eg[125] = Q),
              (eg[126] = G),
              (eg[127] = J),
              (eg[128] = P),
              (eg[129] = eY),
              (eg[130] = H),
              (eg[131] = $),
              (eg[132] = K),
              (eg[133] = Z))
            : (Z = eg[133]),
            eg[134] !== O || eg[135] !== eN
              ? ((Y = eN || null == O ? null : (0, l.jsx)(D.t, { className: "mt-2", children: O })),
                (eg[134] = O),
                (eg[135] = eN),
                (eg[136] = Y))
              : (Y = eg[136]),
            eg[137] === Symbol.for("react.memo_cache_sentinel")
              ? ((X = {
                  onCloseAutoFocus: (e) => {
                    ;(e.preventDefault(), eI.current?.focus({ preventScroll: !0 }))
                  },
                }),
                (eg[137] = X))
              : (X = eg[137]),
            eg[138] !== E || eg[139] !== e_ || eg[140] !== V
              ? ((ee = (e) => {
                  ;(e.preventDefault(), E && (V({ customRrule: e_ }), eF(!1)))
                }),
                (eg[138] = E),
                (eg[139] = e_),
                (eg[140] = V),
                (eg[141] = ee))
              : (ee = eg[141]),
            eg[142] === Symbol.for("react.memo_cache_sentinel")
              ? ((et = (0, l.jsx)(v.L3, {
                  className: "contents",
                  children: (0, l.jsx)(u.A, {
                    id: "inbox.automations.scheduleRule.title",
                    defaultMessage: "Edit schedule rule",
                    description: "Title of the custom schedule RRULE dialog",
                  }),
                })),
                (eg[142] = et))
              : (et = eg[142]),
            eg[143] === Symbol.for("react.memo_cache_sentinel")
              ? ((ea = (0, l.jsx)(w.OO, {
                  children: (0, l.jsx)(w.c7, {
                    title: et,
                    subtitle: (0, l.jsx)(v.rr, {
                      className: "contents",
                      children: (0, l.jsx)(u.A, {
                        id: "inbox.automations.scheduleRule.description",
                        defaultMessage: "Use an RRULE to define a custom schedule",
                        description: "Description of the custom schedule RRULE dialog",
                      }),
                    }),
                  }),
                })),
                (eg[143] = ea))
              : (ea = eg[143]),
            eg[144] === Symbol.for("react.memo_cache_sentinel")
              ? ((el = (0, l.jsx)("span", {
                  className: "text-sm font-medium text-default",
                  children: (0, l.jsx)(u.A, {
                    id: "inbox.automations.scheduleRule.inputLabel",
                    defaultMessage: "RRULE",
                    description: "Label for the custom schedule RRULE input",
                  }),
                })),
                (eg[144] = el))
              : (el = eg[144]))
          let eX = !E
          ;(eg[145] !== ez
            ? ((en = ez.formatMessage({
                id: "settings.automations.scheduleCustomPlaceholder",
                defaultMessage: "RRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=9;BYMINUTE=0",
                description: "Placeholder text for the custom automation RRULE editor",
              })),
              (eg[145] = ez),
              (eg[146] = en))
            : (en = eg[146]),
            eg[147] === Symbol.for("react.memo_cache_sentinel")
              ? ((es = (e) => {
                  eB(e.currentTarget.value)
                }),
                (eg[147] = es))
              : (es = eg[147]),
            eg[148] !== e_ || eg[149] !== eX || eg[150] !== en
              ? ((eo = (0, l.jsx)(R.pd, {
                  variant: "code",
                  autoFocus: !0,
                  "aria-invalid": eX,
                  placeholder: en,
                  spellCheck: !1,
                  value: e_,
                  onChange: es,
                })),
                (eg[148] = e_),
                (eg[149] = eX),
                (eg[150] = en),
                (eg[151] = eo))
              : (eo = eg[151]),
            eg[152] !== E
              ? ((ei = E
                  ? null
                  : (0, l.jsx)("span", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, l.jsx)(u.A, {
                        id: "inbox.automations.scheduleRule.invalid",
                        defaultMessage: "Enter a valid RRULE",
                        description: "Validation error shown for an invalid custom schedule RRULE",
                      }),
                    })),
                (eg[152] = E),
                (eg[153] = ei))
              : (ei = eg[153]),
            eg[154] !== eo || eg[155] !== ei
              ? ((er = (0, l.jsx)(w.OO, {
                  children: (0, l.jsxs)("label", { className: "flex flex-col gap-2", children: [el, eo, ei] }),
                })),
                (eg[154] = eo),
                (eg[155] = ei),
                (eg[156] = er))
              : (er = eg[156]),
            eg[157] === Symbol.for("react.memo_cache_sentinel")
              ? ((ed = (0, l.jsx)(M.$, {
                  color: "ghost",
                  type: "button",
                  onClick: () => {
                    eF(!1)
                  },
                  children: (0, l.jsx)(u.A, {
                    id: "inbox.automations.scheduleRule.cancel",
                    defaultMessage: "Cancel",
                    description: "Button label for closing the schedule rule dialog without saving",
                  }),
                })),
                (eg[157] = ed))
              : (ed = eg[157]))
          let e1 = !E
          return (
            eg[158] === Symbol.for("react.memo_cache_sentinel")
              ? ((eu = (0, l.jsx)(u.A, {
                  id: "inbox.automations.scheduleRule.save",
                  defaultMessage: "Save",
                  description: "Button label for saving a custom schedule RRULE",
                })),
                (eg[158] = eu))
              : (eu = eg[158]),
            eg[159] !== e1
              ? ((ec = (0, l.jsx)(w.OO, {
                  children: (0, l.jsxs)(w.Es, {
                    children: [ed, (0, l.jsx)(M.$, { disabled: e1, type: "submit", children: eu })],
                  }),
                })),
                (eg[159] = e1),
                (eg[160] = ec))
              : (ec = eg[160]),
            eg[161] !== ee || eg[162] !== er || eg[163] !== ec
              ? ((em = (0, l.jsxs)(w.R4, { as: "form", onSubmit: ee, children: [ea, er, ec] })),
                (eg[161] = ee),
                (eg[162] = er),
                (eg[163] = ec),
                (eg[164] = em))
              : (em = eg[164]),
            eg[165] !== eq || eg[166] !== em
              ? ((eh = (0, l.jsx)(v.lG, {
                  contentProps: X,
                  open: eq,
                  size: "compact",
                  onOpenChange: eF,
                  children: em,
                })),
                (eg[165] = eq),
                (eg[166] = em),
                (eg[167] = eh))
              : (eh = eg[167]),
            eg[168] !== i || eg[169] !== _ || eg[170] !== B || eg[171] !== Z || eg[172] !== Y || eg[173] !== eh
              ? ((ef = (0, l.jsxs)(i, { actions: _, title: B, children: [Z, Y, eh] })),
                (eg[168] = i),
                (eg[169] = _),
                (eg[170] = B),
                (eg[171] = Z),
                (eg[172] = Y),
                (eg[173] = eh),
                (eg[174] = ef))
              : (ef = eg[174]),
            ef
          )
        },
        h: S,
      },
    )
  },
  hIjX(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("iG6x"),
      o = a("xJAz"),
      i = a("on57"),
      r = a("zd8w"),
      d = a("Wf1j"),
      u = a("cOBD"),
      c = a("ygO2"),
      m = a("bqtn"),
      h = a("HOLv")
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
            g,
            p,
            b,
            y,
            x,
            M,
            v,
            w = (0, n.c)(26),
            { appearance: k, value: R, onChange: j } = e,
            D = void 0 === k ? "default" : k,
            L = (0, d.A)(),
            [T, A] = (0, r.useState)(null)
          w[0] !== L || w[1] !== R
            ? ((t =
                R.length <= 3
                  ? R.join(", ")
                  : L.formatMessage(
                      {
                        id: "inbox.automations.customMonthDays.summary",
                        defaultMessage: "{count, plural, one {# day} other {# days}}",
                        description: "Summary of selected days in a custom monthly schedule",
                      },
                      { count: R.length },
                    )),
              (w[0] = L),
              (w[1] = R),
              (w[2] = t))
            : (t = w[2])
          let S = t
          ;(w[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (e) => {
                A(e?.closest(".codex-dialog") ?? null)
              }),
              (w[3] = a))
            : (a = w[3]),
            w[4] !== L
              ? ((g = L.formatMessage({
                  id: "inbox.automations.customMonthDays.ariaLabel",
                  defaultMessage: "Days of the month",
                  description: "Accessible label for the custom schedule days of month selector",
                })),
                (w[4] = L),
                (w[5] = g))
              : (g = w[5]))
          let U = "form" === D ? "ghostTertiary" : "ghost",
            C = "form" === D ? "formValue" : "composerSm",
            N = "default" === D && "text-base text-default"
          ;(w[6] !== N ? ((p = (0, i.A)("max-w-40 truncate tabular-nums", N)), (w[6] = N), (w[7] = p)) : (p = w[7]),
            w[8] !== S || w[9] !== p
              ? ((b = (0, l.jsx)("span", { className: p, children: S })), (w[8] = S), (w[9] = p), (w[10] = b))
              : (b = w[10]))
          let O = "form" === D ? o.U : s.K
          return (
            w[11] !== O ? ((y = (0, l.jsx)(h.I, { asset: O })), (w[11] = O), (w[12] = y)) : (y = w[12]),
            w[13] !== y || w[14] !== g || w[15] !== U || w[16] !== C || w[17] !== b
              ? ((x = (0, l.jsxs)(c.$, {
                  ref: a,
                  "aria-label": g,
                  className: "max-w-full min-w-0",
                  color: U,
                  size: C,
                  children: [b, y],
                })),
                (w[13] = y),
                (w[14] = g),
                (w[15] = U),
                (w[16] = C),
                (w[17] = b),
                (w[18] = x))
              : (x = w[18]),
            w[19] !== j || w[20] !== R
              ? ((M = u.nb.map((e) => {
                  let t = R.includes(e)
                  return (0, l.jsx)(
                    m.ms.CheckboxItem,
                    {
                      checked: t,
                      onCheckedChange: (t) => {
                        let a = !0 === t ? [...R, e].sort(f) : R.filter((t) => t !== e)
                        a.length > 0 && j(a)
                      },
                      children: e,
                    },
                    e,
                  )
                })),
                (w[19] = j),
                (w[20] = R),
                (w[21] = M))
              : (M = w[21]),
            w[22] !== T || w[23] !== x || w[24] !== M
              ? ((v = (0, l.jsx)(m.Ab, {
                  scrollFade: !0,
                  align: "end",
                  contentMaxHeight: "tall",
                  contentWidth: "sm",
                  portalContainer: T,
                  triggerButton: x,
                  children: M,
                })),
                (w[22] = T),
                (w[23] = x),
                (w[24] = M),
                (w[25] = v))
              : (v = w[25]),
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
            d,
            u,
            c = (0, n.c)(24),
            { appearance: m, ariaLabel: h, max: f, min: g, step: p, suffix: b, value: y, onChange: x } = e,
            M = void 0 === p ? 1 : p,
            v = "form" === (void 0 === m ? "default" : m) ? "text-form-body" : "text-base"
          c[0] !== v
            ? ((t = (0, s.A)("flex items-center gap-1.5 text-default", v)), (c[0] = v), (c[1] = t))
            : (t = c[1])
          let w = String(y),
            k = 1 === M ? "numeric" : "decimal",
            R = 1 === M ? "[0-9]*" : "[0-9]*[.]?[0-9]*"
          return (
            c[2] !== f || c[3] !== g || c[4] !== x || c[5] !== M || c[6] !== y
              ? ((a = (e) => {
                  if (e.currentTarget.value === String(y)) return
                  if (0 === e.currentTarget.value.length || !Number.isFinite(Number(e.currentTarget.value))) {
                    e.currentTarget.value = String(y)
                    return
                  }
                  let t = Math.min(f, Math.max(g, Math.round(Number(e.currentTarget.value) / M) * M))
                  ;((e.currentTarget.value = String(t)), t !== y && x(t))
                }),
                (c[2] = f),
                (c[3] = g),
                (c[4] = x),
                (c[5] = M),
                (c[6] = y),
                (c[7] = a))
              : (a = c[7]),
            c[8] !== M
              ? ((i = (e) => {
                  e.currentTarget.value = e.currentTarget.value.replaceAll(1 === M ? /[^0-9]/g : /[^0-9.]/g, "")
                }),
                (c[8] = M),
                (c[9] = i))
              : (i = c[9]),
            c[10] !== h || c[11] !== w || c[12] !== k || c[13] !== R || c[14] !== a || c[15] !== i || c[16] !== y
              ? ((r = (0, l.jsx)(
                  "input",
                  {
                    "aria-label": h,
                    className: "w-12 bg-transparent text-end tabular-nums outline-none",
                    defaultValue: w,
                    inputMode: k,
                    pattern: R,
                    type: "text",
                    onBlur: a,
                    onChange: i,
                    onKeyDown: o,
                  },
                  y,
                )),
                (c[10] = h),
                (c[11] = w),
                (c[12] = k),
                (c[13] = R),
                (c[14] = a),
                (c[15] = i),
                (c[16] = y),
                (c[17] = r))
              : (r = c[17]),
            c[18] !== b
              ? ((d = null != b ? (0, l.jsx)("span", { className: "text-codex-description", children: b }) : null),
                (c[18] = b),
                (c[19] = d))
              : (d = c[19]),
            c[20] !== r || c[21] !== d || c[22] !== t
              ? ((u = (0, l.jsxs)("label", { className: t, children: [r, d] })),
                (c[20] = r),
                (c[21] = d),
                (c[22] = t),
                (c[23] = u))
              : (u = c[23]),
            u
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
          labelMessage: (0, l.zR)({
            id: "settings.automations.scheduleMode.interval",
            defaultMessage: "Interval",
            description: "Dropdown label for a repeating automation interval schedule",
          }),
        },
        {
          id: "daily",
          labelMessage: (0, l.zR)({
            id: "settings.automations.scheduleMode.daily",
            defaultMessage: "Daily",
            description: "Dropdown label for a daily automation schedule",
          }),
        },
        {
          id: "weekdays",
          labelMessage: (0, l.zR)({
            id: "settings.automations.scheduleMode.weekdays",
            defaultMessage: "Weekdays",
            description: "Dropdown label for a weekdays-only automation schedule",
          }),
        },
        {
          id: "weekly",
          labelMessage: (0, l.zR)({
            id: "settings.automations.scheduleMode.weekly",
            defaultMessage: "Weekly",
            description: "Dropdown label for a weekly automation schedule",
          }),
        },
      ],
      i = {
        id: "custom",
        labelMessage: (0, l.zR)({
          id: "settings.automations.scheduleMode.custom",
          defaultMessage: "Custom",
          description: "Dropdown label for a custom automation schedule",
        }),
      },
      r = [...o, i],
      d = [
        ...o,
        {
          id: "monthly",
          labelMessage: (0, l.zR)({
            id: "settings.automations.scheduleMode.monthly",
            defaultMessage: "Monthly",
            description: "Dropdown label for a monthly cloud automation schedule",
          }),
        },
        i,
      ],
      u = Array.from({ length: 31 }, (e, t) => t + 1),
      c = [
        {
          id: "MO",
          labelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.mon",
            defaultMessage: "Mo",
            description: "RRULE weekday short label",
          }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.monday",
            defaultMessage: "Monday",
            description: "RRULE weekday long label",
          }),
        },
        {
          id: "TU",
          labelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.tue",
            defaultMessage: "Tu",
            description: "RRULE weekday short label",
          }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.tuesday",
            defaultMessage: "Tuesday",
            description: "RRULE weekday long label",
          }),
        },
        {
          id: "WE",
          labelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.wed",
            defaultMessage: "We",
            description: "RRULE weekday short label",
          }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.wednesday",
            defaultMessage: "Wednesday",
            description: "RRULE weekday long label",
          }),
        },
        {
          id: "TH",
          labelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.thu",
            defaultMessage: "Th",
            description: "RRULE weekday short label",
          }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.thursday",
            defaultMessage: "Thursday",
            description: "RRULE weekday long label",
          }),
        },
        {
          id: "FR",
          labelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.fri",
            defaultMessage: "Fr",
            description: "RRULE weekday short label",
          }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.friday",
            defaultMessage: "Friday",
            description: "RRULE weekday long label",
          }),
        },
        {
          id: "SA",
          labelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.sat",
            defaultMessage: "Sa",
            description: "RRULE weekday short label",
          }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.saturday",
            defaultMessage: "Saturday",
            description: "RRULE weekday long label",
          }),
        },
        {
          id: "SU",
          labelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.sun",
            defaultMessage: "Su",
            description: "RRULE weekday short label",
          }),
          longLabelMessage: (0, l.zR)({
            id: "settings.automations.rrule.weekday.sunday",
            defaultMessage: "Sunday",
            description: "RRULE weekday long label",
          }),
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
        TJ: d,
        f0: r,
        gP: s,
        nb: u,
      },
    )
  },
  BCU4(e, t, a) {
    a.d(t, { b: () => g })
    var l = a("ABep"),
      n = a("QosV"),
      s = a("Ks4B"),
      o = a("iG6x"),
      i = a("xJAz"),
      r = a("on57"),
      d = a("zd8w"),
      u = a("Wf1j"),
      c = a("cOBD"),
      m = a("fGpH"),
      h = a("HOLv"),
      f = a("nzx4")
    function g(e) {
      let t,
        a,
        g,
        M,
        v,
        w,
        k,
        R,
        j,
        D,
        L,
        T,
        A,
        S,
        U,
        C,
        N,
        O,
        E,
        z,
        I,
        q,
        F,
        _,
        B,
        H,
        $,
        K,
        W = (0, n.c)(124),
        { appearance: V, value: Q, onChange: G, isOptionVisible: J, timeZone: P, date: Z } = e,
        Y = void 0 === V ? "default" : V,
        X = (0, u.A)(),
        ee = (0, d.useId)(),
        et = (0, d.useRef)(null),
        ea = (0, d.useRef)(Q),
        [el, en] = (0, d.useState)(!1),
        [es, eo] = (0, d.useState)(!1),
        [ei, er] = (0, d.useState)(""),
        [ed, eu] = (0, d.useState)(null),
        [ec, em] = (0, d.useState)(Q),
        [eh, ef] = (0, d.useState)()
      W[0] !== J || W[1] !== Q
        ? ((t = [...new Set([...c.gP, Q])].filter((e) => J?.(e) ?? !0).sort()), (W[0] = J), (W[1] = Q), (W[2] = t))
        : (t = W[2])
      let eg = t
      W[3] !== J || W[4] !== ed
        ? ((a = null != ed && (J?.(ed) ?? !0)), (W[3] = J), (W[4] = ed), (W[5] = a))
        : (a = W[5])
      let ep = a
      W[6] !== X
        ? ((g = X.formatMessage({
            id: "settings.automations.scheduleTime",
            defaultMessage: "Time",
            description: "Accessible label for the automation schedule time input",
          })),
          (W[6] = X),
          (W[7] = g))
        : (g = W[7])
      let eb = g
      if (null != P) {
        let e
        ;(W[8] !== Z || W[9] !== X || W[10] !== P || W[11] !== Q
          ? ((e = X.formatTime((0, m.dQ)(Z ?? "2026-01-01", Q, P, 0), {
              timeZone: P,
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: null == Z ? "shortGeneric" : "short",
            })),
            (W[8] = Z),
            (W[9] = X),
            (W[10] = P),
            (W[11] = Q),
            (W[12] = e))
          : (e = W[12]),
          (M = e))
      } else if ("field" === Y) {
        let e
        if (W[13] !== X || W[14] !== Q) {
          let t, a
          W[16] !== Q ? ((t = Q.slice(0, 2)), (W[16] = Q), (W[17] = t)) : (t = W[17])
          let l = Number(t)
          ;(W[18] !== Q ? ((a = Q.slice(3)), (W[18] = Q), (W[19] = a)) : (a = W[19]),
            (e = X.formatTime(new Date(2024, 0, 1, l, Number(a)), { hour: "2-digit", minute: "2-digit" })),
            (W[13] = X),
            (W[14] = Q),
            (W[15] = e))
        } else e = W[15]
        M = e
      } else {
        let e
        ;(W[20] !== X || W[21] !== Q ? ((e = (0, c.T6)(Q, X)), (W[20] = X), (W[21] = Q), (W[22] = e)) : (e = W[22]),
          (M = e))
      }
      W[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = () => {
            ;(en(!1), eo(!1), er(""))
          }),
          (W[23] = v))
        : (v = W[23])
      let ey = v
      W[24] !== es || W[25] !== G || W[26] !== ed || W[27] !== ep
        ? ((w = () => {
            ;(es && ep && G(ed), ey())
          }),
          (W[24] = es),
          (W[25] = G),
          (W[26] = ed),
          (W[27] = ep),
          (W[28] = w))
        : (w = W[28])
      let ex = w
      W[29] !== G
        ? ((k = (e) => {
            ;(G(e), ey(), et.current?.focus())
          }),
          (W[29] = G),
          (W[30] = k))
        : (k = W[30])
      let eM = k
      W[31] !== el || W[32] !== Q
        ? ((R = () => {
            el || (em(Q), en(!0))
          }),
          (W[31] = el),
          (W[32] = Q),
          (W[33] = R))
        : (R = W[33])
      let ev = R
      W[34] !== es || W[35] !== eg || W[36] !== ed || W[37] !== Q
        ? ((j = (e) => {
            ;(er(e), es ? "" === e && null != ed && (ea.current = ed) : (ea.current = Q))
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
            if ((eu(t), null != t && eg.length > 0)) {
              let e = x,
                a = e(t)
              em(eg.reduce((t, l) => (Math.abs(e(l) - a) < Math.abs(e(t) - a) ? l : t)))
            }
          }),
          (W[34] = es),
          (W[35] = eg),
          (W[36] = ed),
          (W[37] = Q),
          (W[38] = j))
        : (j = W[38])
      let ew = j
      W[39] !== ex || W[40] !== ev
        ? ((D = (e) => {
            e ? ev() : ex()
          }),
          (W[39] = ex),
          (W[40] = ev),
          (W[41] = D))
        : (D = W[41])
      let ek =
        "field" === Y
          ? "focus-within:border-text/50 forced-colors:focus-within:outline-2 forced-colors:focus-within:outline-solid"
          : "has-focus-visible:outline has-focus-visible:outline-2"
      W[42] !== Y || W[43] !== ek
        ? ((L = (0, r.A)(
            "inline-flex min-w-0 items-center gap-2",
            ek,
            {
              default: "h-token-button-composer-sm rounded-md text-base leading-5 text-tertiary",
              form: "min-h-10 rounded-md text-form-body text-secondary",
              field: "h-9 w-full rounded-lg border border-primary-outline px-3 text-sm leading-5 text-default",
            }[Y],
          )),
          (W[42] = Y),
          (W[43] = ek),
          (W[44] = L))
        : (L = W[44])
      let eR = el ? ee : void 0,
        ej = el ? `${ee}-${ec}` : void 0,
        eD = es && "" !== ei && !ep,
        eL = !es,
        eT = es ? ei : M,
        eA = Math.max(M.length, ei.length, 5),
        eS = "field" === Y ? "flex-1 text-start" : "text-end",
        eU = !es && "cursor-interaction caret-transparent"
      ;(W[45] !== eS || W[46] !== eU
        ? ((T = (0, r.A)(
            "min-w-0 max-w-full border-0 bg-transparent p-0 text-[length:inherit] leading-[inherit] text-inherit tabular-nums outline-none",
            eS,
            eU,
          )),
          (W[45] = eS),
          (W[46] = eU),
          (W[47] = T))
        : (T = W[47]),
        W[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (e) => ef(e.currentTarget.closest('[role="dialog"]') ?? void 0)), (W[48] = A))
          : (A = W[48]),
        W[49] !== ew ? ((S = (e) => ew(e.target.value)), (W[49] = ew), (W[50] = S)) : (S = W[50]),
        W[51] !== ec ||
        W[52] !== ex ||
        W[53] !== es ||
        W[54] !== ei.length ||
        W[55] !== el ||
        W[56] !== eg ||
        W[57] !== ed ||
        W[58] !== eM ||
        W[59] !== ev ||
        W[60] !== ew ||
        W[61] !== ep
          ? ((U = (e) => {
              if (!e.nativeEvent.isComposing)
                if (
                  (!es ||
                    null == ed ||
                    0 !== e.currentTarget.selectionStart ||
                    e.currentTarget.selectionEnd !== ei.length ||
                    e.metaKey ||
                    e.ctrlKey ||
                    e.altKey ||
                    (1 !== e.key.length && "Backspace" !== e.key && "Delete" !== e.key) ||
                    (ea.current = ed),
                  "Escape" === e.key)
                )
                  (e.preventDefault(), e.stopPropagation(), ey())
                else if ("Tab" === e.key) ex()
                else if ("Enter" === e.key)
                  (e.preventDefault(), e.stopPropagation(), el ? (es ? ep && ex() : eg.includes(ec) && eM(ec)) : ev())
                else if ("ArrowDown" === e.key || "ArrowUp" === e.key)
                  if ((e.preventDefault(), el)) {
                    let t = eg.indexOf(ec),
                      a = eg[Math.max(0, Math.min(eg.length - 1, t + ("ArrowDown" === e.key ? 1 : -1)))]
                    null != a &&
                      (em(a),
                      eu(a),
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
                    (e.preventDefault(), ev(), eo(!0), ew(1 === e.key.length ? e.key : ""))
            }),
            (W[51] = ec),
            (W[52] = ex),
            (W[53] = es),
            (W[54] = ei.length),
            (W[55] = el),
            (W[56] = eg),
            (W[57] = ed),
            (W[58] = eM),
            (W[59] = ev),
            (W[60] = ew),
            (W[61] = ep),
            (W[62] = U))
          : (U = W[62]),
        W[63] !== es || W[64] !== ed || W[65] !== ev || W[66] !== ew
          ? ((C = (e) => {
              ;(e.preventDefault(),
                ev(),
                eo(!0),
                es && null != ed && (ea.current = ed),
                ew(e.clipboardData.getData("text")))
            }),
            (W[63] = es),
            (W[64] = ed),
            (W[65] = ev),
            (W[66] = ew),
            (W[67] = C))
          : (C = W[67]),
        W[68] !== eb ||
        W[69] !== el ||
        W[70] !== ev ||
        W[71] !== eR ||
        W[72] !== ej ||
        W[73] !== eD ||
        W[74] !== eL ||
        W[75] !== eT ||
        W[76] !== eA ||
        W[77] !== T ||
        W[78] !== S ||
        W[79] !== U ||
        W[80] !== C
          ? ((N = (0, l.jsx)("input", {
              ref: et,
              role: "combobox",
              "aria-label": eb,
              "aria-expanded": el,
              "aria-controls": eR,
              "aria-activedescendant": ej,
              "aria-autocomplete": "none",
              "aria-invalid": eD,
              autoComplete: "off",
              readOnly: eL,
              value: eT,
              size: eA,
              className: T,
              onFocus: A,
              onClick: ev,
              onChange: S,
              onKeyDown: U,
              onPaste: C,
            })),
            (W[68] = eb),
            (W[69] = el),
            (W[70] = ev),
            (W[71] = eR),
            (W[72] = ej),
            (W[73] = eD),
            (W[74] = eL),
            (W[75] = eT),
            (W[76] = eA),
            (W[77] = T),
            (W[78] = S),
            (W[79] = U),
            (W[80] = C),
            (W[81] = N))
          : (N = W[81]),
        W[82] !== ev
          ? ((O = () => {
              ;(et.current?.focus(), ev())
            }),
            (W[82] = ev),
            (W[83] = O))
          : (O = W[83]))
      let eC = "form" === Y ? i.U : o.K
      if (
        (W[84] !== eC ? ((E = (0, l.jsx)(h.I, { asset: eC })), (W[84] = eC), (W[85] = E)) : (E = W[85]),
        W[86] !== eb || W[87] !== O || W[88] !== E
          ? ((z = (0, l.jsx)("button", {
              type: "button",
              tabIndex: -1,
              "aria-label": eb,
              className: "shrink-0 cursor-interaction",
              onClick: O,
              children: E,
            })),
            (W[86] = eb),
            (W[87] = O),
            (W[88] = E),
            (W[89] = z))
          : (z = W[89]),
        W[90] !== L || W[91] !== N || W[92] !== z
          ? ((I = (0, l.jsx)(f.dT, { asChild: !0, children: (0, l.jsxs)("div", { className: L, children: [N, z] }) })),
            (W[90] = L),
            (W[91] = N),
            (W[92] = z),
            (W[93] = I))
          : (I = W[93]),
        W[94] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (e) => {
              e.target instanceof Node && et.current?.parentElement?.contains(e.target) && e.preventDefault()
            }),
            (F = (e) => {
              ;(e.preventDefault(), ey())
            }),
            (W[94] = q),
            (W[95] = F))
          : ((q = W[94]), (F = W[95])),
        W[96] !== ec
          ? ((_ = (e) => {
              let t = e?.querySelector(`[data-time="${ec}"]`)
              null != e && null != t && (e.scrollTop = t.offsetTop - (e.clientHeight - t.offsetHeight) / 2)
            }),
            (W[96] = ec),
            (W[97] = _))
          : (_ = W[97]),
        W[98] !== ec || W[99] !== X || W[100] !== ee || W[101] !== eg || W[102] !== eM || W[103] !== Q)
      ) {
        let e
        ;(W[105] !== ec || W[106] !== X || W[107] !== ee || W[108] !== eM || W[109] !== Q
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
                    "flex w-full cursor-interaction items-center justify-between gap-2 rounded-xl px-row-x py-row-y text-sm text-default tabular-nums hover:bg-primary-ghost-hover",
                    e === ec && "bg-primary-ghost-hover",
                  ),
                  onPointerDown: p,
                  onClick: () => eM(e),
                  children: [(0, c.T6)(e, X), e === Q ? (0, l.jsx)(h.I, { asset: s.G }) : null],
                },
                e,
              )),
            (W[105] = ec),
            (W[106] = X),
            (W[107] = ee),
            (W[108] = eM),
            (W[109] = Q),
            (W[110] = e))
          : (e = W[110]),
          (B = eg.map(e)),
          (W[98] = ec),
          (W[99] = X),
          (W[100] = ee),
          (W[101] = eg),
          (W[102] = eM),
          (W[103] = Q),
          (W[104] = B))
      } else B = W[104]
      return (
        W[111] !== eb || W[112] !== ee || W[113] !== _ || W[114] !== B
          ? ((H = (0, l.jsx)("div", {
              ref: _,
              id: ee,
              role: "listbox",
              "aria-label": eb,
              className: "relative max-h-72 min-h-0 overflow-y-auto",
              children: B,
            })),
            (W[111] = eb),
            (W[112] = ee),
            (W[113] = _),
            (W[114] = B),
            (W[115] = H))
          : (H = W[115]),
        W[116] !== eh || W[117] !== H
          ? (($ = (0, l.jsx)(f.hl, {
              align: "end",
              variant: "menu",
              size: "content",
              className: "min-w-40 overflow-hidden",
              portalContainer: eh,
              onOpenAutoFocus: y,
              onCloseAutoFocus: b,
              onInteractOutside: q,
              onEscapeKeyDown: F,
              children: H,
            })),
            (W[116] = eh),
            (W[117] = H),
            (W[118] = $))
          : ($ = W[118]),
        W[119] !== el || W[120] !== D || W[121] !== I || W[122] !== $
          ? ((K = (0, l.jsxs)(f.AM, { open: el, onOpenChange: D, children: [I, $] })),
            (W[119] = el),
            (W[120] = D),
            (W[121] = I),
            (W[122] = $),
            (W[123] = K))
          : (K = W[123]),
        K
      )
    }
    function p(e) {
      return e.preventDefault()
    }
    function b(e) {
      return e.preventDefault()
    }
    function y(e) {
      return e.preventDefault()
    }
    function x(e) {
      return 60 * Number(e.slice(0, 2)) + Number(e.slice(3))
    }
  },
  gM9O(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("slpy"),
      o = a("Ks4B"),
      i = a("iG6x"),
      r = a("xJAz"),
      d = a("on57"),
      u = a("zd8w"),
      c = a("oyxz"),
      m = a("TjgH"),
      h = a("ygO2"),
      f = a("bqtn"),
      g = a("HOLv")
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a,
            p,
            b,
            y,
            x,
            M,
            v,
            w,
            k,
            R,
            j = (0, n.c)(46),
            {
              appearance: D,
              ariaLabel: L,
              disabled: T,
              error: A,
              options: S,
              selectedId: U,
              selectedLabel: C,
              onSelect: N,
            } = e,
            O = void 0 === D ? "default" : D,
            E = void 0 !== T && T,
            z = (0, u.useId)(),
            I = (0, u.useRef)(null),
            [q, F] = (0, u.useState)(!1),
            _ = !q && void 0
          j[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => {
                let t = I.current?.querySelector('[data-selected="true"]')
                null != t &&
                  (e.preventDefault(),
                  t.focus({ preventScroll: !0 }),
                  requestAnimationFrame(() => {
                    t.scrollIntoView({ block: "nearest" })
                  }))
              }),
              (j[0] = t))
            : (t = j[0])
          let B = null != A || void 0,
            H = null != A ? z : void 0,
            $ = "form" === O && "not-disabled:not-aria-disabled:text-secondary",
            K = "default" === O && "pe-0"
          j[1] !== $ || j[2] !== K
            ? ((a = (0, d.A)("max-w-full min-w-0", $, K)), (j[1] = $), (j[2] = K), (j[3] = a))
            : (a = j[3])
          let W = "form" === O ? "ghostTertiary" : "ghost",
            V = "form" === O ? "formValue" : "composerSm"
          ;(j[4] !== A || j[5] !== z
            ? ((p = null != A ? (0, l.jsx)("span", { id: z, className: "sr-only", children: A }) : null),
              (j[4] = A),
              (j[5] = z),
              (j[6] = p))
            : (p = j[6]),
            j[7] !== A
              ? ((b =
                  null != A
                    ? (0, l.jsx)(m.E, {
                        variant: "caution",
                        children: (0, l.jsx)(c.A, {
                          id: "automation.schedule.unsupportedInterval",
                          defaultMessage: "Unsupported",
                          description:
                            "Badge beside a selected automation interval that the current owner's schedule policy does not allow. The user must choose a supported interval to save.",
                        }),
                      })
                    : null),
                (j[7] = A),
                (j[8] = b))
              : (b = j[8]))
          let Q = "default" === O && "text-tertiary",
            G = "default" === O && "text-base leading-5"
          ;(j[9] !== Q || j[10] !== G
            ? ((y = (0, d.A)("truncate", Q, G)), (j[9] = Q), (j[10] = G), (j[11] = y))
            : (y = j[11]),
            j[12] !== C || j[13] !== y
              ? ((x = (0, l.jsx)("span", { className: y, children: C })), (j[12] = C), (j[13] = y), (j[14] = x))
              : (x = j[14]))
          let J = "default" === O ? "text-tertiary" : void 0,
            P = "form" === O ? r.U : i.K
          if (
            (j[15] !== J || j[16] !== P
              ? ((M = (0, l.jsx)(g.I, { className: J, asset: P })), (j[15] = J), (j[16] = P), (j[17] = M))
              : (M = j[17]),
            j[18] !== L ||
            j[19] !== E ||
            j[20] !== W ||
            j[21] !== V ||
            j[22] !== p ||
            j[23] !== b ||
            j[24] !== x ||
            j[25] !== M ||
            j[26] !== B ||
            j[27] !== H ||
            j[28] !== a
              ? ((v = (0, l.jsxs)(h.$, {
                  "aria-label": L,
                  "aria-invalid": B,
                  "aria-describedby": H,
                  disabled: E,
                  className: a,
                  color: W,
                  size: V,
                  children: [p, b, x, M],
                })),
                (j[18] = L),
                (j[19] = E),
                (j[20] = W),
                (j[21] = V),
                (j[22] = p),
                (j[23] = b),
                (j[24] = x),
                (j[25] = M),
                (j[26] = B),
                (j[27] = H),
                (j[28] = a),
                (j[29] = v))
              : (v = j[29]),
            j[30] !== N || j[31] !== S || j[32] !== U)
          ) {
            let e
            ;(j[34] !== N || j[35] !== U
              ? ((e = (e) =>
                  (0, l.jsx)(
                    f.ms.Item,
                    {
                      "data-selected": e.id === U,
                      rightIconAsset: e.id === U ? o.G : void 0,
                      onSelect: () => {
                        N(e.id)
                      },
                      children: e.label,
                    },
                    e.id,
                  )),
                (j[34] = N),
                (j[35] = U),
                (j[36] = e))
              : (e = j[36]),
              (w = S.map(e)),
              (j[30] = N),
              (j[31] = S),
              (j[32] = U),
              (j[33] = w))
          } else w = j[33]
          return (
            j[37] !== E || j[38] !== q || j[39] !== v || j[40] !== w
              ? ((k = (0, l.jsx)("span", {
                  className: "inline-flex max-w-full min-w-0",
                  children: (0, l.jsx)(f.Ab, {
                    open: q,
                    onOpenChange: F,
                    scrollFade: !0,
                    disabled: E,
                    modal: !0,
                    align: "end",
                    contentRef: I,
                    onOpenAutoFocus: t,
                    contentWidth: "sm",
                    contentMaxHeight: "list",
                    triggerButton: v,
                    children: w,
                  }),
                })),
                (j[37] = E),
                (j[38] = q),
                (j[39] = v),
                (j[40] = w),
                (j[41] = k))
              : (k = j[41]),
            j[42] !== A || j[43] !== k || j[44] !== _
              ? ((R = (0, l.jsx)(s.m, { content: A, forceOpen: _, children: k })),
                (j[42] = A),
                (j[43] = k),
                (j[44] = _),
                (j[45] = R))
              : (R = j[45]),
            R
          )
        },
      },
    )
  },
  dUCV(e, t, a) {
    var l = a("ABep"),
      n = a("QosV"),
      s = a("iG6x"),
      o = a("xJAz"),
      i = a("on57"),
      r = a("Wf1j"),
      d = a("cOBD"),
      u = a("ygO2"),
      c = a("bqtn"),
      m = a("HOLv")
    function h(e) {
      return e.label
    }
    a.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            a = (0, n.c)(20),
            { appearance: f, value: g, onChange: p, weekdayLabelFormat: b } = e,
            y = void 0 === f ? "default" : f,
            x = (0, r.A)()
          if (a[0] !== y || a[1] !== x || a[2] !== p || a[3] !== g || a[4] !== b) {
            let e, n, r, f, M, v
            a[6] !== x || a[7] !== b
              ? ((e = (e, t) => ({
                  id: e.id,
                  label:
                    "short" === b
                      ? x.formatDate(Date.UTC(2024, 0, t + 1), { weekday: "short", timeZone: "UTC" })
                      : x.formatMessage(e.longLabelMessage),
                })),
                (a[6] = x),
                (a[7] = b),
                (a[8] = e))
              : (e = a[8])
            let w = d.O0.map(e)
            a[9] !== g ? ((n = (e) => g.includes(e.id)), (a[9] = g), (a[10] = n)) : (n = a[10])
            let k = w.filter(n).map(h)
            a[11] !== x
              ? ((r = x.formatMessage({
                  id: "inbox.automations.customWeekdays.ariaLabel",
                  defaultMessage: "Days of the week",
                  description: "Accessible label for the custom schedule weekdays selector",
                })),
                (a[11] = x),
                (a[12] = r))
              : (r = a[12])
            let R = "default" === y && "text-base text-default"
            a[13] !== R ? ((f = (0, i.A)("truncate", R)), (a[13] = R), (a[14] = f)) : (f = a[14])
            let j = "form" === y ? o.U : s.K
            ;(a[15] !== j ? ((M = (0, l.jsx)(m.I, { asset: j })), (a[15] = j), (a[16] = M)) : (M = a[16]),
              a[17] !== p || a[18] !== g
                ? ((v = (e) => {
                    let t = g.includes(e.id)
                    return (0, l.jsx)(
                      c.ms.CheckboxItem,
                      {
                        checked: t,
                        onCheckedChange: (t) => {
                          let a = !0 === t ? [...g, e.id] : g.filter((t) => t !== e.id)
                          a.length > 0 && p(a)
                        },
                        children: e.label,
                      },
                      e.id,
                    )
                  }),
                  (a[17] = p),
                  (a[18] = g),
                  (a[19] = v))
                : (v = a[19]),
              (t = (0, l.jsx)(c.Ab, {
                scrollFade: !0,
                align: "end",
                contentWidth: "sm",
                triggerButton: (0, l.jsxs)(u.$, {
                  "aria-label": r,
                  className: "max-w-full min-w-0",
                  color: "form" === y ? "ghostTertiary" : "ghost",
                  size: "form" === y ? "formValue" : "composerSm",
                  children: [
                    (0, l.jsx)("span", { className: f, children: x.formatList(k, { type: "conjunction" }) }),
                    M,
                  ],
                }),
                children: w.map(v),
              })),
              (a[0] = y),
              (a[1] = x),
              (a[2] = p),
              (a[3] = g),
              (a[4] = b),
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
            { actions: i, children: r, title: d } = e
          return (
            o[0] !== i || o[1] !== d
              ? ((t =
                  null != d || null != i
                    ? (0, l.jsxs)("div", {
                        className: "flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-tertiary",
                        children: [(0, l.jsx)("span", { className: "opacity-75", children: d }), i],
                      })
                    : null),
                (o[0] = i),
                (o[1] = d),
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
  xJAz(e, t, a) {
    let l = (0, a("nkTT").a)({
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
//# sourceMappingURL=638947.a1148242d9.js.map
