export const __rspack_esm_ids = [808707]
export const __webpack_modules__ = {
  s22U(e, r, s) {
    s.d(r, { BloodPressureCaption: () => P, BloodPressureControls: () => B, BloodPressureVisualization: () => y })
    var a = s("ABep"),
      o = s("zd8w"),
      t = s("Qgfj"),
      i = s("oyxz"),
      l = s("Wf1j"),
      n = s("KwmQ"),
      c = s("pXKw"),
      d = s("pNxJ"),
      u = s("pTkA"),
      g = s("rwdx")
    let f = "var(--learning-block-color-primary)",
      h = "var(--learning-block-color-secondary)",
      m = "var(--learning-block-color-companion)",
      x = (0, t.YK)({
        stretchHigh: { id: "learningBlock.bloodPressure.visual.stretchHigh", defaultMessage: "stretch ↑ • firing ↑" },
        stretchLow: { id: "learningBlock.bloodPressure.visual.stretchLow", defaultMessage: "stretch ↓ • firing ↓" },
        stretchNormal: {
          id: "learningBlock.bloodPressure.visual.stretchNormal",
          defaultMessage: "stretch ↔ • tonic firing",
        },
        autonomicHigh: {
          id: "learningBlock.bloodPressure.visual.autonomicHigh",
          defaultMessage: "parasympathetic ↑ • sympathetic ↓",
        },
        autonomicLow: {
          id: "learningBlock.bloodPressure.visual.autonomicLow",
          defaultMessage: "parasympathetic ↓ • sympathetic ↑",
        },
        autonomicNormal: {
          id: "learningBlock.bloodPressure.visual.autonomicNormal",
          defaultMessage: "balanced autonomic output",
        },
        heartHigh: { id: "learningBlock.bloodPressure.visual.heartHigh", defaultMessage: "HR + force ↓" },
        heartLow: { id: "learningBlock.bloodPressure.visual.heartLow", defaultMessage: "HR + force ↑" },
        heartNormal: { id: "learningBlock.bloodPressure.visual.heartNormal", defaultMessage: "HR + force ↔" },
        coHigh: { id: "learningBlock.bloodPressure.visual.coHigh", defaultMessage: "CO ↓" },
        coLow: { id: "learningBlock.bloodPressure.visual.coLow", defaultMessage: "CO ↑" },
        coNormal: { id: "learningBlock.bloodPressure.visual.coNormal", defaultMessage: "CO ↔" },
        arterioleHigh: { id: "learningBlock.bloodPressure.visual.arterioleHigh", defaultMessage: "tone ↓" },
        arterioleLow: { id: "learningBlock.bloodPressure.visual.arterioleLow", defaultMessage: "tone ↑" },
        arterioleNormal: { id: "learningBlock.bloodPressure.visual.arterioleNormal", defaultMessage: "tone ↔" },
        tprHigh: { id: "learningBlock.bloodPressure.visual.tprHigh", defaultMessage: "TPR ↓" },
        tprLow: { id: "learningBlock.bloodPressure.visual.tprLow", defaultMessage: "TPR ↑" },
        tprNormal: { id: "learningBlock.bloodPressure.visual.tprNormal", defaultMessage: "TPR ↔" },
        maintainNormal: { id: "learningBlock.bloodPressure.visual.maintainNormal", defaultMessage: "Stays normal" },
        towardNormal: { id: "learningBlock.bloodPressure.visual.towardNormal", defaultMessage: "Normal range" },
      }),
      p = (e, r, s) => {
        if ("high" === r)
          switch (s) {
            case "disturbance":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.highDisturbance",
                defaultMessage: "Start: pressure rises",
              })
            case "sensing":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.highSensing",
                defaultMessage: "Sense: firing increases",
              })
            case "integration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.highIntegration",
                defaultMessage: "Integrate: autonomic signals shift",
              })
            case "effector response":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.highEffectors",
                defaultMessage: "Respond: heart slows, arterioles dilate",
              })
            case "restoration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.highRestoration",
                defaultMessage: "Restore: pressure falls",
              })
          }
        if ("low" === r)
          switch (s) {
            case "disturbance":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.lowDisturbance",
                defaultMessage: "Start: pressure falls",
              })
            case "sensing":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.lowSensing",
                defaultMessage: "Sense: firing decreases",
              })
            case "integration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.lowIntegration",
                defaultMessage: "Integrate: autonomic signals shift",
              })
            case "effector response":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.lowEffectors",
                defaultMessage: "Respond: heart speeds, arterioles constrict",
              })
            case "restoration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.stage.lowRestoration",
                defaultMessage: "Restore: pressure rises",
              })
          }
        switch (s) {
          case "disturbance":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.stage.normalDisturbance",
              defaultMessage: "Start: pressure is normal",
            })
          case "sensing":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.stage.normalSensing",
              defaultMessage: "Sense: baroreceptors fire tonically",
            })
          case "integration":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.stage.normalIntegration",
              defaultMessage: "Integrate: autonomic output is balanced",
            })
          case "effector response":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.stage.normalEffectors",
              defaultMessage: "Respond: heart and arterioles stay steady",
            })
          case "restoration":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.stage.normalRestoration",
              defaultMessage: "Maintain: pressure stays normal",
            })
        }
      },
      b = (e, r, s) => {
        if ("high" === r)
          switch (s) {
            case "disturbance":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.highDisturbance",
                defaultMessage: "An acute pressure rise stretches arterial walls.",
              })
            case "sensing":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.highSensing",
                defaultMessage: "Greater carotid-sinus and aortic-arch stretch increases firing.",
              })
            case "integration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.highIntegration",
                defaultMessage:
                  "Parasympathetic outflow to the heart rises; sympathetic outflow to the heart and arterioles falls.",
              })
            case "effector response":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.highEffectors",
                defaultMessage: "Heart rate, contractility, and arteriolar tone fall, lowering output and resistance.",
              })
            case "restoration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.highRestoration",
                defaultMessage: "Lower output and resistance oppose the pressure rise.",
              })
          }
        if ("low" === r)
          switch (s) {
            case "disturbance":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.lowDisturbance",
                defaultMessage: "An acute pressure fall reduces arterial stretch.",
              })
            case "sensing":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.lowSensing",
                defaultMessage: "Less carotid-sinus and aortic-arch stretch decreases firing.",
              })
            case "integration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.lowIntegration",
                defaultMessage:
                  "Parasympathetic outflow to the heart falls; sympathetic outflow to the heart and arterioles rises.",
              })
            case "effector response":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.lowEffectors",
                defaultMessage:
                  "Heart rate, contractility, and arteriolar tone rise, increasing output and resistance.",
              })
            case "restoration":
              return e.formatMessage({
                id: "learningBlock.bloodPressure.caption.lowRestoration",
                defaultMessage: "Higher output and resistance oppose the pressure fall.",
              })
          }
        switch (s) {
          case "disturbance":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.caption.normalDisturbance",
              defaultMessage: "Arterial pressure begins in its normal range.",
            })
          case "sensing":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.caption.normalSensing",
              defaultMessage: "Carotid-sinus and aortic-arch baroreceptors fire tonically.",
            })
          case "integration":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.caption.normalIntegration",
              defaultMessage: "The medulla keeps autonomic outflow to heart and arterioles balanced.",
            })
          case "effector response":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.caption.normalEffectors",
              defaultMessage: "Heart rate, contractility, and arteriolar tone stay steady.",
            })
          case "restoration":
            return e.formatMessage({
              id: "learningBlock.bloodPressure.caption.normalRestoration",
              defaultMessage: "Balanced output and resistance keep pressure normal.",
            })
        }
      },
      M = ({ active: e, color: r, split: s = !1 }) =>
        (0, a.jsx)("svg", {
          "aria-hidden": "true",
          className: "h-2 w-full shrink-0",
          viewBox: "0 0 120 10",
          children: s
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(u.SY, {
                    color: r,
                    from: { x: 60, y: 0 },
                    opacity: e ? 1 : 0.78,
                    strokeWidth: e ? 2.5 : 1.5,
                    to: { x: 32, y: 9 },
                    variant: "roundedArrowAccent",
                  }),
                  (0, a.jsx)(u.SY, {
                    color: r,
                    from: { x: 60, y: 0 },
                    opacity: e ? 1 : 0.78,
                    strokeWidth: e ? 2.5 : 1.5,
                    to: { x: 88, y: 9 },
                    variant: "roundedArrowAccent",
                  }),
                ],
              })
            : (0, a.jsx)(u.SY, {
                color: r,
                from: { x: 60, y: 0 },
                opacity: e ? 1 : 0.78,
                strokeWidth: e ? 2.5 : 1.5,
                to: { x: 60, y: 9 },
                variant: "roundedArrowAccent",
              }),
        }),
      v = ({ active: e, color: r, shape: s = "straight" }) => {
        let o = e ? 1 : 0.78,
          t = e ? 2.5 : 1.5
        return (0, a.jsx)("svg", {
          "aria-hidden": "true",
          className: "h-12 w-full",
          viewBox: "0 0 24 48",
          children:
            "split" === s
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(u.SY, {
                      color: r,
                      from: { x: 2, y: 24 },
                      opacity: o,
                      strokeWidth: t,
                      to: { x: 21, y: 11 },
                      variant: "roundedArrowAccent",
                    }),
                    (0, a.jsx)(u.SY, {
                      color: r,
                      from: { x: 2, y: 24 },
                      opacity: o,
                      strokeWidth: t,
                      to: { x: 21, y: 37 },
                      variant: "roundedArrowAccent",
                    }),
                  ],
                })
              : "merge" === s
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(u.SY, {
                        color: r,
                        from: { x: 2, y: 11 },
                        opacity: o,
                        strokeWidth: t,
                        to: { x: 14, y: 24 },
                        variant: "solidAccent",
                      }),
                      (0, a.jsx)(u.SY, {
                        color: r,
                        from: { x: 2, y: 37 },
                        opacity: o,
                        strokeWidth: t,
                        to: { x: 14, y: 24 },
                        variant: "solidAccent",
                      }),
                      (0, a.jsx)(u.SY, {
                        color: r,
                        from: { x: 14, y: 24 },
                        opacity: o,
                        strokeWidth: t,
                        to: { x: 21, y: 24 },
                        variant: "roundedArrowAccent",
                      }),
                    ],
                  })
                : (0, a.jsx)(u.SY, {
                    color: r,
                    from: { x: 2, y: 24 },
                    opacity: o,
                    strokeWidth: t,
                    to: { x: 21, y: 24 },
                    variant: "roundedArrowAccent",
                  }),
        })
      },
      k = ({ active: e, children: r, className: s = "" }) =>
        (0, a.jsx)("div", {
          className: `flex min-w-0 flex-col items-center justify-center rounded-lg border px-2 py-0.5 text-center text-xs leading-4 [overflow-wrap:anywhere] break-words ${s}`,
          style: {
            background: e
              ? "var(--learning-block-accent-surface)"
              : "var(--learning-block-visualization-surface, var(--bg-primary))",
            borderColor: e ? "var(--learning-block-accent)" : "var(--border-light)",
            color: "var(--text-primary)",
          },
          children: r,
        }),
      j = ({ color: e, children: r }) => (0, a.jsx)("span", { style: { color: e }, children: r }),
      w = ({ condition: e, layout: r, selected: s, stageIndex: o }) => {
        let t = "high" === e,
          l = "low" === e,
          n = t ? f : l ? h : m,
          c = (0, a.jsx)(k, {
            active: s && 0 === o,
            className: "min-h-7",
            children: (0, a.jsxs)("span", {
              className: "font-semibold",
              style: { color: n },
              children: [
                t ? "↑" : l ? "↓" : "↔",
                " ",
                (0, a.jsx)(i.A, {
                  id: "learningBlock.bloodPressure.visual.arterialPressure",
                  defaultMessage: "Pressure",
                }),
              ],
            }),
          }),
          d = (0, a.jsxs)(k, {
            active: s && 1 === o,
            className: "min-h-9",
            children: [
              (0, a.jsx)("span", {
                className: s && 1 === o ? "font-semibold" : "",
                children: (0, a.jsx)(i.A, {
                  id: "learningBlock.bloodPressure.visual.sensors",
                  defaultMessage: "Carotid + aortic",
                }),
              }),
              (0, a.jsx)(j, {
                color: n,
                children: (0, a.jsx)(i.A, { ...x[t ? "stretchHigh" : l ? "stretchLow" : "stretchNormal"] }),
              }),
            ],
          }),
          u = (0, a.jsxs)(k, {
            active: s && 2 === o,
            className: "min-h-9",
            children: [
              (0, a.jsx)("span", {
                className: s && 2 === o ? "font-semibold" : "",
                children: (0, a.jsx)(i.A, {
                  id: "learningBlock.bloodPressure.visual.medulla",
                  defaultMessage: "Medulla",
                }),
              }),
              (0, a.jsx)(j, {
                color: m,
                children: (0, a.jsx)(i.A, { ...x[t ? "autonomicHigh" : l ? "autonomicLow" : "autonomicNormal"] }),
              }),
            ],
          }),
          g = (0, a.jsxs)(k, {
            active: s && 3 === o,
            className: "min-h-14",
            children: [
              (0, a.jsx)("span", {
                className: s && 3 === o ? "font-semibold" : "",
                children: (0, a.jsx)(i.A, { id: "learningBlock.bloodPressure.visual.heart", defaultMessage: "Heart" }),
              }),
              (0, a.jsx)(j, {
                color: n,
                children: (0, a.jsx)(i.A, { ...x[t ? "heartHigh" : l ? "heartLow" : "heartNormal"] }),
              }),
              (0, a.jsx)("span", {
                style: { color: "var(--text-secondary)" },
                children: (0, a.jsx)(i.A, { ...x[t ? "coHigh" : l ? "coLow" : "coNormal"] }),
              }),
            ],
          }),
          p = (0, a.jsxs)(k, {
            active: s && 3 === o,
            className: "min-h-14",
            children: [
              (0, a.jsx)("span", {
                className: s && 3 === o ? "font-semibold" : "",
                children: (0, a.jsx)(i.A, {
                  id: "learningBlock.bloodPressure.visual.arterioles",
                  defaultMessage: "Arterioles",
                }),
              }),
              (0, a.jsx)(j, {
                color: n,
                children: (0, a.jsx)(i.A, { ...x[t ? "arterioleHigh" : l ? "arterioleLow" : "arterioleNormal"] }),
              }),
              (0, a.jsx)("span", {
                style: { color: "var(--text-secondary)" },
                children: (0, a.jsx)(i.A, { ...x[t ? "tprHigh" : l ? "tprLow" : "tprNormal"] }),
              }),
            ],
          }),
          b = (0, a.jsx)(k, {
            active: s && 4 === o,
            className: "min-h-7",
            children: (0, a.jsxs)("span", {
              className: "font-semibold",
              style: { color: n },
              children: [
                t ? "↓" : l ? "↑" : "↔",
                " ",
                (0, a.jsx)(i.A, { ...x["normal" === e ? "maintainNormal" : "towardNormal"] }),
              ],
            }),
          })
        return "desktop" === r
          ? (0, a.jsxs)("div", {
              className: "desktopLane-xjevG5 grid min-w-0 items-center",
              style: { opacity: s ? 1 : 0.9 },
              children: [
                c,
                (0, a.jsx)(v, { active: s && 1 === o, color: n }),
                d,
                (0, a.jsx)(v, { active: s && 2 === o, color: n }),
                u,
                (0, a.jsx)(v, { active: s && 3 === o, color: n, shape: "split" }),
                (0, a.jsxs)("div", { className: "grid min-w-0 gap-1", children: [g, p] }),
                (0, a.jsx)(v, { active: s && 4 === o, color: n, shape: "merge" }),
                b,
              ],
            })
          : (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col",
              children: [
                c,
                (0, a.jsx)(M, { active: s && 1 === o, color: n }),
                d,
                (0, a.jsx)(M, { active: s && 2 === o, color: n }),
                u,
                (0, a.jsx)(M, { active: s && 3 === o, color: n, split: !0 }),
                (0, a.jsxs)("div", { className: "grid min-w-0 grid-cols-2 gap-1", children: [g, p] }),
                (0, a.jsx)(M, { active: s && 4 === o, color: n }),
                b,
              ],
            })
      },
      y = ({ values: e, presentationMode: r }) => {
        let s = (0, l.A)(),
          o = (0, g.VR)(e),
          t = g.jX[o.stageIndex],
          n = "normal" === o.initial_pressure_condition,
          c = s.formatMessage(
            {
              id: "learningBlock.bloodPressure.visual.aria",
              defaultMessage:
                "Arterial baroreflex flowchart. Selected condition: {condition}. Selected stage: {stage}. {sentence}",
            },
            {
              condition: ((e, r) => {
                switch (r) {
                  case "low":
                    return e.formatMessage({
                      id: "learningBlock.bloodPressure.condition.low",
                      defaultMessage: "Low pressure",
                    })
                  case "normal":
                    return e.formatMessage({
                      id: "learningBlock.bloodPressure.condition.normal",
                      defaultMessage: "Normal pressure",
                    })
                  case "high":
                    return e.formatMessage({
                      id: "learningBlock.bloodPressure.condition.high",
                      defaultMessage: "High pressure",
                    })
                }
              })(s, o.initial_pressure_condition),
              stage: p(s, o.initial_pressure_condition, t),
              sentence: b(s, o.initial_pressure_condition, t),
            },
          )
        if ("thumbnail" === r) {
          let e = "high" === o.initial_pressure_condition ? f : "low" === o.initial_pressure_condition ? h : m,
            r = n ? "↔" : "high" === o.initial_pressure_condition ? "↑" : "↓",
            s = n ? "↔" : "high" === o.initial_pressure_condition ? "↓" : "↑"
          return (0, a.jsx)("div", {
            "aria-label": c,
            className: "text-token-text-primary flex h-full w-full items-center justify-center p-1",
            role: "img",
            children: (0, a.jsxs)("div", {
              className: "relative flex size-16 items-center justify-center",
              children: [
                (0, a.jsxs)("span", {
                  className: "sr-only",
                  children: [
                    r,
                    " ",
                    (0, a.jsx)(i.A, {
                      id: "learningBlock.bloodPressure.visual.thumbnailPressure",
                      defaultMessage: "Pressure",
                    }),
                  ],
                }),
                (0, a.jsxs)("svg", {
                  "aria-hidden": "true",
                  className: "size-16",
                  viewBox: "0 0 64 64",
                  children: [
                    (0, a.jsx)("rect", {
                      fill: "var(--learning-block-visualization-surface, var(--bg-primary))",
                      height: 14,
                      rx: 7,
                      stroke: e,
                      strokeWidth: 1.5,
                      width: 32,
                      x: 16,
                      y: 1,
                    }),
                    "↔" === r
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(u.SY, {
                              color: e,
                              from: { x: 32, y: 8 },
                              to: { x: 23, y: 8 },
                              variant: "roundedArrowAccent",
                            }),
                            (0, a.jsx)(u.SY, {
                              color: e,
                              from: { x: 32, y: 8 },
                              to: { x: 41, y: 8 },
                              variant: "roundedArrowAccent",
                            }),
                          ],
                        })
                      : (0, a.jsx)(u.SY, {
                          color: e,
                          from: { x: 32, y: "↑" === r ? 12 : 4 },
                          to: { x: 32, y: "↑" === r ? 4 : 12 },
                          variant: "roundedArrowAccent",
                        }),
                    (0, a.jsx)(u.SY, {
                      color: m,
                      from: { x: 32, y: 17 },
                      to: { x: 19, y: 27 },
                      variant: "roundedArrowAccent",
                    }),
                    (0, a.jsx)(u.SY, {
                      color: m,
                      from: { x: 32, y: 17 },
                      to: { x: 45, y: 27 },
                      variant: "roundedArrowAccent",
                    }),
                    (0, a.jsx)("path", {
                      d: "M 19 39 C 13 35 12 31 15 29 C 17 27 19 29 19 30 C 20 29 22 27 24 29 C 27 31 25 35 19 39 Z",
                      fill: e,
                    }),
                    (0, a.jsx)(u.SY, {
                      color: e,
                      from: { x: 39, y: 29 },
                      strokeWidth: 2.5,
                      to: { x: 43, y: 39 },
                      variant: "solidAccent",
                    }),
                    (0, a.jsx)(u.SY, {
                      color: e,
                      from: { x: 51, y: 29 },
                      strokeWidth: 2.5,
                      to: { x: 47, y: 39 },
                      variant: "solidAccent",
                    }),
                    (0, a.jsx)(u.SY, {
                      color: e,
                      from: { x: 20, y: 41 },
                      to: { x: 29, y: 47 },
                      variant: "solidAccent",
                    }),
                    (0, a.jsx)(u.SY, {
                      color: e,
                      from: { x: 44, y: 41 },
                      to: { x: 35, y: 47 },
                      variant: "solidAccent",
                    }),
                    (0, a.jsx)(u.SY, {
                      color: e,
                      from: { x: 32, y: 46 },
                      to: { x: 32, y: 53 },
                      variant: "roundedArrowAccent",
                    }),
                    (0, a.jsx)("rect", {
                      fill: "var(--learning-block-visualization-surface, var(--bg-primary))",
                      height: 10,
                      rx: 5,
                      stroke: e,
                      strokeWidth: 1.5,
                      width: 32,
                      x: 16,
                      y: 53,
                    }),
                  ],
                }),
                (0, a.jsxs)("span", {
                  className: "sr-only",
                  children: [
                    s,
                    " ",
                    (0, a.jsx)(i.A, {
                      id: "learningBlock.bloodPressure.visual.thumbnailPressure",
                      defaultMessage: "Pressure",
                    }),
                  ],
                }),
              ],
            }),
          })
        }
        return (0, a.jsxs)("div", {
          "aria-label": c,
          "data-learning-block-wide-width": "full",
          className:
            "text-token-text-primary mx-auto flex h-full min-h-0 w-full min-w-0 flex-col justify-center px-6 pb-6",
          role: "img",
          children: [
            (0, a.jsx)("div", {
              className: "hidden min-w-0 flex-col gap-4 sm:flex",
              children: n
                ? (0, a.jsx)(w, { condition: "normal", layout: "desktop", selected: !0, stageIndex: o.stageIndex })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(w, {
                        condition: "high",
                        layout: "desktop",
                        selected: "high" === o.initial_pressure_condition,
                        stageIndex: o.stageIndex,
                      }),
                      (0, a.jsx)(w, {
                        condition: "low",
                        layout: "desktop",
                        selected: "low" === o.initial_pressure_condition,
                        stageIndex: o.stageIndex,
                      }),
                    ],
                  }),
            }),
            (0, a.jsx)("div", {
              className: "flex min-w-0 sm:hidden",
              children: (0, a.jsx)(w, {
                condition: o.initial_pressure_condition,
                layout: "mobile",
                selected: !0,
                stageIndex: o.stageIndex,
              }),
            }),
          ],
        })
      },
      P = ({ values: e }) => {
        let r = (0, l.A)(),
          s = (0, g.VR)(e),
          o = g.jX[s.stageIndex]
        return (0, a.jsxs)(n.Vq, {
          reserveLines: 3,
          children: [
            (0, a.jsx)(n.OZ, { content: p(r, s.initial_pressure_condition, o), variant: "title" }),
            (0, a.jsx)(n.OZ, { content: b(r, s.initial_pressure_condition, o) }),
          ],
        })
      },
      B = ({ values: e, setValues: r }) => {
        let s = (0, l.A)(),
          t = (0, g.VR)(e),
          u = s.formatMessage({
            id: "learningBlock.bloodPressure.controls.condition",
            defaultMessage: "Starting pressure",
          }),
          f = s.formatMessage({
            id: "learningBlock.bloodPressure.controls.stage",
            defaultMessage: "Baroreceptor reflex stage",
          }),
          h = (0, o.useMemo)(
            () =>
              (0, c.xT)([
                {
                  value: 0,
                  label: s.formatMessage({ id: "learningBlock.bloodPressure.controls.low", defaultMessage: "Low" }),
                },
                {
                  value: 1,
                  label: s.formatMessage({
                    id: "learningBlock.bloodPressure.controls.normal",
                    defaultMessage: "Normal",
                  }),
                },
                {
                  value: 2,
                  label: s.formatMessage({ id: "learningBlock.bloodPressure.controls.high", defaultMessage: "High" }),
                },
              ]),
            [s],
          )
        return (0, a.jsx)(n.Ur, {
          screenReaderContent: (0, a.jsx)(i.A, {
            id: "learningBlock.bloodPressure.controls.instructions",
            defaultMessage:
              "Choose low, normal, or high arterial pressure, then use the five-step reflex control to trace the pathway.",
          }),
          children: (0, a.jsx)(d.J, {
            inputs: [
              {
                ariaLabel: u,
                max: g.r$.length - 1,
                min: 0,
                onChange: (e) => {
                  let s = g.r$[e]
                  s &&
                    (0, o.startTransition)(() => {
                      r((0, g.fu)(t, s), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
                    })
                },
                options: h,
                step: 1,
                value: g.r$.indexOf(t.initial_pressure_condition),
                variable: u,
                variableFormat: "text",
              },
              {
                ariaLabel: f,
                ariaValueText: p(s, t.initial_pressure_condition, g.jX[t.stageIndex]),
                formatValueForInput: () => "",
                max: g.sZ.max + 1,
                min: g.sZ.min + 1,
                onChange: (e) => {
                  ;(0, o.startTransition)(() => {
                    r((0, g.Xt)(t, e - 1), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
                  })
                },
                sliderStyle: "stepped",
                step: g.sZ.step,
                value: t.stageIndex + 1,
              },
            ],
          }),
        })
      }
  },
}
//# sourceMappingURL=808707.fcdab57b17.js.map
