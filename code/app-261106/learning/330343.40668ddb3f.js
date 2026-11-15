export const __rspack_esm_ids = [330343]
export const __webpack_modules__ = {
  nKOi(e, a, i) {
    i.d(a, {
      ClimateFeedbackLoopsCaption: () => _,
      ClimateFeedbackLoopsControls: () => C,
      ClimateFeedbackLoopsVisualization: () => F,
    })
    var t = i("ABep"),
      n = i("Wf1j"),
      o = i("oyxz"),
      s = i("KwmQ"),
      r = i("pXKw"),
      l = i("pNxJ"),
      c = i("JOpY"),
      d = i("KIsW"),
      g = i("TliE")
    let m = g.parameters.initial_mechanism.allowedValues,
      p = g.parameters.initial_change.allowedValues,
      f = (e) => {
        let a = m.includes(e.initial_mechanism) ? e.initial_mechanism : g.parameters.initial_mechanism.defaultValue,
          i = p.includes(e.initial_change) ? e.initial_change : g.parameters.initial_change.defaultValue,
          t = Math.min(
            Math.max(Math.round("number" == typeof e.stepIndex && Number.isFinite(e.stepIndex) ? e.stepIndex : 4), 0),
            4,
          ),
          n = "radiative-response" !== a
        return {
          initial_mechanism: a,
          initial_change: i,
          stepIndex: t,
          reinforcing: n,
          returnedChange: n ? i : "warming" === i ? "cooling" : "warming",
        }
      },
      u = "var(--learning-block-accent)",
      h = "var(--learning-block-accent-surface)",
      k = "var(--learning-block-color-primary)",
      M = "var(--learning-block-color-secondary)",
      b = "var(--learning-block-color-companion)",
      x = "var(--learning-block-visualization-surface, var(--bg-primary))",
      w = (e, a) => {
        switch (a.initial_mechanism) {
          case "ice-albedo":
            return e.formatMessage({
              id: "learningBlock.climateFeedbackLoops.mechanism.iceAlbedo",
              defaultMessage: "Ice-albedo",
            })
          case "water-vapor":
            return e.formatMessage({
              id: "learningBlock.climateFeedbackLoops.mechanism.waterVapor",
              defaultMessage: "Water vapor",
            })
          case "radiative-response":
            return e.formatMessage({
              id: "learningBlock.climateFeedbackLoops.mechanism.radiativeResponse",
              defaultMessage: "Radiative response",
            })
        }
      },
      L = (e, a) =>
        "warming" === a
          ? e.formatMessage({ id: "learningBlock.climateFeedbackLoops.change.warming", defaultMessage: "Warming" })
          : e.formatMessage({ id: "learningBlock.climateFeedbackLoops.change.cooling", defaultMessage: "Cooling" }),
      v = (e, a) => {
        let i = "warming" === a.initial_change,
          t = L(e, a.initial_change)
        return "ice-albedo" === a.initial_mechanism
          ? [
              t,
              i
                ? e.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.node.lessIce",
                    defaultMessage: "Less snow & ice",
                  })
                : e.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.node.moreIce",
                    defaultMessage: "More snow & ice",
                  }),
              i
                ? e.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.node.lowerReflectivity",
                    defaultMessage: "Lower albedo",
                  })
                : e.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.node.higherReflectivity",
                    defaultMessage: "Higher albedo",
                  }),
              i
                ? e.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.node.moreSunlight",
                    defaultMessage: "More sunlight absorbed",
                  })
                : e.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.node.lessSunlight",
                    defaultMessage: "Less sunlight absorbed",
                  }),
            ]
          : "water-vapor" === a.initial_mechanism
            ? [
                t,
                i
                  ? e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.moreVapor",
                      defaultMessage: "More water vapor",
                    })
                  : e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.lessVapor",
                      defaultMessage: "Less water vapor",
                    }),
                i
                  ? e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.moreIrRetained",
                      defaultMessage: "More infrared trapped",
                    })
                  : e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.lessIrRetained",
                      defaultMessage: "Less infrared trapped",
                    }),
                i
                  ? e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.strongerGreenhouse",
                      defaultMessage: "Stronger greenhouse",
                    })
                  : e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.weakerGreenhouse",
                      defaultMessage: "Weaker greenhouse",
                    }),
              ]
            : [
                t,
                i
                  ? e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.moreIrEmitted",
                      defaultMessage: "More infrared emitted",
                    })
                  : e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.lessIrEmitted",
                      defaultMessage: "Less infrared emitted",
                    }),
                i
                  ? e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.moreEnergyLost",
                      defaultMessage: "More energy to space",
                    })
                  : e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.lessEnergyLost",
                      defaultMessage: "Less energy to space",
                    }),
                i
                  ? e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.coolingTendency",
                      defaultMessage: "Cooling tendency",
                    })
                  : e.formatMessage({
                      id: "learningBlock.climateFeedbackLoops.node.warmingTendency",
                      defaultMessage: "Warming tendency",
                    }),
              ]
      },
      y = (e, a) => {
        let i = v(e, a)
        return 0 === a.stepIndex
          ? "warming" === a.initial_change
            ? e.formatMessage({
                id: "learningBlock.climateFeedbackLoops.stage.initialWarming",
                defaultMessage: "Initial warming",
              })
            : e.formatMessage({
                id: "learningBlock.climateFeedbackLoops.stage.initialCooling",
                defaultMessage: "Initial cooling",
              })
          : a.stepIndex < 4
            ? i[a.stepIndex]
            : a.reinforcing
              ? e.formatMessage({
                  id: "learningBlock.climateFeedbackLoops.stage.reinforcing",
                  defaultMessage: "Reinforcing feedback",
                })
              : e.formatMessage({
                  id: "learningBlock.climateFeedbackLoops.stage.balancing",
                  defaultMessage: "Balancing response",
                })
      },
      B = ({ className: e, width: a, height: i, text: n, active: o, revealed: s, color: r }) =>
        (0, t.jsx)("div", {
          className: `absolute z-10 ${e}`,
          style: { opacity: s ? 1 : 0.62 },
          children: (0, t.jsx)(c.ac, {
            "aria-hidden": !0,
            bodyHeight: i,
            bodyWidth: a,
            contentClassName: `text-xs ${o ? "font-semibold" : ""}`,
            contentStyle: { color: o ? u : "var(--text-primary)" },
            fill: o ? h : x,
            paddingX: 6,
            radius: 12,
            stroke: o ? u : r,
            strokeWidth: o ? 2 : 1,
            ...c.wO,
            children: (0, t.jsx)("span", {
              className: "inline-flex min-w-0 items-center justify-center text-center whitespace-normal",
              style: { width: a - 12, overflowWrap: "anywhere" },
              children: n,
            }),
          }),
        }),
      F = ({ values: e, presentationMode: a = "standard" }) => {
        let i = (0, n.A)(),
          o = f(e),
          s = v(i, o),
          r = "thumbnail" === a,
          l = r ? 4 : o.stepIndex,
          c = (e) => (r || l >= e ? (l === e ? 1 : 0.82) : 0.62),
          g = o.reinforcing
            ? i.formatMessage({
                id: "learningBlock.climateFeedbackLoops.loop.reinforcing",
                defaultMessage: "Reinforcing (+)",
              })
            : i.formatMessage({
                id: "learningBlock.climateFeedbackLoops.loop.balancing",
                defaultMessage: "Balancing (−)",
              }),
          m = {
            mechanism: w(i, o),
            initial: s[0],
            first: s[1],
            second: s[2],
            third: s[3],
            returned: L(i, o.returnedChange),
            classification: g,
          },
          p = r
            ? i.formatMessage(
                {
                  id: "learningBlock.climateFeedbackLoops.thumbnailAriaLabel",
                  defaultMessage:
                    "{mechanism} climate loop: {initial} to {first}, {second}, {third}, and back to {returned}. {classification}.",
                },
                m,
              )
            : i.formatMessage(
                {
                  id: "learningBlock.climateFeedbackLoops.visualizationAriaLabel",
                  defaultMessage:
                    "{mechanism} climate loop: {initial} to {first}, {second}, {third}, and back to {returned}. {classification}. Selected step: {step}.",
                },
                { ...m, step: y(i, o) },
              )
        return r
          ? (0, t.jsx)("div", {
              className: "text-token-text-primary flex h-full w-full items-center justify-center p-1",
              children: (0, t.jsxs)("svg", {
                viewBox: "0 0 120 120",
                role: "img",
                "aria-label": p,
                className: "h-full w-full",
                "data-climate-feedback-stage": l,
                children: [
                  (0, t.jsx)(d.z, {
                    path: "M 58 18 C 88 17 106 36 103 58",
                    endTangent: { from: { x: 104, y: 49 }, to: { x: 103, y: 58 } },
                    variant: "roundedArrowAccent",
                    color: k,
                    strokeWidth: 4,
                    arrowHeadLength: 9,
                    arrowHeadHalfWidth: 4,
                  }),
                  (0, t.jsx)(d.z, {
                    path: "M 101 68 C 94 98 68 107 48 100",
                    endTangent: { from: { x: 57, y: 103 }, to: { x: 48, y: 100 } },
                    variant: "roundedArrowAccent",
                    color: M,
                    strokeWidth: 4,
                    arrowHeadLength: 9,
                    arrowHeadHalfWidth: 4,
                  }),
                  (0, t.jsx)(d.z, {
                    path: "M 39 95 C 14 84 10 54 21 38",
                    endTangent: { from: { x: 17, y: 46 }, to: { x: 21, y: 38 } },
                    variant: "roundedArrowAccent",
                    color: b,
                    strokeWidth: 4,
                    arrowHeadLength: 9,
                    arrowHeadHalfWidth: 4,
                  }),
                  (0, t.jsx)("circle", { cx: 60, cy: 60, r: 23, fill: h, stroke: u }),
                  (0, t.jsx)(d.z, {
                    path: o.reinforcing ? "M 49 62 L 71 62 M 60 51 L 60 73" : "M 49 62 L 71 62",
                    variant: "solidAccent",
                    color: u,
                    strokeWidth: 4,
                  }),
                ],
              }),
            })
          : (0, t.jsx)("div", {
              "data-learning-block-wide-width": "42rem",
              className: "text-token-text-primary flex h-full min-h-0 w-full items-center justify-center px-6 pb-5",
              children: (0, t.jsxs)("div", {
                role: "img",
                "aria-label": p,
                className: "relative h-[220px] w-full max-w-[560px] sm:h-[236px]",
                "data-climate-feedback-stage": l,
                children: [
                  (0, t.jsxs)("svg", {
                    viewBox: "0 0 440 250",
                    "aria-hidden": "true",
                    preserveAspectRatio: "none",
                    className: "absolute inset-0 hidden h-full w-full sm:block",
                    children: [
                      (0, t.jsx)(d.z, {
                        path: "M 290 40 C 328 44 352 60 365 84",
                        endTangent: { from: { x: 360, y: 74 }, to: { x: 365, y: 84 } },
                        variant: "roundedArrowAccent",
                        color: 1 === l ? u : k,
                        opacity: c(1),
                        strokeWidth: 1 === l ? 4.5 : 3,
                      }),
                      (0, t.jsx)(d.z, {
                        path: "M 367 166 C 352 193 329 207 300 209",
                        endTangent: { from: { x: 311, y: 209 }, to: { x: 300, y: 209 } },
                        variant: "roundedArrowAccent",
                        color: 2 === l ? u : M,
                        opacity: c(2),
                        strokeWidth: 2 === l ? 4.5 : 3,
                      }),
                      (0, t.jsx)(d.z, {
                        path: "M 140 209 C 111 206 88 193 73 166",
                        endTangent: { from: { x: 78, y: 176 }, to: { x: 73, y: 166 } },
                        variant: "roundedArrowAccent",
                        color: 3 === l ? u : b,
                        opacity: c(3),
                        strokeWidth: 3 === l ? 4.5 : 3,
                      }),
                      (0, t.jsx)(d.z, {
                        path: "M 75 84 C 89 59 112 44 150 40",
                        endTangent: { from: { x: 138, y: 41 }, to: { x: 150, y: 40 } },
                        variant: "roundedArrowAccent",
                        color: 4 === l ? u : k,
                        opacity: c(4),
                        strokeWidth: 4 === l ? 4.5 : 3,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("svg", {
                    viewBox: "0 0 440 250",
                    "aria-hidden": "true",
                    preserveAspectRatio: "none",
                    className: "absolute inset-0 h-full w-full sm:hidden",
                    children: [
                      (0, t.jsx)(d.z, {
                        path: "M 336 41 C 369 44 388 61 392 86",
                        endTangent: { from: { x: 391, y: 76 }, to: { x: 392, y: 86 } },
                        variant: "roundedArrowAccent",
                        color: 1 === l ? u : k,
                        opacity: c(1),
                        strokeWidth: 1 === l ? 4.5 : 3,
                      }),
                      (0, t.jsx)(d.z, {
                        path: "M 392 164 C 387 190 369 205 348 208",
                        endTangent: { from: { x: 358, y: 207 }, to: { x: 348, y: 208 } },
                        variant: "roundedArrowAccent",
                        color: 2 === l ? u : M,
                        opacity: c(2),
                        strokeWidth: 2 === l ? 4.5 : 3,
                      }),
                      (0, t.jsx)(d.z, {
                        path: "M 92 208 C 70 204 53 189 48 164",
                        endTangent: { from: { x: 49, y: 175 }, to: { x: 48, y: 164 } },
                        variant: "roundedArrowAccent",
                        color: 3 === l ? u : b,
                        opacity: c(3),
                        strokeWidth: 3 === l ? 4.5 : 3,
                      }),
                      (0, t.jsx)(d.z, {
                        path: "M 48 86 C 52 61 71 44 104 41",
                        endTangent: { from: { x: 93, y: 42 }, to: { x: 104, y: 41 } },
                        variant: "roundedArrowAccent",
                        color: 4 === l ? u : k,
                        opacity: c(4),
                        strokeWidth: 4 === l ? 4.5 : 3,
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": "true",
                    className:
                      "loopSign-BFE4aL absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center",
                    style: { background: h, border: `2px solid ${4 === l ? u : x}` },
                    children: (0, t.jsx)("span", {
                      className: "text-lg font-semibold",
                      style: { color: u },
                      children: o.reinforcing ? "+" : "−",
                    }),
                  }),
                  (0, t.jsx)(B, {
                    className: "top-0 left-1/2 -translate-x-1/2",
                    width: 148,
                    height: 34,
                    text: s[0],
                    active: 0 === l || 4 === l,
                    revealed: !0,
                    color: k,
                  }),
                  (0, t.jsx)(B, {
                    className: "top-1/2 right-0 -translate-y-1/2",
                    width: 108,
                    height: 56,
                    text: s[1],
                    active: 1 === l,
                    revealed: r || l >= 1,
                    color: M,
                  }),
                  (0, t.jsx)(B, {
                    className: "bottom-0 left-1/2 -translate-x-1/2",
                    width: 168,
                    height: 46,
                    text: s[2],
                    active: 2 === l,
                    revealed: r || l >= 2,
                    color: b,
                  }),
                  (0, t.jsx)(B, {
                    className: "top-1/2 left-0 -translate-y-1/2",
                    width: 108,
                    height: 56,
                    text: s[3],
                    active: 3 === l,
                    revealed: r || l >= 3,
                    color: k,
                  }),
                ],
              }),
            })
      },
      C = ({ values: e, setValues: a }) => {
        let i = (0, n.A)(),
          c = f(e),
          d = (0, r.xT)(m.map((e, a) => ({ value: a, label: w(i, { ...c, initial_mechanism: e }) }))),
          g = (0, r.xT)(p.map((e, a) => ({ value: a, label: L(i, e) }))),
          u = (e) => {
            a((a) => {
              let i = f({ ...a, ...e })
              return {
                initial_mechanism: i.initial_mechanism,
                initial_change: i.initial_change,
                stepIndex: i.stepIndex,
              }
            }, "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
          }
        return (0, t.jsx)(s.Ur, {
          screenReaderContent: (0, t.jsx)(o.A, {
            id: "learningBlock.climateFeedbackLoops.control.description",
            defaultMessage:
              "Choose a climate mechanism and an initial warming or cooling, then move through the stages to trace each response back to temperature.",
          }),
          children: (0, t.jsx)("div", {
            children: (0, t.jsx)(l.J, {
              inputs: [
                {
                  ariaLabel: i.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.control.mechanism",
                    defaultMessage: "Climate mechanism",
                  }),
                  min: 0,
                  max: d.length - 1,
                  step: 1,
                  value: m.indexOf(c.initial_mechanism),
                  options: d,
                  onChange: (e) => u({ initial_mechanism: m[e] }),
                },
                {
                  ariaLabel: i.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.control.initialChange",
                    defaultMessage: "Initial temperature change",
                  }),
                  min: 0,
                  max: g.length - 1,
                  step: 1,
                  value: p.indexOf(c.initial_change),
                  options: g,
                  onChange: (e) => u({ initial_change: p[e] }),
                },
                {
                  ariaLabel: i.formatMessage({
                    id: "learningBlock.climateFeedbackLoops.control.stage",
                    defaultMessage: "Causal-loop stage",
                  }),
                  ariaValueText: y(i, c),
                  min: 0,
                  max: 4,
                  step: 1,
                  value: c.stepIndex,
                  sliderStyle: "stepped",
                  formatValueForInput: () => "",
                  onChange: (e) => u({ stepIndex: e }),
                },
              ],
            }),
          }),
        })
      },
      _ = ({ values: e }) => {
        let a = (0, n.A)(),
          i = f(e)
        return (0, t.jsxs)(s.Vq, {
          reserveLines: 2,
          children: [
            (0, t.jsx)(s.OZ, { content: y(a, i), variant: "title" }),
            (0, t.jsx)(s.OZ, {
              content: ((e, a) => {
                if (0 === a.stepIndex)
                  return "warming" === a.initial_change
                    ? e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.initialWarming",
                        defaultMessage: "Warming starts the loop.",
                      })
                    : e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.initialCooling",
                        defaultMessage: "Cooling starts the loop.",
                      })
                if (a.stepIndex < 4) {
                  if ("ice-albedo" === a.initial_mechanism) {
                    if ("warming" === a.initial_change)
                      switch (a.stepIndex) {
                        case 1:
                          return e.formatMessage({
                            id: "learningBlock.climateFeedbackLoops.caption.iceWarmingOne",
                            defaultMessage: "Warming reduces snow and sea ice.",
                          })
                        case 2:
                          return e.formatMessage({
                            id: "learningBlock.climateFeedbackLoops.caption.iceWarmingTwo",
                            defaultMessage: "Less ice lowers reflectivity.",
                          })
                        case 3:
                          return e.formatMessage({
                            id: "learningBlock.climateFeedbackLoops.caption.iceWarmingThree",
                            defaultMessage: "Lower albedo absorbs more sunlight.",
                          })
                      }
                    switch (a.stepIndex) {
                      case 1:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.iceCoolingOne",
                          defaultMessage: "Cooling expands snow and sea ice.",
                        })
                      case 2:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.iceCoolingTwo",
                          defaultMessage: "More ice raises reflectivity.",
                        })
                      case 3:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.iceCoolingThree",
                          defaultMessage: "Higher albedo absorbs less sunlight.",
                        })
                    }
                  }
                  if ("water-vapor" === a.initial_mechanism) {
                    if ("warming" === a.initial_change)
                      switch (a.stepIndex) {
                        case 1:
                          return e.formatMessage({
                            id: "learningBlock.climateFeedbackLoops.caption.vaporWarmingOne",
                            defaultMessage: "Warming increases water vapor.",
                          })
                        case 2:
                          return e.formatMessage({
                            id: "learningBlock.climateFeedbackLoops.caption.vaporWarmingTwo",
                            defaultMessage: "More vapor traps more infrared.",
                          })
                        case 3:
                          return e.formatMessage({
                            id: "learningBlock.climateFeedbackLoops.caption.vaporWarmingThree",
                            defaultMessage: "Trapped infrared adds warming.",
                          })
                      }
                    switch (a.stepIndex) {
                      case 1:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.vaporCoolingOne",
                          defaultMessage: "Cooling reduces water vapor.",
                        })
                      case 2:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.vaporCoolingTwo",
                          defaultMessage: "Less vapor traps less infrared.",
                        })
                      case 3:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.vaporCoolingThree",
                          defaultMessage: "Less trapped infrared weakens warming.",
                        })
                    }
                  }
                  if ("warming" === a.initial_change)
                    switch (a.stepIndex) {
                      case 1:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.radiativeWarmingOne",
                          defaultMessage: "Warming increases infrared emission.",
                        })
                      case 2:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.radiativeWarmingTwo",
                          defaultMessage: "More infrared escapes to space.",
                        })
                      case 3:
                        return e.formatMessage({
                          id: "learningBlock.climateFeedbackLoops.caption.radiativeWarmingThree",
                          defaultMessage: "Energy loss creates a cooling tendency.",
                        })
                    }
                  switch (a.stepIndex) {
                    case 1:
                      return e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.radiativeCoolingOne",
                        defaultMessage: "Cooling reduces infrared emission.",
                      })
                    case 2:
                      return e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.radiativeCoolingTwo",
                        defaultMessage: "Less infrared escapes to space.",
                      })
                    case 3:
                      return e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.radiativeCoolingThree",
                        defaultMessage: "Reduced energy loss creates a warming tendency.",
                      })
                  }
                }
                return a.reinforcing
                  ? "warming" === a.returnedChange
                    ? e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.closedReinforcingWarming",
                        defaultMessage: "Further warming reinforces it.",
                      })
                    : e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.closedReinforcingCooling",
                        defaultMessage: "Further cooling reinforces it.",
                      })
                  : "cooling" === a.returnedChange
                    ? e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.closedBalancingCooling",
                        defaultMessage: "Cooling opposes warming.",
                      })
                    : e.formatMessage({
                        id: "learningBlock.climateFeedbackLoops.caption.closedBalancingWarming",
                        defaultMessage: "Warming opposes cooling.",
                      })
              })(a, i),
            }),
          ],
        })
      }
  },
}
//# sourceMappingURL=330343.40668ddb3f.js.map
