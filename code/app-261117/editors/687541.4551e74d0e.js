export const __rspack_esm_ids = [687541]
export const __webpack_modules__ = {
  YwcJ(e, t, n) {
    var r = n("mYWT"),
      i = n("evuY")
    let l = null
    n.d(
      t,
      {},
      {
        ensurePopcornPresentationRenderDepsLoaded: function () {
          return (l ??= Promise.all([
            (0, i.ensurePopcornSpreadsheetFontsLoaded)(),
            Promise.resolve().then(() => {
              ;(0, r.installPresetShapeDefinitions)()
            }),
          ]).then(() => {}))
        },
      },
    )
  },
  Uq8e(e, t, n) {
    let r = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { P: r })
  },
  jV4D(e, t, n) {
    var r = n("zd8w"),
      i = n("Uq8e")
    n.d(
      t,
      {},
      {
        S: function () {
          let e = (0, r.useContext)(i.P)
          if (!e) throw Error("PopcornPresentationEditorProvider is required")
          return e
        },
      },
    )
  },
  UGB7(e, t, n) {
    var r = n("zd8w"),
      i = n("jV4D")
    function l(e, t) {
      return (
        e.imageCrop === t.imageCrop &&
        e.find === t.find &&
        e.displayColors === t.displayColors &&
        e.presentationVersion === t.presentationVersion &&
        e.selectedSlideIdx === t.selectedSlideIdx &&
        e.slideIds === t.slideIds &&
        e.selectedSlideIds === t.selectedSlideIds &&
        e.slideLabels === t.slideLabels &&
        e.hiddenSlideIds === t.hiddenSlideIds &&
        e.slideCount === t.slideCount &&
        e.gridLayout === t.gridLayout &&
        e.zoom === t.zoom &&
        e.fitScale === t.fitScale &&
        e.selectedSlideFrame === t.selectedSlideFrame &&
        e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
        e.hyperlinkTargets === t.hyperlinkTargets &&
        e.selectedElementIds === t.selectedElementIds &&
        e.primarySelectedElementId === t.primarySelectedElementId &&
        e.activeInteractionKind === t.activeInteractionKind &&
        e.notesText === t.notesText &&
        e.canUndo === t.canUndo &&
        e.canRedo === t.canRedo &&
        e.canInsertWidgets === t.canInsertWidgets &&
        e.slideRect === t.slideRect &&
        e.textLayoutBlocks === t.textLayoutBlocks &&
        e.textEditState === t.textEditState &&
        e.inspector === t.inspector &&
        e.commentThreads === t.commentThreads &&
        e.camera === t.camera
      )
    }
    function a(e, t) {
      return o(e, t) && e.zoom === t.zoom && e.fitScale === t.fitScale && e.slideRect?.scale === t.slideRect?.scale
    }
    function o(e, t) {
      return (
        e.canInsertWidgets === t.canInsertWidgets &&
        e.find === t.find &&
        e.displayColors === t.displayColors &&
        e.selectedSlideIdx === t.selectedSlideIdx &&
        e.slideIds === t.slideIds &&
        e.selectedSlideIds === t.selectedSlideIds &&
        e.slideLabels === t.slideLabels &&
        e.hiddenSlideIds === t.hiddenSlideIds &&
        e.slideCount === t.slideCount &&
        e.gridLayout === t.gridLayout &&
        e.notesText.trim().length > 0 == t.notesText.trim().length > 0
      )
    }
    function s(e, t) {
      var n, r, i, l
      return (
        e.imageCrop === t.imageCrop &&
        e.displayColors === t.displayColors &&
        e.presentationVersion === t.presentationVersion &&
        e.selectedSlideIdx === t.selectedSlideIdx &&
        e.gridLayout === t.gridLayout &&
        e.zoom === t.zoom &&
        e.fitScale === t.fitScale &&
        e.selectedSlideFrame === t.selectedSlideFrame &&
        e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
        e.hyperlinkTargets === t.hyperlinkTargets &&
        e.selectedElementIds === t.selectedElementIds &&
        e.primarySelectedElementId === t.primarySelectedElementId &&
        e.hoveredElementId === t.hoveredElementId &&
        e.activeInteractionKind === t.activeInteractionKind &&
        e.previewVersion === t.previewVersion &&
        e.smartGuideIndicators === t.smartGuideIndicators &&
        ((n = e.awarenessCursors),
        (r = t.awarenessCursors),
        n.length === r.length &&
          n.every((e, t) => {
            let n = r[t]
            return (
              null != n &&
              e.presenceId === n.presenceId &&
              e.kind === n.kind &&
              e.color === n.color &&
              e.slideId === n.slideId &&
              e.point.x === n.point.x &&
              e.point.y === n.point.y &&
              e.label === n.label &&
              e.lastClickAt === n.lastClickAt &&
              e.status === n.status
            )
          })) &&
        ((i = e.awarenessSelections),
        (l = t.awarenessSelections),
        i.length === l.length &&
          i.every((e, t) => {
            var n, r
            let i = l[t]
            return (
              null != i &&
              e.presenceId === i.presenceId &&
              e.kind === i.kind &&
              e.color === i.color &&
              e.slideId === i.slideId &&
              e.label === i.label &&
              e.status === i.status &&
              ((n = e.selectedElementIds),
              (r = i.selectedElementIds),
              n.length === r.length && n.every((e, t) => e === r[t]))
            )
          })) &&
        e.slideRect === t.slideRect &&
        e.textLayoutBlocks === t.textLayoutBlocks &&
        e.textEditState === t.textEditState &&
        e.inspector === t.inspector &&
        e.commentThreads === t.commentThreads &&
        e.camera === t.camera
      )
    }
    function d(e, t) {
      return e.notesText === t.notesText
    }
    function c(e, t) {
      return e.commentThreads === t.commentThreads
    }
    function u(e, t) {
      return (
        e.selectedElementIds === t.selectedElementIds &&
        e.primarySelectedElementId === t.primarySelectedElementId &&
        e.inspector === t.inspector
      )
    }
    function p(e, t) {
      let n = (0, r.useRef)(e.getSnapshot()),
        i = (0, r.useCallback)(() => {
          let r = e.getSnapshot(),
            i = n.current
          return t(i, r) ? i : ((n.current = r), r)
        }, [t, e])
      return (0, r.useSyncExternalStore)((t) => e.subscribe(t), i, i)
    }
    function h(e, t) {
      return p(
        e,
        (function (e) {
          switch (e) {
            case "shell":
              return a
            case "stage":
              return s
            case "notes":
              return d
            case "comments":
              return c
            case "inspector":
              return u
            default:
              return l
          }
        })(t),
      )
    }
    n.d(
      t,
      {},
      {
        DP: function (e) {
          return h(e, "stage")
        },
        J0: function (e) {
          return h(e, "editor")
        },
        Zo: function (e, t = {}) {
          return p(e, !1 === t.includeViewport ? o : a)
        },
        ge: function (e) {
          return h(e, "notes")
        },
        k2: function () {
          return h((0, i.S)(), "inspector")
        },
        lO: h,
      },
    )
  },
  fGv0(e, t, n) {
    var r = n("ABep"),
      i = n("mIgx")
    let l = { height: "18px", width: "18px" },
      a =
        "text-token-text-secondary inline-flex h-8 w-8 cursor-interaction items-center justify-center rounded-md border border-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border enabled:hover:bg-token-list-hover-background enabled:hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-40"
    n.d(
      t,
      {},
      {
        k: function ({
          currentIndex: e,
          totalCount: t,
          itemLabel: n,
          onChangeIndex: o,
          disabled: s = !1,
          testId: d = "popcorn-page-number-navigation",
        }) {
          return t <= 1
            ? null
            : (0, r.jsxs)("div", {
                className: "flex items-center gap-0.5 text-base leading-5 tabular-nums",
                "data-testid": d,
                children: [
                  (0, r.jsx)("button", {
                    type: "button",
                    "aria-label": `Go to previous ${n}`,
                    "data-testid": `${d}-previous`,
                    className: a,
                    disabled: !(!s && t > 0 && e > 0),
                    onClick: () => o(e - 1),
                    children: (0, r.jsx)(i.YJ, { style: l }),
                  }),
                  (0, r.jsxs)("span", {
                    className: "min-w-12 px-1 text-center text-token-text-primary",
                    "data-testid": `${d}-indicator`,
                    children: [t > 0 ? e + 1 : 0, "/", Math.max(0, t)],
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    "aria-label": `Go to next ${n}`,
                    "data-testid": `${d}-next`,
                    className: a,
                    disabled: !(!s && t > 0 && e < t - 1),
                    onClick: () => o(e + 1),
                    children: (0, r.jsx)(i.vK, { style: l }),
                  }),
                ],
              })
        },
      },
    )
  },
  VFFD(e, t, n) {
    var r = n("ABep"),
      i = n("YLKE"),
      l = n("on57"),
      a = n("zd8w"),
      o = n("mIgx"),
      s = n("EnMA"),
      d = n("sCeR"),
      c = n("xUBF"),
      u = n("zFLC"),
      p = n("Xlmd"),
      h = n("w0Wa")
    let m = (0, a.createContext)(p.D),
      f = { label: "White", value: "#FFFFFF" }
    n.d(
      t,
      {},
      {
        IM: function ({
          value: e,
          previewColor: t,
          currentValueLabel: n,
          authoredValueKey: p,
          ariaLabel: g,
          disabled: x = !1,
          inline: b = !1,
          allowNone: y = !1,
          allowCustom: v = !0,
          palette: w,
          mixed: C = !1,
          mixedLabel: S = "Mixed",
          compact: k = !1,
          themeColors: I = [],
          paintRole: E,
          backgroundColor: j,
          onChange: M,
          className: T,
          config: A,
        }) {
          let P = A ?? { state: "enabled" },
            L = x || "enabled" !== P.state,
            F = y && P.options?.allowNone !== !1,
            R = v && P.options?.allowCustom !== !1,
            D = P.options?.palette ?? w,
            N = (0, a.useContext)(m),
            z = I.length > 0 ? I : [f, ...N],
            B =
              D?.map((e) => {
                let t = (0, c.m)(e)
                return { value: t, label: z.find((e) => e.value === t)?.label ?? t }
              }) ?? z,
            O = (0, h.p)(
              P,
              M,
              (e, t) =>
                !x &&
                (0, s.HO)(
                  e,
                  t,
                  y,
                  B.map((e) => e.value),
                ),
            ),
            V = (e) => I.find((t) => t.value === e)?.value ?? (0, c.m)(e),
            H = (0, a.useContext)(d.Z),
            K = j && "none" !== j ? H.withBackground(j) : H,
            $ = (e) => ("text" === E ? K.text(e) : K.color(e)),
            q = F && ("none" === e || "transparent" === e) ? "none" : V(e),
            [{ value: W, pending: U }, G] = (0, a.useState)({ value: q, pending: !1 }),
            _ = (0, a.useRef)(q),
            X = (0, a.useRef)([]),
            [Z, J] = (0, a.useState)(!1),
            Y = I.find((e) => e.value === W)?.displayColor ?? W
          ;(0, a.useEffect)(() => {
            let e = X.current.indexOf(q)
            if (e >= 0) {
              if ((X.current.splice(0, e + 1), X.current.length > 0)) return
            } else X.current = []
            ;((_.current = q), G({ value: q, pending: !1 }))
          }, [q, n, C, p])
          let Q = C && !U,
            ee = "none" === W,
            et = [...I, ...B].find((e) => e.value.toUpperCase() === W.toUpperCase())?.label ?? W
          Q ? (et = S) : ee ? (et = "None") : W !== q || U || void 0 === n || (et = n)
          let en = Q
            ? {
                backgroundImage: "conic-gradient(#D4D4D4 25%, #FFFFFF 0 50%, #D4D4D4 0 75%, #FFFFFF 0)",
                backgroundSize: "8px 8px",
              }
            : ee
              ? {
                  backgroundImage:
                    "linear-gradient(135deg, transparent 45%, #EF4444 46%, #EF4444 54%, transparent 55%)",
                }
              : { backgroundColor: $(W === q ? (t ?? Y) : Y) }
          if ("hidden" === P.state) return null
          let er = (0, r.jsx)("div", {
            children: (0, r.jsx)(u.D, {
              color: ee ? null : W,
              mixed: Q,
              colors: B,
              allowNone: F,
              allowCustom: R,
              disabled: L,
              embedded: k,
              closeOnSelect: !k,
              displayColor: $,
              labels: { palette: I.length > 0 ? "Theme colors" : g, hexInput: `${g} hex value` },
              onChange: (e) => {
                var t
                let r
                ;((r = "none" === (t = e ?? "none") ? "none" : V(t)),
                  !L &&
                    ("none" === r ? F : R || B.some((e) => e.value === r)) &&
                    (r !== _.current || ((C || void 0 !== n) && !(X.current.length > 0))) &&
                    (X.current.push(r), (_.current = r), G({ value: r, pending: !0 }), O(t)))
              },
            }),
          })
          return b
            ? er
            : (0, r.jsxs)(i.bL, {
                open: Z,
                onOpenChange: J,
                children: [
                  (0, r.jsx)("div", {
                    className: (0, l.A)("relative min-w-0", T),
                    children: (0, r.jsx)(i.l9, {
                      asChild: !0,
                      children: (0, r.jsxs)("button", {
                        type: "button",
                        "aria-label": `${g} picker`,
                        disabled: L,
                        title: P.reason,
                        className:
                          "flex h-7 w-full min-w-0 cursor-interaction items-center gap-2 rounded-lg border border-default bg-transparent px-2 text-left text-sm text-default outline-hidden focus-visible:ring-1 focus-visible:ring-token-text-tertiary enabled:hover:bg-primary-ghost-hover enabled:active:bg-primary-ghost-active disabled:cursor-default disabled:opacity-40 data-[state=open]:bg-primary-ghost-hover",
                        children: [
                          (0, r.jsx)("span", {
                            "aria-hidden": "true",
                            className: "size-4 shrink-0 rounded-full border border-token-border-light",
                            style: en,
                          }),
                          (0, r.jsx)("span", { className: "min-w-0 flex-1 truncate", children: et }),
                          (0, r.jsx)(o.cr, { className: "size-3 shrink-0 text-token-text-secondary" }),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)(i.ZL, {
                    children: (0, r.jsx)(i.UC, {
                      asChild: !0,
                      "data-popcorn-edit-toolbar-root": "true",
                      "aria-label": `${g} palette`,
                      align: "end",
                      sideOffset: 6,
                      collisionPadding: 12,
                      children: er,
                    }),
                  }),
                ],
              })
        },
      },
    )
  },
  dP6Q(e, t, n) {
    var r = n("ABep"),
      i = n("on57")
    n.d(
      t,
      {},
      {
        X: function ({ label: e, children: t, className: n, config: l }) {
          return l?.state === "hidden"
            ? null
            : (0, r.jsxs)("label", {
                className: (0, i.A)("grid grid-cols-[72px_minmax(0,1fr)] items-center gap-2 text-xs", n),
                children: [
                  (0, r.jsx)("span", { className: "text-token-text-tertiary truncate font-medium", children: e }),
                  (0, r.jsx)("div", { className: "min-w-0", children: t }),
                ],
              })
        },
      },
    )
  },
  QT5R(e, t, n) {
    var r = n("ABep"),
      i = n("zd8w"),
      l = n("EnMA"),
      a = n("w0Wa"),
      o = n("dP6Q"),
      s = n("jyPl")
    n.d(
      t,
      {},
      {
        S: function ({ label: e, value: t, placeholder: n, min: d, max: c, step: u, unit: p, onChange: h, config: m }) {
          let f = m ?? { state: "enabled" },
            g = (0, a.p)(f, h, (e, t) => (0, l.XT)(e, t, { min: d, max: c })),
            x = Math.max(d ?? -1 / 0, f.options?.min ?? -1 / 0),
            b = Math.min(c ?? 1 / 0, f.options?.max ?? 1 / 0),
            y = (0, l.ro)(f),
            v = null == t ? "" : String(Math.round(100 * t) / 100),
            [w, C] = (0, i.useState)(v)
          return ((0, i.useEffect)(() => C(v), [v, y]), "hidden" === f.state)
            ? null
            : (0, r.jsx)(o.X, {
                label: e,
                children: (0, r.jsxs)("div", {
                  className: s.iE,
                  children: [
                    (0, r.jsx)("input", {
                      "aria-label": e,
                      type: "number",
                      disabled: "enabled" !== f.state,
                      title: f.reason,
                      min: Number.isFinite(x) ? x : void 0,
                      max: Number.isFinite(b) ? b : void 0,
                      step: u ?? "any",
                      placeholder: n,
                      value: w,
                      className:
                        "h-full w-full min-w-0 rounded-[inherit] border-0 bg-transparent px-2 text-sm text-token-text-primary outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                      onChange: (e) => C(e.currentTarget.value),
                      onBlur: () => {
                        let e = Number(w)
                        w.trim() &&
                        Number.isFinite(e) &&
                        (null == d || e >= d) &&
                        (null == c || e <= c) &&
                        (0, l.XT)(f, e)
                          ? w !== v && e !== t && g(e)
                          : C(v)
                      },
                      onKeyDown: (e) => {
                        ;("Enter" === e.key && (e.preventDefault(), e.currentTarget.blur()),
                          "Escape" === e.key && (C(v), e.preventDefault(), e.stopPropagation()))
                      },
                    }),
                    p
                      ? (0, r.jsx)("span", {
                          "aria-hidden": "true",
                          className: "shrink-0 pr-2 text-xs text-token-text-tertiary",
                          children: p,
                        })
                      : null,
                  ],
                }),
              })
        },
      },
    )
  },
  HTnr(e, t, n) {
    var r = n("ABep"),
      i = n("on57"),
      l = n("zd8w"),
      a = n("jyPl"),
      o = n("MVj1")
    n.d(
      t,
      {},
      {
        E: function ({ title: e, icon: t, defaultOpen: n = !0, children: s, className: d }) {
          let [c, u] = (0, l.useState)(n)
          return (0, r.jsxs)("details", {
            open: c,
            onToggle: (e) => {
              u(e.currentTarget.open)
            },
            className: (0, i.A)("group", d),
            children: [
              (0, r.jsxs)("summary", {
                className:
                  "text-token-text-primary flex h-6 cursor-pointer list-none items-center gap-2 text-sm font-semibold [&::-webkit-details-marker]:hidden",
                children: [
                  t ? (0, r.jsx)(t, { className: "size-4" }) : null,
                  (0, r.jsx)("span", { className: "min-w-0 flex-1 truncate", children: e }),
                  (0, r.jsx)("span", {
                    className: (0, i.A)(
                      "text-token-text-secondary inline-flex size-7 shrink-0 items-center justify-center transition-colors",
                      a.rH,
                    ),
                    children: (0, r.jsx)(o.v, {
                      className: "size-4 transition-transform duration-150 group-open:rotate-90",
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", { className: "flex flex-col gap-4 pt-4", children: s }),
            ],
          })
        },
      },
    )
  },
  oFB5(e, t, n) {
    var r = n("ABep"),
      i = n("on57"),
      l = n("EnMA"),
      a = n("w0Wa"),
      o = n("jyPl")
    n.d(
      t,
      {},
      {
        s: function ({ value: e, options: t, onChange: n, ariaLabel: s, className: d, config: c }) {
          let u = c ?? { state: "enabled" },
            p = (0, a.p)(u, n, l.lB),
            h = t.filter((t) => t.value === e || !u.options || u.options.values.includes(t.value)),
            m = h.filter((e) => (0, l.lB)(u, e.value))
          return "hidden" === u.state
            ? null
            : (0, r.jsx)("div", {
                role: "group",
                "aria-label": s,
                className: (0, i.A)(
                  "flex min-h-8 gap-0.5 rounded-lg border border-token-border-default bg-token-bg-primary p-0.5",
                  d,
                ),
                children: h.map((t) => {
                  let n = t.icon,
                    a = t.value === e
                  return (0, r.jsxs)(
                    "button",
                    {
                      type: "button",
                      "aria-label": t.label,
                      "aria-pressed": a,
                      title: u.reason ?? t.label,
                      disabled: !(0, l.lB)(u, t.value),
                      tabIndex: a || (!m.some((t) => t.value === e) && t === m[0]) ? 0 : -1,
                      onClick: () => {
                        p(t.value)
                      },
                      onKeyDown: (e) => {
                        let n = m.indexOf(t),
                          r =
                            "ArrowRight" === e.key || "ArrowDown" === e.key
                              ? (n + 1) % m.length
                              : "ArrowLeft" === e.key || "ArrowUp" === e.key
                                ? (n - 1 + m.length) % m.length
                                : "Home" === e.key
                                  ? 0
                                  : "End" === e.key
                                    ? m.length - 1
                                    : void 0,
                          i = void 0 === r ? void 0 : m[r]
                        i &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          e.currentTarget.parentElement?.querySelectorAll("button:not(:disabled)")[r]?.focus(),
                          p(i.value))
                      },
                      className: (0, i.A)(
                        "flex min-h-6 min-w-0 flex-1 cursor-interaction items-center justify-center gap-1 rounded-md px-1.5 py-1 text-xs font-medium select-none",
                        a ? o.G4 : o.rH,
                      ),
                      children: [
                        n ? (0, r.jsx)(n, { className: "size-4" }) : null,
                        (0, r.jsx)("span", { className: n ? "sr-only" : "truncate", children: t.label }),
                      ],
                    },
                    t.value,
                  )
                }),
              })
        },
      },
    )
  },
  f3iK(e, t, n) {
    var r = n("ABep"),
      i = n("on57"),
      l = n("mIgx")
    ;(n("pUSG"),
      n.d(
        t,
        {},
        {
          Z: function ({
            title: e,
            subtitle: t,
            onClose: n,
            onKeyDown: a,
            widthPx: o = 240,
            children: s,
            className: d,
            embedded: c = !1,
          }) {
            return (0, r.jsxs)("section", {
              "aria-label": e,
              className: (0, i.A)(
                "flex min-h-0 max-h-full flex-col gap-4 overflow-hidden",
                !c && "shrink-0 rounded-xl bg-surface-elevated-secondary shadow-lg ring-[0.5px] ring-border",
                d,
              ),
              style: c ? void 0 : { width: o },
              onKeyDown: a,
              children: [
                (0, r.jsxs)("header", {
                  className: "mx-4 mt-4 flex min-h-6 shrink-0 items-center justify-between gap-3",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "min-w-0",
                      children: [
                        (0, r.jsx)("h2", {
                          className: "truncate text-base font-semibold text-token-text-primary",
                          children: e,
                        }),
                        t
                          ? (0, r.jsx)("p", { className: "mt-0.5 text-xs text-token-text-tertiary", children: t })
                          : null,
                      ],
                    }),
                    n
                      ? (0, r.jsx)("button", {
                          type: "button",
                          "aria-label": `Close ${e}`,
                          onClick: n,
                          className:
                            "flex size-6 shrink-0 cursor-interaction items-center justify-center rounded-md text-secondary hover:bg-primary-ghost-hover hover:text-default focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset active:bg-primary-ghost-active",
                          children: (0, r.jsx)(l.w0, { className: "size-4" }),
                        })
                      : null,
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "popcorn-inspector-panel-scroll min-h-0 overflow-x-hidden overflow-y-auto overscroll-contain",
                  children: (0, r.jsx)("div", { className: "popcorn-inspector-panel-content px-4 pb-4", children: s }),
                }),
              ],
            })
          },
        },
      ))
  },
  Di4S(e, t, n) {
    var r = n("ABep"),
      i = n("on57")
    n.d(
      t,
      {},
      {
        z: function ({ className: e, ...t }) {
          return (0, r.jsxs)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, i.A)("size-4", e),
            ...t,
            children: [
              (0, r.jsx)("path", {
                d: "M13 14.1699C13.2761 14.1699 13.5 14.3938 13.5 14.6699C13.5 14.9461 13.2761 15.1699 13 15.1699H3C2.72386 15.1699 2.5 14.9461 2.5 14.6699C2.50003 14.3938 2.72388 14.1699 3 14.1699H13Z",
                fill: "currentColor",
              }),
              (0, r.jsx)("path", {
                d: "M11.3301 2.73535C11.6973 2.73544 11.9951 3.03317 11.9951 3.40039V9.65411C11.9949 11.678 10.354 13.3191 8.33008 13.3191H7.66992C5.64598 13.3191 4.00508 11.678 4.00488 9.65411V3.40039C4.00488 3.03316 4.30271 2.73542 4.66992 2.73535C5.03719 2.73535 5.33496 3.03312 5.33496 3.40039V9.65411C5.33516 10.9435 6.38052 11.989 7.66992 11.9891H8.33008C9.61947 11.989 10.6648 10.9435 10.665 9.65411V3.40039C10.665 3.03316 10.9629 2.73542 11.3301 2.73535Z",
                fill: "currentColor",
              }),
            ],
          })
        },
      },
    )
  },
  NIrs(e, t, n) {
    n.d(
      t,
      {},
      {
        TF: {
          insert: ["text", "image", "chart", "table", "rect"],
          header: ["insert", "format"],
          inspector: ["text", "appearance"],
          floating: [],
        },
        lD: function (e, t) {
          return {
            insert: t?.insert ?? e.insert,
            header: t?.header ?? e.header,
            inspector: t?.inspector ?? e.inspector,
            floating: t?.floating ?? e.floating,
          }
        },
        mq: {
          insert: ["text", "image", "chart", "table", "rect", "slide"],
          header: ["insert", "format", "annotation"],
          inspector: ["text", "appearance"],
          floating: ["fill", "bold", "text-color", "text-size", "format"],
        },
      },
    )
  },
  sCeR(e, t, n) {
    var r = n("Mdxs")
    let i = (0, n("zd8w").createContext)(r.ES)
    n.d(t, {}, { Z: i })
  },
  J4Ko(e, t, n) {
    n.d(t, { g: () => a })
    let r = null
    var i = n("tJuP")
    let l = {
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 16,
      paddingX: 8,
      paddingY: 4,
      borderRadius: 8,
      maxWidth: 180,
      color: "#ffffff",
    }
    function a(e, t, { zoom: n, appearance: o, bounds: s }) {
      if (s && (t.point.x < s.left || t.point.x > s.right || t.point.y < s.top || t.point.y > s.bottom)) return
      let d = Math.max(n, 1e-4)
      ;(e.save(),
        e.translate(t.point.x, t.point.y),
        e.scale(1 / d, 1 / d),
        (e.fillStyle = "#0284ff"),
        (e.fillStyle = t.color))
      let c = e.fillStyle
      if ("agent" === t.kind) {
        for (let n of [
          { x: 0, y: 4, radius: 29, color: c, opacity: 0.28 },
          { x: -8, y: 11, radius: 22, color: o?.agentGlowColors?.[0] ?? c, opacity: 0.18 },
          { x: 12, y: 1, radius: 23, color: o?.agentGlowColors?.[1] ?? c, opacity: 0.18 },
        ]) {
          let r = e.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius)
          ;(r.addColorStop(0, n.color),
            r.addColorStop(1, `rgb(from ${n.color} r g b / 0)`),
            (e.globalAlpha = n.opacity * t.glowOpacity),
            (e.fillStyle = r),
            e.fillRect(n.x - n.radius, n.y - n.radius, 2 * n.radius, 2 * n.radius))
        }
        e.globalAlpha = 1
      }
      ;(e.save(), e.rotate(t.rotation), e.scale(t.scale, t.scale), e.translate(-5.95756, -4.04384))
      let u =
        r ||
        (r = new Path2D(
          "M11.2581 18.6739C10.69 19.8911 8.93134 19.8055 8.48429 18.5388L4.04384 5.95756C3.62434 4.76897 4.76897 3.62434 5.95756 4.04384L18.5388 8.48429C19.8055 8.93134 19.8911 10.69 18.6739 11.2581L14.1119 13.387C13.7926 13.536 13.536 13.7926 13.387 14.1119L11.2581 18.6739Z",
        ))
      if (
        ((e.lineJoin = "round"),
        (e.strokeStyle = "#ffffff"),
        (e.lineWidth = 2.5),
        e.stroke(u),
        (e.fillStyle = o?.cursorColor ?? c),
        e.fill(u),
        e.restore(),
        t.label)
      ) {
        let n = o?.labelStyle ?? l,
          r = { ...n, maxWidth: s ? Math.min(n.maxWidth, Math.max(0, (s.right - s.left) * d)) : n.maxWidth }
        e.font = `${r.fontWeight} ${r.fontSize}px ${r.fontFamily}`
        let a = Math.min(r.maxWidth, e.measureText(t.label).width + 2 * r.paddingX),
          u = r.lineHeight + 2 * r.paddingY,
          p = { x: 13, y: 17 }
        ;(s &&
          ((p.x = Math.max((s.left - t.point.x) * d, Math.min(p.x, (s.right - t.point.x) * d - a))),
          (p.y = Math.max((s.top - t.point.y) * d, Math.min(p.y, (s.bottom - t.point.y) * d - u)))),
          (0, i.J)(e, { point: p, label: t.label, color: c, scale: 1, style: r }))
      }
      e.restore()
    }
  },
  x77z(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      l = n("q1q2"),
      a = n("tILS"),
      o = n("on57"),
      s = n("suct"),
      d = n("K4Cx"),
      c = n("iodE"),
      u = n("zd8w"),
      p = n("oyxz"),
      h = n("Wf1j"),
      m = n("wD9O"),
      f = n("i7gm"),
      g = n("YA2q"),
      x = n("CH2b"),
      b = n("f4Vb"),
      y = n("nsuH"),
      v = n("V8uZ"),
      w = n("FbH7")
    let C = "generationcursormotionchange"
    function S(e) {
      return "running" === e.playState
    }
    function k() {}
    function I() {}
    function E() {}
    function j(e) {
      return "running" === e.playState
    }
    function M() {
      return !1
    }
    function T(e) {
      return "running" === e.playState
    }
    function A(e) {
      let t,
        n,
        l,
        a,
        c,
        h,
        m,
        f,
        g,
        x,
        w,
        C = (0, i.c)(33),
        { children: S, reducedMotion: k, placement: I, zoom: E, collapsed: j, docked: M } = e,
        [T, A] = (0, u.useState)(null)
      C[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            let { width: t, height: n } = (0, b.q)(e)
            0 !== t && 0 !== n && A((e) => (e?.width === t && e.height === n ? e : { width: t, height: n }))
          }),
          (C[0] = t))
        : (t = C[0])
      let L = (0, y.wY)(t),
        F = "string" == typeof S ? S : null
      C[1] !== F ? ((n = { text: F, key: 0 }), (C[1] = F), (C[2] = n)) : (n = C[2])
      let [R, D] = (0, u.useState)(n)
      if (F !== R.text) {
        let e = null != F && null != R.text && F.startsWith(R.text)
        D({ text: F, key: R.key + +!e })
      }
      let N = !M && "bottom-start" === I,
        z = !M && "bottom-end" === I,
        B = !M && "top-start" === I,
        O = !M && "top-end" === I
      ;(C[3] !== N || C[4] !== z || C[5] !== B || C[6] !== O
        ? ((l = (0, o.A)(
            "relative overflow-hidden rounded-2xl bg-info-solid text-base leading-snug wrap-break-word text-info-solid shadow-lg select-none",
            { "rounded-ss-[6px]": N, "rounded-se-[6px]": z, "rounded-es-[6px]": B, "rounded-ee-[6px]": O },
          )),
          (C[3] = N),
          (C[4] = z),
          (C[5] = B),
          (C[6] = O),
          (C[7] = l))
        : (l = C[7]),
        C[8] !== E ? ((a = { zoom: E }), (C[8] = E), (C[9] = a)) : (a = C[9]))
      let V = T?.width,
        H = T?.height
      ;(C[10] !== H || C[11] !== V
        ? ((c = { width: V, height: H }), (C[10] = H), (C[11] = V), (C[12] = c))
        : (c = C[12]),
        C[13] !== k ? ((h = k ? { duration: 0 } : v.X7), (C[13] = k), (C[14] = h)) : (h = C[14]))
      let K = j ? "px-3 py-2 text-sm" : "px-4 py-3"
      return (
        C[15] !== K ? ((m = (0, o.A)("w-max max-w-64", K)), (C[15] = K), (C[16] = m)) : (m = C[16]),
        C[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = { maxWidth: "min(16rem, var(--generation-tooltip-max-width))" }), (C[17] = f))
          : (f = C[17]),
        C[18] !== S || C[19] !== j || C[20] !== k || C[21] !== R.key
          ? ((g = j
              ? (0, r.jsx)(p.A, { id: "pages.presentation.cursorAgentName", defaultMessage: "ChatGPT" })
              : (0, r.jsx)("div", {
                  className: "relative",
                  children: (0, r.jsx)(s.N, {
                    initial: !1,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      d.P.div,
                      {
                        initial: { opacity: +!!k },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.15 * !k },
                        children: (0, r.jsx)(P, { reducedMotion: k, children: S }),
                      },
                      R.key,
                    ),
                  }),
                })),
            (C[18] = S),
            (C[19] = j),
            (C[20] = k),
            (C[21] = R.key),
            (C[22] = g))
          : (g = C[22]),
        C[23] !== L || C[24] !== m || C[25] !== g
          ? ((x = (0, r.jsx)("div", { ref: L, className: m, style: f, children: g })),
            (C[23] = L),
            (C[24] = m),
            (C[25] = g),
            (C[26] = x))
          : (x = C[26]),
        C[27] !== c || C[28] !== h || C[29] !== x || C[30] !== l || C[31] !== a
          ? ((w = (0, r.jsx)(d.P.div, {
              className: l,
              style: a,
              role: "status",
              initial: !1,
              animate: c,
              transition: h,
              children: x,
            })),
            (C[27] = c),
            (C[28] = h),
            (C[29] = x),
            (C[30] = l),
            (C[31] = a),
            (C[32] = w))
          : (w = C[32]),
        w
      )
    }
    function P(e) {
      let t,
        n,
        l = (0, i.c)(7),
        { children: a, reducedMotion: o } = e,
        s = (0, c.tF)(),
        d = (0, h.A)(),
        u = !s,
        p = !o || void 0
      return (
        l[0] !== a || l[1] !== d
          ? ((t =
              "string" == typeof a ? (0, g.gk)(a, new Intl.Segmenter(d.locale, { granularity: "word" })).map(L) : a),
            (l[0] = a),
            (l[1] = d),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== u || l[4] !== p || l[5] !== t
          ? ((n = (0, r.jsx)("span", {
              className: w.A.MarkdownRoot,
              "aria-hidden": u,
              "data-markdown-animated": p,
              "data-markdown-text-style": "inherit",
              children: t,
            })),
            (l[3] = u),
            (l[4] = p),
            (l[5] = t),
            (l[6] = n))
          : (n = l[6]),
        n
      )
    }
    function L(e, t) {
      return (0, r.jsx)(
        "span",
        {
          ...(0, x._)({ className: w.A.FadeIn, fadeSegmentDelayMs: 16, fadeSegmentMaxDelayMs: 96, segmentIndex: t }),
          children: e,
        },
        t,
      )
    }
    n.d(
      t,
      {},
      {
        A: C,
        y: function (e) {
          let t,
            n,
            o,
            s,
            d,
            c,
            p,
            h,
            g,
            x,
            b,
            y = (0, i.c)(41),
            { children: v, reducedMotion: w, collapsed: P, homeRef: L, boundary: F, glyphRef: R } = e,
            [D, N] = (0, u.useState)(null),
            z = D?.closest("[data-artifact-generation-boundary]"),
            B = F ?? z ?? void 0,
            O = (0, m.dz)()
          ;(y[0] !== D
            ? ((t = (e) => {
                let t = D?.closest("[data-generation-cursor]")
                return (t?.addEventListener(C, e), () => t?.removeEventListener(C, e))
              }),
              (y[0] = D),
              (y[1] = t))
            : (t = y[1]),
            y[2] !== D || y[3] !== L
              ? ((n = () =>
                  null != D && L?.current != null && !D.closest("[data-generation-cursor]")?.getAnimations().some(T)),
                (y[2] = D),
                (y[3] = L),
                (y[4] = n))
              : (n = y[4]))
          let V = (0, u.useSyncExternalStore)(t, n, M)
          ;(y[5] !== D || y[6] !== R || y[7] !== L
            ? ((o =
                null == D
                  ? D
                  : {
                      contextElement: D,
                      getBoundingClientRect: () =>
                        (!D.closest("[data-generation-cursor]")?.getAnimations().some(j) && L?.current != null
                          ? L.current
                          : (R.current ?? D)
                        ).getBoundingClientRect(),
                    }),
              (y[5] = D),
              (y[6] = R),
              (y[7] = L),
              (y[8] = o))
            : (o = y[8]),
            y[9] !== o ? ((s = { reference: o }), (y[9] = o), (y[10] = s)) : (s = y[10]),
            y[11] !== V || y[12] !== O
              ? ((d = (0, l.cY)(V ? 8 * O : { mainAxis: 4 * O, alignmentAxis: 18 * O })),
                (y[11] = V),
                (y[12] = O),
                (y[13] = d))
              : (d = y[13]))
          let H = (0, l.UU)({ boundary: B, padding: 8, flipAlignment: !1 }),
            K = (0, l.BN)({ boundary: B, padding: 8, crossAxis: null != z }),
            $ = (0, l.Ej)({
              boundary: B,
              padding: 8,
              apply(e) {
                let { availableWidth: t, availableHeight: n, elements: r } = e,
                  i =
                    null == z
                      ? ""
                      : (function (e) {
                          let t = e.getBoundingClientRect()
                          if (0 === t.width || 0 === t.height) return "inset(50%)"
                          let n = parseFloat(e.style.width),
                            r = parseFloat(e.style.height),
                            i = new DOMMatrixReadOnly(e.style.transform),
                            l = t.width / (Math.abs(i.a) * n + Math.abs(i.c) * r),
                            a = [
                              [-n / 2, -r / 2],
                              [n / 2, -r / 2],
                              [n / 2, r / 2],
                              [-n / 2, r / 2],
                            ].map(
                              ([e, n]) =>
                                `${t.left + t.width / 2 + l * (i.a * e + i.c * n)}px ${t.top + t.height / 2 + l * (i.b * e + i.d * n)}px`,
                            )
                          return `polygon(${a.join(", ")})`
                        })(z),
                  l = r.floating.parentElement
                ;(null != l && (l.style.clipPath = i),
                  Object.assign(r.floating.style, {
                    maxWidth: `${Math.max(0, t)}px`,
                    maxHeight: null == z ? "" : `${Math.max(0, n)}px`,
                  }),
                  r.floating.style.setProperty("--generation-tooltip-max-width", `${Math.max(0, t) / O}px`))
              },
            })
          ;(y[14] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, l.jD)()), (y[14] = c)) : (c = y[14]),
            y[15] !== $ || y[16] !== d || y[17] !== H || y[18] !== K
              ? ((p = [d, H, K, $, c]), (y[15] = $), (y[16] = d), (y[17] = H), (y[18] = K), (y[19] = p))
              : (p = y[19]),
            y[20] !== D || y[21] !== w || y[22] !== p || y[23] !== s
              ? ((h = {
                  elements: s,
                  placement: "bottom-start",
                  strategy: "fixed",
                  middleware: p,
                  whileElementsMounted(e, t, n) {
                    if (null == D) return E
                    let r = t.ownerDocument,
                      i = D.closest("[data-generation-cursor]"),
                      l = !1,
                      o = I,
                      s = () => {
                        ;(o(),
                          (o = k),
                          n(),
                          l &&
                            !r.hidden &&
                            (o = (0, a.ll)(e, t, n, { animationFrame: !w && (i?.getAnimations().some(S) ?? !1) })))
                      },
                      d = new IntersectionObserver((e) => {
                        let [t] = e
                        ;((l = t.isIntersecting), n(), s())
                      })
                    return (
                      d.observe(D),
                      i?.addEventListener(C, s),
                      r.addEventListener("visibilitychange", s),
                      () => {
                        ;(o(),
                          d.disconnect(),
                          i?.removeEventListener(C, s),
                          r.removeEventListener("visibilitychange", s))
                      }
                    )
                  },
                }),
                (y[20] = D),
                (y[21] = w),
                (y[22] = p),
                (y[23] = s),
                (y[24] = h))
              : (h = y[24]))
          let { floatingStyles: q, refs: W, middlewareData: U, isPositioned: G, placement: _ } = (0, l.we)(h),
            { setFloating: X } = W
          return (
            y[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, r.jsx)("div", {
                  ref: N,
                  className: "absolute top-0 left-0 size-8 -translate-x-1/2 -translate-y-1/2",
                })),
                (y[25] = g))
              : (g = y[25]),
            y[26] !== D ||
            y[27] !== v ||
            y[28] !== P ||
            y[29] !== V ||
            y[30] !== q ||
            y[31] !== z ||
            y[32] !== G ||
            y[33] !== U ||
            y[34] !== _ ||
            y[35] !== w ||
            y[36] !== X ||
            y[37] !== O
              ? ((x =
                  null != D &&
                  (0, r.jsx)(f.s, {
                    container: D.ownerDocument.body,
                    children: (0, r.jsx)("div", {
                      className: null == z ? "contents" : "pointer-events-none fixed inset-0 z-40",
                      style: null == z ? void 0 : { clipPath: "inset(50%)" },
                      children: (0, r.jsx)("div", {
                        ref: X,
                        className: "pointer-events-none z-40 w-max overflow-hidden",
                        style: { ...q, visibility: !G || U.hide?.referenceHidden ? "hidden" : void 0 },
                        children: (0, r.jsx)(A, {
                          reducedMotion: w,
                          placement: _,
                          zoom: O,
                          collapsed: P,
                          docked: V,
                          children: v,
                        }),
                      }),
                    }),
                  })),
                (y[26] = D),
                (y[27] = v),
                (y[28] = P),
                (y[29] = V),
                (y[30] = q),
                (y[31] = z),
                (y[32] = G),
                (y[33] = U),
                (y[34] = _),
                (y[35] = w),
                (y[36] = X),
                (y[37] = O),
                (y[38] = x))
              : (x = y[38]),
            y[39] !== x ? ((b = (0, r.jsxs)(r.Fragment, { children: [g, x] })), (y[39] = x), (y[40] = b)) : (b = y[40]),
            b
          )
        },
      },
    )
  },
  C0vA(e, t, n) {
    n.d(t, { f: () => y })
    var r = n("ABep"),
      i = n("QosV"),
      l = n("tILS"),
      a = n("zd8w"),
      o = n("cL6v"),
      s = n.n(o),
      d = n("wD9O"),
      c = n("T1PX"),
      u = n("HgLj"),
      p = n("QADX"),
      h = n("J4Ko")
    function m(e) {
      let t,
        n = (0, i.c)(2),
        { requestId: l } = e
      return (
        n[0] !== l
          ? ((t = (0, r.jsx)("canvas", {
              className: "pointer-events-none absolute size-16 -translate-x-1/2 -translate-y-1/2 text-blue",
              "aria-hidden": "true",
              ref: (e) => {
                if (null == e) return
                let t = e.getContext("2d")
                if (null == t) return
                let n = () => {
                  let n = e.clientWidth,
                    r = e.ownerDocument.defaultView?.devicePixelRatio ?? 1
                  ;((e.width = n * r),
                    (e.height = n * r),
                    t.scale(r, r),
                    (0, h.g)(
                      t,
                      {
                        presenceId: l,
                        kind: "agent",
                        point: { x: n / 2, y: n / 2 },
                        color: getComputedStyle(e).color,
                        rotation: 0,
                        scale: 1,
                        glowOpacity: 1,
                      },
                      { zoom: 1 },
                    ))
                }
                return (n(), (0, p.zY)(e, n))
              },
            })),
            (n[0] = l),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    var f = n("pLGj")
    let g = (0, n("VoDS").A)(0.42, 0, 0.2, 1)
    function x(e, t, n, r, { dock: i = !1, undock: l = !1, constrain: a = !1 } = {}) {
      let o = (0, f.HF)({ bounds: e, start: t, end: n })
      if (i || l) {
        let e = Math.max(48, Math.abs(n.y - t.y) / 2)
        o.segments = [
          {
            control1: l ? { x: t.x, y: t.y + e } : o.startControl,
            control2: i ? { x: n.x, y: n.y + e } : o.endControl,
            end: n,
          },
        ]
      }
      if (a)
        for (let t of o.segments)
          for (let n of [t.control1, t.control2, t.end])
            ((n.x = Math.max(0, Math.min(e.width, n.x))), (n.y = Math.max(0, Math.min(e.height, n.y))))
      let s = [],
        d = [],
        c = r,
        u = r
      for (let t = 0; t <= 64; t++) {
        let n = t / 64,
          l = (0, f.jBG)(o, g(n)),
          a = (0, f.Cf9)(l.tangent) - f.XHD
        c += ((((a - c + 180) % 360) + 360) % 360) - 180
        let p = Math.min(1, n / 0.35),
          h = p ** 2 * (3 - 2 * p)
        if (((u = r + (c - r) * h), i)) {
          let e = Math.max(0, (n - 0.75) / 0.25)
          u += (360 * Math.round(u / 360) - u) * e ** 2 * (3 - 2 * e)
        }
        ;(s.push({
          offset: n,
          transform: `translate(${(l.point.x / e.width) * 100}%, ${(l.point.y / e.height) * 100}%)`,
        }),
          d.push({ offset: n, transform: `rotate(${u}deg)` }))
      }
      return { positions: s, rotations: d, rotation: u }
    }
    var b = n("x77z")
    function y(e) {
      let t,
        n,
        o,
        p,
        h,
        f,
        g,
        y,
        k,
        I,
        E,
        j = (0, i.c)(36),
        {
          requestId: M,
          children: T,
          homeRef: A,
          active: P,
          collapsed: L,
          hideTooltipWhenInactive: F,
          boundary: R,
          cursorRef: D,
          constrainToBoundary: N,
        } = e,
        z = void 0 === P || P,
        B = void 0 !== L && L,
        O = void 0 !== F && F,
        V = void 0 === N || N,
        H = (0, a.useRef)(null),
        K = (0, a.useRef)(null),
        $ = (0, a.useRef)(null),
        q = (0, c.I)(),
        W = (0, d.dz)(),
        U = (0, a.useRef)(!1),
        G = (0, a.useRef)(!1),
        _ = (0, a.useRef)(0),
        X = (0, a.useRef)(null)
      return (
        j[0] !== R || j[1] !== V || j[2] !== W
          ? ((t = () => {
              let e = H.current,
                t = e?.parentElement
              if (!V || null == e || null == t || null == R) return
              let n = () => {
                  let n = t.getBoundingClientRect(),
                    r = R.getBoundingClientRect(),
                    i = parseFloat(getComputedStyle(e.ownerDocument.documentElement).fontSize),
                    l = Math.min(r.right, window.innerWidth),
                    a = (16 * i + 24 + 4) * W + 8
                  e.style.width = `${Math.max(1, Math.min(n.width, l - n.left - a))}px`
                },
                r = (0, l.ll)(t, e, n),
                i = new ResizeObserver(n)
              return (
                i.observe(R),
                () => {
                  ;(r(), i.disconnect(), (e.style.width = ""))
                }
              )
            }),
            (n = [R, W, V]),
            (j[0] = R),
            (j[1] = V),
            (j[2] = W),
            (j[3] = t),
            (j[4] = n))
          : ((t = j[3]), (n = j[4])),
        (0, a.useLayoutEffect)(t, n),
        j[5] !== z || j[6] !== A || j[7] !== q || j[8] !== M || j[9] !== W
          ? ((o = () => {
              let e = H.current,
                t = K.current
              if (null == e || null == t) return
              let n = s()(M),
                r = () => ({ x: 0.1 + 0.8 * n(), y: 0.1 + 0.8 * n() }),
                i = r(),
                l = _.current,
                a = [],
                o = S,
                d = !0,
                c = () => {
                  e.dispatchEvent(new Event(b.A))
                },
                u = () => {
                  for (let t of a) e.ownerDocument.hidden || !d ? t.pause() : "paused" === t.playState && t.play()
                  c()
                },
                p = new IntersectionObserver((e) => {
                  let [t] = e
                  ;((d = t.isIntersecting), u())
                })
              ;(null != e.parentElement && p.observe(e.parentElement),
                e.ownerDocument.addEventListener("visibilitychange", u))
              let h = (n, r, i, l) => {
                  let o = a
                  a = [e.animate(n, { duration: i, fill: "forwards" }), t.animate(r, { duration: i, fill: "forwards" })]
                  let s = e.ownerDocument.timeline.currentTime
                  for (let e of a) e.startTime = s
                  for (let e of ((a[0].onfinish = l), o)) ((e.onfinish = null), e.cancel())
                  u()
                },
                m = () => {
                  let a = { width: Math.max(1, e.clientWidth), height: Math.max(1, e.clientHeight) },
                    o = r()
                  for (; 0.25 > Math.hypot(o.x - i.x, o.y - i.y);) o = r()
                  let s = [],
                    d = []
                  for (let e = 0; e < 3; e++) {
                    let t = Math.min(24, 0.045 * a.width, 0.045 * a.height) * (0.8 + 0.2 * n()),
                      r = n() * Math.PI * 2,
                      o = 0.5 > n() ? -1 : 1
                    for (let n = +(0 !== e); n <= 48; n++) {
                      let c = n / 48,
                        u = c * c * (3 - 2 * c) * Math.PI * 2,
                        p = (Math.cos(r + u * o) - Math.cos(r)) * t,
                        h = (Math.sin(r + u * o) - Math.sin(r)) * t,
                        m = ((e + c) / 3) * 0.9
                      ;(s.push({
                        offset: m,
                        transform: `translate(${(i.x + p / a.width) * 100}%, ${(i.y + h / a.height) * 100}%)`,
                      }),
                        d.push({ offset: m, transform: `rotate(${l + 4 * Math.sin(u * o)}deg)` }))
                    }
                  }
                  let c = x(a, { x: i.x * a.width, y: i.y * a.height }, { x: o.x * a.width, y: o.y * a.height }, l, {
                    constrain: !0,
                  })
                  ;(s.push(...c.positions.map(C)),
                    d.push(...c.rotations.map(w)),
                    (l = c.rotation),
                    h(s, d, 2e4, () => {
                      ;((i = o),
                        (e.style.transform = `translate(${100 * i.x}%, ${100 * i.y}%)`),
                        (t.style.transform = `rotate(${l}deg)`),
                        m())
                    }))
                },
                f = A?.current,
                g = e.parentElement
              if (null != f && null != g) {
                let n = () => {
                    let e = g.getBoundingClientRect()
                    if (!f.isConnected && null != X.current) return X.current
                    let t = f.getBoundingClientRect(),
                      n = { x: t.left + t.width / 2 + -4.79244 * W - e.left, y: t.top + -6.70616 * W - e.top }
                    return ((X.current = n), n)
                  },
                  r = () => {
                    if (z || a.some(v)) return
                    let t = n()
                    ;((e.style.transform = `translate(${t.x}px, ${t.y}px)`), c())
                  },
                  s = new ResizeObserver(r)
                ;(s.observe(g),
                  s.observe(f),
                  window.addEventListener("resize", r),
                  document.addEventListener("scroll", r, !0),
                  (o = () => {
                    ;(s.disconnect(),
                      window.removeEventListener("resize", r),
                      document.removeEventListener("scroll", r, !0))
                  }))
                let d = g.getBoundingClientRect(),
                  u = { width: Math.max(1, e.clientWidth), height: Math.max(1, e.clientHeight) },
                  p = e.getBoundingClientRect(),
                  b = n(),
                  y = G.current ? { x: p.left - d.left, y: p.top - d.top } : b,
                  w = z ? { x: i.x * u.width, y: i.y * u.height } : b,
                  C = U.current
                if (
                  ((G.current = !0),
                  (U.current = z),
                  (e.style.transform = z ? `translate(${100 * i.x}%, ${100 * i.y}%)` : `translate(${w.x}px, ${w.y}px)`),
                  (t.style.opacity = z ? "1" : "0"),
                  !q && (z || C))
                ) {
                  let e = x(u, y, w, l, { dock: !z, undock: z && !C })
                  ;((l = e.rotation),
                    (t.style.opacity = "1"),
                    h(e.positions, e.rotations, 2e3, () => {
                      if (((t.style.transform = `rotate(${l}deg)`), (t.style.opacity = z ? "1" : "0"), z)) m()
                      else {
                        for (let e of a) e.cancel()
                        r()
                      }
                      c()
                    }))
                }
              } else ((e.style.transform = `translate(${100 * i.x}%, ${100 * i.y}%)`), !q && z && m())
              return (
                c(),
                () => {
                  if ((o(), p.disconnect(), e.ownerDocument.removeEventListener("visibilitychange", u), null != A)) {
                    e.style.transform = getComputedStyle(e).transform
                    let n = getComputedStyle(t).transform
                    t.style.transform = n
                    let r = new DOMMatrixReadOnly(n)
                    _.current = (180 * Math.atan2(r.b, r.a)) / Math.PI
                  }
                  for (let e of a) ((e.onfinish = null), e.cancel())
                }
              )
            }),
            (p = [M, q, A, z, W]),
            (j[5] = z),
            (j[6] = A),
            (j[7] = q),
            (j[8] = M),
            (j[9] = W),
            (j[10] = o),
            (j[11] = p))
          : ((o = j[10]), (p = j[11])),
        (0, a.useEffect)(o, p),
        j[12] !== D ? ((h = (0, u.P)(H, D)), (j[12] = D), (j[13] = h)) : (h = j[13]),
        j[14] !== A || j[15] !== W
          ? ((f = null == A ? void 0 : { zoom: W }), (j[14] = A), (j[15] = W), (j[16] = f))
          : (f = j[16]),
        j[17] !== M ? ((g = (0, r.jsx)(m, { requestId: M })), (j[17] = M), (j[18] = g)) : (g = j[18]),
        j[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)("div", {
              ref: $,
              className: "absolute",
              style: { left: -3.25, top: -1.34, width: 18, height: 18 },
            })),
            (j[19] = y))
          : (y = j[19]),
        j[20] !== f || j[21] !== g
          ? ((k = (0, r.jsxs)("div", {
              ref: K,
              className: "absolute top-0 left-0 origin-top-left",
              "aria-hidden": "true",
              style: f,
              children: [g, y],
            })),
            (j[20] = f),
            (j[21] = g),
            (j[22] = k))
          : (k = j[22]),
        j[23] !== z ||
        j[24] !== R ||
        j[25] !== T ||
        j[26] !== B ||
        j[27] !== O ||
        j[28] !== A ||
        j[29] !== q ||
        j[30] !== M
          ? ((I =
              null != T &&
              (z || !O) &&
              (0, r.jsx)(
                b.y,
                { reducedMotion: q, collapsed: B, homeRef: z ? void 0 : A, boundary: R, glyphRef: $, children: T },
                M,
              )),
            (j[23] = z),
            (j[24] = R),
            (j[25] = T),
            (j[26] = B),
            (j[27] = O),
            (j[28] = A),
            (j[29] = q),
            (j[30] = M),
            (j[31] = I))
          : (I = j[31]),
        j[32] !== k || j[33] !== I || j[34] !== h
          ? ((E = (0, r.jsxs)("div", {
              ref: h,
              className: "absolute inset-0",
              "data-generation-cursor": !0,
              children: [k, I],
            })),
            (j[32] = k),
            (j[33] = I),
            (j[34] = h),
            (j[35] = E))
          : (E = j[35]),
        E
      )
    }
    function v(e) {
      return "running" === e.playState
    }
    function w(e) {
      return { ...e, offset: 0.9 + 0.1 * e.offset }
    }
    function C(e) {
      return { ...e, offset: 0.9 + 0.1 * e.offset }
    }
    function S() {}
  },
  eq9N(e, t, n) {
    ;(n.r(t), n.d(t, { PresentationPanel: () => oB }))
    var r = n("ABep"),
      i = n("QosV"),
      l = n("Ln8V"),
      a = n("KKIx"),
      o = n("WJ1E"),
      s = n("on57"),
      d = n("zd8w")
    class c {
      onError
      quietDelayMs
      #e = new Map()
      #t = null
      #n = null
      #r = !1
      #i = 0
      #l = null
      #a = !1
      constructor(e, t = 500) {
        ;((this.onError = e), (this.quietDelayMs = t))
      }
      schedule(e, t, n = !1) {
        let r = Date.now()
        ;(this.#e.set(e, { run: t, lastRequestedAt: r, immediate: n || this.#a }), this.#o())
      }
      invalidateContent(e) {
        ;((this.#i = Date.now() + this.quietDelayMs), (this.#l = e), this.#o())
      }
      replacePendingContentRefresh(e) {
        null != this.#l && (this.#l = e)
      }
      cancelPending() {
        ;(this.#e.clear(), (this.#i = 0), (this.#l = null), this.#s())
      }
      #s() {
        ;(null != this.#t && clearTimeout(this.#t),
          (this.#t = null),
          null != this.#n && cancelIdleCallback(this.#n),
          (this.#n = null))
      }
      #d(e) {
        return e.lastRequestedAt + (e.immediate ? 0 : this.quietDelayMs)
      }
      #o() {
        if ((this.#s(), this.#r)) return
        let e = this.#i - Date.now()
        if (e > 0) {
          this.#t = setTimeout(() => {
            ;((this.#t = null), this.#o())
          }, e)
          return
        }
        if (null != this.#l) return void this.#c()
        if (0 === this.#e.size) return
        let t = Math.min(...Array.from(this.#e.values(), (e) => this.#d(e)))
        this.#t = setTimeout(
          () => {
            ;((this.#t = null), this.#c())
          },
          Math.max(0, t - Date.now()),
        )
      }
      #c() {
        "function" == typeof requestIdleCallback
          ? (this.#n = requestIdleCallback(() => {
              ;((this.#n = null), this.#u())
            }))
          : this.#u()
      }
      async #u() {
        if (!this.#r) {
          if (Date.now() < this.#i) return void this.#o()
          this.#r = !0
          try {
            let e,
              t = this.#l
            ;((this.#l = null), (this.#a = !0))
            try {
              t?.()
            } finally {
              this.#a = !1
            }
            let n = Date.now()
            for (let t of this.#e) this.#d(t[1]) <= n && (!e || this.#d(t[1]) < this.#d(e[1])) && (e = t)
            if (!e) return
            ;(this.#e.delete(e[0]), await e[1].run())
          } catch (e) {
            this.onError(e)
          } finally {
            ;((this.#r = !1), this.#o())
          }
        }
      }
    }
    let u = { subscribe: () => () => {}, getSnapshot: () => !0 }
    var p = n("PBtR"),
      h = n("hoEd"),
      m = n("Trs6"),
      f = n("D75B"),
      g = n("d20N"),
      x = n("XzHn"),
      b = n("NIrs"),
      y = n("ShYy"),
      v = n("EZmZ"),
      w = n("lGpa"),
      C = n("UXwi"),
      S = n("J7Ro"),
      k = n("v7qY"),
      I = n("Ga65"),
      E = n("mIgx"),
      j = n("PGoy"),
      M = n("lw4e"),
      T = n("Secc"),
      A = n("MK2r"),
      P = n("GjbY"),
      L = n("iZlg"),
      F = n("CVcK"),
      R = n("fGv0"),
      D = n("DHDI"),
      N = n("lyO4"),
      z = n("sLeL"),
      B = n("Mpaz"),
      O = n("SP4Q")
    function V(e, t, n) {
      let r = t?.querySelector("button[data-slide-id]"),
        i = r?.querySelector("[data-presentation-thumbnail-surface]")
      if (!t || !r || !i || t.ownerDocument.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return null
      let l = r.getBoundingClientRect(),
        a = i.getBoundingClientRect(),
        o = new Map(
          [...t.querySelectorAll("[data-drag-slide-id]")].map((e) => [
            e.dataset.dragSlideId,
            e.getBoundingClientRect(),
          ]),
        ),
        s = new Set(n)
      return e.flatMap((e) => {
        let t = e?.dataset.slideId
        if (!e || !t) return []
        let n = s.has(t) ? l : e.getBoundingClientRect(),
          i = o.get(t)
        return [
          { slideId: t, x: n.x + (i ? i.x - a.x : 0), y: n.y + (i ? i.y - a.y : 0), isFront: t === r.dataset.slideId },
        ]
      })
    }
    var H = n("iqg4"),
      K = n("jVS7"),
      $ = n("uyg3"),
      q = n("SUja"),
      W = n("d2YW")
    function U(e, t) {
      return t && t.width > 0 && t.height > 0
        ? { width: t.width, height: t.height }
        : { width: e.clientWidth, height: e.clientHeight }
    }
    function G(e, t) {
      return U(e, { width: t.contentRect.width, height: t.contentRect.height })
    }
    var _ = n("HrOV"),
      X = n("YwcJ"),
      Z = n("uY8n")
    let J = {
      find: m.V,
      presentationVersion: 0,
      previewVersion: 0,
      selectedSlideIdx: 0,
      selectedSlideIds: [],
      slideIds: [],
      slideLabels: [],
      hiddenSlideIds: [],
      slideCount: 0,
      zoom: 1,
      fitScale: null,
      selectedSlideFrame: null,
      selectedSlideElementTargets: [],
      selectionGeometry: {
        bounds: null,
        targetCount: 0,
        canResizeEdges: !1,
        frame: null,
        primaryTarget: null,
        hoveredTarget: null,
      },
      hyperlinkTargets: [],
      previewFrames: [],
      selectedElementIds: [],
      primarySelectedElementId: null,
      hoveredElementId: null,
      activeInteractionKind: null,
      selectionRotationFrame: null,
      smartGuideIndicators: [],
      notesText: "",
      canUndo: !1,
      canRedo: !1,
      canInsertWidgets: !1,
      localAwarenessCursor: null,
      awarenessCursors: [],
      awarenessSelections: [],
      slideRect: null,
      textLayoutBlocks: [],
      textEditState: null,
      textEditRevision: 0,
      inspector: {
        selectedElements: [],
        slideFillMode: "none",
        slideFill: null,
        themeColors: [],
        slideElements: [],
        selectedElement: null,
      },
      commentThreads: [],
      camera: null,
      displayColors: { backgroundColor: "#FFFFFF", darkMode: !1 },
    }
    function Y(e, t) {
      let n = e.ownerDocument,
        r = n.defaultView
      if (!r) return () => {}
      let i = r.matchMedia("(prefers-reduced-motion: reduce)"),
        l = void 0 === r.IntersectionObserver,
        a = !1,
        o = null,
        s = () => {
          let e = n.documentElement.dataset.reducedMotion,
            r = null == e ? i.matches : "true" === e,
            s = !a && !n.hidden && l
          ;(o?.reducedMotion !== r || o.visible !== s) && t((o = { reducedMotion: r, visible: s }))
        },
        d =
          void 0 === r.IntersectionObserver
            ? null
            : new r.IntersectionObserver(([e]) => {
                ;((l = e?.isIntersecting === !0), s())
              }),
        c = new r.MutationObserver(s)
      return (
        c.observe(n.documentElement, { attributes: !0, attributeFilter: ["data-reduced-motion"] }),
        d?.observe(e),
        i.addEventListener("change", s),
        n.addEventListener("visibilitychange", s),
        s(),
        () => {
          a ||
            ((a = !0),
            d?.disconnect(),
            c.disconnect(),
            i.removeEventListener("change", s),
            n.removeEventListener("visibilitychange", s),
            s())
        }
      )
    }
    class Q {
      #p = 0
      #h = new Map()
      #m = new Set()
      #f = { generation: 0, slideId: null, widgets: [] }
      subscribe = (e) => (
        this.#m.add(e),
        () => {
          this.#m.delete(e)
        }
      )
      getSnapshot = () => this.#f
      update(e) {
        if (!(e.generation < this.#p)) {
          if ((e.generation > this.#p && ((this.#p = e.generation), this.#h.clear()), "widget-documents" === e.kind)) {
            for (let t of e.documents) this.#h.set(t.assetId, t.html)
            return
          }
          for (let t of ((this.#f = {
            generation: e.generation,
            slideId: e.slideId,
            widgets: e.widgets.map((e) => ({ ...e, html: this.#h.get(e.assetId) })),
          }),
          this.#m))
            t()
        }
      }
      dispose() {
        ;(this.#h.clear(), this.#m.clear(), (this.#f = { generation: this.#p, slideId: null, widgets: [] }))
      }
    }
    class ee {
      resolve
      hydrate
      #p = 0
      #e = new Set()
      #g = new Set()
      #x = new Map()
      #b = !1
      constructor(e, t) {
        ;((this.resolve = e), (this.hydrate = t))
      }
      update(e, t) {
        if (!this.#b) {
          for (let n of (t !== this.#p && ((this.#p = t), this.#g.clear(), this.#x.clear()),
          (this.#e = new Set(e.map(({ assetId: e }) => e))),
          this.#g))
            this.#e.has(n) || this.#g.delete(n)
          this.ensure(e, t, !1).catch(() => {})
        }
      }
      async ensure(e, t, n = !0) {
        if (this.#b || t !== this.#p) throw Error("Presentation changed while loading HTML widgets.")
        let r = e.filter(({ assetId: e }) => (n || this.#e.has(e)) && !this.#x.has(e) && (n || !this.#g.has(e)))
        if (r.length > 0) {
          let e = new Set(r.map(({ assetId: e }) => e)),
            n = Promise.resolve()
              .then(() => this.resolve(r))
              .then(async (n) => {
                if (this.#b || t !== this.#p) return
                let r = n.filter(({ assetId: t }) => e.has(t))
                r.length > 0 && (await this.hydrate(r, t))
              })
              .finally(() => {
                for (let t of e) this.#x.get(t) === n && this.#x.delete(t)
              })
          for (let t of e) (this.#g.add(t), this.#x.set(t, n))
        }
        if ((await Promise.all(new Set(e.map(({ assetId: e }) => this.#x.get(e)))), this.#b || t !== this.#p))
          throw Error("Presentation changed while loading HTML widgets.")
      }
      dispose() {
        ;((this.#b = !0), this.#e.clear(), this.#g.clear(), this.#x.clear())
      }
    }
    let et = 1
    function en(e, t) {
      return e?.width === t?.width && e?.height === t?.height && e?.dpr === t?.dpr
    }
    function er(e, t, n) {
      ;((n?.resizeIntrinsicBitmap ?? !0) &&
        ((e.width = Math.max(1, Math.round(t.width * t.dpr))), (e.height = Math.max(1, Math.round(t.height * t.dpr)))),
        (e.style.width = `${t.width}px`),
        (e.style.height = `${t.height}px`))
    }
    class ei {
      get isActive() {
        return !this.#y && this.#v.isActive
      }
      get hasRenderedFrame() {
        return null != this.#w
      }
      get renderedFrame() {
        return this.#w
      }
      subscribeToRenderedFrame(e) {
        return this.#C.subscribe(e)
      }
      #S = null
      #w = null
      #C = new $.c()
      id = et++
      diagnostics = void 0
      #k = (0, q.V)("presentation-main-controller")
      #I = (function (e = J) {
        return new Z.Y(e)
      })()
      #E = new $.c()
      #j = new $.c()
      #M = new Set()
      #T = new Q()
      widgets = this.#T
      #A = null
      chartEditing = {
        subscribe: (e) => (
          this.#M.add(e),
          () => {
            this.#M.delete(e)
          }
        ),
        getSnapshot: () => this.#A,
        edit: (e) => this.dispatch({ kind: "edit-chart", edit: e }),
      }
      #P = new Set()
      #L = null
      tableEditing = {
        subscribe: (e) => (
          this.#P.add(e),
          () => {
            this.#P.delete(e)
          }
        ),
        getSnapshot: () => this.#L,
        interact: (e) => this.#v.dispatch({ kind: "table-interaction", interaction: e }),
        edit: (e) => this.dispatch({ kind: "edit-table", edit: e }),
      }
      #F = new Set()
      #R = new Set()
      #D = []
      #N = 0
      #z
      #v
      #B = null
      #O = null
      #V = "slide"
      #H = {}
      #K = 1
      #$ = null
      #q = new Set()
      #W = null
      #U = null
      #G = null
      #_ = null
      #X = null
      #Z = null
      #J = null
      #Y = null
      #Q = null
      #ee = 1
      #et = null
      #en = null
      #er
      #ei = "#FFFFFF"
      #el = "#666666"
      #ea
      #eo
      #es
      #ed
      #ec = "waiting"
      #eu = new $.c()
      backgroundSlideWork = { subscribe: (e) => this.#eu.subscribe(e), getSnapshot: () => "painted" === this.#ec }
      #ep = null
      #y = !1
      #eh = !1
      #em = null
      #ef = 0
      #eg = new AbortController()
      #ex
      #eb
      #ey
      #ev = !1
      #ew = !1
      constructor(e = {}) {
        ;((this.#ew = e.liveWidgetsEnabled ?? !1),
          (this.#ex = e.uploadImage),
          (this.#eb = e.resolveImageHydrationAssets),
          e.resolveHtmlHydrationAssets &&
            (this.#ey = new ee(e.resolveHtmlHydrationAssets, (e, t) => this.hydrateHtmlAssets(e, t))),
          (this.#er = e.onFirstSlideRendered),
          (this.#ed = e.onDrawingPreferencesChange),
          (this.#eo = e.onImportError),
          (this.#es = e.onImportReady))
        let t = e.bootstrapSource
            ? null
            : (e.presentationProto ?? e.presentation?.toProto() ?? o.Presentation.create().toProto()),
          n = (e.workerFactory ?? W.I)()
        ;((this.#v = new B.OK(
          n,
          (e) => this.#eC(e),
          (e, t) => {
            if (!this.#ev && this.#eo) return void this.#eo(t ?? Object.assign(Error(e), { stack: "" }))
            throw Error(e)
          },
          this.diagnostics,
          e.onWorkerFailure,
          null == e.onWorkerStarted ? void 0 : () => e.onWorkerStarted?.(this),
        )),
          this.#k.debug("bootstrap", {
            controllerId: this.id,
            slideCount: t?.slides?.length,
            initialSelectedSlideIdx: e.initialSelectedSlideIdx,
            initialZoom: e.initialZoom,
          }))
        let r = {
          gpuRendering: e.gpuRendering,
          initialCrdtState: e.initialCrdtState,
          initialDrawingPreferences: e.initialDrawingPreferences,
          initialSelectedSlideIdx: e.initialSelectedSlideIdx,
          initialZoom: e.initialZoom,
          smartGuidesEnabled: e.smartGuidesEnabled,
          liveWidgetsEnabled: this.#ew,
        }
        if (e.bootstrapSource) {
          let t = e.bootstrapSource
          this.#v.bootstrap({ ...r, bootstrapSource: t }, "source-bytes" === t.kind ? [t.bytes] : void 0)
        } else t && this.#v.bootstrap({ ...r, presentationProto: t })
        this.#ea = (0, X.ensurePopcornPresentationRenderDepsLoaded)()
          .then(() => {
            let e = (0, K.getPopcornCarlitoFontFaceSourcesFromDocument)()
            ;(this.#k.debug("font-render-deps-ready", {
              fontCount: e.length,
              fonts: e.map((e) => ({
                family: e.family,
                style: e.style,
                weight: e.weight,
                format: e.format,
                src: e.src,
              })),
              fontDebug: (0, K.h2)(),
            }),
              0 !== e.length &&
                (this.#v.dispatch({ kind: "install-font-faces", fonts: e }),
                this.#k.debug("font-install-dispatched", { fontCount: e.length })))
          })
          .catch(() => {})
      }
      subscribe(e) {
        return this.#I.subscribe(e)
      }
      getState() {
        return this.#I.getState()
      }
      getSnapshot() {
        return this.getState()
      }
      async prepareImage(e, t) {
        let n = this.#ef,
          r = this.getSnapshot(),
          i = r.slideIds[r.selectedSlideIdx],
          l = t ? AbortSignal.any([t, this.#eg.signal]) : this.#eg.signal,
          a = () => {
            l.throwIfAborted()
            let e = this.getSnapshot()
            if (!this.#eh || n !== this.#ef || e.slideIds[e.selectedSlideIdx] !== i)
              throw Error("Image upload target is no longer editable.")
          }
        if ((a(), !this.#ex)) return e
        let o = await this.#ex(e, l)
        a()
        let { bytes: s, ...d } = e
        return { ...d, uri: o }
      }
      dispatch(e, t) {
        ;(this.#eS(), this.#v.dispatch(t ? { ...e, command: t } : e))
      }
      openTableContextMenu(e) {
        this.#v.dispatch({ kind: "open-table-context-menu", point: e })
      }
      subscribeEditEvents(e) {
        return this.#E.subscribe(e)
      }
      subscribeCommentSubmissions(e) {
        return this.#j.subscribe(e)
      }
      async retryCommentSubmission(e) {
        if (this.#y || "presentation" !== e.artifactKind || !e.body.trim()) return !1
        let t = this.getSnapshot()
        if ("add" === e.type) {
          let { slideId: n, position: r, elementId: i, textRange: l } = e.target
          return (
            !!t.slideIds.includes(n) &&
            null == l &&
            (null == i ||
              t.slideIds[t.selectedSlideIdx] !== n ||
              !!t.selectedSlideElementTargets.some((e) => e.id === i)) &&
            (await this.addCommentThread(
              n,
              e.body,
              null == i ? { author: e.author, position: r } : { author: e.author, position: r, elementId: i },
            )) != null
          )
        }
        let n = () => this.getSnapshot().commentThreads?.find((t) => t.threadId === e.threadId),
          r = n()
        if (!r?.comments.some((e) => !e.isDeleted)) return !1
        let i = new Set(r.comments.map((e) => e.id))
        return (
          this.replyToCommentThread(e.threadId, e.body, e.author),
          await this.flushCrdtUpdates(),
          n()?.comments.some((t) => !i.has(t.id) && t.text === e.body.trim()) === !0
        )
      }
      focusTextInput(e) {
        if (this.#y || !this.#eh) return !1
        let t = this.getSnapshot()
        return (
          t.slideIds[t.selectedSlideIdx] === e.slideId &&
          t.textEditState?.activeBlockId === e.blockId &&
          (this.#S?.(e.blockId) ?? !1)
        )
      }
      attachViewport(e) {
        if (
          "u" < typeof window ||
          "u" < typeof Worker ||
          "u" < typeof HTMLCanvasElement ||
          "u" < typeof OffscreenCanvas
        )
          throw Error("Popcorn presentation viewport requires Worker and OffscreenCanvas support.")
        let t = e.focusTextInput ?? null
        this.#S = t
        let n = null,
          r = (t) => {
            t && (n = t)
            let r = U(e.host, n)
            return { width: Math.max(1, r.width), height: Math.max(1, r.height), dpr: window.devicePixelRatio || 1 }
          },
          i = () => {
            ;((this.#et = null), this.#ek())
          },
          l = (e) => {
            ;((this.#Y = r(e)),
              null != this.#et && window.cancelAnimationFrame(this.#et),
              (this.#et = window.requestAnimationFrame(i)))
          },
          a = this.#U !== e.canvas
        if ((a && (this.#U = e.canvas), (this.#G = e.canvas.getContext("2d")), !this.#G))
          throw Error("Presentation viewport canvas 2d context is unavailable.")
        let o = !!(e.overlayCanvas && this.#_ !== e.overlayCanvas)
        o && e.overlayCanvas && ((this.#_ = e.overlayCanvas), (this.#X = e.overlayCanvas.getContext("2d")))
        let s = r()
        ;((this.#J ??= { ...s }),
          (this.#Y ??= { ...s }),
          (this.#w = null),
          er(e.canvas, this.#J, { resizeIntrinsicBitmap: !0 }),
          e.overlayCanvas && er(e.overlayCanvas, this.#J, { resizeIntrinsicBitmap: !0 }),
          this.#ea.then(() => {
            if (this.#y) return
            let t = r()
            if (((this.#Y = { ...t }), null == this.#J && this.#eI(t), a)) {
              if (this.#U !== e.canvas) return
              this.#v.dispatch({ kind: "attach-canvas", width: t.width, height: t.height, dpr: t.dpr })
            } else this.#U === e.canvas && l()
            if (e.overlayCanvas)
              if (o) {
                if (this.#_ !== e.overlayCanvas) return
                let n = new OffscreenCanvas(
                  Math.max(1, Math.round(t.width * t.dpr)),
                  Math.max(1, Math.round(t.height * t.dpr)),
                )
                this.#v.dispatch(
                  { kind: "attach-overlay-canvas", canvas: n, width: t.width, height: t.height, dpr: t.dpr },
                  [n],
                )
              } else this.#_ === e.overlayCanvas && l()
          }))
        let d =
          "u" > typeof ResizeObserver
            ? new ResizeObserver((t) => {
                let n = t[0]
                l(n ? G(e.host, n) : null)
              })
            : null
        d?.observe(e.host)
        let c = () => {
          l()
        }
        ;(window.addEventListener("resize", c), this.#Z?.())
        let u = Y(e.host, (e) => {
          this.#v.dispatch({ kind: "set-overlay-animation-state", ...e })
        })
        return (
          (this.#Z = u),
          () => {
            ;(this.#S === t && (this.#S = null),
              u(),
              this.#Z === u && (this.#Z = null),
              null != this.#et && (window.cancelAnimationFrame(this.#et), (this.#et = null)),
              d?.disconnect(),
              window.removeEventListener("resize", c))
          }
        )
      }
      #eI(e) {
        let t = !en(this.#J, e)
        ;((this.#J = { ...e }),
          this.#U && (t && (this.#w = null), er(this.#U, e, { resizeIntrinsicBitmap: t })),
          this.#_ && er(this.#_, e, { resizeIntrinsicBitmap: t }),
          this.#eE())
      }
      requestShapeClipboard() {
        let e = this.getSnapshot(),
          t = e.slideIds[e.selectedSlideIdx]
        return t && 0 !== e.selectedElementIds.length
          ? this.#v
              .request({
                kind: "shape-clipboard",
                slideId: t,
                selectedElementIds: [...e.selectedElementIds],
                presentationVersion: e.presentationVersion,
              })
              .then((e) => {
                if ("shape-clipboard" !== e.kind) throw Error(`Unexpected clipboard response: ${e.kind}`)
                return e.result
              })
          : Promise.resolve(null)
      }
      requestShapeClipboardPng(e, t, n) {
        return this.#ea.then(() =>
          this.#v
            .request({ kind: "shape-clipboard-png", serialized: e, slideId: t, presentationVersion: n })
            .then((e) => {
              if ("shape-clipboard-png" !== e.kind) throw Error(`Unexpected clipboard image response: ${e.kind}`)
              return e.result
            }),
        )
      }
      async exportFile(e) {
        let t = this.#eg.signal
        ;(await (0, H.o)(this.#ea, t), await this.textClear())
        let n = await this.#v.request({ kind: "export-file", format: e.format })
        if ("export-file-assets" === n.kind) {
          let { images: r, html: i, generation: l } = n,
            a = []
          if (r.length > 0 && this.#eb) {
            let e = (0, H.o)(this.#eb(r), t).then((e) => this.hydrateImageAssets(e, l))
            a.push(e)
          }
          ;(i.length > 0 && this.#ey && a.push(this.#ey.ensure(i, l)),
            await (0, H.o)(Promise.all(a), t),
            (n = await this.#v.request({ kind: "export-file", format: e.format, expectedGeneration: l })))
        }
        if ("export-file-assets" === n.kind) {
          let e = "Some HTML widgets are still loading. Try downloading again."
          throw (n.images.length > 0 && (e = "Some images are still loading. Try downloading again."), Error(e))
        }
        if ("export-file-error" === n.kind) throw Error(n.message)
        if ("export-file" !== n.kind) throw Error(`Unexpected file export response: ${n.kind}`)
        return new Uint8Array(n.bytes)
      }
      requestExport(e) {
        return this.#v.request({ kind: "export", format: e?.format ?? "proto" }).then((e) => {
          if ("export" !== e.kind) throw Error(`Unexpected export response: ${e.kind}`)
          return e.result
        })
      }
      requestCrdtSnapshot() {
        return this.#v.request({ kind: "crdt-snapshot" }).then((e) => {
          if ("crdt-snapshot" !== e.kind) throw Error(`Unexpected CRDT snapshot response: ${e.kind}`)
          return new Uint8Array(e.result)
        })
      }
      async requestJsxStreamContext(e = {}) {
        let t = await this.#v.request({ kind: "jsx-stream-context", options: e })
        if ("jsx-stream-context-error" === t.kind) throw Error(t.message)
        if ("jsx-stream-context" !== t.kind) throw Error(`Unexpected JSX stream context response: ${t.kind}`)
        return t.result
      }
      async runJsxStreamCommand(e) {
        let t = await this.#v.request({ kind: "jsx-stream", command: e })
        if ("jsx-stream" !== t.kind) throw Error(`Unexpected JSX stream response: ${t.kind}`)
        return t.result
      }
      async flushCrdtUpdates() {
        return (
          await this.#em?.catch(() => void 0),
          this.#v.request({ kind: "flush-crdt-updates" }).then((e) => {
            if ("flush-crdt-updates" !== e.kind) throw Error(`Unexpected CRDT flush response: ${e.kind}`)
          })
        )
      }
      loadInitialCrdtState(e) {
        return (
          this.#eS(),
          (this.#W = null),
          this.#v.request({ kind: "load-initial-crdt-state", update: e }).then((e) => {
            if ("load-initial-crdt-state" !== e.kind) throw Error(`Unexpected initial CRDT load response: ${e.kind}`)
          })
        )
      }
      applyCrdtUpdate(e) {
        return (
          this.#eS(),
          (this.#W = null),
          this.#v.request({ kind: "apply-crdt-update", update: e }).then((e) => {
            if ("apply-crdt-update" !== e.kind) throw Error(`Unexpected CRDT apply response: ${e.kind}`)
          })
        )
      }
      hydrateImageAssets(e, t = this.#N) {
        return this.#v.request({ kind: "hydrate-image-assets", assets: e, generation: t }).then((e) => {
          if ("hydrate-image-assets" !== e.kind) throw Error(`Unexpected image hydration response: ${e.kind}`)
        })
      }
      async hydrateHtmlAssets(e, t) {
        let n = [...new Set(e.map(({ data: e }) => e.buffer))],
          r = await this.#v.request({ kind: "hydrate-html-assets", assets: e, generation: t }, n)
        if ("hydrate-html-assets" !== r.kind) throw Error(`Unexpected HTML hydration response: ${r.kind}`)
        if (r.error) throw Error(r.error)
      }
      setImageHydrationPrioritySlideIds(e) {
        this.#y || this.#v.dispatch({ kind: "set-image-hydration-priority-slides", slideIds: e })
      }
      setLoadingImageAssets(e, t) {
        this.#y || this.#v.dispatch({ kind: "set-loading-image-assets", requests: e, generation: t })
      }
      subscribeCrdtUpdates(e) {
        return (
          this.#F.add(e),
          () => {
            this.#F.delete(e)
          }
        )
      }
      subscribeImageHydrationRequests(e) {
        return (
          this.#R.add(e),
          this.#D.length > 0 && e(this.#D, this.#N),
          () => {
            this.#R.delete(e)
          }
        )
      }
      replaceFromProto(e) {
        return (
          this.#eS(),
          (this.#W = null),
          this.#v.request({ kind: "replace-from-proto", presentationProto: e }).then((e) => {
            if ("replace-from-proto" !== e.kind) throw Error(`Unexpected replace response: ${e.kind}`)
          })
        )
      }
      dispose() {
        this.#y ||
          ((this.#y = !0),
          (this.#S = null),
          this.#eg.abort(),
          this.#Z?.(),
          (this.#Z = null),
          (this.#U = null),
          (this.#G = null),
          (this.#_ = null),
          (this.#X = null),
          this.#en?.bitmap.close(),
          this.#en?.overlayBitmap?.close(),
          (this.#en = null),
          null != this.#et && (window.cancelAnimationFrame(this.#et), (this.#et = null)),
          this.#ep?.(),
          (this.#ep = null),
          this.#E.dispose(),
          this.#q.clear(),
          this.#j.dispose(),
          this.#T.dispose(),
          this.#ey?.dispose(),
          this.#P.clear(),
          this.#M.clear(),
          (this.#A = null),
          (this.#L = null),
          this.#F.clear(),
          this.#R.clear(),
          (this.#D = []),
          (this.#w = null),
          this.#C.dispose(),
          this.#eu.dispose(),
          this.#v.dispose(),
          this.diagnostics?.close())
      }
      #ek() {
        let e = this.#Y
        if (!e) return
        if (en(this.#J, e) && null == this.#Q) return void this.#eI(e)
        if (null != this.#Q) return
        let t = this.#ee++
        ;(this.#eS(),
          (this.#Q = { id: t, commitRequested: !1 }),
          this.#v.dispatch({
            kind: "resize-viewport",
            width: e.width,
            height: e.height,
            dpr: e.dpr,
            resizeId: t,
            ...(this.#B
              ? { camera: { ...this.#B }, cameraMode: this.getSnapshot().gridLayout ? "grid" : "slide" }
              : {}),
          }))
      }
      #eE() {
        let e = this.#U,
          t = this.#G,
          n = this.#J
        if (!e || !t || !n) return
        let r = this.#en
        if (!r || !en(r.metrics, n)) return
        let i = this.#w
        ;((this.#w = null),
          t.setTransform(1, 0, 0, 1, 0, 0),
          t.clearRect(0, 0, e.width, e.height),
          t.drawImage(r.bitmap, 0, 0),
          this.#ej(),
          (this.#w = i),
          this.notifyFirstSlideRendered())
      }
      #ej() {
        let e = this.#_,
          t = this.#X
        if (!e || !t) return
        ;(t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, e.width, e.height))
        let n = this.#en
        n?.overlayBitmap && en(n.metrics, this.#J) && t.drawImage(n.overlayBitmap, 0, 0)
      }
      #eM(e) {
        let t = this.#en
        t && t.frameId === e.frameId
          ? (t.overlayBitmap?.close(), (t.overlayBitmap = e.bitmap), this.#ej())
          : e.bitmap.close()
      }
      notifyFirstSlideRendered() {
        if (!this.#y && (null == this.#w && ((this.#w = {}), this.#C.emit()), "waiting" === this.#ec)) {
          var e
          let t, n
          ;((this.#ec = "drawn"),
            (this.#ep =
              ((e = () => {
                ;((this.#ep = null),
                  (this.#ec = "painted"),
                  this.#v.dispatch({ kind: "start-background-slide-materialization" }),
                  this.#eu.emit())
              }),
              (n = window.requestAnimationFrame(() => {
                t = window.setTimeout(e, 0)
              })),
              () => {
                ;(window.cancelAnimationFrame(n), window.clearTimeout(t))
              })),
            this.#er?.(this))
        }
      }
      #eT(e) {
        if ((e.viewTransition && e.viewTransition.id !== this.#$?.id) || (this.#en && e.frameId <= this.#en.frameId)) {
          ;(e.bitmap.close(), e.overlayBitmap?.close())
          return
        }
        let t = { width: e.width, height: e.height, dpr: e.dpr },
          n = null != e.resizeId,
          r = n && this.#Q?.id === e.resizeId,
          i = !this.#Y || en(this.#Y, t)
        if (!(!n || r) || !i) {
          ;(e.bitmap.close(),
            e.overlayBitmap?.close(),
            n && null != e.resizeId && this.#v.dispatch({ kind: "discard-viewport-resize", resizeId: e.resizeId }),
            r && ((this.#Q = null), this.#ek()))
          return
        }
        if (
          (this.#en?.bitmap.close(),
          this.#en?.overlayBitmap?.close(),
          (this.#en = { frameId: e.frameId, bitmap: e.bitmap, overlayBitmap: e.overlayBitmap, metrics: t }),
          this.#eI(t),
          !e.viewTransition && this.#$ && (this.#$.camera = null),
          e.camera &&
            ((this.#O = { ...e.camera }),
            (this.#V = this.getSnapshot().gridLayout ? "grid" : "slide"),
            e.viewTransition &&
              this.#$ &&
              ((this.#$.camera = { ...e.camera }), (this.#B = { ...e.camera }), (this.#W = { ...e.camera }))),
          e.camera)
        )
          for (let e of this.#q) e()
        e.viewTransition?.complete &&
          e.viewTransition.id === this.#$?.id &&
          ((this.#H = this.#$.targetViewportInsets), (this.#$ = null))
        let l = this.#Q
        r &&
          l &&
          !l.commitRequested &&
          ((l.commitRequested = !0), this.#v.dispatch({ kind: "commit-viewport-resize", resizeId: l.id }))
      }
      openFind() {
        this.#v.dispatch({ kind: "open-find" })
      }
      closeFind() {
        this.#v.dispatch({ kind: "close-find" })
      }
      setFindMentionLabels(e) {
        e !== this.#z && ((this.#z = e), this.#v.dispatch({ kind: "set-find-mention-labels", labels: e }))
      }
      setFindQuery(e, t) {
        this.#v.dispatch({ kind: "set-find-query", query: e, includeComments: t })
      }
      setFindCommentsEnabled(e) {
        this.#v.dispatch({ kind: "set-find-comments-enabled", enabled: e })
      }
      goToNextFindResult() {
        this.#v.dispatch({ kind: "go-to-next-find-result" })
      }
      goToPreviousFindResult() {
        this.#v.dispatch({ kind: "go-to-previous-find-result" })
      }
      setSelectedSlideIdx(e, t) {
        ;(this.#eS(), this.#v.dispatch({ kind: "set-selected-slide-idx", index: e, mode: t }))
      }
      setViewMode(e, t) {
        if (e === (this.#$?.mode ?? (this.getSnapshot().gridLayout ? "grid" : "slide"))) return
        let n = this.#K++,
          r = this.getPresentedViewportCamera() ?? this.#B,
          i = this.#O ? this.#V : this.getSnapshot().gridLayout ? "grid" : "slide"
        ;((this.#$ = r ? { id: n, mode: e, camera: { ...r }, targetViewportInsets: { ...(t ?? this.#H) } } : null),
          t && ("grid" === e || !this.#$) && (this.#H = { ...t }),
          r && ((this.#B = { ...r }), (this.#W = { ...r })),
          this.#v.dispatch({
            kind: "set-view-mode",
            mode: e,
            ...(r ? { transitionId: n } : {}),
            ...(r ? { camera: { ...r }, cameraMode: i } : {}),
            ...(t ? { viewportInsets: { ...t } } : {}),
          }))
      }
      async beginGridInteraction(e) {
        this.#eS()
        let t = await this.#v.request({ kind: "begin-grid-interaction", ...e })
        if ("begin-grid-interaction" !== t.kind) throw Error(`Unexpected grid interaction response: ${t.kind}`)
        return t.result
      }
      async resolveTouchTarget(e) {
        let t = await this.#v.request({ kind: "resolve-touch-target", ...e })
        if ("resolve-touch-target" !== t.kind) throw Error(`Unexpected touch target response: ${t.kind}`)
        return t.result
      }
      setZoom(e) {
        ;(this.#eS(), this.#v.dispatch({ kind: "set-zoom", zoom: e }))
      }
      setWorkingImages(e) {
        this.#v.dispatch({ kind: "set-working-images", images: e })
      }
      setChartInsertionPreview(e) {
        this.#v.dispatch({ kind: "set-chart-insertion-preview", preview: e })
      }
      setSelectionOverlayOptions(e) {
        this.#v.dispatch({ kind: "set-selection-overlay-options", ...e })
      }
      setEditingEnabled(e) {
        ;(this.#eh !== e && this.#ef++, (this.#eh = e), this.#v.dispatch({ kind: "set-editing-enabled", isEditing: e }))
      }
      setSmartGuidesEnabled(e) {
        this.#v.dispatch({ kind: "set-smart-guides-enabled", isEnabled: e })
      }
      setLiveWidgetsEnabled(e) {
        this.#ew !== e && ((this.#ew = e), this.#v.dispatch({ kind: "set-live-widgets-enabled", enabled: e }))
      }
      setStageBackgroundColor(e, t = !1, n = this.#el) {
        let r = e.trim()
        0 !== r.length &&
          (r !== this.#ei || t !== this.getSnapshot().displayColors.darkMode || n !== this.#el) &&
          ((this.#ei = r),
          (this.#el = n),
          this.#v.dispatch({
            kind: "set-stage-background-color",
            backgroundColor: r,
            darkMode: t,
            secondaryTextColor: n,
          }),
          this.#I.patch({ displayColors: { backgroundColor: r, darkMode: t } }))
      }
      setViewportInsets(e, t, n) {
        let r = this.#$,
          i = null != r && (0, _.Zh)(this.#H, e)
        r && !i && this.#eS()
        let l = i ? void 0 : (t ?? (r ? (this.#B ?? void 0) : void 0))
        ;((this.#H = { ...e }),
          l && ((this.#W = { ...l }), (this.#B = { ...l })),
          this.#v.dispatch({
            kind: "set-viewport-insets",
            viewportInsets: { ...e },
            ...(l ? { camera: { ...l }, cameraMode: this.getSnapshot().gridLayout ? "grid" : "slide" } : {}),
            contentBottomInset: n,
          }))
      }
      setViewportCamera(e) {
        let t = this.#W
        ;((this.#W = null),
          (this.#B = e ? { ...e } : null),
          (e && t && t.x === e.x && t.y === e.y && t.k === e.k) ||
            (this.#eS(),
            e &&
              this.#v.dispatch({
                kind: "set-camera",
                camera: { ...e },
                cameraMode: this.getSnapshot().gridLayout ? "grid" : "slide",
              })))
      }
      getViewportCamera() {
        return this.#B ? { ...this.#B } : null
      }
      getPresentedViewportCamera() {
        return this.#O
      }
      getViewTransitionCamera() {
        return this.#$?.camera ?? null
      }
      #eS() {
        this.#$ = null
      }
      subscribeToViewportFrames(e) {
        return (this.#q.add(e), () => this.#q.delete(e))
      }
      setSelectedElementId(e) {
        this.#v.dispatch({ kind: "set-selected-element-id", elementId: e })
      }
      selectAllSlideElements() {
        this.#v.dispatch({ kind: "select-all-slide-elements" })
      }
      addCommentThread(e, t, n) {
        return (
          this.#j.emit({
            type: "add",
            artifactKind: "presentation",
            target: {
              slideId: e,
              elementId: n.elementId,
              textRange: null == n.textRange ? void 0 : { ...n.textRange },
              position: null == n.position ? void 0 : { ...n.position },
            },
            body: t,
            author: { ...n.author },
          }),
          this.#v.request({ kind: "add-comment-thread", slideId: e, body: t, options: n }).then((e) => {
            if ("add-comment-thread" !== e.kind) throw Error(`Unexpected add comment response: ${e.kind}`)
            return e.threadId
          })
        )
      }
      replyToCommentThread(e, t, n) {
        return (
          this.#j.emit({
            type: "reply",
            artifactKind: "presentation",
            threadId: e,
            body: t,
            author: null == n ? void 0 : { ...n },
          }),
          this.#v.dispatch({ kind: "reply-comment-thread", threadId: e, body: t, author: n }),
          !0
        )
      }
      resolveCommentThread(e, t) {
        return (this.#v.dispatch({ kind: "resolve-comment-thread", threadId: e, author: t }), !0)
      }
      resolveCommentThreadAndWait(e, t) {
        return this.#v.request({ kind: "resolve-comment-thread", threadId: e, author: t }).then((e) => {
          if ("resolve-comment-thread" !== e.kind) throw Error(`Unexpected resolve comment response: ${e.kind}`)
          return e.resolved
        })
      }
      reopenCommentThread(e) {
        return (this.#v.dispatch({ kind: "reopen-comment-thread", threadId: e }), !0)
      }
      deleteCommentThread(e) {
        return (this.#v.dispatch({ kind: "delete-comment-thread", threadId: e }), !0)
      }
      toggleCommentReaction(e, t, n, r) {
        return (
          this.#v.dispatch({ kind: "toggle-comment-reaction", threadId: e, commentId: t, reactionType: n, author: r }),
          !0
        )
      }
      editThreadComment(e, t, n) {
        return (this.#v.dispatch({ kind: "edit-thread-comment", threadId: e, commentId: t, body: n }), !0)
      }
      deleteThreadComment(e, t) {
        return (this.#v.dispatch({ kind: "delete-thread-comment", threadId: e, commentId: t }), !0)
      }
      beginSelectionMarquee(e) {
        return (this.#v.dispatch({ kind: "begin-selection-marquee", ...e }), !0)
      }
      updateSelectionMarquee(e) {
        return (this.#v.dispatch({ kind: "update-selection-marquee", ...e }), !0)
      }
      endSelectionMarquee(e) {
        return (this.#v.dispatch({ kind: "end-selection-marquee", commit: e?.commit }), !0)
      }
      textPointerDown(e, t) {
        return this.#eA({
          kind: "text-edit-activate",
          activation: { kind: "pointer", point: e, shiftKey: t?.shiftKey },
        })
      }
      textPointerMove(e) {
        return (this.#v.dispatch({ kind: "text-pointer-move", point: e }), !0)
      }
      textPointerUp() {
        this.#v.dispatch({ kind: "text-pointer-up" })
      }
      textSelectWordAtPoint(e) {
        return this.#eA({ kind: "text-edit-activate", activation: { kind: "word", point: e } })
      }
      textSelectParagraphAtPoint(e) {
        return this.#eA({ kind: "text-edit-activate", activation: { kind: "paragraph", point: e } })
      }
      textActivateBlockEnd(e) {
        return this.#eA({ kind: "text-edit-activate", activation: { kind: "block-end", blockId: e } })
      }
      textClear() {
        return this.#eA({ kind: "text-edit-clear" })
      }
      async getHyperlinkContext(e = {}) {
        let t = await this.#v.request({ kind: "hyperlink-context", ...e })
        if ("hyperlink-context" !== t.kind) throw Error("Unexpected presentation hyperlink context response")
        return t.result
      }
      async updateHyperlink(e) {
        if (!this.#eh || this.#y) return !1
        let t = await this.#v.request({ kind: "set-hyperlink", ...e })
        if ("set-hyperlink" !== t.kind) throw Error("Unexpected presentation hyperlink update response")
        return t.result
      }
      async #eA(e) {
        let t = await this.#v.request(e)
        if ("text-edit" !== t.kind) throw Error("Unexpected presentation text-edit response")
        return t.result
      }
      textHandleKeyDown(e) {
        return (this.#v.dispatch({ kind: "text-keydown", event: e }), !0)
      }
      textHandlePaste(e) {
        return (this.#v.dispatch({ kind: "text-paste", clipboard: e }), !0)
      }
      textHandleBeforeInput(e) {
        return (this.#v.dispatch({ kind: "text-before-input", event: e }), !0)
      }
      textHandleInput(e) {
        return (this.#v.dispatch({ kind: "text-input", event: e }), !0)
      }
      textHandleCompositionEnd(e) {
        return (this.#v.dispatch({ kind: "text-composition-end", event: e }), !0)
      }
      setHoveredElementId(e) {
        this.#v.dispatch({ kind: "set-hovered-element-id", elementId: e })
      }
      setHoveredHyperlink(e) {
        let t = this.getSnapshot(),
          n = t.slideIds[t.selectedSlideIdx]
        n &&
          this.#v.dispatch({
            kind: "set-hovered-hyperlink",
            slideId: n,
            link: e && { source: e.source, revision: e.revision, url: e.url, action: e.action },
          })
      }
      previewConnectorInsertion(e) {
        this.#v.dispatch({ kind: "preview-connector-insertion", preview: e })
      }
      setLocalAwarenessCursor(e, t) {
        this.#v.dispatch({ kind: "set-local-awareness-cursor", point: e, lastClickAt: t })
      }
      clearLocalAwarenessCursor() {
        this.#v.dispatch({ kind: "clear-local-awareness-cursor" })
      }
      setPresenceCursor(e, t, n) {
        this.#v.dispatch({
          kind: "set-presence-cursor",
          presenceId: e,
          cursor: t,
          presenceKind: n?.kind,
          color: n?.color,
        })
      }
      setPresenceSelection(e, t, n) {
        this.#v.dispatch({
          kind: "set-presence-selection",
          presenceId: e,
          selection: t,
          presenceKind: n?.kind,
          color: n?.color,
        })
      }
      clearPresenceCursor(e, t) {
        this.#v.dispatch({ kind: "clear-presence-cursor", presenceId: e, slideId: t?.slideId })
      }
      clearPresenceSelection(e, t) {
        this.#v.dispatch({ kind: "clear-presence-selection", presenceId: e, slideId: t?.slideId })
      }
      beginElementInteraction(e) {
        return (this.#v.dispatch({ kind: "begin-element-interaction", ...e }), !0)
      }
      updateElementInteraction(e) {
        return (this.#v.dispatch({ kind: "update-element-interaction", ...e }), !0)
      }
      endElementInteraction(e) {
        return (this.#v.dispatch({ kind: "end-element-interaction", ...e }), !0)
      }
      nudgeSelectedElements(e) {
        return (this.dispatch({ kind: "nudge-selected-elements", dx: e.dx, dy: e.dy }), !0)
      }
      clearElementSelection() {
        this.#v.dispatch({ kind: "clear-element-selection" })
      }
      deleteSelectedElement() {
        return (this.dispatch({ kind: "delete-selected-element" }), !0)
      }
      addSlide(e, t) {
        ;((this.#W = null), this.dispatch({ kind: "add-slide", layoutId: e, position: t }))
      }
      async requestSlideTemplates() {
        let e = await this.#v.request({ kind: "slide-templates" })
        if ("slide-templates" !== e.kind) throw Error(`Unexpected slide templates response: ${e.kind}`)
        return e.result
      }
      async requestSlideTemplatePreview(e) {
        await this.#ea
        let t = await this.#v.request({ kind: "slide-template-preview", layoutId: e })
        if ("slide-template-preview-error" === t.kind) throw Error(t.message)
        if ("slide-template-preview" !== t.kind) throw Error(`Unexpected slide template preview response: ${t.kind}`)
        if (!t.result) throw Error("Slide template preview is unavailable.")
        return t.result
      }
      duplicateSelectedSlides() {
        ;((this.#W = null), this.dispatch({ kind: "duplicate-selected-slides" }))
      }
      deleteSelectedSlides() {
        return (this.dispatch({ kind: "delete-selected-slides" }), !0)
      }
      moveSelectedSlides(e, t) {
        return (this.dispatch({ kind: "move-selected-slides", fromIndex: e, toIndex: t }), !0)
      }
      setSelectedSlidesHidden(e) {
        return (this.dispatch({ kind: "set-selected-slides-hidden", hidden: e }), !0)
      }
      duplicateSelectedSlide() {
        ;((this.#W = null), this.dispatch({ kind: "duplicate-selected-slide" }))
      }
      moveSlide(e, t) {
        return (this.dispatch({ kind: "move-slide", fromIndex: e, toIndex: t }), !0)
      }
      deleteSlide(e) {
        return (this.dispatch({ kind: "delete-slide", index: e }), !0)
      }
      setSlideHidden(e, t) {
        return (this.dispatch({ kind: "set-slide-hidden", index: e, hidden: t }), !0)
      }
      updateSpeakerNotes(e) {
        this.dispatch({ kind: "update-speaker-notes", value: e })
      }
      updateSelectedElementFrame(e) {
        return (this.dispatch({ kind: "update-selected-element-frame", framePatch: e }), !0)
      }
      updateSelectedElementStyle(e) {
        return (this.dispatch({ kind: "update-selected-element-style", stylePatch: e }), !0)
      }
      reorderSelectedElement(e) {
        return (this.dispatch({ kind: "reorder-selected-element", direction: e }), !0)
      }
      undo() {
        ;((this.#W = null), this.dispatch({ kind: "undo" }))
      }
      redo() {
        ;((this.#W = null), this.dispatch({ kind: "redo" }))
      }
      exportPresentationProto() {
        return this.requestExport({ format: "proto" }).then((e) => e.presentationProto)
      }
      insertTemplate(e) {
        if (null != this.#em) return Promise.reject(Error("Another template insertion is already in progress"))
        let t = this.#eP(e).finally(() => {
          this.#em === t && (this.#em = null)
        })
        return ((this.#em = t), t)
      }
      async #eP({ presentationProto: e, signal: t }) {
        if ((t?.throwIfAborted(), this.#y || !this.#eh)) throw Error("Template target is not editable")
        ;(this.#eS(), (this.#W = null))
        let n = await this.#v.request({ kind: "insert-template", presentationProto: e })
        if ("insert-template" !== n.kind) throw Error(`Unexpected template insertion response: ${n.kind}`)
        if (!n.result.success) throw Error(n.result.message)
        return { imageIds: n.result.imageIds }
      }
      async startImageCrop(e, t) {
        await this.#ea
        let n = await this.#v.request({ kind: "start-image-crop", slideId: e, elementId: t })
        return "start-image-crop" === n.kind && n.result
      }
      interactWithImageCrop(e) {
        this.#v.dispatch({ kind: "image-crop-interaction", interaction: e })
      }
      async requestImageFraming(e, t) {
        await this.#ea
        let n = await this.#v.request({ kind: "image-framing", slideId: e, elementId: t })
        if ("image-framing" !== n.kind) throw Error(`Unexpected image framing response: ${n.kind}`)
        return n.result
      }
      async requestImageThumbnail(e, t) {
        await this.#ea
        let n = await this.#v.request({ kind: "image-thumbnail", slideId: e, elementId: t })
        if ("image-thumbnail" !== n.kind) throw Error(`Unexpected image thumbnail response: ${n.kind}`)
        return n.result
      }
      requestSlideThumbnail(e, t) {
        let n = "string" == typeof e ? e : this.getSnapshot().slideIds[e]
        return n
          ? this.#ea.then(() =>
              this.#v
                .request({ kind: "slide-thumbnail", slideId: n, cssMaxPx: t?.cssMaxPx, pixelRatio: t?.pixelRatio })
                .then((e) => {
                  if ("slide-thumbnail" !== e.kind) throw Error(`Unexpected thumbnail response: ${e.kind}`)
                  return e.result
                }),
            )
          : Promise.resolve("")
      }
      requestImagePreview(e) {
        return this.#ea.then(() =>
          this.#v.request({ kind: "image-preview", elementId: e }).then((e) => {
            if ("image-preview" !== e.kind) throw Error(`Unexpected image preview response: ${e.kind}`)
            return e.result
          }),
        )
      }
      #eC(e) {
        switch (e.kind) {
          case "widget-documents":
          case "widgets":
            this.#T.update(e)
            return
          case "chart-editing":
            for (let t of ((this.#A = e.state), this.#M)) t()
            return
          case "table-editing":
            for (let t of ((this.#L = e.state), this.#P)) t()
            return
          case "drawing-preferences":
            this.#ed?.(e.preferences)
            return
          case "edit":
            this.#E.emit(e.event)
            return
          case "bootstrap-status":
            "ready" !== e.status || this.#ev || ((this.#ev = !0), this.#es?.())
            return
          case "crdt-update": {
            let t = new Uint8Array(e.update)
            for (let e of this.#F) e(t)
            return
          }
          case "html-hydration-requests":
            this.#ey?.update(e.requests, e.generation)
            return
          case "image-hydration-requests":
            for (let t of ((this.#D = e.requests), (this.#N = e.generation), this.#R)) t(e.requests, e.generation)
            return
          case "meta":
            ;(this.diagnostics?.update({ documentSchemaVersion: e.documentSchemaVersion ?? null }),
              this.#I.patch(e.state))
            return
          case "find":
          case "navigation":
          case "preview":
          case "text-update":
          case "editor":
          case "comments":
          case "awareness":
          case "inspector":
            this.#I.patch(e.state)
            return
          case "selection":
            return void this.#I.patch(e.state)
          case "active-slide":
          case "viewport":
            if (e.viewTransition && e.viewTransition.id !== this.#$?.id) return
            ;(e.viewTransition?.complete && this.#$ && (this.#H = this.#$.targetViewportInsets),
              void 0 !== e.state.camera &&
                ((this.#B = e.state.camera ? { ...e.state.camera } : null),
                (this.#W = e.state.camera ? { ...e.state.camera } : null),
                this.#$ && (this.#$.camera = e.state.camera ? { ...e.state.camera } : null)),
              void 0 !== e.state.gridLayout &&
                !!e.state.gridLayout != !!this.#I.getState().gridLayout &&
                (this.#en?.bitmap.close(),
                this.#en?.overlayBitmap?.close(),
                (this.#en = null),
                (this.#w = null),
                (this.#O = null)),
              this.#I.patch(e.state))
            return
          case "viewport-resize-ready":
            if (this.#Q?.id !== e.resizeId || null == this.#Y) return
            ;((this.#Q.commitRequested = !0),
              this.#eI(this.#Y),
              this.#v.dispatch({ kind: "commit-viewport-resize", resizeId: e.resizeId }))
            return
          case "viewport-frame":
            this.#eT(e)
            return
          case "overlay-frame":
            this.#eM(e)
            return
          case "viewport-frame-presented":
            if (this.#Q?.id !== e.resizeId) return
            ;((this.#Q = null), this.#eI({ width: e.width, height: e.height, dpr: e.dpr }), this.#ek())
            return
          case "debug-log":
            ;(0, q.V)(e.namespace).debug(e.message, e.details)
            return
          default:
            return e
        }
      }
    }
    var el = n("P4Kr")
    let ea = "popcorn-presentation-inspector"
    var eo = n("UGB7"),
      es = n("Mdxs")
    let ed = (0, d.createContext)(void 0)
    function ec({ capabilities: e, children: t }) {
      return (0, r.jsx)(ed, { value: e, children: t })
    }
    function eu(e, t) {
      let n = (0, d.useContext)(ed)
      return (0, b.lD)(e, { ...n, ...t })
    }
    var ep = n("sCeR"),
      eh = n("Uq8e")
    function em({
      controller: e,
      editorCapabilities: t,
      formatPane: n,
      floatingBar: i,
      displayPaints: l = es.ES,
      children: a,
    }) {
      return (0, r.jsx)(eh.P.Provider, {
        value: e,
        children: (0, r.jsx)(ec, {
          capabilities: t,
          children: (0, r.jsx)(x.UL, {
            config: n,
            children: (0, r.jsx)(g.e, { config: i, children: (0, r.jsx)(ep.Z, { value: l, children: a }) }),
          }),
        }),
      })
    }
    var ef = n("pFXa"),
      eg = n("VoIk"),
      ex = n("r8bg")
    function eb(e) {
      let t = (0, eo.lO)(e.controller, "comments")
      return (0, r.jsx)(eg.A, {
        ...e,
        threads: t.commentThreads ?? [],
        onReplySubmitted: (t, n) =>
          e.onCommentSubmitted?.((0, ef.I)(t, n, (0, ex.jF)(t.target, t.markerPoint), e.canAssignToChatGpt)),
        sidebarLabel: "Presentation comments",
        getThreadSourceLabel: (e) => `${e.slideLabel}: ${e.label}`,
        testIdPrefix: "popcorn-presentation",
      })
    }
    var ey = n("FIjf"),
      ev = n("KVz9"),
      ew = n("YdwT"),
      eC = n("N6R9"),
      eS = n("Pseg")
    function ek({ title: e, sidebarOpen: t, onToggleSidebar: n, gridViewControl: i }) {
      return (0, r.jsx)(ey.hA, {
        title: e,
        trailingContent: (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(ey.b_, {
              expanded: t,
              "aria-label": t ? "Hide slide sidebar" : "Show slide sidebar",
              onClick: n,
              showActiveBackground: !1,
              testId: "popcorn-presentation-sidebar-toggle",
              children: (0, r.jsx)(eA, { className: "size-4" }),
            }),
            i,
          ],
        }),
      })
    }
    function eI({
      icons: e,
      onAddSlide: t,
      slidePickerOpen: n = !1,
      formatControl: i,
      renderControls: l,
      textInsertionActive: a = !1,
      onRequestSlideChanges: o,
      ...s
    }) {
      let d = eu(b.mq)
      if (l)
        return l({
          capabilities: d,
          formatControl: i,
          textInsertionActive: a,
          onAddSlide: t,
          slidePickerOpen: n,
          onRequestSlideChanges: o,
          ...s,
        })
      let c = d.header.includes("insert") && d.insert.length > 0
      return (0, r.jsxs)(r.Fragment, {
        children: [
          c && d.insert.includes("slide")
            ? (0, r.jsx)(ey.b_, {
                "aria-label": "Add slide",
                "aria-haspopup": "dialog",
                expanded: n,
                onClick: (e) => t(e.currentTarget),
                size: "default",
                children: e?.add ?? (0, r.jsx)(E.EV, {}),
              })
            : null,
          c && d.insert.includes("text") && s.onInsertText
            ? (0, r.jsx)(ey.b_, {
                "aria-label": "Insert text",
                onClick: s.onInsertText,
                size: "default",
                children: e?.text ?? (0, r.jsx)(eC.Nm, {}),
              })
            : null,
          c && d.insert.includes("image") && s.onInsertImage
            ? (0, r.jsx)(ew.W, { icon: e?.image, onInsert: s.onInsertImage, onGenerate: s.onGenerateImage })
            : null,
          c ? (0, r.jsx)(eM, { onAddSlide: t, ...s, size: "default", triggerIcon: e?.insert }) : null,
        ],
      })
    }
    function eE({ icon: e, label: t, open: n, onToggle: i }) {
      return (0, r.jsx)(ey.b_, {
        expanded: n,
        "aria-label": t ?? (n ? "Hide slide sidebar" : "Show slide sidebar"),
        onClick: i,
        showActiveBackground: !1,
        size: "default",
        testId: "popcorn-presentation-sidebar-toggle",
        children: e ?? (0, r.jsx)(eA, { className: "size-4 text-token-text-secondary" }),
      })
    }
    function ej({
      annotationControl: e,
      formatControl: t,
      onAddSlide: n,
      onInsertText: i,
      onGenerateImage: l,
      onInsertImage: a,
      onInsertChart: o,
      onInsertTable: s,
      onInsertShape: d,
      trailingContent: c,
    }) {
      let u = eu(b.mq)
      if (0 === u.header.length) return null
      let p = u.header.includes("insert") && u.insert.length > 0,
        h = u.header.includes("format") && u.inspector.length > 0 && !!t,
        m = u.header.includes("annotation") && !!e
      return (0, r.jsxs)(ey.nf, {
        ariaLabel: "Presentation tools",
        trailingContent: c,
        children: [
          p
            ? (0, r.jsx)(eM, {
                onAddSlide: n,
                onInsertText: i,
                onGenerateImage: l,
                onInsertImage: a,
                onInsertChart: o,
                onInsertTable: s,
                onInsertShape: d,
              })
            : null,
          h ? t : null,
          m ? (0, r.jsxs)(r.Fragment, { children: [p || h ? (0, r.jsx)(ey.Mw, {}) : null, e] }) : null,
        ],
      })
    }
    function eM({
      onAddSlide: e,
      onInsertText: t,
      onGenerateImage: n,
      onInsertImage: i,
      onInsertChart: l,
      onInsertTable: a,
      onInsertShape: o,
      size: s,
      triggerIcon: d,
    }) {
      let c = eu(b.mq)
      if (0 === c.insert.length) return null
      let u = [
        { id: "text", label: "Text", icon: eC.Nm, disabled: !t, onSelect: t },
        {
          id: "image",
          label: "Image",
          icon: eC.xw,
          disabled: !i,
          renderSubmenu: ({ close: e }) => (i ? (0, r.jsx)(ew.H, { onInsert: i, onGenerate: n, onClose: e }) : null),
        },
        {
          id: "chart",
          label: "Chart",
          icon: eC.ox,
          disabled: !l,
          hideSubmenuHeading: !0,
          submenuItems: eS.m.map((e) => ({ id: e.presetId, label: e.label, onSelect: () => l?.(e.presetId) })),
        },
        { id: "table", label: "Table", icon: eC.gx, disabled: !a, onSelectAfterClose: a },
        {
          id: "rect",
          label: "Shapes",
          icon: eC.N4,
          disabled: !o,
          renderSubmenu: ({ close: e }) =>
            (0, r.jsx)(ev.A0, {
              onSelect: (t, n) => {
                ;(n ? o?.(t, n) : o?.(t), e())
              },
            }),
        },
      ]
      return (0, r.jsx)(eC.cU, {
        ariaLabel: "Insert",
        primaryItems: u.filter((e) => c.insert.some((t) => t === e.id)),
        secondaryLabel: "New slide",
        secondaryItems: c.insert.includes("slide")
          ? [
              { id: "template", label: "From template", icon: eC.Ok, onSelect: e },
              { id: "ask-chat", label: "Ask for change", icon: eC.zc, disabled: !0 },
            ]
          : [],
        testId: "popcorn-presentation-insert-button",
        size: s,
        triggerIcon: d,
      })
    }
    function eT({ active: e, disabled: t, onToggle: n, size: i = "compact" }) {
      return (0, r.jsx)(ey.b_, {
        "aria-label": "Grid view",
        pressed: e,
        disabled: t,
        onClick: n,
        size: i,
        testId: "popcorn-presentation-grid-toggle",
        children: (0, r.jsx)("svg", {
          "aria-hidden": "true",
          viewBox: "0 0 20 20",
          fill: "none",
          className: "size-4",
          children: (0, r.jsx)("path", {
            d: "M3 3h5v5H3V3Zm9 0h5v5h-5V3ZM3 12h5v5H3v-5Zm9 0h5v5h-5v-5Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinejoin: "round",
          }),
        }),
      })
    }
    function eA({ className: e, ...t }) {
      return (0, r.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        className: e,
        ...t,
        children: [
          (0, r.jsx)("rect", {
            x: "2.75",
            y: "3.25",
            width: "14.5",
            height: "13.5",
            rx: "2.25",
            stroke: "currentColor",
            strokeWidth: "1.5",
          }),
          (0, r.jsx)("path", { d: "M7 3.75V16.25", stroke: "currentColor", strokeWidth: "1.5" }),
        ],
      })
    }
    function eP(e, t) {
      let n = (0, d.useRef)(null),
        r = (e) => {
          n.current?.pointerId === e.pointerId && (n.current = null)
        }
      return {
        onPointerDown(t) {
          if (0 === t.button && !n.current) {
            ;(t.stopPropagation(), (n.current = { pointerId: t.pointerId, height: e, y: t.clientY }))
            try {
              t.currentTarget.setPointerCapture?.(t.pointerId)
            } catch {
              n.current = null
            }
          }
        },
        onPointerMove(e) {
          let r = n.current
          r && e.pointerId === r.pointerId && t(r.height, r.y - e.clientY)
        },
        onPointerUp: r,
        onPointerCancel: r,
        onLostPointerCapture: r,
      }
    }
    function eL({ notesHeight: e, minHeight: t = 80, setNotesHeight: n }) {
      let i = eP(e, (e, r) => {
        if (0 === e) {
          r >= 20 && n(Math.max(t, 20))
          return
        }
        let i = e + r
        n(i < 40 ? 0 : Math.max(t, i))
      })
      return (0, r.jsx)("div", {
        ...i,
        className: "mx-auto h-2 w-9 cursor-row-resize select-none",
        "data-testid": "popcorn-presentation-notes-resize",
        children: (0, r.jsx)("div", { className: "h-[3px] w-full rounded bg-gray-300" }),
      })
    }
    function eF({ contentId: e, height: t, maxHeight: n, onResize: i }) {
      let l = (e) => i(Math.min(n, Math.max(44, Math.round(e)))),
        a = eP(t, (e, t) => l(e + t))
      return (0, r.jsx)("div", {
        ...a,
        role: "separator",
        tabIndex: 0,
        className: "popcorn-presentation-attached-notes-resize",
        title: "Resize speaker notes",
        "aria-label": "Resize speaker notes",
        "aria-controls": e,
        "aria-orientation": "horizontal",
        "aria-valuemin": 44,
        "aria-valuemax": n,
        "aria-valuenow": t,
        "aria-valuetext": `${t} pixels`,
        onKeyDown: (e) => {
          switch (e.key) {
            case "ArrowUp":
              l(t + 20)
              break
            case "ArrowDown":
              l(t - 20)
              break
            case "Home":
              l(44)
              break
            case "End":
              l(n)
              break
            default:
              return
          }
          ;(e.preventDefault(), e.stopPropagation())
        },
      })
    }
    let eR =
        "var(--popcorn-presentation-background, color-mix(in srgb, var(--color-background-surface, var(--color-surface, #ffffff)) 98%, #000000))",
      eD = { borderRadius: "8px", boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.05)" },
      eN = "var(--presentation-selection-color)",
      ez = `color-mix(in srgb, ${eN} 10%, transparent)`,
      eB = `0px 0px 0px 1px ${eN}, 0px 2px 8px 0px color-mix(in srgb, ${eN} 16%, transparent), 0px 4px 16px 0px rgba(0, 0, 0, 0.05)`,
      eO = "var(--color-token-border-default, var(--color-border, rgba(13, 13, 13, 0.10)))",
      eV = {
        ...eD,
        borderColor: eO,
        backgroundColor:
          "var(--popcorn-presentation-add-slide-background, var(--color-background-secondary-solid, #ededed))",
      },
      eH = {
        borderRadius: "16px",
        border: "1px solid var(--color-token-border-default, rgba(13, 13, 13, 0.1))",
        backgroundColor: "var(--color-token-bg-secondary, rgba(250, 250, 250, 0.9))",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
      }
    function eK({ controller: e, notesHeight: t, setNotesHeight: n, isEditing: i, leftInset: l }) {
      let a = (0, eo.ge)(e)
      return (0, r.jsxs)("div", {
        className:
          "popcorn-presentation-notes-panel popcorn-presentation-desktop-only pointer-events-none absolute right-0 bottom-0 z-20 px-6 pt-4 pb-6",
        style: { left: `${l}px`, right: 0 },
        "data-testid": "popcorn-presentation-notes-panel",
        children: [
          (0, r.jsx)("div", {
            className: "pointer-events-auto pb-3",
            children: (0, r.jsx)(eL, { notesHeight: t, setNotesHeight: n }),
          }),
          (0, r.jsx)("div", {
            className: "w-full text-sm",
            children:
              t > 0
                ? (0, r.jsx)("textarea", {
                    "data-testid": "popcorn-presentation-notes",
                    placeholder: i ? "Add speaker notes..." : "No speaker notes",
                    className:
                      "pointer-events-auto h-full w-full resize-none p-4 text-sm text-token-text-primary outline-none placeholder:text-token-text-secondary",
                    style: { ...eH, height: `${t}px` },
                    value: a.notesText,
                    readOnly: !i,
                    onChange: (t) => {
                      e.updateSpeakerNotes(t.target.value)
                    },
                  })
                : null,
          }),
        ],
      })
    }
    function e$({ controller: e, panels: t, panelControls: n, isEditing: i, renderPanel: l, onRequestChanges: a }) {
      let o = t.filter((e) => i || e.visibleWhenReadOnly),
        c = (0, d.useCallback)((t) => e.subscribe(t), [e]),
        u = () =>
          o.some((t) => n.isPanelOpen(t.id) && (t.isVisible?.({ controller: e, snapshot: e.getSnapshot() }) ?? !0)),
        p = (0, d.useSyncExternalStore)(c, u, u)
      if (0 === o.length) return null
      let h = o.map((t) =>
        (0, r.jsx)(
          eq,
          {
            controller: e,
            panel: t,
            panelControls: n,
            isPanelOpen: n.isPanelOpen(t.id),
            embedded: null != l,
            onRequestChanges: a,
          },
          t.id,
        ),
      )
      return (0, r.jsx)("div", {
        className: (0, s.A)(
          "pointer-events-none absolute z-20 max-w-full",
          null == l ? "inset-y-4 right-4" : "inset-y-0 right-0 flex items-start",
        ),
        style: {
          top:
            null == l
              ? "calc(16px + var(--popcorn-presentation-header-inset, 0px))"
              : "var(--popcorn-presentation-header-inset, 0px)",
        },
        children: l ? l(h, p) : h,
      })
    }
    function eq({ controller: e, panel: t, panelControls: n, isPanelOpen: i, embedded: l, onRequestChanges: a }) {
      let o = (0, eo.lO)(e, t.snapshotScope ?? "editor")
      if (!(t.isVisible?.({ controller: e, snapshot: o }) ?? !0)) return null
      let d = t.render({ controller: e, snapshot: o, panelControls: n, embedded: l, onRequestChanges: a })
      return l
        ? (0, r.jsx)("div", {
            hidden: !i,
            "data-popcorn-presentation-format-control": t.id === ea ? "" : void 0,
            className: i ? "flex h-full min-h-0 flex-col" : "hidden",
            inert: !i,
            children: d,
          })
        : (0, r.jsx)("div", {
            "data-testid": i ? "popcorn-presentation-sidebar" : void 0,
            "data-popcorn-presentation-format-control": t.id === ea ? "" : void 0,
            "aria-hidden": !i,
            inert: !i,
            className: (0, s.A)(
              "flex min-h-0 max-h-full max-w-full transition-[opacity,transform] duration-200 ease-out",
              i ? "pointer-events-auto translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0",
            ),
            style: { width: `${t.widthPx ?? 336}px` },
            children: d,
          })
    }
    var eW = n("TiSq")
    function eU({ capabilities: e, config: t, text: n, fill: r, format: i, delete: l }) {
      if (!t.enabled) return []
      let a = { bold: n, italic: n, "text-color": n, "text-size": n, fill: r, format: i, delete: l },
        o = {
          bold: t.controls.bold,
          italic: t.controls.italic,
          "text-color": t.controls.textColor,
          "text-size": t.controls.fontSize,
          fill: t.controls.fill,
          format: t.controls.format,
          delete: t.controls.delete,
        }
      return e.floating.filter((e) => a[e] && "hidden" !== o[e].state)
    }
    var eG = n("acXa"),
      e_ = n("EXeE"),
      eX = n("P90B")
    function eZ({
      threads: e,
      elements: t,
      slideRect: n,
      highlightedThreadId: i,
      pendingThreadIds: l,
      borderStyle: a,
    }) {
      return n && (i || l?.size)
        ? e.map(({ threadId: e, target: o, comments: s }) => {
            if ("slide" === o.kind) return null
            let d = l?.has(e) === !0 && !(0, eX.jK)(s)
            if (!d && e !== i) return null
            let c = o.frame ?? t.find((e) => e.id === o.elementId)?.frame
            return c
              ? (0, r.jsx)(
                  e_.ME,
                  {
                    bounds: {
                      left: n.left + c.left * n.scale,
                      top: n.top + c.top * n.scale,
                      width: c.width * n.scale,
                      height: c.height * n.scale,
                    },
                    pending: d,
                    borderStyle: a,
                    borderWidthPx: "solid" === a ? 1.25 : 3,
                    testId: `popcorn-presentation-comment-target-highlight-${e}`,
                  },
                  e,
                )
              : null
          })
        : null
    }
    var eJ = n("mj2u")
    function eY({
      threads: e,
      slideRect: t,
      stageSize: n,
      isEditing: i,
      renderCommentThread: l,
      annotationMarkerPositions: a,
      collisionBoundaryElement: o = null,
      portalContainerElement: s = null,
      commentsSidebarOpen: c = !1,
      selectedCommentThreadId: u,
      hoveredCommentThreadId: p,
      onSelectCommentThread: h,
      onHoverCommentThread: m,
      onClearCommentThread: f,
      ...g
    }) {
      let [x, b] = (0, d.useState)(null)
      ;(0, d.useEffect)(() => {
        !x || e.some((e) => e.threadId === x && "resolved" !== e.status) || b(null)
      }, [x, e])
      let y = (0, d.useMemo)(() => {
        if (!t) return []
        let r = [...(a ?? [])]
        return e
          .filter((e) => "resolved" !== e.status)
          .map((e) => {
            let l = i || "slide" === e.target.kind ? null : e.target.frame,
              a = l
                ? (0, e_.Ky)({
                    left: t.left + l.left * t.scale,
                    top: t.top + l.top * t.scale,
                    width: l.width * t.scale,
                    height: l.height * t.scale,
                  })
                : { left: t.left + e.markerPoint.x * t.scale, top: t.top + e.markerPoint.y * t.scale },
              o = (0, e_.wj)(a, r, { stageSize: n, preferredBottom: t.top + t.height })
            return (r.push(o), { thread: e, markerPosition: o })
          })
      }, [a, i, t, n, e])
      if (null != l)
        return (0, r.jsx)(r.Fragment, {
          children: y.map(({ thread: e, markerPosition: t }) =>
            (0, r.jsx)(
              d.Fragment,
              { children: l({ threadId: e.threadId, markerPosition: t, collisionBoundaryElement: o }) },
              e.threadId,
            ),
          ),
        })
      let v = (e) => {
        ;(b(e), null == e ? f?.() : h?.(e))
      }
      return (0, r.jsx)(r.Fragment, {
        children: y.map(({ thread: e, markerPosition: t }) =>
          (0, d.createElement)(eJ.Q, {
            ...g,
            key: e.threadId,
            thread: e,
            label: e.label,
            sourceLabel: `${e.slideLabel}: ${e.label}`,
            isEditing: i,
            position: t,
            variant: "bubble",
            markerTestId: `popcorn-presentation-thread-trigger-${e.threadId}`,
            isSelected: (void 0 === u ? x : u) === e.threadId,
            hoveredThreadId: p,
            threadVisibleInSidebar: c,
            collisionBoundaryElement: o,
            portalContainerElement: s,
            onSelect: v,
            onHover: m,
          }),
        ),
      })
    }
    var eQ = n("x6sT"),
      e0 = n("PwDu"),
      e1 = n("QuGA"),
      e2 = n("YEv0"),
      e4 = n("hisG"),
      e3 = n("QM2l"),
      e5 = n("qYLI"),
      e6 = n("r1Of"),
      e8 = n("dOfB"),
      e9 = n("Qpwh")
    function e7({ ref: e, projectPoint: t, clipBounds: n, testId: i }) {
      let l = (0, d.useRef)(null),
        [a, o] = (0, d.useState)(null)
      return (
        (0, d.useImperativeHandle)(
          e,
          () => ({
            start(e) {
              ;((l.current = e), o({ ...e, points: [...e.points] }))
            },
            append(e) {
              let t = l.current
              if (!t) return
              let n = t.points.length
              for (let n of e) {
                let e = t.points[t.points.length - 1]
                ;(e && n.x === e.x && n.y === e.y) || t.points.push(n)
              }
              t.points.length !== n && o({ ...t, points: [...t.points] })
            },
            end() {
              let e = l.current
              return ((l.current = null), o(null), e)
            },
            isActive: () => null != l.current,
          }),
          [],
        ),
        a ? (0, r.jsx)(e1.i, { strokes: [a], projectPoint: t, clipBounds: n, testId: i }) : null
      )
    }
    var te = n("ceRJ"),
      tt = n("pdUD"),
      tn = n("SUw3"),
      tr = n("o0dh")
    function ti({ containerRef: e, enabled: t, contextKey: n, onDropImages: i }) {
      let l = (0, d.useRef)(i),
        [a, o] = (0, d.useState)(!1),
        [s, c] = (0, d.useState)(!1),
        [u, p] = (0, d.useState)(null)
      return ((0, d.useEffect)(() => {
        l.current = i
      }, [i]),
      (0, d.useEffect)(() => {
        let n = e.current
        if (!n) return
        let r = !0,
          i = 0,
          a = new Set()
        ;(o(!1), c(!1), p(null))
        let s = (e, n) => {
            let r = e.dataTransfer
            if (!r || !tl(r)) return
            ;(e.preventDefault(), e.stopPropagation(), n && (i += 1))
            let l =
              t &&
              (function (e) {
                let t = Array.from(e.files)
                if (t.length > 0) return t.some((e) => null != (0, tr.g)(e))
                let n = Array.from(e.items).filter((e) => "file" === e.kind)
                return 0 === n.length || n.some((e) => "" === e.type || e.type.startsWith("image/"))
              })(r)
            ;((r.dropEffect = l ? "copy" : "none"), o(l))
          },
          d = (e) => s(e, !0),
          u = (e) => s(e, !1),
          h = () => {
            0 === (i = Math.max(0, i - 1)) && o(!1)
          },
          m = (e) => {
            let n = e.dataTransfer
            if (!n || !tl(n) || (e.preventDefault(), e.stopPropagation(), (i = 0), o(!1), (n.dropEffect = "none"), !t))
              return
            let s = Array.from(n.files),
              d = (
                s.length > 0
                  ? s
                  : Array.from(n.items)
                      .filter((e) => "file" === e.kind)
                      .map((e) => e.getAsFile())
                      .filter((e) => null != e)
              ).filter((e) => null != (0, tr.g)(e))
            if (0 === d.length) return void p("Drop image files to add them.")
            ;((n.dropEffect = "copy"), p(null), c(!0))
            let u = new AbortController()
            a.add(u)
            let h = { clientX: e.clientX, clientY: e.clientY }
            ;(async () => {
              try {
                await l.current(d, h, u.signal)
              } catch (e) {
                r && !u.signal.aborted && p(e instanceof Error ? e.message : "Could not add the dropped images.")
              } finally {
                ;(a.delete(u), r && c(a.size > 0))
              }
            })()
          }
        return (
          n.addEventListener("dragenter", d),
          n.addEventListener("dragover", u),
          n.addEventListener("dragleave", h),
          n.addEventListener("drop", m),
          () => {
            for (let e of ((r = !1), a)) e.abort()
            ;(n.removeEventListener("dragenter", d),
              n.removeEventListener("dragover", u),
              n.removeEventListener("dragleave", h),
              n.removeEventListener("drop", m))
          }
        )
      }, [e, n, t]),
      a || s || u)
        ? (0, r.jsx)("div", {
            "data-testid": "popcorn-image-drop-target",
            className: "pointer-events-none absolute inset-0 z-40 flex items-center justify-center p-4",
            children: u
              ? (0, r.jsxs)("div", {
                  role: "alert",
                  className:
                    "flex max-w-sm items-center gap-3 rounded-xl border border-token-border-default bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-primary shadow-lg",
                  children: [
                    (0, r.jsx)("span", { children: u }),
                    (0, r.jsx)("button", {
                      type: "button",
                      "aria-label": "Dismiss image drop error",
                      className:
                        "pointer-events-auto flex size-6 shrink-0 items-center justify-center rounded-full text-token-text-secondary hover:bg-token-bg-secondary",
                      onPointerDown: (e) => e.stopPropagation(),
                      onClick: (e) => {
                        ;(e.stopPropagation(), p(null))
                      },
                      children: (0, r.jsx)(E.w0, { className: "size-4" }),
                    }),
                  ],
                })
              : (0, r.jsx)("div", {
                  role: "status",
                  className:
                    "rounded-xl border border-token-border-default bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-primary shadow-lg",
                  children: s ? "Adding images\u2026" : "Drop images to add them",
                }),
          })
        : null
    }
    function tl(e) {
      return (
        Array.from(e.types).includes("Files") ||
        e.files.length > 0 ||
        Array.from(e.items).some((e) => "file" === e.kind)
      )
    }
    var ta = n("n1xt"),
      to = n("QADX"),
      ts = n("Piyk"),
      td = n("l5Aa")
    let tc = Math.PI / 15
    class tu {
      #eL = new Map()
      #eF = null
      #eR = !1
      update(e, t, n, r) {
        ;(this.#eD(t), (this.#eR = n))
        let i = new Set()
        for (let l of e) {
          if (!Number.isFinite(l.point.x) || !Number.isFinite(l.point.y)) continue
          i.add(l.presenceId)
          let e = this.#eL.get(l.presenceId)
          ;(e ||
            ((e = {
              cursor: l,
              point: { ...l.point },
              velocity: { x: 0, y: 0 },
              rotation: 0,
              clickedAt: null,
              lastClickAt: l.lastClickAt,
              thinkingSince: "thinking" === l.status ? t : null,
            }),
            this.#eL.set(l.presenceId, e)),
            null != l.lastClickAt &&
              (null == e.lastClickAt || l.lastClickAt > e.lastClickAt) &&
              ((e.lastClickAt = l.lastClickAt), (e.clickedAt = n ? null : t)),
            (e.thinkingSince = "agent" === l.kind && "thinking" === l.status ? (e.thinkingSince ?? t) : null),
            "agent" === l.kind &&
              "linear" === l.motion &&
              (e.cursor.point.x !== l.point.x || e.cursor.point.y !== l.point.y) &&
              (e.movement = {
                from: { ...e.point },
                startedAt: t,
                durationMs: Math.min(600, Math.max(150, Math.hypot(l.point.x - e.point.x, l.point.y - e.point.y))),
              }),
            (e.cursor = l),
            (n || r?.has(l.presenceId)) &&
              ((e.point = { ...l.point }),
              (e.velocity = { x: 0, y: 0 }),
              (e.rotation = 0),
              (e.clickedAt = null),
              (e.movement = void 0)))
        }
        for (let e of this.#eL.keys()) i.has(e) || this.#eL.delete(e)
      }
      sample(e) {
        this.#eD(e)
        let t = !1,
          n = []
        for (let r of this.#eL.values()) {
          let i = null != r.clickedAt,
            l = !this.#eR && null != r.thinkingSince
          t ||=
            i ||
            l ||
            r.point.x !== r.cursor.point.x ||
            r.point.y !== r.cursor.point.y ||
            0 !== r.velocity.x ||
            0 !== r.velocity.y ||
            0 !== r.rotation
          let a = null == r.clickedAt ? 0 : Math.min(1, (e - r.clickedAt) / 280)
          n.push({
            ...r.cursor,
            point: { ...r.point },
            rotation: r.rotation,
            scale: 1 - 0.17 * Math.sin(a * Math.PI),
            glowOpacity: 1,
          })
        }
        return { cursors: n, isAnimating: t }
      }
      clear() {
        ;(this.#eL.clear(), (this.#eF = null))
      }
      #eD(e) {
        let t = Math.max(0, (e - (this.#eF ?? e)) / 1e3)
        for (let n of ((this.#eF = e), this.#eL.values())) {
          if ((null != n.clickedAt && e - n.clickedAt >= 280 && (n.clickedAt = null), this.#eR || 0 === t)) continue
          if (null != n.movement) {
            let { from: t, startedAt: r, durationMs: i } = n.movement,
              l = Math.min(1, Math.max(0, (e - r) / i))
            for (let e of ["x", "y"]) {
              let r = n.cursor.point[e] - t[e]
              ;((n.point[e] = t[e] + r * l), (n.velocity[e] = 1 === l ? 0 : (1e3 * r) / i))
            }
            1 === l && (n.movement = void 0)
          } else
            for (let e of ["x", "y"]) {
              let r = n.point[e] - n.cursor.point[e],
                i = n.velocity[e] + 18 * r,
                l = Math.exp(-18 * t)
              ;((n.point[e] = n.cursor.point[e] + (r + i * t) * l),
                (n.velocity[e] = (n.velocity[e] - 18 * i * t) * l),
                0.05 > Math.abs(n.point[e] - n.cursor.point[e]) &&
                  0.5 > Math.abs(n.velocity[e]) &&
                  ((n.point[e] = n.cursor.point[e]), (n.velocity[e] = 0)))
            }
          let r = Math.hypot(n.velocity.x, n.velocity.y),
            i = Math.max(-tc, Math.min(tc, n.velocity.x / 2500)),
            l = null == n.thinkingSince ? 0 : (e - n.thinkingSince) / 1e3,
            a =
              null == n.thinkingSince
                ? 0
                : 0.055 * Math.sin(l * Math.PI * 2.5) * Math.min(1, l / 0.3) * Math.max(0, 1 - r / 200)
          ;((n.rotation += (i + a - n.rotation) * (1 - Math.exp(-14 * t))),
            0 === r && null == n.thinkingSince && 0.001 > Math.abs(n.rotation) && (n.rotation = 0))
        }
      }
    }
    var tp = n("J4Ko")
    function th({
      cursors: e,
      appearance: t,
      width: n,
      height: i,
      left: l,
      top: a,
      zoom: o,
      scopeKey: s,
      renderCursorLabel: c,
      renderCursorControl: u,
      snapCursorIds: p,
      labelOnlyCursorIds: h,
    }) {
      let m = (0, d.useRef)(null),
        f = (0, d.useRef)(new Map()),
        g = e.flatMap((e) => {
          let t = c?.(e),
            n = u?.(e)
          return (null == t || "boolean" == typeof t || "" === t) && null == n
            ? []
            : [{ cursor: e, content: t, control: n }]
        }),
        [x] = (0, d.useState)(() => new tu())
      return (
        (0, O.o)(() => (x.clear(), () => x.clear()), [x, s]),
        (0, O.o)(() => {
          let r,
            s = m.current,
            d = s?.getContext("2d")
          if (!s || !d) return
          let c = s.ownerDocument.defaultView
          if (!c) return
          let u = c.matchMedia("(prefers-reduced-motion: reduce)"),
            g = c.devicePixelRatio || 1,
            b = Math.max(1, Math.round(n * g)),
            y = Math.max(1, Math.round(i * g))
          ;(s.width !== b || s.height !== y) && ((s.width = b), (s.height = y))
          let v = (e) => {
              r = void 0
              let u = x.sample(e)
              for (let e of (d.setTransform(g, 0, 0, g, 0, 0),
              d.clearRect(0, 0, n, i),
              d.translate(l, a),
              d.scale(o, o),
              u.cursors)) {
                let r = f.current.get(e.presenceId)
                if (
                  (h?.has(e.presenceId) ||
                    (0, tp.g)(d, r ? { ...e, label: void 0 } : e, {
                      zoom: o,
                      appearance: t,
                      bounds: { left: -l / o, top: -a / o, right: (n - l) / o, bottom: (i - a) / o },
                    }),
                  r)
                ) {
                  let t = l + e.point.x * o,
                    n = a + e.point.y * o
                  r.style.transform = `translate(${t}px, ${n}px)`
                }
              }
              u.isAnimating && !s.ownerDocument.hidden && (r = c.requestAnimationFrame(v))
            },
            w = () => {
              ;(null != r && c.cancelAnimationFrame(r),
                x.update(e, c.performance.now(), u.matches, p),
                v(c.performance.now()))
            }
          return (
            w(),
            u.addEventListener("change", w),
            s.ownerDocument.addEventListener("visibilitychange", w),
            () => {
              ;(null != r && c.cancelAnimationFrame(r),
                u.removeEventListener("change", w),
                s.ownerDocument.removeEventListener("visibilitychange", w))
            }
          )
        }, [t, e, i, l, x, c, u, s, p, h, a, n, o]),
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("canvas", {
              ref: m,
              "aria-hidden": !0,
              "data-testid": "popcorn-presence-overlay",
              className: "pointer-events-none absolute inset-0 block h-full w-full select-none",
            }),
            g.map(({ cursor: e, content: t, control: l }) =>
              (0, r.jsxs)(
                "div",
                {
                  ref: (t) => {
                    t ? f.current.set(e.presenceId, t) : f.current.delete(e.presenceId)
                  },
                  className: "pointer-events-none absolute top-0 left-0 w-max",
                  style: { maxWidth: n, maxHeight: i },
                  "data-presence-cursor": e.presenceId,
                  children: [
                    null != l &&
                      (0, r.jsx)("div", {
                        className: "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2",
                        children: l,
                      }),
                    (0, r.jsx)("div", {
                      style: { transform: "translate(13px, 17px)" },
                      "data-presence-label": e.presenceId,
                      children: t,
                    }),
                  ],
                },
                e.presenceId,
              ),
            ),
          ],
        })
      )
    }
    var tm = n("oR1P"),
      tf = n("Gy4b")
    function tg({ snapshot: e, onEdit: t, children: n }) {
      let { selection: i, tableId: l } = e,
        a = i?.range ?? { row: 0, column: 0, rowCount: 1, columnCount: 1 },
        o = a.rowCount,
        s = a.columnCount,
        d = { row: 0, column: 0, rowCount: e.rowCount, columnCount: e.columnCount },
        c = o > 1 ? a : d,
        u = s > 1 ? a : d,
        p = (e, n, i = !1) =>
          (0, r.jsx)(tf.Item, {
            disabled: i,
            onSelect: () => t(n),
            className:
              "flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-token-text-primary outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-40 data-[highlighted]:bg-token-bg-secondary",
            children: e,
          })
      return (0, r.jsxs)(tf.Root, {
        children: [
          (0, r.jsx)(tf.Trigger, { asChild: !0, children: n }),
          (0, r.jsx)(tf.Portal, {
            children: (0, r.jsxs)(tf.Content, {
              "aria-label": "Table actions",
              className:
                "z-50 min-w-[200px] rounded-xl border border-token-border-light bg-token-bg-primary p-1 shadow-lg",
              onPointerDown: (e) => e.stopPropagation(),
              onKeyDown: (e) => e.stopPropagation(),
              children: [
                p("Insert row above", { type: "insert-rows", tableId: l, index: a.row }, e.rowCount >= 100),
                p("Insert row below", { type: "insert-rows", tableId: l, index: a.row + o }, e.rowCount >= 100),
                p("Insert column left", { type: "insert-columns", tableId: l, index: a.column }, e.columnCount >= 100),
                p(
                  "Insert column right",
                  { type: "insert-columns", tableId: l, index: a.column + s },
                  e.columnCount >= 100,
                ),
                (0, r.jsx)(tx, {}),
                p(
                  o > 1 ? "Delete selected rows" : "Delete row",
                  { type: "delete-rows", tableId: l, index: a.row, count: o },
                  o >= e.rowCount,
                ),
                p(
                  s > 1 ? "Delete selected columns" : "Delete column",
                  { type: "delete-columns", tableId: l, index: a.column, count: s },
                  s >= e.columnCount,
                ),
                (0, r.jsx)(tx, {}),
                p("Distribute rows evenly", { type: "distribute-rows", tableId: l, range: c }, c.rowCount < 2),
                p("Distribute columns evenly", { type: "distribute-columns", tableId: l, range: u }, u.columnCount < 2),
                (0, r.jsx)(tx, {}),
                p("Merge cells", { type: "merge-cells", tableId: l, range: a }, !e.canMerge),
                p("Unmerge cells", { type: "unmerge-cells", tableId: l, range: a }, !e.canUnmerge),
                p("Clear cell contents", { type: "clear-cells", tableId: l, range: a }, !i),
              ],
            }),
          }),
        ],
      })
    }
    function tx() {
      return (0, r.jsx)(tf.Separator, { className: "my-1 h-px bg-token-border-light" })
    }
    function tb({ snapshot: e, source: t, begin: n }) {
      let i = (0, d.useRef)(new Map()),
        l = (0, d.useRef)(null)
      ;(0, d.useEffect)(() => {
        let e = l.current
        if (!e) return
        l.current = null
        let t = i.current.get(`${e.axis}:${e.destination}`) ?? i.current.get(`${e.axis}:${e.index}`)
        t?.focus({ preventScroll: !0 })
      }, [e])
      let { frame: a, selection: o, reordering: s, resizing: c } = e,
        u = e.hoveredCell ?? e.activeCell,
        p = ["column", "row"].map((t) => {
          let n,
            r = "row" === t ? e.rowHeights : e.columnWidths,
            i = [0]
          for (let e of r) i.push(i[i.length - 1] + e)
          let l = o?.range
          ;(l && "row" === t && l.columnCount === e.columnCount && (n = o.focus.row),
            l && "column" === t && l.rowCount === e.rowCount && (n = o.focus.column))
          let a = u?.[t] ?? n,
            d = new Set()
          return (
            void 0 !== a && d.add(a),
            void 0 !== n && d.add(n),
            s?.axis === t && d.add(s.index),
            { axis: t, sizes: r, offsets: i, selectedIndex: n, visibleIndex: a, indices: d }
          )
        })
      return (0, r.jsxs)(r.Fragment, {
        children: [
          u && !e.dragging
            ? ["column", "row"].map((e) =>
                (0, r.jsx)(
                  "div",
                  {
                    "aria-hidden": !0,
                    "data-testid": `popcorn-table-${e}-hover-bridge`,
                    className: "pointer-events-auto absolute z-[1]",
                    style:
                      "column" === e
                        ? { left: -24, top: -24, width: "calc(100% + 24px)", height: 24 }
                        : { left: -24, top: 0, width: 24, height: "100%" },
                    onPointerMove: (e) => e.stopPropagation(),
                    onPointerDown: (e) => e.stopPropagation(),
                  },
                  `hover-bridge-${e}`,
                ),
              )
            : null,
          p.map(({ axis: o, sizes: d, offsets: u, selectedIndex: p, visibleIndex: h, indices: m }) =>
            (0, r.jsxs)(
              "div",
              {
                className: "contents",
                children: [
                  [...m].map((c) => {
                    let h = "column" === o ? a.width : a.height,
                      m = ((u[c] + d[c] / 2) / h) * 100,
                      f = c === p,
                      g = s?.axis === o && s.index === c,
                      x =
                        "column" === o
                          ? { left: `calc(${m}% - 12px)`, top: -12 }
                          : { left: -12, top: `calc(${m}% - 12px)` }
                    return (0, r.jsx)(
                      "button",
                      {
                        ref: (e) => {
                          let t = `${o}:${c}`
                          e ? i.current.set(t, e) : i.current.delete(t)
                        },
                        type: "button",
                        "aria-label": `Reorder ${o} ${tv(o, c)}`,
                        "aria-pressed": f,
                        title: `Drag to move ${o}. Alt + arrow keys to reorder.`,
                        className:
                          "group/table-grip pointer-events-auto absolute z-[4] flex size-6 items-center justify-center rounded-md border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-current",
                        style: { ...x, color: to.ST, cursor: g ? "grabbing" : "grab" },
                        onPointerDown: (e) => n(e, { kind: "row" === o ? "row-reorder" : "column-reorder", index: c }),
                        onPointerMove: (t) => {
                          e.dragging || t.stopPropagation()
                        },
                        onClick: (n) => {
                          if ((n.stopPropagation(), 0 !== n.detail)) return
                          let r = { x: a.left, y: a.top }
                          ;(t.interact({
                            type: "pointer-down",
                            tableId: e.tableId,
                            point: r,
                            target: { kind: "row" === o ? "row-reorder" : "column-reorder", index: c },
                          }),
                            t.interact({ type: "pointer-up", tableId: e.tableId }))
                        },
                        onKeyDown: (n) => {
                          if (!n.altKey) return
                          let r = n.key === ("row" === o ? "ArrowUp" : "ArrowLeft"),
                            i = n.key === ("row" === o ? "ArrowDown" : "ArrowRight")
                          if (!r && !i) return
                          ;(n.preventDefault(), n.stopPropagation())
                          let a = r ? c - 1 : c + 2
                          a < 0 ||
                            a > d.length ||
                            ((l.current = { axis: o, index: c, destination: r ? c - 1 : c + 1 }),
                            t.interact({ type: "reorder", tableId: e.tableId, axis: o, index: c, insertionIndex: a }))
                        },
                        children: (0, r.jsx)("span", {
                          "aria-hidden": !0,
                          className: `pointer-events-none flex items-center justify-center border-2 border-white group-hover/table-grip:size-5 group-hover/table-grip:rounded-[6px] group-focus-visible/table-grip:size-5 group-focus-visible/table-grip:rounded-[6px] ${f || g ? "size-5 rounded-[6px]" : "column" === o ? "h-[7px] w-5 rounded-[5px]" : "h-5 w-[7px] rounded-[5px]"}`,
                          style: { background: to.ST, boxShadow: "0 0 0 1px rgba(255,255,255,.65)" },
                          children: (0, r.jsx)("svg", {
                            className:
                              f || g
                                ? void 0
                                : "hidden group-hover/table-grip:block group-focus-visible/table-grip:block",
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            stroke: "white",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            children: (0, r.jsx)("path", { d: "column" === o ? "M3 5h6M3 7h6" : "M5 3v6M7 3v6" }),
                          }),
                        }),
                      },
                      c,
                    )
                  }),
                  void 0 === h || e.dragging
                    ? null
                    : [h, h + 1]
                        .filter((e) => e > 0)
                        .map((n) =>
                          (0, r.jsx)(
                            "button",
                            {
                              type: "button",
                              "aria-label": `Insert ${o} after ${tv(o, n - 1)}`,
                              title: `Insert ${o} after ${tv(o, n - 1)}`,
                              className:
                                "group/table-insert pointer-events-auto absolute z-[3] flex size-6 cursor-pointer items-center justify-center border-0 bg-transparent p-0",
                              style:
                                "column" === o
                                  ? { left: `calc(${(u[n] / a.width) * 100}% - 12px)`, top: -23 }
                                  : { left: -23, top: `calc(${(u[n] / a.height) * 100}% - 12px)` },
                              onPointerMove: (e) => e.stopPropagation(),
                              onPointerDown: (e) => e.stopPropagation(),
                              onClick: (r) => {
                                ;(r.stopPropagation(),
                                  t.edit({
                                    type: "row" === o ? "insert-rows" : "insert-columns",
                                    tableId: e.tableId,
                                    index: n,
                                  }))
                              },
                              children: (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                className:
                                  "pointer-events-none flex size-[6px] items-center justify-center overflow-hidden rounded-full text-white transition-[width,height] group-hover/table-insert:size-5 group-focus-visible/table-insert:size-5",
                                style: { background: to.ST },
                                children: (0, r.jsx)("svg", {
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 16 16",
                                  className:
                                    "shrink-0 opacity-0 group-hover/table-insert:opacity-100 group-focus-visible/table-insert:opacity-100",
                                  children: (0, r.jsx)("path", {
                                    d: "M8 3v10M3 8h10",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                  }),
                                }),
                              }),
                            },
                            `boundary-${n}`,
                          ),
                        ),
                  s?.axis === o && s.valid
                    ? (0, r.jsx)(ty, {
                        axis: o,
                        offset: (u[s.insertionIndex] / ("column" === o ? a.width : a.height)) * 100,
                        testId: "popcorn-table-reorder-guide",
                      })
                    : null,
                  c?.axis === o
                    ? (0, r.jsx)(ty, {
                        axis: o,
                        offset: (u[c.index + 1] / ("column" === o ? a.width : a.height)) * 100,
                        testId: "popcorn-table-resize-guide",
                      })
                    : null,
                ],
              },
              o,
            ),
          ),
          ["row", "column"].map((n) =>
            (0, r.jsx)(
              "button",
              {
                type: "button",
                "aria-label": `Add ${n}`,
                title: `Add ${n}`,
                "data-testid": `popcorn-table-add-${n}`,
                disabled: e.dragging,
                className:
                  "group pointer-events-auto absolute z-[2] flex items-center justify-center rounded-full border border-black/10 bg-white p-0 shadow-[0_2px_5px_rgba(0,0,0,0.06)] transition-colors hover:border-current hover:bg-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none",
                style: {
                  color: to.ST,
                  ...("row" === n
                    ? { left: 8, top: "calc(100% + 10px)", width: "max(20px, calc(100% - 16px))", height: 22 }
                    : { top: 8, left: "calc(100% + 10px)", width: 22, height: "max(20px, calc(100% - 16px))" }),
                },
                onPointerDown: (e) => e.stopPropagation(),
                onPointerMove: (e) => e.stopPropagation(),
                onClick: (r) => {
                  ;(r.stopPropagation(),
                    t.edit({
                      type: "row" === n ? "insert-rows" : "insert-columns",
                      tableId: e.tableId,
                      index: "row" === n ? e.rowCount : e.columnCount,
                    }))
                },
                children: (0, r.jsx)("svg", {
                  "aria-hidden": !0,
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  className: "group-hover:text-white",
                  children: (0, r.jsx)("path", {
                    d: "M8 3v10M3 8h10",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                  }),
                }),
              },
              n,
            ),
          ),
        ],
      })
    }
    function ty({ axis: e, offset: t, testId: n }) {
      return (0, r.jsx)("div", {
        "aria-hidden": !0,
        "data-testid": n,
        className: "pointer-events-none absolute z-[3] rounded-full",
        style: {
          background: to.ST,
          ...("column" === e
            ? { left: `calc(${t}% - 1px)`, top: 0, width: 2, height: "100%" }
            : { top: `calc(${t}% - 1px)`, left: 0, height: 2, width: "100%" }),
        },
      })
    }
    function tv(e, t) {
      if ("row" === e) return String(t + 1)
      let n = ""
      for (let e = t + 1; e > 0; e = Math.floor((e - 1) / 26)) n = String.fromCharCode(65 + ((e - 1) % 26)) + n
      return n
    }
    let tw = [
        { id: "top-left", cursor: "nw", x: 0, y: 0 },
        { id: "top-right", cursor: "ne", x: 1, y: 0 },
        { id: "bottom-left", cursor: "sw", x: 0, y: 1 },
        { id: "bottom-right", cursor: "se", x: 1, y: 1 },
      ],
      tC = (0, eQ.h6)(1)
    function tS({ source: e, camera: t, cameraSource: n, onEditText: i, textEditing: l = !1, snapToPixels: a = !1 }) {
      let o = (0, d.useSyncExternalStore)(
          (0, d.useCallback)((t) => e.subscribe(t), [e]),
          (0, d.useCallback)(() => e.getSnapshot(), [e]),
          (0, d.useCallback)(() => e.getSnapshot(), [e]),
        ),
        s = n ? (n.getCamera() ?? t) : (o?.camera ?? t),
        c = (0, d.useRef)(null),
        u = (0, d.useRef)(null),
        p = (0, d.useRef)(null),
        h = (0, d.useRef)(null),
        m = (0, d.useRef)(null),
        f = (0, d.useCallback)((e) => {
          let t = u.current
          ;(!e &&
            t?.contains(t.ownerDocument.activeElement) &&
            t.parentElement?.closest("[data-popcorn-table-focus-owner]")?.focus({ preventScroll: !0 }),
            (u.current = e))
        }, []),
        g = (0, d.useRef)(null),
        x = (0, d.useRef)(null),
        b = o?.tableId,
        [y, v] = (0, d.useState)(null)
      ;(0, O.o)(() => {
        let e = c.current
        if (!e || !a) return
        let t = () => {
          let t,
            n,
            r,
            i,
            l,
            a,
            o =
              ((t = e.getBoundingClientRect()),
              (i = Math.max(
                1,
                Number.parseFloat((r = (n = e.ownerDocument.defaultView).getComputedStyle(e)).width) ||
                  e.clientWidth ||
                  t.width,
              )),
              (l = Math.max(1, Number.parseFloat(r.height) || e.clientHeight || t.height)),
              {
                width: i,
                height: l,
                dpr: (a = n.devicePixelRatio || 1) * (t.width > 0 ? t.width / i : 1),
                pixelOffset: { x: t.left * a - Math.floor(t.left * a), y: t.top * a - Math.floor(t.top * a) },
              })
          v((e) =>
            e?.dpr === o.dpr && e.pixelOffset?.x === o.pixelOffset?.x && e.pixelOffset?.y === o.pixelOffset?.y ? e : o,
          )
        }
        t()
        let n = new ResizeObserver(t)
        n.observe(e)
        let r = (0, to.zY)(e, t)
        return (
          window.addEventListener("resize", t),
          window.addEventListener("scroll", t, !0),
          () => {
            ;(n.disconnect(), r(), window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0))
          }
        )
      }, [b, a])
      let w = (0, d.useRef)(i)
      ;(0, d.useEffect)(() => {
        w.current = i
      }, [i])
      let C = (0, d.useRef)(!1),
        S = (0, d.useRef)(null)
      ;((0, O.o)(() => {
        if (!n) {
          u.current && (u.current.style.visibility = "")
          return
        }
        if (!o) return
        let e = () => {
          let e = u.current
          if (!e) return
          let t = n.getCamera()
          if (((e.style.visibility = t ? "" : "hidden"), !t)) return
          let r = tI(o.frame, t, a ? y : null)
          if (
            (tE(e, r.viewportFrame),
            (e.style.transformOrigin = r.pixels
              ? `${r.center.x - r.viewportFrame.left}px ${r.center.y - r.viewportFrame.top}px`
              : "center"),
            o.activeCell)
          ) {
            let e = r.relativeBounds(o.activeCell)
            ;(tE(p.current, e), tE(m.current, e))
          }
          o.selectionBounds &&
            tE(h.current, r.relativeBounds(o.selectionBounds, r.pixels ? (r.selectionWidth * r.pixels.dpr) / 2 : 0))
        }
        return (e(), n.subscribe(e))
      }, [n, o, a, y]),
        (0, d.useEffect)(() => {
          let t = () => {
            let t = g.current
            t && ((g.current = null), e.interact({ type: "pointer-cancel", tableId: t.tableId }), tM(t))
          }
          return (
            window.addEventListener("blur", t),
            () => {
              ;(window.removeEventListener("blur", t), t())
            }
          )
        }, [e, b]),
        (0, d.useEffect)(() => {
          b && !l && u.current?.focus({ preventScroll: !0 })
        }, [b, l]))
      let k = o?.contextMenuRequest
      ;(0, d.useEffect)(() => {
        let e = u.current
        if (!k || !b || !e) return
        let t = x.current
        if (t?.tableId !== b || t.id !== k.id) {
          ;((x.current = { tableId: b, id: k.id }), (C.current = !0))
          try {
            var n, r, i, l
            let t, a, o
            ;((n = e),
              (r = c.current),
              (i = k.point),
              (l = s),
              (t = r?.getBoundingClientRect()),
              (a = r?.clientWidth && t?.width ? t.width / r.clientWidth : 1),
              (o = r?.clientHeight && t?.height ? t.height / r.clientHeight : 1),
              n.dispatchEvent(
                new MouseEvent("contextmenu", {
                  bubbles: !0,
                  clientX: (t?.left ?? 0) + (i.x * l.k + l.x) * a,
                  clientY: (t?.top ?? 0) + (i.y * l.k + l.y) * o,
                  button: 2,
                }),
              ))
          } finally {
            C.current = !1
          }
        }
      }, [k, b, s.x, s.y, s.k])
      let I = o?.textEditRequest
      if (
        ((0, d.useEffect)(() => {
          if (!I || !b) return
          let e = S.current
          ;(e?.tableId !== b || e.id !== I.id) && ((S.current = { tableId: b, id: I.id }), w.current(I.point))
        }, [I, b]),
        !o || !(s.k > 0))
      )
        return null
      let { frame: E, selection: j } = o,
        {
          pixels: M,
          center: T,
          borderWidth: A,
          selectionWidth: P,
          visibleHandleSize: L,
          viewportFrame: F,
          relativeBounds: R,
        } = tI(E, s, a ? y : null),
        D = tT(o.rowHeights),
        N = tT(o.columnWidths),
        z = o.activeCell,
        B = o.selectionBounds,
        V = z ? `popcorn-table-cell-${z.cellId}` : void 0,
        H = j ? "default" : "move"
      ;(o.resizing && (H = "column" === o.resizing.axis ? "col-resize" : "row-resize"),
        o.reordering && (H = o.reordering.valid ? "grabbing" : "not-allowed"))
      let K = (e) => {
          let t = n?.getCamera() ?? s,
            r = c.current,
            i = r?.getBoundingClientRect(),
            l = i?.width && r?.clientWidth ? r.clientWidth / i.width : 1,
            a = i?.height && r?.clientHeight ? r.clientHeight / i.height : 1
          return { x: ((e.clientX - (i?.left ?? 0)) * l - t.x) / t.k, y: ((e.clientY - (i?.top ?? 0)) * a - t.y) / t.k }
        },
        $ = (t, n) => {
          if (0 !== t.button || (l && ("cell" === n.kind || "body" === n.kind)) || g.current) return
          ;(t.preventDefault(), t.stopPropagation())
          let r = u.current
          if (r) {
            ;(r.focus({ preventScroll: !0 }),
              (g.current = {
                pointerId: t.pointerId,
                tableId: o.tableId,
                element: r,
                clientX: t.clientX,
                clientY: t.clientY,
              }))
            try {
              r.setPointerCapture(t.pointerId)
            } catch {}
            e.interact({ type: "pointer-down", tableId: o.tableId, target: n, point: K(t), shiftKey: t.shiftKey })
          }
        },
        q = (t, n) => {
          let r = g.current
          r &&
            r.pointerId === t.pointerId &&
            ((g.current = null),
            t.preventDefault(),
            t.stopPropagation(),
            e.interact(
              n
                ? { type: "pointer-cancel", tableId: r.tableId }
                : { type: "pointer-up", tableId: r.tableId, point: K(t), shiftKey: t.shiftKey },
            ),
            tM(r))
        },
        W = (t) => {
          let n = g.current
          !l &&
            "Shift" === t.key &&
            n &&
            (e.interact({ type: "pointer-move", tableId: n.tableId, point: K(n), shiftKey: t.shiftKey }),
            t.preventDefault(),
            t.stopPropagation())
        }
      return (0, r.jsx)("div", {
        ref: c,
        className: "pointer-events-none absolute inset-0",
        "data-testid": "popcorn-table-editing-overlay",
        children: (0, r.jsx)(tg, {
          snapshot: o,
          onEdit: (t) => e.edit(t),
          children: (0, r.jsxs)("div", {
            ref: f,
            role: "grid",
            "aria-label": "Table cell selection",
            "aria-rowcount": o.rowCount,
            "aria-colcount": o.columnCount,
            "aria-multiselectable": "true",
            "aria-activedescendant": V,
            tabIndex: l ? -1 : 0,
            "data-testid": "popcorn-table-grid",
            className: "absolute touch-none outline-none",
            style: {
              ...F,
              transform: `rotate(${E.rotation}deg)`,
              transformOrigin: M ? `${T.x - F.left}px ${T.y - F.top}px` : "center",
              pointerEvents: l ? "none" : "auto",
              cursor: H,
            },
            onPointerDown: (e) => $(e, { kind: "body" }),
            onPointerMove: (t) => {
              if (!g.current) {
                l || e.interact({ type: "hover", tableId: o.tableId, point: K(t) })
                return
              }
              g.current.pointerId === t.pointerId &&
                ((g.current.clientX = t.clientX),
                (g.current.clientY = t.clientY),
                t.preventDefault(),
                t.stopPropagation(),
                e.interact({ type: "pointer-move", tableId: g.current.tableId, point: K(t), shiftKey: t.shiftKey }))
            },
            onPointerLeave: () => {
              g.current || e.interact({ type: "hover", tableId: o.tableId, point: null })
            },
            onPointerUp: (e) => q(e, !1),
            onPointerCancel: (e) => q(e, !0),
            onLostPointerCapture: (e) => q(e, !0),
            onDoubleClick: (e) => {
              ;(e.preventDefault(), e.stopPropagation())
            },
            onContextMenu: (t) => {
              ;(t.stopPropagation(),
                C.current ||
                  (t.preventDefault(),
                  e.interact({ type: "context-menu", tableId: o.tableId, point: K(t), requestOpen: !0 })))
            },
            onKeyDown: (t) => {
              if ((W(t), l)) return
              let { key: n } = t
              if ("Escape" === n && g.current) {
                let n = g.current
                ;((g.current = null),
                  e.interact({ type: "pointer-cancel", tableId: n.tableId }),
                  tM(n),
                  t.preventDefault(),
                  t.stopPropagation())
                return
              }
              if (g.current) {
                ;(t.preventDefault(), t.stopPropagation())
                return
              }
              if (!(t.target !== t.currentTarget && t.target instanceof HTMLButtonElement)) {
                if ("ContextMenu" === n || ("F10" === n && t.shiftKey)) {
                  ;(t.preventDefault(), t.stopPropagation())
                  let n = tA(
                    z
                      ? { x: z.left + z.width / 2, y: z.top + z.height / 2 }
                      : { x: E.left + E.width / 2, y: E.top + E.height / 2 },
                    E,
                  )
                  e.interact({ type: "context-menu", tableId: o.tableId, point: n, requestOpen: !0 })
                  return
                }
                if ((t.metaKey || t.ctrlKey) && "a" === n.toLowerCase())
                  e.interact({ type: "select-all", tableId: o.tableId })
                else {
                  if (t.metaKey || t.ctrlKey || t.altKey) return
                  let r =
                    "ArrowLeft" === n
                      ? "left"
                      : "ArrowRight" === n
                        ? "right"
                        : "ArrowUp" === n
                          ? "up"
                          : "ArrowDown" === n
                            ? "down"
                            : "Tab" === n
                              ? t.shiftKey
                                ? "previous"
                                : "next"
                              : null
                  if (r) {
                    if (!j && "Tab" !== n) return
                    e.interact({
                      type: "navigate",
                      tableId: o.tableId,
                      direction: r,
                      extend: "Tab" !== n && t.shiftKey,
                    })
                  } else if ("Enter" === n || "F2" === n) {
                    if (!z) return
                    i(tA({ x: z.left + z.width / 2, y: z.top + z.height / 2 }, E))
                  } else {
                    if (("Backspace" !== n && "Delete" !== n) || !j) return
                    e.edit({ type: "clear-cells", tableId: o.tableId, range: j.range })
                  }
                }
                ;(t.preventDefault(), t.stopPropagation())
              }
            },
            onKeyUp: W,
            children: [
              j || l ? null : (0, r.jsx)(tk, { strokeWidth: P }),
              z
                ? (0, r.jsx)("div", {
                    role: "row",
                    "aria-rowindex": z.row + 1,
                    className: "contents",
                    children: (0, r.jsx)("div", {
                      ref: p,
                      id: `popcorn-table-cell-${z.cellId}`,
                      role: "gridcell",
                      "aria-label": `Row ${z.row + 1}, column ${z.column + 1}`,
                      "aria-rowindex": z.row + 1,
                      "aria-colindex": z.column + 1,
                      "aria-rowspan": z.rowSpan,
                      "aria-colspan": z.columnSpan,
                      "aria-selected": "true",
                      className: "pointer-events-none absolute",
                      style: { ...R(z) },
                    }),
                  })
                : null,
              B && !l
                ? (0, r.jsx)("div", {
                    ref: h,
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute",
                    style: {
                      ...R(B, M ? (P * M.dpr) / 2 : 0),
                      background: `color-mix(in srgb, ${to.ST} 8%, transparent)`,
                    },
                    children: (0, r.jsx)(tk, { strokeWidth: P }),
                  })
                : null,
              z && o.canMerge && !l
                ? (0, r.jsx)("div", {
                    ref: m,
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute",
                    style: { ...R(z), border: `${A}px solid ${to.ST}` },
                  })
                : null,
              (0, r.jsxs)(r.Fragment, {
                children: [
                  l ? null : (0, r.jsx)(tb, { snapshot: o, source: e, begin: $ }),
                  o.columnWidths.map((t, n) =>
                    (0, r.jsx)(
                      tj,
                      {
                        axis: "column",
                        index: n,
                        size: t,
                        style: {
                          left: `calc(${(((N[n] ?? 0) + t) / E.width) * 100}% - 3px)`,
                          top: 0,
                          width: 6,
                          height: "100%",
                        },
                        onPointerDown: (e) => $(e, { kind: "column-resize", index: n }),
                        onResize: (t) => e.edit({ type: "resize-column", tableId: o.tableId, index: n, size: t }),
                      },
                      `column-resize-${n}`,
                    ),
                  ),
                  o.rowHeights.map((t, n) =>
                    (0, r.jsx)(
                      tj,
                      {
                        axis: "row",
                        index: n,
                        size: t,
                        style: {
                          top: `calc(${(((D[n] ?? 0) + t) / E.height) * 100}% - 3px)`,
                          left: 0,
                          height: 6,
                          width: "100%",
                        },
                        onPointerDown: (e) => $(e, { kind: "row-resize", index: n }),
                        onResize: (t) => e.edit({ type: "resize-row", tableId: o.tableId, index: n, size: t }),
                      },
                      `row-resize-${n}`,
                    ),
                  ),
                  l || j
                    ? null
                    : tw.map((e) =>
                        (0, r.jsx)(
                          "button",
                          {
                            type: "button",
                            tabIndex: -1,
                            "aria-label": `Resize table ${e.id.replaceAll("-", " ")}`,
                            className:
                              "pointer-events-auto absolute z-[2] flex items-center justify-center border-0 bg-transparent p-0 outline-none",
                            style: {
                              left: `calc(${100 * e.x}% - ${tC.hitRadius}px)`,
                              top: `calc(${100 * e.y}% - ${tC.hitRadius}px)`,
                              width: 2 * tC.hitRadius,
                              height: 2 * tC.hitRadius,
                              cursor: (0, eQ.WB)(e.cursor) ?? void 0,
                              transform: `rotate(${-E.rotation}deg)`,
                            },
                            onPointerDown: (t) => $(t, { kind: "table-resize", corner: e.id }),
                            children: (0, r.jsx)("svg", {
                              "aria-hidden": !0,
                              className: "pointer-events-none",
                              width: L + P,
                              height: L + P,
                              children: (0, r.jsx)("circle", {
                                cx: (L + P) / 2,
                                cy: (L + P) / 2,
                                r: L / 2,
                                fill: tm.a,
                                stroke: to.ST,
                                strokeWidth: P,
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
                  o.resizing
                    ? (0, r.jsxs)("div", {
                        role: "status",
                        className:
                          "pointer-events-none absolute -top-10 right-0 rounded-lg px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-sm",
                        style: { background: to.ST },
                        children: [
                          "row" === o.resizing.axis ? "Height" : "Width",
                          ":",
                          " ",
                          Math.round(o.resizing.size),
                          " px",
                        ],
                      })
                    : null,
                ],
              }),
            ],
          }),
        }),
      })
    }
    function tk({ strokeWidth: e }) {
      return (0, r.jsx)("svg", {
        "aria-hidden": !0,
        className: "pointer-events-none absolute inset-0 overflow-visible",
        width: "100%",
        height: "100%",
        children: (0, r.jsx)("rect", { width: "100%", height: "100%", fill: "none", stroke: to.ST, strokeWidth: e }),
      })
    }
    function tI(e, t, n) {
      let r = e.rotation % 90 == 0 ? n : null,
        i = { x: (e.left + e.width / 2) * t.k + t.x, y: (e.top + e.height / 2) * t.k + t.y },
        l = r ? new DOMMatrix().translate(i.x, i.y).rotate(e.rotation).translate(-i.x, -i.y) : null,
        a = r ? Math.max(1, Math.round(r.dpr)) / r.dpr : 1,
        o = r ? Math.max(1, Math.round(1.25 * r.dpr + 1e-6)) / r.dpr : 1.25,
        s = r ? (2 * Math.max(1, Math.round(tC.halfVisibleSize * r.dpr))) / r.dpr : tC.visibleSize,
        d = (e, n = 0) => {
          if (!r || !l)
            return { left: e.left * t.k + t.x, top: e.top * t.k + t.y, width: e.width * t.k, height: e.height * t.k }
          let i = (e, t) => {
              let i = "x" === t ? l.a : l.c,
                a = "x" === t ? l.b : l.d,
                o = Math.abs(i) > 0.5,
                s = Math.round(o ? i : a) * r.dpr,
                d = o ? (r.pixelOffset?.x ?? 0) + l.e * r.dpr : (r.pixelOffset?.y ?? 0) + l.f * r.dpr
              return (Math.round(e * s + d - n) + n - d) / s
            },
            a = i(e.left * t.k + t.x, "x"),
            o = i(e.top * t.k + t.y, "y")
          return {
            left: a,
            top: o,
            width: i((e.left + e.width) * t.k + t.x, "x") - a,
            height: i((e.top + e.height) * t.k + t.y, "y") - o,
          }
        },
        c = d(e, r ? (o * r.dpr) / 2 : 0)
      return {
        pixels: r,
        center: i,
        borderWidth: a,
        selectionWidth: o,
        visibleHandleSize: s,
        viewportFrame: c,
        relativeBounds: (n, i = 0) => {
          if (!r)
            return {
              left: (n.left - e.left) * t.k,
              top: (n.top - e.top) * t.k,
              width: n.width * t.k,
              height: n.height * t.k,
            }
          let l = d(n, i)
          return { ...l, left: l.left - c.left, top: l.top - c.top }
        },
      }
    }
    function tE(e, t) {
      e &&
        ((e.style.left = `${t.left}px`),
        (e.style.top = `${t.top}px`),
        (e.style.width = `${t.width}px`),
        (e.style.height = `${t.height}px`))
    }
    function tj({ axis: e, index: t, size: n, style: i, onPointerDown: l, onResize: a }) {
      return (0, r.jsx)("button", {
        type: "button",
        role: "separator",
        "aria-label": `Resize ${e} ${
          "row" === e
            ? t + 1
            : (function (e) {
                let t = ""
                for (let n = e + 1; n > 0; n = Math.floor((n - 1) / 26))
                  t = String.fromCharCode(65 + ((n - 1) % 26)) + t
                return t
              })(t)
        }`,
        "aria-orientation": "column" === e ? "vertical" : "horizontal",
        "aria-valuenow": Math.round(n),
        "aria-valuemax": Math.max(1e4, Math.round(n)),
        "aria-valuetext": `${Math.round(n)} pixels`,
        "aria-valuemin": "row" === e ? 20 : 24,
        className: "group pointer-events-auto absolute z-[1] border-0 bg-transparent p-0 outline-none",
        style: { ...i, cursor: "column" === e ? "col-resize" : "row-resize" },
        onPointerDown: l,
        onDoubleClick: (e) => {
          ;(e.preventDefault(), e.stopPropagation())
        },
        onKeyDown: (t) => {
          let r = "column" === e ? "ArrowRight" === t.key : "ArrowDown" === t.key,
            i = "column" === e ? "ArrowLeft" === t.key : "ArrowUp" === t.key
          ;(r || i) &&
            (t.preventDefault(),
            t.stopPropagation(),
            a(Math.max("row" === e ? 20 : 24, n + (r ? 1 : -1) * (t.shiftKey ? 10 : 1))))
        },
        children: (0, r.jsx)("span", {
          "aria-hidden": !0,
          className: `pointer-events-none absolute rounded opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 ${"column" === e ? "inset-y-0 left-1/2 w-[2px] -translate-x-1/2" : "inset-x-0 top-1/2 h-[2px] -translate-y-1/2"}`,
          style: { background: to.ST },
        }),
      })
    }
    function tM(e) {
      if (e.element.hasPointerCapture?.(e.pointerId))
        try {
          e.element.releasePointerCapture(e.pointerId)
        } catch {}
    }
    function tT(e) {
      let t = 0
      return e.map((e) => {
        let n = t
        return ((t += e), n)
      })
    }
    function tA(e, t) {
      let n = (t.rotation * Math.PI) / 180,
        r = t.left + t.width / 2,
        i = t.top + t.height / 2,
        l = e.x - r,
        a = e.y - i
      return { x: r + l * Math.cos(n) - a * Math.sin(n), y: i + l * Math.sin(n) + a * Math.cos(n) }
    }
    var tP = n("Kyo0"),
      tL = n("HAmk"),
      tF = n("QFpE"),
      tR = n("mFqz"),
      tD = n("szFK"),
      tN = n("r861"),
      tz = n("nw30"),
      tB = n("Swhk")
    function tO(e, t) {
      return (
        e.id === t.id &&
        e.url === t.url &&
        e.action === t.action &&
        (0, tN.UG)(e.revision, t.revision) &&
        (0, tN.UA)(e.source, t.source) &&
        e.frame.left === t.frame.left &&
        e.frame.top === t.frame.top &&
        e.frame.width === t.frame.width &&
        e.frame.height === t.frame.height &&
        e.frame.rotation === t.frame.rotation
      )
    }
    function tV(e, t = e.slideRect, n = null) {
      let r = e.selectionGeometry,
        i = n && 1 === r.targetCount && r.primaryTarget?.id === n.tableId ? n.frame : r.bounds
      return i
        ? t
          ? {
              left: t.left + i.left * t.scale,
              top: t.top + i.top * t.scale,
              width: i.width * t.scale,
              height: i.height * t.scale,
            }
          : i
        : null
    }
    var tH = n("fwz6")
    function tK({ clientX: e, clientY: t }, n, r, i, l) {
      let a = i.selectedSlideFrame
      if (!n || !a) return null
      let o = (0, tB.f)(n, e, t)
      if (i.gridLayout) {
        let e = (0, tH.w4)(i.gridLayout, i.selectedSlideIdx, r)
        return e ? { x: (o.x - e.left) / e.scale, y: (o.y - e.top) / e.scale } : null
      }
      return (0, _.Xt)({
        camera: r,
        viewportX: o.x,
        viewportY: o.y,
        viewport: { width: n.clientWidth, height: n.clientHeight },
        frame: a,
        viewportInsets: l,
      })
    }
    function t$(e, t, n, r, i, l, a = 0) {
      return l
        ? (0, tH.w4)(l, a, n)
        : !r || e <= 0 || t <= 0
          ? null
          : (0, _.c8)({ viewport: { width: e, height: t }, frame: r, camera: n, viewportInsets: i }).slideRect
    }
    var tq = n("vN5b"),
      tW = n("cW8U")
    function tU({
      controller: e,
      runtime: t,
      slideId: n,
      isEditing: i,
      isExpanded: l,
      contentHeight: a,
      maxContentHeight: o,
      onContentHeightChange: s,
      onExpandedChange: c,
      onHeightChange: u,
      visible: p,
      focusViewportInsets: h,
    }) {
      let m = (0, d.useRef)(null),
        f = (0, d.useRef)(null),
        g = (0, d.useMemo)(() => {
          if (!h) return null
          let n = e.getSnapshot(),
            r = e.getViewTransitionCamera()
          if (!n.gridLayout || !r) return null
          let i = t.getLayoutSnapshot(),
            l = (0, tq.Zc)({
              viewport: i,
              gridViewportInsets: i.viewportInsets,
              slideViewportInsets: h,
              gridLayout: n.gridLayout,
              camera: r,
            })
          return l ? { ...l, slideRect: (0, tH.w4)(n.gridLayout, l.selectedSlideIdx, l.toCamera) } : null
        }, [e, t, h])
      return (
        (0, O.o)(() => {
          let n = f.current
          if (!n || (!p && !g)) return
          let r = () => {
            let r = e.getSnapshot(),
              i = t.getLayoutSnapshot(),
              l =
                g?.slideRect ??
                t$(
                  i.width,
                  i.height,
                  e.getPresentedViewportCamera() ?? t.getCamera(),
                  r.selectedSlideFrame,
                  i.viewportInsets,
                  r.gridLayout,
                  r.selectedSlideIdx,
                ) ??
                r.slideRect
            l &&
              ((n.style.left = `${l.left}px`),
              (n.style.top = `${l.top + l.height + 12}px`),
              (n.style.width = `${l.width}px`))
          }
          r()
          let i = e.subscribeToViewportFrames(r),
            l = t.subscribeToLayoutChanges(r)
          return () => {
            ;(i(), l())
          }
        }, [e, t, n, g, p]),
        (0, O.o)(() => {
          let t = m.current
          if (!t || !g) return
          let n = () => {
            let n = e.getViewTransitionCamera()
            t.style.opacity = String(
              e.getSnapshot().gridLayout
                ? n
                  ? (function ({ fromCamera: e, toCamera: t, currentCamera: n, anchor: r }) {
                      let i
                      if (e.k !== t.k) i = (Math.log(n.k) - Math.log(e.k)) / (Math.log(t.k) - Math.log(e.k))
                      else {
                        let l = (0, tW.UK)(e, r.x, r.y),
                          a = (0, tW.UK)(t, r.x, r.y),
                          o = (0, tW.UK)(n, r.x, r.y),
                          s = a.x - l.x,
                          d = a.y - l.y,
                          c = s * s + d * d
                        i = 0 === c ? 1 : ((o.x - l.x) * s + (o.y - l.y) * d) / c
                      }
                      return Math.max(0, 3 * Math.min(1, Math.max(0, i)) - 2)
                    })({ fromCamera: g.fromCamera, toCamera: g.toCamera, currentCamera: n, anchor: g.anchor })
                  : 0
                : 1,
            )
          }
          n()
          let r = e.subscribeToViewportFrames(n)
          return () => {
            ;(r(), t.style.removeProperty("opacity"))
          }
        }, [e, g]),
        (0, r.jsx)("div", {
          ref: m,
          className: "popcorn-presentation-attached-notes-layer",
          "data-grid-hidden": !p && !g,
          "aria-hidden": !p,
          inert: !p,
          children: (0, r.jsx)("div", {
            ref: f,
            className: "popcorn-presentation-attached-notes-anchor",
            children: (0, r.jsx)(
              tG,
              {
                controller: e,
                isEditing: i,
                isExpanded: l,
                contentHeight: a,
                maxContentHeight: o,
                onContentHeightChange: s,
                onExpandedChange: c,
                onHeightChange: u,
              },
              n,
            ),
          }),
        })
      )
    }
    function tG({
      controller: e,
      isEditing: t,
      isExpanded: n,
      contentHeight: i,
      maxContentHeight: l,
      onContentHeightChange: a,
      onExpandedChange: o,
      onHeightChange: s,
    }) {
      let [c, u] = (0, d.useState)(() => {
          let { notesText: t } = e.getSnapshot()
          return { workerText: t, text: t, pending: [] }
        }),
        p = (0, d.useRef)(e),
        h = (0, d.useId)(),
        [m, f] = (0, d.useState)(!1),
        g = 24 + (n ? i : 0)
      return (
        (0, O.o)(() => {
          if (p.current !== e) {
            p.current = e
            let { notesText: t } = e.getSnapshot()
            u({ workerText: t, text: t, pending: [] })
          }
          let t = () => {
              let { notesText: t } = e.getSnapshot()
              u((e) => (e.workerText === t ? e : { ...e, workerText: t, text: e.pending.length > 0 ? e.text : t }))
            },
            n = e.subscribe(t),
            r = e.subscribeEditEvents((t) => {
              if ("edit-started" === t.type) return
              let { notesText: n } = e.getSnapshot()
              u((e) => {
                if (!e.pending.includes(t.command.id)) return e
                let r = e.pending.filter((e) => e !== t.command.id)
                return { workerText: n, text: r.length > 0 ? e.text : n, pending: r }
              })
            })
          return (
            t(),
            () => {
              ;(n(), r())
            }
          )
        }, [e]),
        (0, O.o)(() => {
          s(g)
        }, [s, g]),
        (0, r.jsxs)("section", {
          className: "popcorn-presentation-attached-notes",
          "aria-label": "Speaker notes",
          "data-expanded": n,
          "data-animate": m,
          style: { height: g },
          children: [
            (0, r.jsx)(ey.b_, {
              className: "popcorn-presentation-attached-notes-toggle",
              "aria-controls": h,
              expanded: n,
              label: "Speaker notes",
              showActiveBackground: !1,
              onClick: (e) => {
                ;(f(e.detail > 0), o(!n))
              },
              children: (0, r.jsx)(E.cr, {
                className: "popcorn-presentation-attached-notes-chevron",
                "aria-hidden": "true",
              }),
            }),
            (0, r.jsx)("div", {
              id: h,
              className: "popcorn-presentation-attached-notes-body",
              "aria-hidden": !n,
              inert: !n,
              style: { bottom: 24 },
              children: (0, r.jsxs)("div", {
                className: "popcorn-presentation-attached-notes-content",
                style: { height: i },
                children: [
                  n &&
                    (0, r.jsx)(eF, {
                      height: i,
                      maxHeight: l,
                      contentId: h,
                      onResize: (e) => {
                        ;(f(!1), a(e))
                      },
                    }),
                  (0, r.jsx)("textarea", {
                    className: "popcorn-presentation-attached-notes-input",
                    "aria-label": "Speaker notes",
                    "data-popcorn-viewport-two-finger-gestures": !0,
                    placeholder: t ? "Add speaker notes..." : "No speaker notes",
                    value: c.text,
                    rows: 1,
                    readOnly: !t,
                    onWheelCapture: (e) => {
                      e.ctrlKey || e.metaKey || e.stopPropagation()
                    },
                    onChange: (n) => {
                      if (t) {
                        let t = n.target.value,
                          r = (0, e2.x)("speaker-notes")
                        ;(u((e) => ({ ...e, text: t, pending: [...e.pending, r] })),
                          e.dispatch(
                            { kind: "update-speaker-notes", value: t },
                            { id: r, type: "update-speaker-notes", source: "human" },
                          ))
                      }
                    },
                  }),
                ],
              }),
            }),
          ],
        })
      )
    }
    function t_({ camera: e, keyboardCenter: t, subscribeEditEvents: n, onCommit: i, onComplete: l, onCancel: a }) {
      let o = (0, d.useRef)(null),
        s = (0, d.useRef)(null),
        c = (0, d.useRef)(null),
        u = (0, d.useRef)(null),
        [p, h] = (0, d.useState)(!1),
        m = (0, d.useRef)(null),
        f = (0, d.useRef)(null),
        g = (0, d.useRef)(a)
      g.current = a
      let x = (0, d.useRef)(l)
      x.current = l
      let b = () => {
        ;((f.current = null),
          m.current?.unsubscribe(),
          (m.current = null),
          h(!1),
          s.current && (s.current.style.display = "none"),
          u.current && (u.current.style.display = "none"))
      }
      ;((0, O.o)(() => {
        o.current?.focus({ preventScroll: !0 })
        let e = () => {
            ;(b(), g.current())
          },
          t = (t) => {
            "Escape" === t.key && (t.preventDefault(), t.stopPropagation(), e())
          }
        return (
          document.addEventListener("keydown", t, !0),
          window.addEventListener("blur", e),
          () => {
            ;(m.current?.unsubscribe(),
              (m.current = null),
              document.removeEventListener("keydown", t, !0),
              window.removeEventListener("blur", e))
          }
        )
      }, []),
        (0, d.useEffect)(() => {
          let t = f.current ?? m.current
          t && (t.camera.x !== e.x || t.camera.y !== e.y || t.camera.k !== e.k) && (b(), g.current())
        }, [e.x, e.y, e.k]))
      let y = (e) => (0, tB.f)(e.currentTarget, e.clientX, e.clientY),
        v = (e) => {
          let t = f.current
          if (!t) return null
          let n = (e.x - t.start.x) / t.camera.k,
            r = (e.y - t.start.y) / t.camera.k,
            i = 4 > Math.hypot(e.x - t.start.x, e.y - t.start.y),
            l = i ? 2 : Math.min(100, Math.max(2, Math.ceil(Math.abs(n) / 120))),
            a = i ? 2 : Math.min(100, Math.max(2, Math.ceil(Math.abs(r) / 40))),
            o = 120 * l,
            s = 40 * a
          return {
            rows: a,
            columns: l,
            frame: {
              left: (t.start.x - t.camera.x) / t.camera.k - (!i && n < 0 ? o : 0),
              top: (t.start.y - t.camera.y) / t.camera.k - (!i && r < 0 ? s : 0),
              width: o,
              height: s,
            },
          }
        },
        w = (e) => {
          let t = v(e),
            n = f.current,
            r = s.current
          if (!t || !n || !r) return
          let { frame: i, rows: l, columns: a } = t
          ;(Object.assign(r.style, {
            display: "block",
            left: `${n.camera.x + i.left * n.camera.k}px`,
            top: `${n.camera.y + i.top * n.camera.k}px`,
            width: `${i.width * n.camera.k}px`,
            height: `${i.height * n.camera.k}px`,
            backgroundSize: `${120 * n.camera.k}px ${40 * n.camera.k}px`,
          }),
            c.current && (c.current.textContent = `${a} \xd7 ${l}`),
            u.current && (u.current.style.display = "none"))
        },
        C = (e) => {
          let t = u.current
          if (!t) return
          let n = y(e)
          Object.assign(t.style, { display: "block", left: `${n.x + 14}px`, top: `${n.y + 16}px` })
        },
        S = (e, t) => {
          let r = { id: crypto.randomUUID(), type: "insert-table", source: "human" },
            l = { camera: t, unsubscribe: () => {} }
          ;((m.current = l),
            h(!0),
            (l.unsubscribe = n((e) => {
              m.current === l && e.command.id === r.id && "edit-started" !== e.type && (b(), x.current())
            })))
          try {
            i(e, r)
          } catch (e) {
            throw (b(), g.current(), e)
          }
        }
      return (0, r.jsxs)("div", {
        ref: o,
        "data-testid": "popcorn-table-placement",
        "aria-label": "Click or drag to draw a table. Enter inserts a 2 by 2 table. Escape cancels.",
        tabIndex: -1,
        className: "absolute inset-0 z-20 touch-none outline-none",
        style: { cursor: p ? "default" : "crosshair" },
        onKeyDown: (n) => {
          if (
            (n.stopPropagation(),
            "Enter" !== n.key || n.repeat || n.nativeEvent.isComposing || 229 === n.keyCode || f.current || m.current)
          )
            return
          n.preventDefault()
          let r = t ?? {
            x: (n.currentTarget.clientWidth / 2 - e.x) / e.k,
            y: (n.currentTarget.clientHeight / 2 - e.y) / e.k,
          }
          S({ rows: 2, columns: 2, frame: { left: r.x - 120, top: r.y - 40, width: 240, height: 80 } }, e)
        },
        onDoubleClick: (e) => e.stopPropagation(),
        onContextMenu: (e) => {
          ;(e.preventDefault(), e.stopPropagation(), b(), a())
        },
        onPointerEnter: (e) => {
          f.current || m.current || C(e)
        },
        onPointerLeave: () => {
          u.current && (u.current.style.display = "none")
        },
        onPointerDown: (t) => {
          ;(t.stopPropagation(),
            0 !== t.button ||
              !t.isPrimary ||
              f.current ||
              m.current ||
              (t.preventDefault(),
              (f.current = { pointerId: t.pointerId, start: y(t), camera: e }),
              t.currentTarget.setPointerCapture(t.pointerId),
              w(y(t))))
        },
        onPointerMove: (e) => {
          if ((e.stopPropagation(), m.current)) return
          let t = f.current
          t ? t.pointerId === e.pointerId && w(y(e)) : C(e)
        },
        onPointerUp: (e) => {
          e.stopPropagation()
          let t = f.current
          if (!t || t.pointerId !== e.pointerId) return
          e.preventDefault()
          let n = y(e),
            r = v(n)
          ;(w(n),
            (f.current = null),
            e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId),
            r && S(r, t.camera))
        },
        onPointerCancel: (e) => {
          ;(e.stopPropagation(), m.current || (f.current && f.current.pointerId !== e.pointerId) || (b(), a()))
        },
        onLostPointerCapture: (e) => {
          ;(e.stopPropagation(), f.current?.pointerId === e.pointerId && (b(), a()))
        },
        children: [
          (0, r.jsx)("div", {
            ref: u,
            role: "tooltip",
            className:
              "pointer-events-none absolute whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white shadow-sm",
            style: { display: "none" },
            children: "Click and drag to draw table.",
          }),
          (0, r.jsx)("div", {
            ref: s,
            "data-testid": "popcorn-table-placement-preview",
            className: "pointer-events-none absolute border border-[#D4D4D4] bg-white",
            style: {
              display: "none",
              backgroundImage:
                "linear-gradient(to right, #E0E0E0 1px, transparent 1px), linear-gradient(to bottom, #E0E0E0 1px, transparent 1px)",
              backgroundPosition: "-1px -1px",
            },
            children: (0, r.jsx)("div", {
              ref: c,
              "data-testid": "popcorn-table-placement-size",
              hidden: p,
              className:
                "absolute right-0 bottom-full mb-2 rounded-lg bg-[#2F7AF8] px-2.5 py-1 text-sm whitespace-nowrap text-white",
            }),
          }),
        ],
      })
    }
    var tX = n("AqDg")
    function tZ({ slideRect: e, onPreview: t, onCommit: n, onCancel: i }) {
      let l = (0, d.useRef)(null),
        a = (0, d.useRef)(null),
        o = (0, d.useRef)(null),
        s = (0, d.useRef)({ onPreview: t, onCancel: i })
      ;((s.current = { onPreview: t, onCancel: i }),
        (0, d.useEffect)(() => {
          l.current?.focus({ preventScroll: !0 })
          let e = () => {
              ;((o.current = null), s.current.onPreview(null), s.current.onCancel())
            },
            t = (t) => {
              "Escape" === t.key && (t.preventDefault(), t.stopPropagation(), e())
            }
          return (
            document.addEventListener("keydown", t, !0),
            window.addEventListener("blur", e),
            () => {
              ;(document.removeEventListener("keydown", t, !0),
                window.removeEventListener("blur", e),
                o.current && s.current.onPreview(null))
            }
          )
        }, []))
      let c = (e) => (0, tB.f)(e.currentTarget, e.clientX, e.clientY),
        u = (t, n, r) => {
          let i = n.x - t.x,
            l = n.y - t.y,
            a = !r && 4 > Math.hypot(i, l),
            o = a ? tX.pg.width : Math.max(tX.I6.width, Math.abs(i) / e.scale),
            s = a ? tX.pg.height : Math.max(tX.I6.height, Math.abs(l) / e.scale)
          return {
            left: (t.x - e.left) / e.scale - (!a && i < 0 ? o : 0),
            top: (t.y - e.top) / e.scale - (!a && l < 0 ? s : 0),
            width: o,
            height: s,
          }
        },
        p = () => {
          ;((o.current = null), t(null), i())
        }
      return (0, r.jsx)("div", {
        ref: l,
        "data-testid": "popcorn-presentation-chart-placement",
        "aria-label": "Click or drag to place a chart. Escape cancels.",
        tabIndex: -1,
        className: "absolute inset-0 z-20 touch-none outline-none",
        style: { cursor: "crosshair" },
        onKeyDown: (e) => e.stopPropagation(),
        onPointerDown: (e) => {
          if (0 !== e.button || !e.isPrimary) return
          ;(e.preventDefault(), e.stopPropagation())
          let t = c(e)
          ;((o.current = { pointerId: e.pointerId, start: t, dragged: !1 }),
            a.current && (a.current.style.display = "none"),
            e.currentTarget.setPointerCapture(e.pointerId))
        },
        onPointerMove: (e) => {
          let n = c(e),
            r = o.current
          if (r) {
            if (
              r.pointerId !== e.pointerId ||
              (e.stopPropagation(), !r.dragged && 4 > Math.hypot(n.x - r.start.x, n.y - r.start.y))
            )
              return
            ;((r.dragged = !0), t(u(r.start, n, !0)))
            return
          }
          let i = a.current
          i &&
            "touch" !== e.pointerType &&
            ((i.style.display = "block"),
            Object.assign(i.style, {
              left: `${Math.max(8, Math.min(n.x + 16, e.currentTarget.clientWidth - i.offsetWidth - 8))}px`,
              top: `${Math.max(8, Math.min(n.y + 20, e.currentTarget.clientHeight - i.offsetHeight - 8))}px`,
            }))
        },
        onPointerLeave: () => {
          a.current && (a.current.style.display = "none")
        },
        onPointerUp: (e) => {
          let r = o.current
          if (!r || r.pointerId !== e.pointerId) return
          ;(e.preventDefault(), e.stopPropagation())
          let i = u(r.start, c(e), r.dragged)
          ;((o.current = null),
            e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId),
            t(i),
            n(i))
        },
        onPointerCancel: p,
        onLostPointerCapture: () => {
          o.current && p()
        },
        children: (0, r.jsx)("div", {
          ref: a,
          role: "tooltip",
          className:
            "pointer-events-none absolute rounded-md bg-black px-2 py-1 text-xs whitespace-nowrap text-white shadow-sm",
          style: { display: "none" },
          children: "Click or drag to place a chart",
        }),
      })
    }
    function tJ({ controller: e, elementId: t, slideId: n, slideRect: i, requestId: l }) {
      let a = (0, d.useMemo)(() => {
          let r = null
          return {
            subscribe: (t) => e.subscribe(t),
            getSnapshot: () => {
              let l = e.getSnapshot(),
                a = l.selectedSlideElementTargets.find((e) => e.id === t)
              if (l.slideIds[l.selectedSlideIdx] !== n || null == a) return ((r = null), null)
              let o = l.previewFrames.find((e) => e.elementId === t)?.frame ?? a.frame,
                s = {
                  left: i.left + o.left * i.scale,
                  top: i.top + o.top * i.scale,
                  width: o.width * i.scale,
                  height: o.height * i.scale,
                  rotation: o.rotation ?? 0,
                }
              return (
                (null == r ||
                  r.left !== s.left ||
                  r.top !== s.top ||
                  r.width !== s.width ||
                  r.height !== s.height ||
                  r.rotation !== s.rotation) &&
                  (r = s),
                r
              )
            },
          }
        }, [e, t, n, i.left, i.top, i.scale]),
        o = (0, d.useSyncExternalStore)(a.subscribe, a.getSnapshot, a.getSnapshot)
      if (null == o) return null
      let { rotation: s, ...c } = o
      return (0, r.jsx)("div", {
        "aria-hidden": "true",
        className: "popcorn-presentation-chart-working",
        "data-testid": `popcorn-presentation-chart-working-${l}`,
        style: { ...c, transform: `rotate(${s}deg)` },
        children: (0, r.jsx)("div", { className: "popcorn-presentation-chart-working-sweep" }),
      })
    }
    var tY = n("jaPU")
    function tQ({ slideRect: e, shape: t, connectorPreview: n, onConnectorPreview: i, onCommit: l, onCancel: a }) {
      let o = (0, d.useRef)(null),
        s = (0, d.useRef)(null),
        c = (0, d.useRef)(null),
        u = (0, d.useRef)(!1),
        p = (0, d.useRef)(null),
        h = (0, d.useRef)(null),
        m = (0, d.useRef)(a)
      m.current = a
      let f = (0, d.useRef)(i)
      f.current = t?.arrow ? i : void 0
      let g = t ? "shape" : "text",
        x = t?.geometry === "line" || t?.geometry === "lineInv",
        b = !!t?.arrow,
        y = () => {
          ;((h.current = null),
            s.current && (s.current.style.display = "none"),
            c.current && (c.current.style.display = "none"),
            f.current?.(null))
        }
      ;(0, d.useEffect)(() => {
        let e = requestAnimationFrame(() => o.current?.focus({ preventScroll: !0 })),
          t = (e) => {
            "Escape" !== e.key || (e.preventDefault(), e.stopPropagation(), u.current || (y(), m.current()))
          },
          n = () => {
            u.current || (y(), m.current())
          }
        return (
          document.addEventListener("keydown", t, !0),
          window.addEventListener("blur", n),
          () => {
            ;(cancelAnimationFrame(e),
              document.removeEventListener("keydown", t, !0),
              window.removeEventListener("blur", n),
              f.current?.(null))
          }
        )
      }, [])
      let v = (e) => {
          let t = e.currentTarget.getBoundingClientRect()
          return { x: e.clientX - t.left, y: e.clientY - t.top }
        },
        w = (t) => ({ x: (t.x - e.left) / e.scale, y: (t.y - e.top) / e.scale }),
        C = (t) => ({ x: e.left + t.x * e.scale, y: e.top + t.y * e.scale }),
        S = (e, t, n) => {
          if (!s.current) return
          let r = t.x - e.x,
            i = t.y - e.y
          Object.assign(s.current.style, {
            display: n ? "block" : "none",
            left: `${Math.min(e.x, t.x)}px`,
            top: `${Math.min(e.y, t.y)}px`,
            width: `${Math.max(+!!x, Math.abs(r))}px`,
            height: `${Math.max(+!!x, Math.abs(i))}px`,
            transform: x ? `scale(${r < 0 ? -1 : 1}, ${i < 0 ? -1 : 1})` : "none",
          })
        },
        k = () => {
          let e = h.current
          b && i && e && n?.from && S(C(n.from), C(n.to), Math.hypot(e.end.x - e.start.x, e.end.y - e.start.y) >= 4)
        },
        I = (e) => ({
          from: C({ x: e.left + (e.horizontalFlip ? e.width : 0), y: e.top + (e.verticalFlip ? e.height : 0) }),
          to: C({ x: e.left + (e.horizontalFlip ? 0 : e.width), y: e.top + (e.verticalFlip ? 0 : e.height) }),
        })
      ;(0, O.o)(() => {
        if (p.current && !b) {
          let { from: e, to: t } = I(p.current)
          S(e, t, !0)
        } else k()
      })
      let E = (e, n, r) => (t && r ? (0, ts.Wf)(e, n, x ? "angle" : "square") : n),
        j = (e, t) => {
          let n = h.current
          if (!n || u.current) return
          let r = E(n.start, n.end, n.translationConstraint ?? e)
          ;(f.current?.({ from: w(n.start), to: w(r), snapSuppressed: t || e }),
            b && i ? k() : S(n.start, r, Math.hypot(r.x - n.start.x, r.y - n.start.y) >= 4))
        },
        M = (e) => {
          let t = h.current
          t &&
            (null !== t.translationConstraint &&
              (t.start = { x: t.start.x + e.x - t.end.x, y: t.start.y + e.y - t.end.y }),
            (t.end = e))
        },
        T = (e) => {
          let n = h.current
          ;((" " === e.key || "Space" === e.code) &&
            t?.geometry === "rect" &&
            n &&
            !u.current &&
            (e.preventDefault(),
            "keyup" === e.type ? (n.translationConstraint = null) : (n.translationConstraint ??= e.shiftKey),
            j(e.shiftKey, e.altKey)),
            ("Shift" === e.key || "Alt" === e.key) && j(e.shiftKey, e.altKey),
            e.stopPropagation())
        }
      return (0, r.jsxs)("div", {
        ref: o,
        "data-testid": `popcorn-presentation-${g}-placement`,
        "aria-label": `Click or drag to ${t ? "place a shape" : "insert a text box"}. Escape cancels.`,
        tabIndex: -1,
        className: "absolute inset-0 z-20 touch-none outline-none",
        style: { cursor: "crosshair" },
        onKeyDown: T,
        onKeyUp: T,
        onPointerDown: (e) => {
          if (u.current || 0 !== e.button || !e.isPrimary) return
          ;(e.preventDefault(), e.stopPropagation(), e.currentTarget.focus({ preventScroll: !0 }))
          let t = v(e)
          ;((h.current = { pointerId: e.pointerId, start: t, end: t, translationConstraint: null }),
            f.current?.({ from: w(t), to: w(t), snapSuppressed: e.altKey || e.shiftKey }),
            c.current && (c.current.style.display = "none"),
            e.currentTarget.setPointerCapture(e.pointerId))
        },
        onPointerMove: (e) => {
          if (u.current) return
          let t = v(e),
            n = h.current,
            r = s.current,
            i = c.current
          if (!n) {
            if ((f.current?.({ to: w(t), snapSuppressed: e.altKey || e.shiftKey }), i)) {
              i.style.display = "block"
              let n = e.currentTarget.getBoundingClientRect()
              Object.assign(i.style, {
                left: `${Math.max(8, Math.min(t.x + 18, n.width - i.offsetWidth - 8))}px`,
                top: `${Math.max(8, Math.min(t.y + 22, n.height - i.offsetHeight - 8))}px`,
              })
            }
            return
          }
          n.pointerId === e.pointerId && r && (M(t), j(e.shiftKey, e.altKey))
        },
        onPointerLeave: () => {
          ;(c.current && (c.current.style.display = "none"), h.current || f.current?.(null))
        },
        onPointerUp: (n) => {
          if (u.current) return
          let r = h.current
          if (!r || r.pointerId !== n.pointerId) return
          ;(n.preventDefault(), n.stopPropagation())
          let a = v(n)
          M(a)
          let o = 4 > Math.hypot(a.x - r.start.x, a.y - r.start.y),
            s = E(r.start, a, r.translationConstraint ?? n.shiftKey),
            d = {
              left: ((o ? r.start.x : Math.min(r.start.x, s.x)) - e.left) / e.scale,
              top: ((o ? r.start.y : Math.min(r.start.y, s.y)) - e.top) / e.scale,
              width: o ? (t ? 200 : 320) : Math.max(x ? 0 : t ? 4 : 24, Math.abs(s.x - r.start.x) / e.scale),
              height: o ? (t ? 160 : 56) : Math.max(x ? 0 : t ? 4 : 32, Math.abs(s.y - r.start.y) / e.scale),
            }
          if (
            (x &&
              ((d.horizontalFlip = !o && s.x < r.start.x),
              (d.verticalFlip = o ? !b && t?.geometry === "lineInv" : s.y < r.start.y)),
            t)
          ) {
            ;((u.current = !0), (p.current = d))
            let { from: e, to: t } = I(d)
            ;((r.start = e),
              (r.end = t),
              b && i ? f.current?.({ from: w(e), to: w(t), snapSuppressed: n.altKey || n.shiftKey }) : S(e, t, !0),
              c.current && (c.current.style.display = "none"),
              (n.currentTarget.style.cursor = "default"))
          } else y()
          ;(n.currentTarget.hasPointerCapture(n.pointerId) && n.currentTarget.releasePointerCapture(n.pointerId),
            b ? l(d, { snapToConnections: !0, snapSuppressed: n.altKey || n.shiftKey }) : l(d))
        },
        onPointerCancel: () => {
          u.current || (y(), a())
        },
        onLostPointerCapture: () => {
          u.current || (h.current && (y(), a()))
        },
        children: [
          (0, r.jsx)("div", {
            ref: s,
            "data-testid": `popcorn-presentation-${g}-placement-preview`,
            className: t ? "pointer-events-none absolute text-[#0088ff]" : "pointer-events-none absolute border",
            style: {
              display: "none",
              borderColor: t ? void 0 : "var(--color-text-info, #3b82f6)",
              background: t ? void 0 : "color-mix(in srgb, var(--color-text-info, #3b82f6) 5%, transparent)",
            },
            children: t
              ? (0, r.jsx)(tY.U, {
                  geometry: x ? "line" : t.geometry,
                  filled: !0,
                  arrow: t.arrow,
                  preserveAspectRatio: "none",
                  trimIconPadding: !0,
                })
              : null,
          }),
          t
            ? (0, r.jsx)("div", {
                ref: c,
                role: "tooltip",
                className:
                  "pointer-events-none absolute rounded-md bg-black px-2.5 py-1.5 text-xs leading-4 whitespace-nowrap text-white shadow-sm",
                style: { display: "none" },
                children: "Click or drag to place a shape",
              })
            : null,
        ],
      })
    }
    function t0({ controller: e, slideRect: t, shape: n, connectorPreview: i, onDone: l }) {
      let a = (0, d.useRef)(null),
        o = (0, d.useRef)(!1),
        s = (0, d.useRef)(l)
      s.current = l
      let c = () => {
          let e = a.current
          ;((a.current = null), e?.unsubscribe?.())
        },
        u = () => {
          o.current || ((o.current = !0), c(), s.current())
        }
      return (
        (0, d.useEffect)(() => () => c(), [e]),
        (0, r.jsx)(tQ, {
          slideRect: t,
          shape: n,
          connectorPreview: i,
          onConnectorPreview: n.arrow ? (t) => e.previewConnectorInsertion(t) : void 0,
          onCancel: u,
          onCommit: (t, r) => {
            if (a.current || o.current) return
            let i = { command: { id: `shape-insertion:${crypto.randomUUID()}`, type: "insert-shape", source: "human" } }
            a.current = i
            try {
              if (
                ((i.unsubscribe = e.subscribeEditEvents((e) => {
                  a.current === i && e.command.id === i.command.id && "edit-started" !== e.type && u()
                })),
                a.current !== i)
              )
                return void i.unsubscribe()
              e.dispatch({ kind: "insert-shape", ...n, frame: t, ...r }, i.command)
            } catch (e) {
              throw (u(), e)
            }
          },
        })
      )
    }
    var t1 = n("QssI")
    function t2({ slideRect: e, kind: t = "text", onCommit: n, onCancel: i }) {
      return (0, r.jsx)(t1.w, {
        viewportRect: e,
        kind: t,
        clickTextSize: { width: 112, height: 56 },
        onCommit: (e, t) => n(e, t ? "none" : "square"),
        onCancel: i,
        testId: `popcorn-presentation-${t}-placement`,
      })
    }
    function t4({
      controller: e,
      snapshot: t,
      containerRef: n,
      currentSlideId: i,
      stageSlideRect: l,
      isEditing: a,
      imageInsertionMode: o,
      onImageInsertionModeChange: s,
      widgetInsertionMode: d,
      onWidgetInsertionModeChange: c,
      tableInsertionMode: u,
      onTableInsertionModeChange: p,
      shapeInsertion: h,
      onShapeInsertionChange: m,
      activeRequests: f,
      chartInsertionPresetId: g,
      onChartInsertionPresetIdChange: x,
      onInsertElement: b,
      textInsertionMode: y,
      onTextInsertionModeChange: v,
    }) {
      return (0, r.jsxs)(r.Fragment, {
        children: [
          a && o && l
            ? (0, r.jsx)(
                t2,
                {
                  kind: "image",
                  slideRect: l,
                  onCancel: () => {
                    ;(s?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                  onCommit: (e) => {
                    ;(b({ kind: "insert-image-placeholder", frame: e }), s?.(!1))
                  },
                },
                `image-placement:${i}`,
              )
            : null,
          a && d && l
            ? (0, r.jsx)(
                t2,
                {
                  kind: "widget",
                  slideRect: l,
                  onCancel: () => {
                    ;(c?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                  onCommit: (e) => {
                    ;(b({ kind: "insert-widget-placeholder", frame: e }), c?.(!1))
                  },
                },
                `widget-placement:${i}`,
              )
            : null,
          a && u && l
            ? (0, r.jsx)(
                t_,
                {
                  keyboardCenter: { x: l.width / (2 * l.scale), y: l.height / (2 * l.scale) },
                  camera: { x: l.left, y: l.top, k: l.scale },
                  onCancel: () => {
                    ;(p?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                  subscribeEditEvents: (t) => e.subscribeEditEvents(t),
                  onCommit: (t, n) => {
                    e.dispatch({ kind: "insert-table", ...t }, n)
                  },
                  onComplete: () => {
                    ;(p?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `table-placement:${i}`,
              )
            : null,
          a && h && l
            ? (0, r.jsx)(
                t0,
                {
                  controller: e,
                  shape: h,
                  slideRect: l,
                  connectorPreview: t.connectorInsertionPreview,
                  onDone: () => {
                    ;(m?.(null), n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `shape-placement:${i}:${h.geometry}:${h.arrow}`,
              )
            : null,
          l &&
            f?.flatMap((n) =>
              "presentation-element-selection" !== n.target.type || n.target.slideId !== i
                ? []
                : n.target.elementIds.flatMap((a) => {
                    let o = t.inspector.slideElements.find((e) => e.id === a)
                    return o?.kind !== "chart"
                      ? []
                      : [
                          (0, r.jsx)(
                            tJ,
                            { requestId: n.annotationId, controller: e, elementId: a, slideId: i, slideRect: l },
                            `${n.annotationId}:${a}`,
                          ),
                        ]
                  }),
            ),
          a && g && l
            ? (0, r.jsx)(
                tZ,
                {
                  slideRect: l,
                  onPreview: (t) => e.setChartInsertionPreview(t ? { presetId: g, frame: t } : null),
                  onCancel: () => {
                    ;(x?.(null), n.current?.focus({ preventScroll: !0 }))
                  },
                  onCommit: (e) => {
                    ;(b({ kind: "insert-chart", presetId: g, frame: e }),
                      x?.(null),
                      n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `chart-placement:${i}:${g}`,
              )
            : null,
          a && y && l
            ? (0, r.jsx)(
                t2,
                {
                  slideRect: l,
                  onCancel: () => {
                    ;(v?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                  onCommit: (t, r) => {
                    ;(e.dispatch({ kind: "insert-text", frame: t, wrap: r }),
                      v?.(!1),
                      n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `text-placement:${i}`,
              )
            : null,
        ],
      })
    }
    var t3 = n("OxIK")
    function t5({
      markers: e,
      hoveredAnnotationId: t,
      setHoveredAnnotationId: n,
      editorSession: i,
      directSubmit: l,
      focusAnnotation: a,
      containerElement: o,
      collisionBoundaryElement: s,
    }) {
      let c = (0, d.useMemo)(
        () => (null == t || i?.mode === "edit" ? null : (e.find(({ annotation: e }) => e.annotationId === t) ?? null)),
        [i?.mode, t, e],
      )
      return (0, r.jsxs)(r.Fragment, {
        children: [
          e.map(({ annotation: e, bounds: o, stackIndex: s }) => {
            let d = (0, e_.Ky)(o, "top-right", s)
            return (0, r.jsxs)(
              "div",
              {
                children: [
                  (0, r.jsx)(e_.ME, { bounds: o, testId: `popcorn-presentation-annotation-overlay-${e.annotationId}` }),
                  (0, r.jsx)(e_.oN, {
                    testId: `popcorn-presentation-annotation-marker-${e.annotationId}`,
                    position: d,
                    selected: t === e.annotationId || (i?.mode === "edit" && i.annotationId === e.annotationId),
                    title: e.label,
                    onMouseEnter: () => {
                      n(e.annotationId)
                    },
                    onMouseLeave: () => {
                      n((t) => (t === e.annotationId ? null : t))
                    },
                    onFocus: () => {
                      n(e.annotationId)
                    },
                    onBlur: () => {
                      n((t) => (t === e.annotationId ? null : t))
                    },
                    onClick: () => {
                      l || a(e.annotationId)
                    },
                  }),
                ],
              },
              e.annotationId,
            )
          }),
          c
            ? (0, r.jsx)(t3.R, {
                body: c.annotation.body,
                markerPosition: (0, e_.Ky)(c.bounds, "top-right", c.stackIndex),
                containerElement: o,
                collisionBoundaryElement: s,
                testId: "popcorn-presentation-annotation-preview",
              })
            : null,
        ],
      })
    }
    function t6({ elements: e, slideId: t, slideIndex: n, slideLabel: i, slideRect: l }) {
      return e.map((e) => {
        let a = (0, ex.FB)(
          {
            type: "presentation-element-selection",
            slideId: t,
            slideIndex: n,
            slideLabel: i,
            elementIds: [e.elementId],
            primaryElementId: e.elementId,
            frame: e.frame,
          },
          l,
        )
        return a
          ? (0, r.jsx)(
              e_.ME,
              {
                bounds: a,
                borderWidthPx: 0.5,
                fillColor: "transparent",
                shadow: !1,
                testId: `popcorn-presentation-annotation-region-contained-${e.elementId}`,
              },
              e.elementId,
            )
          : null
      })
    }
    var t8 = n("G7lZ")
    function t9({
      source: e,
      slideId: t,
      slideIds: n,
      slideRect: i,
      interactive: l,
      renderWidget: a,
      viewportRef: o,
      isEditing: s = !1,
      selectionCanvasRef: c,
    }) {
      let u,
        p = (0, d.useSyncExternalStore)(e.subscribe, e.getSnapshot),
        h = (0, d.useRef)(null),
        [m, f] = (0, d.useState)({ source: e, snapshot: p, slideIds: n, epoch: 0, widgets: p.widgets })
      if (m.source !== e || m.snapshot !== p || m.slideIds !== n) {
        let t = m.widgets,
          r = m.epoch
        ;(m.source !== e || m.snapshot.generation !== p.generation) && ((t = []), (r += 1))
        let i = new Map(p.widgets.map((e) => [e.key, e])),
          l = []
        for (let e of t) {
          if (!n.includes(e.slideId)) continue
          if (e.slideId !== p.slideId) {
            l.push(e)
            continue
          }
          let t = i.get(e.key)
          ;(t && l.push(t), i.delete(e.key))
        }
        f({ source: e, snapshot: p, slideIds: n, epoch: r, widgets: [...l, ...i.values()] })
      }
      let g = new Map(p.widgets.map((e, t) => [e.key, t])),
        x = i.width / i.scale
      return (
        s && (u = c),
        (0, r.jsx)("div", {
          ref: h,
          "data-testid": "popcorn-presentation-widgets",
          className: "pointer-events-none absolute overflow-hidden",
          style: { left: i.left, top: i.top, width: i.width, height: i.height },
          children: (0, r.jsx)(
            "div",
            {
              className: "absolute origin-top-left",
              style: { width: x, height: i.height / i.scale, transform: `scale(${i.scale})` },
              children: m.widgets.map((e) =>
                (0, r.jsx)(
                  t7,
                  {
                    widget: e,
                    zIndex: g.get(e.key),
                    isActive: e.slideId === t,
                    interactive: l && e.html !== t8.S,
                    renderWidget: a,
                    slideRef: h,
                    authoredWidth: x,
                    viewportRef: o,
                    edgeSize: 6 / i.scale,
                    selectionCanvasRef: u,
                  },
                  e.key,
                ),
              ),
            },
            m.epoch,
          ),
        })
      )
    }
    function t7({
      widget: e,
      zIndex: t,
      isActive: n,
      interactive: i,
      renderWidget: l,
      slideRef: a,
      authoredWidth: o,
      viewportRef: s,
      edgeSize: d,
      selectionCanvasRef: c,
    }) {
      let { frame: u } = e,
        p = "hidden"
      return (
        n && (p = "visible"),
        (0, r.jsxs)("div", {
          "data-presentation-widget": e.elementId,
          "aria-hidden": !n,
          inert: !n || !i,
          className: "absolute overflow-hidden",
          style: {
            zIndex: t,
            visibility: p,
            left: u.left,
            top: u.top,
            width: u.width,
            height: u.height,
            transform: `rotate(${u.rotation ?? 0}deg) scale(${u.horizontalFlip ? -1 : 1}, ${u.verticalFlip ? -1 : 1})`,
            pointerEvents: i ? "auto" : "none",
          },
          children: [
            l({
              widget: e,
              isActive: n,
              interactive: i,
              onWheel: (e) => {
                let t = a.current,
                  n = s.current
                if (!t || !n) return
                let r = t.getBoundingClientRect(),
                  i = r.width / o,
                  l = ((u.rotation ?? 0) * Math.PI) / 180,
                  d = (e.clientX - u.width / 2) * (u.horizontalFlip ? -1 : 1),
                  c = (e.clientY - u.height / 2) * (u.verticalFlip ? -1 : 1)
                n.dispatchEvent(
                  new WheelEvent("wheel", {
                    ...e,
                    bubbles: !0,
                    cancelable: !0,
                    clientX: r.left + i * (u.left + u.width / 2 + d * Math.cos(l) - c * Math.sin(l)),
                    clientY: r.top + i * (u.top + u.height / 2 + d * Math.sin(l) + c * Math.cos(l)),
                  }),
                )
              },
            }),
            i && c && (0, r.jsx)(ne, { canvasRef: c, size: Math.min(d, u.width / 2, u.height / 2) }),
          ],
        })
      )
    }
    function ne({ canvasRef: e, size: t }) {
      let n = (t) => {
        let n = e.current
        n &&
          (n.dispatchEvent(new PointerEvent(t.type, t.nativeEvent)),
          (t.currentTarget.style.cursor = n.style.cursor || "move"),
          t.preventDefault(),
          t.stopPropagation())
      }
      return [
        { left: 0, right: 0, top: 0, height: t },
        { left: 0, right: 0, bottom: 0, height: t },
        { left: 0, top: t, bottom: t, width: t },
        { right: 0, top: t, bottom: t, width: t },
      ].map((t, i) =>
        (0, r.jsx)(
          "div",
          {
            "aria-hidden": !0,
            "data-presentation-widget-edge": "",
            className: "absolute cursor-move touch-none",
            style: t,
            onPointerDown: n,
            onPointerMove: n,
            onPointerLeave: (t) => {
              e.current?.dispatchEvent(new PointerEvent("pointerout", t.nativeEvent))
            },
          },
          i,
        ),
      )
    }
    function nt(e, t, n) {
      let r = e.ownerDocument.defaultView
      if (!r) return () => {}
      let i = null,
        l = () => {
          null === i &&
            (i = r.requestAnimationFrame(() => {
              i = null
              let l = r.getComputedStyle(e),
                a = l.backgroundColor.trim(),
                o = !a || "transparent" === a || "rgba(0, 0, 0, 0)" === a || a.startsWith("var(") ? (0, T.lh)(t) : a
              n.setStageBackgroundColor(
                o,
                (0, to.JR)(e),
                l.getPropertyValue("--color-text-secondary").trim() ||
                  l.getPropertyValue("--color-token-text-secondary").trim() ||
                  void 0,
              )
            }))
        }
      l()
      let a = (0, to.zY)(e, l)
      return () => {
        ;(null !== i && r.cancelAnimationFrame(i), a())
      }
    }
    function nn(e, t) {
      t.current = e.pointerId
      try {
        e.currentTarget.setPointerCapture(e.pointerId)
      } catch {}
    }
    function nr(e, t) {
      if ((t.current === e.pointerId && (t.current = null), e.currentTarget.hasPointerCapture?.(e.pointerId)))
        try {
          e.currentTarget.releasePointerCapture(e.pointerId)
        } catch {}
    }
    function ni(e, t) {
      let n = t.current
      if (((t.current = null), null != n && e?.hasPointerCapture?.(n)))
        try {
          e.releasePointerCapture(n)
        } catch {}
    }
    function nl(e, t, n, r) {
      if ((0, M.tr)(e.target)) return !1
      if (e.shiftKey && ("Digit1" === e.code || "1" === e.key || "!" === e.key) && (0, M.Ul)(e, { allowShift: !0 }))
        return (t.fitToViewport(1), r?.("fit-to-viewport"), e.preventDefault(), !0)
      if (!(0, M.Ul)(e, { allowShift: !0, requirePrimaryModifier: !0 })) return !1
      if ("0" === e.key && !e.shiftKey) {
        let i = n.fitScale ?? (n.slideRect && n.zoom > 0 ? n.slideRect.scale / n.zoom : 1),
          l = t.hasInitializedCamera() ? t.getCamera().k : n.zoom * i
        return (
          t.zoomTo(1 / (i > 0 ? i : 1), { settled: !0 }),
          1 !== l && r?.(l < 1 ? "zoom-in" : "zoom-out"),
          e.preventDefault(),
          !0
        )
      }
      let i = t.hasInitializedCamera() && null != n.fitScale && n.fitScale > 0 ? t.getCamera().k / n.fitScale : n.zoom
      return ("=" !== e.key || e.shiftKey) && "+" !== e.key
        ? "-" === e.key &&
            !e.shiftKey &&
            (t.zoomTo((0, _.iy)(i - 0.1, n.fitScale ?? 1), { settled: !0 }), e.preventDefault(), !0)
        : (t.zoomTo((0, _.iy)(i + 0.1, n.fitScale ?? 1), { settled: !0 }), e.preventDefault(), !0)
    }
    function na(e) {
      return { clientX: e.clientX, clientY: e.clientY, shiftKey: e.shiftKey, altKey: e.altKey, ctrlKey: e.ctrlKey }
    }
    var no = n("C3lK"),
      ns = n("kJnE")
    function nd({
      children: e,
      renderer: t,
      controller: n,
      snapshot: i,
      viewport: l,
      camera: a,
      viewportInsets: o,
      enabled: s,
      textEditing: c,
      contextToolbarEligible: u,
      selectionBoundsSource: p,
      requestToolbar: h,
    }) {
      let m = (0, d.useRef)(Promise.resolve(null)),
        f = (0, d.useRef)(null)
      ;(0, d.useEffect)(() => () => f.current?.abort(), [])
      let g = async (e) => {
          let t = await m.current
          return e?.aborted ? null : t?.kind === "table" ? (n.openTableContextMenu(t.point), null) : t
        },
        x = (e) => {
          let t = n.getSnapshot(),
            r = t.hiddenSlideIds.includes(t.slideIds[e])
          return {
            kind: "slide",
            isHidden: r,
            canDelete: t.slideCount > 1,
            onDuplicate: () => {
              ;(n.setSelectedSlideIdx(e), n.duplicateSelectedSlide())
            },
            onToggleHidden: () => n.setSlideHidden(e, !r),
            onDelete: () => n.deleteSlide(e),
          }
        },
        b = (0, d.cloneElement)(e, {
          onContextMenu: (e) => {
            var r, d
            if ((f.current?.abort(), (m.current = Promise.resolve(null)), !s)) {
              t && e.preventDefault()
              return
            }
            if (i.gridLayout && l.current) {
              let r = (0, tB.f)(l.current, e.clientX, e.clientY)
              if (
                ((m.current = n
                  .beginGridInteraction({ point: r, selectOnly: !0 })
                  .then((e) =>
                    e
                      ? n.getSnapshot().inspector.slideElements.some((t) => t.id === e.elementId && "table" === t.kind)
                        ? { kind: "table", point: e.point }
                        : e.elementId
                          ? { kind: "element" }
                          : x(e.slideIndex)
                      : null,
                  )
                  .catch(() => null)),
                !t)
              ) {
                e.preventDefault()
                let t = new AbortController()
                f.current = t
                let n = () => t.abort(),
                  r = { capture: !0, signal: t.signal },
                  i = e.currentTarget.ownerDocument
                ;(i.addEventListener("pointerdown", n, r),
                  i.addEventListener("contextmenu", n, r),
                  i.addEventListener(
                    "keydown",
                    (e) => {
                      ;("Escape" === e.key || "ContextMenu" === e.key || (e.shiftKey && "F10" === e.key)) && n()
                    },
                    r,
                  ),
                  i.defaultView?.addEventListener("blur", n, { signal: t.signal }),
                  g(t.signal).finally(() => {
                    ;(t.abort(), f.current === t && (f.current = null))
                  }))
              }
              return
            }
            let b = tK(e, l.current, a, i, o)
            if (!b) {
              t && e.preventDefault()
              return
            }
            let y = (0, tz.yu)(i.selectedSlideElementTargets, b, a.k),
              v = i.inspector.slideElements.some((e) => e.id === y && "table" === e.kind)
            if (t && y && !v && !c) {
              ;(n.setSelectedElementId(y), (m.current = Promise.resolve({ kind: "element" })))
              return
            }
            let w = i.selectedSlideFrame
            if (t && !y && !c && w && b.x >= 0 && b.y >= 0 && b.x <= w.width && b.y <= w.height) {
              ;(n.clearElementSelection(), (m.current = Promise.resolve(x(i.selectedSlideIdx))))
              return
            }
            ;(e.preventDefault(), v || n.tableEditing?.getSnapshot())
              ? n.openTableContextMenu(b)
              : l.current &&
                  u &&
                  ((r = p.getSnapshot()),
                  (d = (0, tB.f)(l.current, e.clientX, e.clientY)),
                  null != r && d.x >= r.left && d.y >= r.top && d.x <= r.left + r.width && d.y <= r.top + r.height)
                ? h()
                : n.openTableContextMenu(b)
          },
        })
      return t
        ? (0, r.jsx)(t, {
            trigger: b,
            prepareMenu: g,
            onBringToFront: () => n.reorderSelectedElement("bring-to-front"),
            onBringForward: () => n.reorderSelectedElement("bring-forward"),
            onSendBackward: () => n.reorderSelectedElement("send-backward"),
            onSendToBack: () => n.reorderSelectedElement("send-to-back"),
            onDelete: () => n.deleteSelectedElement(),
          })
        : b
    }
    function nc(e) {
      let t = e.selectedSlideFrame
      return t
        ? (0, ex.Cz)({
            snapshot: e,
            frame: { left: 0, top: 0, width: t.width, height: t.height },
            anchorPoint: { x: t.width / 2, y: t.height / 2 },
          })
        : null
    }
    let nu = {
        isPanelAvailable: () => !1,
        isPanelOpen: () => !1,
        openPanel: () => {},
        closePanel: () => {},
        togglePanel: () => {},
      },
      np = { left: 0, top: 0, right: 0, bottom: 0 }
    function nh({
      ref: e,
      controller: t,
      runtime: n,
      renderWidget: i,
      snapshot: l,
      fitOnOpen: a = !1,
      stageOverlays: o = [],
      elementContextMenu: c,
      panelControls: u = nu,
      editToolbarRequested: p,
      onEditToolbarRequestedChange: h,
      isEditing: m = !0,
      imageInsertionMode: x = !1,
      onImageInsertionModeChange: y,
      widgetInsertionMode: v = !1,
      onWidgetInsertionModeChange: w,
      shapeInsertion: C = null,
      onShapeInsertionChange: S,
      textInsertionMode: k = !1,
      onTextInsertionModeChange: I,
      tableInsertionMode: E = !1,
      onTableInsertionModeChange: j,
      chartInsertionPresetId: A = null,
      onChartInsertionPresetIdChange: P,
      onInteractionAttempt: L,
      onElementDragStart: F,
      theme: R = "web",
      viewportInsets: D = np,
      viewportAlignmentRef: N,
      overlayLeftInsetPx: z,
      showSpeakerNotes: B = !1,
      onSpeakerNotesFitInsetChange: V,
      speakerNotesVisible: H = !0,
      speakerNotesFocusViewportInsets: K,
      annotationMode: $ = !1,
      annotationIntent: q = "ask",
      onAnnotationModeChange: W,
      onAnnotationDictationBusyChange: U,
      drawingMode: G = !1,
      onDrawingModeChange: X,
      drawingCommitToken: Z = 0,
      reviewTools: J,
      generation: Q,
      onHyperlinkClick: ee,
      onHyperlinkHoverChange: et,
      annotationsEnabled: en = !0,
      drawingAnnotationsEnabled: er = !0,
      commentThreadsEnabled: ei = !0,
      commentsSidebarOpen: el = !1,
      selectedCommentThreadId: es,
      hoveredCommentThreadId: ed = null,
      onSelectCommentThread: ec,
      onHoverCommentThread: ep,
      onClearCommentThread: eh,
      annotationPortalContainerElement: em = null,
    }) {
      var eg
      let eb,
        ey,
        ev,
        ew,
        eC,
        eS,
        ek = (0, eo.DP)(t),
        eI = l ?? ek,
        eE = eu(b.mq),
        ej = (0, d.useContext)(td.A),
        eM = (0, d.useContext)(tD.a),
        [eT, eA] = (0, d.useState)(null),
        eP = (0, ta.TD)(eT),
        eL = (0, e8.Up)(eT),
        eF = (0, d.useRef)(null),
        { reportClipboardInteraction: eD, reportKeyboardShortcut: eN } = (0, f._U)(L),
        [ez, eB] = (0, d.useState)(null),
        eO = (0, d.useRef)(null),
        eV = (0, d.useRef)(null),
        eH = (0, d.useRef)(null),
        eK = (0, d.useRef)(null),
        e$ = (0, d.useRef)(null),
        eq = (0, d.useRef)(null),
        eX = (0, d.useRef)(null),
        eJ = (0, d.useRef)(null),
        tl = (0, d.useRef)(null),
        tc = (0, d.useRef)(!1),
        tu = (0, d.useRef)(null),
        tp = (0, d.useRef)(null),
        tm = (0, d.useRef)(!1),
        {
          elementInteractionPhase: tf,
          setElementInteractionPhase: tg,
          beginElementInteraction: tx,
          finishElementInteraction: tb,
          startDragObservation: ty,
          resetDragObservation: tv,
          interruptDragObservation: tw,
          endDragObservation: tC,
        } = (function ({ controller: e, snapshot: t, containerRef: n, onElementDragStart: r }) {
          let [i, l] = (0, d.useState)({ kind: "idle" }),
            a = (0, d.useRef)(!1),
            o = (0, d.useRef)(null),
            s = (0, d.useCallback)(() => {
              let t
              if (a.current) return
              a.current = !0
              let i = n.current?.ownerDocument.defaultView
              i &&
                ((t = (function (e, t, n, r) {
                  let i
                  if ("visible" !== t.document.visibilityState) return null
                  let l = !1,
                    a = n?.(t, () => {
                      ;((l = !0), i?.())
                    })
                  if (!a || l) return null
                  let o = !0,
                    s = "element" === e.getSnapshot().activeInteractionKind,
                    d = null,
                    c = new t.AbortController(),
                    u = () => {
                      o && ((o = !1), c.abort(), h(), r())
                    },
                    p = (e) => {
                      o && (u(), a.interrupt(e))
                    },
                    h = e.subscribe(() => {
                      if (!o) return
                      let t = e.getSnapshot()
                      if ("element" === t.activeInteractionKind) {
                        s = !0
                        return
                      }
                      s &&
                        (null !== t.activeInteractionKind || null === d
                          ? p("replaced")
                          : (t.presentationVersion !== d.presentationVersion ||
                              t.previewVersion !== d.previewVersion) &&
                            (u(), d.commit ? a.finish() : a.cancel()))
                    })
                  return (
                    t.addEventListener("blur", () => p("hidden"), { signal: c.signal }),
                    t.addEventListener("pagehide", () => p("hidden"), { signal: c.signal }),
                    t.document.addEventListener(
                      "visibilitychange",
                      () => {
                        "visible" !== t.document.visibilityState && p("hidden")
                      },
                      { signal: c.signal },
                    ),
                    (i = u),
                    {
                      end(t) {
                        if (!o) return
                        let { presentationVersion: n, previewVersion: r } = e.getSnapshot()
                        d = { commit: t, presentationVersion: n, previewVersion: r }
                      },
                      interrupt: p,
                    }
                  )
                })(e, i, r, () => {
                  o.current === t && (o.current = null)
                })),
                (o.current = t))
            }, [n, e, r]),
            c = (0, d.useCallback)(() => {
              ;(o.current?.interrupt("replaced"), (a.current = !1))
            }, []),
            u = (0, d.useCallback)((e) => {
              o.current?.interrupt(e)
            }, []),
            p = (0, d.useCallback)((e) => o.current?.end(e), []),
            h = (0, d.useCallback)((t) => (l({ kind: "dragging" }), e.beginElementInteraction(t)), [e]),
            m = (0, d.useCallback)(
              (t) => {
                let { presentationVersion: n, previewVersion: r } = e.getSnapshot()
                ;(o.current?.end(t?.commit === !0),
                  l({ kind: "awaiting-drop", presentationVersion: n, previewVersion: r }),
                  e.endElementInteraction(t) || (o.current?.interrupt("replaced"), l({ kind: "idle" })))
              },
              [e],
            )
          return (
            (0, d.useEffect)(() => {
              "awaiting-drop" === i.kind &&
                null === t.activeInteractionKind &&
                (t.presentationVersion !== i.presentationVersion || t.previewVersion !== i.previewVersion) &&
                l((e) => (e === i ? { kind: "idle" } : e))
            }, [i, t.activeInteractionKind, t.presentationVersion, t.previewVersion]),
            {
              elementInteractionPhase: i,
              setElementInteractionPhase: l,
              beginElementInteraction: h,
              finishElementInteraction: m,
              startDragObservation: s,
              resetDragObservation: c,
              interruptDragObservation: u,
              endDragObservation: p,
            }
          )
        })({ controller: t, snapshot: eI, containerRef: eF, onElementDragStart: F }),
        { queuePresencePoint: tk, recordPresenceClick: tI } =
          ((ey = (0, d.useRef)(null)),
          (ev = (0, d.useRef)(null)),
          (ew = (0, d.useRef)(void 0)),
          (eC = (0, d.useCallback)(() => {
            ew.current = Math.max(Date.now(), (ew.current ?? 0) + 1)
          }, [])),
          (eS = (0, d.useCallback)(
            (e) => {
              ;((ev.current = e ? { x: Math.round(e.x), y: Math.round(e.y) } : null),
                null == ey.current &&
                  (ey.current = window.requestAnimationFrame(() => {
                    ey.current = null
                    let e = ev.current
                    e ? t.setLocalAwarenessCursor(e, ew.current) : t.clearLocalAwarenessCursor()
                  })))
            },
            [t],
          )),
          (0, d.useEffect)(
            () => () => {
              ;(null != ey.current && window.cancelAnimationFrame(ey.current), t.clearLocalAwarenessCursor())
            },
            [t],
          ),
          { queuePresencePoint: eS, recordPresenceClick: eC }),
        [tE, tj] = (0, d.useState)(0),
        [tM, tT] = (0, d.useState)(!1),
        [tA, tq] = (0, d.useState)(104),
        [tW, tG] = (0, d.useState)(!1),
        [t_, tX] = (0, d.useState)(!1),
        tZ = h ?? tX,
        tJ = (0, d.useRef)(null),
        tY = o.some((e) => m || e.supportsReadOnlySelection),
        tQ = J?.annotation?.editingDisabled === !0,
        t0 = (0, d.useRef)(tQ)
      t0.current = tQ
      let t1 = en && J?.annotation != null && !1 !== J.annotation.enabled,
        t2 = t1 && "ask" === q,
        t3 =
          !tQ &&
          ei &&
          J?.annotation?.canComment !== !1 &&
          J?.annotation?.createCommentThreads === !0 &&
          null != J.annotation.commentAuthor,
        t8 = (() => {
          let e = J && J.annotation
          if (ei && null != e && !0 === e.createCommentThreads) return e.renderCommentThread
        })(),
        t7 = er && J?.drawing != null && !1 !== J.drawing.enabled,
        [ne, nm] = (0, d.useState)(null),
        [nf, ng] = (0, d.useState)(null),
        nx = (0, d.useRef)(ne)
      nx.current = ne
      let nb = (0, d.useRef)(!1),
        ny = (0, d.useRef)(null),
        nv = (0, d.useRef)(!1),
        nw = (0, d.useRef)(!1),
        nC = (0, d.useRef)(null),
        [nS, nk] = (0, d.useState)(!1),
        [nI, nE] = (0, d.useState)(null),
        [nj, nM] = (0, d.useState)(null),
        nT = (0, d.useRef)(null),
        [nA, nP] = (0, d.useState)([]),
        nL = (0, d.useRef)([])
      nL.current = nA
      let nF = (0, d.useRef)(null),
        nR = (0, d.useRef)(null),
        nD = (0, d.useRef)(Z),
        nN = (0, d.useCallback)((e) => {
          ;(nC.current?.annotationId === e && (nC.current = null),
            ng((t) => (t === e ? null : t)),
            nm((t) => (t?.mode === "edit" && t.annotationId === e ? null : t)))
        }, []),
        nz = (0, d.useCallback)(() => {
          ;((nC.current = null), ng(null), nm(null))
        }, []),
        nB = (0, d.useCallback)(
          (e) => {
            ;(nN(e), J?.annotation?.onDismiss?.(e))
          },
          [nN, J?.annotation],
        ),
        {
          viewportCamera: nO,
          layoutSnapshot: nV,
          effectiveViewportInsets: nH,
          stageSlideRect: nK,
          stageOverlaySnapshot: n$,
          selectionBoundsSource: nq,
          tableCameraSource: nW,
        } = (function ({ controller: e, runtime: t, snapshot: n }) {
          let r = (0, d.useSyncExternalStore)(
              (0, d.useCallback)((e) => t.subscribeToCameraChanges(e), [t]),
              (0, d.useCallback)(() => t.getCamera(), [t]),
              (0, d.useCallback)(() => t.getCamera(), [t]),
            ),
            i = (0, d.useSyncExternalStore)(
              (e) => t.subscribeToLayoutChanges(e),
              () => t.getLayoutSnapshot(),
              () => t.getLayoutSnapshot(),
            ),
            l = i.viewportInsets,
            a =
              (function (e, t, n, r, i, l, a = 0) {
                return (0, d.useMemo)(() => t$(e, t, n, r, i, l, a), [e, t, n, r, i, l, a])
              })(i.width, i.height, r, n.selectedSlideFrame, l, n.gridLayout, n.selectedSlideIdx) ?? n.slideRect,
            o = a === n.slideRect ? n : { ...n, slideRect: a }
          return {
            viewportCamera: r,
            layoutSnapshot: i,
            effectiveViewportInsets: l,
            stageSlideRect: a,
            stageOverlaySnapshot: o,
            selectionBoundsSource: (0, d.useMemo)(
              () =>
                (function ({ controller: e, getSlideRect: t, subscribeToViewportChanges: n }) {
                  let r,
                    i,
                    l,
                    a,
                    o = null,
                    s = () => {
                      var n
                      let i = e.getSnapshot(),
                        l = e.tableEditing?.getSnapshot() ?? null,
                        a = t
                          ? t(i)
                          : l?.camera && !i.gridLayout
                            ? { left: l.camera.x, top: l.camera.y, scale: l.camera.k, width: 0, height: 0 }
                            : i.slideRect,
                        s = {
                          table: l,
                          geometry: i.selectionGeometry,
                          activeInteractionKind: i.activeInteractionKind,
                          slideLeft: a?.left,
                          slideTop: a?.top,
                          scale: a?.scale,
                        }
                      if (
                        r &&
                        r.table === s.table &&
                        r.geometry === s.geometry &&
                        r.activeInteractionKind === s.activeInteractionKind &&
                        r.slideLeft === s.slideLeft &&
                        r.slideTop === s.slideTop &&
                        r.scale === s.scale
                      )
                        return o
                      r = s
                      let d = l?.dragging || null != i.activeInteractionKind ? null : tV(i, a, l)
                      return (
                        (n = o) !== d &&
                          (null == n ||
                            null == d ||
                            n.left !== d.left ||
                            n.top !== d.top ||
                            n.width !== d.width ||
                            n.height !== d.height) &&
                          (o = d),
                        o
                      )
                    },
                    d = new Set(),
                    c = null,
                    u = () => {
                      let e = s()
                      if (e !== c) for (let t of ((c = e), [...d])) t()
                    }
                  return {
                    getSnapshot: s,
                    subscribe: (t) => (
                      0 === d.size &&
                        ((c = s()), (i = e.subscribe(u)), (l = n?.(u)), (a = e.tableEditing?.subscribe(u))),
                      d.add(t),
                      () => {
                        ;(d.delete(t), 0 === d.size && (i?.(), l?.(), a?.(), (a = void 0), (i = void 0), (l = void 0)))
                      }
                    ),
                  }
                })({
                  controller: e,
                  getSlideRect: (n) => {
                    let r = t.getLayoutSnapshot()
                    return (
                      t$(
                        r.width,
                        r.height,
                        e.getPresentedViewportCamera() ?? t.getCamera(),
                        n.selectedSlideFrame,
                        r.viewportInsets,
                        n.gridLayout,
                        n.selectedSlideIdx,
                      ) ?? n.slideRect
                    )
                  },
                  subscribeToViewportChanges: (n) => {
                    let r = t.subscribeToLayoutChanges(n),
                      i = e.subscribeToViewportFrames(n)
                    return () => {
                      ;(r(), i())
                    }
                  },
                }),
              [e, t],
            ),
            tableCameraSource: (0, d.useMemo)(
              () => ({
                getCamera: () => {
                  let n = e.getSnapshot(),
                    r = t.getLayoutSnapshot(),
                    i = t$(
                      r.width,
                      r.height,
                      e.getPresentedViewportCamera() ?? t.getCamera(),
                      n.selectedSlideFrame,
                      r.viewportInsets,
                      n.gridLayout,
                      n.selectedSlideIdx,
                    )
                  return i ? { x: i.left, y: i.top, k: i.scale } : null
                },
                subscribe: (t) => e.subscribeToViewportFrames(t),
              }),
              [e, t],
            ),
          }
        })({ controller: t, runtime: n, snapshot: eI }),
        nU = Math.max(44, Math.floor((0, _.y_)(nV, { ...D, fitBottomInset: 0 }).height / 2)),
        nG = {
          top: nH.top ?? 0,
          right: (nH.right ?? 0) + (nH.fitRightInset ?? 0),
          bottom: nH.bottom ?? 0,
          left: (nH.left ?? 0) + (nH.fitLeftInset ?? 0),
        },
        n_ = (0, d.useMemo)(
          () =>
            (function (e) {
              let t = new Map(e.selectedSlideElementTargets.map((e) => [e.id, e]))
              for (let n of e.previewFrames) {
                let e = t.get(n.elementId)
                e && t.set(e.id, { ...e, frame: { ...e.frame, ...n.frame }, connector: n.connector ?? e.connector })
              }
              return t
            })(eI),
          [eI.selectedSlideElementTargets, eI.previewFrames],
        )
      !(function ({ cursorRef: e, canvasRef: t, active: n, targets: r, previewRotation: i }) {
        ;(0, O.o)(() => {
          let l = e.current
          if (!l) return
          if (!n) {
            e.current = null
            return
          }
          let a = r.get(l.elementId)
          a && t.current && (t.current.style.cursor = (0, eQ.SQ)(l.corner, i ?? a.frame.rotation))
        }, [n, t, e, i, r])
      })({
        cursorRef: eq,
        canvasRef: eH,
        active: m && "idle" !== tf.kind,
        targets: n_,
        previewRotation: eI.selectionRotationFrame?.rotation,
      })
      let nX = eI.slideIds[eI.selectedSlideIdx] ?? `slide-${eI.selectedSlideIdx}`,
        nZ = $ || G || k || x || v || E || null != C || null != A || null != eI.activeInteractionKind,
        nJ = (function ({
          controller: e,
          snapshot: t,
          slideRect: n,
          canvas: r,
          isEditing: i,
          disabled: l,
          onClick: a,
        }) {
          let o = t.slideIds[t.selectedSlideIdx],
            s = null != a,
            c = (0, d.useRef)(null),
            u = (0, d.useRef)(null),
            p = (0, d.useRef)(null),
            h = (0, d.useCallback)(() => {
              c.current = null
            }, []),
            m = (0, d.useCallback)(() => {
              ;(u.current && e.setHoveredHyperlink(null),
                (u.current = null),
                (p.current = null),
                r.current?.style.cursor === "pointer" && (r.current.style.cursor = ""))
            }, [e, r])
          ;((0, d.useEffect)(
            () => () => {
              ;(h(), m())
            },
            [h, m, o, i, s, l, n?.left, n?.top, n?.scale],
          ),
            (0, d.useEffect)(() => {
              let e = c.current,
                n = t.hyperlinkTargets[0]?.revision
              !e || (n && (0, tN.UG)(e.target.revision, n)) || (h(), m())
              let r = u.current,
                l = p.current
              if (!r || !l) return
              let a = (0, tN.rv)(t, l.point, { isEditing: i, scale: l.scale })
              a &&
              (0, tN.UG)(r.revision, a.revision) &&
              (0, tN.UA)(r.source, a.source) &&
              r.url === a.url &&
              r.action === a.action
                ? (u.current = a)
                : m()
            }, [h, m, i, t]))
          let f = (e, n, r) =>
            s && i && !l
              ? (0, tN.rv)(t, n, {
                  isEditing: i,
                  scale: r,
                  altKey: e.altKey,
                  ctrlKey: e.ctrlKey,
                  metaKey: e.metaKey,
                  shiftKey: e.shiftKey,
                })
              : null
          return {
            cancel: h,
            clear: m,
            begin: (e, t, n) => {
              let r = f(e, t, n)
              return (
                !!r &&
                ((c.current = {
                  target: r,
                  point: t,
                  pointerId: e.pointerId,
                  clientPoint: { x: e.clientX, y: e.clientY },
                }),
                (e.currentTarget.style.cursor = "pointer"),
                e.preventDefault(),
                !0)
              )
            },
            takeDrag: (e) => {
              let t = c.current
              return !t ||
                t.pointerId !== e.pointerId ||
                2 >= Math.hypot(e.clientX - t.clientPoint.x, e.clientY - t.clientPoint.y)
                ? null
                : ((c.current = null), t)
            },
            complete: (e, t, n, r) => {
              let i = c.current
              if (
                ((c.current = null),
                !r ||
                  !i ||
                  !t ||
                  0 !== e.button ||
                  e.pointerId !== i.pointerId ||
                  Math.hypot(e.clientX - i.clientPoint.x, e.clientY - i.clientPoint.y) > 2)
              )
                return
              let l = f(e, t, n)
              l &&
                (0, tN.UG)(l.revision, i.target.revision) &&
                (0, tN.UA)(l.source, i.target.source) &&
                l.url === i.target.url &&
                l.action === i.target.action &&
                (0, tN.mR)(e, l, t, a)
            },
            move: (t, n, r) => {
              if (0 !== t.buttons) return !1
              let i = f(t, n, r)
              if (!i) return (m(), !1)
              let l = u.current
              return (
                (p.current = { point: n, scale: r }),
                (l &&
                  (0, tN.UG)(l.revision, i.revision) &&
                  (0, tN.UA)(l.source, i.source) &&
                  l.url === i.url &&
                  l.action === i.action) ||
                  ((u.current = i), e.setHoveredHyperlink(i)),
                (t.currentTarget.style.cursor = "pointer"),
                !0
              )
            },
          }
        })({ controller: t, snapshot: eI, slideRect: nK, canvas: eH, isEditing: m, disabled: nZ, onClick: ee }),
        nY = (function ({
          onChange: e,
          slideId: t,
          targets: n,
          elements: r,
          slideRect: i,
          viewport: l,
          canvas: a,
          isEditing: o,
          disabled: s,
        }) {
          let c = null != e,
            u = (0, d.useRef)(null),
            p = (0, d.useRef)(e)
          p.current = e
          let h = (e) => {
            ;((u.current = null), p.current?.(null, e))
          }
          return (
            (0, d.useEffect)(
              () => (
                (u.current = null),
                p.current?.(null, null),
                () => {
                  ;((u.current = null), p.current?.(null, null))
                }
              ),
              [t, o, s, c, i?.left, i?.top, i?.scale],
            ),
            (0, d.useEffect)(() => {
              let e = u.current
              if (!e) return
              let t = (0, tN.L7)(n, r, e.hover.point, i?.scale)
              ;(t && tO(e.target, t)) || ((u.current = null), p.current?.(null, null))
            }, [n, r, i?.scale]),
            (0, d.useEffect)(() => {
              if (!c || s) return
              let e = () => {
                  ;((u.current = null), p.current?.(null, null))
                },
                t = (t) => {
                  let n = t.target
                  ;(!(n instanceof Node) || n.contains(l.current)) && e()
                }
              return (
                window.addEventListener("scroll", t, !0),
                window.addEventListener("resize", e),
                () => {
                  ;(window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", e))
                }
              )
            }, [s, c, l]),
            {
              invalidate: () => h(null),
              leave: () => h(a.current),
              move: (o) => {
                if (!e) return
                if (s) {
                  u.current && h(null)
                  return
                }
                let d = o && (0, tN.L7)(n, r, o, i?.scale),
                  c = l.current
                if (!d || !o || !i || !c) {
                  u.current && h(a.current)
                  return
                }
                let p = u.current
                if (p && tO(p.target, d)) return
                let m = (0, ts.Ap)([d.frame])
                if (!m) return
                let f = i.left + m.left * i.scale,
                  g = i.top + m.top * i.scale,
                  x = c.getBoundingClientRect(),
                  b = (0, tB.j)(c, f, g, x),
                  y = (0, tB.j)(c, f + m.width * i.scale, g + m.height * i.scale, x),
                  v = { left: b.x, top: b.y, width: y.x - b.x, height: y.y - b.y },
                  w = {
                    id: d.id,
                    url: d.url,
                    action: d.action,
                    slideId: t,
                    source: d.source,
                    revision: d.revision,
                    point: o,
                    bounds: v,
                  }
                ;((u.current = { hover: w, target: d }), e(w, a.current))
              },
            }
          )
        })({
          onChange: et,
          slideId: nX,
          targets: eI.hyperlinkTargets,
          elements: eI.selectedSlideElementTargets,
          slideRect: nK,
          viewport: eF,
          canvas: eH,
          isEditing: m,
          disabled: nZ,
        }),
        nQ = J?.annotation?.activeRequests
      ;((0, d.useEffect)(() => {
        t.setWorkingImages(
          nQ?.flatMap(({ target: e }) =>
            "presentation-element-selection" === e.type
              ? e.elementIds.map((t) => ({ slideId: e.slideId, elementId: t }))
              : [],
          ) ?? [],
        )
      }, [t, nQ]),
        (0, d.useEffect)(() => () => t.setWorkingImages([]), [t]))
      let n0 = (function (e, t, n) {
          let [r, i] = (0, d.useState)(),
            l = (0, d.useRef)(null),
            a = (0, d.useRef)(null),
            [o, s] = (0, d.useState)(null),
            c = (0, d.useRef)(null),
            u = (0, d.useCallback)((e) => {
              ;(null == e || l.current === e) && ((l.current = null), i(void 0))
            }, [])
          return (
            (0, d.useEffect)(
              () => (
                u(),
                () => {
                  ;((l.current = null), c.current?.(), (c.current = null))
                }
              ),
              [e, t, u],
            ),
            (0, d.useEffect)(() => {
              if (!r) return
              let t = () => {
                let t = e.getSnapshot()
                ;(t.primarySelectedElementId !== r.elementId || 1 !== t.selectedElementIds.length) && u(r.id)
              }
              return (t(), e.subscribe(t))
            }, [e, r, u]),
            {
              commit: (0, d.useCallback)(
                (r) => {
                  if ("insert-chart" !== r.kind && n?.disabled) return
                  ;(c.current?.(), u())
                  let a = (0, e2.x)("element-insertion"),
                    o = {
                      "insert-chart": "chart",
                      "insert-image-placeholder": "image",
                      "insert-widget-placeholder": "element",
                    }[r.kind],
                    s = new Set(e.getSnapshot().selectedSlideElementTargets.map((e) => e.id)),
                    d = () => {},
                    p = () => {
                      ;(d(), (c.current = null))
                    }
                  ;((d = e.subscribeEditEvents((n) => {
                    if (
                      n.command.id !== a ||
                      "edit-started" === n.type ||
                      (p(), "edit-committed" !== n.type || !n.changed)
                    )
                      return
                    let d = e.getSnapshot(),
                      c = d.primarySelectedElementId
                    !(d.slideIds[d.selectedSlideIdx] !== t || !c || s.has(c)) &&
                      1 === d.selectedElementIds.length &&
                      d.inspector.selectedElement?.id === c &&
                      d.inspector.selectedElement.kind === o &&
                      d.selectedSlideElementTargets.some((e) => e.id === c) &&
                      ((l.current = a),
                      i({
                        id: a,
                        elementId: c,
                        placeholder: {
                          "insert-chart": "What should this chart contain?",
                          "insert-image-placeholder": "Describe an image",
                          "insert-widget-placeholder": "Describe what you want to create",
                        }[r.kind],
                        generation: "insert-widget-placeholder" === r.kind ? "html" : void 0,
                        onDismiss: () => u(a),
                      }))
                  })),
                    (c.current = p),
                    e.dispatch(r, { id: a, type: r.kind, source: "human" }))
                },
                [e, t, u, n?.disabled],
              ),
              request:
                r && n
                  ? {
                      ...r,
                      disabled: n.disabled,
                      isSubmitting: o === r.id,
                      onSubmit: async (i) => {
                        let o = e.getSnapshot()
                        if (
                          n.disabled ||
                          a.current === r.id ||
                          !i.trim() ||
                          l.current !== r.id ||
                          o.primarySelectedElementId !== r.elementId ||
                          1 !== o.selectedElementIds.length ||
                          o.slideIds[o.selectedSlideIdx] !== t
                        )
                          return !1
                        let d = (0, ex.a6)({ snapshot: o })
                        if (!d) return !1
                        ;((a.current = r.id), s(r.id))
                        try {
                          return (
                            (await n.onSubmit({
                              requestId: r.id,
                              artifactKind: "presentation",
                              body: i,
                              generation: r.generation,
                              label: (0, ex.o7)(d),
                              target: d,
                            })) && l.current === r.id
                          )
                        } finally {
                          a.current === r.id && ((a.current = null), s(null))
                        }
                      },
                    }
                  : void 0,
            }
          )
        })(t, nX, Q),
        n1 = (0, d.useRef)(nX)
      ;(0, d.useEffect)(() => {
        ;(null != A &&
          (!m || $ || G || k || x || v || E || null != C || n1.current !== nX) &&
          (t.setChartInsertionPreview(null), P?.(null)),
          (n1.current = nX))
      }, [t, nX, A, m, $, G, k, x, v, E, C, P])
      let n2 = (0, d.useMemo)(() => ({ controller: t, slideId: nX }), [t, nX]),
        n4 = eI.slideLabels[eI.selectedSlideIdx] ?? `Slide ${eI.selectedSlideIdx + 1}`
      ;(0, O.o)(
        () => (
          n.setOnCameraChanged((e) => {
            t.setViewportCamera(e)
          }),
          () => {
            n.setOnCameraChanged(null)
          }
        ),
        [t, n],
      )
      let n3 = (0, d.useCallback)(
        (e) => {
          let r = V ? Math.max(0, e - 24) : 0
          V?.(r)
          let i = e > 0 && !eI.gridLayout ? e + 12 - r : 0
          i !== n.getContentBottomInset() && (n.setContentBottomInset(i), t.setViewportInsets(D, void 0, i))
        },
        [t, V, n, D, eI.gridLayout],
      )
      ;(0, O.o)(() => {
        B || n3(0)
      }, [n3, B])
      let n5 = (0, d.useMemo)(
          () => (eI.commentThreads ?? []).filter((e) => !e.detached && e.slideId === nX && "resolved" !== e.status),
          [nX, eI.commentThreads],
        ),
        n6 = ed ?? es,
        n8 = J?.annotation?.solidCommentTargetHighlights,
        n9 = (0, d.useMemo)(
          () => tV({ selectionGeometry: n$.selectionGeometry, slideRect: n$.slideRect }),
          [n$.selectionGeometry, n$.slideRect],
        ),
        n7 = (0, g.U)("presentation"),
        re =
          eI.selectedElementIds.length > 1
            ? "mixed"
            : (eI.inspector.slideElements.find((e) => e.id === eI.primarySelectedElementId)?.kind ?? "element"),
        rt = (0, eW.k3)(n7, re),
        rn =
          1 === eI.selectedElementIds.length && eI.inspector.selectedElement?.id === eI.primarySelectedElementId
            ? eI.inspector.selectedElement
            : null,
        rr =
          rn?.kind === "chart" || rn?.kind === "image"
            ? nQ?.find(
                ({ target: e }) =>
                  "presentation-element-selection" === e.type && e.slideId === nX && e.elementIds.includes(rn.id),
              )
            : void 0,
        ri = null != n0.request || null != rr,
        rl =
          (m &&
            eU({
              capabilities: eE,
              config: rt,
              text: rn?.text != null,
              fill: !1,
              delete: !1,
              format:
                u.isPanelAvailable(ea) &&
                eE.inspector.length > 0 &&
                (rn?.text != null || rn?.fill != null || rn?.line != null),
            }).length > 0) ||
          (!tQ &&
            "hidden" !== rt.controls.askForChange.state &&
            t2 &&
            (J?.annotation?.onDirectSubmit != null || J?.annotation?.onSubmit != null)) ||
          (!tQ && "hidden" !== rt.controls.comment.state && t3),
        ra = rt.enabled && ("selection" === rt.trigger || ri),
        ro =
          !(ei && (el ? eI.commentThreads : n5)?.some((e) => e.threadId === es)) &&
          (rl || ri) &&
          tY &&
          !k &&
          !x &&
          !v &&
          null == C &&
          eI.selectedElementIds.length > 0 &&
          !E &&
          !$ &&
          !G &&
          null == A &&
          !ne &&
          "idle" === tf.kind &&
          null == eI.activeInteractionKind &&
          (!eI.textEditState?.activeBlockId ||
            ((eI.textEditState.selection?.selectedCharacterCount ?? 0) > 0 &&
              o.some((e) => e.supportsTextSelection))) &&
          null != n9,
        rs = (p ?? t_) && ro
      ;((0, d.useEffect)(() => {
        ;(!tY || $ || G) && tZ(!1)
      }, [tY, $, G, tZ]),
        (0, d.useEffect)(() => {
          if (!rs) return
          let e = (e) => {
            ;(e.target instanceof Element &&
              e.target.closest("[data-popcorn-edit-toolbar-root], [data-popcorn-presentation-format-control]")) ||
              tZ(!1)
          }
          return (document.addEventListener("mousedown", e, !0), () => document.removeEventListener("mousedown", e, !0))
        }, [rs, tZ]))
      let rd = (0, d.useMemo)(
          () =>
            (0, ex.a6)({
              snapshot: {
                slideIds: eI.slideIds,
                slideLabels: eI.slideLabels,
                selectedSlideIdx: eI.selectedSlideIdx,
                selectedElementIds: eI.selectedElementIds,
                primarySelectedElementId: eI.primarySelectedElementId,
                selectionGeometry: eI.selectionGeometry,
                inspector: eI.inspector,
              },
            }),
          [
            eI.slideIds,
            eI.slideLabels,
            eI.selectedSlideIdx,
            eI.selectedElementIds,
            eI.primarySelectedElementId,
            eI.selectionGeometry,
            eI.inspector,
          ],
        ),
        rc = rd ? JSON.stringify([rd.slideId, rd.elementIds, rd.primaryElementId]) : null
      ;((0, d.useEffect)(() => {
        tZ(tY && ra && null != rc)
      }, [rc, rt, ri, ra, tY, tZ]),
        (0, d.useEffect)(() => {
          null == rc && (tJ.current = null)
        }, [rc]))
      let ru = (0, d.useCallback)(() => {
          let e = J?.annotation?.onAskForEditShown
          null != rc && tJ.current !== rc && null != e && ((tJ.current = rc), e())
        }, [rc, J?.annotation?.onAskForEditShown]),
        rp = (0, d.useMemo)(() => {
          let e = n$.slideRect
          return e ? { left: e.left, top: e.top, width: e.width, height: e.height } : null
        }, [n$.slideRect]),
        rh = (0, d.useMemo)(
          () => (ne?.target.slideId === nX ? (0, ex.FB)(ne.target, n$.slideRect, n_) : null),
          [ne?.target, nX, n$.slideRect, n_],
        ),
        rm = (0, d.useMemo)(
          () => (ne?.target.slideId === nX ? (0, ex.ow)(ne.target, n$.slideRect, n_) : null),
          [ne?.target, nX, n$.slideRect, n_],
        )
      eb = ne?.mode === "create" && ne.markerAtAnchor ? rm : (rh ?? rm)
      let rf = (0, d.useMemo)(() => (t1 && nj ? (0, tz.UW)(nj.start, nj.current) : null), [t1, nj]),
        rg = (0, d.useMemo)(() => {
          if (!rf || !nj) return null
          let e = (0, ex.Cz)({ snapshot: eI, frame: rf, anchorPoint: nj.current })
          return e ? (0, ex.FB)(e, n$.slideRect) : null
        }, [nj, rf, eI, n$.slideRect]),
        rx = (0, d.useMemo)(
          () =>
            rf
              ? (0, tz.hy)(eI.selectedSlideElementTargets, rf).flatMap((e) => {
                  let t = eI.selectedSlideElementTargets.find((t) => t.id === e)
                  return t
                    ? [
                        {
                          elementId: e,
                          frame: {
                            left: t.frame.left,
                            top: t.frame.top,
                            width: t.frame.width,
                            height: t.frame.height,
                            rotation: t.frame.rotation,
                          },
                        },
                      ]
                    : []
                })
              : [],
          [rf, eI.selectedSlideElementTargets],
        ),
        rb = (0, d.useMemo)(
          () =>
            ne?.target.type !== "presentation-region" || ne.target.slideId !== nX ? [] : ne.target.containedElements,
          [ne, nX],
        ),
        ry = (0, d.useMemo)(
          () => (nS ? eI.selectionGeometry.hoveredTarget : null),
          [nS, eI.selectionGeometry.hoveredTarget],
        ),
        rv = (0, d.useMemo)(
          () =>
            rg ||
            rh ||
            (t1 && $ && ry
              ? (0, ex.FB)(
                  {
                    type: "presentation-element-selection",
                    slideId: nX,
                    slideIndex: eI.selectedSlideIdx,
                    slideLabel: n4,
                    elementIds: [ry.id],
                    primaryElementId: ry.id,
                    frame: ry.frame,
                  },
                  n$.slideRect,
                )
              : null),
          [rh, t1, ry, $, rg, nX, n4, eI.selectedSlideIdx, n$.slideRect],
        ),
        rw = (0, d.useCallback)(
          (e, t = !1) =>
            !t0.current &&
            (nw.current
              ? ((nv.current = !1), (0, e0.AE)(ny.current), !1)
              : (((nv.current = !1), t)
                  ? (nm(null), ng(e.annotationId))
                  : J?.annotation?.defaultCreateSubmitMode === "direct"
                    ? (ng(null), nm({ mode: "create", intent: "ask", target: e.target, body: "" }))
                    : (ng(e.annotationId),
                      nm({ mode: "edit", annotationId: e.annotationId, target: e.target, body: e.body })),
                !0)),
          [J?.annotation?.defaultCreateSubmitMode],
        ),
        rC = (0, d.useCallback)(
          (e, n, r) => {
            if (t0.current) return !1
            let i = nx.current,
              l =
                i?.mode === "create"
                  ? i.body.trim().length > 0
                  : i?.mode === "edit" && i.body !== r.find((e) => e.annotationId === i.annotationId)?.body
            if (n && l) return ((0, e0.AE)(ny.current), !1)
            let a = null != nC.current
            if (((nC.current = null), e.target.slideId === nX && !a)) return rw(e, n)
            if (nw.current) return ((nv.current = !1), (0, e0.AE)(ny.current), !1)
            let o = eI.slideIds.indexOf(e.target.slideId)
            return (
              !(o < 0) &&
              (n && nm(null), (nC.current = { annotationId: e.annotationId, preview: n }), t.setSelectedSlideIdx(o), !0)
            )
          },
          [t, nX, rw, eI.slideIds],
        ),
        {
          annotations: rS,
          addPendingAnnotation: rk,
          updatePendingAnnotation: rI,
          focusAnnotation: rE,
          dismissAnnotation: rj,
        } = (0, e4.C)(J?.annotation?.handleRef, {
          artifactKey: J?.annotation?.artifactKey,
          artifactKind: "presentation",
          canReplaceSource: () => null == nx.current && !nw.current && !nb.current && null == nC.current,
          initialAnnotations:
            J?.annotation?.initialAnnotations ??
            J?.annotation?.initialPendingAnnotations?.filter(
              (e) => "presentation-element-selection" === e.target.type || "presentation-region" === e.target.type,
            ),
          onFocusAnnotation: rC,
          onDismissAnnotation: nB,
          onDismissAllAnnotations: nz,
        }),
        rM = (0, d.useMemo)(
          () => rS.filter((e) => J?.annotation?.canAssignToChatGpt !== !1 && e.target.slideId === nX),
          [nX, rS, J?.annotation?.canAssignToChatGpt],
        ),
        rT = (0, d.useMemo)(() => (0, e5.Wi)(rM), [rM]),
        rA = ne?.mode === "edit" ? (rT.get(ne.annotationId) ?? 0) : 0,
        rP = (0, d.useMemo)(
          () => (ne?.mode === "edit" && rh ? { ...(0, e_.Ky)(rh, "top-right", rA), width: 0, height: 0 } : rm),
          [rm, rh, ne?.mode, rA],
        ),
        rL = (0, d.useMemo)(
          () =>
            rM.map((e) => ({
              annotation: e,
              stackIndex: rT.get(e.annotationId) ?? 0,
              bounds: (0, ex.FB)(e.target, n$.slideRect, n_),
            })),
          [rT, rM, n$.slideRect, n_],
        ),
        rF = (() => {
          if (null != t8) return rL.map(({ bounds: e, stackIndex: t }) => (0, e_.Ky)(e, "top-right", t))
        })(),
        rR = (0, d.useMemo)(() => (rg ? rx : rb), [rb, rx, rg]),
        { drawings: rD, addPendingDrawing: rN } = (0, e3.r)(J?.drawing?.handleRef),
        rz = (0, d.useMemo)(() => rD.filter((e) => e.target.slideId === nX), [nX, rD]),
        rB = (0, d.useMemo)(() => {
          var e
          return (
            (e = () => {
              tj((e) => e + 1)
            }),
            new tL.D(
              {
                onPointerDown: (e, n) => t.textPointerDown(e, n),
                onPointerMove: (e) => {
                  t.textPointerMove(e)
                },
                onPointerUp: () => {
                  t.textPointerUp()
                },
                onSelectWordAtPoint: (e) => t.textSelectWordAtPoint(e),
                onSelectParagraphAtPoint: (e) => t.textSelectParagraphAtPoint(e),
                onActivateBlockEnd: (e) => t.textActivateBlockEnd(e),
                onClear: () => t.textClear(),
                onKeyDown: (e) => {
                  t.textHandleKeyDown(e)
                },
                onFormat: (e) => {
                  t.dispatch({ kind: "toggle-text-format", format: e })
                },
                onBeforeInput: (e) => {
                  t.textHandleBeforeInput(e)
                },
                onPaste: (e) => {
                  t.textHandlePaste(e)
                },
                onInput: (e) => {
                  t.textHandleInput(e)
                },
                onCompositionEnd: (e) => {
                  t.textHandleCompositionEnd(e)
                },
              },
              {
                onChange: e,
                onUnhandledKeyDown: (e) => {
                  let n = t.tableEditing?.getSnapshot()
                  if ("Tab" === e.key && n) {
                    ;(t.tableEditing.interact({
                      tableId: n.tableId,
                      type: "navigate",
                      direction: e.shiftKey ? "previous" : "next",
                    }),
                      e.preventDefault())
                    return
                  }
                  if ((e.metaKey || e.ctrlKey) && "z" === e.key.toLowerCase()) {
                    ;(e.shiftKey ? t.redo() : t.undo(), e.preventDefault())
                    return
                  }
                  ;(e.metaKey || e.ctrlKey) && "y" === e.key.toLowerCase() && (t.redo(), e.preventDefault())
                },
              },
            )
          )
        }, [t]),
        rO = (e) => {
          let t = rB.getTextBlockIdAtPoint(e)
          return (0, tz.Uq)(t, eI.selectedSlideElementTargets, e, n.getCamera().k) ? t : null
        },
        {
          gridPointerRef: rV,
          cancelGridPointerInteraction: rH,
          flushGridPointerInteraction: rK,
          beginGridPointerInteraction: r$,
        } = (function ({
          controller: e,
          runtime: t,
          snapshot: n,
          containerRef: r,
          overlayCanvasRef: i,
          activePointerIdRef: l,
          armedTextElementIdRef: a,
          pointerClickSequenceRef: o,
          finishElementInteraction: s,
          startDragObservation: c,
          setElementInteractionPhase: u,
          setEditToolbarRequested: p,
          hasEditToolbarOverlay: h,
          selectionToolbarAutomatic: m,
          selectOnly: f,
        }) {
          let g = (0, d.useRef)(null),
            x = (0, d.useCallback)(() => {
              let t = g.current
              return (
                !!t &&
                ((g.current = null),
                (void 0 === t.result || t.result?.mode === "element") && s({ commit: !1 }),
                (void 0 === t.result || t.result?.mode === "marquee") && e.endSelectionMarquee({ commit: !1 }),
                u({ kind: "idle" }),
                (a.current = null),
                ni(i.current, l),
                !0)
              )
            }, [e, s, l, a, i, u]),
            b = (0, d.useCallback)(() => {
              let n = g.current,
                o = r.current
              if (!n || void 0 === n.result || !o) return
              let d = n.latest,
                u = Math.hypot(d.clientX - n.start.clientX, d.clientY - n.start.clientY) > 2,
                f = (0, tB.f)(o, d.clientX, d.clientY)
              if (null === n.result) {
                ;((g.current = null), e.clearElementSelection(), ni(i.current, l))
                return
              }
              let b = n.result,
                y = (0, tH.w4)(n.layout, b.slideIndex, t.getCamera())
              if (!y) return void x()
              let v = { x: (f.x - y.left) / y.scale, y: (f.y - y.top) / y.scale }
              "element" === b.mode
                ? (u && c(),
                  n.ended
                    ? ((g.current = null),
                      s({
                        commit: n.commit,
                        nextPoint: v,
                        shiftKey: d.shiftKey,
                        snapSuppressed: d.altKey,
                        altKey: d.altKey,
                        ctrlKey: d.ctrlKey,
                      }),
                      (a.current =
                        n.commit &&
                        !u &&
                        !n.start.shiftKey &&
                        !d.shiftKey &&
                        e.getSnapshot().textLayoutBlocks.some((e) => e.id === b.elementId)
                          ? b.elementId
                          : null),
                      p(h && m))
                    : u &&
                      e.updateElementInteraction({
                        nextPoint: v,
                        shiftKey: d.shiftKey,
                        snapSuppressed: d.altKey,
                        altKey: d.altKey,
                        ctrlKey: d.ctrlKey,
                      }))
                : "marquee" === b.mode
                  ? (e.updateSelectionMarquee({ nextPoint: v }),
                    n.ended && ((g.current = null), e.endSelectionMarquee({ commit: n.commit }), p(h && m)))
                  : n.ended && (g.current = null)
            }, [x, l, r, a, e, s, h, c, i, m, t, p])
          return (
            (0, d.useEffect)(() => {
              n.gridLayout || x()
            }, [x, n.gridLayout]),
            {
              gridPointerRef: g,
              cancelGridPointerInteraction: x,
              flushGridPointerInteraction: b,
              beginGridPointerInteraction: (i, s) => {
                let d = n.gridLayout,
                  c = r.current
                if (d && c && 0 === i.button) {
                  let r = (0, tB.f)(c, i.clientX, i.clientY),
                    p = (0, tH.w4)(d, n.selectedSlideIdx, t.getCamera()),
                    h =
                      null != p && r.x >= p.left && r.x <= p.left + p.width && r.y >= p.top && r.y <= p.top + p.height,
                    m = p ? { x: (r.x - p.left) / p.scale, y: (r.y - p.top) / p.scale } : null,
                    y = (0, tz.mc)(n),
                    v = n.selectedSlideElementTargets.find((e) => e.id === n.primarySelectedElementId),
                    w =
                      m &&
                      ((0, tz.hp)(
                        y,
                        m,
                        t.getCamera().k,
                        (0, tz.jJ)(n),
                        1 === n.selectedElementIds.length && v?.resizeAxis === "horizontal",
                      ) ||
                        ((n.selectedElementIds.length > 1 || !!v?.canRotate) && (0, tz.Ht)(y, m, t.getCamera().k)) ||
                        (1 === n.selectedElementIds.length && v && (0, tz.B5)([v], m, t.getCamera().k)))
                  if (!h && !w) {
                    ;(s(), (o.current = null), (a.current = null))
                    let t = na(i),
                      n = {
                        pointerId: i.pointerId,
                        layout: d,
                        start: t,
                        latest: t,
                        result: void 0,
                        ended: !1,
                        commit: !0,
                      }
                    return (
                      (g.current = n),
                      nn(i, l),
                      i.preventDefault(),
                      i.stopPropagation(),
                      e
                        .beginGridInteraction({
                          point: r,
                          shiftKey: i.shiftKey,
                          altKey: i.altKey,
                          ctrlKey: i.ctrlKey,
                          selectOnly: f || void 0,
                        })
                        .then((e) => {
                          g.current === n && ((n.result = e), e?.mode === "element" && u({ kind: "dragging" }), b())
                        })
                        .catch(() => {
                          g.current === n && x()
                        }),
                      !0
                    )
                  }
                }
                return !1
              },
            }
          )
        })({
          controller: t,
          runtime: n,
          snapshot: eI,
          containerRef: eF,
          overlayCanvasRef: eH,
          activePointerIdRef: eK,
          armedTextElementIdRef: eJ,
          pointerClickSequenceRef: eX,
          finishElementInteraction: tb,
          startDragObservation: ty,
          setElementInteractionPhase: tg,
          setEditToolbarRequested: tZ,
          hasEditToolbarOverlay: tY,
          selectionToolbarAutomatic: ra,
          selectOnly: G || $ || k || x || v || E || null != C || null != A,
        }),
        rq = (0, d.useCallback)(() => {
          ;(nT.current?.end(), nR.current?.(), (nR.current = null))
        }, []),
        rW = (0, d.useCallback)(
          (e = eH.current) => {
            if ((nJ.cancel(), rH())) return !0
            if (nT.current?.isActive()) return (rq(), !0)
            let n = e$.current
            if (!n) return !1
            let r = tl.current
            return (
              (e$.current = null),
              (tl.current = null),
              (tu.current = null),
              (tm.current = !1),
              (eJ.current = null),
              "element" === n
                ? tb({ commit: !1 })
                : "marquee" === n
                  ? t.endSelectionMarquee({ commit: !1 })
                  : "table" === n
                    ? r && t.tableEditing.interact({ tableId: r, type: "pointer-cancel" })
                    : "text" === n && rB.pointerUp(),
              ni(e, eK),
              !0
            )
          },
          [rH, rq, t, tb, nJ.cancel, rB],
        ),
        rU = (function ({
          controller: e,
          runtime: t,
          snapshot: n,
          containerRef: r,
          overlayCanvasRef: i,
          textEditSession: l,
          pointerClickSequenceRef: a,
          effectiveViewportInsets: o,
          isEditing: s,
          pointerToolActive: c,
          beginElementInteraction: u,
          startDragObservation: p,
          queuePresencePoint: h,
          recordPresenceClick: m,
          finishElementInteraction: f,
          onTapStart: g,
          onSelectElement: x,
          onPinchStart: b,
          onHyperlinkClick: y,
        }) {
          let v = (0, d.useRef)(0),
            w = (0, d.useRef)(null),
            C = (0, d.useRef)(null),
            S = (0, d.useCallback)(() => {
              ;((v.current += 1), (w.current = null))
            }, []),
            k = (e) => {
              let t = r.current
              return t ? (0, tB.f)(t, e.clientX, e.clientY) : null
            },
            I = (e, n) => {
              let r = k(e)
              if (!r || !n.target) return null
              let i = t.getCamera()
              return {
                x: n.target.point.x + (r.x - i.x) / i.k - (n.viewportPoint.x - n.camera.x) / n.camera.k,
                y: n.target.point.y + (r.y - i.y) / i.k - (n.viewportPoint.y - n.camera.y) / n.camera.k,
              }
            },
            E = (e, t) => t.moved || Math.hypot(e.clientX - t.clientPoint.x, e.clientY - t.clientPoint.y) > 8,
            j = (0, d.useEffectEvent)((n) => {
              if ((S(), n.target instanceof Element && n.target.closest("[data-popcorn-element-handle]"))) return !1
              if (n.target !== i.current) return !0
              if (c) return !1
              let r = k(n)
              if (!r) return !0
              let l = v.current,
                a = t.getCamera(),
                { width: d, height: u } = t.getLayoutSnapshot()
              return e
                .resolveTouchTarget({ point: r, camera: a, viewport: { width: d, height: u }, viewportInsets: o })
                .then(
                  (e) =>
                    l !== v.current ||
                    ((w.current = {
                      target: e,
                      viewportPoint: r,
                      clientPoint: { x: n.clientX, y: n.clientY },
                      camera: a,
                    }),
                    !s || !e?.interaction),
                )
            }),
            M = (0, d.useEffectEvent)((d) => {
              let c = r.current,
                p = w.current
              if (!c || !p || d.target !== i.current) return
              let b = p.target
              if (((a.current = null), m(), h(b?.point ?? null), g(), !s && b?.hyperlink)) {
                let n = v.current,
                  r = k(d)
                if (!r) return
                let { width: i, height: l } = t.getLayoutSnapshot()
                e.resolveTouchTarget({
                  point: r,
                  camera: t.getCamera(),
                  viewport: { width: i, height: l },
                  viewportInsets: o,
                })
                  .then((e) => {
                    let t = e?.hyperlink
                    n === v.current &&
                      t &&
                      e.slideIndex === b.slideIndex &&
                      e.elementId === b.elementId &&
                      t.id === b.hyperlink?.id &&
                      t.url === b.hyperlink.url &&
                      t.action === b.hyperlink.action &&
                      y?.(t)
                  })
                  .catch(() => {})
                return
              }
              if (
                (l.isActive() && l.clear(), c.focus({ preventScroll: !0 }), b && b.slideIndex !== n.selectedSlideIdx)
              ) {
                let t = v.current
                e.beginGridInteraction({ point: p.viewportPoint, selectOnly: !0 })
                  .then((n) => {
                    t === v.current && (n || e.clearElementSelection(), x(n?.elementId ?? null))
                  })
                  .catch(() => {
                    t === v.current && x(null)
                  })
                return
              }
              let C = b?.elementId ?? null
              ;(s && C && b
                ? (u({ elementId: C, point: b.point, mode: "move", corner: null }), f({ commit: !1 }))
                : e.setSelectedElementId(C),
                x(C))
            }),
            T = (t, n) => {
              let r = a.current?.count ?? 1
              l.requestActivation(() =>
                r >= 3
                  ? e.textSelectParagraphAtPoint(t)
                  : 2 === r
                    ? e.textSelectWordAtPoint(t)
                    : e.textPointerDown(t, { shiftKey: n.shiftKey }),
              )
            },
            A = (0, d.useEffectEvent)((e) => {
              let t = w.current,
                n = t?.target
              if (!t || !n?.interaction) return
              ;(m(),
                h(n.point),
                g(),
                (a.current = n.textBlockId && !e.shiftKey ? (0, tP.cX)(a.current, e, n.textBlockId) : null))
              let r = null != n.textBlockId && l.isActive()
              ;((C.current = { ...t, moved: !1, text: r }),
                r
                  ? T(n.point, e)
                  : (l.isActive() && l.clear(),
                    u({
                      ...n.interaction,
                      preserveRatio: e.shiftKey,
                      toggleSelection: e.shiftKey,
                      snapSuppressed: e.altKey,
                      altKey: e.altKey,
                      ctrlKey: e.ctrlKey,
                    })))
            }),
            P = (0, d.useEffectEvent)((t) => {
              let n = C.current
              if (!n) return
              let r = I(t, n)
              r &&
                (h(r),
                (n.moved = E(t, n)),
                n.moved && (a.current = null),
                n.text
                  ? l.pointerMove(r)
                  : n.moved &&
                    (p(),
                    e.updateElementInteraction({
                      nextPoint: r,
                      shiftKey: t.shiftKey,
                      snapSuppressed: t.altKey,
                      altKey: t.altKey,
                      ctrlKey: t.ctrlKey,
                    })))
            }),
            L = (0, d.useEffectEvent)((e) => {
              let t = C.current
              if (((C.current = null), !t?.target)) return
              let { target: r } = t,
                i = I(e, t)
              h(i)
              let a = "pointerup" === e.type && s && r.slideIndex === n.selectedSlideIdx,
                o = E(e, t)
              ;(t.text
                ? l.pointerUp()
                : (o && p(),
                  f({
                    commit: a && o,
                    ...(i
                      ? {
                          nextPoint: i,
                          shiftKey: e.shiftKey,
                          snapSuppressed: e.altKey,
                          altKey: e.altKey,
                          ctrlKey: e.ctrlKey,
                        }
                      : {}),
                  }),
                  a && !o && i && r.textBlockId && r.interaction?.mode === "move" && (T(i, e), l.pointerUp())),
                a && x(r.elementId))
            }),
            F = (0, d.useEffectEvent)(() => {
              ;(S(), (a.current = null))
              let e = C.current
              ;((C.current = null), e && (e.text ? l.pointerUp() : f({ commit: !1 })))
            }),
            R = (0, d.useEffectEvent)(() => {
              ;(F(), b())
            })
          return (
            (0, O.o)(() => {
              let e = r.current,
                n = (e) => {
                  "Escape" === e.key && (S(), t.cancelTouchInteraction() && (e.preventDefault(), e.stopPropagation()))
                }
              return (
                e?.addEventListener("keydown", n, !0),
                e?.ownerDocument.defaultView?.addEventListener("blur", F),
                t.setTouchInteractionHandlers({
                  shouldPan: j,
                  onTap: M,
                  onPinchStart: R,
                  onPointerDown: A,
                  onPointerMove: P,
                  onPointerEnd: L,
                  onPointerCancel: F,
                }),
                () => {
                  ;(e?.removeEventListener("keydown", n, !0),
                    e?.ownerDocument.defaultView?.removeEventListener("blur", F),
                    t.setTouchInteractionHandlers(void 0),
                    S())
                }
              )
            }, [r, S, t]),
            (0, O.o)(
              () => () => {
                t.cancelTouchInteraction()
              },
              [s, t, n.selectedSlideIdx],
            ),
            S
          )
        })({
          controller: t,
          runtime: n,
          snapshot: eI,
          containerRef: eF,
          overlayCanvasRef: eH,
          textEditSession: rB,
          effectiveViewportInsets: nH,
          isEditing: m,
          pointerToolActive: (t7 && G) || (t1 && $),
          pointerClickSequenceRef: eX,
          beginElementInteraction: tx,
          finishElementInteraction: tb,
          startDragObservation: ty,
          queuePresencePoint: tk,
          recordPresenceClick: tI,
          onHyperlinkClick: ee,
          onTapStart: () => {
            ;(tv(), nJ.clear(), nY.invalidate(), tT(!1), tZ(!1))
          },
          onSelectElement: (e) => {
            if (
              ((eJ.current = m ? e : null),
              tZ(null != e && tY && ra),
              !m && ei && !el && J?.annotation?.createCommentThreads !== !0)
            ) {
              let t = e ? n5.find((t) => "slide" !== t.target.kind && t.target.elementId === e) : null
              t ? ec?.(t.threadId) : eh?.()
            }
          },
          onPinchStart: () => {
            ;(rW(), (eX.current = null), nE(null), nM(null), ni(eH.current, eK))
          },
        })
      ;((0, d.useEffect)(
        () => (
          n.setOnCameraSettled(({ zoom: e }) => {
            t.setZoom(e)
          }),
          () => {
            n.setOnCameraSettled(null)
          }
        ),
        [t, n],
      ),
        (0, O.o)(() => {
          rB.setAccentColor(eP.accent ?? to.Or)
        }, [eP.accent, rB]),
        (0, O.o)(() => {
          var e
          let r,
            i,
            l,
            a,
            o,
            s = eH.current,
            d = eF.current,
            c = d?.ownerDocument.defaultView,
            u = () => rW()
          c?.addEventListener("blur", u)
          let p =
            d &&
            ((e = (e) => {
              ;(rB.setCaretBlinkEnabled(e), e || (nJ.cancel(), nJ.clear()))
            }),
            (i = (r = d.ownerDocument).defaultView),
            (l = !1),
            (a = () => e(l && r.hasFocus())),
            i?.addEventListener("focus", a),
            i?.addEventListener("blur", a),
            (o = Y(d, (e) => {
              ;((l = e.visible), a())
            })),
            () => {
              ;(i?.removeEventListener("focus", a), i?.removeEventListener("blur", a), o())
            })
          n.attachHost(eF.current)
          let h =
            eF.current && eO.current
              ? t.attachViewport({
                  host: eF.current,
                  canvas: eO.current,
                  overlayCanvas: eV.current,
                  focusTextInput: (e) => rB.focusActiveInput(e),
                })
              : void 0
          return (
            rB?.attachContainer(eF.current),
            n.start(),
            () => {
              ;(c?.removeEventListener("blur", u), p?.(), tw("detached"), rW(s), h?.(), n.dispose(), rB?.dispose())
            }
          )
        }, [rW, t, nJ.cancel, nJ.clear, tw, n, rB]),
        (function ({ controller: e, runtime: t, snapshot: n, viewportInsets: r }) {
          ;((0, O.o)(
            () =>
              e.subscribeToViewportFrames(() => {
                let n = e.getPresentedViewportCamera()
                n && t.recordPresentedCamera(n)
                let r = e.getViewTransitionCamera()
                r && t.adoptPresentedCamera(r)
              }),
            [e, t],
          ),
            (0, O.o)(() => {
              t.setViewState(
                {
                  selectedSlideIdx: n.selectedSlideIdx,
                  selectedSlideFrame: n.selectedSlideFrame,
                  gridLayout: n.gridLayout ?? null,
                  zoom: n.zoom,
                  camera: e.getViewportCamera(),
                },
                r,
              )
            }, [e, t, n.selectedSlideIdx, n.selectedSlideFrame, n.gridLayout, n.zoom, r]),
            (0, O.o)(() => {
              e.setViewportInsets(r, t.hasInitializedCamera() ? t.getCamera() : void 0, t.getContentBottomInset())
            }, [e, t, r]))
        })({ controller: t, runtime: n, snapshot: eI, viewportInsets: D }))
      let rG = a && null != eI.selectedSlideFrame && nV.width > 0 && nV.height > 0
      ;((0, d.useEffect)(() => {
        rG && n.fitToViewport()
      }, [rG, n]),
        (0, d.useEffect)(() => (n.setGestureObserverFactory(eM), () => n.setGestureObserverFactory(void 0)), [eM, n]),
        (0, d.useEffect)(() => {
          if (eI.textEditState?.activeBlockId) {
            eJ.current = null
            return
          }
          ;(1 === eI.selectedElementIds.length &&
            eI.primarySelectedElementId &&
            eI.textLayoutBlocks.some((e) => e.id === eI.primarySelectedElementId)) ||
            (eJ.current = null)
        }, [eI.primarySelectedElementId, eI.selectedElementIds, eI.textEditState, eI.textLayoutBlocks]),
        (0, O.o)(() => {
          let e = eF.current
          eI.selectedSlideFrame &&
            e &&
            rB.updateState({
              state: m ? eI.textEditState : null,
              revision: eI.textEditRevision,
              blocks: eI.textLayoutBlocks,
            })
        }, [m, eI.selectedSlideFrame, eI.textEditState, eI.textEditRevision, eI.textLayoutBlocks, rB]),
        (0, d.useEffect)(() => {
          "function" == typeof t.setEditingEnabled && t.setEditingEnabled(m)
        }, [t, m]))
      let r_ = null != i
      ;((0, d.useEffect)(() => {
        t.setLiveWidgetsEnabled(r_)
      }, [t, r_]),
        (0, d.useEffect)(() => {
          if (eT) return nt(eT, R, t)
        }, [t, eT, R]),
        (0, d.useEffect)(() => {
          m ||
            (tw("replaced"),
            rW(),
            rB.clear(),
            (eJ.current = null),
            (e$.current = null),
            (tl.current = null),
            (tu.current = null),
            (tm.current = !1),
            tT(!1),
            tg({ kind: "idle" }))
        }, [rW, tw, m, rB]))
      let rX = (0, d.useCallback)(() => {
          try {
            eF.current?.focus({ preventScroll: !0 })
          } catch {}
        }, []),
        rZ = (0, d.useCallback)(
          (e, t) => {
            let r = n.getCamera().k
            n.panByScroll(e / r, t / r)
          },
          [n],
        ),
        rJ = (0, d.useCallback)((...e) => n.createFitToViewportTransition(...e), [n]),
        rY = (0, d.useCallback)(() => {
          ;(tZ(!1), rX())
        }, [tZ, rX]),
        rQ = (0, d.useCallback)(() => {
          ;((nF.current = null), (nL.current = []), nP([]))
        }, []),
        r0 = (0, d.useCallback)(() => {
          ;((nC.current = null), (nw.current = !1), U?.(!1), (nv.current = !1), nm(null), nM(null), rX())
        }, [rX, U]),
        r1 = (0, d.useCallback)(() => !!nw.current && ((nv.current = !1), (0, e0.AE)(ny.current), !0), []),
        r2 = (0, d.useCallback)(
          (e) => {
            if (r1()) return
            let n = t.getSnapshot(),
              r = Math.max(0, Math.min(n.slideCount - 1, n.selectedSlideIdx + e))
            r !== n.selectedSlideIdx && t.setSelectedSlideIdx(r)
          },
          [r1, t],
        )
      ;(0, d.useEffect)(() => (n.setOnNavigateSlide(r2), () => n.setOnNavigateSlide(null)), [r2, n])
      let r4 = (0, d.useCallback)(
          (e) => {
            ;((nw.current = e), U?.(e), (nv.current = !1))
          },
          [U],
        ),
        r3 = (0, d.useCallback)(() => {
          t0.current || r1() || r0()
        }, [r1, r0]),
        r5 = (0, tn.D)(nx, W, rS),
        r6 = (0, te.q)({
          editingDisabledRef: t0,
          editorSessionRef: nx,
          lightDismissArmedRef: nv,
          editorRef: ny,
          pendingAnnotations: rS,
          blockWhileDictationBusy: r1,
          closeEditor: r3,
        })
      ;(0, tt.q)({
        active: $,
        disabled: tQ,
        onExit: () => {
          null != nx.current ? r6() : r1() || W?.(!1)
        },
      })
      let r8 = (0, d.useCallback)(
          (e) => {
            let t = n$.slideRect
            return t ? { x: t.left + e.x * t.scale, y: t.top + e.y * t.scale } : { x: e.x, y: e.y }
          },
          [n$.slideRect],
        ),
        r9 = (0, d.useCallback)(
          (e) => {
            null != e &&
              0 !== e.points.length &&
              t7 &&
              G &&
              ((nF.current = nX), (nL.current = [...nL.current, e]), nP(nL.current))
          },
          [nX, t7, G],
        ),
        r7 = (0, d.useCallback)(
          (e) => {
            if (0 === e.length) return
            let t = (0, e6.N5)(e),
              n = (0, e6.N5)(e.map((e) => ({ ...e, points: e.points.map(r8) }))),
              r = eF.current,
              i = eO.current
            if (!t || !n || !r || !i || !n$.slideRect) return
            let l = { width: r.clientWidth, height: r.clientHeight },
              a = e.reduce((e, t) => Math.max(e, t.strokeWidth), 0),
              o = (0, e6.f4)(
                (0, e6.$0)({ left: n.left - a / 2, top: n.top - a / 2, width: n.width + a, height: n.height + a }),
                l,
              ),
              s = { left: t.left, top: t.top, width: t.width, height: t.height },
              d = (0, tz.hy)(eI.selectedSlideElementTargets, s).flatMap((e) => {
                let t = eI.selectedSlideElementTargets.find((t) => t.id === e)
                return t
                  ? [
                      {
                        elementId: e,
                        frame: {
                          left: t.frame.left,
                          top: t.frame.top,
                          width: t.frame.width,
                          height: t.frame.height,
                          rotation: t.frame.rotation,
                        },
                      },
                    ]
                  : []
              }),
              c = (0, ex.wu)({ snapshot: eI, frame: s, viewportBounds: o, containedElements: d })
            if (!c) return
            let u = (0, e2.x)("drawing"),
              p = (0, ex.kt)(c)
            rN({ drawingId: u, artifactKind: "presentation", label: p, target: c, strokes: e })
            let h = { x: o.left + o.width / 2, y: o.top + o.height / 2 }
            ;(0, e6.M9)({
              cropRect: o,
              viewportSize: l,
              baseCanvas: i,
              overlayCanvases: [eV.current, eH.current],
              strokes: e,
              projectPoint: r8,
            })
              .then((t) => {
                let n = { ...t, commentId: u },
                  r = {
                    drawingId: u,
                    artifactKind: "presentation",
                    label: p,
                    target: c,
                    strokes: e,
                    screenshot: n,
                    browserCompatible: (0, e6.q3)({
                      drawingId: u,
                      screenshot: n,
                      markerViewportPoint: h,
                      viewportSize: l,
                    }),
                  }
                return J?.drawing?.onSubmit?.(r)
              })
              .catch((e) => {
                console.error("Failed to capture presentation drawing screenshot", e)
              })
          },
          [rN, r8, J?.drawing, eI, n$.slideRect],
        ),
        ie = async (e = "saved", n = "button", r, i, l = !1) => {
          if (t0.current) return
          let a = i ?? nx.current
          if (!a?.target) return
          let o = (r ?? a.body).trim()
          if (0 === o.length) return
          if ("edit" === a.mode) {
            rI(a.annotationId, { body: o })
            let t = {
              annotationId: a.annotationId,
              artifactKind: "presentation",
              label: (0, ex.o7)(a.target),
              body: o,
              target: a.target,
            }
            ;(J?.annotation?.onUpdate?.(t),
              "direct" === e && J?.annotation?.allowDirectSubmitOnEdit && J.annotation.onDirectSubmit?.(t, () => r5(a)),
              r0())
            return
          }
          let s = {
            annotationId: (0, e2.x)("annotation"),
            artifactKind: "presentation",
            label: (0, ex.o7)(a.target),
            body: o,
            target: a.target,
          }
          if ("comment" === a.intent) {
            let e = J?.annotation?.commentAuthor
            if (!ei || J?.annotation?.canComment === !1 || !J?.annotation?.createCommentThreads || null == e) return
            let n = a.target,
              r = "presentation-element-selection" === n.type ? (n.primaryElementId ?? n.elementIds[0]) : void 0
            if (("presentation-element-selection" === n.type && null == r) || nb.current) return
            ;((nb.current = !0), (l = l && J?.annotation?.canAssignToChatGpt !== !1))
            let i = { author: e, elementId: r, position: n.anchorPoint },
              d = l ? `@ChatGPT ${o}` : o,
              c = await t.addCommentThread(n.slideId, d, i).catch(() => null)
            if (((nb.current = !1), null == c)) return
            ;(r0(),
              tZ(!1),
              ec?.(c),
              J.annotation?.onCommentSubmitted?.({
                threadId: c,
                artifactKind: s.artifactKind,
                body: s.body,
                label: s.label,
                target: s.target,
                assignedToChatGpt: l,
              }))
            return
          }
          ;(rk(s),
            "direct" === e && J?.annotation?.onDirectSubmit
              ? J.annotation.onDirectSubmit(s, () => r5(a))
              : J?.annotation?.onSubmit?.(s),
            J?.annotation?.onSubmitted?.(s, e, n, { annotationMode: $ }),
            r0())
        }
      ;(0, d.useImperativeHandle)(e, () => ({
        startComment: () => ih(),
        requestChanges(e, n) {
          if (!t2 || !J?.annotation?.onSubmit || J.annotation.savedSubmitDisabled || r1()) return
          let r = t.getSnapshot(),
            i = ("slide" === n ? null : (0, ex.a6)({ snapshot: r })) ?? nc(r)
          i && ie("saved", "button", e, { mode: "create", intent: "ask", target: i, body: e })
        },
      }))
      let it = (e) => {
        if (t0.current) return
        nv.current = !1
        let t = nx.current
        if (!t) return
        let n = { ...t, body: e }
        ;((nx.current = n), nm(n))
      }
      !(function ({
        annotationMode: e,
        annotationEnabled: t,
        annotationEditingDisabled: n,
        annotationIntent: r,
        drawingMode: i,
        snapshot: l,
        annotationEditorSessionRef: a,
        annotationEditorLightDismissArmedRef: o,
        setAnnotationEditorSession: s,
        annotation: c,
      }) {
        let u = (0, d.useRef)(!1)
        ;(0, d.useEffect)(() => {
          let d = e && !u.current
          if (
            ((u.current = e),
            !d || !t || n || "ask" !== r || i || null != a.current || l.selectedSlideElementTargets.length > 0)
          )
            return
          let p = nc(l)
          p &&
            ((o.current = !1),
            c?.onStart?.("ask_codex_button", { annotationMode: !0 }),
            s({ mode: "create", intent: "ask", target: p, markerAtAnchor: !0, body: "" }))
        }, [n, t, r, e, i, c, a, o, s, l])
      })({
        annotationMode: $,
        annotationEnabled: t1,
        annotationEditingDisabled: tQ,
        annotationIntent: q,
        drawingMode: G,
        snapshot: eI,
        annotationEditorSessionRef: nx,
        annotationEditorLightDismissArmedRef: nv,
        setAnnotationEditorSession: nm,
        annotation: J?.annotation,
      })
      let ir = t3 && ne?.mode === "create" && "comment" === ne.intent,
        ii = null != n8 && ir ? "solid" : void 0,
        il = rg ? 1 : 2
      ;("solid" === ii && (il = 1.25),
        (0, d.useEffect)(() => {
          ;(t1 || ir || (ne?.mode === "edit" && J?.annotation?.canAssignToChatGpt !== !1) || nm(null),
            (t1 && $ && !tQ) || (nM(null), nE(null)))
        }, [t1, ne?.mode, tQ, $, ir, J?.annotation?.canAssignToChatGpt]),
        (0, d.useEffect)(() => {
          if (t7 && G) {
            ;(nm(null), nM(null), nE(null), nk(!1), t.setHoveredElementId(null))
            return
          }
          let e = Z !== nD.current
          ;(rq(), nL.current.length > 0 && !e && rQ())
        }, [rq, rQ, t, Z, t7, G]),
        (0, d.useEffect)(() => {
          if (Z === nD.current) return
          nD.current = Z
          let e = nL.current
          ;(0 === e.length || r7(e), rQ())
        }, [rQ, Z, r7]),
        (0, d.useEffect)(() => {
          if (!t1 || !$) {
            ;(nk(!1), t.setHoveredElementId(null))
            return
          }
          ;(nk(!1), t.setHoveredElementId(null))
        }, [t1, $, t]),
        (0, d.useEffect)(() => {
          !ne || t0.current || (ne.target.slideId !== nX && (ng(null), nM(null), nE(null), nm(null)))
        }, [ne, nX]),
        (0, d.useEffect)(() => {
          let e = nC.current
          if (null == e) return
          let t = rS.find((t) => t.annotationId === e.annotationId)
          t1 && null != t && eI.slideIds.includes(t.target.slideId)
            ? t.target.slideId === nX && ((nC.current = null), rw(t, e.preview))
            : (nC.current = null)
        }, [t1, nX, rw, rS, eI]),
        (0, d.useEffect)(
          () => () => {
            nC.current = null
          },
          [t, J?.annotation?.artifactKey],
        ),
        (0, O.o)(
          () => () => {
            rq()
          },
          [rq, nX],
        ),
        (0, d.useEffect)(() => {
          null != nF.current && nF.current !== nX && rQ()
        }, [rQ, nX]),
        (0, d.useEffect)(() => {
          let e = eF.current,
            t = eH.current,
            n = t7 && G ? "crosshair" : t1 && !tQ && $ && !ne ? e8.Gz : ""
          return (
            e && (e.style.cursor = n),
            t && (t.style.cursor = n),
            () => {
              ;(e && e.style.cursor === n && (e.style.cursor = ""), t && t.style.cursor === n && (t.style.cursor = ""))
            }
          )
        }, [ne, t1, tQ, $, t7, G]),
        (0, d.useEffect)(() => {
          if (!ne) return
          let e = (e) => {
            let t = e.target
            !(t instanceof Node) ||
              (0, e0.lN)(ny.current, t) ||
              (t instanceof HTMLElement && t.closest("[data-popcorn-annotation-marker='true']")) ||
              (t instanceof Element &&
                t.closest("[data-popcorn-annotation-refresh='true'], [data-popcorn-comment-create='true']")) ||
              eF.current?.contains(t) ||
              r6()
          }
          return (
            document.addEventListener("mousedown", e, !0),
            () => {
              document.removeEventListener("mousedown", e, !0)
            }
          )
        }, [ne, r6]),
        (function ({
          controller: e,
          runtime: t,
          snapshot: n,
          snapshotProp: r,
          layoutSnapshot: i,
          accentColor: l,
          overlayCanvasRef: a,
          textEditSession: o,
          overlayVersion: s,
          drawingMode: c,
          annotationMode: u,
        }) {
          let p = null == l ? void 0 : (0, to.SB)(l),
            h = null == l ? void 0 : (0, to.rO)(l, 0.12)
          ;(0, O.o)(() => {
            e.setSelectionOverlayOptions({ drawingMode: c, annotationMode: u, accentStroke: p, accentFill: h })
          }, [e, c, u, p, h])
          let m = (0, d.useRef)(r)
          m.current = r
          let f = (0, d.useCallback)(() => {
            let n = a.current
            if (!n) return
            let r = m.current ?? e.getSnapshot(),
              i = t.getLayoutSnapshot(),
              l = i.width,
              s = i.height,
              d =
                t$(
                  l,
                  s,
                  e.getPresentedViewportCamera() ?? t.getCamera(),
                  r.selectedSlideFrame,
                  i.viewportInsets,
                  r.gridLayout,
                  r.selectedSlideIdx,
                ) ?? r.slideRect
            if (l <= 0 || s <= 0) return
            let c = window.devicePixelRatio || 1,
              u = Math.max(1, Math.round(l * c)),
              p = Math.max(1, Math.round(s * c))
            ;(n.width !== u || n.height !== p) && ((n.width = u), (n.height = p))
            let h = `${l}px`,
              f = `${s}px`
            ;(n.style.width !== h && (n.style.width = h), n.style.height !== f && (n.style.height = f))
            let g = n.getContext("2d")
            if (g) {
              if ((g.setTransform(c, 0, 0, c, 0, 0), g.clearRect(0, 0, l, s), !d || !r.selectedSlideFrame))
                return void o.setViewportTransform(null)
              o.drawViewportOverlay(g, { left: d.left, top: d.top, scale: d.scale })
            }
          }, [e, a, t, o])
          ;((0, O.o)(() => e.subscribeToViewportFrames(f), [e, f]),
            (0, O.o)(() => {
              f()
            }, [f, i.height, i.width, s, n.selectedSlideFrame, n.textEditState, n.textLayoutBlocks, o]))
        })({
          controller: t,
          runtime: n,
          snapshot: eI,
          snapshotProp: l,
          layoutSnapshot: nV,
          accentColor: eP.accent,
          overlayCanvasRef: eH,
          textEditSession: rB,
          overlayVersion: tE,
          drawingMode: G,
          annotationMode: $,
        }))
      let ia = (e, t, n = { x: e.clientX, y: e.clientY }) => {
          ;(tx(t),
            nn(e, eK),
            (e$.current = "element"),
            (tl.current = t.elementId),
            (tc.current = e.shiftKey),
            (tu.current = n),
            (tm.current = !1),
            ("move" !== t.mode ||
              e.altKey ||
              e.shiftKey ||
              e.ctrlKey ||
              e.metaKey ||
              (eJ.current && eJ.current !== t.elementId)) &&
              (eJ.current = null))
        },
        io = (e, r) => {
          let i = n.getCamera(),
            l = rV.current
          if (l)
            return l.pointerId !== e.pointerId
              ? void 0
              : r
                ? ((l.latest = na(e)), (l.ended = !0), (l.commit = r), nr(e, eK), void rK())
                : void rH()
          if ((r || (eX.current = null), t7 && G)) {
            if (eK.current !== e.pointerId) return
            let t = tK(e, eF.current, i, eI, nH)
            ;(tk(t), r && t && nT.current?.append([t]))
            let n = nT.current?.end() ?? null
            ;(nr(e, eK), (nR.current = null), r && r9(n))
            return
          }
          if (t1 && $) {
            if (
              tQ ||
              (null != eK.current && eK.current !== e.pointerId) ||
              (tk(tK(e, eF.current, i, eI, nH)), nr(e, eK), nE(null), nM(null), !r || !nI)
            )
              return
            let n = tK(e, eF.current, i, eI, nH)
            if (!n) return
            let l = (0, tz.UW)(nI.start, n),
              a = 6 > Math.hypot(n.x - nI.start.x, n.y - nI.start.y)
            if (a) {
              if (nI.clickedElementTarget) {
                switch (nI.draftClickAction) {
                  case "keep":
                  case "close":
                    r6()
                    return
                }
                let e = nI.clickedElementTarget,
                  r = (0, ex.a6)({
                    snapshot: eI,
                    elementIds: [e.id],
                    primaryElementId: e.id,
                    frame: e.frame,
                    anchorPoint: n,
                  })
                if (!r) return
                ;(t.setHoveredElementId(null),
                  nk(!1),
                  "comment" === q
                    ? J?.annotation?.onCommentDraftOpen?.()
                    : J?.annotation?.onStart?.("annotation_mode_pointer", { annotationMode: $ }),
                  (nv.current = !1),
                  nm({ mode: "create", intent: q, target: r, body: "" }))
                return
              }
              switch (nI.draftClickAction) {
                case "keep":
                case "close":
                  r6()
                  return
              }
            }
            let o = (0, ex.Cz)({
              snapshot: eI,
              frame: a ? { left: n.x, top: n.y, width: 0, height: 0 } : l,
              anchorPoint: n,
              containedElements: a ? [] : rx,
            })
            if (!o) return
            ;("comment" === q
              ? J?.annotation?.onCommentDraftOpen?.()
              : J?.annotation?.onStart?.("annotation_mode_pointer", { annotationMode: $ }),
              (nv.current = !1),
              nm({ mode: "create", intent: q, target: o, body: "" }))
            return
          }
          if (null != eK.current && eK.current !== e.pointerId) return
          let a = e$.current
          if (!a) return
          let o = tK(e, eF.current, i, eI, nH)
          if ((tk(o), nr(e, eK), "hyperlink" === a)) {
            ;((e$.current = null), nJ.complete(e, o, i.k, r))
            return
          }
          if ("table" === a) {
            let n = tl.current
            ;((e$.current = null),
              (tl.current = null),
              n &&
                t.tableEditing.interact(
                  r
                    ? { tableId: n, type: "pointer-up", point: o ?? void 0, shiftKey: e.shiftKey }
                    : { tableId: n, type: "pointer-cancel" },
                ),
              tZ(tY && ra))
            return
          }
          if ("text" === a) {
            ;((e$.current = null), rB.pointerUp(), (e.currentTarget.style.cursor = "text"), tT(!0), tZ(r && tY && ra))
            return
          }
          if ("marquee" === a) {
            ;((e$.current = null),
              (tl.current = null),
              (tu.current = null),
              (tm.current = !1),
              r && o && t.updateSelectionMarquee({ nextPoint: o }),
              t.endSelectionMarquee({ commit: r }),
              tZ(tY && ra))
            return
          }
          e$.current = null
          let s = tl.current,
            d = tu.current,
            c =
              tm.current ||
              !!(o && d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > ("touch" === e.pointerType ? 8 : 2)),
            u = !!r && !c && null != s && !tc.current && !e.shiftKey && eI.textLayoutBlocks.some((e) => e.id === s),
            p = u && eJ.current === s && 1 === eI.selectedElementIds.length && null != o
          if (
            ((tl.current = null),
            (tu.current = null),
            (tm.current = !1),
            c && ty(),
            tb({
              commit: r && !p && ("touch" !== e.pointerType || c),
              ...(o
                ? { nextPoint: o, shiftKey: e.shiftKey, snapSuppressed: e.altKey, altKey: e.altKey, ctrlKey: e.ctrlKey }
                : {}),
            }),
            p)
          ) {
            let t = eX.current?.count ?? 1
            ;(t >= 3
              ? rB.selectParagraphAtPoint(o)
              : 2 === t
                ? rB.selectWordAtPoint(o)
                : rB.tryPointerDown(o, { shiftKey: e.shiftKey, restrictToBlockId: s })) &&
              (rB.pointerUp(), (e.currentTarget.style.cursor = "text"), tT(!0))
          }
          ;((eJ.current = u ? s : null), tZ(null != s && tY && ra))
        },
        is = (e) => {
          if (("Shift" !== e.key && "Alt" !== e.key) || (0, M.tr)(e.target) || rB.isActive()) return !1
          let r = rV.current
          if (r && !r.ended)
            return (
              (r.latest = { ...r.latest, shiftKey: e.shiftKey, altKey: e.altKey, ctrlKey: e.ctrlKey }),
              rK(),
              e.preventDefault(),
              !0
            )
          if ("element" !== e$.current && "table" !== e$.current) return !1
          let i = n.getCamera(),
            l = tp.current
          if (!l) return !1
          let a = tK(l, eF.current, i, eI, nH)
          return (
            !!a &&
            ("table" === e$.current && tl.current
              ? t.tableEditing.interact({ type: "pointer-move", tableId: tl.current, point: a, shiftKey: e.shiftKey })
              : t.updateElementInteraction({
                  nextPoint: a,
                  shiftKey: e.shiftKey,
                  altKey: e.altKey,
                  snapSuppressed: e.altKey,
                  ctrlKey: e.ctrlKey,
                }),
            e.preventDefault(),
            !0)
          )
        },
        id = m && !$ && !G,
        ic =
          !tQ &&
          !m &&
          (t2 || (J?.annotation?.canComment === !0 && t3)) &&
          !$ &&
          !G &&
          "idle" === tf.kind &&
          "element" !== eI.activeInteractionKind &&
          !tY &&
          !ne &&
          !eI.textEditState?.activeBlockId,
        iu = !tQ && t2 && (J?.annotation?.onDirectSubmit != null || J?.annotation?.onSubmit != null),
        ip = (e) => {
          if (t0.current || !rd || r1()) return
          let t = !$ && J?.annotation?.enterModeOnContextualRequest === !0
          ;(t && W?.(!0),
            J?.annotation?.onStart?.(e, { annotationMode: $ || t }),
            (nv.current = !1),
            nm({
              mode: "create",
              intent: "ask",
              placeholder: eI.inspector.selectedElement?.image?.isPlaceholder ? "Describe an image" : void 0,
              target: rd,
              body: "",
            }))
        },
        ih = (e) => {
          if (!t3 || r1() || null != nx.current) return
          let t = rd ?? nc(eI)
          null != t &&
            (J?.annotation?.onCommentDraftOpen?.(),
            null != e && J?.annotation?.onStart?.(e, { annotationMode: $, intent: "comment" }),
            (nv.current = !1),
            nm({ mode: "create", intent: "comment", target: t, body: "" }))
        },
        im = (0, d.useRef)(ih)
      ;((im.current = ih),
        (0, d.useImperativeHandle)(
          J?.annotation?.commentComposerRef,
          () => (t3 ? { startComment: () => im.current() } : null),
          [t3],
        ))
      let ig =
          ro && rd && (iu || null != n0.request || t3 || null != rr)
            ? {
                creationRequest: n0.request,
                activeRequest: rr,
                askForEditLabel: J?.annotation?.askForEditLabel ?? J?.annotation?.getAskForEditLabel?.(),
                opensAnnotationEditor: J?.annotation?.enterModeOnContextualRequest,
                defaultSubmitMode: J?.annotation?.defaultCreateSubmitMode,
                savedSubmitDisabled: J?.annotation?.savedSubmitDisabled,
                onAskForEditShown: J?.annotation?.onAskForEditShown == null ? void 0 : ru,
                startAskChat: iu
                  ? (e) => {
                      t0.current ||
                        (J?.annotation?.enterModeOnContextualRequest
                          ? ip(e)
                          : J?.annotation?.onStart?.(e, { annotationMode: $ }))
                    }
                  : void 0,
                submitAskChat: iu
                  ? (e, t, n) => {
                      if (!rd) return
                      let r = J?.annotation?.defaultCreateSubmitMode ?? "direct"
                      ie(n ? ("direct" === r ? "saved" : "direct") : r, t, e, {
                        mode: "create",
                        intent: "ask",
                        target: rd,
                        body: e,
                      })
                    }
                  : void 0,
                startComment: t3 ? ih : void 0,
              }
            : null,
        ix = (() => {
          if (
            ne?.mode === "create" &&
            "comment" === ne.intent &&
            ei &&
            J?.annotation?.canComment !== !1 &&
            J?.annotation?.createCommentThreads === !0
          )
            return J.annotation
        })(),
        ib =
          ne?.mode === "create" && "ask" === ne.intent
            ? ne.placeholder
            : null != ix && ne?.mode === "create" && "comment" === ne.intent
              ? (ix.nativeFileCommentPlaceholder ?? "Add a comment")
              : void 0,
        iy = (() => {
          if (ne?.mode !== "create" || null == ix) return
          let e = {
            value: ne.body,
            canAssignToChatGpt: ix.canAssignToChatGpt,
            initialAssignedToChatGpt: !1,
            onChange: it,
            onCancel: r3,
            onSubmit: ({ body: e, assignedToChatGpt: t, submitSource: n }) => {
              ie("direct", n, e, void 0, t)
            },
          }
          return null != ix.renderCommentComposer
            ? ix.renderCommentComposer(e)
            : (0, r.jsx)(ef.h, {
                mode: "create",
                canAssignToChatGpt: e.canAssignToChatGpt,
                chatGptSubmitDisabledReason: ix.comments?.chatGptSubmitDisabledReason,
                renderInput: ix.renderCommentInput,
                initialValue: e.value,
                labels: { heading: ix.nativeFileCommentLabel, placeholder: ib },
                onChange: e.onChange,
                onCancel: e.onCancel,
                onSubmit: (t) => (e.onSubmit(t), !0),
              })
        })(),
        iv = (() => {
          if (null == ne) return
          if ("edit" === ne.mode) return ne.annotationId
          let { intent: e, target: t } = ne,
            n =
              "presentation-element-selection" === t.type
                ? t.elementIds.join(",")
                : [t.frame.left, t.frame.top, t.frame.width, t.frame.height].join(",")
          return `${e}:${t.slideId}:${t.type}:${n}`
        })()
      return (0, r.jsx)("div", {
        ref: eA,
        className: "relative flex h-full min-h-0 flex-col",
        style: { ...eL, ...("codex" === R ? T.y : void 0), backgroundColor: eR },
        children: (0, r.jsxs)("div", {
          ref: eF,
          "data-testid": "popcorn-presentation-stage",
          "data-popcorn-table-focus-owner": !0,
          tabIndex: 0,
          ...(function ({ controller: e, snapshot: t, isTextEditing: n, isEditing: r, reportClipboardInteraction: i }) {
            async function l(t, l) {
              if (t.defaultPrevented || n() || (0, M.tr)(t.target)) return
              let { slideIds: a, selectedSlideIdx: o, presentationVersion: s, selectedElementIds: d } = e.getSnapshot(),
                c = a[o]
              if (c && 0 !== d.length && (i(l), "cut" !== l || r))
                try {
                  let n = await (0, tF.KC)(
                    t,
                    () => e.requestShapeClipboard(),
                    (t) => e.requestShapeClipboardPng(t, c, s),
                  )
                  "cut" === l &&
                    n &&
                    e.dispatch({
                      kind: "delete-selected-element",
                      clipboardSelection: { slideId: c, presentationVersion: s, selectedElementIds: d },
                    })
                } catch (e) {
                  console.error(`Failed to ${l} presentation shapes`, e)
                }
            }
            return {
              onCopy: (e) => void l(e, "copy"),
              onCut: (e) => void l(e, "cut"),
              onPaste: (l) => {
                if (l.defaultPrevented || n() || (0, M.tr)(l.target)) return
                i("paste")
                let a = (0, tF.fm)(l.clipboardData),
                  o = l.clipboardData.getData("text/html"),
                  s = l.clipboardData.getData("text/plain"),
                  d = Array.from(l.clipboardData.files ?? [])
                if ((null === a && !o && !s && 0 === d.length) || (l.preventDefault(), l.stopPropagation(), !r)) return
                if (null !== a) return void e.dispatch({ kind: "paste-shapes", serialized: a })
                let c = t.slideIds[t.selectedSlideIdx],
                  u = (t) => {
                    let n = e.getSnapshot()
                    0 !== t.length &&
                      n.slideIds[n.selectedSlideIdx] === c &&
                      e.dispatch({ kind: "paste-content", parts: t })
                  }
                ;(async function (e, t) {
                  let n = [],
                    r = e.files.filter((e) => e.type.startsWith("image/")),
                    i = 0,
                    l = async (e, n) => {
                      try {
                        let l = r[i++]
                        if (!l) {
                          if (!/^(https?:|data:image\/|blob:)/i.test(e)) return null
                          let t = await fetch(e, { credentials: "omit", referrerPolicy: "no-referrer" })
                          if (!t.ok) return null
                          let r = await t.blob()
                          l = new File([r], n || "Pasted image", { type: r.type })
                        }
                        let a = await t(await (0, tr.I)(l))
                        return { kind: "image", image: a }
                      } catch {
                        return n ? { kind: "text", html: "", plainText: n } : null
                      }
                    }
                  if (e.html && e.html.length <= tR.ri) {
                    let t = new DOMParser().parseFromString(e.html, "text/html"),
                      r = Array.from(t.querySelectorAll("style"), (e) => e.outerHTML).join(""),
                      i = t.querySelector("base[href]")?.getAttribute("href")
                    t.querySelectorAll("script,style,iframe,object,embed,template,noscript,[hidden]").forEach((e) =>
                      e.remove(),
                    )
                    let a = (e, n) => {
                        let i = e
                        for (let e = n; e instanceof Element && e !== t.documentElement; e = e.parentElement) {
                          let t = e.cloneNode(!1)
                          ;(t.appendChild(i), (i = t))
                        }
                        let l = t.createElement("div")
                        return (l.appendChild(i), r + l.innerHTML)
                      },
                      o = t.createRange()
                    o.setStart(t.body, 0)
                    let s = () => {
                      let e = o.cloneContents(),
                        t = e.textContent ?? ""
                      t.trim() && n.push({ kind: "text", plainText: t, html: a(e, o.commonAncestorContainer) })
                    }
                    for (let e of Array.from(t.body.querySelectorAll("table,img")).filter(
                      (e) => !e.parentElement?.closest("table"),
                    )) {
                      if ((o.setEndBefore(e), s(), e instanceof HTMLTableElement)) {
                        let t = Array.from(e.rows),
                          r = [],
                          i = [],
                          l = t.length <= 100
                        for (let [e, n] of t.entries()) {
                          if (!l) break
                          let t = 0
                          for (let o of Array.from(n.cells)) {
                            for (; i[e]?.[t];) t += 1
                            let n = Math.max(1, o.rowSpan),
                              s = Math.max(1, o.colSpan)
                            if (e + n > 100 || t + s > 100) {
                              l = !1
                              break
                            }
                            ;(r[e] ??= [])[t] = a(o.cloneNode(!0), o.parentNode)
                            for (let r = e; r < e + n; r += 1) {
                              let e = (i[r] ??= [])
                              for (let n = t; n < t + s; n += 1) e[n] = !0
                            }
                            t += s
                          }
                        }
                        l && n.push({ kind: "table", html: a(e.cloneNode(!0), e.parentNode), cellHtml: r })
                      } else {
                        let t = e.getAttribute("src") ?? ""
                        if (i && /^https?:/i.test(i))
                          try {
                            t = new URL(t, i).href
                          } catch {}
                        n.push(l(t, e.getAttribute("alt") ?? ""))
                      }
                      o.setStartAfter(e)
                    }
                    ;(o.setEnd(t.body, t.body.childNodes.length), s())
                  }
                  if (0 === n.length && r.length > 0) for (let e of r) n.push(l("", e.name))
                  let a = (await Promise.all(n)).filter((e) => null !== e)
                  return 0 === a.length && e.plainText ? [{ kind: "text", html: "", plainText: e.plainText }] : a
                })({ html: o, plainText: s, files: d }, (t) => e.prepareImage(t))
                  .then(u)
                  .catch((e) => {
                    ;(console.error("Failed to read presentation clipboard", e),
                      s && u([{ kind: "text", html: "", plainText: s }]))
                  })
              },
            }
          })({
            controller: t,
            snapshot: eI,
            isTextEditing: () => rB.isActive(),
            isEditing: m,
            reportClipboardInteraction: eD,
          }),
          onKeyDown: (e) => {
            var r
            let i
            if (is(e) || (0, M.tr)(e.target)) return
            if ((eN(e, { includeViewportActions: "0" !== e.key }), "Escape" === e.key && rW())) {
              ;(tZ(tY && ra), e.preventDefault(), e.stopPropagation())
              return
            }
            if (
              t1 &&
              !tQ &&
              !ne &&
              !G &&
              !e.repeat &&
              !e.nativeEvent.isComposing &&
              (e.metaKey || e.ctrlKey) &&
              !e.altKey &&
              e.shiftKey &&
              "x" === e.key.toLowerCase()
            ) {
              if (!rd) return
              ;(ip("ask_codex_shortcut"), e.preventDefault(), e.stopPropagation())
              return
            }
            if ("Escape" === e.key && G) {
              ;(X?.(!1), e.preventDefault())
              return
            }
            if (
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey &&
              !e.shiftKey &&
              0 === eI.selectedElementIds.length &&
              ("ArrowLeft" === e.key || "ArrowRight" === e.key || "ArrowUp" === e.key || "ArrowDown" === e.key)
            ) {
              ;(e.preventDefault(), r2("ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 1))
              return
            }
            if ("Escape" === e.key && ne) {
              ;(r6(), e.preventDefault())
              return
            }
            if ("Escape" === e.key && $ && !tQ) {
              ;(W?.(!1), nM(null), e.preventDefault())
              return
            }
            if (
              ("/" === e.key || "ContextMenu" === e.key || ("F10" === e.key && e.shiftKey)) &&
              !rB.isActive() &&
              !$ &&
              !G &&
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey
            ) {
              ;(tZ(ro), ro && e.preventDefault())
              return
            }
            if ("Escape" === e.key && rs && !m) {
              ;(tZ(!1), e.preventDefault())
              return
            }
            if (!m) {
              if (nl(e, n, eI, L)) return
              !(0, M.Ul)(e) ||
                $ ||
                ne ||
                G ||
                rB.isActive() ||
                !(eI.selectedElementIds.length > 0) ||
                ("Backspace" !== e.key && "Delete" !== e.key) ||
                L?.("delete-selection")
              return
            }
            if ($) return void nl(e, n, eI, L)
            if (
              G ||
              ne ||
              ((r = e.nativeEvent),
              null == (i = (0, ns.Z)(r)) ||
                r.defaultPrevented ||
                0 === t.getSnapshot().selectedElementIds.length ||
                (r.preventDefault(),
                r.stopPropagation(),
                r.repeat || r.isComposing || 229 === r.keyCode || t.dispatch({ kind: "toggle-text-format", format: i }),
                !1))
            ) {
              if (rB.isActive()) {
                "Escape" === e.key && (rB.clear(), e.preventDefault())
                return
              }
              if (
                !(
                  !G &&
                  !ne &&
                  (function (e, t, n) {
                    if (
                      !(0, M.Ul)(e, { allowShift: !0, requirePrimaryModifier: !0 }) ||
                      1 !== n.selectedElementIds.length ||
                      null != n.activeInteractionKind ||
                      ("ArrowUp" !== e.key && "ArrowDown" !== e.key)
                    )
                      return !1
                    let r = e.shiftKey ? "bring-to-front" : "bring-forward",
                      i = e.shiftKey ? "send-to-back" : "send-backward"
                    return (
                      t.reorderSelectedElement("ArrowUp" === e.key ? r : i),
                      e.preventDefault(),
                      e.stopPropagation(),
                      !0
                    )
                  })(e, t, eI)
                ) &&
                !(function (e, t, n) {
                  let r = t?.getSnapshot()
                  if (!t || !r?.selection || e.altKey) return !1
                  let i = {
                    ArrowLeft: "left",
                    ArrowRight: "right",
                    ArrowUp: "up",
                    ArrowDown: "down",
                    Tab: e.shiftKey ? "previous" : "next",
                  }[e.key]
                  if (!i || e.metaKey || e.ctrlKey)
                    if ((e.metaKey || e.ctrlKey) && "a" === e.key.toLowerCase())
                      t.interact({ tableId: r.tableId, type: "select-all" })
                    else if ("Backspace" === e.key || "Delete" === e.key)
                      t.edit({ tableId: r.tableId, type: "clear-cells", range: r.selection.range })
                    else {
                      if ("Enter" !== e.key && "F2" !== e.key) return !1
                      let t = r.activeCell
                      t && n.activateBlockEnd((0, no.A)(r.tableId, t.cellId))
                    }
                  else
                    t.interact({
                      tableId: r.tableId,
                      type: "navigate",
                      direction: i,
                      extend: "Tab" !== e.key && e.shiftKey,
                    })
                  return (e.preventDefault(), !0)
                })(e, t.tableEditing, rB)
              ) {
                if (
                  !G &&
                  !ne &&
                  null == eI.activeInteractionKind &&
                  "a" === e.key.toLowerCase() &&
                  (0, M.Ul)(e, { requirePrimaryModifier: !0 })
                ) {
                  ;(t.selectAllSlideElements(), e.preventDefault(), e.stopPropagation())
                  return
                }
                if (
                  "Escape" === e.key &&
                  !e.defaultPrevented &&
                  (0, M.Ul)(e) &&
                  e.target instanceof Element &&
                  e.currentTarget.contains(e.target) &&
                  u.isPanelOpen(ea)
                ) {
                  ;(t.clearElementSelection(), u.closePanel(ea), tZ(!1), e.preventDefault(), e.stopPropagation())
                  return
                }
                if ("Escape" === e.key && rs) {
                  ;(tZ(!1), e.preventDefault())
                  return
                }
                if ("Enter" === e.key && 1 === eI.selectedElementIds.length && eI.primarySelectedElementId) {
                  rB.activateBlockEnd(eI.primarySelectedElementId) && e.preventDefault()
                  return
                }
                if ("Backspace" === e.key || "Delete" === e.key) {
                  ;((0, M.Ul)(e) && eI.selectedElementIds.length > 0 && L?.("delete-selection"),
                    t.deleteSelectedElement() && e.preventDefault())
                  return
                }
                if (!e.metaKey && !e.ctrlKey && !e.altKey && eI.selectedElementIds.length > 0) {
                  let n = (0, M.pv)(e.key, e.shiftKey)
                  if (n && t.nudgeSelectedElements(n)) return void e.preventDefault()
                }
                if ((e.metaKey || e.ctrlKey) && "z" === e.key.toLowerCase()) {
                  ;(e.shiftKey ? t.redo() : t.undo(), e.preventDefault())
                  return
                }
                if ((e.metaKey || e.ctrlKey) && "y" === e.key.toLowerCase()) {
                  ;(t.redo(), e.preventDefault())
                  return
                }
                if (nl(e, n, eI, L)) return
              }
            }
          },
          onKeyUp: (e) => {
            is(e)
          },
          className: "relative min-h-0 flex-1 touch-none overflow-clip outline-none",
          children: [
            (0, r.jsx)("div", { ref: N, className: "pointer-events-none absolute inset-0", style: nG }),
            (0, r.jsx)("div", {
              ref: eB,
              "data-testid": "popcorn-presentation-overlay-boundary",
              className: "pointer-events-none absolute inset-0",
              style: {
                top: nH.top ?? 0,
                right: Math.max(nH.right ?? 0, (nH.fitRightInset ?? 0) - 8),
                bottom: nH.bottom ?? 0,
                left: Math.max(nH.left ?? 0, z ?? 0, (nH.fitLeftInset ?? 0) - 8),
              },
            }),
            (0, r.jsx)("canvas", {
              ref: eO,
              "data-testid": "popcorn-presentation-canvas",
              className: (0, s.A)("absolute inset-0 h-full w-full select-none"),
            }),
            (0, r.jsx)(nd, {
              renderer: c,
              controller: t,
              snapshot: eI,
              viewport: eF,
              camera: nO,
              viewportInsets: nH,
              enabled: id,
              textEditing: rB.isActive(),
              contextToolbarEligible: "context-menu" === rt.trigger && ro,
              selectionBoundsSource: nq,
              requestToolbar: () => tZ(!0),
              children: (0, r.jsx)("canvas", {
                ref: eH,
                "data-testid": "popcorn-presentation-overlay",
                style: tM ? { cursor: "text" } : void 0,
                onPointerDown: (e) => {
                  if ((nJ.clear(), nY.invalidate(), n.shouldSuppressMouseInteractions())) return
                  ;(rU(),
                    "touch" === e.pointerType && e.preventDefault(),
                    0 === e.button && (null == eK.current || eK.current === e.pointerId) && tv())
                  let r = n.getCamera()
                  if (
                    ((null == eK.current || eK.current === e.pointerId) &&
                      (tp.current = { clientX: e.clientX, clientY: e.clientY }),
                    tT(!1),
                    tZ(!1),
                    "touch" !== e.pointerType && eF.current?.focus(),
                    r$(e, rW))
                  )
                    return
                  let i = tK(e, eF.current, r, eI, nH)
                  if (0 !== e.button || (e.ctrlKey && /Mac|iPhone|iPad/.test(navigator.platform))) {
                    eX.current = null
                    return
                  }
                  if ((0 === e.button && i && tI(), tk(i), t7 && G)) {
                    if (((eX.current = null), !i || null != eK.current)) return
                    ;(nn(e, eK),
                      (nR.current = () => {
                        ni(eH.current, eK)
                      }),
                      nT.current?.start({ color: e6.$I, strokeWidth: 3, points: [i] }),
                      e.preventDefault(),
                      e.stopPropagation())
                    return
                  }
                  if (t1 && !tQ && !$ && nx.current && !r6()) {
                    ;(e.preventDefault(), e.stopPropagation())
                    return
                  }
                  if (t1 && $) {
                    if (tQ) return
                    if (((eX.current = null), r1())) {
                      ;(e.preventDefault(), e.stopPropagation())
                      return
                    }
                    let n = nx.current,
                      l = n?.mode !== "create" ? "replace" : 0 === n.body.trim().length ? "close" : "keep"
                    if ((null != n && "replace" === l && nm(null), !i)) {
                      ;(null != n && "replace" !== l && r6(), nE(null), nM(null))
                      return
                    }
                    let a = (0, tz.yu)(eI.selectedSlideElementTargets, i, r.k)
                    t.setHoveredElementId(a)
                    let o = null == a ? null : (eI.selectedSlideElementTargets.find((e) => e.id === a) ?? null)
                    ;(nE({ pointerId: e.pointerId, start: i, draftClickAction: l, clickedElementTarget: o }),
                      nn(e, eK),
                      nM(null),
                      e.preventDefault(),
                      e.stopPropagation())
                    return
                  }
                  if (!i) {
                    ;((eX.current = null),
                      !ei || m || el || eh?.(),
                      rB?.isActive() && rB.clear(),
                      t.clearElementSelection(),
                      (eJ.current = null))
                    return
                  }
                  if (null == eK.current && nJ.begin(e, i, r.k)) {
                    ;((eX.current = null), nn(e, eK), (e$.current = "hyperlink"))
                    return
                  }
                  if (!m) {
                    eX.current = null
                    let n = (0, tz.IW)(eI.hyperlinkTargets, i)
                    if (n) return void (0, tN.mR)(e, n, i, ee)
                    let l = (0, tz.yu)(eI.selectedSlideElementTargets, i, r.k)
                    if (
                      (t.setSelectedElementId(l),
                      tZ(null != l && tY && ra),
                      tY && e.preventDefault(),
                      ei && !el && J?.annotation?.createCommentThreads !== !0)
                    ) {
                      let e = l ? n5.find((e) => "slide" !== e.target.kind && e.target.elementId === l) : null
                      e ? ec?.(e.threadId) : eh?.()
                    }
                    return (
                      (eJ.current = null),
                      (e$.current = null),
                      (tl.current = null),
                      (tu.current = null),
                      void (tm.current = !1)
                    )
                  }
                  let l = eI.selectionGeometry.primaryTarget,
                    a = (0, tz.mc)(eI),
                    o = rB.isActive(),
                    s = o ? null : (0, tz.TF)(eI, i, r.k),
                    d = rO(i),
                    c = 0 === e.button && d && !e.shiftKey ? (0, tP.cX)(eX.current, e, d) : null
                  if (
                    ((eX.current = c),
                    !s &&
                      d &&
                      o &&
                      (!e.shiftKey || d === eI.textEditState?.activeBlockId) &&
                      ((c?.count ?? 1) >= 3
                        ? rB.selectParagraphAtPoint(i)
                        : c?.count === 2
                          ? rB.selectWordAtPoint(i)
                          : rB.tryPointerDown(i, { shiftKey: e.shiftKey })))
                  ) {
                    ;(e.preventDefault(),
                      (e.currentTarget.style.cursor = "text"),
                      tT(!0),
                      (e$.current = "text"),
                      (tl.current = null),
                      (tu.current = null),
                      (tm.current = !1),
                      (eJ.current = null),
                      nn(e, eK))
                    return
                  }
                  o && (rB.clear(), (eJ.current = null))
                  let u = 1 === eI.selectedElementIds.length && l ? (0, tz.B5)([l], i, r.k) : null,
                    p = 1 === eI.selectedElementIds.length && l?.connector != null,
                    h = p ? null : s,
                    f = !o && !p && !h && (eI.selectedElementIds.length > 1 || !!l?.canRotate) && (0, tz.Ht)(a, i, r.k),
                    g = u
                      ? "from" === u.endpoint
                        ? "connector-from"
                        : "connector-to"
                      : h
                        ? "resize"
                        : f
                          ? "rotate"
                          : "move",
                    x =
                      u?.elementId ??
                      ("move" === g ? (0, tz.yu)(eI.selectedSlideElementTargets, i, r.k) : eI.primarySelectedElementId)
                  if (!x)
                    return ((tl.current = null), (tu.current = null), (tm.current = !1), o)
                      ? void t.clearElementSelection()
                      : (nn(e, eK),
                        (e$.current = "marquee"),
                        (eJ.current = null),
                        void t.beginSelectionMarquee({ point: i, additive: e.shiftKey }))
                  if (
                    eI.inspector.slideElements.some((e) => e.id === x && "table" === e.kind) &&
                    "move" === g &&
                    !e.altKey &&
                    !e.shiftKey &&
                    (eI.selectedElementIds.length <= 1 || !eI.selectedElementIds.includes(x))
                  ) {
                    ;(t.setSelectedElementId(x),
                      t.tableEditing.interact({
                        tableId: x,
                        type: "pointer-down",
                        target: { kind: "move" },
                        point: i,
                        shiftKey: e.shiftKey,
                      }),
                      nn(e, eK),
                      (e$.current = "table"),
                      (tl.current = x))
                    return
                  }
                  ;(tZ(tY && ra),
                    (eq.current = "rotate" === g && a ? { elementId: x, corner: (0, ts.Aj)(a, i) } : null),
                    eq.current && a && (e.currentTarget.style.cursor = (0, eQ.SQ)(eq.current.corner, a.rotation)),
                    ia(e, {
                      elementId: x,
                      point: i,
                      mode: g,
                      corner: h,
                      preserveRatio: e.shiftKey,
                      toggleSelection: e.shiftKey,
                      snapSuppressed: e.altKey,
                      altKey: e.altKey,
                      ctrlKey: e.ctrlKey,
                    }))
                },
                onMouseDown: (e) => {
                  ;(rB.isActive() || n.shouldSuppressMouseInteractions()) && e.preventDefault()
                },
                onPointerMove: (e) => {
                  if (n.shouldSuppressMouseInteractions()) return
                  "element" !== e$.current && (eq.current = null)
                  let r = n.getCamera(),
                    i = rV.current
                  if (i) {
                    i.pointerId !== e.pointerId || i.ended || ((i.latest = na(e)), rK(), e.preventDefault())
                    return
                  }
                  ;((null == eK.current || eK.current === e.pointerId) &&
                    (tp.current = { clientX: e.clientX, clientY: e.clientY }),
                    e$.current && (0, tP.kx)(eX.current, e) && (eX.current = null))
                  let l = tK(e, eF.current, r, eI, nH)
                  if ((tk(l), nY.move(e$.current || null != eK.current ? null : l), t7 && G)) {
                    if (null != eK.current && eK.current !== e.pointerId) return
                    let t = e.nativeEvent.getCoalescedEvents?.(),
                      n = t?.length
                        ? t.flatMap((e) => {
                            let t = tK(e, eF.current, r, eI, nH)
                            return t ? [t] : []
                          })
                        : l
                          ? [l]
                          : []
                    ;(nT.current?.append(n),
                      (e.currentTarget.style.cursor = "crosshair"),
                      e.preventDefault(),
                      e.stopPropagation())
                    return
                  }
                  if (t1 && $) {
                    if (tQ || (null != nI && null != eK.current && eK.current !== e.pointerId)) return
                    if (null != nI && l) {
                      nk(!0)
                      let t = Math.hypot(l.x - nI.start.x, l.y - nI.start.y) >= 6
                      if (t && nx.current) {
                        if (nw.current) {
                          ;(e.preventDefault(), e.stopPropagation())
                          return
                        }
                        ;((nv.current = !1), nm(null))
                      }
                      ;(nM(t ? { start: nI.start, current: l } : null), e.preventDefault(), e.stopPropagation())
                    }
                    if (!l) {
                      ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = ""))
                      return
                    }
                    nk(!0)
                    let n = (0, tz.yu)(eI.selectedSlideElementTargets, l, r.k)
                    ;(t.setHoveredElementId(n),
                      (e.currentTarget.style.cursor = nx.current ? "" : eF.current?.style.cursor || e8.Gz))
                    return
                  }
                  if ("table" === e$.current && l && tl.current)
                    return void t.tableEditing.interact({
                      tableId: tl.current,
                      type: "pointer-move",
                      point: l,
                      shiftKey: e.shiftKey,
                    })
                  if ("text" === e$.current) {
                    ;((e.currentTarget.style.cursor = "text"), l && rB.pointerMove(l))
                    return
                  }
                  if ("marquee" === e$.current) {
                    l && t.updateSelectionMarquee({ nextPoint: l })
                    return
                  }
                  if ("hyperlink" === e$.current) {
                    let t = nJ.takeDrag(e)
                    if (!t || !l) return
                    ;(rB.clear(),
                      (eJ.current = null),
                      tZ(tY && ra),
                      ia(
                        e,
                        { elementId: t.target.source.elementId, point: t.point, mode: "move", corner: null },
                        t.clientPoint,
                      ))
                  }
                  if ("element" === e$.current && l) {
                    if (
                      (tu.current &&
                        Math.hypot(e.clientX - tu.current.x, e.clientY - tu.current.y) >
                          ("touch" === e.pointerType ? 8 : 2) &&
                        (tm.current = !0),
                      (eJ.current || "touch" === e.pointerType) && !tm.current)
                    )
                      return
                    ;(tm.current && ty(),
                      t.updateElementInteraction({
                        nextPoint: l,
                        shiftKey: e.shiftKey,
                        snapSuppressed: e.altKey,
                        altKey: e.altKey,
                        ctrlKey: e.ctrlKey,
                      }))
                    return
                  }
                  if (l && nJ.move(e, l, r.k)) return
                  if (!m) {
                    if (l ? (0, tz.IW)(eI.hyperlinkTargets, l) : null) {
                      ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = "pointer"))
                      return
                    }
                    let n = l ? (0, tz.yu)(eI.selectedSlideElementTargets, l, r.k) : null
                    ;(t.setHoveredElementId(n), (e.currentTarget.style.cursor = ""))
                    return
                  }
                  if (!l) {
                    ;(tT(!1), t.setHoveredElementId(null), (e.currentTarget.style.cursor = ""))
                    return
                  }
                  let a = eI.selectionGeometry.primaryTarget,
                    o = (0, tz.mc)(eI),
                    s = rB.isActive(),
                    d = 1 === eI.selectedElementIds.length && a ? (0, tz.B5)([a], l, r.k) : null
                  if (d) {
                    ;(t.setHoveredElementId(d.elementId), (e.currentTarget.style.cursor = "crosshair"))
                    return
                  }
                  let c = 1 === eI.selectedElementIds.length && a?.connector != null,
                    u = c || s ? null : (0, tz.TF)(eI, l, r.k)
                  if (u) {
                    ;(t.setHoveredElementId(eI.primarySelectedElementId),
                      (e.currentTarget.style.cursor = (0, eQ.WB)(u, o?.rotation) ?? ""))
                    return
                  }
                  if (tM && rO(l)) {
                    ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = "text"))
                    return
                  }
                  if (
                    (tM && tT(!1),
                    !s && o && !c && (eI.selectedElementIds.length > 1 || a?.canRotate) && (0, tz.Ht)(o, l, r.k))
                  ) {
                    ;(t.setHoveredElementId(eI.primarySelectedElementId),
                      (e.currentTarget.style.cursor = (0, eQ.SQ)((0, ts.Aj)(o, l), o.rotation)))
                    return
                  }
                  if (s && rO(l)) {
                    ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = "text"))
                    return
                  }
                  let p = (0, tz.yu)(eI.selectedSlideElementTargets, l, r.k)
                  ;(t.setHoveredElementId(p), (e.currentTarget.style.cursor = p ? "move" : ""))
                },
                onPointerLeave: (e) => {
                  ;(nJ.clear(),
                    nY.leave(),
                    null == eK.current &&
                      (tT(!1),
                      tk(null),
                      t.setHoveredElementId(null),
                      (e.currentTarget.style.cursor = t7 && G ? "crosshair" : "")))
                },
                onPointerUp: (e) => io(e, !0),
                onPointerCancel: (e) => io(e, !1),
                onLostPointerCapture: (e) => {
                  eK.current === e.pointerId &&
                    io(
                      e,
                      ("element" === e$.current || "marquee" === e$.current) &&
                        "mouse" === e.pointerType &&
                        0 === e.buttons,
                    )
                },
                onDoubleClick: (e) => {
                  if (n.shouldSuppressMouseInteractions()) return
                  let r = n.getCamera()
                  if (rV.current) return
                  if (t7 && G) return void e.preventDefault()
                  if (t1 && $) {
                    if (tQ) return
                    e.preventDefault()
                    return
                  }
                  let i = tK(e, eF.current, r, eI, nH)
                  !i ||
                    (!m && (0, tz.IW)(eI.hyperlinkTargets, i)) ||
                    ((0, tz.yu)(eI.selectedSlideElementTargets, i, r.k) && L?.("double-click-content"),
                    !m ||
                      e.shiftKey ||
                      (t.endSelectionMarquee({ commit: !1 }),
                      tC(!1),
                      t.endElementInteraction({ commit: !1 }),
                      rO(i) && (rB.isActive() || rB.selectWordAtPoint(i)) && e.preventDefault()))
                },
                className: "absolute inset-0 h-full w-full touch-none",
              }),
            }),
            i &&
              n$.slideRect &&
              !eI.gridLayout &&
              (0, r.jsx)(t9, {
                source: t.widgets,
                slideId: nX,
                slideIds: eI.slideIds,
                slideRect: n$.slideRect,
                interactive: !$ && !G && !k && !x && !v && !E && !C && !A,
                renderWidget: i,
                viewportRef: eF,
                isEditing: m,
                selectionCanvasRef: eH,
              }),
            (0, r.jsx)("canvas", {
              ref: eV,
              "data-testid": "popcorn-presentation-worker-overlay",
              className: "pointer-events-none absolute inset-0 h-full w-full select-none",
            }),
            n$.slideRect &&
              (0, r.jsx)(
                th,
                {
                  cursors: eI.awarenessCursors,
                  appearance: ej,
                  width: nV.width,
                  height: nV.height,
                  left: n$.slideRect.left,
                  top: n$.slideRect.top,
                  zoom: n$.slideRect.scale,
                  scopeKey: t,
                },
                `presence:${nX}`,
              ),
            !m ||
            G ||
            $ ||
            k ||
            x ||
            v ||
            E ||
            null != C ||
            null != A ||
            "marquee" === eI.activeInteractionKind ||
            !nK ||
            !t.tableEditing
              ? null
              : (0, r.jsx)(tS, {
                  snapToPixels: !0,
                  source: t.tableEditing,
                  cameraSource: nW,
                  camera: { x: nK.left, y: nK.top, k: nK.scale },
                  textEditing: !!eI.textEditState?.activeBlockId,
                  onEditText: (e) => {
                    ;(eF.current?.focus({ preventScroll: !0 }), rB.tryPointerDown(e), rB.pointerUp())
                  },
                }),
            (0, r.jsx)(t4, {
              controller: t,
              snapshot: eI,
              containerRef: eF,
              currentSlideId: nX,
              stageSlideRect: nK,
              isEditing: m,
              imageInsertionMode: x,
              onImageInsertionModeChange: y,
              widgetInsertionMode: v,
              onWidgetInsertionModeChange: w,
              tableInsertionMode: E,
              onTableInsertionModeChange: j,
              shapeInsertion: C,
              onShapeInsertionChange: S,
              activeRequests: nQ,
              chartInsertionPresetId: A,
              onChartInsertionPresetIdChange: P,
              onInsertElement: n0.commit,
              textInsertionMode: k,
              onTextInsertionModeChange: I,
            }),
            ei
              ? (0, r.jsx)(eY, {
                  comments: J?.annotation?.comments,
                  renderCommentInput: J?.annotation?.renderCommentInput,
                  threads: n5,
                  slideRect: n$.slideRect,
                  stageSize: nV,
                  isEditing: m,
                  canComment: J?.annotation?.canComment ?? (m || t3),
                  canAssignToChatGpt: J?.annotation?.canAssignToChatGpt,
                  canDeleteOthersComments: J?.annotation?.canComment == null ? void 0 : m,
                  commentsSidebarOpen: el,
                  renderCommentThread: t8,
                  annotationMarkerPositions: rF,
                  collisionBoundaryElement: ez ?? eF.current,
                  selectedCommentThreadId: es,
                  hoveredCommentThreadId: ed,
                  viewerAuthor: J?.annotation?.commentAuthor,
                  assistantIcon: J?.annotation?.commentAssistantIcon,
                  pendingCommentThreadIds: J?.annotation?.pendingCommentThreadIds,
                  onSelectCommentThread: ec,
                  onHoverCommentThread: ep,
                  onClearCommentThread: eh,
                  portalContainerElement: J?.annotation?.comments?.unified ? void 0 : em,
                  ...((eg = J?.annotation),
                  {
                    onReply: (e, n) => {
                      let r = n5.find((t) => t.threadId === e)
                      return (
                        null != r &&
                        !!t.replyToCommentThread(e, n, eg?.commentAuthor) &&
                        (eg?.onCommentSubmitted?.(
                          (0, ef.I)(r, n, (0, ex.jF)(r.target, r.markerPoint), eg?.canAssignToChatGpt),
                        ),
                        !0)
                      )
                    },
                    onResolve: (e) =>
                      eg?.comments?.unified === !0
                        ? t.resolveCommentThreadAndWait(e, eg.commentAuthor)
                        : t.resolveCommentThread(e, eg?.commentAuthor),
                    onReopen: (e) => {
                      t.reopenCommentThread(e)
                    },
                    onDeleteThread: (e) => {
                      t.deleteCommentThread(e)
                    },
                    onToggleReaction: (e, n, r) => {
                      t.toggleCommentReaction(e, n, r, eg?.commentAuthor)
                    },
                    onDeleteComment: (e, n) => {
                      t.deleteThreadComment(e, n)
                    },
                    onEditComment: (e, n, r) => t.editThreadComment(e, n, r),
                  }),
                })
              : null,
            ei
              ? (0, r.jsx)(eZ, {
                  slideRect: n$.slideRect,
                  threads: n5,
                  elements: eI.selectedSlideElementTargets,
                  highlightedThreadId: n6,
                  borderStyle: null != n8 ? "solid" : "dashed",
                  pendingThreadIds: n8?.pulsePending ? J?.annotation?.pendingCommentThreadIds : void 0,
                })
              : null,
            rz.length > 0
              ? (0, r.jsx)(e1.i, {
                  testId: "popcorn-presentation-drawing-overlay",
                  strokes: rz.flatMap((e) => e.strokes),
                  projectPoint: r8,
                  clipBounds: rp,
                })
              : null,
            nA.length > 0
              ? (0, r.jsx)(e1.i, {
                  testId: "popcorn-presentation-drawing-draft-overlay",
                  strokes: nA,
                  projectPoint: r8,
                  clipBounds: rp,
                })
              : null,
            (0, r.jsx)(e7, {
              ref: nT,
              testId: "popcorn-presentation-drawing-active-overlay",
              projectPoint: r8,
              clipBounds: rp,
            }),
            (0, r.jsx)(t5, {
              markers: rL,
              hoveredAnnotationId: nf,
              setHoveredAnnotationId: ng,
              editorSession: ne,
              directSubmit: J?.annotation?.defaultCreateSubmitMode === "direct",
              focusAnnotation: rE,
              containerElement: eF.current,
              collisionBoundaryElement: ez,
            }),
            rv
              ? (0, r.jsx)(e_.ME, {
                  bounds: rv,
                  borderStyle: ii,
                  testId: rg
                    ? "popcorn-presentation-annotation-region-preview"
                    : "popcorn-presentation-annotation-highlight",
                  borderWidthPx: il,
                })
              : null,
            (0, r.jsx)(t6, {
              elements: rR,
              slideId: nX,
              slideIndex: eI.selectedSlideIdx,
              slideLabel: n4,
              slideRect: n$.slideRect,
            }),
            t1 && $ && ne?.mode === "create" && eb
              ? "comment" === ne.intent
                ? (0, r.jsx)(eG.j, {
                    variant: "bubble",
                    inert: !0,
                    "aria-hidden": !0,
                    tabIndex: -1,
                    "data-testid": "popcorn-presentation-annotation-draft-marker",
                    author: J?.annotation?.commentAuthor,
                    position: (0, e_.Ky)(eb),
                  })
                : (0, r.jsx)(e_.oN, {
                    testId: "popcorn-presentation-annotation-draft-marker",
                    position: (0, e_.Ky)(eb),
                    draft: !0,
                  })
              : null,
            ic && n9 && rd
              ? (0, r.jsx)(e_.mL, {
                  bounds: n9,
                  containerElement: eF.current,
                  collisionBoundaryElement: ez,
                  askForEditIcon: J?.annotation?.askForEditIcon,
                  assistantIcon: J?.annotation?.commentAssistantIcon,
                  label: J?.annotation?.askForEditLabel ?? J?.annotation?.getAskForEditLabel?.(),
                  shortcutScopeElement: eF.current,
                  testId: "popcorn-presentation-ask-for-edit-button",
                  onClick: t2 ? ip : void 0,
                  onShown: J?.annotation?.onAskForEditShown == null ? void 0 : ru,
                  onCommentClick: t3 ? () => ih("ask_codex_button") : void 0,
                })
              : null,
            !tQ && ne?.target.slideId === nX && rP
              ? (0, r.jsx)(
                  e0.k8,
                  {
                    ref: ny,
                    anchorBounds: rP,
                    containerElement: eF.current,
                    collisionBoundaryElement: ez,
                    portalContainerElement:
                      null != iy && J?.annotation?.comments?.unified ? eF.current?.ownerDocument.body : em,
                    mode: ne?.mode ?? "create",
                    allowDirectSubmitOnEdit: J?.annotation?.allowDirectSubmitOnEdit,
                    defaultCreateSubmitMode: J?.annotation?.defaultCreateSubmitMode,
                    savedSubmitDisabled: J?.annotation?.savedSubmitDisabled,
                    dictationControls: J?.annotation?.dictationControls,
                    placeholder: ib,
                    isComment: null != ix && ((ne?.mode === "create" && "comment" === ne.intent) || null != iy),
                    commentComposer: iy,
                    nativeFileCommentLabel: ix?.nativeFileCommentLabel,
                    value: ne?.body ?? "",
                    onChange: it,
                    onCancel: r3,
                    onEscape: r6,
                    onDelete: () => {
                      t0.current ||
                        r1() ||
                        (ne?.mode === "edit" &&
                          (rj(ne.annotationId), ng((e) => (e === ne.annotationId ? null : e)), r0()))
                    },
                    onDictationBusyChange: r4,
                    onSubmit: ie,
                  },
                  null != iy ? iv : void 0,
                )
              : null,
            (0, r.jsx)(ti, {
              containerRef: eF,
              contextKey: n2,
              enabled: m && eE.insert.includes("image"),
              onDropImages: async (e, r, i) => {
                let l = tK(r, eF.current, n.getCamera(), eI, n.getLayoutSnapshot().viewportInsets)
                if (!l) return
                let a = await Promise.all(e.map(async (e) => t.prepareImage(await (0, tr.I)(e), i))),
                  o = t.getSnapshot()
                i.aborted ||
                  o.slideIds[o.selectedSlideIdx] !== nX ||
                  (I?.(!1),
                  y?.(!1),
                  j?.(!1),
                  P?.(null),
                  t.setChartInsertionPreview(null),
                  S?.(null),
                  W?.(!1),
                  X?.(!1),
                  a.forEach((e, n) => {
                    t.dispatch({ kind: "insert-image", ...e, center: { x: l.x + 24 * n, y: l.y + 24 * n } })
                  }),
                  n.focus())
              },
            }),
            B && nK
              ? (0, r.jsx)(tU, {
                  controller: t,
                  runtime: n,
                  slideId: nX,
                  isEditing: m,
                  isExpanded: tW,
                  contentHeight: Math.min(tA, nU),
                  maxContentHeight: nU,
                  onContentHeightChange: tq,
                  onExpandedChange: (e) => {
                    ;(tG(e), e || n.recenterSlide())
                  },
                  onHeightChange: n3,
                  visible: H,
                  focusViewportInsets: K,
                })
              : null,
            o.length > 0
              ? (0, r.jsx)("div", {
                  className: "pointer-events-none absolute inset-0 z-30",
                  children: o.map((e) =>
                    (0, r.jsx)(
                      "div",
                      {
                        className: "pointer-events-none absolute inset-0",
                        children: e.render({
                          controller: t,
                          snapshot: n$,
                          selectionBounds: n9,
                          selectionBoundsSource: l ? void 0 : nq,
                          collisionBoundaryElement: ez,
                          panelControls: u,
                          isEditing: m,
                          canEditSelection: id,
                          editToolbarRequested:
                            rs && (!eI.textEditState?.activeBlockId || !0 === e.supportsTextSelection),
                          floatingBar: rt,
                          dismissEditToolbar: rY,
                          focusStage: rX,
                          panViewportBy: rZ,
                          createViewportFitTransition: rJ,
                          shortcutScopeElement: eF.current,
                          selectionActions: ig,
                        }),
                      },
                      e.id,
                    ),
                  ),
                })
              : null,
            J?.reviewBar != null &&
              (0, r.jsx)(e9.p, {
                viewportInsets: nG,
                children:
                  "function" == typeof J.reviewBar
                    ? J.reviewBar({
                        annotationMode: $,
                        isAnnotationInteractionActive: null != ne || (t1 && $ && null != nI),
                        onAnnotationsSubmitted: r5,
                        onExitAnnotationMode: (e) => !!r6(e) && (W?.(!1), !0),
                      })
                    : J.reviewBar,
              }),
          ],
        }),
      })
    }
    var nm = n("YLKE")
    function nf({ controller: e, anchor: t, portalContainer: n, onSelect: i, onClose: l }) {
      let a = (0, d.useRef)(null),
        o = (0, d.useRef)(!0),
        [s, c] = (0, d.useState)(),
        [u, p] = (0, d.useState)(),
        [h, m] = (0, d.useState)(0),
        f = t.closest(".popcorn-presentation-codex-thumbnail-panel"),
        g = void 0 === s && void 0 === u
      return (
        (0, d.useEffect)(() => {
          let t = !1
          return (
            p(void 0),
            c(void 0),
            e.requestSlideTemplates().then(
              (e) => {
                t || c(e)
              },
              (e) => {
                t || p(e instanceof Error ? e.message : "Unable to load templates.")
              },
            ),
            () => {
              t = !0
            }
          )
        }, [e, h]),
        (0, d.useEffect)(() => {
          !g &&
            o.current &&
            (document.activeElement === t ||
              document.activeElement === document.body ||
              document.activeElement === a.current) &&
            a.current?.querySelector("button")?.focus()
        }, [t, s, u, g]),
        (0, r.jsxs)(nm.bL, {
          open: !0,
          onOpenChange: (e) => !e && l(),
          children: [
            (0, r.jsx)(nm.Mz, { virtualRef: { current: f ?? t } }),
            (0, r.jsx)(nm.ZL, {
              container: n,
              children: (0, r.jsx)(nm.UC, {
                ref: a,
                hidden: g,
                "aria-label": "Slide templates",
                "data-testid": "popcorn-presentation-template-picker",
                side: "popcorn-presentation-add-slide" === t.dataset.testid ? "right" : "bottom",
                align: f ? "end" : "start",
                sideOffset: 8,
                collisionPadding: 8,
                className:
                  "popcorn-presentation-thumbnail-surface z-50 max-h-[var(--radix-popover-content-available-height)] max-w-[calc(100vw-16px)] overflow-auto p-3 font-sans text-default select-none",
                onOpenAutoFocus: (e) => {
                  g && e.preventDefault()
                },
                onInteractOutside: (e) => {
                  t.contains(e.target) ? e.preventDefault() : (o.current = !1)
                },
                onCloseAutoFocus: (e) => {
                  ;(e.preventDefault(), o.current && t.isConnected && t.focus())
                },
                onPointerDown: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                  e.stopPropagation()
                  let t = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 2, ArrowUp: -2 }[e.key]
                  if (void 0 === t) return
                  let n = Array.from(e.currentTarget.querySelectorAll("button")),
                    r = n.indexOf(document.activeElement),
                    i = n[r + t]
                  ;(i && i.focus(), e.preventDefault())
                },
                children: u
                  ? (0, r.jsxs)("div", {
                      role: "alert",
                      className: "w-[304px] p-4 text-center text-sm",
                      children: [
                        (0, r.jsx)("p", { children: u }),
                        (0, r.jsx)("button", {
                          type: "button",
                          className:
                            "mt-2 rounded-lg px-3 py-1.5 hover:bg-primary-ghost-hover focus-visible:bg-primary-ghost-hover",
                          onClick: () => {
                            ;(t.focus(), m((e) => e + 1))
                          },
                          children: "Try again",
                        }),
                      ],
                    })
                  : s?.length === 0
                    ? (0, r.jsxs)("div", {
                        className: "w-[304px] p-4 text-center text-sm",
                        children: [
                          (0, r.jsx)("p", {
                            role: "status",
                            className: "text-token-text-secondary",
                            children: "This presentation has no slide layouts.",
                          }),
                          (0, r.jsx)("button", {
                            type: "button",
                            className:
                              "mt-2 rounded-lg px-3 py-1.5 hover:bg-primary-ghost-hover focus-visible:bg-primary-ghost-hover",
                            onClick: () => i(void 0),
                            children: "Add blank slide",
                          }),
                        ],
                      })
                    : (0, r.jsx)("div", {
                        className: "grid grid-cols-[repeat(2,148px)] gap-x-3 gap-y-2",
                        children: s?.map((t) => (0, r.jsx)(ng, { controller: e, template: t, onSelect: i }, t.id)),
                      }),
              }),
            }),
          ],
        })
      )
    }
    function ng({ controller: e, template: t, onSelect: n }) {
      let [i, l] = (0, d.useState)(),
        [a, o] = (0, d.useState)(!1)
      return (
        (0, d.useEffect)(() => {
          let n = !1
          return (
            e.requestSlideTemplatePreview(t.id).then(
              (e) => {
                n || l(e)
              },
              () => {
                n || o(!0)
              },
            ),
            () => {
              n = !0
            }
          )
        }, [e, t.id]),
        (0, r.jsxs)("button", {
          type: "button",
          "aria-label": `Add ${t.name} slide`,
          onClick: () => n(t.id),
          className: "group flex min-w-0 cursor-pointer flex-col gap-2 rounded-xl p-1 text-left outline-none",
          children: [
            (0, r.jsxs)("div", {
              className:
                "relative flex aspect-video w-[140px] items-center justify-center overflow-hidden rounded-lg border border-token-border-default",
              children: [
                i
                  ? (0, r.jsx)("img", { src: i, alt: "", draggable: !1, className: "h-full w-full object-contain" })
                  : a
                    ? (0, r.jsx)("span", {
                        className: "px-2 text-center text-xs text-token-text-secondary",
                        children: "Preview unavailable",
                      })
                    : null,
                (0, r.jsx)("span", {
                  "aria-hidden": "true",
                  "data-testid": "popcorn-presentation-template-add-overlay",
                  className:
                    "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                  children: (0, r.jsx)(E.EV, { className: "size-6" }),
                }),
              ],
            }),
            (0, r.jsx)("span", {
              className: "w-full truncate px-1 text-xs leading-5 text-token-text-secondary",
              children: t.name,
            }),
          ],
        })
      )
    }
    function nx(e) {
      if (null == e) return
      let t = e.parentElement,
        n = t.parentElement,
        r = n.parentElement,
        i = t.previousElementSibling,
        l = () => {
          if (0 === r.clientHeight) return
          let i = r.getBoundingClientRect().height / r.clientHeight,
            l = (n.getBoundingClientRect().height - t.getBoundingClientRect().height) / i,
            a = r.clientHeight - l,
            o = e.getBoundingClientRect(),
            s = a
          if (o.height / i > a)
            for (let t of e.querySelectorAll("[data-presentation-thumbnail-surface]")) {
              let e = t.getBoundingClientRect(),
                n = (e.top - o.top + e.height / 2) / i
              if (n > a) break
              s = n
            }
          t.style.maxHeight = `${Math.max(0, s)}px`
        }
      if ((l(), "u" < typeof ResizeObserver)) return
      let a = new ResizeObserver(l)
      return (a.observe(r), a.observe(i), a.observe(e), () => a.disconnect())
    }
    var nb = n("rLaE"),
      ny = n("ChR6")
    class nv {
      #eN
      #ez
      #eB
      #eO = !1
      #eV = null
      #eH = null
      #eK = null
      #e$ = null
      #eq = !1
      #eW = !1
      #eU = { width: 0, height: 0 }
      #eG = 0
      #H = { left: 0, top: 0, right: 0, bottom: 0 }
      #e_ = { selectedSlideIdx: 0, selectedSlideFrame: null, zoom: 1, camera: null }
      #eX = null
      #eZ = null
      #eJ = null
      #eY = null
      #eQ = null
      #e0 = new Set()
      #e1 = { width: 0, height: 0, viewportInsets: { left: 0, top: 0, right: 0, bottom: 0 } }
      constructor() {
        this.#eN = new nb.P({
          enabled: !0,
          initialCamera: { x: 0, y: 0, k: 1 },
          minZoom: 0.01,
          maxZoom: 64,
          getViewportSize: () => ({ width: this.#eU.width, height: this.#eU.height }),
          getWorldSize: () => {
            if (this.#e_.gridLayout) return this.#e_.gridLayout.bounds
            let e = this.#e2()
            return e
              ? (0, _.c8)({
                  viewport: { width: this.#eU.width, height: this.#eU.height },
                  frame: e,
                  camera: this.#eN.getCamera(),
                  viewportInsets: this.#H,
                  contentBottomInset: this.#eG,
                }).worldSize
              : { width: this.#eU.width, height: this.#eU.height }
          },
          requestDraw: () => {
            this.#eZ?.(this.#eN.getCamera())
          },
          onWheelPan: (e) => this.#e4(e),
          projectZoom: ({ sourceCamera: e, sourceScreen: t, targetScreen: n, nextZoom: r }) => {
            if (this.#e_.gridLayout) {
              let i = (0, ny.Cc)(r)
              return { x: n.x - ((t.x - e.x) / e.k) * i, y: n.y - ((t.y - e.y) / e.k) * i, k: i }
            }
            let i = this.#e2()
            if (!i) return { ...e, k: r }
            let l = { width: this.#eU.width, height: this.#eU.height }
            return (0, _.we)({
              sourceCamera: e,
              sourceScreen: t,
              targetScreen: n,
              nextZoom: r,
              viewport: l,
              frame: i,
              viewportInsets: this.#H,
              contentBottomInset: this.#eG,
            })
          },
          clampCamera: (e) => {
            if (this.#eU.width <= 0 || this.#eU.height <= 0) return e
            if (this.#e_.gridLayout) return { ...e, k: (0, ny.Cc)(e.k) }
            let t = this.#e2()
            return t
              ? (0, _.TQ)({
                  camera: e,
                  viewport: { width: this.#eU.width, height: this.#eU.height },
                  frame: t,
                  viewportInsets: this.#H,
                  contentBottomInset: this.#eG,
                })
              : e
          },
          onCameraSettled: (e) => {
            let t = this.#e2()
            t && this.#eX?.({ camera: e, zoom: this.#e_.gridLayout ? e.k / this.#e3().k : this.#e5(e, t) })
          },
        })
      }
      start() {
        this.#eO ||
          ((this.#eO = !0),
          (0, X.ensurePopcornPresentationRenderDepsLoaded)().then(() => {
            this.#eO && ((this.#eq = !0), this.scheduleLayoutSync())
          }))
      }
      attachHost(e) {
        if (this.#eV === e || (this.#e6(), (this.#eV = e), this.#eN.attach(e), !e)) return
        let t = e.ownerDocument.defaultView
        ;(this.#e8(t ? this.#eB?.(t) : void 0),
          "u" > typeof ResizeObserver &&
            ((this.#eH = new ResizeObserver((t) => {
              let n = t[0]
              this.scheduleLayoutSync(n ? G(e, n) : null)
            })),
            this.#eH.observe(e)),
          window.addEventListener("resize", this.#e9),
          this.scheduleLayoutSync())
      }
      getCamera() {
        return this.#eN.getCamera()
      }
      setGestureObserverFactory(e) {
        if (this.#eB === e) return
        this.#eB = e
        let t = this.#eV?.ownerDocument.defaultView
        this.#e8(t ? e?.(t) : void 0)
      }
      #e8(e) {
        this.#ez !== e &&
          (this.#eN.setGestureObserver(void 0),
          this.#ez?.dispose(),
          (this.#ez = e),
          this.#eN.setGestureObserver(e?.onGesture))
      }
      recordPresentedCamera(e) {
        this.#eV && this.#ez?.onPresented(e)
      }
      adoptPresentedCamera(e) {
        this.#eN.setCamera(e, { notify: !1, requestDraw: !1 })
      }
      setTouchInteractionHandlers(e) {
        this.#eN.setTouchInteractionHandlers(e)
      }
      shouldSuppressMouseInteractions() {
        return this.#eN.shouldSuppressMouseInteractions()
      }
      cancelTouchInteraction() {
        return this.#eN.cancelTouchInteraction()
      }
      focus() {
        this.#eV?.focus({ preventScroll: !0 })
      }
      hasInitializedCamera() {
        return this.#eW
      }
      subscribeToCameraChanges(e) {
        return this.#eN.subscribeToCameraChanges(e)
      }
      subscribeToLayoutChanges(e) {
        return (
          this.#e0.add(e),
          () => {
            this.#e0.delete(e)
          }
        )
      }
      getLayoutSnapshot() {
        return this.#e1
      }
      zoomTo(e, t) {
        let n = this.#e7(e)
        if (!n) return
        let r = (this.#e_.gridLayout ? _.Ze : _.y_)({ width: this.#eU.width, height: this.#eU.height }, this.#H)
        this.#eN.zoomTo(n.k, {
          ...t,
          screenX: t?.screenX ?? r.left + r.width / 2,
          screenY: t?.screenY ?? r.top + r.height / 2,
        })
      }
      panByScroll(e, t) {
        this.#eN.panByScroll(e, t)
      }
      fitToViewport(e = 1) {
        let t = this.#e7(e)
        t && this.#eN.setCamera(t, { settled: !0 })
      }
      recenterSlide() {
        let e = this.#e2()
        e && !this.#e_.gridLayout && this.fitToViewport(this.#e5(this.getCamera(), e))
      }
      createFitToViewportTransition(e) {
        let t = this.#e2(),
          n = this.#e7(1)
        if (!t || !n || this.#eU.width <= 0 || this.#eU.height <= 0) return null
        let r = this.getCamera(),
          i = e?.zoomOutOnly && n.k > r.k ? this.#e7(r.k / n.k) : n
        if (!i) return null
        let l = this.#e_.gridLayout?.bounds,
          a = { x: (l?.left ?? 0) + (l?.width ?? t.width) / 2, y: (l?.top ?? 0) + (l?.height ?? t.height) / 2 }
        return (e) => {
          let t = Math.max(0, Math.min(1, e))
          this.#eN.setCamera((0, tq.IV)(r, i, t, a), { settled: 1 === t })
        }
      }
      setOnCameraSettled(e) {
        this.#eX = e
      }
      setOnCameraChanged(e) {
        this.#eZ = e
      }
      setOnNavigateSlide(e) {
        this.#eJ = e
      }
      setContentBottomInset(e) {
        this.#eG = Math.max(0, e)
      }
      getContentBottomInset() {
        return this.#eG
      }
      setViewportInsets(e) {
        let t = this.#H
        ;(0, _.Zh)(t, e) ||
          ((this.#H = { ...e }),
          this.#eW &&
            this.#te(this.#e_, this.#e_, {
              viewportChanged: !0,
              previousViewport: { width: this.#eU.width, height: this.#eU.height },
              previousViewportInsets: t,
            }),
          this.#tt(),
          this.scheduleLayoutSync())
      }
      setViewState(e, t = this.#H) {
        let n = this.#e_,
          r = this.#H,
          i = !(0, _.Zh)(r, t)
        ;((this.#e_ = e),
          (this.#H = { ...t }),
          this.#te(n, e, i ? { viewportChanged: !0, previousViewport: this.#eU, previousViewportInsets: r } : void 0),
          i && (this.#tt(), this.scheduleLayoutSync()))
      }
      dispose() {
        ;((this.#eO = !1),
          null != this.#eK && (cancelAnimationFrame(this.#eK), (this.#eK = null)),
          this.#e6(),
          this.#eN.destroy())
      }
      scheduleLayoutSync(e) {
        ;(e && (this.#e$ = e),
          this.#eq &&
            (null != this.#eK && cancelAnimationFrame(this.#eK),
            (this.#eK = requestAnimationFrame(() => {
              ;((this.#eK = null), this.#tn())
            }))))
      }
      #e9 = () => {
        this.scheduleLayoutSync()
      }
      #e4(e) {
        let t = this.#e2(),
          n = (0, _.y_)(this.#eU, this.#H),
          r = this.#eN.getCamera()
        if (!this.#eJ || !this.#eW || !t || this.#e_.gridLayout || (0, M.tr)(e.target))
          return ((this.#eQ = null), (this.#eY = null), !1)
        let { slideRect: i } = (0, _.c8)({ viewport: this.#eU, frame: t, camera: r, viewportInsets: this.#H }),
          l = e.shiftKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)
        if (
          t.height * r.k > n.height ||
          (!l &&
            ((null != this.#eY && e.timeStamp - this.#eY < 200) ||
              (this.#eG > 0 && i.top + i.height + this.#eG > n.top + n.height + 0.01))) ||
          i.top < n.top - 0.01 ||
          i.top + i.height > n.top + n.height + 0.01
        )
          return ((this.#eQ = null), (this.#eY = e.timeStamp), !1)
        if ((l || (this.#eY = null), t.width * r.k > n.width)) return ((this.#eQ = null), "horizontal")
        if (l) return ((this.#eQ = null), !0)
        let a =
            e.deltaY *
            (e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? n.height : 1),
          o = Math.sign(a),
          s = this.#eQ
        return (
          (!s || e.timeStamp - s.time >= 200 || o !== s.direction) &&
            ((s = { time: e.timeStamp, delta: 0, direction: o, navigationTime: null }), (this.#eQ = s)),
          (s.time = e.timeStamp),
          (s.delta += a),
          Math.abs(s.delta) >= 40 &&
            (null == s.navigationTime || e.timeStamp - s.navigationTime >= 200) &&
            ((s.navigationTime = e.timeStamp), (s.delta = 0), this.#eJ?.(o > 0 ? 1 : -1)),
          !0
        )
      }
      #e6() {
        ;(this.#eH && (this.#eH.disconnect(), (this.#eH = null)),
          this.#eV && window.removeEventListener("resize", this.#e9),
          (this.#eV = null),
          (this.#eQ = null),
          (this.#eY = null),
          (this.#e$ = null),
          this.#eN.attach(null),
          this.#e8(void 0))
      }
      #tn() {
        let e = this.#eV
        if (!e) return
        let t = this.#eU
        ;((this.#eU = U(e, this.#e$)), this.#tt())
        let n = t.width !== this.#eU.width || t.height !== this.#eU.height
        ;(n || !this.#eW) &&
          this.#te(this.#e_, this.#e_, { viewportChanged: n, previousViewport: { width: t.width, height: t.height } })
      }
      #tt() {
        let e = this.#e1,
          t = { width: this.#eU.width, height: this.#eU.height, viewportInsets: { ...this.#H } }
        if (!(e.width === t.width && e.height === t.height && (0, _.Zh)(e.viewportInsets, t.viewportInsets)))
          for (let e of ((this.#e1 = t), this.#e0)) e()
      }
      #e2() {
        return this.#e_.selectedSlideFrame
      }
      #e5(e, t) {
        return (0, _.L2)({ camera: e, viewport: this.#eU, frame: t, viewportInsets: this.#H })
      }
      #e7(e) {
        let t = this.#e2()
        return t
          ? this.#e_.gridLayout
            ? this.#e3(e)
            : (0, _.nX)({ viewport: this.#eU, frame: t, zoomFactor: e, viewportInsets: this.#H })
          : null
      }
      #e3(e = 1) {
        return (0, tH.t6)(this.#eU, this.#e_.gridLayout.bounds, this.#H, e)
      }
      #te(e, t, n) {
        let r = t.selectedSlideFrame
        if (!r || this.#eU.width <= 0 || this.#eU.height <= 0) return
        let i = n?.viewportChanged ?? !1,
          l = { width: this.#eU.width, height: this.#eU.height }
        if (t.gridLayout) {
          if (e.gridLayout && this.#eW)
            if (i) {
              let e = n?.previousViewport ?? l,
                r = this.#eN.getCamera(),
                i = (0, tH.t6)(e, t.gridLayout.bounds, n?.previousViewportInsets ?? this.#H),
                a = 0.01 > Math.abs(r.x - i.x) && 0.01 > Math.abs(r.y - i.y) && 1e-4 > Math.abs(r.k - i.k)
              this.#eN.setCamera(a ? this.#e3() : (0, ny.Nh)({ previousViewport: e, nextViewport: l, camera: r }))
            } else t.camera && this.#eN.setCamera(t.camera)
          else this.#eN.setCamera(t.camera ?? this.#e3(), { settled: null == t.camera })
          this.#eW = !0
          return
        }
        if (e.gridLayout) {
          ;(this.#eN.setCamera(
            t.camera ?? (0, _.nX)({ viewport: l, frame: r, zoomFactor: t.zoom, viewportInsets: this.#H }),
            { settled: null == t.camera },
          ),
            (this.#eW = !0))
          return
        }
        if (i && this.#eW) {
          let e = n?.previousViewport ?? l,
            t = this.#eN.getCamera(),
            i = (0, _.nX)({
              viewport: e,
              frame: r,
              zoomFactor: 1,
              viewportInsets: n?.previousViewportInsets ?? this.#H,
            }),
            a = 0.01 > Math.abs(t.x - i.x) && 0.01 > Math.abs(t.y - i.y) && 1e-4 > Math.abs(t.k - i.k)
          this.#eN.setCamera(
            a
              ? (0, _.nX)({ viewport: l, frame: r, zoomFactor: 1, viewportInsets: this.#H })
              : (0, _.iB)({
                  previousViewport: e,
                  nextViewport: l,
                  frame: r,
                  camera: t,
                  viewportInsets: this.#H,
                  previousViewportInsets: n?.previousViewportInsets,
                  contentBottomInset: this.#eG,
                }),
          )
          return
        }
        if (t.camera) {
          ;(this.#eN.setCamera(t.camera), (this.#eW = !0))
          return
        }
        ;(this.#eW &&
          e.selectedSlideIdx === t.selectedSlideIdx &&
          e.selectedSlideFrame?.width === t.selectedSlideFrame?.width &&
          e.selectedSlideFrame?.height === t.selectedSlideFrame?.height) ||
          (this.#eN.setCamera((0, _.nX)({ viewport: l, frame: r, zoomFactor: t.zoom, viewportInsets: this.#H }), {
            settled: !0,
          }),
          (this.#eW = !0))
      }
    }
    let nw = [0.25, 0.5, 1, 1.5, 2],
      nC = []
    function nS(e, t) {
      return (0, s.A)(
        "codex" === t ? "w-full gap-2" : "w-fit gap-2.5",
        "left" === e ? "flex-row" : "flex-col",
        "responsive" === e && "@[749px]/presentation-editor:flex-row",
      )
    }
    function nk(e) {
      return "left" === e ? "block" : "bottom" === e ? "hidden" : "hidden @[749px]/presentation-editor:block"
    }
    function nI(e) {
      return "codex" === e ? "w-28" : "w-40"
    }
    function nE(e) {
      return "codex" === e
        ? "w-[18px] min-w-[18px] shrink-0 pt-0.5 text-right text-[12px] leading-4 font-normal tabular-nums"
        : "pt-0.5 text-right text-sm font-semibold"
    }
    function nj(e) {
      return e.shiftKey
        ? "range"
        : (/Mac|iPhone|iPad/.test(navigator.platform) ? e.metaKey : e.ctrlKey)
          ? "toggle"
          : "replace"
    }
    function nM(e) {
      let t = (0, N.j)(e.controller, () =>
        (function (e = {}) {
          return new ei(e)
        })({ smartGuidesEnabled: (e.isEditing ?? !0) && (e.smartGuidesEnabled ?? !0) }),
      )
      return t ? (0, r.jsx)(nT, { ...e, controller: t }) : null
    }
    function nT({
      slideContextMenu: e,
      elementContextMenu: t,
      controller: n,
      editorCapabilities: i,
      formatPane: l,
      floatingBar: a,
      plugins: o = nC,
      slideThumbnailPlacement: I = "responsive",
      title: L = "presentation.pptx",
      fileMenuContent: D,
      headerRightContent: N,
      headerAnnotationIcon: H,
      headerCommentsIcon: K,
      headerSidebarIcon: $,
      headerEditingIcons: q,
      renderHeader: W,
      renderEditingControls: U,
      renderWidget: G,
      renderLayout: _,
      panelsInLayout: Z = !1,
      renderDrawingToolCommands: J,
      headerCenterContent: Y,
      headerTitleContent: Q,
      footerContent: ee,
      commentsSidebarContent: et,
      schedulesSidebarContent: en,
      renderCommentsSidebar: er,
      renderCommentsSidebarHeader: ei,
      renderCommentsSidebarEmptyAction: es,
      renderSidebarPanel: ed,
      renderThumbnailPanel: ec,
      commentsSidebarOpen: eu,
      schedulesSidebarOpen: ep,
      onCommentsSidebarOpenChange: eh,
      onSchedulesSidebarOpenChange: ef,
      selectedCommentThreadId: eg,
      hoveredCommentThreadId: ex,
      onSelectedCommentThreadChange: ev,
      fitOnOpen: ew,
      zoomToFitLabel: eC,
      renderHeaderZoomControl: eS,
      onClose: eM,
      onInteractionAttempt: eA,
      onElementDragStart: eP,
      renderSlideThumbnailOverlay: eL,
      className: eF,
      topViewportInsetPx: eD = 0,
      fitTopInsetPx: eN = 0,
      bottomViewportInsetPx: ez = 0,
      fitLeftInsetPx: eB = 0,
      fitRightInsetPx: eO = 0,
      layoutPanelFitInsetPx: eV = 0,
      layoutPanelSide: eH = "right",
      viewportAlignmentRef: eW,
      enablePageNavigation: eU,
      theme: eG = "web",
      isEditing: e_ = !0,
      showDisabledAddSlideButton: eX = !1,
      hideSpeakerNotes: eZ = !1,
      reviewTools: eJ,
      generation: eY,
      onHyperlinkClick: eQ,
      onHyperlinkHoverChange: e0,
      onFirstStackedPageImageLoad: e1,
      annotationsEnabled: e2 = !0,
      drawingAnnotationsEnabled: e4 = !0,
      commentThreadsEnabled: e3 = !0,
      smartGuidesEnabled: e5,
      artifactSearchEnabled: e6 = !0,
      renderFindBar: e8,
    }) {
      let e9,
        e7,
        te,
        tt,
        tn = (0, x.lP)("presentation", l),
        tr = (0, g.U)("presentation", a),
        ti = e_ && (e5 ?? !0)
      ;(0, d.useEffect)(() => {
        n.setSmartGuidesEnabled?.(ti)
      }, [n, ti])
      let tl = (0, eo.Zo)(n, { includeViewport: !1 })
      ;(0, d.useEffect)(() => {
        !e6 && tl.find.open && n.closeFind()
      }, [e6, n, tl.find.open])
      let ta = (0, d.useCallback)((e) => n.subscribe(e), [n]),
        to = (0, d.useCallback)(() => n.getSnapshot().commentThreads, [n]),
        ts = (0, d.useSyncExternalStore)(ta, to, to),
        td = (0, d.useMemo)(() => (0, x.WA)((0, b.lD)(b.mq, i), tn), [i, tn]),
        { panels: tc, stageOverlays: tu } = (0, d.useMemo)(() => {
          let e = (function (e) {
            let t = [],
              n = []
            for (let r of e) (t.push(...(r.panels ?? [])), n.push(...(r.stageOverlays ?? [])))
            return { panels: t, stageOverlays: n }
          })(o)
          return { ...e, panels: e.panels.filter((e) => e.id !== ea || td.inspector.length > 0) }
        }, [o, td]),
        tp = e2 && eJ?.annotation?.enabled !== !1,
        [th, tm] = (0, d.useState)(!1),
        tf = eJ?.annotation?.editingDisabled === !0,
        tg = tp && eJ?.annotation != null && !tf,
        [tx, tb] = (0, d.useState)(!1),
        [ty, tv] = (0, d.useState)(!1),
        [tw, tC] = (0, d.useState)(!1),
        [tS, tk] = (0, d.useState)(!1),
        [tI, tE] = (0, d.useState)(!1),
        [tj, tM] = (0, d.useState)(!1),
        [tT, tA] = (0, d.useState)(null),
        [tP, tL] = (0, d.useState)(null),
        [tF, tR] = (0, d.useState)(e_)
      tF !== e_ && (tR(e_), tC(!1), tk(!1), tE(!1), tM(!1), tA(null), tL(null))
      let tD = e4 && eJ?.drawing?.enabled !== !1,
        [tN, tz] = (0, d.useState)(!1),
        [tB, tO] = (0, d.useState)(0),
        [tV, tH] = (0, d.useState)(!1),
        tK = (0, d.useRef)(null),
        [t$, tq] = (0, d.useState)(null),
        [tW, tU] = (0, d.useState)(null),
        tG = (0, d.useRef)(null),
        t_ = (0, d.useRef)(null),
        tX = (0, d.useMemo)(() => new nv(), []),
        tZ = null != tl.gridLayout,
        [tJ, tY] = (0, d.useState)(null),
        tQ = null != tJ ? "grid" === tJ : tZ
      ;(0, O.o)(() => {
        if (null == tJ) return
        let e = !0,
          t = () => {
            e &&
              ((n.getSnapshot().gridLayout ? "grid" : "slide") === tJ || null == n.getViewTransitionCamera()) &&
              tY(null)
          }
        t()
        let r = n.subscribe(t),
          i = tX.subscribeToCameraChanges(() => queueMicrotask(t))
        return () => {
          ;((e = !1), r(), i())
        }
      }, [n, tX, tJ])
      let t0 = (0, d.useCallback)(
          (e) => {
            ;(tC(!1),
              tk(!1),
              tE(!1),
              tM(!1),
              tA(null),
              tL(null),
              n.setChartInsertionPreview(null),
              tm(!1),
              tz(!1),
              n.dispatch(e),
              requestAnimationFrame(() => tX.focus()))
          },
          [n, tX],
        ),
        t1 = e3 && null != et,
        t2 =
          eJ?.annotation?.canComment !== !1 &&
          e3 &&
          eJ?.annotation?.createCommentThreads &&
          !0 !== eJ.annotation.editingDisabled
            ? eJ.annotation.commentAuthor
            : void 0,
        t4 = (!e_ && e3) || null != t2 || t1,
        t3 = eJ?.annotation?.comments?.findMentionLabels
      ;((0, d.useEffect)(() => {
        n.setFindMentionLabels(t3)
      }, [n, t3]),
        (0, d.useEffect)(() => {
          n.setFindCommentsEnabled(t4)
        }, [n, t4]))
      let t5 = eu ?? tV,
        t6 = (0, d.useCallback)(
          (e) => {
            ;(null == eu && tH(e), eh?.(e))
          },
          [eu, eh],
        ),
        t8 = t4 && t5,
        t9 = (0, d.useMemo)(() => {
          let e = new Map()
          if (!t4) return e
          for (let t of ts ?? []) t.detached || "resolved" === t.status || e.set(t.slideId, (e.get(t.slideId) ?? 0) + 1)
          return e
        }, [ts, t4]),
        t7 = (0, d.useCallback)((e, t) => !tx && !(e < 0) && (n.setSelectedSlideIdx(e, t), !0), [tx, n])
      ;((0, d.useEffect)(() => {
        t4 || (tH(!1), tq(null), tU(null), (tG.current = null))
      }, [t4]),
        (0, d.useEffect)(() => {
          ;(tU(null), tC(!1), tk(!1), tE(!1), tM(!1), tA(null))
        }, [tl.selectedSlideIdx]),
        (0, d.useEffect)(() => {
          ;(!e_ || th || tN) && (tC(!1), tk(!1), tE(!1), tM(!1), tA(null))
        }, [e_, th, tN]),
        (0, d.useEffect)(() => {
          if (!t$) {
            tG.current = null
            return
          }
          let e = n.getSnapshot().commentThreads?.find((e) => e.threadId === t$),
            t = tl.slideIds[tl.selectedSlideIdx]
          if (e?.detached || e?.slideId === t) {
            tG.current = null
            return
          }
          tG.current !== t$ && (tq(null), tU(null))
        }, [n, t$, tl.selectedSlideIdx, tl.slideIds]))
      let ne = (0, d.useCallback)(() => {
          ;((tG.current = null), tq(null), tU(null), ev?.(null))
        }, [ev]),
        nn = (0, d.useCallback)(
          (e, t) => {
            let r = n.getSnapshot(),
              i = r.commentThreads?.find((t) => t.threadId === e)
            if (null != i) {
              if (!i.detached) {
                let t = r.slideIds[r.selectedSlideIdx]
                if (i.slideId !== t) {
                  if (tx) return
                  tG.current = e
                  let t = r.slideIds.indexOf(i.slideId)
                  t7(t < 0 ? i.slideIndex : t)
                }
                "slide" === i.target.kind ? n.clearElementSelection() : n.setSelectedElementId(i.target.elementId)
              }
              ;(tv(!1), tU(null), tq(e), ev?.(e, t))
            }
          },
          [tx, n, ev, t7],
        ),
        nr = tl.find.activeComment,
        ni = (0, d.useMemo)(() => {
          if (nr && t4)
            return {
              ...nr,
              requestId: JSON.stringify([tl.find.focusToken, tl.find.query, nr.threadId, nr.messageId, nr.matchStart]),
            }
        }, [nr, t4, tl.find.focusToken, tl.find.query])
      ;((0, v.j)({
        target: ni,
        enabled: !tx,
        threads: ts,
        onOpen: () => t6(!0),
        onSelect: (e) => nn(e, { preserveFocus: !0 }),
      }),
        (0, v.j)({
          target: eJ?.annotation?.commentTarget,
          enabled: t4 && !tx && null == ni,
          threads: ts,
          onOpen: () => t6(!0),
          onSelect: nn,
        }),
        (0, d.useEffect)(() => {
          if (void 0 !== eg && eg !== t$) {
            if (null == eg) {
              ;(n.clearElementSelection(), ne())
              return
            }
            nn(eg)
          }
        }, [ne, n, eg, nn, t$]),
        (0, d.useEffect)(() => {
          tp || tm(!1)
        }, [tp]),
        (0, d.useEffect)(() => {
          e_ && tf && tm(!1)
        }, [tf, e_]),
        (0, d.useEffect)(() => {
          tD || tz(!1)
        }, [tD]),
        (0, d.useEffect)(() => {
          th && tp && (n.clearElementSelection(), n.setHoveredElementId(null))
        }, [tp, th, n]),
        (0, d.useEffect)(() => {
          tN && tD && (n.clearElementSelection(), n.setHoveredElementId(null))
        }, [n, tD, tN]),
        (0, d.useEffect)(() => {
          if (!tN) return
          let e = (e) => {
            "Escape" === e.key && tz(!1)
          }
          return (
            window.addEventListener("keydown", e, !0),
            () => {
              window.removeEventListener("keydown", e, !0)
            }
          )
        }, [tN]))
      let nl = null != en && !0 === ep,
        na = (0, d.useCallback)(
          (e) => {
            e === ea && (t5 && t6(!1), nl && ef?.(!1))
          },
          [t5, t6, nl, ef],
        ),
        no = (0, z.$)(tc, na),
        [ns, nd] = (0, d.useState)(() => Object.fromEntries(tl.slideIds.map((e) => [e, null]))),
        [nc, nu] = (0, d.useState)(() => Object.fromEntries(tl.slideIds.map((e) => [e, null]))),
        [np, nm] = (0, d.useState)(() => tl.slideIds),
        [ng, nb] = (0, d.useState)(null),
        ny = (0, d.useRef)(null),
        [nw, nS] = (0, d.useState)(null),
        [nk, nI] = (0, d.useState)(null),
        [nE, nj] = (0, d.useState)(!1),
        [nM, nN] = (0, d.useState)("after-selection"),
        [nz, nB] = (0, d.useState)(null),
        [nO, nV] = (0, d.useState)(null),
        [nH, nK] = (0, d.useState)(!1),
        [n$] = (0, d.useState)(
          () =>
            ("u" > typeof navigator && navigator.maxTouchPoints > 0) ||
            ("u" > typeof window && (window.matchMedia?.("(any-pointer: coarse)").matches ?? !1)),
        ),
        [nq, nW] = (0, d.useState)(!1),
        [nU, nG] = (0, d.useState)(!1),
        [n_, nX] = (0, d.useState)(!1),
        nZ = (0, d.useRef)(null),
        [nJ, nY] = (0, d.useState)(null),
        nQ = (0, d.useRef)(!1),
        n0 = (0, d.useRef)(!1),
        n1 = (0, d.useRef)(null),
        n2 = (0, d.useRef)(null),
        n4 = (0, d.useRef)([]),
        n3 = (0, d.useRef)(null),
        n5 = (0, d.useRef)([]),
        n6 = (0, d.useRef)(null),
        n8 = (0, d.useRef)(null),
        n9 = (0, d.useRef)(new Map()),
        n7 = (0, d.useRef)(new Map()),
        re = (function (e) {
          let { subscribe: t, getSnapshot: n } = e.backgroundSlideWork ?? u
          return (0, d.useSyncExternalStore)(t, n, n)
        })(n),
        rt = (0, d.useMemo)(() => new c(B.ar), [n])
      ;(0, d.useEffect)(
        () => () => {
          ;(rt.cancelPending(), n9.current.clear())
        },
        [rt],
      )
      let rn = (0, d.useRef)(e_),
        rr = (0, d.useRef)(ns),
        ri = (0, d.useRef)(nc),
        rl = (0, d.useRef)(np),
        ra = (0, w.FR)(
          (0, w.MS)(w.cA, { activationConstraint: { distance: 4 } }),
          (0, w.MS)(w.IG, { activationConstraint: { delay: 350, tolerance: 8 } }),
        ),
        ro = (0, d.useMemo)(() => [C.Mk], []),
        rs = "left" === I,
        rd = "bottom" === I,
        rc = "codex" === eG,
        ru = rc && e_,
        [rp, rh] = (0, d.useState)(0),
        rm = ru && !W ? 44 : 0
      null != W && null != _ && (rm = rp)
      let rf = "responsive" === I,
        rg =
          np.length > 0 &&
          !tZ &&
          rf &&
          !t1 &&
          !tg &&
          (!W || !e_) &&
          !tu.some((e) => e.visibleWhenReadOnly || e.supportsReadOnlySelection),
        rx = rc && rf,
        rb = nO ?? (rx && (n$ || nH)),
        ry = rx || (nH && !rd),
        rv = (0, d.useCallback)(() => {
          if (!rx) return !0
          let { slideRect: e, zoom: t } = n.getSnapshot()
          return !e || Math.abs(t - 1) >= 1e-4 || e.left >= 166
        }, [n, rx]),
        rw = (0, d.useSyncExternalStore)(ta, rv, rv)
      e9 = rx ? (nH && rw ? "desktop" : "compact") : void 0
      let rC = rb || nE || null != ng || nz?.dataset.testid === "popcorn-presentation-add-slide",
        rS = eU ?? rc,
        rk = rx ? (0, T.os)(rb) : nH && (rs || rf) ? 220 : 0,
        {
          showNotesPanel: rI,
          hasAttachedSpeakerNotes: rE,
          notesHeight: rj,
          setNotesHeight: rM,
          setAttachedNotesFitInset: rT,
          notesViewportInset: rA,
          notesFitBottomInset: rP,
          notesFitVerticalMargin: rL,
        } = (function ({ theme: e, showNotes: t, hasDesktopChromeWidth: n }) {
          let [r, i] = (0, d.useState)(104),
            [l, a] = (0, d.useState)(0),
            o = t && "codex" !== e,
            s = t && "codex" === e && n
          return {
            showNotesPanel: o,
            hasAttachedSpeakerNotes: s,
            notesHeight: r,
            setNotesHeight: i,
            setAttachedNotesFitInset: a,
            notesViewportInset: o && n && r > 0 ? r + 40 + 11 : 0,
            notesFitBottomInset: s ? l : 0,
            notesFitVerticalMargin: s ? 36 : void 0,
          }
        })({ theme: eG, showNotes: !eZ && (e_ || tl.notesText.trim().length > 0), hasDesktopChromeWidth: n_ }),
        rF = (0, d.useRef)([]),
        rR = (0, d.useCallback)(() => {
          let e = n.getSnapshot(),
            t = tc.filter(
              (t) =>
                (e_ || t.visibleWhenReadOnly) &&
                no.isPanelOpen(t.id) &&
                (t.isVisible?.({ controller: n, snapshot: e }) ?? !0),
            )
          return (
            (t.length !== rF.current.length || t.some((e, t) => e !== rF.current[t])) && (rF.current = t),
            rF.current
          )
        }, [n, e_, no, tc]),
        rD = (0, d.useSyncExternalStore)(ta, rR, rR),
        rN = 0 === rD.length ? 0 : Math.max(...rD.map((e) => e.widthPx ?? 336)) + 16,
        rz = Z ? 0 : rN,
        rB = Z ? Math.max(0, t8 || nl ? eV : Math.min(rN, eV)) : 0,
        rO = W ? 0.1 : void 0,
        rV = (0, d.useMemo)(
          () => ({
            left: rk,
            top: Math.max(0, eD),
            right: rz,
            bottom: rA + Math.max(0, ez),
            fitTopInset: rm + Math.max(0, eN),
            fitLeftInset: Math.max(0, eB, "left" === eH ? rB : 0),
            fitRightInset: Math.max(0, eO, "right" === eH ? rB : 0),
            fitBottomInset: rP,
            minimumFitVerticalMargin: rL,
            fitMargin: rx ? 24 : void 0,
            minimumZoomScale: rO,
          }),
          [ez, eB, eO, eN, rm, eH, rP, rL, rA, eD, rk, rx, rB, rz, rO],
        ),
        rH = (0, d.useMemo)(() => ({ ...rV, left: 0, fitBottomInset: 0, minimumFitVerticalMargin: void 0 }), [rV]),
        rK = tZ ? rH : rV,
        r$ = (0, d.useCallback)(() => {
          if (tx) return
          let e = tQ ? "slide" : "grid"
          ;(n.setViewMode(e, "slide" === e ? rV : rH), tY(e), requestAnimationFrame(() => tX.focus()))
        }, [tx, n, tQ, rV, rH, tX])
      ;((0, O.o)(() => {
        if (!nJ) return
        let e = null,
          t = (e) => {
            let t = e >= (rx ? 820 : 749),
              n = rg && e > 0 && e <= 688,
              r = e >= 900
            ;(t !== nQ.current && nj(!1),
              (nQ.current = t),
              nK((e) => (e === t ? e : t)),
              nW((e) => !e || e),
              nG((e) => (e === n ? e : n)),
              nX((e) => (e === r ? e : r)))
          }
        if (
          (t(nJ.clientWidth),
          "u" > typeof window &&
            "function" == typeof window.requestAnimationFrame &&
            (e = window.requestAnimationFrame(() => {
              t(nJ.clientWidth)
            })),
          "u" < typeof ResizeObserver)
        )
          return () => {
            null != e && "function" == typeof window.cancelAnimationFrame && window.cancelAnimationFrame(e)
          }
        let n = new ResizeObserver((e) => {
          let n = e[0]
          t(n?.contentRect.width && n.contentRect.width > 0 ? n.contentRect.width : nJ.clientWidth)
        })
        return (
          n.observe(nJ),
          () => {
            ;(null != e && "function" == typeof window.cancelAnimationFrame && window.cancelAnimationFrame(e),
              n.disconnect())
          }
        )
      }, [rg, nJ, I, rx]),
        (0, d.useEffect)(() => {
          ;((rr.current = ns), (ri.current = nc))
        }, [nc, ns]),
        (0, d.useEffect)(() => {
          rl.current = np
        }, [np]),
        (0, O.o)(() => {
          if (null != nw) {
            var e, t
            let n, r, i
            return (
              (e = n4.current),
              (t = n1.current),
              (n = new Map(e.flatMap((e) => (e ? [[e.dataset.slideId, e]] : [])))),
              (r = t?.getBoundingClientRect()),
              (i = nw
                .flatMap((e) => {
                  let t = n.get(e.slideId)
                  if (!t) return []
                  let i = t.getBoundingClientRect()
                  if (r && (i.bottom <= r.top || i.top >= r.bottom || i.right <= r.left || i.left >= r.right)) return []
                  let l = e.x - i.x,
                    a = e.y - i.y
                  if (0.5 > Math.abs(l) && 0.5 > Math.abs(a)) return []
                  let o = getComputedStyle(t)
                  return [
                    {
                      button: t,
                      x: l,
                      y: a,
                      scale: i.width / parseFloat(o.width),
                      isFront: e.isFront,
                      duration: parseFloat(o.getPropertyValue("--transition-duration-relaxed")) || 300,
                      easing: o.getPropertyValue("--ease-enter-snappy").trim() || "cubic-bezier(0.23, 1, 0.32, 1)",
                    },
                  ]
                })
                .map(({ button: e, x: t, y: n, scale: r, isFront: i, duration: l, easing: a }) =>
                  e.animate(
                    [
                      { transform: `translate(${t / r}px, ${n / r}px)`, zIndex: i ? 2 : 1 },
                      { transform: "translate(0, 0)", zIndex: i ? 2 : 1 },
                    ],
                    { duration: l, easing: a },
                  ),
                )),
              () => i.forEach((e) => e.cancel())
            )
          }
        }, [nw]),
        (0, d.useEffect)(() => {
          ;(nm(tl.slideIds),
            nd((e) => {
              let t = {}
              for (let n of tl.slideIds) t[n] = e[n] ?? null
              return t
            }),
            nu((e) => {
              let t = {}
              for (let n of tl.slideIds) t[n] = e[n] ?? null
              return t
            }))
        }, [tl.slideIds]))
      let rq = (0, d.useMemo)(
          () => Object.fromEntries(tl.slideIds.map((e, t) => [e, tl.slideLabels[t] ?? `Slide ${t + 1}`])),
          [tl.slideIds, tl.slideLabels],
        ),
        rW = (0, d.useMemo)(() => Object.fromEntries(tl.slideIds.map((e, t) => [e, t])), [tl.slideIds]),
        rU = tl.slideIds[tl.selectedSlideIdx] ?? null,
        rG = (0, d.useMemo)(() => new Set(tl.hiddenSlideIds), [tl.hiddenSlideIds]),
        r_ = rg && (!nq || nU)
      ;(0, d.useEffect)(() => {
        let e = nZ.current
        if (r_ && e) return nt(e, eG, n)
      }, [n, r_, eG])
      let rX =
          !r_ && tp && eJ?.annotation?.onSubmit && !eJ.annotation.savedSubmitDisabled
            ? (e) => t_.current?.requestChanges(e)
            : void 0,
        rZ = !r_,
        rJ = rS && tl.slideCount > 1 && !r_,
        rY = rZ
          ? (0, r.jsx)(nD, {
              controller: n,
              stageRuntime: tX,
              usesCompactTitle: rc,
              isEditing: e_,
              zoomToFitLabel: eC,
              renderHeaderZoomControl: eS,
              onInteractionAttempt: eA,
            })
          : null,
        rQ = (0, d.useCallback)(
          (e, t) => {
            let n = t7(e, t)
            return (n && t1 && e !== tl.selectedSlideIdx && ne(), n)
          },
          [ne, t1, t7, tl.selectedSlideIdx],
        ),
        r0 = !tx && no.isPanelAvailable(ea),
        r1 = (0, d.useCallback)(
          (e) => {
            rQ(n.getSnapshot().slideIds.indexOf(e)) && no.openPanel(ea)
          },
          [n, no, rQ],
        ),
        r2 = (0, d.useRef)(null)
      ;(0, d.useEffect)(() => {
        let e = r2.current
        if (!e || e.deletedSlideIds.some((e) => tl.slideIds.includes(e) || np.includes(e))) return
        r2.current = null
        let t = tl.slideIds.indexOf(e.nextSlideId),
          n = n4.current[t]
        ;(n?.scrollIntoView?.({ block: "nearest", inline: "nearest" }), n?.focus())
      }, [np, tl.slideIds])
      let r4 = (0, d.useCallback)(
          (e) => {
            if (!e_ || tx || tl.slideIds.length <= 1) return
            let t = tl.slideIds[e]
            if (!t) return
            let r = tl.selectedSlideIds.includes(t) ? tl.selectedSlideIds : [t],
              i = tl.slideIds.filter((e) => !r.includes(e))
            if (0 === i.length) return
            let l = rU && !r.includes(rU) ? rU : i[Math.min(tl.slideIds.indexOf(r[0]), i.length - 1)]
            ;((r2.current = { deletedSlideIds: r, nextSlideId: l }),
              r.length > 1 ? n.deleteSelectedSlides() : n.deleteSlide(e))
          },
          [tx, n, e_, rU, tl.slideIds, tl.selectedSlideIds],
        ),
        r3 = (0, d.useCallback)(
          (e, t) => {
            !e_ ||
              tx ||
              e < 0 ||
              (tl.selectedSlideIds.includes(tl.slideIds[e]) && tl.selectedSlideIds.length > 1
                ? n.setSelectedSlidesHidden(t)
                : n.setSlideHidden(e, t))
          },
          [tx, n, e_, tl.slideIds, tl.selectedSlideIds],
        ),
        r5 = (0, d.useCallback)(
          (e) => {
            !e_ ||
              tx ||
              e < 0 ||
              (tl.selectedSlideIds.includes(tl.slideIds[e]) && tl.selectedSlideIds.length > 1
                ? n.duplicateSelectedSlides()
                : (n.setSelectedSlideIdx(e), n.duplicateSelectedSlide()))
          },
          [tx, n, e_, tl.slideIds, tl.selectedSlideIds],
        ),
        r6 = (0, d.useCallback)(
          (e) => {
            !e_ || tx || e < 0 || (n.setSelectedSlideIdx(e), n.addSlide())
          },
          [tx, n, e_],
        ),
        r8 = (0, d.useCallback)((e, t, n) => {
          let r = n4.current[e]
          ;(r !== t && (r && n8.current?.unobserve(r), t && n8.current?.observe(t)),
            (n4.current[e] = t),
            t &&
              t.dataset.slideId === n3.current &&
              ((n3.current = null),
              t.ownerDocument.activeElement === t.ownerDocument.body && t.focus({ preventScroll: !0 })),
            t && n && n6.current?.observe(t))
        }, []),
        r9 = (0, d.useCallback)(() => {}, []),
        r7 = (0, d.useCallback)(
          (e, t = "after-selection") => {
            if (tx) return
            let n = e ?? nZ.current?.querySelector('[data-testid="popcorn-presentation-insert-button"]')
            n && (nN(t), nB((e) => (e === n ? null : n)))
          },
          [tx],
        )
      ;(0, d.useEffect)(() => {
        rn.current !== e_ && ((rn.current = e_), rt.cancelPending(), n9.current.clear(), n7.current.clear())
      }, [e_, rt])
      let ie = (0, d.useCallback)(
        async (e, t) => {
          let r = n.getSnapshot(),
            i = r.slideIds[e]
          if (!i || e >= r.slideCount) return
          let l = t?.cacheKind === "stacked-page",
            a = l ? ri.current[i] : rr.current[i],
            o = `${l ? "stacked-page" : "rail"}:${i}`,
            s = tl.displayColors,
            d = { colors: s, isEditing: e_, presentationVersion: r.presentationVersion },
            c = n9.current.get(o),
            p = n7.current.get(o)
          ;(t?.force || null == a || p?.colors !== s || p.presentationVersion !== d.presentationVersion) &&
            (c?.colors !== s || c.isEditing !== e_ || c.presentationVersion !== d.presentationVersion) &&
            (n9.current.set(o, d),
            rt.schedule(
              o,
              async () => {
                try {
                  await (0, X.ensurePopcornPresentationRenderDepsLoaded)()
                  let e = n.getSnapshot()
                  if (
                    n9.current.get(o) !== d ||
                    !(i === e.slideIds[e.selectedSlideIdx] || (n.backgroundSlideWork ?? u).getSnapshot()) ||
                    e.displayColors !== s ||
                    e.presentationVersion !== d.presentationVersion ||
                    rn.current !== e_ ||
                    !e.slideIds.includes(i)
                  )
                    return
                  let t = await n.requestSlideThumbnail(i, l ? { cssMaxPx: 960 } : void 0),
                    r = n.getSnapshot()
                  if (
                    n9.current.get(o) !== d ||
                    r.displayColors !== s ||
                    r.presentationVersion !== d.presentationVersion ||
                    rn.current !== e_ ||
                    !r.slideIds.includes(i) ||
                    !t
                  )
                    return
                  ;(n7.current.set(o, d), (l ? nu : nd)((e) => (e[i] === t ? e : { ...e, [i]: t })))
                } catch (e) {
                  ;(0, B.ar)(e)
                } finally {
                  n9.current.get(o) === d && n9.current.delete(o)
                }
              },
              null == a,
            ))
        },
        [n, e_, tl.displayColors, rt],
      )
      ;((0, d.useEffect)(() => {
        let e = !0,
          t = () => {
            let e = n.getSnapshot(),
              t = e.slideIds[e.selectedSlideIdx]
            ;(ie(e.selectedSlideIdx, { force: !0 }),
              t && (nU || null != ri.current[t]) && ie(e.selectedSlideIdx, { cacheKind: "stacked-page", force: !0 }))
          },
          r = n.getSnapshot().presentationVersion,
          i = () => {
            if (e) for (let e of (t(), [...n4.current, ...n5.current])) e && n6.current?.observe(e)
          }
        ;(rt.replacePendingContentRefresh(i), t())
        let l = n.subscribe(() => {
          let e = n.getSnapshot().presentationVersion
          e !== r && ((r = e), rt.invalidateContent(i))
        })
        return () => {
          ;((e = !1), l())
        }
      }, [n, ie, e_, tl.displayColors, tl.selectedSlideIdx, tl.slideIds, nU, rt]),
        (0, d.useEffect)(() => {
          if (re && "u" > typeof IntersectionObserver) {
            for (let e of (n6.current?.disconnect(),
            (n6.current = new IntersectionObserver(
              (e) => {
                for (let t of e) {
                  let e = t.target.getAttribute("data-index")
                  if (!t.isIntersecting || null == e) continue
                  let n = Number(e)
                  if (!Number.isFinite(n)) continue
                  let r =
                      "stacked-page" === t.target.getAttribute("data-thumbnail-cache-kind") ? "stacked-page" : "rail",
                    i = "stacked-page" === r
                  ;(ie(n, { cacheKind: r, force: i }),
                    ie(n + 1, { cacheKind: r, force: i }),
                    n6.current?.unobserve(t.target))
                }
              },
              { root: nJ, rootMargin: "200px", threshold: 0.05 },
            )),
            [...n4.current, ...n5.current]))
              e && n6.current.observe(e)
            return () => {
              n6.current?.disconnect()
            }
          }
        }, [nJ, ie, re, tl.slideCount]),
        (0, d.useEffect)(() => {
          if (!re || "u" < typeof IntersectionObserver) return
          let e = new Set(),
            t = new Map(),
            r = [],
            i = !0,
            l = () => {
              let e = new Set(t.values()),
                i = n.getSnapshot().slideIds.filter((t) => e.has(t))
              ;(i.length !== r.length || i.some((e, t) => e !== r[t])) &&
                ((r = i), n.setImageHydrationPrioritySlideIds(i))
            },
            a = new IntersectionObserver(
              (n) => {
                if (i) {
                  for (let r of n) {
                    if (!e.has(r.target)) continue
                    let n = r.target.getAttribute("data-slide-id")
                    r.isIntersecting && n ? t.set(r.target, n) : t.delete(r.target)
                  }
                  l()
                }
              },
              { root: nJ, threshold: 0.05 },
            ),
            o = {
              observe(t) {
                ;(e.add(t), a.observe(t))
              },
              unobserve(n) {
                ;(a.unobserve(n), e.delete(n), t.delete(n) && l())
              },
            }
          for (let e of ((n8.current = o), [...n4.current, ...n5.current])) e && o.observe(e)
          return () => {
            ;((i = !1),
              a.disconnect(),
              n8.current === o && (n8.current = null),
              n.setImageHydrationPrioritySlideIds([]))
          }
        }, [n, nJ, re]))
      let it = (function ({ controller: e, canEdit: t, displaySlideIds: n, selectedSlideId: r }) {
          let i = (0, d.useRef)(null)
          return (
            (0, d.useEffect)(() => {
              let e = i.current
              if (!e) return
              let { activeElement: t, body: l } = e.source.ownerDocument,
                a = !e.source.isConnected && t === l
              if (t !== e.source && !a) {
                i.current = null
                return
              }
              if (!r || e.previousIds.includes(r) || !n.includes(r)) return
              let o = e.pane.querySelector('button[data-slide-id][data-active="true"]')
              o?.dataset.slideId === r &&
                ((i.current = null),
                o.scrollIntoView?.({ block: "nearest", inline: "nearest" }),
                o.focus({ preventScroll: !0 }))
            }, [n, r]),
            (0, d.useCallback)(
              (n) => {
                if ("a" === n.key.toLowerCase() && (n.metaKey || n.ctrlKey) && !n.altKey && !n.shiftKey)
                  return (n.preventDefault(), n.stopPropagation(), !0)
                let r = e.getSnapshot()
                return t && "z" === n.key.toLowerCase() && (0, M.Ul)(n, { requirePrimaryModifier: !0, allowShift: !0 })
                  ? (e.dispatch({ kind: n.shiftKey ? "redo" : "undo" }), n.preventDefault(), n.stopPropagation(), !0)
                  : !!(
                      t &&
                      "d" === n.key.toLowerCase() &&
                      n.target instanceof HTMLButtonElement &&
                      n.target.hasAttribute("data-slide-id") &&
                      r.selectedSlideIds.length > 0 &&
                      (0, M.Ul)(n, { requirePrimaryModifier: !0 })
                    ) &&
                      (n.preventDefault(),
                      n.stopPropagation(),
                      (i.current = { source: n.target, pane: n.currentTarget, previousIds: r.slideIds }),
                      r.selectedSlideIds.length > 1 ? e.duplicateSelectedSlides() : e.duplicateSelectedSlide(),
                      !0)
              },
              [t, e],
            )
          )
        })({ controller: n, canEdit: e_ && !tx, displaySlideIds: np, selectedSlideId: rU }),
        ir = (0, d.useCallback)(
          (e) => {
            if (!(e.target instanceof Node) || !e.currentTarget.contains(e.target) || (0, M.tr)(e.target) || it(e))
              return
            if ("Backspace" === e.key || "Delete" === e.key) {
              if (!e_ || 0 === tl.selectedSlideIds.length || !(0, M.Ul)(e)) return
              ;(e.preventDefault(), e.stopPropagation(), r4(tl.selectedSlideIdx))
              return
            }
            let t = 0
            switch (e.key) {
              case "ArrowUp":
              case "ArrowLeft":
                t = -1
                break
              case "ArrowDown":
              case "ArrowRight":
                t = 1
                break
              default:
                return
            }
            let n = tl.selectedSlideIdx,
              r = tl.slideIds.length - 1,
              i = t < 0 ? Math.max(0, n - 1) : Math.min(r, n + 1)
            if (i === n) return
            if (!t7(i, e.shiftKey ? "range" : "replace")) return void e.preventDefault()
            let l = e.currentTarget.classList.contains("popcorn-presentation-stacked-pages")
              ? n5.current[i]
              : n4.current[i]
            ;(l?.scrollIntoView?.({ block: "nearest", inline: "nearest" }), l?.focus(), e.preventDefault())
          },
          [it, r4, e_, t7, tl.selectedSlideIdx, tl.selectedSlideIds, tl.slideIds.length],
        ),
        ii = (0, d.useCallback)(
          (e) => {
            nS(null)
            let t = "string" == typeof e.active.id ? e.active.id : null,
              r = n.getSnapshot().selectedSlideIds,
              i = null != t && r.includes(t)
            t && !i && rQ(rl.current.indexOf(t))
            let l = n4.current[rl.current.indexOf(t ?? "")]
            if (l) {
              let e = getComputedStyle(l),
                n = parseFloat(e.width),
                a = l.getBoundingClientRect(),
                o = a.width / n,
                s = n1.current?.getBoundingClientRect(),
                d = (i ? r : [])
                  .filter((e) => e !== t)
                  .flatMap((e, t) => {
                    let n = n4.current[rl.current.indexOf(e)]?.getBoundingClientRect()
                    return null != n &&
                      null != s &&
                      n.bottom > s.top &&
                      n.top < s.bottom &&
                      n.right > s.left &&
                      n.left < s.right
                      ? [
                          {
                            slideId: e,
                            thumbnail: ns[e] ?? null,
                            fromX: (n.left - a.left) / o,
                            fromY: (n.top - a.top) / o,
                            depth: t + 1,
                          },
                        ]
                      : []
                  })
              nI({
                width: n,
                height: parseFloat(e.height),
                scale: o,
                selectionColor: e.getPropertyValue("--presentation-selection-color"),
                placement: "row" === e.flexDirection ? "left" : "bottom",
                cards: d,
              })
            }
            nb(t)
          },
          [n, rQ, ns],
        ),
        il = (0, d.useCallback)(() => {
          ;(nS(V(n4.current, ny.current, tl.selectedSlideIds)), nm(tl.slideIds), nb(null))
        }, [tl.slideIds, tl.selectedSlideIds]),
        ia = (0, d.useCallback)(
          (e) => {
            if ((nS(V(n4.current, ny.current, tl.selectedSlideIds)), nb(null), !e_ || tx)) return
            let t = "string" == typeof e.active.id ? e.active.id : null,
              r = "string" == typeof e.over?.id ? e.over.id : null
            if (!t || !r || t === r) return
            let i = rl.current,
              l = i.indexOf(t),
              a = i.indexOf(r)
            l < 0 ||
              a < 0 ||
              l === a ||
              (nm((e) => (0, el.y)(e, tl.selectedSlideIds, l, a)),
              tl.selectedSlideIds.length > 1 && tl.selectedSlideIds.includes(t)
                ? n.moveSelectedSlides(l, a)
                : n.moveSlide(l, a))
          },
          [tx, n, e_, tl.slideIds, tl.selectedSlideIds],
        ),
        io = (0, d.useCallback)((e) => {
          let t = e.relatedTarget
          ;(t instanceof Node && e.currentTarget.contains(t)) || ((n0.current = !1), nj(!1))
        }, [])
      ;(0, d.useEffect)(() => {
        if (rb) return
        let e = n2.current,
          t = e?.parentElement
        if (null != e && null != t)
          return (0, T.b7)({
            region: t,
            trigger: e,
            open: rC,
            onEnter: () => nj(!0),
            onLeave: () => {
              let e = t.ownerDocument.activeElement
              if (t.contains(e)) {
                if (!n0.current) return
                e instanceof HTMLElement && e.blur()
              }
              ;((n0.current = !1), nj(!1))
            },
          })
      }, [nJ, rC, rb, rx])
      let is = (0, d.useCallback)((e, t, n) => {
          let r = n5.current[e]
          ;(r !== n && (r && n8.current?.unobserve(r), n && n8.current?.observe(n)),
            (n5.current[e] = n),
            n && null == ri.current[t] && n6.current?.observe(n))
        }, []),
        id = rd ? "bottom" : rs || rx ? "left" : "responsive",
        ic = rx ? "codex" : "standard",
        iu = (0, d.useCallback)(() => {
          let t = new Set(tl.selectedSlideIds),
            n = null != ng && t.has(ng),
            i = e_ && tl.selectedSlideIds.every((e) => rG.has(e)),
            l = (0, r.jsxs)("div", {
              ref: "codex" === ic ? nx : void 0,
              className: (0, s.A)(
                "flex min-w-full justify-[safe_center]",
                (0, s.A)(
                  {
                    left: "w-full flex-col",
                    bottom: "w-fit",
                    responsive:
                      "w-fit @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:flex-col",
                  }[id],
                  "codex" === ic
                    ? "items-start gap-1"
                    : {
                        left: "h-fit min-h-full items-center gap-2.5 justify-[safe_center]",
                        bottom: "gap-6",
                        responsive:
                          "gap-6 @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]",
                      }[id],
                ),
              ),
              children: [
                np.map((l, a) => {
                  let o = l === rU,
                    s = o || re,
                    d = rW[l] ?? -1,
                    c = t.has(l),
                    u = rG.has(l),
                    p = s ? (ns[l] ?? null) : null,
                    h = {
                      slideId: l,
                      index: a,
                      label: rq[l] ?? `Slide ${a + 1}`,
                      thumbnail: p,
                      isSelected: c,
                      isActive: o,
                      isHidden: u,
                      commentThreadCount: t9.get(l),
                      selectedSlideCount: tl.selectedSlideIds.length,
                      renderSlideThumbnailOverlay: s ? eL : void 0,
                      slideThumbnailPlacement: id,
                      thumbnailVariant: ic,
                    }
                  return e_ && (s || c)
                    ? (0, r.jsx)(
                        nF,
                        {
                          ...h,
                          slideContextMenu: e,
                          snapshotIndex: d,
                          isInDragPreview: n && c,
                          isVerticalDrag: nk?.placement !== "bottom",
                          canDelete: np.length > (c ? tl.selectedSlideIds.length : 1),
                          selectionHidden: c ? i : u,
                          onSelectSlide: rQ,
                          onAddSlideAfter: r6,
                          onShowFormattingOptions: r0 ? r1 : void 0,
                          onDeleteSlide: r4,
                          onDuplicateSlide: r5,
                          onSetSlideHidden: r3,
                          onRegisterButtonRef: r8,
                        },
                        l,
                      )
                    : (0, r.jsx)(
                        nL,
                        {
                          ...h,
                          onSelect: (e) => rQ(d, e),
                          buttonRef: (e) => {
                            let t = n4.current[a]
                            ;(!e &&
                              e_ &&
                              !re &&
                              t &&
                              t.ownerDocument.activeElement === t &&
                              ((n3.current = l),
                              queueMicrotask(() => {
                                n3.current = null
                              })),
                              r8(a, e, null == p))
                          },
                        },
                        l,
                      )
                }),
                (e_ || eX) &&
                  (0, r.jsx)(nR, {
                    disabled: !e_,
                    onAddSlide: (e) => r7(e, "end"),
                    pickerOpen: e_ && null != nz,
                    slideThumbnailPlacement: id,
                    thumbnailVariant: ic,
                  }),
              ],
            })
          return e_ ? (0, r.jsx)(S.gB, { items: np, strategy: S.kL, children: l }) : l
        }, [
          e,
          ng,
          r7,
          r6,
          r0,
          t9,
          r4,
          r5,
          np,
          nk?.placement,
          rG,
          e_,
          eX,
          r1,
          r8,
          eL,
          rU,
          re,
          tl.selectedSlideIds,
          rQ,
          r3,
          rW,
          rq,
          ns,
          nz,
          id,
          ic,
        ]),
        ip = (e) => {
          !tf && !tx && eJ?.annotation && (e && (eJ.annotation.onModeEnabled?.(), tz(!1)), tm(e))
        },
        ih = () => ip(!th),
        im =
          ru || W
            ? (0, r.jsx)(ey.b_, {
                disabled: !tg,
                label: eJ?.annotation?.modeLabel ?? (W ? "Request edits" : "Annotation"),
                onClick: ih,
                pressed: th,
                testId: "popcorn-presentation-annotation-button",
                size: W ? "default" : "compact",
                variant: "annotation",
                children: "function" == typeof H ? H(th) : (H ?? (0, r.jsx)(E.kZ, { size: W ? "default" : "compact" })),
              })
            : eJ?.annotation && tp
              ? (0, r.jsx)(j.$Q, {
                  disabled: tf,
                  active: th,
                  onClick: ih,
                  testId: "popcorn-presentation-annotation-button",
                })
              : null,
        ig = null == im ? null : (eJ?.annotation?.wrapModeButton?.(im) ?? im),
        ix = (e) => {
          ;(nV(e), nj(!1), (n0.current = !1))
        },
        ib = (0, r.jsx)(eT, { active: tZ, disabled: tx, onToggle: r$, size: W ? "default" : "compact" }),
        iy = (e) => {
          ;(n.textClear(),
            n.setChartInsertionPreview(null),
            tL(null),
            tm(!1),
            tz(!1),
            tv(!1),
            tC(!1),
            tM(!1),
            tA(null),
            tk("image" === e),
            tE("widget" === e))
        }
      null != eY && !eY.disabled && ((e7 = () => iy("image")), tl.canInsertWidgets && (te = () => iy("widget")))
      let iv = {
          onInsertText: () => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tL(null),
              tm(!1),
              tz(!1),
              tv(!1),
              tk(!1),
              tE(!1),
              tM(!1),
              tA(null),
              tC((e) => !e))
          },
          onGenerateImage: e7,
          onGenerate: te,
          onInsertImage: async (e) => {
            t0({ kind: "insert-image", ...(await n.prepareImage(e)) })
          },
          onInsertChart: (e) => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tm(!1),
              tz(!1),
              tC(!1),
              tk(!1),
              tE(!1),
              tM(!1),
              tA(null),
              tv(!1),
              tL(e))
          },
          onInsertTable: () => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tL(null),
              tm(!1),
              tz(!1),
              tv(!1),
              tC(!1),
              tk(!1),
              tE(!1),
              tA(null),
              tM(!0))
          },
          onInsertShape: (e, t) => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tL(null),
              tC(!1),
              tk(!1),
              tE(!1),
              tM(!1),
              tm(!1),
              tz(!1),
              tv(!1),
              tA({ geometry: e, arrow: "arrow" === t || t?.arrow }))
          },
        },
        iw = (e) => {
          ;(e && no.closePanel(ea), t6(e), t1 || ne())
        },
        iC = () => iw(!t5),
        iS = (e) => {
          ;(e && no.closePanel(ea), ef?.(e))
        },
        ik =
          eJ?.drawing && tD
            ? (0, r.jsx)(j.Q5, {
                active: tN,
                onClick: () => {
                  tf ||
                    tx ||
                    tz((e) => {
                      let t = !e
                      return (t ? tm(!1) : tO((e) => e + 1), t)
                    })
                },
                testId: "popcorn-presentation-drawing-button",
              })
            : null,
        iI =
          r_ || null == t2 ? void 0 : { "data-popcorn-comment-create": !0, onClick: () => t_.current?.startComment() },
        iE =
          et ??
          (0, r.jsx)(eb, {
            ref: tK,
            emptyAction: null == iI ? void 0 : es?.(iI),
            embedded: Z || null != er,
            renderHeader: null == ei ? void 0 : (e) => ei({ ...e, addCommentButtonProps: iI }),
            renderCommentInput: eJ?.annotation?.renderCommentInput,
            comments: eJ?.annotation?.comments,
            commentTarget: eJ?.annotation?.commentTarget,
            controller: n,
            commentAuthor: t2,
            assistantIcon: eJ?.annotation?.commentAssistantIcon,
            pendingCommentThreadIds: eJ?.annotation?.pendingCommentThreadIds,
            canAssignToChatGpt: eJ?.annotation?.canAssignToChatGpt,
            canDeleteOthersComments: eJ?.annotation?.canComment == null ? void 0 : e_,
            onCommentSubmitted: eJ?.annotation?.onCommentSubmitted,
            selectedThreadId: t8 ? t$ : null,
            onSelectThread: (e) => {
              null == e ? ne() : nn(e)
            },
            onHoverThread: tU,
            onClose: () => {
              ;(t6(!1), ne())
            },
          }),
        ij = (0, r.jsx)(y.d.Provider, { value: ni, children: iE }),
        iM = Z
          ? [
              ...(t4 ? [{ id: "comments", title: "Comments", content: ij, open: t8, onOpenChange: iw }] : []),
              ...(null != en ? [{ id: "schedules", title: "Schedules", content: en, open: nl, onOpenChange: iS }] : []),
              ...tc
                .filter((e) => e_ || e.visibleWhenReadOnly)
                .map((e) => ({
                  id: e.id,
                  title: e.title,
                  content: (0, r.jsx)(eq, {
                    controller: n,
                    panel: e,
                    panelControls: no,
                    isPanelOpen: no.isPanelOpen(e.id),
                    embedded: !0,
                    onRequestChanges: rX,
                  }),
                  open: rD.includes(e),
                  onOpenChange: (t) => (t ? no.openPanel(e.id) : no.closePanel(e.id)),
                })),
            ]
          : void 0,
        iT =
          e_ && (i?.header?.includes("format") ?? !0) && i?.inspector?.length !== 0
            ? (0, r.jsx)(nP, { controller: n, panels: tc, panelControls: no, size: "default", icon: q?.format })
            : null,
        iA = W?.({
          editingAvailable: e_ && !tx && null != tl.slideIds[tl.selectedSlideIdx],
          editingControls:
            e_ || null != Y
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    e_
                      ? (0, r.jsx)(eI, {
                          formatControl: iT,
                          renderControls: U,
                          textInsertionActive: tw,
                          onRequestSlideChanges: rX ? (e) => t_.current?.requestChanges(e, "slide") : void 0,
                          icons: q,
                          onAddSlide: r7,
                          slidePickerOpen: null != nz,
                          ...iv,
                        })
                      : null,
                    Y,
                  ],
                })
              : null,
          formatControl: iT,
          annotationAvailable: tg,
          annotationCommand: { active: th, disabled: !tg, onToggle: ih },
          onExitAnnotationMode: th ? () => ip(!1) : void 0,
          annotationControlOwnsTooltip: eJ?.annotation?.wrapModeButton != null,
          annotationControl: (i?.header?.includes("annotation") ?? !0) ? ig : null,
          commentsControl: (0, r.jsx)(ey.b_, {
            "aria-label": t4 ? "Comments" : "Comments are not available for this presentation",
            disabled: !t4,
            expanded: t5,
            onClick: iC,
            size: "default",
            testId: "popcorn-presentation-comments-button",
            children: K ?? (0, r.jsx)(E.Tw, { className: "size-5" }),
          }),
          schedulesControl:
            null != en
              ? (0, r.jsx)(ey.b_, {
                  "aria-label": "Schedules",
                  expanded: nl,
                  onClick: () => iS(!nl),
                  size: "default",
                  children: q?.schedules ?? (0, r.jsx)(E.EE, { className: "size-5" }),
                })
              : null,
          zoomControl: rY,
          presentationController: n,
          navigationControl: null,
          presentationGridView: { active: tZ, disabled: tx, onToggle: r$ },
          supplementalActions: (0, r.jsxs)(r.Fragment, { children: [ik, N] }),
        })
      null != W &&
        null != _ &&
        (iA = (0, r.jsx)("div", {
          ref: (e) => {
            if (null == e) return
            let t = [
                e,
                ...Array.from(e.children).filter((e) => e instanceof HTMLElement),
                ...e.querySelectorAll("header"),
              ],
              n = () => rh(Math.max(...t.map((e) => e.offsetHeight)))
            if ((n(), "u" < typeof ResizeObserver)) return
            let r = new ResizeObserver(n)
            for (let e of t) r.observe(e)
            return () => r.disconnect()
          },
          className: "pointer-events-none",
          children: iA,
        }))
      let iP = rx
          ? (0, r.jsxs)("div", {
              ref: n1,
              "aria-label": "Table of contents",
              "aria-hidden": !rC,
              inert: !rC,
              className: "popcorn-presentation-codex-thumbnail-panel popcorn-presentation-thumbnail-surface",
              "data-testid": "popcorn-presentation-thumbnails",
              "data-host-motion": ec ? "" : void 0,
              onKeyDown: ir,
              role: "navigation",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex shrink-0 items-center justify-between gap-2 ps-2 pe-0.5 pb-2 text-xs text-token-text-tertiary",
                  children: [
                    (0, r.jsxs)("span", { children: [tl.slideCount, " ", 1 === tl.slideCount ? "slide" : "slides"] }),
                    (0, r.jsx)(eE, {
                      icon: $,
                      label: rb ? "Undock table of contents" : "Dock table of contents",
                      open: rb,
                      onToggle: () => ix(!rb),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "popcorn-presentation-codex-thumbnail-viewport min-h-0 flex-1 overflow-x-hidden overflow-y-auto",
                  children: iu(),
                }),
              ],
            })
          : null,
        iL = () => {
          ;(n.closeFind(), nZ.current?.focus({ preventScroll: !0 }))
        }
      return (0, r.jsxs)("div", {
        ref: nZ,
        "data-popcorn-pinch-surface": "",
        "data-artifact-search-surface": e6 ? "" : void 0,
        tabIndex: -1,
        onKeyDownCapture: (e) => {
          ;(0, M.tr)(e.target) ||
            ("f" === e.key.toLowerCase() && "search" !== (0, f.C_)(e)) ||
            (0, h.E)(e, {
              enabled: e6,
              open: tl.find.open,
              onOpen: () => {
                ;(eA?.("search"), n.openFind())
              },
              onClose: iL,
              onNext: () => n.goToNextFindResult(),
              onPrevious: () => n.goToPreviousFindResult(),
            })
        },
        onKeyDown: (e) => {
          e.defaultPrevented ||
            e.repeat ||
            e.nativeEvent.isComposing ||
            229 === e.keyCode ||
            e.metaKey === e.ctrlKey ||
            !e.altKey ||
            e.shiftKey ||
            ("Digit1" !== e.code && "1" !== e.key) ||
            (0, M.tr)(e.target) ||
            n.getSnapshot().textEditState?.activeBlockId ||
            (e.preventDefault(), e.stopPropagation(), r$())
        },
        className: (0, s.A)(
          "text-token-text-primary relative isolate flex h-full min-h-0 flex-col overflow-hidden",
          eF,
        ),
        style: { backgroundColor: eR },
        children: [
          e6 &&
            (0, r.jsx)("div", {
              className: "absolute inset-x-0 top-0 z-50",
              style: { [eH]: `clamp(0px, 100% - 22rem, ${rB}px)` },
              children: (e8 ?? ((e) => (0, r.jsx)(p.u, { ...e })))({
                ...tl.find,
                summary: (0, m.X)(tl.find),
                onQueryChange: (e) => n.setFindQuery(e),
                onNavigatePrevious: () => n.goToPreviousFindResult(),
                onNavigateNext: () => n.goToNextFindResult(),
                onClose: iL,
              }),
            }),
          J?.({
            keyboardEnabled: e_,
            commands: e_
              ? {
                  select: () => {
                    ;(n.setChartInsertionPreview(null),
                      tL(null),
                      tC(!1),
                      tk(!1),
                      tE(!1),
                      tM(!1),
                      tA(null),
                      tm(!1),
                      tz(!1),
                      n.endElementInteraction({ commit: !1 }),
                      n.endSelectionMarquee({ commit: !1 }))
                  },
                  text: iv.onInsertText,
                  rect: () => {
                    ;(tC(!1), iv.onInsertShape?.("rect"))
                  },
                  ellipse: () => {
                    ;(tC(!1), iv.onInsertShape?.("ellipse"))
                  },
                  arrow: () => {
                    ;(tC(!1), iv.onInsertShape?.("line", "arrow"))
                  },
                  line: () => {
                    ;(tC(!1), iv.onInsertShape?.("line"))
                  },
                }
              : {},
          }),
          (0, r.jsxs)(em, {
            controller: n,
            editorCapabilities: td,
            formatPane: tn,
            floatingBar: tr,
            children: [
              (0, r.jsx)(F.J, {
                panels: iM,
                headerPlacement: null != W || ru ? "overlay" : void 0,
                renderLayout: _,
                header: W
                  ? iA
                  : (0, r.jsx)(P.R, {
                      title: L,
                      headerTitleContent: ru
                        ? (0, r.jsx)(ek, {
                            title: Q ?? ((tt = L.lastIndexOf(".")) > 0 ? L.slice(0, tt) : L),
                            sidebarOpen: rb,
                            onToggleSidebar: () => {
                              let e = !rb
                              ;(ix(e), W && e && requestAnimationFrame(() => n2.current?.focus()))
                            },
                            gridViewControl: ib,
                          })
                        : Q,
                      closeLabel: "Close presentation",
                      onClose: eM,
                      testId: "popcorn-presentation-header",
                      className: "border-b-0",
                      floating: ru,
                      floatingSurface: "controls",
                      compactTitle: rc,
                      fileMenuContent: D,
                      centeredContent: ru
                        ? (0, r.jsx)(ej, {
                            annotationControl: ig,
                            formatControl: (0, r.jsx)(nP, { controller: n, panels: tc, panelControls: no }),
                            onAddSlide: r7,
                            ...iv,
                            trailingContent: Y,
                          })
                        : rJ
                          ? (0, r.jsx)(R.k, {
                              currentIndex: tl.selectedSlideIdx,
                              totalCount: tl.slideCount,
                              itemLabel: "slide",
                              onChangeIndex: t7,
                              testId: "popcorn-presentation-page-navigation",
                            })
                          : null,
                      actions: (0, r.jsxs)(P.Q, {
                        compact: rc,
                        children: [
                          ru ? null : ib,
                          ru ? null : ig,
                          t4 ? (0, r.jsx)(j.e0, { active: t5, onClick: iC }) : null,
                          ru ? null : ik,
                          rY,
                          N,
                        ],
                      }),
                      icon: (0, r.jsx)(A.f, {
                        kind: "presentation",
                        children: (0, r.jsx)(E.g, { className: "size-4" }),
                      }),
                    }),
                children: (0, r.jsxs)("div", {
                  className: "@container/presentation-editor flex min-h-0 min-w-0 flex-1",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex min-h-0 min-w-0 flex-1 flex-col",
                      children: [
                        (0, r.jsx)(w.Mp, {
                          sensors: ra,
                          collisionDetection: w.fp,
                          modifiers: ro,
                          onDragStart: ii,
                          onDragCancel: il,
                          onDragEnd: ia,
                          children: (0, r.jsxs)("div", {
                            ref: nY,
                            "data-codex-layout": e9,
                            "data-custom-header": W ? "true" : void 0,
                            style: { "--popcorn-presentation-header-inset": `${rK.fitTopInset}px` },
                            className: (0, s.A)(
                              "popcorn-presentation-editor-shell relative flex min-h-0 min-w-0 flex-1 overflow-hidden",
                              rg && "popcorn-presentation-editor-shell--small-stacked",
                              rd
                                ? "flex-col"
                                : rs || rx
                                  ? "flex-row"
                                  : "flex-col @[749px]/presentation-editor:flex-row",
                            ),
                            children: [
                              rg
                                ? (0, r.jsx)("div", {
                                    className: "popcorn-presentation-stacked-pages select-none",
                                    "data-testid": "popcorn-presentation-stacked-pages",
                                    onKeyDown: ir,
                                    children: np.map((e, t) =>
                                      (0, r.jsx)(
                                        nA,
                                        {
                                          slideId: e,
                                          index: t,
                                          label: rq[e] ?? `Slide ${t + 1}`,
                                          thumbnail: nc[e] ?? null,
                                          isSelected: tl.selectedSlideIds.includes(e),
                                          isActive: e === rU,
                                          onLoad:
                                            nU && e === rU
                                              ? () => {
                                                  ;(e1?.(), n.notifyFirstSlideRendered())
                                                }
                                              : void 0,
                                          onSelect: (t) => rQ(rW[e] ?? -1, t),
                                          buttonRef: (n) => {
                                            is(t, e, n)
                                          },
                                        },
                                        e,
                                      ),
                                    ),
                                  })
                                : null,
                              r_
                                ? !Z &&
                                  (0, r.jsx)(e$, {
                                    controller: n,
                                    panels: tc,
                                    panelControls: no,
                                    isEditing: e_,
                                    renderPanel: ed,
                                    onRequestChanges: rX,
                                  })
                                : (0, r.jsxs)("div", {
                                    className: (0, s.A)(
                                      "popcorn-presentation-main-panel relative isolate flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-token-bg-primary",
                                      rd ? "order-1" : rs ? "order-2" : "order-1 @[749px]/presentation-editor:order-2",
                                      rx && "popcorn-presentation-main-panel--codex-responsive",
                                    ),
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "min-h-0 flex-1 overflow-hidden",
                                        children: (0, r.jsx)(nh, {
                                          fitOnOpen: ew,
                                          ref: t_,
                                          controller: n,
                                          runtime: tX,
                                          renderWidget: G,
                                          elementContextMenu: t,
                                          stageOverlays: tu.filter(
                                            (e) => e_ || e.visibleWhenReadOnly || e.supportsReadOnlySelection,
                                          ),
                                          panelControls: no,
                                          editToolbarRequested: ty,
                                          onEditToolbarRequestedChange: tv,
                                          isEditing: e_,
                                          imageInsertionMode: tS,
                                          onImageInsertionModeChange: tk,
                                          widgetInsertionMode: tI,
                                          onWidgetInsertionModeChange: tE,
                                          shapeInsertion: tT,
                                          onShapeInsertionChange: tA,
                                          textInsertionMode: tw,
                                          onTextInsertionModeChange: tC,
                                          tableInsertionMode: tj,
                                          onTableInsertionModeChange: tM,
                                          chartInsertionPresetId: tP,
                                          onChartInsertionPresetIdChange: tL,
                                          onInteractionAttempt: eA,
                                          onElementDragStart: eP,
                                          theme: eG,
                                          viewportInsets: rK,
                                          overlayLeftInsetPx: rx && !tZ ? (0, T.os)(rC) + 4 * !!rC + 4 * !!W : void 0,
                                          viewportAlignmentRef: eW,
                                          showSpeakerNotes: rE,
                                          onSpeakerNotesFitInsetChange: rT,
                                          speakerNotesVisible: !tQ && !tZ,
                                          speakerNotesFocusViewportInsets: "slide" === tJ && tZ ? rV : void 0,
                                          annotationMode: th,
                                          annotationIntent: eJ?.annotation?.modeIntent,
                                          onAnnotationModeChange: ip,
                                          onAnnotationDictationBusyChange: tb,
                                          drawingMode: tN,
                                          onDrawingModeChange: tz,
                                          drawingCommitToken: tB,
                                          reviewTools: eJ,
                                          generation: eY,
                                          onHyperlinkClick: eQ,
                                          onHyperlinkHoverChange: e0,
                                          annotationsEnabled: e2,
                                          drawingAnnotationsEnabled: e4,
                                          commentThreadsEnabled: e3,
                                          commentsSidebarOpen: t8,
                                          selectedCommentThreadId: t$,
                                          hoveredCommentThreadId: void 0 === ex ? tW : ex,
                                          onHoverCommentThread: tU,
                                          onSelectCommentThread: t4
                                            ? (e) => {
                                                ;(nn(e), t8 && tK.current?.focusThread(e))
                                              }
                                            : void 0,
                                          onClearCommentThread: t4 ? ne : void 0,
                                          annotationPortalContainerElement: nJ,
                                        }),
                                      }),
                                      rI
                                        ? (0, r.jsx)(eK, {
                                            controller: n,
                                            notesHeight: rj,
                                            setNotesHeight: rM,
                                            isEditing: e_,
                                            leftInset: rK.left,
                                          })
                                        : null,
                                      !Z &&
                                        (0, r.jsx)(e$, {
                                          controller: n,
                                          panels: tc,
                                          panelControls: no,
                                          isEditing: e_,
                                          renderPanel: ed,
                                          onRequestChanges: rX,
                                        }),
                                    ],
                                  }),
                              tZ && !ry
                                ? null
                                : rd
                                  ? (0, r.jsx)("div", {
                                      ref: n1,
                                      className:
                                        "order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16 select-none",
                                      "data-testid": "popcorn-presentation-thumbnails",
                                      onKeyDown: ir,
                                      children: iu(),
                                    })
                                  : rs
                                    ? (0, r.jsx)("div", {
                                        ref: n1,
                                        className:
                                          "popcorn-presentation-thumbnail-rail--overlay-desktop order-1 flex h-full min-h-0 shrink-0 flex-col gap-2.5 overflow-x-hidden overflow-y-auto px-3 pt-3 pb-12 select-none",
                                        style: { width: "220px" },
                                        "data-testid": "popcorn-presentation-thumbnails",
                                        "data-grid-hidden": tQ,
                                        "aria-hidden": tZ,
                                        inert: tZ,
                                        onKeyDown: ir,
                                        children: iu(),
                                      })
                                    : rx
                                      ? (0, r.jsxs)("div", {
                                          "data-testid": "popcorn-presentation-codex-thumbnail-rail",
                                          "data-open": rC ? "true" : "false",
                                          "data-grid-hidden": tQ,
                                          "aria-hidden": tZ,
                                          inert: tZ,
                                          className: "popcorn-presentation-codex-thumbnail-rail select-none",
                                          style: {
                                            ...T.y,
                                            "--popcorn-presentation-thumbnail-rail-bottom-inset": `${rA}px`,
                                          },
                                          onFocusCapture: () => {
                                            ;(n$ && n0.current) || nj(!0)
                                          },
                                          onBlurCapture: io,
                                          onKeyDownCapture: () => {
                                            n0.current = !1
                                          },
                                          onPointerDownCapture: () => {
                                            n0.current = !0
                                          },
                                          children: [
                                            (0, r.jsx)("button", {
                                              type: "button",
                                              "aria-label": "Show table of contents",
                                              "aria-expanded": rC,
                                              "data-testid": "popcorn-presentation-thumbnail-stack",
                                              ref: n2,
                                              className: "popcorn-presentation-codex-thumbnail-stack",
                                              onClick: () => {
                                                ;(n$ ? ix(!0) : nj(!0),
                                                  W &&
                                                    requestAnimationFrame(() =>
                                                      n1.current?.querySelector("button")?.focus(),
                                                    ))
                                              },
                                              children: np.map((e) =>
                                                (0, r.jsx)(
                                                  "span",
                                                  {
                                                    "data-active": e === rU ? "true" : void 0,
                                                    "data-testid": "popcorn-presentation-thumbnail-stack-bar",
                                                    className: "popcorn-presentation-codex-thumbnail-stack-bar",
                                                    style: {
                                                      backgroundColor:
                                                        e === rU
                                                          ? "var(--color-token-text-primary, rgba(13, 13, 13, 1))"
                                                          : "var(--color-token-border-default, rgba(232, 232, 232, 1))",
                                                    },
                                                  },
                                                  e,
                                                ),
                                              ),
                                            }),
                                            ec ? ec(iP, rC) : iP,
                                          ],
                                        })
                                      : (0, r.jsx)("div", {
                                          ref: n1,
                                          className:
                                            "popcorn-presentation-thumbnail-rail--overlay-desktop order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16 select-none @[749px]/presentation-editor:order-1 @[749px]/presentation-editor:h-full @[749px]/presentation-editor:w-[220px] @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:overflow-x-hidden @[749px]/presentation-editor:overflow-y-auto @[749px]/presentation-editor:px-3 @[749px]/presentation-editor:pt-3 @[749px]/presentation-editor:pb-12",
                                          "data-testid": "popcorn-presentation-thumbnails",
                                          "data-grid-hidden": tQ,
                                          "aria-hidden": tZ,
                                          inert: tZ,
                                          onKeyDown: ir,
                                          children: iu(),
                                        }),
                              nJ &&
                                (0, k.createPortal)(
                                  (0, r.jsx)(w.Hd, {
                                    className: "popcorn-presentation-thumbnail-drag-overlay pointer-events-none flex",
                                    dropAnimation: null,
                                    modifiers: ro,
                                    style: {
                                      ...("codex" === ic ? T.y : void 0),
                                      "--presentation-selection-color": nk?.selectionColor,
                                    },
                                    children:
                                      ng && nk
                                        ? (0, r.jsx)("div", {
                                            ref: ny,
                                            style: {
                                              width: nk.width,
                                              height: nk.height,
                                              display: "flex",
                                              flexShrink: 0,
                                              transform: `scale(${nk.scale})`,
                                              transformOrigin: "top left",
                                            },
                                            children: (0, r.jsx)(nL, {
                                              slideId: ng,
                                              index: np.indexOf(ng),
                                              label: rq[ng] ?? "Slide",
                                              thumbnail: ns[ng] ?? null,
                                              isSelected: tl.selectedSlideIds.includes(ng),
                                              selectedSlideCount: tl.selectedSlideIds.length,
                                              dragPreviewCards: nk.cards,
                                              isHidden: rG.has(ng),
                                              commentThreadCount: t9.get(ng),
                                              onSelect: r9,
                                              renderSlideThumbnailOverlay: eL,
                                              slideThumbnailPlacement: nk.placement,
                                              thumbnailVariant: ic,
                                              isDragging: !0,
                                            }),
                                          })
                                        : null,
                                  }),
                                  nJ.ownerDocument.body,
                                ),
                            ],
                          }),
                        }),
                        null != ee
                          ? (0, r.jsx)("div", {
                              className: "min-w-0 shrink-0",
                              style: { marginLeft: rK.left, marginRight: rK.right },
                              children: ee,
                            })
                          : null,
                      ],
                    }),
                    Z
                      ? null
                      : null != er
                        ? (0, r.jsx)("div", {
                            className: "flex min-h-0 max-w-full min-w-0 shrink-0",
                            style: { paddingTop: rK.fitTopInset },
                            children: er(ij, t8),
                          })
                        : t8
                          ? (0, r.jsx)("div", {
                              className: "flex min-h-0 shrink-0 flex-col",
                              style: { paddingTop: rK.fitTopInset },
                              children: ij,
                            })
                          : null,
                  ],
                }),
              }),
              nz && e_ && !tx
                ? (0, r.jsx)(nf, {
                    controller: n,
                    anchor: nz,
                    portalContainer: nZ.current ?? void 0,
                    onClose: () => nB(null),
                    onSelect: (e) => {
                      ;(n.addSlide(e, nM), nB(null))
                    },
                  })
                : null,
            ],
          }),
        ],
      })
    }
    function nA({
      slideId: e,
      index: t,
      label: n,
      thumbnail: i,
      isSelected: l,
      isActive: a,
      onLoad: o,
      onSelect: s,
      buttonRef: d,
    }) {
      return (0, r.jsx)("button", {
        ref: d,
        type: "button",
        "data-index": t,
        "data-slide-id": e,
        "data-active": a,
        "aria-pressed": l,
        "data-thumbnail-cache-kind": "stacked-page",
        "data-testid": `popcorn-presentation-stacked-page-${t}`,
        "aria-label": n,
        className: "popcorn-presentation-stacked-page",
        onClick: (e) => s(nj(e)),
        children: i
          ? (0, r.jsx)("img", {
              src: i,
              alt: "",
              className: "popcorn-presentation-stacked-page-image",
              draggable: !1,
              onLoad: o,
            })
          : (0, r.jsx)("div", { className: "popcorn-presentation-stacked-page-placeholder" }),
      })
    }
    function nP({ controller: e, icon: t, onClick: n, panels: i, panelControls: l, size: a = "compact", ...o }) {
      let s = (0, eo.lO)(e, "inspector"),
        d = i.find((t) => t.isVisible?.({ controller: e, snapshot: s }) ?? !0),
        c = null != d && l.isPanelAvailable(d.id),
        u = null != d && l.isPanelOpen(d.id)
      return (0, r.jsx)(ey.b_, {
        ...o,
        disabled: !c,
        expanded: u,
        "aria-label": "Format",
        "data-popcorn-presentation-format-control": "",
        onClick: (e) => {
          ;(n?.(e), d && !e.defaultPrevented && l.togglePanel(d.id))
        },
        testId: "popcorn-presentation-format-button",
        size: a,
        children: t ?? (0, r.jsx)(E.KL, { size: a }),
      })
    }
    let nL = (0, d.memo)(function ({
        slideId: e,
        index: t,
        label: n,
        thumbnail: i,
        isSelected: l,
        isActive: a = l,
        selectedSlideCount: o = 1,
        dragPreviewCards: c,
        isHidden: u = !1,
        commentThreadCount: p,
        onSelect: h,
        renderSlideThumbnailOverlay: m,
        slideThumbnailPlacement: f = "responsive",
        thumbnailVariant: g = "standard",
        buttonRef: x,
        dragAttributes: b,
        dragListeners: y,
        isDragging: v = !1,
      }) {
        let w = null != c && o > 1,
          C = (0, d.useRef)(!1),
          S = (0, d.useRef)(!1),
          k = nS(f, g),
          j = nk(f),
          M = nI(g),
          T = nE(g)
        return (0, r.jsxs)("button", {
          ref: x,
          "data-index": t,
          "data-slide-id": e,
          type: "button",
          "data-testid": `popcorn-presentation-slide-${t}`,
          "data-active": a,
          "data-dragging": v ? "true" : "false",
          "data-hidden": u ? "true" : "false",
          "aria-label": u ? `${n} (hidden)` : n,
          onPointerDownCapture: (e) => {
            if (((S.current = "touch" === e.pointerType), (C.current = !1), S.current)) return
            if (2 === e.button) {
              l || h()
              return
            }
            if (0 !== e.button) return
            let t = nj(e)
            "replace" === t && l && o > 1 ? (C.current = !0) : h(t)
          },
          onClick: (e) => {
            ;((0 === e.detail || S.current || C.current) && h(nj(e)), (C.current = !1))
          },
          className: (0, s.A)(
            "popcorn-presentation-thumbnail-button relative flex shrink-0 cursor-interaction touch-manipulation items-start rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none",
            k,
          ),
          style: l ? { backgroundColor: ez, ...("codex" === g ? { borderRadius: "16px" } : {}) } : void 0,
          ...b,
          ...y,
          onPointerDown: (e) => {
            "touch" === e.pointerType && e.stopPropagation()
          },
          onContextMenu: (e) => {
            S.current && (e.preventDefault(), e.stopPropagation())
          },
          onKeyDown: () => {
            S.current = !1
          },
          "aria-pressed": l,
          children: [
            (0, r.jsx)("div", {
              className: (0, s.A)(
                "text-token-text-primary",
                T,
                w && "bottom" === f ? "absolute -top-2 left-0" : (0, s.A)("relative", j),
              ),
              style: l ? { color: eN } : void 0,
              children: w
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", { className: "invisible", children: t + 1 }),
                      (0, r.jsx)("span", {
                        "data-testid": "popcorn-presentation-drag-count",
                        "aria-label": `${o} slides`,
                        className:
                          "absolute top-1/2 left-1/2 inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[12px] leading-none font-semibold tabular-nums",
                        style: { backgroundColor: ez },
                        children: o,
                      }),
                    ],
                  })
                : t + 1,
            }),
            (0, r.jsxs)("div", {
              className: "relative isolate",
              children: [
                c?.map((e) =>
                  (0, r.jsx)(
                    "div",
                    {
                      "aria-hidden": "true",
                      "data-drag-slide-id": e.slideId,
                      className:
                        "popcorn-presentation-thumbnail-drag-stack-card absolute inset-0 overflow-hidden border",
                      style: {
                        ...eD,
                        borderColor: eO,
                        backgroundColor:
                          "var(--color-background-surface, var(--color-token-main-surface-primary, white))",
                        "--drag-stack-from-x": `${e.fromX}px`,
                        "--drag-stack-from-y": `${e.fromY}px`,
                        zIndex: -e.depth,
                      },
                      children: e.thumbnail
                        ? (0, r.jsx)("img", {
                            src: e.thumbnail,
                            alt: "",
                            className: "size-full object-contain",
                            draggable: !1,
                          })
                        : null,
                    },
                    e.slideId,
                  ),
                ),
                (0, r.jsxs)("div", {
                  "data-testid": `popcorn-presentation-slide-${t}-surface`,
                  "data-presentation-thumbnail-surface": !0,
                  className: (0, s.A)(
                    "relative overflow-hidden border bg-white bg-clip-padding",
                    M,
                    v ? "shadow-lg" : null,
                  ),
                  style: { ...eD, borderColor: l ? eN : eO, boxShadow: l ? eB : eD.boxShadow },
                  children: [
                    i
                      ? (0, r.jsx)("img", {
                          src: i,
                          alt: "",
                          className: (0, s.A)("block", M, u && "opacity-45"),
                          draggable: !1,
                        })
                      : (0, r.jsx)("div", {
                          className: (0, s.A)(M, "animate-pulse bg-gray-200", u && "opacity-45"),
                          style: { aspectRatio: 16 / 9 },
                        }),
                    p
                      ? (0, r.jsxs)("span", {
                          "aria-label": `${p} comment ${1 === p ? "thread" : "threads"} on slide ${t + 1}`,
                          "data-testid": `popcorn-presentation-slide-comment-count-${t}`,
                          className:
                            "pointer-events-none absolute top-1 right-1 flex size-[22px] items-center justify-center text-[10px] leading-none font-normal tabular-nums",
                          style: { color: I.rk },
                          children: [
                            (0, r.jsx)(I.Sj, { appearance: "review", className: "absolute inset-0 size-full" }),
                            (0, r.jsx)("span", {
                              "aria-hidden": "true",
                              className: "relative text-white",
                              children: p > 9 ? "9+" : p,
                            }),
                          ],
                        })
                      : null,
                    u
                      ? (0, r.jsx)("span", {
                          "aria-hidden": "true",
                          className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                          "data-testid": `popcorn-presentation-slide-hidden-${t}`,
                          children: (0, r.jsx)("span", {
                            className:
                              "flex size-8 items-center justify-center rounded-full bg-token-main-surface-primary/90 text-token-text-secondary shadow-sm",
                            children: (0, r.jsx)(E.aR, { className: "size-5" }),
                          }),
                        })
                      : null,
                    m
                      ? (0, r.jsx)("div", {
                          className:
                            "pointer-events-none absolute right-1.5 bottom-1.5 left-1.5 flex items-center justify-end",
                          children: m(e, { isSelected: l }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          ],
        })
      }),
      nF = (0, d.memo)(function ({
        slideContextMenu: e,
        slideId: t,
        index: n,
        snapshotIndex: i,
        label: l,
        thumbnail: a,
        isSelected: o,
        isActive: s,
        isInDragPreview: c,
        isVerticalDrag: u,
        selectedSlideCount: p,
        selectionHidden: h,
        isHidden: m,
        commentThreadCount: f,
        canDelete: g,
        onSelectSlide: x,
        onAddSlideAfter: b,
        onShowFormattingOptions: y,
        onDeleteSlide: v,
        onDuplicateSlide: w,
        onSetSlideHidden: C,
        renderSlideThumbnailOverlay: k,
        slideThumbnailPlacement: I = "responsive",
        thumbnailVariant: j = "standard",
        onRegisterButtonRef: M,
      }) {
        let {
            attributes: T,
            listeners: A,
            setNodeRef: P,
            activeIndex: F,
            isOver: R,
            isSorting: D,
            isDragging: N,
          } = (0, S.gl)({ id: t }),
          z = (0, d.useCallback)(
            (e) => {
              x(i, e)
            },
            [x, i],
          ),
          B = (0, d.useCallback)(() => {
            b(i)
          }, [b, i]),
          O = (0, d.useCallback)(() => {
            v(i)
          }, [v, i]),
          V = (0, d.useCallback)(() => {
            w(i)
          }, [w, i]),
          H = (0, d.useCallback)(() => {
            C(i, !h)
          }, [h, C, i]),
          K = (0, d.useCallback)(
            (e) => {
              M(n, e, null == a)
            },
            [n, M, a],
          ),
          $ = (0, d.useMemo)(
            () => [
              {
                kind: "item",
                id: "add-slide-after",
                label: "Add slide after",
                icon: E.EV,
                onSelect: B,
                testId: `popcorn-presentation-slide-add-after-${n}`,
              },
              {
                kind: "item",
                id: "duplicate",
                label: "Duplicate",
                icon: E.oM,
                onSelect: V,
                testId: `popcorn-presentation-slide-duplicate-${n}`,
              },
              {
                kind: "item",
                id: "visibility",
                label: h ? "Show" : "Hide",
                icon: h ? E.bM : E.aR,
                onSelect: H,
                testId: `popcorn-presentation-slide-visibility-${n}`,
              },
              { kind: "separator", id: "slide-actions-separator" },
              {
                kind: "item",
                id: "delete",
                label: "Delete",
                icon: E.uc,
                color: "danger",
                disabled: !g,
                onSelect: O,
                testId: `popcorn-presentation-slide-delete-${n}`,
              },
            ],
            [g, B, O, V, H, n, h],
          ),
          q = (0, r.jsxs)("div", {
            ref: P,
            style: { opacity: N || c ? 0 : 1, position: "relative", display: "inline-flex" },
            onContextMenu: () => {
              o || z()
            },
            children: [
              D && R && !N && !c
                ? (0, r.jsx)("span", {
                    "aria-hidden": "true",
                    "data-testid": "popcorn-presentation-slide-drop-indicator",
                    "data-insertion": F < n ? "after" : "before",
                    className: "pointer-events-none absolute rounded-full",
                    style: {
                      backgroundColor: eN,
                      ...(u
                        ? { left: 0, right: 0, height: 2, ...(F < n ? { bottom: 0 } : { top: 0 }) }
                        : { top: 0, bottom: 0, width: 2, ...(F < n ? { right: 0 } : { left: 0 }) }),
                    },
                  })
                : null,
              (0, r.jsx)(nL, {
                slideId: t,
                index: n,
                label: l,
                thumbnail: a,
                isSelected: o,
                isActive: s,
                selectedSlideCount: p,
                isHidden: m,
                commentThreadCount: f,
                onSelect: z,
                renderSlideThumbnailOverlay: k,
                slideThumbnailPlacement: I,
                thumbnailVariant: j,
                buttonRef: K,
                dragAttributes: T,
                dragListeners: A,
                isDragging: N,
              }),
            ],
          })
        return e
          ? (0, r.jsx)(e, {
              trigger: q,
              isHidden: h,
              canDelete: g,
              onAddSlideAfter: B,
              onShowFormattingOptions: y && (() => y(t)),
              onDuplicate: V,
              onToggleHidden: H,
              onDelete: O,
            })
          : (0, r.jsx)(L.i, { trigger: q, actions: $ })
      }),
      nR = (0, d.memo)(function ({
        disabled: e = !1,
        onAddSlide: t,
        pickerOpen: n,
        slideThumbnailPlacement: i = "responsive",
        thumbnailVariant: l = "standard",
      }) {
        let a = nS(i, l),
          o = nk(i),
          d = nI(l),
          c = nE(l)
        return (0, r.jsxs)("button", {
          type: "button",
          disabled: e,
          onClick: (e) => t(e.currentTarget),
          "aria-haspopup": "dialog",
          "aria-expanded": n,
          "aria-label": "Add slide",
          title: "Add slide",
          "data-testid": "popcorn-presentation-add-slide",
          className: (0, s.A)(
            "flex shrink-0 cursor-interaction items-start rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
            a,
          ),
          children: [
            (0, r.jsx)("div", {
              "aria-hidden": "true",
              className: (0, s.A)("text-token-text-primary invisible", c, o),
              children: "00",
            }),
            (0, r.jsx)("div", {
              className: (0, s.A)(
                "text-token-text-secondary relative flex items-center justify-center overflow-hidden border",
                d,
              ),
              style: eV,
              "data-presentation-thumbnail-surface": !0,
              children: (0, r.jsx)("div", {
                className: "flex w-full items-center justify-center hover:bg-token-interactive-bg-secondary-hover",
                style: { aspectRatio: 16 / 9 },
                children: (0, r.jsx)(E.EV, { className: "size-4" }),
              }),
            }),
          ],
        })
      })
    function nD({
      controller: e,
      stageRuntime: t,
      usesCompactTitle: n,
      isEditing: i,
      zoomToFitLabel: l,
      renderHeaderZoomControl: a,
      onInteractionAttempt: o,
    }) {
      let s = (0, eo.Zo)(e),
        d = s.fitScale ?? (s.slideRect && s.zoom > 0 ? s.slideRect.scale / s.zoom : null),
        c = d ? (0, _.lN)(d) : null,
        u = s.slideRect?.scale ?? (d ? (0, _.lN)(d * s.zoom) : (0, _.lN)(s.zoom)),
        p = null != c && 1e-4 > Math.abs(s.zoom - 1),
        h = (e) => {
          let n = (0, _.lN)(e)
          ;(n !== u && o?.(n > u ? "zoom-in" : "zoom-out"), d && d > 0)
            ? t.zoomTo(n / d, { settled: !0 })
            : t.zoomTo(n, { settled: !0 })
        },
        m =
          null != c && null != l
            ? {
                label: l,
                selectedLabel: l,
                selected: p,
                onSelect: () => {
                  ;(o?.("fit-to-viewport"), t.fitToViewport(1))
                },
              }
            : void 0
      return (
        a?.({
          fitOption: m,
          onZoomPercentChange: (e) => {
            h(e / 100)
          },
          triggerTestId: "popcorn-presentation-zoom-select",
          zoomPercent: Math.round(100 * u),
        }) ??
        (0, r.jsx)(D.l, {
          zoom: u,
          onZoomChange: h,
          options: nw,
          fitOption: m,
          testId: "popcorn-presentation-zoom-select",
          variant: n && i ? "editorHeader" : "default",
        })
      )
    }
    let nN = [250, 1e3]
    class nz {
      resolve
      hydrate
      onLoadingChange
      #p = 0
      #e = new Map()
      #x = new Map()
      #tr = new Map()
      #ti = !1
      #tl
      #ta
      #b = !1
      #to = []
      #ts = 0
      constructor(e, t, n) {
        ;((this.resolve = e), (this.hydrate = t), (this.onLoadingChange = n))
      }
      update(e, t) {
        if (this.#b) return
        t !== this.#p && (this.#e.clear(), this.#tr.clear(), (this.#p = t))
        let n = new Map()
        for (let t of e) {
          var r
          let e = JSON.stringify([(r = t).assetId, r.uri]),
            i = this.#e.get(e) ?? { request: t, attempts: 0, retryAt: 0, complete: !1 }
          ;((i.request = t), n.set(e, i))
        }
        ;((this.#e = n), this.#td())
      }
      dispose() {
        ;((this.#b = !0),
          clearTimeout(this.#ta),
          void 0 !== this.#tl && (cancelAnimationFrame(this.#tl), (this.#tl = void 0)),
          this.#e.clear(),
          this.#x.clear(),
          this.#tr.clear(),
          this.#tc())
      }
      #td() {
        if ((clearTimeout(this.#ta), (this.#ta = void 0), this.#b)) return
        if (!this.#ti) {
          let e = new Set([...this.#e.values()].map((e) => e.request.uri))
          for (let t of this.#tr.keys()) e.has(t) || this.#tr.delete(t)
        }
        let e = Date.now(),
          t = new Map()
        for (let n of this.#e.values()) {
          let r = n.request.uri
          if (n.complete || n.attempts > nN.length || n.retryAt > e || this.#tr.has(r) || this.#x.has(r)) continue
          let i = t.get(r)
          i ? i.images.push(n) : t.set(r, { uri: r, generation: this.#p, images: [n] })
        }
        for (let e of t.values()) {
          for (let t of e.images) t.attempts += 1
          this.#x.set(e.uri, e)
        }
        for (let e of (this.#tc(), t.values())) this.#tu(e)
        this.#tp()
        let n = 1 / 0
        for (let e of this.#e.values())
          !e.complete &&
            e.attempts <= nN.length &&
            e.retryAt > Date.now() &&
            !this.#x.has(e.request.uri) &&
            (n = Math.min(n, e.retryAt))
        1 / 0 !== n && (this.#ta = setTimeout(() => this.#td(), Math.max(0, n - Date.now())))
      }
      async #tu(e) {
        try {
          let t = await this.resolve(e.images.map((e) => e.request))
          if (this.#b || e.generation !== this.#p) return
          let n = t.find(
            (t) =>
              t.data.length > 0 &&
              (null == t.uri || t.uri === e.uri) &&
              e.images.some((e) => e.request.assetId === t.assetId),
          )
          if (null == n) return void this.#th(e.generation, e.images)
          this.#tr.set(e.uri, n)
        } catch {
          this.#th(e.generation, e.images)
        } finally {
          ;(this.#x.delete(e.uri), this.#td())
        }
      }
      #tp() {
        if (this.#ti || void 0 !== this.#tl) return
        let e = Date.now()
        ;[...this.#e.values()].some((t) => !t.complete && t.retryAt <= e && this.#tr.has(t.request.uri)) &&
          (this.#tl = requestAnimationFrame(() => {
            ;((this.#tl = void 0), this.#tm())
          }))
      }
      async #tm() {
        if (this.#b) return
        let e = this.#p,
          t = [],
          n = [],
          r = Date.now()
        for (let e of this.#e.values()) {
          let i = this.#tr.get(e.request.uri)
          e.complete ||
            e.retryAt > r ||
            void 0 === i ||
            ((e.attempts = Math.max(1, e.attempts)),
            t.push(e),
            n.push({
              assetId: e.request.assetId,
              uri: e.request.uri,
              contentType: e.request.contentType ?? i.contentType,
              data: i.data,
            }))
        }
        if (0 !== n.length) {
          this.#ti = !0
          try {
            for (let r of (await this.hydrate(n, e), t)) r.complete = !0
          } catch {
            if (e === this.#p) {
              for (let e of t) this.#tr.delete(e.request.uri)
              this.#th(e, t)
            }
          } finally {
            ;((this.#ti = !1), this.#td())
          }
        }
      }
      #th(e, t) {
        if (!this.#b && e === this.#p)
          for (let e of t) {
            let t = nN[e.attempts - 1]
            e.retryAt = null == t ? 1 / 0 : Date.now() + t
          }
      }
      #tc() {
        if (!this.onLoadingChange) return
        let e = [...this.#e.values()].filter((e) => !e.complete && 1 / 0 !== e.retryAt).map((e) => e.request)
        ;(this.#ts === this.#p &&
          e.length === this.#to.length &&
          e.every((e, t) => e.assetId === this.#to[t]?.assetId && e.uri === this.#to[t]?.uri)) ||
          ((this.#to = e), (this.#ts = this.#p), this.onLoadingChange(e, this.#p))
      }
    }
    var nB = n("EnMA"),
      nO = n("jUKY"),
      nV = n("Xlmd"),
      nH = n("w0Wa")
    let nK = [
      { id: "heading-1", shortLabel: "H1", label: "Heading 1", fontSize: 64 },
      { id: "heading-2", shortLabel: "H2", label: "Heading 2", fontSize: 48 },
      { id: "heading-3", shortLabel: "H3", label: "Heading 3", fontSize: 36 },
      { id: "body", shortLabel: "P", label: "Body", fontSize: 24 },
      { id: "caption", shortLabel: "S", label: "Caption", fontSize: 16 },
    ]
    function n$({ color: e, backgroundColor: t, onChange: n, config: i }) {
      let l = i ?? { state: "enabled" },
        a = l.options?.palette ?? nV.D.map((e) => e.value),
        o = a.map((e) => nV.D.find((t) => t.value.toLowerCase() === e.toLowerCase()) ?? { value: e, label: e }),
        c = (0, nH.p)(l, n, (e, t) => (0, nB.HO)(e, t, !1, a)),
        u = (0, d.useContext)(ep.Z),
        p = t && "none" !== t ? u.withBackground(t) : u,
        h = nV.D.find((t) => t.value.toUpperCase() === e?.toUpperCase())
      return "hidden" === l.state
        ? null
        : (0, r.jsxs)(nm.bL, {
            children: [
              (0, r.jsx)(nm.l9, {
                asChild: !0,
                children: (0, r.jsxs)("button", {
                  type: "button",
                  disabled: "enabled" !== l.state,
                  title: l.reason,
                  className:
                    "flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg border border-token-border-default px-2 text-left text-sm hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                  children: [
                    (0, r.jsx)("span", {
                      "aria-hidden": !0,
                      className: "size-4 rounded-full border border-token-border-light",
                      style: { backgroundColor: p.text(e ?? "#000000") },
                    }),
                    (0, r.jsx)("span", {
                      className: "min-w-0 flex-1 truncate text-token-text-primary",
                      children: null == e ? "Mixed" : (h?.label ?? e),
                    }),
                    (0, r.jsx)(E.cr, { className: "size-3 text-token-text-secondary" }),
                  ],
                }),
              }),
              (0, r.jsx)(nm.ZL, {
                children: (0, r.jsx)(nm.UC, {
                  "data-popcorn-edit-toolbar-root": "true",
                  align: "end",
                  sideOffset: 6,
                  className:
                    "z-50 rounded-xl border border-token-border-default bg-token-main-surface-primary p-3 shadow-xl",
                  children: (0, r.jsx)("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: o.map((t) => {
                      let n = null != e && t.value === h?.value
                      return (0, r.jsx)(
                        nm.bm,
                        {
                          asChild: !0,
                          children: (0, r.jsx)("button", {
                            type: "button",
                            "aria-label": t.label,
                            "aria-pressed": n,
                            disabled: "enabled" !== l.state,
                            onClick: () => c(t.value),
                            className: (0, s.A)(
                              "border-token-border-light size-7 cursor-pointer rounded-lg border",
                              n ? "ring-2 ring-text-info" : "hover:ring-2 hover:ring-token-border-light",
                            ),
                            style: { backgroundColor: p.text(t.value) },
                          }),
                        },
                        t.value,
                      )
                    }),
                  }),
                }),
              }),
            ],
          })
    }
    function nq({ fontSize: e, onChange: t, config: n }) {
      let i = nU(e)
      return n?.state === "hidden"
        ? null
        : (0, r.jsxs)(nm.bL, {
            children: [
              (0, r.jsx)(nm.l9, {
                asChild: !0,
                children: (0, r.jsxs)("button", {
                  type: "button",
                  disabled: null != n && "enabled" !== n.state,
                  title: n?.reason,
                  className:
                    "flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg border border-token-border-default px-2 text-left text-sm hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover",
                  children: [
                    (0, r.jsx)("span", { className: "text-token-text-secondary", children: i?.shortLabel }),
                    (0, r.jsx)("span", {
                      className: "min-w-0 flex-1 truncate text-token-text-primary",
                      children: i?.label ?? (null == e ? "Mixed" : String(e)),
                    }),
                    (0, r.jsx)(E.cr, { className: "size-3 text-token-text-secondary" }),
                  ],
                }),
              }),
              (0, r.jsx)(nm.ZL, {
                children: (0, r.jsx)(nm.UC, {
                  "data-popcorn-edit-toolbar-root": "true",
                  align: "end",
                  sideOffset: 6,
                  className: "z-50",
                  children: (0, r.jsx)(nW, { config: n, fontSize: e, onChange: t }),
                }),
              }),
            ],
          })
    }
    function nW({ fontSize: e, onChange: t, config: n }) {
      let i = n ?? { state: "enabled" },
        l = (0, nH.p)(i, t, nB.XT),
        a = nU(e),
        o = (
          i.options?.presets?.map(
            (e) =>
              nK.find((t) => t.fontSize === e) ?? {
                id: String(e),
                shortLabel: String(e),
                label: String(e),
                fontSize: e,
              },
          ) ?? nK
        ).filter((e) => (0, nB.XT)({ ...i, state: "enabled", reason: void 0 }, e.fontSize))
      return "hidden" === i.state
        ? null
        : (0, r.jsx)("div", {
            className: "w-52 rounded-xl border border-token-border-default bg-token-main-surface-primary p-1 shadow-xl",
            children: o.map((e) => {
              let t = e.id === a?.id
              return (0, r.jsx)(
                nm.bm,
                {
                  asChild: !0,
                  children: (0, r.jsxs)("button", {
                    type: "button",
                    "aria-pressed": t,
                    disabled: "enabled" !== i.state,
                    title: i.reason,
                    onClick: () => l(e.fontSize),
                    className: (0, s.A)(
                      "flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg px-2 text-left text-sm",
                      t ? "bg-info-soft text-info" : "hover:bg-primary-ghost-hover",
                    ),
                    children: [
                      (0, r.jsx)("span", {
                        "aria-hidden": !0,
                        className: (0, s.A)("w-5", t ? "text-info" : "text-token-text-secondary"),
                        children: e.shortLabel,
                      }),
                      (0, r.jsx)("span", { children: e.label }),
                    ],
                  }),
                },
                e.id,
              )
            }),
          })
    }
    function nU(e) {
      if (null != e) return nK.reduce((t, n) => (Math.abs(n.fontSize - e) < Math.abs(t.fontSize - e) ? n : t))
    }
    function nG({ children: e, disabled: t = !1, label: n, pressed: i = !1, onClick: l, config: a }) {
      let o = a ?? { state: "enabled" },
        d = (0, nH.p)(o, () => {
          t || l?.()
        })
      return "hidden" === o.state
        ? null
        : (0, r.jsx)("button", {
            type: "button",
            "aria-label": n,
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            disabled: t || "enabled" !== o.state,
            title: o.reason,
            onClick: () => d(void 0),
            className: (0, s.A)(
              "border-token-border-default flex h-7 min-w-0 cursor-pointer items-center justify-center rounded-lg border disabled:cursor-not-allowed disabled:opacity-40",
              i ? "bg-info-soft text-info" : "text-default enabled:hover:bg-primary-ghost-hover",
            ),
            children: e,
          })
    }
    var n_ = n("VFFD")
    function nX({ color: e, textBackground: t, paintRole: n, className: i }) {
      let l = (0, d.useContext)(ep.Z),
        a = t && "none" !== t ? l.withBackground(t) : l
      return (0, r.jsx)("span", {
        "aria-hidden": !0,
        className: i,
        style: { backgroundColor: "text" === n ? a.text(e) : a.color(e) },
      })
    }
    let nZ = ["image", "solid", "none"],
      nJ = { image: "Image fill", solid: "Solid fill", none: "No fill" }
    function nY({ fill: e, themeColors: t, onColorChange: n, onImageChange: i }) {
      let l = (0, d.useId)(),
        [a, o] = (0, d.useState)(e.kind ?? "solid"),
        c = (0, d.useRef)(null),
        u = (0, d.useRef)(e.kind ? (t[0]?.name ?? "#3A7DE8") : (e.themeColor ?? e.color))
      ;((0, d.useEffect)(() => {
        o(e.kind ?? "solid")
      }, [e.kind]),
        (0, d.useEffect)(() => {
          e.kind || (u.current = e.themeColor ?? e.color)
        }, [e.kind, e.color, e.themeColor]))
      let p = (t) => {
        ;(o(t), "none" === t && "none" !== e.kind && n("none"), "solid" === t && e.kind && n(u.current))
      }
      return (0, r.jsxs)("div", {
        className:
          "w-[248px] rounded-2xl bg-surface-elevated-secondary p-3 font-sans text-default shadow-lg ring-[0.5px] ring-border",
        children: [
          (0, r.jsx)("div", {
            ref: c,
            role: "tablist",
            "aria-label": "Fill type",
            className: "mb-3 flex rounded-lg bg-token-main-surface-secondary p-0.5",
            children: nZ.map((e, t) =>
              (0, r.jsx)(
                "button",
                {
                  id: `${l}-${e}`,
                  type: "button",
                  role: "tab",
                  "aria-label": nJ[e],
                  "aria-selected": a === e,
                  "aria-controls": `${l}-panel`,
                  tabIndex: a === e ? 0 : -1,
                  title: nJ[e],
                  onClick: () => p(e),
                  onKeyDown: (e) => {
                    let n =
                      "ArrowRight" === e.key
                        ? (t + 1) % 3
                        : "ArrowLeft" === e.key
                          ? (t + 2) % 3
                          : "Home" === e.key
                            ? 0
                            : "End" === e.key
                              ? 2
                              : null
                    null !== n &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      p(nZ[n]),
                      c.current?.querySelectorAll("button")[n]?.focus())
                  },
                  className: (0, s.A)(
                    "flex h-6 flex-1 cursor-interaction items-center justify-center rounded-md outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
                    a === e ? "bg-surface-elevated-secondary shadow-sm" : "hover:bg-primary-ghost-hover",
                  ),
                  children:
                    "image" === e
                      ? (0, r.jsx)(eC.xw, {})
                      : "none" === e
                        ? (0, r.jsx)(nQ, {})
                        : (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            className: "size-3.5 rounded-full bg-token-text-primary",
                          }),
                },
                e,
              ),
            ),
          }),
          (0, r.jsx)("div", {
            id: `${l}-panel`,
            role: "tabpanel",
            "aria-labelledby": `${l}-${a}`,
            children:
              "solid" === a
                ? (0, r.jsx)(n_.IM, {
                    inline: !0,
                    compact: !0,
                    ariaLabel: "Custom fill color",
                    value: e.themeColor ?? e.color,
                    themeColors: t.map(({ name: e, color: t }) => ({
                      label: `Accent ${e.slice(-1)}`,
                      value: e,
                      displayColor: t,
                    })),
                    onChange: n,
                  })
                : "image" === a
                  ? (0, r.jsxs)("div", {
                      className:
                        "relative flex h-32 items-center justify-center overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-secondary",
                      children: [
                        e.imageUrl
                          ? (0, r.jsx)("img", {
                              src: e.imageUrl,
                              alt: "Shape fill preview",
                              className: "absolute inset-0 size-full object-cover",
                            })
                          : null,
                        (0, r.jsx)("div", {
                          className:
                            "relative rounded-full bg-surface-elevated-secondary px-1 shadow-sm [&_button]:justify-center [&_button]:rounded-full",
                          children: (0, r.jsx)(ew.H, { onInsert: i, onClose: () => o("image") }),
                        }),
                      ],
                    })
                  : (0, r.jsxs)("div", {
                      className:
                        "flex h-20 flex-col items-center justify-center gap-2 text-xs text-token-text-secondary",
                      children: [(0, r.jsx)(nQ, {}), (0, r.jsx)("span", { children: "No fill" })],
                    }),
          }),
        ],
      })
    }
    function nQ() {
      return (0, r.jsx)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 20 20",
        className: "size-4",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        children: (0, r.jsx)("path", { d: "M4 4l12 12M6.8 3.8a7 7 0 0 1 9.4 9.4M13.2 16.2A7 7 0 0 1 3.8 6.8" }),
      })
    }
    var n0 = n("dP6Q"),
      n1 = n("QT5R"),
      n2 = n("oFB5")
    let n4 =
      "flex w-[280px] flex-col gap-3 rounded-2xl border border-token-border-light bg-token-main-surface-primary p-3 text-token-text-primary shadow-xl"
    function n3({ className: e }) {
      return (0, r.jsxs)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 20 20",
        fill: "none",
        className: e,
        children: [
          (0, r.jsx)("circle", { cx: "10", cy: "10", r: "6.5", stroke: "currentColor", strokeWidth: "1.5" }),
          (0, r.jsx)("path", { d: "m3 3 14 14", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        ],
      })
    }
    function n5({ className: e }) {
      return (0, r.jsx)("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 20 20",
        fill: "none",
        className: e,
        children: (0, r.jsx)("path", {
          d: "M3 4h14v3H3zM3 11h14M3 15h14",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinejoin: "round",
          strokeLinecap: "round",
        }),
      })
    }
    let n6 = [
      {
        value: "solid",
        label: "Solid fill",
        icon: function ({ className: e }) {
          return (0, r.jsx)("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 20 20",
            className: e,
            children: (0, r.jsx)("circle", { cx: "10", cy: "10", r: "7", fill: "currentColor" }),
          })
        },
      },
      { value: "none", label: "No fill", icon: n3 },
    ]
    function n8({ fill: e, onChange: t }) {
      let n = e.opacityPct > 0
      return (0, r.jsxs)("div", {
        className: n4,
        children: [
          (0, r.jsx)(n2.s, {
            ariaLabel: "Fill type",
            options: n6,
            value: n ? "solid" : "none",
            onChange: (r) => {
              ;("solid" === r) !== n &&
                t("none" === r ? { fillColor: "none" } : { fillColor: e.color, fillOpacityPct: 100 })
            },
          }),
          n
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(n0.X, {
                    label: "Color",
                    children: (0, r.jsx)(n_.IM, {
                      value: e.color,
                      ariaLabel: "Fill color",
                      onChange: (e) => t({ fillColor: e }),
                    }),
                  }),
                  (0, r.jsx)(n1.S, {
                    label: "Fill opacity",
                    value: e.opacityPct,
                    min: 0,
                    max: 100,
                    unit: "%",
                    onChange: (e) => t({ fillOpacityPct: e }),
                  }),
                ],
              })
            : null,
        ],
      })
    }
    function n9({ line: e, onChange: t }) {
      return (0, r.jsxs)("div", {
        className: n4,
        children: [
          (0, r.jsx)(n0.X, {
            label: "Color",
            children: (0, r.jsx)(n_.IM, {
              value: e.color,
              ariaLabel: "Outline color",
              onChange: (e) => t({ strokeColor: e }),
            }),
          }),
          (0, r.jsx)(n1.S, {
            label: "Width",
            value: e.width,
            min: 0,
            unit: "px",
            onChange: (e) => t({ strokeWidth: e }),
          }),
          (0, r.jsx)(n1.S, {
            label: "Opacity",
            value: e.opacityPct,
            min: 0,
            max: 100,
            unit: "%",
            onChange: (e) => t({ strokeOpacityPct: e }),
          }),
          (0, r.jsx)(n2.s, {
            ariaLabel: "Outline style",
            value: e.style,
            options: [
              { value: "solid", label: "Solid" },
              { value: "dashed", label: "Dash" },
              { value: "dotted", label: "Dot" },
              { value: "dash-dot", label: "D-Dot" },
              { value: "dash-dot-dot", label: "D-2" },
            ],
            onChange: (e) => t({ strokeStyle: e }),
          }),
        ],
      })
    }
    function n7({ controller: e, elementId: t, name: n }) {
      let [i, l] = (0, d.useState)(null),
        [a, o] = (0, d.useState)(!0)
      return (
        (0, d.useEffect)(() => {
          let n = !0,
            r = !1,
            i = !1,
            a = 0,
            s = !1,
            { presentationVersion: d, previewVersion: c } = e.getSnapshot()
          ;(o(!0), l(null))
          let u = async () => {
              ;((r = !0), (s = !1))
              let d = a
              try {
                let r = await e.requestImagePreview(t)
                n && d === a && ((i = !!r), l(r), o(!1))
              } catch {
                n && d === a && o(!1)
              } finally {
                ;((r = !1), n && s && u())
              }
            },
            p = e.subscribe(() => {
              let t = e.getSnapshot(),
                n = t.presentationVersion !== d,
                p = !i && t.previewVersion !== c && null == t.activeInteractionKind
              ;((d = t.presentationVersion),
                (c = t.previewVersion),
                (n || p) && ((a += 1), (i = !1), l(null), o(!0), r ? (s = !0) : u()))
            })
          return (
            u(),
            () => {
              ;((n = !1), p())
            }
          )
        }, [e, t]),
        (0, r.jsxs)("div", {
          className: n4,
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex h-8 items-center justify-center gap-2 rounded-lg bg-token-bg-secondary text-xs font-medium",
              children: [(0, r.jsx)(eC.xw, { className: "size-4" }), "Image"],
            }),
            i
              ? (0, r.jsx)("img", {
                  src: i,
                  alt: n || "Selected image",
                  className: "max-h-48 w-full rounded-lg object-contain",
                  draggable: !1,
                })
              : (0, r.jsxs)("div", {
                  role: "status",
                  className:
                    "flex h-36 flex-col items-center justify-center gap-2 rounded-lg bg-token-bg-secondary text-xs text-token-text-tertiary",
                  children: [
                    (0, r.jsx)(eC.xw, { className: "size-5" }),
                    a ? "Loading preview\u2026" : "Preview unavailable",
                  ],
                }),
          ],
        })
      )
    }
    let re = () => () => {},
      rt = (0, d.memo)(function ({
        controller: e,
        editorCapabilities: t,
        editToolbarRequested: n,
        floatingBar: i,
        isInspectorAvailable: l,
        isInspectorOpen: a,
        selectedElement: o,
        themeColors: s = [],
        selectionBounds: c,
        selectionBoundsSource: u,
        collisionBoundaryElement: p,
        selectionActions: h,
        shortcutScopeElement: m,
        onDismissEditToolbar: f,
        onToggleInspector: x,
      }) {
        let y = null != c,
          v = (0, d.useCallback)(() => (u ? null != u.getSnapshot() : y), [u, y]),
          w = (0, d.useSyncExternalStore)(u?.subscribe ?? re, v, v),
          C = eu(b.mq, t),
          S = (0, g.U)("presentation"),
          I = i ?? (0, eW.k3)(S, o?.kind ?? "mixed"),
          [j, M] = (0, d.useState)(""),
          [T, A] = (0, d.useState)(!1),
          [P, L] = (0, d.useState)(!1),
          F = (0, d.useRef)(null),
          R = (0, d.useRef)(!1),
          D = h?.creationRequest,
          N = D?.isSubmitting === !0,
          z = h?.activeRequest,
          B = null != z,
          O = o?.kind === "chart",
          V = o?.kind === "image",
          H =
            D?.placeholder ??
            (O
              ? "What should this chart contain?"
              : o?.image?.isPlaceholder
                ? "Describe an image"
                : "Ask for change about this selection"),
          K = o?.text,
          $ = o?.kind === "image" ? null : o?.fill,
          q = null != K || o?.fill != null || o?.line != null,
          W = l && q && C.inspector.length > 0,
          U = h?.onAskForEditShown,
          G = "hidden" !== I.controls.askForChange.state && h?.startAskChat != null && null != h.submitAskChat,
          _ =
            o && (0, nB.J3)(I.controls.format) && C.floating.includes("format") && C.inspector.includes("appearance")
              ? (function ({ selectedElement: e, controller: t }) {
                  let n = []
                  if ("image" === e.kind) {
                    if (e.image?.isPlaceholder) return n
                    n.push({
                      kind: "popover",
                      id: "image-appearance",
                      label: "Image options",
                      icon: eC.xw,
                      hideLabel: !0,
                      align: "start",
                      content: (0, r.jsx)(n7, { controller: t, elementId: e.id, name: e.name }, e.id),
                    })
                  } else if (e.fill) {
                    let i = e.fill
                    n.push({
                      kind: "popover",
                      id: "shape-fill",
                      label: "Fill options",
                      hideLabel: !0,
                      subLabel:
                        0 === i.opacityPct
                          ? (0, r.jsx)(n3, { className: "size-4" })
                          : (0, r.jsx)("span", {
                              "aria-hidden": "true",
                              className: "block size-4 rounded-full border border-token-border-light",
                              style: { backgroundColor: i.color },
                            }),
                      align: "start",
                      content: (0, r.jsx)(n8, { fill: i, onChange: (e) => t.updateSelectedElementStyle(e) }, e.id),
                    })
                  }
                  return (
                    e.line &&
                      n.push({
                        kind: "popover",
                        id: "shape-outline",
                        label: "Outline options",
                        icon: n5,
                        hideLabel: !0,
                        align: "start",
                        content: (0, r.jsx)(n9, { line: e.line, onChange: (e) => t.updateSelectedElementStyle(e) }),
                      }),
                    n
                  )
                })({ selectedElement: o, controller: e }).filter(
                  (e) => "shape-fill" !== e.id && ("shape-outline" !== e.id || null != o.fill || "image" === o.kind),
                )
              : [],
          X = $ || o?.kind === "image" || _.some((e) => "shape-outline" === e.id) ? null : o?.line,
          Z = $ ?? X,
          J = n || (P && (G || B)),
          Y = I.enabled && J
        ;(0, d.useEffect)(() => {
          ;(M(""), A(!1), (R.current = !1))
        }, [I])
        let Q = Y && !T && !B && w && G && (0, nB.J3)(I.controls.askForChange)
        ;((0, d.useEffect)(() => {
          let e = h?.creationRequest
          null != e && F.current !== e.id && J && !B && w && o?.id === e.elementId && ((F.current = e.id), M(""), A(!0))
        }, [B, o?.id, h?.creationRequest, w, J]),
          (0, d.useEffect)(() => {
            z?.annotationId != null && (M(""), A(!1), L(!0))
          }, [z?.annotationId]),
          (0, d.useEffect)(() => {
            Q && !R.current && null != U && ((R.current = !0), U())
          }, [Q, U]))
        let ee = (0, d.useCallback)(
          (e) => {
            h?.startAskChat != null &&
              (0, nB.J3)(I.controls.askForChange) &&
              (h.startAskChat(e), h.opensAnnotationEditor || A(!0))
          },
          [h, I],
        )
        ;(0, e_.zk)({ enabled: Q, onClick: ee, shortcutScopeElement: m })
        let et = () => {
            ;(D?.onDismiss(), M(""), A(!1), L(!1), f())
          },
          en = async (e, t) => {
            if (
              !B &&
              !N &&
              j.trim() &&
              (D ? !D.disabled : h?.submitAskChat != null && (0, nB.J3)(I.controls.askForChange))
            ) {
              if (D) {
                ;(await D.onSubmit(j)) && et()
                return
              }
              !h?.submitAskChat ||
                ((t ? "saved" !== h.defaultSubmitMode : "saved" === h.defaultSubmitMode) && h.savedSubmitDisabled) ||
                (h.submitAskChat(j, e, t), et())
            }
          },
          er = [
            G
              ? [
                  {
                    kind: "button",
                    id: "ask-chat",
                    label: h?.askForEditLabel ?? "Ask for change",
                    isDisabled: !(0, nB.J3)(I.controls.askForChange),
                    disabledReason: I.controls.askForChange.reason,
                    subLabel: (0, r.jsx)("span", {
                      className: "text-[11px] leading-none text-token-text-tertiary",
                      children: (0, e_.GU)(),
                    }),
                    onClick: () => ee("ask_codex_button"),
                  },
                ]
              : [],
            Z && C.floating.includes("fill") && (0, nB.J3)(I.controls.format)
              ? [
                  {
                    kind: "popover",
                    id: X ? "stroke" : "fill",
                    label: X ? "Stroke color" : "Fill color",
                    hideLabel: !0,
                    align: "start",
                    subLabel:
                      "image" === Z.kind
                        ? (0, r.jsx)(eC.xw, {})
                        : "none" === Z.kind
                          ? (0, r.jsx)(nQ, {})
                          : (0, r.jsx)("span", {
                              "aria-hidden": !0,
                              className: "block size-4 rounded-full border border-token-border-light",
                              style: { backgroundColor: Z.color },
                            }),
                    content: X
                      ? (0, r.jsx)("div", {
                          className:
                            "w-[248px] rounded-2xl bg-surface-elevated-secondary p-3 font-sans text-default shadow-lg ring-[0.5px] ring-border",
                          children: (0, r.jsx)(n_.IM, {
                            compact: !0,
                            inline: !0,
                            ariaLabel: "Custom stroke color",
                            value: X.themeColor ?? X.color,
                            themeColors: s.map(({ name: e, color: t }) => ({
                              label: `Accent ${e.slice(-1)}`,
                              value: e,
                              displayColor: t,
                            })),
                            onChange: (t) => e.updateSelectedElementStyle({ strokeColor: t }),
                          }),
                        })
                      : (0, r.jsx)(nY, {
                          fill: Z,
                          themeColors: s,
                          onColorChange: (t) => e.updateSelectedElementStyle({ fillColor: t }),
                          onImageChange: (t) => e.updateSelectedElementStyle({ fillImage: t }),
                        }),
                  },
                ]
              : [],
            _,
            (function ({
              capabilities: e,
              config: t,
              textStyle: n,
              fill: i,
              onTextStyleChange: l,
              onFillChange: a,
              inspectorOpen: o,
              onToggleInspector: s,
              onDelete: d,
            }) {
              let c = []
              if (!t.enabled) return c
              let u = t.controls,
                p = nV.M.map(({ value: e }) => e),
                h = (e) => ({ isDisabled: !(0, nB.J3)(e), disabledReason: e.reason })
              for (let m of eU({
                capabilities: e,
                config: t,
                text: null != n,
                fill: null != a,
                format: null != s,
                delete: null != d,
              }))
                (n &&
                  ("bold" === m || "italic" === m) &&
                  c.push({
                    kind: "button",
                    id: m,
                    label: "bold" === m ? "Bold" : "Italic",
                    icon: "bold" === m ? E.Nd : E.OC,
                    hideLabel: !0,
                    isActive: n[m] ?? !1,
                    ...h(u[m]),
                    onClick: () => {
                      ;(0, nB.J3)(u[m]) && l({ [m]: !n[m] })
                    },
                  }),
                  n &&
                    "text-color" === m &&
                    c.push({
                      kind: "popover",
                      id: "text-color",
                      label: "Text color",
                      hideLabel: !0,
                      ...h(u.textColor),
                      subLabel: (0, r.jsx)(nX, {
                        className: "block size-4 rounded-full border border-black/10",
                        color: n.color ?? "#000000",
                        textBackground: i,
                        paintRole: "text",
                      }),
                      align: "center",
                      content: (0, r.jsx)(n_.IM, {
                        inline: !0,
                        config: u.textColor,
                        disabled: !(0, nB.J3)(u.textColor),
                        allowCustom: u.textColor.options?.allowCustom,
                        palette: u.textColor.options?.palette,
                        ariaLabel: "Custom text color",
                        paintRole: "text",
                        backgroundColor: i,
                        value: n.color ?? "#000000",
                        mixed: null == n.color,
                        onChange: (e) => {
                          ;(0, nB.HO)(u.textColor, e, !1, p) && l({ color: e })
                        },
                      }),
                    }),
                  n &&
                    "text-size" === m &&
                    c.push({
                      kind: "popover",
                      id: "text-size",
                      label: "Text size",
                      icon: E.m5,
                      hideLabel: !0,
                      ...h(u.fontSize),
                      align: "center",
                      content: (0, r.jsx)(nW, {
                        config: u.fontSize,
                        fontSize: n.fontSize,
                        onChange: (e) => {
                          ;(0, nB.XT)(u.fontSize, e, { min: 1 }) && l({ fontSize: e })
                        },
                      }),
                    }),
                  "fill" === m &&
                    a &&
                    c.push({
                      kind: "popover",
                      id: "fill",
                      label: "Fill color",
                      hideLabel: !0,
                      ...h(u.fill),
                      subLabel: (0, r.jsx)(nX, {
                        className: "block size-4 rounded border border-black/10",
                        color: i ?? "#FFFFFF",
                      }),
                      content: (0, r.jsx)(n_.IM, {
                        inline: !0,
                        config: u.fill,
                        disabled: !(0, nB.J3)(u.fill),
                        allowCustom: u.fill.options?.allowCustom,
                        palette: u.fill.options?.palette,
                        ariaLabel: "Custom fill color",
                        value: i ?? "#FFFFFF",
                        onChange: (e) => {
                          ;(0, nB.HO)(u.fill, e, !1, p) && a(e)
                        },
                      }),
                    }),
                  "format" === m &&
                    s &&
                    c.push({
                      kind: "button",
                      id: "style-picker",
                      label: "Open style picker",
                      icon: E.TP,
                      hideLabel: !0,
                      isActive: o,
                      ...h(u.format),
                      onClick: () => {
                        ;(0, nB.J3)(u.format) && s()
                      },
                    }),
                  "delete" === m &&
                    d &&
                    c.push({
                      kind: "button",
                      id: "delete",
                      label: "Delete selection",
                      icon: E.uc,
                      hideLabel: !0,
                      ...h(u.delete),
                      onClick: () => {
                        ;(0, nB.J3)(u.delete) && d()
                      },
                    }))
              return c
            })({
              capabilities: C,
              config: I,
              textStyle: K,
              fill: o?.fill?.color,
              onTextStyleChange: (t) => {
                e.updateSelectedElementStyle({
                  ...(null != t.bold ? { textBold: t.bold } : {}),
                  ...(null != t.italic ? { textItalic: t.italic } : {}),
                  ...(null != t.color ? { textColor: t.color } : {}),
                  ...(null != t.fontSize ? { textFontSize: t.fontSize } : {}),
                })
              },
              inspectorOpen: a,
              onToggleInspector: W ? x : void 0,
            }),
            h?.startComment && "hidden" !== I.controls.comment.state
              ? [
                  {
                    kind: "button",
                    id: "add-comment",
                    label: "Add comment",
                    icon: E.Tw,
                    hideLabel: !0,
                    isDisabled: !(0, nB.J3)(I.controls.comment),
                    disabledReason: I.controls.comment.reason,
                    onClick: () => {
                      ;(0, nB.J3)(I.controls.comment) && h.startComment?.()
                    },
                  },
                ]
              : [],
          ]
            .filter((e) => e.length > 0)
            .flatMap((e, t) => (0 === t ? e : [{ kind: "separator", id: `group-${t}` }, ...e])),
          ei =
            T || B
              ? (0, r.jsxs)("form", {
                  "aria-busy": B || N,
                  className: "flex h-full w-full items-center gap-2 px-1",
                  onSubmit: (e) => {
                    ;(e.preventDefault(), e.stopPropagation(), en("button", !1))
                  },
                  onKeyDown: (e) => {
                    if ((e.stopPropagation(), "Enter" === e.key && !e.nativeEvent.isComposing)) {
                      ;(e.preventDefault(), en("keyboard", e.metaKey || e.ctrlKey))
                      return
                    }
                    if ("Escape" !== e.key) return
                    if ((e.preventDefault(), B || D)) return void et()
                    let t = e.currentTarget.closest("[role='toolbar']")
                    ;((0, k.flushSync)(() => A(!1)),
                      t?.querySelector("button[data-toolbar-action='ask-chat']")?.focus())
                  },
                  children: [
                    (0, r.jsx)("input", {
                      autoFocus: !B,
                      "aria-label": H,
                      className:
                        "min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm text-token-text-primary shadow-none outline-none placeholder:text-token-text-tertiary focus:ring-0",
                      placeholder: H,
                      value: z?.body ?? j,
                      readOnly: B || N,
                      onChange: (e) => M(e.currentTarget.value),
                    }),
                    B
                      ? (0, r.jsx)("button", {
                          type: "button",
                          "aria-label": V ? "Stop generating image" : "Stop updating chart",
                          disabled: null == z.onCancel,
                          onClick: z.onCancel,
                          className:
                            "flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-token-bg-tertiary text-token-text-primary hover:opacity-80 disabled:cursor-default",
                          children: (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            className: "size-2 rounded-[1px] bg-current",
                          }),
                        })
                      : (0, r.jsx)("button", {
                          type: "submit",
                          "aria-label": "Send to Chat",
                          disabled:
                            N ||
                            !j.trim() ||
                            (D ? D.disabled : h?.defaultSubmitMode === "saved" && h.savedSubmitDisabled),
                          className:
                            "flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary transition-transform duration-100 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100",
                          children: (0, r.jsx)(E.MM, { className: "size-4" }),
                        }),
                  ],
                })
              : null
        return (0, r.jsx)(
          nO.d,
          {
            ariaLabel: B ? (V ? "Generating image" : "Updating chart") : T ? "Ask for change" : "Selection actions",
            bounds: c,
            boundsSource: u,
            isVisible: Y,
            containerElement: m,
            collisionBoundaryElement: p,
            items: er,
            overlayContent: ei,
            overlayVisible: T || B,
            overlayWidth: 360,
            onKeyDown: (e) => {
              "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), et())
            },
          },
          JSON.stringify(I),
        )
      })
    var rn = n("ldxx")
    let rr = nV.M.map(({ value: e }) => e)
    var ri = n("zjpR")
    let rl = {
        roundedCorners: "roundedCorners",
        "chartLine.fill": "chartLineColor",
        "chartLine.width": "chartLineWidth",
        "chartLine.style": "chartLineStyle",
        "chartLine.compound": "chartLineCompound",
        "plotAreaLine.fill": "plotLineColor",
        "plotAreaLine.width": "plotLineWidth",
        "plotAreaLine.style": "plotLineStyle",
        "plotAreaLine.compound": "plotLineCompound",
        titlePlacement: "titlePlacement",
        "titleTextStyle.name": "titleTextFont",
        "titleTextStyle.typeface": "titleTextFont",
        "titleTextStyle.fontSize": "titleTextSize",
        "titleTextStyle.fill": "titleTextColor",
        "titleTextStyle.bold": "titleTextBold",
        "titleTextStyle.italic": "titleTextItalic",
        "titleTextStyle.underline": "titleTextUnderline",
        "titleTextStyle.alignment": "titleTextAlignment",
        "titleTextStyle.rotation": "titleTextRotation",
        "legend.overlay": "legendOverlay",
        "legend.fill": "legendFill",
        "legend.stroke.fill": "legendLineColor",
        "legend.stroke.width": "legendLineWidth",
        "legend.stroke.style": "legendLineStyle",
        "legend.stroke.compound": "legendLineCompound",
        "legend.textStyle.name": "legendTextFont",
        "legend.textStyle.typeface": "legendTextFont",
        "legend.textStyle.fontSize": "legendTextSize",
        "legend.textStyle.fill": "legendTextColor",
        "legend.textStyle.bold": "legendTextBold",
        "legend.textStyle.italic": "legendTextItalic",
        "legend.textStyle.underline": "legendTextUnderline",
        "legend.textStyle.alignment": "legendTextAlignment",
        "legend.textStyle.rotation": "legendTextRotation",
        "xAxis.axisType": "xAxisType",
        "xAxis.position": "xAxisPosition",
        "xAxis.orientation": "xAxisOrientation",
        "xAxis.min": "xAxisMin",
        "xAxis.max": "xAxisMax",
        "xAxis.logBase": "xAxisLogBase",
        "xAxis.majorUnit": "xAxisMajorUnit",
        "xAxis.minorUnit": "xAxisMinorUnit",
        "xAxis.majorTickMark": "xAxisMajorTickMark",
        "xAxis.minorTickMark": "xAxisMinorTickMark",
        "xAxis.tickLabelPosition": "xAxisTickLabelPosition",
        "xAxis.tickLabelInterval": "xAxisTickLabelInterval",
        "xAxis.tickMarkInterval": "xAxisTickMarkInterval",
        "xAxis.tickLabelDistanceFromAxis": "xAxisTickLabelDistanceFromAxis",
        "xAxis.labelOffsetPercent": "xAxisLabelOffsetPercent",
        "xAxis.crossBetween": "xAxisCrossBetween",
        "xAxis.crosses": "xAxisCrosses",
        "xAxis.crossesAt": "xAxisCrossesAt",
        "xAxis.numberFormatCode": "xAxisNumberFormatCode",
        "xAxis.numberFormatSourceLinked": "xAxisNumberFormatSourceLinked",
        "xAxis.minorGridlines": "xAxisMinorGridlines",
        "xAxis.title.textStyle.name": "xAxisTitleTextFont",
        "xAxis.title.textStyle.typeface": "xAxisTitleTextFont",
        "xAxis.title.textStyle.fontSize": "xAxisTitleTextSize",
        "xAxis.title.textStyle.fill": "xAxisTitleTextColor",
        "xAxis.title.textStyle.bold": "xAxisTitleTextBold",
        "xAxis.title.textStyle.italic": "xAxisTitleTextItalic",
        "xAxis.title.textStyle.underline": "xAxisTitleTextUnderline",
        "xAxis.title.textStyle.alignment": "xAxisTitleTextAlignment",
        "xAxis.title.textStyle.rotation": "xAxisTitleTextRotation",
        "xAxis.textStyle.name": "xAxisTextFont",
        "xAxis.textStyle.typeface": "xAxisTextFont",
        "xAxis.textStyle.fontSize": "xAxisTextSize",
        "xAxis.textStyle.fill": "xAxisTextColor",
        "xAxis.textStyle.bold": "xAxisTextBold",
        "xAxis.textStyle.italic": "xAxisTextItalic",
        "xAxis.textStyle.underline": "xAxisTextUnderline",
        "xAxis.textStyle.alignment": "xAxisTextAlignment",
        "xAxis.textStyle.rotation": "xAxisTextRotation",
        "xAxis.line.fill": "xAxisLineColor",
        "xAxis.line.width": "xAxisLineWidth",
        "xAxis.line.style": "xAxisLineStyle",
        "xAxis.line.compound": "xAxisLineCompound",
        "xAxis.majorGridlines.fill": "xAxisMajorGridlineColor",
        "xAxis.majorGridlines.width": "xAxisMajorGridlineWidth",
        "xAxis.majorGridlines.style": "xAxisMajorGridlineStyle",
        "xAxis.majorGridlines.compound": "xAxisMajorGridlineCompound",
        "xAxis.minorGridlines.fill": "xAxisMinorGridlineColor",
        "xAxis.minorGridlines.width": "xAxisMinorGridlineWidth",
        "xAxis.minorGridlines.style": "xAxisMinorGridlineStyle",
        "xAxis.minorGridlines.compound": "xAxisMinorGridlineCompound",
        "yAxis.axisType": "yAxisType",
        "yAxis.position": "yAxisPosition",
        "yAxis.orientation": "yAxisOrientation",
        "yAxis.min": "yAxisMin",
        "yAxis.max": "yAxisMax",
        "yAxis.logBase": "yAxisLogBase",
        "yAxis.majorUnit": "yAxisMajorUnit",
        "yAxis.minorUnit": "yAxisMinorUnit",
        "yAxis.majorTickMark": "yAxisMajorTickMark",
        "yAxis.minorTickMark": "yAxisMinorTickMark",
        "yAxis.tickLabelPosition": "yAxisTickLabelPosition",
        "yAxis.tickLabelInterval": "yAxisTickLabelInterval",
        "yAxis.tickMarkInterval": "yAxisTickMarkInterval",
        "yAxis.tickLabelDistanceFromAxis": "yAxisTickLabelDistanceFromAxis",
        "yAxis.labelOffsetPercent": "yAxisLabelOffsetPercent",
        "yAxis.crossBetween": "yAxisCrossBetween",
        "yAxis.crosses": "yAxisCrosses",
        "yAxis.crossesAt": "yAxisCrossesAt",
        "yAxis.numberFormatCode": "yAxisNumberFormatCode",
        "yAxis.numberFormatSourceLinked": "yAxisNumberFormatSourceLinked",
        "yAxis.minorGridlines": "yAxisMinorGridlines",
        "yAxis.title.textStyle.name": "yAxisTitleTextFont",
        "yAxis.title.textStyle.typeface": "yAxisTitleTextFont",
        "yAxis.title.textStyle.fontSize": "yAxisTitleTextSize",
        "yAxis.title.textStyle.fill": "yAxisTitleTextColor",
        "yAxis.title.textStyle.bold": "yAxisTitleTextBold",
        "yAxis.title.textStyle.italic": "yAxisTitleTextItalic",
        "yAxis.title.textStyle.underline": "yAxisTitleTextUnderline",
        "yAxis.title.textStyle.alignment": "yAxisTitleTextAlignment",
        "yAxis.title.textStyle.rotation": "yAxisTitleTextRotation",
        "yAxis.textStyle.name": "yAxisTextFont",
        "yAxis.textStyle.typeface": "yAxisTextFont",
        "yAxis.textStyle.fontSize": "yAxisTextSize",
        "yAxis.textStyle.fill": "yAxisTextColor",
        "yAxis.textStyle.bold": "yAxisTextBold",
        "yAxis.textStyle.italic": "yAxisTextItalic",
        "yAxis.textStyle.underline": "yAxisTextUnderline",
        "yAxis.textStyle.alignment": "yAxisTextAlignment",
        "yAxis.textStyle.rotation": "yAxisTextRotation",
        "yAxis.line.fill": "yAxisLineColor",
        "yAxis.line.width": "yAxisLineWidth",
        "yAxis.line.style": "yAxisLineStyle",
        "yAxis.line.compound": "yAxisLineCompound",
        "yAxis.majorGridlines.fill": "yAxisMajorGridlineColor",
        "yAxis.majorGridlines.width": "yAxisMajorGridlineWidth",
        "yAxis.majorGridlines.style": "yAxisMajorGridlineStyle",
        "yAxis.majorGridlines.compound": "yAxisMajorGridlineCompound",
        "yAxis.minorGridlines.fill": "yAxisMinorGridlineColor",
        "yAxis.minorGridlines.width": "yAxisMinorGridlineWidth",
        "yAxis.minorGridlines.style": "yAxisMinorGridlineStyle",
        "yAxis.minorGridlines.compound": "yAxisMinorGridlineCompound",
        "dataLabels.visible": "dataLabelsVisible",
        "dataLabels.text": "dataLabelsText",
        "dataLabels.position": "dataLabelsPosition",
        "dataLabels.showValue": "dataLabelsShowValue",
        "dataLabels.showSeriesName": "dataLabelsShowSeriesName",
        "dataLabels.showCategoryName": "dataLabelsShowCategoryName",
        "dataLabels.showLegendKey": "dataLabelsShowLegendKey",
        "dataLabels.showPercent": "dataLabelsShowPercent",
        "dataLabels.showBubbleSize": "dataLabelsShowBubbleSize",
        "dataLabels.showLeaderLines": "dataLabelsShowLeaderLines",
        "dataLabels.numberFormatCode": "dataLabelsNumberFormatCode",
        "dataLabels.numberFormatSourceLinked": "dataLabelsNumberFormatSourceLinked",
        "dataLabels.separator": "dataLabelsSeparator",
        "dataLabels.fill": "dataLabelsFill",
        "dataLabels.stroke.fill": "dataLabelsLineColor",
        "dataLabels.stroke.width": "dataLabelsLineWidth",
        "dataLabels.stroke.style": "dataLabelsLineStyle",
        "dataLabels.stroke.compound": "dataLabelsLineCompound",
        "dataLabels.textStyle.name": "dataLabelsTextFont",
        "dataLabels.textStyle.typeface": "dataLabelsTextFont",
        "dataLabels.textStyle.fontSize": "dataLabelsTextSize",
        "dataLabels.textStyle.fontSizePt": "dataLabelsTextSize",
        "dataLabels.textStyle.fill": "dataLabelsTextColor",
        "dataLabels.textStyle.bold": "dataLabelsTextBold",
        "dataLabels.textStyle.italic": "dataLabelsTextItalic",
        "dataLabels.textStyle.underline": "dataLabelsTextUnderline",
        "dataLabels.textStyle.alignment": "dataLabelsTextAlignment",
        "dataLabels.textStyle.rotation": "dataLabelsTextRotation",
        "dataTable.visible": "dataTableVisible",
        "dataTable.showLegendKey": "dataTableShowLegendKey",
        "dataTable.fill": "dataTableFill",
        "dataTable.stroke.fill": "dataTableLineColor",
        "dataTable.stroke.width": "dataTableLineWidth",
        "dataTable.stroke.style": "dataTableLineStyle",
        "dataTable.stroke.compound": "dataTableLineCompound",
        "dataTable.textStyle.name": "dataTableTextFont",
        "dataTable.textStyle.typeface": "dataTableTextFont",
        "dataTable.textStyle.fontSize": "dataTableTextSize",
        "dataTable.textStyle.fill": "dataTableTextColor",
        "dataTable.textStyle.bold": "dataTableTextBold",
        "dataTable.textStyle.italic": "dataTableTextItalic",
        "dataTable.textStyle.underline": "dataTableTextUnderline",
        "dataTable.textStyle.alignment": "dataTableTextAlignment",
        "dataTable.textStyle.rotation": "dataTableTextRotation",
      },
      ra = { state: "hidden" }
    function ro(e, t) {
      let n = rl[t]
      return n && "number" === ri.h[n].kind ? e[n] : ra
    }
    function rs(e, t) {
      let n = rl[t]
      return n && "color" === ri.h[n].kind ? e[n] : ra
    }
    function rd(e, t) {
      let n = rl[t]
      return n && "choice" === ri.h[n].kind ? e[n] : ra
    }
    let rc = nV.M.map(({ value: e }) => e),
      ru = (e) => null !== e && "object" == typeof e && !Array.isArray(e)
    function rp(e, t, n, r) {
      if (!t.formatting || !e.enabled) return !1
      let i = !1
      for (let e of ["x", "y"]) {
        let i = n[`${e}Axis`]
        if (
          i &&
          (!t.axes?.[e].visible ||
            (void 0 !== i.position &&
              !(function (e, t, n) {
                if ("radar" === e.chartType) return []
                let r = e.axisTargets?.find((e) => e.axisId === n)
                return r?.axis !== "x" || r.isPrimary
                  ? ("bar" === e.direction ? "y" === t : "x" === t)
                    ? ["bottom", "top"]
                    : ["left", "right"]
                  : []
              })(t, e, r).includes(i.position)) ||
            ("radar" === t.chartType && ("high" === i.tickLabelPosition || "low" === i.tickLabelPosition)) ||
            ("y" !== e &&
              "scatter" !== t.chartType &&
              "bubble" !== t.chartType &&
              t.formatting?.xAxis?.axisType !== "dateAxis" &&
              [i.min, i.max, i.logBase, i.majorUnit, i.minorUnit, i.numberFormatCode, i.numberFormatSourceLinked].some(
                (e) => void 0 !== e,
              )) ||
            (("x" !== e || "scatter" === t.chartType || "bubble" === t.chartType) &&
              [
                i.axisType,
                i.tickLabelInterval,
                i.tickMarkInterval,
                i.tickLabelDistanceFromAxis,
                i.labelOffsetPercent,
              ].some((e) => void 0 !== e)))
        )
          return !1
      }
      return (
        !(
          (n.legend && !t.legend.visible) ||
          (n.titleTextStyle && "none" === t.formatting.titlePlacement) ||
          (n.dataLabels &&
            !t.formatting.dataLabels?.visible &&
            Object.keys(n.dataLabels).some((e) => "visible" !== e)) ||
          (n.dataTable &&
            (!t.axes || (!t.formatting.dataTable?.visible && Object.keys(n.dataTable).some((e) => "visible" !== e))))
        ) &&
        (function t(n, r, l) {
          if (Object.is(n, r) || (l.endsWith(".style") && void 0 === r && "solid" === n)) return !0
          let a = rl[l]
          if (
            a &&
            l.endsWith(".minorGridlines") &&
            null == r &&
            ru(n) &&
            "solid" === n.style &&
            "#D1D5DB" === n.fill &&
            1 === n.width &&
            3 === Object.keys(n).length &&
            (0, nB.J3)(e.controls[a])
          )
            return ((i = !0), !0)
          if (a && !(ru(n) && "plain" === ri.h[a].kind)) {
            let t = e.controls[a]
            if (!(0, nB.J3)(t)) return !1
            i = !0
            let r = ri.h[a].kind
            return "number" === r
              ? null === n || ("number" == typeof n && (0, nB.XT)(ro(e.controls, l), n))
              : "color" === r
                ? "string" == typeof n && (0, nB.HO)(rs(e.controls, l), n, !0, rc)
                : "choice" === r
                  ? "string" == typeof n && (0, nB.lB)(rd(e.controls, l), n)
                  : "boolean" == typeof n || "string" == typeof n || (null === n && l.endsWith("Gridlines"))
          }
          return !!ru(n) && Object.entries(n).every(([e, n]) => t(n, ru(r) ? r[e] : void 0, l ? `${l}.${e}` : e))
        })(n, t.formatting, "") &&
        i
      )
    }
    function rh(e, t, n, r) {
      return "number" == typeof t && (0, nB.XT)(e, t, { min: n, max: r })
    }
    let rm = nV.M.map((e) => e.value),
      rf = nV.M.map(({ value: e }) => e)
    var rg = n("mOuv"),
      rx = n("QEPj")
    function rb(e) {
      return "string" == typeof e ? e : e?.type === "rgb" || e?.type === "theme" ? e.value : void 0
    }
    function ry(e) {
      return "string" == typeof e
        ? "none" === e
          ? "none"
          : "solid"
        : e?.type === "solid"
          ? e.pattern && "solid" !== e.pattern.type
            ? "pattern"
            : "solid"
          : e?.type === "gradient" || e?.type === "none"
            ? e.type
            : void 0
    }
    let rv = nV.M.map(({ value: e }) => e)
    function rw(e, t) {
      let n = { state: "enabled", options: e.options }
      return [t, ...(e.options?.palette ?? rv)].find((e) => (0, nB.HO)(n, e, !1, rv))
    }
    function rC(e, t, n = -1 / 0, r = 1 / 0) {
      let i = { state: "enabled", options: e.options },
        l = Math.max(Math.max(n, e.options?.min ?? -1 / 0), Math.min(Math.min(r, e.options?.max ?? 1 / 0), t))
      return [t, ...(e.options?.presets ?? []), l].find((e) => (0, nB.XT)(i, e, { min: n, max: r }))
    }
    function rS(e, t = 50, n = "#888888") {
      let r = rw(e.gradientStopColor, n),
        i = rC(e.gradientStopPosition, t, 0, 100)
      if (void 0 !== r && void 0 !== i) return { offset: 1e3 * i, color: r }
    }
    let rk = nV.M.map(({ value: e }) => e)
    function rI(e) {
      return JSON.stringify(e, (e, t) =>
        !t || "object" != typeof t || Array.isArray(t)
          ? t
          : Object.fromEntries(Object.entries(t).sort(([e], [t]) => e.localeCompare(t))),
      )
    }
    let rE = (e, t) => rI(e) === rI(t)
    function rj(e, t, n, r) {
      if (rE(n, t)) return !1
      if ("string" == typeof n) return (0, nB.HO)(e.color, n, !0, rk)
      let i = ry(n)
      if (void 0 === i) return !1
      if (i !== ry(t ?? r ?? void 0))
        return (
          !!(0, nB.lB)(e.type, i) &&
          rE(
            n,
            (function (e, t, n) {
              if (!(0, nB.lB)({ state: "enabled", options: n.type.options }, e)) return
              if ("none" === e) return { type: "none" }
              if ("solid" === e) {
                let e =
                    "string" == typeof t ? t : t?.type === "solid" ? rb(t.color) : t?.type === "none" ? "none" : void 0,
                  r = rw(n.color, e && "none" !== e ? e : "#4f46e5")
                return void 0 === r ? void 0 : { type: "solid", color: r }
              }
              if ("gradient" === e) {
                let e = rC(n.gradientAngle, 0),
                  t = rS(n, 0, "#4f46e5"),
                  r = rS(n, 100, "#ffffff")
                if (void 0 === e || !t || !r) return
                return { type: "gradient", angleDeg: e, offsetScale: 1e5, stops: [t, r] }
              }
              let r = rx.W.shape.type.options.filter(
                  (e) =>
                    "none" !== e &&
                    "solid" !== e &&
                    (0, nB.lB)({ state: "enabled", options: n.patternType.options }, e),
                ),
                i = r.includes("percent50") ? "percent50" : r[0],
                l = rw(n.color, "#ffffff"),
                a = rw(n.patternColor, "#4f46e5")
              if (i && void 0 !== l && void 0 !== a) return { type: "solid", color: l, pattern: { type: i, color: a } }
            })(i, t ?? r ?? void 0, e),
          )
        )
      if ("none" === n.type) return (0, nB.lB)(e.type, "none")
      if ("solid" === n.type) {
        let i = "object" == typeof t && "solid" === t.type ? t : void 0
        return (
          (!!rE(n.color, i?.color ?? r) || !!(0, nB.HO)(e.color, rb(n.color) ?? null, !1, rk)) &&
          (n.pattern?.type === i?.pattern?.type || (!!n.pattern && !!(0, nB.lB)(e.patternType, n.pattern.type))) &&
          (!!rE(n.pattern?.color, i?.pattern?.color) ||
            (!!n.pattern && !!(0, nB.HO)(e.patternColor, rb(n.pattern.color) ?? null, !1, rk)))
        )
      }
      if (
        "gradient" !== n.type ||
        "object" != typeof t ||
        "gradient" !== t.type ||
        !rE({ ...t, angleDeg: n.angleDeg, stops: n.stops }, n) ||
        (n.angleDeg !== t.angleDeg && (void 0 === n.angleDeg || !(0, nB.XT)(e.gradientAngle, n.angleDeg)))
      )
        return !1
      if (n.stops.length !== t.stops.length) {
        if (!(0, nB.J3)(e.gradientStops)) return !1
        let r = n.stops.length < t.stops.length ? n.stops : t.stops,
          i = n.stops.length < t.stops.length ? t.stops : n.stops,
          l = 0,
          a = rS(e),
          o = a ? { ...a, offset: (a.offset / 1e5) * (n.offsetScale ?? 1e5) } : void 0
        for (let e of i)
          if (rE(e, r[l])) l += 1
          else if (n.stops.length > t.stops.length && !rE(e, o)) return !1
        return l === r.length
      }
      return n.stops.every((r, i) => {
        let l = t.stops[i]
        if (!rE(r.color, l.color) && !(0, nB.HO)(e.gradientStopColor, rb(r.color) ?? null, !1, rk)) return !1
        let a = (r.offset / (n.offsetScale ?? 1e5)) * 100
        return r.offset === l.offset || (0, nB.XT)(e.gradientStopPosition, a, { min: 0, max: 100 })
      })
    }
    function rM(e, t) {
      return "background" === t
        ? {
            type: e.seriesTrendlineLabelBackgroundType,
            color: e.seriesTrendlineLabelBackgroundColor,
            gradientAngle: e.seriesTrendlineLabelBackgroundGradientAngle,
            gradientStops: e.seriesTrendlineLabelBackgroundGradientStops,
            gradientStopColor: e.seriesTrendlineLabelBackgroundGradientStopColor,
            gradientStopPosition: e.seriesTrendlineLabelBackgroundGradientStopPosition,
            patternType: e.seriesTrendlineLabelBackgroundPatternType,
            patternColor: e.seriesTrendlineLabelBackgroundPatternColor,
          }
        : {
            type: e.seriesTrendlineLabelTextFillType,
            color: e.seriesTrendlineLabelTextFillColor,
            gradientAngle: e.seriesTrendlineLabelTextFillGradientAngle,
            gradientStops: e.seriesTrendlineLabelTextFillGradientStops,
            gradientStopColor: e.seriesTrendlineLabelTextFillGradientStopColor,
            gradientStopPosition: e.seriesTrendlineLabelTextFillGradientStopPosition,
            patternType: e.seriesTrendlineLabelTextFillPatternType,
            patternColor: e.seriesTrendlineLabelTextFillPatternColor,
          }
    }
    let rT = nV.M.map(({ value: e }) => e),
      rA = nV.M.map(({ value: e }) => e),
      rP = nV.M.map(({ value: e }) => e),
      rL = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
      rF = nV.M.map((e) => e.value)
    var rR = n("HTnr"),
      rD = n("jyPl")
    let rN = {
      bar: "Column / bar",
      line: "Line",
      area: "Area",
      pie: "Pie",
      doughnut: "Doughnut",
      scatter: "Scatter",
      bubble: "Bubble",
      radar: "Radar",
      treemap: "Treemap",
      sunburst: "Sunburst",
      histogram: "Histogram",
      waterfall: "Waterfall",
      boxWhisker: "Box plot",
      funnel: "Funnel",
      combo: "Combo",
      map: "Map",
      bar3D: "3D column",
      pie3D: "3D pie",
    }
    function rz({ source: e, config: t = rn.qN }) {
      let n = (0, d.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot)
      if (!n || !t.enabled) return null
      let i = t.controls,
        l = (n) => {
          let r = e.getSnapshot()
          r &&
            (function (e, t, n) {
              var r, i, l
              if (!e.enabled) return !1
              let a = e.controls
              if (!t || t.chartId !== n.chartId) return !1
              let o = !1
              switch (n.type) {
                case "set-chart-data-display":
                  o =
                    !!t.dataDisplay?.options.includes(n.displayBlanksAs) &&
                    (0, nB.lB)(a.displayBlanksAs, n.displayBlanksAs)
                  break
                case "set-chart-family-options":
                  o = (function (e, t, n) {
                    if (!e.enabled || t.chartType !== n.family || !t.familyOptions) return !1
                    let r = e.controls,
                      i = Object.entries(n.options)
                    if (!i.length) return !1
                    switch (n.family) {
                      case "bar":
                      case "line":
                        return i.every(
                          ([e, i]) =>
                            "varyColors" === e &&
                            "boolean" == typeof i &&
                            t.familyOptions?.varyColorsApplies === !0 &&
                            (0, nB.J3)("bar" === n.family ? r.barVaryColors : r.lineVaryColors),
                        )
                      case "pie":
                        return i.every(([e, t]) => "firstSliceAngle" === e && rh(r.pieRotation, t, 0, 360))
                      case "doughnut":
                        return i.every(([e, t]) => "firstSliceAngle" === e && rh(r.doughnutRotation, t, 0, 360))
                      case "scatter":
                        return i.every(
                          ([e, n]) =>
                            ("varyColors" === e &&
                              "boolean" == typeof n &&
                              t.familyOptions?.varyColorsApplies === !0 &&
                              (0, nB.J3)(r.scatterVaryColors)) ||
                            ("style" === e && "string" == typeof n && (0, nB.lB)(r.scatterStyle, n)),
                        )
                      case "radar":
                        return i.every(
                          ([e, n]) =>
                            ("varyColors" === e &&
                              "boolean" == typeof n &&
                              t.familyOptions?.varyColorsApplies === !0 &&
                              (0, nB.J3)(r.radarVaryColors)) ||
                            ("style" === e && "string" == typeof n && (0, nB.lB)(r.radarStyle, n)),
                        )
                      case "treemap":
                        return i.every(
                          ([e, t]) =>
                            "parentLabelLayout" === e && "string" == typeof t && (0, nB.lB)(r.treemapParentLabels, t),
                        )
                      case "funnel":
                        return i.every(
                          ([e, t]) =>
                            "gapWidth" === e &&
                            "number" == typeof t &&
                            rh(
                              r.funnelGap,
                              (function (e) {
                                if (!Number.isFinite(e)) return e
                                let t = String(e),
                                  n = t.indexOf("e")
                                if (-1 === n) return Number(`${t}e2`)
                                let r = t.slice(0, n),
                                  i = Number(t.slice(n + 1)) + 2
                                return Number(`${r}e${i}`)
                              })(t),
                              0,
                              80,
                            ),
                        )
                      case "bubble":
                        return i.every(([e, t]) =>
                          "showNegative" === e
                            ? (null === t || "boolean" == typeof t) && (0, nB.J3)(r.bubbleNegative)
                            : "scale" === e
                              ? null === t
                                ? (0, nB.J3)(r.bubbleScale)
                                : rh(r.bubbleScale, t, 0, 300)
                              : "sizeRepresents" === e && "string" == typeof t && (0, nB.lB)(r.bubbleSizeRepresents, t),
                        )
                      case "boxWhisker":
                        return i.every(([e, t]) => {
                          if ("quartileMethod" === e) return "string" == typeof t && (0, nB.lB)(r.boxQuartiles, t)
                          if ("boolean" != typeof t) return !1
                          switch (e) {
                            case "showMeanLine":
                              return (0, nB.J3)(r.boxMeanLine)
                            case "showMeanMarker":
                              return (0, nB.J3)(r.boxMeanMarker)
                            case "showOutliers":
                              return (0, nB.J3)(r.boxOutliers)
                            case "showNonOutliers":
                              return (0, nB.J3)(r.boxInnerPoints)
                            default:
                              return !1
                          }
                        })
                      case "histogram": {
                        let e = t.familyOptions
                        if ("histogram" !== e.family) return !1
                        let l = n.options
                        if (
                          e.options.aggregated &&
                          i.some(([t]) => "aggregated" !== t && ("binWidth" !== t || !1 === e.binWidthApplies))
                        )
                          return !1
                        let a =
                            null != e.options.binWidth ? "width" : null != e.options.binCount ? "count" : "automatic",
                          o = a
                        if (
                          (null != l.binWidth
                            ? (o = "width")
                            : null != l.binCount
                              ? (o = "count")
                              : (("width" === a && null === l.binWidth) || ("count" === a && null === l.binCount)) &&
                                (o = "automatic"),
                          (void 0 !== l.binWidth || void 0 !== l.binCount) &&
                            !e.options.aggregated &&
                            o !== a &&
                            !(0, nB.lB)(r.histogramBinMode, o))
                        )
                          return !1
                        return i.every(([e, t]) => {
                          switch (e) {
                            case "binWidth":
                              return (
                                (null === t &&
                                  ((0, nB.J3)(r.histogramBinWidth) || (0, nB.lB)(r.histogramBinMode, "automatic"))) ||
                                rh(r.histogramBinWidth, t, 5e-324)
                              )
                            case "binCount":
                              return (
                                null === t ||
                                ("number" == typeof t && Number.isInteger(t) && rh(r.histogramBinCount, t, 1, 1e4))
                              )
                            case "underflow":
                              return null === t ? (0, nB.J3)(r.histogramUnderflow) : rh(r.histogramUnderflow, t)
                            case "overflow":
                              return null === t ? (0, nB.J3)(r.histogramOverflow) : rh(r.histogramOverflow, t)
                            case "intervalClosed":
                              return (1 === t || 2 === t) && (0, nB.lB)(r.histogramBoundary, 1 === t ? "left" : "right")
                            case "aggregated":
                              return "boolean" == typeof t && (0, nB.J3)(r.histogramAggregated)
                            default:
                              return !1
                          }
                        })
                      }
                    }
                  })(e, t, n)
                  break
                case "set-chart-data-labels":
                  o = (function (e, t, n) {
                    var r, i
                    let l = t.dataLabels
                    if (
                      !e.enabled ||
                      !l ||
                      ((r = l.target),
                      (i = n.target),
                      r.scope !== i.scope ||
                        ("chart" !== r.scope &&
                          "chart" !== i.scope &&
                          (r.seriesIndex !== i.seriesIndex ||
                            ("point" === r.scope && "point" === i.scope && r.pointIndex !== i.pointIndex))))
                    )
                      return !1
                    let a = e.controls.dataLabelsScope
                    if (("chart" !== n.target.scope || "enabled" === a.state) && !(0, nB.lB)(a, n.target.scope))
                      return !1
                    let o = (0, nB.J3)(e.controls.dataLabelsReset)
                    if (null === n.update) return o && void 0 !== l.authored
                    let s = l.customProperties
                    if (
                      "point" === n.target.scope &&
                      Object.keys(n.update).some((e) =>
                        [
                          "visible",
                          "deleted",
                          "numberFormatCode",
                          "numberFormatSourceLinked",
                          "showLeaderLines",
                        ].includes(e),
                      )
                    )
                      return !1
                    let d = l.authored
                    return (
                      Object.keys(n.update).length > 0 &&
                      Object.entries(n.update).every(([t, n]) =>
                        (function t(n, r, i) {
                          if (void 0 === n) return !0
                          let l = rl[i]
                          if (null === n)
                            return (
                              o &&
                              (l
                                ? (0, nB.J3)(e.controls[l])
                                : (function t(n, r) {
                                    var i
                                    let l
                                    return (
                                      (l = "stroke" === (i = r.slice(11)) ? "line" : i),
                                      !s.some((e) => e === l || e.startsWith(`${l}.`)) &&
                                        !!rL(n) &&
                                        Object.entries(n).every(([n, i]) => {
                                          if (void 0 === i) return !0
                                          let l = `${r}.${n}`,
                                            a = rl[l]
                                          return a ? (0, nB.J3)(e.controls[a]) : t(i, l)
                                        })
                                    )
                                  })(r, i))
                            )
                          if (!l)
                            return (
                              rL(n) && Object.entries(n).every(([e, n]) => t(n, rL(r) ? r[e] : void 0, `${i}.${e}`))
                            )
                          if (!(0, nB.J3)(e.controls[l])) return !1
                          switch (ri.h[l].kind) {
                            case "number":
                              return "number" == typeof n && (0, nB.XT)(ro(e.controls, i), n)
                            case "color":
                              return "string" == typeof n && (0, nB.HO)(rs(e.controls, i), n, !0, rP)
                            case "choice":
                              return "string" == typeof n && (0, nB.lB)(rd(e.controls, i), n)
                            case "plain":
                              return "boolean" == typeof n || "string" == typeof n
                          }
                        })(
                          n,
                          (function (e) {
                            if (rL(d)) return "line" === e || "stroke" === e ? (d.line ?? d.stroke) : d[e]
                          })(t),
                          `dataLabels.${"line" === t ? "stroke" : t}`,
                        ),
                      )
                    )
                  })(e, t, n)
                  break
                case "add-chart-trendline":
                case "update-chart-trendline":
                case "delete-chart-trendline":
                  o = (function (e, t, n) {
                    var r, i
                    let l = t.series.find(({ index: e }) => e === n.seriesIndex)
                    if (!l) return !1
                    if ("add-chart-trendline" === n.type)
                      return (
                        !!l.trendlineTypes?.includes(n.trendlineType) &&
                        (function (e, t, n = {}) {
                          return (
                            (0, nB.J3)(e.seriesTrendlineAdd) &&
                            (0, nB.lB)(e.seriesTrendlineType, t) &&
                            (void 0 === n.polynomialOrder || "polynomial" === t) &&
                            (void 0 === n.movingAveragePeriod || "movingAverage" === t) &&
                            ("polynomial" !== t ||
                              (Number.isInteger(n.polynomialOrder ?? 2) &&
                                (0, nB.XT)(e.seriesTrendlinePolynomialOrder, n.polynomialOrder ?? 2, {
                                  min: 2,
                                  max: 6,
                                }))) &&
                            ("movingAverage" !== t ||
                              (Number.isInteger(n.movingAveragePeriod ?? 2) &&
                                (0, nB.XT)(e.seriesTrendlineMovingAveragePeriod, n.movingAveragePeriod ?? 2, {
                                  min: 2,
                                  max: 255,
                                })))
                          )
                        })(e, n.trendlineType, n)
                      )
                    let a = l.trendlines?.find(
                      ({ target: e }) => e.index === n.target.index && e.collectionKey === n.target.collectionKey,
                    )
                    if (!a) return !1
                    if ("delete-chart-trendline" === n.type) return (0, nB.J3)(e.seriesTrendlineRemove)
                    if (!a.editable) return !1
                    let o = n.patch
                    if (
                      0 === Object.keys(o).length ||
                      (void 0 !== o.type &&
                        (!l.trendlineTypes?.includes(o.type) ||
                          ((r = o.type),
                          (i = {
                            polynomialOrder: o.polynomialOrder ?? a.polynomialOrder,
                            movingAveragePeriod: o.movingAveragePeriod ?? a.movingAveragePeriod,
                          }),
                          !(
                            (0, nB.lB)(e.seriesTrendlineType, r) &&
                            ("polynomial" !== r ||
                              i?.polynomialOrder !== void 0 ||
                              (0, nB.XT)(e.seriesTrendlinePolynomialOrder, 2, { min: 2, max: 6 })) &&
                            ("movingAverage" !== r ||
                              i?.movingAveragePeriod !== void 0 ||
                              (0, nB.XT)(e.seriesTrendlineMovingAveragePeriod, 2, { min: 2, max: 255 }))
                          ))))
                    )
                      return !1
                    let s = o.type ?? a.type
                    if (
                      (void 0 !== o.name && !(0, nB.J3)(e.seriesTrendlineName)) ||
                      (void 0 !== o.polynomialOrder &&
                        ("polynomial" !== s ||
                          !(0, nB.J3)(e.seriesTrendlinePolynomialOrder) ||
                          !Number.isInteger(o.polynomialOrder ?? 2) ||
                          !(0, nB.XT)(e.seriesTrendlinePolynomialOrder, o.polynomialOrder ?? 2, { min: 2, max: 6 }))) ||
                      (void 0 !== o.movingAveragePeriod &&
                        ("movingAverage" !== s ||
                          !(0, nB.J3)(e.seriesTrendlineMovingAveragePeriod) ||
                          !Number.isInteger(o.movingAveragePeriod ?? 2) ||
                          !(0, nB.XT)(e.seriesTrendlineMovingAveragePeriod, o.movingAveragePeriod ?? 2, {
                            min: 2,
                            max: 255,
                          })))
                    )
                      return !1
                    for (let t of ["forecastForward", "forecastBackward"]) {
                      let n = o[t],
                        r =
                          "forecastForward" === t ? e.seriesTrendlineForecastForward : e.seriesTrendlineForecastBackward
                      if (
                        void 0 !== n &&
                        ("movingAverage" === s || !(0, nB.J3)(r) || !(0, nB.XT)(r, n ?? 0, { min: 0 }))
                      )
                        return !1
                    }
                    if (
                      (void 0 !== o.intercept &&
                        (!["linear", "polynomial", "exponential"].includes(s ?? "") ||
                          !(0, nB.J3)(e.seriesTrendlineIntercept) ||
                          (null !== o.intercept &&
                            (!(0, nB.XT)(e.seriesTrendlineIntercept, o.intercept) ||
                              ("exponential" === s && o.intercept <= 0))))) ||
                      (void 0 !== o.displayEquation &&
                        ("movingAverage" === s || !(0, nB.J3)(e.seriesTrendlineDisplayEquation))) ||
                      (void 0 !== o.displayRSquared &&
                        ("movingAverage" === s || !(0, nB.J3)(e.seriesTrendlineDisplayRSquared)))
                    )
                      return !1
                    let d = o.line
                    return (
                      (void 0 === o.label ||
                        !!(function (e, t, n) {
                          if (!n || !Object.keys(n).length) return !1
                          let r = t.label
                          if (
                            (void 0 !== n.text && !(0, nB.J3)(e.seriesTrendlineLabelText)) ||
                            (!(t.displayEquation || t.displayRSquared || (n.text ?? r?.text)) &&
                              Object.keys(n).some((e) => "text" !== e)) ||
                            (void 0 !== n.numberFormatSourceLinked &&
                              !(0, nB.J3)(e.seriesTrendlineLabelSourceLinked)) ||
                            (void 0 !== n.numberFormatCode &&
                              ((n.numberFormatSourceLinked ?? r?.numberFormatSourceLinked) ||
                                !(0, nB.J3)(e.seriesTrendlineLabelNumberFormat)))
                          )
                            return !1
                          if (void 0 !== n.manualLayout) {
                            let t = n.manualLayout
                            if (null === t) {
                              if (!(0, nB.J3)(e.seriesTrendlineLabelAutomaticPosition)) return !1
                            } else {
                              if (!Object.keys(t).length) return !1
                              let n = {
                                x: e.seriesTrendlineLabelX,
                                y: e.seriesTrendlineLabelY,
                                w: e.seriesTrendlineLabelWidth,
                                h: e.seriesTrendlineLabelHeight,
                              }
                              for (let e of ["x", "y", "w", "h"]) {
                                let r = t[e]
                                if (
                                  void 0 !== r &&
                                  (null === r || !(0, nB.XT)(n[e], 100 * r, "w" === e || "h" === e ? { min: 0 } : {}))
                                )
                                  return !1
                              }
                            }
                          }
                          if (void 0 !== n.fill) {
                            let t = rg.xY.safeParse(n.fill)
                            if (!t.success || !rj(rM(e, "background"), r?.fillValue, t.data)) return !1
                          }
                          let i = n.textStyle
                          if (void 0 !== i) {
                            if (!i || !Object.keys(i).length) return !1
                            for (let t of ["name", "typeface", "bold", "italic", "underline"]) {
                              let n = {
                                name: e.seriesTrendlineLabelFont,
                                typeface: e.seriesTrendlineLabelFont,
                                bold: e.seriesTrendlineLabelBold,
                                italic: e.seriesTrendlineLabelItalic,
                                underline: e.seriesTrendlineLabelUnderline,
                              }[t]
                              if (void 0 !== i[t] && (null === i[t] || !(0, nB.J3)(n))) return !1
                            }
                            if (
                              void 0 !== i.family ||
                              void 0 !== i.fontSizePt ||
                              void 0 !== i.color ||
                              (void 0 !== i.fontSize &&
                                ("number" != typeof i.fontSize ||
                                  !(0, nB.XT)(e.seriesTrendlineLabelSize, i.fontSize, { min: 1 }))) ||
                              (void 0 !== i.rotation &&
                                (null === i.rotation || !(0, nB.XT)(e.seriesTrendlineLabelRotation, i.rotation))) ||
                              (void 0 !== i.alignment &&
                                ("string" != typeof i.alignment ||
                                  !(0, nB.lB)(e.seriesTrendlineLabelAlignment, i.alignment)))
                            )
                              return !1
                            if (void 0 !== i.fill) {
                              let t = rg.xY.safeParse(i.fill)
                              if (!t.success || !rj(rM(e, "text"), r?.textFillValue, t.data)) return !1
                            }
                          }
                          let l = n.line
                          return (
                            (void 0 === l ||
                              (!!l &&
                                !!Object.keys(l).length &&
                                (void 0 === l.fill ||
                                  ("string" == typeof l.fill &&
                                    !!(0, nB.HO)(e.seriesTrendlineLabelLineColor, l.fill, !0, rT))) &&
                                (void 0 === l.width ||
                                  (null !== l.width &&
                                    !!(0, nB.XT)(e.seriesTrendlineLabelLineWidth, l.width, { min: 0 }))) &&
                                (void 0 === l.style ||
                                  (null !== l.style && !!(0, nB.lB)(e.seriesTrendlineLabelLineStyle, l.style))) &&
                                (void 0 === l.compound ||
                                  (null !== l.compound &&
                                    !!(0, nB.lB)(e.seriesTrendlineLabelLineCompound, l.compound))))) &&
                            !0
                          )
                        })(e, a, o.label)) &&
                      (void 0 === d ||
                        (null !== d &&
                          0 !== Object.keys(d).length &&
                          (void 0 === d.compound ||
                            (null !== d.compound && !!(0, nB.lB)(e.seriesTrendlineLineCompound, d.compound))) &&
                          (void 0 === d.fill ||
                            ("string" == typeof d.fill && (0, nB.HO)(e.seriesTrendlineLineColor, d.fill, !0, rA))) &&
                          (void 0 === d.width ||
                            (null !== d.width && (0, nB.XT)(e.seriesTrendlineLineWidth, d.width, { min: 0 }))) &&
                          (void 0 === d.style ||
                            (null !== d.style && (0, nB.lB)(e.seriesTrendlineLineStyle, d.style)))))
                    )
                  })(a, t, n)
                  break
                case "set-chart-error-bars":
                  o = (function (e, t, n) {
                    if (!t.capabilities.errorBars?.includes(n.direction)) return !1
                    let r = t.series.find(({ index: e }) => e === n.seriesIndex)?.errorBars?.[n.direction]
                    if (!r?.editable) return !1
                    let i = n.patch
                    if (
                      0 === Object.keys(i).length ||
                      (void 0 !== i.type && !(0, nB.lB)(e.seriesErrorBarsType, i.type))
                    )
                      return !1
                    let l = i.type ?? r.type
                    if (
                      (void 0 !== i.value &&
                        (null === i.value ||
                          !["percentage", "standardDeviation", "fixedValue"].includes(l ?? "") ||
                          !(0, nB.XT)(e.seriesErrorBarsValue, i.value, { min: 0 }))) ||
                      (void 0 !== i.display &&
                        ("none" === l || null === i.display || !(0, nB.lB)(e.seriesErrorBarsDisplay, i.display))) ||
                      (void 0 !== i.endStyle &&
                        ("none" === l || null === i.endStyle || !(0, nB.lB)(e.seriesErrorBarsEndStyle, i.endStyle)))
                    )
                      return !1
                    let a = i.line
                    return (
                      void 0 === a ||
                      (null !== a &&
                        "none" !== l &&
                        (void 0 === a.compound ||
                          (null !== a.compound && !!(0, nB.lB)(e.seriesErrorBarsLineCompound, a.compound))) &&
                        (void 0 === a.fill ||
                          ("string" == typeof a.fill && (0, nB.HO)(e.seriesErrorBarsLineColor, a.fill, !0, rf))) &&
                        (void 0 === a.width ||
                          (null !== a.width && (0, nB.XT)(e.seriesErrorBarsLineWidth, a.width, { min: 0 }))) &&
                        (void 0 === a.style || (null !== a.style && (0, nB.lB)(e.seriesErrorBarsLineStyle, a.style))))
                    )
                  })(a, t, n)
                  break
                case "set-chart-format":
                  o = rp(e, t, n.config, void 0)
                  break
                case "set-chart-axis-format": {
                  let r = t.axisTargets?.find((e) => e.axisId === n.axisId)
                  o = !!r && rp(e, t, { [`${r.axis}Axis`]: n.config }, n.axisId)
                  break
                }
                case "set-chart-type":
                  o = t.compatibleTypes.includes(n.chartType) && (0, nB.lB)(a.type, n.chartType)
                  break
                case "set-chart-title":
                  o = (0, nB.J3)(a.title)
                  break
                case "set-chart-legend":
                  o =
                    (void 0 === n.visible || (0, nB.J3)(a.legendVisible)) &&
                    (void 0 === n.position || (t.legend.visible && (0, nB.lB)(a.legendPosition, n.position)))
                  break
                case "set-chart-axis":
                  o = ("both" === n.axis ? ["x", "y"] : [n.axis]).every((e) => {
                    let r =
                      void 0 === n.axisId ? t.axes?.[e] : t.axisTargets?.find((e) => e.axisId === n.axisId)?.settings
                    return (
                      !!r &&
                      (void 0 === n.visible || (0, nB.J3)(a[`${e}AxisVisible`])) &&
                      (void 0 === n.title || (r.visible && (0, nB.J3)(a[`${e}AxisTitle`]))) &&
                      (void 0 === n.gridlines || (r.visible && (0, nB.J3)(a[`${e}Gridlines`])))
                    )
                  })
                  break
                case "set-chart-fill":
                  ;((r = n.area),
                    (i = n.fill),
                    (o =
                      e.enabled &&
                      rj(
                        ((l = e.controls),
                        "plot" === r
                          ? {
                              type: l.plotBackgroundType,
                              color: l.plotBackground,
                              gradientAngle: l.plotBackgroundGradientAngle,
                              gradientStops: l.plotBackgroundGradientStops,
                              gradientStopColor: l.plotBackgroundGradientStopColor,
                              gradientStopPosition: l.plotBackgroundGradientStopPosition,
                              patternType: l.plotBackgroundPatternType,
                              patternColor: l.plotBackgroundPatternColor,
                            }
                          : {
                              type: l.backgroundType,
                              color: l.background,
                              gradientAngle: l.backgroundGradientAngle,
                              gradientStops: l.backgroundGradientStops,
                              gradientStopColor: l.backgroundGradientStopColor,
                              gradientStopPosition: l.backgroundGradientStopPosition,
                              patternType: l.backgroundPatternType,
                              patternColor: l.backgroundPatternColor,
                            }),
                        "chart" === r ? t.fillValue : t.plotFillValue,
                        i,
                        "chart" === r ? t.fill : t.plotFill,
                      )))
                  break
                case "set-chart-series":
                  let s
                  o =
                    (function (e, t, n) {
                      let r = n.marker
                      if (!r) return !0
                      let i = t.series.find((e) => e.index === n.seriesIndex)
                      if (!t.capabilities.markers || !i) return !1
                      let l = void 0 === r.symbol ? i.markers : "none" !== r.symbol
                      return (
                        (void 0 === r.symbol || (0, nB.lB)(e.seriesMarkerSymbol, r.symbol)) &&
                        (void 0 === r.size ||
                          (l &&
                            Number.isInteger(r.size) &&
                            (0, nB.XT)(e.seriesMarkerSize, r.size, { min: 2, max: 72 }))) &&
                        (void 0 === r.fill || (l && (0, nB.HO)(e.seriesMarkerColor, r.fill, !0, rm)))
                      )
                    })(a, t, n) &&
                    (!(s = n.stroke) ||
                      (!!t.capabilities.line &&
                        0 !== Object.keys(s).length &&
                        (void 0 === s.fill || (0, nB.HO)(a.seriesLineColor, s.fill, !0, rr)) &&
                        (void 0 === s.width || (0, nB.XT)(a.seriesLineWidth, s.width, { min: 0 })) &&
                        (void 0 === s.style || (0, nB.lB)(a.seriesLineStyle, s.style)) &&
                        (void 0 === s.compound || (0, nB.lB)(a.seriesLineCompound, s.compound)))) &&
                    t.series.some((e) => e.index === n.seriesIndex) &&
                    (void 0 === n.name || (0, nB.J3)(a.seriesName)) &&
                    (void 0 === n.color ||
                      (t.capabilities.seriesColor && (0, nB.HO)(a.seriesColor, n.color, !1, rF))) &&
                    (void 0 === n.smooth || (t.capabilities.smoothing && (0, nB.J3)(a.seriesSmoothing))) &&
                    (void 0 === n.markers || (t.capabilities.markers && (0, nB.J3)(a.seriesMarkers)))
                  break
                case "set-chart-slice-color":
                  o =
                    t.slices.some((e) => e.seriesIndex === n.seriesIndex && e.pointIndex === n.pointIndex) &&
                    (0, nB.HO)(a.sliceColor, n.color, !1, rF)
                  break
                case "set-chart-layout":
                  o =
                    (void 0 === n.gapWidth ||
                      (void 0 !== t.barSpacing &&
                        Number.isInteger(n.gapWidth) &&
                        (0, nB.XT)(a.barGapWidth, n.gapWidth, { min: 0, max: 500 }))) &&
                    (void 0 === n.overlap ||
                      (void 0 !== t.barSpacing &&
                        (n.grouping ?? t.grouping) === "standard" &&
                        Number.isInteger(n.overlap) &&
                        (0, nB.XT)(a.barOverlap, n.overlap, { min: -100, max: 100 }))) &&
                    (void 0 === n.direction || (null !== t.direction && (0, nB.lB)(a.direction, n.direction))) &&
                    (void 0 === n.grouping || (null !== t.grouping && (0, nB.lB)(a.grouping, n.grouping))) &&
                    (void 0 === n.holeSize ||
                      (null !== t.holeSize && (0, nB.XT)(a.holeSize, n.holeSize, { min: 10, max: 90 })))
              }
              return o
            })(t, r, n) &&
            e.edit(n)
        },
        { chartId: a } = n,
        o =
          "hidden" !== i.type.state ||
          "hidden" !== i.title.state ||
          (null !== n.direction && "hidden" !== i.direction.state) ||
          (null !== n.grouping && "hidden" !== i.grouping.state) ||
          (null !== n.holeSize && "hidden" !== i.holeSize.state),
        s = "hidden" !== i.legendVisible.state || (n.legend.visible && "hidden" !== i.legendPosition.state),
        c = ["x", "y"].some(
          (e) =>
            "hidden" !== i[`${e}AxisVisible`].state ||
            "hidden" !== i[`${e}AxisTitle`].state ||
            "hidden" !== i[`${e}Gridlines`].state,
        ),
        u = "hidden" !== i.background.state || "hidden" !== i.plotBackground.state,
        p =
          "hidden" !== i.seriesName.state ||
          (n.capabilities.seriesColor && "hidden" !== i.seriesColor.state) ||
          (n.capabilities.line && "hidden" !== i.seriesLineWidth.state) ||
          (n.capabilities.smoothing && "hidden" !== i.seriesSmoothing.state) ||
          (n.capabilities.markers && "hidden" !== i.seriesMarkers.state)
      return (0, r.jsxs)(
        "div",
        {
          "data-testid": "popcorn-chart-properties",
          className: "flex min-w-0 flex-col gap-5",
          children: [
            o
              ? (0, r.jsxs)(rR.E, {
                  title: "Chart",
                  children: [
                    n.compatibleTypes.length > 1
                      ? (0, r.jsx)(n0.X, {
                          label: "Type",
                          config: i.type,
                          children: (0, r.jsx)("select", {
                            "aria-label": "Chart type",
                            disabled: "enabled" !== i.type.state,
                            title: i.type.reason,
                            value: n.chartType,
                            className: rD._6,
                            onChange: (e) =>
                              l({ type: "set-chart-type", chartId: a, chartType: e.currentTarget.value }),
                            children: rV(i.type, n.compatibleTypes, n.chartType).map((e) =>
                              (0, r.jsx)(
                                "option",
                                { value: e, disabled: !(0, nB.lB)(i.type, e), children: rN[e] ?? e },
                                e,
                              ),
                            ),
                          }),
                        })
                      : "hidden" !== i.type.state
                        ? (0, r.jsx)("p", {
                            className: "text-xs text-token-text-secondary",
                            children: rN[n.chartType] ?? n.chartType,
                          })
                        : null,
                    (0, r.jsx)(rO, {
                      label: "Title",
                      ariaLabel: "Chart title",
                      config: i.title,
                      value: n.title,
                      onCommit: (e) => l({ type: "set-chart-title", chartId: a, title: e }),
                    }),
                    null !== n.direction
                      ? (0, r.jsx)(n2.s, {
                          ariaLabel: "Bar direction",
                          config: i.direction,
                          value: n.direction,
                          options: [
                            { value: "column", label: "Column" },
                            { value: "bar", label: "Bar" },
                          ],
                          onChange: (e) => l({ type: "set-chart-layout", chartId: a, direction: e }),
                        })
                      : null,
                    null !== n.grouping
                      ? (0, r.jsx)(n0.X, {
                          label: "Grouping",
                          config: i.grouping,
                          children: (0, r.jsx)("select", {
                            "aria-label": "Chart grouping",
                            disabled: "enabled" !== i.grouping.state,
                            title: i.grouping.reason,
                            className: rD._6,
                            value: n.grouping,
                            onChange: (e) =>
                              l({ type: "set-chart-layout", chartId: a, grouping: e.currentTarget.value }),
                            children: rV(i.grouping, ["standard", "stacked", "percentStacked"], n.grouping).map((e) =>
                              (0, r.jsx)(
                                "option",
                                {
                                  value: e,
                                  disabled: !(0, nB.lB)(i.grouping, e),
                                  children:
                                    "standard" === e ? "Standard" : "stacked" === e ? "Stacked" : "100% stacked",
                                },
                                e,
                              ),
                            ),
                          }),
                        })
                      : null,
                    null !== n.holeSize
                      ? (0, r.jsx)(n1.S, {
                          label: "Hole size",
                          config: i.holeSize,
                          unit: "%",
                          value: n.holeSize,
                          min: 10,
                          max: 90,
                          onChange: (e) => l({ type: "set-chart-layout", chartId: a, holeSize: e }),
                        })
                      : null,
                  ],
                })
              : null,
            s
              ? (0, r.jsxs)(rR.E, {
                  title: "Legend",
                  children: [
                    (0, r.jsx)(rB, {
                      label: "Show chart legend",
                      config: i.legendVisible,
                      pressed: n.legend.visible,
                      onClick: () => l({ type: "set-chart-legend", chartId: a, visible: !n.legend.visible }),
                    }),
                    n.legend.visible
                      ? (0, r.jsx)(n0.X, {
                          label: "Position",
                          config: i.legendPosition,
                          children: (0, r.jsx)("select", {
                            "aria-label": "Legend position",
                            disabled: "enabled" !== i.legendPosition.state,
                            title: i.legendPosition.reason,
                            value: n.legend.position,
                            className: rD._6,
                            onChange: (e) =>
                              l({ type: "set-chart-legend", chartId: a, position: e.currentTarget.value }),
                            children: rV(
                              i.legendPosition,
                              ["top", "bottom", "left", "right", "topRight"],
                              n.legend.position,
                            ).map((e) =>
                              (0, r.jsx)(
                                "option",
                                {
                                  value: e,
                                  disabled: !(0, nB.lB)(i.legendPosition, e),
                                  children: "topRight" === e ? "Top right" : e[0].toUpperCase() + e.slice(1),
                                },
                                e,
                              ),
                            ),
                          }),
                        })
                      : null,
                  ],
                })
              : null,
            n.axes && c
              ? (0, r.jsx)(rR.E, {
                  title: "Axes",
                  defaultOpen: !1,
                  children: ["x", "y"].map((e) => {
                    let t = n.axes[e]
                    return (0, r.jsxs)(
                      "div",
                      {
                        className: "flex flex-col gap-3",
                        children: [
                          (0, r.jsx)(rB, {
                            label: `Show ${e.toUpperCase()} axis`,
                            config: i[`${e}AxisVisible`],
                            pressed: t.visible,
                            onClick: () => l({ type: "set-chart-axis", chartId: a, axis: e, visible: !t.visible }),
                          }),
                          (0, r.jsx)(rO, {
                            label: "Title",
                            ariaLabel: `${e.toUpperCase()} axis title`,
                            config: i[`${e}AxisTitle`],
                            value: t.title,
                            onCommit: (t) => l({ type: "set-chart-axis", chartId: a, axis: e, title: t }),
                          }),
                          (0, r.jsx)(rB, {
                            label: `${e.toUpperCase()} gridlines`,
                            config: i[`${e}Gridlines`],
                            pressed: t.gridlines,
                            onClick: () => l({ type: "set-chart-axis", chartId: a, axis: e, gridlines: !t.gridlines }),
                          }),
                        ],
                      },
                      e,
                    )
                  }),
                })
              : null,
            u
              ? (0, r.jsxs)(rR.E, {
                  title: "Appearance",
                  children: [
                    (0, r.jsx)(n0.X, {
                      label: "Background",
                      config: i.background,
                      children: (0, r.jsx)(n_.IM, {
                        ariaLabel: "Chart background",
                        config: i.background,
                        value: n.fill ?? "#FFFFFF",
                        mixed: null === n.fill,
                        mixedLabel: "Default",
                        allowNone: !0,
                        onChange: (e) => l({ type: "set-chart-fill", chartId: a, area: "chart", fill: e }),
                      }),
                    }),
                    (0, r.jsx)(n0.X, {
                      label: "Plot area",
                      config: i.plotBackground,
                      children: (0, r.jsx)(n_.IM, {
                        ariaLabel: "Chart plot background",
                        config: i.plotBackground,
                        value: n.plotFill ?? "#FFFFFF",
                        mixed: null === n.plotFill,
                        mixedLabel: "Default",
                        allowNone: !0,
                        onChange: (e) => l({ type: "set-chart-fill", chartId: a, area: "plot", fill: e }),
                      }),
                    }),
                  ],
                })
              : null,
            (p ? n.series : []).map((e) =>
              (0, r.jsxs)(
                rR.E,
                {
                  title: e.name || `Series ${e.index + 1}`,
                  defaultOpen: 0 === e.index,
                  children: [
                    (0, r.jsx)(rO, {
                      label: "Name",
                      ariaLabel: `Series ${e.index + 1} name`,
                      config: i.seriesName,
                      value: e.name,
                      onCommit: (t) => l({ type: "set-chart-series", chartId: a, seriesIndex: e.index, name: t }),
                    }),
                    n.capabilities.seriesColor
                      ? (0, r.jsx)(n0.X, {
                          label: "Color",
                          config: i.seriesColor,
                          children: (0, r.jsx)(n_.IM, {
                            ariaLabel: `Series ${e.index + 1} color`,
                            config: i.seriesColor,
                            value: e.color ?? "#7D9BC4",
                            mixed: null === e.color,
                            mixedLabel: "Default",
                            onChange: (t) =>
                              l({ type: "set-chart-series", chartId: a, seriesIndex: e.index, color: t }),
                          }),
                        })
                      : null,
                    n.capabilities.line
                      ? (0, r.jsx)(n1.S, {
                          label: "Line width",
                          config: i.seriesLineWidth,
                          unit: "px",
                          value: e.line.width,
                          min: 0,
                          onChange: (t) =>
                            l({ type: "set-chart-series", chartId: a, seriesIndex: e.index, stroke: { width: t } }),
                        })
                      : null,
                    n.capabilities.smoothing
                      ? (0, r.jsx)(rB, {
                          label: `Smooth series ${e.index + 1}`,
                          config: i.seriesSmoothing,
                          pressed: e.smooth,
                          onClick: () =>
                            l({ type: "set-chart-series", chartId: a, seriesIndex: e.index, smooth: !e.smooth }),
                        })
                      : null,
                    n.capabilities.markers
                      ? (0, r.jsx)(rB, {
                          label: `Series ${e.index + 1} markers`,
                          config: i.seriesMarkers,
                          pressed: e.markers,
                          onClick: () =>
                            l({ type: "set-chart-series", chartId: a, seriesIndex: e.index, markers: !e.markers }),
                        })
                      : null,
                  ],
                },
                e.index,
              ),
            ),
            n.slices.length > 0 && "hidden" !== i.sliceColor.state
              ? (0, r.jsx)(rR.E, {
                  title: "Slices",
                  children: n.slices.map((e) =>
                    (0, r.jsx)(
                      n0.X,
                      {
                        label: e.label,
                        config: i.sliceColor,
                        children: (0, r.jsx)(n_.IM, {
                          ariaLabel: `${e.label} slice color`,
                          config: i.sliceColor,
                          value: e.color ?? "#7D9BC4",
                          mixed: null === e.color,
                          mixedLabel: "Default",
                          onChange: (t) =>
                            l({
                              type: "set-chart-slice-color",
                              chartId: a,
                              seriesIndex: e.seriesIndex,
                              pointIndex: e.pointIndex,
                              color: t,
                            }),
                        }),
                      },
                      `${e.seriesIndex}:${e.pointIndex}`,
                    ),
                  ),
                })
              : null,
          ],
        },
        a,
      )
    }
    function rB({ label: e, pressed: t, onClick: n, config: i }) {
      return (0, r.jsx)(nG, { label: e, config: i, pressed: t, onClick: n, children: e })
    }
    function rO({ label: e, ariaLabel: t, value: n, onCommit: i, config: l }) {
      let [a, o] = (0, d.useState)(n),
        s = (0, d.useRef)(!1),
        c = (0, nH.p)(l, i),
        u = (0, nB.ro)(l)
      return (
        (0, d.useEffect)(() => o(n), [n, u]),
        (0, r.jsx)(n0.X, {
          label: e,
          config: l,
          children: (0, r.jsx)("input", {
            "aria-label": t,
            disabled: "enabled" !== l.state,
            title: l.reason,
            value: a,
            className: rD._6,
            onChange: (e) => o(e.currentTarget.value),
            onBlur: () => {
              ;(s.current || a === n || c(a), (s.current = !1))
            },
            onKeyDown: (e) => {
              "Escape" === e.key
                ? (e.preventDefault(), e.stopPropagation(), (s.current = !0), o(n), e.currentTarget.blur())
                : "Enter" === e.key && (e.preventDefault(), e.currentTarget.blur())
            },
          }),
        })
      )
    }
    function rV(e, t, n) {
      return [...new Set([...t, n])].filter((t) => t === n || !e.options || e.options.values.includes(t))
    }
    var rH = n("tybk"),
      rK = n("IV5Q"),
      r$ = n("FbPK"),
      rq = n("ReOI"),
      rW = n("Di4S"),
      rU = n("f3iK")
    let rG = nV.M.map((e) => e.value)
    function r_({ source: e, config: t = rn.y2 }) {
      let n,
        i =
          ((n = (0, d.useMemo)(() => {
            let t = null
            return () => {
              let n = e.getSnapshot()
              return (
                !(function (e, t) {
                  if (e === t) return !0
                  if (!e || !t || e.tableId !== t.tableId) return !1
                  let n = e.selection?.range,
                    r = t.selection?.range
                  return (
                    !(
                      n?.row !== r?.row ||
                      n?.column !== r?.column ||
                      n?.rowCount !== r?.rowCount ||
                      n?.columnCount !== r?.columnCount ||
                      e.mixed.length !== t.mixed.length ||
                      e.mixed.some((e) => !t.mixed.includes(e))
                    ) &&
                    [
                      "fill",
                      "color",
                      "fontSize",
                      "bold",
                      "italic",
                      "alignment",
                      "verticalAlignment",
                      "borderColor",
                      "borderWidth",
                      "borderStyle",
                      "borderEdges",
                    ].every((n) => e.style[n] === t.style[n]) &&
                    ["top", "right", "bottom", "left"].every((n) => e.style.margins?.[n] === t.style.margins?.[n])
                  )
                })(t, n) && (t = n),
                t
              )
            }
          }, [e])),
          (0, d.useSyncExternalStore)(
            (0, d.useCallback)((t) => e.subscribe(t), [e]),
            n,
            n,
          )),
        [l, a] = (0, d.useState)("all"),
        o = JSON.stringify(t)
      ;(0, d.useEffect)(() => a("all"), [i?.tableId, o])
      let s = t.controls,
        c = (...e) => e.some((e) => "hidden" !== s[e].state),
        u = (0, nH.p)(
          { state: t.enabled ? "enabled" : "hidden" },
          (t) => {
            if (!i?.selection) return
            let { tableId: n, selection: r } = i
            if (
              (void 0 !== t.borderColor || void 0 !== t.borderWidth || void 0 !== t.borderStyle) &&
              void 0 === t.borderEdges
            ) {
              let e = s.borderEdges.options?.values,
                n = "none" === l ? "all" : l,
                r = !e || e.some((e) => e === n) ? n : e.find((e) => "none" !== e)
              if (!r) return
              ;((t = { ...t, borderEdges: r }), r !== l && a(r))
            }
            e.edit({ type: "set-cell-style", tableId: n, range: r.range, style: t })
          },
          (e, t) =>
            !!i?.selection &&
            (void 0 === t.fill || (0, nB.HO)(s.fill, t.fill, !0, rG)) &&
            (void 0 === t.color || (0, nB.HO)(s.color, t.color, !1, rG)) &&
            (void 0 === t.fontSize || (0, nB.XT)(s.fontSize, t.fontSize, { min: 1 })) &&
            (void 0 === t.bold || (0, nB.J3)(s.bold)) &&
            (void 0 === t.italic || (0, nB.J3)(s.italic)) &&
            (void 0 === t.alignment || (0, nB.lB)(s.alignment, t.alignment)) &&
            (void 0 === t.verticalAlignment || (0, nB.lB)(s.verticalAlignment, t.verticalAlignment)) &&
            (void 0 === t.borderEdges || (0, nB.lB)(s.borderEdges, t.borderEdges)) &&
            (void 0 === t.borderColor || (0, nB.HO)(s.borderColor, t.borderColor, !1, rG)) &&
            (void 0 === t.borderWidth || (0, nB.XT)(s.borderWidth, t.borderWidth, { min: 0 })) &&
            (void 0 === t.borderStyle || (0, nB.lB)(s.borderStyle, t.borderStyle)) &&
            (void 0 === t.margins ||
              Object.keys(rJ).every((e) => {
                let n = t.margins?.[e]
                return void 0 === n || (0, nB.XT)(s[rJ[e]], n, { min: 0 })
              })),
        )
      if (!i?.selection || !t.enabled) return null
      let { style: p, mixed: h, selection: m, tableId: f } = i,
        g = `${f}:${m.range.row}:${m.range.column}:${m.range.rowCount}:${m.range.columnCount}`,
        x = (e) => (h.includes(e) ? void 0 : p[e]),
        b = "none" === x("fill") || "transparent" === x("fill")
      return (0, r.jsxs)(
        "div",
        {
          "data-testid": "popcorn-table-cell-properties",
          className: "flex flex-col gap-5",
          children: [
            c("fill", "color", "fontSize", "bold", "italic", "alignment", "verticalAlignment")
              ? (0, r.jsxs)(rR.E, {
                  title: "Table cells",
                  children: [
                    (0, r.jsxs)("p", {
                      className: "text-xs text-token-text-secondary",
                      role: "status",
                      children: [
                        m.range.rowCount,
                        " ",
                        1 === m.range.rowCount ? "row" : "rows",
                        " \xd7 ",
                        m.range.columnCount,
                        " ",
                        1 === m.range.columnCount ? "column" : "columns",
                        " selected",
                      ],
                    }),
                    (0, r.jsx)(n0.X, {
                      label: "Fill",
                      config: s.fill,
                      children: (0, r.jsx)(
                        n_.IM,
                        {
                          value: b ? "none" : (x("fill") ?? "#FFFFFF"),
                          ariaLabel: "Cell fill color",
                          config: s.fill,
                          allowNone: !0,
                          mixed: h.includes("fill"),
                          onChange: (e) => u({ fill: e }),
                        },
                        `${g}:fill:${b}:${h.includes("fill")}`,
                      ),
                    }),
                    (0, r.jsx)(n0.X, {
                      label: "Text color",
                      config: s.color,
                      children: (0, r.jsx)(
                        n_.IM,
                        {
                          value: x("color") ?? "#000000",
                          ariaLabel: "Cell text color",
                          config: s.color,
                          paintRole: "text",
                          backgroundColor: x("fill"),
                          mixed: h.includes("color"),
                          onChange: (e) => u({ color: e }),
                        },
                        `${g}:text-color:${h.includes("color")}`,
                      ),
                    }),
                    (0, r.jsx)(
                      n1.S,
                      {
                        label: "Font size",
                        config: s.fontSize,
                        value: x("fontSize"),
                        placeholder: h.includes("fontSize") ? "Mixed" : "Default",
                        min: 1,
                        unit: "px",
                        onChange: (e) => u({ fontSize: e }),
                      },
                      `${g}:font-size`,
                    ),
                    c("bold", "italic")
                      ? (0, r.jsx)(n0.X, {
                          label: "Style",
                          children: (0, r.jsxs)("div", {
                            className: "grid grid-cols-2 gap-1",
                            children: [
                              (0, r.jsx)(nG, {
                                label: "Bold cell text",
                                config: s.bold,
                                pressed: !0 === x("bold"),
                                onClick: () => u({ bold: !0 !== x("bold") }),
                                children: (0, r.jsx)("span", { className: "font-bold", children: "B" }),
                              }),
                              (0, r.jsx)(nG, {
                                label: "Italic cell text",
                                config: s.italic,
                                pressed: !0 === x("italic"),
                                onClick: () => u({ italic: !0 !== x("italic") }),
                                children: (0, r.jsx)("span", { className: "italic", children: "I" }),
                              }),
                            ],
                          }),
                        })
                      : null,
                    (0, r.jsx)(rX, {
                      label: "Horizontal alignment",
                      config: s.alignment,
                      children: (0, r.jsx)(n2.s, {
                        ariaLabel: "Cell horizontal alignment",
                        config: s.alignment,
                        value: x("alignment") ?? "",
                        options: [
                          { value: "left", label: "Left", icon: r$.V },
                          { value: "center", label: "Center", icon: rH.L },
                          { value: "right", label: "Right", icon: rq.U },
                        ],
                        onChange: (e) => u({ alignment: e }),
                      }),
                    }),
                    (0, r.jsx)(rX, {
                      label: "Vertical alignment",
                      config: s.verticalAlignment,
                      children: (0, r.jsx)(n2.s, {
                        ariaLabel: "Cell vertical alignment",
                        config: s.verticalAlignment,
                        value: x("verticalAlignment") ?? "",
                        options: [
                          { value: "top", label: "Top" },
                          { value: "middle", label: "Middle" },
                          { value: "bottom", label: "Bottom" },
                        ],
                        onChange: (e) => u({ verticalAlignment: e }),
                      }),
                    }),
                  ],
                })
              : null,
            c("borderEdges", "borderColor", "borderWidth", "borderStyle")
              ? (0, r.jsxs)(rR.E, {
                  title: "Cell borders",
                  children: [
                    (0, r.jsx)(rX, {
                      label: "Border edges",
                      config: s.borderEdges,
                      children: (0, r.jsx)(n2.s, {
                        ariaLabel: "Cell border edges",
                        config: s.borderEdges,
                        value: l,
                        options: [
                          { value: "all", label: "All" },
                          { value: "outside", label: "Outer" },
                          { value: "inside", label: "Inner" },
                          { value: "none", label: "None" },
                        ],
                        onChange: (e) => {
                          ;(a(e), u({ borderEdges: e }))
                        },
                      }),
                    }),
                    (0, r.jsx)(n0.X, {
                      label: "Color",
                      config: s.borderColor,
                      children: (0, r.jsx)(
                        n_.IM,
                        {
                          value: x("borderColor") ?? "#D1D5DB",
                          ariaLabel: "Cell border color",
                          config: s.borderColor,
                          mixed: h.includes("borderColor"),
                          onChange: (e) => u({ borderColor: e }),
                        },
                        `${g}:border-color:${h.includes("borderColor")}`,
                      ),
                    }),
                    (0, r.jsx)(
                      rZ,
                      {
                        label: "Border width",
                        config: s.borderWidth,
                        value: x("borderWidth"),
                        placeholder: h.includes("borderWidth") ? "Mixed" : "Default",
                        min: 0,
                        unit: "px",
                        onChange: (e) => u({ borderWidth: e }),
                      },
                      `${g}:border-width`,
                    ),
                    (0, r.jsx)(rX, {
                      label: "Line style",
                      config: s.borderStyle,
                      children: (0, r.jsx)(n2.s, {
                        ariaLabel: "Cell border style",
                        config: s.borderStyle,
                        value: x("borderStyle") ?? "",
                        options: [
                          { value: "solid", label: "Solid" },
                          { value: "dashed", label: "Dashed" },
                          { value: "dotted", label: "Dotted" },
                        ],
                        onChange: (e) => u({ borderStyle: e }),
                      }),
                    }),
                  ],
                })
              : null,
            c("paddingTop", "paddingRight", "paddingBottom", "paddingLeft")
              ? (0, r.jsx)(rR.E, {
                  title: "Cell padding",
                  children: ["top", "right", "bottom", "left"].map((e) =>
                    (0, r.jsx)(
                      rZ,
                      {
                        config: s[rJ[e]],
                        label: `${e[0]?.toUpperCase()}${e.slice(1)} padding`,
                        value: x("margins")?.[e],
                        placeholder: h.includes("margins") ? "Mixed" : "Default",
                        min: 0,
                        unit: "px",
                        onChange: (t) => u({ margins: { [e]: t } }),
                      },
                      `${g}:${e}`,
                    ),
                  ),
                })
              : null,
          ],
        },
        o,
      )
    }
    function rX({ label: e, children: t, config: n }) {
      return n?.state === "hidden"
        ? null
        : (0, r.jsxs)("div", {
            className: "flex min-w-0 flex-col gap-1.5",
            children: [
              (0, r.jsx)("span", { className: "text-xs font-medium text-token-text-tertiary", children: e }),
              t,
            ],
          })
    }
    function rZ(e) {
      return (0, r.jsx)("div", {
        className: "[&>label]:grid-cols-[104px_minmax(0,1fr)]",
        children: (0, r.jsx)(n1.S, { ...e }),
      })
    }
    let rJ = { top: "paddingTop", right: "paddingRight", bottom: "paddingBottom", left: "paddingLeft" }
    var rY = n("jV4D")
    let rQ = [
      { value: "solid", label: "Solid" },
      { value: "dashed", label: "Dash" },
      { value: "dotted", label: "Dot" },
      { value: "dash-dot", label: "D-Dot" },
      { value: "dash-dot-dot", label: "D-2" },
    ]
    function r0() {
      let e,
        t,
        n,
        {
          fill: i,
          line: l,
          selectedElement: a,
          updateStyle: o,
        } = ((e = (0, rY.S)()),
        (t = (0, eo.k2)().inspector.selectedElement),
        (n = (0, d.useCallback)(
          (t) => {
            e.updateSelectedElementStyle(t)
          },
          [e],
        )),
        { fill: t?.fill ?? null, line: t?.line ?? null, selectedElement: t, updateStyle: n }),
        s = (0, x.lP)("presentation").panes.appearance.controls,
        c = (0, nH.p)(
          s.fillOpacity,
          (e) => o({ fillOpacityPct: e }),
          (e, t) => (0, nB.XT)(e, t, { min: 0, max: 100 }),
        ),
        u = (0, nH.p)(
          s.strokeOpacity,
          (e) => o({ strokeOpacityPct: e }),
          (e, t) => (0, nB.XT)(e, t, { min: 0, max: 100 }),
        ),
        p = (0, nH.p)(
          s.strokeWidth,
          (e) => o({ strokeWidth: e }),
          (e, t) => (0, nB.XT)(e, t, { min: 0 }),
        )
      return a && (i || l)
        ? (0, r.jsxs)(rR.E, {
            title: "Appearance",
            defaultOpen: !0,
            children: [
              i
                ? (0, r.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, r.jsx)(n0.X, {
                        config: s.fill,
                        label: "Fill",
                        children: (0, r.jsx)(n_.IM, {
                          value: i.color,
                          config: s.fill,
                          ariaLabel: "Fill color",
                          onChange: (e) => {
                            o({ fillColor: e })
                          },
                        }),
                      }),
                      (0, r.jsx)(n0.X, {
                        config: s.fillOpacity,
                        label: "Fill opacity",
                        children: (0, r.jsx)("input", {
                          "aria-label": "Fill opacity",
                          disabled: "enabled" !== s.fillOpacity.state,
                          title: s.fillOpacity.reason,
                          type: "number",
                          min: 0,
                          max: 100,
                          value: i.opacityPct,
                          onChange: (e) => {
                            let t = e.currentTarget.valueAsNumber
                            Number.isFinite(t) && c(t)
                          },
                          className: rD._6,
                        }),
                      }),
                    ],
                  })
                : null,
              l
                ? (0, r.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, r.jsx)(n0.X, {
                        config: s.stroke,
                        label: "Stroke",
                        children: (0, r.jsx)(n_.IM, {
                          value: l.color,
                          config: s.stroke,
                          ariaLabel: "Stroke color",
                          onChange: (e) => {
                            o({ strokeColor: e })
                          },
                        }),
                      }),
                      (0, r.jsx)(n0.X, {
                        config: s.strokeOpacity,
                        label: "Stroke opacity",
                        children: (0, r.jsx)("input", {
                          "aria-label": "Stroke opacity",
                          disabled: "enabled" !== s.strokeOpacity.state,
                          title: s.strokeOpacity.reason,
                          type: "number",
                          min: 0,
                          max: 100,
                          value: l.opacityPct,
                          onChange: (e) => {
                            let t = e.currentTarget.valueAsNumber
                            Number.isFinite(t) && u(t)
                          },
                          className: rD._6,
                        }),
                      }),
                      (0, r.jsx)(n0.X, {
                        config: s.strokeWidth,
                        label: "Stroke width",
                        children: (0, r.jsx)("input", {
                          "aria-label": "Stroke width",
                          disabled: "enabled" !== s.strokeWidth.state,
                          title: s.strokeWidth.reason,
                          type: "number",
                          min: 0,
                          value: Math.round(l.width),
                          onChange: (e) => {
                            let t = e.currentTarget.valueAsNumber
                            Number.isFinite(t) && p(t)
                          },
                          className: rD._6,
                        }),
                      }),
                      (0, r.jsx)(n0.X, {
                        config: s.strokeStyle,
                        label: "Stroke style",
                        children: (0, r.jsx)(n2.s, {
                          config: s.strokeStyle,
                          ariaLabel: "Stroke style",
                          value: l.style,
                          options: rQ,
                          onChange: (e) => {
                            o({ strokeStyle: e })
                          },
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          })
        : null
    }
    let r1 = [
      { value: "left", label: "Align left", icon: r$.V },
      { value: "center", label: "Align center", icon: rH.L },
      { value: "right", label: "Align right", icon: rq.U },
      { value: "justify", label: "Justify", icon: rK.a },
    ]
    function r2({ onClose: e, editorCapabilities: t, embedded: n = !1 }) {
      var i
      let l,
        a,
        o,
        s,
        c,
        u = (0, x.lP)("presentation"),
        p = u.panes.text.controls,
        h = eu(b.mq, t),
        m = (0, rY.S)(),
        { selectedElement: f } =
          ((l = (0, rY.S)()),
          (a = (0, eo.k2)()),
          (o = (0, d.useCallback)(
            (e) => {
              l.setSelectedElementId(e)
            },
            [l],
          )),
          { selectedElement: a.inspector.selectedElement, slideElements: a.inspector.slideElements, selectElement: o }),
        { textStyle: g, updateTextStyle: y } =
          ((s = (0, rY.S)()),
          (c = (0, eo.k2)()),
          {
            textStyle: c.inspector.selectedElement?.text ?? null,
            updateTextStyle: (0, d.useCallback)(
              (e) => {
                s.updateSelectedElementStyle(e)
              },
              [s],
            ),
          }),
        v =
          null == f
            ? "Format"
            : g && "shape" === f.kind
              ? "Text"
              : (i = f.kind)
                ? `${i.charAt(0).toUpperCase()}${i.slice(1)}`
                : "Element"
      return (0, r.jsx)(rU.Z, {
        title: v,
        onClose: e,
        onKeyDown: (t) => {
          !(
            "Escape" !== t.key ||
            t.defaultPrevented ||
            !(0, M.Ul)(t) ||
            (0, M.tr)(t.target, { allowNumberAndRangeInputs: !0 })
          ) &&
            t.target instanceof Element &&
            t.currentTarget.contains(t.target) &&
            (t.preventDefault(), t.stopPropagation(), m.clearElementSelection(), e())
        },
        widthPx: 240,
        embedded: n,
        children: (0, r.jsx)(
          "div",
          {
            children:
              null == f
                ? (0, r.jsx)("p", {
                    className: "text-sm text-token-text-secondary select-none",
                    children: "Select a component to change its styles",
                  })
                : "chart" === f.kind && h.inspector.includes("appearance")
                  ? (0, r.jsx)(rz, { config: u.panes.chart, source: m.chartEditing })
                  : "table" === f.kind && h.inspector.includes("appearance")
                    ? (0, r.jsx)(r_, { config: u.panes.tableCells, source: m.tableEditing })
                    : g && h.inspector.includes("text")
                      ? (0, r.jsxs)("div", {
                          className: "flex flex-col gap-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "text-sm text-token-text-secondary",
                                  children: "Typography",
                                }),
                                (0, r.jsx)(nq, {
                                  config: p.fontSize,
                                  fontSize: g.fontSize,
                                  onChange: (e) => {
                                    y({ textFontSize: e })
                                  },
                                }),
                                (0, r.jsxs)("div", {
                                  className: "grid grid-cols-4 gap-2",
                                  children: [
                                    (0, r.jsx)(nG, {
                                      config: p.bold,
                                      label: "Bold",
                                      pressed: g.bold,
                                      onClick: () => {
                                        y({ textBold: !g.bold })
                                      },
                                      children: (0, r.jsx)("span", { className: "text-base font-bold", children: "B" }),
                                    }),
                                    (0, r.jsx)(nG, {
                                      config: p.italic,
                                      label: "Italic",
                                      pressed: g.italic,
                                      onClick: () => {
                                        y({ textItalic: !g.italic })
                                      },
                                      children: (0, r.jsx)("span", { className: "text-base italic", children: "I" }),
                                    }),
                                    (0, r.jsx)(nG, {
                                      disabled: !0,
                                      config: p.strikethrough,
                                      label: "Strikethrough",
                                      children: (0, r.jsx)("span", {
                                        className: "text-base line-through",
                                        children: "S",
                                      }),
                                    }),
                                    (0, r.jsx)(nG, {
                                      config: p.underline,
                                      label: "Underline",
                                      pressed: g.underline,
                                      onClick: () => {
                                        y({ textUnderline: !g.underline })
                                      },
                                      children: (0, r.jsx)(rW.z, { className: "size-4" }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "text-sm text-token-text-secondary",
                                  children: "Color",
                                }),
                                (0, r.jsx)(n$, {
                                  config: p.color,
                                  color: g.color,
                                  backgroundColor: f.fill?.color,
                                  onChange: (e) => {
                                    y({ textColor: e })
                                  },
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "text-sm text-token-text-secondary",
                                  children: "Layout",
                                }),
                                (0, r.jsx)("div", {
                                  className: "grid grid-cols-4 gap-2",
                                  children: r1
                                    .filter(
                                      ({ value: e }) =>
                                        "hidden" !== p.alignment.state &&
                                        (g.alignment === e ||
                                          !p.alignment.options ||
                                          p.alignment.options.values.includes(e)),
                                    )
                                    .map(({ value: e, label: t, icon: n }) =>
                                      (0, r.jsx)(
                                        nG,
                                        {
                                          config: p.alignment,
                                          disabled: !(0, nB.lB)(p.alignment, e),
                                          label: t,
                                          pressed: g.alignment === e,
                                          onClick: () => {
                                            y({ textAlignment: e })
                                          },
                                          children: (0, r.jsx)(n, { className: "size-4" }),
                                        },
                                        e,
                                      ),
                                    ),
                                }),
                                (0, r.jsxs)("label", {
                                  className: "flex items-center gap-2 text-xs text-token-text-primary",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "checkbox",
                                      checked: "resizeShapeToFitText" === g.autoFit,
                                      onChange: (e) => {
                                        y({ textAutoFit: e.currentTarget.checked ? "resizeShapeToFitText" : "none" })
                                      },
                                      className: "size-4 shrink-0 accent-token-text-primary",
                                    }),
                                    "Resize shape to fit text",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : h.inspector.includes("appearance") && (null != f.fill || null != f.line)
                        ? (0, r.jsx)(r0, {})
                        : (0, r.jsx)("p", {
                            className: "text-sm text-token-text-secondary select-none",
                            children: "No editable styles are available for this component.",
                          }),
          },
          f?.id ?? "empty",
        ),
      })
    }
    function r4({
      controller: e,
      snapshot: t,
      selectionBounds: n,
      selectionBoundsSource: i,
      collisionBoundaryElement: l,
      panelControls: a,
      editToolbarRequested: o,
      floatingBar: s,
      dismissEditToolbar: c,
      focusStage: u,
      shortcutScopeElement: p,
      selectionActions: h,
      editorCapabilities: m,
    }) {
      let f = (0, d.useCallback)(() => {
        ;(a.togglePanel(ea), u())
      }, [a, u])
      return (0, r.jsx)(
        rt,
        {
          editorCapabilities: m,
          controller: e,
          editToolbarRequested: o,
          floatingBar: s,
          isInspectorAvailable: a.isPanelAvailable(ea),
          isInspectorOpen: a.isPanelOpen(ea),
          selectedElement:
            1 === t.selectedElementIds.length && t.inspector.selectedElement?.id === t.primarySelectedElementId
              ? t.inspector.selectedElement
              : null,
          themeColors: t.inspector.themeAccentColors,
          selectionBounds: i ? null : n,
          selectionBoundsSource: i,
          collisionBoundaryElement: l,
          selectionActions: h,
          shortcutScopeElement: p,
          onDismissEditToolbar: c,
          onToggleInspector: f,
        },
        JSON.stringify([t.slideIds[t.selectedSlideIdx] ?? t.selectedSlideIdx, t.selectedElementIds]),
      )
    }
    var r3 = n("kUgN"),
      r5 = n("Momq"),
      r6 = n("Uyvs")
    let r8 = [
      {
        id: "popcorn-presentation-inspector-plugin",
        panels: [
          {
            id: ea,
            title: "Format",
            defaultOpen: !1,
            widthPx: 240,
            snapshotScope: "inspector",
            render: ({ panelControls: e, embedded: t }) =>
              (0, r.jsx)(r2, {
                embedded: t,
                editorCapabilities: void 0,
                onClose: () => {
                  e.closePanel(ea)
                },
              }),
          },
        ],
        stageOverlays: [
          {
            id: "popcorn-presentation-inspector-pill-overlay",
            render: (e) => (0, r.jsx)(r4, { ...e, editorCapabilities: void 0 }),
          },
        ],
      },
    ]
    function r9({
      formatPane: e,
      floatingBar: t,
      slideContextMenu: n,
      elementContextMenu: i,
      plugins: l,
      ref: a,
      className: c,
      deferCleanup: u,
      topViewportInsetPx: p,
      fitTopInsetPx: h,
      bottomViewportInsetPx: m,
      fitLeftInsetPx: f,
      fitRightInsetPx: g,
      layoutPanelFitInsetPx: x,
      layoutPanelSide: b,
      viewportAlignmentRef: y,
      externalCrdtUpdates: v,
      externalCrdtUpdateSource: w,
      headerTitleContent: C,
      headerRightContent: S,
      headerAnnotationIcon: k,
      headerCommentsIcon: I,
      headerSidebarIcon: E,
      headerEditingIcons: j,
      renderHeader: M,
      renderEditingControls: T,
      renderLayout: A,
      panelsInLayout: P,
      renderDrawingToolCommands: L,
      renderWidget: F,
      footerContent: R,
      headerCenterContent: D,
      commentsSidebarContent: z,
      schedulesSidebarContent: O,
      renderCommentsSidebar: V,
      renderCommentsSidebarHeader: H,
      renderCommentsSidebarEmptyAction: K,
      renderSidebarPanel: $,
      renderThumbnailPanel: q,
      renderSlideThumbnailOverlay: W,
      commentsSidebarOpen: U,
      schedulesSidebarOpen: G,
      onCommentsSidebarOpenChange: _,
      onSchedulesSidebarOpenChange: X,
      selectedCommentThreadId: Z,
      hoveredCommentThreadId: J,
      onSelectedCommentThreadChange: Y,
      fitOnOpen: Q,
      zoomToFitLabel: ee,
      renderHeaderZoomControl: et,
      initialCrdtState: en,
      initialPresentationProto: er,
      initialSourceBytes: el,
      initialSourceFormat: ea = "pptx",
      initialSelectedSlideIdx: eo,
      initialZoom: es,
      gpuRendering: ed,
      initialDrawingPreferences: ec,
      onDrawingPreferencesChange: eu,
      commentControllerRef: ep,
      onCommentThreadsChange: eh,
      onControllerReady: em,
      onImportReady: ef,
      onImportError: eg,
      onWorkerFailure: ex,
      onWorkerStarted: eb,
      diagnosticContext: ey,
      onCrdtDrain: ev,
      onCrdtDrainAttemptFailed: ew,
      onCrdtDrainTimeout: eC,
      onCrdtUpdate: eS,
      onFirstSlideRendered: ek,
      onPresentationEdit: eI,
      onInteractionAttempt: eE,
      onElementDragStart: ej,
      pendingImageGenerations: eM = [],
      resolveImageHydrationAssets: eT,
      resolveHtmlHydrationAssets: eA,
      uploadImage: eP,
      title: eL = "codex-popcorn-demo.pptx",
      theme: eF = "codex",
      isEditing: eR = !1,
      showDisabledAddSlideButton: eD = !1,
      hideSpeakerNotes: eN = !1,
      navigationCommand: ez,
      reviewTools: eB,
      generation: eO,
      onHyperlinkClick: eV,
      onHyperlinkHoverChange: eH,
      annotationsEnabled: eK = !1,
      drawingAnnotationsEnabled: e$ = !1,
      enablePageNavigation: eq,
      artifactSearchEnabled: eW = !1,
      renderFindBar: eU,
      commentThreadsEnabled: eG = !1,
      smartGuidesEnabled: e_,
      workerFactory: eX,
    }) {
      let eZ = (0, d.useRef)(eP)
      eZ.current = eP
      let eJ = (0, d.useRef)(eT)
      eJ.current = eT
      let eY = (0, d.useRef)(eA)
      eY.current = eA
      let [eQ, e0] = (0, d.useState)(null),
        [e1, e2] = (0, d.useState)(null),
        e4 = (0, d.useRef)(el ?? null),
        e3 = (0, d.useRef)(em),
        e5 = (0, d.useRef)(ef)
      ;((e3.current = em), (e5.current = ef))
      let e6 = (0, r5.fl)({ initialCrdtState: en, externalCrdtUpdates: v, externalCrdtUpdateSource: w }),
        e8 = (0, d.useRef)(er),
        e9 = (0, d.useRef)(null),
        e7 = (0, d.useRef)(new WeakSet()),
        te = (0, d.useRef)(new WeakSet()),
        tt = (0, d.useRef)((e) => {
          !e7.current.has(e) && te.current.delete(e) && (e0(e), e5.current?.())
        }),
        tn = (0, d.useRef)(null),
        tr = (0, d.useRef)((e) => {
          let t = e3.current
          if (!t) return
          let n = tn.current
          ;(n?.controller !== e || n.callback !== t) &&
            (tn.current = { controller: e, callback: t, cleanup: t(e, e4.current) })
        }),
        ti = (0, d.useRef)(null),
        tl = (0, d.useRef)(ev)
      tl.current = ev
      let ta = (0, d.useRef)(eC)
      ta.current = eC
      let to = (0, d.useRef)(ew)
      to.current = ew
      let ts = (0, d.useRef)({
        deferCleanup: u,
        dispose: (e) => {
          let t
          e7.current.add(e)
          let n = ti.current
          null == n
            ? e.dispose()
            : Promise.race([
                n.then(() => !1),
                new Promise((e) => {
                  t = setTimeout(() => e(!0), 5e3)
                }),
              ]).then(
                (n) => {
                  ;(clearTimeout(t), n && ta.current?.(), e.dispose())
                },
                () => {
                  ;(clearTimeout(t), e.dispose())
                },
              )
        },
      })
      ts.current.deferCleanup = u
      let td = (0, d.useRef)((e) => {
          ti.current = Promise.all([e, tl.current?.(e)]).then(() => void 0)
        }),
        tc = (0, d.useRef)(() => {
          to.current?.()
        }),
        tu = (0, N.j)(
          void 0,
          () => {
            let e
            return (e = new ei({
              resolveHtmlHydrationAssets: async (e) => {
                if (!eY.current) throw Error("HTML widget loading is unavailable.")
                return eY.current(e)
              },
              resolveImageHydrationAssets: async (e) => {
                if (!eJ.current) throw Error("Image loading is unavailable.")
                return eJ.current(e)
              },
              uploadImage:
                null == eP
                  ? void 0
                  : async (e, t) => {
                      if (!eZ.current) throw Error("Image upload is unavailable.")
                      return eZ.current(e, t)
                    },
              initialCrdtState: e6.initialCrdtState,
              initialSelectedSlideIdx: eo,
              initialZoom: es,
              gpuRendering: ed,
              initialDrawingPreferences: ec,
              onDrawingPreferencesChange: eu,
              onFirstSlideRendered: ek,
              smartGuidesEnabled: e_,
              liveWidgetsEnabled: null != F,
              presentationProto: null == el ? (er ?? o.Presentation.create().toProto()) : void 0,
              bootstrapSource: null == el ? void 0 : { kind: "source-bytes", format: ea, bytes: (0, r3.$)(el) },
              onImportReady: () => {
                ;(te.current.add(e), tt.current(e))
              },
              onImportError: eg,
              onWorkerFailure: ex,
              onWorkerStarted: eb,
              workerFactory: eX,
            }))
          },
          ts.current,
        ),
        tp = null != tu && eQ === tu
      ;((0, d.useEffect)(() => {
        if (!tu || !tp || e1 === tu) return
        let e = () => {
            let e = tu.getSnapshot()
            ;(null == e.selectedSlideFrame || null != e.fitScale) && e2(tu)
          },
          t = tu.subscribe(e)
        return (e(), t)
      }, [tu, tp, e1]),
        (0, d.useEffect)(() => {
          if (null != tu)
            return (
              e7.current.delete(tu),
              tt.current(tu),
              () => {
                e7.current.add(tu)
              }
            )
        }, [tu]),
        (0, d.useImperativeHandle)(a, () => ({
          flushEdits: async () => {
            await tu?.exportPresentationProto()
          },
          getCurrentSlideTarget() {
            let e = tu?.getSnapshot()
            if (!e) return null
            let t = e.slideIds[e.selectedSlideIdx]
            return t
              ? {
                  slideId: t,
                  slideIndex: e.selectedSlideIdx,
                  slideLabel: e.slideLabels[e.selectedSlideIdx] ?? `Slide ${e.selectedSlideIdx + 1}`,
                }
              : null
          },
        })))
      let { crdtPublishingReady: th, restoreState: tm } = (0, r5.p$)({
        artifactLabel: "Presentation",
        controller: tu,
        externalCrdtUpdates: e6.externalCrdtUpdates,
        externalCrdtUpdateSource: e6.externalCrdtUpdateSource,
        onCrdtDrain: td.current,
        onCrdtDrainAttemptFailed: tc.current,
        onCrdtUpdate:
          null == eI
            ? eS
            : (e) => {
                ;(null != tu && eI(() => tu.exportPresentationProto()), eS?.(e))
              },
      })
      ;((0, d.useEffect)(() => {
        if (null != tu && tp && th)
          return (
            tr.current(tu),
            () => {
              let e = tn.current
              e?.controller === tu && ((tn.current = null), e.cleanup?.())
            }
          )
      }, [tu, em, tp, th]),
        (0, d.useEffect)(() => {
          tu?.diagnostics?.update({
            ...ey,
            title: eL ?? null,
            editable: eR && th,
            crdtPublishingReady: th,
            readOnlyReason: eR ? (th ? null : "Waiting for CRDT publishing") : "Editing disabled by host",
          })
        }, [tu, ey, eL, eR, th]))
      let tf = (0, d.useMemo)(
          () =>
            eM.flatMap((e) =>
              "failed" !== e.status &&
              "presentation" === e.target.type &&
              "string" == typeof e.target.aid &&
              e.target.aid &&
              e.slideId &&
              e.elementId
                ? [{ requestId: e.requestId, slideId: e.slideId, elementId: e.elementId }]
                : [],
            ),
          [eM],
        ),
        tg = (0, d.useMemo)(
          () =>
            (function (e) {
              let t = {}
              for (let n of e) t[n.slideId] = (t[n.slideId] ?? 0) + 1
              return t
            })(tf),
          [tf],
        )
      if (
        ((0, d.useEffect)(() => {
          if (eG && null != ep)
            return (
              (ep.current = tu),
              () => {
                ep.current === tu && (ep.current = null)
              }
            )
        }, [ep, eG, tu]),
        (0, d.useEffect)(() => {
          let e
          if (!eG || !tp || null == tu || null == eh) return
          let t = () => {
            let t = tu.getState().commentThreads
            null != t && t !== e && ((e = t), eh(t))
          }
          return (t(), tu.subscribe(t))
        }, [eG, tu, tp, eh]),
        (0, d.useEffect)(() => {
          tu &&
            e8.current !== er &&
            ((e8.current = er), tu.replaceFromProto(er ?? o.Presentation.create().toProto()).catch(B.ar))
        }, [tu, er]),
        (0, d.useEffect)(() => {
          if (!tu || null == ez) return
          let e = () => {
            if (ez.requestId === e9.current) return !0
            let e = null
            if (null != ez.slideId) {
              let t = tu.getSnapshot().slideIds.indexOf(ez.slideId)
              t >= 0 && (e = t)
            }
            return (null == e && null != ez.slideNumber && (e = ez.slideNumber - 1), null == e)
              ? null == ez.slideId
              : ((e9.current = ez.requestId),
                tu.setSelectedSlideIdx(e),
                tu.setSelectedElementId(ez.objectId ?? null),
                !0)
          }
          if (e()) return
          let t = tu.subscribe(() => {
            e() && t()
          })
          return t
        }, [tu, ez]),
        (0, d.useEffect)(() => {
          if (!tu || !eT) return
          let e = new nz(
              eT,
              (e, t) => tu.hydrateImageAssets(e, t),
              (e, t) => tu.setLoadingImageAssets(e, t),
            ),
            t = tu.subscribeImageHydrationRequests((t, n) => e.update(t, n))
          return () => {
            ;(t(), e.dispose())
          }
        }, [tu, eT]),
        !tu)
      )
        return null
      let tx =
        eB?.annotation?.comments?.unified === !0 && null != eB.annotation.commentTarget && e1 !== tu
          ? { ...eB, annotation: { ...eB.annotation, commentTarget: void 0 } }
          : eB
      return (0, r.jsxs)("section", {
        className: (0, s.A)("no-drag relative h-full min-h-0 bg-token-bg-primary", c),
        style: (0, r6.M)(eF),
        onPointerDownCapture: () => tu?.diagnostics?.observed && tu.diagnostics.update({ focusedAt: Date.now() }),
        onFocusCapture: () => tu?.diagnostics?.observed && tu.diagnostics.update({ focusedAt: Date.now() }),
        "data-codex-popcorn-editor": !0,
        "data-testid": "popcorn-electron-presentation-panel",
        children: [
          (0, r.jsx)("div", {
            className: "h-full min-h-0",
            style: { visibility: e1 === tu ? void 0 : "hidden" },
            "data-testid": "popcorn-presentation-initial-viewport",
            children: tp
              ? (0, r.jsx)(nM, {
                  formatPane: e,
                  floatingBar: t,
                  className: "h-full min-h-0",
                  slideContextMenu: n,
                  elementContextMenu: i,
                  controller: tu,
                  onFirstStackedPageImageLoad: () => e2(tu),
                  footerContent: R,
                  ...(eG
                    ? {
                        commentsSidebarContent: z,
                        commentsSidebarOpen: U,
                        hoveredCommentThreadId: J,
                        onCommentsSidebarOpenChange: _,
                        onSelectedCommentThreadChange: Y,
                        selectedCommentThreadId: Z,
                      }
                    : {}),
                  schedulesSidebarContent: O,
                  schedulesSidebarOpen: G,
                  onSchedulesSidebarOpenChange: X,
                  headerTitleContent: C,
                  headerCenterContent: D,
                  headerRightContent:
                    tf.length > 0
                      ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(r7, { count: tf.length }), S] })
                      : S,
                  headerAnnotationIcon: k,
                  headerCommentsIcon: I,
                  headerSidebarIcon: E,
                  headerEditingIcons: j,
                  renderCommentsSidebar: V,
                  renderCommentsSidebarHeader: H,
                  renderCommentsSidebarEmptyAction: K,
                  renderSidebarPanel: $,
                  renderThumbnailPanel: q,
                  renderHeader: null == M ? void 0 : (e) => M({ ...e, initialLayoutReady: e1 === tu }),
                  renderEditingControls: T,
                  renderDrawingToolCommands: L,
                  renderWidget: F,
                  renderLayout: A,
                  panelsInLayout: P,
                  fitLeftInsetPx: f,
                  fitRightInsetPx: g,
                  layoutPanelFitInsetPx: x,
                  layoutPanelSide: b,
                  renderHeaderZoomControl: et,
                  fitOnOpen: Q,
                  zoomToFitLabel: ee,
                  renderSlideThumbnailOverlay: (e, t) => {
                    let n = tg[e] ?? 0
                    return (0, r.jsxs)(r.Fragment, {
                      children: [
                        W?.(e, t),
                        n > 0
                          ? (0, r.jsx)("div", {
                              "data-testid": `popcorn-pending-image-thumb-${e}`,
                              className:
                                "absolute top-2 right-2 rounded-full bg-amber-100/95 px-2 py-0.5 text-[11px] font-semibold text-amber-900 shadow-sm",
                              children: n,
                            })
                          : null,
                      ],
                    })
                  },
                  slideThumbnailPlacement: "responsive",
                  topViewportInsetPx: p,
                  fitTopInsetPx: h,
                  bottomViewportInsetPx: m,
                  viewportAlignmentRef: y,
                  plugins: [...r8.filter((e) => !l?.some((t) => t.id === e.id)), ...(l ?? [])],
                  title: eL,
                  theme: eF,
                  isEditing: eR && th,
                  showDisabledAddSlideButton: eD || (eR && !th),
                  onInteractionAttempt: eE,
                  onElementDragStart: ej,
                  hideSpeakerNotes: eN,
                  reviewTools: tx,
                  generation: eO,
                  onHyperlinkClick: eV,
                  onHyperlinkHoverChange: eH,
                  annotationsEnabled: eK,
                  drawingAnnotationsEnabled: e$,
                  enablePageNavigation: eq,
                  artifactSearchEnabled: eW,
                  renderFindBar: eU,
                  commentThreadsEnabled: eG,
                  smartGuidesEnabled: e_,
                })
              : null,
          }),
          (0, r.jsx)(r5.Vx, { artifactLabel: "Presentation", restoreState: tm }),
        ],
      })
    }
    function r7({ count: e }) {
      return (0, r.jsx)("div", {
        "data-testid": "popcorn-pending-image-summary",
        className: "rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-amber-900",
        children: 1 === e ? "1 image pending" : `${e} images pending`,
      })
    }
    var ie = n("qmMi"),
      it = n("DBCl"),
      ir = n("Wf1j"),
      ii = n("oyxz"),
      il = n("F5N3"),
      ia = n("QcW8"),
      io = n("n5iL"),
      is = n("v6uO"),
      id = n("i7gm"),
      ic = n("Ot7V"),
      iu = n("rDNg"),
      ip = n("bVeK"),
      ih = n("UxN3"),
      im = n("yC2B"),
      ig = n("tSEg"),
      ix = n("hZax"),
      ib = n("LkR6"),
      iy = n("j9wQ"),
      iv = n("PpD0"),
      iw = n("NvrT"),
      iC = n("SAnh"),
      iS = n("Rcq0"),
      ik = n("ouXG"),
      iI = n("Z3C1"),
      iE = n("ZOIm"),
      ij = n("ZCWn"),
      iM = n("Qgfj"),
      iT = n("rmk3"),
      iA = n("SGsN"),
      iP = n("jDEJ")
    function iL({ isHidden: e, canDelete: t, onDuplicate: n, onToggleHidden: r, onDelete: i }) {
      return {
        duplicate: {
          id: "duplicate",
          message: (0, iM.zR)({ id: "artifactPreview.slideContextMenu.duplicate", defaultMessage: "Duplicate" }),
          onSelect: n,
        },
        visibility: {
          id: "visibility",
          message: e
            ? (0, iM.zR)({ id: "artifactPreview.slideContextMenu.show", defaultMessage: "Show" })
            : (0, iM.zR)({ id: "artifactPreview.slideContextMenu.hide", defaultMessage: "Hide" }),
          onSelect: r,
        },
        separator: { id: "slide-actions-separator", type: "separator" },
        deleteItem: {
          id: "delete",
          message: (0, iM.zR)({ id: "artifactPreview.slideContextMenu.delete", defaultMessage: "Delete" }),
          tone: "danger",
          enabled: t,
          onSelect: i,
        },
      }
    }
    function iF(e) {
      let t,
        n,
        l,
        a = (0, i.c)(13),
        {
          trigger: o,
          prepareMenu: s,
          onBringToFront: c,
          onBringForward: u,
          onSendBackward: p,
          onSendToBack: h,
          onDelete: m,
          prepareActions: f,
        } = e,
        g = (0, d.useRef)(null)
      return (
        a[0] !== u || a[1] !== c || a[2] !== m || a[3] !== p || a[4] !== h || a[5] !== f || a[6] !== s
          ? ((t = async () => {
              let e = await s?.()
              if (s && !e) return []
              let { duplicate: t, duplicateAccelerator: n, requestEdits: r, showProperties: i } = await f(),
                l = []
              ;(e?.kind !== "slide" &&
                null != t &&
                l.push({
                  id: "copy",
                  accelerator: "CmdOrCtrl+C",
                  message: (0, iM.zR)({ id: "artifactPreview.elementContextMenu.copy", defaultMessage: "Copy" }),
                  onSelect: () => {
                    g.current?.dispatchEvent(new ClipboardEvent("copy", { bubbles: !0, cancelable: !0 }))
                  },
                }),
                "function" == typeof navigator.clipboard?.read &&
                  l.push({
                    id: "paste",
                    accelerator: "CmdOrCtrl+V",
                    message: (0, iM.zR)({ id: "artifactPreview.elementContextMenu.paste", defaultMessage: "Paste" }),
                    onSelect: () => {
                      let e = g.current
                      null != e &&
                        (async function (e) {
                          let t = new AbortController(),
                            n = () => t.abort(),
                            r = e.ownerDocument
                          for (let e of ["pointerdown", "keydown"])
                            r.addEventListener(e, n, { capture: !0, signal: t.signal })
                          try {
                            let n = await navigator.clipboard.read(),
                              r = await Promise.all(
                                n.flatMap((e) =>
                                  e.types
                                    .filter((e) => "text/html" === e || "text/plain" === e || e.startsWith("image/"))
                                    .map(async (t) => {
                                      let n = await e.getType(t)
                                      return { type: t, blob: n, text: t.startsWith("text/") ? await n.text() : null }
                                    }),
                                ),
                              )
                            if (t.signal.aborted || !e.isConnected) return
                            let i = new DataTransfer()
                            for (let { type: e, blob: t, text: n } of r)
                              null != n ? i.setData(e, n) : i.items.add(new File([t], "Pasted image", { type: e }))
                            e.dispatchEvent(
                              new ClipboardEvent("paste", { bubbles: !0, cancelable: !0, clipboardData: i }),
                            )
                          } finally {
                            t.abort()
                          }
                        })(e).catch(iR)
                    },
                  }))
              let a = {
                id: "properties",
                message: (0, iM.zR)({
                  id: "artifactPreview.elementContextMenu.properties",
                  defaultMessage: "Properties\u2026",
                }),
                enabled: null != i,
                onSelect: i,
              }
              if (e?.kind === "slide") {
                let { duplicate: t, visibility: n, separator: r, deleteItem: i } = iL(e)
                return [t, n, ...l, a, r, i]
              }
              return (
                null != t &&
                  l.push({
                    id: "duplicate",
                    accelerator: n,
                    message: (0, iM.zR)({
                      id: "artifactPreview.elementContextMenu.duplicate",
                      defaultMessage: "Duplicate",
                    }),
                    onSelect: t,
                  }),
                l.length > 0 && l.push({ id: "element-clipboard-separator", type: "separator" }),
                l.push(
                  {
                    id: "bring-to-front",
                    accelerator: "CmdOrCtrl+Shift+Up",
                    message: (0, iM.zR)({
                      id: "artifactPreview.elementContextMenu.bringToFront",
                      defaultMessage: "Bring to front",
                    }),
                    onSelect: c,
                  },
                  {
                    id: "bring-forward",
                    accelerator: "CmdOrCtrl+Up",
                    message: (0, iM.zR)({
                      id: "artifactPreview.elementContextMenu.bringForward",
                      defaultMessage: "Bring forward",
                    }),
                    onSelect: u,
                  },
                  {
                    id: "send-backward",
                    accelerator: "CmdOrCtrl+Down",
                    message: (0, iM.zR)({
                      id: "artifactPreview.elementContextMenu.sendBackward",
                      defaultMessage: "Send backward",
                    }),
                    onSelect: p,
                  },
                  {
                    id: "send-to-back",
                    accelerator: "CmdOrCtrl+Shift+Down",
                    message: (0, iM.zR)({
                      id: "artifactPreview.elementContextMenu.sendToBack",
                      defaultMessage: "Send to back",
                    }),
                    onSelect: h,
                  },
                  { id: "element-properties-separator", type: "separator" },
                ),
                null != r &&
                  l.push({
                    id: "request-edits",
                    message: (0, iM.zR)({
                      id: "artifactPreview.elementContextMenu.requestEdits",
                      defaultMessage: "Request edits\u2026",
                    }),
                    selectAfterClose: !0,
                    onSelect: r,
                  }),
                l.push(
                  a,
                  { id: "element-delete-separator", type: "separator" },
                  {
                    id: "delete",
                    accelerator: "Backspace",
                    message: (0, iM.zR)({ id: "artifactPreview.elementContextMenu.delete", defaultMessage: "Delete" }),
                    tone: "danger",
                    onSelect: m,
                  },
                ),
                l
              )
            }),
            (a[0] = u),
            (a[1] = c),
            (a[2] = m),
            (a[3] = p),
            (a[4] = h),
            (a[5] = f),
            (a[6] = s),
            (a[7] = t))
          : (t = a[7]),
        a[8] !== o
          ? ((n = (0, r.jsx)("span", { ref: g, className: "contents", children: o })), (a[8] = o), (a[9] = n))
          : (n = a[9]),
        a[10] !== t || a[11] !== n
          ? ((l = (0, r.jsx)(iT.t, { getItems: t, children: n })), (a[10] = t), (a[11] = n), (a[12] = l))
          : (l = a[12]),
        l
      )
    }
    function iR() {
      ;(0, iA.RB)().warning(
        (0, r.jsx)(ii.A, {
          id: "artifactPreview.elementContextMenu.pasteUnavailable",
          defaultMessage: "Couldn\u2019t access the clipboard. Press {shortcut} to paste",
          values: { shortcut: (0, iP.X)("CmdOrCtrl+V") },
        }),
      )
    }
    var iD = n("i5ac"),
      iN = n.n(iD),
      iz = n("ghCJ"),
      iB = n("C0vA"),
      iO = n("nnSv")
    function iV(e) {
      let t,
        n,
        l,
        a,
        o,
        c = (0, i.c)(22),
        { progressKey: u, snapshot: p } = e,
        h = (0, ie._U)(ij.XR, u),
        m = (0, ix.Zj)("821992342"),
        f = (0, ix.Zj)("2621756053"),
        [g, x] = (0, d.useState)(null),
        [b, y] = (0, d.useState)(!1)
      ;(c[0] !== g
        ? ((t = () => {
            if (null != g) return (0, iO.Q)(g, y)
          }),
          (n = [g]),
          (c[0] = g),
          (c[1] = t),
          (c[2] = n))
        : ((t = c[1]), (n = c[2])),
        (0, d.useEffect)(t, n))
      let v = p.slideRect
      if (null == v) return null
      c[3] !== f ||
      c[4] !== h ||
      c[5] !== m ||
      c[6] !== v ||
      c[7] !== b ||
      c[8] !== p.previewFrames ||
      c[9] !== p.selectedSlideElementTargets ||
      c[10] !== p.selectedSlideIdx ||
      c[11] !== p.slideIds
        ? ((l = Array.from(h.values()).flatMap((e) => {
            let t = (e.isEdit ? e.targets : [e.target]).flatMap((t) =>
              ("presentation-element-selection" !== t.type && "presentation-region" !== t.type) ||
              ("presentation-element-selection" === t.type && "image" === t.primaryElementKind) ||
              t.slideId !== p.slideIds[p.selectedSlideIdx]
                ? []
                : "presentation-region" === t.type
                  ? [{ id: e.requestId, frame: t.frame }]
                  : t.elementIds.flatMap((e) => {
                      let t = p.selectedSlideElementTargets.find((t) => t.id === e)
                      if (null == t) return []
                      let n = p.previewFrames.find((t) => t.elementId === e)?.frame ?? t.frame
                      return [{ id: e, frame: n }]
                    }),
            )
            return iN()(t, "id").flatMap((t, n) => {
              let { id: i, frame: l } = t,
                a = !e.isEdit
              if (e.isEdit && n > 0) return []
              let o = l.width * v.scale,
                d = l.height * v.scale
              return (0, r.jsxs)(
                "div",
                {
                  className: (0, s.A)("pointer-events-none absolute select-none", { "overflow-hidden": a }),
                  "data-artifact-generation": e.requestId,
                  "data-artifact-generation-boundary": a || void 0,
                  style: {
                    left: l.left * v.scale,
                    top: l.top * v.scale,
                    width: o,
                    height: d,
                    transform: `rotate(${l.rotation ?? 0}deg)`,
                  },
                  children: [
                    a && (0, r.jsx)(iz.o, { presentation: "fill" }),
                    m &&
                      (!e.isEdit || 0 === n) &&
                      (0, r.jsx)(iB.f, {
                        requestId: e.requestId,
                        collapsed: f && b,
                        children:
                          e.heading ??
                          (e.isEdit
                            ? (0, r.jsx)(ii.A, {
                                id: "artifacts.presentation.editing.working",
                                defaultMessage: "Editing\u2026",
                              })
                            : (0, r.jsx)(ii.A, {
                                id: "artifacts.presentation.generation.working",
                                defaultMessage: "Creating\u2026",
                              })),
                      }),
                  ],
                },
                `${e.requestId}:${i}`,
              )
            })
          })),
          (c[3] = f),
          (c[4] = h),
          (c[5] = m),
          (c[6] = v),
          (c[7] = b),
          (c[8] = p.previewFrames),
          (c[9] = p.selectedSlideElementTargets),
          (c[10] = p.selectedSlideIdx),
          (c[11] = p.slideIds),
          (c[12] = l))
        : (l = c[12])
      let w = l
      if (0 === w.length) return null
      c[13] !== v.height || c[14] !== v.left || c[15] !== v.top || c[16] !== v.width
        ? ((a = { left: v.left, top: v.top, width: v.width, height: v.height }),
          (c[13] = v.height),
          (c[14] = v.left),
          (c[15] = v.top),
          (c[16] = v.width),
          (c[17] = a))
        : (a = c[17])
      let C = m && f ? x : void 0
      return (
        c[18] !== w || c[19] !== a || c[20] !== C
          ? ((o = (0, r.jsx)("div", { className: "pointer-events-none absolute", style: a, ref: C, children: w })),
            (c[18] = w),
            (c[19] = a),
            (c[20] = C),
            (c[21] = o))
          : (o = c[21]),
        o
      )
    }
    var iH = n("djeZ"),
      iK = n("LPKZ"),
      i$ = n.n(iK),
      iq = n("HOLv"),
      iW = n("RNul"),
      iU = n("sZWC"),
      iG = n("FFQV")
    let i_ = { ...iU.p, transparentBackground: !0 }
    function iX(e) {
      let t,
        n,
        l,
        a,
        o,
        s = (0, i.c)(24),
        { widget: c, isActive: u, interactive: p, onWheel: h, isVisible: m } = e,
        f = (0, d.useId)(),
        g = (0, ir.A)(),
        x = (0, d.useSyncExternalStore)(iZ, iJ, iY)
      if (!(void 0 === m || m) || !x) return null
      if (c.html === t8.S) {
        let e, t, n
        return (
          s[0] !== g
            ? ((e = g.formatMessage({
                id: "presentationWidget.generationPlaceholder",
                defaultMessage: "Content generation placeholder",
              })),
              (s[0] = g),
              (s[1] = e))
            : (e = s[1]),
          s[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(iq.I, { asset: iH.q })), (s[2] = t))
            : (t = s[2]),
          s[3] !== e
            ? ((n = (0, r.jsx)("div", {
                "data-theme": "light",
                className: "grid size-full place-items-center bg-surface-secondary text-tertiary",
                role: "img",
                "aria-label": e,
                children: t,
              })),
              (s[3] = e),
              (s[4] = n))
            : (n = s[4]),
          n
        )
      }
      s[5] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, r.jsx)(r.Fragment, {})), (s[5] = t)) : (t = s[5])
      let b = t
      if (u) {
        let e
        ;(s[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("div", {
              "data-theme": "light",
              className:
                "pointer-events-none flex size-full items-center justify-center bg-surface-secondary text-tertiary",
              children: (0, r.jsx)(iW.y, { className: "size-6" }),
            })),
            (s[6] = e))
          : (e = s[6]),
          (b = e))
      }
      if (void 0 === c.html) return b
      let y = `${c.elementId}.html`
      s[7] !== y ? ((n = { path: y }), (s[7] = y), (s[8] = n)) : (n = s[8])
      let v = `${f}:${c.key}`,
        w = !p
      return (
        s[9] !== c.frame.height
          ? ((l = { height: c.frame.height, loadingHeight: c.frame.height, fillContainer: !0, onHeightMeasured: i$() }),
            (s[9] = c.frame.height),
            (s[10] = l))
          : (l = s[10]),
        s[11] !== g || s[12] !== c.name
          ? ((a = c.name || g.formatMessage({ id: "presentationWidget.title", defaultMessage: "Interactive widget" })),
            (s[11] = g),
            (s[12] = c.name),
            (s[13] = a))
          : (a = s[13]),
        s[14] !== u ||
        s[15] !== b ||
        s[16] !== h ||
        s[17] !== n ||
        s[18] !== v ||
        s[19] !== w ||
        s[20] !== l ||
        s[21] !== a ||
        s[22] !== c.html
          ? ((o = (0, r.jsx)(iG.VisualizationDirectiveRenderer, {
              isActive: u,
              allowInteractions: !1,
              attributes: n,
              embeddedHtml: c.html,
              embeddedFrameKey: v,
              embeddedFillContainer: !0,
              embeddedLoadingFallback: b,
              embeddedInert: w,
              embeddedAnnotationsEnabled: !1,
              embeddedSizing: l,
              sandboxDocument: i_,
              onEmbeddedWheel: h,
              onSendFollowUpMessage: null,
              onSendUntrustedFollowUpMessage: null,
              showEmbeddedInlineActions: !1,
              title: a,
            })),
            (s[14] = u),
            (s[15] = b),
            (s[16] = h),
            (s[17] = n),
            (s[18] = v),
            (s[19] = w),
            (s[20] = l),
            (s[21] = a),
            (s[22] = c.html),
            (s[23] = o))
          : (o = s[23]),
        o
      )
    }
    function iZ(e) {
      return (
        document.addEventListener("visibilitychange", e),
        () => document.removeEventListener("visibilitychange", e)
      )
    }
    function iJ() {
      return !document.hidden
    }
    function iY() {
      return !1
    }
    var iQ = n("kmNp"),
      i0 = n("qUxy"),
      i1 = n("LtNS"),
      i2 = n("xSOA"),
      i4 = n("Sm6l"),
      i3 = n("bqtn"),
      i5 = n("DFf3"),
      i6 = (e) =>
        (0, r.jsx)("svg", {
          preserveAspectRatio: "none",
          overflow: "visible",
          style: { display: "block" },
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("g", {
            id: "Arrow",
            children: (0, r.jsx)("path", { id: "Vector", d: "M5 19L19 5M19 13V5H11", stroke: "black" }),
          }),
        }),
      i8 = n("l43M")
    function i9(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v = (0, i.c)(63),
        {
          capabilities: w,
          textInsertionActive: C,
          onAddSlide: S,
          slidePickerOpen: k,
          onInsertText: I,
          onInsertImage: E,
          onInsertChart: j,
          onInsertTable: M,
          onInsertShape: T,
          onGenerateImage: A,
          onGenerate: P,
        } = e,
        L = (0, ir.A)(),
        F = (0, ix.Zj)("1607004611"),
        R = (0, d.useRef)(null),
        D = (0, d.useRef)(!1),
        [N, z] = (0, d.useState)(!1),
        [B, O] = (0, d.useState)(null)
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e, t) => {
            O((n) => (t ? e : n === e ? null : n))
          }),
          (v[0] = t))
        : (t = v[0])
      let V = t
      v[1] !== E
        ? ((n = {
            mutationFn: async (e) => {
              let t = await (0, tr.I)(e)
              await E?.(t)
            },
          }),
          (v[1] = E),
          (v[2] = n))
        : (n = v[2])
      let H = (0, i2.n)(n)
      v[3] !== w.header ? ((l = w.header.includes("insert")), (v[3] = w.header), (v[4] = l)) : (l = v[4])
      let K = l,
        $ = K && F && null != P
      v[5] !== w.insert || v[6] !== E || v[7] !== K
        ? ((a = K && w.insert.includes("image") && null != E), (v[5] = w.insert), (v[6] = E), (v[7] = K), (v[8] = a))
        : (a = v[8])
      let q = a
      v[9] !== w.insert || v[10] !== j || v[11] !== K
        ? ((o = K && w.insert.includes("chart") && null != j), (v[9] = w.insert), (v[10] = j), (v[11] = K), (v[12] = o))
        : (o = v[12])
      let W = o
      v[13] !== w.insert || v[14] !== M || v[15] !== K
        ? ((s = K && w.insert.includes("table") && null != M),
          (v[13] = w.insert),
          (v[14] = M),
          (v[15] = K),
          (v[16] = s))
        : (s = v[16])
      let U = s
      v[17] !== w.insert || v[18] !== T || v[19] !== K
        ? ((c = K && w.insert.includes("rect") && null != T), (v[17] = w.insert), (v[18] = T), (v[19] = K), (v[20] = c))
        : (c = v[20])
      let G = c
      v[21] !== L
        ? ((u = L.formatMessage({ id: "presentationEditor.insert.image", defaultMessage: "Insert image" })),
          (v[21] = L),
          (v[22] = u))
        : (u = v[22])
      let _ = u
      return (
        v[23] !== w.insert || v[24] !== S || v[25] !== K || v[26] !== k
          ? ((p =
              K &&
              w.insert.includes("slide") &&
              (0, r.jsx)(i8.g, { action: "slide", expanded: k, onClick: (e) => S(e.currentTarget) })),
            (v[23] = w.insert),
            (v[24] = S),
            (v[25] = K),
            (v[26] = k),
            (v[27] = p))
          : (p = v[27]),
        v[28] !== w.insert || v[29] !== I || v[30] !== K || v[31] !== C
          ? ((h =
              K &&
              w.insert.includes("text") &&
              null != I &&
              (0, r.jsx)(i8.g, { action: "text", pressed: C, onClick: I })),
            (v[28] = w.insert),
            (v[29] = I),
            (v[30] = K),
            (v[31] = C),
            (v[32] = h))
          : (h = v[32]),
        v[33] !== A || v[34] !== q || v[35] !== H.isPending
          ? ((m =
              q &&
              (0, r.jsxs)(iy.OZ, {
                align: "start",
                contentWidth: "menuBounded",
                triggerButton: (0, r.jsx)(i8.g, { action: "image", loading: H.isPending }),
                children: [
                  (0, r.jsx)(i3.ms.Item, {
                    leftIcon: (0, r.jsx)(ip.T7p, {}),
                    onSelect: () => R.current?.click(),
                    children: (0, r.jsx)(ii.A, {
                      id: "presentationEditor.uploadImage",
                      defaultMessage: "Upload from computer",
                    }),
                  }),
                  null != A &&
                    (0, r.jsx)(i3.ms.Item, {
                      leftIconAsset: i0.r,
                      onSelect: A,
                      children: (0, r.jsx)(ii.A, {
                        id: "presentationEditor.generateImage",
                        defaultMessage: "Generate image",
                      }),
                    }),
                ],
              })),
            (v[33] = A),
            (v[34] = q),
            (v[35] = H.isPending),
            (v[36] = m))
          : (m = v[36]),
        v[37] !== L ||
        v[38] !== P ||
        v[39] !== j ||
        v[40] !== T ||
        v[41] !== M ||
        v[42] !== B ||
        v[43] !== W ||
        v[44] !== $ ||
        v[45] !== G ||
        v[46] !== U ||
        v[47] !== N
          ? ((f =
              ($ || W || U || G) &&
              (0, r.jsxs)(iy.OZ, {
                open: N,
                onOpenChange: (e) => {
                  ;(z(e), e || O(null))
                },
                onCloseAutoFocus: (e) => {
                  D.current && (e.preventDefault(), (D.current = !1))
                },
                align: "start",
                contentWidth: "menuBounded",
                triggerButton: (0, r.jsx)(i8.g, { action: "tools", expanded: N }),
                children: [
                  W &&
                    (0, r.jsx)(i7, {
                      open: "chart" === B,
                      onOpenChange: (e) => V("chart", e),
                      label: (0, r.jsx)(ii.A, { ...le.chart }),
                      leftIcon: (0, r.jsx)(ip.$n1, {}),
                      contentWidth: "menuBounded",
                      children: lt.map((e) => {
                        let { presetId: t, label: n, icon: i } = e
                        return (0, r.jsx)(
                          i3.ms.Item,
                          {
                            leftIconAsset: i,
                            onSelect: () => {
                              ;((D.current = !0), j(t))
                            },
                            children: (0, r.jsx)(ii.A, { ...n }),
                          },
                          t,
                        )
                      }),
                    }),
                  U &&
                    (0, r.jsx)(i3.ms.Item, {
                      leftIcon: (0, r.jsx)(ip.on4, {}),
                      onSelect: () => {
                        ;((D.current = !0), M())
                      },
                      children: (0, r.jsx)(ii.A, { ...le.table }),
                    }),
                  G &&
                    (0, r.jsx)(i7, {
                      open: "shapes" === B,
                      onOpenChange: (e) => V("shapes", e),
                      label: (0, r.jsx)(ii.A, { ...le.shapes }),
                      leftIcon: (0, r.jsx)(iq.I, { asset: i1.e }),
                      contentWidth: "menuBounded",
                      children: (0, r.jsx)("div", {
                        className: "grid grid-cols-4 gap-0.5 p-1",
                        children: ln.map((e) => {
                          let { geometry: t, label: n, arrowhead: i } = e
                          return (0, r.jsx)(
                            i3.ms.ItemSlot,
                            {
                              asChild: !0,
                              onSelect: () => {
                                ;((D.current = !0), T(t, i))
                              },
                              children: (0, r.jsx)(i4.$, {
                                className: "justify-self-center",
                                color: "ghostActive",
                                size: "formatToolbarIcon",
                                "aria-label": L.formatMessage(n),
                                title: L.formatMessage(n),
                                children: i
                                  ? (0, r.jsx)(i6, { className: "lineIcon-U9k9ZF" })
                                  : (0, r.jsx)(tY.U, { geometry: t, className: "size-4" }),
                              }),
                            },
                            `${t}-${i ?? "none"}`,
                          )
                        }),
                      }),
                    }),
                  $ &&
                    (0, r.jsx)(i3.ms.Item, {
                      leftIconAsset: iQ.N,
                      onSelect: () => {
                        ;((D.current = !0), P())
                      },
                      children: (0, r.jsx)(ii.A, {
                        id: "presentationEditor.insert.generate",
                        defaultMessage: "Generate",
                      }),
                    }),
                ],
              })),
            (v[37] = L),
            (v[38] = P),
            (v[39] = j),
            (v[40] = T),
            (v[41] = M),
            (v[42] = B),
            (v[43] = W),
            (v[44] = $),
            (v[45] = G),
            (v[46] = U),
            (v[47] = N),
            (v[48] = f))
          : (f = v[48]),
        v[49] !== H
          ? ((g = (e) => {
              let t = e.currentTarget.files?.[0]
              ;((e.currentTarget.value = ""), null != t && H.mutate(t))
            }),
            (v[49] = H),
            (v[50] = g))
          : (g = v[50]),
        v[51] !== _ || v[52] !== g
          ? ((x = (0, r.jsx)("input", {
              ref: R,
              className: "hidden",
              type: "file",
              accept: "image/*",
              "aria-label": _,
              onChange: g,
            })),
            (v[51] = _),
            (v[52] = g),
            (v[53] = x))
          : (x = v[53]),
        v[54] !== H.isError
          ? ((b =
              H.isError &&
              (0, r.jsx)("span", {
                role: "alert",
                className: "text-danger",
                children: (0, r.jsx)(ii.A, {
                  id: "presentationEditor.insert.imageError",
                  defaultMessage: "Couldn\u2019t load image. Try another file.",
                }),
              })),
            (v[54] = H.isError),
            (v[55] = b))
          : (b = v[55]),
        v[56] !== h || v[57] !== m || v[58] !== f || v[59] !== x || v[60] !== b || v[61] !== p
          ? ((y = (0, r.jsxs)(r.Fragment, { children: [p, h, m, f, x, b] })),
            (v[56] = h),
            (v[57] = m),
            (v[58] = f),
            (v[59] = x),
            (v[60] = b),
            (v[61] = p),
            (v[62] = y))
          : (y = v[62]),
        y
      )
    }
    function i7(e) {
      let t,
        n = (0, i.c)(2),
        l = (0, d.useRef)(null)
      return (
        n[0] !== e
          ? ((t = (0, r.jsx)("div", {
              onPointerEnter: (t) => {
                "mouse" === t.pointerType && (l.current?.focus(), e.onOpenChange?.(!0))
              },
              children: (0, r.jsx)(iy.Gs, { ...e, ref: l }),
            })),
            (n[0] = e),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    let le = (0, iM.YK)({
        chart: { id: "presentationEditor.insert.chart", defaultMessage: "Chart" },
        table: { id: "presentationEditor.insert.table", defaultMessage: "Table" },
        shapes: { id: "presentationEditor.insert.shapes", defaultMessage: "Shapes" },
        bar: { id: "presentationEditor.insert.bar", defaultMessage: "Bar" },
        line: { id: "presentationEditor.insert.lineChart", defaultMessage: "Line" },
        pie: { id: "presentationEditor.insert.pie", defaultMessage: "Pie" },
        area: { id: "presentationEditor.insert.area", defaultMessage: "Area" },
        scatter: { id: "presentationEditor.insert.scatter", defaultMessage: "Scatter" },
        histogram: { id: "presentationEditor.insert.histogram", defaultMessage: "Histogram" },
        waterfall: { id: "presentationEditor.insert.waterfall", defaultMessage: "Waterfall" },
        funnel: { id: "presentationEditor.insert.funnel", defaultMessage: "Funnel" },
        treemap: { id: "presentationEditor.insert.treemap", defaultMessage: "Treemap" },
        ellipse: { id: "presentationEditor.insert.ellipse", defaultMessage: "Circle" },
        rect: { id: "presentationEditor.insert.rect", defaultMessage: "Rectangle" },
        triangle: { id: "presentationEditor.insert.triangle", defaultMessage: "Triangle" },
        diamond: { id: "presentationEditor.insert.diamond", defaultMessage: "Diamond" },
        star: { id: "presentationEditor.insert.star", defaultMessage: "Star" },
        rightArrow: { id: "presentationEditor.insert.rightArrow", defaultMessage: "Right arrow" },
        leftArrow: { id: "presentationEditor.insert.leftArrow", defaultMessage: "Left arrow" },
        plus: { id: "presentationEditor.insert.plus", defaultMessage: "Plus" },
        chevron: { id: "presentationEditor.insert.chevron", defaultMessage: "Chevron" },
        callout: { id: "presentationEditor.insert.callout", defaultMessage: "Callout" },
        shapeArrow: { id: "artifacts.presentationEditor.insert.shapeArrow", defaultMessage: "Arrow" },
        shapeLine: { id: "presentationEditor.insert.shapeLine", defaultMessage: "Line" },
      }),
      lt = [
        { presetId: "column-clustered", label: le.bar, icon: i5.N.bar },
        { presetId: "line-simple", label: le.line, icon: i5.N.line },
        { presetId: "pie-simple", label: le.pie, icon: i5.N.pie },
        { presetId: "area-simple", label: le.area, icon: i5.N.area },
        { presetId: "scatter-points", label: le.scatter, icon: i5.N.scatter },
        { presetId: "histogram-auto", label: le.histogram, icon: i5.N.histogram },
        { presetId: "waterfall-changes", label: le.waterfall, icon: i5.N.waterfall },
        { presetId: "funnel-simple", label: le.funnel, icon: i5.N.funnel },
        { presetId: "treemap-grouped", label: le.treemap, icon: i5.N.treemap },
      ],
      ln = [
        { geometry: "ellipse", label: le.ellipse },
        { geometry: "rect", label: le.rect },
        { geometry: "triangle", label: le.triangle },
        { geometry: "diamond", label: le.diamond },
        { geometry: "star5", label: le.star },
        { geometry: "rightArrow", label: le.rightArrow },
        { geometry: "leftArrow", label: le.leftArrow },
        { geometry: "plus", label: le.plus },
        { geometry: "chevron", label: le.chevron },
        { geometry: "wedgeRectCallout", label: le.callout },
        { geometry: "line", label: le.shapeLine },
        { geometry: "line", arrowhead: "arrow", label: le.shapeArrow },
      ],
      lr = [
        {
          handle: "nw",
          x: 0,
          y: 0,
          cursor: "cursor-nwse-resize",
          markerClassName: "size-3.75 translate-x-1.5 translate-y-1.5 border-t-3 border-l-3",
        },
        { handle: "n", x: 0.5, y: 0, cursor: "cursor-ns-resize", markerClassName: "h-0.75 w-4 bg-blue" },
        {
          handle: "ne",
          x: 1,
          y: 0,
          cursor: "cursor-nesw-resize",
          markerClassName: "size-3.75 -translate-x-1.5 translate-y-1.5 border-t-3 border-r-3",
        },
        { handle: "e", x: 1, y: 0.5, cursor: "cursor-ew-resize", markerClassName: "h-4 w-0.75 bg-blue" },
        {
          handle: "se",
          x: 1,
          y: 1,
          cursor: "cursor-nwse-resize",
          markerClassName: "size-3.75 -translate-x-1.5 -translate-y-1.5 border-r-3 border-b-3",
        },
        { handle: "s", x: 0.5, y: 1, cursor: "cursor-ns-resize", markerClassName: "h-0.75 w-4 bg-blue" },
        {
          handle: "sw",
          x: 0,
          y: 1,
          cursor: "cursor-nesw-resize",
          markerClassName: "size-3.75 translate-x-1.5 -translate-y-1.5 border-b-3 border-l-3",
        },
        { handle: "w", x: 0, y: 0.5, cursor: "cursor-ew-resize", markerClassName: "h-4 w-0.75 bg-blue" },
      ]
    function li(e) {
      let t,
        n,
        l,
        a,
        o,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b = (0, i.c)(41),
        { controller: y, snapshot: v, isEditing: w, shortcutScopeElement: C, focusStage: S } = e,
        k = (0, ir.A)(),
        I = (0, d.useRef)(null),
        E = v.imageCrop,
        j = v.slideRect
      if (!w || !E || !j || !C) return null
      let { crop: M, framing: T, sourceFrame: A, source: P } = E,
        L = T.frame,
        F = j.scale,
        R = (A.left - L.left) * F,
        D = (A.top - L.top) * F,
        N = A.width * F,
        z = A.height * F,
        B = j.left + L.left * F,
        O = j.top + L.top * F,
        V = (e) => {
          ;((I.current = null), y.dispatch({ kind: "finish-image-crop", commit: e }), S())
        }
      b[0] !== F || b[1] !== C || b[2] !== j.left || b[3] !== j.top
        ? ((t = (e, t) => {
            let n = (0, tB.f)(C, e, t)
            return { x: (n.x - j.left) / F, y: (n.y - j.top) / F }
          }),
          (b[0] = F),
          (b[1] = C),
          (b[2] = j.left),
          (b[3] = j.top),
          (b[4] = t))
        : (t = b[4])
      let H = t,
        K = (e) => ({
          onPointerDown: (t) => {
            0 === t.button &&
              null == I.current &&
              (t.preventDefault(),
              t.stopPropagation(),
              t.currentTarget.focus(),
              t.currentTarget.setPointerCapture(t.pointerId),
              (I.current = t.pointerId),
              y.interactWithImageCrop({ phase: "start", handle: e, point: H(t.clientX, t.clientY) }))
          },
          onPointerMove: (e) => {
            I.current === e.pointerId && y.interactWithImageCrop({ phase: "move", point: H(e.clientX, e.clientY) })
          },
          onPointerUp: (e) => {
            I.current === e.pointerId &&
              (y.interactWithImageCrop({ phase: "end", point: H(e.clientX, e.clientY) }),
              (I.current = null),
              e.currentTarget.releasePointerCapture(e.pointerId))
          },
          onLostPointerCapture: () => {
            ;(null != I.current && y.interactWithImageCrop({ phase: "cancel" }), (I.current = null))
          },
          onKeyDown: (t) => {
            let n = t.shiftKey ? 10 : 1,
              r = 0,
              i = 0
            ;("ArrowLeft" === t.key && (r = -n),
              "ArrowRight" === t.key && (r = n),
              "ArrowUp" === t.key && (i = -n),
              "ArrowDown" === t.key && (i = n),
              (r || i) && (t.preventDefault(), y.interactWithImageCrop({ phase: "nudge", handle: e, dx: r, dy: i })))
          },
        })
      ;(b[5] !== k ? ((n = k.formatMessage(la.title)), (b[5] = k), (b[6] = n)) : (n = b[6]),
        b[7] !== V
          ? ((l = (e) => {
              ;(e.stopPropagation(),
                ("Escape" === e.key ||
                  ("Enter" === e.key &&
                    e.target instanceof HTMLElement &&
                    e.target.hasAttribute("data-crop-handle"))) &&
                  (e.preventDefault(), V("Enter" === e.key)))
            }),
            (b[7] = V),
            (b[8] = l))
          : (l = b[8]),
        b[9] !== k ? ((a = k.formatMessage(la.outside)), (b[9] = k), (b[10] = a)) : (a = b[10]),
        b[11] !== V ? ((o = () => V(!0)), (b[11] = V), (b[12] = o)) : (o = b[12]),
        b[13] !== a || b[14] !== o
          ? ((c = (0, r.jsx)("button", {
              type: "button",
              tabIndex: -1,
              className: "pointer-events-auto absolute inset-0",
              "aria-label": a,
              onClick: o,
            })),
            (b[13] = a),
            (b[14] = o),
            (b[15] = c))
          : (c = b[15]))
      let $ = L.width * F,
        q = L.height * F,
        W = `rotate(${L.rotation ?? 0}deg) scale(${T.flipHorizontal ? -1 : 1}, ${T.flipVertical ? -1 : 1})`
      ;(b[16] !== B || b[17] !== $ || b[18] !== q || b[19] !== W || b[20] !== O
        ? ((u = { left: B, top: O, width: $, height: q, transform: W }),
          (b[16] = B),
          (b[17] = $),
          (b[18] = q),
          (b[19] = W),
          (b[20] = O),
          (b[21] = u))
        : (u = b[21]),
        b[22] !== z || b[23] !== R || b[24] !== D || b[25] !== N
          ? ((p = { left: R, top: D, width: N, height: z }),
            (b[22] = z),
            (b[23] = R),
            (b[24] = D),
            (b[25] = N),
            (b[26] = p))
          : (p = b[26]),
        b[27] !== P
          ? ((h = (0, r.jsx)("img", {
              src: P,
              alt: "",
              draggable: !1,
              className: "pointer-events-none absolute inset-0 size-full opacity-40",
            })),
            (b[27] = P),
            (b[28] = h))
          : (h = b[28]))
      let U = `inset(${100 * M.top}% ${100 * M.right}% ${100 * M.bottom}% ${100 * M.left}%)`
      ;(b[29] !== U ? ((m = { clipPath: U }), (b[29] = U), (b[30] = m)) : (m = b[30]),
        b[31] !== P || b[32] !== m
          ? ((f = (0, r.jsx)("img", {
              src: P,
              alt: "",
              draggable: !1,
              className: "pointer-events-none absolute inset-0 size-full",
              style: m,
            })),
            (b[31] = P),
            (b[32] = m),
            (b[33] = f))
          : (f = b[33]))
      let G = `${100 * M.left}%`,
        _ = `${100 * M.top}%`,
        X = `${(1 - M.left - M.right) * 100}%`,
        Z = `${(1 - M.top - M.bottom) * 100}%`
      return (
        b[34] !== G || b[35] !== _ || b[36] !== X || b[37] !== Z
          ? ((g = { left: G, top: _, width: X, height: Z }),
            (b[34] = G),
            (b[35] = _),
            (b[36] = X),
            (b[37] = Z),
            (b[38] = g))
          : (g = b[38]),
        b[39] !== k ? ((x = k.formatMessage(la.move)), (b[39] = k), (b[40] = x)) : (x = b[40]),
        (0, r.jsxs)("div", {
          className: "pointer-events-none absolute inset-0 select-none",
          "data-presentation-image-crop": !0,
          role: "group",
          "aria-label": n,
          onPointerDown: ll,
          onKeyDown: l,
          children: [
            c,
            (0, r.jsx)("div", {
              className: "pointer-events-auto absolute",
              style: u,
              children: (0, r.jsxs)("div", {
                className: "absolute bg-surface ring-1 ring-blue/40",
                style: p,
                children: [
                  h,
                  f,
                  (0, r.jsxs)("div", {
                    className: "absolute border border-blue",
                    style: g,
                    children: [
                      (0, r.jsx)("button", {
                        autoFocus: !0,
                        "data-crop-handle": !0,
                        type: "button",
                        className:
                          "absolute inset-0 size-full cursor-move touch-none focus-visible:outline-2 focus-visible:outline-ring",
                        "aria-label": x,
                        ...K("move"),
                      }),
                      lr.map((e) => {
                        let { handle: t, x: n, y: i, cursor: l, markerClassName: a } = e
                        return (0, r.jsx)(
                          "button",
                          {
                            "data-crop-handle": !0,
                            type: "button",
                            className: (0, s.A)(
                              "absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center touch-none rounded-none focus-visible:outline-2 focus-visible:outline-ring",
                              l,
                            ),
                            style: {
                              left: `calc(${100 * n}% + ${n - 0.5}px)`,
                              top: `calc(${100 * i}% + ${i - 0.5}px)`,
                            },
                            "aria-label": k.formatMessage(la[t]),
                            ...K(t),
                            children: (0, r.jsx)("span", { className: (0, s.A)("pointer-events-none border-blue", a) }),
                          },
                          t,
                        )
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      )
    }
    function ll(e) {
      return e.stopPropagation()
    }
    let la = (0, iM.YK)({
      title: { id: "presentationEditor.canvasCrop", defaultMessage: "Crop image" },
      outside: { id: "presentationEditor.finishCropOutside", defaultMessage: "Finish cropping" },
      move: { id: "presentationEditor.moveCrop", defaultMessage: "Move crop area" },
      n: { id: "presentationEditor.cropTop", defaultMessage: "Crop top" },
      ne: { id: "presentationEditor.cropTopRight", defaultMessage: "Crop top right" },
      e: { id: "presentationEditor.cropRight", defaultMessage: "Crop right" },
      se: { id: "presentationEditor.cropBottomRight", defaultMessage: "Crop bottom right" },
      s: { id: "presentationEditor.cropBottom", defaultMessage: "Crop bottom" },
      sw: { id: "presentationEditor.cropBottomLeft", defaultMessage: "Crop bottom left" },
      w: { id: "presentationEditor.cropLeft", defaultMessage: "Crop left" },
      nw: { id: "presentationEditor.cropTopLeft", defaultMessage: "Crop top left" },
    })
    var lo = n("LMaG"),
      ls = n("OZpX"),
      ld = n("nzx4"),
      lc = n("WjTF"),
      lu = n("I1iB")
    function lp(e) {
      let t,
        n,
        l,
        a,
        o,
        s = (0, i.c)(19),
        { label: d, value: c, suffix: u, min: p, max: h, onChange: m, presets: f, side: g, menuPlacement: x } = e,
        b = void 0 === p ? 0 : p
      s[0] !== f ? ((t = void 0 === f ? [0, 1, 2, 4, 8] : f), (s[0] = f), (s[1] = t)) : (t = s[1])
      let y = t,
        v = void 0 === g ? "left" : g
      return (
        s[2] !== d ? ((n = (0, r.jsx)("span", { children: d })), (s[2] = d), (s[3] = n)) : (n = s[3]),
        s[4] !== y ? ((l = y.map(lh)), (s[4] = y), (s[5] = l)) : (l = s[5]),
        s[6] !== d ||
        s[7] !== h ||
        s[8] !== x ||
        s[9] !== b ||
        s[10] !== m ||
        s[11] !== v ||
        s[12] !== u ||
        s[13] !== l ||
        s[14] !== c
          ? ((a = (0, r.jsx)(lu.D, {
              label: d,
              value: c,
              suffix: u,
              min: b,
              max: h,
              onChange: m,
              side: v,
              menuPlacement: x,
              presets: l,
            })),
            (s[6] = d),
            (s[7] = h),
            (s[8] = x),
            (s[9] = b),
            (s[10] = m),
            (s[11] = v),
            (s[12] = u),
            (s[13] = l),
            (s[14] = c),
            (s[15] = a))
          : (a = s[15]),
        s[16] !== n || s[17] !== a
          ? ((o = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [n, a],
            })),
            (s[16] = n),
            (s[17] = a),
            (s[18] = o))
          : (o = s[18]),
        o
      )
    }
    function lh(e) {
      return { value: e }
    }
    function lm(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c,
        u,
        p = (0, i.c)(30),
        { palette: h, selection: m, onChange: f, collapsible: g, borderOnly: x, trigger: b } = e,
        y = void 0 === g || g,
        v = void 0 !== x && x,
        w = (0, ir.A)(),
        [C, S] = (0, d.useState)(!1)
      if (
        p[0] !== v ||
        p[1] !== y ||
        p[2] !== w ||
        p[3] !== f ||
        p[4] !== C ||
        p[5] !== h ||
        p[6] !== m ||
        p[7] !== b
      ) {
        s = Symbol.for("react.early_return_sentinel")
        e: {
          let e = m.flatMap(lb),
            i = e[0],
            d = e.some(lx),
            c = (t) => (e.every((e) => e[t] === i?.[t]) ? (i?.[t] ?? null) : null),
            u = d || v ? c("style") : "none"
          if (!i) {
            s = null
            break e
          }
          let g = { strokeColor: i.color, strokeWidth: 1, strokeOpacityPct: 100 },
            x = ["none", "solid", "dashed", "dotted", "dash-dot", "dash-dot-dot"]
              .filter((e) => !v || "none" !== e)
              .map((e) =>
                (0, r.jsx)(
                  i3.ms.Item,
                  {
                    rightIcon: u === e ? (0, r.jsx)(ip.ALZ, {}) : void 0,
                    onSelect: (t) => {
                      "none" === e
                        ? f({ strokeWidth: 0 })
                        : (null == b || d || v || t.preventDefault(),
                          f(d ? { strokeStyle: e } : { ...g, strokeStyle: e }))
                    },
                    children: (0, r.jsx)(ii.A, { ...ly[e] }),
                  },
                  e,
                ),
              )
          if (null != b && !d && !v) {
            let e
            ;(p[14] !== C || p[15] !== x || p[16] !== b
              ? ((e = (0, r.jsx)(i3.Ab, {
                  open: C,
                  onOpenChange: S,
                  align: "start",
                  contentRef: lg,
                  contentClassName: "min-w-50",
                  triggerButton: b,
                  children: x,
                })),
                (p[14] = C),
                (p[15] = x),
                (p[16] = b),
                (p[17] = e))
              : (e = p[17]),
              (s = e))
            break e
          }
          ;((t = ls.l),
            (n = y && !d),
            p[18] !== y
              ? ((l = y ? (0, r.jsx)(ii.A, { id: "presentationEditor.border", defaultMessage: "Border" }) : void 0),
                (p[18] = y),
                (p[19] = l))
              : (l = p[19]),
            (a = y
              ? (0, r.jsx)(lc.p, {
                  enabled: d,
                  label: w.formatMessage({ id: "presentationEditor.toggleBorder", defaultMessage: "Toggle border" }),
                  onClick: () => f(d ? { strokeWidth: 0 } : g),
                })
              : void 0),
            (o =
              (d || !y) &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(i3.Ab, {
                    contentRef: lf,
                    side: "left",
                    align: "start",
                    contentClassName: "min-w-50",
                    triggerButton: (0, r.jsxs)(i4.$, {
                      className: "w-full justify-between",
                      color: "field",
                      contentLayout: "dropdown",
                      size: "field",
                      "aria-label": w.formatMessage({
                        id: "presentationEditor.borderStyle",
                        defaultMessage: "Border style",
                      }),
                      children: [
                        null == u
                          ? (0, r.jsx)(ii.A, { id: "presentationEditor.mixed", defaultMessage: "Mixed" })
                          : (0, r.jsx)(ii.A, { ...ly[u] }),
                        (0, r.jsx)(ip.HIf, {}),
                      ],
                    }),
                    children: x,
                  }),
                  (d || v) &&
                    (0, r.jsxs)("div", {
                      className: v ? "flex flex-col gap-2" : "grid grid-cols-2 items-end gap-2",
                      children: [
                        !v &&
                          (0, r.jsxs)("div", {
                            className: "flex min-w-0 flex-col gap-1.5",
                            "data-inspector-field-label": !0,
                            children: [
                              (0, r.jsx)("span", {
                                className: "text-xs text-secondary",
                                children: (0, r.jsx)(ii.A, {
                                  id: "presentationEditor.borderColorLabel",
                                  defaultMessage: "Color",
                                }),
                              }),
                              (0, r.jsx)(lo.v, {
                                side: "left",
                                palette: h,
                                label: w.formatMessage({
                                  id: "presentationEditor.borderColor",
                                  defaultMessage: "Border color",
                                }),
                                color: null == c("opacityPct") ? null : c("color"),
                                onChange: (e) => f({ strokeColor: e }),
                              }),
                            ],
                          }),
                        (0, r.jsx)(lp, {
                          side: "bottom",
                          label: w.formatMessage({ id: "presentationEditor.borderWeight", defaultMessage: "Weight" }),
                          value: c("width"),
                          onChange: (e) => f(!d && e > 0 ? { ...g, strokeWidth: e } : { strokeWidth: e }),
                        }),
                      ],
                    }),
                ],
              })))
        }
        ;((p[0] = v),
          (p[1] = y),
          (p[2] = w),
          (p[3] = f),
          (p[4] = C),
          (p[5] = h),
          (p[6] = m),
          (p[7] = b),
          (p[8] = t),
          (p[9] = n),
          (p[10] = l),
          (p[11] = a),
          (p[12] = o),
          (p[13] = s))
      } else ((t = p[8]), (n = p[9]), (l = p[10]), (a = p[11]), (o = p[12]), (s = p[13]))
      if (s !== Symbol.for("react.early_return_sentinel")) return s
      p[20] !== t || p[21] !== n || p[22] !== l || p[23] !== a || p[24] !== o
        ? ((c = (0, r.jsx)(t, { collapsed: n, title: l, action: a, children: o })),
          (p[20] = t),
          (p[21] = n),
          (p[22] = l),
          (p[23] = a),
          (p[24] = o),
          (p[25] = c))
        : (c = p[25])
      let k = c
      return (
        p[26] !== k || p[27] !== C || p[28] !== b
          ? ((u =
              null == b
                ? k
                : (0, r.jsxs)(ld.AM, {
                    open: C,
                    onOpenChange: S,
                    children: [
                      (0, r.jsx)(ld.Wv, { asChild: !0, children: b }),
                      (0, r.jsx)(ld.hl, {
                        "data-popcorn-edit-toolbar-root": "true",
                        size: "content",
                        variant: "menu",
                        children: (0, r.jsx)("div", { className: "flex w-66 flex-col gap-3 p-2", children: k }),
                      }),
                    ],
                  })),
            (p[26] = k),
            (p[27] = C),
            (p[28] = b),
            (p[29] = u))
          : (u = p[29]),
        u
      )
    }
    function lf(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function lg(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function lx(e) {
      return e.width > 0
    }
    function lb(e) {
      return e.line ? [e.line] : []
    }
    let ly = (0, iM.YK)({
      none: { id: "presentationEditor.borderNone", defaultMessage: "No border" },
      solid: { id: "presentationEditor.borderSolid", defaultMessage: "Solid" },
      dashed: { id: "presentationEditor.borderDashed", defaultMessage: "Dashed" },
      dotted: { id: "presentationEditor.borderDotted", defaultMessage: "Dotted" },
      "dash-dot": { id: "presentationEditor.borderDashDot", defaultMessage: "Dash-dot" },
      "dash-dot-dot": { id: "presentationEditor.borderDashDotDot", defaultMessage: "Dash-dot-dot" },
    })
    var lv = n("gxiE"),
      lw = n("fPyj"),
      lC = n("ahss"),
      lS = n("vGEi"),
      lk = n("VhB8"),
      lI = n("eMUO"),
      lE = n("ESTr")
    let lj = (0, lE.a)({
      name: "gradient-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 8, y: 8 },
        insets: { top: 1.474609, right: 1.47461, bottom: 1.47461, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M1.47461 8C1.47461 4.39613 4.39613 1.47461 8 1.47461C11.6039 1.47461 14.5254 4.39613 14.5254 8C14.5254 11.6039 11.6039 14.5254 8 14.5254C4.39613 14.5254 1.47461 11.6039 1.47461 8ZM4.32715 12.0596C5.29842 12.9388 6.58652 13.4746 8 13.4746C9.41348 13.4746 10.7016 12.9388 11.6729 12.0596H4.32715ZM2.55957 8.60352C2.65628 9.48539 2.96201 10.3038 3.42676 11.0088H12.5732C13.038 10.3038 13.3437 9.48539 13.4404 8.60352H2.55957ZM3.32617 5.14844C2.8916 5.85924 2.61575 6.67679 2.54492 7.55273H13.4551C13.3842 6.67679 13.1084 5.85924 12.6738 5.14844H3.32617ZM8 2.52539C6.50452 2.52539 5.15013 3.12586 4.16211 4.09766H11.8379C10.8499 3.12586 9.49548 2.52539 8 2.52539Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var lM = n("EShr"),
      lT = n("IMM6"),
      lA = n("oZzx"),
      lP = n("tgex")
    function lL(e, t = 1e5, n = "linear", r = 0) {
      let i = e
        .toSorted((e, t) => e.offset - t.offset)
        .map(
          (e) =>
            `${e.color}${Math.round((e.opacityPct / 100) * 255)
              .toString(16)
              .padStart(2, "0")} ${(e.offset / t) * 100}%`,
        )
        .join(", ")
      return "path" === n ? `radial-gradient(circle, ${i})` : `linear-gradient(${r + 90}deg, ${i})`
    }
    function lF(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c = (0, i.c)(13),
        {
          stopIdPrefix: u,
          value: p,
          presentationVersion: h,
          selectedIndex: m,
          onSelect: f,
          onOpenColor: g,
          onChange: x,
          onRemove: b,
          onAdd: y,
        } = e,
        v = (0, ir.A)(),
        w = (0, d.useRef)(null)
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (c[0] = t)) : (t = c[0])
      let C = (0, d.useRef)(t),
        S = (0, d.useRef)(null),
        k = (0, d.useRef)(!1),
        I = (0, d.useRef)(null),
        [E, j] = (0, d.useState)(null),
        M = null != E && E.baseFill === p.fill && (E.committed || E.version === h)
      null == E || M || j(null)
      let T = p.fill.offsetScale ?? 1e5
      c[1] !== E || c[2] !== M || c[3] !== p.stops
        ? ((n = (e, t) => ({ ...p.stops[t], offset: M && E.index === t ? E.offset : e.offset })),
          (c[1] = E),
          (c[2] = M),
          (c[3] = p.stops),
          (c[4] = n))
        : (n = c[4])
      let A = p.fill.stops.map(n),
        P = () => {
          I.current?.stop()
        }
      return (
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = () => () => {
              I.current?.stop()
            }),
            (a = []),
            (c[5] = l),
            (c[6] = a))
          : ((l = c[5]), (a = c[6])),
        (0, d.useEffect)(l, a),
        c[7] !== v
          ? ((o = v.formatMessage({ id: "presentationEditor.addGradientStop", defaultMessage: "Add color stop" })),
            (c[7] = v),
            (c[8] = o))
          : (o = c[8]),
        c[9] !== y || c[10] !== T || c[11] !== p.fill.stops.length
          ? ((s = (e) => {
              let t = e.currentTarget.getBoundingClientRect()
              ;((S.current = p.fill.stops.length),
                y(0 === e.detail ? T / 2 : Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)) * T))
            }),
            (c[9] = y),
            (c[10] = T),
            (c[11] = p.fill.stops.length),
            (c[12] = s))
          : (s = c[12]),
        (0, r.jsxs)("div", {
          className: "relative",
          dir: "ltr",
          children: [
            (0, r.jsx)("button", {
              ref: w,
              type: "button",
              className:
                "block h-4 w-full cursor-crosshair rounded-full border border-default bg-no-repeat bg-origin-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              "aria-label": o,
              onClick: s,
              style: { backgroundImage: lL(A, T) },
            }),
            A.map((e, t) =>
              (0, r.jsx)(
                i4.$,
                {
                  id: `${u}-${t}`,
                  ref: (e) => {
                    ;((C.current[t] = e), null != e && S.current === t && ((S.current = null), e.focus()))
                  },
                  className: "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 touch-none",
                  color: m === t ? "accent" : "elevatedSurface",
                  "aria-current": m === t ? "true" : void 0,
                  size: "iconCircleSm",
                  role: "slider",
                  "aria-label": v.formatMessage(
                    { id: "presentationEditor.gradientStop", defaultMessage: "Color stop {number}" },
                    { number: t + 1 },
                  ),
                  "aria-valuemin": 0,
                  "aria-valuemax": 100,
                  "aria-valuenow": (e.offset / T) * 100,
                  "aria-valuetext": v.formatNumber(e.offset / T, { style: "percent", maximumFractionDigits: 1 }),
                  style: { left: `${(e.offset / T) * 100}%` },
                  onFocus: () => f(t),
                  onClick: () => {
                    ;(f(t), k.current || g(t), (k.current = !1))
                  },
                  onPointerDown: (t) => {
                    if (0 !== t.button || !1 === t.isPrimary) return
                    ;(t.preventDefault(), t.stopPropagation(), (k.current = !1), t.currentTarget.focus())
                    let n = w.current?.getBoundingClientRect()
                    if (null == n || 0 === n.width) return
                    ;(P(), t.currentTarget.setPointerCapture(t.pointerId))
                    let r = t.currentTarget.ownerDocument.defaultView,
                      i = () => {
                        ;((I.current = null), j(null), r?.removeEventListener("blur", i))
                      }
                    ;((I.current = {
                      pointerId: t.pointerId,
                      version: h,
                      startX: t.clientX,
                      startOffset: e.offset,
                      width: n.width,
                      offset: e.offset,
                      stop: i,
                    }),
                      r?.addEventListener("blur", i))
                  },
                  onPointerMove: (e) => {
                    let n = I.current
                    n?.pointerId === e.pointerId &&
                      n.version === h &&
                      ((n.offset = Math.max(0, Math.min(T, n.startOffset + ((e.clientX - n.startX) / n.width) * T))),
                      (k.current = k.current || n.offset !== n.startOffset),
                      j({ index: t, version: n.version, offset: n.offset, baseFill: p.fill, committed: !1 }))
                  },
                  onPointerUp: (e) => {
                    let n = I.current
                    n?.pointerId === e.pointerId &&
                      (P(),
                      n.version === h &&
                        n.offset !== p.fill.stops[t].offset &&
                        (j({ index: t, version: n.version, offset: n.offset, baseFill: p.fill, committed: !0 }),
                        x(t, n.offset)))
                  },
                  onPointerCancel: P,
                  onLostPointerCapture: P,
                  onKeyDown: (n) => {
                    if ("Escape" === n.key && null != I.current) {
                      ;(n.preventDefault(), n.stopPropagation(), P())
                      return
                    }
                    if ("Delete" === n.key || "Backspace" === n.key) {
                      ;(n.preventDefault(),
                        n.stopPropagation(),
                        P(),
                        p.fill.stops.length > 2 && (C.current[Math.max(0, t - 1)]?.focus(), b(t)))
                      return
                    }
                    let r = e.offset
                    switch (n.key) {
                      case "ArrowLeft":
                      case "ArrowDown":
                        r -= (T / 100) * (n.shiftKey ? 10 : 1)
                        break
                      case "ArrowRight":
                      case "ArrowUp":
                        r += (T / 100) * (n.shiftKey ? 10 : 1)
                        break
                      case "Home":
                        r = 0
                        break
                      case "End":
                        r = T
                        break
                      default:
                        return
                    }
                    ;(n.preventDefault(), n.stopPropagation(), x(t, Math.max(0, Math.min(T, r))))
                  },
                  children: (0, r.jsx)(lT.b, { color: e.color }),
                },
                t,
              ),
            ),
          ],
        })
      )
    }
    function lR(e) {
      let t,
        n,
        l,
        a,
        o = (0, i.c)(12),
        { label: s, value: d, onChange: c, side: u } = e,
        p = void 0 === u ? "bottom" : u,
        h = (0, ir.A)()
      o[0] !== h || o[1] !== s
        ? ((t = s ?? h.formatMessage({ id: "presentationEditor.opacity", defaultMessage: "Opacity" })),
          (o[0] = h),
          (o[1] = s),
          (o[2] = t))
        : (t = o[2])
      let m = t
      return (
        o[3] === Symbol.for("react.memo_cache_sentinel") ? ((n = [100, 75, 50, 25, 0]), (o[3] = n)) : (n = o[3]),
        o[4] !== h
          ? ((l = n.map((e) => ({ value: e, label: h.formatNumber(e / 100, { style: "percent" }) }))),
            (o[4] = h),
            (o[5] = l))
          : (l = o[5]),
        o[6] !== c || o[7] !== m || o[8] !== p || o[9] !== l || o[10] !== d
          ? ((a = (0, r.jsx)(lu.D, {
              label: m,
              value: d,
              onChange: c,
              side: p,
              min: 0,
              max: 100,
              suffix: "%",
              presets: l,
            })),
            (o[6] = c),
            (o[7] = m),
            (o[8] = p),
            (o[9] = l),
            (o[10] = d),
            (o[11] = a))
          : (a = o[11]),
        a
      )
    }
    function lD(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v,
        w,
        C,
        S,
        k,
        I = (0, i.c)(76),
        { value: E, presentationVersion: j, palette: M, onChange: T } = e,
        A = (0, ir.A)(),
        P = (0, d.useId)(),
        [L, F] = (0, d.useState)(0),
        [R, D] = (0, d.useState)(null),
        N = Math.min(L, E.fill.stops.length - 1),
        z = E.fill.gradientKind ?? "linear"
      if (I[0] !== E.fill.stops || I[1] !== E.stops) {
        let e
        ;(I[3] !== E.stops
          ? ((e = (e, t) => ({ ...E.stops[t], offset: e.offset, index: t })), (I[3] = E.stops), (I[4] = e))
          : (e = I[4]),
          (t = E.fill.stops.map(e).toSorted(lz)),
          (I[0] = E.fill.stops),
          (I[1] = E.stops),
          (I[2] = t))
      } else t = I[2]
      let B = t
      I[5] !== T || I[6] !== E.fill
        ? ((n = (e, t) => {
            T({ ...E.fill, stops: E.fill.stops.map((n, r) => (r === e ? { ...n, ...t } : n)) })
          }),
          (I[5] = T),
          (I[6] = E.fill),
          (I[7] = n))
        : (n = I[7])
      let O = n
      I[8] !== T || I[9] !== E.fill
        ? ((l = (e) => {
            ;(D(null), F(Math.max(0, e - 1)), T({ ...E.fill, stops: E.fill.stops.filter((t, n) => n !== e) }))
          }),
          (I[8] = T),
          (I[9] = E.fill),
          (I[10] = l))
        : (l = I[10])
      let V = l
      I[11] !== T || I[12] !== B || I[13] !== E.fill
        ? ((a = (e) => {
            let t = B.find((t) => t.offset >= e) ?? B[B.length - 1],
              n = B.findLast((t) => t.offset < e) ?? B[0],
              r = t.offset === n.offset ? 0 : (e - n.offset) / (t.offset - n.offset),
              i = [1, 3, 5]
                .map((e) => {
                  let i = Number.parseInt(n.color.slice(e, e + 2), 16)
                  return Math.round(i + (Number.parseInt(t.color.slice(e, e + 2), 16) - i) * r)
                    .toString(16)
                    .padStart(2, "0")
                })
                .join(""),
              l = n.opacityPct + (t.opacityPct - n.opacityPct) * r
            ;(F(E.fill.stops.length), T({ ...E.fill, stops: [...E.fill.stops, { offset: e, color: `#${i}/${l}%` }] }))
          }),
          (I[11] = T),
          (I[12] = B),
          (I[13] = E.fill),
          (I[14] = a))
        : (a = I[14])
      let H = a
      ;(I[15] !== O ? ((o = (e, t) => O(e, { offset: t })), (I[15] = O), (I[16] = o)) : (o = I[16]),
        I[17] !== H || I[18] !== j || I[19] !== V || I[20] !== N || I[21] !== P || I[22] !== o || I[23] !== E
          ? ((s = (0, r.jsx)(lF, {
              stopIdPrefix: P,
              value: E,
              presentationVersion: j,
              selectedIndex: N,
              onSelect: F,
              onOpenColor: D,
              onChange: o,
              onRemove: V,
              onAdd: H,
            })),
            (I[17] = H),
            (I[18] = j),
            (I[19] = V),
            (I[20] = N),
            (I[21] = P),
            (I[22] = o),
            (I[23] = E),
            (I[24] = s))
          : (s = I[24]))
      let K = "linear" === z ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2"
      ;(I[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, r.jsx)(ii.A, { id: "presentationEditor.gradientTypeLabel", defaultMessage: "Type" })), (I[25] = c))
        : (c = I[25]),
        I[26] !== A
          ? ((u = A.formatMessage({ id: "presentationEditor.gradientType", defaultMessage: "Gradient type" })),
            (I[26] = A),
            (I[27] = u))
          : (u = I[27]))
      let $ = lB[z]
      if (
        (I[28] !== $ ? ((p = (0, r.jsx)(ii.A, { ...$ })), (I[28] = $), (I[29] = p)) : (p = I[29]),
        I[30] === Symbol.for("react.memo_cache_sentinel") ? ((h = (0, r.jsx)(ip.HIf, {})), (I[30] = h)) : (h = I[30]),
        I[31] !== p || I[32] !== u
          ? ((m = (0, r.jsxs)(lw.c, { className: "w-full justify-between", "aria-label": u, children: [p, h] })),
            (I[31] = p),
            (I[32] = u),
            (I[33] = m))
          : (m = I[33]),
        I[34] === Symbol.for("react.memo_cache_sentinel") ? ((f = ["linear", "path"]), (I[34] = f)) : (f = I[34]),
        I[35] !== z || I[36] !== T || I[37] !== E.fill
          ? ((g = f.map((e) =>
              (0, r.jsx)(
                i3.ms.RadioItem,
                {
                  value: e,
                  onSelect: () => {
                    e !== z &&
                      T({
                        ...E.fill,
                        gradientKind: e,
                        pathType: "path" === e ? lP.Iq.GRADIENT_PATH_TYPE_CIRCLE : void 0,
                        fillRect: void 0,
                      })
                  },
                  children: (0, r.jsx)(ii.A, { ...lB[e] }),
                },
                e,
              ),
            )),
            (I[35] = z),
            (I[36] = T),
            (I[37] = E.fill),
            (I[38] = g))
          : (g = I[38]),
        I[39] !== z || I[40] !== g
          ? ((x = (0, r.jsx)(i3.ms.RadioGroup, { value: z, children: g })), (I[39] = z), (I[40] = g), (I[41] = x))
          : (x = I[41]),
        I[42] !== m || I[43] !== x
          ? ((b = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [
                c,
                (0, r.jsx)(i3.Ab, { side: "bottom", align: "start", contentRef: lN, triggerButton: m, children: x }),
              ],
            })),
            (I[42] = m),
            (I[43] = x),
            (I[44] = b))
          : (b = I[44]),
        I[45] !== A || I[46] !== z || I[47] !== T || I[48] !== E.fill
          ? ((y =
              "linear" === z &&
              (0, r.jsx)(lp, {
                label: A.formatMessage({ id: "presentationEditor.gradientAngle", defaultMessage: "Angle" }),
                value: E.fill.angleDeg ?? 0,
                max: 360,
                suffix: "\xb0",
                presets: [0, 45, 90, 135, 180, 270],
                side: "bottom",
                onChange: (e) => T({ ...E.fill, angleDeg: e }),
              })),
            (I[45] = A),
            (I[46] = z),
            (I[47] = T),
            (I[48] = E.fill),
            (I[49] = y))
          : (y = I[49]),
        I[50] !== b || I[51] !== y || I[52] !== K
          ? ((v = (0, r.jsxs)("div", { className: K, children: [b, y] })),
            (I[50] = b),
            (I[51] = y),
            (I[52] = K),
            (I[53] = v))
          : (v = I[53]),
        I[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsxs)("div", {
              className: "grid grid-cols-2 gap-2",
              children: [
                (0, r.jsx)("span", {
                  children: (0, r.jsx)(ii.A, { id: "presentationEditor.gradientColors", defaultMessage: "Colors" }),
                }),
                (0, r.jsx)("span", {
                  children: (0, r.jsx)(ii.A, {
                    id: "presentationEditor.gradientStopOpacity",
                    defaultMessage: "Opacity",
                  }),
                }),
              ],
            })),
            (I[54] = w))
          : (w = I[54]),
        I[55] !== A ||
          I[56] !== R ||
          I[57] !== M ||
          I[58] !== P ||
          I[59] !== B ||
          I[60] !== O ||
          I[61] !== E.fill.stops)
      ) {
        let e
        ;(I[63] !== A || I[64] !== R || I[65] !== M || I[66] !== P || I[67] !== O || I[68] !== E.fill.stops
          ? ((e = (e) => {
              let { color: t, opacityPct: n, index: i } = e
              return (0, r.jsxs)(
                "div",
                {
                  className: "grid grid-cols-2 gap-2",
                  onFocusCapture: () => F(i),
                  children: [
                    (0, r.jsx)(lo.v, {
                      onInteractOutside: (e) => {
                        e.target instanceof Element &&
                          e.target.closest("[role=slider]")?.id === `${P}-${i}` &&
                          e.preventDefault()
                      },
                      open: R === i,
                      onOpenChange: (e) => D(e ? i : null),
                      side: "left",
                      palette: M,
                      label: A.formatMessage(lB.colorStop, { number: i + 1 }),
                      color: t,
                      onChange: (e) => O(i, { color: `${e}/${n}%` }),
                    }),
                    (0, r.jsx)(lR, {
                      label: A.formatMessage(
                        { id: "presentationEditor.gradientColorOpacity", defaultMessage: "Opacity for color {number}" },
                        { number: i + 1 },
                      ),
                      value: n,
                      side: "bottom",
                      onChange: (e) => {
                        let t = new lA.Q(E.fill.stops[i].color)
                        t.transform = { ...t.transform, alpha: Math.round(1e3 * e) }
                        let n = t.toProto()
                        void 0 !== n && O(i, { color: { type: "proto", proto: n } })
                      },
                    }),
                  ],
                },
                i,
              )
            }),
            (I[63] = A),
            (I[64] = R),
            (I[65] = M),
            (I[66] = P),
            (I[67] = O),
            (I[68] = E.fill.stops),
            (I[69] = e))
          : (e = I[69]),
          (C = B.map(e)),
          (I[55] = A),
          (I[56] = R),
          (I[57] = M),
          (I[58] = P),
          (I[59] = B),
          (I[60] = O),
          (I[61] = E.fill.stops),
          (I[62] = C))
      } else C = I[62]
      return (
        I[70] !== C
          ? ((S = (0, r.jsxs)("div", {
              className: "flex flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [w, (0, r.jsx)("div", { className: "flex flex-col gap-2", children: C })],
            })),
            (I[70] = C),
            (I[71] = S))
          : (S = I[71]),
        I[72] !== v || I[73] !== S || I[74] !== s
          ? ((k = (0, r.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [s, v, S] })),
            (I[72] = v),
            (I[73] = S),
            (I[74] = s),
            (I[75] = k))
          : (k = I[75]),
        k
      )
    }
    function lN(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function lz(e, t) {
      return e.offset - t.offset
    }
    let lB = (0, iM.YK)({
      colorStop: { id: "presentationEditor.gradientColorNumber", defaultMessage: "Color {number}" },
      linear: { id: "presentationEditor.gradientLinear", defaultMessage: "Linear" },
      path: { id: "presentationEditor.gradientRadial", defaultMessage: "Radial" },
    })
    var lO = n("mN4P"),
      lV = n("T0Rc")
    let lH = (0, lE.a)({
      name: "crop-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.808594, y: 0.808594, width: 14.382813, height: 14.382813 },
        visualBounds: { x: 0.808594, y: 0.808594, width: 14.382813, height: 14.382813 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.808594, y: 0.808594, width: 14.382813, height: 14.382813 },
        center: { x: 8.000001, y: 8.000001 },
        insets: { top: 0.808594, right: 0.808593, bottom: 0.808593, left: 0.808594 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000001, y: 8.000001 }, foreground: { x: 8.000001, y: 8.000001 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4 0.808594C4.28995 0.808594 4.52539 1.04403 4.52539 1.33398V3.47461H10.667C11.6932 3.47479 12.5254 4.30679 12.5254 5.33301V11.4756H14.667C14.9568 11.4758 15.1914 11.7111 15.1914 12.001C15.1912 12.2907 14.9567 12.5252 14.667 12.5254H12.5254V14.666C12.5254 14.956 12.2899 15.1914 12 15.1914C11.7101 15.1914 11.4746 14.956 11.4746 14.666V12.5254H5.33301C4.30683 12.5252 3.47461 11.6932 3.47461 10.667V4.52441H1.33301C1.04321 4.52424 0.808594 4.28886 0.808594 3.99902C0.808769 3.70933 1.04332 3.47479 1.33301 3.47461H3.47461V1.33398C3.47461 1.04403 3.71005 0.808594 4 0.808594ZM4.52539 10.667C4.52539 11.1133 4.88673 11.4754 5.33301 11.4756H11.4746V5.33301C11.4746 4.88669 11.1133 4.52459 10.667 4.52441H4.52539V10.667Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    function lK(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        u = (0, i.c)(56),
        { controller: p, slideId: h, elementId: m, framing: f, compact: g, onStarted: x } = e,
        b = (0, ir.A)()
      ;(u[0] !== p || u[1] !== m || u[2] !== h
        ? ((t = async () => {
            if (!(await p.startImageCrop(h, m))) throw Error("Image is not ready to crop")
          }),
          (u[0] = p),
          (u[1] = m),
          (u[2] = h),
          (u[3] = t))
        : (t = u[3]),
        u[4] !== x || u[5] !== t
          ? ((n = { mutationFn: t, onSuccess: x }), (u[4] = x), (u[5] = t), (u[6] = n))
          : (n = u[6]))
      let y = (0, i2.n)(n)
      u[7] !== b
        ? ((l = b.formatMessage({ id: "presentationEditor.cropImageAction", defaultMessage: "Crop" })),
          (u[7] = b),
          (u[8] = l))
        : (l = u[8])
      let v = l
      u[9] !== b || u[10] !== v || u[11] !== y.isError
        ? ((a = y.isError
            ? b.formatMessage({
                id: "presentationEditor.cropImageUnavailable",
                defaultMessage: "Image is not ready to crop. Try again.",
              })
            : v),
          (u[9] = b),
          (u[10] = v),
          (u[11] = y.isError),
          (u[12] = a))
        : (a = u[12])
      let w = a
      if (void 0 !== g && g) {
        let e, t, n
        return (
          u[13] !== y ? ((e = () => y.mutate()), (u[13] = y), (u[14] = e)) : (e = u[14]),
          u[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(iq.I, { asset: lH })), (u[15] = t))
            : (t = u[15]),
          u[16] !== v || u[17] !== y.isPending || u[18] !== e || u[19] !== w
            ? ((n = (0, r.jsx)(lS.P, {
                color: "ghostActive",
                size: "formatToolbarIcon",
                "aria-label": v,
                title: w,
                disabled: y.isPending,
                onClick: e,
                children: t,
              })),
              (u[16] = v),
              (u[17] = y.isPending),
              (u[18] = e),
              (u[19] = w),
              (u[20] = n))
            : (n = u[20]),
          n
        )
      }
      if (null != f) {
        let e,
          t,
          n,
          i,
          l,
          a,
          o,
          s,
          d = y.isPending
        u[21] !== b
          ? ((e = b.formatMessage({ id: "presentationEditor.imageFramingMode", defaultMessage: "Image sizing" })),
            (u[21] = b),
            (u[22] = e))
          : (e = u[22])
        let c = y.isError ? w : void 0,
          g = lq[f.mode]
        ;(u[23] !== g ? ((t = (0, r.jsx)(ii.A, { ...g })), (u[23] = g), (u[24] = t)) : (t = u[24]),
          u[25] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, r.jsx)(ip.HIf, {})), (u[25] = n)) : (n = u[25]),
          u[26] !== t || u[27] !== e || u[28] !== c
            ? ((i = (0, r.jsxs)(lw.c, {
                className: "w-full justify-between",
                "aria-label": e,
                title: c,
                children: [t, n],
              })),
              (u[26] = t),
              (u[27] = e),
              (u[28] = c),
              (u[29] = i))
            : (i = u[29]))
        let x = f.mode
        return (
          u[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = ["fit", "fill", "crop"]), (u[30] = l))
            : (l = u[30]),
          u[31] !== p ||
          u[32] !== m ||
          u[33] !== f.imageId ||
          u[34] !== f.sourceHeight ||
          u[35] !== f.sourceRevision ||
          u[36] !== f.sourceWidth ||
          u[37] !== h ||
          u[38] !== y
            ? ((a = l.map((e) =>
                (0, r.jsx)(
                  i3.ms.RadioItem,
                  {
                    value: e,
                    onSelect: () => {
                      "crop" === e
                        ? y.mutate()
                        : p.dispatch({
                            kind: "set-image-framing",
                            slideId: h,
                            elementId: m,
                            sourceWidth: f.sourceWidth,
                            sourceHeight: f.sourceHeight,
                            imageId: f.imageId,
                            sourceRevision: f.sourceRevision,
                            framing: { mode: e },
                          })
                    },
                    children: (0, r.jsx)(ii.A, { ...lq[e] }),
                  },
                  e,
                ),
              )),
              (u[31] = p),
              (u[32] = m),
              (u[33] = f.imageId),
              (u[34] = f.sourceHeight),
              (u[35] = f.sourceRevision),
              (u[36] = f.sourceWidth),
              (u[37] = h),
              (u[38] = y),
              (u[39] = a))
            : (a = u[39]),
          u[40] !== f.mode || u[41] !== a
            ? ((o = (0, r.jsx)(i3.ms.RadioGroup, { value: x, children: a })),
              (u[40] = f.mode),
              (u[41] = a),
              (u[42] = o))
            : (o = u[42]),
          u[43] !== y.isPending || u[44] !== i || u[45] !== o
            ? ((s = (0, r.jsx)(i3.Ab, {
                side: "bottom",
                align: "start",
                disabled: d,
                contentRef: l$,
                triggerButton: i,
                children: o,
              })),
              (u[43] = y.isPending),
              (u[44] = i),
              (u[45] = o),
              (u[46] = s))
            : (s = u[46]),
          s
        )
      }
      return (
        u[47] !== y ? ((o = () => y.mutate()), (u[47] = y), (u[48] = o)) : (o = u[48]),
        u[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, r.jsx)(iq.I, { asset: lH })), (d = (0, r.jsx)(ii.A, { ...lq.crop })), (u[49] = s), (u[50] = d))
          : ((s = u[49]), (d = u[50])),
        u[51] !== v || u[52] !== y.isPending || u[53] !== o || u[54] !== w
          ? ((c = (0, r.jsxs)(lw.c, {
              "aria-label": v,
              title: w,
              disabled: y.isPending,
              onClick: o,
              children: [s, d],
            })),
            (u[51] = v),
            (u[52] = y.isPending),
            (u[53] = o),
            (u[54] = w),
            (u[55] = c))
          : (c = u[55]),
        c
      )
    }
    function l$(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    let lq = (0, iM.YK)({
      fit: { id: "presentationEditor.imageFit", defaultMessage: "Fit" },
      fill: { id: "presentationEditor.imageFillMode", defaultMessage: "Fill" },
      crop: { id: "presentationEditor.imageCropMode", defaultMessage: "Crop" },
    })
    function lW(e) {
      let t,
        n,
        l,
        a,
        o,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v,
        w,
        C,
        S,
        k,
        I,
        E,
        j,
        M,
        T,
        A = (0, i.c)(90),
        {
          controller: P,
          slideId: L,
          target: F,
          presentationVersion: R,
          onRequestChanges: D,
          onCropStarted: N,
          variant: z,
        } = e,
        B = void 0 === z ? "field" : z,
        O = (0, ir.A)(),
        { elementId: V } = F,
        H = (0, d.useId)(),
        K = (0, d.useRef)(null)
      ;(A[0] !== V || A[1] !== R || A[2] !== H || A[3] !== L
        ? ((t = ["presentation-image-preview", H, L, V, R]), (A[0] = V), (A[1] = R), (A[2] = H), (A[3] = L), (A[4] = t))
        : (t = A[4]),
        A[5] !== P || A[6] !== V || A[7] !== L
          ? ((n = () => P.requestImageThumbnail(L, V)), (A[5] = P), (A[6] = V), (A[7] = L), (A[8] = n))
          : (n = A[8]),
        A[9] !== t || A[10] !== n
          ? ((l = { queryKey: t, queryFn: n, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
            (A[9] = t),
            (A[10] = n),
            (A[11] = l))
          : (l = A[11]))
      let { data: $, isError: q } = (0, lV.I)(l)
      ;(A[12] !== V || A[13] !== R || A[14] !== H || A[15] !== L
        ? ((a = ["presentation-image-framing", H, L, V, R]),
          (A[12] = V),
          (A[13] = R),
          (A[14] = H),
          (A[15] = L),
          (A[16] = a))
        : (a = A[16]),
        A[17] !== P || A[18] !== V || A[19] !== L
          ? ((o = () => P.requestImageFraming(L, V)), (A[17] = P), (A[18] = V), (A[19] = L), (A[20] = o))
          : (o = A[20]))
      let W = "field" === B && "fill" === F.kind
      A[21] !== a || A[22] !== o || A[23] !== W
        ? ((c = { queryKey: a, queryFn: o, enabled: W, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
          (A[21] = a),
          (A[22] = o),
          (A[23] = W),
          (A[24] = c))
        : (c = A[24])
      let { data: U, isError: G } = (0, lV.I)(c)
      A[25] !== P || A[26] !== L || A[27] !== F
        ? ((u = {
            mutationFn: async (e) => {
              let t = await P.prepareImage(await (0, tr.I)(e))
              "image" === F.kind
                ? P.dispatch({ kind: "replace-image", slideId: L, elementId: F.elementId, ...t })
                : P.dispatch({ kind: "set-image-fill", slideId: L, elementId: F.elementId, ...t })
            },
          }),
          (A[25] = P),
          (A[26] = L),
          (A[27] = F),
          (A[28] = u))
        : (u = A[28])
      let _ = (0, i2.n)(u)
      if ("swatch" === B) {
        let e, t
        return (
          A[29] !== $
            ? ((e = null != $ && (0, r.jsx)("img", { className: "size-full object-cover", src: $, alt: "" })),
              (A[29] = $),
              (A[30] = e))
            : (e = A[30]),
          A[31] !== e
            ? ((t = (0, r.jsx)("span", {
                className: "size-3.25 shrink-0 overflow-hidden rounded-full ring-1 ring-border-subtle ring-inset",
                children: e,
              })),
              (A[31] = e),
              (A[32] = t))
            : (t = A[32]),
          t
        )
      }
      A[33] !== O
        ? ((p = O.formatMessage({ id: "presentationEditor.replaceImage", defaultMessage: "Replace image" })),
          (A[33] = O),
          (A[34] = p))
        : (p = A[34])
      let X = p
      A[35] !== $
        ? ((h = null != $ && (0, r.jsx)("img", { className: "size-full object-cover", src: $, alt: "" })),
          (A[35] = $),
          (A[36] = h))
        : (h = A[36])
      let Z = null != $ && "bg-media-scrim/40"
      return (
        A[37] !== Z
          ? ((m = (0, s.A)("absolute inset-0 flex items-center justify-center", Z)), (A[37] = Z), (A[38] = m))
          : (m = A[38]),
        A[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = () => K.current?.click()),
            (g = (0, r.jsx)(ip.T7p, {})),
            (x = (0, r.jsx)(ii.A, { id: "presentationEditor.uploadImage", defaultMessage: "Upload from computer" })),
            (A[39] = f),
            (A[40] = g),
            (A[41] = x))
          : ((f = A[39]), (g = A[40]), (x = A[41])),
        A[42] !== X || A[43] !== _.isPending
          ? ((b = (0, r.jsxs)(i4.$, {
              color: "secondarySurface",
              size: "actionSm",
              radius: "small",
              loading: _.isPending,
              "aria-label": X,
              onClick: f,
              children: [g, x],
            })),
            (A[42] = X),
            (A[43] = _.isPending),
            (A[44] = b))
          : (b = A[44]),
        A[45] !== O || A[46] !== D || A[47] !== F.kind
          ? ((y =
              null != D &&
              (0, r.jsxs)(i4.$, {
                color: "secondarySurface",
                size: "actionSm",
                radius: "small",
                onClick: () =>
                  D(
                    "image" === F.kind
                      ? O.formatMessage({
                          id: "presentationEditor.generateImageRequest",
                          defaultMessage: "Generate a replacement image: ",
                        })
                      : O.formatMessage({
                          id: "presentationEditor.generateFillRequest",
                          defaultMessage: "Generate an image for this background: ",
                        }),
                  ),
                children: [
                  (0, r.jsx)(iq.I, { asset: lO.q }),
                  (0, r.jsx)(ii.A, { id: "presentationEditor.generateImage", defaultMessage: "Generate image" }),
                ],
              })),
            (A[45] = O),
            (A[46] = D),
            (A[47] = F.kind),
            (A[48] = y))
          : (y = A[48]),
        A[49] !== b || A[50] !== y
          ? ((v = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [b, y] })),
            (A[49] = b),
            (A[50] = y),
            (A[51] = v))
          : (v = A[51]),
        A[52] !== m || A[53] !== v
          ? ((w = (0, r.jsx)("div", { className: m, children: v })), (A[52] = m), (A[53] = v), (A[54] = w))
          : (w = A[54]),
        A[55] !== h || A[56] !== w
          ? ((C = (0, r.jsxs)("div", {
              className:
                "relative flex h-32 items-center justify-center overflow-hidden rounded-md border border-subtle bg-surface-secondary",
              children: [h, w],
            })),
            (A[55] = h),
            (A[56] = w),
            (A[57] = C))
          : (C = A[57]),
        A[58] !== P || A[59] !== V || A[60] !== U || A[61] !== N || A[62] !== L || A[63] !== $
          ? ((S =
              null != U &&
              null != $ &&
              (0, r.jsx)(lK, { controller: P, slideId: L, elementId: V, framing: U, onStarted: N })),
            (A[58] = P),
            (A[59] = V),
            (A[60] = U),
            (A[61] = N),
            (A[62] = L),
            (A[63] = $),
            (A[64] = S))
          : (S = A[64]),
        A[65] !== P || A[66] !== V || A[67] !== N || A[68] !== L || A[69] !== F.kind || A[70] !== $
          ? ((k =
              "image" === F.kind &&
              null != $ &&
              (0, r.jsx)(lK, { controller: P, slideId: L, elementId: V, onStarted: N })),
            (A[65] = P),
            (A[66] = V),
            (A[67] = N),
            (A[68] = L),
            (A[69] = F.kind),
            (A[70] = $),
            (A[71] = k))
          : (k = A[71]),
        A[72] !== _
          ? ((I = (e) => {
              let t = e.currentTarget.files?.[0]
              ;((e.currentTarget.value = ""), null != t && _.mutate(t))
            }),
            (A[72] = _),
            (A[73] = I))
          : (I = A[73]),
        A[74] !== X || A[75] !== I
          ? ((E = (0, r.jsx)("input", {
              ref: K,
              className: "hidden",
              type: "file",
              accept: "image/*",
              "aria-label": X,
              onChange: I,
            })),
            (A[74] = X),
            (A[75] = I),
            (A[76] = E))
          : (E = A[76]),
        A[77] !== _.isError
          ? ((j =
              _.isError &&
              (0, r.jsx)("p", {
                role: "alert",
                className: "text-base text-danger",
                children: (0, r.jsx)(ii.A, {
                  id: "presentationEditor.imageUploadFailed",
                  defaultMessage: "This image could not be uploaded. Try again.",
                }),
              })),
            (A[77] = _.isError),
            (A[78] = j))
          : (j = A[78]),
        A[79] !== G || A[80] !== q || A[81] !== _.isError
          ? ((M =
              (q || G) &&
              !_.isError &&
              (0, r.jsx)("p", {
                className: "text-base text-secondary",
                children: (0, r.jsx)(ii.A, {
                  id: "presentationEditor.imagePreviewFailed",
                  defaultMessage: "Image preview unavailable",
                }),
              })),
            (A[79] = G),
            (A[80] = q),
            (A[81] = _.isError),
            (A[82] = M))
          : (M = A[82]),
        A[83] !== C || A[84] !== S || A[85] !== k || A[86] !== E || A[87] !== j || A[88] !== M
          ? ((T = (0, r.jsxs)(r.Fragment, { children: [C, S, k, E, j, M] })),
            (A[83] = C),
            (A[84] = S),
            (A[85] = k),
            (A[86] = E),
            (A[87] = j),
            (A[88] = M),
            (A[89] = T))
          : (T = A[89]),
        T
      )
    }
    function lU(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v,
        w,
        C,
        S,
        k,
        I,
        E,
        j,
        M,
        T,
        A,
        P,
        L,
        F,
        R = (0, i.c)(107),
        {
          controller: D,
          slideId: N,
          target: z,
          presentationVersion: B,
          mode: O,
          fill: V,
          palette: H,
          onRequestChanges: K,
          compact: $,
        } = e,
        q = void 0 !== $ && $,
        W = (0, ir.A)(),
        [U, G] = (0, d.useState)(!1),
        _ = V?.color ?? "#FFFFFF",
        X = V?.gradient,
        Z = X?.stops.some((e) => e.opacityPct !== X.stops[0].opacityPct)
          ? null
          : (X?.stops[0].opacityPct ?? V?.opacityPct ?? 100)
      R[0] !== X
        ? ((t =
            X &&
            lL(
              X.fill.stops.map((e, t) => ({ ...X.stops[t], offset: e.offset })),
              X.fill.offsetScale,
              X.fill.gradientKind,
              X.fill.angleDeg,
            )),
          (R[0] = X),
          (R[1] = t))
        : (t = R[1])
      let J = t,
        [Y, Q] = (0, d.useState)(null),
        ee = Y === B ? "image" : O,
        et = !q && null == z.elementId
      ;(R[2] !== _ || R[3] !== D || R[4] !== V?.themeColor || R[5] !== O || R[6] !== B || R[7] !== ee
        ? ((n = (e) => {
            if (
              ("gradient" === e && G(!0),
              e !== ee &&
                (Q("image" === e ? B : null),
                "none" === e && D.updateSelectedElementStyle({ fill: "none" }),
                "color" === e && D.updateSelectedElementStyle({ fillColor: _, fillOpacityPct: 100 }),
                "gradient" === e && "gradient" !== O))
            ) {
              let e = [1, 3, 5].map((e) => Number.parseInt(_.slice(e, e + 2), 16)),
                t = Math.max(...e) + Math.min(...e) < 128,
                n = `#${e
                  .map((e) =>
                    Math.round(t ? e + (255 - e) / 2 : e / 2)
                      .toString(16)
                      .padStart(2, "0"),
                  )
                  .join("")}`
              D.updateSelectedElementStyle({
                fillGradient: {
                  type: "gradient",
                  gradientKind: "linear",
                  angleDeg: 0,
                  offsetScale: 1,
                  stops: [
                    { offset: 0, color: V?.themeColor ?? _ },
                    { offset: 1, color: n },
                  ],
                },
              })
            }
          }),
          (R[2] = _),
          (R[3] = D),
          (R[4] = V?.themeColor),
          (R[5] = O),
          (R[6] = B),
          (R[7] = ee),
          (R[8] = n))
        : (n = R[8]),
        R[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(iq.I, { asset: lk.b })), (R[9] = l))
          : (l = R[9]),
        R[10] !== W
          ? ((a = W.formatMessage({ id: "presentationEditor.colorFill", defaultMessage: "Color fill" })),
            (R[10] = W),
            (R[11] = a))
          : (a = R[11]),
        R[12] !== a ? ((o = { id: "color", label: l, ariaLabel: a }), (R[12] = a), (R[13] = o)) : (o = R[13]),
        R[14] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, r.jsx)(ip.UJ6, {})), (R[14] = s)) : (s = R[14]),
        R[15] !== W
          ? ((c = W.formatMessage({ id: "presentationEditor.imageFill", defaultMessage: "Image fill" })),
            (R[15] = W),
            (R[16] = c))
          : (c = R[16]),
        R[17] !== c ? ((u = { id: "image", label: s, ariaLabel: c }), (R[17] = c), (R[18] = u)) : (u = R[18]),
        R[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)(iq.I, { asset: lj })), (R[19] = p))
          : (p = R[19]),
        R[20] !== W
          ? ((h = W.formatMessage({ id: "presentationEditor.gradientFill", defaultMessage: "Gradient fill" })),
            (R[20] = W),
            (R[21] = h))
          : (h = R[21]),
        R[22] !== h ? ((m = { id: "gradient", label: p, ariaLabel: h }), (R[22] = h), (R[23] = m)) : (m = R[23]),
        R[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(iq.I, { asset: lI.L })), (R[24] = f))
          : (f = R[24]),
        R[25] !== W
          ? ((g = W.formatMessage({ id: "presentationEditor.noFill", defaultMessage: "No fill" })),
            (R[25] = W),
            (R[26] = g))
          : (g = R[26]),
        R[27] !== g ? ((x = { id: "none", label: f, ariaLabel: g }), (R[27] = g), (R[28] = x)) : (x = R[28]),
        R[29] !== m || R[30] !== x || R[31] !== o || R[32] !== u
          ? ((b = [o, u, m, x]), (R[29] = m), (R[30] = x), (R[31] = o), (R[32] = u), (R[33] = b))
          : (b = R[33]),
        R[34] !== ee || R[35] !== b || R[36] !== n
          ? ((y = (0, r.jsx)(lM.T, {
              fullWidth: !0,
              variant: "field",
              focusRing: "surface",
              selectedId: ee,
              onSelect: n,
              options: b,
            })),
            (R[34] = ee),
            (R[35] = b),
            (R[36] = n),
            (R[37] = y))
          : (y = R[37]))
      let en = y
      ;(R[38] === Symbol.for("react.memo_cache_sentinel") ? ((v = () => G(!1)), (R[38] = v)) : (v = R[38]),
        R[39] !== D || R[40] !== K || R[41] !== B || R[42] !== N || R[43] !== z
          ? ((w = (0, r.jsx)(lW, {
              controller: D,
              slideId: N,
              target: z,
              presentationVersion: B,
              onRequestChanges: K,
              onCropStarted: v,
            })),
            (R[39] = D),
            (R[40] = K),
            (R[41] = B),
            (R[42] = N),
            (R[43] = z),
            (R[44] = w))
          : (w = R[44]))
      let er = w
      R[45] !== D || R[46] !== V || R[47] !== H || R[48] !== B
        ? ((C =
            V?.gradient != null &&
            (0, r.jsx)(lD, {
              value: V.gradient,
              presentationVersion: B,
              palette: H,
              onChange: (e) => D.updateSelectedElementStyle({ fillGradient: e }),
            })),
          (R[45] = D),
          (R[46] = V),
          (R[47] = H),
          (R[48] = B),
          (R[49] = C))
        : (C = R[49])
      let ei = C
      R[50] !== D || R[51] !== W || R[52] !== O || R[53] !== Z || R[54] !== ee
        ? ((S =
            ("color" === ee || "gradient" === ee || ("image" === ee && "image" === O)) &&
            (0, r.jsx)(lR, {
              label: W.formatMessage({ id: "presentationEditor.fillOpacity", defaultMessage: "Fill opacity" }),
              value: Z,
              onChange: (e) => D.updateSelectedElementStyle({ fillOpacityPct: e }),
            })),
          (R[50] = D),
          (R[51] = W),
          (R[52] = O),
          (R[53] = Z),
          (R[54] = ee),
          (R[55] = S))
        : (S = R[55])
      let el = S
      R[56] !== _ ||
      R[57] !== q ||
      R[58] !== D ||
      R[59] !== J ||
      R[60] !== W ||
      R[61] !== B ||
      R[62] !== ee ||
      R[63] !== N ||
      R[64] !== z
        ? ((k = (0, r.jsx)(ld.Wv, {
            asChild: !0,
            children: q
              ? (0, r.jsxs)(lS.P, {
                  color: "ghostActive",
                  size: "formatToolbar",
                  "aria-label": W.formatMessage({ id: "presentationEditor.imageFillMenu", defaultMessage: "Fill" }),
                  children: [
                    "image" === ee && (0, r.jsx)(ip.UJ6, {}),
                    "none" === ee && (0, r.jsx)(iq.I, { asset: lI.L }),
                    ("color" === ee || "gradient" === ee) &&
                      (0, r.jsx)(lT.b, {
                        color: "color" === ee ? _ : void 0,
                        backgroundImage: "gradient" === ee ? J : void 0,
                        size: "toolbar",
                      }),
                    (0, r.jsx)(ip.HIf, {}),
                  ],
                })
              : (0, r.jsxs)(lw.c, {
                  className: "w-full",
                  children: [
                    "image" === ee &&
                      (0, r.jsx)(lW, {
                        variant: "swatch",
                        controller: D,
                        slideId: N,
                        target: z,
                        presentationVersion: B,
                      }),
                    "image" !== ee &&
                      (0, r.jsx)(lT.b, {
                        color: "color" === ee ? _ : void 0,
                        backgroundImage: "gradient" === ee ? J : void 0,
                      }),
                    (0, r.jsxs)("span", {
                      className: "min-w-0 flex-1 truncate text-start font-normal",
                      children: [
                        "image" === ee &&
                          (0, r.jsx)(ii.A, { id: "presentationEditor.fillImageLabel", defaultMessage: "Image" }),
                        "none" === ee &&
                          (0, r.jsx)(ii.A, { id: "presentationEditor.fillNoneLabel", defaultMessage: "None" }),
                        "color" === ee && _.replace(/^#/, "").toUpperCase(),
                        "gradient" === ee &&
                          (0, r.jsx)(ii.A, { id: "presentationEditor.fillGradientLabel", defaultMessage: "Gradient" }),
                      ],
                    }),
                    (0, r.jsx)(ip.HIf, {}),
                  ],
                }),
          })),
          (R[56] = _),
          (R[57] = q),
          (R[58] = D),
          (R[59] = J),
          (R[60] = W),
          (R[61] = B),
          (R[62] = ee),
          (R[63] = N),
          (R[64] = z),
          (R[65] = k))
        : (k = R[65])
      let ea = q ? "bottom" : "left"
      ;(R[66] !== en || R[67] !== et || R[68] !== z.kind
        ? ((I = "fill" === z.kind && !et && (0, r.jsx)("div", { className: "p-2", children: en })),
          (R[66] = en),
          (R[67] = et),
          (R[68] = z.kind),
          (R[69] = I))
        : (I = R[69]),
        R[70] !== _ || R[71] !== D || R[72] !== W || R[73] !== H || R[74] !== ee
          ? ((E =
              "color" === ee &&
              (0, r.jsx)(lo.f, {
                closeOnSelect: !1,
                color: _,
                label: W.formatMessage({ id: "presentationEditor.fillColor", defaultMessage: "Fill color" }),
                palette: H,
                onChange: (e) => D.updateSelectedElementStyle({ fillColor: e }),
              })),
            (R[70] = _),
            (R[71] = D),
            (R[72] = W),
            (R[73] = H),
            (R[74] = ee),
            (R[75] = E))
          : (E = R[75]),
        R[76] !== er || R[77] !== ee
          ? ((j = "image" === ee && (0, r.jsx)("div", { className: "flex flex-col gap-3 p-2", children: er })),
            (R[76] = er),
            (R[77] = ee),
            (R[78] = j))
          : (j = R[78]),
        R[79] !== ei || R[80] !== ee
          ? ((M = "gradient" === ee && (0, r.jsx)("div", { className: "flex flex-col gap-3 p-2", children: ei })),
            (R[79] = ei),
            (R[80] = ee),
            (R[81] = M))
          : (M = R[81]),
        R[82] !== I || R[83] !== E || R[84] !== j || R[85] !== M
          ? ((T = (0, r.jsxs)("div", { className: "w-62", children: [I, E, j, M] })),
            (R[82] = I),
            (R[83] = E),
            (R[84] = j),
            (R[85] = M),
            (R[86] = T))
          : (T = R[86]),
        R[87] !== ea || R[88] !== T
          ? ((A = (0, r.jsx)(ld.hl, {
              "data-popcorn-edit-toolbar-root": "true",
              side: ea,
              align: "start",
              size: "content",
              variant: "menu",
              disablePadding: !0,
              children: T,
            })),
            (R[87] = ea),
            (R[88] = T),
            (R[89] = A))
          : (A = R[89]),
        R[90] !== U || R[91] !== k || R[92] !== A
          ? ((P = (0, r.jsxs)(ld.AM, { open: U, onOpenChange: G, children: [k, A] })),
            (R[90] = U),
            (R[91] = k),
            (R[92] = A),
            (R[93] = P))
          : (P = R[93]))
      let eo = P
      return q
        ? eo
        : (R[94] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = (0, r.jsx)(ii.A, { id: "presentationEditor.fill", defaultMessage: "Background" })), (R[94] = L))
            : (L = R[94]),
          R[95] !== _ ||
          R[96] !== D ||
          R[97] !== eo ||
          R[98] !== en ||
          R[99] !== er ||
          R[100] !== O ||
          R[101] !== Z ||
          R[102] !== el ||
          R[103] !== H ||
          R[104] !== ee ||
          R[105] !== et
            ? ((F = (0, r.jsx)(ls.l, {
                title: L,
                children: et
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        en,
                        "image" === ee && er,
                        "gradient" === ee &&
                          (0, r.jsxs)("div", { className: "grid grid-cols-2 gap-2", children: [eo, el] }),
                        ("color" === ee || ("image" === ee && "image" === O)) &&
                          (0, r.jsx)(lG, {
                            color: "color" === ee ? _ : void 0,
                            opacity: Z,
                            palette: H,
                            onChange: (e) => D.updateSelectedElementStyle(e),
                          }),
                      ],
                    })
                  : (0, r.jsxs)("div", {
                      className: el ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2",
                      children: [eo, el],
                    }),
              })),
              (R[95] = _),
              (R[96] = D),
              (R[97] = eo),
              (R[98] = en),
              (R[99] = er),
              (R[100] = O),
              (R[101] = Z),
              (R[102] = el),
              (R[103] = H),
              (R[104] = ee),
              (R[105] = et),
              (R[106] = F))
            : (F = R[106]),
          F)
    }
    function lG(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d = (0, i.c)(19),
        { color: c, opacity: u, palette: p, onChange: h } = e,
        m = (0, ir.A)(),
        f = void 0 === c ? "flex flex-col gap-2" : "grid grid-cols-2 gap-2"
      ;(d[0] !== c || d[1] !== m || d[2] !== h || d[3] !== p
        ? ((t =
            void 0 !== c &&
            (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [
                (0, r.jsx)(ii.A, { id: "presentationEditor.color", defaultMessage: "Color" }),
                (0, r.jsx)(lo.v, {
                  side: "left",
                  palette: p,
                  label: m.formatMessage({ id: "presentationEditor.fillColor", defaultMessage: "Fill color" }),
                  color: c,
                  onChange: (e) => h({ fillColor: e }),
                }),
              ],
            })),
          (d[0] = c),
          (d[1] = m),
          (d[2] = h),
          (d[3] = p),
          (d[4] = t))
        : (t = d[4]),
        d[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(ii.A, { id: "presentationEditor.opacity", defaultMessage: "Opacity" })), (d[5] = n))
          : (n = d[5]))
      let g = void 0 === c ? "left" : "bottom"
      return (
        d[6] !== m
          ? ((l = m.formatMessage({ id: "presentationEditor.fillOpacity", defaultMessage: "Fill opacity" })),
            (d[6] = m),
            (d[7] = l))
          : (l = d[7]),
        d[8] !== h ? ((a = (e) => h({ fillOpacityPct: e })), (d[8] = h), (d[9] = a)) : (a = d[9]),
        d[10] !== u || d[11] !== g || d[12] !== l || d[13] !== a
          ? ((o = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [n, (0, r.jsx)(lR, { side: g, label: l, value: u, onChange: a })],
            })),
            (d[10] = u),
            (d[11] = g),
            (d[12] = l),
            (d[13] = a),
            (d[14] = o))
          : (o = d[14]),
        d[15] !== f || d[16] !== t || d[17] !== o
          ? ((s = (0, r.jsxs)("div", { className: f, children: [t, o] })),
            (d[15] = f),
            (d[16] = t),
            (d[17] = o),
            (d[18] = s))
          : (s = d[18]),
        s
      )
    }
    var l_ = n("DIRF")
    function lX(e) {
      let t,
        n,
        l,
        a,
        o,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v = (0, i.c)(55),
        { palette: w, source: C, compact: S } = e,
        k = (0, d.useSyncExternalStore)(C.subscribe, C.getSnapshot, lZ),
        I = (0, ir.A)()
      if (!k) return null
      if (void 0 !== S && S) {
        let e
        return (
          v[0] !== k || v[1] !== C
            ? ((e = (0, r.jsx)(lJ, { chart: k, source: C, compact: !0 })), (v[0] = k), (v[1] = C), (v[2] = e))
            : (e = v[2]),
          e
        )
      }
      let E = k.fillValue ?? k.fill ?? "#FFFFFF"
      v[3] !== E ? ((t = new lv.SQ(E)), (v[3] = E), (v[4] = t)) : (t = v[4])
      let j = t
      ;(v[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, r.jsx)(ii.A, { id: "presentationEditor.chartType", defaultMessage: "Chart type" })), (v[5] = n))
        : (n = v[5]),
        v[6] !== k || v[7] !== C
          ? ((l = (0, r.jsx)(ls.l, { title: n, children: (0, r.jsx)(lJ, { chart: k, source: C }) })),
            (v[6] = k),
            (v[7] = C),
            (v[8] = l))
          : (l = v[8]),
        v[9] !== k.capabilities.seriesColor ||
        v[10] !== k.chartId ||
        v[11] !== k.series ||
        v[12] !== I ||
        v[13] !== w ||
        v[14] !== C
          ? ((a =
              k.capabilities.seriesColor &&
              (0, r.jsx)(ls.l, {
                title: (0, r.jsx)(ii.A, { id: "presentationEditor.chartColors", defaultMessage: "Chart colors" }),
                children: (0, r.jsx)("div", {
                  className: (0, s.A)(l_.A.pairedFields, "grid grid-cols-2 gap-2"),
                  children: k.series.map((e, t) =>
                    (0, r.jsx)(
                      lo.v,
                      {
                        side: t % 2 == 0 ? "left" : "bottom",
                        palette: w,
                        label: I.formatMessage(
                          { id: "presentationEditor.seriesColor", defaultMessage: "Color {number}" },
                          { number: e.index + 1 },
                        ),
                        color: e.color,
                        onChange: (t) =>
                          C.edit({ chartId: k.chartId, type: "set-chart-series", seriesIndex: e.index, color: t }),
                      },
                      e.index,
                    ),
                  ),
                }),
              })),
            (v[9] = k.capabilities.seriesColor),
            (v[10] = k.chartId),
            (v[11] = k.series),
            (v[12] = I),
            (v[13] = w),
            (v[14] = C),
            (v[15] = a))
          : (a = v[15]),
        v[16] !== k.chartId || v[17] !== k.slices || v[18] !== w || v[19] !== C
          ? ((o =
              k.slices.length > 0 &&
              (0, r.jsx)(ls.l, {
                title: (0, r.jsx)(ii.A, { id: "presentationEditor.chartColors", defaultMessage: "Chart colors" }),
                children: (0, r.jsx)("div", {
                  className: (0, s.A)(l_.A.pairedFields, "grid grid-cols-2 gap-2"),
                  children: k.slices.map((e, t) =>
                    (0, r.jsx)(
                      lo.v,
                      {
                        side: t % 2 == 0 ? "left" : "bottom",
                        palette: w,
                        label: e.label,
                        color: e.color,
                        onChange: (t) =>
                          C.edit({
                            chartId: k.chartId,
                            type: "set-chart-slice-color",
                            seriesIndex: e.seriesIndex,
                            pointIndex: e.pointIndex,
                            color: t,
                          }),
                      },
                      e.pointIndex,
                    ),
                  ),
                }),
              })),
            (v[16] = k.chartId),
            (v[17] = k.slices),
            (v[18] = w),
            (v[19] = C),
            (v[20] = o))
          : (o = v[20]),
        v[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, r.jsx)(ii.A, { id: "presentationEditor.chartOptions", defaultMessage: "Chart options" })),
            (v[21] = c))
          : (c = v[21]),
        v[22] !== I
          ? ((u = I.formatMessage({ id: "presentationEditor.legend", defaultMessage: "Legend" })),
            (v[22] = I),
            (v[23] = u))
          : (u = v[23]),
        v[24] !== k.chartId || v[25] !== C
          ? ((p = (e) => C.edit({ chartId: k.chartId, type: "set-chart-legend", visible: e })),
            (v[24] = k.chartId),
            (v[25] = C),
            (v[26] = p))
          : (p = v[26]),
        v[27] !== k.legend.visible || v[28] !== p || v[29] !== u
          ? ((h = (0, r.jsx)(lC.i, { label: u, checked: k.legend.visible, onChange: p })),
            (v[27] = k.legend.visible),
            (v[28] = p),
            (v[29] = u),
            (v[30] = h))
          : (h = v[30]),
        v[31] !== k.axes || v[32] !== k.chartId || v[33] !== I || v[34] !== C
          ? ((m =
              null != k.axes &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(lC.i, {
                    label: I.formatMessage({ id: "presentationEditor.axisLabels", defaultMessage: "Axis labels" }),
                    checked: k.axes.x.visible && k.axes.y.visible,
                    onChange: (e) => {
                      C.edit({ chartId: k.chartId, type: "set-chart-axis", axis: "both", visible: e })
                    },
                  }),
                  (0, r.jsx)(lC.i, {
                    label: I.formatMessage({ id: "presentationEditor.gridLines", defaultMessage: "Grid lines" }),
                    checked: k.axes.x.gridlines || k.axes.y.gridlines,
                    onChange: (e) => {
                      C.edit({ chartId: k.chartId, type: "set-chart-axis", axis: "both", gridlines: e })
                    },
                  }),
                ],
              })),
            (v[31] = k.axes),
            (v[32] = k.chartId),
            (v[33] = I),
            (v[34] = C),
            (v[35] = m))
          : (m = v[35]),
        v[36] !== h || v[37] !== m
          ? ((f = (0, r.jsxs)(ls.l, { title: c, children: [h, m] })), (v[36] = h), (v[37] = m), (v[38] = f))
          : (f = v[38]),
        v[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(ii.A, { id: "presentationEditor.chartBackground", defaultMessage: "Background" })),
            (v[39] = g))
          : (g = v[39]))
      let M = k.fillDisplayColors?.color ?? k.fill ?? "#FFFFFF",
        T = null == j.opacity ? null : 100 * j.opacity
      return (
        v[40] !== j || v[41] !== k.chartId || v[42] !== C
          ? ((x = (e) => {
              let { fillColor: t, fillOpacityPct: n } = e,
                r = new lv.SQ(t ?? (j.isExplicitNone ? "#FFFFFF" : j.toConfig({ preserveProto: !1 })))
              ;(null != n ? (r.opacity = n / 100) : null == j.opacity || j.isExplicitNone || (r.opacity = j.opacity),
                C.edit({
                  chartId: k.chartId,
                  type: "set-chart-fill",
                  area: "chart",
                  fill: rg.xY.parse(r.toConfig({ preserveProto: !1 })),
                }))
            }),
            (v[40] = j),
            (v[41] = k.chartId),
            (v[42] = C),
            (v[43] = x))
          : (x = v[43]),
        v[44] !== w || v[45] !== M || v[46] !== T || v[47] !== x
          ? ((b = (0, r.jsx)(ls.l, {
              title: g,
              children: (0, r.jsx)(lG, { palette: w, color: M, opacity: T, onChange: x }),
            })),
            (v[44] = w),
            (v[45] = M),
            (v[46] = T),
            (v[47] = x),
            (v[48] = b))
          : (b = v[48]),
        v[49] !== f || v[50] !== b || v[51] !== l || v[52] !== a || v[53] !== o
          ? ((y = (0, r.jsxs)(r.Fragment, { children: [l, a, o, f, b] })),
            (v[49] = f),
            (v[50] = b),
            (v[51] = l),
            (v[52] = a),
            (v[53] = o),
            (v[54] = y))
          : (y = v[54]),
        y
      )
    }
    function lZ() {
      return null
    }
    function lJ(e) {
      let t,
        n,
        l,
        a = (0, i.c)(16),
        { chart: o, source: s, compact: d } = e,
        c = void 0 !== d && d,
        u = (0, ir.A)(),
        p = i5.N[o.chartType],
        h = c ? void 0 : "left"
      if (
        (a[0] !== o.chartType || a[1] !== p || a[2] !== c || a[3] !== u
          ? ((t = c
              ? (0, r.jsxs)(lS.P, {
                  className: "justify-between",
                  color: "ghostActive",
                  contentLayout: "dropdown",
                  size: "formatToolbar",
                  "aria-label": u.formatMessage({ id: "presentationEditor.chartType", defaultMessage: "Chart type" }),
                  children: [
                    p && (0, r.jsx)(iq.I, { asset: p }),
                    (0, r.jsx)(lQ, { type: o.chartType }),
                    (0, r.jsx)(ip.HIf, {}),
                  ],
                })
              : (0, r.jsxs)(lw.c, {
                  className: "w-full justify-between",
                  "aria-label": u.formatMessage({ id: "presentationEditor.chartType", defaultMessage: "Chart type" }),
                  children: [
                    p && (0, r.jsx)(iq.I, { asset: p }),
                    (0, r.jsx)("span", {
                      className: "min-w-0 flex-1 truncate text-start",
                      children: (0, r.jsx)(lQ, { type: o.chartType }),
                    }),
                    (0, r.jsx)(ip.HIf, {}),
                  ],
                })),
            (a[0] = o.chartType),
            (a[1] = p),
            (a[2] = c),
            (a[3] = u),
            (a[4] = t))
          : (t = a[4]),
        a[5] !== o.chartId || a[6] !== o.compatibleTypes || a[7] !== s)
      ) {
        let e
        ;(a[9] !== o.chartId || a[10] !== s
          ? ((e = (e) =>
              (0, r.jsx)(
                i3.ms.Item,
                {
                  leftIconAsset: i5.N[e],
                  onSelect: () => s.edit({ chartId: o.chartId, type: "set-chart-type", chartType: e }),
                  children: (0, r.jsx)(lQ, { type: e }),
                },
                e,
              )),
            (a[9] = o.chartId),
            (a[10] = s),
            (a[11] = e))
          : (e = a[11]),
          (n = o.compatibleTypes.map(e)),
          (a[5] = o.chartId),
          (a[6] = o.compatibleTypes),
          (a[7] = s),
          (a[8] = n))
      } else n = a[8]
      return (
        a[12] !== h || a[13] !== t || a[14] !== n
          ? ((l = (0, r.jsx)(i3.Ab, {
              contentRef: lY,
              side: h,
              align: "start",
              contentClassName: "min-w-50",
              triggerButton: t,
              children: n,
            })),
            (a[12] = h),
            (a[13] = t),
            (a[14] = n),
            (a[15] = l))
          : (l = a[15]),
        l
      )
    }
    function lY(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function lQ(e) {
      let t,
        n = (0, i.c)(2),
        { type: l } = e
      return (
        n[0] !== l
          ? ((t = (0, r.jsx)(ii.A, {
              id: "presentationEditor.chartTypeName",
              defaultMessage:
                "{type, select, line {Line} pie {Pie} bar {Bar} doughnut {Doughnut} scatter {Scatter} bubble {Bubble} radar {Radar} treemap {Treemap} sunburst {Sunburst} map {Map} waterfall {Waterfall} line3D {3D line} pie3D {3D pie} area3D {3D area} bar3D {3D bar} funnel {Funnel} histogram {Histogram} boxWhisker {Box and whisker} stock {Stock} surface3D {3D surface} ofPie {Pie of pie} surface {Surface} pareto {Pareto} combo {Combination} other {Area}}",
              values: { type: l },
            })),
            (n[0] = l),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function l0(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d = (0, i.c)(21),
        { value: c, onChange: u } = e,
        p = (0, ir.A)(),
        h = null == c || c > 0
      d[0] !== p
        ? ((t = p.formatMessage({ id: "presentationEditor.corners", defaultMessage: "Corners" })),
          (d[0] = p),
          (d[1] = t))
        : (t = d[1])
      let m = t,
        f = !h
      return (
        d[2] !== p
          ? ((n = p.formatMessage({ id: "presentationEditor.toggleCorners", defaultMessage: "Toggle corners" })),
            (d[2] = p),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== h || d[5] !== u ? ((l = () => u(8 * !h)), (d[4] = h), (d[5] = u), (d[6] = l)) : (l = d[6]),
        d[7] !== h || d[8] !== n || d[9] !== l
          ? ((a = (0, r.jsx)(lc.p, { enabled: h, label: n, onClick: l })),
            (d[7] = h),
            (d[8] = n),
            (d[9] = l),
            (d[10] = a))
          : (a = d[10]),
        d[11] !== h || d[12] !== m || d[13] !== u || d[14] !== c
          ? ((o =
              h &&
              (0, r.jsx)(lu.D, {
                label: m,
                value: c,
                onChange: u,
                side: "left",
                presets: [0, 4, 8, 12, 16, 24, 32].map(l1),
              })),
            (d[11] = h),
            (d[12] = m),
            (d[13] = u),
            (d[14] = c),
            (d[15] = o))
          : (o = d[15]),
        d[16] !== m || d[17] !== f || d[18] !== a || d[19] !== o
          ? ((s = (0, r.jsx)(ls.l, { collapsed: f, title: m, action: a, children: o })),
            (d[16] = m),
            (d[17] = f),
            (d[18] = a),
            (d[19] = o),
            (d[20] = s))
          : (s = d[20]),
        s
      )
    }
    function l1(e) {
      return { value: e }
    }
    var l2 = n("JjK1"),
      l4 = n("zLIa")
    function l3(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b = (0, i.c)(39),
        { controller: y, element: v } = e,
        w = (0, ir.A)(),
        { width: C, height: S } = v.frame,
        k = v.imageAspectRatioLocked ?? !0
      return (
        b[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(ii.A, { id: "presentationEditor.dimensions", defaultMessage: "Dimensions" })), (b[0] = t))
          : (t = b[0]),
        b[1] !== w
          ? ((n = w.formatMessage({ id: "presentationEditor.imageWidth", defaultMessage: "Width" })),
            (b[1] = w),
            (b[2] = n))
          : (n = b[2]),
        b[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(ii.A, { id: "presentationEditor.widthPrefix", defaultMessage: "W" })), (b[3] = l))
          : (l = b[3]),
        b[4] !== y ? ((a = (e) => y.updateSelectedElementFrame({ width: e })), (b[4] = y), (b[5] = a)) : (a = b[5]),
        b[6] !== n || b[7] !== a || b[8] !== C
          ? ((o = (0, r.jsx)(l5, { label: n, prefix: l, value: C, onChange: a })),
            (b[6] = n),
            (b[7] = a),
            (b[8] = C),
            (b[9] = o))
          : (o = b[9]),
        b[10] !== w
          ? ((s = w.formatMessage({ id: "presentationEditor.imageHeight", defaultMessage: "Height" })),
            (b[10] = w),
            (b[11] = s))
          : (s = b[11]),
        b[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(ii.A, { id: "presentationEditor.heightPrefix", defaultMessage: "H" })), (b[12] = d))
          : (d = b[12]),
        b[13] !== y
          ? ((c = (e) => y.updateSelectedElementFrame({ height: e })), (b[13] = y), (b[14] = c))
          : (c = b[14]),
        b[15] !== S || b[16] !== s || b[17] !== c
          ? ((u = (0, r.jsx)(l5, { label: s, prefix: d, value: S, onChange: c })),
            (b[15] = S),
            (b[16] = s),
            (b[17] = c),
            (b[18] = u))
          : (u = b[18]),
        b[19] !== w
          ? ((p = w.formatMessage({ id: "presentationEditor.lockAspectRatio", defaultMessage: "Lock aspect ratio" })),
            (b[19] = w),
            (b[20] = p))
          : (p = b[20]),
        b[21] !== w || b[22] !== k
          ? ((h = k
              ? w.formatMessage({ id: "presentationEditor.unlockAspectRatio", defaultMessage: "Unlock aspect ratio" })
              : void 0),
            (b[21] = w),
            (b[22] = k),
            (b[23] = h))
          : (h = b[23]),
        b[24] !== y || b[25] !== k
          ? ((m = () => y.updateSelectedElementStyle({ imageAspectRatioLocked: !k })),
            (b[24] = y),
            (b[25] = k),
            (b[26] = m))
          : (m = b[26]),
        b[27] !== k
          ? ((f = k ? (0, r.jsx)(ip.$Rp, {}) : (0, r.jsx)(iq.I, { asset: l2.O })), (b[27] = k), (b[28] = f))
          : (f = b[28]),
        b[29] !== k || b[30] !== p || b[31] !== h || b[32] !== m || b[33] !== f
          ? ((g = (0, r.jsx)(lS.P, {
              size: "formatToolbarIcon",
              color: "ghostActive",
              "aria-pressed": k,
              "aria-label": p,
              title: h,
              onClick: m,
              children: f,
            })),
            (b[29] = k),
            (b[30] = p),
            (b[31] = h),
            (b[32] = m),
            (b[33] = f),
            (b[34] = g))
          : (g = b[34]),
        b[35] !== g || b[36] !== o || b[37] !== u
          ? ((x = (0, r.jsx)(ls.l, {
              title: t,
              children: (0, r.jsxs)("div", { className: "flex items-center gap-2", children: [o, u, g] }),
            })),
            (b[35] = g),
            (b[36] = o),
            (b[37] = u),
            (b[38] = x))
          : (x = b[38]),
        x
      )
    }
    function l5(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c = (0, i.c)(20),
        { label: u, prefix: p, value: h, onChange: m } = e,
        f = (0, d.useId)(),
        g = String(Math.round(100 * h) / 100),
        [x, b] = (0, d.useState)(null),
        y = null != x && x !== g
      c[0] !== f || c[1] !== p
        ? ((t = (0, r.jsx)("label", { htmlFor: f, className: "cursor-text text-secondary", children: p })),
          (c[0] = f),
          (c[1] = p),
          (c[2] = t))
        : (t = c[2])
      let v = x ?? g
      return (
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (e) => b(e.currentTarget.value)), (c[3] = n))
          : (n = c[3]),
        c[4] !== g || c[5] !== m || c[6] !== h
          ? ((l = (e) => {
              let t = e.currentTarget.valueAsNumber
              ;(Number.isFinite(t) && t >= 1 && e.currentTarget.value !== g && t !== h && m(t), b(null))
            }),
            (c[4] = g),
            (c[5] = m),
            (c[6] = h),
            (c[7] = l))
          : (l = c[7]),
        c[8] !== g
          ? ((a = (e) => {
              e.nativeEvent.isComposing ||
                ("Escape" === e.key && (e.currentTarget.value = g),
                ("Enter" === e.key || "Escape" === e.key) &&
                  (e.preventDefault(), e.stopPropagation(), e.currentTarget.blur()))
            }),
            (c[8] = g),
            (c[9] = a))
          : (a = c[9]),
        c[10] !== f || c[11] !== u || c[12] !== t || c[13] !== v || c[14] !== l || c[15] !== a
          ? ((o = (0, r.jsx)(l4.pd, {
              id: f,
              variant: "field",
              focusRing: !0,
              type: "number",
              min: 1,
              step: "any",
              "aria-label": u,
              leadingControl: t,
              value: v,
              onChange: n,
              onBlur: l,
              onKeyDown: a,
            })),
            (c[10] = f),
            (c[11] = u),
            (c[12] = t),
            (c[13] = v),
            (c[14] = l),
            (c[15] = a),
            (c[16] = o))
          : (o = c[16]),
        c[17] !== y || c[18] !== o
          ? ((s = (0, r.jsx)("div", { className: "min-w-0 flex-1", "data-artifact-input-dirty": y, children: o })),
            (c[17] = y),
            (c[18] = o),
            (c[19] = s))
          : (s = c[19]),
        s
      )
    }
    let l6 = (0, lE.a)({
        name: "align-h-center-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.474609, y: 0.808105, width: 13.050781, height: 14.383789 },
          visualBounds: { x: 1.474609, y: 0.808105, width: 13.050781, height: 14.383789 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.474609, y: 0.808105, width: 13.050781, height: 14.383789 },
          center: { x: 8, y: 8 },
          insets: { top: 0.808105, right: 1.47461, bottom: 0.808106, left: 1.474609 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
        },
        capabilities: ["icon"],
        body: '<path d="M8 0.808105C8.28995 0.808105 8.52539 1.04355 8.52539 1.3335V2.14209H12.9336C13.8124 2.14223 14.5252 2.85504 14.5254 3.73389V5.60107C14.525 6.4797 13.8123 7.19273 12.9336 7.19287H8.52539V8.80908H10.2666C11.1457 8.80908 11.8584 9.52183 11.8584 10.4009V12.2671C11.8581 13.1459 11.1455 13.8589 10.2666 13.8589H8.52539V14.6665C8.52539 14.9565 8.28995 15.1919 8 15.1919C7.71005 15.1919 7.47461 14.9565 7.47461 14.6665V13.8589H5.7334C4.85451 13.8589 4.14187 13.1459 4.1416 12.2671V10.4009C4.1416 9.52183 4.85434 8.80908 5.7334 8.80908H7.47461V7.19287H3.06641C2.18772 7.19273 1.47501 6.4797 1.47461 5.60107V3.73389C1.47475 2.85504 2.18756 2.14223 3.06641 2.14209H7.47461V1.3335C7.47461 1.04355 7.71005 0.808105 8 0.808105ZM5.7334 9.85889C5.43424 9.85889 5.19141 10.1017 5.19141 10.4009V12.2671C5.19167 12.566 5.43441 12.8091 5.7334 12.8091H10.2666C10.5656 12.8091 10.8083 12.566 10.8086 12.2671V10.4009C10.8086 10.1017 10.5658 9.85889 10.2666 9.85889H5.7334ZM3.06641 3.19287C2.76746 3.19301 2.52553 3.43494 2.52539 3.73389V5.60107C2.52579 5.8998 2.76762 6.14195 3.06641 6.14209H12.9336C13.2324 6.14195 13.4742 5.8998 13.4746 5.60107V3.73389C13.4745 3.43494 13.2325 3.19301 12.9336 3.19287H3.06641Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      l8 = (0, lE.a)({
        name: "align-h-left-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 2.141602, y: 1.474609, width: 12.383789, height: 13.050781 },
          visualBounds: { x: 2.141602, y: 1.474609, width: 12.383789, height: 13.050781 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.141602, y: 1.474609, width: 12.383789, height: 13.050781 },
          center: { x: 8.333496, y: 8 },
          insets: { top: 1.474609, right: 1.474609, bottom: 1.47461, left: 2.141602 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.333496, y: 8 }, foreground: { x: 8.333496, y: 8 } },
        },
        capabilities: ["icon"],
        body: '<path d="M2.66699 1.47461C2.95694 1.47461 3.19238 1.71005 3.19238 2V14C3.19238 14.2899 2.95694 14.5254 2.66699 14.5254C2.37704 14.5254 2.1416 14.2899 2.1416 14V2C2.1416 1.71005 2.37704 1.47461 2.66699 1.47461Z" fill="currentColor"/> <path d="M10.2676 8.80859C11.1465 8.80873 11.8594 9.52142 11.8594 10.4004V12.2666C11.8594 13.1456 11.1465 13.8583 10.2676 13.8584H6.40039C5.52146 13.8583 4.80859 13.1456 4.80859 12.2666V10.4004C4.80859 9.52142 5.52146 8.80873 6.40039 8.80859H10.2676ZM6.40039 9.8584C6.10136 9.85854 5.85938 10.1013 5.85938 10.4004V12.2666C5.85938 12.5657 6.10136 12.8085 6.40039 12.8086H10.2676C10.5666 12.8085 10.8086 12.5657 10.8086 12.2666V10.4004C10.8086 10.1013 10.5666 9.85854 10.2676 9.8584H6.40039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M12.9336 2.1416C13.8126 2.1416 14.5252 2.85446 14.5254 3.7334V5.60059C14.5252 6.47952 13.8126 7.19238 12.9336 7.19238H6.40039C5.52154 7.19224 4.80873 6.47943 4.80859 5.60059V3.7334C4.80873 2.85455 5.52154 2.14174 6.40039 2.1416H12.9336ZM6.40039 3.19238C6.10144 3.19252 5.85952 3.43445 5.85938 3.7334V5.60059C5.85952 5.89953 6.10144 6.14146 6.40039 6.1416H12.9336C13.2327 6.1416 13.4754 5.89962 13.4756 5.60059V3.7334C13.4754 3.43436 13.2327 3.19238 12.9336 3.19238H6.40039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      l9 = (0, lE.a)({
        name: "align-h-right-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.474609, y: 1.474609, width: 12.383789, height: 13.050781 },
          visualBounds: { x: 1.474609, y: 1.474609, width: 12.383789, height: 13.050781 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.474609, y: 1.474609, width: 12.383789, height: 13.050781 },
          center: { x: 7.666504, y: 8 },
          insets: { top: 1.474609, right: 2.141602, bottom: 1.47461, left: 1.474609 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.666504, y: 8 }, foreground: { x: 7.666504, y: 8 } },
        },
        capabilities: ["icon"],
        body: '<path d="M13.333 1.47461C13.623 1.47461 13.8584 1.71005 13.8584 2V14C13.8584 14.2899 13.623 14.5254 13.333 14.5254C13.0431 14.5254 12.8076 14.2899 12.8076 14V2C12.8076 1.71005 13.0431 1.47461 13.333 1.47461Z" fill="currentColor"/> <path d="M9.59961 8.80859C10.4787 8.80859 11.1914 9.52134 11.1914 10.4004V12.2666C11.1914 13.1457 10.4787 13.8584 9.59961 13.8584H5.7334C4.85434 13.8584 4.1416 13.1457 4.1416 12.2666V10.4004C4.1416 9.52134 4.85434 8.80859 5.7334 8.80859H9.59961ZM5.7334 9.8584C5.43424 9.8584 5.19141 10.1012 5.19141 10.4004V12.2666C5.19141 12.5658 5.43424 12.8086 5.7334 12.8086H9.59961C9.89876 12.8086 10.1416 12.5658 10.1416 12.2666V10.4004C10.1416 10.1012 9.89876 9.8584 9.59961 9.8584H5.7334Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.59961 2.1416C10.4786 2.1416 11.1913 2.85446 11.1914 3.7334V5.60059C11.1913 6.47952 10.4786 7.19238 9.59961 7.19238H3.06641C2.18756 7.19224 1.47475 6.47943 1.47461 5.60059V3.7334C1.47475 2.85455 2.18756 2.14174 3.06641 2.1416H9.59961ZM3.06641 3.19238C2.76746 3.19252 2.52553 3.43445 2.52539 3.7334V5.60059C2.52553 5.89953 2.76746 6.14146 3.06641 6.1416H9.59961C9.89868 6.1416 10.1415 5.89962 10.1416 5.60059V3.7334C10.1415 3.43436 9.89868 3.19238 9.59961 3.19238H3.06641Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      l7 = (0, lE.a)({
        name: "align-v-bottom-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 12.384766 },
          visualBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 12.384766 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 12.384766 },
          center: { x: 8, y: 7.666992 },
          insets: { top: 1.474609, right: 1.47461, bottom: 2.140625, left: 1.474609 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.666992 }, foreground: { x: 8, y: 7.666992 } },
        },
        capabilities: ["icon"],
        body: '<path d="M14 12.8086C14.2899 12.8086 14.5254 13.044 14.5254 13.334C14.5251 13.6237 14.2898 13.8594 14 13.8594H2C1.71021 13.8594 1.47487 13.6237 1.47461 13.334C1.47461 13.044 1.71005 12.8086 2 12.8086H14Z" fill="currentColor"/> <path d="M5.59961 1.47461C6.47846 1.47475 7.19127 2.18756 7.19141 3.06641V9.59961C7.19141 10.4786 6.47854 11.1913 5.59961 11.1914H3.73242C2.85349 11.1913 2.14062 10.4786 2.14062 9.59961V3.06641C2.14077 2.18756 2.85357 1.47475 3.73242 1.47461H5.59961ZM3.73242 2.52539C3.43347 2.52553 3.19155 2.76746 3.19141 3.06641V9.59961C3.19141 9.89868 3.43339 10.1415 3.73242 10.1416H5.59961C5.89864 10.1415 6.14062 9.89868 6.14062 9.59961V3.06641C6.14048 2.76746 5.89856 2.52553 5.59961 2.52539H3.73242Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M12.2656 4.1416C13.1447 4.1416 13.8574 4.85435 13.8574 5.7334V9.59961C13.8574 10.4787 13.1447 11.1914 12.2656 11.1914H10.3994C9.52036 11.1914 8.80762 10.4787 8.80762 9.59961V5.7334C8.80762 4.85434 9.52036 4.1416 10.3994 4.1416H12.2656ZM10.3994 5.19141C10.1003 5.19141 9.85742 5.43424 9.85742 5.7334V9.59961C9.85742 9.89876 10.1003 10.1416 10.3994 10.1416H12.2656C12.5648 10.1416 12.8076 9.89876 12.8076 9.59961V5.7334C12.8076 5.43424 12.5648 5.19141 12.2656 5.19141H10.3994Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      ae = (0, lE.a)({
        name: "align-v-center-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 0.807617, y: 1.474609, width: 14.384766, height: 13.050781 },
          visualBounds: { x: 0.807617, y: 1.474609, width: 14.384766, height: 13.050781 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 0.807617, y: 1.474609, width: 14.384766, height: 13.050781 },
          center: { x: 8, y: 8 },
          insets: { top: 1.474609, right: 0.807617, bottom: 1.47461, left: 0.807617 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
        },
        capabilities: ["icon"],
        body: '<path d="M5.59961 1.47461C6.47846 1.47475 7.19127 2.18756 7.19141 3.06641V7.47461H8.80762V5.7334C8.80762 4.85435 9.52036 4.1416 10.3994 4.1416H12.2656C13.1447 4.1416 13.8574 4.85435 13.8574 5.7334V7.47461H14.667C14.9569 7.47461 15.1924 7.71005 15.1924 8C15.1924 8.28995 14.9569 8.52539 14.667 8.52539H13.8574V10.2666C13.8574 11.1457 13.1447 11.8584 12.2656 11.8584H10.3994C9.52036 11.8584 8.80762 11.1457 8.80762 10.2666V8.52539H7.19141V12.9336C7.19127 13.8124 6.47846 14.5253 5.59961 14.5254H3.73242C2.85358 14.5252 2.14077 13.8124 2.14062 12.9336V8.52539H1.33301C1.04306 8.52539 0.807617 8.28995 0.807617 8C0.807617 7.71005 1.04306 7.47461 1.33301 7.47461H2.14062V3.06641C2.14077 2.18756 2.85357 1.47475 3.73242 1.47461H5.59961ZM3.73242 2.52539C3.43347 2.52553 3.19155 2.76746 3.19141 3.06641V12.9336C3.19155 13.2325 3.43347 13.4745 3.73242 13.4746H5.59961C5.89856 13.4745 6.14048 13.2325 6.14062 12.9336V3.06641C6.14048 2.76746 5.89856 2.52553 5.59961 2.52539H3.73242ZM10.3994 5.19141C10.1003 5.19141 9.85742 5.43424 9.85742 5.7334V10.2666C9.85742 10.5658 10.1003 10.8086 10.3994 10.8086H12.2656C12.5648 10.8086 12.8076 10.5658 12.8076 10.2666V5.7334C12.8076 5.43424 12.5648 5.19141 12.2656 5.19141H10.3994Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      at = (0, lE.a)({
        name: "align-v-top-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.474609, y: 2.141113, width: 13.050781, height: 12.383789 },
          visualBounds: { x: 1.474609, y: 2.141113, width: 13.050781, height: 12.383789 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.474609, y: 2.141113, width: 13.050781, height: 12.383789 },
          center: { x: 8, y: 8.333008 },
          insets: { top: 2.141113, right: 1.47461, bottom: 1.475098, left: 1.474609 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8.333008 }, foreground: { x: 8, y: 8.333008 } },
        },
        capabilities: ["icon"],
        body: '<path d="M5.59961 4.80811C6.47846 4.80825 7.19127 5.52106 7.19141 6.3999V12.9331C7.19114 13.8118 6.47838 14.5248 5.59961 14.5249H3.73242C2.85365 14.5248 2.14089 13.8118 2.14062 12.9331V6.3999C2.14077 5.52106 2.85357 4.80825 3.73242 4.80811H5.59961ZM3.73242 5.85889C3.43347 5.85903 3.19155 6.10095 3.19141 6.3999V12.9331C3.19167 13.2319 3.43355 13.475 3.73242 13.4751H5.59961C5.89848 13.475 6.14036 13.2319 6.14062 12.9331V6.3999C6.14048 6.10095 5.89856 5.85903 5.59961 5.85889H3.73242Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M12.2656 4.80811C13.1446 4.80811 13.8573 5.52097 13.8574 6.3999V10.2671C13.857 11.1458 13.1444 11.8589 12.2656 11.8589H10.3994C9.52061 11.8589 8.80802 11.1458 8.80762 10.2671V6.3999C8.80776 5.52097 9.52045 4.80811 10.3994 4.80811H12.2656ZM10.3994 5.85889C10.1003 5.85889 9.85756 6.10087 9.85742 6.3999V10.2671C9.85783 10.5659 10.1005 10.8081 10.3994 10.8081H12.2656C12.5645 10.8081 12.8072 10.5659 12.8076 10.2671V6.3999C12.8075 6.10087 12.5647 5.85889 12.2656 5.85889H10.3994Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14 2.14111C14.2899 2.14111 14.5254 2.37655 14.5254 2.6665C14.5254 2.95645 14.2899 3.19189 14 3.19189H2C1.71005 3.19189 1.47461 2.95645 1.47461 2.6665C1.47461 2.37655 1.71005 2.14111 2 2.14111H14Z" fill="currentColor"/>',
      })
    function an(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d = (0, i.c)(16),
        { onAlign: c, showTitle: u } = e,
        p = void 0 === u || u,
        h = (0, ir.A)()
      if (d[0] !== h || d[1] !== c || d[2] !== p) {
        let e = [
          {
            id: "left",
            asset: l8,
            label: h.formatMessage({ id: "presentationEditor.objectLeft", defaultMessage: "Align objects left" }),
          },
          {
            id: "center",
            asset: l6,
            label: h.formatMessage({
              id: "presentationEditor.objectCenter",
              defaultMessage: "Align objects horizontally",
            }),
          },
          {
            id: "right",
            asset: l9,
            label: h.formatMessage({ id: "presentationEditor.objectRight", defaultMessage: "Align objects right" }),
          },
          {
            id: "top",
            asset: at,
            label: h.formatMessage({ id: "presentationEditor.objectTop", defaultMessage: "Align objects top" }),
          },
          {
            id: "middle",
            asset: ae,
            label: h.formatMessage({
              id: "presentationEditor.objectMiddle",
              defaultMessage: "Align objects vertically",
            }),
          },
          {
            id: "bottom",
            asset: l7,
            label: h.formatMessage({ id: "presentationEditor.objectBottom", defaultMessage: "Align objects bottom" }),
          },
        ]
        ;((t = ls.l),
          d[7] !== p
            ? ((a = p ? (0, r.jsx)(ii.A, { id: "presentationEditor.layout", defaultMessage: "Layout" }) : void 0),
              (d[7] = p),
              (d[8] = a))
            : (a = d[8]),
          (n = "flex gap-2"),
          (l = [e.slice(0, 3), e.slice(3)].map((e, t) =>
            (0, r.jsx)(
              lM.T,
              {
                className: "flex-1",
                fullWidth: !0,
                variant: "field",
                focusRing: "surface",
                unselectedColor: "ghostActive",
                selectedId: null,
                onSelect: c,
                options: e.map(ar),
              },
              t,
            ),
          )),
          (d[0] = h),
          (d[1] = c),
          (d[2] = p),
          (d[3] = t),
          (d[4] = n),
          (d[5] = l),
          (d[6] = a))
      } else ((t = d[3]), (n = d[4]), (l = d[5]), (a = d[6]))
      return (
        d[9] !== n || d[10] !== l
          ? ((o = (0, r.jsx)("div", { className: n, children: l })), (d[9] = n), (d[10] = l), (d[11] = o))
          : (o = d[11]),
        d[12] !== t || d[13] !== a || d[14] !== o
          ? ((s = (0, r.jsx)(t, { title: a, children: o })), (d[12] = t), (d[13] = a), (d[14] = o), (d[15] = s))
          : (s = d[15]),
        s
      )
    }
    function ar(e) {
      let { id: t, asset: n, label: i } = e
      return { id: t, label: (0, r.jsx)(iq.I, { asset: n }), ariaLabel: i, tooltipContent: i }
    }
    function ai(e) {
      let t = e.flatMap((e) => (e.text ? [e.text] : [])),
        n = t[0]
      if (!n) return null
      let r = (e) => (t.every((t) => t[e] === n[e]) ? n[e] : void 0)
      return {
        typeface: r("typeface"),
        fontSize: r("fontSize"),
        bold: r("bold"),
        italic: r("italic"),
        underline: r("underline"),
        strikethrough: r("strikethrough"),
        alignment: r("alignment"),
        color: r("color"),
        opacityPct: r("opacityPct"),
        wrap: r("wrap"),
        autoFit: r("autoFit"),
        list: r("list"),
      }
    }
    function al(e) {
      return "shape" === e.kind && null != e.text && "none" === e.fillMode && !e.line?.width
    }
    let aa = {
      light: { angle: 90, blur: 2, distance: 1, sizePct: 100, color: "#000000", opacityPct: 10 },
      medium: { angle: 90, blur: 8, distance: 4, sizePct: 100, color: "#000000", opacityPct: 16 },
      strong: { angle: 90, blur: 15, distance: 10, sizePct: 100, color: "#000000", opacityPct: 16 },
      heavy: { angle: 90, blur: 25, distance: 20, sizePct: 100, color: "#000000", opacityPct: 18 },
    }
    function ao(e) {
      let t,
        n = (0, i.c)(10),
        { selection: l, palette: a, onChange: o } = e,
        s = (0, ir.A)(),
        [c, u] = (0, d.useState)(!1)
      if (n[0] !== s || n[1] !== o || n[2] !== a || n[3] !== l || n[4] !== c) {
        let e,
          i,
          d,
          p = l.map(ad),
          h = p[0],
          m = p.some(as)
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = ["angle", "blur", "distance", "sizePct", "color", "opacityPct"]), (n[6] = e))
          : (e = n[6])
        let f = e,
          g = p.some((e) => f.some((t) => e?.[t] !== h?.[t])),
          x = (e) => (p.every((t) => t?.[e] === h?.[e]) ? (h?.[e] ?? null) : null),
          b = ["light", "medium", "strong", "heavy"].find((e) => {
            let t = aa[e]
            return p.every((e) => null != e && f.every((n) => t[n] === e[n]))
          }),
          y = c || null == b
        ;(n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(ii.A, { id: "presentationEditor.shadow", defaultMessage: "Shadow" })), (n[7] = i))
          : (i = n[7]),
          n[8] !== s
            ? ((d = s.formatMessage({ id: "presentationEditor.toggleShadow", defaultMessage: "Toggle shadow" })),
              (n[8] = s),
              (n[9] = d))
            : (d = n[9]),
          (t = (0, r.jsx)(ls.l, {
            collapsed: !m,
            title: i,
            action: (0, r.jsx)(lc.p, { enabled: m, label: d, onClick: () => o({ shadow: m ? null : aa.medium }) }),
            children:
              m &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(i3.Ab, {
                    side: "left",
                    align: "start",
                    contentClassName: "min-w-50",
                    triggerButton: (0, r.jsxs)(lw.c, {
                      className: "w-full justify-between",
                      "aria-label": s.formatMessage({
                        id: "presentationEditor.shadowStyle",
                        defaultMessage: "Shadow style",
                      }),
                      children: [
                        g && !c
                          ? (0, r.jsx)(ii.A, { id: "presentationEditor.mixed", defaultMessage: "Mixed" })
                          : (0, r.jsx)(ii.A, { ...ac[y ? "custom" : b] }),
                        (0, r.jsx)(ip.HIf, {}),
                      ],
                    }),
                    children: [
                      ["light", "medium", "strong", "heavy"].map((e) =>
                        (0, r.jsx)(
                          i3.ms.Item,
                          {
                            rightIcon: y || b !== e ? void 0 : (0, r.jsx)(ip.ALZ, {}),
                            onSelect: () => {
                              ;(u(!1), o({ shadow: aa[e] }))
                            },
                            children: (0, r.jsx)(ii.A, { ...ac[e] }),
                          },
                          e,
                        ),
                      ),
                      (0, r.jsx)(i3.ms.Separator, {}),
                      (0, r.jsx)(i3.ms.Item, { onSelect: () => u(!0), children: (0, r.jsx)(ii.A, { ...ac.custom }) }),
                    ],
                  }),
                  y &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, r.jsx)(lp, {
                              label: s.formatMessage({ id: "presentationEditor.shadowAngle", defaultMessage: "Angle" }),
                              presets: [0, 45, 90, 135, 180, 270],
                              side: "left",
                              value: x("angle"),
                              max: 360,
                              suffix: "\xb0",
                              onChange: (e) => o({ shadow: { angle: e } }),
                            }),
                            (0, r.jsx)(lp, {
                              label: s.formatMessage({ id: "presentationEditor.shadowBlur", defaultMessage: "Blur" }),
                              presets: [0, 4, 8, 16, 24, 32],
                              side: "bottom",
                              value: x("blur"),
                              max: 100,
                              onChange: (e) => o({ shadow: { blur: e } }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, r.jsx)(lp, {
                              label: s.formatMessage({ id: "presentationEditor.shadowSize", defaultMessage: "Size" }),
                              presets: [50, 75, 100, 125, 150, 200],
                              side: "left",
                              value: x("sizePct"),
                              max: 200,
                              suffix: "%",
                              onChange: (e) => o({ shadow: { sizePct: e } }),
                            }),
                            (0, r.jsx)(lp, {
                              label: s.formatMessage({
                                id: "presentationEditor.shadowDistance",
                                defaultMessage: "Distance",
                              }),
                              presets: [0, 2, 4, 8, 16, 24],
                              side: "bottom",
                              value: x("distance"),
                              max: 200,
                              onChange: (e) => o({ shadow: { distance: e } }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex min-w-0 flex-1 flex-col gap-1.5",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "text-xs text-secondary",
                                  children: (0, r.jsx)(ii.A, {
                                    id: "presentationEditor.shadowColorLabel",
                                    defaultMessage: "Color",
                                  }),
                                }),
                                (0, r.jsx)(lo.v, {
                                  side: "left",
                                  palette: a,
                                  label: s.formatMessage({
                                    id: "presentationEditor.shadowColor",
                                    defaultMessage: "Shadow color",
                                  }),
                                  color: x("color"),
                                  onChange: (e) => o({ shadow: { color: e } }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(lp, {
                              label: s.formatMessage({
                                id: "presentationEditor.shadowOpacity",
                                defaultMessage: "Opacity",
                              }),
                              presets: [0, 25, 50, 75, 100],
                              side: "bottom",
                              value: x("opacityPct"),
                              max: 100,
                              suffix: "%",
                              onChange: (e) => o({ shadow: { opacityPct: e } }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
          })),
          (n[0] = s),
          (n[1] = o),
          (n[2] = a),
          (n[3] = l),
          (n[4] = c),
          (n[5] = t))
      } else t = n[5]
      return t
    }
    function as(e) {
      return null != e
    }
    function ad(e) {
      return e.shadow
    }
    let ac = (0, iM.YK)({
      light: { id: "presentationEditor.shadowLight", defaultMessage: "Light" },
      medium: { id: "presentationEditor.shadowMedium", defaultMessage: "Medium" },
      strong: { id: "presentationEditor.shadowStrong", defaultMessage: "Strong" },
      heavy: { id: "presentationEditor.shadowHeavy", defaultMessage: "Heavy" },
      custom: { id: "presentationEditor.shadowCustom", defaultMessage: "Custom" },
    })
    var au = n("oMB9"),
      ap = n("Rqzk"),
      ah = n("WiRn"),
      am = n("fnZv"),
      af = n("xJq2"),
      ag = n("F0xz"),
      ax = n("B4U9"),
      ab = n("lRyO"),
      ay = n("MgFj"),
      av = n("T2zS"),
      aw = n("s4Of"),
      aC = n("WIy3")
    function aS(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v,
        w,
        C,
        S,
        k,
        I,
        E,
        j,
        M,
        T,
        A,
        P = (0, i.c)(76),
        { text: L, onChange: F, showLists: R } = e,
        D = void 0 === R || R,
        N = (0, ir.A)()
      ;(P[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)(ii.A, { id: "presentationEditor.typography", defaultMessage: "Typography" })), (P[0] = t))
        : (t = P[0]),
        P[1] !== F ? ((n = (e) => F({ textTypeface: e })), (P[1] = F), (P[2] = n)) : (n = P[2]),
        P[3] !== n || P[4] !== L.typeface
          ? ((l = (0, r.jsx)(aC.b, { value: L.typeface, onChange: n })), (P[3] = n), (P[4] = L.typeface), (P[5] = l))
          : (l = P[5]))
      let z = L.fontSize ?? null
      ;(P[6] !== F ? ((a = (e) => F({ textFontSize: e })), (P[6] = F), (P[7] = a)) : (a = P[7]),
        P[8] !== z || P[9] !== a
          ? ((o = (0, r.jsx)(aw.r, { variant: "field", scale: "presentation", value: z, onChange: a })),
            (P[8] = z),
            (P[9] = a),
            (P[10] = o))
          : (o = P[10]),
        P[11] !== l || P[12] !== o
          ? ((s = (0, r.jsxs)("div", { className: "grid grid-cols-2 gap-2", children: [l, o] })),
            (P[11] = l),
            (P[12] = o),
            (P[13] = s))
          : (s = P[13]))
      let B = L.bold ?? "mixed"
      ;(P[14] !== N
        ? ((d = N.formatMessage({ id: "presentationEditor.bold", defaultMessage: "Bold" })), (P[14] = N), (P[15] = d))
        : (d = P[15]),
        P[16] !== F || P[17] !== L.bold
          ? ((c = () => F({ textBold: !L.bold })), (P[16] = F), (P[17] = L.bold), (P[18] = c))
          : (c = P[18]),
        P[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(iq.I, { asset: ax.e })), (P[19] = u))
          : (u = P[19]),
        P[20] !== d || P[21] !== c || P[22] !== B
          ? ((p = (0, r.jsx)(lw.c, {
              className: "flex-1 justify-center",
              "aria-pressed": B,
              "aria-label": d,
              onClick: c,
              children: u,
            })),
            (P[20] = d),
            (P[21] = c),
            (P[22] = B),
            (P[23] = p))
          : (p = P[23]))
      let O = L.italic ?? "mixed"
      ;(P[24] !== N
        ? ((h = N.formatMessage({ id: "presentationEditor.italic", defaultMessage: "Italic" })),
          (P[24] = N),
          (P[25] = h))
        : (h = P[25]),
        P[26] !== F || P[27] !== L.italic
          ? ((m = () => F({ textItalic: !L.italic })), (P[26] = F), (P[27] = L.italic), (P[28] = m))
          : (m = P[28]),
        P[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(iq.I, { asset: ab.b })), (P[29] = f))
          : (f = P[29]),
        P[30] !== O || P[31] !== h || P[32] !== m
          ? ((g = (0, r.jsx)(lw.c, {
              className: "flex-1 justify-center",
              "aria-pressed": O,
              "aria-label": h,
              onClick: m,
              children: f,
            })),
            (P[30] = O),
            (P[31] = h),
            (P[32] = m),
            (P[33] = g))
          : (g = P[33]))
      let V = L.strikethrough ?? "mixed"
      ;(P[34] !== N
        ? ((x = N.formatMessage({ id: "presentationEditor.strikethrough", defaultMessage: "Strikethrough" })),
          (P[34] = N),
          (P[35] = x))
        : (x = P[35]),
        P[36] !== F || P[37] !== L.strikethrough
          ? ((b = () => F({ textStrikethrough: !L.strikethrough })),
            (P[36] = F),
            (P[37] = L.strikethrough),
            (P[38] = b))
          : (b = P[38]),
        P[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)(iq.I, { asset: ay.s })), (P[39] = y))
          : (y = P[39]),
        P[40] !== V || P[41] !== x || P[42] !== b
          ? ((v = (0, r.jsx)(lw.c, {
              className: "flex-1 justify-center",
              "aria-pressed": V,
              "aria-label": x,
              onClick: b,
              children: y,
            })),
            (P[40] = V),
            (P[41] = x),
            (P[42] = b),
            (P[43] = v))
          : (v = P[43]))
      let H = L.underline ?? "mixed"
      return (
        P[44] !== N
          ? ((w = N.formatMessage({ id: "presentationEditor.underline", defaultMessage: "Underline" })),
            (P[44] = N),
            (P[45] = w))
          : (w = P[45]),
        P[46] !== F || P[47] !== L.underline
          ? ((C = () => F({ textUnderline: !L.underline })), (P[46] = F), (P[47] = L.underline), (P[48] = C))
          : (C = P[48]),
        P[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, r.jsx)(iq.I, { asset: av.U })), (P[49] = S))
          : (S = P[49]),
        P[50] !== H || P[51] !== w || P[52] !== C
          ? ((k = (0, r.jsx)(lw.c, {
              className: "flex-1 justify-center",
              "aria-pressed": H,
              "aria-label": w,
              onClick: C,
              children: S,
            })),
            (P[50] = H),
            (P[51] = w),
            (P[52] = C),
            (P[53] = k))
          : (k = P[53]),
        P[54] !== p || P[55] !== g || P[56] !== v || P[57] !== k
          ? ((I = (0, r.jsxs)("div", { className: "flex gap-2", children: [p, g, v, k] })),
            (P[54] = p),
            (P[55] = g),
            (P[56] = v),
            (P[57] = k),
            (P[58] = I))
          : (I = P[58]),
        P[59] !== F ? ((E = (e) => F({ textAlignment: e })), (P[59] = F), (P[60] = E)) : (E = P[60]),
        P[61] !== E || P[62] !== L.alignment
          ? ((j = (0, r.jsx)(aC.D, { value: L.alignment, onChange: E })),
            (P[61] = E),
            (P[62] = L.alignment),
            (P[63] = j))
          : (j = P[63]),
        P[64] !== N || P[65] !== F || P[66] !== D || P[67] !== L.list
          ? ((M =
              D &&
              (0, r.jsx)(lM.T, {
                className: "flex-1",
                fullWidth: !0,
                variant: "field",
                focusRing: "surface",
                unselectedColor: "ghostActive",
                ariaLabel: N.formatMessage({ id: "presentationEditor.list", defaultMessage: "List" }),
                selectedId: L.list ?? null,
                onSelect: (e) => F({ textList: e }),
                options: [
                  {
                    id: "none",
                    label: (0, r.jsx)(iq.I, { asset: lI.L }),
                    ariaLabel: N.formatMessage({ id: "presentationEditor.noList", defaultMessage: "No list" }),
                  },
                  {
                    id: "bullets",
                    label: (0, r.jsx)(ip.gYX, {}),
                    ariaLabel: N.formatMessage({ id: "presentationEditor.bullets", defaultMessage: "Bulleted list" }),
                  },
                  {
                    id: "numbered",
                    label: (0, r.jsx)(ip.phU, {}),
                    ariaLabel: N.formatMessage({ id: "presentationEditor.numbered", defaultMessage: "Numbered list" }),
                  },
                ],
              })),
            (P[64] = N),
            (P[65] = F),
            (P[66] = D),
            (P[67] = L.list),
            (P[68] = M))
          : (M = P[68]),
        P[69] !== j || P[70] !== M
          ? ((T = (0, r.jsxs)("div", { className: "flex gap-2", children: [j, M] })),
            (P[69] = j),
            (P[70] = M),
            (P[71] = T))
          : (T = P[71]),
        P[72] !== I || P[73] !== T || P[74] !== s
          ? ((A = (0, r.jsxs)(ls.l, { title: t, children: [s, I, T] })),
            (P[72] = I),
            (P[73] = T),
            (P[74] = s),
            (P[75] = A))
          : (A = P[75]),
        A
      )
    }
    function ak(e) {
      let t,
        n,
        l,
        a,
        o,
        s = (0, i.c)(33),
        { palette: c, source: u, section: p } = e,
        h = void 0 === p ? "all" : p,
        m = (0, ir.A)(),
        f = (0, d.useSyncExternalStore)(u.subscribe, u.getSnapshot, aE)
      if (!f) return null
      s[0] !== u || s[1] !== f.columnCount || s[2] !== f.rowCount || s[3] !== f.selection?.range || s[4] !== f.tableId
        ? ((t = (e) =>
            u.edit({
              type: "set-cell-style",
              tableId: f.tableId,
              range: f.selection?.range ?? { row: 0, column: 0, rowCount: f.rowCount, columnCount: f.columnCount },
              style: e,
            })),
          (s[0] = u),
          (s[1] = f.columnCount),
          (s[2] = f.rowCount),
          (s[3] = f.selection?.range),
          (s[4] = f.tableId),
          (s[5] = t))
        : (t = s[5])
      let g = t
      return (
        s[6] !== m ||
        s[7] !== h ||
        s[8] !== u ||
        s[9] !== f.headerColumn ||
        s[10] !== f.headerRow ||
        s[11] !== f.tableId
          ? ((n =
              "all" === h &&
              (0, r.jsxs)(ls.l, {
                title: (0, r.jsx)(ii.A, { id: "presentationEditor.tableOptions", defaultMessage: "Table options" }),
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between text-xs text-secondary",
                    children: [
                      (0, r.jsx)(ii.A, { id: "presentationEditor.headerRow", defaultMessage: "Header row" }),
                      (0, r.jsx)(ag.l, {
                        tone: "neutral",
                        size: "sm",
                        checked: f.headerRow,
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.headerRow",
                          defaultMessage: "Header row",
                        }),
                        onChange: (e) => u.edit({ type: "set-table-options", tableId: f.tableId, headerRow: e }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between text-xs text-secondary",
                    children: [
                      (0, r.jsx)(ii.A, { id: "presentationEditor.headerColumn", defaultMessage: "Header column" }),
                      (0, r.jsx)(ag.l, {
                        tone: "neutral",
                        size: "sm",
                        checked: f.headerColumn,
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.headerColumn",
                          defaultMessage: "Header column",
                        }),
                        onChange: (e) => u.edit({ type: "set-table-options", tableId: f.tableId, headerColumn: e }),
                      }),
                    ],
                  }),
                ],
              })),
            (s[6] = m),
            (s[7] = h),
            (s[8] = u),
            (s[9] = f.headerColumn),
            (s[10] = f.headerRow),
            (s[11] = f.tableId),
            (s[12] = n))
          : (n = s[12]),
        s[13] !== g || s[14] !== m || s[15] !== c || s[16] !== h || s[17] !== f.style
          ? ((l =
              "borders" !== h &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(aS, {
                    text: f.style,
                    showLists: !1,
                    onChange: (e) =>
                      g({
                        typeface: e.textTypeface,
                        fontSize: e.textFontSize,
                        bold: e.textBold,
                        italic: e.textItalic,
                        underline: e.textUnderline,
                        strikethrough: e.textStrikethrough,
                        alignment: e.textAlignment,
                      }),
                  }),
                  "all" === h &&
                    (0, r.jsx)(ls.l, {
                      title: (0, r.jsx)(ii.A, { id: "presentationEditor.tableFill", defaultMessage: "Fill" }),
                      children: (0, r.jsxs)("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          (0, r.jsx)(lo.v, {
                            side: "left",
                            palette: c,
                            label: m.formatMessage({
                              id: "presentationEditor.fillColor",
                              defaultMessage: "Fill color",
                            }),
                            color: f.style.fillColor ?? null,
                            onChange: (e) => g({ fillColor: e }),
                          }),
                          (0, r.jsx)(lR, {
                            label: m.formatMessage({
                              id: "presentationEditor.fillOpacity",
                              defaultMessage: "Fill opacity",
                            }),
                            value: f.style.fillOpacityPct ?? null,
                            onChange: (e) => g({ fillOpacityPct: e }),
                          }),
                        ],
                      }),
                    }),
                  (0, r.jsx)(ls.l, {
                    title: (0, r.jsx)(ii.A, { id: "presentationEditor.textColor", defaultMessage: "Text color" }),
                    children: (0, r.jsxs)("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        (0, r.jsx)(lo.v, {
                          side: "all" === h ? "left" : "bottom",
                          palette: c,
                          label: m.formatMessage({ id: "presentationEditor.textColor", defaultMessage: "Text color" }),
                          color: f.style.color ?? null,
                          onChange: (e) => g({ color: e }),
                        }),
                        (0, r.jsx)(lR, {
                          label: m.formatMessage({
                            id: "presentationEditor.textOpacity",
                            defaultMessage: "Text opacity",
                          }),
                          value: f.style.opacityPct ?? null,
                          onChange: (e) => g({ opacityPct: e }),
                        }),
                      ],
                    }),
                  }),
                ],
              })),
            (s[13] = g),
            (s[14] = m),
            (s[15] = c),
            (s[16] = h),
            (s[17] = f.style),
            (s[18] = l))
          : (l = s[18]),
        s[19] !== m ||
        s[20] !== c ||
        s[21] !== h ||
        s[22] !== u ||
        s[23] !== f.columnCount ||
        s[24] !== f.rowCount ||
        s[25] !== f.selection?.range ||
        s[26] !== f.style ||
        s[27] !== f.tableId
          ? ((a =
              "typography" !== h &&
              (0, r.jsxs)(ls.l, {
                title: (0, r.jsx)(ii.A, { id: "presentationEditor.border", defaultMessage: "Border" }),
                children: [
                  (0, r.jsx)(lM.T, {
                    fullWidth: !0,
                    variant: "field",
                    focusRing: "surface",
                    selectedId: f.style.borderEdges ?? null,
                    onSelect: (e) => {
                      u.edit({
                        type: "set-border-preset",
                        tableId: f.tableId,
                        range: f.selection?.range ?? {
                          row: 0,
                          column: 0,
                          rowCount: f.rowCount,
                          columnCount: f.columnCount,
                        },
                        preset: e,
                      })
                    },
                    options: [
                      {
                        id: "all",
                        label: (0, r.jsx)(iq.I, { asset: au.x }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.allBorders",
                          defaultMessage: "All borders",
                        }),
                      },
                      {
                        id: "inside",
                        label: (0, r.jsx)(iq.I, { asset: ah.E }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.innerBorders",
                          defaultMessage: "Inner borders",
                        }),
                      },
                      {
                        id: "columns",
                        label: (0, r.jsx)(iq.I, { asset: ap.x }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.columnBorders",
                          defaultMessage: "Column borders",
                        }),
                      },
                      {
                        id: "rows",
                        label: (0, r.jsx)(iq.I, { asset: af.f }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.rowBorders",
                          defaultMessage: "Row borders",
                        }),
                      },
                      {
                        id: "none",
                        label: (0, r.jsx)(iq.I, { asset: am.a }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.noBorders",
                          defaultMessage: "No borders",
                        }),
                      },
                    ].map(aI),
                  }),
                  "none" !== f.style.borderEdges &&
                    (0, r.jsxs)("div", {
                      className: "grid grid-cols-2 items-end gap-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-1.5",
                          "data-inspector-field-label": !0,
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-xs text-secondary",
                              children: (0, r.jsx)(ii.A, {
                                id: "presentationEditor.borderColorLabel",
                                defaultMessage: "Color",
                              }),
                            }),
                            (0, r.jsx)(lo.v, {
                              side: "left",
                              palette: c,
                              label: m.formatMessage({
                                id: "presentationEditor.borderColor",
                                defaultMessage: "Border color",
                              }),
                              color: f.style.borderColor ?? "#000000",
                              onChange: (e) =>
                                u.edit({
                                  type: "format-existing-borders",
                                  tableId: f.tableId,
                                  range: f.selection?.range ?? {
                                    row: 0,
                                    column: 0,
                                    rowCount: f.rowCount,
                                    columnCount: f.columnCount,
                                  },
                                  color: e,
                                }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(lp, {
                          side: "bottom",
                          label: m.formatMessage({ id: "presentationEditor.borderWeight", defaultMessage: "Weight" }),
                          value: f.style.borderWidth ?? null,
                          onChange: (e) =>
                            u.edit({
                              type: "format-existing-borders",
                              tableId: f.tableId,
                              range: f.selection?.range ?? {
                                row: 0,
                                column: 0,
                                rowCount: f.rowCount,
                                columnCount: f.columnCount,
                              },
                              width: e,
                            }),
                        }),
                      ],
                    }),
                ],
              })),
            (s[19] = m),
            (s[20] = c),
            (s[21] = h),
            (s[22] = u),
            (s[23] = f.columnCount),
            (s[24] = f.rowCount),
            (s[25] = f.selection?.range),
            (s[26] = f.style),
            (s[27] = f.tableId),
            (s[28] = a))
          : (a = s[28]),
        s[29] !== n || s[30] !== l || s[31] !== a
          ? ((o = (0, r.jsxs)(r.Fragment, { children: [n, l, a] })), (s[29] = n), (s[30] = l), (s[31] = a), (s[32] = o))
          : (o = s[32]),
        o
      )
    }
    function aI(e) {
      return { ...e, tooltipContent: e.ariaLabel }
    }
    function aE() {
      return null
    }
    let aj = [
        { id: "moss", name: "Moss", accentColors: ["#293D73", "#466548", "#0B2D0D", "#333840", "#F8D45D", "#C7CCD1"] },
        {
          id: "sunset",
          name: "Sunset",
          accentColors: ["#F43F5E", "#EA580C", "#F97316", "#10B981", "#3B82F6", "#8B5CF6"],
        },
        {
          id: "berry",
          name: "Berry",
          accentColors: ["#7C3AED", "#DB2777", "#06B6D4", "#16A34A", "#F59E0B", "#EC4899"],
        },
        {
          id: "slate",
          name: "Slate",
          accentColors: ["#1E293B", "#334155", "#475569", "#64748B", "#94A3B8", "#CBD5E1"],
        },
        {
          id: "coral",
          name: "Coral",
          accentColors: ["#9D174D", "#BE185D", "#F472B6", "#FB7185", "#FF7A59", "#FF9F43"],
        },
        {
          id: "midnight",
          name: "Midnight Sky",
          accentColors: ["#1E3A8A", "#0A1C43", "#2C3847", "#FBBF24", "#DBEAFE", "#0D1621"],
        },
      ],
      aM = new WeakMap()
    function aT(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        u,
        p,
        h,
        m,
        f,
        g = (0, i.c)(42),
        { controller: x, theme: b, onChange: y } = e,
        v = (0, ir.A)()
      if (!(0, ix.Zj)("81958737")) return null
      g[0] !== b ? ((t = aj.find((e) => aP(e, b))), (g[0] = b), (g[1] = t)) : (t = g[1])
      let w = t
      if (g[2] !== x || g[3] !== v || g[4] !== y || g[5] !== w || g[6] !== b) {
        let e,
          t,
          i,
          m,
          f = aM.get(x) ?? []
        null != w || f.some((e) => aP(e, b)) || (f = [...f, b])
        let C = [...f, ...aj]
        ;((l = ls.l),
          g[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, r.jsx)(ii.A, { id: "presentationEditor.theme", defaultMessage: "Presentation theme" })),
              (g[17] = h))
            : (h = g[17]),
          (n = i3.Ab),
          (a = "start"),
          (o = "bottom"),
          (s = "menuReadout"),
          (d = "pointer-events-auto"),
          (c = aA),
          g[18] !== v
            ? ((e = v.formatMessage({
                id: "presentationEditor.chooseTheme",
                defaultMessage: "Choose presentation theme",
              })),
              (g[18] = v),
              (g[19] = e))
            : (e = g[19]),
          g[20] !== b ? ((t = aL(b)), (g[20] = b), (g[21] = t)) : (t = g[21]),
          g[22] !== t || g[23] !== b
            ? ((i = (0, r.jsx)(aF, { theme: b, label: t })), (g[22] = t), (g[23] = b), (g[24] = i))
            : (i = g[24]),
          g[25] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, r.jsx)(ip.HIf, {})), (g[25] = m)) : (m = g[25]),
          g[26] !== e || g[27] !== i
            ? ((u = (0, r.jsxs)(i4.$, {
                color: "outlineSurface",
                size: "settingsOption",
                className: "w-full",
                "aria-label": e,
                children: [i, m],
              })),
              (g[26] = e),
              (g[27] = i),
              (g[28] = u))
            : (u = g[28]),
          (p = C.map((e) => {
            let t
            return (
              aP(e, b) && (t = (0, r.jsx)(ip.ALZ, {})),
              (0, r.jsx)(
                i3.ms.Item,
                {
                  rightIcon: t,
                  onSelect: () => {
                    ;(null == w && aM.set(x, f), y({ name: e.name, accentColors: e.accentColors }))
                  },
                  children: (0, r.jsx)(aF, { theme: e, label: aL(e) }),
                },
                `${e.name}:${e.accentColors.join(",")}`,
              )
            )
          })),
          (g[2] = x),
          (g[3] = v),
          (g[4] = y),
          (g[5] = w),
          (g[6] = b),
          (g[7] = n),
          (g[8] = l),
          (g[9] = a),
          (g[10] = o),
          (g[11] = s),
          (g[12] = d),
          (g[13] = c),
          (g[14] = u),
          (g[15] = p),
          (g[16] = h))
      } else
        ((n = g[7]),
          (l = g[8]),
          (a = g[9]),
          (o = g[10]),
          (s = g[11]),
          (d = g[12]),
          (c = g[13]),
          (u = g[14]),
          (p = g[15]),
          (h = g[16]))
      return (
        g[29] !== n ||
        g[30] !== a ||
        g[31] !== o ||
        g[32] !== s ||
        g[33] !== d ||
        g[34] !== c ||
        g[35] !== u ||
        g[36] !== p
          ? ((m = (0, r.jsx)(n, {
              align: a,
              side: o,
              contentWidth: s,
              contentClassName: d,
              contentRef: c,
              triggerButton: u,
              children: p,
            })),
            (g[29] = n),
            (g[30] = a),
            (g[31] = o),
            (g[32] = s),
            (g[33] = d),
            (g[34] = c),
            (g[35] = u),
            (g[36] = p),
            (g[37] = m))
          : (m = g[37]),
        g[38] !== l || g[39] !== m || g[40] !== h
          ? ((f = (0, r.jsx)(l, { title: h, children: m })), (g[38] = l), (g[39] = m), (g[40] = h), (g[41] = f))
          : (f = g[41]),
        f
      )
    }
    function aA(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function aP(e, t) {
      return (
        e.name === t.name &&
        e.accentColors.length === t.accentColors.length &&
        e.accentColors.every((e, n) => e.toLowerCase() === t.accentColors[n]?.toLowerCase())
      )
    }
    function aL(e) {
      let t = aj.find((t) => aP(t, e))
      return t ? (0, r.jsx)(ii.A, { ...aD[t.id] }) : e.name
    }
    function aF(e) {
      let t,
        n,
        l,
        a,
        o = (0, i.c)(9),
        { theme: s, label: d } = e
      return (
        o[0] !== s.accentColors ? ((t = s.accentColors.map(aR)), (o[0] = s.accentColors), (o[1] = t)) : (t = o[1]),
        o[2] !== t
          ? ((n = (0, r.jsx)("span", {
              "aria-hidden": !0,
              className: "grid w-12 shrink-0 grid-cols-3 overflow-hidden rounded-xs",
              children: t,
            })),
            (o[2] = t),
            (o[3] = n))
          : (n = o[3]),
        o[4] !== d
          ? ((l = (0, r.jsx)("span", {
              className: "min-w-0 flex-1 truncate text-sm leading-4.5 font-normal",
              children: d,
            })),
            (o[4] = d),
            (o[5] = l))
          : (l = o[5]),
        o[6] !== n || o[7] !== l
          ? ((a = (0, r.jsxs)("span", {
              className: "flex min-w-0 flex-1 items-center gap-3 text-start",
              children: [n, l],
            })),
            (o[6] = n),
            (o[7] = l),
            (o[8] = a))
          : (a = o[8]),
        a
      )
    }
    function aR(e, t) {
      return (0, r.jsx)("span", { className: "size-4", style: { backgroundColor: e } }, t)
    }
    let aD = (0, iM.YK)({
      moss: { id: "presentationEditor.theme.moss", defaultMessage: "Moss" },
      sunset: { id: "presentationEditor.theme.sunset", defaultMessage: "Sunset" },
      berry: { id: "presentationEditor.theme.berry", defaultMessage: "Berry" },
      slate: { id: "presentationEditor.theme.slate", defaultMessage: "Slate" },
      coral: { id: "presentationEditor.theme.coral", defaultMessage: "Coral" },
      midnight: { id: "presentationEditor.theme.midnight", defaultMessage: "Midnight Sky" },
    })
    function aN(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v,
        w = (0, i.c)(90),
        { controller: C, snapshot: S, panelControls: k, onRequestChanges: I } = e,
        E = (0, ir.A)(),
        j = (0, d.useId)(),
        M = S.inspector.selectedElements,
        T = M[0]
      w[0] !== M ? ((t = ai(M)), (w[0] = M), (w[1] = t)) : (t = w[1])
      let A = t,
        P = M.length > 0 && M.every(al),
        L = M.every((e) => e.fill?.opacityPct === T?.fill?.opacityPct) ? (T?.fill?.opacityPct ?? 100) : null
      w[2] !== C
        ? ((n = (e) => {
            C.updateSelectedElementStyle(e)
          }),
          (w[2] = C),
          (w[3] = n))
        : (n = w[3])
      let F = n,
        R = T?.kind ?? "slide"
      return (
        P && (R = "text"),
        w[4] !== C
          ? ((l = (e) => {
              if (
                e.defaultPrevented ||
                !(e.metaKey || e.ctrlKey) ||
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement ||
                (e.target instanceof HTMLElement && e.target.isContentEditable)
              )
                return
              let t = e.key.toLowerCase()
              ;("z" === t || "y" === t) &&
                (e.preventDefault(), e.stopPropagation(), "y" === t || e.shiftKey ? C.redo() : C.undo())
            }),
            (w[4] = C),
            (w[5] = l))
          : (l = w[5]),
        w[6] !== R || w[7] !== M.length || w[8] !== S.selectedSlideIdx
          ? ((a =
              M.length > 1
                ? (0, r.jsx)(ii.A, {
                    id: "presentationEditor.itemCount",
                    defaultMessage: "{count} items",
                    values: { count: M.length },
                  })
                : (0, r.jsx)(ii.A, {
                    id: "presentationEditor.selectionTitle",
                    defaultMessage:
                      "{kind, select, slide {Slide {number}} text {Text} chart {Chart} table {Table} image {Image} other {Shape}}",
                    values: { kind: R, number: S.selectedSlideIdx + 1 },
                  })),
            (w[6] = R),
            (w[7] = M.length),
            (w[8] = S.selectedSlideIdx),
            (w[9] = a))
          : (a = w[9]),
        w[10] !== E
          ? ((o = E.formatMessage({ id: "presentationEditor.close", defaultMessage: "Close editing panel" })),
            (w[10] = E),
            (w[11] = o))
          : (o = w[11]),
        w[12] !== k
          ? ((s = () => k.closePanel("popcorn-presentation-inspector")), (w[12] = k), (w[13] = s))
          : (s = w[13]),
        w[14] !== a || w[15] !== o || w[16] !== s || w[17] !== j
          ? ((c = (0, r.jsx)(iy.xx, { titleId: j, title: a, closeLabel: o, onClose: s })),
            (w[14] = a),
            (w[15] = o),
            (w[16] = s),
            (w[17] = j),
            (w[18] = c))
          : (c = w[18]),
        w[19] !== C || w[20] !== M.length || w[21] !== S.inspector.theme
          ? ((u =
              0 === M.length &&
              null != S.inspector.theme &&
              (0, r.jsx)(aT, {
                controller: C,
                theme: S.inspector.theme,
                onChange: (e) => C.dispatch({ kind: "set-presentation-theme", theme: e }),
              })),
            (w[19] = C),
            (w[20] = M.length),
            (w[21] = S.inspector.theme),
            (w[22] = u))
          : (u = w[22]),
        w[23] !== C || w[24] !== T
          ? ((p =
              null != T &&
              (0, r.jsx)(an, { onAlign: (e) => C.dispatch({ kind: "align-selected-elements", alignment: e }) })),
            (w[23] = C),
            (w[24] = T),
            (w[25] = p))
          : (p = w[25]),
        w[26] !== F ||
        w[27] !== C ||
        w[28] !== T ||
        w[29] !== L ||
        w[30] !== E ||
        w[31] !== I ||
        w[32] !== M.length ||
        w[33] !== S.presentationVersion ||
        w[34] !== S.selectedSlideIdx ||
        w[35] !== S.slideIds
          ? ((h =
              1 === M.length &&
              T?.kind === "image" &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(ls.l, {
                    title: (0, r.jsx)(ii.A, { id: "presentationEditor.fill", defaultMessage: "Background" }),
                    children: (0, r.jsx)(
                      lW,
                      {
                        controller: C,
                        slideId: S.slideIds[S.selectedSlideIdx],
                        target: { kind: "image", elementId: T.id },
                        onRequestChanges: I,
                        presentationVersion: S.presentationVersion,
                      },
                      T.id,
                    ),
                  }),
                  (0, r.jsx)(l3, { controller: C, element: T }, T.id),
                  (0, r.jsx)(ls.l, {
                    title: (0, r.jsx)(ii.A, { id: "presentationEditor.opacity", defaultMessage: "Opacity" }),
                    children: (0, r.jsx)(lR, {
                      side: "left",
                      label: E.formatMessage({ id: "presentationEditor.fillOpacity", defaultMessage: "Fill opacity" }),
                      value: L,
                      onChange: (e) => F({ fillOpacityPct: e }),
                    }),
                  }),
                ],
              })),
            (w[26] = F),
            (w[27] = C),
            (w[28] = T),
            (w[29] = L),
            (w[30] = E),
            (w[31] = I),
            (w[32] = M.length),
            (w[33] = S.presentationVersion),
            (w[34] = S.selectedSlideIdx),
            (w[35] = S.slideIds),
            (w[36] = h))
          : (h = w[36]),
        w[37] !== C.chartEditing || w[38] !== T?.kind || w[39] !== M.length || w[40] !== S.inspector.themeColors
          ? ((m =
              1 === M.length &&
              T?.kind === "chart" &&
              (0, r.jsx)(lX, { palette: S.inspector.themeColors, source: C.chartEditing })),
            (w[37] = C.chartEditing),
            (w[38] = T?.kind),
            (w[39] = M.length),
            (w[40] = S.inspector.themeColors),
            (w[41] = m))
          : (m = w[41]),
        w[42] !== C.tableEditing || w[43] !== T?.kind || w[44] !== M.length || w[45] !== S.inspector.themeColors
          ? ((f =
              1 === M.length &&
              T?.kind === "table" &&
              (0, r.jsx)(ak, { palette: S.inspector.themeColors, source: C.tableEditing })),
            (w[42] = C.tableEditing),
            (w[43] = T?.kind),
            (w[44] = M.length),
            (w[45] = S.inspector.themeColors),
            (w[46] = f))
          : (f = w[46]),
        w[47] !== F ||
        w[48] !== C ||
        w[49] !== T?.fill ||
        w[50] !== T?.fillMode ||
        w[51] !== T?.id ||
        w[52] !== T?.kind ||
        w[53] !== I ||
        w[54] !== M.length ||
        w[55] !== S.inspector.slideFill ||
        w[56] !== S.inspector.slideFillMode ||
        w[57] !== S.inspector.themeColors ||
        w[58] !== S.presentationVersion ||
        w[59] !== S.selectedSlideIdx ||
        w[60] !== S.slideIds ||
        w[61] !== A
          ? ((g =
              (1 !== M.length || (T?.kind !== "chart" && T?.kind !== "table")) &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  null != A && (0, r.jsx)(aS, { text: A, onChange: F, showLists: 1 === M.length }),
                  T?.kind !== "image" &&
                    M.length < 2 &&
                    (0, r.jsx)(
                      lU,
                      {
                        controller: C,
                        slideId: S.slideIds[S.selectedSlideIdx],
                        target: { kind: "fill", elementId: T?.id ?? null },
                        presentationVersion: S.presentationVersion,
                        mode: T?.fillMode ?? S.inspector.slideFillMode,
                        onRequestChanges: I,
                        fill: T?.fill ?? S.inspector.slideFill,
                        palette: S.inspector.themeColors,
                      },
                      T?.id ?? S.slideIds[S.selectedSlideIdx],
                    ),
                ],
              })),
            (w[47] = F),
            (w[48] = C),
            (w[49] = T?.fill),
            (w[50] = T?.fillMode),
            (w[51] = T?.id),
            (w[52] = T?.kind),
            (w[53] = I),
            (w[54] = M.length),
            (w[55] = S.inspector.slideFill),
            (w[56] = S.inspector.slideFillMode),
            (w[57] = S.inspector.themeColors),
            (w[58] = S.presentationVersion),
            (w[59] = S.selectedSlideIdx),
            (w[60] = S.slideIds),
            (w[61] = A),
            (w[62] = g))
          : (g = w[62]),
        w[63] !== F ||
        w[64] !== T ||
        w[65] !== L ||
        w[66] !== E ||
        w[67] !== M ||
        w[68] !== S.inspector.themeColors ||
        w[69] !== A
          ? ((x =
              null != T &&
              M.every(aq) &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  null != A &&
                    (0, r.jsx)(ls.l, {
                      title: (0, r.jsx)(ii.A, { id: "presentationEditor.textColor", defaultMessage: "Text color" }),
                      children: (0, r.jsxs)("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          (0, r.jsx)(lo.v, {
                            side: "left",
                            palette: S.inspector.themeColors,
                            label: E.formatMessage({
                              id: "presentationEditor.textColor",
                              defaultMessage: "Text color",
                            }),
                            color: A.color ?? null,
                            onChange: (e) => F({ textColor: e }),
                          }),
                          (0, r.jsx)(lR, {
                            label: E.formatMessage({
                              id: "presentationEditor.textOpacity",
                              defaultMessage: "Text opacity",
                            }),
                            value: A.opacityPct ?? null,
                            onChange: (e) => F({ textOpacityPct: e }),
                          }),
                        ],
                      }),
                    }),
                  M.length > 1 &&
                    (0, r.jsx)(ls.l, {
                      title: (0, r.jsx)(ii.A, { id: "presentationEditor.fill", defaultMessage: "Background" }),
                      children: (0, r.jsx)(lG, {
                        color: M.every((e) => e.fill?.color === T.fill?.color) ? (T.fill?.color ?? null) : null,
                        opacity: L,
                        palette: S.inspector.themeColors,
                        onChange: F,
                      }),
                    }),
                ],
              })),
            (w[63] = F),
            (w[64] = T),
            (w[65] = L),
            (w[66] = E),
            (w[67] = M),
            (w[68] = S.inspector.themeColors),
            (w[69] = A),
            (w[70] = x))
          : (x = w[70]),
        w[71] !== F || w[72] !== T || w[73] !== M || w[74] !== S.inspector.themeColors
          ? ((b =
              null != T &&
              [
                {
                  enabled: M.some(a$),
                  content:
                    M.every(aK) &&
                    (0, r.jsx)(
                      l0,
                      {
                        value: M.every((e) => e.cornerRadius === T.cornerRadius) ? T.cornerRadius : null,
                        onChange: (e) => F({ cornerRadius: e }),
                      },
                      "corners",
                    ),
                },
                {
                  enabled: M.some(aH),
                  content: (0, r.jsx)(lm, { palette: S.inspector.themeColors, selection: M, onChange: F }, "border"),
                },
                {
                  enabled: M.some(aV),
                  content: (0, r.jsx)(
                    ao,
                    { selection: M, palette: S.inspector.themeColors, onChange: F },
                    M.map(aO).join(","),
                  ),
                },
              ]
                .toSorted(aB)
                .map(az)),
            (w[71] = F),
            (w[72] = T),
            (w[73] = M),
            (w[74] = S.inspector.themeColors),
            (w[75] = b))
          : (b = w[75]),
        w[76] !== h ||
        w[77] !== m ||
        w[78] !== f ||
        w[79] !== g ||
        w[80] !== x ||
        w[81] !== b ||
        w[82] !== u ||
        w[83] !== p
          ? ((y = (0, r.jsxs)("div", {
              className: `${l_.A.sections} flex min-h-0 flex-col overflow-y-auto px-4 pt-4 pb-40`,
              children: [u, p, h, m, f, g, x, b],
            })),
            (w[76] = h),
            (w[77] = m),
            (w[78] = f),
            (w[79] = g),
            (w[80] = x),
            (w[81] = b),
            (w[82] = u),
            (w[83] = p),
            (w[84] = y))
          : (y = w[84]),
        w[85] !== y || w[86] !== l || w[87] !== c || w[88] !== j
          ? ((v = (0, r.jsxs)("div", {
              className: "flex min-h-0 flex-col select-none",
              "data-presentation-inspector": !0,
              role: "group",
              "aria-labelledby": j,
              onKeyDown: l,
              children: [c, y],
            })),
            (w[85] = y),
            (w[86] = l),
            (w[87] = c),
            (w[88] = j),
            (w[89] = v))
          : (v = w[89]),
        v
      )
    }
    function az(e) {
      return e.content
    }
    function aB(e, t) {
      return Number(t.enabled) - Number(e.enabled)
    }
    function aO(e) {
      return e.id
    }
    function aV(e) {
      return null != e.shadow
    }
    function aH(e) {
      return null != e.line && e.line.width > 0
    }
    function aK(e) {
      return "table" !== e.kind && "chart" !== e.kind && null != e.cornerRadius
    }
    function a$(e) {
      return 0 !== e.cornerRadius
    }
    function aq(e) {
      return "table" !== e.kind && "chart" !== e.kind
    }
    var aW = n("G4E3"),
      aU = n("KcRE"),
      aG = n("OWtl"),
      a_ = n("pkrV"),
      aX = n("xOEs"),
      aZ = n("uuN8"),
      aJ = n("aepO")
    function aY(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c = (0, i.c)(18),
        { href: u, onEdit: p } = e,
        h = (0, ir.A)()
      c[0] !== u
        ? ((t = (function (e) {
            try {
              let t = new URL(e)
              return "mailto:" === t.protocol && "" !== t.pathname ? decodeURIComponent(t.pathname) : null
            } catch {
              return null
            }
          })(u)),
          (c[0] = u),
          (c[1] = t))
        : (t = c[1])
      let m = t
      c[2] !== m || c[3] !== h
        ? ((n =
            null == m
              ? h.formatMessage({ id: "codex.artifacts.presentation.copyLink", defaultMessage: "Copy link" })
              : h.formatMessage({
                  id: "codex.artifacts.presentation.copyEmailAddress",
                  defaultMessage: "Copy email address",
                })),
          (c[2] = m),
          (c[3] = h),
          (c[4] = n))
        : (n = c[4])
      let f = n
      return (
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { copy: (0, r.jsx)(ip.R3B, {}), copied: (0, r.jsx)(ip.ALZ, {}) }), (c[5] = l))
          : (l = c[5]),
        c[6] !== m || c[7] !== u
          ? ((a = (e) => (0, aJ.lW)(m ?? u, e)), (c[6] = m), (c[7] = u), (c[8] = a))
          : (a = c[8]),
        c[9] !== f || c[10] !== a
          ? ((o = (0, r.jsx)(aZ.i, {
              iconOnly: !0,
              ariaLabel: f,
              buttonText: f,
              tooltipSideOffset: 8,
              icons: l,
              onCopy: a,
              renderButton: aQ,
            })),
            (c[9] = f),
            (c[10] = a),
            (c[11] = o))
          : (o = c[11]),
        c[12] !== h || c[13] !== p
          ? ((s =
              null != p &&
              (0, r.jsx)(i4.$, {
                color: "ghostActive",
                size: "compact",
                "aria-label": h.formatMessage({
                  id: "codex.artifacts.presentation.editLink",
                  defaultMessage: "Edit link",
                }),
                onClick: p,
                children: (0, r.jsx)(ii.A, {
                  id: "codex.artifacts.presentation.editLinkPreview",
                  defaultMessage: "Edit",
                }),
              })),
            (c[12] = h),
            (c[13] = p),
            (c[14] = s))
          : (s = c[14]),
        c[15] !== o || c[16] !== s
          ? ((d = (0, r.jsxs)(r.Fragment, { children: [o, s] })), (c[15] = o), (c[16] = s), (c[17] = d))
          : (d = c[17]),
        d
      )
    }
    function aQ(e) {
      return (0, r.jsx)(i4.$, { ...e, color: "ghostSecondary", size: "compact", uniform: !0 })
    }
    var a0 = n("Bbed"),
      a1 = n("WegE"),
      a2 = n("akR4"),
      a4 = n("OIHo"),
      a3 = n("w8xW"),
      a5 = n("j0A9"),
      a6 = n("gwXy")
    let a8 = (0, a0._)(async () => (await n.e(899950).then(n.bind(n, "eNz4"))).GitHubPullRequestPreviewContent, {
        suspendToParent: !0,
        errorFallback: (e) => (0, r.jsx)(a1.U, { ...e, data: null }),
      }),
      a9 = (0, a0._)(
        async () =>
          (await Promise.all([n.e(222773), n.e(394554), n.e(756120), n.e(712444)]).then(n.bind(n, "mntV")))
            .SharedSnapshotPreviewContent,
      )
    function a7(e) {
      let t,
        n,
        l,
        a = (0, i.c)(16),
        { actions: o, href: s } = e
      ;(a[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { status: "unavailable" }), (a[0] = t)) : (t = a[0]),
        a[1] !== o || a[2] !== s
          ? ((n = (0, r.jsx)(a5.q, { href: s, data: t, actions: o })), (a[1] = o), (a[2] = s), (a[3] = n))
          : (n = a[3]))
      let c = n
      if ((0, aW.I0)(s)?.kind === "page") return c
      if (null != (0, a3.G)(s)) {
        let e
        return (
          a[4] !== o || a[5] !== s
            ? ((e = (0, r.jsx)(a9, { href: s, actions: o }, s)), (a[4] = o), (a[5] = s), (a[6] = e))
            : (e = a[6]),
          e
        )
      }
      a[7] !== s ? ((l = (0, a4.j)() ? (0, a2.$)(s) : null), (a[7] = s), (a[8] = l)) : (l = a[8])
      let u = l
      if (null != u) {
        let e
        return (
          a[9] !== o || a[10] !== s || a[11] !== u
            ? ((e = (0, r.jsx)(d.Suspense, {
                fallback: (0, r.jsx)(a1.U, { href: s, pullRequest: u, actions: o, data: void 0 }),
                children: (0, r.jsx)(a8, { href: s, pullRequest: u, hostId: "local", actions: o }),
              })),
              (a[9] = o),
              (a[10] = s),
              (a[11] = u),
              (a[12] = e))
            : (e = a[12]),
          e
        )
      }
      if ((0, a_.r)(s)) {
        let e
        return (
          a[13] !== o || a[14] !== s
            ? ((e = (0, r.jsx)(a6.H, { href: s, hostId: "local", actions: o }, s)),
              (a[13] = o),
              (a[14] = s),
              (a[15] = e))
            : (e = a[15]),
          e
        )
      }
      return c
    }
    function oe(e, t) {
      return (
        e.slideId === t.slideId &&
        e.url === t.url &&
        e.action === t.action &&
        (0, tN.UG)(e.revision, t.revision) &&
        (0, tN.UA)(e.source, t.source)
      )
    }
    function ot(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b = (0, i.c)(31),
        { ref: y, controller: v, editable: w, sourcePageId: C } = e,
        S = (0, ie.gh)(aG.u),
        k = (0, d.useRef)(!0),
        I = (0, d.useRef)(null),
        E = (0, d.useRef)(null),
        j = (0, d.useRef)(0),
        [M, T] = (0, d.useState)(null),
        [A, P] = (0, d.useState)(null),
        L = (0, d.useRef)(null),
        F = (0, d.useRef)(null)
      b[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            ;((j.current = j.current + 1),
              null != I.current && (clearTimeout(I.current), (I.current = null)),
              E.current?.(),
              (E.current = null))
          }),
          (b[0] = t))
        : (t = b[0])
      let R = t
      b[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => {
            null != F.current && (clearTimeout(F.current), (F.current = null))
          }),
          (b[1] = n))
        : (n = b[1])
      let D = n
      b[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => {
            ;(R(), D(), T(null))
          }),
          (b[2] = l))
        : (l = b[2])
      let N = l
      b[3] !== M?.requestId
        ? ((a = () => {
            D()
            let e = M?.requestId
            F.current = setTimeout(() => {
              F.current = null
              let t = L.current
              t?.contains(t.ownerDocument.activeElement) || T((t) => (t?.requestId === e ? null : t))
            }, 120)
          }),
          (b[3] = M?.requestId),
          (b[4] = a))
        : (a = b[4])
      let z = a
      b[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => {
            ;(N(), P(null))
          }),
          (b[5] = o))
        : (o = b[5])
      let B = o
      b[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e) => {
            ;(e instanceof KeyboardEvent && "Escape" !== e.key) ||
              ("pointerdown" === e.type && e.target instanceof Node && L.current?.contains(e.target)) ||
              N()
          }),
          (b[6] = s))
        : (s = b[6])
      let O = (0, d.useEffectEvent)(s)
      return (
        b[7] !== O
          ? ((c = () => {
              let e = new AbortController(),
                t = { signal: e.signal, capture: !0 }
              return (
                window.addEventListener("keydown", O, t),
                window.addEventListener("pointerdown", O, t),
                window.addEventListener("contextmenu", O, t),
                window.addEventListener("blur", O, { signal: e.signal }),
                () => e.abort()
              )
            }),
            (b[7] = O),
            (b[8] = c))
          : (c = b[8]),
        b[9] === Symbol.for("react.memo_cache_sentinel") ? ((u = []), (b[9] = u)) : (u = b[9]),
        (0, d.useEffect)(c, u),
        b[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = () => () => {
              ;((k.current = !1),
                null != I.current && clearTimeout(I.current),
                E.current?.(),
                null != F.current && clearTimeout(F.current),
                (j.current = j.current + 1))
            }),
            (p = []),
            (b[10] = p),
            (b[11] = h))
          : ((p = b[10]), (h = b[11])),
        (0, d.useEffect)(h, p),
        b[12] !== v || b[13] !== w || b[14] !== A || b[15] !== M || b[16] !== z || b[17] !== S
          ? ((m = () => ({
              hover(e, t) {
                if ((R(), null == e || null == t)) return void (null == t ? B() : z())
                if (null != A) return
                if ((D(), null != M && oe(M.link, e))) return void T({ ...M, link: e, canvas: t })
                let n = (0, aW.I0)(e.url),
                  r = 250
                n?.kind !== "page" && (0, a_.r)(e.url) && ((r = 700), (E.current = (0, aX.L)(S, e.url, t)))
                let i = j.current,
                  l = (n) => {
                    j.current === i &&
                      T((r) =>
                        r?.canvas === t && oe(r.link, e)
                          ? { ...r, link: e, context: n }
                          : { requestId: i, link: e, canvas: t, context: n },
                      )
                  }
                I.current = setTimeout(() => {
                  ;((I.current = null),
                    v
                      .getHyperlinkContext({
                        slideId: e.slideId,
                        point: e.point,
                        source: e.source,
                        revision: e.revision,
                      })
                      .then(l, () => l(null)))
                }, r)
              },
              editSelection(e, t, n) {
                if (!w || e !== v) return
                N()
                let r = j.current,
                  i = n ?? t.getBoundingClientRect()
                v.getHyperlinkContext()
                  .then((e) => {
                    null != e &&
                      j.current === r &&
                      (T(null),
                      (k.current = !0),
                      P({ requestId: r, context: e, reference: { getBoundingClientRect: () => i }, focusTarget: t }))
                  })
                  .catch(() => {
                    j.current === r && ol()
                  })
              },
            })),
            (b[12] = v),
            (b[13] = w),
            (b[14] = A),
            (b[15] = M),
            (b[16] = z),
            (b[17] = S),
            (b[18] = m))
          : (m = b[18]),
        (0, d.useImperativeHandle)(y, m),
        b[19] !== w || b[20] !== M || b[21] !== z
          ? ((f =
              null != M &&
              (0, r.jsxs)(ld.AM, {
                open: !0,
                onOpenChange: (e) => {
                  e || N()
                },
                children: [
                  (0, r.jsx)(ld.dT, {
                    virtualRef: {
                      current: {
                        getBoundingClientRect: () =>
                          new DOMRect(M.link.bounds.left, M.link.bounds.top, M.link.bounds.width, M.link.bounds.height),
                      },
                    },
                  }),
                  (0, r.jsx)(ld.hl, {
                    ref: L,
                    size: "content",
                    disablePadding: !0,
                    sideOffset: 4,
                    onOpenAutoFocus: or,
                    onCloseAutoFocus: on,
                    onPointerEnter: D,
                    onPointerLeave: z,
                    onFocusCapture: D,
                    onBlurCapture: z,
                    children: (0, r.jsx)(a7, {
                      href: M.link.url,
                      actions: (0, r.jsx)(
                        aY,
                        {
                          href: M.link.url,
                          onEdit:
                            w && null != M.context
                              ? () => {
                                  if (null == M.context) return
                                  let { left: e, top: t, width: n, height: r } = M.link.bounds,
                                    i = new DOMRect(e, t, n, r)
                                  ;(N(),
                                    (k.current = !0),
                                    P({
                                      requestId: j.current,
                                      context: M.context,
                                      reference: { getBoundingClientRect: () => i },
                                      focusTarget: M.canvas.closest("[data-popcorn-table-focus-owner]") ?? M.canvas,
                                    }))
                                }
                              : void 0,
                        },
                        M.requestId,
                      ),
                    }),
                  }),
                ],
              })),
            (b[19] = w),
            (b[20] = M),
            (b[21] = z),
            (b[22] = f))
          : (f = b[22]),
        b[23] !== v || b[24] !== w || b[25] !== A || b[26] !== C
          ? ((g =
              w &&
              null != A &&
              (0, r.jsxs)(ld.AM, {
                open: !0,
                onOpenChange: (e) => {
                  e || B()
                },
                children: [
                  (0, r.jsx)(ld.dT, { virtualRef: { current: A.reference } }),
                  (0, r.jsx)(ld.hl, {
                    unstyled: !0,
                    variant: "menu",
                    "data-popcorn-edit-toolbar-root": "true",
                    onInteractOutside: () => {
                      k.current = !1
                    },
                    onCloseAutoFocus: (e) => {
                      ;(e.preventDefault(),
                        k.current &&
                          !("text" === A.context.kind && v.focusTextInput(A.context.target)) &&
                          A.focusTarget.isConnected &&
                          A.focusTarget.focus({ preventScroll: !0 }))
                    },
                    children: (0, r.jsx)(
                      oi,
                      {
                        context: A.context,
                        controller: v,
                        sourcePageId: C,
                        onClose: () => {
                          P((e) => (e === A ? null : e))
                        },
                      },
                      A.requestId,
                    ),
                  }),
                ],
              })),
            (b[23] = v),
            (b[24] = w),
            (b[25] = A),
            (b[26] = C),
            (b[27] = g))
          : (g = b[27]),
        b[28] !== f || b[29] !== g
          ? ((x = (0, r.jsxs)(r.Fragment, { children: [f, g] })), (b[28] = f), (b[29] = g), (b[30] = x))
          : (x = b[30]),
        x
      )
    }
    function on(e) {
      return e.preventDefault()
    }
    function or(e) {
      return e.preventDefault()
    }
    function oi(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        c,
        u,
        p,
        h = (0, i.c)(40),
        { context: m, controller: f, sourcePageId: g, onClose: x } = e,
        b = (0, ir.A)(),
        [y, v] = (0, d.useState)(m.url ?? ""),
        [w, C] = (0, d.useState)(!1)
      h[0] !== m.target || h[1] !== f || h[2] !== x
        ? ((t = async (e, t) => {
            C(!0)
            try {
              ;(await f.updateHyperlink({ target: m.target, url: e, text: t })) ? x() : ol()
            } catch {
              ol()
            }
            C(!1)
          }),
          (h[0] = m.target),
          (h[1] = f),
          (h[2] = x),
          (h[3] = t))
        : (t = h[3])
      let S = t,
        k = "text" === m.kind ? (m.text ?? void 0) : void 0
      return (
        h[4] !== g
          ? ((n = null == g ? (0, r.jsx)(ii.A, { id: "codex.link.urlField", defaultMessage: "URL" }) : void 0),
            (h[4] = g),
            (h[5] = n))
          : (n = h[5]),
        h[6] !== b || h[7] !== g
          ? ((l = null == g ? b.formatMessage({ id: "codex.link.urlInput", defaultMessage: "Link URL" }) : void 0),
            (h[6] = b),
            (h[7] = g),
            (h[8] = l))
          : (l = h[8]),
        h[9] !== b || h[10] !== g
          ? ((a =
              null == g
                ? b.formatMessage({ id: "codex.link.urlPlaceholder", defaultMessage: "Paste a link\u2026" })
                : void 0),
            (h[9] = b),
            (h[10] = g),
            (h[11] = a))
          : (a = h[11]),
        h[12] !== m.url || h[13] !== S
          ? ((o =
              null == m.url
                ? void 0
                : () => {
                    S(null)
                  }),
            (h[12] = m.url),
            (h[13] = S),
            (h[14] = o))
          : (o = h[14]),
        h[15] !== m.kind || h[16] !== m.text || h[17] !== S
          ? ((s = (e, t) => {
              S(e, "text" === m.kind && t === m.text ? void 0 : t)
            }),
            (h[15] = m.kind),
            (h[16] = m.text),
            (h[17] = S),
            (h[18] = s))
          : (s = h[18]),
        h[19] !== m.kind || h[20] !== m.target || h[21] !== m.text || h[22] !== S || h[23] !== y
          ? ((c = (e, t) => {
              let n
              ;("text" === m.kind &&
                null != m.text &&
                (null == m.target.source && 0 === m.target.length
                  ? (n = t?.trim() || y)
                  : null != t && t !== m.text && (n = t.trim() || m.text)),
                S((0, aW.fM)(e), n))
            }),
            (h[19] = m.kind),
            (h[20] = m.target),
            (h[21] = m.text),
            (h[22] = S),
            (h[23] = y),
            (h[24] = c))
          : (c = h[24]),
        h[25] !== m.url ||
        h[26] !== x ||
        h[27] !== g ||
        h[28] !== k ||
        h[29] !== n ||
        h[30] !== l ||
        h[31] !== a ||
        h[32] !== o ||
        h[33] !== s ||
        h[34] !== c ||
        h[35] !== y
          ? ((u = (0, r.jsx)(aU._, {
              initialHref: m.url,
              initialTitle: k,
              inputLabel: n,
              inputAccessibleName: l,
              inputPlaceholder: a,
              sourcePageId: g,
              value: y,
              onChange: v,
              onCancel: x,
              onRemove: o,
              onSelectUrl: s,
              onSelectPage: c,
            })),
            (h[25] = m.url),
            (h[26] = x),
            (h[27] = g),
            (h[28] = k),
            (h[29] = n),
            (h[30] = l),
            (h[31] = a),
            (h[32] = o),
            (h[33] = s),
            (h[34] = c),
            (h[35] = y),
            (h[36] = u))
          : (u = h[36]),
        h[37] !== w || h[38] !== u
          ? ((p = (0, r.jsx)("fieldset", { disabled: w, children: u })), (h[37] = w), (h[38] = u), (h[39] = p))
          : (p = h[39]),
        p
      )
    }
    function ol() {
      ;(0, iA.RB)().warning(
        (0, r.jsx)(ii.A, {
          id: "presentationEditor.linkChanged",
          defaultMessage: "Couldn\u2019t update this link. Select it again and retry",
        }),
      )
    }
    var oa = n("q1q2"),
      oo = n("eO76"),
      os = n("pMOC"),
      od = n("YQiI"),
      oc = n("Zrfr"),
      ou = n("yGb1"),
      op = n("K4Cx"),
      oh = n("ZzsR"),
      om = n("WpXe"),
      of = n("jqmc"),
      og = n("T1PX"),
      ox = n("V8uZ"),
      ob = n("PdgX"),
      oy = n("slBv"),
      ov = n("JHfO"),
      ow = n("SZCv"),
      oC = n.n(ow),
      oS = n("jguW")
    function ok(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        u,
        p,
        h,
        m,
        f = (0, i.c)(76),
        { controller: g, snapshot: x, isText: b, onRequestChanges: y } = e,
        v = (0, ir.A)(),
        { inspector: w } = x,
        C = w.selectedElement,
        S = w.selectedElements.length > 1,
        k =
          !S && C?.kind === "shape" && x.selectedSlideElementTargets.some((e) => e.id === C.id && null != e.connector)
            ? C.line
            : null,
        I = !b && C?.kind === "table" && !S
      f[0] !== I ? ((t = (e) => (I && null != e ? e.style : null)), (f[0] = I), (f[1] = t)) : (t = f[1])
      let E = (0, oS.useSyncExternalStoreWithSelector)(
        g.tableEditing.subscribe,
        g.tableEditing.getSnapshot,
        oE,
        t,
        oC(),
      )
      f[2] !== w.selectedElements || f[3] !== I || f[4] !== E
        ? ((n = I ? E : ai(w.selectedElements)), (f[2] = w.selectedElements), (f[3] = I), (f[4] = E), (f[5] = n))
        : (n = f[5])
      let j = n
      f[6] !== g || f[7] !== I
        ? ((l = (e) => {
            let t = I ? g.tableEditing.getSnapshot() : null
            null != t
              ? g.tableEditing.edit({
                  type: "set-cell-style",
                  tableId: t.tableId,
                  range: t.selection?.range ?? { row: 0, column: 0, rowCount: t.rowCount, columnCount: t.columnCount },
                  style: {
                    typeface: e.textTypeface,
                    color: e.textColor,
                    fontSize: e.textFontSize,
                    alignment: e.textAlignment,
                  },
                })
              : g.updateSelectedElementStyle(e)
          }),
          (f[6] = g),
          (f[7] = I),
          (f[8] = l))
        : (l = f[8])
      let M = l
      return (
        f[9] !== g ||
        f[10] !== C ||
        f[11] !== w.slideFillMode ||
        f[12] !== b ||
        f[13] !== S ||
        f[14] !== x.selectedSlideIdx ||
        f[15] !== x.slideIds
          ? ((a =
              !S &&
              !b &&
              ((C?.kind === "image" && !C.image?.isPlaceholder) ||
                (C?.kind === "shape" && "image" === C.fillMode) ||
                (null == C && "image" === w.slideFillMode)) &&
              (0, r.jsx)(lK, {
                compact: !0,
                controller: g,
                slideId: x.slideIds[x.selectedSlideIdx],
                elementId: C?.id ?? null,
              })),
            (f[9] = g),
            (f[10] = C),
            (f[11] = w.slideFillMode),
            (f[12] = b),
            (f[13] = S),
            (f[14] = x.selectedSlideIdx),
            (f[15] = x.slideIds),
            (f[16] = a))
          : (a = f[16]),
        f[17] !== g || f[18] !== v || f[19] !== S
          ? ((o =
              S &&
              (0, r.jsxs)(ld.AM, {
                children: [
                  (0, r.jsx)(ld.Wv, {
                    asChild: !0,
                    children: (0, r.jsx)(lS.P, {
                      color: "ghostActive",
                      size: "formatToolbarIcon",
                      "aria-label": v.formatMessage({
                        id: "presentationEditor.alignObjects",
                        defaultMessage: "Align objects",
                      }),
                      children: (0, r.jsx)(iq.I, { asset: l6 }),
                    }),
                  }),
                  (0, r.jsx)(ld.hl, {
                    "data-popcorn-edit-toolbar-root": "true",
                    size: "content",
                    variant: "menu",
                    children: (0, r.jsx)("div", {
                      className: "w-66 p-2",
                      children: (0, r.jsx)(an, {
                        showTitle: !1,
                        onAlign: (e) => g.dispatch({ kind: "align-selected-elements", alignment: e }),
                      }),
                    }),
                  }),
                ],
              })),
            (f[17] = g),
            (f[18] = v),
            (f[19] = S),
            (f[20] = o))
          : (o = f[20]),
        f[21] !== M || f[22] !== w.themeColors || f[23] !== v || f[24] !== I || f[25] !== b || f[26] !== j
          ? ((s =
              (b || I) &&
              null != j &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(aC.b, { compact: !0, value: j.typeface, onChange: (e) => M({ textTypeface: e }) }),
                  (0, r.jsx)(lo.v, {
                    palette: w.themeColors,
                    variant: "toolbar",
                    label: v.formatMessage({ id: "presentationEditor.textColor", defaultMessage: "Text color" }),
                    color: j.color ?? null,
                    onChange: (e) => M({ textColor: e }),
                  }),
                  !I &&
                    (0, r.jsx)(lS.P, {
                      color: j.bold ? "accentSubtle" : "ghostActive",
                      size: "formatToolbarIcon",
                      "aria-pressed": j.bold ?? "mixed",
                      "aria-label": v.formatMessage({ id: "presentationEditor.bold", defaultMessage: "Bold" }),
                      onClick: () => M({ textBold: !j.bold }),
                      children: (0, r.jsx)(iq.I, { asset: ax.e }),
                    }),
                  (0, r.jsx)(aw.r, {
                    scale: "presentation",
                    value: j.fontSize ?? null,
                    onChange: (e) => M({ textFontSize: e }),
                  }),
                  (0, r.jsxs)(ld.AM, {
                    children: [
                      (0, r.jsx)(ld.Wv, {
                        asChild: !0,
                        children: (0, r.jsx)(lS.P, {
                          color: "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-label": v.formatMessage({
                            id: "presentationEditor.textAlignment",
                            defaultMessage: "Text alignment",
                          }),
                          children: (0, r.jsx)(ip.fHm, {}),
                        }),
                      }),
                      (0, r.jsx)(ld.hl, {
                        "data-popcorn-edit-toolbar-root": "true",
                        size: "content",
                        variant: "menu",
                        children: (0, r.jsx)("div", {
                          className: "w-40 p-2",
                          children: (0, r.jsx)(aC.D, { value: j.alignment, onChange: (e) => M({ textAlignment: e }) }),
                        }),
                      }),
                    ],
                  }),
                ],
              })),
            (f[21] = M),
            (f[22] = w.themeColors),
            (f[23] = v),
            (f[24] = I),
            (f[25] = b),
            (f[26] = j),
            (f[27] = s))
          : (s = f[27]),
        f[28] !== g.chartEditing || f[29] !== C?.kind || f[30] !== w.themeColors || f[31] !== S
          ? ((d =
              !S &&
              C?.kind === "chart" &&
              (0, r.jsx)(lX, { palette: w.themeColors, source: g.chartEditing, compact: !0 })),
            (f[28] = g.chartEditing),
            (f[29] = C?.kind),
            (f[30] = w.themeColors),
            (f[31] = S),
            (f[32] = d))
          : (d = f[32]),
        f[33] !== k || f[34] !== g || f[35] !== w.themeColors || f[36] !== v || f[37] !== b
          ? ((c =
              null != k &&
              !b &&
              (0, r.jsx)(lo.v, {
                palette: w.themeColors,
                variant: "toolbar",
                label: v.formatMessage({ id: "presentationEditor.borderColor", defaultMessage: "Border color" }),
                color: k.color,
                onChange: (e) => g.updateSelectedElementStyle({ strokeColor: e }),
              })),
            (f[33] = k),
            (f[34] = g),
            (f[35] = w.themeColors),
            (f[36] = v),
            (f[37] = b),
            (f[38] = c))
          : (c = f[38]),
        f[39] !== k ||
        f[40] !== g ||
        f[41] !== C ||
        f[42] !== w.themeColors ||
        f[43] !== b ||
        f[44] !== S ||
        f[45] !== y ||
        f[46] !== x.presentationVersion ||
        f[47] !== x.selectedSlideIdx ||
        f[48] !== x.slideIds
          ? ((u =
              !S &&
              !b &&
              null == k &&
              (C?.kind === "shape" || C?.kind === "image") &&
              (0, r.jsx)(
                lU,
                {
                  compact: !0,
                  controller: g,
                  slideId: x.slideIds[x.selectedSlideIdx],
                  target: { kind: "image" === C.kind ? "image" : "fill", elementId: C.id },
                  presentationVersion: x.presentationVersion,
                  mode: "image" === C.kind ? "image" : C.fillMode,
                  fill: C.fill,
                  palette: w.themeColors,
                  onRequestChanges: y,
                },
                C.id,
              )),
            (f[39] = k),
            (f[40] = g),
            (f[41] = C),
            (f[42] = w.themeColors),
            (f[43] = b),
            (f[44] = S),
            (f[45] = y),
            (f[46] = x.presentationVersion),
            (f[47] = x.selectedSlideIdx),
            (f[48] = x.slideIds),
            (f[49] = u))
          : (u = f[49]),
        f[50] !== g ||
        f[51] !== C ||
        f[52] !== w.slideFill?.color ||
        f[53] !== w.themeColors ||
        f[54] !== v ||
        f[55] !== I ||
        f[56] !== b ||
        f[57] !== S
          ? ((p =
              !b &&
              !I &&
              !S &&
              (null == C || "element" === C.kind) &&
              (0, r.jsx)(lo.v, {
                palette: w.themeColors,
                variant: "toolbar",
                label: v.formatMessage({
                  id: "presentationEditor.backgroundColor",
                  defaultMessage: "Background color",
                }),
                color: C?.fill?.color ?? w.slideFill?.color ?? "#FFFFFF",
                onChange: (e) => g.updateSelectedElementStyle({ fillColor: e }),
              })),
            (f[50] = g),
            (f[51] = C),
            (f[52] = w.slideFill?.color),
            (f[53] = w.themeColors),
            (f[54] = v),
            (f[55] = I),
            (f[56] = b),
            (f[57] = S),
            (f[58] = p))
          : (p = f[58]),
        f[59] !== k ||
        f[60] !== g ||
        f[61] !== w.selectedElements ||
        f[62] !== w.themeColors ||
        f[63] !== v ||
        f[64] !== I ||
        f[65] !== b
          ? ((h =
              !b &&
              (I || w.selectedElements.some(oI)) &&
              (I
                ? (0, r.jsxs)(ld.AM, {
                    children: [
                      (0, r.jsx)(ld.Wv, {
                        asChild: !0,
                        children: (0, r.jsx)(lS.P, {
                          color: "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-label": v.formatMessage({
                            id: "presentationEditor.cellBorders",
                            defaultMessage: "Cell borders",
                          }),
                          children: (0, r.jsx)(iq.I, { asset: au.x }),
                        }),
                      }),
                      (0, r.jsx)(ld.hl, {
                        "data-popcorn-edit-toolbar-root": "true",
                        size: "content",
                        variant: "menu",
                        children: (0, r.jsx)("div", {
                          className: "flex w-66 flex-col gap-3 p-2",
                          children: (0, r.jsx)(ak, {
                            palette: w.themeColors,
                            source: g.tableEditing,
                            section: "borders",
                          }),
                        }),
                      }),
                    ],
                  })
                : (0, r.jsx)(lm, {
                    collapsible: !1,
                    borderOnly: null != k,
                    palette: w.themeColors,
                    selection: w.selectedElements,
                    onChange: (e) => g.updateSelectedElementStyle(e),
                    trigger: (0, r.jsx)(lS.P, {
                      color: "ghostActive",
                      size: "formatToolbarIcon",
                      "aria-label": v.formatMessage({ id: "presentationEditor.border", defaultMessage: "Border" }),
                      children: (0, r.jsx)(iq.I, { asset: ov.a }),
                    }),
                  }))),
            (f[59] = k),
            (f[60] = g),
            (f[61] = w.selectedElements),
            (f[62] = w.themeColors),
            (f[63] = v),
            (f[64] = I),
            (f[65] = b),
            (f[66] = h))
          : (h = f[66]),
        f[67] !== p ||
        f[68] !== h ||
        f[69] !== a ||
        f[70] !== o ||
        f[71] !== s ||
        f[72] !== d ||
        f[73] !== c ||
        f[74] !== u
          ? ((m = (0, r.jsxs)(r.Fragment, { children: [a, o, s, d, c, u, p, h] })),
            (f[67] = p),
            (f[68] = h),
            (f[69] = a),
            (f[70] = o),
            (f[71] = s),
            (f[72] = d),
            (f[73] = c),
            (f[74] = u),
            (f[75] = m))
          : (m = f[75]),
        m
      )
    }
    function oI(e) {
      return null != e.line
    }
    function oE() {
      return null
    }
    let oj = () => () => {}
    function oM(e) {
      let t,
        n,
        l,
        a,
        o,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b,
        y,
        v,
        w,
        C,
        S,
        k,
        I,
        E,
        j,
        T,
        A,
        P,
        L,
        F,
        R,
        D,
        N,
        z,
        B,
        O,
        V,
        H = (0, i.c)(136),
        {
          ref: K,
          controller: $,
          snapshot: q,
          selectionBounds: W,
          selectionBoundsSource: U,
          collisionBoundaryElement: G,
          panelControls: _,
          isEditing: X,
          canEditSelection: Z,
          editToolbarRequested: J,
          dismissEditToolbar: Y,
          focusStage: Q,
          shortcutScopeElement: ee,
          selectionActions: et,
          selectionCommentLabel: en,
          onEditLink: er,
        } = e,
        ei = (0, ir.A)()
      H[0] !== ei ? ((t = ei.formatMessage(om.F.askForChanges)), (H[0] = ei), (H[1] = t)) : (t = H[1])
      let el = t,
        ea = (0, og.I)(),
        eo = (0, d.useRef)(null),
        [es, ed] = (0, d.useState)(),
        [ec, eu] = (0, d.useState)(null),
        [ep, eh] = (0, d.useState)(null),
        [em, ef] = (0, d.useState)(!1)
      H[2] !== U ? ((n = (e) => U?.subscribe(e) ?? oj()), (H[2] = U), (H[3] = n)) : (n = H[3])
      let eg = n
      H[4] !== W || H[5] !== U ? ((l = () => U?.getSnapshot() ?? W), (H[4] = W), (H[5] = U), (H[6] = l)) : (l = H[6])
      let ex = l,
        eb = J || null != ec,
        ey = (0, d.useSyncExternalStore)(eb ? eg : oj, eb ? ex : oR, oR),
        ev = ey ?? q.slideRect,
        ew = eb && null != ev
      H[7] !== G || H[8] !== ee
        ? ((a = function () {
            return {
              boundary: G ?? void 0,
              padding: {
                top:
                  ((ee && parseFloat(getComputedStyle(ee).getPropertyValue("--popcorn-presentation-header-inset"))) ||
                    0) + 8,
                bottom: 24,
                left: 8,
                right: 8,
              },
            }
          }),
          (H[7] = G),
          (H[8] = ee),
          (H[9] = a))
        : (a = H[9])
      let eC = a
      ;(H[10] !== ev || H[11] !== G || H[12] !== ee
        ? ((o = ev && ee ? { contextElement: G ?? ee, getBoundingClientRect: () => oD(ee, ev) } : null),
          (H[10] = ev),
          (H[11] = G),
          (H[12] = ee),
          (H[13] = o))
        : (o = H[13]),
        H[14] !== o ? ((c = { reference: o }), (H[14] = o), (H[15] = c)) : (c = H[15]))
      let eS = X && q.inspector.selectedElement?.kind === "table" ? 36 : 12
      H[16] !== eS ? ((u = (0, oa.cY)(eS)), (H[16] = eS), (H[17] = u)) : (u = H[17])
      let ek = G ?? void 0
      ;(H[18] !== ek ? ((p = (0, oa.BN)({ boundary: ek, padding: 8 })), (H[18] = ek), (H[19] = p)) : (p = H[19]),
        H[20] !== G || H[21] !== eC || H[22] !== ee
          ? ((h = (0, oy.r)(eC, [G, ee])), (H[20] = G), (H[21] = eC), (H[22] = ee), (H[23] = h))
          : (h = H[23]))
      let eI = G ?? void 0
      ;(H[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (e) => {
            let { availableWidth: t } = e
            return ed(Math.max(0, t))
          }),
          (H[24] = m))
        : (m = H[24]),
        H[25] !== eI
          ? ((f = (0, oa.Ej)({ boundary: eI, padding: 8, apply: m })), (H[25] = eI), (H[26] = f))
          : (f = H[26]),
        H[27] !== p || H[28] !== h || H[29] !== f || H[30] !== u
          ? ((g = [u, p, h, f]), (H[27] = p), (H[28] = h), (H[29] = f), (H[30] = u), (H[31] = g))
          : (g = H[31]),
        H[32] !== ew || H[33] !== g || H[34] !== c
          ? ((x = { open: ew, elements: c, placement: "top", middleware: g, whileElementsMounted: oy.g }),
            (H[32] = ew),
            (H[33] = g),
            (H[34] = c),
            (H[35] = x))
          : (x = H[35]))
      let { refs: eE, floatingStyles: ej } = (0, oa.we)(x),
        { setFloating: eM } = eE,
        eT = null != es && es < 320,
        eA = q.textEditState?.activeBlockId != null,
        eP =
          Z &&
          null != er &&
          1 === q.selectedElementIds.length &&
          (eA || q.inspector.selectedElement?.kind === "shape" || q.inspector.selectedElement?.kind === "image"),
        eL = eP && null == q.activeInteractionKind
      ;(H[36] !== $ ||
      H[37] !== er ||
      H[38] !== W ||
      H[39] !== U ||
      H[40] !== ee ||
      H[41] !== q.textEditState?.caretRect ||
      H[42] !== eA
        ? ((b = (e) => {
            if (
              e.defaultPrevented ||
              e.isComposing ||
              null == ee ||
              ((0, M.tr)(e.target) &&
                !(eA && e.target instanceof HTMLTextAreaElement && "true" === e.target.getAttribute("aria-hidden")))
            )
              return
            ;(e.preventDefault(), e.stopPropagation())
            let t = eo.current ?? ee,
              n = eo.current ? null : (q.textEditState?.caretRect ?? U?.getSnapshot() ?? W)
            er?.($, t, n ? oD(ee, n) : void 0)
          }),
          (H[36] = $),
          (H[37] = er),
          (H[38] = W),
          (H[39] = U),
          (H[40] = ee),
          (H[41] = q.textEditState?.caretRect),
          (H[42] = eA),
          (H[43] = b))
        : (b = H[43]),
        H[44] !== ee || H[45] !== eL || H[46] !== b
          ? ((y = {
              commandId: "presentation.editLink",
              capture: !1,
              keyboardEventTarget: ee,
              enabled: eL,
              onKeyDown: b,
            }),
            (H[44] = ee),
            (H[45] = eL),
            (H[46] = b),
            (H[47] = y))
          : (y = H[47]),
        (0, oh.$)(y),
        H[48] !== $
          ? ((v = async () => {
              let { slideIds: e, selectedSlideIdx: t } = $.getSnapshot(),
                n = e[t],
                r = await $.textClear()
                  .then(() => $.requestShapeClipboard())
                  .catch(oF)
              if (null != r)
                return () => {
                  let e = $.getSnapshot()
                  e.slideIds[e.selectedSlideIdx] === n && $.dispatch({ kind: "paste-shapes", serialized: r.serialized })
                }
            }),
            (H[48] = $),
            (H[49] = v))
          : (v = H[49]))
      let eF = v,
        eR = Z && !eA && null == q.activeInteractionKind && q.selectedElementIds.length > 0
      ;(H[50] !== eF
        ? ((w = (e) => {
            e.defaultPrevented ||
              e.isComposing ||
              (0, M.tr)(e.target) ||
              (e.preventDefault(), e.stopPropagation(), eF().then(oL))
          }),
          (H[50] = eF),
          (H[51] = w))
        : (w = H[51]),
        H[52] !== ee || H[53] !== eR || H[54] !== w
          ? ((C = {
              commandId: "presentation.duplicateSelection",
              capture: !1,
              keyboardEventTarget: ee,
              enabled: eR,
              onKeyDown: w,
            }),
            (H[52] = ee),
            (H[53] = eR),
            (H[54] = w),
            (H[55] = C))
          : (C = H[55]),
        (0, oh.$)(C),
        H[56] !== q.inspector.selectedElements
          ? ((S = q.inspector.selectedElements.map(oP).join(",")), (H[56] = q.inspector.selectedElements), (H[57] = S))
          : (S = H[57]))
      let eD = S
      H[58] !== q.inspector.selectedElements
        ? ((k = q.inspector.selectedElements.length > 0 && q.inspector.selectedElements.every(al)),
          (H[58] = q.inspector.selectedElements),
          (H[59] = k))
        : (k = H[59])
      let eN = k
      H[60] !== eN || H[61] !== eD
        ? ((I = { key: eD, textOnly: eN }), (H[60] = eN), (H[61] = eD), (H[62] = I))
        : (I = H[62])
      let [ez, eB] = (0, d.useState)(I)
      ez.key !== eD && eB({ key: eD, textOnly: eN })
      let eO = eA || ez.textOnly,
        eV = q.inspector.selectedElement
      H[63] !== eO || H[64] !== eV || H[65] !== q.selectedElementIds || H[66] !== q.textLayoutBlocks
        ? ((E =
            eO || 1 !== q.selectedElementIds.length || eV?.kind !== "shape"
              ? void 0
              : q.textLayoutBlocks.find((e) => e.id === eV.id && e.layout.lines.some(oT))),
          (H[63] = eO),
          (H[64] = eV),
          (H[65] = q.selectedElementIds),
          (H[66] = q.textLayoutBlocks),
          (H[67] = E))
        : (E = H[67])
      let eH = E,
        eK = et?.startAskChat != null && null != et.submitAskChat,
        e$ = et?.creationRequest,
        eq = e$?.isSubmitting === !0,
        eW =
          ew &&
          null != ey &&
          null != e$ &&
          e$.id !== ep?.id &&
          1 === q.selectedElementIds.length &&
          q.selectedElementIds[0] === e$.elementId
            ? e$
            : null,
        eU = null != eW ? "" : ec
      H[68] !== eT || H[69] !== _ || H[70] !== et
        ? ((j = (e) => {
            ;(eT && _.closePanel("popcorn-presentation-inspector"),
              et?.startAskChat?.(e),
              eu(et?.opensAnnotationEditor ? null : ""))
          }),
          (H[68] = eT),
          (H[69] = _),
          (H[70] = et),
          (H[71] = j))
        : (j = H[71])
      let eG = j
      ;(H[72] !== _ || H[73] !== eF || H[74] !== eK || H[75] !== eG
        ? ((T = () => ({
            prepareDuplicate: eF,
            requestEdits: eK ? () => eG("ask_codex_button") : void 0,
            showProperties: _.isPanelAvailable("popcorn-presentation-inspector")
              ? () => _.openPanel("popcorn-presentation-inspector")
              : void 0,
          })),
          (H[72] = _),
          (H[73] = eF),
          (H[74] = eK),
          (H[75] = eG),
          (H[76] = T))
        : (T = H[76]),
        (0, d.useImperativeHandle)(K, T))
      let eX = ew && null == eU && eK
      ;(H[77] !== ee || H[78] !== eG || H[79] !== eX
        ? ((A = { enabled: eX, shortcutScopeElement: ee, onClick: eG }),
          (H[77] = ee),
          (H[78] = eG),
          (H[79] = eX),
          (H[80] = A))
        : (A = H[80]),
        (0, e_.zk)(A),
        H[81] !== Y || H[82] !== Q || H[83] !== e$
          ? ((P = () => {
              ;(e$?.onDismiss(), eu(null), Y(), Q())
            }),
            (H[81] = Y),
            (H[82] = Q),
            (H[83] = e$),
            (H[84] = P))
          : (P = H[84]))
      let eZ = P
      H[85] !== eZ || H[86] !== ec || H[87] !== eq || H[88] !== e$ || H[89] !== et
        ? ((L = async (e, t) => {
            if (ec?.trim() && !eq) {
              if (null != e$) {
                ;(await e$.onSubmit(ec)) && eZ()
                return
              }
              ;((t ? et?.defaultSubmitMode !== "saved" : et?.defaultSubmitMode === "saved") &&
                et?.savedSubmitDisabled) ||
                (et?.submitAskChat?.(ec, e, t), eZ())
            }
          }),
          (H[85] = eZ),
          (H[86] = ec),
          (H[87] = eq),
          (H[88] = e$),
          (H[89] = et),
          (H[90] = L))
        : (L = H[90])
      let eJ = L
      if (!ew || null != q.imageCrop) return null
      ;(H[91] !== es || H[92] !== ej
        ? ((F = { ...ej, maxWidth: es }), (H[91] = es), (H[92] = ej), (H[93] = F))
        : (F = H[93]),
        H[94] !== eZ
          ? ((R = (e) => {
              ;((!e.defaultPrevented && (e.metaKey || e.ctrlKey)) || e.stopPropagation(), "Escape" === e.key && eZ())
            }),
            (H[94] = eZ),
            (H[95] = R))
          : (R = H[95]))
      let eY = null == eU,
        eQ = null == eU ? "auto" : 300
      return (
        H[96] !== eQ ? ((D = { width: eQ }), (H[96] = eQ), (H[97] = D)) : (D = H[97]),
        H[98] !== ea ? ((N = ea ? { duration: 0 } : ox.X7), (H[98] = ea), (H[99] = N)) : (N = H[99]),
        H[100] !== eP ||
        H[101] !== eT ||
        H[102] !== $ ||
        H[103] !== Q ||
        H[104] !== eW ||
        H[105] !== ei ||
        H[106] !== X ||
        H[107] !== eq ||
        H[108] !== eO ||
        H[109] !== er ||
        H[110] !== ep?.placeholder ||
        H[111] !== _ ||
        H[112] !== em ||
        H[113] !== e$ ||
        H[114] !== eK ||
        H[115] !== el ||
        H[116] !== et ||
        H[117] !== en ||
        H[118] !== eH ||
        H[119] !== q ||
        H[120] !== eG ||
        H[121] !== eJ ||
        H[122] !== eU
          ? ((z =
              null != eU
                ? (0, r.jsxs)("form", {
                    "aria-busy": eq,
                    className: "flex h-8 w-full min-w-0 items-center gap-2 ps-2.5",
                    onSubmit: (e) => {
                      ;(e.preventDefault(), eJ("button", !1))
                    },
                    children: [
                      (0, r.jsx)("input", {
                        className:
                          "h-full min-w-0 flex-1 border-0 bg-transparent text-base text-default outline-none placeholder:text-tertiary",
                        autoFocus: !0,
                        value: eU,
                        readOnly: eq,
                        onFocus: () => {
                          null != eW && (eh({ id: eW.id, placeholder: eW.placeholder }), eu(""))
                        },
                        "aria-label": ei.formatMessage({
                          id: "presentationEditor.requestInput",
                          defaultMessage: "Describe your changes",
                        }),
                        placeholder:
                          eW?.placeholder ??
                          ep?.placeholder ??
                          ei.formatMessage({
                            id: "presentationEditor.requestPlaceholder",
                            defaultMessage: "Describe your changes\u2026",
                          }),
                        onChange: (e) => eu(e.currentTarget.value),
                        onKeyDown: (e) => {
                          "Enter" !== e.key ||
                            e.nativeEvent.isComposing ||
                            (e.preventDefault(), eJ("keyboard", e.metaKey || e.ctrlKey))
                        },
                      }),
                      (0, r.jsx)(lS.P, {
                        size: "iconCircle",
                        color: "primary",
                        type: "submit",
                        disabled:
                          eq ||
                          !eU.trim() ||
                          (null != e$
                            ? e$.disabled
                            : et?.defaultSubmitMode === "saved" && !0 === et.savedSubmitDisabled),
                        "aria-label": ei.formatMessage({
                          id: "presentationEditor.submitChanges",
                          defaultMessage: "Submit requested changes",
                        }),
                        children: (0, r.jsx)(iq.I, { asset: oo.e }),
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    role: "toolbar",
                    tabIndex: -1,
                    onKeyDown: ob.G,
                    className: "flex min-w-0 items-center gap-0.5",
                    "aria-label": ei.formatMessage({
                      id: "presentationEditor.selectionTools",
                      defaultMessage: "Selection actions",
                    }),
                    children: [
                      eK &&
                        (0, r.jsx)(lS.P, {
                          ref: (e) => {
                            e && !em && (ef(!0), et?.onAskForEditShown?.())
                          },
                          className: "min-w-0",
                          color: "ghostActive",
                          size: eT ? "formatToolbarIcon" : "formatToolbar",
                          "aria-label": el,
                          onClick: () => eG("ask_codex_button"),
                          children: (0, r.jsx)(ou.E, {
                            icon: (0, r.jsx)(iq.I, { asset: od.j, focusable: "false" }),
                            label: eT ? null : el,
                          }),
                        }),
                      eK && X && (0, r.jsx)("div", { className: "mx-0.5 h-5 w-px shrink-0 bg-border-subtle" }),
                      X &&
                        null != eH &&
                        (0, r.jsx)(lS.P, {
                          color: "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-label": ei.formatMessage({
                            id: "presentationEditor.selectShapeText",
                            defaultMessage: "Select text",
                          }),
                          onClick: () => {
                            ;($.textActivateBlockEnd(eH.id), $.textHandleKeyDown({ key: "a", metaKey: !0 }), Q())
                          },
                          children: (0, r.jsx)(ip.cBm, {}),
                        }),
                      eP &&
                        (0, r.jsx)(lS.P, {
                          ref: eo,
                          color: "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-label": ei.formatMessage({
                            id: "presentationEditor.editLink",
                            defaultMessage: "Add or edit link",
                          }),
                          onClick: (e) => er?.($, e.currentTarget),
                          children: (0, r.jsx)(ip.ibM, {}),
                        }),
                      X &&
                        (0, r.jsx)("div", {
                          className: (0, s.A)(
                            "flex min-w-0 items-center gap-0.5 overflow-x-auto empty:hidden",
                            !eT && "shrink-0",
                          ),
                          children: (0, r.jsx)(ok, {
                            controller: $,
                            snapshot: q,
                            isText: eO,
                            onRequestChanges: eK
                              ? (e) => {
                                  ;(eG("ask_codex_button"), eu(e))
                                }
                              : void 0,
                          }),
                        }),
                      X &&
                        (0, r.jsx)(lS.P, {
                          color: _.isPanelOpen("popcorn-presentation-inspector") ? "accentSubtle" : "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-pressed": _.isPanelOpen("popcorn-presentation-inspector"),
                          "aria-label": ei.formatMessage({
                            id: "presentationEditor.edit",
                            defaultMessage: "More formatting options",
                          }),
                          onClick: () => _.togglePanel("popcorn-presentation-inspector"),
                          children: (0, r.jsx)(iq.I, { asset: oc.$ }),
                        }),
                      et?.startComment &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("div", { className: "mx-0.5 h-5 w-px shrink-0 bg-border-subtle" }),
                            (0, r.jsx)(lS.P, {
                              color: "ghostActive",
                              size: en ? "formatToolbar" : "formatToolbarIcon",
                              "aria-label":
                                en ??
                                ei.formatMessage({ id: "presentationEditor.comment", defaultMessage: "Add comment" }),
                              onClick: et.startComment,
                              children: en
                                ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ip.TmP, {}), en] })
                                : (0, r.jsx)(iq.I, { asset: os.g }),
                            }),
                          ],
                        }),
                    ],
                  })),
            (H[100] = eP),
            (H[101] = eT),
            (H[102] = $),
            (H[103] = Q),
            (H[104] = eW),
            (H[105] = ei),
            (H[106] = X),
            (H[107] = eq),
            (H[108] = eO),
            (H[109] = er),
            (H[110] = ep?.placeholder),
            (H[111] = _),
            (H[112] = em),
            (H[113] = e$),
            (H[114] = eK),
            (H[115] = el),
            (H[116] = et),
            (H[117] = en),
            (H[118] = eH),
            (H[119] = q),
            (H[120] = eG),
            (H[121] = eJ),
            (H[122] = eU),
            (H[123] = z))
          : (z = H[123]),
        H[124] !== D || H[125] !== N || H[126] !== z
          ? ((B = (0, r.jsx)(op.P.div, {
              className: "max-w-full min-w-0",
              initial: !1,
              animate: D,
              transition: N,
              children: z,
            })),
            (H[124] = D),
            (H[125] = N),
            (H[126] = z),
            (H[127] = B))
          : (B = H[127]),
        H[128] !== eY || H[129] !== B
          ? ((O = (0, r.jsx)(of.iU, { variant: "formatting", preserveEditorFocus: eY, children: B })),
            (H[128] = eY),
            (H[129] = B),
            (H[130] = O))
          : (O = H[130]),
        H[131] !== eM || H[132] !== F || H[133] !== R || H[134] !== O
          ? ((V = (0, r.jsx)("div", {
              className: "pointer-events-none absolute inset-0 z-30",
              children: (0, r.jsx)("div", {
                ref: eM,
                className: "pointer-events-auto absolute",
                style: F,
                "data-presentation-toolbar": !0,
                "data-popcorn-edit-toolbar-root": "true",
                role: "group",
                onKeyDown: R,
                children: O,
              }),
            })),
            (H[131] = eM),
            (H[132] = F),
            (H[133] = R),
            (H[134] = O),
            (H[135] = V))
          : (V = H[135]),
        V
      )
    }
    function oT(e) {
      return e.segments.some(oA)
    }
    function oA(e) {
      return e.text.trim().length > 0
    }
    function oP(e) {
      return e.id
    }
    function oL(e) {
      return e?.()
    }
    function oF() {
      return null
    }
    function oR() {
      return null
    }
    function oD(e, t) {
      let n = e.getBoundingClientRect(),
        r = (0, tB.j)(e, t.left, t.top, n),
        i = (0, tB.j)(e, t.left + t.width, t.top + t.height, n)
      return new DOMRect(r.x, r.y, i.x - r.x, i.y - r.y)
    }
    function oN(e, t) {
      return {
        id: "codex-presentation-links",
        stageOverlays: [
          {
            id: "codex-presentation-links",
            visibleWhenReadOnly: !0,
            render: ({ controller: n, canEditSelection: i }) =>
              (0, r.jsx)(ot, { ref: e, controller: n, editable: i, sourcePageId: t }, n.id),
          },
        ],
      }
    }
    function oz(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x = (0, i.c)(30)
      x[0] !== e
        ? (({ trigger: o, onAddSlideAfter: n, onShowFormattingOptions: l, ...t } = e),
          (a = iL(t)),
          (x[0] = e),
          (x[1] = t),
          (x[2] = n),
          (x[3] = l),
          (x[4] = a),
          (x[5] = o))
        : ((t = x[1]), (n = x[2]), (l = x[3]), (a = x[4]), (o = x[5]))
      let { duplicate: b, visibility: y, separator: v, deleteItem: w } = a
      x[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, iM.zR)({
            id: "artifactPreview.slideContextMenu.formattingOptions",
            defaultMessage: "Formatting options",
          })),
          (x[6] = s))
        : (s = x[6])
      let C = null != l
      ;(x[7] !== l || x[8] !== C
        ? ((d = { id: "formatting-options", icon: ip.SU8, message: s, enabled: C, onSelect: l }),
          (x[7] = l),
          (x[8] = C),
          (x[9] = d))
        : (d = x[9]),
        x[10] !== b ? ((c = { ...b, icon: ip.R3B }), (x[10] = b), (x[11] = c)) : (c = x[11]),
        x[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, iM.zR)({
              id: "artifactPreview.slideContextMenu.addSlideBelow",
              defaultMessage: "Add slide below",
            })),
            (x[12] = u))
          : (u = x[12]),
        x[13] !== n
          ? ((p = { id: "add-slide-after", icon: ip.D_h, message: u, onSelect: n }), (x[13] = n), (x[14] = p))
          : (p = x[14]))
      let S = t.isHidden ? ip.X9D : ip.GsY
      return (
        x[15] !== S || x[16] !== y ? ((h = { ...y, icon: S }), (x[15] = S), (x[16] = y), (x[17] = h)) : (h = x[17]),
        x[18] !== w ? ((m = { ...w, icon: ip.cSG }), (x[18] = w), (x[19] = m)) : (m = x[19]),
        x[20] !== v || x[21] !== m || x[22] !== d || x[23] !== c || x[24] !== p || x[25] !== h
          ? ((f = [d, c, p, h, v, m]),
            (x[20] = v),
            (x[21] = m),
            (x[22] = d),
            (x[23] = c),
            (x[24] = p),
            (x[25] = h),
            (x[26] = f))
          : (f = x[26]),
        x[27] !== f || x[28] !== o
          ? ((g = (0, r.jsx)(iT.t, { disableNative: !0, items: f, children: o })),
            (x[27] = f),
            (x[28] = o),
            (x[29] = g))
          : (g = x[29]),
        g
      )
    }
    function oB(e) {
      let t,
        n,
        l = (0, i.c)(5)
      return (
        l[0] !== e ? ((t = (0, r.jsx)(oO, { ...e })), (l[0] = e), (l[1] = t)) : (t = l[1]),
        l[2] !== e.theme || l[3] !== t
          ? ((n = (0, r.jsx)(iI.L, { theme: e.theme, children: t })), (l[2] = e.theme), (l[3] = t), (l[4] = n))
          : (n = l[4]),
        n
      )
    }
    function oO(e) {
      let t,
        n,
        o,
        c,
        u,
        p = (0, i.c)(27),
        {
          accessoryPanelOpen: h,
          alignComposer: m,
          isQuickStartOpen: f,
          inspectorPanel: g,
          viewOnly: x,
          animateThumbnailHeight: b,
          isVisible: y,
          linkSourcePageId: v,
          ...w
        } = e,
        C = void 0 === m || m,
        S = void 0 !== f && f,
        k = void 0 !== x && x,
        I = void 0 !== b && b,
        E = void 0 === y || y,
        j = (0, ie.gh)(ig.GD),
        M = (0, d.useContext)(il.$w),
        T = (0, ix.Zj)("805359895"),
        A = (0, ie.Ul)(ia.kF),
        P = (0, ie._U)(ij.ol, k ? void 0 : w.generation?.progressKey),
        L = (0, d.useRef)(null),
        F = (0, d.useRef)(null)
      if (p[0] !== j) {
        let e = async () => ({
          duplicate: await L.current?.prepareDuplicate(),
          duplicateAccelerator: j.get(io.M5, "presentation.duplicateSelection") ?? void 0,
          requestEdits: L.current?.requestEdits,
          showProperties: L.current?.showProperties,
        })
        ;((t = (t) => (0, r.jsx)(iF, { ...t, prepareActions: e })), (p[0] = j), (p[1] = t))
      } else t = p[1]
      let R = t,
        D = 312 * !!(void 0 !== h && h),
        N = (0, ir.A)()
      p[2] !== N.locale ? ((n = (0, im.b)(N.locale)), (p[2] = N.locale), (p[3] = n)) : (n = p[3])
      let z = "rtl" === n
      p[4] !== T || p[5] !== S || p[6] !== E
        ? (T && (o = (e) => (0, r.jsx)(iX, { ...e, isVisible: E && !S })),
          (p[4] = T),
          (p[5] = S),
          (p[6] = E),
          (p[7] = o))
        : (o = p[7])
      let B = ik.a,
        O =
          k || null == w.reviewTools
            ? void 0
            : {
                ...w.reviewTools,
                annotation: {
                  ...w.reviewTools.annotation,
                  comments: w.reviewTools.annotation.comments?.unified
                    ? { ...w.reviewTools.annotation.comments, renderFloatingPortal: oG }
                    : w.reviewTools.annotation.comments,
                  activeRequests: [...(w.reviewTools.annotation.activeRequests ?? []), ...P],
                },
              }
      return (
        p[8] !== D ||
        p[9] !== C ||
        p[10] !== I ||
        p[11] !== M ||
        p[12] !== g ||
        p[13] !== S ||
        p[14] !== A ||
        p[15] !== z ||
        p[16] !== v ||
        p[17] !== w ||
        p[18] !== R ||
        p[19] !== o ||
        p[20] !== j ||
        p[21] !== k
          ? ((c = (e) => {
              var t, n
              return (0, r.jsx)(r9, {
                ...w,
                onHyperlinkHoverChange: (e, t) => {
                  ;(F.current?.hover(e, t), w.onHyperlinkHoverChange?.(e, t))
                },
                onHyperlinkClick: w.onHyperlinkClick ?? oU,
                className: (0, s.A)(w.className, "panel-VsaVuV", S && "invisible"),
                deferCleanup: null == M ? void 0 : (e) => (0, il.UO)(M, e),
                gpuRendering: "webgpu",
                renderWidget: o,
                isEditing: w.isEditing && !k,
                annotationsEnabled: w.annotationsEnabled && !k,
                drawingAnnotationsEnabled: w.drawingAnnotationsEnabled && !k,
                commentThreadsEnabled: w.commentThreadsEnabled && !k,
                generation: (!k && w.generation) || void 0,
                viewportAlignmentRef: (e) => {
                  if (null != e && C && A) return (0, ib.N)(j, e)
                },
                artifactSearchEnabled: w.artifactSearchEnabled ?? !0,
                renderFindBar: w.renderFindBar ?? oW,
                fitLeftInsetPx: z ? Math.max(w.fitLeftInsetPx ?? 0, D) : w.fitLeftInsetPx,
                fitRightInsetPx: z ? w.fitRightInsetPx : Math.max(w.fitRightInsetPx ?? 0, D),
                layoutPanelFitInsetPx: 312,
                layoutPanelSide: z ? "left" : "right",
                headerSidebarIcon: w.headerSidebarIcon ?? (0, r.jsx)(ip.eq9, { className: "text-secondary" }),
                headerAnnotationIcon: w.headerAnnotationIcon ?? oq,
                renderThumbnailPanel: (e, t) =>
                  (0, r.jsx)(iv.z, { open: t, side: "left", animateHeight: I, children: e }),
                panelsInLayout: !0,
                renderCommentsSidebarHeader: o$,
                renderCommentsSidebarEmptyAction: oK,
                headerCommentsIcon:
                  w.headerCommentsIcon ?? (0, r.jsx)(ih.b5, { icon: { assets: { 16: l.R, 20: a.G } } }),
                reviewTools: e,
                slideContextMenu: oz,
                elementContextMenu: R,
                plugins: k
                  ? [oN(F, v)]
                  : [
                      oN(F, v),
                      ...((t = (e, t, n) => {
                        F.current?.editSelection(e, t, n)
                      }),
                      (n = w.reviewTools?.selectionCommentLabel),
                      [
                        {
                          id: "popcorn-presentation-inspector-plugin",
                          panels: [
                            {
                              id: "popcorn-presentation-inspector",
                              title: "Format",
                              widthPx: 296,
                              snapshotScope: "inspector",
                              render: (e) => (0, r.jsx)(aN, { ...e }),
                            },
                          ],
                          stageOverlays: [
                            { id: "presentation-image-crop", render: (e) => (0, r.jsx)(li, { ...e }) },
                            {
                              id: "codex-presentation-toolbar",
                              supportsReadOnlySelection: !0,
                              supportsTextSelection: !0,
                              render: (e) =>
                                (0, r.jsx)(
                                  oM,
                                  { ref: L, selectionCommentLabel: n, onEditLink: t, ...e },
                                  [
                                    e.snapshot.selectedSlideIdx,
                                    e.snapshot.textEditState?.activeBlockId ?? "object",
                                    ...e.snapshot.selectedElementIds,
                                  ].join(":"),
                                ),
                            },
                          ],
                        },
                      ])
                        .filter((e) => !w.plugins?.some((t) => t.id === e.id))
                        .map((e) => ({ ...e, panels: e.panels?.map((e) => ({ ...e, ...g })) })),
                      ...(w.plugins ?? []),
                      {
                        id: "presentation-generation-progress",
                        stageOverlays: [
                          {
                            id: "presentation-generation-progress",
                            visibleWhenReadOnly: !0,
                            render: (e) => {
                              let { snapshot: t } = e,
                                n = w.generation?.progressKey
                              return null == n ? null : (0, r.jsx)(iV, { progressKey: n, snapshot: t })
                            },
                          },
                        ],
                      },
                    ],
                renderEditingControls: k ? void 0 : oH,
                renderHeader:
                  w.renderHeader ??
                  ((e) => (0, r.jsx)(iE.dl, { actions: w.headerTitleContent, controls: e, title: w.title ?? "" })),
                renderHeaderZoomControl: w.renderHeaderZoomControl ?? iy.HD,
                zoomToFitLabel:
                  w.zoomToFitLabel ?? (0, r.jsx)(ii.A, { id: "presentationPanel.zoomFit", defaultMessage: "Fit" }),
                renderLayout: w.renderLayout ?? oV,
              })
            }),
            (p[8] = D),
            (p[9] = C),
            (p[10] = I),
            (p[11] = M),
            (p[12] = g),
            (p[13] = S),
            (p[14] = A),
            (p[15] = z),
            (p[16] = v),
            (p[17] = w),
            (p[18] = R),
            (p[19] = o),
            (p[20] = j),
            (p[21] = k),
            (p[22] = c))
          : (c = p[22]),
        p[23] !== B || p[24] !== O || p[25] !== c
          ? ((u = (0, r.jsx)(B, { reviewTools: O, children: c })), (p[23] = B), (p[24] = O), (p[25] = c), (p[26] = u))
          : (u = p[26]),
        u
      )
    }
    function oV(e) {
      return (0, r.jsx)(iw.Z, { layout: e })
    }
    function oH(e) {
      return (0, r.jsx)(i9, { ...e })
    }
    function oK(e) {
      return (0, r.jsx)(iC.D, { buttonProps: e })
    }
    function o$(e) {
      return (0, r.jsx)(iC.w, { ...e })
    }
    function oq(e) {
      return (0, r.jsx)(is.a, { active: e })
    }
    function oW(e) {
      return (0, r.jsx)(iS.P, { ...e })
    }
    function oU(e) {
      let { url: t } = e,
        n = (0, iu.f)(t)
      ;((0, it.q$v)(n) || (0, it.yQ9)(n)) && (0, ic.Rh)({ href: n, initiator: "open_in_browser_bridge" })
    }
    function oG(e) {
      return (0, r.jsx)(id.s, { container: document.body, children: e })
    }
  },
  nnSv(e, t, n) {
    n.d(
      t,
      {},
      {
        Q: function (e, t) {
          let n = e.ownerDocument,
            r = !1,
            i = (e) => {
              e !== r && ((r = e), t(e))
            },
            l = (t) => {
              if ("touch" === t.pointerType) return
              let n = e.getBoundingClientRect()
              i(t.clientX >= n.left && t.clientX <= n.right && t.clientY >= n.top && t.clientY <= n.bottom)
            },
            a = () => i(!1)
          return (
            n.addEventListener("pointermove", l, !0),
            n.documentElement.addEventListener("pointerleave", a),
            n.defaultView?.addEventListener("blur", a),
            () => {
              ;(n.removeEventListener("pointermove", l, !0),
                n.documentElement.removeEventListener("pointerleave", a),
                n.defaultView?.removeEventListener("blur", a),
                a())
            }
          )
        },
      },
    )
  },
  PpD0(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      l = n("K4Cx"),
      a = n("zd8w"),
      o = n("T1PX"),
      s = n("V8uZ")
    function d(e) {
      return !e.complete
    }
    n.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            n,
            c,
            u,
            p,
            h,
            m,
            f,
            g = (0, i.c)(22),
            { children: x, open: b, side: y, animateHeight: v } = e,
            w = void 0 !== v && v,
            C = (0, o.I)(),
            S = (0, a.useRef)(null)
          ;(g[0] !== w || g[1] !== b || g[2] !== C
            ? ((t = () => {
                let e,
                  t = S.current,
                  n = t?.firstElementChild
                if (!w || !b || null == t || !(n instanceof HTMLElement)) return
                let r = n.style.height,
                  i = 0,
                  l = 0,
                  a = !1,
                  o = () => {
                    if (document.hidden) return
                    if (e?.playState === "running") {
                      a = !0
                      return
                    }
                    if ([...n.querySelectorAll("img")].some(d)) return
                    let t = 0 === i ? 0 : parseFloat(getComputedStyle(n).height)
                    n.style.height = r
                    let l = parseFloat(getComputedStyle(n).height)
                    ;((n.style.height = `${l || i}px`),
                      !l ||
                        l === i ||
                        ((i = l),
                        C ||
                          ((e = n.animate([{ height: `${t}px` }, { height: `${l}px` }], {
                            duration: 300,
                            easing: `cubic-bezier(${s.Yw.join(",")})`,
                          })).onfinish = () => {
                            ;((e = void 0), a && ((a = !1), o()))
                          })))
                  },
                  c = () => {
                    ;(cancelAnimationFrame(l), (l = requestAnimationFrame(o)))
                  },
                  u = new ResizeObserver(c)
                u.observe(t)
                let p = new MutationObserver(c)
                ;(p.observe(n, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                  attributes: !0,
                  attributeFilter: ["src"],
                }),
                  n.addEventListener("load", c, !0),
                  n.addEventListener("error", c, !0))
                let h = () => {
                  document.hidden ? (e?.cancel(), cancelAnimationFrame(l)) : o()
                }
                return (
                  document.addEventListener("visibilitychange", h),
                  o(),
                  () => {
                    ;(p.disconnect(),
                      u.disconnect(),
                      n.removeEventListener("load", c, !0),
                      n.removeEventListener("error", c, !0),
                      document.removeEventListener("visibilitychange", h),
                      cancelAnimationFrame(l),
                      null != e && ((e.onfinish = null), e.cancel()),
                      (n.style.height = r))
                  }
                )
              }),
              (n = [w, b, C]),
              (g[0] = w),
              (g[1] = b),
              (g[2] = C),
              (g[3] = t),
              (g[4] = n))
            : ((t = g[3]), (n = g[4])),
            (0, a.useLayoutEffect)(t, n))
          let k = "left" === y ? "-100%" : "100%",
            I = !b,
            E = !b
          g[5] !== k || g[6] !== b
            ? ((c = !b && { display: "none", x: k }), (g[5] = k), (g[6] = b), (g[7] = c))
            : (c = g[7])
          let j = b ? "open" : "closed"
          return (
            g[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = { x: 0, display: "block" }), (g[8] = u))
              : (u = g[8]),
            g[9] === Symbol.for("react.memo_cache_sentinel") ? ((p = { display: "none" }), (g[9] = p)) : (p = g[9]),
            g[10] !== k
              ? ((h = { open: u, closed: { x: k, transitionEnd: p } }), (g[10] = k), (g[11] = h))
              : (h = g[11]),
            g[12] !== C ? ((m = C ? { duration: 0 } : s.bl), (g[12] = C), (g[13] = m)) : (m = g[13]),
            g[14] !== x || g[15] !== h || g[16] !== m || g[17] !== I || g[18] !== E || g[19] !== c || g[20] !== j
              ? ((f = (0, r.jsx)(l.P.div, {
                  ref: S,
                  className: "absolute inset-0",
                  "aria-hidden": I,
                  inert: E,
                  initial: c,
                  animate: j,
                  variants: h,
                  transition: m,
                  children: x,
                })),
                (g[14] = x),
                (g[15] = h),
                (g[16] = m),
                (g[17] = I),
                (g[18] = E),
                (g[19] = c),
                (g[20] = j),
                (g[21] = f))
              : (f = g[21]),
            f
          )
        },
      },
    )
  },
  sZWC(e, t, n) {
    var r = n("vaO0")
    let i = "\x3c!--__INLINE_VISUALIZATION_FRAGMENT__--\x3e",
      l = {
        requiresReadySignal: !1,
        hasPaintGutter: !1,
        inlineMaxHeight: 600,
        csp: {
          ...r.qD,
          resourceDomains: [...r.qD.resourceDomains, "https://cdn.tailwindcss.com", "https://images.openai.com"],
        },
        async buildHtml(e, t, r) {
          let l,
            { getVisualizationSandboxHtml: a } = await Promise.all([n.e(389665), n.e(413895)]).then(n.bind(n, "QZdn")),
            o = r.replace(/[^a-zA-Z0-9-]/g, "") || "en"
          if (/<!doctype\b|<html[\s>]/i.test(e)) {
            let t = e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i)
            if (t?.index == null)
              l = `${e}
${i}`
            else {
              let n = t.index
              l = [e.slice(0, n), i, e.slice(n)].join("\n")
            }
          } else
            l = `<!doctype html>
<html lang="${o}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>body{margin:0}</style>
</head>
<body>${e}${i}</body>
</html>`
          return a("", { ...t, innerKit: l, lockDocumentOverflow: !1, styles: "", syncHostStyles: !1 })
        },
      },
      a = { ...l, csp: { ...l.csp, disableNetworkRequests: !0 } }
    n.d(t, {}, { R: l, p: a })
  },
  JjK1(e, t, n) {
    let r = (0, n("ESTr").a)({
      name: "unlock-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.141113, y: 1.474609, width: 11.716797, height: 13.050781 },
        visualBounds: { x: 2.141113, y: 1.474609, width: 11.716797, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.141113, y: 1.474609, width: 11.716797, height: 13.050781 },
        center: { x: 7.999512, y: 8 },
        insets: { top: 1.474609, right: 2.14209, bottom: 1.47461, left: 2.141113 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999512, y: 8 }, foreground: { x: 7.999512, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00049 8.1416C8.65837 8.14191 9.19189 8.67603 9.19189 9.33398C9.19168 9.80314 8.91919 10.2072 8.5249 10.4014V11.333C8.5249 11.623 8.28946 11.8584 7.99951 11.8584C7.70973 11.8582 7.47412 11.6228 7.47412 11.333V10.4014C7.08008 10.207 6.80832 9.80282 6.80811 9.33398C6.80811 8.67585 7.34235 8.1416 8.00049 8.1416Z" fill="currentColor"/> <path d="M7.99951 1.47461C9.24995 1.47461 10.3618 2.07059 11.0659 2.99121C11.2421 3.22152 11.1986 3.55139 10.9683 3.72754C10.738 3.90358 10.4081 3.85918 10.2319 3.62891C9.7179 2.95691 8.90906 2.52539 7.99951 2.52539C6.44883 2.52563 5.19207 3.78231 5.19189 5.33301V5.47461H11.3335C12.7279 5.47479 13.8579 6.60559 13.8579 8V12C13.8579 13.3944 12.7279 14.5252 11.3335 14.5254H4.6665C3.27199 14.5254 2.14111 13.3945 2.14111 12V8C2.14111 6.7857 2.99876 5.77218 4.14111 5.53027V5.33301C4.14129 3.20241 5.86893 1.47485 7.99951 1.47461ZM4.6665 6.52539C3.85188 6.52539 3.19189 7.18538 3.19189 8V12C3.19189 12.8146 3.85188 13.4746 4.6665 13.4746H11.3335C12.148 13.4744 12.8081 12.8145 12.8081 12V8C12.8081 7.18549 12.148 6.52557 11.3335 6.52539H4.6665Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { O: r })
  },
}
//# sourceMappingURL=687541.4551e74d0e.js.map
