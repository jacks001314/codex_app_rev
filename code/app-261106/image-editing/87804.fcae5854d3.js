export const __rspack_esm_ids = [87804]
export const __webpack_modules__ = {
  fMfd(e, t, n) {
    var i = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, i.jsxs)("svg", {
          width: 36,
          height: 36,
          viewBox: "0 0 36 36",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("g", {
              clipPath: "url(#clip0_1683_12416)",
              children: (0, i.jsx)("path", {
                d: "M13.8076 13.1477V9.75825C13.8076 9.47278 13.9147 9.25859 14.1644 9.11603L20.9792 5.1914C21.9069 4.65627 23.013 4.40661 24.1545 4.40661C28.4359 4.40661 31.1477 7.72483 31.1477 11.2569C31.1477 11.5065 31.1477 11.792 31.1119 12.0775L24.0474 7.93867C23.6194 7.68901 23.191 7.68901 22.763 7.93867L13.8076 13.1477ZM29.7203 26.349V18.2497C29.7203 17.7501 29.5061 17.3933 29.0781 17.1437L20.1228 11.9346L23.0484 10.2576C23.2981 10.115 23.5123 10.115 23.7619 10.2576L30.5767 14.1822C32.5392 15.3241 33.8591 17.7501 33.8591 20.1048C33.8591 22.8162 32.2537 25.3138 29.7203 26.3486V26.349ZM11.7026 19.2132L8.77694 17.5007C8.52728 17.3582 8.42019 17.144 8.42019 16.8585V9.00927C8.42019 5.19174 11.3458 2.30157 15.3063 2.30157C16.8049 2.30157 18.1961 2.80122 19.3738 3.69311L12.3452 7.76064C11.9171 8.0103 11.7029 8.36705 11.7029 8.86671V19.2136L11.7026 19.2132ZM18 22.8524L13.8076 20.4977V15.5028L18 13.1481L22.192 15.5028V20.4977L18 22.8524ZM20.6937 33.6989C19.1951 33.6989 17.8039 33.1992 16.6262 32.3074L23.6548 28.2398C24.0829 27.9902 24.2971 27.6334 24.2971 27.1338V16.7869L27.2585 18.4994C27.5082 18.6419 27.6153 18.8561 27.6153 19.1416V26.9909C27.6153 30.8084 24.6538 33.6986 20.6937 33.6986V33.6989ZM12.2377 25.7426L5.42292 21.8179C3.46044 20.6761 2.14052 18.2501 2.14052 15.8954C2.14052 13.1481 3.78172 10.6863 6.3148 9.6515V17.7862C6.3148 18.2859 6.52899 18.6426 6.95703 18.8923L15.8769 24.0655L12.9512 25.7426C12.7016 25.8851 12.4874 25.8851 12.2377 25.7426ZM11.8455 31.5939C7.81378 31.5939 4.85232 28.5611 4.85232 24.8149C4.85232 24.5294 4.88813 24.2439 4.9236 23.9585L11.9523 28.026C12.3803 28.2756 12.8087 28.2756 13.2367 28.026L22.192 22.8527V26.2422C22.192 26.5277 22.0849 26.7419 21.8353 26.8844L15.0205 30.8091C14.0928 31.3442 12.9867 31.5939 11.8452 31.5939H11.8455ZM20.6937 35.8394C25.0109 35.8394 28.6143 32.7712 29.4352 28.7037C33.4311 27.6689 36 23.9226 36 20.1051C36 17.6075 34.9297 15.1815 33.0031 13.4332C33.1814 12.6839 33.2885 11.9346 33.2885 11.1856C33.2885 6.08363 29.1497 2.26575 24.3687 2.26575C23.4055 2.26575 22.4778 2.40832 21.5501 2.7296C19.9444 1.15968 17.7323 0.160706 15.3063 0.160706C10.9891 0.160706 7.38574 3.22892 6.5648 7.29645C2.56889 8.33124 0 12.0775 0 15.895C0 18.3926 1.07026 20.8186 2.99693 22.5669C2.81855 23.3162 2.71146 24.0655 2.71146 24.8145C2.71146 29.9165 6.85027 33.7344 11.6313 33.7344C12.5945 33.7344 13.5222 33.5918 14.4499 33.2705C16.0553 34.8405 18.2674 35.8394 20.6937 35.8394Z",
                fill: "currentColor",
              }),
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsx)("clipPath", {
                id: "clip0_1683_12416",
                children: (0, i.jsx)("rect", { width: 36, height: 36, fill: "white" }),
              }),
            }),
          ],
        })))
  },
  lPBr(e, t, n) {
    n.r(t)
    let i = "Codex selected "
    function r(e) {
      return `${i}${e.postscriptName}`
    }
    function a(e, t) {
      return l(e)?.toLowerCase() === t.family.toLowerCase()
    }
    function l(e) {
      return null == e
        ? void 0
        : o(e)
            .replace(/^["']|["']$/g, "")
            .replace(/\\(.)/gsu, "$1") || void 0
    }
    function o(e) {
      let t = null
      for (let n = 0; n < e.length; n += 1) {
        let i = e[n]
        if ("\\" === i) n += 1
        else if (null != t) i === t && (t = null)
        else if ('"' === i || "'" === i) t = i
        else if ("," === i) return e.slice(0, n).trim()
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
        doesThemeFontFaceMatchValue: a,
        escapeThemeFontCssString: s,
        getAvailableCssFontFamilyName: function (e) {
          if (null == e) return
          let t = document.createElement("canvas").getContext("2d"),
            n = "Sphinx of black quartz, judge my vow 1234567890",
            i = ["monospace", "serif"].map((e) => (null == t ? 0 : ((t.font = `16px ${e}`), t.measureText(n).width)))
          for (let r = e; r.length > 0;) {
            let e = o(r),
              a = l(e)
            if (((r = r.trimStart().slice(e.length + 1)), null != a)) {
              if (e === a && ("-apple-system-body" === a || "-apple-system" === a || "BlinkMacSystemFont" === a))
                return "system-ui"
              if (
                (e === a &&
                  /^(?:system-ui|(?:ui-)?(?:serif|sans-serif|monospace)|cursive|fantasy|math|emoji|fangsong)$/i.test(
                    a,
                  )) ||
                (null != t &&
                  ["monospace", "serif"].some(
                    (e, r) => ((t.font = `16px "${s(a)}", ${e}`), t.measureText(n).width !== i[r]),
                  ))
              )
                return a
            }
          }
          return "system-ui"
        },
        getFirstCssFontFamilyName: l,
        getFirstCssFontFamilyValue: o,
        getThemeFontFaceAlias: r,
        getThemeFontFaceLocalNames: function (e, t) {
          return null != t && r(t) === e
            ? [t.postscriptName, t.fullName]
            : e.startsWith(i)
              ? [e.slice(i.length)]
              : void 0
        },
        getThemeFontFamilyValue: function (e, t) {
          return null != e && null != t && a(e, t) ? `"${s(r(t))}", ${e}` : e
        },
      },
    )
  },
  PpSX(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      a = n("f6KK"),
      l = n("SAxP"),
      o = n("zd8w"),
      s = n("v7qY"),
      d = n("xqnZ")
    let c = new a.hs("artifact-comment-recipient")
    n.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            n,
            u,
            g,
            m,
            h,
            f,
            p,
            x,
            v,
            y,
            b,
            w,
            I,
            M,
            j,
            C,
            E = (0, r.c)(52),
            {
              value: S,
              disabled: T,
              onChange: _,
              placeholder: A,
              ariaLabel: k,
              assignedToChatGpt: P,
              recipient: R,
              recipientPlaceholder: N,
              inputRef: z,
              autoFocus: L,
              onRemoveRecipient: D,
              onSubmit: O,
            } = e,
            B = void 0 !== T && T,
            U = void 0 === k ? A : k
          E[0] !== P || E[1] !== S
            ? ((t = () => {
                let e = (0, d.Sr)(S, {
                    defaultTextKind: "prompt",
                    enableFileMentions: !1,
                    enableSkillMentions: !1,
                    enableSlashCommands: !1,
                    enterBehavior: "enter",
                    plainTextMode: !0,
                  }),
                  t = { mention: document.createElement("span"), placeholder: document.createElement("span") }
                return (
                  e.view.updateState(
                    e.view.state.reconfigure({
                      plugins: [
                        ...e.view.state.plugins,
                        new a.k_({
                          key: c,
                          state: {
                            init: () => P,
                            apply(e, t) {
                              let n = e.getMeta(c)
                              return "boolean" == typeof n ? n : t
                            },
                          },
                          props: {
                            decorations(e) {
                              if (!0 !== c.getState(e)) return null
                              let { doc: n } = e,
                                i = [l.NZ.widget(1, t.mention, { side: -1 })]
                              return (
                                1 === n.childCount &&
                                  0 === n.child(0).content.size &&
                                  i.push(l.NZ.widget(1, t.placeholder, { side: 1 })),
                                l.zF.create(n, i)
                              )
                            },
                          },
                        }),
                      ],
                    }),
                  ),
                  { controller: e, destroy: () => e.destroy(), prefix: t }
                )
              }),
              (E[0] = P),
              (E[1] = S),
              (E[2] = t))
            : (t = E[2])
          let [F] = (0, o.useState)(t),
            { controller: $, destroy: H, prefix: K } = F
          ;((0, d.fP)(H, $),
            E[3] !== $.view.dom ? ((n = () => $.view.dom), (E[3] = $.view.dom), (E[4] = n)) : (n = E[4]),
            E[5] !== $ ? ((u = [$]), (E[5] = $), (E[6] = u)) : (u = E[6]),
            (0, o.useImperativeHandle)(z, n, u),
            E[7] !== $.view || E[8] !== B
              ? ((g = () => {
                  ;($.view.setProps({ editable: () => !B }), $.view.dom.setAttribute("aria-disabled", String(B)))
                }),
                (E[7] = $.view),
                (E[8] = B),
                (E[9] = g))
              : (g = E[9]),
            E[10] !== $ || E[11] !== B ? ((m = [$, B]), (E[10] = $), (E[11] = B), (E[12] = m)) : (m = E[12]),
            (0, o.useLayoutEffect)(g, m),
            E[13] !== $ || E[14] !== _ || E[15] !== S
              ? ((h = (e) => {
                  if (e) {
                    let e = $.getText()
                    e !== S && _(e)
                  }
                }),
                (E[13] = $),
                (E[14] = _),
                (E[15] = S),
                (E[16] = h))
              : (h = E[16]))
          let V = (0, o.useEffectEvent)(h)
          ;(E[17] !== $.view || E[18] !== V
            ? ((f = () => (0, d.A$)($.view, V)), (E[17] = $.view), (E[18] = V), (E[19] = f))
            : (f = E[19]),
            E[20] !== $ ? ((p = [$]), (E[20] = $), (E[21] = p)) : (p = E[21]),
            (0, o.useEffect)(f, p),
            E[22] !== $ || E[23] !== S
              ? ((x = () => {
                  $.getText() !== S && $.restoreText(S)
                }),
                (v = [$, S]),
                (E[22] = $),
                (E[23] = S),
                (E[24] = x),
                (E[25] = v))
              : ((x = E[24]), (v = E[25])),
            (0, o.useEffect)(x, v),
            E[26] !== P || E[27] !== $.view
              ? ((y = () => {
                  c.getState($.view.state) !== P && $.view.dispatch($.view.state.tr.setMeta(c, P))
                }),
                (E[26] = P),
                (E[27] = $.view),
                (E[28] = y))
              : (y = E[28]),
            E[29] !== P || E[30] !== $ ? ((b = [$, P]), (E[29] = P), (E[30] = $), (E[31] = b)) : (b = E[31]),
            (0, o.useEffect)(y, b))
          e: {
            if (P) {
              w = ""
              break e
            }
            w = A
          }
          let G = w
          E[32] !== P || E[33] !== $.view.state || E[34] !== D
            ? ((I = (e) => {
                P &&
                  null != D &&
                  "Backspace" === e.key &&
                  !e.nativeEvent.isComposing &&
                  $.view.state.selection.empty &&
                  1 === $.view.state.selection.from &&
                  (e.preventDefault(), e.stopPropagation(), D())
              }),
              (E[32] = P),
              (E[33] = $.view.state),
              (E[34] = D),
              (E[35] = I))
            : (I = E[35])
          let q = B || !(void 0 === L || L)
          return (
            E[36] !== U || E[37] !== $ || E[38] !== G || E[39] !== O || E[40] !== q
              ? ((M = (0, i.jsx)(d.kB, {
                  ariaLabel: U,
                  composerController: $,
                  disableAutoFocus: q,
                  minHeight: "1lh",
                  placeholder: G,
                  onSubmit: O,
                })),
                (E[36] = U),
                (E[37] = $),
                (E[38] = G),
                (E[39] = O),
                (E[40] = q),
                (E[41] = M))
              : (M = E[41]),
            E[42] !== P || E[43] !== K || E[44] !== R || E[45] !== N
              ? ((j =
                  P &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [(0, s.createPortal)(R, K.mention), (0, s.createPortal)(N, K.placeholder)],
                  })),
                (E[42] = P),
                (E[43] = K),
                (E[44] = R),
                (E[45] = N),
                (E[46] = j))
              : (j = E[46]),
            E[47] !== B || E[48] !== I || E[49] !== M || E[50] !== j
              ? ((C = (0, i.jsxs)("div", {
                  className: "min-w-0 comment-typography",
                  inert: B,
                  onKeyDownCapture: I,
                  children: [M, j],
                })),
                (E[47] = B),
                (E[48] = I),
                (E[49] = M),
                (E[50] = j),
                (E[51] = C))
              : (C = E[51]),
            C
          )
        },
      },
    )
  },
  vlfB(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      a = n("I1iB")
    function l(e) {
      return { value: e }
    }
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            o,
            s,
            d,
            c = (0, r.c)(19),
            { label: u, value: g, suffix: m, min: h, max: f, onChange: p, presets: x, side: v, menuPlacement: y } = e,
            b = void 0 === h ? 0 : h
          c[0] !== x ? ((t = void 0 === x ? [0, 1, 2, 4, 8] : x), (c[0] = x), (c[1] = t)) : (t = c[1])
          let w = t,
            I = void 0 === v ? "left" : v
          return (
            c[2] !== u ? ((n = (0, i.jsx)("span", { children: u })), (c[2] = u), (c[3] = n)) : (n = c[3]),
            c[4] !== w ? ((o = w.map(l)), (c[4] = w), (c[5] = o)) : (o = c[5]),
            c[6] !== u ||
            c[7] !== f ||
            c[8] !== y ||
            c[9] !== b ||
            c[10] !== p ||
            c[11] !== I ||
            c[12] !== m ||
            c[13] !== o ||
            c[14] !== g
              ? ((s = (0, i.jsx)(a.D, {
                  label: u,
                  value: g,
                  suffix: m,
                  min: b,
                  max: f,
                  onChange: p,
                  side: I,
                  menuPlacement: y,
                  presets: o,
                })),
                (c[6] = u),
                (c[7] = f),
                (c[8] = y),
                (c[9] = b),
                (c[10] = p),
                (c[11] = I),
                (c[12] = m),
                (c[13] = o),
                (c[14] = g),
                (c[15] = s))
              : (s = c[15]),
            c[16] !== n || c[17] !== s
              ? ((d = (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col gap-1.5 text-xs text-secondary",
                  "data-inspector-field-label": !0,
                  children: [n, s],
                })),
                (c[16] = n),
                (c[17] = s),
                (c[18] = d))
              : (d = c[18]),
            d
          )
        },
      },
    )
  },
  WIy3(e, t, n) {
    n.d(t, { b: () => I, D: () => j })
    var i = n("ABep"),
      r = n("QosV"),
      a = n("LEvs"),
      l = n("EWFe"),
      o = n("gwne"),
      s = n("zd8w"),
      d = n("Wf1j"),
      c = n("oyxz"),
      u = n("bqtn"),
      g = n("HOLv"),
      m = n("bVeK"),
      h = n("EShr"),
      f = n("vGEi"),
      p = n("HVBu"),
      x = n.n(p),
      v = n("lPBr")
    let y = [
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
      b = x()(() => y.filter((e) => (0, v.getAvailableCssFontFamilyName)(e) === e))
    var w = n("aCBZ")
    function I(e) {
      let t,
        n,
        a,
        l,
        o,
        g,
        h,
        p,
        x,
        v,
        y,
        I,
        j,
        C = (0, r.c)(32),
        { value: E, onChange: S, compact: T } = e,
        _ = void 0 !== T && T,
        A = (0, d.A)(),
        [k, P] = (0, s.useState)(),
        R = _ ? "bottom" : "left"
      C[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            e && P(b())
          }),
          (C[0] = t))
        : (t = C[0])
      let N = _ ? void 0 : "w-full justify-between",
        z = _ ? "ghostActive" : "field",
        L = _ ? "formatToolbar" : "field"
      return (
        C[1] !== A
          ? ((n = A.formatMessage({
              id: "presentationEditor.font",
              defaultMessage: "Font family",
              description: "Font family selector",
            })),
            (C[1] = A),
            (C[2] = n))
          : (n = C[2]),
        C[3] !== E
          ? ((a = { fontFamily: E }),
            (l =
              E ??
              (0, i.jsx)(c.A, {
                id: "presentationEditor.mixed",
                defaultMessage: "Mixed",
                description: "A formatting value differs across selected objects or table cells",
              })),
            (C[3] = E),
            (C[4] = a),
            (C[5] = l))
          : ((a = C[4]), (l = C[5])),
        C[6] !== a || C[7] !== l
          ? ((o = (0, i.jsx)("span", { className: "min-w-0 truncate", style: a, children: l })),
            (C[6] = a),
            (C[7] = l),
            (C[8] = o))
          : (o = C[8]),
        C[9] === Symbol.for("react.memo_cache_sentinel") ? ((g = (0, i.jsx)(m.HIf, {})), (C[9] = g)) : (g = C[9]),
        C[10] !== o || C[11] !== N || C[12] !== z || C[13] !== L || C[14] !== n
          ? ((h = (0, i.jsxs)(f.P, {
              className: N,
              color: z,
              contentLayout: "dropdown",
              size: L,
              "aria-label": n,
              children: [o, g],
            })),
            (C[10] = o),
            (C[11] = N),
            (C[12] = z),
            (C[13] = L),
            (C[14] = n),
            (C[15] = h))
          : (h = C[15]),
        C[16] !== E ? ((p = null == E ? [] : [E]), (C[16] = E), (C[17] = p)) : (p = C[17]),
        C[18] !== k ? ((x = k ?? []), (C[18] = k), (C[19] = x)) : (x = C[19]),
        C[20] !== p || C[21] !== x
          ? ((v = new Set([
              ...p,
              "Arial",
              "Helvetica Neue",
              "Calibri",
              "Carlito",
              "Georgia",
              "Times New Roman",
              "Verdana",
              ...x,
            ])),
            (C[20] = p),
            (C[21] = x),
            (C[22] = v))
          : (v = C[22]),
        C[23] !== v ? ((y = [...v]), (C[23] = v), (C[24] = y)) : (y = C[24]),
        C[25] !== S || C[26] !== y
          ? ((I = y.map((e) =>
              (0, i.jsx)(
                u.ms.Item,
                { onSelect: () => S(e), children: (0, i.jsx)("span", { style: { fontFamily: e }, children: e }) },
                e,
              ),
            )),
            (C[25] = S),
            (C[26] = y),
            (C[27] = I))
          : (I = C[27]),
        C[28] !== h || C[29] !== I || C[30] !== R
          ? ((j = (0, i.jsx)(u.Ab, {
              side: R,
              align: "start",
              onOpenChange: t,
              contentRef: M,
              contentClassName: `${w.A.surface} pointer-events-auto min-w-50`,
              contentWidth: "menuBounded",
              triggerButton: h,
              children: I,
            })),
            (C[28] = h),
            (C[29] = I),
            (C[30] = R),
            (C[31] = j))
          : (j = C[31]),
        j
      )
    }
    function M(e) {
      return e?.setAttribute("data-popcorn-edit-toolbar-root", "true")
    }
    function j(e) {
      let t,
        n,
        s,
        c,
        u,
        m,
        f,
        p,
        x,
        v,
        y,
        b,
        w = (0, r.c)(26),
        { value: I, onChange: M } = e,
        j = (0, d.A)()
      w[0] !== j
        ? ((t = j.formatMessage({
            id: "presentationEditor.alignment",
            defaultMessage: "Alignment",
            description: "Text alignment controls",
          })),
          (w[0] = j),
          (w[1] = t))
        : (t = w[1])
      let C = I ?? null
      return (
        w[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(g.I, { asset: l.z })), (w[2] = n))
          : (n = w[2]),
        w[3] !== j
          ? ((s = j.formatMessage({
              id: "presentationEditor.alignLeft",
              defaultMessage: "Align left",
              description: "Left align text",
            })),
            (w[3] = j),
            (w[4] = s))
          : (s = w[4]),
        w[5] !== s ? ((c = { id: "left", label: n, ariaLabel: s }), (w[5] = s), (w[6] = c)) : (c = w[6]),
        w[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(g.I, { asset: a.v })), (w[7] = u))
          : (u = w[7]),
        w[8] !== j
          ? ((m = j.formatMessage({
              id: "presentationEditor.alignCenter",
              defaultMessage: "Align center",
              description: "Center align text",
            })),
            (w[8] = j),
            (w[9] = m))
          : (m = w[9]),
        w[10] !== m ? ((f = { id: "center", label: u, ariaLabel: m }), (w[10] = m), (w[11] = f)) : (f = w[11]),
        w[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(g.I, { asset: o.E })), (w[12] = p))
          : (p = w[12]),
        w[13] !== j
          ? ((x = j.formatMessage({
              id: "presentationEditor.alignRight",
              defaultMessage: "Align right",
              description: "Right align text",
            })),
            (w[13] = j),
            (w[14] = x))
          : (x = w[14]),
        w[15] !== x ? ((v = { id: "right", label: p, ariaLabel: x }), (w[15] = x), (w[16] = v)) : (v = w[16]),
        w[17] !== v || w[18] !== c || w[19] !== f
          ? ((y = [c, f, v]), (w[17] = v), (w[18] = c), (w[19] = f), (w[20] = y))
          : (y = w[20]),
        w[21] !== M || w[22] !== t || w[23] !== y || w[24] !== C
          ? ((b = (0, i.jsx)(h.T, {
              className: "flex-1",
              fullWidth: !0,
              variant: "field",
              focusRing: "surface",
              unselectedColor: "ghostActive",
              ariaLabel: t,
              selectedId: C,
              onSelect: M,
              options: y,
            })),
            (w[21] = M),
            (w[22] = t),
            (w[23] = y),
            (w[24] = C),
            (w[25] = b))
          : (b = w[25]),
        b
      )
    }
  },
  tmP1(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      a = n("zTeN"),
      l = n("v7qY"),
      o = n("Wf1j"),
      s = n("vx3B"),
      d = n("VCD3"),
      c = n("SqqO"),
      u = n("Oj9r"),
      g = n("taWv"),
      m = n("OOaz"),
      h = n("MrGp"),
      f = n("rxj0"),
      p = n("jfiJ"),
      x = n("FGJH"),
      v = n("uQqo"),
      y = n("bmqg"),
      b = n("GTfO"),
      w = n("HooH")
    function I(e) {
      return [e.id, e]
    }
    function M(e) {
      return e.images
    }
    n.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            n,
            j,
            C,
            E,
            S,
            T,
            _,
            A,
            k = (0, r.c)(35)
          k[0] !== e ? (({ initialImages: t, ...n } = e), (k[0] = e), (k[1] = t), (k[2] = n)) : ((t = k[1]), (n = k[2]))
          let P = (0, a.gh)(u.GD),
            R = (0, a.Ul)(b.R),
            N = P.value
          k[3] !== n.fallbackImage.chatGptConversationId || k[4] !== N
            ? ((j =
                n.fallbackImage.chatGptConversationId ??
                ("chatgpt-thread" === N.routeKind ? (0, m.TF)(N.conversationId) : null)),
              (k[3] = n.fallbackImage.chatGptConversationId),
              (k[4] = N),
              (k[5] = j))
            : (j = k[5])
          let z = j,
            L = (0, o.A)(),
            D = (0, a._U)(h.jS, z),
            O = (0, a._U)(x.Kz, D ?? z ?? ""),
            B = (0, a._U)(y.p, z),
            U = (0, a._U)(h.bu, z),
            F = (0, a._U)(h.N4, z),
            $ = (0, a._U)(g.qY, z),
            H = (0, a._U)(w.VG, z),
            K = (0, a._U)(w.tN, z),
            V = (0, a._U)(f.Dr, z)
          if (k[6] !== U || k[7] !== K || k[8] !== t || k[9] !== L || k[10] !== F || k[11] !== V || k[12] !== B) {
            let e,
              n = B?.flatMap(M) ?? [],
              i = new Map(
                (0, d.nt)({ conversationTitle: U, images: F?.kind === "post" ? (0, v.dJ)(F.post, n) : n, intl: L }).map(
                  I,
                ),
              )
            for (let t of ((C = []), k[15] !== B ? ((e = B ?? []), (k[15] = B), (k[16] = e)) : (e = k[16]), e)) {
              let e = []
              for (let n of t.images) {
                let r = i.get(n.id)
                null == n.src || "completed" !== n.status
                  ? e.push({
                      id: n.id,
                      loading: !0,
                      generationStartedAtMs:
                        K?.messageId === t.userMessageId ? K.startedAtMs : n.loadingState?.startedAtMs,
                    })
                  : null != r && e.push(r)
              }
              C.push({ id: t.id, turnStartedAtMs: t.turnStartedAtMs, images: e })
            }
            let r = t.flatMap((e) =>
              i.has(e.id) || (V && (0, c.M0)(e.src))
                ? []
                : [V && (0, c.M0)(e.previewSrc) ? { ...e, previewSrc: e.src } : e],
            )
            ;((E = C.slice(0, -1)),
              r.length > 0 && E.unshift({ id: "opening-images", images: r, turnStartedAtMs: null }),
              (k[6] = U),
              (k[7] = K),
              (k[8] = t),
              (k[9] = L),
              (k[10] = F),
              (k[11] = V),
              (k[12] = B),
              (k[13] = C),
              (k[14] = E))
          } else ((C = k[13]), (E = k[14]))
          let G = n.imageAssetResolver ?? $ ?? void 0
          ;(k[17] !== G || k[18] !== R
            ? ((S = G?.validationSessionId == null ? G : { ...G, validationSessionId: R }),
              (k[17] = G),
              (k[18] = R),
              (k[19] = S))
            : (S = k[19]),
            k[20] !== O || k[21] !== P || k[22] !== D
              ? ((T =
                  null == D || null == O || O.complete
                    ? void 0
                    : {
                        hasMore: null != O.cursor,
                        isLoading: O.isLoading,
                        hasError: O.hasError,
                        onLoadMore: () => {
                          ;(0, p.c)(P, D, l.flushSync, {
                            skipEmptyPages: !1,
                            source: "CHATGPT_CONVERSATION_MESSAGE_PAGE_LOAD_SOURCE_IMAGE_LIGHTBOX",
                          })
                        },
                      }),
                (k[20] = O),
                (k[21] = P),
                (k[22] = D),
                (k[23] = T))
              : (T = k[23]),
            k[24] !== C ? ((_ = C.at(-1) ?? null), (k[24] = C), (k[25] = _)) : (_ = k[25]))
          let q = K?.messageId === H ? K.startedAtMs : void 0
          return (
            k[26] !== U ||
            k[27] !== E ||
            k[28] !== H ||
            k[29] !== n ||
            k[30] !== S ||
            k[31] !== T ||
            k[32] !== _ ||
            k[33] !== q
              ? ((A = (0, i.jsx)(s.Z, {
                  ...n,
                  imageAssetResolver: S,
                  conversationId: null,
                  conversationTitle: U,
                  historicalGeneratedImageGroups: E,
                  historyPagination: T,
                  liveTailGeneratedImageGroup: _,
                  optimisticImageEditMessageId: H,
                  optimisticImageEditStartedAtMs: q,
                })),
                (k[26] = U),
                (k[27] = E),
                (k[28] = H),
                (k[29] = n),
                (k[30] = S),
                (k[31] = T),
                (k[32] = _),
                (k[33] = q),
                (k[34] = A))
              : (A = k[34]),
            A
          )
        },
      },
    )
  },
  yoOF(e, t, n) {
    var i = n("iRMi"),
      r = n("yGJW"),
      a = n("OMIV")
    let l = {
        browser_local: i.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_BROWSER_LOCAL,
        browser_remote: i.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_BROWSER_REMOTE,
        file_artifact: i.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_FILE_ARTIFACT,
        artifact_session: i.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_ARTIFACT_SESSION,
        native_page: i.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_NATIVE_PAGE,
        site: i.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_SITE,
        image: i.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_IMAGE,
      },
      o = {
        button: i.CodexAnnotationModeEntrySource.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_BUTTON,
        keyboard_shortcut: i.CodexAnnotationModeEntrySource.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_KEYBOARD_SHORTCUT,
        context_menu: i.CodexAnnotationModeEntrySource.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU,
      }
    n.d(
      t,
      {},
      {
        O: function (e, { surface: t, entrySource: n, isDetached: s }) {
          let d = e.get(a.M9),
            c = d?.getContext().user,
            u = c?.userID,
            g = c?.customIDs?.account_id
          ;(0, r.yy)(
            e,
            i.CodexAnnotationModeEntered,
            { surface: l[t], entrySource: null == n ? void 0 : o[n], isDetached: s },
            void 0,
            void 0,
            {
              expectedUserId: u,
              expectedAccountId: g,
              shouldSend: () => {
                let t = d?.getContext().user
                return e.get(a.M9) === d && t?.userID === u && t?.customIDs?.account_id === g
              },
            },
          )
        },
      },
    )
  },
  JDjE(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      a = n("q6KF"),
      l = n("bdLz")
    n.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            n,
            o,
            s,
            d = (0, r.c)(18),
            {
              authorAvatar: c,
              children: u,
              disabled: g,
              loading: m,
              layout: h,
              showSubmit: f,
              submitLabel: p,
              submitType: x,
              onSubmit: v,
            } = e,
            y = void 0 !== m && m,
            b = void 0 === f || f
          d[0] !== g || d[1] !== y || d[2] !== v || d[3] !== b || d[4] !== p || d[5] !== x
            ? ((t = b
                ? (0, i.jsx)(l.m, {
                    className: "self-end",
                    "aria-label": p,
                    disabled: g,
                    loading: y,
                    type: x,
                    onClick: v,
                  })
                : (0, i.jsx)("span", {
                    "aria-hidden": "true",
                    className: "size-token-button-composer-sm shrink-0 self-end",
                  })),
              (d[0] = g),
              (d[1] = y),
              (d[2] = v),
              (d[3] = b),
              (d[4] = p),
              (d[5] = x),
              (d[6] = t))
            : (t = d[6])
          let w = t
          if ("card" === (void 0 === h ? "inline" : h)) {
            let e
            return (
              d[7] !== w || d[8] !== u
                ? ((e = (0, i.jsx)(a.H, { action: w, children: u })), (d[7] = w), (d[8] = u), (d[9] = e))
                : (e = d[9]),
              e
            )
          }
          return (
            d[10] !== c
              ? ((n =
                  null != c ? (0, i.jsx)("div", { className: "flex h-7 shrink-0 items-center", children: c }) : null),
                (d[10] = c),
                (d[11] = n))
              : (n = d[11]),
            d[12] !== u
              ? ((o = (0, i.jsx)("div", { className: "min-w-0 flex-1 self-center", children: u })),
                (d[12] = u),
                (d[13] = o))
              : (o = d[13]),
            d[14] !== w || d[15] !== n || d[16] !== o
              ? ((s = (0, i.jsxs)("div", {
                  className: "flex min-w-0 items-start gap-2.5 px-3 pt-2 pb-3",
                  children: [n, o, w],
                })),
                (d[14] = w),
                (d[15] = n),
                (d[16] = o),
                (d[17] = s))
              : (s = d[17]),
            s
          )
        },
      },
    )
  },
  bdLz(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      a = n("Sm6l"),
      l = n("bVeK")
    n.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            n,
            o,
            s,
            d,
            c,
            u,
            g = (0, r.c)(15)
          g[0] !== e
            ? (({ children: t, loading: n, size: s, type: d, ...o } = e),
              (g[0] = e),
              (g[1] = t),
              (g[2] = n),
              (g[3] = o),
              (g[4] = s),
              (g[5] = d))
            : ((t = g[1]), (n = g[2]), (o = g[3]), (s = g[4]), (d = g[5]))
          let m = void 0 === s ? "composerSm" : s,
            h = void 0 === d ? "submit" : d
          return (
            g[6] !== t || g[7] !== n
              ? ((c = n ? null : (t ?? (0, i.jsx)(l.npO, {}))), (g[6] = t), (g[7] = n), (g[8] = c))
              : (c = g[8]),
            g[9] !== n || g[10] !== o || g[11] !== m || g[12] !== c || g[13] !== h
              ? ((u = (0, i.jsx)(a.$, {
                  ...o,
                  loading: n,
                  radius: "full",
                  size: m,
                  type: h,
                  uniform: !0,
                  children: c,
                })),
                (g[9] = n),
                (g[10] = o),
                (g[11] = m),
                (g[12] = c),
                (g[13] = h),
                (g[14] = u))
              : (u = g[14]),
            u
          )
        },
      },
    )
  },
  q6KF(e, t, n) {
    n.d(t, { h: () => o, H: () => l })
    var i = n("ABep"),
      r = n("QosV"),
      a = n("on57")
    function l(e) {
      let t,
        n,
        a,
        l,
        o = (0, r.c)(10),
        { children: s, action: d, footer: c } = e
      return (
        o[0] !== s
          ? ((t = (0, i.jsx)("div", {
              className: "min-h-token-button-composer-sm min-w-0 flex-1 break-words whitespace-pre-wrap",
              children: s,
            })),
            (o[0] = s),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== d
          ? ((n =
              d ?? (0, i.jsx)("span", { "aria-hidden": "true", className: "size-token-button-composer-sm shrink-0" })),
            (o[2] = d),
            (o[3] = n))
          : (n = o[3]),
        o[4] !== t || o[5] !== n
          ? ((a = (0, i.jsxs)("div", { className: "flex min-w-0 items-start gap-2", children: [t, n] })),
            (o[4] = t),
            (o[5] = n),
            (o[6] = a))
          : (a = o[6]),
        o[7] !== c || o[8] !== a
          ? ((l = (0, i.jsxs)("div", { className: "px-3 pt-1 pb-2 text-sm leading-5", children: [a, c] })),
            (o[7] = c),
            (o[8] = a),
            (o[9] = l))
          : (l = o[9]),
        l
      )
    }
    function o(e) {
      let t,
        n,
        l,
        o,
        s,
        d,
        c,
        u,
        g = (0, r.c)(30),
        {
          authorAvatar: m,
          authorLabel: h,
          body: f,
          className: p,
          footer: x,
          headerAccessory: v,
          headerLayout: y,
          headerSuffix: b,
          surfaceVariant: w,
          onHeaderClick: I,
          onPointerDownCapture: M,
        } = e,
        j = void 0 === y ? "wrap" : y,
        C = void 0 === w ? "default" : w,
        E = null != f,
        S = "inline" !== C && "border border-default",
        T = "default" === C && "bg-primary-soft-alpha"
      g[0] !== p || g[1] !== S || g[2] !== T
        ? ((t = (0, a.A)("group/comment overflow-hidden rounded-lg", S, T, p)),
          (g[0] = p),
          (g[1] = S),
          (g[2] = T),
          (g[3] = t))
        : (t = g[3])
      let _ = "wrap" === j && "flex-wrap",
        A = E || null != b ? "pb-0.5" : "pb-2",
        k = null != I && "cursor-interaction"
      g[4] !== _ || g[5] !== A || g[6] !== k
        ? ((n = (0, a.A)("flex items-center justify-between gap-2 px-3 pt-2 select-none", _, A, k)),
          (g[4] = _),
          (g[5] = A),
          (g[6] = k),
          (g[7] = n))
        : (n = g[7])
      let P = "truncate" === j && "flex-1"
      ;(g[8] !== P
        ? ((l = (0, a.A)("flex min-h-6 min-w-0 items-center gap-2.5", P)), (g[8] = P), (g[9] = l))
        : (l = g[9]),
        g[10] !== h
          ? ((o = (0, i.jsx)("div", {
              className: "flex min-w-0 items-center gap-1.5",
              children: (0, i.jsx)("span", {
                className: "flex min-w-0 items-center truncate text-xs leading-4 text-codex-description",
                children: h,
              }),
            })),
            (g[10] = h),
            (g[11] = o))
          : (o = g[11]),
        g[12] !== m || g[13] !== l || g[14] !== o
          ? ((s = (0, i.jsxs)("div", { className: l, children: [m, o] })),
            (g[12] = m),
            (g[13] = l),
            (g[14] = o),
            (g[15] = s))
          : (s = g[15]),
        g[16] !== v || g[17] !== I || g[18] !== s || g[19] !== n
          ? ((d = (0, i.jsxs)("div", { className: n, role: "presentation", onClick: I, children: [s, v] })),
            (g[16] = v),
            (g[17] = I),
            (g[18] = s),
            (g[19] = n),
            (g[20] = d))
          : (d = g[20]))
      let R = E ? f : null
      return (
        g[21] !== x
          ? ((c =
              null != x
                ? (0, i.jsx)("div", {
                    className: (0, a.A)(
                      "footer-n4iOmf",
                      "flex items-center justify-end px-3 py-2 text-sm leading-5 text-codex-description",
                    ),
                    children: x,
                  })
                : null),
            (g[21] = x),
            (g[22] = c))
          : (c = g[22]),
        g[23] !== b || g[24] !== M || g[25] !== d || g[26] !== R || g[27] !== c || g[28] !== t
          ? ((u = (0, i.jsxs)("div", { className: t, onPointerDownCapture: M, children: [d, b, R, c] })),
            (g[23] = b),
            (g[24] = M),
            (g[25] = d),
            (g[26] = R),
            (g[27] = c),
            (g[28] = t),
            (g[29] = u))
          : (u = g[29]),
        u
      )
    }
  },
  vx3B(e, t, n) {
    n.d(t, { Z: () => ar })
    var i = n("ABep"),
      r = n("QosV"),
      a = n("rICf"),
      l = n("slpy"),
      o = n("on57"),
      s = n("LIss"),
      d = n("zTeN"),
      c = n("zd8w"),
      u = n("v7qY"),
      g = n("Wf1j"),
      m = n("oyxz"),
      h = n("Y5Sy"),
      f = n("I7bK"),
      p = n("QcW8"),
      x = n("wD9O"),
      v = n("ygKd"),
      y = n("Sm6l"),
      b = n("rmk3"),
      w = n("bVeK"),
      I = n("EShr"),
      M = n("T1PX"),
      j = n("VCD3"),
      C = n("AdZa"),
      E = n("WhoN"),
      S = n("yGJW"),
      T = n("nsuH"),
      _ = n("Sd8U"),
      A = n("hZax"),
      k = n("Nwp9"),
      P = n("HgLj"),
      R = n("jDom"),
      N = n("j9wQ"),
      z = n("vv1R"),
      L = n("Oco2"),
      D = n("YeQK"),
      O = n("r21w"),
      B = n("irkb"),
      U = n("Qgfj"),
      F = n("wTVm"),
      $ = n("tl5a"),
      H = n("TSib"),
      K = n("SGsN"),
      V = n("YXXI"),
      G = n("ddzD"),
      q = n("kfGJ"),
      W = n("CBsD"),
      Y = n("xygx"),
      Z = n("NMCC")
    async function X(
      e,
      { hostId: t, image: n, imageAssetResolver: i, onFailure: r, queryClient: a, updateComments: l },
    ) {
      let o = (0, Y.jV)(n.id)
      ;(!(l(Q(e, o)).length > 0) ||
        (await (0, Y.j_)(e, {
          displaySrc: n.previewSrc,
          hostId: t,
          image: n,
          imageAssetResolver: i,
          onFailure: r,
          queryClient: a,
        }))) &&
        (0, Z.CB)(
          {
            composerScope: e,
            absoluteImageFilePath: (0, W.IY)(n.src),
            attachmentId: o,
            attachmentSrc: n.src,
            downloadFileName: (0, Y.gn)(n),
            downloadSrc: n.src,
            hostId: t,
            isCloudComposer: "cloud" === e.get(H.YH),
            queryClient: a,
            src: n.previewSrc,
          },
          l(Q(e, o)),
        )
    }
    function Q(e, t) {
      return e.get(H.JX).find((e) => e.attachmentId === t)?.comments ?? []
    }
    var J = n("GAJV"),
      ee = n("HOLv"),
      et = n("SUhA"),
      en = n("oIzB")
    function ei(e) {
      let t,
        n,
        a,
        l,
        s,
        c,
        u = (0, r.c)(33),
        {
          active: m,
          comments: h,
          conversationId: f,
          image: p,
          imageAssetResolver: x,
          imageRef: v,
          isDraftActive: y,
          isViewTransitioning: w,
          selected: I,
          tool: M,
          onActivate: j,
          onAddToChat: C,
          onDeleteComment: E,
          onDraftActiveChange: S,
          onImageLoad: T,
          onSubmitComment: A,
        } = e,
        k = (0, d.gh)(_.PR),
        P = (0, g.A)()
      u[0] !== f || u[1] !== p.previewSrc || u[2] !== x
        ? ((t = { src: p.previewSrc, conversationId: f, imageAssetResolver: x, shouldLoadFileDataUrl: !1 }),
          (u[0] = f),
          (u[1] = p.previewSrc),
          (u[2] = x),
          (u[3] = t))
        : (t = u[3])
      let { previewSrc: R } = (0, et.D)(t),
        N = R ?? p.previewSrc
      u[4] !== N || u[5] !== p || u[6] !== x || u[7] !== P || u[8] !== C || u[9] !== k
        ? ((n = () =>
            (0, D.getGeneratedImageContextMenuItems)(k, {
              displaySrc: N,
              image: p,
              imageAssetResolver: x,
              intl: P,
              onAddToChat: C,
            })),
          (u[4] = N),
          (u[5] = p),
          (u[6] = x),
          (u[7] = P),
          (u[8] = C),
          (u[9] = k),
          (u[10] = n))
        : (n = u[10])
      let z = w && "z-10"
      return (
        u[11] !== z ? ((a = (0, o.A)("relative max-w-full shrink-0", z)), (u[11] = z), (u[12] = a)) : (a = u[12]),
        u[13] !== m ||
        u[14] !== h ||
        u[15] !== N ||
        u[16] !== p ||
        u[17] !== v ||
        u[18] !== y ||
        u[19] !== j ||
        u[20] !== E ||
        u[21] !== S ||
        u[22] !== T ||
        u[23] !== A ||
        u[24] !== I ||
        u[25] !== M
          ? ((l =
              "comment" === M && (0, G.R)(p).canEdit
                ? (0, i.jsx)("div", {
                    className: (0, o.A)(
                      "relative flex max-w-full shrink-0 items-center rounded-xl bg-surface-secondary/85 outline-none",
                      (y || h.length > 0) && "ring-2 ring-chart-blue",
                    ),
                    onContextMenuCapture: er,
                    children: (0, i.jsx)(en.D, {
                      alt: p.alt,
                      comments: h,
                      imageRef: v,
                      isDraftActive: y,
                      layout: "playground",
                      onDraftActiveChange: S,
                      referrerPolicy: "no-referrer",
                      src: N,
                      onDeleteComment: E,
                      onImageLoad: T,
                      onSubmitComment: A,
                    }),
                  })
                : (0, i.jsxs)("button", {
                    ref: v,
                    type: "button",
                    "aria-label": p.alt,
                    "aria-pressed": "select" === M ? I : m,
                    className: (0, o.A)(
                      "relative block max-w-full shrink-0 cursor-interaction overflow-hidden rounded-xl bg-surface-secondary/85 outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.995]",
                      ("select" === M ? I : m) && "ring-2 ring-ring-accent",
                    ),
                    onClick: () => {
                      j(N)
                    },
                    children: [
                      (0, i.jsx)("img", {
                        ref: (e) => {
                          e?.complete && e.naturalWidth > 0 && T?.(e)
                        },
                        className: "block h-auto !max-h-[292px] w-auto max-w-full object-contain",
                        alt: "",
                        decoding: "async",
                        draggable: !1,
                        referrerPolicy: "no-referrer",
                        src: N,
                        onLoad: (e) => T?.(e.currentTarget),
                      }),
                      "select" === M && I
                        ? (0, i.jsx)("span", {
                            className:
                              "absolute top-2 right-2 rounded-full bg-(--checkbox-checked-mark-color) text-(color:--checkbox-checked-background-color) shadow-sm",
                            children: (0, i.jsx)(ee.I, { "aria-hidden": !1, asset: J.b }),
                          })
                        : null,
                    ],
                  })),
            (u[13] = m),
            (u[14] = h),
            (u[15] = N),
            (u[16] = p),
            (u[17] = v),
            (u[18] = y),
            (u[19] = j),
            (u[20] = E),
            (u[21] = S),
            (u[22] = T),
            (u[23] = A),
            (u[24] = I),
            (u[25] = M),
            (u[26] = l))
          : (l = u[26]),
        u[27] !== a || u[28] !== l
          ? ((s = (0, i.jsx)("div", { className: a, children: l })), (u[27] = a), (u[28] = l), (u[29] = s))
          : (s = u[29]),
        u[30] !== n || u[31] !== s
          ? ((c = (0, i.jsx)(b.t, { getItems: n, children: s })), (u[30] = n), (u[31] = s), (u[32] = c))
          : (c = u[32]),
        c
      )
    }
    function er(e) {
      e.target instanceof HTMLElement &&
        (e.target.isContentEditable || null != e.target.closest("input, textarea, [contenteditable='true']")) &&
        e.stopPropagation()
    }
    var ea = n("OZIO"),
      el = (e) =>
        (0, i.jsx)("svg", {
          width: 13,
          height: 13,
          viewBox: "0 0 13 13",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M0 2.44444C0 1.09442 1.09442 0 2.44444 0H3.33333C3.70152 0 4 0.298477 4 0.666667C4 1.03486 3.70152 1.33333 3.33333 1.33333H2.44444C1.83079 1.33333 1.33333 1.83079 1.33333 2.44444V3.33333C1.33333 3.70152 1.03486 4 0.666667 4C0.298477 4 0 3.70152 0 3.33333V2.44444ZM8 0.666667C8 0.298477 8.29848 0 8.66667 0H9.55556C10.9056 0 12 1.09442 12 2.44444V3.33333C12 3.70152 11.7015 4 11.3333 4C10.9651 4 10.6667 3.70152 10.6667 3.33333V2.44444C10.6667 1.83079 10.1692 1.33333 9.55556 1.33333H8.66667C8.29848 1.33333 8 1.03486 8 0.666667ZM7.09363 7.09256L8.43971 10.9065L9.0609 9.57534C9.16686 9.34829 9.34937 9.16578 9.57642 9.05983L10.9075 8.43864L7.09363 7.09256ZM5.65074 7.01053C5.35243 6.16531 6.16639 5.35136 7.01161 5.64967L11.9666 7.39849C12.8673 7.71639 12.9282 8.96701 12.0627 9.37094L10.2281 10.2271L9.37202 12.0616C8.96808 12.9272 7.71747 12.8663 7.39956 11.9655L5.65074 7.01053ZM0.666667 8C1.03486 8 1.33333 8.29848 1.33333 8.66667V9.55556C1.33333 10.1692 1.83079 10.6667 2.44444 10.6667H3.33333C3.70152 10.6667 4 10.9651 4 11.3333C4 11.7015 3.70152 12 3.33333 12H2.44444C1.09442 12 0 10.9056 0 9.55556V8.66667C0 8.29848 0.298477 8 0.666667 8Z",
            fill: "currentColor",
          }),
        }),
      eo = n("pxT8"),
      es = n("I0AH")
    function ed(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        c,
        u,
        h,
        f,
        p,
        x,
        v,
        b,
        w = (0, r.c)(50),
        { activeTool: I, commentCount: M, isUnifiedViewerEnabled: j, onActiveToolChange: C } = e,
        E = void 0 !== j && j,
        S = (0, g.A)(),
        T = E ? "ghostSecondary" : "ghostActive",
        _ = E ? "imageToolbar" : "composerSm",
        A = E ? "large" : "default"
      w[0] !== T || w[1] !== _ || w[2] !== A
        ? ((t = { color: T, size: _, radius: A }), (w[0] = T), (w[1] = _), (w[2] = A), (w[3] = t))
        : (t = w[3])
      let k = t,
        P = E ? "[@container_(max-width:450px)]:sr-only" : "text-base"
      w[4] !== S
        ? ((n = S.formatMessage({
            id: "codex.localConversation.imagePlayground.tools",
            defaultMessage: "Image playground tools",
            description: "Accessible label for the image playground toolbar.",
          })),
          (w[4] = S),
          (w[5] = n))
        : (n = w[5])
      let R = n
      if ("comment" === I) {
        let e, t, n
        ;(w[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(m.A, {
              id: "codex.localConversation.imagePlayground.commentHelper",
              defaultMessage: "Add comments on multiple images to batch edit them",
              description: "Helper text shown in canvas comment mode before the user has added comments to any images.",
            })),
            (w[6] = e))
          : (e = w[6]),
          w[7] !== C
            ? ((t = () => {
                C("navigate")
              }),
              (w[7] = C),
              (w[8] = t))
            : (t = w[8]))
        let r = E ? "embedded" : "compact"
        return (
          w[9] !== M || w[10] !== t || w[11] !== r || w[12] !== R
            ? ((n = (0, i.jsx)(eo.G, { ariaLabel: R, commentCount: M, emptyMessage: e, onCancel: t, variant: r })),
              (w[9] = M),
              (w[10] = t),
              (w[11] = r),
              (w[12] = R),
              (w[13] = n))
            : (n = w[13]),
          n
        )
      }
      let N = E ? "embedded" : "compact"
      ;(w[14] !== S || w[15] !== E
        ? ((a = E ? S.formatMessage(ec.comment) : void 0), (w[14] = S), (w[15] = E), (w[16] = a))
        : (a = w[16]),
        w[17] !== C
          ? ((l = () => {
              C("comment")
            }),
            (w[17] = C),
            (w[18] = l))
          : (l = w[18]),
        w[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(ee.I, { "aria-hidden": !1, asset: ea.s })), (w[19] = o))
          : (o = w[19]),
        w[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(m.A, { ...ec.comment })), (w[20] = s))
          : (s = w[20]),
        w[21] !== P ? ((d = (0, i.jsx)("span", { className: P, children: s })), (w[21] = P), (w[22] = d)) : (d = w[22]),
        w[23] !== k || w[24] !== d || w[25] !== a || w[26] !== l
          ? ((c = (0, i.jsxs)(y.$, { ...k, title: a, onClick: l, children: [o, d] })),
            (w[23] = k),
            (w[24] = d),
            (w[25] = a),
            (w[26] = l),
            (w[27] = c))
          : (c = w[27]))
      let z = "select" === I,
        L = "select" === I ? "secondary" : k.color
      return (
        w[28] !== S || w[29] !== E
          ? ((u = E ? S.formatMessage(ec.multiSelect) : void 0), (w[28] = S), (w[29] = E), (w[30] = u))
          : (u = w[30]),
        w[31] !== I || w[32] !== C
          ? ((h = () => {
              C("select" === I ? "navigate" : "select")
            }),
            (w[31] = I),
            (w[32] = C),
            (w[33] = h))
          : (h = w[33]),
        w[34] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, i.jsx)(el, {})), (w[34] = f)) : (f = w[34]),
        w[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(m.A, { ...ec.multiSelect })), (w[35] = p))
          : (p = w[35]),
        w[36] !== P ? ((x = (0, i.jsx)("span", { className: P, children: p })), (w[36] = P), (w[37] = x)) : (x = w[37]),
        w[38] !== k || w[39] !== z || w[40] !== L || w[41] !== u || w[42] !== h || w[43] !== x
          ? ((v = (0, i.jsxs)(y.$, { ...k, "aria-pressed": z, color: L, title: u, onClick: h, children: [f, x] })),
            (w[38] = k),
            (w[39] = z),
            (w[40] = L),
            (w[41] = u),
            (w[42] = h),
            (w[43] = x),
            (w[44] = v))
          : (v = w[44]),
        w[45] !== c || w[46] !== v || w[47] !== N || w[48] !== R
          ? ((b = (0, i.jsxs)(es.b, { ariaLabel: R, variant: N, children: [c, v] })),
            (w[45] = c),
            (w[46] = v),
            (w[47] = N),
            (w[48] = R),
            (w[49] = b))
          : (b = w[49]),
        b
      )
    }
    let ec = (0, U.YK)({
      comment: {
        id: "codex.localConversation.imagePlayground.commentAction",
        defaultMessage: "Comment",
        description: "Toolbar action that enters canvas image comment mode.",
      },
      multiSelect: {
        id: "codex.localConversation.imagePlayground.multiSelectAction",
        defaultMessage: "Multi-select",
        description: "Toolbar action that enters canvas image multi-select mode.",
      },
    })
    var eu = n("O4Le"),
      eg = n("m5LN")
    function em(e) {
      let t,
        n,
        a,
        l,
        s,
        d,
        c,
        u,
        g,
        m = (0, r.c)(29),
        { children: h, onZoomPercentChange: f, renderHeader: p, toolbar: x, zoomPercent: v } = e
      m[0] !== f || m[1] !== v
        ? ((t = { onZoomPercentChange: f, zoomPercent: v }), (m[0] = f), (m[1] = v), (m[2] = t))
        : (t = m[2])
      let {
        zoomTargetRef: y,
        handleClickCapture: b,
        handlePointerMoveCapture: w,
        setScrollContainerRef: I,
        setZoomAtViewportCenter: M,
      } = (0, eg.V)(t)
      m[3] !== p || m[4] !== M || m[5] !== v
        ? ((n =
            null != p
              ? p((0, i.jsx)(N.HD, { zoomOptions: [25, 50, 100, 150, 200], zoomPercent: v, onZoomPercentChange: M }))
              : (0, i.jsx)("div", {
                  className: "absolute top-2 right-2 z-40 flex h-8 items-center",
                  children: (0, i.jsx)(eu.h, { zoomPercent: v, onZoomPercentChange: M }),
                })),
          (m[3] = p),
          (m[4] = M),
          (m[5] = v),
          (m[6] = n))
        : (n = m[6])
      let j = null != p ? "relative flex min-h-0 flex-1 flex-col" : "contents",
        C =
          null != p
            ? "scroll-pt-6 px-3 py-6"
            : "scroll-pt-14 ps-3 pe-16 pt-[max(calc(var(--spacing)*14),var(--right-panel-composer-overlay-top-reserve,0px))] pb-[calc(var(--right-panel-composer-overlay-reserve,0px)+var(--spacing)*6)]"
      m[7] !== C ? ((a = (0, o.A)("h-full min-h-0 overflow-auto", C)), (m[7] = C), (m[8] = a)) : (a = m[8])
      let E = v / 100
      return (
        m[9] !== E ? ((l = { zoom: E }), (m[9] = E), (m[10] = l)) : (l = m[10]),
        m[11] !== h || m[12] !== l || m[13] !== y
          ? ((s = (0, i.jsx)("div", {
              ref: y,
              className: "flex min-w-max flex-col items-start gap-6",
              style: l,
              children: h,
            })),
            (m[11] = h),
            (m[12] = l),
            (m[13] = y),
            (m[14] = s))
          : (s = m[14]),
        m[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)("div", { className: "h-1/2" })), (m[15] = d))
          : (d = m[15]),
        m[16] !== b || m[17] !== w || m[18] !== I || m[19] !== a || m[20] !== s
          ? ((c = (0, i.jsxs)("div", {
              ref: I,
              "data-generated-image-playground-scroll": !0,
              className: a,
              onClickCapture: b,
              onPointerMoveCapture: w,
              children: [s, d],
            })),
            (m[16] = b),
            (m[17] = w),
            (m[18] = I),
            (m[19] = a),
            (m[20] = s),
            (m[21] = c))
          : (c = m[21]),
        m[22] !== c || m[23] !== j || m[24] !== x
          ? ((u = (0, i.jsxs)("div", { className: j, children: [x, c] })),
            (m[22] = c),
            (m[23] = j),
            (m[24] = x),
            (m[25] = u))
          : (u = m[25]),
        m[26] !== u || m[27] !== n
          ? ((g = (0, i.jsxs)(i.Fragment, { children: [n, u] })), (m[26] = u), (m[27] = n), (m[28] = g))
          : (g = m[28]),
        g
      )
    }
    var eh = n("YEQY"),
      ef = n("ghCJ")
    let ep = []
    function ex(e) {
      let t,
        n,
        a,
        l,
        s,
        u,
        m,
        h,
        f,
        p,
        x,
        v,
        y,
        b,
        w,
        I,
        M,
        j,
        C,
        E,
        S,
        T,
        A,
        k,
        N,
        z,
        D = (0, r.c)(144),
        {
          activeImageId: O,
          conversationId: U,
          focusedImageRef: W,
          groups: Z,
          imageAssetResolver: Q,
          initialTool: J,
          isViewTransitioning: ee,
          onGeneratedImageSelection: et,
          onImageLoad: en,
          onSelectImage: ei,
          onZoomPercentChange: er,
          renderHeader: ea,
          zoomPercent: el,
        } = e,
        eo = (0, d.gh)(_.PR),
        es = (0, B.jE)(),
        ec = (0, g.A)(),
        eu = null != ea,
        [eg, ef] = (0, c.useState)(null)
      D[0] !== U || D[1] !== ec || D[2] !== eo
        ? ((t = { scope: eo, conversationId: U, intl: ec }), (D[0] = U), (D[1] = ec), (D[2] = eo), (D[3] = t))
        : (t = D[3])
      let { notifyImageInputUnsupported: ep, supportsImageInputs: ex } = (0, V.I)(t),
        ew = (0, d._U)($.Qk, U) ?? q.fI,
        eI = (0, d.Ul)(H.kV),
        eM = (0, d.Ul)(H.gy),
        ej = (0, d.Ul)(H.JX),
        [eC, eE] = (0, c.useState)(void 0 === J ? "navigate" : J),
        [eS, eT] = (0, c.useState)(null),
        e_ = (0, c.useRef)(null),
        [eA, ek] = (0, c.useState)(eI)
      ;(eA !== eI && (ek(eI), eE("navigate"), eT(null)),
        D[4] !== eM ? ((n = new Set(eM.map(ey))), (D[4] = eM), (D[5] = n)) : (n = D[5]))
      let eP = n
      D[6] !== ej ? ((a = new Map(ej.map(ev))), (D[6] = ej), (D[7] = a)) : (a = D[7])
      let eR = a
      if (D[8] !== O || D[9] !== Z) {
        let e
        for (let e of ((l = new Set()), (s = []), Z))
          for (let t of e.images) t.loading || (s.push(t), l.add((0, Y.jV)(t.id)))
        ;(D[13] !== O ? ((e = (e) => e.id === O), (D[13] = O), (D[14] = e)) : (e = D[14]),
          (u = s.find(e)),
          (D[8] = O),
          (D[9] = Z),
          (D[10] = l),
          (D[11] = s),
          (D[12] = u))
      } else ((l = D[10]), (s = D[11]), (u = D[12]))
      let eN = u
      if (D[15] !== ej || D[16] !== l) {
        let e
        ;(D[18] !== l
          ? ((e = (e, t) => (l.has(t.attachmentId) ? e + t.comments.length : e)), (D[18] = l), (D[19] = e))
          : (e = D[19]),
          (m = ej.reduce(e, 0)),
          (D[15] = ej),
          (D[16] = l),
          (D[17] = m))
      } else m = D[17]
      let ez = m
      D[20] !== ec || D[21] !== eo
        ? ((h = () => {
            eo.get(K.Id).danger(
              ec.formatMessage({
                id: "codex.localConversation.imagePlayground.commentFailed",
                defaultMessage: "Could not add image comment",
                description: "Error shown when an image comment could not be added in the image playground.",
              }),
              { errorAnalytics: { toastId: "codex.localConversation.imagePlayground.commentFailed" } },
            )
          }),
          (D[20] = ec),
          (D[21] = eo),
          (D[22] = h))
        : (h = D[22])
      let eL = (0, R.K)(h)
      D[23] !== ec || D[24] !== eo
        ? ((f = () => {
            eo.get(K.Id).danger(
              ec.formatMessage({
                id: "codex.localConversation.imagePlayground.selectFailed",
                defaultMessage: "Could not select image",
                description: "Error shown when a generated image could not be added to the composer.",
              }),
              { errorAnalytics: { toastId: "codex.localConversation.imagePlayground.selectFailed" } },
            )
          }),
          (D[23] = ec),
          (D[24] = eo),
          (D[25] = f))
        : (f = D[25])
      let eD = (0, R.K)(f)
      D[26] !== ep || D[27] !== et || D[28] !== ex
        ? ((p = () => (ex ? (et?.(), !0) : (ep(), !1))), (D[26] = ep), (D[27] = et), (D[28] = ex), (D[29] = p))
        : (p = D[29])
      let eO = (0, R.K)(p)
      D[30] !== ew || D[31] !== Q || D[32] !== et || D[33] !== es || D[34] !== eo || D[35] !== eD
        ? ((x = (e, t, n) => {
            ;(et?.(),
              (0, Y.j_)(eo, {
                displaySrc: t,
                hostId: ew,
                image: e,
                imageAssetResolver: Q,
                onFailure: eD,
                queryClient: es,
                selectionMode: n,
              }))
          }),
          (D[30] = ew),
          (D[31] = Q),
          (D[32] = et),
          (D[33] = es),
          (D[34] = eo),
          (D[35] = eD),
          (D[36] = x))
        : (x = D[36])
      let eB = (0, R.K)(x)
      D[37] !== eN || D[38] !== eC || D[39] !== eB || D[40] !== eo || D[41] !== ex
        ? ((v = (e) => {
            if (null != e && "navigate" === eC && ex && null != eN) {
              if (!(0, G.R)(eN).canSelect) {
                ;((0, Y.i3)(eo), (e_.current = null))
                return
              }
              eB(eN, eN.previewSrc, "single")
            }
          }),
          (D[37] = eN),
          (D[38] = eC),
          (D[39] = eB),
          (D[40] = eo),
          (D[41] = ex),
          (D[42] = v))
        : (v = D[42])
      let eU = (0, R.K)(v),
        eF = ex ? eU : void 0
      D[43] !== W || D[44] !== eF ? ((y = (0, P.P)(W, eF)), (D[43] = W), (D[44] = eF), (D[45] = y)) : (y = D[45])
      let e$ = y
      D[46] !== eC || D[47] !== eB || D[48] !== ep || D[49] !== ei || D[50] !== eo || D[51] !== ex
        ? ((b = (e, t, n) => {
            if (!(0, G.R)(e).canSelect) {
              ;((0, Y.i3)(eo), (e_.current = null), ei(e))
              return
            }
            if ("navigate" === eC) {
              ;(ei(e), ex && eB(e, n, "single"))
              return
            }
            if (t) {
              ;((0, Y.e6)(eo, e.id), e_.current?.image.id === e.id && (e_.current = null))
              return
            }
            ex ? ((e_.current = { displaySrc: n, image: e }), eB(e, n, "multiple")) : ep()
          }),
          (D[46] = eC),
          (D[47] = eB),
          (D[48] = ep),
          (D[49] = ei),
          (D[50] = eo),
          (D[51] = ex),
          (D[52] = b))
        : (b = D[52])
      let eH = (0, R.K)(b)
      D[53] !== ew || D[54] !== Q || D[55] !== es || D[56] !== eo || D[57] !== eL
        ? ((w = (e, t) => {
            X(eo, {
              hostId: ew,
              image: e,
              imageAssetResolver: Q,
              onFailure: eL,
              queryClient: es,
              updateComments: (e) => e.filter((e) => e.id !== t),
            })
          }),
          (D[53] = ew),
          (D[54] = Q),
          (D[55] = es),
          (D[56] = eo),
          (D[57] = eL),
          (D[58] = w))
        : (w = D[58])
      let eK = (0, R.K)(w)
      D[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = (e, t) => {
            eT(t ? e : null)
          }),
          (D[59] = I))
        : (I = D[59])
      let eV = (0, R.K)(I)
      D[60] !== ew || D[61] !== Q || D[62] !== ep || D[63] !== es || D[64] !== eo || D[65] !== eL || D[66] !== ex
        ? ((M = (e, t) => {
            if (!ex) return void ep()
            let n = { ...t, id: t.id ?? (0, F.A)() }
            X(eo, {
              hostId: ew,
              image: e,
              imageAssetResolver: Q,
              onFailure: eL,
              queryClient: es,
              updateComments: (e) => (null == t.id ? [...e, n] : e.map((e) => (e.id === t.id ? n : e))),
            })
          }),
          (D[60] = ew),
          (D[61] = Q),
          (D[62] = ep),
          (D[63] = es),
          (D[64] = eo),
          (D[65] = eL),
          (D[66] = ex),
          (D[67] = M))
        : (M = D[67])
      let eG = (0, R.K)(M)
      ;(D[68] !== O ||
      D[69] !== eC ||
      D[70] !== eB ||
      D[71] !== ei ||
      D[72] !== l ||
      D[73] !== s ||
      D[74] !== eo ||
      D[75] !== ex
        ? ((j = (e) => {
            if (
              (e !== eC && "navigate" !== e && (0, L.jf)(eo, { imageSource: "generated", mode: e, view: "canvas" }),
              "select" !== eC && "select" === e && (e_.current = null),
              "select" === eC && "navigate" === e)
            ) {
              let e = e_.current,
                t = e,
                n = eo.get(H.gy)
              if (
                (null == e ||
                  (n.some((t) => t.id === (0, Y.jV)(e.image.id)) &&
                    s.some((t) => t.id === e.image.id && t.src === e.image.src)) ||
                  (t = null),
                null == t)
              ) {
                let e
                for (let t of n) l.has(t.id) && (e = t.id)
                let i = null == e ? s.find((e) => e.id === O) : s.find((t) => (0, Y.jV)(t.id) === e)
                null != i && (t = { displaySrc: i.previewSrc, image: i })
              }
              ;(null != t && (0, G.R)(t.image).canSelect && ex && (ei(t.image), eB(t.image, t.displaySrc, "single")),
                (e_.current = null))
            }
            ;(eE(e), "comment" === eC && "comment" !== e && (eT(null), (0, Y.i3)(eo)))
          }),
          (D[68] = O),
          (D[69] = eC),
          (D[70] = eB),
          (D[71] = ei),
          (D[72] = l),
          (D[73] = s),
          (D[74] = eo),
          (D[75] = ex),
          (D[76] = j))
        : (j = D[76]),
        D[77] !== eC || D[78] !== ez || D[79] !== eu || D[80] !== j
          ? ((C = (0, i.jsx)(ed, {
              isUnifiedViewerEnabled: eu,
              activeTool: eC,
              commentCount: ez,
              onActiveToolChange: j,
            })),
            (D[77] = eC),
            (D[78] = ez),
            (D[79] = eu),
            (D[80] = j),
            (D[81] = C))
          : (C = D[81]))
      let eq = C,
        eW = eu ? ef : void 0,
        eY =
          eu &&
          "flex flex-col pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]"
      if (
        (D[82] !== eY
          ? ((E = (0, o.A)("@container relative h-full min-h-0 bg-surface-secondary", eY)), (D[82] = eY), (D[83] = E))
          : (E = D[83]),
        D[84] !== eN || D[85] !== eu || D[86] !== ee || D[87] !== eq
          ? ((S =
              !eu && (0, G.R)(eN).canEdit
                ? (0, i.jsx)("div", {
                    className:
                      "pointer-events-none absolute top-2 right-0 left-0 z-40 flex justify-center px-4 [@container_(max-width:630px)]:hidden",
                    children: (0, i.jsx)("div", { className: ee ? void 0 : "pointer-events-auto", children: eq }),
                  })
                : null),
            (D[84] = eN),
            (D[85] = eu),
            (D[86] = ee),
            (D[87] = eq),
            (D[88] = S))
          : (S = D[88]),
        D[89] !== eC || D[90] !== ea
          ? ((T = null == ea ? void 0 : (e) => ea({ zoomControl: e, navigationDisabled: "comment" === eC })),
            (D[89] = eC),
            (D[90] = ea),
            (D[91] = T))
          : (T = D[91]),
        D[92] !== eN || D[93] !== eg || D[94] !== eu || D[95] !== ee || D[96] !== eq
          ? ((A =
              eu && (0, G.R)(eN).canEdit
                ? (0, i.jsx)("div", {
                    className: "contents [@container_(max-width:630px)]:hidden",
                    inert: ee,
                    children: (0, i.jsx)(eh.x, { dragBoundary: eg, children: eq }),
                  })
                : null),
            (D[92] = eN),
            (D[93] = eg),
            (D[94] = eu),
            (D[95] = ee),
            (D[96] = eq),
            (D[97] = A))
          : (A = D[97]),
        D[98] !== eS ||
          D[99] !== O ||
          D[100] !== eC ||
          D[101] !== eP ||
          D[102] !== U ||
          D[103] !== W ||
          D[104] !== Z ||
          D[105] !== eO ||
          D[106] !== eK ||
          D[107] !== eV ||
          D[108] !== eH ||
          D[109] !== eG ||
          D[110] !== Q ||
          D[111] !== eR ||
          D[112] !== ee ||
          D[113] !== en ||
          D[114] !== e$)
      ) {
        let e
        ;(D[116] !== eS ||
        D[117] !== O ||
        D[118] !== eC ||
        D[119] !== eP ||
        D[120] !== U ||
        D[121] !== W ||
        D[122] !== eO ||
        D[123] !== eK ||
        D[124] !== eV ||
        D[125] !== eH ||
        D[126] !== eG ||
        D[127] !== Q ||
        D[128] !== eR ||
        D[129] !== ee ||
        D[130] !== en ||
        D[131] !== e$
          ? ((e = (e) =>
              (0, i.jsx)(
                eb,
                {
                  activeDraftImageId: eS,
                  activeImageId: O,
                  attachmentIds: eP,
                  conversationId: U,
                  focusedImageRef: e$,
                  group: e,
                  imageAssetResolver: Q,
                  imageCommentsByAttachmentId: eR,
                  isViewTransitioning: ee,
                  loadingImageRef: W,
                  tool: eC,
                  onAddToChat: eO,
                  onDeleteComment: eK,
                  onDraftActiveChange: eV,
                  onImageActivate: eH,
                  onImageLoad: en,
                  onSubmitComment: eG,
                },
                e.id,
              )),
            (D[116] = eS),
            (D[117] = O),
            (D[118] = eC),
            (D[119] = eP),
            (D[120] = U),
            (D[121] = W),
            (D[122] = eO),
            (D[123] = eK),
            (D[124] = eV),
            (D[125] = eH),
            (D[126] = eG),
            (D[127] = Q),
            (D[128] = eR),
            (D[129] = ee),
            (D[130] = en),
            (D[131] = e$),
            (D[132] = e))
          : (e = D[132]),
          (k = Z.map(e)),
          (D[98] = eS),
          (D[99] = O),
          (D[100] = eC),
          (D[101] = eP),
          (D[102] = U),
          (D[103] = W),
          (D[104] = Z),
          (D[105] = eO),
          (D[106] = eK),
          (D[107] = eV),
          (D[108] = eH),
          (D[109] = eG),
          (D[110] = Q),
          (D[111] = eR),
          (D[112] = ee),
          (D[113] = en),
          (D[114] = e$),
          (D[115] = k))
      } else k = D[115]
      return (
        D[133] !== er || D[134] !== T || D[135] !== A || D[136] !== k || D[137] !== el
          ? ((N = (0, i.jsx)(em, {
              renderHeader: T,
              toolbar: A,
              onZoomPercentChange: er,
              zoomPercent: el,
              children: k,
            })),
            (D[133] = er),
            (D[134] = T),
            (D[135] = A),
            (D[136] = k),
            (D[137] = el),
            (D[138] = N))
          : (N = D[138]),
        D[139] !== eW || D[140] !== E || D[141] !== S || D[142] !== N
          ? ((z = (0, i.jsxs)("div", { ref: eW, className: E, children: [S, N] })),
            (D[139] = eW),
            (D[140] = E),
            (D[141] = S),
            (D[142] = N),
            (D[143] = z))
          : (z = D[143]),
        z
      )
    }
    function ev(e) {
      return [e.attachmentId, e.comments]
    }
    function ey(e) {
      return e.id
    }
    let eb = (0, c.memo)(function (e) {
      let t,
        n,
        a,
        l,
        d,
        c,
        u,
        g = (0, r.c)(51),
        {
          activeDraftImageId: m,
          activeImageId: h,
          attachmentIds: f,
          conversationId: p,
          focusedImageRef: x,
          group: v,
          imageAssetResolver: y,
          imageCommentsByAttachmentId: b,
          isViewTransitioning: w,
          loadingImageRef: I,
          tool: M,
          onAddToChat: j,
          onDeleteComment: C,
          onDraftActiveChange: E,
          onImageActivate: S,
          onImageLoad: T,
          onSubmitComment: _,
        } = e,
        A = !w || v.images.some((e) => e.id === h) ? 1 : 0
      ;(g[0] !== A ? ((t = { opacity: A }), (g[0] = A), (g[1] = t)) : (t = g[1]),
        g[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { opacity: 1 }), (g[2] = n)) : (n = g[2]))
      let k = 0.24 * !!w
      if (
        (g[3] !== k ? ((a = { duration: 0.14, delay: k }), (g[3] = k), (g[4] = a)) : (a = g[4]),
        g[5] !== v.images || g[6] !== v.turnStartedAtMs
          ? ((l = (0, o.A)(
              "relative flex max-w-full gap-2",
              (null != v.turnStartedAtMs || v.images.some(ew)) && "pt-6",
            )),
            (g[5] = v.images),
            (g[6] = v.turnStartedAtMs),
            (g[7] = l))
          : (l = g[7]),
        g[8] !== v.turnStartedAtMs
          ? ((d =
              null == v.turnStartedAtMs
                ? null
                : (0, i.jsx)("time", {
                    className: "absolute top-0 text-xs text-tertiary select-none",
                    dateTime: new Date(v.turnStartedAtMs).toISOString(),
                    children: (0, i.jsx)(U.XU, { value: v.turnStartedAtMs, dateStyle: "medium", timeStyle: "short" }),
                  })),
            (g[8] = v.turnStartedAtMs),
            (g[9] = d))
          : (d = g[9]),
        g[10] !== m ||
          g[11] !== h ||
          g[12] !== f ||
          g[13] !== p ||
          g[14] !== x ||
          g[15] !== v.images ||
          g[16] !== y ||
          g[17] !== b ||
          g[18] !== w ||
          g[19] !== I ||
          g[20] !== j ||
          g[21] !== C ||
          g[22] !== E ||
          g[23] !== S ||
          g[24] !== T ||
          g[25] !== _ ||
          g[26] !== M)
      ) {
        let e
        ;(g[28] !== m ||
        g[29] !== h ||
        g[30] !== f ||
        g[31] !== p ||
        g[32] !== x ||
        g[33] !== y ||
        g[34] !== b ||
        g[35] !== w ||
        g[36] !== I ||
        g[37] !== j ||
        g[38] !== C ||
        g[39] !== E ||
        g[40] !== S ||
        g[41] !== T ||
        g[42] !== _ ||
        g[43] !== M
          ? ((e = (e) => {
              if (e.loading)
                return (0, i.jsx)(
                  "div",
                  {
                    ref: e.id === h ? I : void 0,
                    className: "w-72 max-w-full shrink-0",
                    children: (0, i.jsx)(ef.o, { presentation: "playground" }),
                  },
                  e.id,
                )
              let t = (0, Y.jV)(e.id),
                n = e.id === h,
                r = f.has(t),
                a = b.get(t) ?? ep
              return (0, i.jsx)(
                ei,
                {
                  active: n,
                  comments: a,
                  conversationId: p,
                  image: e,
                  imageAssetResolver: y,
                  imageRef: n ? x : void 0,
                  isDraftActive: m === e.id,
                  isViewTransitioning: n && w,
                  selected: r,
                  tool: M,
                  onActivate: (t) => {
                    S(e, r, t)
                  },
                  onAddToChat: j,
                  onDeleteComment: (t) => {
                    C(e, t)
                  },
                  onDraftActiveChange: (t) => {
                    E(e.id, t)
                  },
                  onImageLoad: n ? T : void 0,
                  onSubmitComment: (t) => {
                    _(e, t)
                  },
                },
                e.id,
              )
            }),
            (g[28] = m),
            (g[29] = h),
            (g[30] = f),
            (g[31] = p),
            (g[32] = x),
            (g[33] = y),
            (g[34] = b),
            (g[35] = w),
            (g[36] = I),
            (g[37] = j),
            (g[38] = C),
            (g[39] = E),
            (g[40] = S),
            (g[41] = T),
            (g[42] = _),
            (g[43] = M),
            (g[44] = e))
          : (e = g[44]),
          (c = v.images.map(e)),
          (g[10] = m),
          (g[11] = h),
          (g[12] = f),
          (g[13] = p),
          (g[14] = x),
          (g[15] = v.images),
          (g[16] = y),
          (g[17] = b),
          (g[18] = w),
          (g[19] = I),
          (g[20] = j),
          (g[21] = C),
          (g[22] = E),
          (g[23] = S),
          (g[24] = T),
          (g[25] = _),
          (g[26] = M),
          (g[27] = c))
      } else c = g[27]
      return (
        g[45] !== t || g[46] !== a || g[47] !== l || g[48] !== d || g[49] !== c
          ? ((u = (0, i.jsxs)(s.P.div, { initial: t, animate: n, transition: a, className: l, children: [d, c] })),
            (g[45] = t),
            (g[46] = a),
            (g[47] = l),
            (g[48] = d),
            (g[49] = c),
            (g[50] = u))
          : (u = g[50]),
        u
      )
    })
    function ew(e) {
      return e.loading
    }
    var eI = n("vc10"),
      eM = n("I4mY"),
      ej = n("OWtl"),
      eC = n("CFOe")
    function eE(e) {
      let t,
        n,
        l,
        s,
        c,
        u,
        h,
        f,
        p,
        x,
        v,
        y,
        b,
        w,
        M = (0, r.c)(39),
        { placement: j, shouldShowCoachmark: C, onDismissCoachmark: E, view: T, onViewChange: _ } = e,
        A = (0, d.gh)(ej.u),
        k = (0, g.A)()
      ;(M[0] !== k
        ? ((t = k.formatMessage({
            id: "codex.localConversation.imagePlayground.view",
            defaultMessage: "Image view",
            description: "Accessible label for the image view toggle.",
          })),
          (M[0] = k),
          (M[1] = t))
        : (t = M[1]),
        M[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(ee.I, { "aria-hidden": !1, asset: eI.i })), (M[2] = n))
          : (n = M[2]),
        M[3] !== k
          ? ((l = k.formatMessage({
              id: "codex.localConversation.imagePlayground.singleView",
              defaultMessage: "Focused view",
              description: "Accessible label for the focused image view.",
            })),
            (M[3] = k),
            (M[4] = l))
          : (l = M[4]),
        M[5] !== l ? ((s = { id: "single", label: n, ariaLabel: l }), (M[5] = l), (M[6] = s)) : (s = M[6]),
        M[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(ee.I, { "aria-hidden": !1, asset: eM.p })), (M[7] = c))
          : (c = M[7]),
        M[8] !== k
          ? ((u = k.formatMessage({
              id: "codex.localConversation.imagePlayground.playgroundView",
              defaultMessage: "Canvas view",
              description: "Accessible label for the image canvas view.",
            })),
            (M[8] = k),
            (M[9] = u))
          : (u = M[9]),
        M[10] !== u ? ((h = { id: "playground", label: c, ariaLabel: u }), (M[10] = u), (M[11] = h)) : (h = M[11]),
        M[12] !== s || M[13] !== h ? ((f = [s, h]), (M[12] = s), (M[13] = h), (M[14] = f)) : (f = M[14]),
        M[15] !== E || M[16] !== _ || M[17] !== A || M[18] !== C || M[19] !== T
          ? ((p = (e) => {
              ;(C &&
                "single" === T &&
                "playground" === e &&
                (0, S.yy)(A, a.CodexGeneratedImageCanvasViewCoachmarkClicked, {}),
                E(),
                _(e))
            }),
            (M[15] = E),
            (M[16] = _),
            (M[17] = A),
            (M[18] = C),
            (M[19] = T),
            (M[20] = p))
          : (p = M[20]),
        M[21] !== p || M[22] !== f || M[23] !== T
          ? ((x = (0, i.jsx)(I.T, { uniform: !0, variant: "viewer", options: f, selectedId: T, onSelect: p })),
            (M[21] = p),
            (M[22] = f),
            (M[23] = T),
            (M[24] = x))
          : (x = M[24]),
        M[25] !== x || M[26] !== t
          ? ((v = (0, i.jsx)(N.J5, { label: t, children: x })), (M[25] = x), (M[26] = t), (M[27] = v))
          : (v = M[27]))
      let P = v,
        R = "overlay" === (void 0 === j ? "overlay" : j) && "absolute top-2 left-2 z-40"
      return (
        M[28] !== R ? ((y = (0, o.A)(R)), (M[28] = R), (M[29] = y)) : (y = M[29]),
        M[30] !== k || M[31] !== E || M[32] !== C || M[33] !== P || M[34] !== T
          ? ((b = C
              ? (0, i.jsx)(eC.Q, {
                  align: "start",
                  description: (0, i.jsx)(m.A, {
                    id: "codex.localConversation.imagePlayground.canvasViewCoachmarkDescription",
                    defaultMessage: "Switch between a focused image and all generated images",
                    description: "Body copy shown in the image view toggle coachmark.",
                  }),
                  dismissLabel: k.formatMessage({
                    id: "codex.localConversation.imagePlayground.canvasViewCoachmarkDismiss",
                    defaultMessage: "Dismiss",
                    description: "Accessible label for dismissing the image view toggle coachmark.",
                  }),
                  onDismiss: E,
                  open: !0,
                  side: "right",
                  sideOffset: 12,
                  title:
                    "single" === T
                      ? (0, i.jsx)(m.A, {
                          id: "codex.localConversation.imagePlayground.canvasViewCoachmarkTitle",
                          defaultMessage: "Try Canvas view",
                          description: "Title shown in the image view toggle coachmark when Canvas view is closed.",
                        })
                      : (0, i.jsx)(m.A, {
                          id: "codex.localConversation.imagePlayground.focusedViewCoachmarkTitle",
                          defaultMessage: "Try focused view",
                          description: "Title shown in the image view toggle coachmark when Canvas view is open.",
                        }),
                  children: P,
                })
              : P),
            (M[30] = k),
            (M[31] = E),
            (M[32] = C),
            (M[33] = P),
            (M[34] = T),
            (M[35] = b))
          : (b = M[35]),
        M[36] !== y || M[37] !== b
          ? ((w = (0, i.jsx)("div", { className: y, children: b })), (M[36] = y), (M[37] = b), (M[38] = w))
          : (w = M[38]),
        w
      )
    }
    var eS = n("oK9z"),
      eT = n("QyRp"),
      e_ = n("sHs0"),
      eA = n("tMvB"),
      ek = n("Sgf9"),
      eP = n("KgMI"),
      eR = n("zMIV"),
      eN = n.n(eR)
    function ez(e) {
      return e.startsWith("sediment://") || e.startsWith("file-service://") ? e.slice(e.indexOf("://") + 3) : null
    }
    let eL = (0, n("iJY0").a)({
      name: "circle-exclamationmark-light-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 3.099609, y: 3.099609, width: 25.800781, height: 25.800781 },
        visualBounds: { x: 3.099609, y: 3.099609, width: 25.800781, height: 25.800781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 3.099609, y: 3.099609, width: 25.800781, height: 25.800781 },
        center: { x: 16, y: 16 },
        insets: { top: 3.099609, right: 3.09961, bottom: 3.09961, left: 3.099609 },
        anchors: { frame: { x: 16, y: 16 }, ink: { x: 16, y: 16 }, foreground: { x: 16, y: 16 } },
      },
      capabilities: ["icon"],
      body: '<path d="M17.4392 20.5755C17.4392 21.3953 16.7745 22.0599 15.9547 22.0599C15.1348 22.0599 14.4702 21.3953 14.4702 20.5755C14.4702 19.7556 15.1348 19.091 15.9547 19.091C16.7745 19.091 17.4392 19.7556 17.4392 20.5755Z" fill="currentColor"/> <path d="M27.0996 16C27.0996 9.86964 22.1304 4.90039 16 4.90039C9.86964 4.90039 4.90039 9.86964 4.90039 16C4.90039 22.1304 9.86964 27.0996 16 27.0996C22.1304 27.0996 27.0996 22.1304 27.0996 16ZM28.9004 16C28.9004 23.1245 23.1245 28.9004 16 28.9004C8.87553 28.9004 3.09961 23.1245 3.09961 16C3.09961 8.87553 8.87553 3.09961 16 3.09961C23.1245 3.09961 28.9004 8.87553 28.9004 16Z" fill="currentColor"/> <path d="M15.054 15.8403V10.1733C15.054 9.67628 15.4573 9.27295 15.9543 9.27295C16.4514 9.27295 16.8547 9.67628 16.8547 10.1733V15.8403C16.8546 16.3372 16.4513 16.7397 15.9543 16.7397C15.4574 16.7397 15.0541 16.3372 15.054 15.8403Z" fill="currentColor"/>',
    })
    var eD = n("DBCl"),
      eO = n("HZfM"),
      eB = n("MrGp"),
      eU = n("gyrn"),
      eF = n("jAnS"),
      e$ = n("FkTw"),
      eH = n("urzV"),
      eK = n("jqMG"),
      eV = n("Oj9r"),
      eG = n("XXJV"),
      eq = n("JNtf"),
      eW = n("mUDD")
    function eY(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        c,
        u,
        g,
        h,
        f,
        p,
        x = (0, r.c)(33),
        { kind: v, onConfirm: b, onCancel: w, returnFocusTo: I } = e,
        M = "discard" === v
      ;(x[0] !== I
        ? ((t = {
            onCloseAutoFocus: (e) => {
              I instanceof HTMLElement && I.isConnected && (e.preventDefault(), I.focus({ preventScroll: !0 }))
            },
          }),
          (x[0] = I),
          (x[1] = t))
        : (t = x[1]),
        x[2] !== w
          ? ((n = (e) => {
              e || w()
            }),
            (x[2] = w),
            (x[3] = n))
          : (n = x[3]))
      let j = M || void 0
      ;(x[4] !== b
        ? ((a = (e) => {
            ;(e.preventDefault(), b())
          }),
          (x[4] = b),
          (x[5] = a))
        : (a = x[5]),
        x[6] !== M
          ? ((l = (0, i.jsx)(eq.L3, {
              children: M
                ? (0, i.jsx)(m.A, {
                    id: "imageTextEditing.discardTitle",
                    defaultMessage: "Discard all text edits?",
                    description: "Confirmation title before discarding all unsaved text changes to an image",
                  })
                : (0, i.jsx)(m.A, {
                    id: "imageTextEditing.saveAnotherTitle",
                    defaultMessage: "Save another copy?",
                    description:
                      "Confirmation before repeating an image snapshot save whose earlier outcome is unknown",
                  }),
            })),
            (x[6] = M),
            (x[7] = l))
          : (l = x[7]),
        x[8] !== M
          ? ((o = (0, i.jsx)(eq.rr, {
              children: M
                ? (0, i.jsx)(m.A, {
                    id: "imageTextEditing.discardDescription",
                    defaultMessage: "This discards the unsaved edits and comments on this image.",
                    description: "Explains that discarding image text edits removes only the current unsaved draft",
                  })
                : (0, i.jsx)(m.A, {
                    id: "imageTextEditing.saveAnotherDescription",
                    defaultMessage:
                      "An earlier save may already exist in Library. This will save your current text edits as another copy",
                    description: "Warns that explicitly saving after a lost response may create a duplicate image",
                  }),
            })),
            (x[8] = M),
            (x[9] = o))
          : (o = x[9]),
        x[10] !== l || x[11] !== o
          ? ((s = (0, i.jsx)(eW.OO, { children: (0, i.jsx)(eW.c7, { title: l, subtitle: o }) })),
            (x[10] = l),
            (x[11] = o),
            (x[12] = s))
          : (s = x[12]),
        x[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(m.A, {
              id: "imageTextEditing.keepEditing",
              defaultMessage: "Keep editing",
              description: "Dismisses the discard confirmation and returns to the image text draft",
            })),
            (x[13] = d))
          : (d = x[13]),
        x[14] !== w
          ? ((c = (0, i.jsx)(y.$, { type: "button", color: "secondary", autoFocus: !0, onClick: w, children: d })),
            (x[14] = w),
            (x[15] = c))
          : (c = x[15]))
      let C = M ? "danger" : "primary"
      return (
        x[16] !== M
          ? ((u = M
              ? (0, i.jsx)(m.A, {
                  id: "imageTextEditing.discardChanges",
                  defaultMessage: "Discard changes",
                  description: "Confirms discarding the current unsaved image text draft",
                })
              : (0, i.jsx)(m.A, {
                  id: "imageTextEditing.saveAnotherCopy",
                  defaultMessage: "Save another copy",
                  description: "Explicitly save a new image despite the unknown outcome of an earlier save",
                })),
            (x[16] = M),
            (x[17] = u))
          : (u = x[17]),
        x[18] !== C || x[19] !== u
          ? ((g = (0, i.jsx)(y.$, { type: "submit", color: C, children: u })), (x[18] = C), (x[19] = u), (x[20] = g))
          : (g = x[20]),
        x[21] !== g || x[22] !== c
          ? ((h = (0, i.jsx)(eW.OO, { children: (0, i.jsxs)(eW.Es, { children: [c, g] }) })),
            (x[21] = g),
            (x[22] = c),
            (x[23] = h))
          : (h = x[23]),
        x[24] !== h || x[25] !== j || x[26] !== a || x[27] !== s
          ? ((f = (0, i.jsxs)(eW.R4, { as: "form", "data-image-text-discard": j, onSubmit: a, children: [s, h] })),
            (x[24] = h),
            (x[25] = j),
            (x[26] = a),
            (x[27] = s),
            (x[28] = f))
          : (f = x[28]),
        x[29] !== t || x[30] !== f || x[31] !== n
          ? ((p = (0, i.jsx)(eq.lG, { open: !0, size: "compact", contentProps: t, onOpenChange: n, children: f })),
            (x[29] = t),
            (x[30] = f),
            (x[31] = n),
            (x[32] = p))
          : (p = x[32]),
        p
      )
    }
    var eZ = n("SZCv"),
      eX = n.n(eZ)
    function eQ(e) {
      if (null == e || e.items === e.snapshot.content.items) return []
      let t = new Map(e.snapshot.content.items.filter(eJ).map((e) => [e.id, e])),
        n = []
      for (let i of e.items.filter(eJ)) {
        let e = t.get(i.id)
        ;(eX()(e, i) || n.push({ id: i.id, before: e?.text ?? null, after: i.text }), t.delete(i.id))
      }
      for (let e of t.values()) n.push({ id: e.id, before: e.text, after: null })
      return (e1(e).some((t, n) => t !== e.items[n]) && n.push({ id: null, before: null, after: null }), n)
    }
    function eJ(e) {
      return "text" === e.kind && "editable" === e.rendering.mode
    }
    function e1(e) {
      let t = new Map(e.items.map((e) => [e.id, e])),
        n = e.snapshot.content.items.flatMap((e) => {
          let n = t.get(e.id)
          return null == n ? [] : [n]
        }),
        i = new Set(n.map((e) => e.id)),
        r = 0
      return e.items.map((e) => (i.has(e.id) ? n[r++] : e))
    }
    var e0 = n("q1q2"),
      e2 = n("tILS"),
      e3 = n("vvVm"),
      e4 = n("K6KE"),
      e6 = n("suct"),
      e5 = n("vGEi"),
      e9 = n("jqmc"),
      e8 = n("jDEJ"),
      e7 = n("GQB6"),
      te = n("hGgS"),
      tt = n("V8uZ"),
      tn = n("MMsV"),
      ti = n("BgSw")
    let tr = ["fontId", "fontSize", "alignment", "width"],
      ta = ["lineHeight", "letterSpacing", "wordSpacing", "horizontalScale"]
    function tl(e) {
      let { width: t, height: n } = e.snapshot.content
      return e.items.flatMap((i) => {
        if ("text" !== i.kind || "editable" !== i.rendering.mode) return []
        let r = i.rendering,
          a = e.assets.fonts.find((e) => e.id === r.font_id)
        return null == a
          ? []
          : [
              {
                id: i.id,
                text: i.text,
                x: i.bbox.x * t,
                y: i.bbox.y * n,
                width: i.bbox.width * t,
                height: i.bbox.height * n,
                fontFamily: a.family,
                fontId: a.id,
                fontSize: r.font_size,
                lineHeight: r.line_height ?? 1.2 * r.font_size,
                color: r.color,
                alignment: (0, ti.IR)(i, t, n),
                rotation: r.rotation,
                letterSpacing: r.letter_spacing ?? 0,
                wordSpacing: r.word_spacing ?? 0,
                horizontalScale: r.horizontal_scale ?? 1,
                wrapText:
                  null == r.baseline &&
                  null == r.line_layout &&
                  null == r.upper_contour &&
                  null == r.render_width &&
                  (r.start_offset ?? 0) === 0,
              },
            ]
      })
    }
    function to(e, t, n, i) {
      let r,
        a = tl(e).find((e) => e.id === t.id),
        l = e.items.find((e) => e.id === t.id)
      if (null == a || l?.kind !== "text" || "editable" !== l.rendering.mode) return e.items
      let o = a.wrapText || t.text.split("\n").length !== a.text.split("\n").length,
        s = l.rendering,
        d = null == i && t.lineHeight === a.lineHeight ? a.lineHeight / a.fontSize : t.lineHeight / t.fontSize,
        c = (n) => {
          let r = ts(e, l, s, a, { ...t, fontSize: n, lineHeight: n * d }, o)
          return (null != i && "editable" === r.rendering.mode && (r.rendering = { ...r.rendering, ...i }), r)
        }
      try {
        if (((r = c(n)), !(0, ti.mZ)(e, r))) {
          let t,
            i = 0,
            a = n
          for (let n = 0; n < 18 && a - i > 0.01; n++) {
            let n = (i + a) / 2,
              r = c(n)
            ;(0, ti.mZ)(e, r) ? ((i = n), (t = r)) : (a = n)
          }
          r = t ?? c(Math.min(n, 0.01))
        }
      } catch (e) {
        if (null != i || !(e instanceof ti.Zo)) throw e
        r = { ...l, text: t.text }
      }
      return ((0, tn.pb)(r, n), e.items.map((e) => (e === l ? r : e)))
    }
    function ts(e, t, n, i, r, a) {
      let l =
          r.lineHeight === i.lineHeight && r.fontSize !== i.fontSize
            ? (i.lineHeight * r.fontSize) / i.fontSize
            : r.lineHeight,
        o = {
          ...n,
          font_id: r.fontId,
          font_size: r.fontSize,
          color: r.color,
          align: a || r.alignment !== i.alignment ? r.alignment : n.align,
          rotation: r.rotation,
          ...(l !== i.lineHeight ? { line_height: l } : {}),
          ...(r.horizontalScale !== i.horizontalScale ? { horizontal_scale: r.horizontalScale } : {}),
          ...(r.letterSpacing !== i.letterSpacing ? { letter_spacing: r.letterSpacing } : {}),
          ...(r.wordSpacing !== i.wordSpacing ? { word_spacing: r.wordSpacing } : {}),
          fill_gradient: r.color !== i.color ? null : n.fill_gradient,
        }
      return (
        a && !i.wrapText
          ? (o = { ...o, ...ti.N$ })
          : !i.wrapText &&
            (r.text !== i.text || [...tr, ...ta].some((e) => r[e] !== i[e])) &&
            (o = (0, ti.qD)(e, r.id, o, r.text, { previous: i.alignment, next: r.alignment })),
        { ...t, text: r.text, rendering: o }
      )
    }
    let td = (0, U.YK)({
      painter: {
        id: "imageTextEditing.formatPainter",
        defaultMessage: "Format Painter",
        description: "Sample the selected image text box's formatting and apply it to another box",
      },
      paste: {
        id: "imageTextEditing.pasteFormatting",
        defaultMessage: "Paste formatting",
        description: "Apply the previously sampled image text style to the selected box",
      },
    })
    function tc(e, t) {
      let n = e.items.find((e) => e.id === t.id)
      return n?.kind !== "text" || "editable" !== n.rendering.mode
        ? null
        : {
            documentId: e.snapshot.reference.document_id,
            sourceId: t.id,
            fontId: t.fontId,
            fontSize: t.fontSize,
            color: t.color,
            gradient: n.rendering.fill_gradient ?? null,
            alignment: t.alignment,
            lineHeightMultiple: t.lineHeight / t.fontSize,
            letterSpacing: t.letterSpacing,
            wordSpacing: t.wordSpacing,
            horizontalScale: t.horizontalScale,
          }
    }
    var tu = n("LEvs"),
      tg = n("EWFe"),
      tm = n("gwne"),
      th = n("k5JT"),
      tf = n("LMaG"),
      tp = n("I1iB"),
      tx = n("WIy3"),
      tv = n("bqtn"),
      ty = n("EGCJ"),
      tb = n("nzx4"),
      tw = n("vlfB"),
      tI = n("Lhpx")
    function tM(e, t, n, { align: i, side: r, direction: a }) {
      if (null == e) return {}
      let l = e.getBoundingClientRect(),
        o = t.getBoundingClientRect(),
        s = t.closest("[data-menu-overlay-surface]")?.getBoundingClientRect() ?? l
      return {
        alignOffset: (i === ("ltr" === a ? "start" : "end") ? l.left - o.left : o.right - l.right) - n,
        sideOffset: (0, tI.ot)(n) + ("top" === r ? o.top - s.top : s.bottom - o.bottom),
        minWidth: l.width / n,
      }
    }
    function tj(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        g,
        m = (0, r.c)(22)
      m[0] !== e
        ? (({ align: t, collisionBoundary: n, step: l, ...a } = e),
          (m[0] = e),
          (m[1] = t),
          (m[2] = n),
          (m[3] = a),
          (m[4] = l))
        : ((t = m[1]), (n = m[2]), (a = m[3]), (l = m[4]))
      let h = void 0 === l ? 1 : l,
        f = (0, th.useDirection)(),
        p = (0, c.useRef)(null)
      return (
        m[5] !== a.onChange || m[6] !== a.value || m[7] !== h
          ? ((o = (e) => tE(e, a.value, h, a.onChange)), (m[5] = a.onChange), (m[6] = a.value), (m[7] = h), (m[8] = o))
          : (o = m[8]),
        m[9] !== t || m[10] !== f
          ? ((s = (e, n) => tM(p.current, e, n, { direction: f, align: t, side: "bottom" })),
            (m[9] = t),
            (m[10] = f),
            (m[11] = s))
          : (s = m[11]),
        m[12] !== t || m[13] !== n || m[14] !== s
          ? ((d = { side: "bottom", align: t, collisionBoundary: n, getPlacement: s }),
            (m[12] = t),
            (m[13] = n),
            (m[14] = s),
            (m[15] = d))
          : (d = m[15]),
        m[16] !== a || m[17] !== d
          ? ((u = (0, i.jsx)(tw.B, { ...a, menuPlacement: d })), (m[16] = a), (m[17] = d), (m[18] = u))
          : (u = m[18]),
        m[19] !== o || m[20] !== u
          ? ((g = (0, i.jsx)("div", {
              ref: p,
              className: "w-full min-w-0 self-start",
              onKeyDownCapture: o,
              children: u,
            })),
            (m[19] = o),
            (m[20] = u),
            (m[21] = g))
          : (g = m[21]),
        g
      )
    }
    function tC(e) {
      let t,
        n,
        a = (0, r.c)(7),
        { children: l, value: o, step: s, onChange: d } = e,
        c = void 0 === s ? 1 : s
      return (
        a[0] !== d || a[1] !== c || a[2] !== o
          ? ((t = (e) => tE(e, o, c, d)), (a[0] = d), (a[1] = c), (a[2] = o), (a[3] = t))
          : (t = a[3]),
        a[4] !== l || a[5] !== t
          ? ((n = (0, i.jsx)("div", { className: "contents", onKeyDownCapture: t, children: l })),
            (a[4] = l),
            (a[5] = t),
            (a[6] = n))
          : (n = a[6]),
        n
      )
    }
    function tE(e, t, n, i) {
      let r = e.target
      if (
        !(r instanceof HTMLInputElement) ||
        e.nativeEvent.isComposing ||
        ("ArrowUp" !== e.key && "ArrowDown" !== e.key)
      )
        return
      ;(e.preventDefault(), e.stopPropagation())
      let a = r.valueAsNumber,
        l = Number.isFinite(a) && (null == t || a !== Math.round(100 * t) / 100) ? a : (t ?? 0),
        o = "ArrowUp" === e.key ? n : -n,
        s = Math.min(r.max ? Number(r.max) : 1 / 0, Math.max(r.min ? Number(r.min) : -1 / 0, l + o))
      ;((r.value = String(s)), s !== t && i(s))
    }
    function tS(e) {
      let t,
        n,
        a,
        l = (0, r.c)(4),
        { children: o } = e,
        s = (0, c.useRef)(void 0)
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (e) => {
              e.target instanceof Element &&
                e.currentTarget.contains(e.target) &&
                e.target.closest('[aria-haspopup]:not([aria-expanded="true"])') &&
                (s.current = e.currentTarget.ownerDocument.activeElement)
            }),
            (n = (e) => {
              e.target instanceof Node && e.currentTarget.contains(e.target) && (s.current = void 0)
            }),
            (l[0] = t),
            (l[1] = n))
          : ((t = l[0]), (n = l[1])),
        l[2] !== o
          ? ((a = (0, i.jsx)("div", {
              className: "relative",
              "data-menu-overlay-surface": !0,
              onPointerDownCapture: t,
              onKeyDownCapture: n,
              children: (0, i.jsx)(ty.a, { value: s, children: o }),
            })),
            (l[2] = o),
            (l[3] = a))
          : (a = l[3]),
        a
      )
    }
    function tT(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        h,
        f,
        p,
        x,
        v,
        y,
        b,
        I,
        M,
        j,
        C,
        E,
        S,
        T,
        _,
        A,
        k,
        P,
        R,
        N,
        z,
        L,
        D,
        O,
        B,
        U,
        F,
        $,
        H,
        K,
        V,
        G,
        q = (0, r.c)(123),
        { source: W, selected: Y, menuPlacement: Z, disabled: X, onChange: Q } = e,
        J = void 0 !== X && X,
        et = (0, g.A)(),
        en = (0, c.useId)(),
        ei = (0, th.useDirection)(),
        er = (0, c.useRef)(null)
      if (
        q[0] !== J ||
        q[1] !== en ||
        q[2] !== et ||
        q[3] !== Z ||
        q[4] !== Q ||
        q[5] !== Y ||
        q[6] !== W.assets ||
        q[7] !== W.snapshot.content.fonts
      ) {
        let e, r, c, g, M, j
        q[24] !== W.assets
          ? ((e = (e) => {
              let t = W.assets.fonts.find((t) => t.id === e.id),
                n =
                  null != t &&
                  Array.from(e.name).every(
                    (n) => t.codePoints.has(n.codePointAt(0) ?? 0) && !e.missing_characters?.includes(n),
                  )
              return { id: e.id, name: e.name, family: n ? t.family : void 0 }
            }),
            (q[24] = W.assets),
            (q[25] = e))
          : (e = q[25])
        let C = W.snapshot.content.fonts.map(e)
        q[26] !== Y.fontId ? ((r = (e) => e.id === Y.fontId), (q[26] = Y.fontId), (q[27] = r)) : (r = q[27])
        let E = C.find(r)
        ;(q[28] !== Q || q[29] !== Y
          ? ((c = (e) => Q({ ...Y, fontSize: e })), (q[28] = Q), (q[29] = Y), (q[30] = c))
          : (c = q[30]),
          (a = c),
          (d = "contents"),
          (u = J),
          (n = tv.Ab),
          (v = Z),
          (y = "opaque"),
          (b = J),
          (I = "menuBounded"),
          (l = "pointer-events-auto min-w-50"),
          q[31] !== et
            ? ((g = et.formatMessage({
                id: "presentationEditor.font",
                defaultMessage: "Font family",
                description: "Font family selector",
              })),
              (q[31] = et),
              (q[32] = g))
            : (g = q[32]),
          q[33] === Symbol.for("react.memo_cache_sentinel") ? ((M = (0, i.jsx)(w.HIf, {})), (q[33] = M)) : (M = q[33]),
          (o = (0, i.jsxs)(e5.P, {
            color: "ghostActive",
            size: "formatToolbar",
            contentLayout: "dropdown",
            "aria-label": g,
            children: [
              (0, i.jsx)("span", {
                className: "max-w-32 truncate @max-[480px]:max-w-12",
                style: { fontFamily: E?.family },
                children:
                  E?.name ??
                  (0, i.jsx)(m.A, {
                    id: "presentationEditor.mixed",
                    defaultMessage: "Mixed",
                    description: "A formatting value differs across selected objects or table cells",
                  }),
              }),
              M,
            ],
          })),
          q[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = (0, i.jsx)(m.A, {
                id: "imageTextEditing.imageFonts",
                defaultMessage: "From this image",
                description: "Font menu group containing styles reconstructed from the original image",
              })),
              (q[34] = j))
            : (j = q[34]),
          q[35] !== en
            ? ((s = (0, i.jsx)(tv.ms.SectionLabel, { children: (0, i.jsx)("span", { id: en, children: j }) })),
              (q[35] = en),
              (q[36] = s))
            : (s = q[36]),
          (t = tv.ms.RadioGroup),
          (h = en),
          (f = Y.fontId),
          q[37] !== Q || q[38] !== Y
            ? ((p = (e) => Q({ ...Y, fontId: e })), (q[37] = Q), (q[38] = Y), (q[39] = p))
            : (p = q[39]),
          (x = C.map(tP)),
          (q[0] = J),
          (q[1] = en),
          (q[2] = et),
          (q[3] = Z),
          (q[4] = Q),
          (q[5] = Y),
          (q[6] = W.assets),
          (q[7] = W.snapshot.content.fonts),
          (q[8] = t),
          (q[9] = n),
          (q[10] = a),
          (q[11] = l),
          (q[12] = o),
          (q[13] = s),
          (q[14] = d),
          (q[15] = u),
          (q[16] = h),
          (q[17] = f),
          (q[18] = p),
          (q[19] = x),
          (q[20] = v),
          (q[21] = y),
          (q[22] = b),
          (q[23] = I))
      } else
        ((t = q[8]),
          (n = q[9]),
          (a = q[10]),
          (l = q[11]),
          (o = q[12]),
          (s = q[13]),
          (d = q[14]),
          (u = q[15]),
          (h = q[16]),
          (f = q[17]),
          (p = q[18]),
          (x = q[19]),
          (v = q[20]),
          (y = q[21]),
          (b = q[22]),
          (I = q[23]))
      ;(q[40] !== t || q[41] !== h || q[42] !== f || q[43] !== p || q[44] !== x
        ? ((M = (0, i.jsx)(t, { "aria-labelledby": h, value: f, onValueChange: p, children: x })),
          (q[40] = t),
          (q[41] = h),
          (q[42] = f),
          (q[43] = p),
          (q[44] = x),
          (q[45] = M))
        : (M = q[45]),
        q[46] !== n ||
        q[47] !== l ||
        q[48] !== o ||
        q[49] !== s ||
        q[50] !== M ||
        q[51] !== v ||
        q[52] !== y ||
        q[53] !== b ||
        q[54] !== I
          ? ((j = (0, i.jsxs)(n, {
              ...v,
              surface: y,
              disabled: b,
              contentWidth: I,
              contentClassName: l,
              triggerButton: o,
              children: [s, M],
            })),
            (q[46] = n),
            (q[47] = l),
            (q[48] = o),
            (q[49] = s),
            (q[50] = M),
            (q[51] = v),
            (q[52] = y),
            (q[53] = b),
            (q[54] = I),
            (q[55] = j))
          : (j = q[55]),
        q[56] !== W.items ? ((C = new Set(W.items.flatMap(tA))), (q[56] = W.items), (q[57] = C)) : (C = q[57]),
        q[58] !== C ? ((E = [...C]), (q[58] = C), (q[59] = E)) : (E = q[59]))
      let ea = Y.color
      ;(q[60] !== et
        ? ((S = et.formatMessage({
            id: "imageTextEditing.textColor",
            defaultMessage: "Text color",
            description: "Change the color of the selected image text block",
          })),
          (q[60] = et),
          (q[61] = S))
        : (S = q[61]),
        q[62] !== Q || q[63] !== Y
          ? ((T = (e) => {
              ;/^#[0-9a-f]{6}$/i.test(e) && Q({ ...Y, color: e })
            }),
            (q[62] = Q),
            (q[63] = Y),
            (q[64] = T))
          : (T = q[64]),
        q[65] !== J || q[66] !== Z || q[67] !== Y.color || q[68] !== E || q[69] !== S || q[70] !== T
          ? ((_ = (0, i.jsx)(tf.v, {
              ...Z,
              palette: E,
              variant: "toolbar",
              color: ea,
              disabled: J,
              label: S,
              onChange: T,
            })),
            (q[65] = J),
            (q[66] = Z),
            (q[67] = Y.color),
            (q[68] = E),
            (q[69] = S),
            (q[70] = T),
            (q[71] = _))
          : (_ = q[71]))
      let el = Y.fontSize
      ;(q[72] !== ei || q[73] !== Z
        ? ((A = (e, t) => tM(er.current, e, t, { ...Z, direction: ei })), (q[72] = ei), (q[73] = Z), (q[74] = A))
        : (A = q[74]),
        q[75] !== Z || q[76] !== A
          ? ((k = { ...Z, surface: "opaque", getPlacement: A }), (q[75] = Z), (q[76] = A), (q[77] = k))
          : (k = q[77]),
        q[78] !== et
          ? ((P = et.formatMessage({
              id: "artifactEditor.fontSize",
              defaultMessage: "Font size",
              description: "Open font size presets",
            })),
            (q[78] = et),
            (q[79] = P))
          : (P = q[79]))
      let eo = Y.fontSize
      ;(q[80] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = (0, i.jsx)(m.A, {
            id: "imageTextEditing.pixelUnit",
            defaultMessage: "px",
            description: "Abbreviation for source-image pixels, the unit for editable image text size",
          })),
          (N = [72, 48, 36, 28, 20].map(t_)),
          (q[80] = R),
          (q[81] = N))
        : ((R = q[80]), (N = q[81])),
        q[82] !== a || q[83] !== J || q[84] !== Y.fontSize || q[85] !== k || q[86] !== P
          ? ((z = (0, i.jsx)("div", {
              ref: er,
              className: "w-28 shrink-0",
              children: (0, i.jsx)(tp.D, {
                menuPlacement: k,
                label: P,
                value: eo,
                disabled: J,
                onChange: a,
                min: 1,
                max: 8192,
                suffix: R,
                presets: N,
              }),
            })),
            (q[82] = a),
            (q[83] = J),
            (q[84] = Y.fontSize),
            (q[85] = k),
            (q[86] = P),
            (q[87] = z))
          : (z = q[87]),
        q[88] !== a || q[89] !== Y.fontSize || q[90] !== z
          ? ((L = (0, i.jsx)(tC, { value: el, onChange: a, children: z })),
            (q[88] = a),
            (q[89] = Y.fontSize),
            (q[90] = z),
            (q[91] = L))
          : (L = q[91]),
        q[92] !== et
          ? ((D = et.formatMessage({
              id: "presentationEditor.textAlignment",
              defaultMessage: "Text alignment",
              description: "Open text alignment controls",
            })),
            (q[92] = et),
            (q[93] = D))
          : (D = q[93]),
        q[94] !== et || q[95] !== Y.alignment
          ? ((O = et.formatMessage(
              {
                id: "imageTextEditing.currentAlignment",
                defaultMessage: "{alignment, select, left {Align left} center {Align center} other {Align right}}",
                description: "Current horizontal alignment of the selected image text",
              },
              { alignment: Y.alignment },
            )),
            (q[94] = et),
            (q[95] = Y.alignment),
            (q[96] = O))
          : (O = q[96]),
        q[97] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = { left: tg.z, center: tu.v, right: tm.E }), (q[97] = B))
          : (B = q[97]))
      let es = B[Y.alignment]
      return (
        q[98] !== es ? ((U = (0, i.jsx)(ee.I, { asset: es })), (q[98] = es), (q[99] = U)) : (U = q[99]),
        q[100] !== D || q[101] !== O || q[102] !== U
          ? ((F = (0, i.jsx)(tb.Wv, {
              asChild: !0,
              children: (0, i.jsx)(e5.P, {
                color: "ghostActive",
                size: "formatToolbarIcon",
                "aria-label": D,
                "aria-description": O,
                children: U,
              }),
            })),
            (q[100] = D),
            (q[101] = O),
            (q[102] = U),
            (q[103] = F))
          : (F = q[103]),
        q[104] !== Q || q[105] !== Y
          ? (($ = (e) => {
              e !== Y.alignment && ("left" === e || "center" === e || "right" === e) && Q({ ...Y, alignment: e })
            }),
            (q[104] = Q),
            (q[105] = Y),
            (q[106] = $))
          : ($ = q[106]),
        q[107] !== Y.alignment || q[108] !== $
          ? ((H = (0, i.jsx)(tx.D, { value: Y.alignment, onChange: $ })),
            (q[107] = Y.alignment),
            (q[108] = $),
            (q[109] = H))
          : (H = q[109]),
        q[110] !== Z || q[111] !== H
          ? ((K = (0, i.jsx)(tb.hl, { ...Z, disablePadding: !0, size: "content", variant: "menu", children: H })),
            (q[110] = Z),
            (q[111] = H),
            (q[112] = K))
          : (K = q[112]),
        q[113] !== F || q[114] !== K
          ? ((V = (0, i.jsxs)(tb.AM, { children: [F, K] })), (q[113] = F), (q[114] = K), (q[115] = V))
          : (V = q[115]),
        q[116] !== d || q[117] !== u || q[118] !== j || q[119] !== _ || q[120] !== L || q[121] !== V
          ? ((G = (0, i.jsxs)("fieldset", { className: d, disabled: u, children: [j, _, L, V] })),
            (q[116] = d),
            (q[117] = u),
            (q[118] = j),
            (q[119] = _),
            (q[120] = L),
            (q[121] = V),
            (q[122] = G))
          : (G = q[122]),
        G
      )
    }
    function t_(e, t) {
      return {
        value: e,
        label: (0, i.jsxs)("span", {
          className: "flex w-full items-center justify-between gap-6",
          children: [
            (0, i.jsx)(m.A, {
              id: "artifactEditor.sizePresetLabel",
              defaultMessage: "{index, select, 0 {Display} 1 {Header} 2 {Subheading} 3 {Body} other {Small}}",
              values: { index: t },
              description: "Names of artifact font size presets",
            }),
            (0, i.jsx)("span", { className: "text-secondary", children: e }),
          ],
        }),
      }
    }
    function tA(e) {
      return "text" === e.kind && "editable" === e.rendering.mode
        ? [e.rendering.color, ...(e.rendering.fill_gradient?.stops.map(tk) ?? [])]
        : []
    }
    function tk(e) {
      return e.color
    }
    function tP(e) {
      return (0, i.jsx)(
        tv.ms.RadioItem,
        {
          value: e.id,
          textValue: e.name,
          children: (0, i.jsx)("span", { style: { fontFamily: e.family }, children: e.name }),
        },
        e.id,
      )
    }
    function tR(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        c,
        u = (0, r.c)(36),
        { guides: h, active: f, collisionBoundary: p, onSelect: x, onStart: v, onDone: b, startButtonRef: I } = e,
        M = (0, g.A)()
      if (0 === h.length) return null
      if (null == f) {
        let e, t
        return (
          u[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.editGuides",
                defaultMessage: "Edit guides",
                description: "Edit the curve of the selected text on the image",
              })),
              (u[0] = e))
            : (e = u[0]),
          u[1] !== v || u[2] !== I
            ? ((t = (0, i.jsx)(y.$, {
                ref: I,
                color: "field",
                size: "field",
                className: "justify-start",
                onClick: v,
                onMouseDown: tz,
                children: e,
              })),
              (u[1] = v),
              (u[2] = I),
              (u[3] = t))
            : (t = u[3]),
          t
        )
      }
      if (u[4] !== f.lineIndex || u[5] !== p || u[6] !== h || u[7] !== M || u[8] !== x) {
        let e,
          r,
          l,
          o = h.filter(tN)
        if (u[12] !== f.lineIndex || u[13] !== h) {
          let t
          ;(u[15] !== f.lineIndex
            ? ((t = (e) => e.lineIndex === f.lineIndex && "upper_contour" === e.kind),
              (u[15] = f.lineIndex),
              (u[16] = t))
            : (t = u[16]),
            (e = h.find(t)),
            (u[12] = f.lineIndex),
            (u[13] = h),
            (u[14] = e))
        } else e = u[14]
        ;((a = e),
          u[17] !== f.lineIndex
            ? ((r = (e) => e.lineIndex === f.lineIndex), (u[17] = f.lineIndex), (u[18] = r))
            : (r = u[18]),
          (t = o.find(r)),
          u[19] !== M
            ? ((l = (e) =>
                null == e
                  ? M.formatMessage({
                      id: "imageTextEditing.sharedGuide",
                      defaultMessage: "Shared guide",
                      description: "The guide that shapes multiple lines together in a text box",
                    })
                  : M.formatMessage(
                      {
                        id: "imageTextEditing.lineGuide",
                        defaultMessage: "Line {number}",
                        description: "Select the numbered line of extracted text to shape",
                      },
                      { number: e + 1 },
                    )),
              (u[19] = M),
              (u[20] = l))
            : (l = u[20]))
        let s = l
        ;((n =
          o.length > 1 &&
          (0, i.jsx)(tv.Ab, {
            side: "bottom",
            align: "start",
            collisionBoundary: p,
            matchTriggerWidth: !0,
            triggerButton: (0, i.jsxs)(y.$, {
              color: "field",
              size: "field",
              className: "justify-between",
              children: [s(f.lineIndex), " ", (0, i.jsx)(w.HIf, {})],
            }),
            children: o.map((e) =>
              (0, i.jsx)(
                tv.ms.Item,
                {
                  onSelect: () => x(e.id),
                  rightIcon: e.lineIndex === f.lineIndex ? (0, i.jsx)(w.ALZ, {}) : void 0,
                  children: s(e.lineIndex),
                },
                e.id,
              ),
            ),
          })),
          (u[4] = f.lineIndex),
          (u[5] = p),
          (u[6] = h),
          (u[7] = M),
          (u[8] = x),
          (u[9] = t),
          (u[10] = n),
          (u[11] = a))
      } else ((t = u[9]), (n = u[10]), (a = u[11]))
      return (
        u[21] !== f.kind || u[22] !== t || u[23] !== x || u[24] !== a
          ? ((l =
              null != a &&
              null != t &&
              (0, i.jsxs)("div", {
                className: "flex gap-1",
                children: [
                  (0, i.jsx)(y.$, {
                    size: "compact",
                    color: "baseline" === f.kind ? "secondary" : "ghostActive",
                    "aria-pressed": "baseline" === f.kind,
                    onClick: () => x(t.id),
                    children: (0, i.jsx)(m.A, {
                      id: "imageTextEditing.bendGuide",
                      defaultMessage: "Bend",
                      description: "Activate points on the baseline to bend the lettering",
                    }),
                  }),
                  (0, i.jsx)(y.$, {
                    size: "compact",
                    color: "upper_contour" === f.kind ? "secondary" : "ghostActive",
                    "aria-pressed": "upper_contour" === f.kind,
                    onClick: () => x(a.id),
                    children: (0, i.jsx)(m.A, {
                      id: "imageTextEditing.heightGuide",
                      defaultMessage: "Letter height",
                      description: "Activate upper-contour points to change the local height of letters",
                    }),
                  }),
                ],
              })),
            (u[21] = f.kind),
            (u[22] = t),
            (u[23] = x),
            (u[24] = a),
            (u[25] = l))
          : (l = u[25]),
        u[26] !== f.kind
          ? ((o = (0, i.jsx)("p", {
              className: "text-sm text-secondary",
              children:
                "baseline" === f.kind
                  ? (0, i.jsx)(m.A, {
                      id: "imageTextEditing.bendGuideHint",
                      defaultMessage: "Drag a point to bend the text",
                      description: "Hint in the guide editor for bending lettering along its baseline",
                    })
                  : (0, i.jsx)(m.A, {
                      id: "imageTextEditing.heightGuideHint",
                      defaultMessage: "Drag a point toward or away from the baseline",
                      description: "Hint for adjusting the height of letters at an upper guide point",
                    }),
            })),
            (u[26] = f.kind),
            (u[27] = o))
          : (o = u[27]),
        u[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(m.A, {
              id: "imageTextEditing.finishGuides",
              defaultMessage: "Done",
              description: "Leave guide editing and return to text properties with changes in the draft",
            })),
            (u[28] = s))
          : (s = u[28]),
        u[29] !== b
          ? ((d = (0, i.jsx)(y.$, {
              ref: tL,
              color: "primary",
              size: "compact",
              className: "self-start justify-self-start",
              onClick: b,
              children: s,
            })),
            (u[29] = b),
            (u[30] = d))
          : (d = u[30]),
        u[31] !== n || u[32] !== l || u[33] !== o || u[34] !== d
          ? ((c = (0, i.jsxs)(i.Fragment, { children: [n, l, o, d] })),
            (u[31] = n),
            (u[32] = l),
            (u[33] = o),
            (u[34] = d),
            (u[35] = c))
          : (c = u[35]),
        c
      )
    }
    function tN(e) {
      return "baseline" === e.kind
    }
    function tz(e) {
      e.currentTarget.ownerDocument.activeElement instanceof HTMLTextAreaElement && e.preventDefault()
    }
    function tL(e) {
      e?.focus({ preventScroll: !0 })
    }
    var tD = n("HWo3"),
      tO = n("T12R")
    function tB(e) {
      let t,
        n,
        a,
        l,
        o,
        s = (0, r.c)(31),
        { guides: d, activeGuideId: u, region: m, imageSize: h, displayWidth: f, onStart: p, onMove: x, onEnd: v } = e,
        y = (0, g.A)(),
        b = (0, c.useId)()
      s[0] !== y
        ? ((t = y.formatMessage({
            id: "imageTextEditing.guidePointHelp",
            defaultMessage:
              "Drag or use the arrow keys to move this point. Hold Shift with an arrow key to move ten pixels.",
            description: "Keyboard and pointer instructions for an image text guide point, in source-image pixels",
          })),
          (s[0] = y),
          (s[1] = t))
        : (t = s[1])
      let w = t,
        I = (0, c.useRef)(null)
      ;(s[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => () => I.current?.stop(!0)), (s[2] = n))
        : (n = s[2]),
        s[3] !== u || s[4] !== m.id ? ((a = [m.id, u]), (s[3] = u), (s[4] = m.id), (s[5] = a)) : (a = s[5]),
        (0, c.useEffect)(n, a))
      let M = f / h.width
      s[6] !== M ? ((l = (0, tD.h6)(M)), (s[6] = M), (s[7] = l)) : (l = s[7])
      let j = l,
        C = j.halfVisibleSize
      if (
        s[8] !== u ||
        s[9] !== d ||
        s[10] !== y ||
        s[11] !== j.hitRadius ||
        s[12] !== v ||
        s[13] !== x ||
        s[14] !== p ||
        s[15] !== w ||
        s[16] !== b ||
        s[17] !== C ||
        s[18] !== m.height ||
        s[19] !== m.rotation ||
        s[20] !== m.width ||
        s[21] !== m.x ||
        s[22] !== m.y
      ) {
        let e,
          t,
          n,
          r,
          a,
          l = function (e, t, n) {
            if (0 !== e.button || !1 === e.isPrimary || null != I.current) return
            let i = e.currentTarget,
              r = i.getScreenCTM()
            if (null == r) return
            ;(e.stopPropagation(), e.preventDefault(), i.focus({ preventScroll: !0 }))
            let a = e.pointerId,
              l = new DOMPoint(e.clientX, e.clientY).matrixTransform(r.inverse()),
              o = e.clientX,
              s = e.clientY,
              d = t.points[n],
              c = i.ownerDocument.defaultView,
              u = !1,
              g = d.x,
              m = d.y,
              h = () => f(!0)
            function f(e) {
              ;((I.current = null),
                c?.removeEventListener("blur", h),
                i.hasPointerCapture(a) && i.releasePointerCapture(a),
                u && v(e))
            }
            ;((I.current = {
              pointerId: a,
              stop: f,
              move(e) {
                if (!u && 2 >= Math.hypot(e.clientX - o, e.clientY - s)) return
                let r = i.getScreenCTM()
                if (null == r) return void f(!0)
                let a = new DOMPoint(e.clientX, e.clientY).matrixTransform(r.inverse()),
                  c = d.x + (a.x - l.x),
                  h = d.y + (a.y - l.y)
                ;(c !== g || h !== m) && (u || (p(), (u = !0)), (g = c), (m = h), x(t, n, c, h))
              },
            }),
              c?.addEventListener("blur", h),
              i.setPointerCapture(a))
          }
        ;(s[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (e) => {
              I.current?.pointerId === e.pointerId && I.current.move(e)
            }),
            (n = (e) => {
              I.current?.pointerId === e.pointerId && (I.current.move(e), I.current?.stop(!1))
            }),
            (r = (e) => {
              I.current?.pointerId === e.pointerId && I.current.stop(!0)
            }),
            (e = (e) => {
              I.current?.pointerId === e.pointerId && I.current.stop(!0)
            }),
            (s[24] = e),
            (s[25] = t),
            (s[26] = n),
            (s[27] = r))
          : ((e = s[24]), (t = s[25]), (n = s[26]), (r = s[27])),
          s[28] !== w || s[29] !== b
            ? ((a = (0, i.jsx)("desc", { id: b, children: w })), (s[28] = w), (s[29] = b), (s[30] = a))
            : (a = s[30]),
          (o = (0, i.jsxs)("g", {
            transform: `rotate(${m.rotation} ${m.x + m.width / 2} ${m.y + m.height / 2})`,
            onPointerMove: t,
            onPointerUp: n,
            onLostPointerCapture: r,
            onPointerCancel: e,
            children: [
              a,
              d.map((e) =>
                (0, i.jsxs)(
                  "g",
                  {
                    opacity: e.id === u ? 1 : 0.3,
                    className: "baseline" === e.kind ? "text-blue" : "text-orange",
                    children: [
                      e.id === u &&
                        "" !== e.controlPath &&
                        (0, i.jsx)("path", {
                          d: e.controlPath,
                          className: "pointer-events-none",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeOpacity: 0.45,
                          vectorEffect: "non-scaling-stroke",
                        }),
                      (0, i.jsx)("path", {
                        d: e.path,
                        fill: "none",
                        stroke: "white",
                        strokeDasharray: "baseline" === e.kind ? void 0 : "4 3",
                        strokeWidth: 3,
                        strokeOpacity: 0.8,
                        vectorEffect: "non-scaling-stroke",
                      }),
                      (0, i.jsx)("path", {
                        d: e.path,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeDasharray: "baseline" === e.kind ? void 0 : "4 3",
                        vectorEffect: "non-scaling-stroke",
                      }),
                      e.id === u &&
                        e.points.map((t, n) =>
                          (0, i.jsxs)(
                            "g",
                            {
                              role: "button",
                              tabIndex: 0,
                              "aria-describedby": b,
                              "aria-label": y.formatMessage(
                                {
                                  id: "imageTextEditing.guidePoint",
                                  defaultMessage:
                                    "{kind, select, baseline {Baseline} other {Upper contour}}, {line, select, block {text block} other {line {line}}}, {control, select, yes {control point} other {anchor}} {index}",
                                  description:
                                    "Accessible name of a draggable image text guide point, including its guide, line, point type and one-based index",
                                },
                                {
                                  kind: e.kind,
                                  line: null == e.lineIndex ? "block" : e.lineIndex + 1,
                                  control: t.control ? "yes" : "no",
                                  index: n + 1,
                                },
                              ),
                              className:
                                "group pointer-events-auto cursor-grab touch-none outline-hidden active:cursor-grabbing",
                              onPointerDown: (t) => l(t, e, n),
                              onKeyDown: (i) => {
                                if ("Escape" === i.key && null != I.current) {
                                  ;(i.preventDefault(), i.stopPropagation(), I.current.stop(!0))
                                  return
                                }
                                let r = (0, tO.pv)(i.key, i.shiftKey)
                                if (null == r || i.altKey || i.ctrlKey || i.metaKey || null != I.current) return
                                ;(i.preventDefault(), i.stopPropagation(), p())
                                let a = (m.rotation * Math.PI) / 180
                                ;(x(
                                  e,
                                  n,
                                  t.x + r.dx * Math.cos(a) + r.dy * Math.sin(a),
                                  t.y + r.dy * Math.cos(a) - r.dx * Math.sin(a),
                                ),
                                  v(!1))
                              },
                              children: [
                                (0, i.jsx)("circle", { cx: t.x, cy: t.y, r: j.hitRadius, fill: "transparent" }),
                                (0, i.jsx)("circle", {
                                  className: "hidden group-focus-visible:block",
                                  cx: t.x,
                                  cy: t.y,
                                  r: 1.8 * C,
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: 2,
                                  vectorEffect: "non-scaling-stroke",
                                }),
                                t.control
                                  ? (0, i.jsx)("circle", {
                                      cx: t.x,
                                      cy: t.y,
                                      r: C,
                                      fill: "white",
                                      stroke: "currentColor",
                                      strokeWidth: 1.5,
                                      vectorEffect: "non-scaling-stroke",
                                    })
                                  : (0, i.jsx)("rect", {
                                      x: t.x - C,
                                      y: t.y - C,
                                      width: 2 * C,
                                      height: 2 * C,
                                      fill: "currentColor",
                                      stroke: "white",
                                      strokeWidth: 1,
                                      vectorEffect: "non-scaling-stroke",
                                    }),
                              ],
                            },
                            n,
                          ),
                        ),
                    ],
                  },
                  e.id,
                ),
              ),
            ],
          })),
          (s[8] = u),
          (s[9] = d),
          (s[10] = y),
          (s[11] = j.hitRadius),
          (s[12] = v),
          (s[13] = x),
          (s[14] = p),
          (s[15] = w),
          (s[16] = b),
          (s[17] = C),
          (s[18] = m.height),
          (s[19] = m.rotation),
          (s[20] = m.width),
          (s[21] = m.x),
          (s[22] = m.y),
          (s[23] = o))
      } else o = s[23]
      return o
    }
    function tU(e, t) {
      let n = e.items.find((e) => e.id === t)
      if (n?.kind !== "text" || "editable" !== n.rendering.mode) return []
      let i = n.rendering,
        r = [],
        a = !1
      if (
        (n.text.split("\n").forEach((e, t) => {
          if (!e.trim()) return
          let n = i.line_layout?.[t]
          null != n
            ? r.push({ baseline: n.baseline, upper_contour: n.upper_contour, lineIndex: t, fontSize: n.font_size })
            : (a = !0)
        }),
        a)
      ) {
        let n = null == i.baseline ? (0, ti.rv)(e, t) : null,
          a = i.baseline ?? n?.baseline
        null != a &&
          r.unshift({
            lineIndex: null,
            baseline: a,
            upper_contour: i.upper_contour,
            fontSize: i.font_size,
            implicit: n,
          })
      }
      return r
    }
    function tF(e, t, n) {
      return e.flatMap(({ command: i, values: r }, a) => {
        let l = []
        if ("L" === i) {
          let i = e[a - 1].values
          l.push({
            x: ((i[i.length - 2] + r[0]) * t) / 2,
            y: ((i[i.length - 1] + r[1]) * n) / 2,
            control: !0,
            commandIndex: a,
            offset: null,
          })
        }
        for (let e = 0; e < r.length; e += 2)
          l.push({ x: r[e] * t, y: r[e + 1] * n, control: e < r.length - 2, commandIndex: a, offset: e })
        return l
      })
    }
    function t$(e, t = 1, n = 1) {
      return e
        .map(({ command: e, values: i }) => `${e} ${i.map((e, i) => e * (i % 2 == 0 ? t : n)).join(" ")}`)
        .join(" ")
    }
    var tH = n("yf2D")
    function tK(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d = (0, r.c)(13),
        { stage: u } = e,
        m = (0, g.A)(),
        h = (0, c.useRef)(null),
        f = (0, c.useRef)(null),
        [p, x] = (0, c.useState)(null)
      d[0] !== m
        ? ((t = m.formatMessage({
            id: "imageTextEditing.emptyBoxLabel",
            defaultMessage: "Text",
            description: "Label identifying an editable text box with empty wording",
          })),
          (d[0] = m),
          (d[1] = t))
        : (t = d[1])
      let v = t
      return (
        d[2] !== u
          ? ((n = () => {
              null != h.current && null != f.current && tV(u, h.current, f.current)
            }),
            (d[2] = u),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== u || d[5] !== p ? ((a = [u, p]), (d[4] = u), (d[5] = p), (d[6] = a)) : (a = d[6]),
        (0, c.useLayoutEffect)(n, a),
        d[7] !== v || d[8] !== u
          ? ((l = () => {
              let e = null,
                t = () => {
                  null != e && ((e = null), (f.current = null), x(null))
                },
                n = (n) => {
                  let i = n.target instanceof Element ? n.target.closest("[data-image-text-hover-label]") : null
                  null == i || 0 !== n.buttons || "touch" === n.pointerType
                    ? t()
                    : ((f.current = n),
                      i !== e && ((e = i), x(i.getAttribute("data-image-text-hover-label")?.trim() || v)),
                      null != h.current && tV(u, h.current, n))
                }
              return (
                u.addEventListener("pointermove", n),
                u.addEventListener("pointerdown", t, !0),
                u.addEventListener("pointerleave", t),
                () => {
                  ;(u.removeEventListener("pointermove", n),
                    u.removeEventListener("pointerdown", t, !0),
                    u.removeEventListener("pointerleave", t))
                }
              )
            }),
            (o = [u, v]),
            (d[7] = v),
            (d[8] = u),
            (d[9] = l),
            (d[10] = o))
          : ((l = d[9]), (o = d[10])),
        (0, c.useEffect)(l, o),
        d[11] !== p
          ? ((s =
              null == p
                ? null
                : (0, i.jsx)("span", {
                    ref: h,
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute top-0 left-0 z-10 w-max max-w-44 rounded-full bg-surface-elevated-secondary px-2 py-0.5 text-xs font-medium text-default shadow",
                    children: (0, i.jsx)(tH.E, { dir: "auto", animate: !0, children: p }, p),
                  })),
            (d[11] = p),
            (d[12] = s))
          : (s = d[12]),
        s
      )
    }
    function tV(e, t, n) {
      let i = e.getBoundingClientRect()
      if (((t.hidden = 0 === i.width || 0 === i.height), t.hidden)) return
      let r = ((n.clientX - i.left) * e.clientWidth) / i.width,
        a = ((n.clientY - i.top) * e.clientHeight) / i.height,
        l = r + 12 + t.offsetWidth > e.clientWidth ? r - 12 - t.offsetWidth : r + 12,
        o = a + 16 + t.offsetHeight > e.clientHeight ? a - 12 - t.offsetHeight : a + 16
      t.style.transform = `translate(${Math.max(0, l)}px, ${Math.max(0, o)}px)`
    }
    var tG = n("xlRw"),
      tq = n("glA7")
    let tW = ["w", "e", "n", "s", "nw", "ne", "sw", "se"],
      tY = ["nw", "ne", "sw", "se"]
    function tZ(e) {
      let t,
        n = (0, r.c)(41),
        { frame: a, zoom: l, editingText: o, resizeLabel: s, onRotate: d, onPointerDown: u, onKeyDown: m } = e,
        h = void 0 !== o && o,
        f = (0, g.A)(),
        p = (0, c.useId)(),
        x = Math.max(l, 1e-4)
      if (
        n[0] !== h ||
        n[1] !== p ||
        n[2] !== a.height ||
        n[3] !== a.rotation ||
        n[4] !== a.width ||
        n[5] !== a.x ||
        n[6] !== a.y ||
        n[7] !== f ||
        n[8] !== m ||
        n[9] !== u ||
        n[10] !== d ||
        n[11] !== s ||
        n[12] !== x
      ) {
        let e,
          r,
          l,
          o,
          c,
          g,
          v,
          y = (0, tD.h6)(x),
          b = 4 / x,
          w = 9 / x,
          I = Math.min(w, a.width / 2),
          M = Math.min(w, a.height / 2)
        n[14] !== I || n[15] !== w
          ? ((e = Math.sqrt(w * w - I * I)), (n[14] = I), (n[15] = w), (n[16] = e))
          : (e = n[16])
        let j = -e
        n[17] !== M || n[18] !== w
          ? ((r = Math.sqrt(w * w - M * M)), (n[17] = M), (n[18] = w), (n[19] = r))
          : (r = n[19])
        let C = -r,
          E = `M 0 0 H ${I} V ${j} A ${w} ${w} 0 0 0 ${-w} 0 A ${w} ${w} 0 0 0 ${C} ${M} H 0 Z`,
          S = { left: 0, top: 0, width: a.width, height: a.height },
          T = a.rotation ?? 0,
          _ = (0, tG.k4)(S)
        n[20] !== m || n[21] !== d || n[22] !== T
          ? ((l = (e) => {
              let t
              if (e.nativeEvent.isComposing || e.altKey || e.ctrlKey || e.metaKey) return
              let n = e.shiftKey ? 15 : 1
              switch (e.key) {
                case "ArrowRight":
                case "ArrowUp":
                  t = Math.min(180, T + n)
                  break
                case "ArrowLeft":
                case "ArrowDown":
                  t = Math.max(-180, T - n)
                  break
                case "Home":
                  t = -180
                  break
                case "End":
                  t = 180
                  break
                default:
                  return void m(e)
              }
              ;(e.preventDefault(), e.stopPropagation(), t !== T && d(t))
            }),
            (n[20] = m),
            (n[21] = d),
            (n[22] = T),
            (n[23] = l))
          : (l = n[23])
        let A = l
        ;(n[24] !== h || n[25] !== p || n[26] !== a.height || n[27] !== a.width || n[28] !== b
          ? ((o =
              h &&
              (0, i.jsx)("clipPath", {
                id: p,
                children: (0, i.jsx)("path", {
                  clipRule: "evenodd",
                  d: `M ${-b} ${-b} H ${a.width + b} V ${a.height + b} H ${-b} Z M 0 0 H ${a.width} V ${a.height} H 0 Z`,
                }),
              })),
            (n[24] = h),
            (n[25] = p),
            (n[26] = a.height),
            (n[27] = a.width),
            (n[28] = b),
            (n[29] = o))
          : (o = n[29]),
          n[30] !== f
            ? ((c = f.formatMessage({
                id: "imageTextEditing.layer.rotate",
                defaultMessage: "Rotate layer",
                description:
                  "Accessible name of the control that rotates the selected image layer around its center in degrees",
              })),
              (n[30] = f),
              (n[31] = c))
            : (c = n[31]),
          n[32] !== f || n[33] !== T
            ? ((g = f.formatNumber(T, {
                style: "unit",
                unit: "degree",
                unitDisplay: "long",
                maximumFractionDigits: 1,
              })),
              (n[32] = f),
              (n[33] = T),
              (n[34] = g))
            : (g = n[34]))
        let k = tY.map((e) => {
          let { x: t, y: n } = _[e],
            r = e.endsWith("w") ? 1 : -1,
            a = e.startsWith("n") ? 1 : -1
          return (0, i.jsx)(
            "path",
            {
              transform: `translate(${t} ${n}) scale(${r} ${a})`,
              d: E,
              fill: "transparent",
              pointerEvents: "fill",
              vectorEffect: "non-scaling-stroke",
              className: "touch-none",
              style: { cursor: (0, tD.SQ)(e, T) },
              onPointerDown: (e) => u(e, "rotate"),
            },
            e,
          )
        })
        ;(n[35] !== A || n[36] !== T || n[37] !== c || n[38] !== g || n[39] !== k
          ? ((v = (0, i.jsx)("g", {
              role: "slider",
              tabIndex: 0,
              "aria-label": c,
              "aria-valuemin": -180,
              "aria-valuemax": 180,
              "aria-valuenow": T,
              "aria-valuetext": g,
              className: "outline-none focus-visible:stroke-ring",
              onKeyDown: A,
              children: k,
            })),
            (n[35] = A),
            (n[36] = T),
            (n[37] = c),
            (n[38] = g),
            (n[39] = k),
            (n[40] = v))
          : (v = n[40]),
          (t = (0, i.jsxs)("g", {
            transform: `translate(${a.x} ${a.y}) rotate(${T} ${a.width / 2} ${a.height / 2})`,
            children: [
              o,
              v,
              tW.map((e) => {
                let t = (0, tG.NY)(S, e),
                  n = 2 === e.length ? y.cornerHitRadius : y.edgeHitRadius,
                  r = tX(a.width, n, b, e.includes("w"), e.includes("e")),
                  l = tX(a.height, n, b, e.includes("n"), e.includes("s"))
                return (0, i.jsxs)(
                  "g",
                  {
                    className: "focus-visible:stroke-info touch-none outline-none",
                    style: { cursor: (0, tD.WB)(e, T) ?? void 0 },
                    role: "button",
                    tabIndex: 0,
                    "aria-label": s(e),
                    onKeyDown: (t) => m(t, e),
                    onPointerDown: (t) => u(t, e),
                    children: [
                      (0, i.jsx)("circle", {
                        cx: t.x,
                        cy: t.y,
                        r: y.halfVisibleSize,
                        fill: e4.a,
                        pointerEvents: h ? "fill" : "none",
                        stroke: e4.l,
                        strokeWidth: 1,
                        vectorEffect: "non-scaling-stroke",
                      }),
                      (0, i.jsx)("rect", {
                        x: r.start,
                        y: l.start,
                        width: r.length,
                        height: l.length,
                        fill: "transparent",
                        pointerEvents: "fill",
                        clipPath: h ? `url(#${p})` : void 0,
                      }),
                    ],
                  },
                  e,
                )
              }),
            ],
          })),
          (n[0] = h),
          (n[1] = p),
          (n[2] = a.height),
          (n[3] = a.rotation),
          (n[4] = a.width),
          (n[5] = a.x),
          (n[6] = a.y),
          (n[7] = f),
          (n[8] = m),
          (n[9] = u),
          (n[10] = d),
          (n[11] = s),
          (n[12] = x),
          (n[13] = t))
      } else t = n[13]
      return t
    }
    function tX(e, t, n, i, r) {
      let a = Math.min(t, e / 4)
      return i ? { start: -n, length: n + a } : r ? { start: e - a, length: n + a } : { start: 0, length: e }
    }
    var tQ = n("LWdy")
    function tJ(e, t, n, i, r = "text") {
      if (2 === n.length || ("text" === r && ("n" === n || "s" === n))) {
        let r = (0, tG.NY)(e, n),
          a = { x: e.left + e.width / 2, y: e.top + e.height / 2 },
          l = i ? a : (0, tG.NY)(e, { n: "s", s: "n", e: "w", w: "e", nw: "se", ne: "sw", sw: "ne", se: "nw" }[n]),
          o = r.x - l.x,
          s = r.y - l.y,
          d = Math.max(Math.min(1, Math.max(1 / e.width, 1 / e.height)), 1 + (t.x * o + t.y * s) / (o * o + s * s)),
          c = e.width * d,
          u = e.height * d
        return { ...e, width: c, height: u, left: l.x + (a.x - l.x) * d - c / 2, top: l.y + (a.y - l.y) * d - u / 2 }
      }
      return "text" === r && e.width >= 24 && ("e" === n || "w" === n)
        ? (0, tQ.I)(e, t, n, i)
        : (0, tG.yz)(e, t, n, { resizeFromCenter: i, minSize: 1 }).frame
    }
    function t1(e, t, n, i) {
      let r = [],
        a = null
      for (let [l, o] of e.entries())
        for (let e = 0; e < o.stops.length; e++) {
          let s = o.stops[e]
          s.offset <= n && (null == i || i === l) && (a = s)
          let d = o.stops[e + 1]
          null != d && s.offset >= t && d.offset <= n && r.push([s.top, d.top, d.bottom, s.bottom])
        }
      return { caret: t === n ? a : null, polygons: r }
    }
    function t0(e, t, n) {
      let i = n.x - t.x,
        r = n.y - t.y,
        a = i * i + r * r,
        l = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * i + (e.y - t.y) * r) / a))
      return (e.x - t.x - l * i) ** 2 + (e.y - t.y - l * r) ** 2
    }
    var t2 = n("oD0s")
    function t3(e) {
      let t,
        n,
        a,
        l,
        s,
        d,
        u,
        m,
        h,
        f,
        p,
        x,
        v,
        y,
        b,
        w,
        I,
        M,
        j,
        C,
        E,
        S,
        T,
        _,
        A,
        k,
        P,
        R,
        N,
        z,
        L,
        D,
        O,
        B,
        U,
        F,
        $,
        H,
        K,
        V,
        G,
        q,
        W,
        Y,
        Z,
        X,
        Q,
        J,
        ee,
        et,
        en,
        ei,
        er,
        ea,
        el,
        eo,
        es,
        ed,
        ec,
        eu = (0, r.c)(243),
        {
          region: eg,
          source: em,
          fonts: eh,
          imageSize: ef,
          displayWidth: ep,
          showHover: ex,
          active: ev,
          canInteract: ey,
          disabled: eb,
          onSelect: ew,
          onKeyboardFocus: eI,
          onDeselect: eM,
          onDelete: ej,
          onChange: eC,
          onTranslatePreview: eE,
          onMoveStart: eS,
          onMoveEnd: eT,
          onUndo: e_,
          onRedo: eA,
          onEditEnd: ek,
        } = e,
        eP = (0, g.A)(),
        eR = (0, c.useRef)(null),
        eN = (0, c.useRef)(null),
        ez = (0, c.useRef)(null),
        eL = (0, c.useRef)(null),
        eD = (0, c.useRef)(null),
        eO = (0, c.useRef)(null),
        [eB, eU] = (0, c.useState)(!1),
        eF = (0, c.useRef)(null),
        e$ = (0, c.useRef)(null),
        eH = (0, c.useRef)(null),
        [eK, eV] = (0, c.useState)(!1)
      eu[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { start: 0, end: 0 }), (eu[0] = t)) : (t = eu[0])
      let [eG, eq] = (0, c.useState)(t)
      eu[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (eu[1] = n)) : (n = eu[1])
      let eW = (0, c.useRef)(n)
      if (
        (eu[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = () => () => eL.current?.stop(!0)), (l = []), (eu[2] = a), (eu[3] = l))
          : ((a = eu[2]), (l = eu[3])),
        (0, c.useEffect)(a, l),
        eu[4] !== eK
          ? ((s = () => {
              let e = eR.current,
                t = eN.current
              if (!eK || null == e || null == t) return
              let n = (e) => {
                  !e.ctrlKey && (e.stopPropagation(), t.dispatchEvent(new WheelEvent("wheel", e)) || e.preventDefault())
                },
                i = (e) => {
                  1 === e.button &&
                    (e.stopPropagation(), t.dispatchEvent(new PointerEvent("pointerdown", e)) || e.preventDefault())
                }
              return (
                e.addEventListener("wheel", n, { passive: !1 }),
                e.addEventListener("pointerdown", i),
                () => {
                  ;(e.removeEventListener("wheel", n), e.removeEventListener("pointerdown", i))
                }
              )
            }),
            (d = [eK]),
            (eu[4] = eK),
            (eu[5] = s),
            (eu[6] = d))
          : ((s = eu[5]), (d = eu[6])),
        (0, c.useEffect)(s, d),
        eu[7] !== ev || eu[8] !== ey || eu[9] !== eb || eu[10] !== em.items
          ? ((u = () => {
              let e = eL.current?.translationItems
              ;(ev && ey && !eb && (null == e || e === em.items)) ||
                (eL.current?.stop(!0),
                (e$.current = null),
                ey || !ev || eb || eF.current?.(),
                (eF.current = null),
                (eO.current = null))
            }),
            (m = [ev, ey, eb, em.items]),
            (eu[7] = ev),
            (eu[8] = ey),
            (eu[9] = eb),
            (eu[10] = em.items),
            (eu[11] = u),
            (eu[12] = m))
          : ((u = eu[11]), (m = eu[12])),
        (0, c.useLayoutEffect)(u, m),
        eu[13] !== eg.id || eu[14] !== eg.wrapText || eu[15] !== em.items)
      ) {
        let e
        ;(eu[19] !== eg.id ? ((e = (e) => e.id === eg.id), (eu[19] = eg.id), (eu[20] = e)) : (e = eu[20]),
          (f = em.items.find(e)),
          (p =
            null == (h = eg.wrapText || f?.kind !== "text" || "editable" !== f.rendering.mode ? null : f.rendering)
              ? ""
              : [h.baseline, h.upper_contour, ...(h.line_layout ?? []).flatMap(t8)].filter(Boolean).join(" ")),
          (eu[13] = eg.id),
          (eu[14] = eg.wrapText),
          (eu[15] = em.items),
          (eu[16] = h),
          (eu[17] = f),
          (eu[18] = p))
      } else ((h = eu[16]), (f = eu[17]), (p = eu[18]))
      let eY = p
      eu[21] !== eh || eu[22] !== eg || eu[23] !== em
        ? ((x = () => {
            try {
              eW.current = (0, ti.l5)(em, eh, eg.id)
            } catch {
              eW.current = []
            }
            let e = ez.current
            if (null != e) {
              let t = t7(eg),
                n = t1(eW.current, 0, eg.text.length)
                  .polygons.filter((e) =>
                    e.some((e) => {
                      let { x: n, y: i } = t(e)
                      return n < 0 || n > eg.width || i < 0 || i > eg.height
                    }),
                  )
                  .map(t5)
                  .join(" ")
              e.setAttribute("d", n)
            }
          }),
          (eu[21] = eh),
          (eu[22] = eg),
          (eu[23] = em),
          (eu[24] = x))
        : (x = eu[24])
      let eZ = (0, c.useEffectEvent)(x)
      ;(eu[25] !== ev || eu[26] !== h || eu[27] !== eZ
        ? ((v = () => {
            if (ev) return void eZ()
            ;((eW.current = []), ez.current?.removeAttribute("d"))
            let e = eN.current?.parentElement
            if (null == h || null == e || "u" < typeof IntersectionObserver) return
            let t = new IntersectionObserver((e) => {
              let [n] = e
              n?.isIntersecting && (eZ(), t.disconnect())
            })
            return (t.observe(e), () => t.disconnect())
          }),
          (eu[25] = ev),
          (eu[26] = h),
          (eu[27] = eZ),
          (eu[28] = v))
        : (v = eu[28]),
        eu[29] !== ev || eu[30] !== h || eu[31] !== eh || eu[32] !== f || eu[33] !== em.assets || eu[34] !== em.snapshot
          ? ((y = [ev, f, h, eh, em.snapshot, em.assets]),
            (eu[29] = ev),
            (eu[30] = h),
            (eu[31] = eh),
            (eu[32] = f),
            (eu[33] = em.assets),
            (eu[34] = em.snapshot),
            (eu[35] = y))
          : (y = eu[35]),
        (0, c.useLayoutEffect)(v, y),
        eu[36] !== ev || eu[37] !== eK || eu[38] !== eG || eu[39] !== eg
          ? ((b = () => {
              let e = eD.current,
                t = eR.current
              if (null == e || null == t || (e.replaceChildren(), !ev)) return
              let n = t7(eg)
              if (!eK) return
              let i = t1(eW.current, t.selectionStart, t.selectionEnd, eG.caretLineIndex)
              for (let t of i.polygons) {
                let i = document.createElementNS("http://www.w3.org/2000/svg", "polygon")
                ;(i.setAttribute("class", "fill-current opacity-20"),
                  i.setAttribute(
                    "points",
                    t
                      .map((e) => {
                        let t = n(e)
                        return `${t.x},${t.y}`
                      })
                      .join(" "),
                  ),
                  e.append(i))
              }
              if (null == i.caret) return
              let r = n(i.caret.top),
                a = n(i.caret.bottom),
                l = e.ownerDocument,
                o = l.createElementNS("http://www.w3.org/2000/svg", "path")
              if (
                (o.setAttribute("d", `M ${r.x} ${r.y} L ${a.x} ${a.y}`),
                o.setAttribute("stroke", eg.color),
                o.setAttribute("stroke-width", "1.5"),
                o.setAttribute("vector-effect", "non-scaling-stroke"),
                e.append(o),
                "u" < typeof IntersectionObserver)
              )
                return
              let s = !1,
                d = () => {
                  o.classList.toggle("blink-Zouw9D", s && !l.hidden)
                },
                c = new IntersectionObserver((e) => {
                  let [t] = e
                  ;((s = t.isIntersecting), d())
                })
              return (
                c.observe(o),
                l.addEventListener("visibilitychange", d),
                () => {
                  ;(c.disconnect(), l.removeEventListener("visibilitychange", d))
                }
              )
            }),
            (w = [eg, eG, ev, eK]),
            (eu[36] = ev),
            (eu[37] = eK),
            (eu[38] = eG),
            (eu[39] = eg),
            (eu[40] = b),
            (eu[41] = w))
          : ((b = eu[40]), (w = eu[41])),
        (0, c.useLayoutEffect)(b, w),
        eu[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = () => {
              let e = eR.current
              if (null != e) {
                let t = "backward" === e.selectionDirection ? e.selectionStart : e.selectionEnd
                eH.current?.offset !== t && (eH.current = null)
                let n = e.selectionStart,
                  i = e.selectionEnd,
                  r = eH.current?.lineIndex
                eq((e) =>
                  e.start === n && e.end === i && e.caretLineIndex === r ? e : { start: n, end: i, caretLineIndex: r },
                )
              }
            }),
            (eu[42] = I))
          : (I = eu[42]))
      let eX = I
      eu[43] !== ef.height || eu[44] !== ef.width
        ? ((M = (e, t) => {
            let n = eR.current?.closest("[data-image-text-surface]")
            if (null == n) return null
            let i = n.getBoundingClientRect()
            return { x: ((e - i.left) * ef.width) / i.width, y: ((t - i.top) * ef.height) / i.height }
          }),
          (eu[43] = ef.height),
          (eu[44] = ef.width),
          (eu[45] = M))
        : (M = eu[45])
      let eQ = M
      eu[46] !== eQ || eu[47] !== eg.text
        ? ((j = (e, t) => {
            let n = eQ(e, t)
            return null == n
              ? { offset: eg.text.length, lineIndex: 0 }
              : (function (e, t) {
                  let n = { offset: 0, lineIndex: 0 },
                    i = 1 / 0
                  for (let [r, a] of e.entries())
                    for (let e of a.stops) {
                      let a = t0(t, e.top, e.bottom)
                      a < i && ((n = { offset: e.offset, lineIndex: r }), (i = a))
                    }
                  return n
                })(eW.current, n)
          }),
          (eu[46] = eQ),
          (eu[47] = eg.text),
          (eu[48] = j))
        : (j = eu[48])
      let eJ = j
      eu[49] !== ep || eu[50] !== eQ || eu[51] !== ef.width
        ? ((C = (e, t) => {
            let n = eQ(e, t)
            return (
              null == n ||
              null !=
                (function (e, t, n = 0) {
                  for (let i of e)
                    for (let e = 0; e < i.stops.length - 1; e++) {
                      let r = i.stops[e],
                        a = i.stops[e + 1],
                        l = [r.top, a.top, a.bottom, r.bottom],
                        o = !1
                      for (let e = 0; e < l.length; e++) {
                        let i = l[e],
                          a = l[(e + 1) % l.length]
                        if (t0(t, i, a) <= n ** 2) return r.offset
                        i.y > t.y != a.y > t.y && t.x < ((a.x - i.x) * (t.y - i.y)) / (a.y - i.y) + i.x && (o = !o)
                      }
                      if (o) return r.offset
                    }
                  return null
                })(eW.current, n, (2 * ef.width) / ep)
            )
          }),
          (eu[49] = ep),
          (eu[50] = eQ),
          (eu[51] = ef.width),
          (eu[52] = C))
        : (C = eu[52])
      let e1 = C
      eu[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (e, t, n, i) => {
            ;((void 0 !== n && n) || (eH.current = null == i ? null : { lineIndex: i, offset: t }),
              eR.current?.setSelectionRange(Math.min(e, t), Math.max(e, t), e > t ? "backward" : "forward"),
              eX())
          }),
          (eu[53] = E))
        : (E = eu[53])
      let e0 = E
      eu[54] !== eg.rotation
        ? ((S = (e) => {
            let t = e.currentTarget,
              n = "backward" === t.selectionDirection,
              i = n ? t.selectionStart : t.selectionEnd,
              r = -1
            if (eH.current?.offset === i) {
              let e = eW.current[eH.current.lineIndex]
              null != e && e.start <= i && e.end >= i && (r = eH.current.lineIndex)
            }
            if (-1 === r) for (let [e, t] of eW.current.entries()) t.start <= i && t.end >= i && (r = e)
            let a = eW.current[r]
            if (null == a) return
            let l = ((eg.rotation ?? 0) * Math.PI) / 180,
              o = (e) => e.top.x * Math.cos(l) + e.top.y * Math.sin(l),
              s = a.stops.findLast((e) => e.offset <= i)
            if (null == s) return
            let d = eH.current?.x ?? o(s),
              c = "ArrowUp" === e.key ? -1 : 1,
              u = Math.max(0, Math.min(eW.current.length - 1, r + c)),
              g = eW.current[u],
              m = g.stops[0]
            if (u === r) m = c < 0 ? g.stops[0] : g.stops.at(-1)
            else {
              let e = 1 / 0
              for (let t of g.stops) {
                let n = Math.abs(o(t) - d)
                n < e && ((m = t), (e = n))
              }
            }
            if (null == m) return
            ;(e.preventDefault(), e.stopPropagation(), (eH.current = { lineIndex: u, offset: m.offset, x: d }))
            let h = m.offset
            ;(e.shiftKey && (h = n ? t.selectionEnd : t.selectionStart), e0(h, m.offset, !0))
          }),
          (eu[54] = eg.rotation),
          (eu[55] = S))
        : (S = eu[55])
      let e2 = S
      eu[56] !== eJ || eu[57] !== eg.text
        ? ((T = (e, t, n, i) => {
            let { offset: r, lineIndex: a } = eJ(e, t),
              l = eR.current
            if (null == l) return r
            if ((l.focus({ preventScroll: !0 }), 2 === n)) return (e0(0, eg.text.length), 0)
            for (let e of eD.current?.getAnimations?.({ subtree: !0 }) ?? []) e.currentTime = 0
            let o = r
            return (
              void 0 !== i && i && (o = "backward" === l.selectionDirection ? l.selectionEnd : l.selectionStart),
              e0(o, r, !1, a),
              o
            )
          }),
          (eu[56] = eJ),
          (eu[57] = eg.text),
          (eu[58] = T))
        : (T = eu[58])
      let e3 = T
      eu[59] !== eg
        ? ((_ = (e, t, n, i) => {
            let r = tJ(e, t, n, i)
            return r.left === e.left && r.top === e.top && r.width === e.width && r.height === e.height
              ? eg
              : {
                  ...eg,
                  x: r.left,
                  y: r.top,
                  width: r.width,
                  height: r.height,
                  ...("e" === n || "w" === n ? { wrapText: !0 } : { fontSize: (eg.fontSize * r.width) / e.width }),
                }
          }),
          (eu[59] = eg),
          (eu[60] = _))
        : (_ = eu[60])
      let e4 = _
      eu[61] !== ev ||
      eu[62] !== ey ||
      eu[63] !== eb ||
      eu[64] !== eC ||
      eu[65] !== ej ||
      eu[66] !== eM ||
      eu[67] !== eT ||
      eu[68] !== eS ||
      eu[69] !== eg ||
      eu[70] !== e4 ||
      eu[71] !== em
        ? ((A = (e, t) => {
            if (e.nativeEvent.isComposing || eb || !ey) return
            if ("Escape" === e.key && null != eL.current) {
              ;(e.preventDefault(), e.stopPropagation(), eL.current.stop(!0))
              return
            }
            if (
              ev &&
              null == eL.current &&
              !(e.target instanceof HTMLTextAreaElement) &&
              ("Delete" === e.key || "Backspace" === e.key || "Escape" === e.key)
            ) {
              ;(e.preventDefault(), e.stopPropagation(), "Escape" === e.key ? eM() : ej())
              return
            }
            if ("Enter" === e.key && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey && null == eL.current) {
              ;(e.preventDefault(), eR.current?.focus({ preventScroll: !0 }), e0(0, eg.text.length))
              return
            }
            if (null != eL.current || e.metaKey || e.ctrlKey || (e.altKey && null == t)) return
            let n = (0, tO.pv)(e.key, e.shiftKey)
            if (null == n) return
            let { dx: i, dy: r } = n
            ;(e.preventDefault(), e.stopPropagation())
            let a = eg
            if (null != t) {
              let n = (0, ti.yw)(em, eg.id)
              null != n && (a = e4({ left: n.x, top: n.y, ...n }, { x: i, y: r }, t, e.altKey))
            } else a = { ...eg, x: eg.x + i, y: eg.y + r }
            a !== eg && (eS?.(), eC(a, ne(t)), eT?.(!1))
          }),
          (eu[61] = ev),
          (eu[62] = ey),
          (eu[63] = eb),
          (eu[64] = eC),
          (eu[65] = ej),
          (eu[66] = eM),
          (eu[67] = eT),
          (eu[68] = eS),
          (eu[69] = eg),
          (eu[70] = e4),
          (eu[71] = em),
          (eu[72] = A))
        : (A = eu[72])
      let e6 = A
      eu[73] !== ey ||
      eu[74] !== eb ||
      eu[75] !== ef.height ||
      eu[76] !== ef.width ||
      eu[77] !== eC ||
      eu[78] !== eT ||
      eu[79] !== eS ||
      eu[80] !== ew ||
      eu[81] !== eE ||
      eu[82] !== eg ||
      eu[83] !== e4 ||
      eu[84] !== em
        ? ((k = (e, t, n) => {
            if (eb || !ey || null != eL.current || 0 !== e.button || !1 === e.isPrimary) return
            let i = e.currentTarget,
              r = i.closest("[data-image-text-surface]")
            if (null == r) return
            let a = (0, ti.yw)(em, eg.id)
            if (null == a) return
            let l = { left: a.x, top: a.y, ...a }
            ;(e.preventDefault(), e.stopPropagation(), ew())
            let o = e.pointerId,
              s = r.getBoundingClientRect()
            if (s.width <= 0 || s.height <= 0) return
            let d = { x: ((e.clientX - s.left) * ef.width) / s.width, y: ((e.clientY - s.top) * ef.height) / s.height },
              c = { x: e.clientX, y: e.clientY },
              u = "rotate" === t ? (0, tG.QX)(l, d) : 0,
              g = null == t ? eE : void 0,
              m = !1,
              h = !1,
              f = eg,
              p = (e, t) => {
                eL.current?.stop === p &&
                  ((eL.current = null),
                  eU(!1),
                  i.removeEventListener("pointermove", x),
                  i.removeEventListener("pointerup", v),
                  i.removeEventListener("pointercancel", y),
                  i.removeEventListener("lostpointercapture", y),
                  b(),
                  e || (eF.current = null),
                  h && (null != t ? eC(t) : e && null == eT && null == g && eC(eg), eT?.(e)))
              },
              x = (e) => {
                let n
                if (
                  !(e instanceof PointerEvent) ||
                  e.pointerId !== o ||
                  (!m && 2 >= Math.hypot(e.clientX - c.x, e.clientY - c.y))
                )
                  return
                ;((m = !0), (eO.current = null))
                let s = r.getBoundingClientRect(),
                  p = {
                    x: ((e.clientX - s.left) * ef.width) / s.width - d.x,
                    y: ((e.clientY - s.top) * ef.height) / s.height - d.y,
                  }
                if ("rotate" === t) {
                  let t = (0, tG.QX)(l, { x: d.x + p.x, y: d.y + p.y }),
                    r = (0, tG.EZ)(eg.rotation + t - u)
                  ;((n = { ...eg, rotation: e.shiftKey ? (0, tG.Yv)(r, 15) : r }),
                    (i.style.cursor = (0, tD.SQ)((0, tG.Aj)(l, d), n.rotation)))
                } else
                  null != t
                    ? ((n = e4(l, p, t, e.altKey)), (i.style.cursor = (0, tD.WB)(t, a.rotation) ?? ""))
                    : ((i.style.cursor = "move"),
                      e.shiftKey && (p = (0, tG._7)(p)),
                      (n = { ...eg, x: eg.x + p.x, y: eg.y + p.y }))
                ;(n.x !== f.x ||
                  n.y !== f.y ||
                  n.width !== f.width ||
                  n.height !== f.height ||
                  n.wrapText !== f.wrapText ||
                  n.rotation !== f.rotation) &&
                  (h || ((h = !0), eU("rotate" !== t && "scale" === ne(t)), null != g ? eS?.(eg) : eS?.()),
                  (f = n),
                  null != g ? g(n) : eC(n, "rotate" === t ? void 0 : ne(t)))
              },
              v = (e) => {
                e instanceof PointerEvent &&
                  e.pointerId === o &&
                  (x(e), p(!1, null != g && (f.x !== eg.x || f.y !== eg.y) ? f : void 0), m || n?.(e))
              },
              y = () => p(!0)
            ;((eL.current = { stop: p, translationItems: null == g ? void 0 : em.items }),
              i.addEventListener("pointermove", x),
              i.addEventListener("pointerup", v),
              i.addEventListener("pointercancel", y),
              i.addEventListener("lostpointercapture", y))
            let b = (0, t2.O)(i, e.nativeEvent, y)
            null != n || "rotate" === t ? eN.current?.focus({ preventScroll: !0 }) : i.focus({ preventScroll: !0 })
          }),
          (eu[73] = ey),
          (eu[74] = eb),
          (eu[75] = ef.height),
          (eu[76] = ef.width),
          (eu[77] = eC),
          (eu[78] = eT),
          (eu[79] = eS),
          (eu[80] = ew),
          (eu[81] = eE),
          (eu[82] = eg),
          (eu[83] = e4),
          (eu[84] = em),
          (eu[85] = k))
        : (k = eu[85])
      let e5 = k
      eu[86] !== ev ||
      eu[87] !== ey ||
      eu[88] !== eb ||
      eu[89] !== eK ||
      eu[90] !== e1 ||
      eu[91] !== e5 ||
      eu[92] !== eg.id ||
      eu[93] !== e3
        ? ((P = (e) => {
            if (0 !== e.button || !1 === e.isPrimary || eb || !ey) return
            let t = eR.current
            if ("touch" === e.pointerType && t?.matches(":focus") === !0) {
              let { selectionStart: e, selectionEnd: n, selectionDirection: i } = t,
                r = eH.current
              eF.current = () => {
                ;(t.focus({ preventScroll: !0 }), t.setSelectionRange(e, n, i), (eH.current = r), eX())
              }
            }
            let n = e.shiftKey ? null : (0, tq.cX)(eO.current, e, eg.id)
            eO.current = n
            let i = n?.count ?? 1
            if (!ev || !eK || (1 === i && !e1(e.clientX, e.clientY)))
              return void e5(e, void 0, (e) => {
                2 === i && e3(e.clientX, e.clientY, i)
              })
            ;(e.preventDefault(), e.stopPropagation())
            let r = e3(e.clientX, e.clientY, i, e.shiftKey)
            ;(2 !== i && (e$.current = { pointerId: e.pointerId, anchor: r }),
              eR.current?.setPointerCapture(e.pointerId))
          }),
          (eu[86] = ev),
          (eu[87] = ey),
          (eu[88] = eb),
          (eu[89] = eK),
          (eu[90] = e1),
          (eu[91] = e5),
          (eu[92] = eg.id),
          (eu[93] = e3),
          (eu[94] = P))
        : (P = eu[94])
      let e9 = P,
        e8 = Math.max(ep / ef.width, 1e-4)
      eu[95] !== eg.height || eu[96] !== eg.width || eu[97] !== eg.wrapText
        ? ((R = eg.wrapText ? (0, ti.Yo)(eg.width, eg.height) : null),
          (eu[95] = eg.height),
          (eu[96] = eg.width),
          (eu[97] = eg.wrapText),
          (eu[98] = R))
        : (R = eu[98])
      let e7 = R
      ;(eu[99] !== ev ||
      eu[100] !== eY ||
      eu[101] !== ef.height ||
      eu[102] !== ef.width ||
      eu[103] !== eg.height ||
      eu[104] !== eg.rotation ||
      eu[105] !== eg.width ||
      eu[106] !== eg.x ||
      eu[107] !== eg.y
        ? ((N =
            !ev &&
            "" !== eY &&
            (0, i.jsx)("path", {
              "aria-hidden": !0,
              visibility: "hidden",
              pointerEvents: "none",
              d: eY,
              transform: `rotate(${eg.rotation} ${eg.x + eg.width / 2} ${eg.y + eg.height / 2}) scale(${ef.width} ${ef.height})`,
            })),
          (eu[99] = ev),
          (eu[100] = eY),
          (eu[101] = ef.height),
          (eu[102] = ef.width),
          (eu[103] = eg.height),
          (eu[104] = eg.rotation),
          (eu[105] = eg.width),
          (eu[106] = eg.x),
          (eu[107] = eg.y),
          (eu[108] = N))
        : (N = eu[108]),
        eu[109] !== ev || eu[110] !== ey || eu[111] !== eb || eu[112] !== h || eu[113] !== e9 || eu[114] !== ex
          ? ((z =
              null != h &&
              (0, i.jsx)("path", {
                ref: ez,
                "aria-hidden": !0,
                className: (0, o.A)("touch-none", ev && "cursor-move", !ev && ex && "cursor-interaction"),
                fill: "transparent",
                pointerEvents: ey && !eb ? "fill" : "none",
                onPointerDown: e9,
              })),
            (eu[109] = ev),
            (eu[110] = ey),
            (eu[111] = eb),
            (eu[112] = h),
            (eu[113] = e9),
            (eu[114] = ex),
            (eu[115] = z))
          : (z = eu[115]))
      let te = ey && "pointer-events-auto"
      eu[116] !== te
        ? ((L = (0, o.A)("overflow-visible outline-none", te)), (eu[116] = te), (eu[117] = L))
        : (L = eu[117])
      let tt = eg.x,
        tn = eg.y,
        tr = eg.width,
        ta = eg.height,
        tl = `rotate(${eg.rotation} ${eg.x + eg.width / 2} ${eg.y + eg.height / 2})`,
        to = eg.id,
        ts = ev ? "" : void 0,
        td = ey && !eb ? 0 : -1
      ;(eu[118] !== eP || eu[119] !== eg.text
        ? ((D = eg.text || eP.formatMessage(nt.emptyText)), (eu[118] = eP), (eu[119] = eg.text), (eu[120] = D))
        : (D = eu[120]),
        eu[121] !== ev || eu[122] !== eI || eu[123] !== ew
          ? ((O = (e) => {
              e.target === e.currentTarget &&
                (ev || ew(), null == eL.current && e.currentTarget.matches(":focus-visible") && eI())
            }),
            (eu[121] = ev),
            (eu[122] = eI),
            (eu[123] = ew),
            (eu[124] = O))
          : (O = eu[124]),
        eu[125] !== e6
          ? ((B = (e) => {
              e.target === e.currentTarget && e6(e)
            }),
            (eu[125] = e6),
            (eu[126] = B))
          : (B = eu[126]))
      let tc = ev && "cursor-move",
        tu = !ev && ex && "cursor-interaction"
      ;(eu[127] !== tc || eu[128] !== tu
        ? ((U = (0, o.A)("relative h-full w-full touch-none", tc, tu)), (eu[127] = tc), (eu[128] = tu), (eu[129] = U))
        : (U = eu[129]),
        eu[130] !== e9
          ? ((F = (e) => {
              e.target === e.currentTarget && e9(e)
            }),
            (eu[130] = e9),
            (eu[131] = F))
          : (F = eu[131]),
        eu[132] !== eK || eu[133] !== e1
          ? (($ = (e) => {
              e.target === e.currentTarget &&
                null == eL.current &&
                (e.currentTarget.style.cursor = eK && e1(e.clientX, e.clientY) ? "text" : "")
            }),
            (eu[132] = eK),
            (eu[133] = e1),
            (eu[134] = $))
          : ($ = eu[134]))
      let tg = !eK && "pointer-events-none"
      eu[135] !== tg
        ? ((H = (0, o.A)(
            "absolute inset-0 block h-full w-full resize-none overflow-hidden border-0 bg-transparent p-0 opacity-0 outline-none select-text",
            tg,
          )),
          (eu[135] = tg),
          (eu[136] = H))
        : (H = eu[136])
      let tm = `${eg.lineHeight}px`
      ;(eu[137] !== eg.fontFamily ||
      eu[138] !== eg.fontSize ||
      eu[139] !== eg.letterSpacing ||
      eu[140] !== eg.wordSpacing ||
      eu[141] !== tm
        ? ((K = {
            fontFamily: eg.fontFamily,
            fontSize: eg.fontSize,
            lineHeight: tm,
            letterSpacing: eg.letterSpacing,
            wordSpacing: eg.wordSpacing,
          }),
          (eu[137] = eg.fontFamily),
          (eu[138] = eg.fontSize),
          (eu[139] = eg.letterSpacing),
          (eu[140] = eg.wordSpacing),
          (eu[141] = tm),
          (eu[142] = K))
        : (K = eu[142]),
        eu[143] !== eP
          ? ((V = eP.formatMessage({
              id: "imageTextEditing.textContent",
              defaultMessage: "Text content",
              description: "Edit the words inside the selected text region on the image",
            })),
            (eu[143] = eP),
            (eu[144] = V))
          : (V = eu[144]))
      let th = eg.wrapText ? "soft" : "off"
      ;(eu[145] !== ew
        ? ((G = () => {
            ;(eV(!0), ew(), eX())
          }),
          (eu[145] = ew),
          (eu[146] = G))
        : (G = eu[146]),
        eu[147] !== ek
          ? ((q = () => {
              ;(eV(!1), ek())
            }),
            (eu[147] = ek),
            (eu[148] = q))
          : (q = eu[148]),
        eu[149] !== eC || eu[150] !== eg
          ? ((W = (e) => {
              ;(eL.current?.stop(!1), (eH.current = null), eC({ ...eg, text: e.currentTarget.value }), eX())
            }),
            (eu[149] = eC),
            (eu[150] = eg),
            (eu[151] = W))
          : (W = eu[151]),
        eu[152] !== e2 || eu[153] !== e6 || eu[154] !== eg.wrapText
          ? ((Y = (e) => {
              if (!e.nativeEvent.isComposing) {
                if (null != eL.current) return void e6(e)
                if (
                  eg.wrapText &&
                  ("ArrowUp" === e.key || "ArrowDown" === e.key) &&
                  !e.metaKey &&
                  !e.ctrlKey &&
                  !e.altKey
                )
                  return void e2(e)
                ;(["Shift", "Control", "Alt", "Meta"].includes(e.key) || (eH.current = null),
                  "Escape" === e.key &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    (eO.current = null),
                    eN.current?.focus({ preventScroll: !0 })))
              }
            }),
            (eu[152] = e2),
            (eu[153] = e6),
            (eu[154] = eg.wrapText),
            (eu[155] = Y))
          : (Y = eu[155]),
        eu[156] !== eA || eu[157] !== e_
          ? ((Z = (e) => {
              e.nativeEvent instanceof InputEvent &&
                ("historyUndo" === e.nativeEvent.inputType || "historyRedo" === e.nativeEvent.inputType) &&
                (e.preventDefault(),
                null != eL.current ? eL.current.stop(!0) : "historyUndo" === e.nativeEvent.inputType ? e_() : eA())
            }),
            (eu[156] = eA),
            (eu[157] = e_),
            (eu[158] = Z))
          : (Z = eu[158]),
        eu[159] !== ev || eu[160] !== eJ || eu[161] !== e1
          ? ((X = (e) => {
              if (e$.current?.pointerId === e.pointerId) {
                let { offset: t, lineIndex: n } = eJ(e.clientX, e.clientY)
                e0(e$.current.anchor, t, !1, n)
              } else
                null == eL.current && (e.currentTarget.style.cursor = !ev || e1(e.clientX, e.clientY) ? "text" : "move")
            }),
            (eu[159] = ev),
            (eu[160] = eJ),
            (eu[161] = e1),
            (eu[162] = X))
          : (X = eu[162]),
        eu[163] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (e) => {
              !1 !== e.isPrimary && ((e$.current = null), (eF.current = null))
            }),
            (J = (e) => {
              !1 !== e.isPrimary && ((e$.current = null), eF.current?.(), (eF.current = null))
            }),
            (ee = () => {
              e$.current = null
            }),
            (eu[163] = Q),
            (eu[164] = J),
            (eu[165] = ee))
          : ((Q = eu[163]), (J = eu[164]), (ee = eu[165])),
        eu[166] !== eb ||
        eu[167] !== e9 ||
        eu[168] !== eg.text ||
        eu[169] !== H ||
        eu[170] !== K ||
        eu[171] !== V ||
        eu[172] !== th ||
        eu[173] !== G ||
        eu[174] !== q ||
        eu[175] !== W ||
        eu[176] !== Y ||
        eu[177] !== Z ||
        eu[178] !== X
          ? ((et = (0, i.jsx)("textarea", {
              ref: eR,
              className: H,
              style: K,
              "aria-label": V,
              disabled: eb,
              maxLength: 4e3,
              tabIndex: -1,
              spellCheck: !1,
              wrap: th,
              value: eg.text,
              onFocus: G,
              onBlur: q,
              onSelect: eX,
              onChange: W,
              onKeyDown: Y,
              onBeforeInput: Z,
              onPointerDown: e9,
              onPointerMove: X,
              onPointerUp: Q,
              onPointerCancel: J,
              onLostPointerCapture: ee,
            })),
            (eu[166] = eb),
            (eu[167] = e9),
            (eu[168] = eg.text),
            (eu[169] = H),
            (eu[170] = K),
            (eu[171] = V),
            (eu[172] = th),
            (eu[173] = G),
            (eu[174] = q),
            (eu[175] = W),
            (eu[176] = Y),
            (eu[177] = Z),
            (eu[178] = X),
            (eu[179] = et))
          : (et = eu[179]))
      let tf = eg.wrapText ? "overflow-hidden" : "overflow-visible"
      eu[180] !== tf
        ? ((en = (0, o.A)("pointer-events-none absolute inset-0 h-full w-full text-info", tf)),
          (eu[180] = tf),
          (eu[181] = en))
        : (en = eu[181])
      let tp = `0 0 ${eg.width} ${eg.height}`
      return (
        eu[182] !== e7
          ? ((ei = null == e7 ? void 0 : { clipPath: `inset(${e7.top}px ${e7.right}px ${e7.bottom}px ${e7.left}px)` }),
            (eu[182] = e7),
            (eu[183] = ei))
          : (ei = eu[183]),
        eu[184] !== en || eu[185] !== tp || eu[186] !== ei
          ? ((er = (0, i.jsx)("svg", { ref: eD, className: en, viewBox: tp, style: ei, "aria-hidden": !0 })),
            (eu[184] = en),
            (eu[185] = tp),
            (eu[186] = ei),
            (eu[187] = er))
          : (er = eu[187]),
        eu[188] !== eP || eu[189] !== eg.fontSize || eu[190] !== eB || eu[191] !== e8
          ? ((ea =
              eB &&
              (0, i.jsx)("span", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute bottom-full left-0 z-10 origin-bottom-left rounded-full bg-surface-elevated-secondary px-2 py-0.5 text-xs whitespace-nowrap text-default shadow",
                style: { transform: `scale(${1 / e8})` },
                children: eP.formatMessage(nt.sizeDuringDrag, {
                  size: eP.formatNumber(eg.fontSize, { maximumFractionDigits: 1 }),
                }),
              })),
            (eu[188] = eP),
            (eu[189] = eg.fontSize),
            (eu[190] = eB),
            (eu[191] = e8),
            (eu[192] = ea))
          : (ea = eu[192]),
        eu[193] !== ev ||
        eu[194] !== ey ||
        eu[195] !== eb ||
        eu[196] !== eK ||
        eu[197] !== eP ||
        eu[198] !== e6 ||
        eu[199] !== e9 ||
        eu[200] !== eg.height ||
        eu[201] !== eg.width
          ? ((el =
              ev &&
              !eb &&
              ey &&
              (0, i.jsx)("svg", {
                className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                viewBox: `0 0 ${eg.width} ${eg.height}`,
                children: (0, i.jsx)("rect", {
                  width: eg.width,
                  height: eg.height,
                  className: "cursor-move touch-none outline-none",
                  fill: "transparent",
                  pointerEvents: eK ? "none" : "fill",
                  role: "button",
                  tabIndex: 0,
                  "aria-label": eP.formatMessage({
                    id: "imageTextEditing.moveText",
                    defaultMessage: "Move text",
                    description: "Move the selected image text by dragging its body or using the arrow keys",
                  }),
                  onKeyDown: (e) => e6(e),
                  onPointerDown: e9,
                }),
              })),
            (eu[193] = ev),
            (eu[194] = ey),
            (eu[195] = eb),
            (eu[196] = eK),
            (eu[197] = eP),
            (eu[198] = e6),
            (eu[199] = e9),
            (eu[200] = eg.height),
            (eu[201] = eg.width),
            (eu[202] = el))
          : (el = eu[202]),
        eu[203] !== U ||
        eu[204] !== F ||
        eu[205] !== $ ||
        eu[206] !== et ||
        eu[207] !== er ||
        eu[208] !== ea ||
        eu[209] !== el
          ? ((eo = (0, i.jsxs)("div", {
              className: U,
              onPointerDown: F,
              onPointerMove: $,
              children: [et, er, ea, el],
            })),
            (eu[203] = U),
            (eu[204] = F),
            (eu[205] = $),
            (eu[206] = et),
            (eu[207] = er),
            (eu[208] = ea),
            (eu[209] = el),
            (eu[210] = eo))
          : (eo = eu[210]),
        eu[211] !== eg.height ||
        eu[212] !== eg.id ||
        eu[213] !== eg.width ||
        eu[214] !== eg.x ||
        eu[215] !== eg.y ||
        eu[216] !== L ||
        eu[217] !== tl ||
        eu[218] !== ts ||
        eu[219] !== td ||
        eu[220] !== D ||
        eu[221] !== O ||
        eu[222] !== B ||
        eu[223] !== eo
          ? ((es = (0, i.jsx)("foreignObject", {
              ref: eN,
              className: L,
              x: tt,
              y: tn,
              width: tr,
              height: ta,
              transform: tl,
              "data-image-text-region": to,
              "data-image-text-selected": ts,
              tabIndex: td,
              role: "group",
              "aria-label": D,
              onFocus: O,
              onKeyDown: B,
              onPointerDown: t6,
              onContextMenu: t4,
              children: eo,
            })),
            (eu[211] = eg.height),
            (eu[212] = eg.id),
            (eu[213] = eg.width),
            (eu[214] = eg.x),
            (eu[215] = eg.y),
            (eu[216] = L),
            (eu[217] = tl),
            (eu[218] = ts),
            (eu[219] = td),
            (eu[220] = D),
            (eu[221] = O),
            (eu[222] = B),
            (eu[223] = eo),
            (eu[224] = es))
          : (es = eu[224]),
        eu[225] !== ev ||
        eu[226] !== ey ||
        eu[227] !== eb ||
        eu[228] !== eK ||
        eu[229] !== eP ||
        eu[230] !== eC ||
        eu[231] !== e6 ||
        eu[232] !== e5 ||
        eu[233] !== eT ||
        eu[234] !== eS ||
        eu[235] !== eg ||
        eu[236] !== e8
          ? ((ed =
              ev &&
              !eb &&
              ey &&
              (0, i.jsx)(tZ, {
                frame: eg,
                zoom: e8,
                editingText: eK,
                resizeLabel: (e) => eP.formatMessage(nt[e]),
                onRotate: (e) => {
                  null == eL.current && (eS?.(), eC({ ...eg, rotation: e }), eT?.(!1))
                },
                onPointerDown: e5,
                onKeyDown: e6,
              })),
            (eu[225] = ev),
            (eu[226] = ey),
            (eu[227] = eb),
            (eu[228] = eK),
            (eu[229] = eP),
            (eu[230] = eC),
            (eu[231] = e6),
            (eu[232] = e5),
            (eu[233] = eT),
            (eu[234] = eS),
            (eu[235] = eg),
            (eu[236] = e8),
            (eu[237] = ed))
          : (ed = eu[237]),
        eu[238] !== N || eu[239] !== z || eu[240] !== es || eu[241] !== ed
          ? ((ec = (0, i.jsxs)(i.Fragment, { children: [N, z, es, ed] })),
            (eu[238] = N),
            (eu[239] = z),
            (eu[240] = es),
            (eu[241] = ed),
            (eu[242] = ec))
          : (ec = eu[242]),
        ec
      )
    }
    function t4(e) {
      e.target instanceof HTMLTextAreaElement && document.activeElement === e.target && e.stopPropagation()
    }
    function t6(e) {
      return e.stopPropagation()
    }
    function t5(e) {
      return `M ${e.map(t9).join(" L ")} Z`
    }
    function t9(e) {
      let { x: t, y: n } = e
      return `${t},${n}`
    }
    function t8(e) {
      return [e?.baseline, e?.upper_contour]
    }
    function t7(e) {
      let t = -(e.rotation * Math.PI) / 180,
        n = Math.cos(t),
        i = Math.sin(t)
      return (t) => {
        let r = t.x - e.x - e.width / 2,
          a = t.y - e.y - e.height / 2
        return { x: r * n - a * i + e.width / 2, y: r * i + a * n + e.height / 2 }
      }
    }
    function ne(e) {
      if (null != e) return "e" === e || "w" === e ? "rewrap" : "scale"
    }
    let nt = (0, U.YK)({
      emptyText: {
        id: "imageTextEditing.emptyBoxLabel",
        defaultMessage: "Text",
        description: "Label identifying an editable text box with empty wording",
      },
      sizeDuringDrag: {
        id: "imageTextEditing.scaledFontSize",
        defaultMessage: "{size} px",
        description: "Font size in source image pixels while scaling a text box",
      },
      nw: {
        id: "imageTextEditing.scaleFromTopLeft",
        defaultMessage: "Scale text from top left",
        description: "Label for the top left handle which proportionally scales a text box and its lettering",
      },
      ne: {
        id: "imageTextEditing.scaleFromTopRight",
        defaultMessage: "Scale text from top right",
        description: "Label for the top right handle which proportionally scales a text box and its lettering",
      },
      sw: {
        id: "imageTextEditing.scaleFromBottomLeft",
        defaultMessage: "Scale text from bottom left",
        description: "Label for the bottom left handle which proportionally scales a text box and its lettering",
      },
      se: {
        id: "imageTextEditing.scaleFromBottomRight",
        defaultMessage: "Scale text from bottom right",
        description: "Label for the bottom right handle which proportionally scales a text box and its lettering",
      },
      n: {
        id: "imageTextEditing.scaleFromTop",
        defaultMessage: "Scale text from top",
        description: "Label for the top handle which proportionally scales a text box and its lettering",
      },
      s: {
        id: "imageTextEditing.scaleFromBottom",
        defaultMessage: "Scale text from bottom",
        description: "Label for the bottom handle which proportionally scales a text box and its lettering",
      },
      e: {
        id: "imageTextEditing.resizeRight",
        defaultMessage: "Resize text from right",
        description:
          "Accessible label for the selected text box's right handle; drag or use arrow keys to resize its width",
      },
      w: {
        id: "imageTextEditing.resizeLeft",
        defaultMessage: "Resize text from left",
        description:
          "Accessible label for the selected text box's left handle; drag or use arrow keys to resize its width",
      },
    })
    function nn(e) {
      let t,
        n,
        a,
        l = (0, r.c)(16),
        { menuPlacement: o, target: s, change: d, editing: c, onEdit: u, onChange: h } = e,
        f = (0, g.A)()
      return (
        l[0] !== d ||
        l[1] !== c ||
        l[2] !== f ||
        l[3] !== o ||
        l[4] !== h ||
        l[5] !== u ||
        l[6] !== s.kind ||
        l[7] !== s.text
          ? ((t =
              "object" === s.kind
                ? (0, i.jsx)("span", {
                    className: "group max-w-36 min-w-0 px-2 text-sm",
                    children: (0, i.jsx)(tH.E, { animateOnGroupHover: !0, dir: "auto", children: s.text }),
                  })
                : (0, i.jsxs)(tb.AM, {
                    open: c,
                    onOpenChange: u,
                    children: [
                      (0, i.jsx)(tb.Wv, {
                        asChild: !0,
                        children: (0, i.jsxs)(e5.P, {
                          color: "ghostActive",
                          size: "formatToolbar",
                          "aria-expanded": c,
                          "aria-label": f.formatMessage({
                            id: "imageTextEditing.layer.editText",
                            defaultMessage: "Edit text",
                            description: "Open a replacement wording request for lettering baked into the image.",
                          }),
                          children: [
                            (0, i.jsx)(w.Npl, {}),
                            (0, i.jsx)(m.A, {
                              id: "imageTextEditing.layer.editText",
                              defaultMessage: "Edit text",
                              description: "Open a replacement wording request for lettering baked into the image.",
                            }),
                          ],
                        }),
                      }),
                      c &&
                        (0, i.jsx)(tb.hl, {
                          ...o,
                          "data-annotation-control": !0,
                          "data-image-layer-wording": !0,
                          variant: "menu",
                          size: "default",
                          className: "max-w-[calc(100vw-1rem)] text-default",
                          children: (0, i.jsx)(ni, {
                            original: s.text,
                            replacement: d?.replacementText,
                            onCancel: () => u(!1),
                            onApply: (e) => {
                              ;(h({ ...d, replacementText: e }), u(!1))
                            },
                          }),
                        }),
                    ],
                  })),
            (l[0] = d),
            (l[1] = c),
            (l[2] = f),
            (l[3] = o),
            (l[4] = h),
            (l[5] = u),
            (l[6] = s.kind),
            (l[7] = s.text),
            (l[8] = t))
          : (t = l[8]),
        l[9] !== d || l[10] !== f || l[11] !== h
          ? ((n =
              d?.destination &&
              (0, i.jsx)(e5.P, {
                color: "ghostActive",
                size: "formatToolbarIcon",
                "aria-label": f.formatMessage({
                  id: "imageTextEditing.layer.resetPlacement",
                  defaultMessage: "Reset placement",
                  description: "Remove the requested move or resize from the next image edit.",
                }),
                onClick: () => h({ ...d, destination: void 0 }),
                children: (0, i.jsx)(w.O8y, {}),
              })),
            (l[9] = d),
            (l[10] = f),
            (l[11] = h),
            (l[12] = n))
          : (n = l[12]),
        l[13] !== t || l[14] !== n
          ? ((a = (0, i.jsxs)(i.Fragment, { children: [t, n] })), (l[13] = t), (l[14] = n), (l[15] = a))
          : (a = l[15]),
        a
      )
    }
    function ni(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        g,
        h,
        f,
        p,
        x = (0, r.c)(26),
        { original: v, replacement: b, onCancel: w, onApply: I } = e,
        [M, j] = (0, c.useState)(b ?? v),
        C = (0, c.useId)()
      ;(x[0] !== I || x[1] !== v || x[2] !== M
        ? ((t = (e) => {
            e.preventDefault()
            let t = 0 === M.trim().length ? "" : M
            I(t === v ? void 0 : t)
          }),
          (x[0] = I),
          (x[1] = v),
          (x[2] = M),
          (x[3] = t))
        : (t = x[3]),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(m.A, {
              id: "imageTextEditing.layer.wording",
              defaultMessage: "Replacement text",
              description: "Label for the wording to paint in the selected lettering's place.",
            })),
            (x[4] = n))
          : (n = x[4]),
        x[5] !== C
          ? ((a = (0, i.jsx)("label", { htmlFor: C, className: "font-medium", children: n })), (x[5] = C), (x[6] = a))
          : (a = x[6]),
        x[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (e) => j(e.currentTarget.value)), (x[7] = l))
          : (l = x[7]),
        x[8] !== C || x[9] !== M
          ? ((o = (0, i.jsx)("textarea", {
              id: C,
              rows: 2,
              maxLength: 4e3,
              value: M,
              className:
                "focus-visible:outline-info min-h-16 w-full resize-y rounded-md border border-default bg-surface px-2 py-1.5 text-sm",
              onFocus: na,
              onChange: l,
              onKeyDown: nr,
            })),
            (x[8] = C),
            (x[9] = M),
            (x[10] = o))
          : (o = x[10]),
        x[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)("span", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(m.A, {
                id: "imageTextEditing.layer.wordingHint",
                defaultMessage: "Send to update the lettering in the image.",
                description: "Explain when a requested replacement for baked-in lettering is applied.",
              }),
            })),
            (x[11] = s))
          : (s = x[11]),
        x[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(m.A, {
              id: "imageTextEditing.layer.cancelWording",
              defaultMessage: "Cancel",
              description: "Dismiss replacement wording without staging changes.",
            })),
            (x[12] = d))
          : (d = x[12]),
        x[13] !== w
          ? ((u = (0, i.jsx)(y.$, { type: "button", color: "ghost", size: "toolbar", onClick: w, children: d })),
            (x[13] = w),
            (x[14] = u))
          : (u = x[14]))
      let E = M === (b ?? v)
      return (
        x[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(m.A, {
              id: "imageTextEditing.layer.addWording",
              defaultMessage: "Apply to request",
              description: "Stage the requested lettering for Send.",
            })),
            (x[15] = g))
          : (g = x[15]),
        x[16] !== E
          ? ((h = (0, i.jsx)(y.$, { type: "submit", size: "toolbar", disabled: E, children: g })),
            (x[16] = E),
            (x[17] = h))
          : (h = x[17]),
        x[18] !== h || x[19] !== u
          ? ((f = (0, i.jsxs)("div", { className: "flex justify-end gap-1", children: [u, h] })),
            (x[18] = h),
            (x[19] = u),
            (x[20] = f))
          : (f = x[20]),
        x[21] !== t || x[22] !== f || x[23] !== a || x[24] !== o
          ? ((p = (0, i.jsxs)("form", {
              className: "pointer-events-auto flex flex-col gap-2 p-2",
              onSubmit: t,
              children: [a, o, s, f],
            })),
            (x[21] = t),
            (x[22] = f),
            (x[23] = a),
            (x[24] = o),
            (x[25] = p))
          : (p = x[25]),
        p
      )
    }
    function nr(e) {
      !e.nativeEvent.isComposing &&
        (e.metaKey || e.ctrlKey) &&
        "Enter" === e.key &&
        (e.preventDefault(), e.currentTarget.form?.requestSubmit())
    }
    function na(e) {
      return e.currentTarget.select()
    }
    function nl(e, t) {
      let n = []
      if (
        (null != t.replacementText &&
          n.push(
            t.replacementText.length
              ? e.formatMessage(ns.replace, { words: t.replacementText })
              : e.formatMessage(ns.erase),
          ),
        t.destination)
      ) {
        n.push(e.formatMessage(ns.place, no(t.destination)))
        let i = t.destination.rotation ?? 0
        0 !== i &&
          n.push(
            e.formatMessage(
              {
                id: "imageTextEditing.rotateImageRegion",
                defaultMessage:
                  "Rotate it {angle, number}° {direction, select, clockwise {clockwise} other {counterclockwise}} around its center.",
                description:
                  "Instruction in an image edit request to rotate the selected object or preserved lettering after positioning and sizing it. The angle is a positive number in degrees and the direction is clockwise or counterclockwise as viewed on screen.",
              },
              { angle: Math.abs(i), direction: i > 0 ? "clockwise" : "counterclockwise" },
            ),
          )
      }
      return n
    }
    function no(e) {
      return {
        x: Math.round(e.x),
        y: Math.round(e.y),
        width: Math.max(1, Math.round(e.width)),
        height: Math.max(1, Math.round(e.height)),
      }
    }
    let ns = (0, U.YK)({
      source: {
        id: "imageTextEditing.layerEditSource",
        defaultMessage:
          "{kind, select, object {Object} other {Text}} “{name}” at ({x}, {y}), {width} × {height} pixels.",
        description: "The original top-left corner and size of the target in the attached image.",
      },
      replace: {
        id: "imageTextEditing.replaceImageWording",
        defaultMessage: "Change the lettering to “{words}”, matching its existing style.",
        description: "A request to change the wording of text baked into an image.",
      },
      erase: {
        id: "imageTextEditing.eraseImageWording",
        defaultMessage: "Remove the lettering and restore the background.",
        description: "A request to clear the wording of text baked into an image.",
      },
      place: {
        id: "imageTextEditing.moveImageRegion",
        defaultMessage:
          "Place it at ({x}, {y}) with a size of {width} × {height} pixels. Restore the exposed background.",
        description: "A requested destination, measured from its top-left corner in image pixels.",
      },
    })
    function nd(e) {
      let t,
        n,
        a = (0, r.c)(7),
        { children: l, label: o, list: s, onClose: d } = e
      return (
        a[0] !== d
          ? ((t = (e) => {
              "Escape" === e.key &&
                e.target instanceof Node &&
                e.currentTarget.contains(e.target) &&
                !e.nativeEvent.isComposing &&
                (e.preventDefault(), e.stopPropagation(), d())
            }),
            (a[0] = d),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== l || a[3] !== o || a[4] !== s || a[5] !== t
          ? ((n = (0, i.jsx)("div", {
              ref: nc,
              tabIndex: -1,
              role: "group",
              "aria-label": o,
              "data-codex-escape-boundary": !0,
              "data-image-text-list-panel": s,
              className: "flex min-h-0 flex-1 flex-col outline-none",
              onKeyDown: t,
              children: l,
            })),
            (a[2] = l),
            (a[3] = o),
            (a[4] = s),
            (a[5] = t),
            (a[6] = n))
          : (n = a[6]),
        n
      )
    }
    function nc(e) {
      e?.focus({ preventScroll: !0 })
    }
    function nu(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d = (0, r.c)(23),
        { directEdits: c, requests: u, disabled: h, onRemoveRequest: f, onRemoveDirect: p, onClose: x } = e,
        v = (0, g.A)()
      d[0] !== v
        ? ((t = v.formatMessage({
            id: "imageTextEditing.editsSidebarTitle",
            defaultMessage: "Image edits",
            description: "Heading and accessible label of the sidebar listing changes to the current image.",
          })),
          (d[0] = v),
          (d[1] = t))
        : (t = d[1])
      let y = t
      return (
        d[2] !== v
          ? ((n = v.formatMessage({
              id: "imageTextEditing.closeEditsSidebar",
              defaultMessage: "Close image edits",
              description: "Accessible label for closing the image edits sidebar.",
            })),
            (d[2] = v),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== x || d[5] !== n || d[6] !== y
          ? ((a = (0, i.jsx)(N.xx, { title: y, closeLabel: n, onClose: x })),
            (d[4] = x),
            (d[5] = n),
            (d[6] = y),
            (d[7] = a))
          : (a = d[7]),
        d[8] !== c || d[9] !== h || d[10] !== v || d[11] !== p || d[12] !== f || d[13] !== u
          ? ((l =
              u.length + c.length === 0
                ? (0, i.jsx)("p", {
                    className: "px-4 py-2 text-sm text-secondary",
                    children: (0, i.jsx)(m.A, {
                      id: "imageTextEditing.emptyEditsSidebar",
                      defaultMessage: "No image edits",
                      description: "Empty state after the user removes the last edit from the image edits sidebar.",
                    }),
                  })
                : (0, i.jsxs)("ul", {
                    className: "min-h-0 flex-1 space-y-1 overflow-y-auto px-2 pb-2",
                    children: [
                      u.map((e) => {
                        let { region: t, change: n } = e
                        return (0, i.jsx)(
                          nm,
                          { name: t.text, disabled: h, onRemove: () => f(t.id), children: nl(v, n).map(ng) },
                          t.id,
                        )
                      }),
                      c.map((e) => {
                        let { id: t, before: n, after: r } = e
                        return (0, i.jsx)(
                          nm,
                          {
                            name: null == t ? null : (n ?? r ?? ""),
                            disabled: h,
                            onRemove: () => p(t),
                            children: null != t && (0, i.jsx)(nh, { before: n, after: r }),
                          },
                          null == t ? "order" : `layer:${t}`,
                        )
                      }),
                    ],
                  })),
            (d[8] = c),
            (d[9] = h),
            (d[10] = v),
            (d[11] = p),
            (d[12] = f),
            (d[13] = u),
            (d[14] = l))
          : (l = d[14]),
        d[15] !== x || d[16] !== a || d[17] !== l || d[18] !== y
          ? ((o = (0, i.jsxs)(nd, { list: "edits", label: y, onClose: x, children: [a, l] })),
            (d[15] = x),
            (d[16] = a),
            (d[17] = l),
            (d[18] = y),
            (d[19] = o))
          : (o = d[19]),
        d[20] !== o || d[21] !== y
          ? ((s = (0, i.jsx)(N.Io, {
              open: !0,
              size: "compact",
              className: "pointer-events-auto",
              label: y,
              children: o,
            })),
            (d[20] = o),
            (d[21] = y),
            (d[22] = s))
          : (s = d[22]),
        s
      )
    }
    function ng(e) {
      return (0, i.jsx)("p", { children: e }, e)
    }
    function nm(e) {
      var t, n
      let a,
        l,
        o,
        s,
        d,
        c,
        u,
        h,
        f = (0, r.c)(20),
        { name: p, children: x, disabled: v, onRemove: b } = e,
        I = (0, g.A)()
      return (
        f[0] !== p
          ? ((a =
              null == p
                ? (0, i.jsx)(m.A, {
                    id: "imageTextEditing.editsLayerOrder",
                    defaultMessage: "Layer order",
                    description: "An image edit that changed the stacking order of the editable text layers.",
                  })
                : p ||
                  (0, i.jsx)(m.A, {
                    id: "imageTextEditing.unreadableRequestText",
                    defaultMessage: "Text",
                    description: "An image text region whose wording could not be recognized.",
                  })),
            (f[0] = p),
            (f[1] = a))
          : (a = f[1]),
        f[2] !== a
          ? ((l = (0, i.jsx)(tH.E, { dir: "auto", animateOnGroupHover: !0, className: "text-sm", children: a })),
            (f[2] = a),
            (f[3] = l))
          : (l = f[3]),
        f[4] !== x
          ? ((o = (0, i.jsx)("div", { dir: "auto", className: "text-xs break-words text-secondary", children: x })),
            (f[4] = x),
            (f[5] = o))
          : (o = f[5]),
        f[6] !== l || f[7] !== o
          ? ((s = (0, i.jsxs)("div", { className: "min-w-0 flex-1", children: [l, o] })),
            (f[6] = l),
            (f[7] = o),
            (f[8] = s))
          : (s = f[8]),
        f[9] !== I || f[10] !== p
          ? ((t = I),
            (d =
              null == (n = p)
                ? t.formatMessage({
                    id: "imageTextEditing.restoreLayerOrder",
                    defaultMessage: "Restore layer order",
                    description: "Accessible label for undoing an image edit that reordered the text layers.",
                  })
                : n
                  ? t.formatMessage(
                      {
                        id: "imageTextEditing.removeLayerEdit",
                        defaultMessage: "Remove edit for {name}",
                        description: "Remove one queued change to an image region.",
                      },
                      { name: n },
                    )
                  : t.formatMessage({
                      id: "imageTextEditing.removeUnnamedLayerEdit",
                      defaultMessage: "Remove text edit",
                      description: "Accessible label for removing an image edit whose text layer has no name.",
                    })),
            (f[9] = I),
            (f[10] = p),
            (f[11] = d))
          : (d = f[11]),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(w.cSG, { className: "icon-2xs" })), (f[12] = c))
          : (c = f[12]),
        f[13] !== v || f[14] !== b || f[15] !== d
          ? ((u = (0, i.jsx)(y.$, {
              type: "button",
              color: "ghost",
              size: "compact",
              uniform: !0,
              disabled: v,
              "aria-label": d,
              onClick: b,
              children: c,
            })),
            (f[13] = v),
            (f[14] = b),
            (f[15] = d),
            (f[16] = u))
          : (u = f[16]),
        f[17] !== s || f[18] !== u
          ? ((h = (0, i.jsxs)("li", {
              className: "group flex min-w-0 items-start gap-2 rounded-md px-2 py-1.5",
              children: [s, u],
            })),
            (f[17] = s),
            (f[18] = u),
            (f[19] = h))
          : (h = f[19]),
        h
      )
    }
    function nh(e) {
      let t,
        n = (0, r.c)(5),
        { before: a, after: l } = e
      if (null == a) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.directTextAdded",
                defaultMessage: "Added text",
                description: "An edit in the image edits sidebar added this editable text layer.",
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (null == l) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.directTextDeleted",
                defaultMessage: "Deleted text",
                description: "An edit in the image edits sidebar removed this editable text layer.",
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if (a !== l) {
        let e
        return (
          n[2] !== l
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.directTextChanged",
                defaultMessage: "Changed to “{text}”",
                description:
                  "An edit in the image edits sidebar changed the wording of this editable text layer. The placeholder contains the new wording.",
                values: { text: l },
              })),
              (n[2] = l),
              (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      return (
        n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(m.A, {
              id: "imageTextEditing.directTextUpdated",
              defaultMessage: "Updated text layer",
              description:
                "An edit in the image edits sidebar changed the appearance or position of this editable text layer.",
            })),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function nf(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        m,
        h,
        f,
        p,
        x,
        v,
        y,
        b,
        w,
        I,
        M,
        j,
        C,
        E,
        S,
        T,
        _ = (0, r.c)(105),
        {
          target: A,
          selectionHost: k,
          destination: P,
          imageSize: R,
          displayWidth: N,
          backgroundUrl: z,
          active: L,
          showHover: D,
          canInteract: O,
          reference: B,
          onSelect: U,
          onDeselect: F,
          onKeyboardFocus: $,
          onEditText: H,
          onTransforming: K,
          onDestination: V,
        } = e,
        G = (0, g.A)(),
        q = (0, c.useRef)(null),
        W = (0, c.useRef)(null)
      ;(_[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => W.current?.cancel()), (n = []), (_[0] = t), (_[1] = n))
        : ((t = _[0]), (n = _[1])),
        (0, c.useLayoutEffect)(t, n),
        _[2] !== L || _[3] !== O
          ? ((a = () => {
              ;(L && O) || W.current?.cancel()
            }),
            (l = [L, O]),
            (_[2] = L),
            (_[3] = O),
            (_[4] = a),
            (_[5] = l))
          : ((a = _[4]), (l = _[5])),
        (0, c.useLayoutEffect)(a, l))
      let [Y, Z] = (0, c.useState)(null),
        X = (O && L ? Y : null) ?? P ?? A,
        Q = N / R.width,
        J = X.rotation ?? 0,
        ee = 0 === J ? void 0 : `rotate(${J} ${X.x + X.width / 2} ${X.y + X.height / 2})`
      _[6] !== X || _[7] !== A ? ((o = nv(X, A)), (_[6] = X), (_[7] = A), (_[8] = o)) : (o = _[8])
      let et = !o
      _[9] !== V || _[10] !== A
        ? ((s = (e) => V(nv(e, A) ? void 0 : e)), (_[9] = V), (_[10] = A), (_[11] = s))
        : (s = _[11])
      let en = s
      _[12] !== N || _[13] !== R.width
        ? ((d = (e) => {
            let t = e.currentTarget.ownerSVGElement?.getBoundingClientRect(),
              n = R.width / (t?.width || N)
            return { x: (e.clientX - (t?.left ?? 0)) * n, y: (e.clientY - (t?.top ?? 0)) * n }
          }),
          (_[12] = N),
          (_[13] = R.width),
          (_[14] = d))
        : (d = _[14])
      let ei = d
      _[15] !== en || _[16] !== K
        ? ((m = (e) => {
            let t = W.current
            null == t ||
              ((W.current = null), t.releasePointer(), null != t.latest && (Z(null), K(!1), e || en(t.latest)))
          }),
          (_[15] = en),
          (_[16] = K),
          (_[17] = m))
        : (m = _[17])
      let er = m
      _[18] !== O || _[19] !== er || _[20] !== X || _[21] !== ei || _[22] !== U
        ? ((h = (e, t) => {
            if (!O || null != W.current || 0 !== e.button || !1 === e.isPrimary) return
            ;(e.stopPropagation(), e.preventDefault())
            let n = e.currentTarget,
              i = () => er(!0)
            ;((W.current = {
              releasePointer: (0, t2.O)(n, e.nativeEvent, i),
              cancel: i,
              pointerId: e.pointerId,
              handle: t,
              startClientX: e.clientX,
              startClientY: e.clientY,
              startImagePoint: ei(e),
              origin: X,
              latest: null,
            }),
              (null == t || "rotate" === t ? q.current : n)?.focus({ preventScroll: !0 }),
              U())
          }),
          (_[18] = O),
          (_[19] = er),
          (_[20] = X),
          (_[21] = ei),
          (_[22] = U),
          (_[23] = h))
        : (h = _[23])
      let ea = h
      _[24] !== L || _[25] !== O || _[26] !== er || _[27] !== ei || _[28] !== K
        ? ((f = (e) => {
            let t = W.current
            if (t?.pointerId !== e.pointerId) return
            if (!L || !O) return void er(!0)
            let n = e.clientX - t.startClientX,
              i = e.clientY - t.startClientY
            if (null == t.latest && 3 > Math.hypot(n, i)) return
            let r = ei(e),
              a = { x: r.x - t.startImagePoint.x, y: r.y - t.startImagePoint.y },
              l =
                "rotate" === t.handle
                  ? (function (e, t, n, i) {
                      let { x: r, y: a, width: l, height: o } = e,
                        s = { left: r, top: a, width: l, height: o, rotation: e.rotation ?? 0 },
                        d = (0, tG.EZ)(s.rotation + (0, tG.QX)(s, n) - (0, tG.QX)(s, t)),
                        c = i ? (0, tG.Yv)(d, 15) : d
                      return { x: r, y: a, width: l, height: o, ...(c ? { rotation: c } : {}) }
                    })(t.origin, t.startImagePoint, r, e.shiftKey)
                  : ny(t.origin, t.handle, e.shiftKey && null == t.handle ? (0, tG._7)(a) : a, e.altKey)
            ;(null != t.latest && nv(l, t.latest)) || (null == t.latest && K(!0), (t.latest = l), Z(l))
          }),
          (_[24] = L),
          (_[25] = O),
          (_[26] = er),
          (_[27] = ei),
          (_[28] = K),
          (_[29] = f))
        : (f = _[29])
      let el = f
      _[30] !== er
        ? ((p = (e) => {
            W.current?.pointerId === e.pointerId && er(!0)
          }),
          (_[30] = er),
          (_[31] = p))
        : (p = _[31])
      let eo = p
      _[32] !== L ||
      _[33] !== O ||
      _[34] !== en ||
      _[35] !== er ||
      _[36] !== X ||
      _[37] !== F ||
      _[38] !== H ||
      _[39] !== U
        ? ((x = (e, t) => {
            if (O && !e.nativeEvent.isComposing && !e.metaKey && !e.ctrlKey)
              if ("Escape" === e.key) (e.preventDefault(), e.stopPropagation(), null != W.current ? er(!0) : F())
              else if (null != W.current) return
              else if ("Enter" === e.key || " " === e.key)
                (e.preventDefault(), e.stopPropagation(), L && "Enter" === e.key && null != H ? H() : U())
              else {
                let n = (0, tO.pv)(e.key, e.shiftKey)
                null != n &&
                  L &&
                  (e.preventDefault(), e.stopPropagation(), en(ny(X, t, { x: n.dx, y: n.dy }, e.altKey)))
              }
          }),
          (_[32] = L),
          (_[33] = O),
          (_[34] = en),
          (_[35] = er),
          (_[36] = X),
          (_[37] = F),
          (_[38] = H),
          (_[39] = U),
          (_[40] = x))
        : (x = _[40])
      let es = x
      _[41] !== G || _[42] !== A.text
        ? ((v = A.text || G.formatMessage(nb.text)), (_[41] = G), (_[42] = A.text), (_[43] = v))
        : (v = _[43])
      let ed = v
      _[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e) => {
            q.current = e
          }),
          (_[44] = y))
        : (y = _[44])
      let ec = O ? 0 : -1,
        eu = L ? "" : void 0,
        eg = `touch-none outline-none focus-visible:stroke-info ${L || D ? "cursor-move" : "cursor-default"}`,
        em = O ? "fill" : "none"
      ;(_[45] !== O || _[46] !== X || _[47] !== $ || _[48] !== U
        ? ((b = (e) => {
            O && null == W.current && e.currentTarget.matches(":focus-visible") && (U(), $?.(X))
          }),
          (_[45] = O),
          (_[46] = X),
          (_[47] = $),
          (_[48] = U),
          (_[49] = b))
        : (b = _[49]),
        _[50] !== ea ? ((w = (e) => ea(e)), (_[50] = ea), (_[51] = w)) : (w = _[51]),
        _[52] !== es ? ((I = (e) => es(e)), (_[52] = es), (_[53] = I)) : (I = _[53]))
      let eh = O ? U : void 0,
        ef = O ? H : void 0
      _[54] !== L ||
      _[55] !== ed ||
      _[56] !== ec ||
      _[57] !== eu ||
      _[58] !== eg ||
      _[59] !== em ||
      _[60] !== b ||
      _[61] !== w ||
      _[62] !== I ||
      _[63] !== eh ||
      _[64] !== ef ||
      _[65] !== A.id
        ? ((M = {
            ref: y,
            role: "button",
            tabIndex: ec,
            "aria-label": ed,
            "aria-pressed": L,
            "data-image-text-region": A.id,
            "data-image-text-selected": eu,
            className: eg,
            fill: "transparent",
            pointerEvents: em,
            onFocus: b,
            onPointerDown: w,
            onKeyDown: I,
            onClick: eh,
            onDoubleClick: ef,
          }),
          (_[54] = L),
          (_[55] = ed),
          (_[56] = ec),
          (_[57] = eu),
          (_[58] = eg),
          (_[59] = em),
          (_[60] = b),
          (_[61] = w),
          (_[62] = I),
          (_[63] = eh),
          (_[64] = ef),
          (_[65] = A.id),
          (_[66] = M))
        : (M = _[66])
      let ep = M,
        ex = D ? ed : void 0
      return (
        _[67] !== el || _[68] !== er
          ? ((j = (e) => {
              W.current?.pointerId === e.pointerId && (el(e), er(!1))
            }),
            (_[67] = el),
            (_[68] = er),
            (_[69] = j))
          : (j = _[69]),
        _[70] !== z || _[71] !== X || _[72] !== R || _[73] !== et || _[74] !== A || _[75] !== Q
          ? ((C = et && (0, i.jsx)(np, { target: A, frame: X, imageSize: R, backgroundUrl: z, zoom: Q })),
            (_[70] = z),
            (_[71] = X),
            (_[72] = R),
            (_[73] = et),
            (_[74] = A),
            (_[75] = Q),
            (_[76] = C))
          : (C = _[76]),
        _[77] !== L || _[78] !== X || _[79] !== ep || _[80] !== ee || _[81] !== A
          ? ((E =
              null != A.contour
                ? (0, i.jsx)("path", {
                    ...ep,
                    d: A.contour,
                    fillRule: "evenodd",
                    transform: nx(A, X),
                    stroke: L ? e4.l : void 0,
                    vectorEffect: "non-scaling-stroke",
                  })
                : (0, i.jsx)("rect", { ...ep, transform: ee, x: X.x, y: X.y, width: X.width, height: X.height })),
            (_[77] = L),
            (_[78] = X),
            (_[79] = ep),
            (_[80] = ee),
            (_[81] = A),
            (_[82] = E))
          : (E = _[82]),
        _[83] !== L ||
        _[84] !== O ||
        _[85] !== en ||
        _[86] !== X ||
        _[87] !== G ||
        _[88] !== es ||
        _[89] !== H ||
        _[90] !== B ||
        _[91] !== ee ||
        _[92] !== k ||
        _[93] !== ea ||
        _[94] !== A.contour ||
        _[95] !== Q
          ? ((S =
              L &&
              k &&
              (0, u.createPortal)(
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("rect", {
                      ref: B,
                      transform: ee,
                      x: X.x,
                      y: X.y,
                      width: X.width,
                      height: X.height,
                      fill: "transparent",
                      pointerEvents: O ? "all" : "none",
                      className: "cursor-move touch-none outline-none",
                      onPointerDown: (e) => ea(e),
                      onDoubleClick: O ? H : void 0,
                      stroke: e4.l,
                      strokeOpacity: null != A.contour ? 0.45 : 1,
                      vectorEffect: "non-scaling-stroke",
                    }),
                    O &&
                      (0, i.jsx)(tZ, {
                        frame: X,
                        zoom: Q,
                        resizeLabel: (e) => G.formatMessage(nb[e]),
                        onRotate: (e) => {
                          if (null == W.current) {
                            let { x: t, y: n, width: i, height: r } = X
                            en({ x: t, y: n, width: i, height: r, rotation: e })
                          }
                        },
                        onPointerDown: ea,
                        onKeyDown: es,
                      }),
                  ],
                }),
                k,
              )),
            (_[83] = L),
            (_[84] = O),
            (_[85] = en),
            (_[86] = X),
            (_[87] = G),
            (_[88] = es),
            (_[89] = H),
            (_[90] = B),
            (_[91] = ee),
            (_[92] = k),
            (_[93] = ea),
            (_[94] = A.contour),
            (_[95] = Q),
            (_[96] = S))
          : (S = _[96]),
        _[97] !== eo || _[98] !== el || _[99] !== ex || _[100] !== j || _[101] !== C || _[102] !== E || _[103] !== S
          ? ((T = (0, i.jsxs)("g", {
              "data-image-text-hover-label": ex,
              onPointerMove: el,
              onPointerUp: j,
              onPointerCancel: eo,
              onLostPointerCapture: eo,
              children: [C, E, S],
            })),
            (_[97] = eo),
            (_[98] = el),
            (_[99] = ex),
            (_[100] = j),
            (_[101] = C),
            (_[102] = E),
            (_[103] = S),
            (_[104] = T))
          : (T = _[104]),
        T
      )
    }
    function np(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        g,
        m,
        h,
        f,
        p,
        x = (0, r.c)(47),
        { target: v, frame: y, imageSize: b, backgroundUrl: w, zoom: I } = e,
        M = (0, c.useId)(),
        j = 10 / I,
        C = `url(#${M}-clip)`,
        E = `${M}-check`
      x[0] !== j
        ? ((t = (0, i.jsx)("rect", { width: j, height: j, fill: "var(--color-media-foreground)" })),
          (x[0] = j),
          (x[1] = t))
        : (t = x[1])
      let S = `M 0 0 h ${j / 2} v ${j / 2} H 0 z M ${j / 2} ${j / 2} h ${j / 2} v ${j / 2} h ${-j / 2} z`
      ;(x[2] !== S
        ? ((n = (0, i.jsx)("path", { d: S, fill: "var(--color-media-scrim)", opacity: 0.1 })), (x[2] = S), (x[3] = n))
        : (n = x[3]),
        x[4] !== E || x[5] !== t || x[6] !== n || x[7] !== j
          ? ((a = (0, i.jsxs)("pattern", {
              id: E,
              patternUnits: "userSpaceOnUse",
              width: j,
              height: j,
              children: [t, n],
            })),
            (x[4] = E),
            (x[5] = t),
            (x[6] = n),
            (x[7] = j),
            (x[8] = a))
          : (a = x[8]))
      let T = `${M}-clip`
      ;(x[9] !== v.contour || x[10] !== v.height || x[11] !== v.width || x[12] !== v.x || x[13] !== v.y
        ? ((l =
            null != v.contour
              ? (0, i.jsx)("path", { d: v.contour, clipRule: "evenodd" })
              : (0, i.jsx)("rect", { x: v.x, y: v.y, width: v.width, height: v.height })),
          (x[9] = v.contour),
          (x[10] = v.height),
          (x[11] = v.width),
          (x[12] = v.x),
          (x[13] = v.y),
          (x[14] = l))
        : (l = x[14]),
        x[15] !== T || x[16] !== l
          ? ((o = (0, i.jsx)("clipPath", { id: T, children: l })), (x[15] = T), (x[16] = l), (x[17] = o))
          : (o = x[17]),
        x[18] !== a || x[19] !== o
          ? ((s = (0, i.jsxs)("defs", { children: [a, o] })), (x[18] = a), (x[19] = o), (x[20] = s))
          : (s = x[20]))
      let _ = `url(#${M}-check)`
      return (
        x[21] !== _ || x[22] !== v.height || x[23] !== v.width || x[24] !== v.x || x[25] !== v.y
          ? ((d = (0, i.jsx)("rect", { x: v.x, y: v.y, width: v.width, height: v.height, fill: _, opacity: 0.5 })),
            (x[21] = _),
            (x[22] = v.height),
            (x[23] = v.width),
            (x[24] = v.x),
            (x[25] = v.y),
            (x[26] = d))
          : (d = x[26]),
        x[27] !== C || x[28] !== d
          ? ((u = (0, i.jsx)("g", { clipPath: C, children: d })), (x[27] = C), (x[28] = d), (x[29] = u))
          : (u = x[29]),
        x[30] !== y || x[31] !== v ? ((g = nx(v, y)), (x[30] = y), (x[31] = v), (x[32] = g)) : (g = x[32]),
        x[33] !== w || x[34] !== b.height || x[35] !== b.width
          ? ((m = (0, i.jsx)("image", { href: w, width: b.width, height: b.height, opacity: 0.88 })),
            (x[33] = w),
            (x[34] = b.height),
            (x[35] = b.width),
            (x[36] = m))
          : (m = x[36]),
        x[37] !== C || x[38] !== m
          ? ((h = (0, i.jsx)("g", { clipPath: C, children: m })), (x[37] = C), (x[38] = m), (x[39] = h))
          : (h = x[39]),
        x[40] !== g || x[41] !== h
          ? ((f = (0, i.jsx)("g", { transform: g, children: h })), (x[40] = g), (x[41] = h), (x[42] = f))
          : (f = x[42]),
        x[43] !== u || x[44] !== f || x[45] !== s
          ? ((p = (0, i.jsxs)("g", {
              "aria-hidden": "true",
              className: "pointer-events-none",
              "data-image-layer-move-preview": !0,
              children: [s, u, f],
            })),
            (x[43] = u),
            (x[44] = f),
            (x[45] = s),
            (x[46] = p))
          : (p = x[46]),
        p
      )
    }
    function nx(e, t) {
      let n = t.x + t.width / 2,
        i = t.y + t.height / 2
      return `rotate(${t.rotation ?? 0} ${n} ${i}) translate(${t.x} ${t.y}) scale(${t.width / e.width} ${t.height / e.height}) translate(${-e.x} ${-e.y})`
    }
    function nv(e, t) {
      return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height &&
        (e.rotation ?? 0) === (t.rotation ?? 0)
      )
    }
    function ny(e, t, n, i) {
      let { x: r, y: a, width: l, height: o, rotation: s } = e
      if (null == t) return { x: r + n.x, y: a + n.y, width: l, height: o, ...(s ? { rotation: s } : {}) }
      let d = tJ({ left: r, top: a, width: l, height: o, rotation: s ?? 0 }, n, t, i, "image")
      return { x: d.left, y: d.top, width: d.width, height: d.height, ...(s ? { rotation: s } : {}) }
    }
    let nb = (0, U.YK)({
        text: {
          id: "imageTextEditing.layer.emptyText",
          defaultMessage: "Text",
          description: "Canvas label for lettering with no transcription.",
        },
        w: {
          id: "imageTextEditing.layer.resizeW",
          defaultMessage: "Resize from left",
          description: "Resize a selected image layer from its left edge.",
        },
        e: {
          id: "imageTextEditing.layer.resizeE",
          defaultMessage: "Resize from right",
          description: "Resize a selected image layer from its right edge.",
        },
        s: {
          id: "imageTextEditing.layer.resizeS",
          defaultMessage: "Resize from bottom",
          description: "Resize a selected image layer from its bottom edge.",
        },
        n: {
          id: "imageTextEditing.layer.resizeN",
          defaultMessage: "Resize from top",
          description: "Resize a selected image layer from its top edge.",
        },
        nw: {
          id: "imageTextEditing.layer.resizeNW",
          defaultMessage: "Resize from top left",
          description: "Resize a selected image layer from its top left corner.",
        },
        ne: {
          id: "imageTextEditing.layer.resizeNE",
          defaultMessage: "Resize from top right",
          description: "Resize a selected image layer from its top right corner.",
        },
        sw: {
          id: "imageTextEditing.layer.resizeSW",
          defaultMessage: "Resize from bottom left",
          description: "Resize a selected image layer from its bottom left corner.",
        },
        se: {
          id: "imageTextEditing.layer.resizeSE",
          defaultMessage: "Resize from bottom right",
          description: "Resize a selected image layer from its bottom right corner.",
        },
      }),
      nw = (0, U.YK)({
        front: {
          id: "imageTextEditing.bringToFront",
          defaultMessage: "Bring to front",
          description: "Move this text in front of all other editable image text",
        },
        forward: {
          id: "imageTextEditing.bringForward",
          defaultMessage: "Bring forward",
          description: "Move this text one editable image text layer forward",
        },
        backward: {
          id: "imageTextEditing.sendBackward",
          defaultMessage: "Send backward",
          description: "Move this text one editable image text layer backward",
        },
        back: {
          id: "imageTextEditing.sendToBack",
          defaultMessage: "Send to back",
          description: "Move this text behind all other editable image text",
        },
      })
    function nI(e) {
      return "text" === e.kind && "editable" === e.rendering.mode
    }
    function nM(e) {
      let { width: t, height: n } = e.snapshot.content
      return e.items.flatMap((i) =>
        "rendering" in i && "editable" === i.rendering.mode
          ? []
          : [
              {
                id: i.id,
                kind: "rendering" in i ? "preserved" : "object",
                text: "rendering" in i ? i.text : i.label,
                x: i.bbox.x * t,
                y: i.bbox.y * n,
                width: i.bbox.width * t,
                height: i.bbox.height * n,
                rotation: 0,
                contour: e.assets.objectMaskPaths?.get(i.id) ?? ("contour" in i ? i.contour?.path : void 0),
              },
            ],
      )
    }
    function nj(e, t) {
      if (!e.size) return []
      let n = new Map(t.map((e) => [e.id, e]))
      return Array.from(e).flatMap(([e, t]) => {
        let i = n.get(e)
        return i?.kind == null ? [] : [{ region: i, change: t }]
      })
    }
    function nC(e) {
      let t,
        n,
        a = (0, r.c)(6),
        { preparing: l, previewSrc: o } = e,
        s = (0, g.A)()
      return (
        a[0] !== s || a[1] !== l
          ? ((t = l
              ? s.formatMessage({
                  id: "imageTextEditing.preparingAccessible",
                  defaultMessage: "Preparing image text",
                  description: "Accessible status for the animated image text preparation preview",
                })
              : s.formatMessage({
                  id: "imageTextEditing.loadingAccessible",
                  defaultMessage: "Loading image text",
                  description: "Accessible status while loading an existing image text document",
                })),
            (a[0] = s),
            (a[1] = l),
            (a[2] = t))
          : (t = a[2]),
        a[3] !== o || a[4] !== t
          ? ((n = (0, i.jsx)(ef.o, { presentation: "image-preview", previewSrc: o, ariaLabel: t })),
            (a[3] = o),
            (a[4] = t),
            (a[5] = n))
          : (n = a[5]),
        n
      )
    }
    var nE = n("ePe7")
    let nS = `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#202124" stroke="white" stroke-width="1.5" stroke-linejoin="round" d="M2 21c3-1 1-4 4-6 1-1 3-1 4 0s1 3-1 5c-2 2-5 2-7 1zm7-8L19 2c2-2 4 1 2 3l-9 10z"/></svg>')}") 2 21, crosshair`
    function nT(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        m,
        h,
        f = (0, r.c)(23),
        { region: p, onApply: x } = e,
        v = (0, g.A)(),
        y = (0, c.useRef)(null)
      ;(f[0] !== v || f[1] !== p.text
        ? ((t = p.text
            ? v.formatMessage(
                {
                  id: "imageTextEditing.paintTarget",
                  defaultMessage: "Apply formatting to {text}",
                  description: "Accessible name of a text box targeted by Format Painter. Text is the box's lettering.",
                },
                { text: p.text },
              )
            : v.formatMessage({
                id: "imageTextEditing.emptyPaintTarget",
                defaultMessage: "Apply formatting to empty text box",
                description: "Accessible action to use Format Painter on a box with no words",
              })),
          (f[0] = v),
          (f[1] = p.text),
          (f[2] = t))
        : (t = f[2]),
        f[3] === Symbol.for("react.memo_cache_sentinel") ? ((n = { cursor: nS }), (f[3] = n)) : (n = f[3]))
      let b = `rotate(${p.rotation} ${p.x + p.width / 2} ${p.y + p.height / 2})`
      return (
        f[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (e) => {
              0 === e.button &&
                !1 !== e.isPrimary &&
                (e.stopPropagation(),
                (y.current = { id: e.pointerId, x: e.clientX, y: e.clientY }),
                e.currentTarget.focus({ preventScroll: !0 }))
            }),
            (l = (e) => {
              let t = y.current
              null != t && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 4 && (y.current = null)
            }),
            (o = () => {
              y.current = null
            }),
            (s = () => {
              y.current = null
            }),
            (f[4] = a),
            (f[5] = l),
            (f[6] = o),
            (f[7] = s))
          : ((a = f[4]), (l = f[5]), (o = f[6]), (s = f[7])),
        f[8] !== x
          ? ((u = (e) => {
              y.current?.id === e.pointerId && ((y.current = null), e.stopPropagation(), x())
            }),
            (m = (e) => {
              0 === e.detail && x()
            }),
            (d = (e) => {
              ;("Enter" !== e.key && " " !== e.key) ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey ||
                e.shiftKey ||
                e.nativeEvent.isComposing ||
                (e.preventDefault(), e.stopPropagation(), e.repeat || x())
            }),
            (f[8] = x),
            (f[9] = d),
            (f[10] = u),
            (f[11] = m))
          : ((d = f[9]), (u = f[10]), (m = f[11])),
        f[12] !== p.height ||
        f[13] !== p.id ||
        f[14] !== p.width ||
        f[15] !== p.x ||
        f[16] !== p.y ||
        f[17] !== t ||
        f[18] !== d ||
        f[19] !== b ||
        f[20] !== u ||
        f[21] !== m
          ? ((h = (0, i.jsx)("rect", {
              role: "button",
              tabIndex: 0,
              "aria-label": t,
              "data-image-text-region": p.id,
              className:
                "pointer-events-auto stroke-transparent text-blue outline-none hover:stroke-current focus-visible:stroke-current",
              style: n,
              x: p.x,
              y: p.y,
              width: p.width,
              height: p.height,
              transform: b,
              fill: "transparent",
              vectorEffect: "non-scaling-stroke",
              strokeWidth: 2,
              onPointerDown: a,
              onPointerMove: l,
              onPointerLeave: o,
              onPointerCancel: s,
              onPointerUp: u,
              onClick: m,
              onKeyDown: d,
            })),
            (f[12] = p.height),
            (f[13] = p.id),
            (f[14] = p.width),
            (f[15] = p.x),
            (f[16] = p.y),
            (f[17] = t),
            (f[18] = d),
            (f[19] = b),
            (f[20] = u),
            (f[21] = m),
            (f[22] = h))
          : (h = f[22]),
        h
      )
    }
    function n_(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        c = (0, r.c)(13),
        { keepPainting: u, onKeepPainting: g, onDone: h } = e
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(w.Xio, { className: "ms-1 size-4" })), (c[0] = t))
        : (t = c[0]),
        c[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)("span", {
              role: "status",
              className: "px-1 text-sm",
              children: (0, i.jsx)(m.A, {
                id: "imageTextEditing.choosePaintTarget",
                defaultMessage: "Choose a text box",
                description: "Prompt in the image toolbar while Format Painter is active",
              }),
            })),
            (c[1] = n))
          : (n = c[1]))
      let f = u ? "secondary" : "ghost"
      return (
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(m.A, {
              id: "imageTextEditing.keepPainting",
              defaultMessage: "Keep painting",
              description: "Keep applying the same formatting to additional image text boxes",
            })),
            (c[2] = a))
          : (a = c[2]),
        c[3] !== u || c[4] !== g || c[5] !== f
          ? ((l = (0, i.jsx)(y.$, { color: f, size: "compact", "aria-pressed": u, onClick: g, children: a })),
            (c[3] = u),
            (c[4] = g),
            (c[5] = f),
            (c[6] = l))
          : (l = c[6]),
        c[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(m.A, {
              id: "imageTextEditing.finishPainter",
              defaultMessage: "Done",
              description: "Stop applying the sampled text formatting",
            })),
            (c[7] = o))
          : (o = c[7]),
        c[8] !== h
          ? ((s = (0, i.jsx)(y.$, { color: "ghost", size: "compact", onClick: h, children: o })),
            (c[8] = h),
            (c[9] = s))
          : (s = c[9]),
        c[10] !== l || c[11] !== s
          ? ((d = (0, i.jsxs)("div", {
              className: "flex items-center gap-1 border-e border-border-subtle pe-1.5",
              children: [t, n, l, s],
            })),
            (c[10] = l),
            (c[11] = s),
            (c[12] = d))
          : (d = c[12]),
        d
      )
    }
    var nA = n("zLIa"),
      nk = n("TPBT")
    function nP(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        h,
        f,
        p,
        x,
        v,
        b,
        I,
        M,
        j,
        C,
        E,
        S,
        T,
        _ = (0, r.c)(64),
        {
          source: A,
          selected: k,
          open: P,
          onSelect: R,
          onChange: N,
          onEditEnd: z,
          renderGuideControls: L,
          editingGuides: D,
          onExitGuides: O,
          onExitPainter: B,
          onStartPainter: U,
          onPasteFormatting: F,
          layerOrderItems: $,
          onResetSelected: H,
          onAdd: K,
          takeNewTextFocus: V,
          onDuplicateSelected: G,
          onDeleteSelected: q,
          onClose: W,
        } = e
      _[0] !== $ ? ((t = void 0 === $ ? [] : $), (_[0] = $), (_[1] = t)) : (t = _[1])
      let Y = t,
        Z = (0, g.A)(),
        X = (0, c.useId)(),
        Q = P ? tl(A) : [],
        [J, ee] = (0, c.useState)(null)
      _[2] !== J || _[3] !== L ? ((n = L?.(J)), (_[2] = J), (_[3] = L), (_[4] = n)) : (n = _[4])
      let et = n
      ;(_[5] !== P || _[6] !== J
        ? ((a = () => {
            if (!P || null == J) return
            let e = J.ownerDocument.activeElement
            J.contains(e) ||
              (e instanceof HTMLTextAreaElement && e.closest("[data-image-text-region]")) ||
              J.focus({ preventScroll: !0 })
          }),
          (l = [P, J]),
          (_[5] = P),
          (_[6] = J),
          (_[7] = a),
          (_[8] = l))
        : ((a = _[7]), (l = _[8])),
        (0, c.useLayoutEffect)(a, l))
      let en = (0, c.useRef)(null),
        ei = (0, c.useRef)(!1),
        [er, ea] = (0, c.useState)(!1)
      _[9] !== P || _[10] !== k || _[11] !== V
        ? ((o = () => {
            P && k?.id != null && V(k.id) && (en.current?.focus({ preventScroll: !0 }), en.current?.select())
          }),
          (_[9] = P),
          (_[10] = k),
          (_[11] = V),
          (_[12] = o))
        : (o = _[12])
      let el = k?.id
      ;(_[13] !== P || _[14] !== el || _[15] !== V
        ? ((s = [P, el, V]), (_[13] = P), (_[14] = el), (_[15] = V), (_[16] = s))
        : (s = _[16]),
        (0, c.useLayoutEffect)(o, s),
        _[17] !== Z ? ((d = Z.formatMessage(nN.selectBlock)), (_[17] = Z), (_[18] = d)) : (d = _[18]))
      let eo = d
      _[19] !== Z
        ? ((u = (e, t) => e.text.trim() || Z.formatMessage(nN.emptyBlock, { number: t + 1 })), (_[19] = Z), (_[20] = u))
        : (u = _[20])
      let es = u,
        ed =
          null == k
            ? eo
            : es(
                k,
                Q.findIndex((e) => e.id === k.id),
              )
      ;(_[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e) => {
            ei.current &&
              (e.preventDefault(), (ei.current = !1), en.current?.focus({ preventScroll: !0 }), en.current?.select())
          }),
          (_[21] = h))
        : (h = _[21]),
        _[22] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, i.jsx)(w.HIf, {})), (_[22] = f)) : (f = _[22]),
        _[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(tv.ms.Separator, {})), (_[23] = p))
          : (p = _[23]),
        _[24] === Symbol.for("react.memo_cache_sentinel") ? ((x = (0, i.jsx)(w.D_h, {})), (_[24] = x)) : (x = _[24]))
      let ec = null == K
      ;(_[25] !== K
        ? ((v = () => {
            ei.current = K?.() != null
          }),
          (_[25] = K),
          (_[26] = v))
        : (v = _[26]),
        _[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(m.A, {
              id: "imageTextEditing.add",
              defaultMessage: "Add text",
              description: "Add a new editable text box to this image",
            })),
            (_[27] = b))
          : (b = _[27]),
        _[28] !== ec || _[29] !== v
          ? ((I = (0, i.jsx)(tv.ms.Item, { leftIcon: x, disabled: ec, onSelect: v, children: b })),
            (_[28] = ec),
            (_[29] = v),
            (_[30] = I))
          : (I = _[30]))
      let eu = (0, i.jsxs)(tv.Ab, {
        align: "start",
        side: "bottom",
        collisionBoundary: J,
        matchTriggerWidth: !0,
        onCloseAutoFocus: h,
        triggerButton: (0, i.jsxs)(y.$, {
          className: "group w-full min-w-0 justify-start text-start",
          color: "ghostActive",
          size: "compact",
          "aria-label": eo,
          "aria-description": null == k ? void 0 : ed,
          children: [
            (0, i.jsx)(
              tH.E,
              {
                animateOnGroupHover: !0,
                dir: "auto",
                className: "w-auto flex-initial text-base font-semibold",
                children: ed,
              },
              k?.id,
            ),
            f,
          ],
        }),
        children: [
          Q.map((e, t) =>
            (0, i.jsx)(
              tv.ms.Item,
              {
                rightIcon: e.id === k?.id ? (0, i.jsx)(w.ALZ, {}) : void 0,
                onSelect: () => R(e.id),
                children: (0, i.jsxs)("span", {
                  className: "flex min-w-0 items-center gap-1",
                  children: [
                    (0, i.jsx)(tH.E, {
                      animateOnGroupHover: !0,
                      dir: "auto",
                      className: "w-auto flex-initial",
                      children: es(e, t),
                    }),
                    e.text.trim() &&
                      Q.some((t) => t.id !== e.id && t.text.trim() === e.text.trim()) &&
                      (0, i.jsx)("span", {
                        className: "shrink-0 text-xs text-secondary tabular-nums",
                        children: t + 1,
                      }),
                  ],
                }),
              },
              e.id,
            ),
          ),
          p,
          I,
        ],
      })
      _[31] !== Z
        ? ((M = Z.formatMessage({
            id: "imageTextEditing.properties",
            defaultMessage: "Text properties",
            description: "Title of the optional properties panel for image text",
          })),
          (_[31] = Z),
          (_[32] = M))
        : (M = _[32])
      let eg = A.snapshot.reference.document_id
      return (
        _[33] !== D || _[34] !== W || _[35] !== O || _[36] !== B
          ? ((j = (e) => {
              "Escape" !== e.key ||
                e.defaultPrevented ||
                e.nativeEvent.isComposing ||
                (e.preventDefault(), e.stopPropagation(), D ? O() : null != B ? B() : W())
            }),
            (_[33] = D),
            (_[34] = W),
            (_[35] = O),
            (_[36] = B),
            (_[37] = j))
          : (j = _[37]),
        _[38] !== D ||
        _[39] !== Z ||
        _[40] !== Y ||
        _[41] !== q ||
        _[42] !== G ||
        _[43] !== F ||
        _[44] !== H ||
        _[45] !== U ||
        _[46] !== J ||
        _[47] !== Q ||
        _[48] !== k
          ? ((C =
              null == k || D
                ? void 0
                : (0, i.jsxs)(tv.Ab, {
                    side: "bottom",
                    align: "end",
                    collisionBoundary: J,
                    triggerButton: (0, i.jsx)(y.$, {
                      size: "toolbar",
                      color: "ghost",
                      uniform: !0,
                      "aria-label": Z.formatMessage({
                        id: "imageTextEditing.blockActions",
                        defaultMessage: "Block actions",
                        description: "Open actions for the selected editable text box",
                      }),
                      children: (0, i.jsx)(w.l0Y, {}),
                    }),
                    children: [
                      (0, i.jsx)(tv.ms.Item, { onSelect: U, children: (0, i.jsx)(m.A, { ...td.painter }) }),
                      null != F && (0, i.jsx)(tv.ms.Item, { onSelect: F, children: (0, i.jsx)(m.A, { ...td.paste }) }),
                      (0, i.jsx)(tv.ms.Separator, {}),
                      (0, i.jsx)(tv.ms.Item, {
                        disabled: null == G,
                        onSelect: G,
                        children: (0, i.jsx)(m.A, {
                          id: "imageTextEditing.duplicateBlock",
                          defaultMessage: "Duplicate",
                          description: "Create a copy of the selected editable text block",
                        }),
                      }),
                      Q.length > 1 &&
                        (0, i.jsx)(tv.ms.SubmenuItem, {
                          trigger: (0, i.jsx)(tv.ms.Item, {
                            children: (0, i.jsx)(m.A, {
                              id: "imageTextEditing.arrange",
                              defaultMessage: "Arrange",
                              description: "Change the stacking order of the selected text box",
                            }),
                          }),
                          children: Y.map(nR),
                        }),
                      (0, i.jsx)(tv.ms.Item, {
                        disabled: null == H,
                        onSelect: H,
                        children: (0, i.jsx)(m.A, {
                          id: "imageTextEditing.resetBlock",
                          defaultMessage: "Reset this text block",
                          description: "Restore the selected text box to the saved version",
                        }),
                      }),
                      (0, i.jsx)(tv.ms.Separator, {}),
                      (0, i.jsx)(tv.ms.Item, {
                        tone: "danger",
                        onSelect: q,
                        children: (0, i.jsx)(m.A, {
                          id: "imageTextEditing.deleteBlock",
                          defaultMessage: "Delete",
                          description: "Delete the selected editable text block",
                        }),
                      }),
                    ],
                  })),
            (_[38] = D),
            (_[39] = Z),
            (_[40] = Y),
            (_[41] = q),
            (_[42] = G),
            (_[43] = F),
            (_[44] = H),
            (_[45] = U),
            (_[46] = J),
            (_[47] = Q),
            (_[48] = k),
            (_[49] = C))
          : (C = _[49]),
        _[50] !== Z
          ? ((E = Z.formatMessage({
              id: "imageTextEditing.closeProperties",
              defaultMessage: "Close text properties",
              description: "Close the properties panel and return to the image",
            })),
            (_[50] = Z),
            (_[51] = E))
          : (E = _[51]),
        _[52] !== D ||
        _[53] !== et ||
        _[54] !== Z ||
        _[55] !== N ||
        _[56] !== z ||
        _[57] !== J ||
        _[58] !== k ||
        _[59] !== ea ||
        _[60] !== er
          ? ((S = D
              ? et
              : null != k &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(
                      nA.TM,
                      {
                        ref: en,
                        "data-image-text-input-for": k.id,
                        value: k.text,
                        variant: "compact",
                        rows: 2,
                        maxLength: 4e3,
                        "aria-label": Z.formatMessage({
                          id: "imageTextEditing.textContent",
                          defaultMessage: "Text content",
                          description: "Edit the words inside the selected text region on the image",
                        }),
                        onChange: (e) => N({ ...k, text: e.currentTarget.value }, `text-${k.id}`),
                        onBlur: z,
                      },
                      k.id,
                    ),
                    (0, i.jsxs)("div", {
                      className: "flex min-w-0 flex-col gap-2",
                      children: [
                        (0, i.jsxs)(y.$, {
                          color: "ghostActive",
                          size: "compact",
                          className: "w-full justify-start",
                          "aria-expanded": er,
                          onClick: () => ea(!er),
                          children: [
                            (0, i.jsx)(w.HIf, { className: er ? void 0 : "-rotate-90" }),
                            (0, i.jsx)(m.A, {
                              id: "imageTextEditing.spacingAndWidth",
                              defaultMessage: "Spacing & width",
                              description:
                                "Expand advanced controls for line spacing, letter spacing, word spacing, and character width",
                            }),
                          ],
                        }),
                        er &&
                          (0, i.jsxs)(
                            "div",
                            {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "col-span-2",
                                  children: (0, i.jsx)(tj, {
                                    align: "start",
                                    collisionBoundary: J,
                                    label: Z.formatMessage({
                                      id: "imageTextEditing.lineHeight",
                                      defaultMessage: "Line height",
                                      description: "Distance between image text lines as a multiple of font size",
                                    }),
                                    suffix: "×",
                                    value: k.lineHeight / k.fontSize,
                                    step: 0.1,
                                    min: 0.1,
                                    max: 10,
                                    presets: [1, 1.2, 1.5, 2],
                                    onChange: (e) => N({ ...k, lineHeight: e * k.fontSize }),
                                  }),
                                }),
                                (0, i.jsx)(tj, {
                                  align: "start",
                                  collisionBoundary: J,
                                  label: Z.formatMessage({
                                    id: "imageTextEditing.letterSpacing",
                                    defaultMessage: "Letter spacing",
                                    description: "Space between image text letters, in pixels",
                                  }),
                                  suffix: "px",
                                  value: k.letterSpacing,
                                  min: -1e3,
                                  max: 1e3,
                                  presets: [-2, -1, 0, 1, 2],
                                  onChange: (e) => N({ ...k, letterSpacing: e }),
                                }),
                                (0, i.jsx)(tj, {
                                  align: "end",
                                  collisionBoundary: J,
                                  label: Z.formatMessage({
                                    id: "imageTextEditing.wordSpacing",
                                    defaultMessage: "Word spacing",
                                    description: "Extra space between image text words, in pixels",
                                  }),
                                  suffix: "px",
                                  value: k.wordSpacing,
                                  min: -1e3,
                                  max: 1e3,
                                  presets: [-4, 0, 4, 8, 12],
                                  onChange: (e) => N({ ...k, wordSpacing: e }),
                                }),
                                (0, i.jsx)(tj, {
                                  align: "start",
                                  collisionBoundary: J,
                                  label: Z.formatMessage({
                                    id: "imageTextEditing.horizontalScale",
                                    defaultMessage: "Character width",
                                    description: "Horizontal scale of image text as a percentage",
                                  }),
                                  suffix: "%",
                                  value: 100 * k.horizontalScale,
                                  min: 1,
                                  max: 1e3,
                                  presets: [50, 75, 100, 125, 150],
                                  onChange: (e) => N({ ...k, horizontalScale: e / 100 }),
                                }),
                              ],
                            },
                            k.id,
                          ),
                      ],
                    }),
                    (0, i.jsx)(
                      tj,
                      {
                        align: "start",
                        collisionBoundary: J,
                        label: Z.formatMessage({
                          id: "imageTextEditing.rotation",
                          defaultMessage: "Rotation",
                          description: "Image text rotation in degrees",
                        }),
                        suffix: "°",
                        value: k.rotation,
                        min: -180,
                        max: 180,
                        presets: [-90, -45, 0, 45, 90],
                        onChange: (e) => N({ ...k, rotation: e }),
                      },
                      `rotation-${k.id}`,
                    ),
                    et,
                  ],
                })),
            (_[52] = D),
            (_[53] = et),
            (_[54] = Z),
            (_[55] = N),
            (_[56] = z),
            (_[57] = J),
            (_[58] = k),
            (_[59] = ea),
            (_[60] = er),
            (_[61] = S))
          : (S = _[61]),
        _[62] !== S
          ? ((T = (0, i.jsx)("div", {
              className:
                "grid min-h-0 flex-1 auto-rows-max grid-cols-1 content-start gap-3 overflow-y-auto px-4 pt-1 pb-4",
              children: S,
            })),
            (_[62] = S),
            (_[63] = T))
          : (T = _[63]),
        (0, i.jsx)(nk.I, {
          open: P,
          size: "compact",
          className: "pointer-events-auto",
          label: M,
          children: (0, i.jsxs)("div", {
            ref: ee,
            className: "flex min-h-0 flex-1 flex-col outline-none select-none",
            role: "group",
            tabIndex: -1,
            "aria-labelledby": X,
            "data-image-text-controls": eg,
            onKeyDown: j,
            children: [(0, i.jsx)(nk.x, { titleId: X, title: eu, actions: C, closeLabel: E, onClose: W }), T],
          }),
        })
      )
    }
    function nR(e) {
      return (0, i.jsx)(
        tv.ms.Item,
        { disabled: !e.enabled, onSelect: e.onSelect, children: (0, i.jsx)(m.A, { ...e.message }) },
        e.id,
      )
    }
    let nN = (0, U.YK)({
      emptyBlock: {
        id: "imageTextEditing.emptyBlockNumber",
        defaultMessage: "Empty text block {number}",
        description: "Identifies an empty image text block by its position in the document",
      },
      selectBlock: {
        id: "imageTextEditing.selectBlock",
        defaultMessage: "Select text block",
        description: "Selects an existing text block, including an empty block, in image text properties",
      },
    })
    var nz = n("yC2B")
    function nL(e) {
      let t,
        n,
        a,
        l,
        s,
        d = (0, r.c)(13),
        { open: u, compactGuides: m, editorElement: h, toolbarRef: f, children: p } = e,
        x = (0, g.A)()
      d[0] !== x.locale ? ((t = (0, nz.b)(x.locale)), (d[0] = x.locale), (d[1] = t)) : (t = d[1])
      let v = "rtl" === t,
        y = (0, c.useRef)(null),
        b = (0, c.useRef)(null)
      ;(d[2] !== h || d[3] !== u || d[4] !== v || d[5] !== f
        ? ((n = () => {
            let e = y.current,
              t = b.current,
              n = h?.closest("[data-image-text-stage]")
            if (!u || null == e || null == t || null == n || n.contains(e)) return
            let i = v ? "marginLeft" : "marginRight",
              r = n.style[i],
              a = n.style.marginBottom,
              l = getComputedStyle(n),
              o = Number.parseFloat(l[i]) || 0,
              s = Number.parseFloat(l.marginBottom) || 0,
              d = 0,
              c = 0,
              g = () => {
                let l = e.getBoundingClientRect(),
                  u = n.getBoundingClientRect(),
                  g = t.getBoundingClientRect(),
                  m = l.height / e.clientHeight,
                  h = u.width / n.offsetWidth
                if (!Number.isFinite(h) || h <= 0 || !Number.isFinite(m) || m <= 0) return
                let p = "bottom" === getComputedStyle(t).getPropertyValue("--image-text-dock").trim(),
                  x = 0
                if (p) {
                  let t = f.current
                  if (null != t && !n.contains(t)) {
                    let n = t.getBoundingClientRect(),
                      i = l.bottom - g.height
                    n.width > 0 &&
                      n.bottom > i &&
                      n.top < l.bottom &&
                      n.right > g.left &&
                      n.left < g.right &&
                      (x = Math.min(e.clientHeight / 2, Math.max(0, (l.bottom - n.top) / m + 8)))
                  }
                }
                let y = 0,
                  b = 0
                if (p) {
                  let e = l.bottom - x * m,
                    t = u.left - (v ? d * h : 0),
                    n = u.right + (v ? 0 : d * h)
                  if (g.right > t && g.left < n && e > u.top) {
                    let t = e - g.height - 8 * m
                    b = Math.max(0, Math.round((u.bottom - t) / h + c))
                  }
                } else
                  g.bottom > u.top &&
                    g.top < u.bottom + c * h &&
                    (v ? g.left < u.right : g.right > u.left) &&
                    (y = Math.max(0, Math.round(((v ? g.right - u.left : u.right - g.left) + 8 * m) / h + d)))
                ;(t.style.setProperty("--image-text-toolbar-lane", `${x}px`),
                  y !== d && ((n.style[i] = 0 === y ? r : `${o + y}px`), (d = y)),
                  b !== c && ((n.style.marginBottom = 0 === b ? a : `${s + b}px`), (c = b)))
              }
            g()
            let m = new ResizeObserver(g)
            return (
              m.observe(e),
              m.observe(t),
              null != n.parentElement && m.observe(n.parentElement),
              null == f.current || n.contains(f.current) || m.observe(f.current),
              () => {
                ;(m.disconnect(), (n.style[i] = r), (n.style.marginBottom = a))
              }
            )
          }),
          (a = [u, v, h, f]),
          (d[2] = h),
          (d[3] = u),
          (d[4] = v),
          (d[5] = f),
          (d[6] = n),
          (d[7] = a))
        : ((n = d[6]), (a = d[7])),
        (0, c.useLayoutEffect)(n, a))
      let w = m
        ? "@max-[620px]/text-inspector:max-h-[min(42%,16rem)]"
        : "@max-[620px]/text-inspector:h-[min(42%,16rem)]"
      return (
        d[8] !== w
          ? ((l = (0, o.A)(
              "absolute inset-y-0 end-0 grid w-max max-w-[55%] min-h-0 grid-cols-1 [--image-text-dock:side]",
              "@max-[620px]/text-inspector:top-auto @max-[620px]/text-inspector:has-[aside]:bottom-[var(--image-text-toolbar-lane,0px)] @max-[620px]/text-inspector:w-full @max-[620px]/text-inspector:max-w-full @max-[620px]/text-inspector:[--image-text-dock:bottom] @max-[620px]/text-inspector:[&_aside]:w-full",
              w,
            )),
            (d[8] = w),
            (d[9] = l))
          : (l = d[9]),
        d[10] !== p || d[11] !== l
          ? ((s = (0, i.jsx)("div", {
              ref: y,
              className: "@container/text-inspector pointer-events-none absolute inset-0 overflow-clip",
              children: (0, i.jsx)("div", { ref: b, className: l, children: p }),
            })),
            (d[10] = p),
            (d[11] = l),
            (d[12] = s))
          : (s = d[12]),
        s
      )
    }
    function nD(e, t, n, i) {
      let r = e.closest("[data-image-text-stage]")
      if (null == r || null == t.adjustViewport) return
      let a = r.getBoundingClientRect(),
        l = e.getBoundingClientRect()
      if (a.width <= 0 || a.height <= 0) return
      let { width: o, height: s } = i.snapshot.content,
        { imageRect: d } = t,
        c = n.x + n.width / 2,
        u = n.y + n.height / 2,
        g = (n.rotation * Math.PI) / 180,
        m = (Math.abs(Math.cos(g)) * n.width + Math.abs(Math.sin(g)) * n.height) / 2,
        h = (Math.abs(Math.sin(g)) * n.width + Math.abs(Math.cos(g)) * n.height) / 2,
        f = c - m,
        p = c + m,
        x = u - h,
        v = u + h
      if ("wrapText" in n && !n.wrapText)
        try {
          for (let e of (0, ti.l5)(i, i.assets.fonts, n.id))
            for (let t of e.stops)
              ((f = Math.min(f, t.top.x, t.bottom.x)),
                (p = Math.max(p, t.top.x, t.bottom.x)),
                (x = Math.min(x, t.top.y, t.bottom.y)),
                (v = Math.max(v, t.top.y, t.bottom.y)))
        } catch (e) {
          if (!(e instanceof ti.Zo)) throw e
        }
      let y = {
          left: d.left + (f / o) * d.width,
          top: d.top + (x / s) * d.height,
          width: ((p - f) / o) * d.width,
          height: ((v - x) / s) * d.height,
        },
        b = Math.min(12, a.width / 8, a.height / 8),
        w = (function (e, t, n) {
          let i = Math.min(1, n.width / Math.max(1, t.width), n.height / Math.max(1, t.height))
          function r(e, t, n, r, a, l) {
            let o = e + t / 2,
              s = o + (n - o) * i
            return s < a ? a - s : -Math.max(0, s + r * i - a - l)
          }
          return {
            factor: i,
            x: r(e.left, e.width, t.left, t.width, n.left, n.width),
            y: r(e.top, e.height, t.top, t.height, n.top, n.height),
          }
        })(d, y, {
          left: a.left - l.left + b,
          top: a.top - l.top + b,
          width: a.width - 2 * b,
          height: a.height - 2 * b,
        })
      ;(1 !== w.factor || 0 !== w.x || 0 !== w.y) && t.adjustViewport(w.factor, { x: w.x, y: w.y })
    }
    function nO(e, t, n) {
      return e < n.right && e + t > n.left
    }
    n("GgrQ")
    let nB = { contentHeight: 0, toolbar: null },
      nU = new WeakMap(),
      nF = 0,
      n$ = (0, d.A4)(
        ej.u,
        (e) => !e.hidden,
        (e, { set: t }) => {
          let n = () => t(!e.hidden)
          return (e.addEventListener("visibilitychange", n), n(), () => e.removeEventListener("visibilitychange", n))
        },
        { autoDispose: !0 },
      ),
      nH = (0, d.A4)(
        ej.u,
        nB,
        ({ stage: e, toolbarRef: t, surface: n }, { set: i }) => {
          let r = n?.firstElementChild,
            a = null,
            l = () => {
              let n = t?.current ?? null
              n !== a && (a && o.unobserve(a), (a = n) && o.observe(a))
              let l = e.getBoundingClientRect(),
                s = a?.getBoundingClientRect(),
                d = r instanceof HTMLElement ? r.offsetHeight : 0
              if (
                !s ||
                s.width <= 0 ||
                s.height <= 0 ||
                l.width <= 0 ||
                l.height <= 0 ||
                s.right <= l.left ||
                s.left >= l.right ||
                s.bottom <= l.top ||
                s.top >= l.bottom
              )
                return void i({ contentHeight: d, toolbar: null })
              let c = s.top + s.height / 2 >= l.top + l.height / 2
              i({
                contentHeight: d,
                toolbar: {
                  left: s.left - l.left,
                  right: s.right - l.left,
                  top: c ? 0 : Math.min(l.height, s.bottom - l.top),
                  bottom: c ? Math.min(l.height, l.bottom - s.top) : 0,
                  stageWidth: l.width,
                  stageHeight: l.height,
                },
              })
            },
            o = new ResizeObserver(l)
          return (o.observe(e), r && o.observe(r), l(), () => o.disconnect())
        },
        {
          autoDispose: !0,
          isEqual: eX(),
          key: ({ stage: e, toolbarRef: t, surface: n, windowZoom: i }) => JSON.stringify([nK(e), nK(t), nK(n), i]),
        },
      )
    function nK(e) {
      if (null == e) return 0
      let t = nU.get(e)
      return (null == t && ((t = ++nF), nU.set(e, t)), t)
    }
    var nV = n("ASxG"),
      nG = n("HWdm")
    function nq(e) {
      return null != e && (null == e.noteId || "edit" === e.mode)
    }
    let nW = (0, d.bD)(ej.u, (e) => new Map()),
      nY = (0, d.bD)(ej.u, (e) => ""),
      nZ = (0, d.bD)(ej.u, (e) => new Map()),
      nX = (0, d.bD)(ej.u, (e) => "idle"),
      nQ = (0, d.i1)(ej.u, (e, { get: t }) => {
        let n = t(nX, e)
        return "retry-edited-image" === n || ("string" != typeof n && n.sendsEditedImage)
      }),
      nJ = (0, d.i1)(
        ej.u,
        (e, { get: t }) =>
          t(nQ, e) ||
          !!t(nY, e).trim() ||
          t(nZ, e).size > 0 ||
          [...t(nW, e).values()].some((e) => !e.resolved && !e.sent),
      ),
      n1 = (0, d.i1)(ej.u, (e, { get: t }) => {
        let n = t(nX, e)
        return "string" != typeof n ? "sending" : "retry-edited-image" === n ? "failed" : n
      }),
      n0 = (0, d.bD)(ej.u, (e) => null),
      n2 = (0, d.bD)(ej.u, (e) => null),
      n3 = (0, d.bD)(ej.u, (e) => new Map(), void 0, { autoDispose: !0 }),
      n4 = (0, d.i1)(ej.u, ({ reviewKey: e, editorId: t }, { get: n }) => n(n3, e).get(t) ?? null),
      n6 = (0, d.i1)(ej.u, (e, { get: t }) => Array.from(t(n3, e).values()).some(nq)),
      n5 = (0, d.bD)(ej.u, (e) => !1),
      n9 = nV.object({
        instruction: nV.string().optional(),
        edits: nV
          .array(
            nV.tuple([
              nV.string(),
              nV.object({
                replacementText: nV.string().max(4e3).optional(),
                destination: nV
                  .object({
                    x: nV.number(),
                    y: nV.number(),
                    width: nV.number().positive(),
                    height: nV.number().positive(),
                    rotation: nV.number().min(-180).max(180).optional(),
                  })
                  .optional(),
              }),
            ]),
          )
          .optional(),
        notes: nV.array(
          nV.tuple([
            nV.string(),
            nV.object({
              blockId: nV.string(),
              body: nV.string(),
              excerpt: nV.string().optional(),
              createdAt: nV.string().optional(),
              replies: nV.array(nV.object({ id: nV.string(), body: nV.string(), createdAt: nV.string() })).optional(),
              draftReply: nV.string().optional(),
            }),
          ]),
        ),
      }),
      n8 = (0, nG.Z)("image-text-editing-requests", { maxDrafts: 100 })
    function n7(e, t, n, i) {
      e.set(n3, t, (e) => {
        if (null == i && !e.has(n)) return e
        let t = new Map(e)
        return (null == i ? t.delete(n) : t.set(n, i), t)
      })
    }
    function ie(e, t) {
      if (!e.get(n5, t)) return
      let n = e.get(nY, t),
        i = [...e.get(nW, t)].filter(([, e]) => !e.sent && !e.resolved),
        r = [...e.get(nZ, t)]
      n8.setDraft(e, [t], n.trim() || i.length || r.length ? { instruction: n || void 0, notes: i, edits: r } : void 0)
    }
    function it(e, t, n, i) {
      let r = e.get(nZ, t)
      if (null == i.destination && null == i.replacementText) {
        if (!r.has(n)) return
        let i = new Map(r)
        ;(i.delete(n), e.set(nZ, t, i))
      } else {
        if (eX()(r.get(n), i)) return
        e.set(nZ, t, new Map(r).set(n, i))
      }
      ;("failed" === e.get(nX, t) && e.set(nX, t, "idle"), ie(e, t))
    }
    function ii(e, t, n) {
      let i = e.get(nW, t),
        r = new Map(i)
      for (let e of n) r.delete(e)
      r.size !== i.size && id(e, t, r)
    }
    function ir(e, t) {
      return !!t.resolved && !Array.from(e.values()).some((e) => e.blockId === t.blockId && !e.resolved)
    }
    function ia(e, t = e.galleryId) {
      return JSON.stringify([e.accountId, e.userId, t, e.documentId ?? e.id, e.version ?? null])
    }
    function il(e) {
      return [e.body, ...(e.replies ?? []).map((e) => e.body)].filter(Boolean).join("\n\n")
    }
    function io(e, t) {
      let n, i
      for (let [r, a] of e)
        if (a.blockId === t)
          if (a.resolved) i = r
          else {
            if (!a.sent) return r
            n = r
          }
      return n ?? i
    }
    function is(e, t) {
      if (0 === e.size) return []
      let n = new Map(t.map((e) => [e.id, e]))
      return Array.from(e).flatMap(([e, t]) => {
        let i = n.get(t.blockId)
        return null == i || t.resolved || t.sent ? [] : [{ id: e, review: t, region: i }]
      })
    }
    function id(e, t, n) {
      ;(e.set(nW, t, n),
        ie(e, t),
        Array.from(n.values()).every((e) => e.resolved || e.sent) && "failed" === e.get(nX, t) && e.set(nX, t, "idle"))
    }
    var ic = n("QbVZ")
    function iu(e) {
      let t,
        n,
        a,
        l = (0, r.c)(7),
        { body: o, target: s } = e
      return (
        l[0] !== o
          ? ((t = (0, i.jsx)("div", { dir: "auto", className: "break-words whitespace-pre-wrap", children: o })),
            (l[0] = o),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== s
          ? ((n = (0, i.jsx)(tH.E, {
              dir: "auto",
              animateOnGroupHover: !0,
              className: "text-xs text-tertiary",
              children: s,
            })),
            (l[2] = s),
            (l[3] = n))
          : (n = l[3]),
        l[4] !== t || l[5] !== n
          ? ((a = (0, i.jsxs)("div", {
              className: "group flex min-w-0 flex-1 flex-col gap-0.5 text-start",
              children: [t, n],
            })),
            (l[4] = t),
            (l[5] = n),
            (l[6] = a))
          : (a = l[6]),
        a
      )
    }
    function ig(e) {
      let t,
        n,
        a = (0, r.c)(5),
        { number: l, className: s } = e,
        d = void 0 === s ? "size-full" : s
      return (
        a[0] !== d
          ? ((t = (0, o.A)(
              "font-sans text-[10px] leading-none font-semibold tabular-nums scheme-light [--alpha-10:var(--gray-150)] [--color-border:var(--gray-150)] [--color-surface:white] [--color-text:var(--gray-700)]",
              d,
            )),
            (a[0] = d),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== l || a[3] !== t
          ? ((n = (0, i.jsx)(ic.Sj, { appearance: "avatar", className: t, children: l })),
            (a[2] = l),
            (a[3] = t),
            (a[4] = n))
          : (n = a[4]),
        n
      )
    }
    var im = n("CZgV"),
      ih = n("ThSU"),
      ip = n("PpSX"),
      ix = n("tgP9"),
      iv = n("JjB1"),
      iy = n("YwjY"),
      ib = n("HFnF")
    function iw(e) {
      let t,
        n,
        a,
        l,
        s,
        d,
        c,
        u,
        h,
        f,
        p,
        x,
        v,
        b,
        w,
        I,
        M,
        j,
        C,
        E,
        S = (0, r.c)(43),
        { value: T, onChange: _, onCancel: A, onDelete: k, onSave: P } = e,
        R = (0, g.A)()
      S[0] !== T ? ((t = T.trim()), (S[0] = T), (S[1] = t)) : (t = S[1])
      let N = t
      S[2] !== N || S[3] !== P
        ? ((n = () => {
            N && P(N)
          }),
          (S[2] = N),
          (S[3] = P),
          (S[4] = n))
        : (n = S[4])
      let z = n
      ;(S[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { height: eD.bUX }), (l = (0, o.A)(iv.Fn, "top-2 right-4 bottom-[52px]")), (S[5] = a), (S[6] = l))
        : ((a = S[5]), (l = S[6])),
        S[7] !== R
          ? ((s = R.formatMessage({
              id: "imageSidePanel.editCommentInput",
              defaultMessage: "Edit comment",
              description: "Accessible label for the text field for editing an existing image comment",
            })),
            (S[7] = R),
            (S[8] = s))
          : (s = S[8]),
        S[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, o.A)(iv.Eb, "h-full resize-none border-0 bg-transparent !outline-none")), (S[9] = d))
          : (d = S[9]),
        S[10] !== _ ? ((c = (e) => _(e.currentTarget.value)), (S[10] = _), (S[11] = c)) : (c = S[11]),
        S[12] !== z
          ? ((u = (e) => {
              "Enter" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(), e.stopPropagation(), z())
            }),
            (S[12] = z),
            (S[13] = u))
          : (u = S[13]),
        S[14] !== s || S[15] !== c || S[16] !== u || S[17] !== T
          ? ((h = (0, i.jsx)("div", {
              className: l,
              children: (0, i.jsx)("div", {
                className: "h-full min-h-0 translate-y-0.5",
                children: (0, i.jsx)("textarea", {
                  autoFocus: !0,
                  "aria-label": s,
                  className: d,
                  value: T,
                  onChange: c,
                  onKeyDown: u,
                }),
              }),
            })),
            (S[14] = s),
            (S[15] = c),
            (S[16] = u),
            (S[17] = T),
            (S[18] = h))
          : (h = S[18]),
        S[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, o.A)(iv.xB, "justify-between")), (S[19] = f))
          : (f = S[19]),
        S[20] !== R
          ? ((p = R.formatMessage({
              id: "imageSidePanel.deleteComment",
              defaultMessage: "Delete comment",
              description: "Accessible label for deleting a saved image comment.",
            })),
            (S[20] = R),
            (S[21] = p))
          : (p = S[21]))
      let L = null == k
      ;(S[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (0, i.jsx)(ib.A, { className: "icon-sm" })), (S[22] = x))
        : (x = S[22]),
        S[23] !== k || S[24] !== p || S[25] !== L
          ? ((v = (0, i.jsx)(y.$, {
              "aria-label": p,
              color: "ghostMuted",
              size: "composer",
              uniform: !0,
              disabled: L,
              onClick: k,
              children: x,
            })),
            (S[23] = k),
            (S[24] = p),
            (S[25] = L),
            (S[26] = v))
          : (v = S[26]),
        S[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(m.A, {
              id: "imageSidePanel.cancelCommentEdit",
              defaultMessage: "Cancel",
              description: "Button label for canceling an image comment edit.",
            })),
            (S[27] = b))
          : (b = S[27]),
        S[28] !== A
          ? ((w = (0, i.jsx)(y.$, { color: "outline", size: "composer", onClick: A, children: b })),
            (S[28] = A),
            (S[29] = w))
          : (w = S[29]))
      let D = !N
      return (
        S[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.jsx)(m.A, {
              id: "imageSidePanel.saveCommentEdit",
              defaultMessage: "Save",
              description: "Button label for saving an image comment edit.",
            })),
            (S[30] = I))
          : (I = S[30]),
        S[31] !== z || S[32] !== D
          ? ((M = (0, i.jsx)(y.$, { color: "primary", disabled: D, size: "composer", onClick: z, children: I })),
            (S[31] = z),
            (S[32] = D),
            (S[33] = M))
          : (M = S[33]),
        S[34] !== w || S[35] !== M
          ? ((j = (0, i.jsxs)("div", { className: "flex items-center gap-1.5", children: [w, M] })),
            (S[34] = w),
            (S[35] = M),
            (S[36] = j))
          : (j = S[36]),
        S[37] !== v || S[38] !== j
          ? ((C = (0, i.jsxs)("div", { className: f, children: [v, j] })), (S[37] = v), (S[38] = j), (S[39] = C))
          : (C = S[39]),
        S[40] !== C || S[41] !== h
          ? ((E = (0, i.jsxs)(iy.o, { className: "relative", style: a, children: [h, C] })),
            (S[40] = C),
            (S[41] = h),
            (S[42] = E))
          : (E = S[42]),
        E
      )
    }
    let iI = "[data-image-text-list-panel]",
      iM = `[data-viewer-zoom-control], [data-image-text-request], [data-image-text-list-toggle], [data-image-text-discard], ${iI}`
    function ij(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        m,
        h,
        f = (0, r.c)(38),
        {
          style: p,
          containerElement: x,
          isPanReady: v,
          review: y,
          selectedExcerpt: b,
          onSave: w,
          onDelete: I,
          onClose: M,
          surface: j,
          onSurfaceChange: C,
        } = e,
        E = (0, g.A)(),
        S = (0, c.useRef)(!1),
        [T] = (0, c.useState)(y)
      f[0] !== T
        ? ((t = null == T ? "" : [il(T), T.draftReply].filter(Boolean).join("\n\n")), (f[0] = T), (f[1] = t))
        : (t = f[1])
      let _ = t,
        [A, k] = (0, c.useState)(_),
        P = T?.excerpt ?? b
      f[2] !== A || f[3] !== _ || f[4] !== v || f[5] !== M || f[6] !== j
        ? ((n = (e) => {
            let t = e.target
            return (
              !(v || 0 !== e.button || (!iA(t) && ik(t, iM))) &&
              (!j || e.composedPath().includes(j)
                ? ((S.current = !1), !1)
                : A.trim() === _.trim() || S.current
                  ? (M(), !1)
                  : ((S.current = !0), (0, ih.AE)(j), e.preventDefault(), e.stopPropagation(), !0))
            )
          }),
          (f[2] = A),
          (f[3] = _),
          (f[4] = v),
          (f[5] = M),
          (f[6] = j),
          (f[7] = n))
        : (n = f[7])
      let R = (0, c.useEffectEvent)(n)
      ;(f[8] !== x.ownerDocument || f[9] !== R
        ? ((a = () => {
            let e = x.ownerDocument,
              t = !1,
              n = (e) => {
                t = R(e)
              },
              i = (e) => {
                ;(t && e.detail > 0
                  ? (e.preventDefault(), e.stopPropagation())
                  : 0 === e.detail && iA(e.target) && R(e),
                  (t = !1))
              }
            return (
              e.addEventListener("pointerdown", n, !0),
              e.addEventListener("click", i, !0),
              () => {
                ;(e.removeEventListener("pointerdown", n, !0), e.removeEventListener("click", i, !0))
              }
            )
          }),
          (f[8] = x.ownerDocument),
          (f[9] = R),
          (f[10] = a))
        : (a = f[10]),
        f[11] !== x ? ((l = [x]), (f[11] = x), (f[12] = l)) : (l = f[12]),
        (0, c.useEffect)(a, l),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (e) => {
              ;((S.current = !1), k(e))
            }),
            (f[13] = o))
          : (o = f[13]))
      let N = o
      f[14] !== P || f[15] !== T || f[16] !== M || f[17] !== w
        ? ((s = (e) => {
            T?.body !== e || T.replies?.length || T.draftReply ? w(e, P) : M()
          }),
          (f[14] = P),
          (f[15] = T),
          (f[16] = M),
          (f[17] = w),
          (f[18] = s))
        : (s = f[18])
      let z = s
      f[19] !== E
        ? ((d = E.formatMessage({
            id: "imageSidePanel.addComment",
            defaultMessage: "Add comment",
            description: "Accessible label for adding a comment to an image.",
          })),
          (f[19] = E),
          (f[20] = d))
        : (d = f[20])
      let L = d
      return (
        f[21] !== M
          ? ((u = (e) => {
              if ("Escape" === e.key || "Enter" === e.key) {
                if (e.nativeEvent.isComposing || 229 === e.nativeEvent.keyCode) return void e.stopPropagation()
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), M())
              }
            }),
            (f[21] = M),
            (f[22] = u))
          : (u = f[22]),
        f[23] !== L ||
        f[24] !== A ||
        f[25] !== P ||
        f[26] !== T ||
        f[27] !== E ||
        f[28] !== M ||
        f[29] !== I ||
        f[30] !== y?.sent ||
        f[31] !== z
          ? ((m = T
              ? (0, i.jsx)(iw, { value: A, onChange: N, onCancel: M, onDelete: y?.sent ? void 0 : I, onSave: z })
              : (0, i.jsx)(im.h, {
                  mode: "create",
                  canAssignToChatGpt: !1,
                  labels: {
                    input: L,
                    submit: L,
                    placeholder: P
                      ? E.formatMessage(
                          {
                            id: "imageTextEditing.addExcerptCommentPlaceholder",
                            defaultMessage: "Comment on “{excerpt}”…",
                            description: "Comment field placeholder quoting the selected words on the image",
                          },
                          { excerpt: P },
                        )
                      : E.formatMessage({
                          id: "artifactComments.newCommentPlaceholder",
                          defaultMessage: "Add a comment",
                          description: "Placeholder in the floating artifact comment composer",
                        }),
                  },
                  renderInput: iC,
                  value: A,
                  onChange: N,
                  onCancel: M,
                  onSubmit: (e) => {
                    let { body: t } = e
                    return (z(t), !0)
                  },
                })),
            (f[23] = L),
            (f[24] = A),
            (f[25] = P),
            (f[26] = T),
            (f[27] = E),
            (f[28] = M),
            (f[29] = I),
            (f[30] = y?.sent),
            (f[31] = z),
            (f[32] = m))
          : (m = f[32]),
        f[33] !== C || f[34] !== p || f[35] !== u || f[36] !== m
          ? ((h = (0, i.jsx)("div", {
              className: "pointer-events-auto absolute z-10",
              ref: C,
              "data-annotation-control": !0,
              style: p,
              onPointerDown: iE,
              onKeyDownCapture: u,
              children: m,
            })),
            (f[33] = C),
            (f[34] = p),
            (f[35] = u),
            (f[36] = m),
            (f[37] = h))
          : (h = f[37]),
        h
      )
    }
    function iC(e) {
      return (0, i.jsx)(ip.q, { ...e })
    }
    function iE(e) {
      return e.stopPropagation()
    }
    function iS(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        u,
        m,
        h,
        f,
        p,
        x,
        v,
        y = (0, r.c)(48),
        {
          noteId: b,
          targetBounds: w,
          boundary: I,
          collisionPadding: M,
          side: j,
          windowZoom: C,
          target: E,
          body: S,
          number: T,
          pinned: _,
          onPin: A,
          onPreview: k,
          onLeave: P,
          onEscape: R,
          onEdit: N,
          onDelete: z,
          onDismiss: L,
        } = e,
        D = (0, g.A)(),
        O = (0, c.useRef)(null)
      ;(y[0] !== _
        ? ((t = () => {
            _ && i_(O.current)
          }),
          (n = [_]),
          (y[0] = _),
          (y[1] = t),
          (y[2] = n))
        : ((t = y[1]), (n = y[2])),
        (0, c.useLayoutEffect)(t, n),
        y[3] !== L
          ? ((a = (e) => {
              e || L()
            }),
            (y[3] = L),
            (y[4] = a))
          : (a = y[4]),
        y[5] !== w
          ? ((l = (0, i.jsx)(tb.dT, {
              asChild: !0,
              children: (0, i.jsx)("span", { "aria-hidden": !0, className: "pointer-events-none absolute", style: w }),
            })),
            (y[5] = w),
            (y[6] = l))
          : (l = y[6]))
      let B = _ ? "dialog" : "tooltip"
      y[7] !== D || y[8] !== T
        ? ((o = D.formatMessage(
            {
              id: "imageTextEditing.numberedComment",
              defaultMessage: "Comment {number}",
              description: "Title of a numbered image text comment preview",
            },
            { number: T },
          )),
          (y[7] = D),
          (y[8] = T),
          (y[9] = o))
        : (o = y[9])
      let U = "right" === j ? "start" : "end",
        F = "right" === j ? -8 * C : 0,
        $ = 12 * C
      ;(y[10] === Symbol.for("react.memo_cache_sentinel") ? ((s = { width: 320 }), (y[10] = s)) : (s = y[10]),
        y[11] !== _
          ? ((d = (e) => {
              ;(e.preventDefault(), _ && i_(O.current))
            }),
            (y[11] = _),
            (y[12] = d))
          : (d = y[12]),
        y[13] !== b
          ? ((u = (e) => {
              let t = e.target
              ;(ik(t, iM) ||
                (t instanceof Element &&
                  t.closest("[data-paged-annotation-id]")?.getAttribute("data-paged-annotation-id") === b)) &&
                e.preventDefault()
            }),
            (y[13] = b),
            (y[14] = u))
          : (u = y[14]))
      let H = _ ? void 0 : A
      return (
        y[15] !== R
          ? ((m = (e) => {
              ;(e.preventDefault(), e.isComposing || ik(e.target, `${iI}, [data-image-text-request]`) || R())
            }),
            (y[15] = R),
            (y[16] = m))
          : (m = y[16]),
        y[17] !== S || y[18] !== E
          ? ((h = (0, i.jsx)(iu, { body: S, target: E })), (y[17] = S), (y[18] = E), (y[19] = h))
          : (h = y[19]),
        y[20] !== T || y[21] !== z || y[22] !== N || y[23] !== _
          ? ((f = _ && (0, i.jsx)(ix.B, { annotationNumber: T, onEdit: N, onRemove: z })),
            (y[20] = T),
            (y[21] = z),
            (y[22] = N),
            (y[23] = _),
            (y[24] = f))
          : (f = y[24]),
        y[25] !== h || y[26] !== f
          ? ((p = (0, i.jsxs)("div", {
              className: "flex items-start gap-2 p-3 text-sm leading-5 select-text",
              children: [h, f],
            })),
            (y[25] = h),
            (y[26] = f),
            (y[27] = p))
          : (p = y[27]),
        y[28] !== I ||
        y[29] !== M ||
        y[30] !== P ||
        y[31] !== k ||
        y[32] !== j ||
        y[33] !== d ||
        y[34] !== u ||
        y[35] !== H ||
        y[36] !== m ||
        y[37] !== p ||
        y[38] !== B ||
        y[39] !== o ||
        y[40] !== U ||
        y[41] !== F ||
        y[42] !== $
          ? ((x = (0, i.jsx)(tb.hl, {
              ref: O,
              role: B,
              "aria-label": o,
              tabIndex: -1,
              className: "pointer-events-auto",
              "data-annotation-control": !0,
              "data-image-text-review": !0,
              variant: "comment",
              size: "content",
              disablePadding: !0,
              side: j,
              align: U,
              alignOffset: F,
              sideOffset: $,
              sticky: "always",
              style: s,
              collisionBoundary: I,
              collisionPadding: M,
              onOpenAutoFocus: d,
              onCloseAutoFocus: iT,
              onInteractOutside: u,
              onPointerEnter: k,
              onPointerLeave: P,
              onClick: H,
              onEscapeKeyDown: m,
              children: p,
            })),
            (y[28] = I),
            (y[29] = M),
            (y[30] = P),
            (y[31] = k),
            (y[32] = j),
            (y[33] = d),
            (y[34] = u),
            (y[35] = H),
            (y[36] = m),
            (y[37] = p),
            (y[38] = B),
            (y[39] = o),
            (y[40] = U),
            (y[41] = F),
            (y[42] = $),
            (y[43] = x))
          : (x = y[43]),
        y[44] !== x || y[45] !== a || y[46] !== l
          ? ((v = (0, i.jsxs)(tb.AM, { open: !0, onOpenChange: a, children: [l, x] })),
            (y[44] = x),
            (y[45] = a),
            (y[46] = l),
            (y[47] = v))
          : (v = y[47]),
        v
      )
    }
    function iT(e) {
      return e.preventDefault()
    }
    function i_(e) {
      e && !ik(e.ownerDocument.activeElement, iI) && e.focus({ preventScroll: !0 })
    }
    function iA(e) {
      return (
        e instanceof Element &&
        null != e.closest('[data-image-text-list-panel="comments"]') &&
        null != e.closest("[data-image-text-comment-action]")
      )
    }
    function ik(e, t) {
      if (!(e instanceof Element)) return !1
      if (e.closest(t)) return !0
      let n = e.closest('[role="menu"]')?.getAttribute("aria-labelledby")
      return null != n && e.ownerDocument.getElementById(n)?.closest(t) != null
    }
    function iP(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        u,
        m,
        h,
        f,
        p,
        v = (0, r.c)(29),
        {
          reviewKey: y,
          selection: b,
          regions: w,
          viewport: I,
          imageSize: M,
          containerElement: j,
          toolbarRef: C,
          onOpen: E,
          onEdit: S,
          onClose: _,
        } = e,
        A = (0, d.gh)(ej.u),
        k = (0, g.A)(),
        P = (0, x.dz)(),
        R = (0, c.useId)(),
        N = (0, d._U)(nW, y),
        z = is(N, w),
        L = (0, d._U)((null != b || z.length > 0) && n$, j.ownerDocument),
        [D, O] = (0, T.Xl)(),
        [B, U] = (0, c.useState)(null)
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => U({ id: e, leaving: !1 })), (v[0] = t))
        : (t = v[0])
      let F = t
      v[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (e) => U((t) => (t?.id === e ? { id: e, leaving: !0 } : t))), (v[1] = n))
        : (n = v[1])
      let $ = n,
        [H, K] = (0, c.useState)(null)
      v[2] !== b?.blockId ? ((a = (e) => e.id === b?.blockId), (v[2] = b?.blockId), (v[3] = a)) : (a = v[3])
      let V = w.find(a),
        { imageRect: G, fitImageRect: q } = I,
        W = {
          width: Math.max(1, O.width ?? (q.width + 2 * q.left) / P),
          height: Math.max(1, O.height ?? (q.height + 2 * q.top) / P),
        },
        Y = null == V ? null : iD(V, G, M, P),
        Z = [],
        X = z.flatMap((e, t) => {
          let { id: n, region: i, review: r } = e,
            a = iD(i, G, M, P)
          if (null == a) return []
          let l = iz(a, Z, W)
          return null == l ? [] : (Z.push(l), [{ id: n, region: i, review: r, bounds: a, position: l, number: t + 1 }])
        })
      v[4] !== b?.noteId ? ((l = (e) => e.id === b?.noteId), (v[4] = b?.noteId), (v[5] = l)) : (l = v[5])
      let Q = X.find(l),
        J = Q?.position ?? (Y ? iz(Y, Z, W) : null),
        ee = b?.noteId
      v[6] !== b ? ((o = nq(b)), (v[6] = b), (v[7] = o)) : (o = v[7])
      let et = o,
        en = et ? null : (Q ?? X.find((e) => e.id === B?.id)),
        ei = et && null == ee ? H : null
      v[8] !== j || v[9] !== ei || v[10] !== C || v[11] !== P
        ? ((s = { stage: j, toolbarRef: C, surface: ei, windowZoom: P }),
          (v[8] = j),
          (v[9] = ei),
          (v[10] = C),
          (v[11] = P),
          (v[12] = s))
        : (s = v[12])
      let er = (0, d._U)(L && ((et && null != Y) || null != en) ? nH : nB, s),
        ea = er.toolbar,
        el = ea
          ? {
              left: (ea.left / ea.stageWidth) * W.width,
              right: (ea.right / ea.stageWidth) * W.width,
              top: (ea.top / ea.stageHeight) * W.height,
              bottom: (ea.bottom / ea.stageHeight) * W.height,
            }
          : void 0
      v[13] !== k.locale ? ((u = (0, nz.b)(k.locale)), (v[13] = k.locale), (v[14] = u)) : (u = v[14])
      let eo = "rtl" === u,
        es = en
          ? (function (e, t, n, i, r) {
              let a = 8 / i,
                l = t.left + 15 + 12,
                o = Math.min(320, Math.max(1, n - 2 * a))
              if (l >= e.left + e.width && l + 320 <= n - a)
                return {
                  anchor: { left: t.left - 15, top: t.top - 15, width: 30, height: 30 },
                  side: "right",
                  left: l,
                  width: o,
                }
              let s = Math.max(e.top + e.height, t.top + 15),
                d = r ? e.left : e.left + e.width - o
              return {
                anchor: { ...e, height: s - e.top },
                side: "bottom",
                left: Math.max(a, Math.min(d, n - o - a)),
                width: o,
              }
            })(en.bounds, en.position, W.width, P, eo)
          : null,
        ed = el && es && nO(es.left, es.width, el) ? ea : null,
        ec = es?.side === "bottom" ? 350 : 120
      ;(v[15] !== B?.leaving || v[16] !== ec
        ? ((m = () => {
            if (!B?.leaving) return
            let e = window.setTimeout(() => U(null), ec)
            return () => window.clearTimeout(e)
          }),
          (v[15] = B?.leaving),
          (v[16] = ec),
          (v[17] = m))
        : (m = v[17]),
        v[18] !== B || v[19] !== ec ? ((h = [B, ec]), (v[18] = B), (v[19] = ec), (v[20] = h)) : (h = v[20]),
        (0, c.useEffect)(m, h))
      let eu = L ? D : void 0
      v[21] !== P ? ((f = { zoom: P }), (v[21] = P), (v[22] = f)) : (f = v[22])
      let eg = X.map((e) => {
          let { id: t, region: n, review: r, position: a, number: l } = e
          if (et && t === ee) return null
          let o = `${R}-${l}`,
            s = et ? void 0 : () => F(t),
            d = et ? void 0 : () => $(t)
          return (0, i.jsxs)(
            "button",
            {
              type: "button",
              className:
                "popcorn-paged-annotation-marker popcorn-paged-annotation-marker-interactive group/image-text-marker rounded-[50%_50%_50%_3px] [--popcorn-paged-annotation-focus-ring:var(--gray-650)] [--popcorn-paged-annotation-interaction-cursor:var(--cursor-interaction)]",
              "data-paged-annotation-id": t,
              "data-testid": "image-text-comment-marker",
              "aria-label": k.formatMessage(
                {
                  id: "imageTextEditing.viewNumberedComment",
                  defaultMessage: "View comment {number}",
                  description: "Accessible label for viewing a numbered comment on image text.",
                },
                { number: l },
              ),
              "aria-describedby": o,
              "aria-expanded": t === ee,
              style: iN(a, W),
              onMouseEnter: s,
              onMouseLeave: d,
              onFocus: s,
              onBlur: d,
              onPointerDown: iR,
              onClick: (e) => {
                ;(e.preventDefault(), e.stopPropagation(), U(null), E(n.id, t))
              },
              children: [
                (0, i.jsx)("span", {
                  className:
                    "popcorn-paged-annotation-marker-content group-hover/image-text-marker:scale-105 group-aria-expanded/image-text-marker:scale-105",
                  children: (0, i.jsx)(ig, { number: l }),
                }),
                (0, i.jsx)("span", { id: o, hidden: !0, children: il(r) }),
              ],
            },
            t,
          )
        }),
        em =
          null != en &&
          null != es &&
          (0, i.jsx)(
            iS,
            {
              noteId: en.id,
              targetBounds: es.anchor,
              side: es.side,
              windowZoom: P,
              boundary: j,
              collisionPadding: { left: 8, right: 8, top: 8 + (ed?.top ?? 0), bottom: 8 + (ed?.bottom ?? 0) },
              target: en.review.excerpt ?? en.region.text,
              body: il(en.review),
              number: en.number,
              pinned: Q?.id === en.id,
              onPin: () => {
                ;(U(null), E(en.region.id, en.id))
              },
              onPreview: () => F(en.id),
              onLeave: () => $(en.id),
              onEscape: () => {
                ;(U(null), Q?.id === en.id && _())
              },
              onEdit: () => {
                ;(U(null), S(en.region.id, en.id))
              },
              onDelete: () => {
                ;(ii(A, y, [en.id]), U(null), _(en.id))
              },
              onDismiss: () => {
                ;(U(null), Q?.id === en.id && _(en.id))
              },
            },
            en.id,
          ),
        eh =
          et &&
          null != b &&
          null != Y &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              null != J &&
                (0, i.jsx)("span", {
                  className: "popcorn-paged-annotation-marker",
                  "data-testid": "image-text-comment-draft-marker",
                  style: iN(J, W),
                  children: (0, i.jsx)(ig, { number: Q?.number ?? z.length + 1 }),
                }),
              (0, i.jsx)(
                ij,
                {
                  containerElement: j,
                  isPanReady: I.isPanReady,
                  surface: H,
                  onSurfaceChange: K,
                  style: (function ({ bounds: e, isEditing: t, target: n, rtl: i = !1, toolbar: r, createHeight: a }) {
                    let { editorMinX: l, editorMaxX: o, editorMinY: s, editorMaxY: d } = e,
                      c = Math.min(t ? eD.D3l : 336, Math.max(1, o - l)),
                      u = t ? eD.bUX : Math.max(eD.tuv, a ?? 0),
                      g = t ? { width: c, height: u } : { width: c },
                      m = Math.max(l, o - c),
                      h = Math.min(Math.max(i ? n.left : n.left + n.width - c, l), m),
                      f = (e) => (r && nO(e, c, r) ? { minY: s + r.top, maxY: d - r.bottom } : { minY: s, maxY: d }),
                      { minY: p, maxY: x } = f(h),
                      v = Math.max(p, x - u),
                      y = n.top + n.height + 12,
                      b = n.top - 12,
                      w = b - u
                    if (y >= p && y + u <= x) return { left: h, top: y, ...g }
                    if (w >= p && b <= x) return { left: h, top: w, ...g }
                    for (let e of [n.left + n.width + 12, n.left - 12 - c]) {
                      if (e < l || e > m) continue
                      let t = f(e)
                      if (!(t.maxY - t.minY < u))
                        return {
                          left: e,
                          top: Math.min(Math.max(n.top - u / 2, t.minY), Math.max(t.minY, t.maxY - u)),
                          ...g,
                        }
                    }
                    let I = x - Math.max(p, y),
                      M = Math.min(x, b) - p,
                      j = Math.max(I, M)
                    return j >= eD.tuv
                      ? {
                          left: h,
                          top: I >= M ? Math.max(y, p) : Math.min(x, b) - Math.min(u, j),
                          ...g,
                          ...(j < u ? { maxHeight: j, overflowY: "auto" } : {}),
                        }
                      : {
                          left: h,
                          top: Math.min(v, Math.max(p, y <= v || y - v < p - w ? y : w)),
                          ...g,
                          ...(x - p < u ? { maxHeight: Math.max(1, x - p), overflowY: "auto" } : {}),
                        }
                  })({
                    bounds: { editorMinX: 8, editorMinY: 8, editorMaxX: W.width - 8, editorMaxY: W.height - 8 },
                    target: Y,
                    rtl: eo,
                    toolbar: el,
                    createHeight: er.contentHeight,
                    isEditing: null != ee,
                  }),
                  selectedExcerpt: b.excerpt,
                  review: null == ee ? void 0 : N.get(ee),
                  onSave: (e, t) => {
                    let n = (function (e, t, n, i) {
                      let r = e.get(nW, t),
                        a = null == n ? void 0 : r.get(n),
                        l = a?.blockId !== i.blockId || a.sent || a.resolved ? io(r, i.blockId) : n,
                        o = null == l ? void 0 : r.get(l),
                        s = null == l || o?.sent ? crypto.randomUUID() : l,
                        d = null == o ? i.excerpt : o.excerpt
                      if (o?.body === i.body && !o.sent && !o.resolved && !o.replies?.length && !o.draftReply) return s
                      let c = new Map(r)
                      for (let [e, t] of r)
                        t.blockId === i.blockId && t.sent && !t.resolved && c.set(e, { ...t, resolved: !0 })
                      return (
                        c.set(s, { ...i, excerpt: d, createdAt: r.get(s)?.createdAt ?? new Date().toISOString() }),
                        id(e, t, c),
                        s
                      )
                    })(A, y, ee, { blockId: b.blockId, body: e, excerpt: t })
                    ;(U(null), E(b.blockId, n))
                  },
                  onDelete: () => {
                    ;(null == ee || A.get(nW, y).get(ee)?.sent || ii(A, y, [ee]), _())
                  },
                  onClose: () => {
                    Q ? E(Q.region.id, Q.id) : _()
                  },
                },
                JSON.stringify([b.blockId, ee]),
              ),
            ],
          })
      return (
        v[23] !== eu || v[24] !== f || v[25] !== eg || v[26] !== em || v[27] !== eh
          ? ((p = (0, i.jsxs)("div", {
              ref: eu,
              className: "pointer-events-none absolute inset-0 z-20 overflow-clip",
              "data-image-text-review": !0,
              style: f,
              children: [eg, em, eh],
            })),
            (v[23] = eu),
            (v[24] = f),
            (v[25] = eg),
            (v[26] = em),
            (v[27] = eh),
            (v[28] = p))
          : (p = v[28]),
        p
      )
    }
    function iR(e) {
      return e.stopPropagation()
    }
    function iN(e, t) {
      return { left: `${(e.left / t.width) * 100}%`, top: `${(e.top / t.height) * 100}%`, width: 30, height: 30 }
    }
    function iz(e, t, n) {
      let i = e.left + e.width
      if (i <= 0 || e.left >= n.width || e.top + e.height <= 0 || e.top >= n.height) return null
      let r = Math.min(17, n.width / 2),
        a = Math.min(17, n.height / 2),
        l = n.width - r,
        o = n.height - a,
        s = { left: Math.max(r, Math.min(i, l)), top: Math.max(a, Math.min(e.top, o)) }
      for (let e of iL(s.left, r, l))
        for (let n of iL(s.top, a, o))
          if (!t.some((t) => 30 > Math.abs(t.left - e) && 30 > Math.abs(t.top - n))) return { left: e, top: n }
      return s
    }
    function* iL(e, t, n) {
      yield e
      for (let t = e + 30; t <= n; t += 30) yield t
      for (let n = e - 30; n >= t; n -= 30) yield n
    }
    function iD(e, t, n, i) {
      let r = (0, tG.Ap)([{ ...e, left: e.x, top: e.y }])
      if (null == r) return null
      let a = t.width / n.width,
        l = t.height / n.height
      return {
        left: (t.left + r.left * a) / i,
        top: (t.top + r.top * l) / i,
        width: (r.width * a) / i,
        height: (r.height * l) / i,
      }
    }
    var iO = n("QxLb"),
      iB = n("sBdy"),
      iU = n("SAnh")
    function iF(e) {
      let t,
        n,
        a,
        l,
        s,
        c,
        u,
        h,
        f,
        p,
        x,
        v,
        b,
        I,
        M,
        j,
        C,
        E,
        S,
        T,
        _,
        A,
        k,
        P,
        R = (0, r.c)(83),
        {
          reviewKey: z,
          regions: L,
          selectedNoteId: D,
          onOpen: O,
          onEdit: B,
          onDeselectThread: U,
          onCloseList: F,
          onAddComment: $,
        } = e,
        H = (0, d.gh)(ej.u),
        K = (0, g.A)(),
        V = (0, d._U)(nW, z)
      if (R[0] !== K || R[1] !== $ || R[2] !== L || R[3] !== V) {
        let e,
          i = new Map(L.map(iG))
        ;(R[6] !== $
          ? ((e = null == $ ? void 0 : { "data-popcorn-comment-create": !0, onClick: $ }), (R[6] = $), (R[7] = e))
          : (e = R[7]),
          (t = e))
        let r = { id: "viewer", displayName: K.formatMessage(iq.author) },
          a = new Map(is(V, L).map(iV))
        ;((n = Array.from(V).flatMap((e) => {
          let [t, n] = e,
            l = i.get(n.blockId)
          if (null == l && null == n.sent) return []
          let o = il(n)
          return [
            {
              ...{
                threadId: t,
                status: n.resolved ? "resolved" : "active",
                comments: [
                  {
                    id: t,
                    author: r,
                    text: o,
                    createdAt: n.createdAt ?? "",
                    editedAt: null,
                    parentId: null,
                    reactions: [],
                    isDeleted: !1,
                  },
                ],
              },
              region: l,
              review: n,
              body: o,
              target: n.sent?.target ?? n.excerpt ?? l?.text ?? "",
              number: n.sent?.number ?? a.get(t),
            },
          ]
        })),
          (R[0] = K),
          (R[1] = $),
          (R[2] = L),
          (R[3] = V),
          (R[4] = t),
          (R[5] = n))
      } else ((t = R[4]), (n = R[5]))
      let G = n
      R[8] !== U || R[9] !== z || R[10] !== H || R[11] !== D
        ? ((a = (e) => {
            ;(ii(H, z, e), null != D && e.includes(D) && U())
          }),
          (R[8] = U),
          (R[9] = z),
          (R[10] = H),
          (R[11] = D),
          (R[12] = a))
        : (a = R[12])
      let q = a
      ;(R[13] !== K ? ((l = K.formatMessage(iq.list)), (R[13] = K), (R[14] = l)) : (l = R[14]),
        R[15] !== K ? ((s = K.formatMessage(iq.list)), (R[15] = K), (R[16] = s)) : (s = R[16]),
        R[17] !== K ? ((c = K.formatMessage(iq.list)), (R[17] = K), (R[18] = c)) : (c = R[18]),
        R[19] !== K ? ((u = K.formatMessage(iq.heading)), (R[19] = K), (R[20] = u)) : (u = R[20]),
        R[21] !== K ? ((h = K.formatMessage(iq.close)), (R[21] = K), (R[22] = h)) : (h = R[22]),
        R[23] !== K ? ((f = K.formatMessage(iq.filter)), (R[23] = K), (R[24] = f)) : (f = R[24]),
        R[25] !== K ? ((p = K.formatMessage(iq.filterOpen)), (R[25] = K), (R[26] = p)) : (p = R[26]),
        R[27] !== K ? ((x = K.formatMessage(iq.empty)), (R[27] = K), (R[28] = x)) : (x = R[28]),
        R[29] !== K ? ((v = K.formatMessage(iq.filteredEmpty)), (R[29] = K), (R[30] = v)) : (v = R[30]),
        R[31] !== K ? ((b = K.formatMessage(iq.showOpen)), (R[31] = K), (R[32] = b)) : (b = R[32]),
        R[33] !== K ? ((I = K.formatMessage(iq.resolved)), (R[33] = K), (R[34] = I)) : (I = R[34]),
        R[35] !== K ? ((M = K.formatMessage(iq.deleteAll)), (R[35] = K), (R[36] = M)) : (M = R[36]),
        R[37] !== x ||
        R[38] !== v ||
        R[39] !== b ||
        R[40] !== I ||
        R[41] !== M ||
        R[42] !== c ||
        R[43] !== u ||
        R[44] !== h ||
        R[45] !== f ||
        R[46] !== p
          ? ((j = {
              sidebar: c,
              heading: u,
              close: h,
              filter: f,
              open: p,
              empty: x,
              filteredEmpty: v,
              openEmpty: iK,
              showOpen: b,
              resolved: I,
              resolvedCount: iH,
              deleteAll: M,
            }),
            (R[37] = x),
            (R[38] = v),
            (R[39] = b),
            (R[40] = I),
            (R[41] = M),
            (R[42] = c),
            (R[43] = u),
            (R[44] = h),
            (R[45] = f),
            (R[46] = p),
            (R[47] = j))
          : (j = R[47]))
      let W = D ?? null
      return (
        R[48] !== D
          ? ((C = null == D ? void 0 : { threadId: D, requestId: D }), (R[48] = D), (R[49] = C))
          : (C = R[49]),
        R[50] !== t ? ((E = t && (0, i.jsx)(iU.D, { buttonProps: t })), (R[50] = t), (R[51] = E)) : (E = R[51]),
        R[52] !== t
          ? ((S = (e) => (0, i.jsx)(iU.w, { ...e, addCommentButtonProps: t })), (R[52] = t), (R[53] = S))
          : (S = R[53]),
        R[54] !== q ? ((T = (e) => q(e.map(i$))), (R[54] = q), (R[55] = T)) : (T = R[55]),
        R[56] !== K ||
        R[57] !== U ||
        R[58] !== B ||
        R[59] !== O ||
        R[60] !== q ||
        R[61] !== z ||
        R[62] !== V ||
        R[63] !== H ||
        R[64] !== D
          ? ((_ = (e) => {
              let { threadId: t, region: n, review: r, body: a, target: l, number: s } = e,
                d = t === D,
                c = !r.sent && !r.resolved,
                u = ir(V, r),
                g = (0, i.jsxs)(iO.y, {
                  avatar: (0, i.jsx)("span", {
                    className: "block size-6",
                    "aria-hidden": !0,
                    children: null != s && (0, i.jsx)(ig, { number: s }),
                  }),
                  hasConnector: !1,
                  header: (0, i.jsx)("div", {
                    className: (0, o.A)(
                      "flow-root text-base leading-5 before:float-end before:h-5",
                      c || u ? "before:w-13" : "before:w-7",
                    ),
                    children: (0, i.jsx)("span", {
                      dir: "auto",
                      className: "break-words whitespace-pre-wrap",
                      children: a,
                    }),
                  }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: "mt-0.5 flex min-w-0 items-baseline gap-1.5 text-xs text-tertiary",
                      children: [
                        (0, i.jsx)(tH.E, {
                          dir: "auto",
                          animateOnGroupHover: !0,
                          className: "w-auto flex-initial",
                          children: l,
                        }),
                        r.sent &&
                          (0, i.jsx)("span", { className: "shrink-0", children: (0, i.jsx)(m.A, { ...iq.sent }) }),
                      ],
                    }),
                    r.draftReply?.trim() &&
                      c &&
                      (0, i.jsx)("span", {
                        className: "mt-1 text-xs text-secondary",
                        children: (0, i.jsx)(m.A, {
                          id: "imageTextEditing.finishCommentDraft",
                          defaultMessage: "Edit this comment to finish your draft before sending.",
                          description:
                            "Explanation when an unfinished draft prevents sending the queued image text comments.",
                        }),
                      }),
                  ],
                })
              return (0, i.jsxs)("article", {
                className: (0, o.A)(
                  "group comment-typography relative min-w-0 rounded-lg",
                  d
                    ? "bg-background-secondary-soft"
                    : "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
                ),
                children: [
                  null == n
                    ? g
                    : (0, i.jsx)("button", {
                        type: "button",
                        "data-image-text-comment-action": !0,
                        "aria-label": K.formatMessage(iq.open, { target: l }),
                        "aria-pressed": d,
                        className:
                          "block w-full cursor-interaction rounded-lg text-start focus-visible:outline-2 focus-visible:outline-ring",
                        onClick: () => O(n.id, t),
                        children: g,
                      }),
                  (0, i.jsxs)("div", {
                    "data-image-text-comment-action": !0,
                    className: (0, o.A)(
                      "absolute end-2 top-2 flex items-center",
                      !d &&
                        "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100",
                    ),
                    children: [
                      u &&
                        (0, i.jsx)(y.$, {
                          color: "ghost",
                          size: "compact",
                          uniform: !0,
                          "aria-label": K.formatMessage(iq.reopen),
                          onClick: () => {
                            let e, n
                            ;(null != (n = (e = H.get(nW, z)).get(t)) &&
                              !!n.resolved != !1 &&
                              ir(e, n) &&
                              id(H, z, new Map(e).set(t, { ...n, resolved: !1 })),
                              d && U())
                          },
                          children: (0, i.jsx)(w.O8y, {}),
                        }),
                      null == s
                        ? (0, i.jsx)(y.$, {
                            "aria-label": K.formatMessage(iq.deleteComment),
                            color: "ghost",
                            size: "compact",
                            uniform: !0,
                            onClick: () => q([t]),
                            children: (0, i.jsx)(w.cSG, {}),
                          })
                        : (0, i.jsx)(ix.B, {
                            annotationNumber: s,
                            onEdit: c ? () => B(r.blockId, t) : void 0,
                            onRemove: () => q([t]),
                          }),
                    ],
                  }),
                ],
              })
            }),
            (R[56] = K),
            (R[57] = U),
            (R[58] = B),
            (R[59] = O),
            (R[60] = q),
            (R[61] = z),
            (R[62] = V),
            (R[63] = H),
            (R[64] = D),
            (R[65] = _))
          : (_ = R[65]),
        R[66] !== F ||
        R[67] !== j ||
        R[68] !== W ||
        R[69] !== C ||
        R[70] !== E ||
        R[71] !== S ||
        R[72] !== T ||
        R[73] !== _ ||
        R[74] !== G
          ? ((A = (0, i.jsx)("div", {
              className: "min-h-0 flex-1",
              children: (0, i.jsx)(iB.A, {
                labels: j,
                embedded: !0,
                threads: G,
                selectedThreadId: W,
                target: C,
                onClose: F,
                emptyAction: E,
                renderHeader: S,
                onDeleteAll: T,
                renderThread: _,
              }),
            })),
            (R[66] = F),
            (R[67] = j),
            (R[68] = W),
            (R[69] = C),
            (R[70] = E),
            (R[71] = S),
            (R[72] = T),
            (R[73] = _),
            (R[74] = G),
            (R[75] = A))
          : (A = R[75]),
        R[76] !== F || R[77] !== A || R[78] !== s
          ? ((k = (0, i.jsx)(nd, { list: "comments", label: s, onClose: F, children: A })),
            (R[76] = F),
            (R[77] = A),
            (R[78] = s),
            (R[79] = k))
          : (k = R[79]),
        R[80] !== k || R[81] !== l
          ? ((P = (0, i.jsx)(N.Io, {
              open: !0,
              size: "compact",
              className: "pointer-events-auto",
              label: l,
              children: k,
            })),
            (R[80] = k),
            (R[81] = l),
            (R[82] = P))
          : (P = R[82]),
        P
      )
    }
    function i$(e) {
      let { threadId: t } = e
      return t
    }
    function iH(e) {
      return (0, i.jsx)(m.A, { ...iq.resolvedCount, values: e })
    }
    function iK(e) {
      return (0, i.jsx)(m.A, { ...iq.openEmpty, values: { showResolved: e } })
    }
    function iV(e, t) {
      let { id: n } = e
      return [n, t + 1]
    }
    function iG(e) {
      return [e.id, e]
    }
    let iq = (0, U.YK)({
        heading: {
          id: "artifactComments.heading",
          defaultMessage: "Comments",
          description:
            "Heading of the sidebar containing native file comments and persistent ChatGPT comments on the open artifact; leave the product name ChatGPT unchanged",
        },
        close: {
          id: "artifactComments.close",
          defaultMessage: "Close comments",
          description: "Accessible label for the button that closes the artifact comments sidebar",
        },
        filter: {
          id: "artifactComments.filterLabel",
          defaultMessage: "Filter comments",
          description: "Accessible label for the menu that filters artifact comments by open or resolved status",
        },
        filterOpen: {
          id: "artifactComments.filterOpen",
          defaultMessage: "Open",
          description: "Filter option showing artifact comment threads that have not been resolved",
        },
        empty: {
          id: "artifactComments.empty",
          defaultMessage: "No comments yet",
          description:
            "Empty state shown when the open artifact has no native file comments or persistent ChatGPT comment threads; leave the product name ChatGPT unchanged",
        },
        filteredEmpty: {
          id: "artifactComments.filteredEmpty",
          defaultMessage: "Adjust filters to see comments",
          description:
            "Empty state when existing artifact comment threads do not match the selected open or resolved filter",
        },
        openEmpty: {
          id: "artifactComments.openEmptyWithResolvedLink",
          defaultMessage: "No open comment threads. <showResolved>Show resolved threads</showResolved>",
          description:
            "Empty state in the Open comments view when all existing comment threads have been resolved; the link switches to the Resolved view",
        },
        showOpen: {
          id: "artifactComments.showAllOpenThreads",
          defaultMessage: "Show all open threads",
          description: "Button that changes the artifact comments filter to show unresolved threads",
        },
        resolved: {
          id: "artifactComments.filterResolved",
          defaultMessage: "Resolved",
          description: "Filter option showing resolved artifact comment threads",
        },
        resolvedCount: {
          id: "artifactComments.resolvedCount",
          defaultMessage: "<label>Resolved</label> · {count, number}",
          description:
            "Toolbar label showing the number of resolved artifact comment threads; label styles the word Resolved with medium weight",
        },
        deleteAll: {
          id: "artifactComments.deleteAllResolved",
          defaultMessage: "Delete all",
          description: "Action that permanently deletes every resolved artifact comment thread",
        },
        list: {
          id: "imageTextEditing.commentList",
          defaultMessage: "Text comments",
          description: "Title of the panel listing notes about image lettering.",
        },
        author: {
          id: "imageTextEditing.commentAuthor",
          defaultMessage: "You",
          description: "The current user as the author of a local image text comment",
        },
        sent: {
          id: "imageTextEditing.sentComment",
          defaultMessage: "Sent",
          description: "Status for a text edit instruction already submitted with its image.",
        },
        open: {
          id: "imageTextEditing.openComment",
          defaultMessage: "Open comment on {target}",
          description: "Open a saved image text comment on its target.",
        },
        deleteComment: {
          id: "imageSidePanel.deleteComment",
          defaultMessage: "Delete comment",
          description: "Accessible label for deleting a saved image comment.",
        },
        reopen: {
          id: "imageTextEditing.reopenComment",
          defaultMessage: "Reopen comment",
          description: "Return a resolved image text comment to open comments.",
        },
      }),
      iW = "CmdOrCtrl+D",
      iY = "CmdOrCtrl+Alt+M"
    function iZ(e) {
      var t, n, a, l, o
      let h,
        f,
        p,
        v,
        I,
        j,
        C,
        E,
        S,
        T,
        _,
        A,
        k,
        P,
        N,
        z,
        L,
        D,
        O,
        B,
        U,
        F,
        $,
        H,
        K,
        V,
        G,
        q,
        W,
        Y,
        Z,
        X,
        Q,
        J,
        et,
        en,
        ei,
        er,
        ea,
        el,
        eo,
        ed,
        ec,
        eu,
        eg,
        em,
        eh,
        ef,
        ep,
        ex,
        ev,
        ey,
        eb,
        ew,
        eI,
        eM,
        eC,
        eE,
        eS,
        eT,
        e_,
        eA,
        ek,
        eP,
        eR,
        eN,
        ez,
        eL = (0, r.c)(253),
        {
          ref: eD,
          reviewKey: eO,
          propertiesPanelContainer: eB,
          source: eU,
          rendering: eF,
          renderError: e$,
          renderedPreview: eH,
          viewport: eK,
          sourcePreview: eV,
          preparing: eG,
          reconnecting: eq,
          saving: eW,
          dirty: eY,
          onCancel: eZ,
          onSave: eJ,
          error: e2,
          selectedId: tu,
          onSelect: tg,
          onChange: tm,
          onEndHistoryGroup: th,
          canUndo: tf,
          canRedo: tp,
          onUndo: tx,
          onRedo: tv,
          onRetry: ty,
          renderToolbar: tb,
        } = e,
        tw = void 0 !== eq && eq,
        tI = (0, d.gh)(ej.u),
        tM = (0, g.A)(),
        tj = (0, x.dz)(),
        tC = (0, M.I)(),
        [tE, t_] = (0, c.useState)(null),
        tA = (0, c.useId)(),
        tk = eO ?? tA,
        tP = "sending" === (0, d._U)(n1, tk),
        tN = (0, c.useRef)(null),
        tz = (0, c.useRef)(void 0)
      eL[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e) => tz.current === e && ((tz.current = void 0), !0)), (eL[0] = h))
        : (h = eL[0])
      let tL = h,
        tD = (0, c.useRef)(null)
      ;(eL[1] !== tu || eL[2] !== tE
        ? ((f = () => {
            null != tu &&
              tN.current === tu &&
              ((tN.current = null),
              tE?.querySelector("[data-image-text-region][data-image-text-selected]")?.focus({ preventScroll: !0 }))
          }),
          (p = [tu, tE]),
          (eL[1] = tu),
          (eL[2] = tE),
          (eL[3] = f),
          (eL[4] = p))
        : ((f = eL[3]), (p = eL[4])),
        (0, c.useLayoutEffect)(f, p))
      let [tO, tH] = (0, c.useState)(null)
      eL[5] !== tA || eL[6] !== tk
        ? ((v = { reviewKey: tk, editorId: tA }), (eL[5] = tA), (eL[6] = tk), (eL[7] = v))
        : (v = eL[7])
      let tV = (0, d._U)(n4, v)
      eL[8] !== tA || eL[9] !== tk || eL[10] !== tI
        ? ((I = (e) => n7(tI, tk, tA, e)), (eL[8] = tA), (eL[9] = tk), (eL[10] = tI), (eL[11] = I))
        : (I = eL[11])
      let tG = I,
        tq = (0, c.useRef)(null)
      eL[12] !== eB || eL[13] !== tE
        ? ((j = eB ?? tE?.closest("[data-image-text-stage]")?.parentElement),
          (eL[12] = eB),
          (eL[13] = tE),
          (eL[14] = j))
        : (j = eL[14])
      let tW = j,
        tY = (0, c.useRef)(null),
        tZ = (0, c.useRef)(!1),
        tX = (0, c.useRef)(null),
        tQ = null != eH,
        tJ = (0, c.useRef)(!1),
        t1 = (0, d._U)(n2, tk),
        t0 = "comments" === t1 || "edits" === t1,
        t2 = "properties" === t1
      ;(eL[15] !== t2 || eL[16] !== tE || eL[17] !== eK
        ? ((C = () => {
            if (!t2 || !tJ.current) return
            let e = requestAnimationFrame(() => {
              ;((tJ.current = !1),
                null != tE &&
                  (function (e, t) {
                    let n = e.closest("[data-image-text-stage]")?.getBoundingClientRect(),
                      i = e.querySelector("[data-image-text-region][data-image-text-selected]")?.getBoundingClientRect()
                    if (null == n || null == i || n.width <= 0 || n.height <= 0 || null == t.adjustViewport) return
                    let r = e.querySelector("[data-image-text-formatting-strip]")?.getBoundingClientRect(),
                      a = (e, t, n, i) =>
                        e < n && t > i
                          ? 0
                          : t - e > i - n
                            ? e >= n
                              ? n - e
                              : i - t
                            : e < n
                              ? n - e
                              : Math.min(0, i - t),
                      l = a(
                        Math.min(i.left, r?.left ?? i.left),
                        Math.max(i.right, r?.right ?? i.right),
                        n.left + 8,
                        n.right - 8,
                      ),
                      o = a(
                        Math.min(i.top, r?.top ?? i.top),
                        Math.max(i.bottom, r?.bottom ?? i.bottom),
                        n.top + 8,
                        n.bottom - 8,
                      )
                    ;(0 !== l || 0 !== o) && t.adjustViewport(1, { x: l, y: o })
                  })(tE, eK))
            })
            return () => cancelAnimationFrame(e)
          }),
          (E = [t2, eK, tE]),
          (eL[15] = t2),
          (eL[16] = tE),
          (eL[17] = eK),
          (eL[18] = C),
          (eL[19] = E))
        : ((C = eL[18]), (E = eL[19])),
        (0, c.useLayoutEffect)(C, E),
        eL[20] !== tk || eL[21] !== tI
          ? ((S = (e) => {
              tI.set(n2, tk, e)
            }),
            (eL[20] = tk),
            (eL[21] = tI),
            (eL[22] = S))
          : (S = eL[22]))
      let t4 = S
      eL[23] !== tV ? ((T = nq(tV)), (eL[23] = tV), (eL[24] = T)) : (T = eL[24])
      let t6 = T,
        t5 = t6 ? void 0 : tV?.noteId,
        t9 = (0, d._U)(null == t5 ? null : nW, tk)
      eL[25] !== t5 || eL[26] !== t9
        ? ((_ = null == t5 ? void 0 : t9?.get(t5)), (eL[25] = t5), (eL[26] = t9), (eL[27] = _))
        : (_ = eL[27])
      let t8 = _,
        t7 = tV?.blockId === tu && (t6 || (null != t8 && !t8.sent && !t8.resolved)),
        [ne, nt] = (0, c.useState)(!1),
        ni = (0, d._U)(n0, tk),
        [nr, na] = (0, c.useState)(null),
        [nl, no] = (0, c.useState)(null),
        [ns, nd] = (0, c.useState)(null),
        nc = (0, c.useRef)(null),
        ng = (0, c.useRef)(0),
        nm = (0, c.useRef)(null),
        nh = (0, c.useRef)(null),
        np = (0, c.useRef)(null),
        [nx, nv] = (0, c.useState)(null)
      eL[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = () => {
            ;((np.current = null), nm.current?.removeAttribute("transform"), nv(null))
          }),
          (eL[28] = A))
        : (A = eL[28])
      let ny = (0, R.K)(A)
      ;(eL[29] !== ny || eL[30] !== e$ || eL[31] !== eH || eL[32] !== eF || eL[33] !== tu || eL[34] !== eU?.items
        ? ((k = () => {
            let e = np.current
            if (null == e) return
            let { drop: t } = e
            ;(tu === e.origin.id && null == e$ && (null == t || (eU?.items === t.items && (eF || eH === t.preview)))) ||
              ny()
          }),
          (eL[29] = ny),
          (eL[30] = e$),
          (eL[31] = eH),
          (eL[32] = eF),
          (eL[33] = tu),
          (eL[34] = eU?.items),
          (eL[35] = k))
        : (k = eL[35]),
        eL[36] !== ny || eL[37] !== e$ || eL[38] !== eH || eL[39] !== eF || eL[40] !== tu || eL[41] !== eU
          ? ((P = [eU, tu, eH, eF, e$, ny]),
            (eL[36] = ny),
            (eL[37] = e$),
            (eL[38] = eH),
            (eL[39] = eF),
            (eL[40] = tu),
            (eL[41] = eU),
            (eL[42] = P))
          : (P = eL[42]),
        (0, c.useLayoutEffect)(k, P),
        eL[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = () => () => {
              np.current = null
            }),
            (z = []),
            (eL[43] = N),
            (eL[44] = z))
          : ((N = eL[43]), (z = eL[44])),
        (0, c.useLayoutEffect)(N, z))
      let nb = null == eU ? [] : tl(eU),
        nE = null == eU ? [] : nM(eU),
        nS = (0, d._U)(nZ, tk)
      eL[45] !== nS
        ? ((L = (e) => ({ ...e, ...nS.get(e.id)?.destination })), (eL[45] = nS), (eL[46] = L))
        : (L = eL[46])
      let nA = [...nb, ...nE.map(L)]
      eL[47] !== tu ? ((D = (e) => e.id === tu), (eL[47] = tu), (eL[48] = D)) : (D = eL[48])
      let nk = nE.find(D),
        [nR, nN] = (0, c.useState)(null)
      eL[49] !== tu ? ((O = (e) => e.id === tu), (eL[49] = tu), (eL[50] = O)) : (O = eL[50])
      let nz = nb.find(O),
        nO = nA.find((e) => e.id === tu),
        nB = "guides" === ni && null != nr && null != nz && t2,
        nU = eU?.assets.fonts.length === 0 && 0 === nE.length,
        nF = null != e$ && "glyphs" !== e$.code && "geometry" !== e$.code && "size" !== e$.code,
        n$ = eU?.snapshot.reference.document_id,
        nH = "painter" === ni && null != nl && nl.sample.documentId === n$ && !t0,
        nK = !eG && !eW && !tQ && null == e$ && null == e2,
        nV = (eG || nK) && !eW && null == e2,
        nG = null != eU && !eG && !nK && !eW && null == e2 && !nU && !nF,
        nY = !nG || nB || nH ? void 0 : nO?.id
      ;(0, c.useLayoutEffect)(() => {
        if (null != nY)
          return () => {
            let e = tI.get(n3, tk).get(tA)
            e?.blockId === nY && n7(tI, tk, tA, null)
          }
      }, [tI, tk, tA, nY])
      let nX = nG && null != nO && !t7 && !nB && !nH && !ne,
        [nQ, nJ] = (0, c.useState)(null),
        n5 = eU?.snapshot,
        n9 = eU?.items,
        n8 = eU?.assets,
        ie = t2 || nB
      ;(eL[51] !== n8 || eL[52] !== nG || eL[53] !== n9 || eL[54] !== tu || eL[55] !== ie || eL[56] !== n5
        ? ((B = () => {
            if (!ie || !nG || !n5 || !n9 || !n8 || !tu) return
            let e = requestAnimationFrame(() =>
              nJ({
                documentId: n5.reference.document_id,
                blockId: tu,
                guides: (function (e, t) {
                  let { width: n, height: i } = e.snapshot.content
                  try {
                    return tU(e, t).flatMap((e) =>
                      ["baseline", "upper_contour"].flatMap((t) => {
                        let r = e[t]
                        if (null == r) return []
                        let a = (0, ti.rc)(r),
                          l = a.flatMap(({ command: e, values: t }, n) =>
                            "Q" === e || "C" === e
                              ? [
                                  { command: "M", values: a[n - 1].values.slice(-2) },
                                  { command: "L", values: t },
                                ]
                              : [],
                          )
                        return [
                          {
                            id: `${e.lineIndex ?? "block"}-${t}`,
                            kind: t,
                            lineIndex: e.lineIndex,
                            path: t$(a, n, i),
                            controlPath: t$(l, n, i),
                            points: tF(a, n, i),
                          },
                        ]
                      }),
                    )
                  } catch (e) {
                    if (!(e instanceof ti.Zo)) throw e
                    return []
                  }
                })({ snapshot: n5, items: n9, assets: n8 }, tu),
              }),
            )
            return () => cancelAnimationFrame(e)
          }),
          (U = [ie, nG, n5, n9, n8, tu]),
          (eL[51] = n8),
          (eL[52] = nG),
          (eL[53] = n9),
          (eL[54] = tu),
          (eL[55] = ie),
          (eL[56] = n5),
          (eL[57] = B),
          (eL[58] = U))
        : ((B = eL[57]), (U = eL[58])),
        (0, c.useLayoutEffect)(B, U),
        eL[59] !== n$ || eL[60] !== nG || eL[61] !== nQ || eL[62] !== tu || eL[63] !== ie
          ? ((F = ie && nG && null != nQ && nQ.documentId === n$ && nQ.blockId === tu ? nQ.guides : []),
            (eL[59] = n$),
            (eL[60] = nG),
            (eL[61] = nQ),
            (eL[62] = tu),
            (eL[63] = ie),
            (eL[64] = F))
          : (F = eL[64]))
      let ii = F
      eL[65] !== nB || eL[66] !== nr || eL[67] !== ii
        ? (($ = nB ? (ii.find((e) => e.id === nr) ?? ii[0]) : void 0),
          (eL[65] = nB),
          (eL[66] = nr),
          (eL[67] = ii),
          (eL[68] = $))
        : ($ = eL[68])
      let ir = $,
        [ia] = (0, c.useState)(i0),
        il = 10 * tj
      ;(eL[69] !== il ? ((H = (0, e0.cY)(il)), (eL[69] = il), (eL[70] = H)) : (H = eL[70]),
        eL[71] !== tE || eL[72] !== il || eL[73] !== ia
          ? ((a = tE),
            (l = ia),
            (K = {
              name: "imageTextToolbarSide",
              options: [a, (o = il)],
              async fn({ elements: e, platform: t, strategy: n, placement: i, middlewareData: r, rects: s }) {
                let d = e.reference
                if (null == a || !(d instanceof Element) || null != r.imageTextToolbarSide) return {}
                let c = d.closest("[data-image-text-surface]")
                if (null == c) return {}
                let u = await t.getClippingRect({
                    element: a,
                    boundary: "clippingAncestors",
                    rootBoundary: "viewport",
                    strategy: n,
                  }),
                  g = a.getBoundingClientRect(),
                  m = Math.max(g.top, u.y),
                  h = Math.min(g.bottom, u.y + u.height),
                  f = c.getBoundingClientRect(),
                  p = Math.max(m, f.top),
                  x = Math.min(h, f.bottom)
                if (m >= h) return {}
                let v = p < x ? (p + x) / 2 : (m + h) / 2,
                  y = d.getBoundingClientRect(),
                  b = l.get(d) ?? (y.top + y.height / 2 < v ? "bottom" : "top")
                y.bottom < v ? (b = "bottom") : y.top > v && (b = "top")
                let w = { top: y.top - m, bottom: h - y.bottom },
                  I = "top" === b ? "bottom" : "top",
                  M = e.floating.getBoundingClientRect().height,
                  j = s.floating.height > 0 ? M / s.floating.height : 1,
                  C = M + o * j + 8
                return (
                  w[b] < C && (w[I] >= C || w[I] > w[b] + 8) && (b = I),
                  l.set(d, b),
                  { data: { side: b }, reset: i === b ? void 0 : { placement: b } }
                )
              },
            }),
            (eL[71] = tE),
            (eL[72] = il),
            (eL[73] = ia),
            (eL[74] = K))
          : (K = eL[74]))
      let is = tE ?? void 0
      ;(eL[75] !== is ? ((V = (0, e0.BN)({ boundary: is, padding: 8 })), (eL[75] = is), (eL[76] = V)) : (V = eL[76]),
        eL[77] === Symbol.for("react.memo_cache_sentinel") ? ((G = (0, e0.jD)()), (eL[77] = G)) : (G = eL[77]),
        eL[78] !== H || eL[79] !== K || eL[80] !== V
          ? ((q = [H, K, V, G]), (eL[78] = H), (eL[79] = K), (eL[80] = V), (eL[81] = q))
          : (q = eL[81]),
        eL[82] !== nX || eL[83] !== q
          ? ((W = { open: nX, placement: "top", middleware: q, whileElementsMounted: i1 }),
            (eL[82] = nX),
            (eL[83] = q),
            (eL[84] = W))
          : (W = eL[84]))
      let {
          refs: id,
          floatingStyles: ic,
          isPositioned: iu,
          middlewareData: ig,
          placement: im,
          update: ih,
        } = (0, e0.we)(W),
        { setReference: ip, setFloating: ix } = id,
        iv = im.startsWith("bottom") ? "bottom" : "top",
        iy = t2 || t0 ? (tE ?? void 0) : void 0
      eL[85] !== iv || eL[86] !== iy
        ? ((Y = { align: "start", side: iv, collisionBoundary: iy }), (eL[85] = iv), (eL[86] = iy), (eL[87] = Y))
        : (Y = eL[87])
      let ib = Y
      ;(eL[88] !== nX || eL[89] !== ih
        ? ((Z = () => {
            nX && ih()
          }),
          (eL[88] = nX),
          (eL[89] = ih),
          (eL[90] = Z))
        : (Z = eL[90]),
        (0, c.useLayoutEffect)(Z, [nX, ih, eK, nO?.x, nO?.y, nO?.width, nO?.height, nO?.rotation]))
      let iw = null != eU && !eG && !nK && !eW && !nU && null == e2
      eL[91] !== e$ || eL[92] !== eU
        ? ((X = e$ ?? (null == eU ? null : (0, ti.e8)(eU))), (eL[91] = e$), (eL[92] = eU), (eL[93] = X))
        : (X = eL[93])
      let iI = X,
        iM = nH ? ns : null,
        ij = iM?.error ?? iI,
        iC = nG ? nb.find((e) => e.id === (iM?.id ?? iI?.blockId)) : void 0,
        iE = (0, d._U)(!!iw && !!eY && n6, tk),
        iS = iw && eY && tQ && !ne && !eF && !tP && !iE && null == iI,
        iT = (e, t, n) => {
          if (null == eU || eW) return
          let i = (function (e, t, n) {
              let i = tl(e).find((e) => e.id === t.id),
                r = e.items.find((e) => e.id === t.id)
              if (null == i || r?.kind !== "text" || "editable" !== r.rendering.mode) return e.items
              let { width: a, height: l } = e.snapshot.content,
                o = (0, tn._8)(r, i.fontSize)
              if ("scale" === n) {
                var s, d, c, u, g, m
                let n,
                  o,
                  h,
                  f,
                  p =
                    ((s = r),
                    (d = r.rendering),
                    (c = i),
                    (u = t),
                    (g = a),
                    (m = l),
                    (n = u.width / c.width),
                    (o = { x: u.x / g, y: u.y / m, width: u.width / g, height: u.height / m }),
                    (h = (e) =>
                      (0, ti.rc)(e)
                        .map(
                          ({ command: e, values: t }) =>
                            e +
                            " " +
                            t
                              .map((e, t) => (t % 2 == 0 ? o.x + (e - s.bbox.x) * n : o.y + (e - s.bbox.y) * n))
                              .join(" "),
                        )
                        .join(" ")),
                    (f = (e) => ({
                      ...e,
                      font_size: e.font_size * n,
                      ...(null != e.letter_spacing ? { letter_spacing: e.letter_spacing * n } : {}),
                      ...(null != e.word_spacing ? { word_spacing: e.word_spacing * n } : {}),
                      ...(null != e.start_offset ? { start_offset: e.start_offset * n } : {}),
                      ...(null != e.render_width ? { render_width: e.render_width * n } : {}),
                      ...(null != e.upper_contour ? { upper_contour: h(e.upper_contour) } : {}),
                    })),
                    {
                      ...s,
                      bbox: o,
                      rendering: {
                        ...f(d),
                        ...(null != d.line_height ? { line_height: d.line_height * n } : {}),
                        ...(null != d.baseline ? { baseline: h(d.baseline) } : {}),
                        ...(null != d.line_layout
                          ? {
                              line_layout: d.line_layout.map((e) =>
                                null == e ? null : { ...f(e), baseline: h(e.baseline) },
                              ),
                            }
                          : {}),
                      },
                    })
                return ((0, tn.pb)(p, t.fontSize), e.items.map((e) => (e === r ? p : e)))
              }
              if (t.text !== i.text) return to(e, t, t.fontSize !== i.fontSize ? t.fontSize : o)
              let h = t.x !== i.x || t.y !== i.y,
                f = "rewrap" === n || t.width !== i.width || t.height !== i.height,
                p = [...tr, ...ta].some((e) => t[e] !== i[e]),
                x =
                  !h || f || p || t.color !== i.color || t.rotation !== i.rotation
                    ? ts(e, r, r.rendering, i, t, f || t.wrapText)
                    : (0, ti.Cb)(e, t.id, { x: t.x - i.x, y: t.y - i.y })
              ;(h || f) && (x = { ...x, bbox: { x: t.x / a, y: t.y / l, width: t.width / a, height: t.height / l } })
              let v = e.items.map((e) => (e === r ? x : e))
              if (f || (t.wrapText && p))
                try {
                  let n = (tr.some((e) => t[e] !== i[e]) ? ti.hF : ti.XP)(
                    { ...e, items: v },
                    e.assets.fonts,
                    t.id,
                    t.text,
                  )
                  null != n &&
                    ((x = { ...x, bbox: { x: n.x / a, y: n.y / l, width: n.width / a, height: n.height / l } }),
                    (v = e.items.map((e) => (e === r ? x : e))))
                } catch (e) {
                  if (!(e instanceof ti.Zo)) throw e
                }
              return ((0, tn.pb)(x, t.fontSize !== i.fontSize ? t.fontSize : o), v)
            })(eU, e, n),
            r = np.current
          ;(null != r && nc.current?.previewsTranslation && (r.drop = { items: i, preview: eH }),
            tm(i, nc.current?.id ?? t))
        }
      eL[94] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = (e) => {
            let t = np.current
            null != t &&
              ((t.transform = `translate(${e.x - t.origin.x} ${e.y - t.origin.y})`),
              nm.current?.setAttribute("transform", t.transform),
              nh.current?.setAttribute("transform", t.transform))
          }),
          (eL[94] = Q))
        : (Q = eL[94])
      let i_ = Q,
        iA = (e) => {
          if (
            null != eU &&
            null == nc.current &&
            (th(),
            nt(!0),
            (nc.current = {
              items: eU.items,
              id: `gesture-${(ng.current = ng.current + 1)}`,
              previewsTranslation: null != e,
            }),
            ny(),
            null != e)
          ) {
            let t = { origin: e, transform: "translate(0 0)" }
            ;((np.current = t),
              (0, ti.ti)(eU, e.id).then((e) => {
                np.current === t && nv(e)
              }, iJ))
          }
        },
        ik = (e) => {
          let t = np.current
          ;(nm.current?.removeAttribute("transform"),
            e && null != nc.current && !nc.current.previewsTranslation && tm(nc.current.items, nc.current.id),
            (e || t?.drop == null) && ny(),
            (nc.current = null),
            nt(!1),
            th())
        },
        iR = (0, R.K)((e, t, n, i) => {
          if (null == eU || null == nz || null == nc.current) return
          let r = e.points[t],
            a =
              1e-6 > Math.hypot(n - r.x, i - r.y)
                ? nc.current.items
                : (function (e, t, n, i, r, a) {
                    let { width: l, height: o } = e.snapshot.content
                    if (!Number.isFinite(r) || !Number.isFinite(a)) return e.items
                    try {
                      let s = tU(e, t).find((e) => e.lineIndex === n.lineIndex)
                      if (null == s) return e.items
                      let d = (0, ti.rc)(s.baseline),
                        c = null == s.upper_contour ? null : (0, ti.rc)(s.upper_contour),
                        u = "baseline" === n.kind ? d : c
                      if (null == u) return e.items
                      let g = tF(u, l, o)[i]
                      if (
                        null == g ||
                        (null != c && (c.length !== d.length || d.some((e, t) => e.command !== c[t].command)))
                      )
                        return e.items
                      let m = r - g.x,
                        h = a - g.y
                      if ("upper_contour" === n.kind) {
                        let e = tF(d, l, o)[i],
                          t = g.x - e.x,
                          n = g.y - e.y,
                          r = (m * t + h * n) / (t * t + n * n)
                        ;((m = r * t), (h = r * n))
                      }
                      if (!Number.isFinite(m + h) || 1e-6 > Math.hypot(m, h)) return e.items
                      for (let e of null == c ? [d] : [d, c]) {
                        let t = e[g.commandIndex]
                        if (null == g.offset) {
                          let n = e[g.commandIndex - 1].values
                          ;(t.values.unshift((n[n.length - 2] + t.values[0]) / 2, (n[n.length - 1] + t.values[1]) / 2),
                            (t.command = "Q"))
                        }
                        if (e === u || "baseline" === n.kind) {
                          let e = g.offset ?? 0
                          ;((t.values[e] += m / l), (t.values[e + 1] += h / o))
                        }
                      }
                      if (
                        !(function (e, t) {
                          let n = e[0].values,
                            i = e[e.length - 1].values,
                            r = i[i.length - 2] - n[0],
                            a = i[i.length - 1] - n[1]
                          if (1e-8 >= Math.hypot(r, a)) return !1
                          if (null == t) return !0
                          let l = n[0] - t[0].values[0],
                            o = n[1] - t[0].values[1],
                            s = r * o - a * l
                          if (e.length > 65 || s <= Math.max(1e-12, Math.hypot(r, a) * Math.hypot(l, o) * 1e-5))
                            return !1
                          let d = 0
                          return e.slice(1).every(({ values: e }) => {
                            let t = ((e[e.length - 2] - n[0]) * o - (e[e.length - 1] - n[1]) * l) / s,
                              i = t > d + 1e-8 && t <= 1 + 1e-6
                            return ((d = t), i)
                          })
                        })(d, c)
                      )
                        return e.items
                      let f = t$(d),
                        p = null == c ? null : t$(c)
                      ;(0, ti.vw)(f, p, l, o, s.fontSize)
                      let x = { ...s.implicit, baseline: f, upper_contour: p }
                      return e.items.map((e) => {
                        if (e.id !== t || "text" !== e.kind || "editable" !== e.rendering.mode) return e
                        let n = e.rendering
                        return {
                          ...e,
                          rendering:
                            null == s.lineIndex
                              ? { ...n, ...x }
                              : {
                                  ...n,
                                  line_layout: n.line_layout?.map((e, t) =>
                                    t === s.lineIndex && null != e ? { ...e, ...x } : e,
                                  ),
                                },
                        }
                      })
                    } catch (t) {
                      if (!(t instanceof ti.Zo)) throw t
                      return e.items
                    }
                  })(eU, nz.id, e, t, n, i)
          a !== eU.items && tm(a, nc.current.id)
        })
      eL[95] !== tg || eL[96] !== tE
        ? ((J = (e) => {
            tg(e)
            let t = Array.from(tE?.querySelectorAll("[data-image-text-region]") ?? []).find(
              (t) => t.dataset.imageTextRegion === e,
            )
            t?.querySelector("textarea")?.focus({ preventScroll: !0 })
          }),
          (eL[95] = tg),
          (eL[96] = tE),
          (eL[97] = J))
        : (J = eL[97])
      let iN = J
      eL[98] !== eU
        ? ((et = (e) => {
            let t = eU?.snapshot.content.items.find((t) => t.id === e)
            return eX()(
              t,
              eU?.items.find((t) => t.id === e),
            )
              ? void 0
              : t
          }),
          (eL[98] = eU),
          (eL[99] = et))
        : (et = eL[99])
      let iz = et
      eL[100] !== tm || eL[101] !== eU
        ? ((en = (e) => {
            null != eU && tm(eU.items.map((t) => (t.id === e.id ? e : t)))
          }),
          (eL[100] = tm),
          (eL[101] = eU),
          (eL[102] = en))
        : (en = eL[102])
      let iL = en,
        iD = nz?.id
      eL[103] !== iz || eL[104] !== iD
        ? ((ei = iz(iD)), (eL[103] = iz), (eL[104] = iD), (eL[105] = ei))
        : (ei = eL[105])
      let iO = ei
      eL[106] !== nB || eL[107] !== tk || eL[108] !== tg || eL[109] !== tI || eL[110] !== tu || eL[111] !== tG
        ? ((er = (e) => {
            ;(e !== tu && (nN(null), nB && tI.set(n0, tk, null), na(null), nd(null)), tG(null), tg(e))
          }),
          (eL[106] = nB),
          (eL[107] = tk),
          (eL[108] = tg),
          (eL[109] = tI),
          (eL[110] = tu),
          (eL[111] = tG),
          (eL[112] = er))
        : (er = eL[112])
      let iB = er
      eL[113] !== tE?.ownerDocument.activeElement
        ? ((ea = (e) => {
            let t = tE?.ownerDocument.activeElement
            if (t instanceof HTMLTextAreaElement)
              return (
                ((t.dataset.imageTextInputFor ??
                  t.closest("[data-image-text-region]")?.getAttribute("data-image-text-region")) === e &&
                  t.value.slice(t.selectionStart, t.selectionEnd).trim()) ||
                void 0
              )
          }),
          (eL[113] = tE?.ownerDocument.activeElement),
          (eL[114] = ea))
        : (ea = eL[114])
      let iU = ea
      eL[115] !== tk || eL[116] !== tI
        ? ((el = () => {
            ;(tI.set(n0, tk, null), nd(null))
          }),
          (eL[115] = tk),
          (eL[116] = tI),
          (eL[117] = el))
        : (el = eL[117])
      let i$ = el
      ;(eL[118] !== th ||
      eL[119] !== nH ||
      eL[120] !== t2 ||
      eL[121] !== iB ||
      eL[122] !== tu ||
      eL[123] !== t4 ||
      eL[124] !== i$
        ? ((eo = () => ({ onClearSelection: () => null != tu && (nH && i$(), t2 && t4(null), th(), iB(null), !0) })),
          (eL[118] = th),
          (eL[119] = nH),
          (eL[120] = t2),
          (eL[121] = iB),
          (eL[122] = tu),
          (eL[123] = t4),
          (eL[124] = i$),
          (eL[125] = eo))
        : (eo = eL[125]),
        (0, c.useImperativeHandle)(eD, eo),
        eL[126] !== tk || eL[127] !== th || eL[128] !== tI || eL[129] !== iB || eL[130] !== eU
          ? ((ed = (e) => {
              if (null == eU) return
              let t = tc(eU, e)
              null != t &&
                (th(), iB(e.id), na(null), no({ sample: t, keepPainting: !1 }), tI.set(n0, tk, "painter"), nd(null))
            }),
            (eL[126] = tk),
            (eL[127] = th),
            (eL[128] = tI),
            (eL[129] = iB),
            (eL[130] = eU),
            (eL[131] = ed))
          : (ed = eL[131]))
      let iH = ed,
        iK = (e) => {
          let t = nb.find((t) => t.id === e)
          if (null == eU || null == t || null == nl || e === nl.sample.sourceId) return
          let n = (function (e, t, n) {
            if (n.documentId !== e.snapshot.reference.document_id || t.id === n.sourceId) return { items: e.items }
            let i = tc(e, t)
            if (null == i || eX()({ ...i, sourceId: n.sourceId }, n)) return { items: e.items }
            let r = {
              ...t,
              fontId: n.fontId,
              fontSize: n.fontSize,
              color: n.color,
              alignment: n.alignment,
              lineHeight: n.lineHeightMultiple * n.fontSize,
              letterSpacing: n.letterSpacing,
              wordSpacing: n.wordSpacing,
              horizontalScale: n.horizontalScale,
            }
            try {
              let i = to(e, r, n.fontSize, { fill_gradient: n.gradient ?? null }),
                a = { ...e, items: i.filter((e) => e.id === t.id) },
                l = (0, ti.e8)(a)
              if (null != l) return { items: e.items, error: l }
              let o = a.items[0]
              if (o?.kind !== "text" || !(0, ti.mZ)(a, o))
                return { items: e.items, error: new ti.Zo("geometry", void 0, t.id) }
              return { items: eX()(i, e.items) ? e.items : i }
            } catch (t) {
              if (t instanceof ti.Zo) return { items: e.items, error: t }
              throw t
            }
          })(eU, t, nl.sample)
          if ((iB(e), null != n.error)) {
            ;(tI.set(n0, tk, "painter"), nd({ id: e, error: n.error }))
            return
          }
          ;(n.items !== eU.items && (th(), tm(n.items)), nd(null), (nH && nl.keepPainting) || i$())
        }
      eL[132] !== tk || eL[133] !== tI
        ? ((ec = () => {
            ;((tZ.current = !0), tI.set(n0, tk, null), na(null))
          }),
          (eL[132] = tk),
          (eL[133] = tI),
          (eL[134] = ec))
        : (ec = eL[134])
      let iV = ec,
        iG = (e, t, n, i) => {
          if (null == t && t6 && tV?.blockId === e)
            return void tE
              ?.querySelector('[data-image-text-review] :is(textarea, [contenteditable="true"])')
              ?.focus({ preventScroll: !0 })
          let r = null == t ? io(tI.get(nW, tk), e) : void 0,
            a = null == t && null == r ? (n ?? iU(e)) : void 0
          if (tV?.blockId !== e || null == t) {
            let t = tE?.ownerDocument.activeElement
            tD.current =
              t instanceof HTMLTextAreaElement &&
              t.closest("[data-image-text-region]")?.getAttribute("data-image-text-region") === e
                ? t
                : null
          }
          ;(th(),
            t2 && t4(null),
            na(null),
            i$(),
            tg(e),
            tG({ blockId: e, noteId: t ?? r, excerpt: a, mode: null == r ? i : "edit" }))
        },
        iq = (e, t) => {
          iG(e, t, void 0, "edit")
        },
        iZ = (e, t) => {
          ;((tJ.current = !t2), (tX.current = void 0 !== t && t ? "opened" : null), iB(e), t4("properties"))
        }
      eL[135] !== tm || eL[136] !== th || eL[137] !== iB || eL[138] !== eU
        ? ((eu = (e) => {
            null != eU && (th(), tm(eU.items.filter((t) => t.id !== e)), iB(null))
          }),
          (eL[135] = tm),
          (eL[136] = th),
          (eL[137] = iB),
          (eL[138] = eU),
          (eL[139] = eu))
        : (eu = eL[139])
      let i7 = eu,
        re = (e, t) => {
          if (null == eU || nb.length >= 64) return
          let n = (0, ti.Cb)(eU, e, { x: 12, y: 12 }),
            i = crypto.randomUUID()
          ;(void 0 !== t && t && (tN.current = i), th(), tm([...eU.items, { ...n, id: i }]), iB(i))
        },
        rt = (0, R.K)((e) => {
          let t = e.target
          if (
            !nG ||
            (!e.ctrlKey && !e.metaKey) ||
            e.defaultPrevented ||
            e.isComposing ||
            e.repeat ||
            !(t instanceof Element) ||
            null == n$ ||
            t.closest("[data-image-text-controls]")?.getAttribute("data-image-text-controls") !== n$
          )
            return null
          let n = (t) => (0, te.eg)(e, t)
          if (iS && n("CmdOrCtrl+Enter")) return eJ
          if (null != tV) return null
          if (tf && n("CmdOrCtrl+Z"))
            return () => {
              ;(th(), tx())
            }
          if (tp && (n("CmdOrCtrl+Shift+Z") || (!(0, e8.Z)() && n("Ctrl+Y"))))
            return () => {
              ;(th(), tv())
            }
          if (tE?.contains(t)) {
            if (
              null != nz &&
              !nH &&
              !nB &&
              nb.length < 64 &&
              !t.closest("input, textarea, [contenteditable=true], [role=menu]") &&
              n(iW)
            )
              return () => re(nz.id, !0)
            if (null != nO && n(iY)) return () => iG(nO.id)
          }
          return null
        })
      ;(eL[140] !== rt || eL[141] !== tW || eL[142] !== tE
        ? ((eg = () => {
            let e = [tE, tq.current, tW].filter(iQ).map((e) => (0, e7.Y)(e, (e) => null != rt(e)))
            return () => e.forEach(iX)
          }),
          (eL[140] = rt),
          (eL[141] = tW),
          (eL[142] = tE),
          (eL[143] = eg))
        : (eg = eL[143]),
        eL[144] !== rt || eL[145] !== tW || eL[146] !== tb || eL[147] !== tE
          ? ((em = [tE, tW, tb, rt]), (eL[144] = rt), (eL[145] = tW), (eL[146] = tb), (eL[147] = tE), (eL[148] = em))
          : (em = eL[148]),
        (0, c.useLayoutEffect)(eg, em),
        eL[149] !== t2 || eL[150] !== iB || eL[151] !== t4
          ? ((eh = (e) => {
              ;(t2 && t4(null), iB(e))
            }),
            (eL[149] = t2),
            (eL[150] = iB),
            (eL[151] = t4),
            (eL[152] = eh))
          : (eh = eL[152]))
      let rn = eh
      eL[153] !== rn
        ? ((ef = (e) => {
            ;(rn(e), nN(e))
          }),
          (eL[153] = rn),
          (eL[154] = ef))
        : (ef = eL[154])
      let ri = ef,
        rr = () => {
          ;(nB && tI.set(n0, tk, null),
            t4(null),
            na(null),
            "opened" === tX.current && tY.current && !ig.hide?.referenceHidden
              ? tY.current.focus({ preventScroll: !0 })
              : "opened" === tX.current && null != nz && nB
                ? (tX.current = "restore")
                : tE?.querySelector("[data-image-text-region][data-image-text-selected]")?.focus({ preventScroll: !0 }))
        },
        ra = () => {
          let e = nz?.fontId ?? eU?.assets.fonts[0]?.id
          if (null == eU || null == e || nb.length >= 64) return
          let t = crypto.randomUUID(),
            { width: n, height: i } = eU.snapshot.content,
            r = {
              id: t,
              kind: "text",
              text: tM.formatMessage({
                id: "imageTextEditing.newText",
                defaultMessage: "New text",
                description: "Initial contents of a text block added to an image",
              }),
              bbox: { x: 0.2, y: 0.425, width: 0.6, height: 0.15 },
              rendering: {
                mode: "editable",
                font_id: e,
                font_size: Math.max(1, Math.min(8192, Math.round(0.06 * Math.min(n, i)))),
                color: nz?.color ?? "#000000",
                align: "left",
                rotation: 0,
              },
            }
          return (
            (0, ti.e8)({ ...eU, items: [r] })?.code === "glyphs" && (r.text = ""),
            (tz.current = t),
            tm([...eU.items, r]),
            iB(t),
            t
          )
        }
      eL[155] !== tk ||
      eL[156] !== t1 ||
      eL[157] !== t4 ||
      eL[158] !== tE?.ownerDocument ||
      eL[159] !== tE?.ownerDocument.querySelector
        ? ((ep = () => {
            ;(t4(null),
              tE?.ownerDocument
                .querySelector(`[data-image-text-request="${CSS.escape(tk)}"] [data-image-text-list-toggle="${t1}"]`)
                ?.focus({ preventScroll: !0 }))
          }),
          (eL[155] = tk),
          (eL[156] = t1),
          (eL[157] = t4),
          (eL[158] = tE?.ownerDocument),
          (eL[159] = tE?.ownerDocument.querySelector),
          (eL[160] = ep))
        : (ep = eL[160])
      let rl = ep,
        ro =
          null != eU
            ? (0, i.jsxs)(nL, {
                open: (t2 || t0) && nG,
                compactGuides: nB,
                editorElement: tE,
                toolbarRef: tq,
                children: [
                  "edits" === t1 &&
                    nG &&
                    (0, i.jsx)(nu, {
                      directEdits: eY ? eQ(eU) : [],
                      requests: nj(nS, nE),
                      disabled: eF || null != e$,
                      onRemoveRequest: (e) => it(tI, tk, e, {}),
                      onRemoveDirect: (e) =>
                        tm(
                          (function (e, t) {
                            if (null == t) return e1(e)
                            let n = e.snapshot.content.items,
                              i = n.findIndex((e) => e.id === t),
                              r = n[i]
                            if (null == r) return e.items.filter((e) => e.id !== t)
                            if (e.items.some((e) => e.id === t)) return e.items.map((e) => (e.id === t ? r : e))
                            let a = new Map(e.items.map((e, t) => [e.id, t])),
                              l = n.map((e) => a.get(e.id)),
                              o = l.slice(i + 1).find((e) => null != e),
                              s = l.slice(0, i).findLast((e) => null != e)
                            return e.items.toSpliced(o ?? (s ?? -1) + 1, 0, r)
                          })(eU, e),
                        ),
                      onClose: rl,
                    }),
                  "comments" === t1 &&
                    nG &&
                    (0, i.jsx)(iF, {
                      reviewKey: tk,
                      regions: nA,
                      selectedNoteId: tV?.noteId ?? null,
                      onOpen: iG,
                      onEdit: iq,
                      onDeselectThread: () => tG(null),
                      onCloseList: rl,
                      onAddComment: null == nO ? void 0 : () => iG(nO.id),
                    }),
                  (!t0 || !nG) &&
                    (0, i.jsx)(nP, {
                      source: eU,
                      selected: nz,
                      open: t2 && nG,
                      onSelect: (e) => {
                        iB(e)
                        let t = nb.find((t) => t.id === e)
                        null != t && null != tE && nD(tE, eK, t, eU)
                      },
                      onChange: iT,
                      editingGuides: nB,
                      onExitGuides: iV,
                      onExitPainter: nH ? i$ : void 0,
                      onStartPainter: () => {
                        null != nz && iH(nz)
                      },
                      onPasteFormatting:
                        null != nl && nl.sample.documentId === n$ && null != nz && nz.id !== nl.sample.sourceId
                          ? () => iK(nz.id)
                          : void 0,
                      renderGuideControls: (e) =>
                        (0, i.jsx)(tR, {
                          guides: ii,
                          active: ir,
                          collisionBoundary: e,
                          onSelect: na,
                          onStart: () => {
                            let e = tE?.ownerDocument.activeElement,
                              t =
                                e instanceof HTMLTextAreaElement
                                  ? e.value.slice(0, e.selectionStart).split("\n").length - 1
                                  : null,
                              n = ii.find((e) => "baseline" === e.kind && e.lineIndex === t) ?? ii[0]
                            null != n && (i$(), tG(null), na(n.id), tI.set(n0, tk, "guides"))
                          },
                          onDone: iV,
                          startButtonRef: (e) => {
                            null != e && tZ.current && ((tZ.current = !1), e.focus({ preventScroll: !0 }))
                          },
                        }),
                      onEditEnd: th,
                      onDuplicateSelected: null != nz && nb.length < 64 ? () => re(nz.id) : void 0,
                      layerOrderItems:
                        null != nz && null != eU
                          ? ((t = eU.items),
                            (n = nz.id),
                            (ez = (eN = t.filter(nI)).findIndex((e) => e.id === n)),
                            [
                              { id: "bring-to-front", message: nw.front, target: eN.length - 1 },
                              { id: "bring-forward", message: nw.forward, target: ez + 1 },
                              { id: "send-backward", message: nw.backward, target: ez - 1 },
                              { id: "send-to-back", message: nw.back, target: 0 },
                            ].map(({ id: e, message: n, target: i }) => {
                              let r = ez >= 0 && i >= 0 && i < eN.length && i !== ez
                              return {
                                id: e,
                                message: n,
                                enabled: r,
                                onSelect: r
                                  ? () => {
                                      let e = eN.toSpliced(ez, 1).toSpliced(i, 0, eN[ez]),
                                        n = 0
                                      tm(t.map((t) => (nI(t) ? e[n++] : t)))
                                    }
                                  : void 0,
                              }
                            }))
                          : [],
                      takeNewTextFocus: tL,
                      onAdd: nb.length < 64 ? ra : void 0,
                      onDeleteSelected: () => {
                        null != nz && i7(nz.id)
                      },
                      onResetSelected: null == iO ? void 0 : () => iL(iO),
                      onClose: rr,
                    }),
                ],
              })
            : null,
        rs = 0.3 * !tC
      eL[161] !== rs ? ((ex = { duration: rs, ease: tt.Wu }), (eL[161] = rs), (eL[162] = ex)) : (ex = eL[162])
      let rd = ex,
        rc = eF || eG || nK
      ;(eL[163] !== nB || eL[164] !== iV || eL[165] !== rt || eL[166] !== nH || eL[167] !== i$
        ? ((ev = (e) => {
            let t = rt(e.nativeEvent)
            if (null != t) {
              ;(e.preventDefault(), e.stopPropagation(), t())
              return
            }
            "Escape" === e.key &&
              !e.defaultPrevented &&
              !e.nativeEvent.isComposing &&
              (nB || nH) &&
              (e.preventDefault(), e.stopPropagation(), nB ? iV() : i$())
          }),
          (eL[163] = nB),
          (eL[164] = iV),
          (eL[165] = rt),
          (eL[166] = nH),
          (eL[167] = i$),
          (eL[168] = ev))
        : (ev = eL[168]),
        eL[169] !== tp ||
        eL[170] !== tf ||
        eL[171] !== nG ||
        eL[172] !== tM ||
        eL[173] !== nK ||
        eL[174] !== nU ||
        eL[175] !== th ||
        eL[176] !== tv ||
        eL[177] !== tx ||
        eL[178] !== nl ||
        eL[179] !== nH ||
        eL[180] !== eG ||
        eL[181] !== tw ||
        eL[182] !== tC ||
        eL[183] !== eW ||
        eL[184] !== i$ ||
        eL[185] !== rd
          ? ((ey =
              eW || eG || nK || nU
                ? (0, i.jsx)(s.P.span, {
                    layout: !tC && "size",
                    transition: rd,
                    role: "status",
                    className: "flex h-9 items-center px-2.5 text-sm text-secondary select-none",
                    children: (0, i.jsx)(i3, { saving: eW, reconnecting: tw, loadingDocument: nK, noEditableText: nU }),
                  })
                : (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-wrap items-center justify-center",
                    children: [
                      nH &&
                        null != nl &&
                        (0, i.jsx)(n_, {
                          keepPainting: nl.keepPainting,
                          onKeepPainting: () => no({ ...nl, keepPainting: !nl.keepPainting }),
                          onDone: i$,
                        }),
                      (0, i.jsx)(y.$, {
                        color: "ghost",
                        size: "imageToolbar",
                        disabled: !tf || !nG,
                        onClick: () => {
                          ;(th(), tx())
                        },
                        "aria-label": tM.formatMessage(i8.undo),
                        children: (0, i.jsx)(w.O8y, {}),
                      }),
                      (0, i.jsx)(y.$, {
                        color: "ghost",
                        size: "imageToolbar",
                        disabled: !tp || !nG,
                        onClick: () => {
                          ;(th(), tv())
                        },
                        "aria-label": tM.formatMessage(i8.redo),
                        children: (0, i.jsx)(w.trM, {}),
                      }),
                    ],
                  })),
            (eL[169] = tp),
            (eL[170] = tf),
            (eL[171] = nG),
            (eL[172] = tM),
            (eL[173] = nK),
            (eL[174] = nU),
            (eL[175] = th),
            (eL[176] = tv),
            (eL[177] = tx),
            (eL[178] = nl),
            (eL[179] = nH),
            (eL[180] = eG),
            (eL[181] = tw),
            (eL[182] = tC),
            (eL[183] = eW),
            (eL[184] = i$),
            (eL[185] = rd),
            (eL[186] = ey))
          : (ey = eL[186]),
        eL[187] !== iS || eL[188] !== eZ || eL[189] !== eJ || eL[190] !== iw
          ? ((eb =
              iw &&
              (0, i.jsxs)("div", {
                className: "flex shrink-0 items-center gap-1",
                children: [
                  (0, i.jsx)(y.$, {
                    color: "ghost",
                    size: "toolbar",
                    radius: "large",
                    "data-image-text-discard": !0,
                    onClick: (e) => eZ(e.currentTarget),
                    children: (0, i.jsx)(m.A, {
                      id: "imageTextEditing.cancel",
                      defaultMessage: "Cancel",
                      description: "Exit image text editing; unsaved edits require confirmation",
                    }),
                  }),
                  (0, i.jsx)(y.$, {
                    size: "toolbar",
                    radius: "large",
                    disabled: !iS,
                    onClick: eJ,
                    children: (0, i.jsx)(m.A, {
                      id: "imageTextEditing.save",
                      defaultMessage: "Save",
                      description: "Save the current image text edits as a new image version",
                    }),
                  }),
                ],
              })),
            (eL[187] = iS),
            (eL[188] = eZ),
            (eL[189] = eJ),
            (eL[190] = iw),
            (eL[191] = eb))
          : (eb = eL[191]),
        eL[192] !== ey || eL[193] !== eb
          ? ((ew = (0, i.jsxs)(es.b, { variant: "embedded", children: [ey, eb] })),
            (eL[192] = ey),
            (eL[193] = eb),
            (eL[194] = ew))
          : (ew = eL[194]),
        eL[195] !== n$ || eL[196] !== ew
          ? ((eI = (0, i.jsx)("div", {
              ref: tq,
              className: "pointer-events-auto min-w-0",
              "data-image-text-controls": n$,
              children: ew,
            })),
            (eL[195] = n$),
            (eL[196] = ew),
            (eL[197] = eI))
          : (eI = eL[197]),
        eL[198] !== tb || eL[199] !== eI
          ? ((eM = tb(eI)), (eL[198] = tb), (eL[199] = eI), (eL[200] = eM))
          : (eM = eL[200]),
        eL[201] !== nx || eL[202] !== eK.imageRect
          ? ((eC =
              nx &&
              (0, i.jsx)(i6, {
                layers: nx,
                imageRect: eK.imageRect,
                inkRef: (e) => {
                  ;((nh.current = e),
                    null != e && null != np.current && e.setAttribute("transform", np.current.transform))
                },
              })),
            (eL[201] = nx),
            (eL[202] = eK.imageRect),
            (eL[203] = eC))
          : (eC = eL[203]),
        eL[204] !== nG || eL[205] !== nx || eL[206] !== eH || eL[207] !== eK.imageRect
          ? ((eE =
              null == nx && nG && eH && (0, ti.xV)(eH) && (0, i.jsx)(i5, { preview: eH, imageRect: eK.imageRect })),
            (eL[204] = nG),
            (eL[205] = nx),
            (eL[206] = eH),
            (eL[207] = eK.imageRect),
            (eL[208] = eE))
          : (eE = eL[208]),
        eL[209] !== nG || eL[210] !== nB || eL[211] !== nH || eL[212] !== iB
          ? ((eS = (e) => {
              e.target !== e.currentTarget || !nG || nB || nH || iB(null)
            }),
            (eL[209] = nG),
            (eL[210] = nB),
            (eL[211] = nH),
            (eL[212] = iB),
            (eL[213] = eS))
          : (eS = eL[213]),
        eL[214] !== tQ || eL[215] !== nV || eL[216] !== eV
          ? ((eT =
              !tQ &&
              !nV &&
              null != eV &&
              (0, i.jsx)("img", { alt: "", className: "pointer-events-none absolute inset-0 h-full w-full", src: eV })),
            (eL[214] = tQ),
            (eL[215] = nV),
            (eL[216] = eV),
            (eL[217] = eT))
          : (eT = eL[217]))
      let ru =
        eU &&
        (0, i.jsxs)(i.Fragment, {
          children: [
            null == nx && eH && (0, i.jsx)(i4, { image: eH }),
            nG &&
              (0, i.jsxs)("div", {
                className: "pointer-events-none absolute inset-0 isolate",
                children: [
                  !nB &&
                    !nH &&
                    nE.map((e) => {
                      let t = nS.get(e.id),
                        n = `0 0 ${eU.snapshot.content.width} ${eU.snapshot.content.height}`,
                        r = "preserved" === e.kind ? () => ri(e.id) : void 0
                      return (0, i.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, i.jsx)("svg", {
                              className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                              viewBox: n,
                              onPointerDown: (e) => {
                                e.target === e.currentTarget && iB(null)
                              },
                              children: (0, i.jsx)(b.t, {
                                onBeforeOpen: () => rn(e.id),
                                getItems: () => [
                                  ...(null == r
                                    ? []
                                    : [{ id: "edit", message: i8.edit, onSelect: r, selectAfterClose: !0 }]),
                                  {
                                    id: "comment",
                                    message: i8.comment,
                                    accelerator: iY,
                                    onSelect: () => iG(e.id),
                                    selectAfterClose: !0,
                                  },
                                ],
                                children: (0, i.jsx)("g", {
                                  children: (0, i.jsx)(nf, {
                                    target: e,
                                    selectionHost: tO,
                                    destination: t?.destination,
                                    imageSize: eU.snapshot.content,
                                    displayWidth: eK.imageRect.width,
                                    backgroundUrl: eU.assets.backgroundUrl,
                                    active: tu === e.id,
                                    showHover: null == nO,
                                    canInteract: !eK.isInteracting && !eK.isPanReady && !tP,
                                    reference: tu === e.id ? ip : void 0,
                                    onSelect: () => rn(e.id),
                                    onKeyboardFocus: (t) => {
                                      null != tE && nD(tE, eK, { ...e, ...t, rotation: t.rotation ?? e.rotation }, eU)
                                    },
                                    onDeselect: () => iB(null),
                                    onEditText: r,
                                    onTransforming: nt,
                                    onDestination: (n) => it(tI, tk, e.id, { ...t, destination: n }),
                                  }),
                                }),
                              }),
                            }),
                            tu === e.id &&
                              (0, i.jsx)("svg", {
                                className: "pointer-events-none absolute inset-0 z-1 h-full w-full overflow-visible",
                                viewBox: n,
                                children: (0, i.jsx)("g", { ref: tH, tabIndex: -1 }),
                              }),
                          ],
                        },
                        e.id,
                      )
                    }),
                  (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 isolate",
                    children:
                      !nB &&
                      !(nH && (eK.isPanReady || eK.isInteracting)) &&
                      nb
                        .filter((e) => !nH || e.id !== nl?.sample.sourceId)
                        .map((e) =>
                          (0, i.jsx)(
                            "svg",
                            {
                              className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                              style: { zIndex: e.id === tu ? 1 : void 0 },
                              viewBox: `0 0 ${eU.snapshot.content.width} ${eU.snapshot.content.height}`,
                              children: nH
                                ? (0, i.jsx)(nT, { region: e, onApply: () => iK(e.id) })
                                : (0, i.jsx)(b.t, {
                                    getItems: () => {
                                      var t
                                      let n
                                      return (
                                        (t = iU(e.id)),
                                        (n = iz(e.id)),
                                        [
                                          {
                                            id: "edit",
                                            message: i8.edit,
                                            onSelect: () => iN(e.id),
                                            selectAfterClose: !0,
                                          },
                                          {
                                            id: "duplicate",
                                            message: i8.duplicate,
                                            accelerator: iW,
                                            enabled: nb.length < 64,
                                            selectAfterClose: !0,
                                            onSelect: () => re(e.id, !0),
                                          },
                                          {
                                            id: "paint",
                                            message: td.painter,
                                            onSelect: () => iH(e),
                                            selectAfterClose: !0,
                                          },
                                          ...(nl?.sample.documentId === n$ && null != nl && e.id !== nl.sample.sourceId
                                            ? [
                                                {
                                                  id: "paste-format",
                                                  message: td.paste,
                                                  onSelect: () => iK(e.id),
                                                  selectAfterClose: !0,
                                                },
                                              ]
                                            : []),
                                          { id: "review-separator", type: "separator" },
                                          {
                                            id: "comment",
                                            message: i8.comment,
                                            accelerator: iY,
                                            selectAfterClose: !0,
                                            onSelect: () => iG(e.id, void 0, t),
                                          },
                                          {
                                            id: "properties",
                                            message: i8.properties,
                                            onSelect: () => iZ(e.id),
                                            selectAfterClose: !0,
                                          },
                                          {
                                            id: "reset",
                                            message: i8.reset,
                                            enabled: null != n,
                                            onSelect: null != n ? () => iL(n) : void 0,
                                          },
                                          { id: "delete-separator", type: "separator" },
                                          {
                                            id: "delete",
                                            message: i8.delete,
                                            tone: "danger",
                                            onSelect: () => i7(e.id),
                                          },
                                        ]
                                      )
                                    },
                                    onBeforeOpen: () => iB(e.id),
                                    children: (0, i.jsxs)("g", {
                                      ref: e.id === tu ? nm : void 0,
                                      "data-image-text-hover-label": null == nO ? e.text : void 0,
                                      children: [
                                        (0, i.jsx)("rect", {
                                          ref: e.id === tu ? ip : void 0,
                                          className: "pointer-events-none",
                                          x: e.x,
                                          y: e.y,
                                          width: e.width,
                                          height: e.height,
                                          transform: `rotate(${e.rotation} ${e.x + e.width / 2} ${e.y + e.height / 2})`,
                                          fill: "none",
                                          stroke: tu === e.id ? e4.l : "none",
                                          strokeWidth: 1.25,
                                          vectorEffect: "non-scaling-stroke",
                                        }),
                                        (0, i.jsx)(t3, {
                                          region: e,
                                          source: eU,
                                          fonts: eU.assets.fonts,
                                          imageSize: eU.snapshot.content,
                                          displayWidth: eK.imageRect.width,
                                          active: tu === e.id,
                                          showHover: null == nO,
                                          canInteract: !eK.isInteracting && !eK.isPanReady,
                                          disabled: eW,
                                          onSelect: () => iB(e.id),
                                          onKeyboardFocus: () => {
                                            null != tE && nD(tE, eK, e, eU)
                                          },
                                          onDeselect: () => iB(null),
                                          onDelete: () => i7(e.id),
                                          onChange: (t, n) => iT(t, `text-${e.id}`, n),
                                          onTranslatePreview: null == iI ? i_ : void 0,
                                          onMoveStart: iA,
                                          onMoveEnd: ik,
                                          onUndo: tx,
                                          onRedo: tv,
                                          onEditEnd: th,
                                        }),
                                      ],
                                    }),
                                  }),
                            },
                            e.id,
                          ),
                        ),
                  }),
                  (0, i.jsx)("svg", {
                    className: "pointer-events-none absolute inset-0 h-full w-full overflow-visible",
                    viewBox: `0 0 ${eU.snapshot.content.width} ${eU.snapshot.content.height}`,
                    children:
                      nB &&
                      null != ir &&
                      null != nz &&
                      !eK.isPanReady &&
                      !eK.isInteracting &&
                      (0, i.jsx)(
                        tB,
                        {
                          guides: ii,
                          activeGuideId: ir.id,
                          region: nz,
                          imageSize: eU.snapshot.content,
                          displayWidth: eK.imageRect.width,
                          onStart: iA,
                          onEnd: ik,
                          onMove: iR,
                        },
                        nz.id,
                      ),
                  }),
                ],
              }),
          ],
        })
      ;(eL[218] !== eG ||
      eL[219] !== nV ||
      eL[220] !== eV ||
      eL[221] !== rd ||
      eL[222] !== eK.fitImageRect ||
      eL[223] !== eK.imageRect
        ? ((e_ =
            nV &&
            (0, i.jsx)(
              s.P.div,
              {
                className: "absolute top-0 left-0 origin-top-left",
                style: {
                  width: eK.fitImageRect.width,
                  height: eK.fitImageRect.height,
                  transform: `scale(${eK.fitImageRect.width > 0 ? eK.imageRect.width / eK.fitImageRect.width : 1})`,
                },
                exit: { opacity: 0 },
                transition: rd,
                children: (0, i.jsx)(nC, { preparing: eG, previewSrc: eV }),
              },
              "text-loading",
            )),
          (eL[218] = eG),
          (eL[219] = nV),
          (eL[220] = eV),
          (eL[221] = rd),
          (eL[222] = eK.fitImageRect),
          (eL[223] = eK.imageRect),
          (eL[224] = e_))
        : (e_ = eL[224]),
        eL[225] !== e_
          ? ((eA = (0, i.jsx)(e6.N, { initial: !1, children: e_ })), (eL[225] = e_), (eL[226] = eA))
          : (eA = eL[226]))
      let rg =
        (null != e2 || (null != iI && null == iC)) &&
        (0, i.jsxs)("div", {
          role: "alert",
          className:
            "absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-surface/95 p-4 text-sm text-default",
          children: [
            e2 ?? (0, i.jsx)(i9, { error: iI }),
            nF &&
              ty &&
              (0, i.jsx)(y.$, {
                color: "secondary",
                onClick: ty,
                children: (0, i.jsx)(m.A, {
                  id: "imageTextEditing.retryLoading",
                  defaultMessage: "Retry loading",
                  description: "Reload the image text editor's document and required assets",
                }),
              }),
          ],
        })
      eL[227] !== eS || eL[228] !== eT || eL[229] !== ru || eL[230] !== eA || eL[231] !== rg || eL[232] !== eK.imageRect
        ? ((ek = (0, i.jsxs)("div", {
            className: "pointer-events-auto absolute",
            style: eK.imageRect,
            "data-image-text-surface": !0,
            onPointerDown: eS,
            children: [eT, ru, eA, rg],
          })),
          (eL[227] = eS),
          (eL[228] = eT),
          (eL[229] = ru),
          (eL[230] = eA),
          (eL[231] = rg),
          (eL[232] = eK.imageRect),
          (eL[233] = ek))
        : (ek = eL[233])
      let rm =
          nG &&
          null == nO &&
          !nB &&
          !nH &&
          !eK.isPanReady &&
          !eK.isInteracting &&
          null != tE &&
          (0, i.jsx)(tK, { stage: tE }),
        rh =
          nG &&
          !nB &&
          !nH &&
          null != eU &&
          null != tE &&
          (0, i.jsx)(
            iP,
            {
              reviewKey: tk,
              selection: tV?.blockId === nY ? tV : null,
              regions: nA,
              viewport: eK,
              imageSize: eU.snapshot.content,
              containerElement: tE,
              toolbarRef: tq,
              onOpen: iG,
              onEdit: iq,
              onClose: (e) => {
                if (null != e) {
                  let t = tI.get(n3, tk).get(tA)
                  t?.noteId === e && "edit" !== t.mode && tG(null)
                  return
                }
                tG(null)
                let t = tD.current
                if (((tD.current = null), t?.isConnected)) return void t.focus({ preventScroll: !0 })
                let n = tE?.querySelector("[data-image-text-region][data-image-text-selected]")
                n?.focus({ preventScroll: !0 })
              },
            },
            tk,
          ),
        rf =
          nG &&
          null != eU &&
          0 === nb.length &&
          eU.assets.fonts.length > 0 &&
          (0, i.jsx)("div", {
            className:
              0 === nE.length
                ? "pointer-events-none absolute inset-0 grid place-items-center"
                : "pointer-events-none absolute inset-x-0 top-2 flex justify-center",
            children: (0, i.jsx)(y.$, {
              className: "pointer-events-auto",
              size: "medium",
              radius: "full",
              color: "secondary",
              onClick: () => {
                let e = ra()
                null != e && iZ(e)
              },
              children: (0, i.jsx)(m.A, {
                id: "imageTextEditing.add",
                defaultMessage: "Add text",
                description: "Add a new editable text box to this image",
              }),
            }),
          }),
        rp =
          null != ij &&
          null != iC &&
          null != eU &&
          (0, i.jsx)("div", {
            className:
              "pointer-events-none absolute z-20 max-w-60 rounded-lg bg-surface-elevated px-2 py-1 text-sm text-danger shadow-md",
            role: "alert",
            style: {
              left: `clamp(8px, ${eK.imageRect.left + (iC.x * eK.imageRect.width) / eU.snapshot.content.width}px, calc(100% - 15rem))`,
              top: `clamp(8px, ${eK.imageRect.top + ((iC.y + iC.height) * eK.imageRect.height) / eU.snapshot.content.height + 6}px, calc(100% - 3rem))`,
            },
            children: (0, i.jsx)(i9, { error: ij }),
          }),
        rx =
          nX &&
          eU &&
          nO &&
          (0, i.jsx)("div", {
            ref: ix,
            "data-image-text-formatting-strip": !0,
            className: "z-10 w-max max-w-[calc(100%-1rem)] text-default",
            "data-annotation-control": !0,
            role: "group",
            "aria-label": tM.formatMessage(null == nk ? i8.textProperties : i8.layerActions),
            style: { ...ic, visibility: iu && !ig.hide?.referenceHidden ? void 0 : "hidden" },
            children: (0, i.jsx)("div", {
              style: { zoom: tj },
              children: (0, i.jsx)(tS, {
                children: (0, i.jsx)(e9.iU, {
                  variant: "formatting",
                  children: (0, i.jsxs)("div", {
                    className: "flex max-w-full min-w-0 items-center gap-0.5",
                    children: [
                      null != nk
                        ? (0, i.jsx)(
                            nn,
                            {
                              menuPlacement: ib,
                              target: nk,
                              change: nS.get(nk.id),
                              editing: nR === nk.id,
                              onEdit: (e) => nN(e ? nk.id : null),
                              onChange: (e) => it(tI, tk, nk.id, e),
                            },
                            nk.id,
                          )
                        : nz &&
                          (0, i.jsx)("div", {
                            className: "flex min-w-0 items-center gap-0.5 overflow-x-auto",
                            children: (0, i.jsx)(tT, { menuPlacement: ib, source: eU, selected: nz, onChange: iT }),
                          }),
                      (0, i.jsx)(e5.P, {
                        color: "ghostActive",
                        size: "formatToolbarIcon",
                        "aria-label": tM.formatMessage(i8.comment),
                        onClick: () => iG(nO.id),
                        children: (0, i.jsx)(ee.I, { asset: e3.g }),
                      }),
                      null != nz &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              "aria-hidden": !0,
                              className: "mx-0.5 h-5 w-px shrink-0 bg-border-subtle",
                            }),
                            (0, i.jsx)(e5.P, {
                              ref: (e) => {
                                ;((tY.current = e),
                                  null != e &&
                                    iu &&
                                    "restore" === tX.current &&
                                    ((tX.current = null),
                                    ig.hide?.referenceHidden
                                      ? tE
                                          ?.querySelector("[data-image-text-region][data-image-text-selected]")
                                          ?.focus({ preventScroll: !0 })
                                      : e.focus({ preventScroll: !0 })))
                              },
                              "aria-expanded": t2,
                              color: "ghostActive",
                              size: "formatToolbarIcon",
                              "aria-label": tM.formatMessage(i8.moreFormatting),
                              onClick: () => (t2 ? rr() : iZ(nz.id, !0)),
                              children: (0, i.jsx)(w.l0Y, {}),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          })
      return (
        eL[234] !== tW || eL[235] !== ro
          ? ((eP =
              null != tW
                ? (0, u.createPortal)(ro, tW)
                : (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 grid min-h-0 justify-items-end overflow-clip",
                    children: ro,
                  })),
            (eL[234] = tW),
            (eL[235] = ro),
            (eL[236] = eP))
          : (eP = eL[236]),
        eL[237] !== n$ ||
        eL[238] !== rc ||
        eL[239] !== ev ||
        eL[240] !== i2 ||
        eL[241] !== i2 ||
        eL[242] !== eM ||
        eL[243] !== eC ||
        eL[244] !== eE ||
        eL[245] !== ek ||
        eL[246] !== rm ||
        eL[247] !== rh ||
        eL[248] !== rf ||
        eL[249] !== rp ||
        eL[250] !== rx ||
        eL[251] !== eP
          ? ((eR = (0, i.jsxs)("div", {
              ref: t_,
              role: "group",
              className: "@container pointer-events-none absolute inset-0",
              "data-image-text-controls": n$,
              "aria-busy": rc,
              onKeyDown: ev,
              onWheel: i2,
              onTouchMove: i2,
              children: [eM, eC, eE, ek, rm, rh, rf, rp, rx, eP],
            })),
            (eL[237] = n$),
            (eL[238] = rc),
            (eL[239] = ev),
            (eL[240] = i2),
            (eL[241] = i2),
            (eL[242] = eM),
            (eL[243] = eC),
            (eL[244] = eE),
            (eL[245] = ek),
            (eL[246] = rm),
            (eL[247] = rh),
            (eL[248] = rf),
            (eL[249] = rp),
            (eL[250] = rx),
            (eL[251] = eP),
            (eL[252] = eR))
          : (eR = eL[252]),
        eR
      )
    }
    function iX(e) {
      return e()
    }
    function iQ(e) {
      return null != e
    }
    function iJ() {}
    function i1(e, t, n) {
      return (0, e2.ll)(e, t, n, { layoutShift: !1 })
    }
    function i0() {
      return new WeakMap()
    }
    function i2(e) {
      e.target instanceof Element &&
        null != e.target.closest('[role="menu"], [data-slot="popover-content"]') &&
        e.stopPropagation()
    }
    function i3(e) {
      let t,
        n = (0, r.c)(5),
        { saving: a, reconnecting: l, loadingDocument: o, noEditableText: s } = e
      if (l) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.reconnecting",
                defaultMessage: "Reconnecting…",
                description: "Toolbar status while retrying the preparation connection",
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (a) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.saving",
                defaultMessage: "Saving image",
                description: "Quiet status while saving an edited image; the image stays sharp",
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if (s) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.noEditableText",
                defaultMessage: "No editable text found",
                description: "The prepared image has no text that supports direct editing",
              })),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      return (
        n[3] !== o
          ? ((t = (0, i.jsx)("span", {
              className: "loading-shimmer-pure-text loading-shimmer-working motion-reduce:animate-none",
              children: o
                ? (0, i.jsx)(m.A, {
                    id: "imageTextEditing.loadingDocument",
                    defaultMessage: "Loading text…",
                    description: "Toolbar status while reopening an existing image's editable text and fonts",
                  })
                : (0, i.jsx)(m.A, {
                    id: "imageTextEditing.preparing",
                    defaultMessage: "Preparing text…",
                    description: "Indeterminate status while preparing an image for direct text editing",
                  }),
            })),
            (n[3] = o),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function i4(e) {
      let t,
        n,
        a,
        l = (0, r.c)(7),
        { image: o, thumbnail: s } = e,
        d = void 0 !== s && s,
        u = (0, c.useRef)(null)
      ;(l[0] !== o || l[1] !== d
        ? ((t = () => {
            let e = u.current?.getContext("2d")
            if (null != e)
              if (((e.globalCompositeOperation = "copy"), d)) {
                let t = Math.min(o.width, o.height)
                e.drawImage(o, (o.width - t) / 2, (o.height - t) / 2, t, t, 0, 0, e.canvas.width, e.canvas.height)
              } else e.drawImage(o, 0, 0)
          }),
          (n = [o, d]),
          (l[0] = o),
          (l[1] = d),
          (l[2] = t),
          (l[3] = n))
        : ((t = l[2]), (n = l[3])),
        (0, c.useLayoutEffect)(t, n))
      let g = d ? 144 : o.width,
        m = d ? 144 : o.height
      return (
        l[4] !== g || l[5] !== m
          ? ((a = (0, i.jsx)("canvas", {
              ref: u,
              "aria-hidden": !0,
              width: g,
              height: m,
              className: "pointer-events-none absolute inset-0 h-full w-full",
            })),
            (l[4] = g),
            (l[5] = m),
            (l[6] = a))
          : (a = l[6]),
        a
      )
    }
    function i6(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        d,
        c = (0, r.c)(23),
        { layers: u, imageRect: g, inkRef: m } = e,
        { base: h, ink: f, foreground: p } = u
      return (
        c[0] !== h || c[1] !== g
          ? ((t = (0, ti.xV)(h) && (0, i.jsx)(i5, { preview: h, imageRect: g })), (c[0] = h), (c[1] = g), (c[2] = t))
          : (t = c[2]),
        c[3] !== h ? ((n = (0, i.jsx)(i4, { image: h })), (c[3] = h), (c[4] = n)) : (n = c[4]),
        c[5] !== h || c[6] !== f || c[7] !== m
          ? ((a =
              f &&
              (0, i.jsx)("svg", {
                className: "absolute inset-0 h-full w-full overflow-visible",
                viewBox: `0 0 ${h.width} ${h.height}`,
                children: (0, i.jsx)("g", {
                  ref: m,
                  children: (0, i.jsx)("foreignObject", {
                    x: f.left,
                    y: f.top,
                    width: f.width,
                    height: f.height,
                    children: (0, i.jsx)(i4, { image: f.canvas }),
                  }),
                }),
              })),
            (c[5] = h),
            (c[6] = f),
            (c[7] = m),
            (c[8] = a))
          : (a = c[8]),
        c[9] !== p ? ((l = p && (0, i.jsx)(i4, { image: p })), (c[9] = p), (c[10] = l)) : (l = c[10]),
        c[11] !== g || c[12] !== n || c[13] !== a || c[14] !== l
          ? ((o = (0, i.jsxs)("div", { className: "pointer-events-none absolute", style: g, children: [n, a, l] })),
            (c[11] = g),
            (c[12] = n),
            (c[13] = a),
            (c[14] = l),
            (c[15] = o))
          : (o = c[15]),
        c[16] !== p || c[17] !== g
          ? ((s = p && (0, ti.xV)(p) && (0, i.jsx)(i5, { preview: p, imageRect: g })),
            (c[16] = p),
            (c[17] = g),
            (c[18] = s))
          : (s = c[18]),
        c[19] !== t || c[20] !== o || c[21] !== s
          ? ((d = (0, i.jsxs)(i.Fragment, { children: [t, o, s] })), (c[19] = t), (c[20] = o), (c[21] = s), (c[22] = d))
          : (d = c[22]),
        d
      )
    }
    function i5(e) {
      let t,
        n,
        a,
        l,
        o = (0, r.c)(12),
        { preview: s, imageRect: d } = e,
        u = (0, c.useRef)(null),
        [g, m] = (0, T.Xl)(),
        { width: h, height: f } = m,
        { left: p, top: x, width: v, height: y } = d
      return (
        o[0] !== f || o[1] !== y || o[2] !== v || o[3] !== p || o[4] !== s || o[5] !== x || o[6] !== h
          ? ((t = () => {
              null != u.current &&
                null != h &&
                null != f &&
                (0, ti.eB)(
                  s,
                  u.current,
                  { left: p, top: x, width: v, height: y },
                  { width: h, height: f },
                  u.current.ownerDocument.defaultView?.devicePixelRatio ?? 1,
                )
            }),
            (n = [s, p, x, v, y, h, f]),
            (o[0] = f),
            (o[1] = y),
            (o[2] = v),
            (o[3] = p),
            (o[4] = s),
            (o[5] = x),
            (o[6] = h),
            (o[7] = t),
            (o[8] = n))
          : ((t = o[7]), (n = o[8])),
        (0, c.useLayoutEffect)(t, n),
        o[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)("canvas", { ref: u, "aria-hidden": !0, className: "block h-full w-full" })), (o[9] = a))
          : (a = o[9]),
        o[10] !== g
          ? ((l = (0, i.jsx)("div", { ref: g, className: "pointer-events-none absolute inset-0", children: a })),
            (o[10] = g),
            (o[11] = l))
          : (l = o[11]),
        l
      )
    }
    function i9(e) {
      let t,
        n = (0, r.c)(4),
        { error: a } = e
      if (null == a) return null
      if ("glyphs" === a.code) {
        let e
        return (
          n[0] !== a.detail
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.unsupportedCharacters",
                defaultMessage: "This font cannot render {characters}. Change the text or choose another font",
                values: { characters: a.detail },
                description:
                  "Explains that the selected extracted font is missing the listed characters and blocks saving",
              })),
              (n[0] = a.detail),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if ("geometry" === a.code || "size" === a.code) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.invalidGeometry",
                defaultMessage: "This text does not fit inside the image. Move it, widen its box, or reduce its size",
                description: "Image text has invalid or overflowing geometry and must be adjusted before saving",
              })),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      return (
        n[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(m.A, {
              id: "imageTextEditing.renderFailed",
              defaultMessage: "This image could not be rendered. Retry loading before editing",
              description: "The exact image text preview cannot render, so editing and saving are unavailable",
            })),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    let i8 = (0, U.YK)({
      layerActions: {
        id: "imageTextEditing.layer.actions",
        defaultMessage: "Layer actions",
        description: "Floating actions for the selected object or preserved lettering.",
      },
      duplicate: {
        id: "imageTextEditing.duplicateBlock",
        defaultMessage: "Duplicate",
        description: "Create a copy of the selected editable text block",
      },
      delete: {
        id: "imageTextEditing.deleteBlock",
        defaultMessage: "Delete",
        description: "Delete the selected editable text block",
      },
      comment: {
        id: "imageTextEditing.addComment",
        defaultMessage: "Add comment",
        description: "Add a comment to the selected image text block to include in a combined edit request",
      },
      moreFormatting: {
        id: "imageTextEditing.moreFormatting",
        defaultMessage: "More formatting options",
        description: "Open the formatting and layout inspector for the selected image text block",
      },
      textProperties: {
        id: "imageTextEditing.toggleProperties",
        defaultMessage: "Text properties",
        description: "Show or hide the property panel for image text",
      },
      undo: {
        id: "imageTextEditing.undo",
        defaultMessage: "Undo",
        description: "Undo the most recent change in this image text draft",
      },
      redo: {
        id: "imageTextEditing.redo",
        defaultMessage: "Redo",
        description: "Redo the most recently undone image text change",
      },
      edit: {
        id: "imageTextEditing.editText",
        defaultMessage: "Edit text",
        description: "Place the caret inside the selected image text block",
      },
      properties: {
        id: "imageTextEditing.openProperties",
        defaultMessage: "Properties",
        description: "Open the optional text and formatting properties for this image text block",
      },
      reset: {
        id: "imageTextEditing.resetBlock",
        defaultMessage: "Reset this text block",
        description: "Restore this one text block to the version from which the current edit session started",
      },
    })
    var i7 = n("aa4G")
    let re = (0, d.bD)(ej.u, (e) => null),
      rt = (0, d.vP)(ej.u, () => new Map()),
      rn = (0, d.vP)(ej.u, () => new Set()),
      ri = (0, d.vP)(ej.u, () => new Set())
    ;((0, d.un)(ej.u, ({ get: e }) => e(ri).size > 0), (0, d.un)(ej.u, ({ get: e }) => e(rn).size > 0))
    let rr = (0, d.un)(ej.u, ({ get: e }) => {
      let t = []
      for (let [n, i] of e(rt)) {
        let r = e(re, n)
        i.length > 0 && r?.editing && r.dirty && t.push({ operationId: n, owners: i })
      }
      return t
    })
    var ra = n("iqEK"),
      rl = n("SPnB"),
      ro = n("Ghh3"),
      rs = n("GDNt"),
      rd = n("Bl5Q"),
      rc = n("uLW7"),
      ru = n("WLtw")
    async function rg(e, t, i) {
      t.assertCurrent()
      let r = await ro.Request.safeGet("/image-gen/layer-extractions/documents/{document_id}", {
        parameters: { path: { document_id: e } },
        expectedIdentity: t.identity,
        assertRequestCurrent: t.assertCurrent,
        signal: t.signal,
        retry: "never",
      })
      t.assertCurrent()
      let a = (0, ra.V2)(r.reference.image_asset_pointer.asset_pointer)
      if (null == a || !a.startsWith("file_") || a.includes("#")) throw Error("Invalid layer snapshot image reference")
      i?.(r.reference.version, a)
      let l = [],
        o = [],
        s = () => {
          for (let e of l) URL.revokeObjectURL(e)
          for (let e of o) document.fonts.delete(e)
        },
        d = async (e) => {
          let n = await rm(e, t)
          t.assertCurrent()
          let i = URL.createObjectURL(n)
          return (l.push(i), i)
        }
      try {
        let e = (e) => {
            if (!/^[a-zA-Z0-9._]{1,30}$/.test(e) || "." === e || ".." === e) throw Error("Invalid layer asset name")
            return `${a}#${e}`
          },
          i = new Map(),
          [c, u, g, m, h] = await Promise.allSettled([
            d(e(r.content.background_asset)),
            d(e(r.content.source_asset)),
            d(a),
            Promise.allSettled(
              r.content.fonts.map(async (i) => {
                let r = await (await rm(e(i.asset), t)).arrayBuffer()
                t.assertCurrent()
                let { getTextEditingFontCodePoints: a } = await Promise.resolve().then(n.bind(n, "BgSw")),
                  s = a(r),
                  d = `image-text-${crypto.randomUUID()}`,
                  c = await new FontFace(d, r).load()
                ;(t.assertCurrent(), document.fonts.add(c), o.push(c))
                let u = URL.createObjectURL(new Blob([r], { type: "font/ttf" }))
                return (l.push(u), { id: i.id, family: d, url: u, codePoints: s })
              }),
            ),
            (0, rd.Ay)(
              r.content.items,
              async (n) => {
                if ("mask_asset" in n && n.mask_asset)
                  try {
                    let a = await rm(e(n.mask_asset), t),
                      l = await (async function (e, t, n) {
                        let i = await createImageBitmap(e)
                        try {
                          if (i.width !== n.width || i.height !== n.height) return
                          let e = Math.max(0, Math.floor(t.x * n.width)),
                            r = Math.max(0, Math.floor(t.y * n.height)),
                            a = Math.min(n.width, Math.ceil((t.x + t.width) * n.width)),
                            l = Math.min(n.height, Math.ceil((t.y + t.height) * n.height)),
                            o = a - e,
                            s = l - r
                          if (o <= 0 || s <= 0) return
                          let d = document.createElement("canvas")
                          ;((d.width = o), (d.height = s))
                          let c = d.getContext("2d", { willReadFrequently: !0 })
                          if (!c) return
                          return (
                            c.drawImage(i, e, r, o, s, 0, 0, o, s),
                            (function ({ data: e, width: t, height: n }, i, r) {
                              let a = t + 1,
                                l = new Uint8Array(a * (n + 1)),
                                o = [1, a, -1, -a],
                                s = (t) => e[4 * t] >= 128 && e[4 * t + 3] >= 128
                              for (let e = 0; e < n; e++)
                                for (let i = 0; i < t; i++) {
                                  let r = e * t + i
                                  if (!s(r)) continue
                                  let o = e * a + i
                                  ;((0 !== e && s(r - t)) || (l[o] |= 1),
                                    (i + 1 !== t && s(r + 1)) || (l[o + 1] |= 2),
                                    (e + 1 !== n && s(r + t)) || (l[o + a + 1] |= 4),
                                    (0 !== i && s(r - 1)) || (l[o + a] |= 8))
                                }
                              let d = ""
                              for (let e = 0; e < l.length; e++)
                                for (; l[e];) {
                                  let t = e,
                                    n = 0
                                  for (; !(l[e] & (1 << n));) n++
                                  for (
                                    d += `M${i + (e % a)} ${r + Math.floor(e / a)}`;
                                    (l[t] &= ~(1 << n)), (t += o[n]) !== e;
                                  ) {
                                    let e = (n + 1) % 4,
                                      o = n
                                    if (
                                      (l[t] & (1 << e) ? (n = e) : l[t] & (1 << n) || (n = (n + 3) % 4),
                                      n !== o &&
                                        (d += o % 2 == 0 ? `H${i + (t % a)}` : `V${r + Math.floor(t / a)}`).length >=
                                          65536)
                                    )
                                      return
                                  }
                                  d += "Z"
                                }
                              return d || void 0
                            })(c.getImageData(0, 0, o, s), e, r)
                          )
                        } finally {
                          i.close()
                        }
                      })(a, n.bbox, r.content)
                    null != l && i.set(n.id, l)
                  } catch {
                    ;(t.signal.throwIfAborted(), t.assertCurrent())
                  }
              },
              { concurrency: 3, signal: t.signal },
            ),
          ])
        rf(h)
        let f = rf(c),
          p = rf(u),
          x = rf(g),
          v = rf(m).map(rf)
        return (
          t.assertCurrent(),
          await Promise.all([f, p, x].map(rh)),
          t.assertCurrent(),
          {
            snapshot: r,
            assets: { backgroundUrl: f, sourceUrl: p, previewUrl: x, fonts: v, objectMaskPaths: i },
            release: s,
          }
        )
      } catch (e) {
        throw (s(), e)
      }
    }
    async function rm(e, t) {
      t.assertCurrent()
      let n = await ro.Request.safeGet("/files/download/{file_id}", {
        parameters: { path: { file_id: e.replaceAll("#", "*") } },
        expectedIdentity: t.identity,
        assertRequestCurrent: t.assertCurrent,
        signal: t.signal,
        retry: "never",
      })
      t.assertCurrent()
      let i = await (0, ru.JY)((0, ru.LX)(n), t.signal)
      t.assertCurrent()
      let r = await rs._n
          .getInstance()
          .fetch(i.downloadUrl, {
            headers: (0, ru.ww)(i),
            assertRequestCurrent: t.assertCurrent,
            signal: t.signal,
            retry: "never",
          }),
        a = await r.blob()
      if ((t.assertCurrent(), 0 === a.size || a.size > 0x1400000)) throw Error("Layer asset size is invalid")
      return a
    }
    async function rh(e) {
      let t = new Image()
      ;((t.src = e), await t.decode())
    }
    function rf(e) {
      if ("rejected" === e.status) throw e.reason
      return e.value
    }
    var rp = n("O666")
    let rx = (0, d.un)(ej.u, ({ get: e }) => e(rp.H$, { layer: "4161245824", parameter: "enable_layer_edits" })),
      rv = nV.object({
        id: nV.string().min(1),
        accountId: nV.string().min(1),
        userId: nV.string().min(1),
        kind: nV.enum(["preparation", "snapshot"]),
        sourceImageId: nV.string().min(1),
        sourceFileId: nV.string().min(1),
        galleryId: nV.string(),
        status: nV.enum([
          "starting",
          "preparing",
          "loading",
          "ready",
          "saving",
          "saved",
          "failed",
          "unavailable",
          "uncertain",
        ]),
        extractionId: nV.string().optional(),
        documentId: nV.string().optional(),
        version: nV.number().int().positive().optional(),
        imageFileId: nV.string().optional(),
        parentOperationId: nV.string().optional(),
        saveStage: nV.enum(["render", "upload", "submit"]).optional(),
        failure: nV.enum(["start", "extraction", "assets", "render", "upload", "rejected"]).optional(),
        rejectionStatus: nV.number().int().optional(),
        reconnecting: nV.boolean().optional(),
        updatedAt: nV.number(),
      }),
      ry = Error("Image text editing is unavailable"),
      rb = (0, d.i1)(ej.u, (e, { get: t }) => (t(ri).has(e) || t(rn).has(e)) && t(rx)),
      rw = (0, k.m3)("image-text-editing-operations", [], {
        coerceStoredValue: (e) => nV.array(rv).safeParse(e).data ?? [],
      }),
      rI = (0, d.T1)(ej.u, (e) => ({
        visible: 0,
        mountedEditors: new Map(),
        preparationCanceled: !1,
        pending: null,
        publication: null,
        controller: null,
        timer: null,
        releaseTimer: null,
        history: null,
        releaseAssets: null,
        previewUrl: null,
        submission: null,
        stopIdentity: null,
        renderPending: null,
        renderGeneration: 0,
      })),
      rM = (0, d.un)(ej.u, ({ get: e }) => null != e(rl.chatGptAuthenticatedAccountId$) && null != e(rl.o8) && e(rx)),
      rj = (0, d.un)(ej.u, ({ get: e }) => {
        if (!e(rM)) return []
        let t = e(rl.chatGptAuthenticatedAccountId$),
          n = e(rl.o8)
        return e(rw).filter((e) => e.accountId === t && e.userId === n)
      }),
      rC = (0, d.i1)(ej.u, (e, { get: t }) => t(rj).find((t) => t.id === e) ?? null)
    function rE(e, t) {
      let n = e.get(rC, t)
      if (null == n) return
      e.get(rI, t).preparationCanceled = !1
      let i = rR(e, t)
      ;(i.editing || e.set(re, t, { ...i, editing: !0 }),
        "failed" !== n.status && "unavailable" !== n.status && "uncertain" !== n.status && rz(e, t),
        null != i.renderedPreview || null != i.renderError || i.rendering || rV(e, t))
    }
    function rS(e, t, n) {
      let i = e.get(rI, t)
      ;(null != i.releaseTimer && clearTimeout(i.releaseTimer), (i.releaseTimer = null), i.visible++)
      let r = () => {
        rq(i)
        let r = e.get(rC, t)
        null == r ||
          !rG(e, t) ||
          (n?.operationEntry &&
          "preparation" === r.kind &&
          ("starting" === r.status || "preparing" === r.status || "loading" === r.status) &&
          !i.preparationCanceled
            ? rE(e, t)
            : (("ready" !== r.status && "saved" !== r.status) ||
                null == r.version ||
                (null != n && (e.get(re, t)?.editing || e.get(nJ, n.reviewKey)))) &&
              rz(e, t))
      }
      ;((1 === i.visible || null != n) && r(),
        document.addEventListener("visibilitychange", r),
        window.addEventListener("online", r),
        window.addEventListener("offline", r))
      let a = !1
      return () => {
        a ||
          ((a = !0),
          document.removeEventListener("visibilitychange", r),
          window.removeEventListener("online", r),
          window.removeEventListener("offline", r),
          i.visible--,
          0 === i.visible && (rq(i), r$(e, t)))
      }
    }
    function rT(e, t, n) {
      let i = e.get(re, t)
      if (!i?.editing || (e.get(rt).get(t) ?? []).some((e) => e.id !== n)) return "leave"
      if (i.dirty) return "confirm"
      let r = e.get(rC, t)
      return r?.status === "starting" || r?.status === "preparing" || r?.status === "loading" || r?.status === "saving"
        ? "leave"
        : "discard"
    }
    function r_(e, t, n) {
      let i = e.get(rI, t),
        r = e.get(re, t)
      if (null == r) return
      i.renderGeneration++
      let a = e.get(rC, t)
      a?.kind === "preparation" && (i.preparationCanceled = !0)
      let l = new Set(i.mountedEditors.values())
      for (let t of (null != a && l.add(ia(a)), null != n && l.add(n), l))
        (e.set(n2, t, null), e.set(n0, t, null), e.set(n3, t, new Map()))
      let o = r.snapshot?.content.items ?? i.history?.initial
      ;((i.history = null == o ? null : (0, nE.MU)(o)),
        e.set(re, t, {
          ...r,
          editing: !1,
          selectedTextId: null,
          rendering: !1,
          renderError: null,
          renderedPreview: r.dirty || r.rendering || null != r.renderError ? null : r.renderedPreview,
        }),
        rH(e, t),
        r$(e, t))
    }
    function rA(e, t) {
      let n = e.get(rC, t)
      if (null == n || "uncertain" === n.status || ("snapshot" === n.kind && null == n.documentId)) return
      let i = e.get(re, t)
      ;((i?.renderError?.code === "font" || i?.renderError?.code === "background") &&
        e.set(re, t, { ...i, assets: null }),
        (0, d.Y)(e, () => {
          ;(rF(e, {
            ...n,
            status: null != n.documentId ? "loading" : "starting",
            extractionId: null == n.documentId ? void 0 : n.extractionId,
            failure: void 0,
            reconnecting: !1,
          }),
            rz(e, t, !0))
        }))
    }
    function rk(e, t, n, i = !1, r) {
      return rP(e, t, n, i, r)
    }
    function rP(e, t, n, i, r, a) {
      var l
      let o = e.get(rC, t),
        s = e.get(re, t)
      if (
        null == o ||
        s?.snapshot == null ||
        null == s.assets ||
        !s.editing ||
        !s.dirty ||
        s.rendering ||
        null != s.renderError ||
        null == s.renderedPreview ||
        (0, nE.e8)(s.snapshot, s.items, s.assets).length > 0
      )
        return null
      let c = e.get(rj).filter((e) => e.parentOperationId === t),
        u = c.find((e) => "saving" === e.status)
      if (null != u) {
        let t = e.get(rI, u.id).publication
        return null == t || (t.encode === n && e.get(re, u.id)?.items === s.items && u.galleryId === (r ?? o.galleryId))
          ? u.id
          : null
      }
      let g = c.find((e) => "uncertain" === e.status)
      if (null != g && !i) return g.id
      let m = {
          ...o,
          id: a ?? crypto.randomUUID(),
          kind: "snapshot",
          galleryId: r ?? o.galleryId,
          status: "saving",
          saveStage: "render",
          parentOperationId: t,
          sourceImageId: t,
          sourceFileId: o.imageFileId ?? o.sourceFileId,
          extractionId: void 0,
          documentId: void 0,
          version: void 0,
          imageFileId: void 0,
          rejectionStatus: void 0,
          failure: void 0,
          updatedAt: Date.now(),
        },
        h = { ...s, editing: !1 },
        f = ((l = ia(o, m.galleryId)), { notes: e.get(nW, l), edits: e.get(nZ, l), instruction: e.get(nY, l) }),
        p = e.get(rI, m.id)
      ;(p.submission?.canvas !== s.renderedPreview || p.submission?.items !== s.items) &&
        (null != p.previewUrl && URL.revokeObjectURL(p.previewUrl), (p.previewUrl = null), (p.submission = null))
      let x = (0, eD.udX)()
      return (
        (p.publication = { encode: n, result: x.promise }),
        (0, d.Y)(e, () => {
          ;(e.set(rn, (e) => new Set(e).add(m.id)),
            rF(e, m),
            e.set(re, t, h),
            e.set(re, m.id, {
              ...s,
              submittedPreviewUrl: void 0,
              editing: !1,
              dirty: !1,
              canUndo: !1,
              canRedo: !1,
              selectedTextId: null,
            }))
        }),
        (p.pending = (async function (e, t, n, i, r, a, l) {
          if (null == i.snapshot || null == i.renderedPreview) return
          let o = rO(e, t),
            s = e.get(rI, t.id),
            c = "render",
            u = null
          try {
            let g = s.submission ?? {
              canvas: i.renderedPreview,
              items: i.items,
              blob: await a(i.renderedPreview),
              fileId: void 0,
            }
            ;(o.assertCurrent(), (s.submission = g))
            let m = s.previewUrl ?? URL.createObjectURL(g.blob)
            ;((s.previewUrl = m),
              e.set(re, t.id, (e) => (null == e ? e : { ...e, submittedPreviewUrl: m })),
              (c = "upload"),
              rF(e, { ...t, saveStage: c }))
            let h =
              g.fileId ??
              (await (async function (e, t, n) {
                if ("image/png" !== t.type || 0 === t.size || t.size > 0x1400000) throw Error("Invalid rendered image")
                n.assertCurrent()
                let i = new File([t], "Edited image.png", { type: "image/png" }),
                  r = await (0, rc.QK)(
                    {
                      file_name: i.name,
                      file_size: i.size,
                      mime_type: i.type,
                      use_case: "multimodal",
                      store_in_library: !1,
                      timezone_offset_min: new Date().getTimezoneOffset(),
                      reset_rate_limits: !1,
                    },
                    n.signal,
                    void 0,
                    n.identity,
                  )
                return (
                  n.assertCurrent(),
                  await (0, rc.uploadChatGptFileBytes)(e, {
                    file: i,
                    fileId: r.file_id,
                    fileName: i.name,
                    contentType: i.type,
                    uploadUrl: r.upload_url,
                    requiredHeaders: r.upload_headers ?? void 0,
                    uploadStrategy: r.direct_library_upload_strategy,
                    signal: n.signal,
                  }),
                  n.assertCurrent(),
                  await (0, rc.ez)(
                    {
                      file_id: r.file_id,
                      file_name: i.name,
                      mime_type: i.type,
                      use_case: "multimodal",
                      index_for_retrieval: !1,
                      metadata: { store_in_library: !1 },
                    },
                    {
                      expectedIdentity: n.identity,
                      signal: n.signal,
                      resolveOnProcessingCompleted: !0,
                      requireCompletionEvent: !0,
                      unhandledMimeTypePolicy: "reject",
                    },
                  ),
                  n.assertCurrent(),
                  r.file_id
                )
              })(e, g.blob, o))
            ;(o.assertCurrent(), (g.fileId = h), (c = "submit"), rF(e, { ...t, saveStage: c }))
            let f = await ro.Request.safePost("/image-gen/layer-extractions/documents/{document_id}/snapshots", {
              parameters: { path: { document_id: i.snapshot.reference.document_id } },
              requestBody: { rendered_file_id: h, items: i.items },
              expectedIdentity: o.identity,
              assertRequestCurrent: o.assertCurrent,
              signal: o.signal,
              retry: "never",
            })
            ;(o.assertCurrent(),
              (u = {
                ...t,
                status: "loading",
                saveStage: void 0,
                documentId: f.document_id,
                version: f.version,
                imageFileId: (0, ra.V2)(f.image_asset_pointer.asset_pointer) ?? void 0,
              }),
              rF(e, u))
            let p = (function (e, t, n, i, r) {
              let a = new Map(e.get(nW, t)),
                l = new Map(
                  [...a].filter(([e, t]) => r.notes.get(e) === t && !t.sent && !t.resolved && i.has(t.blockId)),
                )
              for (let e of l.keys()) a.delete(e)
              let o = new Map(e.get(nZ, t)),
                s = new Map([...o].filter(([e, t]) => r.edits.get(e) === t && i.has(e)))
              for (let e of s.keys()) o.delete(e)
              let c = e.get(nY, t) === r.instruction,
                u = e.get(nX, t)
              return (
                (0, d.Y)(e, () => {
                  ;(e.set(n5, n, e.get(n5, t)), e.set(nW, n, l), e.set(nZ, n, s), e.set(nY, n, c ? r.instruction : ""))
                  let i = e.get(n2, t)
                  ;(e.set(n2, n, ("comments" === i && l.size > 0) || ("edits" === i && s.size > 0) ? i : null),
                    e.set(nX, n, u),
                    e.set(nX, t, "idle"),
                    e.set(n2, t, null),
                    e.set(nW, t, a),
                    e.set(nZ, t, o),
                    c && e.set(nY, t, ""),
                    ie(e, t),
                    ie(e, n))
                }),
                "string" != typeof u && u.moveTo(n),
                l.size > 0 || s.size > 0
              )
            })(e, ia(n, t.galleryId), ia(u), new Set(i.items.map((e) => e.id)), r)
            ;((s.history = (0, nE.MU)(i.items)),
              e.set(re, t.id, (e) =>
                null == e
                  ? e
                  : {
                      ...e,
                      snapshot: null,
                      assets: null,
                      renderedPreview: null,
                      rendering: !1,
                      editing: e.editing || p,
                    },
              ),
              e.get(re, n.id) === i && r_(e, n.id),
              (s.submission = null),
              l(f),
              e.queryClient.invalidateQueries({ queryKey: ["library-api", t.accountId] }))
            let x = await rg(f.document_id, rD(e, o))
            try {
              o.assertCurrent()
            } catch (e) {
              throw (x.release(), e)
            }
            ;(rL(e, t.id, x), await rV(e, t.id), o.assertCurrent(), rF(e, { ...u, status: "saved" }))
          } catch (l) {
            if (!rU(e, t)) return
            if (null != u)
              return void rF(e, { ...u, ...(l === ry ? { status: "saved" } : { status: "failed", failure: "assets" }) })
            let r = l instanceof rs.fk && [400, 401, 403, 404, 409, 410, 413, 422, 429].includes(l.status),
              a = "submit" === c ? void 0 : c
            ;("submit" === c && r && (a = "rejected"),
              rF(e, {
                ...t,
                saveStage: c,
                status: "submit" !== c || r ? "failed" : "uncertain",
                failure: a,
                rejectionStatus: "rejected" === a && l instanceof rs.fk ? l.status : void 0,
              }),
              e.set(re, n.id, (e) => (e === i ? { ...e, editing: !0 } : e)))
          }
        })(e, m, o, h, f, n, x.resolve).finally(() => {
          ;(x.resolve(null),
            (p.publication = null),
            (p.pending = null),
            e.set(rn, (e) => {
              let t = new Set(e)
              return (t.delete(m.id), t)
            }),
            r$(e, m.id))
        })),
        m.id
      )
    }
    function rR(e, t) {
      let n = e.get(re, t)
      if (null != n) return n
      let i = rN(!1, null)
      return (e.set(re, t, i), i)
    }
    function rN(e, t) {
      return {
        snapshot: null,
        assets: null,
        items: [],
        editing: e,
        dirty: !1,
        canUndo: !1,
        canRedo: !1,
        selectedTextId: t,
        rendering: !1,
        renderError: null,
        renderedPreview: null,
      }
    }
    function rz(e, t, n = !1) {
      let i = e.get(rI, t)
      null == i.pending &&
        (i.pending = (async function (e, t, n) {
          let i = e.get(rC, t)
          if (null == i) return
          let r = i
          if ("saving" === r.status) {
            if (!e.get(rn).has(t)) {
              let t = "render" === r.saveStage || "upload" === r.saveStage ? r.saveStage : void 0
              rF(e, { ...r, status: null == t ? "uncertain" : "failed", failure: t })
            }
            return
          }
          if (["failed", "unavailable", "uncertain"].includes(r.status)) return
          let a = e.get(re, t)
          if (("ready" === r.status || "saved" === r.status) && a?.snapshot != null && null != a.assets) return
          let l = rO(e, r),
            o = null == r.documentId ? "start" : "assets"
          try {
            if (null == r.documentId && null == r.extractionId) {
              if (!n) return void rF(e, { ...r, status: "failed", failure: "start" })
              let t = await ro.Request.safePost("/image-gen/layer-extractions", {
                requestBody: { source_file_id: r.sourceFileId },
                expectedIdentity: l.identity,
                assertRequestCurrent: l.assertCurrent,
                signal: l.signal,
                retry: "never",
              })
              ;(l.assertCurrent(), (r = { ...r, extractionId: t.id, status: "preparing", reconnecting: !1 }), rF(e, r))
            }
            if (null == r.documentId && null != r.extractionId) {
              o = "extraction"
              let t = rD(e, l),
                n = await ro.Request.safeGet("/image-gen/layer-extractions/{extraction_id}", {
                  parameters: { path: { extraction_id: r.extractionId } },
                  expectedIdentity: l.identity,
                  assertRequestCurrent: t.assertCurrent,
                  signal: l.signal,
                  retry: "never",
                })
              if ((l.assertCurrent(), "failed" === n.status || ("completed" === n.status && null == n.document)))
                return void rF(e, { ...r, status: "failed", failure: "extraction", reconnecting: !1 })
              if ("completed" !== n.status || null == n.document)
                return void rF(e, { ...r, status: "preparing", reconnecting: !1 })
              ;((r = {
                ...r,
                status: "loading",
                documentId: n.document.document_id,
                version: n.document.version,
                imageFileId: (0, ra.V2)(n.document.image_asset_pointer.asset_pointer) ?? void 0,
              }),
                rF(e, r))
            }
            if (null != r.documentId) {
              let n = rR(e, t)
              if (null == n.assets || null == n.snapshot) {
                o = "assets"
                let i = await rg(r.documentId, rD(e, l), (t, n) => {
                  ;(r.version !== t || r.imageFileId !== n) && ((r = { ...r, version: t, imageFileId: n }), rF(e, r))
                })
                try {
                  l.assertCurrent()
                } catch (e) {
                  throw (i.release(), e)
                }
                n = rL(e, t, i)
              }
              ;(await rV(e, t),
                l.assertCurrent(),
                rF(e, {
                  ...r,
                  version: n.snapshot?.reference.version ?? r.version,
                  imageFileId:
                    null == n.snapshot
                      ? r.imageFileId
                      : ((0, ra.V2)(n.snapshot.reference.image_asset_pointer.asset_pointer) ?? void 0),
                  status: "snapshot" === r.kind ? "saved" : "ready",
                  failure: void 0,
                  reconnecting: !1,
                }))
            }
          } catch (t) {
            var s
            if (t === ry || !rU(e, r)) return
            ;(s = t) instanceof rs.fk && [401, 403, 404, 410].includes(s.status)
              ? rF(e, { ...r, status: "unavailable", failure: o, reconnecting: !1 })
              : "extraction" === o
                ? rF(e, { ...r, status: "preparing", reconnecting: !0 })
                : rF(e, { ...r, status: "failed", failure: o, reconnecting: !1 })
          }
        })(e, t, n).finally(() => {
          i.pending = null
          let n = e.get(rC, t)
          ;(n?.status === "preparing" &&
            rG(e, t) &&
            (i.timer = setTimeout(() => {
              ;((i.timer = null), rz(e, t))
            }, 3e3)),
            r$(e, t))
        }))
    }
    function rL(e, t, n) {
      let i = e.get(rI, t),
        r = rR(e, t),
        a = r.snapshot?.reference.document_id,
        l =
          null != i.history &&
          (a === n.snapshot.reference.document_id ||
            (null == a && (i.history.past.length > 0 || i.history.future.length > 0)))
            ? i.history
            : (0, nE.MU)(n.snapshot.content.items)
      ;(i.releaseAssets?.(), (i.releaseAssets = n.release), (i.history = l))
      let o = {
        ...r,
        snapshot: n.snapshot,
        assets: n.assets,
        items: l.items,
        dirty: (0, nE.qd)(l),
        canUndo: l.past.length > 0,
        canRedo: l.future.length > 0,
        selectedTextId: l.items.some((e) => e.id === r.selectedTextId) ? r.selectedTextId : null,
        renderedPreview: null,
        renderError: null,
        rendering: !1,
      }
      return (e.set(re, t, o), rK(e, t, o.dirty), o)
    }
    function rD(e, t) {
      let n = () => {
        if ((t.assertCurrent(), !e.get(rx))) throw ry
      }
      return (n(), { ...t, assertCurrent: n })
    }
    function rO(e, t) {
      let n = e.get(rI, t.id)
      ;(n.controller?.abort(), n.stopIdentity?.())
      let i = new AbortController()
      return (
        (n.controller = i),
        (n.stopIdentity = e.watch(({ get: r }) => {
          if (r(rl.chatGptAuthenticatedAccountId$) !== t.accountId || r(rl.o8) !== t.userId) {
            ;(i.abort(),
              rq(n),
              n.releaseAssets?.(),
              (n.releaseAssets = null),
              null != n.previewUrl && URL.revokeObjectURL(n.previewUrl),
              (n.previewUrl = null),
              (n.submission = null),
              (n.history = null),
              e.set(re, t.id, null),
              rK(e, t.id, !1))
            return
          }
          if (r(rb, t.id)) {
            let e = (e) => {
              ;(e.preventDefault(), (e.returnValue = ""))
            }
            return (window.addEventListener("beforeunload", e), () => window.removeEventListener("beforeunload", e))
          }
        })),
        {
          identity: { accountId: t.accountId, userId: t.userId },
          signal: i.signal,
          assertCurrent: () => {
            if ((i.signal.throwIfAborted(), !rU(e, t))) throw Error("Image text editing account changed")
          },
        }
      )
    }
    function rB(e) {
      let t = e.get(rl.chatGptAuthenticatedAccountId$),
        n = e.get(rl.o8)
      return null != t && null != n ? { accountId: t, userId: n } : null
    }
    function rU(e, t) {
      let n = rB(e)
      return n?.accountId === t.accountId && n.userId === t.userId
    }
    function rF(e, t) {
      rU(e, t) &&
        e.set(rw, (e) => {
          let n = { ...t, updatedAt: Date.now() }
          return (0, nE.DN)(e.some((e) => e.id === t.id) ? e.map((e) => (e.id === t.id ? n : e)) : [...e, n])
        })
    }
    function r$(e, t) {
      let n = e.get(rI, t)
      null != n.releaseTimer ||
        n.visible > 0 ||
        null != n.pending ||
        e.get(re, t)?.dirty ||
        e.get(rn).has(t) ||
        (n.releaseTimer = setTimeout(() => {
          if (
            ((n.releaseTimer = null),
            n.visible > 0 || null != n.pending || e.get(re, t)?.dirty || (e.get(rt).get(t)?.length ?? 0) > 0)
          )
            return
          ;(n.releaseAssets?.(),
            (n.releaseAssets = null),
            (n.history = null),
            null != n.previewUrl && URL.revokeObjectURL(n.previewUrl),
            (n.previewUrl = null),
            (n.submission = null),
            n.stopIdentity?.(),
            (n.stopIdentity = null))
          let i = e.get(re, t)
          e.set(re, t, i?.editing ? rN(!0, i.selectedTextId) : null)
        }, 6e4))
    }
    function rH(e, t) {
      let n = e.get(rI, t).history
      null != n &&
        (e.set(re, t, (e) =>
          null == e
            ? e
            : {
                ...e,
                items: n.items,
                selectedTextId: n.items.some((t) => t.id === e.selectedTextId) ? e.selectedTextId : null,
                dirty: (0, nE.qd)(n),
                canUndo: n.past.length > 0,
                canRedo: n.future.length > 0,
              },
        ),
        rK(e, t, (0, nE.qd)(n)),
        rV(e, t))
    }
    function rK(e, t, n) {
      e.set(ri, (e) => {
        if (e.has(t) === n) return e
        let i = new Set(e)
        return (n ? i.add(t) : i.delete(t), i)
      })
    }
    function rV(e, t) {
      let i = e.get(rC, t),
        r = e.get(re, t)
      if (null == i || r?.snapshot == null || null == r.assets || !r.editing) return
      e.set(re, t, { ...r, rendering: !0, renderError: null })
      let a = e.get(rI, t)
      if (null != a.renderPending) return a.renderPending
      let l = (async () => {
        for (; rU(e, i);) {
          let r = e.get(re, t)
          if (r?.snapshot == null || null == r.assets || !r.editing) return
          let l = { snapshot: r.snapshot, items: r.items, assets: r.assets },
            o = a.renderGeneration,
            s = null,
            d = null
          try {
            s = await (async function (e, t, i) {
              let { renderTextEditingCanvas: r } = await Promise.resolve().then(n.bind(n, "BgSw"))
              return r({ snapshot: e, items: t, assets: i })
            })(l.snapshot, l.items, l.assets)
          } catch (e) {
            d = e instanceof ti.Zo ? e : new ti.Zo("canvas")
          }
          let c = e.get(re, t)
          if (!c?.editing || !rU(e, i)) return
          if (o === a.renderGeneration && c.items === l.items && c.snapshot === l.snapshot && c.assets === l.assets) {
            ;((a.renderPending = null),
              e.set(re, t, { ...c, rendering: !1, renderError: d, renderedPreview: s ?? c.renderedPreview }))
            return
          }
        }
      })().finally(() => {
        a.renderPending === l && (a.renderPending = null)
      })
      return ((a.renderPending = l), l)
    }
    function rG(e, t) {
      return (
        e.get(rI, t).visible > 0 && "hidden" !== document.visibilityState && navigator.onLine && null != e.get(rC, t)
      )
    }
    function rq(e) {
      ;(null != e.timer && clearTimeout(e.timer), (e.timer = null))
    }
    function rW(e) {
      let t,
        n,
        a,
        l = (0, r.c)(8),
        { ownerId: o } = e,
        s = (0, d.gh)(ej.u),
        u = (0, c.useRef)("")
      ;(l[0] !== o || l[1] !== s
        ? ((t = (e) => {
            let { currentLocation: t, nextLocation: n } = e
            if (t.pathname === n.pathname) return !1
            let i = s.get(rr).find((e) => {
              let { owners: t } = e
              return rY(t, n.pathname)
            })
            return ((u.current = n.pathname), i?.owners[0]?.id === o)
          }),
          (l[0] = o),
          (l[1] = s),
          (l[2] = t))
        : (t = l[2]),
        l[3] !== s
          ? ((n = () => {
              for (let { operationId: e, owners: t } of s.get(rr)) rY(t, u.current) && r_(s, e)
            }),
            (l[3] = s),
            (l[4] = n))
          : (n = l[4]))
      let g = (0, i7.e)(t, 0, n)
      return "blocked" !== g.state
        ? null
        : (l[5] !== g.proceed || l[6] !== g.reset
            ? ((a = (0, i.jsx)(eY, { kind: "discard", onCancel: g.reset, onConfirm: g.proceed })),
              (l[5] = g.proceed),
              (l[6] = g.reset),
              (l[7] = a))
            : (a = l[7]),
          a)
    }
    function rY(e, t) {
      return e.every((e) => e.pathname !== t)
    }
    var rZ = n("QAOE"),
      rX = n("XHx0"),
      rQ = n("phoH"),
      rJ = n("enVv")
    function r1(e) {
      let t,
        n,
        a,
        l = (0, r.c)(12),
        { mode: o } = e,
        s = !o.canSubmit || !o.hasContent
      return (
        l[0] !== o ? ((t = () => void o.onSubmit("")), (l[0] = o), (l[1] = t)) : (t = l[1]),
        l[2] !== o.sending || l[3] !== o.submitLabel || l[4] !== o.submitTooltip || l[5] !== s || l[6] !== t
          ? ((n = (0, i.jsx)(rJ.f, {
              ariaLabel: o.submitLabel,
              tooltipContent: o.submitTooltip,
              isLoading: o.sending,
              disabled: s,
              onClick: t,
            })),
            (l[2] = o.sending),
            (l[3] = o.submitLabel),
            (l[4] = o.submitTooltip),
            (l[5] = s),
            (l[6] = t),
            (l[7] = n))
          : (n = l[7]),
        l[8] !== o.attachments || l[9] !== o.sourceAttachment || l[10] !== n
          ? ((a = (0, i.jsxs)("div", {
              className: "flex items-center justify-end gap-2",
              children: [o.sourceAttachment, o.attachments, n],
            })),
            (l[8] = o.attachments),
            (l[9] = o.sourceAttachment),
            (l[10] = n),
            (l[11] = a))
          : (a = l[11]),
        a
      )
    }
    var r0 = n("XuaP"),
      r2 = n("X0d3")
    function r3(e, t, n) {
      e.save()
      try {
        if (
          (e.translate(n.x + n.width / 2, n.y + n.height / 2),
          e.rotate(((n.rotation ?? 0) * Math.PI) / 180),
          e.scale(n.width / t.width, n.height / t.height),
          e.translate(-t.x - t.width / 2, -t.y - t.height / 2),
          null != t.contour && "u" > typeof Path2D)
        )
          try {
            e.fill(new Path2D(t.contour), "evenodd")
            return
          } catch {}
        e.fillRect(t.x, t.y, t.width, t.height)
      } finally {
        e.restore()
      }
    }
    function r4(e) {
      let t,
        n,
        a,
        l,
        o,
        s,
        u = (0, r.c)(21),
        {
          reviewKey: h,
          presentation$: f,
          ref: p,
          prepareInput: x,
          onSubmitImageEdit: v,
          onToggleList: y,
          onRemoveImage: b,
        } = e,
        I = (0, d.gh)(ej.u),
        M = (0, g.A)(),
        j = (0, c.useId)(),
        C = (0, R.K)(x),
        E = (0, R.K)(y)
      u[0] !== b ? ((t = (e) => b?.(e)), (u[0] = b), (u[1] = t)) : (t = u[1])
      let S = (0, R.K)(t),
        T = null != b
      u[2] !== T ||
      u[3] !== M ||
      u[4] !== v ||
      u[5] !== C ||
      u[6] !== f ||
      u[7] !== S ||
      u[8] !== h ||
      u[9] !== I ||
      u[10] !== j ||
      u[11] !== E
        ? ((n = (0, d.un)(ej.u, (e) => {
            let { get: t } = e
            return (function (
              e,
              t,
              n,
              r,
              a,
              { panel: l, directEditCount: o = 0, disabled: s = !1, previewSrc: d, regions: c, imageSize: u },
              { prepareInput: g, onSubmitImageEdit: h, onRemoveImage: f, onToggleList: p },
            ) {
              let x = t(nW, r),
                v = t(nZ, r),
                y = t(n1, r),
                b = o > 0 || t(nQ, r),
                I = t(n6, r),
                M = t(nY, r),
                j = is(x, c),
                C = nj(v, c),
                E = j.some(({ review: e }) => e.draftReply?.trim()),
                S =
                  "failed" === y
                    ? n.formatMessage(r6.retry)
                    : n.formatMessage({
                        id: "composer.submitButtonTooltip.send",
                        defaultMessage: "Send",
                        description: "Accessible label for submit when no response is currently in progress",
                      }),
                T =
                  c.length || !s
                    ? j.map(({ id: e }) => e)
                    : [...x].filter(([, e]) => !e.sent && !e.resolved).map(([e]) => e),
                _ = o + (s && !c.length ? v.size : C.length),
                A = !s && !I && !E && null != h && "sending" !== y
              return {
                reviewKey: r,
                sessionId: a,
                hasContent: b || j.length > 0 || C.length > 0 || !!M.trim(),
                canSubmit: A,
                sending: "sending" === y,
                submitLabel: S,
                submitTooltip: E ? n.formatMessage(r6.finishDraft) : S,
                sourceAttachment:
                  d && null != f
                    ? (0, i.jsx)(r2.p, {
                        mode: "edit-text",
                        name: n.formatMessage({
                          id: "imageTextEditing.composerThumbnail",
                          defaultMessage: "Image being edited",
                          description: "Accessible name for the source image in the Edit Text composer.",
                        }),
                        previewSrc: d,
                        onRemove: f,
                      })
                    : null,
                attachments:
                  T.length > 0 || _ > 0 || M.trim()
                    ? (0, i.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          M.trim() &&
                            (0, i.jsx)(rZ.x, {
                              icon: (0, i.jsx)(w.OHc, {}),
                              disabled: s,
                              onRemoveAriaLabel: (0, rX.Kq)(n, "comment"),
                              onRemove: () => {
                                ;(e.set(nY, r, ""), ie(e, r))
                              },
                              children: M,
                            }),
                          T.length > 0 &&
                            (0, i.jsx)(rZ.x, {
                              icon: (0, i.jsx)(w.OHc, {}),
                              "aria-expanded": "comments" === l,
                              disabled: s,
                              "data-image-text-list-toggle": "comments",
                              onClick: () => p("comments"),
                              onRemoveAriaLabel: (0, rX.Kq)(n, "comment"),
                              onRemove: s ? void 0 : () => ii(e, r, T),
                              children: (0, rX.$Z)(n, "comment", T.length),
                            }),
                          _ > 0 &&
                            (0, i.jsx)(rZ.x, {
                              Icon: w.Npl,
                              className: "min-w-0",
                              disabled: s,
                              "aria-expanded": "edits" === l,
                              "data-image-text-list-toggle": "edits",
                              onClick: () => p("edits"),
                              children: (0, i.jsx)(m.A, {
                                id: "imageTextEditing.layerEditCount",
                                defaultMessage: "{count, plural, one {# image edit} other {# image edits}}",
                                description: "Number of queued changes to image regions in the composer.",
                                values: { count: _ },
                              }),
                            }),
                        ],
                      })
                    : null,
                errorMessage: "failed" === y ? n.formatMessage(r6.failed) : null,
                onEscape: () => null != l && "properties" !== l && (p(l), !0),
                onSubmit: async (t, i) => {
                  if (e.get(n6, r) || s || null == h || "sending" === e.get(n1, r)) return !1
                  let a = is(e.get(nW, r), c),
                    l = nj(e.get(nZ, r), c),
                    o = e.get(nY, r)
                  if (a.some(({ review: e }) => e.draftReply?.trim())) return !1
                  let d = (0, r0.K)({
                      imageCommentGroups:
                        0 === a.length
                          ? []
                          : [
                              {
                                imageNumber: 1,
                                comments: a.map(({ id: e, review: t, region: i }) => {
                                  let r = null == t.excerpt ? r6.target : r6.excerptTarget
                                  return {
                                    id: e,
                                    x: (i.x + i.width / 2) / u.width,
                                    y: (i.y + i.height / 2) / u.height,
                                    text: n.formatMessage("object" === i.kind ? r6.objectTarget : r, {
                                      excerpt: t.excerpt,
                                      text: i.text,
                                      x: Math.round(i.x),
                                      y: Math.round(i.y),
                                      width: Math.round(i.width),
                                      height: Math.round(i.height),
                                      rotation: i.rotation,
                                      body: il(t),
                                    }),
                                  }
                                }),
                              },
                            ],
                      intl: n,
                      prompt: [
                        a.length ? n.formatMessage(r6.instruction, u) : "",
                        l.length ? n.formatMessage(r6.layerInstructions, u) : "",
                        ...l.map((e) =>
                          (function (e, { region: t, change: n }) {
                            return [
                              e.formatMessage(ns.source, { kind: t.kind, name: t.text, ...no(t) }),
                              ...nl(e, n),
                            ].join(" ")
                          })(n, e),
                        ),
                        o.trim(),
                        t.trim(),
                      ]
                        .filter(Boolean)
                        .join("\n"),
                    }),
                    m = (function (e, t, n = !1) {
                      let i = t,
                        r = "retry-edited-image" === e.get(nX, t),
                        a = new AbortController(),
                        l = {
                          sendsEditedImage: n || r,
                          abort: () => a.abort(),
                          moveTo: (e) => {
                            i = e
                          },
                        }
                      return (
                        e.set(nX, t, l),
                        {
                          signal: a.signal,
                          get key() {
                            return i
                          },
                          isCurrent: () => !a.signal.aborted && e.get(nX, i) === l,
                          finish(a) {
                            e.set(nX, i, "failed" === a && (r || (n && i !== t)) ? "retry-edited-image" : a)
                          },
                        }
                      )
                    })(e, r, b),
                    f = {
                      isCurrent: m.isCurrent,
                      prepare: async () => {
                        let e = await g()
                        if (e?.reviewKey !== m.key) return null
                        let i =
                          !l.length || a.length || o.trim() || t.trim()
                            ? void 0
                            : (function (e, t) {
                                let n = document.createElement("canvas")
                                ;((n.width = t.width), (n.height = t.height))
                                let i = n.getContext("2d")
                                if (i) {
                                  for (let { region: n, change: r } of ((i.fillStyle = "black"),
                                  i.fillRect(0, 0, t.width, t.height),
                                  (i.fillStyle = "white"),
                                  e))
                                    (r3(i, n, n), r.destination && r3(i, n, r.destination))
                                  try {
                                    let e = n.toDataURL("image/png")
                                    return e.startsWith("data:image/png;") ? e : void 0
                                  } catch {
                                    return
                                  }
                                }
                              })(l, u)
                        return {
                          prompt:
                            i && e.source.pixels
                              ? [d, n.formatMessage(r6.nativeMask)].join("\n")
                              : d || (b ? n.formatMessage(r6.editedImage) : ""),
                          ...(i ? { maskSrc: i } : {}),
                          annotationCount: a.length || void 0,
                          textEditSource: e.source,
                        }
                      },
                      onAccepted: () => {
                        let t = m.key,
                          n = new Map(e.get(nW, t))
                        for (let [i, { id: r, review: o, region: s }] of (!(function (e, t, n) {
                          if (0 === n.length) return
                          let i = new Map(e.get(nZ, t))
                          for (let { region: e, change: t } of n) {
                            let n = i.get(e.id)
                            if (null == n) continue
                            let r = { ...n }
                            ;(n.replacementText === t.replacementText && delete r.replacementText,
                              eX()(n.destination, t.destination) && delete r.destination,
                              null == r.replacementText && null == r.destination ? i.delete(e.id) : i.set(e.id, r))
                          }
                          e.set(nZ, t, i)
                        })(e, t, l),
                        a.entries())) {
                          let e = n.get(r)
                          if (null == e) continue
                          let t = { number: i + 1, target: o.excerpt ?? s.text }
                          e.blockId === o.blockId &&
                          e.excerpt === o.excerpt &&
                          e.draftReply === o.draftReply &&
                          il(e) === il(o)
                            ? n.set(r, { ...e, sent: t })
                            : n.set(crypto.randomUUID(), { ...o, sent: t, resolved: !0 })
                        }
                        ;(e.set(nW, t, n), e.get(nY, t) === o && e.set(nY, t, ""), m.finish("idle"), ie(e, t))
                      },
                    },
                    p = !1
                  try {
                    let e = await (0, eK.rt)(f)
                    null != e && (p = await h(e, m.signal, i))
                  } catch {}
                  if (p) return (0, eK.cm)(f)
                  if (m.isCurrent()) {
                    let n = m.key,
                      r = e.get(nW, n),
                      s =
                        b ||
                        a.some(({ id: e, review: t }) => r.get(e) === t) ||
                        l.some(({ region: t, change: i }) => e.get(nZ, n).get(t.id) === i) ||
                        !!(o.trim() || t.trim() || i)
                    m.finish(s ? "failed" : "idle")
                  }
                  return !1
                },
              }
            })(I, t, M, h, j, t(f), {
              prepareInput: C,
              onSubmitImageEdit: v,
              onToggleList: E,
              onRemoveImage: T ? S : void 0,
            })
          })),
          (u[2] = T),
          (u[3] = M),
          (u[4] = v),
          (u[5] = C),
          (u[6] = f),
          (u[7] = S),
          (u[8] = h),
          (u[9] = I),
          (u[10] = j),
          (u[11] = E),
          (u[12] = n))
        : (n = u[12])
      let _ = n
      ;(u[13] !== _ ? ((a = () => _), (l = [_]), (u[13] = _), (u[14] = a), (u[15] = l)) : ((a = u[14]), (l = u[15])),
        (0, c.useImperativeHandle)(p, a, l))
      let A = (0, d.Ul)(null == p ? _ : null)
      return null == A
        ? null
        : (u[16] !== A ? ((o = (0, i.jsx)(r1, { mode: A })), (u[16] = A), (u[17] = o)) : (o = u[17]),
          u[18] !== A || u[19] !== o
            ? ((s = (0, i.jsx)(rQ.u, { mode: A, children: o })), (u[18] = A), (u[19] = o), (u[20] = s))
            : (s = u[20]),
          s)
    }
    let r6 = (0, U.YK)({
        editedImage: {
          id: "imageTextEditing.sendEditedImage",
          defaultMessage: "Here’s my edited image.",
          description: "Message sent with an edited image when the user has already applied all changes directly.",
        },
        finishDraft: {
          id: "imageTextEditing.finishCommentDraft",
          defaultMessage: "Edit this comment to finish your draft before sending.",
          description: "Explanation when an unfinished draft prevents sending the queued image text comments.",
        },
        target: {
          id: "imageTextEditing.noteTarget",
          defaultMessage: "Text “{text}” at ({x}, {y}), {width} × {height} pixels, rotated {rotation}°. {body}",
          description: "A staged editing note with the exact text and source image frame that the user selected.",
        },
        objectTarget: {
          id: "imageTextEditing.objectNoteTarget",
          defaultMessage: "Object “{text}” at ({x}, {y}), {width} × {height} pixels. {body}",
          description: "A staged comment describing the selected object's original bounds.",
        },
        layerInstructions: {
          id: "imageTextEditing.layerRequestInstructions",
          defaultMessage:
            "Apply these edits to the attached {width} × {height} image. Coordinates use the top-left corner of the image as the origin. Keep surrounding content intact.",
          description: "Instructions introducing position and wording edits to baked image regions.",
        },
        nativeMask: {
          id: "imageTextEditing.nativeLayerEditMask",
          defaultMessage:
            "The white areas in the selection image mark the source and destination regions for these edits.",
          description: "Explains the separate selection mask attached to a native image edit request.",
        },
        excerptTarget: {
          id: "imageTextEditing.noteExcerptTarget",
          defaultMessage:
            "Originally highlighted text “{excerpt}”. Current block “{text}” at ({x}, {y}), {width} × {height} pixels, rotated {rotation}°. {body}",
          description:
            "A staged editing note targeting highlighted words, with their containing text block and source image frame.",
        },
        instruction: {
          id: "imageTextEditing.batchInstruction",
          defaultMessage:
            "Apply these comments together to the attached {width} × {height} image. Harmonize the edited lettering with the surrounding image and preserve content outside the requested changes.",
          description: "Instructions sent with the editable image and the user's notes on individual text blocks.",
        },
        failed: {
          id: "imageTextEditing.requestFailed",
          defaultMessage: "Couldn’t send your edit. Try again.",
          description: "Message when sending the batch of image text notes failed and it can be retried.",
        },
        retry: {
          id: "imageTextEditing.retryNotes",
          defaultMessage: "Retry",
          description: "Button to resend a batch of image text notes after a failed attempt.",
        },
      }),
      r5 = (0, d.i1)(ej.u, ({ operationId: e, operationEntry: t }, { get: n }) => {
        let i = null == e ? null : n(rC, e),
          r = null == e ? null : n(re, e),
          a = i?.status === "failed" || i?.status === "unavailable" || i?.status === "uncertain",
          l =
            r?.snapshot == null || null == r.assets ? null : { snapshot: r.snapshot, items: r.items, assets: r.assets },
          o =
            i?.kind === "preparation" &&
            ("starting" === i.status || "preparing" === i.status || "loading" === i.status),
          s = i?.kind === "snapshot" && ("saving" === i.status || "loading" === i.status),
          d = l?.snapshot.content.items.length === 0 && (0 === l.assets.fonts.length || i?.kind === "preparation"),
          c = (t && (o || s || a)) || r?.editing === !0
        return { operation: i, session: r, source: l, failed: a, preparing: o, saving: s, noEditableText: d, active: c }
      })
    function r9(e) {
      var t
      let n,
        a,
        l,
        o,
        s,
        u,
        g,
        h,
        f,
        p,
        x,
        v,
        b,
        w,
        I,
        M,
        j,
        C,
        E,
        S,
        T,
        _,
        A,
        k,
        P,
        N,
        z = (0, r.c)(175),
        {
          operationId: L,
          operationEntry: D,
          galleryId: O,
          tabId: B,
          sourceImageId: U,
          sourcePreview: F,
          onSelectImage: $,
          children: H,
        } = e,
        K = (0, d.gh)(ej.u),
        V = (0, d.gh)(eV.GD),
        G = (0, d.Ul)(null != L && rM) ? L : void 0,
        q = (0, c.useId)(),
        W = (0, c.useContext)(eO.hf),
        [Y, Z] = (0, c.useState)(null),
        X = (0, c.useRef)(null)
      z[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => X.current?.onClearSelection() === !0), (z[0] = n))
        : (n = z[0])
      let Q = (0, R.K)(n),
        [J, et] = (0, c.useState)(null)
      z[1] !== D || z[2] !== G
        ? ((a = { operationId: G, operationEntry: D }), (z[1] = D), (z[2] = G), (z[3] = a))
        : (a = z[3])
      let {
          operation: en,
          session: ei,
          source: er,
          failed: ea,
          preparing: el,
          saving: eo,
          noEditableText: es,
          active: ed,
        } = (0, d._U)(r5, a),
        ec = en?.parentOperationId,
        eu = (0, d._U)(null == ec ? null : rC, ec ?? ""),
        eg = (0, d._U)(null == ec ? null : re, ec ?? ""),
        em = en?.kind === "snapshot" && null == en.documentId ? eu : en
      z[4] !== O || z[5] !== G || z[6] !== em
        ? ((l = null == em ? (G ?? "") : ia(em, O)), (z[4] = O), (z[5] = G), (z[6] = em), (z[7] = l))
        : (l = z[7])
      let eh = l,
        ef = (0, d._U)(null != G && nJ, eh),
        ep = en?.status
      z[8] !== G || z[9] !== ep
        ? ((o = { operationId: G, status: ep }), (z[8] = G), (z[9] = ep), (z[10] = o))
        : (o = z[10])
      let ex = (0, c.useRef)(o),
        [ev, ey] = (0, c.useState)(null)
      z[11] !== en?.status || z[12] !== G
        ? ((s = () => {
            let e = ex.current,
              t = e.operationId === G && ("saving" === e.status || "loading" === e.status)
            if (
              ((ex.current = { operationId: G, status: en?.status }),
              e.operationId !== G && Z((e) => (e?.operationId === G ? e : null)),
              null == G || !t || en?.status !== "saved")
            )
              return
            ey(G)
            let n = setTimeout(() => ey(null), 1800)
            return () => {
              ;(clearTimeout(n), ey(null))
            }
          }),
          (z[11] = en?.status),
          (z[12] = G),
          (z[13] = s))
        : (s = z[13])
      let eb = en?.status
      ;(z[14] !== G || z[15] !== eb ? ((u = [G, eb]), (z[14] = G), (z[15] = eb), (z[16] = u)) : (u = z[16]),
        (0, c.useEffect)(s, u),
        z[17] !== D || z[18] !== G || z[19] !== eh || z[20] !== F
          ? ((g = (0, d.un)(ej.u, (e) => {
              let { get: t } = e,
                n = t(r5, { operationId: G, operationEntry: D }),
                i = n.session
              return {
                directEditCount:
                  i?.dirty || (n.operation?.kind === "snapshot" && null == n.operation.documentId)
                    ? eQ(n.source).length
                    : 0,
                regions: null == n.source ? [] : [...tl(n.source), ...nM(n.source)],
                imageSize: n.source?.snapshot.content ?? { width: 0, height: 0 },
                disabled:
                  n.preparing ||
                  n.saving ||
                  n.failed ||
                  n.noEditableText ||
                  null == n.source ||
                  i?.rendering ||
                  i?.renderError != null ||
                  (i?.editing === !0 && null == i.renderedPreview),
                panel: n.active ? t(n2, eh) : null,
                previewSrc: i?.submittedPreviewUrl ?? i?.assets?.previewUrl ?? F,
              }
            })),
            (z[17] = D),
            (z[18] = G),
            (z[19] = eh),
            (z[20] = F),
            (z[21] = g))
          : (g = z[21]))
      let ew = g,
        eI =
          ea && en?.kind === "snapshot" && null != en.parentOperationId && eg?.dirty === !0 ? en.parentOperationId : G,
        eM = (0, c.useRef)(null)
      if (
        (z[22] !== O ||
        z[23] !== D ||
        z[24] !== G ||
        z[25] !== eI ||
        z[26] !== q ||
        z[27] !== eh ||
        z[28] !== V ||
        z[29] !== K
          ? ((h = () => {
              let e,
                t,
                n = eM.current
              if (null == n || null == G || null == eI) return
              let i = O ?? K.get(rC, G)?.galleryId,
                r = K.get(eU.cz)?.projectId,
                a =
                  null != i &&
                  !i.startsWith("image:") &&
                  !(0, eF.CV)(V.value.search ?? "") &&
                  !(0, eU.s2)(i) &&
                  (null == r || K.get(eB.zn, i) !== r)
              !(function (e, t, n) {
                if (!n || e.get(n5, t)) return e.set(n5, t, n)
                e.set(n5, t, !0)
                let i = n9.safeParse(e.get(n8.drafts$)[t]).data
                null == i ||
                  e.get(nW, t).size ||
                  e.get(nZ, t).size ||
                  e.get(nY, t) ||
                  (e.set(nW, t, new Map(i.notes)), e.set(nZ, t, new Map(i.edits)), e.set(nY, t, i.instruction ?? ""))
              })(K, eh, a)
              let l =
                  ((t = K.get(rI, eI).mountedEditors).set(q, eh),
                  () => {
                    ;(t.delete(q),
                      0 === t.size &&
                        queueMicrotask(() => {
                          0 === t.size && "discard" === rT(K, eI, q) && r_(K, eI, eh)
                        }))
                  }),
                o = new IntersectionObserver((t) => {
                  let [n] = t
                  if ((e?.(), (e = void 0), n?.isIntersecting)) {
                    var i
                    let t = rS(K, G, { reviewKey: eh, operationEntry: D }),
                      n =
                        ((i = V.value.pathname),
                        K.set(rt, (e) =>
                          new Map(e).set(eI, [
                            ...(e.get(eI) ?? []).filter((e) => e.id !== q),
                            { id: q, pathname: i ?? null },
                          ]),
                        ),
                        () => {
                          ;(K.set(rt, (e) => {
                            let t = new Map(e),
                              n = (t.get(eI) ?? []).filter((e) => e.id !== q)
                            return (n.length > 0 ? t.set(eI, n) : t.delete(eI), t)
                          }),
                            r$(K, eI))
                        })
                    e = () => {
                      ;(t(), n())
                    }
                  }
                })
              return (
                o.observe(n),
                () => {
                  ;(o.disconnect(), e?.(), l())
                }
              )
            }),
            (f = [K, G, D, eI, q, V, O, eh]),
            (z[22] = O),
            (z[23] = D),
            (z[24] = G),
            (z[25] = eI),
            (z[26] = q),
            (z[27] = eh),
            (z[28] = V),
            (z[29] = K),
            (z[30] = h),
            (z[31] = f))
          : ((h = z[30]), (f = z[31])),
        (0, c.useLayoutEffect)(h, f),
        null == G || null == eI)
      ) {
        let e, t
        return (
          z[32] !== H ? ((e = H(void 0)), (z[32] = H), (z[33] = e)) : (e = z[33]),
          z[34] !== e
            ? ((t = (0, i.jsx)("div", { className: "relative h-full min-h-0 w-full", children: e })),
              (z[34] = e),
              (z[35] = t))
            : (t = z[35]),
          t
        )
      }
      let eC = Y?.operationId === G ? Y : null
      z[36] !== G || z[37] !== eI || z[38] !== q || z[39] !== eh || z[40] !== K
        ? ((p = (e, t) => {
            let n = rT(K, eI, q),
              i = () => {
                ;(r_(K, eI, eh), e())
              }
            "confirm" === n
              ? Z({ kind: "discard", operationId: G, complete: i, cancel: t })
              : "discard" === n
                ? i()
                : e()
          }),
          (z[36] = G),
          (z[37] = eI),
          (z[38] = q),
          (z[39] = eh),
          (z[40] = K),
          (z[41] = p))
        : (p = z[41])
      let eE = p,
        eS = el && (en?.status !== "loading" || null != en.extractionId)
      z[42] !== O || z[43] !== $ || z[44] !== G || z[45] !== K
        ? ((x = () => {
            if (K.get(rj).some((e) => e.parentOperationId === G && "uncertain" === e.status))
              return void Z({ kind: "copy", operationId: G, sourceId: G })
            let e = rk(K, G, ti.Tc, !1, O)
            null != e && $(e)
          }),
          (z[42] = O),
          (z[43] = $),
          (z[44] = G),
          (z[45] = K),
          (z[46] = x))
        : (x = z[46])
      let eT = x
      z[47] !== $ ||
      z[48] !== en ||
      z[49] !== G ||
      z[50] !== eI ||
      z[51] !== eE ||
      z[52] !== eh ||
      z[53] !== K ||
      z[54] !== ei?.editing ||
      z[55] !== U
        ? ((v = () => {
            if (null == en) return
            let e = () => $(U ?? en.sourceImageId)
            K.get(re, eI)?.dirty ? eE(e) : (ei?.editing && r_(K, G, eh), e())
          }),
          (z[47] = $),
          (z[48] = en),
          (z[49] = G),
          (z[50] = eI),
          (z[51] = eE),
          (z[52] = eh),
          (z[53] = K),
          (z[54] = ei?.editing),
          (z[55] = U),
          (z[56] = v))
        : (v = z[56])
      let e_ = v,
        eA = el || eo || ea || es
      z[57] !== $ ||
      z[58] !== en ||
      z[59] !== G ||
      z[60] !== eI ||
      z[61] !== eA ||
      z[62] !== eh ||
      z[63] !== K ||
      z[64] !== U
        ? ((b = (e) => {
            let t = void 0 === e ? document.activeElement : e
            ;(0, eK.J7)(
              K.get(re, eI)?.dirty === !0 || K.get(nJ, eh),
              (e, t) => {
                let n
                ;("string" != typeof (n = K.get(nX, t)) && n.abort(),
                  (0, d.Y)(K, () => {
                    let e = [...K.get(nW, t)].filter(([, e]) => null != e.sent || !0 === e.resolved)
                    ;(K.set(nW, t, new Map(e)),
                      K.set(nY, t, ""),
                      K.set(nZ, t, new Map()),
                      K.set(nX, t, "idle"),
                      n8.setDraft(K, [t], void 0))
                  }))
                let i = K.get(re, e)
                ;((i?.editing || i?.dirty) && r_(K, e, t), eA && null != en && $(U ?? en.sourceImageId))
              },
              (e) => Z({ kind: "discard", operationId: G, complete: e, returnFocusTo: t }),
              eI,
              eh,
            )
          }),
          (z[57] = $),
          (z[58] = en),
          (z[59] = G),
          (z[60] = eI),
          (z[61] = eA),
          (z[62] = eh),
          (z[63] = K),
          (z[64] = U),
          (z[65] = b))
        : (b = z[65])
      let ek = b
      ;(z[66] !== ea || z[67] !== es || z[68] !== en || z[69] !== ei
        ? (es
            ? (w = (0, i.jsx)(m.A, {
                id: "imageTextEditing.noEditableText",
                defaultMessage: "No editable text found",
                description: "The prepared image does not contain any text that can be edited directly",
              }))
            : ea && null != en
              ? (w = (0, i.jsx)(at, { operation: en }))
              : ei?.renderError == null ||
                ["glyphs", "geometry", "size"].includes(ei.renderError.code) ||
                (w = (0, i.jsx)(m.A, {
                  id: "imageTextEditing.previewUnavailable",
                  defaultMessage: "Couldn’t load the editable preview",
                  description: "Blocking error when the editable image cannot be rendered",
                })),
          (z[66] = ea),
          (z[67] = es),
          (z[68] = en),
          (z[69] = ei),
          (z[70] = w))
        : (w = z[70]),
        z[71] !== en
          ? ((I =
              null != en && "preparation" === (t = en).kind && ("failed" === t.status || "unavailable" === t.status)),
            (z[71] = en),
            (z[72] = I))
          : (I = z[72]))
      let eP = I,
        eR = ea && en?.kind === "snapshot" && null == en.documentId && eg?.dirty === !0 && null != en.parentOperationId,
        eN = !eo && null == w && ei?.renderError == null,
        ez = ei?.submittedPreviewUrl ?? (F || ei?.assets?.previewUrl),
        eD = eS || en?.kind === "snapshot" || (eN && ei?.renderedPreview == null) ? ez : void 0
      z[73] !== e_ ||
      z[74] !== eR ||
      z[75] !== w ||
      z[76] !== ea ||
      z[77] !== eP ||
      z[78] !== es ||
      z[79] !== $ ||
      z[80] !== en ||
      z[81] !== G ||
      z[82] !== K ||
      z[83] !== ei?.renderError
        ? ((M =
            null != w
              ? (0, i.jsxs)("div", {
                  className: "flex flex-wrap items-center justify-center gap-2",
                  children: [
                    en?.status === "uncertain"
                      ? (0, i.jsx)(y.z, {
                          size: "medium",
                          radius: "full",
                          color: "primary",
                          to: "/library",
                          children: (0, i.jsx)(m.A, {
                            id: "imageTextEditing.checkLibrary",
                            defaultMessage: "Check Library",
                            description:
                              "Open Library to check whether an image save with an unknown outcome completed",
                          }),
                        })
                      : null,
                    eR
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(y.$, {
                              color: "secondary",
                              size: "medium",
                              radius: "full",
                              onClick: () => {
                                null != en.parentOperationId && (rE(K, en.parentOperationId), $(en.parentOperationId))
                              },
                              children: (0, i.jsx)(m.A, {
                                id: "imageTextEditing.returnToEditing",
                                defaultMessage: "Return to editing",
                                description:
                                  "Return to the retained unsaved text draft after a failed or unresolved image save",
                              }),
                            }),
                            "uncertain" === en.status
                              ? (0, i.jsx)(y.$, {
                                  size: "medium",
                                  radius: "full",
                                  color: "secondary",
                                  onClick: () => {
                                    null != en.parentOperationId &&
                                      Z({ kind: "copy", operationId: G, sourceId: en.parentOperationId })
                                  },
                                  children: (0, i.jsx)(m.A, {
                                    id: "imageTextEditing.saveAnotherCopy",
                                    defaultMessage: "Save another copy",
                                    description:
                                      "Explicitly save a new image despite the unknown outcome of an earlier save",
                                  }),
                                })
                              : null,
                            "uncertain" !== en.status && ("rejected" !== en.failure || 429 === en.rejectionStatus)
                              ? (0, i.jsx)(y.$, {
                                  size: "medium",
                                  radius: "full",
                                  color: "primary",
                                  onClick: () => {
                                    var e
                                    let t,
                                      n =
                                        ((e = ti.Tc),
                                        (t = K.get(rC, G)),
                                        t?.kind !== "snapshot" ||
                                        "failed" !== t.status ||
                                        null != t.documentId ||
                                        null == t.parentOperationId
                                          ? null
                                          : rP(K, t.parentOperationId, e, !1, t.galleryId, G))
                                    null != n && $(n)
                                  },
                                  children: (0, i.jsx)(m.A, {
                                    id: "imageTextEditing.retrySave",
                                    defaultMessage: "Retry save",
                                    description: "Retry a known failed image save using the retained text draft",
                                  }),
                                })
                              : null,
                          ],
                        })
                      : null,
                    !eR &&
                      (0, i.jsx)(y.$, {
                        color: "secondary",
                        size: "medium",
                        radius: "full",
                        onClick: e_,
                        children:
                          es || en?.status === "unavailable" || en?.kind === "snapshot"
                            ? (0, i.jsx)(m.A, {
                                id: "imageTextEditing.backToImage",
                                defaultMessage: "Back to image",
                                description:
                                  "Return to the image after an empty extraction or unavailable editable version",
                              })
                            : (0, i.jsx)(m.A, {
                                id: "imageTextEditing.backToOriginal",
                                defaultMessage: "Back to original",
                                description: "Returns to the source image without cancelling text preparation",
                              }),
                      }),
                    !es &&
                    ((ea && en?.documentId != null && "assets" === en.failure) ||
                      (!ea && ei?.renderError != null) ||
                      (ea && en?.kind === "snapshot" && null != en.documentId))
                      ? (0, i.jsx)(y.$, {
                          size: "medium",
                          radius: "full",
                          color: "primary",
                          onClick: () => rA(K, G),
                          children: (0, i.jsx)(m.A, {
                            id: "imageTextEditing.retrySavedPreview",
                            defaultMessage: "Retry loading",
                            description: "Retry loading the saved image without creating another snapshot",
                          }),
                        })
                      : null,
                    eP && ("assets" !== en.failure || null == en.documentId) && "unavailable" !== en.status
                      ? (0, i.jsx)(y.$, {
                          color: "primary",
                          size: "medium",
                          radius: "full",
                          onClick: () => rA(K, G),
                          children: (0, i.jsx)(m.A, {
                            id: "imageTextEditing.retryPreparation",
                            defaultMessage: "Try again",
                            description: "Retries preparing or loading the editable text document",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
          (z[73] = e_),
          (z[74] = eR),
          (z[75] = w),
          (z[76] = ea),
          (z[77] = eP),
          (z[78] = es),
          (z[79] = $),
          (z[80] = en),
          (z[81] = G),
          (z[82] = K),
          (z[83] = ei?.renderError),
          (z[84] = M))
        : (M = z[84])
      let eG = M
      z[85] !== eG || z[86] !== w || z[87] !== es || z[88] !== en?.status
        ? ((j =
            null == w
              ? null
              : (0, i.jsx)("div", {
                  className: "pointer-events-none absolute inset-0 flex overflow-auto",
                  children: (0, i.jsx)(e$.i, {
                    width: en?.status === "uncertain" ? "wide" : "compact",
                    className: "pointer-events-auto m-auto",
                    icon: (0, i.jsx)("span", {
                      className: es || en?.status === "uncertain" ? "text-secondary" : "text-danger",
                      children: (0, i.jsx)(ee.I, { asset: eL }),
                    }),
                    title: (0, i.jsx)("span", { role: es ? "status" : "alert", children: w }),
                    actions: (0, i.jsx)("div", { className: "pointer-events-auto", children: eG }),
                  }),
                })),
          (z[85] = eG),
          (z[86] = w),
          (z[87] = es),
          (z[88] = en?.status),
          (z[89] = j))
        : (j = z[89])
      let eq = j
      if (
        z[90] !== ed ||
        z[91] !== e_ ||
        z[92] !== ek ||
        z[93] !== H ||
        z[94] !== W ||
        z[95] !== eN ||
        z[96] !== w ||
        z[97] !== eS ||
        z[98] !== O ||
        z[99] !== ef ||
        z[100] !== Q ||
        z[101] !== eT ||
        z[102] !== $ ||
        z[103] !== en ||
        z[104] !== G ||
        z[105] !== q ||
        z[106] !== ew ||
        z[107] !== ez ||
        z[108] !== eD ||
        z[109] !== J ||
        z[110] !== eq ||
        z[111] !== eE ||
        z[112] !== eA ||
        z[113] !== eh ||
        z[114] !== ev ||
        z[115] !== eo ||
        z[116] !== K ||
        z[117] !== ei?.assets?.previewUrl ||
        z[118] !== ei?.canRedo ||
        z[119] !== ei?.canUndo ||
        z[120] !== ei?.dirty ||
        z[121] !== ei?.editing ||
        z[122] !== ei?.renderError ||
        z[123] !== ei?.renderedPreview ||
        z[124] !== ei?.rendering ||
        z[125] !== ei?.selectedTextId ||
        z[126] !== ei?.submittedPreviewUrl ||
        z[127] !== er
      ) {
        let e, t
        C = ed
          ? {
              recovery: eq,
              loadingPreview: eN ? (0, i.jsx)(nC, { preparing: eS, previewSrc: ez }) : void 0,
              propertiesPanel: (0, i.jsx)("div", { className: "contents", ref: et }),
              requestClose: eE,
              onClearSelection: Q,
              onCancel: eA ? e_ : ek,
              renderOverlay: (e, t, n) =>
                null != eq
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: "pointer-events-none absolute bg-surface/80",
                          style: e.imageRect,
                        }),
                        eq,
                      ],
                    })
                  : (0, i.jsx)(
                      iZ,
                      {
                        ref: X,
                        reviewKey: eh,
                        propertiesPanelContainer: J,
                        source: er,
                        rendering: ei?.rendering ?? !1,
                        renderError: ei?.renderError ?? null,
                        renderedPreview: ei?.renderedPreview ?? null,
                        viewport: e,
                        sourcePreview: eD,
                        preparing: eS,
                        reconnecting: en?.reconnecting,
                        saving: eo,
                        dirty: ei?.dirty ?? !1,
                        onSave: eT,
                        onCancel: ek,
                        error: w,
                        selectedId: ei?.selectedTextId ?? null,
                        onSelect: (e) => {
                          K.set(re, G, (t) =>
                            t?.editing && t.selectedTextId !== e && (null == e || t.items.some((t) => t.id === e))
                              ? { ...t, selectedTextId: e }
                              : t,
                          )
                        },
                        onChange: (e, t) =>
                          (function (e, t, n, i) {
                            let r = e.get(re, t),
                              a = e.get(rI, t)
                            if (!r?.editing || null == a.history) return
                            let l = (0, nE.Lk)(a.history, n, i)
                            l !== a.history && ((a.history = l), rH(e, t))
                          })(K, G, e, t),
                        onEndHistoryGroup: () => {
                          let e
                          null != (e = K.get(rI, G)).history && (e.history = { ...e.history, group: null })
                        },
                        canUndo: ei?.canUndo ?? !1,
                        canRedo: ei?.canRedo ?? !1,
                        onUndo: () => {
                          let e
                          null != (e = K.get(rI, G)).history &&
                            K.get(re, G)?.editing &&
                            ((e.history = (0, nE._i)(e.history)), rH(K, G))
                        },
                        onRedo: () => {
                          let e
                          null != (e = K.get(rI, G)).history &&
                            K.get(re, G)?.editing &&
                            ((e.history = (0, nE.yz)(e.history)), rH(K, G))
                        },
                        onRetry: en?.status === "uncertain" ? void 0 : () => rA(K, G),
                        renderToolbar: n,
                      },
                      eh,
                    ),
            }
          : void 0
        let n = ed || ef
        z[133] !== ek ||
        z[134] !== O ||
        z[135] !== $ ||
        z[136] !== en ||
        z[137] !== G ||
        z[138] !== ew ||
        z[139] !== eh ||
        z[140] !== K ||
        z[141] !== ei?.dirty ||
        z[142] !== ei?.editing ||
        z[143] !== n ||
        z[144] !== er
          ? ((e = n
              ? (e) => {
                  let { submit: t, separatePane: n, includePixels: r, composerRef: a } = e
                  return (0, i.jsx)(r4, {
                    reviewKey: eh,
                    ref: a,
                    presentation$: ew,
                    onSubmitImageEdit: t,
                    onRemoveImage: n ? ek : void 0,
                    onToggleList: (e) => {
                      null != en &&
                        (ei?.editing || rE(K, en.id),
                        K.set(n0, eh, null),
                        K.set(n2, eh, ei?.editing && K.get(n2, eh) === e ? null : e))
                    },
                    prepareInput: async () => {
                      let e
                      if (null == en || null == er) return null
                      let t = en,
                        n = er.snapshot.reference.image_asset_pointer
                      if (ei?.dirty) {
                        let i = rk(
                          K,
                          G,
                          async (t) => {
                            let n = await (0, ti.Tc)(t)
                            return (r && (e = n), n)
                          },
                          !1,
                          O,
                        )
                        if (null == i) return null
                        $(i)
                        let a = await (async function (e, t) {
                          let n = (await e.get(rI, t).publication?.result) ?? e.get(re, t)?.snapshot?.reference,
                            i = e.get(rC, t)
                          return i?.kind === "snapshot" &&
                            null != n &&
                            i.documentId === n.document_id &&
                            null != i.imageFileId
                            ? { operation: i, reference: n }
                            : null
                        })(K, i)
                        if (null == a) return null
                        ;((t = a.operation), (n = a.reference.image_asset_pointer))
                      } else if (r) {
                        let t = await (0, eH.M2)(er.assets.previewUrl)
                        if (null == t) return null
                        e = t.blob
                      }
                      return null == t.imageFileId || null == K.get(rC, t.id)
                        ? null
                        : {
                            reviewKey: ia(t, O),
                            source: {
                              operationId: t.id,
                              pixels: e,
                              attachment: {
                                id: t.imageFileId,
                                name: "edited-image.png",
                                mimeType: "image/png",
                                imageReference: !0,
                                size: n.size_bytes,
                                width: n.width,
                                height: n.height,
                              },
                            },
                          }
                    },
                  })
                }
              : void 0),
            (z[133] = ek),
            (z[134] = O),
            (z[135] = $),
            (z[136] = en),
            (z[137] = G),
            (z[138] = ew),
            (z[139] = eh),
            (z[140] = K),
            (z[141] = ei?.dirty),
            (z[142] = ei?.editing),
            (z[143] = n),
            (z[144] = er),
            (z[145] = e))
          : (e = z[145])
        let r = e
        ;((E = eM),
          (S = "relative h-full min-h-0 w-full"),
          z[146] !== W || z[147] !== q
            ? ((T = null != W && (0, i.jsx)(rW, { ownerId: q })), (z[146] = W), (z[147] = q), (z[148] = T))
            : (T = z[148]),
          z[149] !== ed || z[150] !== ef || z[151] !== G || z[152] !== ev
            ? ((t =
                ev !== G || ed || ef
                  ? void 0
                  : (0, i.jsx)("span", {
                      role: "status",
                      className: "px-2 text-sm text-secondary",
                      children: (0, i.jsx)(m.A, {
                        id: "imageTextEditing.saved",
                        defaultMessage: "Saved",
                        description: "Brief confirmation in the image toolbar when a text-edited copy has been saved",
                      }),
                    })),
              (z[149] = ed),
              (z[150] = ef),
              (z[151] = G),
              (z[152] = ev),
              (z[153] = t))
            : (t = z[153]),
          (_ = H(C, ei?.submittedPreviewUrl ?? ei?.assets?.previewUrl, r, t)),
          (z[90] = ed),
          (z[91] = e_),
          (z[92] = ek),
          (z[93] = H),
          (z[94] = W),
          (z[95] = eN),
          (z[96] = w),
          (z[97] = eS),
          (z[98] = O),
          (z[99] = ef),
          (z[100] = Q),
          (z[101] = eT),
          (z[102] = $),
          (z[103] = en),
          (z[104] = G),
          (z[105] = q),
          (z[106] = ew),
          (z[107] = ez),
          (z[108] = eD),
          (z[109] = J),
          (z[110] = eq),
          (z[111] = eE),
          (z[112] = eA),
          (z[113] = eh),
          (z[114] = ev),
          (z[115] = eo),
          (z[116] = K),
          (z[117] = ei?.assets?.previewUrl),
          (z[118] = ei?.canRedo),
          (z[119] = ei?.canUndo),
          (z[120] = ei?.dirty),
          (z[121] = ei?.editing),
          (z[122] = ei?.renderError),
          (z[123] = ei?.renderedPreview),
          (z[124] = ei?.rendering),
          (z[125] = ei?.selectedTextId),
          (z[126] = ei?.submittedPreviewUrl),
          (z[127] = er),
          (z[128] = C),
          (z[129] = E),
          (z[130] = S),
          (z[131] = T),
          (z[132] = _))
      } else ((C = z[128]), (E = z[129]), (S = z[130]), (T = z[131]), (_ = z[132]))
      return (
        z[154] !== G || z[155] !== C || z[156] !== B
          ? ((A = null != C && null != B ? (0, i.jsx)(ae, { tabId: B, requestClose: C.requestClose }, G) : null),
            (z[154] = G),
            (z[155] = C),
            (z[156] = B),
            (z[157] = A))
          : (A = z[157]),
        z[158] !== eC || z[159] !== O || z[160] !== $ || z[161] !== K
          ? ((k =
              eC?.kind === "copy"
                ? (0, i.jsx)(eY, {
                    kind: "copy",
                    onCancel: () => Z(null),
                    onConfirm: () => {
                      let e = rk(K, eC.sourceId, ti.Tc, !0, O)
                      ;(Z(null), null != e && $(e))
                    },
                  })
                : null),
            (z[158] = eC),
            (z[159] = O),
            (z[160] = $),
            (z[161] = K),
            (z[162] = k))
          : (k = z[162]),
        z[163] !== eC || z[164] !== eI || z[165] !== eh
          ? ((P =
              eC?.kind === "discard"
                ? (0, i.jsx)(eY, {
                    kind: "discard",
                    returnFocusTo: eC.returnFocusTo,
                    onCancel: () => {
                      ;(eC.cancel?.(), Z(null))
                    },
                    onConfirm: () => {
                      let e = eC.complete
                      ;(Z(null), e(eI, eh))
                    },
                  })
                : null),
            (z[163] = eC),
            (z[164] = eI),
            (z[165] = eh),
            (z[166] = P))
          : (P = z[166]),
        z[167] !== E || z[168] !== S || z[169] !== T || z[170] !== _ || z[171] !== A || z[172] !== k || z[173] !== P
          ? ((N = (0, i.jsxs)("div", { ref: E, className: S, children: [T, _, A, k, P] })),
            (z[167] = E),
            (z[168] = S),
            (z[169] = T),
            (z[170] = _),
            (z[171] = A),
            (z[172] = k),
            (z[173] = P),
            (z[174] = N))
          : (N = z[174]),
        N
      )
    }
    function r8(e) {
      let t,
        n,
        a = (0, r.c)(5),
        { operationId: l } = e,
        o = (0, d.gh)(ej.u)
      a[0] !== l || a[1] !== o
        ? ((t = (e) => {
            let t
            if (null == e) return
            let n = new IntersectionObserver((e) => {
              let [n] = e
              ;(t?.(), (t = n?.isIntersecting ? rS(o, l) : void 0))
            })
            return (
              n.observe(e),
              () => {
                ;(n.disconnect(), t?.())
              }
            )
          }),
          (a[0] = l),
          (a[1] = o),
          (a[2] = t))
        : (t = a[2])
      let s = (0, R.K)(t)
      return (
        a[3] !== s
          ? ((n = (0, i.jsx)("span", { ref: s, className: "pointer-events-none absolute inset-0", "aria-hidden": !0 })),
            (a[3] = s),
            (a[4] = n))
          : (n = a[4]),
        n
      )
    }
    function r7(e) {
      let t,
        n,
        a,
        l,
        s,
        c = (0, r.c)(28),
        { operationId: u, artworkOpacity: g, children: h } = e,
        f = (0, d._U)(rC, u),
        p = (0, d._U)(re, u),
        x =
          f?.kind === "preparation" && ("starting" === f.status || "preparing" === f.status || "loading" === f.status),
        v = f?.status === "saving" || (f?.kind === "snapshot" && "loading" === f.status),
        y = f?.status === "failed" || f?.status === "unavailable" || f?.status === "uncertain",
        b = f?.documentId == null ? void 0 : f.version
      if (y && null != f) {
        let e,
          n,
          r,
          a,
          l = null != b && "pb-3"
        c[0] !== l
          ? ((e = (0, o.A)("pointer-events-none absolute inset-0 grid place-items-center bg-surface/80", l)),
            (c[0] = l),
            (c[1] = e))
          : (e = c[1])
        let s = "uncertain" === f.status ? "text-secondary" : "text-danger"
        ;(c[2] !== s ? ((n = (0, i.jsx)(w.dGN, { className: s })), (c[2] = s), (c[3] = n)) : (n = c[3]),
          c[4] !== f
            ? ((r = (0, i.jsx)("span", {
                role: "status",
                className: "sr-only",
                children: (0, i.jsx)(at, { operation: f }),
              })),
              (c[4] = f),
              (c[5] = r))
            : (r = c[5]),
          c[6] !== e || c[7] !== n || c[8] !== r
            ? ((a = (0, i.jsxs)("span", { className: e, children: [n, r] })),
              (c[6] = e),
              (c[7] = n),
              (c[8] = r),
              (c[9] = a))
            : (a = c[9]),
          (t = a))
      } else if (v && f?.documentId == null) {
        let e, n
        ;(c[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(w.QC9, { "aria-hidden": !0 })), (c[10] = e))
          : (e = c[10]),
          c[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsxs)("span", {
                className: "absolute end-1 bottom-1 rounded-full bg-surface p-0.5 text-secondary shadow-sm",
                children: [
                  e,
                  (0, i.jsx)("span", {
                    role: "status",
                    className: "sr-only",
                    children: (0, i.jsx)(m.A, {
                      id: "imageTextEditing.savingThumbnail",
                      defaultMessage: "Saving image",
                      description: "Accessible status of a thumbnail while saving image text edits",
                    }),
                  }),
                ],
              })),
              (c[11] = n))
            : (n = c[11]),
          (t = n))
      }
      let I = f?.kind === "snapshot" && (v || y),
        M = h
      if (x) {
        let e
        ;(c[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(ef.o, { presentation: "thumbnail" })), (c[12] = e))
          : (e = c[12]),
          (M = e))
      } else if (I && p?.submittedPreviewUrl != null) {
        let e
        ;(c[13] !== p.submittedPreviewUrl
          ? ((e = (0, i.jsx)("img", { src: p.submittedPreviewUrl, alt: "", className: "size-full object-cover" })),
            (c[13] = p.submittedPreviewUrl),
            (c[14] = e))
          : (e = c[14]),
          (M = e))
      } else if (I && p?.renderedPreview != null) {
        let e
        ;(c[15] !== p.renderedPreview
          ? ((e = (0, i.jsx)(i4, { image: p.renderedPreview, thumbnail: !0 })),
            (c[15] = p.renderedPreview),
            (c[16] = e))
          : (e = c[16]),
          (M = e))
      }
      return (
        c[17] !== g ? ((n = { opacity: g }), (c[17] = g), (c[18] = n)) : (n = c[18]),
        c[19] !== n || c[20] !== M
          ? ((a = (0, i.jsx)("span", {
              className: "relative flex size-full items-center justify-center transition-opacity duration-120",
              style: n,
              children: M,
            })),
            (c[19] = n),
            (c[20] = M),
            (c[21] = a))
          : (a = c[21]),
        c[22] !== b
          ? ((l =
              null != b &&
              (0, i.jsx)("span", {
                className:
                  "pointer-events-none absolute end-0.75 bottom-0.75 inline-flex h-4.5 items-center justify-center rounded-full bg-media-scrim/80 px-1.5 text-unread-badge text-media-foreground tabular-nums select-none",
                children: (0, i.jsx)(m.A, {
                  id: "imageTextEditing.versionBadge",
                  defaultMessage: "v{version, number}",
                  description: "Saved version number on a text-editable image thumbnail",
                  values: { version: b },
                }),
              })),
            (c[22] = b),
            (c[23] = l))
          : (l = c[23]),
        c[24] !== t || c[25] !== a || c[26] !== l
          ? ((s = (0, i.jsxs)("span", {
              className: "relative flex size-full items-center justify-center overflow-hidden",
              children: [a, t, l],
            })),
            (c[24] = t),
            (c[25] = a),
            (c[26] = l),
            (c[27] = s))
          : (s = c[27]),
        s
      )
    }
    function ae(e) {
      let t,
        n,
        i = (0, r.c)(9),
        { tabId: a, requestClose: l } = e,
        o = (0, d.gh)(eV.GD),
        s = (0, d._U)(eG.My, a),
        u = (0, c.useEffectEvent)(l)
      return (
        i[0] !== u || i[1] !== o || i[2] !== a || i[3] !== s
          ? ((t = () => {
              let e
              if (null == s) return
              let t = (0, eG.getThreadPanelTabController)(s),
                n = o.get(t.tabById$, a)?.onBeforeClose,
                i = (t) => {
                  if (null != e) return e.promise
                  let i = (0, eD.udX)()
                  e = i
                  let r = (t) => {
                    e === i && ((e = void 0), i.resolve(t))
                  }
                  return (
                    !(async function () {
                      try {
                        ;(await (n?.(t) ?? !0))
                          ? e === i &&
                            u(
                              () => r(!0),
                              () => r(!1),
                            )
                          : r(!1)
                      } catch {
                        r(!1)
                      }
                    })(),
                    i.promise
                  )
                }
              return (
                t.updateTab(o, a, { onBeforeClose: i }),
                () => {
                  ;(e?.resolve(!1), (e = void 0))
                  let t = (0, eG.KE)(o, a)
                  if (null != t) {
                    let e = (0, eG.getThreadPanelTabController)(t)
                    o.get(e.tabById$, a)?.onBeforeClose === i && e.updateTab(o, a, { onBeforeClose: n })
                  }
                }
              )
            }),
            (i[0] = u),
            (i[1] = o),
            (i[2] = a),
            (i[3] = s),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== o || i[6] !== a || i[7] !== s
          ? ((n = [o, a, s]), (i[5] = o), (i[6] = a), (i[7] = s), (i[8] = n))
          : (n = i[8]),
        (0, c.useEffect)(t, n),
        null
      )
    }
    function at(e) {
      let t,
        n = (0, r.c)(10),
        { operation: a } = e
      if ("uncertain" === a.status) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.saveUncertain",
                defaultMessage: "Save may have completed",
                description: "A snapshot request lost its response. Another copy must not be created automatically.",
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if ("unavailable" === a.status) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.unavailableDocument",
                defaultMessage: "Text editing is unavailable for this image",
                description: "The saved editable document or extraction job is no longer accessible",
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      if ("preparation" === a.kind && "assets" === a.failure) {
        let e
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "imageTextEditing.previewUnavailable",
                defaultMessage: "Couldn’t load the editable preview",
                description: "Blocking error when the editable image cannot be rendered",
              })),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if ("rejected" === a.failure)
        switch (a.rejectionStatus) {
          case 401:
          case 403: {
            let e
            return (
              n[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(m.A, {
                    id: "imageTextEditing.savePermission",
                    defaultMessage: "You no longer have permission to save this image",
                    description: "The image snapshot was rejected for lack of access",
                  })),
                  (n[3] = e))
                : (e = n[3]),
              e
            )
          }
          case 404:
          case 410: {
            let e
            return (
              n[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(m.A, {
                    id: "imageTextEditing.saveSourceUnavailable",
                    defaultMessage: "The source for this edit is unavailable",
                    description: "The source document could not be found when saving an image",
                  })),
                  (n[4] = e))
                : (e = n[4]),
              e
            )
          }
          case 429: {
            let e
            return (
              n[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(m.A, {
                    id: "imageTextEditing.saveRateLimited",
                    defaultMessage: "Too many save requests. Try again in a moment",
                    description: "The service has asked the user to wait before saving again",
                  })),
                  (n[5] = e))
                : (e = n[5]),
              e
            )
          }
          default: {
            let e
            return (
              n[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(m.A, {
                    id: "imageTextEditing.saveRejected",
                    defaultMessage: "Couldn’t save these changes. Return to editing to revise them",
                    description: "The service rejected the submitted text edits",
                  })),
                  (n[6] = e))
                : (e = n[6]),
              e
            )
          }
        }
      if ("snapshot" === a.kind) {
        let e
        return (
          n[7] !== a.documentId
            ? ((e =
                null != a.documentId
                  ? (0, i.jsx)(m.A, {
                      id: "imageTextEditing.savedPreviewUnavailable",
                      defaultMessage: "Saved; preview unavailable",
                      description: "The text-edited image was saved successfully but its preview could not be loaded",
                    })
                  : (0, i.jsx)(m.A, {
                      id: "imageTextEditing.saveFailed",
                      defaultMessage: "Couldn’t save this image",
                      description: "A text-edited image could not be saved",
                    })),
              (n[7] = a.documentId),
              (n[8] = e))
            : (e = n[8]),
          e
        )
      }
      return (
        n[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(m.A, {
              id: "imageTextEditing.extractionFailed",
              defaultMessage: "Something went wrong",
              description: "Error message shown when extracting editable text from an image fails",
            })),
            (n[9] = t))
          : (t = n[9]),
        t
      )
    }
    var an = n("Ydmo")
    let ai = (0, k.m3)("has-dismissed-image-canvas-view-coachmark-v1", !1)
    function ar(e) {
      let t,
        n,
        l,
        s,
        y,
        b,
        w,
        A,
        k,
        P,
        z,
        D,
        O,
        B,
        U,
        F,
        $,
        H,
        K,
        V,
        q,
        W,
        Z,
        X,
        Q,
        J,
        ee,
        et,
        en,
        ei,
        er,
        ea,
        el,
        eo,
        es,
        ed,
        ec,
        eu,
        eg,
        em = (0, r.c)(203),
        {
          conversationId: eh,
          fallbackImage: ef,
          historicalGeneratedImageGroups: ep,
          historyPagination: ev,
          imageAssetResolver: ey,
          initialImageId: eb,
          initialPlaygroundTool: ew,
          liveTailGeneratedImageGroup: eI,
          loadingPreviewSrc: eM,
          onActiveImageChange: ej,
          onGeneratedImageSelection: eC,
          onViewChange: eS,
          optimisticImageEditMessageId: eR,
          optimisticImageEditStartedAtMs: eL,
          view: eD,
        } = e,
        eO = (0, d.gh)(_.PR),
        eB = (0, g.A)(),
        eU = (0, d.Ul)(rj),
        eF = (0, d.Ul)(!ef.readOnly && rM),
        e$ = (0, d.Ul)(!!eF && h.Nk),
        eH = (0, c.useRef)(null),
        eK = ef.editStateRef ?? eH,
        eV = (0, d.Ul)(v.pH),
        eG = (0, d.Ul)(an.Nu),
        eq = (null != eV && eV === ef.tabId) || (null != eG && eG === ef.tabId),
        eW = (0, d.Ul)(E.t),
        eY = "overlay" === ef.presentation,
        eZ = eY || (eW && null != ef.tabId),
        eX = (0, d.Ul)(p.kF),
        eQ = (0, M.I)()
      em[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (em[0] = t)) : (t = em[0])
      let eJ = (0, c.useRef)(t),
        e1 = (0, x.dz)()
      em[1] !== eb ? ((n = { id: eb }), (em[1] = eb), (em[2] = n)) : (n = em[2])
      let [e0, e2] = (0, c.useState)(n),
        [e3, e4] = (0, c.useState)(null),
        e6 = (0, c.useId)(),
        e5 = ef.viewerId ?? e6
      em[3] !== ef.attachmentSrc || em[4] !== ef.imageId || em[5] !== eb
        ? ((l = () => `image:${ez(ef.attachmentSrc) ?? ef.imageId ?? eb}`),
          (em[3] = ef.attachmentSrc),
          (em[4] = ef.imageId),
          (em[5] = eb),
          (em[6] = l))
        : (l = em[6])
      let [e9] = (0, c.useState)(l),
        e8 =
          eh ??
          ef.chatGptConversationId ??
          ("chatgpt" === eO.value.kind ? eO.value.conversationId : null) ??
          eU.find((e) => e.id === eb)?.galleryId ??
          e9,
        e7 = (0, d._U)(j.lF, e5),
        [te, tt] = (0, c.useState)(eI?.id),
        [tn, ti] = (0, c.useState)(null),
        [tr, ta] = (0, c.useState)(100),
        [tl, to] = (0, c.useState)(ef.zoom?.manualZoomPercent ?? null),
        [ts, td] = (0, c.useState)(!1),
        [tc, tu] = (0, c.useState)(null),
        [tg, tm] = (0, c.useState)(null),
        [th, tf] = (0, c.useState)(null),
        [tp, tx] = (0, c.useState)(eQ),
        [tv, ty] = (0, c.useState)(null),
        [tb, tw] = (0, c.useState)(null),
        tI = (0, d.Ul)(ai),
        [tM, tj] = (0, c.useState)(!1),
        tC = (0, c.useRef)(!1),
        [tE, tS] = (0, c.useState)(null),
        tT = (0, c.useRef)(null),
        t_ = (0, c.useRef)(eb),
        tA = (0, c.useRef)(null),
        [tk, tP] = (0, c.useState)(null),
        tR = null == tk || e0.id === tk,
        tN = null == eR ? null : "optimistic-image-edit:" + eR,
        tz =
          null != tN
            ? { id: tN, turnStartedAtMs: null, images: [{ id: tN, loading: !0, generationStartedAtMs: eL }] }
            : null,
        tL = [...ep, ...(null == eI ? [] : [eI]), ...(null == tz ? [] : [tz])],
        tD = tL.flatMap(ah),
        [tO, tB] = (0, c.useState)(() => ({
          groups: ep,
          liveTailGroup: eI,
          images: tD,
          pendingIds: new Set(),
          stagedIds: new Set(),
        }))
      if (tO.groups !== ep || tO.liveTailGroup !== eI) {
        let e = tO.liveTailGroup?.id ?? tO.groups.at(-1)?.id,
          t = eI?.id ?? ep.at(-1)?.id
        null != tk && e !== t && tP(null)
        let n = new Set(tO.images.map(am)),
          i = tD.findLastIndex((e) => n.has(e.id)),
          r = new Set(),
          a = new Set()
        for (let [e, t] of tD.entries()) {
          if (t.loading) continue
          let l = e < i && !n.has(t.id)
          ;((l || tO.pendingIds.has(t.id)) && r.add(t.id), (l || tO.stagedIds.has(t.id)) && a.add(t.id))
        }
        tB({ groups: ep, liveTailGroup: eI, images: tD, pendingIds: r, stagedIds: r.size > 0 ? a : new Set() })
      }
      em[7] !== ev || em[8] !== tO.pendingIds.size
        ? ((s =
            0 === tO.pendingIds.size
              ? ev
              : {
                  hasMore: ev?.hasMore ?? !1,
                  isLoading: !0,
                  hasError: ev?.hasError ?? !1,
                  onLoadMore: () => ev?.onLoadMore(),
                }),
          (em[7] = ev),
          (em[8] = tO.pendingIds.size),
          (em[9] = s))
        : (s = em[9])
      let tU = s,
        tF = tD.filter((e) => !e.loading && tO.stagedIds.has(e.id)),
        t$ = (function (e, t, n, i) {
          let r = e.map((e) => ({
            ...e,
            images: e.images.map((e) =>
              e.loading || null == e.textEditingOperationId || t.some((t) => t.id === e.textEditingOperationId)
                ? e
                : eN()(e, [
                    "textEditingOperationId",
                    "textEditingSourceImageId",
                    "textEditingConversationImageId",
                    "textEditingOriginalImageId",
                    "textEditingStatus",
                    "textEditingVersion",
                  ]),
            ),
          }))
          for (let e of t) {
            var a
            let t = (t) => t.id === e.sourceImageId || (!t.loading && ez(t.src) === e.sourceFileId),
              l = r.find((t) => t.images.some((t) => t.id === e.sourceImageId)) ?? r.find((e) => e.images.some(t)),
              o = l?.images.findIndex((t) => t.id === e.sourceImageId),
              s = null != o && o >= 0 ? o : l?.images.findIndex(t),
              d = null == s ? void 0 : l?.images[s]
            if (e.galleryId !== n && null == l && null == e.imageFileId) continue
            let c = null == e.documentId ? void 0 : e.imageFileId,
              u = null == c ? void 0 : r.find((e) => e.images.some((e) => !e.loading && ez(e.src) === c)),
              g = u?.images.find((e) => !e.loading && ez(e.src) === c),
              m = null == e.documentId ? void 0 : e.version
            if (null == l || null == d || null == s) {
              null == u ||
                null == g ||
                g.loading ||
                (u.images = u.images.map((t) =>
                  t === g
                    ? {
                        ...g,
                        id: e.id,
                        textEditingOperationId: e.id,
                        textEditingVersion: m,
                        textEditingSourceImageId: e.id,
                        textEditingConversationImageId:
                          g.textEditingConversationImageId ?? g.textEditingOriginalImageId ?? g.id,
                        textEditingOriginalImageId: g.textEditingOriginalImageId ?? g.id,
                        textEditingStatus: "snapshot" === e.kind && "loading" === e.status ? "saving" : e.status,
                        sourceImage: null == g.sourceImage ? void 0 : { ...g.sourceImage, id: e.id },
                      }
                    : t,
                ))
              continue
            }
            if (d.loading) continue
            let h = null != c ? ((a = c).startsWith("file-") ? `file-service://${a}` : `sediment://${a}`) : d.src,
              f = "preparation" === e.kind ? i.editableCopy : i.editedCopy,
              p = {
                ...d,
                id: e.id,
                src: h,
                previewSrc: h,
                alt: f,
                tabTitle: f,
                displayVariants: void 0,
                displayVariantId: void 0,
                hasPanoramaPrompt: !1,
                textEditingOperationId: e.id,
                textEditingVersion: m,
                textEditingSourceImageId: d.id,
                textEditingConversationImageId: d.textEditingConversationImageId ?? d.id,
                textEditingOriginalImageId:
                  null == g || g.loading || g.id === d.id
                    ? void 0
                    : (g.textEditingOriginalImageId ?? (g.id === e.id ? void 0 : g.id)),
                textEditingStatus: "snapshot" === e.kind && "loading" === e.status ? "saving" : e.status,
                sourceImage:
                  null == d.sourceImage
                    ? void 0
                    : {
                        ...d.sourceImage,
                        id: e.id,
                        src: h,
                        previewSrc: h,
                        displayVariants: void 0,
                        displayVariantId: void 0,
                      },
              }
            if (null != c)
              for (let t of r)
                t.images = t.images.filter((t) => t.loading || t.id === d.id || t.id === e.id || ez(t.src) !== c)
            for (let t of r) t !== l && (t.images = t.images.filter((t) => t.id !== e.id))
            let x = l.images.findIndex((t) => t.id === e.id)
            if (x >= 0) l.images[x] = p
            else {
              let e = l.images.findIndex((e) => e.id === d.id)
              l.images.splice(e + 1, 0, p)
            }
          }
          return r.filter((e) => e.images.length > 0)
        })(
          tL.map((e) => ({ ...e, images: e.images.filter((e) => !tO.stagedIds.has(e.id)) })),
          eU,
          e8,
          {
            editableCopy: eB.formatMessage({
              id: "imageTextEditing.editableCopy",
              defaultMessage: "Editable copy",
              description: "Gallery item containing a prepared, editable copy of the source image",
            }),
            editedCopy: eB.formatMessage({
              id: "imageTextEditing.editedCopy",
              defaultMessage: "Edited copy",
              description: "Gallery item containing a new saved version of an image after text editing",
            }),
          },
        ),
        tH = t$.flatMap(ag),
        tK = (e) => tH.find((t) => !t.loading && t.id === e.id) ?? e
      em[10] !== e7
        ? ((y = (e) => ({ ...e, images: e.images.map((e) => (e.loading ? e : (0, j.gK)(e7, e))) })),
          (em[10] = e7),
          (em[11] = y))
        : (y = em[11])
      let tV = t$.map(y),
        tG = tV.flatMap(au),
        tq = tG.filter(ac),
        tW = null != tN && e3?.optimisticImageId === tN ? tz : eI,
        tY = tW?.id === e3?.liveTailGroupId ? tW?.images.slice(e3?.liveTailImageIndex) : tW?.images
      if ((null == e3 || (eY && tY?.length) || e4(null), eR !== tn && (ti(eR), null != tN && tR))) {
        let e = eY ? tq.find((e) => e.id === e0.id) : void 0
        ;(e4(
          null == e
            ? null
            : {
                sourceImage: e,
                optimisticImageId: tN,
                liveTailGroupId: eI?.id,
                liveTailImageIndex: eI?.images.length ?? 0,
              },
        ),
          e2({
            id: tN,
            pendingLiveTailGroupId: eI?.id,
            pendingLiveTailImageIndex: eI?.images.length ?? 0,
            previousImageId: e0.id,
          }),
          to(null))
      }
      if (eI?.id !== te) {
        tt(eI?.id)
        let e = eI?.images.find(ad)
        if (null != eI && null != e && tR && null == tN && null == tn && null == e0.pendingLiveTailImageIndex) {
          let t = eY ? tq.find((e) => e.id === e0.id) : void 0
          ;(e4(
            null == t
              ? null
              : {
                  sourceImage: t,
                  optimisticImageId: null,
                  liveTailGroupId: eI.id,
                  liveTailImageIndex: eI.images.indexOf(e),
                },
          ),
            e2({
              id: e.id,
              pendingLiveTailGroupId: eI.id,
              pendingLiveTailImageIndex: eI.images.indexOf(e),
              previousImageId: e0.id,
            }),
            to(null))
        }
      }
      let tZ = tG.find((e) => e.id === e0.id) ?? tG.find((e) => !e.loading && e.textEditingOriginalImageId === e0.id)
      ;(null == tZ &&
        null != e0.pendingLiveTailImageIndex &&
        null != eI &&
        (tZ = eI.id === e0.pendingLiveTailGroupId ? eI.images[e0.pendingLiveTailImageIndex] : eI.images.at(-1)),
        null == tZ && (tZ = tq.find((e) => e.id === e0.previousImageId) ?? tq.at(-1) ?? tG.at(-1)),
        null == tZ ||
          null == e0.pendingLiveTailImageIndex ||
          (tZ.id === e0.id && tZ.loading) ||
          e2(tZ.loading ? { ...e0, id: tZ.id } : { id: tZ.id }))
      let tX = tV.find((e) => e.images.some((e) => e.id === tZ?.id))
      ;(tX?.images ?? []).filter(as)
      let tQ = tG.length > 1 || tU?.hasMore === !0 || tU?.isLoading === !0 || tU?.hasError === !0,
        tJ = (eY || eX) && tQ,
        t1 = tH.find((e) => e.id === tZ?.id),
        t0 = null == tZ || tZ.loading ? null : tZ.src,
        t2 =
          eF &&
          !e$ &&
          null != tZ &&
          !tZ.loading &&
          (0, G.R)({
            isAnimated: tZ.isAnimated ?? tZ.sourceImage?.isAnimated,
            mimeType: tZ.sourceImage?.chatGptImageMetadata?.mimeType,
          }).canEdit &&
          (null != tZ.textEditingOperationId || null != ez(tZ.src))
            ? tZ
            : null,
        t3 = t2?.textEditingConversationImageId ?? t2?.id,
        t4 = t3 ?? tZ?.id,
        t6 = tJ || (null != t3 && (eY || eX))
      em[12] !== tZ || em[13] !== eY || em[14] !== e3?.sourceImage || em[15] !== tY
        ? ((b = eY && tY?.some((e) => e.id === tZ?.id) ? e3?.sourceImage : void 0),
          (em[12] = tZ),
          (em[13] = eY),
          (em[14] = e3?.sourceImage),
          (em[15] = tY),
          (em[16] = b))
        : (b = em[16])
      let t5 = b
      em[17] !== t0 || em[18] !== t5
        ? ((w = (e) => {
            null != t0 && e.naturalWidth > 0 && (ty(t0), null != t5 && e4(null))
          }),
          (em[17] = t0),
          (em[18] = t5),
          (em[19] = w))
        : (w = em[19])
      let t9 = w,
        t8 = null == tZ || tZ.loading ? "" : tZ.src
      em[20] !== t8 || em[21] !== e5
        ? ((A = { viewerId: e5, assetSrc: t8 }), (em[20] = t8), (em[21] = e5), (em[22] = A))
        : (A = em[22])
      let t7 = (0, d._U)(eA.L0, A),
        ne = !ef.readOnly && null != tZ && !tZ.loading && tZ.id === tc,
        nt = eq || ne || (null != tZ && (t7.hasPendingComment || (tZ.id === tg && null == tk)))
      em[23] !== tZ ||
      em[24] !== e0 ||
      em[25] !== eK.current ||
      em[26] !== nt ||
      em[27] !== eI ||
      em[28] !== ej ||
      em[29] !== tN ||
      em[30] !== tK ||
      em[31] !== t4
        ? ((k = (e) => {
            if (nt || eK.current?.isEditing || null == tZ || e.id === tZ.id) return
            let t = () => {
              ;(e2(
                e.loading && e.id === tN
                  ? {
                      id: e.id,
                      pendingLiveTailGroupId: eI?.id,
                      pendingLiveTailImageIndex: eI?.images.length ?? 0,
                      previousImageId: tZ.loading ? e0.previousImageId : tZ.id,
                    }
                  : { id: e.id },
              ),
                (e.loading || (e.textEditingConversationImageId ?? e.id) !== t4) && to(null),
                e.loading || ((t_.current = e.id), ej?.(tK(e))))
            }
            eK.current?.requestClose != null ? eK.current.requestClose(t) : t()
          }),
          (em[23] = tZ),
          (em[24] = e0),
          (em[25] = eK.current),
          (em[26] = nt),
          (em[27] = eI),
          (em[28] = ej),
          (em[29] = tN),
          (em[30] = tK),
          (em[31] = t4),
          (em[32] = k))
        : (k = em[32])
      let nn = k
      em[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (e) => {
            e2({ id: e })
          }),
          (em[33] = P))
        : (P = em[33])
      let ni = P
      em[34] !== tZ || em[35] !== eO || em[36] !== e8
        ? ((z = () => {
            if (!eO.get(rM) || null == tZ || tZ.loading) return
            if (null != tZ.textEditingOperationId) return void rE(eO, tZ.textEditingOperationId)
            let e = ez(tZ.src)
            null == e ||
              ni(
                (function (e, t) {
                  let n = rB(e)
                  if (null == n || !e.get(rx)) throw ry
                  let i = e.get(rj),
                    r =
                      i.find((e) => null != e.documentId && e.imageFileId === t.sourceFileId) ??
                      i.find((e) =>
                        null != t.documentId
                          ? e.documentId === t.documentId
                          : "preparation" === e.kind && e.sourceFileId === t.sourceFileId,
                      )
                  if (null != r) return (rE(e, r.id), r.id)
                  let a = {
                    ...n,
                    ...t,
                    id: crypto.randomUUID(),
                    kind: "preparation",
                    status: null == t.documentId ? "starting" : "loading",
                    updatedAt: Date.now(),
                  }
                  return (
                    (0, d.Y)(e, () => {
                      ;(rF(e, a),
                        rR(e, a.id),
                        e.set(re, a.id, (e) => (null == e ? e : { ...e, editing: !0 })),
                        rz(e, a.id, !0))
                    }),
                    a.id
                  )
                })(eO, { sourceImageId: tZ.id, sourceFileId: e, galleryId: e8 }),
              )
          }),
          (em[34] = tZ),
          (em[35] = eO),
          (em[36] = e8),
          (em[37] = z))
        : (z = em[37])
      let nr = z,
        na = !eY && null != eh && null != tZ && tp && !tM && !1 === tI
      ;(em[38] !== eO || em[39] !== na || em[40] !== eD
        ? ((D = () => {
            na &&
              "single" === eD &&
              !tC.current &&
              ((tC.current = !0), (0, S.yy)(eO, a.CodexGeneratedImageCanvasViewCoachmarkViewed, {}))
          }),
          (O = [eO, na, eD]),
          (em[38] = eO),
          (em[39] = na),
          (em[40] = eD),
          (em[41] = D),
          (em[42] = O))
        : ((D = em[41]), (O = em[42])),
        (0, c.useEffect)(D, O),
        em[43] !== eQ
          ? ((B = () => {
              let e = window.setTimeout(
                () => {
                  tx(!0)
                },
                eQ ? 0 : 1e3 * f.m9.duration,
              )
              return () => {
                window.clearTimeout(e)
              }
            }),
            (U = [eQ]),
            (em[43] = eQ),
            (em[44] = B),
            (em[45] = U))
          : ((B = em[44]), (U = em[45])),
        (0, c.useEffect)(B, U),
        em[46] !== t0 || em[47] !== tp || em[48] !== tv
          ? ((F = () => {
              let e
              if (!tp || null == t0 || tv !== t0) return
              let t = !1
              return (
                (0, C.ig)().then(() => {
                  if (t) return
                  let n = () => tw(t0)
                  if (null != window.requestIdleCallback) {
                    let t = window.requestIdleCallback(n)
                    e = () => window.cancelIdleCallback(t)
                  } else {
                    let t = window.setTimeout(n, 0)
                    e = () => window.clearTimeout(t)
                  }
                }),
                () => {
                  ;((t = !0), e?.())
                }
              )
            }),
            ($ = [t0, tp, tv]),
            (em[46] = t0),
            (em[47] = tp),
            (em[48] = tv),
            (em[49] = F),
            (em[50] = $))
          : ((F = em[49]), ($ = em[50])),
        (0, c.useEffect)(F, $),
        em[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = () => () => {
              tA.current?.cancel()
            }),
            (K = []),
            (em[51] = H),
            (em[52] = K))
          : ((H = em[51]), (K = em[52])),
        (0, c.useEffect)(H, K),
        em[53] !== eD
          ? ((V = () => {
              let e = tT.current
              "playground" === eD && null != e && aw(e)
            }),
            (em[53] = eD),
            (em[54] = V))
          : (V = em[54]))
      let nl = (0, T.wY)(V)
      ;(em[55] !== nl || em[56] !== eD
        ? ((q = () => {
            let e = tT.current
            return "playground" !== eD || null == e
              ? void nl(null)
              : (nl(e.closest("[data-generated-image-playground-scroll]")),
                aw(e),
                () => {
                  nl(null)
                })
          }),
          (W = [nl, eD]),
          (em[55] = nl),
          (em[56] = eD),
          (em[57] = q),
          (em[58] = W))
        : ((q = em[57]), (W = em[58])),
        (0, c.useLayoutEffect)(q, W),
        em[59] !== tZ || em[60] !== ej || em[61] !== tN || em[62] !== tK || em[63] !== eD
          ? ((Z = (e) => {
              ;((tT.current = e),
                null != e && "playground" === eD && tZ?.id === tN && aw(e),
                null == e || null == tZ || tZ.loading || t_.current === tZ.id || ((t_.current = tZ.id), ej?.(tK(tZ))))
            }),
            (em[59] = tZ),
            (em[60] = ej),
            (em[61] = tN),
            (em[62] = tK),
            (em[63] = eD),
            (em[64] = Z))
          : (Z = em[64]))
      let no = (0, R.K)(Z)
      em[65] !== tZ ||
      em[66] !== eK.current?.isEditing ||
      em[67] !== tG ||
      em[68] !== tU ||
      em[69] !== eY ||
      em[70] !== nn
        ? ((X = (e) => {
            if (
              eK.current?.isEditing ||
              e.defaultPrevented ||
              e.altKey ||
              e.ctrlKey ||
              e.metaKey ||
              e.shiftKey ||
              e.isComposing ||
              229 === e.keyCode ||
              !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key) ||
              !(e.target instanceof HTMLElement) ||
              null == tZ
            )
              return
            let t =
              eY &&
              null !=
                e.target.closest(
                  '[data-image-preview-composer] [contenteditable="true"], [data-image-preview-composer] textarea',
                )
            if (
              null == e.target.closest("[data-generated-image-rail]") &&
              ("ArrowLeft" === e.key ||
                "ArrowRight" === e.key ||
                (!t &&
                  (e.target.isContentEditable ||
                    null !=
                      e.target.closest('input, textarea, select, button, [role="slider"], [contenteditable="true"]'))))
            )
              return
            let n = tG.findIndex((e) => e.id === tZ.id)
            if (n < 0) return
            ;(e.preventDefault(), t && e.stopPropagation())
            let i = "ArrowUp" === e.key || "ArrowLeft" === e.key ? -1 : 1,
              r = tG[n + i]
            if (null == r) {
              i < 0 && !e.repeat && tU?.hasMore && !tU.isLoading && !tU.hasError && tU.onLoadMore()
              return
            }
            nn(r)
          }),
          (em[65] = tZ),
          (em[66] = eK.current?.isEditing),
          (em[67] = tG),
          (em[68] = tU),
          (em[69] = eY),
          (em[70] = nn),
          (em[71] = X))
        : (X = em[71])
      let ns = (0, c.useEffectEvent)(X),
        nd = !nt && "single" === eD && null != tZ && tQ
      if (
        (em[72] !== ns || em[73] !== eY || em[74] !== tE || em[75] !== nd
          ? ((Q = () => {
              let e = tE?.closest('[role="tabpanel"], [role="dialog"]')
              if (nd && null != e)
                return (
                  e.addEventListener("keydown", ns, eY),
                  () => {
                    e.removeEventListener("keydown", ns, eY)
                  }
                )
            }),
            (em[72] = ns),
            (em[73] = eY),
            (em[74] = tE),
            (em[75] = nd),
            (em[76] = Q))
          : (Q = em[76]),
        em[77] !== eY || em[78] !== tE || em[79] !== nd
          ? ((J = [eY, tE, nd]), (em[77] = eY), (em[78] = tE), (em[79] = nd), (em[80] = J))
          : (J = em[80]),
        (0, c.useEffect)(Q, J),
        null == tZ)
      ) {
        let e, t
        return (
          em[81] !== ef.zoom || em[82] !== tl
            ? ((e = ef.zoom ?? { manualZoomPercent: tl, onZoomPercentChange: to, onZoomToFit: () => to(null) }),
              (em[81] = ef.zoom),
              (em[82] = tl),
              (em[83] = e))
            : (e = em[83]),
          em[84] !== ef || em[85] !== e
            ? ((t = (0, i.jsx)(eP.J, { ...ef, zoom: e })), (em[84] = ef), (em[85] = e), (em[86] = t))
            : (t = em[86]),
          t
        )
      }
      if (
        em[87] !== eK.current ||
        em[88] !== nt ||
        em[89] !== eS ||
        em[90] !== tr ||
        em[91] !== tq ||
        em[92] !== eO ||
        em[93] !== eQ ||
        em[94] !== eD ||
        em[95] !== e1
      ) {
        ee = (t) => {
          eK.current?.requestClose != null ? eK.current.requestClose(() => e(t)) : e(t)
        }
        let e = (e) => {
          var t, n, i, r
          let a, l, o, s
          if (nt || e === eD) return
          let d = tA.current
          ;(null != d && ((tA.current = null), (d.oncancel = null), (d.onfinish = null), d.cancel(), td(!1)),
            (0, L.PQ)(eO, {
              availableImageCount: tq.length,
              entrypoint: "view_toggle",
              imageSource: "generated",
              view: "playground" === e ? "canvas" : "single",
            }))
          let c = ab(tT.current)
          ;(td(!0),
            (0, u.flushSync)(() => {
              eS(e)
            }))
          let g = tT.current
          "playground" === e && null != g && aw(g)
          let m = ab(g)
          if (eQ || null == c || null == m || null == g || "function" != typeof g.animate) return void td(!1)
          let h = g.animate(
            [
              {
                transform:
                  ((t = c),
                  (n = m),
                  (i = e1),
                  (r = "playground" === e ? tr / 100 : 1),
                  (a = Number(((0, x.Ud)(t.left - n.left, i) / r).toFixed(4))),
                  (l = Number(((0, x.Ud)(t.top - n.top, i) / r).toFixed(4))),
                  (o = Number((t.width / n.width).toFixed(4))),
                  (s = Number((t.height / n.height).toFixed(4))),
                  `translate(${a}px, ${l}px) scale(${o}, ${s})`),
                transformOrigin: "top left",
              },
              { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 450, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
          )
          tA.current = h
          let f = () => {
            tA.current === h && ((tA.current = null), (h.oncancel = null), (h.onfinish = null), td(!1), h.cancel())
          }
          ;((h.oncancel = f), (h.onfinish = f))
        }
        ;((em[87] = eK.current),
          (em[88] = nt),
          (em[89] = eS),
          (em[90] = tr),
          (em[91] = tq),
          (em[92] = eO),
          (em[93] = eQ),
          (em[94] = eD),
          (em[95] = e1),
          (em[96] = ee))
      } else ee = em[96]
      em[97] !== ee ||
      em[98] !== eh ||
      em[99] !== nt ||
      em[100] !== eY ||
      em[101] !== eO ||
      em[102] !== na ||
      em[103] !== eD
        ? ((et =
            eY || null == eh
              ? null
              : (0, i.jsx)("div", {
                  className: (0, o.A)("contents", nt && "invisible"),
                  inert: nt,
                  children: (0, i.jsx)(eE, {
                    placement: "flow",
                    shouldShowCoachmark: na && !nt,
                    onDismissCoachmark: () => {
                      ;(tj(!0), eO.set(ai, !0))
                    },
                    view: eD,
                    onViewChange: ee,
                  }),
                })),
          (em[97] = ee),
          (em[98] = eh),
          (em[99] = nt),
          (em[100] = eY),
          (em[101] = eO),
          (em[102] = na),
          (em[103] = eD),
          (em[104] = et))
        : (et = em[104])
      let nc = et
      em[105] !== t1
        ? ((en = null == t1 || t1.loading ? [] : (t1.displayVariants ?? [])), (em[105] = t1), (em[106] = en))
        : (en = em[106])
      let nu = en,
        ng = tZ.loading ? "original" : (tZ.displayVariantId ?? "original")
      em[107] !== tZ ||
      em[108] !== nu ||
      em[109] !== eB ||
      em[110] !== nt ||
      em[111] !== t1 ||
      em[112] !== eO ||
      em[113] !== ng ||
      em[114] !== e5
        ? ((ei = (e) =>
            null != t1 && !t1.loading && nu.length > 0
              ? (0, i.jsx)(N.J5, {
                  label: eB.formatMessage({
                    id: "codex.imageGen.displayVariant",
                    defaultMessage: "Image display",
                    description:
                      "Accessible label for choosing which version of an image to display, such as an animation, a grid of frames, or the original image.",
                  }),
                  children: (0, i.jsx)(I.T, {
                    variant: "viewer",
                    selectedId: ng,
                    options: [
                      ...nu.map(ao),
                      {
                        id: "original",
                        label: t1.isAnimated
                          ? (0, i.jsx)(m.A, {
                              id: "codex.imageGen.animationGif",
                              defaultMessage: "GIF",
                              description:
                                "Compact image viewer toggle option. Plays the animated GIF. The other option, Sheet, shows the editable grid of frames. Keep the GIF file format name.",
                            })
                          : (0, i.jsx)(m.A, {
                              id: "codex.imageGen.displayVariant.original",
                              defaultMessage: "Original",
                              description:
                                "Compact image viewer option that displays the original image instead of one of its alternate versions.",
                            }),
                      },
                    ].map((t) => ({ ...t, disabled: nt || e })),
                    onSelect: (e) => {
                      e !== ng &&
                        (t1.isAnimated &&
                          (0, eT.H)(
                            eO,
                            "original" === e
                              ? "CHATGPT_IMAGEGEN_GIF_ACTION_ANIMATION_SELECTED"
                              : "CHATGPT_IMAGEGEN_GIF_ACTION_SPRITESHEET_SELECTED",
                          ),
                        (0, Y.e6)(eO, tZ.id),
                        (0, j.bw)(eO, e5, tZ.id, e),
                        to(null))
                    },
                  }),
                })
              : null),
          (em[107] = tZ),
          (em[108] = nu),
          (em[109] = eB),
          (em[110] = nt),
          (em[111] = t1),
          (em[112] = eO),
          (em[113] = ng),
          (em[114] = e5),
          (em[115] = ei))
        : (ei = em[115])
      let nm = ei
      em[116] !== tZ ||
      em[117] !== eh ||
      em[118] !== nr ||
      em[119] !== eK ||
      em[120] !== ef ||
      em[121] !== ey ||
      em[122] !== eB ||
      em[123] !== ne ||
      em[124] !== t5 ||
      em[125] !== eM ||
      em[126] !== t9 ||
      em[127] !== t1 ||
      em[128] !== tE ||
      em[129] !== nm ||
      em[130] !== t6 ||
      em[131] !== eO ||
      em[132] !== no ||
      em[133] !== tJ ||
      em[134] !== tl ||
      em[135] !== th ||
      em[136] !== t2 ||
      em[137] !== e8 ||
      em[138] !== nc ||
      em[139] !== t4 ||
      em[140] !== e5 ||
      em[141] !== t3
        ? ((er = tZ.loading
            ? (0, i.jsx)(eP.J, {
                ...ef,
                headerViewControl: nc,
                renderHeaderLeadingControls: (e) => {
                  let { navigationDisabled: t } = e
                  return nm(t)
                },
                hasImageRail: tJ,
                loadingContent: (0, i.jsx)(ay, {
                  sourceImage: t5,
                  fallbackPreviewSrc: eM,
                  conversationId: eh,
                  imageAssetResolver: ey,
                  generationStartedAtMs: tZ.generationStartedAtMs,
                }),
              })
            : (0, i.jsx)(
                av,
                {
                  textGalleryId: e8,
                  onEditText: null == t2 ? void 0 : nr,
                  onTextSubmitTarget: tP,
                  activeImage: tZ,
                  onSelectTextEditingImage: ni,
                  clipboardScope: tE,
                  conversationId: eh,
                  fallbackImage: {
                    ...ef,
                    editStateRef: eK,
                    viewerId: e5,
                    headerViewControl: nc,
                    buildCommentPrompt:
                      null != tZ.displayVariantId && null != t1 && !t1.loading && t1.isAnimated
                        ? (e) =>
                            (0, e_.w)(eO, {
                              animation: t1,
                              conversationId: ef.chatGptConversationId,
                              imageAssetResolver: ey,
                              intl: eB,
                              comments: e,
                            })
                        : ef.buildCommentPrompt,
                    onImageEditSubmitStatusChange: (e) => {
                      ;(tm((t) => ("pending" === e ? tZ.id : t === tZ.id ? null : t)),
                        ef.onImageEditSubmitStatusChange?.(e))
                    },
                  },
                  focusedImageRef: no,
                  hasImageRail: t6,
                  imageAssetResolver: ey,
                  loadingPreviewSource: t5,
                  loadingPreviewSrc: eM,
                  manualZoomPercent: tl,
                  viewportId: t3,
                  onManualZoomPercentChange: to,
                  onImageLoad: t9,
                  onPanoramaInteraction: (e, t) => {
                    if ("360Impression" === t) {
                      if (eJ.current.has(e)) return
                      eJ.current.add(e)
                    }
                    ef.onPanoramaInteraction?.(e, t)
                  },
                  removeMode: { active: ne, onActiveChange: (e) => tu((t) => (e ? tZ.id : t === tZ.id ? null : t)) },
                  sizeControlContainer: th,
                  renderHeaderLeadingControls: (e) => {
                    let { navigationDisabled: t } = e
                    return nm(t)
                  },
                },
                t4,
              )),
          (em[116] = tZ),
          (em[117] = eh),
          (em[118] = nr),
          (em[119] = eK),
          (em[120] = ef),
          (em[121] = ey),
          (em[122] = eB),
          (em[123] = ne),
          (em[124] = t5),
          (em[125] = eM),
          (em[126] = t9),
          (em[127] = t1),
          (em[128] = tE),
          (em[129] = nm),
          (em[130] = t6),
          (em[131] = eO),
          (em[132] = no),
          (em[133] = tJ),
          (em[134] = tl),
          (em[135] = th),
          (em[136] = t2),
          (em[137] = e8),
          (em[138] = nc),
          (em[139] = t4),
          (em[140] = e5),
          (em[141] = t3),
          (em[142] = er))
        : (er = em[142])
      let nh = er,
        nf = !eY && "bg-surface-secondary",
        np = !eY && eX && "[--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]",
        nx = eZ && "flex flex-col",
        nv = ts && "pointer-events-none"
      em[143] !== nf || em[144] !== np || em[145] !== nx || em[146] !== nv
        ? ((ea = (0, o.A)("relative h-full min-h-0 min-w-0 w-full", nf, np, nx, nv)),
          (em[143] = nf),
          (em[144] = np),
          (em[145] = nx),
          (em[146] = nv),
          (em[147] = ea))
        : (ea = em[147])
      let ny = tF.map((e) =>
        (0, i.jsx)(
          aI,
          {
            image: (0, j.gK)(e7, e),
            conversationId: eh,
            imageAssetResolver: ey,
            onSettled: () => {
              var t
              return (
                (t = e.id),
                void tB((e) => {
                  if (!e.pendingIds.has(t)) return e
                  let n = new Set(e.pendingIds)
                  return (n.delete(t), { ...e, pendingIds: n, stagedIds: n.size > 0 ? e.stagedIds : new Set() })
                })
              )
            },
          },
          e.id,
        ),
      )
      return (
        em[148] !== ny
          ? ((el = (0, i.jsx)("div", { hidden: !0, "aria-hidden": !0, children: ny })), (em[148] = ny), (em[149] = el))
          : (el = em[149]),
        em[150] !== tG ? ((eo = tG.filter(al).map(aa)), (em[150] = tG), (em[151] = eo)) : (eo = em[151]),
        em[152] !== nu || em[153] !== eh || em[154] !== tp || em[155] !== ey || em[156] !== t1 || em[157] !== tb
          ? ((es =
              tp &&
              null != t1 &&
              !t1.loading &&
              tb === t1.src &&
              nu.map((e) =>
                (0, i.jsx)(ax, { src: e.asset.src, conversationId: eh, imageAssetResolver: ey }, e.asset.src),
              )),
            (em[152] = nu),
            (em[153] = eh),
            (em[154] = tp),
            (em[155] = ey),
            (em[156] = t1),
            (em[157] = tb),
            (em[158] = es))
          : (es = em[158]),
        em[159] !== eZ || em[160] !== nm || em[161] !== nc
          ? ((ed = eZ
              ? null
              : (0, i.jsxs)("div", {
                  className:
                    "absolute start-[calc(var(--spacing)*2+var(--viewer-header-start-inset,0px))] top-2 z-40 flex items-center gap-2",
                  children: [nc, nm(!1)],
                })),
            (em[159] = eZ),
            (em[160] = nm),
            (em[161] = nc),
            (em[162] = ed))
          : (ed = em[162]),
        em[163] !== eh || em[164] !== nt || em[165] !== eY
          ? ((ec = null), (em[163] = eh), (em[164] = nt), (em[165] = eY), (em[166] = ec))
          : (ec = em[166]),
        em[167] !== tZ ||
        em[168] !== nh ||
        em[169] !== eh ||
        em[170] !== ef ||
        em[171] !== tV ||
        em[172] !== tG ||
        em[173] !== tU ||
        em[174] !== ey ||
        em[175] !== ew ||
        em[176] !== nt ||
        em[177] !== eY ||
        em[178] !== eZ ||
        em[179] !== ts ||
        em[180] !== t9 ||
        em[181] !== eC ||
        em[182] !== tr ||
        em[183] !== nm ||
        em[184] !== t6 ||
        em[185] !== nn ||
        em[186] !== no ||
        em[187] !== ta ||
        em[188] !== tf ||
        em[189] !== tJ ||
        em[190] !== eQ ||
        em[191] !== eD ||
        em[192] !== nc
          ? ((eu =
              eY || "playground" !== eD || null == eh
                ? (0, i.jsxs)("div", {
                    className: "flex h-full min-h-0",
                    children: [
                      t6
                        ? (0, i.jsxs)("div", {
                            className: "pointer-events-none relative flex h-full w-18 shrink-0",
                            children: [
                              tJ &&
                                (0, i.jsx)(af, {
                                  activeId: tZ.id,
                                  images: tG,
                                  conversationId: eh,
                                  imageAssetResolver: ey,
                                  hidden: nt,
                                  historyPagination: tU,
                                  isOverlay: eY,
                                  isUnifiedViewerEnabled: eZ,
                                  onAddToChat: eC,
                                  onDownloadInitiated: ef.onDownloadInitiated,
                                  onDownloaded: ef.onDownloaded,
                                  onSelect: nn,
                                }),
                              (0, i.jsx)("div", {
                                ref: tf,
                                className:
                                  "[container-type:size] pointer-events-none absolute inset-0 z-30 flex items-center justify-center pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]",
                              }),
                            ],
                          })
                        : null,
                      (0, i.jsx)("div", { className: "min-w-0 flex-1", children: nh }),
                    ],
                  })
                : (0, i.jsx)("div", {
                    className: eZ ? "relative min-h-0 flex-1" : "contents",
                    children: (0, i.jsx)(ex, {
                      activeImageId: tZ.id,
                      conversationId: eh,
                      focusedImageRef: no,
                      groups: tV,
                      imageAssetResolver: ey,
                      initialTool: ew,
                      isViewTransitioning: ts && !eQ,
                      onGeneratedImageSelection: eC,
                      onImageLoad: t9,
                      onSelectImage: nn,
                      onZoomPercentChange: ta,
                      renderHeader: eZ
                        ? (e) => {
                            let { zoomControl: t, navigationDisabled: n } = e,
                              r = (e) =>
                                (0, i.jsx)(ek.A, {
                                  title: tZ.loading ? (ef.title ?? ef.alt) : tZ.tabTitle,
                                  image: tZ.loading ? void 0 : tZ.sourceImage,
                                  navigationDisabled: nt || n,
                                  readOnly: ef.readOnly ?? !1,
                                  children: e,
                                })
                            return (0, i.jsx)(N.Yi, {
                              density: "surface",
                              leading: [
                                {
                                  id: "title",
                                  content:
                                    ef.renderHeaderMenuActions?.({
                                      image: tZ.loading ? void 0 : tZ.sourceImage,
                                      imageId: tZ.id,
                                      isImageActionsDisabled: nt || n,
                                      isUnifiedViewerEnabled: !0,
                                      renderMenu: r,
                                    }) ?? r(null),
                                  hidePriority: 4,
                                },
                                { id: "view-controls", content: nc, hidePriority: 5 },
                                { id: "animation-view", content: nm(n) },
                              ],
                              trailing: [
                                { id: "zoom", content: t, hidePriority: 3 },
                                { id: "window-controls", content: ef.headerWindowControls },
                              ],
                            })
                          }
                        : void 0,
                      zoomPercent: tr,
                    }),
                  })),
            (em[167] = tZ),
            (em[168] = nh),
            (em[169] = eh),
            (em[170] = ef),
            (em[171] = tV),
            (em[172] = tG),
            (em[173] = tU),
            (em[174] = ey),
            (em[175] = ew),
            (em[176] = nt),
            (em[177] = eY),
            (em[178] = eZ),
            (em[179] = ts),
            (em[180] = t9),
            (em[181] = eC),
            (em[182] = tr),
            (em[183] = nm),
            (em[184] = t6),
            (em[185] = nn),
            (em[186] = no),
            (em[187] = ta),
            (em[188] = tf),
            (em[189] = tJ),
            (em[190] = eQ),
            (em[191] = eD),
            (em[192] = nc),
            (em[193] = eu))
          : (eu = em[193]),
        em[194] !== tS ||
        em[195] !== ea ||
        em[196] !== el ||
        em[197] !== eo ||
        em[198] !== es ||
        em[199] !== ed ||
        em[200] !== ec ||
        em[201] !== eu
          ? ((eg = (0, i.jsxs)("div", { ref: tS, className: ea, children: [el, eo, es, ed, ec, eu] })),
            (em[194] = tS),
            (em[195] = ea),
            (em[196] = el),
            (em[197] = eo),
            (em[198] = es),
            (em[199] = ed),
            (em[200] = ec),
            (em[201] = eu),
            (em[202] = eg))
          : (eg = em[202]),
        eg
      )
    }
    function aa(e) {
      return (0, i.jsx)(r8, { operationId: e.id }, e.id)
    }
    function al(e) {
      return (
        !e.loading &&
        ("starting" === e.textEditingStatus || "preparing" === e.textEditingStatus || "loading" === e.textEditingStatus)
      )
    }
    function ao(e) {
      return { id: e.id, label: (0, i.jsx)(m.A, { ...e.label }) }
    }
    function as(e) {
      return !e.loading
    }
    function ad(e) {
      return e.loading
    }
    function ac(e) {
      return !e.loading
    }
    function au(e) {
      return e.images
    }
    function ag(e) {
      return e.images
    }
    function am(e) {
      return e.id
    }
    function ah(e) {
      return e.images
    }
    function af(e) {
      let t,
        n,
        a,
        d,
        u,
        h,
        f,
        p,
        x,
        v,
        b,
        I,
        M,
        j,
        C = (0, r.c)(46),
        {
          activeId: E,
          images: S,
          conversationId: _,
          imageAssetResolver: A,
          hidden: k,
          historyPagination: R,
          isOverlay: N,
          isUnifiedViewerEnabled: z,
          onAddToChat: L,
          onDownloadInitiated: D,
          onDownloaded: O,
          onSelect: B,
        } = e,
        U = (0, g.A)(),
        F = N && !0
      if (C[0] !== E || C[1] !== S) {
        let e
        ;(C[3] !== E ? ((e = (e) => e.id === E), (C[3] = E), (C[4] = e)) : (e = C[4]),
          (t = S.findIndex(e)),
          (C[0] = E),
          (C[1] = S),
          (C[2] = t))
      } else t = C[2]
      let $ = Math.max(t, 0),
        H = (0, c.useRef)(null),
        K = (0, c.useRef)(null)
      C[5] !== $
        ? ((n = { activeId: null, activeIndex: $, offset: 0, historyHeight: 0 }), (C[5] = $), (C[6] = n))
        : (n = C[6])
      let V = (0, c.useRef)(n),
        G = (0, c.useRef)({ lastEventAt: -1 / 0, hasRequested: !1 }),
        [q, W] = (0, c.useState)(null != R)
      null == R || q || W(!0)
      let Y = R?.isLoading,
        Z = Y || R?.hasMore || R?.hasError
      C[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (e, t) => {
            let n = t.clientHeight
            if (0 === n) return
            let i = K.current?.offsetHeight ?? 0,
              r = 0 === e ? 0 : i + 54 * e,
              a = i + 54 * e + 46 + 12
            r < t.scrollTop ? (t.scrollTop = Math.max(0, r - 16)) : a > t.scrollTop + n && (t.scrollTop = a - n + 16)
          }),
          (C[7] = a))
        : (a = C[7])
      let X = a
      C[8] !== E || C[9] !== $
        ? ((d = () => {
            let e = H.current
            if (null == e) return
            let t = V.current,
              n = K.current?.offsetHeight ?? 0,
              i = ($ - t.activeIndex) * 54,
              r = t.activeId === E,
              a = r ? t.offset + i : 54 * $
            ;((V.current = { activeId: E, activeIndex: $, offset: a, historyHeight: n }),
              r ? (e.scrollTop = e.scrollTop + (i + n - t.historyHeight)) : X($, e))
          }),
          (C[8] = E),
          (C[9] = $),
          (C[10] = d))
        : (d = C[10])
      let Q = (0, c.useEffectEvent)(d)
      ;(C[11] !== Q
        ? ((u = () => {
            Q()
          }),
          (C[11] = Q),
          (C[12] = u))
        : (u = C[12]),
        C[13] !== E || C[14] !== $ || C[15] !== Z || C[16] !== S.length
          ? ((h = [E, $, Z, S.length]), (C[13] = E), (C[14] = $), (C[15] = Z), (C[16] = S.length), (C[17] = h))
          : (h = C[17]),
        (0, c.useLayoutEffect)(u, h),
        C[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (e, t) => {
              X(V.current.activeIndex, t)
            }),
            (C[18] = f))
          : (f = C[18]))
      let J = (0, T.wY)(f),
        ee = (e, t) => {
          let n = S[e]
          if (null == n) return
          ;((V.current = {
            activeId: n.id,
            activeIndex: e,
            offset: t ?? 54 * e,
            historyHeight: K.current?.offsetHeight ?? 0,
          }),
            B(n))
          let i = H.current
          null != i && X(e, i)
        }
      C[19] !== k || C[20] !== R
        ? ((p = () => {
            !k && R?.hasMore && !R.isLoading && !R.hasError && R.onLoadMore()
          }),
          (C[19] = k),
          (C[20] = R),
          (C[21] = p))
        : (p = C[21])
      let et = p
      C[22] !== U
        ? ((x = U.formatMessage({
            id: "imageGeneration.rail.retryHistory",
            defaultMessage: "Retry loading older images",
            description:
              "Accessible label and tooltip for retrying a failed older image history request in the thumbnail rail",
          })),
          (C[22] = U),
          (C[23] = x))
        : (x = C[23])
      let en = x,
        ei = k ? void 0 : J
      C[24] !== ei ? ((v = (0, P.P)(H, ei)), (C[24] = ei), (C[25] = v)) : (v = C[25])
      let er = !z && "mt-10",
        ea = z && "mt-14",
        el = k && "invisible"
      C[26] !== er || C[27] !== ea || C[28] !== el
        ? ((b = (0, o.A)(
            "pointer-events-auto relative z-10 w-18 shrink-0 [scrollbar-width:none] [overflow-anchor:none] overflow-y-auto py-1.5 ps-0.5 [&::-webkit-scrollbar]:hidden",
            er,
            ea,
            el,
          )),
          (C[26] = er),
          (C[27] = ea),
          (C[28] = el),
          (C[29] = b))
        : (b = C[29])
      let eo = (e) => {
        if (e.ctrlKey || k) return
        e.preventDefault()
        let t =
            e.deltaMode === WheelEvent.DOM_DELTA_LINE
              ? 16 * e.deltaY
              : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
                ? e.deltaY * e.currentTarget.clientHeight
                : e.deltaY,
          n = Math.min(Math.max(V.current.offset + t, 0), (S.length - 1) * 54)
        ee(Math.round(n / 54), n)
        let i = G.current
        ;(e.timeStamp - i.lastEventAt > 200 && (i.hasRequested = !1),
          (i.lastEventAt = e.timeStamp),
          t < 0 && 0 === n && !i.hasRequested && ((i.hasRequested = !0), et()))
      }
      C[30] !== Z || C[31] !== k || C[32] !== R || C[33] !== Y || C[34] !== en
        ? ((I = Z
            ? (0, i.jsxs)("div", {
                ref: K,
                className: (0, o.A)("flex h-16 items-center justify-center pb-2", Y && "sticky top-0 z-10"),
                children: [
                  Y &&
                    !k &&
                    (0, i.jsxs)("div", {
                      className: "overflow-hidden rounded-lg border border-default bg-surface",
                      style: { height: 46, width: 46 },
                      role: "status",
                      children: [
                        (0, i.jsx)("div", {
                          "aria-hidden": !0,
                          children: (0, i.jsx)(ef.o, { presentation: "thumbnail" }),
                        }),
                        (0, i.jsx)("span", {
                          className: "sr-only",
                          children: (0, i.jsx)(m.A, {
                            id: "imageGeneration.rail.loadingHistory",
                            defaultMessage: "Loading older images…",
                            description:
                              "Screen reader status while the image thumbnail rail loads an older page of conversation history",
                          }),
                        }),
                      ],
                    }),
                  !Y &&
                    R?.hasError &&
                    (0, i.jsx)(l.m, {
                      content: en,
                      children: (0, i.jsx)(y.$, {
                        type: "button",
                        color: "ghost",
                        size: "icon",
                        "aria-label": en,
                        onClick: R.onLoadMore,
                        children: (0, i.jsx)(w._7Q, {}),
                      }),
                    }),
                ],
              })
            : null),
          (C[30] = Z),
          (C[31] = k),
          (C[32] = R),
          (C[33] = Y),
          (C[34] = en),
          (C[35] = I))
        : (I = C[35])
      let es = S.map((e, t) => {
          let n,
            r = e.id === E,
            a = r || F ? 1 : 0.34,
            l = e.loading ? void 0 : e.textEditingVersion
          return (
            (n = e.loading
              ? U.formatMessage({
                  id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                  defaultMessage: "Generating image...",
                  description: "Aria label for the image generation loading placeholder",
                })
              : null != l
                ? U.formatMessage(
                    {
                      id: "imageTextEditing.versionThumbnailLabel",
                      defaultMessage: "Image version {version, number}",
                      description:
                        "Accessible name of a gallery thumbnail showing a confirmed image text editing version",
                    },
                    { version: l },
                  )
                : e.alt),
            (0, i.jsx)(
              s.P.button,
              {
                type: "button",
                animate: { opacity: null == l ? a : 1, scale: r ? 1.2 : 0.95 },
                "aria-current": r ? "true" : void 0,
                "aria-description": e.loading || null == l ? void 0 : e.alt,
                "aria-label": n,
                className: (0, o.A)(
                  "mx-auto mb-2 flex cursor-interaction overflow-hidden rounded-lg border border-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  F ? "bg-surface" : !e.loading && "bg-surface-secondary/85",
                ),
                style: { height: 46, width: 46 },
                initial: !1,
                transition: { duration: 0.12 },
                onClick: () => {
                  ee(t)
                },
                children: (0, i.jsx)(ap, {
                  image: e,
                  artworkOpacity: null == l ? void 0 : a,
                  conversationId: _,
                  imageAssetResolver: A,
                  onAddToChat: L,
                  onDownloadInitiated: () => D?.(e.id),
                  onDownloaded: O,
                }),
              },
              e.id,
            )
          )
        }),
        ed = `calc(${q ? 100 : 50}% - 23px)`
      return (
        C[36] !== ed ? ((M = (0, i.jsx)("div", { style: { height: ed } })), (C[36] = ed), (C[37] = M)) : (M = C[37]),
        C[38] !== k || C[39] !== v || C[40] !== b || C[41] !== eo || C[42] !== I || C[43] !== es || C[44] !== M
          ? ((j = (0, i.jsxs)("div", {
              ref: v,
              "data-generated-image-rail": !0,
              className: b,
              inert: k,
              onWheel: eo,
              children: [I, es, M],
            })),
            (C[38] = k),
            (C[39] = v),
            (C[40] = b),
            (C[41] = eo),
            (C[42] = I),
            (C[43] = es),
            (C[44] = M),
            (C[45] = j))
          : (j = C[45]),
        j
      )
    }
    function ap(e) {
      let t,
        n,
        a,
        l,
        o,
        s = (0, r.c)(12)
      if (
        (s[0] !== e
          ? (({ image: n, artworkOpacity: t, ...a } = e), (s[0] = e), (s[1] = t), (s[2] = n), (s[3] = a))
          : ((t = s[1]), (n = s[2]), (a = s[3])),
        n.loading)
      ) {
        let e
        return (
          s[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(ef.o, { presentation: "thumbnail" })), (s[4] = e))
            : (e = s[4]),
          e
        )
      }
      s[5] !== n || s[6] !== a
        ? ((l = (0, i.jsx)(aI, { image: n, ...a })), (s[5] = n), (s[6] = a), (s[7] = l))
        : (l = s[7])
      let d = l
      return (
        s[8] !== t || s[9] !== n.textEditingOperationId || s[10] !== d
          ? ((o =
              null == n.textEditingOperationId
                ? d
                : (0, i.jsx)(r7, { operationId: n.textEditingOperationId, artworkOpacity: t, children: d })),
            (s[8] = t),
            (s[9] = n.textEditingOperationId),
            (s[10] = d),
            (s[11] = o))
          : (o = s[11]),
        o
      )
    }
    function ax(e) {
      let t,
        n,
        a = (0, r.c)(6),
        { src: l, conversationId: o, imageAssetResolver: s } = e
      a[0] !== o || a[1] !== s || a[2] !== l
        ? ((t = { src: l, conversationId: o, imageAssetResolver: s, shouldLoadFileDataUrl: !1 }),
          (a[0] = o),
          (a[1] = s),
          (a[2] = l),
          (a[3] = t))
        : (t = a[3])
      let { previewSrc: d } = (0, et.D)(t)
      return (
        a[4] !== d
          ? ((n =
              null == d
                ? null
                : (0, i.jsx)("img", {
                    alt: "",
                    src: d,
                    hidden: !0,
                    loading: "eager",
                    decoding: "async",
                    fetchPriority: "low",
                    referrerPolicy: "no-referrer",
                  })),
            (a[4] = d),
            (a[5] = n))
          : (n = a[5]),
        n
      )
    }
    function av(e) {
      let t,
        n,
        a,
        l,
        o,
        s = (0, r.c)(58),
        {
          textGalleryId: d,
          onEditText: u,
          onTextSubmitTarget: h,
          activeImage: f,
          onSelectTextEditingImage: p,
          clipboardScope: x,
          conversationId: v,
          fallbackImage: y,
          focusedImageRef: b,
          hasImageRail: w,
          imageAssetResolver: I,
          loadingPreviewSource: M,
          loadingPreviewSrc: j,
          manualZoomPercent: C,
          viewportId: E,
          onPanoramaInteraction: S,
          removeMode: T,
          sizeControlContainer: _,
          footerActions: A,
          renderHeaderLeadingControls: k,
          onManualZoomPercentChange: R,
          onImageLoad: N,
        } = e,
        L = (0, g.A)(),
        [D, O] = (0, c.useState)(null),
        { onImageEditSubmit: B } = y
      s[0] !== f.src || s[1] !== v || s[2] !== I
        ? ((t = { src: f.src, conversationId: v, imageAssetResolver: I, shouldLoadFileDataUrl: !1 }),
          (s[0] = f.src),
          (s[1] = v),
          (s[2] = I),
          (s[3] = t))
        : (t = s[3])
      let { downloadSrc: U, previewSrc: F, isError: $, refetch: H, deleted: K } = (0, et.D)(t)
      if (
        s[4] !== f.displayVariantId ||
        s[5] !== f.textEditingOperationId ||
        s[6] !== f.textEditingStatus ||
        s[7] !== v ||
        s[8] !== K ||
        s[9] !== y.presentation ||
        s[10] !== I ||
        s[11] !== L ||
        s[12] !== $ ||
        s[13] !== M ||
        s[14] !== j ||
        s[15] !== F ||
        s[16] !== H
      ) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          if (null == F)
            if ($) a = (0, i.jsx)(eS.$, { onRetry: H })
            else if ("saving" === f.textEditingStatus) {
              let e
              ;(s[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(m.A, {
                    id: "imageTextEditing.saving",
                    defaultMessage: "Saving image",
                    description: "Quiet status while saving an edited image; the image stays sharp",
                  })),
                  (s[19] = e))
                : (e = s[19]),
                (a = (0, i.jsx)("span", { role: "status", className: "text-sm text-secondary", children: e })))
            } else {
              let e
              ;(s[20] !== L
                ? ((e = L.formatMessage({
                    id: "codex.generatedImage.loadingSource",
                    defaultMessage: "Loading image…",
                    description: "Accessible label while an existing generated image is being downloaded for display",
                  })),
                  (s[20] = L),
                  (s[21] = e))
                : (e = s[21]),
                (a = (0, i.jsx)(ay, {
                  ariaLabel: e,
                  sourceImage: M,
                  fallbackPreviewSrc: j,
                  conversationId: v,
                  imageAssetResolver: I,
                })))
            }
          if (
            null != K &&
            ((a = (0, i.jsx)(z.i, { deleted: K, imageAssetResolver: I })),
            "overlay" !== y.presentation && null == f.textEditingOperationId && null == f.displayVariantId)
          ) {
            n = a
            break e
          }
        }
        ;((s[4] = f.displayVariantId),
          (s[5] = f.textEditingOperationId),
          (s[6] = f.textEditingStatus),
          (s[7] = v),
          (s[8] = K),
          (s[9] = y.presentation),
          (s[10] = I),
          (s[11] = L),
          (s[12] = $),
          (s[13] = M),
          (s[14] = j),
          (s[15] = F),
          (s[16] = H),
          (s[17] = n),
          (s[18] = a))
      } else ((n = s[17]), (a = s[18]))
      if (n !== Symbol.for("react.early_return_sentinel")) return n
      if (
        "overlay" !== y.presentation &&
        null == f.displayVariantId &&
        null == f.textEditingOperationId &&
        I?.validationSessionId != null &&
        null == F
      ) {
        let e
        return (
          s[22] !== a
            ? ((e = (0, i.jsx)("div", {
                className: "[container-type:size] flex size-full items-center justify-center overflow-hidden p-4",
                children: a,
              })),
              (s[22] = a),
              (s[23] = e))
            : (e = s[23]),
          e
        )
      }
      let V = "overlay" === y.presentation ? void 0 : y.tabId,
        G = null == u ? void 0 : f.textEditingOperationId,
        q = null == f.textEditingOriginalImageId,
        W = F ?? ""
      return (
        s[24] !== f ||
        s[25] !== x ||
        s[26] !== K ||
        s[27] !== U ||
        s[28] !== y ||
        s[29] !== b ||
        s[30] !== A ||
        s[31] !== w ||
        s[32] !== I ||
        s[33] !== $ ||
        s[34] !== D ||
        s[35] !== C ||
        s[36] !== u ||
        s[37] !== B ||
        s[38] !== N ||
        s[39] !== R ||
        s[40] !== S ||
        s[41] !== h ||
        s[42] !== F ||
        s[43] !== T ||
        s[44] !== k ||
        s[45] !== _ ||
        s[46] !== a ||
        s[47] !== E
          ? ((l = (e, t, n, r) => {
              let l = t ?? F,
                o = null == E || $ || null != K ? null : D,
                s = a
              return (
                null == F && null == t && e?.recovery != null
                  ? (s = (0, i.jsx)("div", { className: "relative size-full", children: e.recovery }))
                  : null != t
                    ? (s = void 0)
                    : null != F ||
                      $ ||
                      null != K ||
                      e?.loadingPreview == null ||
                      (s = (0, i.jsx)("div", { className: "relative size-full", children: e.loadingPreview })),
                (0, i.jsx)(eP.J, {
                  ...y,
                  textEditing: e,
                  renderTextComposer: n,
                  viewerToolbarStatus: r,
                  onEditText: u,
                  onTextSubmitTarget: h,
                  alt: f.alt,
                  attachmentId: (0, Y.jV)(f.id),
                  attachmentSrc: f.src,
                  imageAssetResolver: I,
                  clipboardScope: x,
                  downloadSrc: U ?? F ?? f.src,
                  hasImageRail: w,
                  loadingContent: s,
                  imageRef: (0, P.P)(b, y.imageRef),
                  onImageLoad: (e) => {
                    null != l && (null != E && O(l), N(e))
                  },
                  imageId: f.id,
                  viewportId: E,
                  initialEditTool: f.id === y.imageId ? y.initialEditTool : void 0,
                  onPanoramaInteraction: S,
                  panoramaImage: null == F ? void 0 : f,
                  sourceImage: f.sourceImage,
                  isAnimated: f.isAnimated,
                  readOnly: y.readOnly,
                  removeMode: T,
                  sizeControlContainer: _,
                  footerActions: A,
                  title: f.tabTitle,
                  renderHeaderLeadingControls: k,
                  onImageEditSubmit:
                    null == B
                      ? void 0
                      : (e, t) => (
                          null == e.textEditSource && h(null),
                          B(
                            {
                              ...e,
                              imageId: null == e.textEditSource ? f.id : (f.textEditingConversationImageId ?? f.id),
                              imageVariant:
                                f.sourceImage?.spritesheet?.src === f.src &&
                                null != e.annotationCount &&
                                null == e.maskSrc
                                  ? "original"
                                  : f.displayVariantId,
                            },
                            t,
                          )
                        ),
                  referrerPolicy: "no-referrer",
                  src: l ?? o ?? "",
                  zoom: { manualZoomPercent: C, onZoomPercentChange: R, onZoomToFit: () => R(null) },
                })
              )
            }),
            (s[24] = f),
            (s[25] = x),
            (s[26] = K),
            (s[27] = U),
            (s[28] = y),
            (s[29] = b),
            (s[30] = A),
            (s[31] = w),
            (s[32] = I),
            (s[33] = $),
            (s[34] = D),
            (s[35] = C),
            (s[36] = u),
            (s[37] = B),
            (s[38] = N),
            (s[39] = R),
            (s[40] = S),
            (s[41] = h),
            (s[42] = F),
            (s[43] = T),
            (s[44] = k),
            (s[45] = _),
            (s[46] = a),
            (s[47] = E),
            (s[48] = l))
          : (l = s[48]),
        s[49] !== f.textEditingSourceImageId ||
        s[50] !== p ||
        s[51] !== V ||
        s[52] !== G ||
        s[53] !== q ||
        s[54] !== W ||
        s[55] !== l ||
        s[56] !== d
          ? ((o = (0, i.jsx)(r9, {
              galleryId: d,
              tabId: V,
              operationId: G,
              operationEntry: q,
              sourceImageId: f.textEditingSourceImageId,
              sourcePreview: W,
              onSelectImage: p,
              children: l,
            })),
            (s[49] = f.textEditingSourceImageId),
            (s[50] = p),
            (s[51] = V),
            (s[52] = G),
            (s[53] = q),
            (s[54] = W),
            (s[55] = l),
            (s[56] = d),
            (s[57] = o))
          : (o = s[57]),
        o
      )
    }
    function ay(e) {
      let t,
        n,
        a = (0, r.c)(8),
        {
          ariaLabel: l,
          sourceImage: o,
          conversationId: s,
          imageAssetResolver: d,
          generationStartedAtMs: c,
          fallbackPreviewSrc: u,
        } = e,
        g = (0, A.Ou)("4161245824"),
        m = o?.src ?? ""
      a[0] !== s || a[1] !== d || a[2] !== m
        ? ((t = { src: m, conversationId: s, imageAssetResolver: d, shouldLoadFileDataUrl: !1 }),
          (a[0] = s),
          (a[1] = d),
          (a[2] = m),
          (a[3] = t))
        : (t = a[3])
      let { previewSrc: h } = (0, et.D)(t),
        f = h ?? u,
        p = null != c && g.get("image_overlay_editing_enabled", !1) ? c : void 0
      return (
        a[4] !== l || a[5] !== f || a[6] !== p
          ? ((n = (0, i.jsx)(ef.o, { ariaLabel: l, presentation: "single", previewSrc: f, generationStartedAtMs: p })),
            (a[4] = l),
            (a[5] = f),
            (a[6] = p),
            (a[7] = n))
          : (n = a[7]),
        n
      )
    }
    function ab(e) {
      let t = e?.getBoundingClientRect()
      return null == t || t.width <= 0 || t.height <= 0 ? null : t
    }
    function aw(e) {
      let t = e.closest("[data-generated-image-playground-scroll]"),
        n = null != t && e.getBoundingClientRect().right > t.getBoundingClientRect().right
      e.scrollIntoView({ block: "start", inline: n ? "center" : "nearest" })
    }
    let aI = (0, c.memo)(function (e) {
      let t,
        n,
        a,
        l,
        o,
        s = (0, r.c)(36),
        {
          image: c,
          conversationId: u,
          imageAssetResolver: m,
          onAddToChat: h,
          onDownloadInitiated: f,
          onDownloaded: p,
          onSettled: x,
        } = e,
        v = (0, d.gh)(_.PR),
        y = (0, g.A)(),
        I = m?.validationSessionId != null ? c.src : c.previewSrc
      s[0] !== u || s[1] !== m || s[2] !== I
        ? ((t = { src: I, conversationId: u, imageAssetResolver: m, shouldLoadFileDataUrl: !1 }),
          (s[0] = u),
          (s[1] = m),
          (s[2] = I),
          (s[3] = t))
        : (t = s[3])
      let { previewSrc: M, isLoading: j, isError: C, deleted: E } = (0, et.D)(t)
      s[4] !== E || s[5] !== C || s[6] !== j || s[7] !== x
        ? ((n = (e) => {
            null != e && (e instanceof HTMLImageElement ? e.complete : null != E || C || !j) && x?.()
          }),
          (s[4] = E),
          (s[5] = C),
          (s[6] = j),
          (s[7] = x),
          (s[8] = n))
        : (n = s[8])
      let S = n
      if (null != E) {
        let e
        return (
          s[9] !== E || s[10] !== S
            ? ((e = (0, i.jsx)(z.i, { ref: S, deleted: E, compact: !0 })), (s[9] = E), (s[10] = S), (s[11] = e))
            : (e = s[11]),
          e
        )
      }
      if (null == M) {
        let e
        if (null != x && !C) {
          let e
          return (s[12] !== S ? ((e = (0, i.jsx)("span", { ref: S })), (s[12] = S), (s[13] = e)) : (e = s[13]), e)
        }
        return (
          s[14] !== y || s[15] !== C || s[16] !== j || s[17] !== S
            ? ((e = C
                ? (0, i.jsx)("span", {
                    ref: S,
                    className: "flex size-full items-center justify-center text-secondary",
                    role: "img",
                    "aria-label": y.formatMessage({
                      id: "codex.generatedImage.thumbnailUnavailable",
                      defaultMessage: "Image unavailable",
                      description:
                        "Accessible label for a generated image thumbnail whose download failed; selecting it opens the viewer with a retry button",
                    }),
                    children: (0, i.jsx)(w.Ko7, {}),
                  })
                : (0, i.jsx)(O.a, { ref: S, className: "size-full", "aria-busy": j })),
              (s[14] = y),
              (s[15] = C),
              (s[16] = j),
              (s[17] = S),
              (s[18] = e))
            : (e = s[18]),
          e
        )
      }
      s[19] !== c ||
      s[20] !== m ||
      s[21] !== y ||
      s[22] !== h ||
      s[23] !== f ||
      s[24] !== p ||
      s[25] !== M ||
      s[26] !== v
        ? ((a = () =>
            (0, D.getGeneratedImageContextMenuItems)(v, {
              displaySrc: M,
              image: c,
              imageAssetResolver: m,
              intl: y,
              onAddToChat: h,
              onDownloadInitiated: f,
              onDownloaded: () => p?.(c.id, { alt: c.alt, image: c.sourceImage, src: M }),
            })),
          (s[19] = c),
          (s[20] = m),
          (s[21] = y),
          (s[22] = h),
          (s[23] = f),
          (s[24] = p),
          (s[25] = M),
          (s[26] = v),
          (s[27] = a))
        : (a = s[27])
      let T = null == x ? "lazy" : "eager"
      return (
        s[28] !== x || s[29] !== M || s[30] !== S || s[31] !== T
          ? ((l = (0, i.jsx)("img", {
              ref: S,
              alt: "",
              className: "size-full rounded-lg object-cover",
              decoding: "async",
              loading: T,
              onLoad: x,
              onError: x,
              referrerPolicy: "no-referrer",
              src: M,
            })),
            (s[28] = x),
            (s[29] = M),
            (s[30] = S),
            (s[31] = T),
            (s[32] = l))
          : (l = s[32]),
        s[33] !== a || s[34] !== l
          ? ((o = (0, i.jsx)(b.t, { getItems: a, children: l })), (s[33] = a), (s[34] = l), (s[35] = o))
          : (o = s[35]),
        o
      )
    })
  },
  MMsV(e, t, n) {
    let i = new WeakMap()
    n.d(
      t,
      {},
      {
        Sp: function (e, t, n) {
          for (let r of t) {
            if ("text" !== r.kind || "editable" !== r.rendering.mode || i.has(r) || n.includes(r)) continue
            let t = e.find((e) => e.id === r.id)
            if (
              t?.kind === "text" &&
              "editable" === t.rendering.mode &&
              r !== t &&
              r.rendering.font_size === t.rendering.font_size
            ) {
              let e = i.get(t)
              null != e && i.set(r, e)
            }
          }
        },
        _8: function (e, t) {
          return i.get(e) ?? t
        },
        pb: function (e, t) {
          i.set(e, t)
        },
      },
    )
  },
  ePe7(e, t, n) {
    var i = n("SZCv"),
      r = n.n(i),
      a = n("MMsV")
    function l(e) {
      return "ready" === e.status || "saved" === e.status || "failed" === e.status || "unavailable" === e.status
    }
    function o(e) {
      return (
        Number.isFinite(e.x) &&
        Number.isFinite(e.y) &&
        Number.isFinite(e.width) &&
        e.width > 0 &&
        Number.isFinite(e.height) &&
        e.height > 0
      )
    }
    function s(e, t, n) {
      let i = new Set(n.content.fonts.find((e) => e.id === t.id)?.missing_characters)
      return [
        ...new Set(
          Array.from(e.normalize("NFC")).filter(
            (e) => "\n" !== e && (i.has(e) || !t.codePoints.has(e.codePointAt(0) ?? 0)),
          ),
        ),
      ]
    }
    function d(e) {
      let t = e.horizontal_scale ?? 1,
        n = e.line_height
      return (
        e.font_size > 0 &&
        e.font_size <= 8192 &&
        /^#[0-9a-f]{6}$/i.test(e.color) &&
        180 >= Math.abs(e.rotation) &&
        t > 0 &&
        t <= 10 &&
        1e6 >= Math.abs(e.letter_spacing ?? 0) &&
        1e6 >= Math.abs(e.word_spacing ?? 0) &&
        (null == n || (n > 0 && n <= 1e6))
      )
    }
    n.d(
      t,
      {},
      {
        BS: s,
        DN: function (e) {
          let t = new Set(
            e
              .filter((e) => l(e))
              .sort((e, t) => t.updatedAt - e.updatedAt)
              .slice(0, 100)
              .map((e) => e.id),
          )
          for (let n of e) l(n) || t.add(n.id)
          let n = new Map(e.map((e) => [e.id, e]))
          for (let e of t) {
            let i = n.get(e)?.parentOperationId
            null != i && t.add(i)
          }
          return e.filter((e) => t.has(e.id))
        },
        F_: d,
        KZ: o,
        Lk: function (e, t, n) {
          let i = e.group?.id === n ? e.group : null
          return i?.before.items === t
            ? i.before
            : r()(e.items, t)
              ? e
              : ((0, a.Sp)(e.items, t, e.initial),
                {
                  ...e,
                  items: t,
                  past: null != i ? e.past : [...e.past, e.items].slice(-100),
                  future: [],
                  group: null == n ? null : (i ?? { id: n, before: { ...e, group: null } }),
                })
        },
        MU: function (e) {
          return { initial: e, items: e, past: [], future: [], group: null }
        },
        _i: function (e) {
          let t = e.past.at(-1)
          return null == t
            ? e
            : { ...e, items: t, past: e.past.slice(0, -1), future: [e.items, ...e.future], group: null }
        },
        e8: function (e, t, n) {
          let i = [],
            a = (e) => "text" !== e.kind || "editable" !== e.rendering.mode,
            l = t.filter(a),
            c = e.content.items.filter(a)
          for (let a of ((new Set(t.map((e) => e.id)).size !== t.length ||
            t.length - l.length > 64 ||
            !r()(
              l.map((e) => e.id),
              c.map((e) => e.id),
            )) &&
            i.push({ itemId: null, reason: "structure" }),
          t)) {
            if ("text" !== a.kind || "editable" !== a.rendering.mode) {
              let e = c.find((e) => e.id === a.id)
              r()(e, a) || i.push({ itemId: a.id, reason: "structure" })
              continue
            }
            let { bbox: t, rendering: l } = a
            ;(o(t) || i.push({ itemId: a.id, reason: "bounds" }),
              (Array.from(a.text).length > 4e3 || !d(l)) && i.push({ itemId: a.id, reason: "format" }))
            let u = n.fonts.find((e) => e.id === l.font_id)
            null == u
              ? i.push({ itemId: a.id, reason: "font" })
              : s(a.text, u, e).length && i.push({ itemId: a.id, reason: "characters" })
          }
          return i
        },
        qd: function (e) {
          return !r()(e.initial, e.items)
        },
        yz: function (e) {
          let t = e.future[0]
          return null == t ? e : { ...e, items: t, past: [...e.past, e.items], future: e.future.slice(1), group: null }
        },
      },
    )
  },
  BgSw(e, t, n) {
    var i = n("ePe7")
    class r extends Error {
      code
      detail
      blockId
      constructor(e, t, n) {
        ;(super(`Image text preview: ${e}`),
          (this.code = e),
          (this.name = "ImageTextRenderError"),
          Object.defineProperty(this, "detail", { value: t, enumerable: !1 }),
          Object.defineProperty(this, "blockId", { value: n, enumerable: !1 }))
      }
    }
    let a = { M: 2, L: 2, Q: 4, C: 6 },
      l = ["left", "center", "right"],
      o = { left: 0, center: 0.5, right: 1 },
      s = new WeakMap(),
      d = new WeakMap(),
      c = new WeakMap(),
      u = { baseline: null, upper_contour: null, line_layout: null, render_width: null, start_offset: 0 }
    function g(e, t) {
      let n = e.items.find((e) => e.id === t)
      if (n?.kind === "text" && "editable" === n.rendering.mode) return { layer: n, rendering: n.rendering }
    }
    function m(e, t) {
      let n = g(e, t)
      if (null == n) throw new r("geometry", "Missing text block")
      return n
    }
    function h(e) {
      return (
        null == e.rendering.baseline &&
        null == e.rendering.line_layout &&
        null == e.rendering.upper_contour &&
        null == e.rendering.render_width &&
        (e.rendering.start_offset ?? 0) === 0
      )
    }
    function f(e) {
      return 1e-12 > Math.abs(e) ? 0 : 1e-12 > Math.abs(e - 1) ? 1 : e
    }
    function p(e, t, n) {
      return x(e)
        .map(({ command: e, values: i }) => `${e} ${i.map((e, i) => f(e + (i % 2 == 0 ? t : n))).join(" ")}`)
        .join(" ")
    }
    function x(e) {
      if (0 === e.length || e.length > 8192) throw new r("geometry", "Invalid baseline length")
      let t = [],
        n = 0
      for (let i of e.matchAll(/[MLQC]|[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?/g)) {
        if ("" !== e.slice(n, i.index).replace(/[\s,]/g, "")) throw new r("geometry", "Unsupported baseline command")
        ;(t.push(i[0]), (n = i.index + i[0].length))
      }
      if ("" !== e.slice(n).replace(/[\s,]/g, "") || "M" !== t[0]) throw new r("geometry", "Invalid baseline")
      let i = [],
        l = "M",
        o = 0
      for (; o < t.length;) {
        let e = t[o]
        if ((("M" === e || "L" === e || "Q" === e || "C" === e) && ((l = e), o++), "M" === l && i.length > 0))
          throw new r("geometry", "Discontinuous baseline")
        let n = t.slice(o, o + a[l]).map(Number)
        if (n.length !== a[l] || n.some((e) => !Number.isFinite(e)))
          throw new r("geometry", "Invalid baseline coordinates")
        ;(i.push({ command: l, values: n }), (o += a[l]), "M" === l && (l = "L"))
      }
      if (i.length < 2) throw new r("geometry", "Empty baseline")
      let s = i[0].values
      if (
        i.some(({ command: e }) => "Q" === e || "C" === e) &&
        i.some(({ values: e }) => e.some((e, t) => Math.abs(e - s[t % 2]) > 2e6))
      )
        throw new r("geometry", "Invalid baseline coordinates")
      return i
    }
    function v(e, t, n) {
      let i = x(e),
        r = { x: i[0].values[0] * t, y: i[0].values[1] * n },
        a = r
      return {
        start: r,
        segments: i.slice(1).map((e) => {
          let i = [a]
          for (let r = 0; r < e.values.length; r += 2) i.push({ x: e.values[r] * t, y: e.values[r + 1] * n })
          return ((a = i[i.length - 1]), { points: i })
        }),
      }
    }
    function y(e, t, n) {
      return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n }
    }
    function b(e, t) {
      return { x: e.x - t.x, y: e.y - t.y }
    }
    function w(e, t) {
      return e.x * t.y - e.y * t.x
    }
    function I(e) {
      return Math.hypot(e.x, e.y)
    }
    function M(e, t) {
      let n = e.points
      for (; n.length > 1;) n = n.slice(0, -1).map((e, i) => y(e, n[i + 1], t))
      return n[0]
    }
    function j(e, t, n, i, a) {
      let l = v(e, n, i),
        o = l.segments[l.segments.length - 1],
        s = o.points[o.points.length - 1]
      if (null != t) {
        let e,
          o = v(t, n, i)
        if (
          l.segments.length !== o.segments.length ||
          l.segments.some((e, t) => e.points.length !== o.segments[t].points.length)
        )
          throw new r("geometry", "Mismatched contours")
        let d = b(s, l.start),
          c = b(l.start, o.start),
          u = w(d, c),
          g = I(d)
        if (!(u > 1e-8 && g > 1e-8 && a > 0)) throw new r("geometry", "Degenerate contour frame")
        let m = (e) => w(b(e, l.start), c) / u,
          h = -1 / 0
        return (
          l.segments.forEach((e, t) =>
            e.points.forEach((e, n) => {
              let i = o.segments[t].points[n],
                a = m(e),
                l = b(e, i)
              if (a < h - 1e-6 || a > 1 + 1e-6 || Math.abs(w(l, c) / u) > 1e-5 || w(d, l) / u <= 1e-5)
                throw new r("geometry", "Invalid paired contour frame")
              h = a
            }),
          ),
          {
            length: g,
            affine:
              1 === l.segments.length &&
              2 === l.segments[0].points.length &&
              1e-6 > I(b(c, b(s, o.segments[0].points[1]))),
            map(t, n) {
              let { bottom: i, upper: s } = ((t) => {
                if (e?.distance === t) return e
                let n = t / g,
                  i = Math.max(
                    0,
                    Math.min(
                      l.segments.length - 1,
                      l.segments.findIndex((e) => m(e.points[e.points.length - 1]) >= n),
                    ),
                  ),
                  a = n > 1 ? l.segments.length - 1 : i,
                  s = l.segments[a],
                  d = o.segments[a],
                  c = 0,
                  u = 1
                for (let e = 0; e < 25; e++) {
                  let e = (c + u) / 2
                  m(M(s, e)) < n ? (c = e) : (u = e)
                }
                let h = (c + u) / 2,
                  f = M(s, h),
                  p = M(d, h)
                if (n < 0 || n > 1) {
                  let e = n < 0 ? 0 : 1,
                    t = n < 0 ? 0.001 : 0.999,
                    i = M(s, e),
                    a = M(s, t),
                    l = m(i) - m(a)
                  if (1e-12 > Math.abs(l)) throw new r("geometry", "Degenerate contour endpoint")
                  let o = (n - m(i)) / l
                  ;((f = y(i, a, -o)), (p = y(M(d, e), M(d, t), -o)))
                }
                return (e = { distance: t, bottom: f, upper: p })
              })(t)
              return { x: i.x + (n / a) * (i.x - s.x), y: i.y + (n / a) * (i.y - s.y) }
            },
          }
        )
      }
      let d = [l.start],
        c = (e, t, n, i) => {
          let r = M(e, t),
            a = M(e, n),
            l = M(e, (t + n) / 2),
            o = M(e, (3 * t + n) / 4),
            s = M(e, (t + 3 * n) / 4),
            u = Math.max(I(b(l, y(r, a, 0.5))), I(b(o, y(r, a, 0.25))), I(b(s, y(r, a, 0.75))))
          i < 14 && (u > 0.1 || I(b(a, r)) > 16)
            ? (c(e, t, (t + n) / 2, i + 1), c(e, (t + n) / 2, n, i + 1))
            : I(b(a, d[d.length - 1])) > 1e-8 && d.push(a)
        }
      for (let e of l.segments) {
        let t = e.points[1]
        2 === e.points.length ? I(b(t, d[d.length - 1])) > 1e-8 && d.push(t) : c(e, 0, 1, 0)
      }
      let u = [0]
      for (let e = 1; e < d.length; e++) u.push(u[e - 1] + I(b(d[e], d[e - 1])))
      let g = u[u.length - 1]
      if (!(g > 1e-8) || !Number.isFinite(g)) throw new r("geometry", "Invalid baseline length")
      return {
        length: g,
        affine: 1 === l.segments.length && 2 === l.segments[0].points.length,
        map(e, t) {
          let n = 0,
            i = u.length - 1
          for (; i - n > 1;) {
            let t = Math.floor((n + i) / 2)
            u[t] <= e ? (n = t) : (i = t)
          }
          e > g && (n = u.length - 2)
          let a = u[n + 1] - u[n]
          if (!(a > 1e-8)) throw new r("geometry", "Degenerate baseline segment")
          let l = { x: (d[n + 1].x - d[n].x) / a, y: (d[n + 1].y - d[n].y) / a }
          return { x: d[n].x + l.x * (e - u[n]) - l.y * t, y: d[n].y + l.y * (e - u[n]) + l.x * t }
        },
      }
    }
    function C(e, t, n) {
      return Math.min(n, 16384 / e, 16384 / t, Math.sqrt(0x1000000 / (e * t)))
    }
    function E(e, t) {
      if (!(e > 0 && t > 0 && e <= 16384 && t <= 16384 && Math.ceil(e) * Math.ceil(t) <= 0x1000000)) throw new r("size")
    }
    function S(e, t) {
      E(e, t)
      let n = document.createElement("canvas")
      return ((n.width = Math.ceil(e)), (n.height = Math.ceil(t)), n)
    }
    function T(e) {
      let t = e.getContext("2d")
      if (null == t) throw new r("canvas")
      return t
    }
    function _(e, t, n, i, a, l, o, s) {
      let d = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y)
      if (1e-12 > Math.abs(d)) return
      let c = (e, t, r) => [
          (e * (i.y - a.y) + t * (a.y - n.y) + r * (n.y - i.y)) / d,
          (e * (a.x - i.x) + t * (n.x - a.x) + r * (i.x - n.x)) / d,
          (e * (i.x * a.y - a.x * i.y) + t * (a.x * n.y - n.x * a.y) + r * (n.x * i.y - i.x * n.y)) / d,
        ],
        u = c(l.x, o.x, s.x),
        g = c(l.y, o.y, s.y)
      if (![...u, ...g].every(Number.isFinite)) throw new r("geometry")
      ;(e.save(),
        e.beginPath(),
        e.moveTo(l.x, l.y),
        e.lineTo(o.x, o.y),
        e.lineTo(s.x, s.y),
        e.closePath(),
        e.clip(),
        e.transform(u[0], g[0], u[1], g[1], u[2], g[2]))
      let m = Math.max(0, Math.min(n.x, i.x, a.x) - 2),
        h = Math.min(t.width, Math.max(n.x, i.x, a.x) + 2) - m
      ;(e.drawImage(t, m, 0, h, t.height, m, 0, h, t.height), e.restore())
    }
    function A(e, t, n) {
      let i = t.font_size,
        a = t.horizontal_scale ?? 1
      if (!(i > 0 && a > 0) || !Number.isFinite(i * a)) throw new r("size")
      let l = T(S(1, 1)),
        o = (e) => {
          if (
            ((e.font = `${i}px ${JSON.stringify(n.family)}`),
            (e.textBaseline = "alphabetic"),
            (e.textAlign = "left"),
            (e.direction = "ltr"),
            (e.fontKerning = "normal"),
            ((t.letter_spacing ?? 0) !== 0 && !("letterSpacing" in e)) ||
              ((t.word_spacing ?? 0) !== 0 && !("wordSpacing" in e)))
          )
            throw new r("canvas", "Text spacing is unavailable")
          ;((e.letterSpacing = `${(t.letter_spacing ?? 0) / a}px`), (e.wordSpacing = `${(t.word_spacing ?? 0) / a}px`))
        }
      return (o(l), { metrics: l.measureText(e), probe: l, configure: o })
    }
    function k(e, t, n, i, r, a, l) {
      let o = t.rendering.font_size,
        s = t.rendering.horizontal_scale ?? 1,
        { metrics: d, probe: c, configure: u } = A(e, t.rendering, n),
        g = t.layer.bbox,
        m = h(t) ? z(g.width * i, g.height * r) : null,
        f = l ?? (d.actualBoundingBoxAscent || 0.8 * o),
        p = g.y + (f + (m?.top ?? 0)) / r,
        x =
          (h(t) ? null : t.rendering.baseline) ??
          `M ${g.x + (m?.left ?? 0) / i} ${p} L ${g.x + g.width - (m?.right ?? 0) / i} ${p}`,
        y = j(x, h(t) ? null : (t.rendering.upper_contour ?? null), i, r, o),
        w = h(t) ? R(d, s) : null,
        M = t.layer.text.includes("\n") || null != w ? null : t.rendering.render_width,
        C = null != M && d.width > 0 ? M / d.width : s,
        E = null == w ? d.width * C : w.right - w.left,
        S = 0
      "center" === t.rendering.align ? (S = (y.length - E) / 2) : "right" === t.rendering.align && (S = y.length - E)
      let T = null == w ? (t.rendering.start_offset ?? 0) : -w.left,
        _ = T + S,
        k = v(x, i, r),
        P = k.segments[k.segments.length - 1],
        N = b(P.points[P.points.length - 1], k.start),
        L = I(N),
        D = a * (t.rendering.line_height ?? 1.2 * o)
      return {
        baseline: x,
        renderWidth: E,
        startOffset: T,
        metrics: d,
        probe: c,
        configure: u,
        map: (e, t) => {
          let n = y.map(_ + e * C, t)
          return { x: n.x - (D * N.y) / L, y: n.y + (D * N.x) / L }
        },
        affine: y.affine,
      }
    }
    function P(e, t) {
      let n = g(e, t),
        i = e.assets.fonts.find((e) => e.id === n?.rendering.font_id)
      if (null == n || null == i || "" === n.layer.text.trim()) return null
      let { width: r, height: a } = e.snapshot.content,
        l = L(n, i, r, a)
      if (1 !== l.length) return null
      let o = k(l[0].text.normalize("NFC"), n, i, r, a, 0, l[0].ascent)
      return o.renderWidth > 0 && o.renderWidth <= 1e6 && 1e6 >= Math.abs(o.startOffset)
        ? { baseline: o.baseline, render_width: o.renderWidth, start_offset: o.startOffset }
        : null
    }
    function R(e, t) {
      return { left: Math.min(0, -e.actualBoundingBoxLeft * t), right: Math.max(e.width, e.actualBoundingBoxRight) * t }
    }
    function N(e, t, n, i, a) {
      if (null == e.baseline) return a({ length: t.bbox.width * n, x: (e) => t.bbox.x * n + e })
      try {
        let t = v(e.baseline, n, i)
        for (let { points: e } of t.segments)
          for (let t = 1; t < e.length; t++) {
            let n = b(e[t], e[t - 1])
            if (n.x < 0 || Math.abs(n.y) > n.x / 4) return null
          }
        let r = t.segments[0]
        if (null == e.upper_contour && 1 === t.segments.length && 2 === r.points.length) {
          let e = b(r.points[1], t.start),
            n = I(e)
          return 0 === n ? null : a({ length: n, x: (i) => t.start.x + (i * e.x) / n })
        }
        let l = j(e.baseline, e.upper_contour ?? null, n, i, e.font_size)
        return a({ length: l.length, x: (e) => l.map(e, 0).x })
      } catch (e) {
        if (!(e instanceof r)) throw e
        return null
      }
    }
    function z(e, t) {
      return { top: 0, right: 0, bottom: 0, left: 0 }
    }
    function L(e, t, n, i, r) {
      let a = 0,
        l = e.layer.text.split("\n").map((e) => {
          let t = a
          return ((a += e.length + 1), { text: e, start: t, end: t + e.length })
        })
      if (!h(e)) return l
      let o = z(e.layer.bbox.width * n, e.layer.bbox.height * i),
        s = e.layer.bbox.width * n - o.left - o.right,
        d = r ?? A("", e.rendering, t).probe,
        c =
          d.measureText(e.layer.text.replaceAll("\n", "").normalize("NFC")).actualBoundingBoxAscent ||
          0.8 * e.rendering.font_size,
        u = (t) => {
          let n = R(d.measureText(t.trimEnd().normalize("NFC")), e.rendering.horizontal_scale ?? 1)
          return n.right - n.left <= s
        },
        g = new Intl.Segmenter(void 0, { granularity: "grapheme" }),
        m = []
      for (let e of l) {
        let t = 0,
          n = (n) => {
            ;(m.push({ text: e.text.slice(t, n).trimEnd(), start: e.start + t, end: e.start + n, ascent: c }), (t = n))
          }
        for (let i of e.text.matchAll(/\S+\s*|\s+/gu)) {
          let r = i.index + i[0].length
          if (!u(e.text.slice(t, r))) {
            if (i.index > t && (n(i.index), u(i[0]))) continue
            for (let r of g.segment(i[0])) {
              let a = i.index + r.index
              a > t && !u(e.text.slice(t, a + r.segment.length)) && n(a)
            }
          }
        }
        n(e.text.length)
      }
      return m
    }
    function D(e, t, n) {
      let i = h(e) ? null : e.rendering.line_layout?.[n]
      return null == i
        ? { block: e, index: n }
        : {
            block: {
              layer: { ...e.layer, text: t },
              rendering: {
                ...e.rendering,
                ...i,
                upper_contour: i.upper_contour ?? null,
                align: "left",
                line_height: null,
              },
            },
            index: 0,
          }
    }
    function O(e, t, n, i, r, a) {
      let l = R(t, e.rendering.horizontal_scale ?? 1),
        o =
          n * (e.rendering.line_height ?? 1.2 * e.rendering.font_size) +
          (i ?? t.actualBoundingBoxAscent) +
          t.actualBoundingBoxDescent
      return l.right - l.left <= r + 0.01 && o <= a + 0.01
    }
    function B(e, t, n, i, r) {
      let a = g(e, n),
        l = t.find((e) => e.id === a?.rendering.font_id)
      if (null == a || null == l) return null
      let o = { ...a, layer: { ...a.layer, text: i }, rendering: { ...a.rendering, ...u } },
        { width: s, height: d } = e.snapshot.content,
        { probe: c } = k("", o, l, s, d, 0),
        m = Math.ceil(
          Math.max(
            ...L(o, l, s, d).map(({ text: e, ascent: t }, n) => {
              let i = c.measureText(e.normalize("NFC"))
              return (
                n * (o.rendering.line_height ?? 1.2 * o.rendering.font_size) +
                (t ?? i.actualBoundingBoxAscent) +
                Math.max(i.actualBoundingBoxDescent, 0.15 * o.rendering.font_size)
              )
            }),
          ),
        ),
        h = a.layer.bbox.x * s,
        p = a.layer.bbox.y * d,
        x = a.layer.bbox.width * s,
        v = a.layer.bbox.height * d,
        y = (a.rendering.rotation * Math.PI) / 180,
        b = -Math.sin(y) / 2,
        w = (Math.cos(y) - 1) / 2,
        I = "grow" === r ? Math.max(0, m - v) : m - v
      return {
        x: f((h + b * I) / s) * s,
        y: f((p + w * I) / d) * d,
        width: x,
        height: v + I,
        rotation: a.rendering.rotation,
      }
    }
    async function U(e, t) {
      let n = $(e)
      if (null != n) throw n
      let i = e.snapshot.content,
        { backgroundUrl: a, fonts: l } = e.assets,
        o = s.get(e.assets),
        d = o?.snapshot === e.snapshot && o.background.url === a,
        c =
          null != t &&
          d &&
          o.split?.id === t &&
          o.items.length === e.items.length &&
          e.items.every((e, n) => (e.id === t ? o.items[n].id === e.id : o.items[n] === e))
            ? o.split
            : null,
        u = new Map(c?.pasteboardLayerBounds),
        g = { left: 0, top: 0, width: i.width, height: i.height },
        m = c?.base ?? S(i.width, i.height),
        h = T(m),
        f = d ? o.background : null
      if (null == f) {
        let e = new Image()
        ;((e.crossOrigin = "anonymous"), (e.src = a))
        try {
          await e.decode()
        } catch {
          throw new r("background")
        }
        if (e.naturalWidth !== i.width || e.naturalHeight !== i.height)
          throw new r("background", "Background dimensions do not match")
        f = { url: a, image: e }
      }
      null == c && h.drawImage(f.image, 0, 0, i.width, i.height)
      let p = S(i.width, i.height),
        x = T(p),
        v = null,
        y = null,
        b = c?.foreground ?? null
      for (let n of e.items) {
        if ("text" !== n.kind || "editable" !== n.rendering.mode || (null != c && n.id !== t)) continue
        ;(p === v && ((x = T((p = S(i.width, i.height)))), (h = T((b = S(i.width, i.height))))),
          x.clearRect(0, 0, i.width, i.height))
        let e = F(x, { layer: n, rendering: n.rendering }, l, i, g, !0)
        ;(null != e && (e.left < 0 || e.top < 0 || e.right > i.width || e.bottom > i.height)
          ? u.set(n.id, e)
          : u.delete(n.id),
          n.id === t && ((v = p), null != e && e.left < e.right && e.top < e.bottom && (y = e)),
          p !== v && h.drawImage(p, 0, 0))
      }
      return { background: f, base: m, selectedMask: v, selectedInkBounds: y, foreground: b, pasteboardLayerBounds: u }
    }
    function F(e, t, n, i, a, l) {
      let { layer: o } = t,
        s = n.find((e) => e.id === t.rendering.font_id)
      if (null == s || !document.fonts.check(`${t.rendering.font_size}px ${JSON.stringify(s.family)}`))
        throw new r("font", t.rendering.font_id)
      e.globalCompositeOperation = "source-over"
      let d = {
          x: (t.layer.bbox.x + t.layer.bbox.width / 2) * i.width,
          y: (t.layer.bbox.y + t.layer.bbox.height / 2) * i.height,
        },
        c = (t.rendering.rotation * Math.PI) / 180,
        u = Math.sin(c),
        g = Math.cos(c),
        m = (e) =>
          0 === c ? e : { x: d.x + (e.x - d.x) * g - (e.y - d.y) * u, y: d.y + (e.x - d.x) * u + (e.y - d.y) * g }
      ;(e.save(), e.translate(d.x, d.y), e.rotate(c), e.translate(-d.x, -d.y))
      let f = L(t, s, i.width, i.height)
      if (h(t))
        for (let [e, n] of f.entries()) {
          let a = k(n.text.normalize("NFC"), t, s, i.width, i.height, e, n.ascent)
          if (!O(t, a.metrics, e, n.ascent, t.layer.bbox.width * i.width, t.layer.bbox.height * i.height))
            throw new r("geometry", void 0, t.layer.id)
        }
      if (!h(t) && null != t.rendering.line_layout && t.rendering.line_layout.length !== f.length)
        throw new r("geometry", "Line placements no longer match text", o.id)
      let p = l ? { left: 1 / 0, top: 1 / 0, right: -1 / 0, bottom: -1 / 0 } : void 0,
        x =
          null == p
            ? void 0
            : (e) => {
                let { x: t, y: n } = m(e)
                ;((p.left = Math.min(p.left, t)),
                  (p.top = Math.min(p.top, n)),
                  (p.right = Math.max(p.right, t)),
                  (p.bottom = Math.max(p.bottom, n)))
              }
      ;(f.forEach(({ text: n, ascent: r }, a) => {
        let l = n.normalize("NFC"),
          o = D(t, l, a)
        !(function (e, t, n, i, r, a, l, o, s) {
          if ("" === t.trim()) return
          let d = k(t, n, i, r, a, l, o),
            { metrics: c } = d,
            {
              left: u,
              top: g,
              right: m,
              bottom: h,
            } = {
              left: Math.floor(-c.actualBoundingBoxLeft) - 3,
              top: Math.floor(-c.actualBoundingBoxAscent) - 3,
              right: Math.ceil(c.actualBoundingBoxRight) + 3,
              bottom: Math.ceil(c.actualBoundingBoxDescent) + 3,
            },
            f = m - u,
            p = h - g,
            x = C(f, p, 2)
          if (d.affine && x < 2) {
            let n = d.map(0, 0),
              i = d.map(1, 0),
              r = d.map(0, 1)
            ;(e.save(),
              e.transform(i.x - n.x, i.y - n.y, r.x - n.x, r.y - n.y, n.x, n.y),
              d.configure(e),
              (e.fillStyle = "#ffffff"),
              e.fillText(t, 0, 0),
              e.restore(),
              null != s && (s(d.map(u, g)), s(d.map(m, g)), s(d.map(u, h)), s(d.map(m, h))))
            return
          }
          let v = S(Math.max(1, Math.floor(f * x)), Math.max(1, Math.floor(p * x))),
            y = v.width / f,
            b = v.height / p,
            w = T(v)
          ;(w.scale(y, b), d.configure(w), (w.fillStyle = "#ffffff"), w.fillText(t, -u, -g))
          let I = (e, t) => d.map(u + e / y, g + t / b)
          if (d.affine) {
            let t = I(0, 0),
              n = I(v.width, 0),
              i = I(0, v.height)
            ;(e.save(),
              e.transform(
                (n.x - t.x) / v.width,
                (n.y - t.y) / v.width,
                (i.x - t.x) / v.height,
                (i.y - t.y) / v.height,
                t.x,
                t.y,
              ),
              e.drawImage(v, 0, 0),
              e.restore(),
              null != s && (s(t), s(n), s(i), s(I(v.width, v.height))))
            return
          }
          let M = Math.max(1, (Math.max(1, Math.min(8, Math.floor(4 / (n.rendering.horizontal_scale ?? 1)))) * y) / 2),
            j = I(0, 0),
            E = I(0, v.height)
          ;(s?.(j), s?.(E))
          for (let t = 0; t < v.width; t += M) {
            let n = Math.min(v.width, t + M),
              i = { x: t, y: 0 },
              r = { x: n, y: 0 },
              a = { x: n, y: v.height },
              l = { x: t, y: v.height },
              o = I(r.x, r.y),
              d = I(a.x, a.y)
            ;(s?.(o), s?.(d), _(e, v, i, r, a, j, o, d), _(e, v, i, a, l, j, d, E), (j = o), (E = d))
          }
        })(e, l, o.block, s, i.width, i.height, o.index, r, x)
      }),
        e.restore(),
        (e.globalCompositeOperation = "source-in"))
      let v = t.rendering.fill_gradient
      if (null != v) {
        let n = t.layer.bbox,
          r = m({ x: (n.x + v.start.x * n.width) * i.width, y: (n.y + v.start.y * n.height) * i.height }),
          a = m({ x: (n.x + v.end.x * n.width) * i.width, y: (n.y + v.end.y * n.height) * i.height }),
          l = e.createLinearGradient(r.x, r.y, a.x, a.y)
        ;(v.stops.forEach((e) => l.addColorStop(e.offset, e.color)), (e.fillStyle = l))
      } else e.fillStyle = t.rendering.color
      return (e.fillRect(a.left, a.top, a.width, a.height), p)
    }
    function $(e) {
      let { snapshot: t, items: n, assets: a } = e
      for (let e of n) {
        if ("text" !== e.kind || "editable" !== e.rendering.mode) continue
        let { bbox: n, rendering: l, text: o } = e,
          s = (e) =>
            (0, i.F_)(e) &&
            1e6 >= Math.abs(e.start_offset ?? 0) &&
            (null == e.render_width || (e.render_width > 0 && e.render_width <= 1e6))
        if (!s(l) || l.line_layout?.some((e) => null != e && !s({ ...l, ...e }))) return new r("size", void 0, e.id)
        if (Array.from(o).length > 4e3 || !(0, i.KZ)(n)) return new r("geometry", void 0, e.id)
        let d = a.fonts.find((e) => e.id === l.font_id)
        if (null == d) return new r("font", void 0, e.id)
        let c = (0, i.BS)(o, d, t)
        if (c.length > 0) return new r("glyphs", c.slice(0, 12).join(" "), e.id)
      }
      return null
    }
    n.d(
      t,
      {},
      {
        Cb: function (e, t, n) {
          let { layer: i, rendering: r } = m(e, t),
            a = n.x / e.snapshot.content.width,
            l = n.y / e.snapshot.content.height,
            o = (e) => (null == e ? null : p(e, a, l))
          return {
            ...i,
            bbox: { ...i.bbox, x: f(i.bbox.x + a), y: f(i.bbox.y + l) },
            rendering: {
              ...r,
              baseline: o(r.baseline),
              upper_contour: o(r.upper_contour),
              line_layout:
                r.line_layout?.map((e) =>
                  null == e ? null : { ...e, baseline: p(e.baseline, a, l), upper_contour: o(e.upper_contour) },
                ) ?? null,
            },
          }
        },
        IR: function (e, t, n) {
          let i = e.rendering
          if ("editable" !== i.mode) return "left"
          let { align: r, line_layout: a } = i,
            s = e.bbox.width * t
          if (null == a && (null == i.render_width || e.text.includes("\n"))) return r
          let d = a ?? [i],
            c = e.text.split("\n")
          if (d.length !== c.length) return r
          let u = Math.max(2, Math.min(0.025 * s, 0.12 * i.font_size))
          if (!d.some((e, t) => "" !== c[t].trim() && e?.render_width != null && Math.abs(s - e.render_width) >= 4 * u))
            return r
          let g = { left: 0, center: 0, right: 0 },
            m = null == a ? o[r] : 0
          for (let [a, u] of d.entries()) {
            if (!c[a].trim()) continue
            let d = u?.render_width
            if (null == u || null == d) return r
            let h = N(u, e, t, n, (n) => {
              let r = (u.start_offset ?? i.start_offset ?? 0) + m * (n.length - d)
              return { start: n.x(r) - e.bbox.x * t, end: n.x(r + d) - e.bbox.x * t }
            })
            if (null == h) return r
            for (let e of l) {
              let t = o[e],
                n = Math.abs(h.start + t * (h.end - h.start) - t * s)
              g[e] = Math.max(g[e], n)
            }
          }
          let h = l.filter((e) => g[e] <= u)
          return 1 === h.length ? h[0] : r
        },
        N$: u,
        Tc: function (e) {
          return new Promise((t, n) => {
            try {
              e.toBlob((e) => (null == e ? n(new r("canvas")) : t(e)), "image/png")
            } catch {
              n(new r("canvas"))
            }
          })
        },
        XP: function (e, t, n, i) {
          return B(e, t, n, i, "grow")
        },
        Yo: z,
        Zo: r,
        e8: $,
        eB: function (e, t, n, i, r) {
          let a = d.get(e)
          if (null == a || i.width <= 0 || i.height <= 0 || n.width <= 0 || n.height <= 0)
            return void T(t).clearRect(0, 0, t.width, t.height)
          let l = C(i.width, i.height, r),
            o = Math.max(1, Math.floor(i.width * l)),
            s = Math.max(1, Math.floor(i.height * l))
          ;(E(o, s), t.width !== o && (t.width = o), t.height !== s && (t.height = s))
          let u = T(t)
          u.clearRect(0, 0, o, s)
          let { source: g, layerBounds: m } = a,
            h = g.snapshot.content,
            f = o / i.width,
            p = s / i.height,
            x = (n.width * f) / h.width,
            v = (n.height * p) / h.height,
            y = n.left * f,
            b = n.top * p,
            w = { left: -y / x, top: -b / v, width: o / x, height: s / v },
            I = g.items.filter((e) => {
              let t = m.get(e.id)
              if (null == t) return !1
              let n = Math.max(t.left, w.left),
                i = Math.max(t.top, w.top),
                r = Math.min(t.right, w.left + w.width),
                a = Math.min(t.bottom, w.top + w.height)
              return n < r && i < a && (n < 0 || i < 0 || r > h.width || a > h.height)
            })
          if (0 === I.length) return
          let M = c.get(t)
          ;(null == M || M.width !== o || M.height !== s) && ((M = S(o, s)), c.set(t, M))
          let j = T(M)
          for (let e of (j.setTransform(x, 0, 0, v, y, b), I))
            "text" === e.kind &&
              "editable" === e.rendering.mode &&
              (j.clearRect(w.left, w.top, w.width, w.height),
              F(j, { layer: e, rendering: e.rendering }, g.assets.fonts, h, w, !1),
              u.drawImage(M, 0, 0))
          u.clearRect(y, b, n.width * f, n.height * p)
        },
        getTextEditingFontCodePoints: function (e) {
          let t = new DataView(e),
            n = new Set()
          try {
            let e = t.getUint16(4),
              i = -1
            for (let n = 0; n < e; n++) {
              let e = 12 + 16 * n
              if ((0x636d6170 === t.getUint32(e) && (i = t.getUint32(e + 8)), 0x47535542 === t.getUint32(e))) {
                let n = t.getUint32(e + 8),
                  i = n + t.getUint16(n + 6),
                  a = t.getUint16(i)
                for (let e = 0; e < a; e++) {
                  let n = t.getUint32(i + 2 + 6 * e)
                  if ([0x6c696761, 0x636c6967, 0x646c6967, 0x686c6967, 0x63616c74].includes(n))
                    throw new r("font", "Unsupported optional font shaping")
                }
              }
            }
            if (i < 0) throw new r("font", "No Unicode character map")
            let a = t.getUint16(i + 2),
              l = !1
            for (let e = 0; e < a; e++) {
              let a = i + 4 + 8 * e,
                o = t.getUint16(a),
                s = t.getUint16(a + 2)
              if (0 !== o && (3 !== o || (1 !== s && 10 !== s))) continue
              let d = i + t.getUint32(a + 4),
                c = t.getUint16(d)
              if (12 === c) {
                l = !0
                let e = t.getUint32(d + 12)
                for (let i = 0; i < e; i++) {
                  let e = d + 16 + 12 * i,
                    a = t.getUint32(e),
                    l = t.getUint32(e + 4),
                    o = t.getUint32(e + 8)
                  if (l > 1114111 || l < a) throw new r("font", "Invalid Unicode range")
                  for (let e = a; e <= l; e++) o + e - a != 0 && n.add(e)
                }
              } else if (4 === c) {
                l = !0
                let e = t.getUint16(d + 6) / 2,
                  i = d + 14,
                  r = i + 2 * e + 2,
                  a = r + 2 * e,
                  o = a + 2 * e
                for (let l = 0; l < e; l++) {
                  let e = t.getUint16(r + 2 * l),
                    s = t.getUint16(i + 2 * l),
                    d = t.getInt16(a + 2 * l),
                    c = t.getUint16(o + 2 * l)
                  for (let i = e; i <= s && i < 65535; i++) {
                    let r = 0 === c ? i : t.getUint16(o + 2 * l + c + (i - e) * 2),
                      a = 0 === c || 0 !== r ? (((r + d) % 65536) + 65536) % 65536 : 0
                    0 !== a && n.add(i)
                  }
                }
              }
            }
            if (!l) throw new r("font", "Unsupported Unicode character map")
          } catch (e) {
            if (e instanceof r) throw e
            throw new r("font", "Invalid font character map")
          }
          return n
        },
        hF: function (e, t, n, i) {
          return B(e, t, n, i, "fit")
        },
        l5: function (e, t, n) {
          let i = g(e, n),
            r = t.find((e) => e.id === i?.rendering.font_id)
          if (null == i || null == r) return []
          let a = {
              x: (i.layer.bbox.x + i.layer.bbox.width / 2) * e.snapshot.content.width,
              y: (i.layer.bbox.y + i.layer.bbox.height / 2) * e.snapshot.content.height,
            },
            l = (i.rendering.rotation * Math.PI) / 180,
            o = (e) => ({
              x: a.x + (e.x - a.x) * Math.cos(l) - (e.y - a.y) * Math.sin(l),
              y: a.y + (e.x - a.x) * Math.sin(l) + (e.y - a.y) * Math.cos(l),
            }),
            s = new Intl.Segmenter(void 0, { granularity: "grapheme" }),
            d = document.createElement("div")
          ;(d.setAttribute("aria-hidden", "true"),
            (d.style.cssText =
              "all:initial;position:fixed;left:0;top:0;width:0;height:0;overflow:clip;visibility:hidden;pointer-events:none;contain:strict"))
          let c = L(i, r, e.snapshot.content.width, e.snapshot.content.height).map(
            ({ text: t, start: n, end: a, ascent: l }, o) => {
              let c = t.normalize("NFC"),
                u = D(i, c, o),
                g = k(c, u.block, r, e.snapshot.content.width, e.snapshot.content.height, u.index, l),
                m = document.createElement("span")
              Object.assign(m.style, {
                all: "initial",
                display: "block",
                width: "max-content",
                whiteSpace: "pre",
                visibility: "hidden",
                direction: "ltr",
                font: g.probe.font,
                fontKerning: g.probe.fontKerning,
                letterSpacing: g.probe.letterSpacing,
                wordSpacing: g.probe.wordSpacing,
              })
              let h = document.createTextNode(c)
              ;(m.append(h), d.append(m))
              let f = 0,
                p = Array.from(s.segment(i.layer.text.slice(n, a)), ({ index: e, segment: t }) => {
                  let i = { offset: n + e, index: Math.min(f, c.length) }
                  return ((f += t.normalize("NFC").length), i)
                })
              p.push({ offset: a, index: c.length })
              let x = g.metrics.actualBoundingBoxAscent || 0.8 * u.block.rendering.font_size,
                v = Math.max(g.metrics.actualBoundingBoxDescent, 0.15 * u.block.rendering.font_size)
              return { start: n, end: a, shaped: c, span: m, node: h, positions: p, line: g, ascent: x, descent: v }
            },
          )
          document.body.append(d)
          try {
            let e = document.createRange()
            return c.map(
              ({ start: t, end: n, shaped: i, span: r, node: a, positions: l, line: s, ascent: d, descent: c }) => {
                let u = r.getBoundingClientRect(),
                  g = l.map(({ offset: t, index: n }) => {
                    let r
                    return (
                      u.width > 0 && "function" == typeof e.getBoundingClientRect
                        ? (e.setStart(a, n),
                          e.collapse(!0),
                          (r = ((e.getBoundingClientRect().left - u.left) * s.metrics.width) / u.width))
                        : (r = s.probe.measureText(i.slice(0, n)).width),
                      { offset: t, top: o(s.map(r, -d)), bottom: o(s.map(r, c)) }
                    )
                  })
                return { start: t, end: n, stops: g }
              },
            )
          } finally {
            d.remove()
          }
        },
        mZ: function (e, t) {
          let n = t.rendering,
            i = e.assets.fonts.find((e) => "editable" === n.mode && e.id === n.font_id)
          if ("editable" !== n.mode || null == i) return !1
          if (!t.text) return !0
          let r = { layer: t, rendering: n },
            { width: a, height: l } = e.snapshot.content,
            o = t.bbox.width * a,
            s = t.bbox.height * l
          if (h(r)) {
            let { probe: e } = A("", n, i)
            return L(r, i, a, l, e).every((t, n) => O(r, e.measureText(t.text.normalize("NFC")), n, t.ascent, o, s))
          }
          let d = 1 / 0,
            c = 1 / 0,
            u = -1 / 0,
            g = -1 / 0
          for (let [e, t] of L(r, i, a, l).entries()) {
            let n = t.text.normalize("NFC"),
              m = D(r, n, e),
              h = k(n, m.block, i, a, l, m.index, t.ascent),
              f = Math.min(0, -h.metrics.actualBoundingBoxLeft),
              p = Math.max(h.metrics.width, h.metrics.actualBoundingBoxRight),
              x = h.affine ? 1 : Math.min(64, Math.max(2, Math.ceil(h.renderWidth / 8)))
            for (let e = 0; e <= x; e++) {
              let t = f + ((p - f) * e) / x,
                n = h.map(t, -h.metrics.actualBoundingBoxAscent),
                i = h.map(t, h.metrics.actualBoundingBoxDescent)
              ;((d = Math.min(d, n.x, i.x)),
                (u = Math.max(u, n.x, i.x)),
                (c = Math.min(c, n.y, i.y)),
                (g = Math.max(g, n.y, i.y)))
            }
            if (u - d > o + 0.01 || g - c > s + 0.01) return !1
          }
          return !0
        },
        qD: function (e, t, n, i, a) {
          let { layer: l, rendering: s } = m(e, t),
            { width: d, height: c } = e.snapshot.content,
            u = l.text.split("\n"),
            g = i.split("\n"),
            h = e.snapshot.content.items.find((e) => e.id === t),
            f = h?.kind === "text" ? h.text.split("\n") : [],
            y = n.font_size / s.font_size,
            w = (n.horizontal_scale ?? 1) / (s.horizontal_scale ?? 1),
            M = (n.letter_spacing ?? 0) - (s.letter_spacing ?? 0),
            j = (n.word_spacing ?? 0) - (s.word_spacing ?? 0),
            C = (n.line_height ?? 1.2 * n.font_size) - (s.line_height ?? 1.2 * s.font_size),
            E = a.previous !== a.next,
            S = o[a.next],
            T = l.bbox.width * d,
            _ = e.assets.fonts.find(({ id: e }) => e === s.font_id),
            k = e.assets.fonts.find(({ id: e }) => e === n.font_id),
            R = _ !== k || 1 !== y || 1 !== w || 0 !== M || 0 !== j,
            z = (e, t, n) => A(e.normalize("NFC"), t, n).metrics.width * (t.horizontal_scale ?? 1),
            L = (e, t, n) => {
              let i = e.render_width
              if (null == i || null == _ || null == k || (u[n] === g[n] && !R)) return i
              let r = f[n] || "M",
                a = z(u[n] || r, e, _),
                l = z(g[n] || r, t, k)
              return a > 0 && l > 0 ? (i * l) / a : null
            },
            D = s.baseline ?? (null == s.line_layout ? P(e, t)?.baseline : void 0),
            O = (e, t) =>
              1 === y || null == t
                ? t
                : (function (e, t, n) {
                    let i = x(e),
                      a = x(t)
                    if (i.length !== a.length) throw new r("geometry", "Mismatched contours")
                    return i
                      .map((e, t) => {
                        let i = a[t]
                        if (e.command !== i.command) throw new r("geometry", "Mismatched contours")
                        return `${e.command} ${e.values.map((e, t) => e + (i.values[t] - e) * n).join(" ")}`
                      })
                      .join(" ")
                  })(e, t, y),
            B = {
              ...n,
              align: a.next,
              ...(null != D ? { baseline: D, upper_contour: O(D, n.upper_contour) } : {}),
              ...(1 === g.length && null != s.render_width ? { render_width: L(s, n, 0) } : {}),
            },
            U = (e, t, n, i) => {
              let r = i ? o[s.align] : 0,
                m = i ? o[B.align] : 0
              if (null == _ || null == k || (!E && r === m && (S === m || (u[n] === g[n] && !R)))) return
              let h = !i || 1 === g.length,
                f = g[n] ? ((h ? t.render_width : null) ?? z(g[n], t, k)) : 0
              if (E) {
                let e = N(t, l, d, c, (e) => {
                  let t = l.bbox.x * d + S * T,
                    n = t - e.x(0) - S * f
                  for (let i = 0; i < 6; i++) {
                    let i = e.x(n),
                      r = t - (i + S * (e.x(n + f) - i))
                    if (0.01 > Math.abs(r)) return n - m * (e.length - f)
                    n += r
                  }
                  return null
                })
                if (null != e) return e
                if (i) return
              }
              let p = u[n] ? ((h ? e.render_width : null) ?? z(u[n], e, _)) : 0
              if (E) return (e.start_offset ?? 0) + S * (T - f) - o[a.previous] * (T - p)
              let x = (e.start_offset ?? 0) + (S - m) * (p - f)
              if (r !== m) {
                let t = N(e, l, d, c, (e) => e.length)
                null != t && (x += (r - m) * (t - p))
              }
              return x
            },
            F = s.line_layout?.findIndex((e) => null == e) ?? 0
          if (F >= 0) {
            let e = U(s, B, F, !0)
            null != e && (B.start_offset = e)
          }
          return (
            null == s.line_layout ||
              (B.line_layout = s.line_layout.map((e, t) => {
                if (null == e) return e
                let i = {
                  ...e,
                  ...(1 !== y ? { font_size: e.font_size * y } : {}),
                  ...(1 !== w ? { horizontal_scale: (e.horizontal_scale ?? s.horizontal_scale ?? 1) * w } : {}),
                  ...(0 !== M ? { letter_spacing: (e.letter_spacing ?? s.letter_spacing ?? 0) + M } : {}),
                  ...(0 !== j ? { word_spacing: (e.word_spacing ?? s.word_spacing ?? 0) + j } : {}),
                }
                ;(null != e.upper_contour && 1 !== y && (i.upper_contour = O(e.baseline, e.upper_contour)),
                  null != e.render_width && (i.render_width = L({ ...s, ...e }, { ...n, ...i }, t)))
                let r = U({ ...s, ...e }, { ...n, ...i, upper_contour: i.upper_contour ?? null }, t, !1)
                if ((null != r && (i.start_offset = r), 0 !== C && t > 0)) {
                  let n = v(e.baseline, d, c),
                    r = n.segments[n.segments.length - 1].points,
                    a = b(r[r.length - 1], n.start),
                    l = (t * C) / I(a),
                    o = (e) => p(e, (-a.y * l) / d, (a.x * l) / c)
                  ;((i.baseline = o(e.baseline)), null != i.upper_contour && (i.upper_contour = o(i.upper_contour)))
                }
                return i
              })),
            B
          )
        },
        rc: x,
        renderTextEditingCanvas: async function (e) {
          var t, n, i, r
          let a,
            l,
            o = s.get(e.assets)
          if (
            o?.snapshot === e.snapshot &&
            o.background.url === e.assets.backgroundUrl &&
            o.items.length === e.items.length
          ) {
            l = o.split?.id
            let t = !1
            for (let [n, i] of e.items.entries()) {
              let e = o.items[n]
              if (i !== e) {
                if (t || i.id !== e.id || "text" !== i.kind || "editable" !== i.rendering.mode) {
                  l = void 0
                  break
                }
                ;((l = i.id), (t = !0))
              }
            }
          }
          let { background: c, base: u, foreground: g, selectedMask: m, pasteboardLayerBounds: h } = await U(e, l),
            f = null != l && null != m ? { id: l, base: u, foreground: g, pasteboardLayerBounds: h } : null
          s.set(e.assets, { background: c, snapshot: e.snapshot, items: e.items, split: f })
          let p = null == m ? u : S(u.width, u.height)
          return (
            null != m &&
              ((t = p),
              (n = u),
              (i = m),
              (r = g),
              ((a = T(t)).globalCompositeOperation = "copy"),
              a.drawImage(n, 0, 0),
              (a.globalCompositeOperation = "source-over"),
              a.drawImage(i, 0, 0),
              null != r && a.drawImage(r, 0, 0)),
            h.size > 0 && d.set(p, { source: e, layerBounds: h }),
            p
          )
        },
        rv: P,
        ti: async function (e, t) {
          let n = s.get(e.assets),
            {
              background: i,
              base: a,
              foreground: l,
              pasteboardLayerBounds: o,
              selectedMask: c,
              selectedInkBounds: u,
            } = await U(e, t)
          if (null == c) throw new r("geometry", "Missing text block", t)
          if (o.size > 0) {
            let n = (t, n) => {
                null != t && n.some((e) => o.has(e.id)) && d.set(t, { source: { ...e, items: n }, layerBounds: o })
              },
              i = e.items.findIndex((e) => e.id === t)
            ;(n(a, e.items.slice(0, i)), n(l, e.items.slice(i + 1)))
          }
          let g =
            null == u
              ? null
              : (function (e, t, n, i, r) {
                  let a = Math.floor(i.left),
                    l = Math.floor(i.top),
                    o = Math.ceil(i.right) - a,
                    s = Math.ceil(i.bottom) - l,
                    d = { left: a, top: l, width: o, height: s },
                    c = C(o, s, 1),
                    u = S(Math.max(1, Math.floor(o * c)), Math.max(1, Math.floor(s * c))),
                    g = T(u)
                  if (r) {
                    let n = u.width / o,
                      i = u.height / s
                    ;(g.setTransform(n, 0, 0, i, -a * n, -l * i),
                      F(g, m(e, t), e.assets.fonts, e.snapshot.content, d, !1))
                  } else g.drawImage(n, -a, -l)
                  return { ...d, canvas: u }
                })(e, t, c, u, o.has(t))
          return (
            n?.snapshot === e.snapshot &&
              n.background === i &&
              n.items === e.items &&
              n.split?.id !== t &&
              s.get(e.assets) === n &&
              s.set(e.assets, { ...n, split: { id: t, base: a, foreground: l, pasteboardLayerBounds: o } }),
            { base: a, foreground: l, ink: g }
          )
        },
        vw: j,
        xV: function (e) {
          return d.has(e)
        },
        yw: function (e, t) {
          let n = g(e, t)
          return null == n
            ? null
            : {
                x: n.layer.bbox.x * e.snapshot.content.width,
                y: n.layer.bbox.y * e.snapshot.content.height,
                width: n.layer.bbox.width * e.snapshot.content.width,
                height: n.layer.bbox.height * e.snapshot.content.height,
                rotation: n.rendering.rotation,
              }
        },
      },
    )
  },
  wivJ(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      a = n("SZCv"),
      l = n.n(a),
      o = n("zTeN"),
      s = n("Wf1j"),
      d = n("Dgwo"),
      c = n("tl5a"),
      u = n("VCD3"),
      g = n("t3Ye"),
      m = n("zLDI"),
      h = n("m22M"),
      f = n("qMca"),
      p = n("OWtl"),
      x = n("Sd8U"),
      v = n("vx3B"),
      y = n("vesB"),
      b = n("c9K0")
    let w = (0, o.i1)(
        p.u,
        (e, { get: t }) => {
          if (null == e) return []
          let n = t(f.D0, e)
          return (0, m.AY)({
            isAeonThread: n,
            isBackgroundSubagentsEnabled: !0,
            requestUserInputAsyncUiEnabled: !n,
            previousEntries: [],
            projectlessOutputDirectory: t(c.PQ, e) ?? null,
            visibleTurnEntries: t(g.kb, { conversationId: e, isBackgroundSubagentsEnabled: !0 })
              .generatedImageTurnEntries,
          })
        },
        { isEqual: l() },
      ),
      I = (0, o.vU)(p.u, (e, { get: t, scope: n }) => {
        let i = t(c.qX, e)
        return {
          queryKey: ["local-image-history-page", i, e],
          enabled: !1,
          retry: !1,
          queryFn: async () => (
            null != e && !1 === n.get(c.pp, e) && (await (0, d.V)(n, i).loadOlderConversationTurnsPage(e)),
            null
          ),
        }
      })
    function M(e, t) {
      return e + t.images.length
    }
    function j({
      conversationTitle: e,
      metadataImages: t,
      generatedImageTurns: n,
      imageNumberOffset: i,
      intl: r,
      generationStarts: a,
    }) {
      let l = new Map(t.map((e) => [e.id, e])),
        o = i
      return n.map((t) => ({
        id: t.id,
        turnStartedAtMs: t.turnStartedAtMs,
        images: t.images.map((t) => {
          if (((o += 1), null == t.src)) return { id: t.id, loading: !0, generationStartedAtMs: a?.get(t.id) }
          let n = l.get(t.id),
            i =
              n?.alt ??
              r.formatMessage(
                {
                  id: "codex.localConversation.generatedImage",
                  defaultMessage: "Generated image {imageNumber}",
                  description: "Alt text for an assistant-generated image shown in the final response",
                },
                { imageNumber: o },
              )
          return {
            alt: i,
            isAnimated: n?.isAnimated,
            displayVariants: n?.displayVariants,
            height: n?.height,
            id: t.id,
            previewSrc: n?.previewSrc ?? t.src,
            hasPanoramaPrompt: t.hasPanoramaPrompt ?? n?.hasPanoramaPrompt,
            sourceImage: n?.sourceImage,
            src: t.src,
            tabTitle:
              n?.tabTitle ??
              (null == e
                ? i
                : r.formatMessage(
                    {
                      id: "codex.localConversation.generatedImageTabTitle",
                      defaultMessage: "{conversationTitle} - Generated image {imageNumber}",
                      description: "Title for a generated image preview tab, prefixed by the conversation title",
                    },
                    { conversationTitle: e, imageNumber: o },
                  )),
            width: n?.width,
          }
        }),
      }))
    }
    function C(e, t) {
      let n = new Set(t.map((e) => e.id))
      return e.flatMap((e) => {
        let t = e.images.filter((e) => n.has(e.id))
        return 0 === t.length ? [] : [{ ...e, images: t }]
      })
    }
    n.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            n,
            a,
            l,
            d,
            g,
            m,
            f = (0, r.c)(28)
          f[0] !== e
            ? (({ initialImages: t, restrictLiveTailToInitialImages: a, ...n } = e),
              (f[0] = e),
              (f[1] = t),
              (f[2] = n),
              (f[3] = a))
            : ((t = f[1]), (n = f[2]), (a = f[3]))
          let p = void 0 !== a && a,
            E = (0, o.gh)(x.PR),
            S = (0, s.A)(),
            T = n.fallbackImage.sourceConversationId ?? E.value.routeConversationId,
            _ = (0, o._U)(c.pp, T),
            { isFetching: A, isError: k, refetch: P } = (0, o._U)(I, T),
            R = (0, o._U)(w, T),
            N = (0, o._U)(c.cm, T),
            z = (0, o._U)(c.IT, T),
            L = (0, o._U)(b.se, T),
            D = (0, o._U)(b.S2, T),
            O = (0, o._U)(y.S, T),
            B = (0, o._U)(h.N, T)
          if (
            f[4] !== B ||
            f[5] !== O ||
            f[6] !== N ||
            f[7] !== t ||
            f[8] !== S ||
            f[9] !== z ||
            f[10] !== p ||
            f[11] !== R
          ) {
            let e = [...(0, u.nt)({ conversationTitle: B, images: R, intl: S }), ...t]
            ;((l =
              null == N
                ? []
                : j({
                    conversationTitle: B,
                    metadataImages: e,
                    generatedImageTurns: C(N, e),
                    imageNumberOffset: 0,
                    intl: S,
                    generationStarts: O,
                  })),
              (d =
                null == z
                  ? null
                  : (j({
                      conversationTitle: B,
                      metadataImages: t,
                      generatedImageTurns: p ? C([z], t) : [z],
                      imageNumberOffset: l.reduce(M, 0),
                      intl: S,
                      generationStarts: O,
                    })[0] ?? null)),
              (f[4] = B),
              (f[5] = O),
              (f[6] = N),
              (f[7] = t),
              (f[8] = S),
              (f[9] = z),
              (f[10] = p),
              (f[11] = R),
              (f[12] = l),
              (f[13] = d))
          } else ((l = f[12]), (d = f[13]))
          let U = d
          f[14] !== k || f[15] !== A || f[16] !== _ || f[17] !== P
            ? ((g =
                !1 === _ || A
                  ? {
                      hasMore: !_,
                      isLoading: A,
                      hasError: k && !_,
                      onLoadMore: () => {
                        P({ cancelRefetch: !1 })
                      },
                    }
                  : void 0),
              (f[14] = k),
              (f[15] = A),
              (f[16] = _),
              (f[17] = P),
              (f[18] = g))
            : (g = f[18])
          let F = D ?? void 0
          return (
            f[19] !== T ||
            f[20] !== B ||
            f[21] !== l ||
            f[22] !== U ||
            f[23] !== L ||
            f[24] !== n ||
            f[25] !== g ||
            f[26] !== F
              ? ((m = (0, i.jsx)(v.Z, {
                  ...n,
                  conversationId: T,
                  conversationTitle: B,
                  historyPagination: g,
                  historicalGeneratedImageGroups: l,
                  liveTailGeneratedImageGroup: U,
                  optimisticImageEditMessageId: L,
                  optimisticImageEditStartedAtMs: F,
                })),
                (f[19] = T),
                (f[20] = B),
                (f[21] = l),
                (f[22] = U),
                (f[23] = L),
                (f[24] = n),
                (f[25] = g),
                (f[26] = F),
                (f[27] = m))
              : (m = f[27]),
            m
          )
        },
      },
    )
  },
  aa4G(e, t, n) {
    var i = n("QosV"),
      r = n("zd8w"),
      a = n("HZfM"),
      l = n("jDom"),
      o = n("zt8h")
    let s = { state: "unblocked", location: void 0, proceed: void 0, reset: void 0 },
      d = new WeakMap()
    class c {
      shouldBlock
      priority
      beforeNavigation
      snapshot = s
      listeners = new Set()
      getSnapshot = () => this.snapshot
      constructor(e, t, n) {
        ;((this.shouldBlock = e), (this.priority = t), (this.beforeNavigation = n))
      }
    }
    class u {
      #e
      #t = "codex-navigation"
      #n = new Set()
      #i = new Set()
      #r
      #a
      #l
      #o
      constructor(e) {
        this.#e = e
      }
      register(e) {
        return (
          this.#n.add(e),
          null == this.#o &&
            (this.#e.getBlocker(
              this.#t,
              (e) => ((this.#a = e), (this.#l = void 0), this.#i.clear(), (this.#r = this.#s()), null != this.#r),
            ),
            (this.#o = this.#e.subscribe(() => this.#d()))),
          () => {
            ;(this.#n.delete(e),
              this.#i.delete(e),
              this.#r === e && (this.#e.state.blockers.get(this.#t)?.reset?.(), (this.#r = void 0)),
              (e.snapshot = s),
              0 === this.#n.size &&
                (this.#o?.(), (this.#o = void 0), this.#e.deleteBlocker(this.#t), (this.#a = void 0)))
          }
        )
      }
      #s() {
        let e = this.#a
        if (null != e)
          return [...this.#n].sort((e, t) => t.priority - e.priority).find((t) => !this.#i.has(t) && t.shouldBlock(e))
      }
      #c = () => {
        let e = this.#e.state.blockers.get(this.#t),
          t = this.#a
        if (e?.state !== "blocked" || null == this.#r || null == t || this.#l === t) return
        this.#i.add(this.#r)
        let n = this.#s()
        null != n ? ((this.#r = n), this.#d()) : ((this.#l = t), this.#d(), this.#u(t, e))
      }
      async #u(e, t) {
        try {
          ;(await Promise.all([...this.#i].map((e) => Promise.resolve(e.beforeNavigation()))),
            this.#a === e && this.#e.state.blockers.get(this.#t)?.state === "blocked" && t.proceed())
        } catch {
          this.#a === e && this.#e.state.blockers.get(this.#t)?.state === "blocked" && t.reset()
        }
      }
      #d() {
        let e = this.#e.state.blockers.get(this.#t) ?? s
        "unblocked" === e.state && ((this.#r = void 0), (this.#a = void 0), (this.#l = void 0), this.#i.clear())
        let t = this.#a
        for (let n of this.#n) {
          let i = n === this.#r ? e : s
          if (i !== s || n.snapshot !== s)
            for (let e of ((n.snapshot =
              "blocked" === i.state
                ? {
                    ...i,
                    isCommitting: this.#l === t,
                    proceed: () => {
                      this.#a === t && this.#r === n && this.#c()
                    },
                    reset: () => {
                      this.#a === t && this.#r === n && this.#l !== t && i.reset()
                    },
                  }
                : i),
            n.listeners))
              e()
        }
      }
    }
    function g() {
      return s
    }
    n.d(
      t,
      {},
      {
        e: function (e, t, n) {
          let s,
            m,
            h,
            f,
            p = (0, i.c)(12),
            x = void 0 === t ? 0 : t,
            v = (0, r.useContext)(a.hf)
          if (null == v) throw Error("Navigation blockers require a data router")
          let { router: y, basename: b } = v
          p[0] !== b || p[1] !== e
            ? ((s = (t) =>
                e({
                  ...t,
                  currentLocation: { ...t.currentLocation, pathname: (0, o.d)(t.currentLocation.pathname, b) },
                  nextLocation: { ...t.nextLocation, pathname: (0, o.d)(t.nextLocation.pathname, b) },
                })),
              (p[0] = b),
              (p[1] = e),
              (p[2] = s))
            : (s = p[2])
          let w = (0, l.K)(s)
          p[3] !== n ? ((m = () => n?.()), (p[3] = n), (p[4] = m)) : (m = p[4])
          let I = (0, l.K)(m)
          p[5] !== I || p[6] !== w || p[7] !== x
            ? ((h = new c(w, x, I)), (p[5] = I), (p[6] = w), (p[7] = x), (p[8] = h))
            : (h = p[8])
          let M = h
          p[9] !== M || p[10] !== y
            ? ((f = (e) => {
                let t = d.get(y)
                ;(null == t && ((t = new u(y)), d.set(y, t)), M.listeners.add(e))
                let n = t.register(M)
                return () => {
                  ;(M.listeners.delete(e), n())
                }
              }),
              (p[9] = M),
              (p[10] = y),
              (p[11] = f))
            : (f = p[11])
          let j = f
          return (0, r.useSyncExternalStore)(j, M.getSnapshot, g)
        },
      },
    )
  },
  zt8h(e, t, n) {
    n.d(
      t,
      {},
      {
        d: function (e, t) {
          let n = t.replace(/\/$/, "")
          return "" !== n &&
            e.toLowerCase().startsWith(n.toLowerCase()) &&
            (e.length === n.length || "/" === e[n.length])
            ? e.slice(n.length) || "/"
            : e
        },
      },
    )
  },
  s8wJ(e, t, n) {
    let i = (0, n("iJY0").a)({
      name: "brush-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.14209, y: 0.808594, width: 13.9646, height: 13.964111 },
        visualBounds: { x: 1.14209, y: 0.808594, width: 13.9646, height: 13.964111 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.14209, y: 0.808594, width: 13.9646, height: 13.964111 },
        center: { x: 8.12439, y: 7.79065 },
        insets: { top: 0.808594, right: 0.89331, bottom: 1.227295, left: 1.14209 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.12439, y: 7.79065 }, foreground: { x: 8.12439, y: 7.79065 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65147 1.15743C8.11688 0.692438 8.87178 0.692195 9.33702 1.15743L10.3976 2.21797C10.5142 2.33468 10.5692 2.49994 10.546 2.66329L10.4093 3.61934L11.3663 3.4836L11.4884 3.48067C11.6091 3.49185 11.7241 3.54452 11.8116 3.63204L14.7579 6.57832C15.2232 7.04358 15.2229 7.79847 14.7579 8.26387L11.6983 11.3225C11.6967 11.3241 11.6961 11.3267 11.6944 11.3283C11.6929 11.3299 11.6902 11.3307 11.6886 11.3322L10.3204 12.7014C9.59468 13.4271 8.41725 13.4271 7.69151 12.7014L6.90928 11.9182L5.07139 14.01C4.21583 14.9836 2.71543 15.0319 1.79893 14.1154C0.882947 13.199 0.931313 11.6995 1.9044 10.8439L3.9962 9.00508L3.21397 8.22286C2.48826 7.49713 2.48823 6.32067 3.21397 5.59493L7.65147 1.15743ZM3.95616 6.33809C3.64064 6.65378 3.64054 7.16504 3.95616 7.48067L5.13487 8.65938C5.23715 8.76179 5.29264 8.90242 5.28819 9.04707C5.28352 9.19193 5.21823 9.32923 5.10948 9.425L2.59776 11.632C2.07975 12.0873 2.05447 12.8856 2.5421 13.3732C3.0296 13.8606 3.82708 13.8352 4.28233 13.3176L6.49034 10.8049L6.56944 10.7316C6.65482 10.6677 6.75899 10.6307 6.86729 10.6272C7.01218 10.6226 7.15345 10.678 7.25596 10.7805L8.43467 11.9592C8.75032 12.2746 9.26162 12.2746 9.57725 11.9592L10.5792 10.9563L4.95811 5.33516L3.95616 6.33809ZM8.59385 1.89961C8.53864 1.84467 8.44893 1.84476 8.39366 1.89961L5.70128 4.592L11.3224 10.2131L14.0157 7.52168C14.0707 7.46632 14.0709 7.37571 14.0157 7.32051L11.255 4.55977L9.86436 4.75899C9.70092 4.78223 9.53581 4.72728 9.41905 4.61055C9.30231 4.49381 9.24741 4.32868 9.27061 4.16524L9.46885 2.77364L8.59385 1.89961Z" fill="currentColor"/>',
    })
    n.d(t, {}, { C: i })
  },
  XSsU(e, t, n) {
    let i = (0, n("iJY0").a)({
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
    n.d(t, {}, { j: i })
  },
}
//# sourceMappingURL=87804.fcae5854d3.js.map
