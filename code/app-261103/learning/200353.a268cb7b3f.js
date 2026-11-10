export const __rspack_esm_ids = [200353]
export const __webpack_modules__ = {
  MnZa(e, s, a) {
    var r = a("ABep"),
      l = a("zd8w"),
      t = a("Wf1j"),
      o = a("KwmQ"),
      i = a("pNxJ"),
      c = a("rGpP"),
      n = a("pTkA"),
      g = a("CmqR")
    let u = 152,
      d = "var(--border-heavy, #b4b4b4)",
      x = "var(--learning-block-color-accent)",
      m = "var(--orange-500, #c76d2b)",
      h = "var(--gray-400, #9b9b9b)",
      f = "var(--green-500, #00a240)",
      y = "var(--green-300, #33bd69)",
      p = "var(--green-700, #006b2b)",
      j = "var(--orange-800, #673714)",
      b = ["start", "pioneers", "grasses", "shrubs", "trees"],
      M = ({ x: e, y: s, width: a, height: l, text: t, emphasized: o = !1 }) =>
        (0, r.jsx)("foreignObject", {
          x: e,
          y: s,
          width: a,
          height: l,
          overflow: "visible",
          "data-i18n-text-region": !0,
          children: (0, r.jsx)("div", {
            className:
              "text-token-text-primary flex h-full w-full items-center justify-center overflow-hidden text-center break-words whitespace-normal",
            children: (0, r.jsx)("span", { className: o ? "text-xs font-semibold" : "text-xs", children: t }),
          }),
        }),
      S = (e, s) =>
        "primary" === s
          ? e.formatMessage({
              id: "learningBlock.ecologicalSuccession.path.primary",
              defaultMessage: "Primary succession",
            })
          : e.formatMessage({
              id: "learningBlock.ecologicalSuccession.path.secondary",
              defaultMessage: "Secondary succession",
            }),
      k = (e, s) =>
        "primary" === s
          ? e.formatMessage({ id: "learningBlock.ecologicalSuccession.path.primaryShort", defaultMessage: "Primary" })
          : e.formatMessage({
              id: "learningBlock.ecologicalSuccession.path.secondaryShort",
              defaultMessage: "Secondary",
            }),
      v = (e, s) => {
        switch (s) {
          case "start":
            return e.formatMessage({ id: "learningBlock.ecologicalSuccession.stage.start", defaultMessage: "Start" })
          case "pioneers":
            return e.formatMessage({
              id: "learningBlock.ecologicalSuccession.stage.pioneers",
              defaultMessage: "Pioneers",
            })
          case "grasses":
            return e.formatMessage({
              id: "learningBlock.ecologicalSuccession.stage.grasses",
              defaultMessage: "Grasses",
            })
          case "shrubs":
            return e.formatMessage({ id: "learningBlock.ecologicalSuccession.stage.shrubs", defaultMessage: "Shrubs" })
          case "trees":
            return e.formatMessage({ id: "learningBlock.ecologicalSuccession.stage.trees", defaultMessage: "Trees" })
        }
      },
      w = (e, s) => {
        switch (s) {
          case 0:
            return e.formatMessage({ id: "learningBlock.ecologicalSuccession.level.none", defaultMessage: "None" })
          case 1:
            return e.formatMessage({
              id: "learningBlock.ecologicalSuccession.level.veryLow",
              defaultMessage: "Very low",
            })
          case 2:
            return e.formatMessage({ id: "learningBlock.ecologicalSuccession.level.low", defaultMessage: "Low" })
          case 3:
            return e.formatMessage({ id: "learningBlock.ecologicalSuccession.level.medium", defaultMessage: "Medium" })
          default:
            return e.formatMessage({ id: "learningBlock.ecologicalSuccession.level.high", defaultMessage: "High" })
        }
      },
      B = ({ x: e, scale: s = 1 }) =>
        (0, r.jsxs)("g", {
          "data-plant-anchor": e,
          "data-plant-kind": "grass",
          transform: `translate(${e} ${u}) scale(${s})`,
          children: [
            (0, r.jsx)(n.SY, { from: { x: 0, y: 0 }, to: { x: -6, y: -22 }, color: f, strokeWidth: 2 }),
            (0, r.jsx)(n.SY, { from: { x: 0, y: 0 }, to: { x: 2, y: -28 }, color: f, strokeWidth: 2 }),
            (0, r.jsx)(n.SY, { from: { x: 0, y: 0 }, to: { x: 9, y: -23 }, color: f, strokeWidth: 2 }),
            (0, r.jsx)(n.SY, { from: { x: 0, y: 0 }, to: { x: 13, y: -15 }, color: f, strokeWidth: 2 }),
          ],
        }),
      T = ({ x: e, height: s = 18 }) =>
        (0, r.jsxs)("g", {
          "data-plant-anchor": e,
          "data-plant-kind": "sprout",
          transform: `translate(${e} ${u})`,
          children: [
            (0, r.jsx)(n.SY, { from: { x: 0, y: 0 }, to: { x: 0, y: -s }, color: p, strokeWidth: 2 }),
            (0, r.jsx)("ellipse", {
              cx: -5,
              cy: -s + 4,
              rx: 6,
              ry: 3.5,
              fill: y,
              transform: `rotate(25 -5 ${-s + 4})`,
            }),
            (0, r.jsx)("ellipse", { cx: 5, cy: -s + 1, rx: 6, ry: 3.5, fill: f, transform: `rotate(-25 5 ${-s + 1})` }),
          ],
        }),
      Y = ({ x: e, scale: s = 1 }) =>
        (0, r.jsxs)("g", {
          "data-plant-anchor": e,
          "data-plant-kind": "shrub",
          transform: `translate(${e} ${u}) scale(${s})`,
          children: [
            (0, r.jsx)(n.SY, { from: { x: 0, y: 0 }, to: { x: -7, y: -23 }, color: j, strokeWidth: 2 }),
            (0, r.jsx)(n.SY, { from: { x: 0, y: 0 }, to: { x: 8, y: -25 }, color: j, strokeWidth: 2 }),
            (0, r.jsx)(n.SY, { from: { x: 0, y: -8 }, to: { x: -14, y: -19 }, color: j, strokeWidth: 2 }),
            (0, r.jsx)(n.SY, { from: { x: 2, y: -9 }, to: { x: 17, y: -19 }, color: j, strokeWidth: 2 }),
            (0, r.jsx)("circle", { cx: -14, cy: -23, r: 11, fill: y }),
            (0, r.jsx)("circle", { cx: 0, cy: -30, r: 14, fill: f }),
            (0, r.jsx)("circle", { cx: 15, cy: -23, r: 11, fill: p }),
          ],
        }),
      L = ({ x: e, height: s, crown: a, color: l = f }) => {
        let t = u - s
        return (0, r.jsxs)("g", {
          "data-plant-anchor": e,
          "data-plant-kind": "tree",
          children: [
            (0, r.jsx)(n.SY, {
              from: { x: e, y: u },
              to: { x: e, y: t + 0.55 * a },
              color: j,
              strokeWidth: Math.max(5, 0.24 * a),
            }),
            (0, r.jsx)("circle", { cx: e, cy: t, r: a, fill: l }),
            (0, r.jsx)("circle", { cx: e - 0.65 * a, cy: t + 0.25 * a, r: 0.72 * a, fill: l }),
            (0, r.jsx)("circle", { cx: e + 0.65 * a, cy: t + 0.25 * a, r: 0.72 * a, fill: l }),
          ],
        })
      },
      W = ({ x: e, y: s = u, scale: a = 1 }) =>
        (0, r.jsx)("path", {
          d: "M-13 0 L-10 -11 L-2 -16 L9 -12 L14 -3 L11 0 Z",
          transform: `translate(${e} ${s}) scale(${a})`,
          fill: h,
        }),
      _ = ({ x: e, depth: s, spread: a }) =>
        (0, r.jsxs)("g", {
          "data-root-anchor": e,
          children: [
            (0, r.jsx)(n.SY, {
              from: { x: e, y: u },
              to: { x: e - a, y: u + s },
              color: j,
              opacity: 0.55,
              strokeWidth: 1.2,
            }),
            (0, r.jsx)(n.SY, {
              from: { x: e, y: u },
              to: { x: e + a, y: u + s },
              color: j,
              opacity: 0.55,
              strokeWidth: 1.2,
            }),
            (0, r.jsx)(n.SY, {
              from: { x: e, y: u },
              to: { x: e, y: u + 0.9 * s },
              color: j,
              opacity: 0.55,
              strokeWidth: 1.2,
            }),
          ],
        }),
      $ = ({ stageIndex: e, soilDepth: s, successionType: a }) => {
        if (e < 2 || s < 12) return null
        if (2 === e) {
          let e = Math.min(s - 3, 12)
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(_, { x: 88, depth: e, spread: 10 }),
              (0, r.jsx)(_, { x: 192, depth: e, spread: 10 }),
              (0, r.jsx)(_, { x: 296, depth: e, spread: 10 }),
            ],
          })
        }
        if (3 === e) {
          let e = Math.min(s - 3, 14),
            l = Math.min(s - 3, 22)
          return (0, r.jsxs)(r.Fragment, {
            children: [
              ("primary" === a ? [144, 192, 240] : [104, 280]).map((s) =>
                (0, r.jsx)(_, { x: s, depth: e, spread: 10 }, `shrub-${s}`),
              ),
              ("primary" === a ? [88, 296] : [56, 232]).map((e) =>
                (0, r.jsx)(_, { x: e, depth: l, spread: 18 }, `tree-${e}`),
              ),
            ],
          })
        }
        let l = Math.min(s - 3, 33)
        return (0, r.jsx)(r.Fragment, {
          children: ("primary" === a ? [88, 192, 296] : [56, 144, 232, 328]).map((e) =>
            (0, r.jsx)(_, { x: e, depth: l, spread: 20 }, e),
          ),
        })
      },
      F = ({ successionType: e, stageIndex: s, soilDepth: a }) => {
        let l = "primary" === e,
          t = l && 1 === s,
          o = !l && 1 === s,
          i = s >= 2,
          c = s >= 3,
          g = s >= 4,
          x = !l && s <= 2
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("circle", { cx: 328, cy: 80, r: 16, fill: "var(--yellow-400, #ffc300)", opacity: 0.9 }),
            (0, r.jsx)("path", {
              d: "M24 136 Q72 104 120 136 Q176 96 232 136 Q296 104 360 136 L360 152 L24 152 Z",
              fill:
                l && s <= 1
                  ? "color-mix(in srgb, var(--gray-500, #7f7f7f) 24%, transparent)"
                  : "color-mix(in srgb, var(--green-400, #33bd69) 22%, transparent)",
            }),
            (0, r.jsx)("rect", { x: 24, y: u + a, width: 336, height: 200 - u - a, fill: h }),
            (0, r.jsx)(n.SY, {
              from: { x: 24, y: u + a },
              to: { x: 360, y: u + a },
              color: "var(--gray-600, #676767)",
              strokeWidth: 1,
              opacity: 0.45,
            }),
            a > 0
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("rect", { x: 24, y: u, width: 336, height: a, fill: "var(--orange-700, #8a4b20)" }),
                    (0, r.jsx)("rect", { x: 24, y: u, width: 336, height: Math.min(5, a), fill: m }),
                  ],
                })
              : null,
            (0, r.jsx)(n.SY, { from: { x: 24, y: u }, to: { x: 360, y: u }, color: d, strokeWidth: 1.2 }),
            (0, r.jsx)($, { stageIndex: s, soilDepth: a, successionType: e }),
            l && s <= 1
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(W, { x: 80, scale: 1.25 }),
                    (0, r.jsx)(W, { x: 192, scale: 0.9 }),
                    (0, r.jsx)(W, { x: 304, scale: 1.15 }),
                  ],
                })
              : null,
            t
              ? (0, r.jsxs)("g", {
                  fill: y,
                  children: [
                    (0, r.jsx)("circle", { cx: 72, cy: 140, r: 4 }),
                    (0, r.jsx)("circle", { cx: 80, cy: 136, r: 4 }),
                    (0, r.jsx)("circle", { cx: 184, cy: 144, r: 4 }),
                    (0, r.jsx)("circle", { cx: 296, cy: 140, r: 4 }),
                    (0, r.jsx)("circle", { cx: 304, cy: 144, r: 4 }),
                  ],
                })
              : null,
            x
              ? (0, r.jsxs)("g", {
                  children: [
                    (0, r.jsx)(n.SY, { from: { x: 64, y: u }, to: { x: 64, y: 120 }, color: j, strokeWidth: 10 }),
                    (0, r.jsx)("ellipse", { cx: 64, cy: 120, rx: 5, ry: 2, fill: "var(--orange-400, #e89555)" }),
                    (0, r.jsx)(n.SY, { from: { x: 320, y: u }, to: { x: 312, y: 128 }, color: j, strokeWidth: 4 }),
                    (0, r.jsx)(n.SY, { from: { x: 320, y: u }, to: { x: 328, y: 136 }, color: j, strokeWidth: 3 }),
                  ],
                })
              : null,
            o
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(T, { x: 112, height: 16 }),
                    (0, r.jsx)(T, { x: 192, height: 24 }),
                    (0, r.jsx)(T, { x: 272, height: 16 }),
                    (0, r.jsx)(B, { x: 336, scale: 0.65 }),
                  ],
                })
              : null,
            i
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(B, { x: 40, scale: 0.7 }),
                    (0, r.jsx)(B, { x: 88, scale: 0.9 }),
                    (0, r.jsx)(B, { x: 136, scale: 0.7 }),
                    (0, r.jsx)(B, { x: 192, scale: 0.9 }),
                    (0, r.jsx)(B, { x: 248, scale: 0.7 }),
                    (0, r.jsx)(B, { x: 296, scale: 0.9 }),
                    (0, r.jsx)(B, { x: 344, scale: 0.7 }),
                  ],
                })
              : null,
            c && !g
              ? l
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(Y, { x: 144, scale: 0.8 }),
                      (0, r.jsx)(Y, { x: 192, scale: 1 }),
                      (0, r.jsx)(Y, { x: 240, scale: 0.8 }),
                      (0, r.jsx)(L, { x: 88, height: 48, crown: 12, color: y }),
                      (0, r.jsx)(L, { x: 296, height: 56, crown: 16, color: f }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(Y, { x: 104, scale: 0.8 }),
                      (0, r.jsx)(Y, { x: 280, scale: 0.8 }),
                      (0, r.jsx)(L, { x: 56, height: 48, crown: 12, color: y }),
                      (0, r.jsx)(L, { x: 232, height: 56, crown: 16, color: f }),
                    ],
                  })
              : null,
            g
              ? l
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(Y, { x: 144, scale: 0.65 }),
                      (0, r.jsx)(Y, { x: 240, scale: 0.65 }),
                      (0, r.jsx)(L, { x: 88, height: 72, crown: 20, color: y }),
                      (0, r.jsx)(L, { x: 192, height: 72, crown: 24, color: p }),
                      (0, r.jsx)(L, { x: 296, height: 72, crown: 20, color: f }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(Y, { x: 104, scale: 0.55 }),
                      (0, r.jsx)(Y, { x: 280, scale: 0.55 }),
                      (0, r.jsx)(L, { x: 56, height: 58, crown: 15, color: y }),
                      (0, r.jsx)(L, { x: 144, height: 68, crown: 17, color: f }),
                      (0, r.jsx)(L, { x: 232, height: 62, crown: 16, color: p }),
                      (0, r.jsx)(L, { x: 328, height: 68, crown: 17, color: f }),
                    ],
                  })
              : null,
          ],
        })
      },
      C = ({
        centerX: e,
        label: s,
        value: a,
        color: l,
        labelY: t = 272,
        barY: o = 308,
        labelWidth: i = 104,
        labelHeight: c = 32,
      }) =>
        (0, r.jsxs)("g", {
          children: [
            (0, r.jsx)(M, { x: e - i / 2, y: t, width: i, height: c, text: s, emphasized: !0 }),
            Array.from({ length: 4 }, (s, t) =>
              (0, r.jsx)(
                "rect",
                {
                  x: e - 44 + 24 * t,
                  y: o,
                  width: 16,
                  height: 8,
                  rx: 4,
                  fill: t < a ? l : d,
                  fillOpacity: t < a ? 1 : 0.35,
                },
                t,
              ),
            ),
          ],
        })
    a.d(
      s,
      {},
      {
        EcologicalSuccessionCaption: ({ values: e }) => {
          let s,
            a = (0, t.A)(),
            [l, i] = ((s = (0, g.qr)(e)),
            `${((e, s) => {
              switch (s) {
                case "start":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.title.startingConditions",
                    defaultMessage: "Starting conditions",
                  })
                case "pioneers":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.title.pioneerCommunity",
                    defaultMessage: "Pioneer community",
                  })
                case "grasses":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.title.grasslandCommunity",
                    defaultMessage: "Grassland community",
                  })
                case "shrubs":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.title.shrubCommunity",
                    defaultMessage: "Shrub community",
                  })
                case "trees":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.title.forestCommunity",
                    defaultMessage: "Forest community",
                  })
              }
            })(a, s.stage.key)}
${((e, s, a) => {
  if ("primary" === s)
    switch (a) {
      case "start":
        return e.formatMessage({
          id: "learningBlock.ecologicalSuccession.subtitle.primaryStart",
          defaultMessage: "Bare rock lacks soil, so a biological community develops from scratch.",
        })
      case "pioneers":
        return e.formatMessage({
          id: "learningBlock.ecologicalSuccession.subtitle.primaryPioneers",
          defaultMessage: "Lichens, mosses, and microbes begin forming the first thin layer of soil.",
        })
      case "grasses":
        return e.formatMessage({
          id: "learningBlock.ecologicalSuccession.subtitle.primaryGrasses",
          defaultMessage: "Shallow soil supports grasses and flowering plants as organic matter builds.",
        })
      case "shrubs":
        return e.formatMessage({
          id: "learningBlock.ecologicalSuccession.subtitle.primaryShrubs",
          defaultMessage: "Deeper soil supports shrubs and young trees as their larger roots spread.",
        })
      case "trees":
        return e.formatMessage({
          id: "learningBlock.ecologicalSuccession.subtitle.primaryTrees",
          defaultMessage: "A layered forest stores high biomass and creates varied habitats.",
        })
    }
  switch (a) {
    case "start":
      return e.formatMessage({
        id: "learningBlock.ecologicalSuccession.subtitle.secondaryStart",
        defaultMessage: "After disturbance, existing soil, seeds, roots, and microbes remain in place.",
      })
    case "pioneers":
      return e.formatMessage({
        id: "learningBlock.ecologicalSuccession.subtitle.secondaryPioneers",
        defaultMessage: "Early colonizers and surviving shoots regrow quickly from the existing soil.",
      })
    case "grasses":
      return e.formatMessage({
        id: "learningBlock.ecologicalSuccession.subtitle.secondaryGrasses",
        defaultMessage: "Grasses and perennial plants spread while animal communities begin to return.",
      })
    case "shrubs":
      return e.formatMessage({
        id: "learningBlock.ecologicalSuccession.subtitle.secondaryShrubs",
        defaultMessage: "Shrubs and fast-growing trees add shade and create new layers of habitat.",
      })
    case "trees":
      return e.formatMessage({
        id: "learningBlock.ecologicalSuccession.subtitle.secondaryTrees",
        defaultMessage: "A recovering forest develops high biomass and layered structure.",
      })
  }
})(a, s.values.successionType, s.stage.key)}`).split("\n")
          return (0, r.jsxs)(o.Vq, {
            children: [(0, r.jsx)(o.OZ, { content: l, variant: "title" }), (0, r.jsx)(o.OZ, { content: i })],
          })
        },
        EcologicalSuccessionControls: ({ values: e, setValues: s }) => {
          let a = (0, t.A)(),
            l = (0, g.qr)(e),
            c = a.formatMessage({ id: "learningBlock.ecologicalSuccession.control.path", defaultMessage: "Type" }),
            n = a.formatMessage({ id: "learningBlock.ecologicalSuccession.control.stage", defaultMessage: "Stage" }),
            u = v(a, l.stage.key),
            d = S(a, l.values.successionType)
          return (0, r.jsx)(o.Ur, {
            children: (0, r.jsx)(i.J, {
              inputs: [
                {
                  min: 0,
                  max: 1,
                  step: 1,
                  value: +("primary" !== l.values.successionType),
                  variable: c,
                  variableFormat: "text",
                  options: [
                    { value: 0, label: k(a, "primary") },
                    { value: 1, label: k(a, "secondary") },
                  ],
                  ariaLabel: c,
                  ariaValueText: d,
                  onChange: (e) =>
                    s(
                      (s) => (0, g.r_)({ ...s, successionType: e >= 0.5 ? "secondary" : "primary" }),
                      "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                    ),
                },
                {
                  min: g.se.min,
                  max: g.se.max,
                  step: 1,
                  value: l.values.stageIndex,
                  sliderStyle: "stepped",
                  showValueInput: !1,
                  ariaLabel: n,
                  ariaValueText: u,
                  onChange: (e) =>
                    s((s) => (0, g.r_)({ ...s, stageIndex: e }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
                },
              ],
            }),
          })
        },
        EcologicalSuccessionVisualization: ({ values: e, presentationMode: s }) => {
          let a = (0, t.A)(),
            o = (0, l.useId)().replace(/:/g, ""),
            i = (0, g.qr)(e),
            u = "thumbnail" === s,
            { isWideLayout: h, visualizationRef: y } = (0, c.W)({ disabled: u, minWidth: 560 }),
            p = h ? 204 : 224,
            j = S(a, i.values.successionType),
            k = ((e, s, a) => {
              if ("primary" === s)
                switch (a) {
                  case "start":
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.organisms.bareRock",
                      defaultMessage: "Bare rock",
                    })
                  case "pioneers":
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.organisms.lichensMosses",
                      defaultMessage: "Lichens and mosses",
                    })
                  case "grasses":
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.organisms.grassesHerbs",
                      defaultMessage: "Grasses and herbs",
                    })
                  case "shrubs":
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.organisms.shrubsYoungTrees",
                      defaultMessage: "Shrubs and young trees",
                    })
                  case "trees":
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.organisms.layeredForest",
                      defaultMessage: "Layered forest",
                    })
                }
              switch (a) {
                case "start":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.organisms.disturbedSoil",
                    defaultMessage: "Soil remains",
                  })
                case "pioneers":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.organisms.annualsSprouts",
                    defaultMessage: "Early colonizers and sprouts",
                  })
                case "grasses":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.organisms.grassesPerennials",
                    defaultMessage: "Grasses and perennials",
                  })
                case "shrubs":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.organisms.shrubsFastTrees",
                    defaultMessage: "Shrubs and fast-growing trees",
                  })
                case "trees":
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.organisms.recoveringForest",
                    defaultMessage: "Recovering forest",
                  })
              }
            })(a, i.values.successionType, i.stage.key),
            B = ((e, s, a) => {
              if (0 === a)
                return e.formatMessage({
                  id: "learningBlock.ecologicalSuccession.time.initialState",
                  defaultMessage: "Initial state",
                })
              if ("primary" === s)
                switch (a) {
                  case 1:
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.time.primaryPioneers",
                      defaultMessage: "Years to decades",
                    })
                  case 2:
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.time.primaryGrasses",
                      defaultMessage: "Decades or longer",
                    })
                  case 3:
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.time.primaryShrubs",
                      defaultMessage: "Decades to centuries",
                    })
                  default:
                    return e.formatMessage({
                      id: "learningBlock.ecologicalSuccession.time.primaryTrees",
                      defaultMessage: "Often centuries",
                    })
                }
              switch (a) {
                case 1:
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.time.secondaryPioneers",
                    defaultMessage: "Months to years",
                  })
                case 2:
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.time.secondaryGrasses",
                    defaultMessage: "Years",
                  })
                case 3:
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.time.secondaryShrubs",
                    defaultMessage: "Years to decades",
                  })
                default:
                  return e.formatMessage({
                    id: "learningBlock.ecologicalSuccession.time.secondaryTrees",
                    defaultMessage: "Decades or longer",
                  })
              }
            })(a, i.values.successionType, i.values.stageIndex),
            T = a.formatMessage({ id: "learningBlock.ecologicalSuccession.metric.soil", defaultMessage: "Soil depth" }),
            Y = a.formatMessage({ id: "learningBlock.ecologicalSuccession.metric.biomass", defaultMessage: "Biomass" }),
            L = a.formatMessage({
              id: "learningBlock.ecologicalSuccession.metric.structure",
              defaultMessage: "Layers",
            }),
            W = 48 + (i.values.stageIndex - g.se.min) * 72,
            _ = 48 + 72 * (g.$N - 1),
            $ = a.formatMessage(
              {
                id: "learningBlock.ecologicalSuccession.visualizationAriaLabel",
                defaultMessage:
                  "{path}, illustrative stage {stageNumber, number} of {stageCount, number}: {stageLabel}. Time: {timeLabel}. Scene: {organisms}. Relative soil depth: {soilLevel}; biomass: {biomassLevel}; community structure: {structureLevel}.",
              },
              {
                path: j,
                stageNumber: i.values.stageIndex - g.se.min + 1,
                stageCount: g.$N,
                stageLabel: v(a, i.stage.key),
                timeLabel: B,
                organisms: k,
                soilLevel: w(a, i.stage.soil),
                biomassLevel: w(a, i.stage.biomass),
                structureLevel: w(a, i.stage.structure),
              },
            )
          return (0, r.jsx)("div", {
            ref: y,
            "data-learning-block-wide-width": u ? void 0 : "full",
            className: `flex w-full items-center justify-center ${u ? "h-full" : h ? "learning-block-wide-no-top-padding h-[240px] px-6 pb-3" : "learning-block-wide-no-top-padding h-[280px] px-4 pb-3"}`,
            children: (0, r.jsxs)("svg", {
              width: "100%",
              height: "100%",
              viewBox: u ? "0 32 384 224" : h ? "0 0 600 240" : "0 0 384 320",
              role: "img",
              "aria-label": $,
              className: "h-full w-full",
              "data-succession-type": i.values.successionType,
              "data-succession-stage": i.stage.key,
              children: [
                (0, r.jsx)("defs", {
                  children: (0, r.jsx)("clipPath", {
                    id: `${o}-scene`,
                    children: (0, r.jsx)("rect", { x: 24, y: 56, width: 336, height: 144 }),
                  }),
                }),
                (0, r.jsx)("rect", {
                  x: 24,
                  y: 56,
                  width: 336,
                  height: 144,
                  fill: "color-mix(in srgb, var(--blue-300, #66b5ff) 18%, transparent)",
                }),
                (0, r.jsx)("g", {
                  clipPath: `url(#${o}-scene)`,
                  children: (0, r.jsx)(F, {
                    successionType: i.values.successionType,
                    stageIndex: i.values.stageIndex,
                    soilDepth: i.stage.soilDepth,
                  }),
                }),
                u
                  ? null
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(M, { x: 24, y: 4, width: 152, height: 48, text: k, emphasized: !0 }),
                        (0, r.jsx)(M, { x: 200, y: 4, width: 112, height: 48, text: B }),
                      ],
                    }),
                (0, r.jsx)(n.SY, { from: { x: W, y: p }, to: { x: _, y: p }, color: d, strokeWidth: 2 }),
                (0, r.jsx)(n.SY, { from: { x: 48, y: p }, to: { x: W, y: p }, color: x, strokeWidth: 2 }),
                b.map((e, s) => {
                  let l = 48 + 72 * s,
                    t = s + g.se.min,
                    o = t === i.values.stageIndex,
                    c = t < i.values.stageIndex
                  return (0, r.jsxs)(
                    "g",
                    {
                      children: [
                        (0, r.jsx)("circle", {
                          cx: l,
                          cy: p,
                          r: o ? 8 : 4,
                          fill: o || c ? x : d,
                          fillOpacity: o || c ? 1 : 0.55,
                        }),
                        o
                          ? (0, r.jsx)("circle", {
                              cx: l,
                              cy: p,
                              r: 4,
                              fill: "var(--learning-block-visualization-surface, var(--bg-primary, #ffffff))",
                            })
                          : null,
                        u
                          ? null
                          : (0, r.jsx)(M, {
                              x: l - 34,
                              y: h ? 208 : 236,
                              width: 68,
                              height: h ? 30 : 32,
                              text: v(a, e),
                              emphasized: o,
                            }),
                      ],
                    },
                    e,
                  )
                }),
                u
                  ? null
                  : (0, r.jsx)(r.Fragment, {
                      children: h
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(C, {
                                centerX: 462,
                                label: T,
                                value: i.stage.soil,
                                color: m,
                                labelY: 40,
                                barY: 78,
                                labelWidth: 168,
                                labelHeight: 36,
                              }),
                              (0, r.jsx)(C, {
                                centerX: 462,
                                label: Y,
                                value: i.stage.biomass,
                                color: f,
                                labelY: 92,
                                barY: 130,
                                labelWidth: 168,
                                labelHeight: 36,
                              }),
                              (0, r.jsx)(C, {
                                centerX: 462,
                                label: L,
                                value: i.stage.structure,
                                color: x,
                                labelY: 144,
                                barY: 182,
                                labelWidth: 168,
                                labelHeight: 36,
                              }),
                            ],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(C, { centerX: 80, label: T, value: i.stage.soil, color: m }),
                              (0, r.jsx)(C, { centerX: 192, label: Y, value: i.stage.biomass, color: f }),
                              (0, r.jsx)(C, { centerX: 304, label: L, value: i.stage.structure, color: x }),
                            ],
                          }),
                    }),
              ],
            }),
          })
        },
      },
    )
  },
  rGpP(e, s, a) {
    var r = a("zd8w")
    a.d(
      s,
      {},
      {
        W: ({ disabled: e = !1, minWidth: s = 448 } = {}) => {
          let [a, l] = (0, r.useState)(null),
            [t, o] = (0, r.useState)(!1),
            i = (0, r.useCallback)((e) => {
              l(e)
            }, [])
          return (
            (0, r.useEffect)(() => {
              if (e || null == a) return void o(!1)
              let r = (e) => {
                e > 0 && o(e >= s)
              }
              if ((r(a.getBoundingClientRect().width), "u" < typeof ResizeObserver)) return
              let l = new ResizeObserver(([e]) => {
                e && r(e.contentRect.width)
              })
              return (l.observe(a), () => l.disconnect())
            }, [e, s, a]),
            { isWideLayout: t, visualizationRef: i }
          )
        },
      },
    )
  },
}
//# sourceMappingURL=200353.a268cb7b3f.js.map
