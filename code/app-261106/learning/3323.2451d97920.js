export const __rspack_esm_ids = [3323]
export const __webpack_modules__ = {
  Og6t(e, a, t) {
    var s = t("ABep"),
      r = t("zd8w"),
      o = t("Wf1j"),
      n = t("oyxz"),
      i = t("KwmQ"),
      l = t("pXKw"),
      c = t("pNxJ"),
      d = t("KIsW"),
      g = t("pTkA"),
      v = t("r2ev")
    let f = "var(--learning-block-color-primary)",
      b = "var(--learning-block-color-secondary)",
      u = "var(--learning-block-color-companion)",
      m = "var(--learning-block-accent)",
      k = "var(--learning-block-accent-surface)",
      x = "var(--border-heavy)",
      M = "var(--learning-block-visualization-surface, var(--bg-primary))",
      p = (e, a, t) => {
        let s = "above" === t
        return "blood_glucose" === a
          ? {
              variable: e.formatMessage({
                id: "learningBlock.negativeFeedback.variable.glucose",
                defaultMessage: "Blood glucose",
              }),
              setPoint: e.formatMessage({
                id: "learningBlock.negativeFeedback.setPoint.glucose",
                defaultMessage: "normal range",
              }),
              sensor: e.formatMessage({
                id: "learningBlock.negativeFeedback.sensor.glucose",
                defaultMessage: "Pancreatic cells",
              }),
              center: e.formatMessage({
                id: "learningBlock.negativeFeedback.center.glucose",
                defaultMessage: "Pancreas",
              }),
              effector: s
                ? e.formatMessage({
                    id: "learningBlock.negativeFeedback.effector.glucoseAbove",
                    defaultMessage: "Liver + body cells",
                  })
                : e.formatMessage({
                    id: "learningBlock.negativeFeedback.effector.glucoseBelow",
                    defaultMessage: "Liver",
                  }),
              action: s
                ? e.formatMessage({
                    id: "learningBlock.negativeFeedback.action.glucoseAbove",
                    defaultMessage: "Insulin promotes uptake",
                  })
                : e.formatMessage({
                    id: "learningBlock.negativeFeedback.action.glucoseBelow",
                    defaultMessage: "Glucagon signals release",
                  }),
            }
          : "thermostat" === a
            ? {
                variable: e.formatMessage({
                  id: "learningBlock.negativeFeedback.variable.room",
                  defaultMessage: "Room temperature",
                }),
                setPoint: e.formatMessage({
                  id: "learningBlock.negativeFeedback.setPoint.room",
                  defaultMessage: "set point",
                }),
                sensor: e.formatMessage({
                  id: "learningBlock.negativeFeedback.sensor.room",
                  defaultMessage: "Temperature sensor",
                }),
                center: e.formatMessage({
                  id: "learningBlock.negativeFeedback.center.room",
                  defaultMessage: "Thermostat",
                }),
                effector: s
                  ? e.formatMessage({
                      id: "learningBlock.negativeFeedback.effector.roomAbove",
                      defaultMessage: "Air conditioner",
                    })
                  : e.formatMessage({
                      id: "learningBlock.negativeFeedback.effector.roomBelow",
                      defaultMessage: "Heater",
                    }),
                action: s
                  ? e.formatMessage({
                      id: "learningBlock.negativeFeedback.action.roomAbove",
                      defaultMessage: "Cooling turns on",
                    })
                  : e.formatMessage({
                      id: "learningBlock.negativeFeedback.action.roomBelow",
                      defaultMessage: "Heating turns on",
                    }),
              }
            : {
                variable: e.formatMessage({
                  id: "learningBlock.negativeFeedback.variable.body",
                  defaultMessage: "Body temperature",
                }),
                setPoint: e.formatMessage({
                  id: "learningBlock.negativeFeedback.setPoint.body",
                  defaultMessage: "normal range",
                }),
                sensor: e.formatMessage({
                  id: "learningBlock.negativeFeedback.sensor.body",
                  defaultMessage: "Thermoreceptors",
                }),
                center: e.formatMessage({
                  id: "learningBlock.negativeFeedback.center.body",
                  defaultMessage: "Hypothalamus",
                }),
                effector: s
                  ? e.formatMessage({
                      id: "learningBlock.negativeFeedback.effector.bodyAbove",
                      defaultMessage: "Glands + vessels",
                    })
                  : e.formatMessage({
                      id: "learningBlock.negativeFeedback.effector.bodyBelow",
                      defaultMessage: "Muscles + vessels",
                    }),
                action: s
                  ? e.formatMessage({
                      id: "learningBlock.negativeFeedback.action.bodyAbove",
                      defaultMessage: "Sweating + heat loss",
                    })
                  : e.formatMessage({
                      id: "learningBlock.negativeFeedback.action.bodyBelow",
                      defaultMessage: "Shivering + heat retention",
                    }),
              }
      },
      h = (e, a, t) => {
        let s = "above" === a
        switch (t) {
          case "sensing":
            return s
              ? e.formatMessage({
                  id: "learningBlock.negativeFeedback.stage.aboveSensing",
                  defaultMessage: "Above range sensed",
                })
              : e.formatMessage({
                  id: "learningBlock.negativeFeedback.stage.belowSensing",
                  defaultMessage: "Below range sensed",
                })
          case "response":
            return s
              ? e.formatMessage({
                  id: "learningBlock.negativeFeedback.stage.aboveResponse",
                  defaultMessage: "Lowering response",
                })
              : e.formatMessage({
                  id: "learningBlock.negativeFeedback.stage.belowResponse",
                  defaultMessage: "Raising response",
                })
          case "return":
            return e.formatMessage({
              id: "learningBlock.negativeFeedback.stage.return",
              defaultMessage: "Returning toward normal",
            })
        }
      },
      w = (e, a, t, s) =>
        "sensing" === s
          ? "above" === t
            ? e.formatMessage(
                {
                  id: "learningBlock.negativeFeedback.caption.sensingAbove",
                  defaultMessage: "The sensor detects that {variable} is above its {setPoint}.",
                },
                { variable: a.variable, setPoint: a.setPoint },
              )
            : e.formatMessage(
                {
                  id: "learningBlock.negativeFeedback.caption.sensingBelow",
                  defaultMessage: "The sensor detects that {variable} is below its {setPoint}.",
                },
                { variable: a.variable, setPoint: a.setPoint },
              )
          : "response" === s
            ? "above" === t
              ? e.formatMessage(
                  {
                    id: "learningBlock.negativeFeedback.caption.responseAbove",
                    defaultMessage: "The effector moves {variable} down toward normal.",
                  },
                  { variable: a.variable },
                )
              : e.formatMessage(
                  {
                    id: "learningBlock.negativeFeedback.caption.responseBelow",
                    defaultMessage: "The effector moves {variable} up toward normal.",
                  },
                  { variable: a.variable },
                )
            : e.formatMessage(
                {
                  id: "learningBlock.negativeFeedback.caption.return",
                  defaultMessage: "{variable} nears its {setPoint}; the corrective response eases.",
                },
                { variable: a.variable, setPoint: a.setPoint },
              ),
      y = ({ role: e, label: a, active: t }) =>
        (0, s.jsxs)("div", {
          className:
            "relative z-10 flex h-[72px] min-w-0 flex-col items-center justify-center rounded-xl border px-2 py-1 text-center text-xs",
          style: { backgroundColor: t ? k : M, borderColor: t ? m : x, borderWidth: t ? 2 : 1 },
          children: [
            (0, s.jsx)("span", { className: "text-token-text-primary block w-full font-semibold", children: e }),
            (0, s.jsx)("span", { className: "text-token-text-secondary block w-full break-words", children: a }),
          ],
        }),
      B = ({ above: e, returning: a, responseActive: t }) => {
        let r = a ? (e ? 65 : 31) : t ? (e ? 72 : 24) : e ? 78 : 18,
          o = t ? (a ? 0.74 : 1) : 0.64,
          n = t && !a ? 4 : 3
        return (0, s.jsx)("div", {
          className: "flex h-full w-full items-center justify-center p-2",
          children: (0, s.jsxs)("svg", {
            "aria-hidden": "true",
            className: "block h-full w-full",
            viewBox: "0 0 96 96",
            children: [
              (0, s.jsx)("rect", { x: 13, y: 8, width: 70, height: 8, rx: 4, fill: M, stroke: x, strokeWidth: 1.5 }),
              (0, s.jsx)("rect", { x: 38, y: 9, width: 20, height: 6, rx: 3, fill: u, opacity: 0.8 }),
              (0, s.jsx)("circle", { cx: r, cy: 12, r: 4.5, fill: m, stroke: M, strokeWidth: 1.5 }),
              (0, s.jsx)(d.z, {
                color: f,
                endTangent: { from: { x: 41, y: 22 }, to: { x: 31, y: 26 } },
                opacity: 0.92,
                path: "M 48 17 C 43 19 37 21 31 26",
                strokeWidth: 3,
                variant: "roundedArrowAccent",
              }),
              (0, s.jsx)(g.SY, {
                color: f,
                from: { x: 37, y: 35 },
                opacity: 0.82,
                strokeWidth: 3,
                to: { x: 60, y: 35 },
                variant: "roundedArrowAccent",
              }),
              (0, s.jsx)(g.SY, {
                color: b,
                from: { x: 71, y: 43 },
                opacity: o,
                strokeWidth: n,
                to: { x: 71, y: 58 },
                variant: "roundedArrowAccent",
              }),
              (0, s.jsx)(g.SY, {
                color: b,
                from: { x: 60, y: 67 },
                opacity: o,
                strokeWidth: n,
                to: { x: 37, y: 67 },
                variant: "roundedArrowAccent",
              }),
              (0, s.jsx)(d.z, {
                color: m,
                endTangent: { from: { x: 10, y: 19 }, to: { x: 15, y: 15 } },
                opacity: o,
                path: "M 14 67 C 2 61 2 31 8 21 C 10 18 12 16 15 15",
                strokeWidth: n,
                variant: "roundedArrowAccent",
              }),
              [
                { x: 14, y: 27, active: !t },
                { x: 61, y: 27, active: t && !a },
                { x: 61, y: 59, active: t && !a },
                { x: 14, y: 59, active: t && !a },
              ].map((e) =>
                (0, s.jsx)(
                  "rect",
                  {
                    x: e.x,
                    y: e.y,
                    width: 23,
                    height: 16,
                    rx: 5,
                    fill: e.active ? k : M,
                    stroke: e.active ? m : x,
                    strokeWidth: e.active ? 2 : 1.5,
                  },
                  `${e.x}-${e.y}`,
                ),
              ),
            ],
          }),
        })
      }
    t.d(
      a,
      {},
      {
        NegativeFeedbackCaption: ({ values: e }) => {
          let a = (0, o.A)(),
            t = (0, v.gz)(e),
            r = v.M3[t.stageIndex],
            n = p(a, t.example, t.initial_deviation)
          return (0, s.jsxs)(i.Vq, {
            reserveLines: 3,
            children: [
              (0, s.jsx)(i.OZ, { content: h(a, t.initial_deviation, r), variant: "title" }),
              (0, s.jsx)(i.OZ, { content: w(a, n, t.initial_deviation, r) }),
            ],
          })
        },
        NegativeFeedbackControls: ({ values: e, setValues: a }) => {
          let t = (0, o.A)(),
            d = (0, v.gz)(e),
            g = (0, r.useMemo)(
              () =>
                (0, l.xT)([
                  {
                    value: 0,
                    label: t.formatMessage({
                      id: "learningBlock.negativeFeedback.controls.above",
                      defaultMessage: "Above range",
                    }),
                  },
                  {
                    value: 1,
                    label: t.formatMessage({
                      id: "learningBlock.negativeFeedback.controls.below",
                      defaultMessage: "Below range",
                    }),
                  },
                ]),
              [t],
            ),
            f = v.M3[d.stageIndex],
            b = t.formatMessage({ id: "learningBlock.negativeFeedback.controls.branch", defaultMessage: "Disturbance" })
          return (0, s.jsx)(i.Ur, {
            screenReaderContent: (0, s.jsx)(n.A, {
              id: "learningBlock.negativeFeedback.controls.instructions",
              defaultMessage:
                "Choose an above- or below-range disturbance, then move through the stages to trace sensing, the opposing response, and the return toward normal.",
            }),
            children: (0, s.jsx)(c.J, {
              inputs: [
                {
                  ariaLabel: b,
                  max: v.V9.length - 1,
                  min: 0,
                  onChange: (e) => {
                    let t = v.V9[e]
                    t &&
                      (0, r.startTransition)(() => {
                        a((e) => (0, v.$h)(e, t), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
                      })
                  },
                  options: g,
                  step: 1,
                  value: v.V9.indexOf(d.initial_deviation),
                },
                {
                  ariaLabel: t.formatMessage({
                    id: "learningBlock.negativeFeedback.controls.stage",
                    defaultMessage: "Negative-feedback stage",
                  }),
                  ariaValueText: h(t, d.initial_deviation, f),
                  formatValueForInput: () => "",
                  max: v.Ji.max + 1,
                  min: v.Ji.min + 1,
                  onChange: (e) => {
                    ;(0, r.startTransition)(() => {
                      a((a) => (0, v.ac)(a, e - 1), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
                    })
                  },
                  sliderStyle: "stepped",
                  step: v.Ji.step,
                  value: d.stageIndex + 1,
                },
              ],
            }),
          })
        },
        NegativeFeedbackVisualization: ({ values: e, presentationMode: a = "standard" }) => {
          let t,
            r = (0, o.A)(),
            n = (0, v.gz)(e),
            i = v.M3[n.stageIndex],
            l = p(r, n.example, n.initial_deviation),
            c = "above" === n.initial_deviation,
            k = "return" === i,
            F = "response" === i || k,
            j = "response" === i,
            A = j ? 1 : k ? 0.68 : 0.46,
            N = j ? 3.5 : k ? 2.5 : 2,
            C = k ? (c ? 69 : 31) : j ? (c ? 77 : 23) : c ? 86 : 14,
            T = k
              ? r.formatMessage({
                  id: "learningBlock.negativeFeedback.visual.shrinking",
                  defaultMessage: "deviation shrinks",
                })
              : c
                ? r.formatMessage({ id: "learningBlock.negativeFeedback.visual.above", defaultMessage: "above range" })
                : r.formatMessage({ id: "learningBlock.negativeFeedback.visual.below", defaultMessage: "below range" }),
            _ = k
              ? r.formatMessage({
                  id: "learningBlock.negativeFeedback.visual.eases",
                  defaultMessage: "response eases ↺",
                })
              : F
                ? c
                  ? r.formatMessage({ id: "learningBlock.negativeFeedback.visual.lower", defaultMessage: "lowers ↺" })
                  : r.formatMessage({ id: "learningBlock.negativeFeedback.visual.raise", defaultMessage: "raises ↺" })
                : null,
            P =
              ((t = n.initial_deviation),
              "above" === t
                ? r.formatMessage(
                    {
                      id: "learningBlock.negativeFeedback.visual.ariaAbove",
                      defaultMessage:
                        "Negative feedback diagram for {variable}. The variable begins above its {setPoint}. Sensor: {sensor}. Control center: {center}. Effector: {effector}. Response: {action}, which lowers the variable toward normal. Selected stage: {stage}. {takeaway}",
                    },
                    {
                      variable: l.variable,
                      setPoint: l.setPoint,
                      sensor: l.sensor,
                      center: l.center,
                      effector: l.effector,
                      action: l.action,
                      stage: h(r, t, i),
                      takeaway: w(r, l, t, i),
                    },
                  )
                : r.formatMessage(
                    {
                      id: "learningBlock.negativeFeedback.visual.ariaBelow",
                      defaultMessage:
                        "Negative feedback diagram for {variable}. The variable begins below its {setPoint}. Sensor: {sensor}. Control center: {center}. Effector: {effector}. Response: {action}, which raises the variable toward normal. Selected stage: {stage}. {takeaway}",
                    },
                    {
                      variable: l.variable,
                      setPoint: l.setPoint,
                      sensor: l.sensor,
                      center: l.center,
                      effector: l.effector,
                      action: l.action,
                      stage: h(r, t, i),
                      takeaway: w(r, l, t, i),
                    },
                  ))
          return "thumbnail" === a
            ? (0, s.jsx)("div", {
                "aria-label": P,
                className: "h-full w-full",
                role: "img",
                children: (0, s.jsx)(B, { above: c, responseActive: F, returning: k }),
              })
            : (0, s.jsx)("div", {
                "aria-label": P,
                className: "text-token-text-primary flex h-full min-h-0 w-full items-center justify-center px-6 pb-6",
                role: "img",
                children: (0, s.jsxs)("div", {
                  className: "min-h-0 w-full max-w-[680px]",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "mx-auto w-full max-w-[520px]",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "mb-1 flex items-start justify-between gap-3 text-xs",
                          children: [
                            (0, s.jsx)("span", {
                              className: "text-token-text-primary min-w-0 font-semibold break-words",
                              children: l.variable,
                            }),
                            (0, s.jsx)("span", {
                              className: "text-token-text-secondary min-w-0 text-right break-words",
                              children: l.setPoint,
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "relative mx-auto h-4 w-full max-w-[440px] rounded-full border",
                          style: { backgroundColor: M, borderColor: x },
                          children: [
                            (0, s.jsx)("div", {
                              className: "absolute inset-y-[2px] left-[36%] w-[28%] rounded-full",
                              style: { backgroundColor: u, opacity: 0.72 },
                            }),
                            (0, s.jsx)("div", {
                              className: "absolute top-[-4px] h-6 w-0.5 -translate-x-1/2",
                              style: { backgroundColor: f, left: "50%" },
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2",
                              style: { backgroundColor: m, borderColor: M, left: `${C}%` },
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "mt-1 grid min-h-8 grid-cols-2 items-start gap-x-2 text-xs",
                          children: [
                            (0, s.jsx)("span", {
                              className: "min-w-0 text-left font-semibold break-words",
                              style: { color: c ? "transparent" : m },
                              children: c ? " " : T,
                            }),
                            (0, s.jsx)("span", {
                              className: "min-w-0 text-right font-semibold break-words",
                              style: { color: c ? m : "transparent" },
                              children: c ? T : " ",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "relative mt-2",
                      children: [
                        (0, s.jsxs)("svg", {
                          "aria-hidden": "true",
                          className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                          preserveAspectRatio: "none",
                          viewBox: "0 0 480 168",
                          children: [
                            (0, s.jsx)(d.z, {
                              color: f,
                              endTangent: { from: { x: 180, y: 5 }, to: { x: 156, y: 16 } },
                              opacity: "sensing" === i ? 1 : 0.62,
                              path: "M 240 -46 C 235 -26 201 -5 156 16",
                              strokeWidth: "sensing" === i ? 3.5 : 2.5,
                              variant: "roundedArrowAccent",
                            }),
                            (0, s.jsx)(g.SY, {
                              color: f,
                              from: { x: 224, y: 48 },
                              opacity: F ? (k ? 0.68 : 0.88) : 0.58,
                              strokeWidth: j ? 3 : 2.5,
                              to: { x: 274, y: 48 },
                              variant: "roundedArrowAccent",
                            }),
                            (0, s.jsx)(g.SY, {
                              color: b,
                              from: { x: 377, y: 84 },
                              opacity: A,
                              strokeWidth: N,
                              to: { x: 377, y: 96 },
                              variant: "roundedArrowAccent",
                            }),
                            (0, s.jsx)(g.SY, {
                              color: b,
                              from: { x: 274, y: 132 },
                              opacity: A,
                              strokeWidth: N,
                              to: { x: 224, y: 132 },
                              variant: "roundedArrowAccent",
                            }),
                            (0, s.jsx)(d.z, {
                              color: m,
                              endTangent: { from: { x: 86, y: -50 }, to: { x: 116, y: -50 } },
                              opacity: A,
                              path: "M 22 132 C 3 126 -8 102 -8 82 L -8 -22 C -8 -43 34 -50 116 -50",
                              strokeWidth: N,
                              variant: "roundedArrowAccent",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "grid grid-cols-2 grid-rows-[72px_72px] gap-x-8 gap-y-3 ps-4 pt-3",
                          children: [
                            (0, s.jsx)(y, {
                              active: "sensing" === i,
                              label: l.sensor,
                              role: r.formatMessage({
                                id: "learningBlock.negativeFeedback.role.sensor",
                                defaultMessage: "SENSOR",
                              }),
                            }),
                            (0, s.jsx)(y, {
                              active: j,
                              label: l.center,
                              role: r.formatMessage({
                                id: "learningBlock.negativeFeedback.role.center",
                                defaultMessage: "CONTROL CENTER",
                              }),
                            }),
                            (0, s.jsx)(y, {
                              active: j,
                              label: l.action,
                              role: r.formatMessage({
                                id: "learningBlock.negativeFeedback.role.response",
                                defaultMessage: "RESPONSE",
                              }),
                            }),
                            (0, s.jsx)(y, {
                              active: j,
                              label: l.effector,
                              role: r.formatMessage({
                                id: "learningBlock.negativeFeedback.role.effector",
                                defaultMessage: "EFFECTOR",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "mt-1 min-h-4 text-center text-xs font-semibold",
                      style: { color: F ? m : "var(--text-tertiary)", opacity: k ? 0.78 : 1 },
                      children: _,
                    }),
                    (0, s.jsx)("div", {
                      className: "mt-1 grid grid-cols-3 gap-x-2 text-center text-xs",
                      children: v.M3.map((e) =>
                        (0, s.jsx)(
                          "span",
                          {
                            className: `min-w-0 break-words ${i === e ? "font-semibold" : ""}`,
                            style: { color: i === e ? m : "var(--text-tertiary)" },
                            children: ((e, a) => {
                              switch (a) {
                                case "sensing":
                                  return e.formatMessage({
                                    id: "learningBlock.negativeFeedback.visual.stageSensing",
                                    defaultMessage: "Sense",
                                  })
                                case "response":
                                  return e.formatMessage({
                                    id: "learningBlock.negativeFeedback.visual.stageResponse",
                                    defaultMessage: "Respond",
                                  })
                                case "return":
                                  return e.formatMessage({
                                    id: "learningBlock.negativeFeedback.visual.stageReturn",
                                    defaultMessage: "Return",
                                  })
                              }
                            })(r, e),
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              })
        },
      },
    )
  },
}
//# sourceMappingURL=3323.2451d97920.js.map
