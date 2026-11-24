export const __rspack_esm_ids = [74892]
export const __webpack_modules__ = {
  ZYH5(e, n, t) {
    var l = t("ABep")
    ;(t("zd8w"),
      (n.A = (e) =>
        (0, l.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          ...e,
          children: [
            (0, l.jsx)("path", {
              d: "M9.995 12.315c.489 0 .875.37.875.842 0 .473-.386.843-.875.843-.488 0-.875-.37-.875-.843 0-.472.387-.842.875-.842ZM10.001 6c.478 0 .778.295.778.79 0 .042 0 .107-.006.16l-.08 3.716c-.016.456-.252.725-.698.725-.445 0-.681-.269-.692-.725L9.217 6.95c0-.053-.006-.118-.006-.16 0-.495.307-.79.79-.79Z",
            }),
            (0, l.jsx)("path", {
              fillRule: "evenodd",
              d: "M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Zm0 1.33a6.585 6.585 0 1 0 0 13.17 6.585 6.585 0 0 0 0-13.17Z",
              clipRule: "evenodd",
            }),
          ],
        })))
  },
  StdV(e, n, t) {
    var l = t("ABep"),
      a = t("QosV"),
      i = t("on57")
    let s = "flex flex-col gap-[var(--detail-page-section-gap)]"
    t.d(
      n,
      {},
      {
        P: function (e) {
          let n,
            t,
            r = (0, a.c)(3),
            { children: o } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.A)(
                  s,
                  "@container mx-auto w-full max-w-[var(--thread-content-max-width)] [--detail-page-inline-inset:var(--padding-row-x)] [--detail-page-section-gap:calc(var(--spacing)*6)]",
                )),
                (r[0] = n))
              : (n = r[0]),
            r[1] !== o ? ((t = (0, l.jsx)("div", { className: n, children: o })), (r[1] = o), (r[2] = t)) : (t = r[2]),
            t
          )
        },
        m: s,
      },
    )
  },
  bPLJ(e, n, t) {
    t.d(n, { W: () => M })
    var l = t("ABep"),
      a = t("QosV"),
      i = t("on57"),
      s = t("D0fc"),
      r = t("xs0G"),
      o = t("K4Cx"),
      d = t("zd8w"),
      c = t("oyxz"),
      u = t("Wf1j"),
      p = t("ZtSy"),
      m = t("bVeK"),
      g = t("T1PX"),
      f = t("NvEJ"),
      h = t("U6mT"),
      x = t("rCiO"),
      y = t("oeA4"),
      b = t("lsky"),
      v = t("cC4N"),
      j = t("ndwI"),
      A = t("dVri")
    let k = /^ {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/,
      w = { extensions: [(0, A.T)()], mdastExtensions: [(0, j.C)()] },
      _ = new b.Dz({
        gfm: !0,
        breaks: !0,
        extensions: [
          {
            name: "plugin-description-footnote",
            level: "block",
            start: (e) => /\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/.exec(e)?.index,
            tokenizer(e) {
              let n = k.exec(e)?.[0]
              if (null == n || (0, v.Y)(n, w).children[0]?.type !== "footnoteDefinition") return
              let t = e.length
              for (let n of e.matchAll(/\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/g))
                if ((0, v.Y)(n[0], w).children[0]?.type === "footnoteDefinition") {
                  t = n.index
                  break
                }
              let l = (0, v.Y)(e.slice(0, t), w).children[0],
                a = l?.type === "footnoteDefinition" ? l.position?.end.offset : void 0
              if (null != a) return { type: "plugin-description-footnote", raw: e.slice(0, a) }
            },
          },
        ],
      }),
      S = {
        ...(0, f.K)({ allowWideBlocks: !1, mediaComponent: void 0 }),
        img: () => null,
        table: function (e) {
          let n,
            t,
            i,
            s = (0, a.c)(7),
            { children: r } = e,
            o = (0, u.A)()
          return (
            s[0] !== o
              ? ((n = o.formatMessage({ id: "plugins.description.table", defaultMessage: "Description table" })),
                (s[0] = o),
                (s[1] = n))
              : (n = s[1]),
            s[2] !== r ? ((t = (0, l.jsx)(x.jh, { children: r })), (s[2] = r), (s[3] = t)) : (t = s[3]),
            s[4] !== n || s[5] !== t
              ? ((i = (0, l.jsx)("div", {
                  className: "my-3 max-w-full overflow-x-auto",
                  role: "region",
                  "aria-label": n,
                  tabIndex: 0,
                  "data-plugin-description-table": !0,
                  children: t,
                })),
                (s[4] = n),
                (s[5] = t),
                (s[6] = i))
              : (i = s[6]),
            i
          )
        },
        p: ({ children: e }) => (0, l.jsx)("p", { className: "my-2 font-content", dir: "auto", children: e }),
        pre: ({ children: e }) =>
          (0, l.jsx)("pre", {
            className:
              "my-3 overflow-x-auto rounded-lg bg-token-text-code-block-background p-3 [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0",
            children: e,
          }),
        code: ({ children: e, inline: n }) =>
          n
            ? (0, l.jsx)("span", {
                className: "inline-markdown",
                "data-markdown-copy": "inline-code",
                dir: "ltr",
                children: e,
              })
            : (0, l.jsx)("code", { className: "font-mono text-sm", children: e }),
      }
    function M(e) {
      let n,
        t,
        u,
        f,
        x,
        b,
        v,
        j,
        A,
        k,
        w,
        M,
        N,
        I,
        P,
        T,
        R,
        U,
        L,
        D,
        E,
        B,
        $ = (0, a.c)(53),
        { children: O, openTarget: z } = e,
        q = (0, d.useId)(),
        W = (0, d.useRef)(null),
        Z = (0, d.useRef)(null),
        F = (0, d.useRef)(!1)
      $[0] === Symbol.for("react.memo_cache_sentinel") ? ((n = new Set()), ($[0] = n)) : (n = $[0])
      let V = (0, d.useRef)(n),
        Y = (0, d.useRef)(0),
        G = (0, g.I)(),
        [H, K] = (0, d.useState)(!1),
        [J, Q] = (0, d.useState)(!1),
        X = H ? 0.18 : 0.16,
        ee = H ? 0.09 : 0.16,
        [en, et] = (0, d.useState)(null),
        el = null != en && en.full > en.collapsed
      $[1] !== H
        ? ((t = (e) => {
            for (let e of V.current) e.removeAttribute("inert")
            V.current.clear()
            let n = W.current
            if (null == n || H) return
            let t = n.getBoundingClientRect(),
              l = 0 === n.offsetHeight ? 1 : t.height / n.offsetHeight,
              a = t.top + e * l
            for (let e of n.querySelectorAll(
              "a[href], p, ul, ol, li, blockquote, pre, tr, th, td, [data-plugin-description-table]",
            )) {
              let n = e.getBoundingClientRect(),
                t = e.matches("a[href]") ? n.bottom > a : n.top >= a
              !e.hasAttribute("inert") && t && (e.setAttribute("inert", ""), V.current.add(e))
            }
          }),
          ($[1] = H),
          ($[2] = t))
        : (t = $[2])
      let ea = (0, d.useEffectEvent)(t)
      ;($[3] !== ea
        ? ((u = () => {
            let e = W.current
            if (null == e) return
            let n = () => {
              let n = e.classList.contains("line-clamp-[15]")
              e.classList.remove("line-clamp-[15]")
              let t = e.scrollHeight,
                l = Array.from(e.querySelectorAll("pre"), C)
              for (let { element: e } of l) e.style.overflow = "visible"
              e.classList.add("line-clamp-[15]")
              let a = e.clientHeight
              if (null != e.querySelector("table")) {
                let n = Number.parseFloat(
                  getComputedStyle(e.querySelector("[data-markdown-text-style]") ?? e).lineHeight,
                )
                Number.isFinite(n) && (a = Math.min(a, 15 * n))
              }
              for (let { element: t, style: a } of (n || e.classList.remove("line-clamp-[15]"), l))
                null == a ? t.removeAttribute("style") : t.setAttribute("style", a)
              ;(et((e) => (e?.full === t && e.collapsed === a ? e : { full: t, collapsed: a })), ea(a))
            }
            n()
            let t = new ResizeObserver(n)
            return (t.observe(e), () => t.disconnect())
          }),
          ($[3] = ea),
          ($[4] = u))
        : (u = $[4]),
        $[5] !== O ? ((f = [O]), ($[5] = O), ($[6] = f)) : (f = $[6]),
        (0, d.useLayoutEffect)(u, f),
        $[7] !== en || $[8] !== ea
          ? ((x = () => {
              null != en && ea(en.collapsed)
            }),
            ($[7] = en),
            ($[8] = ea),
            ($[9] = x))
          : (x = $[9]),
        $[10] !== en || $[11] !== H ? ((b = [en, H]), ($[10] = en), ($[11] = H), ($[12] = b)) : (b = $[12]),
        (0, d.useLayoutEffect)(x, b),
        $[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = () => {
              let e = Z.current
              F.current && null != e && e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" })
            }),
            ($[13] = v))
          : (v = $[13]))
      let ei = v,
        es = J || void 0
      $[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, i.A)("overflow-clip", "viewport-fxNDLQ")), ($[14] = j))
        : (j = $[14])
      let er = (H ? en?.full : en?.collapsed) ?? "auto",
        eo = H || !el ? 1 : 0
      $[15] !== er || $[16] !== eo
        ? ((A = { height: er, "--description-fade": eo }), ($[15] = er), ($[16] = eo), ($[17] = A))
        : (A = $[17])
      let ed = G ? 0 : X
      $[18] === Symbol.for("react.memo_cache_sentinel") ? ((k = [0.22, 1, 0.36, 1]), ($[18] = k)) : (k = $[18])
      let ec = G ? 0 : ee
      ;($[19] !== ec ? ((w = { duration: ec }), ($[19] = ec), ($[20] = w)) : (w = $[20]),
        $[21] !== ed || $[22] !== w
          ? ((M = { duration: ed, ease: k, "--description-fade": w }), ($[21] = ed), ($[22] = w), ($[23] = M))
          : (M = $[23]),
        $[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = () => {
              let e = Y.current
              r.Gt.postRender(() => {
                e === Y.current && (ei(), (F.current = !1), Q(!1))
              })
            }),
            ($[24] = N))
          : (N = $[24]))
      let eu = null == en && "line-clamp-[15]"
      if (
        ($[25] !== eu ? ((I = (0, i.A)(eu)), ($[25] = eu), ($[26] = I)) : (I = $[26]),
        $[27] === Symbol.for("react.memo_cache_sentinel") ? ((P = { kind: "small" }), ($[27] = P)) : (P = $[27]),
        $[28] !== O)
      )
        ((T = (function e(n) {
          return n
            .filter((e) => "html" !== e.type && "image" !== e.type)
            .map((n) => {
              if ("heading" === n.type || "hr" === n.type || "plugin-description-footnote" === n.type) {
                let e = n.raw.trimEnd()
                return {
                  type: "paragraph",
                  raw: n.raw,
                  text: e,
                  tokens: e
                    .split("\n")
                    .flatMap((e, n) => [
                      ...(0 === n ? [] : [{ type: "br", raw: "\n" }]),
                      { type: "text", raw: e, text: (0, y.encodeXML)(e) },
                    ]),
                }
              }
              return "table" === n.type
                ? {
                    ...n,
                    header: n.header.map((n) => ({ ...n, tokens: e(n.tokens) })),
                    rows: n.rows.map((n) => n.map((n) => ({ ...n, tokens: e(n.tokens) }))),
                  }
                : "checkbox" === n.type
                  ? { type: "text", raw: n.raw, text: n.raw }
                  : "list" === n.type
                    ? {
                        ...n,
                        items: n.items.map((n) => {
                          let t = e(n.tokens),
                            l = t[0]
                          if (l?.type === "text" || l?.type === "paragraph") {
                            let e = l.tokens,
                              n = e?.[0]
                            null != e &&
                              n?.type === "text" &&
                              /^\[[ xX]\]$/.test(n.raw) &&
                              (1 === e.length || (e[1]?.type === "br" && e[1].raw.startsWith(" "))) &&
                              e.splice(0, 2, { type: "text", raw: n.raw, text: n.raw + " " })
                          }
                          return { ...n, task: !1, checked: void 0, tokens: t }
                        }),
                      }
                    : "tokens" in n && n.tokens
                      ? { ...n, tokens: e(n.tokens) }
                      : n
            })
            .filter(
              (e) =>
                "link" !== e.type ||
                (function e(n) {
                  return "tokens" in n && n.tokens
                    ? n.tokens.some(e)
                    : "text" in n &&
                        "string" == typeof n.text &&
                        ("codespan" === n.type ? n.text : (0, s.hl)(n.text)).trim().length > 0
                })(e),
            )
        })(_.lexer(O))),
          ($[28] = O),
          ($[29] = T))
      else T = $[29]
      return (
        $[30] !== z
          ? ((R = () => ({
              ...S,
              a: (e) => {
                let { children: n, href: t, title: a } = e
                return t
                  ? (0, l.jsx)(p.G, {
                      className: "hover:opacity-70 focus-visible:opacity-70",
                      href: t,
                      title: a,
                      initiator: "markdown_link_click",
                      openTarget: z,
                      underline: "always",
                      children: n,
                    })
                  : (0, l.jsx)(l.Fragment, { children: n })
              },
            })),
            ($[30] = z),
            ($[31] = R))
          : (R = $[31]),
        $[32] !== T || $[33] !== R
          ? ((U = (0, l.jsx)(h.T, { textStyle: P, renderText: s.hl, tokens: T, getDefaultComponents: R })),
            ($[32] = T),
            ($[33] = R),
            ($[34] = U))
          : (U = $[34]),
        $[35] !== I || $[36] !== U
          ? ((L = (0, l.jsx)("div", { ref: W, className: I, children: U })), ($[35] = I), ($[36] = U), ($[37] = L))
          : (L = $[37]),
        $[38] !== q || $[39] !== A || $[40] !== M || $[41] !== L
          ? ((D = (0, l.jsx)(o.P.div, {
              id: q,
              className: j,
              initial: !1,
              animate: A,
              transition: M,
              onUpdate: ei,
              onAnimationComplete: N,
              children: L,
            })),
            ($[38] = q),
            ($[39] = A),
            ($[40] = M),
            ($[41] = L),
            ($[42] = D))
          : (D = $[42]),
        $[43] !== q || $[44] !== X || $[45] !== el || $[46] !== H || $[47] !== G
          ? ((E =
              el || H
                ? (0, l.jsxs)("button", {
                    ref: Z,
                    className:
                      "mt-4 flex cursor-interaction scroll-my-4 items-center gap-1 text-sm text-secondary select-none hover:underline",
                    type: "button",
                    "aria-controls": q,
                    "aria-expanded": H,
                    onClick: () => {
                      ;((Y.current = Y.current + 1), Q(!0), (F.current = H), K(!H))
                    },
                    children: [
                      H
                        ? (0, l.jsx)(c.A, { id: "plugins.description.showLess", defaultMessage: "Show less" })
                        : (0, l.jsx)(c.A, { id: "plugins.description.showMore", defaultMessage: "Show more" }),
                      (0, l.jsx)(o.P.span, {
                        "aria-hidden": !0,
                        initial: !1,
                        animate: { rotate: 180 * !!H },
                        transition: { duration: G ? 0 : X, ease: [0.22, 1, 0.36, 1] },
                        children: (0, l.jsx)(m.Aq_, {}),
                      }),
                    ],
                  })
                : null),
            ($[43] = q),
            ($[44] = X),
            ($[45] = el),
            ($[46] = H),
            ($[47] = G),
            ($[48] = E))
          : (E = $[48]),
        $[49] !== D || $[50] !== E || $[51] !== es
          ? ((B = (0, l.jsxs)("div", { "data-plugin-description-transitioning": es, children: [D, E] })),
            ($[49] = D),
            ($[50] = E),
            ($[51] = es),
            ($[52] = B))
          : (B = $[52]),
        B
      )
    }
    function C(e) {
      return { element: e, style: e.getAttribute("style") }
    }
  },
  oVqR(e, n, t) {
    var l = t("ABep"),
      a = t("QosV"),
      i = t("Qgfj"),
      s = t("oyxz"),
      r = t("FrrB"),
      o = t("TzT7")
    let d = (0, i.YK)({
      missing: { id: "plugins.detail.missing", defaultMessage: "Plugin not found" },
      missingDescription: {
        id: "plugins.detail.missingDescription",
        defaultMessage: "This plugin could not be loaded from its marketplace entry.",
      },
      error: { id: "plugins.detail.errorTitle", defaultMessage: "Failed to load plugin" },
      editDenied: { id: "plugins.editor.editDenied", defaultMessage: "You don't have edit access to this plugin" },
    })
    t.d(
      n,
      {},
      {
        PluginDetailEmptyState: function (e) {
          let n,
            t,
            i,
            c,
            u = (0, a.c)(9),
            { description: p, state: m } = e,
            g = d[m]
          return (
            u[0] !== g ? ((n = (0, l.jsx)(s.A, { ...g })), (u[0] = g), (u[1] = n)) : (n = u[1]),
            u[2] !== p || u[3] !== m
              ? ((t = p ?? ("missing" === m ? (0, l.jsx)(s.A, { ...d.missingDescription }) : void 0)),
                (u[2] = p),
                (u[3] = m),
                (u[4] = t))
              : (t = u[4]),
            u[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, l.jsx)(o.A, { "aria-hidden": !0, className: "h-20 w-auto text-tertiary" })), (u[5] = i))
              : (i = u[5]),
            u[6] !== n || u[7] !== t
              ? ((c = (0, l.jsx)("div", {
                  className: "flex min-h-0 flex-1 items-center justify-center py-8",
                  children: (0, l.jsx)(r.A, { title: n, description: t, illustration: i }),
                })),
                (u[6] = n),
                (u[7] = t),
                (u[8] = c))
              : (c = u[8]),
            c
          )
        },
      },
    )
  },
  Hi2y(e, n, t) {
    t.d(n, { o: () => eH })
    var l = t("ABep"),
      a = t("QosV"),
      i = t("bTvG"),
      s = t("slpy"),
      r = t("MGnB"),
      o = t("NhqU"),
      d = t("Ab4H"),
      c = t("fxCc"),
      u = t("T0Rc"),
      p = t("on57"),
      m = t("qmMi"),
      g = t("DBCl"),
      f = t("OZum"),
      h = t("zd8w"),
      x = t("Qgfj"),
      y = t("Wf1j"),
      b = t("oyxz"),
      v = t("Ywss")
    t("fVOX")
    var j = t("Xjxo"),
      A = t("rGp2"),
      k = t("hOO0"),
      w = t("uc7r"),
      _ = t("tqYT"),
      S = t("OiCI"),
      M = t("odKs"),
      C = t("FvYa"),
      N = t("Sm6l"),
      I = t("StdV"),
      P = t("OXR4"),
      T = t("Ot7V"),
      R = t("aQvR"),
      U = t("HOLv"),
      L = t("bVeK"),
      D = t("JZv7"),
      E = t("UxN3"),
      B = t("F0xz"),
      $ = t("oQwr"),
      O = t("s5dU"),
      z = t("iURv"),
      q = t("Z2K2"),
      W = t("Rvwy"),
      Z = t("ZuY9"),
      F = t("qj8A"),
      V = t("RpBe"),
      Y = t("ZYH5"),
      G = t("S1CS"),
      H = t("Jqpj"),
      K = t("yHWn"),
      J = t("WU1E"),
      Q = t("bPLJ"),
      X = t("E9TF"),
      ee = t("EEop"),
      en = t("OWtl"),
      et = t("AN2V"),
      el = t("kfGJ"),
      ea = t("bb3f"),
      ei = t("hZax"),
      es = t("WFY2"),
      er = t("SaEY"),
      eo = t("Bfv4"),
      ed = t("h2u4"),
      ec = t("MX3C"),
      eu = t("EF5T"),
      ep = t("tlx5"),
      em = t("cLdu")
    function eg(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        d,
        c = (0, a.c)(21)
      c[0] !== e
        ? (({ className: n, muted: i, ...t } = e), (c[0] = e), (c[1] = n), (c[2] = t), (c[3] = i))
        : ((n = c[1]), (t = c[2]), (i = c[3]))
      let u = void 0 !== i && i
      if (c[4] !== n || c[5] !== u || c[6] !== t) {
        r = Symbol.for("react.early_return_sentinel")
        e: if (
          ((s = (0, p.A)(
            "h-8 min-w-0 items-center gap-1 rounded-full border ps-2 pe-3 py-0 text-sm leading-[18px] whitespace-nowrap select-none",
            u ? "border-transparent bg-text/5 text-tertiary" : "border-default bg-surface",
            "span" !== t.as &&
              (u
                ? "not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10"
                : "not-disabled:not-aria-disabled:hover:bg-secondary-ghost-hover data-[state=open]:bg-secondary-ghost-hover"),
            n,
          )),
          "span" === t.as)
        ) {
          let e
          if (c[9] !== t) {
            let { as: n, ...l } = t
            ;((e = l), (c[9] = t), (c[10] = e))
          } else e = c[10]
          r = (0, l.jsx)("span", { className: (0, p.A)("inline-flex", s), ...e })
          break e
        }
        ;((c[4] = n), (c[5] = u), (c[6] = t), (c[7] = s), (c[8] = r))
      } else ((s = c[7]), (r = c[8]))
      if (r !== Symbol.for("react.early_return_sentinel")) return r
      if ("a" === t.as) {
        let e, n
        if (c[11] !== t) {
          let { as: n, ...l } = t
          ;((e = l), (c[11] = t), (c[12] = e))
        } else e = c[12]
        return (
          c[13] !== s || c[14] !== e
            ? ((n = (0, l.jsx)(N.z, { className: s, ...e, unstyled: !0 })), (c[13] = s), (c[14] = e), (c[15] = n))
            : (n = c[15]),
          n
        )
      }
      if (c[16] !== t) {
        let { as: e, ...n } = t
        ;((o = n), (c[16] = t), (c[17] = o))
      } else o = c[17]
      return (
        c[18] !== o || c[19] !== s
          ? ((d = (0, l.jsx)(N.$, { className: s, ...o, unstyled: !0 })), (c[18] = o), (c[19] = s), (c[20] = d))
          : (d = c[20]),
        d
      )
    }
    function ef(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        d,
        c,
        u,
        m,
        g,
        f,
        x,
        v,
        j,
        A,
        k,
        w,
        _,
        S = (0, a.c)(63),
        { group: M, hostId: C } = e,
        N = (0, y.A)()
      S[0] !== C ? ((n = { hostId: C, roots: void 0, resolveActiveRoots: !0 }), (S[0] = C), (S[1] = n)) : (n = S[1])
      let { data: I } = (0, em.Kj)(n)
      if (S[2] !== M.providers || S[3] !== I) {
        let e
        ;(S[5] !== I
          ? ((e = (e) => ({
              ...e,
              is_installed:
                I?.some((n) => {
                  let { plugin: t } = n
                  return t.installed && (t.remotePluginId ?? t.shareContext?.remotePluginId) === e.plugin_id
                }) ?? null,
            })),
            (S[5] = I),
            (S[6] = e))
          : (e = S[6]),
          (t = M.providers.map(e)),
          (S[2] = M.providers),
          (S[3] = I),
          (S[4] = t))
      } else t = S[4]
      let P = t,
        T = (0, h.useId)(),
        R = (0, h.useRef)(null),
        U = (0, h.useRef)(null),
        L = (0, h.useRef)(null),
        D = (0, h.useRef)(null),
        [E, B] = (0, h.useState)(P.length),
        [$, O] = (0, h.useState)(!1)
      ;(S[7] !== $ || S[8] !== P.length
        ? ((i = () => {
            let e = R.current,
              n = U.current
            if (null == e || null == n) return
            let t = () => {
              let t = Array.from(n.children),
                l = t.pop()
              if (!(l instanceof HTMLElement)) return
              let a = (function (e, n, t, l) {
                if (e.reduce((e, n) => e + n, 0) + Math.max(0, e.length - 1) * l <= n) return e.length
                let a = t,
                  i = 0
                for (let t of e) {
                  if (a + l + t > n) break
                  ;((a += l + t), i++)
                }
                return i
              })(t.map(ex), e.clientWidth, l.offsetWidth, Number.parseFloat(getComputedStyle(e).columnGap) || 0)
              if (!$) {
                let n = Array.from(e.querySelectorAll("[data-dependency-chip]")).findIndex(
                  (n) => n === e.ownerDocument.activeElement,
                )
                ;(n >= a && n >= 0 && (D.current = "overflow"),
                  a === P.length && e.ownerDocument.activeElement === L.current && (D.current = 0))
              }
              B(a)
            }
            t()
            let l = new ResizeObserver(t)
            for (let t of (l.observe(e), n.children)) l.observe(t)
            return () => l.disconnect()
          }),
          (S[7] = $),
          (S[8] = P.length),
          (S[9] = i))
        : (i = S[9]),
        S[10] !== $ || S[11] !== P ? ((s = [P, $]), (S[10] = $), (S[11] = P), (S[12] = s)) : (s = S[12]),
        (0, h.useLayoutEffect)(i, s),
        S[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = () => {
              let e = D.current
              if (((D.current = null), "overflow" === e)) L.current?.focus()
              else if (null != e) {
                let n = Array.from(R.current?.querySelectorAll("[data-dependency-chip]") ?? [])
                ;(n[e] ?? L.current ?? R.current)?.focus()
              }
            }),
            (S[13] = r))
          : (r = S[13]),
        S[14] !== $ || S[15] !== E ? ((o = [E, $]), (S[14] = $), (S[15] = E), (S[16] = o)) : (o = S[16]),
        (0, h.useLayoutEffect)(r, o),
        S[17] !== P.length || S[18] !== E
          ? ((d = (e) => {
              ;((D.current = e ? E : 0), !e && E < P.length && (D.current = "overflow"), O(e))
            }),
            (S[17] = P.length),
            (S[18] = E),
            (S[19] = d))
          : (d = S[19]))
      let z = d,
        q = Math.max(0, P.length - E),
        W = $ ? "items-start" : "items-center"
      ;(S[20] !== W ? ((c = (0, p.A)("flex min-w-0 gap-4", W)), (S[20] = W), (S[21] = c)) : (c = S[21]),
        S[22] !== M.label || S[23] !== T
          ? ((u = (0, l.jsx)("dt", {
              id: T,
              className: "w-1/3 shrink-0 text-sm break-words text-secondary sm:w-32",
              children: M.label,
            })),
            (S[22] = M.label),
            (S[23] = T),
            (S[24] = u))
          : (u = S[24]))
      let Z = $ && "flex-wrap"
      if (
        (S[25] !== Z ? ((m = (0, p.A)("flex min-w-0 items-center gap-2", Z)), (S[25] = Z), (S[26] = m)) : (m = S[26]),
        S[27] !== z || S[28] !== $
          ? ((g = (e) => {
              $ && "Escape" === e.key && (e.preventDefault(), z(!1))
            }),
            (S[27] = z),
            (S[28] = $),
            (S[29] = g))
          : (g = S[29]),
        S[30] !== C || S[31] !== $ || S[32] !== P || S[33] !== E)
      ) {
        let e
        ;(S[35] !== C
          ? ((e = (e) => (0, l.jsx)(ey, { provider: e, hostId: C }, e.plugin_id)), (S[35] = C), (S[36] = e))
          : (e = S[36]),
          (f = P.slice(0, $ ? P.length : E).map(e)),
          (S[30] = C),
          (S[31] = $),
          (S[32] = P),
          (S[33] = E),
          (S[34] = f))
      } else f = S[34]
      return (
        S[37] !== z || S[38] !== M.label || S[39] !== q || S[40] !== N || S[41] !== $
          ? ((x =
              (q > 0 || $) &&
              (0, l.jsx)(eg, {
                ref: L,
                className: "max-w-full shrink-0",
                "aria-expanded": $,
                "aria-label": $
                  ? N.formatMessage(
                      { id: "plugins.dependencies.collapseLabel", defaultMessage: "Show fewer plugins in {category}" },
                      { category: M.label },
                    )
                  : N.formatMessage(
                      {
                        id: "plugins.dependencies.expandLabel",
                        defaultMessage:
                          "{count, plural, one {Show # more plugin in {category}} other {Show # more plugins in {category}}}",
                      },
                      { count: q, category: M.label },
                    ),
                onClick: () => z(!$),
                children: $
                  ? (0, l.jsx)(b.A, { id: "plugins.dependencies.collapse", defaultMessage: "Show less" })
                  : (0, l.jsx)(b.A, {
                      id: "plugins.dependencies.overflow",
                      defaultMessage: "+{count, number}",
                      values: { count: q },
                    }),
              })),
            (S[37] = z),
            (S[38] = M.label),
            (S[39] = q),
            (S[40] = N),
            (S[41] = $),
            (S[42] = x))
          : (x = S[42]),
        S[43] !== T || S[44] !== m || S[45] !== g || S[46] !== f || S[47] !== x
          ? ((v = (0, l.jsxs)("div", {
              ref: R,
              role: "group",
              "aria-labelledby": T,
              tabIndex: -1,
              className: m,
              onKeyDown: g,
              children: [f, x],
            })),
            (S[43] = T),
            (S[44] = m),
            (S[45] = g),
            (S[46] = f),
            (S[47] = x),
            (S[48] = v))
          : (v = S[48]),
        S[49] !== P ? ((j = P.map(eh)), (S[49] = P), (S[50] = j)) : (j = S[50]),
        S[51] !== P.length
          ? ((A = (0, l.jsx)(eg, {
              className: "shrink-0",
              tabIndex: -1,
              children: (0, l.jsx)(b.A, {
                id: "plugins.dependencies.overflow",
                defaultMessage: "+{count, number}",
                values: { count: P.length },
              }),
            })),
            (S[51] = P.length),
            (S[52] = A))
          : (A = S[52]),
        S[53] !== j || S[54] !== A
          ? ((k = (0, l.jsxs)("div", {
              ref: U,
              "aria-hidden": !0,
              inert: !0,
              className:
                "pointer-events-none invisible absolute inset-x-0 top-0 flex h-0 items-center gap-2 overflow-hidden",
              children: [j, A],
            })),
            (S[53] = j),
            (S[54] = A),
            (S[55] = k))
          : (k = S[55]),
        S[56] !== v || S[57] !== k
          ? ((w = (0, l.jsxs)("dd", { className: "relative min-w-0 flex-1", children: [v, k] })),
            (S[56] = v),
            (S[57] = k),
            (S[58] = w))
          : (w = S[58]),
        S[59] !== u || S[60] !== w || S[61] !== c
          ? ((_ = (0, l.jsxs)("div", { className: c, children: [u, w] })),
            (S[59] = u),
            (S[60] = w),
            (S[61] = c),
            (S[62] = _))
          : (_ = S[62]),
        _
      )
    }
    function eh(e) {
      return (0, l.jsx)(
        eg,
        { className: "shrink-0", as: "span", children: (0, l.jsx)(eb, { provider: e }) },
        e.plugin_id,
      )
    }
    function ex(e) {
      return e instanceof HTMLElement ? e.offsetWidth : 0
    }
    function ey(e) {
      let n,
        t,
        i,
        r,
        o,
        d,
        c,
        u,
        p,
        m = (0, a.c)(36),
        { provider: f, hostId: x } = e,
        b = (0, y.A)(),
        j = (0, v.Zp)(),
        A = (0, v.zy)(),
        k = (0, h.useRef)(!1)
      m[0] !== b || m[1] !== f
        ? ((n = (function (e, n) {
            switch (n.availability_status?.reason) {
              case "disabled_by_admin":
                return e.formatMessage({ id: "plugins.dependencies.adminStatus", defaultMessage: "Disabled by admin" })
              case "plan_not_eligible":
                return e.formatMessage({
                  id: "plugins.dependencies.planStatus",
                  defaultMessage: "Not available on your plan",
                })
              case "workspace_setup_required":
                return e.formatMessage({
                  id: "plugins.dependencies.setupStatus",
                  defaultMessage: "Requires admin setup",
                })
              case "workspace_required":
                return e.formatMessage({
                  id: "plugins.dependencies.workspaceStatus",
                  defaultMessage: "Requires a workspace",
                })
              case "unavailable":
                return e.formatMessage({
                  id: "plugins.dependencies.unavailableStatus",
                  defaultMessage: "Not available",
                })
              case void 0:
                if (!1 === n.is_enabled)
                  return e.formatMessage({ id: "plugins.dependencies.disabledStatus", defaultMessage: "Not available" })
                return !0 === n.is_installed
                  ? e.formatMessage({ id: "plugins.dependencies.installedStatus", defaultMessage: "Installed" })
                  : void 0
            }
          })(b, f)),
          (m[0] = b),
          (m[1] = f),
          (m[2] = n))
        : (n = m[2])
      let w = n,
        _ = !1 === f.is_enabled || null != f.availability_status,
        S = _ ? w : void 0,
        M = f.navigation?.kind === "plugin_detail" && f.navigation.plugin_id === f.plugin_id
      m[3] !== x || m[4] !== A.search || m[5] !== f.plugin_id
        ? ((t = (0, g.Ctf)({ hostId: x, pluginId: f.plugin_id, browseSearch: A.search })),
          (m[3] = x),
          (m[4] = A.search),
          (m[5] = f.plugin_id),
          (m[6] = t))
        : (t = m[6])
      let C = (0, v.$P)(t)
      m[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e) => {
            if (null == e) return
            let n = e.parentElement
            return (
              k.current && n?.focus(),
              (k.current = !1),
              () => {
                k.current = n === e.ownerDocument.activeElement
              }
            )
          }),
          (m[7] = i))
        : (i = m[7])
      let N = i
      if (!M && null == S) {
        let e, n
        return (
          m[8] !== f ? ((e = (0, l.jsx)(eb, { provider: f, onNameMount: N })), (m[8] = f), (m[9] = e)) : (e = m[9]),
          m[10] !== w || m[11] !== e
            ? ((n = (0, l.jsx)(eg, {
                className: "max-w-full shrink-0",
                as: "span",
                "data-dependency-chip": !0,
                "aria-description": w,
                tabIndex: -1,
                children: e,
              })),
              (m[10] = w),
              (m[11] = e),
              (m[12] = n))
            : (n = m[12]),
          n
        )
      }
      return (
        m[13] !== M || m[14] !== C
          ? ((r = M ? { as: "a", href: C } : { as: "button" }), (m[13] = M), (m[14] = C), (m[15] = r))
          : (r = m[15]),
        m[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (e) => {
              k.current && e.preventDefault()
            }),
            (m[16] = o))
          : (o = m[16]),
        m[17] !== M ||
        m[18] !== x ||
        m[19] !== A.search ||
        m[20] !== j ||
        m[21] !== f.display_name ||
        m[22] !== f.plugin_id
          ? ((d = M
              ? (e) => {
                  ;(0, ep.y)(e, () => {
                    j((0, g.Ctf)({ hostId: x, pluginId: f.plugin_id, browseSearch: A.search }), {
                      state: { pluginDisplayName: f.display_name },
                    })
                  })
                }
              : void 0),
            (m[17] = M),
            (m[18] = x),
            (m[19] = A.search),
            (m[20] = j),
            (m[21] = f.display_name),
            (m[22] = f.plugin_id),
            (m[23] = d))
          : (d = m[23]),
        m[24] !== f ? ((c = (0, l.jsx)(eb, { provider: f, onNameMount: N })), (m[24] = f), (m[25] = c)) : (c = m[25]),
        m[26] !== w || m[27] !== _ || m[28] !== f.display_name || m[29] !== r || m[30] !== d || m[31] !== c
          ? ((u = (0, l.jsx)(eg, {
              className: "max-w-full shrink-0",
              ...r,
              allowShrink: !0,
              muted: _,
              "data-dependency-chip": !0,
              "aria-label": f.display_name,
              "aria-description": w,
              onFocus: o,
              onClick: d,
              children: c,
            })),
            (m[26] = w),
            (m[27] = _),
            (m[28] = f.display_name),
            (m[29] = r),
            (m[30] = d),
            (m[31] = c),
            (m[32] = u))
          : (u = m[32]),
        m[33] !== S || m[34] !== u
          ? ((p = (0, l.jsx)(s.m, { content: S, children: u })), (m[33] = S), (m[34] = u), (m[35] = p))
          : (p = m[35]),
        p
      )
    }
    function eb(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        d,
        c = (0, a.c)(20),
        { provider: u, onNameMount: m } = e,
        g = !1 === u.is_enabled || null != u.availability_status,
        f = g && "opacity-40 grayscale"
      ;(c[0] !== f ? ((n = (0, p.A)("size-5 shrink-0", f)), (c[0] = f), (c[1] = n)) : (n = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, l.jsx)(L.wdY, {})), (c[2] = t)) : (t = c[2]),
        c[3] !== u.icon_url || c[4] !== u.icon_url_dark || c[5] !== n
          ? ((i = (0, l.jsx)(C.R, {
              className: n,
              alt: "",
              logoUrl: u.icon_url,
              logoDarkUrl: u.icon_url_dark,
              fallback: t,
            })),
            (c[3] = u.icon_url),
            (c[4] = u.icon_url_dark),
            (c[5] = n),
            (c[6] = i))
          : (i = c[6]))
      let h = g && "text-tertiary"
      return (
        c[7] !== h ? ((s = (0, p.A)("truncate", h)), (c[7] = h), (c[8] = s)) : (s = c[8]),
        c[9] !== m || c[10] !== u.display_name || c[11] !== s
          ? ((r = (0, l.jsx)("span", { ref: m, className: s, children: u.display_name })),
            (c[9] = m),
            (c[10] = u.display_name),
            (c[11] = s),
            (c[12] = r))
          : (r = c[12]),
        c[13] !== g || c[14] !== u.is_installed
          ? ((o = g || !0 !== u.is_installed ? null : (0, l.jsx)(L.ALZ, { className: "text-tertiary" })),
            (c[13] = g),
            (c[14] = u.is_installed),
            (c[15] = o))
          : (o = c[15]),
        c[16] !== i || c[17] !== r || c[18] !== o
          ? ((d = (0, l.jsxs)(l.Fragment, { children: [i, r, o] })), (c[16] = i), (c[17] = r), (c[18] = o), (c[19] = d))
          : (d = c[19]),
        d
      )
    }
    function ev(e) {
      let n,
        t = (0, a.c)(8),
        { dependencies: i, hostId: s, isError: r, onRetry: o } = e
      if (r) {
        let e, n, a, i
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(b.A, { id: "plugins.dependencies.heading", defaultMessage: "Works with" })), (t[0] = e))
            : (e = t[0]),
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)(b.A, {
                id: "plugins.dependencies.error",
                defaultMessage: "Couldn\u2019t load dependencies",
              })),
              (t[1] = n))
            : (n = t[1]),
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, l.jsx)(b.A, { id: "plugins.dependencies.retry", defaultMessage: "Retry" })), (t[2] = a))
            : (a = t[2]),
          t[3] !== o
            ? ((i = (0, l.jsx)(P.J, {
                showDivider: !1,
                title: e,
                children: (0, l.jsxs)("div", {
                  className: "flex items-center justify-between gap-4 text-sm text-secondary",
                  children: [n, (0, l.jsx)(N.$, { color: "secondary", onClick: o, children: a })],
                }),
              })),
              (t[3] = o),
              (t[4] = i))
            : (i = t[4]),
          i
        )
      }
      return (
        t[5] !== i || t[6] !== s
          ? ((n = (0, l.jsx)(ej, { hostId: s, dependencies: i })), (t[5] = i), (t[6] = s), (t[7] = n))
          : (n = t[7]),
        n
      )
    }
    function ej(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        d,
        c,
        u,
        p = (0, a.c)(22),
        { dependencies: m, hostId: g } = e,
        f = (0, y.A)()
      if (null == m) return null
      if (p[0] !== m || p[1] !== g || p[2] !== f.locale) {
        d = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            a = (function (e, n) {
              let t = new Map()
              for (let n of e)
                for (let e of n.categories) {
                  let l = t.get(e.id)
                  ;(null == l && ((l = { ...e, providers: [] }), t.set(e.id, l)),
                    l.providers.some((e) => e.plugin_id === n.plugin_id) || l.providers.push(n))
                }
              return [...t.values()]
                .sort((e, t) => e.label.localeCompare(t.label, n))
                .map((e) => ({
                  ...e,
                  providers: e.providers.toSorted(
                    (e, n) =>
                      Number(!1 === e.is_enabled || null != e.availability_status) -
                      Number(!1 === n.is_enabled || null != n.availability_status),
                  ),
                }))
            })(m, f.locale)
          if (0 === a.length) {
            d = null
            break e
          }
          ;((n = P.J),
            (s = "plugin-dependencies"),
            (r = !1),
            p[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, l.jsx)(b.A, { id: "plugins.dependencies.heading", defaultMessage: "Works with" })),
                (p[10] = o))
              : (o = p[10]),
            (t = "flex min-w-0 flex-col gap-3 select-none"),
            p[11] !== g
              ? ((e = (e) => (0, l.jsx)(ef, { group: e, hostId: g }, e.id)), (p[11] = g), (p[12] = e))
              : (e = p[12]),
            (i = a.map(e)))
        }
        ;((p[0] = m),
          (p[1] = g),
          (p[2] = f.locale),
          (p[3] = n),
          (p[4] = t),
          (p[5] = i),
          (p[6] = s),
          (p[7] = r),
          (p[8] = o),
          (p[9] = d))
      } else ((n = p[3]), (t = p[4]), (i = p[5]), (s = p[6]), (r = p[7]), (o = p[8]), (d = p[9]))
      return d !== Symbol.for("react.early_return_sentinel")
        ? d
        : (p[13] !== t || p[14] !== i
            ? ((c = (0, l.jsx)("dl", { className: t, children: i })), (p[13] = t), (p[14] = i), (p[15] = c))
            : (c = p[15]),
          p[16] !== n || p[17] !== s || p[18] !== r || p[19] !== o || p[20] !== c
            ? ((u = (0, l.jsx)(n, { id: s, showDivider: r, title: o, children: c })),
              (p[16] = n),
              (p[17] = s),
              (p[18] = r),
              (p[19] = o),
              (p[20] = c),
              (p[21] = u))
            : (u = p[21]),
          u)
    }
    var eA = t("oVqR"),
      ek = t("J3BZ")
    function ew(e) {
      let n,
        t,
        i,
        r,
        o,
        c = (0, a.c)(16),
        { actions: u, badge: p, developerName: m, iconPaths: g, tagline: f, title: h } = e
      return (
        c[0] !== g
          ? ((n = (0, l.jsx)(d.S0, {
              children:
                null == g
                  ? (0, l.jsx)("span", { className: "size-full bg-text/10" })
                  : (0, l.jsx)(C.R, {
                      alt: "",
                      className: "size-full object-contain",
                      logoDarkUrl: g.logoDarkPath,
                      logoUrl: g.logoPath,
                      fallback: (0, l.jsx)(U.I, { className: "text-secondary", "aria-hidden": !1, asset: ek.B }),
                    }),
            })),
            (c[0] = g),
            (c[1] = n))
          : (n = c[1]),
        c[2] !== h
          ? ((t =
              null == h
                ? (0, l.jsx)("span", { className: "h-4 w-24 rounded bg-text/10" })
                : (0, l.jsx)("span", { className: "min-w-0 break-words", children: h })),
            (c[2] = h),
            (c[3] = t))
          : (t = c[3]),
        c[4] !== p || c[5] !== t
          ? ((i = (0, l.jsxs)("h1", {
              className: "heading-base electron:heading-lg flex min-w-0 items-center gap-2 text-default",
              children: [t, p],
            })),
            (c[4] = p),
            (c[5] = t),
            (c[6] = i))
          : (i = c[6]),
        c[7] !== m || c[8] !== f || c[9] !== h
          ? ((r =
              null == h
                ? (0, l.jsx)("div", { className: "h-3 w-3/5 rounded bg-text/10" })
                : (function (e, n) {
                    let t = e?.trim(),
                      a = n
                    if (t && n)
                      a = (0, l.jsx)(b.A, {
                        id: "plugins.detail.developerAndShortDescription",
                        defaultMessage: "By {developerName} \u2022 {shortDescription}",
                        values: { developerName: t, shortDescription: n },
                      })
                    else if (t)
                      a = (0, l.jsx)(b.A, {
                        id: "plugins.detail.developerAttribution",
                        defaultMessage: "By {developerName}",
                        values: { developerName: t },
                      })
                    else if (!n) return null
                    return (0, l.jsx)(s.m, {
                      enabledWhen: "target-overflows",
                      content: a,
                      children: (0, l.jsx)("span", {
                        id: "plugin-description",
                        className: "block truncate text-sm",
                        children: a,
                      }),
                    })
                  })(m, f)),
            (c[7] = m),
            (c[8] = f),
            (c[9] = h),
            (c[10] = r))
          : (r = c[10]),
        c[11] !== u || c[12] !== n || c[13] !== i || c[14] !== r
          ? ((o = (0, l.jsx)(d.k2, { actions: u, asset: n, assetPlacement: "beside", title: i, subtitle: r })),
            (c[11] = u),
            (c[12] = n),
            (c[13] = i),
            (c[14] = r),
            (c[15] = o))
          : (o = c[15]),
        o
      )
    }
    var e_ = t("jEyg"),
      eS = t("JZ8t"),
      eM = t("UwQs"),
      eC = t("QHGm"),
      eN = t("mYWF"),
      eI = t("X86b"),
      eP = t("ijQK"),
      eT = t("cRci"),
      eR = t("i5ac"),
      eU = t.n(eR),
      eL = t("SPnB"),
      eD = t("k7G6"),
      eE = t("gYdj")
    function eB(e) {
      let n,
        t = (0, a.c)(4),
        { templatePluginId: i } = e,
        s = (0, m.Ul)(eL.chatGptAuthenticatedAccountId$),
        r = (0, m.Ul)(S.tT),
        o = (0, m.Ul)(eL.kf)
      if (null == s || r !== s || "loaded" !== o.status) return null
      let d = "workspace" === o.structure ? "WORKSPACE" : "USER"
      return (
        t[0] !== s || t[1] !== d || t[2] !== i
          ? ((n = (0, l.jsx)(e$, { accountId: s, templatePluginId: i, instanceScope: d })),
            (t[0] = s),
            (t[1] = d),
            (t[2] = i),
            (t[3] = n))
          : (n = t[3]),
        n
      )
    }
    function e$(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        c,
        u,
        p = (0, a.c)(28),
        { accountId: g, templatePluginId: f, instanceScope: h } = e
      p[0] !== g || p[1] !== h || p[2] !== f
        ? ((n = { accountId: g, templatePluginId: f, instanceScope: h }),
          (p[0] = g),
          (p[1] = h),
          (p[2] = f),
          (p[3] = n))
        : (n = p[3])
      let {
        data: x,
        isPending: y,
        isError: v,
        isFetchNextPageError: j,
        isFetchingNextPage: A,
        hasNextPage: k,
        fetchNextPage: w,
        refetch: _,
      } = (0, m._U)(eE.PJ, n)
      p[4] !== x?.pages || p[5] !== x?.pages.flatMap
        ? ((t = eU()(x?.pages.flatMap(ez) ?? [], eO)), (p[4] = x?.pages), (p[5] = x?.pages.flatMap), (p[6] = t))
        : (t = p[6])
      let S = t
      if (x?.pages[0] === null || (null != x && !v && 0 === S.length && !k)) return null
      let M = null == x || k ? void 0 : S.length
      return (
        p[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(b.A, { id: "plugins.detail.instances.title", defaultMessage: "Plugins" })), (p[7] = i))
          : (i = p[7]),
        p[8] !== y
          ? ((s = y
              ? (0, l.jsx)("p", {
                  className: "px-[var(--padding-row-x)] text-sm text-secondary",
                  role: "status",
                  children: (0, l.jsx)(b.A, {
                    id: "plugins.detail.instances.loading",
                    defaultMessage: "Loading plugins\u2026",
                  }),
                })
              : null),
            (p[8] = y),
            (p[9] = s))
          : (s = p[9]),
        p[10] !== S
          ? ((r = S.length > 0 ? (0, l.jsx)(eq, { instances: S }) : null), (p[10] = S), (p[11] = r))
          : (r = p[11]),
        p[12] !== w || p[13] !== v || p[14] !== j || p[15] !== _
          ? ((o = v
              ? (0, l.jsxs)("div", {
                  className: "flex items-center justify-between gap-4 px-[var(--padding-row-x)] text-sm text-secondary",
                  children: [
                    (0, l.jsx)(b.A, {
                      id: "plugins.detail.instances.error",
                      defaultMessage: "Couldn\u2019t load plugins",
                    }),
                    (0, l.jsx)(N.$, {
                      color: "secondary",
                      onClick: () => void (j ? w() : _()),
                      children: (0, l.jsx)(b.A, { id: "plugins.detail.instances.retry", defaultMessage: "Retry" }),
                    }),
                  ],
                })
              : null),
            (p[12] = w),
            (p[13] = v),
            (p[14] = j),
            (p[15] = _),
            (p[16] = o))
          : (o = p[16]),
        p[17] !== w || p[18] !== k || p[19] !== v || p[20] !== A
          ? ((c =
              k && !v
                ? (0, l.jsx)(N.$, {
                    color: "secondary",
                    loading: A,
                    onClick: () => void w(),
                    children: (0, l.jsx)(b.A, { id: "plugins.detail.instances.loadMore", defaultMessage: "Load more" }),
                  })
                : null),
            (p[17] = w),
            (p[18] = k),
            (p[19] = v),
            (p[20] = A),
            (p[21] = c))
          : (c = p[21]),
        p[22] !== M || p[23] !== s || p[24] !== r || p[25] !== o || p[26] !== c
          ? ((u = (0, l.jsxs)(d.Ay, {
              id: "plugin-template-instances",
              inset: !1,
              count: M,
              title: i,
              children: [s, r, o, c],
            })),
            (p[22] = M),
            (p[23] = s),
            (p[24] = r),
            (p[25] = o),
            (p[26] = c),
            (p[27] = u))
          : (u = p[27]),
        u
      )
    }
    function eO(e) {
      return e.pluginId
    }
    function ez(e) {
      return e?.instances ?? []
    }
    function eq(e) {
      let n,
        t,
        i,
        s = (0, a.c)(9),
        { instances: r } = e
      s[0] !== r ? ((n = r.map(eW)), (s[0] = r), (s[1] = n)) : (n = s[1])
      let { data: o } = (0, m._U)(ee.hq, n)
      if (s[2] !== r || s[3] !== o) {
        let e
        ;(s[5] !== o
          ? ((e = (e) => {
              let n = o?.get(e.pluginId)
              return (0, l.jsx)(
                H.D,
                {
                  to: (0, eD.l$)(e.pluginId),
                  title: e.name ?? n?.displayName ?? e.pluginId,
                  description: e.description ?? void 0,
                  descriptionClassName: "line-clamp-1",
                  presentation: "row",
                  iconContainerVariant: "outline",
                  icon: (0, l.jsx)(C.R, {
                    alt: "",
                    className: "icon-md",
                    logoUrl: n?.logoPath,
                    logoDarkUrl: n?.logoDarkPath,
                    fallback: (0, l.jsx)(L.wdY, {}),
                  }),
                  trailing: (0, l.jsx)(L.uM3, {
                    "aria-hidden": !0,
                    className: "shrink-0 text-tertiary",
                    "data-rtl-flip": "",
                  }),
                },
                e.pluginId,
              )
            }),
            (s[5] = o),
            (s[6] = e))
          : (e = s[6]),
          (t = r.map(e)),
          (s[2] = r),
          (s[3] = o),
          (s[4] = t))
      } else t = s[4]
      return (s[7] !== t ? ((i = (0, l.jsx)(eI.R, { children: t })), (s[7] = t), (s[8] = i)) : (i = s[8]), i)
    }
    function eW(e) {
      return e.pluginId
    }
    var eZ = t("aFrt"),
      eF = t("Pqsd"),
      eV = t("ueue")
    let eY = (0, x.YK)({
        capabilities: { id: "plugins.detail.information.capabilities", defaultMessage: "Capabilities" },
        category: { id: "plugins.detail.information.category", defaultMessage: "Category" },
        developer: { id: "plugins.detail.information.developer", defaultMessage: "Developer" },
        information: { id: "plugins.detail.information", defaultMessage: "Information" },
        unavailable: { id: "plugins.detail.information.unavailable", defaultMessage: "Unavailable" },
        version: { id: "plugins.detail.information.version", defaultMessage: "Version" },
        disabledByAdminBadge: {
          id: "plugins.detail.includes.disabledByAdminBadge",
          defaultMessage: "Disabled by admin",
        },
        mcpServerDisable: { id: "plugins.detail.mcp.disable", defaultMessage: "Disable MCP server" },
        mcpServerEnable: { id: "plugins.detail.mcp.enable", defaultMessage: "Enable MCP server" },
        mcpServerSettings: { id: "plugins.detail.mcp.settings", defaultMessage: "Open MCP settings" },
        mcpServerSetup: { id: "plugins.detail.mcp.setup", defaultMessage: "Set up in MCP settings" },
        mcpServerToggleAria: { id: "plugins.detail.mcp.toggleAria", defaultMessage: "Toggle MCP server enabled state" },
        hooksSettings: { id: "plugins.detail.hooks.settings", defaultMessage: "Manage in settings" },
        hooksTitle: { id: "plugins.detail.includes.hooks.title", defaultMessage: "Hooks" },
        otherAppCategory: { id: "plugins.detail.includes.apps.otherCategory", defaultMessage: "Other" },
        privacyPolicy: { id: "plugins.detail.information.privacyPolicy", defaultMessage: "Privacy Policy" },
        website: { id: "plugins.detail.information.website", defaultMessage: "Website" },
        termsOfService: { id: "plugins.detail.information.termsOfService", defaultMessage: "Terms of Service" },
      }),
      eG = new Set([
        "connector_gmail",
        "connector_google_bigquery",
        "connector_google_calendar",
        "connector_google_contacts",
        "connector_google_docs",
        "connector_google_drive",
        "connector_google_sheets",
        "connector_google_slides",
      ])
    function eH(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        d,
        c = (0, a.c)(18),
        u = (0, m.gh)(en.u),
        p = (0, y.A)()
      c[0] !== e.errorMessage || c[1] !== e.state
        ? ((n = null),
          "error" === e.state &&
            (n = e.errorMessage?.includes("path does not exist or is not a directory")
              ? "missing_plugin_path"
              : "other"),
          (c[0] = e.errorMessage),
          (c[1] = e.state),
          (c[2] = n))
        : (n = c[2])
      let g = (0, h.useRef)(null)
      ;(c[3] !== n || c[4] !== u
        ? ((t = () => {
            n !== g.current &&
              ((g.current = n), null != n && es.v.warning("plugin_detail_error_shown", { safe: { reason: n } }))
          }),
          (c[3] = n),
          (c[4] = u),
          (c[5] = t))
        : (t = c[5]),
        c[6] !== n || c[7] !== u ? ((i = [n, u]), (c[6] = n), (c[7] = u), (c[8] = i)) : (i = c[8]),
        (0, h.useEffect)(t, i),
        c[9] !== p
          ? ((s = p.formatMessage({ id: "plugins.detail.sectionsNav", defaultMessage: "Plugin sections" })),
            (c[9] = p),
            (c[10] = s))
          : (s = c[10]))
      let f =
        "presentation" in e && "dialog" === e.presentation
          ? "flex min-h-full flex-col p-6"
          : "flex min-h-full flex-col px-toolbar electron:pt-panel electron:pb-panel"
      return (
        c[11] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), (c[11] = r)) : (r = c[11]),
        c[12] !== e
          ? ((o =
              "loading" === e.state
                ? (0, l.jsx)(nt, { plugin: e.plugin, presentation: e.presentation })
                : "error" === e.state
                  ? (0, l.jsx)(eA.PluginDetailEmptyState, { state: "error", description: e.errorMessage ?? void 0 })
                  : "missing" === e.state
                    ? (0, l.jsx)(eA.PluginDetailEmptyState, { state: "missing", description: e.description })
                    : (0, l.jsx)(eK, { ...e })),
            (c[12] = e),
            (c[13] = o))
          : (o = c[13]),
        c[14] !== s || c[15] !== f || c[16] !== o
          ? ((d = (0, l.jsx)(D.k, {
              ariaLabel: s,
              contentInnerClassName: f,
              disableScrollFade: !0,
              scrollContainerClassName: "[&:has([data-plugin-description-transitioning])]:[overflow-anchor:none]",
              showNav: !1,
              sections: r,
              children: o,
            })),
            (c[14] = s),
            (c[15] = f),
            (c[16] = o),
            (c[17] = d))
          : (d = c[17]),
        d
      )
    }
    function eK(e) {
      var n
      let t,
        r,
        o,
        p,
        f,
        x,
        S,
        M,
        C,
        N,
        P,
        T,
        R,
        U,
        L,
        D,
        E,
        B,
        $,
        q,
        W,
        Z,
        F,
        V,
        Y,
        H,
        ee,
        et,
        el,
        ea,
        ei,
        es = (0, a.c)(149),
        {
          settings: er,
          presentation: ed,
          appInstallBlockedReasonsById: ep,
          actions: eg,
          banner: ef,
          apps: eh,
          canonicalAppId: ex,
          appConnections: ey,
          browserExtensions: eb,
          connectedAccounts: ev,
          effectiveConfig: ej,
          hostId: eA,
          hooksNeedingReviewCount: ek,
          installedSkills: e_,
          installBlockedReason: eC,
          isConfigPending: eN,
          isPersonalAccount: eI,
          isPromptInstallBlocked: eT,
          isPublicTemplate: eR,
          isTemplate: eU,
          isAppConnectPending: eL,
          updatingAppId: eD,
          isUpdatingEnabled: eE,
          isUninstalling: e$,
          onActivatePrompt: eO,
          onInstallApp: ez,
          onOpenAppTools: eq,
          onDisconnectApp: eW,
          onOpenPluginSettingsUrl: eY,
          canManageTemplates: eG,
          serviceAppTemplates: eH,
          onManageApps: eK,
          onOpenHooksSettings: e1,
          onTrustAllHooks: e0,
          onSetAppEnabled: e2,
          onSkillsUpdated: e4,
          mcpServers: e5,
          onOpenMcpSettings: e9,
          onToggleMcpServerEnabled: e8,
          plugin: ne,
          pluginScope: nn,
          scheduledTasks: nt,
          showInPluginAppList: nl,
          unavailableSkills: na,
        } = e
      es[0] !== eb ? ((t = void 0 === eb ? [] : eb), (es[0] = eb), (es[1] = t)) : (t = es[1])
      let ni = t,
        ns = void 0 === ek ? 0 : ek,
        nr = void 0 !== eN && eN,
        no = void 0 !== eI && eI,
        nc = void 0 !== eR && eR,
        nm = void 0 !== eU && eU,
        ng = void 0 === eG || eG,
        nf = (0, m.gh)(en.u),
        nh = (0, m._U)(eS.V, eA),
        nx = "dialog" === (void 0 === ed ? "page" : ed) ? "external-browser" : void 0,
        ny = (0, y.A)(),
        nb = (0, v.zy)(),
        nv = (0, v.Zp)(),
        nj = (0, h.useRef)(null)
      if (es[2] !== eh || es[3] !== ev || es[4] !== ne.summary.installed || es[5] !== ne.summary.remotePluginId) {
        let e
        ;(es[7] !== ev || es[8] !== ne.summary.installed || es[9] !== ne.summary.remotePluginId
          ? ((e = (e) => ({
              ...(0, A.rJ)(e.id),
              enabled: !!ev?.accountId && !!ev.userId && ne.summary.installed && null != ne.summary.remotePluginId,
              retry: !1,
            })),
            (es[7] = ev),
            (es[8] = ne.summary.installed),
            (es[9] = ne.summary.remotePluginId),
            (es[10] = e))
          : (e = es[10]),
          (r = eh.map(e)),
          (es[2] = eh),
          (es[3] = ev),
          (es[4] = ne.summary.installed),
          (es[5] = ne.summary.remotePluginId),
          (es[6] = r))
      } else r = es[6]
      es[11] !== r ? ((o = { queries: r }), (es[11] = r), (es[12] = o)) : (o = es[12])
      let nA = (0, c.E)(o)
      es[13] !== eh ||
      es[14] !== ev ||
      es[15] !== nA ||
      es[16] !== ne.summary.installed ||
      es[17] !== ne.summary.remotePluginId
        ? ((p =
            null != ev &&
            ne.summary.installed &&
            null != ne.summary.remotePluginId &&
            nA.some((e, n) => null == e.data || e.isError || (0, k.aW)(eh[n].id, e.data))),
          (es[13] = eh),
          (es[14] = ev),
          (es[15] = nA),
          (es[16] = ne.summary.installed),
          (es[17] = ne.summary.remotePluginId),
          (es[18] = p))
        : (p = es[18])
      let nk = p,
        nw = g.iwv
      es[19] !== nk || es[20] !== nw
        ? ((f = { enabled: nk, hostId: nw, roots: void 0, resolveActiveRoots: !0 }),
          (es[19] = nk),
          (es[20] = nw),
          (es[21] = f))
        : (f = es[21])
      let { data: n_ } = (0, em.Kj)(f)
      es[22] !== ne ? ((x = nd(ne)), (es[22] = ne), (es[23] = x)) : (x = es[23])
      let nS = x
      es[24] !== ne ? ((S = np(ne)), (es[24] = ne), (es[25] = S)) : (S = es[25])
      let nM = S
      es[26] !== ne ? ((M = nu(ne)), (es[26] = ne), (es[27] = M)) : (M = es[27])
      let nC = M,
        nN = nC === nM ? null : nC
      es[28] !== ne.summary.interface?.defaultPrompt
        ? ((C = ne.summary.interface?.defaultPrompt ?? []),
          (es[28] = ne.summary.interface?.defaultPrompt),
          (es[29] = C))
        : (C = es[29])
      let nI = C.map(eQ).filter(eJ),
        nP = 1 === ne.apps.length ? eh[0] : void 0
      es[30] !== ne.summary || es[31] !== nP
        ? ((N = (0, eV.zY)(ne.summary, nP)), (es[30] = ne.summary), (es[31] = nP), (es[32] = N))
        : (N = es[32])
      let nT = N,
        nR = nT.composerIconPath ?? nT.logoPath ?? nT.logoDarkPath,
        nU = eE || e$
      if (es[33] !== eC || es[34] !== ne.summary.disabledReason) {
        if ("installation-unavailable" === eC) P = (0, l.jsx)(b.A, { ...K.H.unavailableExplanation })
        else if ("connector-unavailable" === eC)
          P = (0, l.jsx)(b.A, { id: "plugins.install.connectorUnavailable", defaultMessage: "App unavailable" })
        else {
          let e
          ;(es[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(b.A, { id: "plugins.install.disabledByAdmin", defaultMessage: "Disabled by admin" })),
              (es[36] = e))
            : (e = es[36]),
            (P = (0, l.jsx)(eM.z, { disabledReason: ne.summary.disabledReason, children: e })))
        }
        ;((es[33] = eC), (es[34] = ne.summary.disabledReason), (es[35] = P))
      } else P = es[35]
      let nL = nI.length > 0 || !!nN
      es[37] !== ne
        ? ((T = Array.isArray((n = ne).appTemplates)
            ? n.appTemplates.filter((e) => 0 === e.materializedAppIds.length)
            : []),
          (es[37] = ne),
          (es[38] = T))
        : (T = es[38])
      let nD = T
      es[39] !== eh || es[40] !== nl
        ? ((R = nl ? eh.filter(e6) : []), (es[39] = eh), (es[40] = nl), (es[41] = R))
        : (R = es[41])
      let nE = R,
        nB = nk
          ? n_?.find((e) => {
              let { plugin: n } = e
              return n.remotePluginId === ne.summary.remotePluginId
            })?.canonicalAppId
          : void 0,
        n$ = (0, w.dZ)({ accountId: ev?.accountId, userId: ev?.userId, linkRefreshStrategy: "NONE" }),
        { data: nO } = (0, u.I)({
          ...n$,
          enabled: !!n$.enabled && null != nB,
          staleTime: n$.staleTime,
          select: (e) => null != nB && (0, ec.Tm)(e, nB).length > 0,
        })
      nk && null == n_ && (n$.enabled || eh.some((e) => ev.isAppReauthPending(e.id)))
        ? (U = null)
        : null != ev &&
          ne.summary.installed &&
          null != nB &&
          (n$.enabled ||
            eh.some((e) => (e.isAccessible || ev.isAppReauthPending(e.id) || !1) && (0, k.$)(e.id) === (0, k.$)(nB))) &&
          !1 !== nO &&
          (U = nB)
      let nz = (0, h.useEffectEvent)(() => {
        if (ev?.isConnectorSetupReady && (ne.summary.installed || nc) && void 0 === U && !eT && !nr)
          for (let e of eh) {
            let n = ey?.get((0, k.$)(e.id))
            e.isEnabled &&
              (ne.summary.installed || (n?.canConnect === !0 && !n.isUnavailable && !n.isDisabledByAdmin)) &&
              null == ep[e.id] &&
              null == (0, j.e)(e.id, ej) &&
              (0, J.q)({
                scope: nf,
                accountId: ev?.accountId,
                userId: ev?.userId,
                connectorId: e.id,
                location: nb,
                navigate: nv,
                handledKey: nj,
                intl: ny,
                onSetup: (n) => ez(e, n),
              })
          }
      })
      es[42] !== nz
        ? ((L = () => {
            nz()
          }),
          (es[42] = nz),
          (es[43] = L))
        : (L = es[43])
      let nq = U,
        nW = ev?.accountId,
        nZ = ev?.userId,
        nF = ev?.isConnectorSetupReady
      ;(es[44] !== ey ||
      es[45] !== ep ||
      es[46] !== eh ||
      es[47] !== ej ||
      es[48] !== nr ||
      es[49] !== eT ||
      es[50] !== nc ||
      es[51] !== nb ||
      es[52] !== ne.summary.installed ||
      es[53] !== nq ||
      es[54] !== nW ||
      es[55] !== nZ ||
      es[56] !== nF
        ? ((D = [eh, ey, ep, nq, nW, nZ, nF, ej, nr, eT, nc, nb, ne.summary.installed]),
          (es[44] = ey),
          (es[45] = ep),
          (es[46] = eh),
          (es[47] = ej),
          (es[48] = nr),
          (es[49] = eT),
          (es[50] = nc),
          (es[51] = nb),
          (es[52] = ne.summary.installed),
          (es[53] = nq),
          (es[54] = nW),
          (es[55] = nZ),
          (es[56] = nF),
          (es[57] = D))
        : (D = es[57]),
        (0, h.useEffect)(L, D))
      let nV =
          !nh && null != ev && ne.summary.installed && !1 !== nO && null != nB
            ? eh
                .filter((e) => (0, k.$)(e.id) === (0, k.$)(nB) && e.isEnabled && null == (0, j.e)(e.id, ej))
                .map((e) => (0, l.jsx)(eu.VU, { accountContext: ev, app: e, hostId: eA }, e.id))
            : null,
        nY = d.hD,
        nG = ne.summary.shareContext?.remotePluginId
      ;(es[58] !== ne.summary.id || es[59] !== ne.summary.remotePluginId || es[60] !== nG
        ? ((E = [ne.summary.id, ne.summary.remotePluginId, nG]),
          (es[58] = ne.summary.id),
          (es[59] = ne.summary.remotePluginId),
          (es[60] = nG),
          (es[61] = E))
        : (E = es[61]),
        es[62] !== nS || es[63] !== eA || es[64] !== E
          ? ((B = (0, l.jsx)(eo.f, { hostId: eA, pluginIds: E, pluginName: nS, surface: "detail" })),
            (es[62] = nS),
            (es[63] = eA),
            (es[64] = E),
            (es[65] = B))
          : (B = es[65]),
        es[66] !== eg || es[67] !== B
          ? (($ = (0, l.jsxs)(l.Fragment, { children: [B, eg] })), (es[66] = eg), (es[67] = B), (es[68] = $))
          : ($ = es[68]),
        es[69] !== ne ? ((q = (0, eZ.w8)((0, eV.qA)(ne))), (es[69] = ne), (es[70] = q)) : (q = es[70]),
        es[71] !== nn || es[72] !== q
          ? ((W = { ...q, scope: nn }), (es[71] = nn), (es[72] = q), (es[73] = W))
          : (W = es[73]),
        es[74] !== eA || es[75] !== W
          ? ((Z = (0, l.jsx)(eF.T, { hostId: eA, plugin: W, size: "large" })),
            (es[74] = eA),
            (es[75] = W),
            (es[76] = Z))
          : (Z = es[76]),
        es[77] !== nm ? ((F = nm ? (0, l.jsx)(X.L, {}) : null), (es[77] = nm), (es[78] = F)) : (F = es[78]),
        es[79] !== Z || es[80] !== F
          ? ((V = (0, l.jsxs)(l.Fragment, { children: [Z, F] })), (es[79] = Z), (es[80] = F), (es[81] = V))
          : (V = es[81]))
      let nH = ne.summary.interface?.developerName
      es[82] !== nS || es[83] !== nT || es[84] !== $ || es[85] !== V || es[86] !== nH || es[87] !== nM
        ? ((Y = (0, l.jsx)(ew, { actions: $, badge: V, developerName: nH, iconPaths: nT, tagline: nM, title: nS })),
          (es[82] = nS),
          (es[83] = nT),
          (es[84] = $),
          (es[85] = V),
          (es[86] = nH),
          (es[87] = nM),
          (es[88] = Y))
        : (Y = es[88])
      let nK = nL
        ? (0, l.jsxs)("div", {
            className: I.m,
            children: [
              nI.length > 0
                ? (0, l.jsx)("div", {
                    className: "flex flex-col",
                    children: (0, l.jsx)(d.Tg, {
                      background: `url("${_}")`,
                      children: nI.map((e, n) =>
                        (0, l.jsx)(
                          s.m,
                          {
                            content: P,
                            disabled: !eT,
                            children: (0, l.jsxs)(d.mr, {
                              disabled: eT,
                              pending: nU,
                              arrow: (0, l.jsx)(z.A, { "aria-hidden": !0, className: "icon-2xs -scale-x-100" }),
                              onClick: (t) => eO(e, n, t),
                              children: [
                                (0, l.jsx)(G.VE, {
                                  brandColor: ne.summary.interface?.brandColor ?? void 0,
                                  displayName: nS,
                                  fallbackIcon: O.A,
                                  fallbackName: ne.summary.id,
                                  iconSmall: nR ?? "",
                                }),
                                " ",
                                e,
                              ],
                            }),
                          },
                          `${e}-${n}`,
                        ),
                      ),
                    }),
                  })
                : null,
              nN
                ? (0, l.jsx)("div", {
                    className: "min-w-0 px-[var(--detail-page-inline-inset)]",
                    children: (0, l.jsx)(Q.W, { openTarget: nx, children: nN }, nN),
                  })
                : null,
            ],
          })
        : null
      ;(es[89] !== ni || es[90] !== ne
        ? ((H = (0, l.jsx)(eP.s, { plugin: ne, browserExtensions: ni })), (es[89] = ni), (es[90] = ne), (es[91] = H))
        : (H = es[91]),
        es[92] !== nm || es[93] !== ne.summary.remotePluginId
          ? ((ee =
              nm && null != ne.summary.remotePluginId
                ? (0, l.jsx)(eB, { templatePluginId: ne.summary.remotePluginId })
                : null),
            (es[92] = nm),
            (es[93] = ne.summary.remotePluginId),
            (es[94] = ee))
          : (ee = es[94]))
      let nJ = ex ?? nB
      return (
        es[95] !== ey ||
        es[96] !== ep ||
        es[97] !== nE ||
        es[98] !== ng ||
        es[99] !== U ||
        es[100] !== nV ||
        es[101] !== ej ||
        es[102] !== ns ||
        es[103] !== eA ||
        es[104] !== nT.logoPath ||
        es[105] !== e_ ||
        es[106] !== eL ||
        es[107] !== nr ||
        es[108] !== no ||
        es[109] !== nc ||
        es[110] !== e5 ||
        es[111] !== eW ||
        es[112] !== ez ||
        es[113] !== eK ||
        es[114] !== eq ||
        es[115] !== e1 ||
        es[116] !== e9 ||
        es[117] !== eY ||
        es[118] !== e2 ||
        es[119] !== e4 ||
        es[120] !== e8 ||
        es[121] !== e0 ||
        es[122] !== ne ||
        es[123] !== nt ||
        es[124] !== eH ||
        es[125] !== er ||
        es[126] !== nJ ||
        es[127] !== na ||
        es[128] !== nD ||
        es[129] !== eD
          ? ((et = (0, l.jsx)(e7, {
              connectButtonImpressionSurface: i.do.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
              settings: er,
              appInstallBlockedReasonsById: ep,
              apps: nE,
              appConnections: ey,
              unconfiguredAppTemplates: nD,
              connectedAccountsSection: nV,
              canonicalAppId: nJ,
              effectiveConfig: ej,
              connectedAccountCanonicalAppId: U,
              hostId: eA,
              installedSkills: e_,
              isConfigPending: nr,
              isAppConnectPending: eL,
              isPersonalAccount: no,
              isPublicTemplate: nc,
              mcpServers: e5,
              onInstallApp: ez,
              onOpenHooksSettings: e1,
              onTrustAllHooks: e0,
              hooksNeedingReviewCount: ns,
              onOpenMcpSettings: e9,
              onOpenAppTools: eq,
              onDisconnectApp: eW,
              onOpenPluginSettingsUrl: eY,
              canManageTemplates: ng,
              serviceAppTemplates: eH,
              onManageApps: eK,
              onSetAppEnabled: e2,
              plugin: ne,
              pluginLogoUrl: nT.logoPath,
              scheduledTasks: nt,
              onSkillsUpdated: e4,
              onToggleMcpServerEnabled: e8,
              unavailableSkills: na,
              updatingAppId: eD,
            })),
            (es[95] = ey),
            (es[96] = ep),
            (es[97] = nE),
            (es[98] = ng),
            (es[99] = U),
            (es[100] = nV),
            (es[101] = ej),
            (es[102] = ns),
            (es[103] = eA),
            (es[104] = nT.logoPath),
            (es[105] = e_),
            (es[106] = eL),
            (es[107] = nr),
            (es[108] = no),
            (es[109] = nc),
            (es[110] = e5),
            (es[111] = eW),
            (es[112] = ez),
            (es[113] = eK),
            (es[114] = eq),
            (es[115] = e1),
            (es[116] = e9),
            (es[117] = eY),
            (es[118] = e2),
            (es[119] = e4),
            (es[120] = e8),
            (es[121] = e0),
            (es[122] = ne),
            (es[123] = nt),
            (es[124] = eH),
            (es[125] = er),
            (es[126] = nJ),
            (es[127] = na),
            (es[128] = nD),
            (es[129] = eD),
            (es[130] = et))
          : (et = es[130]),
        es[131] !== nx || es[132] !== ne
          ? ((el = (0, l.jsx)(e3, { plugin: ne, openTarget: nx })), (es[131] = nx), (es[132] = ne), (es[133] = el))
          : (el = es[133]),
        es[134] !== eh || es[135] !== nx || es[136] !== ne || es[137] !== nD
          ? ((ea = (0, l.jsx)(eX, { openTarget: nx, apps: eh, appTemplates: nD, plugin: ne })),
            (es[134] = eh),
            (es[135] = nx),
            (es[136] = ne),
            (es[137] = nD),
            (es[138] = ea))
          : (ea = es[138]),
        es[139] !== nY ||
        es[140] !== ef ||
        es[141] !== Y ||
        es[142] !== nK ||
        es[143] !== H ||
        es[144] !== ee ||
        es[145] !== et ||
        es[146] !== el ||
        es[147] !== ea
          ? ((ei = (0, l.jsxs)(nY, { children: [ef, Y, nK, H, ee, et, el, ea] })),
            (es[139] = nY),
            (es[140] = ef),
            (es[141] = Y),
            (es[142] = nK),
            (es[143] = H),
            (es[144] = ee),
            (es[145] = et),
            (es[146] = el),
            (es[147] = ea),
            (es[148] = ei))
          : (ei = es[148]),
        ei
      )
    }
    function eJ(e) {
      return e.length > 0
    }
    function eQ(e) {
      return e.trim()
    }
    function eX(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        d,
        c = (0, a.c)(24),
        { openTarget: u, apps: p, appTemplates: m, plugin: g } = e,
        f = p.length + m.length
      if (0 === f) return null
      let h = g.summary.interface
      c[0] !== m || c[1] !== p ? ((n = p.some(e0) || m.some(e1)), (c[0] = m), (c[1] = p), (c[2] = n)) : (n = c[2])
      let x = n
      c[3] !== u
        ? ((t = (e) =>
            (0, l.jsx)(e2, {
              openTarget: u,
              href: "https://help.openai.com/en/articles/8590148-memory-faq",
              children: e,
            })),
          (c[3] = u),
          (c[4] = t))
        : (t = c[4])
      let y = t
      c[5] !== u
        ? ((i = (e) =>
            (0, l.jsx)(e2, {
              openTarget: u,
              href: "https://help.openai.com/en/articles/20001062-elevated-risk-labels",
              children: e,
            })),
          (c[5] = u),
          (c[6] = i))
        : (i = c[6])
      let v = i
      c[7] !== u
        ? ((s = (e) =>
            (0, l.jsx)(e2, {
              openTarget: u,
              href: "https://help.openai.com/en/articles/11487775-apps-in-chatgpt",
              children: e,
            })),
          (c[7] = u),
          (c[8] = s))
        : (s = c[8])
      let j = s
      return (
        c[9] !== f ||
        c[10] !== v ||
        c[11] !== j ||
        c[12] !== y ||
        c[13] !== u ||
        c[14] !== g ||
        c[15] !== h?.privacyPolicyUrl ||
        c[16] !== h?.termsOfServiceUrl
          ? ((r = (0, l.jsx)("p", {
              children:
                1 === f
                  ? (0, l.jsx)(b.A, {
                      id: "plugins.detail.legalNotice.singleApp",
                      defaultMessage:
                        "When connected to {pluginName}, ChatGPT may share relevant chats and memories with this app to help provide context for your requests. {pluginName}\u2019s use of this data is subject to their <termsLink>terms</termsLink> and <privacyPolicyLink>privacy policy</privacyPolicyLink>. If you have <memoryLink>Memory</memoryLink> enabled, data from the app may be used to proactively provide helpful information or suggestions. ChatGPT always respects your training data preferences, including for data from connected apps. Use of apps may come with <elevatedRiskLink>elevated risk</elevatedRiskLink>. You can manage your preferences or disconnect from apps anytime in your settings. <learnMoreLink>Learn more</learnMoreLink>",
                      values: {
                        pluginName: nd(g),
                        termsLink: (e) => (0, l.jsx)(e2, { openTarget: u, href: h?.termsOfServiceUrl, children: e }),
                        privacyPolicyLink: (e) =>
                          (0, l.jsx)(e2, { openTarget: u, href: h?.privacyPolicyUrl, children: e }),
                        memoryLink: y,
                        elevatedRiskLink: v,
                        learnMoreLink: j,
                      },
                    })
                  : (0, l.jsx)(b.A, {
                      id: "plugins.detail.legalNotice.multipleApps",
                      defaultMessage:
                        "This plugin may contain one or more apps, as listed above. When connected to an app, ChatGPT may share relevant chats and memories with the app to help provide context for your requests. An app\u2019s use of this data is subject to their terms and privacy policy, which can be found on the app\u2019s page. If you have <memoryLink>Memory</memoryLink> enabled, data from the app may be used to proactively provide helpful information or suggestions. ChatGPT always respects your training data preferences, including for data from connected apps. Use of apps may come with <elevatedRiskLink>elevated risk</elevatedRiskLink>. You can manage your preferences or disconnect from apps anytime in your settings. <learnMoreLink>Learn more</learnMoreLink>",
                      values: { memoryLink: y, elevatedRiskLink: v, learnMoreLink: j },
                    }),
            })),
            (c[9] = f),
            (c[10] = v),
            (c[11] = j),
            (c[12] = y),
            (c[13] = u),
            (c[14] = g),
            (c[15] = h?.privacyPolicyUrl),
            (c[16] = h?.termsOfServiceUrl),
            (c[17] = r))
          : (r = c[17]),
        c[18] !== x || c[19] !== u
          ? ((o = x
              ? (0, l.jsx)("p", {
                  children: (0, l.jsx)(b.A, {
                    id: "plugins.detail.legalNotice.googleApps",
                    defaultMessage:
                      "Note on Google apps: This plugin may contain one or more Google apps, as listed above. Any data synced from these apps may be used to provide you with relevant and personalized information. We do not train generalized models on this data or derivations of it, except those submitted in feedback or included in ChatGPT\u2019s response. You can delete your conversations, which will also delete any app data used in those conversations. <learnMoreLink>Learn more</learnMoreLink>",
                    values: {
                      learnMoreLink: (e) =>
                        (0, l.jsx)(e2, {
                          openTarget: u,
                          href: "https://help.openai.com/en/articles/10408842-google-app-for-chatgpt-data-controls-faq",
                          children: e,
                        }),
                    },
                  }),
                })
              : null),
            (c[18] = x),
            (c[19] = u),
            (c[20] = o))
          : (o = c[20]),
        c[21] !== r || c[22] !== o
          ? ((d = (0, l.jsxs)("div", {
              className:
                "flex flex-col gap-3 px-[var(--detail-page-inline-inset)] text-sm leading-5 text-tertiary select-text",
              children: [r, o],
            })),
            (c[21] = r),
            (c[22] = o),
            (c[23] = d))
          : (d = c[23]),
        d
      )
    }
    function e1(e) {
      return null != e.canonicalConnectorId && eG.has(e.canonicalConnectorId)
    }
    function e0(e) {
      return e.branding?.developer?.trim().toLowerCase() === "google" || eG.has(e.id)
    }
    function e2(e) {
      let n,
        t,
        i = (0, a.c)(7),
        { children: s, href: r, openTarget: o } = e
      return null == r
        ? s
        : (i[0] !== r || i[1] !== o
            ? ((n = (e) => {
                ;(0, T.PQ)({ event: e, href: r, openTarget: o, initiator: "open_in_browser_bridge" })
              }),
              (i[0] = r),
              (i[1] = o),
              (i[2] = n))
            : (n = i[2]),
          i[3] !== s || i[4] !== r || i[5] !== n
            ? ((t = (0, l.jsx)("a", {
                className: "cursor-interaction text-link-primary! underline! underline-offset-2",
                href: r,
                onClick: n,
                children: s,
              })),
              (i[3] = s),
              (i[4] = r),
              (i[5] = n),
              (i[6] = t))
            : (t = i[6]),
          t)
    }
    function e3(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        c,
        u,
        p,
        m,
        g,
        f,
        h,
        x,
        v,
        j = (0, a.c)(41),
        { plugin: A, openTarget: k } = e,
        w = (0, y.A)(),
        _ = A.summary.interface
      if (null == _) return null
      j[0] !== _.category ? ((n = _.category?.trim()), (j[0] = _.category), (j[1] = n)) : (n = j[1])
      let S = n
      j[2] !== _.developerName ? ((t = _.developerName?.trim()), (j[2] = _.developerName), (j[3] = t)) : (t = j[3])
      let M = t
      j[4] !== _.capabilities ? ((i = _.capabilities?.join(", ")), (j[4] = _.capabilities), (j[5] = i)) : (i = j[5])
      let C = i
      j[6] !== A.summary.localVersion || j[7] !== A.summary.version
        ? ((s = (A.summary.localVersion ?? A.summary.version)?.trim()),
          (j[6] = A.summary.localVersion),
          (j[7] = A.summary.version),
          (j[8] = s))
        : (s = j[8])
      let N = s
      if (!(M || S || C || N || _.websiteUrl || _.privacyPolicyUrl || _.termsOfServiceUrl)) return null
      ;(j[9] !== C
        ? ((r = C
            ? (0, l.jsx)(d.M2, {
                align: "start",
                label: (0, l.jsx)(b.A, { ...eY.capabilities }),
                children: (0, l.jsx)(e4, { text: C }),
              })
            : null),
          (j[9] = C),
          (j[10] = r))
        : (r = j[10]),
        j[11] !== M
          ? ((o = M ? (0, l.jsx)(d.M2, { label: (0, l.jsx)(b.A, { ...eY.developer }), children: M }) : null),
            (j[11] = M),
            (j[12] = o))
          : (o = j[12]),
        j[13] !== S
          ? ((c = S ? (0, l.jsx)(d.M2, { label: (0, l.jsx)(b.A, { ...eY.category }), children: S }) : null),
            (j[13] = S),
            (j[14] = c))
          : (c = j[14]),
        j[15] !== N
          ? ((u = N ? (0, l.jsx)(d.M2, { label: (0, l.jsx)(b.A, { ...eY.version }), children: N }) : null),
            (j[15] = N),
            (j[16] = u))
          : (u = j[16]),
        j[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, l.jsx)(b.A, { ...eY.website })), (j[17] = p))
          : (p = j[17]),
        j[18] !== w || j[19] !== k || j[20] !== _.websiteUrl
          ? ((m = (0, l.jsx)(d.M2, {
              label: p,
              children: _.websiteUrl
                ? (0, l.jsx)(no, { openTarget: k, ariaLabel: w.formatMessage(eY.website), href: _.websiteUrl })
                : (0, l.jsx)(b.A, { ...eY.unavailable }),
            })),
            (j[18] = w),
            (j[19] = k),
            (j[20] = _.websiteUrl),
            (j[21] = m))
          : (m = j[21]),
        j[22] !== w || j[23] !== k || j[24] !== _.privacyPolicyUrl
          ? ((g = _.privacyPolicyUrl
              ? (0, l.jsx)(d.M2, {
                  label: (0, l.jsx)(b.A, { ...eY.privacyPolicy }),
                  children: (0, l.jsx)(no, {
                    openTarget: k,
                    ariaLabel: w.formatMessage(eY.privacyPolicy),
                    href: _.privacyPolicyUrl,
                  }),
                })
              : null),
            (j[22] = w),
            (j[23] = k),
            (j[24] = _.privacyPolicyUrl),
            (j[25] = g))
          : (g = j[25]),
        j[26] !== w || j[27] !== k || j[28] !== _.termsOfServiceUrl
          ? ((f = _.termsOfServiceUrl
              ? (0, l.jsx)(d.M2, {
                  label: (0, l.jsx)(b.A, { ...eY.termsOfService }),
                  children: (0, l.jsx)(no, {
                    openTarget: k,
                    ariaLabel: w.formatMessage(eY.termsOfService),
                    href: _.termsOfServiceUrl,
                  }),
                })
              : null),
            (j[26] = w),
            (j[27] = k),
            (j[28] = _.termsOfServiceUrl),
            (j[29] = f))
          : (f = j[29]),
        j[30] !== m || j[31] !== g || j[32] !== f || j[33] !== r || j[34] !== o || j[35] !== c || j[36] !== u
          ? ((h = (0, l.jsxs)(l.Fragment, { children: [r, o, c, u, m, g, f] })),
            (j[30] = m),
            (j[31] = g),
            (j[32] = f),
            (j[33] = r),
            (j[34] = o),
            (j[35] = c),
            (j[36] = u),
            (j[37] = h))
          : (h = j[37]))
      let I = h
      return (
        j[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, l.jsx)(b.A, { ...eY.information })), (j[38] = x))
          : (x = j[38]),
        j[39] !== I
          ? ((v = (0, l.jsx)(d.Ay, {
              id: "plugin-information",
              title: x,
              children: (0, l.jsx)("dl", { children: I }),
            })),
            (j[39] = I),
            (j[40] = v))
          : (v = j[40]),
        v
      )
    }
    function e4(e) {
      let n,
        t,
        i,
        s,
        r,
        o = (0, a.c)(14),
        { text: d } = e
      o[0] !== d
        ? ((n = { text: d, collapsedLineCount: 3, fallbackFontSizePx: 13 }), (o[0] = d), (o[1] = n))
        : (n = o[1])
      let { setTextContentMeasurementRef: c, collapseState: u, handleToggleExpansion: m } = (0, $.ee)(n),
        g = "collapsed" === u && "line-clamp-3"
      return (
        o[2] !== g ? ((t = (0, p.A)(g)), (o[2] = g), (o[3] = t)) : (t = o[3]),
        o[4] !== c || o[5] !== t || o[6] !== d
          ? ((i = (0, l.jsx)("div", { ref: c, className: t, children: d })),
            (o[4] = c),
            (o[5] = t),
            (o[6] = d),
            (o[7] = i))
          : (i = o[7]),
        o[8] !== u || o[9] !== m
          ? ((s =
              "uncollapsible" !== u
                ? (0, l.jsx)("button", {
                    className:
                      "mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-base text-codex-description select-none hover:text-default",
                    type: "button",
                    "aria-expanded": "expanded" === u,
                    onClick: m,
                    children:
                      "expanded" === u
                        ? (0, l.jsx)(b.A, {
                            id: "plugins.detail.information.capabilities.showLess",
                            defaultMessage: "Show less",
                          })
                        : (0, l.jsx)(b.A, {
                            id: "plugins.detail.information.capabilities.showMore",
                            defaultMessage: "Show more",
                          }),
                  })
                : null),
            (o[8] = u),
            (o[9] = m),
            (o[10] = s))
          : (s = o[10]),
        o[11] !== i || o[12] !== s
          ? ((r = (0, l.jsxs)("div", { children: [i, s] })), (o[11] = i), (o[12] = s), (o[13] = r))
          : (r = o[13]),
        r
      )
    }
    function e5(e) {
      let n,
        t,
        i,
        r,
        o,
        d,
        c,
        u,
        m,
        g,
        f,
        h,
        x,
        j,
        A = (0, a.c)(38),
        { enabled: k, installed: w, logoUrl: _, name: S, onOpenSettings: M, onToggleEnabled: I } = e,
        P = (0, y.A)(),
        T = (0, v.$P)("/settings/mcp-settings"),
        R = w && !k && "opacity-60"
      return (
        A[0] !== R ? ((n = (0, p.A)("group", R)), (A[0] = R), (A[1] = n)) : (n = A[1]),
        A[2] !== S ? ((t = nc(S)), (A[2] = S), (A[3] = t)) : (t = A[3]),
        A[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(Z.A, { className: "icon-xs text-secondary" })), (A[4] = i))
          : (i = A[4]),
        A[5] !== _ || A[6] !== t
          ? ((r = (0, l.jsx)(na, {
              children: (0, l.jsx)(C.R, { alt: t, className: "icon-sm", logoUrl: _, fallback: i }),
            })),
            (A[5] = _),
            (A[6] = t),
            (A[7] = r))
          : (r = A[7]),
        A[8] !== S ? ((o = nc(S)), (A[8] = S), (A[9] = o)) : (o = A[9]),
        A[10] !== w
          ? ((d = w ? (0, l.jsx)(b.A, { ...eY.mcpServerSettings }) : (0, l.jsx)(b.A, { ...eY.mcpServerSetup })),
            (A[10] = w),
            (A[11] = d))
          : (d = A[11]),
        A[12] !== w || A[13] !== P
          ? ((c = w ? P.formatMessage(eY.mcpServerSettings) : P.formatMessage(eY.mcpServerSetup)),
            (A[12] = w),
            (A[13] = P),
            (A[14] = c))
          : (c = A[14]),
        A[15] !== M ? ((u = (e) => (0, ep.y)(e, M)), (A[15] = M), (A[16] = u)) : (u = A[16]),
        A[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, l.jsx)(V.A, { className: "icon-sm" })), (A[17] = m))
          : (m = A[17]),
        A[18] !== T || A[19] !== c || A[20] !== u
          ? ((g = (0, l.jsx)(N.z, {
              href: T,
              color: "ghost",
              size: "toolbar",
              uniform: !0,
              "aria-label": c,
              onClick: u,
              children: m,
            })),
            (A[18] = T),
            (A[19] = c),
            (A[20] = u),
            (A[21] = g))
          : (g = A[21]),
        A[22] !== g || A[23] !== d
          ? ((f = (0, l.jsx)(s.m, { content: d, children: g })), (A[22] = g), (A[23] = d), (A[24] = f))
          : (f = A[24]),
        A[25] !== k || A[26] !== w || A[27] !== P || A[28] !== I
          ? ((h = w
              ? (0, l.jsx)(s.m, {
                  content: k ? (0, l.jsx)(b.A, { ...eY.mcpServerDisable }) : (0, l.jsx)(b.A, { ...eY.mcpServerEnable }),
                  children: (0, l.jsx)(B.l, {
                    checked: k,
                    ariaLabel: P.formatMessage(eY.mcpServerToggleAria),
                    onChange: I,
                  }),
                })
              : null),
            (A[25] = k),
            (A[26] = w),
            (A[27] = P),
            (A[28] = I),
            (A[29] = h))
          : (h = A[29]),
        A[30] !== f || A[31] !== h
          ? ((x = (0, l.jsxs)(l.Fragment, { children: [f, h] })), (A[30] = f), (A[31] = h), (A[32] = x))
          : (x = A[32]),
        A[33] !== x || A[34] !== n || A[35] !== r || A[36] !== o
          ? ((j = (0, l.jsx)(H.D, {
              actionsPlacement: "center",
              className: n,
              icon: r,
              iconContainer: !1,
              iconPlacement: "inline",
              presentation: "row",
              title: o,
              actions: x,
            })),
            (A[33] = x),
            (A[34] = n),
            (A[35] = r),
            (A[36] = o),
            (A[37] = j))
          : (j = A[37]),
        j
      )
    }
    function e6(e) {
      let n = e.name.trim()
      return n.length > 0 && n !== e.id && n !== (0, k.$)(e.id)
    }
    function e7(e) {
      let n,
        t,
        i,
        o,
        c,
        f,
        h,
        x,
        v,
        A,
        w,
        _,
        N,
        T,
        R,
        L,
        D,
        E,
        B,
        $,
        O,
        z,
        q,
        W,
        Z,
        V = (0, a.c)(157),
        {
          connectButtonImpressionSurface: Y,
          settings: G,
          appInstallBlockedReasonsById: H,
          apps: K,
          appConnections: J,
          unconfiguredAppTemplates: Q,
          connectedAccountsSection: X,
          canonicalAppId: en,
          effectiveConfig: et,
          connectedAccountCanonicalAppId: es,
          hooksNeedingReviewCount: eo,
          hostId: ec,
          installedSkills: eu,
          isConfigPending: ep,
          isAppConnectPending: eg,
          mcpServers: ef,
          isPersonalAccount: eh,
          isPublicTemplate: ex,
          onInstallApp: ey,
          onOpenHooksSettings: eb,
          onTrustAllHooks: ej,
          onOpenMcpSettings: eA,
          onOpenAppTools: ek,
          onDisconnectApp: ew,
          onOpenPluginSettingsUrl: eP,
          canManageTemplates: eR,
          serviceAppTemplates: eU,
          onManageApps: eL,
          onSetAppEnabled: eD,
          plugin: eE,
          pluginLogoUrl: eB,
          scheduledTasks: e$,
          onSkillsUpdated: eO,
          onToggleMcpServerEnabled: ez,
          unavailableSkills: eq,
          updatingAppId: eW,
        } = e,
        eZ = (0, y.A)(),
        eF = (0, ei.Zj)("3449856777"),
        eV = (0, m._U)(eS.V, ec),
        eG = (0, ei.Zj)("1064857188"),
        eH = (0, ei.Fj)("2029197928"),
        eK = (0, m.Ul)(S.tT),
        eJ = (0, m.Ul)(S.Sk),
        eQ = eE.summary.remotePluginId ?? eE.summary.shareContext?.remotePluginId,
        eX = eQ ?? ((0, g.PWx)(eE.summary.id) ? eE.summary.id : null)
      V[0] !== eK || V[1] !== eF || V[2] !== eX || V[3] !== ec
        ? ((n = eF && (ec === el.fI || (0, em.hE)(ec)) && null != eK && null != eX),
          (V[0] = eK),
          (V[1] = eF),
          (V[2] = eX),
          (V[3] = ec),
          (V[4] = n))
        : (n = V[4])
      let e1 = n
      ;(V[5] !== eK || V[6] !== eX
        ? ((t = (0, ee.K0)(eK, eX, void 0, "catalog")), (V[5] = eK), (V[6] = eX), (V[7] = t))
        : (t = V[7]),
        V[8] !== e1 || V[9] !== ec ? ((i = e1 && !(0, em.hE)(ec)), (V[8] = e1), (V[9] = ec), (V[10] = i)) : (i = V[10]),
        V[11] !== t || V[12] !== i
          ? ((o = { ...t, enabled: i, staleTime: 0, refetchOnMount: "always" }), (V[11] = t), (V[12] = i), (V[13] = o))
          : (o = V[13]))
      let { data: e0, isError: e2, isLoading: e3, refetch: e4 } = (0, u.I)(o)
      V[14] !== e1 || V[15] !== e0 || V[16] !== e2
        ? ((c = e1 && (e2 || e0?.plugin.dependencies?.some(nn) === !0)),
          (V[14] = e1),
          (V[15] = e0),
          (V[16] = e2),
          (V[17] = c))
        : (c = V[17])
      let e7 = c
      V[18] !== eX || V[19] !== eH || V[20] !== e7
        ? ((f = e7 && null != eX && eH.get("plugin_ids", []).includes(eX)),
          (V[18] = eX),
          (V[19] = eH),
          (V[20] = e7),
          (V[21] = f))
        : (f = V[21])
      let nt = !f && !e3
      ;(V[22] !== K || V[23] !== nt ? ((h = nt ? K : []), (V[22] = K), (V[23] = nt), (V[24] = h)) : (h = V[24]),
        V[25] !== h ? ((x = new Set(h.map(ne))), (V[25] = h), (V[26] = x)) : (x = V[26]))
      let no = x
      if (
        V[27] !== J ||
        V[28] !== H ||
        V[29] !== K ||
        V[30] !== eR ||
        V[31] !== en ||
        V[32] !== Y ||
        V[33] !== es ||
        V[34] !== X ||
        V[35] !== e0 ||
        V[36] !== eG ||
        V[37] !== eV ||
        V[38] !== et ||
        V[39] !== eo ||
        V[40] !== ec ||
        V[41] !== eu ||
        V[42] !== eZ ||
        V[43] !== eg ||
        V[44] !== ep ||
        V[45] !== e2 ||
        V[46] !== e3 ||
        V[47] !== eh ||
        V[48] !== ex ||
        V[49] !== ef ||
        V[50] !== ew ||
        V[51] !== ey ||
        V[52] !== eL ||
        V[53] !== ek ||
        V[54] !== eA ||
        V[55] !== eP ||
        V[56] !== eD ||
        V[57] !== eO ||
        V[58] !== ez ||
        V[59] !== ej ||
        V[60] !== eE ||
        V[61] !== eB ||
        V[62] !== e4 ||
        V[63] !== eQ ||
        V[64] !== e$ ||
        V[65] !== eU ||
        V[66] !== G ||
        V[67] !== eJ ||
        V[68] !== nt ||
        V[69] !== e7 ||
        V[70] !== eq ||
        V[71] !== Q ||
        V[72] !== eW ||
        V[73] !== no
      ) {
        O = Symbol.for("react.early_return_sentinel")
        e: {
          let e, n, t, a, i, o
          V[88] !== no
            ? ((e = (e) =>
                ("app" !== e.kind || e6(e.app)) && (null == e.manifestAppId || !no.has((0, k.$)(e.manifestAppId)))),
              (V[88] = no),
              (V[89] = e))
            : (e = V[89])
          let c = ef.filter(e)
          if (!(
            null != G ||
            (X?.length ?? 0) > 0 ||
            (null != e$ && e$.items.length > 0) ||
            (nt && (K.length > 0 || Q.length > 0)) ||
            c.length > 0 ||
            eu.length > 0 ||
            eq.length > 0 ||
            eE.hooks.length > 0 ||
            e3 ||
            e7
          )) {
            O = null
            break e
          }
          V[90] !== eR || V[91] !== ec || V[92] !== eh || V[93] !== eE.appTemplates?.length || V[94] !== eQ
            ? ((n = eR && null != eQ && 1 ? (0, eN.x1)(eQ, eE.appTemplates?.length ?? 0) : void 0),
              (V[90] = eR),
              (V[91] = ec),
              (V[92] = eh),
              (V[93] = eE.appTemplates?.length),
              (V[94] = eQ),
              (V[95] = n))
            : (n = V[95])
          let u = n,
            m = K.length
          if (V[96] !== eU || V[97] !== u || V[98] !== Q) {
            let e
            ;(V[100] !== eU || V[101] !== u
              ? ((e = (e) => null == u || !eU?.some((n) => n.template_id === e.templateId && !0 === n.can_setup)),
                (V[100] = eU),
                (V[101] = u),
                (V[102] = e))
              : (e = V[102]),
              (t = Q.filter(e)),
              (V[96] = eU),
              (V[97] = u),
              (V[98] = Q),
              (V[99] = t))
          } else t = V[99]
          let g = m + t.length,
            f = Q.length > 1 || (1 === Q.length && "required_app_unavailable" !== eE.summary.disabledReason)
          V[103] !== H ? ((a = (e) => "disabled-by-admin" !== H[e.id]), (V[103] = H), (V[104] = a)) : (a = V[104])
          let h = K.filter(a)
          V[105] !== H ? ((i = (e) => "disabled-by-admin" === H[e.id]), (V[105] = H), (V[106] = i)) : (i = V[106])
          let x = K.filter(i),
            y = eZ.formatMessage(eY.otherAppCategory),
            S = (function (e) {
              let n = new Map()
              for (let t of e) {
                let e = n.get(t.category)
                if (null == e) {
                  n.set(t.category, [t])
                  continue
                }
                e.push(t)
              }
              return [...n].map(([e, n]) => ({ category: e, items: n }))
            })([
              ...h.map((e) => ({ app: e, category: ns(e.branding?.category, y), isDisabledByAdmin: !1, kind: "app" })),
              ...x.map((e) => ({ app: e, category: ns(e.branding?.category, y), isDisabledByAdmin: !0, kind: "app" })),
              ...Q.map((e) => ({ category: ns(e.category, y), kind: "template", template: e })),
            ]),
            q = S.length > 1
          v = eo > 0 && null != ej
          let W = eZ.formatMessage({
            id: "plugins.detail.scheduledTasks.customSchedule",
            defaultMessage: "Custom schedule",
          })
          ;((B = "plugin-includes"),
            ($ = "contents [--radius-token-row:var(--radius-lg)]"),
            V[107] === Symbol.for("react.memo_cache_sentinel")
              ? ((z = (0, p.A)(I.m, "empty:hidden")), (V[107] = z))
              : (z = V[107]),
            V[108] !== e3
              ? ((A = e3 ? (0, l.jsx)(nl, { announceLoading: !0 }) : null), (V[108] = e3), (V[109] = A))
              : (A = V[109]),
            (w =
              nt && (g > 0 || f)
                ? (0, l.jsx)(d.Ay, {
                    inset: !1,
                    count: g > 0 ? g : void 0,
                    title:
                      0 === g
                        ? (0, l.jsx)(b.A, { id: "plugins.detail.includes.appSetup.title", defaultMessage: "App setup" })
                        : (0, l.jsx)(b.A, { id: "plugins.detail.includes.apps.title", defaultMessage: "Apps" }),
                    children: (0, l.jsx)("div", {
                      className: "flex flex-col gap-3",
                      children: S.map((e, n) =>
                        (0, l.jsxs)(
                          "div",
                          {
                            className: (0, p.A)("flex flex-col gap-2", q && n > 0 && "pt-2"),
                            children: [
                              q
                                ? (0, l.jsx)("div", {
                                    className: "px-[var(--padding-row-x)] text-sm text-tertiary",
                                    children: e.category,
                                  })
                                : null,
                              (0, l.jsx)(eI.R, {
                                previewItems: e.items.map(ni),
                                children: e.items.map((e) => {
                                  var n, t, a
                                  let i
                                  if ("template" === e.kind)
                                    return (0, l.jsx)(
                                      ed.D,
                                      {
                                        template: e.template,
                                        managementUrl: eU?.some(
                                          (n) => n.template_id === e.template.templateId && !0 === n.can_setup,
                                        )
                                          ? u
                                          : void 0,
                                        onManageApps: eL,
                                      },
                                      `app-template-${e.template.templateId}`,
                                    )
                                  let r = null != en && (0, k.$)(e.app.id) === (0, k.$)(en)
                                  return (
                                    eV && r && e.app.isAccessible
                                      ? (i = !1)
                                      : !e.isDisabledByAdmin &&
                                        null != u &&
                                        eU?.some((n) =>
                                          n.instances?.some(
                                            (n) => "USER" === n.scope && (0, k.$)(n.id) === (0, k.$)(e.app.id),
                                          ),
                                        ) &&
                                        (i = (0, l.jsx)(ed.u, { href: u, onManageApps: eL })),
                                    (0, l.jsx)(
                                      ea.S,
                                      {
                                        app: e.app,
                                        connectButtonImpressionSurface: Y,
                                        connectionAction: i,
                                        appRestriction: (0, j.e)(e.app.id, et),
                                        cardIconContainerVariant: "outline",
                                        disabledTooltip:
                                          ((n = e.isDisabledByAdmin),
                                          (t =
                                            "connector-unavailable" === H[e.app.id] ||
                                            J?.get((0, k.$)(e.app.id))?.isUnavailable === !0),
                                          (a = eE.summary),
                                          n
                                            ? (0, l.jsx)(b.A, {
                                                id: "plugins.detail.includes.appAdminDisabledExplanation",
                                                defaultMessage:
                                                  "This app isn\u2019t enabled for your workspace. Contact your admin to enable it",
                                              })
                                            : t
                                              ? (0, l.jsx)(b.A, {
                                                  id: "plugins.detail.includes.appUnavailableExplanation",
                                                  defaultMessage: "This app isn\u2019t available",
                                                })
                                              : (0, er.Ei)(a)
                                                ? (0, l.jsx)(eM.z, {
                                                    disabledReason: a.disabledReason,
                                                    children: (0, l.jsx)(b.A, {
                                                      id: "plugins.detail.includes.pluginDisabledExplanation",
                                                      defaultMessage:
                                                        "This app can\u2019t be used while the plugin is disabled",
                                                    }),
                                                  })
                                                : null),
                                        blockedStatusLabel: e.isDisabledByAdmin
                                          ? (0, l.jsx)(s.m, {
                                              content: (0, l.jsx)(b.A, { ...eY.disabledByAdminBadge }),
                                              children: (0, l.jsx)("span", {
                                                role: "img",
                                                "aria-label": eZ.formatMessage(eY.disabledByAdminBadge),
                                                onPointerMove: e8,
                                                children: (0, l.jsx)(F.A, { className: "icon-sm shrink-0" }),
                                              }),
                                            })
                                          : void 0,
                                        installBlockedReason: e.isDisabledByAdmin ? "disabled-by-admin" : null,
                                        isConfigPending: ep,
                                        isConnectingApp: eg(e.app.id),
                                        canReconnect: J?.get((0, k.$)(e.app.id))?.canReconnect,
                                        requiresReauth: J?.get((0, k.$)(e.app.id))?.requiresReauth,
                                        isConnectionUnavailable: J?.get((0, k.$)(e.app.id))?.isUnavailable,
                                        hideAppConnectionDropdown:
                                          null === es || (null != es && (0, k.$)(e.app.id) === (0, k.$)(es)),
                                        installedStateAction: eE.summary.installed ? "toggle" : "check",
                                        manageAction: "menu",
                                        remotePluginId: eQ,
                                        presentation: "row",
                                        showInstallAction: eE.summary.installed
                                          ? J?.get((0, k.$)(e.app.id))?.canConnect !== !1
                                          : ex && J?.get((0, k.$)(e.app.id))?.canConnect === !0,
                                        updatingAppId: eW,
                                        onInstallApp: ey,
                                        onOpenAppTools: ek,
                                        onDisconnectApp: ew,
                                        onOpenPluginSettingsUrl: eP,
                                        onSetAppEnabled: eD,
                                      },
                                      `app-${e.app.id}`,
                                    )
                                  )
                                }),
                              }),
                            ],
                          },
                          e.category,
                        ),
                      ),
                    }),
                  })
                : null),
            (_ = X),
            (N =
              c.length > 0
                ? (0, l.jsx)(P.J, {
                    disableContentInlineInset: !0,
                    count: c.length,
                    title: (0, l.jsx)(b.A, {
                      id: "plugins.detail.includes.mcpServers.title",
                      defaultMessage: "MCP servers",
                    }),
                    children: (0, l.jsx)(eI.R, {
                      children: c.map((e) =>
                        "app" === e.kind
                          ? (0, l.jsx)(
                              ea.S,
                              {
                                app: e.app,
                                connectButtonImpressionSurface: Y,
                                appRestriction: (0, j.e)(e.app.id, et),
                                cardIcon: (0, l.jsx)(na, {
                                  children: (0, l.jsx)(C.R, {
                                    alt: e.app.name,
                                    appInfo: e.app,
                                    className: "icon-sm",
                                    fallback: (0, l.jsx)(U.I, {
                                      className: "text-secondary",
                                      "aria-hidden": !1,
                                      asset: r.W,
                                    }),
                                  }),
                                }),
                                cardIconContainer: !1,
                                cardIconPlacement: "inline",
                                cardDescriptionPlacement: "inline",
                                isConfigPending: ep,
                                isConnectingApp: eg(e.app.id),
                                canReconnect: J?.get((0, k.$)(e.app.id))?.canReconnect,
                                installedStateAction: eE.summary.installed ? "toggle" : "check",
                                manageAction: "menu",
                                remotePluginId: eQ,
                                presentation: "row",
                                showInstallAction:
                                  eE.summary.installed && J?.get((0, k.$)(e.app.id))?.canConnect !== !1,
                                updatingAppId: eW,
                                onInstallApp: ey,
                                onOpenAppTools: ek,
                                onDisconnectApp: ew,
                                onOpenPluginSettingsUrl: eP,
                                onSetAppEnabled: eD,
                              },
                              `mcp-app-${e.app.id}`,
                            )
                          : (0, l.jsx)(
                              e5,
                              {
                                enabled: e.enabled,
                                installed: e.installed,
                                logoUrl: eB,
                                name: e.name,
                                onOpenSettings: eA,
                                onToggleEnabled: (n) => {
                                  null != e.configKey && ez(e.configKey, n)
                                },
                              },
                              `mcp-config-${e.name}`,
                            ),
                      ),
                    }),
                  })
                : null),
            (T = G),
            V[110] !== e3 ? ((R = e3 ? (0, l.jsx)(nl, {}) : null), (V[110] = e3), (V[111] = R)) : (R = V[111]),
            V[112] !== e0 || V[113] !== ec || V[114] !== e2 || V[115] !== e3 || V[116] !== e4 || V[117] !== e7
              ? ((L =
                  !e3 && e7
                    ? (0, l.jsx)(ev, {
                        dependencies: e0?.plugin.dependencies,
                        hostId: ec,
                        isError: e2,
                        onRetry: () => void e4(),
                      })
                    : null),
                (V[112] = e0),
                (V[113] = ec),
                (V[114] = e2),
                (V[115] = e3),
                (V[116] = e4),
                (V[117] = e7),
                (V[118] = L))
              : (L = V[118]),
            V[119] !== eG || V[120] !== eV || V[121] !== ec || V[122] !== eE.summary || V[123] !== eJ
              ? ((o = eV && eG && (null != eJ || null == (0, e_.qP)(eE.summary, ec))),
                (V[119] = eG),
                (V[120] = eV),
                (V[121] = ec),
                (V[122] = eE.summary),
                (V[123] = eJ),
                (V[124] = o))
              : (o = V[124]),
            V[125] !== ec || V[126] !== eu || V[127] !== eO || V[128] !== eE || V[129] !== o || V[130] !== eq
              ? ((D = (0, l.jsx)(eT.j, {
                  hostId: ec,
                  hideCardActions: o,
                  plugin: eE,
                  installedSkills: eu,
                  unavailableSkills: eq,
                  onSkillsUpdated: eO,
                })),
                (V[125] = ec),
                (V[126] = eu),
                (V[127] = eO),
                (V[128] = eE),
                (V[129] = o),
                (V[130] = eq),
                (V[131] = D))
              : (D = V[131]),
            (E =
              null != e$ && e$.items.length > 0
                ? (0, l.jsx)(P.J, {
                    id: "plugin-scheduled-tasks",
                    disableContentInlineInset: !0,
                    count: e$.items.length,
                    title: (0, l.jsx)(b.A, { id: "plugins.detail.scheduledTasks", defaultMessage: "Scheduled" }),
                    children: (0, l.jsx)(eI.R, {
                      previewItems: e$.items.map(e9),
                      children: e$.items.map((e) =>
                        (0, l.jsx)(
                          eC.I,
                          {
                            hostId: ec,
                            scheduleLabel: (0, M.em)({ rrule: e.rrule, intl: eZ, fallbackMessage: W }) ?? W,
                            template: e,
                            onSetUpTemplate: e$.onSetUpTemplate,
                          },
                          e.key,
                        ),
                      ),
                    }),
                  })
                : null))
        }
        ;((V[27] = J),
          (V[28] = H),
          (V[29] = K),
          (V[30] = eR),
          (V[31] = en),
          (V[32] = Y),
          (V[33] = es),
          (V[34] = X),
          (V[35] = e0),
          (V[36] = eG),
          (V[37] = eV),
          (V[38] = et),
          (V[39] = eo),
          (V[40] = ec),
          (V[41] = eu),
          (V[42] = eZ),
          (V[43] = eg),
          (V[44] = ep),
          (V[45] = e2),
          (V[46] = e3),
          (V[47] = eh),
          (V[48] = ex),
          (V[49] = ef),
          (V[50] = ew),
          (V[51] = ey),
          (V[52] = eL),
          (V[53] = ek),
          (V[54] = eA),
          (V[55] = eP),
          (V[56] = eD),
          (V[57] = eO),
          (V[58] = ez),
          (V[59] = ej),
          (V[60] = eE),
          (V[61] = eB),
          (V[62] = e4),
          (V[63] = eQ),
          (V[64] = e$),
          (V[65] = eU),
          (V[66] = G),
          (V[67] = eJ),
          (V[68] = nt),
          (V[69] = e7),
          (V[70] = eq),
          (V[71] = Q),
          (V[72] = eW),
          (V[73] = no),
          (V[74] = v),
          (V[75] = A),
          (V[76] = w),
          (V[77] = _),
          (V[78] = N),
          (V[79] = T),
          (V[80] = R),
          (V[81] = L),
          (V[82] = D),
          (V[83] = E),
          (V[84] = B),
          (V[85] = $),
          (V[86] = O),
          (V[87] = z))
      } else
        ((v = V[74]),
          (A = V[75]),
          (w = V[76]),
          (_ = V[77]),
          (N = V[78]),
          (T = V[79]),
          (R = V[80]),
          (L = V[81]),
          (D = V[82]),
          (E = V[83]),
          (B = V[84]),
          ($ = V[85]),
          (O = V[86]),
          (z = V[87]))
      return O !== Symbol.for("react.early_return_sentinel")
        ? O
        : (V[132] !== eo ||
          V[133] !== ec ||
          V[134] !== eb ||
          V[135] !== ej ||
          V[136] !== eE.hooks.length ||
          V[137] !== eE.summary.id ||
          V[138] !== eE.summary.installed ||
          V[139] !== v
            ? ((q =
                eE.hooks.length > 0
                  ? (0, l.jsx)(P.J, {
                      disableContentInlineInset: !0,
                      title: (0, l.jsx)(b.A, { ...eY.hooksTitle }),
                      children: (0, l.jsx)(nr, {
                        hostId: ec,
                        pluginId: eE.summary.id,
                        hooksNeedingReviewCount: eo,
                        installed: eE.summary.installed,
                        onOpenHooksSettings: eb,
                        onTrustAllHooks: ej,
                        shouldShowReviewActions: v,
                      }),
                    })
                  : null),
              (V[132] = eo),
              (V[133] = ec),
              (V[134] = eb),
              (V[135] = ej),
              (V[136] = eE.hooks.length),
              (V[137] = eE.summary.id),
              (V[138] = eE.summary.installed),
              (V[139] = v),
              (V[140] = q))
            : (q = V[140]),
          V[141] !== A ||
          V[142] !== w ||
          V[143] !== _ ||
          V[144] !== N ||
          V[145] !== T ||
          V[146] !== R ||
          V[147] !== L ||
          V[148] !== D ||
          V[149] !== E ||
          V[150] !== q ||
          V[151] !== z
            ? ((W = (0, l.jsxs)("div", { className: z, children: [A, w, _, N, T, R, L, D, E, q] })),
              (V[141] = A),
              (V[142] = w),
              (V[143] = _),
              (V[144] = N),
              (V[145] = T),
              (V[146] = R),
              (V[147] = L),
              (V[148] = D),
              (V[149] = E),
              (V[150] = q),
              (V[151] = z),
              (V[152] = W))
            : (W = V[152]),
          V[153] !== B || V[154] !== $ || V[155] !== W
            ? ((Z = (0, l.jsx)("div", { id: B, className: $, children: W })),
              (V[153] = B),
              (V[154] = $),
              (V[155] = W),
              (V[156] = Z))
            : (Z = V[156]),
          Z)
    }
    function e9(e) {
      return { icon: (0, l.jsx)(q.A, { className: "size-3.5 text-secondary" }), key: e.key, label: e.name }
    }
    function e8(e) {
      e.stopPropagation()
    }
    function ne(e) {
      return (0, k.$)(e.id)
    }
    function nn(e) {
      return e.categories.length > 0
    }
    function nt(e) {
      let n,
        t,
        i,
        s,
        r,
        o,
        d,
        c,
        u,
        m,
        g,
        f,
        h = (0, a.c)(32),
        { plugin: x, presentation: y } = e
      h[0] !== x ? ((n = null == x ? null : (0, eV.zY)(x.summary)), (h[0] = x), (h[1] = n)) : (n = h[1])
      let b = n
      h[2] !== x ? ((t = null == x ? null : nu(x)), (h[2] = x), (h[3] = t)) : (t = h[3])
      let v = t
      h[4] !== x ? ((i = null == x ? null : np(x)), (h[4] = x), (h[5] = i)) : (i = h[5])
      let j = i,
        A = "dialog" === y ? "external-browser" : void 0,
        k = null == x || void 0,
        w = null == x && "motion-safe:animate-pulse"
      ;(h[6] !== w ? ((s = (0, p.A)(w)), (h[6] = w), (h[7] = s)) : (s = h[7]),
        h[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, l.jsx)("div", {
              "aria-hidden": !0,
              className: "h-token-button-composer w-14 rounded-lg bg-text/10 motion-safe:animate-pulse",
            })),
            (h[8] = r))
          : (r = h[8]))
      let _ = x?.summary.interface?.developerName
      return (
        h[9] !== x ? ((o = null == x ? void 0 : nd(x)), (h[9] = x), (h[10] = o)) : (o = h[10]),
        h[11] !== b || h[12] !== _ || h[13] !== o || h[14] !== j
          ? ((d = (0, l.jsx)(ew, { actions: r, developerName: _, iconPaths: b, tagline: j, title: o })),
            (h[11] = b),
            (h[12] = _),
            (h[13] = o),
            (h[14] = j),
            (h[15] = d))
          : (d = h[15]),
        h[16] !== d || h[17] !== k || h[18] !== s
          ? ((c = (0, l.jsx)("div", { "aria-hidden": k, className: s, children: d })),
            (h[16] = d),
            (h[17] = k),
            (h[18] = s),
            (h[19] = c))
          : (c = h[19]),
        h[20] !== v || h[21] !== A || h[22] !== j
          ? ((u =
              v && v !== j
                ? (0, l.jsx)("div", {
                    className: "min-w-0 px-[var(--detail-page-inline-inset)]",
                    children: (0, l.jsx)(Q.W, { openTarget: A, children: v }),
                  })
                : null),
            (h[20] = v),
            (h[21] = A),
            (h[22] = j),
            (h[23] = u))
          : (u = h[23]),
        h[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, l.jsxs)("div", {
              className: I.m,
              children: [(0, l.jsx)(nl, { announceLoading: !0 }), (0, l.jsx)(nl, {})],
            })),
            (h[24] = m))
          : (m = h[24]),
        h[25] !== A || h[26] !== x
          ? ((g = null == x ? null : (0, l.jsx)(e3, { plugin: x, openTarget: A })),
            (h[25] = A),
            (h[26] = x),
            (h[27] = g))
          : (g = h[27]),
        h[28] !== c || h[29] !== u || h[30] !== g
          ? ((f = (0, l.jsxs)(I.P, { children: [c, u, m, g] })), (h[28] = c), (h[29] = u), (h[30] = g), (h[31] = f))
          : (f = h[31]),
        f
      )
    }
    function nl(e) {
      let n,
        t,
        i,
        s,
        r = (0, a.c)(8),
        { announceLoading: o } = e,
        d = void 0 !== o && o,
        c = d ? "status" : void 0,
        u = !d || void 0
      return (
        r[0] !== d
          ? ((n = d
              ? (0, l.jsx)("span", {
                  className: "sr-only",
                  children: (0, l.jsx)(b.A, {
                    id: "plugins.detail.includes.loading",
                    defaultMessage: "Loading plugin details\u2026",
                  }),
                })
              : null),
            (r[0] = d),
            (r[1] = n))
          : (n = r[1]),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)("div", { "aria-hidden": !0, className: "h-4 w-24 rounded bg-text/10" })),
            (i = (0, l.jsx)("div", { "aria-hidden": !0, className: "h-12 rounded-lg bg-text/10" })),
            (r[2] = t),
            (r[3] = i))
          : ((t = r[2]), (i = r[3])),
        r[4] !== c || r[5] !== u || r[6] !== n
          ? ((s = (0, l.jsxs)("div", {
              className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset)] motion-safe:animate-pulse",
              role: c,
              "aria-hidden": u,
              children: [n, t, i],
            })),
            (r[4] = c),
            (r[5] = u),
            (r[6] = n),
            (r[7] = s))
          : (s = r[7]),
        s
      )
    }
    function na(e) {
      let n,
        t = (0, a.c)(2),
        { children: i } = e
      return (
        t[0] !== i
          ? ((n = (0, l.jsx)("span", {
              className: "flex size-10 shrink-0 items-center justify-center rounded-md",
              children: i,
            })),
            (t[0] = i),
            (t[1] = n))
          : (n = t[1]),
        n
      )
    }
    function ni(e) {
      return "app" === e.kind
        ? {
            icon: (0, l.jsx)(C.R, {
              alt: "",
              appInfo: e.app,
              className: "icon-xs",
              fallback: (0, l.jsx)(E.bF, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset16: r.W,
                legacyIcon: W.A,
                legacyClassName: "icon-2xs",
              }),
            }),
            key: `app-${e.app.id}`,
            label: e.app.name,
          }
        : {
            icon: (0, l.jsx)(C.R, {
              alt: "",
              className: "icon-xs",
              logoDarkUrl: e.template.logoUrlDark,
              logoUrl: e.template.logoUrl,
              fallback: (0, l.jsx)(E.bF, {
                className: "text-secondary",
                "aria-hidden": !1,
                asset16: r.W,
                legacyIcon: W.A,
                legacyClassName: "icon-2xs",
              }),
            }),
            key: `template-${e.template.templateId}`,
            label: e.template.name,
          }
    }
    function ns(e, n) {
      return (0, f.g)(e?.trim() || n, { style: "sentence" })
    }
    function nr(e) {
      let n,
        t,
        i,
        r,
        d,
        c,
        u,
        p = (0, a.c)(36),
        {
          hostId: m,
          pluginId: g,
          hooksNeedingReviewCount: f,
          installed: h,
          onOpenHooksSettings: x,
          onTrustAllHooks: j,
          shouldShowReviewActions: A,
        } = e,
        k = (0, y.A)()
      p[0] !== m || p[1] !== g
        ? ((n = (0, et.NZ)({ hostId: m, pluginId: g, source: "plugin" })), (p[0] = m), (p[1] = g), (p[2] = n))
        : (n = p[2])
      let w = (0, v.$P)(n),
        _ = null
      if (h && A) {
        let e, n, t, a, i, s
        ;(p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(b.A, { id: "plugins.detail.includes.hooks.trustAll", defaultMessage: "Trust all" })),
            (p[3] = e))
          : (e = p[3]),
          p[4] !== j
            ? ((n = (0, l.jsx)(N.$, { color: "secondary", onClick: j, children: e })), (p[4] = j), (p[5] = n))
            : (n = p[5]),
          p[6] !== x ? ((t = (e) => (0, ep.y)(e, x)), (p[6] = x), (p[7] = t)) : (t = p[7]),
          p[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, l.jsx)(b.A, { id: "plugins.detail.includes.hooks.review", defaultMessage: "Review" })),
              (p[8] = a))
            : (a = p[8]),
          p[9] !== w || p[10] !== t
            ? ((i = (0, l.jsx)(N.z, { color: "secondary", href: w, onClick: t, children: a })),
              (p[9] = w),
              (p[10] = t),
              (p[11] = i))
            : (i = p[11]),
          p[12] !== n || p[13] !== i
            ? ((s = (0, l.jsxs)("span", { className: "flex items-center gap-2", children: [n, i] })),
              (p[12] = n),
              (p[13] = i),
              (p[14] = s))
            : (s = p[14]),
          (_ = s))
      } else if (h) {
        let e, n, t, a, i
        ;(p[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(b.A, { ...eY.hooksSettings })), (p[15] = e))
          : (e = p[15]),
          p[16] !== k ? ((n = k.formatMessage(eY.hooksSettings)), (p[16] = k), (p[17] = n)) : (n = p[17]),
          p[18] !== x ? ((t = (e) => (0, ep.y)(e, x)), (p[18] = x), (p[19] = t)) : (t = p[19]),
          p[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, l.jsx)(V.A, { className: "icon-sm" })), (p[20] = a))
            : (a = p[20]),
          p[21] !== w || p[22] !== n || p[23] !== t
            ? ((i = (0, l.jsx)(s.m, {
                content: e,
                children: (0, l.jsx)(N.z, {
                  href: w,
                  color: "ghost",
                  size: "toolbar",
                  uniform: !0,
                  "aria-label": n,
                  onClick: t,
                  children: a,
                }),
              })),
              (p[21] = w),
              (p[22] = n),
              (p[23] = t),
              (p[24] = i))
            : (i = p[24]),
          (_ = i))
      }
      return (
        p[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(b.A, {
              id: "plugins.detail.includes.hooks.description",
              defaultMessage: "Run deterministic scripts during the task lifecycle",
            })),
            (p[25] = t))
          : (t = p[25]),
        p[26] !== f || p[27] !== A
          ? ((i = A
              ? (0, l.jsxs)("span", {
                  className: "flex items-center gap-1 text-default",
                  children: [
                    (0, l.jsx)(E.bF, {
                      className: "shrink-0 text-warning",
                      "aria-hidden": !1,
                      asset16: o.c,
                      legacyIcon: Y.A,
                      legacyClassName: "icon-2xs",
                    }),
                    (0, l.jsx)(b.A, {
                      id: "plugins.detail.includes.hooks.needsReview",
                      defaultMessage:
                        "{count, plural, one {# hook needs review before it can run} other {# hooks need review before they can run}}",
                      values: { count: f },
                    }),
                  ],
                })
              : null),
            (p[26] = f),
            (p[27] = A),
            (p[28] = i))
          : (i = p[28]),
        p[29] !== i
          ? ((r = (0, l.jsxs)("div", { className: "flex flex-col gap-1", children: [t, i] })), (p[29] = i), (p[30] = r))
          : (r = p[30]),
        p[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, l.jsx)(L.Kgi, { className: "text-secondary" })), (p[31] = d))
          : (d = p[31]),
        p[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, l.jsx)(b.A, { ...eY.hooksTitle })), (p[32] = c))
          : (c = p[32]),
        p[33] !== _ || p[34] !== r
          ? ((u = (0, l.jsx)(H.D, {
              actions: _,
              actionsPlacement: "center",
              description: r,
              descriptionClassName: "text-xs leading-4",
              icon: d,
              iconContainerVariant: "outline",
              presentation: "row",
              title: c,
            })),
            (p[33] = _),
            (p[34] = r),
            (p[35] = u))
          : (u = p[35]),
        u
      )
    }
    function no(e) {
      let n,
        t,
        i,
        s = (0, a.c)(9),
        { ariaLabel: r, href: o, openTarget: d } = e
      return (
        s[0] !== o || s[1] !== d
          ? ((n = (e) => {
              ;(0, T.PQ)({ event: e, href: o, openTarget: d, initiator: "open_in_browser_bridge" })
            }),
            (t = (0, l.jsx)(R.g, { size: 16, href: o, openTarget: d })),
            (s[0] = o),
            (s[1] = d),
            (s[2] = n),
            (s[3] = t))
          : ((n = s[2]), (t = s[3])),
        s[4] !== r || s[5] !== o || s[6] !== n || s[7] !== t
          ? ((i = (0, l.jsx)("a", {
              "aria-label": r,
              className:
                "relative isolate inline-flex size-5 cursor-interaction items-center justify-center rounded-md text-default! outline-none before:absolute before:-inset-1 before:-z-10 before:rounded-md before:content-[''] hover:before:bg-secondary-ghost-hover focus-visible:before:ring-1 focus-visible:before:ring-ring",
              href: o,
              onClick: n,
              children: t,
            })),
            (s[4] = r),
            (s[5] = o),
            (s[6] = n),
            (s[7] = t),
            (s[8] = i))
          : (i = s[8]),
        i
      )
    }
    function nd(e) {
      return e.summary.interface?.displayName ?? e.summary.name
    }
    function nc(e) {
      return 0 === e.length ? e : `${e[0].toUpperCase()}${e.slice(1)}`
    }
    function nu(e) {
      return (
        [e.summary.interface?.longDescription, e.description, e.summary.interface?.shortDescription].find((e) =>
          e?.trim(),
        ) ?? null
      )
    }
    function np(e) {
      return (
        [e.summary.interface?.shortDescription, e.description, e.summary.interface?.longDescription].find((e) =>
          e?.trim(),
        ) ?? null
      )
    }
  },
  MGnB(e, n, t) {
    let l = (0, t("ESTr").a)({
      name: "circle-grid-2x2-connect-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.974609, y: 1.974609, width: 12.050781, height: 12.047852 },
        visualBounds: { x: 1.974609, y: 1.974609, width: 12.050781, height: 12.047852 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.974609, y: 1.974609, width: 12.050781, height: 12.047852 },
        center: { x: 8, y: 7.998535 },
        insets: { top: 1.974609, right: 1.97461, bottom: 1.977539, left: 1.974609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.998535 }, foreground: { x: 8, y: 7.998535 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.334 1.97461C12.8202 1.97505 14.0254 3.1807 14.0254 4.66699C14.0252 6.15314 12.8201 7.35796 11.334 7.3584C10.7802 7.3584 10.265 7.19104 9.83691 6.9043L6.9043 9.83691C7.19035 10.2646 7.3584 10.778 7.3584 11.3311C7.35822 12.8174 6.1533 14.0223 4.66699 14.0225C3.18053 14.0225 1.97479 12.8175 1.97461 11.3311C1.97461 9.84449 3.18043 8.63867 4.66699 8.63867C5.22082 8.63874 5.73517 8.80679 6.16309 9.09375L9.09473 6.16211C8.80832 5.73446 8.64167 5.22024 8.6416 4.66699C8.6416 3.18043 9.84742 1.97461 11.334 1.97461ZM4.66699 9.68945C3.76032 9.68945 3.02539 10.4244 3.02539 11.3311C3.02557 12.2376 3.76043 12.9727 4.66699 12.9727C5.5734 12.9725 6.30842 12.2375 6.30859 11.3311C6.30859 10.4245 5.57351 9.68963 4.66699 9.68945ZM11.334 3.02539C10.4273 3.02539 9.69238 3.76032 9.69238 4.66699C9.69256 5.57351 10.4274 6.30859 11.334 6.30859C12.2402 6.30815 12.9754 5.57324 12.9756 4.66699C12.9756 3.7606 12.2403 3.02583 11.334 3.02539Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.334 8.63867C12.8202 8.63911 14.0254 9.84476 14.0254 11.3311C14.0252 12.8172 12.8201 14.022 11.334 14.0225C9.84753 14.0225 8.64178 12.8175 8.6416 11.3311C8.6416 9.84449 9.84742 8.63867 11.334 8.63867ZM11.334 9.68945C10.4273 9.68945 9.69238 10.4244 9.69238 11.3311C9.69256 12.2376 10.4274 12.9727 11.334 12.9727C12.2402 12.9722 12.9754 12.2373 12.9756 11.3311C12.9756 10.4247 12.2403 9.68989 11.334 9.68945Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66699 1.97461C6.15341 1.97479 7.3584 3.18053 7.3584 4.66699C7.35822 6.1533 6.1533 7.35822 4.66699 7.3584C3.18053 7.3584 1.97479 6.15341 1.97461 4.66699C1.97461 3.18043 3.18043 1.97461 4.66699 1.97461ZM4.66699 3.02539C3.76032 3.02539 3.02539 3.76032 3.02539 4.66699C3.02557 5.57351 3.76043 6.30859 4.66699 6.30859C5.5734 6.30842 6.30842 5.5734 6.30859 4.66699C6.30859 3.76043 5.57351 3.02557 4.66699 3.02539Z" fill="currentColor"/>',
    })
    t.d(n, {}, { W: l })
  },
}
//# sourceMappingURL=74892.c785770f67.js.map
