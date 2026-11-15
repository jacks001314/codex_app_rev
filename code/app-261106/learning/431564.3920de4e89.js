export const __rspack_esm_ids = [431564]
export const __webpack_modules__ = {
  dlk8(e, a, o) {
    o.d(a, {
      LoopBreakControlFlowCaption: () => T,
      LoopBreakControlFlowControls: () => j,
      LoopBreakControlFlowVisualization: () => N,
    })
    var t = o("ABep"),
      l = o("on57"),
      r = o("Wf1j"),
      s = o("HOSX"),
      n = o("KwmQ"),
      i = o("pXKw"),
      p = o("pNxJ"),
      d = o("JOpY"),
      c = o("KIsW"),
      u = o("pWXp")
    let k = u.parameters.break_value,
      h = u.parameters.loop_kind,
      f = u.parameters.loop_limit,
      g = (e, a, o) => Math.min(Math.max(e, a), o),
      m = (e) => Array.from({ length: e }, (e, a) => a + 1),
      x = (e) => {
        let a,
          o,
          t,
          l =
            ((a =
              "number" == typeof e.break_value && Number.isFinite(e.break_value)
                ? Math.round(e.break_value)
                : k.defaultValue),
            (o =
              "number" == typeof e.loop_limit && Number.isFinite(e.loop_limit)
                ? Math.round(e.loop_limit)
                : f.defaultValue),
            (t = "number" == typeof e.step && Number.isFinite(e.step) ? Math.max(0, Math.round(e.step)) : 0),
            {
              loop_kind: "for" === e.loop_kind || "while" === e.loop_kind ? e.loop_kind : h.defaultValue,
              loop_limit: g(o, f.min, f.max),
              break_value: g(a, k.min, k.max),
              step: t,
            }),
          r = m(l.loop_limit),
          s = ((e, a = f.defaultValue) => {
            let o = [{ phase: "entry" }]
            for (let t of m(a)) {
              ;(o.push({ phase: "test", value: t, outcome: !0 }), o.push({ phase: "body", value: t }))
              let a = t === e
              if ((o.push({ phase: "break-test", value: t, outcome: a }), a))
                return (o.push({ phase: "after", value: t, exit: "break" }), o)
              ;(o.push({ phase: "remaining", value: t }), o.push({ phase: "loop-back", value: t }))
            }
            return (o.push({ phase: "test", outcome: !1 }), o.push({ phase: "after", exit: "normal" }), o)
          })(l.break_value, l.loop_limit),
          n = Math.min(l.step, s.length - 1),
          i = s[n],
          p = s
            .slice(0, n + 1)
            .filter((e) => "remaining" === e.phase)
            .map((e) => e.value)
            .filter((e) => void 0 !== e),
          d = "after" === i.phase && "break" === i.exit,
          c = d ? r.filter((e) => e > l.break_value) : [],
          u = [0, ...s.flatMap((e, a) => ("break-test" === e.phase ? [a] : [])), s.length - 1],
          x = u.findLastIndex((e) => e <= n)
        return {
          ...l,
          step: n,
          current: i,
          steps: s,
          loopValues: r,
          checkpoints: u,
          checkpoint: x,
          completedValues: p,
          skippedValues: c,
          hasBroken: d,
          finished: "after" === i.phase,
        }
      },
      v = "var(--learning-block-accent)",
      b = "var(--learning-block-accent-surface)",
      y = "var(--learning-block-visualization-surface, var(--bg-primary))",
      M = (e, a) => e.formatNumber(a, { maximumFractionDigits: 0 }),
      B = (e, a) =>
        a.length > 0
          ? e.formatList(
              a.map((a) => M(e, a)),
              { type: "conjunction" },
            )
          : e.formatMessage({ id: "learningBlock.loopBreakControlFlow.values.none", defaultMessage: "none" }),
      w = (e, a, o) => {
        switch (a) {
          case "entry":
            return e.formatMessage({
              id: "learningBlock.loopBreakControlFlow.phase.entry",
              defaultMessage: "Enter the loop",
            })
          case "test":
            return void 0 === o
              ? e.formatMessage({
                  id: "learningBlock.loopBreakControlFlow.phase.test.false",
                  defaultMessage: "Loop test is false",
                })
              : e.formatMessage({
                  id: "learningBlock.loopBreakControlFlow.phase.test.true",
                  defaultMessage: "Loop test is true",
                })
          case "body":
            return e.formatMessage({
              id: "learningBlock.loopBreakControlFlow.phase.body",
              defaultMessage: "Start the loop body",
            })
          case "break-test":
            return e.formatMessage({
              id: "learningBlock.loopBreakControlFlow.phase.breakTest",
              defaultMessage: "Check the break condition",
            })
          case "remaining":
            return e.formatMessage({
              id: "learningBlock.loopBreakControlFlow.phase.remaining",
              defaultMessage: "Run the rest of the body",
            })
          case "loop-back":
            return e.formatMessage({
              id: "learningBlock.loopBreakControlFlow.phase.loopBack",
              defaultMessage: "Return to the loop test",
            })
          case "after":
            return e.formatMessage({
              id: "learningBlock.loopBreakControlFlow.phase.after",
              defaultMessage: "Continue after the loop",
            })
        }
      },
      C = ({ active: e, kind: a = "process", label: o, skipped: r = !1, x: s, y: n, width: i, height: p }) => {
        let d = e ? v : "var(--border-default)",
          c = e ? b : y
        return (0, t.jsxs)("div", {
          className: "absolute z-10",
          style: { height: p, left: `${(s / 600) * 100}%`, top: n, width: `${(i / 600) * 100}%` },
          children: [
            (0, t.jsx)("svg", {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
              preserveAspectRatio: "none",
              viewBox: `0 0 ${i} ${p}`,
              children:
                "decision" === a
                  ? (0, t.jsx)("polygon", {
                      fill: c,
                      points: `${i / 2},1 ${i - 1},${p / 2} ${i / 2},${p - 1} 1,${p / 2}`,
                      stroke: d,
                      strokeDasharray: r ? "4 3" : void 0,
                      strokeWidth: e ? 2 : 1.5,
                      vectorEffect: "non-scaling-stroke",
                    })
                  : (0, t.jsx)("rect", {
                      fill: c,
                      height: p - 2,
                      rx: "terminal" === a ? (p - 2) / 2 : 7,
                      stroke: d,
                      strokeDasharray: r ? "4 3" : void 0,
                      strokeWidth: e ? 2 : 1.5,
                      vectorEffect: "non-scaling-stroke",
                      width: i - 2,
                      x: 1,
                      y: 1,
                    }),
            }),
            (0, t.jsx)("div", {
              className: (0, l.A)(
                "relative flex h-full w-full items-center justify-center text-center text-xs leading-4",
                e
                  ? "text-token-text-primary font-semibold"
                  : r
                    ? "text-token-text-tertiary line-through decoration-1"
                    : "text-token-text-secondary",
                "decision" === a ? "px-2.5" : "px-1.5",
              ),
              children: o,
            }),
          ],
        })
      },
      _ = ({ active: e, points: a }) =>
        (0, t.jsx)(c.z, {
          color: e ? v : "var(--text-secondary)",
          opacity: e ? 1 : 0.72,
          points: a,
          strokeWidth: e ? 2.25 : 1.5,
          variant: "roundedArrowAccent",
          vectorEffect: "non-scaling-stroke",
        }),
      F = ({ active: e, label: a, x: o, y: r }) =>
        (0, t.jsx)(d.ac, {
          className: "absolute z-20 -translate-x-1/2 -translate-y-1/2",
          contentClassName: (0, l.A)(
            "text-xs",
            e ? "text-token-text-primary font-semibold" : "text-token-text-secondary",
          ),
          bodyHeight: 18,
          fill: y,
          paddingX: 4,
          pointerHeight: 0,
          pointerSide: "bottom",
          style: { left: `${(o / 600) * 100}%`, top: r },
          children: a,
        }),
      j = ({ values: e, setValues: a }) => {
        let o,
          l,
          d = (0, r.A)(),
          c = x(e),
          u = (0, i.xT)([
            {
              value: 0,
              label: d.formatMessage({
                id: "learningBlock.loopBreakControlFlow.option.early",
                defaultMessage: "Early match",
              }),
            },
            {
              value: 1,
              label: d.formatMessage({
                id: "learningBlock.loopBreakControlFlow.option.final",
                defaultMessage: "Later match",
              }),
            },
            {
              value: 2,
              label: d.formatMessage({
                id: "learningBlock.loopBreakControlFlow.option.never",
                defaultMessage: "No match",
              }),
            },
          ]),
          k = (e) =>
            a((a) => {
              let o = x(a)
              return {
                loop_kind: o.loop_kind,
                loop_limit: o.loop_limit,
                break_value: o.break_value,
                step: Math.min(Math.max(Math.round(e), 0), o.steps.length - 1),
              }
            }, "CHATGPT_MATH_BLOCK_EDIT_TYPE_ENTER_COMMIT")
        return (0, t.jsxs)(n.Ur, {
          screenReaderContent: d.formatMessage({
            id: "learningBlock.loopBreakControlFlow.controls.help",
            defaultMessage:
              "Choose a break condition, jump between iteration checkpoints, or move one execution step forward and backward.",
          }),
          children: [
            (0, t.jsx)(p.J, {
              inputs: [
                {
                  min: 0,
                  max: 2,
                  step: 1,
                  value: (o = c.break_value) > (l = c.loop_limit) ? 2 : +(o === l),
                  options: u,
                  ariaLabel: d.formatMessage({
                    id: "learningBlock.loopBreakControlFlow.controls.scenario",
                    defaultMessage: "Break condition outcome",
                  }),
                  onChange: (e) => {
                    let o = 0 === e ? 2 : 1 === e ? c.loop_limit : c.loop_limit + 1
                    a(
                      { loop_kind: c.loop_kind, loop_limit: c.loop_limit, break_value: o, step: 0 },
                      "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                    )
                  },
                },
                {
                  min: 0,
                  max: c.checkpoints.length - 1,
                  step: 1,
                  value: c.checkpoint,
                  sliderStyle: "stepped",
                  showValueInput: !1,
                  ariaLabel: d.formatMessage({
                    id: "learningBlock.loopBreakControlFlow.controls.checkpoint",
                    defaultMessage: "Iteration checkpoint",
                  }),
                  ariaValueText: d.formatMessage(
                    {
                      id: "learningBlock.loopBreakControlFlow.controls.checkpoint.value",
                      defaultMessage: "Checkpoint {checkpoint} of {total}: {phase}",
                    },
                    {
                      checkpoint: M(d, c.checkpoint + 1),
                      total: M(d, c.checkpoints.length),
                      phase: w(d, c.current.phase, c.current.value),
                    },
                  ),
                  onChange: (e) => {
                    k(c.checkpoints[Math.round(e)] ?? 0)
                  },
                },
              ],
            }),
            (0, t.jsxs)(s.Z, {
              columns: 2,
              children: [
                (0, t.jsx)(s.Q, {
                  disabled: 0 === c.step,
                  onClick: () => k(c.step - 1),
                  children: d.formatMessage({
                    id: "learningBlock.loopBreakControlFlow.controls.previous",
                    defaultMessage: "Back",
                  }),
                }),
                (0, t.jsx)(s.Q, {
                  onClick: () => k(c.finished ? 0 : c.step + 1),
                  children: c.finished
                    ? d.formatMessage({
                        id: "learningBlock.loopBreakControlFlow.controls.restart",
                        defaultMessage: "Restart",
                      })
                    : d.formatMessage({
                        id: "learningBlock.loopBreakControlFlow.controls.next",
                        defaultMessage: "Next",
                      }),
                }),
              ],
            }),
          ],
        })
      },
      N = ({ values: e, presentationMode: a }) => {
        let o = (0, r.A)(),
          s = x(e),
          { current: n } = s,
          i = "test" === n.phase,
          p = "body" === n.phase,
          d = "break-test" === n.phase,
          c = "remaining" === n.phase,
          u = "after" === n.phase,
          k = "loop-back" === n.phase,
          h = p || (i && !0 === n.outcome),
          f = c || (d && !1 === n.outcome),
          g = (u && "break" === n.exit) || (d && !0 === n.outcome),
          m = (u && "normal" === n.exit) || (i && !1 === n.outcome),
          j = s.break_value <= s.loop_limit,
          N = {
            entry: o.formatMessage({
              id: "learningBlock.loopBreakControlFlow.node.entry",
              defaultMessage: "Enter loop",
            }),
            test: o.formatMessage({
              id: "learningBlock.loopBreakControlFlow.node.test",
              defaultMessage: "More values?",
            }),
            body: o.formatMessage({ id: "learningBlock.loopBreakControlFlow.node.body", defaultMessage: "Start body" }),
            breakTest: o.formatMessage(
              { id: "learningBlock.loopBreakControlFlow.node.breakTest", defaultMessage: "value = {breakValue}?" },
              { breakValue: M(o, s.break_value) },
            ),
            remaining: o.formatMessage({
              id: "learningBlock.loopBreakControlFlow.node.remaining",
              defaultMessage: "Rest of body",
            }),
            after: o.formatMessage({
              id: "learningBlock.loopBreakControlFlow.node.after",
              defaultMessage: "After loop",
            }),
            yes: o.formatMessage({ id: "learningBlock.loopBreakControlFlow.branch.yes", defaultMessage: "Yes" }),
            no: o.formatMessage({ id: "learningBlock.loopBreakControlFlow.branch.no", defaultMessage: "No" }),
            break: o.formatMessage({
              id: "learningBlock.loopBreakControlFlow.branch.break",
              defaultMessage: "Yes · break",
            }),
          },
          T =
            "for" === s.loop_kind
              ? o.formatMessage({
                  id: "learningBlock.loopBreakControlFlow.valuesHeading.for",
                  defaultMessage: "For · values",
                })
              : o.formatMessage({
                  id: "learningBlock.loopBreakControlFlow.valuesHeading.while",
                  defaultMessage: "While · values",
                }),
          V =
            void 0 === n.value
              ? o.formatMessage({ id: "learningBlock.loopBreakControlFlow.currentValue.none", defaultMessage: "none" })
              : M(o, n.value),
          A = o.formatMessage(
            {
              id: "learningBlock.loopBreakControlFlow.visualizationAria",
              defaultMessage:
                "{heading}. Current value: {value}. Current step: {step}. Break value: {breakValue}. Completed body work for: {completed}. Skipped later values: {skipped}.",
            },
            {
              heading: T,
              value: V,
              step: w(o, n.phase, n.value),
              breakValue: M(o, s.break_value),
              completed: B(o, s.completedValues),
              skipped: B(o, s.skippedValues),
            },
          )
        if ("thumbnail" === a) {
          let e = j
            ? o.formatMessage(
                {
                  id: "learningBlock.loopBreakControlFlow.thumbnail.break",
                  defaultMessage:
                    "The break condition matches value {value}; the highlighted route exits the loop and continues after it.",
                },
                { value: M(o, s.break_value) },
              )
            : o.formatMessage({
                id: "learningBlock.loopBreakControlFlow.thumbnail.normal",
                defaultMessage:
                  "The break condition does not match; the highlighted route returns through the loop until it completes normally.",
              })
          return (0, t.jsx)("div", {
            "aria-label": e,
            className: "text-token-text-primary flex h-full w-full items-center justify-center p-1",
            role: "img",
            children: (0, t.jsxs)("svg", {
              "aria-hidden": "true",
              className: "h-full w-full",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 180 120",
              children: [
                (0, t.jsx)(_, {
                  active: !j,
                  points: [
                    { x: 42, y: 70 },
                    { x: 18, y: 70 },
                    { x: 18, y: 28 },
                    { x: 42, y: 28 },
                  ],
                }),
                (0, t.jsx)(_, {
                  active: j,
                  points: [
                    { x: 138, y: 49 },
                    { x: 164, y: 49 },
                    { x: 164, y: 96 },
                    { x: 148, y: 96 },
                  ],
                }),
                (0, t.jsx)("polygon", {
                  fill: b,
                  points: "90,24 138,49 90,74 42,49",
                  stroke: v,
                  strokeWidth: 2,
                  vectorEffect: "non-scaling-stroke",
                }),
                (0, t.jsx)("rect", {
                  fill: j ? b : y,
                  height: 26,
                  rx: 13,
                  stroke: j ? v : "var(--border-default)",
                  strokeWidth: j ? 2 : 1.5,
                  vectorEffect: "non-scaling-stroke",
                  width: 96,
                  x: 52,
                  y: 83,
                }),
              ],
            }),
          })
        }
        return (0, t.jsx)("div", {
          "aria-label": A,
          "data-learning-block-wide-width": "42rem",
          className: "text-token-text-primary flex h-[256px] w-full items-center justify-center px-6 pb-6",
          role: "img",
          children: (0, t.jsxs)("div", {
            className: "flex h-full w-full max-w-[680px] min-w-0 flex-col gap-2",
            children: [
              (0, t.jsxs)("div", {
                className: "flex min-h-6 min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1",
                children: [
                  (0, t.jsx)("span", { className: "text-token-text-secondary text-xs font-semibold", children: T }),
                  (0, t.jsx)("div", {
                    className: "flex items-center gap-1",
                    children: s.loopValues.map((e) => {
                      let a = s.completedValues.includes(e),
                        r = s.skippedValues.includes(e),
                        i = n.value === e && !s.finished,
                        p = s.hasBroken && e === s.break_value
                      return (0, t.jsx)(
                        "span",
                        {
                          className: (0, l.A)(
                            "flex h-6 min-w-6 items-center justify-center rounded-full border px-1.5 text-xs",
                            i || p
                              ? "text-token-text-primary font-semibold"
                              : a
                                ? "text-token-text-primary"
                                : "text-token-text-secondary",
                          ),
                          style: {
                            background: i || p ? b : y,
                            borderColor:
                              i || p ? v : a ? "var(--learning-block-color-primary)" : "var(--border-default)",
                            borderStyle: r ? "dashed" : "solid",
                            borderWidth: i || p ? 2 : 1,
                          },
                          children: M(o, e),
                        },
                        e,
                      )
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "relative mx-auto h-[200px] w-full min-w-0 shrink-0",
                children: [
                  (0, t.jsxs)("svg", {
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                    preserveAspectRatio: "none",
                    viewBox: "0 0 600 200",
                    children: [
                      (0, t.jsx)(_, {
                        active: i,
                        points: [
                          { x: 250, y: 24 },
                          { x: 250, y: 30 },
                        ],
                      }),
                      (0, t.jsx)(_, {
                        active: h,
                        points: [
                          { x: 250, y: 70 },
                          { x: 250, y: 76 },
                        ],
                      }),
                      (0, t.jsx)(_, {
                        active: d || p,
                        points: [
                          { x: 250, y: 106 },
                          { x: 250, y: 112 },
                        ],
                      }),
                      (0, t.jsx)(_, {
                        active: f,
                        points: [
                          { x: 250, y: 152 },
                          { x: 250, y: 158 },
                        ],
                      }),
                      (0, t.jsx)(_, {
                        active: k,
                        points: [
                          { x: 148, y: 190 },
                          { x: 42, y: 190 },
                          { x: 42, y: 50 },
                          { x: 124, y: 50 },
                        ],
                      }),
                      (0, t.jsx)(_, {
                        active: g,
                        points: [
                          { x: 376, y: 132 },
                          { x: 392, y: 132 },
                          { x: 392, y: 183 },
                          { x: 406, y: 183 },
                        ],
                      }),
                      (0, t.jsx)(_, {
                        active: m,
                        points: [
                          { x: 376, y: 50 },
                          { x: 596, y: 50 },
                          { x: 596, y: 183 },
                          { x: 586, y: 183 },
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(C, {
                    active: "entry" === n.phase,
                    height: 24,
                    kind: "terminal",
                    label: N.entry,
                    width: 186,
                    x: 157,
                    y: 0,
                  }),
                  (0, t.jsx)(C, { active: i, height: 40, kind: "decision", label: N.test, width: 252, x: 124, y: 30 }),
                  (0, t.jsx)(C, { active: p, height: 30, label: N.body, width: 204, x: 148, y: 76 }),
                  (0, t.jsx)(C, {
                    active: d,
                    height: 40,
                    kind: "decision",
                    label: N.breakTest,
                    width: 252,
                    x: 124,
                    y: 112,
                  }),
                  (0, t.jsx)(C, { active: c, height: 32, label: N.remaining, skipped: g, width: 204, x: 148, y: 158 }),
                  (0, t.jsx)(C, {
                    active: u,
                    height: 30,
                    kind: "terminal",
                    label: N.after,
                    width: 180,
                    x: 406,
                    y: 168,
                  }),
                  (0, t.jsx)(F, { active: h, label: N.yes, x: 292, y: 73 }),
                  (0, t.jsx)(F, { active: m, label: N.no, x: 422, y: 50 }),
                  (0, t.jsx)(F, { active: f, label: N.no, x: 292, y: 155 }),
                  (0, t.jsx)(F, { active: g, label: N.break, x: 446, y: 132 }),
                ],
              }),
            ],
          }),
        })
      },
      T = ({ values: e }) => {
        let a,
          o,
          l = (0, r.A)(),
          s = x(e),
          { current: i } = s
        if ("after" === i.phase && "break" === i.exit)
          ((a = l.formatMessage({
            id: "learningBlock.loopBreakControlFlow.caption.break.title",
            defaultMessage: "Break exits the loop",
          })),
            (o =
              s.skippedValues.length > 0
                ? l.formatMessage(
                    {
                      id: "learningBlock.loopBreakControlFlow.caption.break.early",
                      defaultMessage:
                        "At value {value}, break skips the rest of the body and values {skipped}, then continues after the loop.",
                    },
                    { value: M(l, i.value ?? s.break_value), skipped: B(l, s.skippedValues) },
                  )
                : l.formatMessage(
                    {
                      id: "learningBlock.loopBreakControlFlow.caption.break.final",
                      defaultMessage:
                        "At value {value}, break skips the rest of the body and continues after the loop; no later values remain.",
                    },
                    { value: M(l, i.value ?? s.break_value) },
                  )))
        else if ("after" === i.phase)
          ((a = l.formatMessage({
            id: "learningBlock.loopBreakControlFlow.caption.normal.title",
            defaultMessage: "The loop completes normally",
          })),
            (o = l.formatMessage(
              {
                id: "learningBlock.loopBreakControlFlow.caption.normal.body",
                defaultMessage: "All {count} values finish the body; the false loop test continues after the loop.",
              },
              { count: M(l, s.loop_limit) },
            )))
        else if ("break-test" === i.phase)
          ((a = l.formatMessage(
            { id: "learningBlock.loopBreakControlFlow.caption.test.title", defaultMessage: "Check value {value}" },
            { value: M(l, i.value ?? s.break_value) },
          )),
            (o = i.outcome
              ? l.formatMessage({
                  id: "learningBlock.loopBreakControlFlow.caption.test.true.body",
                  defaultMessage: "The condition is true; the next step exits the loop.",
                })
              : l.formatMessage({
                  id: "learningBlock.loopBreakControlFlow.caption.test.false.body",
                  defaultMessage: "The condition is false; the rest of the body runs next.",
                })))
        else
          switch (((a = w(l, i.phase, i.value)), i.phase)) {
            case "entry":
              o = l.formatMessage({
                id: "learningBlock.loopBreakControlFlow.caption.progress.entry",
                defaultMessage: "The loop test runs next.",
              })
              break
            case "test":
              o =
                void 0 === i.value
                  ? l.formatMessage({
                      id: "learningBlock.loopBreakControlFlow.caption.progress.testFalse",
                      defaultMessage: "No values remain; execution continues after the loop.",
                    })
                  : l.formatMessage(
                      {
                        id: "learningBlock.loopBreakControlFlow.caption.progress.testTrue",
                        defaultMessage: "Value {value} is available; the first body statement runs next.",
                      },
                      { value: M(l, i.value) },
                    )
              break
            case "body":
              o = l.formatMessage(
                {
                  id: "learningBlock.loopBreakControlFlow.caption.progress.body",
                  defaultMessage: "Value {value} reaches the break-condition test next.",
                },
                { value: M(l, i.value ?? s.break_value) },
              )
              break
            case "remaining":
              o = l.formatMessage(
                {
                  id: "learningBlock.loopBreakControlFlow.caption.progress.remaining",
                  defaultMessage: "Value {value} did not break; the rest of the body runs.",
                },
                { value: M(l, i.value ?? s.break_value) },
              )
              break
            case "loop-back":
              o = l.formatMessage(
                {
                  id: "learningBlock.loopBreakControlFlow.caption.progress.loopBack",
                  defaultMessage: "Value {value} finished the body; control returns to the loop test.",
                },
                { value: M(l, i.value ?? s.break_value) },
              )
              break
            default:
              o = l.formatMessage({
                id: "learningBlock.loopBreakControlFlow.caption.progress.after",
                defaultMessage: "Execution continues after the loop.",
              })
          }
        return (0, t.jsxs)(n.Vq, {
          reserveLines: 3,
          children: [(0, t.jsx)(n.OZ, { variant: "title", children: a }), (0, t.jsx)(n.OZ, { children: o })],
        })
      }
  },
}
//# sourceMappingURL=431564.3920de4e89.js.map
