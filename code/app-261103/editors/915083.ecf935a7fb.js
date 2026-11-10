export const __rspack_esm_ids = [915083]
export const __webpack_modules__ = {
  V94B(e, t, n) {
    var r = n("KCy7"),
      i = n("UMDA")
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
  OHgJ(e, t, n) {
    var r = n("ABep"),
      i = n("zdB4")
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
  nWOQ(e, t, n) {
    var r = n("ABep"),
      i = n("YLKE"),
      l = n("on57"),
      a = n("zd8w"),
      o = n("zdB4"),
      s = n("pAUJ"),
      d = n("XP7M"),
      c = n("LlBE"),
      u = n("mfKQ"),
      p = n("KZzR"),
      h = n("U22i")
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
          paintRole: j,
          backgroundColor: E,
          onChange: M,
          className: A,
          config: T,
        }) {
          let P = T ?? { state: "enabled" },
            L = x || "enabled" !== P.state,
            F = y && P.options?.allowNone !== !1,
            R = v && P.options?.allowCustom !== !1,
            N = P.options?.palette ?? w,
            D = (0, a.useContext)(m),
            z = I.length > 0 ? I : [f, ...D],
            B =
              N?.map((e) => {
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
            $ = (0, a.useContext)(d.Z),
            H = E && "none" !== E ? $.withBackground(E) : $,
            K = (e) => ("text" === j ? H.text(e) : H.color(e)),
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
              : { backgroundColor: K(W === q ? (t ?? Y) : Y) }
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
              displayColor: K,
              labels: { palette: I.length > 0 ? "Theme colors" : g, hexInput: `${g} hex value` },
              onChange: (e) => {
                var t
                let r
                return (
                  (r = "none" === (t = e ?? "none") ? "none" : V(t)),
                  void (
                    L ||
                    ("none" === r ? !F : !R && !B.some((e) => e.value === r)) ||
                    ((r !== _.current || ((C || void 0 !== n) && !(X.current.length > 0))) &&
                      (X.current.push(r), (_.current = r), G({ value: r, pending: !0 }), O(t)))
                  )
                )
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
                    className: (0, l.A)("relative min-w-0", A),
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
  nLn3(e, t, n) {
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
  jxh3(e, t, n) {
    var r = n("ABep"),
      i = n("zd8w"),
      l = n("pAUJ"),
      a = n("U22i"),
      o = n("nLn3"),
      s = n("wi9J")
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
  Ulkn(e, t, n) {
    var r = n("ABep"),
      i = n("on57"),
      l = n("zd8w"),
      a = n("wi9J"),
      o = n("DiQJ")
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
  scdV(e, t, n) {
    var r = n("ABep"),
      i = n("on57"),
      l = n("pAUJ"),
      a = n("U22i"),
      o = n("wi9J")
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
  og1W(e, t, n) {
    var r = n("ABep"),
      i = n("on57"),
      l = n("zdB4")
    ;(n("SYHx"),
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
  wBmQ(e, t, n) {
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
  PSqs(e, t, n) {
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
  XP7M(e, t, n) {
    var r = n("ZmRm")
    let i = (0, n("zd8w").createContext)(r.ES)
    n.d(t, {}, { Z: i })
  },
  bxEp(e, t, n) {
    n.d(t, { g: () => a })
    let r = null
    var i = n("nNv2")
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
  lPBr(e, t, n) {
    n.r(t)
    let r = "Codex selected "
    function i(e) {
      return `${r}${e.postscriptName}`
    }
    function l(e, t) {
      return a(e)?.toLowerCase() === t.family.toLowerCase()
    }
    function a(e) {
      return null == e
        ? void 0
        : o(e)
            .replace(/^["']|["']$/g, "")
            .replace(/\\(.)/gsu, "$1") || void 0
    }
    function o(e) {
      let t = null
      for (let n = 0; n < e.length; n += 1) {
        let r = e[n]
        if ("\\" === r) n += 1
        else if (null != t) r === t && (t = null)
        else if ('"' === r || "'" === r) t = r
        else if ("," === r) return e.slice(0, n).trim()
      }
      return e.trim()
    }
    function s(e) {
      return e.replaceAll("\\", "\\\\").replaceAll('"', '\\"')
    }
    n.d(
      t,
      {},
      {
        doesThemeFontFaceMatchValue: l,
        escapeThemeFontCssString: s,
        getAvailableCssFontFamilyName: function (e) {
          if (null == e) return
          let t = document.createElement("canvas").getContext("2d"),
            n = "Sphinx of black quartz, judge my vow 1234567890",
            r = ["monospace", "serif"].map((e) => (null == t ? 0 : ((t.font = `16px ${e}`), t.measureText(n).width)))
          for (let i = e; i.length > 0;) {
            let e = o(i),
              l = a(e)
            if (((i = i.trimStart().slice(e.length + 1)), null != l)) {
              if (e === l && ("-apple-system-body" === l || "-apple-system" === l || "BlinkMacSystemFont" === l))
                return "system-ui"
              if (
                (e === l &&
                  /^(?:system-ui|(?:ui-)?(?:serif|sans-serif|monospace)|cursive|fantasy|math|emoji|fangsong)$/i.test(
                    l,
                  )) ||
                (null != t &&
                  ["monospace", "serif"].some(
                    (e, i) => ((t.font = `16px "${s(l)}", ${e}`), t.measureText(n).width !== r[i]),
                  ))
              )
                return l
            }
          }
          return "system-ui"
        },
        getFirstCssFontFamilyName: a,
        getFirstCssFontFamilyValue: o,
        getThemeFontFaceAlias: i,
        getThemeFontFaceLocalNames: function (e, t) {
          return null != t && i(t) === e
            ? [t.postscriptName, t.fullName]
            : e.startsWith(r)
              ? [e.slice(r.length)]
              : void 0
        },
        getThemeFontFamilyValue: function (e, t) {
          return null != e && null != t && l(e, t) ? `"${s(i(t))}", ${e}` : e
        },
      },
    )
  },
  x77z(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      l = n("q1q2"),
      a = n("tILS"),
      o = n("on57"),
      s = n("suct"),
      d = n("LIss"),
      c = n("iodE"),
      u = n("zd8w"),
      p = n("Wf1j"),
      h = n("oyxz"),
      m = n("wD9O"),
      f = n("i7gm"),
      g = n("ygO2"),
      x = n("GO7r"),
      b = n("YA2q"),
      y = n("CH2b"),
      v = n("f4Vb"),
      w = n("nsuH"),
      C = n("V8uZ"),
      S = n("Lydu")
    let k = "generationcursormotionchange"
    function I(e) {
      let t,
        n,
        s,
        d,
        c,
        p,
        h,
        g,
        x,
        b,
        y,
        v = (0, i.c)(42),
        { children: w, reducedMotion: C, collapsed: S, homeRef: I, boundary: R, glyphRef: N, onDismiss: D } = e,
        [z, B] = (0, u.useState)(null),
        O = z?.closest("[data-artifact-generation-boundary]"),
        V = R ?? O ?? void 0,
        $ = (0, m.dz)()
      ;(v[0] !== z
        ? ((t = (e) => {
            let t = z?.closest("[data-generation-cursor]")
            return (t?.addEventListener(k, e), () => t?.removeEventListener(k, e))
          }),
          (v[0] = z),
          (v[1] = t))
        : (t = v[1]),
        v[2] !== z || v[3] !== I
          ? ((n = () =>
              null != z && I?.current != null && !z.closest("[data-generation-cursor]")?.getAnimations().some(L)),
            (v[2] = z),
            (v[3] = I),
            (v[4] = n))
          : (n = v[4]))
      let H = (0, u.useSyncExternalStore)(t, n, P)
      ;(v[5] !== z || v[6] !== N || v[7] !== I
        ? ((s =
            null == z
              ? z
              : {
                  contextElement: z,
                  getBoundingClientRect: () =>
                    (!z.closest("[data-generation-cursor]")?.getAnimations().some(T) && I?.current != null
                      ? I.current
                      : (N.current ?? z)
                    ).getBoundingClientRect(),
                }),
          (v[5] = z),
          (v[6] = N),
          (v[7] = I),
          (v[8] = s))
        : (s = v[8]),
        v[9] !== s ? ((d = { reference: s }), (v[9] = s), (v[10] = d)) : (d = v[10]),
        v[11] !== H || v[12] !== $
          ? ((c = (0, l.cY)(H ? 8 * $ : { mainAxis: 4 * $, alignmentAxis: 18 * $ })),
            (v[11] = H),
            (v[12] = $),
            (v[13] = c))
          : (c = v[13]))
      let K = (0, l.UU)({ boundary: V, padding: 8, flipAlignment: !1 }),
        q = (0, l.BN)({ boundary: V, padding: 8, crossAxis: null != O }),
        W = (0, l.Ej)({
          boundary: V,
          padding: 8,
          apply(e) {
            let { availableWidth: t, availableHeight: n, elements: r } = e,
              i =
                null == O
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
                    })(O),
              l = r.floating.parentElement
            ;(null != l && (l.style.clipPath = i),
              Object.assign(r.floating.style, {
                maxWidth: `${Math.max(0, t)}px`,
                maxHeight: null == O ? "" : `${Math.max(0, n)}px`,
              }),
              r.floating.style.setProperty("--generation-tooltip-max-width", `${Math.max(0, t) / $}px`))
          },
        })
      ;(v[14] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, l.jD)()), (v[14] = p)) : (p = v[14]),
        v[15] !== W || v[16] !== c || v[17] !== K || v[18] !== q
          ? ((h = [c, K, q, W, p]), (v[15] = W), (v[16] = c), (v[17] = K), (v[18] = q), (v[19] = h))
          : (h = v[19]),
        v[20] !== z || v[21] !== C || v[22] !== h || v[23] !== d
          ? ((g = {
              elements: d,
              placement: "bottom-start",
              strategy: "fixed",
              middleware: h,
              whileElementsMounted(e, t, n) {
                if (null == z) return A
                let r = t.ownerDocument,
                  i = z.closest("[data-generation-cursor]"),
                  l = !1,
                  o = M,
                  s = () => {
                    ;(o(),
                      (o = E),
                      n(),
                      l &&
                        !r.hidden &&
                        (o = (0, a.ll)(e, t, n, { animationFrame: !C && (i?.getAnimations().some(j) ?? !1) })))
                  },
                  d = new IntersectionObserver((e) => {
                    let [t] = e
                    ;((l = t.isIntersecting), n(), s())
                  })
                return (
                  d.observe(z),
                  i?.addEventListener(k, s),
                  r.addEventListener("visibilitychange", s),
                  () => {
                    ;(o(), d.disconnect(), i?.removeEventListener(k, s), r.removeEventListener("visibilitychange", s))
                  }
                )
              },
            }),
            (v[20] = z),
            (v[21] = C),
            (v[22] = h),
            (v[23] = d),
            (v[24] = g))
          : (g = v[24]))
      let { floatingStyles: U, refs: G, middlewareData: _, isPositioned: X, placement: Z } = (0, l.we)(g),
        { setFloating: J } = G
      return (
        v[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, r.jsx)("div", {
              ref: B,
              className: "absolute top-0 left-0 size-8 -translate-x-1/2 -translate-y-1/2",
            })),
            (v[25] = x))
          : (x = v[25]),
        v[26] !== z ||
        v[27] !== w ||
        v[28] !== S ||
        v[29] !== H ||
        v[30] !== U ||
        v[31] !== O ||
        v[32] !== X ||
        v[33] !== _ ||
        v[34] !== D ||
        v[35] !== Z ||
        v[36] !== C ||
        v[37] !== J ||
        v[38] !== $
          ? ((b =
              null != z &&
              (0, r.jsx)(f.s, {
                container: z.ownerDocument.body,
                children: (0, r.jsx)("div", {
                  className: null == O ? "contents" : "pointer-events-none fixed inset-0 z-50",
                  style: null == O ? void 0 : { clipPath: "inset(50%)" },
                  children: (0, r.jsx)("div", {
                    ref: J,
                    className: (0, o.A)("z-50 w-max overflow-hidden", {
                      "pointer-events-none": S,
                      "pointer-events-auto": !S,
                    }),
                    style: { ...U, visibility: !X || _.hide?.referenceHidden ? "hidden" : void 0 },
                    children: (0, r.jsx)(F, {
                      reducedMotion: C,
                      placement: Z,
                      zoom: $,
                      collapsed: S,
                      docked: H,
                      onDismiss: D,
                      children: w,
                    }),
                  }),
                }),
              })),
            (v[26] = z),
            (v[27] = w),
            (v[28] = S),
            (v[29] = H),
            (v[30] = U),
            (v[31] = O),
            (v[32] = X),
            (v[33] = _),
            (v[34] = D),
            (v[35] = Z),
            (v[36] = C),
            (v[37] = J),
            (v[38] = $),
            (v[39] = b))
          : (b = v[39]),
        v[40] !== b ? ((y = (0, r.jsxs)(r.Fragment, { children: [x, b] })), (v[40] = b), (v[41] = y)) : (y = v[41]),
        y
      )
    }
    function j(e) {
      return "running" === e.playState
    }
    function E() {}
    function M() {}
    function A() {}
    function T(e) {
      return "running" === e.playState
    }
    function P() {
      return !1
    }
    function L(e) {
      return "running" === e.playState
    }
    function F(e) {
      let t,
        n,
        l,
        a,
        c,
        m,
        f,
        b,
        y,
        S,
        k,
        I,
        j = (0, i.c)(38),
        { children: E, reducedMotion: M, placement: A, zoom: T, collapsed: P, docked: L, onDismiss: F } = e,
        N = (0, p.A)(),
        [D, z] = (0, u.useState)(null)
      j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            let { width: t, height: n } = (0, v.q)(e)
            0 !== t && 0 !== n && z((e) => (e?.width === t && e.height === n ? e : { width: t, height: n }))
          }),
          (j[0] = t))
        : (t = j[0])
      let B = (0, w.wY)(t),
        O = "string" == typeof E ? E : null
      j[1] !== O ? ((n = { text: O, key: 0 }), (j[1] = O), (j[2] = n)) : (n = j[2])
      let [V, $] = (0, u.useState)(n)
      if (O !== V.text) {
        let e = null != O && null != V.text && O.startsWith(V.text)
        $({ text: O, key: V.key + +!e })
      }
      let H = !L && "bottom-start" === A,
        K = !L && "bottom-end" === A,
        q = !L && "top-start" === A,
        W = !L && "top-end" === A
      ;(j[3] !== H || j[4] !== K || j[5] !== q || j[6] !== W
        ? ((l = (0, o.A)(
            "group relative overflow-hidden rounded-2xl bg-blue text-base leading-snug wrap-break-word text-white shadow-lg select-none",
            { "rounded-ss-[6px]": H, "rounded-se-[6px]": K, "rounded-es-[6px]": q, "rounded-ee-[6px]": W },
          )),
          (j[3] = H),
          (j[4] = K),
          (j[5] = q),
          (j[6] = W),
          (j[7] = l))
        : (l = j[7]),
        j[8] !== T ? ((a = { zoom: T }), (j[8] = T), (j[9] = a)) : (a = j[9]))
      let U = D?.width,
        G = D?.height
      ;(j[10] !== G || j[11] !== U
        ? ((c = { width: U, height: G }), (j[10] = G), (j[11] = U), (j[12] = c))
        : (c = j[12]),
        j[13] !== M ? ((m = M ? { duration: 0 } : C.X7), (j[13] = M), (j[14] = m)) : (m = j[14]))
      let _ = P ? "px-3 py-2 text-sm" : "py-3 ps-4 pe-8"
      return (
        j[15] !== _ ? ((f = (0, o.A)("w-max max-w-64", _)), (j[15] = _), (j[16] = f)) : (f = j[16]),
        j[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = { maxWidth: "min(16rem, var(--generation-tooltip-max-width))" }), (j[17] = b))
          : (b = j[17]),
        j[18] !== E || j[19] !== P || j[20] !== M || j[21] !== V.key
          ? ((y = P
              ? (0, r.jsx)(h.A, {
                  id: "pages.presentation.cursorAgentName",
                  defaultMessage: "ChatGPT",
                  description:
                    "Title badge on the presentation agent cursor while the user hovers the slide; do not translate ChatGPT",
                })
              : (0, r.jsx)("div", {
                  className: "relative",
                  children: (0, r.jsx)(s.N, {
                    initial: !1,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      d.P.div,
                      {
                        initial: { opacity: +!!M },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.15 * !M },
                        children: (0, r.jsx)(R, { reducedMotion: M, children: E }),
                      },
                      V.key,
                    ),
                  }),
                })),
            (j[18] = E),
            (j[19] = P),
            (j[20] = M),
            (j[21] = V.key),
            (j[22] = y))
          : (y = j[22]),
        j[23] !== B || j[24] !== f || j[25] !== y
          ? ((S = (0, r.jsx)("div", { ref: B, className: f, style: b, children: y })),
            (j[23] = B),
            (j[24] = f),
            (j[25] = y),
            (j[26] = S))
          : (S = j[26]),
        j[27] !== P || j[28] !== N || j[29] !== F
          ? ((k =
              !P &&
              (0, r.jsx)(g.$, {
                className:
                  "absolute end-1 top-1 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 pointer-coarse:opacity-100",
                color: "mediaOverlay",
                size: "compact",
                radius: "full",
                uniform: !0,
                "aria-label": N.formatMessage({
                  id: "pages.presentation.dismissProgress",
                  defaultMessage: "Dismiss progress",
                  description:
                    "Close the presentation agent's progress bubble for the current generation without stopping the agent",
                }),
                onClick: (e) => {
                  ;(e.stopPropagation(), F())
                },
                children: (0, r.jsx)(x.Gmf, {}),
              })),
            (j[27] = P),
            (j[28] = N),
            (j[29] = F),
            (j[30] = k))
          : (k = j[30]),
        j[31] !== c || j[32] !== m || j[33] !== S || j[34] !== k || j[35] !== l || j[36] !== a
          ? ((I = (0, r.jsxs)(d.P.div, {
              className: l,
              style: a,
              role: "status",
              initial: !1,
              animate: c,
              transition: m,
              children: [S, k],
            })),
            (j[31] = c),
            (j[32] = m),
            (j[33] = S),
            (j[34] = k),
            (j[35] = l),
            (j[36] = a),
            (j[37] = I))
          : (I = j[37]),
        I
      )
    }
    function R(e) {
      let t,
        n,
        l = (0, i.c)(7),
        { children: a, reducedMotion: o } = e,
        s = (0, c.tF)(),
        d = (0, p.A)(),
        u = !s,
        h = !o || void 0
      return (
        l[0] !== a || l[1] !== d
          ? ((t =
              "string" == typeof a ? (0, b.gk)(a, new Intl.Segmenter(d.locale, { granularity: "word" })).map(N) : a),
            (l[0] = a),
            (l[1] = d),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== u || l[4] !== h || l[5] !== t
          ? ((n = (0, r.jsx)("span", {
              className: S.A.MarkdownRoot,
              "aria-hidden": u,
              "data-markdown-animated": h,
              "data-markdown-text-style": "inherit",
              children: t,
            })),
            (l[3] = u),
            (l[4] = h),
            (l[5] = t),
            (l[6] = n))
          : (n = l[6]),
        n
      )
    }
    function N(e, t) {
      return (0, r.jsx)(
        "span",
        {
          ...(0, y._)({ className: S.A.FadeIn, fadeSegmentDelayMs: 16, fadeSegmentMaxDelayMs: 96, segmentIndex: t }),
          children: e,
        },
        t,
      )
    }
    n.d(
      t,
      {},
      {
        A: k,
        y: function (e) {
          let t,
            n = (0, i.c)(3),
            [l, a] = (0, u.useState)(!1)
          return (
            n[0] !== l || n[1] !== e
              ? ((t = l || e.hidden ? null : (0, r.jsx)(I, { ...e, onDismiss: () => a(!0) })),
                (n[0] = l),
                (n[1] = e),
                (n[2] = t))
              : (t = n[2]),
            t
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
      p = n("Kq4t"),
      h = n("bxEp")
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
    var f = n("yQP1")
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
        j,
        E = (0, i.c)(36),
        {
          requestId: M,
          children: A,
          homeRef: T,
          active: P,
          collapsed: L,
          hideTooltipWhenInactive: F,
          boundary: R,
          cursorRef: N,
          constrainToBoundary: D,
        } = e,
        z = void 0 === P || P,
        B = void 0 !== L && L,
        O = void 0 !== F && F,
        V = void 0 === D || D,
        $ = (0, a.useRef)(null),
        H = (0, a.useRef)(null),
        K = (0, a.useRef)(null),
        q = (0, c.I)(),
        W = (0, d.dz)(),
        U = (0, a.useRef)(!1),
        G = (0, a.useRef)(!1),
        _ = (0, a.useRef)(0),
        X = (0, a.useRef)(null)
      return (
        E[0] !== R || E[1] !== V || E[2] !== W
          ? ((t = () => {
              let e = $.current,
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
            (E[0] = R),
            (E[1] = V),
            (E[2] = W),
            (E[3] = t),
            (E[4] = n))
          : ((t = E[3]), (n = E[4])),
        (0, a.useLayoutEffect)(t, n),
        E[5] !== z || E[6] !== T || E[7] !== q || E[8] !== M || E[9] !== W
          ? ((o = () => {
              let e = $.current,
                t = H.current
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
                f = T?.current,
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
                  if ((o(), p.disconnect(), e.ownerDocument.removeEventListener("visibilitychange", u), null != T)) {
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
            (p = [M, q, T, z, W]),
            (E[5] = z),
            (E[6] = T),
            (E[7] = q),
            (E[8] = M),
            (E[9] = W),
            (E[10] = o),
            (E[11] = p))
          : ((o = E[10]), (p = E[11])),
        (0, a.useEffect)(o, p),
        E[12] !== N ? ((h = (0, u.P)($, N)), (E[12] = N), (E[13] = h)) : (h = E[13]),
        E[14] !== T || E[15] !== W
          ? ((f = null == T ? void 0 : { zoom: W }), (E[14] = T), (E[15] = W), (E[16] = f))
          : (f = E[16]),
        E[17] !== M ? ((g = (0, r.jsx)(m, { requestId: M })), (E[17] = M), (E[18] = g)) : (g = E[18]),
        E[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)("div", {
              ref: K,
              className: "absolute",
              style: { left: -3.25, top: -1.34, width: 18, height: 18 },
            })),
            (E[19] = y))
          : (y = E[19]),
        E[20] !== f || E[21] !== g
          ? ((k = (0, r.jsxs)("div", {
              ref: H,
              className: "absolute top-0 left-0 origin-top-left",
              "aria-hidden": "true",
              style: f,
              children: [g, y],
            })),
            (E[20] = f),
            (E[21] = g),
            (E[22] = k))
          : (k = E[22]),
        E[23] !== z ||
        E[24] !== R ||
        E[25] !== A ||
        E[26] !== B ||
        E[27] !== O ||
        E[28] !== T ||
        E[29] !== q ||
        E[30] !== M
          ? ((I =
              null != A &&
              (0, r.jsx)(
                b.y,
                {
                  reducedMotion: q,
                  hidden: O && !z,
                  collapsed: B,
                  homeRef: z ? void 0 : T,
                  boundary: R,
                  glyphRef: K,
                  children: A,
                },
                M,
              )),
            (E[23] = z),
            (E[24] = R),
            (E[25] = A),
            (E[26] = B),
            (E[27] = O),
            (E[28] = T),
            (E[29] = q),
            (E[30] = M),
            (E[31] = I))
          : (I = E[31]),
        E[32] !== k || E[33] !== I || E[34] !== h
          ? ((j = (0, r.jsxs)("div", {
              ref: h,
              className: "absolute inset-0",
              "data-generation-cursor": !0,
              children: [k, I],
            })),
            (E[32] = k),
            (E[33] = I),
            (E[34] = h),
            (E[35] = j))
          : (j = E[35]),
        j
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
  cJzD(e, t, n) {
    ;(n.r(t), n.d(t, { PresentationPanel: () => aO }))
    var r = n("ABep"),
      i = n("QosV"),
      l = n("nAzy"),
      a = n("Gh6R"),
      o = n("UTQV"),
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
    var u = n("a0oO"),
      p = n("DP1d"),
      h = n("pHM5"),
      m = n("SAsY"),
      f = n("prnO"),
      g = n("VBOr"),
      x = n("PSqs"),
      b = n("a79I"),
      y = n("kah0"),
      v = n("G7Oa"),
      w = n("Ipes"),
      C = n("tiQJ"),
      S = n("v7qY"),
      k = n("QbVZ"),
      I = n("zdB4"),
      j = n("IGxs"),
      E = n("T12R"),
      M = n("CzBT"),
      A = n("zGj4"),
      T = n("FXkn"),
      P = n("fwLJ"),
      L = n("H1O3"),
      F = n("OHgJ"),
      R = n("TCPv"),
      N = n("XuUz"),
      D = n("wpQU"),
      z = n("XLH8"),
      B = n("E9hR")
    function O(e, t, n) {
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
    var V = n("Ix0P"),
      $ = n("FHoJ"),
      H = n("bIG3"),
      K = n("nFQA"),
      q = n("Yv8T")
    function W(e, t) {
      return t && t.width > 0 && t.height > 0
        ? { width: t.width, height: t.height }
        : { width: e.clientWidth, height: e.clientHeight }
    }
    function U(e, t) {
      return W(e, { width: t.contentRect.width, height: t.contentRect.height })
    }
    var G = n("wWBC"),
      _ = n("V94B"),
      X = n("YQ6e")
    let Z = {
      find: h.V,
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
    function J(e, t) {
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
    let Y = 1
    function Q(e, t) {
      return e?.width === t?.width && e?.height === t?.height && e?.dpr === t?.dpr
    }
    function ee(e, t, n) {
      ;((n?.resizeIntrinsicBitmap ?? !0) &&
        ((e.width = Math.max(1, Math.round(t.width * t.dpr))), (e.height = Math.max(1, Math.round(t.height * t.dpr)))),
        (e.style.width = `${t.width}px`),
        (e.style.height = `${t.height}px`))
    }
    class et {
      get isActive() {
        return !this.#p && this.#h.isActive
      }
      get hasRenderedFrame() {
        return null != this.#m
      }
      get renderedFrame() {
        return this.#m
      }
      subscribeToRenderedFrame(e) {
        return this.#f.subscribe(e)
      }
      #m = null
      #f = new H.c()
      id = Y++
      diagnostics = void 0
      #g = (0, K.V)("presentation-main-controller")
      #x = (function (e = Z) {
        return new X.Y(e)
      })()
      #b = new H.c()
      #y = new H.c()
      #v = new Set()
      #w = null
      chartEditing = {
        subscribe: (e) => (
          this.#v.add(e),
          () => {
            this.#v.delete(e)
          }
        ),
        getSnapshot: () => this.#w,
        edit: (e) => this.dispatch({ kind: "edit-chart", edit: e }),
      }
      #C = new Set()
      #S = null
      tableEditing = {
        subscribe: (e) => (
          this.#C.add(e),
          () => {
            this.#C.delete(e)
          }
        ),
        getSnapshot: () => this.#S,
        interact: (e) => this.#h.dispatch({ kind: "table-interaction", interaction: e }),
        edit: (e) => this.dispatch({ kind: "edit-table", edit: e }),
      }
      #k = new Set()
      #I = new Set()
      #j = []
      #E = 0
      #M
      #h
      #A = null
      #T = null
      #P = "slide"
      #L = {}
      #F = 1
      #R = null
      #N = new Set()
      #D = null
      #z = null
      #B = null
      #O = null
      #V = null
      #$ = null
      #H = null
      #K = null
      #q = null
      #W = 1
      #U = null
      #G = null
      #_
      #X = "#FFFFFF"
      #Z = "#666666"
      #J
      #Y
      #Q
      #ee
      #et = !1
      #p = !1
      #en = !1
      #er = null
      #ei = 0
      #el = new AbortController()
      #ea
      #eo
      #es = !1
      constructor(e = {}) {
        ;((this.#ea = e.uploadImage),
          (this.#eo = e.resolveImageHydrationAssets),
          (this.#_ = e.onFirstSlideRendered),
          (this.#ee = e.onDrawingPreferencesChange),
          (this.#Y = e.onImportError),
          (this.#Q = e.onImportReady))
        let t = e.bootstrapSource
            ? null
            : (e.presentationProto ?? e.presentation?.toProto() ?? o.Presentation.create().toProto()),
          n = (e.workerFactory ?? q.I)()
        ;((this.#h = new z.OK(
          n,
          (e) => this.#ed(e),
          (e) => {
            let t = Error(e)
            if (!this.#es && this.#Y) return void this.#Y(t)
            throw t
          },
          this.diagnostics,
          e.onWorkerFailure,
          null == e.onWorkerStarted ? void 0 : () => e.onWorkerStarted?.(this),
        )),
          this.#g.debug("bootstrap", {
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
        }
        if (e.bootstrapSource) {
          let t = e.bootstrapSource
          this.#h.bootstrap({ ...r, bootstrapSource: t }, "source-bytes" === t.kind ? [t.bytes] : void 0)
        } else t && this.#h.bootstrap({ ...r, presentationProto: t })
        this.#J = (0, _.ensurePopcornPresentationRenderDepsLoaded)()
          .then(() => {
            let e = (0, $.getPopcornCarlitoFontFaceSourcesFromDocument)()
            ;(this.#g.debug("font-render-deps-ready", {
              fontCount: e.length,
              fonts: e.map((e) => ({
                family: e.family,
                style: e.style,
                weight: e.weight,
                format: e.format,
                src: e.src,
              })),
              fontDebug: (0, $.h2)(),
            }),
              0 !== e.length &&
                (this.#h.dispatch({ kind: "install-font-faces", fonts: e }),
                this.#g.debug("font-install-dispatched", { fontCount: e.length })))
          })
          .catch(() => {})
      }
      subscribe(e) {
        return this.#x.subscribe(e)
      }
      getState() {
        return this.#x.getState()
      }
      getSnapshot() {
        return this.getState()
      }
      async prepareImage(e, t) {
        let n = this.#ei,
          r = this.getSnapshot(),
          i = r.slideIds[r.selectedSlideIdx],
          l = t ? AbortSignal.any([t, this.#el.signal]) : this.#el.signal,
          a = () => {
            l.throwIfAborted()
            let e = this.getSnapshot()
            if (!this.#en || n !== this.#ei || e.slideIds[e.selectedSlideIdx] !== i)
              throw Error("Image upload target is no longer editable.")
          }
        if ((a(), !this.#ea)) return e
        let o = await this.#ea(e, l)
        a()
        let { bytes: s, ...d } = e
        return { ...d, uri: o }
      }
      dispatch(e, t) {
        ;(this.#ec(), this.#h.dispatch(t ? { ...e, command: t } : e))
      }
      openTableContextMenu(e) {
        this.#h.dispatch({ kind: "open-table-context-menu", point: e })
      }
      subscribeEditEvents(e) {
        return this.#b.subscribe(e)
      }
      subscribeCommentSubmissions(e) {
        return this.#y.subscribe(e)
      }
      async retryCommentSubmission(e) {
        if (this.#p || "presentation" !== e.artifactKind || !e.body.trim()) return !1
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
      attachViewport(e) {
        if (
          "u" < typeof window ||
          "u" < typeof Worker ||
          "u" < typeof HTMLCanvasElement ||
          "u" < typeof OffscreenCanvas
        )
          throw Error("Popcorn presentation viewport requires Worker and OffscreenCanvas support.")
        let t = null,
          n = (n) => {
            n && (t = n)
            let r = W(e.host, t)
            return { width: Math.max(1, r.width), height: Math.max(1, r.height), dpr: window.devicePixelRatio || 1 }
          },
          r = () => {
            ;((this.#U = null), this.#eu())
          },
          i = (e) => {
            ;((this.#K = n(e)),
              null != this.#U && window.cancelAnimationFrame(this.#U),
              (this.#U = window.requestAnimationFrame(r)))
          },
          l = this.#z !== e.canvas
        if ((l && (this.#z = e.canvas), (this.#B = e.canvas.getContext("2d")), !this.#B))
          throw Error("Presentation viewport canvas 2d context is unavailable.")
        let a = !!(e.overlayCanvas && this.#O !== e.overlayCanvas)
        a && e.overlayCanvas && ((this.#O = e.overlayCanvas), (this.#V = e.overlayCanvas.getContext("2d")))
        let o = n()
        ;((this.#H ??= { ...o }),
          (this.#K ??= { ...o }),
          (this.#m = null),
          ee(e.canvas, this.#H, { resizeIntrinsicBitmap: !0 }),
          e.overlayCanvas && ee(e.overlayCanvas, this.#H, { resizeIntrinsicBitmap: !0 }),
          this.#J.then(() => {
            if (this.#p) return
            let t = n()
            if (((this.#K = { ...t }), null == this.#H && this.#ep(t), l)) {
              if (this.#z !== e.canvas) return
              this.#h.dispatch({ kind: "attach-canvas", width: t.width, height: t.height, dpr: t.dpr })
            } else this.#z === e.canvas && i()
            if (e.overlayCanvas)
              if (a) {
                if (this.#O !== e.overlayCanvas) return
                let n = new OffscreenCanvas(
                  Math.max(1, Math.round(t.width * t.dpr)),
                  Math.max(1, Math.round(t.height * t.dpr)),
                )
                this.#h.dispatch(
                  { kind: "attach-overlay-canvas", canvas: n, width: t.width, height: t.height, dpr: t.dpr },
                  [n],
                )
              } else this.#O === e.overlayCanvas && i()
          }))
        let s =
          "u" > typeof ResizeObserver
            ? new ResizeObserver((t) => {
                let n = t[0]
                i(n ? U(e.host, n) : null)
              })
            : null
        s?.observe(e.host)
        let d = () => {
          i()
        }
        ;(window.addEventListener("resize", d), this.#$?.())
        let c = J(e.host, (e) => {
          this.#h.dispatch({ kind: "set-overlay-animation-state", ...e })
        })
        return (
          (this.#$ = c),
          () => {
            ;(c(),
              this.#$ === c && (this.#$ = null),
              null != this.#U && (window.cancelAnimationFrame(this.#U), (this.#U = null)),
              s?.disconnect(),
              window.removeEventListener("resize", d))
          }
        )
      }
      #ep(e) {
        let t = !Q(this.#H, e)
        ;((this.#H = { ...e }),
          this.#z && (t && (this.#m = null), ee(this.#z, e, { resizeIntrinsicBitmap: t })),
          this.#O && ee(this.#O, e, { resizeIntrinsicBitmap: t }),
          this.#eh())
      }
      requestShapeClipboard() {
        let e = this.getSnapshot(),
          t = e.slideIds[e.selectedSlideIdx]
        return t && 0 !== e.selectedElementIds.length
          ? this.#h
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
        return this.#J.then(() =>
          this.#h
            .request({ kind: "shape-clipboard-png", serialized: e, slideId: t, presentationVersion: n })
            .then((e) => {
              if ("shape-clipboard-png" !== e.kind) throw Error(`Unexpected clipboard image response: ${e.kind}`)
              return e.result
            }),
        )
      }
      async exportFile(e) {
        let t = this.#el.signal
        ;(await (0, V.o)(this.#J, t), await this.textClear())
        let n = await this.#h.request({ kind: "export-file", format: e.format })
        if (
          ("export-file-images" === n.kind &&
            this.#eo &&
            (await this.hydrateImageAssets(await (0, V.o)(this.#eo(n.requests), t), n.generation),
            (n = await this.#h.request({ kind: "export-file", format: e.format }))),
          "export-file-images" === n.kind)
        )
          throw Error("Some images are still loading. Try downloading again.")
        if ("export-file-error" === n.kind) throw Error(n.message)
        if ("export-file" !== n.kind) throw Error(`Unexpected file export response: ${n.kind}`)
        return new Uint8Array(n.bytes)
      }
      requestExport(e) {
        return this.#h.request({ kind: "export", format: e?.format ?? "proto" }).then((e) => {
          if ("export" !== e.kind) throw Error(`Unexpected export response: ${e.kind}`)
          return e.result
        })
      }
      requestCrdtSnapshot() {
        return this.#h.request({ kind: "crdt-snapshot" }).then((e) => {
          if ("crdt-snapshot" !== e.kind) throw Error(`Unexpected CRDT snapshot response: ${e.kind}`)
          return new Uint8Array(e.result)
        })
      }
      async flushCrdtUpdates() {
        return (
          await this.#er?.catch(() => void 0),
          this.#h.request({ kind: "flush-crdt-updates" }).then((e) => {
            if ("flush-crdt-updates" !== e.kind) throw Error(`Unexpected CRDT flush response: ${e.kind}`)
          })
        )
      }
      loadInitialCrdtState(e) {
        return (
          this.#ec(),
          (this.#D = null),
          this.#h.request({ kind: "load-initial-crdt-state", update: e }).then((e) => {
            if ("load-initial-crdt-state" !== e.kind) throw Error(`Unexpected initial CRDT load response: ${e.kind}`)
          })
        )
      }
      applyCrdtUpdate(e) {
        return (
          this.#ec(),
          (this.#D = null),
          this.#h.request({ kind: "apply-crdt-update", update: e }).then((e) => {
            if ("apply-crdt-update" !== e.kind) throw Error(`Unexpected CRDT apply response: ${e.kind}`)
          })
        )
      }
      hydrateImageAssets(e, t = this.#E) {
        return this.#h.request({ kind: "hydrate-image-assets", assets: e, generation: t }).then((e) => {
          if ("hydrate-image-assets" !== e.kind) throw Error(`Unexpected image hydration response: ${e.kind}`)
        })
      }
      setImageHydrationPrioritySlideIds(e) {
        this.#p || this.#h.dispatch({ kind: "set-image-hydration-priority-slides", slideIds: e })
      }
      subscribeCrdtUpdates(e) {
        return (
          this.#k.add(e),
          () => {
            this.#k.delete(e)
          }
        )
      }
      subscribeImageHydrationRequests(e) {
        return (
          this.#I.add(e),
          this.#j.length > 0 && e(this.#j, this.#E),
          () => {
            this.#I.delete(e)
          }
        )
      }
      replaceFromProto(e) {
        return (
          this.#ec(),
          (this.#D = null),
          this.#h.request({ kind: "replace-from-proto", presentationProto: e }).then((e) => {
            if ("replace-from-proto" !== e.kind) throw Error(`Unexpected replace response: ${e.kind}`)
          })
        )
      }
      dispose() {
        this.#p ||
          ((this.#p = !0),
          this.#el.abort(),
          this.#$?.(),
          (this.#$ = null),
          (this.#z = null),
          (this.#B = null),
          (this.#O = null),
          (this.#V = null),
          this.#G?.bitmap.close(),
          this.#G?.overlayBitmap?.close(),
          (this.#G = null),
          null != this.#U && (window.cancelAnimationFrame(this.#U), (this.#U = null)),
          this.#b.dispose(),
          this.#N.clear(),
          this.#y.dispose(),
          this.#C.clear(),
          this.#v.clear(),
          (this.#w = null),
          (this.#S = null),
          this.#k.clear(),
          this.#I.clear(),
          (this.#j = []),
          (this.#m = null),
          this.#f.dispose(),
          this.#h.dispose(),
          this.diagnostics?.close())
      }
      #eu() {
        let e = this.#K
        if (!e) return
        if (Q(this.#H, e) && null == this.#q) return void this.#ep(e)
        if (null != this.#q) return
        let t = this.#W++
        ;(this.#ec(),
          (this.#q = { id: t, commitRequested: !1 }),
          this.#h.dispatch({
            kind: "resize-viewport",
            width: e.width,
            height: e.height,
            dpr: e.dpr,
            resizeId: t,
            ...(this.#A
              ? { camera: { ...this.#A }, cameraMode: this.getSnapshot().gridLayout ? "grid" : "slide" }
              : {}),
          }))
      }
      #eh() {
        let e = this.#z,
          t = this.#B,
          n = this.#H
        if (!e || !t || !n) return
        let r = this.#G
        if (!r || !Q(r.metrics, n)) return
        let i = this.#m
        ;((this.#m = null),
          t.setTransform(1, 0, 0, 1, 0, 0),
          t.clearRect(0, 0, e.width, e.height),
          t.drawImage(r.bitmap, 0, 0),
          this.#em(),
          (this.#m = i),
          this.notifyFirstSlideRendered())
      }
      #em() {
        let e = this.#O,
          t = this.#V
        if (!e || !t) return
        ;(t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, e.width, e.height))
        let n = this.#G
        n?.overlayBitmap && Q(n.metrics, this.#H) && t.drawImage(n.overlayBitmap, 0, 0)
      }
      #ef(e) {
        let t = this.#G
        t && t.frameId === e.frameId
          ? (t.overlayBitmap?.close(), (t.overlayBitmap = e.bitmap), this.#em())
          : e.bitmap.close()
      }
      notifyFirstSlideRendered() {
        ;(null == this.#m && ((this.#m = {}), this.#f.emit()), this.#et || ((this.#et = !0), this.#_?.(this)))
      }
      #eg(e) {
        if ((e.viewTransition && e.viewTransition.id !== this.#R?.id) || (this.#G && e.frameId <= this.#G.frameId)) {
          ;(e.bitmap.close(), e.overlayBitmap?.close())
          return
        }
        let t = { width: e.width, height: e.height, dpr: e.dpr },
          n = null != e.resizeId,
          r = n && this.#q?.id === e.resizeId,
          i = !this.#K || Q(this.#K, t)
        if (!(!n || r) || !i) {
          ;(e.bitmap.close(),
            e.overlayBitmap?.close(),
            n && null != e.resizeId && this.#h.dispatch({ kind: "discard-viewport-resize", resizeId: e.resizeId }),
            r && ((this.#q = null), this.#eu()))
          return
        }
        if (
          (this.#G?.bitmap.close(),
          this.#G?.overlayBitmap?.close(),
          (this.#G = { frameId: e.frameId, bitmap: e.bitmap, overlayBitmap: e.overlayBitmap, metrics: t }),
          this.#ep(t),
          !e.viewTransition && this.#R && (this.#R.camera = null),
          e.camera &&
            ((this.#T = { ...e.camera }),
            (this.#P = this.getSnapshot().gridLayout ? "grid" : "slide"),
            e.viewTransition &&
              this.#R &&
              ((this.#R.camera = { ...e.camera }), (this.#A = { ...e.camera }), (this.#D = { ...e.camera }))),
          e.camera)
        )
          for (let e of this.#N) e()
        e.viewTransition?.complete &&
          e.viewTransition.id === this.#R?.id &&
          ((this.#L = this.#R.targetViewportInsets), (this.#R = null))
        let l = this.#q
        r &&
          l &&
          !l.commitRequested &&
          ((l.commitRequested = !0), this.#h.dispatch({ kind: "commit-viewport-resize", resizeId: l.id }))
      }
      openFind() {
        this.#h.dispatch({ kind: "open-find" })
      }
      closeFind() {
        this.#h.dispatch({ kind: "close-find" })
      }
      setFindMentionLabels(e) {
        e !== this.#M && ((this.#M = e), this.#h.dispatch({ kind: "set-find-mention-labels", labels: e }))
      }
      setFindQuery(e, t) {
        this.#h.dispatch({ kind: "set-find-query", query: e, includeComments: t })
      }
      setFindCommentsEnabled(e) {
        this.#h.dispatch({ kind: "set-find-comments-enabled", enabled: e })
      }
      goToNextFindResult() {
        this.#h.dispatch({ kind: "go-to-next-find-result" })
      }
      goToPreviousFindResult() {
        this.#h.dispatch({ kind: "go-to-previous-find-result" })
      }
      setSelectedSlideIdx(e, t) {
        ;(this.#ec(), this.#h.dispatch({ kind: "set-selected-slide-idx", index: e, mode: t }))
      }
      setViewMode(e, t) {
        if (e === (this.#R?.mode ?? (this.getSnapshot().gridLayout ? "grid" : "slide"))) return
        let n = this.#F++,
          r = this.getPresentedViewportCamera() ?? this.#A,
          i = this.#T ? this.#P : this.getSnapshot().gridLayout ? "grid" : "slide"
        ;((this.#R = r ? { id: n, mode: e, camera: { ...r }, targetViewportInsets: { ...(t ?? this.#L) } } : null),
          t && ("grid" === e || !this.#R) && (this.#L = { ...t }),
          r && ((this.#A = { ...r }), (this.#D = { ...r })),
          this.#h.dispatch({
            kind: "set-view-mode",
            mode: e,
            ...(r ? { transitionId: n } : {}),
            ...(r ? { camera: { ...r }, cameraMode: i } : {}),
            ...(t ? { viewportInsets: { ...t } } : {}),
          }))
      }
      async beginGridInteraction(e) {
        this.#ec()
        let t = await this.#h.request({ kind: "begin-grid-interaction", ...e })
        if ("begin-grid-interaction" !== t.kind) throw Error(`Unexpected grid interaction response: ${t.kind}`)
        return t.result
      }
      setZoom(e) {
        ;(this.#ec(), this.#h.dispatch({ kind: "set-zoom", zoom: e }))
      }
      setWorkingImages(e) {
        this.#h.dispatch({ kind: "set-working-images", images: e })
      }
      setChartInsertionPreview(e) {
        this.#h.dispatch({ kind: "set-chart-insertion-preview", preview: e })
      }
      setSelectionOverlayOptions(e) {
        this.#h.dispatch({ kind: "set-selection-overlay-options", ...e })
      }
      setEditingEnabled(e) {
        ;(this.#en !== e && this.#ei++, (this.#en = e), this.#h.dispatch({ kind: "set-editing-enabled", isEditing: e }))
      }
      setSmartGuidesEnabled(e) {
        this.#h.dispatch({ kind: "set-smart-guides-enabled", isEnabled: e })
      }
      setStageBackgroundColor(e, t = !1, n = this.#Z) {
        let r = e.trim()
        0 !== r.length &&
          (r !== this.#X || t !== this.getSnapshot().displayColors.darkMode || n !== this.#Z) &&
          ((this.#X = r),
          (this.#Z = n),
          this.#h.dispatch({
            kind: "set-stage-background-color",
            backgroundColor: r,
            darkMode: t,
            secondaryTextColor: n,
          }),
          this.#x.patch({ displayColors: { backgroundColor: r, darkMode: t } }))
      }
      setViewportInsets(e, t, n) {
        let r = this.#R,
          i = null != r && (0, G.Zh)(this.#L, e)
        r && !i && this.#ec()
        let l = i ? void 0 : (t ?? (r ? (this.#A ?? void 0) : void 0))
        ;((this.#L = { ...e }),
          l && ((this.#D = { ...l }), (this.#A = { ...l })),
          this.#h.dispatch({
            kind: "set-viewport-insets",
            viewportInsets: { ...e },
            ...(l ? { camera: { ...l }, cameraMode: this.getSnapshot().gridLayout ? "grid" : "slide" } : {}),
            contentBottomInset: n,
          }))
      }
      setViewportCamera(e) {
        let t = this.#D
        ;((this.#D = null),
          (this.#A = e ? { ...e } : null),
          (e && t && t.x === e.x && t.y === e.y && t.k === e.k) ||
            (this.#ec(),
            e &&
              this.#h.dispatch({
                kind: "set-camera",
                camera: { ...e },
                cameraMode: this.getSnapshot().gridLayout ? "grid" : "slide",
              })))
      }
      getViewportCamera() {
        return this.#A ? { ...this.#A } : null
      }
      getPresentedViewportCamera() {
        return this.#T
      }
      getViewTransitionCamera() {
        return this.#R?.camera ?? null
      }
      #ec() {
        this.#R = null
      }
      subscribeToViewportFrames(e) {
        return (this.#N.add(e), () => this.#N.delete(e))
      }
      setSelectedElementId(e) {
        this.#h.dispatch({ kind: "set-selected-element-id", elementId: e })
      }
      selectAllSlideElements() {
        this.#h.dispatch({ kind: "select-all-slide-elements" })
      }
      addCommentThread(e, t, n) {
        return (
          this.#y.emit({
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
          this.#h.request({ kind: "add-comment-thread", slideId: e, body: t, options: n }).then((e) => {
            if ("add-comment-thread" !== e.kind) throw Error(`Unexpected add comment response: ${e.kind}`)
            return e.threadId
          })
        )
      }
      replyToCommentThread(e, t, n) {
        return (
          this.#y.emit({
            type: "reply",
            artifactKind: "presentation",
            threadId: e,
            body: t,
            author: null == n ? void 0 : { ...n },
          }),
          this.#h.dispatch({ kind: "reply-comment-thread", threadId: e, body: t, author: n }),
          !0
        )
      }
      resolveCommentThread(e, t) {
        return (this.#h.dispatch({ kind: "resolve-comment-thread", threadId: e, author: t }), !0)
      }
      resolveCommentThreadAndWait(e, t) {
        return this.#h.request({ kind: "resolve-comment-thread", threadId: e, author: t }).then((e) => {
          if ("resolve-comment-thread" !== e.kind) throw Error(`Unexpected resolve comment response: ${e.kind}`)
          return e.resolved
        })
      }
      reopenCommentThread(e) {
        return (this.#h.dispatch({ kind: "reopen-comment-thread", threadId: e }), !0)
      }
      deleteCommentThread(e) {
        return (this.#h.dispatch({ kind: "delete-comment-thread", threadId: e }), !0)
      }
      toggleCommentReaction(e, t, n, r) {
        return (
          this.#h.dispatch({ kind: "toggle-comment-reaction", threadId: e, commentId: t, reactionType: n, author: r }),
          !0
        )
      }
      editThreadComment(e, t, n) {
        return (this.#h.dispatch({ kind: "edit-thread-comment", threadId: e, commentId: t, body: n }), !0)
      }
      deleteThreadComment(e, t) {
        return (this.#h.dispatch({ kind: "delete-thread-comment", threadId: e, commentId: t }), !0)
      }
      beginSelectionMarquee(e) {
        return (this.#h.dispatch({ kind: "begin-selection-marquee", ...e }), !0)
      }
      updateSelectionMarquee(e) {
        return (this.#h.dispatch({ kind: "update-selection-marquee", ...e }), !0)
      }
      endSelectionMarquee(e) {
        return (this.#h.dispatch({ kind: "end-selection-marquee", commit: e?.commit }), !0)
      }
      textPointerDown(e, t) {
        return this.#ex({
          kind: "text-edit-activate",
          activation: { kind: "pointer", point: e, shiftKey: t?.shiftKey },
        })
      }
      textPointerMove(e) {
        return (this.#h.dispatch({ kind: "text-pointer-move", point: e }), !0)
      }
      textPointerUp() {
        this.#h.dispatch({ kind: "text-pointer-up" })
      }
      textSelectWordAtPoint(e) {
        return this.#ex({ kind: "text-edit-activate", activation: { kind: "word", point: e } })
      }
      textSelectParagraphAtPoint(e) {
        return this.#ex({ kind: "text-edit-activate", activation: { kind: "paragraph", point: e } })
      }
      textActivateBlockEnd(e) {
        return this.#ex({ kind: "text-edit-activate", activation: { kind: "block-end", blockId: e } })
      }
      textClear() {
        return this.#ex({ kind: "text-edit-clear" })
      }
      async #ex(e) {
        let t = await this.#h.request(e)
        if ("text-edit" !== t.kind) throw Error("Unexpected presentation text-edit response")
        return t.result
      }
      textHandleKeyDown(e) {
        return (this.#h.dispatch({ kind: "text-keydown", event: e }), !0)
      }
      textHandlePaste(e) {
        return (this.#h.dispatch({ kind: "text-paste", clipboard: e }), !0)
      }
      textHandleBeforeInput(e) {
        return (this.#h.dispatch({ kind: "text-before-input", event: e }), !0)
      }
      textHandleInput(e) {
        return (this.#h.dispatch({ kind: "text-input", event: e }), !0)
      }
      textHandleCompositionEnd(e) {
        return (this.#h.dispatch({ kind: "text-composition-end", event: e }), !0)
      }
      setHoveredElementId(e) {
        this.#h.dispatch({ kind: "set-hovered-element-id", elementId: e })
      }
      previewConnectorInsertion(e) {
        this.#h.dispatch({ kind: "preview-connector-insertion", preview: e })
      }
      setLocalAwarenessCursor(e, t) {
        this.#h.dispatch({ kind: "set-local-awareness-cursor", point: e, lastClickAt: t })
      }
      clearLocalAwarenessCursor() {
        this.#h.dispatch({ kind: "clear-local-awareness-cursor" })
      }
      setPresenceCursor(e, t, n) {
        this.#h.dispatch({
          kind: "set-presence-cursor",
          presenceId: e,
          cursor: t,
          presenceKind: n?.kind,
          color: n?.color,
        })
      }
      setPresenceSelection(e, t, n) {
        this.#h.dispatch({
          kind: "set-presence-selection",
          presenceId: e,
          selection: t,
          presenceKind: n?.kind,
          color: n?.color,
        })
      }
      clearPresenceCursor(e, t) {
        this.#h.dispatch({ kind: "clear-presence-cursor", presenceId: e, slideId: t?.slideId })
      }
      clearPresenceSelection(e, t) {
        this.#h.dispatch({ kind: "clear-presence-selection", presenceId: e, slideId: t?.slideId })
      }
      beginElementInteraction(e) {
        return (this.#h.dispatch({ kind: "begin-element-interaction", ...e }), !0)
      }
      updateElementInteraction(e) {
        return (this.#h.dispatch({ kind: "update-element-interaction", ...e }), !0)
      }
      endElementInteraction(e) {
        return (this.#h.dispatch({ kind: "end-element-interaction", ...e }), !0)
      }
      nudgeSelectedElements(e) {
        return (this.dispatch({ kind: "nudge-selected-elements", dx: e.dx, dy: e.dy }), !0)
      }
      clearElementSelection() {
        this.#h.dispatch({ kind: "clear-element-selection" })
      }
      deleteSelectedElement() {
        return (this.dispatch({ kind: "delete-selected-element" }), !0)
      }
      addSlide(e) {
        ;((this.#D = null), this.dispatch({ kind: "add-slide", layoutId: e }))
      }
      async requestSlideTemplates() {
        let e = await this.#h.request({ kind: "slide-templates" })
        if ("slide-templates" !== e.kind) throw Error(`Unexpected slide templates response: ${e.kind}`)
        return e.result
      }
      async requestSlideTemplatePreview(e) {
        await this.#J
        let t = await this.#h.request({ kind: "slide-template-preview", layoutId: e })
        if ("slide-template-preview-error" === t.kind) throw Error(t.message)
        if ("slide-template-preview" !== t.kind) throw Error(`Unexpected slide template preview response: ${t.kind}`)
        if (!t.result) throw Error("Slide template preview is unavailable.")
        return t.result
      }
      duplicateSelectedSlides() {
        ;((this.#D = null), this.dispatch({ kind: "duplicate-selected-slides" }))
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
        ;((this.#D = null), this.dispatch({ kind: "duplicate-selected-slide" }))
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
        ;((this.#D = null), this.dispatch({ kind: "undo" }))
      }
      redo() {
        ;((this.#D = null), this.dispatch({ kind: "redo" }))
      }
      exportPresentationProto() {
        return this.requestExport({ format: "proto" }).then((e) => e.presentationProto)
      }
      insertTemplate(e) {
        if (null != this.#er) return Promise.reject(Error("Another template insertion is already in progress"))
        let t = this.#eb(e).finally(() => {
          this.#er === t && (this.#er = null)
        })
        return ((this.#er = t), t)
      }
      async #eb({ presentationProto: e, signal: t }) {
        if ((t?.throwIfAborted(), this.#p || !this.#en)) throw Error("Template target is not editable")
        ;(this.#ec(), (this.#D = null))
        let n = await this.#h.request({ kind: "insert-template", presentationProto: e })
        if ("insert-template" !== n.kind) throw Error(`Unexpected template insertion response: ${n.kind}`)
        if (!n.result.success) throw Error(n.result.message)
        return { imageIds: n.result.imageIds }
      }
      async startImageCrop(e, t) {
        await this.#J
        let n = await this.#h.request({ kind: "start-image-crop", slideId: e, elementId: t })
        return "start-image-crop" === n.kind && n.result
      }
      interactWithImageCrop(e) {
        this.#h.dispatch({ kind: "image-crop-interaction", interaction: e })
      }
      async requestImageFraming(e, t) {
        await this.#J
        let n = await this.#h.request({ kind: "image-framing", slideId: e, elementId: t })
        if ("image-framing" !== n.kind) throw Error(`Unexpected image framing response: ${n.kind}`)
        return n.result
      }
      async requestImageThumbnail(e, t) {
        await this.#J
        let n = await this.#h.request({ kind: "image-thumbnail", slideId: e, elementId: t })
        if ("image-thumbnail" !== n.kind) throw Error(`Unexpected image thumbnail response: ${n.kind}`)
        return n.result
      }
      requestSlideThumbnail(e, t) {
        let n = "string" == typeof e ? e : this.getSnapshot().slideIds[e]
        return n
          ? this.#J.then(() =>
              this.#h
                .request({ kind: "slide-thumbnail", slideId: n, cssMaxPx: t?.cssMaxPx, pixelRatio: t?.pixelRatio })
                .then((e) => {
                  if ("slide-thumbnail" !== e.kind) throw Error(`Unexpected thumbnail response: ${e.kind}`)
                  return e.result
                }),
            )
          : Promise.resolve("")
      }
      requestImagePreview(e) {
        return this.#J.then(() =>
          this.#h.request({ kind: "image-preview", elementId: e }).then((e) => {
            if ("image-preview" !== e.kind) throw Error(`Unexpected image preview response: ${e.kind}`)
            return e.result
          }),
        )
      }
      #ed(e) {
        switch (e.kind) {
          case "chart-editing":
            for (let t of ((this.#w = e.state), this.#v)) t()
            return
          case "table-editing":
            for (let t of ((this.#S = e.state), this.#C)) t()
            return
          case "drawing-preferences":
            this.#ee?.(e.preferences)
            return
          case "edit":
            this.#b.emit(e.event)
            return
          case "bootstrap-status":
            "ready" !== e.status || this.#es || ((this.#es = !0), this.#Q?.())
            return
          case "crdt-update": {
            let t = new Uint8Array(e.update)
            for (let e of this.#k) e(t)
            return
          }
          case "image-hydration-requests":
            for (let t of ((this.#j = e.requests), (this.#E = e.generation), this.#I)) t(e.requests, e.generation)
            return
          case "meta":
            ;(this.diagnostics?.update({ documentSchemaVersion: e.documentSchemaVersion ?? null }),
              this.#x.patch(e.state))
            return
          case "find":
          case "navigation":
          case "preview":
          case "text-update":
          case "editor":
          case "comments":
          case "awareness":
          case "inspector":
            this.#x.patch(e.state)
            return
          case "selection":
            return void this.#x.patch(e.state)
          case "active-slide":
          case "viewport":
            if (e.viewTransition && e.viewTransition.id !== this.#R?.id) return
            ;(e.viewTransition?.complete && this.#R && (this.#L = this.#R.targetViewportInsets),
              void 0 !== e.state.camera &&
                ((this.#A = e.state.camera ? { ...e.state.camera } : null),
                (this.#D = e.state.camera ? { ...e.state.camera } : null),
                this.#R && (this.#R.camera = e.state.camera ? { ...e.state.camera } : null)),
              void 0 !== e.state.gridLayout &&
                !!e.state.gridLayout != !!this.#x.getState().gridLayout &&
                (this.#G?.bitmap.close(),
                this.#G?.overlayBitmap?.close(),
                (this.#G = null),
                (this.#m = null),
                (this.#T = null)),
              this.#x.patch(e.state))
            return
          case "viewport-resize-ready":
            if (this.#q?.id !== e.resizeId || null == this.#K) return
            ;((this.#q.commitRequested = !0),
              this.#ep(this.#K),
              this.#h.dispatch({ kind: "commit-viewport-resize", resizeId: e.resizeId }))
            return
          case "viewport-frame":
            this.#eg(e)
            return
          case "overlay-frame":
            this.#ef(e)
            return
          case "viewport-frame-presented":
            if (this.#q?.id !== e.resizeId) return
            ;((this.#q = null), this.#ep({ width: e.width, height: e.height, dpr: e.dpr }), this.#eu())
            return
          case "debug-log":
            ;(0, K.V)(e.namespace).debug(e.message, e.details)
            return
          default:
            return e
        }
      }
    }
    var en = n("t3az")
    let er = "popcorn-presentation-inspector"
    var ei = n("AAzm"),
      el = n("ZmRm")
    let ea = (0, d.createContext)(void 0)
    function eo({ capabilities: e, children: t }) {
      return (0, r.jsx)(ea, { value: e, children: t })
    }
    function es(e, t) {
      let n = (0, d.useContext)(ea)
      return (0, x.lD)(e, { ...n, ...t })
    }
    var ed = n("XP7M"),
      ec = n("ZC10")
    function eu({
      controller: e,
      editorCapabilities: t,
      formatPane: n,
      floatingBar: i,
      displayPaints: l = el.ES,
      children: a,
    }) {
      return (0, r.jsx)(ec.P.Provider, {
        value: e,
        children: (0, r.jsx)(eo, {
          capabilities: t,
          children: (0, r.jsx)(g.UL, {
            config: n,
            children: (0, r.jsx)(f.e, { config: i, children: (0, r.jsx)(ed.Z, { value: l, children: a }) }),
          }),
        }),
      })
    }
    var ep = n("CZgV"),
      eh = n("wUqf"),
      em = n("CIn8")
    function ef(e) {
      let t = (0, ei.lO)(e.controller, "comments")
      return (0, r.jsx)(eh.A, {
        ...e,
        threads: t.commentThreads ?? [],
        onReplySubmitted: (t, n) =>
          e.onCommentSubmitted?.((0, ep.I)(t, n, (0, em.jF)(t.target, t.markerPoint), e.canAssignToChatGpt)),
        sidebarLabel: "Presentation comments",
        getThreadSourceLabel: (e) => `${e.slideLabel}: ${e.label}`,
        testIdPrefix: "popcorn-presentation",
      })
    }
    var eg = n("RhB8"),
      ex = n("Z38x"),
      eb = n("xDqa"),
      ey = n("Njx6"),
      ev = n("uc3U")
    function ew({ title: e, sidebarOpen: t, onToggleSidebar: n, gridViewControl: i }) {
      return (0, r.jsx)(eg.hA, {
        title: e,
        trailingContent: (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(eg.b_, {
              expanded: t,
              "aria-label": t ? "Hide slide sidebar" : "Show slide sidebar",
              onClick: n,
              showActiveBackground: !1,
              testId: "popcorn-presentation-sidebar-toggle",
              children: (0, r.jsx)(eE, { className: "size-4" }),
            }),
            i,
          ],
        }),
      })
    }
    function eC({
      icons: e,
      onAddSlide: t,
      slidePickerOpen: n = !1,
      formatControl: i,
      renderControls: l,
      textInsertionActive: a = !1,
      onRequestSlideChanges: o,
      ...s
    }) {
      let d = es(x.mq)
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
            ? (0, r.jsx)(eg.b_, {
                "aria-label": "Add slide",
                "aria-haspopup": "dialog",
                expanded: n,
                onClick: (e) => t(e.currentTarget),
                size: "default",
                children: e?.add ?? (0, r.jsx)(I.EV, {}),
              })
            : null,
          c && d.insert.includes("text") && s.onInsertText
            ? (0, r.jsx)(eg.b_, {
                "aria-label": "Insert text",
                onClick: s.onInsertText,
                size: "default",
                children: e?.text ?? (0, r.jsx)(ey.Nm, {}),
              })
            : null,
          c && d.insert.includes("image") && s.onInsertImage
            ? (0, r.jsx)(eb.W, { icon: e?.image, onInsert: s.onInsertImage, onGenerate: s.onGenerateImage })
            : null,
          c ? (0, r.jsx)(eI, { onAddSlide: t, ...s, size: "default", triggerIcon: e?.insert }) : null,
        ],
      })
    }
    function eS({ icon: e, label: t, open: n, onToggle: i }) {
      return (0, r.jsx)(eg.b_, {
        expanded: n,
        "aria-label": t ?? (n ? "Hide slide sidebar" : "Show slide sidebar"),
        onClick: i,
        showActiveBackground: !1,
        size: "default",
        testId: "popcorn-presentation-sidebar-toggle",
        children: e ?? (0, r.jsx)(eE, { className: "size-4 text-token-text-secondary" }),
      })
    }
    function ek({
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
      let u = es(x.mq)
      if (0 === u.header.length) return null
      let p = u.header.includes("insert") && u.insert.length > 0,
        h = u.header.includes("format") && u.inspector.length > 0 && !!t,
        m = u.header.includes("annotation") && !!e
      return (0, r.jsxs)(eg.nf, {
        ariaLabel: "Presentation tools",
        trailingContent: c,
        children: [
          p
            ? (0, r.jsx)(eI, {
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
          m ? (0, r.jsxs)(r.Fragment, { children: [p || h ? (0, r.jsx)(eg.Mw, {}) : null, e] }) : null,
        ],
      })
    }
    function eI({
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
      let c = es(x.mq)
      if (0 === c.insert.length) return null
      let u = [
        { id: "text", label: "Text", icon: ey.Nm, disabled: !t, onSelect: t },
        {
          id: "image",
          label: "Image",
          icon: ey.xw,
          disabled: !i,
          renderSubmenu: ({ close: e }) => (i ? (0, r.jsx)(eb.H, { onInsert: i, onGenerate: n, onClose: e }) : null),
        },
        {
          id: "chart",
          label: "Chart",
          icon: ey.ox,
          disabled: !l,
          hideSubmenuHeading: !0,
          submenuItems: ev.m.map((e) => ({ id: e.presetId, label: e.label, onSelect: () => l?.(e.presetId) })),
        },
        { id: "table", label: "Table", icon: ey.gx, disabled: !a, onSelectAfterClose: a },
        {
          id: "rect",
          label: "Shapes",
          icon: ey.N4,
          disabled: !o,
          renderSubmenu: ({ close: e }) =>
            (0, r.jsx)(ex.A0, {
              onSelect: (t, n) => {
                ;(n ? o?.(t, n) : o?.(t), e())
              },
            }),
        },
      ]
      return (0, r.jsx)(ey.cU, {
        ariaLabel: "Insert",
        primaryItems: u.filter((e) => c.insert.some((t) => t === e.id)),
        secondaryLabel: "New slide",
        secondaryItems: c.insert.includes("slide")
          ? [
              { id: "template", label: "From template", icon: ey.Ok, onSelect: e },
              { id: "ask-chat", label: "Ask for change", icon: ey.zc, disabled: !0 },
            ]
          : [],
        testId: "popcorn-presentation-insert-button",
        size: s,
        triggerIcon: d,
      })
    }
    function ej({ active: e, disabled: t, onToggle: n, size: i = "compact" }) {
      return (0, r.jsx)(eg.b_, {
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
    function eE({ className: e, ...t }) {
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
    function eM({ notesHeight: e, minHeight: t = 80, setNotesHeight: n }) {
      let i = (0, d.useRef)(null),
        l = (0, d.useRef)(e),
        a = (0, d.useRef)(0),
        o = (e) => {
          if (i.current === e.pointerId) {
            if (e.currentTarget.hasPointerCapture?.(e.pointerId))
              try {
                e.currentTarget.releasePointerCapture(e.pointerId)
              } catch {}
            i.current = null
          }
        }
      return (0, r.jsx)("div", {
        onPointerDown: (t) => {
          ;((i.current = t.pointerId), (l.current = e), (a.current = t.clientY))
          try {
            t.currentTarget.setPointerCapture(t.pointerId)
          } catch {}
        },
        onPointerMove: (e) => {
          if (i.current !== e.pointerId) return
          let r = e.clientY - a.current
          if (0 === l.current) {
            ;-r >= 20 && n(Math.max(t, 20))
            return
          }
          let o = Math.max(0, l.current - r)
          o < 40 ? n(0) : n(Math.max(t, o))
        },
        onPointerUp: o,
        onPointerCancel: o,
        className: "mx-auto h-2 w-9 cursor-row-resize select-none",
        "data-testid": "popcorn-presentation-notes-resize",
        children: (0, r.jsx)("div", { className: "h-[3px] w-full rounded bg-gray-300" }),
      })
    }
    var eA = n("UJKK")
    function eT({ capabilities: e, config: t, text: n, fill: r, format: i, delete: l }) {
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
    var eP = n("uLjU"),
      eL = n("d5Xm"),
      eF = n("AeVR")
    function eR({
      threads: e,
      slideRect: t,
      isEditing: n,
      renderCommentThread: i,
      annotationMarkerPositions: l = [],
      collisionBoundaryElement: a = null,
      portalContainerElement: o = null,
      commentsSidebarOpen: s = !1,
      selectedCommentThreadId: c,
      hoveredCommentThreadId: u,
      onSelectCommentThread: p,
      onHoverCommentThread: h,
      onClearCommentThread: m,
      ...f
    }) {
      let [g, x] = (0, d.useState)(null)
      ;(0, d.useEffect)(() => {
        !g || e.some((e) => e.threadId === g && "resolved" !== e.status) || x(null)
      }, [g, e])
      let b = (0, d.useMemo)(() => {
        if (!t) return []
        let r = new Map()
        return e
          .filter((e) => "resolved" !== e.status)
          .map((e) => {
            if (!n && "slide" !== e.target.kind && null != e.target.frame) {
              let n = e.target.frame,
                i = (0, eL.Ky)({
                  left: t.left + n.left * t.scale,
                  top: t.top + n.top * t.scale,
                  width: n.width * t.scale,
                  height: n.height * t.scale,
                }),
                l = r.get(e.target.elementId) ?? 0
              return (r.set(e.target.elementId, l + 1), { thread: e, left: i.left, top: i.top + 16 * l })
            }
            return { thread: e, left: t.left + e.markerPoint.x * t.scale, top: t.top + e.markerPoint.y * t.scale }
          })
      }, [n, t, e])
      if (null != i) {
        let e = [...l]
        return (0, r.jsx)(r.Fragment, {
          children: b.map(({ thread: t, left: n, top: l }) => {
            let o = (0, eL.wj)({ left: n, top: l }, e)
            return (
              e.push(o),
              (0, r.jsx)(
                d.Fragment,
                { children: i({ threadId: t.threadId, markerPosition: o, collisionBoundaryElement: a }) },
                t.threadId,
              )
            )
          }),
        })
      }
      let y = (e) => {
        ;(x(e), null == e ? m?.() : p?.(e))
      }
      return (0, r.jsx)(r.Fragment, {
        children: b.map(({ thread: e, left: t, top: r }) =>
          (0, d.createElement)(eF.Q, {
            ...f,
            key: e.threadId,
            thread: e,
            label: e.label,
            sourceLabel: `${e.slideLabel}: ${e.label}`,
            isEditing: n,
            position: { left: t, top: r },
            variant: "bubble",
            markerTestId: `popcorn-presentation-thread-trigger-${e.threadId}`,
            isSelected: (void 0 === c ? g : c) === e.threadId,
            hoveredThreadId: u,
            threadVisibleInSidebar: s,
            collisionBoundaryElement: a,
            portalContainerElement: o,
            onSelect: y,
            onHover: h,
          }),
        ),
      })
    }
    var eN = n("HWo3"),
      eD = n("ThSU"),
      ez = n("rRuS"),
      eB = n("O5Ke"),
      eO = n("KtWZ"),
      eV = n("yCnS"),
      e$ = n("yN3L"),
      eH = n("OvcA"),
      eK = n("Iyql"),
      eq = n("G9tj"),
      eW = n("mEGi")
    function eU({ ref: e, projectPoint: t, clipBounds: n, testId: i }) {
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
        a ? (0, r.jsx)(ez.i, { strokes: [a], projectPoint: t, clipBounds: n, testId: i }) : null
      )
    }
    var eG = n("sn7H"),
      e_ = n("EuN0"),
      eX = n("SH9B"),
      eZ = n("SZbP"),
      eJ = n("zfJ4")
    function eY({ containerRef: e, enabled: t, contextKey: n, onDropImages: i }) {
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
            if (!r || !eQ(r)) return
            ;(e.preventDefault(), e.stopPropagation(), n && (i += 1))
            let l =
              t &&
              (function (e) {
                let t = Array.from(e.files)
                if (t.length > 0) return t.some((e) => null != (0, eJ.g)(e))
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
            if (!n || !eQ(n) || (e.preventDefault(), e.stopPropagation(), (i = 0), o(!1), (n.dropEffect = "none"), !t))
              return
            let s = Array.from(n.files),
              d = (
                s.length > 0
                  ? s
                  : Array.from(n.items)
                      .filter((e) => "file" === e.kind)
                      .map((e) => e.getAsFile())
                      .filter((e) => null != e)
              ).filter((e) => null != (0, eJ.g)(e))
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
                      children: (0, r.jsx)(I.w0, { className: "size-4" }),
                    }),
                  ],
                })
              : (0, r.jsx)("div", {
                  role: "status",
                  className:
                    "rounded-xl border border-token-border-default bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-primary shadow-lg",
                  children: s ? "Adding images…" : "Drop images to add them",
                }),
          })
        : null
    }
    function eQ(e) {
      return (
        Array.from(e.types).includes("Files") ||
        e.files.length > 0 ||
        Array.from(e.items).some((e) => "file" === e.kind)
      )
    }
    var e0 = n("xlRw"),
      e1 = n("b7gv"),
      e2 = n("WAOH")
    let e4 = Math.PI / 15
    class e3 {
      #ey = new Map()
      #ev = null
      #ew = !1
      update(e, t, n, r) {
        ;(this.#eC(t), (this.#ew = n))
        let i = new Set()
        for (let l of e) {
          if (!Number.isFinite(l.point.x) || !Number.isFinite(l.point.y)) continue
          i.add(l.presenceId)
          let e = this.#ey.get(l.presenceId)
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
            this.#ey.set(l.presenceId, e)),
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
        for (let e of this.#ey.keys()) i.has(e) || this.#ey.delete(e)
      }
      sample(e) {
        this.#eC(e)
        let t = !1,
          n = []
        for (let r of this.#ey.values()) {
          let i = null != r.clickedAt,
            l = !this.#ew && null != r.thinkingSince
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
        ;(this.#ey.clear(), (this.#ev = null))
      }
      #eC(e) {
        let t = Math.max(0, (e - (this.#ev ?? e)) / 1e3)
        for (let n of ((this.#ev = e), this.#ey.values())) {
          if ((null != n.clickedAt && e - n.clickedAt >= 280 && (n.clickedAt = null), this.#ew || 0 === t)) continue
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
            i = Math.max(-e4, Math.min(e4, n.velocity.x / 2500)),
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
    var e5 = n("bxEp")
    function e6({
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
        [x] = (0, d.useState)(() => new e3())
      return (
        (0, B.o)(() => (x.clear(), () => x.clear()), [x, s]),
        (0, B.o)(() => {
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
                    (0, e5.g)(d, r ? { ...e, label: void 0 } : e, {
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
    var e8 = n("Kq4t"),
      e9 = n("K6KE"),
      e7 = n("Gy4b")
    function te({ snapshot: e, onEdit: t, children: n }) {
      let { selection: i, tableId: l } = e,
        a = i?.range ?? { row: 0, column: 0, rowCount: 1, columnCount: 1 },
        o = a.rowCount,
        s = a.columnCount,
        d = { row: 0, column: 0, rowCount: e.rowCount, columnCount: e.columnCount },
        c = o > 1 ? a : d,
        u = s > 1 ? a : d,
        p = (e, n, i = !1) =>
          (0, r.jsx)(e7.Item, {
            disabled: i,
            onSelect: () => t(n),
            className:
              "flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm text-token-text-primary outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-40 data-[highlighted]:bg-token-bg-secondary",
            children: e,
          })
      return (0, r.jsxs)(e7.Root, {
        children: [
          (0, r.jsx)(e7.Trigger, { asChild: !0, children: n }),
          (0, r.jsx)(e7.Portal, {
            children: (0, r.jsxs)(e7.Content, {
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
                (0, r.jsx)(tt, {}),
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
                (0, r.jsx)(tt, {}),
                p("Distribute rows evenly", { type: "distribute-rows", tableId: l, range: c }, c.rowCount < 2),
                p("Distribute columns evenly", { type: "distribute-columns", tableId: l, range: u }, u.columnCount < 2),
                (0, r.jsx)(tt, {}),
                p("Merge cells", { type: "merge-cells", tableId: l, range: a }, !e.canMerge),
                p("Unmerge cells", { type: "unmerge-cells", tableId: l, range: a }, !e.canUnmerge),
                p("Clear cell contents", { type: "clear-cells", tableId: l, range: a }, !i),
              ],
            }),
          }),
        ],
      })
    }
    function tt() {
      return (0, r.jsx)(e7.Separator, { className: "my-1 h-px bg-token-border-light" })
    }
    function tn({ snapshot: e, source: t, begin: n }) {
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
                        "aria-label": `Reorder ${o} ${ti(o, c)}`,
                        "aria-pressed": f,
                        title: `Drag to move ${o}. Alt + arrow keys to reorder.`,
                        className:
                          "group/table-grip pointer-events-auto absolute z-[4] flex size-6 items-center justify-center rounded-md border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-current",
                        style: { ...x, color: e8.ST, cursor: g ? "grabbing" : "grab" },
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
                          style: { background: e8.ST, boxShadow: "0 0 0 1px rgba(255,255,255,.65)" },
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
                              "aria-label": `Insert ${o} after ${ti(o, n - 1)}`,
                              title: `Insert ${o} after ${ti(o, n - 1)}`,
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
                                style: { background: e8.ST },
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
                    ? (0, r.jsx)(tr, {
                        axis: o,
                        offset: (u[s.insertionIndex] / ("column" === o ? a.width : a.height)) * 100,
                        testId: "popcorn-table-reorder-guide",
                      })
                    : null,
                  c?.axis === o
                    ? (0, r.jsx)(tr, {
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
                  color: e8.ST,
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
    function tr({ axis: e, offset: t, testId: n }) {
      return (0, r.jsx)("div", {
        "aria-hidden": !0,
        "data-testid": n,
        className: "pointer-events-none absolute z-[3] rounded-full",
        style: {
          background: e8.ST,
          ...("column" === e
            ? { left: `calc(${t}% - 1px)`, top: 0, width: 2, height: "100%" }
            : { top: `calc(${t}% - 1px)`, left: 0, height: 2, width: "100%" }),
        },
      })
    }
    function ti(e, t) {
      if ("row" === e) return String(t + 1)
      let n = ""
      for (let e = t + 1; e > 0; e = Math.floor((e - 1) / 26)) n = String.fromCharCode(65 + ((e - 1) % 26)) + n
      return n
    }
    let tl = [
        { id: "top-left", cursor: "nw", x: 0, y: 0 },
        { id: "top-right", cursor: "ne", x: 1, y: 0 },
        { id: "bottom-left", cursor: "sw", x: 0, y: 1 },
        { id: "bottom-right", cursor: "se", x: 1, y: 1 },
      ],
      ta = (0, eN.h6)(1)
    function to({ source: e, camera: t, cameraSource: n, onEditText: i, textEditing: l = !1, snapToPixels: a = !1 }) {
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
      ;(0, B.o)(() => {
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
              (r = (n = e.ownerDocument.defaultView).getComputedStyle(e)),
              (i = Math.max(1, void 0 ?? (Number.parseFloat(r.width) || e.clientWidth || t.width))),
              (l = Math.max(1, void 0 ?? (Number.parseFloat(r.height) || e.clientHeight || t.height))),
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
        let r = (0, e8.zY)(e, t)
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
      ;((0, B.o)(() => {
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
          let r = td(o.frame, t, a ? y : null)
          if (
            (tc(e, r.viewportFrame),
            (e.style.transformOrigin = r.pixels
              ? `${r.center.x - r.viewportFrame.left}px ${r.center.y - r.viewportFrame.top}px`
              : "center"),
            o.activeCell)
          ) {
            let e = r.relativeBounds(o.activeCell)
            ;(tc(p.current, e), tc(m.current, e))
          }
          o.selectionBounds &&
            tc(h.current, r.relativeBounds(o.selectionBounds, r.pixels ? (r.selectionWidth * r.pixels.dpr) / 2 : 0))
        }
        return (e(), n.subscribe(e))
      }, [n, o, a, y]),
        (0, d.useEffect)(() => {
          let t = () => {
            let t = g.current
            t && ((g.current = null), e.interact({ type: "pointer-cancel", tableId: t.tableId }), tp(t))
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
      let { frame: j, selection: E } = o,
        {
          pixels: M,
          center: A,
          borderWidth: T,
          selectionWidth: P,
          visibleHandleSize: L,
          viewportFrame: F,
          relativeBounds: R,
        } = td(j, s, a ? y : null),
        N = th(o.rowHeights),
        D = th(o.columnWidths),
        z = o.activeCell,
        O = o.selectionBounds,
        V = z ? `popcorn-table-cell-${z.cellId}` : void 0,
        $ = E ? "default" : "move"
      ;(o.resizing && ($ = "column" === o.resizing.axis ? "col-resize" : "row-resize"),
        o.reordering && ($ = o.reordering.valid ? "grabbing" : "not-allowed"))
      let H = (e) => {
          let t = n?.getCamera() ?? s,
            r = c.current,
            i = r?.getBoundingClientRect(),
            l = i?.width && r?.clientWidth ? r.clientWidth / i.width : 1,
            a = i?.height && r?.clientHeight ? r.clientHeight / i.height : 1
          return { x: ((e.clientX - (i?.left ?? 0)) * l - t.x) / t.k, y: ((e.clientY - (i?.top ?? 0)) * a - t.y) / t.k }
        },
        K = (t, n) => {
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
            e.interact({ type: "pointer-down", tableId: o.tableId, target: n, point: H(t), shiftKey: t.shiftKey })
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
                : { type: "pointer-up", tableId: r.tableId, point: H(t), shiftKey: t.shiftKey },
            ),
            tp(r))
        },
        W = (t) => {
          let n = g.current
          !l &&
            "Shift" === t.key &&
            n &&
            (e.interact({ type: "pointer-move", tableId: n.tableId, point: H(n), shiftKey: t.shiftKey }),
            t.preventDefault(),
            t.stopPropagation())
        }
      return (0, r.jsx)("div", {
        ref: c,
        className: "pointer-events-none absolute inset-0",
        "data-testid": "popcorn-table-editing-overlay",
        children: (0, r.jsx)(te, {
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
              transform: `rotate(${j.rotation}deg)`,
              transformOrigin: M ? `${A.x - F.left}px ${A.y - F.top}px` : "center",
              pointerEvents: l ? "none" : "auto",
              cursor: $,
            },
            onPointerDown: (e) => K(e, { kind: "body" }),
            onPointerMove: (t) => {
              if (!g.current) {
                l || e.interact({ type: "hover", tableId: o.tableId, point: H(t) })
                return
              }
              g.current.pointerId === t.pointerId &&
                ((g.current.clientX = t.clientX),
                (g.current.clientY = t.clientY),
                t.preventDefault(),
                t.stopPropagation(),
                e.interact({ type: "pointer-move", tableId: g.current.tableId, point: H(t), shiftKey: t.shiftKey }))
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
                  e.interact({ type: "context-menu", tableId: o.tableId, point: H(t), requestOpen: !0 })))
            },
            onKeyDown: (t) => {
              if ((W(t), l)) return
              let { key: n } = t
              if ("Escape" === n && g.current) {
                let n = g.current
                ;((g.current = null),
                  e.interact({ type: "pointer-cancel", tableId: n.tableId }),
                  tp(n),
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
                  let n = tm(
                    z
                      ? { x: z.left + z.width / 2, y: z.top + z.height / 2 }
                      : { x: j.left + j.width / 2, y: j.top + j.height / 2 },
                    j,
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
                    if (!E && "Tab" !== n) return
                    e.interact({
                      type: "navigate",
                      tableId: o.tableId,
                      direction: r,
                      extend: "Tab" !== n && t.shiftKey,
                    })
                  } else if ("Enter" === n || "F2" === n) {
                    if (!z) return
                    i(tm({ x: z.left + z.width / 2, y: z.top + z.height / 2 }, j))
                  } else {
                    if (("Backspace" !== n && "Delete" !== n) || !E) return
                    e.edit({ type: "clear-cells", tableId: o.tableId, range: E.range })
                  }
                }
                ;(t.preventDefault(), t.stopPropagation())
              }
            },
            onKeyUp: W,
            children: [
              E || l ? null : (0, r.jsx)(ts, { strokeWidth: P }),
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
              O && !l
                ? (0, r.jsx)("div", {
                    ref: h,
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute",
                    style: {
                      ...R(O, M ? (P * M.dpr) / 2 : 0),
                      background: `color-mix(in srgb, ${e8.ST} 8%, transparent)`,
                    },
                    children: (0, r.jsx)(ts, { strokeWidth: P }),
                  })
                : null,
              z && o.canMerge && !l
                ? (0, r.jsx)("div", {
                    ref: m,
                    "aria-hidden": !0,
                    className: "pointer-events-none absolute",
                    style: { ...R(z), border: `${T}px solid ${e8.ST}` },
                  })
                : null,
              (0, r.jsxs)(r.Fragment, {
                children: [
                  l ? null : (0, r.jsx)(tn, { snapshot: o, source: e, begin: K }),
                  o.columnWidths.map((t, n) =>
                    (0, r.jsx)(
                      tu,
                      {
                        axis: "column",
                        index: n,
                        size: t,
                        style: {
                          left: `calc(${(((D[n] ?? 0) + t) / j.width) * 100}% - 3px)`,
                          top: 0,
                          width: 6,
                          height: "100%",
                        },
                        onPointerDown: (e) => K(e, { kind: "column-resize", index: n }),
                        onResize: (t) => e.edit({ type: "resize-column", tableId: o.tableId, index: n, size: t }),
                      },
                      `column-resize-${n}`,
                    ),
                  ),
                  o.rowHeights.map((t, n) =>
                    (0, r.jsx)(
                      tu,
                      {
                        axis: "row",
                        index: n,
                        size: t,
                        style: {
                          top: `calc(${(((N[n] ?? 0) + t) / j.height) * 100}% - 3px)`,
                          left: 0,
                          height: 6,
                          width: "100%",
                        },
                        onPointerDown: (e) => K(e, { kind: "row-resize", index: n }),
                        onResize: (t) => e.edit({ type: "resize-row", tableId: o.tableId, index: n, size: t }),
                      },
                      `row-resize-${n}`,
                    ),
                  ),
                  l || E
                    ? null
                    : tl.map((e) =>
                        (0, r.jsx)(
                          "button",
                          {
                            type: "button",
                            tabIndex: -1,
                            "aria-label": `Resize table ${e.id.replaceAll("-", " ")}`,
                            className:
                              "pointer-events-auto absolute z-[2] flex items-center justify-center border-0 bg-transparent p-0 outline-none",
                            style: {
                              left: `calc(${100 * e.x}% - ${ta.hitRadius}px)`,
                              top: `calc(${100 * e.y}% - ${ta.hitRadius}px)`,
                              width: 2 * ta.hitRadius,
                              height: 2 * ta.hitRadius,
                              cursor: (0, eN.WB)(e.cursor) ?? void 0,
                              transform: `rotate(${-j.rotation}deg)`,
                            },
                            onPointerDown: (t) => K(t, { kind: "table-resize", corner: e.id }),
                            children: (0, r.jsx)("svg", {
                              "aria-hidden": !0,
                              className: "pointer-events-none",
                              width: L + P,
                              height: L + P,
                              children: (0, r.jsx)("circle", {
                                cx: (L + P) / 2,
                                cy: (L + P) / 2,
                                r: L / 2,
                                fill: e9.a,
                                stroke: e8.ST,
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
                        style: { background: e8.ST },
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
    function ts({ strokeWidth: e }) {
      return (0, r.jsx)("svg", {
        "aria-hidden": !0,
        className: "pointer-events-none absolute inset-0 overflow-visible",
        width: "100%",
        height: "100%",
        children: (0, r.jsx)("rect", { width: "100%", height: "100%", fill: "none", stroke: e8.ST, strokeWidth: e }),
      })
    }
    function td(e, t, n) {
      let r = e.rotation % 90 == 0 ? n : null,
        i = { x: (e.left + e.width / 2) * t.k + t.x, y: (e.top + e.height / 2) * t.k + t.y },
        l = r ? new DOMMatrix().translate(i.x, i.y).rotate(e.rotation).translate(-i.x, -i.y) : null,
        a = r ? Math.max(1, Math.round(r.dpr)) / r.dpr : 1,
        o = r ? Math.max(1, Math.round(1.25 * r.dpr + 1e-6)) / r.dpr : 1.25,
        s = r ? (2 * Math.max(1, Math.round(ta.halfVisibleSize * r.dpr))) / r.dpr : ta.visibleSize,
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
    function tc(e, t) {
      e &&
        ((e.style.left = `${t.left}px`),
        (e.style.top = `${t.top}px`),
        (e.style.width = `${t.width}px`),
        (e.style.height = `${t.height}px`))
    }
    function tu({ axis: e, index: t, size: n, style: i, onPointerDown: l, onResize: a }) {
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
          style: { background: e8.ST },
        }),
      })
    }
    function tp(e) {
      if (e.element.hasPointerCapture?.(e.pointerId))
        try {
          e.element.releasePointerCapture(e.pointerId)
        } catch {}
    }
    function th(e) {
      let t = 0
      return e.map((e) => {
        let n = t
        return ((t += e), n)
      })
    }
    function tm(e, t) {
      let n = (t.rotation * Math.PI) / 180,
        r = t.left + t.width / 2,
        i = t.top + t.height / 2,
        l = e.x - r,
        a = e.y - i
      return { x: r + l * Math.cos(n) - a * Math.sin(n), y: i + l * Math.sin(n) + a * Math.cos(n) }
    }
    var tf = n("glA7"),
      tg = n("Wpz6"),
      tx = n("fUyy"),
      tb = n("Elle")
    function ty(e, t = e.slideRect, n = null) {
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
    var tv = n("nkmv"),
      tw = n("pcvN")
    function tC({ clientX: e, clientY: t }, n, r, i, l) {
      let a = i.selectedSlideFrame
      if (!n || !a) return null
      let o = (0, tv.f)(n, e, t)
      if (i.gridLayout) {
        let e = (0, tw.w4)(i.gridLayout, i.selectedSlideIdx, r)
        return e ? { x: (o.x - e.left) / e.scale, y: (o.y - e.top) / e.scale } : null
      }
      return (0, G.Xt)({
        camera: r,
        viewportX: o.x,
        viewportY: o.y,
        viewport: { width: n.clientWidth, height: n.clientHeight },
        frame: a,
        viewportInsets: l,
      })
    }
    function tS(e, t, n, r, i, l, a = 0) {
      return l
        ? (0, tw.w4)(l, a, n)
        : !r || e <= 0 || t <= 0
          ? null
          : (0, G.c8)({ viewport: { width: e, height: t }, frame: r, camera: n, viewportInsets: i }).slideRect
    }
    var tk = n("qN2B"),
      tI = n("tAei")
    function tj({
      controller: e,
      runtime: t,
      slideId: n,
      isEditing: i,
      isExpanded: l,
      onExpandedChange: a,
      onHeightChange: o,
      visible: s,
      focusViewportInsets: c,
    }) {
      let u = (0, d.useRef)(null),
        p = (0, d.useRef)(null),
        h = (0, d.useMemo)(() => {
          if (!c) return null
          let n = e.getSnapshot(),
            r = e.getViewTransitionCamera()
          if (!n.gridLayout || !r) return null
          let i = t.getLayoutSnapshot(),
            l = (0, tk.Zc)({
              viewport: i,
              gridViewportInsets: i.viewportInsets,
              slideViewportInsets: c,
              gridLayout: n.gridLayout,
              camera: r,
            })
          return l ? { ...l, slideRect: (0, tw.w4)(n.gridLayout, l.selectedSlideIdx, l.toCamera) } : null
        }, [e, t, c])
      return (
        (0, B.o)(() => {
          let n = p.current
          if (!n || (!s && !h)) return
          let r = () => {
            let r = e.getSnapshot(),
              i = t.getLayoutSnapshot(),
              l =
                h?.slideRect ??
                tS(
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
        }, [e, t, n, h, s]),
        (0, B.o)(() => {
          let t = u.current
          if (!t || !h) return
          let n = () => {
            let n = e.getViewTransitionCamera()
            t.style.opacity = String(
              e.getSnapshot().gridLayout
                ? n
                  ? (function ({ fromCamera: e, toCamera: t, currentCamera: n, anchor: r }) {
                      let i
                      if (e.k !== t.k) i = (Math.log(n.k) - Math.log(e.k)) / (Math.log(t.k) - Math.log(e.k))
                      else {
                        let l = (0, tI.UK)(e, r.x, r.y),
                          a = (0, tI.UK)(t, r.x, r.y),
                          o = (0, tI.UK)(n, r.x, r.y),
                          s = a.x - l.x,
                          d = a.y - l.y,
                          c = s * s + d * d
                        i = 0 === c ? 1 : ((o.x - l.x) * s + (o.y - l.y) * d) / c
                      }
                      return Math.max(0, 3 * Math.min(1, Math.max(0, i)) - 2)
                    })({ fromCamera: h.fromCamera, toCamera: h.toCamera, currentCamera: n, anchor: h.anchor })
                  : 0
                : 1,
            )
          }
          n()
          let r = e.subscribeToViewportFrames(n)
          return () => {
            ;(r(), t.style.removeProperty("opacity"))
          }
        }, [e, h]),
        (0, r.jsx)("div", {
          ref: u,
          className: "popcorn-presentation-attached-notes-layer",
          "data-grid-hidden": !s && !h,
          "aria-hidden": !s,
          inert: !s,
          children: (0, r.jsx)("div", {
            ref: p,
            className: "popcorn-presentation-attached-notes-anchor",
            children: (0, r.jsx)(
              tE,
              { controller: e, isEditing: i, isExpanded: l, onExpandedChange: a, onHeightChange: o },
              n,
            ),
          }),
        })
      )
    }
    function tE({ controller: e, isEditing: t, isExpanded: n, onExpandedChange: i, onHeightChange: l }) {
      let [a, o] = (0, d.useState)(() => {
          let { notesText: t } = e.getSnapshot()
          return { workerText: t, text: t, pending: [] }
        }),
        s = (0, d.useRef)(e),
        c = (0, d.useId)(),
        u = (0, d.useRef)(null),
        [p, h] = (0, d.useState)(!1),
        [m, f] = (0, d.useState)(120),
        g = 24 + (n ? m : 0),
        x = t ? "Add speaker notes..." : "No speaker notes"
      return (
        (0, B.o)(() => {
          if (s.current !== e) {
            s.current = e
            let { notesText: t } = e.getSnapshot()
            o({ workerText: t, text: t, pending: [] })
          }
          let t = () => {
              let { notesText: t } = e.getSnapshot()
              o((e) => (e.workerText === t ? e : { ...e, workerText: t, text: e.pending.length > 0 ? e.text : t }))
            },
            n = e.subscribe(t),
            r = e.subscribeEditEvents((t) => {
              if ("edit-started" === t.type) return
              let { notesText: n } = e.getSnapshot()
              o((e) => {
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
        (0, B.o)(() => {
          let e = u.current
          if (!e) return
          let t = () => {
            f(Math.max(120, e.offsetHeight))
          }
          t()
          let n = new ResizeObserver(t)
          return (n.observe(e), () => n.disconnect())
        }, []),
        (0, B.o)(() => {
          l(g)
        }, [l, g]),
        (0, r.jsxs)("section", {
          className: "popcorn-presentation-attached-notes",
          "aria-label": "Speaker notes",
          "data-expanded": n,
          "data-animate": p,
          style: { height: g },
          children: [
            (0, r.jsx)(eg.b_, {
              className: "popcorn-presentation-attached-notes-toggle",
              "aria-controls": c,
              expanded: n,
              label: "Speaker notes",
              showActiveBackground: !1,
              onClick: (e) => {
                ;(h(e.detail > 0), i(!n))
              },
              children: (0, r.jsx)(I.cr, {
                className: "popcorn-presentation-attached-notes-chevron",
                "aria-hidden": "true",
              }),
            }),
            (0, r.jsx)("div", {
              id: c,
              className: "popcorn-presentation-attached-notes-body",
              "aria-hidden": !n,
              inert: !n,
              style: { bottom: 24 },
              children: (0, r.jsxs)("div", {
                ref: u,
                className: "popcorn-presentation-attached-notes-content",
                style: { minHeight: 120 },
                children: [
                  (0, r.jsx)("textarea", {
                    className: "popcorn-presentation-attached-notes-input",
                    "aria-label": "Speaker notes",
                    "data-popcorn-viewport-two-finger-gestures": !0,
                    placeholder: x,
                    value: a.text,
                    rows: 1,
                    readOnly: !t,
                    onChange: (n) => {
                      if (t) {
                        let t = n.target.value,
                          r = (0, eO.x)("speaker-notes")
                        ;(o((e) => ({ ...e, text: t, pending: [...e.pending, r] })),
                          e.dispatch(
                            { kind: "update-speaker-notes", value: t },
                            { id: r, type: "update-speaker-notes", source: "human" },
                          ))
                      }
                    },
                  }),
                  (0, r.jsx)("div", {
                    className: "popcorn-presentation-attached-notes-measurement",
                    "aria-hidden": "true",
                    children: `${a.text || x} `,
                  }),
                ],
              }),
            }),
          ],
        })
      )
    }
    function tM({ camera: e, keyboardCenter: t, subscribeEditEvents: n, onCommit: i, onComplete: l, onCancel: a }) {
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
      ;((0, B.o)(() => {
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
      let y = (e) => (0, tv.f)(e.currentTarget, e.clientX, e.clientY),
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
    var tA = n("omFC")
    function tT({ slideRect: e, onPreview: t, onCommit: n, onCancel: i }) {
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
      let c = (e) => (0, tv.f)(e.currentTarget, e.clientX, e.clientY),
        u = (t, n, r) => {
          let i = n.x - t.x,
            l = n.y - t.y,
            a = !r && 4 > Math.hypot(i, l),
            o = a ? tA.pg.width : Math.max(tA.I6.width, Math.abs(i) / e.scale),
            s = a ? tA.pg.height : Math.max(tA.I6.height, Math.abs(l) / e.scale)
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
    function tP({ controller: e, elementId: t, slideId: n, slideRect: i, requestId: l }) {
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
    var tL = n("oZt2")
    function tF({ slideRect: e, shape: t, connectorPreview: n, onConnectorPreview: i, onCommit: l, onCancel: a }) {
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
      ;(0, B.o)(() => {
        if (p.current && !b) {
          let { from: e, to: t } = I(p.current)
          S(e, t, !0)
        } else k()
      })
      let j = (e, n, r) => (t && r ? (0, e0.Wf)(e, n, x ? "angle" : "square") : n),
        E = (e, t) => {
          let n = h.current
          if (!n || u.current) return
          let r = j(n.start, n.end, n.translationConstraint ?? e)
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
        A = (e) => {
          let n = h.current
          ;((" " === e.key || "Space" === e.code) &&
            t?.geometry === "rect" &&
            n &&
            !u.current &&
            (e.preventDefault(),
            "keyup" === e.type ? (n.translationConstraint = null) : (n.translationConstraint ??= e.shiftKey),
            E(e.shiftKey, e.altKey)),
            ("Shift" === e.key || "Alt" === e.key) && E(e.shiftKey, e.altKey),
            e.stopPropagation())
        }
      return (0, r.jsxs)("div", {
        ref: o,
        "data-testid": `popcorn-presentation-${g}-placement`,
        "aria-label": `Click or drag to ${t ? "place a shape" : "insert a text box"}. Escape cancels.`,
        tabIndex: -1,
        className: "absolute inset-0 z-20 touch-none outline-none",
        style: { cursor: "crosshair" },
        onKeyDown: A,
        onKeyUp: A,
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
          n.pointerId === e.pointerId && r && (M(t), E(e.shiftKey, e.altKey))
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
            s = j(r.start, a, r.translationConstraint ?? n.shiftKey),
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
              ? (0, r.jsx)(tL.U, {
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
    function tR({ controller: e, slideRect: t, shape: n, connectorPreview: i, onDone: l }) {
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
        (0, r.jsx)(tF, {
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
    var tN = n("reJV")
    function tD({ slideRect: e, kind: t = "text", onCommit: n, onCancel: i }) {
      return (0, r.jsx)(tN.w, {
        viewportRect: e,
        kind: t,
        clickTextSize: { width: 112, height: 56 },
        onCommit: (e, t) => n(e, t ? "none" : "square"),
        onCancel: i,
        testId: `popcorn-presentation-${t}-placement`,
      })
    }
    function tz({
      controller: e,
      snapshot: t,
      containerRef: n,
      currentSlideId: i,
      stageSlideRect: l,
      isEditing: a,
      imageInsertionMode: o,
      onImageInsertionModeChange: s,
      tableInsertionMode: d,
      onTableInsertionModeChange: c,
      shapeInsertion: u,
      onShapeInsertionChange: p,
      activeRequests: h,
      chartInsertionPresetId: m,
      onChartInsertionPresetIdChange: f,
      onInsertElement: g,
      textInsertionMode: x,
      onTextInsertionModeChange: b,
    }) {
      return (0, r.jsxs)(r.Fragment, {
        children: [
          a && o && l
            ? (0, r.jsx)(
                tD,
                {
                  kind: "image",
                  slideRect: l,
                  onCancel: () => {
                    ;(s?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                  onCommit: (e) => {
                    ;(g({ kind: "insert-image-placeholder", frame: e }), s?.(!1))
                  },
                },
                `image-placement:${i}`,
              )
            : null,
          a && d && l
            ? (0, r.jsx)(
                tM,
                {
                  keyboardCenter: { x: l.width / (2 * l.scale), y: l.height / (2 * l.scale) },
                  camera: { x: l.left, y: l.top, k: l.scale },
                  onCancel: () => {
                    ;(c?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                  subscribeEditEvents: (t) => e.subscribeEditEvents(t),
                  onCommit: (t, n) => {
                    e.dispatch({ kind: "insert-table", ...t }, n)
                  },
                  onComplete: () => {
                    ;(c?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `table-placement:${i}`,
              )
            : null,
          a && u && l
            ? (0, r.jsx)(
                tR,
                {
                  controller: e,
                  shape: u,
                  slideRect: l,
                  connectorPreview: t.connectorInsertionPreview,
                  onDone: () => {
                    ;(p?.(null), n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `shape-placement:${i}:${u.geometry}:${u.arrow}`,
              )
            : null,
          l &&
            h?.flatMap((n) =>
              "presentation-element-selection" !== n.target.type || n.target.slideId !== i
                ? []
                : n.target.elementIds.flatMap((a) => {
                    let o = t.inspector.slideElements.find((e) => e.id === a)
                    return o?.kind !== "chart"
                      ? []
                      : [
                          (0, r.jsx)(
                            tP,
                            { requestId: n.annotationId, controller: e, elementId: a, slideId: i, slideRect: l },
                            `${n.annotationId}:${a}`,
                          ),
                        ]
                  }),
            ),
          a && m && l
            ? (0, r.jsx)(
                tT,
                {
                  slideRect: l,
                  onPreview: (t) => e.setChartInsertionPreview(t ? { presetId: m, frame: t } : null),
                  onCancel: () => {
                    ;(f?.(null), n.current?.focus({ preventScroll: !0 }))
                  },
                  onCommit: (e) => {
                    ;(g({ kind: "insert-chart", presetId: m, frame: e }),
                      f?.(null),
                      n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `chart-placement:${i}:${m}`,
              )
            : null,
          a && x && l
            ? (0, r.jsx)(
                tD,
                {
                  slideRect: l,
                  onCancel: () => {
                    ;(b?.(!1), n.current?.focus({ preventScroll: !0 }))
                  },
                  onCommit: (t, r) => {
                    ;(e.dispatch({ kind: "insert-text", frame: t, wrap: r }),
                      b?.(!1),
                      n.current?.focus({ preventScroll: !0 }))
                  },
                },
                `text-placement:${i}`,
              )
            : null,
        ],
      })
    }
    function tB(e, t, n) {
      let r = e.ownerDocument.defaultView
      if (!r) return () => {}
      let i = null,
        l = () => {
          null === i &&
            (i = r.requestAnimationFrame(() => {
              i = null
              let l = r.getComputedStyle(e),
                a = l.backgroundColor.trim(),
                o = !a || "transparent" === a || "rgba(0, 0, 0, 0)" === a || a.startsWith("var(") ? (0, M.lh)(t) : a
              n.setStageBackgroundColor(
                o,
                (0, e8.JR)(e),
                l.getPropertyValue("--color-text-secondary").trim() ||
                  l.getPropertyValue("--color-token-text-secondary").trim() ||
                  void 0,
              )
            }))
        }
      l()
      let a = (0, e8.zY)(e, l)
      return () => {
        ;(null !== i && r.cancelAnimationFrame(i), a())
      }
    }
    function tO(e, t) {
      t.current = e.pointerId
      try {
        e.currentTarget.setPointerCapture(e.pointerId)
      } catch {}
    }
    function tV(e, t) {
      if ((t.current === e.pointerId && (t.current = null), e.currentTarget.hasPointerCapture?.(e.pointerId)))
        try {
          e.currentTarget.releasePointerCapture(e.pointerId)
        } catch {}
    }
    function t$(e, t) {
      let n = t.current
      if (((t.current = null), null != n && e?.hasPointerCapture?.(n)))
        try {
          e.releasePointerCapture(n)
        } catch {}
    }
    function tH(e, t, n, r) {
      if ((0, E.tr)(e.target)) return !1
      if (e.shiftKey && ("Digit1" === e.code || "1" === e.key || "!" === e.key) && (0, E.Ul)(e, { allowShift: !0 }))
        return (t.fitToViewport(1), r?.("fit-to-viewport"), e.preventDefault(), !0)
      if (!(0, E.Ul)(e, { allowShift: !0, requirePrimaryModifier: !0 })) return !1
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
            (t.zoomTo((0, G.iy)(i - 0.1, n.fitScale ?? 1), { settled: !0 }), e.preventDefault(), !0)
        : (t.zoomTo((0, G.iy)(i + 0.1, n.fitScale ?? 1), { settled: !0 }), e.preventDefault(), !0)
    }
    function tK(e) {
      return { clientX: e.clientX, clientY: e.clientY, shiftKey: e.shiftKey, altKey: e.altKey, ctrlKey: e.ctrlKey }
    }
    var tq = n("upPC"),
      tW = n("Twa4")
    let tU =
      "var(--popcorn-presentation-background, color-mix(in srgb, var(--color-background-surface, var(--color-surface, #ffffff)) 98%, #000000))"
    function tG({
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
              let r = (0, tv.f)(l.current, e.clientX, e.clientY)
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
            let b = tC(e, l.current, a, i, o)
            if (!b) {
              t && e.preventDefault()
              return
            }
            let y = (0, tb.yu)(i.selectedSlideElementTargets, b, a.k),
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
                  (d = (0, tv.f)(l.current, e.clientX, e.clientY)),
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
    function t_(e) {
      let t = e.selectedSlideFrame
      return t
        ? (0, em.Cz)({
            snapshot: e,
            frame: { left: 0, top: 0, width: t.width, height: t.height },
            anchorPoint: { x: t.width / 2, y: t.height / 2 },
          })
        : null
    }
    let tX = {
        isPanelAvailable: () => !1,
        isPanelOpen: () => !1,
        openPanel: () => {},
        closePanel: () => {},
        togglePanel: () => {},
      },
      tZ = { left: 0, top: 0, right: 0, bottom: 0 }
    function tJ({
      ref: e,
      controller: t,
      runtime: n,
      snapshot: i,
      stageOverlays: l = [],
      elementContextMenu: a,
      panelControls: o = tX,
      editToolbarRequested: c,
      onEditToolbarRequestedChange: u,
      isEditing: p = !0,
      imageInsertionMode: h = !1,
      onImageInsertionModeChange: g,
      shapeInsertion: b = null,
      onShapeInsertionChange: y,
      textInsertionMode: v = !1,
      onTextInsertionModeChange: w,
      tableInsertionMode: C = !1,
      onTableInsertionModeChange: S,
      chartInsertionPresetId: k = null,
      onChartInsertionPresetIdChange: I,
      onInteractionAttempt: j,
      onElementDragStart: A,
      theme: T = "web",
      viewportInsets: P = tZ,
      viewportAlignmentRef: L,
      overlayLeftInsetPx: F,
      showSpeakerNotes: R = !1,
      speakerNotesVisible: N = !0,
      speakerNotesFocusViewportInsets: D,
      annotationMode: z = !1,
      annotationIntent: O = "ask",
      onAnnotationModeChange: V,
      onAnnotationDictationBusyChange: $,
      drawingMode: H = !1,
      onDrawingModeChange: K,
      drawingCommitToken: q = 0,
      reviewTools: W,
      generation: U,
      onHyperlinkClick: G,
      annotationsEnabled: _ = !0,
      drawingAnnotationsEnabled: X = !0,
      commentThreadsEnabled: Z = !0,
      commentsSidebarOpen: Y = !1,
      selectedCommentThreadId: Q,
      hoveredCommentThreadId: ee = null,
      onSelectCommentThread: et,
      onHoverCommentThread: en,
      onClearCommentThread: el,
      annotationPortalContainerElement: ea = null,
    }) {
      var eo
      let ed,
        ec = (0, ei.DP)(t),
        eu = i ?? ec,
        eh = es(x.mq),
        ef = (0, d.useContext)(e2.A),
        eg = (0, d.useContext)(tx.a),
        [ex, eb] = (0, d.useState)(null),
        ey = (0, eq.Up)(ex),
        ev = (0, d.useRef)(null),
        { reportClipboardInteraction: ew, reportKeyboardShortcut: eC } = (0, m._U)(j),
        [eS, ek] = (0, d.useState)(null),
        eI = (0, d.useRef)(null),
        ej = (0, d.useRef)(null),
        eE = (0, d.useRef)(null),
        eM = (0, d.useRef)(null),
        eF = (0, d.useRef)(null),
        eQ = (0, d.useRef)(null),
        e4 = (0, d.useRef)(null),
        e3 = (0, d.useRef)(null),
        e5 = (0, d.useRef)(null),
        e9 = (0, d.useRef)(!1),
        e7 = (0, d.useRef)(null),
        te = (0, d.useRef)(null),
        tt = (0, d.useRef)(!1),
        tn = (0, d.useRef)(!1),
        tr = (0, d.useRef)(null),
        ti = (0, d.useCallback)(() => {
          let e
          if (tn.current) return
          tn.current = !0
          let n = ev.current?.ownerDocument.defaultView
          n &&
            ((e = (function (e, t, n, r) {
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
                      : (t.presentationVersion !== d.presentationVersion || t.previewVersion !== d.previewVersion) &&
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
            })(t, n, A, () => {
              tr.current === e && (tr.current = null)
            })),
            (tr.current = e))
        }, [t, A]),
        tl = (0, d.useRef)(null),
        ta = (0, d.useRef)(null),
        ts = (0, d.useRef)(void 0),
        [td, tc] = (0, d.useState)(0),
        [tu, tp] = (0, d.useState)(!1),
        [th, tm] = (0, d.useState)(!1),
        [tk, tI] = (0, d.useState)({ kind: "idle" }),
        [tE, tM] = (0, d.useState)(!1),
        tA = u ?? tM,
        tT = (0, d.useRef)(null),
        tP = l.length > 0,
        tL = l.some((e) => p || e.supportsReadOnlySelection),
        tF = W?.annotation?.editingDisabled === !0,
        tR = (0, d.useRef)(tF)
      tR.current = tF
      let tN = _ && W?.annotation != null && !1 !== W.annotation.enabled,
        tD =
          !tF &&
          Z &&
          W?.annotation?.canComment !== !1 &&
          W?.annotation?.createCommentThreads === !0 &&
          null != W.annotation.commentAuthor,
        tY = (() => {
          let e = W && W.annotation
          if (Z && null != e && !0 === e.createCommentThreads) return e.renderCommentThread
        })(),
        tQ = X && W?.drawing != null && !1 !== W.drawing.enabled,
        [t0, t1] = (0, d.useState)(null),
        [t2, t4] = (0, d.useState)(null),
        t3 = (0, d.useRef)(t0)
      t3.current = t0
      let t5 = (0, d.useRef)(!1),
        t6 = (0, d.useRef)(null),
        t8 = (0, d.useRef)(!1),
        t9 = (0, d.useRef)(!1),
        t7 = (0, d.useRef)(null),
        [ne, nt] = (0, d.useState)(!1),
        [nn, nr] = (0, d.useState)(null),
        [ni, nl] = (0, d.useState)(null),
        na = (0, d.useRef)(null),
        [no, ns] = (0, d.useState)([]),
        nd = (0, d.useRef)([])
      nd.current = no
      let nc = (0, d.useRef)(null),
        nu = (0, d.useRef)(null),
        np = (0, d.useRef)(q),
        nh = (0, d.useCallback)((e) => {
          ;(t7.current?.annotationId === e && (t7.current = null),
            t4((t) => (t === e ? null : t)),
            t1((t) => (t?.mode === "edit" && t.annotationId === e ? null : t)))
        }, []),
        nm = (0, d.useCallback)(() => {
          ;((t7.current = null), t4(null), t1(null))
        }, []),
        nf = (0, d.useCallback)(
          (e) => {
            ;(nh(e), W?.annotation?.onDismiss?.(e))
          },
          [nh, W?.annotation],
        ),
        {
          viewportCamera: ng,
          layoutSnapshot: nx,
          effectiveViewportInsets: nb,
          stageSlideRect: ny,
          stageOverlaySnapshot: nv,
          selectionBoundsSource: nw,
          tableCameraSource: nC,
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
                return (0, d.useMemo)(() => tS(e, t, n, r, i, l, a), [e, t, n, r, i, l, a])
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
                      let d = l?.dragging || null != i.activeInteractionKind ? null : ty(i, a, l)
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
                      tS(
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
                    i = tS(
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
        })({ controller: t, runtime: n, snapshot: eu }),
        nS = {
          top: nb.top ?? 0,
          right: (nb.right ?? 0) + (nb.fitRightInset ?? 0),
          bottom: nb.bottom ?? 0,
          left: (nb.left ?? 0) + (nb.fitLeftInset ?? 0),
        },
        nk = (0, d.useMemo)(
          () =>
            (function (e) {
              let t = new Map(e.selectedSlideElementTargets.map((e) => [e.id, e]))
              for (let n of e.previewFrames) {
                let e = t.get(n.elementId)
                e && t.set(e.id, { ...e, frame: { ...e.frame, ...n.frame }, connector: n.connector ?? e.connector })
              }
              return t
            })(eu),
          [eu.selectedSlideElementTargets, eu.previewFrames],
        )
      !(function ({ cursorRef: e, canvasRef: t, active: n, targets: r, previewRotation: i }) {
        ;(0, B.o)(() => {
          let l = e.current
          if (!l) return
          if (!n) {
            e.current = null
            return
          }
          let a = r.get(l.elementId)
          a && t.current && (t.current.style.cursor = (0, eN.SQ)(l.corner, i ?? a.frame.rotation))
        }, [n, t, e, i, r])
      })({
        cursorRef: eQ,
        canvasRef: eE,
        active: p && "idle" !== tk.kind,
        targets: nk,
        previewRotation: eu.selectionRotationFrame?.rotation,
      })
      let nI = eu.slideIds[eu.selectedSlideIdx] ?? `slide-${eu.selectedSlideIdx}`,
        nj = W?.annotation?.activeRequests
      ;((0, d.useEffect)(() => {
        t.setWorkingImages(
          nj?.flatMap(({ target: e }) =>
            "presentation-element-selection" === e.type
              ? e.elementIds.map((t) => ({ slideId: e.slideId, elementId: t }))
              : [],
          ) ?? [],
        )
      }, [t, nj]),
        (0, d.useEffect)(() => () => t.setWorkingImages([]), [t]))
      let nE = (function (e, t, n) {
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
                  if ("insert-image-placeholder" === r.kind && n?.disabled) return
                  ;(c.current?.(), u())
                  let a = (0, eO.x)("element-insertion"),
                    o = "insert-chart" === r.kind ? "chart" : "image",
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
                    let r = e.getSnapshot(),
                      d = r.primarySelectedElementId
                    !(r.slideIds[r.selectedSlideIdx] !== t || !d || s.has(d)) &&
                      1 === r.selectedElementIds.length &&
                      r.inspector.selectedElement?.id === d &&
                      r.inspector.selectedElement.kind === o &&
                      r.selectedSlideElementTargets.some((e) => e.id === d) &&
                      ((l.current = a),
                      i({
                        id: a,
                        elementId: d,
                        placeholder: "chart" === o ? "What should this chart contain?" : "Describe an image",
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
                        let d = (0, em.a6)({ snapshot: o })
                        if (!d) return !1
                        ;((a.current = r.id), s(r.id))
                        try {
                          return (
                            (await n.onSubmit({
                              requestId: r.id,
                              artifactKind: "presentation",
                              body: i,
                              label: (0, em.o7)(d),
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
        })(t, nI, U),
        nM = (0, d.useRef)(nI)
      ;(0, d.useEffect)(() => {
        ;(null != k &&
          (!p || z || H || v || h || C || null != b || nM.current !== nI) &&
          (t.setChartInsertionPreview(null), I?.(null)),
          (nM.current = nI))
      }, [t, nI, k, p, z, H, v, h, C, b, I])
      let nA = (0, d.useMemo)(() => ({ controller: t, slideId: nI }), [t, nI]),
        nT = eu.slideLabels[eu.selectedSlideIdx] ?? `Slide ${eu.selectedSlideIdx + 1}`
      ;(0, B.o)(
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
      let nP = (0, d.useCallback)(
        (e) => {
          let r = e > 0 && !eu.gridLayout ? e + 12 + 80 : 0
          r !== n.getContentBottomInset() && (n.setContentBottomInset(r), t.setViewportInsets(P, void 0, r))
        },
        [t, n, P, eu.gridLayout],
      )
      ;(0, B.o)(() => {
        R || nP(0)
      }, [nP, R])
      let nL = (0, d.useMemo)(
          () => (eu.commentThreads ?? []).filter((e) => e.slideId === nI && "resolved" !== e.status),
          [nI, eu.commentThreads],
        ),
        nF = ee ?? Q,
        nR = (0, d.useMemo)(() => (nF ? (nL.find((e) => e.threadId === nF) ?? null) : null), [nL, nF]),
        nN = (0, d.useMemo)(() => {
          let e = nv.slideRect
          if (!e || !nR) return null
          let t = nR.target
          if ("slide" === t.kind) return null
          let n = t.frame ?? eu.selectedSlideElementTargets.find((e) => e.id === t.elementId)?.frame
          return n
            ? {
                left: e.left + n.left * e.scale,
                top: e.top + n.top * e.scale,
                width: n.width * e.scale,
                height: n.height * e.scale,
              }
            : null
        }, [nR, eu.selectedSlideElementTargets, nv.slideRect]),
        nD = (0, d.useMemo)(
          () => ty({ selectionGeometry: nv.selectionGeometry, slideRect: nv.slideRect }),
          [nv.selectionGeometry, nv.slideRect],
        ),
        nz = (0, f.U)("presentation"),
        nB =
          eu.selectedElementIds.length > 1
            ? "mixed"
            : (eu.inspector.slideElements.find((e) => e.id === eu.primarySelectedElementId)?.kind ?? "element"),
        nO = (0, eA.k3)(nz, nB),
        nV =
          1 === eu.selectedElementIds.length && eu.inspector.selectedElement?.id === eu.primarySelectedElementId
            ? eu.inspector.selectedElement
            : null,
        n$ =
          nV?.kind === "chart" || nV?.kind === "image"
            ? nj?.find(
                ({ target: e }) =>
                  "presentation-element-selection" === e.type && e.slideId === nI && e.elementIds.includes(nV.id),
              )
            : void 0,
        nH = null != nE.request || null != n$,
        nK =
          (p &&
            eT({
              capabilities: eh,
              config: nO,
              text: nV?.text != null,
              fill: !1,
              delete: !1,
              format:
                o.isPanelAvailable(er) &&
                eh.inspector.length > 0 &&
                (nV?.text != null || nV?.fill != null || nV?.line != null),
            }).length > 0) ||
          (!tF &&
            "hidden" !== nO.controls.askForChange.state &&
            tN &&
            (W?.annotation?.onDirectSubmit != null || W?.annotation?.onSubmit != null)) ||
          (!tF && "hidden" !== nO.controls.comment.state && tD),
        nq = nO.enabled && ("selection" === nO.trigger || nH),
        nW =
          !(Z && (Y ? eu.commentThreads : nL)?.some((e) => e.threadId === Q)) &&
          (nK || nH) &&
          tL &&
          !v &&
          !h &&
          null == b &&
          eu.selectedElementIds.length > 0 &&
          !C &&
          !z &&
          !H &&
          null == k &&
          !t0 &&
          "idle" === tk.kind &&
          null == eu.activeInteractionKind &&
          (!eu.textEditState?.activeBlockId ||
            ((eu.textEditState.selection?.selectedCharacterCount ?? 0) > 0 &&
              l.some((e) => e.supportsTextSelection))) &&
          null != nD,
        nU = (c ?? tE) && nW
      ;((0, d.useEffect)(() => {
        ;(!tL || z || H) && tA(!1)
      }, [tL, z, H, tA]),
        (0, d.useEffect)(() => {
          if (!nU) return
          let e = (e) => {
            ;(e.target instanceof Element &&
              e.target.closest("[data-popcorn-edit-toolbar-root], [data-popcorn-presentation-format-control]")) ||
              tA(!1)
          }
          return (document.addEventListener("mousedown", e, !0), () => document.removeEventListener("mousedown", e, !0))
        }, [nU, tA]))
      let nG = (0, d.useMemo)(
          () =>
            (0, em.a6)({
              snapshot: {
                slideIds: eu.slideIds,
                slideLabels: eu.slideLabels,
                selectedSlideIdx: eu.selectedSlideIdx,
                selectedElementIds: eu.selectedElementIds,
                primarySelectedElementId: eu.primarySelectedElementId,
                selectionGeometry: eu.selectionGeometry,
                inspector: eu.inspector,
              },
            }),
          [
            eu.slideIds,
            eu.slideLabels,
            eu.selectedSlideIdx,
            eu.selectedElementIds,
            eu.primarySelectedElementId,
            eu.selectionGeometry,
            eu.inspector,
          ],
        ),
        n_ = nG ? JSON.stringify([nG.slideId, nG.elementIds, nG.primaryElementId]) : null
      ;((0, d.useEffect)(() => {
        tA(tL && nq && null != n_)
      }, [n_, nO, nH, nq, tL, tA]),
        (0, d.useEffect)(() => {
          null == n_ && (tT.current = null)
        }, [n_]))
      let nX = (0, d.useCallback)(() => {
          let e = W?.annotation?.onAskForEditShown
          null != n_ && tT.current !== n_ && null != e && ((tT.current = n_), e())
        }, [n_, W?.annotation?.onAskForEditShown]),
        nZ = (0, d.useMemo)(() => {
          let e = nv.slideRect
          return e ? { left: e.left, top: e.top, width: e.width, height: e.height } : null
        }, [nv.slideRect]),
        nJ = (0, d.useMemo)(
          () => (t0?.target.slideId === nI ? (0, em.FB)(t0.target, nv.slideRect, nk) : null),
          [t0?.target, nI, nv.slideRect, nk],
        ),
        nY = (0, d.useMemo)(
          () => (t0?.target.slideId === nI ? (0, em.ow)(t0.target, nv.slideRect, nk) : null),
          [t0?.target, nI, nv.slideRect, nk],
        )
      ed = t0?.mode === "create" && t0.markerAtAnchor ? nY : (nJ ?? nY)
      let nQ = (0, d.useMemo)(() => (tN && ni ? (0, tb.UW)(ni.start, ni.current) : null), [tN, ni]),
        n0 = (0, d.useMemo)(() => {
          if (!nQ || !ni) return null
          let e = (0, em.Cz)({ snapshot: eu, frame: nQ, anchorPoint: ni.current })
          return e ? (0, em.FB)(e, nv.slideRect) : null
        }, [ni, nQ, eu, nv.slideRect]),
        n1 = (0, d.useMemo)(
          () =>
            nQ
              ? (0, tb.hy)(eu.selectedSlideElementTargets, nQ).flatMap((e) => {
                  let t = eu.selectedSlideElementTargets.find((t) => t.id === e)
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
          [nQ, eu.selectedSlideElementTargets],
        ),
        n2 = (0, d.useMemo)(
          () =>
            t0?.target.type !== "presentation-region" || t0.target.slideId !== nI ? [] : t0.target.containedElements,
          [t0, nI],
        ),
        n4 = (0, d.useMemo)(
          () => (ne ? eu.selectionGeometry.hoveredTarget : null),
          [ne, eu.selectionGeometry.hoveredTarget],
        ),
        n3 = (0, d.useMemo)(
          () =>
            n0 ||
            nJ ||
            (tN && z && n4
              ? (0, em.FB)(
                  {
                    type: "presentation-element-selection",
                    slideId: nI,
                    slideIndex: eu.selectedSlideIdx,
                    slideLabel: nT,
                    elementIds: [n4.id],
                    primaryElementId: n4.id,
                    frame: n4.frame,
                  },
                  nv.slideRect,
                )
              : null),
          [nJ, tN, n4, z, n0, nI, nT, eu.selectedSlideIdx, nv.slideRect],
        ),
        n5 = (0, d.useCallback)(
          (e, t = !1) =>
            !tR.current &&
            (t9.current
              ? ((t8.current = !1), (0, eD.AE)(t6.current), !1)
              : (((t8.current = !1), t)
                  ? (t1(null), t4(e.annotationId))
                  : W?.annotation?.defaultCreateSubmitMode === "direct"
                    ? (t4(null), t1({ mode: "create", intent: "ask", target: e.target, body: "" }))
                    : (t4(e.annotationId),
                      t1({ mode: "edit", annotationId: e.annotationId, target: e.target, body: e.body })),
                !0)),
          [W?.annotation?.defaultCreateSubmitMode],
        ),
        n6 = (0, d.useCallback)(
          (e, n, r) => {
            if (tR.current) return !1
            let i = t3.current,
              l =
                i?.mode === "create"
                  ? i.body.trim().length > 0
                  : i?.mode === "edit" && i.body !== r.find((e) => e.annotationId === i.annotationId)?.body
            if (n && l) return ((0, eD.AE)(t6.current), !1)
            let a = null != t7.current
            if (((t7.current = null), e.target.slideId === nI && !a)) return n5(e, n)
            if (t9.current) return ((t8.current = !1), (0, eD.AE)(t6.current), !1)
            let o = eu.slideIds.indexOf(e.target.slideId)
            return (
              !(o < 0) &&
              (n && t1(null), (t7.current = { annotationId: e.annotationId, preview: n }), t.setSelectedSlideIdx(o), !0)
            )
          },
          [t, nI, n5, eu.slideIds],
        ),
        {
          annotations: n8,
          addPendingAnnotation: n9,
          updatePendingAnnotation: n7,
          focusAnnotation: re,
          dismissAnnotation: rt,
        } = (0, eV.C)(W?.annotation?.handleRef, {
          artifactKey: W?.annotation?.artifactKey,
          artifactKind: "presentation",
          canReplaceSource: () => null == t3.current && !t9.current && !t5.current && null == t7.current,
          initialAnnotations:
            W?.annotation?.initialAnnotations ??
            W?.annotation?.initialPendingAnnotations?.filter(
              (e) => "presentation-element-selection" === e.target.type || "presentation-region" === e.target.type,
            ),
          onFocusAnnotation: n6,
          onDismissAnnotation: nf,
          onDismissAllAnnotations: nm,
        }),
        rn = (0, d.useMemo)(
          () => n8.filter((e) => W?.annotation?.canAssignToChatGpt !== !1 && e.target.slideId === nI),
          [nI, n8, W?.annotation?.canAssignToChatGpt],
        ),
        rr = (0, d.useMemo)(() => (0, eH.Wi)(rn), [rn]),
        ri = t0?.mode === "edit" ? (rr.get(t0.annotationId) ?? 0) : 0,
        rl = (0, d.useMemo)(
          () => (t0?.mode === "edit" && nJ ? { ...(0, eL.Ky)(nJ, "top-right", ri), width: 0, height: 0 } : nY),
          [nY, nJ, t0?.mode, ri],
        ),
        ra = (0, d.useMemo)(
          () =>
            rn.map((e) => ({
              annotation: e,
              stackIndex: rr.get(e.annotationId) ?? 0,
              bounds: (0, em.FB)(e.target, nv.slideRect, nk),
            })),
          [rr, rn, nv.slideRect, nk],
        ),
        ro = (() => {
          if (null != tY) return ra.map(({ bounds: e, stackIndex: t }) => (0, eL.Ky)(e, "top-right", t))
        })(),
        rs = (0, d.useMemo)(
          () =>
            null == t2 || t0?.mode === "edit" ? null : (ra.find(({ annotation: e }) => e.annotationId === t2) ?? null),
          [t0?.mode, t2, ra],
        ),
        rd = (0, d.useMemo)(() => (n0 ? n1 : n2), [n2, n1, n0]),
        { drawings: rc, addPendingDrawing: ru } = (0, e$.r)(W?.drawing?.handleRef),
        rp = (0, d.useMemo)(() => rc.filter((e) => e.target.slideId === nI), [nI, rc]),
        rh = (0, d.useMemo)(() => {
          var e
          return (
            (e = () => {
              tc((e) => e + 1)
            }),
            new tg.D(
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
        rm = (e) => {
          let t = rh.getTextBlockIdAtPoint(e)
          return (0, tb.Uq)(t, eu.selectedSlideElementTargets, e, n.getCamera().k) ? t : null
        },
        rf = (0, d.useCallback)(
          (e) => {
            let { presentationVersion: n, previewVersion: r } = t.getSnapshot()
            ;(tr.current?.end(e?.commit === !0),
              tI({ kind: "awaiting-drop", presentationVersion: n, previewVersion: r }),
              t.endElementInteraction(e) || (tr.current?.interrupt("replaced"), tI({ kind: "idle" })))
          },
          [t],
        ),
        {
          gridPointerRef: rg,
          cancelGridPointerInteraction: rx,
          flushGridPointerInteraction: rb,
          beginGridPointerInteraction: ry,
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
                t$(i.current, l),
                !0)
              )
            }, [e, s, l, a, i, u]),
            b = (0, d.useCallback)(() => {
              let n = g.current,
                o = r.current
              if (!n || void 0 === n.result || !o) return
              let d = n.latest,
                u = Math.hypot(d.clientX - n.start.clientX, d.clientY - n.start.clientY) > 2,
                f = (0, tv.f)(o, d.clientX, d.clientY)
              if (null === n.result) {
                ;((g.current = null), e.clearElementSelection(), t$(i.current, l))
                return
              }
              let b = n.result,
                y = (0, tw.w4)(n.layout, b.slideIndex, t.getCamera())
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
                  let r = (0, tv.f)(c, i.clientX, i.clientY),
                    p = (0, tw.w4)(d, n.selectedSlideIdx, t.getCamera()),
                    h =
                      null != p && r.x >= p.left && r.x <= p.left + p.width && r.y >= p.top && r.y <= p.top + p.height,
                    m = p ? { x: (r.x - p.left) / p.scale, y: (r.y - p.top) / p.scale } : null,
                    y = (0, tb.mc)(n),
                    v = n.selectedSlideElementTargets.find((e) => e.id === n.primarySelectedElementId),
                    w =
                      m &&
                      ((0, tb.hp)(
                        y,
                        m,
                        t.getCamera().k,
                        (0, tb.jJ)(n),
                        1 === n.selectedElementIds.length && v?.resizeAxis === "horizontal",
                      ) ||
                        ((n.selectedElementIds.length > 1 || !!v?.canRotate) && (0, tb.Ht)(y, m, t.getCamera().k)) ||
                        (1 === n.selectedElementIds.length && v && (0, tb.B5)([v], m, t.getCamera().k)))
                  if (!h && !w) {
                    ;(s(), (o.current = null), (a.current = null))
                    let t = tK(i),
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
                      tO(i, l),
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
          snapshot: eu,
          containerRef: ev,
          overlayCanvasRef: eE,
          activePointerIdRef: eM,
          armedTextElementIdRef: e3,
          pointerClickSequenceRef: e4,
          finishElementInteraction: rf,
          startDragObservation: ti,
          setElementInteractionPhase: tI,
          setEditToolbarRequested: tA,
          hasEditToolbarOverlay: tP,
          selectionToolbarAutomatic: nq,
          selectOnly: H || z || v || h || C || null != b || null != k,
        }),
        rv = (0, d.useCallback)(() => {
          ;(na.current?.end(), nu.current?.(), (nu.current = null))
        }, []),
        rw = (0, d.useCallback)(
          (e = eE.current) => {
            if (rx()) return !0
            if (na.current?.isActive()) return (rv(), !0)
            let n = eF.current
            if (!n) return !1
            let r = e5.current
            return (
              (eF.current = null),
              (e5.current = null),
              (e7.current = null),
              (tt.current = !1),
              (e3.current = null),
              "element" === n
                ? rf({ commit: !1 })
                : "marquee" === n
                  ? t.endSelectionMarquee({ commit: !1 })
                  : "table" === n
                    ? r && t.tableEditing.interact({ tableId: r, type: "pointer-cancel" })
                    : rh.pointerUp(),
              t$(e, eM),
              !0
            )
          },
          [rx, rv, t, rf, rh],
        )
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
        (0, B.o)(() => {
          var e
          let r,
            i,
            l,
            a,
            o,
            s = eE.current,
            d = ev.current,
            c = d?.ownerDocument.defaultView,
            u = () => rw()
          c?.addEventListener("blur", u)
          let p =
            d &&
            ((e = (e) => {
              rh.setCaretBlinkEnabled(e)
            }),
            (i = (r = d.ownerDocument).defaultView),
            (l = !1),
            (a = () => e(l && r.hasFocus())),
            i?.addEventListener("focus", a),
            i?.addEventListener("blur", a),
            (o = J(d, (e) => {
              ;((l = e.visible), a())
            })),
            () => {
              ;(i?.removeEventListener("focus", a), i?.removeEventListener("blur", a), o())
            })
          n.attachHost(ev.current)
          let h =
            ev.current && eI.current
              ? t.attachViewport({ host: ev.current, canvas: eI.current, overlayCanvas: ej.current })
              : void 0
          return (
            rh?.attachContainer(ev.current),
            n.start(),
            () => {
              ;(c?.removeEventListener("blur", u),
                p?.(),
                tr.current?.interrupt("detached"),
                rw(s),
                h?.(),
                n.dispose(),
                rh?.dispose())
            }
          )
        }, [rw, t, n, rh]),
        (0, d.useEffect)(
          () => () => {
            ;(null != tl.current && window.cancelAnimationFrame(tl.current), t.clearLocalAwarenessCursor())
          },
          [t],
        ),
        (function ({ controller: e, runtime: t, snapshot: n, viewportInsets: r }) {
          ;((0, B.o)(
            () =>
              e.subscribeToViewportFrames(() => {
                let n = e.getPresentedViewportCamera()
                n && t.recordPresentedCamera(n)
                let r = e.getViewTransitionCamera()
                r && t.adoptPresentedCamera(r)
              }),
            [e, t],
          ),
            (0, B.o)(() => {
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
            (0, B.o)(() => {
              e.setViewportInsets(r, t.hasInitializedCamera() ? t.getCamera() : void 0, t.getContentBottomInset())
            }, [e, t, r]))
        })({ controller: t, runtime: n, snapshot: eu, viewportInsets: P }),
        (0, d.useEffect)(() => (n.setGestureObserverFactory(eg), () => n.setGestureObserverFactory(void 0)), [eg, n]),
        (0, d.useEffect)(() => {
          if (eu.textEditState?.activeBlockId) {
            e3.current = null
            return
          }
          ;(1 === eu.selectedElementIds.length &&
            eu.primarySelectedElementId &&
            eu.textLayoutBlocks.some((e) => e.id === eu.primarySelectedElementId)) ||
            (e3.current = null)
        }, [eu.primarySelectedElementId, eu.selectedElementIds, eu.textEditState, eu.textLayoutBlocks]),
        (0, B.o)(() => {
          let e = ev.current
          eu.selectedSlideFrame &&
            e &&
            rh.updateState({
              state: p ? eu.textEditState : null,
              revision: eu.textEditRevision,
              blocks: eu.textLayoutBlocks,
            })
        }, [p, eu.selectedSlideFrame, eu.textEditState, eu.textEditRevision, eu.textLayoutBlocks, rh]),
        (0, d.useEffect)(() => {
          "function" == typeof t.setEditingEnabled && t.setEditingEnabled(p)
        }, [t, p]),
        (0, d.useEffect)(() => {
          if (ex) return tB(ex, T, t)
        }, [t, ex, T]),
        (0, d.useEffect)(() => {
          p ||
            (tr.current?.interrupt("replaced"),
            rw(),
            rh.clear(),
            (e3.current = null),
            (eF.current = null),
            (e5.current = null),
            (e7.current = null),
            (tt.current = !1),
            tp(!1),
            tI({ kind: "idle" }))
        }, [rw, p, rh]),
        (0, d.useEffect)(() => {
          "awaiting-drop" === tk.kind &&
            null === eu.activeInteractionKind &&
            (eu.presentationVersion !== tk.presentationVersion || eu.previewVersion !== tk.previewVersion) &&
            tI((e) => (e === tk ? { kind: "idle" } : e))
        }, [tk, eu.activeInteractionKind, eu.presentationVersion, eu.previewVersion]))
      let rC = (0, d.useCallback)(() => {
          try {
            ev.current?.focus({ preventScroll: !0 })
          } catch {}
        }, []),
        rS = (0, d.useCallback)(
          (e, t) => {
            let r = n.getCamera().k
            n.panByScroll(e / r, t / r)
          },
          [n],
        ),
        rk = (0, d.useCallback)((...e) => n.createFitToViewportTransition(...e), [n]),
        rI = (0, d.useCallback)(() => {
          ;(tA(!1), rC())
        }, [tA, rC]),
        rj = (0, d.useCallback)(() => {
          ;((nc.current = null), (nd.current = []), ns([]))
        }, []),
        rE = (0, d.useCallback)(() => {
          ;((t7.current = null), (t9.current = !1), $?.(!1), (t8.current = !1), t1(null), nl(null), rC())
        }, [rC, $]),
        rM = (0, d.useCallback)(() => !!t9.current && ((t8.current = !1), (0, eD.AE)(t6.current), !0), []),
        rA = (0, d.useCallback)(
          (e) => {
            if (rM()) return
            let n = t.getSnapshot(),
              r = Math.max(0, Math.min(n.slideCount - 1, n.selectedSlideIdx + e))
            r !== n.selectedSlideIdx && t.setSelectedSlideIdx(r)
          },
          [rM, t],
        )
      ;(0, d.useEffect)(() => (n.setOnNavigateSlide(rA), () => n.setOnNavigateSlide(null)), [rA, n])
      let rT = (0, d.useCallback)(
          (e) => {
            ;((t9.current = e), $?.(e), (t8.current = !1))
          },
          [$],
        ),
        rP = (0, d.useCallback)(() => {
          tR.current || rM() || rE()
        }, [rM, rE]),
        rL = (0, eX.D)(t3, V, n8),
        rF = (0, eG.q)({
          editingDisabledRef: tR,
          editorSessionRef: t3,
          lightDismissArmedRef: t8,
          editorRef: t6,
          pendingAnnotations: n8,
          blockWhileDictationBusy: rM,
          closeEditor: rP,
        })
      ;(0, e_.q)({
        active: z,
        disabled: tF,
        onExit: () => {
          null != t3.current ? rF() : rM() || V?.(!1)
        },
      })
      let rR = (0, d.useCallback)(
          (e) => {
            let t = nv.slideRect
            return t ? { x: t.left + e.x * t.scale, y: t.top + e.y * t.scale } : { x: e.x, y: e.y }
          },
          [nv.slideRect],
        ),
        rN = (0, d.useCallback)(
          (e) => {
            null != e &&
              0 !== e.points.length &&
              tQ &&
              H &&
              ((nc.current = nI), (nd.current = [...nd.current, e]), ns(nd.current))
          },
          [nI, tQ, H],
        ),
        rD = (0, d.useCallback)(
          (e) => {
            if (0 === e.length) return
            let t = (0, eK.N5)(e),
              n = (0, eK.N5)(e.map((e) => ({ ...e, points: e.points.map(rR) }))),
              r = ev.current,
              i = eI.current
            if (!t || !n || !r || !i || !nv.slideRect) return
            let l = { width: r.clientWidth, height: r.clientHeight },
              a = e.reduce((e, t) => Math.max(e, t.strokeWidth), 0),
              o = (0, eK.f4)(
                (0, eK.$0)({ left: n.left - a / 2, top: n.top - a / 2, width: n.width + a, height: n.height + a }),
                l,
              ),
              s = { left: t.left, top: t.top, width: t.width, height: t.height },
              d = (0, tb.hy)(eu.selectedSlideElementTargets, s).flatMap((e) => {
                let t = eu.selectedSlideElementTargets.find((t) => t.id === e)
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
              c = (0, em.wu)({ snapshot: eu, frame: s, viewportBounds: o, containedElements: d })
            if (!c) return
            let u = (0, eO.x)("drawing"),
              p = (0, em.kt)(c)
            ru({ drawingId: u, artifactKind: "presentation", label: p, target: c, strokes: e })
            let h = { x: o.left + o.width / 2, y: o.top + o.height / 2 }
            ;(0, eK.M9)({
              cropRect: o,
              viewportSize: l,
              baseCanvas: i,
              overlayCanvases: [ej.current, eE.current],
              strokes: e,
              projectPoint: rR,
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
                    browserCompatible: (0, eK.q3)({
                      drawingId: u,
                      screenshot: n,
                      markerViewportPoint: h,
                      viewportSize: l,
                    }),
                  }
                return W?.drawing?.onSubmit?.(r)
              })
              .catch((e) => {
                console.error("Failed to capture presentation drawing screenshot", e)
              })
          },
          [ru, rR, W?.drawing, eu, nv.slideRect],
        ),
        rz = async (e = "saved", n = "button", r, i, l = !1) => {
          if (tR.current) return
          let a = i ?? t3.current
          if (!a?.target) return
          let o = (r ?? a.body).trim()
          if (0 === o.length) return
          if ("edit" === a.mode) {
            n7(a.annotationId, { body: o })
            let t = {
              annotationId: a.annotationId,
              artifactKind: "presentation",
              label: (0, em.o7)(a.target),
              body: o,
              target: a.target,
            }
            ;(W?.annotation?.onUpdate?.(t),
              "direct" === e && W?.annotation?.allowDirectSubmitOnEdit && W.annotation.onDirectSubmit?.(t, () => rL(a)),
              rE())
            return
          }
          let s = {
            annotationId: (0, eO.x)("annotation"),
            artifactKind: "presentation",
            label: (0, em.o7)(a.target),
            body: o,
            target: a.target,
          }
          if ("comment" === a.intent) {
            let e = W?.annotation?.commentAuthor
            if (!Z || W?.annotation?.canComment === !1 || !W?.annotation?.createCommentThreads || null == e) return
            let n = a.target,
              r = "presentation-element-selection" === n.type ? (n.primaryElementId ?? n.elementIds[0]) : void 0
            if (("presentation-element-selection" === n.type && null == r) || t5.current) return
            ;((t5.current = !0), (l = l && W?.annotation?.canAssignToChatGpt !== !1))
            let i = null == r ? { author: e, position: n.anchorPoint } : { author: e, elementId: r },
              d = l ? `@ChatGPT ${o}` : o,
              c = await t.addCommentThread(n.slideId, d, i).catch(() => null)
            if (((t5.current = !1), null == c)) return
            ;(rE(),
              tA(!1),
              et?.(c),
              W.annotation?.onCommentSubmitted?.({
                threadId: c,
                artifactKind: s.artifactKind,
                body: s.body,
                label: s.label,
                target: s.target,
                assignedToChatGpt: l,
              }))
            return
          }
          ;(n9(s),
            "direct" === e && W?.annotation?.onDirectSubmit
              ? W.annotation.onDirectSubmit(s, () => rL(a))
              : W?.annotation?.onSubmit?.(s),
            W?.annotation?.onSubmitted?.(s, e, n, { annotationMode: z }),
            rE())
        }
      ;(0, d.useImperativeHandle)(e, () => ({
        startComment: () => rG(),
        requestChanges(e, n) {
          if (!tN || !W?.annotation?.onSubmit || W.annotation.savedSubmitDisabled || rM()) return
          let r = t.getSnapshot(),
            i = ("slide" === n ? null : (0, em.a6)({ snapshot: r })) ?? t_(r)
          i && rz("saved", "button", e, { mode: "create", intent: "ask", target: i, body: e })
        },
      }))
      let rB = (e) => {
        if (tR.current) return
        t8.current = !1
        let t = t3.current
        if (!t) return
        let n = { ...t, body: e }
        ;((t3.current = n), t1(n))
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
          let p = t_(l)
          p &&
            ((o.current = !1),
            c?.onStart?.("ask_codex_button", { annotationMode: !0 }),
            s({ mode: "create", intent: "ask", target: p, markerAtAnchor: !0, body: "" }))
        }, [n, t, r, e, i, c, a, o, s, l])
      })({
        annotationMode: z,
        annotationEnabled: tN,
        annotationEditingDisabled: tF,
        annotationIntent: O,
        drawingMode: H,
        snapshot: eu,
        annotationEditorSessionRef: t3,
        annotationEditorLightDismissArmedRef: t8,
        setAnnotationEditorSession: t1,
        annotation: W?.annotation,
      })
      let rO = tD && t0?.mode === "create" && "comment" === t0.intent
      ;((0, d.useEffect)(() => {
        ;(tN || rO || (t0?.mode === "edit" && W?.annotation?.canAssignToChatGpt !== !1) || t1(null),
          (tN && z && !tF) || (nl(null), nr(null)))
      }, [tN, t0?.mode, tF, z, rO, W?.annotation?.canAssignToChatGpt]),
        (0, d.useEffect)(() => {
          if (tQ && H) {
            ;(t1(null), nl(null), nr(null), nt(!1), t.setHoveredElementId(null))
            return
          }
          let e = q !== np.current
          ;(rv(), nd.current.length > 0 && !e && rj())
        }, [rv, rj, t, q, tQ, H]),
        (0, d.useEffect)(() => {
          if (q === np.current) return
          np.current = q
          let e = nd.current
          ;(0 === e.length || rD(e), rj())
        }, [rj, q, rD]),
        (0, d.useEffect)(() => {
          if (!tN || !z) {
            ;(nt(!1), t.setHoveredElementId(null))
            return
          }
          ;(nt(!1), t.setHoveredElementId(null))
        }, [tN, z, t]),
        (0, d.useEffect)(() => {
          !t0 || tR.current || (t0.target.slideId !== nI && (t4(null), nl(null), nr(null), t1(null)))
        }, [t0, nI]),
        (0, d.useEffect)(() => {
          let e = t7.current
          if (null == e) return
          let t = n8.find((t) => t.annotationId === e.annotationId)
          tN && null != t && eu.slideIds.includes(t.target.slideId)
            ? t.target.slideId === nI && ((t7.current = null), n5(t, e.preview))
            : (t7.current = null)
        }, [tN, nI, n5, n8, eu]),
        (0, d.useEffect)(
          () => () => {
            t7.current = null
          },
          [t, W?.annotation?.artifactKey],
        ),
        (0, B.o)(
          () => () => {
            rv()
          },
          [rv, nI],
        ),
        (0, d.useEffect)(() => {
          null != nc.current && nc.current !== nI && rj()
        }, [rj, nI]),
        (0, d.useEffect)(() => {
          let e = ev.current,
            t = eE.current,
            n = tQ && H ? "crosshair" : tN && !tF && z && !t0 ? eq.Gz : ""
          return (
            e && (e.style.cursor = n),
            t && (t.style.cursor = n),
            () => {
              ;(e && e.style.cursor === n && (e.style.cursor = ""), t && t.style.cursor === n && (t.style.cursor = ""))
            }
          )
        }, [t0, tN, tF, z, tQ, H]),
        (0, d.useEffect)(() => {
          if (!t0) return
          let e = (e) => {
            let t = e.target
            !(t instanceof Node) ||
              (0, eD.lN)(t6.current, t) ||
              (t instanceof HTMLElement && t.closest("[data-popcorn-annotation-marker='true']")) ||
              (t instanceof Element &&
                t.closest("[data-popcorn-annotation-refresh='true'], [data-popcorn-comment-create='true']")) ||
              ev.current?.contains(t) ||
              rF()
          }
          return (
            document.addEventListener("mousedown", e, !0),
            () => {
              document.removeEventListener("mousedown", e, !0)
            }
          )
        }, [t0, rF]),
        (function ({
          controller: e,
          runtime: t,
          snapshot: n,
          snapshotProp: r,
          layoutSnapshot: i,
          surfaceElement: l,
          overlayCanvasRef: a,
          textEditSession: o,
          overlayVersion: s,
          drawingMode: c,
          annotationMode: u,
        }) {
          let p = (0, d.useSyncExternalStore)(
              (e) => (0, e8.zY)(l, e),
              () => (0, e8.VA)(l, null),
              () => null,
            ),
            h = null == p ? void 0 : (0, e8.SB)(p),
            m = null == p ? void 0 : (0, e8.rO)(p, 0.12)
          ;(0, B.o)(() => {
            e.setSelectionOverlayOptions({ drawingMode: c, annotationMode: u, accentStroke: h, accentFill: m })
          }, [e, c, u, h, m])
          let f = (0, d.useRef)(r)
          f.current = r
          let g = (0, d.useCallback)(() => {
            let n = a.current
            if (!n) return
            let r = f.current ?? e.getSnapshot(),
              i = t.getLayoutSnapshot(),
              l = i.width,
              s = i.height,
              d =
                tS(
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
              m = `${s}px`
            ;(n.style.width !== h && (n.style.width = h), n.style.height !== m && (n.style.height = m))
            let g = n.getContext("2d")
            if (g) {
              if ((g.setTransform(c, 0, 0, c, 0, 0), g.clearRect(0, 0, l, s), !d || !r.selectedSlideFrame))
                return void o.setViewportTransform(null)
              o.drawViewportOverlay(g, { left: d.left, top: d.top, scale: d.scale })
            }
          }, [e, a, t, o])
          ;((0, B.o)(() => e.subscribeToViewportFrames(g), [e, g]),
            (0, B.o)(() => {
              g()
            }, [g, i.height, i.width, s, n.selectedSlideFrame, n.textEditState, n.textLayoutBlocks, o]))
        })({
          controller: t,
          runtime: n,
          snapshot: eu,
          snapshotProp: i,
          layoutSnapshot: nx,
          surfaceElement: ex,
          overlayCanvasRef: eE,
          textEditSession: rh,
          overlayVersion: td,
          drawingMode: H,
          annotationMode: z,
        }))
      let rV = (e) => {
          ;((ta.current = e ? { x: Math.round(e.x), y: Math.round(e.y) } : null),
            null == tl.current &&
              (tl.current = window.requestAnimationFrame(() => {
                tl.current = null
                let e = ta.current
                e ? t.setLocalAwarenessCursor(e, ts.current) : t.clearLocalAwarenessCursor()
              })))
        },
        r$ = (e, r) => {
          let i = n.getCamera(),
            l = rg.current
          if (l)
            return l.pointerId !== e.pointerId
              ? void 0
              : r
                ? ((l.latest = tK(e)), (l.ended = !0), (l.commit = r), tV(e, eM), void rb())
                : void rx()
          if ((r || (e4.current = null), tQ && H)) {
            if (eM.current !== e.pointerId) return
            let t = tC(e, ev.current, i, eu, nb)
            ;(rV(t), r && t && na.current?.append([t]))
            let n = na.current?.end() ?? null
            ;(tV(e, eM), (nu.current = null), r && rN(n))
            return
          }
          if (tN && z) {
            if (
              tF ||
              (null != eM.current && eM.current !== e.pointerId) ||
              (rV(tC(e, ev.current, i, eu, nb)), tV(e, eM), nr(null), nl(null), !r || !nn)
            )
              return
            let n = tC(e, ev.current, i, eu, nb)
            if (!n) return
            let l = (0, tb.UW)(nn.start, n),
              a = 6 > Math.hypot(n.x - nn.start.x, n.y - nn.start.y)
            if (a) {
              if (nn.clickedElementTarget) {
                switch (nn.draftClickAction) {
                  case "keep":
                  case "close":
                    rF()
                    return
                }
                let e = nn.clickedElementTarget,
                  r = (0, em.a6)({
                    snapshot: eu,
                    elementIds: [e.id],
                    primaryElementId: e.id,
                    frame: e.frame,
                    anchorPoint: n,
                  })
                if (!r) return
                ;(t.setHoveredElementId(null),
                  nt(!1),
                  "comment" === O
                    ? W?.annotation?.onCommentDraftOpen?.()
                    : W?.annotation?.onStart?.("annotation_mode_pointer", { annotationMode: z }),
                  (t8.current = !1),
                  t1({ mode: "create", intent: O, target: r, body: "" }))
                return
              }
              switch (nn.draftClickAction) {
                case "keep":
                case "close":
                  rF()
                  return
              }
            }
            let o = (0, em.Cz)({
              snapshot: eu,
              frame: a ? { left: n.x, top: n.y, width: 0, height: 0 } : l,
              anchorPoint: n,
              containedElements: a ? [] : n1,
            })
            if (!o) return
            ;("comment" === O
              ? W?.annotation?.onCommentDraftOpen?.()
              : W?.annotation?.onStart?.("annotation_mode_pointer", { annotationMode: z }),
              (t8.current = !1),
              t1({ mode: "create", intent: O, target: o, body: "" }))
            return
          }
          if (null != eM.current && eM.current !== e.pointerId) return
          let a = eF.current
          if (!a) return
          let o = tC(e, ev.current, i, eu, nb)
          if ((rV(o), tV(e, eM), "table" === a)) {
            let n = e5.current
            ;((eF.current = null),
              (e5.current = null),
              n &&
                t.tableEditing.interact(
                  r
                    ? { tableId: n, type: "pointer-up", point: o ?? void 0, shiftKey: e.shiftKey }
                    : { tableId: n, type: "pointer-cancel" },
                ),
              tA(tP && nq))
            return
          }
          if ("text" === a) {
            ;((eF.current = null), rh.pointerUp(), (e.currentTarget.style.cursor = "text"), tp(!0), tA(r && tP && nq))
            return
          }
          if ("marquee" === a) {
            ;((eF.current = null),
              (e5.current = null),
              (e7.current = null),
              (tt.current = !1),
              t.endSelectionMarquee({ commit: r }),
              tA(tP && nq))
            return
          }
          eF.current = null
          let s = e5.current,
            d = e7.current,
            c = tt.current || !!(o && d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 2),
            u = !!r && !c && null != s && !e9.current && !e.shiftKey && eu.textLayoutBlocks.some((e) => e.id === s),
            p = u && e3.current === s && 1 === eu.selectedElementIds.length && null != o
          if (
            ((e5.current = null),
            (e7.current = null),
            (tt.current = !1),
            c && ti(),
            rf({
              commit: r && !p,
              ...(o
                ? { nextPoint: o, shiftKey: e.shiftKey, snapSuppressed: e.altKey, altKey: e.altKey, ctrlKey: e.ctrlKey }
                : {}),
            }),
            p)
          ) {
            let t = e4.current?.count ?? 1
            ;(t >= 3
              ? rh.selectParagraphAtPoint(o)
              : 2 === t
                ? rh.selectWordAtPoint(o)
                : rh.tryPointerDown(o, { shiftKey: e.shiftKey, restrictToBlockId: s })) &&
              (rh.pointerUp(), (e.currentTarget.style.cursor = "text"), tp(!0))
          }
          ;((e3.current = u ? s : null), tA(null != s && tP && nq))
        },
        rH = (e) => {
          if (("Shift" !== e.key && "Alt" !== e.key) || (0, E.tr)(e.target) || rh.isActive()) return !1
          let r = rg.current
          if (r && !r.ended)
            return (
              (r.latest = { ...r.latest, shiftKey: e.shiftKey, altKey: e.altKey, ctrlKey: e.ctrlKey }),
              rb(),
              e.preventDefault(),
              !0
            )
          if ("element" !== eF.current && "table" !== eF.current) return !1
          let i = n.getCamera(),
            l = te.current
          if (!l) return !1
          let a = tC(l, ev.current, i, eu, nb)
          return (
            !!a &&
            ("table" === eF.current && e5.current
              ? t.tableEditing.interact({ type: "pointer-move", tableId: e5.current, point: a, shiftKey: e.shiftKey })
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
        rK = p && !z && !H,
        rq =
          !tF &&
          !p &&
          (tN || (W?.annotation?.canComment === !0 && tD)) &&
          !z &&
          !H &&
          "idle" === tk.kind &&
          "element" !== eu.activeInteractionKind &&
          !tL &&
          !t0 &&
          !eu.textEditState?.activeBlockId,
        rW = !tF && tN && (W?.annotation?.onDirectSubmit != null || W?.annotation?.onSubmit != null),
        rU = (e) => {
          if (tR.current || !nG || rM()) return
          let t = !z && W?.annotation?.enterModeOnContextualRequest === !0
          ;(t && V?.(!0),
            W?.annotation?.onStart?.(e, { annotationMode: z || t }),
            (t8.current = !1),
            t1({
              mode: "create",
              intent: "ask",
              placeholder: eu.inspector.selectedElement?.image?.isPlaceholder ? "Describe an image" : void 0,
              target: nG,
              body: "",
            }))
        },
        rG = (e) => {
          if (!tD || rM() || null != t3.current) return
          let t = nG ?? t_(eu)
          null != t &&
            (W?.annotation?.onCommentDraftOpen?.(),
            null != e && W?.annotation?.onStart?.(e, { annotationMode: z, intent: "comment" }),
            (t8.current = !1),
            t1({ mode: "create", intent: "comment", target: t, body: "" }))
        },
        r_ = (0, d.useRef)(rG)
      ;((r_.current = rG),
        (0, d.useImperativeHandle)(
          W?.annotation?.commentComposerRef,
          () => (tD ? { startComment: () => r_.current() } : null),
          [tD],
        ))
      let rX =
          nW && nG && (rW || null != nE.request || tD || null != n$)
            ? {
                creationRequest: nE.request,
                activeRequest: n$,
                askForEditLabel: W?.annotation?.askForEditLabel ?? W?.annotation?.getAskForEditLabel?.(),
                opensAnnotationEditor: W?.annotation?.enterModeOnContextualRequest,
                defaultSubmitMode: W?.annotation?.defaultCreateSubmitMode,
                savedSubmitDisabled: W?.annotation?.savedSubmitDisabled,
                onAskForEditShown: W?.annotation?.onAskForEditShown == null ? void 0 : nX,
                startAskChat: rW
                  ? (e) => {
                      tR.current ||
                        (W?.annotation?.enterModeOnContextualRequest
                          ? rU(e)
                          : W?.annotation?.onStart?.(e, { annotationMode: z }))
                    }
                  : void 0,
                submitAskChat: rW
                  ? (e, t, n) => {
                      if (!nG) return
                      let r = W?.annotation?.defaultCreateSubmitMode ?? "direct"
                      rz(n ? ("direct" === r ? "saved" : "direct") : r, t, e, {
                        mode: "create",
                        intent: "ask",
                        target: nG,
                        body: e,
                      })
                    }
                  : void 0,
                startComment: tD ? rG : void 0,
              }
            : null,
        rZ = (() => {
          if (
            t0?.mode === "create" &&
            "comment" === t0.intent &&
            Z &&
            W?.annotation?.canComment !== !1 &&
            W?.annotation?.createCommentThreads === !0
          )
            return W.annotation
        })(),
        rJ =
          t0?.mode === "create" && "ask" === t0.intent
            ? t0.placeholder
            : null != rZ && t0?.mode === "create" && "comment" === t0.intent
              ? (rZ.nativeFileCommentPlaceholder ?? "Add a comment")
              : void 0,
        rY = (() => {
          if (t0?.mode !== "create" || null == rZ) return
          let e = {
            value: t0.body,
            canAssignToChatGpt: rZ.canAssignToChatGpt,
            initialAssignedToChatGpt: !1,
            onChange: rB,
            onCancel: rP,
            onSubmit: ({ body: e, assignedToChatGpt: t, submitSource: n }) => {
              rz("direct", n, e, void 0, t)
            },
          }
          return null != rZ.renderCommentComposer
            ? rZ.renderCommentComposer(e)
            : (0, r.jsx)(ep.h, {
                mode: "create",
                canAssignToChatGpt: e.canAssignToChatGpt,
                renderInput: rZ.renderCommentInput,
                initialValue: e.value,
                labels: { heading: rZ.nativeFileCommentLabel, placeholder: rJ },
                onChange: e.onChange,
                onCancel: e.onCancel,
                onSubmit: (t) => (e.onSubmit(t), !0),
              })
        })(),
        rQ = (() => {
          if (null == t0) return
          if ("edit" === t0.mode) return t0.annotationId
          let { intent: e, target: t } = t0,
            n =
              "presentation-element-selection" === t.type
                ? t.elementIds.join(",")
                : [t.frame.left, t.frame.top, t.frame.width, t.frame.height].join(",")
          return `${e}:${t.slideId}:${t.type}:${n}`
        })()
      return (0, r.jsx)("div", {
        ref: eb,
        className: "relative flex h-full min-h-0 flex-col",
        style: { ...ey, ...("codex" === T ? M.y : void 0), backgroundColor: tU },
        children: (0, r.jsxs)("div", {
          ref: ev,
          "data-testid": "popcorn-presentation-stage",
          "data-popcorn-table-focus-owner": !0,
          tabIndex: 0,
          onCopy: (e) => {
            if (e.defaultPrevented || rh.isActive() || (0, E.tr)(e.target) || 0 === eu.selectedElementIds.length) return
            ew("copy")
            let n = t.getSnapshot(),
              r = n.slideIds[n.selectedSlideIdx]
            r &&
              (0, eZ.KC)(
                e,
                () => t.requestShapeClipboard(),
                (e) => t.requestShapeClipboardPng(e, r, n.presentationVersion),
              ).catch((e) => {
                console.error("Failed to copy presentation shapes", e)
              })
          },
          onCut: (e) => {
            e.defaultPrevented ||
              rh.isActive() ||
              (0, E.tr)(e.target) ||
              0 === eu.selectedElementIds.length ||
              ew("cut")
          },
          onPaste: (e) => {
            if (e.defaultPrevented || rh.isActive() || (0, E.tr)(e.target)) return
            ew("paste")
            let n = (0, eZ.fm)(e.clipboardData),
              r = e.clipboardData.getData("text/html"),
              i = e.clipboardData.getData("text/plain"),
              l = Array.from(e.clipboardData.files ?? [])
            if ((null === n && !r && !i && 0 === l.length) || (e.preventDefault(), e.stopPropagation(), !p)) return
            if (null !== n) return void t.dispatch({ kind: "paste-shapes", serialized: n })
            let a = eu.slideIds[eu.selectedSlideIdx],
              o = (e) => {
                let n = t.getSnapshot()
                0 !== e.length &&
                  n.slideIds[n.selectedSlideIdx] === a &&
                  t.dispatch({ kind: "paste-content", parts: e })
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
                    let a = await t(await (0, eJ.I)(l))
                    return { kind: "image", image: a }
                  } catch {
                    return n ? { kind: "text", html: "", plainText: n } : null
                  }
                }
              if (e.html && e.html.length <= e1.ri) {
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
            })({ html: r, plainText: i, files: l }, (e) => t.prepareImage(e))
              .then(o)
              .catch((e) => {
                ;(console.error("Failed to read presentation clipboard", e),
                  i && o([{ kind: "text", html: "", plainText: i }]))
              })
          },
          onKeyDown: (e) => {
            var r
            let i
            if (rH(e) || (0, E.tr)(e.target)) return
            if ((eC(e, { includeViewportActions: "0" !== e.key }), "Escape" === e.key && rw())) {
              ;(tA(tP && nq), e.preventDefault(), e.stopPropagation())
              return
            }
            if (
              tN &&
              !tF &&
              !t0 &&
              !H &&
              !e.repeat &&
              !e.nativeEvent.isComposing &&
              (e.metaKey || e.ctrlKey) &&
              !e.altKey &&
              e.shiftKey &&
              "x" === e.key.toLowerCase()
            ) {
              if (!nG) return
              ;(rU("ask_codex_shortcut"), e.preventDefault(), e.stopPropagation())
              return
            }
            if ("Escape" === e.key && H) {
              ;(K?.(!1), e.preventDefault())
              return
            }
            if (
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey &&
              !e.shiftKey &&
              0 === eu.selectedElementIds.length &&
              ("ArrowLeft" === e.key || "ArrowRight" === e.key || "ArrowUp" === e.key || "ArrowDown" === e.key)
            ) {
              ;(e.preventDefault(), rA("ArrowLeft" === e.key || "ArrowUp" === e.key ? -1 : 1))
              return
            }
            if ("Escape" === e.key && t0) {
              ;(rF(), e.preventDefault())
              return
            }
            if ("Escape" === e.key && z && !tF) {
              ;(V?.(!1), nl(null), e.preventDefault())
              return
            }
            if (
              ("/" === e.key || "ContextMenu" === e.key || ("F10" === e.key && e.shiftKey)) &&
              !rh.isActive() &&
              !z &&
              !H &&
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey
            ) {
              ;(tA(nW), nW && e.preventDefault())
              return
            }
            if ("Escape" === e.key && nU && !p) {
              ;(tA(!1), e.preventDefault())
              return
            }
            if (!p) {
              if (tH(e, n, eu, j)) return
              !(0, E.Ul)(e) ||
                z ||
                t0 ||
                H ||
                rh.isActive() ||
                !(eu.selectedElementIds.length > 0) ||
                ("Backspace" !== e.key && "Delete" !== e.key) ||
                j?.("delete-selection")
              return
            }
            if (z) return void tH(e, n, eu, j)
            if (
              H ||
              t0 ||
              ((r = e.nativeEvent),
              null == (i = (0, tW.Z)(r)) ||
                r.defaultPrevented ||
                0 === t.getSnapshot().selectedElementIds.length ||
                (r.preventDefault(),
                r.stopPropagation(),
                r.repeat || r.isComposing || 229 === r.keyCode || t.dispatch({ kind: "toggle-text-format", format: i }),
                !1))
            ) {
              if (rh.isActive()) {
                "Escape" === e.key && (rh.clear(), e.preventDefault())
                return
              }
              if (
                !(
                  !H &&
                  !t0 &&
                  (function (e, t, n) {
                    if (
                      !(0, E.Ul)(e, { allowShift: !0, requirePrimaryModifier: !0 }) ||
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
                  })(e, t, eu)
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
                      t && n.activateBlockEnd((0, tq.A)(r.tableId, t.cellId))
                    }
                  else
                    t.interact({
                      tableId: r.tableId,
                      type: "navigate",
                      direction: i,
                      extend: "Tab" !== e.key && e.shiftKey,
                    })
                  return (e.preventDefault(), !0)
                })(e, t.tableEditing, rh)
              ) {
                if (
                  !H &&
                  !t0 &&
                  null == eu.activeInteractionKind &&
                  "a" === e.key.toLowerCase() &&
                  (0, E.Ul)(e, { requirePrimaryModifier: !0 })
                ) {
                  ;(t.selectAllSlideElements(), e.preventDefault(), e.stopPropagation())
                  return
                }
                if (
                  "Escape" === e.key &&
                  !e.defaultPrevented &&
                  (0, E.Ul)(e) &&
                  e.target instanceof Element &&
                  e.currentTarget.contains(e.target) &&
                  o.isPanelOpen(er)
                ) {
                  ;(t.clearElementSelection(), o.closePanel(er), tA(!1), e.preventDefault(), e.stopPropagation())
                  return
                }
                if ("Escape" === e.key && nU) {
                  ;(tA(!1), e.preventDefault())
                  return
                }
                if ("Enter" === e.key && 1 === eu.selectedElementIds.length && eu.primarySelectedElementId) {
                  rh.activateBlockEnd(eu.primarySelectedElementId) && e.preventDefault()
                  return
                }
                if ("Backspace" === e.key || "Delete" === e.key) {
                  ;((0, E.Ul)(e) && eu.selectedElementIds.length > 0 && j?.("delete-selection"),
                    t.deleteSelectedElement() && e.preventDefault())
                  return
                }
                if (!e.metaKey && !e.ctrlKey && !e.altKey && eu.selectedElementIds.length > 0) {
                  let n = (0, E.pv)(e.key, e.shiftKey)
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
                if (tH(e, n, eu, j)) return
              }
            }
          },
          onKeyUp: (e) => {
            rH(e)
          },
          className: "relative min-h-0 flex-1 touch-none overflow-hidden outline-none",
          children: [
            (0, r.jsx)("div", { ref: L, className: "pointer-events-none absolute inset-0", style: nS }),
            (0, r.jsx)("div", {
              ref: ek,
              "data-testid": "popcorn-presentation-overlay-boundary",
              className: "pointer-events-none absolute inset-0",
              style: {
                top: nb.top ?? 0,
                right: Math.max(nb.right ?? 0, (nb.fitRightInset ?? 0) - 8),
                bottom: nb.bottom ?? 0,
                left: Math.max(nb.left ?? 0, F ?? 0, (nb.fitLeftInset ?? 0) - 8),
              },
            }),
            (0, r.jsx)("canvas", {
              ref: eI,
              "data-testid": "popcorn-presentation-canvas",
              className: (0, s.A)("absolute inset-0 h-full w-full select-none"),
            }),
            (0, r.jsx)("canvas", {
              ref: ej,
              "data-testid": "popcorn-presentation-worker-overlay",
              className: "pointer-events-none absolute inset-0 h-full w-full select-none",
            }),
            (0, r.jsx)(tG, {
              renderer: a,
              controller: t,
              snapshot: eu,
              viewport: ev,
              camera: ng,
              viewportInsets: nb,
              enabled: rK,
              textEditing: rh.isActive(),
              contextToolbarEligible: "context-menu" === nO.trigger && nW,
              selectionBoundsSource: nw,
              requestToolbar: () => tA(!0),
              children: (0, r.jsx)("canvas", {
                ref: eE,
                "data-testid": "popcorn-presentation-overlay",
                style: tu ? { cursor: "text" } : void 0,
                onPointerDown: (e) => {
                  0 === e.button &&
                    (null == eM.current || eM.current === e.pointerId) &&
                    (tr.current?.interrupt("replaced"), (tn.current = !1))
                  let r = n.getCamera()
                  if (
                    ((null == eM.current || eM.current === e.pointerId) &&
                      (te.current = { clientX: e.clientX, clientY: e.clientY }),
                    tp(!1),
                    tA(!1),
                    ev.current?.focus(),
                    ry(e, rw))
                  )
                    return
                  let i = tC(e, ev.current, r, eu, nb)
                  if (0 !== e.button || (e.ctrlKey && /Mac|iPhone|iPad/.test(navigator.platform))) {
                    e4.current = null
                    return
                  }
                  if (
                    (0 === e.button && i && (ts.current = Math.max(Date.now(), (ts.current ?? 0) + 1)), rV(i), tQ && H)
                  ) {
                    if (((e4.current = null), !i || null != eM.current)) return
                    ;(tO(e, eM),
                      (nu.current = () => {
                        t$(eE.current, eM)
                      }),
                      na.current?.start({ color: eK.$I, strokeWidth: 3, points: [i] }),
                      e.preventDefault(),
                      e.stopPropagation())
                    return
                  }
                  if (tN && !tF && !z && t3.current && !rF()) {
                    ;(e.preventDefault(), e.stopPropagation())
                    return
                  }
                  if (tN && z) {
                    if (tF) return
                    if (((e4.current = null), rM())) {
                      ;(e.preventDefault(), e.stopPropagation())
                      return
                    }
                    let n = t3.current,
                      l = n?.mode !== "create" ? "replace" : 0 === n.body.trim().length ? "close" : "keep"
                    if ((null != n && "replace" === l && t1(null), !i)) {
                      ;(null != n && "replace" !== l && rF(), nr(null), nl(null))
                      return
                    }
                    let a = (0, tb.yu)(eu.selectedSlideElementTargets, i, r.k)
                    t.setHoveredElementId(a)
                    let o = null == a ? null : (eu.selectedSlideElementTargets.find((e) => e.id === a) ?? null)
                    ;(nr({ pointerId: e.pointerId, start: i, draftClickAction: l, clickedElementTarget: o }),
                      tO(e, eM),
                      nl(null),
                      e.preventDefault(),
                      e.stopPropagation())
                    return
                  }
                  if (!i) {
                    ;((e4.current = null),
                      !Z || p || Y || el?.(),
                      rh?.isActive() && rh.clear(),
                      t.clearElementSelection(),
                      (e3.current = null))
                    return
                  }
                  if (!p) {
                    e4.current = null
                    let n = (0, tb.IW)(eu.hyperlinkTargets, i)
                    if (n) {
                      let t = { id: n.id, url: n.url, point: { x: i.x, y: i.y } }
                      ;(void 0 !== n.action && (t.action = n.action), G?.(t), e.preventDefault(), e.stopPropagation())
                      return
                    }
                    let l = (0, tb.yu)(eu.selectedSlideElementTargets, i, r.k)
                    if (
                      (t.setSelectedElementId(l),
                      tA(null != l && tL && nq),
                      tL && e.preventDefault(),
                      Z && !Y && W?.annotation?.createCommentThreads !== !0)
                    ) {
                      let e = l ? nL.find((e) => "slide" !== e.target.kind && e.target.elementId === l) : null
                      e ? et?.(e.threadId) : el?.()
                    }
                    ;((e3.current = null),
                      (eF.current = null),
                      (e5.current = null),
                      (e7.current = null),
                      (tt.current = !1))
                    return
                  }
                  let l = eu.selectionGeometry.primaryTarget,
                    a = (0, tb.mc)(eu),
                    o = rh.isActive(),
                    s = o ? null : (0, tb.TF)(eu, i, r.k),
                    d = rm(i),
                    c = 0 === e.button && d && !e.shiftKey ? (0, tf.cX)(e4.current, e, d) : null
                  if (
                    ((e4.current = c),
                    !s &&
                      d &&
                      o &&
                      (!e.shiftKey || d === eu.textEditState?.activeBlockId) &&
                      ((c?.count ?? 1) >= 3
                        ? rh.selectParagraphAtPoint(i)
                        : c?.count === 2
                          ? rh.selectWordAtPoint(i)
                          : rh.tryPointerDown(i, { shiftKey: e.shiftKey })))
                  ) {
                    ;(e.preventDefault(),
                      (e.currentTarget.style.cursor = "text"),
                      tp(!0),
                      (eF.current = "text"),
                      (e5.current = null),
                      (e7.current = null),
                      (tt.current = !1),
                      (e3.current = null),
                      tO(e, eM))
                    return
                  }
                  o && (rh.clear(), (e3.current = null))
                  let u = 1 === eu.selectedElementIds.length && l ? (0, tb.B5)([l], i, r.k) : null,
                    h = 1 === eu.selectedElementIds.length && l?.connector != null,
                    m = h ? null : s,
                    f = !o && !h && !m && (eu.selectedElementIds.length > 1 || !!l?.canRotate) && (0, tb.Ht)(a, i, r.k),
                    g = u
                      ? "from" === u.endpoint
                        ? "connector-from"
                        : "connector-to"
                      : m
                        ? "resize"
                        : f
                          ? "rotate"
                          : "move",
                    x =
                      u?.elementId ??
                      ("move" === g ? (0, tb.yu)(eu.selectedSlideElementTargets, i, r.k) : eu.primarySelectedElementId)
                  if (!x)
                    return ((e5.current = null), (e7.current = null), (tt.current = !1), o)
                      ? void t.clearElementSelection()
                      : (tO(e, eM),
                        (eF.current = "marquee"),
                        (e3.current = null),
                        void t.beginSelectionMarquee({ point: i, additive: e.shiftKey }))
                  if (
                    eu.inspector.slideElements.some((e) => e.id === x && "table" === e.kind) &&
                    "move" === g &&
                    !e.altKey &&
                    !e.shiftKey &&
                    (eu.selectedElementIds.length <= 1 || !eu.selectedElementIds.includes(x))
                  ) {
                    ;(t.setSelectedElementId(x),
                      t.tableEditing.interact({
                        tableId: x,
                        type: "pointer-down",
                        target: { kind: "move" },
                        point: i,
                        shiftKey: e.shiftKey,
                      }),
                      tO(e, eM),
                      (eF.current = "table"),
                      (e5.current = x))
                    return
                  }
                  ;(tA(tP && nq),
                    (eQ.current = "rotate" === g && a ? { elementId: x, corner: (0, e0.Aj)(a, i) } : null),
                    eQ.current && a && (e.currentTarget.style.cursor = (0, eN.SQ)(eQ.current.corner, a.rotation)),
                    t.beginElementInteraction({
                      elementId: x,
                      point: i,
                      mode: g,
                      corner: m,
                      preserveRatio: e.shiftKey,
                      toggleSelection: e.shiftKey,
                      snapSuppressed: e.altKey,
                      altKey: e.altKey,
                      ctrlKey: e.ctrlKey,
                    }),
                    tO(e, eM),
                    (eF.current = "element"),
                    tI({ kind: "dragging" }),
                    (e5.current = x),
                    (e9.current = e.shiftKey),
                    (e7.current = { x: e.clientX, y: e.clientY }),
                    (tt.current = !1),
                    ("move" !== g ||
                      e.altKey ||
                      e.shiftKey ||
                      e.ctrlKey ||
                      e.metaKey ||
                      (e3.current && e3.current !== x)) &&
                      (e3.current = null))
                },
                onPointerMove: (e) => {
                  "element" !== eF.current && (eQ.current = null)
                  let r = n.getCamera(),
                    i = rg.current
                  if (i) {
                    i.pointerId !== e.pointerId || i.ended || ((i.latest = tK(e)), rb(), e.preventDefault())
                    return
                  }
                  ;((null == eM.current || eM.current === e.pointerId) &&
                    (te.current = { clientX: e.clientX, clientY: e.clientY }),
                    eF.current && (0, tf.kx)(e4.current, e) && (e4.current = null))
                  let l = tC(e, ev.current, r, eu, nb)
                  if ((rV(l), tQ && H)) {
                    if (null != eM.current && eM.current !== e.pointerId) return
                    let t = e.nativeEvent.getCoalescedEvents?.(),
                      n = t?.length
                        ? t.flatMap((e) => {
                            let t = tC(e, ev.current, r, eu, nb)
                            return t ? [t] : []
                          })
                        : l
                          ? [l]
                          : []
                    ;(na.current?.append(n),
                      (e.currentTarget.style.cursor = "crosshair"),
                      e.preventDefault(),
                      e.stopPropagation())
                    return
                  }
                  if (tN && z) {
                    if (tF || (null != nn && null != eM.current && eM.current !== e.pointerId)) return
                    if (null != nn && l) {
                      nt(!0)
                      let t = Math.hypot(l.x - nn.start.x, l.y - nn.start.y) >= 6
                      if (t && t3.current) {
                        if (t9.current) {
                          ;(e.preventDefault(), e.stopPropagation())
                          return
                        }
                        ;((t8.current = !1), t1(null))
                      }
                      ;(nl(t ? { start: nn.start, current: l } : null), e.preventDefault(), e.stopPropagation())
                    }
                    if (!l) {
                      ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = ""))
                      return
                    }
                    nt(!0)
                    let n = (0, tb.yu)(eu.selectedSlideElementTargets, l, r.k)
                    ;(t.setHoveredElementId(n),
                      (e.currentTarget.style.cursor = t3.current ? "" : ev.current?.style.cursor || eq.Gz))
                    return
                  }
                  if ("table" === eF.current && l && e5.current)
                    return void t.tableEditing.interact({
                      tableId: e5.current,
                      type: "pointer-move",
                      point: l,
                      shiftKey: e.shiftKey,
                    })
                  if ("text" === eF.current) {
                    ;((e.currentTarget.style.cursor = "text"), l && rh.pointerMove(l))
                    return
                  }
                  if ("marquee" === eF.current) {
                    l && t.updateSelectionMarquee({ nextPoint: l })
                    return
                  }
                  if ("element" === eF.current && l) {
                    if (
                      (e7.current &&
                        Math.hypot(e.clientX - e7.current.x, e.clientY - e7.current.y) > 2 &&
                        (tt.current = !0),
                      e3.current && !tt.current)
                    )
                      return
                    ;(tt.current && ti(),
                      t.updateElementInteraction({
                        nextPoint: l,
                        shiftKey: e.shiftKey,
                        snapSuppressed: e.altKey,
                        altKey: e.altKey,
                        ctrlKey: e.ctrlKey,
                      }))
                    return
                  }
                  if (!p) {
                    if (l ? (0, tb.IW)(eu.hyperlinkTargets, l) : null) {
                      ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = "pointer"))
                      return
                    }
                    let n = l ? (0, tb.yu)(eu.selectedSlideElementTargets, l, r.k) : null
                    ;(t.setHoveredElementId(n), (e.currentTarget.style.cursor = ""))
                    return
                  }
                  if (!l) {
                    ;(tp(!1), t.setHoveredElementId(null), (e.currentTarget.style.cursor = ""))
                    return
                  }
                  let a = eu.selectionGeometry.primaryTarget,
                    o = (0, tb.mc)(eu),
                    s = rh.isActive(),
                    d = 1 === eu.selectedElementIds.length && a ? (0, tb.B5)([a], l, r.k) : null
                  if (d) {
                    ;(t.setHoveredElementId(d.elementId), (e.currentTarget.style.cursor = "crosshair"))
                    return
                  }
                  let c = 1 === eu.selectedElementIds.length && a?.connector != null,
                    u = c || s ? null : (0, tb.TF)(eu, l, r.k)
                  if (u) {
                    ;(t.setHoveredElementId(eu.primarySelectedElementId),
                      (e.currentTarget.style.cursor = (0, eN.WB)(u, o?.rotation) ?? ""))
                    return
                  }
                  if (tu && rm(l)) {
                    ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = "text"))
                    return
                  }
                  if (
                    (tu && tp(!1),
                    !s && o && !c && (eu.selectedElementIds.length > 1 || a?.canRotate) && (0, tb.Ht)(o, l, r.k))
                  ) {
                    ;(t.setHoveredElementId(eu.primarySelectedElementId),
                      (e.currentTarget.style.cursor = (0, eN.SQ)((0, e0.Aj)(o, l), o.rotation)))
                    return
                  }
                  if (s && rm(l)) {
                    ;(t.setHoveredElementId(null), (e.currentTarget.style.cursor = "text"))
                    return
                  }
                  let h = (0, tb.yu)(eu.selectedSlideElementTargets, l, r.k)
                  ;(t.setHoveredElementId(h), (e.currentTarget.style.cursor = h ? "move" : ""))
                },
                onPointerLeave: (e) => {
                  null == eM.current &&
                    (tp(!1),
                    rV(null),
                    t.setHoveredElementId(null),
                    (e.currentTarget.style.cursor = tQ && H ? "crosshair" : ""))
                },
                onPointerUp: (e) => r$(e, !0),
                onPointerCancel: (e) => r$(e, !1),
                onLostPointerCapture: (e) => {
                  eM.current === e.pointerId &&
                    r$(e, "element" === eF.current && "mouse" === e.pointerType && 0 === e.buttons)
                },
                onDoubleClick: (e) => {
                  let r = n.getCamera()
                  if (rg.current) return
                  if (tQ && H) return void e.preventDefault()
                  if (tN && z) {
                    if (tF) return
                    e.preventDefault()
                    return
                  }
                  let i = tC(e, ev.current, r, eu, nb)
                  !i ||
                    (!p && (0, tb.IW)(eu.hyperlinkTargets, i)) ||
                    ((0, tb.yu)(eu.selectedSlideElementTargets, i, r.k) && j?.("double-click-content"),
                    !p ||
                      e.shiftKey ||
                      (t.endSelectionMarquee({ commit: !1 }),
                      tr.current?.end(!1),
                      t.endElementInteraction({ commit: !1 }),
                      rm(i) && (rh.isActive() || rh.selectWordAtPoint(i)) && e.preventDefault()))
                },
                className: "absolute inset-0 h-full w-full touch-none",
              }),
            }),
            nv.slideRect &&
              (0, r.jsx)(
                e6,
                {
                  cursors: eu.awarenessCursors,
                  appearance: ef,
                  width: nx.width,
                  height: nx.height,
                  left: nv.slideRect.left,
                  top: nv.slideRect.top,
                  zoom: nv.slideRect.scale,
                  scopeKey: t,
                },
                `presence:${nI}`,
              ),
            !p ||
            H ||
            z ||
            v ||
            h ||
            C ||
            null != b ||
            null != k ||
            "marquee" === eu.activeInteractionKind ||
            !ny ||
            !t.tableEditing
              ? null
              : (0, r.jsx)(to, {
                  snapToPixels: !0,
                  source: t.tableEditing,
                  cameraSource: nC,
                  camera: { x: ny.left, y: ny.top, k: ny.scale },
                  textEditing: !!eu.textEditState?.activeBlockId,
                  onEditText: (e) => {
                    ;(ev.current?.focus({ preventScroll: !0 }), rh.tryPointerDown(e), rh.pointerUp())
                  },
                }),
            (0, r.jsx)(tz, {
              controller: t,
              snapshot: eu,
              containerRef: ev,
              currentSlideId: nI,
              stageSlideRect: ny,
              isEditing: p,
              imageInsertionMode: h,
              onImageInsertionModeChange: g,
              tableInsertionMode: C,
              onTableInsertionModeChange: S,
              shapeInsertion: b,
              onShapeInsertionChange: y,
              activeRequests: nj,
              chartInsertionPresetId: k,
              onChartInsertionPresetIdChange: I,
              onInsertElement: nE.commit,
              textInsertionMode: v,
              onTextInsertionModeChange: w,
            }),
            Z
              ? (0, r.jsx)(eR, {
                  comments: W?.annotation?.comments,
                  renderCommentInput: W?.annotation?.renderCommentInput,
                  threads: nL,
                  slideRect: nv.slideRect,
                  isEditing: p,
                  canComment: W?.annotation?.canComment ?? (p || tD),
                  canAssignToChatGpt: W?.annotation?.canAssignToChatGpt,
                  canDeleteOthersComments: W?.annotation?.canComment == null ? void 0 : p,
                  commentsSidebarOpen: Y,
                  renderCommentThread: tY,
                  annotationMarkerPositions: ro,
                  collisionBoundaryElement: eS ?? ev.current,
                  selectedCommentThreadId: Q,
                  hoveredCommentThreadId: ee,
                  viewerAuthor: W?.annotation?.commentAuthor,
                  assistantIcon: W?.annotation?.commentAssistantIcon,
                  pendingCommentThreadIds: W?.annotation?.pendingCommentThreadIds,
                  onSelectCommentThread: et,
                  onHoverCommentThread: en,
                  onClearCommentThread: el,
                  portalContainerElement: W?.annotation?.comments?.unified ? void 0 : ea,
                  ...((eo = W?.annotation),
                  {
                    onReply: (e, n) => {
                      let r = nL.find((t) => t.threadId === e)
                      return (
                        null != r &&
                        !!t.replyToCommentThread(e, n, eo?.commentAuthor) &&
                        (eo?.onCommentSubmitted?.(
                          (0, ep.I)(r, n, (0, em.jF)(r.target, r.markerPoint), eo?.canAssignToChatGpt),
                        ),
                        !0)
                      )
                    },
                    onResolve: (e) =>
                      eo?.comments?.unified === !0
                        ? t.resolveCommentThreadAndWait(e, eo.commentAuthor)
                        : t.resolveCommentThread(e),
                    onReopen: (e) => {
                      t.reopenCommentThread(e)
                    },
                    onDeleteThread: (e) => {
                      t.deleteCommentThread(e)
                    },
                    onToggleReaction: (e, n, r) => {
                      t.toggleCommentReaction(e, n, r, eo?.commentAuthor)
                    },
                    onDeleteComment: (e, n) => {
                      t.deleteThreadComment(e, n)
                    },
                    onEditComment: (e, n, r) => t.editThreadComment(e, n, r),
                  }),
                })
              : null,
            Z && nN
              ? (0, r.jsx)(eL.ME, {
                  bounds: nN,
                  borderWidthPx: 3,
                  fillColor: "rgba(51, 156, 255, 0.22)",
                  testId: `popcorn-presentation-comment-target-highlight-${nF}`,
                })
              : null,
            rp.length > 0
              ? (0, r.jsx)(ez.i, {
                  testId: "popcorn-presentation-drawing-overlay",
                  strokes: rp.flatMap((e) => e.strokes),
                  projectPoint: rR,
                  clipBounds: nZ,
                })
              : null,
            no.length > 0
              ? (0, r.jsx)(ez.i, {
                  testId: "popcorn-presentation-drawing-draft-overlay",
                  strokes: no,
                  projectPoint: rR,
                  clipBounds: nZ,
                })
              : null,
            (0, r.jsx)(eU, {
              ref: na,
              testId: "popcorn-presentation-drawing-active-overlay",
              projectPoint: rR,
              clipBounds: nZ,
            }),
            ra.map(({ annotation: e, bounds: t, stackIndex: n }) => {
              let i = (0, eL.Ky)(t, "top-right", n)
              return (0, r.jsxs)(
                "div",
                {
                  children: [
                    (0, r.jsx)(eL.ME, {
                      bounds: t,
                      testId: `popcorn-presentation-annotation-overlay-${e.annotationId}`,
                    }),
                    (0, r.jsx)(eL.oN, {
                      testId: `popcorn-presentation-annotation-marker-${e.annotationId}`,
                      position: i,
                      selected: t2 === e.annotationId || (t0?.mode === "edit" && t0.annotationId === e.annotationId),
                      title: e.label,
                      onMouseEnter: () => {
                        t4(e.annotationId)
                      },
                      onMouseLeave: () => {
                        t4((t) => (t === e.annotationId ? null : t))
                      },
                      onFocus: () => {
                        t4(e.annotationId)
                      },
                      onBlur: () => {
                        t4((t) => (t === e.annotationId ? null : t))
                      },
                      onClick: () => {
                        W?.annotation?.defaultCreateSubmitMode !== "direct" && re(e.annotationId)
                      },
                    }),
                  ],
                },
                e.annotationId,
              )
            }),
            rs
              ? (0, r.jsx)(eB.R, {
                  body: rs.annotation.body,
                  markerPosition: (0, eL.Ky)(rs.bounds, "top-right", rs.stackIndex),
                  containerElement: ev.current,
                  collisionBoundaryElement: eS,
                  testId: "popcorn-presentation-annotation-preview",
                })
              : null,
            n3
              ? (0, r.jsx)(eL.ME, {
                  bounds: n3,
                  testId: n0
                    ? "popcorn-presentation-annotation-region-preview"
                    : "popcorn-presentation-annotation-highlight",
                  borderWidthPx: n0 ? 1 : 2,
                })
              : null,
            rd.map((e) => {
              let t = (0, em.FB)(
                {
                  type: "presentation-element-selection",
                  slideId: nI,
                  slideIndex: eu.selectedSlideIdx,
                  slideLabel: nT,
                  elementIds: [e.elementId],
                  primaryElementId: e.elementId,
                  frame: e.frame,
                },
                nv.slideRect,
              )
              return t
                ? (0, r.jsx)(
                    eL.ME,
                    {
                      bounds: t,
                      borderWidthPx: 0.5,
                      fillColor: "transparent",
                      shadow: !1,
                      testId: `popcorn-presentation-annotation-region-contained-${e.elementId}`,
                    },
                    e.elementId,
                  )
                : null
            }),
            tN && z && t0?.mode === "create" && ed
              ? "comment" === t0.intent
                ? (0, r.jsx)(eP.j, {
                    variant: "bubble",
                    inert: !0,
                    "aria-hidden": !0,
                    tabIndex: -1,
                    "data-testid": "popcorn-presentation-annotation-draft-marker",
                    author: W?.annotation?.commentAuthor,
                    position: (0, eL.Ky)(ed),
                  })
                : (0, r.jsx)(eL.oN, {
                    testId: "popcorn-presentation-annotation-draft-marker",
                    position: (0, eL.Ky)(ed),
                    draft: !0,
                  })
              : null,
            rq && nD && nG
              ? (0, r.jsx)(eL.mL, {
                  bounds: nD,
                  containerElement: ev.current,
                  collisionBoundaryElement: eS,
                  askForEditIcon: W?.annotation?.askForEditIcon,
                  assistantIcon: W?.annotation?.commentAssistantIcon,
                  label: W?.annotation?.askForEditLabel ?? W?.annotation?.getAskForEditLabel?.(),
                  shortcutScopeElement: ev.current,
                  testId: "popcorn-presentation-ask-for-edit-button",
                  onClick: tN ? rU : void 0,
                  onShown: W?.annotation?.onAskForEditShown == null ? void 0 : nX,
                  onCommentClick: tD ? () => rG("ask_codex_button") : void 0,
                })
              : null,
            !tF && t0?.target.slideId === nI && rl
              ? (0, r.jsx)(
                  eD.k8,
                  {
                    ref: t6,
                    anchorBounds: rl,
                    containerElement: ev.current,
                    collisionBoundaryElement: eS,
                    portalContainerElement:
                      null != rY && W?.annotation?.comments?.unified ? ev.current?.ownerDocument.body : ea,
                    mode: t0?.mode ?? "create",
                    allowDirectSubmitOnEdit: W?.annotation?.allowDirectSubmitOnEdit,
                    defaultCreateSubmitMode: W?.annotation?.defaultCreateSubmitMode,
                    savedSubmitDisabled: W?.annotation?.savedSubmitDisabled,
                    dictationControls: W?.annotation?.dictationControls,
                    placeholder: rJ,
                    isComment: null != rZ && ((t0?.mode === "create" && "comment" === t0.intent) || null != rY),
                    commentComposer: rY,
                    nativeFileCommentLabel: rZ?.nativeFileCommentLabel,
                    value: t0?.body ?? "",
                    onChange: rB,
                    onCancel: rP,
                    onEscape: rF,
                    onDelete: () => {
                      tR.current ||
                        rM() ||
                        (t0?.mode === "edit" &&
                          (rt(t0.annotationId), t4((e) => (e === t0.annotationId ? null : e)), rE()))
                    },
                    onDictationBusyChange: rT,
                    onSubmit: rz,
                  },
                  null != rY ? rQ : void 0,
                )
              : null,
            (0, r.jsx)(eY, {
              containerRef: ev,
              contextKey: nA,
              enabled: p && eh.insert.includes("image"),
              onDropImages: async (e, r, i) => {
                let l = tC(r, ev.current, n.getCamera(), eu, n.getLayoutSnapshot().viewportInsets)
                if (!l) return
                let a = await Promise.all(e.map(async (e) => t.prepareImage(await (0, eJ.I)(e), i))),
                  o = t.getSnapshot()
                i.aborted ||
                  o.slideIds[o.selectedSlideIdx] !== nI ||
                  (w?.(!1),
                  g?.(!1),
                  S?.(!1),
                  I?.(null),
                  t.setChartInsertionPreview(null),
                  y?.(null),
                  V?.(!1),
                  K?.(!1),
                  a.forEach((e, n) => {
                    t.dispatch({ kind: "insert-image", ...e, center: { x: l.x + 24 * n, y: l.y + 24 * n } })
                  }),
                  n.focus())
              },
            }),
            R && ny
              ? (0, r.jsx)(tj, {
                  controller: t,
                  runtime: n,
                  slideId: nI,
                  isEditing: p,
                  isExpanded: th,
                  onExpandedChange: tm,
                  onHeightChange: nP,
                  visible: N,
                  focusViewportInsets: D,
                })
              : null,
            l.length > 0
              ? (0, r.jsx)("div", {
                  className: "pointer-events-none absolute inset-0 z-30",
                  children: l.map((e) =>
                    (0, r.jsx)(
                      "div",
                      {
                        className: "pointer-events-none absolute inset-0",
                        children: e.render({
                          controller: t,
                          snapshot: nv,
                          selectionBounds: nD,
                          selectionBoundsSource: i ? void 0 : nw,
                          collisionBoundaryElement: eS,
                          panelControls: o,
                          isEditing: p,
                          canEditSelection: rK,
                          editToolbarRequested:
                            nU && (!eu.textEditState?.activeBlockId || !0 === e.supportsTextSelection),
                          floatingBar: nO,
                          dismissEditToolbar: rI,
                          focusStage: rC,
                          panViewportBy: rS,
                          createViewportFitTransition: rk,
                          shortcutScopeElement: ev.current,
                          selectionActions: rX,
                        }),
                      },
                      e.id,
                    ),
                  ),
                })
              : null,
            W?.reviewBar != null &&
              (0, r.jsx)(eW.p, {
                viewportInsets: nS,
                children:
                  "function" == typeof W.reviewBar
                    ? W.reviewBar({
                        annotationMode: z,
                        isAnnotationInteractionActive: null != t0 || (tN && z && null != nn),
                        onAnnotationsSubmitted: rL,
                        onExitAnnotationMode: (e) => !!rF(e) && (V?.(!1), !0),
                      })
                    : W.reviewBar,
              }),
          ],
        }),
      })
    }
    var tY = n("YLKE")
    function tQ({ controller: e, anchor: t, portalContainer: n, onSelect: i, onClose: l }) {
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
        (0, r.jsxs)(tY.bL, {
          open: !0,
          onOpenChange: (e) => !e && l(),
          children: [
            (0, r.jsx)(tY.Mz, { virtualRef: { current: f ?? t } }),
            (0, r.jsx)(tY.ZL, {
              container: n,
              children: (0, r.jsx)(tY.UC, {
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
                        children: s?.map((t) => (0, r.jsx)(t0, { controller: e, template: t, onSelect: i }, t.id)),
                      }),
              }),
            }),
          ],
        })
      )
    }
    function t0({ controller: e, template: t, onSelect: n }) {
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
                  children: (0, r.jsx)(I.EV, { className: "size-6" }),
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
    function t1(e) {
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
    var t2 = n("D34W"),
      t4 = n("XLmx")
    class t3 {
      #eS
      #ek
      #eI
      #ej = !1
      #eE = null
      #eM = null
      #eA = null
      #eT = null
      #eP = !1
      #eL = !1
      #eF = { width: 0, height: 0 }
      #eR = 0
      #L = { left: 0, top: 0, right: 0, bottom: 0 }
      #eN = { selectedSlideIdx: 0, selectedSlideFrame: null, zoom: 1, camera: null }
      #eD = null
      #ez = null
      #eB = null
      #eO = null
      #eV = new Set()
      #e$ = { width: 0, height: 0, viewportInsets: { left: 0, top: 0, right: 0, bottom: 0 } }
      constructor() {
        this.#eS = new t2.P({
          enabled: !0,
          initialCamera: { x: 0, y: 0, k: 1 },
          minZoom: 0.01,
          maxZoom: 64,
          getViewportSize: () => ({ width: this.#eF.width, height: this.#eF.height }),
          getWorldSize: () => {
            if (this.#eN.gridLayout) return this.#eN.gridLayout.bounds
            let e = this.#eH()
            return e
              ? (0, G.c8)({
                  viewport: { width: this.#eF.width, height: this.#eF.height },
                  frame: e,
                  camera: this.#eS.getCamera(),
                  viewportInsets: this.#L,
                  contentBottomInset: this.#eR,
                }).worldSize
              : { width: this.#eF.width, height: this.#eF.height }
          },
          requestDraw: () => {
            this.#ez?.(this.#eS.getCamera())
          },
          onWheelPan: (e) => this.#eK(e),
          projectZoom: ({ sourceCamera: e, sourceScreen: t, targetScreen: n, nextZoom: r }) => {
            if (this.#eN.gridLayout) {
              let i = (0, t4.Cc)(r)
              return { x: n.x - ((t.x - e.x) / e.k) * i, y: n.y - ((t.y - e.y) / e.k) * i, k: i }
            }
            let i = this.#eH()
            if (!i) return { ...e, k: r }
            let l = { width: this.#eF.width, height: this.#eF.height }
            return (0, G.we)({
              sourceCamera: e,
              sourceScreen: t,
              targetScreen: n,
              nextZoom: r,
              viewport: l,
              frame: i,
              viewportInsets: this.#L,
              contentBottomInset: this.#eR,
            })
          },
          clampCamera: (e) => {
            if (this.#eN.gridLayout) return { ...e, k: (0, t4.Cc)(e.k) }
            let t = this.#eH()
            return t
              ? (0, G.TQ)({
                  camera: e,
                  viewport: { width: this.#eF.width, height: this.#eF.height },
                  frame: t,
                  viewportInsets: this.#L,
                  contentBottomInset: this.#eR,
                })
              : e
          },
          onCameraSettled: (e) => {
            let t = this.#eH()
            t &&
              this.#eD?.({
                camera: e,
                zoom: this.#eN.gridLayout
                  ? e.k / this.#eq().k
                  : (0, G.L2)({
                      camera: e,
                      viewport: { width: this.#eF.width, height: this.#eF.height },
                      frame: t,
                      viewportInsets: this.#L,
                    }),
              })
          },
        })
      }
      start() {
        this.#ej ||
          ((this.#ej = !0),
          (0, _.ensurePopcornPresentationRenderDepsLoaded)().then(() => {
            this.#ej && ((this.#eP = !0), this.scheduleLayoutSync())
          }))
      }
      attachHost(e) {
        if (this.#eE === e || (this.#eW(), (this.#eE = e), this.#eS.attach(e), !e)) return
        let t = e.ownerDocument.defaultView
        ;(this.#eU(t ? this.#eI?.(t) : void 0),
          "u" > typeof ResizeObserver &&
            ((this.#eM = new ResizeObserver((t) => {
              let n = t[0]
              this.scheduleLayoutSync(n ? U(e, n) : null)
            })),
            this.#eM.observe(e)),
          window.addEventListener("resize", this.#eG),
          this.scheduleLayoutSync())
      }
      getCamera() {
        return this.#eS.getCamera()
      }
      setGestureObserverFactory(e) {
        if (this.#eI === e) return
        this.#eI = e
        let t = this.#eE?.ownerDocument.defaultView
        this.#eU(t ? e?.(t) : void 0)
      }
      #eU(e) {
        this.#ek !== e &&
          (this.#eS.setGestureObserver(void 0),
          this.#ek?.dispose(),
          (this.#ek = e),
          this.#eS.setGestureObserver(e?.onGesture))
      }
      recordPresentedCamera(e) {
        this.#eE && this.#ek?.onPresented(e)
      }
      adoptPresentedCamera(e) {
        this.#eS.setCamera(e, { notify: !1, requestDraw: !1 })
      }
      focus() {
        this.#eE?.focus({ preventScroll: !0 })
      }
      hasInitializedCamera() {
        return this.#eL
      }
      subscribeToCameraChanges(e) {
        return this.#eS.subscribeToCameraChanges(e)
      }
      subscribeToLayoutChanges(e) {
        return (
          this.#eV.add(e),
          () => {
            this.#eV.delete(e)
          }
        )
      }
      getLayoutSnapshot() {
        return this.#e$
      }
      zoomTo(e, t) {
        let n = this.#e_(e)
        if (!n) return
        let r = (0, G.Ze)({ width: this.#eF.width, height: this.#eF.height }, this.#L)
        this.#eS.zoomTo(n.k, {
          ...t,
          screenX: t?.screenX ?? r.left + r.width / 2,
          screenY: t?.screenY ?? r.top + r.height / 2,
        })
      }
      panByScroll(e, t) {
        this.#eS.panByScroll(e, t)
      }
      fitToViewport(e = 1) {
        let t = this.#e_(e)
        t && this.#eS.setCamera(t, { settled: !0 })
      }
      createFitToViewportTransition(e) {
        let t = this.#eH(),
          n = this.#e_(1)
        if (!t || !n || this.#eF.width <= 0 || this.#eF.height <= 0) return null
        let r = this.getCamera(),
          i = e?.zoomOutOnly && n.k > r.k ? this.#e_(r.k / n.k) : n
        if (!i) return null
        let l = this.#eN.gridLayout?.bounds,
          a = { x: (l?.left ?? 0) + (l?.width ?? t.width) / 2, y: (l?.top ?? 0) + (l?.height ?? t.height) / 2 }
        return (e) => {
          let t = Math.max(0, Math.min(1, e))
          this.#eS.setCamera((0, tk.IV)(r, i, t, a), { settled: 1 === t })
        }
      }
      setOnCameraSettled(e) {
        this.#eD = e
      }
      setOnCameraChanged(e) {
        this.#ez = e
      }
      setOnNavigateSlide(e) {
        this.#eB = e
      }
      setContentBottomInset(e) {
        this.#eR = Math.max(0, e)
      }
      getContentBottomInset() {
        return this.#eR
      }
      setViewportInsets(e) {
        let t = this.#L
        ;(0, G.Zh)(t, e) ||
          ((this.#L = { ...e }),
          this.#eL &&
            this.#eX(this.#eN, this.#eN, {
              viewportChanged: !0,
              previousViewport: { width: this.#eF.width, height: this.#eF.height },
              previousViewportInsets: t,
            }),
          this.#eZ(),
          this.scheduleLayoutSync())
      }
      setViewState(e, t = this.#L) {
        let n = this.#eN,
          r = this.#L,
          i = !(0, G.Zh)(r, t)
        ;((this.#eN = e),
          (this.#L = { ...t }),
          this.#eX(n, e, i ? { viewportChanged: !0, previousViewport: this.#eF, previousViewportInsets: r } : void 0),
          i && (this.#eZ(), this.scheduleLayoutSync()))
      }
      dispose() {
        ;((this.#ej = !1),
          null != this.#eA && (cancelAnimationFrame(this.#eA), (this.#eA = null)),
          this.#eW(),
          this.#eS.destroy())
      }
      scheduleLayoutSync(e) {
        ;(e && (this.#eT = e),
          this.#eP &&
            (null != this.#eA && cancelAnimationFrame(this.#eA),
            (this.#eA = requestAnimationFrame(() => {
              ;((this.#eA = null), this.#eJ())
            }))))
      }
      #eG = () => {
        this.scheduleLayoutSync()
      }
      #eK(e) {
        let t = this.#eH(),
          n = (0, G.Ze)(this.#eF, this.#L),
          { k: r } = this.#eS.getCamera()
        if (
          !this.#eB ||
          !this.#eL ||
          !t ||
          this.#eN.gridLayout ||
          t.width * r > n.width ||
          t.height * r > n.height ||
          (0, E.tr)(e.target)
        )
          return ((this.#eO = null), !1)
        if (e.shiftKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return !0
        let i =
            e.deltaY *
            (e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? n.height : 1),
          l = Math.sign(i),
          a = this.#eO
        return (
          (!a || e.timeStamp - a.time >= 200 || l !== a.direction) &&
            ((a = { time: e.timeStamp, delta: 0, direction: l, navigationTime: null }), (this.#eO = a)),
          (a.time = e.timeStamp),
          (a.delta += i),
          Math.abs(a.delta) >= 40 &&
            (null == a.navigationTime || e.timeStamp - a.navigationTime >= 200) &&
            ((a.navigationTime = e.timeStamp), (a.delta = 0), this.#eB?.(l > 0 ? 1 : -1)),
          !0
        )
      }
      #eW() {
        ;(this.#eM && (this.#eM.disconnect(), (this.#eM = null)),
          this.#eE && window.removeEventListener("resize", this.#eG),
          (this.#eE = null),
          (this.#eO = null),
          (this.#eT = null),
          this.#eS.attach(null),
          this.#eU(void 0))
      }
      #eJ() {
        let e = this.#eE
        if (!e) return
        let t = this.#eF
        ;((this.#eF = W(e, this.#eT)), this.#eZ())
        let n = t.width !== this.#eF.width || t.height !== this.#eF.height
        ;(n || !this.#eL) &&
          this.#eX(this.#eN, this.#eN, { viewportChanged: n, previousViewport: { width: t.width, height: t.height } })
      }
      #eZ() {
        let e = this.#e$,
          t = { width: this.#eF.width, height: this.#eF.height, viewportInsets: { ...this.#L } }
        if (!(e.width === t.width && e.height === t.height && (0, G.Zh)(e.viewportInsets, t.viewportInsets)))
          for (let e of ((this.#e$ = t), this.#eV)) e()
      }
      #eH() {
        return this.#eN.selectedSlideFrame
      }
      #e_(e) {
        let t = this.#eH()
        return t
          ? this.#eN.gridLayout
            ? this.#eq(e)
            : (0, G.nX)({ viewport: this.#eF, frame: t, zoomFactor: e, viewportInsets: this.#L })
          : null
      }
      #eq(e = 1) {
        return (0, tw.t6)(this.#eF, this.#eN.gridLayout.bounds, this.#L, e)
      }
      #eX(e, t, n) {
        let r = t.selectedSlideFrame
        if (!r || this.#eF.width <= 0 || this.#eF.height <= 0) return
        let i = n?.viewportChanged ?? !1,
          l = { width: this.#eF.width, height: this.#eF.height }
        if (t.gridLayout) {
          if (e.gridLayout && this.#eL)
            if (i) {
              let e = n?.previousViewport ?? l,
                r = this.#eS.getCamera(),
                i = (0, tw.t6)(e, t.gridLayout.bounds, n?.previousViewportInsets ?? this.#L),
                a = 0.01 > Math.abs(r.x - i.x) && 0.01 > Math.abs(r.y - i.y) && 1e-4 > Math.abs(r.k - i.k)
              this.#eS.setCamera(a ? this.#eq() : (0, t4.Nh)({ previousViewport: e, nextViewport: l, camera: r }))
            } else t.camera && this.#eS.setCamera(t.camera)
          else this.#eS.setCamera(t.camera ?? this.#eq(), { settled: null == t.camera })
          this.#eL = !0
          return
        }
        if (e.gridLayout) {
          ;(this.#eS.setCamera(
            t.camera ?? (0, G.nX)({ viewport: l, frame: r, zoomFactor: t.zoom, viewportInsets: this.#L }),
            { settled: null == t.camera },
          ),
            (this.#eL = !0))
          return
        }
        if (i && this.#eL) {
          let e = n?.previousViewport ?? l,
            t = this.#eS.getCamera(),
            i = (0, G.nX)({
              viewport: e,
              frame: r,
              zoomFactor: 1,
              viewportInsets: n?.previousViewportInsets ?? this.#L,
            }),
            a = 0.01 > Math.abs(t.x - i.x) && 0.01 > Math.abs(t.y - i.y) && 1e-4 > Math.abs(t.k - i.k)
          this.#eS.setCamera(
            a
              ? (0, G.nX)({ viewport: l, frame: r, zoomFactor: 1, viewportInsets: this.#L })
              : (0, G.iB)({
                  previousViewport: e,
                  nextViewport: l,
                  frame: r,
                  camera: t,
                  viewportInsets: this.#L,
                  previousViewportInsets: n?.previousViewportInsets,
                  contentBottomInset: this.#eR,
                }),
          )
          return
        }
        if (t.camera) {
          ;(this.#eS.setCamera(t.camera), (this.#eL = !0))
          return
        }
        ;(this.#eL &&
          e.selectedSlideIdx === t.selectedSlideIdx &&
          e.selectedSlideFrame?.width === t.selectedSlideFrame?.width &&
          e.selectedSlideFrame?.height === t.selectedSlideFrame?.height) ||
          (this.#eS.setCamera((0, G.nX)({ viewport: l, frame: r, zoomFactor: t.zoom, viewportInsets: this.#L }), {
            settled: !0,
          }),
          (this.#eL = !0))
      }
    }
    let t5 = [0.25, 0.5, 1, 1.5, 2],
      t6 = []
    function t8(e, t) {
      return (0, s.A)(
        "codex" === t ? "w-full gap-2" : "w-fit gap-2.5",
        "left" === e ? "flex-row" : "flex-col",
        "responsive" === e && "@[749px]/presentation-editor:flex-row",
      )
    }
    function t9(e) {
      return "left" === e ? "block" : "bottom" === e ? "hidden" : "hidden @[749px]/presentation-editor:block"
    }
    function t7(e) {
      return "codex" === e ? "w-28" : "w-40"
    }
    function ne(e) {
      return "codex" === e
        ? "w-[18px] min-w-[18px] shrink-0 pt-0.5 text-right text-[12px] leading-4 font-normal tabular-nums"
        : "pt-0.5 text-right text-sm font-semibold"
    }
    let nt = { borderRadius: "8px", boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.05)" },
      nn = "var(--presentation-selection-color)",
      nr = `color-mix(in srgb, ${nn} 10%, transparent)`,
      ni = `0px 0px 0px 1px ${nn}, 0px 2px 8px 0px color-mix(in srgb, ${nn} 16%, transparent), 0px 4px 16px 0px rgba(0, 0, 0, 0.05)`,
      nl = "var(--color-token-border-default, var(--color-border, rgba(13, 13, 13, 0.10)))",
      na = {
        ...nt,
        borderColor: nl,
        backgroundColor:
          "var(--popcorn-presentation-add-slide-background, var(--color-background-secondary-solid, #ededed))",
      },
      no = {
        borderRadius: "16px",
        border: "1px solid var(--color-token-border-default, rgba(13, 13, 13, 0.1))",
        backgroundColor: "var(--color-token-bg-secondary, rgba(250, 250, 250, 0.9))",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
      }
    function ns(e) {
      return e.shiftKey
        ? "range"
        : (/Mac|iPhone|iPad/.test(navigator.platform) ? e.metaKey : e.ctrlKey)
          ? "toggle"
          : "replace"
    }
    function nd(e) {
      let t = (0, N.j)(e.controller, () =>
        (function (e = {}) {
          return new et(e)
        })({ smartGuidesEnabled: (e.isEditing ?? !0) && (e.smartGuidesEnabled ?? !0) }),
      )
      return t ? (0, r.jsx)(nc, { ...e, controller: t }) : null
    }
    function nc({
      slideContextMenu: e,
      elementContextMenu: t,
      controller: n,
      editorCapabilities: i,
      formatPane: l,
      floatingBar: a,
      plugins: o = t6,
      slideThumbnailPlacement: k = "responsive",
      title: P = "presentation.pptx",
      fileMenuContent: R,
      headerRightContent: N,
      headerAnnotationIcon: V,
      headerCommentsIcon: $,
      headerSidebarIcon: H,
      headerEditingIcons: K,
      renderHeader: q,
      renderEditingControls: W,
      renderLayout: U,
      panelsInLayout: G = !1,
      renderDrawingToolCommands: X,
      headerCenterContent: Z,
      headerTitleContent: J,
      footerContent: Y,
      commentsSidebarContent: Q,
      renderCommentsSidebar: ee,
      renderCommentsSidebarHeader: et,
      renderCommentsSidebarEmptyAction: el,
      renderSidebarPanel: ea,
      renderThumbnailPanel: eo,
      commentsSidebarOpen: es,
      onCommentsSidebarOpenChange: ed,
      selectedCommentThreadId: ec,
      hoveredCommentThreadId: ep,
      onSelectedCommentThreadChange: eh,
      zoomToFitLabel: em,
      renderHeaderZoomControl: ex,
      onClose: eb,
      onInteractionAttempt: ey,
      onElementDragStart: ev,
      renderSlideThumbnailOverlay: eI,
      className: eE,
      topViewportInsetPx: eM = 0,
      fitTopInsetPx: eA = 0,
      bottomViewportInsetPx: eT = 0,
      fitLeftInsetPx: eP = 0,
      fitRightInsetPx: eL = 0,
      layoutPanelFitInsetPx: eF = 0,
      layoutPanelSide: eR = "right",
      viewportAlignmentRef: eN,
      enablePageNavigation: eD,
      theme: ez = "web",
      isEditing: eB = !0,
      showDisabledAddSlideButton: eO = !1,
      hideSpeakerNotes: eV = !1,
      reviewTools: e$,
      generation: eH,
      onHyperlinkClick: eK,
      onFirstStackedPageImageLoad: eq,
      annotationsEnabled: eW = !0,
      drawingAnnotationsEnabled: eU = !0,
      commentThreadsEnabled: eG = !0,
      smartGuidesEnabled: e_,
      artifactSearchEnabled: eX = !0,
      renderFindBar: eZ,
    }) {
      let eJ,
        eY,
        eQ = (0, g.lP)("presentation", l),
        e0 = (0, f.U)("presentation", a),
        e1 = eB && (e_ ?? !0)
      ;(0, d.useEffect)(() => {
        n.setSmartGuidesEnabled?.(e1)
      }, [n, e1])
      let e2 = (0, ei.Zo)(n, { includeViewport: !1 })
      ;(0, d.useEffect)(() => {
        !eX && e2.find.open && n.closeFind()
      }, [eX, n, e2.find.open])
      let e4 = (0, d.useCallback)((e) => n.subscribe(e), [n]),
        e3 = (0, d.useCallback)(() => n.getSnapshot().commentThreads, [n]),
        e5 = (0, d.useSyncExternalStore)(e4, e3, e3),
        e6 = (0, d.useMemo)(() => (0, g.WA)((0, x.lD)(x.mq, i), eQ), [i, eQ]),
        { panels: e8, stageOverlays: e9 } = (0, d.useMemo)(() => {
          let e = (function (e) {
            let t = [],
              n = []
            for (let r of e) (t.push(...(r.panels ?? [])), n.push(...(r.stageOverlays ?? [])))
            return { panels: t, stageOverlays: n }
          })(o)
          return { ...e, panels: e.panels.filter((e) => e.id !== er || e6.inspector.length > 0) }
        }, [o, e6]),
        e7 = eW && e$?.annotation?.enabled !== !1,
        [te, tt] = (0, d.useState)(!1),
        tn = e$?.annotation?.editingDisabled === !0,
        tr = e7 && e$?.annotation != null && !tn,
        [ti, tl] = (0, d.useState)(!1),
        [ta, to] = (0, d.useState)(!1),
        [ts, td] = (0, d.useState)(!1),
        [tc, tu] = (0, d.useState)(!1),
        [tp, th] = (0, d.useState)(!1),
        [tm, tf] = (0, d.useState)(null),
        [tg, tx] = (0, d.useState)(null),
        [tb, ty] = (0, d.useState)(eB)
      tb !== eB && (ty(eB), td(!1), tu(!1), th(!1), tf(null), tx(null))
      let tv = eU && e$?.drawing?.enabled !== !1,
        [tw, tC] = (0, d.useState)(!1),
        [tS, tk] = (0, d.useState)(0),
        [tI, tj] = (0, d.useState)(!1),
        tE = (0, d.useRef)(null),
        [tM, tA] = (0, d.useState)(null),
        [tT, tP] = (0, d.useState)(null),
        tL = (0, d.useRef)(null),
        tF = (0, d.useRef)(null),
        tR = (0, d.useMemo)(() => new t3(), []),
        tN = null != e2.gridLayout,
        [tD, tz] = (0, d.useState)(null),
        tO = null != tD ? "grid" === tD : tN
      ;(0, B.o)(() => {
        if (null == tD) return
        let e = !0,
          t = () => {
            e &&
              ((n.getSnapshot().gridLayout ? "grid" : "slide") === tD || null == n.getViewTransitionCamera()) &&
              tz(null)
          }
        t()
        let r = n.subscribe(t),
          i = tR.subscribeToCameraChanges(() => queueMicrotask(t))
        return () => {
          ;((e = !1), r(), i())
        }
      }, [n, tR, tD])
      let tV = (0, d.useCallback)(
          (e) => {
            ;(td(!1),
              tu(!1),
              th(!1),
              tf(null),
              tx(null),
              n.setChartInsertionPreview(null),
              tt(!1),
              tC(!1),
              n.dispatch(e),
              requestAnimationFrame(() => tR.focus()))
          },
          [n, tR],
        ),
        t$ = eG && null != Q,
        tH =
          e$?.annotation?.canComment !== !1 &&
          eG &&
          e$?.annotation?.createCommentThreads &&
          !0 !== e$.annotation.editingDisabled
            ? e$.annotation.commentAuthor
            : void 0,
        tK = (!eB && eG) || null != tH || t$,
        tq = e$?.annotation?.comments?.findMentionLabels
      ;((0, d.useEffect)(() => {
        n.setFindMentionLabels(tq)
      }, [n, tq]),
        (0, d.useEffect)(() => {
          n.setFindCommentsEnabled(tK)
        }, [n, tK]))
      let tW = es ?? tI,
        tG = (0, d.useCallback)(
          (e) => {
            ;(null == es && tj(e), ed?.(e))
          },
          [es, ed],
        ),
        t_ = tK && tW,
        tX = (0, d.useMemo)(() => {
          let e = new Map()
          if (!tK) return e
          for (let t of e5 ?? []) "resolved" !== t.status && e.set(t.slideId, (e.get(t.slideId) ?? 0) + 1)
          return e
        }, [e5, tK]),
        tZ = (0, d.useCallback)((e, t) => !ti && !(e < 0) && (n.setSelectedSlideIdx(e, t), !0), [ti, n])
      ;((0, d.useEffect)(() => {
        tK || (tj(!1), tA(null), tP(null), (tL.current = null))
      }, [tK]),
        (0, d.useEffect)(() => {
          ;(tP(null), td(!1), tu(!1), th(!1), tf(null))
        }, [e2.selectedSlideIdx]),
        (0, d.useEffect)(() => {
          ;(!eB || te || tw) && (td(!1), tu(!1), th(!1), tf(null))
        }, [eB, te, tw]),
        (0, d.useEffect)(() => {
          if (!tM) {
            tL.current = null
            return
          }
          let e = n.getSnapshot().commentThreads?.find((e) => e.threadId === tM),
            t = e2.slideIds[e2.selectedSlideIdx]
          if (e?.slideId === t) {
            tL.current = null
            return
          }
          tL.current !== tM && (tA(null), tP(null))
        }, [n, tM, e2.selectedSlideIdx, e2.slideIds]))
      let tY = (0, d.useCallback)(() => {
          ;((tL.current = null), tA(null), tP(null), eh?.(null))
        }, [eh]),
        t0 = (0, d.useCallback)(
          (e, t) => {
            let r = n.getSnapshot(),
              i = r.commentThreads?.find((t) => t.threadId === e)
            if (null == i) return
            let l = r.slideIds[r.selectedSlideIdx]
            if (i.slideId !== l) {
              if (ti) return
              tL.current = e
              let t = r.slideIds.indexOf(i.slideId)
              t < 0 ? tZ(i.slideIndex) : tZ(t)
            }
            ;("slide" === i.target.kind ? n.clearElementSelection() : n.setSelectedElementId(i.target.elementId),
              to(!1),
              tP(null),
              tA(e),
              eh?.(e, t))
          },
          [ti, n, eh, tZ],
        ),
        t2 = e2.find.activeComment,
        t4 = (0, d.useMemo)(() => {
          if (t2 && tK)
            return {
              ...t2,
              requestId: JSON.stringify([e2.find.focusToken, e2.find.query, t2.threadId, t2.messageId, t2.matchStart]),
            }
        }, [t2, tK, e2.find.focusToken, e2.find.query])
      ;((0, y.j)({
        target: t4,
        enabled: !ti,
        threads: e5,
        onOpen: () => tG(!0),
        onSelect: (e) => t0(e, { preserveFocus: !0 }),
      }),
        (0, y.j)({
          target: e$?.annotation?.commentTarget,
          enabled: tK && !ti && null == t4,
          threads: e5,
          onOpen: () => tG(!0),
          onSelect: t0,
        }),
        (0, d.useEffect)(() => {
          if (void 0 !== ec && ec !== tM) {
            if (null == ec) {
              ;(n.clearElementSelection(), tY())
              return
            }
            t0(ec)
          }
        }, [tY, n, ec, t0, tM]),
        (0, d.useEffect)(() => {
          e7 || tt(!1)
        }, [e7]),
        (0, d.useEffect)(() => {
          eB && tn && tt(!1)
        }, [tn, eB]),
        (0, d.useEffect)(() => {
          tv || tC(!1)
        }, [tv]),
        (0, d.useEffect)(() => {
          te && e7 && (n.clearElementSelection(), n.setHoveredElementId(null))
        }, [e7, te, n]),
        (0, d.useEffect)(() => {
          tw && tv && (n.clearElementSelection(), n.setHoveredElementId(null))
        }, [n, tv, tw]),
        (0, d.useEffect)(() => {
          if (!tw) return
          let e = (e) => {
            "Escape" === e.key && tC(!1)
          }
          return (
            window.addEventListener("keydown", e, !0),
            () => {
              window.removeEventListener("keydown", e, !0)
            }
          )
        }, [tw]))
      let t5 = (0, d.useCallback)(
          (e) => {
            e === er && tW && tG(!1)
          },
          [tW, tG],
        ),
        t8 = (0, D.$)(e8, t5),
        [t9, t7] = (0, d.useState)(104),
        [ne, nt] = (0, d.useState)(() => Object.fromEntries(e2.slideIds.map((e) => [e, null]))),
        [nn, nr] = (0, d.useState)(() => Object.fromEntries(e2.slideIds.map((e) => [e, null]))),
        [ni, nl] = (0, d.useState)(() => e2.slideIds),
        [na, no] = (0, d.useState)(null),
        ns = (0, d.useRef)(null),
        [nd, nv] = (0, d.useState)(null),
        [nw, nC] = (0, d.useState)(null),
        [nS, nk] = (0, d.useState)(!1),
        [nI, nj] = (0, d.useState)(null),
        [nE, nM] = (0, d.useState)(!1),
        [nA, nT] = (0, d.useState)(!1),
        [nP, nL] = (0, d.useState)(!1),
        [nF, nR] = (0, d.useState)(!1),
        [nN, nD] = (0, d.useState)(!1),
        nz = (0, d.useRef)(null),
        [nB, nO] = (0, d.useState)(null),
        nV = (0, d.useRef)(!1),
        n$ = (0, d.useRef)(!1),
        nH = (0, d.useRef)(!1),
        nK = (0, d.useRef)(null),
        nq = (0, d.useRef)(null),
        nW = (0, d.useRef)([]),
        nU = (0, d.useRef)([]),
        nG = (0, d.useRef)(null),
        n_ = (0, d.useRef)(null),
        nX = (0, d.useRef)(new Map()),
        nZ = (0, d.useRef)(new Map()),
        nJ = (0, d.useMemo)(() => new c(z.ar), [n])
      ;(0, d.useEffect)(
        () => () => {
          ;(nJ.cancelPending(), nX.current.clear())
        },
        [nJ],
      )
      let nY = (0, d.useRef)(eB),
        nQ = (0, d.useRef)(ne),
        n0 = (0, d.useRef)(nn),
        n1 = (0, d.useRef)(ni),
        n2 = (0, v.FR)((0, v.MS)(v.AN, { activationConstraint: { distance: 4 } })),
        n4 = (0, d.useMemo)(() => [w.Mk], []),
        n3 = "left" === k,
        n5 = "bottom" === k,
        n6 = "codex" === ez,
        n8 = n6 && eB,
        [n9, n7] = (0, d.useState)(0),
        re = n8 && !q ? 44 : 0
      null != q && null != U && (re = n9)
      let rt = "responsive" === k,
        rn =
          ni.length > 0 &&
          !tN &&
          rt &&
          !t$ &&
          !tr &&
          (!q || !eB) &&
          !e9.some((e) => e.visibleWhenReadOnly || e.supportsReadOnlySelection),
        rr = n6 && rt,
        ri = rr || (nA && !n5),
        rl = (0, d.useCallback)(() => {
          if (!rr) return !0
          let { slideRect: e, zoom: t } = n.getSnapshot()
          return !e || Math.abs(t - 1) >= 1e-4 || e.left >= 166
        }, [n, rr]),
        ra = (0, d.useSyncExternalStore)(e4, rl, rl)
      ;((eJ = rr ? (nA && ra ? "desktop" : "compact") : void 0),
        (0, B.o)(() => {
          rr && !n$.current && nM(nA)
        }, [nA, rr]))
      let ro = nE || nS || null != na || nI?.dataset.testid === "popcorn-presentation-add-slide",
        rs = eD ?? n6,
        rd = rr ? (0, M.os)(nE) : nA && (n3 || rt) ? 220 : 0,
        rc = !eV && (eB || e2.notesText.trim().length > 0),
        ru = "codex" === ez && rc && nN,
        rp = "codex" !== ez && rc && nN && t9 > 0 ? t9 + 40 + 11 : 0,
        rh = (0, d.useRef)([]),
        rm = (0, d.useCallback)(() => {
          let e = n.getSnapshot(),
            t = e8.filter(
              (t) =>
                (eB || t.visibleWhenReadOnly) &&
                t8.isPanelOpen(t.id) &&
                (t.isVisible?.({ controller: n, snapshot: e }) ?? !0),
            )
          return (
            (t.length !== rh.current.length || t.some((e, t) => e !== rh.current[t])) && (rh.current = t),
            rh.current
          )
        }, [n, eB, t8, e8]),
        rf = (0, d.useSyncExternalStore)(e4, rm, rm),
        rg = 0 === rf.length ? 0 : Math.max(...rf.map((e) => e.widthPx ?? 336)) + 16,
        rx = G ? 0 : rg,
        rb = G ? Math.max(0, t_ ? eF : Math.min(rg, eF)) : 0,
        ry = q ? 0.1 : void 0,
        rv = (0, d.useMemo)(
          () => ({
            left: rd,
            top: Math.max(0, eM),
            right: rx,
            bottom: rp + Math.max(0, eT),
            fitTopInset: re + Math.max(0, eA),
            fitLeftInset: Math.max(0, eP, "left" === eR ? rb : 0),
            fitRightInset: Math.max(0, eL, "right" === eR ? rb : 0),
            fitBottomInset: ru ? 156 : void 0,
            fitMargin: rr ? 24 : void 0,
            minimumZoomScale: ry,
          }),
          [eT, eP, eL, eA, re, eR, rp, eM, ru, rd, rr, rb, rx, ry],
        ),
        rw = (0, d.useMemo)(() => ({ ...rv, left: 0, fitBottomInset: void 0 }), [rv]),
        rC = tN ? rw : rv,
        rS = (0, d.useCallback)(() => {
          if (ti) return
          let e = tO ? "slide" : "grid"
          ;(n.setViewMode(e, "slide" === e ? rv : rw), tz(e), requestAnimationFrame(() => tR.focus()))
        }, [ti, n, tO, rv, rw, tR])
      ;((0, B.o)(() => {
        if (!nB) return
        let e = null,
          t = (e) => {
            let t = e >= (rr ? 820 : 749),
              n = rn && e > 0 && e <= 688,
              r = e >= 900
            ;(t !== nV.current && nk(!1),
              (nV.current = t),
              nT((e) => (e === t ? e : t)),
              nL((e) => !e || e),
              nR((e) => (e === n ? e : n)),
              nD((e) => (e === r ? e : r)))
          }
        if (
          (t(nB.clientWidth),
          "u" > typeof window &&
            "function" == typeof window.requestAnimationFrame &&
            (e = window.requestAnimationFrame(() => {
              t(nB.clientWidth)
            })),
          "u" < typeof ResizeObserver)
        )
          return () => {
            null != e && "function" == typeof window.cancelAnimationFrame && window.cancelAnimationFrame(e)
          }
        let n = new ResizeObserver((e) => {
          let n = e[0]
          t(n?.contentRect.width && n.contentRect.width > 0 ? n.contentRect.width : nB.clientWidth)
        })
        return (
          n.observe(nB),
          () => {
            ;(null != e && "function" == typeof window.cancelAnimationFrame && window.cancelAnimationFrame(e),
              n.disconnect())
          }
        )
      }, [rn, nB, k, rr]),
        (0, d.useEffect)(() => {
          ;((nQ.current = ne), (n0.current = nn))
        }, [nn, ne]),
        (0, d.useEffect)(() => {
          n1.current = ni
        }, [ni]),
        (0, B.o)(() => {
          if (null != nd) {
            var e, t
            let n, r, i
            return (
              (e = nW.current),
              (t = nK.current),
              (n = new Map(e.flatMap((e) => (e ? [[e.dataset.slideId, e]] : [])))),
              (r = t?.getBoundingClientRect()),
              (i = nd
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
        }, [nd]),
        (0, d.useEffect)(() => {
          ;(nl(e2.slideIds),
            nt((e) => {
              let t = {}
              for (let n of e2.slideIds) t[n] = e[n] ?? null
              return t
            }),
            nr((e) => {
              let t = {}
              for (let n of e2.slideIds) t[n] = e[n] ?? null
              return t
            }))
        }, [e2.slideIds]))
      let rk = (0, d.useMemo)(
          () => Object.fromEntries(e2.slideIds.map((e, t) => [e, e2.slideLabels[t] ?? `Slide ${t + 1}`])),
          [e2.slideIds, e2.slideLabels],
        ),
        rI = (0, d.useMemo)(() => Object.fromEntries(e2.slideIds.map((e, t) => [e, t])), [e2.slideIds]),
        rj = e2.slideIds[e2.selectedSlideIdx] ?? null,
        rE = (0, d.useMemo)(() => new Set(e2.hiddenSlideIds), [e2.hiddenSlideIds]),
        rM = rn && (!nP || nF)
      ;(0, d.useEffect)(() => {
        let e = nz.current
        if (rM && e) return tB(e, ez, n)
      }, [n, rM, ez])
      let rA =
          !rM && e7 && e$?.annotation?.onSubmit && !e$.annotation.savedSubmitDisabled
            ? (e) => tF.current?.requestChanges(e)
            : void 0,
        rT = !rM,
        rP = rs && e2.slideCount > 1 && !rM,
        rL = rT
          ? (0, r.jsx)(ny, {
              controller: n,
              stageRuntime: tR,
              usesCompactTitle: n6,
              isEditing: eB,
              zoomToFitLabel: em,
              renderHeaderZoomControl: ex,
              onInteractionAttempt: ey,
            })
          : null,
        rF = (0, d.useCallback)(
          (e, t) => {
            t$ ? tZ(e, t) && e !== e2.selectedSlideIdx && tY() : tZ(e, t)
          },
          [tY, t$, tZ, e2.selectedSlideIdx],
        ),
        rR = (0, d.useRef)(null)
      ;(0, d.useEffect)(() => {
        let e = rR.current
        if (!e || e.deletedSlideIds.some((e) => e2.slideIds.includes(e) || ni.includes(e))) return
        rR.current = null
        let t = e2.slideIds.indexOf(e.nextSlideId),
          n = nW.current[t]
        ;(n?.scrollIntoView?.({ block: "nearest", inline: "nearest" }), n?.focus())
      }, [ni, e2.slideIds])
      let rN = (0, d.useCallback)(
          (e) => {
            if (!eB || ti || e2.slideIds.length <= 1) return
            let t = e2.slideIds[e]
            if (!t) return
            let r = e2.selectedSlideIds.includes(t) ? e2.selectedSlideIds : [t],
              i = e2.slideIds.filter((e) => !r.includes(e))
            if (0 === i.length) return
            let l = rj && !r.includes(rj) ? rj : i[Math.min(e2.slideIds.indexOf(r[0]), i.length - 1)]
            ;((rR.current = { deletedSlideIds: r, nextSlideId: l }),
              r.length > 1 ? n.deleteSelectedSlides() : n.deleteSlide(e))
          },
          [ti, n, eB, rj, e2.slideIds, e2.selectedSlideIds],
        ),
        rD = (0, d.useCallback)(
          (e, t) => {
            !eB ||
              ti ||
              e < 0 ||
              (e2.selectedSlideIds.includes(e2.slideIds[e]) && e2.selectedSlideIds.length > 1
                ? n.setSelectedSlidesHidden(t)
                : n.setSlideHidden(e, t))
          },
          [ti, n, eB, e2.slideIds, e2.selectedSlideIds],
        ),
        rz = (0, d.useCallback)(
          (e) => {
            !eB ||
              ti ||
              e < 0 ||
              (e2.selectedSlideIds.includes(e2.slideIds[e]) && e2.selectedSlideIds.length > 1
                ? n.duplicateSelectedSlides()
                : (n.setSelectedSlideIdx(e), n.duplicateSelectedSlide()))
          },
          [ti, n, eB, e2.slideIds, e2.selectedSlideIds],
        ),
        rB = (0, d.useCallback)((e, t, n) => {
          let r = nW.current[e]
          ;(r !== t && (r && n_.current?.unobserve(r), t && n_.current?.observe(t)),
            (nW.current[e] = t),
            t && nG.current && n && nG.current.observe(t))
        }, []),
        rO = (0, d.useCallback)(() => {}, []),
        rV = (0, d.useCallback)(
          (e) => {
            if (ti) return
            let t = e ?? nz.current?.querySelector('[data-testid="popcorn-presentation-insert-button"]')
            t && nj((e) => (e === t ? null : t))
          },
          [ti],
        )
      ;(0, d.useEffect)(() => {
        nY.current !== eB && ((nY.current = eB), nJ.cancelPending(), nX.current.clear(), nZ.current.clear())
      }, [eB, nJ])
      let r$ = (0, d.useCallback)(
        async (e, t) => {
          let r = n.getSnapshot()
          if (e < 0 || e >= r.slideCount) return
          let i = r.slideIds[e]
          if (!i) return
          let l = t?.cacheKind === "stacked-page",
            a = l ? n0.current[i] : nQ.current[i],
            o = `${l ? "stacked-page" : "rail"}:${i}`,
            s = e2.displayColors,
            d = { colors: s, isEditing: eB, presentationVersion: r.presentationVersion },
            c = nX.current.get(o),
            u = nZ.current.get(o)
          ;(t?.force || null == a || u?.colors !== s || u.presentationVersion !== d.presentationVersion) &&
            (c?.colors !== s || c.isEditing !== eB || c.presentationVersion !== d.presentationVersion) &&
            (nX.current.set(o, d),
            nJ.schedule(
              o,
              async () => {
                try {
                  await (0, _.ensurePopcornPresentationRenderDepsLoaded)()
                  let e = n.getSnapshot()
                  if (
                    nX.current.get(o) !== d ||
                    e.displayColors !== s ||
                    e.presentationVersion !== d.presentationVersion ||
                    nY.current !== eB ||
                    !e.slideIds.includes(i)
                  )
                    return
                  let t = await n.requestSlideThumbnail(i, l ? { cssMaxPx: 960 } : void 0),
                    r = n.getSnapshot()
                  if (
                    nX.current.get(o) !== d ||
                    r.displayColors !== s ||
                    r.presentationVersion !== d.presentationVersion ||
                    nY.current !== eB ||
                    !r.slideIds.includes(i) ||
                    !t
                  )
                    return
                  ;(nZ.current.set(o, d), (l ? nr : nt)((e) => (e[i] === t ? e : { ...e, [i]: t })))
                } catch (e) {
                  ;(0, z.ar)(e)
                } finally {
                  nX.current.get(o) === d && nX.current.delete(o)
                }
              },
              null == a,
            ))
        },
        [n, eB, e2.displayColors, nJ],
      )
      ;((0, d.useEffect)(() => {
        let e = !0,
          t = () => {
            let e = n.getSnapshot(),
              t = e.slideIds[e.selectedSlideIdx]
            ;(r$(e.selectedSlideIdx, { force: !0 }),
              t && null != n0.current[t] && r$(e.selectedSlideIdx, { cacheKind: "stacked-page", force: !0 }))
          },
          r = n.getSnapshot().presentationVersion,
          i = () => {
            if (e) for (let e of (t(), [...nW.current, ...nU.current])) e && nG.current?.observe(e)
          }
        ;(nJ.replacePendingContentRefresh(i), t())
        let l = n.subscribe(() => {
          let e = n.getSnapshot().presentationVersion
          e !== r && ((r = e), nJ.invalidateContent(i))
        })
        return () => {
          ;((e = !1), l())
        }
      }, [n, r$, eB, e2.displayColors, e2.selectedSlideIdx, e2.slideIds, nJ]),
        (0, d.useEffect)(() => {
          if ("u" > typeof IntersectionObserver) {
            for (let e of (nG.current?.disconnect(),
            (nG.current = new IntersectionObserver(
              (e) => {
                for (let t of e) {
                  let e = t.target.getAttribute("data-index")
                  if (!t.isIntersecting || null == e) continue
                  let n = Number(e)
                  if (!Number.isFinite(n)) continue
                  let r =
                      "stacked-page" === t.target.getAttribute("data-thumbnail-cache-kind") ? "stacked-page" : "rail",
                    i = "stacked-page" === r
                  ;(r$(n, { cacheKind: r, force: i }),
                    r$(n + 1, { cacheKind: r, force: i }),
                    nG.current?.unobserve(t.target))
                }
              },
              { root: nB, rootMargin: "200px", threshold: 0.05 },
            )),
            [...nW.current, ...nU.current]))
              e && nG.current.observe(e)
            return () => {
              nG.current?.disconnect()
            }
          }
        }, [nB, r$, e2.slideCount]),
        (0, d.useEffect)(() => {
          if ("u" < typeof IntersectionObserver) return
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
              { root: nB, threshold: 0.05 },
            ),
            o = {
              observe(t) {
                ;(e.add(t), a.observe(t))
              },
              unobserve(n) {
                ;(a.unobserve(n), e.delete(n), t.delete(n) && l())
              },
            }
          for (let e of ((n_.current = o), [...nW.current, ...nU.current])) e && o.observe(e)
          return () => {
            ;((i = !1),
              a.disconnect(),
              n_.current === o && (n_.current = null),
              n.setImageHydrationPrioritySlideIds([]))
          }
        }, [n, nB]))
      let rH = (0, d.useCallback)(
          (e) => {
            if ((0, E.tr)(e.target)) return
            if ("a" === e.key.toLowerCase() && (e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey) {
              ;(e.preventDefault(), e.stopPropagation())
              return
            }
            if (
              eB &&
              !ti &&
              "z" === e.key.toLowerCase() &&
              (0, E.Ul)(e, { requirePrimaryModifier: !0, allowShift: !0 })
            ) {
              ;(n.dispatch({ kind: e.shiftKey ? "redo" : "undo" }), e.preventDefault(), e.stopPropagation())
              return
            }
            if ("Backspace" === e.key || "Delete" === e.key) {
              if (!eB || 0 === e2.selectedSlideIds.length || !(0, E.Ul)(e)) return
              ;(e.preventDefault(), e.stopPropagation(), rN(e2.selectedSlideIdx))
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
            let r = e2.selectedSlideIdx,
              i = e2.slideIds.length - 1,
              l = t < 0 ? Math.max(0, r - 1) : Math.min(i, r + 1)
            if (l === r) return
            if (!tZ(l, e.shiftKey ? "range" : "replace")) return void e.preventDefault()
            let a = e.currentTarget.classList.contains("popcorn-presentation-stacked-pages")
              ? nU.current[l]
              : nW.current[l]
            ;(a?.scrollIntoView?.({ block: "nearest", inline: "nearest" }), a?.focus(), e.preventDefault())
          },
          [ti, n, rN, eB, tZ, e2.selectedSlideIdx, e2.selectedSlideIds, e2.slideIds.length],
        ),
        rK = (0, d.useCallback)(
          (e) => {
            nv(null)
            let t = "string" == typeof e.active.id ? e.active.id : null,
              r = nW.current[n1.current.indexOf(t ?? "")]
            if (r) {
              let e = getComputedStyle(r),
                i = parseFloat(e.width),
                l = r.getBoundingClientRect(),
                a = l.width / i,
                o = nK.current?.getBoundingClientRect(),
                s = n
                  .getSnapshot()
                  .selectedSlideIds.filter((e) => e !== t)
                  .flatMap((e, t) => {
                    let n = nW.current[n1.current.indexOf(e)]?.getBoundingClientRect()
                    return null != n &&
                      null != o &&
                      n.bottom > o.top &&
                      n.top < o.bottom &&
                      n.right > o.left &&
                      n.left < o.right
                      ? [
                          {
                            slideId: e,
                            thumbnail: ne[e] ?? null,
                            fromX: (n.left - l.left) / a,
                            fromY: (n.top - l.top) / a,
                            depth: t + 1,
                          },
                        ]
                      : []
                  })
              nC({
                width: i,
                height: parseFloat(e.height),
                scale: a,
                selectionColor: e.getPropertyValue("--presentation-selection-color"),
                placement: "row" === e.flexDirection ? "left" : "bottom",
                cards: s,
              })
            }
            no(t)
          },
          [n, ne],
        ),
        rq = (0, d.useCallback)(() => {
          ;(nv(O(nW.current, ns.current, e2.selectedSlideIds)), nl(e2.slideIds), no(null))
        }, [e2.slideIds, e2.selectedSlideIds]),
        rW = (0, d.useCallback)(
          (e) => {
            if ((nv(O(nW.current, ns.current, e2.selectedSlideIds)), no(null), !eB || ti)) return
            let t = "string" == typeof e.active.id ? e.active.id : null,
              r = "string" == typeof e.over?.id ? e.over.id : null
            if (!t || !r || t === r) return
            let i = n1.current,
              l = i.indexOf(t),
              a = i.indexOf(r)
            l < 0 ||
              a < 0 ||
              l === a ||
              (nl((e) => (0, en.y)(e, e2.selectedSlideIds, l, a)),
              e2.selectedSlideIds.length > 1 && e2.selectedSlideIds.includes(t)
                ? n.moveSelectedSlides(l, a)
                : n.moveSlide(l, a))
          },
          [ti, n, eB, e2.slideIds, e2.selectedSlideIds],
        ),
        rU = (0, d.useCallback)((e) => {
          let t = e.relatedTarget
          ;(t instanceof Node && e.currentTarget.contains(t)) || ((nH.current = !1), nk(!1))
        }, [])
      ;(0, d.useEffect)(() => {
        if (nE) return
        let e = nq.current,
          t = e?.parentElement
        if (null != e && null != t)
          return (0, M.b7)({
            region: t,
            trigger: e,
            open: ro,
            onEnter: () => nk(!0),
            onLeave: () => {
              let e = t.ownerDocument.activeElement
              if (t.contains(e)) {
                if (!nH.current) return
                e instanceof HTMLElement && e.blur()
              }
              ;((nH.current = !1), nk(!1))
            },
          })
      }, [nB, ro, nE, rr])
      let rG = (0, d.useCallback)((e, t, n) => {
          let r = nU.current[e]
          ;(r !== n && (r && n_.current?.unobserve(r), n && n_.current?.observe(n)),
            (nU.current[e] = n),
            n && nG.current && null == n0.current[t] && nG.current.observe(n))
        }, []),
        r_ = n5 ? "bottom" : n3 || rr ? "left" : "responsive",
        rX = rr ? "codex" : "standard",
        rZ = (0, d.useCallback)(() => {
          let t = (0, s.A)(
            {
              left: "w-full flex-col",
              bottom: "w-fit",
              responsive:
                "w-fit @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:flex-col",
            }[r_],
            "codex" === rX
              ? "items-start gap-1"
              : {
                  left: "h-fit min-h-full items-center gap-2.5 justify-[safe_center]",
                  bottom: "gap-6",
                  responsive:
                    "gap-6 @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]",
                }[r_],
          )
          return eB
            ? (0, r.jsx)(C.gB, {
                items: ni,
                strategy: C.kL,
                children: (0, r.jsxs)("div", {
                  ref: "codex" === rX ? t1 : void 0,
                  className: (0, s.A)("flex min-w-full justify-[safe_center]", t),
                  children: [
                    ni.map((t, n) => {
                      let i = ne[t] ?? null,
                        l = rI[t] ?? -1
                      return (0, r.jsx)(
                        nx,
                        {
                          slideContextMenu: e,
                          slideId: t,
                          index: n,
                          snapshotIndex: l,
                          label: rk[t] ?? `Slide ${n + 1}`,
                          thumbnail: i,
                          isSelected: e2.selectedSlideIds.includes(t),
                          isActive: t === rj,
                          isInDragPreview:
                            null != na && e2.selectedSlideIds.includes(na) && e2.selectedSlideIds.includes(t),
                          isVerticalDrag: nw?.placement !== "bottom",
                          isHidden: rE.has(t),
                          commentThreadCount: tX.get(t),
                          canDelete: ni.length > (e2.selectedSlideIds.includes(t) ? e2.selectedSlideIds.length : 1),
                          selectionHidden: e2.selectedSlideIds.includes(t)
                            ? e2.selectedSlideIds.every((e) => rE.has(e))
                            : rE.has(t),
                          selectedSlideCount: e2.selectedSlideIds.length,
                          onSelectSlide: rF,
                          onDeleteSlide: rN,
                          onDuplicateSlide: rz,
                          onSetSlideHidden: rD,
                          renderSlideThumbnailOverlay: eI,
                          slideThumbnailPlacement: r_,
                          thumbnailVariant: rX,
                          onRegisterButtonRef: rB,
                        },
                        t,
                      )
                    }),
                    (0, r.jsx)(nb, {
                      onAddSlide: rV,
                      pickerOpen: null != nI,
                      slideThumbnailPlacement: r_,
                      thumbnailVariant: rX,
                    }),
                  ],
                }),
              })
            : (0, r.jsxs)("div", {
                ref: "codex" === rX ? t1 : void 0,
                className: (0, s.A)("flex min-w-full justify-[safe_center]", t),
                children: [
                  ni.map((e, t) => {
                    let n = ne[e] ?? null,
                      i = rI[e] ?? -1
                    return (0, r.jsx)(
                      ng,
                      {
                        slideId: e,
                        index: t,
                        label: rk[e] ?? `Slide ${t + 1}`,
                        thumbnail: n,
                        isSelected: e2.selectedSlideIds.includes(e),
                        isActive: e === rj,
                        isHidden: rE.has(e),
                        commentThreadCount: tX.get(e),
                        selectedSlideCount: e2.selectedSlideIds.length,
                        onSelect: (e) => rF(i, e),
                        renderSlideThumbnailOverlay: eI,
                        slideThumbnailPlacement: r_,
                        thumbnailVariant: rX,
                        buttonRef: (e) => {
                          rB(t, e, null == n)
                        },
                      },
                      e,
                    )
                  }),
                  eO &&
                    (0, r.jsx)(nb, {
                      disabled: !0,
                      onAddSlide: rV,
                      pickerOpen: !1,
                      slideThumbnailPlacement: r_,
                      thumbnailVariant: rX,
                    }),
                ],
              })
        }, [
          e,
          na,
          rV,
          tX,
          rN,
          rz,
          ni,
          nw?.placement,
          rE,
          eB,
          eO,
          rB,
          eI,
          rj,
          e2.selectedSlideIds,
          rF,
          rD,
          rI,
          rk,
          ne,
          nI,
          r_,
          rX,
        ]),
        rJ = (e) => {
          !tn && !ti && e$?.annotation && (e && (e$.annotation.onModeEnabled?.(), tC(!1)), tt(e))
        },
        rY = () => rJ(!te),
        rQ =
          n8 || q
            ? (0, r.jsx)(eg.b_, {
                disabled: !tr,
                label: e$?.annotation?.modeLabel ?? (q ? "Request edits" : "Annotation"),
                onClick: rY,
                pressed: te,
                testId: "popcorn-presentation-annotation-button",
                size: q ? "default" : "compact",
                variant: "annotation",
                children: "function" == typeof V ? V(te) : (V ?? (0, r.jsx)(I.kZ, { size: q ? "default" : "compact" })),
              })
            : e$?.annotation && e7
              ? (0, r.jsx)(j.$Q, {
                  disabled: tn,
                  active: te,
                  onClick: rY,
                  testId: "popcorn-presentation-annotation-button",
                })
              : null,
        r0 = null == rQ ? null : (e$?.annotation?.wrapModeButton?.(rQ) ?? rQ),
        r1 = (e) => {
          ;((n$.current = !0), nM(e), nk(!1), (nH.current = !1))
        },
        r2 = (0, r.jsx)(ej, { active: tN, disabled: ti, onToggle: rS, size: q ? "default" : "compact" }),
        r4 = {
          onInsertText: () => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tx(null),
              tt(!1),
              tC(!1),
              to(!1),
              tu(!1),
              th(!1),
              tf(null),
              td((e) => !e))
          },
          onGenerateImage:
            null == eH || eH.disabled
              ? void 0
              : () => {
                  ;(n.textClear(),
                    n.setChartInsertionPreview(null),
                    tx(null),
                    tt(!1),
                    tC(!1),
                    to(!1),
                    td(!1),
                    th(!1),
                    tf(null),
                    tu(!0))
                },
          onInsertImage: async (e) => {
            tV({ kind: "insert-image", ...(await n.prepareImage(e)) })
          },
          onInsertChart: (e) => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tt(!1),
              tC(!1),
              td(!1),
              tu(!1),
              th(!1),
              tf(null),
              to(!1),
              tx(e))
          },
          onInsertTable: () => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tx(null),
              tt(!1),
              tC(!1),
              to(!1),
              td(!1),
              tu(!1),
              tf(null),
              th(!0))
          },
          onInsertShape: (e, t) => {
            ;(n.textClear(),
              n.setChartInsertionPreview(null),
              tx(null),
              td(!1),
              tu(!1),
              th(!1),
              tt(!1),
              tC(!1),
              to(!1),
              tf({ geometry: e, arrow: "arrow" === t || t?.arrow }))
          },
        },
        r3 = (e) => {
          ;(e && t8.closePanel(er), tG(e), t$ || tY())
        },
        r5 = () => r3(!tW),
        r6 =
          e$?.drawing && tv
            ? (0, r.jsx)(j.Q5, {
                active: tw,
                onClick: () => {
                  tn ||
                    ti ||
                    tC((e) => {
                      let t = !e
                      return (t ? tt(!1) : tk((e) => e + 1), t)
                    })
                },
                testId: "popcorn-presentation-drawing-button",
              })
            : null,
        r8 =
          rM || null == tH ? void 0 : { "data-popcorn-comment-create": !0, onClick: () => tF.current?.startComment() },
        r9 =
          Q ??
          (0, r.jsx)(ef, {
            ref: tE,
            emptyAction: null == r8 ? void 0 : el?.(r8),
            embedded: G || null != ee,
            renderHeader: null == et ? void 0 : (e) => et({ ...e, addCommentButtonProps: r8 }),
            renderCommentInput: e$?.annotation?.renderCommentInput,
            comments: e$?.annotation?.comments,
            commentTarget: e$?.annotation?.commentTarget,
            controller: n,
            commentAuthor: tH,
            assistantIcon: e$?.annotation?.commentAssistantIcon,
            pendingCommentThreadIds: e$?.annotation?.pendingCommentThreadIds,
            canAssignToChatGpt: e$?.annotation?.canAssignToChatGpt,
            canDeleteOthersComments: e$?.annotation?.canComment == null ? void 0 : eB,
            onCommentSubmitted: e$?.annotation?.onCommentSubmitted,
            selectedThreadId: t_ ? tM : null,
            onSelectThread: (e) => {
              null == e ? tY() : t0(e)
            },
            onHoverThread: tP,
            onClose: () => {
              ;(tG(!1), tY())
            },
          }),
        r7 = (0, r.jsx)(b.d.Provider, { value: t4, children: r9 }),
        ie = G
          ? [
              ...(tK ? [{ id: "comments", title: "Comments", content: r7, open: t_, onOpenChange: r3 }] : []),
              ...e8
                .filter((e) => eB || e.visibleWhenReadOnly)
                .map((e) => ({
                  id: e.id,
                  title: e.title,
                  content: (0, r.jsx)(nf, {
                    controller: n,
                    panel: e,
                    panelControls: t8,
                    isPanelOpen: t8.isPanelOpen(e.id),
                    embedded: !0,
                    onRequestChanges: rA,
                  }),
                  open: rf.includes(e),
                  onOpenChange: (t) => (t ? t8.openPanel(e.id) : t8.closePanel(e.id)),
                })),
            ]
          : void 0,
        it =
          eB && (i?.header?.includes("format") ?? !0) && i?.inspector?.length !== 0
            ? (0, r.jsx)(nh, { controller: n, panels: e8, panelControls: t8, size: "default", icon: K?.format })
            : null,
        ir = q?.({
          editingAvailable: eB && !ti && null != e2.slideIds[e2.selectedSlideIdx],
          editingControls:
            eB || null != Z
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    eB
                      ? (0, r.jsx)(eC, {
                          formatControl: it,
                          renderControls: W,
                          textInsertionActive: ts,
                          onRequestSlideChanges: rA ? (e) => tF.current?.requestChanges(e, "slide") : void 0,
                          icons: K,
                          onAddSlide: rV,
                          slidePickerOpen: null != nI,
                          ...r4,
                        })
                      : null,
                    Z,
                  ],
                })
              : null,
          formatControl: it,
          annotationAvailable: tr,
          annotationCommand: { active: te, disabled: !tr, onToggle: rY },
          onExitAnnotationMode: te ? () => rJ(!1) : void 0,
          annotationControlOwnsTooltip: e$?.annotation?.wrapModeButton != null,
          annotationControl: (i?.header?.includes("annotation") ?? !0) ? r0 : null,
          commentsControl: (0, r.jsx)(eg.b_, {
            "aria-label": tK ? "Comments" : "Comments are not available for this presentation",
            disabled: !tK,
            expanded: tW,
            onClick: r5,
            size: "default",
            testId: "popcorn-presentation-comments-button",
            children: $ ?? (0, r.jsx)(I.Tw, { className: "size-5" }),
          }),
          zoomControl: rL,
          presentationController: n,
          navigationControl: null,
          presentationGridView: { active: tN, disabled: ti, onToggle: rS },
          supplementalActions: (0, r.jsxs)(r.Fragment, { children: [r6, N] }),
        })
      null != q &&
        null != U &&
        (ir = (0, r.jsx)("div", {
          ref: (e) => {
            if (null == e) return
            let t = [
                e,
                ...Array.from(e.children).filter((e) => e instanceof HTMLElement),
                ...e.querySelectorAll("header"),
              ],
              n = () => n7(Math.max(...t.map((e) => e.offsetHeight)))
            if ((n(), "u" < typeof ResizeObserver)) return
            let r = new ResizeObserver(n)
            for (let e of t) r.observe(e)
            return () => r.disconnect()
          },
          className: "pointer-events-none",
          children: ir,
        }))
      let ii = rr
          ? (0, r.jsxs)("div", {
              ref: nK,
              "aria-label": "Table of contents",
              "aria-hidden": !ro,
              inert: !ro,
              className: "popcorn-presentation-codex-thumbnail-panel popcorn-presentation-thumbnail-surface",
              "data-testid": "popcorn-presentation-thumbnails",
              "data-host-motion": eo ? "" : void 0,
              onKeyDown: rH,
              role: "navigation",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex shrink-0 items-center justify-between gap-2 ps-2 pe-0.5 pb-2 text-xs text-token-text-tertiary",
                  children: [
                    (0, r.jsxs)("span", { children: [e2.slideCount, " ", 1 === e2.slideCount ? "slide" : "slides"] }),
                    (0, r.jsx)(eS, {
                      icon: H,
                      label: nE ? "Undock table of contents" : "Dock table of contents",
                      open: nE,
                      onToggle: () => r1(!nE),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "popcorn-presentation-codex-thumbnail-viewport min-h-0 flex-1 overflow-x-hidden overflow-y-auto",
                  children: rZ(),
                }),
              ],
            })
          : null,
        il = () => {
          ;(n.closeFind(), nz.current?.focus({ preventScroll: !0 }))
        }
      return (0, r.jsxs)("div", {
        ref: nz,
        "data-popcorn-pinch-surface": "",
        "data-artifact-search-surface": eX ? "" : void 0,
        tabIndex: -1,
        onKeyDownCapture: (e) => {
          ;(0, E.tr)(e.target) ||
            ("f" === e.key.toLowerCase() && "search" !== (0, m.C_)(e)) ||
            (0, p.E)(e, {
              enabled: eX,
              open: e2.find.open,
              onOpen: () => {
                ;(ey?.("search"), n.openFind())
              },
              onClose: il,
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
            (0, E.tr)(e.target) ||
            n.getSnapshot().textEditState?.activeBlockId ||
            (e.preventDefault(), e.stopPropagation(), rS())
        },
        className: (0, s.A)(
          "text-token-text-primary relative isolate flex h-full min-h-0 flex-col overflow-hidden",
          eE,
        ),
        style: { backgroundColor: tU },
        children: [
          eX &&
            (0, r.jsx)("div", {
              className: "absolute inset-x-0 top-0 z-50",
              style: { [eR]: `clamp(0px, 100% - 22rem, ${rb}px)` },
              children: (eZ ?? ((e) => (0, r.jsx)(u.u, { ...e })))({
                ...e2.find,
                summary: (0, h.X)(e2.find),
                onQueryChange: (e) => n.setFindQuery(e),
                onNavigatePrevious: () => n.goToPreviousFindResult(),
                onNavigateNext: () => n.goToNextFindResult(),
                onClose: il,
              }),
            }),
          X?.({
            keyboardEnabled: eB,
            commands: eB
              ? {
                  select: () => {
                    ;(n.setChartInsertionPreview(null),
                      tx(null),
                      td(!1),
                      tu(!1),
                      th(!1),
                      tf(null),
                      tt(!1),
                      tC(!1),
                      n.endElementInteraction({ commit: !1 }),
                      n.endSelectionMarquee({ commit: !1 }))
                  },
                  text: r4.onInsertText,
                  rect: () => {
                    ;(td(!1), r4.onInsertShape?.("rect"))
                  },
                  ellipse: () => {
                    ;(td(!1), r4.onInsertShape?.("ellipse"))
                  },
                  arrow: () => {
                    ;(td(!1), r4.onInsertShape?.("line", "arrow"))
                  },
                  line: () => {
                    ;(td(!1), r4.onInsertShape?.("line"))
                  },
                }
              : {},
          }),
          (0, r.jsxs)(eu, {
            controller: n,
            editorCapabilities: e6,
            formatPane: eQ,
            floatingBar: e0,
            children: [
              (0, r.jsx)(L.J, {
                panels: ie,
                headerPlacement: null != q || n8 ? "overlay" : void 0,
                renderLayout: U,
                header: q
                  ? ir
                  : (0, r.jsx)(T.R, {
                      title: P,
                      headerTitleContent: n8
                        ? (0, r.jsx)(ew, {
                            title: J ?? ((eY = P.lastIndexOf(".")) > 0 ? P.slice(0, eY) : P),
                            sidebarOpen: nE,
                            onToggleSidebar: () => {
                              let e = !nE
                              ;(r1(e), q && e && requestAnimationFrame(() => nq.current?.focus()))
                            },
                            gridViewControl: r2,
                          })
                        : J,
                      closeLabel: "Close presentation",
                      onClose: eb,
                      testId: "popcorn-presentation-header",
                      className: "border-b-0",
                      floating: n8,
                      floatingSurface: "controls",
                      compactTitle: n6,
                      fileMenuContent: R,
                      centeredContent: n8
                        ? (0, r.jsx)(ek, {
                            annotationControl: r0,
                            formatControl: (0, r.jsx)(nh, { controller: n, panels: e8, panelControls: t8 }),
                            onAddSlide: rV,
                            ...r4,
                            trailingContent: Z,
                          })
                        : rP
                          ? (0, r.jsx)(F.k, {
                              currentIndex: e2.selectedSlideIdx,
                              totalCount: e2.slideCount,
                              itemLabel: "slide",
                              onChangeIndex: tZ,
                              testId: "popcorn-presentation-page-navigation",
                            })
                          : null,
                      actions: (0, r.jsxs)(T.Q, {
                        compact: n6,
                        children: [
                          n8 ? null : r2,
                          n8 ? null : r0,
                          tK ? (0, r.jsx)(j.e0, { active: tW, onClick: r5 }) : null,
                          n8 ? null : r6,
                          rL,
                          N,
                        ],
                      }),
                      icon: (0, r.jsx)(A.f, {
                        kind: "presentation",
                        children: (0, r.jsx)(I.g, { className: "size-4" }),
                      }),
                    }),
                children: (0, r.jsxs)("div", {
                  className: "@container/presentation-editor flex min-h-0 min-w-0 flex-1",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex min-h-0 min-w-0 flex-1 flex-col",
                      children: [
                        (0, r.jsx)(v.Mp, {
                          sensors: n2,
                          collisionDetection: v.fp,
                          modifiers: n4,
                          onDragStart: rK,
                          onDragCancel: rq,
                          onDragEnd: rW,
                          children: (0, r.jsxs)("div", {
                            ref: nO,
                            "data-codex-layout": eJ,
                            "data-custom-header": q ? "true" : void 0,
                            style: { "--popcorn-presentation-header-inset": `${rC.fitTopInset}px` },
                            className: (0, s.A)(
                              "popcorn-presentation-editor-shell relative flex min-h-0 min-w-0 flex-1 overflow-hidden",
                              rn && "popcorn-presentation-editor-shell--small-stacked",
                              n5
                                ? "flex-col"
                                : n3 || rr
                                  ? "flex-row"
                                  : "flex-col @[749px]/presentation-editor:flex-row",
                            ),
                            children: [
                              rn
                                ? (0, r.jsx)("div", {
                                    className: "popcorn-presentation-stacked-pages select-none",
                                    "data-testid": "popcorn-presentation-stacked-pages",
                                    onKeyDown: rH,
                                    children: ni.map((e, t) =>
                                      (0, r.jsx)(
                                        nu,
                                        {
                                          slideId: e,
                                          index: t,
                                          label: rk[e] ?? `Slide ${t + 1}`,
                                          thumbnail: nn[e] ?? null,
                                          isSelected: e2.selectedSlideIds.includes(e),
                                          isActive: e === rj,
                                          onLoad:
                                            nF && 0 === t
                                              ? () => {
                                                  ;(eq?.(), n.notifyFirstSlideRendered())
                                                }
                                              : void 0,
                                          onSelect: (t) => rF(rI[e] ?? -1, t),
                                          buttonRef: (n) => {
                                            rG(t, e, n)
                                          },
                                        },
                                        e,
                                      ),
                                    ),
                                  })
                                : null,
                              rM
                                ? !G &&
                                  (0, r.jsx)(nm, {
                                    controller: n,
                                    panels: e8,
                                    panelControls: t8,
                                    isEditing: eB,
                                    renderPanel: ea,
                                    onRequestChanges: rA,
                                  })
                                : (0, r.jsxs)("div", {
                                    className: (0, s.A)(
                                      "popcorn-presentation-main-panel relative isolate flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-token-bg-primary",
                                      n5 ? "order-1" : n3 ? "order-2" : "order-1 @[749px]/presentation-editor:order-2",
                                      rr && "popcorn-presentation-main-panel--codex-responsive",
                                    ),
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "min-h-0 flex-1 overflow-hidden",
                                        children: (0, r.jsx)(tJ, {
                                          ref: tF,
                                          controller: n,
                                          runtime: tR,
                                          elementContextMenu: t,
                                          stageOverlays: e9.filter(
                                            (e) => eB || e.visibleWhenReadOnly || e.supportsReadOnlySelection,
                                          ),
                                          panelControls: t8,
                                          editToolbarRequested: ta,
                                          onEditToolbarRequestedChange: to,
                                          isEditing: eB,
                                          imageInsertionMode: tc,
                                          onImageInsertionModeChange: tu,
                                          shapeInsertion: tm,
                                          onShapeInsertionChange: tf,
                                          textInsertionMode: ts,
                                          onTextInsertionModeChange: td,
                                          tableInsertionMode: tp,
                                          onTableInsertionModeChange: th,
                                          chartInsertionPresetId: tg,
                                          onChartInsertionPresetIdChange: tx,
                                          onInteractionAttempt: ey,
                                          onElementDragStart: ev,
                                          theme: ez,
                                          viewportInsets: rC,
                                          overlayLeftInsetPx: rr && !tN ? (0, M.os)(ro) + 4 * !!ro + 4 * !!q : void 0,
                                          viewportAlignmentRef: eN,
                                          showSpeakerNotes: ru,
                                          speakerNotesVisible: !tO && !tN,
                                          speakerNotesFocusViewportInsets: "slide" === tD && tN ? rv : void 0,
                                          annotationMode: te,
                                          onAnnotationModeChange: rJ,
                                          onAnnotationDictationBusyChange: tl,
                                          drawingMode: tw,
                                          onDrawingModeChange: tC,
                                          drawingCommitToken: tS,
                                          reviewTools: e$,
                                          generation: eH,
                                          onHyperlinkClick: eK,
                                          annotationsEnabled: eW,
                                          drawingAnnotationsEnabled: eU,
                                          commentThreadsEnabled: eG,
                                          commentsSidebarOpen: t_,
                                          selectedCommentThreadId: tM,
                                          hoveredCommentThreadId: void 0 === ep ? tT : ep,
                                          onHoverCommentThread: tP,
                                          onSelectCommentThread: tK
                                            ? (e) => {
                                                ;(t0(e), t_ && tE.current?.focusThread(e))
                                              }
                                            : void 0,
                                          onClearCommentThread: tK ? tY : void 0,
                                          annotationPortalContainerElement: nB,
                                        }),
                                      }),
                                      rc && "codex" !== ez
                                        ? (0, r.jsx)(np, {
                                            controller: n,
                                            notesHeight: t9,
                                            setNotesHeight: t7,
                                            isEditing: eB,
                                            leftInset: rC.left,
                                          })
                                        : null,
                                      !G &&
                                        (0, r.jsx)(nm, {
                                          controller: n,
                                          panels: e8,
                                          panelControls: t8,
                                          isEditing: eB,
                                          renderPanel: ea,
                                          onRequestChanges: rA,
                                        }),
                                    ],
                                  }),
                              tN && !ri
                                ? null
                                : n5
                                  ? (0, r.jsx)("div", {
                                      ref: nK,
                                      className:
                                        "order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16 select-none",
                                      "data-testid": "popcorn-presentation-thumbnails",
                                      onKeyDown: rH,
                                      children: rZ(),
                                    })
                                  : n3
                                    ? (0, r.jsx)("div", {
                                        ref: nK,
                                        className:
                                          "popcorn-presentation-thumbnail-rail--overlay-desktop order-1 flex h-full min-h-0 shrink-0 flex-col gap-2.5 overflow-x-hidden overflow-y-auto px-3 pt-3 pb-12 select-none",
                                        style: { width: "220px" },
                                        "data-testid": "popcorn-presentation-thumbnails",
                                        "data-grid-hidden": tO,
                                        "aria-hidden": tN,
                                        inert: tN,
                                        onKeyDown: rH,
                                        children: rZ(),
                                      })
                                    : rr
                                      ? (0, r.jsxs)("div", {
                                          "data-testid": "popcorn-presentation-codex-thumbnail-rail",
                                          "data-open": ro ? "true" : "false",
                                          "data-grid-hidden": tO,
                                          "aria-hidden": tN,
                                          inert: tN,
                                          className: "popcorn-presentation-codex-thumbnail-rail select-none",
                                          style: {
                                            ...M.y,
                                            "--popcorn-presentation-thumbnail-rail-bottom-inset": `${rp}px`,
                                          },
                                          onFocusCapture: () => nk(!0),
                                          onBlurCapture: rU,
                                          onKeyDownCapture: () => {
                                            nH.current = !1
                                          },
                                          onPointerDownCapture: () => {
                                            nH.current = !0
                                          },
                                          children: [
                                            (0, r.jsx)("button", {
                                              type: "button",
                                              "aria-label": "Show table of contents",
                                              "aria-expanded": ro,
                                              "data-testid": "popcorn-presentation-thumbnail-stack",
                                              ref: nq,
                                              className: "popcorn-presentation-codex-thumbnail-stack",
                                              onClick: () => {
                                                ;(nk(!0),
                                                  q &&
                                                    requestAnimationFrame(() =>
                                                      nK.current?.querySelector("button")?.focus(),
                                                    ))
                                              },
                                              children: ni.map((e) =>
                                                (0, r.jsx)(
                                                  "span",
                                                  {
                                                    "data-active": e === rj ? "true" : void 0,
                                                    "data-testid": "popcorn-presentation-thumbnail-stack-bar",
                                                    className: "popcorn-presentation-codex-thumbnail-stack-bar",
                                                    style: {
                                                      backgroundColor:
                                                        e === rj
                                                          ? "var(--color-token-text-primary, rgba(13, 13, 13, 1))"
                                                          : "var(--color-token-border-default, rgba(232, 232, 232, 1))",
                                                    },
                                                  },
                                                  e,
                                                ),
                                              ),
                                            }),
                                            eo ? eo(ii, ro) : ii,
                                          ],
                                        })
                                      : (0, r.jsx)("div", {
                                          ref: nK,
                                          className:
                                            "popcorn-presentation-thumbnail-rail--overlay-desktop order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16 select-none @[749px]/presentation-editor:order-1 @[749px]/presentation-editor:h-full @[749px]/presentation-editor:w-[220px] @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:overflow-x-hidden @[749px]/presentation-editor:overflow-y-auto @[749px]/presentation-editor:px-3 @[749px]/presentation-editor:pt-3 @[749px]/presentation-editor:pb-12",
                                          "data-testid": "popcorn-presentation-thumbnails",
                                          "data-grid-hidden": tO,
                                          "aria-hidden": tN,
                                          inert: tN,
                                          onKeyDown: rH,
                                          children: rZ(),
                                        }),
                              nB &&
                                (0, S.createPortal)(
                                  (0, r.jsx)(v.Hd, {
                                    className: "popcorn-presentation-thumbnail-drag-overlay pointer-events-none flex",
                                    dropAnimation: null,
                                    modifiers: n4,
                                    style: {
                                      ...("codex" === rX ? M.y : void 0),
                                      "--presentation-selection-color": nw?.selectionColor,
                                    },
                                    children:
                                      na && nw
                                        ? (0, r.jsx)("div", {
                                            ref: ns,
                                            style: {
                                              width: nw.width,
                                              height: nw.height,
                                              display: "flex",
                                              flexShrink: 0,
                                              transform: `scale(${nw.scale})`,
                                              transformOrigin: "top left",
                                            },
                                            children: (0, r.jsx)(ng, {
                                              slideId: na,
                                              index: ni.indexOf(na),
                                              label: rk[na] ?? "Slide",
                                              thumbnail: ne[na] ?? null,
                                              isSelected: e2.selectedSlideIds.includes(na),
                                              selectedSlideCount: e2.selectedSlideIds.length,
                                              dragPreviewCards: nw.cards,
                                              isHidden: rE.has(na),
                                              commentThreadCount: tX.get(na),
                                              onSelect: rO,
                                              renderSlideThumbnailOverlay: eI,
                                              slideThumbnailPlacement: nw.placement,
                                              thumbnailVariant: rX,
                                              isDragging: !0,
                                            }),
                                          })
                                        : null,
                                  }),
                                  nB.ownerDocument.body,
                                ),
                            ],
                          }),
                        }),
                        null != Y
                          ? (0, r.jsx)("div", {
                              className: "min-w-0 shrink-0",
                              style: { marginLeft: rC.left, marginRight: rC.right },
                              children: Y,
                            })
                          : null,
                      ],
                    }),
                    G
                      ? null
                      : null != ee
                        ? (0, r.jsx)("div", {
                            className: "flex min-h-0 max-w-full min-w-0 shrink-0",
                            style: { paddingTop: rC.fitTopInset },
                            children: ee(r7, t_),
                          })
                        : t_
                          ? (0, r.jsx)("div", {
                              className: "flex min-h-0 shrink-0 flex-col",
                              style: { paddingTop: rC.fitTopInset },
                              children: r7,
                            })
                          : null,
                  ],
                }),
              }),
              nI && eB && !ti
                ? (0, r.jsx)(tQ, {
                    controller: n,
                    anchor: nI,
                    portalContainer: nz.current ?? void 0,
                    onClose: () => nj(null),
                    onSelect: (e) => {
                      ;(n.addSlide(e), nj(null))
                    },
                  })
                : null,
            ],
          }),
        ],
      })
    }
    function nu({
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
        onClick: (e) => s(ns(e)),
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
    function np({ controller: e, notesHeight: t, setNotesHeight: n, isEditing: i, leftInset: l }) {
      let a = (0, ei.ge)(e)
      return (0, r.jsxs)("div", {
        className:
          "popcorn-presentation-notes-panel popcorn-presentation-desktop-only pointer-events-none absolute right-0 bottom-0 z-20 px-6 pt-4 pb-6",
        style: { left: `${l}px`, right: 0 },
        "data-testid": "popcorn-presentation-notes-panel",
        children: [
          (0, r.jsx)("div", {
            className: "pointer-events-auto pb-3",
            children: (0, r.jsx)(eM, { notesHeight: t, setNotesHeight: n }),
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
                    style: { ...no, height: `${t}px` },
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
    function nh({ controller: e, icon: t, panels: n, panelControls: i, size: l = "compact" }) {
      let a = (0, ei.lO)(e, "inspector"),
        o = n.find((t) => t.isVisible?.({ controller: e, snapshot: a }) ?? !0),
        s = null != o && i.isPanelAvailable(o.id),
        d = null != o && i.isPanelOpen(o.id)
      return (0, r.jsx)(eg.b_, {
        disabled: !s,
        expanded: d,
        "aria-label": "Format",
        "data-popcorn-presentation-format-control": "",
        onClick: () => {
          o && i.togglePanel(o.id)
        },
        testId: "popcorn-presentation-format-button",
        size: l,
        children: t ?? (0, r.jsx)(I.KL, { size: l }),
      })
    }
    function nm({ controller: e, panels: t, panelControls: n, isEditing: i, renderPanel: l, onRequestChanges: a }) {
      let o = t.filter((e) => i || e.visibleWhenReadOnly),
        c = (0, d.useCallback)((t) => e.subscribe(t), [e]),
        u = () =>
          o.some((t) => n.isPanelOpen(t.id) && (t.isVisible?.({ controller: e, snapshot: e.getSnapshot() }) ?? !0)),
        p = (0, d.useSyncExternalStore)(c, u, u)
      if (0 === o.length) return null
      let h = o.map((t) =>
        (0, r.jsx)(
          nf,
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
    function nf({ controller: e, panel: t, panelControls: n, isPanelOpen: i, embedded: l, onRequestChanges: a }) {
      let o = (0, ei.lO)(e, t.snapshotScope ?? "editor")
      if (!(t.isVisible?.({ controller: e, snapshot: o }) ?? !0)) return null
      let d = t.render({ controller: e, snapshot: o, panelControls: n, embedded: l, onRequestChanges: a })
      return l
        ? (0, r.jsx)("div", {
            hidden: !i,
            "data-popcorn-presentation-format-control": t.id === er ? "" : void 0,
            className: i ? "flex h-full min-h-0 flex-col" : "hidden",
            inert: !i,
            children: d,
          })
        : (0, r.jsx)("div", {
            "data-testid": i ? "popcorn-presentation-sidebar" : void 0,
            "data-popcorn-presentation-format-control": t.id === er ? "" : void 0,
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
    let ng = (0, d.memo)(function ({
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
          S = t8(f, g),
          j = t9(f),
          E = t7(g),
          M = ne(g)
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
            if (((C.current = !1), 2 === e.button)) {
              l || h()
              return
            }
            if (0 !== e.button) return
            let t = ns(e)
            "replace" === t && l && o > 1 ? (C.current = !0) : h(t)
          },
          onClick: (e) => {
            ;((0 === e.detail || C.current) && h(ns(e)), (C.current = !1))
          },
          className: (0, s.A)(
            "relative flex shrink-0 cursor-interaction touch-none items-start rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none",
            S,
          ),
          style: l ? { backgroundColor: nr, ...("codex" === g ? { borderRadius: "16px" } : {}) } : void 0,
          ...b,
          ...y,
          "aria-pressed": l,
          children: [
            (0, r.jsx)("div", {
              className: (0, s.A)(
                "text-token-text-primary",
                M,
                w && "bottom" === f ? "absolute -top-2 left-0" : (0, s.A)("relative", j),
              ),
              style: l ? { color: nn } : void 0,
              children: w
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", { className: "invisible", children: t + 1 }),
                      (0, r.jsx)("span", {
                        "data-testid": "popcorn-presentation-drag-count",
                        "aria-label": `${o} slides`,
                        className:
                          "absolute top-1/2 left-1/2 inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[12px] leading-none font-semibold tabular-nums",
                        style: { backgroundColor: nr },
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
                        ...nt,
                        borderColor: nl,
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
                    E,
                    v ? "shadow-lg" : null,
                  ),
                  style: { ...nt, borderColor: l ? nn : nl, boxShadow: l ? ni : nt.boxShadow },
                  children: [
                    i
                      ? (0, r.jsx)("img", {
                          src: i,
                          alt: "",
                          className: (0, s.A)("block", E, u && "opacity-45"),
                          draggable: !1,
                        })
                      : (0, r.jsx)("div", {
                          className: (0, s.A)(E, "animate-pulse bg-gray-200", u && "opacity-45"),
                          style: { aspectRatio: 16 / 9 },
                        }),
                    p
                      ? (0, r.jsxs)("span", {
                          "aria-label": `${p} comment ${1 === p ? "thread" : "threads"} on slide ${t + 1}`,
                          "data-testid": `popcorn-presentation-slide-comment-count-${t}`,
                          className:
                            "pointer-events-none absolute top-1 right-1 flex size-[22px] items-center justify-center text-[10px] leading-none font-normal tabular-nums",
                          style: { color: k.rk },
                          children: [
                            (0, r.jsx)(k.Sj, { appearance: "review", className: "absolute inset-0 size-full" }),
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
                            children: (0, r.jsx)(I.aR, { className: "size-5" }),
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
      nx = (0, d.memo)(function ({
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
        onDeleteSlide: b,
        onDuplicateSlide: y,
        onSetSlideHidden: v,
        renderSlideThumbnailOverlay: w,
        slideThumbnailPlacement: S = "responsive",
        thumbnailVariant: k = "standard",
        onRegisterButtonRef: j,
      }) {
        let {
            attributes: E,
            listeners: M,
            setNodeRef: A,
            activeIndex: T,
            isOver: L,
            isSorting: F,
            isDragging: R,
          } = (0, C.gl)({ id: t }),
          N = (0, d.useCallback)(
            (e) => {
              x(i, e)
            },
            [x, i],
          ),
          D = (0, d.useCallback)(() => {
            b(i)
          }, [b, i]),
          z = (0, d.useCallback)(() => {
            y(i)
          }, [y, i]),
          B = (0, d.useCallback)(() => {
            v(i, !h)
          }, [h, v, i]),
          O = (0, d.useCallback)(
            (e) => {
              j(n, e, null == a)
            },
            [n, j, a],
          ),
          V = (0, d.useMemo)(
            () => [
              {
                kind: "item",
                id: "duplicate",
                label: "Duplicate",
                icon: I.oM,
                onSelect: z,
                testId: `popcorn-presentation-slide-duplicate-${n}`,
              },
              {
                kind: "item",
                id: "visibility",
                label: h ? "Show" : "Hide",
                icon: h ? I.bM : I.aR,
                onSelect: B,
                testId: `popcorn-presentation-slide-visibility-${n}`,
              },
              { kind: "separator", id: "slide-actions-separator" },
              {
                kind: "item",
                id: "delete",
                label: "Delete",
                icon: I.uc,
                color: "danger",
                disabled: !g,
                onSelect: D,
                testId: `popcorn-presentation-slide-delete-${n}`,
              },
            ],
            [g, D, z, B, n, h],
          ),
          $ = (0, r.jsxs)("div", {
            ref: A,
            style: { opacity: R || c ? 0 : 1, position: "relative", display: "inline-flex" },
            onContextMenu: () => {
              o || N()
            },
            children: [
              F && L && !R && !c
                ? (0, r.jsx)("span", {
                    "aria-hidden": "true",
                    "data-testid": "popcorn-presentation-slide-drop-indicator",
                    "data-insertion": T < n ? "after" : "before",
                    className: "pointer-events-none absolute rounded-full",
                    style: {
                      backgroundColor: nn,
                      ...(u
                        ? { left: 0, right: 0, height: 2, ...(T < n ? { bottom: 0 } : { top: 0 }) }
                        : { top: 0, bottom: 0, width: 2, ...(T < n ? { right: 0 } : { left: 0 }) }),
                    },
                  })
                : null,
              (0, r.jsx)(ng, {
                slideId: t,
                index: n,
                label: l,
                thumbnail: a,
                isSelected: o,
                isActive: s,
                selectedSlideCount: p,
                isHidden: m,
                commentThreadCount: f,
                onSelect: N,
                renderSlideThumbnailOverlay: w,
                slideThumbnailPlacement: S,
                thumbnailVariant: k,
                buttonRef: O,
                dragAttributes: E,
                dragListeners: M,
                isDragging: R,
              }),
            ],
          })
        return e
          ? (0, r.jsx)(e, { trigger: $, isHidden: h, canDelete: g, onDuplicate: z, onToggleHidden: B, onDelete: D })
          : (0, r.jsx)(P.i, { trigger: $, actions: V })
      }),
      nb = (0, d.memo)(function ({
        disabled: e = !1,
        onAddSlide: t,
        pickerOpen: n,
        slideThumbnailPlacement: i = "responsive",
        thumbnailVariant: l = "standard",
      }) {
        let a = t8(i, l),
          o = t9(i),
          d = t7(l),
          c = ne(l)
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
              style: na,
              "data-presentation-thumbnail-surface": !0,
              children: (0, r.jsx)("div", {
                className: "flex w-full items-center justify-center hover:bg-token-interactive-bg-secondary-hover",
                style: { aspectRatio: 16 / 9 },
                children: (0, r.jsx)(I.EV, { className: "size-4" }),
              }),
            }),
          ],
        })
      })
    function ny({
      controller: e,
      stageRuntime: t,
      usesCompactTitle: n,
      isEditing: i,
      zoomToFitLabel: l,
      renderHeaderZoomControl: a,
      onInteractionAttempt: o,
    }) {
      let s = (0, ei.Zo)(e),
        d = s.fitScale ?? (s.slideRect && s.zoom > 0 ? s.slideRect.scale / s.zoom : null),
        c = d ? (0, G.lN)(d) : null,
        u = s.slideRect?.scale ?? (d ? (0, G.lN)(d * s.zoom) : (0, G.lN)(s.zoom)),
        p = null != c && 1e-4 > Math.abs(s.zoom - 1),
        h = (e) => {
          let n = (0, G.lN)(e)
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
        (0, r.jsx)(R.l, {
          zoom: u,
          onZoomChange: h,
          options: t5,
          fitOption: m,
          testId: "popcorn-presentation-zoom-select",
          variant: n && i ? "editorHeader" : "default",
        })
      )
    }
    let nv = [250, 1e3]
    class nw {
      resolve
      hydrate
      #eY = 0
      #e = new Map()
      #eQ = new Map()
      #e0 = new Map()
      #e1 = !1
      #e2
      #e4
      #e3 = !1
      constructor(e, t) {
        ;((this.resolve = e), (this.hydrate = t))
      }
      update(e, t) {
        if (this.#e3) return
        t !== this.#eY && (this.#e.clear(), this.#e0.clear(), (this.#eY = t))
        let n = new Map()
        for (let t of e) {
          var r
          let e = JSON.stringify([(r = t).assetId, r.uri]),
            i = this.#e.get(e) ?? { request: t, attempts: 0, retryAt: 0, complete: !1 }
          ;((i.request = t), n.set(e, i))
        }
        ;((this.#e = n), this.#e5())
      }
      dispose() {
        ;((this.#e3 = !0),
          clearTimeout(this.#e4),
          void 0 !== this.#e2 && (cancelAnimationFrame(this.#e2), (this.#e2 = void 0)),
          this.#e.clear(),
          this.#eQ.clear(),
          this.#e0.clear())
      }
      #e5() {
        if ((clearTimeout(this.#e4), (this.#e4 = void 0), this.#e3)) return
        if (!this.#e1) {
          let e = new Set([...this.#e.values()].map((e) => e.request.uri))
          for (let t of this.#e0.keys()) e.has(t) || this.#e0.delete(t)
        }
        let e = Date.now(),
          t = new Map()
        for (let n of this.#e.values()) {
          let r = n.request.uri
          if (n.complete || n.attempts > nv.length || n.retryAt > e || this.#e0.has(r) || this.#eQ.has(r)) continue
          let i = t.get(r)
          i ? i.images.push(n) : t.set(r, { uri: r, generation: this.#eY, images: [n] })
        }
        for (let e of t.values()) {
          for (let t of e.images) t.attempts += 1
          this.#eQ.set(e.uri, e)
        }
        for (let e of t.values()) this.#e6(e)
        this.#e8()
        let n = 1 / 0
        for (let e of this.#e.values())
          !e.complete &&
            e.attempts <= nv.length &&
            e.retryAt > Date.now() &&
            !this.#eQ.has(e.request.uri) &&
            (n = Math.min(n, e.retryAt))
        1 / 0 !== n && (this.#e4 = setTimeout(() => this.#e5(), Math.max(0, n - Date.now())))
      }
      async #e6(e) {
        try {
          let t = await this.resolve(e.images.map((e) => e.request))
          if (this.#e3 || e.generation !== this.#eY) return
          let n = t.find(
            (t) =>
              t.data.length > 0 &&
              (null == t.uri || t.uri === e.uri) &&
              e.images.some((e) => e.request.assetId === t.assetId),
          )
          if (null == n) return void this.#e9(e.generation, e.images)
          this.#e0.set(e.uri, n)
        } catch {
          this.#e9(e.generation, e.images)
        } finally {
          ;(this.#eQ.delete(e.uri), this.#e5())
        }
      }
      #e8() {
        if (this.#e1 || void 0 !== this.#e2) return
        let e = Date.now()
        ;[...this.#e.values()].some((t) => !t.complete && t.retryAt <= e && this.#e0.has(t.request.uri)) &&
          (this.#e2 = requestAnimationFrame(() => {
            ;((this.#e2 = void 0), this.#e7())
          }))
      }
      async #e7() {
        if (this.#e3) return
        let e = this.#eY,
          t = [],
          n = [],
          r = Date.now()
        for (let e of this.#e.values()) {
          let i = this.#e0.get(e.request.uri)
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
          this.#e1 = !0
          try {
            for (let r of (await this.hydrate(n, e), t)) r.complete = !0
          } catch {
            if (e === this.#eY) {
              for (let e of t) this.#e0.delete(e.request.uri)
              this.#e9(e, t)
            }
          } finally {
            ;((this.#e1 = !1), this.#e5())
          }
        }
      }
      #e9(e, t) {
        if (!this.#e3 && e === this.#eY)
          for (let e of t) {
            let t = nv[e.attempts - 1]
            e.retryAt = null == t ? 1 / 0 : Date.now() + t
          }
      }
    }
    var nC = n("pAUJ"),
      nS = n("msmG"),
      nk = n("KZzR"),
      nI = n("U22i")
    let nj = [
      { id: "heading-1", shortLabel: "H1", label: "Heading 1", fontSize: 64 },
      { id: "heading-2", shortLabel: "H2", label: "Heading 2", fontSize: 48 },
      { id: "heading-3", shortLabel: "H3", label: "Heading 3", fontSize: 36 },
      { id: "body", shortLabel: "P", label: "Body", fontSize: 24 },
      { id: "caption", shortLabel: "S", label: "Caption", fontSize: 16 },
    ]
    function nE({ color: e, backgroundColor: t, onChange: n, config: i }) {
      let l = i ?? { state: "enabled" },
        a = l.options?.palette ?? nk.D.map((e) => e.value),
        o = a.map((e) => nk.D.find((t) => t.value.toLowerCase() === e.toLowerCase()) ?? { value: e, label: e }),
        c = (0, nI.p)(l, n, (e, t) => (0, nC.HO)(e, t, !1, a)),
        u = (0, d.useContext)(ed.Z),
        p = t && "none" !== t ? u.withBackground(t) : u,
        h = nk.D.find((t) => t.value.toUpperCase() === e?.toUpperCase())
      return "hidden" === l.state
        ? null
        : (0, r.jsxs)(tY.bL, {
            children: [
              (0, r.jsx)(tY.l9, {
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
                    (0, r.jsx)(I.cr, { className: "size-3 text-token-text-secondary" }),
                  ],
                }),
              }),
              (0, r.jsx)(tY.ZL, {
                children: (0, r.jsx)(tY.UC, {
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
                        tY.bm,
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
    function nM({ fontSize: e, onChange: t, config: n }) {
      let i = nT(e)
      return n?.state === "hidden"
        ? null
        : (0, r.jsxs)(tY.bL, {
            children: [
              (0, r.jsx)(tY.l9, {
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
                    (0, r.jsx)(I.cr, { className: "size-3 text-token-text-secondary" }),
                  ],
                }),
              }),
              (0, r.jsx)(tY.ZL, {
                children: (0, r.jsx)(tY.UC, {
                  "data-popcorn-edit-toolbar-root": "true",
                  align: "end",
                  sideOffset: 6,
                  className: "z-50",
                  children: (0, r.jsx)(nA, { config: n, fontSize: e, onChange: t }),
                }),
              }),
            ],
          })
    }
    function nA({ fontSize: e, onChange: t, config: n }) {
      let i = n ?? { state: "enabled" },
        l = (0, nI.p)(i, t, nC.XT),
        a = nT(e),
        o = (
          i.options?.presets?.map(
            (e) =>
              nj.find((t) => t.fontSize === e) ?? {
                id: String(e),
                shortLabel: String(e),
                label: String(e),
                fontSize: e,
              },
          ) ?? nj
        ).filter((e) => (0, nC.XT)({ ...i, state: "enabled", reason: void 0 }, e.fontSize))
      return "hidden" === i.state
        ? null
        : (0, r.jsx)("div", {
            className: "w-52 rounded-xl border border-token-border-default bg-token-main-surface-primary p-1 shadow-xl",
            children: o.map((e) => {
              let t = e.id === a?.id
              return (0, r.jsx)(
                tY.bm,
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
    function nT(e) {
      if (null != e) return nj.reduce((t, n) => (Math.abs(n.fontSize - e) < Math.abs(t.fontSize - e) ? n : t))
    }
    function nP({ children: e, disabled: t = !1, label: n, pressed: i = !1, onClick: l, config: a }) {
      let o = a ?? { state: "enabled" },
        d = (0, nI.p)(o, () => {
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
    var nL = n("nWOQ")
    function nF({ color: e, textBackground: t, paintRole: n, className: i }) {
      let l = (0, d.useContext)(ed.Z),
        a = t && "none" !== t ? l.withBackground(t) : l
      return (0, r.jsx)("span", {
        "aria-hidden": !0,
        className: i,
        style: { backgroundColor: "text" === n ? a.text(e) : a.color(e) },
      })
    }
    let nR = ["image", "solid", "none"],
      nN = { image: "Image fill", solid: "Solid fill", none: "No fill" }
    function nD({ fill: e, themeColors: t, onColorChange: n, onImageChange: i }) {
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
            children: nR.map((e, t) =>
              (0, r.jsx)(
                "button",
                {
                  id: `${l}-${e}`,
                  type: "button",
                  role: "tab",
                  "aria-label": nN[e],
                  "aria-selected": a === e,
                  "aria-controls": `${l}-panel`,
                  tabIndex: a === e ? 0 : -1,
                  title: nN[e],
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
                      p(nR[n]),
                      c.current?.querySelectorAll("button")[n]?.focus())
                  },
                  className: (0, s.A)(
                    "flex h-6 flex-1 cursor-interaction items-center justify-center rounded-md outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
                    a === e ? "bg-surface-elevated-secondary shadow-sm" : "hover:bg-primary-ghost-hover",
                  ),
                  children:
                    "image" === e
                      ? (0, r.jsx)(ey.xw, {})
                      : "none" === e
                        ? (0, r.jsx)(nz, {})
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
                ? (0, r.jsx)(nL.IM, {
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
                          children: (0, r.jsx)(eb.H, { onInsert: i, onClose: () => o("image") }),
                        }),
                      ],
                    })
                  : (0, r.jsxs)("div", {
                      className:
                        "flex h-20 flex-col items-center justify-center gap-2 text-xs text-token-text-secondary",
                      children: [(0, r.jsx)(nz, {}), (0, r.jsx)("span", { children: "No fill" })],
                    }),
          }),
        ],
      })
    }
    function nz() {
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
    var nB = n("nLn3"),
      nO = n("jxh3"),
      nV = n("scdV")
    let n$ =
      "flex w-[280px] flex-col gap-3 rounded-2xl border border-token-border-light bg-token-main-surface-primary p-3 text-token-text-primary shadow-xl"
    function nH({ className: e }) {
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
    function nK({ className: e }) {
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
    let nq = [
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
      { value: "none", label: "No fill", icon: nH },
    ]
    function nW({ fill: e, onChange: t }) {
      let n = e.opacityPct > 0
      return (0, r.jsxs)("div", {
        className: n$,
        children: [
          (0, r.jsx)(nV.s, {
            ariaLabel: "Fill type",
            options: nq,
            value: n ? "solid" : "none",
            onChange: (r) => {
              ;("solid" === r) !== n &&
                t("none" === r ? { fillColor: "none" } : { fillColor: e.color, fillOpacityPct: 100 })
            },
          }),
          n
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(nB.X, {
                    label: "Color",
                    children: (0, r.jsx)(nL.IM, {
                      value: e.color,
                      ariaLabel: "Fill color",
                      onChange: (e) => t({ fillColor: e }),
                    }),
                  }),
                  (0, r.jsx)(nO.S, {
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
    function nU({ line: e, onChange: t }) {
      return (0, r.jsxs)("div", {
        className: n$,
        children: [
          (0, r.jsx)(nB.X, {
            label: "Color",
            children: (0, r.jsx)(nL.IM, {
              value: e.color,
              ariaLabel: "Outline color",
              onChange: (e) => t({ strokeColor: e }),
            }),
          }),
          (0, r.jsx)(nO.S, {
            label: "Width",
            value: e.width,
            min: 0,
            unit: "px",
            onChange: (e) => t({ strokeWidth: e }),
          }),
          (0, r.jsx)(nO.S, {
            label: "Opacity",
            value: e.opacityPct,
            min: 0,
            max: 100,
            unit: "%",
            onChange: (e) => t({ strokeOpacityPct: e }),
          }),
          (0, r.jsx)(nV.s, {
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
    function nG({ controller: e, elementId: t, name: n }) {
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
          className: n$,
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex h-8 items-center justify-center gap-2 rounded-lg bg-token-bg-secondary text-xs font-medium",
              children: [(0, r.jsx)(ey.xw, { className: "size-4" }), "Image"],
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
                    (0, r.jsx)(ey.xw, { className: "size-5" }),
                    a ? "Loading preview…" : "Preview unavailable",
                  ],
                }),
          ],
        })
      )
    }
    let n_ = () => () => {},
      nX = (0, d.memo)(function ({
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
        onDismissEditToolbar: g,
        onToggleInspector: b,
      }) {
        let y = null != c,
          v = (0, d.useCallback)(() => (u ? null != u.getSnapshot() : y), [u, y]),
          w = (0, d.useSyncExternalStore)(u?.subscribe ?? n_, v, v),
          C = es(x.mq, t),
          k = (0, f.U)("presentation"),
          j = i ?? (0, eA.k3)(k, o?.kind ?? "mixed"),
          [E, M] = (0, d.useState)(""),
          [A, T] = (0, d.useState)(!1),
          [P, L] = (0, d.useState)(!1),
          F = (0, d.useRef)(null),
          R = (0, d.useRef)(!1),
          N = h?.creationRequest,
          D = N?.isSubmitting === !0,
          z = h?.activeRequest,
          B = null != z,
          O = o?.kind === "chart",
          V = o?.kind === "image",
          $ = O
            ? "What should this chart contain?"
            : o?.image?.isPlaceholder
              ? "Describe an image"
              : "Ask for change about this selection",
          H = o?.text,
          K = o?.kind === "image" ? null : o?.fill,
          q = null != H || o?.fill != null || o?.line != null,
          W = l && q && C.inspector.length > 0,
          U = h?.onAskForEditShown,
          G = "hidden" !== j.controls.askForChange.state && h?.startAskChat != null && null != h.submitAskChat,
          _ =
            o && (0, nC.J3)(j.controls.format) && C.floating.includes("format") && C.inspector.includes("appearance")
              ? (function ({ selectedElement: e, controller: t }) {
                  let n = []
                  if ("image" === e.kind) {
                    if (e.image?.isPlaceholder) return n
                    n.push({
                      kind: "popover",
                      id: "image-appearance",
                      label: "Image options",
                      icon: ey.xw,
                      hideLabel: !0,
                      align: "start",
                      content: (0, r.jsx)(nG, { controller: t, elementId: e.id, name: e.name }, e.id),
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
                          ? (0, r.jsx)(nH, { className: "size-4" })
                          : (0, r.jsx)("span", {
                              "aria-hidden": "true",
                              className: "block size-4 rounded-full border border-token-border-light",
                              style: { backgroundColor: i.color },
                            }),
                      align: "start",
                      content: (0, r.jsx)(nW, { fill: i, onChange: (e) => t.updateSelectedElementStyle(e) }, e.id),
                    })
                  }
                  return (
                    e.line &&
                      n.push({
                        kind: "popover",
                        id: "shape-outline",
                        label: "Outline options",
                        icon: nK,
                        hideLabel: !0,
                        align: "start",
                        content: (0, r.jsx)(nU, { line: e.line, onChange: (e) => t.updateSelectedElementStyle(e) }),
                      }),
                    n
                  )
                })({ selectedElement: o, controller: e }).filter(
                  (e) => "shape-fill" !== e.id && ("shape-outline" !== e.id || null != o.fill || "image" === o.kind),
                )
              : [],
          X = K || o?.kind === "image" || _.some((e) => "shape-outline" === e.id) ? null : o?.line,
          Z = K ?? X,
          J = n || (P && (G || B)),
          Y = j.enabled && J
        ;(0, d.useEffect)(() => {
          ;(M(""), T(!1), (R.current = !1))
        }, [j])
        let Q = Y && !A && !B && w && G && (0, nC.J3)(j.controls.askForChange)
        ;((0, d.useEffect)(() => {
          let e = h?.creationRequest
          null != e && F.current !== e.id && J && !B && w && o?.id === e.elementId && ((F.current = e.id), M(""), T(!0))
        }, [B, o?.id, h?.creationRequest, w, J]),
          (0, d.useEffect)(() => {
            z?.annotationId != null && (M(""), T(!1), L(!0))
          }, [z?.annotationId]),
          (0, d.useEffect)(() => {
            Q && !R.current && null != U && ((R.current = !0), U())
          }, [Q, U]))
        let ee = (0, d.useCallback)(
          (e) => {
            h?.startAskChat != null &&
              (0, nC.J3)(j.controls.askForChange) &&
              (h.startAskChat(e), h.opensAnnotationEditor || T(!0))
          },
          [h, j],
        )
        ;(0, eL.zk)({ enabled: Q, onClick: ee, shortcutScopeElement: m })
        let et = () => {
            ;(N?.onDismiss(), M(""), T(!1), L(!1), g())
          },
          en = async (e, t) => {
            if (
              !B &&
              !D &&
              E.trim() &&
              (N ? !N.disabled : h?.submitAskChat != null && (0, nC.J3)(j.controls.askForChange))
            ) {
              if (N) {
                ;(await N.onSubmit(E)) && et()
                return
              }
              !h?.submitAskChat ||
                ((t ? "saved" !== h.defaultSubmitMode : "saved" === h.defaultSubmitMode) && h.savedSubmitDisabled) ||
                (h.submitAskChat(E, e, t), et())
            }
          },
          er = [
            G
              ? [
                  {
                    kind: "button",
                    id: "ask-chat",
                    label: h?.askForEditLabel ?? "Ask for change",
                    isDisabled: !(0, nC.J3)(j.controls.askForChange),
                    disabledReason: j.controls.askForChange.reason,
                    subLabel: (0, r.jsx)("span", {
                      className: "text-[11px] leading-none text-token-text-tertiary",
                      children: (0, eL.GU)(),
                    }),
                    onClick: () => ee("ask_codex_button"),
                  },
                ]
              : [],
            Z && C.floating.includes("fill") && (0, nC.J3)(j.controls.format)
              ? [
                  {
                    kind: "popover",
                    id: X ? "stroke" : "fill",
                    label: X ? "Stroke color" : "Fill color",
                    hideLabel: !0,
                    align: "start",
                    subLabel:
                      "image" === Z.kind
                        ? (0, r.jsx)(ey.xw, {})
                        : "none" === Z.kind
                          ? (0, r.jsx)(nz, {})
                          : (0, r.jsx)("span", {
                              "aria-hidden": !0,
                              className: "block size-4 rounded-full border border-token-border-light",
                              style: { backgroundColor: Z.color },
                            }),
                    content: X
                      ? (0, r.jsx)("div", {
                          className:
                            "w-[248px] rounded-2xl bg-surface-elevated-secondary p-3 font-sans text-default shadow-lg ring-[0.5px] ring-border",
                          children: (0, r.jsx)(nL.IM, {
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
                      : (0, r.jsx)(nD, {
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
                p = nk.M.map(({ value: e }) => e),
                h = (e) => ({ isDisabled: !(0, nC.J3)(e), disabledReason: e.reason })
              for (let m of eT({
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
                    icon: "bold" === m ? I.Nd : I.OC,
                    hideLabel: !0,
                    isActive: n[m] ?? !1,
                    ...h(u[m]),
                    onClick: () => {
                      ;(0, nC.J3)(u[m]) && l({ [m]: !n[m] })
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
                      subLabel: (0, r.jsx)(nF, {
                        className: "block size-4 rounded-full border border-black/10",
                        color: n.color ?? "#000000",
                        textBackground: i,
                        paintRole: "text",
                      }),
                      align: "center",
                      content: (0, r.jsx)(nL.IM, {
                        inline: !0,
                        config: u.textColor,
                        disabled: !(0, nC.J3)(u.textColor),
                        allowCustom: u.textColor.options?.allowCustom,
                        palette: u.textColor.options?.palette,
                        ariaLabel: "Custom text color",
                        paintRole: "text",
                        backgroundColor: i,
                        value: n.color ?? "#000000",
                        mixed: null == n.color,
                        onChange: (e) => {
                          ;(0, nC.HO)(u.textColor, e, !1, p) && l({ color: e })
                        },
                      }),
                    }),
                  n &&
                    "text-size" === m &&
                    c.push({
                      kind: "popover",
                      id: "text-size",
                      label: "Text size",
                      icon: I.m5,
                      hideLabel: !0,
                      ...h(u.fontSize),
                      align: "center",
                      content: (0, r.jsx)(nA, {
                        config: u.fontSize,
                        fontSize: n.fontSize,
                        onChange: (e) => {
                          ;(0, nC.XT)(u.fontSize, e, { min: 1 }) && l({ fontSize: e })
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
                      subLabel: (0, r.jsx)(nF, {
                        className: "block size-4 rounded border border-black/10",
                        color: i ?? "#FFFFFF",
                      }),
                      content: (0, r.jsx)(nL.IM, {
                        inline: !0,
                        config: u.fill,
                        disabled: !(0, nC.J3)(u.fill),
                        allowCustom: u.fill.options?.allowCustom,
                        palette: u.fill.options?.palette,
                        ariaLabel: "Custom fill color",
                        value: i ?? "#FFFFFF",
                        onChange: (e) => {
                          ;(0, nC.HO)(u.fill, e, !1, p) && a(e)
                        },
                      }),
                    }),
                  "format" === m &&
                    s &&
                    c.push({
                      kind: "button",
                      id: "style-picker",
                      label: "Open style picker",
                      icon: I.TP,
                      hideLabel: !0,
                      isActive: o,
                      ...h(u.format),
                      onClick: () => {
                        ;(0, nC.J3)(u.format) && s()
                      },
                    }),
                  "delete" === m &&
                    d &&
                    c.push({
                      kind: "button",
                      id: "delete",
                      label: "Delete selection",
                      icon: I.uc,
                      hideLabel: !0,
                      ...h(u.delete),
                      onClick: () => {
                        ;(0, nC.J3)(u.delete) && d()
                      },
                    }))
              return c
            })({
              capabilities: C,
              config: j,
              textStyle: H,
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
              onToggleInspector: W ? b : void 0,
            }),
            h?.startComment && "hidden" !== j.controls.comment.state
              ? [
                  {
                    kind: "button",
                    id: "add-comment",
                    label: "Add comment",
                    icon: I.Tw,
                    hideLabel: !0,
                    isDisabled: !(0, nC.J3)(j.controls.comment),
                    disabledReason: j.controls.comment.reason,
                    onClick: () => {
                      ;(0, nC.J3)(j.controls.comment) && h.startComment?.()
                    },
                  },
                ]
              : [],
          ]
            .filter((e) => e.length > 0)
            .flatMap((e, t) => (0 === t ? e : [{ kind: "separator", id: `group-${t}` }, ...e])),
          ei =
            A || B
              ? (0, r.jsxs)("form", {
                  "aria-busy": B || D,
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
                    if ((e.preventDefault(), B || N)) return void et()
                    let t = e.currentTarget.closest("[role='toolbar']")
                    ;((0, S.flushSync)(() => T(!1)),
                      t?.querySelector("button[data-toolbar-action='ask-chat']")?.focus())
                  },
                  children: [
                    (0, r.jsx)("input", {
                      autoFocus: !B,
                      "aria-label": $,
                      className:
                        "min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm text-token-text-primary shadow-none outline-none placeholder:text-token-text-tertiary focus:ring-0",
                      placeholder: h?.creationRequest?.placeholder ?? $,
                      value: z?.body ?? E,
                      readOnly: B || D,
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
                            D ||
                            !E.trim() ||
                            (N ? N.disabled : h?.defaultSubmitMode === "saved" && h.savedSubmitDisabled),
                          className:
                            "flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary transition-transform duration-100 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100",
                          children: (0, r.jsx)(I.MM, { className: "size-4" }),
                        }),
                  ],
                })
              : null
        return (0, r.jsx)(
          nS.d,
          {
            ariaLabel: B ? (V ? "Generating image" : "Updating chart") : A ? "Ask for change" : "Selection actions",
            bounds: c,
            boundsSource: u,
            isVisible: Y,
            containerElement: m,
            collisionBoundaryElement: p,
            items: er,
            overlayContent: ei,
            overlayVisible: A || B,
            overlayWidth: 360,
            onKeyDown: (e) => {
              "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), et())
            },
          },
          JSON.stringify(j),
        )
      })
    var nZ = n("Vynp")
    let nJ = nk.M.map(({ value: e }) => e)
    var nY = n("sQ5U")
    let nQ = {
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
      n0 = { state: "hidden" }
    function n1(e, t) {
      let n = nQ[t]
      return n && "number" === nY.h[n].kind ? e[n] : n0
    }
    function n2(e, t) {
      let n = nQ[t]
      return n && "color" === nY.h[n].kind ? e[n] : n0
    }
    function n4(e, t) {
      let n = nQ[t]
      return n && "choice" === nY.h[n].kind ? e[n] : n0
    }
    let n3 = nk.M.map(({ value: e }) => e),
      n5 = (e) => null !== e && "object" == typeof e && !Array.isArray(e)
    function n6(e, t, n, r) {
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
          let a = nQ[l]
          if (
            a &&
            l.endsWith(".minorGridlines") &&
            null == r &&
            n5(n) &&
            "solid" === n.style &&
            "#D1D5DB" === n.fill &&
            1 === n.width &&
            3 === Object.keys(n).length &&
            (0, nC.J3)(e.controls[a])
          )
            return ((i = !0), !0)
          if (a && !(n5(n) && "plain" === nY.h[a].kind)) {
            let t = e.controls[a]
            if (!(0, nC.J3)(t)) return !1
            i = !0
            let r = nY.h[a].kind
            return "number" === r
              ? null === n || ("number" == typeof n && (0, nC.XT)(n1(e.controls, l), n))
              : "color" === r
                ? "string" == typeof n && (0, nC.HO)(n2(e.controls, l), n, !0, n3)
                : "choice" === r
                  ? "string" == typeof n && (0, nC.lB)(n4(e.controls, l), n)
                  : "boolean" == typeof n || "string" == typeof n || (null === n && l.endsWith("Gridlines"))
          }
          return !!n5(n) && Object.entries(n).every(([e, n]) => t(n, n5(r) ? r[e] : void 0, l ? `${l}.${e}` : e))
        })(n, t.formatting, "") &&
        i
      )
    }
    function n8(e, t, n, r) {
      return "number" == typeof t && (0, nC.XT)(e, t, { min: n, max: r })
    }
    let n9 = nk.M.map((e) => e.value),
      n7 = nk.M.map(({ value: e }) => e)
    var re = n("CLcl"),
      rt = n("nQE8")
    function rn(e) {
      return "string" == typeof e ? e : e?.type === "rgb" || e?.type === "theme" ? e.value : void 0
    }
    function rr(e) {
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
    let ri = nk.M.map(({ value: e }) => e)
    function rl(e, t) {
      let n = { state: "enabled", options: e.options }
      return [t, ...(e.options?.palette ?? ri)].find((e) => (0, nC.HO)(n, e, !1, ri))
    }
    function ra(e, t, n = -1 / 0, r = 1 / 0) {
      let i = { state: "enabled", options: e.options },
        l = Math.max(Math.max(n, e.options?.min ?? -1 / 0), Math.min(Math.min(r, e.options?.max ?? 1 / 0), t))
      return [t, ...(e.options?.presets ?? []), l].find((e) => (0, nC.XT)(i, e, { min: n, max: r }))
    }
    function ro(e, t = 50, n = "#888888") {
      let r = rl(e.gradientStopColor, n),
        i = ra(e.gradientStopPosition, t, 0, 100)
      if (void 0 !== r && void 0 !== i) return { offset: 1e3 * i, color: r }
    }
    let rs = nk.M.map(({ value: e }) => e)
    function rd(e) {
      return JSON.stringify(e, (e, t) =>
        !t || "object" != typeof t || Array.isArray(t)
          ? t
          : Object.fromEntries(Object.entries(t).sort(([e], [t]) => e.localeCompare(t))),
      )
    }
    let rc = (e, t) => rd(e) === rd(t)
    function ru(e, t, n, r) {
      if (rc(n, t)) return !1
      if ("string" == typeof n) return (0, nC.HO)(e.color, n, !0, rs)
      let i = rr(n)
      if (void 0 === i) return !1
      if (i !== rr(t ?? r ?? void 0))
        return (
          !!(0, nC.lB)(e.type, i) &&
          rc(
            n,
            (function (e, t, n) {
              if (!(0, nC.lB)({ state: "enabled", options: n.type.options }, e)) return
              if ("none" === e) return { type: "none" }
              if ("solid" === e) {
                let e =
                    "string" == typeof t ? t : t?.type === "solid" ? rn(t.color) : t?.type === "none" ? "none" : void 0,
                  r = rl(n.color, e && "none" !== e ? e : "#4f46e5")
                return void 0 === r ? void 0 : { type: "solid", color: r }
              }
              if ("gradient" === e) {
                let e = ra(n.gradientAngle, 0),
                  t = ro(n, 0, "#4f46e5"),
                  r = ro(n, 100, "#ffffff")
                if (void 0 === e || !t || !r) return
                return { type: "gradient", angleDeg: e, offsetScale: 1e5, stops: [t, r] }
              }
              let r = rt.W.shape.type.options.filter(
                  (e) =>
                    "none" !== e &&
                    "solid" !== e &&
                    (0, nC.lB)({ state: "enabled", options: n.patternType.options }, e),
                ),
                i = r.includes("percent50") ? "percent50" : r[0],
                l = rl(n.color, "#ffffff"),
                a = rl(n.patternColor, "#4f46e5")
              if (i && void 0 !== l && void 0 !== a) return { type: "solid", color: l, pattern: { type: i, color: a } }
            })(i, t ?? r ?? void 0, e),
          )
        )
      if ("none" === n.type) return (0, nC.lB)(e.type, "none")
      if ("solid" === n.type) {
        let i = "object" == typeof t && "solid" === t.type ? t : void 0
        return (
          (!!rc(n.color, i?.color ?? r) || !!(0, nC.HO)(e.color, rn(n.color) ?? null, !1, rs)) &&
          (n.pattern?.type === i?.pattern?.type || (!!n.pattern && !!(0, nC.lB)(e.patternType, n.pattern.type))) &&
          (!!rc(n.pattern?.color, i?.pattern?.color) ||
            (!!n.pattern && !!(0, nC.HO)(e.patternColor, rn(n.pattern.color) ?? null, !1, rs)))
        )
      }
      if (
        "gradient" !== n.type ||
        "object" != typeof t ||
        "gradient" !== t.type ||
        !rc({ ...t, angleDeg: n.angleDeg, stops: n.stops }, n) ||
        (n.angleDeg !== t.angleDeg && (void 0 === n.angleDeg || !(0, nC.XT)(e.gradientAngle, n.angleDeg)))
      )
        return !1
      if (n.stops.length !== t.stops.length) {
        if (!(0, nC.J3)(e.gradientStops)) return !1
        let r = n.stops.length < t.stops.length ? n.stops : t.stops,
          i = n.stops.length < t.stops.length ? t.stops : n.stops,
          l = 0,
          a = ro(e),
          o = a ? { ...a, offset: (a.offset / 1e5) * (n.offsetScale ?? 1e5) } : void 0
        for (let e of i)
          if (rc(e, r[l])) l += 1
          else if (n.stops.length > t.stops.length && !rc(e, o)) return !1
        return l === r.length
      }
      return n.stops.every((r, i) => {
        let l = t.stops[i]
        if (!rc(r.color, l.color) && !(0, nC.HO)(e.gradientStopColor, rn(r.color) ?? null, !1, rs)) return !1
        let a = (r.offset / (n.offsetScale ?? 1e5)) * 100
        return r.offset === l.offset || (0, nC.XT)(e.gradientStopPosition, a, { min: 0, max: 100 })
      })
    }
    function rp(e, t) {
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
    let rh = nk.M.map(({ value: e }) => e),
      rm = nk.M.map(({ value: e }) => e),
      rf = nk.M.map(({ value: e }) => e),
      rg = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
      rx = nk.M.map((e) => e.value)
    var rb = n("Ulkn"),
      ry = n("wi9J")
    let rv = {
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
    function rw({ source: e, config: t = nZ.qN }) {
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
                    (0, nC.lB)(a.displayBlanksAs, n.displayBlanksAs)
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
                            (0, nC.J3)("bar" === n.family ? r.barVaryColors : r.lineVaryColors),
                        )
                      case "pie":
                        return i.every(([e, t]) => "firstSliceAngle" === e && n8(r.pieRotation, t, 0, 360))
                      case "doughnut":
                        return i.every(([e, t]) => "firstSliceAngle" === e && n8(r.doughnutRotation, t, 0, 360))
                      case "scatter":
                        return i.every(
                          ([e, n]) =>
                            ("varyColors" === e &&
                              "boolean" == typeof n &&
                              t.familyOptions?.varyColorsApplies === !0 &&
                              (0, nC.J3)(r.scatterVaryColors)) ||
                            ("style" === e && "string" == typeof n && (0, nC.lB)(r.scatterStyle, n)),
                        )
                      case "radar":
                        return i.every(
                          ([e, n]) =>
                            ("varyColors" === e &&
                              "boolean" == typeof n &&
                              t.familyOptions?.varyColorsApplies === !0 &&
                              (0, nC.J3)(r.radarVaryColors)) ||
                            ("style" === e && "string" == typeof n && (0, nC.lB)(r.radarStyle, n)),
                        )
                      case "treemap":
                        return i.every(
                          ([e, t]) =>
                            "parentLabelLayout" === e && "string" == typeof t && (0, nC.lB)(r.treemapParentLabels, t),
                        )
                      case "funnel":
                        return i.every(
                          ([e, t]) =>
                            "gapWidth" === e &&
                            "number" == typeof t &&
                            n8(
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
                            ? (null === t || "boolean" == typeof t) && (0, nC.J3)(r.bubbleNegative)
                            : "scale" === e
                              ? null === t
                                ? (0, nC.J3)(r.bubbleScale)
                                : n8(r.bubbleScale, t, 0, 300)
                              : "sizeRepresents" === e && "string" == typeof t && (0, nC.lB)(r.bubbleSizeRepresents, t),
                        )
                      case "boxWhisker":
                        return i.every(([e, t]) => {
                          if ("quartileMethod" === e) return "string" == typeof t && (0, nC.lB)(r.boxQuartiles, t)
                          if ("boolean" != typeof t) return !1
                          switch (e) {
                            case "showMeanLine":
                              return (0, nC.J3)(r.boxMeanLine)
                            case "showMeanMarker":
                              return (0, nC.J3)(r.boxMeanMarker)
                            case "showOutliers":
                              return (0, nC.J3)(r.boxOutliers)
                            case "showNonOutliers":
                              return (0, nC.J3)(r.boxInnerPoints)
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
                            !(0, nC.lB)(r.histogramBinMode, o))
                        )
                          return !1
                        return i.every(([e, t]) => {
                          switch (e) {
                            case "binWidth":
                              return (
                                (null === t &&
                                  ((0, nC.J3)(r.histogramBinWidth) || (0, nC.lB)(r.histogramBinMode, "automatic"))) ||
                                n8(r.histogramBinWidth, t, 5e-324)
                              )
                            case "binCount":
                              return (
                                null === t ||
                                ("number" == typeof t && Number.isInteger(t) && n8(r.histogramBinCount, t, 1, 1e4))
                              )
                            case "underflow":
                              return null === t ? (0, nC.J3)(r.histogramUnderflow) : n8(r.histogramUnderflow, t)
                            case "overflow":
                              return null === t ? (0, nC.J3)(r.histogramOverflow) : n8(r.histogramOverflow, t)
                            case "intervalClosed":
                              return (1 === t || 2 === t) && (0, nC.lB)(r.histogramBoundary, 1 === t ? "left" : "right")
                            case "aggregated":
                              return "boolean" == typeof t && (0, nC.J3)(r.histogramAggregated)
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
                    if (("chart" !== n.target.scope || "enabled" === a.state) && !(0, nC.lB)(a, n.target.scope))
                      return !1
                    let o = (0, nC.J3)(e.controls.dataLabelsReset)
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
                          let l = nQ[i]
                          if (null === n)
                            return (
                              o &&
                              (l
                                ? (0, nC.J3)(e.controls[l])
                                : (function t(n, r) {
                                    var i
                                    let l
                                    return (
                                      (l = "stroke" === (i = r.slice(11)) ? "line" : i),
                                      !s.some((e) => e === l || e.startsWith(`${l}.`)) &&
                                        !!rg(n) &&
                                        Object.entries(n).every(([n, i]) => {
                                          if (void 0 === i) return !0
                                          let l = `${r}.${n}`,
                                            a = nQ[l]
                                          return a ? (0, nC.J3)(e.controls[a]) : t(i, l)
                                        })
                                    )
                                  })(r, i))
                            )
                          if (!l)
                            return (
                              rg(n) && Object.entries(n).every(([e, n]) => t(n, rg(r) ? r[e] : void 0, `${i}.${e}`))
                            )
                          if (!(0, nC.J3)(e.controls[l])) return !1
                          switch (nY.h[l].kind) {
                            case "number":
                              return "number" == typeof n && (0, nC.XT)(n1(e.controls, i), n)
                            case "color":
                              return "string" == typeof n && (0, nC.HO)(n2(e.controls, i), n, !0, rf)
                            case "choice":
                              return "string" == typeof n && (0, nC.lB)(n4(e.controls, i), n)
                            case "plain":
                              return "boolean" == typeof n || "string" == typeof n
                          }
                        })(
                          n,
                          (function (e) {
                            if (rg(d)) return "line" === e || "stroke" === e ? (d.line ?? d.stroke) : d[e]
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
                            (0, nC.J3)(e.seriesTrendlineAdd) &&
                            (0, nC.lB)(e.seriesTrendlineType, t) &&
                            (void 0 === n.polynomialOrder || "polynomial" === t) &&
                            (void 0 === n.movingAveragePeriod || "movingAverage" === t) &&
                            ("polynomial" !== t ||
                              (Number.isInteger(n.polynomialOrder ?? 2) &&
                                (0, nC.XT)(e.seriesTrendlinePolynomialOrder, n.polynomialOrder ?? 2, {
                                  min: 2,
                                  max: 6,
                                }))) &&
                            ("movingAverage" !== t ||
                              (Number.isInteger(n.movingAveragePeriod ?? 2) &&
                                (0, nC.XT)(e.seriesTrendlineMovingAveragePeriod, n.movingAveragePeriod ?? 2, {
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
                    if ("delete-chart-trendline" === n.type) return (0, nC.J3)(e.seriesTrendlineRemove)
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
                            (0, nC.lB)(e.seriesTrendlineType, r) &&
                            ("polynomial" !== r ||
                              i?.polynomialOrder !== void 0 ||
                              (0, nC.XT)(e.seriesTrendlinePolynomialOrder, 2, { min: 2, max: 6 })) &&
                            ("movingAverage" !== r ||
                              i?.movingAveragePeriod !== void 0 ||
                              (0, nC.XT)(e.seriesTrendlineMovingAveragePeriod, 2, { min: 2, max: 255 }))
                          ))))
                    )
                      return !1
                    let s = o.type ?? a.type
                    if (
                      (void 0 !== o.name && !(0, nC.J3)(e.seriesTrendlineName)) ||
                      (void 0 !== o.polynomialOrder &&
                        ("polynomial" !== s ||
                          !(0, nC.J3)(e.seriesTrendlinePolynomialOrder) ||
                          !Number.isInteger(o.polynomialOrder ?? 2) ||
                          !(0, nC.XT)(e.seriesTrendlinePolynomialOrder, o.polynomialOrder ?? 2, { min: 2, max: 6 }))) ||
                      (void 0 !== o.movingAveragePeriod &&
                        ("movingAverage" !== s ||
                          !(0, nC.J3)(e.seriesTrendlineMovingAveragePeriod) ||
                          !Number.isInteger(o.movingAveragePeriod ?? 2) ||
                          !(0, nC.XT)(e.seriesTrendlineMovingAveragePeriod, o.movingAveragePeriod ?? 2, {
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
                        ("movingAverage" === s || !(0, nC.J3)(r) || !(0, nC.XT)(r, n ?? 0, { min: 0 }))
                      )
                        return !1
                    }
                    if (
                      (void 0 !== o.intercept &&
                        (!["linear", "polynomial", "exponential"].includes(s ?? "") ||
                          !(0, nC.J3)(e.seriesTrendlineIntercept) ||
                          (null !== o.intercept &&
                            (!(0, nC.XT)(e.seriesTrendlineIntercept, o.intercept) ||
                              ("exponential" === s && o.intercept <= 0))))) ||
                      (void 0 !== o.displayEquation &&
                        ("movingAverage" === s || !(0, nC.J3)(e.seriesTrendlineDisplayEquation))) ||
                      (void 0 !== o.displayRSquared &&
                        ("movingAverage" === s || !(0, nC.J3)(e.seriesTrendlineDisplayRSquared)))
                    )
                      return !1
                    let d = o.line
                    return (
                      (void 0 === o.label ||
                        !!(function (e, t, n) {
                          if (!n || !Object.keys(n).length) return !1
                          let r = t.label
                          if (
                            (void 0 !== n.text && !(0, nC.J3)(e.seriesTrendlineLabelText)) ||
                            (!(t.displayEquation || t.displayRSquared || (n.text ?? r?.text)) &&
                              Object.keys(n).some((e) => "text" !== e)) ||
                            (void 0 !== n.numberFormatSourceLinked &&
                              !(0, nC.J3)(e.seriesTrendlineLabelSourceLinked)) ||
                            (void 0 !== n.numberFormatCode &&
                              ((n.numberFormatSourceLinked ?? r?.numberFormatSourceLinked) ||
                                !(0, nC.J3)(e.seriesTrendlineLabelNumberFormat)))
                          )
                            return !1
                          if (void 0 !== n.manualLayout) {
                            let t = n.manualLayout
                            if (null === t) {
                              if (!(0, nC.J3)(e.seriesTrendlineLabelAutomaticPosition)) return !1
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
                                  (null === r || !(0, nC.XT)(n[e], 100 * r, "w" === e || "h" === e ? { min: 0 } : {}))
                                )
                                  return !1
                              }
                            }
                          }
                          if (void 0 !== n.fill) {
                            let t = re.xY.safeParse(n.fill)
                            if (!t.success || !ru(rp(e, "background"), r?.fillValue, t.data)) return !1
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
                              if (void 0 !== i[t] && (null === i[t] || !(0, nC.J3)(n))) return !1
                            }
                            if (
                              void 0 !== i.family ||
                              void 0 !== i.fontSizePt ||
                              void 0 !== i.color ||
                              (void 0 !== i.fontSize &&
                                ("number" != typeof i.fontSize ||
                                  !(0, nC.XT)(e.seriesTrendlineLabelSize, i.fontSize, { min: 1 }))) ||
                              (void 0 !== i.rotation &&
                                (null === i.rotation || !(0, nC.XT)(e.seriesTrendlineLabelRotation, i.rotation))) ||
                              (void 0 !== i.alignment &&
                                ("string" != typeof i.alignment ||
                                  !(0, nC.lB)(e.seriesTrendlineLabelAlignment, i.alignment)))
                            )
                              return !1
                            if (void 0 !== i.fill) {
                              let t = re.xY.safeParse(i.fill)
                              if (!t.success || !ru(rp(e, "text"), r?.textFillValue, t.data)) return !1
                            }
                          }
                          let l = n.line
                          return (
                            (void 0 === l ||
                              (!!l &&
                                !!Object.keys(l).length &&
                                (void 0 === l.fill ||
                                  ("string" == typeof l.fill &&
                                    !!(0, nC.HO)(e.seriesTrendlineLabelLineColor, l.fill, !0, rh))) &&
                                (void 0 === l.width ||
                                  (null !== l.width &&
                                    !!(0, nC.XT)(e.seriesTrendlineLabelLineWidth, l.width, { min: 0 }))) &&
                                (void 0 === l.style ||
                                  (null !== l.style && !!(0, nC.lB)(e.seriesTrendlineLabelLineStyle, l.style))) &&
                                (void 0 === l.compound ||
                                  (null !== l.compound &&
                                    !!(0, nC.lB)(e.seriesTrendlineLabelLineCompound, l.compound))))) &&
                            !0
                          )
                        })(e, a, o.label)) &&
                      (void 0 === d ||
                        (null !== d &&
                          0 !== Object.keys(d).length &&
                          (void 0 === d.compound ||
                            (null !== d.compound && !!(0, nC.lB)(e.seriesTrendlineLineCompound, d.compound))) &&
                          (void 0 === d.fill ||
                            ("string" == typeof d.fill && (0, nC.HO)(e.seriesTrendlineLineColor, d.fill, !0, rm))) &&
                          (void 0 === d.width ||
                            (null !== d.width && (0, nC.XT)(e.seriesTrendlineLineWidth, d.width, { min: 0 }))) &&
                          (void 0 === d.style ||
                            (null !== d.style && (0, nC.lB)(e.seriesTrendlineLineStyle, d.style)))))
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
                      (void 0 !== i.type && !(0, nC.lB)(e.seriesErrorBarsType, i.type))
                    )
                      return !1
                    let l = i.type ?? r.type
                    if (
                      (void 0 !== i.value &&
                        (null === i.value ||
                          !["percentage", "standardDeviation", "fixedValue"].includes(l ?? "") ||
                          !(0, nC.XT)(e.seriesErrorBarsValue, i.value, { min: 0 }))) ||
                      (void 0 !== i.display &&
                        ("none" === l || null === i.display || !(0, nC.lB)(e.seriesErrorBarsDisplay, i.display))) ||
                      (void 0 !== i.endStyle &&
                        ("none" === l || null === i.endStyle || !(0, nC.lB)(e.seriesErrorBarsEndStyle, i.endStyle)))
                    )
                      return !1
                    let a = i.line
                    return (
                      void 0 === a ||
                      (null !== a &&
                        "none" !== l &&
                        (void 0 === a.compound ||
                          (null !== a.compound && !!(0, nC.lB)(e.seriesErrorBarsLineCompound, a.compound))) &&
                        (void 0 === a.fill ||
                          ("string" == typeof a.fill && (0, nC.HO)(e.seriesErrorBarsLineColor, a.fill, !0, n7))) &&
                        (void 0 === a.width ||
                          (null !== a.width && (0, nC.XT)(e.seriesErrorBarsLineWidth, a.width, { min: 0 }))) &&
                        (void 0 === a.style || (null !== a.style && (0, nC.lB)(e.seriesErrorBarsLineStyle, a.style))))
                    )
                  })(a, t, n)
                  break
                case "set-chart-format":
                  o = n6(e, t, n.config, void 0)
                  break
                case "set-chart-axis-format": {
                  let r = t.axisTargets?.find((e) => e.axisId === n.axisId)
                  o = !!r && n6(e, t, { [`${r.axis}Axis`]: n.config }, n.axisId)
                  break
                }
                case "set-chart-type":
                  o = t.compatibleTypes.includes(n.chartType) && (0, nC.lB)(a.type, n.chartType)
                  break
                case "set-chart-title":
                  o = (0, nC.J3)(a.title)
                  break
                case "set-chart-legend":
                  o =
                    (void 0 === n.visible || (0, nC.J3)(a.legendVisible)) &&
                    (void 0 === n.position || (t.legend.visible && (0, nC.lB)(a.legendPosition, n.position)))
                  break
                case "set-chart-axis":
                  o = ("both" === n.axis ? ["x", "y"] : [n.axis]).every((e) => {
                    let r =
                      void 0 === n.axisId ? t.axes?.[e] : t.axisTargets?.find((e) => e.axisId === n.axisId)?.settings
                    return (
                      !!r &&
                      (void 0 === n.visible || (0, nC.J3)(a[`${e}AxisVisible`])) &&
                      (void 0 === n.title || (r.visible && (0, nC.J3)(a[`${e}AxisTitle`]))) &&
                      (void 0 === n.gridlines || (r.visible && (0, nC.J3)(a[`${e}Gridlines`])))
                    )
                  })
                  break
                case "set-chart-fill":
                  ;((r = n.area),
                    (i = n.fill),
                    (o =
                      e.enabled &&
                      ru(
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
                        (void 0 === r.symbol || (0, nC.lB)(e.seriesMarkerSymbol, r.symbol)) &&
                        (void 0 === r.size ||
                          (l &&
                            Number.isInteger(r.size) &&
                            (0, nC.XT)(e.seriesMarkerSize, r.size, { min: 2, max: 72 }))) &&
                        (void 0 === r.fill || (l && (0, nC.HO)(e.seriesMarkerColor, r.fill, !0, n9)))
                      )
                    })(a, t, n) &&
                    (!(s = n.stroke) ||
                      (!!t.capabilities.line &&
                        0 !== Object.keys(s).length &&
                        (void 0 === s.fill || (0, nC.HO)(a.seriesLineColor, s.fill, !0, nJ)) &&
                        (void 0 === s.width || (0, nC.XT)(a.seriesLineWidth, s.width, { min: 0 })) &&
                        (void 0 === s.style || (0, nC.lB)(a.seriesLineStyle, s.style)) &&
                        (void 0 === s.compound || (0, nC.lB)(a.seriesLineCompound, s.compound)))) &&
                    t.series.some((e) => e.index === n.seriesIndex) &&
                    (void 0 === n.name || (0, nC.J3)(a.seriesName)) &&
                    (void 0 === n.color ||
                      (t.capabilities.seriesColor && (0, nC.HO)(a.seriesColor, n.color, !1, rx))) &&
                    (void 0 === n.smooth || (t.capabilities.smoothing && (0, nC.J3)(a.seriesSmoothing))) &&
                    (void 0 === n.markers || (t.capabilities.markers && (0, nC.J3)(a.seriesMarkers)))
                  break
                case "set-chart-slice-color":
                  o =
                    t.slices.some((e) => e.seriesIndex === n.seriesIndex && e.pointIndex === n.pointIndex) &&
                    (0, nC.HO)(a.sliceColor, n.color, !1, rx)
                  break
                case "set-chart-layout":
                  o =
                    (void 0 === n.gapWidth ||
                      (void 0 !== t.barSpacing &&
                        Number.isInteger(n.gapWidth) &&
                        (0, nC.XT)(a.barGapWidth, n.gapWidth, { min: 0, max: 500 }))) &&
                    (void 0 === n.overlap ||
                      (void 0 !== t.barSpacing &&
                        (n.grouping ?? t.grouping) === "standard" &&
                        Number.isInteger(n.overlap) &&
                        (0, nC.XT)(a.barOverlap, n.overlap, { min: -100, max: 100 }))) &&
                    (void 0 === n.direction || (null !== t.direction && (0, nC.lB)(a.direction, n.direction))) &&
                    (void 0 === n.grouping || (null !== t.grouping && (0, nC.lB)(a.grouping, n.grouping))) &&
                    (void 0 === n.holeSize ||
                      (null !== t.holeSize && (0, nC.XT)(a.holeSize, n.holeSize, { min: 10, max: 90 })))
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
              ? (0, r.jsxs)(rb.E, {
                  title: "Chart",
                  children: [
                    n.compatibleTypes.length > 1
                      ? (0, r.jsx)(nB.X, {
                          label: "Type",
                          config: i.type,
                          children: (0, r.jsx)("select", {
                            "aria-label": "Chart type",
                            disabled: "enabled" !== i.type.state,
                            title: i.type.reason,
                            value: n.chartType,
                            className: ry._6,
                            onChange: (e) =>
                              l({ type: "set-chart-type", chartId: a, chartType: e.currentTarget.value }),
                            children: rk(i.type, n.compatibleTypes, n.chartType).map((e) =>
                              (0, r.jsx)(
                                "option",
                                { value: e, disabled: !(0, nC.lB)(i.type, e), children: rv[e] ?? e },
                                e,
                              ),
                            ),
                          }),
                        })
                      : "hidden" !== i.type.state
                        ? (0, r.jsx)("p", {
                            className: "text-xs text-token-text-secondary",
                            children: rv[n.chartType] ?? n.chartType,
                          })
                        : null,
                    (0, r.jsx)(rS, {
                      label: "Title",
                      ariaLabel: "Chart title",
                      config: i.title,
                      value: n.title,
                      onCommit: (e) => l({ type: "set-chart-title", chartId: a, title: e }),
                    }),
                    null !== n.direction
                      ? (0, r.jsx)(nV.s, {
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
                      ? (0, r.jsx)(nB.X, {
                          label: "Grouping",
                          config: i.grouping,
                          children: (0, r.jsx)("select", {
                            "aria-label": "Chart grouping",
                            disabled: "enabled" !== i.grouping.state,
                            title: i.grouping.reason,
                            className: ry._6,
                            value: n.grouping,
                            onChange: (e) =>
                              l({ type: "set-chart-layout", chartId: a, grouping: e.currentTarget.value }),
                            children: rk(i.grouping, ["standard", "stacked", "percentStacked"], n.grouping).map((e) =>
                              (0, r.jsx)(
                                "option",
                                {
                                  value: e,
                                  disabled: !(0, nC.lB)(i.grouping, e),
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
                      ? (0, r.jsx)(nO.S, {
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
              ? (0, r.jsxs)(rb.E, {
                  title: "Legend",
                  children: [
                    (0, r.jsx)(rC, {
                      label: "Show chart legend",
                      config: i.legendVisible,
                      pressed: n.legend.visible,
                      onClick: () => l({ type: "set-chart-legend", chartId: a, visible: !n.legend.visible }),
                    }),
                    n.legend.visible
                      ? (0, r.jsx)(nB.X, {
                          label: "Position",
                          config: i.legendPosition,
                          children: (0, r.jsx)("select", {
                            "aria-label": "Legend position",
                            disabled: "enabled" !== i.legendPosition.state,
                            title: i.legendPosition.reason,
                            value: n.legend.position,
                            className: ry._6,
                            onChange: (e) =>
                              l({ type: "set-chart-legend", chartId: a, position: e.currentTarget.value }),
                            children: rk(
                              i.legendPosition,
                              ["top", "bottom", "left", "right", "topRight"],
                              n.legend.position,
                            ).map((e) =>
                              (0, r.jsx)(
                                "option",
                                {
                                  value: e,
                                  disabled: !(0, nC.lB)(i.legendPosition, e),
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
              ? (0, r.jsx)(rb.E, {
                  title: "Axes",
                  defaultOpen: !1,
                  children: ["x", "y"].map((e) => {
                    let t = n.axes[e]
                    return (0, r.jsxs)(
                      "div",
                      {
                        className: "flex flex-col gap-3",
                        children: [
                          (0, r.jsx)(rC, {
                            label: `Show ${e.toUpperCase()} axis`,
                            config: i[`${e}AxisVisible`],
                            pressed: t.visible,
                            onClick: () => l({ type: "set-chart-axis", chartId: a, axis: e, visible: !t.visible }),
                          }),
                          (0, r.jsx)(rS, {
                            label: "Title",
                            ariaLabel: `${e.toUpperCase()} axis title`,
                            config: i[`${e}AxisTitle`],
                            value: t.title,
                            onCommit: (t) => l({ type: "set-chart-axis", chartId: a, axis: e, title: t }),
                          }),
                          (0, r.jsx)(rC, {
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
              ? (0, r.jsxs)(rb.E, {
                  title: "Appearance",
                  children: [
                    (0, r.jsx)(nB.X, {
                      label: "Background",
                      config: i.background,
                      children: (0, r.jsx)(nL.IM, {
                        ariaLabel: "Chart background",
                        config: i.background,
                        value: n.fill ?? "#FFFFFF",
                        mixed: null === n.fill,
                        mixedLabel: "Default",
                        allowNone: !0,
                        onChange: (e) => l({ type: "set-chart-fill", chartId: a, area: "chart", fill: e }),
                      }),
                    }),
                    (0, r.jsx)(nB.X, {
                      label: "Plot area",
                      config: i.plotBackground,
                      children: (0, r.jsx)(nL.IM, {
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
                rb.E,
                {
                  title: e.name || `Series ${e.index + 1}`,
                  defaultOpen: 0 === e.index,
                  children: [
                    (0, r.jsx)(rS, {
                      label: "Name",
                      ariaLabel: `Series ${e.index + 1} name`,
                      config: i.seriesName,
                      value: e.name,
                      onCommit: (t) => l({ type: "set-chart-series", chartId: a, seriesIndex: e.index, name: t }),
                    }),
                    n.capabilities.seriesColor
                      ? (0, r.jsx)(nB.X, {
                          label: "Color",
                          config: i.seriesColor,
                          children: (0, r.jsx)(nL.IM, {
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
                      ? (0, r.jsx)(nO.S, {
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
                      ? (0, r.jsx)(rC, {
                          label: `Smooth series ${e.index + 1}`,
                          config: i.seriesSmoothing,
                          pressed: e.smooth,
                          onClick: () =>
                            l({ type: "set-chart-series", chartId: a, seriesIndex: e.index, smooth: !e.smooth }),
                        })
                      : null,
                    n.capabilities.markers
                      ? (0, r.jsx)(rC, {
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
              ? (0, r.jsx)(rb.E, {
                  title: "Slices",
                  children: n.slices.map((e) =>
                    (0, r.jsx)(
                      nB.X,
                      {
                        label: e.label,
                        config: i.sliceColor,
                        children: (0, r.jsx)(nL.IM, {
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
    function rC({ label: e, pressed: t, onClick: n, config: i }) {
      return (0, r.jsx)(nP, { label: e, config: i, pressed: t, onClick: n, children: e })
    }
    function rS({ label: e, ariaLabel: t, value: n, onCommit: i, config: l }) {
      let [a, o] = (0, d.useState)(n),
        s = (0, d.useRef)(!1),
        c = (0, nI.p)(l, i),
        u = (0, nC.ro)(l)
      return (
        (0, d.useEffect)(() => o(n), [n, u]),
        (0, r.jsx)(nB.X, {
          label: e,
          config: l,
          children: (0, r.jsx)("input", {
            "aria-label": t,
            disabled: "enabled" !== l.state,
            title: l.reason,
            value: a,
            className: ry._6,
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
    function rk(e, t, n) {
      return [...new Set([...t, n])].filter((t) => t === n || !e.options || e.options.values.includes(t))
    }
    var rI = n("nvH8"),
      rj = n("mE8Q"),
      rE = n("nSFX"),
      rM = n("WSzt"),
      rA = n("wBmQ"),
      rT = n("og1W")
    let rP = nk.M.map((e) => e.value)
    function rL({ source: e, config: t = nZ.y2 }) {
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
        u = (0, nI.p)(
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
            (void 0 === t.fill || (0, nC.HO)(s.fill, t.fill, !0, rP)) &&
            (void 0 === t.color || (0, nC.HO)(s.color, t.color, !1, rP)) &&
            (void 0 === t.fontSize || (0, nC.XT)(s.fontSize, t.fontSize, { min: 1 })) &&
            (void 0 === t.bold || (0, nC.J3)(s.bold)) &&
            (void 0 === t.italic || (0, nC.J3)(s.italic)) &&
            (void 0 === t.alignment || (0, nC.lB)(s.alignment, t.alignment)) &&
            (void 0 === t.verticalAlignment || (0, nC.lB)(s.verticalAlignment, t.verticalAlignment)) &&
            (void 0 === t.borderEdges || (0, nC.lB)(s.borderEdges, t.borderEdges)) &&
            (void 0 === t.borderColor || (0, nC.HO)(s.borderColor, t.borderColor, !1, rP)) &&
            (void 0 === t.borderWidth || (0, nC.XT)(s.borderWidth, t.borderWidth, { min: 0 })) &&
            (void 0 === t.borderStyle || (0, nC.lB)(s.borderStyle, t.borderStyle)) &&
            (void 0 === t.margins ||
              Object.keys(rN).every((e) => {
                let n = t.margins?.[e]
                return void 0 === n || (0, nC.XT)(s[rN[e]], n, { min: 0 })
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
              ? (0, r.jsxs)(rb.E, {
                  title: "Table cells",
                  children: [
                    (0, r.jsxs)("p", {
                      className: "text-xs text-token-text-secondary",
                      role: "status",
                      children: [
                        m.range.rowCount,
                        " ",
                        1 === m.range.rowCount ? "row" : "rows",
                        " × ",
                        m.range.columnCount,
                        " ",
                        1 === m.range.columnCount ? "column" : "columns",
                        " selected",
                      ],
                    }),
                    (0, r.jsx)(nB.X, {
                      label: "Fill",
                      config: s.fill,
                      children: (0, r.jsx)(
                        nL.IM,
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
                    (0, r.jsx)(nB.X, {
                      label: "Text color",
                      config: s.color,
                      children: (0, r.jsx)(
                        nL.IM,
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
                      nO.S,
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
                      ? (0, r.jsx)(nB.X, {
                          label: "Style",
                          children: (0, r.jsxs)("div", {
                            className: "grid grid-cols-2 gap-1",
                            children: [
                              (0, r.jsx)(nP, {
                                label: "Bold cell text",
                                config: s.bold,
                                pressed: !0 === x("bold"),
                                onClick: () => u({ bold: !0 !== x("bold") }),
                                children: (0, r.jsx)("span", { className: "font-bold", children: "B" }),
                              }),
                              (0, r.jsx)(nP, {
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
                    (0, r.jsx)(rF, {
                      label: "Horizontal alignment",
                      config: s.alignment,
                      children: (0, r.jsx)(nV.s, {
                        ariaLabel: "Cell horizontal alignment",
                        config: s.alignment,
                        value: x("alignment") ?? "",
                        options: [
                          { value: "left", label: "Left", icon: rE.V },
                          { value: "center", label: "Center", icon: rI.L },
                          { value: "right", label: "Right", icon: rM.U },
                        ],
                        onChange: (e) => u({ alignment: e }),
                      }),
                    }),
                    (0, r.jsx)(rF, {
                      label: "Vertical alignment",
                      config: s.verticalAlignment,
                      children: (0, r.jsx)(nV.s, {
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
              ? (0, r.jsxs)(rb.E, {
                  title: "Cell borders",
                  children: [
                    (0, r.jsx)(rF, {
                      label: "Border edges",
                      config: s.borderEdges,
                      children: (0, r.jsx)(nV.s, {
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
                    (0, r.jsx)(nB.X, {
                      label: "Color",
                      config: s.borderColor,
                      children: (0, r.jsx)(
                        nL.IM,
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
                      rR,
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
                    (0, r.jsx)(rF, {
                      label: "Line style",
                      config: s.borderStyle,
                      children: (0, r.jsx)(nV.s, {
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
              ? (0, r.jsx)(rb.E, {
                  title: "Cell padding",
                  children: ["top", "right", "bottom", "left"].map((e) =>
                    (0, r.jsx)(
                      rR,
                      {
                        config: s[rN[e]],
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
    function rF({ label: e, children: t, config: n }) {
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
    function rR(e) {
      return (0, r.jsx)("div", {
        className: "[&>label]:grid-cols-[104px_minmax(0,1fr)]",
        children: (0, r.jsx)(nO.S, { ...e }),
      })
    }
    let rN = { top: "paddingTop", right: "paddingRight", bottom: "paddingBottom", left: "paddingLeft" }
    var rD = n("eZ1w")
    let rz = [
      { value: "solid", label: "Solid" },
      { value: "dashed", label: "Dash" },
      { value: "dotted", label: "Dot" },
      { value: "dash-dot", label: "D-Dot" },
      { value: "dash-dot-dot", label: "D-2" },
    ]
    function rB() {
      let e,
        t,
        n,
        {
          fill: i,
          line: l,
          selectedElement: a,
          updateStyle: o,
        } = ((e = (0, rD.S)()),
        (t = (0, ei.k2)().inspector.selectedElement),
        (n = (0, d.useCallback)(
          (t) => {
            e.updateSelectedElementStyle(t)
          },
          [e],
        )),
        { fill: t?.fill ?? null, line: t?.line ?? null, selectedElement: t, updateStyle: n }),
        s = (0, g.lP)("presentation").panes.appearance.controls,
        c = (0, nI.p)(
          s.fillOpacity,
          (e) => o({ fillOpacityPct: e }),
          (e, t) => (0, nC.XT)(e, t, { min: 0, max: 100 }),
        ),
        u = (0, nI.p)(
          s.strokeOpacity,
          (e) => o({ strokeOpacityPct: e }),
          (e, t) => (0, nC.XT)(e, t, { min: 0, max: 100 }),
        ),
        p = (0, nI.p)(
          s.strokeWidth,
          (e) => o({ strokeWidth: e }),
          (e, t) => (0, nC.XT)(e, t, { min: 0 }),
        )
      return a && (i || l)
        ? (0, r.jsxs)(rb.E, {
            title: "Appearance",
            defaultOpen: !0,
            children: [
              i
                ? (0, r.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, r.jsx)(nB.X, {
                        config: s.fill,
                        label: "Fill",
                        children: (0, r.jsx)(nL.IM, {
                          value: i.color,
                          config: s.fill,
                          ariaLabel: "Fill color",
                          onChange: (e) => {
                            o({ fillColor: e })
                          },
                        }),
                      }),
                      (0, r.jsx)(nB.X, {
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
                          className: ry._6,
                        }),
                      }),
                    ],
                  })
                : null,
              l
                ? (0, r.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, r.jsx)(nB.X, {
                        config: s.stroke,
                        label: "Stroke",
                        children: (0, r.jsx)(nL.IM, {
                          value: l.color,
                          config: s.stroke,
                          ariaLabel: "Stroke color",
                          onChange: (e) => {
                            o({ strokeColor: e })
                          },
                        }),
                      }),
                      (0, r.jsx)(nB.X, {
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
                          className: ry._6,
                        }),
                      }),
                      (0, r.jsx)(nB.X, {
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
                          className: ry._6,
                        }),
                      }),
                      (0, r.jsx)(nB.X, {
                        config: s.strokeStyle,
                        label: "Stroke style",
                        children: (0, r.jsx)(nV.s, {
                          config: s.strokeStyle,
                          ariaLabel: "Stroke style",
                          value: l.style,
                          options: rz,
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
    let rO = [
      { value: "left", label: "Align left", icon: rE.V },
      { value: "center", label: "Align center", icon: rI.L },
      { value: "right", label: "Align right", icon: rM.U },
      { value: "justify", label: "Justify", icon: rj.a },
    ]
    function rV({ onClose: e, editorCapabilities: t, embedded: n = !1 }) {
      var i
      let l,
        a,
        o,
        s,
        c,
        u = (0, g.lP)("presentation"),
        p = u.panes.text.controls,
        h = es(x.mq, t),
        m = (0, rD.S)(),
        { selectedElement: f } =
          ((l = (0, rD.S)()),
          (a = (0, ei.k2)()),
          (o = (0, d.useCallback)(
            (e) => {
              l.setSelectedElementId(e)
            },
            [l],
          )),
          { selectedElement: a.inspector.selectedElement, slideElements: a.inspector.slideElements, selectElement: o }),
        { textStyle: b, updateTextStyle: y } =
          ((s = (0, rD.S)()),
          (c = (0, ei.k2)()),
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
            : b && "shape" === f.kind
              ? "Text"
              : (i = f.kind)
                ? `${i.charAt(0).toUpperCase()}${i.slice(1)}`
                : "Element"
      return (0, r.jsx)(rT.Z, {
        title: v,
        onClose: e,
        onKeyDown: (t) => {
          !(
            "Escape" !== t.key ||
            t.defaultPrevented ||
            !(0, E.Ul)(t) ||
            (0, E.tr)(t.target, { allowNumberAndRangeInputs: !0 })
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
                  ? (0, r.jsx)(rw, { config: u.panes.chart, source: m.chartEditing })
                  : "table" === f.kind && h.inspector.includes("appearance")
                    ? (0, r.jsx)(rL, { config: u.panes.tableCells, source: m.tableEditing })
                    : b && h.inspector.includes("text")
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
                                (0, r.jsx)(nM, {
                                  config: p.fontSize,
                                  fontSize: b.fontSize,
                                  onChange: (e) => {
                                    y({ textFontSize: e })
                                  },
                                }),
                                (0, r.jsxs)("div", {
                                  className: "grid grid-cols-4 gap-2",
                                  children: [
                                    (0, r.jsx)(nP, {
                                      config: p.bold,
                                      label: "Bold",
                                      pressed: b.bold,
                                      onClick: () => {
                                        y({ textBold: !b.bold })
                                      },
                                      children: (0, r.jsx)("span", { className: "text-base font-bold", children: "B" }),
                                    }),
                                    (0, r.jsx)(nP, {
                                      config: p.italic,
                                      label: "Italic",
                                      pressed: b.italic,
                                      onClick: () => {
                                        y({ textItalic: !b.italic })
                                      },
                                      children: (0, r.jsx)("span", { className: "text-base italic", children: "I" }),
                                    }),
                                    (0, r.jsx)(nP, {
                                      disabled: !0,
                                      config: p.strikethrough,
                                      label: "Strikethrough",
                                      children: (0, r.jsx)("span", {
                                        className: "text-base line-through",
                                        children: "S",
                                      }),
                                    }),
                                    (0, r.jsx)(nP, {
                                      config: p.underline,
                                      label: "Underline",
                                      pressed: b.underline,
                                      onClick: () => {
                                        y({ textUnderline: !b.underline })
                                      },
                                      children: (0, r.jsx)(rA.z, { className: "size-4" }),
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
                                (0, r.jsx)(nE, {
                                  config: p.color,
                                  color: b.color,
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
                                  children: rO
                                    .filter(
                                      ({ value: e }) =>
                                        "hidden" !== p.alignment.state &&
                                        (b.alignment === e ||
                                          !p.alignment.options ||
                                          p.alignment.options.values.includes(e)),
                                    )
                                    .map(({ value: e, label: t, icon: n }) =>
                                      (0, r.jsx)(
                                        nP,
                                        {
                                          config: p.alignment,
                                          disabled: !(0, nC.lB)(p.alignment, e),
                                          label: t,
                                          pressed: b.alignment === e,
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
                                      checked: "resizeShapeToFitText" === b.autoFit,
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
                        ? (0, r.jsx)(rB, {})
                        : (0, r.jsx)("p", {
                            className: "text-sm text-token-text-secondary select-none",
                            children: "No editable styles are available for this component.",
                          }),
          },
          f?.id ?? "empty",
        ),
      })
    }
    function r$({
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
        ;(a.togglePanel(er), u())
      }, [a, u])
      return (0, r.jsx)(
        nX,
        {
          editorCapabilities: m,
          controller: e,
          editToolbarRequested: o,
          floatingBar: s,
          isInspectorAvailable: a.isPanelAvailable(er),
          isInspectorOpen: a.isPanelOpen(er),
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
    var rH = n("R5i0"),
      rK = n("mtwz"),
      rq = n("DA69")
    let rW = [
      {
        id: "popcorn-presentation-inspector-plugin",
        panels: [
          {
            id: er,
            title: "Format",
            defaultOpen: !1,
            widthPx: 240,
            snapshotScope: "inspector",
            render: ({ panelControls: e, embedded: t }) =>
              (0, r.jsx)(rV, {
                embedded: t,
                editorCapabilities: void 0,
                onClose: () => {
                  e.closePanel(er)
                },
              }),
          },
        ],
        stageOverlays: [
          {
            id: "popcorn-presentation-inspector-pill-overlay",
            render: (e) => (0, r.jsx)(r$, { ...e, editorCapabilities: void 0 }),
          },
        ],
      },
    ]
    function rU({
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
      headerSidebarIcon: j,
      headerEditingIcons: E,
      renderHeader: M,
      renderEditingControls: A,
      renderLayout: T,
      panelsInLayout: P,
      renderDrawingToolCommands: L,
      footerContent: F,
      headerCenterContent: R,
      commentsSidebarContent: D,
      renderCommentsSidebar: B,
      renderCommentsSidebarHeader: O,
      renderCommentsSidebarEmptyAction: V,
      renderSidebarPanel: $,
      renderThumbnailPanel: H,
      renderSlideThumbnailOverlay: K,
      commentsSidebarOpen: q,
      onCommentsSidebarOpenChange: W,
      selectedCommentThreadId: U,
      hoveredCommentThreadId: G,
      onSelectedCommentThreadChange: _,
      zoomToFitLabel: X,
      renderHeaderZoomControl: Z,
      initialCrdtState: J,
      initialPresentationProto: Y,
      initialSourceBytes: Q,
      initialSourceFormat: ee = "pptx",
      initialSelectedSlideIdx: en,
      initialZoom: er,
      gpuRendering: ei,
      initialDrawingPreferences: el,
      onDrawingPreferencesChange: ea,
      commentControllerRef: eo,
      onCommentThreadsChange: es,
      onControllerReady: ed,
      onImportReady: ec,
      onImportError: eu,
      onWorkerFailure: ep,
      onWorkerStarted: eh,
      diagnosticContext: em,
      onCrdtDrain: ef,
      onCrdtDrainAttemptFailed: eg,
      onCrdtDrainTimeout: ex,
      onCrdtUpdate: eb,
      onFirstSlideRendered: ey,
      onPresentationEdit: ev,
      onInteractionAttempt: ew,
      onElementDragStart: eC,
      pendingImageGenerations: eS = [],
      resolveImageHydrationAssets: ek,
      uploadImage: eI,
      title: ej = "codex-popcorn-demo.pptx",
      theme: eE = "codex",
      isEditing: eM = !1,
      showDisabledAddSlideButton: eA = !1,
      hideSpeakerNotes: eT = !1,
      navigationCommand: eP,
      reviewTools: eL,
      generation: eF,
      onHyperlinkClick: eR,
      annotationsEnabled: eN = !1,
      drawingAnnotationsEnabled: eD = !1,
      enablePageNavigation: ez,
      artifactSearchEnabled: eB = !1,
      renderFindBar: eO,
      commentThreadsEnabled: eV = !1,
      smartGuidesEnabled: e$,
      workerFactory: eH,
    }) {
      let eK = (0, d.useRef)(eI)
      eK.current = eI
      let eq = (0, d.useRef)(ek)
      eq.current = ek
      let [eW, eU] = (0, d.useState)(null),
        [eG, e_] = (0, d.useState)(null),
        eX = (0, d.useRef)(Q ?? null),
        eZ = (0, d.useRef)(ed),
        eJ = (0, d.useRef)(ec)
      ;((eZ.current = ed), (eJ.current = ec))
      let eY = (0, rK.fl)({ initialCrdtState: J, externalCrdtUpdates: v, externalCrdtUpdateSource: w }),
        eQ = (0, d.useRef)(Y),
        e0 = (0, d.useRef)(null),
        e1 = (0, d.useRef)(new WeakSet()),
        e2 = (0, d.useRef)(new WeakSet()),
        e4 = (0, d.useRef)((e) => {
          !e1.current.has(e) && e2.current.delete(e) && (eU(e), eJ.current?.())
        }),
        e3 = (0, d.useRef)(null),
        e5 = (0, d.useRef)((e) => {
          let t = eZ.current
          if (!t) return
          let n = e3.current
          ;(n?.controller !== e || n.callback !== t) &&
            (e3.current = { controller: e, callback: t, cleanup: t(e, eX.current) })
        }),
        e6 = (0, d.useRef)(null),
        e8 = (0, d.useRef)(ef)
      e8.current = ef
      let e9 = (0, d.useRef)(ex)
      e9.current = ex
      let e7 = (0, d.useRef)(eg)
      e7.current = eg
      let te = (0, d.useRef)({
        deferCleanup: u,
        dispose: (e) => {
          let t
          e1.current.add(e)
          let n = e6.current
          null == n
            ? e.dispose()
            : Promise.race([
                n.then(() => !1),
                new Promise((e) => {
                  t = setTimeout(() => e(!0), 5e3)
                }),
              ]).then(
                (n) => {
                  ;(clearTimeout(t), n && e9.current?.(), e.dispose())
                },
                () => {
                  ;(clearTimeout(t), e.dispose())
                },
              )
        },
      })
      te.current.deferCleanup = u
      let tt = (0, d.useRef)((e) => {
          e6.current = Promise.all([e, e8.current?.(e)]).then(() => void 0)
        }),
        tn = (0, d.useRef)(() => {
          e7.current?.()
        }),
        tr = (0, N.j)(
          void 0,
          () => {
            let e
            return (e = new et({
              resolveImageHydrationAssets: async (e) => {
                if (!eq.current) throw Error("Image loading is unavailable.")
                return eq.current(e)
              },
              uploadImage:
                null == eI
                  ? void 0
                  : async (e, t) => {
                      if (!eK.current) throw Error("Image upload is unavailable.")
                      return eK.current(e, t)
                    },
              initialCrdtState: eY.initialCrdtState,
              initialSelectedSlideIdx: en,
              initialZoom: er,
              gpuRendering: ei,
              initialDrawingPreferences: el,
              onDrawingPreferencesChange: ea,
              onFirstSlideRendered: ey,
              smartGuidesEnabled: e$,
              presentationProto: null == Q ? (Y ?? o.Presentation.create().toProto()) : void 0,
              bootstrapSource: null == Q ? void 0 : { kind: "source-bytes", format: ee, bytes: (0, rH.$)(Q) },
              onImportReady: () => {
                ;(e2.current.add(e), e4.current(e))
              },
              onImportError: eu,
              onWorkerFailure: ep,
              onWorkerStarted: eh,
              workerFactory: eH,
            }))
          },
          te.current,
        ),
        ti = null != tr && eW === tr
      ;((0, d.useEffect)(() => {
        if (!tr || !ti || eG === tr) return
        let e = () => {
            let e = tr.getSnapshot()
            ;(null == e.selectedSlideFrame || null != e.fitScale) && e_(tr)
          },
          t = tr.subscribe(e)
        return (e(), t)
      }, [tr, ti, eG]),
        (0, d.useEffect)(() => {
          if (null != tr)
            return (
              e1.current.delete(tr),
              e4.current(tr),
              () => {
                e1.current.add(tr)
              }
            )
        }, [tr]),
        (0, d.useImperativeHandle)(a, () => ({
          flushEdits: async () => {
            await tr?.exportPresentationProto()
          },
          getCurrentSlideTarget() {
            let e = tr?.getSnapshot()
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
      let { crdtPublishingReady: tl, restoreState: ta } = (0, rK.p$)({
        artifactLabel: "Presentation",
        controller: tr,
        externalCrdtUpdates: eY.externalCrdtUpdates,
        externalCrdtUpdateSource: eY.externalCrdtUpdateSource,
        onCrdtDrain: tt.current,
        onCrdtDrainAttemptFailed: tn.current,
        onCrdtUpdate:
          null == ev
            ? eb
            : (e) => {
                ;(null != tr && ev(() => tr.exportPresentationProto()), eb?.(e))
              },
      })
      ;((0, d.useEffect)(() => {
        if (null != tr && ti && tl)
          return (
            e5.current(tr),
            () => {
              let e = e3.current
              e?.controller === tr && ((e3.current = null), e.cleanup?.())
            }
          )
      }, [tr, ed, ti, tl]),
        (0, d.useEffect)(() => {
          tr?.diagnostics?.update({
            ...em,
            title: ej ?? null,
            editable: eM && tl,
            crdtPublishingReady: tl,
            readOnlyReason: eM ? (tl ? null : "Waiting for CRDT publishing") : "Editing disabled by host",
          })
        }, [tr, em, ej, eM, tl]))
      let to = (0, d.useMemo)(
          () =>
            eS.flatMap((e) =>
              "failed" !== e.status &&
              "presentation" === e.target.type &&
              "string" == typeof e.target.aid &&
              e.target.aid &&
              e.slideId &&
              e.elementId
                ? [{ requestId: e.requestId, slideId: e.slideId, elementId: e.elementId }]
                : [],
            ),
          [eS],
        ),
        ts = (0, d.useMemo)(
          () =>
            (function (e) {
              let t = {}
              for (let n of e) t[n.slideId] = (t[n.slideId] ?? 0) + 1
              return t
            })(to),
          [to],
        )
      if (
        ((0, d.useEffect)(() => {
          if (eV && null != eo)
            return (
              (eo.current = tr),
              () => {
                eo.current === tr && (eo.current = null)
              }
            )
        }, [eo, eV, tr]),
        (0, d.useEffect)(() => {
          let e
          if (!eV || !ti || null == tr || null == es) return
          let t = () => {
            let t = tr.getState().commentThreads
            null != t && t !== e && ((e = t), es(t))
          }
          return (t(), tr.subscribe(t))
        }, [eV, tr, ti, es]),
        (0, d.useEffect)(() => {
          tr &&
            eQ.current !== Y &&
            ((eQ.current = Y), tr.replaceFromProto(Y ?? o.Presentation.create().toProto()).catch(z.ar))
        }, [tr, Y]),
        (0, d.useEffect)(() => {
          if (!tr || null == eP) return
          let e = () => {
            if (eP.requestId === e0.current) return !0
            let e = null
            if (null != eP.slideId) {
              let t = tr.getSnapshot().slideIds.indexOf(eP.slideId)
              t >= 0 && (e = t)
            }
            return (null == e && null != eP.slideNumber && (e = eP.slideNumber - 1), null == e)
              ? null == eP.slideId
              : ((e0.current = eP.requestId),
                tr.setSelectedSlideIdx(e),
                tr.setSelectedElementId(eP.objectId ?? null),
                !0)
          }
          if (e()) return
          let t = tr.subscribe(() => {
            e() && t()
          })
          return t
        }, [tr, eP]),
        (0, d.useEffect)(() => {
          if (!tr || !ek) return
          let e = new nw(ek, (e, t) => tr.hydrateImageAssets(e, t)),
            t = tr.subscribeImageHydrationRequests((t, n) => e.update(t, n))
          return () => {
            ;(t(), e.dispose())
          }
        }, [tr, ek]),
        !tr)
      )
        return null
      let td =
        eL?.annotation?.comments?.unified === !0 && null != eL.annotation.commentTarget && eG !== tr
          ? { ...eL, annotation: { ...eL.annotation, commentTarget: void 0 } }
          : eL
      return (0, r.jsxs)("section", {
        className: (0, s.A)("no-drag relative h-full min-h-0 bg-token-bg-primary", c),
        style: (0, rq.M)(eE),
        onPointerDownCapture: () => tr?.diagnostics?.observed && tr.diagnostics.update({ focusedAt: Date.now() }),
        onFocusCapture: () => tr?.diagnostics?.observed && tr.diagnostics.update({ focusedAt: Date.now() }),
        "data-codex-popcorn-editor": !0,
        "data-testid": "popcorn-electron-presentation-panel",
        children: [
          (0, r.jsx)("div", {
            className: "h-full min-h-0",
            style: { visibility: eG === tr ? void 0 : "hidden" },
            "data-testid": "popcorn-presentation-initial-viewport",
            children: ti
              ? (0, r.jsx)(nd, {
                  formatPane: e,
                  floatingBar: t,
                  className: "h-full min-h-0",
                  slideContextMenu: n,
                  elementContextMenu: i,
                  controller: tr,
                  onFirstStackedPageImageLoad: () => e_(tr),
                  footerContent: F,
                  ...(eV
                    ? {
                        commentsSidebarContent: D,
                        commentsSidebarOpen: q,
                        hoveredCommentThreadId: G,
                        onCommentsSidebarOpenChange: W,
                        onSelectedCommentThreadChange: _,
                        selectedCommentThreadId: U,
                      }
                    : {}),
                  headerTitleContent: C,
                  headerCenterContent: R,
                  headerRightContent:
                    to.length > 0
                      ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(rG, { count: to.length }), S] })
                      : S,
                  headerAnnotationIcon: k,
                  headerCommentsIcon: I,
                  headerSidebarIcon: j,
                  headerEditingIcons: E,
                  renderCommentsSidebar: B,
                  renderCommentsSidebarHeader: O,
                  renderCommentsSidebarEmptyAction: V,
                  renderSidebarPanel: $,
                  renderThumbnailPanel: H,
                  renderHeader: null == M ? void 0 : (e) => M({ ...e, initialLayoutReady: eG === tr }),
                  renderEditingControls: A,
                  renderDrawingToolCommands: L,
                  renderLayout: T,
                  panelsInLayout: P,
                  fitLeftInsetPx: f,
                  fitRightInsetPx: g,
                  layoutPanelFitInsetPx: x,
                  layoutPanelSide: b,
                  renderHeaderZoomControl: Z,
                  zoomToFitLabel: X,
                  renderSlideThumbnailOverlay: (e, t) => {
                    let n = ts[e] ?? 0
                    return (0, r.jsxs)(r.Fragment, {
                      children: [
                        K?.(e, t),
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
                  plugins: [...rW.filter((e) => !l?.some((t) => t.id === e.id)), ...(l ?? [])],
                  title: ej,
                  theme: eE,
                  isEditing: eM && tl,
                  showDisabledAddSlideButton: eA || (eM && !tl),
                  onInteractionAttempt: ew,
                  onElementDragStart: eC,
                  hideSpeakerNotes: eT,
                  reviewTools: td,
                  generation: eF,
                  onHyperlinkClick: eR,
                  annotationsEnabled: eN,
                  drawingAnnotationsEnabled: eD,
                  enablePageNavigation: ez,
                  artifactSearchEnabled: eB,
                  renderFindBar: eO,
                  commentThreadsEnabled: eV,
                  smartGuidesEnabled: e$,
                })
              : null,
          }),
          (0, r.jsx)(rK.Vx, { artifactLabel: "Presentation", restoreState: ta }),
        ],
      })
    }
    function rG({ count: e }) {
      return (0, r.jsx)("div", {
        "data-testid": "popcorn-pending-image-summary",
        className: "rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-amber-900",
        children: 1 === e ? "1 image pending" : `${e} images pending`,
      })
    }
    var r_ = n("zTeN"),
      rX = n("Wf1j"),
      rZ = n("oyxz"),
      rJ = n("F5N3"),
      rY = n("QcW8"),
      rQ = n("n5iL"),
      r0 = n("v6uO"),
      r1 = n("GO7r"),
      r2 = n("UxN3"),
      r4 = n("yC2B"),
      r3 = n("Oj9r"),
      r5 = n("LkR6"),
      r6 = n("pZQ9"),
      r8 = n("PpD0"),
      r9 = n("NvrT"),
      r7 = n("SAnh"),
      ie = n("Rcq0"),
      it = n("ouXG"),
      ir = n("kEQV"),
      ii = n("Qgfj"),
      il = n("rmk3"),
      ia = n("SGsN"),
      io = n("jDEJ")
    function is(
      { isHidden: e, canDelete: t, onDuplicate: n, onToggleHidden: r, onDelete: i, deleteAccelerator: l },
      a = [],
    ) {
      return [
        {
          id: "duplicate",
          message: (0, ii.zR)({
            id: "artifactPreview.slideContextMenu.duplicate",
            defaultMessage: "Duplicate",
            description: "Context menu action to create a copy of a presentation slide",
          }),
          onSelect: n,
        },
        {
          id: "visibility",
          message: e
            ? (0, ii.zR)({
                id: "artifactPreview.slideContextMenu.show",
                defaultMessage: "Show",
                description: "Context menu action to show a hidden presentation slide",
              })
            : (0, ii.zR)({
                id: "artifactPreview.slideContextMenu.hide",
                defaultMessage: "Hide",
                description: "Context menu action to hide a presentation slide",
              }),
          onSelect: r,
        },
        ...a,
        { id: "slide-actions-separator", type: "separator" },
        {
          id: "delete",
          accelerator: l,
          message: (0, ii.zR)({
            id: "artifactPreview.slideContextMenu.delete",
            defaultMessage: "Delete",
            description: "Context menu action to delete a presentation slide",
          }),
          tone: "danger",
          enabled: t,
          onSelect: i,
        },
      ]
    }
    function id(e) {
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
                  message: (0, ii.zR)({
                    id: "artifactPreview.elementContextMenu.copy",
                    defaultMessage: "Copy",
                    description: "Context menu action to copy selected presentation objects",
                  }),
                  onSelect: () => {
                    g.current?.dispatchEvent(new ClipboardEvent("copy", { bubbles: !0, cancelable: !0 }))
                  },
                }),
                "function" == typeof navigator.clipboard?.read &&
                  l.push({
                    id: "paste",
                    accelerator: "CmdOrCtrl+V",
                    message: (0, ii.zR)({
                      id: "artifactPreview.elementContextMenu.paste",
                      defaultMessage: "Paste",
                      description: "Context menu action to paste clipboard content onto the current slide",
                    }),
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
                        })(e).catch(ic)
                    },
                  }))
              let a = {
                id: "properties",
                message: (0, ii.zR)({
                  id: "artifactPreview.elementContextMenu.properties",
                  defaultMessage: "Properties…",
                  description:
                    "Context menu action to open the formatting and layout properties panel for the selected presentation objects or slide",
                }),
                enabled: null != i,
                onSelect: i,
              }
              return e?.kind === "slide"
                ? is(e, [...l, a])
                : (null != t &&
                    l.push({
                      id: "duplicate",
                      accelerator: n,
                      message: (0, ii.zR)({
                        id: "artifactPreview.elementContextMenu.duplicate",
                        defaultMessage: "Duplicate",
                        description:
                          "Context menu action to make a copy of the selected presentation objects on the same slide",
                      }),
                      onSelect: t,
                    }),
                  l.length > 0 && l.push({ id: "element-clipboard-separator", type: "separator" }),
                  l.push(
                    {
                      id: "bring-to-front",
                      accelerator: "CmdOrCtrl+Shift+Up",
                      message: (0, ii.zR)({
                        id: "artifactPreview.elementContextMenu.bringToFront",
                        defaultMessage: "Bring to front",
                        description:
                          "Context menu action to move a presentation element in front of all other elements on the slide",
                      }),
                      onSelect: c,
                    },
                    {
                      id: "bring-forward",
                      accelerator: "CmdOrCtrl+Up",
                      message: (0, ii.zR)({
                        id: "artifactPreview.elementContextMenu.bringForward",
                        defaultMessage: "Bring forward",
                        description:
                          "Context menu action to move a presentation element one layer forward on the slide",
                      }),
                      onSelect: u,
                    },
                    {
                      id: "send-backward",
                      accelerator: "CmdOrCtrl+Down",
                      message: (0, ii.zR)({
                        id: "artifactPreview.elementContextMenu.sendBackward",
                        defaultMessage: "Send backward",
                        description:
                          "Context menu action to move a presentation element one layer backward on the slide",
                      }),
                      onSelect: p,
                    },
                    {
                      id: "send-to-back",
                      accelerator: "CmdOrCtrl+Shift+Down",
                      message: (0, ii.zR)({
                        id: "artifactPreview.elementContextMenu.sendToBack",
                        defaultMessage: "Send to back",
                        description:
                          "Context menu action to move a presentation element behind all other elements on the slide",
                      }),
                      onSelect: h,
                    },
                    { id: "element-properties-separator", type: "separator" },
                  ),
                  null != r &&
                    l.push({
                      id: "request-edits",
                      message: (0, ii.zR)({
                        id: "artifactPreview.elementContextMenu.requestEdits",
                        defaultMessage: "Request edits…",
                        description:
                          "Context menu action to open instructions for changing the selected presentation object",
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
                      message: (0, ii.zR)({
                        id: "artifactPreview.elementContextMenu.delete",
                        defaultMessage: "Delete",
                        description: "Context menu action to delete selected presentation elements",
                      }),
                      tone: "danger",
                      onSelect: m,
                    },
                  ),
                  l)
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
          ? ((l = (0, r.jsx)(il.t, { getItems: t, children: n })), (a[10] = t), (a[11] = n), (a[12] = l))
          : (l = a[12]),
        l
      )
    }
    function ic() {
      ;(0, ia.RB)().warning(
        (0, r.jsx)(rZ.A, {
          id: "artifactPreview.elementContextMenu.pasteUnavailable",
          defaultMessage: "Couldn’t access the clipboard. Press {shortcut} to paste",
          values: { shortcut: (0, io.X)("CmdOrCtrl+V") },
          description: "Shown when direct clipboard access fails; shortcut is the platform keyboard shortcut for Paste",
        }),
      )
    }
    var iu = n("ghCJ"),
      ip = n("hZax"),
      ih = n("ZCWn"),
      im = n("C0vA")
    function ig(e) {
      let t,
        n = (0, i.c)(8),
        { progressKey: l, snapshot: a } = e,
        o = (0, r_._U)(ih.XR, l),
        d = (0, ip.Zj)("821992342"),
        c = a.slideRect
      return null == c
        ? null
        : (n[0] !== o ||
          n[1] !== d ||
          n[2] !== c ||
          n[3] !== a.previewFrames ||
          n[4] !== a.selectedSlideElementTargets ||
          n[5] !== a.selectedSlideIdx ||
          n[6] !== a.slideIds
            ? ((t = (0, r.jsx)(r.Fragment, {
                children: Array.from(o.values()).flatMap((e) => {
                  let t = (e.isEdit ? e.targets : [e.target]).flatMap((t) =>
                    ("presentation-element-selection" !== t.type && "presentation-region" !== t.type) ||
                    t.slideId !== a.slideIds[a.selectedSlideIdx]
                      ? []
                      : "presentation-region" === t.type
                        ? [{ id: e.requestId, frame: t.frame }]
                        : t.elementIds.flatMap((e) => {
                            let t = a.selectedSlideElementTargets.find((t) => t.id === e)
                            if (null == t) return []
                            let n = a.previewFrames.find((t) => t.elementId === e)?.frame ?? t.frame
                            return [{ id: e, frame: n }]
                          }),
                  )
                  return (e.isEdit ? t.slice(0, 1) : t).map((t) => {
                    let { id: n, frame: i } = t,
                      l = i.width * c.scale,
                      a = i.height * c.scale
                    return (0, r.jsxs)(
                      "div",
                      {
                        className: (0, s.A)("pointer-events-none absolute select-none", {
                          "overflow-hidden": !e.isEdit,
                        }),
                        "data-artifact-generation": e.requestId,
                        "data-artifact-generation-boundary": !e.isEdit || void 0,
                        style: {
                          left: c.left + i.left * c.scale,
                          top: c.top + i.top * c.scale,
                          width: l,
                          height: a,
                          transform: `rotate(${i.rotation ?? 0}deg)`,
                        },
                        children: [
                          !e.isEdit && (0, r.jsx)(iu.o, { presentation: "fill" }),
                          d &&
                            (0, r.jsx)(im.f, {
                              requestId: e.requestId,
                              children:
                                e.heading ??
                                (e.isEdit
                                  ? (0, r.jsx)(rZ.A, {
                                      id: "artifacts.presentation.editing.working",
                                      defaultMessage: "Editing…",
                                      description:
                                        "Status beside the animated cursor while a requested annotation edit is being applied to a presentation",
                                    })
                                  : (0, r.jsx)(rZ.A, {
                                      id: "artifacts.presentation.generation.working",
                                      defaultMessage: "Creating…",
                                      description:
                                        "Status beside the animated cursor while a requested chart or image is being created in a presentation",
                                    })),
                            }),
                        ],
                      },
                      `${e.requestId}:${n}`,
                    )
                  })
                }),
              })),
              (n[0] = o),
              (n[1] = d),
              (n[2] = c),
              (n[3] = a.previewFrames),
              (n[4] = a.selectedSlideElementTargets),
              (n[5] = a.selectedSlideIdx),
              (n[6] = a.slideIds),
              (n[7] = t))
            : (t = n[7]),
          t)
    }
    var ix = n("P7EA"),
      ib = n("pE8b"),
      iy = n("xSOA"),
      iv = n("ygO2"),
      iw = n("bqtn"),
      iC = n("HOLv"),
      iS = n("NQNd"),
      ik = (e) =>
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
      iI = n("l43M")
    function ij(e) {
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
        v = (0, i.c)(61),
        {
          capabilities: w,
          textInsertionActive: C,
          onAddSlide: S,
          slidePickerOpen: k,
          onInsertText: I,
          onInsertImage: j,
          onInsertChart: E,
          onInsertTable: M,
          onInsertShape: A,
          onGenerateImage: T,
        } = e,
        P = (0, rX.A)(),
        L = (0, d.useRef)(null),
        F = (0, d.useRef)(!1),
        [R, N] = (0, d.useState)(!1),
        [D, z] = (0, d.useState)(null)
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e, t) => {
            z((n) => (t ? e : n === e ? null : n))
          }),
          (v[0] = t))
        : (t = v[0])
      let B = t
      v[1] !== j
        ? ((n = {
            mutationFn: async (e) => {
              let t = await (0, eJ.I)(e)
              await j?.(t)
            },
          }),
          (v[1] = j),
          (v[2] = n))
        : (n = v[2])
      let O = (0, iy.n)(n)
      v[3] !== w.header ? ((l = w.header.includes("insert")), (v[3] = w.header), (v[4] = l)) : (l = v[4])
      let V = l
      v[5] !== w.insert || v[6] !== j || v[7] !== V
        ? ((a = V && w.insert.includes("image") && null != j), (v[5] = w.insert), (v[6] = j), (v[7] = V), (v[8] = a))
        : (a = v[8])
      let $ = a
      v[9] !== w.insert || v[10] !== E || v[11] !== V
        ? ((o = V && w.insert.includes("chart") && null != E), (v[9] = w.insert), (v[10] = E), (v[11] = V), (v[12] = o))
        : (o = v[12])
      let H = o
      v[13] !== w.insert || v[14] !== M || v[15] !== V
        ? ((s = V && w.insert.includes("table") && null != M),
          (v[13] = w.insert),
          (v[14] = M),
          (v[15] = V),
          (v[16] = s))
        : (s = v[16])
      let K = s
      v[17] !== w.insert || v[18] !== A || v[19] !== V
        ? ((c = V && w.insert.includes("rect") && null != A), (v[17] = w.insert), (v[18] = A), (v[19] = V), (v[20] = c))
        : (c = v[20])
      let q = c
      v[21] !== P
        ? ((u = P.formatMessage({
            id: "presentationEditor.insert.image",
            defaultMessage: "Insert image",
            description: "Open the presentation image insertion menu",
          })),
          (v[21] = P),
          (v[22] = u))
        : (u = v[22])
      let W = u
      return (
        v[23] !== w.insert || v[24] !== S || v[25] !== V || v[26] !== k
          ? ((p =
              V &&
              w.insert.includes("slide") &&
              (0, r.jsx)(iI.g, { action: "slide", expanded: k, onClick: (e) => S(e.currentTarget) })),
            (v[23] = w.insert),
            (v[24] = S),
            (v[25] = V),
            (v[26] = k),
            (v[27] = p))
          : (p = v[27]),
        v[28] !== w.insert || v[29] !== I || v[30] !== V || v[31] !== C
          ? ((h =
              V &&
              w.insert.includes("text") &&
              null != I &&
              (0, r.jsx)(iI.g, { action: "text", pressed: C, onClick: I })),
            (v[28] = w.insert),
            (v[29] = I),
            (v[30] = V),
            (v[31] = C),
            (v[32] = h))
          : (h = v[32]),
        v[33] !== T || v[34] !== $ || v[35] !== O.isPending
          ? ((m =
              $ &&
              (0, r.jsxs)(r6.OZ, {
                align: "start",
                contentWidth: "menuBounded",
                triggerButton: (0, r.jsx)(iI.g, { action: "image", loading: O.isPending }),
                children: [
                  (0, r.jsx)(iw.ms.Item, {
                    leftIcon: (0, r.jsx)(r1.T7p, {}),
                    onSelect: () => L.current?.click(),
                    children: (0, r.jsx)(rZ.A, {
                      id: "presentationEditor.uploadImage",
                      defaultMessage: "Upload from computer",
                      description: "Choose an image file from the computer",
                    }),
                  }),
                  null != T &&
                    (0, r.jsx)(iw.ms.Item, {
                      leftIconAsset: ix.r,
                      onSelect: T,
                      children: (0, r.jsx)(rZ.A, {
                        id: "presentationEditor.generateImage",
                        defaultMessage: "Generate image",
                        description: "Start a chat request to generate an image for the selected presentation object",
                      }),
                    }),
                ],
              })),
            (v[33] = T),
            (v[34] = $),
            (v[35] = O.isPending),
            (v[36] = m))
          : (m = v[36]),
        v[37] !== P ||
        v[38] !== E ||
        v[39] !== A ||
        v[40] !== M ||
        v[41] !== D ||
        v[42] !== H ||
        v[43] !== q ||
        v[44] !== K ||
        v[45] !== R
          ? ((f =
              (H || K || q) &&
              (0, r.jsxs)(r6.OZ, {
                open: R,
                onOpenChange: (e) => {
                  ;(N(e), e || z(null))
                },
                onCloseAutoFocus: (e) => {
                  F.current && (e.preventDefault(), (F.current = !1))
                },
                align: "start",
                contentWidth: "menuBounded",
                triggerButton: (0, r.jsx)(iI.g, { action: "tools", expanded: R }),
                children: [
                  H &&
                    (0, r.jsx)(iE, {
                      open: "chart" === D,
                      onOpenChange: (e) => B("chart", e),
                      label: (0, r.jsx)(rZ.A, { ...iM.chart }),
                      leftIcon: (0, r.jsx)(r1.$n1, {}),
                      contentWidth: "menuBounded",
                      children: iA.map((e) => {
                        let { presetId: t, label: n, icon: i } = e
                        return (0, r.jsx)(
                          iw.ms.Item,
                          {
                            leftIconAsset: i,
                            onSelect: () => {
                              ;((F.current = !0), E(t))
                            },
                            children: (0, r.jsx)(rZ.A, { ...n }),
                          },
                          t,
                        )
                      }),
                    }),
                  K &&
                    (0, r.jsx)(iw.ms.Item, {
                      leftIcon: (0, r.jsx)(r1.on4, {}),
                      onSelect: () => {
                        ;((F.current = !0), M())
                      },
                      children: (0, r.jsx)(rZ.A, { ...iM.table }),
                    }),
                  q &&
                    (0, r.jsx)(iE, {
                      open: "shapes" === D,
                      onOpenChange: (e) => B("shapes", e),
                      label: (0, r.jsx)(rZ.A, { ...iM.shapes }),
                      leftIcon: (0, r.jsx)(iC.I, { asset: ib.e }),
                      contentWidth: "menuBounded",
                      children: (0, r.jsx)("div", {
                        className: "grid grid-cols-4 gap-0.5 p-1",
                        children: iT.map((e) => {
                          let { geometry: t, label: n, arrowhead: i } = e
                          return (0, r.jsx)(
                            iw.ms.ItemSlot,
                            {
                              asChild: !0,
                              onSelect: () => {
                                ;((F.current = !0), A(t, i))
                              },
                              children: (0, r.jsx)(iv.$, {
                                className: "justify-self-center",
                                color: "ghostActive",
                                size: "formatToolbarIcon",
                                "aria-label": P.formatMessage(n),
                                title: P.formatMessage(n),
                                children: i
                                  ? (0, r.jsx)(ik, { className: "lineIcon-U9k9ZF" })
                                  : (0, r.jsx)(tL.U, { geometry: t, className: "size-4" }),
                              }),
                            },
                            `${t}-${i ?? "none"}`,
                          )
                        }),
                      }),
                    }),
                ],
              })),
            (v[37] = P),
            (v[38] = E),
            (v[39] = A),
            (v[40] = M),
            (v[41] = D),
            (v[42] = H),
            (v[43] = q),
            (v[44] = K),
            (v[45] = R),
            (v[46] = f))
          : (f = v[46]),
        v[47] !== O
          ? ((g = (e) => {
              let t = e.currentTarget.files?.[0]
              ;((e.currentTarget.value = ""), null != t && O.mutate(t))
            }),
            (v[47] = O),
            (v[48] = g))
          : (g = v[48]),
        v[49] !== W || v[50] !== g
          ? ((x = (0, r.jsx)("input", {
              ref: L,
              className: "hidden",
              type: "file",
              accept: "image/*",
              "aria-label": W,
              onChange: g,
            })),
            (v[49] = W),
            (v[50] = g),
            (v[51] = x))
          : (x = v[51]),
        v[52] !== O.isError
          ? ((b =
              O.isError &&
              (0, r.jsx)("span", {
                role: "alert",
                className: "text-danger",
                children: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.insert.imageError",
                  defaultMessage: "Couldn’t load image. Try another file.",
                  description: "Error when a selected local image cannot be read for insertion into a presentation",
                }),
              })),
            (v[52] = O.isError),
            (v[53] = b))
          : (b = v[53]),
        v[54] !== h || v[55] !== m || v[56] !== f || v[57] !== x || v[58] !== b || v[59] !== p
          ? ((y = (0, r.jsxs)(r.Fragment, { children: [p, h, m, f, x, b] })),
            (v[54] = h),
            (v[55] = m),
            (v[56] = f),
            (v[57] = x),
            (v[58] = b),
            (v[59] = p),
            (v[60] = y))
          : (y = v[60]),
        y
      )
    }
    function iE(e) {
      let t,
        n = (0, i.c)(2),
        l = (0, d.useRef)(null)
      return (
        n[0] !== e
          ? ((t = (0, r.jsx)("div", {
              onPointerEnter: (t) => {
                "mouse" === t.pointerType && (l.current?.focus(), e.onOpenChange?.(!0))
              },
              children: (0, r.jsx)(r6.Gs, { ...e, ref: l }),
            })),
            (n[0] = e),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    let iM = (0, ii.YK)({
        chart: {
          id: "presentationEditor.insert.chart",
          defaultMessage: "Chart",
          description: "Chart insertion submenu",
        },
        table: {
          id: "presentationEditor.insert.table",
          defaultMessage: "Table",
          description: "Table insertion submenu",
        },
        shapes: {
          id: "presentationEditor.insert.shapes",
          defaultMessage: "Shapes",
          description: "Shape insertion submenu",
        },
        bar: { id: "presentationEditor.insert.bar", defaultMessage: "Bar", description: "Insert a bar chart" },
        line: { id: "presentationEditor.insert.lineChart", defaultMessage: "Line", description: "Insert a line chart" },
        pie: { id: "presentationEditor.insert.pie", defaultMessage: "Pie", description: "Insert a pie chart" },
        area: { id: "presentationEditor.insert.area", defaultMessage: "Area", description: "Insert an area chart" },
        scatter: {
          id: "presentationEditor.insert.scatter",
          defaultMessage: "Scatter",
          description: "Insert a scatter chart",
        },
        histogram: {
          id: "presentationEditor.insert.histogram",
          defaultMessage: "Histogram",
          description: "Insert a histogram chart",
        },
        waterfall: {
          id: "presentationEditor.insert.waterfall",
          defaultMessage: "Waterfall",
          description: "Insert a waterfall chart",
        },
        funnel: {
          id: "presentationEditor.insert.funnel",
          defaultMessage: "Funnel",
          description: "Insert a funnel chart",
        },
        treemap: {
          id: "presentationEditor.insert.treemap",
          defaultMessage: "Treemap",
          description: "Insert a treemap chart",
        },
        ellipse: {
          id: "presentationEditor.insert.ellipse",
          defaultMessage: "Circle",
          description: "Insert a circle shape",
        },
        rect: {
          id: "presentationEditor.insert.rect",
          defaultMessage: "Rectangle",
          description: "Insert a rectangle shape",
        },
        triangle: {
          id: "presentationEditor.insert.triangle",
          defaultMessage: "Triangle",
          description: "Insert a triangle shape",
        },
        diamond: {
          id: "presentationEditor.insert.diamond",
          defaultMessage: "Diamond",
          description: "Insert a diamond shape",
        },
        star: { id: "presentationEditor.insert.star", defaultMessage: "Star", description: "Insert a star shape" },
        rightArrow: {
          id: "presentationEditor.insert.rightArrow",
          defaultMessage: "Right arrow",
          description: "Insert a right-pointing block arrow",
        },
        leftArrow: {
          id: "presentationEditor.insert.leftArrow",
          defaultMessage: "Left arrow",
          description: "Insert a left-pointing block arrow",
        },
        plus: { id: "presentationEditor.insert.plus", defaultMessage: "Plus", description: "Insert a plus sign shape" },
        chevron: {
          id: "presentationEditor.insert.chevron",
          defaultMessage: "Chevron",
          description: "Insert a chevron shape",
        },
        callout: {
          id: "presentationEditor.insert.callout",
          defaultMessage: "Callout",
          description: "Insert a rectangular speech callout",
        },
        shapeArrow: {
          id: "artifacts.presentationEditor.insert.shapeArrow",
          defaultMessage: "Arrow",
          description: "Insert a straight line with an arrowhead into a presentation",
        },
        shapeLine: {
          id: "presentationEditor.insert.shapeLine",
          defaultMessage: "Line",
          description: "Insert a straight line shape",
        },
      }),
      iA = [
        { presetId: "column-clustered", label: iM.bar, icon: iS.N.bar },
        { presetId: "line-simple", label: iM.line, icon: iS.N.line },
        { presetId: "pie-simple", label: iM.pie, icon: iS.N.pie },
        { presetId: "area-simple", label: iM.area, icon: iS.N.area },
        { presetId: "scatter-points", label: iM.scatter, icon: iS.N.scatter },
        { presetId: "histogram-auto", label: iM.histogram, icon: iS.N.histogram },
        { presetId: "waterfall-changes", label: iM.waterfall, icon: iS.N.waterfall },
        { presetId: "funnel-simple", label: iM.funnel, icon: iS.N.funnel },
        { presetId: "treemap-grouped", label: iM.treemap, icon: iS.N.treemap },
      ],
      iT = [
        { geometry: "ellipse", label: iM.ellipse },
        { geometry: "rect", label: iM.rect },
        { geometry: "triangle", label: iM.triangle },
        { geometry: "diamond", label: iM.diamond },
        { geometry: "star5", label: iM.star },
        { geometry: "rightArrow", label: iM.rightArrow },
        { geometry: "leftArrow", label: iM.leftArrow },
        { geometry: "plus", label: iM.plus },
        { geometry: "chevron", label: iM.chevron },
        { geometry: "wedgeRectCallout", label: iM.callout },
        { geometry: "line", label: iM.shapeLine },
        { geometry: "line", arrowhead: "arrow", label: iM.shapeArrow },
      ],
      iP = [
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
    function iL(e) {
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
        k = (0, rX.A)(),
        I = (0, d.useRef)(null),
        j = v.imageCrop,
        E = v.slideRect
      if (!w || !j || !E || !C) return null
      let { crop: M, framing: A, sourceFrame: T, source: P } = j,
        L = A.frame,
        F = E.scale,
        R = (T.left - L.left) * F,
        N = (T.top - L.top) * F,
        D = T.width * F,
        z = T.height * F,
        B = E.left + L.left * F,
        O = E.top + L.top * F,
        V = (e) => {
          ;((I.current = null), y.dispatch({ kind: "finish-image-crop", commit: e }), S())
        }
      b[0] !== F || b[1] !== C || b[2] !== E.left || b[3] !== E.top
        ? ((t = (e, t) => {
            let n = (0, tv.f)(C, e, t)
            return { x: (n.x - E.left) / F, y: (n.y - E.top) / F }
          }),
          (b[0] = F),
          (b[1] = C),
          (b[2] = E.left),
          (b[3] = E.top),
          (b[4] = t))
        : (t = b[4])
      let $ = t,
        H = (e) => ({
          onPointerDown: (t) => {
            0 === t.button &&
              null == I.current &&
              (t.preventDefault(),
              t.stopPropagation(),
              t.currentTarget.focus(),
              t.currentTarget.setPointerCapture(t.pointerId),
              (I.current = t.pointerId),
              y.interactWithImageCrop({ phase: "start", handle: e, point: $(t.clientX, t.clientY) }))
          },
          onPointerMove: (e) => {
            I.current === e.pointerId && y.interactWithImageCrop({ phase: "move", point: $(e.clientX, e.clientY) })
          },
          onPointerUp: (e) => {
            I.current === e.pointerId &&
              (y.interactWithImageCrop({ phase: "end", point: $(e.clientX, e.clientY) }),
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
      ;(b[5] !== k ? ((n = k.formatMessage(iR.title)), (b[5] = k), (b[6] = n)) : (n = b[6]),
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
        b[9] !== k ? ((a = k.formatMessage(iR.outside)), (b[9] = k), (b[10] = a)) : (a = b[10]),
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
      let K = L.width * F,
        q = L.height * F,
        W = `rotate(${L.rotation ?? 0}deg) scale(${A.flipHorizontal ? -1 : 1}, ${A.flipVertical ? -1 : 1})`
      ;(b[16] !== B || b[17] !== K || b[18] !== q || b[19] !== W || b[20] !== O
        ? ((u = { left: B, top: O, width: K, height: q, transform: W }),
          (b[16] = B),
          (b[17] = K),
          (b[18] = q),
          (b[19] = W),
          (b[20] = O),
          (b[21] = u))
        : (u = b[21]),
        b[22] !== z || b[23] !== R || b[24] !== N || b[25] !== D
          ? ((p = { left: R, top: N, width: D, height: z }),
            (b[22] = z),
            (b[23] = R),
            (b[24] = N),
            (b[25] = D),
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
        b[39] !== k ? ((x = k.formatMessage(iR.move)), (b[39] = k), (b[40] = x)) : (x = b[40]),
        (0, r.jsxs)("div", {
          className: "pointer-events-none absolute inset-0 select-none",
          "data-presentation-image-crop": !0,
          role: "group",
          "aria-label": n,
          onPointerDown: iF,
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
                        ...H("move"),
                      }),
                      iP.map((e) => {
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
                            "aria-label": k.formatMessage(iR[t]),
                            ...H(t),
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
    function iF(e) {
      return e.stopPropagation()
    }
    let iR = (0, ii.YK)({
      title: {
        id: "presentationEditor.canvasCrop",
        defaultMessage: "Crop image",
        description: "Accessible label for image cropping directly on the slide",
      },
      outside: {
        id: "presentationEditor.finishCropOutside",
        defaultMessage: "Finish cropping",
        description: "Click outside the image to apply the crop",
      },
      move: {
        id: "presentationEditor.moveCrop",
        defaultMessage: "Move crop area",
        description: "Drag or use arrow keys to reposition the image crop box",
      },
      n: {
        id: "presentationEditor.cropTop",
        defaultMessage: "Crop top",
        description: "Drag handle for the top edge of the image crop box",
      },
      ne: {
        id: "presentationEditor.cropTopRight",
        defaultMessage: "Crop top right",
        description: "Drag handle for the top right corner of the image crop box",
      },
      e: {
        id: "presentationEditor.cropRight",
        defaultMessage: "Crop right",
        description: "Drag handle for the right edge of the image crop box",
      },
      se: {
        id: "presentationEditor.cropBottomRight",
        defaultMessage: "Crop bottom right",
        description: "Drag handle for the bottom right corner of the image crop box",
      },
      s: {
        id: "presentationEditor.cropBottom",
        defaultMessage: "Crop bottom",
        description: "Drag handle for the bottom edge of the image crop box",
      },
      sw: {
        id: "presentationEditor.cropBottomLeft",
        defaultMessage: "Crop bottom left",
        description: "Drag handle for the bottom left corner of the image crop box",
      },
      w: {
        id: "presentationEditor.cropLeft",
        defaultMessage: "Crop left",
        description: "Drag handle for the left edge of the image crop box",
      },
      nw: {
        id: "presentationEditor.cropTopLeft",
        defaultMessage: "Crop top left",
        description: "Drag handle for the top left corner of the image crop box",
      },
    })
    var iN = n("LMaG"),
      iD = n("OZpX"),
      iz = n("nzx4"),
      iB = n("WjTF"),
      iO = n("I1iB")
    function iV(e) {
      let t,
        n,
        l,
        a,
        o,
        s = (0, i.c)(18),
        { label: d, value: c, suffix: u, min: p, max: h, onChange: m, presets: f, side: g } = e,
        x = void 0 === p ? 0 : p
      s[0] !== f ? ((t = void 0 === f ? [0, 1, 2, 4, 8] : f), (s[0] = f), (s[1] = t)) : (t = s[1])
      let b = t,
        y = void 0 === g ? "left" : g
      return (
        s[2] !== d ? ((n = (0, r.jsx)("span", { children: d })), (s[2] = d), (s[3] = n)) : (n = s[3]),
        s[4] !== b ? ((l = b.map(i$)), (s[4] = b), (s[5] = l)) : (l = s[5]),
        s[6] !== d || s[7] !== h || s[8] !== x || s[9] !== m || s[10] !== y || s[11] !== u || s[12] !== l || s[13] !== c
          ? ((a = (0, r.jsx)(iO.D, {
              label: d,
              value: c,
              suffix: u,
              min: x,
              max: h,
              onChange: m,
              side: y,
              presets: l,
            })),
            (s[6] = d),
            (s[7] = h),
            (s[8] = x),
            (s[9] = m),
            (s[10] = y),
            (s[11] = u),
            (s[12] = l),
            (s[13] = c),
            (s[14] = a))
          : (a = s[14]),
        s[15] !== n || s[16] !== a
          ? ((o = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [n, a],
            })),
            (s[15] = n),
            (s[16] = a),
            (s[17] = o))
          : (o = s[17]),
        o
      )
    }
    function i$(e) {
      return { value: e }
    }
    function iH(e) {
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
        w = (0, rX.A)(),
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
          let e = m.flatMap(iU),
            i = e[0],
            d = e.some(iW),
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
                  iw.ms.Item,
                  {
                    rightIcon: u === e ? (0, r.jsx)(r1.ALZ, {}) : void 0,
                    onSelect: (t) => {
                      "none" === e
                        ? f({ strokeWidth: 0 })
                        : (null == b || d || v || t.preventDefault(),
                          f(d ? { strokeStyle: e } : { ...g, strokeStyle: e }))
                    },
                    children: (0, r.jsx)(rZ.A, { ...iG[e] }),
                  },
                  e,
                ),
              )
          if (null != b && !d && !v) {
            let e
            ;(p[14] !== C || p[15] !== x || p[16] !== b
              ? ((e = (0, r.jsx)(iw.Ab, {
                  open: C,
                  onOpenChange: S,
                  align: "start",
                  contentRef: iq,
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
          ;((t = iD.l),
            (n = y && !d),
            p[18] !== y
              ? ((l = y
                  ? (0, r.jsx)(rZ.A, {
                      id: "presentationEditor.border",
                      defaultMessage: "Border",
                      description: "Object border section",
                    })
                  : void 0),
                (p[18] = y),
                (p[19] = l))
              : (l = p[19]),
            (a = y
              ? (0, r.jsx)(iB.p, {
                  enabled: d,
                  label: w.formatMessage({
                    id: "presentationEditor.toggleBorder",
                    defaultMessage: "Toggle border",
                    description: "Add or remove an object border",
                  }),
                  onClick: () => f(d ? { strokeWidth: 0 } : g),
                })
              : void 0),
            (o =
              (d || !y) &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(iw.Ab, {
                    contentRef: iK,
                    side: "left",
                    align: "start",
                    contentClassName: "min-w-50",
                    triggerButton: (0, r.jsxs)(iv.$, {
                      className: "w-full justify-between",
                      color: "field",
                      contentLayout: "dropdown",
                      size: "field",
                      "aria-label": w.formatMessage({
                        id: "presentationEditor.borderStyle",
                        defaultMessage: "Border style",
                        description: "Line pattern of the object border",
                      }),
                      children: [
                        null == u
                          ? (0, r.jsx)(rZ.A, {
                              id: "presentationEditor.mixed",
                              defaultMessage: "Mixed",
                              description: "A formatting value differs across selected objects or table cells",
                            })
                          : (0, r.jsx)(rZ.A, { ...iG[u] }),
                        (0, r.jsx)(r1.HIf, {}),
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
                                children: (0, r.jsx)(rZ.A, {
                                  id: "presentationEditor.borderColorLabel",
                                  defaultMessage: "Color",
                                  description: "Color field label in the border settings",
                                }),
                              }),
                              (0, r.jsx)(iN.v, {
                                side: "left",
                                palette: h,
                                label: w.formatMessage({
                                  id: "presentationEditor.borderColor",
                                  defaultMessage: "Border color",
                                  description: "Select the object border color",
                                }),
                                color: null == c("opacityPct") ? null : c("color"),
                                onChange: (e) => f({ strokeColor: e }),
                              }),
                            ],
                          }),
                        (0, r.jsx)(iV, {
                          side: "bottom",
                          label: w.formatMessage({
                            id: "presentationEditor.borderWeight",
                            defaultMessage: "Weight",
                            description: "Border line thickness",
                          }),
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
                : (0, r.jsxs)(iz.AM, {
                    open: C,
                    onOpenChange: S,
                    children: [
                      (0, r.jsx)(iz.Wv, { asChild: !0, children: b }),
                      (0, r.jsx)(iz.hl, {
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
    function iK(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function iq(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function iW(e) {
      return e.width > 0
    }
    function iU(e) {
      return e.line ? [e.line] : []
    }
    let iG = (0, ii.YK)({
      none: {
        id: "presentationEditor.borderNone",
        defaultMessage: "No border",
        description: "Remove the object border",
      },
      solid: {
        id: "presentationEditor.borderSolid",
        defaultMessage: "Solid",
        description: "Continuous border line pattern",
      },
      dashed: {
        id: "presentationEditor.borderDashed",
        defaultMessage: "Dashed",
        description: "Dashed border line pattern",
      },
      dotted: {
        id: "presentationEditor.borderDotted",
        defaultMessage: "Dotted",
        description: "Dotted border line pattern",
      },
      "dash-dot": {
        id: "presentationEditor.borderDashDot",
        defaultMessage: "Dash-dot",
        description: "Alternating dash and dot border pattern",
      },
      "dash-dot-dot": {
        id: "presentationEditor.borderDashDotDot",
        defaultMessage: "Dash-dot-dot",
        description: "Alternating dash and two dots border pattern",
      },
    })
    var i_ = n("BUT1"),
      iX = n("fPyj"),
      iZ = n("ahss"),
      iJ = n("vGEi"),
      iY = n("a2ZM"),
      iQ = n("lyDi"),
      i0 = n("nkTT")
    let i1 = (0, i0.a)({
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
    var i2 = n("EShr"),
      i4 = n("IMM6"),
      i3 = n("wSYR"),
      i5 = n("oprK")
    function i6(e, t = 1e5, n = "linear", r = 0) {
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
    function i8(e) {
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
        v = (0, rX.A)(),
        w = (0, d.useRef)(null)
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (c[0] = t)) : (t = c[0])
      let C = (0, d.useRef)(t),
        S = (0, d.useRef)(null),
        k = (0, d.useRef)(!1),
        I = (0, d.useRef)(null),
        [j, E] = (0, d.useState)(null),
        M = null != j && j.baseFill === p.fill && (j.committed || j.version === h)
      null == j || M || E(null)
      let A = p.fill.offsetScale ?? 1e5
      c[1] !== j || c[2] !== M || c[3] !== p.stops
        ? ((n = (e, t) => ({ ...p.stops[t], offset: M && j.index === t ? j.offset : e.offset })),
          (c[1] = j),
          (c[2] = M),
          (c[3] = p.stops),
          (c[4] = n))
        : (n = c[4])
      let T = p.fill.stops.map(n),
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
          ? ((o = v.formatMessage({
              id: "presentationEditor.addGradientStop",
              defaultMessage: "Add color stop",
              description: "Click the gradient bar to add a color stop at that position",
            })),
            (c[7] = v),
            (c[8] = o))
          : (o = c[8]),
        c[9] !== y || c[10] !== A || c[11] !== p.fill.stops.length
          ? ((s = (e) => {
              let t = e.currentTarget.getBoundingClientRect()
              ;((S.current = p.fill.stops.length),
                y(0 === e.detail ? A / 2 : Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)) * A))
            }),
            (c[9] = y),
            (c[10] = A),
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
              style: { backgroundImage: i6(T, A) },
            }),
            T.map((e, t) =>
              (0, r.jsx)(
                iv.$,
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
                    {
                      id: "presentationEditor.gradientStop",
                      defaultMessage: "Color stop {number}",
                      description: "A draggable gradient color stop, numbered from one",
                    },
                    { number: t + 1 },
                  ),
                  "aria-valuemin": 0,
                  "aria-valuemax": 100,
                  "aria-valuenow": (e.offset / A) * 100,
                  "aria-valuetext": v.formatNumber(e.offset / A, { style: "percent", maximumFractionDigits: 1 }),
                  style: { left: `${(e.offset / A) * 100}%` },
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
                        ;((I.current = null), E(null), r?.removeEventListener("blur", i))
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
                      ((n.offset = Math.max(0, Math.min(A, n.startOffset + ((e.clientX - n.startX) / n.width) * A))),
                      (k.current = k.current || n.offset !== n.startOffset),
                      E({ index: t, version: n.version, offset: n.offset, baseFill: p.fill, committed: !1 }))
                  },
                  onPointerUp: (e) => {
                    let n = I.current
                    n?.pointerId === e.pointerId &&
                      (P(),
                      n.version === h &&
                        n.offset !== p.fill.stops[t].offset &&
                        (E({ index: t, version: n.version, offset: n.offset, baseFill: p.fill, committed: !0 }),
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
                        r -= (A / 100) * (n.shiftKey ? 10 : 1)
                        break
                      case "ArrowRight":
                      case "ArrowUp":
                        r += (A / 100) * (n.shiftKey ? 10 : 1)
                        break
                      case "Home":
                        r = 0
                        break
                      case "End":
                        r = A
                        break
                      default:
                        return
                    }
                    ;(n.preventDefault(), n.stopPropagation(), x(t, Math.max(0, Math.min(A, r))))
                  },
                  children: (0, r.jsx)(i4.b, { color: e.color }),
                },
                t,
              ),
            ),
          ],
        })
      )
    }
    function i9(e) {
      let t,
        n,
        l,
        a,
        o = (0, i.c)(12),
        { label: s, value: d, onChange: c, side: u } = e,
        p = void 0 === u ? "bottom" : u,
        h = (0, rX.A)()
      o[0] !== h || o[1] !== s
        ? ((t =
            s ??
            h.formatMessage({
              id: "presentationEditor.opacity",
              defaultMessage: "Opacity",
              description: "Object opacity as a percentage",
            })),
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
          ? ((a = (0, r.jsx)(iO.D, {
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
    function i7(e) {
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
        { value: j, presentationVersion: E, palette: M, onChange: A } = e,
        T = (0, rX.A)(),
        P = (0, d.useId)(),
        [L, F] = (0, d.useState)(0),
        [R, N] = (0, d.useState)(null),
        D = Math.min(L, j.fill.stops.length - 1),
        z = j.fill.gradientKind ?? "linear"
      if (I[0] !== j.fill.stops || I[1] !== j.stops) {
        let e
        ;(I[3] !== j.stops
          ? ((e = (e, t) => ({ ...j.stops[t], offset: e.offset, index: t })), (I[3] = j.stops), (I[4] = e))
          : (e = I[4]),
          (t = j.fill.stops.map(e).toSorted(lt)),
          (I[0] = j.fill.stops),
          (I[1] = j.stops),
          (I[2] = t))
      } else t = I[2]
      let B = t
      I[5] !== A || I[6] !== j.fill
        ? ((n = (e, t) => {
            A({ ...j.fill, stops: j.fill.stops.map((n, r) => (r === e ? { ...n, ...t } : n)) })
          }),
          (I[5] = A),
          (I[6] = j.fill),
          (I[7] = n))
        : (n = I[7])
      let O = n
      I[8] !== A || I[9] !== j.fill
        ? ((l = (e) => {
            ;(N(null), F(Math.max(0, e - 1)), A({ ...j.fill, stops: j.fill.stops.filter((t, n) => n !== e) }))
          }),
          (I[8] = A),
          (I[9] = j.fill),
          (I[10] = l))
        : (l = I[10])
      let V = l
      I[11] !== A || I[12] !== B || I[13] !== j.fill
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
            ;(F(j.fill.stops.length), A({ ...j.fill, stops: [...j.fill.stops, { offset: e, color: `#${i}/${l}%` }] }))
          }),
          (I[11] = A),
          (I[12] = B),
          (I[13] = j.fill),
          (I[14] = a))
        : (a = I[14])
      let $ = a
      ;(I[15] !== O ? ((o = (e, t) => O(e, { offset: t })), (I[15] = O), (I[16] = o)) : (o = I[16]),
        I[17] !== $ || I[18] !== E || I[19] !== V || I[20] !== D || I[21] !== P || I[22] !== o || I[23] !== j
          ? ((s = (0, r.jsx)(i8, {
              stopIdPrefix: P,
              value: j,
              presentationVersion: E,
              selectedIndex: D,
              onSelect: F,
              onOpenColor: N,
              onChange: o,
              onRemove: V,
              onAdd: $,
            })),
            (I[17] = $),
            (I[18] = E),
            (I[19] = V),
            (I[20] = D),
            (I[21] = P),
            (I[22] = o),
            (I[23] = j),
            (I[24] = s))
          : (s = I[24]))
      let H = "linear" === z ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2"
      ;(I[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, r.jsx)(rZ.A, {
            id: "presentationEditor.gradientTypeLabel",
            defaultMessage: "Type",
            description: "Label for the gradient type selector",
          })),
          (I[25] = c))
        : (c = I[25]),
        I[26] !== T
          ? ((u = T.formatMessage({
              id: "presentationEditor.gradientType",
              defaultMessage: "Gradient type",
              description: "Choose a linear or radial gradient",
            })),
            (I[26] = T),
            (I[27] = u))
          : (u = I[27]))
      let K = ln[z]
      if (
        (I[28] !== K ? ((p = (0, r.jsx)(rZ.A, { ...K })), (I[28] = K), (I[29] = p)) : (p = I[29]),
        I[30] === Symbol.for("react.memo_cache_sentinel") ? ((h = (0, r.jsx)(r1.HIf, {})), (I[30] = h)) : (h = I[30]),
        I[31] !== p || I[32] !== u
          ? ((m = (0, r.jsxs)(iX.c, { className: "w-full justify-between", "aria-label": u, children: [p, h] })),
            (I[31] = p),
            (I[32] = u),
            (I[33] = m))
          : (m = I[33]),
        I[34] === Symbol.for("react.memo_cache_sentinel") ? ((f = ["linear", "path"]), (I[34] = f)) : (f = I[34]),
        I[35] !== z || I[36] !== A || I[37] !== j.fill
          ? ((g = f.map((e) =>
              (0, r.jsx)(
                iw.ms.RadioItem,
                {
                  value: e,
                  onSelect: () => {
                    e !== z &&
                      A({
                        ...j.fill,
                        gradientKind: e,
                        pathType: "path" === e ? i5.Iq.GRADIENT_PATH_TYPE_CIRCLE : void 0,
                        fillRect: void 0,
                      })
                  },
                  children: (0, r.jsx)(rZ.A, { ...ln[e] }),
                },
                e,
              ),
            )),
            (I[35] = z),
            (I[36] = A),
            (I[37] = j.fill),
            (I[38] = g))
          : (g = I[38]),
        I[39] !== z || I[40] !== g
          ? ((x = (0, r.jsx)(iw.ms.RadioGroup, { value: z, children: g })), (I[39] = z), (I[40] = g), (I[41] = x))
          : (x = I[41]),
        I[42] !== m || I[43] !== x
          ? ((b = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [
                c,
                (0, r.jsx)(iw.Ab, { side: "bottom", align: "start", contentRef: le, triggerButton: m, children: x }),
              ],
            })),
            (I[42] = m),
            (I[43] = x),
            (I[44] = b))
          : (b = I[44]),
        I[45] !== T || I[46] !== z || I[47] !== A || I[48] !== j.fill
          ? ((y =
              "linear" === z &&
              (0, r.jsx)(iV, {
                label: T.formatMessage({
                  id: "presentationEditor.gradientAngle",
                  defaultMessage: "Angle",
                  description: "Direction of the linear gradient in degrees",
                }),
                value: j.fill.angleDeg ?? 0,
                max: 360,
                suffix: "°",
                presets: [0, 45, 90, 135, 180, 270],
                side: "bottom",
                onChange: (e) => A({ ...j.fill, angleDeg: e }),
              })),
            (I[45] = T),
            (I[46] = z),
            (I[47] = A),
            (I[48] = j.fill),
            (I[49] = y))
          : (y = I[49]),
        I[50] !== b || I[51] !== y || I[52] !== H
          ? ((v = (0, r.jsxs)("div", { className: H, children: [b, y] })),
            (I[50] = b),
            (I[51] = y),
            (I[52] = H),
            (I[53] = v))
          : (v = I[53]),
        I[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsxs)("div", {
              className: "grid grid-cols-2 gap-2",
              children: [
                (0, r.jsx)("span", {
                  children: (0, r.jsx)(rZ.A, {
                    id: "presentationEditor.gradientColors",
                    defaultMessage: "Colors",
                    description: "Heading above all gradient color stops",
                  }),
                }),
                (0, r.jsx)("span", {
                  children: (0, r.jsx)(rZ.A, {
                    id: "presentationEditor.gradientStopOpacity",
                    defaultMessage: "Opacity",
                    description: "Heading above the gradient color stop opacity controls",
                  }),
                }),
              ],
            })),
            (I[54] = w))
          : (w = I[54]),
        I[55] !== T ||
          I[56] !== R ||
          I[57] !== M ||
          I[58] !== P ||
          I[59] !== B ||
          I[60] !== O ||
          I[61] !== j.fill.stops)
      ) {
        let e
        ;(I[63] !== T || I[64] !== R || I[65] !== M || I[66] !== P || I[67] !== O || I[68] !== j.fill.stops
          ? ((e = (e) => {
              let { color: t, opacityPct: n, index: i } = e
              return (0, r.jsxs)(
                "div",
                {
                  className: "grid grid-cols-2 gap-2",
                  onFocusCapture: () => F(i),
                  children: [
                    (0, r.jsx)(iN.v, {
                      onInteractOutside: (e) => {
                        e.target instanceof Element &&
                          e.target.closest("[role=slider]")?.id === `${P}-${i}` &&
                          e.preventDefault()
                      },
                      open: R === i,
                      onOpenChange: (e) => N(e ? i : null),
                      side: "left",
                      palette: M,
                      label: T.formatMessage(ln.colorStop, { number: i + 1 }),
                      color: t,
                      onChange: (e) => O(i, { color: `${e}/${n}%` }),
                    }),
                    (0, r.jsx)(i9, {
                      label: T.formatMessage(
                        {
                          id: "presentationEditor.gradientColorOpacity",
                          defaultMessage: "Opacity for color {number}",
                          description: "Opacity of a numbered gradient color stop as a percentage",
                        },
                        { number: i + 1 },
                      ),
                      value: n,
                      side: "bottom",
                      onChange: (e) => {
                        let t = new i3.Q(j.fill.stops[i].color)
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
            (I[63] = T),
            (I[64] = R),
            (I[65] = M),
            (I[66] = P),
            (I[67] = O),
            (I[68] = j.fill.stops),
            (I[69] = e))
          : (e = I[69]),
          (C = B.map(e)),
          (I[55] = T),
          (I[56] = R),
          (I[57] = M),
          (I[58] = P),
          (I[59] = B),
          (I[60] = O),
          (I[61] = j.fill.stops),
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
    function le(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function lt(e, t) {
      return e.offset - t.offset
    }
    let ln = (0, ii.YK)({
        colorStop: {
          id: "presentationEditor.gradientColorNumber",
          defaultMessage: "Color {number}",
          description: "Label and color picker for a numbered gradient color stop",
        },
        linear: {
          id: "presentationEditor.gradientLinear",
          defaultMessage: "Linear",
          description: "A gradient that blends colors along a straight line",
        },
        path: {
          id: "presentationEditor.gradientRadial",
          defaultMessage: "Radial",
          description: "A gradient that blends colors outward from its center",
        },
      }),
      lr = (0, i0.a)({
        name: "photo-sparkle-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.509766, y: 2.175781, width: 12.980469, height: 11.646484 },
          visualBounds: { x: 1.509766, y: 2.175781, width: 12.980469, height: 11.646484 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.509766, y: 2.175781, width: 12.980469, height: 11.646484 },
          center: { x: 8, y: 7.999023 },
          insets: { top: 2.175781, right: 1.509765, bottom: 2.177735, left: 1.509766 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.999023 }, foreground: { x: 8, y: 7.999023 } },
        },
        capabilities: ["icon"],
        body: '<path d="M9.85156 4.27734C9.94073 4.27743 10.0751 4.32532 10.1357 4.45312L10.1562 4.5127L10.1572 4.51465L10.1631 4.54688L10.1807 4.66016L10.2188 4.8584C10.3194 5.30655 10.493 5.64613 10.7344 5.89551C11.0269 6.19762 11.4493 6.39752 12.0498 6.47266C12.1577 6.48625 12.2277 6.54299 12.2695 6.60742C12.3105 6.67054 12.3252 6.74104 12.3252 6.78711C12.3251 6.83318 12.3106 6.90381 12.2695 6.9668C12.2275 7.03114 12.1569 7.08721 12.0488 7.10059C11.4621 7.17328 11.0334 7.37164 10.7344 7.6709C10.4354 7.97022 10.2376 8.39916 10.165 8.98633C10.1516 9.09443 10.0956 9.16414 10.0312 9.20605C9.96816 9.24712 9.89762 9.26167 9.85156 9.26172C9.80549 9.26169 9.73492 9.24703 9.67188 9.20605C9.60769 9.16427 9.55169 9.09496 9.53809 8.9873C9.46305 8.38639 9.26278 7.96366 8.96094 7.6709C8.6572 7.37643 8.2191 7.18236 7.61426 7.09863C7.41505 7.07085 7.34368 6.89468 7.34375 6.78613C7.34412 6.67767 7.41549 6.50374 7.61328 6.47559L7.72852 6.45703C8.28693 6.36302 8.68276 6.17389 8.96094 5.89551C9.25764 5.59852 9.4535 5.16752 9.54004 4.54785V4.5459L9.5459 4.51465L9.54688 4.5127C9.58954 4.34026 9.74971 4.27754 9.85156 4.27734Z" fill="currentColor"/> <path d="M11.8662 2.17578C13.315 2.17578 14.4902 3.35098 14.4902 4.7998V11.1992C14.4902 12.648 13.315 13.8223 11.8662 13.8223H4.13379C2.68496 13.8223 1.50977 12.648 1.50977 11.1992V4.7998C1.50977 3.35098 2.68496 2.17578 4.13379 2.17578H11.8662ZM5.69922 9.27539C5.30478 8.88136 4.66579 8.88218 4.27148 9.27637L2.49023 11.0566V11.1992C2.49023 12.1068 3.2262 12.8428 4.13379 12.8428H9.26855L5.69922 9.27539ZM4.13379 3.15625C3.2262 3.15625 2.49023 3.89222 2.49023 4.7998V9.6709L3.57812 8.58301C4.35512 7.80612 5.61443 7.80627 6.3916 8.58301L10.6543 12.8428H11.8662C12.7738 12.8428 13.5098 12.1068 13.5098 11.1992V4.7998C13.5098 3.89222 12.7738 3.15625 11.8662 3.15625H4.13379Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var li = n("T0Rc")
    let ll = (0, i0.a)({
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
    function la(e) {
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
        b = (0, rX.A)()
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
      let y = (0, iy.n)(n)
      u[7] !== b
        ? ((l = b.formatMessage({
            id: "presentationEditor.cropImageAction",
            defaultMessage: "Crop",
            description: "Start cropping the selected image directly on the slide canvas",
          })),
          (u[7] = b),
          (u[8] = l))
        : (l = u[8])
      let v = l
      u[9] !== b || u[10] !== v || u[11] !== y.isError
        ? ((a = y.isError
            ? b.formatMessage({
                id: "presentationEditor.cropImageUnavailable",
                defaultMessage: "Image is not ready to crop. Try again.",
                description: "Shown when the slide image has not loaded and cannot be cropped yet",
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
            ? ((t = (0, r.jsx)(iC.I, { asset: ll })), (u[15] = t))
            : (t = u[15]),
          u[16] !== v || u[17] !== y.isPending || u[18] !== e || u[19] !== w
            ? ((n = (0, r.jsx)(iJ.P, {
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
          ? ((e = b.formatMessage({
              id: "presentationEditor.imageFramingMode",
              defaultMessage: "Image sizing",
              description: "Choose whether to fit, fill, or crop an image",
            })),
            (u[21] = b),
            (u[22] = e))
          : (e = u[22])
        let c = y.isError ? w : void 0,
          g = ls[f.mode]
        ;(u[23] !== g ? ((t = (0, r.jsx)(rZ.A, { ...g })), (u[23] = g), (u[24] = t)) : (t = u[24]),
          u[25] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, r.jsx)(r1.HIf, {})), (u[25] = n)) : (n = u[25]),
          u[26] !== t || u[27] !== e || u[28] !== c
            ? ((i = (0, r.jsxs)(iX.c, {
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
                  iw.ms.RadioItem,
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
                    children: (0, r.jsx)(rZ.A, { ...ls[e] }),
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
            ? ((o = (0, r.jsx)(iw.ms.RadioGroup, { value: x, children: a })),
              (u[40] = f.mode),
              (u[41] = a),
              (u[42] = o))
            : (o = u[42]),
          u[43] !== y.isPending || u[44] !== i || u[45] !== o
            ? ((s = (0, r.jsx)(iw.Ab, {
                side: "bottom",
                align: "start",
                disabled: d,
                contentRef: lo,
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
          ? ((s = (0, r.jsx)(iC.I, { asset: ll })), (d = (0, r.jsx)(rZ.A, { ...ls.crop })), (u[49] = s), (u[50] = d))
          : ((s = u[49]), (d = u[50])),
        u[51] !== v || u[52] !== y.isPending || u[53] !== o || u[54] !== w
          ? ((c = (0, r.jsxs)(iX.c, {
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
    function lo(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    let ls = (0, ii.YK)({
      fit: {
        id: "presentationEditor.imageFit",
        defaultMessage: "Fit",
        description: "Show the whole image inside the slide or object while preserving its proportions",
      },
      fill: {
        id: "presentationEditor.imageFillMode",
        defaultMessage: "Fill",
        description: "Fill the slide or object with the image while preserving its proportions and trimming overflow",
      },
      crop: {
        id: "presentationEditor.imageCropMode",
        defaultMessage: "Crop",
        description: "Start cropping the image directly on the slide canvas",
      },
    })
    function ld(e) {
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
        j,
        E,
        M,
        A,
        T = (0, i.c)(90),
        {
          controller: P,
          slideId: L,
          target: F,
          presentationVersion: R,
          onRequestChanges: N,
          onCropStarted: D,
          variant: z,
        } = e,
        B = void 0 === z ? "field" : z,
        O = (0, rX.A)(),
        { elementId: V } = F,
        $ = (0, d.useId)(),
        H = (0, d.useRef)(null)
      ;(T[0] !== V || T[1] !== R || T[2] !== $ || T[3] !== L
        ? ((t = ["presentation-image-preview", $, L, V, R]), (T[0] = V), (T[1] = R), (T[2] = $), (T[3] = L), (T[4] = t))
        : (t = T[4]),
        T[5] !== P || T[6] !== V || T[7] !== L
          ? ((n = () => P.requestImageThumbnail(L, V)), (T[5] = P), (T[6] = V), (T[7] = L), (T[8] = n))
          : (n = T[8]),
        T[9] !== t || T[10] !== n
          ? ((l = { queryKey: t, queryFn: n, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
            (T[9] = t),
            (T[10] = n),
            (T[11] = l))
          : (l = T[11]))
      let { data: K, isError: q } = (0, li.I)(l)
      ;(T[12] !== V || T[13] !== R || T[14] !== $ || T[15] !== L
        ? ((a = ["presentation-image-framing", $, L, V, R]),
          (T[12] = V),
          (T[13] = R),
          (T[14] = $),
          (T[15] = L),
          (T[16] = a))
        : (a = T[16]),
        T[17] !== P || T[18] !== V || T[19] !== L
          ? ((o = () => P.requestImageFraming(L, V)), (T[17] = P), (T[18] = V), (T[19] = L), (T[20] = o))
          : (o = T[20]))
      let W = "field" === B && "fill" === F.kind
      T[21] !== a || T[22] !== o || T[23] !== W
        ? ((c = { queryKey: a, queryFn: o, enabled: W, staleTime: 1 / 0, gcTime: 0, retry: !1 }),
          (T[21] = a),
          (T[22] = o),
          (T[23] = W),
          (T[24] = c))
        : (c = T[24])
      let { data: U, isError: G } = (0, li.I)(c)
      T[25] !== P || T[26] !== L || T[27] !== F
        ? ((u = {
            mutationFn: async (e) => {
              let t = await P.prepareImage(await (0, eJ.I)(e))
              "image" === F.kind
                ? P.dispatch({ kind: "replace-image", slideId: L, elementId: F.elementId, ...t })
                : P.dispatch({ kind: "set-image-fill", slideId: L, elementId: F.elementId, ...t })
            },
          }),
          (T[25] = P),
          (T[26] = L),
          (T[27] = F),
          (T[28] = u))
        : (u = T[28])
      let _ = (0, iy.n)(u)
      if ("swatch" === B) {
        let e, t
        return (
          T[29] !== K
            ? ((e = null != K && (0, r.jsx)("img", { className: "size-full object-cover", src: K, alt: "" })),
              (T[29] = K),
              (T[30] = e))
            : (e = T[30]),
          T[31] !== e
            ? ((t = (0, r.jsx)("span", {
                className: "size-3.25 shrink-0 overflow-hidden rounded-full ring-1 ring-border-subtle ring-inset",
                children: e,
              })),
              (T[31] = e),
              (T[32] = t))
            : (t = T[32]),
          t
        )
      }
      T[33] !== O
        ? ((p = O.formatMessage({
            id: "presentationEditor.replaceImage",
            defaultMessage: "Replace image",
            description: "Choose a local image to replace the selected presentation image",
          })),
          (T[33] = O),
          (T[34] = p))
        : (p = T[34])
      let X = p
      T[35] !== K
        ? ((h = null != K && (0, r.jsx)("img", { className: "size-full object-cover", src: K, alt: "" })),
          (T[35] = K),
          (T[36] = h))
        : (h = T[36])
      let Z = null != K && "bg-media-scrim/40"
      return (
        T[37] !== Z
          ? ((m = (0, s.A)("absolute inset-0 flex items-center justify-center", Z)), (T[37] = Z), (T[38] = m))
          : (m = T[38]),
        T[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = () => H.current?.click()),
            (g = (0, r.jsx)(r1.T7p, {})),
            (x = (0, r.jsx)(rZ.A, {
              id: "presentationEditor.uploadImage",
              defaultMessage: "Upload from computer",
              description: "Choose an image file from the computer",
            })),
            (T[39] = f),
            (T[40] = g),
            (T[41] = x))
          : ((f = T[39]), (g = T[40]), (x = T[41])),
        T[42] !== X || T[43] !== _.isPending
          ? ((b = (0, r.jsxs)(iv.$, {
              color: "secondarySurface",
              size: "actionSm",
              radius: "small",
              disabled: _.isPending,
              "aria-label": X,
              onClick: f,
              children: [g, x],
            })),
            (T[42] = X),
            (T[43] = _.isPending),
            (T[44] = b))
          : (b = T[44]),
        T[45] !== O || T[46] !== N || T[47] !== F.kind
          ? ((y =
              null != N &&
              (0, r.jsxs)(iv.$, {
                color: "secondarySurface",
                size: "actionSm",
                radius: "small",
                onClick: () =>
                  N(
                    "image" === F.kind
                      ? O.formatMessage({
                          id: "presentationEditor.generateImageRequest",
                          defaultMessage: "Generate a replacement image: ",
                          description:
                            "Editable chat draft starter for generating an image to replace the selected presentation image",
                        })
                      : O.formatMessage({
                          id: "presentationEditor.generateFillRequest",
                          defaultMessage: "Generate an image for this background: ",
                          description:
                            "Editable chat draft starter for generating an image fill for the selected presentation shape or slide",
                        }),
                  ),
                children: [
                  (0, r.jsx)(iC.I, { asset: lr }),
                  (0, r.jsx)(rZ.A, {
                    id: "presentationEditor.generateImage",
                    defaultMessage: "Generate image",
                    description: "Start a chat request to generate an image for the selected presentation object",
                  }),
                ],
              })),
            (T[45] = O),
            (T[46] = N),
            (T[47] = F.kind),
            (T[48] = y))
          : (y = T[48]),
        T[49] !== b || T[50] !== y
          ? ((v = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [b, y] })),
            (T[49] = b),
            (T[50] = y),
            (T[51] = v))
          : (v = T[51]),
        T[52] !== m || T[53] !== v
          ? ((w = (0, r.jsx)("div", { className: m, children: v })), (T[52] = m), (T[53] = v), (T[54] = w))
          : (w = T[54]),
        T[55] !== h || T[56] !== w
          ? ((C = (0, r.jsxs)("div", {
              className:
                "relative flex h-32 items-center justify-center overflow-hidden rounded-md border border-subtle bg-surface-secondary",
              children: [h, w],
            })),
            (T[55] = h),
            (T[56] = w),
            (T[57] = C))
          : (C = T[57]),
        T[58] !== P || T[59] !== V || T[60] !== U || T[61] !== D || T[62] !== L || T[63] !== K
          ? ((S =
              null != U &&
              null != K &&
              (0, r.jsx)(la, { controller: P, slideId: L, elementId: V, framing: U, onStarted: D })),
            (T[58] = P),
            (T[59] = V),
            (T[60] = U),
            (T[61] = D),
            (T[62] = L),
            (T[63] = K),
            (T[64] = S))
          : (S = T[64]),
        T[65] !== P || T[66] !== V || T[67] !== D || T[68] !== L || T[69] !== F.kind || T[70] !== K
          ? ((k =
              "image" === F.kind &&
              null != K &&
              (0, r.jsx)(la, { controller: P, slideId: L, elementId: V, onStarted: D })),
            (T[65] = P),
            (T[66] = V),
            (T[67] = D),
            (T[68] = L),
            (T[69] = F.kind),
            (T[70] = K),
            (T[71] = k))
          : (k = T[71]),
        T[72] !== _
          ? ((I = (e) => {
              let t = e.currentTarget.files?.[0]
              ;((e.currentTarget.value = ""), null != t && _.mutate(t))
            }),
            (T[72] = _),
            (T[73] = I))
          : (I = T[73]),
        T[74] !== X || T[75] !== I
          ? ((j = (0, r.jsx)("input", {
              ref: H,
              className: "hidden",
              type: "file",
              accept: "image/*",
              "aria-label": X,
              onChange: I,
            })),
            (T[74] = X),
            (T[75] = I),
            (T[76] = j))
          : (j = T[76]),
        T[77] !== _.isError
          ? ((E =
              _.isError &&
              (0, r.jsx)("p", {
                role: "alert",
                className: "text-base text-danger",
                children: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.imageUploadFailed",
                  defaultMessage: "This image could not be uploaded. Try again.",
                  description: "The replacement image could not be decoded or uploaded",
                }),
              })),
            (T[77] = _.isError),
            (T[78] = E))
          : (E = T[78]),
        T[79] !== G || T[80] !== q || T[81] !== _.isError
          ? ((M =
              (q || G) &&
              !_.isError &&
              (0, r.jsx)("p", {
                className: "text-base text-secondary",
                children: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.imagePreviewFailed",
                  defaultMessage: "Image preview unavailable",
                  description: "The presentation image could not be previewed in the editing panel",
                }),
              })),
            (T[79] = G),
            (T[80] = q),
            (T[81] = _.isError),
            (T[82] = M))
          : (M = T[82]),
        T[83] !== C || T[84] !== S || T[85] !== k || T[86] !== j || T[87] !== E || T[88] !== M
          ? ((A = (0, r.jsxs)(r.Fragment, { children: [C, S, k, j, E, M] })),
            (T[83] = C),
            (T[84] = S),
            (T[85] = k),
            (T[86] = j),
            (T[87] = E),
            (T[88] = M),
            (T[89] = A))
          : (A = T[89]),
        A
      )
    }
    function lc(e) {
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
        j,
        E,
        M,
        A,
        T,
        P,
        L,
        F,
        R = (0, i.c)(106),
        {
          controller: N,
          slideId: D,
          target: z,
          presentationVersion: B,
          mode: O,
          fill: V,
          palette: $,
          onRequestChanges: H,
          compact: K,
        } = e,
        q = void 0 !== K && K,
        W = (0, rX.A)(),
        [U, G] = (0, d.useState)(!1),
        _ = V?.color ?? "#FFFFFF",
        X = V?.gradient,
        Z = X?.stops.some((e) => e.opacityPct !== X.stops[0].opacityPct)
          ? null
          : (X?.stops[0].opacityPct ?? V?.opacityPct ?? 100)
      R[0] !== X
        ? ((t =
            X &&
            i6(
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
        ee = Y === B ? "image" : O
      ;(R[2] !== _ || R[3] !== N || R[4] !== V?.themeColor || R[5] !== O || R[6] !== B || R[7] !== ee
        ? ((n = (e) => {
            if (
              ("gradient" === e && G(!0),
              e !== ee &&
                (Q("image" === e ? B : null),
                "none" === e && N.updateSelectedElementStyle({ fill: "none" }),
                "color" === e && N.updateSelectedElementStyle({ fillColor: _, fillOpacityPct: 100 }),
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
              N.updateSelectedElementStyle({
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
          (R[3] = N),
          (R[4] = V?.themeColor),
          (R[5] = O),
          (R[6] = B),
          (R[7] = ee),
          (R[8] = n))
        : (n = R[8]),
        R[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(iC.I, { asset: iY.b })), (R[9] = l))
          : (l = R[9]),
        R[10] !== W
          ? ((a = W.formatMessage({
              id: "presentationEditor.colorFill",
              defaultMessage: "Color fill",
              description: "Fill the selected shape or slide with a color",
            })),
            (R[10] = W),
            (R[11] = a))
          : (a = R[11]),
        R[12] !== a ? ((o = { id: "color", label: l, ariaLabel: a }), (R[12] = a), (R[13] = o)) : (o = R[13]),
        R[14] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, r.jsx)(r1.UJ6, {})), (R[14] = s)) : (s = R[14]),
        R[15] !== W
          ? ((c = W.formatMessage({
              id: "presentationEditor.imageFill",
              defaultMessage: "Image fill",
              description: "Fill the selected shape or slide with an image",
            })),
            (R[15] = W),
            (R[16] = c))
          : (c = R[16]),
        R[17] !== c ? ((u = { id: "image", label: s, ariaLabel: c }), (R[17] = c), (R[18] = u)) : (u = R[18]),
        R[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)(iC.I, { asset: i1 })), (R[19] = p))
          : (p = R[19]),
        R[20] !== W
          ? ((h = W.formatMessage({
              id: "presentationEditor.gradientFill",
              defaultMessage: "Gradient fill",
              description: "Fill the selected shape or slide with a gradient",
            })),
            (R[20] = W),
            (R[21] = h))
          : (h = R[21]),
        R[22] !== h ? ((m = { id: "gradient", label: p, ariaLabel: h }), (R[22] = h), (R[23] = m)) : (m = R[23]),
        R[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(iC.I, { asset: iQ.L })), (R[24] = f))
          : (f = R[24]),
        R[25] !== W
          ? ((g = W.formatMessage({
              id: "presentationEditor.noFill",
              defaultMessage: "No fill",
              description: "Remove the selected object or slide fill",
            })),
            (R[25] = W),
            (R[26] = g))
          : (g = R[26]),
        R[27] !== g ? ((x = { id: "none", label: f, ariaLabel: g }), (R[27] = g), (R[28] = x)) : (x = R[28]),
        R[29] !== m || R[30] !== x || R[31] !== o || R[32] !== u
          ? ((b = [o, u, m, x]), (R[29] = m), (R[30] = x), (R[31] = o), (R[32] = u), (R[33] = b))
          : (b = R[33]),
        R[34] !== ee || R[35] !== b || R[36] !== n
          ? ((y = (0, r.jsx)(i2.T, {
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
      let et = y
      ;(R[38] === Symbol.for("react.memo_cache_sentinel") ? ((v = () => G(!1)), (R[38] = v)) : (v = R[38]),
        R[39] !== N || R[40] !== H || R[41] !== B || R[42] !== D || R[43] !== z
          ? ((w = (0, r.jsx)(ld, {
              controller: N,
              slideId: D,
              target: z,
              presentationVersion: B,
              onRequestChanges: H,
              onCropStarted: v,
            })),
            (R[39] = N),
            (R[40] = H),
            (R[41] = B),
            (R[42] = D),
            (R[43] = z),
            (R[44] = w))
          : (w = R[44]))
      let en = w
      R[45] !== N || R[46] !== V || R[47] !== $ || R[48] !== B
        ? ((C =
            V?.gradient != null &&
            (0, r.jsx)(i7, {
              value: V.gradient,
              presentationVersion: B,
              palette: $,
              onChange: (e) => N.updateSelectedElementStyle({ fillGradient: e }),
            })),
          (R[45] = N),
          (R[46] = V),
          (R[47] = $),
          (R[48] = B),
          (R[49] = C))
        : (C = R[49])
      let er = C
      R[50] !== N || R[51] !== W || R[52] !== O || R[53] !== Z || R[54] !== ee
        ? ((S =
            ("color" === ee || "gradient" === ee || ("image" === ee && "image" === O)) &&
            (0, r.jsx)(i9, {
              label: W.formatMessage({
                id: "presentationEditor.fillOpacity",
                defaultMessage: "Fill opacity",
                description: "Object fill opacity as a percentage",
              }),
              value: Z,
              onChange: (e) => N.updateSelectedElementStyle({ fillOpacityPct: e }),
            })),
          (R[50] = N),
          (R[51] = W),
          (R[52] = O),
          (R[53] = Z),
          (R[54] = ee),
          (R[55] = S))
        : (S = R[55])
      let ei = S
      R[56] !== _ ||
      R[57] !== q ||
      R[58] !== N ||
      R[59] !== J ||
      R[60] !== W ||
      R[61] !== B ||
      R[62] !== ee ||
      R[63] !== D ||
      R[64] !== z
        ? ((k = (0, r.jsx)(iz.Wv, {
            asChild: !0,
            children: q
              ? (0, r.jsxs)(iJ.P, {
                  color: "ghostActive",
                  size: "formatToolbar",
                  "aria-label": W.formatMessage({
                    id: "presentationEditor.imageFillMenu",
                    defaultMessage: "Fill",
                    description: "Open image and background fill controls",
                  }),
                  children: [
                    "image" === ee && (0, r.jsx)(r1.UJ6, {}),
                    "none" === ee && (0, r.jsx)(iC.I, { asset: iQ.L }),
                    ("color" === ee || "gradient" === ee) &&
                      (0, r.jsx)(i4.b, {
                        color: "color" === ee ? _ : void 0,
                        backgroundImage: "gradient" === ee ? J : void 0,
                        size: "toolbar",
                      }),
                    (0, r.jsx)(r1.HIf, {}),
                  ],
                })
              : (0, r.jsxs)(iX.c, {
                  className: "w-full",
                  children: [
                    "image" === ee &&
                      (0, r.jsx)(ld, {
                        variant: "swatch",
                        controller: N,
                        slideId: D,
                        target: z,
                        presentationVersion: B,
                      }),
                    "image" !== ee &&
                      (0, r.jsx)(i4.b, {
                        color: "color" === ee ? _ : void 0,
                        backgroundImage: "gradient" === ee ? J : void 0,
                      }),
                    (0, r.jsxs)("span", {
                      className: "min-w-0 flex-1 truncate text-start font-normal",
                      children: [
                        "image" === ee &&
                          (0, r.jsx)(rZ.A, {
                            id: "presentationEditor.fillImageLabel",
                            defaultMessage: "Image",
                            description: "Current background fill is an image",
                          }),
                        "none" === ee &&
                          (0, r.jsx)(rZ.A, {
                            id: "presentationEditor.fillNoneLabel",
                            defaultMessage: "None",
                            description: "Current background has no fill",
                          }),
                        "color" === ee && _.replace(/^#/, "").toUpperCase(),
                        "gradient" === ee &&
                          (0, r.jsx)(rZ.A, {
                            id: "presentationEditor.fillGradientLabel",
                            defaultMessage: "Gradient",
                            description: "Current background fill is a gradient",
                          }),
                      ],
                    }),
                    (0, r.jsx)(r1.HIf, {}),
                  ],
                }),
          })),
          (R[56] = _),
          (R[57] = q),
          (R[58] = N),
          (R[59] = J),
          (R[60] = W),
          (R[61] = B),
          (R[62] = ee),
          (R[63] = D),
          (R[64] = z),
          (R[65] = k))
        : (k = R[65])
      let el = q ? "bottom" : "left"
      ;(R[66] !== et || R[67] !== z.kind
        ? ((I = "fill" === z.kind && (0, r.jsx)("div", { className: "p-2", children: et })),
          (R[66] = et),
          (R[67] = z.kind),
          (R[68] = I))
        : (I = R[68]),
        R[69] !== _ || R[70] !== N || R[71] !== W || R[72] !== $ || R[73] !== ee
          ? ((j =
              "color" === ee &&
              (0, r.jsx)(iN.f, {
                closeOnSelect: !1,
                color: _,
                label: W.formatMessage({
                  id: "presentationEditor.fillColor",
                  defaultMessage: "Fill color",
                  description: "Select the object or slide fill color",
                }),
                palette: $,
                onChange: (e) => N.updateSelectedElementStyle({ fillColor: e }),
              })),
            (R[69] = _),
            (R[70] = N),
            (R[71] = W),
            (R[72] = $),
            (R[73] = ee),
            (R[74] = j))
          : (j = R[74]),
        R[75] !== en || R[76] !== ee
          ? ((E = "image" === ee && (0, r.jsx)("div", { className: "flex flex-col gap-3 p-2", children: en })),
            (R[75] = en),
            (R[76] = ee),
            (R[77] = E))
          : (E = R[77]),
        R[78] !== er || R[79] !== ee
          ? ((M = "gradient" === ee && (0, r.jsx)("div", { className: "flex flex-col gap-3 p-2", children: er })),
            (R[78] = er),
            (R[79] = ee),
            (R[80] = M))
          : (M = R[80]),
        R[81] !== I || R[82] !== j || R[83] !== E || R[84] !== M
          ? ((A = (0, r.jsxs)("div", { className: "w-62", children: [I, j, E, M] })),
            (R[81] = I),
            (R[82] = j),
            (R[83] = E),
            (R[84] = M),
            (R[85] = A))
          : (A = R[85]),
        R[86] !== el || R[87] !== A
          ? ((T = (0, r.jsx)(iz.hl, {
              "data-popcorn-edit-toolbar-root": "true",
              side: el,
              align: "start",
              size: "content",
              variant: "menu",
              disablePadding: !0,
              children: A,
            })),
            (R[86] = el),
            (R[87] = A),
            (R[88] = T))
          : (T = R[88]),
        R[89] !== U || R[90] !== k || R[91] !== T
          ? ((P = (0, r.jsxs)(iz.AM, { open: U, onOpenChange: G, children: [k, T] })),
            (R[89] = U),
            (R[90] = k),
            (R[91] = T),
            (R[92] = P))
          : (P = R[92]))
      let ea = P
      return q
        ? ea
        : (R[93] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = (0, r.jsx)(rZ.A, {
                id: "presentationEditor.fill",
                defaultMessage: "Background",
                description: "Object or slide fill section",
              })),
              (R[93] = L))
            : (L = R[93]),
          R[94] !== _ ||
          R[95] !== N ||
          R[96] !== ea ||
          R[97] !== et ||
          R[98] !== en ||
          R[99] !== O ||
          R[100] !== Z ||
          R[101] !== ei ||
          R[102] !== $ ||
          R[103] !== ee ||
          R[104] !== z.elementId
            ? ((F = (0, r.jsx)(iD.l, {
                title: L,
                children:
                  null == z.elementId
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          et,
                          "image" === ee && en,
                          "gradient" === ee &&
                            (0, r.jsxs)("div", { className: "grid grid-cols-2 gap-2", children: [ea, ei] }),
                          ("color" === ee || ("image" === ee && "image" === O)) &&
                            (0, r.jsx)(lu, {
                              color: "color" === ee ? _ : void 0,
                              opacity: Z,
                              palette: $,
                              onChange: (e) => N.updateSelectedElementStyle(e),
                            }),
                        ],
                      })
                    : (0, r.jsxs)("div", {
                        className: ei ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2",
                        children: [ea, ei],
                      }),
              })),
              (R[94] = _),
              (R[95] = N),
              (R[96] = ea),
              (R[97] = et),
              (R[98] = en),
              (R[99] = O),
              (R[100] = Z),
              (R[101] = ei),
              (R[102] = $),
              (R[103] = ee),
              (R[104] = z.elementId),
              (R[105] = F))
            : (F = R[105]),
          F)
    }
    function lu(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d = (0, i.c)(19),
        { color: c, opacity: u, palette: p, onChange: h } = e,
        m = (0, rX.A)(),
        f = void 0 === c ? "flex flex-col gap-2" : "grid grid-cols-2 gap-2"
      ;(d[0] !== c || d[1] !== m || d[2] !== h || d[3] !== p
        ? ((t =
            void 0 !== c &&
            (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [
                (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.color",
                  defaultMessage: "Color",
                  description: "Change the color of the selected text, object, or slide",
                }),
                (0, r.jsx)(iN.v, {
                  side: "left",
                  palette: p,
                  label: m.formatMessage({
                    id: "presentationEditor.fillColor",
                    defaultMessage: "Fill color",
                    description: "Select the object or slide fill color",
                  }),
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
          ? ((n = (0, r.jsx)(rZ.A, {
              id: "presentationEditor.opacity",
              defaultMessage: "Opacity",
              description: "Object opacity as a percentage",
            })),
            (d[5] = n))
          : (n = d[5]))
      let g = void 0 === c ? "left" : "bottom"
      return (
        d[6] !== m
          ? ((l = m.formatMessage({
              id: "presentationEditor.fillOpacity",
              defaultMessage: "Fill opacity",
              description: "Object fill opacity as a percentage",
            })),
            (d[6] = m),
            (d[7] = l))
          : (l = d[7]),
        d[8] !== h ? ((a = (e) => h({ fillOpacityPct: e })), (d[8] = h), (d[9] = a)) : (a = d[9]),
        d[10] !== u || d[11] !== g || d[12] !== l || d[13] !== a
          ? ((o = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-1.5 text-xs text-secondary",
              "data-inspector-field-label": !0,
              children: [n, (0, r.jsx)(i9, { side: g, label: l, value: u, onChange: a })],
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
    var lp = n("e6xI")
    function lh(e) {
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
        k = (0, d.useSyncExternalStore)(C.subscribe, C.getSnapshot, lm),
        I = (0, rX.A)()
      if (!k) return null
      if (void 0 !== S && S) {
        let e
        return (
          v[0] !== k || v[1] !== C
            ? ((e = (0, r.jsx)(lf, { chart: k, source: C, compact: !0 })), (v[0] = k), (v[1] = C), (v[2] = e))
            : (e = v[2]),
          e
        )
      }
      let j = k.fillValue ?? k.fill ?? "#FFFFFF"
      v[3] !== j ? ((t = new i_.S(j)), (v[3] = j), (v[4] = t)) : (t = v[4])
      let E = t
      ;(v[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, r.jsx)(rZ.A, {
            id: "presentationEditor.chartType",
            defaultMessage: "Chart type",
            description: "Chart type selector",
          })),
          (v[5] = n))
        : (n = v[5]),
        v[6] !== k || v[7] !== C
          ? ((l = (0, r.jsx)(iD.l, { title: n, children: (0, r.jsx)(lf, { chart: k, source: C }) })),
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
              (0, r.jsx)(iD.l, {
                title: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.chartColors",
                  defaultMessage: "Chart colors",
                  description: "Colors for chart data series",
                }),
                children: (0, r.jsx)("div", {
                  className: (0, s.A)(lp.A.pairedFields, "grid grid-cols-2 gap-2"),
                  children: k.series.map((e, t) =>
                    (0, r.jsx)(
                      iN.v,
                      {
                        side: t % 2 == 0 ? "left" : "bottom",
                        palette: w,
                        label: I.formatMessage(
                          {
                            id: "presentationEditor.seriesColor",
                            defaultMessage: "Color {number}",
                            description: "Color of a numbered chart series",
                          },
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
              (0, r.jsx)(iD.l, {
                title: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.chartColors",
                  defaultMessage: "Chart colors",
                  description: "Colors for chart data series",
                }),
                children: (0, r.jsx)("div", {
                  className: (0, s.A)(lp.A.pairedFields, "grid grid-cols-2 gap-2"),
                  children: k.slices.map((e, t) =>
                    (0, r.jsx)(
                      iN.v,
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
          ? ((c = (0, r.jsx)(rZ.A, {
              id: "presentationEditor.chartOptions",
              defaultMessage: "Chart options",
              description: "Visibility settings for chart elements",
            })),
            (v[21] = c))
          : (c = v[21]),
        v[22] !== I
          ? ((u = I.formatMessage({
              id: "presentationEditor.legend",
              defaultMessage: "Legend",
              description: "Toggle the chart legend",
            })),
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
          ? ((h = (0, r.jsx)(iZ.i, { label: u, checked: k.legend.visible, onChange: p })),
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
                  (0, r.jsx)(iZ.i, {
                    label: I.formatMessage({
                      id: "presentationEditor.axisLabels",
                      defaultMessage: "Axis labels",
                      description: "Toggle chart axes",
                    }),
                    checked: k.axes.x.visible && k.axes.y.visible,
                    onChange: (e) => {
                      C.edit({ chartId: k.chartId, type: "set-chart-axis", axis: "both", visible: e })
                    },
                  }),
                  (0, r.jsx)(iZ.i, {
                    label: I.formatMessage({
                      id: "presentationEditor.gridLines",
                      defaultMessage: "Grid lines",
                      description: "Toggle chart grid lines",
                    }),
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
          ? ((f = (0, r.jsxs)(iD.l, { title: c, children: [h, m] })), (v[36] = h), (v[37] = m), (v[38] = f))
          : (f = v[38]),
        v[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(rZ.A, {
              id: "presentationEditor.chartBackground",
              defaultMessage: "Background",
              description: "Chart background color",
            })),
            (v[39] = g))
          : (g = v[39]))
      let M = k.fillDisplayColors?.color ?? k.fill ?? "#FFFFFF",
        A = null == E.opacity ? null : 100 * E.opacity
      return (
        v[40] !== E || v[41] !== k.chartId || v[42] !== C
          ? ((x = (e) => {
              let { fillColor: t, fillOpacityPct: n } = e,
                r = new i_.S(t ?? (E.isExplicitNone ? "#FFFFFF" : E.toConfig({ preserveProto: !1 })))
              ;(null != n ? (r.opacity = n / 100) : null == E.opacity || E.isExplicitNone || (r.opacity = E.opacity),
                C.edit({
                  chartId: k.chartId,
                  type: "set-chart-fill",
                  area: "chart",
                  fill: re.xY.parse(r.toConfig({ preserveProto: !1 })),
                }))
            }),
            (v[40] = E),
            (v[41] = k.chartId),
            (v[42] = C),
            (v[43] = x))
          : (x = v[43]),
        v[44] !== w || v[45] !== M || v[46] !== A || v[47] !== x
          ? ((b = (0, r.jsx)(iD.l, {
              title: g,
              children: (0, r.jsx)(lu, { palette: w, color: M, opacity: A, onChange: x }),
            })),
            (v[44] = w),
            (v[45] = M),
            (v[46] = A),
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
    function lm() {
      return null
    }
    function lf(e) {
      let t,
        n,
        l,
        a = (0, i.c)(16),
        { chart: o, source: s, compact: d } = e,
        c = void 0 !== d && d,
        u = (0, rX.A)(),
        p = iS.N[o.chartType],
        h = c ? void 0 : "left"
      if (
        (a[0] !== o.chartType || a[1] !== p || a[2] !== c || a[3] !== u
          ? ((t = c
              ? (0, r.jsxs)(iJ.P, {
                  className: "justify-between",
                  color: "ghostActive",
                  contentLayout: "dropdown",
                  size: "formatToolbar",
                  "aria-label": u.formatMessage({
                    id: "presentationEditor.chartType",
                    defaultMessage: "Chart type",
                    description: "Chart type selector",
                  }),
                  children: [
                    p && (0, r.jsx)(iC.I, { asset: p }),
                    (0, r.jsx)(lx, { type: o.chartType }),
                    (0, r.jsx)(r1.HIf, {}),
                  ],
                })
              : (0, r.jsxs)(iX.c, {
                  className: "w-full justify-between",
                  "aria-label": u.formatMessage({
                    id: "presentationEditor.chartType",
                    defaultMessage: "Chart type",
                    description: "Chart type selector",
                  }),
                  children: [
                    p && (0, r.jsx)(iC.I, { asset: p }),
                    (0, r.jsx)("span", {
                      className: "min-w-0 flex-1 truncate text-start",
                      children: (0, r.jsx)(lx, { type: o.chartType }),
                    }),
                    (0, r.jsx)(r1.HIf, {}),
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
                iw.ms.Item,
                {
                  leftIconAsset: iS.N[e],
                  onSelect: () => s.edit({ chartId: o.chartId, type: "set-chart-type", chartType: e }),
                  children: (0, r.jsx)(lx, { type: e }),
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
          ? ((l = (0, r.jsx)(iw.Ab, {
              contentRef: lg,
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
    function lg(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function lx(e) {
      let t,
        n = (0, i.c)(2),
        { type: l } = e
      return (
        n[0] !== l
          ? ((t = (0, r.jsx)(rZ.A, {
              id: "presentationEditor.chartTypeName",
              defaultMessage:
                "{type, select, line {Line} pie {Pie} bar {Bar} doughnut {Doughnut} scatter {Scatter} bubble {Bubble} radar {Radar} treemap {Treemap} sunburst {Sunburst} map {Map} waterfall {Waterfall} line3D {3D line} pie3D {3D pie} area3D {3D area} bar3D {3D bar} funnel {Funnel} histogram {Histogram} boxWhisker {Box and whisker} stock {Stock} surface3D {3D surface} ofPie {Pie of pie} surface {Surface} pareto {Pareto} combo {Combination} other {Area}}",
              description: "Presentation chart type names",
              values: { type: l },
            })),
            (n[0] = l),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function lb(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d = (0, i.c)(21),
        { value: c, onChange: u } = e,
        p = (0, rX.A)(),
        h = null == c || c > 0
      d[0] !== p
        ? ((t = p.formatMessage({
            id: "presentationEditor.corners",
            defaultMessage: "Corners",
            description: "Object corner radius",
          })),
          (d[0] = p),
          (d[1] = t))
        : (t = d[1])
      let m = t,
        f = !h
      return (
        d[2] !== p
          ? ((n = p.formatMessage({
              id: "presentationEditor.toggleCorners",
              defaultMessage: "Toggle corners",
              description: "Add or remove rounded corners on selected objects",
            })),
            (d[2] = p),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== h || d[5] !== u ? ((l = () => u(8 * !h)), (d[4] = h), (d[5] = u), (d[6] = l)) : (l = d[6]),
        d[7] !== h || d[8] !== n || d[9] !== l
          ? ((a = (0, r.jsx)(iB.p, { enabled: h, label: n, onClick: l })),
            (d[7] = h),
            (d[8] = n),
            (d[9] = l),
            (d[10] = a))
          : (a = d[10]),
        d[11] !== h || d[12] !== m || d[13] !== u || d[14] !== c
          ? ((o =
              h &&
              (0, r.jsx)(iO.D, {
                label: m,
                value: c,
                onChange: u,
                side: "left",
                presets: [0, 4, 8, 12, 16, 24, 32].map(ly),
              })),
            (d[11] = h),
            (d[12] = m),
            (d[13] = u),
            (d[14] = c),
            (d[15] = o))
          : (o = d[15]),
        d[16] !== m || d[17] !== f || d[18] !== a || d[19] !== o
          ? ((s = (0, r.jsx)(iD.l, { collapsed: f, title: m, action: a, children: o })),
            (d[16] = m),
            (d[17] = f),
            (d[18] = a),
            (d[19] = o),
            (d[20] = s))
          : (s = d[20]),
        s
      )
    }
    function ly(e) {
      return { value: e }
    }
    let lv = (0, i0.a)({
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
      lw = (0, i0.a)({
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
      lC = (0, i0.a)({
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
      lS = (0, i0.a)({
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
      lk = (0, i0.a)({
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
      lI = (0, i0.a)({
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
    function lj(e) {
      let t,
        n,
        l,
        a,
        o,
        s,
        d = (0, i.c)(16),
        { onAlign: c, showTitle: u } = e,
        p = void 0 === u || u,
        h = (0, rX.A)()
      if (d[0] !== h || d[1] !== c || d[2] !== p) {
        let e = [
          {
            id: "left",
            asset: lw,
            label: h.formatMessage({
              id: "presentationEditor.objectLeft",
              defaultMessage: "Align objects left",
              description: "Align selected objects with the left edge of the selection or slide",
            }),
          },
          {
            id: "center",
            asset: lv,
            label: h.formatMessage({
              id: "presentationEditor.objectCenter",
              defaultMessage: "Align objects horizontally",
              description: "Center selected objects horizontally within the selection or slide",
            }),
          },
          {
            id: "right",
            asset: lC,
            label: h.formatMessage({
              id: "presentationEditor.objectRight",
              defaultMessage: "Align objects right",
              description: "Align selected objects with the right edge of the selection or slide",
            }),
          },
          {
            id: "top",
            asset: lI,
            label: h.formatMessage({
              id: "presentationEditor.objectTop",
              defaultMessage: "Align objects top",
              description: "Align selected objects with the top edge of the selection or slide",
            }),
          },
          {
            id: "middle",
            asset: lk,
            label: h.formatMessage({
              id: "presentationEditor.objectMiddle",
              defaultMessage: "Align objects vertically",
              description: "Center selected objects vertically within the selection or slide",
            }),
          },
          {
            id: "bottom",
            asset: lS,
            label: h.formatMessage({
              id: "presentationEditor.objectBottom",
              defaultMessage: "Align objects bottom",
              description: "Align selected objects with the bottom edge of the selection or slide",
            }),
          },
        ]
        ;((t = iD.l),
          d[7] !== p
            ? ((a = p
                ? (0, r.jsx)(rZ.A, {
                    id: "presentationEditor.layout",
                    defaultMessage: "Layout",
                    description: "Presentation object alignment section",
                  })
                : void 0),
              (d[7] = p),
              (d[8] = a))
            : (a = d[8]),
          (n = "flex gap-2"),
          (l = [e.slice(0, 3), e.slice(3)].map((e, t) =>
            (0, r.jsx)(
              i2.T,
              {
                className: "flex-1",
                fullWidth: !0,
                variant: "field",
                focusRing: "surface",
                unselectedColor: "ghostActive",
                selectedId: null,
                onSelect: c,
                options: e.map(lE),
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
    function lE(e) {
      let { id: t, asset: n, label: i } = e
      return { id: t, label: (0, r.jsx)(iC.I, { asset: n }), ariaLabel: i, tooltipContent: i }
    }
    function lM(e) {
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
    function lA(e) {
      return "shape" === e.kind && null != e.text && "none" === e.fillMode && !e.line?.width
    }
    let lT = {
      light: { angle: 90, blur: 2, distance: 1, sizePct: 100, color: "#000000", opacityPct: 10 },
      medium: { angle: 90, blur: 8, distance: 4, sizePct: 100, color: "#000000", opacityPct: 16 },
      strong: { angle: 90, blur: 15, distance: 10, sizePct: 100, color: "#000000", opacityPct: 16 },
      heavy: { angle: 90, blur: 25, distance: 20, sizePct: 100, color: "#000000", opacityPct: 18 },
    }
    function lP(e) {
      let t,
        n = (0, i.c)(10),
        { selection: l, palette: a, onChange: o } = e,
        s = (0, rX.A)(),
        [c, u] = (0, d.useState)(!1)
      if (n[0] !== s || n[1] !== o || n[2] !== a || n[3] !== l || n[4] !== c) {
        let e,
          i,
          d,
          p = l.map(lF),
          h = p[0],
          m = p.some(lL)
        n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = ["angle", "blur", "distance", "sizePct", "color", "opacityPct"]), (n[6] = e))
          : (e = n[6])
        let f = e,
          g = p.some((e) => f.some((t) => e?.[t] !== h?.[t])),
          x = (e) => (p.every((t) => t?.[e] === h?.[e]) ? (h?.[e] ?? null) : null),
          b = ["light", "medium", "strong", "heavy"].find((e) => {
            let t = lT[e]
            return p.every((e) => null != e && f.every((n) => t[n] === e[n]))
          }),
          y = c || null == b
        ;(n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(rZ.A, {
              id: "presentationEditor.shadow",
              defaultMessage: "Shadow",
              description: "Object shadow section",
            })),
            (n[7] = i))
          : (i = n[7]),
          n[8] !== s
            ? ((d = s.formatMessage({
                id: "presentationEditor.toggleShadow",
                defaultMessage: "Toggle shadow",
                description: "Add or remove the selected object's shadow",
              })),
              (n[8] = s),
              (n[9] = d))
            : (d = n[9]),
          (t = (0, r.jsx)(iD.l, {
            collapsed: !m,
            title: i,
            action: (0, r.jsx)(iB.p, { enabled: m, label: d, onClick: () => o({ shadow: m ? null : lT.medium }) }),
            children:
              m &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(iw.Ab, {
                    side: "left",
                    align: "start",
                    contentClassName: "min-w-50",
                    triggerButton: (0, r.jsxs)(iX.c, {
                      className: "w-full justify-between",
                      "aria-label": s.formatMessage({
                        id: "presentationEditor.shadowStyle",
                        defaultMessage: "Shadow style",
                        description: "Select a shadow preset or custom shadow settings",
                      }),
                      children: [
                        g && !c
                          ? (0, r.jsx)(rZ.A, {
                              id: "presentationEditor.mixed",
                              defaultMessage: "Mixed",
                              description: "A formatting value differs across selected objects or table cells",
                            })
                          : (0, r.jsx)(rZ.A, { ...lR[y ? "custom" : b] }),
                        (0, r.jsx)(r1.HIf, {}),
                      ],
                    }),
                    children: [
                      ["light", "medium", "strong", "heavy"].map((e) =>
                        (0, r.jsx)(
                          iw.ms.Item,
                          {
                            rightIcon: y || b !== e ? void 0 : (0, r.jsx)(r1.ALZ, {}),
                            onSelect: () => {
                              ;(u(!1), o({ shadow: lT[e] }))
                            },
                            children: (0, r.jsx)(rZ.A, { ...lR[e] }),
                          },
                          e,
                        ),
                      ),
                      (0, r.jsx)(iw.ms.Separator, {}),
                      (0, r.jsx)(iw.ms.Item, { onSelect: () => u(!0), children: (0, r.jsx)(rZ.A, { ...lR.custom }) }),
                    ],
                  }),
                  y &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, r.jsx)(iV, {
                              label: s.formatMessage({
                                id: "presentationEditor.shadowAngle",
                                defaultMessage: "Angle",
                                description: "Direction of the object shadow in degrees",
                              }),
                              presets: [0, 45, 90, 135, 180, 270],
                              side: "left",
                              value: x("angle"),
                              max: 360,
                              suffix: "°",
                              onChange: (e) => o({ shadow: { angle: e } }),
                            }),
                            (0, r.jsx)(iV, {
                              label: s.formatMessage({
                                id: "presentationEditor.shadowBlur",
                                defaultMessage: "Blur",
                                description: "Blur radius of the object shadow",
                              }),
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
                            (0, r.jsx)(iV, {
                              label: s.formatMessage({
                                id: "presentationEditor.shadowSize",
                                defaultMessage: "Size",
                                description: "Shadow size as a percentage of the object",
                              }),
                              presets: [50, 75, 100, 125, 150, 200],
                              side: "left",
                              value: x("sizePct"),
                              max: 200,
                              suffix: "%",
                              onChange: (e) => o({ shadow: { sizePct: e } }),
                            }),
                            (0, r.jsx)(iV, {
                              label: s.formatMessage({
                                id: "presentationEditor.shadowDistance",
                                defaultMessage: "Distance",
                                description: "Distance from the object to its shadow",
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
                                  children: (0, r.jsx)(rZ.A, {
                                    id: "presentationEditor.shadowColorLabel",
                                    defaultMessage: "Color",
                                    description: "Color field label in the custom shadow settings",
                                  }),
                                }),
                                (0, r.jsx)(iN.v, {
                                  side: "left",
                                  palette: a,
                                  label: s.formatMessage({
                                    id: "presentationEditor.shadowColor",
                                    defaultMessage: "Shadow color",
                                    description: "Select the object's shadow color",
                                  }),
                                  color: x("color"),
                                  onChange: (e) => o({ shadow: { color: e } }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(iV, {
                              label: s.formatMessage({
                                id: "presentationEditor.shadowOpacity",
                                defaultMessage: "Opacity",
                                description: "Shadow opacity as a percentage",
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
    function lL(e) {
      return null != e
    }
    function lF(e) {
      return e.shadow
    }
    let lR = (0, ii.YK)({
      light: {
        id: "presentationEditor.shadowLight",
        defaultMessage: "Light",
        description: "Light object shadow style",
      },
      medium: {
        id: "presentationEditor.shadowMedium",
        defaultMessage: "Medium",
        description: "Medium object shadow style",
      },
      strong: {
        id: "presentationEditor.shadowStrong",
        defaultMessage: "Strong",
        description: "Strong object shadow style",
      },
      heavy: {
        id: "presentationEditor.shadowHeavy",
        defaultMessage: "Heavy",
        description: "Heavy object shadow style",
      },
      custom: {
        id: "presentationEditor.shadowCustom",
        defaultMessage: "Custom",
        description: "Custom object shadow style",
      },
    })
    var lN = n("bxQz"),
      lD = n("kbr9"),
      lz = n("P5BL"),
      lB = n("w1BI"),
      lO = n("LBbs"),
      lV = n("F0xz"),
      l$ = n("OaqR"),
      lH = n("zFSa"),
      lK = n("BPar"),
      lq = n("XMkv"),
      lW = n("s4Of"),
      lU = n("V4G9"),
      lG = n("W0t2"),
      l_ = n("pU3e"),
      lX = n("HVBu"),
      lZ = n.n(lX),
      lJ = n("lPBr")
    let lY = [
        "Barlow Condensed",
        "Bebas Neue",
        "Bodoni Moda",
        "Caveat",
        "Cormorant Garamond",
        "DM Mono",
        "DM Sans",
        "Eczar",
        "Fraunces",
        "IBM Plex Sans",
        "Inter",
        "Jost",
        "Lato",
        "Lora",
        "Manrope",
        "Merriweather",
        "Montserrat",
        "Nunito",
        "Open Sans",
        "Oswald",
        "Playfair Display",
        "Poppins",
        "Raleway",
        "Roboto",
        "Space Grotesk",
        "Work Sans",
      ],
      lQ = lZ()(() => lY.filter((e) => (0, lJ.getAvailableCssFontFamilyName)(e) === e))
    var l0 = n("G9aD")
    function l1(e) {
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
        x = (0, i.c)(32),
        { value: b, onChange: y, compact: v } = e,
        w = void 0 !== v && v,
        C = (0, rX.A)(),
        [S, k] = (0, d.useState)(),
        I = w ? "bottom" : "left"
      x[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            e && k(lQ())
          }),
          (x[0] = t))
        : (t = x[0])
      let j = w ? void 0 : "w-full justify-between",
        E = w ? "ghostActive" : "field",
        M = w ? "formatToolbar" : "field"
      return (
        x[1] !== C
          ? ((n = C.formatMessage({
              id: "presentationEditor.font",
              defaultMessage: "Font family",
              description: "Font family selector",
            })),
            (x[1] = C),
            (x[2] = n))
          : (n = x[2]),
        x[3] !== b
          ? ((l = { fontFamily: b }),
            (a =
              b ??
              (0, r.jsx)(rZ.A, {
                id: "presentationEditor.mixed",
                defaultMessage: "Mixed",
                description: "A formatting value differs across selected objects or table cells",
              })),
            (x[3] = b),
            (x[4] = l),
            (x[5] = a))
          : ((l = x[4]), (a = x[5])),
        x[6] !== l || x[7] !== a
          ? ((o = (0, r.jsx)("span", { className: "min-w-0 truncate", style: l, children: a })),
            (x[6] = l),
            (x[7] = a),
            (x[8] = o))
          : (o = x[8]),
        x[9] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, r.jsx)(r1.HIf, {})), (x[9] = s)) : (s = x[9]),
        x[10] !== o || x[11] !== j || x[12] !== E || x[13] !== M || x[14] !== n
          ? ((c = (0, r.jsxs)(iJ.P, {
              className: j,
              color: E,
              contentLayout: "dropdown",
              size: M,
              "aria-label": n,
              children: [o, s],
            })),
            (x[10] = o),
            (x[11] = j),
            (x[12] = E),
            (x[13] = M),
            (x[14] = n),
            (x[15] = c))
          : (c = x[15]),
        x[16] !== b ? ((u = null == b ? [] : [b]), (x[16] = b), (x[17] = u)) : (u = x[17]),
        x[18] !== S ? ((p = S ?? []), (x[18] = S), (x[19] = p)) : (p = x[19]),
        x[20] !== u || x[21] !== p
          ? ((h = new Set([
              ...u,
              "Arial",
              "Helvetica Neue",
              "Calibri",
              "Carlito",
              "Georgia",
              "Times New Roman",
              "Verdana",
              ...p,
            ])),
            (x[20] = u),
            (x[21] = p),
            (x[22] = h))
          : (h = x[22]),
        x[23] !== h ? ((m = [...h]), (x[23] = h), (x[24] = m)) : (m = x[24]),
        x[25] !== y || x[26] !== m
          ? ((f = m.map((e) =>
              (0, r.jsx)(
                iw.ms.Item,
                { onSelect: () => y(e), children: (0, r.jsx)("span", { style: { fontFamily: e }, children: e }) },
                e,
              ),
            )),
            (x[25] = y),
            (x[26] = m),
            (x[27] = f))
          : (f = x[27]),
        x[28] !== c || x[29] !== f || x[30] !== I
          ? ((g = (0, r.jsx)(iw.Ab, {
              side: I,
              align: "start",
              onOpenChange: t,
              contentRef: l2,
              contentClassName: `${l0.A.surface} pointer-events-auto min-w-50`,
              contentWidth: "menuBounded",
              triggerButton: c,
              children: f,
            })),
            (x[28] = c),
            (x[29] = f),
            (x[30] = I),
            (x[31] = g))
          : (g = x[31]),
        g
      )
    }
    function l2(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function l4(e) {
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
        f = (0, i.c)(26),
        { value: g, onChange: x } = e,
        b = (0, rX.A)()
      f[0] !== b
        ? ((t = b.formatMessage({
            id: "presentationEditor.alignment",
            defaultMessage: "Alignment",
            description: "Text alignment controls",
          })),
          (f[0] = b),
          (f[1] = t))
        : (t = f[1])
      let y = g ?? null
      return (
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(iC.I, { asset: lG.z })), (f[2] = n))
          : (n = f[2]),
        f[3] !== b
          ? ((l = b.formatMessage({
              id: "presentationEditor.alignLeft",
              defaultMessage: "Align left",
              description: "Left align text",
            })),
            (f[3] = b),
            (f[4] = l))
          : (l = f[4]),
        f[5] !== l ? ((a = { id: "left", label: n, ariaLabel: l }), (f[5] = l), (f[6] = a)) : (a = f[6]),
        f[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(iC.I, { asset: lU.v })), (f[7] = o))
          : (o = f[7]),
        f[8] !== b
          ? ((s = b.formatMessage({
              id: "presentationEditor.alignCenter",
              defaultMessage: "Align center",
              description: "Center align text",
            })),
            (f[8] = b),
            (f[9] = s))
          : (s = f[9]),
        f[10] !== s ? ((d = { id: "center", label: o, ariaLabel: s }), (f[10] = s), (f[11] = d)) : (d = f[11]),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, r.jsx)(iC.I, { asset: l_.E })), (f[12] = c))
          : (c = f[12]),
        f[13] !== b
          ? ((u = b.formatMessage({
              id: "presentationEditor.alignRight",
              defaultMessage: "Align right",
              description: "Right align text",
            })),
            (f[13] = b),
            (f[14] = u))
          : (u = f[14]),
        f[15] !== u ? ((p = { id: "right", label: c, ariaLabel: u }), (f[15] = u), (f[16] = p)) : (p = f[16]),
        f[17] !== p || f[18] !== a || f[19] !== d
          ? ((h = [a, d, p]), (f[17] = p), (f[18] = a), (f[19] = d), (f[20] = h))
          : (h = f[20]),
        f[21] !== x || f[22] !== t || f[23] !== h || f[24] !== y
          ? ((m = (0, r.jsx)(i2.T, {
              className: "flex-1",
              fullWidth: !0,
              variant: "field",
              focusRing: "surface",
              unselectedColor: "ghostActive",
              ariaLabel: t,
              selectedId: y,
              onSelect: x,
              options: h,
            })),
            (f[21] = x),
            (f[22] = t),
            (f[23] = h),
            (f[24] = y),
            (f[25] = m))
          : (m = f[25]),
        m
      )
    }
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
        b,
        y,
        v,
        w,
        C,
        S,
        k,
        I,
        j,
        E,
        M,
        A,
        T,
        P = (0, i.c)(76),
        { text: L, onChange: F, showLists: R } = e,
        N = void 0 === R || R,
        D = (0, rX.A)()
      ;(P[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)(rZ.A, {
            id: "presentationEditor.typography",
            defaultMessage: "Typography",
            description: "Presentation text formatting section",
          })),
          (P[0] = t))
        : (t = P[0]),
        P[1] !== F ? ((n = (e) => F({ textTypeface: e })), (P[1] = F), (P[2] = n)) : (n = P[2]),
        P[3] !== n || P[4] !== L.typeface
          ? ((l = (0, r.jsx)(l1, { value: L.typeface, onChange: n })), (P[3] = n), (P[4] = L.typeface), (P[5] = l))
          : (l = P[5]))
      let z = L.fontSize ?? null
      ;(P[6] !== F ? ((a = (e) => F({ textFontSize: e })), (P[6] = F), (P[7] = a)) : (a = P[7]),
        P[8] !== z || P[9] !== a
          ? ((o = (0, r.jsx)(lW.r, { variant: "field", scale: "presentation", value: z, onChange: a })),
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
      ;(P[14] !== D
        ? ((d = D.formatMessage({
            id: "presentationEditor.bold",
            defaultMessage: "Bold",
            description: "Bold text formatting",
          })),
          (P[14] = D),
          (P[15] = d))
        : (d = P[15]),
        P[16] !== F || P[17] !== L.bold
          ? ((c = () => F({ textBold: !L.bold })), (P[16] = F), (P[17] = L.bold), (P[18] = c))
          : (c = P[18]),
        P[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(iC.I, { asset: l$.e })), (P[19] = u))
          : (u = P[19]),
        P[20] !== d || P[21] !== c || P[22] !== B
          ? ((p = (0, r.jsx)(iX.c, {
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
      ;(P[24] !== D
        ? ((h = D.formatMessage({
            id: "presentationEditor.italic",
            defaultMessage: "Italic",
            description: "Italic text formatting",
          })),
          (P[24] = D),
          (P[25] = h))
        : (h = P[25]),
        P[26] !== F || P[27] !== L.italic
          ? ((m = () => F({ textItalic: !L.italic })), (P[26] = F), (P[27] = L.italic), (P[28] = m))
          : (m = P[28]),
        P[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(iC.I, { asset: lH.b })), (P[29] = f))
          : (f = P[29]),
        P[30] !== O || P[31] !== h || P[32] !== m
          ? ((g = (0, r.jsx)(iX.c, {
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
      ;(P[34] !== D
        ? ((x = D.formatMessage({
            id: "presentationEditor.strikethrough",
            defaultMessage: "Strikethrough",
            description: "Strikethrough text formatting",
          })),
          (P[34] = D),
          (P[35] = x))
        : (x = P[35]),
        P[36] !== F || P[37] !== L.strikethrough
          ? ((b = () => F({ textStrikethrough: !L.strikethrough })),
            (P[36] = F),
            (P[37] = L.strikethrough),
            (P[38] = b))
          : (b = P[38]),
        P[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)(iC.I, { asset: lK.s })), (P[39] = y))
          : (y = P[39]),
        P[40] !== V || P[41] !== x || P[42] !== b
          ? ((v = (0, r.jsx)(iX.c, {
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
      let $ = L.underline ?? "mixed"
      return (
        P[44] !== D
          ? ((w = D.formatMessage({
              id: "presentationEditor.underline",
              defaultMessage: "Underline",
              description: "Underline text formatting",
            })),
            (P[44] = D),
            (P[45] = w))
          : (w = P[45]),
        P[46] !== F || P[47] !== L.underline
          ? ((C = () => F({ textUnderline: !L.underline })), (P[46] = F), (P[47] = L.underline), (P[48] = C))
          : (C = P[48]),
        P[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, r.jsx)(iC.I, { asset: lq.U })), (P[49] = S))
          : (S = P[49]),
        P[50] !== $ || P[51] !== w || P[52] !== C
          ? ((k = (0, r.jsx)(iX.c, {
              className: "flex-1 justify-center",
              "aria-pressed": $,
              "aria-label": w,
              onClick: C,
              children: S,
            })),
            (P[50] = $),
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
        P[59] !== F ? ((j = (e) => F({ textAlignment: e })), (P[59] = F), (P[60] = j)) : (j = P[60]),
        P[61] !== j || P[62] !== L.alignment
          ? ((E = (0, r.jsx)(l4, { value: L.alignment, onChange: j })), (P[61] = j), (P[62] = L.alignment), (P[63] = E))
          : (E = P[63]),
        P[64] !== D || P[65] !== F || P[66] !== N || P[67] !== L.list
          ? ((M =
              N &&
              (0, r.jsx)(i2.T, {
                className: "flex-1",
                fullWidth: !0,
                variant: "field",
                focusRing: "surface",
                unselectedColor: "ghostActive",
                ariaLabel: D.formatMessage({
                  id: "presentationEditor.list",
                  defaultMessage: "List",
                  description: "Text list formatting controls",
                }),
                selectedId: L.list ?? null,
                onSelect: (e) => F({ textList: e }),
                options: [
                  {
                    id: "none",
                    label: (0, r.jsx)(iC.I, { asset: iQ.L }),
                    ariaLabel: D.formatMessage({
                      id: "presentationEditor.noList",
                      defaultMessage: "No list",
                      description: "Remove text list formatting",
                    }),
                  },
                  {
                    id: "bullets",
                    label: (0, r.jsx)(r1.gYX, {}),
                    ariaLabel: D.formatMessage({
                      id: "presentationEditor.bullets",
                      defaultMessage: "Bulleted list",
                      description: "Format text as a bulleted list",
                    }),
                  },
                  {
                    id: "numbered",
                    label: (0, r.jsx)(r1.phU, {}),
                    ariaLabel: D.formatMessage({
                      id: "presentationEditor.numbered",
                      defaultMessage: "Numbered list",
                      description: "Format text as a numbered list",
                    }),
                  },
                ],
              })),
            (P[64] = D),
            (P[65] = F),
            (P[66] = N),
            (P[67] = L.list),
            (P[68] = M))
          : (M = P[68]),
        P[69] !== E || P[70] !== M
          ? ((A = (0, r.jsxs)("div", { className: "flex gap-2", children: [E, M] })),
            (P[69] = E),
            (P[70] = M),
            (P[71] = A))
          : (A = P[71]),
        P[72] !== I || P[73] !== A || P[74] !== s
          ? ((T = (0, r.jsxs)(iD.l, { title: t, children: [s, I, A] })),
            (P[72] = I),
            (P[73] = A),
            (P[74] = s),
            (P[75] = T))
          : (T = P[75]),
        T
      )
    }
    function l5(e) {
      let t,
        n,
        l,
        a,
        o,
        s = (0, i.c)(33),
        { palette: c, source: u, section: p } = e,
        h = void 0 === p ? "all" : p,
        m = (0, rX.A)(),
        f = (0, d.useSyncExternalStore)(u.subscribe, u.getSnapshot, l8)
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
              (0, r.jsxs)(iD.l, {
                title: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.tableOptions",
                  defaultMessage: "Table options",
                  description: "Presentation table formatting options",
                }),
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between text-xs text-secondary",
                    children: [
                      (0, r.jsx)(rZ.A, {
                        id: "presentationEditor.headerRow",
                        defaultMessage: "Header row",
                        description: "Apply the table's header row style",
                      }),
                      (0, r.jsx)(lV.l, {
                        tone: "neutral",
                        size: "sm",
                        checked: f.headerRow,
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.headerRow",
                          defaultMessage: "Header row",
                          description: "Apply the table's header row style",
                        }),
                        onChange: (e) => u.edit({ type: "set-table-options", tableId: f.tableId, headerRow: e }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between text-xs text-secondary",
                    children: [
                      (0, r.jsx)(rZ.A, {
                        id: "presentationEditor.headerColumn",
                        defaultMessage: "Header column",
                        description: "Apply the table's first column style",
                      }),
                      (0, r.jsx)(lV.l, {
                        tone: "neutral",
                        size: "sm",
                        checked: f.headerColumn,
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.headerColumn",
                          defaultMessage: "Header column",
                          description: "Apply the table's first column style",
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
                  (0, r.jsx)(l3, {
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
                    (0, r.jsx)(iD.l, {
                      title: (0, r.jsx)(rZ.A, {
                        id: "presentationEditor.tableFill",
                        defaultMessage: "Fill",
                        description: "Selected table cells' background fill section",
                      }),
                      children: (0, r.jsxs)("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          (0, r.jsx)(iN.v, {
                            side: "left",
                            palette: c,
                            label: m.formatMessage({
                              id: "presentationEditor.fillColor",
                              defaultMessage: "Fill color",
                              description: "Select the object or slide fill color",
                            }),
                            color: f.style.fillColor ?? null,
                            onChange: (e) => g({ fillColor: e }),
                          }),
                          (0, r.jsx)(i9, {
                            label: m.formatMessage({
                              id: "presentationEditor.fillOpacity",
                              defaultMessage: "Fill opacity",
                              description: "Object fill opacity as a percentage",
                            }),
                            value: f.style.fillOpacityPct ?? null,
                            onChange: (e) => g({ fillOpacityPct: e }),
                          }),
                        ],
                      }),
                    }),
                  (0, r.jsx)(iD.l, {
                    title: (0, r.jsx)(rZ.A, {
                      id: "presentationEditor.textColor",
                      defaultMessage: "Text color",
                      description: "Select the text color",
                    }),
                    children: (0, r.jsxs)("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        (0, r.jsx)(iN.v, {
                          side: "all" === h ? "left" : "bottom",
                          palette: c,
                          label: m.formatMessage({
                            id: "presentationEditor.textColor",
                            defaultMessage: "Text color",
                            description: "Select the text color",
                          }),
                          color: f.style.color ?? null,
                          onChange: (e) => g({ color: e }),
                        }),
                        (0, r.jsx)(i9, {
                          label: m.formatMessage({
                            id: "presentationEditor.textOpacity",
                            defaultMessage: "Text opacity",
                            description: "Text opacity as a percentage",
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
              (0, r.jsxs)(iD.l, {
                title: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.border",
                  defaultMessage: "Border",
                  description: "Object border section",
                }),
                children: [
                  (0, r.jsx)(i2.T, {
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
                        label: (0, r.jsx)(iC.I, { asset: lN.x }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.allBorders",
                          defaultMessage: "All borders",
                          description: "Apply borders around every selected table cell",
                        }),
                      },
                      {
                        id: "inside",
                        label: (0, r.jsx)(iC.I, { asset: lz.E }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.innerBorders",
                          defaultMessage: "Inner borders",
                          description: "Apply borders between selected table cells",
                        }),
                      },
                      {
                        id: "columns",
                        label: (0, r.jsx)(iC.I, { asset: lD.x }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.columnBorders",
                          defaultMessage: "Column borders",
                          description: "Apply borders between selected table columns",
                        }),
                      },
                      {
                        id: "rows",
                        label: (0, r.jsx)(iC.I, { asset: lO.f }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.rowBorders",
                          defaultMessage: "Row borders",
                          description: "Apply borders between selected table rows",
                        }),
                      },
                      {
                        id: "none",
                        label: (0, r.jsx)(iC.I, { asset: lB.a }),
                        ariaLabel: m.formatMessage({
                          id: "presentationEditor.noBorders",
                          defaultMessage: "No borders",
                          description: "Remove all borders from selected table cells",
                        }),
                      },
                    ].map(l6),
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
                              children: (0, r.jsx)(rZ.A, {
                                id: "presentationEditor.borderColorLabel",
                                defaultMessage: "Color",
                                description: "Color field label in the border settings",
                              }),
                            }),
                            (0, r.jsx)(iN.v, {
                              side: "left",
                              palette: c,
                              label: m.formatMessage({
                                id: "presentationEditor.borderColor",
                                defaultMessage: "Border color",
                                description: "Select the object border color",
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
                        (0, r.jsx)(iV, {
                          side: "bottom",
                          label: m.formatMessage({
                            id: "presentationEditor.borderWeight",
                            defaultMessage: "Weight",
                            description: "Border line thickness",
                          }),
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
    function l6(e) {
      return { ...e, tooltipContent: e.ariaLabel }
    }
    function l8() {
      return null
    }
    function l9(e) {
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
        v = (0, i.c)(85),
        { controller: w, snapshot: C, panelControls: S, onRequestChanges: k } = e,
        I = (0, rX.A)(),
        j = (0, d.useId)(),
        E = C.inspector.selectedElements,
        M = E[0]
      v[0] !== E ? ((t = lM(E)), (v[0] = E), (v[1] = t)) : (t = v[1])
      let A = t,
        T = E.length > 0 && E.every(lA),
        P = E.every((e) => e.fill?.opacityPct === M?.fill?.opacityPct) ? (M?.fill?.opacityPct ?? 100) : null
      v[2] !== w
        ? ((n = (e) => {
            w.updateSelectedElementStyle(e)
          }),
          (v[2] = w),
          (v[3] = n))
        : (n = v[3])
      let L = n,
        F = M?.kind ?? "slide"
      return (
        T && (F = "text"),
        v[4] !== w
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
                (e.preventDefault(), e.stopPropagation(), "y" === t || e.shiftKey ? w.redo() : w.undo())
            }),
            (v[4] = w),
            (v[5] = l))
          : (l = v[5]),
        v[6] !== F || v[7] !== E.length || v[8] !== C.selectedSlideIdx
          ? ((a =
              E.length > 1
                ? (0, r.jsx)(rZ.A, {
                    id: "presentationEditor.itemCount",
                    defaultMessage: "{count} items",
                    values: { count: E.length },
                    description: "Title for a presentation selection containing multiple objects",
                  })
                : (0, r.jsx)(rZ.A, {
                    id: "presentationEditor.selectionTitle",
                    defaultMessage:
                      "{kind, select, slide {Slide {number}} text {Text} chart {Chart} table {Table} image {Image} other {Shape}}",
                    values: { kind: F, number: C.selectedSlideIdx + 1 },
                    description: "Title of the presentation editing panel for the selected object type or slide",
                  })),
            (v[6] = F),
            (v[7] = E.length),
            (v[8] = C.selectedSlideIdx),
            (v[9] = a))
          : (a = v[9]),
        v[10] !== I
          ? ((o = I.formatMessage({
              id: "presentationEditor.close",
              defaultMessage: "Close editing panel",
              description: "Close the presentation formatting inspector",
            })),
            (v[10] = I),
            (v[11] = o))
          : (o = v[11]),
        v[12] !== S
          ? ((s = () => S.closePanel("popcorn-presentation-inspector")), (v[12] = S), (v[13] = s))
          : (s = v[13]),
        v[14] !== a || v[15] !== o || v[16] !== s || v[17] !== j
          ? ((c = (0, r.jsx)(r6.xx, { titleId: j, title: a, closeLabel: o, onClose: s })),
            (v[14] = a),
            (v[15] = o),
            (v[16] = s),
            (v[17] = j),
            (v[18] = c))
          : (c = v[18]),
        v[19] !== w || v[20] !== M
          ? ((u =
              null != M &&
              (0, r.jsx)(lj, { onAlign: (e) => w.dispatch({ kind: "align-selected-elements", alignment: e }) })),
            (v[19] = w),
            (v[20] = M),
            (v[21] = u))
          : (u = v[21]),
        v[22] !== L ||
        v[23] !== w ||
        v[24] !== M ||
        v[25] !== P ||
        v[26] !== k ||
        v[27] !== E.length ||
        v[28] !== C.inspector.themeColors ||
        v[29] !== C.presentationVersion ||
        v[30] !== C.selectedSlideIdx ||
        v[31] !== C.slideIds
          ? ((p =
              1 === E.length &&
              M?.kind === "image" &&
              (0, r.jsxs)(iD.l, {
                title: (0, r.jsx)(rZ.A, {
                  id: "presentationEditor.fill",
                  defaultMessage: "Background",
                  description: "Object or slide fill section",
                }),
                children: [
                  (0, r.jsx)(
                    ld,
                    {
                      controller: w,
                      slideId: C.slideIds[C.selectedSlideIdx],
                      target: { kind: "image", elementId: M.id },
                      onRequestChanges: k,
                      presentationVersion: C.presentationVersion,
                    },
                    M.id,
                  ),
                  (0, r.jsx)(lu, { color: void 0, opacity: P, palette: C.inspector.themeColors, onChange: L }),
                ],
              })),
            (v[22] = L),
            (v[23] = w),
            (v[24] = M),
            (v[25] = P),
            (v[26] = k),
            (v[27] = E.length),
            (v[28] = C.inspector.themeColors),
            (v[29] = C.presentationVersion),
            (v[30] = C.selectedSlideIdx),
            (v[31] = C.slideIds),
            (v[32] = p))
          : (p = v[32]),
        v[33] !== w.chartEditing || v[34] !== M?.kind || v[35] !== E.length || v[36] !== C.inspector.themeColors
          ? ((h =
              1 === E.length &&
              M?.kind === "chart" &&
              (0, r.jsx)(lh, { palette: C.inspector.themeColors, source: w.chartEditing })),
            (v[33] = w.chartEditing),
            (v[34] = M?.kind),
            (v[35] = E.length),
            (v[36] = C.inspector.themeColors),
            (v[37] = h))
          : (h = v[37]),
        v[38] !== w.tableEditing || v[39] !== M?.kind || v[40] !== E.length || v[41] !== C.inspector.themeColors
          ? ((m =
              1 === E.length &&
              M?.kind === "table" &&
              (0, r.jsx)(l5, { palette: C.inspector.themeColors, source: w.tableEditing })),
            (v[38] = w.tableEditing),
            (v[39] = M?.kind),
            (v[40] = E.length),
            (v[41] = C.inspector.themeColors),
            (v[42] = m))
          : (m = v[42]),
        v[43] !== L ||
        v[44] !== w ||
        v[45] !== M?.fill ||
        v[46] !== M?.fillMode ||
        v[47] !== M?.id ||
        v[48] !== M?.kind ||
        v[49] !== k ||
        v[50] !== E.length ||
        v[51] !== C.inspector.slideFill ||
        v[52] !== C.inspector.slideFillMode ||
        v[53] !== C.inspector.themeColors ||
        v[54] !== C.presentationVersion ||
        v[55] !== C.selectedSlideIdx ||
        v[56] !== C.slideIds ||
        v[57] !== A
          ? ((f =
              (1 !== E.length || (M?.kind !== "chart" && M?.kind !== "table")) &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  null != A && (0, r.jsx)(l3, { text: A, onChange: L, showLists: 1 === E.length }),
                  M?.kind !== "image" &&
                    E.length < 2 &&
                    (0, r.jsx)(
                      lc,
                      {
                        controller: w,
                        slideId: C.slideIds[C.selectedSlideIdx],
                        target: { kind: "fill", elementId: M?.id ?? null },
                        presentationVersion: C.presentationVersion,
                        mode: M?.fillMode ?? C.inspector.slideFillMode,
                        onRequestChanges: k,
                        fill: M?.fill ?? C.inspector.slideFill,
                        palette: C.inspector.themeColors,
                      },
                      M?.id ?? C.slideIds[C.selectedSlideIdx],
                    ),
                ],
              })),
            (v[43] = L),
            (v[44] = w),
            (v[45] = M?.fill),
            (v[46] = M?.fillMode),
            (v[47] = M?.id),
            (v[48] = M?.kind),
            (v[49] = k),
            (v[50] = E.length),
            (v[51] = C.inspector.slideFill),
            (v[52] = C.inspector.slideFillMode),
            (v[53] = C.inspector.themeColors),
            (v[54] = C.presentationVersion),
            (v[55] = C.selectedSlideIdx),
            (v[56] = C.slideIds),
            (v[57] = A),
            (v[58] = f))
          : (f = v[58]),
        v[59] !== L ||
        v[60] !== M ||
        v[61] !== P ||
        v[62] !== I ||
        v[63] !== E ||
        v[64] !== C.inspector.themeColors ||
        v[65] !== A
          ? ((g =
              null != M &&
              E.every(aa) &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  null != A &&
                    (0, r.jsx)(iD.l, {
                      title: (0, r.jsx)(rZ.A, {
                        id: "presentationEditor.textColor",
                        defaultMessage: "Text color",
                        description: "Select the text color",
                      }),
                      children: (0, r.jsxs)("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          (0, r.jsx)(iN.v, {
                            side: "left",
                            palette: C.inspector.themeColors,
                            label: I.formatMessage({
                              id: "presentationEditor.textColor",
                              defaultMessage: "Text color",
                              description: "Select the text color",
                            }),
                            color: A.color ?? null,
                            onChange: (e) => L({ textColor: e }),
                          }),
                          (0, r.jsx)(i9, {
                            label: I.formatMessage({
                              id: "presentationEditor.textOpacity",
                              defaultMessage: "Text opacity",
                              description: "Text opacity as a percentage",
                            }),
                            value: A.opacityPct ?? null,
                            onChange: (e) => L({ textOpacityPct: e }),
                          }),
                        ],
                      }),
                    }),
                  E.length > 1 &&
                    (0, r.jsx)(iD.l, {
                      title: (0, r.jsx)(rZ.A, {
                        id: "presentationEditor.fill",
                        defaultMessage: "Background",
                        description: "Object or slide fill section",
                      }),
                      children: (0, r.jsx)(lu, {
                        color: E.every((e) => e.fill?.color === M.fill?.color) ? (M.fill?.color ?? null) : null,
                        opacity: P,
                        palette: C.inspector.themeColors,
                        onChange: L,
                      }),
                    }),
                ],
              })),
            (v[59] = L),
            (v[60] = M),
            (v[61] = P),
            (v[62] = I),
            (v[63] = E),
            (v[64] = C.inspector.themeColors),
            (v[65] = A),
            (v[66] = g))
          : (g = v[66]),
        v[67] !== L || v[68] !== M || v[69] !== E || v[70] !== C.inspector.themeColors
          ? ((x =
              null != M &&
              [
                {
                  enabled: E.some(al),
                  content:
                    E.every(ai) &&
                    (0, r.jsx)(
                      lb,
                      {
                        value: E.every((e) => e.cornerRadius === M.cornerRadius) ? M.cornerRadius : null,
                        onChange: (e) => L({ cornerRadius: e }),
                      },
                      "corners",
                    ),
                },
                {
                  enabled: E.some(ar),
                  content: (0, r.jsx)(iH, { palette: C.inspector.themeColors, selection: E, onChange: L }, "border"),
                },
                {
                  enabled: E.some(an),
                  content: (0, r.jsx)(
                    lP,
                    { selection: E, palette: C.inspector.themeColors, onChange: L },
                    E.map(at).join(","),
                  ),
                },
              ]
                .toSorted(ae)
                .map(l7)),
            (v[67] = L),
            (v[68] = M),
            (v[69] = E),
            (v[70] = C.inspector.themeColors),
            (v[71] = x))
          : (x = v[71]),
        v[72] !== h || v[73] !== m || v[74] !== f || v[75] !== g || v[76] !== x || v[77] !== u || v[78] !== p
          ? ((b = (0, r.jsxs)("div", {
              className: `${lp.A.sections} flex min-h-0 flex-col overflow-y-auto px-4 pt-4 pb-40`,
              children: [u, p, h, m, f, g, x],
            })),
            (v[72] = h),
            (v[73] = m),
            (v[74] = f),
            (v[75] = g),
            (v[76] = x),
            (v[77] = u),
            (v[78] = p),
            (v[79] = b))
          : (b = v[79]),
        v[80] !== b || v[81] !== l || v[82] !== c || v[83] !== j
          ? ((y = (0, r.jsxs)("div", {
              className: "flex min-h-0 flex-col select-none",
              "data-presentation-inspector": !0,
              role: "group",
              "aria-labelledby": j,
              onKeyDown: l,
              children: [c, b],
            })),
            (v[80] = b),
            (v[81] = l),
            (v[82] = c),
            (v[83] = j),
            (v[84] = y))
          : (y = v[84]),
        y
      )
    }
    function l7(e) {
      return e.content
    }
    function ae(e, t) {
      return Number(t.enabled) - Number(e.enabled)
    }
    function at(e) {
      return e.id
    }
    function an(e) {
      return null != e.shadow
    }
    function ar(e) {
      return null != e.line && e.line.width > 0
    }
    function ai(e) {
      return "table" !== e.kind && "chart" !== e.kind && null != e.cornerRadius
    }
    function al(e) {
      return 0 !== e.cornerRadius
    }
    function aa(e) {
      return "table" !== e.kind && "chart" !== e.kind
    }
    var ao = n("q1q2"),
      as = n("iaQJ"),
      ad = n("fDA4"),
      ac = n("Bhpt"),
      au = n("o7XU"),
      ap = n("qfMa"),
      ah = n("LIss"),
      am = n("IDNd"),
      af = n("ZzsR"),
      ag = n("WpXe"),
      ax = n("jqmc"),
      ab = n("T1PX"),
      ay = n("OWtl"),
      av = n("V8uZ"),
      aw = n("slBv"),
      aC = n("lK5R"),
      aS = n("SZCv"),
      ak = n.n(aS),
      aI = n("jguW")
    function aj(e) {
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
        v = (0, rX.A)(),
        { inspector: w } = x,
        C = w.selectedElement,
        S = w.selectedElements.length > 1,
        k =
          !S && C?.kind === "shape" && x.selectedSlideElementTargets.some((e) => e.id === C.id && null != e.connector)
            ? C.line
            : null,
        I = !b && C?.kind === "table" && !S
      f[0] !== I ? ((t = (e) => (I && null != e ? e.style : null)), (f[0] = I), (f[1] = t)) : (t = f[1])
      let j = (0, aI.useSyncExternalStoreWithSelector)(
        g.tableEditing.subscribe,
        g.tableEditing.getSnapshot,
        aM,
        t,
        ak(),
      )
      f[2] !== w.selectedElements || f[3] !== I || f[4] !== j
        ? ((n = I ? j : lM(w.selectedElements)), (f[2] = w.selectedElements), (f[3] = I), (f[4] = j), (f[5] = n))
        : (n = f[5])
      let E = n
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
              (0, r.jsx)(la, {
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
              (0, r.jsxs)(iz.AM, {
                children: [
                  (0, r.jsx)(iz.Wv, {
                    asChild: !0,
                    children: (0, r.jsx)(iJ.P, {
                      color: "ghostActive",
                      size: "formatToolbarIcon",
                      "aria-label": v.formatMessage({
                        id: "presentationEditor.alignObjects",
                        defaultMessage: "Align objects",
                        description: "Open selected object alignment controls",
                      }),
                      children: (0, r.jsx)(iC.I, { asset: lv }),
                    }),
                  }),
                  (0, r.jsx)(iz.hl, {
                    "data-popcorn-edit-toolbar-root": "true",
                    size: "content",
                    variant: "menu",
                    children: (0, r.jsx)("div", {
                      className: "w-66 p-2",
                      children: (0, r.jsx)(lj, {
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
        f[21] !== M || f[22] !== w.themeColors || f[23] !== v || f[24] !== I || f[25] !== b || f[26] !== E
          ? ((s =
              (b || I) &&
              null != E &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(l1, { compact: !0, value: E.typeface, onChange: (e) => M({ textTypeface: e }) }),
                  (0, r.jsx)(iN.v, {
                    palette: w.themeColors,
                    variant: "toolbar",
                    label: v.formatMessage({
                      id: "presentationEditor.textColor",
                      defaultMessage: "Text color",
                      description: "Select the text color",
                    }),
                    color: E.color ?? null,
                    onChange: (e) => M({ textColor: e }),
                  }),
                  !I &&
                    (0, r.jsx)(iJ.P, {
                      color: E.bold ? "accentSubtle" : "ghostActive",
                      size: "formatToolbarIcon",
                      "aria-pressed": E.bold ?? "mixed",
                      "aria-label": v.formatMessage({
                        id: "presentationEditor.bold",
                        defaultMessage: "Bold",
                        description: "Bold text formatting",
                      }),
                      onClick: () => M({ textBold: !E.bold }),
                      children: (0, r.jsx)(iC.I, { asset: l$.e }),
                    }),
                  (0, r.jsx)(lW.r, {
                    scale: "presentation",
                    value: E.fontSize ?? null,
                    onChange: (e) => M({ textFontSize: e }),
                  }),
                  (0, r.jsxs)(iz.AM, {
                    children: [
                      (0, r.jsx)(iz.Wv, {
                        asChild: !0,
                        children: (0, r.jsx)(iJ.P, {
                          color: "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-label": v.formatMessage({
                            id: "presentationEditor.textAlignment",
                            defaultMessage: "Text alignment",
                            description: "Open text alignment controls",
                          }),
                          children: (0, r.jsx)(r1.fHm, {}),
                        }),
                      }),
                      (0, r.jsx)(iz.hl, {
                        "data-popcorn-edit-toolbar-root": "true",
                        size: "content",
                        variant: "menu",
                        children: (0, r.jsx)("div", {
                          className: "w-40 p-2",
                          children: (0, r.jsx)(l4, { value: E.alignment, onChange: (e) => M({ textAlignment: e }) }),
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
            (f[26] = E),
            (f[27] = s))
          : (s = f[27]),
        f[28] !== g.chartEditing || f[29] !== C?.kind || f[30] !== w.themeColors || f[31] !== S
          ? ((d =
              !S &&
              C?.kind === "chart" &&
              (0, r.jsx)(lh, { palette: w.themeColors, source: g.chartEditing, compact: !0 })),
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
              (0, r.jsx)(iN.v, {
                palette: w.themeColors,
                variant: "toolbar",
                label: v.formatMessage({
                  id: "presentationEditor.borderColor",
                  defaultMessage: "Border color",
                  description: "Select the object border color",
                }),
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
                lc,
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
              (0, r.jsx)(iN.v, {
                palette: w.themeColors,
                variant: "toolbar",
                label: v.formatMessage({
                  id: "presentationEditor.backgroundColor",
                  defaultMessage: "Background color",
                  description: "Change the selected object or slide background color",
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
              (I || w.selectedElements.some(aE)) &&
              (I
                ? (0, r.jsxs)(iz.AM, {
                    children: [
                      (0, r.jsx)(iz.Wv, {
                        asChild: !0,
                        children: (0, r.jsx)(iJ.P, {
                          color: "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-label": v.formatMessage({
                            id: "presentationEditor.cellBorders",
                            defaultMessage: "Cell borders",
                            description: "Open border controls for selected table cells",
                          }),
                          children: (0, r.jsx)(iC.I, { asset: lN.x }),
                        }),
                      }),
                      (0, r.jsx)(iz.hl, {
                        "data-popcorn-edit-toolbar-root": "true",
                        size: "content",
                        variant: "menu",
                        children: (0, r.jsx)("div", {
                          className: "flex w-66 flex-col gap-3 p-2",
                          children: (0, r.jsx)(l5, {
                            palette: w.themeColors,
                            source: g.tableEditing,
                            section: "borders",
                          }),
                        }),
                      }),
                    ],
                  })
                : (0, r.jsx)(iH, {
                    collapsible: !1,
                    borderOnly: null != k,
                    palette: w.themeColors,
                    selection: w.selectedElements,
                    onChange: (e) => g.updateSelectedElementStyle(e),
                    trigger: (0, r.jsx)(iJ.P, {
                      color: "ghostActive",
                      size: "formatToolbarIcon",
                      "aria-label": v.formatMessage({
                        id: "presentationEditor.border",
                        defaultMessage: "Border",
                        description: "Object border section",
                      }),
                      children: (0, r.jsx)(iC.I, { asset: aC.a }),
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
    function aE(e) {
      return null != e.line
    }
    function aM() {
      return null
    }
    let aA = () => () => {}
    function aT(e) {
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
        j,
        M,
        A,
        T,
        P,
        L,
        F,
        R,
        N,
        D,
        z,
        B = (0, i.c)(122),
        {
          ref: O,
          controller: V,
          snapshot: $,
          selectionBounds: H,
          selectionBoundsSource: K,
          collisionBoundaryElement: q,
          panelControls: W,
          isEditing: U,
          canEditSelection: G,
          editToolbarRequested: _,
          dismissEditToolbar: X,
          focusStage: Z,
          shortcutScopeElement: J,
          selectionActions: Y,
        } = e,
        Q = (0, r_.gh)(ay.u),
        ee = (0, d.useContext)(am.G),
        et = (0, rX.A)(),
        en = (0, r_._U)(ag.Xv, "artifact"),
        er = (0, ab.I)(),
        [ei, el] = (0, d.useState)(),
        [ea, eo] = (0, d.useState)(null),
        [es, ed] = (0, d.useState)(null),
        [ec, eu] = (0, d.useState)(!1)
      B[0] !== K ? ((t = (e) => K?.subscribe(e) ?? aA()), (B[0] = K), (B[1] = t)) : (t = B[1])
      let ep = t
      B[2] !== H || B[3] !== K ? ((n = () => K?.getSnapshot() ?? H), (B[2] = H), (B[3] = K), (B[4] = n)) : (n = B[4])
      let eh = n,
        em = _ || null != ea,
        ef = (0, d.useSyncExternalStore)(em ? ep : aA, em ? eh : az, az),
        eg = ef ?? $.slideRect,
        ex = em && null != eg
      B[5] !== q || B[6] !== J
        ? ((l = function () {
            return {
              boundary: q ?? void 0,
              padding: {
                top:
                  ((J && parseFloat(getComputedStyle(J).getPropertyValue("--popcorn-presentation-header-inset"))) ||
                    0) + 8,
                bottom: 24,
                left: 8,
                right: 8,
              },
            }
          }),
          (B[5] = q),
          (B[6] = J),
          (B[7] = l))
        : (l = B[7])
      let eb = l
      ;(B[8] !== eg || B[9] !== q || B[10] !== J
        ? ((a =
            eg && J
              ? {
                  contextElement: q ?? J,
                  getBoundingClientRect: () => {
                    let e = (0, tv.j)(J, eg.left, eg.top),
                      t = (0, tv.j)(J, eg.left + eg.width, eg.top + eg.height)
                    return new DOMRect(e.x, e.y, t.x - e.x, t.y - e.y)
                  },
                }
              : null),
          (B[8] = eg),
          (B[9] = q),
          (B[10] = J),
          (B[11] = a))
        : (a = B[11]),
        B[12] !== a ? ((o = { reference: a }), (B[12] = a), (B[13] = o)) : (o = B[13]))
      let ey = U && $.inspector.selectedElement?.kind === "table" ? 36 : 12
      B[14] !== ey ? ((c = (0, ao.cY)(ey)), (B[14] = ey), (B[15] = c)) : (c = B[15])
      let ev = q ?? void 0
      ;(B[16] !== ev ? ((u = (0, ao.BN)({ boundary: ev, padding: 8 })), (B[16] = ev), (B[17] = u)) : (u = B[17]),
        B[18] !== q || B[19] !== eb || B[20] !== J
          ? ((p = (0, aw.r)(eb, [q, J])), (B[18] = q), (B[19] = eb), (B[20] = J), (B[21] = p))
          : (p = B[21]))
      let ew = q ?? void 0
      ;(B[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e) => {
            let { availableWidth: t } = e
            return el(Math.max(0, t))
          }),
          (B[22] = h))
        : (h = B[22]),
        B[23] !== ew
          ? ((m = (0, ao.Ej)({ boundary: ew, padding: 8, apply: h })), (B[23] = ew), (B[24] = m))
          : (m = B[24]),
        B[25] !== p || B[26] !== m || B[27] !== c || B[28] !== u
          ? ((f = [c, u, p, m]), (B[25] = p), (B[26] = m), (B[27] = c), (B[28] = u), (B[29] = f))
          : (f = B[29]),
        B[30] !== ex || B[31] !== f || B[32] !== o
          ? ((g = { open: ex, elements: o, placement: "top", middleware: f, whileElementsMounted: aw.g }),
            (B[30] = ex),
            (B[31] = f),
            (B[32] = o),
            (B[33] = g))
          : (g = B[33]))
      let { refs: eC, floatingStyles: eS } = (0, ao.we)(g),
        { setFloating: ek } = eC,
        eI = null != ei && ei < 320,
        ej = $.textEditState?.activeBlockId != null
      B[34] !== V
        ? ((x = async () => {
            let { slideIds: e, selectedSlideIdx: t } = V.getSnapshot(),
              n = e[t],
              r = await V.textClear()
                .then(() => V.requestShapeClipboard())
                .catch(aD)
            if (null != r)
              return () => {
                let e = V.getSnapshot()
                e.slideIds[e.selectedSlideIdx] === n && V.dispatch({ kind: "paste-shapes", serialized: r.serialized })
              }
          }),
          (B[34] = V),
          (B[35] = x))
        : (x = B[35])
      let eE = x,
        eM = G && !ej && null == $.activeInteractionKind && $.selectedElementIds.length > 0
      ;(B[36] !== eE
        ? ((b = (e) => {
            e.defaultPrevented ||
              e.isComposing ||
              (0, E.tr)(e.target) ||
              (e.preventDefault(), e.stopPropagation(), eE().then(aN))
          }),
          (B[36] = eE),
          (B[37] = b))
        : (b = B[37]),
        B[38] !== J || B[39] !== eM || B[40] !== b
          ? ((y = {
              commandId: "presentation.duplicateSelection",
              capture: !1,
              keyboardEventTarget: J,
              enabled: eM,
              onKeyDown: b,
            }),
            (B[38] = J),
            (B[39] = eM),
            (B[40] = b),
            (B[41] = y))
          : (y = B[41]),
        (0, af.$)(y),
        B[42] !== $.inspector.selectedElements
          ? ((v = $.inspector.selectedElements.map(aR).join(",")), (B[42] = $.inspector.selectedElements), (B[43] = v))
          : (v = B[43]))
      let eA = v
      B[44] !== $.inspector.selectedElements
        ? ((w = $.inspector.selectedElements.length > 0 && $.inspector.selectedElements.every(lA)),
          (B[44] = $.inspector.selectedElements),
          (B[45] = w))
        : (w = B[45])
      let eT = w
      B[46] !== eT || B[47] !== eA
        ? ((C = { key: eA, textOnly: eT }), (B[46] = eT), (B[47] = eA), (B[48] = C))
        : (C = B[48])
      let [eP, eF] = (0, d.useState)(C)
      eP.key !== eA && eF({ key: eA, textOnly: eT })
      let eR = ej || eP.textOnly,
        eN = $.inspector.selectedElement
      B[49] !== eR || B[50] !== eN || B[51] !== $.selectedElementIds || B[52] !== $.textLayoutBlocks
        ? ((S =
            eR || 1 !== $.selectedElementIds.length || eN?.kind !== "shape"
              ? void 0
              : $.textLayoutBlocks.find((e) => e.id === eN.id && e.layout.lines.some(aL))),
          (B[49] = eR),
          (B[50] = eN),
          (B[51] = $.selectedElementIds),
          (B[52] = $.textLayoutBlocks),
          (B[53] = S))
        : (S = B[53])
      let eD = S,
        ez = Y?.startAskChat != null && null != Y.submitAskChat,
        eB = Y?.creationRequest,
        eO = eB?.isSubmitting === !0,
        eV =
          ex &&
          null != ef &&
          null != eB &&
          eB.id !== es?.id &&
          1 === $.selectedElementIds.length &&
          $.selectedElementIds[0] === eB.elementId
            ? eB
            : null,
        e$ = null != eV ? "" : ea
      B[54] !== eI || B[55] !== W || B[56] !== Y
        ? ((k = (e) => {
            ;(eI && W.closePanel("popcorn-presentation-inspector"),
              Y?.startAskChat?.(e),
              eo(Y?.opensAnnotationEditor ? null : ""))
          }),
          (B[54] = eI),
          (B[55] = W),
          (B[56] = Y),
          (B[57] = k))
        : (k = B[57])
      let eH = k
      ;(B[58] !== W || B[59] !== eE || B[60] !== ez || B[61] !== eH
        ? ((I = () => ({
            prepareDuplicate: eE,
            requestEdits: ez ? () => eH("ask_codex_button") : void 0,
            showProperties: W.isPanelAvailable("popcorn-presentation-inspector")
              ? () => W.openPanel("popcorn-presentation-inspector")
              : void 0,
          })),
          (B[58] = W),
          (B[59] = eE),
          (B[60] = ez),
          (B[61] = eH),
          (B[62] = I))
        : (I = B[62]),
        (0, d.useImperativeHandle)(O, I))
      let eK = ex && null == e$ && ez
      ;(B[63] !== J || B[64] !== eH || B[65] !== eK
        ? ((j = { enabled: eK, shortcutScopeElement: J, onClick: eH }),
          (B[63] = J),
          (B[64] = eH),
          (B[65] = eK),
          (B[66] = j))
        : (j = B[66]),
        (0, eL.zk)(j),
        B[67] !== X || B[68] !== Z || B[69] !== eB
          ? ((M = () => {
              ;(eB?.onDismiss(), eo(null), X(), Z())
            }),
            (B[67] = X),
            (B[68] = Z),
            (B[69] = eB),
            (B[70] = M))
          : (M = B[70]))
      let eq = M
      B[71] !== eq || B[72] !== ea || B[73] !== eO || B[74] !== eB || B[75] !== Y
        ? ((A = async (e, t) => {
            if (ea?.trim() && !eO) {
              if (null != eB) {
                ;(await eB.onSubmit(ea)) && eq()
                return
              }
              ;((t ? Y?.defaultSubmitMode !== "saved" : Y?.defaultSubmitMode === "saved") && Y?.savedSubmitDisabled) ||
                (Y?.submitAskChat?.(ea, e, t), eq())
            }
          }),
          (B[71] = eq),
          (B[72] = ea),
          (B[73] = eO),
          (B[74] = eB),
          (B[75] = Y),
          (B[76] = A))
        : (A = B[76])
      let eW = A
      if (!ex || null != $.imageCrop) return null
      ;(B[77] !== ei || B[78] !== eS
        ? ((T = { ...eS, maxWidth: ei }), (B[77] = ei), (B[78] = eS), (B[79] = T))
        : (T = B[79]),
        B[80] !== eq
          ? ((P = (e) => {
              ;((!e.defaultPrevented && (e.metaKey || e.ctrlKey)) || e.stopPropagation(), "Escape" === e.key && eq())
            }),
            (B[80] = eq),
            (B[81] = P))
          : (P = B[81]))
      let eU = null == e$,
        eG = null == e$ ? "auto" : 300
      return (
        B[82] !== eG ? ((L = { width: eG }), (B[82] = eG), (B[83] = L)) : (L = B[83]),
        B[84] !== er ? ((F = er ? { duration: 0 } : av.X7), (B[84] = er), (B[85] = F)) : (F = B[85]),
        B[86] !== en ||
        B[87] !== ei ||
        B[88] !== eI ||
        B[89] !== V ||
        B[90] !== Z ||
        B[91] !== eV ||
        B[92] !== et ||
        B[93] !== U ||
        B[94] !== eO ||
        B[95] !== ee ||
        B[96] !== eR ||
        B[97] !== es?.placeholder ||
        B[98] !== W ||
        B[99] !== ec ||
        B[100] !== eB ||
        B[101] !== ez ||
        B[102] !== Q ||
        B[103] !== Y ||
        B[104] !== eD ||
        B[105] !== $ ||
        B[106] !== eH ||
        B[107] !== eW ||
        B[108] !== e$
          ? ((R =
              null != e$
                ? (0, r.jsxs)("form", {
                    "aria-busy": eO,
                    className: "flex h-8 w-full min-w-0 items-center gap-2 ps-2.5",
                    onSubmit: (e) => {
                      ;(e.preventDefault(), eW("button", !1))
                    },
                    children: [
                      (0, r.jsx)("input", {
                        className:
                          "h-full min-w-0 flex-1 border-0 bg-transparent text-base text-default outline-none placeholder:text-tertiary",
                        autoFocus: !0,
                        value: e$,
                        readOnly: eO,
                        onFocus: () => {
                          null != eV && (ed({ id: eV.id, placeholder: eV.placeholder }), eo(""))
                        },
                        "aria-label": et.formatMessage({
                          id: "presentationEditor.requestInput",
                          defaultMessage: "Describe your changes",
                          description: "Accessible label for presentation change instructions",
                        }),
                        placeholder:
                          eV?.placeholder ??
                          es?.placeholder ??
                          et.formatMessage({
                            id: "presentationEditor.requestPlaceholder",
                            defaultMessage: "Describe your changes…",
                            description: "Placeholder for instructions to edit the selected presentation content",
                          }),
                        onChange: (e) => eo(e.currentTarget.value),
                        onKeyDown: (e) => {
                          "Enter" !== e.key ||
                            e.nativeEvent.isComposing ||
                            (e.preventDefault(), eW("keyboard", e.metaKey || e.ctrlKey))
                        },
                      }),
                      (0, r.jsx)(iJ.P, {
                        size: "iconCircle",
                        color: "primary",
                        type: "submit",
                        disabled:
                          eO ||
                          !e$.trim() ||
                          (null != eB ? eB.disabled : Y?.defaultSubmitMode === "saved" && !0 === Y.savedSubmitDisabled),
                        "aria-label": et.formatMessage({
                          id: "presentationEditor.submitChanges",
                          defaultMessage: "Submit requested changes",
                          description: "Submit presentation change instructions",
                        }),
                        children: (0, r.jsx)(iC.I, { asset: as.e }),
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    role: "toolbar",
                    tabIndex: -1,
                    onKeyDown: aP,
                    className: "flex min-w-0 items-center gap-0.5",
                    "aria-label": et.formatMessage({
                      id: "presentationEditor.selectionTools",
                      defaultMessage: "Selection actions",
                      description: "Presentation selection floating toolbar",
                    }),
                    children: [
                      ez &&
                        (0, r.jsx)(iJ.P, {
                          ref: (e) => {
                            if ((e && !ec && (eu(!0), Y?.onAskForEditShown?.()), null != e && ee && null != ei && !eI))
                              return (0, ag.Ou)(Q, "artifact", e)
                          },
                          className: "min-w-0",
                          color: "ghostActive",
                          size: eI ? "formatToolbarIcon" : "formatToolbar",
                          "aria-label":
                            null == en
                              ? et.formatMessage({
                                  id: "presentationEditor.requestChanges",
                                  defaultMessage: "Request edits",
                                  description: "Open instructions for changing selected presentation content",
                                })
                              : et.formatMessage(en),
                          onClick: () => eH("ask_codex_button"),
                          children: (0, r.jsx)(ap.E, {
                            icon: (0, r.jsx)(iC.I, { asset: au.j, focusable: "false" }),
                            label: eI
                              ? null
                              : (0, r.jsx)(r.Fragment, {
                                  children:
                                    null == en
                                      ? (0, r.jsx)(rZ.A, {
                                          id: "presentationEditor.requestChanges",
                                          defaultMessage: "Request edits",
                                          description: "Open instructions for changing selected presentation content",
                                        })
                                      : (0, r.jsx)(rZ.A, { ...en }),
                                }),
                          }),
                        }),
                      ez && U && (0, r.jsx)("div", { className: "mx-0.5 h-5 w-px shrink-0 bg-border-subtle" }),
                      U &&
                        null != eD &&
                        (0, r.jsx)(iJ.P, {
                          color: "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-label": et.formatMessage({
                            id: "presentationEditor.selectShapeText",
                            defaultMessage: "Select text",
                            description: "Select the text inside the shape and show text formatting controls",
                          }),
                          onClick: () => {
                            ;(V.textActivateBlockEnd(eD.id), V.textHandleKeyDown({ key: "a", metaKey: !0 }), Z())
                          },
                          children: (0, r.jsx)(r1.cBm, {}),
                        }),
                      U &&
                        (0, r.jsx)("div", {
                          className: (0, s.A)(
                            "flex min-w-0 items-center gap-0.5 overflow-x-auto empty:hidden",
                            !eI && "shrink-0",
                          ),
                          children: (0, r.jsx)(aj, {
                            controller: V,
                            snapshot: $,
                            isText: eR,
                            onRequestChanges: ez
                              ? (e) => {
                                  ;(eH("ask_codex_button"), eo(e))
                                }
                              : void 0,
                          }),
                        }),
                      U &&
                        (0, r.jsx)(iJ.P, {
                          color: W.isPanelOpen("popcorn-presentation-inspector") ? "accentSubtle" : "ghostActive",
                          size: "formatToolbarIcon",
                          "aria-pressed": W.isPanelOpen("popcorn-presentation-inspector"),
                          "aria-label": et.formatMessage({
                            id: "presentationEditor.edit",
                            defaultMessage: "More formatting options",
                            description: "Toggle the presentation editing panel",
                          }),
                          onClick: () => W.togglePanel("popcorn-presentation-inspector"),
                          children: (0, r.jsx)(iC.I, { asset: ad.C }),
                        }),
                      Y?.startComment &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("div", { className: "mx-0.5 h-5 w-px shrink-0 bg-border-subtle" }),
                            (0, r.jsx)(iJ.P, {
                              color: "ghostActive",
                              size: "formatToolbarIcon",
                              "aria-label": et.formatMessage({
                                id: "presentationEditor.comment",
                                defaultMessage: "Add comment",
                                description: "Add a comment on the selected presentation content",
                              }),
                              onClick: Y.startComment,
                              children: (0, r.jsx)(iC.I, { asset: ac.g }),
                            }),
                          ],
                        }),
                    ],
                  })),
            (B[86] = en),
            (B[87] = ei),
            (B[88] = eI),
            (B[89] = V),
            (B[90] = Z),
            (B[91] = eV),
            (B[92] = et),
            (B[93] = U),
            (B[94] = eO),
            (B[95] = ee),
            (B[96] = eR),
            (B[97] = es?.placeholder),
            (B[98] = W),
            (B[99] = ec),
            (B[100] = eB),
            (B[101] = ez),
            (B[102] = Q),
            (B[103] = Y),
            (B[104] = eD),
            (B[105] = $),
            (B[106] = eH),
            (B[107] = eW),
            (B[108] = e$),
            (B[109] = R))
          : (R = B[109]),
        B[110] !== L || B[111] !== F || B[112] !== R
          ? ((N = (0, r.jsx)(ah.P.div, {
              className: "max-w-full min-w-0",
              initial: !1,
              animate: L,
              transition: F,
              children: R,
            })),
            (B[110] = L),
            (B[111] = F),
            (B[112] = R),
            (B[113] = N))
          : (N = B[113]),
        B[114] !== eU || B[115] !== N
          ? ((D = (0, r.jsx)(ax.iU, { variant: "formatting", preserveEditorFocus: eU, children: N })),
            (B[114] = eU),
            (B[115] = N),
            (B[116] = D))
          : (D = B[116]),
        B[117] !== ek || B[118] !== T || B[119] !== P || B[120] !== D
          ? ((z = (0, r.jsx)("div", {
              className: "pointer-events-none absolute inset-0 z-30",
              children: (0, r.jsx)("div", {
                ref: ek,
                className: "pointer-events-auto absolute",
                style: T,
                "data-presentation-toolbar": !0,
                "data-popcorn-edit-toolbar-root": "true",
                role: "group",
                onKeyDown: P,
                children: D,
              }),
            })),
            (B[117] = ek),
            (B[118] = T),
            (B[119] = P),
            (B[120] = D),
            (B[121] = z))
          : (z = B[121]),
        z
      )
    }
    function aP(e) {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key) || !(e.target instanceof HTMLButtonElement))
        return
      let t = [...e.currentTarget.querySelectorAll("button:not(:disabled)")],
        n = (t.indexOf(e.target) + ("ArrowLeft" === e.key ? -1 : 1) + t.length) % t.length
      ;("Home" === e.key && (n = 0), "End" === e.key && (n = t.length - 1), e.preventDefault(), t[n]?.focus())
    }
    function aL(e) {
      return e.segments.some(aF)
    }
    function aF(e) {
      return e.text.trim().length > 0
    }
    function aR(e) {
      return e.id
    }
    function aN(e) {
      return e?.()
    }
    function aD() {
      return null
    }
    function az() {
      return null
    }
    function aB(e) {
      let t,
        n,
        l,
        a,
        o = (0, i.c)(8)
      if (o[0] !== e) {
        let { trigger: r, ...i } = e
        ;((l = r),
          (t = il.t),
          (n = is({ ...i, deleteAccelerator: "Backspace" })),
          (o[0] = e),
          (o[1] = t),
          (o[2] = n),
          (o[3] = l))
      } else ((t = o[1]), (n = o[2]), (l = o[3]))
      return (
        o[4] !== t || o[5] !== n || o[6] !== l
          ? ((a = (0, r.jsx)(t, { items: n, children: l })), (o[4] = t), (o[5] = n), (o[6] = l), (o[7] = a))
          : (a = o[7]),
        a
      )
    }
    function aO(e) {
      let t,
        n,
        o,
        c,
        u,
        p,
        h,
        m,
        f,
        g,
        x,
        b = (0, i.c)(28)
      b[0] !== e
        ? (({
            accessoryPanelOpen: o,
            alignComposer: c,
            isQuickStartOpen: u,
            inspectorPanel: t,
            viewOnly: p,
            animateThumbnailHeight: h,
            ...n
          } = e),
          (b[0] = e),
          (b[1] = t),
          (b[2] = n),
          (b[3] = o),
          (b[4] = c),
          (b[5] = u),
          (b[6] = p),
          (b[7] = h))
        : ((t = b[1]), (n = b[2]), (o = b[3]), (c = b[4]), (u = b[5]), (p = b[6]), (h = b[7]))
      let y = void 0 !== o && o,
        v = void 0 === c || c,
        w = void 0 !== u && u,
        C = void 0 !== p && p,
        S = void 0 !== h && h,
        k = (0, r_.gh)(r3.GD),
        I = (0, d.useContext)(rJ.$w),
        j = (0, r_.Ul)(rY.kF),
        E = (0, d.useRef)(null)
      if (b[8] !== k) {
        let e = async () => ({
          duplicate: await E.current?.prepareDuplicate(),
          duplicateAccelerator: k.get(rQ.M5, "presentation.duplicateSelection") ?? void 0,
          requestEdits: E.current?.requestEdits,
          showProperties: E.current?.showProperties,
        })
        ;((m = (t) => (0, r.jsx)(id, { ...t, prepareActions: e })), (b[8] = k), (b[9] = m))
      } else m = b[9]
      let M = m,
        A = 312 * !!y,
        T = (0, rX.A)()
      b[10] !== T.locale ? ((f = (0, r4.b)(T.locale)), (b[10] = T.locale), (b[11] = f)) : (f = b[11])
      let P = "rtl" === f,
        L = (!C && n.reviewTools) || void 0
      return (
        b[12] !== A ||
        b[13] !== v ||
        b[14] !== S ||
        b[15] !== I ||
        b[16] !== t ||
        b[17] !== w ||
        b[18] !== j ||
        b[19] !== P ||
        b[20] !== n ||
        b[21] !== M ||
        b[22] !== k ||
        b[23] !== C
          ? ((g = (e) =>
              (0, r.jsx)(rU, {
                ...n,
                className: (0, s.A)(n.className, "panel-VsaVuV", w && "invisible"),
                deferCleanup: null == I ? void 0 : (e) => (0, rJ.UO)(I, e),
                gpuRendering: "webgpu",
                isEditing: n.isEditing && !C,
                annotationsEnabled: n.annotationsEnabled && !C,
                drawingAnnotationsEnabled: n.drawingAnnotationsEnabled && !C,
                commentThreadsEnabled: n.commentThreadsEnabled && !C,
                generation: (!C && n.generation) || void 0,
                viewportAlignmentRef: (e) => {
                  if (null != e && v && j) return (0, r5.N)(k, e)
                },
                artifactSearchEnabled: n.artifactSearchEnabled ?? !0,
                renderFindBar: n.renderFindBar ?? aW,
                fitLeftInsetPx: P ? Math.max(n.fitLeftInsetPx ?? 0, A) : n.fitLeftInsetPx,
                fitRightInsetPx: P ? n.fitRightInsetPx : Math.max(n.fitRightInsetPx ?? 0, A),
                layoutPanelFitInsetPx: 312,
                layoutPanelSide: P ? "left" : "right",
                headerSidebarIcon: n.headerSidebarIcon ?? (0, r.jsx)(r1.eq9, { className: "text-secondary" }),
                headerAnnotationIcon: n.headerAnnotationIcon ?? aq,
                renderThumbnailPanel: (e, t) =>
                  (0, r.jsx)(r8.z, { open: t, side: "left", animateHeight: S, children: e }),
                panelsInLayout: !0,
                renderCommentsSidebarHeader: aK,
                renderCommentsSidebarEmptyAction: aH,
                headerCommentsIcon:
                  n.headerCommentsIcon ?? (0, r.jsx)(r2.b5, { icon: { assets: { 16: l.R, 20: a.G } } }),
                reviewTools: e,
                slideContextMenu: aB,
                elementContextMenu: M,
                plugins: C
                  ? []
                  : [
                      ...[
                        {
                          id: "popcorn-presentation-inspector-plugin",
                          panels: [
                            {
                              id: "popcorn-presentation-inspector",
                              title: "Format",
                              widthPx: 296,
                              snapshotScope: "inspector",
                              render: (e) => (0, r.jsx)(l9, { ...e }),
                            },
                          ],
                          stageOverlays: [
                            { id: "presentation-image-crop", render: (e) => (0, r.jsx)(iL, { ...e }) },
                            {
                              id: "codex-presentation-toolbar",
                              supportsReadOnlySelection: !0,
                              supportsTextSelection: !0,
                              render: (e) =>
                                (0, r.jsx)(
                                  aT,
                                  { ref: E, ...e },
                                  [
                                    e.snapshot.selectedSlideIdx,
                                    e.snapshot.textEditState?.activeBlockId ?? "object",
                                    ...e.snapshot.selectedElementIds,
                                  ].join(":"),
                                ),
                            },
                          ],
                        },
                      ]
                        .filter((e) => !n.plugins?.some((t) => t.id === e.id))
                        .map((e) => ({ ...e, panels: e.panels?.map((e) => ({ ...e, ...t })) })),
                      ...(n.plugins ?? []),
                      {
                        id: "presentation-generation-progress",
                        stageOverlays: [
                          {
                            id: "presentation-generation-progress",
                            visibleWhenReadOnly: !0,
                            render: (e) => {
                              let { snapshot: t } = e,
                                i = n.generation?.progressKey
                              return null == i ? null : (0, r.jsx)(ig, { progressKey: i, snapshot: t })
                            },
                          },
                        ],
                      },
                    ],
                renderEditingControls: C ? void 0 : a$,
                renderHeader:
                  n.renderHeader ??
                  ((e) => (0, r.jsx)(ir.dl, { actions: n.headerTitleContent, controls: e, title: n.title ?? "" })),
                renderHeaderZoomControl: n.renderHeaderZoomControl ?? r6.HD,
                zoomToFitLabel:
                  n.zoomToFitLabel ??
                  (0, r.jsx)(rZ.A, {
                    id: "presentationPanel.zoomFit",
                    defaultMessage: "Fit",
                    description: "Zoom menu option that fits the slide or slide grid into the available space",
                  }),
                renderLayout: n.renderLayout ?? aV,
              })),
            (b[12] = A),
            (b[13] = v),
            (b[14] = S),
            (b[15] = I),
            (b[16] = t),
            (b[17] = w),
            (b[18] = j),
            (b[19] = P),
            (b[20] = n),
            (b[21] = M),
            (b[22] = k),
            (b[23] = C),
            (b[24] = g))
          : (g = b[24]),
        b[25] !== g || b[26] !== L
          ? ((x = (0, r.jsx)(it.a, { reviewTools: L, children: g })), (b[25] = g), (b[26] = L), (b[27] = x))
          : (x = b[27]),
        x
      )
    }
    function aV(e) {
      return (0, r.jsx)(r9.Z, { layout: e })
    }
    function a$(e) {
      return (0, r.jsx)(ij, { ...e })
    }
    function aH(e) {
      return (0, r.jsx)(r7.D, { buttonProps: e })
    }
    function aK(e) {
      return (0, r.jsx)(r7.w, { ...e })
    }
    function aq(e) {
      return (0, r.jsx)(r0.a, { active: e })
    }
    function aW(e) {
      return (0, r.jsx)(ie.P, { ...e })
    }
  },
  PpD0(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      l = n("LIss"),
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
            j = !b
          g[5] !== k || g[6] !== b
            ? ((c = !b && { display: "none", x: k }), (g[5] = k), (g[6] = b), (g[7] = c))
            : (c = g[7])
          let E = b ? "open" : "closed"
          return (
            g[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = { x: 0, display: "block" }), (g[8] = u))
              : (u = g[8]),
            g[9] === Symbol.for("react.memo_cache_sentinel") ? ((p = { display: "none" }), (g[9] = p)) : (p = g[9]),
            g[10] !== k
              ? ((h = { open: u, closed: { x: k, transitionEnd: p } }), (g[10] = k), (g[11] = h))
              : (h = g[11]),
            g[12] !== C ? ((m = C ? { duration: 0 } : s.bl), (g[12] = C), (g[13] = m)) : (m = g[13]),
            g[14] !== x || g[15] !== h || g[16] !== m || g[17] !== I || g[18] !== j || g[19] !== c || g[20] !== E
              ? ((f = (0, r.jsx)(l.P.div, {
                  ref: S,
                  className: "absolute inset-0",
                  "aria-hidden": I,
                  inert: j,
                  initial: c,
                  animate: E,
                  variants: h,
                  transition: m,
                  children: x,
                })),
                (g[14] = x),
                (g[15] = h),
                (g[16] = m),
                (g[17] = I),
                (g[18] = j),
                (g[19] = c),
                (g[20] = E),
                (g[21] = f))
              : (f = g[21]),
            f
          )
        },
      },
    )
  },
}
//# sourceMappingURL=915083.ecf935a7fb.js.map
