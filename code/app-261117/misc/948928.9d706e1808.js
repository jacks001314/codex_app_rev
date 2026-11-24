export const __rspack_esm_ids = [948928]
export const __webpack_modules__ = {
  BN33(e, l, r) {
    r.d(l, { Caption: () => E, Controls: () => S, Visualization: () => _ })
    var a = r("ABep"),
      o = r("on57"),
      s = r("Qgfj"),
      n = r("Wf1j"),
      i = r("KwmQ"),
      t = r("pXKw"),
      c = r("pNxJ"),
      g = r("JOpY"),
      d = r("KIsW"),
      m = "visual-pO5gOl",
      u = "scene-GGHElS",
      h = "related-VToubg",
      p = "active-vWltd1",
      f = "context-HAzDCb"
    let x = [
        "nucleus",
        "ribosomes",
        "rough-er",
        "smooth-er",
        "golgi",
        "mitochondria",
        "plasma-membrane",
        "cytoplasm",
        "lysosome",
      ],
      b = [...x.slice(0, 8), "cell-wall", "chloroplast", "central-vacuole"],
      y = ["nucleus", "ribosomes", "rough-er", "golgi"],
      v = (0, s.zR)({ id: "cell-organelles.vesicle", defaultMessage: "vesicle" }),
      k = [
        { message: (0, s.zR)({ id: "cell-organelles.nucleus", defaultMessage: "Nucleus" }), active: ["nucleus"] },
        {
          message: (0, s.zR)({ id: "cell-organelles.er-ribosomes", defaultMessage: "ribosomes on rough ER" }),
          active: ["ribosomes", "rough-er"],
        },
        { message: v, active: [] },
        { message: (0, s.zR)({ id: "cell-organelles.golgi", defaultMessage: "Golgi" }), active: ["golgi"] },
        { message: v, active: [] },
      ],
      M = {
        nucleus: (0, s.zR)({ id: "cell-organelles.nucleus", defaultMessage: "Nucleus" }),
        ribosomes: (0, s.zR)({ id: "cell-organelles.ribosomes", defaultMessage: "Ribosomes" }),
        "rough-er": (0, s.zR)({ id: "cell-organelles.rough-er", defaultMessage: "Rough ER" }),
        "smooth-er": (0, s.zR)({ id: "cell-organelles.smooth-er", defaultMessage: "Smooth ER" }),
        golgi: (0, s.zR)({ id: "cell-organelles.golgi", defaultMessage: "Golgi" }),
        mitochondria: (0, s.zR)({ id: "cell-organelles.mitochondria", defaultMessage: "Mitochondria" }),
        "plasma-membrane": (0, s.zR)({ id: "cell-organelles.plasma-membrane", defaultMessage: "Plasma membrane" }),
        cytoplasm: (0, s.zR)({ id: "cell-organelles.cytoplasm", defaultMessage: "Cytoplasm" }),
        lysosome: (0, s.zR)({ id: "cell-organelles.lysosome", defaultMessage: "Lysosome" }),
        "cell-wall": (0, s.zR)({ id: "cell-organelles.cell-wall", defaultMessage: "Cell wall" }),
        chloroplast: (0, s.zR)({ id: "cell-organelles.chloroplast", defaultMessage: "Chloroplast" }),
        "central-vacuole": (0, s.zR)({ id: "cell-organelles.central-vacuole", defaultMessage: "Central vacuole" }),
      },
      j = {
        nucleus: (0, s.zR)({
          id: "cell-organelles.feature-nucleus",
          defaultMessage: "nucleolus within the nuclear envelope",
        }),
        ribosomes: (0, s.zR)({
          id: "cell-organelles.feature-ribosomes",
          defaultMessage: "small dots, free or on rough ER",
        }),
        "rough-er": (0, s.zR)({
          id: "cell-organelles.feature-rough-er",
          defaultMessage: "folded membranes studded with ribosomes",
        }),
        "smooth-er": (0, s.zR)({ id: "cell-organelles.feature-smooth-er", defaultMessage: "smooth membrane tubules" }),
        golgi: (0, s.zR)({
          id: "cell-organelles.feature-golgi",
          defaultMessage: "stacked membranes with budding vesicles",
        }),
        mitochondria: (0, s.zR)({
          id: "cell-organelles.feature-mitochondria",
          defaultMessage: "inner membrane folded into cristae",
        }),
        "plasma-membrane": (0, s.zR)({
          id: "cell-organelles.feature-plasma-membrane",
          defaultMessage: "thin selective boundary around cytoplasm",
        }),
        cytoplasm: (0, s.zR)({
          id: "cell-organelles.feature-cytoplasm",
          defaultMessage: "fluid-filled space around organelles",
        }),
        lysosome: (0, s.zR)({ id: "cell-organelles.feature-lysosome", defaultMessage: "small enzyme-filled sac" }),
        "cell-wall": (0, s.zR)({
          id: "cell-organelles.feature-cell-wall",
          defaultMessage: "rigid outer layer beyond the membrane",
        }),
        chloroplast: (0, s.zR)({
          id: "cell-organelles.feature-chloroplast",
          defaultMessage: "internal stacks of photosynthetic membranes",
        }),
        "central-vacuole": (0, s.zR)({
          id: "cell-organelles.feature-central-vacuole",
          defaultMessage: "large fluid-filled central compartment",
        }),
      },
      C = {
        nucleus: (0, s.zR)({
          id: "cell-organelles.function-nucleus",
          defaultMessage: "Stores DNA; its instructions guide ribosomes to build proteins",
        }),
        ribosomes: (0, s.zR)({
          id: "cell-organelles.function-ribosomes",
          defaultMessage: "Build proteins; rough-ER ribosomes make many membrane and secreted proteins",
        }),
        "rough-er": (0, s.zR)({
          id: "cell-organelles.function-rough-er",
          defaultMessage: "Processes proteins from its ribosomes, then sends them in vesicles to the Golgi",
        }),
        "smooth-er": (0, s.zR)({
          id: "cell-organelles.function-smooth-er",
          defaultMessage: "Synthesizes lipids and has no attached ribosomes",
        }),
        golgi: (0, s.zR)({
          id: "cell-organelles.function-golgi",
          defaultMessage: "Modifies, sorts, and packages proteins into transport vesicles",
        }),
        mitochondria: (0, s.zR)({
          id: "cell-organelles.function-mitochondria",
          defaultMessage: "Carry out cellular respiration and supply ATP in animal and plant cells",
        }),
        "plasma-membrane": (0, s.zR)({
          id: "cell-organelles.function-plasma-membrane",
          defaultMessage: "Controls what enters and leaves through the selective cell boundary",
        }),
        cytoplasm: (0, s.zR)({
          id: "cell-organelles.function-cytoplasm",
          defaultMessage: "Surrounds the organelles; many cellular activities happen here",
        }),
        lysosome: (0, s.zR)({
          id: "cell-organelles.function-lysosome",
          defaultMessage: "Breaks down worn-out parts and other cellular material",
        }),
        "cell-wall": (0, s.zR)({
          id: "cell-organelles.function-cell-wall",
          defaultMessage: "Supports and protects the plant cell; the membrane just inside controls traffic",
        }),
        chloroplast: (0, s.zR)({
          id: "cell-organelles.function-chloroplast",
          defaultMessage: "Captures light for photosynthesis; plant mitochondria still carry out respiration",
        }),
        "central-vacuole": (0, s.zR)({
          id: "cell-organelles.function-central-vacuole",
          defaultMessage: "Stores water and other materials; helps maintain pressure and shape",
        }),
      },
      z = {
        nucleus: (0, s.zR)({ id: "cell-organelles.brief-function-nucleus", defaultMessage: "DNA storage" }),
        ribosomes: (0, s.zR)({ id: "cell-organelles.brief-function-ribosomes", defaultMessage: "Protein synthesis" }),
        "rough-er": (0, s.zR)({ id: "cell-organelles.brief-function-rough-er", defaultMessage: "Protein processing" }),
        "smooth-er": (0, s.zR)({ id: "cell-organelles.brief-function-smooth-er", defaultMessage: "Lipid synthesis" }),
        golgi: (0, s.zR)({ id: "cell-organelles.brief-function-golgi", defaultMessage: "Protein sorting" }),
        mitochondria: (0, s.zR)({
          id: "cell-organelles.brief-function-mitochondria",
          defaultMessage: "ATP production",
        }),
        "plasma-membrane": (0, s.zR)({
          id: "cell-organelles.brief-function-plasma-membrane",
          defaultMessage: "Selective barrier",
        }),
        cytoplasm: (0, s.zR)({ id: "cell-organelles.brief-function-cytoplasm", defaultMessage: "Reaction space" }),
        lysosome: (0, s.zR)({ id: "cell-organelles.brief-function-lysosome", defaultMessage: "Material breakdown" }),
        "cell-wall": (0, s.zR)({
          id: "cell-organelles.brief-function-cell-wall",
          defaultMessage: "Support and protection",
        }),
        chloroplast: (0, s.zR)({ id: "cell-organelles.brief-function-chloroplast", defaultMessage: "Photosynthesis" }),
        "central-vacuole": (0, s.zR)({
          id: "cell-organelles.brief-function-central-vacuole",
          defaultMessage: "Water storage",
        }),
      },
      R = (e) => {
        let l = "plant" === e.cell_type ? "plant" : "animal",
          r = "plant" === l ? b : x,
          a = Number.isFinite(e.selectedStructure)
            ? Math.max(0, Math.min(r.length - 1, Math.round(e.selectedStructure)))
            : 0
        return { cellType: l, structures: r, index: a, selected: r[a] }
      },
      w = {
        animal: {
          nucleus: { x: 225, y: 166 },
          ribosomes: { x: 283, y: 120 },
          "rough-er": { x: 279, y: 173 },
          "smooth-er": { x: 374, y: 112 },
          golgi: { x: 492, y: 229 },
          mitochondria: { x: 570, y: 117 },
          "plasma-membrane": { x: 681, y: 188 },
          cytoplasm: { x: 393, y: 181 },
          lysosome: { x: 615, y: 196 },
          "cell-wall": { x: 76, y: 188 },
          chloroplast: { x: 568, y: 89 },
          "central-vacuole": { x: 535, y: 151 },
        },
        plant: {
          nucleus: { x: 225, y: 166 },
          ribosomes: { x: 283, y: 120 },
          "rough-er": { x: 279, y: 173 },
          "smooth-er": { x: 374, y: 112 },
          golgi: { x: 492, y: 236 },
          mitochondria: { x: 363, y: 249 },
          "plasma-membrane": { x: 679, y: 170 },
          cytoplasm: { x: 393, y: 181 },
          lysosome: { x: 615, y: 196 },
          "cell-wall": { x: 68, y: 170 },
          chloroplast: { x: 568, y: 89 },
          "central-vacuole": { x: 535, y: 151 },
        },
      },
      W = (e, l, r = !1) => (0, o.A)(e === l ? p : r && y.includes(e) && y.includes(l) ? h : "muted-gTuQXu"),
      N = ({ color: e, points: l }) =>
        (0, a.jsx)(a.Fragment, {
          children: l.map(([l, r], o) => (0, a.jsx)("circle", { cx: l, cy: r, r: "2.6", fill: e }, `${l}-${r}-${o}`)),
        }),
      L = ({ x: e, y: l, rotate: r, scale: o = 1 }) =>
        (0, a.jsxs)("g", {
          transform: `translate(${e} ${l}) rotate(${r}) scale(${o})`,
          children: [
            (0, a.jsx)("ellipse", {
              cx: "0",
              cy: "0",
              rx: "47",
              ry: "22",
              fill: "color-mix(in srgb, var(--learning-block-color-third) 22%, var(--bg-primary))",
              stroke: "var(--learning-block-color-third)",
              strokeWidth: "2.6",
            }),
            (0, a.jsx)("path", {
              d: "M -37 0 C -31 -14,-23 13,-15 0 S 0 -14,8 0 S 23 14,38 0",
              fill: "none",
              stroke: "var(--learning-block-visualization-surface, var(--bg-primary))",
              strokeWidth: "2.2",
              strokeLinecap: "round",
            }),
            (0, a.jsx)("path", {
              d: "M -26 -10 L -21 -4 M -5 11 L 0 5 M 21 -11 L 24 -5",
              fill: "none",
              stroke: "var(--learning-block-visualization-surface, var(--bg-primary))",
              strokeWidth: "1.8",
              strokeLinecap: "round",
            }),
          ],
        }),
      A = ({ x: e, y: l, rotate: r, scale: o = 1 }) =>
        (0, a.jsxs)("g", {
          transform: `translate(${e} ${l}) rotate(${r}) scale(${o})`,
          children: [
            (0, a.jsx)("ellipse", {
              cx: "0",
              cy: "0",
              rx: "50",
              ry: "24",
              fill: "color-mix(in srgb, var(--learning-block-color-secondary) 18%, var(--bg-primary))",
              stroke: "var(--learning-block-color-secondary)",
              strokeWidth: "2.5",
            }),
            [-23, -8, 8, 23].map((e) =>
              (0, a.jsx)(
                "g",
                {
                  children: (0, a.jsx)("path", {
                    d: `M ${e - 6} -9 L ${e + 6} -9 M ${e - 7} -4 L ${e + 7} -4 M ${e - 7} 1 L ${e + 7} 1 M ${e - 6} 6 L ${e + 6} 6`,
                    fill: "none",
                    stroke: "var(--learning-block-visualization-surface, var(--bg-primary))",
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                  }),
                },
                e,
              ),
            ),
          ],
        }),
      T = ({ className: e, children: l }) => (0, a.jsx)("g", { className: e, children: l }),
      $ = ({ plant: e, selected: l }) =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            e
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("rect", {
                      x: "10",
                      y: "18",
                      width: "140",
                      height: "84",
                      rx: "15",
                      fill: "color-mix(in srgb, var(--learning-block-color-secondary) 10%, var(--bg-primary))",
                      stroke: "var(--learning-block-color-secondary)",
                      strokeWidth: "cell-wall" === l ? "3.2" : "2",
                    }),
                    (0, a.jsx)("rect", {
                      x: "15",
                      y: "23",
                      width: "130",
                      height: "74",
                      rx: "12",
                      fill: "color-mix(in srgb, var(--learning-block-color-companion) 8%, var(--bg-primary))",
                      stroke: "var(--learning-block-color-companion)",
                      strokeWidth: "plasma-membrane" === l ? "2.4" : "1.6",
                    }),
                    (0, a.jsx)("path", {
                      d: "M 94 39 C 110 34,133 38,136 49 L 136 66 C 133 77,112 82,95 77 C 87 71,86 47,94 39 Z",
                      fill: "color-mix(in srgb, var(--learning-block-color-companion) 18%, var(--bg-primary))",
                      stroke: "var(--learning-block-color-companion)",
                      strokeWidth: "central-vacuole" === l ? "2.5" : "1.6",
                      className: W(l, "central-vacuole"),
                    }),
                  ],
                })
              : (0, a.jsx)("path", {
                  d: "M 12 62 C 7 36,31 18,60 20 C 88 15,126 18,142 35 C 153 51,149 79,132 91 C 110 105,72 96,46 100 C 25 103,14 88,12 62 Z",
                  fill: "color-mix(in srgb, var(--learning-block-color-companion) 9%, var(--bg-primary))",
                  stroke: "var(--learning-block-color-companion)",
                  strokeWidth: "plasma-membrane" === l ? "2.8" : "2",
                }),
            (0, a.jsx)("g", {
              className: W(l, "rough-er", !0),
              children: (0, a.jsx)("path", {
                d: "M 33 39 C 42 28,65 28,75 40 M 28 48 C 38 32,69 31,80 47 M 31 80 C 42 92,68 92,79 78",
                fill: "none",
                stroke: "var(--learning-block-color-primary)",
                strokeWidth: "2.4",
                strokeLinecap: "round",
              }),
            }),
            (0, a.jsx)("g", {
              className: W(l, "ribosomes", !0),
              children: [32, 42, 53, 65, 76].map((e, l) =>
                (0, a.jsx)(
                  "circle",
                  { cx: e, cy: 0 === l || 4 === l ? 46 : 38, r: "1.5", fill: "var(--learning-block-color-primary)" },
                  e,
                ),
              ),
            }),
            (0, a.jsxs)("g", {
              className: W(l, "nucleus", !0),
              children: [
                (0, a.jsx)("circle", {
                  cx: "55",
                  cy: "61",
                  r: "19",
                  fill: "color-mix(in srgb, var(--learning-block-color-primary) 24%, var(--bg-primary))",
                  stroke: "var(--learning-block-color-primary)",
                  strokeWidth: "2.2",
                }),
                (0, a.jsx)("circle", { cx: "57", cy: "61", r: "5", fill: "var(--learning-block-color-primary)" }),
              ],
            }),
            (0, a.jsx)("g", {
              className: W(l, "smooth-er"),
              children: (0, a.jsx)("path", {
                d: "M 81 34 C 88 29,99 32,103 38 M 81 42 C 88 37,97 40,102 46",
                fill: "none",
                stroke: "var(--learning-block-color-secondary)",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            }),
            (0, a.jsxs)("g", {
              className: W(l, "golgi", !0),
              children: [
                (0, a.jsx)("path", {
                  d: "M 85 84 C 94 77,110 77,119 83 M 84 89 C 94 82,110 82,121 88 M 85 94 C 95 88,109 88,120 93",
                  fill: "none",
                  stroke: "var(--learning-block-color-fourth)",
                  strokeWidth: "2.1",
                  strokeLinecap: "round",
                }),
                (0, a.jsx)("circle", { cx: "125", cy: "88", r: "2", fill: "var(--learning-block-color-fourth)" }),
              ],
            }),
            (0, a.jsxs)("g", {
              className: W(l, "mitochondria"),
              children: [
                (0, a.jsx)("ellipse", {
                  cx: e ? "30" : "123",
                  cy: e ? "78" : "57",
                  rx: "12",
                  ry: "6.5",
                  fill: "color-mix(in srgb, var(--learning-block-color-third) 24%, var(--bg-primary))",
                  stroke: "var(--learning-block-color-third)",
                  strokeWidth: "1.7",
                }),
                (0, a.jsx)("path", {
                  d: e ? "M 21 78 L 25 75 L 29 80 L 33 75 L 39 78" : "M 114 57 L 118 54 L 122 59 L 127 54 L 132 57",
                  fill: "none",
                  stroke: "var(--learning-block-visualization-surface, var(--bg-primary))",
                  strokeWidth: "1.4",
                  strokeLinecap: "round",
                }),
              ],
            }),
            e
              ? (0, a.jsxs)("g", {
                  className: W(l, "chloroplast"),
                  children: [
                    (0, a.jsx)("ellipse", {
                      cx: "121",
                      cy: "29",
                      rx: "15",
                      ry: "6.5",
                      fill: "color-mix(in srgb, var(--learning-block-color-secondary) 22%, var(--bg-primary))",
                      stroke: "var(--learning-block-color-secondary)",
                      strokeWidth: "1.7",
                    }),
                    (0, a.jsx)("path", {
                      d: "M 113 27 L 129 27 M 111 29 L 131 29 M 113 31 L 129 31",
                      fill: "none",
                      stroke: "var(--learning-block-visualization-surface, var(--bg-primary))",
                      strokeWidth: "1.1",
                      strokeLinecap: "round",
                    }),
                  ],
                })
              : (0, a.jsx)("g", {
                  className: W(l, "lysosome"),
                  children: (0, a.jsx)("circle", {
                    cx: "129",
                    cy: "77",
                    r: "5.5",
                    fill: "color-mix(in srgb, var(--learning-block-color-fourth) 20%, var(--bg-primary))",
                    stroke: "var(--learning-block-color-fourth)",
                    strokeWidth: "1.6",
                  }),
                }),
          ],
        }),
      _ = ({ values: e, presentationMode: l = "standard" }) => {
        let r,
          s,
          i,
          t,
          c,
          x = (0, n.A)(),
          { cellType: b, selected: v } = R(e),
          _ = "plant" === b,
          S = y.includes(v) && "thumbnail" !== l,
          E = x.formatMessage(
            { id: "cell-organelles.anchored-label", defaultMessage: "{structure} \xb7 {functionText}" },
            { structure: ((r = M[v]), x.formatMessage(r)), functionText: ((s = z[v]), x.formatMessage(s)) },
          ),
          P = x.formatMessage(
            {
              id: "cell-organelles.visual-aria",
              defaultMessage:
                "Typical {cellType} cell cutaway. Selected: {structure}; {feature}. {functionText}. {pathText}",
            },
            {
              cellType: _
                ? x.formatMessage({ id: "cell-organelles.plant", defaultMessage: "plant" })
                : x.formatMessage({ id: "cell-organelles.animal", defaultMessage: "animal" }),
              structure: ((i = M[v]), x.formatMessage(i)),
              feature: ((t = j[v]), x.formatMessage(t)),
              functionText: ((c = C[v]), x.formatMessage(c)),
              pathText: S
                ? x.formatMessage({
                    id: "cell-organelles.protein-path-aria",
                    defaultMessage:
                      "Protein path: nucleus to rough-ER ribosomes to a transport vesicle to the Golgi to a transport vesicle.",
                  })
                : "",
            },
          )
        return "thumbnail" === l
          ? (0, a.jsx)("div", {
              "data-learning-block-wide-width": "full",
              className: (0, o.A)(m, "thumbnail-TP0Swa", "text-token-text-primary"),
              role: "img",
              "aria-label": P,
              children: (0, a.jsx)("svg", {
                className: u,
                viewBox: "0 0 160 120",
                "aria-hidden": "true",
                children: (0, a.jsx)($, { plant: _, selected: v }),
              }),
            })
          : (0, a.jsxs)("div", {
              "data-learning-block-wide-width": "full",
              className: (0, o.A)(m, "text-token-text-primary"),
              role: "img",
              "aria-label": P,
              children: [
                (0, a.jsx)("svg", {
                  className: u,
                  viewBox: "0 0 760 330",
                  preserveAspectRatio: "xMidYMid meet",
                  "aria-hidden": "true",
                  children: (0, a.jsxs)("g", {
                    transform: "translate(0 26) scale(1 .9)",
                    children: [
                      _
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("rect", {
                                x: "68",
                                y: "49",
                                width: "624",
                                height: "241",
                                rx: "40",
                                fill: "color-mix(in srgb, var(--learning-block-color-secondary) 9%, var(--bg-primary))",
                                stroke: "var(--learning-block-color-secondary)",
                                strokeWidth: "cell-wall" === v ? "7" : "5",
                                className: "cell-wall" === v ? p : f,
                              }),
                              (0, a.jsx)("rect", {
                                x: "81",
                                y: "62",
                                width: "598",
                                height: "215",
                                rx: "31",
                                fill: `color-mix(in srgb, var(--learning-block-color-companion) ${"cytoplasm" === v ? "16%" : "7%"}, var(--bg-primary))`,
                                stroke: "var(--learning-block-color-companion)",
                                strokeWidth: "plasma-membrane" === v ? "4.5" : "2.4",
                                className: "plasma-membrane" === v ? p : f,
                              }),
                            ],
                          })
                        : (0, a.jsx)("path", {
                            d: "M 76 188 C 52 122,116 54,226 51 C 327 32,427 59,521 54 C 638 48,706 108,681 188 C 696 250,622 296,520 289 C 426 305,340 278,248 289 C 159 300,88 263,76 188 Z",
                            fill: `color-mix(in srgb, var(--learning-block-color-companion) ${"cytoplasm" === v ? "17%" : "8%"}, var(--bg-primary))`,
                            stroke: "var(--learning-block-color-companion)",
                            strokeWidth: "plasma-membrane" === v ? "4.5" : "2.8",
                            className: "plasma-membrane" === v || "cytoplasm" === v ? p : f,
                          }),
                      (0, a.jsx)(T, {
                        className: W(v, "cytoplasm"),
                        children: [
                          [121, 209],
                          [158, 123],
                          [218, 257],
                          [284, 80],
                          [393, 91],
                          [622, 214],
                        ].map(([e, l], r) =>
                          (0, a.jsx)(
                            "circle",
                            { cx: e, cy: l, r: "3.5", fill: "var(--learning-block-color-companion)" },
                            r,
                          ),
                        ),
                      }),
                      _
                        ? (0, a.jsx)(T, {
                            className: W(v, "central-vacuole"),
                            children: (0, a.jsx)("path", {
                              d: "M 439 111 C 494 91,619 97,637 128 C 650 154,643 182,620 198 C 594 212,482 211,445 201 C 421 192,411 169,414 144 C 416 129,423 117,439 111 Z",
                              fill: "color-mix(in srgb, var(--learning-block-color-companion) 15%, var(--bg-primary))",
                              stroke: "var(--learning-block-color-companion)",
                              strokeWidth: "central-vacuole" === v ? "3.6" : "2.2",
                            }),
                          })
                        : null,
                      (0, a.jsx)(T, {
                        className: W(v, "rough-er", !0),
                        children: [
                          "M 175 118 C 185 84,239 79,269 94 C 285 103,288 125,279 142",
                          "M 166 127 C 177 78,241 67,280 86 C 304 99,303 135,287 157",
                          "M 168 142 C 160 102,188 69,222 63",
                          "M 279 173 C 300 192,290 229,263 246 C 231 266,182 249,170 226",
                          "M 289 162 C 326 191,301 241,274 256",
                        ].map((e) =>
                          (0, a.jsx)(
                            "path",
                            {
                              d: e,
                              fill: "none",
                              stroke: "var(--learning-block-color-primary)",
                              strokeWidth: "4",
                              strokeLinecap: "round",
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, a.jsx)(T, {
                        className: W(v, "ribosomes", !0),
                        children: (0, a.jsx)(N, {
                          color: S ? "var(--learning-block-accent)" : "var(--learning-block-color-primary)",
                          points: [
                            [177, 119],
                            [189, 101],
                            [208, 91],
                            [229, 88],
                            [251, 91],
                            [271, 103],
                            [283, 120],
                            [282, 143],
                            [168, 131],
                            [171, 108],
                            [183, 88],
                            [205, 75],
                            [274, 87],
                            [293, 105],
                            [300, 128],
                            [295, 152],
                            [278, 179],
                            [289, 198],
                            [284, 220],
                            [265, 242],
                            [239, 252],
                            [210, 251],
                            [185, 240],
                            [172, 220],
                            [337, 115],
                            [365, 228],
                            [383, 207],
                            [132, 153],
                            [327, 260],
                          ],
                        }),
                      }),
                      (0, a.jsxs)(T, {
                        className: W(v, "nucleus", !0),
                        children: [
                          (0, a.jsx)("circle", {
                            cx: "225",
                            cy: "166",
                            r: "64",
                            fill: "color-mix(in srgb, var(--learning-block-color-primary) 22%, var(--bg-primary))",
                            stroke: "var(--learning-block-color-primary)",
                            strokeWidth: "nucleus" === v ? "3.6" : "2.4",
                          }),
                          (0, a.jsx)("circle", {
                            cx: "225",
                            cy: "166",
                            r: "52",
                            fill: "none",
                            stroke: "var(--learning-block-visualization-surface, var(--bg-primary))",
                            strokeWidth: "1.5",
                            strokeDasharray: "3 4",
                          }),
                          (0, a.jsx)("path", {
                            d: "M 190 149 C 200 135,209 153,219 143 S 237 157,248 143 M 190 178 C 203 160,216 194,229 175 S 247 193,260 174 M 199 202 C 212 188,221 207,238 198",
                            fill: "none",
                            stroke: "var(--learning-block-visualization-surface, var(--bg-primary))",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                          }),
                          (0, a.jsx)("circle", {
                            cx: "230",
                            cy: "168",
                            r: "13",
                            fill: "var(--learning-block-color-primary)",
                          }),
                        ],
                      }),
                      (0, a.jsx)(T, {
                        className: W(v, "smooth-er"),
                        children: [
                          "M 315 91 C 342 72,374 79,391 98 C 405 114,425 110,437 99",
                          "M 309 105 C 333 91,356 95,370 112 C 385 130,415 129,440 114",
                          "M 306 121 C 324 116,340 123,345 140 C 351 157,367 165,390 164",
                          "M 320 140 C 327 153,319 167,311 178",
                        ].map((e) =>
                          (0, a.jsx)(
                            "path",
                            {
                              d: e,
                              fill: "none",
                              stroke: "var(--learning-block-color-secondary)",
                              strokeWidth: "4.2",
                              strokeLinecap: "round",
                            },
                            e,
                          ),
                        ),
                      }),
                      S
                        ? (0, a.jsxs)("g", {
                            className: h,
                            children: [
                              (0, a.jsx)(d.z, {
                                path: "M 266 142 C 277 132,286 130,296 137",
                                endTangent: { from: { x: 287, y: 131 }, to: { x: 296, y: 137 } },
                                variant: "roundedArrowAccent",
                                strokeWidth: 2.5,
                              }),
                              (0, a.jsx)(d.z, {
                                path: "M 299 207 C 307 208,313 209,321 211",
                                endTangent: { from: { x: 313, y: 209 }, to: { x: 321, y: 211 } },
                                variant: "roundedArrowAccent",
                                strokeWidth: 2.5,
                              }),
                              (0, a.jsx)("circle", {
                                cx: "340",
                                cy: "215",
                                r: "9",
                                fill: "color-mix(in srgb, var(--learning-block-accent) 18%, var(--bg-primary))",
                                stroke: "var(--learning-block-accent)",
                                strokeWidth: "2",
                              }),
                              (0, a.jsx)(d.z, {
                                path: "M 352 215 C 373 215,393 217,416 222",
                                endTangent: { from: { x: 407, y: 220 }, to: { x: 416, y: 222 } },
                                variant: "roundedArrowAccent",
                                strokeWidth: 2.5,
                              }),
                              (0, a.jsx)(d.z, {
                                path: "M 555 236 C 566 234,576 230,585 225",
                                endTangent: { from: { x: 576, y: 230 }, to: { x: 585, y: 225 } },
                                variant: "roundedArrowAccent",
                                strokeWidth: 2.5,
                              }),
                              (0, a.jsx)("circle", {
                                cx: "601",
                                cy: "216",
                                r: "8",
                                fill: "color-mix(in srgb, var(--learning-block-accent) 18%, var(--bg-primary))",
                                stroke: "var(--learning-block-accent)",
                                strokeWidth: "2",
                              }),
                            ],
                          })
                        : null,
                      (0, a.jsxs)("g", {
                        className: W(v, "golgi", !0),
                        transform: _ ? "translate(42 47) scale(.9 .82)" : void 0,
                        children: [
                          [
                            "M 430 221 C 456 194,507 191,542 207",
                            "M 424 230 C 454 203,511 203,551 221",
                            "M 420 240 C 453 215,511 216,555 235",
                            "M 419 251 C 452 229,507 230,550 247",
                          ].map((e) =>
                            (0, a.jsx)(
                              "path",
                              {
                                d: e,
                                fill: "none",
                                stroke: "var(--learning-block-color-fourth)",
                                strokeWidth: "4.5",
                                strokeLinecap: "round",
                              },
                              e,
                            ),
                          ),
                          (0, a.jsx)("circle", {
                            cx: "563",
                            cy: "215",
                            r: "7",
                            fill: "color-mix(in srgb, var(--learning-block-color-fourth) 25%, var(--bg-primary))",
                            stroke: "var(--learning-block-color-fourth)",
                            strokeWidth: "1.8",
                          }),
                          (0, a.jsx)("circle", {
                            cx: "570",
                            cy: "237",
                            r: "5",
                            fill: "var(--learning-block-color-fourth)",
                          }),
                          (0, a.jsx)("circle", {
                            cx: "555",
                            cy: "255",
                            r: "4",
                            fill: "var(--learning-block-color-fourth)",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(T, {
                        className: W(v, "mitochondria"),
                        children: [
                          (0, a.jsx)(L, {
                            x: _ ? 131 : 367,
                            y: _ ? 221 : 247,
                            rotate: _ ? -20 : 8,
                            scale: _ ? 0.82 : 1,
                          }),
                          (0, a.jsx)(L, {
                            x: _ ? 363 : 570,
                            y: _ ? 249 : 117,
                            rotate: _ ? 6 : -17,
                            scale: _ ? 0.82 : 1,
                          }),
                        ],
                      }),
                      _
                        ? (0, a.jsxs)(T, {
                            className: W(v, "chloroplast"),
                            children: [
                              (0, a.jsx)(A, { x: 568, y: 89, rotate: 8, scale: 0.88 }),
                              (0, a.jsx)(A, { x: 620, y: 248, rotate: -8, scale: 0.88 }),
                            ],
                          })
                        : (0, a.jsxs)(T, {
                            className: W(v, "lysosome"),
                            children: [
                              (0, a.jsx)("circle", {
                                cx: "615",
                                cy: "196",
                                r: "20",
                                fill: "color-mix(in srgb, var(--learning-block-color-fourth) 15%, var(--bg-primary))",
                                stroke: "var(--learning-block-color-fourth)",
                                strokeWidth: "2.4",
                              }),
                              (0, a.jsx)("circle", {
                                cx: "607",
                                cy: "194",
                                r: "2.5",
                                fill: "var(--learning-block-color-fourth)",
                              }),
                              (0, a.jsx)("circle", {
                                cx: "620",
                                cy: "188",
                                r: "2.2",
                                fill: "var(--learning-block-color-fourth)",
                              }),
                              (0, a.jsx)("circle", {
                                cx: "620",
                                cy: "202",
                                r: "3",
                                fill: "var(--learning-block-color-fourth)",
                              }),
                            ],
                          }),
                      (0, a.jsx)(d.z, {
                        path: `M ${w[b][v].x} ${w[b][v].y} C ${w[b][v].x} 58, 380 48, 380 4`,
                        variant: "solidNeutral",
                        color: "var(--learning-block-accent)",
                        strokeWidth: 2.4,
                      }),
                      (0, a.jsx)("circle", {
                        cx: w[b][v].x,
                        cy: w[b][v].y,
                        r: "5.5",
                        fill: "var(--learning-block-visualization-surface, var(--bg-primary))",
                        stroke: "var(--learning-block-accent)",
                        strokeWidth: "2.6",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "callout-iCYSzr",
                  children: (0, a.jsx)(g.ac, {
                    contentStyle: { color: "var(--learning-block-tooltip-text)" },
                    fill: g._x,
                    pointerSide: "bottom",
                    children: (0, a.jsx)("span", { children: E }),
                  }),
                }),
                S
                  ? (0, a.jsx)("div", {
                      className: (0, o.A)("sequence-ZMrrh1", "text-xs"),
                      "aria-hidden": "true",
                      children: k.map((e, l) => {
                        let r
                        return (0, a.jsxs)(
                          "span",
                          {
                            className: (0, o.A)("sequenceItem-QHHG_9", e.active.includes(v) && "sequenceActive-LizzQA"),
                            children: [((r = e.message), x.formatMessage(r)), l < k.length - 1 ? " \u2192" : ""],
                          },
                          `${e.message.id}-${l}`,
                        )
                      }),
                    })
                  : null,
              ],
            })
      },
      S = ({ values: e, setValues: l }) => {
        let r = (0, n.A)(),
          { cellType: o, structures: s, index: g } = R(e),
          d = (0, t.xT)([
            { value: 0, label: r.formatMessage({ id: "cell-organelles.animal-option", defaultMessage: "Animal" }) },
            { value: 1, label: r.formatMessage({ id: "cell-organelles.plant-option", defaultMessage: "Plant" }) },
          ]),
          m = (0, t.xT)(
            s.map((e, l) => {
              let a
              return { value: l, label: ((a = M[e]), r.formatMessage(a)) }
            }),
          ),
          u = r.formatMessage({ id: "cell-organelles.structure-aria", defaultMessage: "Cell structure" })
        return (0, a.jsx)(i.Ur, {
          screenReaderContent: r.formatMessage({
            id: "cell-organelles.controls-help",
            defaultMessage: "Choose a cell type and a structure to locate it and learn its function.",
          }),
          children: (0, a.jsx)(c.J, {
            inputs: [
              {
                min: 0,
                max: 1,
                step: 1,
                value: +("plant" === o),
                options: d,
                ariaLabel: r.formatMessage({ id: "cell-organelles.cell-aria", defaultMessage: "Cell type" }),
                onChange: (e) =>
                  l((l) => {
                    var r
                    let a, o
                    return (
                      (r = 1 === e ? "plant" : "animal"),
                      (a = R(l)),
                      (o = ("plant" === r ? b : x).indexOf(a.selected)),
                      { ...l, cell_type: r, selectedStructure: o >= 0 ? o : 0 }
                    )
                  }, "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
              },
              {
                min: 0,
                max: s.length - 1,
                step: 1,
                value: g,
                options: m,
                ariaLabel: u,
                variable: u,
                onChange: (e) =>
                  l((l) => ({ ...l, selectedStructure: Math.round(e) }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
              },
            ],
          }),
        })
      },
      E = ({ values: e }) => {
        let l,
          r = (0, n.A)(),
          { selected: o } = R(e)
        return (0, a.jsx)(i.Vq, { children: (0, a.jsx)(i.OZ, { content: ((l = C[o]), r.formatMessage(l)) }) })
      }
  },
}
//# sourceMappingURL=948928.9d706e1808.js.map
