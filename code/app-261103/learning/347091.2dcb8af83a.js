export const __rspack_esm_ids = [347091]
export const __webpack_modules__ = {
  cTgx(e, a, i) {
    var t = i("ABep"),
      l = i("Qgfj"),
      s = i("Wf1j"),
      r = i("oyxz"),
      n = i("KwmQ"),
      o = i("sKwe"),
      d = i("LP6J"),
      u = i("tkCL")
    let c = (e, a, i = !1) =>
        a.replace(/-?\d+(?:\.\d+)?/g, (a) => {
          let t = e.formatNumber(Number(a), { maximumSignificantDigits: 4, useGrouping: !1 })
          return i ? t.replaceAll(",", "{,}") : t
        }),
      m = (0, l.YK)({
        radius: { id: "learningBlock.multivariable.state.radius", defaultMessage: "radius" },
        divergence: { id: "learningBlock.multivariable.state.divergence", defaultMessage: "divergence" },
        outwardFlux: { id: "learningBlock.multivariable.state.outwardFlux", defaultMessage: "outward flux" },
        circulation: { id: "learningBlock.multivariable.state.circulation", defaultMessage: "circulation" },
        curl: { id: "learningBlock.multivariable.state.curl", defaultMessage: "curl" },
        pathProgress: { id: "learningBlock.multivariable.state.pathProgress", defaultMessage: "path progress" },
        work: { id: "learningBlock.multivariable.state.work", defaultMessage: "work" },
        scale: { id: "learningBlock.multivariable.state.scale", defaultMessage: "scale" },
        shear: { id: "learningBlock.multivariable.state.shear", defaultMessage: "shear" },
        areaFactor: { id: "learningBlock.multivariable.state.areaFactor", defaultMessage: "area factor" },
        bound: { id: "learningBlock.multivariable.state.bound", defaultMessage: "bound" },
        verticalSlice: { id: "learningBlock.multivariable.state.verticalSlice", defaultMessage: "vertical slice" },
        horizontalSlice: {
          id: "learningBlock.multivariable.state.horizontalSlice",
          defaultMessage: "horizontal slice",
        },
        angle: { id: "learningBlock.multivariable.state.angle", defaultMessage: "angle" },
        distance: { id: "learningBlock.multivariable.state.distance", defaultMessage: "distance" },
        straight: { id: "learningBlock.multivariable.state.straight", defaultMessage: "straight" },
        curved: { id: "learningBlock.multivariable.state.curved", defaultMessage: "curved" },
        intersection: { id: "learningBlock.multivariable.state.intersection", defaultMessage: "intersection" },
        contact: { id: "learningBlock.multivariable.state.contact", defaultMessage: "contact" },
        level: { id: "learningBlock.multivariable.state.level", defaultMessage: "level" },
        contourRadius: { id: "learningBlock.multivariable.state.contourRadius", defaultMessage: "contour radius" },
        verticalRisePerRadian: {
          id: "learningBlock.multivariable.state.verticalRisePerRadian",
          defaultMessage: "vertical rise per radian",
        },
        tilt: { id: "learningBlock.multivariable.state.tilt", defaultMessage: "tilt" },
        orientation: { id: "learningBlock.multivariable.state.orientation", defaultMessage: "orientation" },
        positive: { id: "learningBlock.multivariable.state.positive", defaultMessage: "positive" },
        negative: { id: "learningBlock.multivariable.state.negative", defaultMessage: "negative" },
        source: { id: "learningBlock.multivariable.state.source", defaultMessage: "source" },
        sink: { id: "learningBlock.multivariable.state.sink", defaultMessage: "sink" },
        rotation: { id: "learningBlock.multivariable.state.rotation", defaultMessage: "rotation" },
        saddle: { id: "learningBlock.multivariable.state.saddle", defaultMessage: "saddle" },
      }),
      g = {
        radius: m.radius,
        divergence: m.divergence,
        "outward flux": m.outwardFlux,
        circulation: m.circulation,
        curl: m.curl,
        "path progress": m.pathProgress,
        work: m.work,
        scale: m.scale,
        shear: m.shear,
        "area factor": m.areaFactor,
        bound: m.bound,
        "vertical slice": m.verticalSlice,
        "horizontal slice": m.horizontalSlice,
        angle: m.angle,
        distance: m.distance,
        straight: m.straight,
        curved: m.curved,
        intersection: m.intersection,
        contact: m.contact,
        level: m.level,
        "contour radius": m.contourRadius,
        "vertical rise per radian": m.verticalRisePerRadian,
        tilt: m.tilt,
        orientation: m.orientation,
        positive: m.positive,
        negative: m.negative,
        source: m.source,
        sink: m.sink,
        rotation: m.rotation,
        saddle: m.saddle,
      },
      v = (e, a) => {
        let i = a
          .replace(/(^|[,;]\s*)([a-z][a-z -]*)(?==)/g, (a, i, t) => {
            let l = g[t]
            return l ? `${i}${e.formatMessage(l)}` : a
          })
          .replace(/(^|=)(positive|negative|source|sink|rotation|saddle)(?=[,;]|$)/g, (a, i, t) => {
            let l = g[t]
            return l ? `${i}${e.formatMessage(l)}` : a
          })
        return c(e, i)
      }
    i.d(
      a,
      {},
      {
        AT: ({ definition: e, values: a, setValues: i }) => {
          let l = (0, s.A)(),
            u = (0, d.Z7)(l)
          return (0, t.jsx)(n.Ur, {
            screenReaderContent: (0, t.jsx)(r.A, {
              id: "learningBlock.multivariable.controlsDescription",
              defaultMessage:
                "Adjust the available values to update the geometric visualization and its mathematical result.",
            }),
            children: (0, t.jsx)(o.J, {
              inputs: e.fields.map((e) => {
                let t = l.formatMessage(e.label)
                if (e.options) {
                  let s = Math.max(
                    0,
                    e.options.findIndex((i) => i.value === a[e.key]),
                  )
                  return {
                    min: 0,
                    max: e.options.length - 1,
                    step: 1,
                    value: s,
                    ariaLabel: t,
                    options: e.options.map((e, a) => ({ value: a, label: l.formatMessage(e.label) })),
                    onChange: (t) =>
                      i(
                        (i) => ({ ...i, [e.key]: e.options?.[t]?.value ?? a[e.key] }),
                        "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                      ),
                  }
                }
                return {
                  ...u,
                  min: e.min,
                  max: e.max,
                  step: e.step,
                  value: Number(a[e.key]),
                  variable: e.variable ?? t,
                  variableFormat: e.variable ? "katex" : "text",
                  ariaLabel: t,
                  onChange: (a) => i((i) => ({ ...i, [e.key]: a }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
                }
              }),
            }),
          })
        },
        _I: ({ definition: e, values: a, captionClassName: i }) => {
          let l = (0, s.A)(),
            r = e.analyze(a)
          return (0, t.jsx)(n.Vq, {
            children: (0, t.jsx)(n.OZ, { className: i, format: "katex", content: c(l, r.formula, !0) }),
          })
        },
        mx: ({ definition: e, values: a, presentationMode: i }) => {
          let l = (0, s.A)(),
            r = e.analyze(a),
            n = l.formatMessage(
              {
                id: "learningBlock.multivariable.visualizationAriaLabel",
                defaultMessage: "{title}. {description}. Current mathematical state: {state}.",
              },
              { title: l.formatMessage(e.title), description: l.formatMessage(e.description), state: v(l, r.state) },
            )
          return (0, t.jsx)(u.P, { ariaLabel: n, scene: r.scene, presentationMode: i })
        },
        ol: v,
      },
    )
  },
  Ks2l(e, a, i) {
    var t = i("ABep"),
      l = i("Qgfj"),
      s = i("Wf1j"),
      r = i("oyxz"),
      n = i("cTgx"),
      o = i("KwmQ"),
      d = i("pNxJ"),
      u = i("LP6J"),
      c = i("tkCL"),
      m = i("OAGK"),
      g = i("K2UM")
    let v = (0, l.YK)({
        title: {
          id: "learningBlock.multivariableLimitPaths.title",
          defaultMessage: "Evaluating a multivariable limit",
        },
        description: {
          id: "learningBlock.multivariableLimitPaths.description",
          defaultMessage: "Compare unequal approach paths or shrink a full neighborhood around the origin",
        },
        mode: { id: "learningBlock.multivariableLimitPaths.mode", defaultMessage: "Limit behavior" },
        exists: { id: "learningBlock.multivariableLimitPaths.option.exists", defaultMessage: "Exists" },
        dne: { id: "learningBlock.multivariableLimitPaths.option.dne", defaultMessage: "DNE" },
        path: { id: "learningBlock.multivariableLimitPaths.path", defaultMessage: "Approach along" },
        xAxisPath: { id: "learningBlock.multivariableLimitPaths.option.yZero", defaultMessage: "y = 0" },
        yAxisPath: { id: "learningBlock.multivariableLimitPaths.option.xZero", defaultMessage: "x = 0" },
        distance: { id: "learningBlock.multivariableLimitPaths.distance", defaultMessage: "Distance from the origin" },
        xCoordinate: {
          id: "learningBlock.multivariableLimitPaths.xCoordinate",
          defaultMessage: "x coordinate along y equals zero",
        },
        yCoordinate: {
          id: "learningBlock.multivariableLimitPaths.yCoordinate",
          defaultMessage: "y coordinate along x equals zero",
        },
        radiusTowardZero: {
          id: "learningBlock.multivariableLimitPaths.radiusTowardZero",
          defaultMessage: "Radius {radius}; move right toward zero",
        },
        coordinateTowardZero: {
          id: "learningBlock.multivariableLimitPaths.coordinateTowardZero",
          defaultMessage: "{variable} {coordinate}; move right toward zero",
        },
        dneVisualization: {
          id: "learningBlock.multivariableLimitPaths.dneVisualization",
          defaultMessage:
            "Three-dimensional surface with an undefined origin. Along y equals zero the limiting height is 1; along x equals zero the limiting height is minus 1. On the selected path {path}, {variable} is {coordinate} and its limiting height is {value}. Different paths give different answers, so the limit does not exist.",
        },
        existsVisualization: {
          id: "learningBlock.multivariableLimitPaths.existsVisualization",
          defaultMessage:
            "Three-dimensional surface with a highlighted circle of radius {distance} around the origin. Substituting polar coordinates gives r squared times cosine squared theta times sine squared theta, with evaluated height {value}. As the entire neighborhood shrinks, every approach direction converges to height 0, so the limit exists.",
        },
      }),
      h = {
        key: "mode",
        label: v.mode,
        min: 0,
        max: 1,
        step: 1,
        options: [
          { value: "exists", label: v.exists },
          { value: "dne", label: v.dne },
        ],
      },
      p = {
        key: "path",
        label: v.path,
        min: 0,
        max: 1,
        step: 1,
        options: [
          { value: "y-zero", label: v.xAxisPath },
          { value: "x-zero", label: v.yAxisPath },
        ],
      },
      b = {
        key: "distance",
        label: v.distance,
        variable: "r",
        min: g.parameters.distance.min,
        max: g.parameters.distance.max,
        step: 0.01,
      },
      f = { title: v.title, description: v.description, fields: [h, p, b], analyze: m.hA },
      x = { "y-zero": v.xAxisPath, "x-zero": v.yAxisPath }
    i.d(
      a,
      {},
      {
        MultivariableLimitPathsCaption: (e) =>
          (0, t.jsx)(n._I, { captionClassName: "text-base leading-6", definition: f, ...e }),
        MultivariableLimitPathsControls: (e) => {
          let a = (0, m.qx)(e.values),
            i = (0, s.A)()
          if ("exists" === a.mode) {
            let l = (0, u.Z7)(i),
              s = g.parameters.distance.max
            return (0, t.jsx)(o.Ur, {
              screenReaderContent: (0, t.jsx)(r.A, {
                id: "learningBlock.multivariableLimitPaths.existsControlsDescription",
                defaultMessage: "Move the radius slider right to shrink every approach direction toward zero.",
              }),
              children: (0, t.jsx)(d.J, {
                inputs: [
                  {
                    min: 0,
                    max: 1,
                    step: 1,
                    value: 0,
                    ariaLabel: i.formatMessage(v.mode),
                    options: h.options?.map((e, a) => ({ value: a, label: i.formatMessage(e.label) })),
                    onChange: (a) =>
                      e.setValues(
                        (e) => ({ ...e, mode: 0 === a ? "exists" : "dne" }),
                        "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                      ),
                  },
                  (0, d.b)(
                    "distance",
                    { variable: "r", variableFormat: "katex", min: 0, max: s, step: b.step },
                    a,
                    e.setValues,
                    {
                      ...l,
                      value: s - a.distance,
                      displayValue: a.distance,
                      mapValue: (e) => s - e,
                      parseInputValue: (e) => s - l.parseInputValue(e),
                      ariaLabel: i.formatMessage(v.distance),
                      ariaValueText: i.formatMessage(v.radiusTowardZero, {
                        radius: i.formatNumber(a.distance, { maximumFractionDigits: 3 }),
                      }),
                    },
                  ),
                ],
              }),
            })
          }
          let l = (0, u.Z7)(i),
            n = Math.min(a.distance, 1),
            c = "y-zero" === a.path ? "x" : "y",
            f = "y-zero" === a.path ? v.xCoordinate : v.yCoordinate
          return (0, t.jsx)(o.Ur, {
            screenReaderContent: (0, t.jsx)(r.A, {
              id: "learningBlock.multivariableLimitPaths.dneControlsDescription",
              defaultMessage: "Choose an approach path, then move its coordinate slider right from one toward zero.",
            }),
            children: (0, t.jsx)(d.J, {
              inputs: [
                {
                  min: 0,
                  max: 1,
                  step: 1,
                  value: 1,
                  ariaLabel: i.formatMessage(v.mode),
                  options: h.options?.map((e, a) => ({ value: a, label: i.formatMessage(e.label) })),
                  onChange: (a) =>
                    e.setValues(
                      (e) => ({ ...e, mode: 0 === a ? "exists" : "dne" }),
                      "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                    ),
                },
                {
                  min: 0,
                  max: 1,
                  step: 1,
                  value: +("y-zero" !== a.path),
                  ariaLabel: i.formatMessage(v.path),
                  options: p.options?.map((e, a) => ({ value: a, label: i.formatMessage(e.label) })),
                  onChange: (a) =>
                    e.setValues(
                      (e) => ({ ...e, path: 0 === a ? "y-zero" : "x-zero" }),
                      "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                    ),
                },
                (0, d.b)(
                  "distance",
                  { variable: c, variableFormat: "katex", min: 0, max: 1, step: b.step },
                  a,
                  e.setValues,
                  {
                    ...l,
                    value: 1 - n,
                    displayValue: n,
                    mapValue: (e) => 1 - e,
                    parseInputValue: (e) => 1 - l.parseInputValue(e),
                    ariaLabel: i.formatMessage(f),
                    ariaValueText: i.formatMessage(v.coordinateTowardZero, {
                      variable: c,
                      coordinate: i.formatNumber(n, { maximumFractionDigits: 3 }),
                    }),
                  },
                ),
              ],
            }),
          })
        },
        MultivariableLimitPathsVisualization: ({ values: e, presentationMode: a }) => {
          let i = (0, s.A)(),
            l = (0, m.hA)(e),
            r =
              "exists" === l.mode
                ? i.formatMessage(v.existsVisualization, {
                    distance: i.formatNumber(l.distance, { maximumFractionDigits: 3 }),
                    value: i.formatNumber(l.selectedValue, { maximumFractionDigits: 3 }),
                  })
                : i.formatMessage(v.dneVisualization, {
                    path: i.formatMessage(x[l.path]),
                    variable: "y-zero" === l.path ? "x" : "y",
                    coordinate: i.formatNumber(l.distance, { maximumFractionDigits: 3 }),
                    value: i.formatNumber(l.selectedValue, { maximumFractionDigits: 3 }),
                  })
          return (0, t.jsx)(c.P, { ariaLabel: r, scene: l.scene, presentationMode: a })
        },
      },
    )
  },
}
//# sourceMappingURL=347091.2dcb8af83a.js.map
