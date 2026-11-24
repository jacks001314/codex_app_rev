export const __rspack_esm_ids = [830629]
export const __webpack_modules__ = {
  wfkd(e, a, s) {
    s.d(a, { OilSpillFateCaption: () => N, OilSpillFateControls: () => j, OilSpillFateVisualization: () => w })
    var i = s("ABep"),
      t = s("Wf1j"),
      l = s("KwmQ"),
      o = s("pXKw"),
      r = s("pNxJ"),
      n = s("pTkA")
    let d = ["hours", "days", "weeks", "months", "years"],
      c = [
        { key: "evaporation", importance: [1, 0.72, 0.18, 0.05, 0.02] },
        { key: "dissolution", importance: [0.16, 0.1, 0.04, 0.02, 0.01] },
        { key: "oxidation", importance: [0.08, 0.24, 0.55, 0.65, 0.42] },
        { key: "biodegradation", importance: [0.05, 0.22, 0.55, 0.72, 0.66] },
        { key: "sedimentation", importance: [0.03, 0.08, 0.18, 0.2, 0.14] },
        { key: "emulsification", importance: [0.14, 0.42, 0.2, 0.06, 0.03] },
        { key: "dispersion", importance: [0.86, 0.9, 0.34, 0.12, 0.04] },
        { key: "spreading", importance: [1, 0.52, 0.15, 0.05, 0.03] },
      ],
      p = [
        { key: "evaporation", importance: [0.34, 0.22, 0.08, 0.03, 0.02] },
        { key: "dissolution", importance: [0.08, 0.06, 0.03, 0.01, 0.01] },
        { key: "oxidation", importance: [0.07, 0.2, 0.52, 0.82, 0.82] },
        { key: "biodegradation", importance: [0.04, 0.16, 0.44, 0.7, 0.78] },
        { key: "sedimentation", importance: [0.05, 0.12, 0.36, 0.66, 0.68] },
        { key: "emulsification", importance: [0.22, 0.95, 0.58, 0.18, 0.06] },
        { key: "dispersion", importance: [0.32, 0.44, 0.36, 0.15, 0.06] },
        { key: "spreading", importance: [0.72, 0.55, 0.28, 0.1, 0.05] },
      ],
      f = [0.88, 0.54, 0.22, 0.1, 0.04],
      m = [0.94, 0.96, 0.84, 0.7, 0.58],
      u = (e) => {
        let a = "heavy oil" === e.oil_type ? "heavy oil" : "light oil",
          s = Number.isFinite(e.elapsedStage) ? Math.min(4, Math.max(0, Math.round(e.elapsedStage))) : 0,
          i = "heavy oil" === a ? p : c,
          t = [...i]
            .sort((e, a) => a.importance[s] - e.importance[s])
            .slice(0, 3)
            .map((e) => e.key)
        return { elapsedStage: s, oilType: a, processes: i, strongest: t, surfaceResidue: "heavy oil" === a ? m : f }
      },
      g = (0, o.xT)([
        { value: 0, label: "Light oil" },
        { value: 1, label: "Heavy oil" },
      ]),
      h = (e, a) => {
        switch (a) {
          case "spreading":
            return e.formatMessage({ id: "oil-spill-fate.process.spreading", defaultMessage: "Spreading" })
          case "evaporation":
            return e.formatMessage({ id: "oil-spill-fate.process.evaporation", defaultMessage: "Evaporation" })
          case "dispersion":
            return e.formatMessage({ id: "oil-spill-fate.process.dispersion", defaultMessage: "Dispersion" })
          case "emulsification":
            return e.formatMessage({ id: "oil-spill-fate.process.emulsification", defaultMessage: "Emulsification" })
          case "dissolution":
            return e.formatMessage({ id: "oil-spill-fate.process.dissolution", defaultMessage: "Dissolution" })
          case "oxidation":
            return e.formatMessage({ id: "oil-spill-fate.process.oxidation", defaultMessage: "Oxidation" })
          case "sedimentation":
            return e.formatMessage({
              id: "oil-spill-fate.process.sedimentation",
              defaultMessage: "Sedimentation / sinking",
            })
          case "biodegradation":
            return e.formatMessage({ id: "oil-spill-fate.process.biodegradation", defaultMessage: "Biodegradation" })
        }
      },
      x = (e, a) => {
        switch (d[a] ?? "hours") {
          case "hours":
            return e.formatMessage({ id: "oil-spill-fate.time.hours", defaultMessage: "Hours" })
          case "days":
            return e.formatMessage({ id: "oil-spill-fate.time.days", defaultMessage: "Days" })
          case "weeks":
            return e.formatMessage({ id: "oil-spill-fate.time.weeks", defaultMessage: "Weeks" })
          case "months":
            return e.formatMessage({ id: "oil-spill-fate.time.months", defaultMessage: "Months" })
          case "years":
            return e.formatMessage({ id: "oil-spill-fate.time.years", defaultMessage: "Years" })
        }
      },
      y = (e, a) => {
        switch (d[a] ?? "hours") {
          case "hours":
            return e.formatMessage({ id: "oil-spill-fate.axis.hours", defaultMessage: "Hr" })
          case "days":
            return e.formatMessage({ id: "oil-spill-fate.axis.days", defaultMessage: "D" })
          case "weeks":
            return e.formatMessage({ id: "oil-spill-fate.axis.weeks", defaultMessage: "Wk" })
          case "months":
            return e.formatMessage({ id: "oil-spill-fate.axis.months", defaultMessage: "Mo" })
          case "years":
            return e.formatMessage({ id: "oil-spill-fate.axis.years", defaultMessage: "Yr" })
        }
      },
      M = (e) => {
        switch (e) {
          case "evaporation":
          case "spreading":
            return "var(--learning-block-color-primary)"
          case "dissolution":
          case "emulsification":
            return "var(--learning-block-color-secondary)"
          case "oxidation":
          case "dispersion":
            return "var(--learning-block-color-companion)"
          case "biodegradation":
            return "var(--learning-block-color-third)"
          case "sedimentation":
            return "var(--learning-block-color-fourth)"
        }
      },
      k = (e, a) => {
        let s = [0, 125, 250, 375, 500],
          i = e.map((e) => 1.25 + 9.25 * e)
        return `M0 ${a - i[0]} ${s
          .slice(1)
          .map((e, t) => {
            let l = s[t],
              o = a + -1 * i[t],
              r = a + -1 * i[t + 1],
              n = (e - l) / 2
            return `C${l + n} ${o} ${e - n} ${r} ${e} ${r}`
          })
          .join(" ")} L500 ${a + i[4]} ${s
          .slice(0, -1)
          .reverse()
          .map((e, t) => {
            let l = s.length - 2 - t,
              o = s[l + 1],
              r = a + i[l + 1],
              n = a + i[l],
              d = (o - e) / 2
            return `C${o - d} ${r} ${e + d} ${n} ${e} ${n}`
          })
          .join(" ")} Z`
      },
      v = [22, 22, 22, 22, 24, 32, 32, 22],
      b = v.reduce((e, a) => e + a, 0),
      w = ({ values: e, presentationMode: a }) => {
        let s = (0, t.A)(),
          { elapsedStage: l, oilType: o, processes: r, strongest: c, surfaceResidue: p } = u(e),
          f = x(s, l),
          m =
            "light oil" === o
              ? s.formatMessage({ id: "oil-spill-fate.oil.light", defaultMessage: "Light oil" })
              : s.formatMessage({ id: "oil-spill-fate.oil.heavy", defaultMessage: "Heavy oil" }),
          g = s.formatMessage(
            {
              id: "oil-spill-fate.visual.aria",
              defaultMessage:
                "{oilType}, {time} after the spill. The most prominent weathering processes are {processes}. The surface-residue cue is {residue}. Band widths show qualitative relative importance from hours to years, not mass fractions.",
            },
            {
              oilType: m,
              time: f,
              processes: s.formatList(
                c.map((e) => h(s, e)),
                { type: "conjunction" },
              ),
              residue:
                p[l] >= 0.5
                  ? s.formatMessage({ id: "oil-spill-fate.residue.prominent", defaultMessage: "prominent" })
                  : s.formatMessage({ id: "oil-spill-fate.residue.limited", defaultMessage: "limited" }),
            },
          )
        if ("thumbnail" === a) {
          let e = r.filter((e) => c.includes(e.key)),
            a = 24 * e.length + 18
          return (0, i.jsxs)("div", {
            role: "img",
            "aria-label": g,
            className: "text-token-text-primary flex h-full w-full flex-col justify-center gap-1 px-2",
            children: [
              (0, i.jsx)("div", {
                className: "text-token-text-primary truncate text-center text-xs font-semibold",
                children: s.formatMessage(
                  { id: "oil-spill-fate.thumbnail.title", defaultMessage: "Oil \xb7 {time}" },
                  { time: y(s, l) },
                ),
              }),
              (0, i.jsxs)("svg", {
                "aria-hidden": "true",
                className: "block w-full",
                style: { height: 54 },
                viewBox: `0 0 500 ${a}`,
                preserveAspectRatio: "none",
                children: [
                  (0, i.jsx)(n.SY, {
                    from: { x: 125 * l, y: 0 },
                    to: { x: 125 * l, y: a },
                    variant: "guideDashed",
                    color: "var(--learning-block-accent)",
                    opacity: 0.75,
                    strokeWidth: 2,
                    vectorEffect: "non-scaling-stroke",
                  }),
                  e.map((e, a) =>
                    (0, i.jsx)("path", { d: k(e.importance, 12 + 24 * a), fill: M(e.key), fillOpacity: 0.85 }, e.key),
                  ),
                  (0, i.jsx)("path", {
                    d: k(p, 24 * e.length + 9),
                    fill: "var(--learning-block-color-fourth)",
                    fillOpacity: 0.75,
                  }),
                ],
              }),
            ],
          })
        }
        return (0, i.jsx)("div", {
          role: "img",
          "aria-label": g,
          "data-learning-block-wide-width": "44rem",
          "data-oil-spill-fate-visualization": !0,
          className: "text-token-text-primary flex h-full min-h-0 w-full items-center justify-center px-6 pb-6",
          children: (0, i.jsxs)("div", {
            className: "mx-auto min-h-0 w-full max-w-[720px]",
            children: [
              (0, i.jsx)("div", {
                className: "text-token-text-secondary mb-2 text-xs font-semibold",
                children: s.formatMessage({
                  id: "oil-spill-fate.visual.subtitle",
                  defaultMessage: "Band width = relative importance",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex min-w-0 gap-2",
                children: [
                  (0, i.jsxs)("div", {
                    className: "shrink-0",
                    style: { width: "clamp(154px, 52%, 172px)", paddingTop: 20 },
                    children: [
                      r.map((e, a) => {
                        let t,
                          l = c.includes(e.key),
                          o =
                            "dispersion" === e.key
                              ? s.formatMessage({
                                  id: "oil-spill-fate.process.dispersion-hint",
                                  defaultMessage: "oil \u2192 water",
                                })
                              : "emulsification" === e.key
                                ? s.formatMessage({
                                    id: "oil-spill-fate.process.emulsification-hint",
                                    defaultMessage: "water \u2192 oil",
                                  })
                                : null
                        return (0, i.jsxs)(
                          "div",
                          {
                            className: "flex min-w-0 flex-col justify-center",
                            style: { height: v[a] },
                            children: [
                              (0, i.jsxs)("span", {
                                className: l
                                  ? "text-token-text-primary text-xs font-semibold break-words"
                                  : "text-token-text-secondary text-xs break-words",
                                title: h(s, e.key),
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "oil-spill-fate-process-full",
                                    children: h(s, e.key),
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "oil-spill-fate-process-compact",
                                    children:
                                      "sedimentation" === (t = e.key)
                                        ? s.formatMessage({
                                            id: "oil-spill-fate.process.sedimentation-compact",
                                            defaultMessage: "Sedimentation",
                                          })
                                        : h(s, t),
                                  }),
                                ],
                              }),
                              o
                                ? (0, i.jsx)("span", { className: "text-token-text-tertiary text-xs", children: o })
                                : null,
                            ],
                          },
                          e.key,
                        )
                      }),
                      (0, i.jsx)("div", {
                        className: "text-token-text-secondary flex min-w-0 items-end text-xs font-semibold",
                        style: { height: 22 },
                        children: s.formatMessage({
                          id: "oil-spill-fate.visual.residue",
                          defaultMessage: "Oil residue",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "relative min-w-0 flex-1",
                    children: [
                      (0, i.jsx)("div", {
                        className: "relative",
                        style: { height: 20 },
                        children: d.map((e, a) =>
                          (0, i.jsxs)(
                            "span",
                            {
                              className:
                                a === l
                                  ? "text-token-text-primary absolute text-xs font-semibold"
                                  : "text-token-text-tertiary absolute text-xs",
                              style: {
                                left: `${25 * a}%`,
                                transform:
                                  0 === a
                                    ? "translateX(0)"
                                    : a === d.length - 1
                                      ? "translateX(-100%)"
                                      : "translateX(-50%)",
                              },
                              children: [
                                (0, i.jsx)("span", { className: "oil-spill-fate-axis-full", children: x(s, a) }),
                                (0, i.jsx)("span", { className: "oil-spill-fate-axis-compact", children: y(s, a) }),
                              ],
                            },
                            a,
                          ),
                        ),
                      }),
                      (0, i.jsxs)("svg", {
                        "aria-hidden": "true",
                        className: "block w-full",
                        style: { height: b + 22 },
                        viewBox: `0 0 500 ${b + 22}`,
                        preserveAspectRatio: "none",
                        children: [
                          [0, 125, 250, 375, 500].map((e, a) =>
                            (0, i.jsx)(
                              n.SY,
                              {
                                from: { x: e, y: 0 },
                                to: { x: e, y: b + 22 },
                                variant: "guideDashed",
                                color: a === l ? "var(--learning-block-accent)" : "var(--text-tertiary)",
                                opacity: a === l ? 0.8 : 0.18,
                                strokeWidth: a === l ? 1.5 : 1,
                                vectorEffect: "non-scaling-stroke",
                              },
                              e,
                            ),
                          ),
                          r.map((e, a) => {
                            let s = c.includes(e.key)
                            return (0, i.jsx)(
                              "path",
                              {
                                d: k(e.importance, v.slice(0, a).reduce((e, a) => e + a, 0) + v[a] / 2),
                                fill: M(e.key),
                                fillOpacity: s ? 0.84 : 0.6,
                                stroke: M(e.key),
                                strokeOpacity: s ? 0.92 : 0.68,
                                strokeWidth: s ? 1.1 : 0.7,
                                vectorEffect: "non-scaling-stroke",
                              },
                              e.key,
                            )
                          }),
                          (0, i.jsx)("path", {
                            d: k(p, b + 12),
                            fill: "var(--learning-block-color-fourth)",
                            fillOpacity: 0.68,
                            stroke: "var(--learning-block-color-fourth)",
                            strokeOpacity: 0.82,
                            strokeWidth: 0.9,
                            vectorEffect: "non-scaling-stroke",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      },
      j = ({ values: e, setValues: a }) => {
        let s = (0, t.A)(),
          { elapsedStage: o, oilType: n } = u(e),
          d = g.map((e) => ({
            ...e,
            label:
              0 === e.value
                ? s.formatMessage({ id: "oil-spill-fate.oil.light", defaultMessage: "Light oil" })
                : s.formatMessage({ id: "oil-spill-fate.oil.heavy", defaultMessage: "Heavy oil" }),
          }))
        return (0, i.jsx)(l.Ur, {
          screenReaderContent: s.formatMessage({
            id: "oil-spill-fate.controls.help",
            defaultMessage: "Select elapsed time and oil type to compare overlapping weathering processes.",
          }),
          children: (0, i.jsx)(r.J, {
            inputs: [
              {
                min: 0,
                max: 4,
                step: 1,
                value: o,
                sliderStyle: "stepped",
                showValueInput: !1,
                ariaLabel: s.formatMessage({
                  id: "oil-spill-fate.controls.time",
                  defaultMessage: "Elapsed time after spill",
                }),
                ariaValueText: x(s, o),
                onChange: (e) => a((a) => ({ ...a, elapsedStage: e }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
              },
              {
                min: 0,
                max: 1,
                step: 1,
                value: +("heavy oil" === n),
                variable: s.formatMessage({ id: "oil-spill-fate.controls.oil", defaultMessage: "Oil type" }),
                options: d,
                ariaLabel: s.formatMessage({ id: "oil-spill-fate.controls.oil", defaultMessage: "Oil type" }),
                onChange: (e) =>
                  a(
                    (a) => ({ ...a, oil_type: 1 === e ? "heavy oil" : "light oil" }),
                    "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                  ),
              },
            ],
          }),
        })
      },
      N = ({ values: e }) => {
        let a = (0, t.A)(),
          { elapsedStage: s, oilType: o } = u(e),
          r = a.formatMessage(
            { id: "oil-spill-fate.caption.title", defaultMessage: "{time} after the spill" },
            { time: x(a, s) },
          ),
          n =
            "light oil" === o
              ? [
                  a.formatMessage({
                    id: "oil-spill-fate.caption.light.hours",
                    defaultMessage: "Spreading, evaporation, and oil-in-water dispersion dominate early.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.light.days",
                    defaultMessage: "Evaporation and dispersion remain prominent; slower processes begin.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.light.weeks",
                    defaultMessage: "Early processes taper as oxidation and biodegradation grow.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.light.months",
                    defaultMessage: "Oxidation and biodegradation dominate; little surface residue remains.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.light.years",
                    defaultMessage: "Oxidation and biodegradation still act on limited residue.",
                  }),
                ][s]
              : [
                  a.formatMessage({
                    id: "oil-spill-fate.caption.heavy.hours",
                    defaultMessage: "Spreading leads; evaporation and dispersion stay limited.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.heavy.days",
                    defaultMessage: "Water-in-oil emulsification peaks; surface residue can persist.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.heavy.weeks",
                    defaultMessage: "Emulsification tapers while residue and slower processes persist.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.heavy.months",
                    defaultMessage: "Oxidation, biodegradation, and sediment association dominate.",
                  }),
                  a.formatMessage({
                    id: "oil-spill-fate.caption.heavy.years",
                    defaultMessage: "Surface residue and possible sediment-associated sinking persist.",
                  }),
                ][s]
        return (0, i.jsxs)(l.Vq, {
          reserveLines: 3,
          children: [(0, i.jsx)(l.OZ, { variant: "title", children: r }), (0, i.jsx)(l.OZ, { children: n })],
        })
      }
  },
}
//# sourceMappingURL=830629.5317b8ce88.js.map
