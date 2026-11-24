export const __rspack_esm_ids = [752759]
export const __webpack_modules__ = {
  pqg6(e, t) {
    t.A = {
      Material: "Material-oi9n4Q",
      material: "Material-oi9n4Q",
      CompactMaterial: "CompactMaterial-e5RwST",
      compactMaterial: "CompactMaterial-e5RwST",
      ActivityBacking: "ActivityBacking-pBBBtQ",
      activityBacking: "ActivityBacking-pBBBtQ",
      QuickChatMaterial: "QuickChatMaterial-fCbz16",
      quickChatMaterial: "QuickChatMaterial-fCbz16",
      QuickChatAttachmentRow: "QuickChatAttachmentRow-fv2o4U",
      quickChatAttachmentRow: "QuickChatAttachmentRow-fv2o4U",
      Control: "Control-XSnUJw",
      control: "Control-XSnUJw",
      ActivityText: "ActivityText-nxFm_p",
      activityText: "ActivityText-nxFm_p",
      "activity-shimmer": "activity-shimmer-K09nKA",
      activityShimmer: "activity-shimmer-K09nKA",
    }
  },
  TonS(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M9.33467 16.6663V4.93978L4.6374 9.63704L4.1667 9.16634L3.69599 8.69661L9.52998 2.86263L9.63447 2.77767C9.8925 2.60753 10.2433 2.63564 10.4704 2.86263L16.3034 8.69661L16.3884 8.80111C16.5588 9.05922 16.5306 9.40982 16.3034 9.63704C16.0762 9.86414 15.7255 9.89242 15.4675 9.722L15.363 9.63704L10.6647 4.9388V16.6663C10.6647 17.0336 10.367 17.3314 9.99971 17.3314C9.63259 17.3312 9.33467 17.0335 9.33467 16.6663ZM4.6374 9.63704C4.3777 9.89674 3.95569 9.89674 3.69599 9.63704C3.43657 9.37744 3.43668 8.95628 3.69599 8.69661L4.6374 9.63704Z",
            fill: "currentColor",
          }),
        })))
  },
  aJad(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z",
          }),
        })))
  },
  yGb1(e, t, a) {
    a.d(t, { E: () => l })
    var n = a("ABep"),
      r = a("on57")
    function l({ className: e, icon: t, label: a, labelProps: i, labelVisible: o = !0 }) {
      return (0, n.jsxs)("span", {
        className: (0, r.A)("popcorn-annotation-button-content", e),
        children: [
          null == t ? null : (0, n.jsx)("span", { className: "popcorn-annotation-button-icon", children: t }),
          null == a
            ? null
            : (0, n.jsx)("span", {
                ...i,
                className: (0, r.A)("popcorn-annotation-button-label", i?.className),
                "data-label-visible": o,
                children: (0, n.jsx)("span", {
                  className: "popcorn-annotation-button-label-overflow",
                  children: (0, n.jsx)("span", {
                    className: (0, r.A)(
                      "popcorn-annotation-button-label-text",
                      null != t && "popcorn-annotation-button-label-with-icon",
                    ),
                    children: a,
                  }),
                }),
              }),
        ],
      })
    }
  },
  nY6n(e, t, a) {
    var n = a("on57"),
      r = a("zd8w")
    a.d(
      t,
      {},
      {
        Z: function ({ as: e = "div", className: t, style: a, ...l }) {
          return (0, r.createElement)(e, {
            "data-popcorn-header-surface": "",
            ...l,
            className: (0, n.A)(
              "inline-flex h-8 shrink-0 items-center rounded-xl border-0 bg-surface-elevated-secondary/90 font-sans text-sm leading-5 text-default shadow-lg ring-[0.5px] ring-border backdrop-blur-sm select-none",
              "button" === e &&
                "cursor-interaction outline-hidden hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset active:bg-primary-ghost-active",
              t,
            ),
            style: a,
          })
        },
      },
    )
  },
  FIjf(e, t, a) {
    var n = a("ABep"),
      r = a("on57"),
      l = a("yGb1"),
      i = a("nY6n")
    function o() {
      return (0, n.jsx)("span", {
        "aria-hidden": "true",
        "data-popcorn-header-divider": "",
        className: "h-5 w-px shrink-0 bg-border",
      })
    }
    a.d(
      t,
      {},
      {
        Mw: o,
        b_: function ({
          children: e,
          className: t,
          disabled: a = !1,
          expanded: i,
          label: o,
          onClick: s,
          pressed: c,
          responsiveLabel: d = !1,
          showActiveBackground: u = !0,
          size: p = "compact",
          testId: g,
          tone: m = "default",
          variant: h = "default",
          ...f
        }) {
          let v = null != o
          return (0, n.jsx)("button", {
            type: "button",
            "data-popcorn-header-action": "",
            "data-has-label": v || void 0,
            "aria-label": o,
            "aria-expanded": i,
            "aria-pressed": c,
            "data-testid": g,
            disabled: a,
            onClick: s,
            className: (0, r.A)(
              "inline-flex cursor-interaction items-center overflow-hidden select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset disabled:cursor-default disabled:opacity-40",
              "compact" === p ? "h-6 min-w-6 rounded-md" : "h-7 min-w-7 rounded-full",
              v
                ? (0, r.A)(
                    "justify-start",
                    d ? "max-w-full" : "max-w-40",
                    "annotation" === h ? "px-3 has-[[data-viewer-header-collapsed]]:px-0" : d ? "px-3" : "px-0",
                  )
                : (0, r.A)("compact" === p ? "w-6" : "w-7", "justify-center"),
              v && d && "@max-3xl:aspect-square @max-3xl:justify-center @max-3xl:px-0",
              u && (i || c)
                ? (0, r.A)(
                    "bg-text-info/10 text-info enabled:hover:bg-text-info/15",
                    "annotation" === h && "dark:text-info-ghost",
                  )
                : (0, r.A)(
                    "muted" === m ? "text-tertiary" : "compact" === p ? "text-token-text-secondary" : "text-default",
                    "enabled:hover:bg-primary-ghost-hover enabled:active:bg-primary-ghost-active enabled:hover:text-default",
                  ),
              t,
            ),
            ...f,
            children:
              "annotation" === h
                ? (0, n.jsx)(l.E, {
                    className: "h-full w-full justify-center",
                    icon: e,
                    label: o,
                    labelProps: {
                      className: (0, r.A)("text-sm", d ? "@max-3xl:hidden" : "max-w-32"),
                      "data-viewer-header-collapsible": !0,
                      "data-popcorn-header-action-label": "",
                      "data-tooltip-visibility-target": !0,
                      "data-tooltip-enablement-target": !0,
                    },
                  })
                : (0, n.jsxs)("span", {
                    className: (0, r.A)(
                      "flex min-w-0 items-center",
                      v && "h-full",
                      v ? "justify-start" : "w-full justify-center",
                    ),
                    children: [
                      (0, n.jsx)("span", {
                        className: (0, r.A)(
                          "flex shrink-0 items-center",
                          v && (d ? "-translate-x-0.5 rtl:translate-x-0.5" : "aspect-square h-full justify-center"),
                          v &&
                            d &&
                            "@max-3xl:aspect-square @max-3xl:h-full @max-3xl:translate-x-0 @max-3xl:justify-center @max-3xl:rtl:translate-x-0",
                        ),
                        children: e,
                      }),
                      v
                        ? (0, n.jsx)("span", {
                            className: (0, r.A)(
                              "ms-1 min-w-0 text-sm",
                              !d && "me-2",
                              d ? "truncate" : "max-w-32 overflow-hidden whitespace-nowrap",
                              d && "@max-3xl:hidden",
                            ),
                            "data-viewer-header-collapsible": !0,
                            "data-popcorn-header-action-label": "",
                            "data-tooltip-visibility-target": !0,
                            "data-tooltip-enablement-target": !0,
                            children: o,
                          })
                        : null,
                    ],
                  }),
          })
        },
        hA: function ({ title: e, trailingContent: t }) {
          return (0, n.jsxs)(i.Z, {
            className: "max-w-full gap-2 px-2",
            children: [
              (0, n.jsx)("span", { className: "block max-w-52 min-w-0 truncate px-1 py-1", children: e }),
              null != t ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(o, {}), t] }) : null,
            ],
          })
        },
        nf: function ({ ariaLabel: e, children: t, trailingContent: a }) {
          return (0, n.jsx)(i.Z, {
            "aria-label": e,
            className: "max-w-full px-2",
            role: "toolbar",
            children: (0, n.jsxs)("div", {
              className: "flex items-center gap-2 [&_button_svg]:size-4",
              children: [t, null == a ? null : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(o, {}), a] })],
            }),
          })
        },
      },
    )
  },
  l43M(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("slpy"),
      i = a("s0hl"),
      o = a("qzqv"),
      s = a("ygsV"),
      c = a("nokW"),
      d = a("FIjf"),
      u = a("Wf1j"),
      p = a("Qgfj"),
      g = a("bVeK"),
      m = a("UxN3"),
      h = a("j9wQ")
    let f = (0, p.YK)({
      slide: { id: "presentationEditor.insert.slide", defaultMessage: "New slide" },
      text: { id: "presentationEditor.insert.text", defaultMessage: "Insert text" },
      image: { id: "presentationEditor.insert.image", defaultMessage: "Insert image" },
      tools: { id: "presentationEditor.insert.tools", defaultMessage: "Charts, tables, and more" },
    })
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            p,
            v,
            y,
            b,
            x,
            C,
            w = (0, r.c)(20)
          w[0] !== e
            ? (({ action: t, expanded: a, loading: p, pressed: v, ...y } = e),
              (w[0] = e),
              (w[1] = t),
              (w[2] = a),
              (w[3] = p),
              (w[4] = v),
              (w[5] = y))
            : ((t = w[1]), (a = w[2]), (p = w[3]), (v = w[4]), (y = w[5]))
          let I = (0, u.A)()
          w[6] !== t || w[7] !== I ? ((b = I.formatMessage(f[t])), (w[6] = t), (w[7] = I), (w[8] = b)) : (b = w[8])
          let j = b
          return (
            w[9] !== t || w[10] !== a || w[11] !== j || w[12] !== p || w[13] !== v || w[14] !== y
              ? ((x =
                  "slide" === t || "text" === t
                    ? (0, n.jsx)(d.b_, {
                        "aria-label": j,
                        "aria-haspopup": "slide" === t ? "dialog" : void 0,
                        expanded: a,
                        pressed: v,
                        size: "default",
                        ...y,
                        children:
                          "slide" === t
                            ? (0, n.jsx)(m.b5, { icon: { assets: { 16: s.P, 20: c.W } } })
                            : (0, n.jsx)(m.b5, { icon: { 16: g.K95, 20: g.T8H } }),
                      })
                    : (0, n.jsx)(h.K8, {
                        uniform: !0,
                        "aria-label": j,
                        loading: p,
                        ...y,
                        children:
                          !p &&
                          ("image" === t
                            ? (0, n.jsx)(m.b5, { icon: { 16: g.UJ6, 20: g.pYT } })
                            : (0, n.jsx)(m.b5, { icon: { assets: { 16: i.n, 20: o.s } } })),
                      })),
                (w[9] = t),
                (w[10] = a),
                (w[11] = j),
                (w[12] = p),
                (w[13] = v),
                (w[14] = y),
                (w[15] = x))
              : (x = w[15]),
            w[16] !== a || w[17] !== j || w[18] !== x
              ? ((C = (0, n.jsx)(l.m, { content: j, disabled: a, children: x })),
                (w[16] = a),
                (w[17] = j),
                (w[18] = x),
                (w[19] = C))
              : (C = w[19]),
            C
          )
        },
      },
    )
  },
  H4kD(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("slpy"),
      i = a("yCKV"),
      o = a("qXUS"),
      s = a("Wf1j"),
      c = a("bVeK"),
      d = a("UxN3"),
      u = a("qsTb")
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            p,
            g,
            m,
            h,
            f = (0, r.c)(20)
          f[0] !== e ? (({ kind: t, ...a } = e), (f[0] = e), (f[1] = t), (f[2] = a)) : ((t = f[1]), (a = f[2]))
          let v = (0, s.A)()
          switch (t) {
            case "chart": {
              let e, t
              ;(f[3] !== v
                ? ((e = v.formatMessage({ id: "spreadsheetEditor.insertChart", defaultMessage: "Insert chart" })),
                  (f[3] = v),
                  (f[4] = e))
                : (e = f[4]),
                (p = e),
                f[5] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, n.jsx)(d.b5, { icon: { 16: c.$n1, 20: c.sBI } })), (f[5] = t))
                  : (t = f[5]),
                (g = t))
              break
            }
            case "image": {
              let e, t
              ;(f[6] !== v
                ? ((e = v.formatMessage({ id: "spreadsheetEditor.insertImage", defaultMessage: "Insert image" })),
                  (f[6] = v),
                  (f[7] = e))
                : (e = f[7]),
                (p = e),
                f[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, n.jsx)(d.b5, { icon: { 16: c.UJ6, 20: c.pYT } })), (f[8] = t))
                  : (t = f[8]),
                (g = t))
              break
            }
            case "tools": {
              let e, t
              ;(f[9] !== v
                ? ((e = v.formatMessage({
                    id: "spreadsheetEditor.insertTools",
                    defaultMessage: "Shapes, Checkboxes, and more",
                  })),
                  (f[9] = v),
                  (f[10] = e))
                : (e = f[10]),
                (p = e),
                f[11] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, n.jsx)(d.b5, { icon: { assets: { 16: i.L, 20: o.O } } })), (f[11] = t))
                  : (t = f[11]),
                (g = t))
            }
          }
          let y = !0 === a["aria-expanded"] || "true" === a["aria-expanded"]
          return (
            f[12] !== g || f[13] !== p || f[14] !== a
              ? ((m = (0, n.jsx)(u.K8, { uniform: !0, "aria-label": p, ...a, children: g })),
                (f[12] = g),
                (f[13] = p),
                (f[14] = a),
                (f[15] = m))
              : (m = f[15]),
            f[16] !== p || f[17] !== y || f[18] !== m
              ? ((h = (0, n.jsx)(l.m, { content: p, disabled: y, children: m })),
                (f[16] = p),
                (f[17] = y),
                (f[18] = m),
                (f[19] = h))
              : (h = f[19]),
            h
          )
        },
      },
    )
  },
  TQS8(e, t, a) {
    a.d(t, { Y: () => p })
    var n = a("ABep"),
      r = a("Og6P")
    let l = (0, a("ESTr").a)({
      name: "brush-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.418457, y: 1.001953, width: 17.473633, height: 17.473389 },
        visualBounds: { x: 1.418457, y: 1.001953, width: 17.473633, height: 17.473389 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.418457, y: 1.001953, width: 17.473633, height: 17.473389 },
        center: { x: 10.155274, y: 9.738648 },
        insets: { top: 1.001953, right: 1.10791, bottom: 1.524658, left: 1.418457 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.155274, y: 9.738648 },
          foreground: { x: 10.155274, y: 9.738648 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.55799 1.44038C10.143 0.855808 11.0911 0.855815 11.6762 1.44038L13.0023 2.76655C13.1503 2.91455 13.2204 3.12383 13.1908 3.331L13.0209 4.5146L14.2055 4.34663L14.2836 4.33979C14.4643 4.33536 14.6405 4.40482 14.7699 4.53413L18.4535 8.21674C19.0384 8.80176 19.0382 9.75075 18.4535 10.3359L12.9056 15.8837C11.9951 16.7942 10.5184 16.7942 9.6078 15.8837L8.63612 14.9111L6.3451 17.5195C5.27228 18.7399 3.39165 18.8003 2.24256 17.6513C1.09349 16.5022 1.15398 14.6216 2.3744 13.5488L4.98182 11.2568L4.01014 10.2861C3.0996 9.37554 3.09963 7.89883 4.01014 6.98823L9.55799 1.44038ZM4.95057 7.92866C4.55946 8.31985 4.55942 8.9545 4.95057 9.34565L6.4242 10.8183C6.55391 10.9481 6.62432 11.1261 6.61854 11.3095C6.61262 11.4931 6.53085 11.6667 6.39295 11.788L3.25233 14.5478C2.60897 15.1136 2.57715 16.105 3.18299 16.7109C3.78884 17.3166 4.78036 17.2849 5.34608 16.6416L8.10584 13.5009L8.20545 13.4082C8.3138 13.3268 8.44578 13.2799 8.58338 13.2753C8.767 13.2695 8.94564 13.3398 9.07557 13.4697L10.5482 14.9433C10.9394 15.3344 11.574 15.3344 11.9652 14.9433L13.2113 13.6953L6.19666 6.68159L4.95057 7.92866ZM10.7357 2.38081C10.6701 2.31564 10.5641 2.31564 10.4984 2.38081L7.13807 5.74116L14.1517 12.7548L17.5121 9.39546C17.5778 9.32974 17.5777 9.22388 17.5121 9.15815L14.0648 5.70991L12.3314 5.95796C12.1243 5.98747 11.9149 5.91738 11.767 5.76948C11.6191 5.62149 11.5499 5.41215 11.5795 5.20503L11.8256 3.47065L10.7357 2.38081Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var i = a("M3ZP"),
      o = a("XTT8"),
      s = a("yCKV"),
      c = a("qXUS"),
      d = a("bVeK"),
      u = a("UxN3")
    let p = {
      add: (0, n.jsx)(u.b5, { icon: { assets: { 16: i.D, 20: o.w } } }),
      text: (0, n.jsx)(u.b5, { icon: { 16: d.K95, 20: d.T8H } }),
      image: (0, n.jsx)(u.b5, { icon: { 16: d.UJ6, 20: d.pYT } }),
      insert: (0, n.jsx)(u.b5, { icon: { assets: { 16: s.L, 20: c.O } } }),
      format: (0, n.jsx)(u.b5, { icon: { assets: { 16: r.C, 20: l } } }),
      schedules: (0, n.jsx)(u.b5, { icon: { 16: d.QC9, 20: d.JZN } }),
    }
  },
  Fpzh(e, t, a) {
    var n = a("DBCl")
    let r = {
      damping: n.IYj.damping,
      mass: n.IYj.mass,
      stiffness: n.IYj.stiffness,
      type: "spring",
      velocity: n.IYj.initialVelocity,
    }
    a.d(t, {}, { K: r })
  },
  hV6B(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      i = a("K4Cx"),
      o = a("DBCl"),
      s = a("Sm6l"),
      c = a("Fpzh"),
      d = a("hNFe"),
      u = a("pqg6")
    let p = i.P.create(g)
    function g(e) {
      let t,
        a,
        i,
        o,
        s,
        c,
        d,
        p = (0, r.c)(15)
      p[0] !== e
        ? (({ className: t, nativeSurfaceId: a, tone: o, variant: s, ...i } = e),
          (p[0] = e),
          (p[1] = t),
          (p[2] = a),
          (p[3] = i),
          (p[4] = o),
          (p[5] = s))
        : ((t = p[1]), (a = p[2]), (i = p[3]), (o = p[4]), (s = p[5]))
      let g = s ?? a,
        m = ("quick-chat" === s || "quick-chat-stash" === s) && u.A.QuickChatMaterial
      return (
        p[6] !== t || p[7] !== m
          ? ((c = (0, l.A)(u.A.Material, m, t)), (p[6] = t), (p[7] = m), (p[8] = c))
          : (c = p[8]),
        p[9] !== g || p[10] !== a || p[11] !== i || p[12] !== c || p[13] !== o
          ? ((d = (0, n.jsx)("div", {
              ...i,
              className: c,
              "data-avatar-overlay-compact-tone": o,
              "data-avatar-overlay-material": "css",
              "data-avatar-overlay-material-variant": g,
              "data-avatar-overlay-native-surface-id": a,
            })),
            (p[9] = g),
            (p[10] = a),
            (p[11] = i),
            (p[12] = c),
            (p[13] = o),
            (p[14] = d))
          : (d = p[14]),
        d
      )
    }
    a.d(
      t,
      {},
      {
        D0: function (e) {
          let t,
            a,
            l,
            i,
            s,
            c,
            d,
            p = (0, r.c)(12),
            { notificationCount: m } = e,
            h = o.TeN["1"],
            f = o.TeN["2"]
          p[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.dw8)({ height: o.YMX, left: 0, top: 0, width: o.pFD }, h)), (p[0] = t))
            : (t = p[0])
          let v = t
          p[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, o.dw8)({ height: o.YMX, left: 0, top: 0, width: o.pFD }, f)), (p[1] = a))
            : (a = p[1])
          let y = a
          return (
            p[2] !== m ? ((l = (0, o.pmn)(m)), (p[2] = m), (p[3] = l)) : (l = p[3]),
            p[4] !== l ? ((i = { height: l }), (p[4] = l), (p[5] = i)) : (i = p[5]),
            p[6] !== m
              ? ((s =
                  m > 2
                    ? (0, n.jsx)(g, {
                        className: u.A.ActivityBacking,
                        "data-avatar-overlay-stacked-behind-primary": !0,
                        nativeSurfaceId: "activity-tertiary",
                        style: y,
                        variant: "activity",
                      })
                    : null),
                (p[6] = m),
                (p[7] = s))
              : (s = p[7]),
            p[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, n.jsx)(g, {
                  className: u.A.ActivityBacking,
                  "data-avatar-overlay-stacked-behind-primary": !0,
                  nativeSurfaceId: "activity-secondary",
                  style: v,
                  variant: "activity",
                })),
                (p[8] = c))
              : (c = p[8]),
            p[9] !== i || p[10] !== s
              ? ((d = (0, n.jsxs)("div", {
                  "aria-hidden": "true",
                  className: "absolute top-0 right-0 left-0",
                  "data-avatar-overlay-measure": "notification-tray-row",
                  style: i,
                  children: [s, c],
                })),
                (p[9] = i),
                (p[10] = s),
                (p[11] = d))
              : (d = p[11]),
            d
          )
        },
        NS: function (e) {
          let t,
            a,
            i,
            o,
            c = (0, r.c)(8)
          return (
            c[0] !== e ? (({ className: t, ...a } = e), (c[0] = e), (c[1] = t), (c[2] = a)) : ((t = c[1]), (a = c[2])),
            c[3] !== t ? ((i = (0, l.A)(u.A.Control, t)), (c[3] = t), (c[4] = i)) : (i = c[4]),
            c[5] !== a || c[6] !== i
              ? ((o = (0, n.jsx)(s.$, { ...a, className: i, "data-avatar-overlay-material": "css" })),
                (c[5] = a),
                (c[6] = i),
                (c[7] = o))
              : (o = c[7]),
            o
          )
        },
        mD: function (e) {
          let t,
            a,
            o,
            s,
            u,
            g,
            m,
            h,
            f,
            v,
            y,
            b,
            x,
            C,
            w,
            I = (0, r.c)(65),
            {
              children: j,
              className: _,
              animatesCssEntry: A,
              cssHeight: S,
              cssWidth: k,
              foregroundTransition: P,
              hidesForegroundImmediately: T,
              hidesMaterialForHiddenStart: M,
              isStackedBehindPrimary: L,
              retainsForeground: E,
              nativeSurfaceId: N,
              publishesLayoutMeasurement: U,
              rendersMaterial: F,
              onContextMenu: D,
              onBlurCapture: O,
              onFocusCapture: V,
              onPointerEnter: z,
              onPointerLeave: $,
              onPointerMove: B,
              onMaterialUpdate: q,
              onUpdate: R,
              overflowContent: G,
              prefersReducedMotion: H,
              presentedHeight: W,
              contentX: K,
              swipeX: Z,
              contentY: Q,
              attachmentContent: X,
              prominence: Y,
            } = e,
            J = void 0 === A || A,
            ee = void 0 !== T && T,
            et = void 0 !== M && M,
            ea = void 0 !== L && L,
            en = void 0 === F || F,
            er = void 0 !== H && H,
            el = null != S || null != W,
            ei = ea && !(void 0 !== E && E) ? 0 : 1
          I[0] !== ei ? ((t = { opacity: ei }), (I[0] = ei), (I[1] = t)) : (t = I[1])
          let eo = el ? "h-full rounded-[inherit]" : "flow-root",
            es = ee && ea && "invisible"
          ;(I[2] !== eo || I[3] !== es ? ((a = (0, l.A)(eo, es)), (I[2] = eo), (I[3] = es), (I[4] = a)) : (a = I[4]),
            I[5] !== P ? ((o = P ?? { duration: 0.18, ease: "easeOut" }), (I[5] = P), (I[6] = o)) : (o = I[6]))
          let ec = el ? "relative h-full overflow-clip rounded-[inherit]" : void 0
          ;(I[7] !== K || I[8] !== Q ? ((s = { x: K, y: Q }), (I[7] = K), (I[8] = Q), (I[9] = s)) : (s = I[9]),
            I[10] !== j || I[11] !== s
              ? ((u = (0, n.jsx)(i.P.div, {
                  className: "flow-root",
                  "data-avatar-overlay-activity-content": !0,
                  style: s,
                  children: j,
                })),
                (I[10] = j),
                (I[11] = s),
                (I[12] = u))
              : (u = I[12]),
            I[13] !== X || I[14] !== ec || I[15] !== u
              ? ((g = (0, n.jsxs)("div", { className: ec, children: [X, u] })),
                (I[13] = X),
                (I[14] = ec),
                (I[15] = u),
                (I[16] = g))
              : (g = I[16]),
            I[17] !== G || I[18] !== t || I[19] !== a || I[20] !== o || I[21] !== g
              ? ((m = (0, n.jsxs)(i.P.div, {
                  animate: t,
                  className: a,
                  "data-avatar-overlay-foreground": !0,
                  initial: !1,
                  transition: o,
                  children: [g, G],
                })),
                (I[17] = G),
                (I[18] = t),
                (I[19] = a),
                (I[20] = o),
                (I[21] = g),
                (I[22] = m))
              : (m = I[22]))
          let ed = m,
            eu = null == S ? k : void 0
          ;(I[23] !== S || I[24] !== eu
            ? ((h = { opacity: 1, height: S, width: eu }), (I[23] = S), (I[24] = eu), (I[25] = h))
            : (h = I[25]),
            I[26] !== J ? ((f = !!J && { opacity: 0 }), (I[26] = J), (I[27] = f)) : (f = I[27]))
          let ep = void 0 === U || U ? "notification-tray-row" : void 0
          return (
            I[28] !== k || I[29] !== el || I[30] !== W
              ? ((v = el ? { height: W, width: k } : void 0), (I[28] = k), (I[29] = el), (I[30] = W), (I[31] = v))
              : (v = I[31]),
            I[32] !== er ? ((y = er ? { duration: 0 } : c.K), (I[32] = er), (I[33] = y)) : (y = I[33]),
            I[34] !== y
              ? ((b = { duration: 0.18, ease: "easeOut", height: y }), (I[34] = y), (I[35] = b))
              : (b = I[35]),
            I[36] !== q || I[37] !== R
              ? ((x = (e) => {
                  ;(q?.(e), R?.())
                }),
                (I[36] = q),
                (I[37] = R),
                (I[38] = x))
              : (x = I[38]),
            I[39] !== _ ||
            I[40] !== ed ||
            I[41] !== el ||
            I[42] !== ee ||
            I[43] !== et ||
            I[44] !== ea ||
            I[45] !== N ||
            I[46] !== R ||
            I[47] !== Y ||
            I[48] !== en ||
            I[49] !== Z
              ? ((C = en
                  ? (0, n.jsx)(p, {
                      style: { x: Z },
                      "data-avatar-overlay-hit-region": null == Z ? void 0 : "activity-pill",
                      onUpdate: null == Z ? void 0 : R,
                      className: (0, l.A)(_, el && "h-full", ee && et && ea && "invisible"),
                      "data-avatar-overlay-stacked-behind-primary": ea || void 0,
                      nativeSurfaceId: N ?? (0, d.F)(Y),
                      variant: "activity",
                      children: ed,
                    })
                  : (0, n.jsx)("div", { className: (0, l.A)(_, el && "h-full"), children: ed })),
                (I[39] = _),
                (I[40] = ed),
                (I[41] = el),
                (I[42] = ee),
                (I[43] = et),
                (I[44] = ea),
                (I[45] = N),
                (I[46] = R),
                (I[47] = Y),
                (I[48] = en),
                (I[49] = Z),
                (I[50] = C))
              : (C = I[50]),
            I[51] !== O ||
            I[52] !== D ||
            I[53] !== V ||
            I[54] !== z ||
            I[55] !== $ ||
            I[56] !== B ||
            I[57] !== h ||
            I[58] !== f ||
            I[59] !== ep ||
            I[60] !== v ||
            I[61] !== b ||
            I[62] !== x ||
            I[63] !== C
              ? ((w = (0, n.jsx)(i.P.div, {
                  animate: h,
                  initial: f,
                  className: "group relative z-10 w-full text-start no-drag",
                  "data-avatar-overlay-measure": ep,
                  role: "listitem",
                  style: v,
                  transition: b,
                  onContextMenu: D,
                  onBlurCapture: O,
                  onFocusCapture: V,
                  onPointerEnter: z,
                  onPointerLeave: $,
                  onPointerMove: B,
                  onUpdate: x,
                  children: C,
                })),
                (I[51] = O),
                (I[52] = D),
                (I[53] = V),
                (I[54] = z),
                (I[55] = $),
                (I[56] = B),
                (I[57] = h),
                (I[58] = f),
                (I[59] = ep),
                (I[60] = v),
                (I[61] = b),
                (I[62] = x),
                (I[63] = C),
                (I[64] = w))
              : (w = I[64]),
            w
          )
        },
        oS: function (e) {
          let t,
            a,
            i,
            o,
            s,
            c,
            d,
            p,
            g,
            m,
            h,
            f,
            v,
            y = (0, r.c)(27)
          y[0] !== e
            ? (({
                className: t,
                as: o,
                hasInlineSubtitle: s,
                hasWaitingRequest: c,
                isExpanded: d,
                isLoading: p,
                isOverflowContent: g,
                notificationKind: a,
                truncate: m,
                variant: h,
                ...i
              } = e),
              (y[0] = e),
              (y[1] = t),
              (y[2] = a),
              (y[3] = i),
              (y[4] = o),
              (y[5] = s),
              (y[6] = c),
              (y[7] = d),
              (y[8] = p),
              (y[9] = g),
              (y[10] = m),
              (y[11] = h))
            : ((t = y[1]),
              (a = y[2]),
              (i = y[3]),
              (o = y[4]),
              (s = y[5]),
              (c = y[6]),
              (d = y[7]),
              (p = y[8]),
              (g = y[9]),
              (m = y[10]),
              (h = y[11]))
          let b = void 0 === o ? "span" : o,
            x = void 0 !== s && s,
            C = void 0 !== c && c,
            w = void 0 !== d && d,
            I = void 0 !== p && p,
            j = void 0 !== g && g,
            _ = void 0 !== m && m,
            A = void 0 === h ? "subtitle" : h,
            S = I && "loading-shimmer-pure-text"
          y[12] !== t || y[13] !== S
            ? ((f = (0, l.A)(u.A.ActivityText, S, t)), (y[12] = t), (y[13] = S), (y[14] = f))
            : (f = y[14])
          let k = (C && w) || void 0,
            P = x || void 0,
            T = I || void 0,
            M = j ? "true" : void 0,
            L = _ && I ? "truncate" : void 0,
            E = C || void 0
          return (
            y[15] !== b ||
            y[16] !== a ||
            y[17] !== i ||
            y[18] !== f ||
            y[19] !== k ||
            y[20] !== P ||
            y[21] !== T ||
            y[22] !== M ||
            y[23] !== L ||
            y[24] !== E ||
            y[25] !== A
              ? ((v = (0, n.jsx)(b, {
                  ...i,
                  className: f,
                  "data-avatar-overlay-activity-text": A,
                  "data-avatar-overlay-expanded-waiting-request": k,
                  "data-avatar-overlay-inline-subtitle": P,
                  "data-avatar-overlay-loading": T,
                  "data-avatar-overlay-notification-kind": a,
                  "data-avatar-overlay-overflow-content": M,
                  "data-avatar-overlay-shimmer-overflow": L,
                  "data-avatar-overlay-waiting-request": E,
                })),
                (y[15] = b),
                (y[16] = a),
                (y[17] = i),
                (y[18] = f),
                (y[19] = k),
                (y[20] = P),
                (y[21] = T),
                (y[22] = M),
                (y[23] = L),
                (y[24] = E),
                (y[25] = A),
                (y[26] = v))
              : (v = y[26]),
            v
          )
        },
        sR: function (e) {
          let t,
            a,
            i,
            o,
            s,
            c,
            d,
            p,
            m = (0, r.c)(16)
          m[0] !== e
            ? (({ children: t, className: a, nativeSurfaceId: i, size: s, tone: c, ...o } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = a),
              (m[3] = i),
              (m[4] = o),
              (m[5] = s),
              (m[6] = c))
            : ((t = m[1]), (a = m[2]), (i = m[3]), (o = m[4]), (s = m[5]), (c = m[6]))
          let h = void 0 === c ? "neutral" : c
          m[7] !== a ? ((d = (0, l.A)(u.A.CompactMaterial, a)), (m[7] = a), (m[8] = d)) : (d = m[8])
          let f = "small" === s ? "compact-small" : "compact-micro"
          return (
            m[9] !== t || m[10] !== i || m[11] !== o || m[12] !== d || m[13] !== f || m[14] !== h
              ? ((p = (0, n.jsx)(g, { ...o, className: d, nativeSurfaceId: i, tone: h, variant: f, children: t })),
                (m[9] = t),
                (m[10] = i),
                (m[11] = o),
                (m[12] = d),
                (m[13] = f),
                (m[14] = h),
                (m[15] = p))
              : (p = m[15]),
            p
          )
        },
        yl: g,
      },
    )
  },
  hNFe(e, t, a) {
    a.d(
      t,
      {},
      {
        F: function (e) {
          return "primary" === e ? "activity-primary" : "activity-secondary"
        },
        W: ["activity-primary", "activity-secondary", "activity-tertiary"],
      },
    )
  },
  SgPg(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("JIuM"),
      i = a("LhhH"),
      o = a("ISnp")
    a.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            a = (0, r.c)(10),
            {
              avatarUrl: s,
              colorKey: c,
              fadeIn: d,
              initialsAppearance: u,
              loading: p,
              loadingFallback: g,
              muted: m,
              name: h,
              size: f,
            } = e,
            v = void 0 === f ? "md" : f,
            { isProfileVisible: y } = (0, o.D)(),
            { src: b, isError: x } = (0, l._w)(y ? s : null),
            C = y && (p || (null != s && null == b && !x)) ? g : void 0
          return (
            a[0] !== c ||
            a[1] !== d ||
            a[2] !== u ||
            a[3] !== g ||
            a[4] !== m ||
            a[5] !== h ||
            a[6] !== v ||
            a[7] !== b ||
            a[8] !== C
              ? ((t = (0, n.jsx)(i.e, {
                  alt: "",
                  colorKey: c,
                  fadeIn: d,
                  initialsAppearance: u,
                  fallback: C,
                  loadingFallback: g,
                  muted: m,
                  name: h,
                  size: v,
                  src: b,
                })),
                (a[0] = c),
                (a[1] = d),
                (a[2] = u),
                (a[3] = g),
                (a[4] = m),
                (a[5] = h),
                (a[6] = v),
                (a[7] = b),
                (a[8] = C),
                (a[9] = t))
              : (t = a[9]),
            t
          )
        },
      },
    )
  },
  mYNH(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("l2oX"),
      i = a("qmMi"),
      o = a("zd8w"),
      s = a("Wf1j"),
      c = a("Q2Qp"),
      d = a("QcW8"),
      u = a("ZU27"),
      p = a("wD9O"),
      g = a("nKJ6"),
      m = a("rPIX"),
      h = a("vi3X"),
      f = a("O9Pc"),
      v = a("fDIZ"),
      y = a("jEN2"),
      b = a("AKr5"),
      x = a("wqvF"),
      C = a("giDA"),
      w = a("fQ9c"),
      I = a("ttIa"),
      j = a("xD3Z"),
      _ = a("Z2JT"),
      A = a("Sgih"),
      S = a("zeCl"),
      k = a("tSEg"),
      P = a("hZax"),
      T = a("SHid"),
      M = a("El6m"),
      L = a("dN0a"),
      E = a("WwnD"),
      N = a("giVD"),
      U = a("Vhua"),
      F = a("Azn0"),
      D = a("abd8"),
      O = a("GMTh")
    let V = (0, i.un)(k.GD, ({ get: e }) => {
      let t = e(u.It.activeTab$)
      if (t?.tabType.kind !== S.E) return !1
      let a = S.T.safeParse(t.props)
      if (!a.success) return !1
      let n = e(m.Px),
        r = n?.kind === "codex" ? n : n?.page
      return (
        r?.accountId === a.data.accountId &&
        r?.pageId === a.data.pageId &&
        (n?.kind === "codex" ? null == n.documentType : n?.turnAttribution?.origin_page_document_type === "page")
      )
    })
    function z(e) {
      return (0, n.jsx)(j.t, { ...e })
    }
    function $(e) {
      let t,
        a,
        l,
        s,
        c,
        d,
        u,
        p,
        g,
        m,
        f,
        y,
        b,
        x,
        w,
        I = (0, r.c)(49),
        {
          children: j,
          composerRef: _,
          mainContentElement: A,
          presentation: S,
          paneContext: P,
          layout: T,
          reserveContent: E,
          reserveFullComposerHeight: N,
        } = e,
        U = (0, i.gh)(k.GD),
        F = (0, o.useContext)(M.zN),
        D = (0, o.useContext)(v.H),
        O = (0, o.useContext)(h.V),
        V = (0, o.useContext)(C.J),
        { activeBrowserTabId: z } = F,
        $ = null != P,
        { isCompact: B, isDockedTop: q, isHidden: R, isMinimized: G } = S,
        { isMoving: H, composerContentHeight: W, dockedReservePx: K } = T,
        Z = !E || R || G ? 0 : Math.max(118, B ? K : 0, N ? W + 118 - 102 : 0),
        Q = q && B && K > 0 ? Z : 0,
        [X, Y] = (0, o.useState)(!G)
      ;(B || G) && !G !== X && Y(!G)
      let J = E && !R && X ? L.w3 : 0
      ;(I[0] !== z || I[1] !== _ || I[2] !== $
        ? ((t = () => {
            if ($ || null == z) return
            let e = _.current?.ownerDocument.activeElement
            e instanceof HTMLElement && _.current?.contains(e) && e.blur()
          }),
          (a = [z, _, $]),
          (I[0] = z),
          (I[1] = _),
          (I[2] = $),
          (I[3] = t),
          (I[4] = a))
        : ((t = I[3]), (a = I[4])),
        (0, o.useLayoutEffect)(t, a),
        I[5] !== _ ||
        I[6] !== J ||
        I[7] !== q ||
        I[8] !== R ||
        I[9] !== G ||
        I[10] !== $ ||
        I[11] !== A ||
        I[12] !== Z ||
        I[13] !== U ||
        I[14] !== Q
          ? ((l = () => {
              if ($ || null == A) return
              ;(U.set(L.uZ, {
                owner: _,
                style: {
                  [L.hs]: q ? `${J}px 0 0` : `0 0 ${J}px`,
                  [L.E1]: `${R || G || q ? 0 : 102}px`,
                  [L.rz]: `${q ? 0 : Z}px`,
                  [L.N6]: `${q ? Z : 0}px`,
                },
              }),
                (0, L.hg)(U, q ? 0 : Z),
                U.set(L.eq, Q))
              let e = q ? "top" : "bottom"
              U.set(L.Ph, 0 === J ? null : e)
            }),
            (s = [_, J, $, q, R, G, A, Z, U, Q]),
            (I[5] = _),
            (I[6] = J),
            (I[7] = q),
            (I[8] = R),
            (I[9] = G),
            (I[10] = $),
            (I[11] = A),
            (I[12] = Z),
            (I[13] = U),
            (I[14] = Q),
            (I[15] = l),
            (I[16] = s))
          : ((l = I[15]), (s = I[16])),
        (0, o.useLayoutEffect)(l, s),
        I[17] !== _ || I[18] !== $ || I[19] !== A || I[20] !== U
          ? ((c = () => {
              if (!$ && null != A)
                return () => {
                  let e = U.get(L.uZ)
                  e?.owner === _ &&
                    (U.set(L.uZ, { ...e, owner: null }), (0, L.hg)(U, 0), U.set(L.eq, 0), U.set(L.Ph, null))
                }
            }),
            (d = [_, $, A, U]),
            (I[17] = _),
            (I[18] = $),
            (I[19] = A),
            (I[20] = U),
            (I[21] = c),
            (I[22] = d))
          : ((c = I[21]), (d = I[22])),
        (0, o.useLayoutEffect)(c, d))
      let ee = !B || G || H || W > 102
      ;(I[23] !== _ || I[24] !== ee || I[25] !== $ || I[26] !== U
        ? ((u = () => {
            let e = _.current
            if ($ || null == e) return
            let t = () => {
              let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]')
              U.set(L.kT, ee || t)
            }
            t()
            let a = ee ? null : new MutationObserver(t)
            return (
              a?.observe(e, { attributes: !0, attributeFilter: ["aria-expanded"], childList: !0, subtree: !0 }),
              () => {
                a?.disconnect()
              }
            )
          }),
          (p = [_, ee, $, U]),
          (I[23] = _),
          (I[24] = ee),
          (I[25] = $),
          (I[26] = U),
          (I[27] = u),
          (I[28] = p))
        : ((u = I[27]), (p = I[28])),
        (0, o.useLayoutEffect)(u, p),
        I[29] !== $ || I[30] !== U
          ? ((m = () => () => {
              $ || U.set(L.kT, !1)
            }),
            (g = [$, U]),
            (I[29] = $),
            (I[30] = U),
            (I[31] = g),
            (I[32] = m))
          : ((g = I[31]), (m = I[32])),
        (0, o.useLayoutEffect)(m, g))
      let et = null == P ? F : P.transition,
        ea = null == P ? D : P.escapeHandler,
        en = null == P ? O : P.bannerTarget,
        er = null == P ? V : P.overlayOwner,
        el = $ ? "contents" : void 0
      return (
        I[33] !== j || I[34] !== _ || I[35] !== el
          ? ((f = (0, n.jsx)("div", {
              ref: _,
              className: el,
              "data-right-panel-composer-overlay-content": "true",
              children: j,
            })),
            (I[33] = j),
            (I[34] = _),
            (I[35] = el),
            (I[36] = f))
          : (f = I[36]),
        I[37] !== er || I[38] !== f
          ? ((y = (0, n.jsx)(C.J, { value: er, children: f })), (I[37] = er), (I[38] = f), (I[39] = y))
          : (y = I[39]),
        I[40] !== en || I[41] !== y
          ? ((b = (0, n.jsx)(h.V, { value: en, children: y })), (I[40] = en), (I[41] = y), (I[42] = b))
          : (b = I[42]),
        I[43] !== ea || I[44] !== b
          ? ((x = (0, n.jsx)(v.H, { value: ea, children: b })), (I[43] = ea), (I[44] = b), (I[45] = x))
          : (x = I[45]),
        I[46] !== et || I[47] !== x
          ? ((w = (0, n.jsx)(M.zN, { value: et, children: x })), (I[46] = et), (I[47] = x), (I[48] = w))
          : (w = I[48]),
        w
      )
    }
    a.d(
      t,
      {},
      {
        L: function (e) {
          let t,
            a,
            m,
            j,
            S,
            B,
            q = (0, r.c)(62),
            {
              children: R,
              composerOnly: G,
              forceExpanded: H,
              placement: W,
              showHeader: K,
              showConversationTitleMenu: Z,
              showComposerDivider: Q,
              isHidden: X,
              persistPresentation: Y,
              reserveContent: J,
              reserveFullComposerHeight: ee,
              onPresentationChange: et,
              title: ea,
              minimizedIcon: en,
              titleContent: er,
              statusState: el,
              titleStatusState: ei,
              hasElicitation: eo,
              notifications: es,
              workingPreview: ec,
              compactWorkingPreview: ed,
              responsePreview: eu,
              persistResponsePreview: ep,
              renderTranscript: eg,
              hasConversation: em,
              hasTranscript: eh,
              pendingFormId: ef,
              emptyState: ev,
            } = e,
            ey = void 0 !== G && G,
            eb = void 0 !== H && H,
            ex = void 0 === K || K,
            eC = void 0 === Q ? !ey : Q,
            ew = void 0 === Y || Y,
            eI = void 0 === ef ? A.sF : ef,
            ej = (0, i.gh)(k.GD),
            e_ = "pane" === (void 0 === W ? "floating" : W),
            eA = (0, P.Zj)("2163293173"),
            eS = eA ? ev : void 0,
            ek = !ey || (eA && (null != eS || (eh ?? null != eg))),
            eP = (0, i.Ul)(!!ek && F.e),
            eT = (0, s.A)(),
            { isHidden: eM } = (0, O.b)(e_ ? "embedded" : "content"),
            eL = (void 0 !== X && X) || eM,
            eE = (0, i.Ul)(!(void 0 !== Z && Z) || e_ || eL ? null : N.CT),
            eN = (0, o.useContext)(c.H),
            eU = (0, o.useContext)(M.zN),
            eF = (0, o.useContext)(M.CW),
            eD = (0, o.useContext)(f.k),
            eO = (0, o.useContext)(v.H),
            eV = (0, o.useContext)(h.V),
            ez = (0, o.useContext)(C.J),
            e$ = (0, p.dz)()
          q[0] !== e$
            ? ((t = (e) => {
                let { x: t, y: a } = e
                return { x: t / e$, y: a / e$ }
              }),
              (q[0] = e$),
              (q[1] = t))
            : (t = q[1])
          let eB = t,
            [eq, eR] = (0, o.useState)(null),
            eG = !(0, i.Ul)(L.zu),
            eH = (0, o.useRef)(null),
            eW = (0, i.Ul)(eI),
            eK = (0, i.Ul)(ew ? _.H_ : void 0)
          ek || ex || (eK = "compact")
          let eZ = (0, i.Ul)(null == eW && (eo ?? M.k5)),
            eQ = (0, i.Ul)(u.It.activeTab$),
            eX = (0, i.Ul)(e_ || eL ? null : V),
            eY = (0, i.Ul)(d.D5),
            eJ = (0, i.Ul)(!!eY && U.aY)
          q[2] !== eQ || q[3] !== e_
            ? ((a = e_ ? null : (0, g.getThreadBrowserTabIdFromPanelTab)(eQ)), (q[2] = eQ), (q[3] = e_), (q[4] = a))
            : (a = q[4])
          let e1 = a,
            e0 = (void 0 !== ee && ee) || eQ?.tabType.kind === "latex-document" || eQ?.tabType.kind === "image-preview"
          q[5] !== eW
            ? ((m = () => {
                let e = null != eW ? (0, b._)(eH.current) : eH.current?.querySelector("[contenteditable='true']")
                null == e || (0, y.hL)(e) || e.focus({ preventScroll: !0 })
              }),
              (q[5] = eW),
              (q[6] = m))
            : (m = q[6])
          let e2 = m
          q[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = (0, n.jsx)("div", {
                ref: (e) => {
                  null != e && eR(e)
                },
                className: "contents",
              })),
              (q[7] = j))
            : (j = q[7])
          let e3 = e_ || eL
          return (
            q[8] !== e1 ||
            q[9] !== eQ ||
            q[10] !== eX ||
            q[11] !== ek ||
            q[12] !== eP ||
            q[13] !== R ||
            q[14] !== ed ||
            q[15] !== ey ||
            q[16] !== eA ||
            q[17] !== eS ||
            q[18] !== e2 ||
            q[19] !== eb ||
            q[20] !== em ||
            q[21] !== eZ ||
            q[22] !== eh ||
            q[23] !== eY ||
            q[24] !== eV ||
            q[25] !== eO ||
            q[26] !== ez ||
            q[27] !== eF ||
            q[28] !== eU ||
            q[29] !== eT ||
            q[30] !== eL ||
            q[31] !== eG ||
            q[32] !== e_ ||
            q[33] !== eN ||
            q[34] !== en ||
            q[35] !== eJ ||
            q[36] !== es ||
            q[37] !== et ||
            q[38] !== eq ||
            q[39] !== eW ||
            q[40] !== ew ||
            q[41] !== ep ||
            q[42] !== eg ||
            q[43] !== J ||
            q[44] !== eu ||
            q[45] !== ej ||
            q[46] !== e0 ||
            q[47] !== eC ||
            q[48] !== ex ||
            q[49] !== el ||
            q[50] !== eK ||
            q[51] !== eD ||
            q[52] !== ea ||
            q[53] !== er ||
            q[54] !== eE ||
            q[55] !== ei ||
            q[56] !== eB ||
            q[57] !== ec
              ? ((S = (e) =>
                  (0, n.jsx)(l.x, {
                    transformPagePoint: eB,
                    children: (0, n.jsx)(M.zN, {
                      value: e_
                        ? eU
                        : {
                            activeBrowserTabId: e1,
                            isInsideOverlay: !0,
                            onAttachmentAdded: () => {
                              ej.get(u.It.activeTab$)?.tabId === eQ?.tabId &&
                                (ej.get(L.Bd) || (0, L.gm)(ej, { prefersReducedMotion: !0 }), (0, y.xJ)())
                            },
                            shouldAnimate: !1,
                          },
                      children: (0, n.jsx)(M.CW, {
                        value: e_ ? eF : "expanded",
                        children: (0, n.jsx)(I.$, {
                          preserveLayoutOnEscape: !0,
                          contentChat: {
                            focusComposer: e2,
                            onOpenRightPane:
                              eY && eP
                                ? () => {
                                    ;(0, E._R)(ej, "chat") && eA && ej.set(T.i, ej.get(d.bp))
                                  }
                                : void 0,
                            openRightPaneDisabled: eJ,
                          },
                          dockThreadKey: D.Y3,
                          canDock: ek || ex,
                          titleContent: eE ?? er,
                          minimizedIcon: en,
                          statusState: el,
                          titleStatusState: ei,
                          hasTranscript: eh,
                          hasConversation: em,
                          emptyState: eS,
                          pendingFormId: eW,
                          notifications: es,
                          workingPreview: ec,
                          compactWorkingPreview: ed,
                          responsePreview: eu,
                          persistResponsePreview: ep,
                          containerSize: e,
                          minimumWidth: eX ? 240 : void 0,
                          renderMenu: eY ? void 0 : z,
                          forceExpanded: eb || (eZ && (eA || !ey)),
                          isHidden: e_ || eL,
                          isMinimized: eG,
                          presentation: eK,
                          showHeader: ex,
                          showComposerDivider: eC,
                          background: ey && !ex ? void 0 : "panel",
                          onPresentationChange: (e) => {
                            ;(ew && ej.set(_.H_, e), et?.(e))
                          },
                          onMinimizedChange: (e) => {
                            ;(0, L.RK)(ej, e)
                          },
                          title: ea ?? eT.formatMessage({ id: "quickChat.mainConversation", defaultMessage: "Chat" }),
                          renderTranscript: null == eg ? void 0 : (e, t) => eg({ isVisible: t && !e_ && !eL }),
                          renderComposer: (e, t) =>
                            (0, n.jsx)(f.k, {
                              value: e_ || null == e1 ? eD : eN,
                              children: (0, n.jsx)(x.D, {
                                target: e_ ? eq : null,
                                children: (0, n.jsx)($, {
                                  composerRef: eH,
                                  mainContentElement: eN,
                                  presentation: e,
                                  paneContext: e_
                                    ? { transition: eU, escapeHandler: eO, bannerTarget: eV, overlayOwner: ez }
                                    : void 0,
                                  layout: t,
                                  reserveFullComposerHeight: e0,
                                  reserveContent:
                                    J ??
                                    (null == e1 &&
                                      eQ?.tabType.kind !== "mcp-app" &&
                                      eQ?.tabType.kind !== "mcp-extension"),
                                  children: "function" == typeof R ? R(e_ ? void 0 : e) : R,
                                }),
                              }),
                            }),
                        }),
                      }),
                    }),
                  })),
                (q[8] = e1),
                (q[9] = eQ),
                (q[10] = eX),
                (q[11] = ek),
                (q[12] = eP),
                (q[13] = R),
                (q[14] = ed),
                (q[15] = ey),
                (q[16] = eA),
                (q[17] = eS),
                (q[18] = e2),
                (q[19] = eb),
                (q[20] = em),
                (q[21] = eZ),
                (q[22] = eh),
                (q[23] = eY),
                (q[24] = eV),
                (q[25] = eO),
                (q[26] = ez),
                (q[27] = eF),
                (q[28] = eU),
                (q[29] = eT),
                (q[30] = eL),
                (q[31] = eG),
                (q[32] = e_),
                (q[33] = eN),
                (q[34] = en),
                (q[35] = eJ),
                (q[36] = es),
                (q[37] = et),
                (q[38] = eq),
                (q[39] = eW),
                (q[40] = ew),
                (q[41] = ep),
                (q[42] = eg),
                (q[43] = J),
                (q[44] = eu),
                (q[45] = ej),
                (q[46] = e0),
                (q[47] = eC),
                (q[48] = ex),
                (q[49] = el),
                (q[50] = eK),
                (q[51] = eD),
                (q[52] = ea),
                (q[53] = er),
                (q[54] = eE),
                (q[55] = ei),
                (q[56] = eB),
                (q[57] = ec),
                (q[58] = S))
              : (S = q[58]),
            q[59] !== e3 || q[60] !== S
              ? ((B = (0, n.jsxs)(n.Fragment, { children: [j, (0, n.jsx)(w.q, { isHidden: e3, children: S })] })),
                (q[59] = e3),
                (q[60] = S),
                (q[61] = B))
              : (B = q[61]),
            B
          )
        },
      },
    )
  },
  GMTh(e, t, a) {
    a.d(t, { b: () => f })
    var n = a("QosV"),
      r = a("qmMi"),
      l = a("zd8w"),
      i = a("I7bK"),
      o = a("jZDY"),
      s = a("QcW8"),
      c = a("ZU27"),
      d = a("gbrq"),
      u = a("hZ6E"),
      p = a("KXCj"),
      g = a("tSEg"),
      m = a("pZMh")
    let h = (0, r.i1)(
      g.GD,
      ({ layout: e, isContentFullWidth: t, isRenderingOnClient: a }, { get: n }) => {
        let r = "embedded" !== e && n(m.dX),
          l = "embedded" !== e && n(d.SZ),
          i = "embedded" !== e && ("content" === e || (r ? !n(m.H9) : l && (t ?? n(s.kF)))),
          o = i ? n(c.It.activeTab$) : null
        return {
          placement: i ? "floating" : "pane",
          isChatPaneHidden: i,
          isHidden:
            n(u.h) ||
            (i &&
              ((l && n(s.eN) && a && o?.tabType.kind !== "image-preview") ||
                ((l || r) && (n(p.o) || o?.tabType.showComposerInFullWidth?.(o.props) === !1)))),
        }
      },
      {
        isEqual: (e, t) =>
          e.placement === t.placement && e.isHidden === t.isHidden && e.isChatPaneHidden === t.isChatPaneHidden,
      },
    )
    function f(e) {
      let t,
        a = (0, n.c)(4),
        s = void 0 === e ? "workspace" : e,
        c = (0, l.useContext)(i.f$),
        d = (0, o.I)(),
        u = c?.isContentFullWidth
      return (
        a[0] !== d || a[1] !== s || a[2] !== u
          ? ((t = { layout: s, isContentFullWidth: u, isRenderingOnClient: d }),
            (a[0] = d),
            (a[1] = s),
            (a[2] = u),
            (a[3] = t))
          : (t = a[3]),
        (0, r._U)(h, t)
      )
    }
  },
  EY6e(e, t, a) {
    var n = a("S2r0"),
      r = a("suf3"),
      l = a("DBCl"),
      i = a("SPnB"),
      o = a("hrUs"),
      s = a("smHt"),
      c = a("vldH"),
      d = a("OOaz")
    let u = ["chatgpt-file-preview"]
    a.d(
      t,
      {},
      {
        f: async function ({
          scope: e,
          conversationId: t,
          downloadIntent: a = !1,
          gizmoId: p,
          sharedConversationId: g,
          postId: m,
          requestSource: h,
          signal: f,
          maxBytes: v,
          versionNumber: y,
          modifiedAt: b,
          readBlob: x,
          target: C,
        }) {
          let w = (e, n) =>
            x?.(e, v) ??
            (0, c.fetchChatGptFileBlob)({
              conversationId: t,
              downloadIntent: a,
              gizmoId: p,
              effectiveGizmoId: n,
              sharedConversationId: g,
              postId: m,
              requestSource: h,
              signal: e,
              maxBytes: v,
              target: C,
            })
          f?.throwIfAborted()
          let I = e.get(i.chatGptAuthenticatedAccountId$),
            j = e.get(i.o8)
          if (
            null == I ||
            null == j ||
            a ||
            null != g ||
            null != m ||
            "mounted-library" === C.type ||
            "page-file" === C.type ||
            null == C.fileId ||
            null != (0, o.Um)(C.fileId)
          )
            return w(f)
          let _ = (t = f) => {
              if ((t?.throwIfAborted(), e.get(i.chatGptAuthenticatedAccountId$) !== I || e.get(i.o8) !== j))
                throw new DOMException("File preview identity changed", "AbortError")
            },
            A = (e) =>
              (0, c.lb)({
                conversationId: null == t || (0, d.YA)(t) ? void 0 : t,
                fileId: C.fileId,
                gizmoId: p,
                libraryFileId: C.libraryFileId,
                signal: e,
              }),
            S = y || b,
            k = "file-id" === C.type && null != C.libraryFileId && (0, l.PKK)(C.libraryFileId) ? C.libraryFileId : null,
            P = null != k && null != S ? [...u, I, j, "library", k, S] : null
          if (null != P) {
            let t = e.queryClient
                .getQueryCache()
                .findAll({ queryKey: P })
                .find(
                  (e) => null != e.state.data && !e.state.isInvalidated && Date.now() - e.state.dataUpdatedAt < 3e5,
                ),
              a = null == t ? void 0 : e.queryClient.getQueryData(t.queryKey)
            if (null != a) {
              if ((_(), null != v && a.blob.size > v)) throw new s.m5(a.blob.size)
              return a.blob
            }
          }
          let T = null == P ? [...u, I, j, t, p, C, y, v] : [...P, v],
            M = e.queryClient.getQueryState(T),
            L = M?.data
          if (
            null != M &&
            null != L &&
            null == P &&
            !L.requireFreshAccess &&
            !M.isInvalidated &&
            Date.now() - M.dataUpdatedAt < 3e4
          )
            return (
              e.queryClient
                .fetchQuery({
                  queryKey: ["chatgpt-file-preview-context", ...T.slice(1)],
                  queryFn: ({ signal: e }) => A(e),
                  staleTime: 0,
                  gcTime: 0,
                  retry: !1,
                })
                .then((t) => {
                  let a = e.queryClient.getQueryState(T)
                  a?.fetchStatus === "idle" &&
                    a.data === L &&
                    a.dataUpdatedAt === M.dataUpdatedAt &&
                    (t.requireFreshAccess || t.gizmoId !== L.gizmoId) &&
                    e.queryClient.removeQueries({ queryKey: T, exact: !0 })
                })
                .catch(() => void 0),
              _(),
              L.blob
            )
          let E = (0, n.j)({
              queryKey: T,
              queryFn: async ({ signal: e }) => {
                let t = null == x ? await A(e) : { gizmoId: p ?? void 0, requireFreshAccess: !0 }
                _(e)
                let a = await w(e, t.gizmoId ?? null)
                return (_(e), { ...t, blob: a })
              },
              staleTime: 3e4 * (null == P),
              gcTime: null == P ? 3e4 : 3e5,
              retry: !1,
            }),
            N = new r.$(e.queryClient, { ...E, enabled: !1 }).subscribe(() => {}),
            U = (0, l.udX)(),
            F = () => U.reject(f?.reason)
          f?.addEventListener("abort", F, { once: !0 })
          try {
            let t = await Promise.race([e.queryClient.fetchQuery(E), U.promise])
            return (
              t.requireFreshAccess && null == P && e.queryClient.removeQueries({ queryKey: T, exact: !0 }),
              (function (e) {
                let t = 0,
                  a = e.queryClient.getQueryCache()
                for (let n of a
                  .findAll({ queryKey: u })
                  .sort((e, t) => t.state.dataUpdatedAt - e.state.dataUpdatedAt)) {
                  let r = e.queryClient.getQueryData(n.queryKey)
                  null != r && (t + r.blob.size > l.jQ ? a.remove(n) : (t += r.blob.size))
                }
              })(e),
              _(),
              t.blob
            )
          } finally {
            ;(f?.removeEventListener("abort", F), N())
          }
        },
      },
    )
  },
  CxPc(e, t, a) {
    var n = a("ZU27"),
      r = a("dt5v")
    a.d(
      t,
      {},
      {
        A: function (e) {
          switch (e.target.type) {
            case "sandbox":
              return e.target.sandboxPath
            case "file-id":
            case "page-file":
              return e.target.fileId
            case "mounted-library":
              return e.target.mountedLibraryFileId
          }
        },
        L: function (e, { conversationId: t, hostId: a, path: l }) {
          for (let i of (0, n.Om)(e)) {
            if (i.tabType.kind !== r.S || i.props.path !== l || (null != a && i.props.hostId !== a)) continue
            let e = i.props.chatGptFile
            if (e?.conversationId === t && null == e.sharedConversationId && !0 !== e.artifactInteractionExcluded)
              return e
          }
          return null
        },
      },
    )
  },
  gyKR(e, t, a) {
    var n = a("SZCv"),
      r = a.n(n),
      l = a("QcW8"),
      i = a("gbrq"),
      o = a("dt5v"),
      s = a("SPnB"),
      c = a("XXJV"),
      d = a("NLws"),
      u = a("aFoA")
    function p(e) {
      return e.tabType.kind === o.S || e.tabType.kind === d.Ab
    }
    a.d(
      t,
      {},
      {
        L: function (e, t) {
          let a = (0, c.AU)(e.get(l.J8), { right: e.get(i.yN), bottom: e.get(i.lN) })
          if (null == a || !e.get(s.f4)) return null
          let n = e.get((0, c.getThreadPanelTabController)(a).activeTab$)
          if (null == n || n.isSuspended || !p(n)) return null
          let r = n.props.libraryFile,
            o = r?.openFileContext
          return r?.conversationId != null &&
            (0, u.kc)(e.get, r.conversationId) === (0, u.kc)(e.get, t) &&
            null != o &&
            o.accountId === e.get(s.chatGptAuthenticatedAccountId$) &&
            o.userId === e.get(s.chatGptAuthenticatedUserId$)
            ? o.attachment
            : null
        },
        l: function (e, t, a) {
          let n = e.get(s.chatGptAuthenticatedAccountId$),
            l = e.get(s.chatGptAuthenticatedUserId$)
          if (null == n || null == l) return
          let i = {
            accountId: n,
            userId: l,
            attachment: a,
            selectVersion: (e, n) => {
              let l = (0, c.KE)(e, t)
              if (null == l) return
              let o = (0, c.getThreadPanelTabController)(l),
                s = e.get(o.tabById$, t)
              if (null == s || !p(s)) return
              let d = s.props.libraryFile
              if (d?.openFileContext?.selectVersion !== i.selectVersion) return
              let u =
                null == n
                  ? a
                  : {
                      ...a,
                      id: n.file_id,
                      name: n.file_name,
                      mimeType: n.mime_type ?? a.mimeType,
                      size: n.file_size_bytes ?? void 0,
                    }
              r()(u, d.openFileContext.attachment) ||
                o.updateTab(e, t, {
                  props: {
                    ...s.props,
                    libraryFile: { ...d, openFileContext: { ...d.openFileContext, attachment: u } },
                  },
                })
            },
          }
          return i
        },
      },
    )
  },
  L6Ag(e, t, a) {
    a.r(t)
    var n = a("zd8w"),
      r = a("dbK8"),
      l = a("bVeK"),
      i = a("MK5N"),
      o = a("XXJV"),
      s = a("NLws")
    let c = (0, i.k)({ open: d })
    function d(
      e,
      t,
      {
        allowTaskPreview: a,
        chatGptFile: i,
        hostId: u,
        environmentId: p,
        workspaceRoot: g,
        revealAndFocus: m = !0,
        insertPosition: h,
        replaceTabId: f,
        isPreview: v,
        libraryFavoriteFile: y,
        libraryFile: b,
        loadText: x,
        providerFile: C,
        onClose: w,
        onDownload: I,
        previewKind: j,
        tabId: _,
        target: A,
        title: S,
      },
    ) {
      let k = {
        allowTaskPreview: a,
        chatGptFile: i,
        hostId: u,
        environmentId: p,
        workspaceRoot: g,
        libraryFavoriteFile: y,
        libraryFile: b,
        loadText: x,
        onDownload: I,
        providerFile: C,
        path: t,
        previewKind: j,
        tabId: _,
        title: S,
      }
      if (!c.isAvailable(e, k)) return null
      let P = (0, o.KE)(e, _) ?? A,
        T = (0, o.getThreadPanelTabController)(P)
      return (
        T.openTab(e, c, {
          revealAndFocus: m,
          insertPosition: h,
          replaceTabId: f,
          isPreview: v,
          durableRoute:
            (0, r.C)(u) && "html" === j && null != p && null == x && null == I && null == w
              ? { kind: s.Ab, payloadVersion: 1, params: { environmentId: p, path: t, title: S, workspaceRoot: g } }
              : void 0,
          canUndoClose: () => !1,
          icon: (0, n.createElement)(l.Wq_),
          id: _,
          onClose: () => w?.(),
          props: k,
          title: S,
          tooltip: S,
        }),
        m && (0, o.yI)(e, P),
        e.get(T.tabById$, _)
      )
    }
    a.d(t, {}, { openChatGptTextDocumentPreview: d })
  },
  Ul98(e, t, a) {
    var n = a("UxLW")
    a.d(
      t,
      {},
      {
        Z: function (e, t, a) {
          return "mounted-library" !== e.type
            ? null
            : {
                id: e.mountedLibraryFileId,
                fileId: e.mountedLibraryFileId,
                name: e.sourceFileName ?? t,
                mimeType: e.mimeType ?? a ?? null,
                sourceUrl: e.sourceUrl,
                provider: (0, n.AG)(e.mountedLibraryFileId) ?? void 0,
                category: "other",
                modifiedAt: null,
                sizeBytes: null,
              }
        },
      },
    )
  },
  IDHB(e, t, a) {
    var n = a("ASxG"),
      r = a("MrGp")
    let l = n.Ikc({
      branching_from_conversation_id: n.YjP().min(1),
      branching_from_conversation_owner: n.YjP().nullish(),
    })
    a.d(
      t,
      {},
      {
        i: function (e, t, a) {
          let n
          if (
            null == t ||
            ("sandbox" !== a.type && "download-url" !== a.type) ||
            null == a.messageId ||
            null == a.sandboxPath ||
            null != a.sandboxSource
          )
            return a
          let i = e.get(r.N4, t)
          if (i?.kind === "conversation" || i?.kind === "post") return a
          let o = e.get(r.zn, t)
          if (i?.kind === "project")
            return { ...a, sandboxSource: { conversationId: i.id, gizmoId: o, ownerUserId: i.ownerUserId } }
          let s = e.get(r.Jv, t),
            c = e.get(r.Od, t),
            d = new Set()
          for (; null != c && !d.has(c);) {
            let e = s?.[c]
            if (null == e) break
            d.add(c)
            let t = l.safeParse(e.message?.metadata)
            if (
              (t.success &&
                (n = {
                  conversationId: t.data.branching_from_conversation_id,
                  gizmoId: o,
                  ownerUserId: t.data.branching_from_conversation_owner,
                }),
              e.id === a.messageId || e.message?.id === a.messageId)
            )
              return null == n ? a : { ...a, sandboxSource: n }
            c = e.parent ?? null
          }
          return a
        },
      },
    )
  },
  HGuJ(e, t, a) {
    ;(a.r(t),
      a.d(t, {
        canOpenChatGptFilePreview: () => ei,
        canSaveChatGptFile: () => X,
        openChatGptFile: () => eo,
        saveChatGptFile: () => Y,
      }))
    var n = a("yvno"),
      r = a("qmMi"),
      l = a("DBCl"),
      i = a("AuIy"),
      o = a("zd8w"),
      s = a("E8Sp"),
      c = a("ZU27"),
      d = a("w7Qu"),
      u = a("SPnB"),
      p = a("L6Ag"),
      g = a("cNwL"),
      m = a("w9uH"),
      h = a("bWX0"),
      f = a("WGRC"),
      v = a("smHt"),
      y = a("H5w6"),
      b = a("XGJX"),
      x = a("BZrL"),
      C = a("coFq"),
      w = a("GaA7"),
      I = a("OWtl"),
      j = a("V3rO"),
      _ = a("kfGJ"),
      A = a("EpL9"),
      S = a("NLws"),
      k = a("ABep"),
      P = a("QosV"),
      T = a("oyxz"),
      M = a("sdtd"),
      L = a("NRvl"),
      E = a("Sm6l"),
      N = a("evwP")
    function U(e) {
      let t,
        a,
        n,
        r,
        l,
        i = (0, P.c)(20),
        {
          fileName: o,
          libraryFavoriteFile: s,
          libraryFileId: c,
          onClose: u,
          onDownload: p,
          onRetry: g,
          previewTabId: m,
          textDocumentPreviewKind: h,
        } = e
      if (i[0] !== o || i[1] !== h) {
        let e = (0, d.u6)(o),
          n = null != h,
          r = null != e && (0, d.cg)(e.importKind) ? e.importKind : null
        ;((t = n ? "text-document" : (r ?? void 0)), (a = (0, L.V)(t)), (i[0] = o), (i[1] = h), (i[2] = t), (i[3] = a))
      } else ((t = i[2]), (a = i[3]))
      let f = `relative flex h-full min-h-0 flex-col ${a}`,
        v = "html" === h ? void 0 : t
      return (
        i[4] !== o || i[5] !== s || i[6] !== c || i[7] !== u || i[8] !== p || i[9] !== m || i[10] !== v
          ? ((n = (0, k.jsx)(M.O, {
              fileName: o,
              filePreviewKind: v,
              libraryFavoriteFile: s,
              libraryFileId: c,
              onClose: u,
              onDownload: p,
              previewTabId: m,
            })),
            (i[4] = o),
            (i[5] = s),
            (i[6] = c),
            (i[7] = u),
            (i[8] = p),
            (i[9] = m),
            (i[10] = v),
            (i[11] = n))
          : (n = i[11]),
        i[12] !== o || i[13] !== t || i[14] !== g
          ? ((r = (0, k.jsx)("div", {
              className: "relative min-h-0 flex-1",
              children:
                null == g
                  ? (0, k.jsx)(M.w, { fileName: o, filePreviewKind: t })
                  : (0, k.jsxs)(N.W, {
                      className: "h-full flex-col gap-3 select-none",
                      children: [
                        (0, k.jsx)(T.A, {
                          id: "chatgptFilePreview.loadFailed",
                          defaultMessage: "Couldn't load this file",
                        }),
                        (0, k.jsx)(E.$, {
                          color: "secondary",
                          onClick: g,
                          children: (0, k.jsx)(T.A, { id: "chatgptFilePreview.retry", defaultMessage: "Retry" }),
                        }),
                      ],
                    }),
            })),
            (i[12] = o),
            (i[13] = t),
            (i[14] = g),
            (i[15] = r))
          : (r = i[15]),
        i[16] !== f || i[17] !== n || i[18] !== r
          ? ((l = (0, k.jsxs)("section", { className: f, children: [n, r] })),
            (i[16] = f),
            (i[17] = n),
            (i[18] = r),
            (i[19] = l))
          : (l = i[19]),
        l
      )
    }
    var F = a("XXJV"),
      D = a("jXc7"),
      O = a("ripK"),
      V = a("vldH"),
      z = a("EY6e"),
      $ = a("Kwur"),
      B = a("OOaz"),
      q = a("MrGp"),
      R = a("hx97"),
      G = a("CxPc"),
      H = a("gyKR"),
      W = a("Ul98"),
      K = a("IDHB"),
      Z = a("gyrn"),
      Q = a("SRbQ")
    function X() {
      return w.appServices?.workspaceFiles?.saveCopy != null
    }
    async function Y(e, { ...t }) {
      let a = { stack: [], error: void 0, hasError: !1 }
      try {
        t.target = (0, K.i)(e, t.conversationId, t.target)
        let n = w.appServices?.workspaceFiles,
          r = (0, Q.mS)(a, await Promise.resolve(n?.saveCopy), !1),
          i = (0, Q.mS)(a, null == r ? await Promise.resolve(n?.downloadCopy) : void 0, !1),
          { conversationId: o, fileName: s, gizmoId: c, sharedConversationId: d, target: u } = t
        if (null == d && null == t.postId && (null != r || null != i)) {
          let t = await (0, m.r)(e, o, u)
          if (null != t) {
            if (null != r) return void (await n?.saveCopy?.({ ...t, fileName: s }))
            if (null != i) return void (await n?.downloadCopy?.({ ...t, fileName: s }))
          }
        }
        if (null == r) return void (await (0, V.Me)(t))
        let p = await (0, V.fetchChatGptFileBlob)({
          conversationId: o,
          downloadIntent: !0,
          gizmoId: c,
          sharedConversationId: d,
          postId: t.postId,
          requestSource: t.requestSource,
          target: u,
        })
        if (p.size > l.jQ) return void (0, O.W)(p, s)
        await n?.saveCopy?.({ bytes: new Uint8Array(await p.arrayBuffer()), fileName: s })
      } catch (e) {
        ;((a.error = e), (a.hasError = !0))
      } finally {
        ;(0, Q.hk)(a)
      }
    }
    var J = a("jAnS")
    let ee = new WeakMap(),
      et = new WeakMap(),
      ea = new WeakMap(),
      en = new WeakMap(),
      er = (function ({ open: e }) {
        return (0, A.v)(S.Bl, U, {
          showsArtifact: () => !0,
          closeOnEscape: !0,
          ownsSingleTabHeader: () => !0,
          isAvailable: (e, t) =>
            "home" === e.value.routeKind || "chatgpt-thread" === e.value.routeKind || t?.allowTaskPreview === !0,
          open: e,
        })
      })({ open: eo }),
      el = (0, r.vU)(I.u, (e) => ({ ...(0, b.So)(e), retry: !1, staleTime: 0 }))
    function ei({ browserPreview: e = !1 } = {}) {
      let t = w.appServices?.workspaceFiles
      return t?.createTemporaryFile != null && null != t.releaseTemporaryFile
    }
    async function eo(e, { isAccessBlocked: t, ...a }) {
      let n,
        r = e.get(Z.cz),
        l = a.gizmoId ?? (null == a.conversationId ? null : e.get(q.zn, a.conversationId)),
        i = null != l && r?.projectId === l,
        o = i ? (e) => e.get(Z.cz) !== r || t?.(e) === !0 : t
      if (((a.target = (0, K.i)(e, a.conversationId, a.target)), a.signal?.aborted || o?.(e))) return
      if ((et.set(e, `chatgpt-file:${a.conversationId ?? "unknown"}:${a.tabKey}`), null == o)) {
        let t = await ec(e, { ...a, isLockedChat: i })
        es(e, t, a)
        return
      }
      let s = new AbortController(),
        c = () => s.abort(),
        d = e.watch((e) => {
          o(e) && s.abort()
        }),
        u = () => {
          ;(d(), a.signal?.removeEventListener("abort", c), s.signal.removeEventListener("abort", u))
        }
      ;(a.signal?.addEventListener("abort", c, { once: !0 }), s.signal.addEventListener("abort", u, { once: !0 }))
      try {
        ;((n = await ec(e, {
          ...a,
          isLockedChat: i,
          isAccessBlocked: o,
          signal: s.signal,
          onClose: () => {
            ;(u(), a.onClose?.())
          },
        })),
          es(e, n, { ...a, signal: s.signal }))
      } finally {
        ;(s.signal.aborted || null == n || ("function" != typeof n && null == ef(e, n))) && u()
      }
    }
    function es(e, t, { onOpened: a, signal: n }) {
      if (null != t && null != a) {
        if ("function" == typeof t) {
          n?.aborted || a()
          return
        }
        ;(en.get(e)?.get(t.contentInstance) ?? Promise.resolve(t)).then((t) => {
          null == t || n?.aborted || null == ef(e, t) || a()
        })
      }
    }
    async function ec(e, { isLockedChat: t, ...n }) {
      var r, b, I
      if (n.signal?.aborted) return
      let A = !t && "libraryFileId" in n.target ? n.target.libraryFileId : void 0,
        S =
          !t &&
          ((r = e),
          "mounted-library" !== (b = n).target.type &&
            "page-file" !== b.target.type &&
            null == b.sharedConversationId &&
            null == b.postId &&
            null != r.get(u.chatGptAuthenticatedAccountId$) &&
            null != r.get(u.chatGptAuthenticatedUserId$) &&
            "chatgpt-thread" === r.value.routeKind &&
            (r.get(q.jS, r.value.conversationId) ?? r.value.conversationId) ===
              (r.get(q.jS, b.conversationId ?? null) ?? b.conversationId) &&
            !(0, J.CV)(r.value.search ?? "") &&
            null == r.get(q.N4, r.value.conversationId)),
        k = e.get(u.chatGptAuthenticatedAccountId$),
        P = e.get(u.chatGptAuthenticatedUserId$)
      if (
        ("flashcards" === (I = n).libraryArtifactType ||
          (null == I.libraryArtifactType && "flashcards" === (0, h.Zo)(I.fileName))) &&
        S &&
        null != k &&
        null != P
      ) {
        let t = e.get(s.gM).pathname,
          r =
            null != A && (0, l.PKK)(A)
              ? { accountId: k, userId: P, libraryFileId: A }
              : await ed(n, k, P, n.signal).catch((e) => {
                  if (!n.signal?.aborted) throw e
                })
        if (
          n.signal?.aborted ||
          e.get(s.gM).pathname !== t ||
          e.get(u.chatGptAuthenticatedAccountId$) !== k ||
          e.get(u.chatGptAuthenticatedUserId$) !== P
        )
          return
        if (null != r) {
          let [{ openFlashcardsViewer: l }, { openFlashcardsSidePanel: i }] = await Promise.all([
            a.e(746374).then(a.bind(a, "pcsf")),
            a.e(432299).then(a.bind(a, "I7kY")),
          ])
          if (
            n.signal?.aborted ||
            e.get(s.gM).pathname !== t ||
            e.get(u.chatGptAuthenticatedAccountId$) !== k ||
            e.get(u.chatGptAuthenticatedUserId$) !== P
          )
            return
          let o = eg(n.target),
            c = ea.get(e)
          ;(null == c && ((c = new Map()), ea.set(e, c)), c.get(n.tabKey)?.())
          let d = l(
            e,
            {
              libraryFileId: r.libraryFileId,
              analyticsContext: {
                surface: "chat_grid",
                libraryFileId: r.libraryFileId,
                conversationId: e.get(q.jS, n.conversationId ?? null) ?? void 0,
                sourceMessageId:
                  n.messageId ?? n.originatingTurn?.messageId ?? ("sandbox" === o.type ? o.messageId : void 0),
              },
            },
            {
              openGrid: (t, a) => i(e, t, a),
              onClose: () => {
                ;(c.delete(n.tabKey), n.onClose?.())
              },
              signal: n.signal,
            },
          )
          return (null != d && c.set(n.tabKey, d), d ?? void 0)
        }
      }
      if (
        null != A &&
        (0, l.QPd)(n.fileName) &&
        null == n.onDownload &&
        null == n.sharedConversationId &&
        null == n.postId
      ) {
        let { openLibraryHtmlPreview: t } = await a.e(568918).then(a.bind(a, "x47Y"))
        if (await t(e, A, n)) {
          let t = e.get(c.It.tabById$, `library-html-preview:${A}`)
          if (null != t) return (em(e, t, n.signal), t)
        }
      }
      return (async function (
        e,
        {
          allowTaskPreview: t = !1,
          browserPreview: n = !1,
          connectedFileIntent: r = "preview",
          downloadFallback: s = !0,
          headerActions: b,
          icon: I,
          interaction: A,
          isAccessBlocked: S,
          onClose: k,
          onDownload: P,
          openSource: T = "manual",
          originatingTurn: M,
          signal: L,
          tabKey: E,
          ...N
        },
        U,
        O,
      ) {
        var V, $, B, H, K, Z, Q, X, J, ea, eo, es
        let ec,
          ex = Date.now(),
          { conversationId: eC, fileName: ew } = N,
          eI = e.get(u.chatGptAuthenticatedAccountId$),
          ej = e.get(u.chatGptAuthenticatedUserId$),
          e_ = (0, g.oi)(ew, N.mimeType ?? ("mounted-library" === N.target.type ? N.target.mimeType : void 0))
        if (L?.aborted) return Promise.resolve(void 0)
        let eA = (0, W.Z)(N.target, N.fileName, N.mimeType)
        if (
          null != eA &&
          null == N.sharedConversationId &&
          null == N.postId &&
          "manual" === T &&
          (0, x.gq)(e, { intent: r, interaction: A, isAccessBlocked: S, file: eA, onClose: k, signal: L })
        )
          return (N.onOpened?.(), Promise.resolve(void 0))
        let eS = eg(N.target),
          ek = (0, h.Zo)(ew)
        if (
          O &&
          ei({ browserPreview: n }) &&
          null != eC &&
          "manual" === T &&
          ("pptx" === ek || "xlsx" === ek) &&
          ("sandbox" === eS.type || "file-id" === eS.type)
        ) {
          let t
          if (
            (await a
              .e(445623)
              .then(a.bind(a, "kkO4"))
              .then(({ openSharedOfficeFilePage: a }) =>
                a(e, (0, G.A)({ byteSource: "chatgpt", conversationId: eC, target: eS }), _.fI, {
                  threadId: e.get(q.jS, eC) ?? eC,
                  onOpened: (a) => {
                    ;((t = a), em(e, a, L, k))
                  },
                  prepareSidePanel: () =>
                    L?.aborted ||
                    S?.(e) ||
                    e.get(u.chatGptAuthenticatedAccountId$) !== eI ||
                    e.get(u.chatGptAuthenticatedUserId$) !== ej
                      ? null
                      : e,
                }),
              )
              .catch(() => !1)) ||
            L?.aborted ||
            S?.(e) ||
            e.get(u.chatGptAuthenticatedAccountId$) !== eI ||
            e.get(u.chatGptAuthenticatedUserId$) !== ej
          )
            return t
        }
        let eP = N.reuseTabId ?? `chatgpt-file:${eC ?? "unknown"}:${E}`,
          eT = O && null != eI && null != ej && null != U ? { accountId: eI, libraryFileId: U, userId: ej } : void 0,
          eM = eu(e, eP, N, n, U),
          eL = {
            ...(O && null == eT ? {} : { libraryFavoriteFile: eT, libraryFile: eM }),
            ...(null == N.annotationSourceFileId ? {} : { annotationSourceFileId: N.annotationSourceFileId }),
          },
          eE = ee.get(e)
        null == eE && ((eE = new Map()), ee.set(e, eE))
        let eN = eE.get(eP),
          eU = (function (e, t, a) {
            let n = (0, F.KE)(e, t)
            if (null == n) return null
            let r = (0, F.getThreadPanelTabController)(n)
            return (
              r.updateTab(e, t, { closeOnEscape: !0, icon: a ?? e.get(r.tabById$, t)?.icon }),
              (0, F.activateThreadPanelTab)(e, n, t) ? e.get(r.tabById$, t) : null
            )
          })(e, eP, I)
        if (null != eU) {
          if (
            (eh(e, eP, { filePreviewTitle: ew, headerActions: b, hideFileNavigation: !0, onDownload: P, ...eL }),
            null != eN)
          ) {
            let t = em(e, eU, L)
            try {
              let t = await eN
              if (null == t || null == ef(e, t)) return
              ;((eU = t),
                eh(e, eP, { filePreviewTitle: ew, headerActions: b, hideFileNavigation: !0, onDownload: P, ...eL }))
            } finally {
              t()
            }
          }
          let t = em(e, eU, L, k)
          if (
            (en
              .get(e)
              ?.get(eU.contentInstance)
              ?.then((a) => {
                if ((t(), null == a)) return
                let n = ef(e, a),
                  r = null == n ? null : e.get((0, F.getThreadPanelTabController)(n).tabById$, a.tabId)
                null != r ? em(e, r, L, k) : L?.aborted || k?.()
              }),
            "manual" === T && null == N.sharedConversationId && null == N.postId)
          ) {
            let t = await (0, m.r)(e, eC, N.target)
            null == t ||
              L?.aborted ||
              null == ef(e, eU) ||
              (0, y.t9)(t.hostId, e.getOwnValue(j.l7).clientThreadId, [t.path], ex)
          }
          return eU
        }
        let eF = null == N.sharedConversationId && null == N.postId ? (0, m.r)(e, eC, N.target) : null
        if (!ei({ browserPreview: n }) && null == eF)
          return s ? ep({ ...N, onDownload: P, signal: L }).then(() => void 0) : Promise.resolve(void 0)
        let eD = new AbortController(),
          eO = (0, l.udX)(),
          eV = null,
          ez = () => {
            if ((eO.resolve(void 0), null != eB && en.get(e)?.delete(eB.contentInstance), eD.abort(), null != eV)) {
              let t = ef(e, eV)
              null != t &&
                (eV.kind !== D.S && (0, F.getThreadPanelTabController)(t).updateTab(e, eP, { onBeforeClose: void 0 }),
                (0, F.getThreadPanelTabController)(t).closeTab(e, eP))
            } else null != eB && ev(e, eB)
          },
          e$ = () => {
            ;(eO.resolve(void 0),
              null != eB && en.get(e)?.delete(eB.contentInstance),
              eD.abort(),
              L?.removeEventListener("abort", ez),
              L?.aborted || k?.())
          },
          eB =
            ((V = e),
            ($ = eP),
            (B = N),
            (H = ew),
            (K = null != U && (0, l.PKK)(U) ? U : void 0),
            (Z = eT),
            (Q = I),
            (X = t),
            (J = e_),
            (ea = e$),
            (eo = P),
            (ec = eb(H, J)),
            (0, c.AP)(V, er, {
              revealAndFocus: !ec,
              canUndoClose: () => !1,
              icon:
                Q ??
                (0, o.createElement)(f.B, {
                  className: "icon-xs shrink-0",
                  fileName: H,
                  mimeType: B.mimeType ?? void 0,
                  mountedLibraryFileId: "mounted-library" === B.target.type ? B.target.mountedLibraryFileId : K,
                  sourceUrl: "mounted-library" === B.target.type ? B.target.sourceUrl : void 0,
                  size: 12,
                }),
              id: $,
              onClose: ea,
              props: {
                allowTaskPreview: X,
                onDownload: eo ?? (() => Y(V, B)),
                fileName: H,
                libraryFavoriteFile: Z,
                libraryFileId: K,
                previewTabId: $,
                textDocumentPreviewKind: J,
              },
              title: H,
              tooltip: H,
            }),
            V.get(c.It.tabById$, $))
        if (null == eB) return s ? ep({ ...N, onDownload: P, signal: L }).then(() => void 0) : Promise.resolve(void 0)
        let eq = en.get(e)
        ;(null == eq && ((eq = new Map()), en.set(e, eq)),
          eq.set(eB.contentInstance, eO.promise),
          (es = ew),
          null != e_
            ? Promise.all([a.e(904485), a.e(777710), a.e(652500), a.e(877652), a.e(459594)])
                .then(a.bind(a, "DHxx"))
                .catch(() => {})
            : null == (0, d.u6)(es) ||
              Promise.all([
                a.e(686081).then(a.bind(a, "uzX2")),
                Promise.all([
                  a.e(222773),
                  a.e(579325),
                  a.e(712262),
                  a.e(978338),
                  a.e(904485),
                  a.e(777710),
                  a.e(923712),
                  a.e(322496),
                  a.e(53010),
                  a.e(644312),
                  a.e(652500),
                  a.e(164460),
                  a.e(877652),
                  a.e(198911),
                  a.e(95962),
                  a.e(178155),
                  a.e(576312),
                  a.e(980572),
                  a.e(441809),
                  a.e(289491),
                  a.e(973904),
                  a.e(208433),
                  a.e(963028),
                  a.e(896482),
                  a.e(664496),
                  a.e(429508),
                  a.e(490915),
                  a.e(473403),
                  a.e(431390),
                  a.e(779181),
                  a.e(577949),
                  a.e(664556),
                  a.e(59412),
                  a.e(286075),
                  a.e(830978),
                  a.e(757458),
                  a.e(923720),
                  a.e(533219),
                  a.e(944744),
                  a.e(787805),
                  a.e(999152),
                  a.e(461115),
                  a.e(418863),
                  a.e(749443),
                ]).then(a.bind(a, "fnDW")),
              ]).catch(() => {}))
        let eR = O && null == eT && null != eI && null != ej ? ed(N, eI, ej, L) : null
        L?.addEventListener("abort", ez, { once: !0 })
        let eG = eb(ew, e_),
          eH = (a) => {
            let r = (0, F.KE)(e, eP)
            if (eD.signal.aborted || null == r) return Promise.resolve(void 0)
            let o = eE.get(eP)
            if (a && null != o) return o
            let c = (0, F.getThreadPanelTabController)(r),
              d = e.get(c.tabById$, eP)
            c.updateTab(e, eP, { props: { ...d?.props, onRetry: void 0 } })
            let u = a ? eg(N.target) : N.target,
              g = (async function (
                e,
                {
                  allowTaskPreview: t,
                  annotationSourceFileId: a,
                  loadingTab: n,
                  libraryFileId: r,
                  libraryFavoriteFile: o,
                  browserPreview: s,
                  downloadFallback: c,
                  headerActions: d,
                  icon: u,
                  onClose: g,
                  onDownload: m,
                  openSource: f,
                  originatingTurn: b,
                  signal: x,
                  sourceFile: I,
                  textDocumentPreviewKind: A,
                  workspaceFileRequest: S,
                  ...k
                },
              ) {
                let P,
                  T = Date.now(),
                  { conversationId: M, fileName: L, gizmoId: E, sharedConversationId: N, target: U } = k,
                  D = !eb(L, A),
                  O = eu(e, n.tabId, k, s, r),
                  V =
                    "mounted-library" === U.type
                      ? { fileId: U.mountedLibraryFileId, mimeType: U.mimeType, sourceUrl: U.sourceUrl }
                      : void 0,
                  { tabId: $ } = n,
                  B = k.conversationViewerUrl,
                  G,
                  H = eg(U),
                  W = k.messageId ?? b?.messageId ?? ("sandbox" === H.type ? H.messageId : void 0),
                  K = e.get(q.Jv, M ?? null),
                  Z =
                    null == W || null == K
                      ? void 0
                      : Object.values(K).find(({ message: e }) => null != e && (0, i.D2)(e) === W)?.message,
                  Q =
                    "download-url" !== H.type
                      ? {
                          conversationId: M ?? null,
                          byteSource: "chatgpt",
                          messageId: W,
                          turnId: null == Z ? null : (0, R.a8)(Z),
                          gizmoId: E,
                          sharedConversationId: N,
                          target: H,
                          ...(null != k.postId ? { artifactInteractionExcluded: !0 } : {}),
                        }
                      : void 0
                if (null != S) {
                  let r
                  try {
                    r = await S
                  } catch (t) {
                    if (null == ef(e, n)) return
                    throw t
                  }
                  let l = ef(e, n)
                  if (null == l) return
                  if (null != r) {
                    if ("auto_open" === f) {
                      let t = await e.query.getOrFetch(el, r).catch(() => null)
                      if (x?.aborted || null == ef(e, n)) return
                      if (!t?.isFile || (null != t.sizeBytes && t.sizeBytes > v.dC)) return void ev(e, n)
                    }
                    if (null != B && null != G)
                      return G(e, {
                        url: B,
                        path: r.path,
                        hostId: r.hostId,
                        title: L,
                        tabId: $,
                        target: l,
                        revealAndFocus: D,
                        libraryFile: O,
                        libraryFavoriteFile: o,
                        onDownload: m,
                        onClose: g,
                      })
                    if (null != A) {
                      let i = (0, p.openChatGptTextDocumentPreview)(e, r.path, {
                        allowTaskPreview: t,
                        chatGptFile: Q,
                        hostId: r.hostId,
                        libraryFavoriteFile: o,
                        libraryFile: O,
                        providerFile: V,
                        onClose: g,
                        onDownload: m,
                        previewKind: A,
                        revealAndFocus: D,
                        tabId: $,
                        target: l,
                        title: L,
                      })
                      return null != i
                        ? ("manual" === f && (0, y.t9)(r.hostId, e.getOwnValue(j.l7).clientThreadId, [r.path], T), i)
                        : (ev(e, n),
                          (0, C.d)(e, r.path, {
                            annotationSourceFileId: a,
                            chatGptFile: null == Q ? void 0 : { ...Q, byteSource: "workspace" },
                            libraryFavoriteFile: o,
                            headerActions: d,
                            filePreviewTitle: L,
                            hideFileNavigation: s,
                            hostId: r.hostId,
                            icon: u,
                            libraryFile: O,
                            providerFile: V,
                            revealAndFocus: D,
                            onClose: g,
                            onDownload: m,
                            openedAtMs: T,
                            openSource: f,
                            originatingTurn: b,
                            tabId: $,
                            target: l,
                            title: L,
                          }),
                          e.get((0, F.getThreadPanelTabController)(l).tabById$, $) ?? void 0)
                    }
                    {
                      let t = "tex" === (0, h.Zo)(r.path)
                      return (
                        (0, C.d)(e, r.path, {
                          annotationSourceFileId: a,
                          chatGptFile: t || null == Q ? void 0 : { ...Q, byteSource: "workspace" },
                          libraryFavoriteFile: o,
                          headerActions: d,
                          filePreviewTitle: t ? void 0 : L,
                          hideFileNavigation: s,
                          hostId: r.hostId,
                          icon: u,
                          libraryFile: O,
                          providerFile: V,
                          revealAndFocus: D,
                          onClose: g,
                          onDownload: m,
                          openedAtMs: T,
                          openSource: f,
                          originatingTurn: b,
                          tabId: $,
                          target: l,
                          title: L,
                        }),
                        e.get((0, F.getThreadPanelTabController)(l).tabById$, $) ?? void 0
                      )
                    }
                  }
                }
                if (!ei({ browserPreview: s })) {
                  ;(ev(e, n), c && (await ep({ ...k, onDownload: m, signal: x })))
                  return
                }
                try {
                  P =
                    I ??
                    (await (0, z.f)({
                      scope: e,
                      conversationId: M,
                      gizmoId: E,
                      sharedConversationId: N,
                      postId: k.postId,
                      requestSource: k.requestSource,
                      versionNumber: k.versionNumber,
                      modifiedAt: k.modifiedAt,
                      signal: x,
                      target: U,
                    }))
                } catch (t) {
                  if (null == ef(e, n)) return
                  throw t
                }
                if (null == ef(e, n)) return
                let X = "auto_open" === f || null != G ? v.dC : l.jQ
                if (P.size > X) {
                  if ((ev(e, n), c)) return void (await ep({ ...k, blob: P, onDownload: m, signal: x }))
                  throw Error("ChatGPT file is too large to preview")
                }
                if (null != B && null != G) {
                  let t = ef(e, n)
                  if (null == t || x?.aborted) return
                  return G(e, {
                    url: B,
                    blob: P,
                    path: L,
                    hostId: _.fI,
                    title: L,
                    tabId: $,
                    target: t,
                    revealAndFocus: D,
                    libraryFile: O,
                    libraryFavoriteFile: o,
                    onDownload: m,
                    onClose: g,
                  })
                }
                let Y = null
                try {
                  let r = new Uint8Array(await P.arrayBuffer())
                  if (null == ef(e, n)) return
                  let l = await w.appServices?.workspaceFiles.createTemporaryFile?.({ bytes: r, fileName: L })
                  Y = l?.path ?? null
                  let i = ef(e, n)
                  if (null == i) {
                    null != Y && (ey(Y), (Y = null))
                    return
                  }
                  if (null == l) throw Error("ChatGPT file preview is unavailable")
                  if (null != A) {
                    let a = (0, p.openChatGptTextDocumentPreview)(e, l.path, {
                      allowTaskPreview: t,
                      chatGptFile: Q,
                      hostId: _.fI,
                      libraryFavoriteFile: o,
                      libraryFile: O,
                      providerFile: V,
                      onClose: () => {
                        ;(ey(l.path), g?.())
                      },
                      onDownload: m,
                      previewKind: A,
                      revealAndFocus: D,
                      tabId: $,
                      target: i,
                      title: L,
                    })
                    if (null != a) return ((Y = null), a)
                  }
                  return (
                    (0, C.d)(e, l.path, {
                      annotationSourceFileId: a,
                      chatGptFile: Q,
                      libraryFavoriteFile: o,
                      headerActions: d,
                      filePreviewTitle: L,
                      hideFileNavigation: s,
                      hostId: _.fI,
                      icon: u,
                      onDownload: m,
                      libraryFile: O,
                      providerFile: V,
                      revealAndFocus: D,
                      openSource: f,
                      originatingTurn: b,
                      onClose: () => {
                        ;(ey(l.path), g?.())
                      },
                      tabId: $,
                      target: i,
                      title: L,
                    }),
                    (0, F.getThreadPanelTabController)(i).updateTab(e, $, { canUndoClose: () => !1 }),
                    (Y = null),
                    e.get((0, F.getThreadPanelTabController)(i).tabById$, $) ?? void 0
                  )
                } catch (t) {
                  if ((null != Y && ey(Y), null == ef(e, n))) return
                  throw t
                }
              })(e, {
                ...N,
                target: u,
                allowTaskPreview: t,
                browserPreview: n,
                downloadFallback: s,
                headerActions: b,
                icon: I,
                loadingTab: eB,
                libraryFileId: U,
                libraryFavoriteFile: eT,
                onClose: e$,
                onDownload: P,
                openSource: T,
                originatingTurn: M,
                signal: eD.signal,
                textDocumentPreviewKind: e_,
                workspaceFileRequest: a && null != eF ? (0, m.r)(e, eC, u) : eF,
              })
                .catch((t) => {
                  if (eD.signal.aborted) return
                  if ("page-file" === N.target.type) throw (ev(e, eB), t)
                  let a = (0, F.KE)(e, eP)
                  if (null == a) throw t
                  let n = (0, F.getThreadPanelTabController)(a),
                    r = e.get(n.tabById$, eP)
                  return (
                    n.updateTab(e, eP, {
                      props: {
                        ...r?.props,
                        onRetry: () => {
                          eH(!0).catch(() => {})
                        },
                      },
                    }),
                    eB
                  )
                })
                .then((t) => {
                  ;((eV = t ?? null),
                    eG && null != t && et.get(e) === eP && (0, F.activateThreadPanelTab)(e, "right", t.tabId))
                  let a = null == t ? null : ef(e, t)
                  return (
                    null != a &&
                      null != t &&
                      (0, F.getThreadPanelTabController)(a).updateTab(e, eP, {
                        canUndoClose: null == L || t.kind === D.S ? t.canUndoClose : () => !1,
                        closeOnEscape: !0,
                      }),
                    L?.aborted ? ez() : null != t && t.tabType.kind !== er.kind && eO.resolve(t),
                    t
                  )
                })
                .finally(() => {
                  ;(null == eV &&
                    (eO.resolve(void 0), eq.delete(eB.contentInstance), L?.removeEventListener("abort", ez)),
                    eE.get(eP) === g && eE.delete(eP))
                })
            return (
              null != eR &&
                Promise.all([g, eR])
                  .then(([t, a]) => {
                    null != t &&
                      null != a &&
                      (function (e, t, a, n, r) {
                        let l = ef(e, t)
                        if (null == l) return
                        let i = eu(e, t.tabId, a, n, r.libraryFileId)
                        if (null == i) return
                        let o = (0, F.getThreadPanelTabController)(l),
                          s = e.get(o.tabById$, t.tabId)
                        null != s &&
                          o.updateTab(e, t.tabId, { props: { ...s.props, libraryFavoriteFile: r, libraryFile: i } })
                      })(e, t, N, n, a)
                  })
                  .catch(() => {}),
              eE.set(eP, g),
              g
            )
          }
        return eH(!1)
      })(e, n, A, S)
    }
    async function ed(e, t, a, n) {
      if ("mounted-library" === e.target.type || "page-file" === e.target.type || null == e.target.fileId) return
      if ((0, l.PKK)(e.target.fileId)) return { accountId: t, libraryFileId: e.target.fileId, userId: a }
      let r = (
        await $.Request.safeGet("/files/{file_id}/simple", {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          parameters: {
            path: { file_id: e.target.fileId },
            query: {
              conversation_id: null == e.conversationId || (0, B.YA)(e.conversationId) ? void 0 : e.conversationId,
              gizmo_id: e.gizmoId ?? void 0,
            },
          },
          signal: n,
        })
      ).library_file_id
      return null != r && (0, l.PKK)(r) ? { accountId: t, libraryFileId: r, userId: a } : void 0
    }
    function eu(e, t, a, r, i) {
      if (null != a.sharedConversationId || null != a.postId || null == i || !(0, l.PKK)(i)) return
      let o = {
        browserPreview: r,
        conversationId: a.conversationId ?? null,
        gizmoId: a.gizmoId,
        libraryArtifactType: a.libraryArtifactType,
        renderPlanAsFile: a.renderPlanAsFile,
        libraryFileId: i,
        versionNumber: a.versionNumber,
      }
      return (
        "automation_plan" !== a.libraryArtifactType ||
          a.renderPlanAsFile ||
          (o.openPlanMarkdown = (e, t, a) =>
            eo(e, {
              conversationId: o.conversationId,
              fileName: a,
              libraryArtifactType: "automation_plan",
              mimeType: "text/markdown",
              renderPlanAsFile: !0,
              browserPreview: !0,
              reuseTabId: t,
              downloadFallback: !1,
              tabKey: `automation-plan-file:${i}`,
              target: { type: "file-id", fileId: `file-inline-${i}`, libraryFileId: i },
            })),
        "file-id" === a.target.type &&
          (o.openFileContext = (0, H.l)(e, t, {
            attachmentRole: n.dm,
            id: a.target.fileId,
            libraryArtifactType: a.libraryArtifactType ?? void 0,
            libraryFileId: i,
            mimeType: a.mimeType ?? null,
            name: a.fileName,
            source: "library",
          })),
        o
      )
    }
    async function ep({ blob: e, onDownload: t, signal: a, ...n }) {
      ;(a?.throwIfAborted(), null != t)
        ? await t()
        : (null == e ? await (0, V.Me)({ ...n, signal: a }) : (0, O.W)(e, n.fileName), a?.throwIfAborted())
    }
    function eg(e) {
      let t
      if ("download-url" !== e.type) return e
      if (null != e.messageId && null != e.sandboxPath)
        t = { messageId: e.messageId, sandboxPath: e.sandboxPath, sandboxSource: e.sandboxSource, type: "sandbox" }
      else {
        if (null == e.fileId) return e
        t = { fileId: e.fileId, type: "file-id" }
      }
      return (
        null != e.fileId && (t.fileId = e.fileId),
        null != e.libraryFileId && (t.libraryFileId = e.libraryFileId),
        t
      )
    }
    function em(e, t, a, n) {
      let r = () => {
          let a = ef(e, t)
          null != a &&
            (t.kind !== D.S && (0, F.getThreadPanelTabController)(a).updateTab(e, t.tabId, { onBeforeClose: void 0 }),
            (0, F.getThreadPanelTabController)(a).closeTab(e, t.tabId))
        },
        l = () => a?.removeEventListener("abort", r),
        i = ef(e, t)
      return (
        null != i &&
          (null != a || null != n) &&
          (0, F.getThreadPanelTabController)(i).updateTab(e, t.tabId, {
            canUndoClose: null == a || t.kind === D.S ? t.canUndoClose : () => !1,
            onClose: (e, r) => {
              ;(l(), t.onClose?.(e, r), a?.aborted || n?.())
            },
          }),
        a?.addEventListener("abort", r, { once: !0 }),
        a?.aborted && r(),
        l
      )
    }
    function eh(e, t, a) {
      let n = (0, F.KE)(e, t)
      if (null == n) return
      let r = (0, F.getThreadPanelTabController)(n),
        l = e.get(r.tabById$, t)
      null != l && l.kind !== D.S && r.updateTab(e, t, { props: { ...l.props, ...a } })
    }
    function ef(e, t) {
      let a = (0, F.KE)(e, t.tabId)
      return null != a && (0, F.getThreadPanelTabController)(a).isCurrentTabInstance(e, t) ? a : null
    }
    function ev(e, t) {
      let a = ef(e, t)
      if (null == a) return !1
      let n = (0, F.getThreadPanelTabController)(a)
      return (n.updateTab(e, t.tabId, { onClose: void 0 }), n.closeTab(e, t.tabId), !0)
    }
    function ey(e) {
      w.appServices?.workspaceFiles.releaseTemporaryFile?.({ path: e }).catch(() => {})
    }
    function eb(e, t) {
      return null != t || null != (0, d.u6)(e)
    }
  },
  w9uH(e, t, a) {
    var n = a("xCr9"),
      r = a.n(n),
      l = a("zKw6"),
      i = a.n(l),
      o = a("DBCl"),
      s = a("AuIy"),
      c = a("TDcV"),
      d = a("tFO0"),
      u = a("H8lk"),
      p = a("MrGp"),
      g = a("TrP8"),
      m = a("hwXH"),
      h = a("FGJH"),
      f = a("xS4d"),
      v = a("kfGJ"),
      y = a("rvFo")
    function b(e, t, a) {
      if (!(0, o.cxl)(t) || t.includes("\0") || t.split(/[\\/]/).includes("..")) return null
      let n = (0, o.tIC)(a.cwd) ? (0, o.kqw)(t) : t
      if (
        ![a.cwd, ...(a.selected_capability_roots ?? []).map((e) => e.path)].some((e) =>
          (function (e, t) {
            let a = (0, o.tIC)(t) || (0, o.zjD)(t)
            if (a !== ((0, o.tIC)(e) || (0, o.zjD)(e))) return !1
            let n = a ? i().win32 : i().posix
            if (!n.isAbsolute(e)) return !1
            let r = n.relative(e, t)
            return ".." !== r && !r.startsWith(`..${n.sep}`) && !n.isAbsolute(r)
          })(e, n),
        )
      )
        return null
      let r = () => {
        let t = e.get(f.Zr)?.find((e) => e.installationId === a.installation_id)
        return null == t ? null : { hostId: t.hostId, path: n }
      }
      return (
        (0, g.sb)()
          ?.getState()
          .then(
            (e) => (e.installationId === a.installation_id ? { hostId: v.fI, path: n } : r()),
            () => r(),
          ) ?? Promise.resolve(r())
      )
    }
    a.d(
      t,
      {},
      {
        N: async function (e, t, a, n) {
          if (
            null == t ||
            null == a ||
            !("libraryFileId" in n) ||
            null == n.libraryFileId ||
            null == n.fileId ||
            ("download-url" === n.type && n.isSharedLibraryFile) ||
            "tpp" !== e.get(p.uh, t)
          )
            return null
          let l = e.get(p.Jv, t)
          if (null == l) return null
          let i = e.get(c.j),
            o = (0, s.UI)({ current_node: a, mapping: l })
              .filter((e) => null == e.status || "finished_successfully" === e.status)
              .flatMap(u._T)
              .filter(
                ({ file: e }) => e.libraryFileId === n.libraryFileId && e.fileId === n.fileId && null != e.sandboxPath,
              ),
            g = o[0]?.file
          if (
            g?.sandboxPath == null ||
            !/\.tex$/i.test(g.sandboxPath) ||
            o.some(({ file: e }) => e.sandboxPath !== g.sandboxPath || e.messageId !== g.messageId)
          )
            return null
          let f = r()((0, s.UI)({ current_node: g.messageId, mapping: l }), (e) => "user" === e.author.role)
          if (f?.id == null) return null
          let v = (0, d.Zp)(f) ?? e.get(p.qv, t)?.[f.id]
          if (null != v) return b(e, g.sandboxPath, v)
          if (e.get(h.Kz, t)?.complete !== !1) return null
          try {
            let n = await e.queryClient.fetchQuery({
                queryKey: ["latex-original-source-ownership", i, t, a],
                staleTime: y.D.ONE_MINUTE,
                retry: !1,
                queryFn: ({ signal: a }) => (0, m.vA)(e, t, { forceFull: !0, signal: a }),
              }),
              l = (0, s.UI)({ current_node: a, mapping: n.mapping }),
              o = l.findIndex((e) => e.id === g.messageId),
              u = r()(l.slice(0, o), (e) => "user" === e.author.role)
            if (e.get(c.j) !== i || "tpp" !== n.conversation_origin || o < 0 || u?.id !== f.id) return null
            let p = (0, d.Zp)(u)
            return null == p ? null : await b(e, g.sandboxPath, p)
          } catch {
            return null
          }
        },
        r: function (e, t, a) {
          if (
            null == t ||
            "sandbox" !== a.type ||
            null != a.fileId ||
            null != a.libraryFileId ||
            "tpp" !== e.get(p.uh, t)
          )
            return null
          let n = e.get(p.Jv, t)
          if (null == n || null == a.messageId) return null
          let l = r()((0, s.UI)({ current_node: a.messageId, mapping: n }), (e) => "user" === e.author.role)
          if (l?.id == null) return null
          let i = (0, d.Zp)(l) ?? e.get(p.qv, t)?.[l.id]
          return null == i ? null : b(e, a.sandboxPath, i)
        },
      },
    )
  },
  v6uO(e, t, a) {
    a.d(t, { a: () => u })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("YQiI"),
      i = a("CytH"),
      o = a("on57"),
      s = a("zd8w"),
      c = a("ZWS5"),
      d = a("UxN3")
    function u(e) {
      let t,
        a,
        u,
        p,
        g = (0, r.c)(8),
        { active: m, size: h } = e
      g[0] !== m ? ((t = { active: m, entering: !1 }), (g[0] = m), (g[1] = t)) : (t = g[1])
      let [f, v] = (0, s.useState)(t)
      f.active !== m && v({ active: m, entering: m })
      let y = f.entering && "entering-Dys815"
      return (
        g[2] !== y ? ((a = (0, o.A)("pointer-events-none shrink-0", y)), (g[2] = y), (g[3] = a)) : (a = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = { assets: { 16: (0, c.TE)(l.j), 20: (0, c.TE)(i.A) } }), (g[4] = u))
          : (u = g[4]),
        g[5] !== h || g[6] !== a
          ? ((p = (0, n.jsx)(d.b5, { className: a, icon: u, size: h })), (g[5] = h), (g[6] = a), (g[7] = p))
          : (p = g[7]),
        p
      )
    }
  },
  WpXe(e, t, a) {
    let n = (0, a("Qgfj").YK)({
      askForChanges: { id: "annotationMode.askForChanges", defaultMessage: "Ask for changes" },
      askChatGpt: { id: "annotationMode.askChatGpt", defaultMessage: "Ask ChatGPT" },
    })
    a.d(t, {}, { F: n })
  },
  O9Pc(e, t, a) {
    let n = (0, a("zd8w").createContext)(null)
    a.d(t, {}, { k: n })
  },
  enVv(e, t, a) {
    a.d(t, { f: () => E })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("slpy"),
      i = a("on57"),
      o = a("zd8w"),
      s = a("bVeK"),
      c = a("RNul"),
      d = a("UxN3"),
      u = a("TonS"),
      p = a("aJad"),
      g = a("hZax"),
      m = a("osar"),
      h = a("Z4o7"),
      f = a("K4Cx"),
      v = a("T1PX"),
      y = a("V8uZ")
    let b = _(10, 10, 0, 0, 0),
      x = {
        send: [
          A([10, 4.5], [10, 16.667], 1.33),
          A([4.167, 9.167], [10, 3.333], 1.33),
          A([10, 3.333], [15.833, 9.167], 1.33),
          b,
        ],
        stop: [_(4.5, 4.5, 11, 11, 1.25), b, b, b],
      },
      C = {
        16: j(1.25, 1.5, [
          [6.44434, 2.66675, 13.3337],
          [3, 9.83374, 6.16675],
          [9.88867, 4.49976, 11.1667],
          [13.334, 6.66675, 9.33374],
        ]),
        20: j(1, 1.75, [
          [8.22266, 3.33325, 16.6663],
          [4, 12.1663, 7.83325],
          [12.4443, 5.50024, 13.8333],
          [16.667, 8.33325, 11.6663],
        ]),
      },
      w = j(1, 1.5, [
        [10, 4.25, 15.75],
        [7, 12.5, 7.5],
        [11.9, 6.5, 13.5],
        [13.6, 8.5, 11.5],
      ]),
      I = [A([10, 3.333], [10, 16.667], 1.33), A([10, 9.167], [10, 3.333], 1.33), A([10, 3.333], [10, 9.167], 1.33), b]
    function j(e, t, a) {
      return a.map(([a, n, r]) => A([a * e, n * e], [a * e, r * e], t * e))
    }
    function _(e, t, a, n, r) {
      return S(
        [
          [e, t],
          [e + a, t],
          [e + a, t + n],
          [e, t + n],
        ],
        r,
      )
    }
    function A(e, t, a) {
      let n = Math.hypot(t[0] - e[0], t[1] - e[1]),
        r = [(((t[1] - e[1]) / n) * a) / 2, (((e[0] - t[0]) / n) * a) / 2],
        l = [-r[1], r[0]]
      return S(
        [
          [e[0] - r[0] - l[0], e[1] - r[1] - l[1]],
          [e[0] + r[0] - l[0], e[1] + r[1] - l[1]],
          [t[0] + r[0] + l[0], t[1] + r[1] + l[1]],
          [t[0] - r[0] + l[0], t[1] - r[1] + l[1]],
        ],
        a / 2,
      )
    }
    function S([e, t, a, n], r) {
      var l, i
      let o = [k(n, e, t, r), k(e, t, a, r), k(t, a, n, r), k(a, n, e, r)]
      return (
        (l = o[3].after),
        (i = o.flatMap(({ before: e, after: t, vertex: a }) => [
          [e, e, e],
          [P(e, a, 0.552285), P(t, a, 0.552285), t],
        ])),
        `M${l.map((e) => e.toFixed(4)).join(" ")} ${i
          .map(
            (e) =>
              `C${e
                .flat()
                .map((e) => e.toFixed(4))
                .join(" ")}`,
          )
          .join(" ")} Z`
      )
    }
    function k(e, t, a, n) {
      return {
        before: P(t, e, 0 === n ? 0 : Math.min(0.5, n / Math.hypot(e[0] - t[0], e[1] - t[1]))),
        after: P(t, a, 0 === n ? 0 : Math.min(0.5, n / Math.hypot(a[0] - t[0], a[1] - t[1]))),
        vertex: t,
      }
    }
    function P(e, t, a) {
      return [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a]
    }
    function T(e) {
      let t,
        a = (0, r.c)(3),
        { className: l, state: i } = e
      return (
        a[0] !== l || a[1] !== i
          ? ((t = (0, n.jsxs)(n.Fragment, {
              children: [
                null,
                (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(M, { className: l, state: i, voicePaths: C["16"] }) }),
              ],
            })),
            (a[0] = l),
            (a[1] = i),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    function M(e) {
      let t,
        a,
        l,
        i,
        s,
        c = (0, r.c)(24),
        { className: d, state: u, voicePaths: p } = e,
        g = (0, v.I)()
      c[0] !== u ? ((t = { from: u, to: u }), (c[0] = u), (c[1] = t)) : (t = c[1])
      let [m, h] = (0, o.useState)(t)
      m.to !== u && h({ from: m.to, to: u })
      let b = "voice" === u || ("send" === u && "voice" === m.from),
        C = "voice" === u ? p : x[u]
      c[2] !== b || c[3] !== u
        ? ((a = "voice" === u ? y.m4.toVoice : b ? y.m4.voiceToSend : "stop" === u ? y.m4.toStop : y.m4.stopToSend),
          (c[2] = b),
          (c[3] = u),
          (c[4] = a))
        : (a = c[4])
      let j = g ? a.rest : a.transform
      if (
        (c[5] !== a.transformTransition || c[6] !== g
          ? ((l = g ? { duration: 0 } : a.transformTransition), (c[5] = a.transformTransition), (c[6] = g), (c[7] = l))
          : (l = c[7]),
        c[8] !== b || c[9] !== a.pathTransition || c[10] !== C || c[11] !== g || c[12] !== u)
      ) {
        let e
        ;(c[14] !== b || c[15] !== a.pathTransition || c[16] !== g || c[17] !== u
          ? ((e = (e, t) => {
              let r = e
              return (
                !g && b && (r = "voice" === u ? [null, I[t], w[t], e] : [null, w[t], I[t], e]),
                (0, n.jsx)(
                  f.P.path,
                  { initial: !1, animate: { d: r }, transition: g ? { duration: 0 } : a.pathTransition },
                  t,
                )
              )
            }),
            (c[14] = b),
            (c[15] = a.pathTransition),
            (c[16] = g),
            (c[17] = u),
            (c[18] = e))
          : (e = c[18]),
          (i = C.map(e)),
          (c[8] = b),
          (c[9] = a.pathTransition),
          (c[10] = C),
          (c[11] = g),
          (c[12] = u),
          (c[13] = i))
      } else i = c[13]
      return (
        c[19] !== d || c[20] !== j || c[21] !== l || c[22] !== i
          ? ((s = (0, n.jsx)(f.P.svg, {
              className: d,
              "aria-hidden": "true",
              focusable: "false",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              initial: !1,
              animate: j,
              transition: l,
              children: i,
            })),
            (c[19] = d),
            (c[20] = j),
            (c[21] = l),
            (c[22] = i),
            (c[23] = s))
          : (s = c[23]),
        s
      )
    }
    let L = {
      default: "bg-composer-primary p-0.5 focus-visible:outline-background-composer-primary",
      voiceEnd: "bg-codex-icon p-0.5 focus-visible:outline-codex-icon",
    }
    function E(e) {
      let t,
        a,
        f,
        v,
        y,
        b = (0, r.c)(47),
        {
          ref: x,
          className: C,
          isLoading: w,
          disabled: I,
          ariaLabel: j,
          ariaDescribedBy: _,
          voiceStart: A,
          fullBleedIcon: S,
          supportsMorphing: k,
          Icon: P,
          iconSource: M,
          keyboardShortcutLabel: E,
          blockedReason: U,
          blockedReasonOpenNonce: F,
          disableTooltip: D,
          tooltipContent: O,
          tooltipShortcut: V,
          type: z,
          variant: $,
          onPreviewClick: B,
          onClick: q,
        } = e,
        R = void 0 !== I && I,
        G = void 0 === P ? u.A : P,
        H = void 0 === z ? "button" : z,
        { appearance: W } = (0, o.useContext)(m.k),
        K = "discussion" === W && G === u.A && null == M,
        Z = (0, g.Zj)(void 0 !== k && k && "2718448475"),
        Q = !!w,
        X = !0 === w,
        Y = void 0 !== S && S && !X && null == E,
        J = Y ? "size-full" : "icon-primary-action text-composer-primary",
        ee = null != F && null != U,
        et = Q || !!R,
        ea = !Q && !0 === R && null != B
      if (K && !X && null == E) {
        let e
        ;(b[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(s.npO, { className: "text-composer-primary" })), (b[0] = e))
          : (e = b[0]),
          (t = e))
      } else if (Z && null == E && (G === u.A || G === p.A || G === h.C)) {
        let e,
          a = "voice"
        ;(G === u.A ? (a = "send") : G === p.A && (a = "stop"),
          b[1] !== J || b[2] !== a
            ? ((e = (0, n.jsx)(T, { className: J, state: a })), (b[1] = J), (b[2] = a), (b[3] = e))
            : (e = b[3]),
          (t = e))
      } else if (X) {
        let e
        ;(b[4] !== J ? ((e = (0, n.jsx)(c.y, { className: J })), (b[4] = J), (b[5] = e)) : (e = b[5]), (t = e))
      } else if (null != E) {
        let e
        ;(b[6] !== E
          ? ((e = (0, n.jsx)("span", { className: "text-xs text-composer-primary select-none", children: E })),
            (b[6] = E),
            (b[7] = e))
          : (e = b[7]),
          (t = e))
      } else if (null != M) {
        let e
        ;(b[8] !== M
          ? ((e = (0, n.jsx)(d.b5, { className: "text-composer-primary", icon: M })), (b[8] = M), (b[9] = e))
          : (e = b[9]),
          (t = e))
      } else {
        let e
        ;(b[10] !== G || b[11] !== J
          ? ((e = (0, n.jsx)(G, { className: J })), (b[10] = G), (b[11] = J), (b[12] = e))
          : (e = b[12]),
          (t = e))
      }
      let en = Y
          ? "bg-transparent p-0 focus-visible:outline-background-composer-primary"
          : L[void 0 === $ ? "default" : $],
        er = et && "cursor-default",
        el = K && !w && "not-disabled:not-aria-disabled:hover:bg-text/80",
        ei = R && !w && !ea && (K ? "opacity-[var(--composer-primary-disabled-opacity)]" : "opacity-50")
      b[13] !== C || b[14] !== er || b[15] !== el || b[16] !== ei || b[17] !== en
        ? ((a = (0, i.A)(
            "cursor-interaction size-token-button-composer flex shrink-0 items-center justify-center rounded-full focus-visible:outline-2",
            en,
            er,
            el,
            ei,
            C,
          )),
          (b[13] = C),
          (b[14] = er),
          (b[15] = el),
          (b[16] = ei),
          (b[17] = en),
          (b[18] = a))
        : (a = b[18])
      let eo = et || void 0,
        es = Q || void 0,
        ec = (void 0 !== A && A) || void 0,
        ed = Q || (!0 === R && null == U && !ea)
      ;(b[19] !== R || b[20] !== Q || b[21] !== ea || b[22] !== q || b[23] !== B
        ? ((f = (e) => {
            if (Q || !0 === R) {
              ;(e.preventDefault(), ea && B())
              return
            }
            q?.(e)
          }),
          (b[19] = R),
          (b[20] = Q),
          (b[21] = ea),
          (b[22] = q),
          (b[23] = B),
          (b[24] = f))
        : (f = b[24]),
        b[25] !== _ ||
        b[26] !== j ||
        b[27] !== t ||
        b[28] !== x ||
        b[29] !== a ||
        b[30] !== eo ||
        b[31] !== es ||
        b[32] !== ec ||
        b[33] !== ed ||
        b[34] !== f ||
        b[35] !== H
          ? ((v = (0, n.jsx)("button", {
              ref: x,
              type: H,
              className: a,
              "aria-disabled": eo,
              "aria-busy": es,
              "aria-label": j,
              "aria-describedby": _,
              "data-composer-voice-start": ec,
              disabled: ed,
              onClick: f,
              children: t,
            })),
            (b[25] = _),
            (b[26] = j),
            (b[27] = t),
            (b[28] = x),
            (b[29] = a),
            (b[30] = eo),
            (b[31] = es),
            (b[32] = ec),
            (b[33] = ed),
            (b[34] = f),
            (b[35] = H),
            (b[36] = v))
          : (v = b[36]))
      let eu = v
      if (null == U || null === F || (!R && !ee)) {
        let e
        if (!Z && null == O) return eu
        let t = O ?? "",
          a = null == O || (void 0 !== D && D)
        return (
          b[37] !== eu || b[38] !== t || b[39] !== a || b[40] !== V
            ? ((e = (0, n.jsx)(l.m, { content: t, shortcut: V, disabled: a, children: eu })),
              (b[37] = eu),
              (b[38] = t),
              (b[39] = a),
              (b[40] = V),
              (b[41] = e))
            : (e = b[41]),
          e
        )
      }
      let ep = ee ? `forced-${F}` : "blocked"
      return (
        b[42] !== U || b[43] !== eu || b[44] !== ee || b[45] !== ep
          ? ((y = (0, n.jsx)(N, { initialOpen: ee, content: U, children: eu }, ep)),
            (b[42] = U),
            (b[43] = eu),
            (b[44] = ee),
            (b[45] = ep),
            (b[46] = y))
          : (y = b[46]),
        y
      )
    }
    function N(e) {
      let t,
        a,
        i,
        s = (0, r.c)(8),
        { children: c, content: d, initialOpen: u } = e,
        [p, g] = (0, o.useState)(u)
      return (
        s[0] !== c ? ((t = (0, n.jsx)(l.m.Trigger, { children: c })), (s[0] = c), (s[1] = t)) : (t = s[1]),
        s[2] !== d
          ? ((a = (0, n.jsx)(l.m.Content, { maxWidth: 144, className: "text-center text-pretty", children: d })),
            (s[2] = d),
            (s[3] = a))
          : (a = s[3]),
        s[4] !== p || s[5] !== t || s[6] !== a
          ? ((i = (0, n.jsxs)(l.m.Root, {
              open: p,
              onOpenChange: g,
              delayDuration: 150,
              disableHoverableContent: !0,
              children: [t, a],
            })),
            (s[4] = p),
            (s[5] = t),
            (s[6] = a),
            (s[7] = i))
          : (i = s[7]),
        i
      )
    }
  },
  IHfm(e, t, a) {
    let n = (0, a("zd8w").createContext)(!1)
    a.d(t, {}, { r: n })
  },
  Y5qM(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57")
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            i,
            o,
            s,
            c,
            d,
            u = (0, r.c)(22),
            { headerContent: p, size: g, subtitle: m, title: h, titleVariant: f } = e,
            v = void 0 === g ? "default" : g,
            y = void 0 === f ? "primary" : f,
            b = "compact" === v ? "gap-3" : "gap-2"
          ;(u[0] !== b ? ((t = (0, l.A)("flex min-w-0 flex-col", b)), (u[0] = b), (u[1] = t)) : (t = u[1]),
            u[2] !== p || u[3] !== v
              ? ((a =
                  null == p
                    ? null
                    : (0, n.jsx)("div", {
                        className: (0, l.A)(
                          "flex items-center gap-2 font-normal text-secondary",
                          "compact" === v
                            ? "text-(length:--font-small-caps-lg-size) leading-4.5"
                            : "text-size-chat-sm leading-5",
                        ),
                        children: p,
                      })),
                (u[2] = p),
                (u[3] = v),
                (u[4] = a))
              : (a = u[4]))
          let x = "compact" === v ? "text-document leading-none" : "leading-5",
            C = "secondary" === y ? "font-normal text-secondary" : "font-medium text-default",
            w = "compact" !== v && "secondary" === y && "text-size-chat-sm",
            I = "compact" !== v && "primary" === y && "text-size-chat"
          return (
            u[5] !== x || u[6] !== C || u[7] !== w || u[8] !== I
              ? ((i = (0, l.A)("min-w-0 wrap-anywhere", x, C, w, I)),
                (u[5] = x),
                (u[6] = C),
                (u[7] = w),
                (u[8] = I),
                (u[9] = i))
              : (i = u[9]),
            u[10] !== i || u[11] !== h
              ? ((o = (0, n.jsx)("div", { className: i, children: h })), (u[10] = i), (u[11] = h), (u[12] = o))
              : (o = u[12]),
            u[13] !== m
              ? ((s =
                  null == m
                    ? null
                    : (0, n.jsx)("div", { className: "text-size-chat-sm text-codex-description", children: m })),
                (u[13] = m),
                (u[14] = s))
              : (s = u[14]),
            u[15] !== o || u[16] !== s
              ? ((c = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [o, s] })),
                (u[15] = o),
                (u[16] = s),
                (u[17] = c))
              : (c = u[17]),
            u[18] !== c || u[19] !== t || u[20] !== a
              ? ((d = (0, n.jsxs)("div", { className: t, children: [a, c] })),
                (u[18] = c),
                (u[19] = t),
                (u[20] = a),
                (u[21] = d))
              : (d = u[21]),
            d
          )
        },
      },
    )
  },
  WNfT(e, t, a) {
    a.d(t, { A: () => p, $: () => u })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      i = a("zd8w"),
      o = a("hV6B"),
      s = a("CSxw"),
      c = a("IHfm")
    function d(e) {
      let t,
        a,
        i,
        o,
        s,
        c,
        d,
        u,
        p = (0, r.c)(16)
      p[0] !== e
        ? (({ ref: o, className: a, children: t, variant: s, embedded: c, ...i } = e),
          (p[0] = e),
          (p[1] = t),
          (p[2] = a),
          (p[3] = i),
          (p[4] = o),
          (p[5] = s),
          (p[6] = c))
        : ((t = p[1]), (a = p[2]), (i = p[3]), (o = p[4]), (s = p[5]), (c = p[6]))
      let g = void 0 === s ? "approval" : s,
        m = void 0 !== c && c
      return (
        p[7] !== a || p[8] !== m || p[9] !== g
          ? ((d = (0, l.A)(
              "flex flex-col overflow-hidden text-default focus:outline-none",
              !m &&
                ("announcement" === g
                  ? "rounded-(--composer-radius) bg-surface-elevated shadow-card inset-ring-1 inset-ring-border-primary-outline"
                  : [
                      "rounded-3xl border border-default",
                      "connection" === g ? "bg-surface-elevated" : "bg-surface-elevated-secondary",
                    ]),
              a,
            )),
            (p[7] = a),
            (p[8] = m),
            (p[9] = g),
            (p[10] = d))
          : (d = p[10]),
        p[11] !== t || p[12] !== i || p[13] !== o || p[14] !== d
          ? ((u = (0, n.jsx)("div", { ref: o, className: d, ...i, children: t })),
            (p[11] = t),
            (p[12] = i),
            (p[13] = o),
            (p[14] = d),
            (p[15] = u))
          : (u = p[15]),
        u
      )
    }
    function u(e) {
      let t,
        a,
        i = (0, r.c)(5),
        { variant: o, children: s } = e,
        c = "primary" === o ? "text-primary-solid" : "text-default group-hover:bg-text/15"
      return (
        i[0] !== c
          ? ((t = (0, l.A)(
              "inline-flex h-4 min-w-4 items-center justify-center rounded-md border-0 bg-current/10 px-1.5 py-0 font-sans text-xs leading-4 text-current shadow-none",
              c,
            )),
            (i[0] = c),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== s || i[3] !== t
          ? ((a = (0, n.jsx)("kbd", { "aria-hidden": !0, className: t, children: s })),
            (i[2] = s),
            (i[3] = t),
            (i[4] = a))
          : (a = i[4]),
        a
      )
    }
    function p(e) {
      let t,
        a,
        u,
        p,
        g,
        m,
        h,
        f = (0, r.c)(21)
      f[0] !== e
        ? (({ ref: g, className: a, children: t, variant: m, embedded: u, ...p } = e),
          (f[0] = e),
          (f[1] = t),
          (f[2] = a),
          (f[3] = u),
          (f[4] = p),
          (f[5] = g),
          (f[6] = m))
        : ((t = f[1]), (a = f[2]), (u = f[3]), (p = f[4]), (g = f[5]), (m = f[6]))
      let v = void 0 === m ? "approval" : m,
        y = (0, i.useContext)(c.r),
        b = u ?? y
      if ((0, s.NN)() && !b) {
        let e, r
        return (
          f[7] !== a
            ? ((e = (0, l.A)(
                "overflow-x-hidden overflow-y-auto overscroll-contain text-default focus:outline-none",
                a,
              )),
              (f[7] = a),
              (f[8] = e))
            : (e = f[8]),
          f[9] !== t || f[10] !== p || f[11] !== g || f[12] !== e
            ? ((r = (0, n.jsx)(o.yl, { ...p, ref: g, className: e, variant: "transcript-card", children: t })),
              (f[9] = t),
              (f[10] = p),
              (f[11] = g),
              (f[12] = e),
              (f[13] = r))
            : (r = f[13]),
          r
        )
      }
      return (
        f[14] !== t || f[15] !== a || f[16] !== b || f[17] !== p || f[18] !== g || f[19] !== v
          ? ((h = (0, n.jsx)(d, { ref: g, className: a, variant: v, embedded: b, ...p, children: t })),
            (f[14] = t),
            (f[15] = a),
            (f[16] = b),
            (f[17] = p),
            (f[18] = g),
            (f[19] = v),
            (f[20] = h))
          : (h = f[20]),
        h
      )
    }
  },
  Z4o7(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("bVeK")
    a.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            a = (0, r.c)(2),
            { className: i } = e
          return (
            a[0] !== i
              ? ((t = (0, n.jsxs)(n.Fragment, {
                  children: [null, (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(l.ERJ, { className: i }) })],
                })),
                (a[0] = i),
                (a[1] = t))
              : (t = a[1]),
            t
          )
        },
      },
    )
  },
  TxOL(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      i = a("Wf1j"),
      o = a("waM8"),
      s = a("bII7"),
      c = a("aeLL")
    a.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            a,
            d,
            u,
            p,
            g = (0, r.c)(11)
          g[0] !== e
            ? (({ workingStartedAtMs: d, placeholder: a, ...t } = e), (g[0] = e), (g[1] = t), (g[2] = a), (g[3] = d))
            : ((t = g[1]), (a = g[2]), (d = g[3]))
          let m = (0, i.A)(),
            h = (0, l.Ul)(null == d ? null : c.O),
            f = null == d || null == h ? null : Math.max(h - d, 0)
          return (
            g[4] !== f || g[5] !== m || g[6] !== a
              ? ((u = null != f && f >= 1e3 ? m.formatMessage(o.p.workingFor, { time: (0, o.a)(f, m.locale) }) : a),
                (g[4] = f),
                (g[5] = m),
                (g[6] = a),
                (g[7] = u))
              : (u = g[7]),
            g[8] !== t || g[9] !== u
              ? ((p = (0, n.jsx)(s.k, { ...t, placeholder: u })), (g[8] = t), (g[9] = u), (g[10] = p))
              : (p = g[10]),
            p
          )
        },
      },
    )
  },
  wqvF(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("zd8w"),
      i = a("v7qY"),
      o = a("F5N3"),
      s = a("bIvi"),
      c = a("aX0w")
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            d,
            u,
            p,
            g,
            m,
            h,
            f = (0, r.c)(20),
            { children: v, onHostChange: y, target: b } = e,
            x = (0, l.useContext)(o.$w),
            C = (0, l.useRef)(null),
            w = (0, l.useRef)(null),
            I = (0, l.useRef)(null),
            [j, _] = (0, l.useState)(null)
          f[0] !== x || f[1] !== j || f[2] !== y || f[3] !== b
            ? ((t = (e) => {
                let t = w.current
                if ((t?.cancel(), (w.current = null), (C.current = e), null == e)) return
                let a = j ?? t?.mount
                null == a && ((a = e.ownerDocument.createElement("div")).className = "contents")
                let n = b ?? e
                return (
                  a.parentNode !== n && (0, c.sb)(a, n),
                  a.style.removeProperty("display"),
                  null == j && _(a),
                  y?.(a),
                  () => {
                    a.parentNode !== e && (a.style.display = "none")
                    let t = () => {
                      ;(C.current === e && (C.current = null), a.remove(), y?.((e) => (e === a ? null : e)))
                    }
                    null == x ? t() : (w.current = { mount: a, cancel: (0, o.UO)(x, t) })
                  }
                )
              }),
              (f[0] = x),
              (f[1] = j),
              (f[2] = y),
              (f[3] = b),
              (f[4] = t))
            : (t = f[4])
          let A = (0, s.K)(t)
          return (
            f[5] !== j
              ? ((a = () => {
                  if (null == j) return
                  let e = j.ownerDocument,
                    t = e.activeElement
                  t instanceof HTMLElement && j.contains(t) && (I.current = t)
                  let a = (e) => {
                      I.current = e.target instanceof HTMLElement && j.contains(e.target) ? e.target : null
                    },
                    n = (e) => {
                      e.target === I.current && j.isConnected && (I.current = null)
                    }
                  return (
                    e.addEventListener("focusin", a, !0),
                    e.addEventListener("focusout", n, !0),
                    () => {
                      ;(e.removeEventListener("focusin", a, !0), e.removeEventListener("focusout", n, !0))
                    }
                  )
                }),
                (d = [j]),
                (f[5] = j),
                (f[6] = a),
                (f[7] = d))
              : ((a = f[6]), (d = f[7])),
            (0, l.useLayoutEffect)(a, d),
            f[8] !== j || f[9] !== b
              ? ((u = () => {
                  let e,
                    t,
                    a = b ?? C.current
                  null != j &&
                    null != a &&
                    j.parentNode !== a &&
                    ((e = j.ownerDocument),
                    (t = I.current),
                    (0, c.sb)(j, a),
                    null != t &&
                      queueMicrotask(() => {
                        I.current === t && t.isConnected && e.activeElement === e.body && t.focus({ preventScroll: !0 })
                      }))
                }),
                (p = [j, b]),
                (f[8] = j),
                (f[9] = b),
                (f[10] = u),
                (f[11] = p))
              : ((u = f[10]), (p = f[11])),
            (0, l.useLayoutEffect)(u, p),
            f[12] !== A
              ? ((g = (0, n.jsx)("div", { ref: A, className: "contents" })), (f[12] = A), (f[13] = g))
              : (g = f[13]),
            f[14] !== v || f[15] !== j
              ? ((m = null == j ? null : (0, i.createPortal)(v, j)), (f[14] = v), (f[15] = j), (f[16] = m))
              : (m = f[16]),
            f[17] !== g || f[18] !== m
              ? ((h = (0, n.jsxs)(n.Fragment, { children: [g, m] })), (f[17] = g), (f[18] = m), (f[19] = h))
              : (h = f[19]),
            h
          )
        },
      },
    )
  },
  nVwU(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("zd8w"),
      i = a("oyxz"),
      o = a("aRbG")
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a,
            s,
            c,
            d = (0, r.c)(9),
            { children: u, deadlineMs: p, nowMs: g, visibleCountdownMs: m } = e
          d[0] !== g ? ((t = () => g ?? Date.now()), (d[0] = g), (d[1] = t)) : (t = d[1])
          let [h, f] = (0, l.useState)(t)
          ;(d[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = () => {
                f(Date.now())
              }),
              (d[2] = a))
            : (a = d[2]),
            (0, o.$)(a, null != p && null == g ? 1e3 : null))
          let v = null == p ? null : Math.max(0, Math.ceil((p - (g ?? h)) / 1e3)),
            y = null != v && v <= m / 1e3 ? v : null
          return (
            d[3] !== y
              ? ((s =
                  null == y
                    ? null
                    : (0, n.jsx)("span", {
                        className:
                          "inline-flex h-5 min-w-8 shrink-0 items-center justify-center rounded-full bg-text-accent/10 px-1.5 text-xs leading-none font-medium text-accent",
                        "aria-hidden": "true",
                        children: (0, n.jsx)(i.A, {
                          id: "requestInputPanel.dismissCountdownSeconds",
                          defaultMessage: "{seconds}s",
                          values: { seconds: y },
                        }),
                      })),
                (d[3] = y),
                (d[4] = s))
              : (s = d[4]),
            d[5] !== u || d[6] !== y || d[7] !== s
              ? ((c = u(y, s)), (d[5] = u), (d[6] = y), (d[7] = s), (d[8] = c))
              : (c = d[8]),
            c
          )
        },
      },
    )
  },
  g2Gi(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("i1uX"),
      i = a("on57"),
      o = a("Wf1j"),
      s = a("oyxz"),
      c = a("Sm6l"),
      d = a("HOLv"),
      u = a("WNfT"),
      p = a("nVwU")
    a.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            a,
            g = (0, r.c)(11),
            { children: m, deadlineMs: h, disabled: f, nowMs: v, variant: y, visibleCountdownMs: b, onDismiss: x } = e,
            C = void 0 === b ? 6e4 : b,
            w = (0, o.A)(),
            I = h ?? null
          return (
            g[0] !== m || g[1] !== f || g[2] !== w || g[3] !== x || g[4] !== y
              ? ((t = (e, t) => {
                  let a =
                    null == e
                      ? w.formatMessage({ id: "requestInputPanel.dismiss", defaultMessage: "Dismiss" })
                      : w.formatMessage(
                          {
                            id: "requestInputPanel.dismissCountdown",
                            defaultMessage: "Dismiss, {seconds, plural, one {# second} other {# seconds}} remaining",
                          },
                          { seconds: e },
                        )
                  return "icon" === y
                    ? (0, n.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          t,
                          m,
                          (0, n.jsx)(c.$, {
                            "aria-label": a,
                            "data-request-input-dismiss": !0,
                            color: "ghost",
                            disabled: f,
                            size: "icon",
                            onClick: x,
                            children: (0, n.jsx)(d.I, { "aria-hidden": !1, asset: l.Q }),
                          }),
                        ],
                      })
                    : (0, n.jsxs)(c.$, {
                        className: (0, i.A)("group shrink-0", null != e && "!gap-2 !py-1 !pe-1.5 !ps-3"),
                        "data-request-input-dismiss": !0,
                        "aria-label": null == e ? void 0 : a,
                        color: null == e ? "ghost" : "outline",
                        disabled: f,
                        onClick: x,
                        children: [
                          (0, n.jsx)("span", {
                            className: "text-sm text-codex-description",
                            children: (0, n.jsx)(s.A, { id: "requestInputPanel.dismiss", defaultMessage: "Dismiss" }),
                          }),
                          t ??
                            (0, n.jsx)(u.$, {
                              variant: "secondary",
                              children: (0, n.jsx)(s.A, { id: "requestInputPanel.escapeKey", defaultMessage: "ESC" }),
                            }),
                        ],
                      })
                }),
                (g[0] = m),
                (g[1] = f),
                (g[2] = w),
                (g[3] = x),
                (g[4] = y),
                (g[5] = t))
              : (t = g[5]),
            g[6] !== v || g[7] !== I || g[8] !== t || g[9] !== C
              ? ((a = (0, n.jsx)(p.Z, { deadlineMs: I, nowMs: v, visibleCountdownMs: C, children: t })),
                (g[6] = v),
                (g[7] = I),
                (g[8] = t),
                (g[9] = C),
                (g[10] = a))
              : (a = g[10]),
            a
          )
        },
      },
    )
  },
  aeLL(e, t, a) {
    var n = a("qmMi"),
      r = a("OWtl")
    let l = (0, n.SZ)(r.u, Date.now, ({ set: e }) => {
      let t,
        a = () => {
          ;(window.clearInterval(t),
            e(Date.now()),
            (t = "hidden" === document.visibilityState ? void 0 : window.setInterval(() => e(Date.now()), 1e3)))
        }
      return (
        a(),
        document.addEventListener("visibilitychange", a),
        () => {
          ;(window.clearInterval(t), document.removeEventListener("visibilitychange", a))
        }
      )
    })
    a.d(t, {}, { O: l })
  },
  C9uP(e, t, a) {
    var n = a("DBCl"),
      r = a("ASxG"),
      l = a("OOaz")
    let i = r.gMt("kind", [
      r.Ikc({ kind: r.euz("local"), conversationId: r.YjP().transform(n.JXB), hostId: r.YjP() }),
      r.Ikc({ kind: r.euz("chatgpt"), conversationId: r.YjP().transform(l.q3), title: r.YjP() }),
    ])
    a.d(
      t,
      {},
      {
        D: i,
        p: function (e, t) {
          return null == e || null == t
            ? e === t
            : e.kind === t.kind &&
                e.conversationId === t.conversationId &&
                ("local" !== e.kind || ("local" === t.kind && e.hostId === t.hostId))
        },
      },
    )
  },
  oKNs(e, t, a) {
    a.d(t, { P: () => p, l: () => u })
    var n = a("ASxG"),
      r = a("Bl6U"),
      l = a("MrGp"),
      i = a("V3rO"),
      o = a("DBCl"),
      s = a("OOaz"),
      c = a("C9uP")
    let d = n.KCZ([
        c.D,
        n.Ikc({ kind: n.euz("local-draft"), clientThreadId: n.YjP().refine(o.L$F), hostId: n.YjP() }),
        n.Ikc({ kind: n.euz("chatgpt-draft"), conversationId: n.YjP().transform(s.TF) }),
      ]),
      u = n.Ikc({
        accountId: n.YjP().nullable(),
        chat: d,
        page: n.Ikc({ accountId: n.YjP(), pageId: n.YjP() }).nullable(),
      })
    function p(e, t) {
      if ("local-draft" === t.kind) {
        let a = e(i.Tl, t.clientThreadId)
        return null == a ? t : { kind: "local", conversationId: a, hostId: e(r.qX, a) ?? t.hostId }
      }
      if ("chatgpt-draft" === t.kind) {
        let a = e(l.jS, t.conversationId)
        return null == a ? t : { kind: "chatgpt", conversationId: a, title: "" }
      }
      return t
    }
  },
  oaG4(e, t, a) {
    a.r(t)
    var n = a("ABep"),
      r = a("DBCl"),
      l = a("tl5a"),
      i = a("myH1"),
      o = a("QcW8"),
      s = a("ZU27"),
      c = a("EpL9"),
      d = a("SPnB"),
      u = a("OtLV"),
      p = a("B0Wx"),
      g = a("OOaz"),
      m = a("rPIX"),
      h = a("fwnP"),
      f = a("bVeK"),
      v = a("Bbed"),
      y = a("svjy"),
      b = a("sjCL"),
      x = a("YNMW"),
      C = a("VbOM"),
      w = a("oKNs")
    let I = (0, v._)(
        async () =>
          (
            await Promise.all([
              a.e(222773),
              a.e(648165),
              a.e(207991),
              a.e(446194),
              a.e(854102),
              a.e(906567),
              a.e(198667),
              a.e(729502),
              a.e(984404),
              a.e(579325),
              a.e(712262),
              a.e(978338),
              a.e(904485),
              a.e(777710),
              a.e(923712),
              a.e(322496),
              a.e(53010),
              a.e(644312),
              a.e(141674),
              a.e(652500),
              a.e(164460),
              a.e(877652),
              a.e(214739),
              a.e(678690),
              a.e(947437),
              a.e(901175),
              a.e(377960),
              a.e(843292),
              a.e(752862),
              a.e(49871),
              a.e(150547),
              a.e(255843),
              a.e(314719),
              a.e(153694),
              a.e(679632),
              a.e(810979),
              a.e(921241),
              a.e(583579),
              a.e(433661),
              a.e(529755),
              a.e(631141),
              a.e(293398),
              a.e(960583),
              a.e(778901),
              a.e(301030),
              a.e(77282),
              a.e(203414),
              a.e(716574),
              a.e(92253),
              a.e(273709),
              a.e(866709),
              a.e(486890),
              a.e(820714),
              a.e(587936),
              a.e(172184),
              a.e(417402),
              a.e(612928),
              a.e(887074),
              a.e(452048),
              a.e(684598),
              a.e(198911),
              a.e(299268),
              a.e(536061),
              a.e(79584),
              a.e(646093),
              a.e(847740),
              a.e(434505),
              a.e(877217),
              a.e(944124),
              a.e(202588),
              a.e(428069),
              a.e(839700),
              a.e(835890),
              a.e(183204),
              a.e(394554),
              a.e(895612),
              a.e(992177),
              a.e(513017),
              a.e(154721),
              a.e(636373),
              a.e(82894),
              a.e(980572),
              a.e(76344),
              a.e(640683),
              a.e(212545),
              a.e(90304),
              a.e(507080),
              a.e(289491),
              a.e(973904),
              a.e(390843),
              a.e(827769),
              a.e(897450),
              a.e(963703),
              a.e(963028),
              a.e(812107),
              a.e(642253),
              a.e(581568),
              a.e(264443),
              a.e(505785),
              a.e(806265),
              a.e(330283),
              a.e(777478),
              a.e(977544),
              a.e(288383),
              a.e(802912),
              a.e(534377),
              a.e(707980),
              a.e(308581),
              a.e(959530),
              a.e(772548),
              a.e(172601),
              a.e(215774),
              a.e(443657),
              a.e(855699),
              a.e(336604),
              a.e(540250),
              a.e(305126),
              a.e(331405),
              a.e(947156),
              a.e(632620),
              a.e(285062),
              a.e(898586),
              a.e(728869),
              a.e(523871),
              a.e(228260),
              a.e(233836),
              a.e(151898),
              a.e(637153),
              a.e(174249),
              a.e(278282),
              a.e(585970),
              a.e(734464),
              a.e(145109),
              a.e(422281),
              a.e(796677),
              a.e(184275),
              a.e(852725),
              a.e(687151),
              a.e(221160),
              a.e(966320),
              a.e(184432),
              a.e(618072),
              a.e(790065),
            ]).then(a.bind(a, "ROzU"))
          ).WorkspaceChatInstance,
      ),
      j = (0, v._)(async () => (await a.e(652391).then(a.bind(a, "UaNf"))).WorkspaceChatThumbnail),
      _ = (0, c.v)(C.c.kind, I, {
        ...C.c,
        open: A,
        getContextMenuItems: (e, { onNewChat: t }) => [{ id: "new-chat", message: u.D.newChat, onSelect: t }],
        durableRoute: {
          ...C.c.durableRoute,
          serialize: (e, { params: t }) => ({
            kind: "content-chat",
            payloadVersion: 1,
            params: { ...t, chat: (0, w.P)(e.get, t.chat) },
          }),
          restore: ({
            scope: e,
            descriptor: t,
            target: a,
            revealAndFocus: n,
            isDisconnected: r,
            insertPosition: l,
          }) => {
            let i = w.l.safeParse(t.params)
            return (
              1 === t.payloadVersion &&
              !r() &&
              "right" === a &&
              i.success &&
              i.data.accountId === e.get(d.chatGptAuthenticatedAccountId$) &&
              null != S(e, i.data, { tabId: t.tabId, insertPosition: l, revealAndFocus: n })
            )
          },
        },
        isVisible: (e) => e.get(o.dX),
        hasUnreadChat: (e, { params: t }) => {
          let a = (0, w.P)(e, t.chat)
          return "local" === a.kind
            ? (0, i._W)(e, a.conversationId, a.hostId)
            : "local-draft" !== a.kind && e(h.oZ, a.conversationId)
        },
        getTitle: (e, { params: t }) => k(e, t),
        getIcon: () => (0, n.jsx)(f.OHc, {}),
        retainWhileInactive: () => !0,
        showComposerInFullWidth: () => !1,
        dropDestinations: ["left", "right"],
        renderThumbnail: (e, t) => (0, n.jsx)(j, { title: t.title }),
        sync: (e, { params: t }, a) =>
          e.watch((n) => {
            let r = (0, w.P)(n.get, t.chat)
            s.It.updateTab(e, a.tabId, {
              title: k(n, { ...t, chat: r }),
              durableRoute: { kind: "content-chat", payloadVersion: 1, params: { ...t, chat: r } },
            })
          }),
      })
    function A(e, t = {}) {
      let a = e.get(m.Px),
        n = a?.kind === "codex" ? a : a?.page,
        l =
          (t.work ?? (null != n && e.get(b.Oh, n)))
            ? { kind: "chatgpt-draft", conversationId: (0, g.co)() }
            : {
                kind: "local-draft",
                clientThreadId: (0, r.xa2)(),
                hostId: e.value.persistentWorkspace?.session.hostId ?? "local",
              }
      return S(
        e,
        {
          accountId: e.get(d.chatGptAuthenticatedAccountId$),
          chat: l,
          page: null == n ? null : { accountId: n.accountId, pageId: n.pageId },
        },
        t,
      )
    }
    function S(
      e,
      t,
      {
        tabId: a = `workspace-chat:${crypto.randomUUID()}`,
        replaceTabId: n,
        insertPosition: r,
        revealAndFocus: l = !0,
      } = {},
    ) {
      return e.get(o.dX)
        ? (s.It.openTab(e, _, {
            id: a,
            props: {
              params: t,
              onNewChat: () => {
                A(e)
              },
              onDeleteConversation: () => {
                s.It.closeTab(e, a, { recordCloseUndo: !1 })
              },
            },
            replaceTabId: n,
            insertPosition: r,
            revealAndFocus: l,
            allowDuringThreadCreation: !0,
            requiresWorkspaceReady: !1,
            workspaceKey: e.value.persistentWorkspace?.key,
          }),
          null == e.get(s.It.tabById$, a))
          ? null
          : (l && (e.set(o.ab, !1), (0, x.tH)(e)), a)
        : null
    }
    function k(e, t) {
      let a,
        n = (0, w.P)(e.get, t.chat)
      return (
        "local" === n.kind
          ? (a = e.get(l.HX, { hostId: n.hostId, threadId: n.conversationId }))
          : "local-draft" !== n.kind && (a = e.get(p.T7, n.conversationId)),
        a?.trim() ||
          ("chatgpt" === n.kind ? n.title.trim() : "") ||
          e.get(y.g).formatMessage({ id: "threadWorkspace.tab.chat", defaultMessage: "Chat" })
      )
    }
    a.d(
      t,
      {},
      {
        getWorkspaceChatLauncherAction: function (e, t) {
          return {
            tabType: _,
            id: "workspace-chat",
            icon: (0, n.jsx)(f.TmP, {}),
            title: t.formatMessage({ id: "threadWorkspace.newTab.chat", defaultMessage: "Chat" }),
            onSelect: (t) => {
              A(e, { replaceTabId: t })
            },
          }
        },
        openNewWorkspaceChat: A,
        openWorkspaceChatInstance: S,
      },
    )
  },
  pIbZ(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("hwkA")
    a.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            a,
            i,
            o,
            s,
            c,
            d = (0, r.c)(12)
          if (d[0] !== e) {
            let { icon: n, children: r, squareOnMobile: l, className: s, ...c } = e
            ;((i = n), (t = r), (a = s), (o = c), (d[0] = e), (d[1] = t), (d[2] = a), (d[3] = i), (d[4] = o))
          } else ((t = d[1]), (a = d[2]), (i = d[3]), (o = d[4]))
          let u = i?.[16]
          return (
            i?.[20],
            d[5] !== u ? ((s = null == u ? null : (0, n.jsx)(u, {})), (d[5] = u), (d[6] = s)) : (s = d[6]),
            d[7] !== t || d[8] !== a || d[9] !== o || d[10] !== s
              ? ((c = (0, n.jsxs)(n.Fragment, {
                  children: [
                    null,
                    (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsxs)(l.$, { ...o, className: a, size: "lg", iconSize: "sm", children: [s, t] }),
                    }),
                  ],
                })),
                (d[7] = t),
                (d[8] = a),
                (d[9] = o),
                (d[10] = s),
                (d[11] = c))
              : (c = d[11]),
            c
          )
        },
      },
    )
  },
  xD3Z(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("slpy"),
      i = a("qmMi"),
      o = a("Qgfj"),
      s = a("Wf1j"),
      c = a("oyxz"),
      d = a("QcW8"),
      u = a("Sm6l"),
      p = a("rmk3"),
      g = a("bVeK"),
      m = a("tSEg"),
      h = a("hZax"),
      f = a("dt6g"),
      v = a("WwnD")
    function y(e) {
      let t,
        a,
        i,
        d,
        m,
        f,
        v,
        y,
        x,
        C,
        w = (0, r.c)(31),
        { contextMenuTrigger: I, isCompact: j, isDragging: _, items: A, open: S, onMinimize: k, onOpenChange: P } = e,
        T = (0, h.Zj)("2163293173"),
        M = (0, s.A)()
      ;(w[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, o.zR)({ id: "quickChat.dock.minimizeComposer", defaultMessage: "Minimize composer" })), (w[0] = t))
        : (t = w[0]),
        w[1] !== k
          ? ((a = { id: "minimize", icon: g.xEj, message: t, onSelect: k, selectAfterClose: !0 }),
            (w[1] = k),
            (w[2] = a))
          : (a = w[2]),
        w[3] !== A || w[4] !== a ? ((i = [...A, a]), (w[3] = A), (w[4] = a), (w[5] = i)) : (i = w[5]))
      let L = i
      if (null != I) {
        let e, t
        return (
          w[6] !== I
            ? ((e = (0, n.jsx)("div", { className: "contents", children: I })), (w[6] = I), (w[7] = e))
            : (e = w[7]),
          w[8] !== L || w[9] !== e
            ? ((t = (0, n.jsx)(p.t, { disableNative: !0, items: L, children: e })), (w[8] = L), (w[9] = e), (w[10] = t))
            : (t = w[10]),
          t
        )
      }
      if (T) {
        let e
        return (
          w[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(n.Fragment, {})), (w[11] = e))
            : (e = w[11]),
          e
        )
      }
      let E = S || _
      ;(w[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, n.jsx)(c.A, {
            id: "quickChat.dock.dragHint",
            defaultMessage: "Drag to move \xb7 Click for options",
          })),
          (w[12] = d))
        : (d = w[12]),
        w[13] !== M
          ? ((m = M.formatMessage({ id: "quickChat.moreOptions", defaultMessage: "Chat options" })),
            (w[13] = M),
            (w[14] = m))
          : (m = w[14]))
      let N = j ? "composer" : "toolbar"
      return (
        w[15] !== P || w[16] !== S
          ? ((f = (e) => {
              0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || P?.(!S)
            }),
            (w[15] = P),
            (w[16] = S),
            (w[17] = f))
          : (f = w[17]),
        w[18] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, n.jsx)(g.cvX, {})), (w[18] = v)) : (v = w[18]),
        w[19] !== m || w[20] !== N || w[21] !== f
          ? ((y = (0, n.jsx)(u.$, {
              className: "cursor-grab touch-none active:cursor-grabbing",
              "aria-label": m,
              color: "ghostSecondaryPillBackground",
              "data-quick-chat-drag-handle": !0,
              size: N,
              uniform: !0,
              onPointerDown: b,
              onClick: f,
              children: v,
            })),
            (w[19] = m),
            (w[20] = N),
            (w[21] = f),
            (w[22] = y))
          : (y = w[22]),
        w[23] !== y || w[24] !== E
          ? ((x = (0, n.jsx)(l.m, { disabled: E, content: d, children: y })), (w[23] = y), (w[24] = E), (w[25] = x))
          : (x = w[25]),
        w[26] !== L || w[27] !== P || w[28] !== S || w[29] !== x
          ? ((C = (0, n.jsx)(p.t, {
              disableNative: !0,
              trigger: "click",
              align: "end",
              open: S,
              onOpenChange: P,
              items: L,
              children: x,
            })),
            (w[26] = L),
            (w[27] = P),
            (w[28] = S),
            (w[29] = x),
            (w[30] = C))
          : (C = w[30]),
        C
      )
    }
    function b(e) {
      0 !== e.button || e.ctrlKey || e.preventDefault()
    }
    a.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            a,
            l = (0, r.c)(6),
            s = (0, i.gh)(m.GD),
            c = (0, i.Ul)(d.D5)
          l[0] !== c || l[1] !== s
            ? ((t = c
                ? [
                    {
                      id: "full-view",
                      icon: g.Zdv,
                      message: (0, o.zR)({ id: "quickChat.dock.openTab", defaultMessage: "Open in full view" }),
                      onSelect: () => {
                        ;(0, f.$)(s, "context_menu", () => (0, v.xO)(s, "chat", { mode: "full" }))
                      },
                    },
                  ]
                : []),
              (l[0] = c),
              (l[1] = s),
              (l[2] = t))
            : (t = l[2])
          let u = t
          return (
            l[3] !== u || l[4] !== e
              ? ((a = (0, n.jsx)(y, { ...e, items: u })), (l[3] = u), (l[4] = e), (l[5] = a))
              : (a = l[5]),
            a
          )
        },
        u: y,
      },
    )
  },
  Bj0d(e, t, a) {
    var n = a("aXWg")
    a.d(t, { C: () => n.s })
  },
  lHrO(e, t, a) {
    a.d(t, { d: () => b })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("hwkA"),
      i = a("Dfrg")
    let o = (0, a("ESTr").a)({
      name: "xmark-md-light-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 8.433014, y: 8.432983, width: 15.133652, height: 15.133545 },
        visualBounds: { x: 8.433014, y: 8.432983, width: 15.133652, height: 15.133545 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 8.433014, y: 8.432983, width: 15.133652, height: 15.133545 },
        center: { x: 15.99984, y: 15.999756 },
        insets: { top: 8.432983, right: 8.433334, bottom: 8.433472, left: 8.433014 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 15.99984, y: 15.999756 },
          foreground: { x: 15.99984, y: 15.999756 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M22.0296 8.69659C22.3811 8.34515 22.9516 8.34521 23.3031 8.69659C23.6545 9.04806 23.6545 9.61855 23.3031 9.97002L17.2728 15.9993L23.3031 22.0306C23.6543 22.3821 23.6545 22.9516 23.3031 23.303C22.9517 23.6544 22.3821 23.6543 22.0306 23.303L15.9994 17.2718L9.96908 23.303C9.61758 23.6542 9.04798 23.6544 8.69662 23.303C8.34535 22.9517 8.3455 22.382 8.69662 22.0306L14.7259 15.9993L8.69662 9.97002C8.34515 9.61855 8.34515 9.04806 8.69662 8.69659C9.04809 8.34512 9.61858 8.34512 9.97006 8.69659L15.9994 14.7259L22.0296 8.69659Z" fill="currentColor"/>',
    })
    var s = a("qmMi"),
      c = a("zd8w"),
      d = a("Wf1j"),
      u = a("UOa8"),
      p = a("Sm6l"),
      g = a("HOLv"),
      m = a("bVeK"),
      h = a("ZWS5"),
      f = a("hZax"),
      v = a("fEjy"),
      y = a("Bj0d")
    function b(e) {
      let t,
        a,
        l,
        i = (0, r.c)(6)
      return (
        i[0] !== e ? (({ liveSurface: t, ...a } = e), (i[0] = e), (i[1] = t), (i[2] = a)) : ((t = i[1]), (a = i[2])),
        i[3] !== t || i[4] !== a
          ? ((l = null == t ? (0, n.jsx)(C, { ...a }) : (0, n.jsx)(x, { ...a, surface: t })),
            (i[3] = t),
            (i[4] = a),
            (i[5] = l))
          : (l = i[5]),
        l
      )
    }
    function x(e) {
      let t,
        a,
        l,
        i,
        o,
        d,
        p,
        g,
        m = (0, r.c)(23)
      m[0] !== e ? (({ surface: a, ...t } = e), (m[0] = e), (m[1] = t), (m[2] = a)) : ((t = m[1]), (a = m[2]))
      let { userId: h } = (0, u.As)(),
        { client: b, getLayer: x, isLoading: w } = (0, f.cn)()
      m[3] !== b || m[4] !== w || m[5] !== a || m[6] !== h
        ? ((l = "ineligible" !== a && !w && null != h && b.getContext().user.userID === h),
          (m[3] = b),
          (m[4] = w),
          (m[5] = a),
          (m[6] = h),
          (m[7] = l))
        : (l = m[7])
      let I = l,
        j = (0, s.Ul)(!!I && "visible" === a && y.C)
      m[8] !== I || m[9] !== x
        ? ((i = I ? x(v.fM, { disableExposureLog: !0 }) : null),
          (o = i?.get("pricing_backtest_enabled", !1) ?? !1),
          (m[8] = I),
          (m[9] = x),
          (m[10] = i),
          (m[11] = o))
        : ((i = m[10]), (o = m[11]))
      let _ = o
      return (
        m[12] !== b || m[13] !== x || m[14] !== i || m[15] !== _ || m[16] !== h || m[17] !== j
          ? ((d = () => {
              if (!j || null == i || "visible" !== document.visibilityState || b.getContext().user.userID !== h) return
              let e = x(v.fM, { disableExposureLog: !0 })
              e.ruleID === i.ruleID &&
                e.groupName === i.groupName &&
                e.get("pricing_backtest_enabled", !1) === _ &&
                x(v.fM).get("pricing_backtest_enabled", !1)
            }),
            (p = [b, x, i, h, _, j]),
            (m[12] = b),
            (m[13] = x),
            (m[14] = i),
            (m[15] = _),
            (m[16] = h),
            (m[17] = j),
            (m[18] = d),
            (m[19] = p))
          : ((d = m[18]), (p = m[19])),
        (0, c.useEffect)(d, p),
        m[20] !== t || m[21] !== _
          ? ((g = (0, n.jsx)(C, { ...t, useLegacyCloseButton: _ })), (m[20] = t), (m[21] = _), (m[22] = g))
          : (g = m[22]),
        g
      )
    }
    function C(e) {
      let t,
        a,
        s,
        c,
        u,
        f = (0, r.c)(16),
        { onClick: v, safeAreaRight: y, compact: b, inlineIcon: x, useLegacyCloseButton: C } = e,
        w = void 0 !== b && b,
        I = void 0 !== x && x,
        j = void 0 !== C && C,
        _ = (0, d.A)()
      f[0] !== _
        ? ((t = _.formatMessage({ id: "pricing.comparison.close", defaultMessage: "Close pricing" })),
          (f[0] = _),
          (f[1] = t))
        : (t = f[1])
      let A = t
      f[2] !== I
        ? ((a = I ? (0, n.jsx)(g.I, { asset: (0, h.TE)(i.J) }) : (0, n.jsx)(m.pgK, {})), (f[2] = I), (f[3] = a))
        : (a = f[3])
      let S = a
      return (
        f[4] !== y ? ((s = { marginInlineEnd: y }), (f[4] = y), (f[5] = s)) : (s = f[5]),
        f[6] !== w || f[7] !== S || f[8] !== I || f[9] !== A || f[10] !== v || f[11] !== j
          ? ((c = j
              ? (0, n.jsx)(p.$, {
                  color: "ghostSecondary",
                  size: "iconTouch",
                  "aria-label": A,
                  onClick: v,
                  children: (0, n.jsx)(g.I, { asset: I ? (0, h.TE)(o) : o, focusable: !1 }),
                })
              : (0, n.jsx)(l.$, {
                  color: "secondary",
                  variant: "ghost",
                  pill: !1,
                  size: w ? "md" : "xl",
                  iconSize: w ? "sm" : "lg",
                  uniform: !0,
                  className: "[--button-ring-offset:0px]",
                  "aria-label": A,
                  onClick: v,
                  children: S,
                })),
            (f[6] = w),
            (f[7] = S),
            (f[8] = I),
            (f[9] = A),
            (f[10] = v),
            (f[11] = j),
            (f[12] = c))
          : (c = f[12]),
        f[13] !== s || f[14] !== c
          ? ((u = (0, n.jsx)("div", {
              className: "flex items-start justify-end md:absolute md:end-6 md:top-6",
              style: s,
              children: c,
            })),
            (f[13] = s),
            (f[14] = c),
            (f[15] = u))
          : (u = f[15]),
        u
      )
    }
  },
  DGWL(e, t, a) {
    a.d(
      t,
      {},
      {
        u: function (e, { client: t, isLoading: a }) {
          return !1
        },
      },
    )
  },
  hZ6E(e, t, a) {
    var n = a("qmMi"),
      r = a("QcW8"),
      l = a("ZU27"),
      i = a("gbrq"),
      o = a("tSEg")
    let s = (0, n.bD)(o.GD, (e) => null),
      c = (0, n.un)(o.GD, ({ get: e }) => {
        let t = e(l.It.activeTab$)?.tabId
        return null != t && e(i.SZ) && e(i.yN) && (e(r.kF) || e(r.eN)) && null != e(s, t)
      })
    a.d(
      t,
      {},
      {
        N: function (e, t) {
          let a = Symbol()
          return (
            e.set(s, t, a),
            () => {
              e.get(s, t) === a && e.set(s, t, null)
            }
          )
        },
        h: c,
      },
    )
  },
  aYc1(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("X3K1")
    a.d(
      t,
      {},
      {
        i: function () {
          let e,
            t = (0, r.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-0 overflow-hidden rounded-lg peer-data-[space-image-thumbnail-ready]/progressive-preview:hidden",
                  children: (0, n.jsx)(l.X, { as: "span", size: "fill", variant: "chatgpt-project" }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  LcBG(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      i = a("suct"),
      o = a("iodE"),
      s = a("K45w"),
      c = a("SOml"),
      d = a("K4Cx"),
      u = a("zd8w"),
      p = a("oyxz"),
      g = a("X3K1"),
      m = a("V8uZ"),
      h = a("aYc1"),
      f = a("PArc")
    let v = [
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-27/20",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-27/20",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-6/5",
      "aspect-7/5",
      "aspect-square",
      "aspect-27/20",
      "aspect-6/5",
      "aspect-7/5",
    ]
    function y(e) {
      let t,
        a = (0, r.c)(3),
        { layout: l, items: i } = e
      return (
        a[0] !== i || a[1] !== l
          ? ((t =
              "uniform" === l
                ? (0, n.jsx)(f.n, { items: i })
                : (0, n.jsx)(b, { items: i, imageMasonry: "image-masonry" === l }, l)),
            (a[0] = i),
            (a[1] = l),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    function b(e) {
      let t,
        a,
        o,
        s,
        c,
        d,
        p,
        g,
        m,
        h,
        f = (0, r.c)(25),
        { items: v, animate: y, imageMasonry: b } = e,
        _ = void 0 !== y && y,
        A = void 0 !== b && b,
        S = (0, u.useRef)(null)
      f[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Map()), (f[0] = t)) : (t = f[0])
      let [k, P] = (0, u.useState)(t)
      f[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { columns: 0, width: 0, animate: !1, ids: [], assignments: new Map() }), (f[1] = a))
        : (a = f[1])
      let T = (0, u.useRef)(a)
      f[2] !== v ? ((s = JSON.stringify((o = v.map(I)))), (f[2] = v), (f[3] = o), (f[4] = s)) : ((o = f[3]), (s = f[4]))
      let M = s
      f[5] !== o ? ((c = () => o), (f[5] = o), (f[6] = c)) : (c = f[6])
      let L = (0, u.useEffectEvent)(c)
      ;(f[7] !== _ || f[8] !== L || f[9] !== A
        ? ((d = () => {
            let e,
              t = S.current
            if (!t) return
            let a = L(),
              n = new Map(Array.from(t.querySelectorAll(":scope > [data-masonry-item]"), w)),
              r = a.flatMap((e) => n.get(e) ?? []),
              l = () => {
                let e = t.clientWidth
                if (0 === e) return
                let n = getComputedStyle(t),
                  l = parseFloat(n.rowGap),
                  i = T.current,
                  o = A
                    ? Math.max(1, Math.floor((e + l) / (180 + l)))
                    : Number(n.getPropertyValue("--codex-library-masonry-columns")) || 1
                if (A && i.columns !== o)
                  for (let e of (t.style.setProperty("--codex-library-masonry-columns", String(o)), r))
                    Number(e.style.gridColumn) > o && (e.style.gridColumn = "")
                let s = new Map(),
                  c = Array(o).fill(0),
                  d = r.map(C),
                  u = a.findIndex((e, t) => e !== i.ids[t]),
                  p = [],
                  g = (e, t, a) => {
                    ;((p[t] = { id: e, column: a, top: c[a] }), s.set(e, a), (c[a] = c[a] + (d[t] + l)))
                  }
                if (A && i.columns === o) {
                  let e = a.filter((e) => !e.startsWith("loading-") && i.assignments.has(e)),
                    t = new Map(a.map(x))
                  if (i.ids.filter((e) => !e.startsWith("loading-") && t.has(e)).every((t, a) => t === e[a]))
                    for (let [e, a] of i.assignments) {
                      let n = t.get(e)
                      null == n || e.startsWith("loading-") || g(e, n, a)
                    }
                }
                a.forEach((e, t) => {
                  if (s.has(e)) return
                  let a = !A && i.columns === o && (-1 === u || t < u) ? i.assignments.get(e) : void 0
                  g(e, t, a ?? c.indexOf(Math.min(...c)))
                })
                let m = _ && i.width === e && i.columns === o && (i.animate || -1 !== u || a.length !== i.ids.length)
                if (
                  ((T.current = { columns: o, width: e, animate: m, ids: a, assignments: s }),
                  (t.style.height = `${Math.max(0, ...c) - (a.length > 0 ? l : 0)}px`),
                  _)
                ) {
                  let t = ((e + l) / o) * ("rtl" === n.direction ? -1 : 1),
                    a = new Map()
                  for (let { id: e, column: n, top: r } of p)
                    a.set(e, { x: n * t, y: r, animate: m && i.assignments.has(e) })
                  P(a)
                  return
                }
                for (let [e, t] of r.entries()) {
                  let { column: a, top: n } = p[e]
                  ;((t.style.gridColumn = `${a + 1}`),
                    (t.style.gridRow = "1"),
                    (t.style.transform = `translateY(${n}px)`))
                }
              },
              i = new ResizeObserver(() => {
                ;(null != e && cancelAnimationFrame(e), (e = requestAnimationFrame(l)))
              })
            for (let e of (i.observe(t), r)) i.observe(e)
            return (
              l(),
              () => {
                ;(i.disconnect(), null != e && cancelAnimationFrame(e))
              }
            )
          }),
          (f[7] = _),
          (f[8] = L),
          (f[9] = A),
          (f[10] = d))
        : (d = f[10]),
        f[11] !== _ || f[12] !== A || f[13] !== M
          ? ((p = [M, _, A]), (f[11] = _), (f[12] = A), (f[13] = M), (f[14] = p))
          : (p = f[14]),
        (0, u.useLayoutEffect)(d, p))
      let E =
        !A &&
        "sm:gap-4 @sm:[--codex-library-masonry-columns:2] @xl:[--codex-library-masonry-columns:3] @3xl:[--codex-library-masonry-columns:4] @5xl:[--codex-library-masonry-columns:5] @7xl:[--codex-library-masonry-columns:6]"
      return (
        f[15] !== E
          ? ((g = (0, l.A)(
              "relative grid grid-cols-[repeat(var(--codex-library-masonry-columns),minmax(0,1fr))] items-start gap-3 [--codex-library-masonry-columns:1]",
              E,
            )),
            (f[15] = E),
            (f[16] = g))
          : (g = f[16]),
        f[17] !== _ || f[18] !== A || f[19] !== v || f[20] !== k
          ? ((m = _
              ? (0, n.jsx)(i.N, {
                  initial: !1,
                  mode: "popLayout",
                  children: v.map((e) => (0, n.jsx)(j, { id: e.id, position: k.get(e.id), children: e.content }, e.id)),
                })
              : v.map((e) =>
                  (0, n.jsx)(
                    "div",
                    {
                      className: (0, l.A)(
                        "min-w-0",
                        A &&
                          "nth-[3n+1]:[--image-masonry-placeholder-ratio:4/3] nth-[5n+2]:[--image-masonry-placeholder-ratio:3/4]",
                      ),
                      "data-masonry-item": e.id,
                      children: e.content,
                    },
                    e.id,
                  ),
                )),
            (f[17] = _),
            (f[18] = A),
            (f[19] = v),
            (f[20] = k),
            (f[21] = m))
          : (m = f[21]),
        f[22] !== g || f[23] !== m
          ? ((h = (0, n.jsx)("div", {
              className: "@container",
              children: (0, n.jsx)("div", { ref: S, className: g, children: m }),
            })),
            (f[22] = g),
            (f[23] = m),
            (f[24] = h))
          : (h = f[24]),
        h
      )
    }
    function x(e, t) {
      return [e, t]
    }
    function C(e) {
      return e.offsetHeight
    }
    function w(e) {
      return [e.dataset.masonryItem, e]
    }
    function I(e) {
      let { id: t } = e
      return t
    }
    function j(e) {
      let t,
        a,
        l,
        i,
        p,
        g,
        h,
        f = (0, r.c)(23),
        { id: v, ref: y, position: b, children: x } = e,
        C = (0, o.tF)(),
        w = (0, s.d)(b?.x ?? 0),
        I = (0, s.d)(b?.y ?? 0)
      f[0] !== b || f[1] !== w || f[2] !== I
        ? ((t = () => {
            if (!b?.animate) {
              ;(w.jump(b?.x ?? 0), I.jump(b?.y ?? 0))
              return
            }
            let e = [(0, c.i)(w, b.x, m.X7), (0, c.i)(I, b.y, m.X7)]
            return () => e.forEach(_)
          }),
          (f[0] = b),
          (f[1] = w),
          (f[2] = I),
          (f[3] = t))
        : (t = f[3])
      let j = b?.x,
        A = b?.y,
        S = b?.animate
      ;(f[4] !== j || f[5] !== A || f[6] !== S || f[7] !== w || f[8] !== I
        ? ((a = [j, A, S, w, I]), (f[4] = j), (f[5] = A), (f[6] = S), (f[7] = w), (f[8] = I), (f[9] = a))
        : (a = f[9]),
        (0, u.useLayoutEffect)(t, a))
      let k = !C,
        P = !C
      return (
        f[10] !== w || f[11] !== I ? ((l = { x: w, y: I }), (f[10] = w), (f[11] = I), (f[12] = l)) : (l = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = { opacity: 1 }),
            (i = { opacity: 0 }),
            (p = { opacity: { duration: 0.15, ease: m.Wu } }),
            (f[13] = i),
            (f[14] = p),
            (f[15] = g))
          : ((i = f[13]), (p = f[14]), (g = f[15])),
        f[16] !== x || f[17] !== v || f[18] !== y || f[19] !== k || f[20] !== P || f[21] !== l
          ? ((h = (0, n.jsx)(d.P.div, {
              ref: y,
              className: "col-start-1 row-start-1 min-w-0",
              "data-masonry-item": v,
              "aria-hidden": k,
              inert: P,
              initial: !1,
              style: l,
              animate: g,
              exit: i,
              transition: p,
              children: x,
            })),
            (f[16] = x),
            (f[17] = v),
            (f[18] = y),
            (f[19] = k),
            (f[20] = P),
            (f[21] = l),
            (f[22] = h))
          : (h = f[22]),
        h
      )
    }
    function _(e) {
      return e.stop()
    }
    function A(e) {
      let t,
        a,
        i,
        o,
        s,
        c = (0, r.c)(18),
        { square: d, layout: u, index: m } = e
      c[0] !== u
        ? ((t =
            "image-masonry" === u
              ? (0, n.jsx)(h.i, {})
              : (0, n.jsx)(g.X, { size: "fill", variant: "chatgpt-project" })),
          (c[0] = u),
          (c[1] = t))
        : (t = c[1])
      let f = t,
        y = "uniform" === u && "flex w-full flex-col items-center gap-3",
        b = "image-masonry" === u && "relative aspect-[var(--image-masonry-placeholder-ratio,1)] w-full"
      c[2] !== m || c[3] !== u || c[4] !== d || c[5] !== y || c[6] !== b
        ? ((a = (0, l.A)(y, b, null == u && ["w-full overflow-hidden rounded-2xl", d ? "aspect-square" : v[m]])),
          (c[2] = m),
          (c[3] = u),
          (c[4] = d),
          (c[5] = y),
          (c[6] = b),
          (c[7] = a))
        : (a = c[7])
      let x = 0 === m ? "status" : void 0
      return (
        c[8] !== m
          ? ((i =
              0 === m
                ? (0, n.jsx)("span", {
                    className: "sr-only",
                    children: (0, n.jsx)(p.A, { id: "libraryNext.results.loading", defaultMessage: "Loading library" }),
                  })
                : null),
            (c[8] = m),
            (c[9] = i))
          : (i = c[9]),
        c[10] !== u || c[11] !== f
          ? ((o =
              "uniform" === u
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", { className: "aspect-7/5 w-full overflow-hidden rounded-3xl", children: f }),
                      (0, n.jsx)("div", {
                        "aria-hidden": !0,
                        className: "flex h-5 w-full items-center justify-center",
                        children: (0, n.jsx)("span", { className: "h-3 w-1/2 rounded bg-surface-tertiary" }),
                      }),
                    ],
                  })
                : f),
            (c[10] = u),
            (c[11] = f),
            (c[12] = o))
          : (o = c[12]),
        c[13] !== a || c[14] !== x || c[15] !== i || c[16] !== o
          ? ((s = (0, n.jsxs)("div", { className: a, role: x, children: [i, o] })),
            (c[13] = a),
            (c[14] = x),
            (c[15] = i),
            (c[16] = o),
            (c[17] = s))
          : (s = c[17]),
        s
      )
    }
    a.d(
      t,
      {},
      {
        bg: b,
        c5: A,
        cZ: y,
        oH: function (e) {
          let t,
            a,
            l = (0, r.c)(6),
            { square: i, layout: o } = e
          return (
            l[0] !== o || l[1] !== i
              ? ((t = v.map((e, t) => ({
                  id: `loading-${t}`,
                  content: (0, n.jsx)(A, { layout: o, square: i, index: t }),
                }))),
                (l[0] = o),
                (l[1] = i),
                (l[2] = t))
              : (t = l[2]),
            l[3] !== o || l[4] !== t
              ? ((a = (0, n.jsx)("div", { className: "pt-4", children: (0, n.jsx)(y, { layout: o, items: t }) })),
                (l[3] = o),
                (l[4] = t),
                (l[5] = a))
              : (a = l[5]),
            a
          )
        },
      },
    )
  },
  PArc(e, t, a) {
    var n = a("ABep"),
      r = a("QosV")
    function l(e) {
      let { id: t, content: a } = e
      return (0, n.jsx)("div", { className: "min-w-0", children: a }, t)
    }
    a.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            a,
            i = (0, r.c)(4),
            { items: o } = e
          return (
            i[0] !== o ? ((t = o.map(l)), (i[0] = o), (i[1] = t)) : (t = i[1]),
            i[2] !== t
              ? ((a = (0, n.jsx)("div", {
                  className: "@container",
                  children: (0, n.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-x-6 gap-y-10 @md:grid-cols-2 @2xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 @min-[96rem]:grid-cols-6",
                    "data-space-preview-grid": "",
                    children: t,
                  }),
                })),
                (i[2] = t),
                (i[3] = a))
              : (a = i[3]),
            a
          )
        },
      },
    )
  },
  h5NZ(e, t, a) {
    var n = a("qmMi"),
      r = a("GaA7"),
      l = a("OWtl"),
      i = a("rvFo")
    let o = (0, n.RD)(l.u, () => ({
      queryFn: async () => {
        let e = r.appServices.libraryFiles
        if (null == e) throw Error("Library files are unavailable")
        return e.listOutputFiles()
      },
      queryKey: ["projectless-output-files"],
      refetchOnWindowFocus: !1,
      retry: !1,
      staleTime: i.D.FIVE_SECONDS,
    }))
    a.d(t, {}, { o: o })
  },
  F9dY(e, t, a) {
    let n = new Map()
    function r(e, t, a) {
      let r = `${a}:${t}`,
        l = n.get(r)
      return (null == l &&
        ((l = new Intl.NumberFormat(a, { style: "unit", unit: t, unitDisplay: "narrow" })), n.set(r, l)),
      "hu" === a.toLowerCase().split("-")[0])
        ? l
            .formatToParts(e)
            .filter((e) => "literal" !== e.type)
            .map((e) => e.value)
            .join("")
        : l.format(e)
    }
    a.d(
      t,
      {},
      {
        C: function (e, { locale: t = "en", underOneSecond: a = "null", trimZeroUnits: n = !1 } = {}) {
          let l = Math.floor(Math.max(e, 0) / 1e3)
          if (l < 1) return "zero" === a ? r(0, "second", t) : null
          if (l < 60) return r(l, "second", t)
          let i = Math.floor(l / 86400),
            o = Math.floor(l / 3600) % 24,
            s = Math.floor((l % 3600) / 60),
            c = l % 60
          if (i > 0 || o > 0) {
            let e = []
            return (
              i > 0 && e.push(r(i, "day", t)),
              (o > 0 || !n) && e.push(r(o, "hour", t)),
              (s > 0 || !n) && e.push(r(s, "minute", t)),
              (c > 0 || !n) && e.push(r(c, "second", t)),
              e.join(" ")
            )
          }
          return n && 0 === c ? r(s, "minute", t) : [r(s, "minute", t), r(c, "second", t)].join(" ")
        },
      },
    )
  },
  waM8(e, t, a) {
    var n = a("Qgfj"),
      r = a("F9dY")
    let l = (0, n.YK)({
      worked: { id: "localConversation.agentActivity.completed", defaultMessage: "Worked" },
      workingFor: { id: "localConversation.workingFor", defaultMessage: "Working for {time}" },
    })
    a.d(
      t,
      {},
      {
        a: function (e, t) {
          return (0, r.C)(e, { locale: t, underOneSecond: "zero", trimZeroUnits: !0 }) ?? "0s"
        },
        p: l,
      },
    )
  },
  KXCj(e, t, a) {
    var n = a("qmMi"),
      r = a("ASxG"),
      l = a("ZU27"),
      i = a("gbrq"),
      o = a("OWtl"),
      s = a("tSEg"),
      c = a("JYRT")
    let d = r.Ikc({ app_ids: r.YOg(r.YjP()).catch([]), mcp_servers: r.YOg(r.YjP()).catch([]) }),
      u = (0, n.i1)(o.u, (e, { get: t }) => {
        if (null == e) return !1
        let a = d.safeParse(t(c.X, "2503859075")?.value)
        return (
          !!a.success &&
          (null != e.connectorId ? a.data.app_ids.includes(e.connectorId) : a.data.mcp_servers.includes(e.server))
        )
      }),
      p = (0, n.un)(s.GD, ({ get: e }) => {
        let t = e(l.It.activeTab$)
        return t?.tabType.composerAppSource != null && e(u, e(m))
      }),
      g = (0, n.i1)(s.GD, (e, { get: t }) => null != e && t(u, (t(i.SZ) ? t(m) : null) ?? e)),
      m = (0, n.un)(s.GD, ({ get: e }) => {
        let t = e(l.It.activeTab$)
        return t?.tabType.composerAppSource?.(t.props)
      })
    a.d(t, {}, { X: g, o: p })
  },
  u4ay(e, t, a) {
    var n = a("bVeK"),
      r = a("HFg1")
    let l = {
      canvas: n.AdO,
      document: n.oQS,
      file: n.oQS,
      presentation: r.Q.presentation["16"],
      spreadsheet: r.Q.spreadsheet["16"],
    }
    a.d(t, {}, { q: l })
  },
  oLc1(e, t, a) {
    var n = a("SRbQ"),
      r = a("DBCl"),
      l = a("zd8w"),
      i = a("Dgwo"),
      o = a("tl5a"),
      s = a("fOao"),
      c = a("HGuJ"),
      d = a("SGsN"),
      u = a("svjy"),
      p = a("h5NZ"),
      g = a("QxN6"),
      m = a("uSwP"),
      h = a("tv8P"),
      f = a("XXJV"),
      v = a("JQLC"),
      y = a("bnxy"),
      b = a("u4ay"),
      x = a("wFSR")
    a.d(
      t,
      {},
      {
        o: async function (e, t, a, C) {
          try {
            let d
            if ((a.throwIfAborted(), "libraryFileId" in t))
              return void (0, g.openLibraryFileTab)(e, t.libraryFileId, t.fileName)
            if ("fileId" in t)
              return void (await (async function (e, t, a, n) {
                let r = e.get(h.spacePageId$, n),
                  i = e.get(h.spaceAccountId$)
                if (null == i) return
                let o = `page:${i}:${r}:${t.fileId}`,
                  s = (0, f.KE)(e, `chatgpt-file:unknown:${o}`),
                  d = (0, h.watchSpaceAccount)(e, i),
                  u = new AbortController(),
                  p = AbortSignal.any([a, d.signal, u.signal]),
                  g = e.watch(({ get: e }) => {
                    let t = e(h.loadedSpacePageMetadata$, r)
                    ;(t?.access.can_read === !1 || t?.deleted_at != null) && u.abort()
                  }),
                  m = () => {
                    ;(d.stop(), g(), p.removeEventListener("abort", m))
                  }
                p.addEventListener("abort", m, { once: !0 })
                try {
                  ;(p.throwIfAborted(),
                    await (0, c.openChatGptFile)(e, {
                      allowTaskPreview: !0,
                      browserPreview: !0,
                      conversationId: null,
                      downloadFallback: !1,
                      fileName: t.fileName,
                      icon: (0, l.createElement)(b.q[t.kind]),
                      onClose: () => u.abort(),
                      signal: p,
                      tabKey: o,
                      target: { type: "page-file", fileId: t.fileId, pageId: r },
                    }),
                    null != s && m())
                } catch (e) {
                  if ((m(), !p.aborted)) throw e
                }
              })(e, t, a, C))
            let u = (0, r.JXB)(t.threadId),
              w = e.get(o.qX, u),
              I = t.relativePath?.startsWith("outputs/") ? [t.relativePath, t.relativePath.slice(8)] : [t.relativePath]
            if (null != t.relativePath) {
              let a = await e.query.getOrFetch(p.o).catch(() => void 0)
              for (let e of I)
                if (
                  ((d = a?.find(
                    (a) => a.threadId === t.threadId && a.relativePath === e && a.name === t.fileName,
                  )?.path),
                  null != d)
                )
                  break
            }
            if ((a.throwIfAborted(), null == d)) {
              let r = (0, i.V)(e, w)
              ;(await r.hydrateBackgroundThreads([u], { includeTurns: null == t.relativePath }), a.throwIfAborted())
              let l = e.get(o.PQ, u)
              if (null == t.relativePath) {
                let e = { stack: [], error: void 0, hasError: !1 }
                try {
                  let i = (0, n.mS)(e, await r.getLoadedConversationHistory(u).catch(() => null), !1)
                  ;(a.throwIfAborted(),
                    null != i &&
                      (d = (0, x.KA)(
                        t,
                        (0, v.g4)(i.turns, { includeGeneratedImages: !1, projectlessOutputDirectory: l }),
                      )?.path))
                } catch (t) {
                  ;((e.error = t), (e.hasError = !0))
                } finally {
                  ;(0, n.hk)(e)
                }
              }
              if (null == d) {
                let n = l ?? e.get(o.JN, u) ?? (await r.readThread(u, { includeTurns: !1 })).thread.cwd
                for (let e of (a.throwIfAborted(), I)) {
                  let i = null
                  null != e && (i = (0, y.Fd)(null == l ? `outputs/${e}` : e))
                  let { files: o } = await r.sendRequest("fuzzyFileSearch", {
                    query: i ?? t.fileName,
                    roots: [n],
                    cancellationToken: null,
                  })
                  a.throwIfAborted()
                  let s = o.filter(
                    (e) =>
                      "file" === e.match_type && e.file_name === t.fileName && (null == i || (0, y.Fd)(e.path) === i),
                  )
                  if (1 === s.length) {
                    d = (0, y.b0)(s[0].root, s[0].path)
                    break
                  }
                }
              }
            }
            if ((a.throwIfAborted(), null == d)) throw Error("Page artifact output is unavailable")
            let { existingPaths: j } = await e.query.getOrFetch(m.S, { hostId: w, paths: [d] })
            if ((a.throwIfAborted(), !j.some((e) => (0, y.y7)(e, d)))) throw Error("Page artifact file is unavailable")
            ;(0, s.openArtifactSidePanelTab)(e, d, {
              hostId: w,
              icon: (0, l.createElement)(b.q[t.kind]),
              title: t.fileName,
              target: "right",
            })
          } catch {
            a.aborted ||
              e
                .get(d.Id)
                .danger(
                  e
                    .get(u.g)
                    .formatMessage({
                      id: "codex.space.page.artifact.openError",
                      defaultMessage: "Could not open this artifact",
                      description: "Error shown when an artifact linked in a Page is no longer available",
                    }),
                  { errorAnalytics: { toastId: "codex.space.page.artifact.openError" } },
                )
          }
        },
      },
    )
  },
  wFSR(e, t, a) {
    var n = a("DBCl"),
      r = a("w7Qu"),
      l = a("VS5n"),
      i = a("bnxy")
    let o =
      /^codex:\/\/threads\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\?artifact=(document|presentation|spreadsheet)(?:&path=([^&#]+))?$/iu
    function s(e, t) {
      let a = (0, n.Ekp)(e)
      if (null != a) {
        let e = t.trim()
        return { libraryFileId: a, fileName: e, kind: c(e) ?? "file" }
      }
      let r = (0, l.wv)(e)
      if (null != r) {
        let e = t.trim(),
          a = c(e)
        return null == a ? null : { fileId: r, fileName: e, kind: a }
      }
      let i = o.exec(e),
        s = i?.[2]?.toLowerCase()
      if (null == i || ("document" !== s && "presentation" !== s && "spreadsheet" !== s)) return null
      let d = `Created ${s}: `,
        u = (t.startsWith(d) ? t.slice(d.length) : t).trim()
      if (c(u) !== s) return null
      try {
        return { fileName: u, kind: s, relativePath: null == i[3] ? void 0 : decodeURIComponent(i[3]), threadId: i[1] }
      } catch {
        return null
      }
    }
    function c(e) {
      switch ((0, r.Yg)(e)) {
        case "docx":
          return "document"
        case "pptx":
          return "presentation"
        case "xlsx":
          return "spreadsheet"
        case "csv":
        case "ipynb":
        case "pdf":
        case "tex":
        case "tsv":
        case null:
          return null
      }
    }
    a.d(
      t,
      {},
      {
        KA: function (e, t) {
          return t.find((t) => "file" === t.type && (0, i.Q0)(t.path) === e.fileName && c(t.path) === e.kind) ?? null
        },
        OH: {
          canvas: "granola_whiteboard",
          document: "granola_document",
          presentation: "granola_presentation",
          spreadsheet: "granola_workbook",
        },
        Ox: s,
        bo: function (e, t = 0, a = e.content.size) {
          let n = []
          return (
            e.nodesBetween(t, a, (t, a) => {
              let r = t.marks.find((e) => "link" === e.type.name),
                l = r?.attrs.href
              if (!t.isText || null == t.text || "string" != typeof l) return
              let i = n.at(-1)
              i?.to === a && r?.isInSet(e.nodeAt(i.from)?.marks ?? [])
                ? ((i.to += t.nodeSize), (i.text += t.text))
                : n.push({ from: a, to: a + t.nodeSize, href: l, text: t.text })
            }),
            n.flatMap(({ from: e, to: t, href: a, text: n }) => {
              let r = s(a, n)
              return null == r ? [] : [{ from: e, to: t, href: a, text: n, reference: r }]
            })
          )
        },
        qC: c,
        yR: function (e) {
          let t = /^artifact-failed:(document|presentation|spreadsheet|canvas)#[0-9a-f-]+$/u.exec(e)?.[1]
          return "document" === t || "presentation" === t || "spreadsheet" === t || "canvas" === t ? t : null
        },
      },
    )
  },
  UjNE(e, t, a) {
    a.d(t, { SpaceUpgradeLanding: () => y })
    var n = a("ABep"),
      r = a("QosV")
    let l = (0, a("ESTr").a)({
      name: "space-light-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 2.451172, y: 2.433228, width: 27.116211, height: 27.121338 },
        visualBounds: { x: 2.451172, y: 2.433228, width: 27.116211, height: 27.121338 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.451172, y: 2.433228, width: 27.116211, height: 27.121338 },
        center: { x: 16.009278, y: 15.993897 },
        insets: { top: 2.433228, right: 2.432617, bottom: 2.445434, left: 2.451172 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 16.009278, y: 15.993897 },
          foreground: { x: 16.009278, y: 15.993897 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0283 2.43323C16.4217 2.43323 16.8216 2.48416 17.2197 2.59079L26.162 4.9863C28.2141 5.53626 29.5676 7.39286 29.5676 9.42109C29.5676 9.81446 29.5167 10.2143 29.4101 10.6123L26.4911 21.5039C25.952 23.5161 24.1583 24.8543 22.1786 24.9072C21.94 26.8744 20.3527 28.4737 18.2997 28.6533L8.18938 29.5381C8.06248 29.5492 7.93639 29.5546 7.81135 29.5546C5.61476 29.5546 3.74402 27.8747 3.54876 25.6455L2.4677 13.2881C2.45661 13.1612 2.45117 13.0352 2.45117 12.9102C2.45117 10.7136 4.13198 8.84276 6.36126 8.64743L10.9491 8.24607L11.5947 5.83786C12.1448 3.78621 14.0005 2.43323 16.0283 2.43323ZM4.25207 12.9118C4.25207 12.9843 4.25522 13.0573 4.26165 13.1308L5.3427 25.4883C5.456 26.7806 6.54003 27.7546 7.8134 27.7546C7.88575 27.7546 7.95872 27.7515 8.03215 27.7451L18.1435 26.8603C19.4359 26.7471 20.4099 25.6631 20.4099 24.3897C20.4099 24.3173 20.4067 24.2443 20.4003 24.1709L19.7138 16.3203L16.412 16.6093C16.3063 16.6186 16.2013 16.6231 16.0971 16.6231C14.2678 16.6231 12.7093 15.2237 12.5468 13.3672L12.247 9.93943L6.51848 10.4414C5.22609 10.5546 4.25207 11.6384 4.25207 12.9118ZM16.0296 4.23332C14.7964 4.23332 13.6676 5.05616 13.3329 6.30368L12.8573 8.07907L13.9531 7.98337C14.0775 7.9725 14.2018 7.96711 14.3258 7.96711C15.329 7.96711 16.3056 8.31989 17.08 8.9697L19.8193 11.2685C20.6893 11.9986 21.2339 13.0443 21.3329 14.1758L22.1132 23.1084C23.3248 23.0836 24.4239 22.2657 24.7529 21.0381L27.6718 10.1465C27.7366 9.90456 27.7675 9.66156 27.7675 9.42248C27.7675 8.18906 26.9441 7.06005 25.6962 6.72556L16.7538 4.32907C16.5119 4.26427 16.2688 4.23332 16.0296 4.23332ZM14.1093 9.77732L14.0409 9.78318L14.3407 13.2109C14.4214 14.1303 15.193 14.8232 16.0989 14.8232C16.1505 14.8232 16.2025 14.821 16.2548 14.8164L19.5566 14.5273L19.54 14.333C19.4826 13.6769 19.1665 13.0707 18.662 12.6474L15.9218 10.3476C15.4731 9.97141 14.9074 9.76784 14.3263 9.76784C14.2541 9.76784 14.1817 9.77098 14.1093 9.77732Z" fill="currentColor"/>',
    })
    var i = a("qmMi"),
      o = a("oyxz"),
      s = a("Ywss"),
      c = a("SPnB"),
      d = a("aTcy"),
      u = a("Sm6l"),
      p = a("HOLv"),
      g = a("GEHh"),
      m = a("zOE4"),
      h = a("VilR"),
      f = a("LjYy")
    let v = {
      invitation: {
        title: (0, n.jsx)(o.A, {
          id: "pages.upgradeLanding.page.title",
          defaultMessage: "View this file with ChatGPT Plus",
        }),
        description: (0, n.jsx)(o.A, {
          id: "pages.upgradeLanding.page.description",
          defaultMessage: "Upgrade to ChatGPT Plus to view this file in Space",
        }),
      },
      space: {
        title: (0, n.jsx)(o.A, {
          id: "pages.upgradeLanding.space.title",
          defaultMessage: "Use Space with ChatGPT Plus",
        }),
        description: (0, n.jsx)(o.A, {
          id: "pages.upgradeLanding.space.description",
          defaultMessage: "Create and collaborate on pages, slides, and files",
        }),
      },
    }
    function y(e) {
      let t,
        a = (0, r.c)(5),
        { currentPlan: l, pageId: i } = e
      if (i?.startsWith("page_")) {
        let e
        return (
          a[0] !== l || a[1] !== i
            ? ((e = (0, n.jsx)(b, { currentPlan: l, pageId: i })), (a[0] = l), (a[1] = i), (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      return (
        a[3] !== l ? ((t = (0, n.jsx)(x, { currentPlan: l, kind: "space" })), (a[3] = l), (a[4] = t)) : (t = a[4]),
        t
      )
    }
    function b(e) {
      let t,
        a,
        l,
        o,
        d,
        u = (0, r.c)(16),
        { pageId: p, currentPlan: g } = e,
        { search: f } = (0, s.zy)(),
        v = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
        y = (0, i.Ul)(c.chatGptAuthenticatedUserId$),
        b = (0, i.Ul)(c.cj) && null != v && null != y,
        C = v ?? "",
        w = y ?? ""
      ;(u[0] !== p ? ((t = { kind: "page", id: p }), (u[0] = p), (u[1] = t)) : (t = u[1]),
        u[2] !== f ? ((a = new URLSearchParams(f).get("invitation_id")), (u[2] = f), (u[3] = a)) : (a = u[3]),
        u[4] !== C || u[5] !== w || u[6] !== t || u[7] !== a
          ? ((l = { accountId: C, userId: w, target: t, invitationId: a }),
            (u[4] = C),
            (u[5] = w),
            (u[6] = t),
            (u[7] = a),
            (u[8] = l))
          : (l = u[8]),
        u[9] !== b ? ((o = { enabled: b }), (u[9] = b), (u[10] = o)) : (o = u[10]))
      let { data: I, isPending: j, isError: _, dataUpdatedAt: A } = (0, i._U)(h.x, l, o)
      if (!b || j) {
        let e
        return (
          u[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(m.LoadingPage, { fillParent: !0 })), (u[11] = e))
            : (e = u[11]),
          e
        )
      }
      if (
        _ ||
        null == I ||
        ("pending" !== I.status && "accepted" !== I.status) ||
        (null != I.expires_at && Date.parse(I.expires_at) <= A)
      ) {
        let e
        return (
          u[12] !== g
            ? ((e = (0, n.jsx)(x, { currentPlan: g, kind: "space" })), (u[12] = g), (u[13] = e))
            : (e = u[13]),
          e
        )
      }
      return (
        u[14] !== g
          ? ((d = (0, n.jsx)(x, { currentPlan: g, kind: "invitation" })), (u[14] = g), (u[15] = d))
          : (d = u[15]),
        d
      )
    }
    function x(e) {
      let t,
        a,
        i,
        s,
        c,
        d,
        m,
        h,
        y = (0, r.c)(18),
        { currentPlan: b, kind: x } = e,
        w = (0, g.j)(),
        I = v[x]
      return (
        y[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(p.I, { asset: l, className: "shrink-0 text-tertiary" })), (y[0] = t))
          : (t = y[0]),
        y[1] !== I.title
          ? ((a = (0, n.jsx)("h1", {
              className: "text-heading-sm leading-[26px] font-[590] tracking-[-0.45px] text-default",
              children: I.title,
            })),
            (y[1] = I.title),
            (y[2] = a))
          : (a = y[2]),
        y[3] !== I.description
          ? ((i = (0, n.jsx)("p", { className: "text-form-body text-secondary", children: I.description })),
            (y[3] = I.description),
            (y[4] = i))
          : (i = y[4]),
        y[5] !== a || y[6] !== i
          ? ((s = (0, n.jsxs)("div", {
              className: "flex flex-col items-center gap-3",
              children: [t, (0, n.jsxs)("div", { className: "flex flex-col items-center gap-1", children: [a, i] })],
            })),
            (y[5] = a),
            (y[6] = i),
            (y[7] = s))
          : (s = y[7]),
        y[8] !== b || y[9] !== x || y[10] !== w
          ? ((c = () =>
              w({
                currentPlan: b,
                targetPlan: f.x.PLUS,
                getPricingUrl: C,
                source: "space" === x ? "space_upgrade" : "shared_page_upgrade",
              })),
            (y[8] = b),
            (y[9] = x),
            (y[10] = w),
            (y[11] = c))
          : (c = y[11]),
        y[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)("span", {
              className: "text-form-body font-[510]",
              children: (0, n.jsx)(o.A, { id: "pages.upgradeLanding.action", defaultMessage: "Upgrade to Plus" }),
            })),
            (y[12] = d))
          : (d = y[12]),
        y[13] !== c
          ? ((m = (0, n.jsx)(u.$, { color: "primary", size: "dialog", onClick: c, children: d })),
            (y[13] = c),
            (y[14] = m))
          : (m = y[14]),
        y[15] !== s || y[16] !== m
          ? ((h = (0, n.jsx)("div", {
              className:
                "flex min-h-[var(--height-token-empty-state-page)] w-full flex-1 flex-col items-center justify-center px-3 py-6 select-none",
              children: (0, n.jsxs)("div", {
                className: "flex max-w-xl flex-col items-center gap-4 text-center",
                children: [s, m],
              }),
            })),
            (y[15] = s),
            (y[16] = m),
            (y[17] = h))
          : (h = y[17]),
        h
      )
    }
    function C() {
      return (0, d.LO)(f.x.PLUS)
    }
  },
  YCKz(e, t, a) {
    var n = a("qmMi"),
      r = a("zd8w"),
      l = a("OWtl")
    let i = (0, r.createContext)(null),
      o = (0, r.createContext)(null),
      s = (0, r.createContext)(null),
      c = (0, n.bD)(l.u, (e) => null, void 0, { autoDispose: !0 }),
      d = (0, n.bD)(l.u, (e) => !1, void 0, { autoDispose: !0 }),
      u = (0, n.bD)(l.u, (e) => null == e, void 0, { autoDispose: !0 })
    a.d(t, {}, { Ao: s, HE: i, IL: c, Qi: o, hM: u, mE: d })
  },
  sjCL(e, t, a) {
    var n = a("qmMi"),
      r = a("eFn4"),
      l = a("njX7"),
      i = a("u4MG"),
      o = a("rPIX"),
      s = a("chkj"),
      c = a("T8X0"),
      d = a("gLQa"),
      u = a("WVuR"),
      p = a("OWtl"),
      g = a("o4oB"),
      m = a("tSEg"),
      h = a("ndjw"),
      f = a("qixt"),
      v = a("eviP"),
      y = a("YF6h")
    let b = (0, n.un)(p.u, ({ get: e }) => e(f.e2)),
      x = (0, n.un)(p.u, ({ get: e }) => "chat" !== e(c.uI)),
      C = (0, n.i1)(p.u, (e, { get: t }) => {
        let a = null
        null != e && (a = (0, i.w7)(e.projectId) ? e.projectId : ((0, d._z)(e.projectId, t(h.Gv), t(u.d)) ?? null))
        let n = t(s.C4, {
          enforceAccess: (0, c.bA)({ windowType: "electron", workModeEnabled: !0 }),
          homeComposerMode: "work",
          routeProjectId: a,
          selectedChatGptProjectId: a,
          selectedWorkProject: e,
        })
        return { projectId: a, runLocation: n, useAsbDirect: t(l.$) && "cloud" === n.effectiveLocation && null == a }
      }),
      w = (0, n.i1)(p.u, (e, { get: t }) => {
        if ("dot" === e) return {}
        if ("chatgpt" === e) return { backend: "chatgpt" }
        if (!t(b)) return {}
        let a = t(C, null)
        return a.useAsbDirect
          ? { hostId: "local" }
          : "cloud" === a.runLocation.effectiveLocation
            ? { backend: "chatgpt" }
            : {}
      }),
      I = (0, n.i1)(m.GD, ({ accountId: e, pageId: t }, { get: a, scope: n }) => {
        let l = a(v.q),
          i = l?.getSession(n)
        if ((null != l && n.value.persistentWorkspace?.key !== "/space") || i?.conversationId != null) return !1
        if (
          (n.value.persistentWorkspace?.key === "/space" && a(y.wR, { accountId: e, pageId: t })) ||
          (null != e && null != (0, y.Cs)(n, e, t, "tpp", a(y.Y2)) && a(o.Mg)?.hasConversation)
        )
          return !0
        if (!a(r.d0)) return a(r.rM)
        if (!a(b)) return !1
        let s = a(C, null == i ? null : a(g.G, i.clientThreadId))
        return "cloud" === s.runLocation.effectiveLocation && !s.useAsbDirect
      })
    a.d(t, {}, { Oh: I, VF: x, _9: b, fV: w, ur: C })
  },
  r1wd(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      i = a("qmMi"),
      o = a("X3K1"),
      s = a("SCmN"),
      c = a("WP5H"),
      d = a("Ih0z"),
      u = a("tv8P"),
      p = a("kTTh"),
      g = a("OMIV"),
      m = a("fAHU"),
      h = a("i9us"),
      f = a("nkrL"),
      v = a("GhgU"),
      y = a("Jif0"),
      b = a("fQMn")
    function x(e) {
      let t,
        a,
        g,
        h,
        v,
        x,
        w,
        I,
        j,
        _,
        A,
        S,
        k,
        P = (0, r.c)(40),
        { appearance: T, pageId: M, space: L, spaceId: E, title: N, symbol: U } = e
      P[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (P[0] = t)) : (t = P[0])
      let { data: F } = (0, i._U)(u.spaceQuery$, E ?? "", t),
        D = L ?? F,
        O = M ?? D?.root_page_id ?? "",
        V = (0, i._U)(u.loadedSpacePageMetadata$, O)
      P[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { enabled: !1 }), (P[1] = a)) : (a = P[1])
      let z = (0, i._U)(f.GC, O, a),
        $ = (0, i._U)(s.AR, O),
        B = D?.id ?? E
      ;(P[2] !== B ? ((g = { spaceId: B }), (P[2] = B), (P[3] = g)) : (g = P[3]),
        P[4] === Symbol.for("react.memo_cache_sentinel") ? ((h = { enabled: !1 }), (P[4] = h)) : (h = P[4]))
      let q = (0, i._U)(d.V_, g, h),
        R = T ?? q,
        G = null != D || null != E || null != T,
        H = null == V ? (D?.symbol ?? U ?? null) : (V.symbol ?? null)
      if (G && null == H) {
        let e
        ;(P[5] !== R ? ((e = (0, d.rL)(R)), (P[5] = R), (P[6] = e)) : (e = P[6]), (H = e))
      }
      let W = void 0 === z ? V?.title : (z ?? ""),
        K = null == D ? (W ?? N) : (N ?? D.name)
      if (!G && null == H && null != K) {
        let e
        P[7] !== K ? ((e = (0, p.O)(K)), (P[7] = K), (P[8] = e)) : (e = P[8])
        let t = e
        if (((K = t.title), null != t.emoji)) {
          let e
          ;(P[9] !== t.emoji ? ((e = { kind: "emoji", value: t.emoji }), (P[9] = t.emoji), (P[10] = e)) : (e = P[10]),
            (H = e))
        }
      }
      $ && !G && null == H && (H = c.x)
      let Z = null == K,
        Q = D?.id ?? E,
        X = V?.document_type,
        Y = V?.namespace,
        J = R?.theme
      P[11] !== G || P[12] !== H || P[13] !== X || P[14] !== Y || P[15] !== J
        ? ((v = (0, n.jsx)(b.S, {
            disabled: !0,
            legacyEmoji: null,
            documentType: X,
            namespace: Y,
            symbol: H,
            space: G,
            spaceTheme: J,
            onChange: C,
          })),
          (P[11] = G),
          (P[12] = H),
          (P[13] = X),
          (P[14] = Y),
          (P[15] = J),
          (P[16] = v))
        : (v = P[16])
      let ee = Z && "w-64 max-w-full"
      P[17] !== ee ? ((x = (0, l.A)("relative min-w-0", ee)), (P[17] = ee), (P[18] = x)) : (x = P[18])
      let et = Z ? "invisible" : void 0,
        ea = Z || void 0
      return (
        P[19] !== K || P[20] !== Z
          ? ((w = Z ? "" : (K ?? "").replace(/[\r\n]+/g, " ")), (P[19] = K), (P[20] = Z), (P[21] = w))
          : (w = P[21]),
        P[22] !== w
          ? ((I = (0, n.jsx)(y.G, { disabled: !0, readOnly: !0, value: w })), (P[22] = w), (P[23] = I))
          : (I = P[23]),
        P[24] !== et || P[25] !== ea || P[26] !== I
          ? ((j = (0, n.jsx)("div", { className: et, "aria-hidden": ea, children: I })),
            (P[24] = et),
            (P[25] = ea),
            (P[26] = I),
            (P[27] = j))
          : (j = P[27]),
        P[28] !== Z
          ? ((_ = Z
              ? (0, n.jsx)("div", {
                  className: "absolute inset-0 flex items-center",
                  children: (0, n.jsx)(o.X, { className: "w-full", size: "lg", variant: "chatgpt-project" }),
                })
              : null),
            (P[28] = Z),
            (P[29] = _))
          : (_ = P[29]),
        P[30] !== x || P[31] !== j || P[32] !== _
          ? ((A = (0, n.jsxs)("div", { className: x, children: [j, _] })),
            (P[30] = x),
            (P[31] = j),
            (P[32] = _),
            (P[33] = A))
          : (A = P[33]),
        P[34] !== v || P[35] !== A
          ? ((S = (0, n.jsxs)("div", {
              className: "relative flex flex-col gap-2",
              "data-page-title": !0,
              children: [v, A],
            })),
            (P[34] = v),
            (P[35] = A),
            (P[36] = S))
          : (S = P[36]),
        P[37] !== S || P[38] !== Q
          ? ((k = (0, n.jsx)(m.Z, { rootSpaceId: Q, children: S })), (P[37] = S), (P[38] = Q), (P[39] = k))
          : (k = P[39]),
        k
      )
    }
    function C() {}
    a.d(
      t,
      {},
      {
        S: x,
        W: function (e) {
          let t,
            a,
            o,
            s,
            c,
            d,
            p,
            m,
            f,
            y = (0, r.c)(29),
            { pageId: b, spaceId: C, title: w, symbol: I, headerOverlay: j, showComposer: _ } = e,
            A = void 0 !== _ && _
          y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (y[0] = t)) : (t = y[0])
          let { data: S } = (0, i.Ul)(u.spacesQuery$, t),
            k = (0, i._U)(g.JW, "2163293173")
          y[1] !== b || y[2] !== C || y[3] !== S?.items || y[4] !== S?.items.find
            ? ((a = S?.items.find((e) => (null == b ? e.id === C : e.root_page_id === b))),
              (y[1] = b),
              (y[2] = C),
              (y[3] = S?.items),
              (y[4] = S?.items.find),
              (y[5] = a))
            : (a = y[5])
          let P = a,
            T = k ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable",
            M = void 0 !== j && j && "viewer-header-scroll-mask pt-[var(--viewer-header-height)]"
          ;(y[6] !== T || y[7] !== M
            ? ((o = (0, l.A)("min-h-0 flex-1 scrollbar-on-hover overflow-y-auto", T, M)),
              (y[6] = T),
              (y[7] = M),
              (y[8] = o))
            : (o = y[8]),
            y[9] !== b || y[10] !== P || y[11] !== I || y[12] !== w
              ? ((s = (0, n.jsx)(x, { pageId: b, space: P, title: w, symbol: I })),
                (y[9] = b),
                (y[10] = P),
                (y[11] = I),
                (y[12] = w),
                (y[13] = s))
              : (s = y[13]))
          let L = b ?? P?.root_page_id ?? C ?? ""
          return (
            y[14] !== L ? ((c = (0, n.jsx)(v.VI, { pageId: L })), (y[14] = L), (y[15] = c)) : (c = y[15]),
            y[16] !== c || y[17] !== s
              ? ((d = (0, n.jsx)(v.DV, { heading: s, children: c })), (y[16] = c), (y[17] = s), (y[18] = d))
              : (d = y[18]),
            y[19] !== d || y[20] !== o
              ? ((p = (0, n.jsx)("div", { className: o, children: d })), (y[19] = d), (y[20] = o), (y[21] = p))
              : (p = y[21]),
            y[22] !== b || y[23] !== A || y[24] !== P?.root_page_id
              ? ((m = A && (0, n.jsx)(h.O, { pageId: b ?? P?.root_page_id })),
                (y[22] = b),
                (y[23] = A),
                (y[24] = P?.root_page_id),
                (y[25] = m))
              : (m = y[25]),
            y[26] !== p || y[27] !== m
              ? ((f = (0, n.jsxs)(n.Fragment, { children: [p, m] })), (y[26] = p), (y[27] = m), (y[28] = f))
              : (f = y[28]),
            f
          )
        },
      },
    )
  },
  u3mM(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("on57"),
      i = a("qmMi"),
      o = a("Wf1j"),
      s = a("ChYf"),
      c = a("E8Sp"),
      d = a("iQF0"),
      u = a("bVeK"),
      p = a("UxN3"),
      g = a("zOE4"),
      m = a("TIbG"),
      h = a("rpnz"),
      f = a("QJmH"),
      v = a("e1xH"),
      y = a("r9ga"),
      b = a("hZSj"),
      x = a("CNwL"),
      C = a("tv8P"),
      w = a("AQ4m"),
      I = a("cXiB"),
      j = a("tSEg"),
      _ = a("j9wQ"),
      A = a("RiLw"),
      S = a("BuCo"),
      k = a("lEF0"),
      P = a("JHb3"),
      T = a("NnV7"),
      M = a("yo35"),
      L = a("Wj4L"),
      E = a("r1wd"),
      N = a("nkrL"),
      U = a("zz9z"),
      F = a("U90K"),
      D = a("JyrC"),
      O = a("UMbd"),
      V = a("gaGc"),
      z = a("puTD")
    function $(e) {
      let t,
        a,
        V,
        $,
        q,
        R,
        G,
        H,
        W,
        K,
        Z,
        Q,
        X,
        Y,
        J,
        ee,
        et,
        ea,
        en,
        er,
        el,
        ei,
        eo = (0, r.c)(173),
        es = (0, i.gh)(j.GD),
        ec = (0, o.A)(),
        ed = (0, i.Ul)(v.eK)
      eo[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { name: "automations.cloud" }), (eo[0] = t))
        : (t = eo[0])
      let eu = (0, i._U)(ed && !e.viewOnly ? s.G : null, t),
        ep = (0, i._U)(C.loadedSpacePageMetadata$, e.pageId)
      eo[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { enabled: !1 }), (eo[1] = a)) : (a = eo[1])
      let eg = (0, i._U)(N.GC, e.pageId, a),
        em = ep?.access.can_read === !0,
        eh = ep?.access.can_write === !0,
        ef = null == ep ? e.pagePreview?.title : ep.title,
        ev = void 0 === eg ? ef : (eg ?? "")
      eo[2] !== ep || eo[3] !== e.documentType || eo[4] !== e.pagePreview?.documentType
        ? ((V = null == ep ? (e.documentType ?? e.pagePreview?.documentType) : (0, L.mW)(ep)),
          (eo[2] = ep),
          (eo[3] = e.documentType),
          (eo[4] = e.pagePreview?.documentType),
          (eo[5] = V))
        : (V = eo[5])
      let ey = V
      eo[6] !== ey ? (($ = (0, L.g_)(ey)), (eo[6] = ey), (eo[7] = $)) : ($ = eo[7])
      let eb = $,
        ex = "granola_workbook" === ey ? "spreadsheet" : "presentation",
        eC = null != ep && null == ep.site_project_id && (null == ey || "page" === ey || "unsupported" === ey),
        ew = eC || (null == ep && e.pagePreview?.textPageCard != null),
        eI = null == e.onRetry && em && eC && "page" === ey,
        ej = (0, I.Pp)(
          e,
          null == e.documentControlsContainers &&
            null == e.onRetry &&
            ep?.site_project_id == null &&
            (null == ey || "page" === ey || eb) &&
            ("side-panel" === e.surface || null != ev),
        ),
        e_ = "toolbar" !== ej
      eo[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = { name: "chatgpt.quick-chat" }), (eo[8] = q))
        : (q = eo[8])
      let { isCapable: eA } = (0, i._U)(s.G, q),
        eS = null == e.surface || "route" === e.surface
      eo[9] !== eS
        ? ((R = (0, n.jsx)(g.LoadingPage, { fillParent: !0, delay: !1, routeFallback: eS })),
          (eo[9] = eS),
          (eo[10] = R))
        : (R = eo[10])
      let ek = R,
        eP = e.viewOnly || null != e.onRetry ? void 0 : e.loadingFallback
      if (e.viewOnly || null != eP) {
        let t,
          a = eP ?? ek,
          r = !1 !== e.isActive && !1 !== e.isVisible,
          l = null != e.onRetry,
          i = e.onRetry ?? e.retryLoading,
          o = null != eP && e.readableLoadingFallback
        return (
          eo[11] !== ey ||
          eo[12] !== a ||
          eo[13] !== e.allowReload ||
          eo[14] !== e.error ||
          eo[15] !== e.experience ||
          eo[16] !== e.loadingClock ||
          eo[17] !== e.pageId ||
          eo[18] !== e.session ||
          eo[19] !== o ||
          eo[20] !== r ||
          eo[21] !== l ||
          eo[22] !== i
            ? ((t = (0, n.jsx)(
                M.q,
                {
                  loadingClock: e.loadingClock,
                  session: e.session,
                  visible: r,
                  documentType: ey,
                  pageId: e.pageId,
                  failed: l,
                  error: e.error,
                  onRetry: i,
                  allowReload: e.allowReload,
                  keepContent: o,
                  experience: e.experience,
                  children: a,
                },
                e.pageId,
              )),
              (eo[11] = ey),
              (eo[12] = a),
              (eo[13] = e.allowReload),
              (eo[14] = e.error),
              (eo[15] = e.experience),
              (eo[16] = e.loadingClock),
              (eo[17] = e.pageId),
              (eo[18] = e.session),
              (eo[19] = o),
              (eo[20] = r),
              (eo[21] = l),
              (eo[22] = i),
              (eo[23] = t))
            : (t = eo[23]),
          t
        )
      }
      let eT = "inline" === e.surface
      eo[24] !== eT || eo[25] !== eb || eo[26] !== e.surface
        ? ((G = !eT && eb && ("side-panel" === e.surface || !(0, b.x)("/space/:pageId"))),
          (eo[24] = eT),
          (eo[25] = eb),
          (eo[26] = e.surface),
          (eo[27] = G))
        : (G = eo[27])
      let eM = G,
        eL =
          "side-panel" === e.surface &&
          null != e.panelTabId &&
          !0 === e.recoverWorkspace &&
          null == e.onRetry &&
          (null == ey || "page" === ey) &&
          ep?.site_project_id == null,
        eE = eL && null != e.explorer,
        eN = null == e.onRetry ? e.pagePreview?.parent : void 0,
        eU = eT ? void 0 : ey
      ;(eo[28] !== eT || eo[29] !== e || eo[30] !== es
        ? ((H = (t) => {
            eT || "side-panel" === e.surface ? e.onOpenPage(t) : (0, c.oo)(es, (0, y.mI)(es, t))
          }),
          (eo[28] = eT),
          (eo[29] = e),
          (eo[30] = es),
          (eo[31] = H))
        : (H = eo[31]),
        eo[32] !== e.explorer ||
        eo[33] !== e.pageId ||
        eo[34] !== e.space ||
        eo[35] !== H ||
        eo[36] !== eN ||
        eo[37] !== eU ||
        eo[38] !== ev
          ? ((W = {
              loadAncestry: !1,
              explorer: e.explorer,
              pageId: e.pageId,
              title: ev,
              initialParent: eN,
              space: e.space,
              documentType: eU,
              onOpenPage: H,
            }),
            (eo[32] = e.explorer),
            (eo[33] = e.pageId),
            (eo[34] = e.space),
            (eo[35] = H),
            (eo[36] = eN),
            (eo[37] = eU),
            (eo[38] = ev),
            (eo[39] = W))
          : (W = eo[39]))
      let eF = W
      eo[40] !== eF
        ? ((K = (0, n.jsx)(U.V, { ...eF, alwaysShowTitle: !0, hierarchyMenu: !0 })), (eo[40] = eF), (eo[41] = K))
        : (K = eo[41])
      let eD = K,
        eO = !eT && !1,
        eV = !eT && !eE && (null == ey || "page" === ey)
      ;(eo[42] !== eT || eo[43] !== ep || eo[44] !== eM
        ? ((Z = !eT && !eM && (0, L.qt)(ep)), (eo[42] = eT), (eo[43] = ep), (eo[44] = eM), (eo[45] = Z))
        : (Z = eo[45]),
        eo[46] !== ec || eo[47] !== ex || eo[48] !== eM || eo[49] !== eL || eo[50] !== ev || eo[51] !== eE
          ? ((Q =
              eM || eL
                ? {
                    ariaLabel: (0, T.S8)(ec, ev),
                    anchorExplorer: eE,
                    icon: eM ? (0, n.jsx)(_.Sm, { fileType: ex }) : void 0,
                  }
                : void 0),
            (eo[46] = ec),
            (eo[47] = ex),
            (eo[48] = eM),
            (eo[49] = eL),
            (eo[50] = ev),
            (eo[51] = eE),
            (eo[52] = Q))
          : (Q = eo[52]),
        eo[53] !== eF || eo[54] !== eO || eo[55] !== eV || eo[56] !== Z || eo[57] !== Q || eo[58] !== e_
          ? ((X = (0, n.jsx)(U.V, {
              inTitlebar: e_,
              ...eF,
              alwaysShowTitle: eO,
              hierarchyMenu: eV,
              isLeaf: Z,
              menu: Q,
            })),
            (eo[53] = eF),
            (eo[54] = eO),
            (eo[55] = eV),
            (eo[56] = Z),
            (eo[57] = Q),
            (eo[58] = e_),
            (eo[59] = X))
          : (X = eo[59]))
      let ez = X
      if (eT) {
        let t,
          a,
          r = ev ?? "",
          l = ep?.symbol,
          i = ep?.document_type
        ;(eo[60] !== e ? ((t = () => e.onOpenPage(e.pageId)), (eo[60] = e), (eo[61] = t)) : (t = eo[61]),
          eo[62] !== ez ||
          eo[63] !== e.onSelectInlineTitle ||
          eo[64] !== e.pageId ||
          eo[65] !== r ||
          eo[66] !== l ||
          eo[67] !== i ||
          eo[68] !== t
            ? ((a = (0, n.jsx)(S.a, {
                pageId: e.pageId,
                onSelect: e.onSelectInlineTitle,
                title: r,
                symbol: l,
                documentType: i,
                navigation: ez,
                people: null,
                overflow: null,
                onExpand: t,
              })),
              (eo[62] = ez),
              (eo[63] = e.onSelectInlineTitle),
              (eo[64] = e.pageId),
              (eo[65] = r),
              (eo[66] = l),
              (eo[67] = i),
              (eo[68] = t),
              (eo[69] = a))
            : (a = eo[69]),
          (Y = a))
      } else if (eM) {
        let t,
          a,
          r,
          l,
          i = "presentation" === ex,
          o = "spreadsheet" === ex
        eo[70] !== ep || eo[71] !== e.pageId
          ? ((t = null == ep ? (0, h.sD)(e.pageId) : ep.access.can_write),
            (eo[70] = ep),
            (eo[71] = e.pageId),
            (eo[72] = t))
          : (t = eo[72])
        let s = "side-panel" !== e.surface || em ? e.onClose : void 0,
          c = e.panelTabId,
          u = ev ?? ""
        ;(eo[73] !== em || eo[74] !== e.onRetry
          ? ((a = null == e.onRetry && em ? (0, n.jsx)(P.M, { disabled: !0 }) : void 0),
            (eo[73] = em),
            (eo[74] = e.onRetry),
            (eo[75] = a))
          : (a = eo[75]),
          eo[76] !== ez ||
          eo[77] !== ex ||
          eo[78] !== ej ||
          eo[79] !== o ||
          eo[80] !== t ||
          eo[81] !== s ||
          eo[82] !== c ||
          eo[83] !== u ||
          eo[84] !== eD ||
          eo[85] !== a
            ? ((r = (0, n.jsx)(k.s, {
                titlePlacement: ej,
                groupDownloadWithPanels: !0,
                contentFade: o,
                kind: ex,
                canWrite: t,
                onClose: s,
                tabId: c,
                title: u,
                navigation: eD,
                actions: ez,
                controls: d.U,
                shareControl: a,
              })),
              (eo[76] = ez),
              (eo[77] = ex),
              (eo[78] = ej),
              (eo[79] = o),
              (eo[80] = t),
              (eo[81] = s),
              (eo[82] = c),
              (eo[83] = u),
              (eo[84] = eD),
              (eo[85] = a),
              (eo[86] = r))
            : (r = eo[86]),
          eo[87] !== ej || eo[88] !== e.surface || eo[89] !== i || eo[90] !== r
            ? ((l = (0, n.jsx)(D.Ix, {
                surface: e.surface,
                overlay: i,
                separator: !1,
                titlePlacement: ej,
                children: r,
              })),
              (eo[87] = ej),
              (eo[88] = e.surface),
              (eo[89] = i),
              (eo[90] = r),
              (eo[91] = l))
            : (l = eo[91]),
          (Y = l))
      } else {
        let t,
          a,
          r,
          l,
          i = null == ev && "side-panel" !== e.surface ? null : ez
        eo[92] !== eh || eo[93] !== eI
          ? ((t =
              eI && eh
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        "data-viewer-header-collapsible": !0,
                        "aria-busy": "true",
                        children: ["text", "image", "table"].map(B),
                      }),
                      (0, n.jsx)(O.G, { action: "insert", disabled: !0 }),
                    ],
                  })
                : null),
            (eo[92] = eh),
            (eo[93] = eI),
            (eo[94] = t))
          : (t = eo[94])
        let o = t
        eo[95] !== e.pageId ? ((a = (0, h.sD)(e.pageId)), (eo[95] = e.pageId), (eo[96] = a)) : (a = eo[96])
        let s = a
        eo[97] !== s || eo[98] !== ep || eo[99] !== e.pageId
          ? ((r = (0, L.rr)(ep)
              ? (0, n.jsx)(x.c, { decorative: !s, pageId: e.pageId, people: [], showPlaceholder: !0 })
              : void 0),
            (eo[97] = s),
            (eo[98] = ep),
            (eo[99] = e.pageId),
            (eo[100] = r))
          : (r = eo[100])
        let c = r
        ;(eo[101] !== em ||
        eo[102] !== eh ||
        eo[103] !== eu?.isCapable ||
        eo[104] !== ey ||
        eo[105] !== o ||
        eo[106] !== c ||
        eo[107] !== s ||
        eo[108] !== ep ||
        eo[109] !== i ||
        eo[110] !== ej ||
        eo[111] !== e.onClose ||
        eo[112] !== e.onRetry ||
        eo[113] !== e.pagePreview?.textPageCard ||
        eo[114] !== e.panelTabId ||
        eo[115] !== e.surface ||
        eo[116] !== eL ||
        eo[117] !== ew ||
        eo[118] !== eI ||
        eo[119] !== e_ ||
        eo[120] !== eD
          ? ((l = eL
              ? (0, n.jsx)(D.Ix, {
                  surface: "side-panel",
                  separator: !1,
                  children: (0, n.jsx)(F.D, {
                    density: "compact",
                    tabId: e.panelTabId,
                    titlePlacement: ej,
                    navigation: eD,
                    titleActions: i,
                    useTitleActions: !0,
                    actions: o,
                    sharing: null,
                  }),
                })
              : (0, n.jsx)(D.bJ, {
                  contentFade: ew,
                  overlay: !!e_ || (e.pagePreview?.textPageCard != null && !!ew) || void 0,
                  surface: e.surface,
                  tabId: e.panelTabId,
                  onClose: eI && "side-panel" !== e.surface ? void 0 : e.onClose,
                  separator: null != ep && "page" !== ey,
                  navigation: i,
                  titlePlacement: ej,
                  actions: o,
                  automations: eI && eh && eu?.isCapable ? (0, n.jsx)(m.V, { disabled: !0, "aria-busy": !0 }) : null,
                  comments: eI
                    ? (0, n.jsx)(_.DW, {
                        disabled: !0,
                        uniform: !0,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(p.b5, { icon: { 16: u.TmP, 20: u.izo } }),
                      })
                    : null,
                  supplementalActions: null,
                  sharing:
                    null == e.onRetry && em && (s && null != c ? c : (0, n.jsx)(A.c, { disabled: !0, facepile: c })),
                })),
            (eo[101] = em),
            (eo[102] = eh),
            (eo[103] = eu?.isCapable),
            (eo[104] = ey),
            (eo[105] = o),
            (eo[106] = c),
            (eo[107] = s),
            (eo[108] = ep),
            (eo[109] = i),
            (eo[110] = ej),
            (eo[111] = e.onClose),
            (eo[112] = e.onRetry),
            (eo[113] = e.pagePreview?.textPageCard),
            (eo[114] = e.panelTabId),
            (eo[115] = e.surface),
            (eo[116] = eL),
            (eo[117] = ew),
            (eo[118] = eI),
            (eo[119] = e_),
            (eo[120] = eD),
            (eo[121] = l))
          : (l = eo[121]),
          (Y = l))
      }
      let e$ = e.pageId,
        eB = e.loadingClock,
        eq = e.session,
        eR = !1 !== e.isActive && !1 !== e.isVisible,
        eG = e.pageId,
        eH = null != e.onRetry,
        eW = e.error,
        eK = e.onRetry ?? e.retryLoading,
        eZ = e.allowReload,
        eQ = e.experience,
        eX = ew && "inline" !== e.surface && e_ && z.A.PageTitlebarSingleRow
      eo[122] !== eX || !1 !== eo[123]
        ? ((J = (0, l.A)("relative flex h-full min-h-0 flex-col overflow-hidden", eX, !1)),
          (eo[122] = eX),
          (eo[123] = !1),
          (eo[124] = J))
        : (J = eo[124])
      let eY = ew || "granola_presentation" === ey
      eo[125] !== ej || eo[126] !== eY
        ? ((ee = (0, n.jsx)(w.Y, { placement: ej, scrollingDocument: eY })),
          (eo[125] = ej),
          (eo[126] = eY),
          (eo[127] = ee))
        : (ee = eo[127])
      let eJ = null == e.documentControlsContainers && Y
      ;(eo[128] !== ey ||
      eo[129] !== ec ||
      !1 !== eo[130] ||
      eo[131] !== ek ||
      eo[132] !== e.onRetry ||
      eo[133] !== e.surface ||
      eo[134] !== ew ||
      eo[135] !== e_
        ? ((et =
            null == e.onRetry &&
            !ew &&
            (0, n.jsx)("div", {
              className: "relative min-h-0 flex-1",
              role: "status",
              "aria-label": ec.formatMessage(
                {
                  id: "codex.space.page.surfaceLoading.byDocumentType",
                  defaultMessage:
                    "{documentType, select, granola_presentation {Loading slide} granola_workbook {Loading sheet} other {Loading page}}",
                },
                { documentType: ey ?? "page" },
              ),
              children: (0, n.jsx)("div", {
                className:
                  "side-panel" !== e.surface || e_ || "granola_presentation" !== ey
                    ? "absolute inset-0"
                    : "absolute inset-x-0 top-[var(--viewer-header-height)] bottom-0",
                children: ek,
              }),
            })),
          (eo[128] = ey),
          (eo[129] = ec),
          (eo[130] = !1),
          (eo[131] = ek),
          (eo[132] = e.onRetry),
          (eo[133] = e.surface),
          (eo[134] = ew),
          (eo[135] = e_),
          (eo[136] = et))
        : (et = eo[136]),
        eo[137] !== em ||
        eo[138] !== e.onRetry ||
        eo[139] !== e.pageId ||
        eo[140] !== e.pagePreview?.textPageCard?.symbol ||
        eo[141] !== e.space?.id ||
        eo[142] !== e.surface ||
        eo[143] !== eA ||
        eo[144] !== ew ||
        eo[145] !== ev
          ? ((ea =
              null == e.onRetry &&
              ew &&
              (0, n.jsx)(E.W, {
                headerOverlay: "inline" !== e.surface,
                pageId: e.pageId,
                title: ev,
                symbol: e.pagePreview?.textPageCard?.symbol,
                spaceId: e.space?.id,
                showComposer: em && (null == e.surface || "route" === e.surface) && eA,
              })),
            (eo[137] = em),
            (eo[138] = e.onRetry),
            (eo[139] = e.pageId),
            (eo[140] = e.pagePreview?.textPageCard?.symbol),
            (eo[141] = e.space?.id),
            (eo[142] = e.surface),
            (eo[143] = eA),
            (eo[144] = ew),
            (eo[145] = ev),
            (eo[146] = ea))
          : (ea = eo[146]),
        eo[147] !== e.explorer || !1 !== eo[148] || eo[149] !== et || eo[150] !== ea
          ? ((en = (0, n.jsxs)(f.w, { explorer: e.explorer, children: [!1, et, ea] })),
            (eo[147] = e.explorer),
            (eo[148] = !1),
            (eo[149] = et),
            (eo[150] = ea),
            (eo[151] = en))
          : (en = eo[151]),
        eo[152] !== J || eo[153] !== ee || eo[154] !== eJ || eo[155] !== en
          ? ((er = (0, n.jsxs)("section", { className: J, children: [ee, eJ, en] })),
            (eo[152] = J),
            (eo[153] = ee),
            (eo[154] = eJ),
            (eo[155] = en),
            (eo[156] = er))
          : (er = eo[156]),
        eo[157] !== ey ||
        eo[158] !== e.allowReload ||
        eo[159] !== e.error ||
        eo[160] !== e.experience ||
        eo[161] !== e.loadingClock ||
        eo[162] !== e.pageId ||
        eo[163] !== e.session ||
        eo[164] !== eR ||
        eo[165] !== eH ||
        eo[166] !== eK ||
        eo[167] !== er
          ? ((el = (0, n.jsx)(
              M.q,
              {
                loadingClock: eB,
                session: eq,
                visible: eR,
                documentType: ey,
                pageId: eG,
                failed: eH,
                error: eW,
                onRetry: eK,
                allowReload: eZ,
                experience: eQ,
                children: er,
              },
              e$,
            )),
            (eo[157] = ey),
            (eo[158] = e.allowReload),
            (eo[159] = e.error),
            (eo[160] = e.experience),
            (eo[161] = e.loadingClock),
            (eo[162] = e.pageId),
            (eo[163] = e.session),
            (eo[164] = eR),
            (eo[165] = eH),
            (eo[166] = eK),
            (eo[167] = er),
            (eo[168] = el))
          : (el = eo[168]))
      let e1 = el
      return (
        eo[169] !== e1 || eo[170] !== ey || eo[171] !== e
          ? ((ei = (0, n.jsx)(D.zl, { editor: e, documentType: ey, children: e1 })),
            (eo[169] = e1),
            (eo[170] = ey),
            (eo[171] = e),
            (eo[172] = ei))
          : (ei = eo[172]),
        ei
      )
    }
    function B(e) {
      return (0, n.jsx)(O.G, { action: e, disabled: !0 }, e)
    }
    a.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            a = (0, r.c)(5),
            l = e.host?.Pending,
            { stalled: i, restart: o } = (0, V.D)(
              null != l && null == e.onRetry && null != e.retryLoading,
              e.loadingClock,
            ),
            s = e.onRetry ?? (i ? e.retryLoading : void 0)
          return (
            a[0] !== l || a[1] !== e || a[2] !== o || a[3] !== s
              ? ((t =
                  null == l || null == e.host
                    ? (0, n.jsx)($, { ...e })
                    : (0, n.jsx)(l, {
                        host: e.host,
                        pageId: e.pageId,
                        onRetry:
                          null == s
                            ? void 0
                            : () => {
                                ;(o(), s())
                              },
                        error: e.error,
                        session: e.session,
                        visible: !1 !== e.isActive && !1 !== e.isVisible,
                        documentType: e.documentType ?? e.pagePreview?.documentType,
                      })),
                (a[0] = l),
                (a[1] = e),
                (a[2] = o),
                (a[3] = s),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  ZzDW(e, t, a) {
    a.d(t, { t: () => el })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      i = a("zd8w"),
      o = a("Ywss"),
      s = a("E8Sp"),
      c = a("jNL7"),
      d = a("SPnB"),
      u = a("EFj1"),
      p = a("e1xH"),
      g = a("r9ga"),
      m = a("hZSj"),
      h = a("uqg3"),
      f = a("A3W9"),
      v = a("tv8P"),
      y = a("atZq"),
      b = a("ioFt"),
      x = a("tSEg"),
      C = a("XXJV"),
      w = a("Wf1j"),
      I = a("oyxz"),
      j = a("nzx4"),
      _ = a("sX33"),
      A = a("OWtl"),
      S = a("j9wQ"),
      k = a("QBk8"),
      P = a("bVeK"),
      T = a("SGsN"),
      M = a("n8vi"),
      L = a("OoIX"),
      E = a("rpnz"),
      N = a("Wj4L"),
      U = a("Um9I"),
      F = a("TGoC"),
      D = a("S3TY"),
      O = a("tCIF"),
      V = a("MdGo"),
      z = a("urlk"),
      $ = a("WAoT"),
      B = a("NnV7"),
      q = a("yGJW"),
      R = a("V5ob"),
      G = a("on57"),
      H = a("BiIz"),
      W = a("pAw2")
    function K(e) {
      let t,
        a,
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        g = (0, r.c)(28),
        { children: m, focusActivePage: h, header: f, pageId: v, rootPageId: y, navigationSession: b } = e,
        x = void 0 !== h && h,
        C = (0, i.useRef)(null),
        w = (0, i.useRef)(!1),
        [I, j] = (0, i.useState)(!1)
      ;(g[0] !== x || g[1] !== v || g[2] !== y
        ? ((t = () => {
            let e = C.current
            if (null == e || null == v || (v === y && !x)) return
            let t = () => {
                ;(l.disconnect(),
                  i.disconnect(),
                  e.removeEventListener("wheel", a),
                  e.removeEventListener("pointerdown", a),
                  e.removeEventListener("keydown", a),
                  e.ownerDocument.removeEventListener("pointerdown", a),
                  e.ownerDocument.removeEventListener("keydown", a),
                  e.ownerDocument.removeEventListener("focusin", n))
              },
              a = () => {
                ;((w.current = !0), t())
              },
              n = (t) => {
                t.target instanceof Node && !e.contains(t.target) && a()
              },
              r = () => {
                let a = e.querySelector('[aria-current="page"]')
                if (
                  null == a ||
                  (x && !w.current && ((w.current = !0), a.focus({ preventScroll: !0 })), 0 === e.clientHeight)
                )
                  return
                let n = e.getBoundingClientRect()
                if (n.bottom <= 0) return
                let r = a.getBoundingClientRect(),
                  l = n.height / e.offsetHeight,
                  i = n.top + parseFloat(getComputedStyle(e).scrollPaddingTop) * l
                ;(r.top < i
                  ? (e.scrollTop = e.scrollTop + (r.top - i) / l)
                  : r.bottom > n.bottom && (e.scrollTop = e.scrollTop + (r.bottom - n.bottom) / l),
                  j(e.scrollTop > 0),
                  t())
              },
              l = new MutationObserver(r),
              i = new ResizeObserver(r)
            l.observe(e, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["aria-current"] })
            let o = e.closest("[data-radix-popper-content-wrapper]")
            return (
              null != o && l.observe(o, { attributes: !0, attributeFilter: ["style"] }),
              i.observe(e),
              null != e.firstElementChild && i.observe(e.firstElementChild),
              e.addEventListener("wheel", a, { passive: !0 }),
              e.addEventListener("pointerdown", a),
              e.addEventListener("keydown", a),
              x &&
                !w.current &&
                (e.ownerDocument.addEventListener("pointerdown", a),
                e.ownerDocument.addEventListener("keydown", a),
                e.ownerDocument.addEventListener("focusin", n)),
              r(),
              t
            )
          }),
          (g[0] = x),
          (g[1] = v),
          (g[2] = y),
          (g[3] = t))
        : (t = g[3]),
        g[4] !== x || g[5] !== b || g[6] !== v || g[7] !== y
          ? ((a = [x, b, v, y]), (g[4] = x), (g[5] = b), (g[6] = v), (g[7] = y), (g[8] = a))
          : (a = g[8]),
        (0, i.useLayoutEffect)(t, a))
      let _ = I
        ? "[--sidebar-scroll-header-spacing:--spacing(1)] [--sidebar-scroll-header-fade-distance:--spacing(4)] [--sidebar-scroll-header-fade-start:--spacing(1)]"
        : "[--sidebar-scroll-header-spacing:1px] [--sidebar-scroll-header-fade-distance:1px] [--sidebar-scroll-header-fade-start:0px]"
      ;(g[9] !== _ ? ((l = (0, G.A)("flex min-h-0 flex-1 flex-col", _)), (g[9] = _), (g[10] = l)) : (l = g[10]),
        g[11] !== f || g[12] !== b || g[13] !== I
          ? ((o =
              null != f && (0, n.jsx)(H.ic, { scrolled: I, surface: null != b ? "elevated" : "content", children: f })),
            (g[11] = f),
            (g[12] = b),
            (g[13] = I),
            (g[14] = o))
          : (o = g[14]))
      let A = null != f && "-mt-(--sidebar-scroll-header-spacing)"
      return (
        g[15] !== A
          ? ((s = (0, G.A)(
              "vertical-scroll-fade-mask scroll-pb-row-x relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto scroll-pt-[calc(var(--sidebar-scroll-header-mask-start)+var(--sidebar-scroll-header-mask-distance))] pb-row-x",
              A,
              W.A.headerFadeMask,
            )),
            (g[15] = A),
            (g[16] = s))
          : (s = g[16]),
        g[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (e) => j(e.currentTarget.scrollTop > 0)), (g[17] = c))
          : (c = g[17]),
        g[18] !== m
          ? ((d = (0, n.jsx)("div", { className: "px-row-x", children: m })), (g[18] = m), (g[19] = d))
          : (d = g[19]),
        g[20] !== b || g[21] !== d || g[22] !== s
          ? ((u = (0, n.jsx)("div", {
              ref: C,
              className: s,
              "data-navigation-session": b,
              "data-space-tree-scroll": !0,
              onScroll: c,
              children: d,
            })),
            (g[20] = b),
            (g[21] = d),
            (g[22] = s),
            (g[23] = u))
          : (u = g[23]),
        g[24] !== u || g[25] !== l || g[26] !== o
          ? ((p = (0, n.jsxs)("div", { className: l, children: [o, u] })),
            (g[24] = u),
            (g[25] = l),
            (g[26] = o),
            (g[27] = p))
          : (p = g[27]),
        p
      )
    }
    let Z = { "--height-token-row": "28px", "--padding-row-x": "0px" }
    function Q(e) {
      let t,
        a,
        o,
        c,
        d,
        u,
        p,
        g = (0, r.c)(31),
        {
          compact: m,
          pageId: h,
          knownRootPageId: f,
          onOpenPage: y,
          onCreatePage: b,
          onNavigate: x,
          navigationSession: C,
          focusActivePage: I,
        } = e,
        j = void 0 !== m && m,
        _ = (0, l.gh)(A.u),
        S = (0, i.useId)(),
        k = (0, w.A)(),
        T = (0, l.Ul)(v.spaceAccountId$),
        M = (0, l._U)(V.mv, h),
        L = "ready" === M.status ? M.page.page_id : void 0
      "loading" === M.status && (L = f)
      let N = { kind: "root", pageId: L ?? h },
        U = (0, l._U)(V.c, N),
        O = (e, t, a, n) => {
          ;(null != y
            ? y(e, t, a, L, n)
            : (0, i.startTransition)(() => {
                ;(0, s.oo)(_, `/space/${e}`)
              }),
            x?.())
        },
        B = {
          focusedPageId: "ready" === M.status ? h : L,
          selectedPageId: h,
          activePathKey: j ? JSON.stringify([S, h]) : void 0,
          includeArtifacts: !1,
          expandOnOpen: !0,
          expansionContext: {
            accountId: T,
            tree: `page-root:${L}`,
            kind: "page",
            navigationSession: C ?? "page-navigator",
          },
          indentLevel: 0,
          onOpenPage: O,
          onNavigate: x,
          renderRow: (e, t, a) =>
            (0, n.jsx)(ee, {
              ...t,
              trailingContent: j && t.isActive ? (0, n.jsx)(P.ALZ, {}) : t.trailingContent,
              expand: a,
              onOpenPage: O,
              onCreatePage: b,
            }),
        },
        q = j ? Z : void 0
      ;(g[0] !== k
        ? ((t = k.formatMessage({ id: "codex.pageExplorer.pagesNavigation", defaultMessage: "Pages" })),
          (g[0] = k),
          (g[1] = t))
        : (t = g[1]),
        g[2] !== j || g[3] !== h
          ? ((a = j && (0, n.jsx)(Y, { pageId: h })), (g[2] = j), (g[3] = h), (g[4] = a))
          : (a = g[4]),
        g[5] !== h || g[6] !== M.pageId || g[7] !== M.status
          ? ((o = "error" !== M.status && (0, n.jsx)(F.J, { pageId: "ready" === M.status ? h : M.pageId })),
            (g[5] = h),
            (g[6] = M.pageId),
            (g[7] = M.status),
            (g[8] = o))
          : (o = g[8]))
      let R = L,
        G =
          null != U &&
          null != L &&
          (0, n.jsxs)(
            D.x,
            {
              children: [
                (0, n.jsx)(z.q, { ...B, pageIds: [L], source: N, tree: U, expandable: !1 }),
                (0, n.jsx)(z.$, {
                  ...B,
                  pageId: L,
                  indentLevel: 1,
                  loadChildren: U.nodesById.get(L)?.hasChildren !== !1 && !(0, E.sD)(L),
                }),
              ],
            },
            L,
          ),
        H = "error" === M.status,
        W = "loading" === M.status && null == L
      return (
        g[9] !== M.pageId || g[10] !== M.status || g[11] !== _
          ? ((c = () => {
              "ready" !== M.status && _.query.fetch(v.spacePageAncestryQuery$, M.pageId).catch(X)
            }),
            (g[9] = M.pageId),
            (g[10] = M.status),
            (g[11] = _),
            (g[12] = c))
          : (c = g[12]),
        g[13] !== W || g[14] !== c || g[15] !== H
          ? ((d = (0, n.jsx)($.l, { indentLevel: 0, isError: H, isLoading: W, onRetry: c })),
            (g[13] = W),
            (g[14] = c),
            (g[15] = H),
            (g[16] = d))
          : (d = g[16]),
        g[17] !== K || g[18] !== I || g[19] !== C || g[20] !== h || g[21] !== d || g[22] !== R || g[23] !== G
          ? ((u = (0, n.jsxs)(K, {
              focusActivePage: I,
              pageId: h,
              rootPageId: R,
              navigationSession: C,
              children: [G, d],
            })),
            (g[17] = K),
            (g[18] = I),
            (g[19] = C),
            (g[20] = h),
            (g[21] = d),
            (g[22] = R),
            (g[23] = G),
            (g[24] = u))
          : (u = g[24]),
        g[25] !== u || g[26] !== q || g[27] !== t || g[28] !== a || g[29] !== o
          ? ((p = (0, n.jsxs)("nav", {
              className: "flex min-h-0 flex-1 flex-col sidebar-navigation select-none",
              style: q,
              "aria-label": t,
              children: [a, o, u],
            })),
            (g[25] = u),
            (g[26] = q),
            (g[27] = t),
            (g[28] = a),
            (g[29] = o),
            (g[30] = p))
          : (p = g[30]),
        p
      )
    }
    function X() {}
    function Y(e) {
      let t,
        a,
        i,
        o,
        s,
        c,
        d = (0, r.c)(18),
        { pageId: u } = e,
        p = (0, w.A)(),
        g = (0, l._U)(v.loadedSpacePageMetadata$, u)
      d[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (d[0] = t)) : (t = d[0])
      let m = (0, l._U)(v.spacePageContext$, u, t)
      if (null == g || !g.access.can_read) return null
      let h = m.space?.name
      if (d[1] !== m.ancestorPages || d[2] !== m.space?.root_page_id || d[3] !== h) {
        let e
        ;(d[5] !== m.space?.root_page_id
          ? ((e = (e) =>
              e.page_id !== m.space?.root_page_id && (!("access" in e) || (e.access.can_read && null == e.deleted_at))),
            (d[5] = m.space?.root_page_id),
            (d[6] = e))
          : (e = d[6]),
          (a = [h, ...m.ancestorPages.filter(e).map(J)].filter(Boolean)),
          (d[1] = m.ancestorPages),
          (d[2] = m.space?.root_page_id),
          (d[3] = h),
          (d[4] = a))
      } else a = d[4]
      let f = a.join(" / ")
      return (
        d[7] !== p || d[8] !== g.document_type || d[9] !== g.title
          ? ((i = g.title?.trim() || p.formatMessage((0, B._Y)(g.document_type))),
            (d[7] = p),
            (d[8] = g.document_type),
            (d[9] = g.title),
            (d[10] = i))
          : (i = d[10]),
        d[11] !== i
          ? ((o = (0, n.jsx)("div", { className: "truncate", children: i })), (d[11] = i), (d[12] = o))
          : (o = d[12]),
        d[13] !== f
          ? ((s = f && (0, n.jsx)("div", { className: "truncate text-secondary", children: f })),
            (d[13] = f),
            (d[14] = s))
          : (s = d[14]),
        d[15] !== o || d[16] !== s
          ? ((c = (0, n.jsxs)("div", {
              className: "mx-2 mb-1 shrink-0 border-b border-subtle px-1 pt-1 pb-2 text-sm",
              children: [o, s],
            })),
            (d[15] = o),
            (d[16] = s),
            (d[17] = c))
          : (c = d[17]),
        c
      )
    }
    function J(e) {
      return e.title
    }
    function ee(e) {
      let t,
        a,
        i,
        o,
        s,
        c,
        d,
        u,
        p,
        g = (0, r.c)(31)
      g[0] !== e
        ? (({ expand: t, onOpenPage: i, onCreatePage: a, ...o } = e),
          (g[0] = e),
          (g[1] = t),
          (g[2] = a),
          (g[3] = i),
          (g[4] = o))
        : ((t = g[1]), (a = g[2]), (i = g[3]), (o = g[4]))
      let m = (0, l.gh)(A.u),
        h = (0, w.A)(),
        { page: f, pageId: y } = o,
        b = (0, l._U)(U.mS, f ?? y),
        x = (0, l._U)(L.m2, y)
      g[5] !== x || g[6] !== f || g[7] !== y || g[8] !== b.loading || g[9] !== b.mode
        ? ((s =
            null == x &&
            f?.access.can_write === !0 &&
            !(0, E.sD)(y) &&
            !(0, N.qt)(f) &&
            !b.loading &&
            "request_changes" !== b.mode),
          (g[5] = x),
          (g[6] = f),
          (g[7] = y),
          (g[8] = b.loading),
          (g[9] = b.mode),
          (g[10] = s))
        : (s = g[10])
      let C = s
      g[11] !== h
        ? ((c = h.formatMessage({ id: "codex.pageExplorer.addSubpage", defaultMessage: "Add subpage" })),
          (g[11] = h),
          (g[12] = c))
        : (c = g[12])
      let I = c,
        j = b.loading || "request_changes" === b.mode ? void 0 : t
      return (
        g[13] !== o || g[14] !== m
          ? ((d = (e, t, a) => {
              ;((0, q.yy)(m, k.CodexSpacesPageOpenRequested, {
                referrer: k.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_SIDEBAR_TREE,
              }),
                o.onPress(e, t, a))
            }),
            (g[13] = o),
            (g[14] = m),
            (g[15] = d))
          : (d = g[15]),
        g[16] !== C ||
        g[17] !== t ||
        g[18] !== h ||
        g[19] !== I ||
        g[20] !== a ||
        g[21] !== i ||
        g[22] !== f ||
        g[23] !== y ||
        g[24] !== m
          ? ((u = C
              ? (0, n.jsx)(R.NF, {
                  isMenuOpen: !1,
                  actionTooltipContent: I,
                  action: (0, n.jsx)(R.BE, {
                    ariaLabel: I,
                    onClick: () => {
                      let e = performance.now()
                      if (!(0, L.pF)(m, y)) return
                      if ((t(), null != a && null != f)) return void a(f)
                      let n = m.get(v.spaceAccountId$),
                        r = (0, M.startSpacePageCreation)(m, {
                          deferUntilEdited: !0,
                          typingStartedAtMs: e,
                          parentPageId: y,
                        })
                      ;(i(r.pageId),
                        r.completion.catch((e) => {
                          ;(e instanceof DOMException && "AbortError" === e.name) ||
                            (m.get(v.spaceAccountId$) === n &&
                              m
                                .get(T.Id)
                                .danger(
                                  h.formatMessage({
                                    id: "codex.space.page.createError",
                                    defaultMessage: "Could not create page",
                                  }),
                                  { errorAnalytics: { toastId: "codex.space.page.createError" } },
                                ))
                        }))
                    },
                    children: (0, n.jsx)(P.xFs, {}),
                  }),
                })
              : void 0),
            (g[16] = C),
            (g[17] = t),
            (g[18] = h),
            (g[19] = I),
            (g[20] = a),
            (g[21] = i),
            (g[22] = f),
            (g[23] = y),
            (g[24] = m),
            (g[25] = u))
          : (u = g[25]),
        g[26] !== o || g[27] !== j || g[28] !== d || g[29] !== u
          ? ((p = (0, n.jsx)(O.A, { ...o, onExpand: j, onPress: d, actions: u })),
            (g[26] = o),
            (g[27] = j),
            (g[28] = d),
            (g[29] = u),
            (g[30] = p))
          : (p = g[30]),
        p
      )
    }
    var et = a("s1gj")
    function ea(e) {
      let t,
        a,
        i,
        o,
        s,
        c,
        d,
        u,
        p,
        g,
        m = (0, r.c)(42)
      m[0] !== e
        ? (({ dropdownAnchor: t, onClose: a, open: i, ...o } = e),
          (m[0] = e),
          (m[1] = t),
          (m[2] = a),
          (m[3] = i),
          (m[4] = o))
        : ((t = m[1]), (a = m[2]), (i = m[3]), (o = m[4]))
      let h = (0, l.gh)(A.u),
        f = (0, w.A)()
      if (null != t) {
        let e, r, l, s, c, d, u, p
        return (
          m[5] !== a || m[6] !== i
            ? ((e = (e) => {
                !e && i && a()
              }),
              (m[5] = a),
              (m[6] = i),
              (m[7] = e))
            : (e = m[7]),
          m[8] !== t ? ((r = (0, n.jsx)(j.dT, { virtualRef: { current: t } })), (m[8] = t), (m[9] = r)) : (r = m[9]),
          m[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = { maxHeight: "min(22rem, var(--radix-popover-content-available-height))" }), (m[10] = l))
            : (l = m[10]),
          m[11] !== t ? ((s = () => t.focus({ preventScroll: !0 })), (m[11] = t), (m[12] = s)) : (s = m[12]),
          m[13] !== t || m[14] !== h
            ? ((c = (e) => {
                let a = e.target
                ;((a instanceof Node && t.contains(a)) ||
                  (h.get(_.Ez)?.navigatorDrop != null &&
                    a instanceof Element &&
                    null != a.closest('[role="dialog"][aria-modal="true"]'))) &&
                  e.preventDefault()
              }),
              (m[13] = t),
              (m[14] = h),
              (m[15] = c))
            : (c = m[15]),
          m[16] !== o
            ? ((d = (0, n.jsx)(Q, { ...o, compact: !0, focusActivePage: !0 })), (m[16] = o), (m[17] = d))
            : (d = m[17]),
          m[18] !== t.id || m[19] !== s || m[20] !== c || m[21] !== d
            ? ((u = (0, n.jsx)(j.hl, {
                variant: "menu",
                size: "workspace",
                disablePadding: !0,
                sideOffset: 4,
                "aria-labelledby": t.id,
                className: "p-1.5",
                style: l,
                onOpenAutoFocus: en,
                onEscapeKeyDown: s,
                onInteractOutside: c,
                children: d,
              })),
              (m[18] = t.id),
              (m[19] = s),
              (m[20] = c),
              (m[21] = d),
              (m[22] = u))
            : (u = m[22]),
          m[23] !== i || m[24] !== e || m[25] !== r || m[26] !== u
            ? ((p = (0, n.jsxs)(j.AM, { open: i, onOpenChange: e, children: [r, u] })),
              (m[23] = i),
              (m[24] = e),
              (m[25] = r),
              (m[26] = u),
              (m[27] = p))
            : (p = m[27]),
          p
        )
      }
      return (
        m[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(I.A, { id: "codex.pageExplorer.heading", defaultMessage: "Pages" })), (m[28] = s))
          : (s = m[28]),
        m[29] !== f
          ? ((c = f.formatMessage({ id: "codex.pageExplorer.close", defaultMessage: "Close pages" })),
            (m[29] = f),
            (m[30] = c))
          : (c = m[30]),
        m[31] !== a || m[32] !== c
          ? ((d = (0, n.jsx)(S.xx, { title: s, closeLabel: c, onClose: a })), (m[31] = a), (m[32] = c), (m[33] = d))
          : (d = m[33]),
        m[34] !== o ? ((u = (0, n.jsx)(Q, { ...o, focusActivePage: !0 })), (m[34] = o), (m[35] = u)) : (u = m[35]),
        m[36] !== d || m[37] !== u
          ? ((p = (0, n.jsxs)("div", {
              className: "pointer-events-auto flex min-h-0 flex-1 flex-col",
              "data-page-explorer-panel": !0,
              children: [d, u],
            })),
            (m[36] = d),
            (m[37] = u),
            (m[38] = p))
          : (p = m[38]),
        m[39] !== i || m[40] !== p
          ? ((g = (0, n.jsx)(et.i, {
              className: "absolute inset-y-0 start-0 z-10",
              children: (0, n.jsx)(S.Io, { initial: !1, open: i, size: "compact", side: "start", children: p }),
            })),
            (m[39] = i),
            (m[40] = p),
            (m[41] = g))
          : (g = m[41]),
        g
      )
    }
    function en(e) {
      return e.preventDefault()
    }
    var er = a("r0X4")
    function el(e) {
      let t,
        a,
        w,
        I,
        j,
        _,
        A,
        S,
        k = (0, r.c)(38),
        { children: P, pageId: T, tabId: M, embedded: L } = e,
        E = void 0 !== L && L,
        N = (0, l.gh)(x.GD),
        U = (0, o.zy)(),
        F = (0, i.useRef)(null),
        [D, O] = (0, i.useState)(null),
        V = (0, l._U)(er.pg, M ?? null),
        z = V ?? D,
        $ = (0, l.Ul)(p.pagesEnabled$),
        B = (0, l.Ul)(y.lX),
        q = (0, l.Ul)(v.spaceAccountId$),
        R = (0, l.Ul)(d.chatGptAuthenticatedUserId$),
        [G, H] = (0, i.useState)(null),
        W = G?.accountId === q && G?.userId === R && G?.pageId === T ? G.rootPageId : void 0
      k[0] !== q || k[1] !== T ? ((t = { accountId: q, pageId: T }), (k[0] = q), (k[1] = T), (k[2] = t)) : (t = k[2])
      let K = t,
        Z = (0, l._U)(er.G1, K),
        Q = M ?? "route"
      k[3] !== q || k[4] !== Q ? ((a = { accountId: q, tabId: Q }), (k[3] = q), (k[4] = Q), (k[5] = a)) : (a = k[5])
      let X = a,
        Y = (0, l._U)(er.pt, X)
      k[6] !== $ || k[7] !== M || k[8] !== B
        ? ((w = $ && (null != M || !B) && !(0, m.x)("/space/:pageId")), (k[6] = $), (k[7] = M), (k[8] = B), (k[9] = w))
        : (w = k[9])
      let J = w,
        ee = J && (null == M ? Z : Y)
      k[10] !== X || k[11] !== K || k[12] !== N || k[13] !== M
        ? ((I = (e) => {
            null == M ? N.set(er.G1, K, e) : N.set(er.pt, X, e)
          }),
          (k[10] = X),
          (k[11] = K),
          (k[12] = N),
          (k[13] = M),
          (k[14] = I))
        : (I = k[14])
      let et = I,
        en = () => {
          ;(ee && (V ?? F.current)?.focus({ preventScroll: !0 }), et(!ee))
        }
      ;(0, u.K)("toggleFileTreePanel", en, {
        enabled: J,
        isActive: (e) => {
          let t = V ?? F.current
          if (e?.originBrowserTab != null || null == t || !t.checkVisibility()) return !1
          if (e?.originPanel != null)
            return null != M
              ? (0, C.KE)(N, M) === e.originPanel
              : t
                  .closest("[data-app-shell-tab-panel-controller]")
                  ?.getAttribute("data-app-shell-tab-panel-controller") === e.originPanel
          let a = t.ownerDocument.activeElement,
            n = a?.closest('[role="tabpanel"]')
          return (
            (null == M ? n === t.closest('[role="tabpanel"]') : n?.getAttribute("data-tab-id") === M) ||
            (null != M &&
              a
                ?.closest('[role="tab"][aria-selected="true"]')
                ?.closest("[data-tab-id]")
                ?.getAttribute("data-tab-id") === M)
          )
        },
      })
      let el = P(
        J
          ? {
              open: ee,
              onToggle: en,
              triggerRef: F,
              dropdown: null != z,
              setDropdownAnchor: (e) => {
                if (null != e)
                  return (
                    (F.current = e),
                    O(e),
                    () => {
                      ;(F.current === e && (F.current = null), O((t) => (t === e ? null : t)))
                    }
                  )
              },
            }
          : null,
      )
      ;(k[15] !== q ||
      k[16] !== z ||
      k[17] !== J ||
      k[18] !== W ||
      k[19] !== U ||
      k[20] !== en ||
      k[21] !== ee ||
      k[22] !== T ||
      k[23] !== N ||
      k[24] !== H ||
      k[25] !== et ||
      k[26] !== M ||
      k[27] !== R
        ? ((j =
            J &&
            (0, n.jsx)(ea, {
              dropdownAnchor: z,
              onClose: null == z ? en : () => et(!1),
              open: ee,
              pageId: T,
              knownRootPageId: W,
              navigationSession: null == M ? "route" : JSON.stringify([N.value.clientThreadId, M]),
              onCreatePage:
                null == M
                  ? void 0
                  : (e) => {
                      let t = (0, C.KE)(N, M)
                      null != t && (0, f.kJ)(N, { parentPageId: e.page_id, tabId: M, target: t })
                    },
              onOpenPage: (e, t, a, n, r) => {
                H({ accountId: q, userId: R, pageId: e, rootPageId: n })
                let l = {
                  title: a?.title ?? void 0,
                  ...r?.pagePreview,
                  accountId: q,
                  userId: R,
                  pageId: e,
                  documentType: t,
                }
                if (null == M)
                  (N.set(er.G1, { accountId: q, pageId: e }, !0),
                    (0, s.oo)(N, (0, g.mI)(N, e), {
                      flushSync: null != l.textPageCard && e !== T,
                      state: { ...U.state, pagePreview: l, scrollPageToTop: e === T },
                    }))
                else {
                  let t = (0, C.KE)(N, M)
                  null != t &&
                    (r?.openInNewTab && N.get(b.E1)
                      ? (0, h.openSpacePageSidePanelTab)(N, e, {
                          openSource: "workspace_navigation",
                          openerTabId: M,
                          target: t,
                          pagePreview: l,
                        })
                      : (0, h.navigateSpacePageTab)(N, M, e, { pagePreview: l, blockId: e === T ? null : void 0 }))
                }
              },
            })),
          (k[15] = q),
          (k[16] = z),
          (k[17] = J),
          (k[18] = W),
          (k[19] = U),
          (k[20] = en),
          (k[21] = ee),
          (k[22] = T),
          (k[23] = N),
          (k[24] = H),
          (k[25] = et),
          (k[26] = M),
          (k[27] = R),
          (k[28] = j))
        : (j = k[28]),
        k[29] !== j
          ? ((_ = (0, n.jsx)("div", {
              className: "pointer-events-none absolute inset-x-0 top-[var(--viewer-header-height)] bottom-0",
              children: j,
            })),
            (k[29] = j),
            (k[30] = _))
          : (_ = k[30]),
        k[31] !== _ || k[32] !== el
          ? ((A = (0, n.jsxs)("div", {
              className: "@container/page-explorer relative flex h-full min-h-0 min-w-0 flex-1 flex-col",
              children: [el, _],
            })),
            (k[31] = _),
            (k[32] = el),
            (k[33] = A))
          : (A = k[33]))
      let ei = A
      return (
        k[34] !== ei || k[35] !== E || k[36] !== M
          ? ((S = null != M || E ? ei : (0, n.jsx)(c.G.ContentSurface, { children: ei })),
            (k[34] = ei),
            (k[35] = E),
            (k[36] = M),
            (k[37] = S))
          : (S = k[37]),
        S
      )
    }
  },
  Qnv7(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      i = a("zd8w"),
      o = a("mYNH"),
      s = a("fQ9c"),
      c = a("ttIa"),
      d = a("tv8P"),
      u = a("JtEZ"),
      p = a("tSEg"),
      g = a("dN0a"),
      m = a("wQIZ"),
      h = a("GAcX")
    let f = (0, l.un)(p.GD, ({ get: e }) => {
      let t = e(h.X0)
      return t?.presentation === "draft" ? t.title : ""
    })
    function v(e) {
      let t,
        a,
        h = (0, r.c)(11),
        { pageId: v } = e,
        y = (0, l.gh)(p.GD),
        b = (0, l.Ul)(d.spaceAccountId$),
        x = (0, l.Ul)(f)
      h[0] !== b || h[1] !== v || h[2] !== y
        ? ((t = () => y.get(u.Dh, { accountId: b, pageId: v })), (h[0] = b), (h[1] = v), (h[2] = y), (h[3] = t))
        : (t = h[3])
      let [C] = (0, i.useState)(t),
        w = (0, l.Ul)(g.uO)
      if (C) {
        let e
        return (
          h[4] !== v || h[5] !== y || h[6] !== x || h[7] !== w
            ? ((e = (0, n.jsx)(s.q, {
                className: "z-50",
                children: (e) =>
                  (0, n.jsx)(c.$, {
                    hasConversation: !1,
                    containerSize: e,
                    dockThreadKey: `template:${v}`,
                    presentation: "compact",
                    showHeader: !1,
                    isMinimized: !1 === w,
                    onMinimizedChange: (e) => {
                      y.set(g.bg, !e)
                    },
                    title: x,
                    renderComposer: () => (0, n.jsx)(m.A, { pageId: v }, v),
                  }),
              })),
              (h[4] = v),
              (h[5] = y),
              (h[6] = x),
              (h[7] = w),
              (h[8] = e))
            : (e = h[8]),
          e
        )
      }
      return (
        h[9] !== v
          ? ((a = (0, n.jsx)(o.L, {
              composerOnly: !0,
              hasConversation: !1,
              reserveFullComposerHeight: !0,
              pendingFormId: null,
              children: () => (0, n.jsx)(m.A, { pageId: v }, v),
            })),
            (h[9] = v),
            (h[10] = a))
          : (a = h[10]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            a,
            o,
            s = (0, r.c)(6),
            c = (0, l.gh)(p.GD),
            d = (0, l.Ul)(h.MS)
          return (s[0] !== d || s[1] !== c
            ? ((t = () => {
                null != d && (0, g.gm)(c)
              }),
              (a = [d, c]),
              (s[0] = d),
              (s[1] = c),
              (s[2] = t),
              (s[3] = a))
            : ((t = s[2]), (a = s[3])),
          (0, i.useLayoutEffect)(t, a),
          null == d)
            ? null
            : (s[4] !== d ? ((o = (0, n.jsx)(v, { pageId: d }, d)), (s[4] = d), (s[5] = o)) : (o = s[5]), o)
        },
      },
    )
  },
  wQIZ(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      i = a("zd8w"),
      o = a("Wf1j"),
      s = a("oyxz"),
      c = a("osar"),
      d = a("enVv"),
      u = a("WNfT"),
      p = a("Y5qM"),
      g = a("TxOL"),
      m = a("g2Gi"),
      h = a("Sm6l"),
      f = a("bVeK"),
      v = a("RNul"),
      y = a("aJad"),
      b = a("xqnZ"),
      x = a("Qcnw")
    function C(e) {
      let t,
        a,
        l,
        s,
        u,
        p,
        m,
        v,
        x,
        C,
        j,
        _ = (0, r.c)(27),
        { canStop: A, onStop: S } = e,
        k = (0, o.A)(),
        [P] = (0, i.useState)(I)
      ;(_[0] !== P ? ((t = () => P.destroy()), (_[0] = P), (_[1] = t)) : (t = _[1]),
        (0, b.fP)(t, P),
        _[2] !== k
          ? ((a = k.formatMessage({ id: "space.templateSetup.draft.working", defaultMessage: "Working\u2026" })),
            (_[2] = k),
            (_[3] = a))
          : (a = _[3]))
      let T = a
      ;(_[4] !== k
        ? ((l = k.formatMessage({ id: "space.templateSetup.draft.addAttachments", defaultMessage: "Add attachments" })),
          (_[4] = k),
          (_[5] = l))
        : (l = _[5]),
        _[6] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, n.jsx)(f.xFs, {})), (_[6] = s)) : (s = _[6]),
        _[7] !== l
          ? ((u = (0, n.jsx)(c.r.FooterInlineControls, {
              gap: "normal",
              children: (0, n.jsx)(h.$, {
                disabled: !0,
                "aria-label": l,
                color: "ghost",
                size: "composer",
                children: s,
              }),
            })),
            (_[7] = l),
            (_[8] = u))
          : (u = _[8]),
        _[9] !== T
          ? ((p = (0, n.jsx)("span", { className: "sr-only", role: "status", children: T })), (_[9] = T), (_[10] = p))
          : (p = _[10]),
        _[11] !== P || _[12] !== T
          ? ((m = (0, n.jsx)(c.r.Input, {
              inert: !0,
              layout: "single-line",
              children: (0, n.jsx)("div", {
                "aria-hidden": !0,
                children: (0, n.jsx)(g.l, {
                  composerController: P,
                  disableAutoFocus: !0,
                  placeholder: T,
                  singleLine: !0,
                  workingStartedAtMs: null,
                  onSubmit: w,
                }),
              }),
            })),
            (_[11] = P),
            (_[12] = T),
            (_[13] = m))
          : (m = _[13]),
        _[14] !== p || _[15] !== m
          ? ((v = (0, n.jsxs)(n.Fragment, { children: [p, m] })), (_[14] = p), (_[15] = m), (_[16] = v))
          : (v = _[16]),
        _[17] !== k
          ? ((x = k.formatMessage({ id: "space.templateSetup.draft.stop", defaultMessage: "Stop" })),
            (_[17] = k),
            (_[18] = x))
          : (x = _[18]))
      let M = !A
      return (
        _[19] !== S || _[20] !== M || _[21] !== x
          ? ((C = (0, n.jsx)(c.r.FooterActions, {
              children: (0, n.jsx)(d.f, { ariaLabel: x, disabled: M, Icon: y.A, onClick: S }),
            })),
            (_[19] = S),
            (_[20] = M),
            (_[21] = x),
            (_[22] = C))
          : (C = _[22]),
        _[23] !== C || _[24] !== u || _[25] !== v
          ? ((j = (0, n.jsx)(c.r.Body, {
              layout: "single-line",
              children: (0, n.jsx)(c.r.AdaptiveFooter, {
                layout: "single-line",
                leadingControls: u,
                input: v,
                trailingControls: C,
              }),
            })),
            (_[23] = C),
            (_[24] = u),
            (_[25] = v),
            (_[26] = j))
          : (j = _[26]),
        j
      )
    }
    function w() {}
    function I() {
      return (0, b.Sr)("")
    }
    function j(e) {
      let t,
        a,
        i,
        o,
        c,
        d,
        g,
        f,
        y = (0, r.c)(30),
        { label: b, pageId: C } = e,
        w = (0, l.uO)(x.n, C),
        I = (0, l.Ul)(w.state$)
      if (null == I) return null
      let { setup: j, recovery: _, canDismiss: A, canRetry: S } = I,
        k = "unconfirmed" === j.status,
        P = null != _
      y[0] !== b
        ? ((t = b ?? (0, n.jsx)(s.A, { id: "space.templateSetup.preparing", defaultMessage: "Getting ready\u2026" })),
          (y[0] = b),
          (y[1] = t))
        : (t = y[1])
      let T = t
      if ("page-save" === _) {
        let e
        ;(y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(s.A, {
              id: "space.templateSetup.pageSaveFailed",
              defaultMessage: "Your Page isn\u2019t saved yet",
            })),
            (y[2] = e))
          : (e = y[2]),
          (T = e))
      } else if ("unconfirmed" === _) {
        let e
        ;(y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(s.A, { id: "space.templateSetup.checkChat", defaultMessage: "Check your chat" })),
            (y[3] = e))
          : (e = y[3]),
          (T = e))
      } else if ("chat-start" === _) {
        let e
        ;(y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(s.A, {
              id: "space.templateSetup.chatStartFailed",
              defaultMessage: "Couldn\u2019t start your chat",
            })),
            (y[4] = e))
          : (e = y[4]),
          (T = e))
      }
      let M = null
      if (k) {
        let e
        ;(y[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(s.A, {
              id: "space.templateSetup.unconfirmed",
              defaultMessage:
                "We couldn\u2019t confirm whether your request was sent. Check the chat before starting again",
            })),
            (y[5] = e))
          : (e = y[5]),
          (M = e))
      } else if (P) {
        let e
        ;(y[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(s.A, { id: "space.templateSetup.inputKept", defaultMessage: "Your text is still here" })),
            (y[6] = e))
          : (e = y[6]),
          (M = e))
      }
      let L = P ? "alert" : "status"
      ;(y[7] !== P
        ? ((a = P ? null : (0, n.jsx)(v.y, { className: "icon-xs text-secondary" })), (y[7] = P), (y[8] = a))
        : (a = y[8]),
        y[9] !== M || y[10] !== T
          ? ((i = (0, n.jsx)(p.Q, { title: T, subtitle: M })), (y[9] = M), (y[10] = T), (y[11] = i))
          : (i = y[11]),
        y[12] !== L || y[13] !== a || y[14] !== i
          ? ((o = (0, n.jsxs)("div", { className: "flex items-start gap-3 select-none", role: L, children: [a, i] })),
            (y[12] = L),
            (y[13] = a),
            (y[14] = i),
            (y[15] = o))
          : (o = y[15]))
      let E = !A
      return (
        y[16] !== w.dismiss || y[17] !== E
          ? ((c = (0, n.jsx)(m.c, { variant: "icon", disabled: E, onDismiss: w.dismiss })),
            (y[16] = w.dismiss),
            (y[17] = E),
            (y[18] = c))
          : (c = y[18]),
        y[19] !== o || y[20] !== c
          ? ((d = (0, n.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [o, c] })),
            (y[19] = o),
            (y[20] = c),
            (y[21] = d))
          : (d = y[21]),
        y[22] !== S || y[23] !== w.retry || y[24] !== P || y[25] !== j.answer
          ? ((g = P
              ? (0, n.jsxs)("div", {
                  className: "flex flex-col gap-3 pt-3",
                  children: [
                    (0, n.jsx)("p", {
                      className: "m-0 text-sm whitespace-pre-wrap text-secondary select-text",
                      children: j.answer,
                    }),
                    S
                      ? (0, n.jsx)("div", {
                          className: "flex justify-end gap-2",
                          children: (0, n.jsx)(h.$, {
                            size: "compact",
                            onClick: w.retry,
                            children: (0, n.jsx)(s.A, { id: "space.templateSetup.retry", defaultMessage: "Try again" }),
                          }),
                        })
                      : null,
                  ],
                })
              : null),
            (y[22] = S),
            (y[23] = w.retry),
            (y[24] = P),
            (y[25] = j.answer),
            (y[26] = g))
          : (g = y[26]),
        y[27] !== d || y[28] !== g
          ? ((f = (0, n.jsxs)(u.A, { className: "p-4", children: [d, g] })), (y[27] = d), (y[28] = g), (y[29] = f))
          : (f = y[29]),
        f
      )
    }
    a.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            a,
            i = (0, r.c)(8),
            { pageId: o } = e,
            s = (0, l.uO)(x.n, o),
            d = (0, l.Ul)(s.state$),
            u = d?.setup
          return null == d || u?.presentation !== "draft"
            ? null
            : (i[0] !== s.dismiss || i[1] !== o || i[2] !== d.canDismiss || i[3] !== d.recovery
                ? ((t =
                    null != d.recovery
                      ? (0, n.jsx)(j, { pageId: o })
                      : (0, n.jsx)(c.r, {
                          layout: "single-line",
                          children: (0, n.jsx)(C, { canStop: d.canDismiss, onStop: s.dismiss }),
                        })),
                  (i[0] = s.dismiss),
                  (i[1] = o),
                  (i[2] = d.canDismiss),
                  (i[3] = d.recovery),
                  (i[4] = t))
                : (t = i[4]),
              i[5] !== u.title || i[6] !== t
                ? ((a = (0, n.jsx)("section", { "aria-label": u.title, children: t })),
                  (i[5] = u.title),
                  (i[6] = t),
                  (i[7] = a))
                : (a = i[7]),
              a)
        },
        N: j,
      },
    )
  },
  Qcnw(e, t, a) {
    var n = a("qmMi"),
      r = a("rPIX"),
      l = a("b8b3"),
      i = a("n8vi"),
      o = a("p66p"),
      s = a("tv8P"),
      c = a("OWtl"),
      d = a("GAcX")
    let u = (0, n.T1)(
      c.u,
      (e, { scope: t, derived: a }) => {
        let n = a((t, { scope: { get: a } }) => {
          let n = a(d.X0)
          if (n?.pageId !== e || "submitted" === n.status) return null
          let r = a(s.spacePageCreation$, e),
            l = null != r && "created" !== r.status && ("error" === r.status || !0 === r.initialSaveStalled),
            i = null
          return (
            l
              ? (i = "page-save")
              : "unconfirmed" === n.status
                ? (i = "unconfirmed")
                : "error" === n.status && (i = "chat-start"),
            {
              setup: n,
              recovery: i,
              canDismiss: "submitting" !== n.status,
              canRetry: l ? !1 !== r.retryable : "error" === n.status && null == n.workDraft,
            }
          )
        })
        return {
          state$: n,
          dismiss: () => {
            t.get(n)?.canDismiss && t.set(d.X0, null)
          },
          retry: () => {
            let a = t.get(n)
            if (a?.canRetry) {
              if ("page-save" === a.recovery) return void (0, i.retrySpacePageCreation)(t, e).catch(() => {})
              t.set(d.X0, { ...a.setup, status: "queued" })
            }
          },
        }
      },
      { autoDispose: !0 },
    )
    a.d(
      t,
      {},
      {
        X: function (e, t, a, n, i) {
          let c = e.get(d.X0)
          if (c?.pageId !== t) return
          if (null != c.workDraft) return void e.set(d.X0, { ...c, status: "usage-blocked" })
          let u = e.get(s.spacePageId$, t),
            p = {
              conversationId: a,
              prompt: c.answer,
              onSubmit: async (g, m) => {
                let h = e.get(d.X0),
                  f = () => {
                    let t = e.get(r.Px)
                    return (
                      e.get(d.X0)?.workDraft === p &&
                      e.get(s.spaceAccountId$) === c.accountId &&
                      e.get(r.Mg)?.conversationId === a &&
                      t?.kind === "chatgpt" &&
                      t.page?.accountId === c.accountId &&
                      t.page.pageId === u
                    )
                  }
                if (
                  !f() ||
                  (h?.status !== "usage-blocked" && h?.status !== "error") ||
                  e.get(l.sU, t)?.kind !== "chatgpt" ||
                  e.get(r.Px)?.disableSubmit !== !1
                )
                  return !1
                let v = { ...h, answer: g, status: "submitting" }
                e.set(d.X0, v)
                let y = (0, o.Zt)(e, u, a, !0),
                  b = !1,
                  x = !1
                try {
                  return (x = await m(g, {
                    extraDeveloperInstructions: [n],
                    requireDispatchAcceptance: !0,
                    isSubmissionCurrent: f,
                    onCompletionStart: () => {
                      b = !0
                    },
                  }))
                } finally {
                  ;(x || y?.(),
                    e.get(d.X0) === v && (x ? i() : e.set(d.X0, { ...v, status: b ? "unconfirmed" : "error" })))
                }
              },
            }
          e.set(d.X0, { ...c, status: "usage-blocked", workDraft: p })
        },
        n: u,
      },
    )
  },
  QUw8(e, t, a) {
    a.r(t)
    var n = a("qmMi"),
      r = a("SPnB"),
      l = a("NRR1"),
      i = a("rTPf"),
      o = a("OWtl"),
      s = a("bQW7"),
      c = a("CMOE")
    let d = (0, n.bD)(o.u, (e) => []),
      u = (0, n.i1)(o.u, (e, { get: t }) => {
        let a = t(l.DO),
          n = t(r.chatGptAuthenticatedUserId$)
        return e && a && n ? t(d, { accountId: a, userId: n }).filter((t) => (0, c.f)(t, e) > 0) : []
      })
    a.d(
      t,
      {},
      {
        matchingVisitedPeople$: u,
        rememberVisitedPeople: async function (e, t) {
          let a = e.get(l.DO),
            n = e.get(r.chatGptAuthenticatedUserId$)
          if (!a || !n) return
          let o = { accountId: a, userId: n },
            c = "page-mention-visits-v1:" + JSON.stringify([a, n]),
            u = []
          try {
            let e = JSON.parse(localStorage.getItem(c) ?? "[]")
            Array.isArray(e) && (u = e.filter((e) => "string" == typeof e).slice(0, 50))
          } catch {}
          let p = [...new Set(t ?? u)]
            .filter(
              (t) =>
                t.split("__")[0] !== n.split("__")[0] &&
                t.endsWith("__" + a.toLowerCase()) &&
                !0 === e.query.getOptions(i.Ks, t).enabled,
            )
            .slice(0, 50)
          if (!p.length) return
          if (t)
            try {
              localStorage.setItem(c, JSON.stringify([...new Set([...p, ...u])].slice(0, 50)))
            } catch {}
          let g = await Promise.all(
            p.map(async (t) => {
              try {
                let a = await e.query.fetch(i.Ks, t)
                return a?.account_user_id === t ? a : null
              } catch {
                return null
              }
            }),
          )
          if (e.get(l.DO) !== a || e.get(r.chatGptAuthenticatedUserId$) !== n) return
          let m = (0, s.Jk)(g.filter((e) => null != e)) ?? [],
            h = new Set(p)
          e.set(d, o, [...m, ...e.get(d, o).filter((e) => !h.has(e.account_user_id))].slice(0, 50))
        },
        visitedPeople$: d,
      },
    )
  },
  LD3z(e, t, a) {
    var n = a("QosV"),
      r = a("qmMi"),
      l = a("zd8w"),
      i = a("IDNd"),
      o = a("anbd")
    a.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            a,
            s,
            c = (0, n.c)(11),
            { target: d, active: u, view: p, failure: g } = e,
            m = (0, l.useContext)(i.Gc),
            h = (0, r.Ul)((void 0 === u || u) && m ? o.kx : null)
          c[0] !== h || c[1] !== d ? ((t = (0, o.F0)(h, d)), (c[0] = h), (c[1] = d), (c[2] = t)) : (t = c[2])
          let f = t,
            { spaceId: v, rootPageId: y, panelTabId: b } = d
          return (
            c[3] !== f || c[4] !== g || c[5] !== b || c[6] !== y || c[7] !== v || c[8] !== p
              ? ((a = () => {
                  null != g ? f?.fail(g, p) : null != p && f?.land(p, { spaceId: v, rootPageId: y, panelTabId: b })
                }),
                (s = [f, p, g, v, y, b]),
                (c[3] = f),
                (c[4] = g),
                (c[5] = b),
                (c[6] = y),
                (c[7] = v),
                (c[8] = p),
                (c[9] = a),
                (c[10] = s))
              : ((a = c[9]), (s = c[10])),
            (0, l.useLayoutEffect)(a, s),
            null
          )
        },
      },
    )
  },
  HSxl(e, t, a) {
    var n = a("WpXe")
    a.d(
      t,
      {},
      {
        G: function (e, t) {
          return t
            ? e.formatMessage({ id: "pages.native.addComments", defaultMessage: "Add comments" })
            : e.formatMessage(n.F.askForChanges)
        },
      },
    )
  },
  CYRu(e, t, a) {
    var n = a("qmMi"),
      r = a("mNPx"),
      l = a("yGJW"),
      i = a("GaA7"),
      o = a("OWtl"),
      s = a("WFY2")
    let c = (0, n.vP)(o.u, () => []),
      d = (0, n.SZ)(
        o.u,
        () => null,
        ({ get: e, set: t }) => {
          let a = i.appServices?.pageCreationIntents
          if (null == a) return void t([])
          let n = !0,
            o = a.subscribe((e) => {
              n && t(e)
            })
          return (
            Promise.resolve(o).catch((a) => {
              n && ((0, r.ZD)(e(l.YV), "pages.native.creation-intents.load", a), t(null))
            }),
            () => {
              ;((n = !1), o[Symbol.dispose]())
            }
          )
        },
      )
    a.d(
      t,
      {},
      {
        Fp: async function (e) {
          let t = i.appServices?.pageCreationIntents
          if (null != t) return t.claim({ accountId: e.accountId, userId: e.userId, localPageId: e.localPageId })
        },
        J7: async function (e, t, a) {
          if (i.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await i.appServices?.pageCreationIntents.update({
            kind: t,
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            updateIds: a,
          })
        },
        Oy: async function (e) {
          if (i.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await i.appServices?.pageCreationIntents.update({ kind: "save", entry: e })
        },
        Q_: d,
        Ru: async function (e, t) {
          if (i.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await i.appServices?.pageCreationIntents.update({
            kind: "progress",
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            progress: t,
          })
        },
        Uv: async function (e) {
          if ("string" == typeof e.initialUpdate) return e.initialUpdate
          if (i.appServices?.pageCreationIntents?.readInitialUpdate == null)
            throw Error("native_page_creation_storage_unavailable")
          return i.appServices?.pageCreationIntents.readInitialUpdate({
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
          })
        },
        m: async function (e) {
          try {
            if (i.appServices?.pageCreationIntents == null) return !1
            return (
              await i.appServices?.pageCreationIntents.update({
                kind: "forget",
                accountId: e.accountId,
                userId: e.userId,
                localPageId: e.localPageId,
              }),
              !0
            )
          } catch (e) {
            return (
              s.v.warning("Could not remove completed Page creation intent", { safe: {}, sensitive: { error: e } }),
              !1
            )
          }
        },
        qI: function (e, t) {
          let a = { ...t }
          return (
            e.set(c, (e) => [...e, a]),
            () => {
              e.set(c, (e) => e.filter((e) => e !== a))
            }
          )
        },
        s7: c,
        u9: async function (e) {
          let t = await i.appServices?.pageCreationIntents?.list()
          return t?.find((t) => t.accountId === e.accountId && t.userId === e.userId && t.localPageId === e.localPageId)
        },
      },
    )
  },
  sSEJ(e, t, a) {
    var n = a("QosV"),
      r = a("SZCv"),
      l = a.n(r),
      i = a("qmMi"),
      o = a("zd8w"),
      s = a("SPnB"),
      c = a("rpnz"),
      d = a("mNPx"),
      u = a("e1xH"),
      p = a("tv8P"),
      g = a("yGJW"),
      m = a("OWtl"),
      h = a("OMIV"),
      f = a("CYRu")
    let v = (0, i.un)(m.u, ({ get: e }) => null != e(h.M9) && !e(h.RS) && "loading" !== e(u.GU))
    a.d(
      t,
      {},
      {
        y: function () {
          let e,
            t,
            r = (0, n.c)(3),
            u = (0, i.gh)(m.u)
          return (
            r[0] !== u
              ? ((e = () =>
                  (function (e) {
                    let t = !0,
                      n = new Map(),
                      r = !1,
                      i = !1,
                      o = (e) => JSON.stringify([e.accountId, e.userId, e.localPageId])
                    function u(e, a) {
                      let r = o(e),
                        i = n.get(r)
                      clearTimeout(i?.timer)
                      let s = l()(i?.entry, a) ? (i?.attempts ?? 0) + 1 : 1,
                        c = { entry: a, attempts: s, ready: !1 }
                      ;(n.set(r, c),
                        s < 3 &&
                          (c.timer = setTimeout(() => {
                            t && n.get(r) === c && ((c.ready = !0), m())
                          }, 1e3 * s)))
                    }
                    function m() {
                      ;((r = !0),
                        i ||
                          ((i = !0),
                          (async () => {
                            for (; t && r;)
                              ((r = !1),
                                await (async function () {
                                  let r = e.get(p.spaceAccountId$),
                                    i = e.get(s.chatGptAuthenticatedUserId$),
                                    m = e.get(f.Q_)
                                  if (null == r || null == i || null == m) return
                                  let h = e.get(c.Sq, r),
                                    y = e.get(f.s7),
                                    b = e.get(v),
                                    x = new Set(m.map(o))
                                  for (let e of n.keys()) x.has(e) || (clearTimeout(n.get(e)?.timer), n.delete(e))
                                  let C = m.filter(
                                    (e) =>
                                      e.accountId === r &&
                                      e.userId === i &&
                                      !y.some(
                                        (t) => t.accountId === r && t.userId === i && t.localPageId === e.localPageId,
                                      ) &&
                                      (n.get(o(e))?.ready === !0 || !l()(n.get(o(e))?.entry, e)) &&
                                      (e.progress?.serverPageId != null || e.progress?.outcome === "rejected" || b) &&
                                      !h.some((t) => t.localPageId === e.localPageId && t.native?.userId === i),
                                  )
                                  0 !== C.length &&
                                    (await Promise.all([
                                      a.e(593475),
                                      a.e(166239),
                                      a.e(923720),
                                      a.e(533219),
                                      a.e(944744),
                                      a.e(787805),
                                      a.e(68876),
                                      a.e(78948),
                                      a.e(811e3),
                                      a.e(503482),
                                      a.e(707900),
                                      a.e(312541),
                                      a.e(364455),
                                      a.e(612858),
                                    ])
                                      .then(a.bind(a, "LWSA"))
                                      .then(async ({ startNativePageCreation: a }) => {
                                        if (
                                          t &&
                                          e.get(p.spaceAccountId$) === r &&
                                          e.get(s.chatGptAuthenticatedUserId$) === i
                                        )
                                          for (let l of C) {
                                            let c,
                                              m,
                                              h = l
                                            try {
                                              if (((c = await (0, f.Fp)(h)), void 0 !== c && null == c)) continue
                                              let e = await (0, f.u9)(h)
                                              if (null == e) {
                                                c?.[Symbol.dispose]()
                                                continue
                                              }
                                              ;((h = e), (m = await (0, f.Uv)(h)))
                                            } catch (a) {
                                              ;(u(l, h),
                                                c?.[Symbol.dispose](),
                                                t &&
                                                  e.get(p.spaceAccountId$) === r &&
                                                  e.get(s.chatGptAuthenticatedUserId$) === i &&
                                                  (0, d.ZD)(e.get(g.YV), "pages.native.creation.recover", a))
                                              continue
                                            }
                                            if (
                                              !t ||
                                              e.get(p.spaceAccountId$) !== r ||
                                              e.get(s.chatGptAuthenticatedUserId$) !== i
                                            )
                                              return void c?.[Symbol.dispose]()
                                            if (
                                              !e
                                                .get(f.Q_)
                                                ?.some(
                                                  (e) =>
                                                    e.localPageId === h.localPageId &&
                                                    e.accountId === r &&
                                                    e.userId === i,
                                                ) ||
                                              (h.progress?.serverPageId == null &&
                                                h.progress?.outcome !== "rejected" &&
                                                !e.get(v))
                                            ) {
                                              c?.[Symbol.dispose]()
                                              continue
                                            }
                                            try {
                                              ;(a(e, r, h.documentType, h.parentPageId, void 0, void 0, {
                                                ...h,
                                                initialUpdate: m,
                                              })
                                                .completion.catch(() => void 0)
                                                .finally(() => c?.[Symbol.dispose]()),
                                                clearTimeout(n.get(o(h))?.timer),
                                                n.delete(o(h)))
                                            } catch (t) {
                                              ;(u(l, h),
                                                c?.[Symbol.dispose](),
                                                (0, d.ZD)(e.get(g.YV), "pages.native.creation.recover", t))
                                            }
                                          }
                                      }))
                                })())
                          })()
                            .catch((t) => {
                              ;(0, d.ZD)(e.get(g.YV), "pages.native.creation.recover", t)
                            })
                            .finally(() => {
                              ;((i = !1), t && r && m())
                            })))
                    }
                    let h = e.watch(({ get: e }) => {
                      let t = e(p.spaceAccountId$)
                      ;(e(s.chatGptAuthenticatedUserId$), e(f.Q_), e(f.s7), e(v), null != t && e(c.Sq, t), m())
                    })
                    return () => {
                      for (let e of ((t = !1), n.values())) clearTimeout(e.timer)
                      h()
                    }
                  })(u)),
                (t = [u]),
                (r[0] = u),
                (r[1] = e),
                (r[2] = t))
              : ((e = r[1]), (t = r[2])),
            (0, o.useEffect)(e, t),
            null
          )
        },
      },
    )
  },
  lEF0(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("FIjf"),
      i = a("qmMi"),
      o = a("Wf1j"),
      s = a("oyxz"),
      c = a("l43M"),
      d = a("H4kD"),
      u = a("ZOIm"),
      p = a("ZZOd"),
      g = a("TQS8"),
      m = a("HPtk"),
      h = a("v6uO"),
      f = a("NnV7"),
      v = a("cXiB"),
      y = a("idBd"),
      b = a("HSxl")
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            a,
            x,
            C,
            w,
            I,
            j,
            _,
            A,
            S,
            k,
            P,
            T,
            M,
            L,
            E,
            N,
            U = (0, r.c)(54)
          U[0] !== e
            ? (({ kind: x, canWrite: t, controls: a, titlePlacement: w, ...C } = e),
              (U[0] = e),
              (U[1] = t),
              (U[2] = a),
              (U[3] = x),
              (U[4] = C),
              (U[5] = w))
            : ((t = U[1]), (a = U[2]), (x = U[3]), (C = U[4]), (w = U[5]))
          let F = void 0 === w ? "toolbar" : w,
            D = (0, o.A)(),
            O = !(0, v.xV)(C.tabId) && C.navigation
          U[6] === Symbol.for("react.memo_cache_sentinel") ? ((I = { disableExposureLog: !0 }), (U[6] = I)) : (I = U[6])
          let V = (0, i._U)("presentation" === x && !!t && y.U_, I)
          U[7] !== D || U[8] !== V ? ((j = (0, b.G)(D, V)), (U[7] = D), (U[8] = V), (U[9] = j)) : (j = U[9])
          let z = j
          if ("canvas" === x) {
            let e
            return (
              U[10] !== a || U[11] !== O || U[12] !== C
                ? ((e = (0, n.jsx)(u.dl, { ...C, navigation: O, controls: a })),
                  (U[10] = a),
                  (U[11] = O),
                  (U[12] = C),
                  (U[13] = e))
                : (e = U[13]),
              e
            )
          }
          U[14] !== x
            ? ((_ =
                "spreadsheet" === x
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(d.g, { kind: "chart", disabled: !0 }),
                        (0, n.jsx)(d.g, { kind: "image", disabled: !0 }),
                        (0, n.jsx)(d.g, { kind: "tools", disabled: !0 }),
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(c.g, { action: "slide", disabled: !0 }),
                        (0, n.jsx)(c.g, { action: "text", disabled: !0 }),
                        (0, n.jsx)(c.g, { action: "image", disabled: !0 }),
                        (0, n.jsx)(c.g, { action: "tools", disabled: !0 }),
                      ],
                    })),
              (U[14] = x),
              (U[15] = _))
            : (_ = U[15])
          let $ = _
          ;(U[16] !== D || U[17] !== x || U[18] !== C.title
            ? ((A =
                C.title.trim() ||
                D.formatMessage("presentation" === x ? f.cl.untitledPresentation : f.cl.untitledSpreadsheet)),
              (U[16] = D),
              (U[17] = x),
              (U[18] = C.title),
              (U[19] = A))
            : (A = U[19]),
            U[20] !== C.downloadControl || U[21] !== C.onDownload
              ? ((S = C.downloadControl ?? (null == C.onDownload ? (0, n.jsx)(u.DT, { disabled: !0 }) : void 0)),
                (U[20] = C.downloadControl),
                (U[21] = C.onDownload),
                (U[22] = S))
              : (S = U[22]),
            U[23] !== x
              ? ((k = "presentation" === x ? (0, n.jsx)(m.v, { disabled: !0 }) : void 0), (U[23] = x), (U[24] = k))
              : (k = U[24]))
          let B = a.editingControls ?? (t ? $ : null)
          return (
            U[25] !== t || U[26] !== a.formatControl || U[27] !== D
              ? ((P =
                  a.formatControl ??
                  (t
                    ? (0, n.jsx)(l.b_, {
                        disabled: !0,
                        size: "default",
                        "aria-label": D.formatMessage({ id: "pages.native.format", defaultMessage: "Format" }),
                        children: g.Y.format,
                      })
                    : null)),
                (U[25] = t),
                (U[26] = a.formatControl),
                (U[27] = D),
                (U[28] = P))
              : (P = U[28]),
            U[29] !== t || U[30] !== a.annotationControl || U[31] !== z
              ? ((T = t
                  ? (a.annotationControl ??
                    (0, n.jsx)(l.b_, {
                      disabled: !0,
                      size: "default",
                      variant: "annotation",
                      label: z,
                      children: (0, n.jsx)(h.a, { active: !1 }),
                    }))
                  : null),
                (U[29] = t),
                (U[30] = a.annotationControl),
                (U[31] = z),
                (U[32] = T))
              : (T = U[32]),
            U[33] !== a.commentsControl
              ? ((M = a.commentsControl ?? (0, n.jsx)(u.fI, { disabled: !0, open: !1 })),
                (U[33] = a.commentsControl),
                (U[34] = M))
              : (M = U[34]),
            U[35] !== a.zoomControl || U[36] !== x
              ? ((L =
                  a.zoomControl ??
                  (0, p.j)({
                    fitLabel:
                      "presentation" === x
                        ? (0, n.jsx)(s.A, { id: "presentationPanel.zoomFit", defaultMessage: "Fit" })
                        : void 0,
                  }).zoomControl),
                (U[35] = a.zoomControl),
                (U[36] = x),
                (U[37] = L))
              : (L = U[37]),
            U[38] !== a || U[39] !== T || U[40] !== M || U[41] !== L || U[42] !== B || U[43] !== P
              ? ((E = {
                  ...a,
                  editingControls: B,
                  formatControl: P,
                  annotationControl: T,
                  commentsControl: M,
                  zoomControl: L,
                }),
                (U[38] = a),
                (U[39] = T),
                (U[40] = M),
                (U[41] = L),
                (U[42] = B),
                (U[43] = P),
                (U[44] = E))
              : (E = U[44]),
            U[45] !== x ||
            U[46] !== O ||
            U[47] !== C ||
            U[48] !== E ||
            U[49] !== A ||
            U[50] !== S ||
            U[51] !== k ||
            U[52] !== F
              ? ((N = (0, n.jsx)(u.dl, {
                  ...C,
                  navigation: O,
                  title: A,
                  titlebarPlacement: F,
                  layout: x,
                  downloadControl: S,
                  presentationControl: k,
                  controls: E,
                })),
                (U[45] = x),
                (U[46] = O),
                (U[47] = C),
                (U[48] = E),
                (U[49] = A),
                (U[50] = S),
                (U[51] = k),
                (U[52] = F),
                (U[53] = N))
              : (N = U[53]),
            N
          )
        },
      },
    )
  },
  JHb3(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("slpy"),
      i = a("Wf1j"),
      o = a("CNwL"),
      s = a("j9wQ"),
      c = a("RiLw")
    a.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            a,
            d,
            u,
            p,
            g = (0, r.c)(22),
            { ref: m, button: h, disabled: f, onClick: v, people: y } = e,
            b = (0, i.A)()
          g[0] !== b
            ? ((t = b.formatMessage({ id: "artifactViewer.share", defaultMessage: "Share" })), (g[0] = b), (g[1] = t))
            : (t = g[1])
          let x = t
          if (null != h) {
            let e
            return (
              g[2] !== h || g[3] !== x || g[4] !== y
                ? ((e = (0, n.jsxs)(s.J5, { label: x, children: [y, h] })),
                  (g[2] = h),
                  (g[3] = x),
                  (g[4] = y),
                  (g[5] = e))
                : (e = g[5]),
              e
            )
          }
          let C = f && !y
          g[6] !== C || g[7] !== y
            ? ((a = y || (0, n.jsx)(o.c, { decorative: C, people: [], showPlaceholder: !0 })),
              (g[6] = C),
              (g[7] = y),
              (g[8] = a))
            : (a = g[8])
          let w = a,
            I = C ? null : w,
            j = C ? w : void 0
          return (
            g[9] !== f || g[10] !== x || g[11] !== v || g[12] !== m || g[13] !== j
              ? ((d = (0, n.jsx)(c.c, { ref: m, "aria-label": x, disabled: f, facepile: j, onClick: v })),
                (g[9] = f),
                (g[10] = x),
                (g[11] = v),
                (g[12] = m),
                (g[13] = j),
                (g[14] = d))
              : (d = g[14]),
            g[15] !== x || g[16] !== d
              ? ((u = (0, n.jsx)(l.m, { enabledWhen: "target-hidden", side: "bottom", content: x, children: d })),
                (g[15] = x),
                (g[16] = d),
                (g[17] = u))
              : (u = g[17]),
            g[18] !== x || g[19] !== I || g[20] !== u
              ? ((p = (0, n.jsxs)(s.J5, { label: x, children: [I, u] })),
                (g[18] = x),
                (g[19] = I),
                (g[20] = u),
                (g[21] = p))
              : (p = g[21]),
            p
          )
        },
      },
    )
  },
  TGoC(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      i = a("SPnB"),
      o = a("dJBt"),
      s = a("OWtl"),
      c = a("NRR1"),
      d = a("tv8P")
    function u(e) {
      let t,
        a,
        u,
        g,
        m = (0, r.c)(18),
        { directPermissionsPending: h, pageId: f } = e,
        v = (0, l.gh)(s.u),
        y = (0, l.Ul)(c.DO),
        b = (0, l.Ul)(i.chatGptAuthenticatedUserId$),
        { accountUserId: x } = (0, l.Ul)(i.PO)
      m[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (m[0] = t)) : (t = m[0])
      let { data: C, refetch: w } = (0, l._U)(d.spacePageAncestryQuery$, f, t)
      return null != y &&
        (h ||
          (C?.metadata.access.can_read === !0 &&
            null == C.metadata.deleted_at &&
            !1 === C.metadata.display_metadata_included))
        ? (m[1] !== y || m[2] !== x || m[3] !== h || m[4] !== f || m[5] !== b
            ? ((a = JSON.stringify([y, b, x, f, h])),
              (m[1] = y),
              (m[2] = x),
              (m[3] = h),
              (m[4] = f),
              (m[5] = b),
              (m[6] = a))
            : (a = m[6]),
          m[7] !== y || m[8] !== x || m[9] !== h || m[10] !== f || m[11] !== w || m[12] !== v || m[13] !== b
            ? ((u = () => {
                if (
                  v.get(c.DO) === y &&
                  v.get(i.chatGptAuthenticatedUserId$) === b &&
                  v.get(i.PO).accountUserId === x
                ) {
                  if (h) return void w({ cancelRefetch: !1 })
                  v.query.fetch(d.spacePageAncestryQuery$, f).catch(p)
                }
              }),
              (m[7] = y),
              (m[8] = x),
              (m[9] = h),
              (m[10] = f),
              (m[11] = w),
              (m[12] = v),
              (m[13] = b),
              (m[14] = u))
            : (u = m[14]),
          m[15] !== a || m[16] !== u
            ? ((g = (0, n.jsx)(o.X, { requireVisibleAtPaint: !0, onPaint: u }, a)),
              (m[15] = a),
              (m[16] = u),
              (m[17] = g))
            : (g = m[17]),
          g)
        : null
    }
    function p() {}
    a.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            a,
            i,
            o,
            s = (0, r.c)(6),
            { pageId: c } = e
          s[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (s[0] = t)) : (t = s[0])
          let { missingAncestorPageId: p } = (0, l._U)(d.spacePageContext$, c, t)
          s[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { enabled: !1 }), (s[1] = a)) : (a = s[1])
          let { data: g } = (0, l._U)(d.spacePageAncestryQuery$, c, a)
          s[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { enabled: !1 }), (s[2] = i)) : (i = s[2])
          let { data: m } = (0, l._U)(d.spacePageQuery$, c, i),
            h =
              m?.capabilities_pending === !0 &&
              !0 !== m.metadata.capabilities_pending &&
              m.metadata.access.can_read &&
              !m.metadata.view_only &&
              null == m.metadata.deleted_at,
            f = h || g?.metadata.display_metadata_included === !1 ? c : (p ?? c)
          return (
            s[3] !== h || s[4] !== f
              ? ((o = (0, n.jsx)(u, { directPermissionsPending: h, pageId: f })), (s[3] = h), (s[4] = f), (s[5] = o))
              : (o = s[5]),
            o
          )
        },
      },
    )
  },
  UOwN(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      i = a("SgPg"),
      o = a("ISnp"),
      s = a("oXsw"),
      c = a("rTPf")
    a.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            a,
            d,
            u = (0, r.c)(15),
            {
              accountUserId: p,
              avatarUrl: g,
              fadeIn: m,
              initialsAppearance: h,
              loading: f,
              loadingFallback: v,
              muted: y,
              name: b,
              profileQueryEnabled: x,
              size: C,
            } = e,
            w = void 0 === x || x,
            I = void 0 === C ? "sm" : C,
            { isProfileVisible: j } = (0, o.D)()
          u[0] !== p || u[1] !== j ? ((t = j && null != p ? [p] : []), (u[0] = p), (u[1] = j), (u[2] = t)) : (t = u[2])
          let _ = (0, l._U)(s.H, t)
          u[3] !== w ? ((a = { enabled: w }), (u[3] = w), (u[4] = a)) : (a = u[4])
          let A = (0, l._U)(c.tg, null == _.url && null == g ? p : null, a),
            S = _.url ?? g ?? A,
            k = p ?? void 0,
            P = f || (_.loading && null == g)
          return (
            u[5] !== m ||
            u[6] !== h ||
            u[7] !== v ||
            u[8] !== y ||
            u[9] !== b ||
            u[10] !== I ||
            u[11] !== S ||
            u[12] !== k ||
            u[13] !== P
              ? ((d = (0, n.jsx)(i.T, {
                  avatarUrl: S,
                  colorKey: k,
                  fadeIn: m,
                  initialsAppearance: h,
                  loading: P,
                  loadingFallback: v,
                  muted: y,
                  name: b,
                  size: I,
                })),
                (u[5] = m),
                (u[6] = h),
                (u[7] = v),
                (u[8] = y),
                (u[9] = b),
                (u[10] = I),
                (u[11] = S),
                (u[12] = k),
                (u[13] = P),
                (u[14] = d))
              : (d = u[14]),
            d
          )
        },
      },
    )
  },
  oXsw(e, t, a) {
    var n = a("qmMi"),
      r = a("SPnB"),
      l = a("wVQa"),
      i = a("bvo3"),
      o = a("OWtl")
    let s = (0, n.vU)(o.u, (e, { get: t }) => {
        let a = t(r.chatGptAuthenticatedAccountId$)
        return (0, i.PS)({
          accountId: a,
          userId: t(r.chatGptAuthenticatedUserId$),
          isProfileVisible: t(l.H),
          enabled: null != a,
        })
      }),
      c = (0, n.i1)(o.u, (e, { get: t }) => {
        let a = t(r.chatGptAuthenticatedUserId$),
          n = e.find((e) => null != a && e.split("__")[0] === a.split("__")[0]) ?? null
        if (null == n) return { accountUserId: n, url: null, loading: !1 }
        let l = t(s, null),
          i = l.data?.imageUrl
        return {
          accountUserId: n,
          url: i?.startsWith("https://cdn.auth0.com/avatars/") ? null : (i ?? null),
          loading: l.isLoading,
        }
      })
    a.d(t, {}, { H: c })
  },
  rTPf(e, t, a) {
    var n = a("CpsU"),
      r = a.n(n),
      l = a("qmMi"),
      i = a("DBCl"),
      o = a("SPnB"),
      s = a("Kwur"),
      c = a("tv8P"),
      d = a("AOG7"),
      u = a("OWtl"),
      p = a("Wuyk"),
      g = a("rvFo")
    let m = (0, l.T1)(u.u, ({ accountId: e, userId: t, namesOnly: a = !1 }, { scope: n }) => {
        let l = null
        return (o, d) => {
          d.throwIfAborted()
          let u = (0, i.udX)()
          if (l?.account?.signal.aborted || null == l) {
            let i = { lookups: [{ accountUserId: o, signal: d, result: u }] }
            l = i
            let p = (0, c.watchSpaceAccount)(n, e, t)
            ;((i.account = p),
              setTimeout(() => {
                l === i && (l = null)
                let t = i.lookups.filter((e) => !e.signal.aborted || (e.result.reject(e.signal.reason), !1))
                Promise.all(
                  r()(t, 50).map(async (t) => {
                    try {
                      p.signal.throwIfAborted()
                      let n = await s.Request.safeGet("/spaces/people", {
                        parameters: {
                          query: {
                            account_id: e,
                            ...(a ? { names_only: !0 } : { include_profile_details: !0 }),
                            account_user_ids: t.map((e) => e.accountUserId),
                            limit: t.length,
                          },
                        },
                        signal: p.signal,
                      })
                      for (let e of (p.signal.throwIfAborted(), t))
                        e.result.resolve(n.items.find((t) => t.account_user_id === e.accountUserId) ?? null)
                    } catch (e) {
                      for (let a of t) a.result.reject(e)
                    }
                  }),
                ).finally(p.stop)
              }, 0))
          } else l.lookups.push({ accountUserId: o, signal: d, result: u })
          return u.promise
        }
      }),
      h = (0, l.vU)(u.u, (e, { get: t }) => {
        let a = t(c.spaceAccountId$),
          n = t(o.chatGptAuthenticatedUserId$),
          r = t(o.kf),
          l = null == a ? null : t(m, { accountId: a, userId: n })
        return {
          enabled: null != a && null != n && "loaded" === r.status && "workspace" === r.structure,
          queryKey: ["space-person", a, n, e],
          staleTime: 3e5,
          retry: p.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (null == l) throw Error("account id is required")
            let a = await l(e, t)
            return (t.throwIfAborted(), a)
          },
        }
      }),
      f = (0, l.vU)(u.u, (e, { get: t }) => {
        let a = t(c.spaceAccountId$),
          n = t(o.chatGptAuthenticatedUserId$),
          r = t(o.kf),
          l =
            "loaded" === r.status
              ? "workspace" === r.structure
              : "workspace" === r.structureAtLogin && a === t(o.chatGptAuthenticatedAccountId$)
        return {
          enabled: null != a && null != n && l,
          queryKey: ["space-person-name", a, n, e],
          staleTime: 3e5,
          retry: !1,
          queryFn: async ({ signal: r }) => {
            if (null == a) return null
            let l = t(m, { accountId: a, userId: n, namesOnly: !0 }),
              i = await l(e, r)
            return (r.throwIfAborted(), i?.name?.trim() || null)
          },
        }
      }),
      v = (0, l.i1)(u.u, (e, { get: t }) => {
        if (null == e) return null
        let a = t(h, e, { enabled: !1 }).data?.name?.trim()
        if (a) return a
        let n = t(f, e)
        return n.isError ? t(h, e).data?.name?.trim() || null : (n.data ?? null)
      }),
      y = (0, l.vU)(u.u, (e, { get: t, scope: a }) => {
        let n = t(c.spaceAccountId$),
          r = t(o.chatGptAuthenticatedUserId$)
        return {
          enabled: null != n && e.length > 0,
          queryKey: ["space-people", n, r, e],
          staleTime: g.D.THIRTY_SECONDS,
          gcTime: g.D.ONE_MINUTE,
          retry: p.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (
              (await new Promise((e, a) => {
                let n = () => {
                    ;(clearTimeout(r), a(new DOMException("Aborted", "AbortError")))
                  },
                  r = setTimeout(() => {
                    ;(t.removeEventListener("abort", n), e())
                  }, 150)
                ;(t.addEventListener("abort", n, { once: !0 }), t.aborted && n())
              }),
              null == n)
            )
              throw Error("account id is required")
            let l = (0, c.watchSpaceAccount)(a, n, r),
              i = AbortSignal.any([t, l.signal])
            try {
              i.throwIfAborted()
              let t = await (0, d.We)(n, e, i)
              for (let e of (i.throwIfAborted(), t)) {
                let t = a.query.snapshot(h, e.account_user_id),
                  n = t.getData(),
                  r = e.profile_username === n?.profile_username,
                  l = {
                    ...n,
                    ...e,
                    name: e.name ?? n?.name ?? null,
                    profile_username: r ? n?.profile_username : null,
                    profile_url: r ? n?.profile_url : null,
                  }
                ;((l.avatar_url = l.avatar_url ?? n?.avatar_url),
                  t.setData(l, { updatedAt: r ? (a.queryClient.getQueryState(t.queryKey)?.dataUpdatedAt ?? 0) : 0 }))
              }
              return t.map((e) => ({ ...e, name: e.name ?? null }))
            } finally {
              l.stop()
            }
          },
        }
      }),
      b = (0, l.i1)(u.u, (e, { get: t }) =>
        null == e || null == t(c.spaceAccountId$) ? null : (t(h, e).data?.avatar_url ?? null),
      ),
      x = (0, l.i1)(u.u, (e, { get: t }) => (null == e ? null : t(h, e).data?.name?.trim() || null))
    a.d(t, {}, { DC: y, Ks: h, ik: x, tg: b, xW: v })
  },
  g3Mf(e, t, a) {
    a.d(t, { SpacePage: () => e9 })
    var n = a("ABep"),
      r = a("QosV"),
      l = a("qmMi"),
      i = a("WoME"),
      o = a("G4E3"),
      s = a("zd8w"),
      c = a("oyxz"),
      d = a("Ywss"),
      u = a("E8Sp"),
      p = a("SPnB"),
      g = a("FrrB"),
      m = a("U0ZI"),
      h = a("zOE4"),
      f = a("gbrq"),
      v = a("tv8P"),
      y = a("tSEg"),
      b = a("oLc1")
    function x(e) {
      let t,
        a,
        n = (0, r.c)(13),
        { pageId: i } = e,
        o = (0, l.gh)(y.GD),
        c = (0, l.Ul)(v.spaceAccountId$),
        u = (0, d.zy)(),
        { data: p } = (0, l._U)(v.spacePageQuery$, i),
        g = p?.metadata.access.can_read === !0 && null == p.metadata.deleted_at,
        m = u.state?.pageArtifact
      return (
        n[0] !== c || n[1] !== g || n[2] !== i || n[3] !== o || n[4] !== m
          ? ((t = () => {
              if (!g || null == c || m?.accountId !== c || m.pageId !== i) return
              let e = new AbortController()
              return (
                (0, b.o)(o, m.reference, e.signal, i),
                () => {
                  ;(e.abort(), (0, f.m_)(o, !1))
                }
              )
            }),
            (n[0] = c),
            (n[1] = g),
            (n[2] = i),
            (n[3] = o),
            (n[4] = m),
            (n[5] = t))
          : (t = n[5]),
        n[6] !== c || n[7] !== g || n[8] !== u.key || n[9] !== i || n[10] !== o || n[11] !== m
          ? ((a = [o, c, i, g, m, u.key]),
            (n[6] = c),
            (n[7] = g),
            (n[8] = u.key),
            (n[9] = i),
            (n[10] = o),
            (n[11] = m),
            (n[12] = a))
          : (a = n[12]),
        (0, s.useEffect)(t, a),
        null
      )
    }
    var C = a("NwSQ"),
      w = a("ChYf"),
      I = a("UOa8"),
      j = a("g2p6"),
      _ = a("jAnS"),
      A = a("OAko"),
      S = a("JNtf"),
      k = a("uXTt"),
      P = a("G4Vg"),
      T = a("lHrO"),
      M = a("hXxx")
    function L(e) {
      let t,
        a,
        l,
        i,
        o,
        s,
        d = (0, r.c)(11),
        { onClose: u, live: p, debug_pricingBacktestEnabled: g } = e
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
              "aria-hidden": "true",
              className: "col-start-2 text-center text-heading-app leading-[34px] font-semibold tracking-[0.36px]",
              children: (0, n.jsx)(c.A, { ...M.V }),
            })),
            (d[0] = t))
          : (t = d[0]),
        d[1] !== g || d[2] !== p || d[3] !== u
          ? ((a =
              null == u
                ? null
                : (0, n.jsx)(T.d, {
                    liveSurface: p && null == g ? "visible" : void 0,
                    onClick: u,
                    inlineIcon: !0,
                    useLegacyCloseButton: g,
                  })),
            (d[1] = g),
            (d[2] = p),
            (d[3] = u),
            (d[4] = a))
          : (a = d[4]),
        d[5] !== a
          ? ((l = (0, n.jsxs)("header", {
              className: "relative grid grid-cols-[1fr_auto_1fr] items-center px-6 pt-16 pb-10 md:pt-18 md:pb-8",
              children: [t, a],
            })),
            (d[5] = a),
            (d[6] = l))
          : (l = d[6]),
        d[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)("div", {
              role: "status",
              className:
                "mb-10 flex h-11 items-center justify-center px-4 text-center text-sm text-secondary select-none",
              children: (0, n.jsx)(c.A, { id: "pricing.comparison.loading", defaultMessage: "Loading plans\u2026" }),
            })),
            (d[7] = i))
          : (i = d[7]),
        d[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)("div", {
              "aria-hidden": "true",
              className:
                "grid grid-cols-[minmax(0,25rem)] justify-center gap-6 px-4 min-[52rem]:grid-cols-[repeat(2,minmax(0,25rem))]",
              children: [0, 1].map(E),
            })),
            (d[8] = o))
          : (o = d[8]),
        d[9] !== l
          ? ((s = (0, n.jsxs)("main", {
              className: "h-full overflow-y-auto bg-surface-secondary",
              children: [l, i, o],
            })),
            (d[9] = l),
            (d[10] = s))
          : (s = d[10]),
        s
      )
    }
    function E(e) {
      return (0, n.jsxs)(
        "div",
        {
          className: "min-h-[684px] rounded-3xl border border-default bg-surface-card p-6",
          children: [
            (0, n.jsx)("div", { className: "h-2 w-2/5 rounded-full bg-text/10" }),
            (0, n.jsx)("div", { className: "mt-6 h-2 w-4/5 rounded-full bg-text/5" }),
            (0, n.jsx)("div", { className: "mt-3 h-2 w-2/3 rounded-full bg-text/5" }),
          ],
        },
        e,
      )
    }
    var N = a("DGWL"),
      U = a("LwKq"),
      F = a("T0Rc"),
      D = a("irkb"),
      O = a("Bbed"),
      V = a("rLiN"),
      z = a("OKQq"),
      $ = a("hZax")
    let B = (0, O._)(async () => (await (0, U.U)()).PricingPlanPageContent, {
      suspendToParent: !0,
      propagateLoadError: !0,
    })
    function q(e) {
      let t,
        a,
        l,
        i,
        o,
        c,
        u = (0, r.c)(20),
        p = (0, A.YL)("always"),
        { accountId: g, authMethod: m, hasChatGptToken: h, planAtLogin: f, userId: v } = (0, I.As)()
      u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            queryKey: ["browser-pricing-page-component"],
            queryFn: G,
            enabled: !0,
            staleTime: 1 / 0,
            networkMode: "always",
            retry: R,
            retryDelay: 200,
            retryOnMount: !0,
          }),
          (u[0] = t))
        : (t = u[0])
      let { data: y, error: b } = (0, F.I)(t),
        x = (0, D.jE)(),
        w = (0, $.AS)(),
        j = (0, d.zy)()
      u[1] !== j.search || u[2] !== w
        ? ((a = () => ((0, C._$)(j.search) ? void 0 : (w.getContext().user.country ?? "US"))),
          (u[1] = j.search),
          (u[2] = w),
          (u[3] = a))
        : (a = u[3])
      let [_] = (0, s.useState)(a),
        S = null == p.data ? "free" === f : p.data.id === g && "free" === p.data.plan_type
      if (
        (u[4] !== g || u[5] !== m || u[6] !== _ || u[7] !== h || u[8] !== S || u[9] !== x || u[10] !== v
          ? ((l = () => {
              null != _ &&
                "chatgpt" === m &&
                h &&
                S &&
                null != g &&
                null != v &&
                (0, V.H1)(x, { accountId: g, userId: v }, _)
            }),
            (i = [g, m, _, h, S, x, v]),
            (u[4] = g),
            (u[5] = m),
            (u[6] = _),
            (u[7] = h),
            (u[8] = S),
            (u[9] = x),
            (u[10] = v),
            (u[11] = l),
            (u[12] = i))
          : ((l = u[11]), (i = u[12])),
        (0, s.useLayoutEffect)(l, i),
        null != b)
      )
        throw b
      return (
        u[13] !== y || u[14] !== p || u[15] !== e
          ? ((o = null == y ? e.loadingContent : (0, n.jsx)(y, { ...e, account: p })),
            (u[13] = y),
            (u[14] = p),
            (u[15] = e),
            (u[16] = o))
          : (o = u[16]),
        u[17] !== e.loadingContent || u[18] !== o
          ? ((c = (0, n.jsx)(s.Suspense, { fallback: e.loadingContent, children: o })),
            (u[17] = e.loadingContent),
            (u[18] = o),
            (u[19] = c))
          : (c = u[19]),
        c
      )
    }
    function R(e, t) {
      return 0 === e && !(0, z.g)(t)
    }
    async function G() {
      return (await (0, U.U)()).PricingPlanPageForAccount
    }
    var H = a("SXZ1"),
      W = a("OWtl"),
      K = a("pasN"),
      Z = a("jZDY"),
      Q = a("C5iq"),
      X = a("z3Js")
    let Y = { "data-codex-pricing-overlay": "" }
    function J() {
      let e,
        t,
        a,
        i,
        o,
        c,
        u,
        p,
        g = (0, r.c)(25),
        m = (0, l.gh)(W.u),
        h = (0, d.zy)(),
        f = (0, d.Zp)(),
        v = (0, d.$P)(h),
        { accountId: y, userId: b } = (0, I.As)(),
        x = (0, l.Ul)(H.UP),
        w = (0, Z.I)(),
        j = x?.accountId === y && x?.userId === b
      g[0] !== x?.url || g[1] !== v || g[2] !== w || g[3] !== j
        ? ((e = w && j && x?.url === new URL(v, window.location.href).href),
          (g[0] = x?.url),
          (g[1] = v),
          (g[2] = w),
          (g[3] = j),
          (g[4] = e))
        : (e = g[4])
      let A = e
      g[5] !== h ? ((t = (0, d.AO)(h)), (g[5] = h), (g[6] = t)) : (t = g[6])
      let S = (0, s.useRef)(t)
      if (
        (g[7] !== h
          ? ((a = () => {
              S.current = (0, d.AO)(h)
            }),
            (i = [h]),
            (g[7] = h),
            (g[8] = a),
            (g[9] = i))
          : ((a = g[8]), (i = g[9])),
        (0, s.useLayoutEffect)(a, i),
        g[10] !== x || g[11] !== w || g[12] !== f || g[13] !== j || g[14] !== A || g[15] !== m
          ? ((o = () => {
              w &&
                j &&
                x?.redirectConversationId !== void 0 &&
                (A
                  ? "complete" !== m.get(H._x, x.accountId) &&
                    (m.set(H._x, x.accountId, "complete"),
                    f(null == x.redirectConversationId ? "/" : (0, _.mv)(x.redirectConversationId)))
                  : (0, H.sU)(m, null))
            }),
            (c = [x, w, f, j, A, m]),
            (g[10] = x),
            (g[11] = w),
            (g[12] = f),
            (g[13] = j),
            (g[14] = A),
            (g[15] = m),
            (g[16] = o),
            (g[17] = c))
          : ((o = g[16]), (c = g[17])),
        (0, s.useLayoutEffect)(o, c),
        !w || (A && x?.redirectConversationId !== void 0) || !(0, X.Q7)(h))
      )
        return null
      g[18] !== b ? ((u = (0, n.jsx)(et, { userId: b, currentPath: S }, b)), (g[18] = b), (g[19] = u)) : (u = g[19])
      let k = u
      return (
        g[20] !== k || g[21] !== h.pathname || g[22] !== h.search || g[23] !== A
          ? ((p = (0, Q.lg)(h.pathname) && !(0, C._$)(h.search) ? (0, n.jsx)(ee, { pendingEntry: A, children: k }) : k),
            (g[20] = k),
            (g[21] = h.pathname),
            (g[22] = h.search),
            (g[23] = A),
            (g[24] = p))
          : (p = g[24]),
        p
      )
    }
    function ee(e) {
      let t,
        a,
        n = (0, r.c)(2),
        { children: i, pendingEntry: o } = e,
        { authMethod: s, accountId: c, userId: d } = (0, I.As)(),
        { data: u, isError: p } = (0, A.YL)(),
        g = (0, l.Ul)(j.Sk),
        m = (0, l.Ul)(K.l)
      n[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "chatgpt" }), (n[0] = t)) : (t = n[0])
      let h = (0, l._U)(w.G, t)
      n[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { name: "codex.browser" }), (n[1] = a)) : (a = n[1])
      let f = (0, l._U)(w.G, a),
        v = (0, l._U)(H.S3, "work" === m && h.isCapable && c === g ? c : null)
      return "work" !== m
        ? f.isLoading
          ? null
          : i
        : h.isLoading ||
            (h.isCapable &&
              "chatgpt" === s &&
              (!p || null != u) &&
              (null == d || "ineligible" !== v || o) &&
              (null == d || u?.id !== c || u.id !== g || ("personal" === u.structure && "free" === u.plan_type)))
          ? null
          : i
    }
    function et(e) {
      let t,
        a,
        l,
        i,
        o,
        s,
        c = (0, r.c)(26),
        { currentPath: u, userId: p } = e,
        g = (0, d.zy)(),
        m = (0, d.Zp)(),
        h = (0, $.cn)()
      c[0] !== g.search || c[1] !== h
        ? ((t = (0, N.u)(g.search, h)), (c[0] = g.search), (c[1] = h), (c[2] = t))
        : (t = c[2])
      let f = t
      c[3] !== g.search ? ((a = (0, C.mb)(g.search)), (c[3] = g.search), (c[4] = a)) : (a = c[4])
      let v = "codex_app_embedded" === a,
        y = g.state ?? null
      c[5] !== g.pathname || c[6] !== g.search || c[7] !== y
        ? ((l =
            y?.beaconProPlanChange == null
              ? (y?.returnPath ?? `${g.pathname}${g.search}`)
              : ((0, P.$6)(y.returnPath) ?? "/")),
          (c[5] = g.pathname),
          (c[6] = g.search),
          (c[7] = y),
          (c[8] = l))
        : (l = c[8])
      let b = l
      c[9] !== m || c[10] !== b
        ? ((i = () => {
            m(b, { replace: !0 })
          }),
          (c[9] = m),
          (c[10] = b),
          (c[11] = i))
        : (i = c[11])
      let x = i
      c[12] !== x || c[13] !== u || c[14] !== f || c[15] !== g.search || c[16] !== b || c[17] !== v || c[18] !== p
        ? ((o =
            null == f
              ? (0, n.jsx)(L, {})
              : (0, n.jsx)(er, {
                  currentPath: u,
                  returnPath: b,
                  hideCloseButton: (0, C._$)(g.search),
                  excludePricingExperiments: f,
                  showEmbeddedLoading: v,
                  userId: p,
                  onClose: x,
                })),
          (c[12] = x),
          (c[13] = u),
          (c[14] = f),
          (c[15] = g.search),
          (c[16] = b),
          (c[17] = v),
          (c[18] = p),
          (c[19] = o))
        : (o = c[19])
      let w = o
      return (
        c[20] !== x || c[21] !== w || c[22] !== u || c[23] !== b || c[24] !== v
          ? ((s = v ? (0, n.jsx)(ea, { currentPath: u, returnPath: b, onClose: x, children: w }) : w),
            (c[20] = x),
            (c[21] = w),
            (c[22] = u),
            (c[23] = b),
            (c[24] = v),
            (c[25] = s))
          : (s = c[25]),
        s
      )
    }
    function ea(e) {
      let t,
        a,
        l,
        i,
        o,
        u,
        p = (0, r.c)(14),
        { children: g, currentPath: m, returnPath: h, onClose: f } = e,
        v = (0, d.zy)(),
        y = (0, s.useRef)(null)
      return (
        p[0] !== f
          ? ((t = (e) => {
              e || f()
            }),
            (p[0] = f),
            (p[1] = t))
          : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (e) => {
              let t = e.target,
                a = document.activeElement
              y.current = t instanceof HTMLElement && a instanceof HTMLElement ? { opener: a, dialog: t } : null
            }),
            (p[2] = a))
          : (a = p[2]),
        p[3] !== m || p[4] !== h
          ? ((l = {
              ...Y,
              "aria-describedby": void 0,
              onOpenAutoFocus: a,
              onCloseAutoFocus: (e) => {
                let t = y.current
                if (((y.current = null), null == t || !t.opener.isConnected)) return
                let { activeElement: a, body: n } = t.opener.ownerDocument
                m.current === h && (a === n || t.dialog.contains(a)) && (e.preventDefault(), t.opener.focus())
              },
            }),
            (p[3] = m),
            (p[4] = h),
            (p[5] = l))
          : (l = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(S.L3, { className: "sr-only", children: (0, n.jsx)(c.A, { ...M.V }) })), (p[6] = i))
          : (i = p[6]),
        p[7] !== g || p[8] !== v.key
          ? ((o = (0, n.jsx)(k.t, { name: "BrowserPricing", resetKey: v.key, fallback: en, children: g })),
            (p[7] = g),
            (p[8] = v.key),
            (p[9] = o))
          : (o = p[9]),
        p[10] !== t || p[11] !== l || p[12] !== o
          ? ((u = (0, n.jsxs)(S.lG, {
              open: !0,
              shouldIgnoreClickOutside: !0,
              onOpenChange: t,
              unstyledContent: !0,
              viewportSized: !0,
              showDialogClose: !1,
              contentProps: l,
              children: [i, o],
            })),
            (p[10] = t),
            (p[11] = l),
            (p[12] = o),
            (p[13] = u))
          : (u = p[13]),
        u
      )
    }
    function en(e) {
      return (0, n.jsx)(k.j, { ...e })
    }
    function er(e) {
      let t,
        a,
        l,
        i,
        o,
        c = (0, r.c)(23),
        {
          currentPath: d,
          excludePricingExperiments: u,
          hideCloseButton: p,
          returnPath: g,
          showEmbeddedLoading: m,
          userId: h,
          onClose: f,
        } = e,
        v = (0, $.cn)()
      c[0] !== u || c[1] !== v || c[2] !== h
        ? ((t = () => !u && (0, U.H)(v, h)), (c[0] = u), (c[1] = v), (c[2] = h), (c[3] = t))
        : (t = c[3])
      let [y] = (0, s.useState)(t),
        b = y && !u
      if (m) {
        let e
        ;(c[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(L, {})), (c[4] = e)) : (e = c[4]),
          (a = e))
      } else if (b) {
        let e,
          t = p ? void 0 : f
        ;(c[5] !== t ? ((e = (0, n.jsx)(L, { onClose: t, live: !0 })), (c[5] = t), (c[6] = e)) : (e = c[6]), (a = e))
      }
      let x = b ? q : B
      c[7] !== x || c[8] !== u || c[9] !== p || c[10] !== a || c[11] !== g || c[12] !== b
        ? ((l = (0, n.jsx)(x, {
            modal: !0,
            returnPath: g,
            hideCloseButton: p,
            excludePricingExperiments: u,
            optimizedPricing: b,
            loadingContent: a,
          })),
          (c[7] = x),
          (c[8] = u),
          (c[9] = p),
          (c[10] = a),
          (c[11] = g),
          (c[12] = b),
          (c[13] = l))
        : (l = c[13])
      let C = l,
        w = m ? a : null
      return (
        c[14] !== C || c[15] !== d || c[16] !== f || c[17] !== g || c[18] !== m
          ? ((i = m ? C : (0, n.jsx)(ea, { currentPath: d, returnPath: g, onClose: f, children: C })),
            (c[14] = C),
            (c[15] = d),
            (c[16] = f),
            (c[17] = g),
            (c[18] = m),
            (c[19] = i))
          : (i = c[19]),
        c[20] !== w || c[21] !== i
          ? ((o = (0, n.jsx)(s.Suspense, { fallback: w, children: i })), (c[20] = w), (c[21] = i), (c[22] = o))
          : (o = c[22]),
        o
      )
    }
    var el = a("Sm6l"),
      ei = a("x2fw"),
      eo = a("e1xH"),
      es = a("VYrI"),
      ec = a("HIqv"),
      ed = a("qyu6"),
      eu = a("ILi7")
    function ep(e) {
      let t,
        a,
        i,
        o = (0, r.c)(6),
        { pageId: s } = e,
        d = (0, l.gh)(W.u),
        u = (0, l._U)(v.loadedSpacePageMetadata$, s)
      return (0, l.Ul)(ed.$) && u?.access.can_read === !0 && null == u.deleted_at
        ? (o[0] !== s || o[1] !== d
            ? ((t = () => (0, eu.g$)(d, { kind: "page", id: s })), (o[0] = s), (o[1] = d), (o[2] = t))
            : (t = o[2]),
          o[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(c.A, { ...eu.PN.document })), (o[3] = a))
            : (a = o[3]),
          o[4] !== t
            ? ((i = (0, n.jsx)(el.$, { color: "secondary", type: "button", onClick: t, children: a })),
              (o[4] = t),
              (o[5] = i))
            : (i = o[5]),
          i)
        : null
    }
    var eg = a("Wf1j"),
      em = a("bqtn"),
      eh = a("bVeK"),
      ef = a("cbaZ"),
      ev = a("j3pa")
    function ey() {
      let e,
        t,
        a,
        l,
        i,
        o,
        s,
        u,
        p,
        g,
        m,
        h = (0, r.c)(32),
        f = (0, eg.A)(),
        {
          accountId: v,
          accountStructureAtLogin: y,
          email: b,
          nameAtLogin: x,
          profilePictureUrlAtLogin: C,
          userId: w,
        } = (0, I.As)(),
        { data: j } = (0, A.oV)(),
        _ = j?.accounts?.find((e) => e.id === v),
        S = (0, d.zy)(),
        k = (0, d.$P)(S),
        P =
          (_?.structure ?? y) === "personal"
            ? (0, n.jsx)(c.A, { id: "codex.profileDropdown.personalAccountTitle", defaultMessage: "Personal account" })
            : _?.name?.trim() || (0, n.jsx)(c.A, { id: "pages.sharedViewer.workspace", defaultMessage: "Workspace" }),
        T = b ?? void 0
      ;(h[0] !== b || h[1] !== x
        ? ((e =
            b ??
            x ??
            (0, n.jsx)(c.A, { id: "pages.sharedViewer.signedInAccount", defaultMessage: "Signed-in account" })),
          (h[0] = b),
          (h[1] = x),
          (h[2] = e))
        : (e = h[2]),
        h[3] !== T || h[4] !== e
          ? ((t = (0, n.jsx)("p", { className: "truncate", title: T, children: e })),
            (h[3] = T),
            (h[4] = e),
            (h[5] = t))
          : (t = h[5]),
        h[6] !== P
          ? ((a = (0, n.jsx)("p", { className: "truncate text-xs text-secondary", children: P })),
            (h[6] = P),
            (h[7] = a))
          : (a = h[7]),
        h[8] !== t || h[9] !== a
          ? ((l = (0, n.jsxs)("div", { className: "min-w-0 text-end text-sm", children: [t, a] })),
            (h[8] = t),
            (h[9] = a),
            (h[10] = l))
          : (l = h[10]),
        h[11] !== f
          ? ((i = f.formatMessage({
              id: "pages.sharedViewer.switchAccount",
              defaultMessage: "Switch account or workspace",
            })),
            (h[11] = f),
            (h[12] = i))
          : (i = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, n.jsx)(eh.CHX, {})), (h[13] = o)) : (o = h[13]),
        h[14] !== i
          ? ((s = (0, n.jsx)(el.$, { color: "ghost", size: "iconTouch", "aria-label": i, children: o })),
            (h[14] = i),
            (h[15] = s))
          : (s = h[15]))
      let M = C ?? null,
        L = x ?? null
      return (
        h[16] !== _ ||
        h[17] !== j ||
        h[18] !== b ||
        h[19] !== k ||
        h[20] !== M ||
        h[21] !== L ||
        h[22] !== w ||
        h[23] !== P
          ? ((u = (0, n.jsx)(ev.Dz, {
              currentAccount: _,
              currentAccountLabel: P,
              currentAccounts: j,
              currentEmail: b,
              currentUserId: w,
              currentUserImageUrl: M,
              currentUserName: L,
              returnHref: k,
              showWorkspaceManagement: !1,
            })),
            (h[16] = _),
            (h[17] = j),
            (h[18] = b),
            (h[19] = k),
            (h[20] = M),
            (h[21] = L),
            (h[22] = w),
            (h[23] = P),
            (h[24] = u))
          : (u = h[24]),
        h[25] !== u || h[26] !== s
          ? ((p = (0, n.jsx)(em.Ab, { align: "end", triggerButton: s, children: u })),
            (h[25] = u),
            (h[26] = s),
            (h[27] = p))
          : (p = h[27]),
        h[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)(ef.k, { filter: eb })), (h[28] = g))
          : (g = h[28]),
        h[29] !== p || h[30] !== l
          ? ((m = (0, n.jsxs)("div", {
              className: "ms-auto flex max-w-full min-w-0 items-center gap-2",
              children: [l, p, g],
            })),
            (h[29] = p),
            (h[30] = l),
            (h[31] = m))
          : (m = h[31]),
        m
      )
    }
    function eb(e) {
      let { ModalComponent: t } = e
      return t === ev.FP
    }
    var ex = a("UjNE")
    function eC(e) {
      let t,
        a,
        i,
        s,
        u,
        p,
        m,
        f,
        y,
        b,
        x = (0, r.c)(34),
        { pageId: C } = e,
        w = (0, l._U)(eo.tx, C),
        I = (0, l.Ul)(eo.pagesEnabled$),
        j = (0, l.Ul)(eo.cZ),
        _ = (0, d.zy)(),
        A = new URLSearchParams(_.search),
        S = I && !A.has("invitation_id")
      x[0] !== S ? ((t = { enabled: S }), (x[0] = S), (x[1] = t)) : (t = x[1])
      let { data: k, isFetching: P } = (0, l._U)(v.spacePageQuery$, C, t),
        T = `page://${C}${_.hash}`
      x[2] !== T ? ((a = (0, o.I0)(T)), (x[2] = T), (x[3] = a)) : (a = x[3])
      let M = a
      if ("loading" === w || ("disabled" === w && I && P)) {
        let e
        ;(x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.LoadingPage, { routeFallback: !0, fillParent: !0 })), (x[4] = e))
          : (e = x[4]),
          (i = e))
      } else if ("enabled" === w) {
        let e,
          t = M?.kind === "page" ? M.blockId : void 0
        if (
          (x[5] !== _.key || x[6] !== C || x[7] !== t
            ? ((e = (0, n.jsx)(ei.PageEditor, { pageId: C, blockId: t, blockNavigationKey: _.key, viewOnly: !0 }, C)),
              (x[5] = _.key),
              (x[6] = C),
              (x[7] = t),
              (x[8] = e))
            : (e = x[8]),
          (i = e),
          A.has("invitation_id"))
        ) {
          let e
          ;(x[9] !== C ? ((e = { kind: "page", id: C }), (x[9] = C), (x[10] = e)) : (e = x[10]),
            (i = (0, n.jsx)(es.B, { target: e, invitationId: A.get("invitation_id"), viewOnly: !0, children: i })))
        }
      } else if (null != j) {
        let e
        ;(x[11] !== C || x[12] !== j
          ? ((e = (0, n.jsx)(ex.SpaceUpgradeLanding, { currentPlan: j, pageId: C })),
            (x[11] = C),
            (x[12] = j),
            (x[13] = e))
          : (e = x[13]),
          (i = e))
      } else {
        let e, t, a
        x[14] !== C
          ? ((e = (0, n.jsx)(ec.t, { pageId: C, failure: "target_unavailable" })), (x[14] = C), (x[15] = e))
          : (e = x[15])
        let r = k?.metadata.document_type ?? "page"
        ;(x[16] !== r
          ? ((t = (0, n.jsx)(g.A, {
              layout: "page",
              title: (0, n.jsx)(c.A, {
                id: "pages.sharedViewer.unavailable.byDocumentType",
                values: { documentType: r },
                defaultMessage:
                  "{documentType, select, granola_presentation {This slide is unavailable} granola_workbook {This sheet is unavailable} other {This page is unavailable}}",
              }),
            })),
            (x[16] = r),
            (x[17] = t))
          : (t = x[17]),
          x[18] !== e || x[19] !== t
            ? ((a = (0, n.jsxs)(n.Fragment, { children: [e, t] })), (x[18] = e), (x[19] = t), (x[20] = a))
            : (a = x[20]),
          (i = a))
      }
      return (
        x[21] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, n.jsx)(J, {})), (x[21] = s)) : (s = x[21]),
        x[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(el.z, {
              color: "secondary",
              href: "/",
              children: (0, n.jsx)(c.A, {
                id: "pages.sharedViewer.returnToChatGPT",
                defaultMessage: "Back to ChatGPT",
              }),
            })),
            (x[22] = u))
          : (u = x[22]),
        x[23] !== w || x[24] !== C
          ? ((p = "enabled" === w ? (0, n.jsx)(ep, { pageId: C }) : null), (x[23] = w), (x[24] = C), (x[25] = p))
          : (p = x[25]),
        x[26] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, n.jsx)(ey, {})), (x[26] = m)) : (m = x[26]),
        x[27] !== p
          ? ((f = (0, n.jsxs)("div", {
              className: "flex shrink-0 flex-wrap items-center gap-2 p-3",
              children: [u, p, m],
            })),
            (x[27] = p),
            (x[28] = f))
          : (f = x[28]),
        x[29] !== i
          ? ((y = (0, n.jsx)("div", { className: "relative flex min-h-0 flex-1 flex-col", children: i })),
            (x[29] = i),
            (x[30] = y))
          : (y = x[30]),
        x[31] !== y || x[32] !== f
          ? ((b = (0, n.jsxs)("main", {
              className: "flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
              children: [s, f, y],
            })),
            (x[31] = y),
            (x[32] = f),
            (x[33] = b))
          : (b = x[33]),
        b
      )
    }
    var ew = a("d7OO"),
      eI = a("nlNF"),
      ej = a("uXvL"),
      e_ = a("OMIV"),
      eA = a("n8vi"),
      eS = a("rpnz")
    let ek = (0, l.T1)(W.u, (e, { scope: t, externalSignal: a }) => {
      let n,
        r,
        l = !1,
        i = !1,
        o = (e) => {
          ;((i = !0), l || n?.cancel(e))
        }
      return a(
        () => (i ? "unavailable" : (0, eS.sD)(e) && null == n ? "loading" : "ready"),
        ({ get: a, set: s }) => {
          if (!(0, eS.sD)(e)) return
          if (null == n && null != t.get(v.spacePageCreation$, e)) return void s("ready")
          let c = a(eo.NE),
            d = a(p.chatGptAuthenticatedUserId$),
            g = a(p.o8),
            m = JSON.stringify([c, d, g, a(p.Kw)])
          if (i || (null != r && r !== m)) {
            ;(o("account_changed"), s("unavailable"))
            return
          }
          if (l) return void s("ready")
          if (null == n && !a(ej.$)) {
            if (!a(p.cj) || "loading" === a(eo.GU) || a(e_.dx, "459748632") || a(e_.dx, "1032827878")) return
            ;(o("creation_unavailable"), s("unavailable"))
            return
          }
          let h = a(eI.x2)
          if (null == h) return
          if (h.pathname !== `/space/${e}`)
            return void (null == n && t.get(v.spacePageId$, e) === e
              ? (o("navigation_away"), s("unavailable"))
              : s("ready"))
          let f = new URLSearchParams(h.search),
            y = `/space/${e}?window=page`
          if (null == n) {
            let a = new URL(window.location.href).searchParams.get("initialRoute"),
              i = null == a ? null : new URL(a, "app://-"),
              d = i?.searchParams ?? f
            if (null == c || null == g || d.get("creationAccountId") !== c || d.get("creationUserId") !== g) {
              ;(o("account_changed"), s("unavailable"))
              return
            }
            if (
              "1" !== f.get("start") ||
              (null != i && (i.pathname !== h.pathname || "1" !== i.searchParams.get("start")))
            ) {
              ;(o("creation_unavailable"), s("unavailable"))
              return
            }
            ;((r = m), eP(y))
            try {
              let a = Number(d.get("typingStartedAt")),
                r = a - performance.timeOrigin
              ;(n = (0, eA.startSpacePageCreation)(
                t,
                {
                  deferUntilEdited: !0,
                  localPageId: e,
                  typingStartedAtMs: a > 0 && r <= performance.now() ? r : void 0,
                },
                (e) => {
                  ;((l = !0),
                    new URL(window.location.href).searchParams.get("initialRoute") === y &&
                      eP(`/space/${e.metadata.page_id}?window=page`))
                },
              )).completion.catch(() => void 0)
            } catch {
              ;(o("creation_unavailable"), s("unavailable"))
              return
            }
            ;(0, u.oo)(t, y, { replace: !0, state: { ...h.state, focusPageTitle: !0 } })
          }
          s("ready")
        },
      )
    })
    function eP(e) {
      let t = new URL(window.location.href)
      ;(t.searchParams.set("initialRoute", e), window.history.replaceState(window.history.state, "", t.toString()))
    }
    function eT(e) {
      let t,
        a = (0, r.c)(4),
        { children: i, pageId: o } = e,
        s = (0, l._U)(ek, o)
      if ("ready" === s) {
        let e
        return (a[0] !== i ? ((e = (0, n.jsx)(n.Fragment, { children: i })), (a[0] = i), (a[1] = e)) : (e = a[1]), e)
      }
      return (
        a[2] !== s
          ? ((t =
              "unavailable" === s
                ? (0, n.jsx)(g.A, {
                    layout: "page",
                    title: (0, n.jsx)(c.A, {
                      id: "pages.newWindow.unavailable",
                      defaultMessage: "This new Page could not be restored",
                    }),
                    description: (0, n.jsx)(c.A, {
                      id: "pages.newWindow.unavailableDescription",
                      defaultMessage:
                        "Check Personal for a Page that may already have been created, or open a new Page from Space",
                    }),
                  })
                : (0, n.jsx)(h.LoadingPage, {})),
            (a[2] = s),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    var eM = a("ZzDW"),
      eL = a("QUw8"),
      eE = a("r9ga"),
      eN = a("dTlo"),
      eU = a("SkNj"),
      eF = a("hZSj"),
      eD = a("ArMq"),
      eO = a("khOd"),
      eV = a("preB"),
      ez = a("Qnv7"),
      e$ = a("CYRu"),
      eB = a("sSEJ"),
      eq = a("XzOK"),
      eR = a("atZq"),
      eG = a("HoEE"),
      eH = a("QcW8"),
      eW = a("ZU27"),
      eK = a("AOHi"),
      eZ = a("PVyj"),
      eQ = a("uqg3"),
      eX = a("zeCl"),
      eY = a("Exwq"),
      eJ = a("dt6g"),
      e1 = a("gxFv"),
      e0 = a("Zr70"),
      e2 = a("eShZ"),
      e3 = a("GZWF"),
      e4 = a("hEJC"),
      e6 = a("Iq2T")
    function e5(e) {
      let t,
        a,
        n,
        i,
        o,
        c,
        p,
        g = (0, r.c)(23),
        { navigationKey: m, options: h, pageId: f } = e,
        b = (0, l.gh)(y.GD),
        x = (0, d.zy)(),
        C = (0, d.wQ)(),
        { instanceId: w } = (0, d.g)(),
        I = (0, s.useRef)(null)
      ;(g[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            I.current = null
          }),
          (g[0] = t))
        : (t = g[0]),
        g[1] !== f || g[2] !== b ? ((a = [f, b]), (g[1] = f), (g[2] = b), (g[3] = a)) : (a = g[3]),
        (0, s.useLayoutEffect)(t, a),
        g[4] !== b
          ? ((n = () => (0, e3.Os)(b)), (i = [b]), (g[4] = b), (g[5] = n), (g[6] = i))
          : ((n = g[5]), (i = g[6])),
        (0, s.useLayoutEffect)(n, i),
        g[7] !== w || g[8] !== x || g[9] !== m || g[10] !== C || g[11] !== h || g[12] !== f || g[13] !== b
          ? ((o = (e) => {
              let t = b.get(e6.qe),
                a = (0, e4.Fx)(t.workspaceId)
              if (a !== f) {
                null != a && (0, eS.sD)(a) && e6.Rn.adoptWorkspaceId(b, t, null == w ? f : (0, e4.xB)(f, w))
                return
              }
              if (
                (eN.W.panelOwnsRoute("page", f),
                b.get(e6.G$) ||
                  b.get(eY._0) ||
                  t.clientThreadId !== b.value.clientThreadId ||
                  (b.get(e6.bW)?.clientThreadId === b.value.clientThreadId && b.get(e6.bW)?.navigationKey === m))
              )
                return
              let n = b.get(eW.It.tabs$).find(e7),
                r = n?.kind === eX.E ? eX.T.safeParse(n.props) : null,
                l = r?.success ? b.get(v.spacePageId$, r.data.pageId) : f,
                i = void 0 !== h.blockId || !!h.focusTitle || null != h.navigationTarget
              if (null != n && (b.set(e6.EN, !0), (0, e3.Y0)(b, t.accountKey), l !== f && !i)) return
              if (e && l === f) {
                let e = b.get(eW.It.activeTab$)
                return null == e || e.isWorkspaceHome
                  ? void ((0, eI.Hj)(b) && (0, u.oo)(b, "/space?tab=all", { replace: !0 }))
                  : void b.set(e6.EN, !0)
              }
              let o = (0, e0.zq)(x),
                s = C !== d.rc.Pop && (x.state?.sidebarPrimaryContent === !0 || o?.sidebarLocationKey != null)
              if ((null != o && !s) || b.get(e6.VO) === m || b.get(e1.Hl) === m) return void b.set(e6.EN, !0)
              let c = x.state?.sidebarPrimaryContent === !0 ? m : (o?.sidebarLocationKey ?? m),
                p = I.current
              if (s && p?.key === c && p.clientThreadId === b.value.clientThreadId) return
              if (null != n && (null == p || p.key === c) && !i) {
                I.current = { key: c, clientThreadId: b.value.clientThreadId, selectionVersion: b.get(eH.bp) }
                return
              }
              if (p?.key === c && p.clientThreadId === b.value.clientThreadId && p.selectionVersion !== b.get(eH.bp))
                return
              let { opened: g } = (0, eJ.$)(b, "restore", () =>
                (0, eQ.openSpacePageSidePanelTab)(b, l, {
                  openSource: "workspace_navigation",
                  ...h,
                  tabId: n?.tabId,
                  isWorkspaceHome: !0,
                }),
              )
              g &&
                (b.set(e6.EN, !0),
                (0, e3.Y0)(b, t.accountKey),
                (I.current = { key: c, clientThreadId: b.value.clientThreadId, selectionVersion: b.get(eH.bp) }))
            }),
            (g[7] = w),
            (g[8] = x),
            (g[9] = m),
            (g[10] = C),
            (g[11] = h),
            (g[12] = f),
            (g[13] = b),
            (g[14] = o))
          : (o = g[14]))
      let j = (0, s.useEffectEvent)(o)
      return (
        g[15] !== j || g[16] !== f || g[17] !== b
          ? ((c = () => {
              let e = !0
              return b.watch((t) => {
                let { get: a } = t
                if (
                  (a(eY._0),
                  null != a(v.spaceAccountId$) &&
                    a(eo.pagesEnabled$) &&
                    a(eH.D5) &&
                    (!a(e6.G$) || (0, e4.Fx)(a(e6.qe).workspaceId) !== f))
                ) {
                  let { error: t, isFetching: n, refetch: r } = a(v.spacePageQuery$, f),
                    l = t instanceof e2.FetchError && (410 === t.status || "page_trashed" === (0, eK.vr)(t))
                  if (e && ((e = !1), l && !a(eZ.sR, f))) return void r()
                  let i = a(eZ.sR, f) || (!n && l)
                  ;(i && a(eW.It.activeTab$), j(i))
                }
              })
            }),
            (g[15] = j),
            (g[16] = f),
            (g[17] = b),
            (g[18] = c))
          : (c = g[18]),
        g[19] !== m || g[20] !== f || g[21] !== b
          ? ((p = [m, f, b]), (g[19] = m), (g[20] = f), (g[21] = b), (g[22] = p))
          : (p = g[22]),
        (0, s.useLayoutEffect)(c, p),
        null
      )
    }
    function e7(e) {
      return e.isWorkspaceHome
    }
    let e8 = (0, l.i1)(
      W.u,
      (e, { get: t }) =>
        t(v.spacesQuery$).data?.items.find((t) => "drive" === t.backing_type && t.root_page_id === e)?.id,
    )
    function e9() {
      let e,
        t,
        a,
        i = (0, r.c)(39),
        { pageId: o } = (0, d.g)(),
        s = (0, l._U)(v.spacePageEditorId$, o ?? ""),
        u = (0, l._U)(v.spacePageId$, o ?? ""),
        f = (0, l.Ul)(p.chatGptAuthenticatedUserId$),
        y = (0, l.Ul)(v.spaceAccountId$),
        b = (0, l.Ul)(p.Kw),
        x = `${y}:${f}:${b}`,
        C = `${x}:${s}`,
        w = (0, l.Ul)(p.chatGptAuthenticatedAccountId$),
        I = (0, l.Ul)(p.cj),
        j = (0, l.Ul)(p.kf),
        _ = (0, d.zy)(),
        A = (0, l._U)(eo.wc, _.pathname),
        S = (0, l.Ul)(eR.lX)
      if (
        i[0] !== x ||
        i[1] !== j ||
        i[2] !== w ||
        i[3] !== I ||
        i[4] !== _.hash ||
        i[5] !== _.pathname ||
        i[6] !== _.search ||
        i[7] !== _.state ||
        i[8] !== o ||
        i[9] !== A ||
        i[10] !== f
      ) {
        e = Symbol.for("react.early_return_sentinel")
        e: {
          let t = new URLSearchParams(_.search),
            a = t.get("account_id")?.trim()
          if (a) {
            if (!I) {
              let t
              ;(i[12] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, n.jsx)(h.LoadingPage, {})), (i[12] = t))
                : (t = i[12]),
                (e = t))
              break e
            }
            if ("personal" === a && "loaded" !== j.status) {
              let t
              ;(i[13] !== j.status
                ? ((t =
                    "loading" === j.status
                      ? (0, n.jsx)(h.LoadingPage, {})
                      : (0, n.jsx)(g.A, {
                          layout: "page",
                          title: (0, n.jsx)(c.A, {
                            id: "codex.pages.invitation.accountUnavailable",
                            defaultMessage: "We couldn\u2019t verify the account for this invitation",
                          }),
                        })),
                  (i[13] = j.status),
                  (i[14] = t))
                : (t = i[14]),
                (e = t))
              break e
            }
            if (!("personal" === a ? "loaded" === j.status && "personal" === j.structure : a === w) || null == f) {
              e = (0, n.jsx)(m.k, { accountId: a }, JSON.stringify([w, f, a]))
              break e
            }
            ;(t.delete("account_id"),
              (e = (0, n.jsx)(d.C5, {
                replace: !0,
                state: _.state,
                to: { pathname: _.pathname, search: t.toString(), hash: _.hash },
              })))
            break e
          }
          if (A && null != o) {
            let t,
              a = `${x}:${o}`
            ;(i[15] !== o || i[16] !== a
              ? ((t = (0, n.jsx)(eC, { pageId: o }, a)), (i[15] = o), (i[16] = a), (i[17] = t))
              : (t = i[17]),
              (e = t))
            break e
          }
          if (t.has("invitation_id") && null != o) {
            let a
            ;(i[18] !== o ? ((a = { kind: "page", id: o }), (i[18] = o), (i[19] = a)) : (a = i[19]),
              (e = (0, n.jsx)(es.B, { target: a, invitationId: t.get("invitation_id") }, x)))
            break e
          }
        }
        ;((i[0] = x),
          (i[1] = j),
          (i[2] = w),
          (i[3] = I),
          (i[4] = _.hash),
          (i[5] = _.pathname),
          (i[6] = _.search),
          (i[7] = _.state),
          (i[8] = o),
          (i[9] = A),
          (i[10] = f),
          (i[11] = e))
      } else e = i[11]
      if (e !== Symbol.for("react.early_return_sentinel")) return e
      if (eF.g && null != o) {
        let e, t
        return (
          i[20] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(te, {})), (i[20] = e)) : (e = i[20]),
          i[21] !== o || i[22] !== C
            ? ((t = (0, n.jsx)(eT, { pageId: o, children: e }, C)), (i[21] = o), (i[22] = C), (i[23] = t))
            : (t = i[23]),
          t
        )
      }
      if (S) {
        let e, t, a, r
        return (
          i[24] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(eB.y, {})), (i[24] = e)) : (e = i[24]),
          i[25] !== C ? ((t = (0, n.jsx)(te, {}, C)), (i[25] = C), (i[26] = t)) : (t = i[26]),
          i[27] !== _
            ? ((a = "space" === (0, eV.IT)(_) && (0, n.jsx)(eG.K, {})), (i[27] = _), (i[28] = a))
            : (a = i[28]),
          i[29] !== t || i[30] !== a
            ? ((r = (0, n.jsxs)(n.Fragment, { children: [e, t, a] })), (i[29] = t), (i[30] = a), (i[31] = r))
            : (r = i[31]),
          r
        )
      }
      return (
        i[32] !== _ || i[33] !== C
          ? ((t = (e) =>
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(ez.S, {}),
                  (0, n.jsx)(eB.y, {}),
                  (0, n.jsx)(te, { explorer: e ?? void 0 }, C),
                  "space" === (0, eV.IT)(_) && (0, n.jsx)(eG.K, {}),
                ],
              })),
            (i[32] = _),
            (i[33] = C),
            (i[34] = t))
          : (t = i[34]),
        i[35] !== x || i[36] !== u || i[37] !== t
          ? ((a = (0, n.jsx)(eM.t, { pageId: u, children: t }, x)), (i[35] = x), (i[36] = u), (i[37] = t), (i[38] = a))
          : (a = i[38]),
        a
      )
    }
    function te(e) {
      let t,
        a,
        c,
        g,
        m,
        f,
        b,
        C,
        w,
        I = (0, r.c)(74),
        { explorer: j } = e,
        _ = (0, l.gh)(y.GD),
        A = (0, l.Ul)(eR.lX),
        S = (0, l.Ul)(eO.GB),
        k = (0, l.Ul)(eO.di),
        P = (0, l.Ul)(v.spaceAccountId$),
        T = (0, l.Ul)(p.chatGptAuthenticatedUserId$),
        M = (0, d.zy)(),
        { pageId: L, instanceId: E } = (0, d.g)(),
        N = (0, l._U)(eD.x, L ?? ""),
        U = (0, l.Ul)(e$.Q_),
        F = (0, l.Ul)(eq.B),
        D = (0, l._U)(v.spacePageId$, L ?? "")
      I[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (I[0] = t)) : (t = I[0])
      let { data: O, error: V } = (0, l._U)(v.spacePageQuery$, D, t),
        z = !V && O?.metadata.access.can_read && !O.metadata.deleted_at ? O.metadata.creator_account_user_id : null
      ;(I[1] !== z || I[2] !== _
        ? ((a = () => {
            z && (0, eL.rememberVisitedPeople)(_, [z])
          }),
          (I[1] = z),
          (I[2] = _),
          (I[3] = a))
        : (a = I[3]),
        I[4] !== P || I[5] !== D || I[6] !== z || I[7] !== _ || I[8] !== T
          ? ((c = [_, D, z, P, T]), (I[4] = P), (I[5] = D), (I[6] = z), (I[7] = _), (I[8] = T), (I[9] = c))
          : (c = I[9]),
        (0, s.useEffect)(a, c))
      let $ = M.state?.pagePreview
      I[10] !== P || I[11] !== D || I[12] !== $ || I[13] !== T
        ? ((g = (0, eU.oz)($, P, T, D)), (I[10] = P), (I[11] = D), (I[12] = $), (I[13] = T), (I[14] = g))
        : (g = I[14])
      let B = g,
        q = (0, l._U)(A && M.state?.pageArtifact != null ? eE.KJ : null, M.pathname),
        R = `page://${D}${M.hash}`
      I[15] !== R ? ((m = (0, o.I0)(R)), (I[15] = R), (I[16] = m)) : (m = I[16])
      let G = m,
        H = (0, l._U)(v.spacePageCreationStatus$, L ?? ""),
        W = (0, l._U)(e8, D),
        K = (0, l._U)(!S || A || eF.g ? null : v.spacePageContext$, D)
      if (null == L) {
        let e
        return (
          I[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(d.C5, { replace: !0, to: "/space" })), (I[17] = e))
            : (e = I[17]),
          e
        )
      }
      if (!k && !A && K?.isSpaceRoot && null != K.space) {
        let e, t, a, r, l, i, o
        if (I[18] !== M.search || I[19] !== M.state || I[20] !== K.space.id) {
          let n = new URLSearchParams(M.search)
          ;(n.set("view", "overview"),
            (e = d.C5),
            (t = !0),
            (a = M.state),
            (r = `/spaces/${K.space.id}`),
            (l = n.toString()),
            (I[18] = M.search),
            (I[19] = M.state),
            (I[20] = K.space.id),
            (I[21] = e),
            (I[22] = t),
            (I[23] = a),
            (I[24] = r),
            (I[25] = l))
        } else ((e = I[21]), (t = I[22]), (a = I[23]), (r = I[24]), (l = I[25]))
        return (
          I[26] !== M.hash || I[27] !== r || I[28] !== l
            ? ((i = { pathname: r, search: l, hash: M.hash }), (I[26] = M.hash), (I[27] = r), (I[28] = l), (I[29] = i))
            : (i = I[29]),
          I[30] !== e || I[31] !== t || I[32] !== a || I[33] !== i
            ? ((o = (0, n.jsx)(e, { replace: t, state: a, to: i })),
              (I[30] = e),
              (I[31] = t),
              (I[32] = a),
              (I[33] = i),
              (I[34] = o))
            : (o = I[34]),
          o
        )
      }
      if (null != W && !k && !S) {
        let e,
          t,
          a = `/spaces/${W}`
        return (
          I[35] !== M.hash || I[36] !== M.search || I[37] !== a
            ? ((e = { pathname: a, search: M.search, hash: M.hash }),
              (I[35] = M.hash),
              (I[36] = M.search),
              (I[37] = a),
              (I[38] = e))
            : (e = I[38]),
          I[39] !== M.state || I[40] !== e
            ? ((t = (0, n.jsx)(d.C5, { replace: !0, state: M.state, to: e })),
              (I[39] = M.state),
              (I[40] = e),
              (I[41] = t))
            : (t = I[41]),
          t
        )
      }
      if ((0, eS.sD)(D) && null == H) {
        let e
        if ("failed" === N) {
          let e
          return (
            I[42] !== L ? ((e = (0, n.jsx)(ei.PageEditor, { pageId: L })), (I[42] = L), (I[43] = e)) : (e = I[43]),
            e
          )
        }
        if (
          "loading" === N ||
          null == F ||
          F.some((e) => e.documentId === D) ||
          null == U ||
          U.some((e) => e.localPageId === D && e.accountId === P && e.userId === T)
        ) {
          let e
          return (
            I[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(h.LoadingPage, {})), (I[44] = e))
              : (e = I[44]),
            e
          )
        }
        return (
          I[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(d.C5, { replace: !0, to: "/space" })), (I[45] = e))
            : (e = I[45]),
          e
        )
      }
      return (
        L !== D && (0, eS.sD)(L) && eN.W.skipPromotedPageNavigation(D),
        I[46] !== D || I[47] !== E || I[48] !== M.hash || I[49] !== M.search || I[50] !== M.state || I[51] !== L
          ? ((f =
              L !== D &&
              (0, n.jsx)(d.C5, {
                replace: !0,
                state: {
                  ...M.state,
                  spaceSidebarRootPageId: M.state?.spaceSidebarRootPageId === L ? D : M.state?.spaceSidebarRootPageId,
                },
                to: { pathname: (0, e4.xB)(D, E), search: M.search, hash: M.hash },
              })),
            (I[46] = D),
            (I[47] = E),
            (I[48] = M.hash),
            (I[49] = M.search),
            (I[50] = M.state),
            (I[51] = L),
            (I[52] = f))
          : (f = I[52]),
        I[53] !== P || I[54] !== D || I[55] !== M.state || I[56] !== A || I[57] !== q
          ? ((b =
              M.state?.pageArtifact != null &&
              M.state.pageArtifact.pageId === (A ? q : D) &&
              M.state.pageArtifact.accountId === P &&
              (0, n.jsx)(x, { pageId: M.state.pageArtifact.pageId })),
            (I[53] = P),
            (I[54] = D),
            (I[55] = M.state),
            (I[56] = A),
            (I[57] = q),
            (I[58] = b))
          : (b = I[58]),
        I[59] !== D ||
        I[60] !== j ||
        I[61] !== S ||
        I[62] !== k ||
        I[63] !== M ||
        I[64] !== L ||
        I[65] !== B ||
        I[66] !== G ||
        I[67] !== _ ||
        I[68] !== A
          ? ((C =
              A && !eF.g
                ? (0, n.jsx)(e5, {
                    navigationKey: M.key,
                    options: {
                      blockId: G?.kind === "page" ? (G.blockId ?? (M.state?.scrollPageToTop ? null : void 0)) : void 0,
                      focusTitle: L === D && M.state?.focusPageTitle,
                      pagePreview: B,
                      navigationTarget: (0, i.g1)(M.search, M.key),
                    },
                    pageId: D,
                  })
                : (0, n.jsx)(ei.PageEditor, {
                    explorer: j,
                    blockId: G?.kind === "page" ? (G.blockId ?? (M.state?.scrollPageToTop ? null : void 0)) : void 0,
                    blockNavigationKey: M.key,
                    focusTitle: L === D && M.state?.focusPageTitle,
                    pagePreview: B,
                    navigationTarget: (0, i.g1)(M.search, M.key),
                    onClose: eF.g || ("home" === (0, eV.IT)(M) && (k || S)) ? void 0 : () => (0, ew.O)(_),
                    onTitleFocused: () => {
                      ;(0, u.oo)(_, M, { replace: !0, state: { ...M.state, focusPageTitle: !1, scrollPageToTop: !1 } })
                    },
                    pageId: D,
                  })),
            (I[59] = D),
            (I[60] = j),
            (I[61] = S),
            (I[62] = k),
            (I[63] = M),
            (I[64] = L),
            (I[65] = B),
            (I[66] = G),
            (I[67] = _),
            (I[68] = A),
            (I[69] = C))
          : (C = I[69]),
        I[70] !== C || I[71] !== f || I[72] !== b
          ? ((w = (0, n.jsxs)(n.Fragment, { children: [f, b, C] })), (I[70] = C), (I[71] = f), (I[72] = b), (I[73] = w))
          : (w = I[73]),
        w
      )
    }
  },
  SVco(e, t, a) {
    a.d(
      t,
      {},
      {
        E: function (e, t) {
          switch (t) {
            case "black":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.black", defaultMessage: "Default" })
            case "blue":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.blue", defaultMessage: "Blue" })
            case "green":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.green", defaultMessage: "Green" })
            case "orange":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.orange", defaultMessage: "Orange" })
            case "pink":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.pink", defaultMessage: "Pink" })
            case "purple":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.purple", defaultMessage: "Purple" })
            case "red":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.red", defaultMessage: "Red" })
            case "yellow":
              return e.formatMessage({ id: "codex.projectAppearance.color.option.yellow", defaultMessage: "Yellow" })
          }
        },
        K: ["black", "red", "orange", "yellow", "green", "blue", "purple", "pink"],
      },
    )
  },
  AOG7(e, t, a) {
    var n = a("QosV"),
      r = a("T0Rc"),
      l = a("UOa8"),
      i = a("rvFo"),
      o = a("kK7d"),
      s = a("GEsy"),
      c = a("eShZ")
    async function d(e, t, a, { includeProfilePhotos: n = !1, includeTotal: r, limit: l = 10 } = {}) {
      return (
        await o.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: l, offset: 0, query: t, include_profile_photos: n, include_total: r },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: d,
        C4: async function (e, t, a) {
          let n = t.trim().toLowerCase(),
            r = await d(e, n, a)
          return r.find((e) => e.email?.trim().toLowerCase() === n)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            c,
            d,
            u,
            p,
            g,
            m = (0, n.c)(18)
          m[0] !== t ? ((a = void 0 === t ? {} : t), (m[0] = t), (m[1] = a)) : (a = m[1])
          let { includeMemberCounts: h } = a,
            f = void 0 !== h && h,
            { accountId: v, authMethod: y } = (0, l.As)()
          m[2] !== e ? ((c = e.trim()), (m[2] = e), (m[3] = c)) : (c = m[3])
          let b = c,
            x = (0, s.o)(b, 150)
          ;(m[4] !== f ? ((d = f ? ["member-counts"] : []), (m[4] = f), (m[5] = d)) : (d = m[5]),
            m[6] !== v || m[7] !== b || m[8] !== d
              ? ((u = ["workspace-groups", v, b, ...d]), (m[6] = v), (m[7] = b), (m[8] = d), (m[9] = u))
              : (u = m[9]))
          let C = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != v && b.length > 0 && b === x
          return (
            m[10] !== v || m[11] !== f || m[12] !== b
              ? ((p = async (e) => {
                  let { signal: t } = e
                  if (null == v) throw Error("account id is required")
                  return (
                    await o.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: v },
                        query: { limit: 10, offset: 0, query: b, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (m[10] = v),
                (m[11] = f),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== C || m[16] !== p
              ? ((g = {
                  queryKey: u,
                  enabled: C,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: i.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = C),
                (m[16] = p),
                (m[17] = g))
              : (g = m[17]),
            (0, r.I)(g)
          )
        },
        Nv: function (e, t) {
          let a,
            o,
            c,
            u,
            p,
            g,
            m = (0, n.c)(18)
          m[0] !== t ? ((a = void 0 === t ? {} : t), (m[0] = t), (m[1] = a)) : (a = m[1])
          let { includeProfilePhotos: h } = a,
            f = void 0 !== h && h,
            { accountId: v, authMethod: y } = (0, l.As)()
          m[2] !== e ? ((o = e.trim()), (m[2] = e), (m[3] = o)) : (o = m[3])
          let b = o,
            x = (0, s.o)(b, 150)
          ;(m[4] !== f ? ((c = f ? ["profile-photos"] : []), (m[4] = f), (m[5] = c)) : (c = m[5]),
            m[6] !== v || m[7] !== b || m[8] !== c
              ? ((u = ["workspace-users", v, b, ...c]), (m[6] = v), (m[7] = b), (m[8] = c), (m[9] = u))
              : (u = m[9]))
          let C = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != v && b.length > 0 && b === x
          return (
            m[10] !== v || m[11] !== f || m[12] !== b
              ? ((p = (e) => {
                  let { signal: t } = e
                  if (null == v) throw Error("account id is required")
                  return d(v, b, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (m[10] = v),
                (m[11] = f),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== C || m[16] !== p
              ? ((g = {
                  queryKey: u,
                  enabled: C,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: i.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = C),
                (m[16] = p),
                (m[17] = g))
              : (g = m[17]),
            (0, r.I)(g)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await o.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.FetchError && 404 === e.status)) throw e
          }
          return d(e, t, a)
        },
      },
    )
  },
  bQW7(e, t, a) {
    var n = a("S4d4"),
      r = a("CMOE")
    function l(e, t) {
      if (!t || t.includes("@") || !e.email) return !1
      let a = e.email.toLowerCase(),
        [n, l] = a.split("@")
      if (!l || !t.split(" ").some((e) => l.includes(e))) return !1
      let i = e.name?.toLowerCase() === a ? null : e.name
      return (
        !e.profile_username?.toLowerCase().startsWith(t) &&
        (0, r.f)(e, t) > 0 &&
        0 === (0, r.f)({ name: i, email: n }, t)
      )
    }
    function i(
      e,
      t,
      {
        currentUserId: a,
        limit: n = 10,
        includeUnknownNames: o = !1,
        excludeDomainOnlyMatches: c = !1,
        requireIdentified: u = !1,
        directoryMatches: p,
        mentionCounts: g,
      } = {},
    ) {
      let m = e.trim().toLowerCase().replace(/\s+/gu, " "),
        h = s(g, e),
        f = new Map()
      for (let [e, a] of [...t, p].entries())
        for (let t of a ?? []) {
          let n = u ? d(t) : t,
            i = n ?? t
          if (c && l(i, m)) continue
          let o = null != n,
            s = o
              ? (function (e, t) {
                  if ("" === t) return 0
                  let a = e.name?.trim().toLowerCase().replace(/\s+/gu, " ") ?? "",
                    n = e.email?.trim().toLowerCase() ?? ""
                  return 4 === (0, r.f)(e, t)
                    ? 5
                    : a.startsWith(t)
                      ? 4
                      : a.split(" ").some((e) => e.startsWith(t))
                        ? 3
                        : n.startsWith(t)
                          ? 2
                          : Number(t.split(" ").every((e) => a.includes(e)) || n.includes(t))
                })(i, m) || Number(a === p)
              : 0,
            g = f.get(i.id),
            h = g?.item.name
          ;(null == g ||
            s > g.match ||
            (!g.identified && o) ||
            (s === g.match && (!h || h.split("__")[0] === i.id) && i.name && i.name.split("__")[0] !== i.id)) &&
            f.set(i.id, { item: i, locality: g?.locality ?? e, match: s, identified: o })
        }
      return [...f.values()]
        .filter(
          ({ item: e, match: t, identified: n }) =>
            n && ("" === m ? e.id !== a?.split("__")[0] : t > 0 || (o && null == e.name)),
        )
        .sort(
          (e, t) =>
            Number(5 === t.match) - Number(5 === e.match) ||
            h(t) - h(e) ||
            e.locality - t.locality ||
            t.match - e.match ||
            (e.item.name || e.item.email || e.item.id).localeCompare(t.item.name || t.item.email || t.item.id) ||
            e.item.id.localeCompare(t.item.id),
        )
        .slice(0, n)
        .map(({ item: e }) => e)
    }
    function o(
      e,
      t,
      a,
      {
        currentUserId: n,
        limit: i = 10,
        includeUnknownNames: d = !1,
        excludeDomainOnlyMatches: u = !1,
        directoryMatches: p,
        recentPeople: g,
        mentionCounts: m,
      } = {},
    ) {
      let h = e.trim().toLowerCase().replace(/\s+/gu, " "),
        f = (function (e) {
          let t = new Map()
          if (null == e) return t
          let a = (e, a) => {
            let n = e.split("__")[0]
            t.set(n, Math.max(t.get(n) ?? 0, a))
          }
          for (let t of e.rosterUserIds ?? []) a(t, 5)
          for (let t of e.participants ?? []) {
            let n = null == t.lastActivityAtMs ? null : e.asOfMs - t.lastActivityAtMs
            a(t.id, null != n && n >= 0 && n <= 2592e6 ? 20 : 10)
          }
          for (let t of e.liveUserIds ?? []) a(t, 35)
          for (let t of e.threadUserIds ?? []) a(t, 50)
          return t
        })(a),
        v = new Map(g?.map((e, t) => [e.id.split("__")[0], t])),
        y = s(m, e),
        b = new Map()
      for (let a of [...t, g, p])
        for (let t of (d ? a : c(a)) ?? []) {
          if (u && l(t, h)) continue
          let n = t.id.split("__")[0],
            i = (0, r.f)(t, e) || Number(a === p),
            o = b.get(n)
          ;(null == o ||
            i > o.match ||
            (i === o.match &&
              (!o.item.name || o.item.name.split("__")[0] === n) &&
              t.name &&
              t.name.split("__")[0] !== n)) &&
            b.set(n, { item: t, match: i })
        }
      let x = "" === e.trim(),
        C = (e, t) => t >= 2 && (v.has(e) || f.has(e))
      return [...b.entries()]
        .filter(([e, { item: t, match: a }]) => (x ? e !== n?.split("__")[0] : a > 0 || (d && null == t.name)))
        .sort(
          ([e, t], [a, n]) =>
            Number(4 === n.match) - Number(4 === t.match) ||
            y(n) - y(t) ||
            (v.size > 0 ? Number(C(a, n.match)) - Number(C(e, t.match)) : 0) ||
            n.match - t.match ||
            (f.get(a) ?? 0) - (f.get(e) ?? 0) ||
            (v.get(e) ?? v.size) - (v.get(a) ?? v.size) ||
            e.localeCompare(a),
        )
        .slice(0, i)
        .map(([, { item: e }]) => e)
    }
    function s(e, t) {
      let a = "" === t.trim()
      return ({ item: t, match: n }) => (a || n >= 2 ? (e?.get(t.account_user_id ?? t.id) ?? 0) : 0)
    }
    function c(e) {
      return e?.flatMap((e) => {
        let t = d(e)
        return null == t ? [] : [t]
      })
    }
    function d(e) {
      let t = e.account_user_id ?? e.id,
        a = (0, n.Z)(t, e.name, e.email)
      if (null == a || null != e.deactivated_time) return
      let r = (0, n.Z)(t, e.email) ?? null
      return a === e.name && r === e.email ? e : { ...e, name: a, email: r }
    }
    a.d(
      t,
      {},
      {
        Jk: c,
        KZ: i,
        oy: o,
        pW: function (e, t, a, n) {
          return null != a || n.recentPeople?.length ? o(e, t, a, n) : i(e, t, n)
        },
      },
    )
  },
  S4d4(e, t, a) {
    a.d(
      t,
      {},
      {
        Z: function (e, t, a) {
          let n = (e) => {
              let t = e.trim().replace(/^(?:user|group):/u, "")
              return t.includes("@") ? t : t.split("__")[0]
            },
            r = n(e)
          if (r && t?.trim() !== "<Redacted>")
            return [t?.trim(), a?.trim()].find((e) => {
              if (!e || "<Redacted>" === e) return !1
              let t = n(e)
              return (
                t !== r &&
                !/^(?:[0-9a-f]{32}|[0-9a-f]{40}|[0-9a-f]{64})$/iu.test(t) &&
                !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/iu.test(t) &&
                !/^(?:user|group)-(?:[a-z0-9]{24}|[0-9a-f]{32})$/iu.test(t)
              )
            })
        },
      },
    )
  },
  CMOE(e, t, a) {
    function n(e) {
      return e.trim().toLowerCase().replace(/\s+/gu, " ")
    }
    a.d(
      t,
      {},
      {
        f: function (e, t) {
          let a = n(t)
          if ("" === a) return 0
          let r = n(e.name ?? ""),
            l = n(e.email ?? ""),
            i = a.normalize("NFC"),
            o = l.normalize("NFC")
          if (
            i === r.normalize("NFC") ||
            i === o ||
            i === o.split("@")[0] ||
            i === n(e.profile_username ?? "").normalize("NFC")
          )
            return 4
          let s = a.split(" "),
            c = r.split(" ")
          return s.every((e) => c.includes(e))
            ? 3
            : s.every((e) => c.some((t) => t.startsWith(e)) || l.startsWith(e))
              ? 2
              : +!!s.every((e) => r.includes(e) || l.includes(e))
        },
      },
    )
  },
  zHUD(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      l = a("c2QW"),
      i = a("y3LV"),
      o = a("qmMi"),
      s = a("zd8w"),
      c = a("oyxz"),
      d = a("uDXB"),
      u = a("QdUF"),
      p = a("b7aK"),
      g = a("Sm6l"),
      m = a("JNtf"),
      h = a("mUDD"),
      f = a("bVeK"),
      v = a("yGJW"),
      y = a("OWtl"),
      b = a("Ue5e"),
      x = a("Noam")
    function C(e) {
      let t,
        a,
        l,
        i,
        o,
        s,
        d,
        u,
        p,
        v,
        y,
        b = (0, r.c)(21),
        { pending: x, onLogIn: C, onShow: I } = e
      return (
        b[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { onEscapeKeyDown: w }), (b[0] = t)) : (t = b[0]),
        b[1] !== C || b[2] !== x
          ? ((a = (e) => {
              ;(e.preventDefault(), x || C())
            }),
            (b[1] = C),
            (b[2] = x),
            (b[3] = a))
          : (a = b[3]),
        b[4] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, n.jsx)(f.dGN, {})), (b[4] = l)) : (l = b[4]),
        b[5] !== I
          ? ((i = (e) => {
              null != e && I?.()
            }),
            (b[5] = I),
            (b[6] = i))
          : (i = b[6]),
        b[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(c.A, { id: "App.forceLogInModalTitle", defaultMessage: "Your session has expired" })),
            (b[7] = o))
          : (o = b[7]),
        b[8] !== i
          ? ((s = (0, n.jsx)(m.L3, { asChild: !0, children: (0, n.jsx)("h2", { ref: i, children: o }) })),
            (b[8] = i),
            (b[9] = s))
          : (s = b[9]),
        b[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(m.rr, {
              children: (0, n.jsx)(c.A, {
                id: "App.forceLogInModalDescription",
                defaultMessage: "Please log in again to continue using the app",
              }),
            })),
            (b[10] = d))
          : (d = b[10]),
        b[11] !== s
          ? ((u = (0, n.jsx)(h.OO, { children: (0, n.jsx)(h.c7, { icon: l, title: s, subtitle: d }) })),
            (b[11] = s),
            (b[12] = u))
          : (u = b[12]),
        b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(c.A, { id: "App.forceLogInModalButton", defaultMessage: "Log in" })), (b[13] = p))
          : (p = b[13]),
        b[14] !== x
          ? ((v = (0, n.jsx)(h.OO, {
              children: (0, n.jsx)(h.Es, {
                expandSingleButton: !1,
                children: (0, n.jsx)(g.$, {
                  color: "primary",
                  disabled: x,
                  loading: x,
                  radius: "full",
                  size: "dialog",
                  type: "submit",
                  children: p,
                }),
              }),
            })),
            (b[14] = x),
            (b[15] = v))
          : (v = b[15]),
        b[16] !== x || b[17] !== v || b[18] !== a || b[19] !== u
          ? ((y = (0, n.jsx)(m.lG, {
              open: !0,
              showDialogClose: !1,
              shouldIgnoreClickOutside: !0,
              size: "compact",
              variant: "chatgpt",
              contentProps: t,
              children: (0, n.jsxs)(h.R4, {
                as: "form",
                "aria-busy": x,
                "data-testid": "modal-expired-session",
                onSubmit: a,
                children: [u, v],
              }),
            })),
            (b[16] = x),
            (b[17] = v),
            (b[18] = a),
            (b[19] = u),
            (b[20] = y))
          : (y = b[20]),
        y
      )
    }
    function w(e) {
      return e.preventDefault()
    }
    a.d(
      t,
      {},
      {
        G: function () {
          let e,
            t,
            a,
            c,
            g,
            m,
            h = (0, r.c)(12),
            f = (0, o.gh)(y.u),
            w = (0, s.useRef)(!1),
            I = (0, s.useRef)(null),
            [j, _] = (0, s.useState)(!1)
          ;(h[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = () => () => I.current?.abort()), (t = []), (h[0] = e), (h[1] = t))
            : ((e = h[0]), (t = h[1])),
            (0, s.useLayoutEffect)(e, t),
            h[2] !== f
              ? ((a = async () => {
                  let e = (0, u.getBrowserChatGptAuthSnapshot)()
                  if (null != I.current || null == e) return
                  let t = new AbortController()
                  ;((I.current = t), _(!0))
                  let a = crypto.randomUUID()
                  if (
                    ((0, b.t)(a),
                    (0, v.yy)(f, l.Ru, {
                      authSessionLoggingId: a,
                      actionType: "ACCESS_FLOW_ENTRY_ACTION_TYPE_LOGIN",
                      entryPoint: "ACCESS_FLOW_ENTRY_POINT_EXPIRED_SESSION_MODAL",
                      entryTrigger: "ACCESS_FLOW_ENTRY_TRIGGER_CTA",
                    }),
                    await (0, x.Al)(f),
                    t.signal.aborted)
                  )
                    return
                  let n = await (0, u.recoverBrowserChatGptAuth)({
                    accessToken: e.accessToken,
                    method: "GET",
                    path: window.location.pathname,
                    reason: "expired_session_user_login",
                    signal: t.signal,
                  })
                  if (!t.signal.aborted) {
                    if (n.auth?.accessToken === e.accessToken || (null == n.auth && "session_expired" === n.reason))
                      return void (0, u.maybeRedirectToBrowserChatGptLogout)(
                        (0, u.getBrowserSessionExpiryLogoutReason)(),
                        "user",
                      )
                    ;((I.current = null), _(!1))
                  }
                }),
                (h[2] = f),
                (h[3] = a))
              : (a = h[3]))
          let A = a
          return (
            h[4] !== A ? ((c = () => void A()), (h[4] = A), (h[5] = c)) : (c = h[5]),
            h[6] !== f
              ? ((g = () => {
                  if (w.current) return
                  ;((w.current = !0),
                    (0, p.QR)((0, u.getBrowserSessionExpiryObservation)(), {
                      operation: "refresh",
                      phase: "expiry_ui",
                      outcome: "expiry_ui_shown",
                      flow: "session_recovery",
                    }))
                  let e = (0, i.getCookie)("oai-asli"),
                    t = "string" == typeof e && e.length > 0 ? e : crypto.randomUUID()
                  ;((0, b.t)(t),
                    (0, v.yy)(f, l.Ru, {
                      authSessionLoggingId: t,
                      actionType: "ACCESS_FLOW_ENTRY_ACTION_TYPE_EXPIRED_SESSION_MODAL_SHOWN",
                      entryPoint: "ACCESS_FLOW_ENTRY_POINT_AUTH_EXPIRED_SESSION_MODAL",
                      entryTrigger: "ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC",
                      cta: "auto-triggerred",
                    }),
                    d.Q.count("default", "business.auth_entrypoint_opened", {
                      action: "expired_session_modal_shown",
                      entry_point: "auth_expired_session_modal",
                      entry_trigger: "automatic",
                      surface: "core_web",
                    }))
                }),
                (h[6] = f),
                (h[7] = g))
              : (g = h[7]),
            h[8] !== j || h[9] !== c || h[10] !== g
              ? ((m = (0, n.jsx)(C, { pending: j, onLogIn: c, onShow: g })),
                (h[8] = j),
                (h[9] = c),
                (h[10] = g),
                (h[11] = m))
              : (m = h[11]),
            m
          )
        },
      },
    )
  },
  qlvd(e, t, a) {
    a.d(t, { t: () => s })
    var n = a("DBCl"),
      r = a("Qgfj")
    let l = (0, r.YK)({
      "bar-chart": { id: "codex.projectAppearance.icon.option.bar_chart", defaultMessage: "Bar Chart" },
      book: { id: "codex.projectAppearance.icon.option.book", defaultMessage: "Book" },
      brain: { id: "codex.projectAppearance.icon.option.brain", defaultMessage: "Brain" },
      "currency-dollar": {
        id: "codex.projectAppearance.icon.option.currency_dollar",
        defaultMessage: "Currency Dollar",
      },
      customize: { id: "codex.projectAppearance.icon.option.customize", defaultMessage: "Customize" },
      "desk-globe": { id: "codex.projectAppearance.icon.option.desk_globe", defaultMessage: "Globe Spin" },
      dumbbell: { id: "codex.projectAppearance.icon.option.dumbbell", defaultMessage: "Dumbbell" },
      edit: { id: "codex.projectAppearance.icon.option.edit", defaultMessage: "Pencil" },
      flask: { id: "codex.projectAppearance.icon.option.flask", defaultMessage: "Flask" },
      folder: { id: "codex.projectAppearance.icon.option.folder", defaultMessage: "Folder" },
      function: { id: "codex.projectAppearance.icon.option.function", defaultMessage: "Code Brackets" },
      globe: { id: "codex.projectAppearance.icon.option.globe", defaultMessage: "Globe" },
      "graduation-cap": { id: "codex.projectAppearance.icon.option.graduation_cap", defaultMessage: "Graduation Cap" },
      health: { id: "codex.projectAppearance.icon.option.health", defaultMessage: "Health" },
      heart: { id: "codex.projectAppearance.icon.option.heart", defaultMessage: "Heart" },
      kettlebell: { id: "codex.projectAppearance.icon.option.kettlebell", defaultMessage: "Kettlebell" },
      logs: { id: "codex.projectAppearance.icon.option.logs", defaultMessage: "Logs" },
      lotus: { id: "codex.projectAppearance.icon.option.lotus", defaultMessage: "Lotus" },
      music: { id: "codex.projectAppearance.icon.option.music", defaultMessage: "Music" },
      palette: { id: "codex.projectAppearance.icon.option.palette", defaultMessage: "Palette" },
      paw: { id: "codex.projectAppearance.icon.option.paw", defaultMessage: "Paw" },
      plane: { id: "codex.projectAppearance.icon.option.plane", defaultMessage: "Plane" },
      plant: { id: "codex.projectAppearance.icon.option.plant", defaultMessage: "Plant" },
      popcorn: { id: "codex.projectAppearance.icon.option.popcorn", defaultMessage: "Popcorn" },
      scale: { id: "codex.projectAppearance.icon.option.scale", defaultMessage: "Balancing Scale" },
      stethoscope: { id: "codex.projectAppearance.icon.option.stethoscope", defaultMessage: "Stethoscope" },
      suitcase: { id: "codex.projectAppearance.icon.option.suitcase", defaultMessage: "Suitcase" },
      terminal: { id: "codex.projectAppearance.icon.option.terminal", defaultMessage: "Terminal" },
      wrench: { id: "codex.projectAppearance.icon.option.wrench", defaultMessage: "Wrench" },
      writing: { id: "codex.projectAppearance.icon.option.writing", defaultMessage: "Writing" },
    })
    ;((0, r.zR)({ id: "symbolPicker.icons.category.work", defaultMessage: "Work" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.learning", defaultMessage: "Learning" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.creative", defaultMessage: "Creative" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.wellbeing", defaultMessage: "Health and wellbeing" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.travel", defaultMessage: "Travel and places" }),
      (0, r.zR)({ id: "symbolPicker.icons.category.nature", defaultMessage: "Nature" }))
    let i = {
        folder: { categoryId: "work", keywords: ["files", "documents", "organize", "project", "workspace"] },
        "currency-dollar": {
          categoryId: "work",
          keywords: ["money", "finance", "budget", "bank", "payment", "business"],
        },
        book: { categoryId: "learning", keywords: ["reading", "study", "education", "library", "literature"] },
        "graduation-cap": {
          categoryId: "learning",
          keywords: ["school", "university", "college", "education", "degree", "study"],
        },
        edit: { categoryId: "creative", keywords: ["pencil", "writing", "drawing", "draft", "notes"] },
        writing: { categoryId: "creative", keywords: ["pen", "author", "journal", "essay", "story", "draft"] },
        function: { categoryId: "work", keywords: ["developer", "code", "programming", "software", "math", "formula"] },
        terminal: { categoryId: "work", keywords: ["developer", "code", "command", "console", "shell", "computer"] },
        music: { categoryId: "creative", keywords: ["audio", "sound", "song", "playlist", "instrument"] },
        popcorn: { categoryId: "creative", keywords: ["movie", "film", "cinema", "entertainment", "snack"] },
        customize: { categoryId: "creative", keywords: ["design", "drawing", "art", "tools", "pens", "personalize"] },
        palette: { categoryId: "creative", keywords: ["paint", "color", "art", "design", "drawing"] },
        stethoscope: {
          categoryId: "wellbeing",
          keywords: ["doctor", "medical", "medicine", "hospital", "care", "health"],
        },
        health: { categoryId: "wellbeing", keywords: ["medical", "medicine", "emergency", "ambulance", "care"] },
        lotus: {
          categoryId: "wellbeing",
          keywords: ["meditation", "mindfulness", "yoga", "calm", "relax", "wellness"],
        },
        suitcase: { categoryId: "travel", keywords: ["vacation", "trip", "luggage", "packing", "holiday", "business"] },
        "bar-chart": {
          categoryId: "work",
          keywords: ["analytics", "data", "statistics", "report", "growth", "business"],
        },
        kettlebell: {
          categoryId: "wellbeing",
          keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"],
        },
        dumbbell: {
          categoryId: "wellbeing",
          keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"],
        },
        logs: { categoryId: "work", keywords: ["notebook", "journal", "records", "notes", "list", "tracking"] },
        scale: { categoryId: "work", keywords: ["law", "legal", "justice", "balance", "decision", "weight"] },
        "desk-globe": {
          categoryId: "travel",
          keywords: ["world", "earth", "geography", "map", "countries", "explore"],
        },
        plane: { categoryId: "travel", keywords: ["vacation", "flight", "airport", "trip", "holiday", "airplane"] },
        globe: { categoryId: "travel", keywords: ["world", "earth", "internet", "website", "global", "language"] },
        wrench: {
          categoryId: "work",
          keywords: ["tools", "repair", "build", "maintenance", "settings", "engineering"],
        },
        paw: { categoryId: "nature", keywords: ["pet", "animal", "dog", "cat", "wildlife"] },
        flask: { categoryId: "learning", keywords: ["science", "chemistry", "experiment", "laboratory", "research"] },
        brain: {
          categoryId: "learning",
          keywords: ["thinking", "idea", "knowledge", "intelligence", "psychology", "mind"],
        },
        heart: { categoryId: "wellbeing", keywords: ["love", "care", "favorite", "relationship", "emotion"] },
        plant: { categoryId: "nature", keywords: ["garden", "growth", "leaves", "environment", "ecology", "green"] },
      },
      o = n.K4r.map(function (e) {
        return { id: e, label: l[e], ...i[e] }
      })
    function s(e, t) {
      let a = c(e, t.locale)
      if (0 === a.length) return o
      let n = a.split(" ")
      return o
        .flatMap((e) => {
          let r = c(t.formatMessage(e.label), t.locale),
            l = c(e.id, t.locale)
          return n.every((t) => r.includes(t) || l.includes(t) || e.keywords.some((e) => e.includes(t)))
            ? [{ icon: e, score: +(r !== a && l !== a) }]
            : []
        })
        .sort((e, t) => e.score - t.score)
        .map(({ icon: e }) => e)
    }
    function c(e, t) {
      return e
        .trim()
        .toLocaleLowerCase(t)
        .replace(/[\s_-]+/g, " ")
    }
  },
  lrLr(e, t, a) {
    a.d(
      t,
      {},
      {
        B: function (e) {
          let t = e.documentElement.dataset.reducedMotion
          return null != t
            ? "true" === t
            : (e.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches ?? !1)
        },
      },
    )
  },
  MpBF(e, t, a) {
    a.d(t, { q: () => n })
    function n() {
      var e
      let t
      return (
        (e = navigator.userAgent),
        (t = /ChatGPT/i.test(e)),
        /Android/.test(e)
          ? t
            ? "android_app"
            : "android_web"
          : /iPad|iPhone|iPod/.test(e)
            ? t
              ? "ios_app"
              : "ios_web"
            : "desktop_web"
      )
    }
  },
  aRbG(e, t, a) {
    var n = a("QosV"),
      r = a("zd8w")
    a.d(
      t,
      {},
      {
        $: function (e, t) {
          let a,
            l,
            i = (0, n.c)(5),
            o = (0, r.useEffectEvent)(e)
          ;(i[0] !== t || i[1] !== o
            ? ((a = () => {
                if (null == t) return
                let e = window.setInterval(() => {
                  o()
                }, t)
                return () => {
                  window.clearInterval(e)
                }
              }),
              (i[0] = t),
              (i[1] = o),
              (i[2] = a))
            : (a = i[2]),
            i[3] !== t ? ((l = [t]), (i[3] = t), (i[4] = l)) : (l = i[4]),
            (0, r.useEffect)(a, l))
        },
      },
    )
  },
  YQiI(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "cursor-frame-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.141357, y: 2.141602, width: 12.987915, height: 13.012695 },
        visualBounds: { x: 2.141357, y: 2.141602, width: 12.987915, height: 13.012695 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.141357, y: 2.141602, width: 12.987915, height: 13.012695 },
        center: { x: 8.635315, y: 8.64795 },
        insets: { top: 2.141602, right: 0.870728, bottom: 0.845703, left: 2.141357 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.635315, y: 8.64795 }, foreground: { x: 8.635315, y: 8.64795 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.86597 9.31152C7.57239 8.40984 8.43816 7.5611 9.33374 7.87305L14.3601 9.62402C15.3387 9.96511 15.3983 11.3261 14.4539 11.752L12.6257 12.5752C12.6057 12.5842 12.5889 12.6005 12.5789 12.6201L11.6287 14.5205C11.1702 15.4375 9.83031 15.3378 9.51245 14.3633L7.86597 9.31152ZM8.98804 8.86426C8.91281 8.83833 8.84077 8.90962 8.86499 8.98535L10.5105 14.0381C10.5195 14.0655 10.5317 14.0785 10.5417 14.0859C10.5542 14.0952 10.573 14.1028 10.5955 14.1045C10.6178 14.1061 10.6375 14.101 10.6511 14.0938C10.6621 14.0878 10.6764 14.0764 10.6892 14.0508L11.6394 12.1504C11.7576 11.9145 11.9535 11.7255 12.1941 11.6172L14.0232 10.7949C14.0496 10.7828 14.061 10.7685 14.0671 10.7578C14.0747 10.7444 14.0808 10.7247 14.0798 10.7021C14.0787 10.6797 14.071 10.661 14.0623 10.6484C14.0551 10.6383 14.0429 10.6249 14.0154 10.6152L8.98804 8.86426Z" fill="currentColor"/> <path d="M2.66675 9.47461C2.9567 9.47461 3.19214 9.71005 3.19214 10V11.4668C3.19221 12.2076 3.79223 12.8083 4.53296 12.8086H5.99976C6.2896 12.8086 6.52497 13.0432 6.52515 13.333C6.52515 13.623 6.28971 13.8584 5.99976 13.8584H4.53296C3.21233 13.8582 2.14143 12.7875 2.14136 11.4668V10C2.14136 9.71005 2.3768 9.47461 2.66675 9.47461Z" fill="currentColor"/> <path d="M11.4666 2.1416C12.7872 2.14167 13.8579 3.21258 13.8582 4.5332V6C13.8582 6.28995 13.6227 6.52539 13.3328 6.52539C13.0431 6.52508 12.8083 6.28976 12.8083 6V4.5332C12.8081 3.79247 12.2073 3.19245 11.4666 3.19238H9.99976C9.70992 3.19225 9.47437 2.95686 9.47437 2.66699C9.47437 2.37712 9.70992 2.14173 9.99976 2.1416H11.4666Z" fill="currentColor"/> <path d="M5.99976 3.19238H4.53296C3.79234 3.19263 3.19238 3.79258 3.19214 4.5332V6H2.14136V4.5332C2.1416 3.21268 3.21244 2.14185 4.53296 2.1416H5.99976V3.19238Z" fill="currentColor"/>',
    })
    a.d(t, {}, { j: n })
  },
  CytH(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "cursor-frame-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668213, y: 2.667969, width: 16.25177, height: 16.284668 },
        visualBounds: { x: 2.668213, y: 2.667969, width: 16.25177, height: 16.284668 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668213, y: 2.667969, width: 16.25177, height: 16.284668 },
        center: { x: 10.794098, y: 10.810303 },
        insets: { top: 2.667969, right: 1.080017, bottom: 1.047363, left: 2.668213 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.794098, y: 10.810303 },
          foreground: { x: 10.794098, y: 10.810303 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.82349 11.6426C9.45399 10.5086 10.5429 9.44197 11.6692 9.83398L17.9524 12.0225C19.1836 12.4514 19.2586 14.1642 18.0696 14.6992L15.7844 15.7275C15.7611 15.7381 15.7412 15.7565 15.7297 15.7793L14.5422 18.1553C13.9654 19.3083 12.2806 19.183 11.8811 17.957L9.82349 11.6426ZM11.2317 11.0898C11.1442 11.0597 11.0595 11.1424 11.0881 11.2305L13.1458 17.5449C13.1564 17.5776 13.1708 17.5922 13.1819 17.6006C13.196 17.6111 13.218 17.62 13.2444 17.6221C13.2706 17.624 13.2934 17.6185 13.3088 17.6104C13.3211 17.6038 13.3374 17.5913 13.3528 17.5605L14.5403 15.1846C14.6888 14.8877 14.9359 14.651 15.2385 14.5146L17.5237 13.4863C17.5554 13.4721 17.5685 13.4562 17.5754 13.4443C17.5843 13.4291 17.5913 13.4059 17.5901 13.3789C17.5889 13.3519 17.5797 13.3298 17.5696 13.3154C17.5616 13.3043 17.5476 13.2897 17.5149 13.2783L11.2317 11.0898Z" fill="currentColor"/> <path d="M3.33325 11.835C3.70052 11.835 3.99829 12.1327 3.99829 12.5V14.333C3.99829 15.2543 4.74501 16.0018 5.66626 16.002H7.50024C7.86736 16.0021 8.16528 16.2998 8.16528 16.667C8.16511 17.034 7.86726 17.3319 7.50024 17.332H5.66626C4.01048 17.3319 2.66821 15.9888 2.66821 14.333V12.5C2.66821 12.1327 2.96598 11.835 3.33325 11.835Z" fill="currentColor"/> <path d="M14.3333 2.66797C15.989 2.6681 17.3321 4.01031 17.3323 5.66602V7.5C17.3321 7.86693 17.0341 8.16473 16.6672 8.16504C16.3001 8.16504 16.0024 7.86712 16.0022 7.5V5.66602C16.002 4.74485 15.2544 3.99818 14.3333 3.99805H12.5002C12.133 3.99805 11.8352 3.70028 11.8352 3.33301C11.8352 2.96574 12.133 2.66797 12.5002 2.66797H14.3333Z" fill="currentColor"/> <path d="M7.50024 3.99805H5.66626C4.74512 3.99822 3.99847 4.74488 3.99829 5.66602V7.5H2.66821V5.66602C2.66839 4.01034 4.01058 2.66814 5.66626 2.66797H7.50024V3.99805Z" fill="currentColor"/>',
    })
    a.d(t, {}, { A: n })
  },
  s0hl(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "pie-chart-badge-plus-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.808594, y: 0.974609, width: 13.882813, height: 13.402344 },
        visualBounds: { x: 0.808594, y: 0.974609, width: 13.882813, height: 13.402344 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.808594, y: 0.974609, width: 13.882813, height: 13.402344 },
        center: { x: 7.750001, y: 7.675781 },
        insets: { top: 0.974609, right: 1.308593, bottom: 1.623047, left: 0.808594 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.750001, y: 7.675781 }, foreground: { x: 7.750001, y: 7.675781 } },
      },
      capabilities: ["icon"],
      body: '<path d="M3.33398 9.32617C3.62393 9.32617 3.85938 9.56161 3.85938 9.85156V11.3262H5.33398C5.62393 11.3262 5.85938 11.5616 5.85938 11.8516C5.85921 12.1414 5.62383 12.377 5.33398 12.377H3.85938V13.8516C3.85921 14.1414 3.62383 14.377 3.33398 14.377C3.04414 14.377 2.80876 14.1414 2.80859 13.8516V12.377H1.33398C1.04414 12.377 0.808759 12.1414 0.808594 11.8516C0.808594 11.5616 1.04403 11.3262 1.33398 11.3262H2.80859V9.85156C2.80859 9.56161 3.04403 9.32617 3.33398 9.32617Z" fill="currentColor"/> <path d="M8 0.974609C11.6956 0.974785 14.6914 3.9714 14.6914 7.66699C14.6914 8.4431 14.5575 9.18774 14.3145 9.88086C14.3127 9.88624 14.3124 9.8921 14.3105 9.89746C14.3092 9.90128 14.3061 9.90444 14.3047 9.9082C13.3828 12.5011 10.9091 14.3583 8 14.3584C7.71005 14.3584 7.47461 14.123 7.47461 13.833C7.47478 13.5432 7.71016 13.3086 8 13.3086C10.2705 13.3085 12.2253 11.9658 13.1201 10.0322L7.8252 8.16211C7.61551 8.088 7.47475 7.88937 7.47461 7.66699V2.05078C4.60519 2.31582 2.3584 4.72838 2.3584 7.66699C2.35822 7.95679 2.12285 8.19141 1.83301 8.19141C1.54317 8.19141 1.30779 7.95679 1.30762 7.66699C1.30762 3.97129 4.30429 0.974609 8 0.974609ZM8.52539 7.29492L13.4707 9.04297C13.5812 8.60243 13.6416 8.14177 13.6416 7.66699C13.6416 4.72849 11.3947 2.31597 8.52539 2.05078V7.29492Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { n: n })
  },
  qzqv(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "pie-chart-badge-plus-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.000977, y: 1.209961, width: 17.373047, height: 16.769531 },
        visualBounds: { x: 1.000977, y: 1.209961, width: 17.373047, height: 16.769531 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.000977, y: 1.209961, width: 17.373047, height: 16.769531 },
        center: { x: 9.687501, y: 9.594727 },
        insets: { top: 1.209961, right: 1.625976, bottom: 2.020508, left: 1.000977 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.687501, y: 9.594727 },
          foreground: { x: 9.687501, y: 9.594727 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M4.16602 11.6494C4.53328 11.6494 4.83105 11.9472 4.83105 12.3145V14.1494H6.66602C7.03329 14.1494 7.33105 14.4472 7.33105 14.8145C7.33082 15.1815 7.03314 15.4795 6.66602 15.4795H4.83105V17.3145C4.83082 17.6815 4.53314 17.9795 4.16602 17.9795C3.79889 17.9795 3.50121 17.6815 3.50098 17.3145V15.4795H1.66602C1.29889 15.4795 1.00121 15.1815 1.00098 14.8145C1.00098 14.4472 1.29875 14.1494 1.66602 14.1494H3.50098V12.3145C3.50098 11.9472 3.79875 11.6494 4.16602 11.6494Z" fill="currentColor"/> <path d="M10 1.20996C14.6244 1.20996 18.3738 4.95869 18.374 9.58301C18.374 10.559 18.2045 11.4952 17.8975 12.3662C17.8966 12.3686 17.8973 12.3716 17.8965 12.374L17.8936 12.3789C16.7424 15.6284 13.6438 17.957 10 17.957C9.63299 17.9569 9.33514 17.659 9.33496 17.292C9.33496 16.9248 9.63288 16.6271 10 16.627C12.8312 16.627 15.2704 14.9552 16.3896 12.5459L9.77832 10.21C9.51269 10.116 9.33496 9.86478 9.33496 9.58301V2.57129C5.7572 2.90653 2.9572 5.91763 2.95703 9.58301C2.95703 9.95028 2.65926 10.248 2.29199 10.248C1.92472 10.248 1.62695 9.95028 1.62695 9.58301C1.62713 4.9588 5.37579 1.21014 10 1.20996ZM10.665 9.1123L16.833 11.293C16.9696 10.7454 17.0439 10.1729 17.0439 9.58301C17.0438 5.91752 14.243 2.90638 10.665 2.57129V9.1123Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { s: n })
  },
  M3ZP(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "plus-square-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.807983, y: 1.807861, width: 12.383789, height: 12.383789 },
        visualBounds: { x: 1.807983, y: 1.807861, width: 12.383789, height: 12.383789 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.807983, y: 1.807861, width: 12.383789, height: 12.383789 },
        center: { x: 7.999878, y: 7.999756 },
        insets: { top: 1.807861, right: 1.808228, bottom: 1.80835, left: 1.807983 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999878, y: 7.999756 }, foreground: { x: 7.999878, y: 7.999756 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00037 4.64087C8.29007 4.64107 8.52562 4.87654 8.52576 5.16626V7.47485H10.8334C11.1232 7.47503 11.3578 7.7104 11.3578 8.00024C11.3577 8.28997 11.1231 8.52546 10.8334 8.52563H8.52576V10.8333C8.52558 11.1229 8.29004 11.3575 8.00037 11.3577C7.71053 11.3577 7.47515 11.1231 7.47498 10.8333V8.52563H5.16638C4.87668 8.52544 4.64112 8.28996 4.64099 8.00024C4.64099 7.71042 4.8766 7.47505 5.16638 7.47485H7.47498V5.16626C7.47511 4.87642 7.7105 4.64087 8.00037 4.64087Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.683 1.80786C13.0683 1.80786 14.1918 2.93134 14.1918 4.31665V11.6829C14.1918 13.0682 13.0683 14.1917 11.683 14.1917H4.31677C2.93146 14.1917 1.80798 13.0682 1.80798 11.6829V4.31665C1.80798 2.93134 2.93146 1.80786 4.31677 1.80786H11.683ZM4.31677 2.85864C3.51136 2.85864 2.85876 3.51124 2.85876 4.31665V11.6829C2.85876 12.4883 3.51136 13.1418 4.31677 13.1418H11.683C12.4884 13.1418 13.142 12.4883 13.142 11.6829V4.31665C13.142 3.51124 12.4884 2.85864 11.683 2.85864H4.31677Z" fill="currentColor"/>',
    })
    a.d(t, {}, { D: n })
  },
  XTT8(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "plus-square-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.501587, y: 2.501709, width: 14.99707, height: 14.99707 },
        visualBounds: { x: 2.501587, y: 2.501709, width: 14.99707, height: 14.99707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.501587, y: 2.501709, width: 14.99707, height: 14.99707 },
        center: { x: 10.000122, y: 10.000244 },
        insets: { top: 2.501709, right: 2.501343, bottom: 2.501221, left: 2.501587 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000122, y: 10.000244 },
          foreground: { x: 10.000122, y: 10.000244 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.99963 5.9187C10.3669 5.9187 10.6647 6.21647 10.6647 6.58374V9.33472H13.4166C13.7836 9.33491 14.0815 9.63272 14.0817 9.99976C14.0817 10.3669 13.7837 10.6646 13.4166 10.6648H10.6647V13.4167C10.6645 13.7839 10.3668 14.0818 9.99963 14.0818C9.63261 14.0816 9.33473 13.7838 9.33459 13.4167V10.6648H6.58362C6.21635 10.6648 5.91858 10.367 5.91858 9.99976C5.91871 9.6326 6.21643 9.33472 6.58362 9.33472H9.33459V6.58374C9.33459 6.21659 9.63253 5.9189 9.99963 5.9187Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.442 2.50171C16.13 2.50192 17.4986 3.87036 17.4987 5.55835V14.4421C17.4984 16.13 16.1299 17.4986 14.442 17.4988H5.55823C3.87024 17.4987 2.5018 16.1301 2.50159 14.4421V5.55835C2.50162 3.87025 3.87013 2.50174 5.55823 2.50171H14.442ZM5.55823 3.83179C4.60467 3.83182 3.8317 4.60479 3.83167 5.55835V14.4421C3.83188 15.3955 4.60478 16.1687 5.55823 16.1687H14.442C15.3953 16.1685 16.1684 15.3954 16.1686 14.4421V5.55835C16.1685 4.6049 15.3954 3.832 14.442 3.83179H5.55823Z" fill="currentColor"/>',
    })
    a.d(t, {}, { w: n })
  },
  ygsV(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "slides-badge-plus-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.808594, y: 2.141602, width: 13.916016, height: 12.235352 },
        visualBounds: { x: 0.808594, y: 2.141602, width: 13.916016, height: 12.235352 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.808594, y: 2.141602, width: 13.916016, height: 12.235352 },
        center: { x: 7.766602, y: 8.259278 },
        insets: { top: 2.141602, right: 1.27539, bottom: 1.623046, left: 0.808594 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.766602, y: 8.259278 }, foreground: { x: 7.766602, y: 8.259278 } },
      },
      capabilities: ["icon"],
      body: '<path d="M3.33398 9.32617C3.62393 9.32617 3.85938 9.56161 3.85938 9.85156V11.3262H5.33398C5.62393 11.3262 5.85938 11.5616 5.85938 11.8516C5.85938 12.1415 5.62393 12.377 5.33398 12.377H3.85938V13.8516C3.85938 14.1415 3.62393 14.377 3.33398 14.377C3.04403 14.377 2.80859 14.1415 2.80859 13.8516V12.377H1.33398C1.04403 12.377 0.808594 12.1415 0.808594 11.8516C0.808594 11.5616 1.04403 11.3262 1.33398 11.3262H2.80859V9.85156C2.80859 9.56161 3.04403 9.32617 3.33398 9.32617Z" fill="currentColor"/> <path d="M11.2129 4.1416C11.7268 4.1416 12.1439 4.14137 12.4814 4.16895C12.825 4.19702 13.1321 4.2568 13.418 4.40234C13.868 4.63164 14.2346 4.99823 14.4639 5.44824C14.6094 5.73408 14.6692 6.04125 14.6973 6.38477C14.7248 6.72229 14.7246 7.13943 14.7246 7.65332V9.68066C14.7246 10.1946 14.7248 10.6117 14.6973 10.9492C14.6692 11.2927 14.6094 11.5999 14.4639 11.8857C14.2346 12.3358 13.868 12.7023 13.418 12.9316C13.1321 13.0772 12.825 13.137 12.4814 13.165C12.1439 13.1926 11.7268 13.1924 11.2129 13.1924H8.19922C7.90927 13.1924 7.67383 12.9569 7.67383 12.667C7.67384 12.3771 7.90928 12.1416 8.19922 12.1416H11.2129C11.7439 12.1416 12.1107 12.1414 12.3955 12.1182C12.674 12.0954 12.8281 12.0537 12.9414 11.9961C13.1939 11.8675 13.3997 11.6616 13.5283 11.4092C13.586 11.2959 13.6276 11.1418 13.6504 10.8633C13.6736 10.5785 13.6738 10.2117 13.6738 9.68066V7.65332C13.6738 7.12232 13.6736 6.75553 13.6504 6.4707C13.6276 6.19219 13.586 6.03808 13.5283 5.9248C13.3997 5.67236 13.1939 5.46652 12.9414 5.33789C12.8281 5.28025 12.674 5.23858 12.3955 5.21582C12.1107 5.19257 11.7439 5.19238 11.2129 5.19238H4.53223C4.07364 5.19238 3.9205 5.19454 3.80371 5.21777C3.27183 5.32374 2.85598 5.7396 2.75 6.27148C2.72677 6.38827 2.72461 6.54143 2.72461 7C2.72461 7.28995 2.48917 7.52539 2.19922 7.52539C1.90927 7.52539 1.67383 7.28995 1.67383 7C1.67383 6.59189 1.67132 6.31104 1.71973 6.06738C1.90845 5.11864 2.65087 4.37622 3.59961 4.1875C3.84327 4.1391 4.12411 4.1416 4.53223 4.1416H11.2129Z" fill="currentColor"/> <path d="M12 2.1416C12.2899 2.1416 12.5254 2.37704 12.5254 2.66699C12.5254 2.95694 12.2899 3.19238 12 3.19238H4C3.71005 3.19238 3.47461 2.95694 3.47461 2.66699C3.47461 2.37704 3.71005 2.1416 4 2.1416H12Z" fill="currentColor"/>',
    })
    a.d(t, {}, { P: n })
  },
  nokW(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "slides-badge-plus-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.000977, y: 2.667969, width: 17.413086, height: 15.310547 },
        visualBounds: { x: 1.000977, y: 2.667969, width: 17.413086, height: 15.310547 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.000977, y: 2.667969, width: 17.413086, height: 15.310547 },
        center: { x: 9.70752, y: 10.323243 },
        insets: { top: 2.667969, right: 1.585937, bottom: 2.021484, left: 1.000977 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.70752, y: 10.323243 },
          foreground: { x: 9.70752, y: 10.323243 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M4.16602 11.6484C4.5332 11.6484 4.83092 11.9463 4.83105 12.3135V14.1484H6.66602C7.0332 14.1484 7.33092 14.4463 7.33105 14.8135C7.33105 15.1807 7.03329 15.4785 6.66602 15.4785H4.83105V17.3135C4.83105 17.6807 4.53328 17.9785 4.16602 17.9785C3.79875 17.9785 3.50098 17.6807 3.50098 17.3135V15.4785H1.66602C1.29875 15.4785 1.00098 15.1807 1.00098 14.8135C1.00111 14.4463 1.29883 14.1484 1.66602 14.1484H3.50098V12.3135C3.50111 11.9463 3.79883 11.6484 4.16602 11.6484Z" fill="currentColor"/> <path d="M14.0156 5.16797C14.658 5.16797 15.1801 5.16763 15.6025 5.20215C16.0327 5.2373 16.4185 5.31226 16.7773 5.49512C17.3411 5.78251 17.7995 6.24089 18.0869 6.80469C18.2698 7.16357 18.3447 7.54936 18.3799 7.97949C18.4144 8.40194 18.4141 8.924 18.4141 9.56641V12.0996C18.4141 12.742 18.4144 13.2641 18.3799 13.6865C18.3447 14.1167 18.2698 14.5025 18.0869 14.8613C17.7995 15.4251 17.3411 15.8835 16.7773 16.1709C16.4185 16.3538 16.0327 16.4287 15.6025 16.4639C15.1801 16.4984 14.658 16.498 14.0156 16.498H10.249C9.88176 16.498 9.584 16.2003 9.58398 15.833C9.58398 15.4657 9.88175 15.168 10.249 15.168H14.0156C14.68 15.168 15.1384 15.1677 15.4941 15.1387C15.8418 15.1103 16.0327 15.0577 16.1729 14.9863C16.4868 14.8264 16.7424 14.5707 16.9023 14.2568C16.9737 14.1167 17.0263 13.9258 17.0547 13.5781C17.0838 13.2224 17.084 12.764 17.084 12.0996V9.56641C17.084 8.90206 17.0837 8.44361 17.0547 8.08789C17.0263 7.7402 16.9737 7.54934 16.9023 7.40918C16.7424 7.09527 16.4868 6.83964 16.1729 6.67969C16.0327 6.60833 15.8419 6.55576 15.4941 6.52734C15.1384 6.49828 14.68 6.49805 14.0156 6.49805H5.66602C5.09204 6.49805 4.9018 6.50144 4.75684 6.53027C4.09509 6.66194 3.57795 7.17908 3.44629 7.84082C3.41746 7.98578 3.41406 8.17607 3.41406 8.75C3.41387 9.11711 3.11617 9.41504 2.74902 9.41504C2.38187 9.41504 2.08418 9.11711 2.08398 8.75C2.08398 8.23979 2.08077 7.88688 2.1416 7.58105C2.37827 6.39191 3.30792 5.46226 4.49707 5.22559C4.8029 5.16475 5.15579 5.16797 5.66602 5.16797H14.0156Z" fill="currentColor"/> <path d="M15 2.66797C15.3673 2.66797 15.665 2.96574 15.665 3.33301C15.665 3.70028 15.3673 3.99805 15 3.99805H5C4.63273 3.99805 4.33496 3.70028 4.33496 3.33301C4.33496 2.96574 4.63273 2.66797 5 2.66797H15Z" fill="currentColor"/>',
    })
    a.d(t, {}, { W: n })
  },
  yCKV(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "toolbox-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.141357, y: 1.476563, width: 11.716797, height: 13.048828 },
        visualBounds: { x: 2.141357, y: 1.476563, width: 11.716797, height: 13.048828 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.141357, y: 1.476563, width: 11.716797, height: 13.048828 },
        center: { x: 7.999756, y: 8.000977 },
        insets: { top: 1.476563, right: 2.141846, bottom: 1.474609, left: 2.141357 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8.000977 }, foreground: { x: 7.999756, y: 8.000977 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.99976 9.14219C9.28971 9.14219 9.52515 9.37763 9.52515 9.66758C9.52515 9.95753 9.28971 10.193 8.99976 10.193H6.99976C6.70992 10.1928 6.47437 9.95745 6.47437 9.66758C6.47437 9.37771 6.70992 9.14232 6.99976 9.14219H8.99976Z" fill="currentColor"/> <path d="M4.8562 2.29258C5.14934 1.41175 6.29252 1.18921 6.89429 1.8961L7.88452 3.06016C7.91121 3.09133 7.9509 3.10967 7.99194 3.10996L9.09741 3.1168L9.14917 3.00547C9.25488 2.77291 9.34388 2.57446 9.42847 2.4166C9.51528 2.25466 9.61403 2.10324 9.74976 1.97129C10.0747 1.65573 10.5107 1.47987 10.9636 1.48301C11.1531 1.48436 11.3288 1.52663 11.5037 1.5836C11.674 1.63912 11.8756 1.72008 12.113 1.81504C12.3725 1.91885 12.5918 2.00644 12.7664 2.09043C12.9448 2.17631 13.1128 2.27504 13.2576 2.41758C13.6015 2.75642 13.788 3.22413 13.7712 3.70664C13.7641 3.90958 13.7099 4.09786 13.6394 4.28281C13.5704 4.46359 13.4712 4.6779 13.3542 4.93125L12.4656 6.85508C12.6201 6.88098 12.771 6.92341 12.9167 6.99766C13.2412 7.16305 13.5053 7.42711 13.6707 7.75156C13.7798 7.96602 13.8216 8.19115 13.8406 8.42344C13.859 8.64977 13.8582 8.92739 13.8582 9.25449V11.0143C13.8582 11.5281 13.8584 11.9463 13.8308 12.2838C13.8027 12.6271 13.743 12.9346 13.5974 13.2203C13.3681 13.6701 13.0023 14.036 12.5525 14.2652C12.2667 14.4108 11.9594 14.4705 11.616 14.4986C11.2784 14.5262 10.8605 14.526 10.3464 14.526H5.65308C5.1392 14.526 4.72205 14.5262 4.38452 14.4986C4.04099 14.4706 3.73385 14.4108 3.448 14.2652C2.99811 14.036 2.63141 13.6702 2.4021 13.2203C2.25657 12.9346 2.19681 12.6271 2.1687 12.2838C2.14113 11.9463 2.14136 11.5281 2.14136 11.0143V9.25449C2.14136 8.92739 2.14145 8.64977 2.15991 8.42344C2.17891 8.19112 2.22065 7.96605 2.32983 7.75156C2.49518 7.42705 2.75925 7.16305 3.08374 6.99766C3.1366 6.97073 3.18983 6.94673 3.2439 6.92735L2.62671 6.47227C1.87958 5.92129 2.02142 4.76561 2.87964 4.41172L4.29272 3.82871C4.33055 3.81305 4.35975 3.78157 4.3728 3.74278L4.8562 2.29258ZM4.58667 7.85996C4.24213 7.85996 4.01528 7.86043 3.84155 7.87461C3.67394 7.88831 3.6023 7.91181 3.5603 7.93321C3.43341 7.99792 3.33006 8.1012 3.26538 8.22813C3.24403 8.27018 3.22044 8.34226 3.20679 8.50938C3.19264 8.68304 3.19214 8.91028 3.19214 9.25449V11.0143C3.19214 11.5454 3.1923 11.913 3.21558 12.1979C3.23836 12.4763 3.27997 12.6305 3.33765 12.7438C3.46629 12.996 3.67224 13.2011 3.92456 13.3297C4.03784 13.3874 4.19187 13.43 4.47046 13.4527C4.75528 13.476 5.12211 13.4762 5.65308 13.4762H10.3464C10.8778 13.4762 11.2451 13.476 11.53 13.4527C11.8087 13.43 11.9626 13.3874 12.0759 13.3297C12.3281 13.2012 12.5332 12.9959 12.6619 12.7438C12.7196 12.6305 12.7621 12.4764 12.7849 12.1979C12.8082 11.913 12.8083 11.5454 12.8083 11.0143V9.25449C12.8083 8.9103 12.8078 8.68304 12.7937 8.50938C12.7801 8.3424 12.7564 8.2702 12.7351 8.22813C12.6705 8.10128 12.567 7.99794 12.4402 7.93321C12.3982 7.91181 12.3264 7.88831 12.1589 7.87461C11.9852 7.86042 11.7583 7.85996 11.4138 7.85996H4.58667ZM6.09448 2.57676C6.02299 2.49278 5.88724 2.51907 5.85229 2.62363L5.3689 4.07383C5.25952 4.40218 5.01303 4.6674 4.69312 4.79942L3.27905 5.38242C3.17741 5.4247 3.16106 5.56213 3.24976 5.62754L4.48022 6.53477C4.58499 6.61213 4.67566 6.70477 4.74878 6.80918H8.75366L8.71069 6.67344C8.60606 6.34345 8.65054 5.984 8.83179 5.68906L9.63257 4.38633C9.6901 4.2924 9.62264 4.17139 9.51245 4.17051L7.98413 4.15977C7.63808 4.15729 7.31017 4.00417 7.08569 3.74082L6.09448 2.57676ZM10.9558 2.53379C10.7788 2.5327 10.6082 2.60086 10.4812 2.72422C10.4546 2.7501 10.4163 2.79703 10.3542 2.9127C10.3015 3.01119 10.2424 3.13678 10.1619 3.31309C10.6715 3.64667 10.886 4.35359 10.5271 4.93711L9.72632 6.23887C9.70486 6.2739 9.69925 6.31689 9.71167 6.35606L9.85522 6.80918H11.3308L12.4011 4.4918C12.5242 4.22508 12.6047 4.04753 12.658 3.90781C12.7093 3.77306 12.72 3.7089 12.7214 3.67051C12.7281 3.48171 12.6558 3.29825 12.5212 3.16563C12.4939 3.13871 12.4421 3.09971 12.3113 3.03672C12.1765 2.97185 11.9963 2.89883 11.7234 2.78965C11.4732 2.68959 11.3086 2.62404 11.1785 2.58164C11.0531 2.54079 10.9929 2.53406 10.9558 2.53379Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { L: n })
  },
  qXUS(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "toolbox-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668213, y: 1.835938, width: 14.663086, height: 16.330078 },
        visualBounds: { x: 2.668213, y: 1.835938, width: 14.663086, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668213, y: 1.835938, width: 14.663086, height: 16.330078 },
        center: { x: 9.999756, y: 10.000977 },
        insets: { top: 1.835938, right: 2.668701, bottom: 1.833984, left: 2.668213 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999756, y: 10.000977 },
          foreground: { x: 9.999756, y: 10.000977 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M11.2502 11.42C11.6174 11.4201 11.9153 11.7178 11.9153 12.085C11.915 12.452 11.6172 12.7499 11.2502 12.75H8.75025C8.38314 12.75 8.08547 12.452 8.08521 12.085C8.08521 11.7177 8.38298 11.42 8.75025 11.42H11.2502Z" fill="currentColor"/> <path d="M6.06079 2.86136C6.42939 1.75411 7.86661 1.47501 8.62329 2.36331L9.86255 3.81839C9.89425 3.85562 9.94061 3.87759 9.9895 3.87796L11.3665 3.88772L11.429 3.75101C11.561 3.46052 11.6727 3.2132 11.7786 3.01565C11.8873 2.81279 12.0103 2.62194 12.1809 2.45608C12.5888 2.06001 13.1368 1.83972 13.7053 1.84378C13.9435 1.84552 14.1641 1.89838 14.3831 1.96976C14.5962 2.03925 14.8483 2.14024 15.1448 2.25882C15.4692 2.38858 15.7446 2.49835 15.9631 2.60354C16.1864 2.71107 16.3975 2.83557 16.5793 3.01468C17.0109 3.44003 17.2441 4.02729 17.2229 4.63284C17.2139 4.88792 17.1462 5.12291 17.0579 5.35452C16.9715 5.58099 16.8477 5.84909 16.7014 6.16604L15.595 8.56253C15.7846 8.59536 15.9701 8.64781 16.1497 8.73929C16.5569 8.94686 16.8884 9.2783 17.0959 9.68558C17.2332 9.95513 17.285 10.2374 17.3088 10.5283C17.332 10.8118 17.3313 11.1593 17.3313 11.5684V13.7676C17.3313 14.41 17.3316 14.9321 17.2971 15.3545C17.262 15.7847 17.188 16.1704 17.0051 16.5293C16.7177 17.0935 16.2588 17.5524 15.6946 17.8399C15.3357 18.0227 14.95 18.0967 14.5198 18.1319C14.0973 18.1664 13.5752 18.166 12.9329 18.166H7.06665C6.42423 18.166 5.90219 18.1664 5.47974 18.1319C5.04961 18.0967 4.66381 18.0227 4.30493 17.8399C3.74093 17.5524 3.28279 17.0933 2.99536 16.5293C2.81248 16.1704 2.73754 15.7847 2.70239 15.3545C2.66789 14.9321 2.66822 14.41 2.66822 13.7676V11.5684C2.66822 11.1593 2.66751 10.8118 2.69068 10.5283C2.71448 10.2373 2.76721 9.95522 2.90454 9.68558C3.11211 9.27821 3.44346 8.94685 3.85083 8.73929C3.91271 8.70777 3.97519 8.68053 4.03833 8.65726L3.27759 8.09671C2.33829 7.4039 2.51688 5.95081 3.59595 5.50589L5.36255 4.77737C5.40758 4.75873 5.4418 4.72104 5.45728 4.67483L6.06079 2.86136ZM5.73364 9.83304C5.30263 9.83304 5.01877 9.83388 4.802 9.85159C4.59344 9.86865 4.50542 9.89787 4.45435 9.92386C4.29723 10.0039 4.16917 10.132 4.08911 10.2891C4.06313 10.3402 4.03391 10.4282 4.01685 10.6367C3.99914 10.8535 3.99829 11.1374 3.99829 11.5684V13.7676C3.99829 14.4318 3.99855 14.8904 4.02759 15.2461C4.05602 15.5941 4.1085 15.7856 4.17993 15.9258C4.33989 16.2396 4.5956 16.4944 4.90943 16.6543C5.0496 16.7257 5.24033 16.7782 5.58814 16.8067C5.94386 16.8357 6.40229 16.836 7.06665 16.836H12.9329C13.5971 16.836 14.0557 16.8357 14.4114 16.8067C14.7593 16.7782 14.9509 16.7258 15.0911 16.6543C15.4047 16.4944 15.6597 16.2394 15.8196 15.9258C15.891 15.7856 15.9435 15.5941 15.9719 15.2461C16.001 14.8904 16.0012 14.4318 16.0012 13.7676V11.5684C16.0012 11.1374 16.0014 10.8535 15.9836 10.6367C15.9666 10.428 15.9364 10.3401 15.9104 10.2891C15.8304 10.1321 15.7031 10.0039 15.5461 9.92386C15.4951 9.89784 15.4065 9.86867 15.1975 9.85159C14.9808 9.83389 14.6977 9.83304 14.2668 9.83304H5.73364ZM7.6106 3.22561C7.52563 3.12619 7.36508 3.1573 7.32349 3.28128L6.71997 5.09476C6.58248 5.50787 6.27189 5.84086 5.86939 6.00686L4.10279 6.73538C3.9816 6.78535 3.96125 6.94853 4.06665 7.0264L5.60474 8.16018C5.73555 8.25665 5.84806 8.37292 5.9397 8.50296H10.9309L10.8801 8.3428C10.7487 7.92794 10.8036 7.47622 11.0315 7.1055L12.0334 5.47757C12.1017 5.36593 12.0218 5.22267 11.8909 5.22171L9.97974 5.20804C9.54446 5.20486 9.13206 5.01212 8.84986 4.68069L7.6106 3.22561ZM13.6956 3.17386C13.4764 3.17233 13.2649 3.25751 13.1077 3.41018C13.0754 3.44164 13.0288 3.49935 12.9514 3.64358C12.8861 3.76541 12.8126 3.92029 12.7131 4.13772C13.3497 4.55853 13.6161 5.44339 13.1663 6.17483L12.1653 7.80179C12.1397 7.84342 12.133 7.89484 12.1477 7.94143L12.3264 8.50296H14.1575L15.4934 5.6094C15.6474 5.27569 15.7492 5.05524 15.8157 4.88089C15.8801 4.71181 15.8922 4.63253 15.8938 4.58597C15.902 4.35246 15.8121 4.12598 15.6458 3.96194C15.6126 3.92927 15.549 3.88029 15.386 3.80179C15.2179 3.72088 14.9927 3.63062 14.6516 3.49417C14.3389 3.36909 14.1332 3.2873 13.9709 3.2344C13.8146 3.18346 13.7406 3.1742 13.6956 3.17386Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { O: n })
  },
  duD4(e, t, a) {
    function n(e, [t, a]) {
      return Math.min(a, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(n, "name", { value: "clamp", configurable: !0 }), a.d(t, {}, { q: n }))
  },
  YAOF(e, t, a) {
    a.d(t, { Q6: () => F, bL: () => k, zi: () => B, CC: () => N })
    var n = a("zd8w"),
      r = a("duD4"),
      l = a("kUVq"),
      i = a("lVCP"),
      o = a("zWxU"),
      s = a("Hj0L"),
      c = a("k5JT")
    function d(e) {
      let t = n.useRef({ value: e, previous: e })
      return n.useMemo(
        () => (
          t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
          t.current.previous
        ),
        [e],
      )
    }
    ;(0, Object.defineProperty)(d, "name", { value: "usePrevious", configurable: !0 })
    var u = a("Vuge"),
      p = a("Fc3g"),
      g = a("gMOs"),
      m = a("ABep"),
      h = Object.defineProperty,
      f = (e, t) => h(e, "name", { value: t, configurable: !0 }),
      v = ["PageUp", "PageDown"],
      y = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      b = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      x = "Slider",
      [C, w, I] = (0, g.N)(x),
      [j, _] = (0, o.A)(x, [I]),
      [A, S] = j(x),
      k = n.forwardRef(
        f(function (e, t) {
          let {
              name: a,
              min: o = 0,
              max: c = 100,
              step: d = 1,
              orientation: u = "horizontal",
              disabled: p = !1,
              minStepsBetweenThumbs: g = 0,
              defaultValue: h = [o],
              value: b,
              onValueChange: x = f(() => {}, "onValueChange"),
              onValueCommit: w = f(() => {}, "onValueCommit"),
              inverted: I = !1,
              form: j,
              ..._
            } = e,
            S = n.useRef(new Set()),
            k = n.useRef(0),
            P = n.useRef(!1),
            T = "horizontal" === u,
            [E, N] = n.useState(null),
            U = (0, i.s)(t, N),
            [F = [], D] = (0, s.i)({
              prop: b,
              defaultProp: h,
              onChange: f((e) => {
                let t = [...S.current]
                ;(t[k.current]?.focus({ preventScroll: !0, focusVisible: P.current }), (P.current = !1), x(e))
              }, "onChange"),
            }),
            O = n.useRef(F),
            V = n.useRef(F)
          function z(e) {
            let t = W(F, e)
            q(e, t)
          }
          function $(e) {
            q(e, k.current)
          }
          function B() {
            String(F) !== String(O.current) && w(F)
          }
          function q(e, t, { commit: a } = { commit: !1 }) {
            let n = Y(d),
              l = J(Math.round((e - o) / d) * d + o, n),
              i = (0, r.q)(l, [o, c])
            D((e = []) => {
              let n = R(e, i, t)
              if (!Q(n, g * d)) return e
              {
                k.current = n.indexOf(i)
                let t = String(n) !== String(e)
                return (t && a && w(n), t ? n : e)
              }
            })
          }
          return (
            n.useEffect(() => {
              let e = j ? E?.ownerDocument.getElementById(j) : E?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = f(() => D(V.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [E, j, D]),
            f(z, "handleSlideStart"),
            f($, "handleSlideMove"),
            f(B, "handleSlideEnd"),
            f(q, "updateValues"),
            (0, m.jsx)(A, {
              scope: e.__scopeSlider,
              name: a,
              disabled: p,
              min: o,
              max: c,
              valueIndexToChangeRef: k,
              thumbs: S.current,
              values: F,
              orientation: u,
              form: j,
              children: (0, m.jsx)(C.Provider, {
                scope: e.__scopeSlider,
                children: (0, m.jsx)(C.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, m.jsx)(T ? M : L, {
                    "aria-disabled": p,
                    "data-disabled": p ? "" : void 0,
                    ..._,
                    ref: U,
                    onPointerDown: (0, l.mK)(_.onPointerDown, () => {
                      p || ((O.current = F), (P.current = !1))
                    }),
                    min: o,
                    max: c,
                    inverted: I,
                    onSlideStart: p ? void 0 : z,
                    onSlideMove: p ? void 0 : $,
                    onSlideEnd: p ? void 0 : B,
                    onHomeKeyDown: () => {
                      p || ((P.current = !0), q(o, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      p || ((P.current = !0), q(c, F.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!p) {
                        P.current = !0
                        let a = v.includes(e.key) || (e.shiftKey && y.includes(e.key)),
                          n = k.current
                        q(ee(F[n], { min: o, step: d, direction: t, multiplier: a ? 10 : 1 }), n, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [P, T] = j(x, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      M = n.forwardRef(
        f(function (e, t) {
          let {
              min: a,
              max: r,
              dir: l,
              inverted: o,
              onSlideStart: s,
              onSlideMove: d,
              onSlideEnd: u,
              onStepKeyDown: p,
              ...g
            } = e,
            [h, v] = n.useState(null),
            y = (0, i.s)(t, v),
            x = n.useRef(void 0),
            C = (0, c.useDirection)(l),
            w = "ltr" === C,
            I = (w && !o) || (!w && o)
          function j(e) {
            let t = x.current || h.getBoundingClientRect(),
              n = X([0, t.width], I ? [a, r] : [r, a])
            return ((x.current = t), n(e - t.left))
          }
          return (
            f(j, "getValueFromPointer"),
            (0, m.jsx)(P, {
              scope: e.__scopeSlider,
              startEdge: I ? "left" : "right",
              endEdge: I ? "right" : "left",
              direction: I ? 1 : -1,
              size: "width",
              children: (0, m.jsx)(E, {
                dir: C,
                "data-orientation": "horizontal",
                ...g,
                ref: y,
                style: { ...g.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = j(e.clientX)
                  s?.(t)
                },
                onSlideMove: (e) => {
                  let t = j(e.clientX)
                  d?.(t)
                },
                onSlideEnd: () => {
                  ;((x.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = b[I ? "from-left" : "from-right"].includes(e.key)
                  p?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderHorizontal"),
      ),
      L = n.forwardRef(
        f(function (e, t) {
          let {
              min: a,
              max: r,
              inverted: l,
              onSlideStart: o,
              onSlideMove: s,
              onSlideEnd: c,
              onStepKeyDown: d,
              ...u
            } = e,
            p = n.useRef(null),
            g = (0, i.s)(t, p),
            h = n.useRef(void 0),
            v = !l
          function y(e) {
            let t = h.current || p.current.getBoundingClientRect(),
              n = X([0, t.height], v ? [r, a] : [a, r])
            return ((h.current = t), n(e - t.top))
          }
          return (
            f(y, "getValueFromPointer"),
            (0, m.jsx)(P, {
              scope: e.__scopeSlider,
              startEdge: v ? "bottom" : "top",
              endEdge: v ? "top" : "bottom",
              size: "height",
              direction: v ? 1 : -1,
              children: (0, m.jsx)(E, {
                "data-orientation": "vertical",
                ...u,
                ref: g,
                style: { ...u.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = y(e.clientY)
                  o?.(t)
                },
                onSlideMove: (e) => {
                  let t = y(e.clientY)
                  s?.(t)
                },
                onSlideEnd: () => {
                  ;((h.current = void 0), c?.())
                },
                onStepKeyDown: (e) => {
                  let t = b[v ? "from-bottom" : "from-top"].includes(e.key)
                  d?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      E = n.forwardRef(
        f(function (e, t) {
          let {
              __scopeSlider: a,
              onSlideStart: n,
              onSlideMove: r,
              onSlideEnd: i,
              onHomeKeyDown: o,
              onEndKeyDown: s,
              onStepKeyDown: c,
              ...d
            } = e,
            u = S(x, a)
          return (0, m.jsx)(p.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, l.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (o(e), e.preventDefault())
                : "End" === e.key
                  ? (s(e), e.preventDefault())
                  : v.concat(y).includes(e.key) && (c(e), e.preventDefault())
            }),
            onPointerDown: (0, l.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                u.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : n(e))
            }),
            onPointerMove: (0, l.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && r(e)
            }),
            onPointerUp: (0, l.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
            }),
          })
        }, "SliderImpl"),
      ),
      N = n.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: a, ...n } = e,
            r = S("SliderTrack", a)
          return (0, m.jsx)(p.sG.span, {
            "data-disabled": r.disabled ? "" : void 0,
            "data-orientation": r.orientation,
            ...n,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      U = "SliderRange",
      F = n.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: a, ...r } = e,
            l = S(U, a),
            o = T(U, a),
            s = n.useRef(null),
            c = (0, i.s)(t, s),
            d = l.values.length,
            u = l.values.map((e) => G(e, l.min, l.max)),
            g = d > 1 ? Math.min(...u) : 0,
            h = 100 - Math.max(...u)
          return (0, m.jsx)(p.sG.span, {
            "data-orientation": l.orientation,
            "data-disabled": l.disabled ? "" : void 0,
            ...r,
            ref: c,
            style: { ...e.style, [o.startEdge]: g + "%", [o.endEdge]: h + "%" },
          })
        }, "SliderRange"),
      ),
      [D, O] = j("SliderThumb")
    function V(e) {
      let { __scopeSlider: t, name: a, children: r, internal_do_not_use_render: l } = e,
        i = S("SliderThumbProvider", t),
        o = w(t),
        [s, c] = n.useState(null),
        d = n.useMemo(() => (s ? o().findIndex((e) => e.ref.current === s) : -1), [o, s]),
        p = (0, u.X)(s),
        g = !s || !!i.form || !!s.closest("form"),
        h = i.values[d],
        f = a ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
        v = void 0 === h ? 0 : G(h, i.min, i.max)
      n.useEffect(() => {
        if (s)
          return (
            i.thumbs.add(s),
            () => {
              i.thumbs.delete(s)
            }
          )
      }, [s, i.thumbs])
      let y = {
        value: h,
        name: f,
        form: i.form,
        isFormControl: g,
        index: d,
        thumb: s,
        onThumbChange: c,
        percent: v,
        size: p,
      }
      return (0, m.jsx)(D, { scope: t, ...y, children: et(l) ? l(y) : r })
    }
    f(V, "SliderThumbProvider")
    var z = "SliderThumbTrigger",
      $ = n.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: a, ...n } = e,
            r = S(z, a),
            o = T(z, a),
            { index: s, value: c, percent: d, size: u, onThumbChange: g } = O(z, a),
            h = (0, i.s)(t, g),
            f = H(s, r.values.length),
            v = u?.[o.size],
            y = v ? K(v, d, o.direction) : 0
          return (0, m.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [o.startEdge]: `calc(${d}% + ${y}px)`,
            },
            children: (0, m.jsx)(C.ItemSlot, {
              scope: a,
              children: (0, m.jsx)(p.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || f,
                "aria-valuemin": r.min,
                "aria-valuenow": c,
                "aria-valuemax": r.max,
                "aria-orientation": r.orientation,
                "data-orientation": r.orientation,
                "data-disabled": r.disabled ? "" : void 0,
                tabIndex: r.disabled ? void 0 : 0,
                ...n,
                ref: h,
                style: void 0 === c ? { display: "none" } : e.style,
                onFocus: (0, l.mK)(e.onFocus, () => {
                  r.valueIndexToChangeRef.current = s
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      B = n.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: a, name: n, ...r } = e
          return (0, m.jsx)(V, {
            __scopeSlider: a,
            name: n,
            internal_do_not_use_render: ({ index: e, isFormControl: n }) =>
              (0, m.jsxs)(m.Fragment, {
                children: [
                  (0, m.jsx)($, { ...r, ref: t, __scopeSlider: a }),
                  n ? (0, m.jsx)(q, { __scopeSlider: a }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      q = n.forwardRef(
        f(function ({ __scopeSlider: e, ...t }, a) {
          let { value: r, name: l, form: o } = O("SliderBubbleInput", e),
            s = n.useRef(null),
            c = (0, i.s)(s, a),
            u = d(r)
          return (
            n.useEffect(() => {
              let e = s.current
              if (!e) return
              let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
              if (u !== r && t) {
                let a = new Event("input", { bubbles: !0 })
                ;(t.call(e, r), e.dispatchEvent(a))
              }
            }, [u, r]),
            (0, m.jsx)(p.sG.input, { style: { display: "none" }, name: l, form: o, ...t, ref: c, defaultValue: r })
          )
        }, "SliderBubbleInput"),
      )
    function R(e = [], t, a) {
      let n = [...e]
      return ((n[a] = t), n.sort((e, t) => e - t))
    }
    function G(e, t, a) {
      return (0, r.q)((100 / (a - t)) * (e - t), [0, 100])
    }
    function H(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function W(e, t) {
      if (1 === e.length) return 0
      let a = e.map((e) => Math.abs(e - t)),
        n = Math.min(...a)
      return a.indexOf(n)
    }
    function K(e, t, a) {
      let n = e / 2,
        r = X([0, 50], [0, n])
      return (n - r(t) * a) * a
    }
    function Z(e) {
      return e.slice(0, -1).map((t, a) => e[a + 1] - t)
    }
    function Q(e, t) {
      return !(t > 0) || Math.min(...Z(e)) >= t
    }
    function X(e, t) {
      return (a) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let n = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + n * (a - e[0])
      }
    }
    function Y(e) {
      if (!Number.isFinite(e)) return 0
      let t = e.toString()
      if (t.includes("e")) {
        let [e, a] = t.split("e"),
          n = e.split(".")[1] || "",
          r = Number(a)
        return Math.max(0, n.length - r)
      }
      let a = t.split(".")[1]
      return a ? a.length : 0
    }
    function J(e, t) {
      let a = Math.pow(10, t)
      return Math.round(e * a) / a
    }
    function ee(e, { min: t, step: a, direction: n, multiplier: r }) {
      let l,
        i = Y(a),
        o = (e - t) / a,
        s = Math.round(o)
      return ((l = J(s * a + t, i) === J(e, i) ? s + r * n : n > 0 ? Math.ceil(o) : Math.floor(o)), J(l * a + t, i))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(f(R, "getNextSortedValues"),
      f(G, "convertValueToPercentage"),
      f(H, "getLabel"),
      f(W, "getClosestValueIndex"),
      f(K, "getThumbInBoundsOffset"),
      f(Z, "getStepsBetweenValues"),
      f(Q, "hasMinStepsBetweenValues"),
      f(X, "linearScale"),
      f(Y, "getDecimalCount"),
      f(J, "roundValue"),
      f(ee, "getNextStepValue"),
      f(et, "isFunction"))
  },
}
//# sourceMappingURL=752759.4138b8f3b5.js.map
